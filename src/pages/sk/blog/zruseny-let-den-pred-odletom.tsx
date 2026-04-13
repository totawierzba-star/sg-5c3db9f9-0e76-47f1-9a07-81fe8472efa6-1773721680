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

const articleUrl = "https://problemlot.com/sk/blog/zruseny-let-den-pred-odletom";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_day_before_departure";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_day_before_departure";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=cancelled_day_before_departure";

const faqItems = [
  {
    question: "Ak mi let zrušili deň pred odletom, vzniká nárok automaticky?",
    answer:
      "Nie úplne automaticky, ale vaša pozícia býva veľmi silná. Pri zrušení deň pred odletom sa už spravidla pohybujeme v pásme menej ako 7 dní, takže kľúčové bude, aký rerouting vám aerolinka ponúkla a či preukáže mimoriadne okolnosti.",
  },
  {
    question: "Čo je pri zrušení deň pred odletom najdôležitejšie?",
    answer:
      "Najdôležitejšie je uložiť si pôvodný itinerár, oznámenie o zrušení, nový ponúknutý let a výsledný čas príletu do konečnej destinácie. Práve tieto detaily rozhodujú o kompenzácii.",
  },
  {
    question: "Môžem dostať aj refundáciu alebo presmerovanie?",
    answer:
      "Áno. Aj keď sa ešte rieši, či vzniká peňažná kompenzácia, stále môžete mať právo na refundáciu ceny letenky alebo na presmerovanie do cieľa.",
  },
  {
    question: "Môže aerolinka aj pri zrušení deň pred odletom odmietnuť kompenzáciu?",
    answer:
      "Áno, najčastejšie s odvolaním na mimoriadne okolnosti alebo na vhodne ponúknutý rerouting. Preto je dôležité nepozerať len na samotný kalendár, ale na celý výsledok prípadu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function ZrusenyLetDenPredOdletomPage() {
  return (
    <LayoutSk>
      <SEO
        title="Zrušený let deň pred odletom: čo môžete žiadať a kedy vzniká nárok?"
        description="Čo robiť, ak vám aerolinka zruší let deň pred odletom? Vysvetľujeme kompenzáciu, rerouting, refundáciu, dokumenty aj to, kedy môže byť vaša pozícia veľmi silná."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Zrušený let deň pred odletom: čo môžete žiadať a kedy vzniká nárok?",
            description:
              "Praktický sprievodca pre situáciu, keď aerolinka zruší let deň pred odletom, vrátane kompenzácie, reroutingu, refundácie a dôkazov, ktoré si treba uložiť.",
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
                name: "Zrušený let deň pred odletom",
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
            <span>Zrušený let deň pred odletom</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              Edge case content pre last-minute zrušenie
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Zrušený let deň pred odletom: čo môžete žiadať a kedy vzniká nárok?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak vám aerolinka zrušila let <strong>deň pred odletom</strong>, nejde len o nepríjemnosť,
              ale často o veľmi silný prípad. Stále však treba vyhodnotiť, aký nový let vám ponúkli,
              aký bol výsledok v <strong>konečnej destinácii</strong> a či aerolinka vôbec vie
              preukázať <strong>mimoriadne okolnosti</strong>.
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
            <Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-red-700 p-8 text-white shadow-xl dark:border-rose-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-rose-50">
                <p>
                  <strong>Áno, pozícia pasažiera býva často veľmi silná.</strong> Zrušenie deň pred
                  odletom sa už prakticky nachádza v pásme menej ako 7 dní.
                </p>
                <p>
                  To však neznamená, že kompenzácia vzniká bez ďalšieho skúmania. Treba skontrolovať
                  <strong> rerouting</strong>, výsledný prílet do cieľa a dôvod zrušenia.
                </p>
                <p>
                  Popri kompenzácii sa stále rieši aj <strong>refundácia</strong> alebo
                  <strong> presmerovanie</strong>.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Zrušili vám let deň pred odletom?"
            description="ClaimWinger vie rýchlo preveriť, či ide o plnú kompenzáciu, spor o mimoriadne okolnosti alebo prípad, kde treba čítať najmä rerouting a výsledný čas príletu."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=cancelled_day_before_departure"
            ctaLabel="Preveriť zrušený let s ClaimWinger"
            loadingLabel="Načítava sa formulár pre zrušený let..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár ClaimWinger pre zrušené lety."
            placement="sk_blog_cancelled_day_before_departure_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Prečo je tento scenár taký dôležitý
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <AlertCircle className="mb-3 h-6 w-6 text-rose-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Veľmi neskoré oznámenie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Deň pred odletom je z pohľadu pasažiera veľmi neskoro. To často posúva prípad do
                  silnejšieho pásma pri posudzovaní nároku.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <Clock className="mb-3 h-6 w-6 text-rose-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Kľúčový je nový let
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Samotné zrušenie nestačí. Rozhoduje, ako skoro či neskoro vás nový let dostal do
                  konečnej destinácie.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <CheckCircle2 className="mb-3 h-6 w-6 text-rose-600" />
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dôkazy sú po ruke
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri zrušení deň pred odletom býva ešte ľahšie zachytiť oznámenie, pôvodný itinerár
                  a novú ponuku od aerolinky. To je veľká výhoda.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si uložiť hneď po oznámení
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "e-mail, SMS alebo push notifikáciu o zrušení",
                "pôvodný čas odletu a príletu",
                "nový ponúknutý let alebo jeho chýbanie",
                "PNR, číslo letu a boarding pass, ak ho už máte",
                "výsledný čas príletu do konečnej destinácie",
                "komunikáciu o dôvode zrušenia",
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
              Kedy býva prípad najsilnejší
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Slabý alebo nevýhodný rerouting
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vám aerolinka ponúkla nový let, ktorý vás dostal do cieľa výrazne neskôr, býva
                  to pre nárok dôležitý plusový bod.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Nejasný alebo slabý dôvod zrušenia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka len všeobecne tvrdí prevádzkový problém alebo nič poriadne nevysvetlí,
                  prípad býva často silnejší než pri jasne doložených mimoriadnych okolnostiach.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Silný dôkazný balík
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Čím lepšie viete ukázať pôvodný plán, nový plán a reálny výsledok cesty, tým ľahšie
                  sa prípad vyhodnocuje.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
              <Clock className="h-8 w-8 text-rose-600" />
              Čo sa rieši popri kompenzácii
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Refundácia alebo presmerovanie
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Zrušenie deň pred odletom neznamená len kompenzáciu. Stále treba riešiť, či chcete
                  peniaze späť alebo nový let do cieľa.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Možné zníženie po náhradnom lete
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vás rerouting dostal do cieľa relatívne blízko pôvodného času, výsledná kompenzácia
                  môže byť nižšia alebo nemusí vzniknúť.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Mimoriadne okolnosti
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri zrušení deň pred odletom sa aerolinka môže brániť mimoriadnymi okolnosťami.
                  Preto netreba pozerať len na samotný kalendár.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-rose-200 bg-rose-50 p-8 dark:border-rose-800 dark:bg-rose-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Chcete si nárok preveriť hneď?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Pri zrušení deň pred odletom býva prípad často silný, ale detaily reroutingu a dôvodu
                zrušenia stále rozhodujú. ClaimWinger vie rýchlo oddeliť plnú kompenzáciu od slabšieho
                alebo sporného scenára.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick(
                        "sk_cancelled_day_before_departure_final_cta_cancelled",
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
                        "sk_cancelled_day_before_departure_final_cta_delay",
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
                  Ak chcete prípad preveriť podľa konkrétneho oznámenia, nového letu a dôvodu zrušenia.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick(
                      "sk_cancelled_day_before_departure_related_home",
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
                  Zrušený let menej ako 14 dní pred odletom
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete širší kontext pravidla 14 dní, okna 7 až 14 dní a logiky reroutingu.
                </p>
                <Link
                  href="/sk/blog/zruseny-let-menej-ako-14-dni-pred-odletom"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na širší edge case
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak chcete nadviazať na sumy 250 €, 400 € a 600 € a ich technickú logiku.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o sumách
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
