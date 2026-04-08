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

export default function TurkishAirlinesKarteritesEuIndulas() {
  return (
    <LayoutHu>
      <SEO
        title="Turkish Airlines kártérítés EU indulásnál – késés, törlés, EU261 [2026]"
        description="Magyar útmutató Turkish Airlines járatokhoz EU indulás esetén: mikor járhat kártérítés késés vagy törlés után, hogyan működik az EU261, és mire figyelj claimnél."
        url="https://problemlot.com/hu/blog/turkish-airlines-karterites-eu-indulas"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Turkish Airlines kártérítés EU indulásnál – késés, törlés, EU261 [2026]",
            description:
              "Magyar nyelvű útmutató Turkish Airlines járatokhoz EU indulás esetén: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
              "@id": "https://problemlot.com/hu/blog/turkish-airlines-karterites-eu-indulas",
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
                name: "Turkish Airlines járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, de EU261 szempontból különösen fontos, hogy honnan indult a járat. EU-ból induló Turkish Airlines járatoknál sokkal gyakrabban lehet releváns a kártérítés kérdése.",
                },
              },
              {
                "@type": "Question",
                name: "Miért hangsúlyos az EU indulás Turkish Airlines ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert a Turkish Airlines nem EU-s légitársaság, ezért az EU261 alkalmazhatóságánál különösen fontos lehet az indulási hely. Sok utas itt hibázik a jogosultság megítélésénél.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a Turkish Airlines vitatja vagy elutasítja a claimet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor újra kell nézni az útvonalat, az indulási helyet, a végső késést, az esetleges csatlakozást és a dokumentációt. Az első válasz nem mindig végleges értékelés.",
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
            <span className="text-slate-900 dark:text-white">Turkish Airlines</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Turkish Airlines kártérítés EU indulásnál
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A Turkish Airlines sok magyar utasnál jelenik meg isztambuli csatlakozásoknál, ázsiai és közel-keleti
              útvonalaknál, ezért gyakori kérdés, hogy <strong>mikor járhat kártérítés</strong> késés vagy törlés
              esetén. A kulcs itt különösen az, hogy <strong>EU-ból indult-e a járat</strong>, mert az
              <strong> EU261</strong> alkalmazhatósága Turkish Airlines esetén sokkal érzékenyebb erre a részletre.
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
              <strong>Turkish Airlines járatnál is járhat kártérítés, de EU indulásnál ez különösen fontos.</strong>
              Mivel a Turkish Airlines nem EU-s légitársaság, az EU261-es jogosultság elemzésénél sokszor az indulási
              pont a legfontosabb kérdés.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Turkish Airlines ügyben az indulási hely sokszor mindent eldönt</h2>
            <p className="mb-6 text-blue-100">
              Sok utas automatikusan feltételezi, hogy a Turkish Airlinesnál mindig vagy soha nem jár pénz. A valóság
              ennél árnyaltabb: EU indulás, csatlakozás, végső késés és az egész út struktúrája együtt számít.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Turkish Airlines ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a Turkish claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU-ból indult, és az EU261 alkalmazható.</li>
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
                <li>Ha a járat nem EU-ból indult, és ezért kiesik az EU261 logikájából.</li>
                <li>Ha a végső késés túl alacsony marad.</li>
                <li>Ha a csatlakozás külön foglaláson volt.</li>
                <li>Ha a dokumentáció hiányos vagy pontatlan.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Turkish Airlines és EU261: miért nem lehet ezt egyszerűen kezelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Turkish Airlines ügyeknél a leggyakoribb hiba az, hogy az utas csak a késés hosszát nézi, és nem
                foglalkozik azzal, hogy maga a járat hogyan illeszkedik az EU261 rendszerébe.
              </p>
              <p>
                Mivel a Turkish Airlines nem EU-s légitársaság, itt különösen fontos annak tisztázása, hogy az adott
                járat <strong>EU-ból indult-e</strong>, és hogyan épült fel az egész útvonal.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mit kell nézni Turkish Airlines ügyben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turkish Airlines járatoknál sem elég csak az indulási csúszásra figyelni. A claim értékelésénél sokszor
                a <strong>végső célállomásra</strong> való érkezés mutatja meg, mekkora lett a tényleges utazási veszteség.
              </p>
              <p>
                Ez különösen igaz isztambuli csatlakozásoknál, ahol egy kisebb első zavar is komoly végső késéssé
                válhat az út végére.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire kell figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Turkish Airlines törlés esetén sem elég azt nézni, hogy kaptál-e új útvonalat. A claim szempontjából
                az is számít, mikor tájékoztattak, milyen alternatívát ajánlottak, és mekkora lett a teljes útvonal
                végső idővesztesége.
              </p>
              <p>
                Mindezt azonban mindig azzal együtt kell nézni, hogy az adott útvonal egyáltalán az EU261 hatálya
                alá tartozik-e.
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
                Turkish Airlinesnál ez sokszor az első és legfontosabb kérdés az EU261 elemzésben.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim erejét sokszor az dönti el, mennyire tisztán látszik az egész út és a késés logikája.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha a Turkish Airlines nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor érdemes újra összerakni az egész ügyet: indulási hely, teljes útvonal, csatlakozás, végső
                érkezés, emailes értesítések és minden megőrzött dokumentum számít.
              </p>
              <p>
                Sok claim nem attól gyenge, hogy a Turkish Airlines vitatja, hanem attól, hogy az utas nem mutatja
                be elég pontosan az EU261 szempontból döntő részleteket.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista Turkish Airlines ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Nézd meg, hogy a járat EU-ból indult-e.</li>
              <li>Jegyezd fel a végső célállomásra való érkezés pontos idejét.</li>
              <li>Őrizd meg az isztambuli csatlakozással kapcsolatos értesítéseket.</li>
              <li>Dokumentáld az alternatív útvonalat vagy átfoglalást.</li>
              <li>Ne csak a késést nézd, hanem az EU261 alkalmazhatóságát is.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni a Turkish Airlines ügyedet?</h2>
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
                  Turkish Airlines ügyben az EU indulás különösen fontos?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen. Mivel a Turkish Airlines nem EU-s légitársaság, ez sok ügyben alapvető kérdés.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Turkish Airlines törlésnél az új útvonal automatikusan lezárja a claimet?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. Továbbra is számít a végső időveszteség és az is, hogy maga az útvonal EU261-es ügy-e.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Érdemes segítséget kérni Turkish Airlines claimnél?
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
