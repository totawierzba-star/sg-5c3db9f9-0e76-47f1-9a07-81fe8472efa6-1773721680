import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

type ClaimWingerHiSectionProps = {
  className?: string;
  title?: string;
  description?: string;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  loadingLabel?: string;
  loadingDescription?: string;
  trackingCampaign?: string;
  trackingContent?: string;
};

export function ClaimWingerHiSection({
  className = "",
  title = "अपनी EU261 पात्रता अभी जांचें",
  description = "उड़ान नंबर, तारीख और देरी की जानकारी जोड़ें। ClaimWinger हिंदी में जल्दी आकलन करता है कि आपका मामला €250, €400 या €600 तक के मुआवज़े के लिए मजबूत है या नहीं।",
  badge = "ClaimWinger हिंदी क्लेम फॉर्म",
  ctaLabel = "मुफ्त पात्रता जांचें",
  ctaHref = "https://claimwinger.com/hi/deri-udaan",
  loadingLabel = "ClaimWinger फॉर्म लोड हो रहा है...",
  loadingDescription = "कुछ सेकंड में हिंदी दावा फॉर्म दिखाई देगा।",
  trackingCampaign = "hi_claim_entry",
  trackingContent = "hi_embed_cta",
}: ClaimWingerHiSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <section className={wrapperClassName}>
      <div className="mb-6 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-6 shadow-sm dark:border-amber-900 dark:from-amber-950/30 dark:via-gray-900 dark:to-emerald-950/20">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
          <Sparkles className="h-4 w-4" />
          {badge}
        </div>
        <h2 className="mb-3 text-2xl font-bold text-slate-950 dark:text-white">{title}</h2>
        <p className="max-w-3xl text-base leading-7 text-slate-700 dark:text-slate-300">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-700 dark:text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            No win, no fee
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            हिंदी प्रक्रिया
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            €600 तक यानी लगभग ₹52,000
          </span>
        </div>
        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushClaimWingerEvent("claimwinger_cta_click", {
                language: "hi",
                campaign: trackingCampaign,
                content: trackingContent,
                destination: ctaHref,
              })
            }
            className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="hi"
        title="ClaimWinger हिंदी फॉर्म"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
    </section>
  );
}
