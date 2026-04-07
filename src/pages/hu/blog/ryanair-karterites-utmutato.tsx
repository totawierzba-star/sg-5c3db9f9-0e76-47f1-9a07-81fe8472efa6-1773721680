import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  Plane,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function RyanairKarteritesUtmutato() {
  return (
    <LayoutHu>
      <SEO
        title="Ryanair kártérítés útmutató – késés, törlés, EU261 [2026]"
        description="Magyar útmutató Ryanair járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mit tegyél, ha a claim elakad."
        url="https://problemlot.com/hu/blog/ryanair-karterites-utmutato"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ryanair kártérítés útmutató – késés, törlés, EU261 [2026]",
            description:
              "Magyar nyelvű útmutató a Ryanair járatkésésekhez és törlésekhez: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
            author: {
              "@type": "Organization",
              name: "ProblemLot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            datePublished: "2026-04-07",
            dateModified: "2026-04-07",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/ryanair-karterites-utmutato",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Ryanair járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A Ryanair járatainál is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a konkrét késés vagy törlés megfelel a szabályoknak.",
                },
              },
              {
                "@type": "Question",
                name: "A Ryanair low-cost jellege csökkenti a jogokat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Attól, hogy a Ryanair fapados modellben működik, az EU261 szerinti jogosultság nem lesz automatikusan kisebb. A döntő mindig a konkrét útvonal és esemény.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a Ryanair elutasítja vagy nem kezeli rendesen az ügyet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Először a claim jogi alapját és a dokumentációt kell újra átnézni. Sok esetben az első airline-válasz nem a teljes ügy végső értékelése, hanem csak az első reakció.",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/hu" className="hover:text-blue-600 dark:hover:text-blue-400">
              Fooldal
            </Link>
            <span className="mx-2">/</span>
            <Link href="/hu/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Ryanair</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ryanair kártérítés útmutató
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A Ryanair az egyik leggyakoribb választás sok magyar utasnál, ezért teljesen érthető, hogy sokan
              kifejezetten erre a névre keresnek rá. A jó hír az, hogy <strong>Ryanair járatnál is járhat
              kártérítés</strong>. A kulcs itt sem a brand önmagában, hanem az, hogy a konkrét járat hogyan illeszkedik
              az <strong>EU261</strong> rendszerébe, és milyen típusú járatprobléma történt.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <BadgeEuro className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Igen, Ryanair járatnál is járhat kártérítés.</strong> A low-cost modell nem zárja ki a
              jogosultságot. A kérdés mindig az, hogy a járat EU261-es ügy-e, mekkora volt a késés vagy mi
              történt a törlésnél, és tud-e a légitársaság valós kizáró okot bizonyítani.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A Ryanairnél sem a jegy ára dönti el a jogokat</h2>
            <p className="mb-6 text-blue-100">
              A leggyakoribb félreértés ugyanaz, mint más fapados cégeknél: attól, hogy a jegy olcsó volt, az utas
              nem veszít automatikusan a jogaiból. A döntő itt is a szabályrendszer és a konkrét esemény.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ryanair ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a Ryanair claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU261 alá tartozik.</li>
                <li>Ha a végső érkezés jelentősen csúszott.</li>
                <li>Ha törlésnél külön is vizsgálható a kompenzáció kérdése.</li>
                <li>Ha nincs meggyőző kizáró körülmény.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb vagy nehezebb?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat nem EU261-es ügy.</li>
                <li>Ha a késés mértéke nem éri el a lényeges küszöböt.</li>
                <li>Ha a dokumentáció hiányos.</li>
                <li>Ha az airline részletesen és hitelesen vitatja a felelősséget.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Ryanair és EU261: miért nem szabad automatikusan feltételezni semmit?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sok utas vagy túl optimista, vagy túl pesszimista. Az egyik véglet szerint Ryanairnél biztosan
                jár pénz, a másik szerint biztosan nem. A valóság ezzel szemben az, hogy minden a konkrét útvonalon,
                a késésen és a járat jogi helyzetén múlik.
              </p>
              <p>
                Ezért Ryanair ügyben is ugyanúgy kell gondolkodni, mint bármely más légitársaságnál: előbb a
                jogi alapot kell ellenőrizni, és csak utána az összeget vagy a továbblépést.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mi a legfontosabb?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ryanair késésnél sem elég azt nézni, hogy mikor tolódott a pushback vagy a felszállás. A claim
                logikájában gyakran a végső megérkezés időpontja a döntőbb.
              </p>
              <p>
                Ez különösen fontos akkor, ha az utas további utazási tervét is felborította a csúszás, vagy ha
                a valós időveszteség nagyobb, mint amit a repülőtéri tábla elsőre sugallt.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél hogyan érdemes gondolkodni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ryanair törlésnél is külön kell bontani a kérdéseket: mi lesz a jegy sorsa, milyen alternatíva
                jár, és van-e tér pénzbeli kompenzációra. Ezek együtt jelennek meg a gyakorlatban, de jogilag
                mégsem ugyanazt jelentik.
              </p>
              <p>
                Minél jobban külön tudod kezelni ezeket a rétegeket, annál tisztábban látszik majd, hogy az ügy
                valójában mennyire erős.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              4. Mi van, ha a Ryanair nem válaszol vagy elutasít?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor sem az a jó reakció, hogy automatikusan feladod a claimet. Előbb azt kell megnézni, hogy
                az airline milyen indoklást adott, mennyire konkrét ez, és mennyire áll össze a teljes tényállással.
              </p>
              <p>
                Sok Ryanair-ügy ott dől el, hogy az utas mennyire tudja rendezett módon újraértelmezni a teljes helyzetet:
                dokumentáció, útvonal, végső késés, és az airline válaszának minősége.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Tipikus Ryanair helyzetek</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Hosszú európai késés</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt a végső érkezési idő és az EU261 alkalmazhatósága lesz a legfontosabb.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Törölt Ryanair járat</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt refund, átfoglalás és esetleges kompenzáció kérdéseit külön-külön kell végignézni.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha Ryanair járattal volt problémád, ne abból indulj ki, hogy a márkanév önmagában eldönti az ügyet.
              Előbb a konkrét járat, a konkrét zavar és az EU261-es alkalmazhatóság alapján kell felmérni a helyzetet.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Ryanair claim ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ryanair járatnál is járhat kártérítés?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, ha a járat és a tényállás megfelel az EU261 feltételeinek.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  A low-cost jelleg gyengíti az ügyet?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem, önmagában nem.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mi van, ha a Ryanair elutasította a claimet?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Akkor az indoklás minőségét kell megvizsgálni, nem rögtön lezárni az ügyet.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/low-cost-jaratoknal-is-jar-penz" className="block hover:underline">
                Low-cost járatoknál is jár pénz?
              </Link>
              <Link href="/hu/blog/wizz-air-karterites-keses-es-torles-eseten" className="block hover:underline">
                Wizz Air kártérítés késés és törlés esetén
              </Link>
              <Link href="/hu/blog/mit-tegyek-ha-elutasitjak-az-igenyt" className="block hover:underline">
                Mit tegyek, ha elutasítják az igényt?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
