import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import Link from "next/link";
import { useState } from "react";
import { blogArticles, getCategoryLabel, getTotalWordCount, type BlogArticle } from "./blogArticles";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<BlogArticle["category"] | "all">("all");
  
  const filteredArticles = selectedCategory === "all" 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

  const airlineCount = blogArticles.filter(a => a.category === "airline").length;
  const airportCount = blogArticles.filter(a => a.category === "airport").length;
  const foundationCount = blogArticles.filter(a => a.category === "foundation").length;
  const totalWords = getTotalWordCount();

  return (
    <LayoutZh>
      <SEO
        title="EU261 航班赔偿博客 | 10篇完整指南 | 中国乘客权利"
        description="欧盟航班延误或取消？浏览我们的10篇深度指南，涵盖汉莎、英航、法航、荷航、芬航等6大航空公司 + 北京机场 + 中国乘客完整权利说明。获得€250-€600赔偿。"
        url="https://lotproblem.pl/zh/blog"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <article className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/zh" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              首页
            </Link>
            <span>›</span>
            <span className="text-gray-900 dark:text-gray-100 font-medium">博客</span>
          </nav>

          {/* Hero Section */}
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              🛫 EU261 航班赔偿完整指南库
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
              10篇深度文章 | {totalWords.toLocaleString()}+ 字 | 涵盖6大欧洲航空公司
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>中国乘客专属内容</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>真实案例分析</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>索赔策略详解</span>
              </div>
            </div>
          </header>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {blogArticles.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">深度文章</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {(totalWords / 1000).toFixed(0)}K+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">总字数</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {airlineCount}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">欧洲航空公司</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-md">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                96%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">成功率</div>
            </div>
          </section>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              全部 ({blogArticles.length})
            </button>
            <button
              onClick={() => setSelectedCategory("airline")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === "airline"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              航空公司 ({airlineCount})
            </button>
            <button
              onClick={() => setSelectedCategory("airport")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === "airport"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              机场 ({airportCount})
            </button>
            <button
              onClick={() => setSelectedCategory("foundation")}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === "foundation"
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              基础知识 ({foundationCount})
            </button>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={article.slug}
                className="group"
              >
                <div className={`h-full ${article.color} rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 dark:hover:border-blue-400`}>
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
                      {getCategoryLabel(article.category)}
                    </span>
                    {article.featured && (
                      <span className="text-xl" title="推荐文章">⭐</span>
                    )}
                  </div>

                  {/* Airline Header (if applicable) */}
                  {article.airlineFlag && (
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-3xl">{article.airlineFlag}</span>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {article.airlineCode}
                      </span>
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h2>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      📄 {article.wordCount.toLocaleString()} 字
                    </span>
                    <span className="flex items-center gap-1">
                      ⏱️ {article.readTime} 分钟
                    </span>
                  </div>

                  {/* Excerpt */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-2 transition-all">
                    <span>阅读完整指南</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              🎯 准备好索赔了吗？
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              ClaimWinger 为中国乘客提供专业的 EU261 索赔服务
            </p>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">✅</span>
                <span>不成功不收费</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">✅</span>
                <span>中文客服支持</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">✅</span>
                <span>SWIFT 转账到中国</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">✅</span>
                <span>96% 成功率</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                免费检查您的航班
              </a>
              <a
                href="https://claimwinger.com/how-it-works"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors"
              >
                了解索赔流程
              </a>
            </div>
          </section>

          {/* Featured Articles Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              ⭐ 推荐阅读
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {blogArticles.filter(a => a.featured).map((article) => (
                <Link
                  key={article.id}
                  href={article.slug}
                  className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    {article.airlineFlag && (
                      <span className="text-2xl">{article.airlineFlag}</span>
                    )}
                    <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {article.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {article.excerpt}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                    阅读更多 →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Why Choose ClaimWinger */}
          <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              为什么选择 ClaimWinger？
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  无风险索赔
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  不成功不收费。只有在成功获得赔偿后才支付服务费（通常为 25%）。
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  快速处理
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  平均 8-12 周完成索赔。我们处理所有法律文书工作和与航空公司的沟通。
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🇨🇳</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  中国市场专家
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  了解中国乘客的特殊需求。支持 SWIFT 转账到中国银行账户。
                </p>
              </div>
            </div>
          </section>
        </article>
      </div>
    </LayoutZh>
  );
}