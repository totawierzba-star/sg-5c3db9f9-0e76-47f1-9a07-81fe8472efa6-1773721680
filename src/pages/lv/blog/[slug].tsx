import type { GetStaticPaths, GetStaticProps } from "next";

import { LvBlogArticlePage } from "@/components/LvBlogArticlePage";
import {
  blogArticlesLv,
  getLvArticleBySlug,
  type BlogArticleLv,
} from "@/lib/blogArticlesLv";

type LatvianBlogArticleProps = {
  article: BlogArticleLv;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogArticlesLv.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<LatvianBlogArticleProps> = ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getLvArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function LatvianBlogArticle({ article }: LatvianBlogArticleProps) {
  return <LvBlogArticlePage article={article} />;
}
