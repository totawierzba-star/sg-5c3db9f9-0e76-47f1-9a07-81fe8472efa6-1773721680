import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Plane,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/meskanie-kvoli-rotacii-lietadla";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_due_to_aircraft_rotation";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_due_to_aircraft_rotation";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_due_to_aircraft_rotation";

const faqItems = [
  {
    question: "Mám nárok na odškodnenie, ak let meškal kvôli rotácii lietadla?",
    answer:
      "Často áno. Samotná rotácia lietadla zvyčajne vyzerá skôr ako súčasť bežnej prevádzky aerolinky než ako automatická mimoriadna okolnosť. Stále však treba pozrieť aj na pôvodný spúšťač problému.",
  },
  {
    question: "Je rotácia lietadla automaticky mimoriadna okolnosť?",
    answer:
      "Nie. To, že lietadlo prišlo neskoro z predchádzajúceho letu, ešte samo osebe nestačí na oslobodenie aerolinky od kompenzácie.",
  },
  {
    question: "Kedy môže byť prípad zložitejší?",
    answer:
      "Prípad býva zložitejší, ak oneskorená rotácia vznikla ako následok inej udalosti, napríklad extrémneho počasia, uzavretia letiska alebo širšieho bezpečnostného incidentu.",
  },
  {
    question: "Čo si mám pri takomto meškaní odložiť?",
    answer:
      "Najmä oznámenie o dôvode meškania, boarding pass, PNR, skutočný čas odletu a príletu a všetko, čo ukazuje, že lietadlo meškalo už z predchádzajúcej rotácie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MeskanieKvoliRotaciiLietadlaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Meškanie kvôli rotácii lietadla: vzniká nárok na odškodnenie?"
        description="Čo ak aerolinka tvrdí, že let meškal kvôli rotácii lietadla? Vysvetľujeme, prečo to často nie je automatická mimoriadna okolnosť a kedy môže vzniknúť nárok na kompenzáciu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Meškanie kvôli rotácii lietadla: vzniká nárok na odškodnenie?",
            description:
              "Praktický sprievodca pre situáciu, keď aerolinka odôvodňuje meškanie rotáciou lietadla, vrátane rozdielu medzi bežnou prevádzkou a skutočne mimoriadnou udalosťou.",
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
                name: "Meškanie kvôli rotácii lietadla",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Meškanie kvôli rotácii lietadla</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Edge case content pre aircraft rotation
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Meškanie kvôli rotácii lietadla: vzniká nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak aerolinka vysvetľuje meškanie tým, že lietadlo prišlo neskoro z predchádzajúceho letu,
              veľa pasažierov to automaticky berie ako „technický“ alebo „mimoriadny“ problém. V praxi
              však <strong>rotácia lietadla</strong> často vyzerá skôr ako bežná súčasť prevádzky než
              ako dôvod, ktorý by automaticky rušil nárok na kompenzáciu.
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
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  <strong>Áno, nárok často vzniká.</strong> Samotná rotácia lietadla zvyčajne nie je
                  presvedčivá automatická výnimka z kompenzácie.
                </p>
                <p>
                  Ak ste do <strong>konečnej destinácie</strong> prišli 3 hodiny alebo viac neskôr a
                  na let sa vzťahuje EU261, prípad môže byť silný.
                </p>
                <p>
                  Dôležité však je zistiť, či oneskorená rotácia nebola len následkom inej skutočne
                  mimoriadnej udalosti.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Aerolinka tvrdí, že let meškal kvôli rotácii lietadla?"
            description="ClaimWinger vie rýchlo preveriť, či ide o bežný prevádzkový problém aerolinky, alebo o zložitejší prípad naviazaný na inú, skutočne mimoriadnu udalosť."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=delay_due_to_aircraft_rotation"
            ctaLabel="Preveriť meškajúci let"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger na preverenie prípadu."
            placement="sk_blog_delay_due_to_aircraft_rotation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo je tento dôvod často slabý
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-sky-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lietadlo je súčasť prevádzky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rotácia lietadla patrí k bežnému chodu aerolinky. To samo osebe často nevyzerá ako
                  vonkajšia, nepredvídateľná udalosť mimo jej kontroly.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-sky-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Reťazové meškanie je stále jej problém
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To, že predchádzajúci let meškal a posunul ďalší, ešte automaticky neznamená, že sa
                  aerolinka zbavila povinnosti platiť kompenzáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-sky-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dôležitý je pôvodný spúšťač
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa rotácia rozpadla kvôli extrémnemu počasiu alebo uzavretiu letiska, prípad môže
                  vyzerať inak. Preto treba pozerať hlbšie než na samotné slovo „rotácia".
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
                "meškanie v konečnej destinácii je 3 hodiny alebo viac",
                "aerolinka uvádza len „rotáciu lietadla“ bez presvedčivého vysvetlenia",
                "na let sa vzťahuje EU261",
                "máte dôkaz o dôvode meškania z aplikácie, e-mailu alebo letiska",
                "nejde o zjavný následok extrémneho počasia či bezpečnostného incidentu",
                "viete ukázať skutočný čas príletu do cieľa",
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
              Kedy býva situácia zložitejšia
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rotácia zlyhala kvôli predchádzajúcemu počasiu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka vie preukázať, že dnešné meškanie je len následok skutočne
                  mimoriadnej udalosti z predchádzajúcej rotácie, prípad sa komplikuje.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Uzavreté letisko alebo širší operatívny kolaps
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak meškanie vzniklo až po udalosti, ktorú aerolinka reálne nevedela ovplyvniť,
                  nestačí sa zastaviť pri samotnej rotácii. Treba čítať celý reťazec príčin.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Slabé dôkazy od pasažiera
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dobrý dôkaz o tom, čo aerolinka tvrdila na mieste, býva veľmi užitočný. Bez neho sa
                  prípad stále dá riešiť, ale zložitejšie sa oddeľuje jednoduchá výhovorka od reálnej príčiny.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-800 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri meškaní kvôli rotácii lietadla býva najdôležitejšie zistiť, či ide o obyčajný
                prevádzkový problém aerolinky, alebo len o následok inej, mimoriadnej udalosti.
                ClaimWinger vie tento rozdiel rýchlo preveriť.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_delay_due_to_aircraft_rotation_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Preveriť meškajúci let
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
                        "sk_delay_due_to_aircraft_rotation_final_cta_home",
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
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete rýchlo preveriť konkrétny dôvod meškania a skutočnú silu svojho prípadu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_delay_due_to_aircraft_rotation_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie kvôli nedostatku posádky
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak aerolinka mieša dôvody typu posádka, rotácia a širší prevádzkový problém.
                </p>
                <Link
                  href="/sk/blog/meskanie-kvoli-nedostatku-posadky"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o posádke
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší kontext toho, kedy je reťazové meškanie ešte prevádzka a kedy už výnimka.
                </p>
                <Link
                  href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na širší článok
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
