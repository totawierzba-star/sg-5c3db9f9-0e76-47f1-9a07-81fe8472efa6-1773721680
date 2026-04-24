import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/aegean-airlines-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=aegean";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=aegean";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=aegean";

const faqItems = [
  {
    question: "Aegean Airlines spadá pod EU261?",
    answer:
      "Áno. Aegean (kód A3) je grécka vlajková aerolinka a členka Star Alliance. Lety z EÚ aj do EÚ s Aegean plne podliehajú EU261.",
  },
  {
    question: "Koľko dostanem za meškanie letu Aegean?",
    answer:
      "250 € pri krátkych trasách do 1 500 km (napr. Atény – Rím), 400 € pri letoch 1 500 – 3 500 km (napr. Atény – Dubaj, Atény – Londýn) a 600 € nad 3 500 km mimo EÚ.",
  },
  {
    question: "Aegean lieta z Bratislavy alebo Viedne?",
    answer:
      "Aegean lieta z Viedne a Budapešti do Atén celoročne a sezónne na grécke ostrovy. Pre slovenských cestujúcich je najčastejšou kombináciou Viedeň – Atény.",
  },
  {
    question: "Ako reklamovať Aegean Airlines?",
    answer:
      "Cez oficiálny formulár Customer care / EU261 Compensation na aegeanair.com. Alternatívne e-mailom. Odpoveď obvykle do 4 – 6 týždňov.",
  },
  {
    question: "Aké mimoriadne okolnosti Aegean často uvádza?",
    answer:
      "Štrajky gréckych dispečerov (ATC), poveternostné podmienky na Kykladach, politické situácie. Štrajk ATC je mimoriadna okolnosť, štrajk posádky Aegean nie.",
  },
  {
    question: "Olympic Air a Aegean – kto platí?",
    answer:
      "Olympic Air je dcérska spoločnosť Aegeanu a operuje domáce grécke linky. Reklamuje sa priamo u operujúcej aerolinky. V praxi ich často spracováva Aegean customer care.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AegeanAirlinesOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Aegean Airlines odškodnenie: grécka vlajková a EU261 nárok"
        description="Aegean Airlines meškal alebo zrušil let? Prehľad nárokov podľa EU261 pri letoch do Grécka, cez Atény na grécke ostrovy a do blízkeho Východu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Aegean Airlines odškodnenie podľa EU261",
            description:
              "Sprievodca nárokom na kompenzáciu pri meškaní alebo zrušení letu gréckej aerolinky Aegean.",
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
              { "@type": "ListItem", position: 3, name: "Aegean Airlines odškodnenie", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Aegean Airlines odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Aegean Airlines · Grécko · Star Alliance
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Aegean Airlines odškodnenie podľa EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Aegean Airlines (kód <strong>A3</strong>) je najväčšia grécka aerolinka a členka Star
              Alliance. Slovenskí cestujúci ju najčastejšie zažijú pri letoch{" "}
              <strong>Viedeň – Atény</strong> alebo <strong>Atény – grécke ostrovy</strong> (pod
              značkou Olympic Air). Ako EÚ aerolinka plne podlieha EU261 – pri meškaní nad 3 hodiny
              alebo zrušení máte nárok 250 – 600 €. Nárok môžete overiť cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_aegean_intro", delayedFlightHref)}
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
                <span>Čítanie: 8 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-600 to-sky-700 p-8 text-white shadow-xl dark:border-blue-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-blue-50">
                <p>
                  Aegean = grécka EÚ aerolinka = plné EU261. Pri meškaní 3+ h alebo zrušení 14 dní
                  vopred kompenzácia <strong>250 / 400 / 600 €</strong>.
                </p>
                <p>
                  Časté mimoriadne okolnosti v Grécku: štrajk ATC (platný dôvod), politická
                  nestabilita, nepravidelné počasie nad Egejským morom.
                </p>
                <p>
                  Proces u Aegean je relatívne rýchly – odpoveď typicky do 4 – 6 týždňov.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Aegean pokazil vašu dovolenku v Grécku?"
            description="Meškanie, zrušenie alebo zmena harmonogramu – ClaimWinger vám pripraví reklamáciu, overí mimoriadne okolnosti a v prípade odmietnutia pokračuje na ENAC alebo priamo na súd."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=aegean"
            ctaLabel="Preveriť Aegean prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_aegean_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické trasy Aegean a kompenzácia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Atény
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~1 200 km, krátka trasa = 250 € pri 3+ hodinovom meškaní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Atény – Rhodos / Santorini / Mykonos (Olympic Air)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Domáce grécke lety, pod 500 km = 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Atény – Londýn / Madrid
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~2 400 – 2 800 km, v EÚ nad 1 500 km = 400 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Atény – Dubaj / Tel Aviv
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~2 200 – 3 200 km mimo EÚ = 400 € pri 3+ hodinovom meškaní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Štrajky v Grécku – ako to posudzovať
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                V Grécku bývajú štrajky pomerne časté a Aegean ich často používa ako dôvod
                neposkytnutia kompenzácie. Je dôležité rozlišovať:
              </p>
              <ul>
                <li>
                  <strong>Štrajk ATC / Eurocontrol / letiskových pracovníkov</strong> – externé
                  voči aerolinke = <strong>mimoriadna okolnosť</strong>, kompenzácia nevzniká, ale
                  právo na starostlivosť a presmerovanie zostáva.
                </li>
                <li>
                  <strong>Štrajk vlastnej posádky Aegean</strong> – podľa rozsudku ECJ C-28/20
                  (Airhelp vs. SAS) <strong>nie je mimoriadnou okolnosťou</strong>, kompenzácia
                  vzniká.
                </li>
                <li>
                  <strong>Masové štrajky v sektore verejnej dopravy</strong> ovplyvňujúce len časť
                  letov – obhajuje sa individuálne, často sa prípady vyhrávajú pre cestujúcich.
                </li>
              </ul>
              <p>
                Viac v článku{" "}
                <Link
                  href="/sk/blog/strajk-lini-lotniczych-odszkodowanie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Štrajk leteckých spoločností a kompenzácia
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Meškal vám let Aegean kvôli štrajku?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Nie každý štrajk je mimoriadnou okolnosťou. ClaimWinger preverí, či ide o ATC,
                posádku alebo tretiu stranu a podľa toho posúdi nárok. Preverenie zdarma, provízia
                30 % pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_aegean_final_primary", delayedFlightHref)}
                  >
                    Preveriť meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_aegean_final_secondary", cancelledFlightHref)}
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
                  Štrajk a kompenzácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rozdiel medzi štrajkom vlastnej posádky a ATC.
                </p>
                <Link
                  href="/sk/blog/strajk-lini-lotniczych-odszkodowanie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Všeobecný rámec pre vyhodnotenie mimoriadnych okolností.
                </p>
                <Link
                  href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmeškaný prestup mimo EÚ
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Dôležité pri prestupoch cez Atény do Dubaju alebo Tel Avivu.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-mimo-eu"
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
