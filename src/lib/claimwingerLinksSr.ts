import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerSrDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerSrLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_SR_PATHS: Record<ClaimWingerSrDestination, string> = {
  home: "https://claimwinger.com",
  delayed: "https://claimwinger.com/delayed-flight",
  cancelled: "https://claimwinger.com/cancelled-flight",
};

export function buildClaimWingerSrLink(
  destination: ClaimWingerSrDestination,
  { medium, campaign, content, term }: BuildClaimWingerSrLinkOptions,
) {
  const url = new URL(CLAIMWINGER_SR_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-sr");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "sr");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerSrClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sr",
    placement,
    destination,
  });
}

export const claimWingerSrBaseLinks = CLAIMWINGER_SR_PATHS;
