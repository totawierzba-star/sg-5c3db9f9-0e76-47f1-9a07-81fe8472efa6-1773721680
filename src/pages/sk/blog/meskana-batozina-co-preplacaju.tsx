import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Receipt,
  Shirt,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/meskana-batozina-co-preplacaju";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delayed_baggage_expenses";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delayed_baggage_expenses";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=delayed_baggage_expenses";

const faqItems = [
  {
    question: "Čo aerolínka prepláca pri meškanej batožine?",
    answer:
      "Typicky ide o primerané nevyhnutné výdavky, ktoré vznikli preto, že ste nemali k dispozícii svoju odbavenú batožinu. Najčastejšie sú to základné hygienické potreby, nevyhnutné oblečenie a iné rozumné dočasné nákupy.",
  },
  {
    question: "Preplatia mi všetko, čo si kúpim, kým čakám na kufor?",
    answer:
      "Nie. Nárok sa zvyčajne viaže na primerané a odôvodnené výdavky. Luxusné alebo zjavne nadmerné nákupy bývajú problematické aj vtedy, keď batožina meškala reálne dlho.",
  },
  {
    question: "Do kedy musím podať reklamáciu za meškanú batožinu?",
    answer:
      "Your Europe uvádza, že pri oneskorene doručenej batožine treba podať písomnú reklamáciu aerolinke do 21 dní od jej doručenia.",
  },
  {
    question: "Je meškaná batožina to isté ako kompenzácia za meškajúci let?",
    answer:
      "Nie. Ide o iný právny základ. Nároky za meškanú batožinu sa neposudzujú rovnako ako kompenzácia za meškanie letu podľa EU261.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MeskanaBatozinaCoPreplacajuPage() {
  return (
    <LayoutSk>
      <SEO
        title="Meškaná batožina: čo aerolínka prepláca?"
        description="Čo prepláca aerolínka pri meškanej batožine? Vysvetľujeme primerané výdavky, účtenky, limit okolo 1 300 € a termín 21 dní na písomnú reklamáciu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Meškaná batožina: čo aerolínka prepláca?",
            description:
              "Praktický sprievodca tým, ktoré výdavky bývajú pri meškanej batožine obhájiteľné, aké limity približne platia a dokedy treba podať reklamáciu.",
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
                name: "Meškaná batožina: čo aerolínka prepláca?",
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
            <span>Meškaná batožina: čo aerolínka prepláca?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">
              Prvý článok zo slovenského klastru batožiny
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Meškaná batožina: čo aerolínka prepláca?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Pri meškanej batožine sa ľudia často pýtajú, či si môžu kúpiť všetko, čo im chýba.
              Krátka odpoveď znie: <strong>nie všetko</strong>, ale aerolínka zvyčajne zodpovedá za
              <strong> primerané nevyhnutné výdavky</strong>, ktoré vám vznikli preto, že ste zostali
              bez odbavenej batožiny.
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
            <Card className="border-cyan-200 bg-gradient-to-br from-cyan-600 to-sky-700 p-8 text-white shadow-xl dark:border-cyan-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-cyan-50">
                <p>
                  Pri meškanej batožine sa typicky preplácajú <strong>primerané dočasné výdavky</strong>:
                  hygiena, základné oblečenie a ďalšie nevyhnutnosti.
                </p>
                <p>
                  Podľa Your Europe môže byť aerolínka pri poškodenej, stratenej alebo meškanej
                  odbavenej batožine zodpovedná približne do výšky <strong>€1 300</strong>, ale to
                  neznamená, že každý nákup do tejto sumy je automaticky obhájiteľný.
                </p>
                <p>
                  Ak chcete preveriť situáciu alebo máte popri batožine aj problém so samotným letom,
                  môžete prípad poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_delayed_baggage_expenses_quick_answer_home",
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
            title="Máte problém s letom aj batožinou naraz?"
            description="ClaimWinger vie pomôcť oddeliť, čo patrí do nároku za meškaný alebo zrušený let a čo je samostatná vrstva nároku za meškanú batožinu."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=delayed_baggage_expenses"
            ctaLabel="Preveriť prípad s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_delayed_baggage_expenses_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Shirt className="h-8 w-8 text-cyan-600" />
              Čo býva zvyčajne obhájiteľné
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "základné hygienické potreby",
                "nevyhnutné spodné prádlo a základné oblečenie",
                "primerané nákupy podľa dĺžky meškania a typu cesty",
                "veci, ktoré skutočne nahrádzajú obsah zadržanej batožiny",
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
              <Receipt className="h-8 w-8 text-cyan-600" />
              Čo býva problematické
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Luxusné nákupy, značkové veci bez zjavnej potreby alebo veľké nákupy, ktoré
                  nevyzerajú ako dočasná náhrada batožiny, bývajú sporné aj pri dlhom meškaní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolínka často pozerá na účel cesty, dĺžku čakania a to, či bol nákup skutočne
                  rozumný vzhľadom na situáciu. Práve preto je dôležité myslieť kategóriou
                  <strong> primerané výdavky</strong>, nie len maximálny limit.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Briefcase className="h-8 w-8 text-cyan-600" />
              Na čo nezabudnúť hneď na letisku
            </h2>
            <div className="grid gap-4">
              {[
                "nahlásiť problém s batožinou čo najskôr po prílete",
                "vyžiadať si alebo uložiť PIR, ak bol vystavený",
                "odložiť si baggage tag a boarding pass",
                "uchovať účtenky za všetky primerané nákupy",
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
              Dôležitý termín: 21 dní
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Your Europe uvádza, že pri <strong>oneskorene doručenej batožine</strong> treba
                  podať písomnú reklamáciu aerolinke do <strong>21 dní od doručenia batožiny</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To je dôležitý termín, ktorý si veľa ľudí pletie s pravidlami pre samotný let.
                  Nárok za meškanú batožinu sa neriadi rovnako ako kompenzácia za meškajúci alebo
                  zrušený let podľa EU261.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-cyan-200 bg-cyan-50 p-8 dark:border-cyan-800 dark:bg-cyan-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si prípad preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Ak vám meškala batožina a popri tom riešite aj samotný let, ClaimWinger vie pomôcť
                oddeliť oba typy nárokov a nasmerovať vás na správnu cestu.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_delayed_baggage_expenses_final_cta_home",
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
                        "sk_delayed_baggage_expenses_final_cta_delay",
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
                        "sk_delayed_baggage_expenses_final_cta_cancel",
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
