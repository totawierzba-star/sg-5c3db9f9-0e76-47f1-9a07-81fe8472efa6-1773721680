import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerDeDestination =
  | "home"
  | "delayed"
  | "cancelled"
  | "lotGuide"
  | "polishAirlinesGuide";

type BuildClaimWingerDeLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_DE_PATHS: Record<ClaimWingerDeDestination, string> = {
  home: "https://claimwinger.com/de/",
  delayed: "https://claimwinger.com/de/verspaeteter-flug/",
  cancelled: "https://claimwinger.com/de/annullierter-flug/",
  lotGuide: "https://claimwinger.com/de/ratgeber/lot-entschaedigung/",
  polishAirlinesGuide:
    "https://claimwinger.com/de/ratgeber/polnische-fluglinien-entschaedigung/",
};

export function buildClaimWingerDeLink(
  destination: ClaimWingerDeDestination,
  { medium, campaign, content, term }: BuildClaimWingerDeLinkOptions,
) {
  const url = new URL(CLAIMWINGER_DE_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-de");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_language", "de");

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerDeClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "de",
    placement,
    destination,
  });
}

export const claimWingerDeBaseLinks = CLAIMWINGER_DE_PATHS;
