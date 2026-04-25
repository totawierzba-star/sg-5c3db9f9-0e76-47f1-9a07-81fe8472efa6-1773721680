import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerLtDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerLtLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_LT_PATHS: Record<ClaimWingerLtDestination, string> = {
  home: "https://claimwinger.com",
  delayed: "https://claimwinger.com/delayed-flight",
  cancelled: "https://claimwinger.com/cancelled-flight",
};

export function buildClaimWingerLtLink(
  destination: ClaimWingerLtDestination,
  { medium, campaign, content, term }: BuildClaimWingerLtLinkOptions,
) {
  const url = new URL(CLAIMWINGER_LT_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-lt");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "lt");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerLtClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "lt",
    placement,
    destination,
  });
}

export const claimWingerLtBaseLinks = CLAIMWINGER_LT_PATHS;
