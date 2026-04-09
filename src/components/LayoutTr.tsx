import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Plane } from "lucide-react";

import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";
import { useTheme } from "@/contexts/ThemeProvider";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

interface LayoutTrProps {
  children: ReactNode;
}

const claimLinks = {
  home: "https://claimwinger.com/tr?utm_source=problemlot-tr&utm_medium=nav_button&utm_campaign=locale_launch",
  delayed:
    "https://claimwinger.com/tr/gecikmis-ucus?utm_source=problemlot-tr&utm_medium=footer_link&utm_campaign=delayed_flight",
  cancelled:
    "https://claimwinger.com/tr/iptal-edilen-ucus?utm_source=problemlot-tr&utm_medium=footer_link&utm_campaign=cancelled_flight",
};

export function LayoutTr({ children }: LayoutTrProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/tr" className="group flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 transition-colors group-hover:bg-red-700">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">ProblemLot.com</span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/tr/gecikmis-ucus"
                className="font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              >
                Gecikmis Ucus
              </Link>
              <Link
                href="/tr/iptal-edilen-ucus"
                className="font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              >
                Iptal Edilen Ucus
              </Link>
              <Link
                href="/tr/tazminat-hesaplayici"
                className="font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              >
                Tazminat Hesaplayici
              </Link>
              <Link
                href="/tr/blog"
                className="font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              >
                Blog
              </Link>

              <DesktopLanguageDropdown
                currentLocale="tr"
                buttonClassName="font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
              />

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                aria-label="Tema degistir"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <a
                href={claimLinks.home}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushClaimWingerEvent("claimwinger_cta_click", {
                    locale: "tr",
                    placement: "layout_desktop_nav",
                    destination: claimLinks.home,
                  })
                }
                className="rounded-lg bg-red-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-red-700"
              >
                Tazminat Kontrolu
              </a>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-700 dark:text-gray-300"
                aria-label="Tema degistir"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="space-y-4 border-t border-gray-200 py-4 dark:border-gray-700 md:hidden">
              <Link
                href="/tr/gecikmis-ucus"
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Gecikmis Ucus
              </Link>
              <Link
                href="/tr/iptal-edilen-ucus"
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Iptal Edilen Ucus
              </Link>
              <Link
                href="/tr/tazminat-hesaplayici"
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tazminat Hesaplayici
              </Link>
              <Link
                href="/tr/blog"
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <MobileLanguageList
                currentLocale="tr"
                title="Dil"
                onNavigate={() => setMobileMenuOpen(false)}
                itemClassName="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                activeItemClassName="block rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-600 dark:bg-red-900/20 dark:text-red-400"
              />

              <a
                href={claimLinks.home}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  pushClaimWingerEvent("claimwinger_cta_click", {
                    locale: "tr",
                    placement: "layout_mobile_nav",
                    destination: claimLinks.home,
                  });
                  setMobileMenuOpen(false);
                }}
                className="block rounded-lg bg-red-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-red-700"
              >
                Tazminat Kontrolu
              </a>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-gray-900 py-12 text-gray-300 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ProblemLot.com</span>
              </div>
              <p className="text-sm text-gray-400">
                Turk yolculara ve Avrupa diasporasina EU261 kapsami, gecikme ve iptal tazminati konusunda rehberlik eder.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Hizli Linkler</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/tr/gecikmis-ucus" className="text-sm transition-colors hover:text-red-400">
                    Gecikmis Ucus
                  </Link>
                </li>
                <li>
                  <Link href="/tr/iptal-edilen-ucus" className="text-sm transition-colors hover:text-red-400">
                    Iptal Edilen Ucus
                  </Link>
                </li>
                <li>
                  <Link href="/tr/tazminat-hesaplayici" className="text-sm transition-colors hover:text-red-400">
                    Tazminat Hesaplayici
                  </Link>
                </li>
                <li>
                  <Link href="/tr/blog" className="text-sm transition-colors hover:text-red-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">ClaimWinger</h3>
              <ul className="space-y-2">
                <li>
                  <a href={claimLinks.home} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-red-400">
                    Ana sayfa
                  </a>
                </li>
                <li>
                  <a href={claimLinks.delayed} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-red-400">
                    Gecikmis ucus formu
                  </a>
                </li>
                <li>
                  <a href={claimLinks.cancelled} target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-red-400">
                    Iptal edilen ucus formu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Bilgilendirme</h3>
              <p className="text-sm text-gray-400">
                Bu icerikler EU261/2004 kurallari temelinde hazirlanmistir. Her dosyanin uygunlugu ucusun gercek
                kosullarina ve belgelerine gore degerlendirilir.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ProblemLot.com. Tum haklari saklidir.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
