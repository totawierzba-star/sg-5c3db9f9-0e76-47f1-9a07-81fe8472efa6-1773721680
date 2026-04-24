import Head from "next/head";

import { LayoutVi } from "@/components/LayoutVi";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { ViSeoHead } from "@/components/ViSeoHead";
import { blogArticlesViSorted } from "@/lib/blogArticlesVi";
import {
  combineSchemas,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

const canonicalUrl = "https://problemlot.com/vi/blog";

const articles: UnifiedBlogArticle[] = blogArticlesViSorted.map((article) => ({
  id: article.slug,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.cluster,
  categoryLabel: article.cluster,
  date: article.updatedDate || article.date,
  readTime: article.readTime,
  featured: article.featured,
  eyebrow: article.heroEyebrow,
}));

export default function BlogIndexVi() {
  const schemas = combineSchemas(
    generateOrganizationSchema({ url: canonicalUrl }),
    generateWebPageSchema({
      title: `Blog EU261 tiếng Việt | ${articles.length} hướng dẫn bồi thường chuyến bay`,
      description:
        "Blog tiếng Việt về EU261 cho hành khách bay giữa châu Âu và Việt Nam: quyền lợi khi chuyến bay bị trễ, bị hủy, đổi lịch và cách kiểm tra hồ sơ bồi thường.",
      url: canonicalUrl,
      inLanguage: "vi-VN",
      type: "CollectionPage",
    }),
    generateBreadcrumbSchema([
      { name: "Trang chủ", url: "https://problemlot.com/vi" },
      { name: "Blog", url: canonicalUrl },
    ]),
  );

  return (
    <LayoutVi>
      <SEO
        title={`Blog EU261 tiếng Việt | ${articles.length} hướng dẫn bồi thường chuyến bay`}
        description="Blog tiếng Việt về EU261 cho hành khách bay giữa châu Âu và Việt Nam: delay, cancellation, transit hub, route logic và cách kiểm tra hồ sơ bồi thường."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="vi_VN"
        language="Vietnamese"
      />
      <ViSeoHead canonicalUrl={canonicalUrl} />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>
      <UnifiedBlogIndex
        articles={articles}
        basePath="/vi/blog"
        canonicalUrl={canonicalUrl}
        theme="emerald"
        stats={[
          { value: articles.length, label: "bài hướng dẫn" },
          { value: "EU261", label: "trọng tâm" },
          { value: "600 €", label: "mức tối đa" },
        ]}
        labels={{
          eyebrow: "Blog tiếng Việt cho EU261",
          title: "Trung tâm nội dung cho hành khách Việt bay qua châu Âu",
          description:
            "Tìm bài viết theo tình huống, tuyến bay, hub transit hoặc câu hỏi ngắn. Bộ lọc giúp bạn đi thẳng tới case có intent cao nhất: delay, cancellation, EU261 và long-haul.",
          searchPlaceholder: "Tìm: Air France, Frankfurt, trễ 3 giờ, hủy chuyến...",
          filterLabel: "Lọc theo cụm chủ đề",
          allCategoryLabel: "Tất cả",
          featuredTitle: "Bài nên đọc trước",
          allArticlesTitle: "Tất cả bài viết",
          readMoreLabel: "Đọc chi tiết",
          emptyTitle: "Không tìm thấy bài viết",
          emptyDescription: "Hãy thử từ khóa rộng hơn hoặc xóa bộ lọc.",
          clearFiltersLabel: "Xóa bộ lọc",
          countLabel: () => "bài viết",
          showingLabel: (shown, total) => `Đang hiển thị ${shown} / ${total} bài viết`,
        }}
        cta={{
          title: "Bạn muốn kiểm tra chuyến bay của mình?",
          description:
            "ClaimWinger có thể kiểm tra nhanh khả năng bồi thường theo EU261 cho chuyến bay bị trễ, bị hủy hoặc lỡ nối chuyến.",
          href: "https://claimwinger.com/vi?utm_source=problemlot&utm_medium=vi_blog_index&utm_campaign=blog_cta",
          label: "Kiểm tra hồ sơ",
          note: "No win, no fee. Chỉ trả phí khi hồ sơ thành công.",
        }}
      />
    </LayoutVi>
  );
}
