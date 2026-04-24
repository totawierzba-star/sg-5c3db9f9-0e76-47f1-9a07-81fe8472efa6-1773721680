import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesHuSorted, blogCategoriesHu } from "@/lib/blogArticlesHu";
import { cleanHuText, formatHuCategory } from "@/lib/huArticleContent";

const canonicalUrl = "https://problemlot.com/hu/blog";

const articles: UnifiedBlogArticle[] = blogArticlesHuSorted.map((article) => ({
  id: article.slug,
  title: cleanHuText(article.title),
  slug: article.slug,
  excerpt: cleanHuText(article.excerpt),
  category: article.category,
  categoryLabel: formatHuCategory(article.category),
  date: article.date,
  readTime: article.readTime,
  featured: article.featured,
}));

export default function BlogIndexHu() {
  return (
    <LayoutHu>
      <SEO
        title={`Magyar EU261 blog - ${articles.length} útmutató | ProblemLot.com`}
        description={`Magyar útmutatók járatkésésről, törölt járatról, EU261-ről, légitársaságokról és kártérítésről. ${articles.length} gyakorlati cikk egy helyen.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="hu_HU"
        language="Hungarian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/hu/blog"
        canonicalUrl={canonicalUrl}
        theme="violet"
        categoryOrder={blogCategoriesHu
          .filter((category) => category !== "Osszes cikk")
          .map((category) => ({ id: category, label: formatHuCategory(category) }))}
        stats={[
          { value: articles.length, label: "útmutató" },
          { value: "EU261", label: "fő téma" },
          { value: "600 €", label: "max. kártérítés" },
        ]}
        labels={{
          eyebrow: "Magyar EU261 tudásbázis",
          title: "Járatkártérítési blog magyar utasoknak",
          description:
            "Keress légitársaság, repülőtér, útvonal vagy probléma szerint. A szűrők segítenek gyorsan megtalálni azt az útmutatót, amely a saját járatodhoz legközelebb áll.",
          searchPlaceholder: "Keresés: Wizz Air, késés, törölt járat, EU261...",
          filterLabel: "Szűrés téma szerint",
          allCategoryLabel: "Összes cikk",
          featuredTitle: "Kiemelt útmutatók",
          allArticlesTitle: "Minden cikk",
          readMoreLabel: "Cikk megnyitása",
          emptyTitle: "Nincs találat",
          emptyDescription: "Próbálj rövidebb keresést, vagy töröld a szűrőket.",
          clearFiltersLabel: "Szűrők törlése",
          countLabel: (count) => (count === 1 ? "cikk" : "cikk"),
          showingLabel: (shown, total) => `${shown} / ${total} cikk megjelenítve`,
        }}
        cta={{
          title: "Szeretnéd ellenőrizni a járatodat?",
          description:
            "A ClaimWinger segít megállapítani, járhat-e kártérítés késés, törlés vagy lekésett csatlakozás esetén.",
          href: "https://claimwinger.com/hu?utm_source=problemlot&utm_medium=hu_blog_index&utm_campaign=blog_cta",
          label: "Járat ellenőrzése",
          note: "No win, no fee. Előre nem kell fizetned.",
        }}
      />
    </LayoutHu>
  );
}
