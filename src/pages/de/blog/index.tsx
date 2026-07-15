import { LayoutDe } from "@/components/LayoutDe";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import {
  blogArticlesDeSorted,
  getCategoryLabelDe,
  type BlogArticleDeCategory,
} from "@/lib/blogArticlesDe";
import {
  buildClaimWingerDeLink,
  trackClaimWingerDeClick,
} from "@/lib/claimwingerLinksDe";

const canonicalUrl = "https://problemlot.com/de/blog";
const ctaHref = buildClaimWingerDeLink("home", {
  medium: "blog_index_cta",
  campaign: "de_blog",
  content: "bottom_cta",
});

const articles: UnifiedBlogArticle[] = blogArticlesDeSorted.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelDe(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const categoryOrder: Array<{ id: BlogArticleDeCategory; label: string }> = [
  { id: "answers", label: getCategoryLabelDe("answers") },
  { id: "foundation", label: getCategoryLabelDe("foundation") },
  { id: "airlines", label: getCategoryLabelDe("airlines") },
  { id: "airports", label: getCategoryLabelDe("airports") },
  { id: "diaspora", label: getCategoryLabelDe("diaspora") },
  { id: "routes", label: getCategoryLabelDe("routes") },
  { id: "situations", label: getCategoryLabelDe("situations") },
];

export default function GermanBlogIndex() {
  return (
    <LayoutDe>
      <SEO
        title={`${articles.length} Ratgeber zur Entschädigung bei Flugverspätung und Annullierung | EU261 und UK261`}
        description={`${articles.length} praktische Ratgeber für Fluggäste aus Deutschland: Entschädigung bei Flugverspätung und Annullierung nach EU261 und UK261, LOT Polish Airlines, Lufthansa, Ryanair, Flughäfen und bis zu 600 EUR Entschädigung.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="de_DE"
        language="German"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/de/blog"
        canonicalUrl={canonicalUrl}
        theme="amber"
        categoryOrder={categoryOrder}
        stats={[
          { value: articles.length, label: "Artikel" },
          { value: "EU261 / UK261", label: "wichtigste Verordnungen" },
          { value: "600 €", label: "maximale Entschädigung" },
        ]}
        labels={{
          eyebrow: "Wissensdatenbank zu Fluggastrechten auf Deutsch",
          title:
            "Blog zur Entschädigung bei Flugverspätung und Annullierung",
          description: `${articles.length} praktische Ratgeber für Fluggäste: kurze Antworten, Fälle mit LOT Polish Airlines, Lufthansa und Ryanair, Flughäfen, EU261, UK261, Routen und besondere Reisesituationen.`,
          searchPlaceholder: "Suchen: EU261, LOT, Frankfurt-Warschau...",
          filterLabel: "Nach Thema filtern",
          allCategoryLabel: "Alle",
          featuredTitle: "Empfohlene Ratgeber",
          allArticlesTitle: "Alle Artikel",
          readMoreLabel: "Lesen",
          emptyTitle: "Nichts gefunden",
          emptyDescription:
            "Versuchen Sie einen anderen Suchbegriff oder wählen Sie ein anderes Thema.",
          clearFiltersLabel: "Filter zurücksetzen",
          countLabel: () => "Artikel",
          showingLabel: (shown, total) =>
            `${shown} von ${total} Artikeln angezeigt`,
        }}
        cta={{
          title: "Möchten Sie einen konkreten Flug prüfen?",
          description:
            "Das ClaimWinger-Formular ist auf Deutsch verfügbar. Dort können Sie ohne Vorauszahlung Verspätung, Annullierung, Overbooking oder einen verpassten Anschlussflug prüfen.",
          href: ctaHref,
          label: "Bei ClaimWinger prüfen",
          note: "No win, no fee. Ohne Vorauszahlung.",
          onClick: () => trackClaimWingerDeClick("de_blog_index_cta", ctaHref),
        }}
      />
    </LayoutDe>
  );
}
