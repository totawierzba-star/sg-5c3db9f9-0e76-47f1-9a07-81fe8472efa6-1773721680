import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import {
  buildClaimWingerLvLink,
  trackClaimWingerLvClick,
} from "@/lib/claimwingerLinksLv";

type ClaimWingerLvSectionProps = {
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

export function ClaimWingerLvSection({
  className = "",
  title = "Pārbaudiet savu lidojumu ClaimWinger formā",
  description = "ClaimWinger pagaidām nav atsevišķas latviešu versijas, tāpēc izmantojam angļu formu. Tā der kavētiem un atceltiem lidojumiem, atteiktai iekāpšanai un nokavētiem savienojumiem saskaņā ar EU261 un UK261.",
  badge = "Bez avansa maksas",
  ctaLabel = "Atvērt ClaimWinger",
  ctaHref = buildClaimWingerLvLink("home", {
    medium: "embedded_cta",
    campaign: "lv_claim_entry",
  }),
  loadingLabel = "Ielādējas ClaimWinger angļu forma...",
  loadingDescription = "Pēc brīža redzēsiet formu, kurā varēsiet pārbaudīt konkrētu lidojuma gadījumu.",
  placement = "lv_embed_section",
  embedCampaign = "lv_claim_entry",
  embedContent,
}: ClaimWingerLvSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");
  const embedQueryParams: Record<string, string> = {
    utm_source: "problemlot-lv",
    utm_medium: "embed",
    utm_campaign: embedCampaign,
    utm_language: "lv",
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
            No win, no fee
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
            EU261 / UK261 pārbaude
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
            Angļu forma
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClaimWingerLvClick(placement, ctaHref)}
            className="inline-flex items-center gap-2 rounded-2xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="en"
        queryParams={embedQueryParams}
        title="ClaimWinger English form"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
    </section>
  );
}
