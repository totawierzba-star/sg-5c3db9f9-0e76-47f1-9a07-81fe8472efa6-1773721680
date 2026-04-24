import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesZhSorted, blogCategoriesZh } from "@/lib/blogArticlesZh";

const canonicalUrl = "https://problemlot.com/zh/blog";

const articles: UnifiedBlogArticle[] = blogArticlesZhSorted.map((article) => ({
  id: article.slug,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  date: article.date,
  readTime: article.readTime,
  featured: article.featured,
}));

export default function BlogIndexZh() {
  return (
    <LayoutZh>
      <SEO
        title={`中文航班索赔博客 - ${articles.length} 篇 EU261 指南 | ProblemLot.com`}
        description={`面向中文乘客的 EU261、航班延误、取消、转机失败、航空公司和机场索赔指南。共 ${articles.length} 篇实用文章。`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="zh_CN"
        language="Chinese"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/zh/blog"
        canonicalUrl={canonicalUrl}
        theme="blue"
        categoryOrder={blogCategoriesZh
          .filter((category) => category !== "全部文章")
          .map((category) => ({ id: category, label: category }))}
        stats={[
          { value: articles.length, label: "深度文章" },
          { value: "EU261", label: "核心主题" },
          { value: "600 €", label: "最高赔偿" },
        ]}
        labels={{
          eyebrow: "中文航班赔偿知识库",
          title: "面向中文乘客的欧洲航班索赔博客",
          description:
            "按航空公司、机场、路线、转机或具体问题查找文章。搜索和筛选帮助您快速判断航班是否可能符合 EU261 或 UK261 赔偿条件。",
          searchPlaceholder: "搜索：国航、浦东、转机、延误 3 小时、EU261...",
          filterLabel: "按主题筛选",
          allCategoryLabel: "全部文章",
          featuredTitle: "推荐先读",
          allArticlesTitle: "全部文章",
          readMoreLabel: "阅读全文",
          emptyTitle: "没有匹配结果",
          emptyDescription: "请尝试更宽泛的关键词，或清除筛选条件。",
          clearFiltersLabel: "清除筛选",
          countLabel: () => "篇文章",
          showingLabel: (shown, total) => `显示 ${shown} / ${total} 篇文章`,
        }}
        cta={{
          title: "您的航班遇到问题了吗？",
          description:
            "阅读指南后，下一步可以检查自己的航班是否满足延误、取消或转机失败的赔偿条件。",
          href: "https://claimwinger.com/zh?utm_source=problemlot&utm_medium=zh_blog_index&utm_campaign=blog_cta",
          label: "免费检查航班",
          note: "No win, no fee. 成功后才收费。",
        }}
      />
    </LayoutZh>
  );
}
