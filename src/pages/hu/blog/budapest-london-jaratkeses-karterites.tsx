import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  PoundSterling,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function BudapestLondonJaratkesesKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Budapest–London járatkésés kártérítés – mikor jár? [2026]"
        description="Magyar útmutató Budapest–London járatkéséshez: mikor lehet erős a kártérítési ügy, hogyan számít a végső érkezés, és mire figyelj EU261 / UK261 esetén."
        url="https://problemlot.com/hu/blog/budapest-london-jaratkeses-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budapest–London járatkésés kártérítés – mikor jár? [2026]",
            description:
              "Magyar útmutató a Budapest és London közötti késő járatokhoz: mikor lehet erős a claim, hogyan számít a végső késés, és mire figyelj ezen az útvonalon.",
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
              "@id": "https://problemlot.com/hu/blog/budapest-london-jaratkeses-karterites",
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
                name: "Budapest–London járatkésésnél járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A Budapest indulás erős kiindulópontot adhat, de a claim erejét a végső érkezési késés, az airline és a konkrét körülmények együtt döntik el.",
                },
              },
              {
                "@type": "Question",
                name: "Budapest–London útvonalnál EU261 vagy UK261 számít?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ezen az útvonalon gyakran mindkét logika felmerül a felhasználók fejében, de a konkrét helyzetet a járat iránya, az airline és az útvonal szerkezete alapján kell pontosan megítélni.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a legfontosabb bizonyíték Budapest–London késésnél?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A boarding pass, a PNR, az airline értesítései, a kijelzőről készült fotók és a végső londoni érkezési idő igazolása a legfontosabb elemek közé tartoznak.",
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
            <span className="text-slate-900 dark:text-white">Budapest–London</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Utvonal-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Budapest–London járatkésés kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Budapest–London</strong> útvonal az egyik legerősebb keresési intenttel bíró kapcsolat, mert
              sok az üzleti utas, a city-break forgalom és a low-cost járat. Emiatt egy késésnél az első kérdés
              általában az, hogy <strong>járhat-e kártérítés</strong>, a második pedig az, hogy valójában melyik
              késés számít: az indulási csúszás vagy a londoni végső érkezés.
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
              <strong>Budapest–London járatkésésnél sok esetben lehet erős claim.</strong> A budapesti indulás gyakran
              kedvező kiindulópont, ale a döntő kérdés itt is az, hogy mennyi lett a londoni végső érkezési késés, és
              pontosan milyen járati helyzet alakult ki.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Budapestről Londonba késve indultál?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járatod jelentősen csúszott, új útvonalat kaptál vagy a londoni érkezés komolyan kitolódott, most
              érdemes gyorsan ellenőrizni, mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Budapest–London járat ellenőrzése
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
                <li>Budapesti indulás és tiszta útvonal-logika.</li>
                <li>Jelentős londoni végső érkezési késés.</li>
                <li>Jól dokumentált boarding pass, PNR és értesítések.</li>
                <li>Rendezett bizonyítás a teljes késési láncról.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti vagy bonyolítja?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Csak az első indulási csúszásra épített következtetés.</li>
                <li>Hiányzó nyom a londoni tényleges érkezésről.</li>
                <li>Bizonytalan útvonal- vagy szabályértelmezés.</li>
                <li>Nem megőrzött dokumentáció és költségblokkok.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért erős keresési intent a Budapest–London útvonal?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ezen az útvonalon sok az azonnali, gyakorlati kérdés: megéri-e claimet indítani, számít-e a low-cost
                airline, és melyik szabályrendszer véd pontosan. Emiatt a felhasználó itt ritkán elméletet keres, inkább
                gyors választ akar arra, hogy az ő konkrét késése mennyire lehet erős ügy.
              </p>
              <p>
                Pont ezért fontos ezen az útvonalon egyszerre jól kezelni a SEO-t, a snippet logikát és a conversion intentet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Melyik késés számít valójában?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Budapest–London útvonalnál sok utas az indulási csúszásból indul ki. A claim erejét azonban gyakran
                inkább az mutatja meg, hogy mennyivel később értél oda ténylegesen Londonba.
              </p>
              <p>
                Ezért fontos nem csak a budapesti táblát nézni, hanem a londoni végső érkezést is dokumentálni.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit dokumentálj ezen az útvonalon?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a PNR-t, az airline e-mailjeit és app-üzeneteit, a budapesti kijelzőről
                készült képeket, valamint minden olyan adatot, ami a londoni érkezés tényleges idejét mutatja.
              </p>
              <p>
                Ha a késésből új útvonal vagy másik járat lett, annak minden részletét is mentsd el, mert később ez
                mutatja meg a teljes időveszteséget.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <MapPin className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Budapesti indulás</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ez sokszor kedvező kiindulópont, de önmagában még nem dönt el mindent.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Londoni erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső londoni érkezés sokszor fontosabb, mint maga az első indulási csúszás.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <PoundSterling className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">EU261 / UK261</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ezen a relacji a felhasználók gyakran erre kérdeznek rá elsőként, ezért az értelmezés különösen fontos.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a londoni érkezés jelentősen kitolódott, vagy a járatból új útvonal lett, érdemes korán átnézni az
                ügyet. Ezen az útvonalon a gyors ellenőrzés fő előnye, hogy még frissen összeáll a teljes bizonyítási kép.
              </p>
              <p>
                Minél tisztább a budapesti indulás, a londoni érkezés és az airline kommunikáció idővonala, annál könnyebb
                megítélni az ügy erejét.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Budapest–London késéshez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Tartsd meg a boarding passt és a PNR-t.</li>
              <li>Fotózd le a budapesti kijelzőt és mentsd az airline értesítéseit.</li>
              <li>Dokumentáld a londoni tényleges érkezési időt.</li>
              <li>Mentsd el az új útvonalat, ha átfoglalás történt.</li>
              <li>Őrizd meg a releváns költségek blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Budapest–London járatkésésnél is a végső érkezés a fontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. A londoni tényleges érkezés ideje mutatja meg a teljes veszteséget a legjobban.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  A low-cost járat gyengébb ügyet jelent ezen az útvonalon?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem. A low-cost modell önmagában semmit nem dönt el. A szabályi keret és a végső késés számít.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért kell külön dokumentálni a londoni érkezést?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert a claim ereje sokszor pont ezen múlik, nem csak a budapesti indulási táblán látott csúszáson.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
