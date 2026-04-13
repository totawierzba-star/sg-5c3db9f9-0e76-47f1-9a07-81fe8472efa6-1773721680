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

const articleUrl = "https://problemlot.com/sk/blog/letisko-pariz-cdg-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=paris_cdg_airport_delays";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=paris_cdg_airport_delays";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=paris_cdg_airport_delays";

const faqItems = [
  {
    question: "Mám pri meškaní na letisku Paríž CDG nárok na odškodnenie?",
    answer:
      "Často áno, ale samotné letisko CDG nárok nevytvára. Rozhodujúca je trasa, meškanie v konečnej destinácii, operujúci dopravca a to, či aerolínka preukáže mimoriadne okolnosti.",
  },
  {
    question: "Prečo je pri CDG taká dôležitá konečná destinácia?",
    answer:
      "Paríž CDG je veľký prestupný uzol. Pri mnohých cestách nejde len o jeden let do Paríža, ale o celú trasu s prestupom. Preto býva rozhodujúci až výsledok v konečnej destinácii.",
  },
  {
    question: "Počíta sa pri CDG prvý segment alebo celý itinerár?",
    answer:
      "Ak bola cesta na jednej rezervácii, pri posudzovaní nároku býva kľúčový celý itinerár a konečná destinácia, nie len prvý úsek do alebo z CDG.",
  },
  {
    question: "Je pri CDG dôležité, kto bol skutočne operujúci dopravca?",
    answer:
      "Áno. Pri veľkých huboch ako CDG sa často miešajú marketingové kódy, partneri a codeshare. Rozhodujúce je, kto let reálne operoval a ako bola rezervácia postavená.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoParizCdgMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Paríž CDG meškania: práva pasažiera, odškodnenie a čo rozhoduje"
        description="Meškal vám, zrušili alebo výrazne presunuli let z alebo do letiska Paríž Charles de Gaulle (CDG)? Zistite, kedy vzniká nárok, prečo je pri CDG kľúčová konečná destinácia a ako fungujú prestupy na veľkom hube."
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
              "Letisko Paríž CDG meškania: práva pasažiera, odškodnenie a čo rozhoduje",
            description:
              "Praktický sprievodca pre cestujúcich pri meškaní alebo zrušení letu na letisku Paríž Charles de Gaulle vrátane úlohy konečnej destinácie, jednej rezervácie a operujúceho dopravcu.",
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
                name: "Letisko Paríž CDG meškania",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Letisko Paríž CDG meškania</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              Airport content pre Paríž Charles de Gaulle (CDG)
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Paríž CDG: čo robiť pri meškaní alebo zrušení letu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak riešite problém na <strong>letisku Paríž Charles de Gaulle (CDG)</strong>, nestačí
              pozerať len na samotné letisko. Pri nároku býva kľúčové, či bol <strong>CDG</strong>
              len jedným bodom na trase, kto bol skutočne operujúcim dopravcom a aké bolo meškanie
              v konečnej destinácii celej cesty.
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
            <Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-pink-700 p-8 text-white shadow-xl dark:border-rose-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-rose-50">
                <p>
                  <strong>Áno, často áno.</strong> Ak váš let z CDG meškal alebo bol zrušený, nárok
                  môže vzniknúť. Samotné letisko však nestačí. Rozhoduje celá právna logika cesty,
                  hlavne výsledok v konečnej destinácii.
                </p>
                <p>
                  Typické pásma bývajú <strong>250 €</strong>, <strong>400 €</strong> alebo
                  <strong> 600 €</strong> podľa trasy a okolností.
                </p>
                <p>
                  Pri CDG je obzvlášť dôležité odlíšiť jednoduchý priamy let od cesty cez veľký
                  prestupný hub s partnerom, codeshare alebo ďalšími segmentmi na jednej rezervácii.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu z Paríža CDG?"
            description="ClaimWinger vie rýchlo preveriť, či ide o silný nárok podľa EU261, alebo o citlivejší hubový prípad, kde bude rozhodovať konečná destinácia, jedna rezervácia a skutočný operujúci dopravca."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=paris_cdg_airport_delays"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_paris_cdg_airport_delays_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je pri CDG najdôležitejšie pochopiť
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-rose-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  CDG je veľký hub
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Paríži CDG veľmi často nejde len o jeden bod cesty. Mnohé prípady sa týkajú
                  prestupu a celej nadväznej trasy.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-rose-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Počíta sa konečný cieľ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii je často kľúčové, aký bol výsledok celej cesty v konečnej destinácii,
                  nie len problém na jednom segmente do alebo z CDG.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-rose-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Partneri a codeshare
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri veľkom hube sa často mieša marketingová značka s operujúcim dopravcom. Práve to
                  môže meniť kvalitu a smer posudzovania nároku.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva nárok z CDG najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "let patrí do rozsahu EU261",
                "do konečnej destinácie ste prišli s výrazným meškaním",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "máte rezerváciu, číslo letu a komunikáciu od aerolínky",
                "je jasné, kto bol skutočne operujúcim dopravcom",
                "cesta bola na jednej rezervácii alebo viete presne vysvetliť jej štruktúru",
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
              <Clock className="h-8 w-8 text-rose-600" />
              Typické scenáre na CDG
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Priamy európsky let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj z CDG sa riešia bežné priame lety po Európe. Ak sa na let uplatní EU261 a do
                  cieľa prídete výrazne neskôr, nárok môže byť silný aj pri jednoduchom itinerári.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Prestup cez veľký hub
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri CDG býva časté, že Paríž nie je cieľ, ale len prestupný bod. Vtedy často
                  rozhoduje až výsledok v konečnej destinácii celej rezervácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Air France a partneri
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri CDG má veľký význam správne určiť, či let skutočne operovala Air France alebo
                  partner, a ako bola postavená rezervácia v rámci celej siete.
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
                  Pri kratších letoch, ak sa na konkrétnu trasu uplatní EU261 a sú splnené ďalšie
                  podmienky nároku.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  400 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri stredných trasách, ak dĺžka letu a okolnosti vedú do stredného pásma kompenzácie.
                </p>
              </Card>
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  600 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri dlhých letoch, ak pravidlá na daný itinerár dopadajú a problém v cieli prekročí
                  rozhodujúci prah.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-rose-200 bg-rose-50 p-8 dark:border-rose-800 dark:bg-rose-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri CDG má veľký zmysel rýchlo oddeliť jednoduchý silný prípad od citlivejšej hubovej
                situácie s prestupom, partnerom, codeshare alebo sporným určením operujúceho dopravcu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_paris_cdg_airport_delays_final_cta_delay",
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
                        "sk_paris_cdg_airport_delays_final_cta_cancelled",
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
                  Ak chcete prípad preveriť prakticky podľa konkrétneho itinerára a štruktúry rezervácie.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_paris_cdg_airport_delays_related_home",
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
                  Air France odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak problém na CDG súvisí priamo s Air France ako operujúcim dopravcom.
                </p>
                <Link
                  href="/sk/blog/air-france-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na airline článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Platí odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kľúčové, ak bol Paríž len prestupným bodom a skutočný problém sa prejavil až ďalej.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-pri-prestupe"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o prestupe
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
