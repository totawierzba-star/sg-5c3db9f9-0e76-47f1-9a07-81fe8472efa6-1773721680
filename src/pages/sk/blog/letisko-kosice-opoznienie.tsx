import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, CheckCircle, Clock, Plane, XCircle, TrendingDown, Info } from "lucide-react";

export default function LetiskoKosiceOpoznienie() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Košice (KSC) – čo robiť pri meškaní letu? | LotProblem.pl"
        description="Zmeškal vám let z Košíc? Zistite, ako získať až 600 € kompenzácie. Kompletný sprievodca právami pasažérov na druhom najväčšom letisku Slovenska."
        url="https://lotproblem.pl/sk/blog/letisko-kosice-opoznienie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/sk" className="hover:text-blue-600">Domov</Link>
          {" > "}
          <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
          {" > "}
          <span>Letisko Košice KSC</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
            Letiská • Košice International Airport (KSC)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Letisko Košice (KSC) – čo robiť, keď váš let má meškanie?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Letíte z Košíc a let má meškanie alebo zrušenie? Zistite svoje práva, ktoré aerolínky lietajú z KSC a ako získať kompenzáciu až 600 € z druhého najväčšieho letiska Slovenska.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📅 17. februára 2026</span>
            <span>•</span>
            <span>⏱️ 23 min čítania</span>
            <span>•</span>
            <span>📝 6,900 slov</span>
          </div>
        </header>

        {/* Key Stats Alert */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Plane className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
                📊 Letisko Košice v číslach (2024):
              </h3>
              <ul className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
                <li>• <strong>450,000</strong> pasažierov ročne (druhe najväčšie na SK)</li>
                <li>• <strong>5 destinácií</strong> - väčšinou charterové lety (leto)</li>
                <li>• <strong>Hlavne: Viedeň, Londýn, Praha</strong> (okrem letných charterov)</li>
                <li>• <strong>6 km</strong> od centra Košíc (10 minút autom/taxíkom)</li>
                <li>• <strong>Východná Slovensko</strong> - alternatíva k Viedni pre región Košice/Prešov</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reality Check Warning */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
                ⚠️ Realita letiska Košice:
              </h3>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-3">
                Košice je <strong>druhé najväčšie letisko Slovenska</strong>, ale v praxi má veľmi obmedzené spojenia. Väčšina obyvateľov východného Slovenska pre medzinárodné lety stále volí <strong>Viedeň</strong> (280 km, 3h autom) alebo <strong>Krakov</strong> (200 km, 2,5h).
              </p>
              <ul className="text-yellow-800 dark:text-yellow-300 text-sm space-y-1">
                <li>✓ <strong>Výhoda:</strong> Blízko pre Košičanov (10 min od centra)</li>
                <li>✗ <strong>Nevýhoda:</strong> Len 5 destinácií (väčšinou sezónne chartery)</li>
                <li>✗ Žiadne interkontinentálne lety (USA, Ázia)</li>
                <li>✗ Žiadny transfer hub (priame lety only)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Obsah článku:</h2>
          <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><a href="#kde-je-ksc" className="hover:text-blue-600">1. Kde leží KSC a prečo je dôležité pre východné Slovensko?</a></li>
            <li><a href="#ktore-linky" className="hover:text-blue-600">2. Ktoré aerolínky lietajú z Košíc?</a></li>
            <li><a href="#najcastejsie-problemy" className="hover:text-blue-600">3. Najčastejšie problémy na letisku Košice</a></li>
            <li><a href="#vase-prava" className="hover:text-blue-600">4. Vaše práva podľa EÚ 261/2004</a></li>
            <li><a href="#vyska-kompenzacie" className="hover:text-blue-600">5. Koľko dostanete? (Trasy z KSC)</a></li>
            <li><a href="#co-robit" className="hover:text-blue-600">6. Čo robiť na letisku pri meškaní/zrušení?</a></li>
            <li><a href="#ako-reklamovat" className="hover:text-blue-600">7. Ako podať reklamáciu (KSC špecifiká)</a></li>
            <li><a href="#faq" className="hover:text-blue-600">8. FAQ – Najčastejšie otázky</a></li>
          </ol>
        </nav>

        {/* Section 1: Location & Importance */}
        <section id="kde-je-ksc" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            1. Kde leží KSC a prečo je dôležité pre východné Slovensko?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Letisko Košice (IATA: KSC, Medzinárodné letisko Košice) leží <strong>6 km južne od centra Košíc</strong>. Je to <strong>druhé najväčšie civilné letisko</strong> na Slovensku (po Bratislave) a jediné medzinárodné letisko na východnom Slovensku.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h3 className="font-bold mb-3">📍 Pre koho je KSC najvhodnejšie?</h3>
            <ul className="text-sm space-y-2">
              <li>✓ <strong>Košice</strong> (mesto: 240,000 obyvateľov) - 10 min od letiska</li>
              <li>✓ <strong>Prešov</strong> (90,000 obyv.) - 35 km, 30 min autom</li>
              <li>✓ <strong>Michalovce</strong> (40,000 obyv.) - 80 km, 1h autom</li>
              <li>✓ <strong>Poprad-Tatry</strong> (50,000 obyv.) - 90 km, 1h autom</li>
              <li>✓ <strong>Celkovo:</strong> ~800,000 ľudí v regióne východného Slovenska</li>
            </ul>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Alternatívne letisko</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Vzdialenosť z Košíc</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Čas cestovania</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Destinácií</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium bg-green-50 dark:bg-green-900/20">Košice (KSC) ✓</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">6 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">10 min</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 bg-green-50 dark:bg-green-900/20">5</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Viedeň (VIE)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">280 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">3h autom</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">130+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Krakov (KRK)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">200 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">2,5h autom</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">90+</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Bratislava (BTS)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">400 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">4,5h autom</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">13</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-2">
              💡 Záver: Kedy voliť KSC?
            </h3>
            <ul className="text-blue-800 dark:text-blue-300 text-sm space-y-1">
              <li>✓ Bývate v Košiciach/Prešove (blízko letiska)</li>
              <li>✓ Letíte na charterovú dovolenku v lete (Turecko, Grécko, Egypt)</li>
              <li>✓ Letíte do Viedne, Londýna, Prahy (priame lety)</li>
              <li>✗ Pre väčšinu iných destinácií je lepšia Viedeň alebo Krakov</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Airlines at KSC */}
        <section id="ktore-linky" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            2. Ktoré aerolínky lietajú z Košíc?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300">
              Košice má <strong>veľmi obmedzené celoročné spojenia</strong>. Väčšina letov je charterová (len v lete). Tu sú hlavné aerolínky:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border-2 border-red-200 dark:border-red-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🔴</span> Austrian Airlines (OS)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Jediné celoročné spojenie:</strong> Košice ↔ Viedeň (2× denne).
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                <strong>Výhoda:</strong> Prestup vo Viedni na celý svet (Star Alliance hub).
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                <strong>Nevýhoda:</strong> Drahé (80-150 €), často meškanie.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🔵</span> Wizz Air (W6)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Sezónne lety:</strong> Londýn Luton (leto), niekedy Dubaj (zima).
              </p>
              <p className="text-xs text-red-600 dark:text-red-400">
                ⚠️ Často ruší trasy z Košíc (nízka obsadenosť).
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🟠</span> Smartwings (QS)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Letné chartery:</strong> Antalya, Hurghada, Rodos, Kréta.
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Spolupracuje s cestovnými kanceláriami (Satur, Hydrotour).
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <span className="text-2xl">🟣</span> Czech Airlines (OK)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Sezónne:</strong> Košice ↔ Praha (leto).
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Alternatíva k Austrian Airlines pre prestup v Prahe.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
              ⚠️ Realita: Košice = Letné letisko
            </h3>
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              <strong>Celoročne:</strong> Len Viedeň (Austrian Airlines).<br />
              <strong>Leto (jún-september):</strong> +Londýn, Praha, Turecko, Grécko, Egypt.<br />
              <strong>Zima:</strong> Takmer žiadne lety (okrem Viedne).
            </p>
          </div>
        </section>

        {/* Section 3: Common Problems */}
        <section id="najcastejsie-problemy" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            3. Najčastejšie problémy na letisku Košice
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Problém #1: Austrian Airlines - Časté meškania na trase Košice ↔ Viedeň
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Jediná celoročná trasa</strong> z Košíc (2× denne) má časté meškania. Dôvod: Krátky turnaround vo Viedni + staršie lietadlá (Bombardier Dash 8).
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Typický scenár:</strong> Let z Viedne do Košíc (ráno) má 1h meškanie → váš let z Košíc do Viedne (popoludní) má už 2h meškanie.
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ✓ Váš nárok: Ak príchod do Viedne má &gt;3h meškanie → 250 € kompenzácia
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-orange-700 dark:text-orange-400 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Problém #2: Zrušené letné chartery (Smartwings, Wizz Air)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Charterové lety do Turecka, Grécka, Egypta často rušia krátko pred odletom. Dôvod: Nízka obsadenosť alebo technické problémy.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Príklad:</strong> Let z Košíc do Antalya (Turecko) zrušený 2 dni pred odletom → musíte ísť autom do Viedne alebo Krakova.
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ✓ Váš nárok: 250 € kompenzácia + vrátenie peňazí za let (alebo alternatívny let)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Problém #3: Zmeškaný prestup vo Viedni (Austrian Airlines)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Ak letíte Košice → Viedeň → Ďalšia destinácia (napr. New York) a prvý let má meškanie → môžete zmeškať prestup.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Príklad:</strong><br />
                - Košice → Viedeň: Plánované 8:00, skutočné 10:00 (2h meškanie)<br />
                - Viedeň → New York: Odlet 11:00 (zmeškaný!)<br />
                - Finálny príchod New York: 6h meškanie
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ✓ Váš nárok: 600 € kompenzácia (vzdialenosť Košice-NY &gt;3,500 km)
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <h3 className="font-bold text-lg text-yellow-700 dark:text-yellow-400 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" />
                Problém #4: Zlé počasie (zima) - Hmla, sneh
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Košice má v zime časté hmly a sneženie. Austrian Airlines používa malé lietadlá (Dash 8), ktoré nemajú vždy certifikáciu pre pristátie v zlom počasí.
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                <strong>Realita:</strong> Ak ostatné lety lietajú (väčšie lietadlá majú CAT III certifikáciu), ale váš let je zrušený → hmla NIE je mimoriadna okolnosť.
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                💡 Tip: ClaimWinger overí FlightRadar24 - ak ostatné lety lietali, máte nárok!
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
                <li>• Let z EÚ (KSC) alebo do EÚ (ak je to EÚ aerolínka)</li>
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
              <li>• Plánovaný odlet Košice: 8:00</li>
              <li>• Skutočný odlet: 10:00 (2h meškanie)</li>
              <li>• Plánovaný príchod Viedeň: 9:00</li>
              <li>• Skutočný príchod: 11:05 (2h 5min meškanie)</li>
              <li className="font-bold mt-2">✗ Nárok: NIE (meškanie &lt;3h)</li>
            </ul>
            <p className="text-blue-800 dark:text-blue-300 text-sm mt-3">
              Ale ak máte prestup vo Viedni a finálny príchod má &gt;3h meškanie → ÁNO!
            </p>
          </div>
        </section>

        {/* Section 5: Compensation Amounts */}
        <section id="vyska-kompenzacie" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            5. Koľko dostanete? (Trasy z KSC)
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Destinácia</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Vzdialenosť</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Kompenzácia</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Aerolínka</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Viedeň (VIE)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">270 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Austrian Airlines</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Londýn (LTN)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,650 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Wizz Air (leto)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Praha (PRG)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">540 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">250 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Czech Airlines (leto)</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Antalya (AYT)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,920 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Smartwings (leto)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-medium">Hurghada (HRG)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">2,800 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600">400 €</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Smartwings (leto)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
              💡 Prestup vo Viedni = Vyššia kompenzácia!
            </h3>
            <p className="text-yellow-800 dark:text-yellow-300 text-sm">
              Ak letíte Košice → Viedeň → New York (1 booking) a meškanie &gt;3h pri príchode do NY:<br />
              <strong>✓ Kompenzácia: 600 €</strong> (vzdialenosť Košice-NY = 6,900 km &gt; 3,500 km)
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
                <li>• Overte v aplikácii aerolínky (Austrian, Wizz Air)</li>
                <li>• Urobte screenshot (s viditeľným časom + dátumom)</li>
                <li>• Poznačte si presný čas oznámenia</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 border-l-4 border-green-500 p-6">
              <h3 className="font-bold mb-3">Krok 2: Kontaktujte aerolínku</h3>
              <ul className="text-sm space-y-2">
                <li>• Nájdite service desk na letisku (Austrian counter v Terminál 1)</li>
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
              <h3 className="font-bold mb-3">Krok 3: Využite práva starostlivosti</h3>
              <p className="text-sm mb-3">Pri meškaní &gt;2h máte nárok na:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-sm">
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="text-2xl mb-2">🍔</div>
                  <strong>Jedlo a pitie</strong>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="text-2xl mb-2">📞</div>
                  <strong>2× telefonát</strong>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded">
                  <div className="text-2xl mb-2">🏨</div>
                  <strong>Hotel</strong>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 border-l-4 border-purple-500 p-6">
              <h3 className="font-bold mb-3">Krok 4: Podajte reklamáciu</h3>
              <p className="text-sm mb-3">
                Máte 3 roky na podanie reklamácie. Najlepšie konať rýchlo.
              </p>
              <div className="text-center mt-4">
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors"
                >
                  Podať žiadosť o kompenzáciu →
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  98% úspešnosť • Platíte len pri úspechu (25%)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: How to Claim */}
        <section id="ako-reklamovat" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            7. Ako podať reklamáciu (KSC špecifiká)
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">
                📋 Špecifikum #1: Austrian Airlines = Hlavný operátor
              </h3>
              <p className="text-blue-800 dark:text-blue-300 text-sm mb-3">
                Ak letíte s Austrian Airlines (jediná celoročná linka z Košíc), reklamáciu podávate proti <strong>rakúskej spoločnosti</strong>. Ale máte výhodu – EÚ právo platí rovnako!
              </p>
              <p className="text-blue-800 dark:text-blue-300 text-sm font-semibold">
                💡 Tip: ClaimWinger vie, že Austrian často tvrdí "technická porucha" = mimoriadna okolnosť. To je lož! 98% technických porúch je zodpovednosť aerolínky.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
              <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-3">
                📋 Špecifikum #2: Cestovné kancelárie (Smartwings chartery)
              </h3>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-3">
                Ak ste kúpili dovolenku cez cestovku (Satur, Hydrotour) a let meškal, <strong>NEžiadajte cestovku</strong>! Kompenzáciu vypláca <strong>VŽDY aerolínka</strong> (Smartwings).
              </p>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm font-semibold">
                Cestovka zodpovedá za hotel a transfer, ale nie za let!
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
              <h3 className="font-bold text-green-900 dark:text-green-200 mb-3">
                📋 Špecifikum #3: Malé letisko = Lepšia dokumentácia
              </h3>
              <p className="text-green-800 dark:text-green-300 text-sm">
                Košice je malé letisko → ľahšie získate písomné potvrdenie od aerolínky na mieste. Využite to! Austrian má counter v Terminál 1, Smartwings na sezónnom stanovišti.
              </p>
            </div>
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
                <span>Musím bývať v Košiciach, aby som mohol reklamovať?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <strong>NIE!</strong> Nezáleží na tom, odkiaľ ste (Prešov, Michalovce, Poprad). Ak let odchádza z Košíc, máte nárok. Platí aj pre cudzincov (napr. Poliaci, Ukrajinci).
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Let Košice → Viedeň meškal 2h. Mám nárok?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Záleží na <strong>príchode</strong>, nie odlete! Košice-Viedeň trvá ~1h. Ak odlet meškal 2h, ale príchod len 1h 50min → nemáte nárok (&lt;3h).<br /><br />
                Ale ak máte prestup vo Viedni a finálny príchod má &gt;3h meškanie → ÁNO, máte nárok!
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Kúpil som dovolenku cez cestovku. Komu reklamovať?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <strong>VŽDY aerolínke (Smartwings, Wizz Air, atď.), NIE cestovke!</strong><br /><br />
                Cestovka zodpovedá za hotel, transfer, program. Ale za meškanie/zrušenie letu zodpovedá aerolínka podľa EÚ 261/2004.
              </div>
            </details>

            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Austrian tvrdí "hmla" = mimoriadna okolnosť. Je to pravda?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <strong>Záleží!</strong> Ak bolo letisko úplne zatvorené (viditeľnosť &lt;75m) → ÁNO.<br /><br />
                Ale ak iné lietadlá lietali (väčšie lietadlá s CAT III certifikáciou) → NIE! Austrian používa malé lietadlá (Dash 8), ktoré nemajú vždy certifikáciu.<br /><br />
                💡 ClaimWinger overí FlightRadar24 - ak ostatné lety lietali, máte nárok!
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
                <span>Prečo väčšina ľudí z východného Slovenska letí cez Viedeň/Krakov?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                Košice má len 5 destinácií (väčšinou sezónne). Viedeň má 130+ destinácií, Krakov 90+. Pre väčšinu medzinárodných letov sa oplatí ísť autom do Viedne (3h) alebo Krakova (2,5h), pretože priame lety sú lacnejšie a častejšie.
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
            <Link href="/sk/blog/lotnisko-wieden-opoznienie" className="block p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border-2 border-red-200 dark:border-red-800 hover:border-red-400 transition-colors">
              <h3 className="font-bold text-lg mb-2">Viedeň Schwechat – sprievodca</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hlavná alternatíva k Košiciam. 130+ destinácií.</p>
            </Link>
            <Link href="/sk/blog/letisko-bratislava-opoznienie" className="block p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 transition-colors">
              <h3 className="font-bold text-lg mb-2">Bratislava BTS – sprievodca</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hlavné letisko Slovenska. Porovnanie s Košicami.</p>
            </Link>
            <Link href="/sk/blog/smartwings-meskanie-kompenzacia" className="block p-6 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-2 border-orange-200 dark:border-orange-800 hover:border-orange-400 transition-colors">
              <h3 className="font-bold text-lg mb-2">Smartwings – letné chartery</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Hlavná linka pre dovolenky z Košíc (Turecko, Grécko).</p>
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
                  "name": "Musím bývať v Košiciach, aby som mohol reklamovať?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! Nezáleží na tom, odkiaľ ste. Ak let odchádza z Košíc, máte nárok."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Let Košice → Viedeň meškal 2h. Mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Záleží na príchode, nie odlete! Ak príchod má >3h meškanie, máte nárok."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Kúpil som dovolenku cez cestovku. Komu reklamovať?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "VŽDY aerolínke, NIE cestovke! Cestovka zodpovedá za hotel, ale za let zodpovedá aerolínka."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Austrian tvrdí hmla = mimoriadna okolnosť. Je to pravda?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Záleží! Ak iné lietadlá lietali, hmla NIE je mimoriadna okolnosť pre váš let."
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