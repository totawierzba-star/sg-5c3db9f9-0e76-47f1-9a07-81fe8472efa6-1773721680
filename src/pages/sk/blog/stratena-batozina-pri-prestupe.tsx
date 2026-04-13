import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  PlaneLanding,
  RefreshCw,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/stratena-batozina-pri-prestupe";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lost_baggage_connection";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lost_baggage_connection";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=lost_baggage_connection";

const faqItems = [
  {
    question: "Čo robiť, keď sa batožina stratí pri prestupe?",
    answer:
      "Najdôležitejšie je okamžite nahlásiť problém po prílete do konečnej destinácie, vyžiadať si PIR, odložiť si baggage tag a všetky údaje o celej trase. Prvé kroky by sa mali riešiť na letisku, kde ste batožinu očakávali.",
  },
  {
    question: "Ktorá aerolínka zodpovedá za stratenú batožinu pri prestupe?",
    answer:
      "V praxi sa reklamácia typicky rozbieha voči aerolinke, ktorá vás dopravila do cieľovej destinácie a cez ktorú sa rieši aj baggage tracing. Pri komplikovanejších trasách je však dôležité mať celý reťazec segmentov a dokladov.",
  },
  {
    question: "Je stratená batožina pri prestupe to isté ako kompenzácia za zmeškaný prestup?",
    answer:
      "Nie. Ide o odlišný typ nároku. Strata alebo meškanie batožiny sa neposudzuje rovnako ako kompenzácia za problém so samotným letom podľa EU261.",
  },
  {
    question: "Pomôže jedna rezervácia aj pri batožine?",
    answer:
      "Áno, z praktického hľadiska často pomáha. Jedna rezervácia a jeden check-in vedia výrazne uľahčiť tracing, hoci samotný spor o batožinu sa právne nečíta rovnako ako letová kompenzácia.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function StratenaBatozinaPriPrestupePage() {
  return (
    <LayoutSk>
      <SEO
        title="Stratená batožina pri prestupe: čo robiť krok za krokom?"
        description="Čo robiť, keď sa batožina stratí pri prestupe? Vysvetľujeme PIR, tracing, úlohu posledného letiska, jednej rezervácie a prvé kroky hneď po prílete."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Stratená batožina pri prestupe: čo robiť krok za krokom?",
            description:
              "Praktický návod, čo robiť, keď sa batožina stratí pri prestupe, ako riešiť PIR, tracing a na čo si dať pozor pri viacerých segmentoch cesty.",
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
                name: "Stratená batožina pri prestupe",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Stratená batožina pri prestupe</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">
              Druhý článok zo slovenského klastru batožiny
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Stratená batožina pri prestupe: čo robiť krok za krokom?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Keď batožina zmizne pri prestupe, najväčší chaos býva v tom, že cestujúci netušia,
              <strong> kde presne začať</strong> a <strong>kto má prípad riešiť</strong>. Najdôležitejšie
              je myslieť na posledné letisko cesty, PIR, baggage tag a celý reťazec segmentov.
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
            <Card className="border-sky-200 bg-gradient-to-br from-sky-600 to-blue-700 p-8 text-white shadow-xl dark:border-sky-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-sky-50">
                <p>
                  Ak batožina neprišla po prestupe, prvý krok je <strong>okamžité hlásenie na letisku,
                  kde ste ju mali dostať</strong>.
                </p>
                <p>
                  Odložte si <strong>PIR</strong>, <strong>baggage tag</strong>, boarding passy a
                  celú trasu. Pri prestupoch je veľmi dôležité mať čistý záznam, kadiaľ batožina
                  išla a kde sa reťazec rozpadol.
                </p>
                <p>
                  Ak popri batožine riešite aj problém so samotným letom, môžete situáciu poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_lost_baggage_connection_quick_answer_home",
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
            title="Riešite naraz prestup aj stratenú batožinu?"
            description="ClaimWinger vie pomôcť rozlíšiť, čo patrí do nároku za let a čo je samostatná vrstva problému s batožinou pri prestupe."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=lost_baggage_connection"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_lost_baggage_connection_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <PlaneLanding className="h-8 w-8 text-sky-600" />
              1. Myslite na posledné letisko, nie na miesto, kde sa vám batožina stratila v hlave
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Prakticky sa problém rozbieha tam, kde ste batožinu mali dostať, teda po prílete do
                  <strong> konečnej destinácie</strong> danej cesty alebo daného check-in reťazca.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je dôležité najmä pri prestupe, kde si cestujúci často myslia, že musia hneď
                  spätne riešiť, na ktorom segmente sa kufor stratil. Na začiatku je však dôležitejší
                  <strong> PIR a tracing</strong> než odhadovanie viny.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <RefreshCw className="h-8 w-8 text-sky-600" />
              2. Bez PIR a baggage tagu sa prípad zbytočne oslabuje
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "PIR alebo iný oficiálny baggage report",
                "baggage tag z odbavenia",
                "boarding passy zo všetkých segmentov",
                "jedna rezervácia alebo celé údaje o trase, ak ich máte",
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
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Briefcase className="h-8 w-8 text-sky-600" />
              3. Jedna rezervácia veľmi pomáha, ale batožina nie je to isté čo EU261
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste leteli na <strong>jednej rezervácii</strong> a batožina bola odbavená do
                  finálnej destinácie, tracing býva prakticky jednoduchší. Je jasnejšie, ako sa číta
                  celý reťazec segmentov.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To však netreba zamieňať s kompenzáciou za samotný let. Strata alebo meškanie
                  batožiny pri prestupe je iný typ nároku než EU261 kompenzácia za zmeškaný
                  prestup alebo meškanie v cieli.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              4. Čo robiť po odchode z letiska
            </h2>
            <div className="grid gap-4">
              {[
                "sledovať baggage tracing a ukladať si všetky updatey",
                "uchovať účtenky za primerané nevyhnutné nákupy",
                "odložiť si všetku komunikáciu s aerolinkou alebo handlingom",
                "neprehliadnuť lehoty na písomnú reklamáciu, ak sa batožina doručí neskôr",
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
            <Card className="border-sky-200 bg-sky-50 p-8 dark:border-sky-800 dark:bg-sky-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si situáciu preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak sa vám pri prestupe rozpadol aj samotný itinerár a zároveň chýba batožina,
                ClaimWinger vie pomôcť oddeliť oba problémy a nasmerovať vás na správny ďalší krok.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-sky-600 hover:bg-sky-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_lost_baggage_connection_final_cta_home",
                        claimWingerHomeHref
                      )
                    }
                  >
                    Preveriť prípad s ClaimWinger
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
                        "sk_lost_baggage_connection_final_cta_delay",
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
                        "sk_lost_baggage_connection_final_cta_cancel",
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
