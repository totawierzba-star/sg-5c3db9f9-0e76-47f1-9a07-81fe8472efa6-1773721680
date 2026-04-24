import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-londyn-heathrow-lhr-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lhr_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lhr_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lhr_airport";

const faqItems = [
  {
    question: "Platí na Heathrow EU261 alebo UK261 po Brexite?",
    answer:
      "Pri letoch z Heathrow (UK) platí UK261 – takmer identická kópia EU261 s identickými sumami v GBP ekvivalente (220 GBP / 350 GBP / 520 GBP) alebo v EUR ak aerolinka platí EUR. Pri letoch do UK s EÚ aerolinkou stále platí EU261.",
  },
  {
    question: "Koľko dostanem za meškanie z Heathrow?",
    answer:
      "Pri krátkych letoch 250 € / 220 GBP, pri letoch 1 500 – 3 500 km 400 € / 350 GBP, pri transatlantike 600 € / 520 GBP.",
  },
  {
    question: "Ktorý terminál na Heathrow?",
    answer:
      "T2: Star Alliance (Lufthansa, SWISS, Austrian, Aegean, LOT, Singapore). T3: OneWorld non-BA a long-haul (American, Cathay, Qantas, Finnair). T4: SkyTeam (KLM, Delta, Air France, Kenya). T5: British Airways a Iberia. T1 zatvorené.",
  },
  {
    question: "Akí dopravcovia z LHR sú populárni pre slovenských cestujúcich?",
    answer:
      "British Airways (hub), Lufthansa (cez Frankfurt), Air France (cez Paríž), Austrian (cez Viedeň), LOT (cez Varšavu). Priama linka Bratislava – Heathrow neexistuje; najčastejšie cez Viedeň alebo Varšavu.",
  },
  {
    question: "Kto je britský regulátor po Brexite?",
    answer:
      "Civil Aviation Authority (CAA). Prijíma sťažnosti na aerolinky operujúce z UK. Pri komplikovaných prípadoch funguje aj britské Alternative Dispute Resolution (CEDR).",
  },
  {
    question: "Heathrow je známy dlhými radami – vplýva na kompenzáciu?",
    answer:
      "Dlhé rady na bezpečnostnej kontrole alebo pasovej kontrole nie sú zodpovednosťou aerolinky. Ale ak ste pasovú zmeškali kvôli meškaniu odvozového letu, aerolinka zostáva zodpovedná za nadväzujúci let.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoLondynHeathrowLhrMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Londýn Heathrow (LHR): meškania a UK261/EU261"
        description="Meškanie alebo zrušenie letu na Heathrow? Prehľad UK261 / EU261 nárokov, typických dopravcov a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Londýn Heathrow (LHR): meškania a odškodnenie",
            description:
              "Sprievodca UK261 / EU261 nárokom pri meškaní alebo zrušení letu na Heathrow.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Londýn Heathrow", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Londýn Heathrow</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
              Letisko · LHR · London Heathrow · UK261
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Londýn Heathrow (LHR): meškania a odškodnenie
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Heathrow (IATA <strong>LHR</strong>) je najväčšie letisko vo Veľkej Británii a 4. v
              Európe po počte pasažierov. Po Brexite platí <strong>UK261</strong> – britská kópia
              EU261 s takmer identickými pravidlami aj sumami (v GBP alebo EUR). Pre slovenských
              cestujúcich ide najčastejšie o tranzit cez Viedeň, Varšavu alebo Prahu. Preverte nárok
              cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_lhr_intro", delayedFlightHref)}
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
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-violet-200 bg-gradient-to-br from-violet-600 to-purple-700 p-8 text-white shadow-xl dark:border-violet-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-violet-50">
                <p>
                  <strong>Odlet z LHR:</strong> platí UK261 (paralelné k EU261, sumy 220 / 350 / 520
                  GBP alebo EUR ekvivalent).
                </p>
                <p>
                  <strong>Prílet do LHR s EÚ aerolinkou:</strong> platí EU261 – sumy 250 / 400 / 600 €.
                </p>
                <p>
                  Eskalácia cez <strong>Civil Aviation Authority (CAA)</strong> alebo CEDR
                  (alternative dispute resolution).
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Meškanie na Heathrow?"
            description="ClaimWinger pozná UK261 aj EU261. Pri odmietnutí eskaluje cez CAA. Preverenie zdarma, provízia 30 % pri úspechu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=lhr_airport"
            ctaLabel="Preveriť LHR prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_lhr_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kompenzačné pásma pri letoch z/do LHR
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  250 € / 220 GBP
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LHR – Viedeň, LHR – Paríž, LHR – Amsterdam, LHR – Frankfurt. Do 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  400 € / 350 GBP
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LHR – Istanbul, LHR – Dubaj, LHR – Tel Aviv. 1 500 – 3 500 km mimo EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  600 € / 520 GBP
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LHR – New York, LHR – Los Angeles, LHR – Tokio, LHR – Singapur. Transatlantika.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                BA alebo iný dopravca meškal?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger rieši British Airways, Virgin Atlantic aj Lufthansa Group. UK261
                a EU261 paralelne. Pri odmietnutí cesta cez CAA a britský súd.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_lhr_final_primary", delayedFlightHref)}
                  >
                    Preveriť LHR meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_lhr_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený LHR let
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
                  British Airways odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka v LHR.
                </p>
                <Link
                  href="/sk/blog/british-airways-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Letisko Luton
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Low-cost letisko v Londýne pre Wizz Air a Ryanair.
                </p>
                <Link
                  href="/sk/blog/letisko-londyn-luton-ltn-meskania"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Letisko Stansted
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Druhé low-cost letisko Londýna.
                </p>
                <Link
                  href="/sk/blog/letisko-londyn-stansted-stn-meskania"
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
