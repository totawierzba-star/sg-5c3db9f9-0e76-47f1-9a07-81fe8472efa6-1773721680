import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileNav } from "@/components/MobileNav";
import { useLocale } from "@/contexts/LocaleContext";
import { translations } from "@/lib/translations";

export function Navigation() {
  const { locale } = useLocale();
  const t = translations[locale];

  const getLocalizedPath = (path: string) => {
    if (locale === "en") {
      const pathMap: Record<string, string> = {
        "/opozniony-lot": "/en/delayed-flight",
        "/odwolany-lot": "/en/cancelled-flight",
        "/ile-mozesz-dostac": "/en/compensation-calculator",
        "/blog": "/en/blog",
        "/o-autorze": "/en/about",
        "/": "/en"
      };
      return pathMap[path] || `/en${path}`;
    }
    return path;
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href={locale === "en" ? "/en" : "/"} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-lg font-bold text-blue-700">problemlot.com</span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            <Link
              href={getLocalizedPath("/")}
              className="px-1.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              {t.nav.home}
            </Link>
            <Link
              href={getLocalizedPath("/opozniony-lot")}
              className="px-1.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              {t.nav.delayedFlight}
            </Link>
            <Link
              href={getLocalizedPath("/odwolany-lot")}
              className="px-1.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              {t.nav.cancelledFlight}
            </Link>
            <Link
              href={getLocalizedPath("/ile-mozesz-dostac")}
              className="px-1.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              {t.nav.compensation}
            </Link>
            <Link
              href={getLocalizedPath("/blog")}
              className="px-1.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              {t.nav.articles}
            </Link>
            <Link
              href={getLocalizedPath("/o-autorze")}
              className="px-1.5 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap"
            >
              {t.nav.about}
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Button asChild size="sm" className="hidden md:flex bg-[#FF6B35] hover:bg-[#FF6B35]/90">
              <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer">
                {t.nav.checkClaim}
              </a>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
}
