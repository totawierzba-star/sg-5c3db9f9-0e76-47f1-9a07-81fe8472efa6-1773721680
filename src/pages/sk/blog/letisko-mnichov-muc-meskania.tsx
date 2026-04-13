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

const articleUrl = "https://problemlot.com/sk/blog/letisko-mnichov-muc-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=munich_airport_delays";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=munich_airport_delays";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=munich_airport_delays";

const faqItems = [
  {
    question: "Mám pri meškaní na letisku Mníchov nárok na odškodnenie?",
    answer:
      "Často áno, ale samotné letisko Mníchov nárok nevytvára. Kľúčové je, či let patrí do rozsahu EU261, aké bolo meškanie v konečnej destinácii a či aerolínka nepreukáže mimoriadne okolnosti.",
  },
  {
    question: "Koľko môžem dostať pri probléme na letisku MUC?",
    answer:
      "Ak sa na váš let uplatní EU261, typické pásma bývajú 250 €, 400 € alebo 600 € podľa trasy a okolností. Rozhodujúca je vzdialenosť a výsledok cesty, nie len samotný kód letiska MUC.",
  },
  {
    question: "Počíta sa meškanie odletu z Mníchova alebo príchod do cieľa?",
    answer:
      "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo z Mníchova.",
  },
  {
    question: "Prečo je pri MUC taká dôležitá jedna rezervácia?",
    answer:
      "Mníchov je veľký prestupný uzol. Ak bol let z MUC len jedným úsekom celej cesty na jednej rezervácii, rozhodovať môže až výsledok v konečnej destinácii celej trasy.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoMnichovMucMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Mníchov (MUC) meškania: práva pasažiera, odškodnenie a čo rozhoduje"
        description="Meškal vám, zrušili alebo výrazne presunuli let z letiska Mníchov (MUC)? Zistite, kedy vzniká nárok na odškodnenie, čo pri EU261 rozhoduje a prečo je pri MUC kľúčová konečná destinácia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Letisko Mníchov (MUC) meškania: práva pasažiera, odškodnenie a čo rozhoduje",
            description:
              "Praktický sprievodca pre cestujúcich pri meškaní alebo zrušení letu na letisku Mníchov vrátane významu konečnej destinácie, rozsahu EU261 a špecifík veľkého prestupného uzla.",
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
                name: "Letisko Mníchov (MUC) meškania",
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
            <span>Letisko Mníchov (MUC) meškania</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Airport content pre Mníchov Franz Josef Strauss (MUC)
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Mníchov (MUC): čo robiť pri meškaní alebo zrušení letu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak riešite problém na <strong>letisku Mníchov (MUC)</strong>, dôležité je nepozerať
              len na samotné letisko. Pri odškodnení podľa <strong>EU261</strong> rozhoduje hlavne to,
              aká bola trasa, kto bol operujúci dopravca, aké bolo meškanie v konečnej destinácii a
              či aerolínka vie preukázať mimoriadne okolnosti.
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
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-cyan-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>
                  <strong>Áno, často áno.</strong> Ak váš let z Mníchova meškal alebo bol zrušený,
                  nárok na kompenzáciu môže vzniknúť. Samotné letisko MUC však nestačí. Rozhoduje
                  najmä to, či let patrí do rozsahu EU261 a aké bolo meškanie v cieli.
                </p>
                <p>
                  Typické pásma bývajú <strong>250 €</strong>, <strong>400 €</strong> alebo
                  <strong> 600 €</strong> podľa trasy a okolností.
                </p>
                <p>
                  Pri letisku Mníchov býva mimoriadne dôležitá hubová logika. Veľká časť problémov
                  sa netýka len jedného priameho letu, ale celej cesty cez MUC na jednej rezervácii.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu z Mníchova?"
            description="ClaimWinger vie rýchlo preveriť, či ide o silný nárok podľa EU261, alebo o citlivejší prípad, kde bude rozhodovať konečná destinácia, operujúci dopravca a dôvod narušenia na MUC."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=munich_airport_delays"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_munich_airport_delays_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je pri MUC najdôležitejšie pochopiť
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Letisko nie je všetko
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To, že problém vznikol v Mníchove, ešte samo o sebe neurčuje nárok. Rozhodujúca
                  je právna logika celej cesty.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Počíta sa cieľ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii je kľúčové meškanie v konečnej destinácii, nie len odletová tabuľa
                  na MUC.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-blue-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dôvod meškania
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie každé tvrdenie o prevádzke letiska alebo riadení letovej prevádzky automaticky
                  ruší nárok. Dôležité je, čo vie dopravca skutočne preukázať.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva nárok z Mníchova najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "let patrí do rozsahu EU261",
                "do konečnej destinácie ste prišli s meškaním aspoň 3 hodiny",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "máte rezerváciu, číslo letu a komunikáciu od aerolínky",
                "je jasné, kto bol operujúci dopravca a čo bola konečná destinácia",
                "na let ste sa dostavili riadne a včas",
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
              <Clock className="h-8 w-8 text-blue-600" />
              Typické scenáre na MUC
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Priamy let po Európe
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj z Mníchova sa riešia bežné priame lety. Ak je let v rozsahu EU261 a do cieľa
                  prídete výrazne neskôr, nárok môže byť silný aj pri jednoduchom itinerári.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Veľký prestupný uzol
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri MUC je veľmi časté, že letisko nie je konečným cieľom, ale len prestupným bodom.
                  Vtedy často rozhoduje až výsledok celej cesty na jednej rezervácii.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lufthansa Group a partneri
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Mníchove býva dôležité presne čítať, kto bol skutočne operujúcim dopravcom a či
                  šlo o jednu rezerváciu v rámci širšej siete alebo o samostatné letenky.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Koľko môžete dostať
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  250 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kratších letoch, často do 1 500 km, ak sú splnené podmienky EU261.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  400 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri stredných trasách, typicky v rámci širšej európskej a regionálnej siete.
                </p>
              </Card>
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  600 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri dlhých letoch nad 3 500 km, ak sa na konkrétnu cestu pravidlá uplatnia.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri letisku Mníchov má veľký zmysel rýchlo oddeliť silný prípad od citlivejšej
                situácie s prestupom, prevádzkovým problémom, zdieľaným kódom, partnerom alebo
                tvrdenými mimoriadnymi okolnosťami.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_munich_airport_delays_final_cta_delay",
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
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_munich_airport_delays_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Riešim skôr zrušený let
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
                  Ak chcete prípad preveriť prakticky podľa konkrétnych okolností letu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_munich_airport_delays_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Mníchov bol len časťou jednej cesty a problém sa prejavil ďalej.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-pri-prestupe"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o prestupe
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Letisko Frankfurt (FRA)
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak porovnávate podobný airport intent pre ďalší veľký nemecký hub.
                </p>
                <Link
                  href="/sk/blog/letisko-frankfurt-fra-meskania"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na FRA článok
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
