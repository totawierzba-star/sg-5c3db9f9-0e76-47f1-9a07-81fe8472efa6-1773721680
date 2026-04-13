import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X, Plane } from "lucide-react";

import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

interface LayoutElProps {
  children: ReactNode;
}

const claimLinks = {
  home: "https://claimwinger.com/el?utm_source=problemlot-el&utm_medium=nav_button&utm_campaign=locale_launch",
  delayed:
    "https://claimwinger.com/el/kathysterimeni-ptisi?utm_source=problemlot-el&utm_medium=footer_link&utm_campaign=delayed_flight",
  cancelled:
    "https://claimwinger.com/el/akyromeni-ptisi?utm_source=problemlot-el&utm_medium=footer_link&utm_campaign=cancelled_flight",
};

export function LayoutEl({ children }: LayoutElProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white transition-colors dark:bg-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-700 dark:bg-gray-900/95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/el" className="group flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 transition-colors group-hover:bg-sky-700">
                <Plane className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-white">ProblemLot.com</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Ελλάδα</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/el/kathysterimeni-ptisi"
                className="font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                Καθυστερημένη πτήση
              </Link>
              <Link
                href="/el/akyromeni-ptisi"
                className="font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                Ακυρωμένη πτήση
              </Link>
              <Link
                href="/el/ypologismos-apozimiosis"
                className="font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                Υπολογισμός
              </Link>
              <Link
                href="/el/blog"
                className="font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
              >
                Οδηγοί
              </Link>

              <DesktopLanguageDropdown
                currentLocale="el"
                buttonClassName="font-medium text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
              />

              <ThemeSwitch />

              <a
                href={claimLinks.home}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  pushClaimWingerEvent("claimwinger_cta_click", {
                    locale: "el",
                    placement: "layout_desktop_nav",
                    destination: claimLinks.home,
                  })
                }
                className="rounded-xl bg-sky-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-sky-700"
              >
                Έλεγχος αποζημίωσης
              </a>
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeSwitch />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 dark:text-slate-300"
                aria-label="Μενού"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="space-y-4 border-t border-gray-200 py-4 dark:border-gray-700 md:hidden">
              <Link
                href="/el/kathysterimeni-ptisi"
                className="block py-2 font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Καθυστερημένη πτήση
              </Link>
              <Link
                href="/el/akyromeni-ptisi"
                className="block py-2 font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Ακυρωμένη πτήση
              </Link>
              <Link
                href="/el/ypologismos-apozimiosis"
                className="block py-2 font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Υπολογισμός
              </Link>
              <Link
                href="/el/blog"
                className="block py-2 font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                Οδηγοί
              </Link>

              <MobileLanguageList
                currentLocale="el"
                title="Γλώσσα"
                onNavigate={() => setMobileMenuOpen(false)}
                itemClassName="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-gray-700"
                activeItemClassName="block rounded-md bg-sky-50 px-3 py-2 text-sm font-medium text-sky-600 dark:bg-sky-900/20 dark:text-sky-400"
              />

              <a
                href={claimLinks.home}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  pushClaimWingerEvent("claimwinger_cta_click", {
                    locale: "el",
                    placement: "layout_mobile_nav",
                    destination: claimLinks.home,
                  });
                  setMobileMenuOpen(false);
                }}
                className="block rounded-xl bg-sky-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-sky-700"
              >
                Έλεγχος αποζημίωσης
              </a>
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="bg-slate-950 py-12 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4">
                <ClaimWingerLogo compact textClassName="text-white" />
              </div>
              <p className="text-sm text-slate-400">
                Οδηγοί και πρακτικές πληροφορίες για αποζημιώσεις λόγω καθυστέρησης και ακύρωσης
                πτήσεων με βάση το EU261.
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Γρήγοροι σύνδεσμοι</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/el/kathysterimeni-ptisi" className="transition-colors hover:text-sky-400">
                    Καθυστερημένη πτήση
                  </Link>
                </li>
                <li>
                  <Link href="/el/akyromeni-ptisi" className="transition-colors hover:text-sky-400">
                    Ακυρωμένη πτήση
                  </Link>
                </li>
                <li>
                  <Link href="/el/ypologismos-apozimiosis" className="transition-colors hover:text-sky-400">
                    Υπολογισμός αποζημίωσης
                  </Link>
                </li>
                <li>
                  <Link href="/el/blog" className="transition-colors hover:text-sky-400">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">ClaimWinger</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href={claimLinks.home} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-400">
                    Αρχική σελίδα ClaimWinger
                  </a>
                </li>
                <li>
                  <a href={claimLinks.delayed} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-400">
                    Φόρμα για καθυστερημένη πτήση
                  </a>
                </li>
                <li>
                  <a href={claimLinks.cancelled} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sky-400">
                    Φόρμα για ακυρωμένη πτήση
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-semibold text-white">Σημαντικό</h3>
              <p className="text-sm text-slate-400">
                Το περιεχόμενο είναι ενημερωτικό και βασίζεται στους κανόνες του EU261/2004.
                Η τελική αξιολόγηση εξαρτάται πάντα από τη διαδρομή, τον αερομεταφορέα και τα
                πραγματικά γεγονότα της υπόθεσης.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} ProblemLot.com • Ελληνική έκδοση</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
