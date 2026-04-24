import { LayoutHi } from "@/components/LayoutHi";
import { SEO } from "@/components/SEO";
import {
  UnifiedBlogIndex,
  type UnifiedBlogArticle,
} from "@/components/UnifiedBlogIndex";
import { blogArticlesHi, getCategoryLabelHi } from "@/lib/blogArticlesHi";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const canonicalUrl = "https://problemlot.com/hi/blog";
const ctaHref =
  "https://claimwinger.com/hi/deri-udaan?utm_source=problemlot-hi&utm_medium=blog_index&utm_campaign=hi_blog&utm_content=bottom_cta";

const articles: UnifiedBlogArticle[] = blogArticlesHi.map((article) => ({
  id: article.id,
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  category: article.category,
  categoryLabel: getCategoryLabelHi(article.category),
  date: article.publishDate,
  readTime: `${article.readTime} मिनट`,
  wordCount: article.wordCount,
  featured: article.featured,
  eyebrow: article.cluster || article.airportCode || article.airlineName || article.routeName,
}));

export default function HindiBlogIndex() {
  return (
    <LayoutHi>
      <SEO
        title={`हिंदी उड़ान मुआवज़ा ब्लॉग | ${articles.length} EU261, UK261 और Air India गाइड`}
        description={`भारतीय यात्रियों के लिए हिंदी गाइड: यूरोप उड़ान देरी, Air India EU261, UK261, DGCA, missed connection और लगभग ₹52,000 तक मुआवज़ा। ${articles.length} लेख।`}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        locale="hi_IN"
        language="Hindi"
      />
      <UnifiedBlogIndex
        articles={articles}
        basePath="/hi/blog"
        canonicalUrl={canonicalUrl}
        theme="emerald"
        categoryOrder={[
          { id: "snippet", label: getCategoryLabelHi("snippet") },
          { id: "foundation", label: getCategoryLabelHi("foundation") },
          { id: "airline", label: getCategoryLabelHi("airline") },
          { id: "airport", label: getCategoryLabelHi("airport") },
          { id: "route", label: getCategoryLabelHi("route") },
          { id: "special", label: getCategoryLabelHi("special") },
        ]}
        stats={[
          { value: articles.length, label: "हिंदी गाइड" },
          { value: "EU261 / UK261", label: "मुख्य नियम" },
          { value: "₹52,000", label: "लगभग अधिकतम दावा" },
        ]}
        labels={{
          eyebrow: "भारतीय यात्रियों के लिए EU261 ज्ञान केंद्र",
          title: "उड़ान मुआवज़ा ब्लॉग हिंदी में",
          description:
            "Air India, IndiGo, Lufthansa, British Airways, EU261, UK261 और DGCA पर गहन हिंदी गाइड। खोज और फिल्टर से अपने route, airline या समस्या के अनुसार सही लेख तुरंत पाएं।",
          searchPlaceholder: "खोजें: Air India, EU261, देरी, रद्द उड़ान, Frankfurt...",
          filterLabel: "विषय के अनुसार फिल्टर",
          allCategoryLabel: "सभी गाइड",
          featuredTitle: "पहले पढ़ने योग्य गाइड",
          allArticlesTitle: "सभी हिंदी गाइड",
          readMoreLabel: "गाइड पढ़ें",
          emptyTitle: "कोई लेख नहीं मिला",
          emptyDescription: "कृपया सामान्य keyword आज़माएं या फिल्टर हटाएं।",
          clearFiltersLabel: "फिल्टर हटाएं",
          countLabel: () => "गाइड",
          showingLabel: (shown, total) => `${shown} / ${total} गाइड दिख रहे हैं`,
        }}
        cta={{
          title: "अपनी उड़ान पात्रता अभी जांचें",
          description:
            "3 मिनट में देखें कि आप €250-€600 यानी लगभग ₹21,000-₹52,000 तक मुआवज़े के पात्र हैं या नहीं।",
          href: ctaHref,
          label: "मुफ्त दावा जांचें",
          note: "No win, no fee | हिंदी प्रक्रिया | ClaimWinger विधि सलाहकार",
          onClick: () =>
            pushClaimWingerEvent("claimwinger_cta_click", {
              language: "hi",
              campaign: "hi_blog_index",
              content: "bottom_cta",
              destination: ctaHref,
            }),
        }}
      />
    </LayoutHi>
  );
}
