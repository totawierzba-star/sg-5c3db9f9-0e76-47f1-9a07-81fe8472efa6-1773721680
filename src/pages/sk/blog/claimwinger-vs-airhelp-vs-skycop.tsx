import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Layers3,
  Scale,
  Wallet,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/claimwinger-vs-airhelp-vs-skycop";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claimwinger_vs_airhelp_vs_skycop";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claimwinger_vs_airhelp_vs_skycop";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=claimwinger_vs_airhelp_vs_skycop";

const faqItems = [
  {
    question: "Čo je v tomto porovnaní najväčší rozdiel medzi ClaimWinger, AirHelp a Skycop?",
    answer:
      "Najväčší praktický rozdiel je v modeli poplatkov a v tom, ako predvídateľne sa mení pri právnej eskalácii. ClaimWinger komunikuje 30 % bez ohľadu na mimosúdnu alebo súdnu cestu. AirHelp uvádza 35 % poplatok za službu a pri právnej ceste aj dodatočný 15 % poplatok. Skycop má oficiálne zverejnený cenník s pevnými sumami pri štandardných kompenzáciách 250/400/600 € a vyššou sadzbou pri právnych krokoch.",
  },
  {
    question: "Aké poplatky uvádza AirHelp oficiálne?",
    answer:
      "Na oficiálnej stránke AirHelp Our Fees, skontrolovanej 13. apríla 2026, uvádzajú 35 % poplatok za službu vrátane DPH a ak je potrebná právna cesta, aj 15 % dodatočný poplatok za právnu cestu vrátane DPH.",
  },
  {
    question: "Aké poplatky uvádza Skycop oficiálne?",
    answer:
      "Na oficiálnom cenníku Skycop, skontrolovanom 13. apríla 2026, uvádzajú pri štandardných kompenzáciách 250/400/600 € odmenu 110/176/264 € vrátane DPH, čo zodpovedá 44 %. Pri právnych krokoch uvádzajú 125/200/300 € vrátane DPH, teda 50 % pri týchto štandardných sumách. Pri iných výškach kompenzácie cenník uvádza 44 % a pri právnej ceste 50 % vrátane DPH.",
  },
  {
    question: "Aká je provízia ClaimWingeru?",
    answer:
      "ClaimWinger účtuje 30 % bez ohľadu na to, či sa vec rieši mimosúdne alebo súdne. To je dôležité pre cestujúcich, ktorí chcú jednoduchší a predvídateľný model poplatkov.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ClaimwingerVsAirhelpVsSkycopPage() {
  return (
    <LayoutSk>
      <SEO
        title="ClaimWinger vs AirHelp vs Skycop: čo sa oplatí vedieť pred výberom?"
        description="Porovnávame ClaimWinger, AirHelp a Skycop férovo a na oficiálnych dátach: modely poplatkov, právnu eskaláciu, predvídateľnosť nákladov a kedy ešte stačí vlastná reklamácia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ClaimWinger vs AirHelp vs Skycop: čo sa oplatí vedieť pred výberom?",
            description:
              "Férové porovnanie ClaimWinger, AirHelp a Skycop podľa oficiálne komunikovaných modelov poplatkov a praktického použitia pri nárokoch za let.",
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
                name: "ClaimWinger vs AirHelp vs Skycop",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-fuchsia-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>ClaimWinger vs AirHelp vs Skycop</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              ClaimWinger vs AirHelp vs Skycop: čo sa oplatí vedieť pred výberom?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Tento typ porovnania má zmysel vtedy, keď už viete, že <strong>nechcete riešiť claim úplne sami</strong>,
              ale stále si chcete rozumne vybrať medzi viacerými firmami. Pri takomto rozhodovaní býva
              najdôležitejšia nie marketingová veta, ale <strong>model poplatkov</strong>, jeho predvídateľnosť
              a to, ako sa mení, keď sa prípad dostane do právnej eskalácie.
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
            <Card className="border-fuchsia-200 bg-gradient-to-br from-fuchsia-600 to-indigo-700 p-8 text-white shadow-xl dark:border-fuchsia-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-fuchsia-50">
                <p>
                  <strong>ClaimWinger</strong> má v tymto porovnaní najjednoduchší poplatkový model:
                  <strong> 30 %</strong> bez ohľadu na to, či je prípad mimosúdny alebo súdny.
                </p>
                <p>
                  <strong>AirHelp</strong> na oficiálnej stránke uvádza <strong>35 % poplatok za službu</strong>
                  a pri právnej ceste aj <strong>15 % dodatočný poplatok za právnu cestu</strong>, oboje vrátane DPH.
                </p>
                <p>
                  <strong>Skycop</strong> má oficiálne zverejnený cenník s pevnými sumami pri štandardných
                  kompenzáciách 250/400/600 € a vyššími sadzbami pri právnych krokoch. Prakticky to pri týchto
                  štandardných sumách vychádza na <strong>44 %</strong> a pri právnej ceste na <strong>50 %</strong>,
                  vrátane DPH.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Chcete si prípad preveriť bez študovania ďalších cenníkov?"
            description="ClaimWinger vie rýchlo preveriť prípad a má jednoduchý model 30 % bez ohľadu na mimosúdnu alebo súdnu cestu. To môže byť praktické, ak nechcete ďalej porovnávať meniace sa sadzby podľa typu eskalácie."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=claimwinger_vs_airhelp_vs_skycop"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_claimwinger_vs_airhelp_vs_skycop_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Layers3 className="h-8 w-8 text-fuchsia-600" />
              1. Najpraktickejší rozdiel: ako sa mení poplatok pri eskalácii
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">ClaimWinger</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  30 % bez ohľadu na to, či sa vec rieši mimosúdne alebo súdne.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">AirHelp</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  35 % poplatok za službu, a pri právnej ceste ešte dodatočný 15 % poplatok za právnu cestu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Skycop</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Oficiálny cenník s pevnými sumami pri 250/400/600 € a vyššími sadzbami pri právnych krokoch.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Wallet className="h-8 w-8 text-fuchsia-600" />
              2. Čo hovoria oficiálne ceny
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                <strong>AirHelp</strong>: oficiálna stránka Our Fees, skontrolovaná <strong>13. apríla 2026</strong>,
                uvádza <strong>35 %</strong> poplatok za službu vrátane DPH a pri právnej ceste aj
                <strong> 15 %</strong> dodatočný poplatok za právnu cestu vrátane DPH.
              </p>
              <p>
                <strong>Skycop</strong>: oficiálny cenník aktualizovaný <strong>1. mája 2024</strong> uvádza pri
                štandardných kompenzáciách <strong>110 € / 176 € / 264 €</strong> vrátane DPH pri 250/400/600 €,
                a pri právnej ceste <strong>125 € / 200 € / 300 €</strong> vrátane DPH. Pri týchto štandardných
                sumách to prakticky zodpovedá <strong>44 %</strong> a <strong>50 %</strong>.
              </p>
              <p>
                <strong>ClaimWinger</strong>: 30 % bez ohľadu na to, či sa prípad rieši mimosúdne alebo súdne.
                To je v tomto porovnaní najjednoduchšie čitateľný model.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-8 w-8 text-fuchsia-600" />
              3. Kedy môže dávať zmysel každý z nich
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">ClaimWinger</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dáva zmysel, ak chcete čo najpredvídateľnejší model poplatku a nechcete riešiť, či sa percento zmení,
                  keď sa vec dostane do právnej roviny.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">AirHelp</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Môže dávať zmysel, ak chcete väčšiu známosť značky a ste v poriadku s tým, že ich model rozlišuje
                  základný poplatok a ďalší poplatok pri právnej ceste.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Skycop</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Môže dávať zmysel, ak vám vyhovuje ich model a viete si vedome porovnať, ako sa ich pevné sumy správajú
                  pri štandardných 250/400/600 € a pri právnej eskalácii.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Najrozumnejší spôsob rozhodnutia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Ak vám ide o najnižší čistý odpočet</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najprv si porovnajte modely poplatkov, nie len slogan „no win, no fee“. Práve pri právnej eskalácii sa rozdiely ukážu najviac.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Ak vám ide o pokoj a jednoduchosť</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vyberte si model, ktorému rozumiete aj v horšom scenári. Práve tam býva rozdiel medzi príjemne jednoduchým rozhodnutím a nepríjemným prekvapením po úspešnom vymožení.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-fuchsia-200 bg-white p-8 dark:border-fuchsia-800 dark:bg-slate-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si prípad preveriť bez ďalšieho študovania cenníkov?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger vie prípad rýchlo preveriť a zároveň má jasný model 30 % bez ohľadu na to, či sa vec rieši mimosúdne alebo súdne. Ak nechcete ďalej porovnávať ďalšie fee modely, toto môže byť najpraktickejšia cesta.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-fuchsia-600 hover:bg-fuchsia-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_claimwinger_vs_airhelp_vs_skycop_final_cta_home",
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
                        "sk_claimwinger_vs_airhelp_vs_skycop_final_cta_delay",
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
                        "sk_claimwinger_vs_airhelp_vs_skycop_final_cta_cancel",
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
