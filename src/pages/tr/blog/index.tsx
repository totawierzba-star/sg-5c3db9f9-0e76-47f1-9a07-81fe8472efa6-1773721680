import { LayoutTr } from "@/components/LayoutTr";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesTrSorted, blogCategoriesTr } from "@/lib/blogArticlesTr";

const canonicalUrl = "https://problemlot.com/tr/blog";

const articles: UnifiedBlogArticle[] = blogArticlesTrSorted.map((article) => ({
  id: article.slug,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  date: article.date,
  readTime: article.readTime,
  featured: article.featured,
}));

export default function BlogIndexTr() {
  return (
    <LayoutTr>
      <SEO
        title={`Türkçe EU261 blogu - ${articles.length} yazı | ProblemLot.com`}
        description={`Türk yolcular için uçuş gecikmesi, iptal, EU261, UK261, bagaj ve tazminat rehberleri. ${articles.length} pratik yazı.`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="tr_TR"
        language="Turkish"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/tr/blog"
        canonicalUrl={canonicalUrl}
        theme="red"
        categoryOrder={blogCategoriesTr
          .filter((category) => category !== "Tum yazilar")
          .map((category) => ({ id: category, label: category }))}
        stats={[
          { value: articles.length, label: "Türkçe yazı" },
          { value: "EU261", label: "ana odak" },
          { value: "600 €", label: "azami tazminat" },
        ]}
        labels={{
          eyebrow: "Türkçe EU261 bilgi bankası",
          title: "Gecikme, iptal ve uçuş tazminatı rehberleri",
          description:
            "Havayolu, rota, bagaj, bağlantı uçuşu veya EU261 sorusuna göre arama yapın. Filtreler, kendi durumunuza en yakın rehberi hızlı bulmanız için tasarlandı.",
          searchPlaceholder: "Ara: Turkish Airlines, gecikme, iptal, EU261...",
          filterLabel: "Konuya göre filtrele",
          allCategoryLabel: "Tüm yazılar",
          featuredTitle: "Önerilen başlangıç rehberleri",
          allArticlesTitle: "Tüm yazılar",
          readMoreLabel: "Yazıyı aç",
          emptyTitle: "Sonuç bulunamadı",
          emptyDescription: "Daha genel bir arama deneyin veya filtreleri temizleyin.",
          clearFiltersLabel: "Filtreleri temizle",
          countLabel: (count) => (count === 1 ? "yazı" : "yazı"),
          showingLabel: (shown, total) => `${shown} / ${total} yazı gösteriliyor`,
        }}
        cta={{
          title: "Uçuşunuzda sorun mu yaşadınız?",
          description:
            "Gecikme, iptal veya kaçırılan bağlantı nedeniyle tazminat hakkınız olup olmadığını kontrol edin.",
          href: "https://claimwinger.com/tr?utm_source=problemlot&utm_medium=tr_blog_index&utm_campaign=blog_cta",
          label: "Uçuşu kontrol et",
          note: "No win, no fee. Başarı yoksa ücret yok.",
        }}
      />
    </LayoutTr>
  );
}
