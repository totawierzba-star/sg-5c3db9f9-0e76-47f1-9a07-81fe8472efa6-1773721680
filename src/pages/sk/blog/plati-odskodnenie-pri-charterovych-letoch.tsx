import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/plati-odskodnenie-pri-charterovych-letoch";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=charter_flights";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=charter_flights";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=charter_flights";

const faqItems = [
  {
    question: "Platí odškodnenie pri charterových letoch?",
    answer:
      "Áno, často áno. Samotný charterový charakter letu nevylučuje práva podľa EU261. Rozhodujúce je skôr to, odkiaľ letel let, kto ho operoval a či išlo o meškanie, zrušenie alebo iný problém, ktorý spadá pod pravidlá EÚ.",
  },
  {
    question: "Mám pri charterovom lete žiadať aerolinku alebo cestovku?",
    answer:
      "Pri kompenzácii podľa EU261 sa typicky rieši operujúca aerolinka. Ak však išlo o balík dovolenky, môžete mať súčasne aj ďalšie práva voči organizátorovi zájazdu podľa pravidiel pre balíky cestovných služieb.",
  },
  {
    question: "Je charter automaticky mimo EU261?",
    answer:
      "Nie. Charterový let nie je automaticky mimo EU261. Ak let spĺňa územné a vecné podmienky nariadenia, práva pasažiera sa môžu uplatniť rovnako ako pri pravidelnej linke.",
  },
  {
    question: "Dostanem pri charteri rovnaké sumy 250 €, 400 € a 600 €?",
    answer:
      "Ak nárok vznikne podľa EU261, sumy sa zvyčajne počítajú rovnako podľa vzdialenosti a typu prípadu. Charter sám o sebe nemení základnú logiku výpočtu kompenzácie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PlatiOdskodneniePriCharterovychLetochPage() {
  return (
    <LayoutSk>
      <SEO
        title="Platí odškodnenie pri charterových letoch? Áno, charter sám o sebe nárok neruší"
        description="Platí kompenzácia aj pri charterových letoch a dovolenkových balíkoch? Vysvetľujeme, kedy sa uplatní EU261, kedy riešiť aerolinku a kedy má význam aj cestovná kancelária."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Platí odškodnenie pri charterových letoch?",
            description:
              "Praktické vysvetlenie, kedy sa EU261 vzťahuje aj na charterové lety a ako sa pri balíku dovolenky rozlišuje aerolinka a organizátor zájazdu.",
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
                name: "Platí odškodnenie pri charterových letoch?",
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
            <span>Platí odškodnenie pri charterových letoch?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Praktická odpoveď pre dovolenkové a charterové lety
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Platí odškodnenie pri charterových letoch?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď je: <strong>áno, často áno</strong>. Samotný fakt, že let bol
              charterový alebo súčasťou dovolenky, ešte neznamená, že práva z EU261 miznú. Treba však
              presne rozlíšiť, čo riešite voči <strong>aerolinke</strong> a čo prípadne voči
              <strong> organizátorovi zájazdu</strong>.
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
                  <strong>Charter sám o sebe nárok neruší.</strong>
                </p>
                <p>
                  Ak let spĺňa podmienky EU261, práva pasažiera môžu platiť rovnako ako pri bežnej linke.
                </p>
                <p>
                  Ak išlo o balík dovolenky, okrem práv voči aerolinke môžu existovať aj ďalšie práva
                  voči organizátorovi zájazdu podľa pravidiel pre balíky cestovných služieb.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Charterový alebo dovolenkový let a neviete, koho riešiť?"
            description="ClaimWinger vie pomôcť rozlíšiť, či vo vašom prípade ide o nárok podľa EU261 voči aerolinke, alebo či treba samostatne pozerať aj na práva z balíka dovolenky."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=charter_flights"
            ctaLabel="Preveriť charterový let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_charter_flights_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy sa EU261 vzťahuje aj na charter
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "let odlieta z EÚ bez ohľadu na to, či ide o EU alebo non-EU aerolinku",
                "let prichádza do EÚ z krajiny mimo EÚ a operuje ho EU aerolinka",
                "ide o meškanie, zrušenie, odmietnutie nástupu na palubu alebo iný problém krytý EU261",
                "nejde o situáciu, kde práva vylučujú mimoriadne okolnosti alebo iný jasný limit nároku",
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
              Aerolinka vs cestovná kancelária: kto rieši čo
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Aerolinka
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri kompenzácii podľa EU261 sa typicky rieši operujúci dopravca. To je dôležité
                  najmä pri meškaní, zrušení alebo odmietnutí nástupu na palubu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Organizátor zájazdu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste kupovali balík dovolenky, môžete mať popri tom aj ďalšie spotrebiteľské práva
                  voči organizátorovi zájazdu podľa pravidiel pre balíky cestovných služieb.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo býva pri charteri najčastejšie mätúce
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  „Je to dovolenkový let, takže pravidlá asi neplatia“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je častý omyl. EU261 nefunguje podľa toho, či let pôsobí „dovolenkovo“, ale podľa
                  trasy, operujúceho dopravcu a typu problému.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  „Všetko musí riešiť cestovka“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie vždy. Pri samotnej kompenzácii za let sa veľmi často rieši aerolinka, aj keď bol
                  let súčasťou balíka dovolenky.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  „Charter znamená nižšiu kompenzáciu“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak nárok vznikne podľa EU261, základná logika súm ostáva rovnaká. Charter sám o sebe
                  nemení schému 250 €, 400 € a 600 €.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktický checklist pri charterovom lete
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "odkiaľ let odlietal a kam smeroval",
                "kto bol operujúci dopravca",
                "či išlo o meškanie, zrušenie alebo iný problém",
                "či bol let súčasťou balíka dovolenky",
                "aké dokumenty máte od cestovky a aké priamo od aerolinky",
                "či popri kompenzácii neriešite aj ďalšiu škodu z balíka",
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
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Neviete, či reklamovať aerolinku, cestovku alebo oboch?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Najpraktickejšie je najprv odlíšiť, či riešite čisto kompenzáciu podľa EU261 za let,
                alebo aj širší problém z balíka dovolenky. To často rozhodne, kam smerovať prvý krok.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_charter_flights_final_cta_delay", delayedFlightHref)
                    }
                  >
                    Riešim meškajúci let
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
                        "sk_charter_flights_final_cta_cancelled",
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
                  Smartwings – meškanie dovolenkového letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak riešite konkrétneho dovolenkového dopravcu a praktický scenár z letnej sezóny.
                </p>
                <Link
                  href="/sk/blog/smartwings-meskanie-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na Smartwings článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete prakticky preveriť, či charterový let vytvára reálny nárok podľa EU261.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_charter_flights_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak váš charterový let bol zrušený, tu je logika možných súm kompenzácie.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o sume kompenzácie
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
