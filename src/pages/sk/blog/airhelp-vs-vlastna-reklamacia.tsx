import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Scale,
  UserCircle2,
  Wallet,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/airhelp-vs-vlastna-reklamacia";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airhelp_vs_self_claim";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airhelp_vs_self_claim";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airhelp_vs_self_claim";

const faqItems = [
  {
    question: "Je lepší AirHelp alebo vlastná reklamácia?",
    answer:
      "Záleží od prípadu. Vlastná reklamácia býva silná pri jednoduchom a čerstvom spore, keď máte dobré podklady a chcete sa vyhnúť provízii. AirHelp môže dávať väčší zmysel, ak chcete prenechať čas, komunikáciu a ďalšie kroky po zamietnutí alebo neodpovedaní aerolinky.",
  },
  {
    question: "Aké poplatky uvádza AirHelp na svojej oficiálnej stránke?",
    answer:
      "Podľa oficiálnej stránky AirHelp o poplatkoch, skontrolovanej 13. apríla 2026, uvádzajú štandardný poplatok za službu 35 % vrátane DPH a ak je potrebná právna cesta, aj dodatočný poplatok za právnu cestu 15 % vrátane DPH. To znamená, že pri právnej eskalácii môže byť kombinovaný poplatok vyšší než pri čisto mimosúdnom vyriešení.",
  },
  {
    question: "Aká je provízia ClaimWingeru pri rovnakom porovnaní?",
    answer:
      "ClaimWinger účtuje 30 % bez ohľadu na to, či sa vec vyrieši mimosúdne alebo súdne. To je dôležité najmä pre cestujúcich, ktorí nechcú model, kde sa poplatok mení podľa toho, či je potrebná právna eskalácia.",
  },
  {
    question: "Mám skúsiť najprv reklamáciu sám a až potom firmu?",
    answer:
      "Pri jednoduchom prípade to často dáva zmysel. Ak však aerolinka mlčí, zamieta nárok alebo nechcete ďalej riešiť argumentáciu a ďalší proces sami, externá firma môže byť praktickejšia aj za cenu provízie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AirhelpVsVlastnaReklamaciaPage() {
  return (
    <LayoutSk>
      <SEO
        title="AirHelp vs vlastná reklamácia: čo sa kedy viac oplatí?"
        description="AirHelp alebo vlastná reklamácia? Vysvetľujeme rozdiel v čase, kontrole a poplatkoch, vrátane oficiálne uvádzaných sadzieb a poplatkov AirHelp a férového porovnania s ClaimWingerom."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "AirHelp vs vlastná reklamácia: čo sa kedy viac oplatí?",
            description:
              "Praktické a férové porovnanie vlastnej reklamácie s využitím AirHelp, vrátane času, kontroly nad prípadom a oficiálne uvádzaných sadzieb a poplatkov.",
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
                name: "AirHelp vs vlastná reklamácia",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>AirHelp vs vlastná reklamácia</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              AirHelp vs vlastná reklamácia: čo sa kedy viac oplatí?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Toto porovnanie má zmysel najmä pre ľudí, ktorí stoja pred jednoduchou otázkou:
              <strong> skúsiť reklamáciu sám</strong>, alebo ho zveriť firme ako <strong>AirHelp</strong>?
              Férová odpoveď nie je univerzálna. Záleží od zložitosti prípadu, vašej ochoty riešiť
              komunikáciu a aj od toho, aký model poplatkov vám dáva zmysel.
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
            <Card className="border-violet-200 bg-gradient-to-br from-violet-600 to-indigo-700 p-8 text-white shadow-xl dark:border-violet-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-violet-50">
                <p>
                  <strong>Vlastná reklamácia</strong> býva lepšia, ak je prípad čerstvý, jednoduchý a
                  chcete sa vyhnúť provízii.
                </p>
                <p>
                  <strong>AirHelp</strong> môže byť praktickejší, ak nechcete riešiť celý proces sami
                  a ste pripravení zaplatiť za to, že celý proces prevezme niekto iný.
                </p>
                <p>
                  Pri porovnaní s ClaimWingerom je dôležité vedieť aj model poplatkov: podľa oficiálnej
                  stránky AirHelp skontrolovanej 13. apríla 2026 uvádzajú <strong>35 % poplatok za službu</strong>
                  a pri nutnej právnej ceste aj <strong>15 % dodatočný poplatok za právnu cestu</strong>, oboje vrátane DPH.
                  ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši mimosúdne
                  alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Chcete si prípad radšej preveriť bez zložitého porovnávania modelov?"
            description="ClaimWinger vie rýchlo posúdiť, či má ešte zmysel skúsiť vlastnú reklamáciu, alebo či je už praktickejšie riešiť ďalší postup cez partnera. Provízia je 30 % bez ohľadu na mimosúdnu alebo súdnu cestu."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=airhelp_vs_self_claim"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_airhelp_vs_self_claim_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <UserCircle2 className="h-8 w-8 text-violet-600" />
              1. Kedy je vlastná reklamácia silná voľba
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "prípad je čerstvý a aerolínka ešte len dostáva prvú reklamáciu",
                "máte boarding pass, PNR a jasný problém s letom",
                "ste ochotní venovať čas formuláru a follow-upu",
                "chcete si najprv otestovať cestu bez provízie",
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
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Wallet className="h-8 w-8 text-violet-600" />
              2. Čo je na AirHelp praktické a čo treba vedieť o poplatkoch
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                AirHelp je praktická voľba pre ľudí, ktorí nechcú sami riešiť formuláre, argumentáciu,
                ďalšie urgencie a prípadnú eskaláciu. Výmenou za to vstupuje do hry ich fee model.
              </p>
              <p>
                Na oficiálnej cenovej stránke AirHelp, skontrolovanej <strong>13. apríla 2026</strong>,
                uvádzajú <strong>35 % poplatok za službu</strong> a ak je nutná právna cesta, aj
                <strong> 15 % dodatočný poplatok za právnu cestu</strong>, oboje vrátane DPH. To znamená, že pri právnej
                eskalácii sa výsledný odpočet môže líšiť od čisto mimosúdneho scenára.
              </p>
              <p>
                To nie je automaticky „zlé“ ani „dobré“. Je to jednoducho model, ktorý si treba
                prečítať dopredu a porovnať s tým, čo očakávate od celej služby.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-8 w-8 text-violet-600" />
              3. Kde je v porovnaní silný ClaimWinger
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ClaimWinger má jednoduchší model pre porovnanie: <strong>30 %</strong> bez ohľadu na
                  to, či sa vec vyrieši mimosúdne alebo súdne. Pre niekoho je to prehľadnejšie, lebo
                  vie od začiatku, že právna eskalácia nemení percento provízie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To neznamená, že ClaimWinger je automaticky správna voľba pre každého. Ak máte veľmi
                  jednoduchý prípad a čas ho riešiť sami, vlastná reklamácia môže byť stále lacnejšia.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Najpraktickejší spôsob rozhodnutia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Choďte sami
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak je reklamačný prípad jednoduchý, dokumenty máte poruke a ešte neprišlo zamietnutie, vlastná
                  reklamácia je úplne rozumný prvý krok.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zverte to firme
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak nechcete riešiť komunikáciu, aerolínka mlčí alebo je spor komplikovanejší, AirHelp
                  alebo ClaimWinger môžu dávať väčší praktický zmysel než ďalší pokus svojpomocne.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-violet-200 bg-white p-8 dark:border-violet-800 dark:bg-slate-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si prípad rovno preveriť bez ďalšieho porovnávania?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak nechcete riešiť, či má ešte zmysel vlastná reklamácia alebo či už je lepšie ísť cez
                partnera, ClaimWinger vie prípad rýchlo preveriť a nastaviť ďalší krok. Model je pri tom
                jasný: 30 % bez ohľadu na to, či sa vec rieši mimosúdne alebo súdne.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_airhelp_vs_self_claim_final_cta_home",
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
                        "sk_airhelp_vs_self_claim_final_cta_delay",
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
                        "sk_airhelp_vs_self_claim_final_cta_cancel",
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
