import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Plane,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/let-spat-do-eu-s-eu-aerolinkou";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=return_to_eu_with_eu_airline";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=return_to_eu_with_eu_airline";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=return_to_eu_with_eu_airline";

const faqItems = [
  {
    question: "Platí EU261 aj pri lete späť do EÚ z krajiny mimo EÚ?",
    answer:
      "Áno, často áno, ale hlavne vtedy, keď let operuje európska aerolinka. Pri návrate do EÚ z tretej krajiny je práve status dopravcu veľmi dôležitý.",
  },
  {
    question: "Aký je rozdiel medzi EU a non-EU aerolinkou pri lete späť do EÚ?",
    answer:
      "Pri lete z krajiny mimo EÚ do Únie môže byť európsky dopravca zásadnou výhodou. Pri non-EU aerolinke býva ochrana podľa EU261 slabšia alebo nemusí platiť rovnako.",
  },
  {
    question: "Počíta sa aj pri návrate do EÚ konečná destinácia?",
    answer:
      "Áno. Ak sa pravidlá na cestu vzťahujú, pri meškaní a zmeškanom prestupe býva kľúčový dopad na konečnú destináciu, nie len problém na jednom segmente.",
  },
  {
    question: "Je pri návrate do EÚ dôležitá jedna rezervácia?",
    answer:
      "Áno. Jedna rezervácia zostáva veľmi dôležitá, najmä pri prestupoch a pri hodnotení celého výsledku cesty.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function LetSpatDoEuSEuAerolinkouPage() {
  return (
    <LayoutSk>
      <SEO
        title="Let späť do EÚ s EU aerolinkou: kedy ešte platí EU261?"
        description="Čo ak letíte z krajiny mimo EÚ späť do Únie s európskou aerolinkou? Vysvetľujeme, kedy môže platiť EU261, prečo je dôležitý status dopravcu a čo rozhoduje pri prestupoch."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Let späť do EÚ s EU aerolinkou: kedy ešte platí EU261?",
            description:
              "Praktický sprievodca pre situáciu, keď sa let vracia z krajiny mimo EÚ do Únie a operuje ho európska aerolinka, vrátane významu jednej rezervácie a konečnej destinácie.",
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
                name: "Let späť do EÚ s EU aerolinkou",
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
            <span>Let späť do EÚ s EU aerolinkou</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
              Edge case content pre návrat do Únie
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Let späť do EÚ s EU aerolinkou: kedy ešte platí EU261?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak letíte z krajiny <strong>mimo EÚ späť do Únie</strong>, pravidlá bývajú menej
              intuitívne než pri odlete z Európy. Práve tu je veľmi dôležité, či ide o
              <strong> EU aerolinku</strong>, aká je štruktúra itinerára a ako dopadol prílet do
              <strong> konečnej destinácie</strong>.
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
                  <strong>Áno, často áno.</strong> Ak sa let vracia z krajiny mimo EÚ do Únie a
                  operuje ho európska aerolinka, ochrana podľa EU261 môže stále platiť.
                </p>
                <p>
                  To je hlavný rozdiel oproti mnohým letom s <strong>non-EU dopravcom</strong>, kde
                  je postavenie pasažiera pri návrate do EÚ často slabšie.
                </p>
                <p>
                  Pri prestupoch a meškaniach sa ďalej pozerá na <strong>jednu rezerváciu</strong> a
                  na výsledok v <strong>konečnej destinácii</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Letíte späť do EÚ s európskou aerolinkou a riešite problém s letom?"
            description="ClaimWinger vie rýchlo preveriť, či sa na váš návrat z non-EU krajiny do Únie stále vzťahuje EU261, alebo či prípad oslabuje dopravca, itinerár alebo oddelené rezervácie."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=return_to_eu_with_eu_airline"
            ctaLabel="Preveriť nárok s ClaimWinger"
            loadingLabel="Načítava sa formulár pre meškajúci let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger na preverenie prípadu."
            placement="sk_blog_return_to_eu_with_eu_airline_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva pozícia pasažiera najsilnejšia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "let sa vracia z non-EU krajiny do EÚ",
                "operuje ho európska aerolinka",
                "cesta je na jednej rezervácii",
                "do konečnej destinácie prídete s veľkým meškaním",
                "prípad neoslabujú mimoriadne okolnosti",
                "viete ukázať celý itinerár a skutočného operujúceho dopravcu",
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
              Prečo je pri návrate do EÚ taká dôležitá EU aerolinka
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Plane className="mb-3 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Status dopravcu mení rozsah ochrany
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri lete z krajiny mimo EÚ do Únie býva európsky dopravca rozhodujúcou výhodou.
                  Nie je to len detail značky, ale veľmi praktická právna hranica.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Počíta sa výsledok cesty
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa prípad do EU261 zmestí, pri meškaní a zmeškanom prestupe býva rozhodujúci
                  prílet do konečnej destinácie, nie len problém na jednom segmente.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <FileText className="mb-3 h-6 w-6 text-emerald-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Jedna rezervácia zostáva kľúčová
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri návrate do EÚ zostáva dôležité, či ide o jeden súvislý itinerár alebo o
                  dve samostatné letenky bez spoločnej ochrany.
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
                  Priamy let z non-EU krajiny do EÚ s EU aerolinkou
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Toto býva najčistejší prípad. Ak európsky dopravca let operuje a vznikne veľké
                  meškanie pri prílete, ochrana môže byť veľmi silná.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Návrat do EÚ s prestupom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri prestupe sa opäť vracia na stôl jedna rezervácia, konečná destinácia a otázka,
                  kto skutočne operoval rozhodujúce segmenty na trase.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Rovnaká trasa, ale non-EU dopravca
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu môže byť výsledok citeľne horší. Práve preto je pri návrate do EÚ status
                  dopravcu taký dôležitý.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-emerald-200 bg-emerald-50 p-8 dark:border-emerald-800 dark:bg-emerald-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri návrate do EÚ z krajiny mimo Únie bývajú rozhodujúce detaily: dopravca, smer
                cesty, jedna rezervácia i konečný prílet. ClaimWinger vie rýchlo oddeliť silný prípad
                od slabšieho scenára mimo rozsahu EU261.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_return_to_eu_with_eu_airline_final_cta_delay",
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
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_return_to_eu_with_eu_airline_final_cta_home",
                        claimWingerHomeHref
                      )
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
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete preveriť konkrétnu trasu z non-EU krajiny späť do Únie.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_return_to_eu_with_eu_airline_related_home",
                      claimWingerHomeHref
                    )
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger Slovensko
                </a>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmeškaný prestup mimo EÚ
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak návrat do EÚ komplikoval prestup mimo Únie alebo zlyhanie ďalšieho segmentu.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-mimo-eu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na prestup mimo EÚ
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň–Bangkok (EU aerolinka)
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete podobný long-haul kontext s dôrazom na rolu európskeho dopravcu.
                </p>
                <Link
                  href="/sk/blog/vieden-bangkok-meskanie-letu-eu-aerolinka"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o long-haul
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
