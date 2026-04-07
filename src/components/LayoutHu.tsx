import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Plane } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";
import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";

interface LayoutHuProps {
  children: ReactNode;
}

export function LayoutHu({ children }: LayoutHuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/hu" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 transition-colors group-hover:bg-blue-700">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ProblemLot.com
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/hu/kesett-jarat"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Kesett jarat
              </Link>
              <Link
                href="/hu/torolt-jarat"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Torolt jarat
              </Link>
              <Link
                href="/hu/karteritesi-kalkulator"
                className="font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Kalkulator
              </Link>

              <DesktopLanguageDropdown
                currentLocale="hu"
                buttonClassName="font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              />

              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                aria-label="Tema valtas"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              <a
                href="https://claimwinger.com/hu"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Karterites ellenorzese
              </a>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-700 dark:text-gray-300"
                aria-label="Tema valtas"
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
                href="/hu/kesett-jarat"
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kesett jarat
              </Link>
              <Link
                href="/hu/torolt-jarat"
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Torolt jarat
              </Link>
              <Link
                href="/hu/karteritesi-kalkulator"
                className="block py-2 font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Karteritesi kalkulator
              </Link>

              <MobileLanguageList
                currentLocale="hu"
                title="Nyelv"
                onNavigate={() => setMobileMenuOpen(false)}
                itemClassName="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                activeItemClassName="block rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
              />

              <a
                href="https://claimwinger.com/hu"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Karterites ellenorzese
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
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ProblemLot.com</span>
              </div>
              <p className="text-sm text-gray-400">
                Segitunk az utasoknak kartalanitast igenyelni kesett es torolt jaratok utan.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Gyors linkek</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/hu/kesett-jarat" className="text-sm transition-colors hover:text-blue-400">
                    Kesett jarat
                  </Link>
                </li>
                <li>
                  <Link href="/hu/torolt-jarat" className="text-sm transition-colors hover:text-blue-400">
                    Torolt jarat
                  </Link>
                </li>
                <li>
                  <Link href="/hu/karteritesi-kalkulator" className="text-sm transition-colors hover:text-blue-400">
                    Karteritesi kalkulator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">ClaimWinger</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://claimwinger.com/hu" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-blue-400">
                    Fobb oldal
                  </a>
                </li>
                <li>
                  <a href="https://claimwinger.com/hu/kesett-jarat" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-blue-400">
                    Kesett jarat urlap
                  </a>
                </li>
                <li>
                  <a href="https://claimwinger.com/hu/torolt-jarat" target="_blank" rel="noopener noreferrer" className="text-sm transition-colors hover:text-blue-400">
                    Torolt jarat urlap
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Jogi informacio</h3>
              <p className="text-sm text-gray-400">
                A tajekoztatas az EU 261/2004 utasjogi rendeleten alapul. Az egyes ugyek jogosultsaga mindig az adott jarat tenyeitol fugg.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ProblemLot.com. Minden jog fenntartva.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
