import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

type ClaimWingerSkSectionProps = {
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

export function ClaimWingerSkSection({
  className = "",
  title = "Skontrolujte si nárok s ClaimWinger ešte pred podaním reklamácie",
  description = "Ak váš let meškal, bol zrušený alebo výrazne presunutý, ClaimWinger Slovensko vám pomôže rýchlo odhadnúť, či má zmysel nárok riešiť a aký ďalší krok zvoliť.",
  badge = "ClaimWinger Slovensko",
  ctaLabel = "Otvoriť formulár ClaimWinger",
  ctaHref = "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=claim_entry",
  loadingLabel = "Načítava sa formulár ClaimWinger...",
  loadingDescription = "O chvíľu sa zobrazí slovenský formulár na preverenie nároku.",
  placement = "embed_section",
}: ClaimWingerSkSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <section className={wrapperClassName} data-claimwinger-embed="true">
      <div className="mb-6 rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-slate-50 p-6 shadow-sm dark:border-blue-900 dark:from-blue-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          <Sparkles className="h-4 w-4" />
          {badge}
        </div>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Bezplatná úvodná kontrola
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Bez platby vopred
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Slovenský formulár
          </span>
        </div>
        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushClaimWingerEvent("claimwinger_cta_click", {
                locale: "sk",
                placement,
                destination: ctaHref,
              })
            }
            className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="sk"
        title="ClaimWinger slovenský formulár"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
    </section>
  );
}
