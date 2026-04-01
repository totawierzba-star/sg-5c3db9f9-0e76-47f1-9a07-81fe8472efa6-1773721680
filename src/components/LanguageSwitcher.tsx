import { useLocale } from "@/contexts/LocaleContext";
import { DesktopLanguageDropdown } from "@/components/LanguageMenu";

export function LanguageSwitcher() {
  const { locale } = useLocale();

  return <DesktopLanguageDropdown currentLocale={locale} />;
}
