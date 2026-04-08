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

export default function FrankfurtRepuloterJogok() {
  return (
    <LayoutHu>
      <SEO
        title="Frankfurt repülőtér jogok – késések és kártérítés [2026]"
        description="Mit tegyél, ha a frankfurti repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, csatlakozásról, átfoglalásról és bizonyításról."
        url="https://problemlot.com/hu/blog/frankfurt-repuloter-jogok"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Frankfurt repülőtér jogok – késések és kártérítés [2026]",
            description:
              "Magyar útmutató a frankfurti repülőtéren felmerülő késésekhez, törlésekhez, csatlakozásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/frankfurt-repuloter-jogok",
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
                name: "Frankfurtban lekésett csatlakozásnál is lehet EU261-claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Ha az útvonal egy foglalásban volt és a végső célállomásra jelentős késéssel értél oda, sok ilyen ügyben felmerülhet EU261-claim.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos Frankfurtban az airline által ajánlott új útvonal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert egy nagy nemzetközi hubon az átfoglalás minősége sokat számít. Nem csak az a kérdés, hogy kaptál-e másik járatot, hanem az is, mennyi időt veszítettél vele.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni a frankfurti reptéren?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passokat, a PNR-t, az airline üzeneteit, az eredeti és az új útvonalat, valamint minden releváns blokkot ételről, hotelről vagy közlekedésről.",
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
            <span className="text-slate-900 dark:text-white">Frankfurt repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Frankfurt repülőtér jogok
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>frankfurti repülőtér</strong> az egyik legfontosabb európai csomópont, ezért a késés vagy
              törlés itt gyakran csatlakozási problémává, hosszú várakozássá vagy teljes útvonal-átírássá válik.
              Ilyenkor a claim valódi értéke sokszor a <strong>végső érkezésben</strong> és az átfoglalás minőségében
              látszik meg.
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
              <strong>Frankfurtban is lehet erős EU261-claim, de a teljes útvonalat kell nézni.</strong> Ha a késés
              miatt lekésted a csatlakozást, vagy gyenge alternatív megoldást kaptál, a végső célállomásra érkezés
              ideje sokkal fontosabb lehet, mint az első kapunál látott csúszás.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Frankfurtban omlott össze az útvonalad?</h2>
            <p className="mb-6 text-blue-100">
              Ha a csatlakozás elveszett, új útvonalat kaptál vagy a végső érkezés jelentősen kitolódott, érdemes most
              gyorsan ellenőrizni, mennyire lehet erős az ügyed.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Frankfurti járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a frankfurti ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Egy foglalásban lévő teljes utazás.</li>
                <li>Jelentős végső érkezési késés.</li>
                <li>Jól dokumentált átfoglalási ajánlat.</li>
                <li>Mentett kommunikáció és releváns blokkok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti a claimet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Külön jegyen szervezett self-transfer.</li>
                <li>Nem megőrzött eredeti és új útvonal.</li>
                <li>Csak az első járat indulási idejére épített értelmezés.</li>
                <li>Bizonyítatlan költségek és hiányos idővonal.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért kell Frankfurtban az egész foglalást nézni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Frankfurt tipikus hub, ahol egy kisebb első csúszás is elég lehet ahhoz, hogy az egész útvonal
                felboruljon. Emiatt az utas szempontjából a valódi veszteség sokszor nem az első késés, hanem az, hogy
                később ért oda a végső célállomásra.
              </p>
              <p>
                Ha a teljes utazás egy foglalásban volt, ez a logika különösen fontos, mert a későbbi claim alapja is
                gyakran erre épül.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj Frankfurtban?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passokat, a PNR-t, az airline összes üzenetét, az eredeti és az új útvonal részleteit,
                valamint a kijelzőkről vagy appból mentett információkat. Több átfoglalás esetén minden változás külön
                is fontos lehet.
              </p>
              <p>
                Frankfurti ügyeknél a későbbi elemzés erejét gyakran az adja, hogy pontosan látszik, hogyan alakult az
                utazás minden egyes lépése.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért kulcskérdés az átfoglalás minősége?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Egy olyan nagy repülőtéren, mint Frankfurt, sokszor több alternatív megoldás is elképzelhető. Emiatt a
                claimnél később az is fontos lehet, hogy a légitársaság valóban észszerű új útvonalat ajánlott-e.
              </p>
              <p>
                Nem minden új jegy vagy járat jelent egyformán jó megoldást. A teljes időveszteség itt is központi
                szerepet kap.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes utazas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Frankfurtban a teljes foglalás története mutatja meg, mennyit veszítettél valójában.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim sokszor itt dől el, nem az első járat kapujánál.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Athfoglalasi logika</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Egy nagy hubon az új útvonal minősége önmagában is fontos vitapont lehet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes rögtön claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Frankfurtban már most biztos, hogy a csatlakozás elúszott, vagy az új útvonal jelentős extra időt
                jelent, nem érdemes sokáig várni az első értelmezéssel. A friss dokumentáció és a pontos idővonal sokat
                segít.
              </p>
              <p>
                Különösen igaz ez akkor, ha több különböző ajánlatot kaptál, és később nehéz lenne visszaidézni, melyik
                mikor és milyen feltételekkel érkezett.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Frankfurthoz
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Őrizd meg az airline minden releváns üzenetét.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Tartsd meg a hotel, taxi és étkezés blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Frankfurtban lekéstem a csatlakozást. Ez sokat számít?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen. Ha az egész útvonal egy foglalásban volt, a végső célállomásra érkezési késés gyakran a claim
                  legfontosabb eleme.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontosabb itt az új útvonal, mint egy kisebb reptéren?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert Frankfurtban a légitársaság gyakran több reális opció közül választhat. Emiatt az ajánlott
                  alternatíva minősége nagyobb súlyt kap.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mit tegyek, ha több különböző új járatot ajánlanak Frankfurtban?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ments el minden verziót. Később fontos lehet látni, melyik ajánlat milyen időveszteséggel járt volna.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
