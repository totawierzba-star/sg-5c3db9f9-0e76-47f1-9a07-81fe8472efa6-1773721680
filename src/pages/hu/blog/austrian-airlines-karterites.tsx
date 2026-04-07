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

export default function AustrianAirlinesKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Austrian Airlines kártérítés – késés, törlés, EU261 [2026]"
        description="Magyar útmutató Austrian Airlines járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mire figyelj claimnél."
        url="https://problemlot.com/hu/blog/austrian-airlines-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Austrian Airlines kártérítés – késés, törlés, EU261 [2026]",
            description:
              "Magyar nyelvű útmutató Austrian Airlines járatokhoz: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
            datePublished: "2026-04-07",
            dateModified: "2026-04-07",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/austrian-airlines-karterites",
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
                name: "Austrian Airlines járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Az Austrian Airlines járatainál is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a késés vagy törlés megfelel a szabályoknak.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos az Austrian Airlinesnál a bécsi átszállás?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok magyar utas Austrian járattal Bécsen keresztül utazik tovább, ezért a claimnél gyakran a végső célállomásra való érkezési késés és az egy foglalás kérdése lesz a legfontosabb.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha az Austrian nem fizet vagy vitatja a claimet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor újra kell nézni az útvonalat, a végső késést, a csatlakozási logikát és az airline indoklását. Az első elutasítás nem mindig jelenti azt, hogy az ügy gyenge.",
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
            <span className="text-slate-900 dark:text-white">Austrian Airlines</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Austrian Airlines kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az Austrian Airlines sok magyar utas számára természetes választás, különösen bécsi indulással vagy
              bécsi átszállással. Emiatt gyakori kérdés, hogy <strong>mikor járhat kártérítés</strong> késés vagy
              törlés esetén. A rövid válasz az, hogy igen, sok esetben felmerülhet, de a döntést itt is az
              <strong> EU261</strong>, az útvonal és a tényleges járatesemény határozza meg.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 10 perc</span>
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
              <strong>Igen, Austrian Airlines járatnál is járhat kártérítés.</strong> A claim erejét főleg az dönti
              el, hogy a járat az EU261 hatálya alá tartozik-e, mekkora lett a végső érkezési késés, és hogyan hatott
              a probléma a teljes utazásodra.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A bécsi átszállás Austrian ügyben gyakran kulcskérdés</h2>
            <p className="mb-6 text-blue-100">
              Az Austrian Airlinesnál a claim sokszor nem egyetlen rövid késésről szól, hanem arról, hogy mi történt a
              teljes útvonal végén. Ha egy bécsi csatlakozás miatt csúszik meg az egész utazás, az már egészen más
              helyzet lehet, mint amit az első járatszakasz önmagában mutat.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Austrian ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős az Austrian claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU261 alá tartozik.</li>
                <li>Ha a végső célállomásra jelentős késéssel érkezel.</li>
                <li>Ha a csatlakozás egy foglaláson volt.</li>
                <li>Ha az airline nem bizonyít kizáró okot.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb vagy vitás?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat jogi helyzete nem elég erős.</li>
                <li>Ha a késés önmagában kicsi maradt a végén is.</li>
                <li>Ha a csatlakozás külön jegyen volt.</li>
                <li>Ha a dokumentáció hiányos.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Austrian Airlines és EU261: miért fontos ez magyar utasoknak?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az Austrian Airlines gyakran szerepel a magyar utasok útvonalaiban, mert Bécs közelsége miatt sokan
                eleve onnan indulnak, vagy ott csatlakoznak tovább nyugat-európai, tengerentúli vagy közel-keleti
                járatokra.
              </p>
              <p>
                Emiatt Austrian ügyben a claim gyakran nem egyszerű point-to-point kérdés, hanem a teljes utazási
                lánc vizsgálata.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mit kell nézni Austrian járatnál?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Austrian járatnál sem elég azt figyelni, mennyit csúszott az indulás. Sokkal fontosabb lehet az,
                hogy a <strong>végső célállomásra</strong> mikor érkezel meg.
              </p>
              <p>
                Ha a bécsi átszállás emiatt borul, a végső késés már jóval nagyobb lehet, mint amit az első járat
                alapján gondolnál.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire érdemes figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Austrian törlés esetén sem csak az számít, hogy kaptál-e új jegyet. A claim szempontjából azt is
                nézni kell, hogy mikor szóltak, milyen alternatív útvonalat adtak, és mekkora tényleges időveszteséged
                lett a végén.
              </p>
              <p>
                Különösen csatlakozásos ügyeknél fontos minden részletet dokumentálni, mert az alternatív útvonal
                minősége döntően befolyásolhatja az ügyet.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim értékelésénél sokszor ez a legerősebb tényező, nem az indulási csúszás önmagában.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Becsi csatlakozas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Austrian ügyeknél gyakran ez az a pont, ahol a kisebb késésből komoly utazási veszteség lesz.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Indoklas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Az airline válasza fontos, de csak akkor erős, ha a tények és a dokumentáció is alátámasztják.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha az Austrian nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor érdemes újra összerakni az ügy szerkezetét: induló szakasz, csatlakozás, végső célállomás,
                boarding pass, foglalás és minden airline-értesítés számít.
              </p>
              <p>
                Sok claim nem azért gyenge, mert az Austrian vitatja, hanem azért, mert az utas nem mutatja meg elég
                tisztán a teljes késési láncot.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista Austrian ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Jegyezd fel a végső célállomásra való érkezési időt.</li>
              <li>Nézd meg, hogy a csatlakozás egy foglaláson volt-e.</li>
              <li>Őrizd meg a bécsi átszállással kapcsolatos értesítéseket.</li>
              <li>Dokumentáld az alternatív járatot vagy útvonalat.</li>
              <li>Ne csak az első járat csúszását nézd, hanem a teljes utat.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni az Austrian ügyedet?</h2>
            <p className="mb-6 text-slate-200">
              Ha késés, törlés vagy bécsi csatlakozási probléma miatt bizonytalan vagy, érdemes rendezett ellenőrzéssel
              kezdeni. Így gyorsabban kiderül, hogy van-e valódi esély pénzbeli kompenzációra.
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
                  Austrian járatnál a bécsi csatlakozás különösen fontos?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen. Sok ügy épp amiatt válik erőssé vagy bonyolulttá, hogy a teljes útvonal Bécsen keresztül ment.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Austrian törlésnél az újrafoglalás automatikusan lezárja az ügyet?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. A felajánlott megoldás minősége és a végső időveszteség továbbra is fontos lehet a
                  claim szempontjából.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Érdemes segítséget kérni Austrian claimnél?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, főleg csatlakozásos és vitatott ügyeknél, ahol már nem elég egy rövid, egyszerű késésleírás.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
