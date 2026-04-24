import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-lisabon-lis-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lis_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lis_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lis_airport";

const faqItems = [
  {
    question: "Mám pri Lisabone (LIS) nárok na odškodnenie?",
    answer:
      "Áno, EU261 platí plne pri odletoch z Lisabonu aj prílete z tretích krajín s EÚ aerolinkou. Sumy 250 / 400 / 600 €.",
  },
  {
    question: "Koľko dostanem pri lete z LIS?",
    answer:
      "250 € pri krátkych (LIS – Viedeň ~2 500 km, tu 400 €), 400 € pri stredných letoch, 600 € pri transatlantike (LIS – New York, LIS – Buenos Aires, LIS – São Paulo).",
  },
  {
    question: "Akí dopravcovia z LIS?",
    answer:
      "TAP Air Portugal (hub), Ryanair, Wizz Air, easyJet, Vueling, Iberia, Lufthansa, Delta, United. TAP má silnú sieť do Brazílie a afrických portugalsky hovoriacich krajín.",
  },
  {
    question: "Letisko má len jednu dráhu – časté meškania?",
    answer:
      "Áno, LIS má len jednu aktívnu vzletovú dráhu, preto je citlivé na počasie aj na ATC obmedzenia. Meškania sú častejšie než v iných veľkých EÚ hubochoch. Samotné preťaženie nie je mimoriadna okolnosť.",
  },
  {
    question: "Portugalský regulátor?",
    answer:
      "ANAC (Autoridade Nacional da Aviação Civil). Prijíma sťažnosti online v portugalčine alebo angličtine.",
  },
  {
    question: "TAP má časté meškania – prečo?",
    answer:
      "TAP mala v roku 2024 – 2025 sériu prevádzkových reštrukturalizácií s dočasne obmedzenou flotilou. Rotácia lietadla nie je mimoriadnou okolnosťou – pri meškaniach z tohto dôvodu vzniká plný nárok.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoLisabonLisMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Lisabon (LIS): meškania a odškodnenie EU261"
        description="Meškal alebo zrušili let na Lisabone? Prehľad EU261 nárokov, hubu TAP Portugal a postupu reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Lisabon (LIS): meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na letisku Lisabon Humberto Delgado.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Lisabon", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Lisabon (LIS)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              Letisko · LIS · Humberto Delgado
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Lisabon (LIS): meškania a odškodnenie
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Lisabon Humberto Delgado (IATA <strong>LIS</strong>) je hlavné portugalské letisko
              a hub <strong>TAP Air Portugal</strong>. TAP má silnú sieť do Brazílie, Angoly,
              Mozambiku a USA – preto sú meškania z LIS pre slovenských cestujúcich aj 600 € pri
              transatlantike. Overte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_lis_intro", delayedFlightHref)}
              >
                ClaimWinger
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
                <span>Čítanie: 7 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-green-200 bg-gradient-to-br from-green-600 to-emerald-700 p-8 text-white shadow-xl dark:border-green-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-green-50">
                <p>LIS = EÚ letisko, plne EU261. Sumy 250 / 400 / 600 €.</p>
                <p>Len jedna aktívna dráha = častejšie meškania, ale nie mimoriadna okolnosť.</p>
                <p>Regulátor: ANAC. Kontakt v portugalčine alebo angličtine.</p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="TAP alebo iná aerolinka v Lisabone meškala?"
            description="ClaimWinger rieši portugalské prípady vrátane komunikácie s TAP Customer Care a portugalským ANAC."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=lis_airport"
            ctaLabel="Preveriť LIS prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_lis_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické kompenzácie pri letoch z/do LIS
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LIS – Madrid, LIS – Porto. Krátke lety.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LIS – Viedeň, LIS – Londýn, LIS – Istanbul, LIS – Praha. Nad 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  LIS – New York, LIS – Buenos Aires, LIS – São Paulo, LIS – Luanda, LIS – Maputo.
                  Transatlantika/Afrika.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                TAP odmieta reklamáciu?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                TAP v roku 2024 – 2025 mala viac zamietnutí pre prevádzkové dôvody, ktoré neplatia ako
                mimoriadna okolnosť. ClaimWinger takýto typ prípadov úspešne rieši.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_lis_final_primary", delayedFlightHref)}
                  >
                    Preveriť LIS meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_lis_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený LIS let
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
                  TAP Air Portugal odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka v Lisabone.
                </p>
                <Link
                  href="/sk/blog/tap-air-portugal-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie kvôli rotácii lietadla
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité pri TAP-e a letech z Lisabonu.
                </p>
                <Link
                  href="/sk/blog/meskanie-kvoli-rotacii-lietadla"
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
                  Porovnanie iberijského hubu.
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
