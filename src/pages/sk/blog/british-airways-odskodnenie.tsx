import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/british-airways-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=british_airways_compensation";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=british_airways_compensation";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=british_airways_compensation";

const faqItems = [
  {
    question: "Mám pri lete British Airways nárok na odškodnenie?",
    answer:
      "Často áno, ale pri British Airways je najprv dôležité určiť, či sa na váš let uplatní EU261 alebo UK261. Pri letoch z EÚ býva často relevantné EU261. Pri letoch z UK a pri časti ďalších trás British Airways býva relevantné UK261.",
  },
  {
    question: "Koľko môžem dostať od British Airways?",
    answer:
      "Pri letoch v rozsahu EU261 bývajú typické pásma 250 €, 400 € alebo 600 € podľa trasy a okolností. Pri letoch v rozsahu UK261 sa pracuje s pevnými sumami v britských librách podľa pravidiel UK.",
  },
  {
    question: "Je po Brexite ešte dôležité EU261?",
    answer:
      "Áno. Ak let British Airways odlieta z letiska v EÚ, EU261 býva naďalej veľmi dôležité. Brexit skôr znamená, že pri iných trasách môže namiesto EU261 nastúpiť UK261.",
  },
  {
    question: "Počíta sa meškanie pri odlete alebo pri prílete?",
    answer:
      "Pri kompenzácii je kľúčové hlavne meškanie pri príchode do konečnej destinácie, nie len samotné meškanie odletu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function BritishAirwaysOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="British Airways odškodnenie: EU261, UK261 a kedy vzniká nárok"
        description="Meškal vám, zrušili alebo výrazne presunuli let British Airways? Zistite, kedy vzniká nárok, kedy rozhoduje EU261, kedy UK261 a čo pri BA skutočne treba odlíšiť."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "British Airways odškodnenie: EU261, UK261 a kedy vzniká nárok",
            description:
              "Praktický sprievodca pre cestujúcich pri problémoch s letom British Airways vrátane rozdielu medzi EU261 a UK261, výšky nároku a najčastejších komplikácií.",
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
                name: "British Airways odškodnenie",
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
            <span>British Airways odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Airline content pre British Airways
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              British Airways odškodnenie: kedy vzniká nárok?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak ste leteli s <strong>British Airways</strong> a nastal problém, odpoveď môže byť
              priaznivá, ale pri tejto aerolinke treba presne rozlíšiť, či váš let patrí pod
              <strong> EU261</strong> alebo pod <strong>UK261</strong>. Práve to pri BA často
              rozhoduje skôr než samotná značka aerolinky.
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
            <Card className="border-blue-200 bg-gradient-to-br from-blue-700 to-indigo-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>
                  <strong>Áno, často áno.</strong> Pri British Airways však nie je hlavná otázka len
                  to, či let meškal alebo bol zrušený. Kľúčové je aj to, či sa na let uplatní
                  <strong> EU261</strong> alebo <strong>UK261</strong>.
                </p>
                <p>
                  Pri letoch v rozsahu EU261 býva typická kompenzácia <strong>250 €</strong>,
                  <strong> 400 €</strong> alebo <strong>600 €</strong>. Pri letoch v rozsahu UK261
                  sa pracuje s pevnými sumami v <strong>GBP</strong> podľa britských pravidiel.
                </p>
                <p>
                  Pri BA býva dôležité najmä miesto odletu, miesto príletu, operujúci dopravca,
                  konečná destinácia a to, či ide o jeden itinerár alebo komplikovanejší prestup.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Riešite meškanie alebo zrušenie letu British Airways?"
            description="ClaimWinger vie rýchlo preveriť, či je váš prípad skôr pod EU261 alebo UK261 a či ide o silný nárok, alebo o trasu, kde treba presne určiť operujúceho dopravcu, konečnú destináciu a partnerov."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=british_airways_compensation"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie nároku."
            placement="sk_blog_british_airways_compensation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Pri British Airways je kľúčové rozlíšiť EU261 a UK261
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety z EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak British Airways odlieta z letiska v EÚ, veľmi často bude rozhodovať EU261,
                  aj keď BA už nie je dopravca z EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety z UK
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri letoch odlietajúcich z Veľkej Británie býva často relevantné UK261, teda
                  britská verzia pravidiel po Brexite.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Lety späť do EÚ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri niektorých letoch British Airways z tretích krajín do EÚ môže byť dôležité,
                  že ide o UK dopravcu a že sa na trasu môže pozerať skôr cez UK261 než cez EU261.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-blue-600" />
              Koľko môžete dostať
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-blue-200 p-6 dark:border-blue-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak sa uplatní EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšie sa pracuje s pásmami <strong>250 €</strong>, <strong>400 €</strong>
                  a <strong>600 €</strong> podľa vzdialenosti a okolností.
                </p>
              </Card>
              <Card className="border-indigo-200 p-6 dark:border-indigo-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak sa uplatní UK261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V britskom režime sa používajú pevné sumy v librách. Pri krátkych trasách ide často o
                  <strong> £220</strong>, pri stredných trasách o <strong>£350</strong> a pri silných
                  diaľkových prípadoch môže ísť až o <strong>£520</strong>.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva nárok najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "do konečnej destinácie ste prišli s meškaním aspoň 3 hodiny",
                "alebo bol let zrušený za podmienok, ktoré zakladajú nárok",
                "viete doložiť rezerváciu, číslo letu a komunikáciu od British Airways",
                "BA nevie presvedčivo preukázať mimoriadne okolnosti",
                "je jasné, či sa na trasu pozeráme cez EU261 alebo UK261",
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
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo pri British Airways najčastejšie komplikuje posúdenie
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Heathrow a prestupy
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  British Airways veľmi často funguje v itinerároch cez Heathrow. V takom prípade
                  môže byť rozhodujúca až konečná destinácia celej rezervácie, nie len samotný
                  prílet do Londýna.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  EU261 verzus UK261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri BA je to častejšie praktický problém než pri aerolinkách z EÚ. Zlé zaradenie
                  právneho režimu vie oslabiť už úvodnú reklamáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Operating carrier a partneri
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie každý let predaný pod značkou British Airways operuje priamo BA. Pri codeshare
                  a partneroch môže byť dôležité presne určiť, kto bol skutočný operujúci dopravca.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo hovoria oficiálne zdroje
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Oficiálne zdroje EÚ naďalej potvrdzujú, že pri relevantnom meškaní, zrušení alebo
                odmietnutí nástupu na palubu môže vzniknúť nárok podľa EU261.
              </p>
              <p>
                Pri British Airways však treba navyše pracovať aj s britským režimom UK261. Práve
                preto je pri BA dôležité správne zaradiť trasu ešte pred tým, než sa začne riešiť
                samotná výška nároku.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri British Airways dáva veľký zmysel rýchlo oddeliť jednoduchý prípad od situácie,
                kde treba čítať EU261, UK261, Heathrow prestup alebo určiť operujúceho dopravcu.
                ClaimWinger vám pomôže zorientovať sa skôr, než sa reklamácia zbytočne pokazí.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_british_airways_compensation_final_cta_delay",
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
                        "sk_british_airways_compensation_final_cta_cancelled",
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
                  Ak chcete prípad preveriť prakticky podľa konkrétnej trasy a typu narušenia.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_british_airways_compensation_related_home",
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
                  Bratislava – Londýn meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak riešite konkrétny route intent medzi Slovenskom a Londýnom.
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
                  Užitočné, ak sa problém pri BA prejavil až na ďalšom úseku itinerára.
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
