import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

type ClaimWingerTrSectionProps = {
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

export function ClaimWingerTrSection({
  className = "",
  title = "ClaimWinger ile simdi uygunluk kontrolunu baslatin",
  description = "Ucusunuz geciktiyse, iptal edildiyse veya ciddi sekilde yeniden planlandiysa, ClaimWinger Turkiye odakli akis ile dosyanin gucunu hizlica degerlendirebilirsiniz.",
  badge = "ClaimWinger Turkiye basvuru alani",
  ctaLabel = "ClaimWinger TR sayfasini ac",
  ctaHref = "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=embedded_cta&utm_campaign=claim_entry",
  loadingLabel = "ClaimWinger formu yukleniyor...",
  loadingDescription = "Birkac saniye icinde Turkce basvuru formu gorunecek.",
  placement = "embed_section",
}: ClaimWingerTrSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <section className={wrapperClassName}>
      <div className="mb-6 rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-slate-50 p-6 shadow-sm dark:border-red-900 dark:from-red-950/30 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
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
            Ucretsiz on kontrol
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            On odeme yok
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Turkce surec
          </span>
        </div>
        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushClaimWingerEvent("claimwinger_cta_click", {
                locale: "tr",
                placement,
                destination: ctaHref,
              })
            }
            className="inline-flex items-center gap-2 rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="tr"
        title="ClaimWinger Turkce form"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
    </section>
  );
}
