import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/zruseny-let-menej-ako-14-dni-pred-odletom";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_less_than_14_days";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_less_than_14_days";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_less_than_14_days";

const faqItems = [
  {
    question: "Vzniká nárok automaticky, ak let zrušili menej ako 14 dní pred odletom?",
    answer:
      "Nie automaticky. Zrušenie menej ako 14 dní pred odletom je silný signál, ale stále záleží aj na tom, aký rerouting vám aerolinka ponúkla a či nepreukáže mimoriadne okolnosti.",
  },
  {
    question: "Prečo je dôležitý rozdiel medzi 7 až 14 dňami a menej ako 7 dňami?",
    answer:
      "Lebo pri týchto dvoch obdobiach platia odlišné hranice pre prijateľný náhradný let. To môže rozhodnúť, či kompenzácia ostane, alebo nevznikne.",
  },
  {
    question: "Môžem dostať aj refundáciu alebo rerouting, aj keď kompenzácia nevznikne?",
    answer:
      "Áno. Aj keď peňažná kompenzácia nevznikne, stále môžete mať právo na refundáciu ceny letenky alebo na presmerovanie do cieľa.",
  },
  {
    question: "Môže sa kompenzácia po reroutingu znížiť o 50 %?",
    answer:
      "Áno. Ak vám aerolinka ponúkne náhradný let a do konečnej destinácie dorazíte len s obmedzeným sklzom, kompenzácia sa môže znížiť o 50 % podľa dĺžky trasy.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ZrusenyLetMenejAko14DniPredOdletomPage() {
  return (
    <LayoutSk>
      <SEO
        title="Zrušený let menej ako 14 dní pred odletom: kedy vzniká nárok?"
        description="Čo ak vám aerolinka zruší let menej ako 14 dní pred odletom? Vysvetľujeme rozdiel medzi 7 až 14 dňami a menej ako 7 dňami, rerouting, refundáciu aj možné zníženie kompenzácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Zrušený let menej ako 14 dní pred odletom: kedy vzniká nárok?",
            description:
              "Praktický prehľad pravidla 14 dní pri zrušenom lete vrátane rozdielu medzi 7 až 14 dňami a menej ako 7 dňami, úlohy reroutingu a zníženia kompenzácie.",
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
                name: "Zrušený let menej ako 14 dní pred odletom",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Zrušený let menej ako 14 dní pred odletom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-700 dark:bg-red-900/30 dark:text-red-300">
              Edge case content k pravidlu 14 dní
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Zrušený let menej ako 14 dní pred odletom: kedy vzniká nárok?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak vám aerolinka zrušila let <strong>menej ako 14 dní pred odletom</strong>, je to
              dôležitý moment, ale nie úplne automatická výhra. Rozhoduje, kedy presne vás informovali,
              aký <strong>rerouting</strong> ponúkli a či vedia preukázať <strong>mimoriadne
              okolnosti</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Aktualizované: 13. apríla 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-red-200 bg-gradient-to-br from-red-600 to-rose-700 p-8 text-white shadow-xl dark:border-red-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-red-50">
                <p>
                  <strong>Áno, nárok často vzniká, ale nie automaticky.</strong> Ak vás aerolinka
                  informovala menej ako 14 dní pred odletom, je to silný základ pre kompenzáciu.
                </p>
                <p>
                  Stále však treba pozrieť na to, <strong>koľko dní pred odletom</strong> prišlo
                  oznámenie a <strong>aký náhradný let</strong> vám ponúkli.
                </p>
                <p>
                  Aj keď peňažná kompenzácia nevznikne, stále môžete mať právo na
                  <strong> refundáciu</strong> alebo <strong>presmerovanie</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zrušili vám let menej ako 14 dní pred odletom?"
            description="ClaimWinger vie rýchlo preveriť, či sa vo vašom prípade hrá o plnú kompenzáciu, zníženú kompenzáciu po reroutingu alebo skôr o refundáciu a presmerovanie."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=cancelled_less_than_14_days"
            ctaLabel="Preveriť zrušený let s ClaimWinger"
            loadingLabel="Načítava sa formulár pre zrušený let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre zrušené lety."
            placement="sk_blog_cancelled_less_than_14_days_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo presne znamená hranica 14 dní
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-red-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Viac ako 14 dní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vás informovali skôr než 14 dní pred odletom, peňažná kompenzácia spravidla
                  nevzniká, aj keď stále môžete mať právo na refundáciu alebo presmerovanie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-red-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  7 až 14 dní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu už nárok môže vzniknúť, ale veľa závisí od toho, ako skoro pred pôvodným odletom
                  vás pustili a o koľko neskôr ste prišli do cieľa.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <CheckCircle2 className="mb-3 h-6 w-6 text-red-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Menej ako 7 dní
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri veľmi neskorom oznámení býva pozícia pasažiera silnejšia, ale ani tu to nie je
                  bezvýhradné. Stále treba vyhodnotiť rerouting a mimoriadne okolnosti.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Dve rozhodujúce okná pri zrušení letu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak vás informovali medzi 7 a 14 dňami pred odletom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kompenzácia nemusí vzniknúť, ak vám aerolinka ponúkne náhradný let, ktorý odlieta
                  najviac <strong>2 hodiny pred pôvodným časom odletu</strong> a dorazí do konečnej
                  destinácie <strong>menej ako 4 hodiny po pôvodnom plánovanom prílete</strong>.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Ak vás informovali menej ako 7 dní pred odletom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kompenzácia nemusí vzniknúť, ak vám aerolinka ponúkne náhradný let, ktorý odlieta
                  najviac <strong>1 hodinu pred pôvodným časom odletu</strong> a dorazí do konečnej
                  destinácie <strong>menej ako 2 hodiny po pôvodnom plánovanom prílete</strong>.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy býva prípad najsilnejší
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "o zrušení ste sa dozvedeli menej ako 14 dní pred odletom",
                "náhradný let vás posunul mimo ochranných hraníc pre rerouting",
                "do konečnej destinácie ste prišli výrazne neskôr",
                "máte e-mail, SMS alebo inú komunikáciu o zrušení",
                "viete ukázať pôvodný a nový itinerár",
                "aerolinka nepreukáže mimoriadne okolnosti",
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
              <Clock className="h-8 w-8 text-red-600" />
              Čo sa rieši popri kompenzácii
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia alebo presmerovanie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri zrušenom lete sa vždy pozerá aj na to, či chcete peniaze späť alebo nový let do
                  cieľa. Toto právo je oddelené od samotnej kompenzácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Možné zníženie o 50 %
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vás rerouting dostal do cieľa len s obmedzeným sklzom, kompenzácia sa môže znížiť
                  o polovicu. Tu rozhoduje dĺžka trasy a výsledný čas príchodu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri veľmi neskorom zrušení môže aerolinka tvrdiť mimoriadne okolnosti. Preto je
                  dôležité pozerať aj na dôvod zrušenia, nie len na kalendár.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-red-200 bg-red-50 p-8 dark:border-red-800 dark:bg-red-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri pravidle 14 dní bývajú detaily rozhodujúce. ClaimWinger vie rýchlo rozlíšiť,
                či ide o plnú kompenzáciu, zníženú kompenzáciu po reroutingu alebo skôr o refundáciu
                a presmerovanie bez peňažného nároku.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_cancelled_less_than_14_days_final_cta_cancelled",
                        cancelledFlightHref
                      )
                    }
                  >
                    Preveriť zrušený let
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
                        "sk_cancelled_less_than_14_days_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim skôr meškanie
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
                  Ak chcete prípad preveriť podľa konkrétneho oznámenia, reroutingu a času príletu.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_cancelled_less_than_14_days_related_home",
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
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete nadviazať na základné sumy 250 €, 400 € a 600 € a ich logiku.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o sumách
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Môžem žiadať odškodnenie pri zmene času letu?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Užitočné, ak aerolinka hovorí o zmene času, ale v praxi ide o stav blízky zrušeniu letu.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-pri-zmene-casu-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o zmene času
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
