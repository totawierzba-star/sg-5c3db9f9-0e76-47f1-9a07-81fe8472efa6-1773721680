import Script from "next/script";
import { useEffect, useState } from "react";

import { getClaimWingerEmbedLang } from "@/lib/claimwingerEmbedLang";

let claimedSlot: symbol | null = null;

type ClaimWingerHeroEmbedProps = {
  className?: string;
  lang?: string;
  minHeight?: number;
  // Legacy props kept so existing callers continue to type-check; ignored.
  queryParams?: Record<string, string>;
  title?: string;
  loadingLabel?: string;
  loadingDescription?: string;
};

export function ClaimWingerHeroEmbed({
  className = "",
  lang = "pl",
  minHeight = 700,
}: ClaimWingerHeroEmbedProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const existing = document.getElementById("claimwinger-form");
      if (existing && claimedSlot === null) {
        return;
      }
    }

    if (claimedSlot !== null) {
      return;
    }

    const token = Symbol("claimwinger-embed");
    claimedSlot = token;
    setActive(true);

    return () => {
      if (claimedSlot === token) {
        claimedSlot = null;
      }
    };
  }, []);

  if (!active) {
    return null;
  }

  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");
  const resolvedLang = getClaimWingerEmbedLang(lang);

  return (
    <div className={wrapperClassName}>
      <div
        id="claimwinger-form"
        data-claimwinger-embed=""
        data-lang={resolvedLang}
        data-min-height={String(minHeight)}
        style={{ minHeight: `${minHeight}px` }}
      />
      <Script
        id="claimwinger-embed-script"
        src="https://claimwinger.com/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
