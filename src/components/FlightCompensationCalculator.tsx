import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Plane,
  RotateCcw,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  compensationAirports,
  type CompensationAirport,
} from "@/lib/compensationAirports";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";
import {
  buildClaimWingerCalculatorUrl,
  calculateGreatCircleDistanceKm,
  calculateFlightCompensation,
  type CompensationInput,
  type FlightDisruption,
} from "@/lib/flightCompensationCalculator";
import {
  getCalculatorCopy,
  type CalculatorCopy,
  type CalculatorLocaleCode,
} from "@/lib/flightCompensationCalculatorCopy";
import { cn } from "@/lib/utils";
import { worldLandRings } from "@/lib/worldLandRings";

type CalculatorStep = 1 | 2 | 3 | 4;
type CalculatorResult = NonNullable<ReturnType<typeof calculateFlightCompensation>>;

const initialInput: CompensationInput = {
  from: null,
  to: null,
  carrierJurisdiction: "eu_uk_ch_eea",
  disruption: null,
  delayBand: null,
  cancellationNotice: null,
  replacementFlight: null,
  deniedBoardingReason: null,
  extraordinaryCircumstances: "unknown",
};

export function FlightCompensationCalculator({
  className,
  locale = "pl",
}: {
  className?: string;
  locale?: CalculatorLocaleCode;
}) {
  const copy = getCalculatorCopy(locale);
  const [step, setStep] = useState<CalculatorStep>(1);
  const [input, setInput] = useState<CompensationInput>(initialInput);
  const result = calculateFlightCompensation(input);
  const preview = calculateFlightCompensation({
    ...input,
    disruption: input.disruption || "delay",
    delayBand: input.delayBand || "over_4h",
  });

  const updateInput = (patch: Partial<CompensationInput>) => {
    setInput((current) => ({ ...current, ...patch }));
  };

  const canContinue = Boolean(
    (step === 1 && input.from && input.to && input.from.code !== input.to.code) ||
    (step === 2 && input.disruption) ||
    (step === 3 && detailsAreComplete(input)),
  );

  const reset = () => {
    setInput(initialInput);
    setStep(1);
  };

  const ctaHref =
    result &&
    buildClaimWingerCalculatorUrl({
      input,
      result,
      baseUrl: getClaimWingerBaseUrl(input, copy),
      campaign: copy.campaign,
      lang: copy.claimWinger.langParam,
    });

  return (
    <section
      className={cn(
        "overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950",
        className,
      )}
      data-claimwinger-calculator={copy.code}
    >
      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            {[1, 2, 3].map((item) => (
              <span
                key={item}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-full border text-sm font-bold",
                  item < step &&
                    "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300",
                  item === step &&
                    "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/25",
                  item > step &&
                    "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-800 dark:bg-slate-900",
                )}
              >
                {item < step ? copy.steps.done : item}
              </span>
            ))}
            <span className="ml-auto rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              {copy.steps.label(Math.min(step, 3), 3)}
            </span>
          </div>

          {step === 1 && (
            <RouteStep input={input} onChange={updateInput} copy={copy} />
          )}

          {step === 2 && (
            <SituationStep input={input} onChange={updateInput} copy={copy} />
          )}

          {step === 3 && (
            <DetailsStep input={input} onChange={updateInput} copy={copy} />
          )}

          {step === 4 && result && (
            <ResultStep
              result={result}
              ctaHref={ctaHref || "https://claimwinger.com"}
              input={input}
              onReset={reset}
              copy={copy}
            />
          )}

          {step < 4 && (
            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
              {step > 1 ? (
                <Button variant="ghost" onClick={() => setStep((step - 1) as CalculatorStep)}>
                  {copy.steps.back}
                </Button>
              ) : (
                <span />
              )}
              <Button
                disabled={!canContinue}
                onClick={() =>
                  step === 3 ? setStep(4) : setStep((step + 1) as CalculatorStep)
                }
                className="bg-blue-700 text-white hover:bg-blue-800"
              >
                {copy.steps.next}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <RoutePreview input={input} preview={preview} result={step === 4 ? result : null} copy={copy} />
      </div>
    </section>
  );
}

function RouteStep({
  input,
  onChange,
  copy,
}: {
  input: CompensationInput;
  onChange: (patch: Partial<CompensationInput>) => void;
  copy: CalculatorCopy;
}) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
        {copy.routeStep.title}
      </h2>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        {copy.routeStep.description}
      </p>

      <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
        <AirportSelect
          label={copy.routeStep.fromLabel}
          value={input.from}
          onChange={(from) => onChange({ from })}
          copy={copy}
        />
        <Button
          type="button"
          variant="outline"
          className="h-11 rounded-full"
          aria-label={copy.routeStep.swapLabel}
          onClick={() => onChange({ from: input.to, to: input.from })}
        >
          ⇄
        </Button>
        <AirportSelect
          label={copy.routeStep.toLabel}
          value={input.to}
          onChange={(to) => onChange({ to })}
          copy={copy}
        />
      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
          {copy.routeStep.carrierTitle}
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <OptionButton
            active={input.carrierJurisdiction === "eu_uk_ch_eea"}
            onClick={() => onChange({ carrierJurisdiction: "eu_uk_ch_eea" })}
            title={copy.routeStep.carrierEuTitle}
            description={copy.routeStep.carrierEuDescription}
          />
          <OptionButton
            active={input.carrierJurisdiction === "other"}
            onClick={() => onChange({ carrierJurisdiction: "other" })}
            title={copy.routeStep.carrierOtherTitle}
            description={copy.routeStep.carrierOtherDescription}
          />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {copy.routeStep.carrierHint}
        </p>
      </div>
    </div>
  );
}

function SituationStep({
  input,
  onChange,
  copy,
}: {
  input: CompensationInput;
  onChange: (patch: Partial<CompensationInput>) => void;
  copy: CalculatorCopy;
}) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
        {copy.situationStep.title}
      </h2>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        {copy.situationStep.description}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {(Object.keys(copy.disruptionLabels) as FlightDisruption[]).map((disruption) => (
          <OptionButton
            key={disruption}
            active={input.disruption === disruption}
            onClick={() =>
              onChange({
                disruption,
                delayBand: null,
                cancellationNotice: null,
                replacementFlight: null,
                deniedBoardingReason: null,
              })
            }
            title={copy.disruptionLabels[disruption].title}
            description={copy.disruptionLabels[disruption].description}
          />
        ))}
      </div>
    </div>
  );
}

function DetailsStep({
  input,
  onChange,
  copy,
}: {
  input: CompensationInput;
  onChange: (patch: Partial<CompensationInput>) => void;
  copy: CalculatorCopy;
}) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
        {copy.detailsStep.title}
      </h2>
      <p className="mb-6 text-slate-600 dark:text-slate-300">
        {copy.detailsStep.description}
      </p>

      {(input.disruption === "delay" || input.disruption === "missed_connection") && (
        <QuestionGroup title={copy.detailsStep.delayQuestion}>
          <OptionGrid>
            <OptionButton active={input.delayBand === "under_2h"} onClick={() => onChange({ delayBand: "under_2h" })} title={copy.detailsStep.delayOptions.under2h} />
            <OptionButton active={input.delayBand === "2_to_3h"} onClick={() => onChange({ delayBand: "2_to_3h" })} title={copy.detailsStep.delayOptions.twoToThree} />
            <OptionButton active={input.delayBand === "3_to_4h"} onClick={() => onChange({ delayBand: "3_to_4h" })} title={copy.detailsStep.delayOptions.threeToFour} />
            <OptionButton active={input.delayBand === "over_4h"} onClick={() => onChange({ delayBand: "over_4h" })} title={copy.detailsStep.delayOptions.overFour} />
          </OptionGrid>
        </QuestionGroup>
      )}

      {input.disruption === "cancelled" && (
        <>
          <QuestionGroup title={copy.detailsStep.cancellationNoticeQuestion}>
            <OptionGrid>
              <OptionButton active={input.cancellationNotice === "14_plus_days"} onClick={() => onChange({ cancellationNotice: "14_plus_days", replacementFlight: null })} title={copy.detailsStep.cancellationOptions.fourteenPlus} />
              <OptionButton active={input.cancellationNotice === "7_to_13_days"} onClick={() => onChange({ cancellationNotice: "7_to_13_days" })} title={copy.detailsStep.cancellationOptions.sevenToThirteen} />
              <OptionButton active={input.cancellationNotice === "under_7_days"} onClick={() => onChange({ cancellationNotice: "under_7_days" })} title={copy.detailsStep.cancellationOptions.underSeven} />
            </OptionGrid>
          </QuestionGroup>
          {input.cancellationNotice && input.cancellationNotice !== "14_plus_days" && (
            <QuestionGroup title={copy.detailsStep.replacementQuestion}>
              <OptionGrid>
                <OptionButton active={input.replacementFlight === "none"} onClick={() => onChange({ replacementFlight: "none" })} title={copy.detailsStep.replacementOptions.noneTitle} description={copy.detailsStep.replacementOptions.noneDescription} />
                <OptionButton active={input.replacementFlight === "within_legal_window"} onClick={() => onChange({ replacementFlight: "within_legal_window" })} title={copy.detailsStep.replacementOptions.withinTitle} description={copy.detailsStep.replacementOptions.withinDescription} />
                <OptionButton active={input.replacementFlight === "limited_delay"} onClick={() => onChange({ replacementFlight: "limited_delay" })} title={copy.detailsStep.replacementOptions.limitedTitle} description={copy.detailsStep.replacementOptions.limitedDescription} />
                <OptionButton active={input.replacementFlight === "major_delay"} onClick={() => onChange({ replacementFlight: "major_delay" })} title={copy.detailsStep.replacementOptions.majorTitle} description={copy.detailsStep.replacementOptions.majorDescription} />
              </OptionGrid>
            </QuestionGroup>
          )}
        </>
      )}

      {input.disruption === "denied_boarding" && (
        <QuestionGroup title={copy.detailsStep.deniedBoardingQuestion}>
          <OptionGrid>
            <OptionButton active={input.deniedBoardingReason === "airline_fault"} onClick={() => onChange({ deniedBoardingReason: "airline_fault" })} title={copy.detailsStep.deniedOptions.noTitle} description={copy.detailsStep.deniedOptions.noDescription} />
            <OptionButton active={input.deniedBoardingReason === "passenger_fault"} onClick={() => onChange({ deniedBoardingReason: "passenger_fault" })} title={copy.detailsStep.deniedOptions.yesTitle} description={copy.detailsStep.deniedOptions.yesDescription} />
          </OptionGrid>
        </QuestionGroup>
      )}

      <QuestionGroup title={copy.detailsStep.extraordinaryQuestion}>
        <OptionGrid>
          <OptionButton active={input.extraordinaryCircumstances === "no"} onClick={() => onChange({ extraordinaryCircumstances: "no" })} title={copy.detailsStep.extraordinaryOptions.no} />
          <OptionButton active={input.extraordinaryCircumstances === "yes"} onClick={() => onChange({ extraordinaryCircumstances: "yes" })} title={copy.detailsStep.extraordinaryOptions.yes} description={copy.detailsStep.extraordinaryOptions.yesDescription} />
          <OptionButton active={input.extraordinaryCircumstances === "unknown"} onClick={() => onChange({ extraordinaryCircumstances: "unknown" })} title={copy.detailsStep.extraordinaryOptions.unknown} />
        </OptionGrid>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          {copy.detailsStep.extraordinaryNote}
        </p>
      </QuestionGroup>
    </div>
  );
}

function ResultStep({
  result,
  input,
  ctaHref,
  onReset,
  copy,
}: {
  result: CalculatorResult;
  input: CompensationInput;
  ctaHref: string;
  onReset: () => void;
  copy: CalculatorCopy;
}) {
  const positive = result.status === "eligible" || result.status === "needs_review";

  return (
    <div>
      <div
        className={cn(
          "rounded-3xl p-6 text-white",
          positive
            ? "bg-gradient-to-br from-blue-800 via-blue-700 to-sky-500"
            : "bg-gradient-to-br from-slate-800 to-slate-600",
        )}
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          {result.status === "needs_review"
            ? copy.result.needsReview
            : positive
              ? copy.result.probableAmount
              : copy.result.result}
        </p>
        <div className="mb-2 text-6xl font-black tracking-tight">
          {positive ? formatEuroAmount(result.amount) : copy.result.noAmount}
        </div>
        <p className="text-white/80">
          {positive
            ? copy.result.perPassenger
            : copy.result.notEligible}
        </p>
        {result.reducedByHalf && (
          <p className="mt-3 inline-flex rounded-full bg-white/15 px-3 py-1 text-sm font-semibold">
            {copy.result.reducedByHalf(result.baseAmount)}
          </p>
        )}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <MetaCard label={copy.result.distanceLabel} value={formatDistance(result.distanceKm, copy)} />
        <MetaCard label={copy.result.routeClassLabel} value={copy.routeBandLabels[result.routeBand]} />
        <MetaCard
          label={copy.result.scopeLabel}
          value={result.inPassengerRightsScope ? copy.result.coveredScope : copy.result.outsideScope}
        />
      </div>

      <Card className="mt-5 border-blue-100 bg-blue-50/60 p-5 dark:border-blue-900/50 dark:bg-blue-950/20">
        <h3 className="mb-2 font-bold text-slate-950 dark:text-white">
          {copy.result.explanationTitle}
        </h3>
        <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
          {copy.result.explanationText}
        </p>
      </Card>

      <Card className="mt-5 p-5">
        <h3 className="mb-3 font-bold text-slate-950 dark:text-white">{copy.result.reasonsTitle}</h3>
        <ul className="space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
          {result.reasons.map((reason) => (
            <li key={reason} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-700 dark:text-blue-300" />
              <span>{copy.reasonLabels[reason]}</span>
            </li>
          ))}
        </ul>
      </Card>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        {positive && (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushClaimWingerEvent("claimwinger_calculator_cta_click", {
                language: copy.code,
                campaign: copy.campaign,
                content: "result_cta",
                destination: ctaHref,
                from: input.from?.code || "",
                to: input.to?.code || "",
                disruption: input.disruption || "",
                eligibility: result.status,
                amount: String(result.amount),
              })
            }
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-800"
          >
            {copy.result.ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
        <Button variant="outline" onClick={onReset}>
          <RotateCcw className="h-4 w-4" />
          {copy.result.resetLabel}
        </Button>
      </div>
    </div>
  );
}

function RoutePreview({
  input,
  preview,
  result,
  copy,
}: {
  input: CompensationInput;
  preview: ReturnType<typeof calculateFlightCompensation>;
  result: ReturnType<typeof calculateFlightCompensation>;
  copy: CalculatorCopy;
}) {
  const displayResult = result || preview;

  return (
    <div className="relative flex min-h-[420px] flex-col justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 p-6 text-white sm:p-8 lg:p-10">
      <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-300/30 bg-white/10 px-4 py-2 text-sm text-sky-100 backdrop-blur">
          <ShieldCheck className="h-4 w-4" />
          {copy.preview.badge}
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
            <AirportBadge airport={input.from} fallback={copy.preview.fromFallback} copy={copy} />
            <Plane className="h-7 w-7 text-sky-200" />
            <AirportBadge airport={input.to} fallback={copy.preview.toFallback} alignRight copy={copy} />
          </div>

          <RouteArcMap from={input.from} to={input.to} copy={copy} />

          {displayResult ? (
            <div className="grid gap-3 sm:grid-cols-3">
              <PreviewMetric label={copy.preview.distanceLabel} value={formatDistance(displayResult.distanceKm, copy)} />
              <PreviewMetric label={copy.preview.routeLabel} value={copy.routeBandLabels[displayResult.routeBand]} />
              <PreviewMetric
                label={copy.preview.amountLabel}
                value={
                  displayResult.status === "eligible" || displayResult.status === "needs_review"
                    ? formatEuroAmount(displayResult.amount)
                    : copy.result.noAmount
                }
                accent
              />
            </div>
          ) : (
            <p className="text-sm leading-6 text-sky-100/80">
              {copy.preview.emptyText}
            </p>
          )}

          <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/35 p-4 text-sm leading-6 text-sky-100/80">
            <strong className="block text-white">{copy.preview.ruleTitle}</strong>
            {copy.preview.ruleText}
          </div>
        </div>
      </div>
    </div>
  );
}

type MapPoint = {
  x: number;
  y: number;
};

type LocalKmPoint = {
  x: number;
  y: number;
};

type RouteViewport = {
  fromPoint: MapPoint;
  toPoint: MapPoint;
  routePath: string;
  distanceKm: number;
  scaleBarKm: number;
  scaleBarWidth: number;
  centerLat: number;
  centerLon: number;
  scale: number;
};

const MAP_WIDTH = 100;
const MAP_HEIGHT = 62;
const MAP_PADDING_X = 12;
const MAP_PADDING_Y = 9;
const KM_PER_DEGREE_LAT = 110.574;
const KM_PER_DEGREE_LON = 111.32;
const MAP_GRID_X = [20, 40, 60, 80];
const MAP_GRID_Y = [15.5, 31, 46.5];

function RouteArcMap({
  from,
  to,
  copy,
}: {
  from: CompensationAirport | null;
  to: CompensationAirport | null;
  copy: CalculatorCopy;
}) {
  const routeViewport = from && to ? buildRouteViewport(from, to) : null;

  return (
    <div
      className="relative my-7 aspect-[100/62] min-h-[240px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/45 shadow-inner"
      aria-label={
        routeViewport && from && to
          ? copy.map.ariaRoute(from.code, to.code, routeViewport.distanceKm)
          : copy.map.ariaDefault
      }
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(125,211,252,0.22),transparent_28%),radial-gradient(circle_at_78%_70%,rgba(59,130,246,0.20),transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.05),rgba(14,165,233,0.12))]" />
      <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-sky-200/20 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-sky-100 backdrop-blur">
        <MapPin className="h-3.5 w-3.5" />
        {copy.map.routeMapLabel}
      </div>
      {routeViewport && (
        <div className="absolute right-4 top-4 z-10 rounded-full border border-sky-200/20 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-sky-100 backdrop-blur">
          {copy.map.fittedFrameLabel}
        </div>
      )}

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        preserveAspectRatio="none"
        role="presentation"
      >
        <defs>
          <linearGradient id="calculator-route-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="55%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#eff6ff" />
          </linearGradient>
          <filter id="calculator-route-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="calculator-map-clip">
            <rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} rx="7" />
          </clipPath>
        </defs>
        <g clipPath="url(#calculator-map-clip)">
          <LandMassLayer viewport={routeViewport} />
          {MAP_GRID_X.map((x) => (
            <line
              key={`x-${x}`}
              x1={x}
              x2={x}
              y1="0"
              y2={MAP_HEIGHT}
              stroke="rgba(186,230,253,0.14)"
              strokeWidth="0.45"
            />
          ))}
          {MAP_GRID_Y.map((y) => (
            <line
              key={`y-${y}`}
              x1="0"
              x2={MAP_WIDTH}
              y1={y}
              y2={y}
              stroke="rgba(186,230,253,0.14)"
              strokeWidth="0.45"
            />
          ))}
          {routeViewport && (
            <path
              d={routeViewport.routePath}
              fill="none"
              stroke="url(#calculator-route-gradient)"
              strokeLinecap="round"
              strokeWidth="1.85"
              filter="url(#calculator-route-glow)"
            />
          )}
          {routeViewport && (
            <g>
              <line
                x1="8"
                x2={8 + routeViewport.scaleBarWidth}
                y1={MAP_HEIGHT - 8}
                y2={MAP_HEIGHT - 8}
                stroke="rgba(224,242,254,0.9)"
                strokeLinecap="round"
                strokeWidth="0.8"
              />
              <line
                x1="8"
                x2="8"
                y1={MAP_HEIGHT - 9.2}
                y2={MAP_HEIGHT - 6.8}
                stroke="rgba(224,242,254,0.9)"
                strokeLinecap="round"
                strokeWidth="0.8"
              />
              <line
                x1={8 + routeViewport.scaleBarWidth}
                x2={8 + routeViewport.scaleBarWidth}
                y1={MAP_HEIGHT - 9.2}
                y2={MAP_HEIGHT - 6.8}
                stroke="rgba(224,242,254,0.9)"
                strokeLinecap="round"
                strokeWidth="0.8"
              />
              <text
                x="8"
                y={MAP_HEIGHT - 3.5}
                fill="rgba(224,242,254,0.9)"
                fontSize="2.7"
                fontWeight="700"
              >
                {routeViewport.scaleBarKm} km
              </text>
            </g>
          )}
        </g>
      </svg>

      {routeViewport && from && (
        <AirportMapPoint airport={from} point={routeViewport.fromPoint} tone="from" copy={copy} />
      )}
      {routeViewport && to && (
        <AirportMapPoint airport={to} point={routeViewport.toPoint} tone="to" copy={copy} />
      )}

      {routeViewport ? (
        <div className="absolute bottom-4 right-4 z-10 rounded-2xl border border-white/10 bg-slate-950/55 px-3 py-2 text-right text-xs font-semibold text-sky-100 backdrop-blur">
          <span className="block text-[10px] uppercase tracking-[0.18em] text-sky-100/60">
            {copy.map.distanceLabel}
          </span>
          {formatDistance(routeViewport.distanceKm, copy)}
        </div>
      ) : (
        <div className="absolute inset-x-6 bottom-5 rounded-2xl border border-white/10 bg-slate-950/45 p-4 text-sm leading-6 text-sky-100/80 backdrop-blur">
          {copy.map.emptyText}
        </div>
      )}
    </div>
  );
}

function LandMassLayer({ viewport }: { viewport: RouteViewport | null }) {
  const paths = viewport
    ? buildLocalLandPaths(viewport)
    : buildWorldLandPaths();

  return (
    <g>
      {paths.map((path, index) => (
        <path
          key={`${index}-${path.length}`}
          d={path}
          fill="rgba(125,211,252,0.16)"
          stroke="rgba(186,230,253,0.28)"
          strokeLinejoin="round"
          strokeWidth="0.45"
        />
      ))}
    </g>
  );
}

function AirportMapPoint({
  airport,
  point,
  tone,
  copy,
}: {
  airport: CompensationAirport;
  point: MapPoint;
  tone: "from" | "to";
  copy: CalculatorCopy;
}) {
  const labelPosition =
    point.x > 72
      ? "right-0 text-right"
      : point.x < 28
        ? "left-0 text-left"
        : "left-1/2 -translate-x-1/2 text-center";

  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${(point.x / MAP_WIDTH) * 100}%`, top: `${(point.y / MAP_HEIGHT) * 100}%` }}
    >
      <div
        className={cn(
          "relative flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-slate-950/45",
          tone === "from" ? "bg-sky-200" : "bg-white",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-blue-800" />
      </div>
      <div
        className={cn(
          "absolute top-6 w-max max-w-36 rounded-xl border border-white/10 bg-slate-950/75 px-3 py-2 text-xs shadow-lg backdrop-blur",
          labelPosition,
        )}
      >
        <p className="font-mono text-sm font-black text-white">{airport.code}</p>
        <p className="max-w-28 truncate text-sky-100/80">{getAirportCity(airport, copy)}</p>
      </div>
    </div>
  );
}

function buildRouteViewport(from: CompensationAirport, to: CompensationAirport): RouteViewport {
  const distanceKm = calculateGreatCircleDistanceKm(from, to);
  const centerLat = (from.lat + to.lat) / 2;
  const centerLon = normalizeLongitude(
    from.lon + normalizeLongitudeDelta(to.lon - from.lon) / 2,
  );
  const fromKm = projectAirportToLocalKm(from, centerLat, centerLon);
  const toKm = projectAirportToLocalKm(to, centerLat, centerLon);
  const spanXKm = Math.max(
    Math.abs(toKm.x - fromKm.x),
    distanceKm * 0.22,
    120,
  );
  const spanYKm = Math.max(
    Math.abs(toKm.y - fromKm.y),
    distanceKm * 0.16,
    120,
  );
  const scale = Math.min(
    (MAP_WIDTH - MAP_PADDING_X * 2) / spanXKm,
    (MAP_HEIGHT - MAP_PADDING_Y * 2) / spanYKm,
  );
  const fromPoint = projectLocalKmToMapPoint(fromKm, scale);
  const toPoint = projectLocalKmToMapPoint(toKm, scale);
  const straightRouteUnits = Math.max(
    Math.hypot(toPoint.x - fromPoint.x, toPoint.y - fromPoint.y),
    1,
  );
  const scaleBarKm = chooseScaleBarKm(distanceKm);
  const kmPerMapUnit = distanceKm / straightRouteUnits;
  const scaleBarWidth = clamp(scaleBarKm / kmPerMapUnit, 10, 34);

  return {
    fromPoint,
    toPoint,
    routePath: buildRoutePath(fromPoint, toPoint),
    distanceKm,
    scaleBarKm,
    scaleBarWidth,
    centerLat,
    centerLon,
    scale,
  };
}

function buildRoutePath(from: MapPoint, to: MapPoint) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const distance = Math.max(Math.hypot(dx, dy), 1);
  const curve = clamp(distance * 0.22, 5, 14);
  const normalX = -dy / distance;
  const normalY = dx / distance;
  const upwardDirection = normalY > 0 ? -1 : 1;
  const controlX = clamp(
    (from.x + to.x) / 2 + normalX * curve * upwardDirection,
    4,
    MAP_WIDTH - 4,
  );
  const controlY = clamp(
    (from.y + to.y) / 2 + normalY * curve * upwardDirection,
    5,
    MAP_HEIGHT - 5,
  );

  return [
    "M",
    formatMapNumber(from.x),
    formatMapNumber(from.y),
    "Q",
    formatMapNumber(controlX),
    formatMapNumber(controlY),
    formatMapNumber(to.x),
    formatMapNumber(to.y),
  ].join(" ");
}

function projectAirportToLocalKm(
  airport: CompensationAirport,
  centerLat: number,
  centerLon: number,
): LocalKmPoint {
  const centerLatRad = (centerLat * Math.PI) / 180;
  const lonDelta = normalizeLongitudeDelta(airport.lon - centerLon);

  return {
    x: lonDelta * KM_PER_DEGREE_LON * Math.cos(centerLatRad),
    y: (centerLat - airport.lat) * KM_PER_DEGREE_LAT,
  };
}

function projectLocalKmToMapPoint(point: LocalKmPoint, scale: number): MapPoint {
  return {
    x: clamp(MAP_WIDTH / 2 + point.x * scale, MAP_PADDING_X, MAP_WIDTH - MAP_PADDING_X),
    y: clamp(MAP_HEIGHT / 2 + point.y * scale, MAP_PADDING_Y, MAP_HEIGHT - MAP_PADDING_Y),
  };
}

function projectGeoCoordinateToLocalMapPoint(
  lon: number,
  lat: number,
  viewport: Pick<RouteViewport, "centerLat" | "centerLon" | "scale">,
): MapPoint {
  const point = projectGeoCoordinateToLocalKm(lon, lat, viewport.centerLat, viewport.centerLon);

  return {
    x: MAP_WIDTH / 2 + point.x * viewport.scale,
    y: MAP_HEIGHT / 2 + point.y * viewport.scale,
  };
}

function projectGeoCoordinateToLocalKm(
  lon: number,
  lat: number,
  centerLat: number,
  centerLon: number,
): LocalKmPoint {
  const centerLatRad = (centerLat * Math.PI) / 180;
  const lonDelta = normalizeLongitudeDelta(lon - centerLon);

  return {
    x: lonDelta * KM_PER_DEGREE_LON * Math.cos(centerLatRad),
    y: (centerLat - lat) * KM_PER_DEGREE_LAT,
  };
}

function buildLocalLandPaths(viewport: RouteViewport) {
  return worldLandRings
    .map((ring) =>
      buildLandPath(ring, ([lon, lat]) =>
        projectGeoCoordinateToLocalMapPoint(lon, lat, viewport),
      ),
    )
    .filter(Boolean);
}

function buildWorldLandPaths() {
  return worldLandRings
    .map((ring) =>
      buildLandPath(ring, ([lon, lat]) => ({
        x: ((lon + 180) / 360) * MAP_WIDTH,
        y: ((90 - lat) / 180) * MAP_HEIGHT,
      })),
    )
    .filter(Boolean);
}

function buildLandPath(
  ring: readonly (readonly [number, number])[],
  project: (coordinate: readonly [number, number]) => MapPoint,
) {
  if (ring.length < 3) {
    return "";
  }

  const points = ring.map(project);

  if (!mapBoundsIntersect(points)) {
    return "";
  }

  const [firstPoint, ...restPoints] = points;

  return [
    "M",
    formatMapNumber(firstPoint.x),
    formatMapNumber(firstPoint.y),
    ...restPoints.flatMap((point) => [
      "L",
      formatMapNumber(point.x),
      formatMapNumber(point.y),
    ]),
    "Z",
  ].join(" ");
}

function mapBoundsIntersect(points: MapPoint[]) {
  const margin = 18;
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;

  for (const point of points) {
    minX = Math.min(minX, point.x);
    maxX = Math.max(maxX, point.x);
    minY = Math.min(minY, point.y);
    maxY = Math.max(maxY, point.y);
  }

  return (
    maxX >= -margin &&
    minX <= MAP_WIDTH + margin &&
    maxY >= -margin &&
    minY <= MAP_HEIGHT + margin
  );
}

function chooseScaleBarKm(distanceKm: number) {
  if (distanceKm <= 200) return 50;
  if (distanceKm <= 500) return 100;
  if (distanceKm <= 1200) return 250;
  if (distanceKm <= 2500) return 500;
  if (distanceKm <= 5500) return 1000;
  return 2000;
}

function normalizeLongitudeDelta(delta: number) {
  return ((((delta + 180) % 360) + 360) % 360) - 180;
}

function normalizeLongitude(longitude: number) {
  return normalizeLongitudeDelta(longitude);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatMapNumber(value: number) {
  return Number(value.toFixed(2));
}

function AirportSelect({
  label,
  value,
  onChange,
  copy,
}: {
  label: string;
  value: CompensationAirport | null;
  onChange: (airport: CompensationAirport | null) => void;
  copy: CalculatorCopy;
}) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const results = normalizedQuery
    ? compensationAirports
        .filter((airport) =>
          [
            airport.code,
            airport.city.pl,
            airport.city.en,
            airport.name.pl,
            airport.name.en,
            airport.country,
          ]
            .join(" ")
            .toLowerCase()
            .includes(normalizedQuery),
        )
        .slice(0, 8)
    : compensationAirports.slice(0, 8);

  return (
    <div>
      <label className="mb-2 block text-sm font-bold uppercase tracking-[0.14em] text-slate-500">
        {label}
      </label>
      <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
        {value ? (
          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-slate-950 px-3 py-2 font-mono text-sm font-bold text-white">
              {value.code}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold text-slate-950 dark:text-white">{getAirportCity(value, copy)}</p>
              <p className="truncate text-xs text-slate-500">{getAirportName(value, copy)} · {value.country}</p>
            </div>
            <button
              type="button"
              aria-label={copy.airport.clearLabel}
              onClick={() => onChange(null)}
              className="rounded-full bg-slate-100 px-2 py-1 text-xs font-bold text-slate-500 hover:bg-red-50 hover:text-red-700 dark:bg-slate-800"
            >
              ×
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <Search className="h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={copy.airport.searchPlaceholder}
                className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="mt-3 max-h-60 space-y-1 overflow-y-auto">
              {results.map((airport) => (
                <button
                  key={airport.code}
                  type="button"
                  onClick={() => {
                    onChange(airport);
                    setQuery("");
                  }}
                  className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs font-bold text-slate-800 dark:bg-slate-800 dark:text-slate-100">
                    {airport.code}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-slate-950 dark:text-white">
                      {getAirportCity(airport, copy)}
                    </span>
                    <span className="block truncate text-xs text-slate-500">{getAirportName(airport, copy)}</span>
                  </span>
                  <span className="rounded-full bg-blue-50 px-2 py-1 text-[10px] font-bold uppercase text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                    {airport.passengerRightsArea === "other"
                      ? airport.country
                      : airport.passengerRightsArea}
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function OptionButton({
  active,
  onClick,
  title,
  description,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  description?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:shadow-md",
        active
          ? "border-blue-600 bg-blue-50 text-blue-950 shadow-blue-600/10 dark:bg-blue-950/30 dark:text-blue-100"
          : "border-slate-200 bg-white text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-white",
      )}
    >
      <span className="mb-1 block font-semibold">{title}</span>
      {description && (
        <span className="block text-sm leading-5 text-slate-500 dark:text-slate-400">
          {description}
        </span>
      )}
    </button>
  );
}

function QuestionGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 font-bold text-slate-950 dark:text-white">{title}</h3>
      {children}
    </div>
  );
}

function OptionGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>;
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 font-semibold text-slate-950 dark:text-white">{value}</p>
    </div>
  );
}

function AirportBadge({
  airport,
  fallback,
  alignRight = false,
  copy,
}: {
  airport: CompensationAirport | null;
  fallback: string;
  alignRight?: boolean;
  copy: CalculatorCopy;
}) {
  return (
    <div className={cn(alignRight && "text-right")}>
      <div className="font-mono text-3xl font-black tracking-tight">
        {airport?.code || "---"}
      </div>
      <div className="mt-1 text-sm text-sky-100/80">
        {airport ? getAirportCity(airport, copy) : fallback}
      </div>
    </div>
  );
}

function PreviewMetric({
  label,
  value,
  accent = false,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div className="rounded-2xl bg-slate-950/40 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-sky-100/60">{label}</p>
      <p className={cn("mt-1 font-semibold", accent ? "text-2xl text-sky-200" : "text-white")}>
        {value}
      </p>
    </div>
  );
}

function getClaimWingerBaseUrl(input: CompensationInput, copy: CalculatorCopy) {
  if (input.disruption === "cancelled") {
    return copy.claimWinger.cancelledUrl;
  }

  if (input.disruption === "delay" || input.disruption === "missed_connection") {
    return copy.claimWinger.delayUrl;
  }

  return copy.claimWinger.defaultUrl;
}

function formatDistance(distanceKm: number, copy: CalculatorCopy) {
  return `${distanceKm.toLocaleString(copy.numberLocale)} km`;
}

function formatEuroAmount(amount: number) {
  return `${amount} €`;
}

function getAirportCity(airport: CompensationAirport, copy: CalculatorCopy) {
  return airport.city[copy.airportLocale] || airport.city.en || airport.city.pl;
}

function getAirportName(airport: CompensationAirport, copy: CalculatorCopy) {
  return airport.name[copy.airportLocale] || airport.name.en || airport.name.pl;
}

function detailsAreComplete(input: CompensationInput) {
  if (input.disruption === "delay" || input.disruption === "missed_connection") {
    return Boolean(input.delayBand && input.extraordinaryCircumstances);
  }

  if (input.disruption === "cancelled") {
    if (!input.cancellationNotice || !input.extraordinaryCircumstances) {
      return false;
    }

    return (
      input.cancellationNotice === "14_plus_days" || Boolean(input.replacementFlight)
    );
  }

  if (input.disruption === "denied_boarding") {
    return Boolean(input.deniedBoardingReason && input.extraordinaryCircumstances);
  }

  return false;
}
