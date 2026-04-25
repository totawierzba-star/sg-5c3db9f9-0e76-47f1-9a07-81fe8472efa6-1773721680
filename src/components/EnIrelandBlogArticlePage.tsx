import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock3,
  ExternalLink,
  HelpCircle,
  ShieldCheck,
} from "lucide-react";

import { ClaimWingerEnSection } from "@/components/ClaimWingerEnSection";
import { LayoutEn } from "@/components/LayoutEn";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import {
  type BlogArticleEnIreland,
  getCategoryLabelEnIreland,
} from "@/lib/blogArticlesEnIreland";
import {
  buildClaimWingerEnLink,
  trackClaimWingerEnClick,
} from "@/lib/claimwingerLinksEn";
import { buildEnIrelandArticleContent } from "@/lib/enIrelandArticleContent";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type EnIrelandBlogArticlePageProps = {
  article: BlogArticleEnIreland;
};

function CompensationTable() {
  return (
    <Card className="rounded-3xl border-blue-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        Compensation table: €250, €400 or €600
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-blue-50 text-slate-900 dark:bg-blue-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Distance</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Compensation</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Typical Irish example</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">Up to 1,500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€250</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">Short routes such as Dublin-London or Dublin-Paris.</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1,500-3,500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€400</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">Longer European and nearby non-EU routes.</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">Over 3,500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€600</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">Transatlantic routes from Dublin or Shannon.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        The amounts are fixed under EU261. They are separate from refunds, rerouting,
        meals, hotel and transport. The final result depends on the covered route,
        arrival delay, cancellation timing and the airline's proven reason.
      </p>
    </Card>
  );
}

function NonEuCarrierTable() {
  const rows = [
    ["Flight departing from any Irish airport (any airline)", "Yes", "positive"],
    ["Flight arriving in Ireland on an EU carrier", "Yes", "positive"],
    ["Return from USA/Dubai on American, Emirates, United or similar non-EU carrier", "No", "negative"],
    ["Return from UK airports on any carrier", "UK261 applies", "neutral"],
  ];

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Situation</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">EU261 applies?</th>
          </tr>
        </thead>
        <tbody className="text-slate-700 dark:text-slate-300">
          {rows.map(([situation, result, tone]) => (
            <tr key={situation}>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">{situation}</td>
              <td
                className={[
                  "border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800",
                  tone === "positive" ? "text-emerald-700 dark:text-emerald-300" : "",
                  tone === "negative" ? "text-red-700 dark:text-red-300" : "",
                  tone === "neutral" ? "text-sky-700 dark:text-sky-300" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function EnIrelandBlogArticlePage({ article }: EnIrelandBlogArticlePageProps) {
  const content = buildEnIrelandArticleContent(article);
  const articleUrl = `https://problemlot.com/en/blog/${article.slug}`;
  const embedHref = buildClaimWingerEnLink(content.ctaDestination, {
    medium: "embedded_cta",
    campaign: article.slug,
    content: "high_article_embed",
  });
  const bottomHref = buildClaimWingerEnLink(content.ctaDestination, {
    medium: "article_cta",
    campaign: article.slug,
    content: "bottom_cta",
  });
  const introHref = content.contextualLinks[0]?.href || embedHref;

  const schemas = combineSchemas(
    generateOrganizationSchema({ url: articleUrl, sameAs: ["https://claimwinger.com"] }),
    generateWebPageSchema({
      title: content.seoTitle,
      description: content.description,
      url: articleUrl,
      inLanguage: "en-IE",
    }),
    {
      ...generateArticleSchema({
        title: content.title,
        description: content.description,
        url: articleUrl,
        publishDate: article.publishDate,
        modifiedDate: article.updatedDate,
        author: "ClaimWinger's licensed legal counsel",
      }),
      inLanguage: "en-IE",
    },
    {
      ...generateFAQSchema(content.faqs),
      inLanguage: "en-IE",
    },
    generateBreadcrumbSchema([
      { name: "Home", url: "https://problemlot.com/en" },
      { name: "Blog", url: "https://problemlot.com/en/blog" },
      { name: content.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutEn>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="en_IE"
        language="English"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas).replace(/</g, "\\u003c"),
          }}
        />
      </Head>

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white text-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/en" className="hover:text-blue-700 dark:hover:text-blue-300">
              Home
            </Link>
            <span>/</span>
            <Link href="/en/blog" className="hover:text-blue-700 dark:hover:text-blue-300">
              Blog
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-950/40 dark:text-blue-200">
              <ShieldCheck className="h-4 w-4" />
              {getCategoryLabelEnIreland(article.category)}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Updated: {article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Reading time: {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Topic: {article.cluster}
              </span>
            </div>

            <div className="mt-7 space-y-5 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === 1 && (
                    <>
                      {" "}
                      For a quick eligibility check, open the{" "}
                      <a
                        href={introHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackClaimWingerEnClick(
                            `en_ie_article_${article.slug}_intro_text_link`,
                            introHref,
                          )
                        }
                        className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-950 dark:text-blue-300"
                      >
                        {content.ctaAnchor}
                      </a>
                      .
                    </>
                  )}
                </p>
              ))}
            </div>
          </header>

          <section className="mb-10">
            <Card className="rounded-3xl border-blue-200 bg-gradient-to-br from-blue-800 to-slate-950 p-8 text-white shadow-xl dark:border-blue-900">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <ShieldCheck className="h-6 w-6 text-blue-100" />
                Quick answer
              </h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                {content.quickAnswer.map((answer) => (
                  <p key={answer} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span>{answer}</span>
                  </p>
                ))}
              </div>
            </Card>
          </section>

          <ClaimWingerEnSection
            className="mb-12"
            title="Check your Irish flight claim with ClaimWinger"
            description="Use the form below to check a delayed, cancelled, overbooked or missed-connection flight under EU261 or UK261. It is placed high in this guide so you can verify the route, airline and timing before reading the details."
            ctaHref={embedHref}
            ctaLabel={content.ctaPath === "/cancelled-flight" ? "Check cancelled flight" : "Check delayed flight"}
            placement={`en_ie_article_${article.slug}_embed_high`}
            embedCampaign={article.slug}
            embedContent="high_article_embed"
            loadingLabel="Loading the ClaimWinger form..."
            loadingDescription="You can check this specific flight scenario in a moment."
          />

          <section className="mb-10 grid gap-4 md:grid-cols-2">
            {content.keyPoints.map((point) => (
              <Card key={point} className="rounded-2xl border-blue-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-700 dark:text-blue-300" />
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{point}</p>
                </div>
              </Card>
            ))}
          </section>

          <main className="space-y-8">
            <CompensationTable />

            {content.sections.map((section) => (
              <Card
                key={section.title}
                className="rounded-3xl border-blue-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                  {section.title}
                </h2>
                <div className="space-y-4 text-base leading-8 text-slate-700 dark:text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.table === "nonEu" && <NonEuCarrierTable />}
                  {section.bullets && (
                    <ul className="space-y-3 pt-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-700 dark:text-blue-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}

            <Card className="rounded-3xl border-blue-200 bg-blue-50/70 p-8 dark:border-blue-900 dark:bg-blue-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Useful claim checks
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Choose the path that best matches your situation. These links open the
                relevant ClaimWinger flow while keeping the Irish passenger context.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerEnClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-blue-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-blue-800 dark:text-blue-300">
                      <ExternalLink className="h-4 w-4" />
                      Claim check
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      {link.label}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {link.description}
                    </p>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl border-blue-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-white">
                <HelpCircle className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {content.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="border-b border-slate-200 pb-5 last:border-0 last:pb-0 dark:border-gray-800"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-slate-950 dark:text-white">
                      {faq.question}
                    </h3>
                    <p className="leading-7 text-slate-700 dark:text-slate-300">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="rounded-3xl bg-gradient-to-br from-blue-800 to-slate-950 p-8 text-white shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Is your Irish claim worth checking?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-blue-50">
                The fastest next step is to verify the route, carrier, arrival delay,
                disruption reason and available evidence. ClaimWinger works on a no-win,
                no-fee basis with no upfront payment.
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimWingerEnClick(`en_ie_article_${article.slug}_bottom_cta`, bottomHref)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-blue-900 transition hover:bg-blue-50"
              >
                Check with ClaimWinger
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Helpful pages
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/en/delayed-flight"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50 dark:border-gray-800 dark:text-blue-300 dark:hover:bg-blue-950/20"
                >
                  Delayed flight
                </Link>
                <Link
                  href="/en/cancelled-flight"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50 dark:border-gray-800 dark:text-blue-300 dark:hover:bg-blue-950/20"
                >
                  Cancelled flight
                </Link>
                <Link
                  href="/en/compensation-calculator"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50 dark:border-gray-800 dark:text-blue-300 dark:hover:bg-blue-950/20"
                >
                  Compensation calculator
                </Link>
                <Link
                  href="/en/blog"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:border-blue-300 hover:bg-blue-50 dark:border-gray-800 dark:text-blue-300 dark:hover:bg-blue-950/20"
                >
                  English blog
                </Link>
              </div>
            </Card>
          </main>
        </div>
      </article>
    </LayoutEn>
  );
}
