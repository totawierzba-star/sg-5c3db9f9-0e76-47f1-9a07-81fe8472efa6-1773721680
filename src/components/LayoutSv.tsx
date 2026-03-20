import React from "react";
import Link from "next/link";
import { Plane, Menu, X, Globe, ChevronDown, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ThemeSwitch } from "./ThemeSwitch";

interface LayoutProps {
  children: React.ReactNode;
}

export function LayoutSv({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/sv" className="flex items-center space-x-2 z-50">
            <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-200">
              Problemlot.com
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/sv/forsenat-flyg" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Försenat flyg
            </Link>
            <Link href="/sv/installat-flyg" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Inställt flyg
            </Link>
            <Link href="/sv/ersattning-kalkulator" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Kalkylator
            </Link>
            <Link href="/sv/blog" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blogg
            </Link>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Globe className="h-5 w-5" />
                <span className="hidden sm:inline">SV</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link href="/" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                      <span className="mr-2">🇵🇱</span> Polski
                    </Link>
                    <Link href="/en" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                      <span className="mr-2">🇬🇧</span> English
                    </Link>
                    <Link href="/cs" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                      <span className="mr-2">🇨🇿</span> Čeština
                    </Link>
                    <Link href="/sk" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                      <span className="mr-2">🇸🇰</span> Slovenčina
                    </Link>
                    <Link href="/zh" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                      <span className="mr-2">🇨🇳</span> 中文
                    </Link>
                    <Link href="/hi" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                      <span className="mr-2">🇮🇳</span> हिन्दी
                    </Link>
                    <Link href="/it" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                      <span className="mr-2">🇮🇹</span> Italiano
                    </Link>
                    <Link href="/sv" className="flex items-center w-full px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400" role="menuitem">
                      <span className="mr-2">🇸🇪</span> Svenska
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <ThemeSwitch />
              
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              <a href="https://claimwinger.com/sv?utm_source=problemlot-sv&utm_medium=nav_button" target="_blank" rel="nofollow noreferrer noopener">
                Kolla Ersättning
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="h-6 w-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-2xl pb-8 px-4 pt-6 animate-in slide-in-from-top-2 duration-200 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/sv/forsenat-flyg" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Försenat flyg
              </Link>
              <Link 
                href="/sv/installat-flyg" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Inställt flyg
              </Link>
              <Link 
                href="/sv/ersattning-kalkulator" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Kalkylator
              </Link>
              <Link 
                href="/sv/blog" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                Blogg
              </Link>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="block text-sm text-gray-500 mb-3">Språk / Language</span>
                <div className="flex flex-wrap gap-4">
                  <Link href="/" className="text-2xl hover:scale-110 transition-transform">🇵🇱</Link>
                  <Link href="/en" className="text-2xl hover:scale-110 transition-transform">🇬🇧</Link>
                  <Link href="/cs" className="text-2xl hover:scale-110 transition-transform">🇨🇿</Link>
                  <Link href="/sk" className="text-2xl hover:scale-110 transition-transform">🇸🇰</Link>
                  <Link href="/zh" className="text-2xl hover:scale-110 transition-transform">🇨🇳</Link>
                  <Link href="/hi" className="text-2xl hover:scale-110 transition-transform">🇮🇳</Link>
                  <Link href="/it" className="text-2xl hover:scale-110 transition-transform">🇮🇹</Link>
                  <Link href="/sv" className="text-2xl opacity-50 cursor-default">🇸🇪</Link>
                  <Link href="/no" className="text-2xl">🇳🇴</Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/sv" className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">Problemlot.com</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Vi hjälper passagerare att få ersättning för försenade och inställda flyg. Upp till 600 € per passagerare enligt EU-lagstiftning.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Hjälpmedel</h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/sv/ersattning-kalkulator" className="hover:text-blue-600 dark:hover:text-blue-400">
                    Ersättningskalkylator
                  </Link>
                </li>
                <li>
                  <a href="https://claimwinger.com/sv" target="_blank" rel="nofollow noreferrer noopener" className="hover:text-blue-600 dark:hover:text-blue-400">
                    ClaimWinger
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Information</h3>
              <ul className="space-y-2">
                <li><Link href="/sv/blog" className="hover:text-blue-400 transition-colors">Blogg & Guider</Link></li>
                <li><a href="https://claimwinger.com/sv" target="_blank" rel="nofollow noreferrer noopener" className="hover:text-blue-400 transition-colors">Om oss (ClaimWinger)</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2025 Problemlot.com. Alla rättigheter förbehållna.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span>Integritetspolicy</span>
              <span>Användarvillkor</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
