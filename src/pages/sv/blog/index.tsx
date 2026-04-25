import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { getSvBlogCategoryLabel } from "@/lib/blogCategoryLabels";
import { blogArticlesSv } from "@/lib/blogArticlesSv";

const canonicalUrl = "https://problemlot.com/sv/blog";

const articles: UnifiedBlogArticle[] = blogArticlesSv.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category || "Guider",
  categoryLabel: getSvBlogCategoryLabel(article.category || "Guider"),
  date: article.publishDate || article.date,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

export default function SvBlogIndex() {
  return (
    <LayoutSv>
      <SEO
        title={`Flygrättigheter blogg och guider - ${articles.length} artiklar | ProblemLot.com`}
        description={`Svenska guider om försenade och inställda flyg, SAS, Ryanair, Norwegian, EU261 och ersättning upp till 600 €. ${articles.length} artiklar.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="sv_SE"
        language="Swedish"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/sv/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        stats={[
          { value: articles.length, label: "artiklar" },
          { value: "EU261", label: "huvudfokus" },
          { value: "600 €", label: "max ersättning" },
        ]}
        labels={{
          eyebrow: "Svensk kunskapsbas",
          title: "Blogg och guider om flygrättigheter",
          description:
            "Sök efter guider om flygbolag, förseningar, inställda flyg och passagerarrättigheter. Filtren hjälper dig snabbt hitta rätt scenario.",
          searchPlaceholder: "Sök: SAS, Ryanair, försening, inställt flyg...",
          filterLabel: "Filtrera efter ämne",
          allCategoryLabel: "Alla",
          featuredTitle: "Utvalda guider",
          allArticlesTitle: "Alla artiklar",
          readMoreLabel: "Läs mer",
          emptyTitle: "Inga artiklar hittades",
          emptyDescription: "Prova en bredare sökning eller rensa filtren.",
          clearFiltersLabel: "Rensa filter",
          countLabel: (count) => (count === 1 ? "artikel" : "artiklar"),
          showingLabel: (shown, total) => `Visar ${shown} av ${total} artiklar`,
        }}
        cta={{
          title: "Vill du kontrollera din flygersättning?",
          description:
            "ClaimWinger kan kontrollera om din försening, inställda avgång eller nekade ombordstigning ger rätt till ersättning.",
          href: "https://claimwinger.com?utm_source=problemlot&utm_medium=sv_blog_index&utm_campaign=blog_cta",
          label: "Kontrollera flyget",
          note: "No win, no fee. Ingen förskottsbetalning.",
        }}
      />
    </LayoutSv>
  );
}
