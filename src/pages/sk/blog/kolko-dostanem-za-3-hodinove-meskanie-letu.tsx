import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/kolko-dostanem-za-3-hodinove-meskanie-letu";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=three_hour_delay_amount";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=three_hour_delay_amount";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=three_hour_delay_amount";

const faqItems = [
  {
    question: "Koľko dostanem za 3-hodinové meškanie letu?",
    answer:
      "Najčastejšie ide o 250 €, 400 € alebo 600 € podľa dĺžky trasy. Rozhodujúce je, o koľko neskôr ste dorazili do konečnej destinácie a či let spadá pod EU261.",
  },
  {
    question: "Počíta sa 3-hodinové meškanie pri odlete alebo pri prílete?",
    answer:
      "Pri odškodnení sa pozerá na meškanie pri prílete do konečnej destinácie. Meškanie pri odlete samo o sebe nestačí, ak lietadlo čas dobehne počas cesty.",
  },
  {
    question: "Prečo niekedy ľudia hovoria o sume 125 €, 200 € alebo 300 €?",
    answer:
      "Tieto znížené sumy sa typicky spájajú s reroutingom po zrušení letu alebo po odmietnutí nástupu na palubu. Pri bežnom oneskorení pri prílete 3 a viac hodín sa spravidla rieši plná suma 250 €, 400 € alebo 600 €.",
  },
  {
    question: "Platí to aj pre low-cost lety?",
    answer:
      "Áno. Nariadenie EU261 sa vzťahuje aj na low-cost aerolinky, ak je splnený rozsah nariadenia. Cena letenky ani typ aerolinky výšku odškodnenia nemenia.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KolkoDostanemZaTriHodinoveMeskanieLetuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Koľko dostanem za 3-hodinové meškanie letu? 250 €, 400 € alebo 600 €"
        description="Koľko peňazí patrí za 3-hodinové meškanie letu? Vysvetľujeme sumy 250 €, 400 € a 600 €, pravidlo príletu do konečnej destinácie a rozdiel medzi meškaním a reroutingom."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Koľko dostanem za 3-hodinové meškanie letu?",
            description:
              "Praktické vysvetlenie, koľko môžete dostať za 3-hodinové meškanie letu podľa dĺžky trasy a prečo sa pri nároku sleduje prílet do konečnej destinácie.",
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
                name: "Koľko dostanem za 3-hodinové meškanie letu?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Koľko dostanem za 3-hodinové meškanie letu?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Rýchla odpoveď na vysokointentovú otázku
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Koľko dostanem za 3-hodinové meškanie letu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najčastejšia odpoveď znie 250 €, 400 € alebo 600 €, ale rozhoduje dĺžka trasy,
              rozsah EU261 a najmä meškanie pri prílete do konečnej destinácie. Nie každé
              „3-hodinové meškanie“ sa počíta rovnako.
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
            <Card className="border-emerald-200 bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl dark:border-emerald-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-emerald-50">
                <p>
                  Pri 3-hodinovom meškaní pri prílete do konečnej destinácie môžete najčastejšie
                  dostať <strong>250 €, 400 € alebo 600 €</strong>.
                </p>
                <p>
                  Suma nezávisí od ceny letenky, ale od <strong>dĺžky trasy</strong> a od toho, či
                  let skutočne spadá pod <strong>EU261</strong>.
                </p>
                <p>
                  Ak sa bavíme o bežnom meškaní, nie o reroutingu po zrušení letu, spravidla sa
                  riešia plné sumy, nie znížených 125 €, 200 € alebo 300 €.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Overte si konkrétnu sumu cez ClaimWinger Slovensko"
            description="Ak chcete vedieť, či sa vo vašom prípade hrá o 250 €, 400 € alebo 600 €, najrýchlejšie je preveriť let v slovenskom formulári ClaimWinger pre meškajúce lety."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=three_hour_delay_amount"
            ctaLabel="Preveriť výšku odškodnenia"
            loadingLabel="Načítava sa formulár pre preverenie sumy..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre meškajúci let."
            placement="sk_blog_three_hour_amount_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Koľko peňazí patrí pri 3-hodinovom meškaní
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Do 1 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">250 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typicky kratšie lety v Európe, ak ste do konečnej destinácie dorazili o 3 a viac
                  hodín neskôr.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  1 500 až 3 500 km
                </p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">400 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Veľmi častá kategória pri stredne dlhých trasách a mnohých letoch v rámci EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Nad 3 500 km</p>
                <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">600 €</p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najvyššia suma pri dlhších letoch, ak prípad spadá pod EU261 a nešlo o mimoriadne
                  okolnosti.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo sa niekedy hovorí o iných sumách
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Pri tejto otázke sa často miešajú dve rôzne situácie. Jedna vec je bežné
                <strong> meškanie pri prílete o 3 a viac hodín</strong>. Druhá vec je
                <strong> rerouting po zrušení letu alebo po odmietnutí nástupu na palubu</strong>.
              </p>
              <p>
                Práve pri reroutingu sa objavujú znížené sumy 125 €, 200 € alebo 300 €, ak sa
                náhradný let dostane do cieľa v určitom limite. To však nie je to isté ako
                štandardné posudzovanie meškajúceho letu.
              </p>
              <p>
                Ak teda riešite obyčajné 3-hodinové meškanie a nie ste v scenári náhradnej trasy po
                zrušení, otázka zvyčajne znie: spadá let pod EU261, aká je vzdialenosť trasy a čo
                bolo skutočnou príčinou meškania.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <Card className="border-emerald-200 p-6 dark:border-emerald-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Bežné meškanie letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejšie sa pozerá na plné sumy 250 €, 400 € alebo 600 € a na meškanie pri
                  prílete do konečnej destinácie.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Rerouting po zrušení letu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu sa môžu objaviť znížené sumy, ak aerolinka ponúkla náhradný let a do cieľa ste
                  dorazili s menším sklzom. To už je bližšie téme{" "}
                  <Link
                    href="/sk/blog/odwolany-lot-zwrot-czy-odskodowanie"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    zrušený let – refundácia alebo kompenzácia
                  </Link>
                  .
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo musí byť splnené, aby 3 hodiny reálne znamenali nárok
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Počíta sa prílet, nie iba odlet
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste odlietali so sklzom, ale aerolinka čas dobehla a došli ste skôr, nárok sa
                  môže rozpadnúť. Viac rozoberáme v článku{" "}
                  <Link
                    href="/sk/blog/kolko-hodin-meskania-je-potrebnych-na-odskodnenie"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Koľko hodín meškania je potrebných na odškodnenie
                  </Link>
                  .
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Let musí spadať pod EU261
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pravidlá sa typicky týkajú letov z EÚ alebo letov do EÚ prevádzkovaných aerolinkou
                  z EÚ. Práve toto si viete rýchlo overiť aj cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_three_hour_amount_inline_home", claimWingerHomeHref)}
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  .
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Nesmie ísť o mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Extrémne počasie, uzavretie vzdušného priestoru alebo bezpečnostný incident môžu
                  nárok vylúčiť. Technický problém či rotácia lietadla sú však iná debata.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Dôležitá je konečná destinácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri prestupoch sa často nepozerá iba na prvý segment, ale na to, o koľko neskôr
                  ste prišli úplne na koniec cesty. To je zásadné najmä pri jednej rezervácii.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Doklady, ktoré si nechajte
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "palubný lístok alebo potvrdenie rezervácie",
                "číslo letu, dátum a trasu",
                "správy od aerolinky o meškaní alebo presune letu",
                "čas skutočného príletu do konečnej destinácie",
                "potvrdenia o občerstvení, hoteli alebo ďalších nákladoch",
                "screeny aplikácie aerolinky alebo letiskovej tabule",
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
                Chcete si overiť, či ide vo vašom prípade o 250 €, 400 € alebo 600 €?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak nechcete ručne počítať vzdialenosť, overovať rozsah EU261 a riešiť, či ide o
                obyčajné meškanie alebo o následok zrušeného letu, najrýchlejšie je vložiť údaje do
                formulára ClaimWinger.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_three_hour_amount_final_cta_primary", delayedFlightHref)
                    }
                  >
                    Overiť výšku odškodnenia
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
                        "sk_three_hour_amount_final_cta_secondary",
                        cancelledFlightHref,
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
