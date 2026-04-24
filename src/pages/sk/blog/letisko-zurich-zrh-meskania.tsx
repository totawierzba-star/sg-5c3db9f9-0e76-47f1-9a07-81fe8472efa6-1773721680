import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/letisko-zurich-zrh-meskania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=zrh_airport";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=zrh_airport";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=zrh_airport";

const faqItems = [
  {
    question: "Platí EU261 na letisku Zurich (ZRH) aj keď je to mimo EÚ?",
    answer:
      "Áno. Švajčiarsko aplikuje rovnaký právny rámec ako EÚ prostredníctvom bilaterálnej zmluvy. Pri lete z ZRH alebo do ZRH s EÚ či švajčiarskou aerolinkou platí plne EU261 s identickými sumami 250 / 400 / 600 €.",
  },
  {
    question: "Koľko dostanem za meškanie z Zurich?",
    answer:
      "250 € pri krátkych trasách do 1 500 km (ZRH – Viedeň, ZRH – Bratislava), 400 € pri letoch 1 500 – 3 500 km (ZRH – Dubaj), 600 € pri transatlantike (ZRH – New York).",
  },
  {
    question: "Akí dopravcovia lietajú z ZRH?",
    answer:
      "SWISS (hub, súčasť Lufthansa Group), Lufthansa, Edelweiss Air, easyJet, Ryanair, British Airways, KLM, Air France, Turkish Airlines, Emirates, United, Delta.",
  },
  {
    question: "Zurich a nočné obmedzenie?",
    answer:
      "ZRH má nočný zákaz odletov od 23:30 do 06:00. To je dôležité, lebo meškanie po 23:30 často vedie k nočnému oneskoreniu až do rána – automatický right to care vrátane hotela.",
  },
  {
    question: "Je Švajčiarsko členom EÚ?",
    answer:
      "Nie, Švajčiarsko nie je v EÚ, ale je v Schengene a má bilaterálne zmluvy vrátane tej o leteckej doprave. Pre cestujúcich je ochrana v praxi identická s EU261.",
  },
  {
    question: "Kto je švajčiarsky regulátor?",
    answer:
      "FOCA (Federal Office of Civil Aviation, nemecky BAZL, francúzsky OFAC). Prijíma sťažnosti na aerolinky za nedodržanie nariadenia a má podobnú úlohu ako Dopravný úrad SR.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetiskoZurichZrhMeskaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Zurich (ZRH): meškania a odškodnenie (EU261 platí)"
        description="Meškal alebo zrušili let na letisku Zurich? Aj pri Švajčiarsku ako nečlene EÚ platí EU261 s rovnakými sumami. Prehľad nárokov a postup reklamácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Letisko Zurich (ZRH): meškania a odškodnenie",
            description:
              "Sprievodca EU261 nárokom pri meškaní alebo zrušení letu na letisku Zurich. Aj keď je Švajčiarsko mimo EÚ, ochrana EU261 platí.",
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
              { "@type": "ListItem", position: 3, name: "Letisko Zurich ZRH", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>Letisko Zurich (ZRH)</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              Letisko · ZRH · Zurich Kloten
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Letisko Zurich (ZRH): meškania a odškodnenie EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Švajčiarsko nie je v EÚ, ale aj pri lete z Zurich (IATA <strong>ZRH</strong>) alebo
              do Zurich platí <strong>EU261 v plnom rozsahu</strong> – vďaka bilaterálnej zmluve
              medzi Švajčiarskom a EÚ. Sumy kompenzácie sú rovnaké ako v EÚ (250 / 400 / 600 €).
              Zurich je hub <strong>SWISS</strong>, ktorá patrí do Lufthansa Group. Overte si nárok
              cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_zrh_intro", delayedFlightHref)}
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
            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-rose-700 p-8 text-white shadow-xl dark:border-red-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                <p>
                  Švajčiarsko = EU261 v praxi platí (bilaterálna zmluva). Sumy rovnaké ako v EÚ.
                </p>
                <p>
                  Pri zamietnutí sťažnosť na <strong>FOCA</strong> (Federal Office of Civil Aviation).
                </p>
                <p>
                  Nočný zákaz odletov 23:30 – 06:00 často predlžuje meškanie až do rána – s plným
                  right to care vrátane hotela.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zurich vám skomplikoval prestup?"
            description="SWISS aj Lufthansa Group riešime štandardne. FOCA eskalácia pri odmietnutí. Preverenie zdarma."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=zrh_airport"
            ctaLabel="Preveriť ZRH prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_zrh_airport_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické kompenzačné pásma pri letoch z/do ZRH
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ZRH – Viedeň, ZRH – Bratislava, ZRH – Paríž, ZRH – Mníchov. Do 1 500 km.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ZRH – Dubaj, ZRH – Tel Aviv, ZRH – Káhira. 1 500 – 3 500 km mimo EÚ.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ZRH – New York, ZRH – Tokio, ZRH – Bangkok, ZRH – São Paulo. Transatlantika.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                SWISS odmietla reklamáciu?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                SWISS používa systém Lufthansa Group. Pri zamietnutí ClaimWinger eskaluje na FOCA
                alebo priamo na švajčiarsky súd. Provízia 30 % pri úspechu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_zrh_final_primary", delayedFlightHref)}
                  >
                    Preveriť ZRH meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_zrh_final_secondary", cancelledFlightHref)}
                  >
                    Zrušený ZRH let
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
                  SWISS odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlavná aerolinka v ZRH.
                </p>
                <Link
                  href="/sk/blog/swiss-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Lufthansa reklamácia
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  SWISS používa Lufthansa Group systém.
                </p>
                <Link
                  href="/sk/blog/ako-podat-reklamaciu-lufthansa-krok-za-krokom"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Nočné meškanie – hotel
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kľúčové pri ZRH s nočným zákazom.
                </p>
                <Link
                  href="/sk/blog/nocne-meskanie-hotel-a-prava"
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
