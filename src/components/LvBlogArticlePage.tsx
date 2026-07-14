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

import { ClaimWingerLvSection } from "@/components/ClaimWingerLvSection";
import { LayoutLv } from "@/components/LayoutLv";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildLvArticleContent } from "@/lib/lvArticleContent";
import { type BlogArticleLv, getCategoryLabelLv } from "@/lib/blogArticlesLv";
import {
  buildClaimWingerLvLink,
  trackClaimWingerLvClick,
} from "@/lib/claimwingerLinksLv";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type LvBlogArticlePageProps = {
  article: BlogArticleLv;
};

function CompensationTable() {
  return (
    <Card className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        Kompensācijas tabula: €250, €400 vai €600
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-red-50 text-slate-900 dark:bg-red-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Attālums</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Summa</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Kad izmanto</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">līdz 1 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€250</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">īsi Eiropas maršruti</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1 500-3 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€400</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">vidēja attāluma lidojumi Eiropā un ap to</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">vairāk par 3 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€600</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">tālie starptautiskie maršruti</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Summas ir fiksētas saskaņā ar Regulu (EK) Nr. 261/2004. Faktiskās tiesības ir atkarīgas
        no maršruta, kavēšanās galamērķī, traucējuma iemesla un piemērojamās jurisdikcijas.
      </p>
    </Card>
  );
}

function NonEuCarrierTable() {
  const rows = [
    ["Lidojums izlido no ES lidostas (jebkura aviokompānija)", "Jā", "positive"],
    ["Lidojums ielido ES ar Eiropas aviokompāniju", "Jā", "positive"],
    ["Lidojums izlido ārpus ES ar ne ES aviokompāniju", "Nē", "negative"],
    ["Atgriešanās no Stambulas/Dubaijas ar Turkish/flydubai", "Nē", "negative"],
    ["Lidojums no Lielbritānijas pēc Brexit", "UK261 attiecas", "neutral"],
  ];

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Situācija</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Vai EK 261 attiecas?</th>
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

export function LvBlogArticlePage({ article }: LvBlogArticlePageProps) {
  const content = buildLvArticleContent(article);
  const articleUrl = `https://problemlot.com/lv/blog/${article.slug}`;
  const embedHref = buildClaimWingerLvLink(content.ctaDestination, {
    medium: "embedded_cta",
    campaign: article.slug,
    content: "high_article_embed",
  });
  const bottomHref = buildClaimWingerLvLink(content.ctaDestination, {
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
      inLanguage: "lv-LV",
    }),
    {
      ...generateArticleSchema({
        title: content.title,
        description: content.description,
        url: articleUrl,
        publishDate: article.publishDate,
        modifiedDate: article.updatedDate,
        author: "ClaimWinger licencēts juridiskais konsultants",
      }),
      inLanguage: "lv-LV",
    },
    {
      ...generateFAQSchema(content.faqs),
      inLanguage: "lv-LV",
    },
    generateBreadcrumbSchema([
      { name: "Sākums", url: "https://problemlot.com/lv" },
      { name: "Blogs", url: "https://problemlot.com/lv/blog" },
      { name: content.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutLv>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="lv_LV"
        language="Latvian"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replace(/</g, "\\u003c") }}
        />
      </Head>

      <article className="min-h-screen bg-gradient-to-br from-red-50 via-white to-slate-50 text-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/lv" className="hover:text-red-700 dark:hover:text-red-300">
              Sākums
            </Link>
            <span>/</span>
            <Link href="/lv/blog" className="hover:text-red-700 dark:hover:text-red-300">
              Blogs
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <ShieldCheck className="h-4 w-4" />
              {getCategoryLabelLv(article.category)}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Atjaunots: {article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Lasīšanas laiks: {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Tēma: {article.cluster}
              </span>
            </div>

            <div className="mt-7 space-y-5 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === 1 && (
                    <>
                      {" "}
                      Ātrai pārbaudei varat atvērt{" "}
                      <a
                        href={introHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackClaimWingerLvClick(
                            `lv_article_${article.slug}_intro_text_link`,
                            introHref,
                          )
                        }
                        className="font-semibold text-red-800 underline decoration-red-300 underline-offset-4 transition hover:text-red-950 dark:text-red-300"
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
            <Card className="rounded-3xl border-red-200 bg-gradient-to-br from-red-800 to-slate-950 p-8 text-white shadow-xl dark:border-red-900">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <ShieldCheck className="h-6 w-6 text-red-100" />
                Īsā atbilde
              </h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                {content.quickAnswer.map((answer) => (
                  <p key={answer} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span>{answer}</span>
                  </p>
                ))}
              </div>
            </Card>
          </section>

          <ClaimWingerLvSection
            className="mb-12"
            title="Pārbaudiet savu gadījumu ClaimWinger"
            description="Forma ir pieejama latviešu valodā. Tā ir ievietota augstu rakstā, lai jūs uzreiz varētu pārbaudīt kavēšanos, atcelšanu, overbooking vai nokavētu savienojumu saskaņā ar EK 261 vai UK261."
            ctaHref={embedHref}
            ctaLabel={content.ctaPath === "/cancelled-flight" ? "Pārbaudīt atceltu lidojumu" : "Pārbaudīt kavētu lidojumu"}
            placement={`lv_article_${article.slug}_embed_high`}
            embedCampaign={article.slug}
            embedContent="high_article_embed"
            loadingLabel="Ielādējas ClaimWinger latviešu forma..."
            loadingDescription="Pēc brīža varēsiet pārbaudīt konkrēto lidojumu bez avansa maksas."
          />

          <section className="mb-10 grid gap-4 md:grid-cols-2">
            {content.keyPoints.map((point) => (
              <Card key={point} className="rounded-2xl border-red-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
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
                className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900"
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
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-red-700 dark:text-red-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}

            <Card className="rounded-3xl border-red-200 bg-red-50/70 p-8 dark:border-red-900 dark:bg-red-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Noderīgas pārbaudes saites
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Izvēlieties ceļu pēc savas situācijas. Visas saites ved uz ClaimWinger latviešu plūsmu,
                kas atzīmēta Latvijas pasažieru datplūsmai.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerLvClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-red-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-red-800 dark:text-red-300">
                      <ExternalLink className="h-4 w-4" />
                      Pārbaude
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

            <Card className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-white">
                <HelpCircle className="h-6 w-6 text-red-700 dark:text-red-300" />
                Biežāk uzdotie jautājumi
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

            <Card className="rounded-3xl bg-gradient-to-br from-red-800 to-slate-950 p-8 text-white shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Vai jūsu lieta ir reāla?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-red-50">
                Ātrākais nākamais solis ir pārbaudīt maršrutu, ierašanās laiku, traucējuma iemeslu
                un dokumentus. ClaimWinger strādā no-win-no-fee modelī, bez avansa maksas.
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimWingerLvClick(`lv_article_${article.slug}_bottom_cta`, bottomHref)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-red-900 transition hover:bg-red-50"
              >
                Pārbaudīt ClaimWinger
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Vēl noderīgas lapas
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lv/kavejies-lidojums"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Kavējies lidojums
                </Link>
                <Link
                  href="/lv/atcelts-lidojums"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Atcelts lidojums
                </Link>
                <Link
                  href="/lv/kompensacijas-kalkulators"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Kompensācijas kalkulators
                </Link>
                <Link
                  href="/lv/blog"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Latviešu blogs
                </Link>
              </div>
            </Card>
          </main>
        </div>
      </article>
    </LayoutLv>
  );
}
