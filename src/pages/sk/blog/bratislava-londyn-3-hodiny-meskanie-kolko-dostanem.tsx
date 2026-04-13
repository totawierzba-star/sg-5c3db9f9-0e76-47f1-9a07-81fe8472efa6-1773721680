import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Euro, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/bratislava-londyn-3-hodiny-meskanie-kolko-dostanem";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bratislava_london_3h_delay";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bratislava_london_3h_delay";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bratislava_london_3h_delay";

const faqItems = [
  {
    question: "Koľko dostanem pri 3-hodinovom meškaní na trase Bratislava – Londýn?",
    answer:
      "Pri bežnom samostatnom lete Bratislava – Londýn býva typická kompenzácia 250 €, ak ste do konečnej destinácie prišli s meškaním aspoň 3 hodiny, let patrí do rozsahu EU261 a aerolínka nepreukáže mimoriadne okolnosti.",
  },
  {
    question: "Počíta sa 3-hodinové meškanie pri odlete alebo pri prílete?",
    answer:
      "Pri kompenzácii sa kľúčovo sleduje meškanie pri príchode do konečnej destinácie, nie len to, o koľko neskôr lietadlo odletelo z Bratislavy.",
  },
  {
    question: "Platí to aj pri lete do Londýna po Brexite?",
    answer:
      "Áno. Pri odlete z Bratislavy ide o let štartujúci z EÚ, takže ochrana EU261 sa na takúto cestu naďalej vzťahuje aj pri lete do Spojeného kráľovstva.",
  },
  {
    question: "Môže aerolínka odmietnuť vyplatiť 250 €?",
    answer:
      "Áno, ak vie preukázať mimoriadne okolnosti alebo ak v skutočnosti nešlo o meškanie 3 hodiny a viac v konečnej destinácii. Nestačí však len všeobecné tvrdenie bez konkrétnych podkladov.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function BratislavaLondyn3HodinyMeskanieKolkoDostanemPage() {
  return (
    <LayoutSk>
      <SEO
        title="Bratislava – Londýn 3 hodiny meškanie: koľko dostanem?"
        description="Meškal vám let z Bratislavy do Londýna o 3 hodiny? Zistite, kedy býva typická kompenzácia 250 €, prečo sa počíta prílet do cieľa a čo môže nárok oslabiť."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bratislava – Londýn 3 hodiny meškanie: koľko dostanem?",
            description:
              "Praktický answer-first sprievodca pre cestujúcich pri 3-hodinovom meškaní letu z Bratislavy do Londýna vrátane typickej výšky nároku a pravidiel EU261.",
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
                name: "Bratislava – Londýn 3 hodiny meškanie",
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
            <span>Bratislava – Londýn 3 hodiny meškanie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              AI-style route answer pre BTS a Londýn
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Bratislava – Londýn 3 hodiny meškanie: koľko dostanem?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri bežnom lete z <strong>Bratislavy do Londýna</strong> býva odpoveď často jednoduchá:
              ak ste do cieľa prišli s meškaním aspoň <strong>3 hodiny</strong>, let je v rozsahu
              <strong> EU261</strong> a aerolínka nepreukáže mimoriadne okolnosti, typická kompenzácia
              býva <strong>250 €</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-blue-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  <strong>Typicky 250 €.</strong> To platí pri bežnom samostatnom lete Bratislava –
                  Londýn, ak ste do konečnej destinácie prišli s meškaním aspoň 3 hodiny.
                </p>
                <p>
                  Dôležité je, že sa pozerá na <strong>prílet do cieľa</strong>, nie len na to, o koľko
                  neskôr lietadlo odletelo.
                </p>
                <p>
                  Nárok môže oslabiť alebo vylúčiť najmä situácia, keď aerolínka preukáže
                  <strong> mimoriadne okolnosti</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Meškal vám let Bratislava – Londýn o 3 hodiny alebo viac?"
            description="ClaimWinger vie rýchlo preveriť, či ide o jasný prípad 250 €, alebo o spornejšiu situáciu, kde bude dôležitý dôvod meškania a sila dokumentov."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bratislava_london_3h_delay"
            ctaLabel="Preveriť nárok za meškajúci let"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie meškajúceho letu."
            placement="sk_blog_bratislava_london_3h_delay_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Euro className="h-8 w-8 text-cyan-600" />
              Prečo práve 250 €
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Typické pásmo tejto trasy
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri bežnom samostatnom lete Bratislava – Londýn ide typicky o trasu v pásme do
                  1 500 km, preto býva pri splnení podmienok výsledná suma 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Počíta sa cieľ, nie len odlet
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak meškanie na tabuli v Bratislave vyzeralo menšie, ale do Londýna ste dorazili
                  3 hodiny a viac po pláne, nárok môže byť stále reálny.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva odpoveď „250 €“ najsilnejšia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "do Londýna ste prišli s meškaním aspoň 3 hodiny",
                "šlo o bežný samostatný let Bratislava – Londýn",
                "máte rezerváciu, boarding pass alebo inú silnú dokumentáciu",
                "aerolínka nevie presvedčivo doložiť mimoriadne okolnosti",
                "na let ste sa dostavili riadne a včas",
                "nejde len o všeobecné tvrdenie o prevádzkových problémoch",
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
              Čo túto prostú odpoveď najčastejšie komplikuje
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nie každé meškanie automaticky znamená 250 €. Ak aerolínka vie preukázať
                  mimoriadne okolnosti, nárok na kompenzáciu nemusí vzniknúť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Konečná destinácia bola ďalej
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak Londýn nebol váš posledný cieľ a išli ste ďalej na jednej rezervácii, pri
                  výške nároku môže rozhodovať až konečná destinácia celej cesty.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zámena odletu a príletu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najčastejší omyl je pozerať len na meškanie odletu. Pri kompenzácii sa však
                  kľúčovo sleduje meškanie pri prílete do konečnej destinácie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo hovoria oficiálne zdroje EÚ
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Oficiálne pravidlá EÚ hovoria, že pri meškaní 3 hodiny a viac v konečnej destinácii
                môže vzniknúť nárok na kompenzáciu, ak nejde o mimoriadne okolnosti. Pri trase
                Bratislava – Londýn je navyše dôležité, že let štartuje z EÚ.
              </p>
              <p>
                Preto je pri tejto trase otázka „koľko dostanem pri 3 hodinách“ často legitímna a
                pri bežnom samostatnom lete vedie typicky práve k sume 250 €.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri tejto trase má veľký zmysel rýchlo oddeliť čistý prípad 250 € od spornejšej
                situácie, kde aerolínka tvrdí mimoriadne okolnosti alebo kde je nejasné, koľko bolo
                skutočné meškanie v cieli.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_bratislava_london_3h_delay_final_cta_delay",
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
                        "sk_bratislava_london_3h_delay_final_cta_cancelled",
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
                  Bratislava – Londýn meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší route guide, nielen odpowiedź na próg 3 hodín.
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
                  Koľko dostanem za 3-hodinové meškanie letu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete porovnať túto trasu s ogólnymi widełkami 250 €, 400 € i 600 €.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-3-hodinove-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na ogólny článok
                </Link>
              </Card>
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
                    trackClaimClick(
                      "sk_bratislava_london_3h_delay_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
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
