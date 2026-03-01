import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { ThemeSwitch } from "./ThemeSwitch";

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ProblemLot.com
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 ml-12">
              <Link
                href="/opozniony-lot"
                className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Opóźniony lot
              </Link>
              <Link
                href="/odwolany-lot"
                className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Odwołany lot
              </Link>
              
              {/* Blog Link - Simple direct link */}
              <Link
                href="/blog"
                className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>

              <Link
                href="/ile-mozesz-dostac"
                className="text-xs font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Ile możesz dostać?
              </Link>

              {/* Language Switcher */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span>🇵🇱 PL</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/" className="block px-4 py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-t-lg font-medium">
                    🇵🇱 Polski
                  </Link>
                  <Link href="/zh" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    🇨🇳 中文
                  </Link>
                  <Link
                    href="/cs"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
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
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇸🇰 Slovenčina
                  </Link>
                </div>
              </div>

              <ThemeSwitch />
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-3 md:hidden">
              <ThemeSwitch />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/opozniony-lot"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Opóźniony lot
                </Link>
                <Link
                  href="/odwolany-lot"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Odwołany lot
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/ile-mozesz-dostac"
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kalkulator
                </Link>

                {/* Mobile Language Selector */}
                <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                  <div className="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                    Wybierz język
                  </div>
                  <Link
                    href="/"
                    className="block px-3 py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-md font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇵🇱 Polski
                  </Link>
                  <Link
                    href="/zh"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇨🇳 中文
                  </Link>
                  <Link
                    href="/cs"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇨🇿 Čeština
                  </Link>
                  <Link
                    href="/hi"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇮🇳 हिन्दी
                  </Link>
                  <Link
                    href="/sk"
                    className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇸🇰 Slovenčina
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-bold mb-4">ProblemLot.com</h3>
              <p className="text-gray-400 text-sm">
                Pomoc pasażerom w dochodzeniu odszkodowań za opóźnione i
                odwołane loty.
              </p>
            </div>

            {/* Column 2 - Informacje */}
            <div>
              <h4 className="font-semibold mb-4">Informacje</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/opozniony-lot" className="hover:text-white transition-colors">
                    Opóźniony lot
                  </Link>
                </li>
                <li>
                  <Link href="/ile-mozesz-dostac" className="hover:text-white transition-colors">
                    Ile możesz dostać?
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Przewoźnicy */}
            <div>
              <h4 className="font-semibold mb-4">Przewoźnicy</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/opozniony-lot-ryanair" className="hover:text-white transition-colors">
                    Ryanair
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-wizzair" className="hover:text-white transition-colors">
                    Wizzair
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-lot" className="hover:text-white transition-colors">
                    LOT Polish Airlines
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-lufthansa" className="hover:text-white transition-colors">
                    Lufthansa
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Lotniska & Blog */}
            <div>
              <h4 className="font-semibold mb-4">Lotniska</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/opozniony-lot-warszawa" className="hover:text-white transition-colors">
                    Warszawa
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-krakow" className="hover:text-white transition-colors">
                    Kraków
                  </Link>
                </li>
              </ul>
              <h4 className="font-semibold mb-4 mt-6">Blog</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <Link href="/blog/odwolany-lot-historia-pasazera" className="hover:text-white transition-colors">
                    Mój lot został odwołany
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
            <p>© 2026 ProblemLot.com - Wszystkie prawa zastrzeżone</p>
            <p className="mt-2">
              Strona informacyjna. Roszczenia obsługuje{" "}
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                ClaimWinger
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}