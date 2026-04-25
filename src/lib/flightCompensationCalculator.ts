import {
  type CompensationAirport,
  isAirportInEuUkChEea,
} from "@/lib/compensationAirports";

export type CarrierJurisdiction = "eu_uk_ch_eea" | "other";
export type FlightDisruption = "delay" | "cancelled" | "denied_boarding" | "missed_connection";
export type DelayBand = "under_2h" | "2_to_3h" | "3_to_4h" | "over_4h";
export type CancellationNotice = "14_plus_days" | "7_to_13_days" | "under_7_days";
export type ReplacementFlight =
  | "none"
  | "within_legal_window"
  | "limited_delay"
  | "major_delay";
export type DeniedBoardingReason = "passenger_fault" | "airline_fault";
export type ExtraordinaryCircumstances = "no" | "yes" | "unknown";
export type RouteBand = "short" | "medium" | "long";
export type EligibilityStatus = "eligible" | "not_eligible" | "needs_review";
export type ReasonCode =
  | "out_of_scope"
  | "delay_under_three_hours"
  | "covered_departure_area"
  | "covered_arrival_carrier"
  | "delay_threshold_met"
  | "missed_connection_threshold_met"
  | "cancellation_notice_fourteen_days"
  | "replacement_within_legal_window"
  | "replacement_limited_delay_reduction"
  | "cancellation_compensable"
  | "denied_boarding_passenger_fault"
  | "denied_boarding_airline_fault"
  | "extraordinary_circumstances_review";

export type CompensationInput = {
  from: CompensationAirport | null;
  to: CompensationAirport | null;
  carrierJurisdiction: CarrierJurisdiction;
  disruption: FlightDisruption | null;
  delayBand?: DelayBand | null;
  cancellationNotice?: CancellationNotice | null;
  replacementFlight?: ReplacementFlight | null;
  deniedBoardingReason?: DeniedBoardingReason | null;
  extraordinaryCircumstances?: ExtraordinaryCircumstances | null;
};

export type CompensationResult = {
  status: EligibilityStatus;
  amount: number;
  baseAmount: number;
  distanceKm: number;
  routeBand: RouteBand;
  inPassengerRightsScope: boolean;
  departureCovered: boolean;
  arrivalCoveredByCarrier: boolean;
  intraEuUkChEea: boolean;
  reducedByHalf: boolean;
  conditionalOnExtraordinaryCircumstances: boolean;
  reasons: ReasonCode[];
};

export function calculateGreatCircleDistanceKm(
  from: Pick<CompensationAirport, "lat" | "lon">,
  to: Pick<CompensationAirport, "lat" | "lon">,
) {
  const radiusKm = 6371;
  const toRad = (degrees: number) => (degrees * Math.PI) / 180;
  const dLat = toRad(to.lat - from.lat);
  const dLon = toRad(to.lon - from.lon);
  const lat1 = toRad(from.lat);
  const lat2 = toRad(to.lat);
  const haversine =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;

  return Math.round(2 * radiusKm * Math.asin(Math.sqrt(haversine)));
}

export function getRouteBand({
  distanceKm,
  intraEuUkChEea,
}: {
  distanceKm: number;
  intraEuUkChEea: boolean;
}) {
  if (distanceKm <= 1500) {
    return { routeBand: "short" as const, baseAmount: 250 };
  }

  if (intraEuUkChEea || distanceKm <= 3500) {
    return { routeBand: "medium" as const, baseAmount: 400 };
  }

  return { routeBand: "long" as const, baseAmount: 600 };
}

function isCompensableDelay(delayBand?: DelayBand | null) {
  return delayBand === "3_to_4h" || delayBand === "over_4h";
}

function shouldReduceLongHaulDelay(routeBand: RouteBand, delayBand?: DelayBand | null) {
  return routeBand === "long" && delayBand === "3_to_4h";
}

function replacementIsWithinLegalCancellationWindow(
  replacementFlight?: ReplacementFlight | null,
) {
  return replacementFlight === "within_legal_window";
}

function replacementHasLimitedDelay(replacementFlight?: ReplacementFlight | null) {
  return replacementFlight === "limited_delay";
}

export function calculateFlightCompensation(
  input: CompensationInput,
): CompensationResult | null {
  const {
    from,
    to,
    carrierJurisdiction,
    disruption,
    delayBand,
    cancellationNotice,
    replacementFlight,
    deniedBoardingReason,
    extraordinaryCircumstances,
  } = input;

  if (!from || !to || !disruption || from.code === to.code) {
    return null;
  }

  const distanceKm = calculateGreatCircleDistanceKm(from, to);
  const departureCovered = isAirportInEuUkChEea(from);
  const arrivalInCoveredArea = isAirportInEuUkChEea(to);
  const carrierCovered = carrierJurisdiction === "eu_uk_ch_eea";
  const arrivalCoveredByCarrier = arrivalInCoveredArea && carrierCovered;
  const inPassengerRightsScope = departureCovered || arrivalCoveredByCarrier;
  const intraEuUkChEea = departureCovered && arrivalInCoveredArea;
  const { routeBand, baseAmount } = getRouteBand({ distanceKm, intraEuUkChEea });
  const reasons: ReasonCode[] = [];

  if (departureCovered) {
    reasons.push("covered_departure_area");
  } else if (arrivalCoveredByCarrier) {
    reasons.push("covered_arrival_carrier");
  }

  if (!inPassengerRightsScope) {
    reasons.push("out_of_scope");
    return {
      status: "not_eligible",
      amount: 0,
      baseAmount,
      distanceKm,
      routeBand,
      inPassengerRightsScope,
      departureCovered,
      arrivalCoveredByCarrier,
      intraEuUkChEea,
      reducedByHalf: false,
      conditionalOnExtraordinaryCircumstances: false,
      reasons,
    };
  }

  let amount = 0;
  let status: EligibilityStatus = "not_eligible";
  let reducedByHalf = false;

  if (disruption === "delay" || disruption === "missed_connection") {
    if (!isCompensableDelay(delayBand)) {
      reasons.push("delay_under_three_hours");
    } else {
      amount = baseAmount;
      status = "eligible";
      reasons.push(
        disruption === "missed_connection"
          ? "missed_connection_threshold_met"
          : "delay_threshold_met",
      );

      if (shouldReduceLongHaulDelay(routeBand, delayBand)) {
        amount = baseAmount / 2;
        reducedByHalf = true;
        reasons.push("replacement_limited_delay_reduction");
      }
    }
  }

  if (disruption === "cancelled") {
    if (cancellationNotice === "14_plus_days") {
      reasons.push("cancellation_notice_fourteen_days");
    } else if (replacementIsWithinLegalCancellationWindow(replacementFlight)) {
      reasons.push("replacement_within_legal_window");
    } else {
      amount = baseAmount;
      status = "eligible";
      reasons.push("cancellation_compensable");

      if (replacementHasLimitedDelay(replacementFlight)) {
        amount = baseAmount / 2;
        reducedByHalf = true;
        reasons.push("replacement_limited_delay_reduction");
      }
    }
  }

  if (disruption === "denied_boarding") {
    if (deniedBoardingReason === "passenger_fault") {
      reasons.push("denied_boarding_passenger_fault");
    } else {
      amount = baseAmount;
      status = "eligible";
      reasons.push("denied_boarding_airline_fault");
    }
  }

  const conditionalOnExtraordinaryCircumstances =
    status === "eligible" && extraordinaryCircumstances === "yes";

  if (conditionalOnExtraordinaryCircumstances) {
    status = "needs_review";
    reasons.push("extraordinary_circumstances_review");
  }

  return {
    status,
    amount,
    baseAmount,
    distanceKm,
    routeBand,
    inPassengerRightsScope,
    departureCovered,
    arrivalCoveredByCarrier,
    intraEuUkChEea,
    reducedByHalf,
    conditionalOnExtraordinaryCircumstances,
    reasons,
  };
}

export function buildClaimWingerCalculatorUrl({
  result,
  input,
  source = "problemlot",
  campaign = "pl_compensation_calculator",
  content = "calculator_result_cta",
  lang = "pl",
  baseUrl,
}: {
  result: CompensationResult;
  input: CompensationInput;
  source?: string;
  campaign?: string;
  content?: string;
  lang?: string;
  baseUrl?: string;
}) {
  const targetBaseUrl =
    baseUrl ||
    (input.disruption === "cancelled"
      ? "https://claimwinger.com/pl/odwolany-lot"
      : "https://claimwinger.com/pl/opozniony-lot");

  const params = new URLSearchParams({
    utm_source: source,
    utm_medium: "calculator",
    utm_campaign: campaign,
    utm_content: content,
    lang,
    from: input.from?.code || "",
    to: input.to?.code || "",
    disruption: input.disruption || "",
    eligibility: result.status,
    amount: String(result.amount),
    distance_km: String(result.distanceKm),
  });

  return `${targetBaseUrl}?${params.toString()}`;
}
