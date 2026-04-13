import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/plati-odskodnenie-aj-pre-low-cost-lety";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=low_cost_flights";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=low_cost_flights";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=low_cost_flights";

const faqItems = [
  {
    question: "Platí odškodnenie aj pre low-cost lety?",
    answer:
      "Áno. Nízka cena letenky ani typ aerolinky sám o sebe práva neruší. Ak let spadá pod EU261 a sú splnené podmienky nároku, kompenzácia môže patriť aj pri low-cost lete.",
  },
  {
    question: "Má Ryanair alebo Wizz Air iné pravidlá ako klasické aerolinky?",
    answer:
      "Nie v tom zmysle, že by lacnejšia letenka rušila ochranu podľa EU261. Rozhodujúce sú trasa, operujúci dopravca, typ problému a to, či nešlo o mimoriadne okolnosti.",
  },
  {
    question: "Záleží na tom, koľko stála low-cost letenka?",
    answer:
      "Nie. Výška kompenzácie sa podľa EU261 nepočíta z ceny letenky, ale z dĺžky trasy a výsledného typu problému, napríklad dlhého meškania alebo zrušenia letu.",
  },
  {
    question: "Kedy low-cost let pod EU261 nespadá?",
    answer:
      "Typicky vtedy, keď trasa a operujúci dopravca nespĺňajú územný rozsah pravidiel. Nie je to problém „low-costu“, ale rozsahu samotného nariadenia.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PlatiOdskodnenieAjPreLowCostLetyPage() {
  return (
    <LayoutSk>
      <SEO
        title="Platí odškodnenie aj pre low-cost lety? Áno, cena letenky práva neruší"
        description="Platí kompenzácia aj pri low-cost letoch? Vysvetľujeme, prečo cena letenky nerozhoduje, kedy sa EU261 vzťahuje aj na Ryanair či Wizz Air a od čoho závisí reálny nárok."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Platí odškodnenie aj pre low-cost lety?",
            description:
              "Praktické vysvetlenie, prečo low-cost letenka neznamená slabšie práva a od čoho v skutočnosti závisí nárok na kompenzáciu podľa EU261.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-13",
            dateModified: "2026-04-13",
            author: {
              "@type": "Organization",
              name: "problemlot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
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
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
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
              {
                "@type": "ListItem",
                position: 1,
                name: "Domov",
                item: "https://problemlot.com/sk",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://problemlot.com/sk/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Platí odškodnenie aj pre low-cost lety?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">
              Domov
            </Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span>/</span>
            <span>Platí odškodnenie aj pre low-cost lety?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Praktická odpoveď na častý low-cost mýtus
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Platí odškodnenie aj pre low-cost lety?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Áno, veľmi často áno. Lacná letenka neznamená lacnejšie práva. To, či vzniká nárok na
              kompenzáciu, nezávisí od toho, či letel Ryanair, Wizz Air alebo tradičný dopravca, ale
              od rozsahu EU261, typu problému a konkrétneho priebehu letu.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 9 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>
                  <strong>Áno, kompenzácia podľa EU261 môže patriť aj pri low-cost lete.</strong>
                </p>
                <p>
                  Cena letenky ani „nízkonákladový“ model aerolinky samy osebe nič nemenia. Ak let
                  spadá pod pravidlá EÚ a problém nie je krytý mimoriadnymi okolnosťami, low-cost
                  cestujúci má rovnaký základ ochrany ako cestujúci pri tradičnej aerolinke.
                </p>
                <p>
                  Rozhodujúce sú najmä <strong>trasa, operujúci dopravca, typ problému a výsledné
                  meškanie pri prílete</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Low-cost let mal problém? Overte si nárok cez ClaimWinger Slovensko"
            description="Ak riešite Ryanair, Wizz Air alebo iný low-cost let a chcete vedieť, či vôbec spadá pod EU261, najrýchlejšie je preveriť prípad v slovenskom formulári ClaimWinger."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=low_cost_flights"
            ctaLabel="Preveriť low-cost let"
            loadingLabel="Načítava sa formulár pre low-cost prípad..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre preverenie letu."
            placement="sk_blog_low_cost_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo low-cost letenka neznamená slabšie práva
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Oficiálne pravidlá EÚ nerozlišujú medzi „plnou“ a „low-cost“ letenkou pri tom, či
                vôbec máte nárok na ochranu cestujúceho. Ochrana sa viaže na let, nie na to, že ste
                letenku kúpili za 29 alebo 299 eur.
              </p>
              <p>
                To znamená, že ak let spadá pod EU261, aj pri low-cost dopravcovi sa rieši meškanie,
                zrušenie letu, odmietnutie nástupu na palubu, starostlivosť na letisku a v niektorých
                prípadoch aj refundácia alebo rerouting.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Od čoho naozaj závisí nárok
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  1. Trasa letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Let v rámci EÚ, odlet z EÚ alebo prílet do EÚ s dopravcom z EÚ môže spadať pod
                  EU261. Práve územný rozsah je prvá kontrola.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  2. Operujúci dopravca
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie vždy rozhoduje značka na letenke. Pri niektorých prípadoch je dôležité, kto let
                  skutočne prevádzkoval.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  3. Typ problému
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Inak sa posudzuje meškanie, inak zrušenie letu a inak odmietnutie nástupu na palubu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  4. Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri low-cost lete môže nárok odpadnúť, ak problém spôsobili skutočne mimoriadne
                  okolnosti, napríklad extrémne počasie alebo uzavretý vzdušný priestor.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické príklady
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Ryanair: Bratislava – Londýn
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Low-cost let v rámci rozsahu EÚ. Ak prílet mešká o 3 a viac hodín a nejde o
                  mimoriadne okolnosti, nárok môže existovať rovnako ako pri tradičnom dopravcovi.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Wizz Air: Viedeň – Barcelona
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nízkonákladový model nič nemení na tom, že let môže byť plne posudzovaný podľa
                  EU261, ak spadá do územného rozsahu nariadenia.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Low-cost let mimo rozsahu EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak let nespadá do územného rámca EÚ, problém nie je v tom, že je low-cost, ale v tom,
                  že sa na daný let pravidlá EU261 jednoducho nevzťahujú.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Najčastejšie omyly pri low-cost letoch
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  „Lacná letenka = žiadne odškodnenie“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie. Výška kompenzácie sa nepočíta z ceny letenky, ale podľa pravidiel EU261 a
                  dĺžky trasy.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  „Ryanair a Wizz Air si robia vlastné pravidlá“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie v tom zmysle, že by mohli vypnúť ochranu EÚ. Aerolinky môžu mať vlastné procesy,
                  ale základný rámec práv určuje právo EÚ.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  „Low-cost vždy prehrá na mimoriadnych okolnostiach“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie. Mimoriadne okolnosti sa posudzujú podľa reálnej príčiny problému, nie podľa
                  obchodného modelu dopravcu.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  „Stačí, že je to let v Európe“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie vždy. Pri niektorých letoch do EÚ je dôležité aj to, či je operujúci dopravca
                  z EÚ alebo mimo nej.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si pripraviť pri low-cost claimu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "rezerváciu a číslo letu",
                "boarding pass alebo aspoň potvrdenie check-inu",
                "správy od aerolinky o meškaní alebo zrušení",
                "presný čas príletu do konečnej destinácie",
                "doklady o občerstvení, hoteli alebo ďalších nákladoch",
                "screeny z aplikácie alebo letiskovej tabule",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Low-cost let mal problém a nechcete sami riešiť, či vôbec spadá pod EU261?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                To je veľmi častá situácia. Najmä pri lacných letoch ľudia zbytočne predpokladajú,
                že sa neoplatí nič skúšať. V skutočnosti sa často oplatí najprv rýchlo overiť rozsah
                prípadu a až potom robiť závery.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_low_cost_final_cta_primary", delayedFlightHref)}
                  >
                    Preveriť low-cost let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_low_cost_final_cta_secondary", claimWingerHomeHref)}
                  >
                    Otvoriť ClaimWinger Slovensko
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Koľko hodín meškania treba
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak už viete, že low-cost let spadá pod EU261, ďalšia otázka je, či sa naplnil prah
                  pre samotnú kompenzáciu.
                </p>
                <Link
                  href="/sk/blog/kolko-hodin-meskania-je-potrebnych-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o meškaní
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Low-cost zrušený let
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak problémom nie je meškanie, ale zrušenie, môžete ísť rovno na flow pre zrušené lety.
                </p>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_low_cost_related_cancelled", cancelledFlightHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Preveriť zrušený let v ClaimWingeri
                </a>
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
