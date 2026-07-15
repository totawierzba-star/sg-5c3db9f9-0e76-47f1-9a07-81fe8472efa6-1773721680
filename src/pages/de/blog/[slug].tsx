import type { GetStaticPaths, GetStaticProps } from "next";

import { DeBlogArticlePage } from "@/components/DeBlogArticlePage";
import {
  blogArticlesDe,
  getDeArticleBySlug,
  type BlogArticleDe,
} from "@/lib/blogArticlesDe";

type GermanBlogArticleProps = {
  article: BlogArticleDe;
};

export const getStaticPaths: GetStaticPaths = () => ({
  paths: blogArticlesDe.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<GermanBlogArticleProps> = ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getDeArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function GermanBlogArticle({ article }: GermanBlogArticleProps) {
  return <DeBlogArticlePage article={article} />;
}
