import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-milan-malpensa-mxp-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=mxp_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=mxp_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=mxp_airport";

const faqItems = [
  {
    question: "Mám pri meškaní v Miláne Malpensa nárok na odškodnenie?",
    answer:
      "Áno, ak let spadá pod EU261 a meškanie pri prílete je 3+ hodín. Malpensa (MXP) je najväčšie letisko v severnom Taliansku.",
  },
  {
    question: "Koľko dostanem pri lete z MXP?",
    answer:
      "250 € pri krátkych trasách do 1 500 km (MXP – Bratislava, MXP – Viedeň), 400 € pri stredných letoch, 600 € pri transatlantike (MXP – New York s United, MXP – Tokio).",
  },
  {
    question: "Rozdiel medzi Malpensa, Linate a Bergamo?",
    answer:
      "MXP je hlavné medzinárodné letisko (long-haul, niektoré EÚ linky). LIN (Linate) je menšie mestské letisko, prevažne domáce a EÚ linky Alitalia/ITA. BGY (Bergamo) je low-cost letisko pre Ryanair a Wizz Air (známe ako Milan-Bergamo).",
  },
  {
    question: "Akí dopravcovia z MXP pre slovenských cestujúcich?",
    answer:
      "Ryanair, Wizz Air, easyJet (T2), ITA Airways, Lufthansa, Air France, Turkish Airlines, Emirates, Etihad. Najbežnejšou kombináciou pre cestujúcich zo SR je Ryanair alebo Wizz Air.",
  },
  {
    question: "Časté dôvody meškania v Miláne?",
    answer:
      "Hmla v Pádskej nížine (november – február) bývala v minulosti hlavným dôvodom. Moderné systémy prístrojového pristávania to zmenšili. Štrajky talianskeho pozemného personálu, strajk ATC, preťažená dopravná kontrola nad severným Talianskom.",
  },
  {
    question: "MCT na MXP?",
    answer:
      "T1 – T1: 35 – 45 min. T1 – T2: 60 min minimum (bus alebo taxi medzi terminálmi). T2 je pre low-cost a easyJet, T1 pre všetky ostatné.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoMilanMalpensaMxpMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Miláno Malpensa (MXP): meškania a odškodnenie EU261"
        description="Meškal alebo zrušili let na letisku Miláno Malpensa? Prehľad nárokov podľa EU261, rozdiel MXP/LIN/BGY a postup reklamácie pre slovenských cestujúcich."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Miláno Malpensa (MXP): meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na letisku Miláno Malpensa.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Miláno Malpensa", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Miláno Malpensa</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Letisko · MXP · Miláno Malpensa
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Miláno Malpensa (MXP): meškania a odškodnenie
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Miláno má tri letiská – <strong>Malpensa (MXP)</strong>,{" "}
              <strong>Linate (LIN)</strong> a <strong>Bergamo (BGY)</strong>. Malpensa je najväčšie
              a jediné s plnohodnotnými transatlantickými linkami. Pre slovenských cestujúcich je
              populárny priamy let Bratislava – MXP (Wizz Air) alebo Viedeň – MXP (Austrian, ITA).
              Overte nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_mxp_intro", delayedFlightHref)}
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
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-indigo-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  MXP je jediné milánske letisko s long-haul linkami. Pri odlete z MXP plne platí
                  EU261. Sumy: <strong>250 / 400 / 600 €</strong>.
                </p>
                <p>
                  <strong>MXP vs LIN vs BGY:</strong> dvakrát overte IATA kód svojho letu – Ryanair a
                  Wizz Air lietajú často z Bergama (BGY), nie MXP.
                </p>
                <p>
                  Talianske štrajky posádky aerolínií nie sú mimoriadne okolnosti. Štrajk ATC áno.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Meškanie z Malpensy?"
            description="ClaimWinger rieši talianske aerolinky aj talianskych regulátorov. Preverenie zdarma, provízia 30 % pri úspechu."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=mxp_airport"
            ctaLabel="Preveriť MXP prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_mxp_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kompenzačné pásma pri letoch z/do MXP
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  MXP – Bratislava, MXP – Viedeň, MXP – Budapešť, MXP – Rím. Do 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  MXP – Dubaj, MXP – Tel Aviv, MXP – Moskva (pozastavené), MXP – Istanbul. 1 500 –
                  3 500 km mimo EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  MXP – New York, MXP – Miami, MXP – Tokio, MXP – São Paulo. Transatlantika =
                  600 € pri 4+ hod meškaní.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Uľahčite si prípad z Milána
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger má skúsenosť s Milan-based aerolinkami (ITA, easyJet base, Ryanair base).
                Preverenie zdarma.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_mxp_final_primary", delayedFlightHref)}
                  >
                    Preveriť MXP meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_mxp_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený MXP let
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
                  Letisko Rím Fiumicino
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Druhý taliansky hub – porovnanie procesu.
                </p>
                <Link
                  href="/sk/blog/letisko-rim-fiumicino-fco-meskania"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ITA Airways odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Domáca talianska aerolinka – proces reklamácie.
                </p>
                <Link
                  href="/sk/blog/ita-airways-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Wizz Air reklamácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Často Wizz Air lieta Bratislava – MXP.
                </p>
                <Link
                  href="/sk/blog/ako-podat-reklamaciu-wizz-air-krok-za-krokom"
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
