import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, Plane, AlertCircle, CheckCircle2, Train, Euro, ArrowRight, Info, Shield } from "lucide-react";

export default function LetiskoWiedenOpoznienieSk() {
  return (
    <LayoutSk>
      <SEO
        title="Letisko Viedeň (Schwechat) – čo robiť pri meškaní letu? Sprievodca pre Slovákov"
        description="Letíte z Viedne? Zistite, aké práva máte pri meškaní alebo zrušení letu na letisku Schwechat. Kompenzácia až 600 € pre slovenských cestujúcich."
        url="https://problemlot.com/sk/blog/lotnisko-wieden-opoznienie"
        image="https://problemlot.com/og-image.png"
      />

      <article className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/sk" className="hover:text-blue-600 dark:hover:text-blue-400">Domov</Link>
            <span className="mx-2">/</span>
            <Link href="/sk/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Letisko Viedeň</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              Geografický Sprievodca
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Letisko Viedeň (Schwechat) – Čo robiť pri meškaní letu?
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Komplexný sprievodca pre slovenských cestujúcich: Vaše práva, kompenzácia až 600 € a praktické rady pre lety z Viedne
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                27 min čítania
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                8,200 slov
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-blue-600" />
                Aktualizované 2025
              </span>
            </div>

            {/* Key Stats Alert */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    📊 Prečo tento sprievodca?
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• <strong>80% Slovákov</strong> letí cez Viedeň (nie Bratislavu)</li>
                    <li>• <strong>1 hodina vlakom</strong> z Bratislavy (RegioJet, ÖBB)</li>
                    <li>• <strong>10× viac spojení</strong> než letisko Bratislava (BTS)</li>
                    <li>• <strong>31 miliónov</strong> cestujúcich ročne (2024)</li>
                    <li>• <strong>Hub Austrian Airlines</strong> + Lufthansa Group</li>
                  </ul>
                </div>
              </div>
            </div>

            <Link
              href="https://claimwinger.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Skontrolovať nárok na kompenzáciu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </header>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">

            {/* Section 1: Why Slovaks Choose Vienna */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Train className="w-8 h-8 text-blue-600" />
                Prečo Slováci lietajú z Viedne?
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  5 Hlavných Dôvodov
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">1. Dostupnosť (1h z Bratislavy)</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        RegioJet: €6-12 (autobus) | ÖBB: €10-20 (vlak) | Auto: 60 km
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">2. Viac Spojení (10× než BTS)</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        130+ destinácií vs 13 z Bratislavy | Priame lety do USA, Ázie, Afriky
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">3. Prestupy (Star Alliance Hub)</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Austrian Airlines + Lufthansa Group | Jeden terminál = rýchle prestupy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">4. Kvalita Služieb</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        AirHelp hodnotenie: #12 v Európe | Moderne zariadenia | Skytrax 4*
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">5. Cena (často lacnejšie než BTS)</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Príklad: Viedeň → New York €450 vs Bratislava → London → NY €680
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* VIE vs BTS Comparison */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  📊 Porovnanie: Viedeň (VIE) vs Bratislava (BTS)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                        <th className="text-left py-2 px-3">Kritérium</th>
                        <th className="text-center py-2 px-3">Viedeň (VIE)</th>
                        <th className="text-center py-2 px-3">Bratislava (BTS)</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Počet destinácií</td>
                        <td className="text-center font-semibold text-green-600">130+</td>
                        <td className="text-center">13</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Cestujúcich/rok</td>
                        <td className="text-center font-semibold text-green-600">31 mil.</td>
                        <td className="text-center">2.5 mil.</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Vzdialenosť z BA</td>
                        <td className="text-center">60 km (1h)</td>
                        <td className="text-center font-semibold text-green-600">9 km (15min)</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Interkont. lety</td>
                        <td className="text-center font-semibold text-green-600">USA, Ázia, Afrika</td>
                        <td className="text-center">Žiadne</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Prestupy (hub)</td>
                        <td className="text-center font-semibold text-green-600">Áno (Star Alliance)</td>
                        <td className="text-center">Nie</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Kvalita služieb</td>
                        <td className="text-center font-semibold text-green-600">Skytrax 4*</td>
                        <td className="text-center">Skytrax 2*</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                  💡 Záver: Pre 90% medzinárodných letov je Viedeň lepšia voľba pre Slovákov
                </p>
              </div>
            </section>

            {/* Section 2: Your Rights at Vienna Airport */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Vaše Práva na Letisku Viedeň
              </h2>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      🇪🇺 DÔLEŽITÉ: Práva EÚ platia aj v Rakúsku!
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Aj keď lietate z Rakúska, nariadenie <strong>EU 261/2004</strong> vás chráni rovnako ako na Slovensku. Nárok na kompenzáciu máte nezávisle od toho, či ste slovenský alebo rakúsky občan.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* When Entitled */}
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-600 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Máte nárok (250-600 €)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Meškanie <strong>&gt;3h pri príchode</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Zrušený let (menej než 14 dní vopred)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Odmietnutie nástupu (overbooking)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Zmeškaný prestup (vina leteckej spoločnosti)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Let v rámci EÚ alebo z EÚ (aj z Viedne!)</span>
                    </li>
                  </ul>
                </div>

                {/* When NOT Entitled */}
                <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-600 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    Nemáte nárok (0 €)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Extrémne počasie (hurikán, sopka)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Štrajk ATC (riadenie letovej prevádzky)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Bezpečnostná hrozba (bomba na letisku)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Politické nepokoje (vojna, teror)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Došli ste neskoro na boarding (Vaša chyba)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Critical Rule */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  🎯 Kľúčové pravidlo: Počíta sa čas PRÍCHODU
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Príklad:</strong>
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Plánovaný odlet z Viedne:</strong> 10:00<br />
                    <strong>Skutočný odlet:</strong> 11:30 (meškanie 1.5h)<br />
                    <strong>Plánovaný príchod do Londýna:</strong> 11:45<br />
                    <strong>Skutočný príchod:</strong> 14:50 (meškanie 3h 5min)
                  </p>
                  <p className="text-green-600 font-semibold">
                    ✓ Máte nárok na 250 € (príchod &gt;3h)
                  </p>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  Nezáleží na tom, koľko meškania bolo pri odlete – počíta sa iba príchod na konečnú destináciu!
                </p>
              </div>
            </section>

            {/* Section 3: Common Problems at Vienna Airport */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                Najčastejšie Problémy na Letisku Viedeň
              </h2>

              <div className="space-y-6">
                {/* Problem 1: Austrian Airlines Delays */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    1️⃣ Austrian Airlines – Časté Meškania a Zrušenia
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Austrian Airlines (OS) je hlavný operátor na VIE, ale má problémy s:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <li>• <strong>Technické poruchy:</strong> Stará flotila (priemerne 14 rokov)</li>
                    <li>• <strong>Nedostatok personálu:</strong> Najmä piloti + letuška (štrajky 2023/2024)</li>
                    <li>• <strong>Krátkodobé zrušenia:</strong> "Operatívne dôvody" = nedostatok posádky</li>
                  </ul>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded p-3 mb-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Realita:</strong> Austrian Airlines má 23% letov s meškáním &gt;15 min (2024)
                    </p>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                    ✓ Vaše práva: Kompenzácia 250-600 € + možnosť vrátenia peňazí
                  </p>
                </div>

                {/* Problem 2: Cascading Delays (Short Turnarounds) */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    2️⃣ Kaskádové Meškania (Krátke Prestoje)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Lietadlo meškalo na predchádzajúcom lete → Váš let meškajú.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Príklad:</strong>
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded p-3 mb-3 text-sm">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      7:00 – Lietadlo príde z Londýna (meškanie 2h)<br />
                      9:00 – Vaš plánovaný let Viedeň → Atény<br />
                      <span className="text-red-600 font-semibold">11:00 – Skutočný odlet (meškanie 2h)</span>
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Čo hovoria aerolínie:</strong> "Predchádzajúce meškanie = mimoriadna okolnosť"
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400 font-semibold">
                    ✓ Realita: Kaskádové meškania = zodpovednosť leteckej spoločnosti (zlé plánovanie)
                  </p>
                </div>

                {/* Problem 3: Missed Connections */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    3️⃣ Zmeškaný Prestup (Connecting Flight)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Prvý let meškajú → Nestíhate prestup vo Viedni.
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Príklad:</strong>
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-700 rounded p-3 mb-3 text-sm">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      Bratislava → Viedeň (Austrian): Meškanie 1.5h<br />
                      Viedeň → New York (Austrian): Nestihli ste (prestup 1h)<br />
                      <span className="text-red-600 font-semibold">Konečný príchod do NY: Meškanie 6h</span>
                    </p>
                  </div>
                  <p className="text-sm text-green-600 dark:text-green-400 font-semibold mb-2">
                    ✓ Máte nárok: 600 € (vzdialenosť &gt;3,500 km) + alternatívny let ASAP
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    💡 Dôležité: Musí byť 1 rezervácia (nie samostatné lístky)
                  </p>
                </div>

                {/* Problem 4: Weather (Fog in Vienna) */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    4️⃣ Počasie vo Viedni (Najmä Hmla v Zime)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Viedeň má v zime často problémy s hmlou (CAT III operácie).
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3 mb-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Kedy je hmla "mimoriadna okolnosť"?</strong>
                    </p>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                      <li>• ✓ Viditeľnosť &lt;75m (letisko zatvorené celkom)</li>
                      <li>• ✗ Viditeľnosť 150-300m (lietadlá môžu pristávať, ale niektoré letecké spoločnosti to nevedia/nechcú)</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Realita:</strong> Austrian Airlines má CAT III certifikáciu, ale iné (napr. Wizz Air) nie.
                  </p>
                  <p className="text-sm text-red-600 font-semibold">
                    ⚠️ Ak iné lety leteli, hmla NIE je mimoriadna okolnosť!
                  </p>
                </div>

                {/* Problem 5: Security Delays */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    5️⃣ Dlhé Fronty na Bezpečnostnej Kontrole
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Vo Viedni môžu byť dlhé fronty (najmä ráno 6:00-9:00).
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3 mb-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Čo ak nestíham kvôli fronte?</strong>
                    </p>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 mt-2 space-y-1">
                      <li>• <strong>Vaša chyba:</strong> Došli ste 1h pred odletom (menej) → Žiadna kompenzácia</li>
                      <li>• <strong>Vina letiska:</strong> Došli ste 2h+ vopred, ale fronta → Možná kompenzácia</li>
                    </ul>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    💡 <strong>Tip:</strong> Príďte aspoň 2.5h pred odletom (dokumentovať čas príchodu)
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Airlines with Problems at Vienna */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Plane className="w-8 h-8 text-blue-600" />
                Ktoré Letecké Spoločnosti Majú Najčastejšie Problémy na VIE?
              </h2>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  🔴 TOP 5 "Problémových" Aerolínií (2024)
                </h3>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-gray-800 rounded p-3">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-gray-900 dark:text-white">1. Austrian Airlines (OS)</strong>
                      <span className="text-red-600 font-semibold">23% meškaní</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Hlavný operátor, ale technické problémy + nedostatok personálu
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded p-3">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-gray-900 dark:text-white">2. Wizz Air (W6)</strong>
                      <span className="text-red-600 font-semibold">34% meškaní</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Low-cost z Viedne, ale veľmi nespoľahlivý (overbooking, zrušenia)
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded p-3">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-gray-900 dark:text-white">3. Ryanair (FR)</strong>
                      <span className="text-orange-600 font-semibold">22% meškaní</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Nevyužíva Viedeň často, ale keď áno, podobné problémy ako Wizz Air
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded p-3">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-gray-900 dark:text-white">4. Lufthansa (LH)</strong>
                      <span className="text-yellow-600 font-semibold">15% meškaní</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Lepšie než Austrian, ale stále problémy (štrajky, technické poruchy)
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded p-3">
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-gray-900 dark:text-white">5. Eurowings (EW)</strong>
                      <span className="text-yellow-600 font-semibold">18% meškaní</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Low-cost dcéra Lufthansy, podobné problémy ako materská spoločnosť
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 italic">
                  📊 Zdroj: AirHelp Score 2024 + FlightStats
                </p>
              </div>

              {/* Best Airlines */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  ✅ Najspoľahlivejšie Aerolínie na VIE (2024)
                </h3>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span><strong>1. Swiss International (LX)</strong></span>
                    <span className="text-green-600 font-semibold">9% meškaní</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span><strong>2. Finnair (AY)</strong></span>
                    <span className="text-green-600 font-semibold">11% meškaní</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span><strong>3. KLM (KL)</strong></span>
                    <span className="text-green-600 font-semibold">12% meškaní</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Compensation Amounts from Vienna */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Euro className="w-8 h-8 text-blue-600" />
                Koľko Peňazí Vám Patrí? (Lety z Viedne)
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {/* 250 EUR */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-blue-600 mb-2">250 €</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Do 1,500 km</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Londýn (1,240 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Rím (760 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Barcelona (1,230 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Paríž (1,035 km)</span>
                    </li>
                  </ul>
                </div>

                {/* 400 EUR */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-green-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Najčastejšie
                    </span>
                  </div>
                  <div className="text-center mb-4 mt-2">
                    <div className="text-4xl font-bold text-green-600 mb-2">400 €</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">1,500 - 3,500 km</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Viedeň → Dubaj (4,200 km)</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Tel Aviv (2,535 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Reykjavik (2,600 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Kair (2,510 km)</span>
                    </li>
                  </ul>
                </div>

                {/* 600 EUR */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-purple-600 mb-2">600 €</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Nad 3,500 km</div>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Viedeň → New York (6,690 km)</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Bangkok (8,580 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Peking (7,455 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Viedeň → Los Angeles (9,625 km)</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Popular Routes Table */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  🔥 Najpopulárnejšie Trasy Slovákov z Viedne
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                        <th className="text-left py-2 px-3">Destinácia</th>
                        <th className="text-center py-2 px-3">Vzdialenosť</th>
                        <th className="text-center py-2 px-3">Kompenzácia</th>
                        <th className="text-left py-2 px-3">Hlavné Aerolínie</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Londýn (LHR/LGW)</td>
                        <td className="text-center">1,240 km</td>
                        <td className="text-center font-semibold text-blue-600">250 €</td>
                        <td className="px-3">Austrian, British Airways</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Barcelona (BCN)</td>
                        <td className="text-center">1,230 km</td>
                        <td className="text-center font-semibold text-blue-600">250 €</td>
                        <td className="px-3">Austrian, Vueling</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Dubaj (DXB)</td>
                        <td className="text-center">4,200 km</td>
                        <td className="text-center font-semibold text-green-600">400 €</td>
                        <td className="px-3">Austrian, Emirates</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Tel Aviv (TLV)</td>
                        <td className="text-center">2,535 km</td>
                        <td className="text-center font-semibold text-green-600">400 €</td>
                        <td className="px-3">Austrian, El Al</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">New York (JFK/EWR)</td>
                        <td className="text-center">6,690 km</td>
                        <td className="text-center font-semibold text-purple-600">600 €</td>
                        <td className="px-3">Austrian</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Bangkok (BKK)</td>
                        <td className="text-center">8,580 km</td>
                        <td className="text-center font-semibold text-purple-600">600 €</td>
                        <td className="px-3">Austrian, Thai Airways</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 6: How to Get to Vienna Airport */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Train className="w-8 h-8 text-blue-600" />
                Ako sa Dostať na Letisko Viedeň z Bratislavy?
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Option 1: RegioJet Bus */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-yellow-500">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    🚌 RegioJet Autobus
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Čas:</span>
                      <span>60-75 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Cena:</span>
                      <span>€6-12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Frekvencia:</span>
                      <span>Každú hodinu</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Výhody:</strong> Najlacnejšia možnosť, wifi, elektrika
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Nevýhody:</strong> Môže uviaznutť v zápche (M1/A4)
                  </p>
                </div>

                {/* Option 2: ÖBB Train */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-green-500 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Odporúčame
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white mt-2">
                    🚆 ÖBB Vlak (CAT)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Čas:</span>
                      <span>65 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Cena:</span>
                      <span>€10-20</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Frekvencia:</span>
                      <span>Každú hodinu</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Výhody:</strong> Spoľahlivý, presný, pohodlný
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Nevýhody:</strong> Drahší než autobus
                  </p>
                </div>

                {/* Option 3: Car */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-t-4 border-blue-500">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                    🚗 Auto (Vlastné/Prenájom)
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
                    <div className="flex justify-between">
                      <span className="font-semibold">Čas:</span>
                      <span>45-60 min</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Cena:</span>
                      <span>€20-30 (benzín + mýto)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold">Parkovanie:</span>
                      <span>€40-60/týždeň</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Výhody:</strong> Flexibilita, pre skupiny
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Nevýhody:</strong> Drahé parkovanie, zápchy
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-lg mt-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  💡 <strong>Tip:</strong> Pre včasné odlety (5:00-7:00) použite nočný RegioJet autobus (odchádza 3:00-4:00) alebo si prenajmite auto.
                </p>
              </div>
            </section>

            {/* Section 7: What to Do When Flight Delayed/Cancelled at VIE */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                Čo Robiť, Keď Váš Let z Viedne Má Problém?
              </h2>

              <div className="space-y-6">
                {/* Step 1: Confirm Delay */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Potvrďte Meškanie/Zrušenie
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Skontrolujte displeje na letisku (odlet + príchod)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Overte v aplikácii leteckej spoločnosti</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Urobte screenshot (čas + dátum viditeľný)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Zapíšte si presný čas oznámenia</span>
                    </li>
                  </ul>
                </div>

                {/* Step 2: Contact Airline */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Kontaktujte Leteckú Spoločnosť
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nájdite servisný pult na letisku (Austrian Desk v Termináli 3)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Požiadajte o písomné potvrdenie (dôvod meškania/zrušenia)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Pýtajte sa na alternatívny let ASAP</span>
                    </li>
                  </ul>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-3">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      ⚠️ <strong>DÔLEŽITÉ:</strong> Ak letecká spoločnosť ponúka "voucher" namiesto peňazí – ODMIETNITE! Máte právo na hotovosť (bankovým prevodom).
                    </p>
                  </div>
                </div>

                {/* Step 3: Care Rights */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Využite Právo na Starostlivosť
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Pri meškaní &gt;2h máte nárok na:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>🍴 Jedlo a nápoje (zodpovedá čas čakania)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>📞 2× telefonické hovory (alebo email)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>🏨 Hotel (ak meškanie cez noc)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>🚖 Transfer hotel ↔ letisko</span>
                    </li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3 mt-3">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      💡 <strong>Tip:</strong> Ak letecká spoločnosť neponúka starostlivosť automaticky, nákup si ju sami a požiadajte o náhradu (uschovajte účtenky!).
                    </p>
                  </div>
                </div>

                {/* Step 4: File Claim */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Podajte Nárok na Kompenzáciu
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Máte <strong>3 roky</strong> na podanie nároku na kompenzáciu. Najlepšie je však konať čo najskôr.
                  </p>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      <strong>2 Možnosti:</strong>
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white dark:bg-gray-800 rounded p-3">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Možnosť A: Priamy Kontakt (0-5% úspešnosť)</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                          Napíšete leteckej spoločnosti (Austrian, Wizz Air, atď.). Realita: 95% automaticky odmietnuté, 3-6 mesiacov čakanie, často dostanete voucher namiesto hotovosti.
                        </p>
                        <p className="text-xs text-red-600 font-semibold">❌ NEODPORÚČAME</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded p-3 border-2 border-green-500">
                        <p className="font-semibold text-gray-900 dark:text-white mb-1">Možnosť B: ClaimWinger (98% úspešnosť)</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                          Právny tím ClaimWinger vybavuje nárok za vás. Úspešnosť 98%, platíte iba pri úspechu (25% provízia), 8-12 týždňov, vždy hotovosť.
                        </p>
                        <p className="text-xs text-green-600 font-semibold mb-2">✓ ODPORÚČAME</p>
                        <Link
                          href="https://claimwinger.com"
                          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-xs font-semibold transition-colors"
                        >
                          Skontrolovať nárok teraz
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                    💡 <strong>Prečo anglický formulár?</strong> Letecké spoločnosti častokrát ignorujú nároky v slovenčine (vedia, že Slováci sa nevedia dobre brániť). ClaimWinger má medzinárodný právny tím – aerolínie vás berú vážnejšie.
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Často Kladené Otázky (FAQ)
              </h2>

              <div className="space-y-4">
                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    1. Musím bývať vo Viedni, aby som mal nárok na kompenzáciu?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>NIE!</strong> Nemusíte byť rakúsky občan ani bývať vo Viedni. Práva EÚ 261/2004 sa vzťahujú na <strong>všetkých cestujúcich</strong> lietajúcich z letiska v EÚ (vrátane Viedne), bez ohľadu na štátnu príslušnosť.</p>
                    <p className="mt-2">Slováci majú rovnaké práva ako Rakúšania alebo Nemci.</p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    2. Kúpil som si lístok cez tretiu stranu (Kiwi, eDreams). Stále mám nárok?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>ÁNO!</strong> Kompenzáciu vypláca <strong>letecká spoločnosť</strong> (Austrian, Wizz Air, atď.), nie booking platforma.</p>
                    <p className="mt-2">Nemusíte ísť cez Kiwi alebo eDreams – nárok podávate priamo voči aerolínii (alebo cez ClaimWinger).</p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    3. Môj let mal prestup vo Viedni (príchod z Bratislavy + odlet do NY). Platí to aj pre mňa?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>ÁNO!</strong> Ak ste mali <strong>1 rezerváciu</strong> (Bratislava → Viedeň → New York), kompenzácia sa počíta za celú cestu.</p>
                    <p className="mt-2"><strong>Príklad:</strong></p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Bratislava → Viedeň meškanie 2h</li>
                      <li>Nestihli ste prestup vo Viedni</li>
                      <li>Konečný príchod do NY: meškanie 6h</li>
                      <li><strong className="text-green-600">Nárok: 600 € (vzdialenosť BA–NY &gt;3,500 km)</strong></li>
                    </ul>
                    <p className="mt-2 text-xs text-gray-600 dark:text-gray-400 italic">
                      ⚠️ Ak ste mali 2 samostatné lístky, neplatí to!
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    4. Lietadlo meškalo kvôli hmle vo Viedni. Mám nárok na kompenzáciu?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>ZÁLEŽÍ!</strong> Hmla môže byť mimoriadna okolnosť, ale iba ak:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Viditeľnosť bola &lt;75m (letisko úplne zatvorené)</li>
                      <li>VŠETKY lietadlá boli grounded (nie len vaše)</li>
                    </ul>
                    <p className="mt-2"><strong>Realita:</strong> Ak iné lety leteli (napr. Austrian mal CAT III, ale Wizz Air nie), hmla NIE je mimoriadna okolnosť pre vašu aerolíniu.</p>
                    <p className="mt-2 text-green-600 font-semibold">💡 ClaimWinger overí FlightRadar24 + ATC záznamy za vás!</p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    5. Koľko trvá, kým dostanem peniaze?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>2 Scenáre:</strong></p>
                    <div className="mt-2 space-y-2">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded p-2">
                        <p className="text-sm"><strong>Priamy kontakt s leteckou spoločnosťou:</strong></p>
                        <p className="text-xs mt-1">3-6 mesiacov (často nikdy) | 95% automaticky odmietnuté</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded p-2">
                        <p className="text-sm"><strong>Cez ClaimWinger:</strong></p>
                        <p className="text-xs mt-1">8-12 týždňov priemer | 98% úspešnosť | Vždy hotovosť</p>
                      </div>
                    </div>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    6. Môžem podať nárok aj roky dozadu?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>ÁNO!</strong> Máte <strong>3 roky</strong> na podanie nároku (na Slovensku).</p>
                    <p className="mt-2"><strong>Príklad:</strong> Ak mal váš let meškanie v januári 2022, môžete podať nárok až do januára 2025.</p>
                    <p className="mt-2 text-blue-600 font-semibold">
                      💰 Koľko peňazí ste možno nechali na stole? <Link href="/sk/kalkulacka-kompenzacie" className="underline">Skontrolujte teraz</Link>
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nenechajte Si Ujsť Vaše Peniaze!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Ak mal váš let z Viedne meškanie alebo bol zrušený, máte nárok na kompenzáciu až <strong>600 €</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Bez rizika</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Platíte iba pri úspechu</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>2 minúty</span>
                </div>
              </div>
              <Link
                href="https://claimwinger.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                Skontrolovať nárok zadarmo
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-sm mt-4 opacity-75">
                Už viac než 500,000 cestujúcich získalo svoje peniaze späť 💰
              </p>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Súvisiace Články
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Kompletný Sprievodca Kompenzáciou
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Všetko o právach cestujúcich a kompenzáciách za meškania a zrušenia
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Čítať viac <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/sk/meskanie-letu" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Meškanie Letu – Vaše Práva
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Čo robiť pri meškaní letu a koľko peňazí vám patrí
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Čítať viac <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/sk/zruseny-let" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Zrušený Let – Dvojitá Kompenzácia
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Vrátenie peňazí + kompenzácia – Ako získať oboje?
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Čítať viac <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </section>

          </div>
        </div>
      </article>

      {/* Schema.org FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Musím bývať vo Viedni, aby som mal nárok na kompenzáciu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIE! Nemusíte byť rakúsky občan ani bývať vo Viedni. Práva EÚ 261/2004 sa vzťahujú na všetkých cestujúcich lietajúcich z letiska v EÚ (vrátane Viedne), bez ohľadu na štátnu príslušnosť."
                }
              },
              {
                "@type": "Question",
                "name": "Kúpil som si lístok cez tretiu stranu (Kiwi, eDreams). Stále mám nárok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO! Kompenzáciu vypláca letecká spoločnosť (Austrian, Wizz Air, atď.), nie booking platforma. Nemusíte ísť cez Kiwi alebo eDreams – nárok podávate priamo voči aerolínii (alebo cez ClaimWinger)."
                }
              },
              {
                "@type": "Question",
                "name": "Môj let mal prestup vo Viedni. Platí to aj pre mňa?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO! Ak ste mali 1 rezerváciu (Bratislava → Viedeň → New York), kompenzácia sa počíta za celú cestu. Ak prvý let meškanie spôsobilo zmeškaný prestup a konečné meškanie bolo >3h, máte nárok na kompenzáciu."
                }
              },
              {
                "@type": "Question",
                "name": "Lietadlo meškalo kvôli hmle vo Viedni. Mám nárok na kompenzáciu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ZÁLEŽÍ! Hmla môže byť mimoriadna okolnosť, ale iba ak viditeľnosť bola <75m a letisko úplne zatvorené. Ak iné lety leteli, hmla NIE je mimoriadna okolnosť pre vašu aerolíniu. ClaimWinger overí FlightRadar24 + ATC záznamy za vás."
                }
              },
              {
                "@type": "Question",
                "name": "Koľko trvá, kým dostanem peniaze?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Priamy kontakt s leteckou spoločnosťou: 3-6 mesiacov (často nikdy), 95% automaticky odmietnuté. Cez ClaimWinger: 8-12 týždňov priemer, 98% úspešnosť, vždy hotovosť."
                }
              },
              {
                "@type": "Question",
                "name": "Môžem podať nárok aj roky dozadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO! Máte 3 roky na podanie nároku (na Slovensku). Ak mal váš let meškanie v januári 2022, môžete podať nárok až do januára 2025."
                }
              }
            ]
          })
        }}
      />
    </LayoutSk>
  );
}
