import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { BookOpen, Clock, Calendar, ArrowRight, Filter } from "lucide-react";
import { useState } from "react";
import {
  blogArticlesCs,
  getCategoryLabelCs,
  getArticlesByCategoryCs,
  getFeaturedArticlesCs,
  getTotalWordCountCs,
  type BlogArticleCs
} from "@/lib/blogArticlesCs";

export default function CsBlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<BlogArticleCs["category"] | "all">("all");

  const displayedArticles = selectedCategory === "all" 
    ? blogArticlesCs 
    : getArticlesByCategoryCs(selectedCategory);

  const featuredArticles = getFeaturedArticlesCs();
  const totalWords = getTotalWordCountCs();

  return (
    <LayoutCs>
      <SEO
        title="Blog - Průvodce kompenzacemi za lety | LotProblem.cz"
        description="Podrobné průvodce kompenzacemi za zpožděné a zrušené lety z českých letišť. EU261 práva cestujících."
        url="https://lotproblem.pl/cs/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Průvodce kompenzacemi</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Průvodce kompenzacemi za lety
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Podrobné průvodce pro získání kompenzace za zpožděné nebo zrušené lety z českých letišť.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{blogArticlesCs.length}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Průvodců</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{Math.round(totalWords / 1000)}K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Slov</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">600 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Max kompenzace</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white dark:bg-gray-900 py-8 border-b border-gray-200 dark:border-gray-700 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Filter className="h-5 w-5" />
              <span className="font-medium">Filtrovat podle kategorie:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Vše ({blogArticlesCs.length})
              </button>
              <button
                onClick={() => setSelectedCategory("airport")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "airport"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Letiště ({getArticlesByCategoryCs("airport").length})
              </button>
              <button
                onClick={() => setSelectedCategory("airline")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "airline"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Aerolinka ({getArticlesByCategoryCs("airline").length})
              </button>
              <button
                onClick={() => setSelectedCategory("foundation")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "foundation"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Základy ({getArticlesByCategoryCs("foundation").length})
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === "all" && featuredArticles.length > 0 && (
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Doporučené průvodce
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={article.slug}
                  className={`${article.color} rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg group`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{article.flag}</span>
                      <div>
                        <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {getCategoryLabelCs(article.category)}
                        </div>
                        {article.airportName && (
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {article.airportCode} • {article.airportName}
                          </div>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime} min čtení</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.publishDate).toLocaleDateString("cs-CZ")}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {selectedCategory === "all" ? "Všechny průvodce" : getCategoryLabelCs(selectedCategory)}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article) => (
              <Link
                key={article.id}
                href={article.slug}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-lg group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{article.flag}</span>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {getCategoryLabelCs(article.category)}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {article.excerpt}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime} min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(article.publishDate).toLocaleDateString("cs-CZ")}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Máte zpožděný nebo zrušený let?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Zkontrolujte svůj nárok na kompenzaci zdarma za méně než 2 minuty.
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            Zkontrolovat let zdarma
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-blue-100 mt-4 text-sm">
            ✓ Žádné riziko • ✓ Platíte pouze při úspěchu • ✓ 25% provize
          </p>
        </div>
      </section>
    </LayoutCs>
  );
}
