import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { ClaimWingerAppBanner } from "@/components/ClaimWingerAppBanner";
import { GooglePlayButton } from "@/components/GooglePlayButton";
import { Menu, Plane, X } from "lucide-react";

import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import {
  buildClaimWingerDeLink,
  trackClaimWingerDeClick,
} from "@/lib/claimwingerLinksDe";

interface LayoutDeProps {
  children: ReactNode;
}

const claimLinks = {
  home: buildClaimWingerDeLink("home", {
    medium: "nav_button",
    campaign: "de_locale_launch",
  }),
  delayed: buildClaimWingerDeLink("delayed", {
    medium: "footer_link",
    campaign: "de_delayed_flight",
  }),
  cancelled: buildClaimWingerDeLink("cancelled", {
    medium: "footer_link",
    campaign: "de_cancelled_flight",
  }),
};

const navLinks = [
  { href: "/de/verspaeteter-flug", label: "Verspäteter Flug" },
  { href: "/de/annullierter-flug", label: "Annullierter Flug" },
  { href: "/de/rechner", label: "Rechner" },
  { href: "/de/blog", label: "Blog" },
];

export function LayoutDe({ children }: LayoutDeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const previousLang = html.lang;
    const previousDir = html.dir;

    html.lang = "de";
    html.dir = "ltr";

    return () => {
      html.lang = previousLang;
      html.dir = previousDir;
    };
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white transition-colors dark:bg-gray-950">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-gray-950/95">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link href="/de" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 transition-colors group-hover:bg-red-800">
                  <Plane className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">ProblemLot.com</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Deutsche Version</div>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 md:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-medium text-slate-700 transition-colors hover:text-red-700 dark:text-slate-300 dark:hover:text-red-400"
                  >
                    {link.label}
                  </Link>
                ))}

                <DesktopLanguageDropdown
                  currentLocale="de"
                  buttonClassName="font-medium text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400"
                />

                <ThemeSwitch />

                <a
                  href={claimLinks.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerDeClick("layout_desktop_nav", claimLinks.home)}
                  className="rounded-xl bg-red-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
                >
                  Flug prüfen
                </a>
              </nav>

              <div className="flex items-center gap-2 md:hidden">
                <ThemeSwitch />
                <button
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  className="p-2 text-slate-700 dark:text-slate-300"
                  aria-label="Menü öffnen"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="space-y-4 border-t border-slate-200 py-4 dark:border-slate-800 md:hidden">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 font-medium text-slate-700 transition-colors hover:text-red-700 dark:text-slate-300 dark:hover:text-red-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                <div className="mt-2 border-t border-gray-200 pt-3 dark:border-gray-700">
                  <GooglePlayButton
                    locale="de"
                    placement="mobile_menu"
                    campaign="android_app_menu"
                    className="w-full justify-center"
                  />
                </div>
                <MobileLanguageList
                  currentLocale="de"
                  title="Sprache"
                  onNavigate={() => setMobileMenuOpen(false)}
                  itemClassName="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-gray-800"
                  activeItemClassName="block rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700 dark:bg-red-950/30 dark:text-red-300"
                />

                <a
                  href={claimLinks.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackClaimWingerDeClick("layout_mobile_nav", claimLinks.home);
                    setMobileMenuOpen(false);
                  }}
                  className="block rounded-xl bg-red-700 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-red-800"
                >
                  ClaimWinger öffnen
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
                <p className="text-sm leading-6 text-slate-400">
                  Praktische deutschsprachige Erklärungen zur Entschädigung bei einem
                  verspäteten, annullierten oder überbuchten Flug gemäß der
                  EU-Verordnung 261/2004 und UK261.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">Wichtige Seiten</h3>
                <ul className="space-y-2 text-sm">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="transition-colors hover:text-red-400">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">ClaimWinger</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href={claimLinks.home} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-400">
                      Formular auf Deutsch
                    </a>
                  </li>
                  <li>
                    <a href={claimLinks.delayed} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-400">
                      Verspäteter Flug
                    </a>
                  </li>
                  <li>
                    <a href={claimLinks.cancelled} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-400">
                      Annullierter Flug
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">Wichtiger Hinweis</h3>
                <p className="text-sm leading-6 text-slate-400">
                  Die Inhalte dienen der Information. Ihr tatsächlicher Anspruch auf
                  Entschädigung hängt von der Flugstrecke, der Fluggesellschaft, der
                  Ursache der Störung und Ihren Reiseunterlagen ab.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} ProblemLot.com - Deutsche Version</p>
            </div>
          </div>
        </footer>

        <ClaimWingerAppBanner locale="de" />
      </div>
    </ThemeProvider>
  );
}
