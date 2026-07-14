"use client";

import { useEffect, useState } from "react";
import { Smartphone, Camera, PenLine, BellRing } from "lucide-react";

import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import {
  detectClaimWingerDeviceOS,
  getAppCopy,
  getClaimWingerAppCtaVariant,
  type ClaimWingerDeviceOS,
} from "@/lib/claimwingerApp";
import { type SiteLanguageCode } from "@/lib/siteLanguages";

type ClaimWingerAppCtaProps = {
  locale: SiteLanguageCode;
  placement: string;
  campaign?: string;
  articleSlug?: string;
  contentCluster?: string;
  className?: string;
  title?: string;
  description?: string;
};

const FEATURE_ICONS = [Camera, PenLine, BellRing];

/**
 * In-content card promoting the ClaimWinger Android app. Visually consistent
 * with `ClaimWingerEnSection` (gradient, badge, icons, dark mode). Works on both
 * mobile and desktop — it complements, and does not replace, the existing web
 * links to claimwinger.com.
 */
export function ClaimWingerAppCta({
  locale,
  placement,
  campaign = "android_app_card",
  articleSlug,
  contentCluster,
  className = "",
  title,
  description,
}: ClaimWingerAppCtaProps) {
  const [deviceOS, setDeviceOS] = useState<ClaimWingerDeviceOS>("unknown");
  const copy = getAppCopy(locale);
  const wrapperClassName = ["not-prose", className].filter(Boolean).join(" ");
  const isWebFallback =
    getClaimWingerAppCtaVariant(deviceOS) === "web_fallback";
  const cardTitle =
    title ??
    (isWebFallback ? copy.fallbackTitle ?? copy.webCta : copy.title);
  const cardDescription =
    description ??
    (isWebFallback
      ? copy.fallbackDescription ?? copy.fallbackBarText
      : copy.description);

  // Short labels describing the three key app capabilities, per locale.
  const featureLabels = APP_FEATURE_LABELS[locale] ?? APP_FEATURE_LABELS.en;

  useEffect(() => {
    setDeviceOS(detectClaimWingerDeviceOS(window.navigator.userAgent));
  }, []);

  return (
    <section className={wrapperClassName} data-claimwinger-app-cta="true">
      <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-sky-50 p-6 shadow-sm dark:border-blue-900 dark:from-blue-950/40 dark:via-gray-900 dark:to-gray-900">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-200">
          <Smartphone className="h-4 w-4" />
          {copy.badge}
        </div>

        <div className="mb-4">
          <ClaimWingerLogo />
        </div>

        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
          {cardTitle}
        </h2>
        <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {cardDescription}
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
          {featureLabels.map((label, index) => {
            const Icon = FEATURE_ICONS[index] ?? Smartphone;
            return (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700"
              >
                <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                {label}
              </span>
            );
          })}
        </div>

        <div className="mt-6">
          <GooglePlayButton
            locale={locale}
            placement={placement}
            campaign={campaign}
            articleSlug={articleSlug}
            contentCluster={contentCluster}
          />
        </div>
      </div>
    </section>
  );
}

/** Three short benefit chips (boarding-pass photo, signature, notifications). */
const APP_FEATURE_LABELS: Record<SiteLanguageCode, [string, string, string]> = {
  pl: ["Zdjęcie karty pokładowej", "Podpis palcem", "Powiadomienia o statusie"],
  en: ["Boarding pass photo", "Sign with your finger", "Status notifications"],
  cs: ["Foto palubního lístku", "Podpis prstem", "Oznámení o stavu"],
  sk: ["Foto palubného lístka", "Podpis prstom", "Oznámenia o stave"],
  hu: ["Beszállókártya fotó", "Aláírás ujjal", "Állapotértesítések"],
  el: ["Φωτό κάρτας επιβίβασης", "Υπογραφή με δάχτυλο", "Ειδοποιήσεις κατάστασης"],
  tr: ["Biniş kartı fotoğrafı", "Parmakla imza", "Durum bildirimleri"],
  it: ["Foto carta d'imbarco", "Firma con il dito", "Notifiche di stato"],
  zh: ["拍摄登机牌", "手指签名", "状态通知"],
  hi: ["बोर्डिंग पास फ़ोटो", "उंगली से हस्ताक्षर", "स्थिति सूचनाएं"],
  vi: ["Ảnh thẻ lên máy bay", "Ký bằng ngón tay", "Thông báo trạng thái"],
  sv: ["Foto av boardingkort", "Signera med fingret", "Statusnotiser"],
  no: ["Foto av boardingkort", "Signer med fingeren", "Statusvarsler"],
  bg: ["Снимка на бордна карта", "Подпис с пръст", "Известия за статуса"],
  lt: ["Įlaipinimo kortelės nuotrauka", "Parašas pirštu", "Būsenos pranešimai"],
  lv: ["Iekāpšanas kartes foto", "Paraksts ar pirkstu", "Statusa paziņojumi"],
  sr: ["Fotografija bording karte", "Potpis prstom", "Obaveštenja o statusu"],
  et: ["Pardakaardi foto", "Sõrmega allkiri", "Staatuse teavitused"],
  ja: ["搭乗券の写真", "指でサイン", "ステータス通知"],
};
