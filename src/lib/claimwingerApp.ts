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

type BuildClaimWingerWebLinkOptions = BuildClaimWingerAppLinkOptions;

export type ClaimWingerDeviceOS =
  | "android"
  | "ios"
  | "desktop"
  | "other"
  | "unknown";

export type ClaimWingerAppCtaVariant = "google_play" | "web_fallback";

type ClaimWingerAppTrackingContext = {
  pagePath?: string;
  deviceOS?: ClaimWingerDeviceOS;
  ctaVariant?: ClaimWingerAppCtaVariant;
  articleSlug?: string;
  contentCluster?: string;
};

export type ClaimWingerStickyBannerExposure = "delayed" | "after_scroll" | "hidden";

const CLAIMWINGER_WEB_BASE_URLS: Record<SiteLanguageCode, string> = {
  pl: "https://claimwinger.com/pl",
  en: "https://claimwinger.com",
  cs: "https://claimwinger.com/cs",
  sk: "https://claimwinger.com/sk",
  hu: "https://claimwinger.com/hu",
  el: "https://claimwinger.com/el",
  tr: "https://claimwinger.com/tr",
  it: "https://claimwinger.com/it",
  zh: "https://claimwinger.com/zh",
  hi: "https://claimwinger.com/hi",
  vi: "https://claimwinger.com/vi",
  sv: "https://claimwinger.com/sv",
  no: "https://claimwinger.com/no",
  bg: "https://claimwinger.com/bg",
  lt: "https://claimwinger.com/lt",
  lv: "https://claimwinger.com/lv",
  sr: "https://claimwinger.com",
  et: "https://claimwinger.com/et",
  ja: "https://claimwinger.com/ja",
  de: "https://claimwinger.com/de",
};

const HOME_PATHS = new Set([
  "/",
  "/en",
  "/cs",
  "/sk",
  "/hu",
  "/el",
  "/tr",
  "/it",
  "/zh",
  "/hi",
  "/vi",
  "/sv",
  "/no",
  "/bg",
  "/lt",
  "/lv",
  "/sr",
  "/et",
  "/ja",
  "/de",
]);

const HIGH_INTENT_PATH_PARTS = [
  "opozniony-lot",
  "odwolany-lot",
  "ile-mozesz-dostac",
  "delayed-flight",
  "cancelled-flight",
  "compensation-calculator",
  "zpozdeny-let",
  "zruseny-let",
  "kompenzace-kalkulacka",
  "meskanie-letu",
  "zabaven-polet",
  "otmenen-polet",
  "kalkulator",
  "kathysterimeni-ptisi",
  "akyromeni-ptisi",
  "ypologismos-apozimiosis",
  "der-se-flight",
  "cancel-flight",
  "muavza-calculator",
  "kesett-jarat",
  "torolt-jarat",
  "karteritesi-kalkulator",
  "forsinket-fly",
  "innstilt-fly",
  "erstatningskalkulator",
  "gecikmis-ucus",
  "iptal-edilen-ucus",
  "veluojantis-skrydis",
  "atsauktas-skrydis",
  "kavejies-lidojums",
  "atcelts-lidojums",
  "kompensacijas-kalkulators",
  "forsenat-flyg",
  "installat-flyg",
  "ersattning-kalkulator",
  "kasnjenje-leta",
  "otkazan-let",
  "hilinenud-lend",
  "tuhistatud-lend",
  "kalkulaator",
  "chien-furaito",
  "kekko-furaito",
  "keisanki",
  "verspaeteter-flug",
  "annullierter-flug",
  "rechner",
];

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

export function buildClaimWingerWebFallbackLink({
  placement,
  locale,
  campaign = "android_app_web_fallback",
}: BuildClaimWingerWebLinkOptions) {
  const url = new URL(CLAIMWINGER_WEB_BASE_URLS[locale] ?? CLAIMWINGER_WEB_BASE_URLS.en);
  url.searchParams.set("utm_source", "problemlot");
  url.searchParams.set("utm_medium", "app_cta_web_fallback");
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_content", placement);
  url.searchParams.set("utm_language", locale);

  return url.toString();
}

export function detectClaimWingerDeviceOS(userAgent: string): ClaimWingerDeviceOS {
  const normalizedUserAgent = userAgent.toLowerCase();

  if (normalizedUserAgent.includes("android")) {
    return "android";
  }

  if (/(iphone|ipad|ipod)/.test(normalizedUserAgent)) {
    return "ios";
  }

  if (
    /(windows phone|blackberry|bb10|mobile|opera mini|iemobile)/.test(
      normalizedUserAgent,
    )
  ) {
    return "other";
  }

  return "desktop";
}

export function getClaimWingerAppCtaVariant(
  deviceOS: ClaimWingerDeviceOS,
): ClaimWingerAppCtaVariant {
  return deviceOS === "android" || deviceOS === "unknown"
    ? "google_play"
    : "web_fallback";
}

export function getClaimWingerStickyBannerExposure(
  rawPathname: string,
): ClaimWingerStickyBannerExposure {
  const pathname = normalizePath(rawPathname);

  if (pathname.includes("/blog")) {
    return "after_scroll";
  }

  if (HOME_PATHS.has(pathname)) {
    return "delayed";
  }

  if (HIGH_INTENT_PATH_PARTS.some((part) => pathname.includes(part))) {
    return "delayed";
  }

  return "hidden";
}

function normalizePath(pathname: string) {
  const cleanPath = (pathname || "/").split(/[?#]/)[0] || "/";

  if (cleanPath !== "/" && cleanPath.endsWith("/")) {
    return cleanPath.slice(0, -1);
  }

  return cleanPath;
}

function buildTrackingPayload(
  locale: SiteLanguageCode,
  placement: string,
  context: ClaimWingerAppTrackingContext,
) {
  return {
    locale,
    placement,
    page_path: context.pagePath || "unknown",
    device_os: context.deviceOS || "unknown",
    cta_variant: context.ctaVariant || "google_play",
    article_slug: context.articleSlug || "none",
    content_cluster: context.contentCluster || "none",
    store:
      context.ctaVariant === "web_fallback" ? "claimwinger_web" : "google_play",
  };
}

/**
 * Pushes a GTM event for an Android app CTA click. Consistent with the existing
 * `claimwinger_cta_click` web event (see `claimwingerLinksEn.ts`).
 */
export function trackClaimWingerAppClick(
  placement: string,
  locale: SiteLanguageCode,
  context: ClaimWingerAppTrackingContext = {},
) {
  pushClaimWingerEvent(
    "claimwinger_app_cta_click",
    buildTrackingPayload(locale, placement, context),
  );
}

export function trackClaimWingerAppImpression(
  placement: string,
  locale: SiteLanguageCode,
  context: ClaimWingerAppTrackingContext = {},
) {
  pushClaimWingerEvent(
    "claimwinger_app_cta_impression",
    buildTrackingPayload(locale, placement, context),
  );
}

export type AppCtaCopy = {
  /** Small pill label above the title (card variant). */
  badge: string;
  /** Card heading. */
  title: string;
  /** Card supporting paragraph. */
  description: string;
  /** Card heading for iOS, desktop and non-Android fallback. */
  fallbackTitle?: string;
  /** Card paragraph for iOS, desktop and non-Android fallback. */
  fallbackDescription?: string;
  /** Button / store-badge label. */
  cta: string;
  /** Small line above the Google Play label in full store badges. */
  storePrefix: string;
  /** Web fallback CTA for iOS, desktop and non-Android devices. */
  webCta: string;
  /** Shorter web fallback CTA for dense spots like nav drawers. */
  webCtaShort: string;
  /** Short one-line text for the sticky mobile banner. */
  barText: string;
  /** Short one-line text when the sticky banner falls back to the web flow. */
  fallbackBarText: string;
  /** Localized dismiss button label. */
  closeLabel: string;
};

export const APP_CTA_COPY: Record<SiteLanguageCode, AppCtaCopy> = {
  pl: {
    badge: "Aplikacja mobilna",
    title: "Pobierz aplikację ClaimWinger",
    description:
      "Sprawdź odszkodowanie i złóż wniosek prosto z telefonu. Zrób zdjęcie karty pokładowej, podpisz palcem i śledź status — bez opłat z góry.",
    fallbackTitle: "Sprawdź roszczenie w ClaimWinger",
    fallbackDescription:
      "Nie korzystasz z Androida? Przejdź do formularza online i sprawdź, czy możesz odzyskać 250, 400 albo 600 EUR za problem z lotem.",
    cta: "Pobierz z Google Play",
    storePrefix: "Pobierz w",
    webCta: "Sprawdź roszczenie online",
    webCtaShort: "Online",
    barText: "Aplikacja ClaimWinger na Androida",
    fallbackBarText: "Sprawdź roszczenie online",
    closeLabel: "Zamknij",
  },
  en: {
    badge: "Mobile app",
    title: "Get the ClaimWinger app",
    description:
      "Check your compensation and file a claim straight from your phone. Snap your boarding pass, sign with your finger and track the status — no upfront fees.",
    fallbackTitle: "Check your claim with ClaimWinger",
    fallbackDescription:
      "Not on Android? Continue to the online claim flow and check whether your flight problem may qualify for compensation.",
    cta: "Get it on Google Play",
    storePrefix: "Get it on",
    webCta: "Check claim online",
    webCtaShort: "Online",
    barText: "Get the ClaimWinger app for Android",
    fallbackBarText: "Check your claim online",
    closeLabel: "Close",
  },
  cs: {
    badge: "Mobilní aplikace",
    title: "Stáhněte si aplikaci ClaimWinger",
    description:
      "Zkontrolujte odškodnění a podejte žádost přímo z telefonu. Vyfoťte palubní lístek, podepište prstem a sledujte stav — bez plateb předem.",
    cta: "Stáhnout z Google Play",
    storePrefix: "Stáhnout na",
    webCta: "Zkontrolovat nárok online",
    webCtaShort: "Online",
    barText: "Aplikace ClaimWinger pro Android",
    fallbackBarText: "Zkontrolujte nárok online",
    closeLabel: "Zavřít",
  },
  sk: {
    badge: "Mobilná aplikácia",
    title: "Stiahnite si aplikáciu ClaimWinger",
    description:
      "Skontrolujte odškodnenie a podajte žiadosť priamo z telefónu. Odfoťte palubný lístok, podpíšte prstom a sledujte stav — bez platieb vopred.",
    cta: "Stiahnuť z Google Play",
    storePrefix: "Stiahnuť z",
    webCta: "Skontrolovať nárok online",
    webCtaShort: "Online",
    barText: "Aplikácia ClaimWinger pre Android",
    fallbackBarText: "Skontrolujte nárok online",
    closeLabel: "Zavrieť",
  },
  hu: {
    badge: "Mobilalkalmazás",
    title: "Töltse le a ClaimWinger alkalmazást",
    description:
      "Ellenőrizze a kártérítést és nyújtsa be igényét egyenesen a telefonjáról. Fényképezze le a beszállókártyát, írja alá ujjal, és kövesse az állapotot — előzetes díjak nélkül.",
    cta: "Letöltés a Google Play-ről",
    storePrefix: "Letöltés innen",
    webCta: "Igény ellenőrzése online",
    webCtaShort: "Online",
    barText: "ClaimWinger alkalmazás Androidra",
    fallbackBarText: "Ellenőrizze igényét online",
    closeLabel: "Bezárás",
  },
  el: {
    badge: "Εφαρμογή για κινητά",
    title: "Κατεβάστε την εφαρμογή ClaimWinger",
    description:
      "Ελέγξτε την αποζημίωση και υποβάλετε αίτηση απευθείας από το κινητό σας. Φωτογραφίστε την κάρτα επιβίβασης, υπογράψτε με το δάχτυλο και παρακολουθήστε την κατάσταση — χωρίς προκαταβολή.",
    cta: "Λήψη από το Google Play",
    storePrefix: "Λήψη από",
    webCta: "Έλεγχος αξίωσης online",
    webCtaShort: "Online",
    barText: "Εφαρμογή ClaimWinger για Android",
    fallbackBarText: "Ελέγξτε την αξίωσή σας online",
    closeLabel: "Κλείσιμο",
  },
  tr: {
    badge: "Mobil uygulama",
    title: "ClaimWinger uygulamasını indirin",
    description:
      "Tazminatınızı kontrol edin ve talebinizi doğrudan telefonunuzdan oluşturun. Biniş kartınızın fotoğrafını çekin, parmağınızla imzalayın ve durumu takip edin — ön ödeme yok.",
    cta: "Google Play'den indirin",
    storePrefix: "Şuradan indir",
    webCta: "Talebi online kontrol et",
    webCtaShort: "Online",
    barText: "Android için ClaimWinger uygulaması",
    fallbackBarText: "Talebinizi online kontrol edin",
    closeLabel: "Kapat",
  },
  it: {
    badge: "App mobile",
    title: "Scarica l'app ClaimWinger",
    description:
      "Verifica il risarcimento e invia la richiesta direttamente dal telefono. Fotografa la carta d'imbarco, firma con il dito e segui lo stato — senza costi anticipati.",
    cta: "Scarica su Google Play",
    storePrefix: "Scarica su",
    webCta: "Verifica il reclamo online",
    webCtaShort: "Online",
    barText: "App ClaimWinger per Android",
    fallbackBarText: "Verifica il reclamo online",
    closeLabel: "Chiudi",
  },
  zh: {
    badge: "手机应用",
    title: "下载 ClaimWinger 应用",
    description:
      "直接在手机上查询赔偿并提交索赔。拍摄登机牌、用手指签名并跟踪进度——无需预付费用。",
    cta: "在 Google Play 下载",
    storePrefix: "下载于",
    webCta: "在线检查索赔",
    webCtaShort: "在线",
    barText: "下载安卓版 ClaimWinger 应用",
    fallbackBarText: "在线检查您的索赔",
    closeLabel: "关闭",
  },
  hi: {
    badge: "मोबाइल ऐप",
    title: "ClaimWinger ऐप डाउनलोड करें",
    description:
      "अपने फ़ोन से ही मुआवज़ा जांचें और दावा दर्ज करें। बोर्डिंग पास की फ़ोटो लें, उंगली से हस्ताक्षर करें और स्थिति ट्रैक करें — कोई अग्रिम शुल्क नहीं।",
    cta: "Google Play से डाउनलोड करें",
    storePrefix: "डाउनलोड करें",
    webCta: "दावा ऑनलाइन जांचें",
    webCtaShort: "ऑनलाइन",
    barText: "Android के लिए ClaimWinger ऐप",
    fallbackBarText: "अपना दावा ऑनलाइन जांचें",
    closeLabel: "बंद करें",
  },
  vi: {
    badge: "Ứng dụng di động",
    title: "Tải ứng dụng ClaimWinger",
    description:
      "Kiểm tra tiền bồi thường và gửi yêu cầu ngay trên điện thoại. Chụp thẻ lên máy bay, ký bằng ngón tay và theo dõi trạng thái — không phí trả trước.",
    cta: "Tải trên Google Play",
    storePrefix: "Tải trên",
    webCta: "Kiểm tra yêu cầu online",
    webCtaShort: "Online",
    barText: "Ứng dụng ClaimWinger cho Android",
    fallbackBarText: "Kiểm tra yêu cầu online",
    closeLabel: "Đóng",
  },
  sv: {
    badge: "Mobilapp",
    title: "Ladda ner ClaimWinger-appen",
    description:
      "Kontrollera ersättningen och skicka in ditt krav direkt från mobilen. Fotografera boardingkortet, signera med fingret och följ statusen — utan förskottsavgifter.",
    cta: "Hämta på Google Play",
    storePrefix: "Hämta på",
    webCta: "Kontrollera kravet online",
    webCtaShort: "Online",
    barText: "ClaimWinger-appen för Android",
    fallbackBarText: "Kontrollera kravet online",
    closeLabel: "Stäng",
  },
  no: {
    badge: "Mobilapp",
    title: "Last ned ClaimWinger-appen",
    description:
      "Sjekk erstatningen og send inn kravet rett fra mobilen. Ta bilde av boardingkortet, signer med fingeren og følg statusen — uten forhåndsbetaling.",
    cta: "Last ned på Google Play",
    storePrefix: "Last ned fra",
    webCta: "Sjekk kravet online",
    webCtaShort: "Online",
    barText: "ClaimWinger-appen for Android",
    fallbackBarText: "Sjekk kravet online",
    closeLabel: "Lukk",
  },
  bg: {
    badge: "Мобилно приложение",
    title: "Изтеглете приложението ClaimWinger",
    description:
      "Проверете обезщетението и подайте искане направо от телефона си. Снимайте бордната карта, подпишете се с пръст и следете статуса — без предварителни такси.",
    cta: "Изтегли от Google Play",
    storePrefix: "Изтегли от",
    webCta: "Проверете иск онлайн",
    webCtaShort: "Онлайн",
    barText: "Приложение ClaimWinger за Android",
    fallbackBarText: "Проверете иска си онлайн",
    closeLabel: "Затвори",
  },
  lt: {
    badge: "Mobilioji programėlė",
    title: "Atsisiųskite „ClaimWinger“ programėlę",
    description:
      "Patikrinkite kompensaciją ir pateikite prašymą tiesiai iš telefono. Nufotografuokite įlaipinimo kortelę, pasirašykite pirštu ir sekite būseną — be išankstinių mokesčių.",
    cta: "Atsisiųsti iš Google Play",
    storePrefix: "Atsisiųsti iš",
    webCta: "Patikrinti prašymą online",
    webCtaShort: "Online",
    barText: "„ClaimWinger“ programėlė Android sistemai",
    fallbackBarText: "Patikrinkite prašymą online",
    closeLabel: "Uždaryti",
  },
  lv: {
    badge: "Mobilā lietotne",
    title: "Lejupielādējiet ClaimWinger lietotni",
    description:
      "Pārbaudiet kompensāciju un iesniedziet pieprasījumu tieši no telefona. Nofotografējiet iekāpšanas karti, parakstieties ar pirkstu un sekojiet statusam — bez priekšapmaksas.",
    cta: "Lejupielādēt no Google Play",
    storePrefix: "Lejupielādēt no",
    webCta: "Pārbaudīt prasību online",
    webCtaShort: "Online",
    barText: "ClaimWinger lietotne Android ierīcēm",
    fallbackBarText: "Pārbaudiet prasību online",
    closeLabel: "Aizvērt",
  },
  sr: {
    badge: "Mobilna aplikacija",
    title: "Preuzmite aplikaciju ClaimWinger",
    description:
      "Proverite obeštećenje i podnesite zahtev direktno sa telefona. Slikajte kartu za ukrcavanje, potpišite se prstom i pratite status — bez unapred plaćenih troškova. Aplikacija je na engleskom jeziku.",
    cta: "Preuzmite sa Google Play",
    storePrefix: "Preuzmite sa",
    webCta: "Proverite zahtev online",
    webCtaShort: "Online",
    barText: "Aplikacija ClaimWinger za Android",
    fallbackBarText: "Proverite svoj zahtev online",
    closeLabel: "Zatvori",
  },
  et: {
    badge: "Mobiilirakendus",
    title: "Laadige alla ClaimWingeri rakendus",
    description:
      "Kontrollige hüvitist ja esitage nõue otse telefonist. Pildistage pardakaart, allkirjastage sõrmega ja jälgige staatust — ilma ettemaksuta.",
    cta: "Laadige alla Google Playst",
    storePrefix: "Laadige alla",
    webCta: "Kontrollige nõuet veebis",
    webCtaShort: "Veebis",
    barText: "ClaimWingeri rakendus Androidile",
    fallbackBarText: "Kontrollige oma nõuet veebis",
    closeLabel: "Sulge",
  },
  ja: {
    badge: "モバイルアプリ",
    title: "ClaimWingerアプリをダウンロード",
    description:
      "スマートフォンから直接、補償金の確認と請求ができます。搭乗券を撮影し、指でサインして、ステータス通知を受け取るだけ。前払い費用は一切かかりません。",
    cta: "Google Playでダウンロード",
    storePrefix: "ダウンロード:",
    webCta: "オンラインで請求を確認",
    webCtaShort: "オンライン",
    barText: "ClaimWinger Androidアプリ",
    fallbackBarText: "オンラインで請求を確認",
    closeLabel: "閉じる",
  },
  de: {
    badge: "Mobile App",
    title: "ClaimWinger-App herunterladen",
    description:
      "Prüfen Sie Ihre Entschädigung und reichen Sie den Anspruch direkt vom Smartphone ein. Bordkarte fotografieren, per Finger unterschreiben und Status-Benachrichtigungen erhalten — ohne Vorabkosten.",
    cta: "Bei Google Play laden",
    storePrefix: "Laden bei",
    webCta: "Anspruch online prüfen",
    webCtaShort: "Online",
    barText: "ClaimWinger-App für Android",
    fallbackBarText: "Prüfen Sie Ihren Anspruch online",
    closeLabel: "Schließen",
  },
};

/** Returns localized copy for a locale, falling back to English. */
export function getAppCopy(locale: SiteLanguageCode): AppCtaCopy {
  return APP_CTA_COPY[locale] ?? APP_CTA_COPY.en;
}
