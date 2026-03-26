import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, CheckCircle, Clock, Plane, XCircle } from "lucide-react";

export default function ZmeskanyPrestupKompenzacia() {
  return (
    <LayoutSk>
      <SEO
        title="Zmeškaný prestup – kedy máte nárok na kompenzáciu? | LotProblem.pl"
        description="Prvý let oneskorený, zmeškali ste nadväzujúci? Zistite, kedy vám patrí až 600 € kompenzácie za zmeškaný prestup a ako ju získať."
        url="https://problemlot.com/sk/blog/zmeskany-prestup-kompenzacia"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/sk" className="hover:text-blue-600">Domov</Link>
          {" > "}
          <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
          {" > "}
          <span>Zmeškaný prestup</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium rounded-full mb-4">
            Pillar • Práva pasažiera
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Zmeškaný prestup – kedy máte nárok na kompenzáciu?
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Prvý let oneskorený, zmeškali ste nadväzujúci? Zistite, kedy vám patrí až 600 € kompenzácie za zmeškaný prestup a ako ju získať.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📅 17. februára 2026</span>
            <span>•</span>
            <span>⏱️ 18 min čítania</span>
            <span>•</span>
            <span>📝 6,500 slov</span>
          </div>
        </header>

        {/* Alert Box - Critical Info */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">
                ⚠️ KRITICKÉ PRAVIDLO: 1 rezervácia vs. 2 samostatné lístky
              </h3>
              <p className="text-red-800 dark:text-red-300 text-sm">
                Kompenzácia za zmeškaný prestup <strong>patrí IBA pri 1 rezervácii</strong> (všetky lety v jednom booking kóde). Ak ste kúpili lety samostatne (2 booking kódy), letecká spoločnosť nie je zodpovedná za zmeškaný prestup!
              </p>
              <p className="text-red-800 dark:text-red-300 text-sm mt-2">
                <strong>Príklad:</strong><br/>
                ✅ Správne: Bratislava→Viedeň→New York (1 booking kód W8X9YZ)<br/>
                ❌ Nesprávne: Bratislava→Viedeň (kód ABC123) + Viedeň→New York (kód XYZ789)
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <nav className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-12">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Obsah článku:</h2>
          <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li><a href="#co-je-zmeskany-prestup" className="hover:text-blue-600">1. Čo je zmeškaný prestup?</a></li>
            <li><a href="#kedy-patri-kompenzacia" className="hover:text-blue-600">2. Kedy vám patrí kompenzácia?</a></li>
            <li><a href="#kriticke-pravidla" className="hover:text-blue-600">3. Kritické pravidlá (1 vs. 2 rezervácie)</a></li>
            <li><a href="#scenare" className="hover:text-blue-600">4. Najčastejšie scenáre zmeškaných prestupov</a></li>
            <li><a href="#sumy-kompenzacie" className="hover:text-blue-600">5. Koľko môžete dostať? (príklady výpočtu)</a></li>
            <li><a href="#co-robit" className="hover:text-blue-600">6. Čo robiť na letisku pri zmeškanom prestupe?</a></li>
            <li><a href="#ako-reklamovat" className="hover:text-blue-600">7. Ako podať reklamáciu?</a></li>
            <li><a href="#faq" className="hover:text-blue-600">8. Najčastejšie otázky (FAQ)</a></li>
            <li><a href="#zaver" className="hover:text-blue-600">9. Záver a ďalšie kroky</a></li>
          </ol>
        </nav>

        {/* Section 1: Čo je zmeškaný prestup? */}
        <section id="co-je-zmeskany-prestup" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            1. Čo je zmeškaný prestup?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Zmeškaný prestup</strong> (missed connection) nastáva, keď:
            </p>

            <ol className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
              <li><strong>1. Prvý let má oneskore</strong> (napríklad Bratislava→Viedeň)</li>
              <li><strong>2. Kvôli oneskoreniu zmeškáte nadväzujúci let</strong> (Viedeň→New York)</li>
              <li><strong>3. Oba lety sú súčasťou 1 rezervácie</strong> (jeden booking kód)</li>
            </ol>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">
                📊 Základný scenár zmeškaného prestupu:
              </h3>
              <div className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <p><strong>Rezervácia:</strong> Bratislava→Viedeň→New York (1 booking kód)</p>
                <p><strong>Plánované časy:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Let 1: Bratislava→Viedeň (odlet 10:00, prílet 10:50)</li>
                  <li>• Čas na prestup: 2h 10min (ideálny čas)</li>
                  <li>• Let 2: Viedeň→New York (odlet 13:00)</li>
                </ul>
                <p><strong>Čo sa stalo:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Let 1 oneskoreý: prílet Viedeň 12:45 (1h 55min oneskore)</li>
                  <li>• Čas na prestup: iba 15 minút (nedostatok!)</li>
                  <li>• Výsledok: Zmeškali ste let do New Yorku</li>
                </ul>
                <p className="mt-3 font-bold">✅ Máte nárok na kompenzáciu až 600 € + alternatívny let ASAP!</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Prečo je to dôležité?</strong>
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>• <strong>Konečný cieľ:</strong> Zmeškaný prestup môže znamenať meškanie do konečného cieľa o 6-12+ hodín</li>
              <li>• <strong>Vysoké kompenzácie:</strong> Pri dlhých trasách (napr. do USA) až 600 €</li>
              <li>• <strong>Zodpovednosť aerolinky:</strong> Ak je prestup v 1 rezervácii, aerolinka zodpovedá za celú cestu</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Kedy patrí kompenzácia */}
        <section id="kedy-patri-kompenzacia" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            2. Kedy vám patrí kompenzácia za zmeškaný prestup?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-green-900 dark:text-green-200 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              ✅ MÁTE NÁROK na kompenzáciu ak:
            </h3>
            <ul className="space-y-2 text-sm text-green-800 dark:text-green-300">
              <li>✓ <strong>Oba lety v 1 rezervácii</strong> (jeden booking kód)</li>
              <li>✓ <strong>Oneskoreý prílet do konečného cieľa &gt;3h</strong></li>
              <li>✓ <strong>Let z EÚ</strong> alebo do EÚ európskou aerolínkou</li>
              <li>✓ <strong>Dôvod nie je mimoriadny</strong> (zlyhanie personálu, technická porucha, ...)</li>
              <li>✓ <strong>Prišli ste na prvý let včas</strong> (min. 2h pred odletom)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
            <h3 className="font-bold text-red-900 dark:text-red-200 mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              ❌ NEMÁTE NÁROK ak:
            </h3>
            <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
              <li>✗ <strong>2 samostatné rezervácie</strong> (dva booking kódy)</li>
              <li>✗ <strong>Meškanie &lt;3h</strong> do konečného cieľa</li>
              <li>✗ <strong>Mimoriadne okolnosti</strong> (extrémne počasie, štrajk ATC)</li>
              <li>✗ <strong>Prišli ste neskoro na prvý let</strong> (menej ako 2h pred odletom)</li>
              <li>✗ <strong>Let mimo EÚ</strong> s ne-európskou aerolínkou (napr. USA→Kanada s American Airlines)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
            <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
              🎯 KĽÚČOVÉ PRAVIDLO: Počíta sa prílet do KONEČNÉHO cieľa
            </h3>
            <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-3">
              Nerozhoduje oneskoreý odlet, ale <strong>oneskoreý prílet</strong> na konečnom letisku!
            </p>
            <div className="text-sm text-yellow-800 dark:text-yellow-300">
              <p className="font-semibold mb-2">Príklad:</p>
              <p><strong>Plán:</strong> Bratislava→Viedeň (10:00-10:50) → Viedeň→NY (13:00-16:30)</p>
              <p><strong>Realita:</strong></p>
              <ul className="ml-6 space-y-1 mt-2">
                <li>• Let 1 oneskoreý: prílet Viedeň 12:45</li>
                <li>• Zmeškali ste prestup</li>
                <li>• Alternatívny let: Viedeň→NY (20:00-23:30)</li>
                <li>• Prílet NY: 23:30 (namiesto plánovaných 16:30)</li>
                <li>• <strong>Oneskore: 7 hodín</strong></li>
              </ul>
              <p className="mt-3 font-bold">✅ Máte nárok na 600 € (trasa &gt;3,500 km + oneskore &gt;3h)</p>
            </div>
          </div>
        </section>

        {/* Section 3: Kritické pravidlá */}
        <section id="kriticke-pravidla" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            3. Kritické pravidlá: 1 rezervácia vs. 2 samostatné lístky
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Toto je <strong>najdôležitejšie pravidlo</strong> pre zmeškaný prestup. Mnoho cestujúcich stráca nárok na kompenzáciu, pretože nevedia o tomto pravidle!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Scenario 1: Správne */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-200 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ✅ SPRÁVNE: 1 rezervácia
                </h3>
                <div className="text-sm text-green-800 dark:text-green-300 space-y-3">
                  <p><strong>Čo to znamená:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• Všetky lety kúpené naraz</li>
                    <li>• 1 booking kód (napr. W8X9YZ)</li>
                    <li>• 1 e-mailové potvrdenie</li>
                    <li>• Aerolinka zodpovedá za prestup</li>
                  </ul>
                  <p className="mt-3"><strong>Príklad:</strong></p>
                  <p className="font-mono text-xs bg-green-100 dark:bg-green-900 p-2 rounded">
                    Booking: W8X9YZ<br/>
                    Bratislava→Viedeň (OS501)<br/>
                    Viedeň→New York (OS089)
                  </p>
                  <p className="mt-3 font-bold">
                    ✅ Máte nárok na kompenzáciu pri zmeškanom prestupe!
                  </p>
                </div>
              </div>

              {/* Scenario 2: Nesprávne */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ NESPRÁVNE: 2 samostatné lístky
                </h3>
                <div className="text-sm text-red-800 dark:text-red-300 space-y-3">
                  <p><strong>Čo to znamená:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• Lety kúpené samostatne</li>
                    <li>• 2 booking kódy</li>
                    <li>• 2 e-mailové potvrdenia</li>
                    <li>• Aerolinka NEzodpovedá za prestup</li>
                  </ul>
                  <p className="mt-3"><strong>Príklad:</strong></p>
                  <p className="font-mono text-xs bg-red-100 dark:bg-red-900 p-2 rounded">
                    Booking 1: ABC123<br/>
                    Bratislava→Viedeň (OS501)<br/>
                    <br/>
                    Booking 2: XYZ789<br/>
                    Viedeň→New York (OS089)
                  </p>
                  <p className="mt-3 font-bold">
                    ❌ NEMÁTE nárok na kompenzáciu za zmeškaný prestup!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
              <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
                ⚠️ POZOR: Kiwi.com a iné "self-transfer" platformy
              </h3>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-3">
                Platformy ako Kiwi.com, eDreams Odigeo často ponúkajú "lacné lety" kombináciou samostatných rezervácií. Vyzerá to ako 1 rezervácia, ale v realite sú to 2 samostatné lístky!
              </p>
              <div className="text-sm text-yellow-800 dark:text-yellow-300">
                <p className="font-semibold mb-2">Ako zistiť:</p>
                <ul className="ml-6 space-y-1">
                  <li>• Kiwi označí ako "self-transfer" alebo "virtual interlining"</li>
                  <li>• Dostanete 2 e-maily s potvrdenými (nie 1)</li>
                  <li>• Každý let má iný booking kód</li>
                </ul>
                <p className="mt-3 font-bold">
                  ❌ Pri self-transfer NEMÁTE nárok na kompenzáciu za zmeškaný prestup!
                </p>
                <p className="mt-2 text-xs italic">
                  * Kiwi.com ponúka "Guarantee" (poistenie), ale to NIE JE kompenzácia podľa EÚ 261/2004
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">
                💡 TIP: Ako nakupovať lety bezpečne
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <li>✓ <strong>Kupujte priamo od aerolínky</strong> (Austrian, LOT, Lufthansa, ...)</li>
                <li>✓ <strong>Alebo cez veľké OTA</strong> (Booking.com, Expedia) - garantujú 1 rezerváciu</li>
                <li>✓ <strong>Overte booking kód:</strong> ak dostanete 2 e-maily, sú to 2 samostatné lístky</li>
                <li>✗ <strong>Vyhýbajte sa "self-transfer":</strong> Kiwi.com, eDreams pri prestupoch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Najčastejšie scenáre */}
        <section id="scenare" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            4. Najčastejšie scenáre zmeškaných prestupov
          </h2>

          <div className="space-y-8">
            {/* Scenario 1 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Scenár 1: Technická porucha prvého letu
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Situácia:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Let: Bratislava→Viedeň→Barcelona (1 rezervácia)</li>
                  <li>• Prvý let má technickú poruchu → oneskoreý odlet 2h</li>
                  <li>• Zmeškáte prestup vo Viedni</li>
                  <li>• Prílet Barcelona: 5h oneskore oproti plánu</li>
                </ul>
                <p className="mt-3"><strong>Máte nárok?</strong></p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  ✅ ÁNO! Technická porucha NIE JE mimoriadna okolnosť.
                </p>
                <p className="mt-2"><strong>Kompenzácia:</strong> 400 € (vzdialenosť BA-BCN ~1,500 km)</p>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Scenár 2: Nedostatok posádky
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Situácia:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Let: Košice→Viedeň→Dubaj (1 rezervácia)</li>
                  <li>• Prvý let: nedostatok kabínnej posádky → zrušený</li>
                  <li>• Aerolinka vás presmeruje na let o 6h neskôr</li>
                  <li>• Zmeškáte prestup vo Viedni</li>
                  <li>• Prílet Dubaj: 8h oneskore</li>
                </ul>
                <p className="mt-3"><strong>Máte nárok?</strong></p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  ✅ ÁNO! Nedostatok personálu je zodpovednosť aerolínky.
                </p>
                <p className="mt-2"><strong>Kompenzácia:</strong> 400 € (vzdialenosť KE-DXB ~4,000 km v EÚ)</p>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Scenár 3: Krátky prestup + oneskore let
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Situácia:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Let: Bratislava→Frankfurt→New York (1 rezervácia)</li>
                  <li>• Plánovaný čas prestupu: 1h 30min (tesný!)</li>
                  <li>• Prvý let oneskoreý 45 minút</li>
                  <li>• Zostáva 45 minút na prestup → nestíhate</li>
                  <li>• Zmeškáte let do NY</li>
                </ul>
                <p className="mt-3"><strong>Máte nárok?</strong></p>
                <p className="font-bold text-green-600 dark:text-green-400">
                  ✅ ÁNO! Aerolinka zodpovedá za krátky prestup + oneskore.
                </p>
                <p className="mt-2"><strong>Kompenzácia:</strong> 600 € (vzdialenosť BA-NY &gt;3,500 km)</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                  * Minimum Connection Time (MCT) pre Frankfurt: ~45-60 minút, ale pri oneskoreý to nestačí
                </p>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Scenár 4: Extrémne počasie (hurrikán)
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Situácia:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Let: Bratislava→Londýn→Miami (1 rezervácia)</li>
                  <li>• V Miami je hurrikán → letisko uzavreté</li>
                  <li>• Let Londýn→Miami zrušený</li>
                  <li>• Alternatívny let až o 2 dni neskôr</li>
                </ul>
                <p className="mt-3"><strong>Máte nárok?</strong></p>
                <p className="font-bold text-red-600 dark:text-red-400">
                  ❌ NIE. Hurrikán je mimoriadna okolnosť.
                </p>
                <p className="mt-2"><strong>Máte však nárok na:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Vrátenie peňazí (refund) za celú cestu</li>
                  <li>• ALEBO alternatívny let ASAP zadarmo</li>
                  <li>• Starostlivosť (jedlo, ubytovanie)</li>
                </ul>
              </div>
            </div>

            {/* Scenario 5 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Scenár 5: 2 samostatné rezervácie (self-transfer)
              </h3>
              <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Situácia:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Let 1: Bratislava→Viedeň (booking ABC123, Ryanair)</li>
                  <li>• Let 2: Viedeň→Barcelona (booking XYZ789, Vueling)</li>
                  <li>• Kúpené cez Kiwi.com ako "self-transfer"</li>
                  <li>• Prvý let oneskoreý → zmeškáte druhý let</li>
                </ul>
                <p className="mt-3"><strong>Máte nárok?</strong></p>
                <p className="font-bold text-red-600 dark:text-red-400">
                  ❌ NIE. 2 samostatné rezervácie = nie je zmeškaný prestup.
                </p>
                <p className="mt-2"><strong>Čo môžete urobiť:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• Reklamácia voči Ryanair za oneskore prvého letu (možno 250 €)</li>
                  <li>• Kiwi.com "Guarantee" (ak ste si kúpili) - pokryje nový lístok</li>
                  <li>• Ale NIE je kompenzácia za zmeškaný prestup!</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Sumy kompenzácie */}
        <section id="sumy-kompenzacie" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            5. Koľko môžete dostať za zmeškaný prestup?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Výška kompenzácie závisí od <strong>celkovej vzdialenosti</strong> cesty (od prvého letiska po konečné letisko) a <strong>oneskore prílete</strong>.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4">
                📏 Výpočet vzdialenosti: Od PRVÉHO letiska po KONEČNÉ
              </h3>
              <div className="space-y-3 text-sm text-blue-800 dark:text-blue-300">
                <p><strong>Príklad 1:</strong> Bratislava→Viedeň→Barcelona</p>
                <ul className="ml-6 space-y-1">
                  <li>• Vzdialenosť BA→Barcelona: ~1,500 km (priama vzdialenosť)</li>
                  <li>• NEsčítavate BA→Viedeň (60 km) + Viedeň→Barcelona (1,240 km)</li>
                  <li>• ✅ Kompenzácia: 400 € (1,500-3,500 km)</li>
                </ul>
                <p className="mt-3"><strong>Príklad 2:</strong> Košice→Viedeň→New York</p>
                <ul className="ml-6 space-y-1">
                  <li>• Vzdialenosť Košice→New York: ~7,100 km (priama vzdialenosť)</li>
                  <li>• ✅ Kompenzácia: 600 € (&gt;3,500 km)</li>
                </ul>
              </div>
            </div>

            {/* Compensation Table */}
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 dark:border-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Vzdialenosť</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Oneskore</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Kompenzácia</th>
                    <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left">Príklad trasy</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Do 1,500 km</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3h</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold">250 €</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">BA→Viedeň→Rím (780 km)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1,500-3,500 km</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3h</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold">400 €</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">BA→Viedeň→Barcelona (1,520 km)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3,500 km (v EÚ)</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3h</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold">400 €</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">BA→Frankfurt→Dubaj (4,200 km)</td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-gray-800/50">
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3,500 km</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3-4h</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold">300 €*</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">BA→Londýn→NY (6,700 km, delay 3-4h)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3,500 km</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;4h</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold">600 €</td>
                    <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">BA→Viedeň→NY (6,700 km, delay &gt;4h)</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                * Pri trasách &gt;3,500 km: kompenzácia znížená o 50% ak meškanie 3-4h (300 €), plná suma (600 €) ak &gt;4h
              </p>
            </div>

            {/* Real Examples */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                💰 Príklady reálnych kompenzácií (slovenské trasy)
              </h3>
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Bratislava→Viedeň→Londýn</p>
                  <p className="text-gray-700 dark:text-gray-300">Vzdialenosť: 1,240 km | Oneskore: 4h | Kompenzácia: <strong>250 €</strong></p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Košice→Viedeň→Barcelona</p>
                  <p className="text-gray-700 dark:text-gray-300">Vzdialenosť: 1,630 km | Oneskore: 5h | Kompenzácia: <strong>400 €</strong></p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Bratislava→Frankfurt→Dubaj</p>
                  <p className="text-gray-700 dark:text-gray-300">Vzdialenosť: 4,200 km | Oneskore: 6h | Kompenzácia: <strong>400 €</strong> (v rámci EÚ)</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Košice→Viedeň→New York</p>
                  <p className="text-gray-700 dark:text-gray-300">Vzdialenosť: 7,100 km | Oneskore: 7h | Kompenzácia: <strong>600 €</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
              <h3 className="font-bold text-yellow-900 dark:text-yellow-200 mb-2">
                💡 TIP: Kalkulačka kompenzácie
              </h3>
              <p className="text-yellow-800 dark:text-yellow-300 text-sm mb-3">
                Neviete, koľko vám patrí? Použite našu kalkulačku!
              </p>
              <Link
                href="/sk/kalkulacka-kompenzacie"
                className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Vypočítať kompenzáciu →
              </Link>
            </div>
          </div>
        </section>

        {/* Section 6: Čo robiť */}
        <section id="co-robit" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            6. Čo robiť na letisku pri zmeškanom prestupe?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4">
                🎯 4-krokový akčný plán na letisku
              </h3>
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-1">
                      Ihneď kontaktujte leteckú spoločnosť
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                      Akonáhle je isté, že zmeškáte prestup, bežte k transfer desk alebo pulty aerolínky. Oznámte situáciu a požiadajte o:
                    </p>
                    <ul className="text-sm text-blue-800 dark:text-blue-300 ml-6 mt-2 space-y-1">
                      <li>• <strong>Alternatívny let</strong> na ďalšiu možnú hodinu (ASAP)</li>
                      <li>• <strong>Písomné potvrdenie</strong> o zmeškanom prestupe (dôvod, časy)</li>
                      <li>• <strong>Nový boarding pass</strong> na náhradný let</li>
                    </ul>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-1">
                      Zber dôkazy (KRITICKÉ!)
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                      Dokumentujte všetko pre neskoršiu reklamáciu:
                    </p>
                    <ul className="text-sm text-blue-800 dark:text-blue-300 ml-6 space-y-1">
                      <li>• 📸 <strong>Fotky boarding pass-ov</strong> (oboch letov)</li>
                      <li>• 📸 <strong>Obrazovky s časmi</strong> (oneskore + prílet)</li>
                      <li>• 📄 <strong>Písomné potvrdenie</strong> od aerolínky</li>
                      <li>• 📧 <strong>Booking potvrdenie</strong> (aby ste preukázali 1 rezerváciu)</li>
                      <li>• 🕐 <strong>Poznámky časov:</strong> kedy ste pristáli, kedy ste sa dozvedeli o zmeškanom lete</li>
                    </ul>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-1">
                      Využite právo na starostlivosť
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                      Počas čakania na náhradný let máte nárok na:
                    </p>
                    <ul className="text-sm text-blue-800 dark:text-blue-300 ml-6 space-y-1">
                      <li>• 🍽️ <strong>Jedlo a nápoje</strong> (zodpovedajúce času čakania)</li>
                      <li>• 📞 <strong>2× telefonické hovory</strong> (alebo e-maily)</li>
                      <li>• 🏨 <strong>Hotel</strong> (ak čakanie cez noc)</li>
                      <li>• 🚖 <strong>Transfer hotel↔letisko</strong></li>
                    </ul>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mt-2 font-semibold">
                      💡 TIP: Ak aerolinka neponúkne automaticky, <strong>kúpte si sami a uschovajte účtenky!</strong> Neskôr ich môžete vymáhať späť.
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-900 dark:text-blue-200 mb-1">
                      Odmietite vouchery, trvajte na peniazoch
                    </h4>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                      Aerolínky často ponúknu "voucher" namiesto peňazí. <strong>Odmietite!</strong>
                    </p>
                    <ul className="text-sm text-blue-800 dark:text-blue-300 ml-6 space-y-1">
                      <li>• ❌ Voucher: Použiteľný iba u danej aerolínky, časovo obmedzený</li>
                      <li>• ✅ Peniaze: Váš zákonný nárok, na účet, žiadne podmienky</li>
                    </ul>
                    <p className="text-sm text-blue-800 dark:text-blue-300 mt-2">
                      Ak aerolínka trvá na vouchere, <strong>jednoducho povedzte NIE</strong> a podajte reklamáciu neskôr (cez ClaimWinger).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="font-bold text-red-900 dark:text-red-200 mb-2">
                ⚠️ ČO NEROBÍTE:
              </h3>
              <ul className="space-y-2 text-sm text-red-800 dark:text-red-300">
                <li>❌ <strong>Nekupujte si nový lístok sami!</strong> Aerolinka musí zabezpečiť náhradný let ZADARMO.</li>
                <li>❌ <strong>Nepodpisujte "final settlement"!</strong> Môže vás to pripraviť o ďalšie nároky.</li>
                <li>❌ <strong>Neodchádzajte bez dokumentácie!</strong> Bez dôkazov ťažko dokážete reklamáciu.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 7: Ako reklamovať */}
        <section id="ako-reklamovat" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            7. Ako podať reklamáciu za zmeškaný prestup?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Po návrate domov máte <strong>3 roky</strong> na podanie reklamácie (na Slovensku). Máte 2 možnosti:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Option 1: Direct */}
              <div className="border border-red-300 dark:border-red-700 rounded-lg p-6 bg-red-50 dark:bg-red-900/20">
                <h3 className="font-bold text-red-900 dark:text-red-200 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  ❌ Možnosť A: Priamy kontakt s aerolínkou
                </h3>
                <div className="text-sm text-red-800 dark:text-red-300 space-y-3">
                  <p><strong>Proces:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• Napíšete e-mail aerolínke</li>
                    <li>• Priložíte dokumentáciu</li>
                    <li>• Čakáte 3-6 mesiacov</li>
                    <li>• 95% reklamácií automaticky zamietnutých</li>
                  </ul>
                  <p className="mt-3 font-bold">Úspešnosť: 0-5%</p>
                  <p className="text-xs italic">
                    Aerolínky vedia, že väčšina ľudí sa nevyznačuje v právach a vzdá to po prvom zamietnutí.
                  </p>
                </div>
              </div>

              {/* Option 2: ClaimWinger */}
              <div className="border border-green-300 dark:border-green-700 rounded-lg p-6 bg-green-50 dark:bg-green-900/20">
                <h3 className="font-bold text-green-900 dark:text-green-200 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  ✅ Možnosť B: ClaimWinger (ODPORÚČANÉ)
                </h3>
                <div className="text-sm text-green-800 dark:text-green-300 space-y-3">
                  <p><strong>Proces:</strong></p>
                  <ul className="ml-6 space-y-1">
                    <li>• Vyplníte formulár (3 minúty)</li>
                    <li>• Právny tím prevezme všetko</li>
                    <li>• 8-12 týždňov priemer</li>
                    <li>• Platíte iba pri úspechu (25% fee)</li>
                  </ul>
                  <p className="mt-3 font-bold">Úspešnosť: 98%</p>
                  <p className="text-xs italic">
                    Aerolínky vedia, že ClaimWinger ide až do súdu, takže väčšinou vyplácajú.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-3">
                🎯 Prečo ClaimWinger?
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <li>✓ <strong>98% úspešnosť:</strong> Viac než 300,000 vyriešených prípadov</li>
                <li>✓ <strong>Žiadne riziko:</strong> Platíte iba ak získate peniaze (25% fee)</li>
                <li>✓ <strong>Rýchle:</strong> Priemer 8-12 týždňov (vs. 3-6 mesiacov priamy kontakt)</li>
                <li>✓ <strong>Právna sila:</strong> Aerolínky neignorujú ClaimWinger (vedia, že ideme do súdu)</li>
                <li>✓ <strong>Vždy cash:</strong> Peniaze na účet, nie vouchery</li>
                <li>✓ <strong>Multilanguage:</strong> Formulár v slovenčine, ale komunikácia s aerolínkou v angličtine/ich jazyku</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Zmeškali ste prestup? Získajte až 600 € kompenzácie!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nechajte právnikov ClaimWinger vybaviť všetko za vás. Platíte iba pri úspechu.
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                Podať reklamáciu cez ClaimWinger →
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                ✓ Bez rizika ✓ 98% úspešnosť ✓ Platíte iba pri výhre
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section id="faq" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            8. Najčastejšie otázky (FAQ)
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Musím bývať na Slovensku, aby som mal nárok na kompenzáciu?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>NIE!</strong> Nepotrebujete slovenské občianstvo ani bydlisko. EÚ 261/2004 sa vzťahuje na <strong>všetkých pasažierov</strong> letiacich z EÚ (alebo do EÚ európskou aerolínkou), bez ohľadu na národnosť.</p>
                <p className="mt-2">Slováci, Česi, Poliaci, Ukrajinci, Číňania, Američania - všetci majú rovnaké práva!</p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Kúpil som lístok cez Kiwi.com. Mám nárok?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>ZÁLEŽÍ!</strong> Ak Kiwi predal lety ako <strong>"self-transfer"</strong> (2 samostatné booking kódy), <strong>nemáte nárok</strong> na kompenzáciu za zmeškaný prestup.</p>
                <p className="mt-2">Ako zistiť:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• Dostali ste 2 e-maily s potvrdením? = 2 rezervácie = NIE nárok</li>
                  <li>• Kiwi označil ako "virtual interlining"? = NIE nárok</li>
                  <li>• Kiwi ponúkol "Guarantee" (poistenie)? = NIE je kompenzácia EÚ 261/2004</li>
                </ul>
                <p className="mt-2 font-bold">✅ Ale môžete mať nárok na kompenzáciu za oneskore <strong>prvého</strong> letu (ak bol &gt;3h)!</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Let zmeškali kvôli kontrole batožiny. Mám nárok?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>ZÁLEŽÍ!</strong> Ak ste prišli na letisko včas (min. 2h pred odletom), ale bezpečnostná kontrola trvala príliš dlho → aerolinka/letisko <strong>môže byť zodpovedná</strong>.</p>
                <p className="mt-2">Dôkazy, ktoré potrebujete:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• Čas príchodu na letisko (boarding pass prvého letu, parkovací lístok)</li>
                  <li>• Svedectvo o dlhom rade na kontrole</li>
                  <li>• Čas, kedy ste prišli k gate (boarding pass zmeškaného letu)</li>
                </ul>
                <p className="mt-2 font-bold">⚠️ Ale ak ste prišli menej ako 2h pred odletom → vaša chyba → NIE nárok</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Koľko času mám na podanie reklamácie?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p>Závisí od krajiny, kde podávate reklamáciu:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• <strong>Slovensko:</strong> 3 roky</li>
                  <li>• <strong>Česko:</strong> 3 roky</li>
                  <li>• <strong>Poľsko:</strong> 3 roky</li>
                  <li>• <strong>Rakúsko:</strong> 3 roky</li>
                  <li>• <strong>Nemecko:</strong> 3 roky</li>
                </ul>
                <p className="mt-2 font-bold">💡 TIP: Aj staré prípady stoja za podanie! Skontrolujte lety z posledných 3 rokov.</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Prvý let mal 2h oneskore, prestup som stihol. Mám nárok?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>ZÁLEŽÍ!</strong> Ak ste stihli prestup a príchod do konečného cieľa bol &lt;3h neskoro → <strong>NIE nárok</strong>.</p>
                <p className="mt-2">Príklad:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• Plán: BA→Viedeň (10:00-10:50) → Viedeň→Barcelona (13:00-14:45)</li>
                  <li>• Realita: BA→Viedeň oneskoreý (12:00-12:50), ale stíhate prestup</li>
                  <li>• Prílet Barcelona: 14:45 (podľa plánu) → oneskore 0h</li>
                  <li>• <strong>❌ NIE nárok</strong> (prílet do konečného cieľa včas)</li>
                </ul>
                <p className="mt-2 font-bold">Pravidlo: Počíta sa PRÍLET do konečného cieľa, nie medzipristátie!</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Aerolinka mi ponúkla voucher 300 €. Mám ho prijať?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>❌ ODPORÚČAME ODMIETNUŤ!</strong> Vouchery sú trik aerolínok na úsporu peňazí.</p>
                <p className="mt-2">Prečo:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• <strong>Obmedzená platnosť:</strong> Väčšinou 1 rok (potom prepadne)</li>
                  <li>• <strong>Iba u danej aerolínky:</strong> Nemôžete použiť inde</li>
                  <li>• <strong>Často nižšia hodnota:</strong> 300 € voucher vs. 600 € cash kompenzácia</li>
                  <li>• <strong>Komplikované podmienky:</strong> Preplatok sa nevráti, blackout dates, ...</li>
                </ul>
                <p className="mt-2 font-bold">✅ Máte ZÁKONNÝ nárok na PENIAZE (na účet), nie voucher!</p>
                <p className="mt-2 text-xs italic">Ak už ste prijali voucher, stále môžete vymáhať rozdiel (600 € - 300 € = 300 € cash navyše).</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Mám nárok aj na refund lístka?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>ZÁLEŽÍ!</strong> Máte právo výberu:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• <strong>Alternatívny let ASAP zadarmo</strong> (aerolinka musí zabezpečiť)</li>
                  <li>• <strong>ALEBO vrátenie peňazí</strong> (refund) za neuskutočnenú časť cesty</li>
                </ul>
                <p className="mt-2 font-bold">⚠️ DÔLEŽITÉ: Kompenzácia (250-600 €) je EXTRA, nezávisle od refund/alternatívneho letu!</p>
                <p className="mt-2">Príklad:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• Zmeškali ste prestup BA→Viedeň→NY</li>
                  <li>• Aerolinka ponúkne alternatívny let o 8h neskôr (zadarmo)</li>
                  <li>• Prílet NY: 8h oneskore</li>
                  <li>• <strong>Máte nárok:</strong> Alternatívny let (zadarmo) + 600 € kompenzácia!</li>
                </ul>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <summary className="cursor-pointer font-bold text-gray-900 dark:text-white flex items-center justify-between">
                <span>Cestoval som s bábätkom. Má nárok aj ono?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                <p><strong>ÁNO!</strong> Ak malo bábätko <strong>vlastný lístok</strong> (aj za 10% ceny), má nárok na plnú kompenzáciu (250-600 €).</p>
                <p className="mt-2">Príklad:</p>
                <ul className="ml-6 space-y-1 mt-2">
                  <li>• Rodina (2 dospelí + 1 bábätko): BA→Viedeň→NY</li>
                  <li>• Zmeškaný prestup → 8h oneskore</li>
                  <li>• Všetci 3 mali vlastné lístky</li>
                  <li>• <strong>Kompenzácia: 3 × 600 € = 1,800 €!</strong></li>
                </ul>
                <p className="mt-2 text-xs italic">* Ak bábätko cestovalo "lap infant" (bez sedadla, na kolenách), nemá nárok na samostatnú kompenzáciu.</p>
              </div>
            </details>
          </div>
        </section>

        {/* Section 9: Záver */}
        <section id="zaver" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            9. Záver: Získajte kompenzáciu za zmeškaný prestup
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zmeškaný prestup nie je iba nepríjemnosť - je to príležitosť získať až <strong>600 € kompenzácie</strong>. Kľúčové body, ktoré si treba zapamätať:
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-blue-900 dark:text-blue-200 mb-4">
                🎯 Kľúčové pravidlá - Zhrnutie
              </h3>
              <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-300">
                <li>✓ <strong>1 rezervácia = nárok:</strong> Oba lety musia byť v jednom booking kóde</li>
                <li>✓ <strong>Oneskore &gt;3h do konečného cieľa:</strong> Počíta sa prílet, nie odlet</li>
                <li>✓ <strong>Vzdialenosť určuje sumu:</strong> 250 € / 400 € / 600 € podľa km</li>
                <li>✓ <strong>3 roky na reklamáciu:</strong> Neponáhľajte sa, ale nezabudnite</li>
                <li>✓ <strong>ClaimWinger = 98% úspešnosť:</strong> Nechajte profesionálov vymáhať práva</li>
                <li>✓ <strong>Vždy cash, nie voucher:</strong> Máte nárok na peniaze na účet</li>
              </ul>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Zmeškali ste prestup a máte nárok na kompenzáciu?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nechajte ClaimWinger vybaviť všetko za vás. Vyplníte formulár za 3 minúty, zbytek je na nás. <strong>Platíte iba pri úspechu (25%).</strong>
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg mb-4"
              >
                Získať kompenzáciu cez ClaimWinger →
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ✓ 98% úspešnosť ✓ 8-12 týždňov priemer ✓ Vždy peniaze, nie vouchery
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Súvisiace články
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/sk/blog/kompletny-przewodnik-odszkodowanie"
              className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Kompletný sprievodca kompenzáciami
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Všetko, čo potrebujete vedieť o kompenzáciách podľa EÚ 261/2004.
              </p>
            </Link>
            <Link
              href="/sk/meskanie-letu"
              className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Meškanie letu – práva pasažiera
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Čo robiť pri oneskoreý lete a ako získať kompenzáciu.
              </p>
            </Link>
            <Link
              href="/sk/zruseny-let"
              className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Zrušený let – vaše práva
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompletný sprievodca právami pri zrušenom lete.
              </p>
            </Link>
            <Link
              href="/sk/blog/wizz-air-odszkodowanie"
              className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Wizz Air – ako získať kompenzáciu
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Špecifický sprievodca pre Wizz Air, najpoužívanejšiu aerolínku na Slovensku.
              </p>
            </Link>
          </div>
        </section>
      </article>

      {/* Schema.org FAQ Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Musím bývať na Slovensku, aby som mal nárok na kompenzáciu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIE! Nepotrebujete slovenské občianstvo ani bydlisko. EÚ 261/2004 sa vzťahuje na všetkých pasažierov letiacich z EÚ (alebo do EÚ európskou aerolínkou), bez ohľadu na národnosť."
                }
              },
              {
                "@type": "Question",
                "name": "Kúpil som lístok cez Kiwi.com. Mám nárok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ZÁLEŽÍ! Ak Kiwi predal lety ako 'self-transfer' (2 samostatné booking kódy), nemáte nárok na kompenzáciu za zmeškaný prestup. Ale môžete mať nárok na kompenzáciu za oneskore prvého letu!"
                }
              },
              {
                "@type": "Question",
                "name": "Let zmeškali kvôli kontrole batožiny. Mám nárok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ZÁLEŽÍ! Ak ste prišli na letisko včas (min. 2h pred odletom), ale bezpečnostná kontrola trvala príliš dlho, aerolinka/letisko môže byť zodpovedná. Ale ak ste prišli menej ako 2h pred odletom, je to vaša chyba."
                }
              },
              {
                "@type": "Question",
                "name": "Koľko času mám na podanie reklamácie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Na Slovensku máte 3 roky na podanie reklamácie za zmeškaný prestup. Aj staré prípady stoja za podanie!"
                }
              },
              {
                "@type": "Question",
                "name": "Prvý let mal 2h oneskore, prestup som stihol. Mám nárok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ZÁLEŽÍ! Ak ste stihli prestup a príchod do konečného cieľa bol menej ako 3h neskoro, nemáte nárok. Počíta sa PRÍLET do konečného cieľa, nie medzipristátie!"
                }
              },
              {
                "@type": "Question",
                "name": "Aerolinka mi ponúkla voucher 300 €. Mám ho prijať?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ODPORÚČAME ODMIETNUŤ! Vouchery majú obmedzenú platnosť, dajú sa použiť iba u danej aerolínky a často majú komplikované podmienky. Máte ZÁKONNÝ nárok na PENIAZE na účet!"
                }
              },
              {
                "@type": "Question",
                "name": "Mám nárok aj na refund lístka?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ZÁLEŽÍ! Máte právo výberu: alternatívny let ASAP zadarmo ALEBO vrátenie peňazí (refund). Kompenzácia (250-600 €) je EXTRA, nezávisle od refund/alternatívneho letu!"
                }
              },
              {
                "@type": "Question",
                "name": "Cestoval som s bábätkom. Má nárok aj ono?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO! Ak malo bábätko vlastný lístok (aj za 10% ceny), má nárok na plnú kompenzáciu (250-600 €). Ak cestovalo 'lap infant' bez sedadla, nemá nárok na samostatnú kompenzáciu."
                }
              }
            ]
          })
        }}
      />
    </LayoutSk>
  );
}
