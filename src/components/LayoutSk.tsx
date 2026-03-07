import Link from "next/link";
import { ReactNode, useState } from "react";
import { Menu, X, Sun, Moon, ChevronDown, Plane } from "lucide-react";
import { ThemeSwitch } from "./ThemeSwitch";

interface LayoutSkProps {
  children: ReactNode;
}

export function LayoutSk({ children }: LayoutSkProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/sk" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              <Plane className="h-6 w-6" />
              <span className="font-bold text-xl">LotProblem.pl</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/sk/meskanie-letu"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Meškanie letu
              </Link>
              <Link
                href="/sk/zruseny-let"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Zrušený let
              </Link>
              <Link
                href="/sk/kalkulacka-kompenzacie"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Kalkulačka
              </Link>
              <Link
                href="/sk/blog"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Blog
              </Link>

              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>🇸🇰 SK</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                {languageMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <Link href="/" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg">
                      🇵🇱 Polski
                    </Link>
                    <Link href="/zh" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      🇨🇳 中文
                    </Link>
                    <Link href="/cs" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      🇨🇿 Čeština
                    </Link>
                    <Link href="/hi" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      🇮🇳 हिन्दी
                    </Link>
                    <Link href="/sk" className="block px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20">
                      🇸🇰 Slovenčina
                    </Link>
                    <Link href="/it" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      🇮🇹 Italiano
                    </Link>
                    <Link href="/en" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      🇬🇧 English
                    </Link>
                    <Link href="/sv" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg">
                      🇸🇪 Svenska
                    </Link>
                  </div>
                )}
              </div>

              <ThemeSwitch />

              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
              >
                Žiadosť o kompenzáciu
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
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
            <div className="md:hidden py-4 space-y-4">
              <Link
                href="/sk/meskanie-letu"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meškanie letu
              </Link>
              <Link
                href="/sk/zruseny-let"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Zrušený let
              </Link>
              <Link
                href="/sk/kalkulacka-kompenzacie"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kalkulačka
              </Link>
              <Link
                href="/sk/blog"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Language Switcher Mobile */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">Jazyk:</div>
                <Link
                  href="/"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇵🇱 Polski
                </Link>
                <Link
                  href="/zh"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇨🇳 中文
                </Link>
                <Link
                  href="/cs"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇨🇿 Čeština
                </Link>
                <Link
                  href="/hi"
                  className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇮🇳 हिन्दी
                </Link>
                <Link
                  href="/sk"
                  className="block text-blue-600 dark:text-blue-400 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  🇸🇰 Slovenčina
                </Link>
              </div>

              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Žiadosť o kompenzáciu
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">O nás</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Pomáhame cestujúcim získať kompenzáciu za meškanie a zrušenie letov podľa nariadenia EU 261/2004.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Rýchle odkazy</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/sk/meskanie-letu" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Meškanie letu
                  </Link>
                </li>
                <li>
                  <Link href="/sk/zruseny-let" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Zrušený let
                  </Link>
                </li>
                <li>
                  <Link href="/sk/kalkulacka-kompenzacie" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Kalkulačka kompenzácie
                  </Link>
                </li>
                <li>
                  <Link href="/sk/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Blog a príručky
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Zdroje</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://claimwinger.com/delayed-flight" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Žiadosť meškanie
                  </a>
                </li>
                <li>
                  <a href="https://claimwinger.com/cancelled-flight" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Žiadosť zrušenie
                  </a>
                </li>
                <li>
                  <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    ClaimWinger
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Právne informácie</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Všetky informácie sú založené na nariadení EU 261/2004 o právach cestujúcich v leteckej doprave.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇵🇱 PL
                </Link>
                <Link href="/zh" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇨🇳 ZH
                </Link>
                <Link href="/cs" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇨🇿 CS
                </Link>
                <Link href="/hi" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇮🇳 HI
                </Link>
                <Link href="/sk" className="text-blue-600 dark:text-blue-400 font-medium transition-colors">
                  🇸🇰 SK
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© 2026 LotProblem.pl • Kompenzácie za letecké meškania a zrušenia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}