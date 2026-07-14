import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerJaDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerJaLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_JA_PATHS: Record<ClaimWingerJaDestination, string> = {
  home: "https://claimwinger.com/ja/",
  delayed: "https://claimwinger.com/ja/chien-furaito/",
  cancelled: "https://claimwinger.com/ja/kekko-furaito/",
};

export function buildClaimWingerJaLink(
  destination: ClaimWingerJaDestination,
  { medium, campaign, content, term }: BuildClaimWingerJaLinkOptions,
) {
  const url = new URL(CLAIMWINGER_JA_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-ja");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "ja");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerJaClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "ja",
    placement,
    destination,
  });
}

export const claimWingerJaBaseLinks = CLAIMWINGER_JA_PATHS;
