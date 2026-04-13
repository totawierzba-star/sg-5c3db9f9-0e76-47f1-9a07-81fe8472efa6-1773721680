import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Scale,
  Wallet,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/kolko-si-beru-firmy-za-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claim_company_fees";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claim_company_fees";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claim_company_fees";

const faqItems = [
  {
    question: "Koľko si firmy zvyčajne berú za odškodnenie za let?",
    answer:
      "Najčastejšie ide o percento z úspešne získanej kompenzácie. Rozdiel býva v tom, či je sadzba pevná, či sa mení pri právnej eskalácii a či sú v nej zahrnuté aj ďalšie náklady. Preto treba vždy pozerať na celý model, nie len na jedno malé číslo v reklame.",
  },
  {
    question: "Aká je provízia ClaimWingeru?",
    answer:
      "ClaimWinger účtuje 30 % bez ohľadu na to, či sa vec vyrieši mimosúdne alebo súdne. To je dôležité pre ľudí, ktorí chcú jednoduchý a predvídateľný model poplatku.",
  },
  {
    question: "Aké poplatky uvádza AirHelp oficiálne?",
    answer:
      "Na oficiálnej stránke AirHelp Our Fees, skontrolovanej 13. apríla 2026, uvádzajú 35 % poplatok za službu vrátane DPH a pri právnej ceste aj dodatočný 15 % poplatok za právnu cestu vrátane DPH.",
  },
  {
    question: "Aké poplatky uvádza Skycop oficiálne?",
    answer:
      "Na oficiálnom cenníku Skycop, skontrolovanom 13. apríla 2026, uvádzajú pri štandardných kompenzáciách 250/400/600 € odmenu 110/176/264 € vrátane DPH a pri právnych krokoch 125/200/300 € vrátane DPH. Pri týchto štandardných sumách to prakticky zodpovedá 44 % a 50 %.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KolkoSiBeruFirmyZaOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Koľko si berú firmy za odškodnenie za let?"
        description="Koľko si berú firmy za odškodnenie za let? Porovnávame férovo modely poplatkov, právnu eskaláciu a to, na čo sa pozerať pri výbere medzi vlastnou reklamáciou, ClaimWingerom, AirHelp a Skycop."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Koľko si berú firmy za odškodnenie za let?",
            description:
              "Praktické a férové vysvetlenie, koľko si firmy berú za odškodnenie za let a na čo sa pozerať pri porovnaní modelov poplatkov.",
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
                name: "Koľko si berú firmy za odškodnenie za let?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Koľko si berú firmy za odškodnenie</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Koľko si berú firmy za odškodnenie za let?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je jednoduchá: <strong>záleží od modelu poplatku</strong>. Niektoré
              firmy majú jedno fixné percento, iné majú základnú sadzbu a pri súdnej alebo právnej
              ceste si účtujú viac. Preto sa pri takomto porovnaní oplatí pozerať na
              <strong> celkový výsledok pre cestujúceho</strong>, nie len na slogan typu
              <strong> no win, no fee</strong>.
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  <strong>Vlastná reklamácia</strong> má z pohľadu provízie jednu výhodu:
                  <strong> 0 %</strong>. Cenou za to je váš vlastný čas, komunikácia s aerolinkou a
                  ďalšie kroky pri zamietnutí alebo neodpovedaní.
                </p>
                <p>
                  <strong>ClaimWinger</strong> má jednoduchý model <strong>30 %</strong> bez ohľadu
                  na to, či sa vec rieši mimosúdne alebo súdne.
                </p>
                <p>
                  <strong>AirHelp</strong> oficiálne uvádza <strong>35 %</strong> poplatok za službu
                  vrátane DPH a pri právnej ceste ešte <strong>15 %</strong> dodatočný právny poplatok.
                </p>
                <p>
                  <strong>Skycop</strong> má oficiálny cenník, ktorý pri štandardných kompenzáciách
                  250/400/600 € prakticky vychádza na <strong>44 %</strong>, a pri právnej ceste na
                  <strong> 50 %</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Chcete si prípad preveriť bez ďalšieho porovnávania sadzieb?"
            description="ClaimWinger vie prípad rýchlo preveriť a komunikuje jednoduchý model 30 % bez ohľadu na to, či sa vec vyrieši mimosúdne alebo súdne."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=claim_company_fees"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_claim_company_fees_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Wallet className="h-8 w-8 text-amber-600" />
              1. Čo si pri porovnaní naozaj všímať
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité nie je len <strong>koľko percent</strong>, ale aj
                  <strong> kedy sa percento mení</strong>. Práve pri právnej eskalácii sa rozdiely
                  medzi jednotlivými modelmi ukazujú najviac.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Druhá kľúčová vec je, či firma komunikuje poplatok
                  <strong> jednoducho a predvídateľne</strong>, alebo až v ďalších podmienkach zistíte,
                  že pri ťažšom prípade platí iná sadzba.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-8 w-8 text-amber-600" />
              2. Praktické porovnanie modelov poplatkov
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Vlastná reklamácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Z pohľadu provízie ide o <strong>0 %</strong>. Táto cesta dáva zmysel pri
                  jednoduchom a čerstvom prípade, ak máte chuť riešiť komunikáciu s aerolinkou sami.
                </p>
              </Card>

              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  ClaimWinger
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ClaimWinger komunikuje <strong>30 %</strong> bez ohľadu na to, či sa prípad vyrieši
                  mimosúdne alebo súdne. To je praktické, ak nechcete riešiť meniacu sa sadzbu podľa
                  typu eskalácie.
                </p>
              </Card>

              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  AirHelp
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Podľa oficiálnej stránky Our Fees, skontrolovanej 13. apríla 2026, AirHelp uvádza
                  <strong> 35 %</strong> štandardný poplatok za službu vrátane DPH a pri právnej ceste
                  ešte <strong>15 %</strong> dodatočný poplatok za právnu cestu vrátane DPH.
                </p>
              </Card>

              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Skycop
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Podľa oficiálneho cenníka, skontrolovaného 13. apríla 2026, Skycop pri štandardných
                  kompenzáciách 250/400/600 € uvádza odmenu <strong>110/176/264 €</strong>, a pri
                  právnej ceste <strong>125/200/300 €</strong>, vrátane DPH.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <CheckCircle2 className="h-8 w-8 text-amber-600" />
              3. Kedy sa ktorá cesta oplatí
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Ak máte <strong>jednoduchý a čerstvý prípad</strong>, často má zmysel začať vlastnou
                reklamáciou. Pri úspechu si nechávate celú sumu a zároveň si rýchlo overíte, či aerolinka
                reaguje vecne alebo len predlžuje proces.
              </p>
              <p>
                Ak už vopred viete, že <strong>nechcete niesť procesnú záťaž sami</strong>, oplatí sa
                pozerať hlavne na to, či je model poplatku jasný aj pri komplikovanejšej ceste. Práve tu
                býva pre niektorých cestujúcich dôležitá jednoduchosť modelu ClaimWingeru.
              </p>
              <p>
                Ak porovnávate viaceré firmy, nepozerajte len na veľké číslo v reklame. Pýtajte sa, čo sa
                stane, keď aerolinka neodpovie, zamietne claim alebo keď sa vec dostane na právnu úroveň.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-amber-200 bg-amber-50 p-8 dark:border-amber-800 dark:bg-amber-950/30">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Najpraktickejšie pravidlo
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak chcete čo najnižší náklad, prvý pokus býva často vlastná reklamácia. Ak však chcete
                jednoduchší proces a predvídateľnosť, porovnávajte hlavne modely poplatkov pri eskalácii.
                Pri ClaimWingeri je táto časť jednoduchá: <strong>30 %</strong> bez ohľadu na to, či
                sa vec rieši mimosúdne alebo súdne.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_claim_company_fees_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť prípad s ClaimWinger
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
                        "sk_claim_company_fees_final_cta_delay",
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
                        "sk_claim_company_fees_final_cta_cancel",
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
