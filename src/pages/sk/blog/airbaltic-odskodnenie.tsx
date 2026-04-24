import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/airbaltic-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airbaltic";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airbaltic";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=airbaltic";

const faqItems = [
  {
    question: "airBaltic je EÚ aerolinka?",
    answer:
      "Áno. airBaltic (kód BT) je lotyšská vlajková aerolinka so sídlom v Rige a lotyšským AOC. Lety pod jej značkou plne podliehajú EU261 pri odlete z EÚ a pri návrate z tretích krajín.",
  },
  {
    question: "Koľko dostanem za meškanie letu airBaltic?",
    answer:
      "250 € pri krátkych letoch do 1 500 km, 400 € v rámci EÚ nad 1 500 km alebo mimo EÚ 1 500 – 3 500 km. airBaltic neoperuje long-haul, takže 600 € sa prakticky nevyskytuje.",
  },
  {
    question: "airBaltic lieta z Bratislavy alebo Košíc?",
    answer:
      "Nie priamo. Pre slovenských cestujúcich je najčastejší let cez Rigu, Tallinn alebo Vilnius ako baltický hub na škandinávske a fínske destinácie. Lety z Viedne alebo Budapešti do Rigy sú bežné.",
  },
  {
    question: "Ako reklamovať airBaltic?",
    answer:
      "Cez formulár Customer Support / EU261 Claim na airbaltic.com. airBaltic má štruktúrovaný proces – odpoveď typicky do 4 – 6 týždňov. Reklamáciu pošlite v angličtine.",
  },
  {
    question: "Aké mimoriadne okolnosti airBaltic najčastejšie tvrdí?",
    answer:
      "Zlé počasie v baltickom regióne (najmä v zime), štrajk ATC, problémy s vojenským leteckým priestorom pri východnej hranici EÚ. Prípady zvyčajne sa opierajú o reálne meteorologické reporty, preto bývajú ťažšie na vyvrátenie.",
  },
  {
    question: "airBaltic operuje aj wet-lease pre iné aerolinky?",
    answer:
      "Áno. airBaltic wet-leasuje lietadlá Airbus A220 pre Lufthansu, SAS a iných. Pri takomto lete reklamujete aerolinku uvedenú ako operated by – typicky airBaltic, keďže posádka aj AOC sú jej.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function AirBalticOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="airBaltic odškodnenie: EU261 nárok pri lete cez Rigu"
        description="airBaltic meškal alebo zrušil let cez Rigu, Tallinn alebo Vilnius? Prehľad nárokov podľa EU261, typických trás a postupu reklamácie."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "airBaltic odškodnenie podľa EU261",
            description:
              "Sprievodca nárokom na kompenzáciu pri meškaní alebo zrušení letu lotyšskej aerolinky airBaltic.",
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
              { "@type": "ListItem", position: 3, name: "airBaltic odškodnenie", item: articleUrl },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>airBaltic odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
              airBaltic · Lotyšská vlajková · baltický hub
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              airBaltic odškodnenie podľa EU261
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              airBaltic (kód <strong>BT</strong>) je lotyšská vlajková aerolinka a jedna z najväčších
              leteckých spoločností v Pobaltí. Slovenskí cestujúci ju najčastejšie stretnú pri
              prestupoch cez <strong>Rigu</strong> na škandinávske, fínske alebo baltické destinácie.
              Ako EÚ aerolinka plne podlieha EU261 – pri meškaní nad 3 hodiny alebo zrušení nárok
              250 – 400 €. Overte si situáciu cez{" "}
              <a
                href={claimWingerHomeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_airbaltic_intro", claimWingerHomeHref)}
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
            <Card className="border-green-200 bg-gradient-to-br from-green-600 to-emerald-700 p-8 text-white shadow-xl dark:border-green-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-green-50">
                <p>
                  airBaltic = EÚ aerolinka = plné EU261. Sumy typicky <strong>250 € alebo 400 €</strong>
                  (long-haul nelietajú).
                </p>
                <p>
                  Pozor pri wet-lease – pri lete predanom Lufthansou alebo SAS, ale operovanom
                  airBaltic, reklamujete <strong>airBaltic</strong>.
                </p>
                <p>
                  Najčastejšie uvádzané mimoriadne okolnosti: zimné počasie nad Baltikom, uzavretý
                  vojenský priestor. Žiadajte dôkazy.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="airBaltic pokazil váš prestup v Rige?"
            description="Baltické prípady bývajú komplikované kvôli wet-lease dohodám. ClaimWinger presne identifikuje operujúcu aerolinku a podá reklamáciu správnej strane."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=airbaltic"
            ctaLabel="Preveriť airBaltic prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_airbaltic_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické trasy airBaltic a kompenzácia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Viedeň – Riga
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~1 200 km, krátka trasa = 250 € pri 3+ hodinovom meškaní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Riga – Helsinky / Štokholm / Kodaň
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~400 – 800 km, krátka trasa = 250 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Riga – Dubaj / Tel Aviv / Tbilisi
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  ~2 800 – 3 400 km mimo EÚ = 400 €.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Tallinn – Viedeň (wet-lease pre Lufthansu/Austrian)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj pri kódshare s Austrian, operujúca aerolinka je airBaltic = reklamujete airBaltic.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Špecifiká baltického regiónu
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>Pri reklamáciách airBaltic treba počítať s tromi špecifikami:</p>
              <ul>
                <li>
                  <strong>Zimné počasie</strong> – v decembri a januári bývajú skutočne ťažké zimy.
                  airBaltic sa na ne často odvoláva. Pri stálom zlom počasí je to mimoriadna okolnosť.
                </li>
                <li>
                  <strong>Uzavretý vzdušný priestor pri východnej hranici EÚ</strong> – po invázii
                  Ruska na Ukrajinu sú niektoré letové koridory uzavreté. Ak ide o vonkajší dôvod,
                  je to mimoriadna okolnosť.
                </li>
                <li>
                  <strong>Wet-lease pre iné aerolinky</strong> – airBaltic prenajíma svoje A220 aj
                  posádku Lufthansa Group, SAS a iným. Pri takomto lete je <em>operated by</em>{" "}
                  airBaltic – to je zodpovedná strana za EU261.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Prípady airBaltic vieme riešiť v plnej šírke
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger má skúsenosť aj s wet-lease prípadmi a lotyšskými spormi. Preverenie
                zdarma, podávanie reklamácie v angličtine, pri zamietnutí eskalácia.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_airbaltic_final_primary", delayedFlightHref)}
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
                    onClick={() => trackClaimClick("sk_airbaltic_final_secondary", cancelledFlightHref)}
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
                  Codeshare a kto platí
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kľúčové pre airBaltic wet-lease lety.
                </p>
                <Link
                  href="/sk/blog/kto-zaplati-odskodnenie-codeshare-lety"
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
                  Kedy zlé počasie zbavuje aerolinku povinnosti platiť.
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
                  Zmeškaný prestup
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Bežné pri hubových prestupoch cez Rigu.
                </p>
                <Link
                  href="/sk/blog/zmeskany-prestup-kompenzacia"
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
