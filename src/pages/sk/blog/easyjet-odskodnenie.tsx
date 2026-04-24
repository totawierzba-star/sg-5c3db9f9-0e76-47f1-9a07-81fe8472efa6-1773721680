import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/easyjet-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=easyjet";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=easyjet";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=easyjet";

const faqItems = [
  {
    question: "Mám pri lete easyJet nárok na odškodnenie podľa EU261?",
    answer:
      "Áno. easyJet je britsko-švajčiarska aerolinka, ktorá operuje prevažne pod sesterskou spoločnosťou easyJet Europe (rakúsky AOC). Lety z Bratislavy, Košíc, Budapešti, Viedne a iných európskych letísk spadajú do EU261 rovnako ako lety akejkoľvek inej EÚ aerolinky.",
  },
  {
    question: "Koľko môžem dostať za meškanie letu easyJet?",
    answer:
      "Pri krátkych letoch do 1 500 km 250 €, pri letoch 1 500 – 3 500 km 400 €, pri letoch nad 3 500 km mimo EÚ 600 €. Väčšina sietí easyJet spadá do prvých dvoch kategórií.",
  },
  {
    question: "Ako podať reklamáciu easyJet?",
    answer:
      "Cez oficiálnu stránku easyJet v sekcii Contact us / EU261 Claim Form. easyJet má jeden z najrýchlejších procesov spomedzi low-cost aerolínií a typicky odpovedá v priebehu 14 – 21 dní.",
  },
  {
    question: "Aké mimoriadne okolnosti easyJet najčastejšie tvrdí?",
    answer:
      "Obvykle uzavretie vzdušného priestoru, zlé počasie, štrajk ATC. Pri sporných prípadoch žiadajte konkrétne dôkazy – mnohé tvrdenia sa neobhája na súde, najmä keď meškanie postihlo len niektoré lety aerolinky v rovnakom čase.",
  },
  {
    question: "Čo pri lete easyJet medzi Bratislavou a UK?",
    answer:
      "Pri lete z EÚ do UK platí EU261 (podľa miesta odletu). Pri lete z UK do EÚ s easyJet UK platí UK261 (takmer identický rámec). V obidvoch prípadoch sú sumy v podobnej výške (250 / 400 / 600 € alebo ekvivalent v GBP).",
  },
  {
    question: "Ako dlho easyJet vypláca kompenzáciu?",
    answer:
      "Pri schválenej reklamácii typicky do 14 dní na bankový účet. easyJet je spomedzi low-cost aerolínií najtransparentnejšia – oficiálne uvádza 60-dňovú hornú lehotu odpovede na reklamáciu.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function EasyJetOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="easyJet odškodnenie: kedy máte nárok a koľko 250–600 €"
        description="easyJet vám meškal, zrušil alebo presunul let? Zistite, kedy vzniká nárok na kompenzáciu podľa EU261/UK261, aké sumy vám patria a ako podať reklamáciu."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "easyJet odškodnenie podľa EU261",
            description:
              "Kedy pri meškaní alebo zrušení letu easyJet vzniká nárok na kompenzáciu a aké sumy patria cestujúcim.",
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
              {
                "@type": "ListItem",
                position: 3,
                name: "easyJet odškodnenie",
                item: articleUrl,
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>easyJet odškodnenie</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
              easyJet · Low-cost aerolinka · EU261 + UK261
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              easyJet odškodnenie: kedy vzniká nárok a koľko dostanete
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              easyJet je britsko-švajčiarska skupina, ktorá pre lety v EÚ operuje pod{" "}
              <strong>easyJet Europe</strong> (rakúsky AOC). Pre slovenských cestujúcich to znamená
              jednu dôležitú vec: pri meškaní alebo zrušení môžete uplatňovať{" "}
              <strong>plné práva podľa EU261</strong> – rovnako ako pri Ryanair či Wizz Air. Zistite
              podmienky nároku a výšku kompenzácie alebo si to overte cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_easyjet_intro", delayedFlightHref)}
              >
                formulár ClaimWinger pre meškajúci let
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
                <span>Čítanie: 9 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-orange-200 bg-gradient-to-br from-orange-600 to-amber-700 p-8 text-white shadow-xl dark:border-orange-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-orange-50">
                <p>
                  <strong>easyJet Europe</strong> (rakúsky AOC) = plne pod EU261. easyJet UK = pod
                  UK261 s ekvivalentnou ochranou.
                </p>
                <p>
                  Sumy: <strong>250 € / 400 € / 600 €</strong> podľa vzdialenosti a trasy.
                </p>
                <p>
                  easyJet má pomerne rýchly proces – typicky odpovedá do 14 – 21 dní, pri schválení
                  vypláca do ďalších 14 dní.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Letelo s easyJet a meškal viac ako 3 hodiny?"
            description="ClaimWinger overí, či vzniká nárok podľa EU261/UK261, pripraví správnu formu reklamácie a spracuje ju za vás. Slovenský formulár, bez platby vopred."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=easyjet"
            ctaLabel="Preveriť nárok easyJet"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár."
            placement="sk_blog_easyjet_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy pri lete easyJet vzniká nárok
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie 3+ hodín pri prílete
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste pri prílete do konečnej destinácie meškali 3 hodiny a viac (podľa otvorenia
                  dverí), máte nárok na paušálnu kompenzáciu, ak neexistujú mimoriadne okolnosti.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Zrušený let s oznámením menej než 14 dní vopred
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak vám easyJet oznámila zrušenie v lehote kratšej ako 14 dní pred plánovaným odletom
                  a neponúkla rozumné presmerovanie, vzniká nárok na kompenzáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Presun letu skôr o viac než 1 hodinu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri posune odletu dopredu o viac ako 1 hodinu ide podľa rozsudku C-146/20 o
                  zrušenie. Pozri článok{" "}
                  <Link
                    href="/sk/blog/predcasny-odlet-letu-odskodnenie"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Predčasný odlet letu – odškodnenie
                  </Link>
                  .
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Odmietnutie nástupu (overbooking)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak ste mali platnú rezerváciu, dostavili ste sa včas na check-in a easyJet vás
                  napriek tomu nevpustila na palubu kvôli overbookingu, nárok vzniká okamžite – bez
                  ohľadu na meškanie.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Koľko dostanete pre typické trasy easyJet
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Lety do 1 500 km. Napr. Viedeň – Berlín, Budapešť – Paríž, Krakov – Londýn Gatwick.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Lety v EÚ nad 1 500 km alebo mimo EÚ 1 500 – 3 500 km. Napr. Viedeň – Lisabon,
                  Budapešť – Hurghada.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  easyJet obvykle nelieta linky nad 3 500 km mimo EÚ. 600 € je preto pri easyJet
                  skôr výnimočné.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako podať reklamáciu easyJet krok za krokom
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 1 – Zhromaždite dôkazy
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rezervácia s PNR, boarding pass, fotografie odletovej tabule, e-maily od easyJet
                  s oznámením o meškaní, účtenky za výdavky.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 2 – Vyplňte EU261 Claim Form
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Na webe easyJet nájdete v sekcii „Contact us" špeciálny formulár pre EU261. Zadajte
                  PNR, číslo letu, dátum a opíšte meškanie s presnými časmi. Odošlite a uložte ID
                  referencia.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 3 – Čakajte do 21 dní na odpoveď
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  easyJet patrí medzi rýchlejšie aerolinky – štandardne reaguje do 21 dní. Pri
                  schválení dostanete na účet do ďalších 14 dní.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 4 – Pri zamietnutí eskalujte
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak easyJet tvrdí mimoriadne okolnosti, žiadajte dôkazy. Následne eskalujte na
                  Dopravný úrad SR alebo odovzdajte prípad špecializovanej firme (napr. ClaimWinger).
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                easyJet vám meškal alebo zrušil let?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger overí nárok zdarma, pripraví reklamáciu priamo na easyJet a pri zamietnutí
                eskaluje cez súd. Provízia 30 % len pri úspechu. Preverenie trvá pár minút.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_easyjet_final_primary", delayedFlightHref)}
                  >
                    Preveriť meškajúci let
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_easyjet_final_secondary", cancelledFlightHref)}
                  >
                    Preveriť zrušený let
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
                  Platí odškodnenie aj pre low-cost lety?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  easyJet, Wizz Air, Ryanair – EU261 nerozlišuje.
                </p>
                <Link
                  href="/sk/blog/plati-odskodnenie-aj-pre-low-cost-lety"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ryanair problémy a práva
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Paralelný sprievodca pre cestujúcich Ryanair.
                </p>
                <Link
                  href="/sk/blog/ryanair-problemy-prawa"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Wizz Air odškodnenie
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Porovnanie nároku pri Wizz Air – ďalšej populárnej low-cost v regióne.
                </p>
                <Link
                  href="/sk/blog/wizz-air-odszkodowanie"
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
