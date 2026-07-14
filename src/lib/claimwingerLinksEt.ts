import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerEtDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerEtLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_ET_PATHS: Record<ClaimWingerEtDestination, string> = {
  home: "https://claimwinger.com/et/",
  delayed: "https://claimwinger.com/et/hilinenud-lend/",
  cancelled: "https://claimwinger.com/et/tuhistatud-lend/",
};

export function buildClaimWingerEtLink(
  destination: ClaimWingerEtDestination,
  { medium, campaign, content, term }: BuildClaimWingerEtLinkOptions,
) {
  const url = new URL(CLAIMWINGER_ET_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-et");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "et");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerEtClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "et",
    placement,
    destination,
  });
}

export const claimWingerEtBaseLinks = CLAIMWINGER_ET_PATHS;
