import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerAppCta } from "@/components/ClaimWingerAppCta";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import {
  buildClaimWingerJaLink,
  trackClaimWingerJaClick,
} from "@/lib/claimwingerLinksJa";

type ClaimWingerJaSectionProps = {
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

export function ClaimWingerJaSection({
  className = "",
  title = "ClaimWingerのフォームでフライトを確認しましょう",
  description = "ClaimWingerのフォームは日本語でご利用いただけます。EU規則261/2004およびUK261に基づき、フライトの遅延、欠航、搭乗拒否、乗り継ぎ便の乗り遅れの際の補償金の確認に対応しています。",
  badge = "前払い不要",
  ctaLabel = "ClaimWingerを開く",
  ctaHref = buildClaimWingerJaLink("home", {
    medium: "embedded_cta",
    campaign: "ja_claim_entry",
  }),
  loadingLabel = "ClaimWinger日本語フォームを読み込み中...",
  loadingDescription = "まもなくフォームが表示され、お客様のフライトの状況をご確認いただけます。",
  placement = "ja_embed_section",
  embedCampaign = "ja_claim_entry",
  embedContent,
}: ClaimWingerJaSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");
  const embedQueryParams: Record<string, string> = {
    utm_source: "problemlot-ja",
    utm_medium: "embed",
    utm_campaign: embedCampaign,
    utm_language: "ja",
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
            成功報酬型
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
            EU261 / UK261 チェック
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-red-600 dark:text-red-400" />
            日本語フォーム
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackClaimWingerJaClick(placement, ctaHref)}
            className="inline-flex items-center gap-2 rounded-2xl bg-red-700 px-6 py-3 font-semibold text-white transition hover:bg-red-800"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="ja"
        queryParams={embedQueryParams}
        title="ClaimWinger日本語フォーム"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
      <ClaimWingerAppCta
        locale="ja"
        placement="claimwinger_section"
        className="mt-8"
      />
    </section>
  );
}
