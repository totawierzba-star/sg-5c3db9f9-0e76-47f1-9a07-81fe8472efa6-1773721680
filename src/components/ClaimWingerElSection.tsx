import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

type ClaimWingerElSectionProps = {
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

export function ClaimWingerElSection({
  className = "",
  title = "Ελέγξτε πρώτα την υπόθεσή σας με το ClaimWinger",
  description = "Αν η πτήση σας είχε μεγάλη καθυστέρηση, ακυρώθηκε ή άλλαξε σημαντικά, το ClaimWinger Ελλάδα μπορεί να σας βοηθήσει να εκτιμήσετε γρήγορα αν υπάρχει βάση για αποζημίωση και ποιο είναι το σωστό επόμενο βήμα.",
  badge = "ClaimWinger Ελλάδα",
  ctaLabel = "Άνοιγμα φόρμας ClaimWinger",
  ctaHref = "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=embedded_cta&utm_campaign=claim_entry",
  loadingLabel = "Φορτώνεται η φόρμα ClaimWinger...",
  loadingDescription = "Σε λίγο θα εμφανιστεί η ελληνική φόρμα για έλεγχο της υπόθεσής σας.",
  placement = "embed_section",
}: ClaimWingerElSectionProps) {
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");

  return (
    <section className={wrapperClassName} data-claimwinger-embed="true">
      <div className="mb-6 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-slate-50 p-6 shadow-sm dark:border-sky-900 dark:from-sky-950/40 dark:via-gray-900 dark:to-gray-900">
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
            Δωρεάν αρχικός έλεγχος
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Χωρίς προκαταβολή
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <ShieldCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
            Ελληνική φόρμα
          </span>
        </div>

        <div className="mt-6">
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushClaimWingerEvent("claimwinger_cta_click", {
                locale: "el",
                placement,
                destination: ctaHref,
              })
            }
            className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
          >
            {ctaLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <ClaimWingerHeroEmbed
        className="mb-8"
        lang="el"
        title="ClaimWinger ελληνική φόρμα"
        loadingLabel={loadingLabel}
        loadingDescription={loadingDescription}
      />
    </section>
  );
}
