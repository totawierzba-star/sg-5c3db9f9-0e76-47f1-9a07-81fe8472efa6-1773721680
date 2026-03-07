import Link from "next/link";
import { ReactNode, useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Button } from "@/components/ui/button";
import { Plane, Globe, Menu, X } from "lucide-react";

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

              {/* Language Selector */}
              <div className="relative group z-50">
                <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Globe className="h-5 w-5" />
                  <span className="hidden lg:inline">NO</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-700">
                  <Link href="/" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇵🇱 Polski</Link>
                  <Link href="/cs" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇨🇿 Čeština</Link>
                  <Link href="/sk" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇸🇰 Slovenčina</Link>
                  <Link href="/it" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇮🇹 Italiano</Link>
                  <Link href="/zh" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇨🇳 中文</Link>
                  <Link href="/hi" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇮🇳 हिन्दी</Link>
                  <Link href="/en" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇬🇧 English</Link>
                  <Link href="/sv" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇸🇪 Svenska</Link>
                  <Link href="/no" className="block px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20">🇳🇴 Norsk</Link>
                </div>
              </div>

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
              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/" className="text-xl">🇵🇱</Link>
                <Link href="/cs" className="text-xl">🇨🇿</Link>
                <Link href="/sk" className="text-xl">🇸🇰</Link>
                <Link href="/zh" className="text-xl">🇨🇳</Link>
                <Link href="/hi" className="text-xl">🇮🇳</Link>
                <Link href="/it" className="text-xl">🇮🇹</Link>
                <Link href="/en" className="text-xl">🇬🇧</Link>
                <Link href="/sv" className="text-xl">🇸🇪</Link>
                <Link href="/no" className="text-xl">🇳🇴</Link>
              </div>
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