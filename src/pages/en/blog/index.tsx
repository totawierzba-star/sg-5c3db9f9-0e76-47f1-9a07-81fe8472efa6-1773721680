import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesEn } from "@/lib/blogArticlesEn";

const canonicalUrl = "https://problemlot.com/en/blog";

const categoryLabels: Record<string, string> = {
  airline: "Airlines",
  regulation: "Regulations",
  guide: "Guides",
  airport: "Airports",
  situation: "Situations",
};

const articles: UnifiedBlogArticle[] = blogArticlesEn.map((article) => ({
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

export default function BlogIndexEn() {
  return (
    <LayoutEn>
      <SEO
        title={`Flight Compensation Blog - ${articles.length} EU261 Guides | ProblemLot.com`}
        description={`Expert guides on flight delay compensation, EU261 passenger rights, cancellations, airline claims and up to €600 compensation. Browse ${articles.length} practical articles.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="en_US"
        language="English"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/en/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        categoryOrder={[
          { id: "airline", label: "Airlines" },
          { id: "regulation", label: "Regulations" },
          { id: "guide", label: "Guides" },
          { id: "airport", label: "Airports" },
          { id: "situation", label: "Situations" },
        ]}
        stats={[
          { value: articles.length, label: "expert guides" },
          { value: "EU261", label: "core regulation" },
          { value: "€600", label: "max compensation" },
        ]}
        labels={{
          eyebrow: "Passenger rights knowledge base",
          title: "Flight compensation expert blog",
          description:
            "Find practical EU261 guides by airline, airport, disruption type and claim stage. Use the search and category filters to move from a broad question to the exact compensation scenario.",
          searchPlaceholder: "Search: Ryanair, cancelled flight, 3-hour delay, EU261...",
          filterLabel: "Filter by topic",
          allCategoryLabel: "All articles",
          featuredTitle: "Start with these guides",
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
          href: "https://claimwinger.com?utm_source=problemlot&utm_medium=en_blog_index&utm_campaign=blog_cta",
          label: "Check your claim",
          note: "No upfront payment. You only pay after successful recovery.",
        }}
      />
    </LayoutEn>
  );
}
