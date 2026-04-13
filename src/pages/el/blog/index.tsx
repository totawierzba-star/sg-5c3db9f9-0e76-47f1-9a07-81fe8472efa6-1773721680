import Link from "next/link";
import { useState } from "react";
import { ArrowRight, BookOpen, Clock, Search, Tag } from "lucide-react";

import { LayoutEl } from "@/components/LayoutEl";
import { SEO } from "@/components/SEO";
import { blogArticlesEl, getCategoryLabelEl, getTotalWordCountEl } from "@/lib/blogArticlesEl";

export default function BlogIndexEl() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogArticlesEl.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalWords = getTotalWordCountEl();

  return (
    <LayoutEl>
      <SEO
        title="Ελληνικό blog για αποζημιώσεις πτήσεων | ProblemLot"
        description="Οδηγοί στα ελληνικά για καθυστερημένες και ακυρωμένες πτήσεις, αποζημίωση έως 600 € και πρακτικές εξηγήσεις για το EU261."
        url="https://problemlot.com/el/blog"
        canonicalUrl="https://problemlot.com/el/blog"
        locale="el_GR"
        language="Greek"
      />

      <div className="border-b border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Ελληνικοί οδηγοί για καθυστερήσεις και ακυρώσεις πτήσεων
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
            Χτίζουμε σταδιακά μια πλήρη ελληνική βάση γνώσης για αποζημιώσεις πτήσεων, με σαφείς
            απαντήσεις, καθαρή δομή και πρακτική αξία για επιβάτες που θέλουν να καταλάβουν γρήγορα
            τι πραγματικά δικαιούνται.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-gray-900 dark:text-slate-300">
            <div className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4 text-sky-500" />
              <span>{blogArticlesEl.length} άρθρα</span>
            </div>
            <div className="flex items-center">
              <Tag className="mr-2 h-4 w-4 text-green-500" />
              <span>{Math.round(totalWords / 1000)}k+ λέξεις</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-amber-500" />
              <span>Ενημέρωση: 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {[
              ["all", "Όλα"],
              ["foundation", "Βασικά"],
              ["airline", "Αεροπορικές"],
              ["airport", "Αεροδρόμια"],
              ["longtail", "Οδηγοί"],
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setActiveCategory(value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === value
                    ? "bg-sky-600 text-white shadow-md"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-gray-800 dark:text-slate-300 dark:hover:bg-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Αναζήτηση άρθρου..."
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm outline-none transition-shadow focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 dark:border-slate-700 dark:bg-gray-900"
            />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => (
            <Link key={article.id} href={`/el/blog/${article.slug}`} className="group h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-gray-900">
                <div className="h-2 w-full bg-sky-500" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                      {getCategoryLabelEl(article.category)}
                    </span>
                    <span className="flex items-center text-xs text-slate-500">
                      <Clock className="mr-1 h-3 w-3" />
                      {article.readTime} λεπτά
                    </span>
                  </div>
                  <h2 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-sky-600 dark:text-white">
                    {article.title}
                  </h2>
                  <p className="mb-6 flex-1 text-sm text-slate-600 dark:text-slate-400">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-800">
                    <span className="text-sm font-medium text-sky-600">Διαβάστε περισσότερα</span>
                    <ArrowRight className="h-4 w-4 text-sky-600 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </LayoutEl>
  );
}
