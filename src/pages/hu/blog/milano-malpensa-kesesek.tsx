import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Route,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MilanoMalpensaKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Milánó Malpensa késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha a milánói Malpensa repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, átfoglalásról, végső késésről és bizonyításról."
        url="https://problemlot.com/hu/blog/milano-malpensa-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Milánó Malpensa késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató a milánói Malpensa repülőtéren felmerülő késésekhez, törlésekhez, átfoglalásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/milano-malpensa-kesesek",
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
                name: "Malpensánál is a végső célállomás számít a leginkább?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen. A claim erejét itt is gyakran az mutatja meg, mennyivel később értél oda végül a célállomásra, nem csak az első indulási csúszás.",
                },
              },
              {
                "@type": "Question",
                name: "Mitől lehet erős egy ügy Malpensa repülőtéren?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Erős lehet az ügy, ha jól dokumentált az eredeti és az új útvonal, jelentős a végső késés, és látszik, hogyan reagált a légitársaság a problémára.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Malpensán késés vagy törlés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a kijelzőfotókat, az eredeti és az új útvonalat, valamint minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Milánó Malpensa</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Milánó Malpensa késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Milánó Malpensa</strong> repülőtér sok magyar utasnál egyszerre jelent olasz city-breaket,
              üzleti útvonalat és továbbutazási pontot. Emiatt a késések és törlések itt sem csak helyszíni kellemetlenségek:
              a valódi kérdés az, hogy mekkora lett a <strong>teljes időveszteség</strong>, és mennyire bizonyítható
              az utazás teljes története.
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
              <strong>Malpensánál is a teljes késést kell nézni, nem csak az első zavart.</strong> A claim erejét az
              dönti el, hogy mennyi lett a végső érkezési veszteség, milyen új útvonalat kaptál, és mennyire pontos a
              dokumentációd.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Malpensán csúszott meg az utad?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járat késik, törölték vagy az új útvonal túl sok időt vesz el, most érdemes gyorsan ellenőrizni,
              mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Malpensa járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a malpensai ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jelentős végső érkezési késés.</li>
                <li>Dokumentált eredeti és új útvonal.</li>
                <li>Megőrzött airline üzenetek és kijelzőfotók.</li>
                <li>Pontos költségblokkok és rendezett időrend.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti a claimet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Csak az első indulási késésre épített logika.</li>
                <li>Hiányzó nyom az új útvonalról.</li>
                <li>Nem bizonyított végső időveszteség.</li>
                <li>Hiányos vagy rendezetlen dokumentáció.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért nem elég Malpensán a helyszíni benyomás?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nagy reptéren könnyű úgy érezni, hogy a helyzet teljesen kezelhetetlen. A claim szempontjából viszont
                nem a benyomás, hanem a dokumentálható végső veszteség számít igazán.
              </p>
              <p>
                Emiatt Malpensán is a teljes történetet kell látni: mikor indultál volna eredetileg, mit ajánlott az
                airline, és mikor értél oda végül.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj Milánóban?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a PNR-t, az airline e-mailjeit és app-üzeneteit, az eredeti és új útvonalat,
                valamint a kijelzőről készült képeket. Ha több változás történt, mindegyiket külön mentsd el.
              </p>
              <p>
                A milánói ügyeknél a pontos időrend sokat számít, mert a későbbi claim értékelése sokszor ezen múlik.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért fontos az új útvonal minősége?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a légitársaság új megoldást ajánl, a kérdés nem csak az, hogy kaptál-e valamit, hanem az is, hogy az
                mennyire közelítette meg az eredeti utazási szándékot. Egy gyenge alternatíva nagy plusz veszteséget hagyhat.
              </p>
              <p>
                Ezért Malpensánál is fontos része az ügynek, hogy a felajánlott új útvonal pontosan megmaradjon a
                dokumentációban.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes tortenet</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Malpensán is a teljes utazási történet mutatja meg a claim valódi súlyát.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső célállomásra érkezés ideje mutatja meg a tényleges időveszteséget.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Bizonyitas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A jó dokumentáció sokkal fontosabb, mint az, mennyire kaotikusnak tűnt a helyzet a helyszínen.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Malpensán már most látszik, hogy a végső érkezés jelentősen kitolódik vagy a felajánlott új útvonal
                gyenge, érdemes gyorsan átnézni az ügyet. A frissen mentett részletek később nagyon sokat érnek.
              </p>
              <p>
                Minél több a változás, annál fontosabb gyorsan összerakni a teljes időrendet és az összes bizonyítékot.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Malpensához
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Őrizd meg az airline minden értesítését.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Dokumentáld a költségeket és az időrendet.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Malpensán is a végső célállomás a fontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. Ez mutatja meg legjobban, mekkora lett a teljes utazási veszteség.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért kell Malpensán az új útvonalat is elmenteni?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert ebből látszik később, mennyire volt jó vagy rossz a légitársaság által adott alternatíva.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért nem elég arra hivatkozni, hogy nagy zavar volt a reptéren?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert a claimet végül nem a hangulat, hanem a dokumentálható késés, az új útvonal és a teljes időveszteség dönti el.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
