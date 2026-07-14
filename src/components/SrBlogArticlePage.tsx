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

import { ClaimWingerSrSection } from "@/components/ClaimWingerSrSection";
import { LayoutSr } from "@/components/LayoutSr";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildSrArticleContent } from "@/lib/srArticleContent";
import { type BlogArticleSr, getCategoryLabelSr } from "@/lib/blogArticlesSr";
import {
  buildClaimWingerSrLink,
  trackClaimWingerSrClick,
} from "@/lib/claimwingerLinksSr";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type SrBlogArticlePageProps = {
  article: BlogArticleSr;
};

function CompensationTable() {
  return (
    <Card className="rounded-3xl border-sky-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        Tabela obeštećenja: 250 €, 400 € ili 600 €
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-sky-50 text-slate-900 dark:bg-sky-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Razdaljina</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Iznos</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Kada se primenjuje</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">do 1.500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">250 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">kratke evropske rute, npr. Beč–Beograd ili Minhen–Beograd</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1.500–3.500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">400 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">srednje rute u Evropi i okolini, npr. London–Beograd</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">preko 3.500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">600 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">duge interkontinentalne rute</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Iznosi su fiksirani Uredbom (EU) br. 261/2004 i ne zavise od cene karte. Stvarno pravo na
        obeštećenje zavisi od rute, ukupnog kašnjenja na dolasku, uzroka problema i nadležne
        jurisdikcije.
      </p>
    </Card>
  );
}

function NonEuCarrierTable() {
  const rows = [
    ["Let sa aerodroma u EU (bilo koja avio-kompanija)", "Da", "positive"],
    ["Let iz Beograda sa Wizz Air / EU kompanijom", "Da", "positive"],
    ["Let iz Beograda sa Air Serbia", "EU261 obično ne važi", "negative"],
    ["Let iz Beograda sa Turkish Airlines", "Ne", "negative"],
    ["Let iz Londona posle Bregzita", "UK261 važi", "neutral"],
  ];

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Situacija</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Da li važi EU261?</th>
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

export function SrBlogArticlePage({ article }: SrBlogArticlePageProps) {
  const content = buildSrArticleContent(article);
  const articleUrl = `https://problemlot.com/sr/blog/${article.slug}`;
  const embedHref = buildClaimWingerSrLink(content.ctaDestination, {
    medium: "embedded_cta",
    campaign: article.slug,
    content: "high_article_embed",
  });
  const bottomHref = buildClaimWingerSrLink(content.ctaDestination, {
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
      inLanguage: "sr-RS",
    }),
    {
      ...generateArticleSchema({
        title: content.title,
        description: content.description,
        url: articleUrl,
        publishDate: article.publishDate,
        modifiedDate: article.updatedDate,
        author: "licencirani pravni savetnik kompanije ClaimWinger",
      }),
      inLanguage: "sr-RS",
    },
    {
      ...generateFAQSchema(content.faqs),
      inLanguage: "sr-RS",
    },
    generateBreadcrumbSchema([
      { name: "Početna", url: "https://problemlot.com/sr" },
      { name: "Blog", url: "https://problemlot.com/sr/blog" },
      { name: content.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutSr>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="sr_RS"
        language="Serbian"
        type="article"
      />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </Head>

      <article className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-amber-50 text-slate-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sr" className="hover:text-sky-700 dark:hover:text-sky-300">
              Početna
            </Link>
            <span>/</span>
            <Link href="/sr/blog" className="hover:text-sky-700 dark:hover:text-sky-300">
              Blog
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-800 dark:bg-sky-950/40 dark:text-sky-200">
              <ShieldCheck className="h-4 w-4" />
              {getCategoryLabelSr(article.category)}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Ažurirano: {article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Vreme čitanja: {article.readTime}
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
                      Za brzu proveru možete otvoriti{" "}
                      <a
                        href={introHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackClaimWingerSrClick(
                            `sr_article_${article.slug}_intro_text_link`,
                            introHref,
                          )
                        }
                        className="font-semibold text-sky-800 underline decoration-sky-300 underline-offset-4 transition hover:text-sky-950 dark:text-sky-300"
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
            <Card className="rounded-3xl border-sky-200 bg-gradient-to-br from-sky-700 to-slate-950 p-8 text-white shadow-xl dark:border-sky-900">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <ShieldCheck className="h-6 w-6 text-sky-100" />
                Kratak odgovor
              </h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                {content.quickAnswer.map((answer) => (
                  <p key={answer} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                    <span>{answer}</span>
                  </p>
                ))}
              </div>
            </Card>
          </section>

          <section className="mb-10 grid gap-4 md:grid-cols-2">
            {content.keyPoints.map((point) => (
              <Card key={point} className="rounded-2xl border-sky-100 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300" />
                  <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{point}</p>
                </div>
              </Card>
            ))}
          </section>

          <ClaimWingerSrSection
            className="mb-12"
            title="Proverite svoj slučaj u ClaimWinger-u"
            description="Formular je na engleskom jeziku, jer ClaimWinger još nema posebnu srpsku verziju. Postavljen je visoko u članku, kako biste odmah mogli da proverite da li kašnjenje leta, otkazan let, overbooking ili propuštena veza može da donese obeštećenje do 600 €."
            ctaHref={embedHref}
            ctaLabel={content.ctaPath === "/cancelled-flight" ? "Proverite otkazani let" : "Proverite let koji kasni"}
            placement={`sr_article_${article.slug}_embed_high`}
            loadingLabel="Učitavanje engleskog ClaimWinger formulara..."
            loadingDescription="Svoj slučaj možete proveriti direktno ovde, bez plaćanja unapred."
          />

          <main className="space-y-8">
            <CompensationTable />

            {content.sections.map((section) => (
              <Card
                key={section.title}
                className="rounded-3xl border-sky-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900"
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
                          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-sky-700 dark:text-sky-300" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Card>
            ))}

            <Card className="rounded-3xl border-sky-200 bg-sky-50/70 p-8 dark:border-sky-900 dark:bg-sky-950/10">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Kontekstualni linkovi za proveru slučaja
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Svaki link vodi ka engleskom ClaimWinger formularu sa posebnim UTM parametrima,
                kako bi se prepoznao izvor saobraćaja i pri kliku poslao događaj ka GTM-u.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerSrClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-sky-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-sky-800 dark:text-sky-300">
                      <ExternalLink className="h-4 w-4" />
                      Provera
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

            <Card className="rounded-3xl border-sky-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-slate-950 dark:text-white">
                <HelpCircle className="h-6 w-6 text-sky-700 dark:text-sky-300" />
                Najčešća pitanja
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

            <Card className="rounded-3xl bg-gradient-to-br from-sky-800 to-slate-950 p-8 text-white shadow-xl">
              <h2 className="mb-3 text-2xl font-bold">Imate li stvaran zahtev za obeštećenje?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-sky-50">
                Najbrži sledeći korak je da proverite rutu, vreme dolaska, uzrok problema i
                dokumenta. ClaimWinger radi po modelu no win, no fee, bez naknade unapred, a
                formular je na engleskom jeziku.
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimWingerSrClick(`sr_article_${article.slug}_bottom_cta`, bottomHref)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-sky-900 transition hover:bg-sky-50"
              >
                Proverite u ClaimWinger-u
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Još korisnih stranica
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/sr/kasnjenje-leta"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-50 dark:border-gray-800 dark:text-sky-300 dark:hover:bg-sky-950/20"
                >
                  Kašnjenje leta
                </Link>
                <Link
                  href="/sr/otkazan-let"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-50 dark:border-gray-800 dark:text-sky-300 dark:hover:bg-sky-950/20"
                >
                  Otkazan let
                </Link>
                <Link
                  href="/sr/kalkulator"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-50 dark:border-gray-800 dark:text-sky-300 dark:hover:bg-sky-950/20"
                >
                  Kalkulator
                </Link>
                <Link
                  href="/sr/blog"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-sky-800 transition hover:border-sky-300 hover:bg-sky-50 dark:border-gray-800 dark:text-sky-300 dark:hover:bg-sky-950/20"
                >
                  Srpski blog
                </Link>
              </div>
            </Card>
          </main>
        </div>
      </article>
    </LayoutSr>
  );
}
