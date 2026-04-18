import { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Plane, X } from "lucide-react";

import { ClaimWingerLogo } from "@/components/ClaimWingerLogo";
import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import {
  buildClaimWingerViLink,
  trackClaimWingerViClick,
} from "@/lib/claimwingerLinksVi";

interface LayoutViProps {
  children: ReactNode;
}

const claimLinks = {
  home: buildClaimWingerViLink("home", {
    medium: "nav_button",
    campaign: "locale_launch",
  }),
  delayed: buildClaimWingerViLink("delayed", {
    medium: "footer_link",
    campaign: "delayed_flight",
  }),
  cancelled: buildClaimWingerViLink("cancelled", {
    medium: "footer_link",
    campaign: "cancelled_flight",
  }),
};

export function LayoutVi({ children }: LayoutViProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const previousLang = html.lang;
    const previousDir = html.dir;

    html.lang = "vi";
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
              <Link href="/vi" className="group flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 transition-colors group-hover:bg-emerald-700">
                  <Plane className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">ProblemLot.com</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Phiên bản tiếng Việt</div>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 md:flex">
                <Link
                  href="/vi/chuyen-bay-bi-hoan"
                  className="font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                >
                  Chuyến bay bị hoãn
                </Link>
                <Link
                  href="/vi/chuyen-bay-bi-huy"
                  className="font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                >
                  Chuyến bay bị hủy
                </Link>
                <Link
                  href="/vi/kiem-tra-boi-thuong"
                  className="font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                >
                  Kiểm tra bồi thường
                </Link>
                <Link
                  href="/vi/blog"
                  className="font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                >
                  Blog
                </Link>

                <DesktopLanguageDropdown
                  currentLocale="vi"
                  buttonClassName="font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400"
                />

                <ThemeSwitch />

                <a
                  href={claimLinks.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackClaimWingerViClick("layout_desktop_nav", claimLinks.home)}
                  className="rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Kiểm tra hồ sơ
                </a>
              </nav>

              <div className="flex items-center gap-2 md:hidden">
                <ThemeSwitch />
                <button
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  className="p-2 text-slate-700 dark:text-slate-300"
                  aria-label="Mở menu"
                >
                  {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {mobileMenuOpen && (
              <div className="space-y-4 border-t border-slate-200 py-4 dark:border-slate-800 md:hidden">
                <Link
                  href="/vi/chuyen-bay-bi-hoan"
                  className="block py-2 font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Chuyến bay bị hoãn
                </Link>
                <Link
                  href="/vi/chuyen-bay-bi-huy"
                  className="block py-2 font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Chuyến bay bị hủy
                </Link>
                <Link
                  href="/vi/kiem-tra-boi-thuong"
                  className="block py-2 font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Kiểm tra bồi thường
                </Link>
                <Link
                  href="/vi/blog"
                  className="block py-2 font-medium text-slate-700 transition-colors hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>

                <MobileLanguageList
                  currentLocale="vi"
                  title="Ngôn ngữ"
                  onNavigate={() => setMobileMenuOpen(false)}
                  itemClassName="block rounded-md px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-gray-800"
                  activeItemClassName="block rounded-md bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-300"
                />

                <a
                  href={claimLinks.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    trackClaimWingerViClick("layout_mobile_nav", claimLinks.home);
                    setMobileMenuOpen(false);
                  }}
                  className="block rounded-xl bg-emerald-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-emerald-700"
                >
                  Mở form ClaimWinger
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
                  Hướng dẫn bằng tiếng Việt cho hành khách có chuyến bay bị hoãn, bị hủy hoặc bị đổi lịch trong các hành trình liên quan tới châu Âu.
                </p>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">Trang chính</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/vi/chuyen-bay-bi-hoan" className="transition-colors hover:text-emerald-400">
                      Chuyến bay bị hoãn
                    </Link>
                  </li>
                  <li>
                    <Link href="/vi/chuyen-bay-bi-huy" className="transition-colors hover:text-emerald-400">
                      Chuyến bay bị hủy
                    </Link>
                  </li>
                  <li>
                    <Link href="/vi/kiem-tra-boi-thuong" className="transition-colors hover:text-emerald-400">
                      Kiểm tra bồi thường
                    </Link>
                  </li>
                  <li>
                    <Link href="/vi/blog" className="transition-colors hover:text-emerald-400">
                      Blog tiếng Việt
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">ClaimWinger</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href={claimLinks.home} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-400">
                      Trang tiếng Việt
                    </a>
                  </li>
                  <li>
                    <a href={claimLinks.delayed} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-400">
                      Form cho chuyến bay bị hoãn
                    </a>
                  </li>
                  <li>
                    <a href={claimLinks.cancelled} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-emerald-400">
                      Form cho chuyến bay bị hủy
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-white">Lưu ý</h3>
                <p className="text-sm text-slate-400">
                  Nội dung có tính hướng dẫn, giúp hiểu nhanh logic EU261. Việc đánh giá cuối cùng luôn phụ thuộc vào tuyến bay, hãng khai thác thực tế và hồ sơ chứng cứ.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
              <p>&copy; {new Date().getFullYear()} ProblemLot.com • Phiên bản tiếng Việt</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
