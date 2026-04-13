import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Users,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/meskanie-kvoli-nedostatku-posadky";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_due_to_crew_shortage";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_due_to_crew_shortage";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delay_due_to_crew_shortage";

const faqItems = [
  {
    question: "Mám nárok na odškodnenie, ak let meškal kvôli nedostatku posádky?",
    answer:
      "Často áno. Nedostatok posádky býva spravidla vnútorný prevádzkový problém aerolinky, nie automatická mimoriadna okolnosť. Stále však treba skontrolovať celý kontext prípadu.",
  },
  {
    question: "Je nedostatok posádky automaticky mimoriadna okolnosť?",
    answer:
      "Nie. Samotný chýbajúci pilot alebo palubný personál zvyčajne nestačí na to, aby sa aerolinka zbavila povinnosti platiť kompenzáciu.",
  },
  {
    question: "Kedy môže byť prípad zložitejší?",
    answer:
      "Situácia býva zložitejšia, ak aerolinka tvrdí, že problém s posádkou bol dôsledkom inej udalosti, napríklad extrémneho počasia alebo širšieho bezpečnostného narušenia. Vtedy treba čítať príčinu hlbšie.",
  },
  {
    question: "Čo si mám pri takomto meškaní odložiť?",
    answer:
      "Najmä oznámenie o dôvode meškania, boarding pass, PNR, nový čas odletu a dôkaz o tom, o koľko neskôr ste prišli do konečnej destinácie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MeskanieKvoliNedostatkuPosadkyPage() {
  return (
    <LayoutSk>
      <SEO
        title="Meškanie kvôli nedostatku posádky: vzniká nárok na odškodnenie?"
        description="Čo ak aerolinka tvrdí, že let meškal kvôli nedostatku posádky? Vysvetľujeme, prečo to často nie je mimoriadna okolnosť a kedy môže vzniknúť nárok na kompenzáciu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Meškanie kvôli nedostatku posádky: vzniká nárok na odškodnenie?",
            description:
              "Praktický sprievodca pre situáciu, keď aerolinka odôvodňuje meškanie nedostatkom posádky, vrátane rozdielu medzi interným prevádzkovým problémom a mimoriadnymi okolnosťami.",
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
                name: "Meškanie kvôli nedostatku posádky",
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
            <span>Meškanie kvôli nedostatku posádky</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
              Edge case content pre crew shortage
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Meškanie kvôli nedostatku posádky: vzniká nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak aerolinka vysvetľuje meškanie tým, že chýbal <strong>pilot</strong> alebo
              <strong> palubný personál</strong>, veľa pasažierov automaticky predpokladá, že ide o
              „mimoriadnu okolnosť". V praxi to však často býva skôr <strong>vnútorný prevádzkový
              problém aerolinky</strong> než výnimka, ktorá ju zbaví povinnosti platiť kompenzáciu.
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
            <Card className="border-violet-200 bg-gradient-to-br from-violet-600 to-fuchsia-700 p-8 text-white shadow-xl dark:border-violet-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-violet-50">
                <p>
                  <strong>Áno, nárok často vzniká.</strong> Nedostatok posádky sám o sebe zvyčajne
                  nevyzerá ako automatická mimoriadna okolnosť.
                </p>
                <p>
                  Ak ste do <strong>konečnej destinácie</strong> prišli o 3 hodiny alebo viac neskôr
                  a na let sa vzťahuje EU261, prípad môže byť silný.
                </p>
                <p>
                  Dôležité je však pozrieť sa, či problém s posádkou nebol len sekundárnym dôsledkom
                  inej, skutočne mimoriadnej udalosti.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Aerolinka tvrdí, že let meškal kvôli posádke?"
            description="ClaimWinger vie rýchlo preveriť, či ide o bežný vnútorný prevádzkový problém aerolinky, alebo o zložitejší prípad naviazaný na inú mimoriadnu udalosť."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=delay_due_to_crew_shortage"
            ctaLabel="Preveriť meškajúci let"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger na preverenie prípadu."
            placement="sk_blog_delay_due_to_crew_shortage_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo je tento dôvod často slabý
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Users className="mb-3 h-6 w-6 text-violet-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Posádka patrí do prevádzky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Zabezpečenie posádky je štandardná súčasť bežného fungovania aerolinky. Preto býva
                  ťažké tvrdiť, že ide o čisto vonkajšiu, neovplyvniteľnú udalosť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-violet-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Plánovanie je zodpovednosť dopravcu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak dopravca nezvládne rotáciu posádky, zmeny služieb alebo absencie, často to skôr
                  vyzerá na interný problém než na skutočnú výnimku z povinnosti platiť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-violet-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dôležitá je skutočná príčina
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chýbajúca posádka vznikla len ako následok inej udalosti, treba čítať prípad
                  hlbšie. Aerolinka nestačí, ak len povie „nedostatok posádky".
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
                "aerolinka uvádza chýbajúcu posádku bez presvedčivého ďalšieho vysvetlenia",
                "na let sa vzťahuje EU261",
                "máte dôkaz o dôvode meškania v e-maile, SMS alebo na letisku",
                "nejde o zjavný následok extrémneho počasia či uzavretia letiska",
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
                  Posádka chýba kvôli inej mimoriadnej udalosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka vie ukázať, že problém s posádkou vznikol až po extrémnom počasí,
                  bezpečnostnom incidente alebo širšom kolapse prevádzky, prípad sa komplikuje.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Reťazové meškanie po predchádzajúcom narušení
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Niekedy aerolinka tvrdí, že posádka chýbala len preto, že sa rozpadla celá rotácia
                  po skôr vzniknutej udalosti. Vtedy treba hodnotiť aj pôvodný spúšťač.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Slabé dôkazy od pasažiera
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak nemáte nič o tom, čo aerolinka tvrdila na mieste, prípad sa stále dá riešiť,
                  ale dobrý dôkaz o dôvode meškania býva veľké plus.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-violet-200 bg-violet-50 p-8 dark:border-violet-800 dark:bg-violet-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri meškaní kvôli posádke býva najdôležitejšie rozlíšiť, či ide o obyčajný interný
                problém aerolinky, alebo o reťazový následok inej mimoriadnej udalosti. ClaimWinger
                vie tento rozdiel rýchlo preveriť.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_delay_due_to_crew_shortage_final_cta_delay",
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
                        "sk_delay_due_to_crew_shortage_final_cta_home",
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
                  Ak chcete rýchlo preveriť konkrétny dôvod meškania a silu svojho prípadu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_delay_due_to_crew_shortage_related_home",
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
                  Mimoriadne okolnosti
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší kontext toho, kedy sa aerolinka naozaj môže brániť výnimkou.
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
                  Koľko dostanem za 3-hodinové meškanie letu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak si chcete naviazať dôvod meškania na same sumy kompenzácie.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-3-hodinove-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o sumách
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
