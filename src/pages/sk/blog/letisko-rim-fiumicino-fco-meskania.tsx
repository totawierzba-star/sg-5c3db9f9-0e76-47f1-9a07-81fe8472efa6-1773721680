import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-rim-fiumicino-fco-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=fco_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=fco_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=fco_airport";

const faqItems = [
  {
    question: "Mám pri meškaní na letisku Rím Fiumicino nárok na odškodnenie?",
    answer:
      "Áno, ak let spadá pod EU261 a meškanie pri prílete je 3+ hodín. Fiumicino je najväčšie talianske letisko a hub ITA Airways.",
  },
  {
    question: "Koľko dostanem za meškanie letu z FCO?",
    answer:
      "250 € pri krátkych trasách do 1 500 km (FCO – Viedeň), 400 € pri letoch 1 500 – 3 500 km alebo v EÚ nad 1 500 km, 600 € pri transatlantike (FCO – New York).",
  },
  {
    question: "Fiumicino vs Ciampino – rozdiel pri reklamácii?",
    answer:
      "Fiumicino (FCO) je hlavné medzinárodné letisko Ríma. Ciampino (CIA) je menšie low-cost letisko pre Ryanair a Wizz Air. Proces reklamácie je rovnaký – záleží na aerolinke, nie na letisku.",
  },
  {
    question: "Akí dopravcovia lietajú z FCO?",
    answer:
      "ITA Airways (hub), Ryanair, Vueling, Lufthansa, Air France, KLM, Emirates, Turkish Airlines, Delta, American Airlines. Pre slovenských cestujúcich je najbežnejšia kombinácia ITA alebo Ryanair.",
  },
  {
    question: "Aké mimoriadne okolnosti v Ríme často uvádza aerolinka?",
    answer:
      "Štrajky leteckých pracovníkov (bývajú ohlásené vopred – nie mimoriadne okolnosti), štrajk ATC (je mimoriadnou okolnosťou), preplnenie vzdušného priestoru nad strednou Itáliou.",
  },
  {
    question: "Tranzit z Bratislavy cez FCO funguje ako?",
    answer:
      "Z Bratislavy nie je priama linka do FCO. Bežný smer je Viedeň – Rím (Austrian, ITA Airways, Ryanair) s MCT (minimum connecting time) 45 minút v rámci Schengenu, 90 minút pri non-Schengen prestupoch.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoRimFiumicinoFcoMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Rím Fiumicino (FCO): meškania a odškodnenie EU261"
        description="Meškal alebo zrušili let na letisku Rím Fiumicino? Prehľad nárokov podľa EU261, typických dopravcov a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Rím Fiumicino (FCO): meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na letisku Rím Fiumicino.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Rím FCO", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Rím Fiumicino (FCO)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Letisko · FCO · Leonardo da Vinci-Fiumicino
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Rím Fiumicino (FCO): meškania a odškodnenie
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Fiumicino (IATA <strong>FCO</strong>) je najväčšie letisko v Taliansku a hub{" "}
              <strong>ITA Airways</strong>. Pre slovenských cestujúcich je najčastejšie stopou pri
              prestupoch na transatlantické linky (ITA do USA) alebo pri priamom lete z Viedne
              (Austrian, ITA). Štrajky v taliansko sú bežné, preto pri meškaní vždy dobre preverte
              dôvod. Overte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_fco_intro", delayedFlightHref)}
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-600 to-yellow-700 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  Fiumicino = hub ITA Airways. Pri odlete z FCO plne EU261, pri prílete len ak
                  operuje EÚ aerolinka.
                </p>
                <p>
                  Sumy: <strong>250 / 400 / 600 €</strong>. Transatlantika z FCO = 600 €.
                </p>
                <p>
                  Štrajk ATC = mimoriadna okolnosť. Štrajk posádky ITA = nie je mimoriadna okolnosť.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Rím vás zdržal na 3+ hodín?"
            description="ClaimWinger rieši talianske prípady vrátane komunikácie s ITA Airways v taliančine a eskalácie na ENAC."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=fco_airport"
            ctaLabel="Preveriť FCO prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_fco_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              FCO – kľúčové fakty
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  IATA: FCO · cca 45 mil. pasažierov/rok
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najväčšie medzinárodné letisko v Taliansku. Zároveň hlavný hub ITA Airways pre
                  lety do USA, Latinskej Ameriky, Ázie a Afriky.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3 terminály T1, T3, T5
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  T1: Schengen. T3: hlavný (ITA, SkyTeam, OneWorld). T5: USA odlety s dodatočnou
                  bezpečnostnou kontrolou.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Štrajky sú pomerne časté
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V Taliansku štrajky odborov bývajú pravidelné. Väčšinou sú ohlásené vopred, čo
                  znamená, že <strong>nie sú mimoriadnou okolnosťou</strong> podľa rozsudkov ECJ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Minimum connecting time
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  T1 – T3: 45 minút (Schengen → Schengen). T3 – T3: 60 minút (Schengen →
                  non-Schengen). T3 – T5: 90 minút (non-Schengen → USA).
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické kompenzačné pásma pri letoch z/do FCO
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  FCO – Viedeň, FCO – Budapešť, FCO – Paríž, FCO – Madrid. Do 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  FCO – Káhira, FCO – Tel Aviv, FCO – Dubaj. 1 500 – 3 500 km mimo EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  FCO – New York, FCO – Tokio, FCO – Buenos Aires, FCO – Los Angeles. Transatlantika
                  nad 3 500 km = 600 €.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Taliansky pomalý proces? Odovzdajte to ClaimWinger
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ITA Airways reklamácie niekedy trvajú aj 2 mesiace. ClaimWinger má priamy kontakt na
                customer care a pri mlčaní eskaluje na ENAC alebo Giudice di Pace. Preverenie zdarma.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_fco_final_primary", delayedFlightHref)}
                  >
                    Preveriť FCO meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_fco_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený FCO let
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
                  ITA Airways odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka v Ríme – proces a typické situácie.
                </p>
                <Link
                  href="/sk/blog/ita-airways-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Rím meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšia trasa pre slovenských cestujúcich do Ríma.
                </p>
                <Link
                  href="/sk/blog/vieden-rim-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Štrajk a kompenzácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Talianske štrajky sú časté – kedy platí kompenzácia.
                </p>
                <Link
                  href="/sk/blog/strajk-lini-lotniczych-odszkodowanie"
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
