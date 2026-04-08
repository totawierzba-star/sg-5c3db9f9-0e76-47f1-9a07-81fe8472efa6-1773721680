import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Euro,
  MapPin,
  Plane,
  Sun,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function BudapestMadridKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Budapest–Madrid kártérítés – mikor lehet erős a claim? [2026]"
        description="Magyar útmutató Budapest–Madrid járatokhoz: mikor lehet erős a kártérítési ügy késés vagy törlés esetén, hogyan számít a végső érkezés, és mit dokumentálj."
        url="https://problemlot.com/hu/blog/budapest-madrid-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budapest–Madrid kártérítés – mikor lehet erős a claim? [2026]",
            description:
              "Magyar útmutató a Budapest és Madrid közötti járatokhoz: mikor lehet erős a claim késés vagy törlés esetén, és hogyan számít a végső érkezési veszteség.",
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
              "@id": "https://problemlot.com/hu/blog/budapest-madrid-karterites",
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
                name: "Budapest–Madrid járatnál járhat kártérítés késés esetén?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A claim erejét az dönti el, hogy mennyi lett a végső érkezési késés, milyen útvonalról van szó, és mennyire rendezett a bizonyítás.",
                },
              },
              {
                "@type": "Question",
                name: "Budapest–Madrid útvonalnál mi a legfontosabb adat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A budapesti indulási információk mellett a madridi tényleges érkezési idő a legfontosabb, mert ez mutatja meg a teljes időveszteséget.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Budapest–Madrid problémánál?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a kijelzőről készült fotókat, az esetleges új útvonalat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Budapest–Madrid</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Utvonal-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Budapest–Madrid kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Budapest–Madrid</strong> útvonalon sok utas vakáció, city-break vagy rövidebb európai utazás
              miatt repül, ezért egy késés vagy törlés gyorsan nagyon konkrét kérdéssé válik: mennyi pénzről lehet szó,
              mennyit veszítettél valójában, és elég erős-e a claim ahhoz, hogy érdemben foglalkozz vele.
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
              <strong>Budapest–Madrid járatnál sok esetben lehet erős kártérítési ügy.</strong> A claim erejét azonban
              nem csak a budapesti indulási csúszás, hanem főleg a madridi végső érkezési veszteség és a teljes útvonal
              dokumentáltsága mutatja meg.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Budapestről Madridba problémás volt a járatod?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járat jelentősen késett, törölték vagy új útvonalat kaptál, most érdemes gyorsan ellenőrizni,
              mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Budapest–Madrid járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti az ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jelentős madridi végső késés.</li>
                <li>Jól dokumentált boarding pass, PNR és airline értesítések.</li>
                <li>Tiszta időrend az indulásról és érkezésről.</li>
                <li>Megőrzött új útvonal és költségblokkok, ha módosítás történt.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti vagy bonyolítja?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Csak az első budapesti csúszásra épített következtetés.</li>
                <li>Hiányzó bizonyíték a madridi tényleges érkezésről.</li>
                <li>Nem dokumentált új útvonal.</li>
                <li>Rendezetlen vagy hiányos költségbizonyítékok.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért erős route-specific téma a Budapest–Madrid?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ezen az útvonalon a felhasználó általában nem elméleti választ keres, hanem azt szeretné tudni, hogy a
                saját konkrét problémája elég erős-e ahhoz, hogy claim legyen belőle. Ezért itt különösen fontos a gyors,
                pontos és gyakorlatias válasz.
              </p>
              <p>
                A route-specific tartalom ezen a ponton nem csak SEO-szempontból erős, hanem conversion szempontból is,
                mert a keresési intent már közel áll a döntéshez.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Melyik késés számít igazán ezen az útvonalon?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sok utas a budapesti indulásnál látott csúszásból indul ki, pedig a claim erejét gyakran inkább a madridi
                tényleges érkezés mutatja meg. Ez adja meg a valódi teljes időveszteséget.
              </p>
              <p>
                Ha a késésből új útvonal vagy jelentősen későbbi érkezés lett, ezt különösen fontos pontosan rögzíteni.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit dokumentálj Budapest–Madrid ügyben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a PNR-t, az airline összes értesítését, a budapesti kijelzőről készült képeket,
                valamint minden olyan adatot, ami a madridi tényleges érkezést mutatja.
              </p>
              <p>
                Ha a késésből új járat vagy másik útvonal lett, annak minden részletét is mentsd el, mert később ez
                mutatja meg a teljes utazási veszteséget.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <MapPin className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Budapesti indulás</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Fontos kiindulópont, de önmagában még nem mutatja meg a teljes veszteséget.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Madridi erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim erejét sokszor ez mutatja meg a legpontosabban.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Euro className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Valos veszteseg</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A tényleges időveszteség és a jól mentett bizonyítékok együtt teszik erőssé az ügyet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a madridi érkezés jelentősen kitolódott, vagy a járatból új útvonal lett, érdemes korán átnézni az
                ügyet. Ezen az útvonalon a gyors ellenőrzés fő előnye, hogy még frissen összeáll a teljes bizonyítási kép.
              </p>
              <p>
                Minél tisztább a budapesti indulás, a madridi érkezés és az airline kommunikáció idővonala, annál
                könnyebb megítélni az ügy erejét.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Budapest–Madrid problémához
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Tartsd meg a boarding passt és a PNR-t.</li>
              <li>Fotózd le a budapesti kijelzőt és mentsd az airline értesítéseit.</li>
              <li>Dokumentáld a madridi tényleges érkezési időt.</li>
              <li>Mentsd el az új útvonalat, ha módosítás történt.</li>
              <li>Őrizd meg a releváns költségek blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Budapest–Madrid járatnál is a madridi érkezés a fontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. Ez mutatja meg a teljes időveszteséget a legjobban.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  A vakációs vagy city-break jelleg gyengébb claimet jelent?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem. A jogi helyzetet nem az utazás hangulata, hanem a szabályi keret és a végső késés dönti el.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért kell külön dokumentálni a madridi érkezést?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert a claim ereje gyakran ezen múlik, nem csak a budapesti indulási csúszáson.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
