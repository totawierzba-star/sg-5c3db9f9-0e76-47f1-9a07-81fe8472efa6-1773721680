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

import { ClaimWingerDeSection } from "@/components/ClaimWingerDeSection";
import { LayoutDe } from "@/components/LayoutDe";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { buildDeArticleContent } from "@/lib/deArticleContent";
import { type BlogArticleDe, getCategoryLabelDe } from "@/lib/blogArticlesDe";
import {
  buildClaimWingerDeLink,
  trackClaimWingerDeClick,
} from "@/lib/claimwingerLinksDe";
import {
  combineSchemas,
  generateArticleSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateOrganizationSchema,
  generateWebPageSchema,
} from "@/lib/schemaGenerator";

type DeBlogArticlePageProps = {
  article: BlogArticleDe;
};

function CompensationTable() {
  return (
    <Card className="rounded-3xl border-red-100 bg-white p-7 shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
        Entschädigungstabelle: 250, 400 oder 600 €
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-red-50 text-slate-900 dark:bg-red-950/30 dark:text-white">
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Entfernung</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Betrag</th>
              <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Beispielroute</th>
            </tr>
          </thead>
          <tbody className="text-slate-700 dark:text-slate-300">
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">bis 1.500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">250 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">kurze europäische Strecken, z. B. Berlin–Warschau (~520 km)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">1.500–3.500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">400 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">Mittelstreckenflüge, z. B. Berlin–Antalya (~2.500 km)</td>
            </tr>
            <tr>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">über 3.500 km</td>
              <td className="border border-slate-200 px-4 py-3 font-semibold dark:border-gray-800">600 €</td>
              <td className="border border-slate-200 px-4 py-3 dark:border-gray-800">lange Interkontinentalstrecken, z. B. Frankfurt–New York (~6.200 km) oder LOT-Langstrecke über Warschau</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
        Die Beträge sind durch die Verordnung (EG) Nr. 261/2004 festgelegt. Ihre tatsächlichen
        Ansprüche hängen von der Strecke, der Verspätung am Zielort, der Ursache der Störung und
        der anwendbaren Rechtsordnung ab.
      </p>
    </Card>
  );
}

function NonEuCarrierTable() {
  const rows = [
    ["Flug startet an einem deutschen oder anderen EU-Flughafen, z. B. in Berlin oder Frankfurt (beliebige Airline)", "Ja", "positive"],
    ["Flug landet in der EU mit einer europäischen Airline", "Ja", "positive"],
    ["Flug startet außerhalb der EU mit einer Nicht-EU-Airline", "Nein", "negative"],
    ["Rückflug ab Istanbul/Dubai mit Turkish/flydubai", "Nein", "negative"],
    ["Flug ab London / Großbritannien nach dem Brexit", "Es gilt UK261", "neutral"],
  ];

  return (
    <div className="mt-5 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="bg-amber-50 text-slate-900 dark:bg-amber-950/30 dark:text-white">
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Situation</th>
            <th className="border border-slate-200 px-4 py-3 dark:border-gray-800">Gilt EG 261?</th>
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

export function DeBlogArticlePage({ article }: DeBlogArticlePageProps) {
  const content = buildDeArticleContent(article);
  const articleUrl = `https://problemlot.com/de/blog/${article.slug}`;
  const embedHref = buildClaimWingerDeLink(content.ctaDestination, {
    medium: "embedded_cta",
    campaign: article.slug,
    content: "high_article_embed",
  });
  const bottomHref = buildClaimWingerDeLink(content.ctaDestination, {
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
      inLanguage: "de-DE",
    }),
    {
      ...generateArticleSchema({
        title: content.title,
        description: content.description,
        url: articleUrl,
        publishDate: article.publishDate,
        modifiedDate: article.updatedDate,
        author: "Lizenzierter Rechtsberater von ClaimWinger",
      }),
      inLanguage: "de-DE",
    },
    {
      ...generateFAQSchema(content.faqs),
      inLanguage: "de-DE",
    },
    generateBreadcrumbSchema([
      { name: "Startseite", url: "https://problemlot.com/de" },
      { name: "Blog", url: "https://problemlot.com/de/blog" },
      { name: content.title, url: articleUrl },
    ]),
  );

  return (
    <LayoutDe>
      <SEO
        title={content.seoTitle}
        description={content.description}
        url={articleUrl}
        canonicalUrl={articleUrl}
        locale="de_DE"
        language="German"
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
            <Link href="/de" className="hover:text-red-700 dark:hover:text-red-300">
              Startseite
            </Link>
            <span>/</span>
            <Link href="/de/blog" className="hover:text-red-700 dark:hover:text-red-300">
              Blog
            </Link>
            <span>/</span>
            <span>{article.title}</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-950/40 dark:text-red-200">
              <ShieldCheck className="h-4 w-4" />
              {getCategoryLabelDe(article.category)}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 dark:text-white md:text-5xl">
              {content.title}
            </h1>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Aktualisiert: {article.updatedDate}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Lesezeit: {article.readTime}
              </span>
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Thema: {article.cluster}
              </span>
            </div>

            <div className="mt-7 space-y-5 text-xl leading-9 text-slate-700 dark:text-slate-300">
              {content.intro.map((paragraph, index) => (
                <p key={paragraph}>
                  {paragraph}
                  {index === 1 && (
                    <>
                      {" "}
                      Für eine schnelle Prüfung können Sie{" "}
                      <a
                        href={introHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackClaimWingerDeClick(
                            `de_article_${article.slug}_intro_text_link`,
                            introHref,
                          )
                        }
                        className="font-semibold text-red-800 underline decoration-red-300 underline-offset-4 transition hover:text-red-950 dark:text-red-300"
                      >
                        {content.ctaAnchor}
                      </a>{" "}
                      öffnen.
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
                Kurzantwort
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

          <ClaimWingerDeSection
            className="mb-12"
            title="Prüfen Sie Ihren Fall bei ClaimWinger"
            description="Das Formular ist auf Deutsch verfügbar. Es ist weit oben im Artikel platziert, damit Sie Verspätung, Annullierung, Überbuchung oder einen verpassten Anschlussflug nach EG 261 oder UK261 sofort prüfen können."
            ctaHref={embedHref}
            ctaLabel={content.ctaPath === "/cancelled-flight" ? "Annullierten Flug prüfen" : "Verspäteten Flug prüfen"}
            placement={`de_article_${article.slug}_embed_high`}
            embedCampaign={article.slug}
            embedContent="high_article_embed"
            loadingLabel="Das deutschsprachige ClaimWinger-Formular wird geladen..."
            loadingDescription="Gleich können Sie Ihren konkreten Flug ohne Vorauszahlung prüfen."
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
                Nützliche Prüf-Links
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Wählen Sie den Weg, der zu Ihrer Situation passt. Alle Links führen in den
                deutschsprachigen ClaimWinger-Flow, der für Reisende aus Deutschland markiert ist.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {content.contextualLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimWingerDeClick(link.placement, link.href)}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg dark:border-slate-800 dark:bg-gray-900 dark:hover:border-red-700"
                  >
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-red-800 dark:text-red-300">
                      <ExternalLink className="h-4 w-4" />
                      Prüfung
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
                Häufig gestellte Fragen
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
              <h2 className="mb-3 text-2xl font-bold">Ist Ihr Fall aussichtsreich?</h2>
              <p className="mb-6 max-w-2xl leading-8 text-red-50">
                Der schnellste nächste Schritt ist, Strecke, Ankunftszeit, Ursache der Störung und
                Unterlagen zu prüfen. ClaimWinger arbeitet nach dem No-win-no-fee-Modell, ohne
                Vorauszahlung.
              </p>
              <a
                href={bottomHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimWingerDeClick(`de_article_${article.slug}_bottom_cta`, bottomHref)
                }
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-red-900 transition hover:bg-red-50"
              >
                Bei ClaimWinger prüfen
                <ArrowRight className="h-4 w-4" />
              </a>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-white p-7 dark:border-gray-800 dark:bg-gray-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-950 dark:text-white">
                Weitere hilfreiche Seiten
              </h2>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/de/verspaeteter-flug"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Verspäteter Flug
                </Link>
                <Link
                  href="/de/annullierter-flug"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Annullierter Flug
                </Link>
                <Link
                  href="/de/rechner"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Entschädigungsrechner
                </Link>
                <Link
                  href="/de/blog"
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-red-800 transition hover:border-red-300 hover:bg-red-50 dark:border-gray-800 dark:text-red-300 dark:hover:bg-red-950/20"
                >
                  Deutschsprachiger Blog
                </Link>
              </div>
            </Card>
          </main>
        </div>
      </article>
    </LayoutDe>
  );
}
