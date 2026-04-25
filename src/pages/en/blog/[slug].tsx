import type { GetStaticPaths, GetStaticProps } from "next";

import { EnIrelandBlogArticlePage } from "@/components/EnIrelandBlogArticlePage";
import {
  blogArticlesEnIreland,
  getEnIrelandArticleBySlug,
  type BlogArticleEnIreland,
} from "@/lib/blogArticlesEnIreland";

type EnIrelandBlogArticleProps = {
  article: BlogArticleEnIreland;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogArticlesEnIreland.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<EnIrelandBlogArticleProps> = ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getEnIrelandArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function EnIrelandBlogArticle({ article }: EnIrelandBlogArticleProps) {
  return <EnIrelandBlogArticlePage article={article} />;
}
