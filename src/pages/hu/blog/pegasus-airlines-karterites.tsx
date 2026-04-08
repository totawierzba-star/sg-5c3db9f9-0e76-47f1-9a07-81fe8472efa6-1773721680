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

export default function PegasusAirlinesKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Pegasus Airlines kártérítés – késés, törlés, EU261 útmutató [2026]"
        description="Magyar útmutató Pegasus Airlines járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mire figyelj claimnél."
        url="https://problemlot.com/hu/blog/pegasus-airlines-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Pegasus Airlines kártérítés – késés, törlés, EU261 útmutató [2026]",
            description:
              "Magyar nyelvű útmutató Pegasus Airlines járatokhoz: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
            datePublished: "2026-04-08",
            dateModified: "2026-04-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/pegasus-airlines-karterites",
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
                name: "Pegasus Airlines járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, de EU261 szempontból itt is nagyon fontos, hogy honnan indult a járat. EU-ból induló Pegasus-járatoknál sokkal gyakrabban lehet releváns a kártérítés kérdése.",
                },
              },
              {
                "@type": "Question",
                name: "Miért kulcsfontosságú az EU indulás a Pegasus Airlinesnál?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert a Pegasus Airlines nem EU-s légitársaság, ezért az EU261 alkalmazhatóságánál különösen fontos lehet az indulási hely. Sok utas itt tévesen ítéli meg a saját ügyét.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a Pegasus vitatja vagy elutasítja a claimet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor újra kell nézni az indulási helyet, az útvonalat, a végső késést, az esetleges csatlakozást és a dokumentációt. Az első válasz nem mindig a végső értékelés.",
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
            <span className="text-slate-900 dark:text-white">Pegasus Airlines</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Pegasus Airlines kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A Pegasus Airlines sok magyar utasnál jelenik meg törökországi és közel-keleti útvonalaknál, ezért
              gyakori kérdés, hogy <strong>mikor járhat kártérítés</strong> késés vagy törlés esetén. A kulcs itt
              különösen az, hogy <strong>EU-ból indult-e a járat</strong>, mert a <strong>EU261</strong>
              alkalmazhatósága Pegasus esetén sokszor ezen áll vagy bukik.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
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
              <strong>Pegasus Airlines járatnál is járhat kártérítés, de EU indulásnál ez különösen fontos.</strong>
              Mivel a Pegasus nem EU-s légitársaság, az EU261-es jogosultság elemzésénél sokszor az indulási pont az
              első és legfontosabb kérdés.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Pegasus ügyben az indulási hely sokszor többet számít, mint maga a késés</h2>
            <p className="mb-6 text-blue-100">
              Sok utas automatikusan a késés hosszára figyel, pedig Pegasus ügyeknél előbb azt kell tisztázni, hogy
              az EU261 egyáltalán alkalmazható-e. Csak ezután van értelme az összegről és a claim erejéről beszélni.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Pegasus ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a Pegasus claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU-ból indult, és az EU261 alkalmazható.</li>
                <li>Ha a végső célállomásra jelentős késéssel érkezel.</li>
                <li>Ha a csatlakozás egy foglaláson volt.</li>
                <li>Ha nincs meggyőző kizáró ok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb vagy vitás?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat nem EU-ból indult, és emiatt kiesik az EU261 logikájából.</li>
                <li>Ha a végső késés túl alacsony marad.</li>
                <li>Ha a csatlakozás külön foglaláson volt.</li>
                <li>Ha a dokumentáció hiányos vagy pontatlan.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Pegasus és EU261: miért különösen fontos az indulási pont?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Pegasus Airlines ügyeknél a leggyakoribb hiba az, hogy az utas automatikusan feltételezi, hogy minden
                késés vagy törlés ugyanazok szerint a szabályok szerint működik, mint egy EU-s légitársaságnál.
              </p>
              <p>
                Mivel a Pegasus nem EU-s légitársaság, itt különösen fontos annak tisztázása, hogy az adott járat
                <strong> EU-ból indult-e</strong>, és hogyan épült fel a teljes útvonal.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mit kell nézni Pegasus ügyben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Pegasus járatoknál sem elég csak az indulási csúszást figyelni. A claim értékelésénél gyakran a
                <strong> végső célállomásra</strong> való érkezés mutatja meg, mekkora lett a tényleges utazási veszteség.
              </p>
              <p>
                Ez különösen fontos törökországi csatlakozásoknál, ahol egy kisebb első zavar is komoly végső
                késéssé válhat.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire kell figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Pegasus törlés esetén sem elég azt nézni, hogy kaptál-e új útvonalat. A claim szempontjából az is
                számít, mikor tájékoztattak, milyen alternatívát ajánlottak, és mekkora lett a teljes útvonal végső
                idővesztesége.
              </p>
              <p>
                Mindeközben viszont mindig azt is vizsgálni kell, hogy maga az útvonal az EU261 alá tartozik-e.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ez mutatja meg, mekkora lett a valós utazási veszteség a teljes út végén.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">EU indulas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Pegasusnál ez sokszor a legfontosabb szűrő az EU261 elemzés elején.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim erejét gyakran az dönti el, mennyire tisztán látszik az útvonal és a késés logikája.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha a Pegasus nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor érdemes újra összerakni az egész ügyet: indulási hely, útvonal, csatlakozás, végső érkezés,
                emailes értesítések és minden megőrzött dokumentum számít.
              </p>
              <p>
                Sok claim nem attól gyenge, hogy a Pegasus vitatja, hanem attól, hogy az utas nem mutatja be elég
                pontosan az EU261 szempontból döntő részleteket.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista Pegasus ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Nézd meg, hogy a járat EU-ból indult-e.</li>
              <li>Jegyezd fel a végső célállomásra való érkezés pontos idejét.</li>
              <li>Őrizd meg az átszállással kapcsolatos értesítéseket.</li>
              <li>Dokumentáld az alternatív útvonalat vagy átfoglalást.</li>
              <li>Ne csak a késést nézd, hanem az EU261 alkalmazhatóságát is.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni a Pegasus ügyedet?</h2>
            <p className="mb-6 text-slate-200">
              Ha késés, törlés vagy csatlakozási gond miatt bizonytalan vagy, érdemes rendezett ellenőrzéssel kezdeni.
              Így gyorsan kiderül, mennyire erős a claim és egyáltalán releváns-e az EU261 az adott ügyben.
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
                  Pegasus ügyben az EU indulás különösen fontos?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen. Mivel a Pegasus nem EU-s légitársaság, ez sok ügyben az első kulcskérdés.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Pegasus törlésnél az új útvonal automatikusan lezárja a claimet?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. Továbbra is számít a végső időveszteség és az is, hogy maga az útvonal EU261-es ügy-e.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Érdemes segítséget kérni Pegasus claimnél?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, főleg csatlakozásos és vitatott ügyeknél, ahol az EU261 alkalmazhatósága sem teljesen egyértelmű.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
