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
  "https://problemlot.com/sk/blog/letisko-londyn-luton-ltn-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=luton_airport_delays";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=luton_airport_delays";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=luton_airport_delays";

const faqItems = [
  {
    question: "Mám pri meškaní na letisku Londýn Luton nárok na odškodnenie?",
    answer:
      "Často áno, ale samotné letisko Luton nárok nevytvára. Rozhoduje trasa, právny režim letu, meškanie v konečnej destinácii a to, či dopravca preukáže mimoriadne okolnosti.",
  },
  {
    question: "Platí na LTN EU261 alebo UK261?",
    answer:
      "Závisí od smeru letu a od miesta odletu. Pri lete z EÚ do Lutonu môže byť relevantné EU261, pri odlete zo Spojeného kráľovstva sa často rieši UK261. Samotný kód letiska LTN nestačí.",
  },
  {
    question: "Má pri low-cost lete z Lutonu pasažier slabšie práva?",
    answer:
      "Nie. Nízka cena letenky sama o sebe neznamená slabšie práva. Rozhodujú pravidlá platné pre daný let, nie to, či išlo o low-cost dopravcu.",
  },
  {
    question: "Čo je pri LTN najčastejší problém?",
    answer:
      "Pri Lutone sa často mieša jednoduchý priamy low-cost let s oddelenými rezerváciami, vlastným prestupom alebo nejasnosťou, či sa pozeráme cez EU261 alebo UK261.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoLondynLutonLtnMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Londýn Luton (LTN) meškania: práva pasažiera, odškodnenie a čo rozhoduje"
        description="Meškal vám, zrušili alebo výrazne presunuli let z alebo do letiska Londýn Luton (LTN)? Zistite, kedy vzniká nárok, prečo pri LTN nestačí pozerať len na low-cost značku a ako sa líši EU261 od UK261."
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
              "Letisko Londýn Luton (LTN) meškania: práva pasažiera, odškodnenie a čo rozhoduje",
            description:
              "Praktický sprievodca pre cestujúcich pri meškaní alebo zrušení letu na letisku Londýn Luton vrátane rozdielu medzi EU261 a UK261, low-cost kontextu a úlohy konečnej destinácie.",
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
                name: "Letisko Londýn Luton (LTN) meškania",
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
            <span>Letisko Londýn Luton (LTN) meškania</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Airport content pre Londýn Luton (LTN)
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Londýn Luton (LTN): čo robiť pri meškaní alebo zrušení letu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak riešite problém na <strong>letisku Londýn Luton (LTN)</strong>, nestačí pozerať
              len na samotné letisko ani na to, že ide často o <strong>low-cost</strong> lety.
              Pri nároku rozhoduje právny režim cesty, meškanie v konečnej destinácii, typ rezervácie
              a to, či dopravca vie preukázať mimoriadne okolnosti.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  <strong>Áno, často áno.</strong> Ak váš let z Lutonu meškal alebo bol zrušený,
                  nárok môže vzniknúť. Samotné letisko LTN však nestačí. Rozhoduje smer letu,
                  právny režim, operujúci dopravca a výsledok cesty v cieli.
                </p>
                <p>
                  Typické pásma bývajú <strong>250 €</strong>, <strong>400 €</strong> alebo
                  <strong> 600 €</strong>, prípadne ekvivalent podľa britských pravidiel pri letoch
                  posudzovaných cez UK261.
                </p>
                <p>
                  Pri Lutone je dôležité hlavne to, že veľa cestujúcich rieši krátke low-cost trasy,
                  rodinné cesty alebo vlastné prestupy. Práve tam vznikajú najčastejšie omyly.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu z Lutonu?"
            description="ClaimWinger vie rýchlo preveriť, či ide o silný nárok podľa EU261 alebo UK261, alebo o citlivejší low-cost prípad, kde bude rozhodovať typ rezervácie, smer letu a dôvod narušenia."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=luton_airport_delays"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_luton_airport_delays_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo je pri LTN najdôležitejšie pochopiť
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Low-cost neznamená slabšie práva
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Lutone býva veľa lacných liniek, ale cena letenky sama o sebe nič nemení na tom,
                  či môže vzniknúť nárok.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Počíta sa cieľ cesty
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii je kľúčové meškanie v konečnej destinácii, nie len to, čo ste videli
                  na tabuli na Lutone.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-cyan-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dôležitý je smer letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Lutone býva veľmi dôležité odlíšiť let z EÚ do Spojeného kráľovstva od letu
                  odlietajúceho z UK, pretože sa môže meniť právny režim.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva nárok z Lutonu najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "je jasné, či sa na let pozeráme cez EU261 alebo UK261",
                "do konečnej destinácie ste prišli s výrazným meškaním",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "máte rezerváciu, číslo letu a komunikáciu od aerolínky",
                "viete odlíšiť jednu rezerváciu od oddelených low-cost leteniek",
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
              <Clock className="h-8 w-8 text-cyan-600" />
              Typické scenáre na LTN
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Priamy krátky let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Lutone ide často o krátke európske trasy. Aj pri takomto jednoduchom itinerári
                  môže vzniknúť silný nárok, ak pravidlá dopadajú na váš let a do cieľa prídete neskoro.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rodinná alebo dovolenková cesta
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri LTN často cestujú rodiny a dovolenkári. To nemení pravidlá. Rozhoduje právny rámec
                  letu, nie účel cesty ani to, že išlo o lacnejšiu letenku.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Oddelené rezervácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri Lutone býva častý vlastný prestup alebo kombinácia dvoch samostatných leteniek.
                  Vtedy nestačí vedieť, že ste nestihli ďalší spoj. Kľúčové je, či išlo o jednu cestu
                  na jednej rezervácii alebo o dve oddelené.
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
                  Pri kratších letoch, ak sa na konkrétnu trasu uplatní relevantný režim práv
                  cestujúcich.
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
                  Pri dlhých letoch, ak sa na daný itinerár pravidlá uplatnia a problém v cieli
                  prekročí rozhodujúci prah.
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
                Pri letisku Luton má veľký zmysel rýchlo oddeliť jednoduchý silný prípad od citlivejšej
                situácie s low-cost dopravcom, samostatnými letenkami, vlastným prestupom alebo sporom
                o to, či sa pozeráme cez EU261 alebo UK261.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_luton_airport_delays_final_cta_delay",
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
                        "sk_luton_airport_delays_final_cta_cancelled",
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
                  Ak chcete prípad preveriť prakticky podľa smeru letu, rezervácie a dôvodu narušenia.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_luton_airport_delays_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Platí odškodnenie aj pre low-cost lety?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak si chcete ujasniť, prečo lacná letenka sama o sebe neoslabuje nárok.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-aj-pre-low-cost-lety"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na low-cost článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Bratislava–Londýn meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak porovnávate airport intent s konkrétnou silnou trasou medzi Slovenskom a Londýnom.
                </p>
                <Link
                  href="/sk/blog/bratislava-londyn-meskanie-letu-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na route článok
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
