import type { GetStaticPaths, GetStaticProps } from "next";

import { BgBlogArticlePage } from "@/components/BgBlogArticlePage";
import {
  blogArticlesBg,
  getBgArticleBySlug,
  type BlogArticleBg,
} from "@/lib/blogArticlesBg";

type BulgarianBlogArticleProps = {
  article: BlogArticleBg;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogArticlesBg.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<BulgarianBlogArticleProps> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const article = getBgArticleBySlug(slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function BulgarianBlogArticle({ article }: BulgarianBlogArticleProps) {
  return <BgBlogArticlePage article={article} />;
}
