import { LayoutSr } from "@/components/LayoutSr";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import {
  blogArticlesSr,
  getCategoryLabelSr,
  type BlogArticleSrCategory,
} from "@/lib/blogArticlesSr";
import {
  buildClaimWingerSrLink,
  trackClaimWingerSrClick,
} from "@/lib/claimwingerLinksSr";

const canonicalUrl = "https://problemlot.com/sr/blog";
const ctaHref = buildClaimWingerSrLink("home", {
  medium: "blog_index_cta",
  campaign: "sr_blog",
  content: "bottom_cta",
});

const articles: UnifiedBlogArticle[] = blogArticlesSr.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelSr(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const categoryOrder: Array<{ id: BlogArticleSrCategory; label: string }> = [
  { id: "snippet", label: getCategoryLabelSr("snippet") },
  { id: "foundation", label: getCategoryLabelSr("foundation") },
  { id: "airline", label: getCategoryLabelSr("airline") },
  { id: "airport", label: getCategoryLabelSr("airport") },
  { id: "route", label: getCategoryLabelSr("route") },
  { id: "diaspora", label: getCategoryLabelSr("diaspora") },
  { id: "special", label: getCategoryLabelSr("special") },
];

export default function SerbianBlogIndex() {
  return (
    <LayoutSr>
      <SEO
        title={`Blog o obeštećenju za let - ${articles.length} EU261 članaka | ProblemLot.com`}
        description="Srpski blog o pravima putnika: kašnjenje leta, otkazan let, Uredba EU 261, UK261, Air Serbia, Wizz Air, Ryanair, aerodromi, rute i obeštećenje do 600 €."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="sr_RS"
        language="Serbian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/sr/blog"
        canonicalUrl={canonicalUrl}
        theme="sky"
        categoryOrder={categoryOrder}
        stats={[
          { value: articles.length, label: "članaka" },
          { value: "EU261 / UK261", label: "osnovna pravila" },
          { value: "600 €", label: "maksimalno obeštećenje" },
        ]}
        labels={{
          eyebrow: "Srpska baza znanja za putnike",
          title: "Blog o obeštećenju za kašnjenje leta ili otkazan let",
          description:
            "Praktični vodiči za putnike iz Srbije i dijasporu: kratki odgovori, avio-kompanije, aerodromi, rute Beč–Beograd, Cirih–Beograd i Frankfurt–Beograd, UK261 posle Bregzita i posebne situacije po Uredbi EU 261.",
          searchPlaceholder: "Pretraga: EU261, Wizz Air, Air Serbia, Beč-Beograd...",
          filterLabel: "Filtriranje po temi",
          allCategoryLabel: "Sve",
          featuredTitle: "Preporučeni vodiči",
          allArticlesTitle: "Svi članci",
          readMoreLabel: "Pročitajte",
          emptyTitle: "Nema pronađenih članaka",
          emptyDescription: "Pokušajte sa opštijim pojmom ili obrišite filtere.",
          clearFiltersLabel: "Obrišite filtere",
          countLabel: (count) => (count === 1 ? "članak" : "članaka"),
          showingLabel: (shown, total) => `Prikazano ${shown} od ${total} članaka`,
        }}
        cta={{
          title: "Želite da proverite konkretan let?",
          description:
            "ClaimWinger još uvek nema posebnu srpsku verziju, pa se koristi formular na engleskom jeziku. Možete proveriti kašnjenje leta, otkazan let, overbooking ili propuštenu vezu bez plaćanja unapred.",
          href: ctaHref,
          label: "Proverite u ClaimWinger-u",
          note: "No win, no fee. Nema unapred plaćene naknade.",
          onClick: () => trackClaimWingerSrClick("sr_blog_index_cta", ctaHref),
        }}
      />
    </LayoutSr>
  );
}
