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

export default function VoloteaKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Volotea kártérítés – késés, törlés, EU261 útmutató [2026]"
        description="Magyar útmutató Volotea járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mire figyelj claimnél."
        url="https://problemlot.com/hu/blog/volotea-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Volotea kártérítés – késés, törlés, EU261 útmutató [2026]",
            description:
              "Magyar nyelvű útmutató Volotea járatokhoz: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
              "@id": "https://problemlot.com/hu/blog/volotea-karterites",
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
                name: "Volotea járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A Volotea járatainál is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a késés vagy törlés megfelel a szabályoknak.",
                },
              },
              {
                "@type": "Question",
                name: "A Volotea low-cost modellje csökkenti a jogokat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A low-cost működés önmagában nem csökkenti az EU261 szerinti jogosultságot. A döntő mindig az útvonal, a végső késés, a törlés részletei és a dokumentáció.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a Volotea nem válaszol vagy elutasítja a claimet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor újra kell nézni az útvonalat, a végső késést, a bizonyítékokat és az airline indoklását. Az első válasz nem mindig mutatja meg az ügy valódi erejét.",
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
            <span className="text-slate-900 dark:text-white">Volotea</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Volotea kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A Volotea sok magyar utasnál jelenik meg rövidebb európai, városi és wakacyjne útvonalaknál, ezért
              gyakori kérdés, hogy <strong>mikor járhat kártérítés</strong> késés vagy törlés esetén. A rövid válasz
              az, hogy igen, sok esetben felmerülhet, de a döntést itt is az <strong>EU261</strong>, a konkrét
              útvonal és a végső érkezési helyzet határozza meg.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
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
              <strong>Igen, Volotea járatnál is járhat kártérítés.</strong> A low-cost jelleg önmagában nem vesz el
              az utas jogaiból. A claim erősségét itt is az dönti el, hogy a járat EU261-es ügy-e, mekkora lett a
              végső késés, és pontosan milyen zavar történt.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A Voloteánál sem a jegy ára, hanem a tényállás a döntő</h2>
            <p className="mb-6 text-blue-100">
              Sok utas a kedvezőbb jegyárból indul ki, pedig a claim megítélésénél ez félrevezető lehet. A valódi
              kérdés az, hogy a konkrét útvonal hogyan illeszkedik az EU261 rendszerébe, és mekkora lett a tényleges
              időveszteség.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Volotea ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a Volotea claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU261 alá tartozik.</li>
                <li>Ha a végső érkezésnél jelentős késés alakult ki.</li>
                <li>Ha törlésnél a körülmények külön is erősek.</li>
                <li>Ha nincs meggyőző kizáró ok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb vagy vitás?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat nem EU261-es ügy.</li>
                <li>Ha a végső késés túl alacsony marad.</li>
                <li>Ha a dokumentáció hiányos.</li>
                <li>Ha az airline részletesen vitatja a felelősséget.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Volotea és EU261: miért nem szabad a low-cost címkéből kiindulni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Voloteánál sok utas eleve gyengébb jogi helyzetre számít a low-cost modell miatt, pedig az EU261
                logikája ezt önmagában nem igazolja.
              </p>
              <p>
                Itt is az számít, hogy a konkrét járat hogyan illeszkedik az uniós szabályrendszerbe, és mekkora lett
                a végső időveszteség.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mit kell nézni Volotea ügyben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Volotea járatoknál is gyakran a <strong>végső érkezés</strong> a döntő, nem pusztán az indulási
                csúszás. Ettől függ, hogy a tényleges időveszteség mennyire jelentős.
              </p>
              <p>
                Ez akkor is fontos, ha a járat elsőre csak kisebb késésnek tűnt, de a végére mégis erősebb utasjogi
                helyzet alakult ki.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire kell figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Volotea törlés esetén sem elég azt megnézni, hogy kaptál-e másik járatot. A claim szempontjából a
                tájékoztatás ideje, az alternatív megoldás minősége és a végső időveszteség is számít.
              </p>
              <p>
                Sok ügy pont ott fordul meg, hogy a pótlólagos járat mennyire közelítette meg az eredeti utazási tervet.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ez mutatja meg, mekkora lett a valós utazási veszteség az út végén.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Utvonal es szabalyok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A konkrét járat EU261 szerinti helyzete fontosabb, mint a márka vagy az árképzés.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Bizonyitas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim erejét sokszor az dönti el, mennyire tisztán látszik a késés vagy törlés teljes logikája.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha a Volotea nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor érdemes újra összerakni az egész ügyet: foglalás, útvonal, járatszám, végső érkezés,
                emailes értesítések és minden megőrzött bizonyíték számít.
              </p>
              <p>
                Sok claim nem attól gyenge, hogy a Volotea vitatja, hanem attól, hogy az utas nem mutatja be elég
                tisztán a teljes késési vagy törlési láncot.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista Volotea ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Jegyezd fel a végső célállomásra való érkezés pontos idejét.</li>
              <li>Őrizd meg a foglalást, boarding passt és emailes értesítéseket.</li>
              <li>Dokumentáld az alternatív járatot vagy visszatérítési ajánlatot.</li>
              <li>Nézd meg, hogy a járat biztosan EU261 alá tartozik-e.</li>
              <li>Ne tekintsd véglegesnek az első sablonelutasítást.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni a Volotea ügyedet?</h2>
            <p className="mb-6 text-slate-200">
              Ha késés vagy törlés után nem világos, mennyire erős a claim, érdemes rendezett ellenőrzéssel kezdeni.
              Így gyorsan kiderül, van-e valós esély pénzbeli kompenzációra.
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
                  Voloteánál is ugyanúgy működik az EU261, mint más légitársaságoknál?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, a fő logika ugyanaz: az útvonal, a késés vagy törlés és a bizonyítékok döntik el a claimet.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Volotea törlésnél az új járat automatikusan lezárja a claimet?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. A végső időveszteség és az alternatív megoldás minősége továbbra is lényeges marad.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Érdemes segítséget kérni Volotea claimnél?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, főleg vitatott vagy rosszul dokumentált ügyeknél, ahol nem egyértelmű, mennyire erős a jogi alap.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
