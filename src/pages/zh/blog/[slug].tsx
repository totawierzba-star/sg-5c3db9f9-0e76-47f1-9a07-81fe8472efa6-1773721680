import { GetStaticPaths, GetStaticProps } from "next";
import { SEO } from "@/components/SEO";
import { LayoutZh } from "@/components/LayoutZh";
import { ReactNode } from "react";

interface BlogArticle {
  slug: string;
  title: string;
  description: string;
  content: ReactNode;
  publishedDate: string;
  author: string;
}

interface BlogPostPageProps {
  article: BlogArticle;
}

export default function BlogPostPage({ article }: BlogPostPageProps) {
  return (
    <LayoutZh>
      <SEO
        title={article.title}
        description={article.description}
        url={`https://problemlot.com/zh/blog/${article.slug}`}
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <article className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
                <span>作者：{article.author}</span>
                <span>•</span>
                <time>{article.publishedDate}</time>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {article.content}
            </div>

            {/* CTA Section */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl shadow-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                您的航班也有问题吗？
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                检查您是否有权获得赔偿
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                检查我的赔偿
              </a>
              <p className="mt-4 text-sm text-blue-100">
                无风险 – 只在成功时付款
              </p>
            </div>
          </div>
        </article>
      </div>
    </LayoutZh>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = ["article-1"];

  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const slug = params?.slug as string;

  const articles: Record<string, BlogArticle> = {
    "article-1": {
      slug: "article-1",
      title: "我的航班被取消了 – 一位乘客的故事",
      description: "阅读一位乘客如何在航班取消后成功获得赔偿的故事。",
      publishedDate: "2026-01-30",
      author: "ProblemLot.com 团队",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            [在此处插入您的文章内容]
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            这是一个示例占位符。当您提供文章内容时，它将被替换。
          </p>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8">
            为什么选择 ClaimWinger？
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            ClaimWinger 是帮助航空乘客获得延误和取消航班赔偿的领先平台。
          </p>
        </div>
      ),
    },
  };

  const article = articles[slug];

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
};