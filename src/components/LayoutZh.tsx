import { ReactNode, useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Plane, ChevronDown } from "lucide-react";
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
                <button className="px-3 py-2 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
                  博客
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-1">
                    <Link
                      href="/zh/blog"
                      className="block px-4 py-3 text-sm text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold border-b border-gray-200 dark:border-gray-700"
                    >
                      📚 查看所有指南
                    </Link>
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
                    <Link
                      href="/zh/blog/klm-compensation-guide"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      荷兰皇家航空赔偿
                    </Link>
                    <Link
                      href="/zh/blog/finnair-compensation-guide"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      芬兰航空赔偿指南
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/zh/compensation-calculator"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                赔偿计算器
              </Link>
              
              <a
                href="https://wa.me/212709526999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors flex items-center gap-1"
              >
                <span>📱</span>
                联系我们
              </a>

              {/* Language Switcher */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                  🇵🇱 Polski
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link href="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg">
                    🇵🇱 Polski
                  </Link>
                  <Link href="/zh" className="block px-4 py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 font-medium">
                    🇨🇳 中文
                  </Link>
                  <Link href="/cs" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
                    🇨🇿 Čeština
                  </Link>
                  <Link
                    href="/hi"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇮🇳 हिन्दी
                  </Link>
                  <Link
                    href="/sk"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇸🇰 Slovenčina
                  </Link>
                  <Link
                    href="/it"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇮🇹 Italiano
                  </Link>
                  <Link
                    href="/sv"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇸🇪 Svenska
                  </Link>
                  <Link
                    href="/no"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇲🇴 Norsk
                  </Link>
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg"
                  >
                    🇬🇧 English
                  </Link>
                </div>
              </div>

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
                  href="/zh/blog"
                  className="block py-3 px-3 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md mb-2 border border-blue-200 dark:border-blue-800"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  📚 浏览完整博客
                </Link>
                <Link
                  href="/zh/blog/eu261-uk261-passenger-rights"
                  className="block py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-3"
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
                <Link
                  href="/zh/blog/klm-compensation-guide"
                  className="block px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-l-4 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  荷兰皇家航空赔偿
                </Link>
                <Link
                  href="/zh/blog/finnair-compensation-guide"
                  className="block px-4 py-2 text-base text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-l-4 border-transparent hover:border-blue-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  芬兰航空赔偿指南
                </Link>
              </div>
              <Link
                href="/zh/compensation-calculator"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                赔偿计算器
              </Link>

              <a
                href="https://wa.me/212709526999"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 font-medium py-2 flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>📱</span>
                联系我们 (WhatsApp)
              </a>

              {/* Language Switcher Mobile */}
              <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">语言</div>
                <div className="flex flex-col space-y-2">
                  <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    🇵🇱 Polski
                  </Link>
                  <div className="text-blue-600 dark:text-blue-400 font-medium">
                    🇨🇳 中文
                  </div>
                  <Link href="/cs" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    🇨🇿 Čeština
                  </Link>
                  <Link
                    href="/hi"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇮🇳 हिन्दी
                  </Link>
                  <Link
                    href="/sk"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇸🇰 Slovenčina
                  </Link>
                  <Link
                    href="/it"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇮🇹 Italiano
                  </Link>
                  <Link
                    href="/sv"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇸🇪 Svenska
                  </Link>
                  <Link
                    href="/no"
                    className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    🇲🇴 Norsk
                  </Link>
                </div>
              </div>

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

            {/* Contact - WhatsApp */}
            <div>
              <h3 className="text-white font-semibold mb-4">联系我们</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://wa.me/212709526999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <span>📱</span>
                    <span>WhatsApp 中文客服</span>
                  </a>
                </li>
                <li className="text-sm text-gray-400">
                  +212 709 526 999
                </li>
                <li className="text-xs text-gray-500">
                  为中国旅客提供支持
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