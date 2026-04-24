import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/predcasny-odlet-letu-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=early_departure";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=early_departure";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=early_departure";

const faqItems = [
  {
    question: "Môžem žiadať odškodnenie, ak aerolínka posunula let na skôr?",
    answer:
      "Áno, pri posunutí odletu o viac ako 1 hodinu skôr sa let podľa pravidiel EÚ považuje za zrušený. V praxi to znamená, že môžete mať nárok na kompenzáciu 250, 400 alebo 600 € podľa vzdialenosti, najmä ak vás aerolinka informovala menej než 14 dní pred pôvodným odletom.",
  },
  {
    question: "Čo ak bol let posunutý len o pár minút skôr?",
    answer:
      "Menšie posuny dopredu (pod 1 hodinu) sa zatiaľ nepovažujú za zrušenie podľa EU261. V takom prípade zvyčajne nárok na kompenzáciu nevzniká, pokiaľ nedošlo k reálnemu meškaniu pri príchode do konečnej destinácie aspoň o 3 hodiny.",
  },
  {
    question: "Čo ak som zmeškal let, lebo odletel skôr?",
    answer:
      "Ak vás aerolinka o posunutí riadne neinformovala alebo vás informovala neskoro, máte nárok na refundáciu a pravdepodobne aj na kompenzáciu. Dôležité je zdokumentovať, kedy vám prišlo oznámenie a kedy ste sa dostavili na letisko.",
  },
  {
    question: "Platí to aj pri low-cost aerolinkách ako Ryanair alebo Wizz Air?",
    answer:
      "Áno. Pravidlo o posunutí odletu o viac než 1 hodinu skôr platí pre všetky aerolinky pod EU261 bez ohľadu na to, či ide o tradičnú alebo low-cost spoločnosť. Ryanair aj Wizz Air musia rešpektovať rovnaký režim ako Lufthansa či Air France.",
  },
  {
    question: "Do akej doby po predčasnom odlete môžem žiadať odškodnenie?",
    answer:
      "Na Slovensku je všeobecná premlčacia doba pri takýchto nárokoch 3 roky od plánovaného odletu. Čím skôr prípad začnete riešiť, tým lepšie, pretože dokumenty aj svedectvá sú čerstvé.",
  },
  {
    question: "Ako dokážem, že ma aerolinka neinformovala včas?",
    answer:
      "Zálohujte si všetky e-maily, SMS a správy od aerolinky vrátane dátumov a času doručenia. Ak ste sa o zmene dozvedeli až na letisku, môže pomôcť fotografia odletovej tabule, svedectvo zamestnancov alebo PIR protokol.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function PredcasnyOdletLetuOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Predčasný odlet letu: máte nárok na odškodnenie 250–600 €?"
        description="Posunula aerolinka let na skôr? Vysvetľujeme, kedy EÚ považuje predčasný odlet za zrušenie, aká výška kompenzácie vám patrí a ako postupovať pri reklamácii."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Predčasný odlet letu: máte nárok na odškodnenie?",
            description:
              "Kedy sa posunutie odletu na skôr považuje za zrušenie podľa EU261, aké sumy môžete žiadať a ako postupovať pri reklamácii voči aerolinke.",
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
                name: "Predčasný odlet letu: máte nárok na odškodnenie?",
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
            <span>Predčasný odlet letu: máte nárok na odškodnenie?</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
              Praktická odpoveď pri predčasnom odlete
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Predčasný odlet letu: máte nárok na odškodnenie 250–600 €?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ak aerolinka posunula váš let <strong>o viac než 1 hodinu skôr</strong>, pravidlá EÚ to
              považujú za <strong>zrušenie letu</strong>. V takom prípade môžete mať nárok na kompenzáciu
              250, 400 alebo 600 € a zároveň aj na refundáciu alebo presmerovanie. Hneď po prvom akapite
              si môžete situáciu preveriť na{" "}
              <a
                href={cancelledFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_early_departure_intro_link", cancelledFlightHref)}
              >
                ClaimWinger Slovensko – zrušený let
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
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          <section className="mb-10">
            <Card className="border-amber-200 bg-gradient-to-br from-amber-600 to-orange-700 p-8 text-white shadow-xl dark:border-amber-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-amber-50">
                <p>
                  <strong>Áno</strong>, ak bol odlet posunutý <strong>o viac než 1 hodinu skôr</strong>,
                  ide podľa Súdneho dvora EÚ (vec C-146/20) o <strong>zrušenie letu</strong>.
                </p>
                <p>
                  Výška kompenzácie podľa EU261: <strong>250 € do 1 500 km</strong>,{" "}
                  <strong>400 € v rámci EÚ nad 1 500 km alebo medzi 1 500 a 3 500 km</strong>,{" "}
                  <strong>600 € nad 3 500 km mimo EÚ</strong>.
                </p>
                <p>
                  Kľúčové je to, <strong>kedy</strong> vás aerolinka o zmene informovala — čím neskôr,
                  tým silnejší je váš nárok na plnú kompenzáciu.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Posunuli vám let na skôr? Preverte si nárok ešte dnes"
            description="ClaimWinger vám v slovenčine a zadarmo vypočíta pravdepodobnú výšku kompenzácie pri predčasnom odlete, skontroluje, či vás aerolinka informovala včas, a pripraví ďalšie kroky reklamácie."
            ctaHref="https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=early_departure"
            ctaLabel="Preveriť nárok pri predčasnom odlete"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie predčasného odletu."
            placement="sk_blog_early_departure_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Právny základ: prečo je predčasný odlet „zrušenie letu"
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Nariadenie <strong>EC 261/2004</strong> rozlišuje tri hlavné situácie: meškanie, zrušenie
                a odmietnutie nástupu. Posunutie odletu na skôr sa na prvý pohľad v texte pôvodného
                nariadenia vôbec nespomína — a aerolinky to dlho využívali, aby sa vyhli povinnosti
                platiť kompenzáciu.
              </p>
              <p>
                Súdny dvor EÚ to však jasne zmenil v rozsudku v spojených veciach{" "}
                <strong>C-188/20, C-196/20 a C-146/20</strong> z 21. decembra 2021. Tam sudcovia
                konštatovali: ak sa odlet posunie dopredu <strong>o viac než 1 hodinu</strong>, nejde
                o menšiu úpravu letového poriadku, ale o <strong>zrušenie pôvodného letu</strong>{" "}
                s vytvorením nového letu.
              </p>
              <p>
                Z toho vyplýva jedna zásadná vec: cestujúci má v tomto prípade rovnaké práva ako pri
                klasickom zrušení — vrátane <strong>refundácie</strong>, <strong>presmerovania</strong>{" "}
                a <strong>paušálnej kompenzácie 250 / 400 / 600 €</strong>, ak nebol informovaný aspoň
                14 dní pred pôvodným odletom.
              </p>
              <p>
                Oficiálne to potvrdzuje aj portál <strong>Your Europe</strong> prevádzkovaný Európskou
                komisiou, ktorý v časti práva cestujúcich výslovne uvádza, že posunutie odletu o viac
                než 1 hodinu dopredu spadá do režimu zrušeného letu.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Koľko peňazí môžete pri predčasnom odlete žiadať
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">250 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Lety do <strong>1 500 km</strong>. Napríklad Bratislava – Rím, Viedeň – Paríž, Košice –
                  Londýn. Ak vás aerolinka informovala menej ako 14 dní vopred a nenavrhla rozumnú
                  alternatívu, pripadá vám plná suma.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">400 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Lety <strong>nad 1 500 km v rámci EÚ</strong> alebo{" "}
                  <strong>1 500 – 3 500 km mimo EÚ</strong>. Typické trasy: Viedeň – Lisabon, Bratislava
                  – Istanbul, Viedeň – Dubaj.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">600 €</h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Lety <strong>nad 3 500 km</strong> mimo EÚ. Medzikontinentálne spojenia ako Viedeň –
                  New York, Viedeň – Bangkok či Viedeň – Tokio. Tu je dopad predčasného odletu najhorší,
                  preto aj suma najvyššia.
                </p>
              </Card>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Výpočet presnej sumy pre vašu trasu si môžete rýchlo overiť cez{" "}
              <a
                href="https://claimwinger.com/sk/ako-to-funguje?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=early_departure"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() =>
                  trackClaimClick(
                    "sk_early_departure_how_it_works",
                    "https://claimwinger.com/sk/ako-to-funguje",
                  )
                }
              >
                ako funguje proces ClaimWinger
              </a>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Pravidlo 14 dní: kedy vzniká plný nárok
            </h2>
            <p className="mb-6 text-slate-700 dark:text-slate-300">
              Pri predčasnom odlete sa ráta výlučne to, <strong>kedy</strong> vás aerolinka o zmene
              informovala. Pravidlá EÚ rozlišujú tri okná:
            </p>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Viac než 14 dní pred odletom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka má splnenú informačnú povinnosť. Paušálna kompenzácia zvyčajne nevzniká.
                  Máte však stále právo na <strong>refundáciu</strong> alebo{" "}
                  <strong>presmerovanie</strong>, ak vám nová podoba letu nevyhovuje.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  7 – 14 dní pred odletom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Kompenzácia sa vypláca, ak aerolinka neponúkla presmerovanie, ktoré odlieta najviac
                  2 hodiny pred pôvodným časom a prilieta najviac 4 hodiny po pôvodnom príchode. Pri
                  predčasnom odlete to býva ťažké splniť, preto nárok býva silný.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Menej než 7 dní pred odletom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Najsilnejšia pozícia pre cestujúceho. Kompenzácia sa vypláca takmer vždy, pokiaľ vám
                  nenavrhli presmerovanie s odletom najskôr 1 hodinu pred a s príchodom najneskôr 2
                  hodiny po pôvodnom čase.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Štyri najčastejšie scenáre predčasného odletu
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  1. Aerolinka vás o zmene informovala SMS/e-mailom tesne pred odletom
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Typický scenár: večer pred letom príde SMS, že let odlieta o 2 hodiny skôr. Cestujúci
                  často nestihnú pricestovať na letisko načas. Tu sa spájajú dve porušenia — neskorá
                  informácia aj fakticky zmeškaný let. Nárok na kompenzáciu je v tomto prípade veľmi
                  silný.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  2. Informácia prišla včas, ale ponuka nového letu nevyhovuje
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka oznámi zmenu 20 dní vopred, ale skorší odlet vám rozbije plán (pracovná
                  cesta, svadba, spoj s iným letom). V tomto prípade máte právo na plnú refundáciu
                  bez storna a hľadať alternatívu. Kompenzácia býva otvorená, najmä ak konečný čas
                  príletu meškal o 3+ hodiny oproti pôvodnému.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  3. Let sa posunul o menej než hodinu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pod 60 minút ešte nejde o zrušenie. Sám osebe nárok na kompenzáciu nevzniká. Pozerajte
                  ale na reálny dopad: ak sa celá trasa skončila 3+ hodinami meškania pri prílete do
                  konečnej destinácie, môže ísť o iný typ nároku podľa EU261 (dlhé meškanie).
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  4. Nový let priletel do cieľa skôr (bez meškania)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aj v tomto prípade môžete mať nárok, ak vás aerolinka informovala neskoro (do 14 dní).
                  Skorší príchod nie je sám osebe „záchrana" pre aerolinku — cestujúci mal svoj plán,
                  ktorý bol zásahom narušený. Ide o kľúčové zistenie z rozsudku C-146/20.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Dôkazový checklist pri predčasnom odlete
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "presný pôvodný plánovaný čas odletu",
                "presný nový čas odletu, ktorý aerolinka oznámila",
                "dátum a čas, kedy vám prišla SMS alebo e-mail so zmenou",
                "celá korešpondencia s aerolinkou (úplné e-mailové hlavičky)",
                "rezervačný kód (PNR) a číslo letu",
                "boarding pass alebo potvrdenie o check-ine, ak existuje",
                "doklady o dodatočných nákladoch (hotel, taxi, nový lístok)",
                "či ste nastúpili na nový let, alebo ste ho zmeškali",
              ].map((item) => (
                <Card key={item} className="border-slate-200 p-4 dark:border-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Ak neviete, čo presne zdokumentovať, jednoduchý postup nájdete na{" "}
              <Link
                href="/sk/blog/ake-dokumenty-potrebujem-na-reklamaciu"
                className="font-semibold text-blue-600 underline underline-offset-4"
              >
                blogu o dokumentoch pre reklamáciu
              </Link>
              .
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Kedy aerolinka nemusí platiť (mimoriadne okolnosti)
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Aj pri predčasnom odlete sa môže aerolinka brániť odvolaním na{" "}
                <strong>mimoriadne okolnosti</strong>. Najčastejšie ide o:
              </p>
              <ul>
                <li>extrémne počasie (búrky, sopečný popol, uzavretie vzdušného priestoru);</li>
                <li>štrajk kontroly letovej prevádzky (ATC) – na rozdiel od štrajku posádky;</li>
                <li>bezpečnostné hrozby alebo politická nestabilita;</li>
                <li>stret s vtákom alebo udalosť mimo kontroly aerolinky.</li>
              </ul>
              <p>
                Pre nárok je však rozhodujúce, či mimoriadna okolnosť <strong>priamo spôsobila</strong>{" "}
                predčasné posunutie letu. Samotné „prevádzkové dôvody", rotácia lietadla alebo
                nedostatok posádky <strong>nie sú</strong> mimoriadne okolnosti – aj pri predčasnom
                odlete teda nárok zostáva platný.
              </p>
              <p>
                Viac o tom, ako sa mimoriadne okolnosti posudzujú, nájdete v článku{" "}
                <Link
                  href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Mimoriadne okolnosti a kompenzácia
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako reklamovať predčasný odlet krok za krokom
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 1 – Overte si dátum oznámenia
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Spočítajte presný počet dní medzi doručením SMS/e-mailu od aerolinky a pôvodným
                  časom odletu. Pri menej ako 14 dňoch je pozícia silná, pri menej ako 7 dňoch je
                  takmer istá.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 2 – Pošlite písomnú reklamáciu aerolinke
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  V reklamácii uveďte rezervačný kód, číslo letu, pôvodný a nový čas, dátum oznámenia
                  a požadovanú sumu. Presný vzor nájdete v našom článku{" "}
                  <Link
                    href="/sk/blog/ako-podat-staznost-letecka-spolocnost"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    ako podať sťažnosť leteckej spoločnosti
                  </Link>
                  .
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 3 – Počkajte 14 – 30 dní na odpoveď
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinky sa k reklamácii musia vyjadriť v rozumnom čase. Po 30 dňoch bez reakcie
                  alebo pri zamietnutí pokračujte na regulátora, prípadne odovzdajte prípad
                  špecializovanej firme ako ClaimWinger.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Krok 4 – Eskalujte nárok
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak aerolinka reklamáciu zamietne, máte dve cesty: sťažnosť na Dopravný úrad SR
                  (alebo národného regulátora v krajine odletu), alebo zastúpenie špecializovanou
                  firmou. ClaimWinger ponúka preverenie zdarma a pevnú províziu 30 % z úspešne
                  získanej kompenzácie – bez ohľadu na mimosúdnu alebo súdnu cestu.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <Card className="border-blue-200 bg-blue-50 p-8 dark:border-blue-800 dark:bg-blue-950/20">
              <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
                Nechcete sa trápiť s reklamáciou sami?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                ClaimWinger Slovensko vybaví predčasný odlet za vás. Overenie nároku je zdarma, províziu
                platíte len z úspešne získanej sumy a proces prebieha celý online. Stačí pár minút
                vyplniť slovenský formulár a my zistíme, či vám patrí 250 €, 400 € alebo 600 €.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_early_departure_final_primary", cancelledFlightHref)
                    }
                  >
                    Spustiť preverenie zdarma
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClaimClick("sk_early_departure_final_secondary", delayedFlightHref)
                    }
                  >
                    Riešim radšej meškanie
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
                  Koľko dostanem za zrušený let?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak sa predčasný odlet právne číta ako zrušenie, sumy kompenzácie sú rovnaké ako pri
                  zrušenom lete.
                </p>
                <Link
                  href="/sk/blog/kolko-dostanem-za-zruseny-let"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Zmena času letu – širší pohľad
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Komplexný pohľad na zmeny letového plánu – posun skôr aj neskôr, právny režim a
                  scenáre.
                </p>
                <Link
                  href="/sk/blog/mozem-ziadat-odskodnenie-pri-zmene-casu-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  ClaimWinger Slovensko
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Priame preverenie nároku a kalkulačka kompenzácie pre slovenských cestujúcich.
                </p>
                <a
                  href={claimWingerHomeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClaimClick("sk_early_departure_related_home", claimWingerHomeHref)
                  }
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Otvoriť ClaimWinger
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
