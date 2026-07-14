import type {
  FlightDisruption,
  ReasonCode,
  RouteBand,
} from "@/lib/flightCompensationCalculator";

export type CalculatorLocaleCode =
  | "pl"
  | "en"
  | "cs"
  | "el"
  | "hi"
  | "hu"
  | "it"
  | "no"
  | "sk"
  | "sv"
  | "tr"
  | "vi"
  | "zh"
  | "bg"
  | "lt"
  | "lv"
  | "sr";

export type CalculatorCopy = {
  code: CalculatorLocaleCode;
  language: string;
  numberLocale: string;
  airportLocale: "pl" | "en";
  campaign: string;
  claimWinger: {
    langParam: string;
    defaultUrl: string;
    delayUrl: string;
    cancelledUrl: string;
  };
  steps: {
    label: (current: number, total: number) => string;
    back: string;
    next: string;
    done: string;
  };
  disruptionLabels: Record<FlightDisruption, { title: string; description: string }>;
  routeBandLabels: Record<RouteBand, string>;
  reasonLabels: Record<ReasonCode, string>;
  routeStep: {
    title: string;
    description: string;
    fromLabel: string;
    toLabel: string;
    swapLabel: string;
    carrierTitle: string;
    carrierEuTitle: string;
    carrierEuDescription: string;
    carrierOtherTitle: string;
    carrierOtherDescription: string;
    carrierHint: string;
  };
  situationStep: {
    title: string;
    description: string;
  };
  detailsStep: {
    title: string;
    description: string;
    delayQuestion: string;
    cancellationNoticeQuestion: string;
    replacementQuestion: string;
    deniedBoardingQuestion: string;
    extraordinaryQuestion: string;
    extraordinaryNote: string;
    delayOptions: {
      under2h: string;
      twoToThree: string;
      threeToFour: string;
      overFour: string;
    };
    cancellationOptions: {
      fourteenPlus: string;
      sevenToThirteen: string;
      underSeven: string;
    };
    replacementOptions: {
      noneTitle: string;
      noneDescription: string;
      withinTitle: string;
      withinDescription: string;
      limitedTitle: string;
      limitedDescription: string;
      majorTitle: string;
      majorDescription: string;
    };
    deniedOptions: {
      noTitle: string;
      noDescription: string;
      yesTitle: string;
      yesDescription: string;
    };
    extraordinaryOptions: {
      no: string;
      yes: string;
      yesDescription: string;
      unknown: string;
    };
  };
  result: {
    needsReview: string;
    probableAmount: string;
    result: string;
    noAmount: string;
    perPassenger: string;
    notEligible: string;
    reducedByHalf: (baseAmount: number) => string;
    distanceLabel: string;
    routeClassLabel: string;
    scopeLabel: string;
    coveredScope: string;
    outsideScope: string;
    explanationTitle: string;
    explanationText: string;
    reasonsTitle: string;
    ctaLabel: string;
    resetLabel: string;
  };
  preview: {
    badge: string;
    fromFallback: string;
    toFallback: string;
    distanceLabel: string;
    routeLabel: string;
    amountLabel: string;
    emptyText: string;
    ruleTitle: string;
    ruleText: string;
  };
  map: {
    routeMapLabel: string;
    fittedFrameLabel: string;
    distanceLabel: string;
    emptyText: string;
    ariaRoute: (from: string, to: string, distanceKm: number) => string;
    ariaDefault: string;
  };
  airport: {
    searchPlaceholder: string;
    clearLabel: string;
  };
};

const plReasons: Record<ReasonCode, string> = {
  out_of_scope:
    "Lot jest poza zakresem EU261/UK261: nie startował z EU/UK/CH/EEA i nie był obsługiwany przez przewoźnika z tego obszaru przy przylocie.",
  delay_under_three_hours:
    "Opóźnienie przy przylocie było krótsze niż 3 godziny, więc próg odszkodowania nie został spełniony.",
  covered_departure_area:
    "Lot startował z lotniska w EU/UK/CH/EEA, więc jurysdykcja obejmuje również przewoźników spoza UE.",
  covered_arrival_carrier:
    "Lot przylatywał do EU/UK/CH/EEA i był obsługiwany przez przewoźnika z tego obszaru.",
  delay_threshold_met:
    "Opóźnienie przy przylocie przekroczyło 3 godziny.",
  missed_connection_threshold_met:
    "Utracona przesiadka spowodowała co najmniej 3 godziny opóźnienia na końcowym celu podróży.",
  cancellation_notice_fourteen_days:
    "Informacja o odwołaniu przyszła co najmniej 14 dni przed wylotem.",
  replacement_within_legal_window:
    "Lot zastępczy mieścił się w ustawowych widełkach czasowych, więc odszkodowanie zwykle nie przysługuje.",
  replacement_limited_delay_reduction:
    "Kwota została obniżona o 50%, bo opóźnienie mieści się w zakresie redukcji.",
  cancellation_compensable:
    "Odwołanie mieści się w warunkach, które mogą dawać prawo do odszkodowania.",
  denied_boarding_passenger_fault:
    "Odmowa wejścia wynikała z przyczyn po stronie pasażera, np. dokumentów lub bezpieczeństwa.",
  denied_boarding_airline_fault:
    "Odmowa wejścia wygląda na overbooking albo inną przyczynę po stronie linii.",
  extraordinary_circumstances_review:
    "Linia powołuje się na nadzwyczajne okoliczności; kwotę trzeba potraktować jako wymagającą weryfikacji.",
};

const enReasons: Record<ReasonCode, string> = {
  out_of_scope:
    "The flight appears outside EU261/UK261 scope: it did not depart from EU/UK/CH/EEA and was not operated by a covered carrier on arrival.",
  delay_under_three_hours:
    "Arrival delay was under 3 hours, so the compensation threshold is usually not met.",
  covered_departure_area:
    "The flight departed from an EU/UK/CH/EEA airport, so the rules can cover non-European airlines too.",
  covered_arrival_carrier:
    "The flight arrived in EU/UK/CH/EEA and was operated by a carrier from that area.",
  delay_threshold_met:
    "Arrival delay exceeded 3 hours.",
  missed_connection_threshold_met:
    "The missed connection caused at least 3 hours of delay at the final destination.",
  cancellation_notice_fourteen_days:
    "The airline notified you at least 14 days before departure.",
  replacement_within_legal_window:
    "The replacement flight fits the legal time window, so compensation is usually not due.",
  replacement_limited_delay_reduction:
    "The amount was reduced by 50% because the replacement delay falls within the reduction range.",
  cancellation_compensable:
    "The cancellation fits conditions that may trigger compensation.",
  denied_boarding_passenger_fault:
    "Denied boarding appears connected with passenger-side reasons such as documents or security.",
  denied_boarding_airline_fault:
    "Denied boarding looks like overbooking or another airline-side reason.",
  extraordinary_circumstances_review:
    "The airline invokes extraordinary circumstances; the amount needs manual verification.",
};

const baseCopy: CalculatorCopy = {
  code: "en",
  language: "English",
  numberLocale: "en-US",
  airportLocale: "en",
  campaign: "en_compensation_calculator",
  claimWinger: {
    langParam: "en",
    defaultUrl: "https://claimwinger.com",
    delayUrl: "https://claimwinger.com",
    cancelledUrl: "https://claimwinger.com",
  },
  steps: {
    label: (current, total) => `Step ${current} of ${total}`,
    back: "Back",
    next: "Next",
    done: "✓",
  },
  disruptionLabels: {
    delay: {
      title: "Delay",
      description: "The flight reached the final destination several hours late.",
    },
    cancelled: {
      title: "Cancellation",
      description: "The airline cancelled the flight or moved you to another one.",
    },
    denied_boarding: {
      title: "Denied boarding",
      description: "You were not allowed to board despite a valid booking.",
    },
    missed_connection: {
      title: "Missed connection",
      description: "A delay on the first leg disrupted the rest of the trip.",
    },
  },
  routeBandLabels: {
    short: "short distance",
    medium: "medium distance",
    long: "long distance",
  },
  reasonLabels: enReasons,
  routeStep: {
    title: "Flight route",
    description:
      "This calculator checks delayed flights, cancellations, denied boarding and missed connections under EU261 and UK261. Choose the airports and indicate whether the operating carrier is based in EU/UK/CH/EEA.",
    fromLabel: "Departure from",
    toLabel: "Arrival to",
    swapLabel: "Swap airports",
    carrierTitle: "Operating carrier",
    carrierEuTitle: "EU / UK / CH / EEA",
    carrierEuDescription: "For example LOT, Lufthansa, KLM, British Airways, SWISS, Norwegian.",
    carrierOtherTitle: "Outside this area",
    carrierOtherDescription: "For example Emirates, Qatar Airways, Turkish Airlines, Air India.",
    carrierHint:
      "For departures from EU/UK/CH/EEA, the rules usually also cover non-European airlines. For arrivals into this area, the operating carrier's jurisdiction matters.",
  },
  situationStep: {
    title: "What happened?",
    description:
      "Choose the situation to estimate whether you may claim €250, €400 or €600. Different thresholds apply to delays, cancellations, overbooking and missed connections.",
  },
  detailsStep: {
    title: "Case details",
    description:
      "These answers decide the amount, a possible 50% reduction or the need for manual review. EU261 and UK261 focus on final-arrival delay and the real reason for the disruption.",
    delayQuestion: "How long was the delay at the final destination?",
    cancellationNoticeQuestion: "When were you told about the cancellation?",
    replacementQuestion: "What replacement flight was offered?",
    deniedBoardingQuestion: "Was denied boarding caused by your own issue?",
    extraordinaryQuestion: "Does the airline rely on extraordinary circumstances?",
    extraordinaryNote:
      "Technical defects and strikes by the airline's own staff are often not enough to refuse compensation.",
    delayOptions: {
      under2h: "Under 2h",
      twoToThree: "2-3h",
      threeToFour: "3-4h",
      overFour: "Over 4h",
    },
    cancellationOptions: {
      fourteenPlus: "14 days or more",
      sevenToThirteen: "7-13 days",
      underSeven: "Less than 7 days",
    },
    replacementOptions: {
      noneTitle: "None",
      noneDescription: "No real alternative.",
      withinTitle: "Within legal window",
      withinDescription: "Usually no compensation.",
      limitedTitle: "Limited delay",
      limitedDescription: "50% reduction possible.",
      majorTitle: "Much later",
      majorDescription: "Usually full amount.",
    },
    deniedOptions: {
      noTitle: "No",
      noDescription: "For example overbooking.",
      yesTitle: "Yes",
      yesDescription: "For example missing documents.",
    },
    extraordinaryOptions: {
      no: "No",
      yes: "Yes",
      yesDescription: "Needs verification.",
      unknown: "I don't know",
    },
  },
  result: {
    needsReview: "Needs review",
    probableAmount: "Probable amount",
    result: "Result",
    noAmount: "€0",
    perPassenger: "Estimated per passenger",
    notEligible: "This flight probably does not meet compensation conditions.",
    reducedByHalf: (baseAmount) => `Base amount €${baseAmount} reduced by 50%`,
    distanceLabel: "Distance",
    routeClassLabel: "Route class",
    scopeLabel: "Scope",
    coveredScope: "EU/UK/CH/EEA",
    outsideScope: "outside scope",
    explanationTitle: "What does the calculator result mean?",
    explanationText:
      "This is a preliminary assessment of compensation for a delayed or cancelled flight. ClaimWinger later verifies the booking, actual arrival time, disruption reason and airline responsibility in a no-win, no-fee model.",
    reasonsTitle: "Reasoning",
    ctaLabel: "Submit the case to ClaimWinger",
    resetLabel: "Start again",
  },
  preview: {
    badge: "EU261 / UK261 / CH / EEA",
    fromFallback: "Departure",
    toFallback: "Arrival",
    distanceLabel: "Distance",
    routeLabel: "Route",
    amountLabel: "Amount",
    emptyText: "Choose a route to see distance, route class and estimated amount.",
    ruleTitle: "Quick passenger rule",
    ruleText:
      "If the flight qualifies under EU261 or UK261, arrival delay of at least 3 hours may mean compensation up to €600 per passenger. The exact amount depends on distance and airline-side exceptions.",
  },
  map: {
    routeMapLabel: "Route map",
    fittedFrameLabel: "Frame adjusted to distance",
    distanceLabel: "Distance",
    emptyText: "Choose departure and arrival airports to see the route map with a local distance scale.",
    ariaRoute: (from, to, distanceKm) =>
      `Route map ${from}-${to}, distance ${distanceKm} kilometers`,
    ariaDefault: "Flight route map",
  },
  airport: {
    searchPlaceholder: "City or code, e.g. LHR",
    clearLabel: "Clear",
  },
};

const polishCopy: CalculatorCopy = {
  ...baseCopy,
  code: "pl",
  language: "Polish",
  numberLocale: "pl-PL",
  airportLocale: "pl",
  campaign: "pl_compensation_calculator",
  claimWinger: {
    langParam: "pl",
    defaultUrl: "https://claimwinger.com/pl",
    delayUrl: "https://claimwinger.com/pl/opozniony-lot",
    cancelledUrl: "https://claimwinger.com/pl/odwolany-lot",
  },
  steps: {
    label: (current, total) => `Krok ${current} z ${total}`,
    back: "Wstecz",
    next: "Dalej",
    done: "✓",
  },
  disruptionLabels: {
    delay: {
      title: "Opóźnienie",
      description: "Lot dotarł do celu co najmniej kilka godzin po czasie.",
    },
    cancelled: {
      title: "Odwołanie",
      description: "Linia odwołała rejs albo przeniosła Cię na inny lot.",
    },
    denied_boarding: {
      title: "Odmowa wejścia",
      description: "Nie wpuszczono Cię na pokład mimo ważnej rezerwacji.",
    },
    missed_connection: {
      title: "Utracona przesiadka",
      description: "Opóźnienie pierwszego odcinka zerwało dalszą podróż.",
    },
  },
  routeBandLabels: {
    short: "krótki dystans",
    medium: "średni dystans",
    long: "daleki dystans",
  },
  reasonLabels: plReasons,
  routeStep: {
    title: "Trasa lotu",
    description:
      "Ten kalkulator odszkodowania za lot sprawdza opóźnienie, odwołanie, odmowę wejścia na pokład i utraconą przesiadkę według EU261 oraz UK261. Wybierz lotniska i wskaż, czy przewoźnik ma siedzibę w EU/UK/CH/EEA.",
    fromLabel: "Wylot z",
    toLabel: "Przylot do",
    swapLabel: "Zamień lotniska",
    carrierTitle: "Przewoźnik operujący lot",
    carrierEuTitle: "EU / UK / CH / EEA",
    carrierEuDescription: "Np. LOT, Lufthansa, KLM, British Airways, SWISS, Norwegian.",
    carrierOtherTitle: "Spoza tego obszaru",
    carrierOtherDescription: "Np. Emirates, Qatar Airways, Turkish Airlines, Air India.",
    carrierHint:
      "Przy wylocie z EU/UK/CH/EEA przepisy zwykle obejmują także linie spoza Europy. Przy przylocie do tego obszaru znaczenie ma również to, czy lot obsługiwał przewoźnik europejski, brytyjski lub szwajcarski.",
  },
  situationStep: {
    title: "Co się wydarzyło?",
    description:
      "Wybierz sytuację, aby oszacować, czy możesz otrzymać 250, 400 albo 600 euro odszkodowania. Inne progi stosuje się dla opóźnionego lotu, inne dla odwołania, overbookingu i utraconej przesiadki.",
  },
  detailsStep: {
    ...baseCopy.detailsStep,
    title: "Szczegóły sprawy",
    description:
      "Te odpowiedzi decydują o kwocie, redukcji 50% albo konieczności ręcznej weryfikacji. W EU261 i UK261 liczy się przede wszystkim opóźnienie przy końcowym celu podróży oraz realny powód zakłócenia lotu.",
    delayQuestion: "Jak duże było opóźnienie przy końcowym celu podróży?",
    cancellationNoticeQuestion: "Kiedy poinformowano Cię o odwołaniu?",
    replacementQuestion: "Jaki był lot zastępczy?",
    deniedBoardingQuestion: "Czy odmowa wejścia była z Twojej winy?",
    extraordinaryQuestion: "Czy linia powołuje się na nadzwyczajne okoliczności?",
    extraordinaryNote:
      "Usterki techniczne i strajki własnych pracowników linii często nie są wystarczającym powodem odmowy.",
    delayOptions: {
      under2h: "Poniżej 2h",
      twoToThree: "2-3h",
      threeToFour: "3-4h",
      overFour: "Powyżej 4h",
    },
    cancellationOptions: {
      fourteenPlus: "14 dni lub więcej",
      sevenToThirteen: "7-13 dni",
      underSeven: "Mniej niż 7 dni",
    },
    replacementOptions: {
      noneTitle: "Nie było",
      noneDescription: "Brak realnej alternatywy.",
      withinTitle: "W ustawowych widełkach",
      withinDescription: "Zwykle bez odszkodowania.",
      limitedTitle: "Z ograniczonym opóźnieniem",
      limitedDescription: "Możliwa redukcja 50%.",
      majorTitle: "Znacznie później",
      majorDescription: "Zwykle pełna kwota.",
    },
    deniedOptions: {
      noTitle: "Nie",
      noDescription: "Np. overbooking.",
      yesTitle: "Tak",
      yesDescription: "Np. brak dokumentów.",
    },
    extraordinaryOptions: {
      no: "Nie",
      yes: "Tak",
      yesDescription: "Wymaga weryfikacji.",
      unknown: "Nie wiem",
    },
  },
  result: {
    ...baseCopy.result,
    needsReview: "Wymaga weryfikacji",
    probableAmount: "Prawdopodobna kwota",
    result: "Wynik",
    noAmount: "0 €",
    perPassenger: "Szacunkowo na pasażera",
    notEligible: "Ten lot prawdopodobnie nie spełnia warunków odszkodowania.",
    reducedByHalf: (baseAmount) => `Kwota bazowa ${baseAmount} € obniżona o 50%`,
    distanceLabel: "Dystans",
    routeClassLabel: "Klasa trasy",
    scopeLabel: "Zakres",
    coveredScope: "EU/UK/CH/EEA",
    outsideScope: "poza zakresem",
    explanationTitle: "Co oznacza wynik kalkulatora?",
    explanationText:
      "To wstępna ocena prawa do odszkodowania za opóźniony lub odwołany lot. ClaimWinger sprawdza później rezerwację, rzeczywisty czas przylotu, przyczynę zakłócenia i odpowiedzialność linii lotniczej w modelu no win, no fee.",
    reasonsTitle: "Uzasadnienie",
    ctaLabel: "Złóż sprawę w ClaimWinger",
    resetLabel: "Zacznij od nowa",
  },
  preview: {
    badge: "EU261 / UK261 / CH / EEA",
    fromFallback: "Wylot",
    toFallback: "Przylot",
    distanceLabel: "Dystans",
    routeLabel: "Trasa",
    amountLabel: "Kwota",
    emptyText: "Wybierz trasę, aby zobaczyć dystans, klasę trasy i szacunkową kwotę.",
    ruleTitle: "Szybka reguła pasażera",
    ruleText:
      "Jeśli lot kwalifikuje się pod EU261 albo UK261, opóźnienie minimum 3 godziny przy przylocie może oznaczać odszkodowanie do 600 euro za pasażera. Dokładna kwota zależy od dystansu i wyjątków po stronie linii lotniczej.",
  },
  map: {
    routeMapLabel: "Mapa trasy",
    fittedFrameLabel: "Kadr dopasowany do dystansu",
    distanceLabel: "Dystans",
    emptyText:
      "Wybierz lotnisko wylotu i przylotu, aby zobaczyć mapę trasy z lokalną skalą dystansu.",
    ariaRoute: (from, to, distanceKm) =>
      `Mapa trasy ${from}-${to}, dystans ${distanceKm} kilometrów`,
    ariaDefault: "Mapa trasy lotu",
  },
  airport: {
    searchPlaceholder: "Miasto lub kod, np. WAW",
    clearLabel: "Wyczyść",
  },
};

type SimpleLocaleCode = Exclude<CalculatorLocaleCode, "pl" | "en">;
type PartialDetailsStep = Partial<Omit<CalculatorCopy["detailsStep"], "delayOptions" | "cancellationOptions" | "replacementOptions" | "deniedOptions" | "extraordinaryOptions">> & {
  delayOptions?: Partial<CalculatorCopy["detailsStep"]["delayOptions"]>;
  cancellationOptions?: Partial<CalculatorCopy["detailsStep"]["cancellationOptions"]>;
  replacementOptions?: Partial<CalculatorCopy["detailsStep"]["replacementOptions"]>;
  deniedOptions?: Partial<CalculatorCopy["detailsStep"]["deniedOptions"]>;
  extraordinaryOptions?: Partial<CalculatorCopy["detailsStep"]["extraordinaryOptions"]>;
};

function makeReasonLabels(labels: {
  outOfScope: string;
  delayUnderThreeHours: string;
  coveredDepartureArea: string;
  coveredArrivalCarrier: string;
  delayThresholdMet: string;
  missedConnectionThresholdMet: string;
  cancellationNoticeFourteenDays: string;
  replacementWithinLegalWindow: string;
  replacementLimitedDelayReduction: string;
  cancellationCompensable: string;
  deniedBoardingPassengerFault: string;
  deniedBoardingAirlineFault: string;
  extraordinaryCircumstancesReview: string;
}): Record<ReasonCode, string> {
  return {
    out_of_scope: labels.outOfScope,
    delay_under_three_hours: labels.delayUnderThreeHours,
    covered_departure_area: labels.coveredDepartureArea,
    covered_arrival_carrier: labels.coveredArrivalCarrier,
    delay_threshold_met: labels.delayThresholdMet,
    missed_connection_threshold_met: labels.missedConnectionThresholdMet,
    cancellation_notice_fourteen_days: labels.cancellationNoticeFourteenDays,
    replacement_within_legal_window: labels.replacementWithinLegalWindow,
    replacement_limited_delay_reduction: labels.replacementLimitedDelayReduction,
    cancellation_compensable: labels.cancellationCompensable,
    denied_boarding_passenger_fault: labels.deniedBoardingPassengerFault,
    denied_boarding_airline_fault: labels.deniedBoardingAirlineFault,
    extraordinary_circumstances_review: labels.extraordinaryCircumstancesReview,
  };
}

const localizedDetails: Record<SimpleLocaleCode, PartialDetailsStep> = {
  bg: {
    title: "Детайли за случая",
    description:
      "Тези отговори определят дали може да има сума, намаление с 50% или нужда от ръчна проверка.",
    delayQuestion: "Колко беше закъснението при крайната дестинация?",
    cancellationNoticeQuestion: "Кога бяхте уведомени за отмяната?",
    replacementQuestion: "Какъв алтернативен полет беше предложен?",
    deniedBoardingQuestion: "Отказът за качване беше ли по ваша вина?",
    extraordinaryQuestion: "Авиокомпанията позовава ли се на извънредни обстоятелства?",
    extraordinaryNote:
      "Технически дефекти и стачки на собствения персонал на авиокомпанията често не са достатъчни за отказ.",
    delayOptions: {
      under2h: "Под 2 ч.",
      twoToThree: "2-3 ч.",
      threeToFour: "3-4 ч.",
      overFour: "Над 4 ч.",
    },
    cancellationOptions: {
      fourteenPlus: "14 дни или повече",
      sevenToThirteen: "7-13 дни",
      underSeven: "Под 7 дни",
    },
    replacementOptions: {
      noneTitle: "Няма",
      noneDescription: "Няма реална алтернатива.",
      withinTitle: "В законовия прозорец",
      withinDescription: "Обикновено без обезщетение.",
      limitedTitle: "Ограничено закъснение",
      limitedDescription: "Възможно е намаление с 50%.",
      majorTitle: "Много по-късно",
      majorDescription: "Обикновено пълна сума.",
    },
    deniedOptions: {
      noTitle: "Не",
      noDescription: "Например overbooking.",
      yesTitle: "Да",
      yesDescription: "Например липсващи документи.",
    },
    extraordinaryOptions: {
      no: "Не",
      yes: "Да",
      yesDescription: "Нужна е проверка.",
      unknown: "Не знам",
    },
  },
  sr: {
    title: "Detalji slučaja",
    description:
      "Ovi odgovori određuju da li postoji iznos, umanjenje od 50% ili potreba za ručnom proverom.",
    delayQuestion: "Koliko je iznosilo kašnjenje na krajnjoj destinaciji?",
    cancellationNoticeQuestion: "Kada ste obavešteni o otkazivanju leta?",
    replacementQuestion: "Kakav zamenski let vam je ponuđen?",
    deniedBoardingQuestion: "Da li je ukrcavanje odbijeno vašom krivicom?",
    extraordinaryQuestion: "Da li se avio-kompanija poziva na vanredne okolnosti?",
    extraordinaryNote:
      "Tehnički kvarovi i štrajkovi sopstvenog osoblja avio-kompanije često nisu dovoljan razlog za odbijanje obeštećenja.",
    delayOptions: {
      under2h: "Ispod 2 h",
      twoToThree: "2-3 h",
      threeToFour: "3-4 h",
      overFour: "Preko 4 h",
    },
    cancellationOptions: {
      fourteenPlus: "14 dana ili više",
      sevenToThirteen: "7-13 dana",
      underSeven: "Manje od 7 dana",
    },
    replacementOptions: {
      noneTitle: "Nije bilo",
      noneDescription: "Nema realne alternative.",
      withinTitle: "U zakonskom okviru",
      withinDescription: "Obično bez obeštećenja.",
      limitedTitle: "Ograničeno kašnjenje",
      limitedDescription: "Moguće umanjenje od 50%.",
      majorTitle: "Znatno kasnije",
      majorDescription: "Obično pun iznos.",
    },
    deniedOptions: {
      noTitle: "Ne",
      noDescription: "Na primer overbooking.",
      yesTitle: "Da",
      yesDescription: "Na primer nedostajuća dokumenta.",
    },
    extraordinaryOptions: {
      no: "Ne",
      yes: "Da",
      yesDescription: "Potrebna je provera.",
      unknown: "Ne znam",
    },
  },
  lt: {
    title: "Atvejo detalės",
    description:
      "Šie atsakymai padeda nustatyti galimą sumą, 50% sumažinimą arba poreikį rankinei teisinei patikrai.",
    delayQuestion: "Kiek vėlavo atvykimas į galutinę paskirties vietą?",
    cancellationNoticeQuestion: "Kada sužinojote apie skrydžio atšaukimą?",
    replacementQuestion: "Koks pakaitinis skrydis buvo pasiūlytas?",
    deniedBoardingQuestion: "Ar atsisakymas įlaipinti buvo dėl jūsų kaltės?",
    extraordinaryQuestion: "Ar oro linija remiasi ypatingomis aplinkybėmis?",
    extraordinaryNote:
      "Techniniai gedimai ir pačios oro linijos darbuotojų streikai dažnai nėra pakankama priežastis atmesti kompensaciją.",
    delayOptions: {
      under2h: "Mažiau nei 2 val.",
      twoToThree: "2-3 val.",
      threeToFour: "3-4 val.",
      overFour: "Daugiau nei 4 val.",
    },
    cancellationOptions: {
      fourteenPlus: "14 dienų ar daugiau",
      sevenToThirteen: "7-13 dienų",
      underSeven: "Mažiau nei 7 dienos",
    },
    replacementOptions: {
      noneTitle: "Nebuvo",
      noneDescription: "Nėra realios alternatyvos.",
      withinTitle: "Teisinėse ribose",
      withinDescription: "Paprastai be kompensacijos.",
      limitedTitle: "Ribotas vėlavimas",
      limitedDescription: "Gali būti taikomas 50% sumažinimas.",
      majorTitle: "Gerokai vėliau",
      majorDescription: "Paprastai galima visa suma.",
    },
    deniedOptions: {
      noTitle: "Ne",
      noDescription: "Pavyzdžiui, overbooking.",
      yesTitle: "Taip",
      yesDescription: "Pavyzdžiui, trūkstami dokumentai.",
    },
    extraordinaryOptions: {
      no: "Ne",
      yes: "Taip",
      yesDescription: "Reikia patikros.",
      unknown: "Nežinau",
    },
  },
  lv: {
    title: "Gadījuma detaļas",
    description:
      "Šīs atbildes palīdz noteikt iespējamo summu, 50% samazinājumu vai vajadzību pēc manuālas juridiskas pārbaudes.",
    delayQuestion: "Cik liela bija kavēšanās galamērķī?",
    cancellationNoticeQuestion: "Kad uzzinājāt par lidojuma atcelšanu?",
    replacementQuestion: "Kāds aizvietojošais lidojums tika piedāvāts?",
    deniedBoardingQuestion: "Vai iekāpšanas atteikums bija jūsu vainas dēļ?",
    extraordinaryQuestion: "Vai aviokompānija atsaucas uz ārkārtējiem apstākļiem?",
    extraordinaryNote:
      "Tehniskas kļūmes un pašas aviokompānijas darbinieku streiki bieži nav pietiekams pamats kompensācijas atteikumam.",
    delayOptions: {
      under2h: "Mazāk nekā 2 st.",
      twoToThree: "2-3 st.",
      threeToFour: "3-4 st.",
      overFour: "Vairāk nekā 4 st.",
    },
    cancellationOptions: {
      fourteenPlus: "14 dienas vai vairāk",
      sevenToThirteen: "7-13 dienas",
      underSeven: "Mazāk nekā 7 dienas",
    },
    replacementOptions: {
      noneTitle: "Nebija",
      noneDescription: "Nav reālas alternatīvas.",
      withinTitle: "Tiesiskajā laika logā",
      withinDescription: "Parasti bez kompensācijas.",
      limitedTitle: "Ierobežota kavēšanās",
      limitedDescription: "Var piemērot 50% samazinājumu.",
      majorTitle: "Daudz vēlāk",
      majorDescription: "Parasti iespējama pilna summa.",
    },
    deniedOptions: {
      noTitle: "Nē",
      noDescription: "Piemēram, overbooking.",
      yesTitle: "Jā",
      yesDescription: "Piemēram, trūkstoši dokumenti.",
    },
    extraordinaryOptions: {
      no: "Nē",
      yes: "Jā",
      yesDescription: "Nepieciešama pārbaude.",
      unknown: "Nezinu",
    },
  },
  cs: {
    title: "Podrobnosti případu",
    description: "Tyto odpovědi rozhodují o výši částky, případném snížení o 50 % nebo nutnosti ruční kontroly.",
    delayQuestion: "Jak velké bylo zpoždění v cílové destinaci?",
    cancellationNoticeQuestion: "Kdy vám aerolinka oznámila zrušení?",
    replacementQuestion: "Jaký náhradní let byl nabídnut?",
    deniedBoardingQuestion: "Bylo odmítnutí nástupu způsobeno vaší vinou?",
    extraordinaryQuestion: "Odvolává se aerolinka na mimořádné okolnosti?",
    extraordinaryNote: "Technické závady a stávky vlastních zaměstnanců aerolinky často nestačí k odmítnutí nároku.",
    delayOptions: { under2h: "Méně než 2 h", twoToThree: "2-3 h", threeToFour: "3-4 h", overFour: "Více než 4 h" },
    cancellationOptions: { fourteenPlus: "14 dní nebo více", sevenToThirteen: "7-13 dní", underSeven: "Méně než 7 dní" },
    replacementOptions: { noneTitle: "Žádný", noneDescription: "Bez reálné alternativy.", withinTitle: "V zákonném okně", withinDescription: "Obvykle bez kompenzace.", limitedTitle: "Omezené zpoždění", limitedDescription: "Možné snížení o 50 %.", majorTitle: "Mnohem později", majorDescription: "Obvykle plná částka." },
    deniedOptions: { noTitle: "Ne", noDescription: "Například overbooking.", yesTitle: "Ano", yesDescription: "Například chybějící dokumenty." },
    extraordinaryOptions: { no: "Ne", yes: "Ano", yesDescription: "Vyžaduje kontrolu.", unknown: "Nevím" },
  },
  el: {
    title: "Στοιχεία υπόθεσης",
    description: "Οι απαντήσεις καθορίζουν το ποσό, πιθανή μείωση 50% ή ανάγκη για χειροκίνητο έλεγχο.",
    delayQuestion: "Πόση ήταν η καθυστέρηση στον τελικό προορισμό;",
    cancellationNoticeQuestion: "Πότε σας ενημέρωσε η αεροπορική για την ακύρωση;",
    replacementQuestion: "Τι εναλλακτική πτήση προσφέρθηκε;",
    deniedBoardingQuestion: "Η άρνηση επιβίβασης οφειλόταν σε δικό σας λόγο;",
    extraordinaryQuestion: "Η αεροπορική επικαλείται έκτακτες περιστάσεις;",
    extraordinaryNote: "Τεχνικές βλάβες και απεργίες προσωπικού της ίδιας της αεροπορικής συχνά δεν αρκούν για άρνηση.",
    delayOptions: { under2h: "Κάτω από 2 ώρες", twoToThree: "2-3 ώρες", threeToFour: "3-4 ώρες", overFour: "Πάνω από 4 ώρες" },
    cancellationOptions: { fourteenPlus: "14 ημέρες ή περισσότερο", sevenToThirteen: "7-13 ημέρες", underSeven: "Λιγότερο από 7 ημέρες" },
    replacementOptions: { noneTitle: "Καμία", noneDescription: "Χωρίς πραγματική εναλλακτική.", withinTitle: "Εντός νόμιμου ορίου", withinDescription: "Συνήθως χωρίς αποζημίωση.", limitedTitle: "Περιορισμένη καθυστέρηση", limitedDescription: "Πιθανή μείωση 50%.", majorTitle: "Πολύ αργότερα", majorDescription: "Συνήθως πλήρες ποσό." },
    deniedOptions: { noTitle: "Όχι", noDescription: "Π.χ. overbooking.", yesTitle: "Ναι", yesDescription: "Π.χ. έλλειψη εγγράφων." },
    extraordinaryOptions: { no: "Όχι", yes: "Ναι", yesDescription: "Χρειάζεται έλεγχος.", unknown: "Δεν ξέρω" },
  },
  hi: {
    title: "मामले की जानकारी",
    description: "ये जवाब amount, 50% reduction या manual review की जरूरत तय करते हैं.",
    delayQuestion: "Final destination पर delay कितना था?",
    cancellationNoticeQuestion: "Cancellation की सूचना आपको कब मिली?",
    replacementQuestion: "Replacement flight कैसा था?",
    deniedBoardingQuestion: "क्या boarding denial आपकी गलती से हुआ?",
    extraordinaryQuestion: "क्या airline extraordinary circumstances बता रही है?",
    extraordinaryNote: "Technical fault और airline staff strike कई मामलों में claim reject करने के लिए पर्याप्त कारण नहीं होते.",
    delayOptions: { under2h: "2 घंटे से कम", twoToThree: "2-3 घंटे", threeToFour: "3-4 घंटे", overFour: "4 घंटे से अधिक" },
    cancellationOptions: { fourteenPlus: "14 दिन या अधिक", sevenToThirteen: "7-13 दिन", underSeven: "7 दिन से कम" },
    replacementOptions: { noneTitle: "नहीं मिला", noneDescription: "कोई वास्तविक विकल्प नहीं.", withinTitle: "Legal window में", withinDescription: "आम तौर पर compensation नहीं.", limitedTitle: "Limited delay", limitedDescription: "50% reduction संभव.", majorTitle: "काफी देर बाद", majorDescription: "आम तौर पर full amount." },
    deniedOptions: { noTitle: "नहीं", noDescription: "जैसे overbooking.", yesTitle: "हां", yesDescription: "जैसे documents issue." },
    extraordinaryOptions: { no: "नहीं", yes: "हां", yesDescription: "Verification चाहिए.", unknown: "पता नहीं" },
  },
  hu: {
    title: "Az ügy részletei",
    description: "Ezek a válaszok döntik el az összeget, az esetleges 50%-os csökkentést vagy a kézi ellenőrzést.",
    delayQuestion: "Mekkora volt a késés a végső célállomáson?",
    cancellationNoticeQuestion: "Mikor értesítették a törlésről?",
    replacementQuestion: "Milyen helyettesítő járatot ajánlottak?",
    deniedBoardingQuestion: "A beszállás megtagadása az Ön hibájából történt?",
    extraordinaryQuestion: "A légitársaság rendkívüli körülményekre hivatkozik?",
    extraordinaryNote: "Műszaki hibák és a légitársaság saját személyzetének sztrájkja gyakran nem elég az elutasításhoz.",
    delayOptions: { under2h: "2 óra alatt", twoToThree: "2-3 óra", threeToFour: "3-4 óra", overFour: "4 óra felett" },
    cancellationOptions: { fourteenPlus: "14 nap vagy több", sevenToThirteen: "7-13 nap", underSeven: "7 napnál kevesebb" },
    replacementOptions: { noneTitle: "Nem volt", noneDescription: "Nincs valós alternatíva.", withinTitle: "Jogszabályi időablakban", withinDescription: "Általában nincs kártérítés.", limitedTitle: "Korlátozott késés", limitedDescription: "50% csökkentés lehetséges.", majorTitle: "Sokkal később", majorDescription: "Általában teljes összeg." },
    deniedOptions: { noTitle: "Nem", noDescription: "Például overbooking.", yesTitle: "Igen", yesDescription: "Például hiányzó dokumentumok." },
    extraordinaryOptions: { no: "Nem", yes: "Igen", yesDescription: "Ellenőrzést igényel.", unknown: "Nem tudom" },
  },
  it: {
    title: "Dettagli del caso",
    description: "Queste risposte determinano l'importo, una possibile riduzione del 50% o la necessità di verifica manuale.",
    delayQuestion: "Quanto ritardo c'è stato alla destinazione finale?",
    cancellationNoticeQuestion: "Quando sei stato informato della cancellazione?",
    replacementQuestion: "Quale volo sostitutivo è stato offerto?",
    deniedBoardingQuestion: "Il negato imbarco dipendeva da un tuo problema?",
    extraordinaryQuestion: "La compagnia invoca circostanze eccezionali?",
    extraordinaryNote: "Guasti tecnici e scioperi del personale della compagnia spesso non bastano per rifiutare il risarcimento.",
    delayOptions: { under2h: "Meno di 2h", twoToThree: "2-3h", threeToFour: "3-4h", overFour: "Oltre 4h" },
    cancellationOptions: { fourteenPlus: "14 giorni o più", sevenToThirteen: "7-13 giorni", underSeven: "Meno di 7 giorni" },
    replacementOptions: { noneTitle: "Nessuno", noneDescription: "Nessuna alternativa reale.", withinTitle: "Entro i limiti legali", withinDescription: "Di solito senza risarcimento.", limitedTitle: "Ritardo limitato", limitedDescription: "Possibile riduzione del 50%.", majorTitle: "Molto più tardi", majorDescription: "Di solito importo pieno." },
    deniedOptions: { noTitle: "No", noDescription: "Per esempio overbooking.", yesTitle: "Sì", yesDescription: "Per esempio documenti mancanti." },
    extraordinaryOptions: { no: "No", yes: "Sì", yesDescription: "Richiede verifica.", unknown: "Non lo so" },
  },
  no: {
    title: "Saksdetaljer",
    description: "Svarene avgjør beløpet, eventuell 50% reduksjon eller behov for manuell vurdering.",
    delayQuestion: "Hvor stor var forsinkelsen ved endelig destinasjon?",
    cancellationNoticeQuestion: "Når fikk du beskjed om kanselleringen?",
    replacementQuestion: "Hvilket erstatningsfly ble tilbudt?",
    deniedBoardingQuestion: "Skyldtes nektet ombordstigning ditt eget forhold?",
    extraordinaryQuestion: "Viser flyselskapet til ekstraordinære omstendigheter?",
    extraordinaryNote: "Tekniske feil og streik blant flyselskapets egne ansatte er ofte ikke nok til å nekte erstatning.",
    delayOptions: { under2h: "Under 2 t", twoToThree: "2-3 t", threeToFour: "3-4 t", overFour: "Over 4 t" },
    cancellationOptions: { fourteenPlus: "14 dager eller mer", sevenToThirteen: "7-13 dager", underSeven: "Mindre enn 7 dager" },
    replacementOptions: { noneTitle: "Ingen", noneDescription: "Ingen reell alternativ.", withinTitle: "Innen lovlig vindu", withinDescription: "Vanligvis ingen erstatning.", limitedTitle: "Begrenset forsinkelse", limitedDescription: "50% reduksjon mulig.", majorTitle: "Mye senere", majorDescription: "Vanligvis fullt beløp." },
    deniedOptions: { noTitle: "Nei", noDescription: "For eksempel overbooking.", yesTitle: "Ja", yesDescription: "For eksempel manglende dokumenter." },
    extraordinaryOptions: { no: "Nei", yes: "Ja", yesDescription: "Må vurderes.", unknown: "Vet ikke" },
  },
  sk: {
    title: "Podrobnosti prípadu",
    description: "Tieto odpovede určujú sumu, možné zníženie o 50 % alebo potrebu manuálnej kontroly.",
    delayQuestion: "Aké veľké bolo meškanie v konečnom cieli?",
    cancellationNoticeQuestion: "Kedy vás informovali o zrušení?",
    replacementQuestion: "Aký náhradný let bol ponúknutý?",
    deniedBoardingQuestion: "Bolo odmietnutie nástupu spôsobené vašou vinou?",
    extraordinaryQuestion: "Odvoláva sa aerolinka na mimoriadne okolnosti?",
    extraordinaryNote: "Technické poruchy a štrajky vlastných zamestnancov aerolinky často nestačia na odmietnutie nároku.",
    delayOptions: { under2h: "Menej ako 2 h", twoToThree: "2-3 h", threeToFour: "3-4 h", overFour: "Viac ako 4 h" },
    cancellationOptions: { fourteenPlus: "14 dní alebo viac", sevenToThirteen: "7-13 dní", underSeven: "Menej ako 7 dní" },
    replacementOptions: { noneTitle: "Žiadny", noneDescription: "Bez reálnej alternatívy.", withinTitle: "V zákonnom okne", withinDescription: "Zvyčajne bez kompenzácie.", limitedTitle: "Obmedzené meškanie", limitedDescription: "Možné zníženie o 50 %.", majorTitle: "Oveľa neskôr", majorDescription: "Zvyčajne plná suma." },
    deniedOptions: { noTitle: "Nie", noDescription: "Napríklad overbooking.", yesTitle: "Áno", yesDescription: "Napríklad chýbajúce dokumenty." },
    extraordinaryOptions: { no: "Nie", yes: "Áno", yesDescription: "Vyžaduje kontrolu.", unknown: "Neviem" },
  },
  sv: {
    title: "Ärendedetaljer",
    description: "Svaren avgör beloppet, eventuell 50% reduktion eller behov av manuell granskning.",
    delayQuestion: "Hur stor var förseningen vid slutdestinationen?",
    cancellationNoticeQuestion: "När informerades du om det inställda flyget?",
    replacementQuestion: "Vilket ersättningsflyg erbjöds?",
    deniedBoardingQuestion: "Berodde nekad ombordstigning på dig?",
    extraordinaryQuestion: "Hänvisar flygbolaget till extraordinära omständigheter?",
    extraordinaryNote: "Tekniska fel och strejker bland flygbolagets egen personal räcker ofta inte för att neka ersättning.",
    delayOptions: { under2h: "Under 2 h", twoToThree: "2-3 h", threeToFour: "3-4 h", overFour: "Över 4 h" },
    cancellationOptions: { fourteenPlus: "14 dagar eller mer", sevenToThirteen: "7-13 dagar", underSeven: "Mindre än 7 dagar" },
    replacementOptions: { noneTitle: "Inget", noneDescription: "Ingen verklig alternativ resa.", withinTitle: "Inom lagligt fönster", withinDescription: "Vanligen ingen ersättning.", limitedTitle: "Begränsad försening", limitedDescription: "50% reduktion möjlig.", majorTitle: "Mycket senare", majorDescription: "Vanligen fullt belopp." },
    deniedOptions: { noTitle: "Nej", noDescription: "Till exempel overbooking.", yesTitle: "Ja", yesDescription: "Till exempel saknade dokument." },
    extraordinaryOptions: { no: "Nej", yes: "Ja", yesDescription: "Kräver granskning.", unknown: "Vet inte" },
  },
  tr: {
    title: "Dosya detayları",
    description: "Bu cevaplar tutarı, olası %50 indirimi veya manuel inceleme ihtiyacını belirler.",
    delayQuestion: "Son varış noktasındaki gecikme ne kadardı?",
    cancellationNoticeQuestion: "İptal size ne zaman bildirildi?",
    replacementQuestion: "Hangi alternatif uçuş teklif edildi?",
    deniedBoardingQuestion: "Uçağa alınmama sizin hatanızdan mı kaynaklandı?",
    extraordinaryQuestion: "Havayolu olağanüstü koşullara mı dayanıyor?",
    extraordinaryNote: "Teknik arızalar ve havayolunun kendi personel grevleri çoğu zaman tazminatı reddetmek için yeterli değildir.",
    delayOptions: { under2h: "2 saatten az", twoToThree: "2-3 saat", threeToFour: "3-4 saat", overFour: "4 saatten fazla" },
    cancellationOptions: { fourteenPlus: "14 gün veya daha fazla", sevenToThirteen: "7-13 gün", underSeven: "7 günden az" },
    replacementOptions: { noneTitle: "Yok", noneDescription: "Gerçek alternatif yok.", withinTitle: "Yasal zaman aralığında", withinDescription: "Genellikle tazminat yok.", limitedTitle: "Sınırlı gecikme", limitedDescription: "%50 indirim olabilir.", majorTitle: "Çok daha geç", majorDescription: "Genellikle tam tutar." },
    deniedOptions: { noTitle: "Hayır", noDescription: "Örneğin overbooking.", yesTitle: "Evet", yesDescription: "Örneğin eksik belge." },
    extraordinaryOptions: { no: "Hayır", yes: "Evet", yesDescription: "Kontrol gerekir.", unknown: "Bilmiyorum" },
  },
  vi: {
    title: "Chi tiết hồ sơ",
    description: "Các câu trả lời quyết định số tiền, khả năng giảm 50% hoặc nhu cầu kiểm tra thủ công.",
    delayQuestion: "Bạn đến điểm cuối muộn bao lâu?",
    cancellationNoticeQuestion: "Hãng thông báo hủy chuyến khi nào?",
    replacementQuestion: "Chuyến bay thay thế như thế nào?",
    deniedBoardingQuestion: "Việc từ chối lên máy bay có do lỗi của bạn không?",
    extraordinaryQuestion: "Hãng có viện dẫn extraordinary circumstances không?",
    extraordinaryNote: "Lỗi kỹ thuật và đình công của nhân viên hãng thường không đủ để từ chối bồi thường.",
    delayOptions: { under2h: "Dưới 2 giờ", twoToThree: "2-3 giờ", threeToFour: "3-4 giờ", overFour: "Trên 4 giờ" },
    cancellationOptions: { fourteenPlus: "14 ngày trở lên", sevenToThirteen: "7-13 ngày", underSeven: "Dưới 7 ngày" },
    replacementOptions: { noneTitle: "Không có", noneDescription: "Không có lựa chọn thực tế.", withinTitle: "Trong khung pháp lý", withinDescription: "Thường không có bồi thường.", limitedTitle: "Trễ ít", limitedDescription: "Có thể giảm 50%.", majorTitle: "Muộn hơn nhiều", majorDescription: "Thường là đủ số tiền." },
    deniedOptions: { noTitle: "Không", noDescription: "Ví dụ overbooking.", yesTitle: "Có", yesDescription: "Ví dụ thiếu giấy tờ." },
    extraordinaryOptions: { no: "Không", yes: "Có", yesDescription: "Cần kiểm tra.", unknown: "Không biết" },
  },
  zh: {
    title: "案件详情",
    description: "这些答案会影响赔偿金额、是否减半以及是否需要人工审核。",
    delayQuestion: "到达最终目的地时延误了多久？",
    cancellationNoticeQuestion: "航空公司何时通知您取消航班？",
    replacementQuestion: "提供了什么替代航班？",
    deniedBoardingQuestion: "拒绝登机是否由您的原因造成？",
    extraordinaryQuestion: "航空公司是否主张特殊情况？",
    extraordinaryNote: "技术故障和航空公司自身员工罢工通常不足以拒绝赔偿。",
    delayOptions: { under2h: "少于2小时", twoToThree: "2-3小时", threeToFour: "3-4小时", overFour: "超过4小时" },
    cancellationOptions: { fourteenPlus: "14天或更早", sevenToThirteen: "7-13天", underSeven: "少于7天" },
    replacementOptions: { noneTitle: "没有", noneDescription: "没有实际替代方案。", withinTitle: "在法定时间内", withinDescription: "通常没有赔偿。", limitedTitle: "有限延误", limitedDescription: "可能减半。", majorTitle: "晚很多", majorDescription: "通常为全额。" },
    deniedOptions: { noTitle: "否", noDescription: "例如超售。", yesTitle: "是", yesDescription: "例如证件问题。" },
    extraordinaryOptions: { no: "否", yes: "是", yesDescription: "需要审核。", unknown: "不知道" },
  },
};

const localizedReasons: Record<SimpleLocaleCode, Record<ReasonCode, string>> = {
  bg: makeReasonLabels({
    outOfScope: "Полетът изглежда извън обхвата на EU261/UK261.",
    delayUnderThreeHours: "Закъснението при пристигане е под 3 часа.",
    coveredDepartureArea: "Полетът е излетял от летище в EU/UK/CH/EEA.",
    coveredArrivalCarrier:
      "Полетът пристига в EU/UK/CH/EEA и е изпълнен от покрит превозвач.",
    delayThresholdMet: "Закъснението при пристигане надхвърля 3 часа.",
    missedConnectionThresholdMet:
      "Изпуснатата връзка е довела до поне 3 часа закъснение при крайната дестинация.",
    cancellationNoticeFourteenDays:
      "Авиокомпанията е уведомила за отмяната поне 14 дни преди заминаването.",
    replacementWithinLegalWindow:
      "Алтернативният полет попада в законовите времеви рамки.",
    replacementLimitedDelayReduction:
      "Сумата може да бъде намалена с 50% заради ограничено закъснение на алтернативния полет.",
    cancellationCompensable: "Отмяната може да отговаря на условията за обезщетение.",
    deniedBoardingPassengerFault:
      "Отказът за качване изглежда свързан с причина от страна на пътника.",
    deniedBoardingAirlineFault:
      "Отказът за качване изглежда като overbooking или друга причина от страна на авиокомпанията.",
    extraordinaryCircumstancesReview:
      "Авиокомпанията се позовава на извънредни обстоятелства; нужна е ръчна проверка.",
  }),
  sr: makeReasonLabels({
    outOfScope: "Let izgleda izvan opsega EU261/UK261.",
    delayUnderThreeHours: "Kašnjenje pri dolasku je bilo kraće od 3 sata.",
    coveredDepartureArea: "Let je poleteo sa aerodroma u EU/UK/CH/EEA.",
    coveredArrivalCarrier:
      "Let stiže u EU/UK/CH/EEA i izvršio ga je pokriveni prevoznik.",
    delayThresholdMet: "Kašnjenje pri dolasku je premašilo 3 sata.",
    missedConnectionThresholdMet:
      "Propuštena veza je dovela do najmanje 3 sata kašnjenja na krajnjoj destinaciji.",
    cancellationNoticeFourteenDays:
      "Avio-kompanija je obavestila o otkazivanju najmanje 14 dana pre polaska.",
    replacementWithinLegalWindow:
      "Zamenski let se uklapa u zakonske vremenske okvire.",
    replacementLimitedDelayReduction:
      "Iznos može biti umanjen za 50% zbog ograničenog kašnjenja zamenskog leta.",
    cancellationCompensable: "Otkazivanje može ispunjavati uslove za obeštećenje.",
    deniedBoardingPassengerFault:
      "Odbijeno ukrcavanje izgleda povezano sa razlogom na strani putnika.",
    deniedBoardingAirlineFault:
      "Odbijeno ukrcavanje liči na overbooking ili drugi razlog na strani avio-kompanije.",
    extraordinaryCircumstancesReview:
      "Avio-kompanija se poziva na vanredne okolnosti; potrebna je ručna provera.",
  }),
  lt: makeReasonLabels({
    outOfScope: "Skrydis greičiausiai nepatenka į EU261/UK261 taikymo sritį.",
    delayUnderThreeHours: "Atvykimo vėlavimas buvo trumpesnis nei 3 valandos.",
    coveredDepartureArea: "Skrydis išvyko iš EU/UK/CH/EEA oro uosto.",
    coveredArrivalCarrier:
      "Skrydis atvyko į EU/UK/CH/EEA ir jį vykdė šiai sričiai priklausantis vežėjas.",
    delayThresholdMet: "Atvykimo vėlavimas viršijo 3 valandas.",
    missedConnectionThresholdMet:
      "Praleistas persėdimas sukėlė bent 3 valandų vėlavimą galutinėje paskirties vietoje.",
    cancellationNoticeFourteenDays:
      "Oro linija apie atšaukimą pranešė bent 14 dienų iki išvykimo.",
    replacementWithinLegalWindow:
      "Pakaitinis skrydis patenka į teisines laiko ribas.",
    replacementLimitedDelayReduction:
      "Suma gali būti sumažinta 50%, nes pakaitinio skrydžio vėlavimas buvo ribotas.",
    cancellationCompensable: "Atšaukimas gali atitikti kompensacijos sąlygas.",
    deniedBoardingPassengerFault:
      "Atsisakymas įlaipinti atrodo susijęs su keleivio puse.",
    deniedBoardingAirlineFault:
      "Atsisakymas įlaipinti panašus į overbooking arba kitą oro linijos priežastį.",
    extraordinaryCircumstancesReview:
      "Oro linija remiasi ypatingomis aplinkybėmis; reikia rankinės patikros.",
  }),
  lv: makeReasonLabels({
    outOfScope: "Lidojums, visticamāk, neietilpst EU261/UK261 darbības jomā.",
    delayUnderThreeHours: "Ierašanās kavēšanās bija īsāka par 3 stundām.",
    coveredDepartureArea: "Lidojums izlidoja no EU/UK/CH/EEA lidostas.",
    coveredArrivalCarrier:
      "Lidojums ieradās EU/UK/CH/EEA un to veica aptverts pārvadātājs.",
    delayThresholdMet: "Ierašanās kavēšanās pārsniedza 3 stundas.",
    missedConnectionThresholdMet:
      "Nokavēts savienojums izraisīja vismaz 3 stundu kavēšanos galamērķī.",
    cancellationNoticeFourteenDays:
      "Aviokompānija paziņoja par atcelšanu vismaz 14 dienas pirms izlidošanas.",
    replacementWithinLegalWindow:
      "Aizvietojošais lidojums ietilpst tiesiskajā laika logā.",
    replacementLimitedDelayReduction:
      "Summa var tikt samazināta par 50%, jo aizvietojošā lidojuma kavēšanās bija ierobežota.",
    cancellationCompensable: "Atcelšana var atbilst kompensācijas nosacījumiem.",
    deniedBoardingPassengerFault:
      "Iekāpšanas atteikums šķiet saistīts ar pasažiera puses iemeslu.",
    deniedBoardingAirlineFault:
      "Iekāpšanas atteikums izskatās pēc overbooking vai cita aviokompānijas iemesla.",
    extraordinaryCircumstancesReview:
      "Aviokompānija atsaucas uz ārkārtējiem apstākļiem; nepieciešama manuāla pārbaude.",
  }),
  cs: makeReasonLabels({
    outOfScope: "Let je mimo rozsah EU261/UK261.",
    delayUnderThreeHours: "Zpoždění při příletu bylo kratší než 3 hodiny.",
    coveredDepartureArea: "Let odlétal z oblasti EU/UK/CH/EEA.",
    coveredArrivalCarrier: "Let přilétal do oblasti EU/UK/CH/EEA a provozoval ho dopravce z této oblasti.",
    delayThresholdMet: "Zpoždění při příletu přesáhlo 3 hodiny.",
    missedConnectionThresholdMet: "Zmeškaný přípoj způsobil alespoň 3 hodiny zpoždění v cíli.",
    cancellationNoticeFourteenDays: "O zrušení jste byli informováni alespoň 14 dní před odletem.",
    replacementWithinLegalWindow: "Náhradní let se vešel do zákonného časového okna.",
    replacementLimitedDelayReduction: "Částka byla snížena o 50 % kvůli omezenému zpoždění.",
    cancellationCompensable: "Zrušení může splňovat podmínky kompenzace.",
    deniedBoardingPassengerFault: "Odmítnutí nástupu zřejmě souviselo s důvodem na straně cestujícího.",
    deniedBoardingAirlineFault: "Odmítnutí nástupu vypadá jako overbooking nebo chyba aerolinky.",
    extraordinaryCircumstancesReview: "Aerolinka uvádí mimořádné okolnosti; je nutná ruční kontrola.",
  }),
  el: makeReasonLabels({
    outOfScope: "Η πτήση φαίνεται εκτός πεδίου EU261/UK261.",
    delayUnderThreeHours: "Η καθυστέρηση άφιξης ήταν κάτω από 3 ώρες.",
    coveredDepartureArea: "Η πτήση αναχώρησε από EU/UK/CH/EEA.",
    coveredArrivalCarrier: "Η πτήση έφτασε σε EU/UK/CH/EEA και εκτελέστηκε από καλυπτόμενο αερομεταφορέα.",
    delayThresholdMet: "Η καθυστέρηση άφιξης ξεπέρασε τις 3 ώρες.",
    missedConnectionThresholdMet: "Η χαμένη ανταπόκριση προκάλεσε τουλάχιστον 3 ώρες καθυστέρηση στον τελικό προορισμό.",
    cancellationNoticeFourteenDays: "Η ενημέρωση για ακύρωση έγινε τουλάχιστον 14 ημέρες πριν.",
    replacementWithinLegalWindow: "Η εναλλακτική πτήση ήταν μέσα στο νόμιμο χρονικό όριο.",
    replacementLimitedDelayReduction: "Το ποσό μειώθηκε κατά 50% λόγω περιορισμένης καθυστέρησης.",
    cancellationCompensable: "Η ακύρωση μπορεί να πληροί τις προϋποθέσεις αποζημίωσης.",
    deniedBoardingPassengerFault: "Η άρνηση επιβίβασης φαίνεται να οφείλεται σε λόγο του επιβάτη.",
    deniedBoardingAirlineFault: "Η άρνηση επιβίβασης μοιάζει με overbooking ή λόγο της αεροπορικής.",
    extraordinaryCircumstancesReview: "Η αεροπορική επικαλείται έκτακτες περιστάσεις· χρειάζεται έλεγχος.",
  }),
  hi: makeReasonLabels({
    outOfScope: "Flight EU261/UK261 scope से बाहर दिखती है.",
    delayUnderThreeHours: "Arrival delay 3 घंटे से कम था.",
    coveredDepartureArea: "Flight EU/UK/CH/EEA airport से depart हुई.",
    coveredArrivalCarrier: "Flight EU/UK/CH/EEA में arrive हुई और covered carrier ने operate की.",
    delayThresholdMet: "Arrival delay 3 घंटे से अधिक था.",
    missedConnectionThresholdMet: "Missed connection से final destination पर 3+ घंटे delay हुआ.",
    cancellationNoticeFourteenDays: "Cancellation notice departure से कम से कम 14 दिन पहले मिला.",
    replacementWithinLegalWindow: "Replacement flight legal time window में था.",
    replacementLimitedDelayReduction: "Limited delay के कारण amount 50% कम हो सकता है.",
    cancellationCompensable: "Cancellation compensation conditions में आ सकता है.",
    deniedBoardingPassengerFault: "Boarding denial passenger-side reason से जुड़ा दिखता है.",
    deniedBoardingAirlineFault: "Boarding denial overbooking या airline-side reason जैसा दिखता है.",
    extraordinaryCircumstancesReview: "Airline extraordinary circumstances बता रही है; manual review चाहिए.",
  }),
  hu: makeReasonLabels({
    outOfScope: "A járat valószínűleg kívül esik az EU261/UK261 hatályán.",
    delayUnderThreeHours: "Az érkezési késés 3 óránál rövidebb volt.",
    coveredDepartureArea: "A járat EU/UK/CH/EEA repülőtérről indult.",
    coveredArrivalCarrier: "A járat EU/UK/CH/EEA területre érkezett, és lefedett fuvarozó üzemeltette.",
    delayThresholdMet: "Az érkezési késés meghaladta a 3 órát.",
    missedConnectionThresholdMet: "A lekésett csatlakozás legalább 3 óra késést okozott a célállomáson.",
    cancellationNoticeFourteenDays: "A törlésről legalább 14 nappal indulás előtt értesítették.",
    replacementWithinLegalWindow: "A helyettesítő járat a jogszabályi időablakban volt.",
    replacementLimitedDelayReduction: "Az összeg 50%-kal csökkent a korlátozott késés miatt.",
    cancellationCompensable: "A törlés megfelelhet a kártérítési feltételeknek.",
    deniedBoardingPassengerFault: "A beszállás megtagadása utasoldali okhoz kapcsolódhat.",
    deniedBoardingAirlineFault: "A beszállás megtagadása overbookingnak vagy légitársasági oknak tűnik.",
    extraordinaryCircumstancesReview: "A légitársaság rendkívüli körülményekre hivatkozik; ellenőrzés szükséges.",
  }),
  it: makeReasonLabels({
    outOfScope: "Il volo sembra fuori dall'ambito EU261/UK261.",
    delayUnderThreeHours: "Il ritardo all'arrivo è stato inferiore a 3 ore.",
    coveredDepartureArea: "Il volo è partito da un aeroporto EU/UK/CH/SEE.",
    coveredArrivalCarrier: "Il volo è arrivato in EU/UK/CH/SEE ed era operato da un vettore coperto.",
    delayThresholdMet: "Il ritardo all'arrivo ha superato 3 ore.",
    missedConnectionThresholdMet: "La coincidenza persa ha causato almeno 3 ore di ritardo alla destinazione finale.",
    cancellationNoticeFourteenDays: "La cancellazione è stata comunicata almeno 14 giorni prima.",
    replacementWithinLegalWindow: "Il volo sostitutivo rientrava nella finestra legale.",
    replacementLimitedDelayReduction: "L'importo è stato ridotto del 50% per ritardo limitato.",
    cancellationCompensable: "La cancellazione può rientrare nei casi compensabili.",
    deniedBoardingPassengerFault: "Il negato imbarco sembra legato a un motivo del passeggero.",
    deniedBoardingAirlineFault: "Il negato imbarco sembra overbooking o responsabilità della compagnia.",
    extraordinaryCircumstancesReview: "La compagnia invoca circostanze eccezionali; serve verifica.",
  }),
  no: makeReasonLabels({
    outOfScope: "Flyet ser ut til å være utenfor EU261/UK261-området.",
    delayUnderThreeHours: "Forsinkelsen ved ankomst var under 3 timer.",
    coveredDepartureArea: "Flyet startet fra en EU/UK/CH/EØS-flyplass.",
    coveredArrivalCarrier: "Flyet ankom EU/UK/CH/EØS og ble operert av et dekket flyselskap.",
    delayThresholdMet: "Forsinkelsen ved ankomst var over 3 timer.",
    missedConnectionThresholdMet: "Mistet forbindelse ga minst 3 timer forsinkelse ved endelig destinasjon.",
    cancellationNoticeFourteenDays: "Kanselleringen ble varslet minst 14 dager før avgang.",
    replacementWithinLegalWindow: "Erstatningsflyet passet innenfor lovens tidsvindu.",
    replacementLimitedDelayReduction: "Beløpet ble redusert med 50% på grunn av begrenset forsinkelse.",
    cancellationCompensable: "Kanselleringen kan oppfylle vilkårene for erstatning.",
    deniedBoardingPassengerFault: "Nektet ombordstigning ser ut til å skyldes passasjerforhold.",
    deniedBoardingAirlineFault: "Nektet ombordstigning ligner overbooking eller flyselskapets ansvar.",
    extraordinaryCircumstancesReview: "Flyselskapet viser til ekstraordinære omstendigheter; vurdering trengs.",
  }),
  sk: makeReasonLabels({
    outOfScope: "Let je pravdepodobne mimo rozsahu EU261/UK261.",
    delayUnderThreeHours: "Meškanie pri prílete bolo kratšie ako 3 hodiny.",
    coveredDepartureArea: "Let odlietal z letiska v EU/UK/CH/EEA.",
    coveredArrivalCarrier: "Let priletel do EU/UK/CH/EEA a prevádzkoval ho krytý dopravca.",
    delayThresholdMet: "Meškanie pri prílete presiahlo 3 hodiny.",
    missedConnectionThresholdMet: "Zmeškaný prestup spôsobil aspoň 3 hodiny meškania v cieli.",
    cancellationNoticeFourteenDays: "O zrušení ste boli informovaní aspoň 14 dní pred odletom.",
    replacementWithinLegalWindow: "Náhradný let bol v zákonnom časovom okne.",
    replacementLimitedDelayReduction: "Suma bola znížená o 50 % pre obmedzené meškanie.",
    cancellationCompensable: "Zrušenie môže spĺňať podmienky kompenzácie.",
    deniedBoardingPassengerFault: "Odmietnutý nástup zrejme súvisel s dôvodom na strane cestujúceho.",
    deniedBoardingAirlineFault: "Odmietnutý nástup vyzerá ako overbooking alebo dôvod na strane aerolinky.",
    extraordinaryCircumstancesReview: "Aerolinka uvádza mimoriadne okolnosti; potrebná je kontrola.",
  }),
  sv: makeReasonLabels({
    outOfScope: "Flyget verkar ligga utanför EU261/UK261.",
    delayUnderThreeHours: "Förseningen vid ankomst var under 3 timmar.",
    coveredDepartureArea: "Flyget avgick från EU/UK/CH/EES.",
    coveredArrivalCarrier: "Flyget anlände till EU/UK/CH/EES och opererades av ett omfattat flygbolag.",
    delayThresholdMet: "Förseningen vid ankomst översteg 3 timmar.",
    missedConnectionThresholdMet: "Missad anslutning gav minst 3 timmars försening vid slutdestinationen.",
    cancellationNoticeFourteenDays: "Inställningen meddelades minst 14 dagar före avgång.",
    replacementWithinLegalWindow: "Ersättningsflyget låg inom lagens tidsfönster.",
    replacementLimitedDelayReduction: "Beloppet reducerades med 50% på grund av begränsad försening.",
    cancellationCompensable: "Det inställda flyget kan uppfylla ersättningsvillkoren.",
    deniedBoardingPassengerFault: "Nekad ombordstigning verkar bero på passagerarsidan.",
    deniedBoardingAirlineFault: "Nekad ombordstigning liknar overbooking eller flygbolagets ansvar.",
    extraordinaryCircumstancesReview: "Flygbolaget hänvisar till extraordinära omständigheter; granskning behövs.",
  }),
  tr: makeReasonLabels({
    outOfScope: "Uçuş EU261/UK261 kapsamı dışında görünüyor.",
    delayUnderThreeHours: "Varış gecikmesi 3 saatin altındaydı.",
    coveredDepartureArea: "Uçuş EU/UK/CH/EEA havalimanından kalktı.",
    coveredArrivalCarrier: "Uçuş EU/UK/CH/EEA bölgesine vardı ve kapsam içi taşıyıcı tarafından işletildi.",
    delayThresholdMet: "Varış gecikmesi 3 saati aştı.",
    missedConnectionThresholdMet: "Kaçırılan bağlantı son varışta en az 3 saat gecikmeye yol açtı.",
    cancellationNoticeFourteenDays: "İptal en az 14 gün önce bildirildi.",
    replacementWithinLegalWindow: "Alternatif uçuş yasal zaman aralığına uydu.",
    replacementLimitedDelayReduction: "Sınırlı gecikme nedeniyle tutar %50 azaltıldı.",
    cancellationCompensable: "İptal tazminat koşullarına girebilir.",
    deniedBoardingPassengerFault: "Uçağa alınmama yolcu kaynaklı bir nedene bağlı görünüyor.",
    deniedBoardingAirlineFault: "Uçağa alınmama overbooking veya havayolu kaynaklı nedene benziyor.",
    extraordinaryCircumstancesReview: "Havayolu olağanüstü koşullara dayanıyor; inceleme gerekir.",
  }),
  vi: makeReasonLabels({
    outOfScope: "Chuyến bay có vẻ nằm ngoài phạm vi EU261/UK261.",
    delayUnderThreeHours: "Delay khi đến nơi dưới 3 giờ.",
    coveredDepartureArea: "Chuyến bay khởi hành từ EU/UK/CH/EEA.",
    coveredArrivalCarrier: "Chuyến bay đến EU/UK/CH/EEA và do hãng thuộc phạm vi khai thác.",
    delayThresholdMet: "Delay khi đến nơi vượt quá 3 giờ.",
    missedConnectionThresholdMet: "Lỡ chuyến nối gây delay ít nhất 3 giờ tại điểm cuối.",
    cancellationNoticeFourteenDays: "Hãng thông báo hủy ít nhất 14 ngày trước giờ bay.",
    replacementWithinLegalWindow: "Chuyến thay thế nằm trong khung thời gian hợp lệ.",
    replacementLimitedDelayReduction: "Số tiền bị giảm 50% do delay giới hạn.",
    cancellationCompensable: "Cancellation có thể đủ điều kiện bồi thường.",
    deniedBoardingPassengerFault: "Từ chối lên máy bay có vẻ do lý do phía hành khách.",
    deniedBoardingAirlineFault: "Từ chối lên máy bay giống overbooking hoặc lỗi phía hãng.",
    extraordinaryCircumstancesReview: "Hãng viện dẫn extraordinary circumstances; cần kiểm tra.",
  }),
  zh: makeReasonLabels({
    outOfScope: "该航班似乎不在 EU261/UK261 范围内。",
    delayUnderThreeHours: "到达延误少于3小时。",
    coveredDepartureArea: "航班从 EU/UK/CH/EEA 机场出发。",
    coveredArrivalCarrier: "航班到达 EU/UK/CH/EEA，并由适用范围内的承运人运营。",
    delayThresholdMet: "到达延误超过3小时。",
    missedConnectionThresholdMet: "错过转机导致最终目的地至少延误3小时。",
    cancellationNoticeFourteenDays: "航空公司至少提前14天通知取消。",
    replacementWithinLegalWindow: "替代航班符合合法时间窗口。",
    replacementLimitedDelayReduction: "由于延误较短，金额减少50%。",
    cancellationCompensable: "取消航班可能符合赔偿条件。",
    deniedBoardingPassengerFault: "拒绝登机似乎与乘客方面原因有关。",
    deniedBoardingAirlineFault: "拒绝登机看起来像超售或航空公司原因。",
    extraordinaryCircumstancesReview: "航空公司主张特殊情况；需要审核。",
  }),
};

const simpleCopies: Record<SimpleLocaleCode, Partial<CalculatorCopy>> = {
  lt: {
    language: "Lithuanian",
    numberLocale: "lt-LT",
    campaign: "lt_compensation_calculator",
    claimWinger: {
      langParam: "lt",
      defaultUrl: "https://claimwinger.com/lt/",
      delayUrl: "https://claimwinger.com/lt/",
      cancelledUrl: "https://claimwinger.com/lt/",
    },
    steps: {
      label: (c, t) => `Žingsnis ${c} iš ${t}`,
      back: "Atgal",
      next: "Toliau",
      done: "✓",
    },
    disruptionLabels: {
      delay: {
        title: "Vėlavimas",
        description: "Skrydis į galutinę paskirties vietą atvyko keliomis valandomis vėliau.",
      },
      cancelled: {
        title: "Atšaukimas",
        description: "Oro linija atšaukė skrydį arba perkėlė jus į kitą reisą.",
      },
      denied_boarding: {
        title: "Atsisakymas įlaipinti",
        description: "Jūsų neįleido į lėktuvą, nors turėjote galiojančią rezervaciją.",
      },
      missed_connection: {
        title: "Praleistas persėdimas",
        description: "Pirmojo segmento vėlavimas sutrikdė tolesnę kelionės dalį.",
      },
    },
    routeBandLabels: {
      short: "trumpas atstumas",
      medium: "vidutinis atstumas",
      long: "ilgas atstumas",
    },
    routeStep: {
      ...baseCopy.routeStep,
      title: "Skrydžio maršrutas",
      description:
        "Skaičiuoklė vertina vėluojančius ir atšauktus skrydžius, atsisakymą įlaipinti ir praleistus persėdimus pagal EU261 ir UK261. Pasirinkite oro uostus ir nurodykite, ar skrydį vykdęs vežėjas yra iš EU/UK/CH/EEA.",
      fromLabel: "Išvykimas iš",
      toLabel: "Atvykimas į",
      swapLabel: "Sukeisti oro uostus",
      carrierTitle: "Skrydį vykdęs vežėjas",
      carrierEuTitle: "EU / UK / CH / EEA",
      carrierEuDescription: "Pvz., airBaltic, LOT, Lufthansa, KLM, British Airways, SWISS.",
      carrierOtherTitle: "Už šios zonos ribų",
      carrierOtherDescription: "Pvz., Emirates, Qatar Airways, Turkish Airlines, Air Serbia.",
      carrierHint:
        "Išvykstant iš EU/UK/CH/EEA oro uosto taisyklės paprastai apima ir ne Europos oro linijas. Atvykstant į šią zoną svarbus skrydį vykdžiusio vežėjo statusas.",
    },
    situationStep: {
      title: "Kas nutiko?",
      description:
        "Pasirinkite situaciją, kad įvertintumėte, ar gali priklausyti 250, 400 arba 600 eurų kompensacija.",
    },
    result: {
      ...baseCopy.result,
      needsReview: "Reikia patikros",
      probableAmount: "Tikėtina suma",
      result: "Rezultatas",
      noAmount: "0 €",
      perPassenger: "Įvertinimas vienam keleiviui",
      notEligible: "Šis skrydis greičiausiai neatitinka kompensacijos sąlygų.",
      reducedByHalf: (baseAmount) => `Bazinė ${baseAmount} € suma sumažinta 50%`,
      distanceLabel: "Atstumas",
      routeClassLabel: "Maršruto klasė",
      scopeLabel: "Taikymo sritis",
      coveredScope: "EU/UK/CH/EEA",
      outsideScope: "už taikymo ribų",
      explanationTitle: "Ką reiškia rezultatas?",
      explanationText:
        "Tai pirminis kompensacijos už vėluojantį ar atšauktą skrydį įvertinimas. ClaimWinger vėliau patikrina rezervaciją, faktinį atvykimo laiką, sutrikimo priežastį ir oro linijos atsakomybę.",
      reasonsTitle: "Pagrindimas",
      ctaLabel: "Perduoti atvejį ClaimWinger",
      resetLabel: "Pradėti iš naujo",
    },
    preview: {
      ...baseCopy.preview,
      badge: "EU261 / UK261 / CH / EEA",
      fromFallback: "Išvykimas",
      toFallback: "Atvykimas",
      distanceLabel: "Atstumas",
      routeLabel: "Maršrutas",
      amountLabel: "Suma",
      emptyText: "Pasirinkite maršrutą, kad matytumėte atstumą, klasę ir orientacinę sumą.",
      ruleTitle: "Greita keleivio taisyklė",
      ruleText:
        "Jei skrydis patenka į EU261 arba UK261 taikymo sritį, bent 3 valandų atvykimo vėlavimas gali reikšti kompensaciją iki 600 eurų vienam keleiviui.",
    },
    map: {
      routeMapLabel: "Maršruto žemėlapis",
      fittedFrameLabel: "Vaizdas pagal atstumą",
      distanceLabel: "Atstumas",
      emptyText: "Pasirinkite išvykimo ir atvykimo oro uostus, kad matytumėte maršruto žemėlapį.",
      ariaRoute: (f, t, d) => `Maršruto žemėlapis ${f}-${t}, atstumas ${d} kilometrų`,
      ariaDefault: "Skrydžio maršruto žemėlapis",
    },
    airport: {
      searchPlaceholder: "Miestas arba kodas, pvz., VNO",
      clearLabel: "Išvalyti",
    },
  },
  lv: {
    language: "Latvian",
    numberLocale: "lv-LV",
    campaign: "lv_compensation_calculator",
    claimWinger: {
      langParam: "en",
      defaultUrl: "https://claimwinger.com",
      delayUrl: "https://claimwinger.com/delayed-flight",
      cancelledUrl: "https://claimwinger.com/cancelled-flight",
    },
    steps: {
      label: (c, t) => `Solis ${c} no ${t}`,
      back: "Atpakaļ",
      next: "Tālāk",
      done: "✓",
    },
    disruptionLabels: {
      delay: {
        title: "Kavēšanās",
        description: "Lidojums galamērķī ieradās vairākas stundas vēlāk.",
      },
      cancelled: {
        title: "Atcelšana",
        description: "Aviokompānija atcēla lidojumu vai pārcēla jūs uz citu reisu.",
      },
      denied_boarding: {
        title: "Iekāpšanas atteikums",
        description: "Jūs neielaida lidmašīnā, lai gan jums bija derīga rezervācija.",
      },
      missed_connection: {
        title: "Nokavēts savienojums",
        description: "Pirmā posma kavēšanās izjauca nākamo ceļojuma daļu.",
      },
    },
    routeBandLabels: {
      short: "īss attālums",
      medium: "vidējs attālums",
      long: "garš attālums",
    },
    routeStep: {
      ...baseCopy.routeStep,
      title: "Lidojuma maršruts",
      description:
        "Kalkulators vērtē kavētus un atceltus lidojumus, atteiktu iekāpšanu un nokavētus savienojumus saskaņā ar EU261 un UK261. Izvēlieties lidostas un norādiet, vai faktiskais pārvadātājs ir no EU/UK/CH/EEA.",
      fromLabel: "Izlidošana no",
      toLabel: "Ierašanās uz",
      swapLabel: "Samainīt lidostas",
      carrierTitle: "Faktiskais pārvadātājs",
      carrierEuTitle: "EU / UK / CH / EEA",
      carrierEuDescription: "Piem., airBaltic, Ryanair, Lufthansa, LOT, Finnair, British Airways.",
      carrierOtherTitle: "Ārpus šīs zonas",
      carrierOtherDescription: "Piem., Emirates, Qatar Airways, Turkish Airlines, flydubai.",
      carrierHint:
        "Izlidojot no EU/UK/CH/EEA lidostas, noteikumi parasti aptver arī ne Eiropas aviokompānijas. Ielidojot šajā zonā, svarīgs ir faktiskais pārvadātājs.",
    },
    situationStep: {
      title: "Kas notika?",
      description:
        "Izvēlieties situāciju, lai novērtētu, vai var pienākties 250, 400 vai 600 EUR kompensācija.",
    },
    result: {
      ...baseCopy.result,
      needsReview: "Nepieciešama pārbaude",
      probableAmount: "Iespējamā summa",
      result: "Rezultāts",
      noAmount: "0 €",
      perPassenger: "Aplēse par pasažieri",
      notEligible: "Šis lidojums, visticamāk, neatbilst kompensācijas nosacījumiem.",
      reducedByHalf: (baseAmount) => `Bāzes summa ${baseAmount} € samazināta par 50%`,
      distanceLabel: "Attālums",
      routeClassLabel: "Maršruta klase",
      scopeLabel: "Darbības joma",
      coveredScope: "EU/UK/CH/EEA",
      outsideScope: "ārpus darbības jomas",
      explanationTitle: "Ko nozīmē rezultāts?",
      explanationText:
        "Tas ir sākotnējs kompensācijas novērtējums par kavētu vai atceltu lidojumu. ClaimWinger vēlāk pārbauda rezervāciju, faktisko ierašanās laiku, traucējuma iemeslu un aviokompānijas atbildību.",
      reasonsTitle: "Pamatojums",
      ctaLabel: "Nodot gadījumu ClaimWinger",
      resetLabel: "Sākt no jauna",
    },
    preview: {
      ...baseCopy.preview,
      badge: "EU261 / UK261 / CH / EEA",
      fromFallback: "Izlidošana",
      toFallback: "Ierašanās",
      distanceLabel: "Attālums",
      routeLabel: "Maršruts",
      amountLabel: "Summa",
      emptyText: "Izvēlieties maršrutu, lai redzētu attālumu, klasi un aptuveno summu.",
      ruleTitle: "Ātra pasažiera likumsakarība",
      ruleText:
        "Ja lidojums ietilpst EU261 vai UK261 darbības jomā, vismaz 3 stundu kavēšanās galamērķī var nozīmēt kompensāciju līdz 600 EUR par pasažieri.",
    },
    map: {
      routeMapLabel: "Maršruta karte",
      fittedFrameLabel: "Skats pēc attāluma",
      distanceLabel: "Attālums",
      emptyText: "Izvēlieties izlidošanas un ierašanās lidostas, lai redzētu maršruta karti.",
      ariaRoute: (f, t, d) => `Maršruta karte ${f}-${t}, attālums ${d} kilometri`,
      ariaDefault: "Lidojuma maršruta karte",
    },
    airport: {
      searchPlaceholder: "Pilsēta vai kods, piem., RIX",
      clearLabel: "Notīrīt",
    },
  },
  bg: {
    language: "Bulgarian",
    numberLocale: "bg-BG",
    campaign: "bg_compensation_calculator",
    claimWinger: {
      langParam: "en",
      defaultUrl: "https://claimwinger.com",
      delayUrl: "https://claimwinger.com/delayed-flight",
      cancelledUrl: "https://claimwinger.com/cancelled-flight",
    },
    steps: {
      label: (c, t) => `Стъпка ${c} от ${t}`,
      back: "Назад",
      next: "Напред",
      done: "✓",
    },
    disruptionLabels: {
      delay: {
        title: "Забавяне",
        description: "Полетът е пристигнал на крайната дестинация няколко часа по-късно.",
      },
      cancelled: {
        title: "Отмяна",
        description: "Авиокомпанията е отменила полета или ви е прехвърлила на друг.",
      },
      denied_boarding: {
        title: "Отказан бординг",
        description: "Не сте били допуснати на борда въпреки валидна резервация.",
      },
      missed_connection: {
        title: "Изпусната връзка",
        description: "Закъснение на първия сегмент е нарушило останалата част от пътуването.",
      },
    },
    routeBandLabels: {
      short: "къса дистанция",
      medium: "средна дистанция",
      long: "дълга дистанция",
    },
    routeStep: {
      title: "Маршрут на полета",
      description:
        "Калкулаторът проверява забавени полети, отменени полети, отказан бординг и изпуснати връзки по EU261 и UK261. Изберете летищата и посочете дали реалният превозвач е от EU/UK/CH/EEA.",
      fromLabel: "Заминаване от",
      toLabel: "Пристигане в",
      swapLabel: "Разменете летищата",
      carrierTitle: "Оперативен превозвач",
      carrierEuTitle: "EU / UK / CH / EEA",
      carrierEuDescription: "Например Bulgaria Air, Lufthansa, Austrian, KLM, British Airways, SWISS.",
      carrierOtherTitle: "Извън тази зона",
      carrierOtherDescription: "Например Emirates, Qatar Airways, Turkish Airlines, Air Serbia.",
      carrierHint:
        "При полети от EU/UK/CH/EEA правилата обикновено обхващат и превозвачи извън Европа. При пристигане в тази зона има значение юрисдикцията на оперативния превозвач.",
    },
    situationStep: {
      title: "Какво се случи?",
      description:
        "Изберете ситуацията, за да оцените дали може да имате право на 250, 400 или 600 евро обезщетение.",
    },
    result: {
      ...baseCopy.result,
      needsReview: "Нужна е проверка",
      probableAmount: "Вероятна сума",
      result: "Резултат",
      noAmount: "0 €",
      perPassenger: "Оценка на пътник",
      notEligible: "Този полет вероятно не изпълнява условията за обезщетение.",
      reducedByHalf: (baseAmount) => `Базовата сума ${baseAmount} € е намалена с 50%`,
      distanceLabel: "Дистанция",
      routeClassLabel: "Клас на маршрута",
      scopeLabel: "Обхват",
      coveredScope: "EU/UK/CH/EEA",
      outsideScope: "извън обхвата",
      explanationTitle: "Какво означава резултатът?",
      explanationText:
        "Това е първоначална оценка за обезщетение при забавен или отменен полет. ClaimWinger по-късно проверява резервацията, реалния час на пристигане, причината и отговорността на авиокомпанията.",
      reasonsTitle: "Обосновка",
      ctaLabel: "Изпратете случая към ClaimWinger",
      resetLabel: "Започнете отново",
    },
    preview: {
      badge: "EU261 / UK261 / CH / EEA",
      fromFallback: "Заминаване",
      toFallback: "Пристигане",
      distanceLabel: "Дистанция",
      routeLabel: "Маршрут",
      amountLabel: "Сума",
      emptyText: "Изберете маршрут, за да видите дистанцията, класа и ориентировъчната сума.",
      ruleTitle: "Бързо правило за пътници",
      ruleText:
        "Ако полетът попада под EU261 или UK261, закъснение поне 3 часа при пристигане може да означава обезщетение до 600 евро на пътник.",
    },
    map: {
      routeMapLabel: "Карта на маршрута",
      fittedFrameLabel: "Кадър според дистанцията",
      distanceLabel: "Дистанция",
      emptyText: "Изберете летища на заминаване и пристигане, за да видите картата на маршрута.",
      ariaRoute: (f, t, d) => `Карта на маршрута ${f}-${t}, дистанция ${d} километра`,
      ariaDefault: "Карта на полетния маршрут",
    },
    airport: {
      searchPlaceholder: "Град или код, напр. SOF",
      clearLabel: "Изчистете",
    },
  },
  sr: {
    language: "Serbian",
    numberLocale: "sr-Latn-RS",
    campaign: "sr_compensation_calculator",
    claimWinger: {
      langParam: "en",
      defaultUrl: "https://claimwinger.com",
      delayUrl: "https://claimwinger.com/delayed-flight",
      cancelledUrl: "https://claimwinger.com/cancelled-flight",
    },
    steps: {
      label: (c, t) => `Korak ${c} od ${t}`,
      back: "Nazad",
      next: "Dalje",
      done: "✓",
    },
    disruptionLabels: {
      delay: {
        title: "Kašnjenje",
        description: "Let je stigao na krajnju destinaciju nekoliko sati kasnije.",
      },
      cancelled: {
        title: "Otkazan let",
        description: "Avio-kompanija je otkazala let ili vas prebacila na drugi.",
      },
      denied_boarding: {
        title: "Odbijeno ukrcavanje",
        description: "Niste primljeni na let uprkos važećoj rezervaciji.",
      },
      missed_connection: {
        title: "Propuštena veza",
        description: "Kašnjenje prvog segmenta je poremetilo ostatak putovanja.",
      },
    },
    routeBandLabels: {
      short: "kratka distanca",
      medium: "srednja distanca",
      long: "duga distanca",
    },
    routeStep: {
      title: "Ruta leta",
      description:
        "Kalkulator proverava kašnjenja letova, otkazane letove, odbijeno ukrcavanje i propuštene veze po Uredbi EU 261 i UK261. Izaberite aerodrome i navedite da li je operativni prevoznik iz EU/UK/CH/EEA.",
      fromLabel: "Polazak iz",
      toLabel: "Dolazak u",
      swapLabel: "Zamenite aerodrome",
      carrierTitle: "Operativni prevoznik",
      carrierEuTitle: "EU / UK / CH / EEA",
      carrierEuDescription: "Na primer Wizz Air, Austrian, Lufthansa, KLM, British Airways, SWISS.",
      carrierOtherTitle: "Izvan ove zone",
      carrierOtherDescription: "Na primer Air Serbia, Turkish Airlines, Emirates, Qatar Airways.",
      carrierHint:
        "Kod letova koji polaze sa aerodroma u EU/UK/CH/EEA pravila obično pokrivaju i prevoznike izvan Evrope, npr. Air Serbia na letu Beč-Beograd. Kod polaska iz Srbije ka ovoj zoni važno je da let izvodi prevoznik iz EU/UK/CH/EEA, npr. Wizz Air ili Lufthansa.",
    },
    situationStep: {
      title: "Šta se dogodilo?",
      description:
        "Izaberite situaciju da procenite da li možete imati pravo na 250, 400 ili 600 € obeštećenja.",
    },
    result: {
      ...baseCopy.result,
      needsReview: "Potrebna je provera",
      probableAmount: "Verovatan iznos",
      result: "Rezultat",
      noAmount: "0 €",
      perPassenger: "Procena po putniku",
      notEligible: "Ovaj let verovatno ne ispunjava uslove za obeštećenje.",
      reducedByHalf: (baseAmount) => `Osnovni iznos ${baseAmount} € je umanjen za 50%`,
      distanceLabel: "Distanca",
      routeClassLabel: "Klasa rute",
      scopeLabel: "Opseg",
      coveredScope: "EU/UK/CH/EEA",
      outsideScope: "izvan opsega",
      explanationTitle: "Šta znači rezultat?",
      explanationText:
        "Ovo je početna procena obeštećenja za kašnjenje leta ili otkazan let. ClaimWinger kasnije proverava rezervaciju, stvarno vreme dolaska, uzrok i odgovornost avio-kompanije. Formular ClaimWinger je na engleskom jeziku.",
      reasonsTitle: "Obrazloženje",
      ctaLabel: "Pošaljite slučaj ClaimWinger-u",
      resetLabel: "Počnite ponovo",
    },
    preview: {
      badge: "EU261 / UK261 / CH / EEA",
      fromFallback: "Polazak",
      toFallback: "Dolazak",
      distanceLabel: "Distanca",
      routeLabel: "Ruta",
      amountLabel: "Iznos",
      emptyText: "Izaberite rutu da vidite distancu, klasu rute i okvirni iznos.",
      ruleTitle: "Brzo pravilo za putnike",
      ruleText:
        "Ako let potpada pod EU261 ili UK261, kašnjenje od najmanje 3 sata pri dolasku može značiti obeštećenje do 600 € po putniku.",
    },
    map: {
      routeMapLabel: "Mapa rute",
      fittedFrameLabel: "Kadar prilagođen distanci",
      distanceLabel: "Distanca",
      emptyText: "Izaberite aerodrome polaska i dolaska da vidite mapu rute.",
      ariaRoute: (f, t, d) => `Mapa rute ${f}-${t}, distanca ${d} kilometara`,
      ariaDefault: "Mapa rute leta",
    },
    airport: {
      searchPlaceholder: "Grad ili kod, npr. BEG",
      clearLabel: "Obrišite",
    },
  },
  cs: {
    language: "Czech",
    numberLocale: "cs-CZ",
    campaign: "cs_compensation_calculator",
    claimWinger: {
      langParam: "cs",
      defaultUrl: "https://claimwinger.com/cs",
      delayUrl: "https://claimwinger.com/cs",
      cancelledUrl: "https://claimwinger.com/cs",
    },
    steps: { label: (c, t) => `Krok ${c} z ${t}`, back: "Zpět", next: "Dále", done: "✓" },
    disruptionLabels: {
      delay: { title: "Zpoždění", description: "Let dorazil do cíle o několik hodin později." },
      cancelled: { title: "Zrušení", description: "Aerolinka zrušila let nebo vás přesunula na jiný." },
      denied_boarding: { title: "Odepřený nástup", description: "Nebyl vám umožněn nástup i přes platnou rezervaci." },
      missed_connection: { title: "Zmeškaný přípoj", description: "Zpoždění prvního letu narušilo další cestu." },
    },
    routeBandLabels: { short: "krátká vzdálenost", medium: "střední vzdálenost", long: "dlouhá vzdálenost" },
    routeStep: {
      title: "Trasa letu",
      description: "Kalkulačka kontroluje zpoždění, zrušení, odepřený nástup a zmeškaný přípoj podle EU261 a UK261. Vyberte letiště a typ dopravce.",
      fromLabel: "Odlet z",
      toLabel: "Přílet do",
      swapLabel: "Prohodit letiště",
      carrierTitle: "Provozující dopravce",
      carrierEuTitle: "EU / UK / CH / EEA",
      carrierEuDescription: "Např. LOT, Lufthansa, KLM, British Airways, SWISS, Norwegian.",
      carrierOtherTitle: "Mimo tuto oblast",
      carrierOtherDescription: "Např. Emirates, Qatar Airways, Turkish Airlines, Air India.",
      carrierHint: "Při odletu z EU/UK/CH/EEA se pravidla často vztahují i na mimoevropské aerolinky. Při příletu rozhoduje také dopravce.",
    },
    situationStep: { title: "Co se stalo?", description: "Vyberte situaci a odhadněte, zda můžete žádat 250, 400 nebo 600 EUR." },
    result: { ...baseCopy.result, needsReview: "Vyžaduje kontrolu", probableAmount: "Pravděpodobná částka", result: "Výsledek", perPassenger: "Odhad na cestujícího", notEligible: "Let pravděpodobně nesplňuje podmínky kompenzace.", distanceLabel: "Vzdálenost", routeClassLabel: "Typ trasy", scopeLabel: "Rozsah", outsideScope: "mimo rozsah", explanationTitle: "Co výsledek znamená?", reasonsTitle: "Odůvodnění", ctaLabel: "Předat případ ClaimWinger", resetLabel: "Začít znovu" },
    preview: { ...baseCopy.preview, fromFallback: "Odlet", toFallback: "Přílet", distanceLabel: "Vzdálenost", routeLabel: "Trasa", amountLabel: "Částka", emptyText: "Vyberte trasu a zobrazí se vzdálenost i odhad částky.", ruleTitle: "Rychlé pravidlo", ruleText: "Pokud let spadá pod EU261 nebo UK261, zpoždění při příletu alespoň 3 hodiny může znamenat kompenzaci až 600 EUR." },
    map: { routeMapLabel: "Mapa trasy", fittedFrameLabel: "Výřez podle vzdálenosti", distanceLabel: "Vzdálenost", emptyText: "Vyberte letiště odletu a příletu.", ariaRoute: (f, t, d) => `Mapa trasy ${f}-${t}, vzdálenost ${d} kilometrů`, ariaDefault: "Mapa trasy letu" },
    airport: { searchPlaceholder: "Město nebo kód, např. PRG", clearLabel: "Smazat" },
  },
  el: {
    language: "Greek",
    numberLocale: "el-GR",
    campaign: "el_compensation_calculator",
    claimWinger: { langParam: "el", defaultUrl: "https://claimwinger.com/el", delayUrl: "https://claimwinger.com/el", cancelledUrl: "https://claimwinger.com/el" },
    steps: { label: (c, t) => `Βήμα ${c} από ${t}`, back: "Πίσω", next: "Επόμενο", done: "✓" },
    disruptionLabels: {
      delay: { title: "Καθυστέρηση", description: "Η πτήση έφτασε στον τελικό προορισμό αρκετές ώρες αργότερα." },
      cancelled: { title: "Ακύρωση", description: "Η αεροπορική ακύρωσε την πτήση ή σας μετέφερε σε άλλη." },
      denied_boarding: { title: "Άρνηση επιβίβασης", description: "Δεν σας επέτρεψαν να επιβιβαστείτε παρότι είχατε κράτηση." },
      missed_connection: { title: "Χαμένη ανταπόκριση", description: "Η καθυστέρηση του πρώτου σκέλους χάλασε τη συνέχεια του ταξιδιού." },
    },
    routeBandLabels: { short: "μικρή απόσταση", medium: "μεσαία απόσταση", long: "μεγάλη απόσταση" },
    routeStep: { ...baseCopy.routeStep, title: "Διαδρομή πτήσης", fromLabel: "Αναχώρηση από", toLabel: "Άφιξη σε", swapLabel: "Αλλαγή αεροδρομίων", carrierTitle: "Πραγματικός αερομεταφορέας", carrierOtherTitle: "Εκτός περιοχής", carrierHint: "Για αναχώρηση από EU/UK/CH/EEA οι κανόνες συνήθως καλύπτουν και μη ευρωπαϊκές εταιρείες." },
    situationStep: { title: "Τι συνέβη;", description: "Επιλέξτε την περίπτωση για να εκτιμήσετε αν μπορεί να δικαιούστε 250, 400 ή 600 EUR." },
    result: { ...baseCopy.result, needsReview: "Χρειάζεται έλεγχο", probableAmount: "Πιθανό ποσό", result: "Αποτέλεσμα", perPassenger: "Εκτίμηση ανά επιβάτη", notEligible: "Η πτήση πιθανότατα δεν πληροί τις προϋποθέσεις.", distanceLabel: "Απόσταση", routeClassLabel: "Κατηγορία", scopeLabel: "Πεδίο", outsideScope: "εκτός πεδίου", explanationTitle: "Τι σημαίνει το αποτέλεσμα;", reasonsTitle: "Αιτιολόγηση", ctaLabel: "Υποβολή στην ClaimWinger", resetLabel: "Ξεκινήστε ξανά" },
    preview: { ...baseCopy.preview, fromFallback: "Αναχώρηση", toFallback: "Άφιξη", distanceLabel: "Απόσταση", routeLabel: "Διαδρομή", amountLabel: "Ποσό", ruleTitle: "Γρήγορος κανόνας" },
    map: { routeMapLabel: "Χάρτης διαδρομής", fittedFrameLabel: "Προσαρμοσμένο καρέ", distanceLabel: "Απόσταση", emptyText: "Επιλέξτε αεροδρόμια για να δείτε τον χάρτη.", ariaRoute: (f, t, d) => `Χάρτης διαδρομής ${f}-${t}, απόσταση ${d} χιλιόμετρα`, ariaDefault: "Χάρτης πτήσης" },
    airport: { searchPlaceholder: "Πόλη ή κωδικός, π.χ. ATH", clearLabel: "Καθαρισμός" },
  },
  hi: {
    language: "Hindi",
    numberLocale: "hi-IN",
    campaign: "hi_compensation_calculator",
    claimWinger: { langParam: "hi", defaultUrl: "https://claimwinger.com/hi", delayUrl: "https://claimwinger.com/hi/deri-udaan", cancelledUrl: "https://claimwinger.com/hi/radd-udaan" },
    steps: { label: (c, t) => `चरण ${c} / ${t}`, back: "वापस", next: "आगे", done: "✓" },
    disruptionLabels: {
      delay: { title: "देरी", description: "उड़ान अंतिम गंतव्य पर कई घंटे देर से पहुँची।" },
      cancelled: { title: "रद्द उड़ान", description: "एयरलाइन ने उड़ान रद्द की या आपको दूसरे विकल्प पर भेजा।" },
      denied_boarding: { title: "बोर्डिंग से इनकार", description: "वैध बुकिंग के बावजूद आपको बोर्ड नहीं करने दिया गया।" },
      missed_connection: { title: "कनेक्शन छूटा", description: "पहली उड़ान की देरी से आगे की यात्रा प्रभावित हुई।" },
    },
    routeBandLabels: { short: "छोटी दूरी", medium: "मध्यम दूरी", long: "लंबी दूरी" },
    routeStep: { ...baseCopy.routeStep, title: "उड़ान मार्ग", description: "कैलकुलेटर EU261/UK261 के तहत देरी, रद्द उड़ान, overbooking और missed connection की प्रारंभिक जांच करता है।", fromLabel: "प्रस्थान", toLabel: "आगमन", swapLabel: "एयरपोर्ट बदलें", carrierTitle: "ऑपरेटिंग एयरलाइन", carrierOtherTitle: "इस क्षेत्र के बाहर" },
    situationStep: { title: "क्या हुआ?", description: "देखें कि आपकी स्थिति में €250, €400 या €600 यानी लगभग ₹52,000 तक दावा बन सकता है या नहीं।" },
    result: { ...baseCopy.result, needsReview: "जांच आवश्यक", probableAmount: "संभावित राशि", result: "परिणाम", perPassenger: "प्रति यात्री अनुमान", notEligible: "यह उड़ान शायद मुआवज़े की शर्तें पूरी नहीं करती।", distanceLabel: "दूरी", routeClassLabel: "मार्ग श्रेणी", scopeLabel: "दायरा", outsideScope: "दायरे से बाहर", explanationTitle: "इस परिणाम का क्या मतलब है?", reasonsTitle: "कारण", ctaLabel: "ClaimWinger में दावा शुरू करें", resetLabel: "फिर से शुरू करें" },
    preview: { ...baseCopy.preview, fromFallback: "प्रस्थान", toFallback: "आगमन", distanceLabel: "दूरी", routeLabel: "मार्ग", amountLabel: "राशि", ruleTitle: "त्वरित नियम" },
    map: { routeMapLabel: "मार्ग मानचित्र", fittedFrameLabel: "दूरी के अनुसार दृश्य", distanceLabel: "दूरी", emptyText: "मार्ग मानचित्र देखने के लिए प्रस्थान और आगमन एयरपोर्ट चुनें।", ariaRoute: (f, t, d) => `मार्ग मानचित्र ${f}-${t}, दूरी ${d} किलोमीटर`, ariaDefault: "उड़ान मार्ग मानचित्र" },
    airport: { searchPlaceholder: "शहर या कोड, जैसे DEL", clearLabel: "हटाएं" },
  },
  hu: {
    language: "Hungarian",
    numberLocale: "hu-HU",
    campaign: "hu_compensation_calculator",
    claimWinger: { langParam: "hu", defaultUrl: "https://claimwinger.com/hu", delayUrl: "https://claimwinger.com/hu/kesett-jarat", cancelledUrl: "https://claimwinger.com/hu/torolt-jarat" },
    steps: { label: (c, t) => `${c}. lépés / ${t}`, back: "Vissza", next: "Tovább", done: "✓" },
    disruptionLabels: {
      delay: { title: "Késés", description: "A járat több órával később érkezett meg." },
      cancelled: { title: "Törlés", description: "A légitársaság törölte a járatot vagy másikra tette át." },
      denied_boarding: { title: "Beszállás megtagadása", description: "Érvényes foglalás ellenére nem engedtek fel." },
      missed_connection: { title: "Lekésett csatlakozás", description: "Az első szakasz késése megszakította az utat." },
    },
    routeBandLabels: { short: "rövid táv", medium: "közepes táv", long: "hosszú táv" },
    routeStep: { ...baseCopy.routeStep, title: "Járat útvonala", fromLabel: "Indulás", toLabel: "Érkezés", swapLabel: "Repterek cseréje", carrierTitle: "Üzemeltető légitársaság", carrierOtherTitle: "Ezen kívüli" },
    situationStep: { title: "Mi történt?", description: "Válaszd ki a helyzetet, és becsüld meg a 250, 400 vagy 600 eurós kártérítési lehetőséget." },
    result: { ...baseCopy.result, needsReview: "Ellenőrzést igényel", probableAmount: "Valószínű összeg", result: "Eredmény", perPassenger: "Becsült összeg utasonként", notEligible: "Ez a járat valószínűleg nem felel meg a feltételeknek.", distanceLabel: "Távolság", routeClassLabel: "Útvonal típusa", scopeLabel: "Hatály", outsideScope: "hatályon kívül", explanationTitle: "Mit jelent az eredmény?", reasonsTitle: "Indoklás", ctaLabel: "Ügy indítása ClaimWingerrel", resetLabel: "Újrakezdés" },
    preview: { ...baseCopy.preview, fromFallback: "Indulás", toFallback: "Érkezés", distanceLabel: "Távolság", routeLabel: "Útvonal", amountLabel: "Összeg", ruleTitle: "Gyors szabály" },
    map: { routeMapLabel: "Útvonaltérkép", fittedFrameLabel: "Távolsághoz igazított nézet", distanceLabel: "Távolság", emptyText: "Válaszd ki az indulási és érkezési repteret.", ariaRoute: (f, t, d) => `Útvonaltérkép ${f}-${t}, távolság ${d} kilométer`, ariaDefault: "Járat útvonaltérképe" },
    airport: { searchPlaceholder: "Város vagy kód, pl. BUD", clearLabel: "Törlés" },
  },
  it: {
    language: "Italian",
    numberLocale: "it-IT",
    campaign: "it_compensation_calculator",
    claimWinger: { langParam: "it", defaultUrl: "https://claimwinger.com/it", delayUrl: "https://claimwinger.com/it", cancelledUrl: "https://claimwinger.com/it" },
    steps: { label: (c, t) => `Passo ${c} di ${t}`, back: "Indietro", next: "Avanti", done: "✓" },
    disruptionLabels: {
      delay: { title: "Ritardo", description: "Il volo è arrivato a destinazione con diverse ore di ritardo." },
      cancelled: { title: "Cancellazione", description: "La compagnia ha cancellato il volo o ti ha spostato su un altro." },
      denied_boarding: { title: "Imbarco negato", description: "Non sei stato imbarcato nonostante la prenotazione valida." },
      missed_connection: { title: "Coincidenza persa", description: "Il ritardo del primo volo ha compromesso il viaggio." },
    },
    routeBandLabels: { short: "breve distanza", medium: "media distanza", long: "lunga distanza" },
    routeStep: { ...baseCopy.routeStep, title: "Rotta del volo", fromLabel: "Partenza da", toLabel: "Arrivo a", swapLabel: "Inverti aeroporti", carrierTitle: "Vettore operativo", carrierOtherTitle: "Fuori da quest'area" },
    situationStep: { title: "Cosa è successo?", description: "Seleziona la situazione per stimare se puoi ottenere 250, 400 o 600 EUR." },
    result: { ...baseCopy.result, needsReview: "Da verificare", probableAmount: "Importo probabile", result: "Risultato", perPassenger: "Stima per passeggero", notEligible: "Questo volo probabilmente non soddisfa le condizioni.", distanceLabel: "Distanza", routeClassLabel: "Classe rotta", scopeLabel: "Ambito", outsideScope: "fuori ambito", explanationTitle: "Cosa significa il risultato?", reasonsTitle: "Motivazione", ctaLabel: "Invia il caso a ClaimWinger", resetLabel: "Ricomincia" },
    preview: { ...baseCopy.preview, fromFallback: "Partenza", toFallback: "Arrivo", distanceLabel: "Distanza", routeLabel: "Rotta", amountLabel: "Importo", ruleTitle: "Regola rapida" },
    map: { routeMapLabel: "Mappa della rotta", fittedFrameLabel: "Vista adattata alla distanza", distanceLabel: "Distanza", emptyText: "Scegli gli aeroporti per vedere la mappa.", ariaRoute: (f, t, d) => `Mappa rotta ${f}-${t}, distanza ${d} chilometri`, ariaDefault: "Mappa del volo" },
    airport: { searchPlaceholder: "Città o codice, es. FCO", clearLabel: "Cancella" },
  },
  no: {
    language: "Norwegian",
    numberLocale: "nb-NO",
    campaign: "no_compensation_calculator",
    claimWinger: { langParam: "no", defaultUrl: "https://claimwinger.com/no", delayUrl: "https://claimwinger.com/no", cancelledUrl: "https://claimwinger.com/no" },
    steps: { label: (c, t) => `Steg ${c} av ${t}`, back: "Tilbake", next: "Neste", done: "✓" },
    disruptionLabels: {
      delay: { title: "Forsinkelse", description: "Flyet kom frem flere timer for sent." },
      cancelled: { title: "Kansellering", description: "Flyselskapet kansellerte flyet eller flyttet deg til en annen avgang." },
      denied_boarding: { title: "Nektet ombordstigning", description: "Du fikk ikke gå om bord selv med gyldig booking." },
      missed_connection: { title: "Mistet forbindelse", description: "Første forsinkelse ødela videre reise." },
    },
    routeBandLabels: { short: "kort distanse", medium: "middels distanse", long: "lang distanse" },
    routeStep: { ...baseCopy.routeStep, title: "Flyrute", fromLabel: "Avreise fra", toLabel: "Ankomst til", swapLabel: "Bytt flyplasser", carrierTitle: "Opererende flyselskap", carrierOtherTitle: "Utenfor området" },
    situationStep: { title: "Hva skjedde?", description: "Velg situasjonen for å beregne om du kan ha krav på 250, 400 eller 600 EUR." },
    result: { ...baseCopy.result, needsReview: "Må vurderes", probableAmount: "Sannsynlig beløp", result: "Resultat", perPassenger: "Estimert per passasjer", notEligible: "Flyet oppfyller trolig ikke vilkårene.", distanceLabel: "Distanse", routeClassLabel: "Ruteklasse", scopeLabel: "Omfang", outsideScope: "utenfor omfang", explanationTitle: "Hva betyr resultatet?", reasonsTitle: "Begrunnelse", ctaLabel: "Send saken til ClaimWinger", resetLabel: "Start på nytt" },
    preview: { ...baseCopy.preview, fromFallback: "Avreise", toFallback: "Ankomst", distanceLabel: "Distanse", routeLabel: "Rute", amountLabel: "Beløp", ruleTitle: "Rask regel" },
    map: { routeMapLabel: "Rutekart", fittedFrameLabel: "Utsnitt tilpasset distanse", distanceLabel: "Distanse", emptyText: "Velg avreise- og ankomstflyplass.", ariaRoute: (f, t, d) => `Rutekart ${f}-${t}, distanse ${d} kilometer`, ariaDefault: "Flyrutekart" },
    airport: { searchPlaceholder: "By eller kode, f.eks. OSL", clearLabel: "Fjern" },
  },
  sk: {
    language: "Slovak",
    numberLocale: "sk-SK",
    campaign: "sk_compensation_calculator",
    claimWinger: { langParam: "sk", defaultUrl: "https://claimwinger.com/sk", delayUrl: "https://claimwinger.com/sk", cancelledUrl: "https://claimwinger.com/sk" },
    steps: { label: (c, t) => `Krok ${c} z ${t}`, back: "Späť", next: "Ďalej", done: "✓" },
    disruptionLabels: {
      delay: { title: "Meškanie", description: "Let dorazil do cieľa o niekoľko hodín neskôr." },
      cancelled: { title: "Zrušenie", description: "Aerolinka zrušila let alebo vás presunula na iný." },
      denied_boarding: { title: "Odmietnutý nástup", description: "Nebol vám umožnený nástup napriek platnej rezervácii." },
      missed_connection: { title: "Zmeškaný prestup", description: "Meškanie prvého letu narušilo ďalšiu cestu." },
    },
    routeBandLabels: { short: "krátka vzdialenosť", medium: "stredná vzdialenosť", long: "dlhá vzdialenosť" },
    routeStep: { ...baseCopy.routeStep, title: "Trasa letu", fromLabel: "Odlet z", toLabel: "Prílet do", swapLabel: "Vymeniť letiská", carrierTitle: "Prevádzkujúci dopravca", carrierOtherTitle: "Mimo tejto oblasti" },
    situationStep: { title: "Čo sa stalo?", description: "Vyberte situáciu a odhadnite, či môžete žiadať 250, 400 alebo 600 EUR." },
    result: { ...baseCopy.result, needsReview: "Vyžaduje kontrolu", probableAmount: "Pravdepodobná suma", result: "Výsledok", perPassenger: "Odhad na cestujúceho", notEligible: "Let pravdepodobne nespĺňa podmienky.", distanceLabel: "Vzdialenosť", routeClassLabel: "Trieda trasy", scopeLabel: "Rozsah", outsideScope: "mimo rozsahu", explanationTitle: "Čo znamená výsledok?", reasonsTitle: "Odôvodnenie", ctaLabel: "Odoslať prípad ClaimWinger", resetLabel: "Začať znova" },
    preview: { ...baseCopy.preview, fromFallback: "Odlet", toFallback: "Prílet", distanceLabel: "Vzdialenosť", routeLabel: "Trasa", amountLabel: "Suma", ruleTitle: "Rýchle pravidlo" },
    map: { routeMapLabel: "Mapa trasy", fittedFrameLabel: "Výrez podľa vzdialenosti", distanceLabel: "Vzdialenosť", emptyText: "Vyberte letisko odletu a príletu.", ariaRoute: (f, t, d) => `Mapa trasy ${f}-${t}, vzdialenosť ${d} kilometrov`, ariaDefault: "Mapa trasy letu" },
    airport: { searchPlaceholder: "Mesto alebo kód, napr. BTS", clearLabel: "Vymazať" },
  },
  sv: {
    language: "Swedish",
    numberLocale: "sv-SE",
    campaign: "sv_compensation_calculator",
    claimWinger: { langParam: "sv", defaultUrl: "https://claimwinger.com/sv", delayUrl: "https://claimwinger.com/sv", cancelledUrl: "https://claimwinger.com/sv" },
    steps: { label: (c, t) => `Steg ${c} av ${t}`, back: "Tillbaka", next: "Nästa", done: "✓" },
    disruptionLabels: {
      delay: { title: "Försening", description: "Flyget kom fram flera timmar sent." },
      cancelled: { title: "Inställt flyg", description: "Flygbolaget ställde in flyget eller bokade om dig." },
      denied_boarding: { title: "Nekad ombordstigning", description: "Du fick inte gå ombord trots giltig bokning." },
      missed_connection: { title: "Missad anslutning", description: "Förseningen på första flyget störde resten av resan." },
    },
    routeBandLabels: { short: "kort distans", medium: "medellång distans", long: "lång distans" },
    routeStep: { ...baseCopy.routeStep, title: "Flygrutt", fromLabel: "Avresa från", toLabel: "Ankomst till", swapLabel: "Byt flygplatser", carrierTitle: "Opererande flygbolag", carrierOtherTitle: "Utanför området" },
    situationStep: { title: "Vad hände?", description: "Välj situationen för att uppskatta om du kan få 250, 400 eller 600 EUR." },
    result: { ...baseCopy.result, needsReview: "Kräver granskning", probableAmount: "Troligt belopp", result: "Resultat", perPassenger: "Uppskattat per passagerare", notEligible: "Flyget uppfyller troligen inte villkoren.", distanceLabel: "Distans", routeClassLabel: "Ruttklass", scopeLabel: "Omfattning", outsideScope: "utanför omfattning", explanationTitle: "Vad betyder resultatet?", reasonsTitle: "Motivering", ctaLabel: "Skicka ärendet till ClaimWinger", resetLabel: "Börja om" },
    preview: { ...baseCopy.preview, fromFallback: "Avresa", toFallback: "Ankomst", distanceLabel: "Distans", routeLabel: "Rutt", amountLabel: "Belopp", ruleTitle: "Snabb regel" },
    map: { routeMapLabel: "Ruttkarta", fittedFrameLabel: "Vy anpassad till distans", distanceLabel: "Distans", emptyText: "Välj avrese- och ankomstflygplats.", ariaRoute: (f, t, d) => `Ruttkarta ${f}-${t}, distans ${d} kilometer`, ariaDefault: "Flygruttkarta" },
    airport: { searchPlaceholder: "Stad eller kod, t.ex. ARN", clearLabel: "Rensa" },
  },
  tr: {
    language: "Turkish",
    numberLocale: "tr-TR",
    campaign: "tr_compensation_calculator",
    claimWinger: { langParam: "tr", defaultUrl: "https://claimwinger.com/tr", delayUrl: "https://claimwinger.com/tr", cancelledUrl: "https://claimwinger.com/tr" },
    steps: { label: (c, t) => `Adım ${c} / ${t}`, back: "Geri", next: "İleri", done: "✓" },
    disruptionLabels: {
      delay: { title: "Gecikme", description: "Uçuş son varış noktasına birkaç saat geç ulaştı." },
      cancelled: { title: "İptal", description: "Havayolu uçuşu iptal etti veya sizi başka uçuşa aldı." },
      denied_boarding: { title: "Uçağa alınmama", description: "Geçerli rezervasyona rağmen uçağa alınmadınız." },
      missed_connection: { title: "Kaçırılan bağlantı", description: "İlk uçuş gecikmesi yolculuğun devamını bozdu." },
    },
    routeBandLabels: { short: "kısa mesafe", medium: "orta mesafe", long: "uzun mesafe" },
    routeStep: { ...baseCopy.routeStep, title: "Uçuş rotası", fromLabel: "Kalkış", toLabel: "Varış", swapLabel: "Havalimanlarını değiştir", carrierTitle: "Uçuşu işleten havayolu", carrierOtherTitle: "Bu alan dışında" },
    situationStep: { title: "Ne oldu?", description: "250, 400 veya 600 EUR tazminat ihtimalini görmek için durumu seçin." },
    result: { ...baseCopy.result, needsReview: "Kontrol gerekli", probableAmount: "Muhtemel tutar", result: "Sonuç", perPassenger: "Yolcu başına tahmini", notEligible: "Bu uçuş muhtemelen tazminat şartlarını karşılamıyor.", distanceLabel: "Mesafe", routeClassLabel: "Rota sınıfı", scopeLabel: "Kapsam", outsideScope: "kapsam dışı", explanationTitle: "Sonuç ne anlama geliyor?", reasonsTitle: "Gerekçe", ctaLabel: "Dosyayı ClaimWinger'a gönder", resetLabel: "Yeniden başla" },
    preview: { ...baseCopy.preview, fromFallback: "Kalkış", toFallback: "Varış", distanceLabel: "Mesafe", routeLabel: "Rota", amountLabel: "Tutar", ruleTitle: "Hızlı yolcu kuralı" },
    map: { routeMapLabel: "Rota haritası", fittedFrameLabel: "Mesafeye uyarlanmış görünüm", distanceLabel: "Mesafe", emptyText: "Rota haritası için kalkış ve varış havalimanlarını seçin.", ariaRoute: (f, t, d) => `Rota haritası ${f}-${t}, mesafe ${d} kilometre`, ariaDefault: "Uçuş rota haritası" },
    airport: { searchPlaceholder: "Şehir veya kod, ör. IST", clearLabel: "Temizle" },
  },
  vi: {
    language: "Vietnamese",
    numberLocale: "vi-VN",
    campaign: "vi_compensation_calculator",
    claimWinger: { langParam: "vi", defaultUrl: "https://claimwinger.com/vi", delayUrl: "https://claimwinger.com/vi/chuyen-bay-bi-hoan", cancelledUrl: "https://claimwinger.com/vi/chuyen-bay-bi-huy" },
    steps: { label: (c, t) => `Bước ${c}/${t}`, back: "Quay lại", next: "Tiếp tục", done: "✓" },
    disruptionLabels: {
      delay: { title: "Chuyến bay bị trễ", description: "Chuyến bay đến điểm cuối muộn hơn vài giờ." },
      cancelled: { title: "Chuyến bay bị hủy", description: "Hãng hủy chuyến hoặc chuyển bạn sang chuyến khác." },
      denied_boarding: { title: "Từ chối lên máy bay", description: "Bạn không được lên máy bay dù có đặt chỗ hợp lệ." },
      missed_connection: { title: "Lỡ chuyến nối", description: "Chặng đầu bị trễ làm hỏng hành trình tiếp theo." },
    },
    routeBandLabels: { short: "chặng ngắn", medium: "chặng trung bình", long: "chặng dài" },
    routeStep: { ...baseCopy.routeStep, title: "Hành trình bay", fromLabel: "Khởi hành từ", toLabel: "Đến", swapLabel: "Đổi sân bay", carrierTitle: "Hãng khai thác", carrierOtherTitle: "Ngoài khu vực này" },
    situationStep: { title: "Điều gì đã xảy ra?", description: "Chọn tình huống để ước tính khoản 250, 400 hoặc 600 EUR." },
    result: { ...baseCopy.result, needsReview: "Cần kiểm tra", probableAmount: "Số tiền dự kiến", result: "Kết quả", perPassenger: "Ước tính mỗi hành khách", notEligible: "Chuyến bay này có thể không đủ điều kiện bồi thường.", distanceLabel: "Khoảng cách", routeClassLabel: "Loại chặng", scopeLabel: "Phạm vi", outsideScope: "ngoài phạm vi", explanationTitle: "Kết quả này có nghĩa gì?", reasonsTitle: "Lý do", ctaLabel: "Gửi hồ sơ cho ClaimWinger", resetLabel: "Bắt đầu lại" },
    preview: { ...baseCopy.preview, fromFallback: "Khởi hành", toFallback: "Đến", distanceLabel: "Khoảng cách", routeLabel: "Chặng", amountLabel: "Số tiền", ruleTitle: "Quy tắc nhanh" },
    map: { routeMapLabel: "Bản đồ chặng bay", fittedFrameLabel: "Khung theo khoảng cách", distanceLabel: "Khoảng cách", emptyText: "Chọn sân bay đi và đến để xem bản đồ.", ariaRoute: (f, t, d) => `Bản đồ chặng ${f}-${t}, khoảng cách ${d} km`, ariaDefault: "Bản đồ chặng bay" },
    airport: { searchPlaceholder: "Thành phố hoặc mã, ví dụ HAN", clearLabel: "Xóa" },
  },
  zh: {
    language: "Chinese",
    numberLocale: "zh-CN",
    campaign: "zh_compensation_calculator",
    claimWinger: { langParam: "zh", defaultUrl: "https://claimwinger.com/zh", delayUrl: "https://claimwinger.com/zh", cancelledUrl: "https://claimwinger.com/zh" },
    steps: { label: (c, t) => `第 ${c} / ${t} 步`, back: "返回", next: "下一步", done: "✓" },
    disruptionLabels: {
      delay: { title: "航班延误", description: "航班到达最终目的地晚了几个小时。" },
      cancelled: { title: "航班取消", description: "航空公司取消航班或安排您改乘其他航班。" },
      denied_boarding: { title: "拒绝登机", description: "您有有效预订但未被允许登机。" },
      missed_connection: { title: "错过转机", description: "第一段延误影响了后续行程。" },
    },
    routeBandLabels: { short: "短途", medium: "中程", long: "长途" },
    routeStep: { ...baseCopy.routeStep, title: "航班路线", fromLabel: "出发地", toLabel: "到达地", swapLabel: "交换机场", carrierTitle: "实际承运航空公司", carrierOtherTitle: "该区域之外" },
    situationStep: { title: "发生了什么？", description: "选择情况，估算是否可能获得 250、400 或 600 欧元赔偿。" },
    result: { ...baseCopy.result, needsReview: "需要审核", probableAmount: "预计金额", result: "结果", perPassenger: "每位乘客估算", notEligible: "该航班可能不符合赔偿条件。", distanceLabel: "距离", routeClassLabel: "航线类型", scopeLabel: "适用范围", outsideScope: "范围外", explanationTitle: "这个结果意味着什么？", reasonsTitle: "判断依据", ctaLabel: "提交给 ClaimWinger", resetLabel: "重新开始" },
    preview: { ...baseCopy.preview, fromFallback: "出发", toFallback: "到达", distanceLabel: "距离", routeLabel: "航线", amountLabel: "金额", ruleTitle: "快速规则" },
    map: { routeMapLabel: "航线地图", fittedFrameLabel: "按距离调整视图", distanceLabel: "距离", emptyText: "请选择出发和到达机场以查看航线地图。", ariaRoute: (f, t, d) => `航线地图 ${f}-${t}，距离 ${d} 公里`, ariaDefault: "航班路线地图" },
    airport: { searchPlaceholder: "城市或代码，例如 PVG", clearLabel: "清除" },
  },
};

function mergeCopy(code: SimpleLocaleCode): CalculatorCopy {
  const override = simpleCopies[code];
  const detailsOverride = localizedDetails[code];

  return {
    ...baseCopy,
    ...override,
    code,
    claimWinger: {
      ...baseCopy.claimWinger,
      ...override.claimWinger,
    },
    steps: {
      ...baseCopy.steps,
      ...override.steps,
    },
    disruptionLabels: {
      ...baseCopy.disruptionLabels,
      ...override.disruptionLabels,
    },
    routeBandLabels: {
      ...baseCopy.routeBandLabels,
      ...override.routeBandLabels,
    },
    reasonLabels: localizedReasons[code],
    routeStep: {
      ...baseCopy.routeStep,
      ...override.routeStep,
    },
    situationStep: {
      ...baseCopy.situationStep,
      ...override.situationStep,
    },
    detailsStep: {
      ...baseCopy.detailsStep,
      ...override.detailsStep,
      ...detailsOverride,
      delayOptions: {
        ...baseCopy.detailsStep.delayOptions,
        ...override.detailsStep?.delayOptions,
        ...detailsOverride.delayOptions,
      },
      cancellationOptions: {
        ...baseCopy.detailsStep.cancellationOptions,
        ...override.detailsStep?.cancellationOptions,
        ...detailsOverride.cancellationOptions,
      },
      replacementOptions: {
        ...baseCopy.detailsStep.replacementOptions,
        ...override.detailsStep?.replacementOptions,
        ...detailsOverride.replacementOptions,
      },
      deniedOptions: {
        ...baseCopy.detailsStep.deniedOptions,
        ...override.detailsStep?.deniedOptions,
        ...detailsOverride.deniedOptions,
      },
      extraordinaryOptions: {
        ...baseCopy.detailsStep.extraordinaryOptions,
        ...override.detailsStep?.extraordinaryOptions,
        ...detailsOverride.extraordinaryOptions,
      },
    },
    result: {
      ...baseCopy.result,
      ...override.result,
    },
    preview: {
      ...baseCopy.preview,
      ...override.preview,
    },
    map: {
      ...baseCopy.map,
      ...override.map,
    },
    airport: {
      ...baseCopy.airport,
      ...override.airport,
    },
  };
}

export const calculatorCopies: Record<CalculatorLocaleCode, CalculatorCopy> = {
  pl: polishCopy,
  en: baseCopy,
  cs: mergeCopy("cs"),
  el: mergeCopy("el"),
  hi: mergeCopy("hi"),
  hu: mergeCopy("hu"),
  it: mergeCopy("it"),
  no: mergeCopy("no"),
  sk: mergeCopy("sk"),
  sv: mergeCopy("sv"),
  tr: mergeCopy("tr"),
  vi: mergeCopy("vi"),
  zh: mergeCopy("zh"),
  bg: mergeCopy("bg"),
  lt: mergeCopy("lt"),
  lv: mergeCopy("lv"),
  sr: mergeCopy("sr"),
};

export function getCalculatorCopy(locale: CalculatorLocaleCode = "pl") {
  return calculatorCopies[locale] || calculatorCopies.pl;
}
