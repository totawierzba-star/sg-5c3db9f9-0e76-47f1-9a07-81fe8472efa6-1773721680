import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerAppCta } from "@/components/ClaimWingerAppCta";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import {
  buildClaimWingerDeLink,
  trackClaimWingerDeClick,
} from "@/lib/claimwingerLinksDe";

type ClaimWingerDeSectionProps = {
  className?: string;
  title?: string;
  description?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  loadingLabel?: string;
  loadingDescription?: string;
  placement?: string;
  embedCampaign?: string;
  embedContent?: string;
};

export function ClaimWingerDeSection({
  className = "",
  title = "Prüfen Sie Ihren Flug im ClaimWinger-Formular",
  description = "Das ClaimWinger-Formular ist auf Deutsch verfügbar. Es eignet sich für verspätete und annullierte Flüge, Nichtbeförderung sowie verpasste Anschlussflüge gemäß der EU-Verordnung 261/2004 und UK261.",
  badge = "Ohne Vorauszahlung",
  ctaLabel = "ClaimWinger öffnen",
  ctaHref = buildClaimWingerDeLink("home", {
    medium: "embedded_cta",
    campaign: "de_claim_entry",
  }),
  loadingLabel = "ClaimWinger-Formular wird geladen...",
  loadingDescription = "Gleich sehen Sie das Formular, mit dem Sie Ihren konkreten Flugfall prüfen können.",
  placement = "de_embed_section",
  embedCampaign = "de_claim_entry",
  embedContent,
}: ClaimWingerDeSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");
  const embedQueryParams: Record<string, string> = {
    utm_source: "problemlot-de",
    utm_medium: "embed",
    utm_campaign: embedCampaign,
    utm_language: "de",
  };

  if (embedContent) {
    embedQueryParams.utm_content = embedContent;
  }

  return (
    <section className={wrapperClassName} data-claimwinger-embed="true">
      <div className="mb-6 rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-slate-50 p-6 shadow-sm dark:border-red-900 dark:from-red-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-900/30 dark:text-red-200">
          <Sparkles className="h-4 w-4" />
          {badge}
        </div>

        <div className="mb-4">
          <ClaimWingerLogo />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
            Erfolgsbasierte Vergütung
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
            EU261 / UK261 Prüfung
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
            Formular auf Deutsch
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClaimWingerDeClick(placement, ctaHref)}
            className="inline-flex items-center gap-2 rounded-2xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="de"
        queryParams={embedQueryParams}
        title="ClaimWinger-Formular auf Deutsch"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
      <ClaimWingerAppCta
        locale="de"
        placement="claimwinger_section"
        className="mt-8"
      />
    </section>
  );
}
