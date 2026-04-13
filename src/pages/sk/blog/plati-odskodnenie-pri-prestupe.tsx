import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/plati-odskodnenie-pri-prestupe";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=connection_flights";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=connection_flights";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=connection_flights";

const faqItems = [
  {
    question: "Platí odškodnenie pri prestupe?",
    answer:
      "Často áno, ale zvyčajne len vtedy, ak sú lety v jednej rezervácii a problém spôsobil meškanie alebo zrušenie, ktoré vás dostalo do konečnej destinácie s veľkým sklzom.",
  },
  {
    question: "Počíta sa meškanie prvého segmentu alebo prílet do konečnej destinácie?",
    answer:
      "Pri prestupných cestách je kľúčový prílet do konečnej destinácie. Aj menšie meškanie na prvom segmente môže viesť k veľkému meškaniu na konci celej cesty.",
  },
  {
    question: "Platí kompenzácia aj pri dvoch samostatných letenkách?",
    answer:
      "Zvyčajne nie ako klasický nárok za zmeškaný prestup voči aerolinke. Pri dvoch oddelených rezerváciách si aerolinky spravidla nenesú zodpovednosť za to, že ste nestihli ďalší samostatne kúpený let.",
  },
  {
    question: "Stačí, že som na prestupe meškal, alebo musím zmeškať ďalší let?",
    answer:
      "Rozhoduje dopad na konečný cieľ. Niekedy prestup síce nestihnete a musíte ísť ďalším letom, inokedy spoj ešte stihnete. Pre kompenzáciu je podstatné, o koľko neskôr sa dostanete do finálnej destinácie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PlatiOdskodneniePriPrestupePage() {
  return (
    <LayoutSk>
      <SEO
        title="Platí odškodnenie pri prestupe? Áno, ak ide o jednu rezerváciu a mešká konečný prílet"
        description="Platí kompenzácia aj pri prestupných letoch? Vysvetľujeme, kedy sa počíta konečný cieľ, prečo je dôležitá jedna rezervácia a prečo dve samostatné letenky menia celý prípad."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Platí odškodnenie pri prestupe?",
            description:
              "Praktické vysvetlenie, kedy pri prestupných letoch vzniká nárok na kompenzáciu a prečo sú rozhodujúce jedna rezervácia a meškanie do konečnej destinácie.",
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
                name: "Platí odškodnenie pri prestupe?",
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
            <span>Platí odškodnenie pri prestupe?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
              Praktická odpoveď na otázku o prestupných letoch
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Platí odškodnenie pri prestupe?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Áno, veľmi často áno, ale len za určitých podmienok. Pri prestupných cestách je
              rozhodujúce najmä to, či ide o jednu rezerváciu a o koľko neskôr dorazíte do
              konečnej destinácie. Samotný stres na letisku ešte automaticky neznamená nárok.
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
            <Card className="border-violet-200 bg-gradient-to-br from-violet-600 to-indigo-700 p-8 text-white shadow-xl dark:border-violet-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-violet-50">
                <p>
                  <strong>Áno, odškodnenie pri prestupe môže platiť.</strong>
                </p>
                <p>
                  Najčastejší scenár je ten, keď máte všetky segmenty v <strong>jednej rezervácii</strong>
                  a problém na prvom alebo prostrednom lete spôsobí, že do konečnej destinácie dorazíte
                  s veľkým meškaním.
                </p>
                <p>
                  Pri dvoch samostatných letenkách býva situácia spravidla výrazne slabšia, lebo
                  aerolinka zvyčajne nezodpovedá za to, že ste nestihli ďalší samostatne kúpený let.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Prestupná cesta sa pokazila? Overte si nárok cez ClaimWinger Slovensko"
            description="Ak neviete, či sa pri vašej ceste počíta meškanie prvého segmentu alebo výsledný prílet do finálnej destinácie, najrýchlejšie je preveriť celú trasu v slovenskom formulári ClaimWinger."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=connection_flights"
            ctaLabel="Preveriť prestupný let"
            loadingLabel="Načítava sa formulár pre prestupný prípad..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger na preverenie prestupnej cesty."
            placement="sk_blog_connection_flights_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy prestupná cesta patrí do rámca kompenzácie
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Jedna rezervácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto je zvyčajne najdôležitejšie pravidlo. Ak sú všetky segmenty na jednom PNR alebo
                  v jednom booking flow, cesta sa často posudzuje ako jeden celok.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Meškanie do konečnej destinácie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri prestupných letoch sa typicky nepozerá len na prvý segment, ale na to, o koľko
                  neskôr ste dorazili úplne na koniec celej cesty.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Rozsah EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Stále platí, že trasa a operujúci dopravca musia spadať pod ochranu EÚ. Prestup sám
                  o sebe nič negarantuje.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Žiadne mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak problém spôsobili skutočne mimoriadne okolnosti, nárok na peniaze môže odpadnúť,
                  aj keď prestup objektívne nevyšiel.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Jedna rezervácia vs. dve samostatné letenky
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-green-200 p-6 dark:border-green-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Jedna rezervácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu je šanca na klasický claim za prestupný problém najvyššia. Aerolinka alebo skupina
                  dopravcov vám predala cestu ako jeden celok.
                </p>
              </Card>
              <Card className="border-red-200 p-6 dark:border-red-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Dve samostatné letenky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri tzv. self-transferoch alebo osobitne kúpených letoch býva situácia výrazne
                  horšia. Meškanie prvého letu samo osebe zvyčajne nevytvára zodpovednosť za druhý,
                  samostatne kúpený segment.
                </p>
              </Card>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Ak riešite práve zmeškaný prestup po meškaní prvého letu, máme k tomu aj detailnejší
              článok{" "}
              <Link
                href="/sk/blog/zmeskany-prestup-kompenzacia"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                Zmeškaný prestup – kedy máte nárok na kompenzáciu
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo sa pri prestupe počíta najviac
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Nie meškanie prvého letu, ale dopad na finálny cieľ
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prvý segment môže meškať aj „len trochu“, ale ak kvôli tomu nestihnete ďalší let a
                  konečný prílet sa výrazne posunie, práve to je podstatné.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Konečná destinácia na letenke
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V prestupných prípadoch býva dôležité, kam ste mali doraziť podľa celej rezervácie,
                  nie len kde končil prvý problémový segment.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Či ste boli reroutovaní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka ponúkne náhradné spojenie, môže to zmeniť výsledné meškanie v cieli a
                  tým aj silu celého nároku.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické scenáre
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Jedna rezervácia, prvý let mešká, druhý nestihnete
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto je najtypickejší prestupný claim. Ak vás výsledok dostane do konečnej destinácie
                  s veľkým meškaním, prípad býva najsilnejší.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Jedna rezervácia, druhý let zrušený
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj to môže byť prestupný problém pod EU261, ak celá cesta spĺňa rozsah nariadenia a
                  výsledný prílet do cieľa sa výrazne posunie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dve letenky, prvý let mešká a druhý odletí bez vás
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu býva claim za samotný druhý, zmeškaný segment oveľa slabší. Prvý problémový let sa
                  môže riešiť samostatne, ale druhá letenka zostáva často mimo zodpovednosti aerolinky.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si pripraviť k prestupnému prípadu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "rezerváciu s celou trasou a všetkými segmentmi",
                "PNR alebo booking confirmation",
                "boarding passy alebo potvrdenia check-inu",
                "správy od aerolinky o meškaní, zrušení alebo reroutingu",
                "čas skutočného príletu do konečnej destinácie",
                "doklady o hoteli, jedle alebo ďalších nákladoch počas čakania",
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
                Nevieťe, či sa váš prestup posudzuje ako jeden celý prípad?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                To je presne bod, na ktorom sa väčšina ľudí zasekne. Ak neviete, či sa počíta finálny
                cieľ, či ide o jednu rezerváciu alebo či je problém ešte pod EU261, oplatí sa to
                preveriť na konkrétnych údajoch z letenky.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_connection_flights_final_cta_primary", delayedFlightHref)
                    }
                  >
                    Preveriť prestupný let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_connection_flights_final_cta_secondary", claimWingerHomeHref)
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
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmeškaný prestup
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vám už reálne ušiel nadväzujúci let, detailnejší rozpis scenárov máme v samostatnom článku.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na detailný článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Prestup a zrušený segment
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak problémom nebolo meškanie, ale zrušený let uprostred cesty, môžete ísť aj rovno
                  na flow pre zrušené lety.
                </p>
                <a
                  href={cancelledFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_connection_flights_related_cancelled", cancelledFlightHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Preveriť zrušený let v ClaimWingeri
                </a>
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
