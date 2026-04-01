import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X, Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";

interface LayoutItProps {
  children: React.ReactNode;
}

export function LayoutIt({ children }: LayoutItProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/it" className="flex items-center space-x-2 group">
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Problemi<span className="text-blue-600">Volo</span>.it
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/it/volo-in-ritardo" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Volo in Ritardo
              </Link>
              <Link 
                href="/it/volo-cancellato" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Volo Cancellato
              </Link>
              <Link 
                href="/it/calcolatore-risarcimento" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Calcolatore
              </Link>
              <Link 
                href="/it/blog" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Guide
              </Link>
              
              <DesktopLanguageDropdown
                currentLocale="it"
                buttonClassName="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                menuClassName="w-48 rounded-lg border border-gray-200 py-2 shadow-lg"
                itemClassName="block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                activeItemClassName="block rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
              />

              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <a 
                  href="https://claimwinger.com/it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Verifica Risarcimento →
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-200">
              <Link 
                href="/it/volo-in-ritardo" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volo in Ritardo
              </Link>
              <Link 
                href="/it/volo-cancellato" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volo Cancellato
              </Link>
              <Link 
                href="/it/calcolatore-risarcimento" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calcolatore
              </Link>
              <Link 
                href="/it/blog" 
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guide
              </Link>

              <MobileLanguageList
                currentLocale="it"
                title="Seleziona lingua"
                onNavigate={() => setMobileMenuOpen(false)}
                wrapperClassName="pt-4 border-t border-gray-200"
                itemClassName="block rounded-md px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                activeItemClassName="block rounded-md bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600"
              />

              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                <a 
                  href="https://claimwinger.com/it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Verifica Risarcimento →
                </a>
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">ProblemiVolo.it</span>
              </div>
              <p className="text-gray-400 text-sm">
                Ti aiutiamo a ottenere il risarcimento che ti spetta per voli in ritardo o cancellati. Fino a 600 € secondo il Regolamento CE 261/2004.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Link Rapidi</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/it" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/it/volo-in-ritardo" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Volo in Ritardo
                  </Link>
                </li>
                <li>
                  <Link href="/it/volo-cancellato" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Volo Cancellato
                  </Link>
                </li>
                <li>
                  <Link href="/it/calcolatore-risarcimento" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Calcolatore
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Risorse</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/it/blog" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Guide e Articoli
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://claimwinger.com/it" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    ClaimWinger Italia
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold mb-4">Contatti</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <a 
                    href="mailto:info@claimwinger.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    info@claimwinger.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <span className="text-gray-400">+39 02 1234 5678</span>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} ProblemiVolo.it. Tutti i diritti riservati.</p>
            <p className="mt-2">
              Questo sito è gestito da ClaimWinger, specialisti in risarcimenti per ritardi e cancellazioni di voli.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
