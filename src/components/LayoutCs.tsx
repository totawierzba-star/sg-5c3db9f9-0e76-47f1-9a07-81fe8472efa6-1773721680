import Link from "next/link";
import { ReactNode, useState } from "react";
import { Menu, X, ChevronDown, Plane, Scale, BookOpen } from "lucide-react";
import { ThemeSwitch } from "./ThemeSwitch";

interface LayoutCsProps {
  children: ReactNode;
}

export function LayoutCs({ children }: LayoutCsProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/cs" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-xl hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              <Plane className="h-6 w-6" />
              <span>LotProblem.cz</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/cs/zpozdeny-let" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Zpožděný let
              </Link>
              <Link href="/cs/zruseny-let" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Zrušený let
              </Link>
              <Link href="/cs/kompenzace-kalkulacka" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Kalkulačka
              </Link>
              <Link href="/cs/blog" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Blog
              </Link>

              {/* Language Switcher */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span>🇨🇿 CS</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg">
                    🇵🇱 Polski
                  </Link>
                  <Link href="/zh" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    🇨🇳 中文
                  </Link>
                  <Link
                    href="/cs"
                    className="block px-4 py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-b-lg"
                  >
                    🇨🇿 Čeština
                  </Link>
                  <Link
                    href="/hi"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇮🇳 हिन्दी
                  </Link>
                  <Link
                    href="/sk"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    🇸🇰 Slovenčina
                  </Link>
                  <Link
                    href="/it"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-b-lg"
                  >
                    🇮🇹 Italiano
                  </Link>
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇺🇸 English
                  </Link>
                </div>
              </div>

              <ThemeSwitch />

              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Zkontrolovat let
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeSwitch />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/cs/zpozdeny-let"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Zpožděný let
                </Link>
                <Link
                  href="/cs/zruseny-let"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Zrušený let
                </Link>
                <Link
                  href="/cs/kompenzace-kalkulacka"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kalkulačka
                </Link>
                <Link
                  href="/cs/blog"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>

                {/* Language Switcher Mobile */}
                <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Jazyk</div>
                  <div className="flex flex-col space-y-2">
                    <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      🇵🇱 Polski
                    </Link>
                    <Link href="/zh" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                      🇨🇳 中文
                    </Link>
                    <Link
                      href="/cs"
                      className="text-blue-600 dark:text-blue-400 font-medium"
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
                      className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      🇸🇰 Slovenčina
                    </Link>
                    <Link
                      href="/it"
                      className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      🇮🇹 Italiano
                    </Link>
                    <Link
                      href="/en"
                      className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      🇺🇸 English
                    </Link>
                  </div>
                </div>

                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center mx-4 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Zkontrolovat let
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-lg mb-4">
                <Plane className="h-5 w-5" />
                <span>LotProblem.cz</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Pomáháme cestujícím získat kompenzaci za zpožděné nebo zrušené lety podle nařízení EU 261/2004.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Scale className="h-4 w-4 mr-2" />
                Vaše práva
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/cs/zpozdeny-let" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Zpožděný let
                  </Link>
                </li>
                <li>
                  <Link href="/cs/zruseny-let" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Zrušený let
                  </Link>
                </li>
                <li>
                  <Link href="/cs/kompenzace-kalkulacka" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Kalkulačka kompenzace
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Zdroje
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/cs/blog" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Podat reklamaci
                  </a>
                </li>
                <li>
                  <Link href="/cs" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    EU 261/2004
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © 2026 LotProblem.cz • Všechna práva vyhrazena
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇵🇱 Polski
                </Link>
                <Link href="/zh" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇨🇳 中文
                </Link>
                <Link href="/cs" className="text-blue-600 dark:text-blue-400 font-medium transition-colors">
                  🇨🇿 Čeština
                </Link>
                <Link href="/hi" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇮🇳 HI
                </Link>
                <Link href="/sk" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  🇸🇰 SK
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}