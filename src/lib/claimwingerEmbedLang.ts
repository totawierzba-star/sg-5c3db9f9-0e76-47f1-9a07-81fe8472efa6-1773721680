const SUPPORTED_EMBED_LANGS: ReadonlySet<string> = new Set([
  "pl",
  "en",
  "el",
  "hi",
  "hu",
  "sk",
  "tr",
  "vi",
  "zh",
]);

const FALLBACK_LANG = "en";
const DEFAULT_LANG = "pl";

export function getClaimWingerEmbedLang(lang?: string | null): string {
  if (!lang) return DEFAULT_LANG;

  const normalized = lang.toLowerCase().split(/[-_]/)[0];
  if (SUPPORTED_EMBED_LANGS.has(normalized)) {
    return normalized;
  }

  return FALLBACK_LANG;
}
