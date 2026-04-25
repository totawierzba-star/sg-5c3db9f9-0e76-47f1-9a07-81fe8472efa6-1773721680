import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesEn } from "@/lib/blogArticlesEn";
import {
  blogArticlesEnIrelandSorted,
  getCategoryLabelEnIreland,
} from "@/lib/blogArticlesEnIreland";
import {
  buildClaimWingerEnLink,
  trackClaimWingerEnClick,
} from "@/lib/claimwingerLinksEn";

const canonicalUrl = "https://problemlot.com/en/blog";

const categoryLabels: Record<string, string> = {
  airline: "Global airlines",
  regulation: "EU261 rules",
  guide: "General guides",
  airport: "Other airports",
  situation: "General situations",
};

const irelandArticles: UnifiedBlogArticle[] = blogArticlesEnIrelandSorted.map((article) => ({
  id: `ireland-${article.id}`,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelEnIreland(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
  eyebrow: "Ireland",
}));

const legacyArticles: UnifiedBlogArticle[] = blogArticlesEn.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: categoryLabels[article.category] || article.category,
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const articles: UnifiedBlogArticle[] = [...irelandArticles, ...legacyArticles];
const claimCheckHref = buildClaimWingerEnLink("home", {
  medium: "en_blog_index",
  campaign: "irish_passenger_blog",
  content: "bottom_cta",
});

export default function BlogIndexEn() {
  return (
    <LayoutEn>
      <SEO
        title={`Flight Compensation Blog - ${articles.length} EU261 Guides | ProblemLot.com`}
        description={`Irish passenger guides for Ryanair, Aer Lingus, Dublin Airport, Shannon, Cork, EU261, UK261 and up to €600 compensation. Browse ${articles.length} practical articles.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="en_IE"
        language="English"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/en/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        categoryOrder={[
          { id: "quickAnswers", label: "Quick answers" },
          { id: "law", label: "Irish passenger rights" },
          { id: "airlines", label: "Airlines" },
          { id: "airports", label: "Irish airports" },
          { id: "transatlantic", label: "Transatlantic routes" },
          { id: "routes", label: "European routes" },
          { id: "lot", label: "LOT Polish Airlines Ireland" },
          { id: "situations", label: "Special situations" },
          { id: "airline", label: "Global airlines" },
          { id: "regulation", label: "EU261 rules" },
          { id: "guide", label: "General guides" },
          { id: "airport", label: "Other airports" },
          { id: "situation", label: "General situations" },
        ]}
        stats={[
          { value: articles.length, label: "expert guides" },
          { value: "110", label: "Ireland guides" },
          { value: "€600", label: "max compensation" },
        ]}
        labels={{
          eyebrow: "Passenger rights knowledge base",
          title: "Flight compensation guides for Irish passengers",
          description:
            "Find practical EU261 and UK261 guides by airline, Irish airport, transatlantic route, disruption type and claim stage. Use the search and category filters to move from a broad question to the exact compensation scenario.",
          searchPlaceholder: "Search: Ryanair, Aer Lingus, Dublin, Shannon, 6 years...",
          filterLabel: "Filter by topic",
          allCategoryLabel: "All articles",
          featuredTitle: "Start with these Ireland guides",
          allArticlesTitle: "All compensation guides",
          readMoreLabel: "Read guide",
          emptyTitle: "No matching articles",
          emptyDescription: "Try a broader search term or clear the active filters.",
          clearFiltersLabel: "Clear filters",
          countLabel: (count) => (count === 1 ? "article" : "articles"),
          showingLabel: (shown, total) => `Showing ${shown} of ${total} articles`,
        }}
        cta={{
          title: "Ready to check your flight?",
          description:
            "If your flight was delayed, cancelled or overbooked, ClaimWinger can verify eligibility and handle the claim on a no-win, no-fee basis.",
          href: claimCheckHref,
          label: "Check your claim",
          note: "No upfront payment. You only pay after successful recovery.",
          onClick: () => trackClaimWingerEnClick("en_blog_index_bottom_cta", claimCheckHref),
        }}
      />
    </LayoutEn>
  );
}
