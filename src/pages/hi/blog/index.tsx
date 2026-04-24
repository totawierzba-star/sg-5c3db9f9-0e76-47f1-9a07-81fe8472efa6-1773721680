import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Clock, Filter, Plane } from "lucide-react";

import { LayoutHi } from "@/components/LayoutHi";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";
import {
  blogArticlesHi,
  getCategoryLabelHi,
  type BlogArticleHi,
  type BlogArticleHiCategory,
} from "@/lib/blogArticlesHi";

const categories: Array<BlogArticleHiCategory | "all"> = [
  "all",
  "snippet",
  "foundation",
  "airline",
  "airport",
  "route",
  "special",
];

const categoryLabel = (category: BlogArticleHiCategory | "all") =>
  category === "all" ? "सभी गाइड" : getCategoryLabelHi(category);

export default function HindiBlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState<BlogArticleHiCategory | "all">("all");
  const filteredArticles =
    selectedCategory === "all"
      ? blogArticlesHi
      : blogArticlesHi.filter((article) => article.category === selectedCategory);
  const featuredArticles = blogArticlesHi.filter((article) => article.featured).slice(0, 8);
  const totalWords = blogArticlesHi.reduce((total, article) => total + article.wordCount, 0);
  const ctaHref =
    "https://claimwinger.com/hi/deri-udaan?utm_source=problemlot-hi&utm_medium=blog_index&utm_campaign=hi_blog&utm_content=bottom_cta";

  return (
    <LayoutHi>
      <SEO
        title="हिंदी उड़ान मुआवज़ा ब्लॉग | EU261, UK261, Air India और यूरोप रूट"
        description="भारतीय यात्रियों के लिए हिंदी गाइड: यूरोप उड़ान देरी, Air India EU261, UK261, DGCA, missed connection और €600 यानी लगभग ₹52,000 तक मुआवज़ा।"
        url="https://problemlot.com/hi/blog"
        canonicalUrl="https://problemlot.com/hi/blog"
        locale="hi_IN"
        language="Hindi"
      />

      <section className="bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-16 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
              <BookOpen className="h-4 w-4" />
              <span>भारतीय यात्रियों के लिए EU261 ज्ञान केंद्र</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold text-gray-950 dark:text-white md:text-5xl">
              उड़ान मुआवज़ा ब्लॉग हिंदी में
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-xl leading-9 text-gray-700 dark:text-gray-300">
              Air India, IndiGo, Lufthansa, British Airways, EU261, UK261 और DGCA पर गहन हिंदी गाइड। लंबे भारत-यूरोप रूट,
              यूरोपीय hub transit और खोज परिणामों के लिए साफ, सीधे जवाब।
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                <span>
                  <strong>{blogArticlesHi.length}</strong> गाइड
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                <span>
                  <strong>{Math.round(totalWords / 1000)}K+</strong> शब्द
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Plane className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                <span>
                  <strong>€600 / ₹52,000</strong> तक दावा
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-950 dark:text-white">
            प्राथमिक गाइड
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-8 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="h-5 w-5 flex-shrink-0 text-gray-600 dark:text-gray-400" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-lg px-4 py-2 font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-emerald-700 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                {categoryLabel(category)} (
                {category === "all"
                  ? blogArticlesHi.length
                  : blogArticlesHi.filter((article) => article.category === category).length}
                )
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-800 to-slate-950 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-white">
            अपनी उड़ान पात्रता अभी जांचें
          </h2>
          <p className="mb-8 text-xl text-emerald-50">
            3 मिनट में देखें कि आप €250-€600 यानी लगभग ₹21,000-₹52,000 तक मुआवज़े के पात्र हैं या नहीं।
          </p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushClaimWingerEvent("claimwinger_cta_click", {
                language: "hi",
                campaign: "hi_blog_index",
                content: "bottom_cta",
                destination: ctaHref,
              })
            }
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-emerald-900 shadow-xl transition-colors hover:bg-emerald-50"
          >
            मुफ्त दावा जांचें
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-emerald-100">
            No win, no fee | हिंदी प्रक्रिया | ClaimWinger विधि सलाहकार
          </p>
        </div>
      </section>
    </LayoutHi>
  );
}

function ArticleCard({ article, featured = false }: { article: BlogArticleHi; featured?: boolean }) {
  return (
    <Link
      href={`/hi/blog/${article.slug}`}
      className={`group rounded-xl border bg-white p-6 transition-all hover:border-emerald-600 hover:shadow-lg dark:bg-gray-950 dark:hover:border-emerald-400 ${
        featured
          ? "border-emerald-100 bg-gradient-to-br from-emerald-50 to-white dark:border-gray-800 dark:from-gray-900 dark:to-gray-950"
          : "border-gray-200 dark:border-gray-800"
      }`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-800 dark:bg-amber-900/30 dark:text-amber-200">
          {article.cluster}
        </span>
        <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
          {getCategoryLabelHi(article.category)}
        </span>
        {article.airportCode && (
          <span className="text-xs text-gray-500 dark:text-gray-500">{article.airportCode}</span>
        )}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-gray-950 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-300">
        {article.title}
      </h3>
      <p className="mb-4 text-sm leading-6 text-gray-600 line-clamp-3 dark:text-gray-400">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
        <span>{article.readTime} मिनट पढ़ें</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
