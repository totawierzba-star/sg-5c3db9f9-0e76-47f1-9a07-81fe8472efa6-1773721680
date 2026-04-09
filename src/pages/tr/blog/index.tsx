import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Calendar, Clock, Search, Sparkles, Tag } from "lucide-react";

import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import {
  blogArticlesTrSorted,
  blogCategoriesTr,
  featuredBlogArticlesTr,
} from "@/lib/blogArticlesTr";

export default function BlogIndexTr() {
  const [selectedCategory, setSelectedCategory] = useState("Tum yazilar");
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();

  const filteredArticles = blogArticlesTrSorted.filter((article) => {
    const matchesCategory =
      selectedCategory === "Tum yazilar" || article.category === selectedCategory;
    const matchesSearch =
      query === "" ||
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const featuredArticles = featuredBlogArticlesTr.slice(0, 3);
  const totalArticles = blogArticlesTrSorted.length;
  const categoryCounts = blogArticlesTrSorted.reduce<Record<string, number>>((acc, article) => {
    acc[article.category] = (acc[article.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <LayoutTr>
      <SEO
        title={`Turkce EU261 blogu | ${totalArticles} yazi, gecikme, iptal ve tazminat rehberleri`}
        description="Turk yolcular ve Avrupa diasporasi icin EU261, ucus gecikmesi, iptal, tazminat ve haklar hakkinda Turkce blog rehberleri."
        url="https://problemlot.com/tr/blog"
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-red-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
        <section className="border-b border-red-100 bg-white/80 py-16 backdrop-blur dark:border-gray-800 dark:bg-gray-900/70">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
                <BookOpen className="h-4 w-4" />
                Turkce EU261 bilgi bankasi
              </div>
              <h1 className="mb-5 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
                Gecikme, iptal ve EU261 rehberleri
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Turk yolcular ve Avrupa diasporasi icin, SEO ve GEO odakli ama dogrudan karar vermeye yardim eden
                rehberler. Hedef sadece trafik degil, somut olarak bir sonraki adimi netlestirmek.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">{totalArticles}</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">Turkce yazi</div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">EU261</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">ana odak</div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400">TR + EU</div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">guclu pazar kombinasyonu</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-slate-900 p-8 text-white shadow-xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                <Sparkles className="h-4 w-4" />
                Onerilen baslangic
              </div>
              <h2 className="mb-3 text-2xl font-bold">Ilk once bunlarla baslayin</h2>
              <p className="mb-6 max-w-2xl text-red-100">
                Yeni baslayanlar icin once kapsami, sonra da kendi ucusunun konumunu anlamak en iyi yoldur.
              </p>

              <div className="space-y-4">
                {featuredArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/tr/blog/${article.slug}`}
                    className="block rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                  >
                    <div className="mb-2 text-sm text-red-100">{article.category}</div>
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <p className="mt-2 text-sm text-red-100">{article.excerpt}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Hizli arama</h2>

              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Ara: EU261, gecikme, iptal, Turkish Airlines..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-red-500 focus:bg-white dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                {blogCategoriesTr.map((category) => {
                  const count =
                    category === "Tum yazilar" ? totalArticles : categoryCounts[category] || 0;

                  return (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                        selectedCategory === category
                          ? "bg-red-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-gray-700 dark:text-slate-200 dark:hover:bg-gray-600"
                      }`}
                    >
                      {category} ({count})
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {selectedCategory === "Tum yazilar" ? "Tum yazilar" : selectedCategory}
            </h2>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{filteredArticles.length} sonuc</p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Sonuc bulunamadi. EU261, gecikme veya iptal gibi anahtar kelimeleri deneyin.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/tr/blog/${article.slug}`}
                  className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl hover:ring-red-300 dark:bg-gray-800 dark:ring-gray-700 dark:hover:ring-red-600"
                >
                  <div className="p-6">
                    <div className="mb-4 flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                      <Tag className="h-4 w-4" />
                      <span>{article.category}</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900 transition group-hover:text-red-600 dark:text-white dark:group-hover:text-red-400">
                      {article.title}
                    </h3>
                    <p className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-6 py-4 text-sm font-semibold text-red-600 transition group-hover:bg-red-50 dark:border-gray-700 dark:bg-gray-900 dark:text-red-400 dark:group-hover:bg-gray-950">
                    <span>Yaziyi ac</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </LayoutTr>
  );
}
