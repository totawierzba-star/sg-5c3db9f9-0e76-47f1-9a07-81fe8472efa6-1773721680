export type SiteLanguageCode =
  | "pl"
  | "en"
  | "cs"
  | "sk"
  | "it"
  | "zh"
  | "hi"
  | "sv"
  | "no";

export type SiteLanguage = {
  code: SiteLanguageCode;
  label: string;
  shortLabel: string;
  flag: string;
  href: string;
};

export const SITE_LANGUAGES: SiteLanguage[] = [
  { code: "pl", label: "Polski", shortLabel: "PL", flag: "🇵🇱", href: "/" },
  { code: "en", label: "English", shortLabel: "EN", flag: "🇬🇧", href: "/en" },
  { code: "cs", label: "Čeština", shortLabel: "CS", flag: "🇨🇿", href: "/cs" },
  { code: "sk", label: "Slovenčina", shortLabel: "SK", flag: "🇸🇰", href: "/sk" },
  { code: "it", label: "Italiano", shortLabel: "IT", flag: "🇮🇹", href: "/it" },
  { code: "zh", label: "中文", shortLabel: "ZH", flag: "🇨🇳", href: "/zh" },
  { code: "hi", label: "हिन्दी", shortLabel: "HI", flag: "🇮🇳", href: "/hi" },
  { code: "sv", label: "Svenska", shortLabel: "SV", flag: "🇸🇪", href: "/sv" },
  { code: "no", label: "Norsk", shortLabel: "NO", flag: "🇳🇴", href: "/no" },
];

const PL_TO_EN_ROUTE_MAP: Record<string, string> = {
  "/": "/en",
  "/opozniony-lot": "/en/delayed-flight",
  "/odwolany-lot": "/en/cancelled-flight",
  "/ile-mozesz-dostac": "/en/compensation-calculator",
  "/blog": "/en/blog",
  "/o-autorze": "/en/about",
};

const EN_TO_PL_ROUTE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(PL_TO_EN_ROUTE_MAP).map(([plPath, enPath]) => [enPath, plPath]),
) as Record<string, string>;

function normalizePath(path: string) {
  const cleanPath = path.split(/[?#]/)[0] || "/";
  if (cleanPath !== "/" && cleanPath.endsWith("/")) {
    return cleanPath.slice(0, -1);
  }

  return cleanPath;
}

export function getSiteLanguage(code: SiteLanguageCode) {
  return SITE_LANGUAGES.find((language) => language.code === code) ?? SITE_LANGUAGES[0];
}

export function getLanguageHref(targetCode: SiteLanguageCode, currentPath: string) {
  const normalizedPath = normalizePath(currentPath);

  if (targetCode === "pl") {
    if (normalizedPath in EN_TO_PL_ROUTE_MAP) {
      return EN_TO_PL_ROUTE_MAP[normalizedPath];
    }

    if (normalizedPath.startsWith("/en/blog/")) {
      return "/blog";
    }

    return "/";
  }

  if (targetCode === "en") {
    if (normalizedPath in PL_TO_EN_ROUTE_MAP) {
      return PL_TO_EN_ROUTE_MAP[normalizedPath];
    }

    if (normalizedPath.startsWith("/blog/")) {
      return "/en/blog";
    }

    return "/en";
  }

  return getSiteLanguage(targetCode).href;
}
