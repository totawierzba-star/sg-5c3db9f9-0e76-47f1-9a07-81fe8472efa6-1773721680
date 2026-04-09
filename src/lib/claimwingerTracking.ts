export function pushClaimWingerEvent(
  eventName: string,
  payload: Record<string, string>,
) {
  if (typeof window === "undefined") {
    return;
  }

  const dataLayer = (window as typeof window & { dataLayer?: Array<Record<string, string>> })
    .dataLayer;

  if (!dataLayer) {
    return;
  }

  dataLayer.push({
    event: eventName,
    ...payload,
  });
}
