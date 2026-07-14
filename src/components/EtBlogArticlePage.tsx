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

import { ClaimWingerEtSection } from "@/components/ClaimWingerEtSection";
import { LayoutEt } from "@/components/LayoutEt";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildEtArticleContent } from "@/lib/etArticleContent";
import { type BlogArticleEt, getCategoryLabelEt } from "@/lib/blogArticlesEt";
import {
  buildClaimWingerEtLink,
  trackClaimWingerEtClick,
} from "@/lib/claimwingerLinksEt";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type EtBlogArticlePageProps = {
  article: BlogArticleEt;
};

function CompensationTable() {
  return (
    <Card className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        Hüvitise tabel: 250, 400 või 600 €
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-red-50 text-slate-900 dark:bg-red-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Vahemaa</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Summa</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Näide marsruudist</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">kuni 1 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">250 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">lühikesed Euroopa marsruudid, nt Tallinn–Stockholm (~390 km)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1 500–3 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">400 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">keskmise vahemaa lennud, nt Tallinn–Frankfurt (~1 540 km)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">üle 3 500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">600 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">pikad mandritevahelised marsruudid, nt Tallinn–New York</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Summad on fikseeritud määrusega (EÜ) nr 261/2004. Teie tegelikud õigused sõltuvad
        marsruudist, hilinemisest sihtkohas, häire põhjusest ja kohaldatavast jurisdiktsioonist.
      </p>
    </Card>
  );
}

function NonEuCarrierTable() {
  const rows = [
    ["Lend väljub EL-i lennujaamast, nt Tallinnast (ükskõik milline lennufirma)", "Jah", "positive"],
    ["Lend saabub EL-i Euroopa lennufirmaga", "Jah", "positive"],
    ["Lend väljub väljastpoolt EL-i mitte-EL-i lennufirmaga", "Ei", "negative"],
    ["Tagasilend Istanbulist/Dubaist Turkish/flydubai lennuga", "Ei", "negative"],
    ["Lend Londonist / Suurbritanniast pärast Brexitit", "Kehtib UK261", "neutral"],
  ];

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Olukord</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Kas EÜ 261 kehtib?</th>
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

export function EtBlogArticlePage({ article }: EtBlogArticlePageProps) {
  const content = buildEtArticleContent(article);
  const articleUrl = `https://problemlot.com/et/blog/${article.slug}`;
  const embedHref = buildClaimWingerEtLink(content.ctaDestination, {
    medium: "embedded_cta",
    campaign: article.slug,
    content: "high_article_embed",
  });
  const bottomHref = buildClaimWingerEtLink(content.ctaDestination, {
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
      inLanguage: "et-EE",
    }),
    {
      ...generateArticleSchema({
        title: content.title,
        description: content.description,
        url: articleUrl,
        publishDate: article.publishDate,
        modifiedDate: article.updatedDate,
        author: "ClaimWingeri litsentseeritud õigusnõustaja",
      }),
      inLanguage: "et-EE",
    },
    {
      ...generateFAQSchema(content.faqs),
      inLanguage: "et-EE",
    },
    generateBreadcrumbSchema([
      { name: "Avaleht", url: "https://problemlot.com/et" },
      { name: "Blogi", url: "https://problemlot.com/et/blog" },
      { name: content.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutEt>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="et_EE"
        language="Estonian"
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
            <Link href="/et" className="hover:text-red-700 dark:hover:text-red-300">
              Avaleht
            </Link>
            <span>/</span>
            <Link href="/et/blog" className="hover:text-red-700 dark:hover:text-red-300">
              Blogi
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <ShieldCheck className="h-4 w-4" />
              {getCategoryLabelEt(article.category)}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Uuendatud: {article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Lugemisaeg: {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Teema: {article.cluster}
              </span>
            </div>

            <div className="mt-7 space-y-5 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === 1 && (
                    <>
                      {" "}
                      Kiireks kontrolliks võite avada{" "}
                      <a
                        href={introHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackClaimWingerEtClick(
                            `et_article_${article.slug}_intro_text_link`,
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
                Lühivastus
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

          <ClaimWingerEtSection
            className="mb-12"
            title="Kontrollige oma juhtumit ClaimWingeris"
            description="Vorm on saadaval eesti keeles. See on paigutatud artiklis kõrgele, et saaksite kohe kontrollida hilinemist, tühistamist, overbookingut või maha jäänud jätkulendu EÜ 261 või UK261 alusel."
            ctaHref={embedHref}
            ctaLabel={content.ctaPath === "/cancelled-flight" ? "Kontrollige tühistatud lendu" : "Kontrollige hilinenud lendu"}
            placement={`et_article_${article.slug}_embed_high`}
            embedCampaign={article.slug}
            embedContent="high_article_embed"
            loadingLabel="ClaimWingeri eestikeelne vorm laadib..."
            loadingDescription="Hetke pärast saate kontrollida konkreetset lendu ilma ettemaksuta."
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
                Kasulikud kontrollilingid
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Valige tee vastavalt oma olukorrale. Kõik lingid viivad ClaimWingeri eestikeelsesse
                voogu, mis on märgistatud Eesti reisijate liikluse jaoks.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerEtClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-red-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-red-800 dark:text-red-300">
                      <ExternalLink className="h-4 w-4" />
                      Kontroll
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
                Korduma kippuvad küsimused
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
              <h2 className="mb-3 text-2xl font-bold">Kas teie juhtum on reaalne?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-red-50">
                Kiireim järgmine samm on kontrollida marsruuti, saabumisaega, häire põhjust ja
                dokumente. ClaimWinger töötab no-win-no-fee mudelil, ilma ettemaksuta.
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimWingerEtClick(`et_article_${article.slug}_bottom_cta`, bottomHref)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-red-900 transition hover:bg-red-50"
              >
                Kontrollige ClaimWingeris
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Veel kasulikke lehti
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/et/hilinenud-lend"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Hilinenud lend
                </Link>
                <Link
                  href="/et/tuhistatud-lend"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Tühistatud lend
                </Link>
                <Link
                  href="/et/kalkulaator"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Hüvitise kalkulaator
                </Link>
                <Link
                  href="/et/blog"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Eestikeelne blogi
                </Link>
              </div>
            </Card>
          </main>
        </div>
      </article>
    </LayoutEt>
  );
}
