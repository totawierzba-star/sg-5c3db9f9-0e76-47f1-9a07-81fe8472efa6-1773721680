import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown, Globe } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  getLanguageHref,
  getSiteLanguage,
  SITE_LANGUAGES,
  type SiteLanguageCode,
} from "@/lib/siteLanguages";

type DesktopLanguageDropdownProps = {
  currentLocale: SiteLanguageCode;
  buttonClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
};

type MobileLanguageListProps = {
  currentLocale: SiteLanguageCode;
  title?: string;
  onNavigate?: () => void;
  wrapperClassName?: string;
  titleClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
};

const DEFAULT_ITEM_CLASS =
  "block w-full rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700";

const DEFAULT_ACTIVE_ITEM_CLASS =
  "block w-full rounded-md bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400";

export function DesktopLanguageDropdown({
  currentLocale,
  buttonClassName,
  menuClassName,
  itemClassName,
  activeItemClassName,
}: DesktopLanguageDropdownProps) {
  const router = useRouter();
  const currentLanguage = getSiteLanguage(currentLocale);

  return (
    <div className="relative group z-50">
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
          buttonClassName,
        )}
        aria-haspopup="menu"
        aria-label={`Current language: ${currentLanguage.label}`}
      >
        <Globe className="h-4 w-4" />
        <span>{`${currentLanguage.flag} ${currentLanguage.shortLabel}`}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      <div
        className={cn(
          "invisible absolute right-0 mt-2 w-52 rounded-lg border border-gray-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-gray-700 dark:bg-gray-800",
          menuClassName,
        )}
      >
        {SITE_LANGUAGES.map((language) =>
          language.code === currentLocale ? (
            <span
              key={language.code}
              className={cn(DEFAULT_ACTIVE_ITEM_CLASS, activeItemClassName)}
            >
              {`${language.flag} ${language.label}`}
            </span>
          ) : (
            <Link
              key={language.code}
              href={getLanguageHref(language.code, router.asPath)}
              className={cn(DEFAULT_ITEM_CLASS, itemClassName)}
            >
              {`${language.flag} ${language.label}`}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}

export function MobileLanguageList({
  currentLocale,
  title = "Language",
  onNavigate,
  wrapperClassName,
  titleClassName,
  listClassName,
  itemClassName,
  activeItemClassName,
}: MobileLanguageListProps) {
  const router = useRouter();

  return (
    <div className={wrapperClassName}>
      <div
        className={cn(
          "mb-2 text-sm font-medium text-gray-500 dark:text-gray-400",
          titleClassName,
        )}
      >
        {title}
      </div>

      <div className={cn("flex flex-col gap-2", listClassName)}>
        {SITE_LANGUAGES.map((language) =>
          language.code === currentLocale ? (
            <span
              key={language.code}
              className={cn(DEFAULT_ACTIVE_ITEM_CLASS, activeItemClassName)}
            >
              {`${language.flag} ${language.label}`}
            </span>
          ) : (
            <Link
              key={language.code}
              href={getLanguageHref(language.code, router.asPath)}
              className={cn(DEFAULT_ITEM_CLASS, itemClassName)}
              onClick={onNavigate}
            >
              {`${language.flag} ${language.label}`}
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
