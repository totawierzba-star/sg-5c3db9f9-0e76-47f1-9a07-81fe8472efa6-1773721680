import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { blogArticles } from "@/lib/blogArticles";
import Link from "next/link";
import { Plane, Calendar, ArrowRight, Search, Filter, BookOpen } from "lucide-react";
import { useState } from "react";

const categories = [
  "Wszystkie",
  "LOT Polish Airlines",
  "Ryanair",
  "Wizz Air",
  "Linie lotnicze",
  "Prawo lotnicze",
  "Lotniska",
  "Porównania"
];

const categoryColors: Record<string, string> = {
  "LOT Polish Airlines": "bg-blue-100 text-blue-800 border-blue-300",
  "Ryanair": "bg-red-100 text-red-800 border-red-300",
  "Wizz Air": "bg-purple-100 text-purple-800 border-purple-300",
  "Linie lotnicze": "bg-indigo-100 text-indigo-800 border-indigo-300",
  "Prawo lotnicze": "bg-green-100 text-green-800 border-green-300",
  "Lotniska": "bg-orange-100 text-orange-800 border-orange-300",
  "Porównania": "bg-teal-100 text-teal-800 border-teal-300",
  "default": "bg-gray-100 text-gray-800 border-gray-300"
};

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory = selectedCategory === "Wszystkie" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = blogArticles.filter((article) => article.featured).slice(0, 3);

  const getCategoryStats = () => {
    const stats: Record<string, number> = {};
    blogArticles.forEach((article) => {
      stats[article.category] = (stats[article.category] || 0) + 1;
    });
    return stats;
  };

  const categoryStats = getCategoryStats();

  return (
    <Layout>
      <SEO
        title="Blog o odszkodowaniach lotniczych — ProblemLot.pl"
        description="Praktyczne porady, prawa pasażera i najnowsze informacje o odszkodowaniach za opóźnione i odwołane loty. 124 artykuły ekspertów."
        url="https://problemlot.pl/blog"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm font-medium">124 artykuły eksperckie</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Blog o prawach pasażerów lotniczych
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Kompleksowe porady prawne, aktualne przepisy i praktyczne wskazówki dotyczące odszkodowań lotniczych
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Szukaj artykułów..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filtruj po kategorii</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const count = category === "Wszystkie" 
                  ? blogArticles.length 
                  : categoryStats[category] || 0;
                
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all border-2 ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white border-blue-600 shadow-md"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Featured Articles */}
          {selectedCategory === "Wszystkie" && searchQuery === "" && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-lg text-sm font-bold">
                  FEATURED
                </span>
                Najpopularniejsze artykuły
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border-2 border-transparent hover:border-blue-500"
                  >
                    <div className="p-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${
                        categoryColors[article.category] || categoryColors.default
                      }`}>
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <span className="text-blue-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                          Czytaj <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Articles Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "Wszystkie" ? "Wszystkie artykuły" : selectedCategory}
              </h2>
              <span className="text-gray-600">
                {filteredArticles.length} {filteredArticles.length === 1 ? "artykuł" : filteredArticles.length < 5 ? "artykuły" : "artykułów"}
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">Nie znaleziono artykułów spełniających kryteria wyszukiwania.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 hover:border-blue-500"
                  >
                    <div className="p-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border mb-3 ${
                        categoryColors[article.category] || categoryColors.default
                      }`}>
                        {article.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <span className="text-blue-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                          Czytaj <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Masz problem z lotem?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Sprawdź swoje prawa i dowiedz się, czy należy Ci się odszkodowanie do 600 €
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://claimwinger.com/pl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Sprawdź odszkodowanie <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/ile-mozesz-dostac"
                className="bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                Kalkulator odszkodowań
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
