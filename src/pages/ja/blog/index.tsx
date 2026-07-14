import { LayoutJa } from "@/components/LayoutJa";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import {
  blogArticlesJaSorted,
  getCategoryLabelJa,
  type BlogArticleJaCategory,
} from "@/lib/blogArticlesJa";
import {
  buildClaimWingerJaLink,
  trackClaimWingerJaClick,
} from "@/lib/claimwingerLinksJa";

const canonicalUrl = "https://problemlot.com/ja/blog";
const ctaHref = buildClaimWingerJaLink("home", {
  medium: "blog_index_cta",
  campaign: "ja_blog",
  content: "bottom_cta",
});

const articles: UnifiedBlogArticle[] = blogArticlesJaSorted.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelJa(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const categoryOrder: Array<{ id: BlogArticleJaCategory; label: string }> = [
  { id: "answers", label: getCategoryLabelJa("answers") },
  { id: "foundation", label: getCategoryLabelJa("foundation") },
  { id: "airlines", label: getCategoryLabelJa("airlines") },
  { id: "airports", label: getCategoryLabelJa("airports") },
  { id: "diaspora", label: getCategoryLabelJa("diaspora") },
  { id: "routes", label: getCategoryLabelJa("routes") },
  { id: "situations", label: getCategoryLabelJa("situations") },
];

export default function JapaneseBlogIndex() {
  return (
    <LayoutJa>
      <SEO
        title={`フライトの遅延・欠航の補償金ガイド${articles.length}件（日本語） | EU261・UK261`}
        description={`フライトの遅延・欠航に関する日本人旅行者向けの実用ガイド${articles.length}件: EU261、UK261、LOTポーランド航空、ワルシャワ空港、ヨーロッパの路線、最大600ユーロの補償金。`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="ja_JP"
        language="Japanese"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/ja/blog"
        canonicalUrl={canonicalUrl}
        theme="sky"
        categoryOrder={categoryOrder}
        stats={[
          { value: articles.length, label: "記事" },
          { value: "EU261 / UK261", label: "主要な規則" },
          { value: "600 €", label: "補償金の上限" },
        ]}
        labels={{
          eyebrow: "日本人旅行者のための権利ガイド",
          title: "フライトの遅延・欠航の補償金ブログ",
          description: `日本人旅行者向けの実用ガイド${articles.length}件: 短い回答、LOTポーランド航空のケース、ワルシャワ空港、ヨーロッパ在住の日本人向け情報、EU261、UK261、路線別ガイド、特別な旅行状況。`,
          searchPlaceholder: "検索: EU261、LOTポーランド航空、ワルシャワ...",
          filterLabel: "テーマで絞り込む",
          allCategoryLabel: "すべて",
          featuredTitle: "おすすめガイド",
          allArticlesTitle: "すべての記事",
          readMoreLabel: "読む",
          emptyTitle: "見つかりませんでした",
          emptyDescription:
            "検索キーワードを変更するか、別のテーマをお選びください。",
          clearFiltersLabel: "フィルターをクリア",
          countLabel: (count) => (count === 1 ? "件の記事" : "件の記事"),
          showingLabel: (shown, total) =>
            `全${total}件中${shown}件の記事を表示しています`,
        }}
        cta={{
          title: "特定のフライトを確認しますか？",
          description:
            "ClaimWingerのフォームは日本語でご利用いただけます。遅延、欠航、オーバーブッキング、乗り継ぎ便の乗り遅れを前払いなしで確認できます。",
          href: ctaHref,
          label: "ClaimWingerで確認する",
          note: "No win, no fee. 前払いは不要です。",
          onClick: () => trackClaimWingerJaClick("ja_blog_index_cta", ctaHref),
        }}
      />
    </LayoutJa>
  );
}
