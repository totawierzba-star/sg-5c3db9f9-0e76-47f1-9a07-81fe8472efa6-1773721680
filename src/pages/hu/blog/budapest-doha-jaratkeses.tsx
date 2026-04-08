import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe,
  MapPin,
  Plane,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function BudapestDohaJaratkeses() {
  return (
    <LayoutHu>
      <SEO
        title="Budapest–Doha járatkésés – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató Budapest–Doha járatkéséshez: mikor lehet erős a claim, hogyan számít az EU261, a végső érkezés és a teljes útvonal hosszú távú járatnál."
        url="https://problemlot.com/hu/blog/budapest-doha-jaratkeses"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budapest–Doha járatkésés – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató a Budapest és Doha közötti késő járatokhoz: mikor lehet erős a claim, hogyan számít a végső késés és az EU261 logikája hosszabb reláción.",
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
              "@id": "https://problemlot.com/hu/blog/budapest-doha-jaratkeses",
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
                name: "Budapest–Doha járatkésésnél járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A budapesti indulás gyakran fontos kiindulópont, de a claim erejét a végső érkezési késés, a légitársaság és a teljes útvonal együtt határozza meg.",
                },
              },
              {
                "@type": "Question",
                name: "Budapest–Doha útvonalnál miért fontos a végső érkezés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Hosszú távú reláción a valódi veszteség sokszor nem az indulási csúszásban, hanem a dohai vagy további végső érkezés jelentős eltolódásában látszik.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Budapest–Doha késésnél?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, az eredeti és az új útvonalat, a kijelzőfotókat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Budapest–Doha</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Utvonal-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Budapest–Doha járatkésés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Budapest–Doha</strong> útvonalon a felhasználó általában nem kis csúszásra keres választ, hanem
              arra, hogy egy <strong>hosszú távú késés</strong> mennyire lehet erős claim. Ezen a reláción különösen
              fontos a teljes útvonal, a tényleges végső érkezés és az, hogy a késés hogyan borította fel a további terveket.
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
              <strong>Budapest–Doha járatkésésnél sok esetben lehet erős claim.</strong> Hosszú távú útvonalnál a
              legfontosabb kérdés az, hogy mennyi lett a tényleges dohai vagy további végső érkezési veszteség, és az
              adott járat hogyan illeszkedik az `EU261` logikába.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Budapestről Dohába késve ment a járatod?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járat jelentősen csúszott, vagy a késésből új útvonal lett, most érdemes gyorsan ellenőrizni,
              mennyire lehet erős a claim egy ilyen hosszú reláción.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Budapest–Doha járat ellenőrzése
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
                <li>Jelentős dohai végső érkezési késés.</li>
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
                <li>Csak a budapesti indulási csúszásra épített következtetés.</li>
                <li>Hiányzó bizonyíték a dohai tényleges érkezésről.</li>
                <li>Nem dokumentált új útvonal vagy további kapcsolat.</li>
                <li>Bizonytalan hatály- vagy airline-értelmezés.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért különösen fontos ezen az útvonalon a teljes veszteség?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Hosszabb reláción a késés következményei rendszerint sokkal nagyobbak. Egy ilyen úton nem csak néhány
                órát veszít az utas, hanem gyakran teljes további kapcsolatokat, hoteléjszakákat vagy üzleti és családi terveket is.
              </p>
              <p>
                Emiatt a Budapest–Doha route-on különösen fontos a teljes veszteséget látni, nem csak az első indulási csúszást.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Melyik késés számít igazán?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sok utas elsőként a budapesti indulási időt nézi, pedig a claim erejét gyakran inkább az mutatja meg,
                mikor értél oda ténylegesen Dohába vagy a további célállomásodra.
              </p>
              <p>
                Emiatt ezen a reláción is különösen fontos a végső érkezés pontos dokumentálása.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit dokumentálj Budapest–Doha ügyben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a budapesti kijelzőről készült képeket,
                valamint minden adatot, ami a dohai vagy további végső érkezést mutatja.
              </p>
              <p>
                Ha a késésből új útvonal vagy másik kapcsolat lett, azt is pontosan mentsd el, mert ebből látszik a teljes veszteség.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Globe className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Hosszabb relacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A hosszabb útvonal miatt a tényleges veszteség és a claim súlya is rendszerint nagyobb.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dohai erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim erejét sokszor ez mutatja meg a legjobban.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <TimerReset className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes idővonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A teljes útvonal időrendje nélkül nehezebb jól megítélni a long-haul claim valódi erejét.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a dohai érkezés jelentősen kitolódott, vagy a járatból új útvonal lett, érdemes korán átnézni az ügyet.
                Ezen a reláción a gyors ellenőrzés különösen értékes, mert a teljes veszteség gyorsan nagyra nőhet.
              </p>
              <p>
                Minél tisztább a budapesti indulás, a dohai érkezés és az airline kommunikáció idővonala, annál könnyebb
                megmutatni az ügy valódi erejét.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Budapest–Doha késéshez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Tartsd meg a boarding passt és a PNR-t.</li>
              <li>Fotózd le a budapesti kijelzőt és mentsd az airline értesítéseit.</li>
              <li>Dokumentáld a dohai tényleges érkezési időt.</li>
              <li>Mentsd el az új útvonalat, ha módosítás történt.</li>
              <li>Őrizd meg a releváns költségek blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Budapest–Doha késésnél is a végső érkezés a fontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. A tényleges dohai vagy további végső érkezés mutatja meg a teljes veszteséget a legjobban.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért erősebb intentű ez a route, mint egy rövidebb európai út?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert hosszabb reláción a késés következményei nagyobbak, ezért a felhasználó általában konkrét megoldást keres, nem csak általános információt.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért kell külön dokumentálni a dohai érkezést?
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
