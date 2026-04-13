import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/kolko-dostanem-za-zruseny-let";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_flight_amount";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_flight_amount";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_flight_amount";

const faqItems = [
  {
    question: "Koľko dostanem za zrušený let?",
    answer:
      "Základná suma býva 250 €, 400 € alebo 600 € podľa dĺžky trasy. Nárok však závisí aj od toho, kedy vás aerolinka informovala o zrušení a akú náhradnú dopravu ponúkla.",
  },
  {
    question: "Dostanem kompenzáciu automaticky pri každom zrušenom lete?",
    answer:
      "Nie. Ak vás aerolinka informovala viac ako 14 dní vopred alebo preukáže mimoriadne okolnosti, peňažná kompenzácia nemusí vzniknúť. Stále však môžete mať právo na refundáciu alebo rerouting.",
  },
  {
    question: "Môžem dostať aj refundáciu, aj kompenzáciu?",
    answer:
      "Áno, v niektorých prípadoch áno. Refundácia rieši cenu letenky, kompenzácia rieši stratu času a nepríjemnosti. Nie je to to isté právo.",
  },
  {
    question: "Kedy môže byť suma znížená o 50 %?",
    answer:
      "Ak aerolinka ponúkne rerouting a do konečnej destinácie dorazíte iba s obmedzeným sklzom, kompenzácia sa môže znížiť o 50 %. Rozhoduje dĺžka trasy a výsledný čas príchodu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KolkoDostanemZaZrusenyLetPage() {
  return (
    <LayoutSk>
      <SEO
        title="Koľko dostanem za zrušený let? 250 €, 400 € alebo 600 €"
        description="Koľko peňazí patrí za zrušený let? Vysvetľujeme sumy 250 €, 400 € a 600 €, pravidlo 14 dní, rerouting, zníženie o 50 % aj rozdiel medzi refundáciou a kompenzáciou."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Koľko dostanem za zrušený let?",
            description:
              "Praktický prehľad súm 250 €, 400 € a 600 € za zrušený let, s vysvetlením pravidla 14 dní, reroutingu a prípadov, keď kompenzácia nevznikne.",
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
                name: "Koľko dostanem za zrušený let?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Koľko dostanem za zrušený let?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              Praktická odpoveď na otázku o sume kompenzácie
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Koľko dostanem za zrušený let?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Základná odpoveď býva 250 €, 400 € alebo 600 €, ale pri zrušenom lete nestačí pozerať
              len na dĺžku trasy. Rozhoduje aj to, kedy vás aerolinka informovala, či ponúkla
              náhradný let a s akým oneskorením ste sa nakoniec dostali do cieľa.
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
            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-rose-700 p-8 text-white shadow-xl dark:border-red-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                <p>
                  Za zrušený let môže patriť <strong>250 €, 400 € alebo 600 €</strong> podľa dĺžky
                  trasy.
                </p>
                <p>
                  Samotné zrušenie však nestačí automaticky. Dôležité je, či vás aerolinka
                  informovala <strong>menej ako 14 dní pred odletom</strong> a či išlo o bežný
                  prevádzkový problém alebo o mimoriadne okolnosti.
                </p>
                <p>
                  Okrem kompenzácie môžete mať aj právo na <strong>refundáciu alebo rerouting</strong>,
                  takže suma za zrušený let nie je jediná vec, ktorú treba riešiť.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Preverte zrušený let cez ClaimWinger Slovensko"
            description="Ak chcete rýchlo zistiť, či sa vo vašom prípade hrá o 250 €, 400 € alebo 600 €, a či vám aerolinka neponúkla rerouting, ktorý mení výsledok, najjednoduchšie je overiť prípad vo formulári pre zrušené lety."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=cancelled_flight_amount"
            ctaLabel="Otvoriť formulár pre zrušený let"
            loadingLabel="Načítava sa formulár pre zrušený let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre zrušené lety."
            placement="sk_blog_cancelled_amount_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Základné sumy pri zrušenom lete
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Do 1 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">250 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typicky kratšie európske trasy, ak sa zrušenie rieši ako kompenzovateľný prípad.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  1 500 až 3 500 km
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">400 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Častá kategória pri stredne dlhých letoch v rámci EÚ aj na niektorých ďalších trasách.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Nad 3 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">600 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najvyššia suma pri dlhých trasách, ak let spadá pod EU261 a nejde o mimoriadne okolnosti.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy kompenzácia za zrušený let vzniká
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Najdôležitejšia hranica je <strong>14 dní pred plánovaným odletom</strong>. Ak vás
                aerolinka informovala skôr, peňažná kompenzácia spravidla nevzniká, aj keď stále
                môžete mať právo na vrátenie ceny letenky alebo na náhradnú dopravu.
              </p>
              <p>
                Ak vás informovali menej ako 14 dní pred odletom, prichádza na rad druhá otázka:
                aký rerouting vám ponúkli. Práve tu sa rozhoduje, či nárok zostáva v plnej výške,
                či sa zníži, alebo vôbec nevznikne.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Viac ako 14 dní vopred
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Peňažná kompenzácia spravidla nevzniká, ale stále sa rieši refundácia alebo
                  náhradný let.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  7 až 14 dní vopred
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nárok môže existovať, ak náhradný let nie je dostatočne podobný pôvodnému plánu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Menej ako 7 dní vopred
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ochrana cestujúceho je ešte silnejšia a aerolinka musí splniť prísnejšie podmienky
                  reroutingu, aby sa kompenzácii vyhla.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy sa suma môže znížiť o 50 %
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Do 1 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">125 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak rerouting dorazí do cieľa len s malým sklzom, kompenzácia sa môže znížiť na polovicu.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  1 500 až 3 500 km
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">200 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri stredne dlhých trasách sa sleduje, s akým oneskorením sa rerouting dostal do cieľa.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Nad 3 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">300 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri diaľkových trasách sa pri vhodnom reroutingu môže plná suma 600 € znížiť na polovicu.
                </p>
              </Card>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Tieto znížené sumy sa viažu na prípady, keď aerolinka ponúkne náhradnú trasu a vy sa
              do cieľa dostanete s obmedzeným sklzom. Nie je to rovnaká logika ako pri bežnom meškaní,
              ktoré rozoberáme aj v článku{" "}
              <Link
                href="/sk/blog/kolko-dostanem-za-3-hodinove-meskanie-letu"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                Koľko dostanem za 3-hodinové meškanie letu
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Refundácia, rerouting a kompenzácia nie sú to isté
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vrátenie ceny letenky. Typicky ho riešite, ak po zrušení nechcete cestovať.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Rerouting
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Náhradný let do cieľa. Jeho kvalita môže rozhodnúť o tom, či kompenzácia ostane plná alebo sa zníži.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Peňažné odškodnenie za nepríjemnosti a stratu času. Toto je suma 250 €, 400 € alebo 600 €.
                </p>
              </Card>
            </div>
            <p className="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Ak riešite rozdiel medzi vrátením peňazí a kompenzáciou detailnejšie, pozrite si aj
              starší pillar{" "}
              <Link
                href="/sk/blog/odwolany-lot-zwrot-czy-odszkodowanie"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                Zrušený let – vrátenie peňazí alebo kompenzácia
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy kompenzácia nevznikne
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Informovanie viac ako 14 dní vopred
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je najčastejší dôvod, prečo sa zrušený let neskončí peňažnou kompenzáciou.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Extrémne počasie, bezpečnostné udalosti alebo riadenie letovej prevádzky môžu nárok
                  vylúčiť, ak to aerolinka naozaj preukáže.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si odložiť k prípadu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "email alebo SMS o zrušení letu",
                "pôvodný itinerár a rezerváciu",
                "detaily náhradného letu, ak bol ponúknutý",
                "čas príletu do konečnej destinácie po reroutingu",
                "potvrdenie o refundácii, ak už prebehla",
                "doklady o hoteli, jedle alebo ďalších výdavkoch",
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
                Chcete vedieť, či vo vašom prípade ide o plnú sumu alebo o zníženú kompenzáciu?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri zrušených letoch je veľa detailov skrytých v tom, kedy prišlo oznámenie a aký
                rerouting vám aerolinka ponúkla. Preto je praktické overiť prípad rovno vo formulári
                pre zrušené lety namiesto ručného výkladu pravidiel.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_cancelled_amount_final_cta_primary",
                        cancelledFlightHref,
                      )
                    }
                  >
                    Overiť zrušený let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_cancelled_amount_final_cta_secondary", claimWingerHomeHref)
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

          <section className="mb-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <p>
              Ak si nie ste istí, či váš prípad patrí skôr pod zrušený let alebo pod výsledné meškanie,
              môžete si pozrieť aj formulár pre{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackClaimClick("sk_cancelled_amount_footer_delayed", delayedFlightHref)
                }
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                meškajúci let v ClaimWingeri
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
