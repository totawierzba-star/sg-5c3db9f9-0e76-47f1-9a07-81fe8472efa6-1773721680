import { LayoutLv } from "@/components/LayoutLv";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import {
  blogArticlesLvSorted,
  getCategoryLabelLv,
  type BlogArticleLvCategory,
} from "@/lib/blogArticlesLv";
import {
  buildClaimWingerLvLink,
  trackClaimWingerLvClick,
} from "@/lib/claimwingerLinksLv";

const canonicalUrl = "https://problemlot.com/lv/blog";
const ctaHref = buildClaimWingerLvLink("home", {
  medium: "blog_index_cta",
  campaign: "lv_blog",
  content: "bottom_cta",
});

const articles: UnifiedBlogArticle[] = blogArticlesLvSorted.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelLv(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const categoryOrder: Array<{ id: BlogArticleLvCategory; label: string }> = [
  { id: "answers", label: getCategoryLabelLv("answers") },
  { id: "foundation", label: getCategoryLabelLv("foundation") },
  { id: "airlines", label: getCategoryLabelLv("airlines") },
  { id: "airports", label: getCategoryLabelLv("airports") },
  { id: "diaspora", label: getCategoryLabelLv("diaspora") },
  { id: "routes", label: getCategoryLabelLv("routes") },
  { id: "situations", label: getCategoryLabelLv("situations") },
];

export default function LatvianBlogIndex() {
  return (
    <LayoutLv>
      <SEO
        title={`${articles.length} ceļveži par lidojumu kompensācijām latviski | EK 261 un UK261`}
        description="95 praktiski ceļveži Latvijas pasažieriem par kavētiem un atceltiem lidojumiem, EK 261, UK261, airBaltic, Ryanair, Rīgas lidostu, diasporas maršrutiem un kompensāciju līdz 600 EUR."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="lv_LV"
        language="Latvian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/lv/blog"
        canonicalUrl={canonicalUrl}
        theme="red"
        categoryOrder={categoryOrder}
        stats={[
          { value: articles.length, label: "rakstu" },
          { value: "EU261 / UK261", label: "galvenie noteikumi" },
          { value: "600 €", label: "maksimālā kompensācija" },
        ]}
        labels={{
          eyebrow: "Latviešu pasažieru tiesību bāze",
          title: "Blogs par kompensāciju par kavētu vai atceltu lidojumu",
          description:
            "95 praktiski ceļveži Latvijas pasažieriem: īsās atbildes, airBaltic un Ryanair gadījumi, Rīgas lidosta, diaspora UK/Īrijā, EK 261, UK261, maršruti un īpašas ceļošanas situācijas.",
          searchPlaceholder: "Meklēt: EU261, airBaltic, Rīga-Londona...",
          filterLabel: "Filtrēt pēc tēmas",
          allCategoryLabel: "Visi",
          featuredTitle: "Ieteiktie ceļveži",
          allArticlesTitle: "Visi raksti",
          readMoreLabel: "Lasīt",
          emptyTitle: "Nekas nav atrasts",
          emptyDescription:
            "Pamēģiniet mainīt meklēšanas frāzi vai izvēlēties citu tēmu.",
          clearFiltersLabel: "Notīrīt filtrus",
          countLabel: (count) => (count === 1 ? "raksts" : "raksti"),
          showingLabel: (shown, total) => `Rādīti ${shown} no ${total} rakstiem`,
        }}
        cta={{
          title: "Vēlaties pārbaudīt konkrētu lidojumu?",
          description:
            "ClaimWinger pagaidām nav atsevišķas latviešu versijas, tāpēc izmantojam angļu formu. Tajā var pārbaudīt kavēšanos, atcelšanu, overbooking vai nokavētu savienojumu bez avansa maksas.",
          href: ctaHref,
          label: "Pārbaudīt ClaimWinger",
          note: "No win, no fee. Bez avansa maksas.",
          onClick: () => trackClaimWingerLvClick("lv_blog_index_cta", ctaHref),
        }}
      />
    </LayoutLv>
  );
}
