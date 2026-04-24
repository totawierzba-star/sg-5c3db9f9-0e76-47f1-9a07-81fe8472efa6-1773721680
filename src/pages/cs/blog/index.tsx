import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesCs, getCategoryLabelCs } from "@/lib/blogArticlesCs";

const canonicalUrl = "https://problemlot.com/cs/blog";

const articles: UnifiedBlogArticle[] = blogArticlesCs.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelCs(article.category),
  date: article.publishDate,
  readTime: `${article.readTime} min`,
  wordCount: article.wordCount,
  featured: article.featured,
  eyebrow: article.airportCode || article.airlineCode || article.flag,
}));

export default function CsBlogIndex() {
  return (
    <LayoutCs>
      <SEO
        title={`Blog o kompenzacích za lety - ${articles.length} průvodců | ProblemLot.com`}
        description={`České průvodce EU261 pro zpožděné a zrušené lety, letiště, aerolinky a praktické reklamace. ${articles.length} článků pro cestující.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="cs_CZ"
        language="Czech"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/cs/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        categoryOrder={[
          { id: "foundation", label: "Základy" },
          { id: "airline", label: "Aerolinky" },
          { id: "airport", label: "Letiště" },
          { id: "situations", label: "Situace" },
          { id: "legal", label: "Právní kroky" },
        ]}
        stats={[
          { value: articles.length, label: "průvodců" },
          { value: "EU261", label: "práva cestujících" },
          { value: "600 €", label: "max. kompenzace" },
        ]}
        labels={{
          eyebrow: "Česká znalostní báze EU261",
          title: "Průvodce kompenzacemi za lety",
          description:
            "Rychle najděte článek podle letiště, aerolinky nebo typu problému. Každý průvodce je napsaný pro praktické rozhodnutí: zda máte nárok a co udělat dál.",
          searchPlaceholder: "Hledat: Praha, Ryanair, zpoždění, zrušený let...",
          filterLabel: "Filtrovat podle tématu",
          allCategoryLabel: "Vše",
          featuredTitle: "Doporučené průvodce",
          allArticlesTitle: "Všechny články",
          readMoreLabel: "Číst průvodce",
          emptyTitle: "Žádné odpovídající články",
          emptyDescription: "Zkuste kratší dotaz nebo zobrazte všechny kategorie.",
          clearFiltersLabel: "Vymazat filtry",
          countLabel: (count) => (count === 1 ? "článek" : count >= 2 && count <= 4 ? "články" : "článků"),
          showingLabel: (shown, total) => `Zobrazeno ${shown} z ${total} článků`,
        }}
        cta={{
          title: "Máte zpožděný nebo zrušený let?",
          description:
            "Nechte si zdarma ověřit, zda můžete získat kompenzaci podle EU261. ClaimWinger pracuje v modelu no win, no fee.",
          href: "https://claimwinger.com?utm_source=problemlot&utm_medium=cs_blog_index&utm_campaign=blog_cta",
          label: "Zkontrolovat let",
          note: "Bez platby předem. Platíte pouze při úspěchu.",
        }}
      />
    </LayoutCs>
  );
}
