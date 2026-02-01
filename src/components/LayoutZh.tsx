import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Plane } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";

interface LayoutZhProps {
  children: ReactNode;
}

export function LayoutZh({ children }: LayoutZhProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/zh" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ProblemLot.com
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/zh/delayed-flight"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                航班延误
              </Link>
              <Link
                href="/zh/cancelled-flight"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                航班取消
              </Link>
              <div className="relative group">
                <button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                  博客
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  <Link
                    href="/zh/blog/eu261-uk261-passenger-rights"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    EU261/UK261 赔偿指南
                  </Link>
                  <Link
                    href="/zh/blog/beijing-capital-delayed-flight-compensation"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    北京首都机场延误
                  </Link>
                  <Link
                    href="/zh/blog/beijing-capital-cancelled-flight-compensation"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    北京首都机场取消
                  </Link>
                  <Link
                    href="/zh/blog/chinese-citizens-eu261-compensation-guide"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    中国公民完整指南
                  </Link>
                  <Link
                    href="/zh/blog/lufthansa-delay-cancellation-compensation"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    汉莎航空赔偿指南
                  </Link>
                  <Link
                    href="/zh/blog/lot-polish-airlines-compensation-guide"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    LOT 波兰航空赔偿
                  </Link>
                  <Link
                    href="/zh/blog/air-france-compensation-guide"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    法国航空赔偿指南
                  </Link>
                  <Link
                    href="/zh/blog/british-airways-compensation-guide"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    英国航空赔偿指南
                  </Link>
                </div>
              </div>
              <Link
                href="/zh/compensation-calculator"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                赔偿计算器
              </Link>

              {/* Language Switcher */}
              <Link
                href="/"
                className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                <span>PL</span>
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="切换主题"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* CTA Button */}
              <a
                href="https://claimwinger.com/delayed-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                检查赔偿
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-700 dark:text-gray-300"
                aria-label="切换主题"
              >
                {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300"
                aria-label="菜单"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-4">
              <Link
                href="/zh/delayed-flight"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                航班延误
              </Link>
              <Link
                href="/zh/cancelled-flight"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                航班取消
              </Link>
              <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4 space-y-2">
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">博客</div>
                <Link
                  href="/zh/blog/eu261-uk261-passenger-rights"
                  className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  EU261/UK261 赔偿指南
                </Link>
                <Link
                  href="/zh/blog/beijing-capital-delayed-flight-compensation"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  北京首都机场延误
                </Link>
                <Link
                  href="/zh/blog/chinese-citizens-eu261-compensation-guide"
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  中国公民完整指南
                </Link>
                <Link
                  href="/zh/blog/lufthansa-delay-cancellation-compensation"
                  className="block px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  汉莎航空赔偿指南
                </Link>
                <Link
                  href="/zh/blog/lot-polish-airlines-compensation-guide"
                  className="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LOT 波兰航空赔偿
                </Link>
                <Link
                  href="/zh/blog/air-france-compensation-guide"
                  className="block px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-l-4 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  法国航空赔偿指南
                </Link>
                <Link
                  href="/zh/blog/british-airways-compensation-guide"
                  className="block px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-l-4 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  英国航空赔偿指南
                </Link>
              </div>
              <Link
                href="/zh/compensation-calculator"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                赔偿计算器
              </Link>

              {/* Language Switcher Mobile */}
              <Link
                href="/"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                🌐 Polski
              </Link>

              <a
                href="https://claimwinger.com/delayed-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                检查赔偿
              </a>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">ProblemLot.com</span>
              </div>
              <p className="text-sm text-gray-400">
                帮助乘客获得航班延误和取消的赔偿。
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">快速链接</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/zh/delayed-flight" className="text-sm hover:text-blue-400 transition-colors">
                    航班延误
                  </Link>
                </li>
                <li>
                  <Link href="/zh/cancelled-flight" className="text-sm hover:text-blue-400 transition-colors">
                    航班取消
                  </Link>
                </li>
                <li>
                  <Link href="/zh/compensation-calculator" className="text-sm hover:text-blue-400 transition-colors">
                    赔偿计算器
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">资源</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/zh/blog/eu261-uk261-passenger-rights" className="text-sm hover:text-blue-400 transition-colors">
                    博客
                  </Link>
                </li>
                <li>
                  <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">
                    提交索赔
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">法律信息</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                    隐私政策
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-blue-400 transition-colors">
                    使用条款
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} ProblemLot.com. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}