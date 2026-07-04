import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

import { ClaimWingerAppCta } from "@/components/ClaimWingerAppCta";
import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { buildClaimWingerAppLink } from "@/lib/claimwingerApp";
import { type ClaimWingerAppSeoArticle } from "@/lib/claimWingerAppSeoArticles";

type ClaimWingerAppSeoArticlePageProps = {
  article: ClaimWingerAppSeoArticle;
};

const OFFICIAL_SOURCES = [
  {
    label: "Rozporządzenie WE 261/2004",
    href: "https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32004R0261",
  },
  {
    label: "Your Europe: prawa pasażera",
    href: "https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_pl.htm",
  },
  {
    label: "ULC: prawa pasażera",
    href: "https://ulc.gov.pl/prawa-pasazera",
  },
  {
    label: "Google: generative AI search",
    href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
  },
  {
    label: "Google: SoftwareApplication schema",
    href: "https://developers.google.com/search/docs/appearance/structured-data/software-app",
  },
];

function buildCanonicalUrl(slug: string) {
  return `https://problemlot.com/blog/${slug}`;
}

function buildSchema(article: ClaimWingerAppSeoArticle) {
  const canonicalUrl = buildCanonicalUrl(article.slug);
  const imageUrl = `https://problemlot.com/api/og?${new URLSearchParams({
    title: article.seoTitle,
    desc: article.description,
    view: "site",
    v: "20260414",
  }).toString()}`;
  const appUrl = buildClaimWingerAppLink({
    locale: "pl",
    placement: `pl_app_seo_${article.slug}`,
    campaign: "claimwinger_app_seo",
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        headline: article.title,
        description: article.description,
        image: [imageUrl],
        articleSection: "Aplikacja i narzędzia",
        datePublished: article.date,
        dateModified: article.modifiedDate,
        inLanguage: "pl-PL",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        author: {
          "@type": "Organization",
          name: "ProblemLot.com",
          url: "https://problemlot.com",
        },
        publisher: {
          "@type": "Organization",
          name: "ProblemLot.com",
          url: "https://problemlot.com",
        },
        about: [
          {
            "@id": "https://claimwinger.com/pl#android-app",
          },
          {
            "@type": "Thing",
            name: article.primaryKeyword,
          },
        ],
        citation: OFFICIAL_SOURCES.map((source) => source.href),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Strona główna",
            item: "https://problemlot.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://problemlot.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: canonicalUrl,
          },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://claimwinger.com/pl#android-app",
        name: "ClaimWinger",
        operatingSystem: "Android",
        applicationCategory: "TravelApplication",
        url: appUrl,
        downloadUrl: appUrl,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "EUR",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };
}

export function ClaimWingerAppSeoArticlePage({
  article,
}: ClaimWingerAppSeoArticlePageProps) {
  const canonicalUrl = buildCanonicalUrl(article.slug);

  return (
    <Layout>
      <SEO
        title={article.seoTitle}
        description={article.description}
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
      />

      <article className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8 text-sm text-slate-600" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-700">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-700">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-950">{article.badge}</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              <Smartphone className="h-4 w-4" />
              {article.badge}
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              {article.title}
            </h1>
            <p className="text-xl leading-relaxed text-slate-700">
              {article.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Data publikacji: {article.date}</span>
              <span>{article.readTime} czytania</span>
              <span>Aplikacja i narzędzia</span>
            </div>
          </header>

          <section className="mb-8 rounded-lg border-l-4 border-blue-600 bg-white p-6 shadow-sm">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-700" />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-950">
                  Szybka odpowiedź
                </h2>
                <p className="leading-relaxed text-slate-800">
                  {article.quickAnswer}
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            {article.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <ClaimWingerAppCta
            locale="pl"
            placement={`pl_app_seo_${article.slug}_hero`}
            campaign="claimwinger_app_seo"
            articleSlug={article.slug}
            contentCluster="claimwinger_app_seo"
            title={article.ctaTitle}
            description={article.ctaDescription}
            className="my-10"
          />

          <section className="mb-10 grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-950">
                  {article.checklistTitle}
                </h2>
              </div>
              <ul className="space-y-3 text-slate-700">
                {article.checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-700" />
                <h2 className="text-2xl font-bold text-slate-950">
                  {article.decisionTitle}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-600">
                      <th className="py-3 pr-3 font-semibold">Opcja</th>
                      <th className="px-3 py-3 font-semibold">Najlepsze dla</th>
                      <th className="py-3 pl-3 font-semibold">Uważaj na</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {article.decisionRows.map((row) => (
                      <tr key={row.label}>
                        <td className="py-3 pr-3 font-semibold text-slate-950">
                          {row.label}
                        </td>
                        <td className="px-3 py-3 text-slate-700">{row.bestFor}</td>
                        <td className="py-3 pl-3 text-slate-700">{row.watchOut}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-lg bg-slate-950 p-6 text-white">
            <div className="mb-4 flex items-center gap-2">
              <Download className="h-5 w-5 text-blue-300" />
              <h2 className="text-2xl font-bold">{article.stepsTitle}</h2>
            </div>
            <ol className="grid gap-3 md:grid-cols-5">
              {article.steps.map((step, index) => (
                <li key={step} className="rounded-lg bg-white/10 p-4">
                  <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-slate-100">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="prose prose-lg max-w-none">
            {article.sections.map((section) => (
              <div key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>

          <section className="mt-10 rounded-lg border border-blue-200 bg-blue-50 p-6">
            <div className="mb-4 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-blue-800" />
              <h2 className="text-2xl font-bold text-blue-950">
                FAQ dla pasażera
              </h2>
            </div>
            <div className="space-y-4">
              {article.faq.map((item) => (
                <details
                  key={item.question}
                  className="rounded-lg border border-blue-100 bg-white p-5"
                >
                  <summary className="cursor-pointer font-semibold text-slate-950">
                    {item.question}
                  </summary>
                  <p className="mt-3 leading-7 text-slate-700">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Źródła i dalsza lektura
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {OFFICIAL_SOURCES.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-slate-200 bg-white p-4 font-medium text-slate-900 transition hover:border-blue-400 hover:text-blue-700"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Czytaj dalej
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {article.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-slate-200 bg-white p-5 transition hover:border-blue-400 hover:shadow-sm"
                >
                  <h3 className="font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                    Przejdź do artykułu
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(buildSchema(article)),
            }}
          />
        </div>
      </article>
    </Layout>
  );
}
