import Link from "next/link";
import { ReactNode, useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Plane, Menu, X } from "lucide-react";
import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";

interface LayoutNoProps {
  children: ReactNode;
}

export function LayoutNo({ children }: LayoutNoProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/no" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                FlyProblem
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/no/forsinket-fly"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Forsinket fly
              </Link>
              <Link
                href="/no/innstilt-fly"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Innstilt fly
              </Link>
              <Link
                href="/no/erstatningskalkulator"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Kalkulator
              </Link>
              <Link
                href="/no/blog"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Blogg
              </Link>

              <DesktopLanguageDropdown
                currentLocale="no"
                buttonClassName="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              />

              <ThemeSwitch />
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeSwitch />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 flex flex-col gap-2 pb-4">
              <Link href="/no/forsinket-fly" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>Forsinket fly</Link>
              <Link href="/no/innstilt-fly" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>Innstilt fly</Link>
              <Link href="/no/erstatningskalkulator" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>Kalkulator</Link>
              <Link href="/no/blog" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2" onClick={() => setMobileMenuOpen(false)}>Blogg</Link>
              <MobileLanguageList
                currentLocale="no"
                title="Språk"
                onNavigate={() => setMobileMenuOpen(false)}
                wrapperClassName="mt-2 border-t border-gray-200 pt-3 dark:border-gray-700"
                itemClassName="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
                activeItemClassName="block rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
              />
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                FlyProblem.no
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Få opptil €600 i erstatning for forsinkede eller innstilte flyvninger. Juridisk støtte og ekspertråd.
              </p>
            </div>

            {/* Flyproblemer */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Flyproblemer
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/no/forsinket-fly" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    Forsinket fly
                  </Link>
                </li>
                <li>
                  <Link href="/no/innstilt-fly" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    Innstilt fly
                  </Link>
                </li>
                <li>
                  <Link href="/no/erstatningskalkulator" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    Erstatningskalkulator
                  </Link>
                </li>
              </ul>
            </div>

            {/* Ressurser */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Ressurser
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/no/blog" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    Blogg og guider
                  </Link>
                </li>
                <li>
                  <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                    Send inn krav
                  </a>
                </li>
              </ul>
            </div>

            {/* Juridisk */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Juridisk
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-600 dark:text-gray-400">
                    EU-forordning 261/2004
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 dark:text-gray-400">
                    Passasjerrettigheter
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} FlyProblem.no - Alle rettigheter reservert
            </p>
            <p className="mt-2">
              Drevet av{" "}
              <a href="https://claimwinger.com/no" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
                ClaimWinger
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
