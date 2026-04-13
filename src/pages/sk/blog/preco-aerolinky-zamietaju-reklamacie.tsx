import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  SearchCheck,
  ShieldAlert,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/preco-aerolinky-zamietaju-reklamacie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=why_airlines_reject_claims";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=why_airlines_reject_claims";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=why_airlines_reject_claims";

const faqItems = [
  {
    question: "Prečo aerolínky najčastejšie zamietajú reklamácie?",
    answer:
      "Najčastejšie sa odvolávajú na mimoriadne okolnosti, tvrdia že let nespadal do rozsahu EU261, spochybňujú konečnú destináciu pri prestupe alebo namietajú, že reklamácia smerovala na nesprávneho operujúceho dopravcu.",
  },
  {
    question: "Znamená zamietnutie reklamácie automaticky, že aerolínka má pravdu?",
    answer:
      "Nie. Zamietnutie je len stanovisko aerolinky. Až ďalšia kontrola dôvodov, dôkazov a právneho rámca ukáže, či je odmietnutie naozaj opodstatnené.",
  },
  {
    question: "Čo ak aerolínka tvrdí mimoriadne okolnosti?",
    answer:
      "To ešte neznamená automatickú prehru. Treba sa pozrieť, či ide o skutočne mimoriadnu okolnosť podľa európskej logiky, alebo len o prevádzkový problém, ktorý sa takto označuje príliš široko.",
  },
  {
    question: "Má zmysel riešiť prípad ďalej po zamietnutí?",
    answer:
      "Často áno. Veľa závisí od dôvodu zamietnutia, kvality vašich dôkazov a od toho, či spor skutočne stojí na slabom právnom základe, alebo len na štandardnej obrannej argumentácii aerolinky.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PrecoAerolinkyZamietajuReklamaciePage() {
  return (
    <LayoutSk>
      <SEO
        title="Prečo aerolínky zamietajú reklamácie?"
        description="Prečo aerolínky odmietajú vyplatiť odškodnenie? Vysvetľujeme najčastejšie dôvody zamietnutia, čo z nich býva silné a čo je len štandardná obranná argumentácia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Prečo aerolínky zamietajú reklamácie?",
            description:
              "Praktický sprievodca najčastejšími dôvodmi, prečo aerolínky zamietajú reklamácie za meškanie alebo zrušenie letu.",
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
                name: "Prečo aerolínky zamietajú reklamácie?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Prečo aerolínky zamietajú reklamácie?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              Praktická mapa dôvodov zamietnutia
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Prečo aerolínky zamietajú reklamácie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Zamietnutie reklamácie ešte samo osebe nehovorí, že aerolínka má pravdu. Často iba
              ukazuje, <strong>na čom chce spor postaviť</strong>. Najdôležitejšie je vedieť oddeliť
              skutočne silný dôvod odmietnutia od štandardnej obrannej odpovede, ktorá znie tvrdo,
              ale nemusí obstáť po bližšom rozbore.
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
            <Card className="border-orange-200 bg-gradient-to-br from-orange-500 to-amber-600 p-8 text-slate-950 shadow-xl dark:border-orange-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-orange-950">
                <p>
                  Aerolínky najčastejšie zamietajú reklamácie cez argumenty ako
                  <strong> mimoriadne okolnosti</strong>, <strong>nesprávny dopravca</strong>,
                  <strong> slabé dôkazy</strong> alebo <strong>nesprávne pochopenie trasy</strong>.
                </p>
                <p>
                  To však ešte neznamená, že ich odpoveď je automaticky správna. Veľa sporov stojí
                  skôr na tom, ako bol prípad opísaný, čo bolo priložené a ako sa číta
                  <strong> konečná destinácia</strong>.
                </p>
                <p>
                  Ak nechcete sami rozoberať dôvod zamietnutia, môžete prípad poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_why_airlines_reject_claims_quick_answer_home",
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
            title="Neviete, či je dôvod zamietnutia naozaj silný?"
            description="ClaimWinger vie pomôcť rozlíšiť, či je odpoveď aerolinky postavená na skutočne silnom dôvode, alebo len na štandardnej obrannej formulácii."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=why_airlines_reject_claims"
            ctaLabel="Preveriť dôvod zamietnutia"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_why_airlines_reject_claims_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-8 w-8 text-orange-600" />
              1. Mimoriadne okolnosti
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto je najčastejší dôvod odmietnutia. Aerolínka tvrdí, že problém bol mimo jej
                  kontrolu a preto kompenzácia nevzniká.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Praktický problém je v tom, že pod túto nálepku sa niekedy snažia schovať aj veci,
                  ktoré skôr vyzerajú ako prevádzkový problém, napríklad rotácia lietadla alebo
                  nedostatok posádky. Preto samotná fráza ešte nič definitívne neuzatvára.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <SearchCheck className="h-8 w-8 text-orange-600" />
              2. Slabé alebo neúplné dôkazy
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Častý problém je, že reklamácia neukazuje dosť jasno, že ste boli na konkrétnom
                  lete, čo sa s ním stalo a aký bol výsledok v cieli.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chýbajú rezervácia, dôkaz check-inu, komunikácia od aerolinky alebo údaje o
                  skutočnom prílete do konečnej destinácie, aerolínka má oveľa viac priestoru
                  reklamáciu formálne odmietnuť.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nesprávny operujúci dopravca alebo nesprávne smerovaná reklamácia
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Your Europe jasne pripomína, že zodpovedný býva spravidla
                  <strong> operujúci dopravca</strong>, nie len ten, od koho ste letenku kúpili.
                  Pri codeshare, wet lease alebo prestupoch je to veľmi častý zdroj chaosu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak reklamácia ide nesprávnej strane, odpoveď môže vyzerať ako tvrdé zamietnutie,
                  hoci problém je skôr procesný než vecný.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Chybné čítanie prestupu a konečnej destinácie
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Veľa sporov sa zamieta len preto, že aerolínka alebo aj pasažier pozerajú na prvý
                  segment izolovane. Pri jednej rezervácii však môže rozhodovať až
                  <strong> meškanie v konečnej destinácii</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Naopak, pri dvoch samostatných letenkách môže byť pozícia pasažiera skutočne oveľa
                  slabšia. Práve toto je jeden z najčastejších dôvodov, prečo dve zdanlivo podobné
                  reklamácie dopadnú úplne inak.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
              5. Zamietnutie nie je koniec prípadu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Zamietnutie je stále iba pozícia aerolinky. Dôležité je zistiť, či stojí na skutočne
                  presvedčivom dôvode, alebo len na formulácii, ktorá bez ďalšej kontroly znie
                  autoritatívne.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Preto má zmysel rozobrať dôvod odmietnutia bod po bode: právny rámec, typ narušenia,
                  dôkazy, jednu rezerváciu, konečnú destináciu a to, kto bol operujúci dopravca.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-orange-200 bg-orange-50 p-8 dark:border-orange-800 dark:bg-orange-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete preveriť, či dôvod zamietnutia naozaj drží?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak už máte odpoveď od aerolinky, ClaimWinger vie pomôcť odhadnúť, či ide o silné
                zamietnutie, alebo o prípad, ktorý sa oplatí tlačiť ďalej.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_why_airlines_reject_claims_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť zamietnutie s ClaimWinger
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
                        "sk_why_airlines_reject_claims_final_cta_delay",
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
                        "sk_why_airlines_reject_claims_final_cta_cancel",
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
                  Čo robiť, keď aerolínka zamietne reklamáciu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prirodzený ďalší krok po tom, čo si rozoberiete samotný dôvod odmietnutia.
                </p>
                <Link
                  href="/sk/blog/zamietnuta-reklamacia-co-robit"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako preukázať meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak odmietnutie stojí hlavne na slabých alebo neúplných dôkazoch.
                </p>
                <Link
                  href="/sk/blog/ako-preukazat-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viac letov v jednej rezervácii
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité, ak sa spor točí okolo prestupu a konečnej destinácie.
                </p>
                <Link
                  href="/sk/blog/viac-letov-v-jednej-rezervacii"
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
