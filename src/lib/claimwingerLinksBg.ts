import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerBgDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerBgLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_BG_PATHS: Record<ClaimWingerBgDestination, string> = {
  home: "https://claimwinger.com",
  delayed: "https://claimwinger.com/delayed-flight",
  cancelled: "https://claimwinger.com/cancelled-flight",
};

export function buildClaimWingerBgLink(
  destination: ClaimWingerBgDestination,
  { medium, campaign, content, term }: BuildClaimWingerBgLinkOptions,
) {
  const url = new URL(CLAIMWINGER_BG_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-bg");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "bg");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerBgClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "bg",
    placement,
    destination,
  });
}

export const claimWingerBgBaseLinks = CLAIMWINGER_BG_PATHS;
