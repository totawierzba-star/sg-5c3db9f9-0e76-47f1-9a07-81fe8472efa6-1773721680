import Head from "next/head";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Filter,
  Search,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";

export type UnifiedBlogTheme =
  | "blue"
  | "emerald"
  | "amber"
  | "red"
  | "sky"
  | "violet"
  | "slate";

export interface UnifiedBlogArticle {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  categoryLabel?: string;
  date?: string;
  readTime?: string | number;
  wordCount?: number;
  featured?: boolean;
  eyebrow?: string;
}

export interface UnifiedBlogCategory {
  id: string;
  label: string;
}

export interface UnifiedBlogStat {
  label: string;
  value: string | number;
}

export interface UnifiedBlogCta {
  title: string;
  description: string;
  href: string;
  label: string;
  note?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export interface UnifiedBlogLabels {
  eyebrow: string;
  title: string;
  description: string;
  searchPlaceholder: string;
  filterLabel: string;
  allCategoryLabel: string;
  featuredTitle: string;
  allArticlesTitle: string;
  readMoreLabel: string;
  emptyTitle: string;
  emptyDescription: string;
  clearFiltersLabel: string;
  countLabel: (count: number) => string;
  showingLabel: (shown: number, total: number) => string;
}

interface UnifiedBlogIndexProps {
  articles: UnifiedBlogArticle[];
  basePath: string;
  canonicalUrl: string;
  labels: UnifiedBlogLabels;
  categoryOrder?: UnifiedBlogCategory[];
  cta?: UnifiedBlogCta;
  stats?: UnifiedBlogStat[];
  theme?: UnifiedBlogTheme;
  featuredLimit?: number;
  schemaName?: string;
  schemaDescription?: string;
}

const themeStyles: Record<
  UnifiedBlogTheme,
  {
    page: string;
    hero: string;
    eyebrow: string;
    accentText: string;
    primary: string;
    primarySoft: string;
    ring: string;
    hoverRing: string;
    titleHover: string;
    cta: string;
    ctaButton: string;
  }
> = {
  blue: {
    page: "from-slate-50 via-blue-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950",
    hero: "from-blue-700 via-sky-700 to-slate-950",
    eyebrow: "bg-blue-100 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200",
    accentText: "text-blue-700 dark:text-blue-300",
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    primarySoft: "bg-blue-50 text-blue-800 dark:bg-blue-950/40 dark:text-blue-200",
    ring: "ring-blue-100 dark:ring-blue-900/50",
    hoverRing: "hover:ring-blue-300 dark:hover:ring-blue-700",
    titleHover: "group-hover:text-blue-700 dark:group-hover:text-blue-300",
    cta: "from-blue-700 via-sky-700 to-slate-950",
    ctaButton: "text-blue-800 hover:bg-blue-50",
  },
  emerald: {
    page: "from-emerald-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/30",
    hero: "from-emerald-700 via-teal-700 to-slate-950",
    eyebrow: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200",
    accentText: "text-emerald-700 dark:text-emerald-300",
    primary: "bg-emerald-700 text-white hover:bg-emerald-800",
    primarySoft: "bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200",
    ring: "ring-emerald-100 dark:ring-emerald-900/50",
    hoverRing: "hover:ring-emerald-300 dark:hover:ring-emerald-700",
    titleHover: "group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
    cta: "from-emerald-800 via-teal-800 to-slate-950",
    ctaButton: "text-emerald-900 hover:bg-emerald-50",
  },
  amber: {
    page: "from-amber-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-amber-950/20",
    hero: "from-amber-600 via-orange-700 to-slate-950",
    eyebrow: "bg-amber-100 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200",
    accentText: "text-amber-700 dark:text-amber-300",
    primary: "bg-amber-600 text-white hover:bg-amber-700",
    primarySoft: "bg-amber-50 text-amber-900 dark:bg-amber-950/40 dark:text-amber-200",
    ring: "ring-amber-100 dark:ring-amber-900/50",
    hoverRing: "hover:ring-amber-300 dark:hover:ring-amber-700",
    titleHover: "group-hover:text-amber-700 dark:group-hover:text-amber-300",
    cta: "from-amber-700 via-orange-700 to-slate-950",
    ctaButton: "text-amber-900 hover:bg-amber-50",
  },
  red: {
    page: "from-slate-50 via-red-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-gray-950",
    hero: "from-red-700 via-rose-700 to-slate-950",
    eyebrow: "bg-red-100 text-red-800 dark:bg-red-950/40 dark:text-red-200",
    accentText: "text-red-700 dark:text-red-300",
    primary: "bg-red-700 text-white hover:bg-red-800",
    primarySoft: "bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200",
    ring: "ring-red-100 dark:ring-red-900/50",
    hoverRing: "hover:ring-red-300 dark:hover:ring-red-700",
    titleHover: "group-hover:text-red-700 dark:group-hover:text-red-300",
    cta: "from-red-700 via-rose-700 to-slate-950",
    ctaButton: "text-red-800 hover:bg-red-50",
  },
  sky: {
    page: "from-slate-50 via-sky-50 to-white dark:from-gray-950 dark:via-slate-900 dark:to-gray-950",
    hero: "from-sky-700 via-cyan-700 to-slate-950",
    eyebrow: "bg-sky-100 text-sky-800 dark:bg-sky-950/40 dark:text-sky-200",
    accentText: "text-sky-700 dark:text-sky-300",
    primary: "bg-sky-700 text-white hover:bg-sky-800",
    primarySoft: "bg-sky-50 text-sky-800 dark:bg-sky-950/40 dark:text-sky-200",
    ring: "ring-sky-100 dark:ring-sky-900/50",
    hoverRing: "hover:ring-sky-300 dark:hover:ring-sky-700",
    titleHover: "group-hover:text-sky-700 dark:group-hover:text-sky-300",
    cta: "from-sky-700 via-cyan-700 to-slate-950",
    ctaButton: "text-sky-800 hover:bg-sky-50",
  },
  violet: {
    page: "from-violet-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-violet-950/20",
    hero: "from-violet-700 via-indigo-700 to-slate-950",
    eyebrow: "bg-violet-100 text-violet-800 dark:bg-violet-950/40 dark:text-violet-200",
    accentText: "text-violet-700 dark:text-violet-300",
    primary: "bg-violet-700 text-white hover:bg-violet-800",
    primarySoft: "bg-violet-50 text-violet-800 dark:bg-violet-950/40 dark:text-violet-200",
    ring: "ring-violet-100 dark:ring-violet-900/50",
    hoverRing: "hover:ring-violet-300 dark:hover:ring-violet-700",
    titleHover: "group-hover:text-violet-700 dark:group-hover:text-violet-300",
    cta: "from-violet-700 via-indigo-700 to-slate-950",
    ctaButton: "text-violet-800 hover:bg-violet-50",
  },
  slate: {
    page: "from-slate-50 via-white to-stone-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950",
    hero: "from-slate-800 via-slate-900 to-black",
    eyebrow: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
    accentText: "text-slate-700 dark:text-slate-300",
    primary: "bg-slate-900 text-white hover:bg-slate-800",
    primarySoft: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200",
    ring: "ring-slate-100 dark:ring-slate-800",
    hoverRing: "hover:ring-slate-300 dark:hover:ring-slate-600",
    titleHover: "group-hover:text-slate-700 dark:group-hover:text-slate-200",
    cta: "from-slate-800 via-slate-900 to-black",
    ctaButton: "text-slate-900 hover:bg-slate-100",
  },
};

export function UnifiedBlogIndex({
  articles,
  basePath,
  canonicalUrl,
  labels,
  categoryOrder = [],
  cta,
  stats,
  theme = "blue",
  featuredLimit = 3,
  schemaName,
  schemaDescription,
}: UnifiedBlogIndexProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const styles = themeStyles[theme];
  const query = searchQuery.trim().toLowerCase();
  const categoryOptions = buildCategoryOptions(articles, categoryOrder);
  const categoryCounts = buildCategoryCounts(articles);

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const searchableText = [
      article.title,
      article.excerpt,
      article.category,
      article.categoryLabel,
      article.date,
      article.eyebrow,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return matchesCategory && (query === "" || searchableText.includes(query));
  });

  const featuredArticles = articles
    .filter((article) => article.featured)
    .slice(0, featuredLimit);
  const selectedCategoryLabel =
    selectedCategory === "all"
      ? labels.allCategoryLabel
      : categoryOptions.find((category) => category.id === selectedCategory)?.label ||
        selectedCategory;
  const isDefaultView = selectedCategory === "all" && query === "";
  const resolvedStats =
    stats ||
    buildDefaultStats(articles.length, categoryOptions.length, labels.allCategoryLabel);
  const itemListSchema = buildItemListSchema({
    articles,
    basePath,
    canonicalUrl,
    name: schemaName || labels.title,
    description: schemaDescription || labels.description,
  });

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema).replace(/</g, "\\u003c"),
          }}
        />
      </Head>

      <div className={cn("min-h-screen bg-gradient-to-b", styles.page)}>
        <section className={cn("relative overflow-hidden bg-gradient-to-br py-16 text-white", styles.hero)}>
          <div className="absolute inset-0 opacity-25">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-300 blur-3xl" />
          </div>
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.35fr_0.65fr] lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/20 backdrop-blur">
                <BookOpen className="h-4 w-4" />
                {labels.eyebrow}
              </div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
                {labels.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 md:text-xl">
                {labels.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {resolvedStats.map((stat) => (
                <div
                  key={`${stat.label}-${stat.value}`}
                  className="rounded-3xl bg-white/12 p-5 shadow-sm ring-1 ring-white/20 backdrop-blur"
                >
                  <div className="text-3xl font-black">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-white/78">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sticky top-14 z-30 border-b border-slate-200/70 bg-white/86 py-5 shadow-sm backdrop-blur-xl dark:border-slate-800 dark:bg-gray-950/86">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <label className="sr-only" htmlFor="blog-search">
                  {labels.searchPlaceholder}
                </label>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="blog-search"
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder={labels.searchPlaceholder}
                    className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 text-slate-950 outline-none transition focus:border-transparent focus:ring-4 focus:ring-blue-200 dark:border-slate-800 dark:bg-gray-900 dark:text-white dark:focus:ring-blue-900/40"
                  />
                </div>
                <div className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                  {labels.showingLabel(filteredArticles.length, articles.length)}
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                    <Filter className="h-4 w-4" />
                    {labels.filterLabel}
                  </div>
                  {!isDefaultView && (
                    <button
                      type="button"
                      onClick={resetFilters}
                      className="text-sm font-semibold text-slate-500 underline-offset-4 hover:text-slate-950 hover:underline dark:text-slate-400 dark:hover:text-white"
                    >
                      {labels.clearFiltersLabel}
                    </button>
                  )}
                </div>
                <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible">
                  <CategoryButton
                    isActive={selectedCategory === "all"}
                    label={labels.allCategoryLabel}
                    count={articles.length}
                    onClick={() => setSelectedCategory("all")}
                    styles={styles}
                  />
                  {categoryOptions.map((category) => (
                    <CategoryButton
                      key={category.id}
                      isActive={selectedCategory === category.id}
                      label={category.label}
                      count={categoryCounts[category.id] || 0}
                      onClick={() => setSelectedCategory(category.id)}
                      styles={styles}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {isDefaultView && featuredArticles.length > 0 && (
            <section className="mb-14">
              <div className="mb-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cn("rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.22em]", styles.eyebrow)}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                </span>
                <h2 className="text-2xl font-black text-slate-950 dark:text-white">
                  {labels.featuredTitle}
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {featuredArticles.map((article, index) => (
                  <ArticleCard
                    key={article.id || article.slug}
                    article={article}
                    href={buildArticleHref(basePath, article.slug)}
                    readMoreLabel={labels.readMoreLabel}
                    styles={styles}
                    featured
                    priority={index + 1}
                  />
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className={cn("text-sm font-black uppercase tracking-[0.22em]", styles.accentText)}>
                  {selectedCategoryLabel}
                </p>
                <h2 className="mt-2 text-3xl font-black text-slate-950 dark:text-white">
                  {selectedCategory === "all" ? labels.allArticlesTitle : selectedCategoryLabel}
                </h2>
              </div>
              <div className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:text-slate-200 dark:ring-slate-800">
                {filteredArticles.length} {labels.countLabel(filteredArticles.length)}
              </div>
            </div>

            {filteredArticles.length === 0 ? (
              <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-slate-800">
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                  {labels.emptyTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">
                  {labels.emptyDescription}
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className={cn("mt-6 rounded-2xl px-5 py-3 text-sm font-bold transition", styles.primary)}
                >
                  {labels.clearFiltersLabel}
                </button>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredArticles.map((article) => (
                  <ArticleCard
                    key={article.id || article.slug}
                    article={article}
                    href={buildArticleHref(basePath, article.slug)}
                    readMoreLabel={labels.readMoreLabel}
                    styles={styles}
                  />
                ))}
              </div>
            )}
          </section>

          {cta && (
            <section className={cn("mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br p-8 text-white shadow-2xl md:p-12", styles.cta)}>
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-black md:text-4xl">{cta.title}</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">{cta.description}</p>
                  {cta.note && <p className="mt-4 text-sm font-semibold text-white/72">{cta.note}</p>}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                  <a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={cta.onClick}
                    className={cn("inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-base font-black transition", styles.ctaButton)}
                  >
                    {cta.label}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  {cta.secondaryHref && cta.secondaryLabel && (
                    <Link
                      href={cta.secondaryHref}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-4 text-base font-black text-white ring-1 ring-white/20 transition hover:bg-white/15"
                    >
                      {cta.secondaryLabel}
                    </Link>
                  )}
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
}

function CategoryButton({
  isActive,
  label,
  count,
  onClick,
  styles,
}: {
  isActive: boolean;
  label: string;
  count: number;
  onClick: () => void;
  styles: (typeof themeStyles)[UnifiedBlogTheme];
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition",
        isActive
          ? styles.primary
          : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-gray-800 dark:text-slate-200 dark:hover:bg-gray-700",
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "rounded-full px-2 py-0.5 text-xs",
          isActive ? "bg-white/18 text-white" : "bg-white text-slate-600 dark:bg-gray-900 dark:text-slate-300",
        )}
      >
        {count}
      </span>
    </button>
  );
}

function ArticleCard({
  article,
  href,
  readMoreLabel,
  styles,
  featured = false,
  priority,
}: {
  article: UnifiedBlogArticle;
  href: string;
  readMoreLabel: string;
  styles: (typeof themeStyles)[UnifiedBlogTheme];
  featured?: boolean;
  priority?: number;
}) {
  const categoryLabel = article.categoryLabel || article.category;
  const readTime = article.readTime !== undefined ? String(article.readTime) : undefined;

  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-gray-900 dark:ring-slate-800",
        styles.hoverRing,
        featured && styles.ring,
      )}
    >
      <div className={cn("h-1.5 w-full", styles.primary)} />
      <article className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={cn("rounded-full px-3 py-1 text-xs font-black", styles.primarySoft)}>
            {categoryLabel}
          </span>
          {featured && priority && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              #{priority}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "line-clamp-2 text-xl font-black leading-snug text-slate-950 transition-colors dark:text-white",
            styles.titleHover,
          )}
        >
          {article.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {article.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          {article.date && (
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {article.date}
            </span>
          )}
          {readTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" />
              {readTime}
            </span>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-black dark:border-slate-800">
          <span className={styles.accentText}>{readMoreLabel}</span>
          <ArrowRight className={cn("h-4 w-4 transition group-hover:translate-x-1", styles.accentText)} />
        </div>
      </article>
    </Link>
  );
}

function buildCategoryOptions(
  articles: UnifiedBlogArticle[],
  categoryOrder: UnifiedBlogCategory[],
) {
  const labelsById = new Map<string, string>();
  const seenIds = new Set<string>();

  for (const category of categoryOrder) {
    labelsById.set(category.id, category.label);
  }

  for (const article of articles) {
    if (!labelsById.has(article.category)) {
      labelsById.set(article.category, article.categoryLabel || article.category);
    }
    seenIds.add(article.category);
  }

  const ordered = categoryOrder
    .filter((category) => seenIds.has(category.id))
    .map((category) => ({ id: category.id, label: labelsById.get(category.id) || category.label }));
  const orderedIds = new Set(ordered.map((category) => category.id));
  const remaining = Array.from(seenIds)
    .filter((id) => !orderedIds.has(id))
    .map((id) => ({ id, label: labelsById.get(id) || id }));

  return [...ordered, ...remaining];
}

function buildCategoryCounts(articles: UnifiedBlogArticle[]) {
  return articles.reduce<Record<string, number>>((counts, article) => {
    counts[article.category] = (counts[article.category] || 0) + 1;
    return counts;
  }, {});
}

function buildDefaultStats(totalArticles: number, totalCategories: number, allCategoryLabel: string) {
  return [
    { value: totalArticles, label: allCategoryLabel },
    { value: totalCategories, label: "Categories" },
    { value: "€600", label: "Max compensation" },
  ];
}

function buildArticleHref(basePath: string, slug: string) {
  if (slug.startsWith("http://") || slug.startsWith("https://")) {
    return slug;
  }

  if (slug.startsWith("/")) {
    return slug;
  }

  return `${basePath.replace(/\/$/, "")}/${slug}`;
}

function buildItemListSchema({
  articles,
  basePath,
  canonicalUrl,
  name,
  description,
}: {
  articles: UnifiedBlogArticle[];
  basePath: string;
  canonicalUrl: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    description,
    url: canonicalUrl,
    numberOfItems: articles.length,
    itemListElement: articles.map((article, index) => {
      const href = buildArticleHref(basePath, article.slug);
      return {
        "@type": "ListItem",
        position: index + 1,
        name: article.title,
        url: new URL(href, canonicalUrl).toString(),
      };
    }),
  };
}
