import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerEnDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerEnLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_EN_PATHS: Record<ClaimWingerEnDestination, string> = {
  home: "https://claimwinger.com",
  delayed: "https://claimwinger.com/delayed-flight",
  cancelled: "https://claimwinger.com/cancelled-flight",
};

export function buildClaimWingerEnLink(
  destination: ClaimWingerEnDestination,
  { medium, campaign, content, term }: BuildClaimWingerEnLinkOptions,
) {
  const url = new URL(CLAIMWINGER_EN_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-en");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "en");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerEnClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "en",
    placement,
    destination,
  });
}

export const claimWingerEnBaseLinks = CLAIMWINGER_EN_PATHS;
