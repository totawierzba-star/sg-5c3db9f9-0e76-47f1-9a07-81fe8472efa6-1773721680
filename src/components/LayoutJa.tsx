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
  buildClaimWingerJaLink,
  trackClaimWingerJaClick,
} from "@/lib/claimwingerLinksJa";

interface LayoutJaProps {
  children: ReactNode;
}

const claimLinks = {
  home: buildClaimWingerJaLink("home", {
    medium: "nav_button",
    campaign: "ja_locale_launch",
  }),
  delayed: buildClaimWingerJaLink("delayed", {
    medium: "footer_link",
    campaign: "ja_delayed_flight",
  }),
  cancelled: buildClaimWingerJaLink("cancelled", {
    medium: "footer_link",
    campaign: "ja_cancelled_flight",
  }),
};

const navLinks = [
  { href: "/ja/chien-furaito", label: "フライト遅延" },
  { href: "/ja/kekko-furaito", label: "欠航" },
  { href: "/ja/keisanki", label: "補償計算機" },
  { href: "/ja/blog", label: "ブログ" },
];

export function LayoutJa({ children }: LayoutJaProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const previousLang = html.lang;
    const previousDir = html.dir;

    html.lang = "ja";
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
              <Link href="/ja" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-700 transition-colors group-hover:bg-red-800">
                  <Plane className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">ProblemLot.com</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">日本語版</div>
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
                  currentLocale="ja"
                  buttonClassName="font-medium text-slate-700 dark:text-slate-300 hover:text-red-700 dark:hover:text-red-400"
                />

                <ThemeSwitch />

                <a
                  href={claimLinks.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerJaClick("layout_desktop_nav", claimLinks.home)}
                  className="rounded-xl bg-red-700 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-800"
                >
                  フライトを確認
                </a>
              </nav>

              <div className="flex items-center gap-2 md:hidden">
                <ThemeSwitch />
                <button
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  className="p-2 text-slate-700 dark:text-slate-300"
                  aria-label="メニューを開く"
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
                    locale="ja"
                    placement="mobile_menu"
                    campaign="android_app_menu"
                    className="w-full justify-center"
                  />
                </div>
                <MobileLanguageList
                  currentLocale="ja"
                  title="言語"
                  onNavigate={() => setMobileMenuOpen(false)}
                  itemClassName="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-gray-800"
                  activeItemClassName="block rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700 dark:bg-red-950/30 dark:text-red-300"
                />

                <a
                  href={claimLinks.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackClaimWingerJaClick("layout_mobile_nav", claimLinks.home);
                    setMobileMenuOpen(false);
                  }}
                  className="block rounded-xl bg-red-700 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-red-800"
                >
                  ClaimWingerを開く
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
                  EU規則261/2004およびUK261に基づき、フライトの遅延、欠航、
                  搭乗拒否の際の補償金について日本語で分かりやすく解説します。
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">主要ページ</h3>
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
                      日本語フォーム
                    </a>
                  </li>
                  <li>
                    <a href={claimLinks.delayed} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-400">
                      フライト遅延
                    </a>
                  </li>
                  <li>
                    <a href={claimLinks.cancelled} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-red-400">
                      欠航
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">ご注意</h3>
                <p className="text-sm leading-6 text-slate-400">
                  本サイトの内容は情報提供を目的としています。実際の補償金の受給資格は、
                  路線、航空会社、障害の原因、および搭乗者の書類によって異なります。
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} ProblemLot.com - 日本語版</p>
            </div>
          </div>
        </footer>

        <ClaimWingerAppBanner locale="ja" />
      </div>
    </ThemeProvider>
  );
}
