import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-kodan-cph-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cph_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cph_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cph_airport";

const faqItems = [
  {
    question: "Mám pri letisku Kodaň (CPH) nárok na odškodnenie?",
    answer:
      "Áno. Dánsko je plným členom EÚ. EU261 platí pri odlete z CPH aj pri prílete z tretích krajín s EÚ aerolinkou. Sumy 250 / 400 / 600 €.",
  },
  {
    question: "Koľko dostanem za meškanie z CPH?",
    answer:
      "250 € pri krátkych trasách do 1 500 km, 400 € pri stredných (CPH – Viedeň ~1 100 km = 250 €), 600 € pri transatlantike (CPH – New York, CPH – Bangkok s SAS, CPH – San Francisco).",
  },
  {
    question: "Akí dopravcovia z CPH?",
    answer:
      "SAS Scandinavian Airlines (hub), Norwegian, Ryanair, Wizz Air, easyJet, KLM, Lufthansa, Emirates, Qatar Airways, Delta, United. CPH je tiež kľúčovou bránou pre cesty do Škandinávie.",
  },
  {
    question: "Aké mimoriadne okolnosti v CPH?",
    answer:
      "Zimné počasie (sneh, ľad), štrajk ATC, štrajk pozemného personálu. Zimné počasie môže byť mimoriadnou okolnosťou ak bránilo letu, ale aerolinka musí predložiť konkrétne dôkazy.",
  },
  {
    question: "SAS patrí do Lufthansa Group alebo samostatne?",
    answer:
      "SAS je od 2024 súčasťou SkyTeam aliancie (nie Star Alliance, kde bola predtým). Zároveň prešla reštrukturalizáciou v chapter 11. Reklamácie sa podávajú priamo SAS.",
  },
  {
    question: "Dánsky regulátor?",
    answer:
      "Danish Transport Authority (Trafikstyrelsen). Prijíma sťažnosti v dánčine a angličtine.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoKodanCphMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Kodaň (CPH): meškania a odškodnenie EU261"
        description="Meškanie alebo zrušenie letu na Kodani? Prehľad EU261 nárokov, hubu SAS a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Kodaň (CPH): meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na Copenhagen Airport.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            author: { "@type": "Organization", name: "problemlot.com" },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
            },
            image: "https://problemlot.com/og-image.png",
            inLanguage: "sk-SK",
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" },
              { "@type": "ListItem", position: 3, name: "Letisko Kodaň", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Kodaň (CPH)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Letisko · CPH · Copenhagen Kastrup
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Kodaň (CPH): meškania a odškodnenie
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Kodaň Kastrup (IATA <strong>CPH</strong>) je najväčšie letisko v Škandinávii a hub{" "}
              <strong>SAS</strong>. Pre slovenských cestujúcich je typické pri prestupoch do
              severských destinácií (Oslo, Štokholm, Helsinky, Reykjavík) alebo na severoamerické
              linky SAS. EÚ aerolinka + odlet z EÚ = plné pokrytie EU261. Overte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_cph_intro", delayedFlightHref)}
              >
                ClaimWinger
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 24. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 7 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-sky-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>CPH = EÚ letisko, plne EU261. Sumy 250 / 400 / 600 €.</p>
                <p>Hub SAS – od 2024 v SkyTeam aliancii. Reklamácia priamo u SAS.</p>
                <p>Zimné počasie môže byť mimoriadnou okolnosťou. Žiadajte dôkazy.</p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="SAS alebo iná aerolinka na CPH meškala?"
            description="ClaimWinger pozná SAS procesy pred aj po reštrukturalizácii. Preverenie zdarma, provízia 30 % pri úspechu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=cph_airport"
            ctaLabel="Preveriť CPH prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_cph_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické kompenzácie pri letoch z/do CPH
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  CPH – Viedeň, CPH – Berlín, CPH – Amsterdam, CPH – Londýn. Pod 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  CPH – Istanbul, CPH – Madrid, CPH – Reykjavík, CPH – Moskva (pozastavené).
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  CPH – New York, CPH – Bangkok (SAS), CPH – Tokio, CPH – San Francisco.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Škandinávsky prestup s problémom?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger rieši SAS aj iné škandinávske aerolinky vrátane prípadov z reštrukturalizácie.
                Pri zamietnutí eskalácia cez Trafikstyrelsen alebo dánsky súd.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_cph_final_primary", delayedFlightHref)}
                  >
                    Preveriť CPH meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_cph_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený CPH let
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  SAS odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka na CPH.
                </p>
                <Link
                  href="/sk/blog/sas-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Norwegian odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Druhá škandinávska aerolinka.
                </p>
                <Link
                  href="/sk/blog/norwegian-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kedy zimné počasie zbavuje aerolinku povinnosti.
                </p>
                <Link
                  href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Často kladené otázky
            </h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  <summary className="cursor-pointer text-lg font-semibold text-slate-900 dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
