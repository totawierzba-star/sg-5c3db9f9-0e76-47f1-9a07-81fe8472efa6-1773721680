interface Window {
  dataLayer: Record<string, unknown>[];
  gtag?: (...args: unknown[]) => void;
  __loadProblemLotGtm?: () => void;
  __problemLotGtmLoaded?: boolean;
}
