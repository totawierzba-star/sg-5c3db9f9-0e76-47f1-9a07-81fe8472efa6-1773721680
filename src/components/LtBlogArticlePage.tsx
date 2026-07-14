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

import { ClaimWingerLtSection } from "@/components/ClaimWingerLtSection";
import { LayoutLt } from "@/components/LayoutLt";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildLtArticleContent } from "@/lib/ltArticleContent";
import { type BlogArticleLt, getCategoryLabelLt } from "@/lib/blogArticlesLt";
import {
  buildClaimWingerLtLink,
  trackClaimWingerLtClick,
} from "@/lib/claimwingerLinksLt";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type LtBlogArticlePageProps = {
  article: BlogArticleLt;
};

function CompensationTable() {
  return (
    <Card className="rounded-3xl border-emerald-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        Kompensacijos lentelė: €250, €400 arba €600
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-emerald-50 text-slate-900 dark:bg-emerald-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Atstumas</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Suma</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Kada taikoma</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">iki 1 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€250</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">trumpi Europos maršrutai</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1 500-3 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€400</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">vidutinio atstumo skrydžiai Europoje ir aplink ją</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">daugiau nei 3 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">€600</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">ilgi tarptautiniai maršrutai</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Sumos yra fiksuotos pagal Reglamentą (EB) Nr. 261/2004. Reali teisė priklauso nuo maršruto,
        vėlavimo galutinėje paskirties vietoje, sutrikimo priežasties ir taikomos jurisdikcijos.
      </p>
    </Card>
  );
}

function NonEuCarrierTable() {
  const rows = [
    ["Skrydis iš ES oro uosto (bet kuri oro linija)", "Taip", "positive"],
    ["Skrydis į ES su europietiška oro linija", "Taip", "positive"],
    ["Skrydis iš ne ES šalies su ne ES oro linija", "Ne", "negative"],
    ["Grįžtamasis skrydis iš Stambulo/Dubajaus su Turkish/flydubai", "Ne", "negative"],
    ["Skrydis iš JK po Brexit", "Taikomas UK261", "neutral"],
  ];

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Situacija</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Ar galioja EB 261?</th>
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

export function LtBlogArticlePage({ article }: LtBlogArticlePageProps) {
  const content = buildLtArticleContent(article);
  const articleUrl = `https://problemlot.com/lt/blog/${article.slug}`;
  const embedHref = buildClaimWingerLtLink(content.ctaDestination, {
    medium: "embedded_cta",
    campaign: article.slug,
    content: "high_article_embed",
  });
  const bottomHref = buildClaimWingerLtLink(content.ctaDestination, {
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
      inLanguage: "lt-LT",
    }),
    {
      ...generateArticleSchema({
        title: content.title,
        description: content.description,
        url: articleUrl,
        publishDate: article.publishDate,
        modifiedDate: article.updatedDate,
        author: "ClaimWinger licencijuotas teisinis konsultantas",
      }),
      inLanguage: "lt-LT",
    },
    {
      ...generateFAQSchema(content.faqs),
      inLanguage: "lt-LT",
    },
    generateBreadcrumbSchema([
      { name: "Pradžia", url: "https://problemlot.com/lt" },
      { name: "Blogas", url: "https://problemlot.com/lt/blog" },
      { name: content.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutLt>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="lt_LT"
        language="Lithuanian"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </Head>

      <article className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50 text-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/lt" className="hover:text-emerald-700 dark:hover:text-emerald-300">
              Pradžia
            </Link>
            <span>/</span>
            <Link href="/lt/blog" className="hover:text-emerald-700 dark:hover:text-emerald-300">
              Blogas
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-200">
              <ShieldCheck className="h-4 w-4" />
              {getCategoryLabelLt(article.category)}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Atnaujinta: {article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Skaitymo laikas: {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Tema: {article.cluster}
              </span>
            </div>

            <div className="mt-7 space-y-5 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === 1 && (
                    <>
                      {" "}
                      Greitai patikrai galite atidaryti{" "}
                      <a
                        href={introHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackClaimWingerLtClick(
                            `lt_article_${article.slug}_intro_text_link`,
                            introHref,
                          )
                        }
                        className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-950 dark:text-emerald-300"
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
            <Card className="rounded-3xl border-emerald-200 bg-gradient-to-br from-emerald-800 to-slate-950 p-8 text-white shadow-xl dark:border-emerald-900">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <ShieldCheck className="h-6 w-6 text-emerald-100" />
                Trumpas atsakymas
              </h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                {content.quickAnswer.map((answer) => (
                  <p key={answer} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                    <span>{answer}</span>
                  </p>
                ))}
              </div>
            </Card>
          </section>

          <ClaimWingerLtSection
            className="mb-12"
            title="Patikrinkite savo atvejį ClaimWinger"
            description="Forma pasiekiama lietuvių kalba. Ji įkelta aukštai straipsnyje, kad galėtumėte iškart patikrinti vėlavimą, atšaukimą, overbookingą arba praleistą persėdimą pagal EB 261 ar UK261."
            ctaHref={embedHref}
            ctaLabel={content.ctaPath === "/cancelled-flight" ? "Patikrinti atšauktą skrydį" : "Patikrinti vėluojantį skrydį"}
            placement={`lt_article_${article.slug}_embed_high`}
            embedCampaign={article.slug}
            embedContent="high_article_embed"
            loadingLabel="Įkeliama lietuviška ClaimWinger forma..."
            loadingDescription="Po akimirkos galėsite patikrinti konkretų skrydį be išankstinio mokesčio."
          />

          <section className="mb-10 grid gap-4 md:grid-cols-2">
            {content.keyPoints.map((point) => (
              <Card key={point} className="rounded-2xl border-emerald-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300" />
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
                className="rounded-3xl border-emerald-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900"
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
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-700 dark:text-emerald-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}

            <Card className="rounded-3xl border-emerald-200 bg-emerald-50/70 p-8 dark:border-emerald-900 dark:bg-emerald-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Naudingos patikros nuorodos
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pasirinkite kelią pagal savo situaciją. Visos nuorodos veda į lietuvišką ClaimWinger srautą,
                pritaikytą Lietuvos keleiviams.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerLtClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-emerald-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-emerald-800 dark:text-emerald-300">
                      <ExternalLink className="h-4 w-4" />
                      Patikra
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

            <Card className="rounded-3xl border-emerald-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-white">
                <HelpCircle className="h-6 w-6 text-emerald-700 dark:text-emerald-300" />
                Dažniausiai užduodami klausimai
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

            <Card className="rounded-3xl bg-gradient-to-br from-emerald-800 to-slate-950 p-8 text-white shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Ar jūsų byla reali?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-emerald-50">
                Greičiausias kitas žingsnis yra patikrinti maršrutą, atvykimo laiką, sutrikimo priežastį
                ir turimus dokumentus. ClaimWinger dirba no-win-no-fee modeliu, be išankstinio mokesčio.
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimWingerLtClick(`lt_article_${article.slug}_bottom_cta`, bottomHref)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-emerald-900 transition hover:bg-emerald-50"
              >
                Patikrinti ClaimWinger
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Dar naudingi puslapiai
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/lt/veluojantis-skrydis"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-gray-800 dark:text-emerald-300 dark:hover:bg-emerald-950/20"
                >
                  Vėluojantis skrydis
                </Link>
                <Link
                  href="/lt/atsauktas-skrydis"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-gray-800 dark:text-emerald-300 dark:hover:bg-emerald-950/20"
                >
                  Atšauktas skrydis
                </Link>
                <Link
                  href="/lt/kompensacijos-skaiciuokle"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-gray-800 dark:text-emerald-300 dark:hover:bg-emerald-950/20"
                >
                  Kompensacijos skaičiuoklė
                </Link>
                <Link
                  href="/lt/blog"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50 dark:border-gray-800 dark:text-emerald-300 dark:hover:bg-emerald-950/20"
                >
                  Lietuviškas blogas
                </Link>
              </div>
            </Card>
          </main>
        </div>
      </article>
    </LayoutLt>
  );
}
