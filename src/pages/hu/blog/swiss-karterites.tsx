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

export default function SwissKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="SWISS kártérítés – késés, törlés, EU261 útmutató [2026]"
        description="Magyar útmutató SWISS járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mire figyelj claimnél."
        url="https://problemlot.com/hu/blog/swiss-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "SWISS kártérítés – késés, törlés, EU261 útmutató [2026]",
            description:
              "Magyar nyelvű útmutató SWISS járatokhoz: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
              "@id": "https://problemlot.com/hu/blog/swiss-karterites",
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
                name: "SWISS járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A SWISS járatainál is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a késés vagy törlés megfelel a szabályoknak.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos a zürichi csatlakozás SWISS ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok SWISS ügy csatlakozásos útvonal, ezért a claimnél gyakran a végső célállomásra való érkezési késés és az egy foglalás kérdése lesz a legfontosabb.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a SWISS vitatja vagy elutasítja a claimet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor újra kell nézni az útvonalat, a végső késést, a csatlakozási logikát és a dokumentációt. Az első airline-válasz nem feltétlenül végleges értékelés.",
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
            <span className="text-slate-900 dark:text-white">SWISS</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              SWISS kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A SWISS sok magyar utasnál jelenik meg svájci, nyugat-európai és hosszabb csatlakozásos útvonalaknál,
              ezért gyakori kérdés, hogy <strong>mikor járhat kártérítés</strong> késés vagy törlés esetén. A rövid
              válasz az, hogy igen, sok esetben felmerülhet, de a döntést itt is az <strong>EU261</strong>, az
              útvonal és a végső érkezési helyzet határozza meg.
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
              <strong>Igen, SWISS járatnál is járhat kártérítés.</strong> A claim értékelésénél az a döntő, hogy a
              járat az EU261 alá tartozik-e, mennyi lett a végső késés, és hogyan hatott a probléma a teljes
              útvonaladra.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Zürich és a csatlakozási logika SWISS ügyeknél gyakran döntő</h2>
            <p className="mb-6 text-blue-100">
              A SWISS esetében sok ügy nem egyetlen rövid járatszakaszról szól, hanem arról, hogy mi történt a teljes
              utazás végén. Ha egy zürichi csatlakozás miatt csúszik meg az egész út, az a claim erejét jelentősen
              megváltoztathatja.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              SWISS ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a SWISS claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU261 alá tartozik.</li>
                <li>Ha a végső célállomásra jelentős késéssel érkezel.</li>
                <li>Ha a csatlakozás egy foglaláson volt.</li>
                <li>Ha nincs meggyőzően bizonyított kizáró ok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb vagy vitás?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a jogi alap nem elég tiszta.</li>
                <li>Ha a végső késés túl kicsi marad.</li>
                <li>Ha a csatlakozás külön foglaláson volt.</li>
                <li>Ha a dokumentáció hiányos vagy pontatlan.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. SWISS és EU261: miért nem elég csak a brandet nézni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A SWISS erős márka, de a claim jogi megítélését nem a brand határozza meg. A tényleges kérdés az, hogy
                a konkrét útvonal hogyan illeszkedik az EU261 rendszerébe, és mekkora végső időveszteség keletkezett.
              </p>
              <p>
                Ha ezt kihagyjuk az elemzésből, könnyen túlértékeljük vagy alulértékeljük az ügyet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mit kell nézni SWISS járatnál?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                SWISS járatnál sem elég az indulási csúszásra nézni. Sok esetben a <strong>végső célállomásra</strong>
                való érkezés mutatja meg, mennyire súlyos a tényleges veszteség.
              </p>
              <p>
                Ez különösen fontos csatlakozásos útvonalaknál, ahol Zürichben dől el, hogy az egész utazás csak
                kellemetlenebb lett, vagy valóban komoly késésbe fordult.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire kell figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                SWISS törlés esetén sem elég azt megnézni, hogy kaptál-e helyettesítő megoldást. A claim szempontjából
                azt is vizsgálni kell, mikor értesítettek, milyen alternatív útvonalat adtak, és mekkora végső
                időveszteséged keletkezett.
              </p>
              <p>
                Csatlakozásos ügyeknél ez különösen érzékeny pont, mert egy új útvonal papíron rendezettnek tűnhet,
                miközben a végén mégis nagy csúszást okoz.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Sokszor ez mutatja meg, valóban mennyire lett súlyos a járatprobléma.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Zurichi csatlakozas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                SWISS ügyeknél ez gyakran az a pont, ahol a kisebb zavar nagy végső késéssé válik.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Bizonyitas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Az ügy erősségét a dokumentáció és az airline érvelésének minősége együtt adja.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha a SWISS nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor érdemes újra összerakni a teljes ügyet: foglalás, útvonal, csatlakozás, végső érkezés,
                boarding pass és minden airline-értesítés fontos lehet.
              </p>
              <p>
                Sok claim nem attól válik gyengévé, hogy a SWISS vitatja, hanem attól, hogy az utas nem mutatja be
                elég világosan a teljes késési láncot.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista SWISS ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Jegyezd fel a végső célállomásra való érkezés pontos idejét.</li>
              <li>Nézd meg, hogy a teljes út egy foglaláson volt-e.</li>
              <li>Őrizd meg a zürichi csatlakozással kapcsolatos értesítéseket.</li>
              <li>Dokumentáld az alternatív útvonalat és az átfoglalást.</li>
              <li>Ne csak az első járat csúszását nézd, hanem a teljes utazást.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni a SWISS ügyedet?</h2>
            <p className="mb-6 text-slate-200">
              Ha késés, törlés vagy csatlakozási gond miatt nem világos, hogy mennyire erős a claim, érdemes rendezett
              ellenőrzéssel kezdeni. Így gyorsan kiderül, van-e valós esély pénzbeli kompenzációra.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              ClaimWinger megnyitása
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  SWISS ügyben a zürichi átszállás különösen fontos?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen. Sok claimnél pont ez dönti el, hogy a teljes út végén mekkora lett a tényleges késés.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  SWISS törlésnél az új útvonal automatikusan lezárja a claimet?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. Továbbra is számít, milyen végső késést okozott a változás, és mennyire volt ésszerű
                  az alternatív megoldás.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Érdemes segítséget kérni SWISS claimnél?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, főleg csatlakozásos, vitatott vagy összetettebb ügyeknél, ahol a teljes út logikáját kell jól
                  bemutatni.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
