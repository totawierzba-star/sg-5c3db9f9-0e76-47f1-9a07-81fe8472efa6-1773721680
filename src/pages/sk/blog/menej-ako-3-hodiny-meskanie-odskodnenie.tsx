import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, FileText } from "lucide-react";

import { ClaimWingerSkSection } from "@/components/ClaimWingerSkSection";
import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { pushClaimWingerEvent } from "@/lib/claimwingerTracking";

const articleUrl = "https://problemlot.com/sk/blog/menej-ako-3-hodiny-meskanie-odskodnenie";
const delayedFlightHref =
  "https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=under_3_hours";
const cancelledFlightHref =
  "https://claimwinger.com/sk/zruseny-let?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=under_3_hours";
const claimWingerHomeHref =
  "https://claimwinger.com/sk?utm_source=problemlot-sk&utm_medium=article_link&utm_campaign=under_3_hours";

const faqItems = [
  {
    question: "Mám nárok na odškodnenie, ak som priletel s menej než 3 hodinami meškania?",
    answer:
      "Na paušálnu kompenzáciu 250 / 400 / 600 € podľa EU261 typicky nie. Hranica vychádza z rozsudku C-402/07 (Sturgeon) a platí pre meškanie pri príchode do konečnej destinácie. Ak však let bol zrušený, existujú iné práva – refundácia, presmerovanie, proplácanie výdavkov.",
  },
  {
    question: "Ako sa presne meria 3-hodinová hranica?",
    answer:
      "Rozhodujúci je čas, kedy lietadlo otvorí dvere v konečnej destinácii – nie čas dotyku kolies na zemi. Tak to judikoval Súdny dvor EÚ vo veci C-452/13. Aj 2 hodiny 59 minút bez kompenzácie, 3 hodiny a 1 minúta už kompenzácia.",
  },
  {
    question: "Čo ak meškal iba posledný úsek cesty?",
    answer:
      "Dôležité je meškanie v konečnej destinácii, nie v jednotlivom úseku. Ak ste mali prestup a meškanie pri prvom lete spôsobilo zmeškanie nadväzujúceho letu, do 3 hodín sa ráta celkový rozdiel oproti pôvodne plánovanému príletu.",
  },
  {
    question: "Môžem aspoň žiadať kompenzáciu za jedlo a hotel?",
    answer:
      "Áno. EU261 hovorí o tzv. right to care: pri meškaní od 2 hodín (krátke lety) / 3 hodín (stredné) / 4 hodín (dlhé) musí aerolinka bezplatne zabezpečiť jedlo, nápoje, komunikáciu a v prípade potreby aj ubytovanie s transportom.",
  },
  {
    question: "Pri krátkych letoch do 1 500 km nárok vzniká od koľkých hodín?",
    answer:
      "Pri všetkých letoch pod EU261 je hranica na paušálnu kompenzáciu jednotná: 3 hodiny meškania pri prílete do konečnej destinácie (podľa judikatúry Sturgeon). Rozdielne sú len sumy a časy pre právo na starostlivosť.",
  },
  {
    question: "Čo ak aerolinka tvrdí, že meškanie bolo 2:55 a ja som si istý, že viac?",
    answer:
      "Čas sa posudzuje podľa otvorenia dverí lietadla, nie podľa landingu. Zdokumentujte si ho – fotografia displeja, video z výstupu, svedectvo. Pri nejasnostiach môže pomôcť aj verejná databáza pohybov lietadiel (Flightradar24) alebo preverenie na ClaimWinger.",
  },
];

function trackClaimClick(placement: string, destination: string) {
  pushClaimWingerEvent("claimwinger_cta_click", {
    locale: "sk",
    placement,
    destination,
  });
}

export default function MenejAko3HodinyMeskanieOdskodneniePage() {
  return (
    <LayoutSk>
      <SEO
        title="Meškanie menej než 3 hodiny: mám nárok na odškodnenie?"
        description="Priletel vám let s meškaním pod 3 hodiny? Vysvetľujeme, kedy ešte nárok na 250 / 400 / 600 € nevzniká, kedy áno a aké iné práva máte pri kratšom meškaní."
        url={articleUrl}
        canonicalUrl={articleUrl}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Meškanie menej než 3 hodiny: mám nárok na odškodnenie?",
            description:
              "Hraničná situácia meškania pod 3 hodiny podľa EU261 a judikatúry Sturgeon: čo nárok zakladá a čo nie.",
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
                name: "Meškanie menej než 3 hodiny",
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
            <span>Meškanie menej než 3 hodiny</span>
          </div>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700 dark:bg-rose-900/30 dark:text-rose-300">
              Praktická odpoveď pri krátkom meškaní
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              Meškanie menej než 3 hodiny: mám nárok na odškodnenie?
            </h1>
            <p className="max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">
              Najkratšia odpoveď: <strong>na paušálnu kompenzáciu 250 / 400 / 600 € typicky nie</strong>.
              Hranica 3 hodín meškania pri prílete do konečnej destinácie vyplýva z rozsudku Súdneho
              dvora EÚ vo veci <strong>Sturgeon (C-402/07)</strong>. Pod ňou však máte stále celú radu
              iných práv – pozrime sa detailne, aké. Ak si nie ste istí, kde ste svojím meškaním skončili,
              preverte si nárok cez{" "}
              <a
                href={delayedFlightHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-blue-600 underline underline-offset-4"
                onClick={() => trackClaimClick("sk_under_3h_intro_link", delayedFlightHref)}
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
            <Card className="border-rose-200 bg-gradient-to-br from-rose-600 to-pink-700 p-8 text-white shadow-xl dark:border-rose-800">
              <h2 className="mb-4 text-2xl font-bold">Krátka odpoveď</h2>
              <div className="space-y-3 text-base leading-7 text-rose-50">
                <p>
                  <strong>Paušálna kompenzácia 250 / 400 / 600 €</strong> začína od{" "}
                  <strong>3 hodín meškania pri prílete do konečnej destinácie</strong>.
                </p>
                <p>
                  Pod touto hranicou máte stále právo na <strong>starostlivosť</strong> (jedlo, pitie,
                  komunikácia, hotel, transport) podľa dĺžky čakania a trasy letu.
                </p>
                <p>
                  Čas sa meria podľa <strong>otvorenia dverí</strong> lietadla v cieli – nie podľa
                  dotyku kolies na zemi. Rozhodol tak Súdny dvor EÚ vo veci C-452/13.
                </p>
              </div>
            </Card>
          </section>

          <ClaimWingerSkSection
            className="mb-12"
            title="Nie ste si istí, či ste prešli 3-hodinovú hranicu?"
            description="Pár údajov o čase príletu stačí, aby ClaimWinger určil, či máte nárok na paušálnu kompenzáciu, alebo len na starostlivosť a proplácanie výdavkov. Celý proces je slovenský a zadarmo."
            ctaHref="https://claimwinger.com/sk/meskajuci-let?utm_source=problemlot-sk&utm_medium=embedded_cta&utm_campaign=under_3_hours"
            ctaLabel="Preveriť 3-hodinovú hranicu"
            loadingLabel="Načítava sa formulár ClaimWinger..."
            loadingDescription="O chvíľu sa zobrazí slovenský formulár na preverenie meškajúceho letu."
            placement="sk_blog_under_3h_embed"
          />

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Odkiaľ pochádza hranica 3 hodín
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Nariadenie <strong>EC 261/2004</strong> doslovne o meškaní nepíše o fixnej sume kompenzácie
                – hovorí o refundácii, presmerovaní a starostlivosti. Paušálne sumy 250 / 400 / 600 €
                sa týkajú predovšetkým <strong>zrušených letov</strong>.
              </p>
              <p>
                Hranicu 3 hodín pre meškanie zaviedol Súdny dvor EÚ v rozsudku z 19. novembra 2009 –
                spojené veci <strong>C-402/07 (Sturgeon) a C-432/07 (Böck)</strong>. Logika sudcov:
                pasažieri, ktorí pri meškaní dorazia do cieľa s 3+ hodinovou stratou, sú v situácii
                porovnateľnej s pasažiermi zrušeného letu, a preto si zaslúžia rovnakú kompenzáciu.
              </p>
              <p>
                Táto hranica platí pre všetky lety pod EU261 bez ohľadu na vzdialenosť. Výška kompenzácie
                sa potom líši podľa trasy – rovnako ako pri zrušených letoch.
              </p>
              <p>
                Ak vás zaujímajú presné sumy, pozrite si článok{" "}
                <Link
                  href="/sk/blog/kolko-dostanem-za-3-hodinove-meskanie-letu"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Koľko dostanem za 3-hodinové meškanie letu
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Práva, ktoré máte aj pri kratšom meškaní (pod 3 hodiny)
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie 2+ hodiny (krátke lety do 1 500 km)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Aerolinka vám musí bezplatne zabezpečiť <strong>občerstvenie</strong>, <strong>nápoje</strong>{" "}
                  a možnosť <strong>dvoch telefonátov, e-mailov alebo faxov</strong>. Ak meškanie pretrvá
                  cez noc, aj ubytovanie a dopravu medzi letiskom a hotelom.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie 3+ hodiny (stredné lety 1 500 – 3 500 km)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Rovnaké práva na starostlivosť ako pri krátkych letoch, ale prah je nastavený vyššie.
                  Dôležité: pod 3 hodiny sa nestíha hranica na paušálnu kompenzáciu.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie 4+ hodiny (lety nad 3 500 km mimo EÚ)
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri veľmi dlhých trasách sa hranica pre starostlivosť začína až na 4 hodinách. Napriek
                  tomu veľa aerolínií začne poskytovať service skôr – vždy uchovajte účtenky pre prípad
                  preplatenia.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie 5+ hodín = právo na refundáciu
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ak meškanie prekročí 5 hodín, máte právo od letu odstúpiť a žiadať plnú refundáciu
                  ceny letu do 7 dní. Plus paušálna kompenzácia pri prílete s 3+ hodinovým meškaním.
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ako sa presne meria 3-hodinová hranica
            </h2>
            <div className="prose prose-lg max-w-none text-slate-700 dark:prose-invert dark:text-slate-300">
              <p>
                Asi najdôležitejší rozsudok pre pasažierov na hranici 3 hodín je{" "}
                <strong>C-452/13 (Germanwings)</strong> z 4. septembra 2014. Sudcovia tu jednoznačne
                uviedli, že za okamih príchodu sa považuje moment, keď sa{" "}
                <strong>otvoria aspoň jedny dvere lietadla</strong> – nie moment pristátia (touchdown)
                a ani moment príchodu k terminálu.
              </p>
              <p>
                Pre pasažiera to má tri dôsledky:
              </p>
              <ul>
                <li>
                  <strong>Rolovanie po pristátí sa ráta</strong> do meškania – niekedy ho to „dotiahne"
                  cez 3 hodiny.
                </li>
                <li>
                  <strong>Čakanie na otvorenie dverí</strong> v prípade obsadenej gate alebo chýbajúceho
                  jetbridge sa rovnako ráta.
                </li>
                <li>
                  <strong>Zbytočne skoré zatvorenie tabule</strong> na letisku nie je dôkaz – kľúčové
                  je reálne otvorenie dverí lietadla.
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Typické hraničné scenáre
            </h2>
            <div className="grid gap-4">
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie 2 h 55 min
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ani o minútu pod. Paušálna kompenzácia nevzniká. Stále však môžete žiadať preplatenie
                  výdavkov (strava, taxi, stratená rezervácia v hoteli).
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Dotyk kolies po 2 h 45 min, dvere otvorené po 3 h 10 min
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nárok <strong>vzniká</strong>. Rozhoduje otvorenie dverí (C-452/13). Tu sa aerolinky
                  občas skúšajú brániť cez landing time – pozorne trvajte na správnom meradle.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Prestup: prvý let meškal 1 h, druhý let zmeškaný, cieľ o 4 h neskôr
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Nárok vzniká podľa meškania v konečnej destinácii – teda 4 h. Prvá časť (1 h) sa
                  do kompenzácie sama osebe neráta, ale je príčinou celkového meškania.
                </p>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">
                  Priletel som na čas, ale batožina prišla až o 4 dni
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Meškanie letu pod 3 h znamená, že paušálna kompenzácia za meškanie nevzniká, ale
                  meškaná batožina má vlastný režim podľa Montrealského dohovoru. Pozrite si článok{" "}
                  <Link
                    href="/sk/blog/meskana-batozina-co-preplacaju"
                    className="font-semibold text-blue-600 underline underline-offset-4"
                  >
                    Meškaná batožina – čo preplácajú
                  </Link>
                  .
                </p>
              </Card>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">
              Ak ste stále na hranici – čo treba zdokumentovať
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "plánovaný čas príletu podľa pôvodnej rezervácie",
                "skutočný čas otvorenia dverí (fotografia, video)",
                "časy pohybu lietadla z Flightradar24",
                "svedectvo ďalších pasažierov zo stejného letu",
                "korešpondenciu s aerolinkou o meškaní",
                "účtenky za stravu, taxi, hotel počas čakania",
                "boarding pass alebo potvrdenie o nástupe",
                "rezervačný kód (PNR) a číslo letu",
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
                Neviete, či ste na 2:55 alebo 3:05?
              </h2>
              <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
                Každá minúta nad 3 hodiny znamená rozdiel medzi „len" starostlivosťou a paušálnou
                kompenzáciou 250 – 600 €. ClaimWinger vám overí presné pohyby lietadla a pripraví
                reklamáciu, ak sú šance na úspech.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a
                    href={delayedFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_under_3h_final_primary", delayedFlightHref)}
                  >
                    Preveriť nárok za meškanie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a
                    href={cancelledFlightHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackClaimClick("sk_under_3h_final_secondary", cancelledFlightHref)}
                  >
                    Riešim radšej zrušený let
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
                  Koľko hodín meškania na odškodnenie?
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Komplexný pohľad na prahové hodnoty meškania a výšky kompenzácie.
                </p>
                <Link
                  href="/sk/blog/kolko-hodin-meskania-je-potrebnych-na-odskodnenie"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Meškanie nad 5 hodín
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Pri meškaní nad 5 hodín máte okrem kompenzácie aj právo na plnú refundáciu letu.
                </p>
                <Link
                  href="/sk/blog/meskanie-nad-5-hodin"
                  className="font-semibold text-blue-600 underline underline-offset-4"
                >
                  Prejsť na článok
                </Link>
              </Card>
              <Card className="border-slate-200 p-6 dark:border-slate-700">
                <h3 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  Ako preukázať meškanie letu
                </h3>
                <p className="mb-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Praktický návod, ako získať dôkazy presného času príletu a otvorenia dverí.
                </p>
                <Link
                  href="/sk/blog/ako-preukazat-meskanie-letu"
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
