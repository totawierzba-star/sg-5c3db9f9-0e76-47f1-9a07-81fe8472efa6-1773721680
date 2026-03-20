export type Locale = "pl" | "en";

export const defaultLocale: Locale = "pl";

export const locales: Locale[] = ["pl", "en"];

export const localeNames: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
};

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split("/").filter(Boolean);
  const firstSegment = segments[0];
  
  if (firstSegment && locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }
  
  return defaultLocale;
}

export function getPathWithoutLocale(path: string): string {
  const locale = getLocaleFromPath(path);
  if (locale === defaultLocale) return path;
  return path.replace(`/${locale}`, "") || "/";
}

export function addLocaleToPath(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  const pathWithoutLocale = getPathWithoutLocale(path);
  return `/${locale}${pathWithoutLocale}`;
}