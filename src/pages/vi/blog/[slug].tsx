import type { GetStaticPaths, GetStaticProps } from "next";

import { ViBlogArticlePage } from "@/components/ViBlogArticlePage";
import { getViBlogArticleBySlug, blogArticlesVi, type ViBlogArticle } from "@/lib/blogArticlesVi";

type ViBlogArticleRouteProps = {
  article: ViBlogArticle;
};

export default function ViBlogArticleRoute({ article }: ViBlogArticleRouteProps) {
  return <ViBlogArticlePage article={article} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: blogArticlesVi.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ViBlogArticleRouteProps> = async ({ params }) => {
  const slug = typeof params?.slug === "string" ? params.slug : "";
  const article = getViBlogArticleBySlug(slug);

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
