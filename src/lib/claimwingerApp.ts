import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";
import { type SiteLanguageCode } from "@/lib/siteLanguages";

/**
 * Android (Google Play) call-to-action helpers for the ClaimWinger app.
 *
 * Mirrors the web-link helpers in `claimwingerLinksEn.ts`: a single place to
 * build the store URL (with install attribution) and to push a GTM event, plus
 * localized copy for every site language.
 */

export const CLAIMWINGER_ANDROID_APP_ID = "com.claimwinger.app";

const GOOGLE_PLAY_BASE_URL = "https://play.google.com/store/apps/details";

type BuildClaimWingerAppLinkOptions = {
  placement: string;
  locale: SiteLanguageCode;
  campaign?: string;
};

/**
 * Builds the Google Play URL for the ClaimWinger app.
 *
 * Adds `hl` for the store UI language and a single URL-encoded `referrer`
 * string (utm_*) so installs can be attributed in Google Play Console.
 */
export function buildClaimWingerAppLink({
  placement,
  locale,
  campaign = "android_app_install",
}: BuildClaimWingerAppLinkOptions) {
  const url = new URL(GOOGLE_PLAY_BASE_URL);
  url.searchParams.set("id", CLAIMWINGER_ANDROID_APP_ID);
  url.searchParams.set("hl", locale);

  const referrer = new URLSearchParams({
    utm_source: "problemlot",
    utm_medium: "android_cta",
    utm_campaign: campaign,
    utm_content: placement,
    utm_language: locale,
  }).toString();

  url.searchParams.set("referrer", referrer);

  return url.toString();
}

/**
 * Pushes a GTM event for an Android app CTA click. Consistent with the existing
 * `claimwinger_cta_click` web event (see `claimwingerLinksEn.ts`).
 */
export function trackClaimWingerAppClick(
  placement: string,
  locale: SiteLanguageCode,
) {
  pushClaimWingerEvent("claimwinger_app_cta_click", {
    locale,
    placement,
    store: "google_play",
  });
}

export type AppCtaCopy = {
  /** Small pill label above the title (card variant). */
  badge: string;
  /** Card heading. */
  title: string;
  /** Card supporting paragraph. */
  description: string;
  /** Button / store-badge label. */
  cta: string;
  /** Short one-line text for the sticky mobile banner. */
  barText: string;
};

export const APP_CTA_COPY: Record<SiteLanguageCode, AppCtaCopy> = {
  pl: {
    badge: "Aplikacja mobilna",
    title: "Pobierz aplikację ClaimWinger",
    description:
      "Sprawdź odszkodowanie i złóż wniosek prosto z telefonu. Zrób zdjęcie karty pokładowej, podpisz palcem i śledź status — bez opłat z góry.",
    cta: "Pobierz z Google Play",
    barText: "Aplikacja ClaimWinger na Androida",
  },
  en: {
    badge: "Mobile app",
    title: "Get the ClaimWinger app",
    description:
      "Check your compensation and file a claim straight from your phone. Snap your boarding pass, sign with your finger and track the status — no upfront fees.",
    cta: "Get it on Google Play",
    barText: "Get the ClaimWinger app for Android",
  },
  cs: {
    badge: "Mobilní aplikace",
    title: "Stáhněte si aplikaci ClaimWinger",
    description:
      "Zkontrolujte odškodnění a podejte žádost přímo z telefonu. Vyfoťte palubní lístek, podepište prstem a sledujte stav — bez plateb předem.",
    cta: "Stáhnout z Google Play",
    barText: "Aplikace ClaimWinger pro Android",
  },
  sk: {
    badge: "Mobilná aplikácia",
    title: "Stiahnite si aplikáciu ClaimWinger",
    description:
      "Skontrolujte odškodnenie a podajte žiadosť priamo z telefónu. Odfoťte palubný lístok, podpíšte prstom a sledujte stav — bez platieb vopred.",
    cta: "Stiahnuť z Google Play",
    barText: "Aplikácia ClaimWinger pre Android",
  },
  hu: {
    badge: "Mobilalkalmazás",
    title: "Töltse le a ClaimWinger alkalmazást",
    description:
      "Ellenőrizze a kártérítést és nyújtsa be igényét egyenesen a telefonjáról. Fényképezze le a beszállókártyát, írja alá ujjal, és kövesse az állapotot — előzetes díjak nélkül.",
    cta: "Letöltés a Google Play-ről",
    barText: "ClaimWinger alkalmazás Androidra",
  },
  el: {
    badge: "Εφαρμογή για κινητά",
    title: "Κατεβάστε την εφαρμογή ClaimWinger",
    description:
      "Ελέγξτε την αποζημίωση και υποβάλετε αίτηση απευθείας από το κινητό σας. Φωτογραφίστε την κάρτα επιβίβασης, υπογράψτε με το δάχτυλο και παρακολουθήστε την κατάσταση — χωρίς προκαταβολή.",
    cta: "Λήψη από το Google Play",
    barText: "Εφαρμογή ClaimWinger για Android",
  },
  tr: {
    badge: "Mobil uygulama",
    title: "ClaimWinger uygulamasını indirin",
    description:
      "Tazminatınızı kontrol edin ve talebinizi doğrudan telefonunuzdan oluşturun. Biniş kartınızın fotoğrafını çekin, parmağınızla imzalayın ve durumu takip edin — ön ödeme yok.",
    cta: "Google Play'den indirin",
    barText: "Android için ClaimWinger uygulaması",
  },
  it: {
    badge: "App mobile",
    title: "Scarica l'app ClaimWinger",
    description:
      "Verifica il risarcimento e invia la richiesta direttamente dal telefono. Fotografa la carta d'imbarco, firma con il dito e segui lo stato — senza costi anticipati.",
    cta: "Scarica su Google Play",
    barText: "App ClaimWinger per Android",
  },
  zh: {
    badge: "手机应用",
    title: "下载 ClaimWinger 应用",
    description:
      "直接在手机上查询赔偿并提交索赔。拍摄登机牌、用手指签名并跟踪进度——无需预付费用。",
    cta: "在 Google Play 下载",
    barText: "下载安卓版 ClaimWinger 应用",
  },
  hi: {
    badge: "मोबाइल ऐप",
    title: "ClaimWinger ऐप डाउनलोड करें",
    description:
      "अपने फ़ोन से ही मुआवज़ा जांचें और दावा दर्ज करें। बोर्डिंग पास की फ़ोटो लें, उंगली से हस्ताक्षर करें और स्थिति ट्रैक करें — कोई अग्रिम शुल्क नहीं।",
    cta: "Google Play से डाउनलोड करें",
    barText: "Android के लिए ClaimWinger ऐप",
  },
  vi: {
    badge: "Ứng dụng di động",
    title: "Tải ứng dụng ClaimWinger",
    description:
      "Kiểm tra tiền bồi thường và gửi yêu cầu ngay trên điện thoại. Chụp thẻ lên máy bay, ký bằng ngón tay và theo dõi trạng thái — không phí trả trước.",
    cta: "Tải trên Google Play",
    barText: "Ứng dụng ClaimWinger cho Android",
  },
  sv: {
    badge: "Mobilapp",
    title: "Ladda ner ClaimWinger-appen",
    description:
      "Kontrollera ersättningen och skicka in ditt krav direkt från mobilen. Fotografera boardingkortet, signera med fingret och följ statusen — utan förskottsavgifter.",
    cta: "Hämta på Google Play",
    barText: "ClaimWinger-appen för Android",
  },
  no: {
    badge: "Mobilapp",
    title: "Last ned ClaimWinger-appen",
    description:
      "Sjekk erstatningen og send inn kravet rett fra mobilen. Ta bilde av boardingkortet, signer med fingeren og følg statusen — uten forhåndsbetaling.",
    cta: "Last ned på Google Play",
    barText: "ClaimWinger-appen for Android",
  },
  bg: {
    badge: "Мобилно приложение",
    title: "Изтеглете приложението ClaimWinger",
    description:
      "Проверете обезщетението и подайте искане направо от телефона си. Снимайте бордната карта, подпишете се с пръст и следете статуса — без предварителни такси.",
    cta: "Изтегли от Google Play",
    barText: "Приложение ClaimWinger за Android",
  },
  lt: {
    badge: "Mobilioji programėlė",
    title: "Atsisiųskite „ClaimWinger“ programėlę",
    description:
      "Patikrinkite kompensaciją ir pateikite prašymą tiesiai iš telefono. Nufotografuokite įlaipinimo kortelę, pasirašykite pirštu ir sekite būseną — be išankstinių mokesčių.",
    cta: "Atsisiųsti iš Google Play",
    barText: "„ClaimWinger“ programėlė Android sistemai",
  },
  lv: {
    badge: "Mobilā lietotne",
    title: "Lejupielādējiet ClaimWinger lietotni",
    description:
      "Pārbaudiet kompensāciju un iesniedziet pieprasījumu tieši no telefona. Nofotografējiet iekāpšanas karti, parakstieties ar pirkstu un sekojiet statusam — bez priekšapmaksas.",
    cta: "Lejupielādēt no Google Play",
    barText: "ClaimWinger lietotne Android ierīcēm",
  },
};

/** Returns localized copy for a locale, falling back to English. */
export function getAppCopy(locale: SiteLanguageCode): AppCtaCopy {
  return APP_CTA_COPY[locale] ?? APP_CTA_COPY.en;
}
