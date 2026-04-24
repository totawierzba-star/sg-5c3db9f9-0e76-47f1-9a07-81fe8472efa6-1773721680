import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { ArrowRight, Calendar, CheckCircle2, Clock, HelpCircle, ShieldCheck } from "lucide-react";

import { ClaimWingerHuSection } from "@/components/ClaimWingerHuSection";
import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";
import { blogArticlesHu, type BlogArticleHu } from "@/lib/blogArticlesHu";
import {
  buildHuArticleContent,
  getClaimWingerHuUrl,
} from "@/lib/huArticleContent";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

type HuBlogArticleProps = {
  article: BlogArticleHu;
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: blogArticlesHu.map((article) => ({
    params: { slug: article.slug },
  })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<HuBlogArticleProps> = async ({ params }) => {
  const slug = String(params?.slug || "");
  const article = blogArticlesHu.find((item) => item.slug === slug);

  if (!article) {
    return { notFound: true };
  }

  return {
    props: {
      article,
    },
  };
};

export default function HuBlogArticle({ article }: HuBlogArticleProps) {
  const content = buildHuArticleContent(article);
  const canonicalUrl = `https://problemlot.com/hu/blog/${article.slug}`;
  const contextHref = getClaimWingerHuUrl(
    content.ctaPath,
    article.slug,
    "context_link",
    "intro_text_link",
  );
  const embedHref = getClaimWingerHuUrl(
    content.ctaPath,
    article.slug,
    "embedded_cta",
    "high_article_embed",
  );
  const bottomHref = getClaimWingerHuUrl(
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
    inLanguage: "hu-HU",
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "problemlot.com",
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
    inLanguage: "hu-HU",
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
        name: "ProblemLot",
        item: "https://problemlot.com/hu",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://problemlot.com/hu/blog",
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
      language: "hu",
      campaign: article.slug,
      content: contentName,
      destination,
    });
  };

  return (
    <LayoutHu>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
        locale="hu_HU"
        language="Hungarian"
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
        <section className="border-b border-blue-100 bg-gradient-to-br from-blue-50 via-white to-slate-100 py-14 dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30">
          <div className="mx-auto max-w-4xl px-4">
            <Link
              href="/hu/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Vissza a magyar bloghoz
            </Link>

            <div className="mb-5 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-blue-100 px-4 py-2 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
                {content.category}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-600 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:text-slate-300 dark:ring-gray-700">
                <Calendar className="h-4 w-4" />
                {article.date}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-slate-600 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:text-slate-300 dark:ring-gray-700">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>
            <p className="mb-8 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.description}. Ha nem egyértelmű, hogy az Ön járata belefér-e a szabályokba,
              kezdje egy gyors{" "}
              <a
                href={contextHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContextClick("intro_text_link", contextHref)}
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-900 dark:text-blue-300"
              >
                {content.ctaAnchor}
              </a>
              .
            </p>

            <div className="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm dark:border-blue-900 dark:bg-gray-900">
              <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
                <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Rövid válasz
              </h2>
              <div className="space-y-3">
                {content.quickAnswer.map((answer) => (
                  <p key={answer} className="flex gap-3 leading-7 text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600 dark:text-green-400" />
                    <span>{answer}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <main className="min-w-0">
            <ClaimWingerHuSection
              className="mb-10"
              title="Ellenőrizze a jogosultságot magyar nyelven"
              description="A kérdések megválaszolása után gyorsan látható, hogy a késés, törlés vagy átfoglalás alapján lehet-e reális EU261-kártérítési ügy."
              ctaHref={embedHref}
              ctaLabel="Jogosultság ellenőrzése"
              trackingCampaign={article.slug}
              trackingContent="high_article_embed"
            />

            <div className="space-y-8">
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
                    {section.bullets && (
                      <ul className="space-y-3 pt-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-400" />
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
                <HelpCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                Gyakori kérdések
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

            <section className="mt-10 rounded-3xl bg-gradient-to-br from-blue-700 to-slate-950 p-8 text-white shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Nem biztos az ügy erejében?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-blue-100">
                A leggyorsabb következő lépés egy tiszta ellenőrzés: útvonal, végső érkezési idő,
                légitársasági indoklás és dokumentumok alapján.
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContextClick("bottom_cta", bottomHref)}
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Kártérítési jogosultság ellenőrzése
                <ArrowRight className="h-4 w-4" />
              </a>
            </section>
          </main>

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-900 dark:ring-gray-800">
                <h2 className="mb-3 text-lg font-bold">Tartalom</h2>
                <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <p>Rövid válasz</p>
                  {content.sections.map((section) => (
                    <p key={section.title}>{section.title}</p>
                  ))}
                  <p>Gyakori kérdések</p>
                </div>
              </div>
              <div className="rounded-3xl bg-blue-50 p-6 ring-1 ring-blue-100 dark:bg-blue-950/30 dark:ring-blue-900">
                <h2 className="mb-2 text-lg font-bold">EU261 gyors ellenőrzés</h2>
                <p className="mb-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  Ha a járat késett, törölték vagy átfoglalták, a dokumentumok alapján gyorsan
                  eldönthető, érdemes-e igényt indítani.
                </p>
                <a
                  href={bottomHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContextClick("sidebar_cta", bottomHref)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 dark:text-blue-300"
                >
                  Ellenőrzés ClaimWingeren
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </article>
    </LayoutHu>
  );
}
