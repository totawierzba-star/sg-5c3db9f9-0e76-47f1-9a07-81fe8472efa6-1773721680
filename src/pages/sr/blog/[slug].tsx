import type { GetStaticPaths, GetStaticProps } from "next";

import { SrBlogArticlePage } from "@/components/SrBlogArticlePage";
import {
  blogArticlesSr,
  getSrArticleBySlug,
  type BlogArticleSr,
} from "@/lib/blogArticlesSr";

type SerbianBlogArticleProps = {
  article: BlogArticleSr;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogArticlesSr.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<SerbianBlogArticleProps> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const article = getSrArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function SerbianBlogArticle({ article }: SerbianBlogArticleProps) {
  return <SrBlogArticlePage article={article} />;
}
