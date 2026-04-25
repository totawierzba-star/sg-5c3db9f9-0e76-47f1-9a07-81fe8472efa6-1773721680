import { LayoutLt } from "@/components/LayoutLt";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import {
  blogArticlesLtSorted,
  getCategoryLabelLt,
  type BlogArticleLtCategory,
} from "@/lib/blogArticlesLt";
import {
  buildClaimWingerLtLink,
  trackClaimWingerLtClick,
} from "@/lib/claimwingerLinksLt";

const canonicalUrl = "https://problemlot.com/lt/blog";
const ctaHref = buildClaimWingerLtLink("home", {
  medium: "blog_index_cta",
  campaign: "lt_blog",
  content: "bottom_cta",
});

const articles: UnifiedBlogArticle[] = blogArticlesLtSorted.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelLt(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const categoryOrder: Array<{ id: BlogArticleLtCategory; label: string }> = [
  { id: "answers", label: getCategoryLabelLt("answers") },
  { id: "foundation", label: getCategoryLabelLt("foundation") },
  { id: "airlines", label: getCategoryLabelLt("airlines") },
  { id: "airports", label: getCategoryLabelLt("airports") },
  { id: "diaspora", label: getCategoryLabelLt("diaspora") },
  { id: "routes", label: getCategoryLabelLt("routes") },
  { id: "situations", label: getCategoryLabelLt("situations") },
];

export default function LithuanianBlogIndex() {
  return (
    <LayoutLt>
      <SEO
        title={`${articles.length} gidai apie skrydžių kompensacijas lietuviškai | EB 261 ir UK261`}
        description="95 praktiniai gidai lietuviams apie vėluojančius ir atšauktus skrydžius, EB 261, UK261, oro linijas, oro uostus, diasporos maršrutus ir kompensaciją iki 600 eurų."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="lt_LT"
        language="Lithuanian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/lt/blog"
        canonicalUrl={canonicalUrl}
        theme="emerald"
        categoryOrder={categoryOrder}
        stats={[
          { value: articles.length, label: "straipsnių" },
          { value: "EB 261 / UK261", label: "pagrindinės taisyklės" },
          { value: "600 €", label: "maksimali kompensacija" },
        ]}
        labels={{
          eyebrow: "Lietuviška keleivių teisių bazė",
          title: "Blogas apie kompensaciją už vėluojantį ar atšauktą skrydį",
          description:
            "95 praktiniai gidai Lietuvos keleiviams: trumpi atsakymai, oro linijos, oro uostai, maršrutai, EB 261, UK261, diasporos skrydžiai ir specialios kelionės situacijos.",
          searchPlaceholder: "Ieškoti: EB 261, Ryanair, Vilnius-Londonas...",
          filterLabel: "Filtruoti pagal temą",
          allCategoryLabel: "Visi",
          featuredTitle: "Rekomenduojami gidai",
          allArticlesTitle: "Visi straipsniai",
          readMoreLabel: "Skaityti",
          emptyTitle: "Nieko nerasta",
          emptyDescription:
            "Pabandykite pakeisti paieškos frazę arba pasirinkti kitą temą.",
          clearFiltersLabel: "Išvalyti filtrus",
          countLabel: (count) => (count === 1 ? "straipsnis" : "straipsniai"),
          showingLabel: (shown, total) => `Rodoma ${shown} iš ${total} straipsnių`,
        }}
        cta={{
          title: "Norite patikrinti konkretų skrydį?",
          description:
            "ClaimWinger kol kas neturi atskiros lietuviškos versijos, todėl naudojame anglišką formą. Joje galite patikrinti vėlavimą, atšaukimą, overbooking arba praleistą persėdimą be išankstinio mokesčio.",
          href: ctaHref,
          label: "Patikrinti ClaimWinger",
          note: "No win, no fee. Be išankstinio mokesčio.",
          onClick: () => trackClaimWingerLtClick("lt_blog_index_cta", ctaHref),
        }}
      />
    </LayoutLt>
  );
}
