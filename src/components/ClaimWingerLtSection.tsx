import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerAppCta } from "@/components/ClaimWingerAppCta";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import {
  buildClaimWingerLtLink,
  trackClaimWingerLtClick,
} from "@/lib/claimwingerLinksLt";

type ClaimWingerLtSectionProps = {
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

export function ClaimWingerLtSection({
  className = "",
  title = "Patikrinkite savo skrydį su ClaimWinger forma",
  description = "ClaimWinger forma pasiekiama lietuvių kalba. Ji tinka vėluojantiems ir atšauktiems skrydžiams, atsisakytam įlaipinimui bei praleistiems persėdimams pagal EB 261 ir UK261.",
  badge = "Be išankstinio mokesčio",
  ctaLabel = "Atidaryti ClaimWinger",
  ctaHref = buildClaimWingerLtLink("home", {
    medium: "embedded_cta",
    campaign: "lt_claim_entry",
  }),
  loadingLabel = "Įkeliama lietuviška ClaimWinger forma...",
  loadingDescription = "Po akimirkos matysite formą, kurioje galėsite patikrinti konkretų skrydžio atvejį.",
  placement = "lt_embed_section",
  embedCampaign = "lt_claim_entry",
  embedContent,
}: ClaimWingerLtSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");
  const embedQueryParams: Record<string, string> = {
    utm_source: "problemlot-lt",
    utm_medium: "embed",
    utm_campaign: embedCampaign,
    utm_language: "lt",
  };

  if (embedContent) {
    embedQueryParams.utm_content = embedContent;
  }

  return (
    <section className={wrapperClassName} data-claimwinger-embed="true">
      <div className="mb-6 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-amber-50 p-6 shadow-sm dark:border-emerald-900 dark:from-emerald-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
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
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            No win, no fee
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            EB 261 / UK261 patikra
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            Lietuviška forma
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClaimWingerLtClick(placement, ctaHref)}
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="lt"
        queryParams={embedQueryParams}
        title="ClaimWinger English form"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
      <ClaimWingerAppCta
        locale="lt"
        placement="claimwinger_section"
        className="mt-8"
      />
    </section>
  );
}
