import { LayoutEt } from "@/components/LayoutEt";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import {
  blogArticlesEtSorted,
  getCategoryLabelEt,
  type BlogArticleEtCategory,
} from "@/lib/blogArticlesEt";
import {
  buildClaimWingerEtLink,
  trackClaimWingerEtClick,
} from "@/lib/claimwingerLinksEt";

const canonicalUrl = "https://problemlot.com/et/blog";
const ctaHref = buildClaimWingerEtLink("home", {
  medium: "blog_index_cta",
  campaign: "et_blog",
  content: "bottom_cta",
});

const articles: UnifiedBlogArticle[] = blogArticlesEtSorted.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelEt(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const categoryOrder: Array<{ id: BlogArticleEtCategory; label: string }> = [
  { id: "answers", label: getCategoryLabelEt("answers") },
  { id: "foundation", label: getCategoryLabelEt("foundation") },
  { id: "airlines", label: getCategoryLabelEt("airlines") },
  { id: "airports", label: getCategoryLabelEt("airports") },
  { id: "diaspora", label: getCategoryLabelEt("diaspora") },
  { id: "routes", label: getCategoryLabelEt("routes") },
  { id: "situations", label: getCategoryLabelEt("situations") },
];

export default function EstonianBlogIndex() {
  return (
    <LayoutEt>
      <SEO
        title={`${articles.length} teejuhti lennuhüvitiste kohta eesti keeles | EÜ 261 ja UK261`}
        description={`${articles.length} praktilist teejuhti Eesti reisijatele hilinenud ja tühistatud lendude kohta: EÜ 261, UK261, airBaltic, Ryanair, Tallinna lennujaam, diasporaa marsruudid ja hüvitis kuni 600 EUR.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="et_EE"
        language="Estonian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/et/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        categoryOrder={categoryOrder}
        stats={[
          { value: articles.length, label: "artiklit" },
          { value: "EU261 / UK261", label: "peamised määrused" },
          { value: "600 €", label: "maksimaalne hüvitis" },
        ]}
        labels={{
          eyebrow: "Eesti reisijate õiguste teabebaas",
          title: "Blogi hüvitisest hilinenud või tühistatud lennu eest",
          description: `${articles.length} praktilist teejuhti Eesti reisijatele: lühivastused, airBalticu ja Ryanairi juhtumid, Tallinna lennujaam, diasporaa Soomes ja Ühendkuningriigis, EÜ 261, UK261, marsruudid ja erilised reisiolukorrad.`,
          searchPlaceholder: "Otsi: EU261, airBaltic, Tallinn-London...",
          filterLabel: "Filtreeri teema järgi",
          allCategoryLabel: "Kõik",
          featuredTitle: "Soovitatud teejuhid",
          allArticlesTitle: "Kõik artiklid",
          readMoreLabel: "Loe",
          emptyTitle: "Midagi ei leitud",
          emptyDescription:
            "Proovige muuta otsingusõna või valida mõni muu teema.",
          clearFiltersLabel: "Tühjenda filtrid",
          countLabel: (count) => (count === 1 ? "artikkel" : "artiklit"),
          showingLabel: (shown, total) =>
            `Kuvatud ${shown} artiklit ${total}-st`,
        }}
        cta={{
          title: "Soovite kontrollida konkreetset lendu?",
          description:
            "ClaimWingeri vorm on saadaval eesti keeles. Seal saab ilma ettemaksuta kontrollida hilinemist, tühistamist, overbookingut või maha jäänud jätkulendu.",
          href: ctaHref,
          label: "Kontrolli ClaimWingeris",
          note: "No win, no fee. Ilma ettemaksuta.",
          onClick: () => trackClaimWingerEtClick("et_blog_index_cta", ctaHref),
        }}
      />
    </LayoutEt>
  );
}
