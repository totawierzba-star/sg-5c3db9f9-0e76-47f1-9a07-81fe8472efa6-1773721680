import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

export type ClaimWingerViDestination = "home" | "delayed" | "cancelled";

type BuildClaimWingerViLinkOptions = {
  medium: string;
  campaign: string;
  content?: string;
  term?: string;
};

const CLAIMWINGER_VI_PATHS: Record<ClaimWingerViDestination, string> = {
  home: "https://claimwinger.com/vi",
  delayed: "https://claimwinger.com/vi/chuyen-bay-bi-hoan",
  cancelled: "https://claimwinger.com/vi/chuyen-bay-bi-huy",
};

export function buildClaimWingerViLink(
  destination: ClaimWingerViDestination,
  { medium, campaign, content, term }: BuildClaimWingerViLinkOptions,
) {
  const url = new URL(CLAIMWINGER_VI_PATHS[destination]);

  url.searchParams.set("utm_source", "problemlot-vi");
  url.searchParams.set("utm_medium", medium);
  url.searchParams.set("utm_campaign", campaign);

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  if (term) {
    url.searchParams.set("utm_term", term);
  }

  return url.toString();
}

export function trackClaimWingerViClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "vi",
    placement,
    destination,
  });
}

export const claimWingerViBaseLinks = CLAIMWINGER_VI_PATHS;
