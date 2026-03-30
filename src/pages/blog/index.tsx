import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { blogArticles } from "@/lib/blogArticles";
import Link from "next/link";
import { Calendar, ArrowRight, Search, Filter, BookOpen } from "lucide-react";
import { useState } from "react";

const categories = [
  "Wszystkie",
  "LOT Polish Airlines",
  "Ryanair",
  "Wizz Air",
  "Linie lotnicze",
  "Prawo lotnicze",
  "Lotniska",
  "Porównania",
];

const categoryColors: Record<string, string> = {
  "LOT Polish Airlines": "bg-blue-100 text-blue-800 border-blue-300",
  Ryanair: "bg-red-100 text-red-800 border-red-300",
  "Wizz Air": "bg-purple-100 text-purple-800 border-purple-300",
  "Linie lotnicze": "bg-indigo-100 text-indigo-800 border-indigo-300",
  "Prawo lotnicze": "bg-green-100 text-green-800 border-green-300",
  Lotniska: "bg-orange-100 text-orange-800 border-orange-300",
  Porównania: "bg-teal-100 text-teal-800 border-teal-300",
  default: "bg-gray-100 text-gray-800 border-gray-300",
};

const businessTravelArtifactSlugs = new Set([
  "lot-b2b-odszkodowanie-lot-sluzbowy",
  "overbooking-lot-sluzbowy-pracy",
  "odwolany-lot-sluzbowy-koszty-hotel-przesiadki",
  "ec-261-2004-loty-sluzbowe-rozporzadzenie",
  "lot-sluzbowy-opozniony-3-godziny-kroki",
  "zgubiony-bagaz-podroz-sluzbowa-odszkodowanie-procedura",
  "opoznienie-lotu-spotkanie-biznesowe-koszty-konsekwencje",
  "lot-sluzbowy-odwolany-ostatnia-chwila-co-zrobic",
  "bilet-sluzbowy-firma-reklamacja-kto-sklada",
  "jak-napisac-polityke-podrozy-sluzbowych-firmy",
  "travel-policy-regulamin-firmowy-elementy",
  "limity-klasy-biletow-podroz-sluzbowa-jak-ustalic",
  "self-booking-tool-vs-agencja-travel-porownanie-firmy",
  "zarzadzanie-wydatkami-loty-sluzbowe-narzedzia-systemy",
  "duty-of-care-obowiazek-pracodawcy-podrozujacy-pracownik",
  "polityka-zrownowazonych-podrozy-sluzbowych-jak-wdrozyc",
  "podroze-sluzbowe-work-life-balance-polityka-przedluzania-wyjazdow",
  "kpi-podrozy-sluzbowe-jak-mierzyc-efektywnosc-travel-policy",
]);

const getArticleCountLabel = (count: number): string => {
  if (count === 1) return "artykuł";
  if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
    return "artykuły";
  }
  return "artykułów";
};

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Wszystkie");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const visibleBlogArticles = blogArticles.filter(
    (article) => !businessTravelArtifactSlugs.has(article.slug)
  );

  const filteredArticles = visibleBlogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "Wszystkie" || article.category === selectedCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredArticles = visibleBlogArticles
    .filter((article) => article.featured)
    .slice(0, 3);

  const categoryStats = visibleBlogArticles.reduce<Record<string, number>>((stats, article) => {
    stats[article.category] = (stats[article.category] || 0) + 1;
    return stats;
  }, {});

  const totalVisibleArticles = visibleBlogArticles.length;

  return (
    <Layout>
      <SEO
        title="Blog o odszkodowaniach lotniczych - ProblemLot.pl"
        description={`Praktyczne porady, prawa pasażera i najnowsze informacje o odszkodowaniach za opóźnione i odwołane loty. ${totalVisibleArticles} artykułów eksperckich.`}
        url="https://problemlot.pl/blog"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-sm">
                <BookOpen className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {totalVisibleArticles} artykułów eksperckich
                </span>
              </div>

              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                Blog o prawach pasażerów lotniczych
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
                Kompleksowe porady prawne, aktualne przepisy i praktyczne wskazówki
                dotyczące odszkodowań lotniczych.
              </p>

              <div className="mx-auto max-w-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Szukaj artykułów..."
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    className="w-full rounded-lg py-4 pl-12 pr-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <div className="mb-4 flex items-center gap-3">
              <Filter className="h-5 w-5 text-gray-600" />
              <h2 className="text-lg font-semibold text-gray-900">Filtruj po kategorii</h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const count =
                  category === "Wszystkie" ? totalVisibleArticles : categoryStats[category] || 0;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-lg border-2 px-4 py-2 font-medium transition-all ${
                      selectedCategory === category
                        ? "border-blue-600 bg-blue-600 text-white shadow-md"
                        : "border-gray-300 bg-white text-gray-700 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    {category} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {selectedCategory === "Wszystkie" && searchQuery === "" && (
            <div className="mb-16">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
                <span className="rounded-lg bg-yellow-400 px-3 py-1 text-sm font-bold text-yellow-900">
                  FEATURED
                </span>
                Najpopularniejsze artykuły
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group overflow-hidden rounded-xl border-2 border-transparent bg-white shadow-md transition-all hover:border-blue-500 hover:shadow-xl"
                  >
                    <div className="p-6">
                      <span
                        className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${
                          categoryColors[article.category] || categoryColors.default
                        }`}
                      >
                        {article.category}
                      </span>
                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {article.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-gray-600">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <span className="flex items-center gap-1 font-semibold text-blue-600 transition-all group-hover:gap-2">
                          Czytaj <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div>
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory === "Wszystkie" ? "Wszystkie artykuły" : selectedCategory}
              </h2>
              <span className="text-gray-600">
                {filteredArticles.length} {getArticleCountLabel(filteredArticles.length)}
              </span>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-lg text-gray-600">
                  Nie znaleziono artykułów spełniających kryteria wyszukiwania.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all hover:border-blue-500 hover:shadow-xl"
                  >
                    <div className="p-6">
                      <span
                        className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${
                          categoryColors[article.category] || categoryColors.default
                        }`}
                      >
                        {article.category}
                      </span>
                      <h3 className="mb-3 line-clamp-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                        {article.title}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm text-gray-600">{article.excerpt}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <span className="flex items-center gap-1 font-semibold text-blue-600 transition-all group-hover:gap-2">
                          Czytaj <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-center text-white md:p-12">
            <h2 className="mb-4 text-3xl font-bold">Masz problem z lotem?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
              Sprawdź swoje prawa i dowiedz się, czy należy Ci się odszkodowanie do
              600 EUR.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://claimwinger.com/pl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-blue-600 transition-colors hover:bg-blue-50"
              >
                Sprawdź odszkodowanie <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/ile-mozesz-dostac"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-8 py-4 font-bold text-white transition-colors hover:bg-blue-800"
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
