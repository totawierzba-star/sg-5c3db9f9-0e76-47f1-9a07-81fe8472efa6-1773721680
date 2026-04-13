import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl =
  "https://problemlot.com/sk/blog/mozem-ziadat-odskodnenie-ak-som-prijal-voucher";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=accepted_voucher";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=accepted_voucher";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=accepted_voucher";

const faqItems = [
  {
    question: "Môžem žiadať odškodnenie, ak som prijal voucher?",
    answer:
      "Často áno, ale záleží na tom, čo presne voucher riešil. Ak išlo len o poukaz na refundáciu ceny letenky alebo o pomoc od aerolinky, samé o sebe to ešte nemusí zrušiť nárok na samostatnú kompenzáciu.",
  },
  {
    question: "Znamená prijatie voucheru automaticky, že som sa vzdal peňazí?",
    answer:
      "Nie automaticky. Podľa pravidiel EU261 musí byť voucher namiesto peňazí založený na jasnom a informovanom súhlase cestujúceho. Ak išlo o nejasný alebo vynútený výber, vec môže byť sporná.",
  },
  {
    question: "Je rozdiel medzi voucherom za refundáciu a voucherom za kompenzáciu?",
    answer:
      "Áno. Refundácia rieši cenu letenky, kompenzácia rieši nepríjemnosti a stratu času. To sú dve odlišné veci a voucher môže v praxi pokrývať jednu z nich, nie nevyhnutne obe.",
  },
  {
    question: "Čo ak som klikol na voucher online formulárom?",
    answer:
      "To už môže byť silnejší znak súhlasu, ak ste mali jasné informácie a vedome ste si voucher zvolili namiesto peňazí. Stále však treba pozerať na to, čo presne ste prijali a či šlo o refundáciu, kompenzáciu alebo celkové vyrovnanie.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MozemZiadatOdskodnenieAkSomPrijalVoucherPage() {
  return (
    <LayoutSk>
      <SEO
        title="Môžem žiadať odškodnenie, ak som prijal voucher? Áno, ale záleží na detailoch"
        description="Prijali ste voucher od aerolinky a neviete, či ešte môžete žiadať odškodnenie? Vysvetľujeme rozdiel medzi refundáciou, kompenzáciou a poukazom ako formou vyplatenia."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Môžem žiadať odškodnenie, ak som prijal voucher?",
            description:
              "Praktické vysvetlenie, kedy prijatie voucheru ešte nevylučuje kompenzáciu a prečo treba rozlišovať medzi refundáciou, kompenzáciou a pomocou od aerolinky.",
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
                name: "Môžem žiadať odškodnenie, ak som prijal voucher?",
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
            <span>Môžem žiadať odškodnenie, ak som prijal voucher?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Praktický sprievodca pre vouchery a poukazy
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Môžem žiadať odškodnenie, ak som prijal voucher?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Často áno, ale odpoveď závisí od toho, čo presne voucher predstavoval. Iné pravidlá
              platia pre poukaz namiesto refundácie letenky, iné pre voucher ako formu kompenzácie
              a iné pre obyčajné občerstvenie alebo hotel od aerolinky.
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
            <Card className="border-amber-200 bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  <strong>Prijatie voucheru automaticky neznamená, že ste prišli o každý ďalší nárok.</strong>
                </p>
                <p>
                  Najprv treba zistiť, či voucher riešil <strong>refundáciu ceny letenky</strong>,
                  <strong> samostatnú kompenzáciu</strong>, alebo iba nejaké pomocné plnenie od
                  aerolinky počas čakania.
                </p>
                <p>
                  Podľa EU261 má byť voucher namiesto peňazí viazaný na <strong>jasný a informovaný
                  súhlas cestujúceho</strong>, nie iba na nenápadné vnucenie jednej možnosti.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Prijali ste voucher a neviete, či ešte máte nárok?"
            description="Ak vám aerolinka ponúkla poukaz a nie ste si istí, či tým zanikla aj kompenzácia, ClaimWinger vie posúdiť, čo presne voucher pokrýval a či prípad stále dáva zmysel."
            ctaHref="https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=accepted_voucher"
            ctaLabel="Preveriť voucherový prípad"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie prípadu."
            placement="sk_blog_accepted_voucher_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Najdôležitejšia vec: čo presne ste voucherom prijali
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Voucher ako refundácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu sa rieši len cena letenky. Samotné prijatie refundácie vo forme voucheru nemusí
                  automaticky zabiť oddelený nárok na kompenzáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Voucher ako kompenzácia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vám aerolinka výslovne vyplatila kompenzáciu voucherom a vy ste to vedome prijali,
                  spor sa už točí skôr okolo formy a informovaného súhlasu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Voucher ako pomoc počas problému
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Jedlo, hotel, občerstvenie alebo drobný letiskový poukaz spravidla nie sú to isté
                  ako konečná kompenzácia za celý prípad.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy voucher ešte nemusí znamenať koniec nároku
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Ak vám aerolinka po zrušení letu alebo pri meškaní poslala voucher bez jasného
                vysvetlenia, čo tým presne uhrádza, nemusí to automaticky znamenať, že ste sa vzdali
                peňazí. Podľa pravidiel EU261 má byť refundácia alebo kompenzácia voucherom založená
                na <strong>slobodnom a informovanom súhlase</strong>.
              </p>
              <p>
                To znamená, že by ste mali vedieť, aké možnosti ste mali k dispozícii, a vedome sa
                rozhodnúť pre voucher namiesto peňažnej formy. Ak takáto voľba nebola férová alebo
                jasná, prípad môže byť stále otvorený na ďalšie posúdenie.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy je situácia zložitejšia
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Výslovne ste si zvolili voucher namiesto peňazí
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste vo formulári jasne a vedome zvolili voucher ako spôsob refundácie alebo
                  kompenzácie, aerolinka bude tvrdiť, že išlo o platný súhlas.
                </p>
              </Card>
              <Card className="border-amber-200 p-6 dark:border-amber-800">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Voucher mal byť „plné vyrovnanie“
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka tvrdí, že voucher pokryl celý prípad vrátane kompenzácie, treba veľmi
                  presne pozrieť podmienky a text, ktorý ste odsúhlasili.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Praktické scenáre
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Aerolinka zrušila let a poslala voucher za cenu letenky
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Tu sa často stále oplatí preveriť, či nevzniká aj samostatná kompenzácia za zrušený
                  let podľa pravidla 14 dní a reroutingu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Dostali ste letiskový voucher na jedlo alebo hotel
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  To zvyčajne nie je konečné vysporiadanie kompenzácie. Ide skôr o povinnú pomoc pri
                  probléme s letom.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Vyplnili ste online formulár a vedome zvolili voucher namiesto peňazí
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Vtedy sa už rieši, či bol váš súhlas jasný, výslovný a informovaný, a čo presne
                  bolo predmetom tejto voľby.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Čo si skontrolovať, ak ste voucher už prijali
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "aký bol presný text emailu alebo formulára",
                "či voucher nahrádzal refundáciu, kompenzáciu alebo oboje",
                "či ste mali reálnu možnosť vybrať si peniaze namiesto voucheru",
                "či išlo o zrušený let, meškanie alebo iný problém",
                "či ste dostali aj samostatné potvrdenie o kompenzácii",
                "či ste niekde výslovne odsúhlasili plné vyrovnanie nároku",
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
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Prijali ste voucher a nechcete sa spoliehať len na výklad aerolinky?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                To je rozumný prístup. Pri voucherových prípadoch často rozhodujú detaily formulácie,
                typ problému s letom a to, či išlo o skutočne informovaný súhlas. Preto má zmysel
                nechať si situáciu preveriť individuálne.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={claimWingerHomeHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_accepted_voucher_final_cta_primary", claimWingerHomeHref)
                    }
                  >
                    Preveriť môj voucherový prípad
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_accepted_voucher_final_cta_secondary", cancelledFlightHref)
                    }
                  >
                    Riešim skôr zrušený let
                  </a>
                </Button>
              </div>
            </Card>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Súvisiace články
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zrušený let a peniaze
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak voucher prišiel po zrušení letu, pozrite si aj článok o tom, koľko patrí za
                  zrušený let a kedy sa suma môže znížiť.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok o zrušenom lete
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Voucher vs hotovosť
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Máte pochybnosť, či bol poukaz vôbec lepšia voľba než peniaze? U starších claimov
                  často rozhoduje práve táto otázka.
                </p>
                <a
                  href={delayedFlightHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_accepted_voucher_related_delayed", delayedFlightHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Preveriť meškajúci let v ClaimWingeri
                </a>
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
