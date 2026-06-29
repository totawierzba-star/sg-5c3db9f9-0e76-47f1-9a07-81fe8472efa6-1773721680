"use client";

import { cn } from "@/lib/utils";
import { type SiteLanguageCode } from "@/lib/siteLanguages";
import {
  buildClaimWingerAppLink,
  getAppCopy,
  trackClaimWingerAppClick,
} from "@/lib/claimwingerApp";

/** The Google Play coloured triangle mark. */
function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#00D4FF"
        d="M48 32C40 36 35 44 35 56v400c0 12 5 20 13 24l232-224L48 32z"
      />
      <path fill="#00F076" d="M48 32l232 200 64-62L96 18C76 7 58 22 48 32z" />
      <path
        fill="#FFCE00"
        d="M344 170l-64 62 64 62 92-50c18-10 18-34 0-44l-92-30z"
      />
      <path fill="#FF3A44" d="M280 232L48 456c10 12 28 14 48 2l248-150-64-76z" />
    </svg>
  );
}

type GooglePlayButtonProps = {
  locale: SiteLanguageCode;
  placement: string;
  campaign?: string;
  className?: string;
  /** Tighter padding / single-line label for dense spots like nav drawers. */
  compact?: boolean;
};

/**
 * Reusable "Get it on Google Play" button for the ClaimWinger Android app.
 * Builds the attributed store link and pushes a GTM event on click.
 */
export function GooglePlayButton({
  locale,
  placement,
  campaign,
  className,
  compact = false,
}: GooglePlayButtonProps) {
  const copy = getAppCopy(locale);
  const href = buildClaimWingerAppLink({ placement, locale, campaign });

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackClaimWingerAppClick(placement, locale)}
      className={cn(
        "inline-flex items-center gap-2 rounded-xl bg-slate-900 font-semibold text-white shadow-sm transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100",
        compact ? "px-3 py-2 text-sm" : "px-5 py-3 text-base",
        className,
      )}
    >
      <GooglePlayIcon className={compact ? "h-5 w-5" : "h-6 w-6"} />
      {compact ? (
        <span className="whitespace-nowrap">Google Play</span>
      ) : (
        <span className="flex flex-col leading-none">
          <span className="text-[0.625rem] font-normal uppercase tracking-wide opacity-80">
            Google Play
          </span>
          <span>{copy.cta}</span>
        </span>
      )}
    </a>
  );
}
