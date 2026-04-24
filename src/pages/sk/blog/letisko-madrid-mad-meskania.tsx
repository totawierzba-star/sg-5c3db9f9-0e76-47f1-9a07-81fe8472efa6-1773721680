import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-madrid-mad-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=mad_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=mad_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=mad_airport";

const faqItems = [
  {
    question: "Mám pri meškaní na letisku Madrid Barajas nárok na odškodnenie?",
    answer:
      "Áno, ak let spadá pod EU261 a meškanie pri príchode do konečnej destinácie je 3+ hodín. Samotné letisko Madrid nárok nevytvára – rozhodujúca je trasa a aerolinka.",
  },
  {
    question: "Akí dopravcovia lietajú najčastejšie z Madridu?",
    answer:
      "Iberia (vlajková), Air Europa, Vueling, Iberia Express, Ryanair, Wizz Air. Pre slovenských cestujúcich je najčastejšia kombinácia prestup cez Madrid pri letoch do Latinskej Ameriky (Iberia) alebo do Afriky.",
  },
  {
    question: "Koľko dostanem za meškanie pri lete z alebo do MAD?",
    answer:
      "Pri krátkych európskych trasách 250 €, pri letoch 1 500 – 3 500 km alebo v rámci EÚ nad 1 500 km 400 €, pri transatlantických long-haul nad 3 500 km 600 €.",
  },
  {
    question: "Často uvádzané mimoriadne okolnosti v Madride?",
    answer:
      "Letná horúčava (nad 40°C obmedzuje maximálnu vzletovú hmotnosť), občasné štrajky pozemného personálu, uzavretie jednej z 4 dráh pri údržbe. Extrémna horúčava môže byť mimoriadnou okolnosťou iba ak naozaj znemožnila let.",
  },
  {
    question: "Madrid Barajas (MAD) a Madrid Cuatro Vientos – rozdiel?",
    answer:
      "Cuatro Vientos je malé všeobecné letectvo, nie komerčné linky. Všetky pravidelné lety pre slovenských cestujúcich sú z Adolfo Suárez Madrid-Barajas (IATA: MAD).",
  },
  {
    question: "Koľko trvajú prestupy na MAD?",
    answer:
      "Minimum MCT (minimum connecting time) je 35 – 60 minút v rámci Schengenu, 60 – 90 minút pri non-Schengen prestupoch. Pri lete s meškaním kratšom než MCT sa prestup zvyčajne stráca.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoMadridMadMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Madrid (MAD) meškania: kedy vzniká nárok na 250–600 €"
        description="Meškanie alebo zrušenie letu na letisku Madrid Adolfo Suárez Barajas? Prehľad nárokov podľa EU261, typických dopravcov a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Madrid (MAD) meškania a odškodnenie",
            description:
              "Sprievodca nárokom na kompenzáciu pri meškaní alebo zrušení letu na letisku Adolfo Suárez Madrid-Barajas.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Madrid MAD", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Madrid (MAD)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              Letisko · MAD · Adolfo Suárez Madrid-Barajas
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Madrid (MAD): meškania a odškodnenie EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Madrid-Barajas (IATA <strong>MAD</strong>) je <strong>najväčšie letisko v Španielsku</strong>
              a jedna z najdôležitejších hubov pre lety do Latinskej Ameriky. Pre slovenských
              cestujúcich ide najčastejšie o tranzit pri letoch Iberie na Mexico City, Buenos Aires
              či Havanu, alebo o priame sezónne lety z Viedne. Meškania sú časté hlavne v lete kvôli
              vysokým teplotám. Pri nároku začnite overením cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_mad_intro", delayedFlightHref)}
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
            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-orange-700 p-8 text-white shadow-xl dark:border-red-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                <p>
                  Madrid = jeden z najväčších hubov EÚ. Pri lete odlietajúcom z MAD platí plne EU261,
                  pri lete prichádzajúcom s EÚ aerolinkou tiež.
                </p>
                <p>
                  Sumy: <strong>250 / 400 / 600 €</strong> podľa vzdialenosti. Transatlantik z MAD =
                  typicky 600 €.
                </p>
                <p>
                  Horúčava, ranný smog alebo uzavretá dráha môžu byť mimoriadnymi okolnosťami iba
                  ak skutočne bránili letu. Žiadajte dôkazy.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Meškanie alebo zrušenie cez Madrid?"
            description="Pri prestupoch v MAD sa často naviaže reťaz ďalších problémov. ClaimWinger preverí celú cestu a pripraví reklamáciu zahrňujúcu všetky úseky."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=mad_airport"
            ctaLabel="Preveriť MAD prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_mad_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Madrid Barajas – kľúčové fakty
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">IATA: MAD</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Oficiálny názov: Aeropuerto Adolfo Suárez Madrid-Barajas. ~60 miliónov pasažierov
                  ročne.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4 terminály + T4S satelit
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  T1/T2/T3: Schengen + non-Schengen. T4 + T4S: Iberia, Air Europa, Vueling a
                  OneWorld partneri vrátane dlhých trás.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4 dráhy, 24/7 prevádzka
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Na rozdiel od Frankfurtu alebo Zurichu nemá nočný zákaz – môžu byť oznámené odlety
                  alebo meškania aj v noci.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Horúce leto ako faktor
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Teploty v júli/auguste bežne nad 40 °C. Pri lietadlách s maximálnou vzletovou
                  hmotnosťou blízko limitu to môže viesť k oneskoreniu odletu alebo čiastočnému
                  vyloženiu nákladu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické kompenzačné pásma pri letoch z/do MAD
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  MAD – Viedeň, MAD – Barcelona, MAD – Mallorca. Pod 1 500 km = 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  MAD – Istanbul, MAD – Dakar, MAD – Tel Aviv, MAD – Moskva (pozastavené). 1 500 –
                  3 500 km mimo EÚ = 400 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  MAD – New York, MAD – Mexico City, MAD – Buenos Aires, MAD – Havana, MAD – Bogotá,
                  MAD – São Paulo. Transatlantické linky = 600 € pri 4+ hod meškaní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Transatlantické meškania z MAD bývajú drahé
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri letoch z Madridu do Latinskej Ameriky je suma až 600 € a cesta cez ENAC alebo
                španielsku AESA môže trvať mesiace. ClaimWinger má skúsenosť so španielskymi aj
                talianskymi regulátormi – získate peniaze rýchlejšie.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_mad_final_primary", delayedFlightHref)}
                  >
                    Preveriť MAD meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_mad_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený MAD let
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
                  Iberia odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka v Madride – proces a typické situácie.
                </p>
                <Link
                  href="/sk/blog/iberia-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Air Europa odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Druhá najväčšia v Madride, dôležitá pri transatlantických prestupoch.
                </p>
                <Link
                  href="/sk/blog/air-europa-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmeškaný prestup
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Bežné pri tranzite cez Madrid na Latinskoamerické destinácie.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-kompenzacia"
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
