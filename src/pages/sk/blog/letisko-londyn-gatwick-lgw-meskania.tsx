import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-londyn-gatwick-lgw-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lgw_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lgw_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lgw_airport";

const faqItems = [
  {
    question: "Platí na Gatwick EU261 alebo UK261?",
    answer:
      "Po Brexite pri odlete z LGW platí UK261 s takmer identickými pravidlami aj sumami ako EU261. Pri prílete do LGW s EÚ aerolinkou platí EU261.",
  },
  {
    question: "Akí dopravcovia lietajú z LGW?",
    answer:
      "easyJet (druhý hub po LTN), British Airways (short-haul a long-haul leisure), Virgin Atlantic, Norwegian, Wizz Air, Ryanair, TUI Airways. Menej ako Heathrow ale výrazne lacnejšie.",
  },
  {
    question: "Koľko dostanem za meškanie z LGW?",
    answer:
      "250 € / 220 GBP pri krátkych letoch do 1 500 km, 400 € / 350 GBP pri stredných, 600 € / 520 GBP pri transatlantike (LGW – New York s BA, LGW – USA s Virgin).",
  },
  {
    question: "Terminály North a South – rozdiel?",
    answer:
      "North Terminal: easyJet, British Airways short-haul, Virgin Atlantic. South Terminal: BA long-haul, Norwegian, Wizz Air, Ryanair, TUI. Terminály spojené shuttle vlakom – 3 minúty jazdy.",
  },
  {
    question: "Gatwick je známy dlhými radami – nárok?",
    answer:
      "Dlhé rady na bezpečnostnej kontrole nie sú zodpovednosťou aerolinky. Ale zmeškaný nadväzujúci let pre meškanie odvozového letu áno.",
  },
  {
    question: "Dá sa letieť z Bratislavy priamo do LGW?",
    answer:
      "Priama linka Bratislava – Gatwick neexistuje. Pre cestujúcich zo SR je najbežnejšia kombinácia Wizz Air alebo Ryanair z Viedne do LGW.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoLondynGatwickLgwMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Londýn Gatwick (LGW): meškania a UK261/EU261"
        description="Meškal alebo zrušili let na Gatwicku? Prehľad UK261/EU261 nárokov, typických dopravcov a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Londýn Gatwick (LGW): meškania a odškodnenie",
            description:
              "Sprievodca UK261/EU261 nárokom pri meškaní alebo zrušení letu na Gatwicku.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Gatwick", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Gatwick</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
              Letisko · LGW · London Gatwick
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Londýn Gatwick (LGW): meškania a odškodnenie
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Gatwick (IATA <strong>LGW</strong>) je druhé najväčšie letisko v Londýne a hlavný hub
              easyJet. Po Brexite platí <strong>UK261</strong> s takmer identickými pravidlami ako
              EU261 a sumami 220 / 350 / 520 GBP (alebo EUR ekvivalent). Pre slovenských cestujúcich
              ide najčastejšie o easyJet alebo Wizz Air cez Viedeň. Preverte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_lgw_intro", delayedFlightHref)}
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
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-600 to-blue-700 p-8 text-white shadow-xl dark:border-indigo-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-indigo-50">
                <p>Odlet z LGW = UK261. Prílet do LGW s EÚ aerolinkou = EU261.</p>
                <p>Sumy: <strong>220 / 350 / 520 GBP</strong> (UK261) alebo <strong>250 / 400 / 600 €</strong>.</p>
                <p>
                  Dva terminály (North, South) spojené shuttle vlakom. easyJet je v Gatwicku hlavný
                  dopravca.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Gatwick vám zrušil let alebo meškal?"
            description="easyJet, British Airways, Virgin Atlantic a iné – ClaimWinger rieši všetkých. UK261 aj EU261."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=lgw_airport"
            ctaLabel="Preveriť LGW prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_lgw_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kompenzačné pásma pri letoch z/do LGW
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  250 € / 220 GBP
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LGW – Viedeň, LGW – Barcelona, LGW – Rím. Do 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  400 € / 350 GBP
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LGW – Istanbul, LGW – Dubaj, LGW – Tel Aviv. 1 500 – 3 500 km mimo EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  600 € / 520 GBP
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LGW – New York, LGW – Orlando (Virgin), LGW – Barbados. Transatlantika.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Odovzdajte prípad Gatwick profesionálom
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                easyJet aj Virgin Atlantic mávajú zložité procesy. ClaimWinger vie komunikovať
                s britskou CAA aj so slovenským Dopravným úradom. Preverenie zdarma.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_lgw_final_primary", delayedFlightHref)}
                  >
                    Preveriť LGW meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_lgw_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený LGW let
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
                  easyJet odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavný dopravca v Gatwicku.
                </p>
                <Link
                  href="/sk/blog/easyjet-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Letisko Heathrow
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Porovnanie s hlavným londýnskym letiskom.
                </p>
                <Link
                  href="/sk/blog/letisko-londyn-heathrow-lhr-meskania"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  British Airways odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BA má v LGW long-haul leisure linky do Karibiku a USA.
                </p>
                <Link
                  href="/sk/blog/british-airways-odskodnenie"
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
