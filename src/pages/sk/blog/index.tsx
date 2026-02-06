import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { blogArticlesSk, getCategoryLabelSk, getTotalWordCountSk } from "@/lib/blogArticlesSk";
import Link from "next/link";
import { useState } from "react";
import { Search, Filter, BookOpen, Clock, Tag, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BlogIndexSk() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogArticlesSk.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = blogArticlesSk.find(a => a.featured) || blogArticlesSk[0];
  const totalWords = getTotalWordCountSk();

  return (
    <LayoutSk>
      <SEO
        title="Blog a príručky pre cestujúcich | LotProblem.pl"
        description="Kompletné návody na získanie odškodnenia. Wizz Air, Ryanair, Smartwings, letisko Viedeň a Bratislava. Práva cestujúcich vysvetlené ľudskou rečou."
      />

      {/* Header */}
      <div className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            Centrum pomoci pre <span className="text-blue-600">slovenských cestujúcich</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
            Všetko, čo potrebujete vedieť o kompenzáciách. Od meškania letu až po stratenú batožinu.
            Pripravili sme pre vás {blogArticlesSk.length} komplexných príručiek.
          </p>
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-fit">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-blue-500" />
              <span>{blogArticlesSk.length} článkov</span>
            </div>
            <div className="flex items-center">
              <Tag className="h-4 w-4 mr-2 text-green-500" />
              <span>{Math.round(totalWords / 1000)}k+ slov</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2 text-orange-500" />
              <span>Aktualizované: 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Všetky
            </button>
            <button
              onClick={() => setActiveCategory("foundation")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "foundation"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Fundamenty
            </button>
            <button
              onClick={() => setActiveCategory("airline")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "airline"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Letecké spoločnosti
            </button>
            <button
              onClick={() => setActiveCategory("airport")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === "airport"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              Letiská
            </button>
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Hľadať v článkoch..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-shadow"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link key={article.id} href={`/sk/blog/${article.slug}`} className="group h-full">
              <article className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Card Header */}
                <div className={`h-2 w-full bg-${article.color}-500`}></div>
                
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                      {article.flag && <span className="mr-1">{article.flag}</span>}
                      {getCategoryLabelSk(article.category)}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime} min
                    </span>
                  </div>

                  {/* Content */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-600 group-hover:underline">Čítať viac</span>
                    <ArrowRight className="h-4 w-4 text-blue-600 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">Nenašli sa žiadne články zodpovedajúce vášmu vyhľadávaniu.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
              className="mt-4 text-blue-600 hover:underline"
            >
              Zobraziť všetky články
            </button>
          </div>
        )}

        {/* SEO Footer */}
        <div className="mt-20 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Prečo čítať naše príručky?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Letecké spoločnosti často spoliehajú na to, že cestujúci nepoznajú svoje práva. Naše články sú písané na základe 
            skutočných prípadov a aktuálnej judikatúry Súdneho dvora EÚ. Zameriavame sa špecificky na problémy, ktorým čelia 
            Slováci pri letoch z Bratislavy, Viedne, Košíc a Budapešti.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Aktualizované pre rok 2026</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Špecifiká pre Wizz Air, Ryanair a Smartwings</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Praktické rady "krok za krokom"</span>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
              <span>Overené právnikmi</span>
            </div>
          </div>
        </div>
      </div>
    </LayoutSk>
  );
}