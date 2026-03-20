import Link from "next/link";
import { ReactNode } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { Button } from "@/components/ui/button";
import { Plane, Scale, Clock, AlertCircle, Globe } from "lucide-react";

interface LayoutEnProps {
  children: ReactNode;
}

export function LayoutEn({ children }: LayoutEnProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/en" className="flex items-center gap-2">
              <Plane className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                FlightProblem
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/en/delayed-flight"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Delayed Flight
              </Link>
              <Link
                href="/en/cancelled-flight"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Cancelled Flight
              </Link>
              <Link
                href="/en/compensation-calculator"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Calculator
              </Link>
              <Link
                href="/en/blog"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>

              {/* Language Selector */}
              <div className="relative group z-50">
                <button className="flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <Globe className="h-5 w-5" />
                  <span className="hidden lg:inline">EN</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 dark:border-gray-700">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇵🇱 Polski
                  </Link>
                  <Link
                    href="/cs"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇨🇿 Čeština
                  </Link>
                  <Link
                    href="/sk"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇸🇰 Slovenčina
                  </Link>
                  <Link
                    href="/it"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇮🇹 Italiano
                  </Link>
                  <Link
                    href="/zh"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇨🇳 中文
                  </Link>
                  <Link
                    href="/hi"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇮🇳 हिन्दी
                  </Link>
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/20"
                  >
                    🇬🇧 English
                  </Link>
                  <Link href="/it" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                    <span className="mr-2">🇮🇹</span> Italiano
                  </Link>
                  <Link href="/sv" className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" role="menuitem">
                    <span className="mr-2">🇸🇪</span> Svenska
                  </Link>
                  <Link href="/no" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">🇳🇴 Norsk</Link>
                </div>
              </div>

              <ThemeSwitch />
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeSwitch />
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden mt-4 flex flex-col gap-2">
            <Link
              href="/en/delayed-flight"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2"
            >
              Delayed Flight
            </Link>
            <Link
              href="/en/cancelled-flight"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2"
            >
              Cancelled Flight
            </Link>
            <Link
              href="/en/compensation-calculator"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2"
            >
              Calculator
            </Link>
            <Link
              href="/en/blog"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2"
            >
              Blog
            </Link>
            <div className="flex gap-4">
              <Link href="/" className="text-xl">🇵🇱</Link>
              <Link href="/cs" className="text-xl">🇨🇿</Link>
              <Link href="/sk" className="text-xl">🇸🇰</Link>
              <Link href="/zh" className="text-xl">🇨🇳</Link>
              <Link href="/hi" className="text-xl">🇮🇳</Link>
              <Link href="/it" className="text-xl">🇮🇹</Link>
              <Link href="/sv" className="text-xl">🇸🇪</Link>
              <Link href="/no" className="text-xl">🇳🇴</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                FlightProblem.com
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get up to €600 compensation for delayed or cancelled flights. Free legal support and expert guidance.
              </p>
            </div>

            {/* Flight Issues */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
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

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/en/blog"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    Blog & Guides
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

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
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

          <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
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
