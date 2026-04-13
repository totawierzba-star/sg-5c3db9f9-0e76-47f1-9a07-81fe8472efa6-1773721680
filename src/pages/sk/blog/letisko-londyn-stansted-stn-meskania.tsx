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
  "https://problemlot.com/sk/blog/letisko-londyn-stansted-stn-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=stansted_airport_delays";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=stansted_airport_delays";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=stansted_airport_delays";

const faqItems = [
  {
    question: "Mám pri meškaní na letisku Londýn Stansted nárok na odškodnenie?",
    answer:
      "Často áno, ale samotné letisko Stansted nárok nevytvára. Rozhodujúca je trasa, právny režim letu, meškanie v konečnej destinácii a to, či dopravca preukáže mimoriadne okolnosti.",
  },
  {
    question: "Platí na STN EU261 alebo UK261?",
    answer:
      "Závisí od smeru letu a od toho, odkiaľ let odlietal. Pri odlete zo Spojeného kráľovstva sa často rieši UK261, pri lete z EÚ do Stansted sa môže uplatniť EU261. Preto je dôležité nepozerať len na samotný kód letiska STN.",
  },
  {
    question: "Počíta sa pri Stanstede odlet alebo príchod do cieľa?",
    answer:
      "Pri kompenzácii býva kľúčové meškanie v konečnej destinácii, nie len to, o koľko neskôr lietadlo odletelo alebo pristálo na Stanstede.",
  },
  {
    question: "Prečo sú pri STN dôležité samostatné letenky?",
    answer:
      "Stansted je silné low-cost letisko a veľa cestujúcich kombinuje samostatné letenky alebo self-transfer. V takých prípadoch býva postavenie cestujúceho slabšie než pri jednej spoločnej rezervácii.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoLondynStanstedStnMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Londýn Stansted (STN) meškania: práva pasažiera, odškodnenie a čo rozhoduje"
        description="Meškal vám, zrušili alebo výrazne presunuli let z alebo do letiska Londýn Stansted (STN)? Zistite, kedy vzniká nárok, prečo je pri STN dôležitý rozdiel medzi EU261 a UK261 a čo rozhoduje pri low-cost letoch."
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
              "Letisko Londýn Stansted (STN) meškania: práva pasažiera, odškodnenie a čo rozhoduje",
            description:
              "Praktický sprievodca pre cestujúcich pri meškaní alebo zrušení letu na letisku Londýn Stansted vrátane významu rozdielu medzi EU261 a UK261, low-cost špecifík a úlohy konečnej destinácie.",
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
                name: "Letisko Londýn Stansted (STN) meškania",
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
            <span>Letisko Londýn Stansted (STN) meškania</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Airport content pre Londýn Stansted (STN)
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Londýn Stansted (STN): čo robiť pri meškaní alebo zrušení letu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak riešite problém na <strong>letisku Londýn Stansted (STN)</strong>, nestačí pozerať
              len na samotné letisko. Pri nároku býva kľúčové, či sa na vašu cestu pozeráme cez
              <strong> EU261</strong> alebo <strong>UK261</strong>, aké bolo meškanie v konečnej
              destinácii a či ste cestovali na jednej rezervácii alebo cez samostatné letenky.
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
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  <strong>Áno, často áno.</strong> Ak váš let zo Stansted meškal alebo bol zrušený,
                  nárok môže vzniknúť. Samotné letisko STN však nestačí. Rozhoduje smer letu,
                  právny režim, operujúci dopravca a výsledok cesty v cieli.
                </p>
                <p>
                  Typické pásma bývajú <strong>250 €</strong>, <strong>400 €</strong> alebo
                  <strong> 600 €</strong>, prípadne ekvivalent podľa britských pravidiel pri letoch
                  pod UK261.
                </p>
                <p>
                  Pri Stanstede je obzvlášť dôležité odlíšiť jednoduchý priamy low-cost let od
                  cesty so self-transferom alebo so samostatnými letenkami.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu zo Stansted?"
            description="ClaimWinger vie rýchlo preveriť, či ide o silný nárok podľa EU261 alebo UK261, alebo o citlivejší low-cost prípad, kde bude rozhodovať jedna rezervácia, konečná destinácia a skutočný dôvod narušenia letu."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=stansted_airport_delays"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_stansted_airport_delays_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je pri STN najdôležitejšie pochopiť
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-sky-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Brexit mení režim
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Stanstede býva dôležité odlíšiť, či sa prípad posudzuje cez EU261 alebo cez
                  britský režim UK261. Samotný kód STN na to nestačí.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-sky-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Počíta sa výsledok cesty
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii je kľúčové meškanie v konečnej destinácii, nie len zmena času na
                  tabuli odletov alebo príletov na Stanstede.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-sky-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Self-transfer býva slabší
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Stansted je silné low-cost letisko a pri samostatných letenkách býva postavenie
                  cestujúceho často slabšia než pri jednej spoločnej rezervácii.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva nárok zo Stansted najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "je jasné, či sa na let pozeráme cez EU261 alebo UK261",
                "do konečnej destinácie ste prišli s výrazným meškaním",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "máte rezerváciu, číslo letu a komunikáciu od aerolínky",
                "viete odlíšiť jednu rezerváciu od samostatných leteniek",
                "dopravca nevie presvedčivo preukázať mimoriadne okolnosti",
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
              <Clock className="h-8 w-8 text-sky-600" />
              Typické scenáre na STN
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Priamy low-cost let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Stanstede ide často o jednoduchý point-to-point let. Aj tak však môže vzniknúť
                  silný nárok, ak pravidlá siahajú na vašu trasu a do cieľa prídete výrazne neskôr.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Let z EÚ do Stansted
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri lete z členského štátu do Spojeného kráľovstva býva dôležité, že odlet je z EÚ.
                  To môže posilniť postavenie cestujúceho aj pri prílete do Londýna.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Samostatné letenky a self-transfer
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Stanstede sa často miešajú dva oddelené lety. Vtedy nestačí vedieť, že ste
                  zmeškali ďalší spoj. Kľúčové je, či išlo o jednu rezerváciu alebo o dve samostatné
                  cesty.
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
                  Pri kratších letoch, ak sa na konkrétny let uplatní relevantný režim práv
                  cestujúcich a sú splnené ostatné podmienky.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  400 €
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri stredných trasách, ak dĺžka letu a právny rámec vedú do stredného pásma
                  kompenzácie.
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
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-800 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri letisku Stansted má veľký zmysel rýchlo oddeliť jednoduchý silný prípad od
                citlivejšej situácie s low-cost dopravcom, oddelenými letenkami, prestupom mimo
                jednej rezervácie alebo sporom o to, či sa uplatní EU261 alebo UK261.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_stansted_airport_delays_final_cta_delay",
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
                        "sk_stansted_airport_delays_final_cta_cancelled",
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
                  Ak chcete prípad preveriť prakticky podľa konkrétneho smeru letu a rezervácie.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_stansted_airport_delays_related_home",
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
                  Bratislava–Londýn meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak riešite podobný intent pre silnú trasu medzi Slovenskom a Londýnom.
                </p>
                <Link
                  href="/sk/blog/bratislava-londyn-meskanie-letu-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na route článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie pri prestupe?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné najmä vtedy, keď sa problém na STN spája so self-transferom alebo ďalším
                  nadväzným letom.
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
