import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Sun,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function BudapestBarcelonaKeses() {
  return (
    <LayoutHu>
      <SEO
        title="Budapest–Barcelona késés – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató Budapest–Barcelona járatkéséshez: mikor lehet erős a claim, hogyan számít a végső érkezés, és milyen bizonyítékokat kell megőrizni."
        url="https://problemlot.com/hu/blog/budapest-barcelona-keses"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budapest–Barcelona késés – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató a Budapest és Barcelona közötti késő járatokhoz: mikor lehet erős a claim, hogyan számít a végső késés, és mit kell dokumentálni.",
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
              "@id": "https://problemlot.com/hu/blog/budapest-barcelona-keses",
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
                name: "Budapest–Barcelona járatkésésnél járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A claim erejét itt is az dönti el, hogy mennyi lett a barcelonai végső érkezési késés, és mennyire tisztán dokumentálható az egész helyzet.",
                },
              },
              {
                "@type": "Question",
                name: "Budapest–Barcelona útvonalnál melyik késés számít igazán?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A budapesti indulási csúszás önmagában nem mindig elég. A claim erejét gyakran inkább a barcelonai tényleges érkezési idő mutatja meg.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Budapest–Barcelona késésnél?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a kijelzőről készült fotókat és minden olyan adatot, ami a tényleges barcelonai érkezést mutatja.",
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
            <span className="text-slate-900 dark:text-white">Budapest–Barcelona</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Utvonal-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Budapest–Barcelona késés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Budapest–Barcelona</strong> útvonalon sok az olyan utas, aki rövid nyaralásra, hétvégi útra vagy
              gyors városlátogatásra repül. Emiatt egy késés gyakran aránytalanul nagy hatású: nem csak néhány órát veszítesz,
              hanem a teljes utazási terv sérül. Pont ezért fontos tudni, mikor lehet ebből
              <strong> ténylegesen erős claim</strong>.
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
              <strong>Budapest–Barcelona járatkésésnél sok esetben lehet erős claim.</strong> A legfontosabb kérdés itt
              is az, hogy mennyi lett a tényleges barcelonai érkezési késés, és hogy ezt mennyire tudod tisztán bizonyítani.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Budapestről Barcelonába késve indultál?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járatod jelentősen csúszott, vagy a késés miatt a teljes utazási terved borult, most érdemes
              gyorsan ellenőrizni, mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Budapest–Barcelona járat ellenőrzése
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
                <li>Jelentős barcelonai végső érkezési késés.</li>
                <li>Jól dokumentált boarding pass, PNR és airline értesítések.</li>
                <li>Tiszta időrend az indulásról és érkezésről.</li>
                <li>Megőrzött költségblokkok és új útvonal, ha módosítás történt.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti vagy bonyolítja?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Csak a budapesti indulási késésre épített következtetés.</li>
                <li>Hiányzó bizonyíték a barcelonai tényleges érkezésről.</li>
                <li>Nem dokumentált új útvonal vagy módosítás.</li>
                <li>Hiányos költség- és kommunikációs nyom.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért különösen érzékeny ez az útvonal késésre?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Budapest–Barcelona járatoknál sok utas rövid időablakra utazik. Emiatt egy késés itt nem egyszerűen
                kényelmetlenség, hanem a teljes program felborulását is jelentheti.
              </p>
              <p>
                Ez a route-specific intentet is erősíti: a felhasználó általában nem általános szabályt keres, hanem
                gyors választ arra, hogy az ő konkrét helyzete elég erős-e claimhez.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Melyik késés számít valójában?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sok utas elsőként a budapesti indulási késést nézi. A claim erejét viszont gyakran inkább az mutatja meg,
                mennyivel később értél oda Barcelonába.
              </p>
              <p>
                Emiatt ezen az útvonalon is fontos külön dokumentálni a tényleges érkezési időt, nem csak az indulási csúszást.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit dokumentálj Budapest–Barcelona ügyben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a PNR-t, az airline értesítéseit, a budapesti kijelzőről készült képeket,
                valamint minden adatot, ami a barcelonai tényleges érkezést mutatja.
              </p>
              <p>
                Ha a késés miatt új útvonalat vagy másik járatot kaptál, azt is pontosan mentsd el, mert ez mutatja meg
                a teljes időveszteséget.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Sun className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Rovid utazasok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A rövid city-break és vakációs utak miatt a késés aránytalanul nagy veszteséget okozhat.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A tényleges barcelonai érkezés ideje mutatja meg a teljes veszteséget a legjobban.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <TimerReset className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Idovonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Minél tisztább az indulás és érkezés időrendje, annál könnyebb megítélni az ügy erejét.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a barcelonai érkezés jelentősen kitolódott, vagy a késésből új útvonal lett, érdemes korán átnézni
                az ügyet. Ezen a reláción a gyors ellenőrzés fő előnye, hogy még frissen összeáll a teljes bizonyítás.
              </p>
              <p>
                Minél tisztább a budapesti indulás, a barcelonai érkezés és az airline kommunikáció, annál könnyebb
                megmutatni a claim valódi erejét.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Budapest–Barcelona késéshez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Tartsd meg a boarding passt és a PNR-t.</li>
              <li>Fotózd le a budapesti kijelzőt és mentsd az airline értesítéseit.</li>
              <li>Dokumentáld a barcelonai tényleges érkezési időt.</li>
              <li>Mentsd el az új útvonalat, ha módosítás történt.</li>
              <li>Őrizd meg a releváns költségek blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Budapest–Barcelona késésnél is a végső érkezés a fontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. A barcelonai tényleges érkezés ideje mutatja meg a teljes veszteséget a legjobban.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  A rövid vakációs út gyengébb claimet jelent?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem. A jogi helyzetet nem az utazás hangulata, hanem a szabályi keret és a tényleges végső késés dönti el.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért kell külön dokumentálni a barcelonai érkezést?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert a claim ereje sokszor ezen múlik, nem csak a budapesti indulási csúszáson.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
