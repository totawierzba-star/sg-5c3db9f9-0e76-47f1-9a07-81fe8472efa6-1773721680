import { LayoutNo } from "@/components/LayoutNo";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesNo } from "@/lib/blogArticlesNo";

const canonicalUrl = "https://problemlot.com/no/blog";

const articles: UnifiedBlogArticle[] = blogArticlesNo.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category || "Guider",
  date: article.publishDate || article.date,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

export default function BlogIndexNo() {
  return (
    <LayoutNo>
      <SEO
        title={`Blogg om passasjerrettigheter - ${articles.length} guider | ProblemLot.com`}
        description={`Norske guider om flyforsinkelser, innstillinger, EU261, Norwegian, SAS, Ryanair og erstatning på opptil 600 €. ${articles.length} artikler.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="nb_NO"
        language="Norwegian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/no/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        stats={[
          { value: articles.length, label: "artikler" },
          { value: "EU261", label: "hovedtema" },
          { value: "600 €", label: "maks erstatning" },
        ]}
        labels={{
          eyebrow: "Norsk kunnskapsbase",
          title: "Kunnskapsbase og guider for flypassasjerer",
          description:
            "Finn riktig guide etter flyselskap, problemtype eller spørsmål. Bloggen hjelper deg å forstå når du kan kreve erstatning, refusjon eller hjelp fra flyselskapet.",
          searchPlaceholder: "Søk: Norwegian, SAS, forsinkelse, kansellert fly...",
          filterLabel: "Filtrer etter tema",
          allCategoryLabel: "Alle",
          featuredTitle: "Anbefalte guider",
          allArticlesTitle: "Alle artikler",
          readMoreLabel: "Les mer",
          emptyTitle: "Ingen artikler funnet",
          emptyDescription: "Prøv et bredere søk eller fjern filtrene.",
          clearFiltersLabel: "Nullstill filtre",
          countLabel: (count) => (count === 1 ? "artikkel" : "artikler"),
          showingLabel: (shown, total) => `Viser ${shown} av ${total} artikler`,
        }}
        cta={{
          title: "Har flyet ditt blitt forsinket eller kansellert?",
          description:
            "Sjekk om du kan ha krav på erstatning etter EU261. Det tar kort tid og du betaler bare ved suksess.",
          href: "https://claimwinger.com?utm_source=problemlot&utm_medium=no_blog_index&utm_campaign=blog_cta",
          label: "Sjekk kravet ditt",
          note: "No win, no fee. Ingen forskuddsbetaling.",
        }}
      />
    </LayoutNo>
  );
}
