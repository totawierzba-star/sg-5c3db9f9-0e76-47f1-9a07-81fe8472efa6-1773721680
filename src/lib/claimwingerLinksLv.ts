import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerLvDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerLvLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_LV_PATHS: Record<ClaimWingerLvDestination, string> = {
  home: "https://claimwinger.com/lv/",
  delayed: "https://claimwinger.com/lv/aizkavets-lidojums/",
  cancelled: "https://claimwinger.com/lv/atcelts-lidojums/",
};

export function buildClaimWingerLvLink(
  destination: ClaimWingerLvDestination,
  { medium, campaign, content, term }: BuildClaimWingerLvLinkOptions,
) {
  const url = new URL(CLAIMWINGER_LV_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-lv");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "lv");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerLvClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "lv",
    placement,
    destination,
  });
}

export const claimWingerLvBaseLinks = CLAIMWINGER_LV_PATHS;
