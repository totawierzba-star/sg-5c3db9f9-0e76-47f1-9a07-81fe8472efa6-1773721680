import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "problemlot_consent_v1";

type ConsentStatus = "accepted" | "rejected";

type StoredConsent = {
  status: ConsentStatus;
  updatedAt: string;
  version: 1;
};

function saveConsent(status: ConsentStatus) {
  const consent: StoredConsent = {
    status,
    updatedAt: new Date().toISOString(),
    version: 1,
  };

  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

function updateGoogleConsent(status: ConsentStatus) {
  const granted = status === "accepted" ? "granted" : "denied";

  window.gtag?.("consent", "update", {
    ad_storage: granted,
    analytics_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
    functionality_storage: "granted",
    security_storage: "granted",
  });

  window.gtag?.("set", "ads_data_redaction", status !== "accepted");
  window.gtag?.("set", "url_passthrough", false);
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: status === "accepted" ? "problemlot_consent_granted" : "problemlot_consent_denied",
    consent_source: "banner",
  });

  if (status === "accepted") {
    window.__loadProblemLotGtm?.();
  }
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(CONSENT_KEY);
      setVisible(!stored);
    } catch {
      setVisible(true);
    }
  }, []);

  const chooseConsent = (status: ConsentStatus) => {
    try {
      saveConsent(status);
    } catch {
      // Consent Mode is still updated even if storage is unavailable.
    }

    updateGoogleConsent(status);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200 bg-white/95 px-4 py-4 shadow-2xl backdrop-blur dark:border-slate-700 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl text-sm leading-6 text-slate-700 dark:text-slate-200">
          <p className="font-semibold text-slate-950 dark:text-white">Prywatnosc i reklamy</p>
          <p className="mt-1">
            Uzywamy plikow cookie i podobnych technologii do analityki, pomiaru skutecznosci reklam,
            remarketingu oraz dzialan afiliacyjnych, m.in. z wykorzystaniem Google Ads, Microsoft Ads,
            TikTok Ads i podobnych platform. Tagi reklamowe i analityczne sa uruchamiane dopiero po
            akceptacji.
          </p>
          <Link href="/polityka-prywatnosci" className="mt-2 inline-block font-medium text-blue-700 hover:underline dark:text-blue-300">
            Polityka prywatnosci
          </Link>
        </div>

        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => chooseConsent("rejected")}
            className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Odrzucam
          </button>
          <button
            type="button"
            onClick={() => chooseConsent("accepted")}
            className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Akceptuje
          </button>
        </div>
      </div>
    </div>
  );
}
