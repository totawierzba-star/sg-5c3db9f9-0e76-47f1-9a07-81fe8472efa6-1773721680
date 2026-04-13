import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Hourglass,
  Scale,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/kolko-ma-aerolinka-na-odpoved";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_response_time";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_response_time";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airline_response_time";

const faqItems = [
  {
    question: "Koľko má aerolínka na odpoveď na reklamáciu?",
    answer:
      "Oficiálny portál Your Europe uvádza, že ak nedostanete odpoveď do 2 mesiacov alebo s odpoveďou nie ste spokojní, môžete podať sťažnosť príslušnému národnému orgánu. To je najdôležitejší európsky orientačný bod.",
  },
  {
    question: "Platí pre kompenzáciu lehota 7 dní?",
    answer:
      "Nie. Lehota 7 dní sa viaže najmä na refundáciu ceny letenky v relevantných situáciách, nie všeobecne na každú kompenzáciu podľa EU261.",
  },
  {
    question: "Môže aerolínka sľubovať 30 dní?",
    answer:
      "Áno, niektoré aerolinky uvádzajú vlastné interné orientačné lehoty, napríklad 30 dní. To však nie je jednotná európska lehota, ktorá by záväzne platila pre všetkých dopravcov a každý typ nároku.",
  },
  {
    question: "Čo robiť po 2 mesiacoch bez odpovede?",
    answer:
      "Odložte si dôkaz o podaní reklamácie a skontrolujte, či ste písali správnemu operujúcemu dopravcovi. Potom môžete zvážiť národný orgán, ADR alebo ďalšiu eskaláciu podľa typu sporu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function KolkoMaAerolinkaNaOdpovedPage() {
  return (
    <LayoutSk>
      <SEO
        title="Koľko má aerolínka na odpoveď na reklamáciu?"
        description="Koľko má aerolínka času na odpoveď? Vysvetľujeme hranicu 2 mesiacov z Your Europe, rozdiel medzi refundáciou do 7 dní a kompenzáciou podľa EU261 aj to, čo robiť ďalej."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Koľko má aerolínka na odpoveď na reklamáciu?",
            description:
              "Praktické vysvetlenie, koľko času má aerolínka na odpoveď, čo znamená hranica 2 mesiacov a ako sa líši refundácia od kompenzácie.",
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
                name: "Koľko má aerolínka na odpoveď na reklamáciu?",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Koľko má aerolínka na odpoveď?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Praktická lehota odpovede a ďalší krok
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Koľko má aerolínka na odpoveď na reklamáciu?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najčastejší zmätok vzniká v tom, že cestujúci miešajú tri rôzne veci:
              <strong> interné lehoty aerolinky</strong>, <strong>refundáciu do 7 dní</strong> a
              <strong> odpoveď na reklamáciu podľa oficiálnej európskej logiky</strong>. Nie je to to
              isté. Pre väčšinu sporov je najdôležitejší praktický bod <strong>2 mesiace</strong>.
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-slate-950 shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-950">
                <p>
                  Podľa oficiálneho portálu <strong>Your Europe</strong> môžete ísť ďalej, ak
                  <strong> nedostanete odpoveď do 2 mesiacov</strong> alebo ak s odpoveďou nie ste
                  spokojní.
                </p>
                <p>
                  To nie je to isté ako <strong>7 dní na refundáciu</strong>, ktoré sa týkajú
                  vrátenia ceny letenky v relevantných situáciách.
                </p>
                <p>
                  Ak chcete rýchlo posúdiť, či ešte čakať alebo už eskalovať, môžete prípad preveriť
                  cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_airline_response_time_quick_answer_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  . ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši
                  mimosúdne alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Neviete, či ešte čakať alebo už eskalovať?"
            description="ClaimWinger vie pomôcť posúdiť, či je prípad ešte v rozumnej lehote, alebo už dáva zmysel ísť na národný orgán, ADR alebo ďalší procesný krok."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=airline_response_time"
            ctaLabel="Preveriť ďalší krok"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_airline_response_time_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Hourglass className="h-8 w-8 text-amber-600" />
              Najdôležitejšia európska hranica: 2 mesiace
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Oficiálne usmernenie <strong>Your Europe</strong> hovorí, že ak nedostanete odpoveď
                  od aerolinky do <strong>2 mesiacov</strong> alebo s odpoveďou nie ste spokojní,
                  môžete sa obrátiť na relevantný <strong>národný orgán</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je najpraktickejší európsky orientačný bod. Neznamená to automatickú výhru po
                  61. dni, ale znamená to, že už nemusíte len pasívne čakať.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Scale className="h-8 w-8 text-amber-600" />
              Čo sa často pletie s touto lehotou
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Refundácia do 7 dní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je iná téma. Lehota <strong>7 dní</strong> sa viaže najmä na refundáciu ceny
                  letenky v relevantných situáciách, nie na všeobecnú odpoveď k celej kompenzácii.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Interné sľuby aerolinky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Niektoré aerolinky hovoria o <strong>30 dňoch</strong> alebo inej vlastnej lehote.
                  To môže byť užitočný orientačný bod, ale nie jednotné pravidlo EÚ pre všetkých.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo robiť prakticky, kým čakáte
            </h2>
            <div className="grid gap-4">
              {[
                "uložte si dôkaz o odoslaní reklamácie alebo ticket number",
                "skontrolujte, či ste písali správnemu operujúcemu dopravcovi",
                "majte odloženú rezerváciu, komunikáciu a všetky odpovede aerolinky",
                "nemiešajte refundáciu, náklady a kompenzáciu do jednej nejasnej žiadosti",
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
              Kedy už dáva zmysel ísť ďalej
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste na hranici <strong>2 mesiacov</strong> bez odpovede, alebo ak prišla veľmi
                  slabá či formálna odpoveď bez skutočného vysvetlenia, už má zmysel pozerať sa na
                  <strong> národný orgán</strong>, <strong>ADR</strong> alebo ďalší procesný krok.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To, čo bude správny ďalší krok, závisí od typu sporu. Inak vyzerá jednoduché
                  meškanie, inak zamietnutie s odvolaním na mimoriadne okolnosti a inak spor o
                  konečnú destináciu pri prestupe.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-amber-200 bg-amber-50 p-8 dark:border-amber-800 dark:bg-amber-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete vedieť, či ešte čakať alebo už eskalovať?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak už sedíte na reklamácii príliš dlho, ClaimWinger vie rýchlo povedať, či je ešte
                rozumné čakať, alebo či sa už oplatí posunúť prípad do ďalšej fázy.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_airline_response_time_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť ďalší krok s ClaimWinger
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_airline_response_time_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim meškajúci let
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_airline_response_time_final_cta_cancel",
                        cancelledFlightHref
                      )
                    }
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
                  Čo robiť, keď aerolínka neodpovedá?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Hlbší follow-up pre situáciu, keď už rozumná hranica čakania zjavne uplynula.
                </p>
                <Link
                  href="/sk/blog/co-robit-ked-aerolinka-neodpoveda"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako dlho trvá vyplatenie odškodnenia?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Samostatná téma o tom, ako dlho trvá samotná výplata, nie len odpoveď aerolínky.
                </p>
                <Link
                  href="/sk/blog/ako-dlho-trva-vyplatenie-odskodnenia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zamietnutá reklamácia: čo robiť?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak aerolínka už odpísala, ale odpoveď je slabá, nejasná alebo neúplná.
                </p>
                <Link
                  href="/sk/blog/zamietnuta-reklamacia-co-robit"
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
