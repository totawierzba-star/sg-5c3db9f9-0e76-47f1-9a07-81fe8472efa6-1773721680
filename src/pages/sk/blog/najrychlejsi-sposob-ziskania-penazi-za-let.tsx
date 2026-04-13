import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Rocket,
  Wallet,
  Zap,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/najrychlejsi-sposob-ziskania-penazi-za-let";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=fastest_way_to_get_money";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=fastest_way_to_get_money";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=fastest_way_to_get_money";

const faqItems = [
  {
    question: "Aký je najrýchlejší spôsob získania peňazí za problém s letom?",
    answer:
      "Záleží na tom, o aké peniaze ide. Najrýchlejšia býva často refundácia ceny letenky, pretože pri relevantných situáciách má byť vyplatená do 7 dní. Kompenzácia podľa EU261 nemá jednu spoločnú európsku lehotu výplaty.",
  },
  {
    question: "Je vždy najrýchlejšie podať reklamáciu priamo aerolínke?",
    answer:
      "Pri jednoduchom prípade to často dáva zmysel ako prvý krok. Ak však aerolínka neodpovedá, sporí sa o dôvod narušenia alebo nechcete niesť ďalšiu procesnú záťaž sami, rýchlosť už nemusí závisieť len od toho, kto podáva prvý formulár.",
  },
  {
    question: "Dostanem kompenzáciu do 7 dní?",
    answer:
      "Nie automaticky. Lehota 7 dní sa viaže najmä na refundáciu ceny letenky v relevantných situáciách. Pri kompenzácii podľa EU261 neexistuje jednotný európsky termín vyplatenia.",
  },
  {
    question: "Kedy má zmysel siahnuť po firme ako ClaimWinger?",
    answer:
      "Najmä vtedy, keď už nejde o čistý a jednoduchý prípad alebo nechcete stráviť čas ďalšou komunikáciou, dopĺňaním podkladov a eskaláciou. ClaimWinger účtuje 30 % bez ohľadu na to, či sa vec rieši mimosúdne alebo súdne.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function NajrychlejsiSposobZiskaniaPenaziZaLetPage() {
  return (
    <LayoutSk>
      <SEO
        title="Najrýchlejší spôsob získania peňazí za problém s letom"
        description="Ako dostať peniaze za meškanie alebo zrušený let čo najrýchlejšie? Vysvetľujeme rozdiel medzi refundáciou a kompenzáciou, čo má lehotu 7 dní a čo už takto jednoducho nefunguje."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Najrýchlejší spôsob získania peňazí za problém s letom",
            description:
              "Praktický návod, ako dostať peniaze za meškanie alebo zrušený let čo najrýchlejšie, bez zbytočných mýtov o lehotách a type nároku.",
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
                name: "Najrýchlejší spôsob získania peňazí za problém s letom",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-lime-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Najrýchlejší spôsob získania peňazí za let</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-700 dark:bg-lime-900/30 dark:text-lime-300">
              Prakticky o rýchlosti, nie o marketingových skratkách
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Najrýchlejší spôsob získania peňazí za problém s letom
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najrýchlejšia cesta k peniazom závisí hlavne od toho, <strong>o aký typ peňazí ide</strong>.
              Inak funguje <strong>refundácia ceny letenky</strong>, inak
              <strong> kompenzácia podľa EU261</strong> a inak náhrada vedľajších výdavkov.
              Kto to zmieša do jednej otázky, ten si často sám spomalí celý prípad.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-lime-200 bg-gradient-to-br from-lime-500 to-green-600 p-8 text-slate-950 shadow-xl dark:border-lime-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-lime-950">
                <p>
                  Ak ide o <strong>refundáciu letenky</strong>, tá býva často najrýchlejšia, pretože
                  pri relevantných situáciách má byť vyplatená do <strong>7 dní</strong>.
                </p>
                <p>
                  Ak ide o <strong>kompenzáciu podľa EU261</strong>, tam jednotná európska lehota
                  výplaty neexistuje, takže „najrýchlejšia cesta“ znamená skôr minimalizovať chaos,
                  nesprávny claim a zbytočné procesné kolá.
                </p>
                <p>
                  Ak nechcete riešiť, ktorá cesta je vo vašom prípade najrýchlejšia, môžete prípad
                  poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_fastest_way_to_get_money_quick_answer_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  . ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši
                  mimosúdne alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Chcete najrýchlejšie zistiť, čo má vo vašom prípade zmysel?"
            description="ClaimWinger vie pomôcť rýchlo rozlíšiť, či vo vašom prípade ide skôr o refundáciu, kompenzáciu alebo vedľajšie náklady, a tým zabrániť zbytočnému spomaleniu celej veci."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=fastest_way_to_get_money"
            ctaLabel="Preveriť najrýchlejší ďalší krok"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_fastest_way_to_get_money_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Wallet className="h-8 w-8 text-lime-600" />
              1. Ak chcete peniaze čo najrýchlejšie, najprv si ujasnite typ nároku
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Často najrýchlejšia vrstva, lebo pravidlá EÚ pri relevantných situáciách hovoria o
                  lehote <strong>7 dní</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu neexistuje jedna spoločná lehota výplaty. Rýchlosť závisí od čistoty prípadu a
                  reakcie aerolinky.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Náklady
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak žiadate hotel, taxi alebo jedlo, dôležité sú primerané účtenky a čisté
                  prepojenie na narušenie letu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Zap className="h-8 w-8 text-lime-600" />
              2. Najrýchlejšia cesta nie je vždy tá istá
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri čerstvom, jednoduchom a dobre zdokumentovanom prípade býva rozumné začať
                  priamo u aerolinky. To je často najkratšia cesta, ak je spor jednoduchý a
                  aerolínka reaguje normálne.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa však prípad začne lámať na mimoriadnych okolnostiach, prestupe, konečnej
                  destinácii alebo ignorovaní reklamácie, najrýchlejšia cesta už nie je o „jednom
                  formulári“, ale o tom, kto vie spor udržať bez ďalšieho chaosu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Rocket className="h-8 w-8 text-lime-600" />
              3. Čo zrýchľuje prípad v praxi
            </h2>
            <div className="grid gap-4">
              {[
                "správne rozlíšenie medzi refundáciou, kompenzáciou a nákladmi",
                "rezervácia, PNR a čisté dôkazy o lete a výsledku v konečnej destinácii",
                "správne určenie operujúceho dopravcu",
                "neposielanie viacerých protichodných alebo chaotických žiadostí",
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
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kedy má zmysel použiť firmu, ak chcete šetriť čas
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie preto, že by firma zázračne menila pravidlá, ale preto, že vám môže ušetriť
                  čas tam, kde prípad už nie je jednoduchý. To je iný typ „rýchlosti“ než formálna
                  lehota na refundáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri ClaimWingeri je fér vedieť vopred, že provízia je <strong>30 %</strong> bez
                  ohľadu na to, či sa vec rieši mimosúdne alebo súdne. To vám umožní porovnať
                  úsporu času so skutočnou cenou služby.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-lime-200 bg-lime-50 p-8 dark:border-lime-800 dark:bg-lime-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete čo najrýchlejšie zistiť, čo má vo vašom prípade zmysel?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak nechcete strácať čas nesprávnym smerom, ClaimWinger vie rýchlo odfiltrovať, či sa
                oplatí tlačiť refundáciu, kompenzáciu alebo inú vrstvu nároku.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-lime-600 hover:bg-lime-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_fastest_way_to_get_money_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť najrýchlejší krok s ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_fastest_way_to_get_money_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim meškajúci let
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_fastest_way_to_get_money_final_cta_cancel",
                        cancelledFlightHref
                      )
                    }
                  >
                    Riešim zrušený let
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
                  Ako dlho trvá vyplatenie odškodnenia?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dobrý follow-up, ak chcete odlíšiť rýchlu refundáciu od pomalšej kompenzácie.
                </p>
                <Link
                  href="/sk/blog/ako-dlho-trva-vyplatenie-odskodnenia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako získať refundáciu aj kompenzáciu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak sa rozhodujete, ktorú vrstvu nároku riešiť ako prvú.
                </p>
                <Link
                  href="/sk/blog/odwolany-lot-zwrot-czy-odszkodowanie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako vybrať správnu firmu na odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité, ak „rýchlosť” porovnávate aj s cenou a rozsahom služby.
                </p>
                <Link
                  href="/sk/blog/ako-vybrat-spravnu-firmu-na-odskodnenie"
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
