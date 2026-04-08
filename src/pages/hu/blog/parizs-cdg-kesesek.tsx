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

export default function ParizsCdgKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Párizs CDG késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha a párizsi CDG repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, csatlakozásról, átfoglalásról és végső késésről."
        url="https://problemlot.com/hu/blog/parizs-cdg-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Párizs CDG késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató a párizsi CDG repülőtéren felmerülő késésekhez, törlésekhez, csatlakozásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/parizs-cdg-kesesek",
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
                name: "CDG-nél is a végső célállomás számít leginkább?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen. A párizsi CDG gyakori átszállási pont, ezért a claim erejét gyakran a végső érkezési késés mutatja meg.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos CDG-nél az új útvonal és az átfoglalás?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert egy nagy hubon sokszor több lehetséges alternatíva van. A későbbi claimnél az is számít, milyen új útvonalat ajánlott a légitársaság és mennyi plusz időveszteséget okozott.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak CDG-n törlés vagy késés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg az eredeti és az új útvonalat, a boarding passokat, a PNR-t, az airline üzeneteit, a kijelzőfotókat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Párizs CDG</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Párizs CDG késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Párizs Charles de Gaulle</strong> repülőtér sok magyar utasnál nagy átszállási és nemzetközi
              csomópont, ezért a késések és törlések itt gyakran az egész utazást érintik. CDG esetén a claim
              megítélésénél különösen fontos, hogy mennyit csúszott a <strong>végső érkezés</strong>, és milyen
              minőségű alternatív útvonalat ajánlott a légitársaság.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
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
              <strong>CDG-nél a claim erejét sokszor a teljes útvonal mutatja meg.</strong> Nem elég azt nézni, mennyit
              késett az első szakasz: a végső célállomásra érkezés ideje és az átfoglalás minősége gyakran sokkal fontosabb.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">CDG-n borult fel az útvonalad?</h2>
            <p className="mb-6 text-blue-100">
              Ha a csatlakozás bizonytalanná vált, a járat törlődött vagy az új útvonal nagy plusz időveszteséget okoz,
              most érdemes gyorsan ellenőrizni, mennyire erős lehet a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              CDG járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a CDG-ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Egy foglalásban lévő teljes útvonal.</li>
                <li>Jól látható végső érkezési késés.</li>
                <li>Dokumentált átfoglalási lehetőségek.</li>
                <li>Megőrzött airline üzenetek és költségblokkok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi bonyolítja a claimet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Külön jegyes továbbutazás.</li>
                <li>Hiányzó nyom az eredeti és új útvonalról.</li>
                <li>Csak az első szakasz indulási csúszására épített logika.</li>
                <li>Nem dokumentált költségek és kommunikáció.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért különösen fontos a végső érkezés CDG-nél?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                CDG tipikus olyan reptér, ahol egy kisebb első késés is elég lehet ahhoz, hogy a további szakaszok
                teljesen átrendeződjenek. Emiatt a valódi utazási veszteség sokszor csak a végső célállomásnál lesz
                látható.
              </p>
              <p>
                Ezért a claim erejét itt is inkább a teljes útvonal eredménye mutatja meg, nem pusztán a kapunál
                látott első szám.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj a párizsi CDG-n?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passokat, a PNR-t, az airline összes értesítését, az eredeti és új útvonalat, a
                kijelzőkről készült fotókat és a költségek blokkjaidat. Több átfoglalás esetén minden módosítás külön
                jelentőséggel bírhat.
              </p>
              <p>
                CDG-s helyzeteknél a részletes idővonal később különösen fontos, mert a hosszabb és összetettebb útvonalak
                miatt gyorsan el tud mosódni, mi történt pontosan.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért számít az átfoglalás minősége Párizsban?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Egy nagy hubon a légitársaság sokszor több alternatívát is adhat. Később nem csak az lesz fontos, hogy
                kaptál-e új járatot, hanem az is, mennyivel lett későbbi az érkezés, és mennyire közelítette meg az
                új terv az eredeti utazási szándékot.
              </p>
              <p>
                Az átfoglalás minősége ezért CDG-nél nem mellékes részlet, hanem a claim egyik központi eleme lehet.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes utvonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                CDG-nél a claim sokszor csak a teljes foglalással együtt érthető jól.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső érkezési idő gyakran többet mond, mint az első indulási adat.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Athfoglalasi minoseg</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Párizsban az ajánlott új útvonal minősége önmagában is fontos vitapont lehet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha CDG-n már most látszik, hogy a csatlakozás elveszett, a teljes útvonal jelentősen késik vagy az
                átfoglalás gyenge, érdemes korán átnézni az ügyet. A friss dokumentáció és a pontos útvonal-történet
                sokat segít.
              </p>
              <p>
                Minél több a módosítás, annál fontosabb gyorsan összerakni, pontosan mi volt az eredeti terv és mi lett
                belőle végül.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista CDG-hez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Fotózd le a kijelzőt és mentsd az airline értesítéseit.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Dokumentáld a releváns költségeket és az átfoglalás részleteit.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  CDG-n lekéstem a csatlakozást. Ez sokat számít a claimnél?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, főleg ha az egész útvonal egy foglalásban volt. Ilyenkor a végső érkezési késés gyakran a claim
                  legerősebb eleme.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontos CDG-n az új útvonal dokumentálása?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert több módosításnál csak így látszik később, milyen alternatívát adott a légitársaság és mekkora
                  lett a teljes időveszteség.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  CDG-n is a végső érkezés a fontosabb, nem a gate-nél látott első csúszás?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. A teljes utazási veszteséget általában ez mutatja meg a legjobban.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
