import { LayoutBg } from "@/components/LayoutBg";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import {
  blogArticlesBg,
  getCategoryLabelBg,
  type BlogArticleBgCategory,
} from "@/lib/blogArticlesBg";
import {
  buildClaimWingerBgLink,
  trackClaimWingerBgClick,
} from "@/lib/claimwingerLinksBg";

const canonicalUrl = "https://problemlot.com/bg/blog";
const ctaHref = buildClaimWingerBgLink("home", {
  medium: "blog_index_cta",
  campaign: "bg_blog",
  content: "bottom_cta",
});

const articles: UnifiedBlogArticle[] = blogArticlesBg.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelBg(article.category),
  date: article.publishDate,
  readTime: article.readTime,
  wordCount: article.wordCount,
  featured: article.featured,
}));

const categoryOrder: Array<{ id: BlogArticleBgCategory; label: string }> = [
  { id: "snippet", label: getCategoryLabelBg("snippet") },
  { id: "foundation", label: getCategoryLabelBg("foundation") },
  { id: "airline", label: getCategoryLabelBg("airline") },
  { id: "airport", label: getCategoryLabelBg("airport") },
  { id: "route", label: getCategoryLabelBg("route") },
  { id: "diaspora", label: getCategoryLabelBg("diaspora") },
  { id: "special", label: getCategoryLabelBg("special") },
];

export default function BulgarianBlogIndex() {
  return (
    <LayoutBg>
      <SEO
        title={`Блог за обезщетение при полет - ${articles.length} EU261 статии | ProblemLot.com`}
        description="Български блог за права на пътниците: закъснели и отменени полети, EU261, UK261, Bulgaria Air, Wizz Air, Ryanair, летища, маршрути и обезщетение до 600 евро."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="bg_BG"
        language="Bulgarian"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/bg/blog"
        canonicalUrl={canonicalUrl}
        theme="sky"
        categoryOrder={categoryOrder}
        stats={[
          { value: articles.length, label: "статии" },
          { value: "EU261 / UK261", label: "основни правила" },
          { value: "600 €", label: "максимално обезщетение" },
        ]}
        labels={{
          eyebrow: "Българска база знания за пътници",
          title: "Блог за обезщетение при закъснял или отменен полет",
          description:
            "90 практически ръководства за български пътници: кратки отговори, авиокомпании, летища, маршрути от София, Бургас и Варна, UK261 за диаспората и специални ситуации по ЕО 261.",
          searchPlaceholder: "Търсене: EU261, Wizz Air, Bulgaria Air, София-Лондон...",
          filterLabel: "Филтриране по тема",
          allCategoryLabel: "Всички",
          featuredTitle: "Препоръчани ръководства",
          allArticlesTitle: "Всички статии",
          readMoreLabel: "Прочетете",
          emptyTitle: "Няма намерени статии",
          emptyDescription: "Опитайте с по-обща дума или изчистете филтрите.",
          clearFiltersLabel: "Изчистете филтрите",
          countLabel: (count) => (count === 1 ? "статия" : "статии"),
          showingLabel: (shown, total) => `Показани ${shown} от ${total} статии`,
        }}
        cta={{
          title: "Искате да проверите конкретен полет?",
          description:
            "ClaimWinger все още няма отделна българска версия, затова използваме английския формуляр. Можете да проверите закъснение, отмяна, overbooking или изпусната връзка без предварително плащане.",
          href: ctaHref,
          label: "Проверете в ClaimWinger",
          note: "No win, no fee. Няма предварителна такса.",
          onClick: () => trackClaimWingerBgClick("bg_blog_index_cta", ctaHref),
        }}
      />
    </LayoutBg>
  );
}
