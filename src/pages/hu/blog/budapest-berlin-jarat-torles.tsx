import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  RefreshCcw,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function BudapestBerlinJaratTorles() {
  return (
    <LayoutHu>
      <SEO
        title="Budapest–Berlin járat törlés – mikor jár kártérítés? [2026]"
        description="Magyar útmutató Budapest–Berlin járattörléshez: mikor lehet erős a claim, hogyan gondolkodj refundról vagy új útvonalról, és mit dokumentálj azonnal."
        url="https://problemlot.com/hu/blog/budapest-berlin-jarat-torles"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budapest–Berlin járat törlés – mikor jár kártérítés? [2026]",
            description:
              "Magyar útmutató a Budapest és Berlin közötti törölt járatokhoz: mikor lehet erős a claim, hogyan számít az új útvonal és mit kell megőrizni.",
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
              "@id": "https://problemlot.com/hu/blog/budapest-berlin-jarat-torles",
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
                name: "Budapest–Berlin járattörlésnél járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A claim erejét a törlés körülményei, az airline reakciója, az új útvonal minősége és a végső időveszteség együtt határozza meg.",
                },
              },
              {
                "@type": "Question",
                name: "Mit válasszak Budapest–Berlin törlésnél: visszatérítés vagy új útvonal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ez a konkrét helyzettől függ. A döntés előtt érdemes megnézni, mennyire használható az új ajánlat, mennyi plusz időveszteséget okoz, és hogy a teljes utazási célod szempontjából melyik megoldás a reálisabb.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Budapest–Berlin törlés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, a törlésről szóló üzeneteket, az airline új ajánlatát, a kijelzőről készült fotókat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Budapest–Berlin törlés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Utvonal-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Budapest–Berlin járat törlés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Budapest–Berlin</strong> útvonalon a törlés különösen érzékeny helyzet, mert sok utas rövid
              üzleti vagy városi útra indul. Ilyenkor a legfontosabb kérdés nem csak az, hogy történt-e törlés, hanem
              az is, hogy a légitársaság <strong>milyen új megoldást adott</strong>, és ez mennyire volt használható az
              eredeti tervhez képest.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Budapest–Berlin járattörlésnél sok esetben lehet erős claim.</strong> A döntő kérdés itt az,
              hogy mikor tájékoztattak a törlésről, milyen új útvonalat ajánlottak, és mekkora lett a teljes időveszteség.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Budapestről Berlinbe törölték a járatodat?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járat törlődött, és most azt mérlegeled, hogy elfogadd-e az új ajánlatot vagy inkább más megoldást
              válassz, érdemes gyorsan ellenőrizni, mennyire erős lehet a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/torolt-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Törölt járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a törléses ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jól dokumentált törlési értesítés.</li>
                <li>Gyenge vagy jelentősen késő új útvonal.</li>
                <li>Rendezett bizonyíték a teljes időveszteségről.</li>
                <li>Megőrzött kommunikáció és költségblokkok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti vagy bonyolítja?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Hiányzó nyom az airline eredeti ajánlatáról.</li>
                <li>Nem egyértelmű idővonal a törlés után.</li>
                <li>Nem dokumentált új útvonal vagy visszatérítési opció.</li>
                <li>Rendezetlen bizonyítás a teljes veszteségről.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért különösen fontos ezen az útvonalon az új ajánlat minősége?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Budapest–Berlin reláción sok utas nem hetekkel későbbre, hanem konkrét rövid időablakra utazik.
                Emiatt egy papíron létező új járat még nem feltétlenül jó megoldás.
              </p>
              <p>
                A claim erejét gyakran az mutatja meg, hogy a felajánlott alternatíva ténylegesen mennyire mentette meg
                az utazást, és mennyi plusz időveszteséget okozott.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Refund vagy új útvonal?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Törlésnél sok utas első kérdése az, hogy inkább kérjen visszatérítést, vagy fogadja el az új járatot.
                Ezt nem sablonból érdemes eldönteni, hanem abból, hogy az új megoldás mennyire felel meg az eredeti utazási célnak.
              </p>
              <p>
                Ha az új útvonal túl késő, túl hosszú vagy gyakorlatilag használhatatlan, a döntésed teljesen más lehet,
                mint egy jól szervezett, minimális veszteséget okozó átfoglalás esetén.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit dokumentálj Budapest–Berlin törlésnél?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a PNR-t, a törlésről szóló üzeneteket, a kijelzőről készült képeket és az
                airline által felajánlott összes új megoldást. Ha saját költséged keletkezik, a blokkokat is tartsd meg.
              </p>
              <p>
                Minél tisztább a törlési idővonal, annál könnyebb később megmutatni, mennyire volt használható vagy éppen
                elégtelen az airline megoldása.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <RefreshCcw className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Uj megoldas minosege</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Törlésnél sokszor ez az egyik legfontosabb tényező a claim erejénél.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes idoveszteseg</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim valós súlyát az mutatja meg, mennyit veszítettél összesen, nem csak az, hogy törölték a járatot.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Bizonyitas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A törlés utáni első órák dokumentációja később sokkal fontosabb lehet, mint maga a zavar.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a Budapest–Berlin járatot törölték, és az új ajánlat láthatóan rossz vagy túl késő, érdemes gyorsan
                átnézni az ügyet. A friss dokumentáció itt különösen sokat számít.
              </p>
              <p>
                Minél korábban rendezed a törlés utáni idővonalat és az airline válaszait, annál könnyebb lesz később
                megmutatni a teljes veszteséget.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Budapest–Berlin törléshez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Tartsd meg a boarding passt és a PNR-t.</li>
              <li>Mentsd el a törlési értesítést és az airline ajánlatait.</li>
              <li>Fotózd le a kijelzőt és dokumentáld az időpontokat.</li>
              <li>Őrizd meg az új útvonal vagy refund opció részleteit.</li>
              <li>Tartsd meg az indokolt költségek blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Budapest–Berlin törlésnél mindig jobb az új járat, mint a refund?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem. Ezt az dönti el, mennyire használható az új ajánlat az eredeti utazási célod szempontjából.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért kell megőrizni az airline első ajánlatát?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert ebből látszik később, mennyire volt jó vagy rossz az első tényleges megoldás, amit felkínáltak.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mi a legfontosabb Budapest–Berlin törlésnél?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  A törlés utáni idővonal, az airline új ajánlata és a teljes időveszteség egyértelmű dokumentálása.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
