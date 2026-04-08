import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe,
  MapPin,
  Plane,
  Route,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function LondonHeathrowKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="London Heathrow késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha Heathrow repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261, UK261, csatlakozás, átfoglalás és végső késés témában."
        url="https://problemlot.com/hu/blog/london-heathrow-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "London Heathrow késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató a londoni Heathrow repülőtéren felmerülő késésekhez, törlésekhez, átfoglalásokhoz és EU261/UK261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/london-heathrow-kesesek",
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
                name: "Heathrow-n késő járatnál EU261 vagy UK261 számít?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ez az útvonaltól és az airline-tól függ. Heathrow esetén különösen fontos megnézni, hogy a járat melyik szabályrendszer alá esik, és hogyan alakult a végső érkezés.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos Heathrow-n a végső célállomás?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert Heathrow sok hosszú távú és csatlakozó útvonal központja. A claim erejét gyakran a teljes utazási lánc és a végső érkezési késés mutatja meg.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Heathrow-n átfoglalás után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg az eredeti jegyet, az új útvonalat, az airline összes üzenetét, a boarding passokat, a kijelzőkről készült képeket és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">London Heathrow</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              London Heathrow késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>London Heathrow</strong> az egyik legfontosabb európai és interkontinentális repülőtér, ezért
              a késések és törlések itt sokszor nem egyszerű rövid csúszást, hanem teljes útvonal-átírást jelentenek.
              Heathrow-nál különösen fontos, hogy tisztán lásd: <strong>EU261, UK261 vagy más logika</strong> játszik,
              és mekkora lett a végső időveszteség.
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
              <strong>Heathrow-n a claim erejét gyakran a teljes útvonal és a szabályrendszer dönti el.</strong>
              Nem elég azt nézni, hogy késett-e a járat: fontos az is, hogy EU261 vagy UK261 védi-e az utast, és mikor
              értél oda végül a célállomásra.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Heathrow-n csúszott szét az utazásod?</h2>
            <p className="mb-6 text-blue-100">
              Ha hosszú átfoglalást kaptál, elveszett a csatlakozás vagy a végső érkezés jelentősen kitolódott, most
              érdemes gyorsan ellenőrizni, mennyire erős lehet az ügyed.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Heathrow járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a Heathrow-s ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jól azonosítható EU261 vagy UK261 keret.</li>
                <li>Egy foglalásban lévő teljes útvonal.</li>
                <li>Jelentős végső érkezési késés.</li>
                <li>Megőrzött átfoglalási és kommunikációs bizonyítékok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi teszi bonyolultabbá?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Bizonytalan szabályrendszer-értelmezés.</li>
                <li>Külön jegyes self-transfer útvonal.</li>
                <li>Nem megőrzött eredeti és új útvonal.</li>
                <li>Csak az első késésre épített következtetés.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért különösen fontos Heathrow-n a szabályrendszer?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Heathrow sajátossága, hogy nagyon sok útvonalnál a felmerülő jogok megértéséhez azt is tisztázni kell,
                pontosan melyik rendszer vonatkozik az adott járatra. A claim ereje ezért itt nem csak a késéstől,
                hanem a szabályi kerettől is függ.
              </p>
              <p>
                Ezért Londonnál különösen veszélyes pusztán a repülőtéri élmény alapján következtetni. A tényleges
                jogi helyzetet mindig az útvonal, a légitársaság és a végső érkezés együtt rajzolja ki.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért kulcsfontosságú a végső célállomás Heathrow-n?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Heathrow-n a késések jelentős része hosszú távú vagy többszakaszos utazást érint. Emiatt a valódi
                veszteség sokszor nem az első kijelzett csúszásban, hanem a végső célállomásra való megérkezés idejében
                jelenik meg.
              </p>
              <p>
                Ha az egész útvonal egy foglalásban volt, a végső érkezés még fontosabb elem lesz a későbbi claimben.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit dokumentálj Heathrow-n átfoglalás után?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg az eredeti és az új útvonal részleteit, mentsd el a boarding passokat, a PNR-t, az airline
                e-mailjeit és az app-üzeneteket. Többszöri módosításnál minden egyes változás külön is értékes lehet.
              </p>
              <p>
                Heathrow-n a hosszú távú és csatlakozó útvonalak miatt a teljes újraszervezési lánc megőrzése különösen
                fontos a későbbi vitákhoz.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Globe className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">EU261 vagy UK261</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Heathrow-n ez az első kérdések egyike, mert nem minden ügy ugyanabba a keretbe esik.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes utvonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A Heathrow-s claim sokszor csak a teljes utazási lánccal együtt értelmezhető helyesen.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső késés gyakran többet mond az ügyről, mint az első indulási adat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Heathrow-n már most látszik, hogy a teljes utazás jelentősen csúszik, a csatlakozás elveszett vagy
                a felajánlott új útvonal gyenge, érdemes gyorsan átnézni az ügyet. Itt a korai tisztázás különösen
                hasznos lehet.
              </p>
              <p>
                Minél több szakasz és szabályrendszer érintett, annál fontosabb gyorsan egy helyre rendezni az összes
                releváns adatot.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Heathrow-hoz
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Őrizd meg az airline minden üzenetét.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Dokumentáld a releváns költségeket és a módosítások sorrendjét.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Heathrow-n késik a járatom. Honnan tudom, hogy EU261 vagy UK261 vonatkozik rám?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ezt az útvonal, a légitársaság és az utazás szerkezete együtt dönti el. Heathrow-n ezt különösen
                  érdemes tisztán megnézni, mert itt ez gyakran nem triviális.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontosabb Heathrow-n a teljes útvonal, mint egy egyszerű pont-pont járatnál?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert itt sok az interkontinentális és csatlakozó utazás. Egy kisebb első csúszás is nagy végső
                  veszteséget okozhat.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mit tegyek, ha Heathrow-n többször átírják az új járatot?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ments el minden változást. A több szakaszból álló újraszervezésnél pont ez segít később megmutatni,
                  mekkora lett valójában a teljes időveszteség.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
