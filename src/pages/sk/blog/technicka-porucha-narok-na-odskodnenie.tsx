import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Wrench,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/technicka-porucha-narok-na-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=technical_problem_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=technical_problem_compensation";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=technical_problem_compensation";

const faqItems = [
  {
    question: "Mám nárok na odškodnenie, ak aerolinka tvrdí technickú poruchu?",
    answer:
      "Často áno. Väčšina technických problémov, ktoré sa objavia pri bežnej údržbe alebo súvisia s povinnosťou správne udržiavať lietadlo, sa nepovažuje za mimoriadne okolnosti.",
  },
  {
    question: "Je technická porucha automaticky mimoriadna okolnosť?",
    answer:
      "Nie. Samotné tvrdenie aerolinky o technickej poruche nestačí. Rozhodujúce je, či išlo o bežný prevádzkový problém alebo o výnimočný incident mimo normálnej činnosti dopravcu.",
  },
  {
    question: "Kedy môže byť technická porucha skutočne výnimkou?",
    answer:
      "Výnimkou môže byť napríklad skrytá výrobná vada odhalená výrobcom alebo príslušným orgánom, prípadne poškodenie lietadla v dôsledku sabotáže či terorizmu.",
  },
  {
    question: "Čo si mám pri technickej poruche odložiť ako dôkaz?",
    answer:
      "Najmä oznámenie aerolinky o dôvode meškania alebo zrušenia, boarding pass, PNR, nový itinerár a skutočný čas príchodu do konečnej destinácie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function TechnickaPoruchaNarokNaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Technická porucha: kedy vzniká nárok na odškodnenie?"
        description="Čo ak aerolinka tvrdí, že problém spôsobil technický fault? Vysvetľujeme, prečo väčšina technických porúch nie je mimoriadna okolnosť a kedy môže vzniknúť nárok na kompenzáciu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Technická porucha: kedy vzniká nárok na odškodnenie?",
            description:
              "Praktický sprievodca pre situáciu, keď aerolinka odôvodňuje meškanie alebo zrušenie technickou poruchou, vrátane rozdielu medzi bežnou údržbou a skutočne mimoriadnou udalosťou.",
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
                name: "Technická porucha",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Technická porucha</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Edge case content pre technical fault
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Technická porucha: kedy vzniká nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak aerolinka tvrdí, že let meškal alebo bol zrušený kvôli <strong>technickej poruche</strong>,
              veľa pasažierov to berie ako automatickú výhovorku bez šance na peniaze. Pravidlá EÚ sú
              však pre pasažierov priaznivejšie: <strong>väčšina bežných technických problémov</strong>
              sa nepovažuje za mimoriadne okolnosti.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  <strong>Áno, nárok často vzniká.</strong> To, že aerolinka povie „technická porucha",
                  ešte vôbec neznamená, že sa automaticky zbavuje povinnosti platiť kompenzáciu.
                </p>
                <p>
                  Oficiálne pravidlá EÚ výslovne hovoria, že <strong>väčšina technických problémov
                  zistených pri údržbe alebo spôsobených nedostatočnou údržbou</strong> nie je
                  mimoriadna okolnosť.
                </p>
                <p>
                  Výnimky existujú, ale sú užšie. Typicky ide skôr o <strong>skrytú výrobnú vadu</strong>,
                  sabotáž alebo podobne neobvyklý incident mimo normálnej činnosti aerolinky.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Aerolinka sa vyhovára na technickú poruchu?"
            description="ClaimWinger vie rýchlo preveriť, či ide o bežný prevádzkový problém lietadla, alebo o skutočne výnimočný incident, ktorý môže meniť nárok na kompenzáciu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=technical_problem_compensation"
            ctaLabel="Preveriť technickú poruchu s ClaimWinger"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger na preverenie prípadu."
            placement="sk_blog_technical_problem_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo technická porucha často nie je výnimka
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Wrench className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Údržba patrí k bežnej prevádzke
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka má povinnosť lietadlá riadne udržiavať. Preto väčšina porúch, ktoré
                  súvisia s normálnou údržbou, ostáva na jej strane.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <CheckCircle2 className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Samotné tvrdenie aerolinky nestačí
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To, že v e-maile alebo aplikácii vidíte „technical issue“, ešte nedokazuje
                  mimoriadne okolnosti. Dôležitý je skutočný pôvod problému.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rozhoduje povaha incidentu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Inak sa pozerá na bežný technický problém a inak na skutočne neobvyklý zásah
                  zvonka alebo závažnú výrobnú vadu potvrdenú výrobcom či úradom.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy môže byť technická porucha skutočne výnimkou
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Skrytá výrobná vada
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak výrobca alebo príslušný orgán odhalí problém, ktorý nevznikol bežnou prevádzkou
                  a nebolo možné ho chápať ako štandardnú údržbovú otázku, prípad môže vyzerať inak
                  než klasická technická porucha.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Sabotáž alebo terorizmus
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak bolo lietadlo poškodené v dôsledku mimoriadneho bezpečnostného incidentu,
                  môže ísť o situáciu, ktorá je mimo normálnej činnosti aerolinky.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva prípad najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "aerolinka uvádza len všeobecnú technickú poruchu bez detailov",
                "meškanie v konečnej destinácii je 3 hodiny alebo viac",
                "let bol zrušený a na prípad sa vzťahuje EU261",
                "máte e-mail, screenshot alebo potvrdenie o dôvode problému",
                "nejde o potvrdenú výrobnú vadu ani bezpečnostný incident zvonka",
                "aerolinka nevie presvedčivo vysvetliť, prečo išlo o výnimočnú udalosť",
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
              Čo sa rieši popri kompenzácii
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Starostlivosť na letisku
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri technickej poruche môže vzniknúť právo na jedlo, komunikáciu, hotel alebo
                  primerané preplatenie vlastných nákladov.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia alebo nový let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak technická porucha viedla k zrušeniu letu, spravidla sa rieši aj voľba medzi
                  refundáciou ceny letenky a presmerovaním do cieľa.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Konečná destinácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri dlhom meškaní sa stále pozerá na výsledok v konečnej destinácii, nie len na
                  to, že sa problém objavil ešte pri lietadle na odletovom letisku.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-cyan-200 bg-cyan-50 p-8 dark:border-cyan-800 dark:bg-cyan-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri technickej poruche býva rozhodujúce, či ide o bežný prevádzkový problém alebo o
                skutočne výnimočný incident. ClaimWinger vie rýchlo odlíšiť silný prípad od situácie,
                kde aerolinka môže mať lepšie postavenie.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_technical_problem_compensation_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Preveriť technickú poruchu
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_technical_problem_compensation_final_cta_home",
                        claimWingerHomeHref
                      )
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
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Širší kontext toho, kedy aerolinka naozaj môže hovoriť o výnimke a kedy nie.
                </p>
                <Link
                  href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na širší článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie kvôli rotácii lietadla
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak aerolinka mieša technickú poruchu s reťazovým oneskorením z predchádzajúcej rotácie.
                </p>
                <Link
                  href="/sk/blog/meskanie-kvoli-rotacii-lietadla"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o rotácii
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete preveriť konkrétny dôvod poruchy, itinerár a skutočný čas príletu do cieľa.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_technical_problem_compensation_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
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
