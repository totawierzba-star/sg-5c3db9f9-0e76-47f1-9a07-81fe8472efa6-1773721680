import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesSk, getCategoryLabelSk } from "@/lib/blogArticlesSk";

const canonicalUrl = "https://problemlot.com/sk/blog";

const articles: UnifiedBlogArticle[] = blogArticlesSk.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelSk(article.category),
  date: article.publishDate,
  readTime: `${article.readTime} min`,
  wordCount: article.wordCount,
  featured: article.featured,
  eyebrow: article.airlineName || article.airportCode || article.flag,
}));

export default function BlogIndexSk() {
  return (
    <LayoutSk>
      <SEO
        title={`Blog a príručky pre cestujúcich - ${articles.length} článkov | ProblemLot.com`}
        description={`Slovenské návody k EU261, meškaniu, zrušeniu letu, batožine, aerolinkám a letiskám. ${articles.length} praktických článkov pre cestujúcich.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="sk_SK"
        language="Slovak"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/sk/blog"
        canonicalUrl={canonicalUrl}
        theme="sky"
        categoryOrder={[
          { id: "foundation", label: "Základy" },
          { id: "airline", label: "Letecké spoločnosti" },
          { id: "airport", label: "Letiská" },
          { id: "longtail", label: "Špeciálne prípady" },
        ]}
        stats={[
          { value: articles.length, label: "článkov" },
          { value: "EU261", label: "hlavná téma" },
          { value: "600 €", label: "max. kompenzácia" },
        ]}
        labels={{
          eyebrow: "Slovenské centrum pomoci",
          title: "Blog o právach cestujúcich a odškodnení za let",
          description:
            "Vyhľadajte článok podľa aerolinky, letiska, typu problému alebo konkrétnej otázky. Každá príručka pomáha rýchlo pochopiť nárok a ďalší krok.",
          searchPlaceholder: "Hľadať: Wizz Air, Viedeň, meškanie, zrušený let...",
          filterLabel: "Filtrovať podľa témy",
          allCategoryLabel: "Všetky",
          featuredTitle: "Odporúčané príručky",
          allArticlesTitle: "Všetky články",
          readMoreLabel: "Čítať viac",
          emptyTitle: "Nenašli sa žiadne články",
          emptyDescription: "Skúste všeobecnejší výraz alebo vymažte filtre.",
          clearFiltersLabel: "Vymazať filtre",
          countLabel: (count) => (count === 1 ? "článok" : count >= 2 && count <= 4 ? "články" : "článkov"),
          showingLabel: (shown, total) => `Zobrazené ${shown} z ${total} článkov`,
        }}
        cta={{
          title: "Chcete overiť svoj let?",
          description:
            "Zistite, či môžete získať kompenzáciu za meškanie, zrušenie alebo zmeškaný prestup.",
          href: "https://claimwinger.com?utm_source=problemlot&utm_medium=sk_blog_index&utm_campaign=blog_cta",
          label: "Skontrolovať nárok",
          note: "Bez platby vopred. Platíte iba pri úspechu.",
        }}
      />
    </LayoutSk>
  );
}
