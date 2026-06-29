import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerAppCta } from "@/components/ClaimWingerAppCta";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import {
  buildClaimWingerEnLink,
  trackClaimWingerEnClick,
} from "@/lib/claimwingerLinksEn";

type ClaimWingerEnSectionProps = {
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

export function ClaimWingerEnSection({
  className = "",
  title = "Check your flight with ClaimWinger",
  description = "Use the ClaimWinger form to verify a delayed, cancelled, overbooked or missed-connection flight under EU261 or UK261. It is designed for quick eligibility checks and works on a no-win, no-fee basis.",
  badge = "No win, no fee",
  ctaLabel = "Open ClaimWinger",
  ctaHref = buildClaimWingerEnLink("home", {
    medium: "embedded_cta",
    campaign: "en_claim_entry",
  }),
  loadingLabel = "Loading the ClaimWinger form...",
  loadingDescription = "You can check your flight directly here in a moment.",
  placement = "en_embed_section",
  embedCampaign = "en_claim_entry",
  embedContent,
}: ClaimWingerEnSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");
  const embedQueryParams: Record<string, string> = {
    utm_source: "problemlot-en",
    utm_medium: "embed",
    utm_campaign: embedCampaign,
    utm_language: "en",
  };

  if (embedContent) {
    embedQueryParams.utm_content = embedContent;
  }

  return (
    <section className={wrapperClassName} data-claimwinger-embed="true">
      <div className="mb-6 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-sm dark:border-blue-900 dark:from-blue-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
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
            <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            EU261 / UK261 check
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Irish passenger context
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            No upfront payment
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClaimWingerEnClick(placement, ctaHref)}
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
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
        title="ClaimWinger form"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
      <ClaimWingerAppCta
        locale="en"
        placement="claimwinger_section"
        className="mt-8"
      />
    </section>
  );
}
