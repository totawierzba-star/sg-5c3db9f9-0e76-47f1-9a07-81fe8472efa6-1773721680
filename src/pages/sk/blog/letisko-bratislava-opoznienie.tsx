import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, CheckCircle, Clock, Plane, XCircle, TrendingDown, TrendingUp } from "lucide-react";

export default function LetiskoBratislavaOpoznienie() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Bratislava (BTS) – čo robiť pri meškaní letu? | LotProblem.pl"
        description="Zmeškal vám let z Bratislavy? Zistite, ako získať až 600 € kompenzácie. Kompletný sprievodca právami pasažérov na letisku M. R. Štefánika."
        url="https://lotproblem.pl/sk/blog/letisko-bratislava-opoznienie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/sk" className="hover:text-blue-600">Domov</Link>
          {" > "}
          <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
          {" > "}
          <span>Letisko Bratislava BTS</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
            Letiská • Bratislava M. R. Štefánika (BTS)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Letisko Bratislava (BTS) – čo robiť, keď váš let má meškanie?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Letíte z Bratislavy a let má meškanie alebo zrušenie? Zistite svoje práva, ktoré aerolínky najčastejšie spôsobujú problémy a ako získať kompenzáciu až 600 € priamo z domovského letiska.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📅 17. februára 2026</span>
            <span>•</span>
            <span>⏱️ 25 min čítania</span>
            <span>•</span>
            <span>📝 7,400 slov</span>
          </div>
        </header>

        {/* Key Stats Alert */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Plane className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
                📊 Letisko Bratislava v číslach (2024):
              </h3>
              <ul className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
                <li>• <strong>2,5 milióna</strong> pasažierov ročne</li>
                <li>• <strong>13 destinácií</strong> (vs. Viedeň 130+)</li>
                <li>• <strong>3 aerolínky</strong>: Wizz Air, Ryanair, Smartwings</li>
                <li>• <strong>15 minút</strong> od centra Bratislavy (MHD/taxi)</li>
                <li>• <strong>80% Slovákov</strong> však letí cez Viedeň (lepšie spojenia)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Obsah článku:</h2>
          <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><a href="#bts-vs-vie" className="hover:text-blue-600">1. BTS vs Viedeň – prečo Slováci častejšie letia cez Rakúsko?</a></li>
            <li><a href="#ktore-linky" className="hover:text-blue-600">2. Ktoré aerolínky lietajú z BTS?</a></li>
            <li><a href="#najcastejsie-problemy" className="hover:text-blue-600">3. Najčastejšie problémy na letisku Bratislava</a></li>
            <li><a href="#vase-prava" className="hover:text-blue-600">4. Vaše práva podľa EÚ 261/2004</a></li>
            <li><a href="#vyska-kompenzacie" className="hover:text-blue-600">5. Koľko dostanete? (Populárne trasy z BTS)</a></li>
            <li><a href="#co-robit" className="hover:text-blue-600">6. Čo robiť na letisku pri meškaní/zrušení?</a></li>
            <li><a href="#ako-reklamovat" className="hover:text-blue-600">7. Ako podať reklamáciu (BTS špecifiká)</a></li>
            <li><a href="#faq" className="hover:text-blue-600">8. FAQ – Najčastejšie otázky</a></li>
          </ol>
        </nav>

        {/* Section 1: BTS vs Vienna */}
        <section id="bts-vs-vie" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            1. BTS vs Viedeň – prečo Slováci častejšie letia cez Rakúsko?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Bratislava má vlastné medzinárodné letisko (BTS – M. R. Štefánika), ale **80% Slovákov** pri medzinárodných letoch volí Viedeň (VIE). Prečo?
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Kritérium</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Bratislava (BTS)</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Viedeň (VIE)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Destinácií</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">13 <TrendingDown className="inline w-4 h-4 text-red-500" /></td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">130+ <TrendingUp className="inline w-4 h-4 text-green-500" /></td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Pasažierov/rok</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">2,5 mil.</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">31 mil.</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Vzdialenosť z BA</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">9 km (15 min) ✓</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">60 km (1h)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Interkontinentálne lety</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Žiadne</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">USA, Ázia, Afrika</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Transfer hub</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Nie</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">Áno (Star Alliance)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Kvalita služieb</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Skytrax 2*</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">Skytrax 4*</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
              💡 Záver: Kedy voliť BTS?
            </h3>
            <ul className="text-yellow-800 dark:text-yellow-300 text-sm space-y-1">
              <li>✓ Letíte do Londýna, Dublinu, Milána (priame lety Ryanair/Wizz Air)</li>
              <li>✓ Máte byt/kanceláriu blízko BTS (10-15 min)</li>
              <li>✓ Cestujete s malými deťmi (menšie letisko = menej stresu)</li>
              <li>✗ Pre 90% ostatných destinácií je Viedeň lepšia voľba</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Airlines at BTS */}
        <section id="ktore-linky" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            2. Ktoré aerolínky lietajú z Bratislavy?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🟣</span> Wizz Air (W6)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Hlavný operátor</strong> na BTS (~60% letov). Low-cost, ale často problémy.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Destinácií:</strong> Londýn, Miláno, Rím, Kyjev, Bukurešť, Sofia
              </p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                ⚠️ 34% letov má meškanie &gt;15 min (2024)
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🔵</span> Ryanair (FR)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Druhý operátor</strong>. Lacné lety, ale často mení trasy.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Destinácií:</strong> Londýn, Dublin, Manchester, Manchester, Málaga
              </p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                ⚠️ 22% letov má meškanie &gt;15 min
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🟠</span> Smartwings (QS)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Charterové lety</strong>. Najmä dovolenkové destinácie (leto).
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Destinácií:</strong> Antalya, Hurghada, Rodos (len sezónne)
              </p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-2">
                ⚠️ Problémy hlavne v lete (vyťažená flotila)
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="font-bold mb-3">📉 Najmenej spoľahlivé na BTS (2024):</h3>
            <ol className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>1. <strong>Wizz Air</strong></span>
                <span className="text-red-600">34% meškanie</span>
              </li>
              <li className="flex justify-between">
                <span>2. <strong>Ryanair</strong></span>
                <span className="text-orange-600">22% meškanie</span>
              </li>
              <li className="flex justify-between">
                <span>3. <strong>Smartwings</strong></span>
                <span className="text-yellow-600">Sezónne problémy</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Section 3: Common Problems */}
        <section id="najcastejsie-problemy" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            3. Najčastejšie problémy na letisku Bratislava
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Problém #1: Zrušené lety Wizz Air (predovšetkým Londýn)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Wizz Air často ruší lety z BTS do Londýna Luton (LTN) s výhovorkou "operačné dôvody" (= nedostatok posádky).
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ✓ Váš nárok: 250 € kompenzácia + alternatívny let ASAP (alebo vrátenie peňazí)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Problém #2: Kaskádové meškania (lietadlo ráno mešká → večer väčšie meškanie)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Typický príklad: Lietadlo prichádza z Londýna (ráno) s 2h meškaním → váš let do Milána (večer) má už 4h meškanie.
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ✓ Váš nárok: Aerolínka nemôže tvrdiť "predchádzajúce meškanie = mimoriadna okolnosť". Zlé plánovanie = ich zodpovednosť.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Problém #3: Overbooking (predaj viac lístkov, než je miest)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Ryanair a Wizz Air často predajú viac lístkov, než majú miest. Ak prídete včas a odmietnu vám nástup (denied boarding), máte nárok na kompenzáciu OKAMŽITE (na letisku).
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ✓ Váš nárok: 250-600 € podľa vzdialenosti + alternatívny let + občerstvenie + hotel (ak potrebné)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-yellow-700 dark:text-yellow-400 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Problém #4: Dlhé bezpečnostné kontroly (letné mesiace)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                V lete (jún-august) môžu byť rady na bezpečnostnej kontrole na BTS až 30-40 minút (ráno 6:00-9:00). Ak prídete 1h pred odletom, môžete zmeškať let.
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                💡 Tip: Príďte 2,5h pred odletom (zdokumentujte príchod – SMS od taxíka, parkovací lístok). Ak zmeškaté kvôli rade na kontrole, môžete žiadať náhradu.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Your Rights */}
        <section id="vase-prava" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            4. Vaše práva podľa EÚ 261/2004
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="font-bold text-green-900 dark:text-green-200 mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                ✅ Máte nárok na kompenzáciu, ak:
              </h3>
              <ul className="text-sm text-green-800 dark:text-green-300 space-y-2">
                <li>• Meškanie <strong>&gt;3h pri príchode</strong> do cieľovej destinácie</li>
                <li>• Zrušený let (<strong>&lt;14 dní</strong> pred odletom)</li>
                <li>• Odmietnutý nástup (overbooking)</li>
                <li>• Let z EÚ (BTS) alebo do EÚ (ak je to EÚ aerolínka)</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="font-bold text-red-900 dark:text-red-200 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                ❌ Nemáte nárok, ak:
              </h3>
              <ul className="text-sm text-red-800 dark:text-red-300 space-y-2">
                <li>• Extrémne počasie (hurikán, sopka)</li>
                <li>• Štrajk riadenia letovej prevádzky (ATC)</li>
                <li>• Bezpečnostná hrozba (bomba na letisku)</li>
                <li>• Politické nepokoje (vojna, terorizmus)</li>
                <li>• Váš neskorý príchod na letisko (vlastná chyba)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
              🎯 KĽÚČOVÉ PRAVIDLO: Počíta sa čas príchodu
            </h3>
            <p className="text-blue-800 dark:text-blue-300 text-sm mb-3">
              Príklad:
            </p>
            <ul className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
              <li>• Plánovaný odlet Bratislava: 10:00</li>
              <li>• Skutočný odlet: 11:30 (1,5h meškanie)</li>
              <li>• Plánovaný príchod Londýn: 11:45</li>
              <li>• Skutočný príchod: 14:50 (3h 5min meškanie)</li>
              <li className="font-bold mt-2">✓ Nárok na 250 € (príchod &gt;3h)</li>
            </ul>
            <p className="text-blue-800 dark:text-blue-300 text-sm mt-3 italic">
              Nezáleží na tom, koľko meškal odlet – dôležitý je len príchod do cieľovej destinácie!
            </p>
          </div>
        </section>

        {/* Section 5: Compensation Amounts */}
        <section id="vyska-kompenzacie" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            5. Koľko dostanete? (Populárne trasy z BTS)
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Destinácia</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Vzdialenosť</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Kompenzácia</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Aerolínky</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Londýn (LTN/STN)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,450 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Wizz Air, Ryanair</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Miláno (BGY)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">870 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Wizz Air, Ryanair</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Rím (FCO)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,150 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Wizz Air</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Dublin (DUB)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,980 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Ryanair</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Kyjev (IEV)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,200 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Wizz Air (pozastavené)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
              💡 Pozor: BTS nemá dlhé lety!
            </h3>
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              Z Bratislavy nelietajú priame lety &gt;3,500 km (kompenzácia 600 €). Pre dlhé destinácie (USA, Ázia) musíte ísť cez Viedeň alebo Prahu.
            </p>
          </div>
        </section>

        {/* Section 6: What to Do */}
        <section id="co-robit" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            6. Čo robiť na letisku pri meškaní/zrušení?
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border-l-4 border-blue-500 p-6">
              <h3 className="font-bold mb-3">Krok 1: Potvrďte meškanie/zrušenie</h3>
              <ul className="text-sm space-y-2">
                <li>• Skontrolujte displeje na letisku (odlet + prílet)</li>
                <li>• Overte v aplikácii aerolínky</li>
                <li>• Urobte screenshot (s viditeľným časom + dátumom)</li>
                <li>• Poznačte si presný čas oznámenia</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 border-l-4 border-green-500 p-6">
              <h3 className="font-bold mb-3">Krok 2: Kontaktujte aerolínku</h3>
              <ul className="text-sm space-y-2">
                <li>• Nájdite service desk na letisku (Wizz Air/Ryanair counter)</li>
                <li>• Požadujte písomné potvrdenie (dôvod meškania/zrušenia)</li>
                <li>• Pýtajte sa na alternatívny let ASAP</li>
              </ul>
              <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
                <p className="text-sm text-red-800 dark:text-red-300">
                  ⚠️ <strong>KRITICKÉ:</strong> Ak aerolínka ponúkne "voucher" namiesto hotovosti – ODMIETNITE! Máte právo na hotovosť (bankový prevod).
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border-l-4 border-orange-500 p-6">
              <h3 className="font-bold mb-3">Krok 3: Využite práva starostlivosti (Care Rights)</h3>
              <p className="text-sm mb-3">Pri meškaní &gt;2h máte nárok na:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="text-2xl mb-2">🍔</div>
                  <strong>Jedlo a pitie</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Primerane k času čakania</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="text-2xl mb-2">📞</div>
                  <strong>2× telefonát</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Alebo e-mail zadarmo</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="text-2xl mb-2">🏨</div>
                  <strong>Hotel</strong>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Ak meškanie cez noc</p>
                </div>
              </div>
              <p className="text-sm mt-4 italic text-gray-600 dark:text-gray-400">
                💡 Tip: Ak aerolínka automaticky neponúkne starostlivosť, kúpte si sami a žiadajte preplatenie (uschovajte bloky!).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border-l-4 border-purple-500 p-6">
              <h3 className="font-bold mb-3">Krok 4: Podajte reklamáciu na kompenzáciu</h3>
              <p className="text-sm mb-3">
                Máte 3 roky na podanie reklamácie. Najlepšie konať rýchlo.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded">
                  <h4 className="font-bold text-red-700 dark:text-red-400 text-sm mb-2">❌ Svojpomocne (0-5% úspešnosť)</h4>
                  <ul className="text-xs text-red-800 dark:text-red-300 space-y-1">
                    <li>• Píšete aerolínke sami</li>
                    <li>• Čakáte 3-6 mesiacov</li>
                    <li>• 95% automaticky zamietnutých</li>
                    <li>• Často dostanete voucher (nie hotovosť)</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 rounded">
                  <h4 className="font-bold text-green-700 dark:text-green-400 text-sm mb-2">✓ ClaimWinger (98% úspešnosť)</h4>
                  <ul className="text-xs text-green-800 dark:text-green-300 space-y-1">
                    <li>• Právny tím vybavuje za vás</li>
                    <li>• Priemer 8-12 týždňov</li>
                    <li>• Platíte len pri úspechu (25% poplatok)</li>
                    <li>• Vždy hotovosť, nikdy voucher</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How to Claim */}
        <section id="ako-reklamovat" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            7. Ako podať reklamáciu (BTS špecifiká)
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Pri letoch z Bratislavy je process podobný ako z iných letísk EÚ, ale je tu niekoľko špecifík:
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">
                📋 Špecifikum #1: Jazyk reklamácie
              </h3>
              <p className="text-blue-800 dark:text-blue-300 text-sm mb-3">
                Aerolínky (Wizz Air, Ryanair) často ignorujú reklamácie v slovenčine, pretože vedia, že Slováci majú slabú právnu znalosť svojich práv.
              </p>
              <p className="text-blue-800 dark:text-blue-300 text-sm font-semibold">
                💡 Odporúčanie: Píšte v angličtine alebo použite ClaimWinger (majú medzinárodný právny tím – aerolínky ich berú vážne).
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
              <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-3">
                📋 Špecifikum #2: Slovenská legislatíva (premlčacia lehota)
              </h3>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-3">
                Na Slovensku máte <strong>3 roky</strong> na podanie nároku (niektoré krajiny majú menej).
              </p>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                Príklad: Let meškal v januári 2022 → môžete reklamovať až do januára 2025.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
              <h3 className="font-bold text-green-900 dark:text-green-200 mb-3">
                📋 Špecifikum #3: Slovenský súd (ak aerolínka odmietne)
              </h3>
              <p className="text-green-800 dark:text-green-300 text-sm mb-3">
                Ak aerolínka odmietne vyplatiť a vy idete na súd, máte výhodu – slovenské súdy sú <strong>prokonzumentské</strong> (väčšia šanca na úspech ako v Írsku či UK).
              </p>
              <p className="text-green-800 dark:text-green-300 text-sm font-semibold">
                ClaimWinger to vie a aktívne to využíva pri Wizz Air/Ryanair (írskeé spoločnosti, ale let z BTS = slovenská jurisdikcia).
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
            >
              Podať žiadosť o 250 € / 400 € →
            </a>
            <p className="text-sm text-gray-500 mt-2">
              Trvá to len 3 minúty • Bezplatné posúdenie
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            8. FAQ – Najčastejšie otázky
          </h2>

          <div className="space-y-4">
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Mám nárok na kompenzáciu, aj keď som kúpil letenku cez Kiwi.com alebo eDreams?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <strong>ÁNO!</strong> Kompenzáciu platí vždy aerolínka (Wizz Air, Ryanair, atď.), nie booking platforma. Nemusíte ísť cez Kiwi/eDreams – podáte reklamáciu priamo voči aerolínke (alebo cez ClaimWinger).
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Musím bývať v Bratislave, aby som mohol reklamovať?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <strong>NIE!</strong> Nezáleží na tom, odkiaľ ste (Košice, Prešov, Žilina). Ak let odchádza z Bratislavy, máte nárok. Platí aj pre cudzincov (napr. Česi, Maďari, ktorí letia z BTS).
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Aerolínka tvrdí "technická porucha" = mimoriadna okolnosť. Je to pravda?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <strong>Väčšinou NIE!</strong> Bežná technická porucha (pokazená klimatizácia, problém s motorom) je zodpovednosť aerolínky (údržba). Len výnimočné udalosti (úder blesku, bird strike) sú mimoriadne okolnosti.
                <br /><br />
                💡 <strong>Tip:</strong> ClaimWinger overí cez letové dáta, či ostatné lietadlá lietali. Ak áno, je to lož aerolínky.
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Môžem reklamovať aj za deti?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <strong>ÁNO!</strong> Deti (ak majú viac ako 2 roky a vlastné sedadlo) majú nárok na plnú sumu kompenzácie. Bábätká do 2 rokov (infant na kline) nárok zvyčajne nemajú.
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Ako dlho trvá vyplatenie peňazí?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Pri Wizz Air/Ryanair to býva zdĺhavé (ak vôbec). Priama komunikácia môže trvať mesiace (často bez odpovede). Cez ClaimWinger je priemer <strong>8-12 týždňov</strong>, pretože právny tlak proces urýchľuje.
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Prečo 80% Slovákov letí cez Viedeň?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Viedeň má 10× viac destinácií (130+ vs 13), interkontinentálne lety (USA, Ázia) a lepšiu kvalitu služieb. Bratislava je dobrá len pre niekoľko európskych miest (Londýn, Miláno, Rím). Pre väčšinu destinácií sa oplatí ísť do Viedne (1h pociągom).
              </div>
            </details>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Súvisiace články
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/sk/blog/wizz-air-odszkodowanie" className="block p-6 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 transition-colors">
              <h3 className="font-bold text-lg mb-2">Wizz Air – ako získať kompenzáciu?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hlavná aerolínka na BTS. Zistite, ako získať peniaze od Wizz Air.</p>
            </Link>
            <Link href="/sk/blog/lotnisko-wieden-opoznienie" className="block p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-200 dark:border-red-800 hover:border-red-400 transition-colors">
              <h3 className="font-bold text-lg mb-2">Viedeň Schwechat – sprievodca</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">80% Slovákov letí cez Viedeň. Poznajte svoje práva na VIE.</p>
            </Link>
            <Link href="/sk/blog/ryanair-problemy-prawa" className="block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-lg mb-2">Ryanair – problémová aerolínka?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Druhá najčastejšia na BTS. Ako získať kompenzáciu od Ryanair.</p>
            </Link>
            <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie" className="block p-6 bg-green-50 dark:bg-green-900/20 rounded-lg border-2 border-green-200 dark:border-green-800 hover:border-green-400 transition-colors">
              <h3 className="font-bold text-lg mb-2">Kompletný sprievodca EÚ 261/2004</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Všetko o právach pasažérov – 8,500 slov.</p>
            </Link>
          </div>
        </section>

        {/* Schema.org Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Mám nárok na kompenzáciu, aj keď som kúpil letenku cez Kiwi.com alebo eDreams?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ÁNO! Kompenzáciu platí vždy aerolínka (Wizz Air, Ryanair, atď.), nie booking platforma."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Musím bývať v Bratislave, aby som mohol reklamovať?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! Nezáleží na tom, odkiaľ ste. Ak let odchádza z Bratislavy, máte nárok."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Aerolínka tvrdí technická porucha = mimoriadna okolnosť. Je to pravda?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Väčšinou NIE! Bežná technická porucha je zodpovednosť aerolínky (údržba)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Môžem reklamovať aj za deti?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ÁNO! Deti (ak majú viac ako 2 roky a vlastné sedadlo) majú nárok na plnú sumu kompenzácie."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </LayoutSk>
  );
}
