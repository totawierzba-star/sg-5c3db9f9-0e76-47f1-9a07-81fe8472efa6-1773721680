import Link from "next/link";
import { ReactNode } from "react";
import { Plane } from "lucide-react";

import { ThemeSwitch } from "./ThemeSwitch";
import { DesktopLanguageDropdown, MobileLanguageList } from "@/components/LanguageMenu";

interface LayoutEnProps {
  children: ReactNode;
}

export function LayoutEn({ children }: LayoutEnProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/en" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                FlightProblem
              </span>
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
              <Link
                href="/en/delayed-flight"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Delayed Flight
              </Link>
              <Link
                href="/en/cancelled-flight"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Cancelled Flight
              </Link>
              <Link
                href="/en/compensation-calculator"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Calculator
              </Link>
              <Link
                href="/en/blog"
                className="text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
              >
                Blog
              </Link>

              <DesktopLanguageDropdown
                currentLocale="en"
                buttonClassName="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                menuClassName="w-48 rounded-md border border-gray-100 py-1 shadow-lg dark:border-gray-700"
              />

              <ThemeSwitch />
            </nav>

            <div className="flex items-center gap-2 md:hidden">
              <ThemeSwitch />
            </div>
          </div>

          <nav className="mt-4 flex flex-col gap-2 md:hidden">
            <Link
              href="/en/delayed-flight"
              className="py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Delayed Flight
            </Link>
            <Link
              href="/en/cancelled-flight"
              className="py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Cancelled Flight
            </Link>
            <Link
              href="/en/compensation-calculator"
              className="py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Calculator
            </Link>
            <Link
              href="/en/blog"
              className="py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            >
              Blog
            </Link>
            <MobileLanguageList
              currentLocale="en"
              title="Language"
              wrapperClassName="mt-2 border-t border-gray-200 pt-3 dark:border-gray-700"
              itemClassName="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400"
              activeItemClassName="block rounded-md bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
            />
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="mt-20 border-t border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
                FlightProblem.com
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get up to EUR600 compensation for delayed or cancelled flights. Free legal support and expert guidance.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Flight Issues
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/en/delayed-flight"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Delayed Flight
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/cancelled-flight"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Cancelled Flight
                  </Link>
                </li>
                <li>
                  <Link
                    href="/en/compensation-calculator"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Compensation Calculator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/en/blog"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Blog and Guides
                  </Link>
                </li>
                <li>
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    File a Claim
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Legal
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-gray-600 dark:text-gray-400">
                    EU Regulation 261/2004
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 dark:text-gray-400">
                    Passenger Rights
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} FlightProblem.com - Flight delay and cancellation compensation claims
            </p>
            <p className="mt-2">
              Powered by{" "}
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
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
