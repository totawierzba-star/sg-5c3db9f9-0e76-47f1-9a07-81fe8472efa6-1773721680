import type { GetStaticPaths, GetStaticProps } from "next";

import { JaBlogArticlePage } from "@/components/JaBlogArticlePage";
import {
  blogArticlesJa,
  getJaArticleBySlug,
  type BlogArticleJa,
} from "@/lib/blogArticlesJa";

type JapaneseBlogArticleProps = {
  article: BlogArticleJa;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogArticlesJa.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<JapaneseBlogArticleProps> = ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getJaArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function JapaneseBlogArticle({ article }: JapaneseBlogArticleProps) {
  return <JaBlogArticlePage article={article} />;
}
