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
            <Link href="/" className="text-2xl font-bold text-blue-600">
              LotProblem.pl
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/opozniony-lot"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Opóźniony lot
              </Link>
              
              {/* Blog Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setBlogDropdownOpen(true)}
                onMouseLeave={() => setBlogDropdownOpen(false)}
              >
                <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                  Blog
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {blogDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                    <Link
                      href="/blog/odwolany-lot-historia-pasazera"
                      className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      <div className="font-medium">Mój lot został odwołany</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Historia pasażera
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/ile-mozesz-dostac"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Ile możesz dostać?
              </Link>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sprawdź odszkodowanie
              </a>
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
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/opozniony-lot"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Opóźniony lot
                </Link>
                
                {/* Mobile Blog Section */}
                <div className="border-l-2 border-gray-200 pl-4">
                  <div className="text-sm font-medium text-gray-500 mb-2">Blog</div>
                  <Link
                    href="/blog/odwolany-lot-historia-pasazera"
                    className="block text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="font-medium">Mój lot został odwołany</div>
                    <div className="text-sm text-gray-500 mt-1">
                      Historia pasażera
                    </div>
                  </Link>
                </div>

                <Link
                  href="/ile-mozesz-dostac"
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Ile możesz dostać?
                </Link>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sprawdź odszkodowanie
                </a>
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
              <h3 className="text-lg font-bold mb-4">LotProblem.pl</h3>
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

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2026 LotProblem.pl. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}