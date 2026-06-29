"use client";

import { useEffect, useState } from "react";
import { X, Smartphone } from "lucide-react";

import { GooglePlayButton } from "@/components/GooglePlayButton";
import { getAppCopy } from "@/lib/claimwingerApp";
import { type SiteLanguageCode } from "@/lib/siteLanguages";

const DISMISS_KEY = "cw_app_banner_dismissed";

type ClaimWingerAppBannerProps = {
  locale: SiteLanguageCode;
};

/**
 * Sticky, mobile-only ("md:hidden") bottom banner promoting the ClaimWinger
 * Android app. Dismissal is remembered for the current session only
 * (sessionStorage), so it returns on the next visit.
 *
 * Renders nothing until after mount to avoid a hydration mismatch and to read
 * the sessionStorage flag on the client.
 */
export function ClaimWingerAppBanner({ locale }: ClaimWingerAppBannerProps) {
  const [visible, setVisible] = useState(false);
  const copy = getAppCopy(locale);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY) !== "1") {
        setVisible(true);
      }
    } catch {
      // sessionStorage unavailable (private mode / SSR) — show the banner anyway.
      setVisible(true);
    }
  }, []);

  if (!visible) {
    return null;
  }

  const handleDismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore — banner is already hidden for this render.
    }
  };

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-sm md:hidden dark:border-slate-700 dark:bg-slate-900/95"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      role="complementary"
      aria-label={copy.title}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
          <Smartphone className="h-5 w-5" />
        </span>

        <p className="min-w-0 flex-1 text-sm font-medium leading-snug text-slate-900 dark:text-white">
          {copy.barText}
        </p>

        <GooglePlayButton
          locale={locale}
          placement="mobile_sticky_banner"
          campaign="android_app_banner"
          compact
        />

        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Close"
          className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
