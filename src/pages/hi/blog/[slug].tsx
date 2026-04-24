import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

import { ClaimWingerHiSection } from "@/components/ClaimWingerHiSection";
import { LayoutHi } from "@/components/LayoutHi";
import { SEO } from "@/components/SEO";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";
import { blogArticlesHi, getCategoryLabelHi, type BlogArticleHi } from "@/lib/blogArticlesHi";
import {
  buildHiArticleContent,
  getClaimWingerHiUrl,
  hiOfficialSources,
} from "@/lib/hiArticleContent";

type HiBlogArticleProps = {
  article: BlogArticleHi;
};

const manualHiBlogSlugs = new Set([
  "air-india-international-delay-complaint",
  "canada-appr-indian-passengers",
  "delhi-airport-cancel-flight",
  "delhi-airport-der-se-flight",
  "delhi-dubai-flight-cancelled-compensation",
  "delhi-london-flight-cancelled-compensation",
  "delhi-toronto-flight-cancelled-compensation",
  "dgca-vs-eu261-compensation-comparison",
  "emirates-qatar-etihad-europe-via-gulf-hubs",
  "eu-regulation-261-2004-indian-passengers",
  "extraordinary-circumstances-compensation",
  "flight-delay-cancellation-compensation-amount",
  "klm-air-france-amsterdam-paris-compensation",
  "lufthansa-british-airways-air-france-comparison",
  "mumbai-frankfurt-flight-delay-compensation",
  "turkish-airlines-istanbul-compensation-rights",
]);

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogArticlesHi
    .filter((article) => !manualHiBlogSlugs.has(article.slug))
    .map((article) => ({
      params: { slug: article.slug },
    })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<HiBlogArticleProps> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const article = blogArticlesHi.find((item) => item.slug === slug);

  if (!article || manualHiBlogSlugs.has(article.slug)) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

function CompensationTable() {
  return (
    <section className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        मुआवज़ा तालिका: €250, €400 या €600
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-emerald-50 text-slate-900 dark:bg-emerald-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">दूरी</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">EU261 राशि</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">लगभग INR</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">उदाहरण</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1,500 km तक</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€250</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">लगभग ₹21,000</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">यूरोप के अंदर छोटी उड़ान</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1,500-3,500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€400</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">लगभग ₹33,000</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">मध्यम दूरी यूरोपीय रूट</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">3,500 km से अधिक</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€600</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">लगभग ₹52,000</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">दिल्ली-लंदन, दिल्ली-फ्रैंकफर्ट, मुंबई-पेरिस</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        रुपये की राशि अनुमानित है। पात्रता हमेशा दूरी, अंतिम देरी, लागू jurisdiction और एयरलाइन की जिम्मेदारी से तय होती है।
      </p>
    </section>
  );
}

function CarrierRuleTable() {
  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">स्थिति</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">EU261 लागू?</th>
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-300">
          <tr>
            <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">यूरोपीय हवाई अड्डे से प्रस्थान (कोई भी एयरलाइन)</td>
            <td className="border border-slate-200 px-4 py-3 font-semibold text-emerald-700 dark:border-gray-800 dark:text-emerald-300">हाँ</td>
          </tr>
          <tr>
            <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">यूरोपीय एयरलाइन की भारत आने वाली उड़ान</td>
            <td className="border border-slate-200 px-4 py-3 font-semibold text-emerald-700 dark:border-gray-800 dark:text-emerald-300">हाँ</td>
          </tr>
          <tr>
            <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">दिल्ली/मुंबई से Air India/IndiGo प्रस्थान</td>
            <td className="border border-slate-200 px-4 py-3 font-semibold text-red-700 dark:border-gray-800 dark:text-red-300">नहीं</td>
          </tr>
          <tr>
            <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">लंदन से Virgin Atlantic/British Airways</td>
            <td className="border border-slate-200 px-4 py-3 font-semibold text-indigo-700 dark:border-gray-800 dark:text-indigo-300">UK261 लागू</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function HiBlogArticle({ article }: HiBlogArticleProps) {
  const content = buildHiArticleContent(article);
  const canonicalUrl = `https://problemlot.com/hi/blog/${article.slug}`;
  const contextHref = getClaimWingerHiUrl(
    content.ctaPath,
    article.slug,
    "context_link",
    "intro_text_link",
  );
  const embedHref = getClaimWingerHiUrl(
    content.ctaPath,
    article.slug,
    "embedded_cta",
    "high_article_embed",
  );
  const bottomHref = getClaimWingerHiUrl(
    content.ctaPath,
    article.slug,
    "article_cta",
    "bottom_cta",
  );

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: content.title,
    description: content.description,
    inLanguage: "hi-IN",
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Organization",
      name: "ClaimWinger विधि सलाहकार",
    },
    publisher: {
      "@type": "Organization",
      name: "problemlot.com",
    },
    mainEntityOfPage: canonicalUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "hi-IN",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ProblemLot Hindi",
        item: "https://problemlot.com/hi",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://problemlot.com/hi/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: content.title,
        item: canonicalUrl,
      },
    ],
  };

  const trackContextClick = (contentName: string, destination: string) => {
    pushClaimWingerEvent("claimwinger_context_click", {
      language: "hi",
      campaign: article.slug,
      content: contentName,
      destination,
    });
  };

  return (
    <LayoutHi>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
        locale="hi_IN"
        language="Hindi"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Head>

      <article className="bg-slate-50 text-slate-900 dark:bg-gray-950 dark:text-white">
        <section className="border-b border-amber-100 bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-14 dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20">
          <div className="mx-auto max-w-4xl px-4">
            <Link
              href="/hi/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition hover:text-emerald-950 dark:text-emerald-300 dark:hover:text-emerald-200"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              हिंदी ब्लॉग पर वापस जाएं
            </Link>

            <div className="mb-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-emerald-100 px-4 py-2 font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                {getCategoryLabelHi(article.category)}
              </span>
              <span className="rounded-full bg-amber-100 px-4 py-2 font-medium text-amber-800 dark:bg-amber-900/40 dark:text-amber-200">
                {article.cluster}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-600 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:text-slate-300 dark:ring-gray-700">
                <Calendar className="h-4 w-4" />
                {article.publishDate}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-600 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:text-slate-300 dark:ring-gray-700">
                <Clock className="h-4 w-4" />
                {article.readTime} मिनट
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>
            <div className="space-y-5 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === 1 && (
                    <>
                      {" "}
                      जल्दी जांच के लिए{" "}
                      <a
                        href={contextHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackContextClick("intro_text_link", contextHref)}
                        className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-950 dark:text-emerald-300"
                      >
                        {content.ctaAnchor}
                      </a>
                      {" "}खोलें।
                    </>
                  )}
                </p>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-emerald-200 bg-white p-6 shadow-sm dark:border-emerald-900 dark:bg-gray-900">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
                <ShieldCheck className="h-5 w-5 text-emerald-700 dark:text-emerald-300" />
                संक्षिप्त जवाब
              </h2>
              <div className="space-y-3">
                {content.quickAnswer.map((answer) => (
                  <p key={answer} className="flex gap-3 leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300" />
                    <span>{answer}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="min-w-0">
            <ClaimWingerHiSection
              className="mb-10"
              title="ClaimWinger पर हिंदी में पात्रता जांचें"
              description="यह फॉर्म लेख की शुरुआत में इसलिए रखा गया है ताकि आप तुरंत देख सकें कि देरी, रद्दीकरण या missed connection का मामला €600 यानी लगभग ₹52,000 तक के दावे में बदल सकता है या नहीं।"
              ctaHref={embedHref}
              ctaLabel="दावा जांच शुरू करें"
              trackingCampaign={article.slug}
              trackingContent="high_article_embed"
            />

            <div className="space-y-8">
              <CompensationTable />

              {content.sections.map((section) => (
                <section
                  key={section.title}
                  className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800"
                >
                  <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                    {section.title}
                  </h2>
                  <div className="space-y-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.title === "Non-EU carrier पर EU261/UK261 स्थिति" && (
                      <CarrierRuleTable />
                    )}
                    {section.title === "आधिकारिक नियम: EU261, UK261 और DGCA को साथ में पढ़ें" && (
                      <div className="mt-5 grid gap-3">
                        {hiOfficialSources.map((source) => (
                          <a
                            key={source.href}
                            href={source.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-50 dark:border-gray-800 dark:text-emerald-300 dark:hover:bg-emerald-950/20"
                          >
                            <FileText className="h-4 w-4" />
                            {source.label}
                          </a>
                        ))}
                      </div>
                    )}
                    {section.bullets && (
                      <ul className="space-y-3 pt-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-white">
                <HelpCircle className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                FAQ
              </h2>
              <div className="space-y-5">
                {content.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-slate-200 pb-5 last:border-0 last:pb-0 dark:border-gray-800">
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="leading-7 text-slate-700 dark:text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-10 rounded-3xl bg-gradient-to-br from-emerald-800 to-slate-950 p-8 text-white shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">क्या आपका दावा मजबूत है?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-emerald-50">
                उड़ान नंबर, तारीख, अंतिम आगमन देरी और एयरलाइन का कारण जोड़कर ClaimWinger में पात्रता जांचें। No win, no fee मॉडल में पहले जोखिम कम रहता है।
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContextClick("bottom_cta", bottomHref)}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                ClaimWinger पर दावा जांचें
                <ArrowRight className="h-4 w-4" />
              </a>
            </section>
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800">
                <h2 className="mb-3 text-lg font-bold">लेख में</h2>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <p>संक्षिप्त जवाब</p>
                  <p>मुआवज़ा तालिका</p>
                  {content.sections.map((section) => (
                    <p key={section.title}>{section.title}</p>
                  ))}
                  <p>FAQ</p>
                </div>
              </div>
              <div className="rounded-3xl bg-amber-50 p-6 ring-1 ring-amber-100 dark:bg-amber-950/20 dark:ring-amber-900">
                <h2 className="mb-2 text-lg font-bold">त्वरित दावा जांच</h2>
                <p className="mb-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  लंबी भारत-यूरोप उड़ान में €600 यानी लगभग ₹52,000 तक का दावा बन सकता है।
                </p>
                <a
                  href={bottomHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContextClick("sidebar_cta", bottomHref)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 dark:text-emerald-300"
                >
                  ClaimWinger हिंदी फॉर्म
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </LayoutHi>
  );
}
