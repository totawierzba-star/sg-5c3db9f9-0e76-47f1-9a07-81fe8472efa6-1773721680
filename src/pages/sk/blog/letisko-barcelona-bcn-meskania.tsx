import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-barcelona-bcn-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bcn_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bcn_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=bcn_airport";

const faqItems = [
  {
    question: "Mám pri meškaní na letisku Barcelona (BCN) nárok na odškodnenie?",
    answer:
      "Áno, ak let spadá pod EU261 a meškanie pri prílete je 3+ hodín. BCN je druhé najväčšie letisko v Španielsku a hlavný hub Vueling aj domov Ryanair base.",
  },
  {
    question: "Koľko dostanem za meškanie pri lete z BCN?",
    answer:
      "250 € pri krátkych trasách do 1 500 km (BCN – Viedeň), 400 € pri letoch 1 500 – 3 500 km mimo EÚ alebo v EÚ nad 1 500 km, 600 € pri transatlantike (napr. BCN – New York s United).",
  },
  {
    question: "Akí dopravcovia lietajú z BCN?",
    answer:
      "Vueling (hub), Ryanair, Wizz Air, Iberia, easyJet, Lufthansa, Air France, KLM, Turkish Airlines. Pre slovenských cestujúcich je najčastejšia kombinácia Vueling alebo Wizz Air z Viedne/Budapešti.",
  },
  {
    question: "Časté dôvody meškania v Barcelone?",
    answer:
      "Štrajky pozemného personálu (najmä v lete), preťažená vzdušná doprava cez Pyreneje, búrky nad Stredozemným morom. Všetky sú obhajuje case-by-case – žiadajte dôkazy.",
  },
  {
    question: "Čo robiť pri zmeškanom prestupe v BCN?",
    answer:
      "Ak prvý let meškal a zmeškali ste nadväzujúci, rozhodujúce je meškanie v konečnej destinácii. Aerolinka musí zabezpečiť presmerovanie a v prípade potreby ubytovanie a stravu (right to care).",
  },
  {
    question: "Máte špeciálne pravidlá pri El Prat T1 vs T2?",
    answer:
      "BCN má dva terminály: T1 (hlavné linky vrátane Vueling, SkyTeam, Star Alliance long-haul) a T2 (low-cost, OneWorld short-haul). Pravidlá reklamácie sú rovnaké – záleží na aerolinke, nie na termináli.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoBarcelonaBcnMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Barcelona (BCN) meškania: nárok na odškodnenie EU261"
        description="Meškal alebo zrušili let na letisku Barcelona El Prat? Prehľad nárokov podľa EU261, typických dopravcov a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Barcelona (BCN) meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na letisku Barcelona El Prat.",
            mainEntityOfPage: articleUrl,
            datePublished: "2026-04-24",
            dateModified: "2026-04-24",
            author: { "@type": "Organization", name: "problemlot.com" },
            publisher: {
              "@type": "Organization",
              name: "problemlot.com",
              logo: { "@type": "ImageObject", url: "https://problemlot.com/og-image.png" },
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
              acceptedAnswer: { "@type": "Answer", text: item.answer },
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
              { "@type": "ListItem", position: 1, name: "Domov", item: "https://problemlot.com/sk" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://problemlot.com/sk/blog" },
              { "@type": "ListItem", position: 3, name: "Letisko Barcelona BCN", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Barcelona (BCN)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              Letisko · BCN · Barcelona El Prat
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Barcelona (BCN): meškania a odškodnenie EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Barcelona El Prat (IATA <strong>BCN</strong>) je druhé najväčšie letisko v Španielsku
              a hub aerolínie <strong>Vueling</strong>. Pre slovenských cestujúcich ide zvyčajne o
              priame lety z Viedne (Vueling, easyJet) alebo z Bratislavy (Wizz Air, Ryanair). Meškania
              a zrušenia bývajú časté najmä v letnej sezóne. Preverte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_bcn_intro", delayedFlightHref)}
              >
                ClaimWinger Slovensko
              </a>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 24. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-orange-200 bg-gradient-to-br from-orange-600 to-red-700 p-8 text-white shadow-xl dark:border-orange-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-orange-50">
                <p>
                  Barcelona = hlavný mediteránny hub. Pri odlete z BCN platí plne EU261 bez ohľadu na
                  aerolinku. Pri prílete do BCN platí EU261 len ak let operuje EÚ aerolinka.
                </p>
                <p>
                  Sumy: <strong>250 / 400 / 600 €</strong> podľa vzdialenosti.
                </p>
                <p>
                  Vueling je najčastejším dopravcom v BCN – pri zrušeniach pred sezónou je dôležité
                  sledovať termín oznámenia.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Vueling alebo iná aerolinka v BCN vám kazí let?"
            description="ClaimWinger rieši španielske prípady vrátane komunikácie s Vueling customer care v španielčine aj angličtine. Preverenie zdarma."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=bcn_airport"
            ctaLabel="Preveriť BCN prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_bcn_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Barcelona El Prat – kľúčové fakty
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  IATA: BCN · cca 55 mil. pasažierov/rok
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Druhé najväčšie letisko v Španielsku po Madride. Významný hub Vueling pre
                  stredomorské destinácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dva terminály T1 a T2
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  T1 pre hlavné linky (Vueling, Iberia, Lufthansa, Air France). T2 pre low-cost
                  (Ryanair, Wizz Air, easyJet).
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Obmedzený slot v lete
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BCN je v júli/auguste extrémne vyťažený. Malé meškanie často narastá na viac ako
                  3 hodiny kvôli pretlaku.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Štrajky pozemného personálu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typickým problémom v BCN sú štrajky pozemného personálu alebo bezpečnostných
                  pracovníkov. Tie môžu byť mimoriadnou okolnosťou pre aerolinku.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické kompenzačné pásma pri letoch z/do BCN
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BCN – Viedeň, BCN – Bratislava (Wizz Air), BCN – Rím, BCN – Paríž. Do 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BCN – Istanbul, BCN – Tel Aviv, BCN – Dubaj. 1 500 – 3 500 km mimo EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  BCN – New York, BCN – Miami, BCN – Buenos Aires. Transatlantika nad 3 500 km.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Prípad v Barcelone? ClaimWinger ho vie riešiť
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger komunikuje s Vueling, Iberia a španielskym regulátorom AESA. Preverenie
                zdarma, provízia 30 % len pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_bcn_final_primary", delayedFlightHref)}
                  >
                    Preveriť BCN meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_bcn_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený BCN let
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
                  Vueling odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka v BCN – proces a typické situácie.
                </p>
                <Link
                  href="/sk/blog/vueling-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Wizz Air Bratislava – Barcelona
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Obľúbená linka pre slovenských cestujúcich – špecifiká.
                </p>
                <Link
                  href="/sk/blog/wizz-air-bratislava-barcelona-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Letisko Madrid
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najväčšie letisko v Španielsku a kľúčový tranzitný bod.
                </p>
                <Link
                  href="/sk/blog/letisko-madrid-mad-meskania"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
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
