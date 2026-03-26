import { LayoutIt } from "@/components/LayoutIt";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { blogArticlesIt } from "@/lib/blogArticlesIt";
import { Calendar, Clock, ArrowRight, BookOpen, FileText, Plane, Scale, Info } from "lucide-react";
import { useState } from "react";

export default function BlogIt() {
  const [selectedCategory, setSelectedCategory] = useState("Tutte");
  const categories = ["Tutte", "Compagnie Aeree", "Aeroporti", "Regolamenti", "Guide Pratiche"];

  const filteredArticles = selectedCategory === "Tutte" 
    ? blogArticlesIt 
    : blogArticlesIt.filter(article => article.category === selectedCategory);

  // Count articles by category
  const categoryCounts = {
    "Tutte": blogArticlesIt.length,
    "Compagnie Aeree": blogArticlesIt.filter(a => a.category === "Compagnie Aeree").length,
    "Aeroporti": blogArticlesIt.filter(a => a.category === "Aeroporti").length,
    "Regolamenti": blogArticlesIt.filter(a => a.category === "Regolamenti").length,
    "Guide Pratiche": blogArticlesIt.filter(a => a.category === "Guide Pratiche").length,
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Compagnie Aeree": return <Plane className="h-5 w-5" />;
      case "Aeroporti": return <FileText className="h-5 w-5" />;
      case "Regolamenti": return <Scale className="h-5 w-5" />;
      case "Guide Pratiche": return <Info className="h-5 w-5" />;
      default: return <BookOpen className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case "Compagnie Aeree": return "blue";
      case "Aeroporti": return "green";
      case "Regolamenti": return "purple";
      case "Guide Pratiche": return "amber";
      default: return "gray";
    }
  };

  return (
    <LayoutIt>
      <SEO
        title="Blog: Diritti dei Passeggeri e Risarcimenti Voli - LotProblem.pl"
        description="Scopri tutto sui tuoi diritti come passeggero aereo: guide complete su risarcimenti, regolamento CE 261/2004, compagnie aeree e aeroporti italiani."
        url="https://problemlot.com/it/blog"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/30 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              <span>Blog sui Diritti dei Passeggeri</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Guide e Articoli sui Diritti Aerei
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Tutto quello che devi sapere su risarcimenti per voli in ritardo o cancellati, 
              diritti dei passeggeri e Regolamento CE 261/2004
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-1">{categoryCounts["Tutte"]}</div>
              <div className="text-sm text-blue-100">Articoli Totali</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-1">{categoryCounts["Compagnie Aeree"]}</div>
              <div className="text-sm text-blue-100">Compagnie Aeree</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-1">{categoryCounts["Aeroporti"]}</div>
              <div className="text-sm text-blue-100">Aeroporti</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold mb-1">{categoryCounts["Guide Pratiche"]}</div>
              <div className="text-sm text-blue-100">Guide Pratiche</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === category
                    ? "bg-blue-500"
                    : "bg-gray-200"
                }`}>
                  {categoryCounts[category as keyof typeof categoryCounts]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === "Tutte" 
                ? `Tutti gli Articoli (${filteredArticles.length})` 
                : `${selectedCategory} (${filteredArticles.length})`}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => {
              const colorClasses = {
                blue: "from-blue-500 to-blue-600",
                green: "from-green-500 to-green-600",
                purple: "from-purple-500 to-purple-600",
                amber: "from-amber-500 to-amber-600",
                red: "from-red-500 to-red-600",
              };

              const categoryBadgeColors = {
                "Compagnie Aeree": "bg-blue-100 text-blue-800",
                "Aeroporti": "bg-green-100 text-green-800",
                "Regolamenti": "bg-purple-100 text-purple-800",
                "Guide Pratiche": "bg-amber-100 text-amber-800",
              };

              return (
                <Link
                  key={article.slug}
                  href={`/it/blog/${article.slug}`}
                  className="group block bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Colored Header */}
                  <div className={`h-2 bg-gradient-to-r ${colorClasses[article.color as keyof typeof colorClasses] || "from-gray-400 to-gray-500"}`}></div>

                  <div className="p-6">
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${categoryBadgeColors[article.category as keyof typeof categoryBadgeColors]}`}>
                        {getCategoryIcon(article.category)}
                        {article.category}
                      </span>
                      {article.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          ★ In evidenza
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString("it-IT", { 
                            day: "numeric", 
                            month: "long", 
                            year: "numeric" 
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Leggi l'articolo</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Nessun articolo trovato in questa categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hai Avuto un Problema con il Tuo Volo?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Verifica gratuitamente se hai diritto a un risarcimento fino a 600€ per il tuo volo in ritardo o cancellato.
          </p>
          <Link
            href="https://claimwinger.com/it?utm_source=blog&utm_medium=index&utm_campaign=blog_cta"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            Controlla il Tuo Risarcimento
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="text-blue-200 text-sm mt-4">
            ✓ Verifica gratuita in 2 minuti • ✓ Nessun pagamento anticipato • ✓ Paghi solo se vinciamo
          </p>
        </div>
      </section>
    </LayoutIt>
  );
}
