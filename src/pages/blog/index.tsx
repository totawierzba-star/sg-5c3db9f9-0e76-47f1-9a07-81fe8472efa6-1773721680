import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { blogArticles } from "@/lib/blogArticles";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Get unique categories
  const categories = ["all", ...Array.from(new Set(blogArticles.map(article => article.category)))];

  // Filter articles by category
  const filteredArticles = selectedCategory === "all" 
    ? blogArticles 
    : blogArticles.filter(article => article.category === selectedCategory);

  // Separate featured and regular articles
  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "LOT Polish Airlines": "blue",
      "Ryanair": "green",
      "Wizz Air": "purple",
      "Lufthansa": "yellow",
      "Case Studies": "red",
      "Guide": "indigo"
    };
    return colors[category] || "gray";
  };

  const getColorClasses = (color: string) => {
    const classes: Record<string, { bg: string; text: string; hover: string; border: string }> = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        text: "text-blue-600 dark:text-blue-400",
        hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-800"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        text: "text-green-600 dark:text-green-400",
        hover: "hover:bg-green-100 dark:hover:bg-green-900/30",
        border: "border-green-200 dark:border-green-800"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        text: "text-purple-600 dark:text-purple-400",
        hover: "hover:bg-purple-100 dark:hover:bg-purple-900/30",
        border: "border-purple-200 dark:border-purple-800"
      },
      yellow: {
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        text: "text-yellow-600 dark:text-yellow-400",
        hover: "hover:bg-yellow-100 dark:hover:bg-yellow-900/30",
        border: "border-yellow-200 dark:border-yellow-800"
      },
      red: {
        bg: "bg-red-50 dark:bg-red-900/20",
        text: "text-red-600 dark:text-red-400",
        hover: "hover:bg-red-100 dark:hover:bg-red-900/30",
        border: "border-red-200 dark:border-red-800"
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        text: "text-indigo-600 dark:text-indigo-400",
        hover: "hover:bg-indigo-100 dark:hover:bg-indigo-900/30",
        border: "border-indigo-200 dark:border-indigo-800"
      },
      gray: {
        bg: "bg-gray-50 dark:bg-gray-900/20",
        text: "text-gray-600 dark:text-gray-400",
        hover: "hover:bg-gray-100 dark:hover:bg-gray-900/30",
        border: "border-gray-200 dark:border-gray-800"
      }
    };
    return classes[color] || classes.gray;
  };

  return (
    <Layout>
      <SEO
        title="Blog LotProblem.pl — odszkodowania za opóźnione i odwołane loty"
        description="Praktyczne porady, przewodniki i case studies o prawach pasażerów, odszkodowaniach za opóźnione loty i sposobach odzyskania pieniędzy od linii lotniczych."
        url="https://lotproblem.pl/blog"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              📚 Blog LotProblem.pl
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Przewodniki po odszkodowaniach lotniczych
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Wszystko co musisz wiedzieć o prawach pasażerów, odszkodowaniach za opóźnione loty i skutecznych metodach odzyskania pieniędzy od linii lotniczych.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-lg scale-105"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {category === "all" ? "Wszystkie artykuły" : category}
                </button>
              ))}
            </div>
            <div className="text-center mt-4 text-gray-600 dark:text-gray-400">
              Wyświetlane: <strong>{filteredArticles.length}</strong> {filteredArticles.length === 1 ? "artykuł" : "artykuły"}
            </div>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Polecane artykuły
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.map((article) => {
                  const color = getCategoryColor(article.category);
                  const colorClasses = getColorClasses(color);
                  
                  return (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className={`block ${colorClasses.bg} ${colorClasses.hover} rounded-xl p-8 border-2 ${colorClasses.border} transition-all hover:shadow-xl group`}
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`${colorClasses.text} text-sm font-bold uppercase tracking-wide`}>
                          {article.category}
                        </span>
                        <span className="text-yellow-500">★</span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Regular Articles Grid */}
          {regularArticles.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {featuredArticles.length > 0 ? "Wszystkie artykuły" : "Artykuły"}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {regularArticles.map((article) => {
                  const color = getCategoryColor(article.category);
                  const colorClasses = getColorClasses(color);
                  
                  return (
                    <Link
                      key={article.slug}
                      href={`/blog/${article.slug}`}
                      className="block bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`${colorClasses.text} text-xs font-bold uppercase tracking-wide`}>
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {article.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                Brak artykułów w tej kategorii
              </p>
              <button
                onClick={() => setSelectedCategory("all")}
                className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                Pokaż wszystkie artykuły
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              ✈️ Masz problem z lotem?
            </h2>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Sprawdź czy przysługuje Ci odszkodowanie do 600€ za opóźniony lub odwołany lot. Zero kosztów z góry — płacisz tylko od sukcesu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://claimwinger.com/pl/opozniony-lot?krok=szczegoly-lotu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Opóźniony lot
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="https://claimwinger.com/pl/odwolany-lot?krok=szczegoly-lotu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Odwołany lot
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold inline-flex items-center gap-2"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}