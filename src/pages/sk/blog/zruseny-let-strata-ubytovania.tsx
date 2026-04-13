import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BedDouble,
  CheckCircle2,
  Clock,
  FileText,
  Home,
  ShieldAlert,
} from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/zruseny-let-strata-ubytovania";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_flight_lost_accommodation";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_flight_lost_accommodation";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_flight_lost_accommodation";

const faqItems = [
  {
    question: "Musí aerolínka automaticky preplatiť prepadnuté ubytovanie v cieľovej destinácii?",
    answer:
      "Nie automaticky. Práva podľa EU261 jasne pokrývajú refundáciu letenky, presmerovanie, starostlivosť a v niektorých prípadoch kompenzáciu. Strata ubytovania v cieľovej destinácii už nebýva taký priamy a automatický nárok ako samotný let.",
  },
  {
    question: "Na čo mám nárok pri zrušenom lete určite?",
    answer:
      "Pri zrušenom lete patrí medzi základné práva voľba medzi refundáciou a presmerovaním, pri relevantných situáciách aj starostlivosť a pri zrušení menej než 14 dní pred odletom často aj kompenzácia, ak aerolínka nepreukáže mimoriadne okolnosti.",
  },
  {
    question: "Má zmysel aj tak žiadať náhradu za prepadnuté ubytovanie?",
    answer:
      "Často áno, ale treba to robiť realisticky. Pomáha flexibilná alebo nevratná rezervácia, dôkaz, že noc či pobyt prepadli práve pre zrušenie letu, a tiež snaha minimalizovať škodu napríklad kontaktom s hotelom alebo platformou hneď po probléme.",
  },
  {
    question: "Čo si mám odložiť ako dôkaz?",
    answer:
      "Potvrdenie rezervácie ubytovania, podmienky storna, potvrdenie o zrušení letu, komunikáciu s hotelom alebo booking platformou, doklad o odmietnutom vrátení peňazí a všetku komunikáciu s aerolinkou o presmerovaní.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ZrusenyLetStrataUbytovaniaPage() {
  return (
    <LayoutSk>
      <SEO
        title="Zrušený let a strata ubytovania: čo sa dá žiadať?"
        description="Čo ak vám zrušený let zničí rezervované ubytovanie? Vysvetľujeme, čo kryje EU261 určite, kde už nejde o automatický nárok a aké dôkazy si odložiť."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Zrušený let a strata ubytovania: čo sa dá žiadať?",
            description:
              "Praktický návod, čo robiť, keď zrušený let spôsobí prepadnutie ubytovania, čo kryje EU261 určite a kde už treba pracovať realisticky s dôkazmi a podmienkami rezervácie.",
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
                name: "Zrušený let a strata ubytovania",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-rose-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
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
            <span>Zrušený let a strata ubytovania</span>
          </div>

          <header className="mb-10">
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Zrušený let a strata ubytovania: čo sa dá žiadať?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Toto je veľmi bolestivý scenár: let sa zruší, cesta sa rozpadne a popri letenke začína
              horieť aj <strong>hotel, apartmán alebo iné ubytovanie</strong>, ktoré ste už mali zaplatené.
              Práve tu je dôležité oddeliť, čo vám dáva <strong>EU261 priamo</strong> a čo už nie je
              automatický nárok len preto, že sa zrušil let.
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
            <Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-red-700 p-8 text-white shadow-xl dark:border-rose-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-rose-50">
                <p>
                  <strong>Zrušený let neznamená automaticky, že aerolínka musí vždy preplatiť aj prepadnuté ubytovanie.</strong>
                </p>
                <p>
                  Podľa pravidiel EÚ máte pri zrušenom lete jasné práva na <strong>refundáciu alebo presmerovanie</strong>,
                  pri potrebe čakania aj na <strong>starostlivosť</strong> a pri niektorých prípadoch aj na
                  <strong> kompenzáciu</strong>. Strata ubytovania v cieli už býva samostatne oveľa spornejšia.
                </p>
                <p>
                  Ak chcete rýchlo preveriť, čo je vo vašom prípade silný nárok a čo už je skôr doplnková
                  škoda, môžete to poslať cez{" "}
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_cancelled_flight_lost_accommodation_quick_answer_home",
                        claimWingerHomeHref
                      )
                    }
                    className="font-semibold underline underline-offset-4"
                  >
                    ClaimWinger Slovensko
                  </a>
                  . ClaimWinger účtuje <strong>30 %</strong> bez ohľadu na to, či sa vec rieši mimosúdne
                  alebo súdne.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zrušený let vám spálil aj hotel alebo apartmán?"
            description="ClaimWinger vie pomôcť oddeliť silný nárok za samotný let od doplnkovej škody okolo ubytovania a zmysluplne nastaviť ďalší postup."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=cancelled_flight_lost_accommodation"
            ctaLabel="Preveriť zrušený let s ClaimWinger"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_cancelled_flight_lost_accommodation_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-8 w-8 text-rose-600" />
              1. Čo kryje EU261 priamo a jasne
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "voľbu medzi refundáciou a presmerovaním",
                "pri čakaní starostlivosť, jedlo a niekedy hotel",
                "pri zrušení menej než 14 dní pred odletom často aj kompenzáciu",
                "pri zlyhaní dopravcu aj preplatenie vlastného náhradného letu za porovnateľných podmienok",
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
              <Home className="h-8 w-8 text-rose-600" />
              2. Kde sa začína problém s ubytovaním
            </h2>
            <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
              <p>
                Ubytovanie v <strong>cieľovej destinácii</strong> nie je to isté čo hotel pri čakaní na
                presmerovanie. To druhé patrí do starostlivosti o cestujúceho a je v pravidlách priamo.
                Ale prepadnutý pobyt v cieli je už skôr dôsledok rozpadu celej cesty.
              </p>
              <p>
                Preto je dôležité neprezentovať takú škodu ako niečo, čo je automaticky a vždy súčasťou
                jednoduchého claimu podľa EU261. Základný a najsilnejší spor býva stále o samotný let,
                presmerovanie, refundáciu a prípadnú kompenzáciu.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <BedDouble className="h-8 w-8 text-rose-600" />
              3. Kedy má zmysel riešiť aj stratu ubytovania
            </h2>
            <div className="grid gap-4">
              {[
                "ubytovanie bolo nevratné alebo sa vrátila len časť ceny",
                "máte jasný dôkaz, že pobyt prepadol priamo pre zrušenie letu",
                "hneď po probléme ste kontaktovali hotel alebo platformu a pokúsili sa škodu znížiť",
                "máte potvrdenie rezervácie, storno podmienky a komunikáciu o odmietnutí refundácie",
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
              <AlertTriangle className="h-8 w-8 text-rose-600" />
              4. Čo urobiť hneď, aby ste si nepokazili pozíciu
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "uložiť si oznámenie o zrušení letu a presný čas, kedy prišlo",
                "vyžiadať si alebo zdokumentovať ponúknuté presmerovanie",
                "hneď kontaktovať hotel, apartmán alebo booking platformu",
                "požiadať o výnimku, zmenu dátumu alebo aspoň čiastočné vrátenie peňazí",
                "odložiť si storno podmienky a odpoveď ubytovania",
                "oddeliť nárok za let od doplnkovej škody okolo pobytu",
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
            <Card className="border-rose-200 bg-rose-50 p-8 dark:border-rose-800 dark:bg-rose-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Praktický poriadok krokov
              </h2>
              <div className="space-y-4 text-base leading-7 text-slate-700 dark:text-slate-300">
                <p>
                  Najprv riešte <strong>to, čo je pri zrušenom lete najpevnejšie</strong>: refundáciu,
                  presmerovanie, starostlivosť a možnú kompenzáciu. Až potom nad tým vrstvite škodu
                  okolo ubytovania.
                </p>
                <p>
                  Takýto postup býva aj presvedčivejší. Ukazuje, že ste sa nesnažili z jedného problému
                  urobiť nekontrolovaný balík nárokov, ale najprv ste stabilizovali samotnú dopravu a
                  zároveň sa rozumne pokúsili minimalizovať stratu pobytu.
                </p>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <Card className="border-rose-200 bg-white p-8 dark:border-rose-800 dark:bg-slate-900">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Neviete, čo je vo vašom prípade silný claim a čo už len doplnková škoda?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger vie pomôcť nastaviť správne poradie: čo riešiť ako základný nárok za let,
                kde má zmysel tlačiť na refundáciu alebo presmerovanie a kde sa už bavíme o strate
                ubytovania, ktorú treba opierať o samostatné dôkazy a realistické očakávania.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_cancelled_flight_lost_accommodation_final_cta_home",
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
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_cancelled_flight_lost_accommodation_final_cta_cancel",
                        cancelledFlightHref
                      )
                    }
                  >
                    Riešim zrušený let
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_cancelled_flight_lost_accommodation_final_cta_delay",
                        delayedFlightHref
                      )
                    }
                  >
                    Riešim meškajúci let
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
