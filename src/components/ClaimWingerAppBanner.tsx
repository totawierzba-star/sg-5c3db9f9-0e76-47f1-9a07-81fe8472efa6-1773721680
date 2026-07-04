"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { X, Smartphone } from "lucide-react";

import { GooglePlayButton } from "@/components/GooglePlayButton";
import {
  detectClaimWingerDeviceOS,
  getAppCopy,
  getClaimWingerAppCtaVariant,
  getClaimWingerStickyBannerExposure,
  type ClaimWingerDeviceOS,
} from "@/lib/claimwingerApp";
import { type SiteLanguageCode } from "@/lib/siteLanguages";

const DISMISS_KEY = "cw_app_banner_dismissed";
const DELAYED_REVEAL_MS = 1400;
const BLOG_SCROLL_MIN_PX = 420;
const BLOG_SCROLL_DEPTH = 0.35;

type ClaimWingerAppBannerProps = {
  locale: SiteLanguageCode;
};

export function ClaimWingerAppBanner({ locale }: ClaimWingerAppBannerProps) {
  const [visible, setVisible] = useState(false);
  const [deviceOS, setDeviceOS] = useState<ClaimWingerDeviceOS>("unknown");
  const router = useRouter();
  const copy = getAppCopy(locale);
  const pagePath = router.asPath || router.pathname || "/";
  const ctaVariant = getClaimWingerAppCtaVariant(deviceOS);
  const isWebFallback = ctaVariant === "web_fallback";

  useEffect(() => {
    setDeviceOS(detectClaimWingerDeviceOS(window.navigator.userAgent));
  }, []);

  useEffect(() => {
    const exposure = getClaimWingerStickyBannerExposure(pagePath);
    let revealTimer: number | undefined;

    setVisible(false);

    try {
      if (sessionStorage.getItem(DISMISS_KEY) === "1") {
        return;
      }
    } catch {
      // sessionStorage unavailable; keep the CTA eligible for this view.
    }

    if (exposure === "hidden") {
      return;
    }

    const reveal = () => setVisible(true);

    if (exposure === "delayed") {
      revealTimer = window.setTimeout(reveal, DELAYED_REVEAL_MS);

      return () => {
        if (revealTimer) {
          window.clearTimeout(revealTimer);
        }
      };
    }

    const handleScroll = () => {
      const documentElement = document.documentElement;
      const viewportHeight = window.innerHeight || 1;
      const scrollableHeight = Math.max(
        documentElement.scrollHeight - viewportHeight,
        1,
      );
      const scrollDepth = window.scrollY / scrollableHeight;

      if (window.scrollY >= BLOG_SCROLL_MIN_PX || scrollDepth >= BLOG_SCROLL_DEPTH) {
        reveal();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    revealTimer = window.setTimeout(handleScroll, DELAYED_REVEAL_MS);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (revealTimer) {
        window.clearTimeout(revealTimer);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, [pagePath]);

  if (!visible) {
    return null;
  }

  const handleDismiss = () => {
    setVisible(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Ignore storage errors; the banner is already hidden for this render.
    }
  };

  return (
    <>
      <div
        aria-hidden
        className="md:hidden"
        style={{ height: "calc(5.25rem + env(safe-area-inset-bottom))" }}
      />
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-sm md:hidden dark:border-slate-700 dark:bg-slate-900/95"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        role="complementary"
        aria-label={copy.title}
      >
        <div className="flex items-center gap-2 px-3 py-3 sm:gap-3 sm:px-4">
          <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white min-[360px]:flex">
            <Smartphone className="h-5 w-5" />
          </span>

          <p className="min-w-0 flex-1 text-xs font-medium leading-snug text-slate-900 sm:text-sm dark:text-white">
            {isWebFallback ? copy.fallbackBarText : copy.barText}
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
            aria-label={copy.closeLabel}
            className="shrink-0 rounded-md p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800 dark:hover:text-slate-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </>
  );
}
