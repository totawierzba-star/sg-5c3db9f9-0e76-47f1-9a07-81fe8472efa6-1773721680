import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-brussels-bru-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bru_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bru_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bru_airport";

const faqItems = [
  {
    question: "Mám pri meškaní na Brussels Airport (BRU) nárok?",
    answer:
      "Áno, ak let spadá pod EU261 a meškanie pri prílete je 3+ hodín. BRU je hlavné letisko v Belgicku a hub Brussels Airlines.",
  },
  {
    question: "Koľko dostanem pri lete z BRU?",
    answer:
      "250 € pri krátkych letoch (BRU – Viedeň), 400 € pri stredných, 600 € pri transatlantike a afrických linkách (BRU – New York, BRU – Kinshasa, BRU – Dakar).",
  },
  {
    question: "Akí dopravcovia z BRU?",
    answer:
      "Brussels Airlines (hub, Lufthansa Group), Ryanair (druhý hub), TUI fly, Lufthansa, KLM, Air France, Turkish Airlines, Emirates, Ethiopian. Intenzívna sieť do subsaharskej Afriky.",
  },
  {
    question: "Belgické štrajky – sú mimoriadne okolnosti?",
    answer:
      "Štrajk vlastnej posádky aerolinky nie je mimoriadna okolnosť (ECJ C-28/20). Štrajk ATC alebo štrajk pozemných služieb áno. V Belgicku bývajú štrajky pomerne časté.",
  },
  {
    question: "Brussels Airlines ide do skupiny Lufthansa?",
    answer:
      "Áno. Brussels Airlines je plne vlastnená Lufthansa Group. Reklamácia však sa posiela priamo na brusselsairlines.com, nie na lufthansa.com.",
  },
  {
    question: "Kto je belgický regulátor?",
    answer:
      "Belgický FOD Mobiliteit (SPF Mobilité) má oddelenie pre práva pasažierov. Podáva sa sťažnosť cez online formulár v holandčine, francúzštine alebo angličtine.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoBrusselsBruMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Brussels (BRU): meškania a odškodnenie EU261"
        description="Meškanie alebo zrušenie letu na Brussels Airport? Prehľad EU261 nárokov, hubu Brussels Airlines a postupu reklamácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Brussels (BRU): meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na Brussels Airport.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Brussels", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Brussels (BRU)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300">
              Letisko · BRU · Brussels National
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Brussels (BRU): meškania a odškodnenie
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Brussels Airport (IATA <strong>BRU</strong>) je hlavné letisko Belgicka a hub{" "}
              <strong>Brussels Airlines</strong>. Pre slovenských cestujúcich je typické pri
              prestupoch do Afriky, USA alebo Kanady. EÚ aerolinka + odlet z EÚ = plné pokrytie
              EU261. Overte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_bru_intro", delayedFlightHref)}
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
            <Card className="border-yellow-200 bg-gradient-to-br from-yellow-600 to-orange-700 p-8 text-white shadow-xl dark:border-yellow-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-yellow-50">
                <p>BRU = EÚ letisko, plné EU261. Sumy 250 / 400 / 600 €.</p>
                <p>Hub Brussels Airlines – pri prípadoch reklamácia u nej, nie u Lufthansy.</p>
                <p>Belgicko má časté štrajky; overujte typ štrajku pre kompenzáciu.</p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Brussels Airport meškal?"
            description="Brussels Airlines, Ryanair BRU base aj TUI fly – ClaimWinger rieši všetkých. Preverenie zdarma."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bru_airport"
            ctaLabel="Preveriť BRU prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_bru_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kompenzačné pásma pri letoch z/do BRU
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BRU – Viedeň, BRU – Budapešť, BRU – Praha, BRU – Varšava.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BRU – Istanbul, BRU – Tel Aviv, BRU – Dubaj.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BRU – New York, BRU – Washington, BRU – Dakar, BRU – Kinshasa, BRU – Kigali.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Nechcete sa učiť holandčinu ani francúzštinu?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger komunikuje s Brussels Airlines v angličtine aj v nemčine. Pri eskalácii
                vie osloviť belgický FOD Mobiliteit. Preverenie zdarma.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_bru_final_primary", delayedFlightHref)}
                  >
                    Preveriť BRU meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_bru_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený BRU let
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
                  Brussels Airlines odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka na BRU – proces.
                </p>
                <Link
                  href="/sk/blog/brussels-airlines-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Lufthansa reklamácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Brussels Airlines je v skupine Lufthansa.
                </p>
                <Link
                  href="/sk/blog/ako-podat-reklamaciu-lufthansa-krok-za-krokom"
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
                  Kedy štrajk zbavuje aerolinku povinnosti platiť.
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
