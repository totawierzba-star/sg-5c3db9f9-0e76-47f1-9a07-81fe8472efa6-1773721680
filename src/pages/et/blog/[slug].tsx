import type { GetStaticPaths, GetStaticProps } from "next";

import { EtBlogArticlePage } from "@/components/EtBlogArticlePage";
import {
  blogArticlesEt,
  getEtArticleBySlug,
  type BlogArticleEt,
} from "@/lib/blogArticlesEt";

type EstonianBlogArticleProps = {
  article: BlogArticleEt;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogArticlesEt.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<EstonianBlogArticleProps> = ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getEtArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function EstonianBlogArticle({ article }: EstonianBlogArticleProps) {
  return <EtBlogArticlePage article={article} />;
}
