import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText, ShieldCheck } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/kolko-hodin-meskania-je-potrebnych-na-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=hours_delay_threshold";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=hours_delay_threshold";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=hours_delay_threshold";

const faqItems = [
  {
    question: "Koľko hodín meškania je potrebných na odškodnenie?",
    answer:
      "Na peňažné odškodnenie podľa EU261 sa zvyčajne pozerá na meškanie pri prílete do konečnej destinácie. Najčastejšie ide o hranicu 3 a viac hodín, ak let spadá pod EU261 a nešlo o mimoriadne okolnosti.",
  },
  {
    question: "Počíta sa meškanie pri odlete alebo pri prílete?",
    answer:
      "Pri odškodnení je rozhodujúce meškanie pri prílete do konečnej destinácie, nie samotné meškanie pri odlete. Krátke zdržanie pri odlete ešte nemusí znamenať nárok, ak lietadlo dobehne čas počas cesty.",
  },
  {
    question: "Mám nárok aj pri meškaní kratšom ako 3 hodiny?",
    answer:
      "Na finančné odškodnenie spravidla nie, ale stále môžete mať právo na starostlivosť. Pri dlhšom čakaní môže aerolinka zabezpečiť občerstvenie, komunikáciu, hotel alebo pri meškaní nad 5 hodín aj možnosť refundácie.",
  },
  {
    question: "Platí rovnaké pravidlo aj pre low-cost lety?",
    answer:
      "Áno. EU261 sa vzťahuje aj na low-cost aerolinky, ak je splnený rozsah nariadenia. Nízka cena letenky nemení práva cestujúceho na odškodnenie ani starostlivosť.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KolkoHodinMeskaniaJePotrebnychNaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Koľko hodín meškania je potrebných na odškodnenie? Presná hranica podľa EU261"
        description="Koľko hodín musí meškať let, aby vznikol nárok na odškodnenie? Vysvetľujeme 3-hodinové pravidlo, právo na starostlivosť, refundáciu pri 5 hodinách a kedy meškanie samo osebe nestačí."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Koľko hodín meškania je potrebných na odškodnenie?",
            description:
              "Vysvetlenie 3-hodinového pravidla podľa EU261, práv pri meškaní a situácií, keď meškanie ešte automaticky neznamená nárok na peniaze.",
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
                name: "Koľko hodín meškania je potrebných na odškodnenie?",
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
            <span>Koľko hodín meškania je potrebných na odškodnenie?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Praktický sprievodca pre cestujúcich
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Koľko hodín meškania je potrebných na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najčastejšia otázka cestujúcich znie jednoducho, ale odpoveď má viac vrstiev. Pri
              odškodnení podľa EU261 sa zvyčajne nepozerá iba na meškanie pri odlete, ale najmä na
              to, o koľko neskôr ste dorazili do konečnej destinácie.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Rýchla odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>
                  Na peňažné odškodnenie sa najčastejšie pozerá na{" "}
                  <strong>meškanie 3 a viac hodín pri prílete</strong> do konečnej destinácie.
                </p>
                <p>
                  Samotné meškanie pri odlete ešte nestačí. Ak lietadlo čas dobehne a na miesto
                  dorazíte s menším sklzom, nárok na peniaze nemusí vzniknúť.
                </p>
                <p>
                  Aj pri kratšom meškaní však môžete mať právo na{" "}
                  <strong>občerstvenie, hotel alebo refundáciu</strong>, ak je čakanie dosť dlhé.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Skontrolujte meškajúci let cez ClaimWinger Slovensko"
            description="Ak si nie ste istí, či sa vo vašom prípade počíta meškanie pri prílete, prestup alebo rozsah EU261, najrýchlejšie je preveriť si prípad v slovenskom formulári ClaimWinger."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=hours_delay_threshold"
            ctaLabel="Otvoriť formulár pre meškajúci let"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre prípady meškania."
            placement="sk_blog_hours_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy vzniká nárok na odškodnenie podľa EU261
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Najdôležitejšie pravidlo je toto: pri finančnom odškodnení sa zvyčajne pozerá na{" "}
                <strong>meškanie pri prílete do konečnej destinácie</strong>. Ak teda let odletel
                neskoro, ale počas cesty čas dobehol a vy ste dorazili s menším sklzom, samotné
                meškanie pri odlete nestačí.
              </p>
              <p>
                V praxi to znamená, že hranica <strong>3 hodiny</strong> je najčastejšie hranicou
                pre peňažnú kompenzáciu. Okrem toho však musia byť splnené ešte dve podmienky:
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Let musí spadať pod EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typicky ide o lety odlietajúce z EÚ alebo lety do EÚ, ak ich prevádzkuje
                  aerolinka z EÚ. Presne toto si môžete overiť aj v{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_hours_delay_inline_home", claimWingerHomeHref)}
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  .
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Príčinou nesmú byť mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak meškanie spôsobilo extrémne počasie, uzavretý vzdušný priestor alebo iné
                  skutočne mimoriadne okolnosti, nárok na peniaze nemusí vzniknúť. Viac vysvetľujeme
                  aj v článku{" "}
                  <Link
                    href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Mimoriadne okolnosti a kompenzácia
                  </Link>
                  .
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3 hodiny na peniaze, ale nie všetky práva začínajú až po 3 hodinách
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Právo na starostlivosť môže vzniknúť skôr
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Podľa dĺžky letu môže aerolinka zabezpečiť občerstvenie, možnosť komunikácie,
                      a pri nočnom čakaní aj hotel. Pri kratších letoch sa tieto povinnosti môžu
                      aktivovať už od 2 hodín čakania, pri dlhších letoch neskôr.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <Euro className="mt-1 h-5 w-5 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Refundácia môže prísť pri meškaní nad 5 hodín
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Ak je meškanie veľmi dlhé a vy sa rozhodnete necestovať, môže vzniknúť právo
                      na vrátenie ceny letenky. To však nie je to isté ako kompenzácia za stratu času.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-amber-600" />
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Peňažné odškodnenie sa spravidla rieši od 3 hodín pri prílete
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      Toto je hranica, ktorú ľudia zvyčajne myslia, keď sa pýtajú na „koľko hodín
                      treba na odškodnenie“. Práve preto je dôležité rozlišovať medzi starostlivosťou,
                      refundáciou a samotnou kompenzáciou.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Koľko môžete dostať
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Do 1 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">250 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typicky kratšie európske trasy, ak sú splnené ostatné podmienky nariadenia.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  1 500 až 3 500 km
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">400 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšia kategória pri stredne dlhých letoch a mnohých spojeniach v rámci EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Nad 3 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">600 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najvyššia suma pri diaľkových letoch, ak prípad reálne spadá pod EU261.
                </p>
              </Card>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Ak si chcete overiť konkrétny prípad bez ručného počítania, môžete si{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimClick("sk_hours_delay_inline_delayed", delayedFlightHref)
                }
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                preveriť meškajúci let v ClaimWingeri
              </a>
              . Pri zrušenom lete sa logika nároku mení podľa času oznámenia a ponúknutej náhradnej
              dopravy, preto máme samostatnú stránku aj pre{" "}
              <a
                href={cancelledFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimClick("sk_hours_delay_inline_cancelled", cancelledFlightHref)
                }
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                zrušený let
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy 3-hodinové meškanie ešte automaticky neznamená úspech
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Silné búrky, bezpečnostný incident alebo uzavretie vzdušného priestoru môžu
                  nárok oslabiť alebo úplne vylúčiť. Aerolinky však tento dôvod niekedy používajú
                  príliš široko, preto je dobré ho overiť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Let nespadá pod EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie každý let na svete patrí pod európske pravidlá. Rozhoduje trasa, miesto
                  odletu a v niektorých prípadoch aj to, ktorá aerolinka let skutočne prevádzkovala.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Prílet pod hranicou 3 hodín
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste dorazili o 2 hodiny a 55 minút neskôr, aerolinka bude argumentovať, že
                  hranica nebola splnená. V takých prípadoch je presný čas otvorenia dverí lietadla
                  veľmi dôležitý.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Problém na prestupe
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri nadväzujúcich letoch sa často počíta meškanie v konečnej destinácii, nie na
                  prvom segmente. Ak riešite prestup, pozrite si aj článok{" "}
                  <Link
                    href="/sk/blog/zmeskany-prestup-kompenzacia"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Zmeškaný prestup – kompenzácia
                  </Link>
                  .
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Aké dokumenty si odložiť
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "palubný lístok alebo potvrdenie rezervácie",
                "číslo letu a dátum cesty",
                "správy od aerolinky o meškaní alebo zmene letu",
                "fotky odletovej tabule alebo oznámení na letisku",
                "doklady o občerstvení, hoteli či náhradnej doprave",
                "čas reálneho príletu do cieľovej destinácie",
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
                Kedy sa oplatí riešiť prípad cez ClaimWinger
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak nechcete riešiť výklad EU261 sami, potrebujete rýchlo overiť, či sa počíta meškanie
                pri prílete, alebo už máte pocit, že aerolinka bude argumentovať mimoriadnymi
                okolnosťami, ClaimWinger vie byť rýchlejší začiatok než manuálne vypisovanie
                reklamácie.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_hours_delay_final_cta_primary", delayedFlightHref)
                    }
                  >
                    Skontrolovať meškajúci let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_hours_delay_final_cta_secondary", claimWingerHomeHref)
                    }
                  >
                    Otvoriť ClaimWinger Slovensko
                  </a>
                </Button>
              </div>
            </Card>
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
