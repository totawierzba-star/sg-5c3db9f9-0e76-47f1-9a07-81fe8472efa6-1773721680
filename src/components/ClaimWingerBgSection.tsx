import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerAppCta } from "@/components/ClaimWingerAppCta";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import {
  buildClaimWingerBgLink,
  trackClaimWingerBgClick,
} from "@/lib/claimwingerLinksBg";

type ClaimWingerBgSectionProps = {
  className?: string;
  title?: string;
  description?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  loadingLabel?: string;
  loadingDescription?: string;
  placement?: string;
};

export function ClaimWingerBgSection({
  className = "",
  title = "Проверете случая си с формуляра на ClaimWinger",
  description = "ClaimWinger все още няма отделна българска версия, затова формулярът е на английски. Можете да го използвате за забавен полет, отменен полет, отказан бординг или изпусната връзка по EU261 и UK261.",
  badge = "Без предварително плащане",
  ctaLabel = "Отворете ClaimWinger",
  ctaHref = buildClaimWingerBgLink("home", {
    medium: "embedded_cta",
    campaign: "bg_claim_entry",
  }),
  loadingLabel = "Зареждане на английския формуляр...",
  loadingDescription = "След секунда ще видите формуляра ClaimWinger за проверка на случая.",
  placement = "bg_embed_section",
}: ClaimWingerBgSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <section className={wrapperClassName} data-claimwinger-embed="true">
      <div className="mb-6 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-amber-50 p-6 shadow-sm dark:border-sky-900 dark:from-sky-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
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
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Без предварителна такса
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Проверка по EU261 / UK261
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Английски формуляр
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClaimWingerBgClick(placement, ctaHref)}
            className="inline-flex items-center gap-2 rounded-2xl bg-sky-700 px-6 py-3 font-semibold text-white transition hover:bg-sky-800"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="en"
        queryParams={{
          utm_source: "problemlot-bg",
          utm_medium: "embed",
          utm_campaign: "bg_claim_entry",
          utm_language: "bg",
        }}
        title="ClaimWinger English form"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
      <ClaimWingerAppCta
        locale="bg"
        placement="claimwinger_section"
        className="mt-8"
      />
    </section>
  );
}
