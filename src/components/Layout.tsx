import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Strona główna" },
    { href: "/opozniony-lot", label: "Opóźniony lot" },
    { href: "/ile-mozesz-dostac", label: "Ile możesz dostać?" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl hover:opacity-80 transition-opacity">
              <Plane className="h-6 w-6 text-primary" />
              <span>LotProblem.pl</span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Sprawdź odszkodowanie
                </a>
              </Button>
            </nav>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="w-full mt-4">
                <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer">
                  Sprawdź odszkodowanie
                </a>
              </Button>
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-secondary/30 border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 font-display font-bold text-lg mb-4">
                <Plane className="h-5 w-5 text-primary" />
                <span>LotProblem.pl</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Pomoc pasażerom w uzyskaniu odszkodowania za problemy z lotami zgodnie z rozporządzeniem UE 261/2004.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Linie lotnicze</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/opozniony-lot-ryanair" className="text-muted-foreground hover:text-primary transition-colors">
                    Opóźniony lot Ryanair
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-wizzair" className="text-muted-foreground hover:text-primary transition-colors">
                    Opóźniony lot Wizzair
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-lot" className="text-muted-foreground hover:text-primary transition-colors">
                    Opóźniony lot LOT
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-lufthansa" className="text-muted-foreground hover:text-primary transition-colors">
                    Opóźniony lot Lufthansa
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Lotniska</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/opozniony-lot-warszawa" className="text-muted-foreground hover:text-primary transition-colors">
                    Opóźniony lot Warszawa
                  </Link>
                </li>
                <li>
                  <Link href="/opozniony-lot-krakow" className="text-muted-foreground hover:text-primary transition-colors">
                    Opóźniony lot Kraków
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Informacje</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/opozniony-lot" className="text-muted-foreground hover:text-primary transition-colors">
                    Opóźniony lot
                  </Link>
                </li>
                <li>
                  <Link href="/ile-mozesz-dostac" className="text-muted-foreground hover:text-primary transition-colors">
                    Ile możesz dostać?
                  </Link>
                </li>
                <li>
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ClaimWinger
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 LotProblem.pl. Wszystkie prawa zastrzeżone.</p>
            <p className="mt-2">Profesjonalna pomoc w uzyskaniu odszkodowania lotniczego do 600 €</p>
          </div>
        </div>
      </footer>
    </div>
  );
}