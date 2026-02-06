import { SEO } from "@/components/SEO";
import { LayoutHi } from "@/components/LayoutHi";
import Link from "next/link";
import { useState } from "react";
import { blogArticlesHi, getCategoryLabelHi, BlogArticleHi } from "@/lib/blogArticlesHi";
import { Plane, Clock, BookOpen, ArrowRight, Filter } from "lucide-react";

export default function HindiBlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<BlogArticleHi["category"] | "all">("all");

  const filteredArticles = selectedCategory === "all" 
    ? blogArticlesHi 
    : blogArticlesHi.filter(article => article.category === selectedCategory);

  const featuredArticles = blogArticlesHi.filter(article => article.featured);
  const totalWords = blogArticlesHi.reduce((total, article) => total + article.wordCount, 0);

  return (
    <LayoutHi>
      <SEO
        title="उड़ान मुआवजा Blog – विलंबित और रद्द उड़ान गाइड"
        description="विलंबित या रद्द की गई उड़ान के लिए मुआवजा प्राप्त करने के बारे में विस्तृत गाइड। EU 261/2004, हवाई अड्डे की जानकारी और यात्री अधिकार।"
        url="https://lotproblem.pl/hi/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>उड़ान मुआवजा ज्ञान केंद्र</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              उड़ान मुआवजा Blog
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              विलंबित या रद्द की गई उड़ान के लिए मुआवजा प्राप्त करने के बारे में सब कुछ जानें। 
              EU 261/2004 अधिकार, हवाई अड्डे की जानकारी और व्यावहारिक सलाह।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span><strong>{blogArticlesHi.length}</strong> विस्तृत गाइड</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span><strong>{Math.round(totalWords / 1000)}K+</strong> शब्द</span>
              </div>
              <div className="flex items-center space-x-2">
                <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <span><strong>€600</strong> तक मुआवजा</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="py-12 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              फीचर्ड गाइड
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/hi/blog/${article.slug}`}
                  className="group bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border-2 border-blue-100 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-xl"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-2xl">{article.flag}</span>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {getCategoryLabelHi(article.category)}
                    </span>
                    {article.airportCode && (
                      <span className="text-sm text-gray-500 dark:text-gray-500">
                        • {article.airportCode}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>{article.readTime} मिनट पढ़ें</span>
                      <span>{article.wordCount.toLocaleString()} शब्द</span>
                    </div>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400 flex-shrink-0" />
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              सभी गाइड ({blogArticlesHi.length})
            </button>
            <button
              onClick={() => setSelectedCategory("airport")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === "airport"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              हवाई अड्डा ({blogArticlesHi.filter(a => a.category === "airport").length})
            </button>
            <button
              onClick={() => setSelectedCategory("airline")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === "airline"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              एयरलाइन ({blogArticlesHi.filter(a => a.category === "airline").length})
            </button>
            <button
              onClick={() => setSelectedCategory("foundation")}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                selectedCategory === "foundation"
                  ? "bg-blue-600 text-white"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              बुनियादी ({blogArticlesHi.filter(a => a.category === "foundation").length})
            </button>
          </div>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/hi/blog/${article.slug}`}
                  className="group bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xl">{article.flag}</span>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      {getCategoryLabelHi(article.category)}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                    <span>{article.readTime} मिनट</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                इस श्रेणी में कोई लेख उपलब्ध नहीं है।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            अपना दावा अभी जांचें
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            3 मिनट में पता करें कि आप €250-€600 मुआवजे के पात्र हैं या नहीं। कोई जोखिम नहीं, सफलता पर भुगतान करें।
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            निःशुल्क दावा जांचें
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-blue-100 mt-4 text-sm">
            ✓ कोई अग्रिम लागत नहीं • ✓ कोई छिपा शुल्क नहीं • ✓ सफलता पर 25% प्रोविजन
          </p>
        </div>
      </section>
    </LayoutHi>
  );
}