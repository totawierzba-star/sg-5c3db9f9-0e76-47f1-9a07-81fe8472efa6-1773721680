import type { GetStaticPaths, GetStaticProps } from "next";

import { LtBlogArticlePage } from "@/components/LtBlogArticlePage";
import {
  blogArticlesLt,
  getLtArticleBySlug,
  type BlogArticleLt,
} from "@/lib/blogArticlesLt";

type LithuanianBlogArticleProps = {
  article: BlogArticleLt;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogArticlesLt.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<LithuanianBlogArticleProps> = ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getLtArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function LithuanianBlogArticle({ article }: LithuanianBlogArticleProps) {
  return <LtBlogArticlePage article={article} />;
}
