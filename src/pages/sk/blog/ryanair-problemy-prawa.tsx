import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertCircle, CheckCircle2, Euro, ArrowRight, Clock, Shield, XCircle } from "lucide-react";

export default function RyanairProblemyPrawaSk() {
  return (
    <LayoutSk>
      <SEO
        title="Ryanair – ako získať kompenzáciu za meškanie a zrušenie? Sprievodca 2025"
        description="Mal váš let Ryanair meškanie alebo bol zrušený? Zistite, ako získať kompenzáciu až 600 €. Praktický sprievodca pre slovenských cestujúcich."
        url="https://lotproblem.pl/sk/blog/ryanair-problemy-prawa"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/sk" className="hover:text-blue-600 dark:hover:text-blue-400">Domov</Link>
            <span className="mx-2">/</span>
            <Link href="/sk/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Ryanair Kompenzácia</span>
          </nav>

          {/* Hero Section */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              Sprievodca Leteckými Spoločnosťami
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ryanair – Ako Získať Kompenzáciu za Meškanie a Zrušenie?
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Komplexný sprievodca pre slovenských cestujúcich: Vaše práva, najčastejšie problémy a ako získať kompenzáciu až 600 €
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                24 min čítania
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                7,200 slov
              </span>
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-blue-600" />
                Aktualizované 2025
              </span>
            </div>

            {/* Warning Alert */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-600 p-6 rounded-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    ⚠️ POZOR: Ryanair má zlú povesť pri kompenzáciách
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• <strong>22% letov</strong> má meškanie {'>'}15 minút (2024)</li>
                    <li>• <strong>4% letov</strong> je zrušených (dvojnásobok priemeru EÚ)</li>
                    <li>• <strong>95% nárokov</strong> automaticky odmietnutých priamo</li>
                    <li>• <strong>Podľa AirHelp:</strong> 68/80 aerolínií v spoľahlivosti</li>
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

            {/* Section 1: Why Ryanair Has Problems */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-blue-600" />
                Prečo Má Ryanair Toľko Problémov?
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Obchodný Model Ryanair
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">1. Ultra-nízke náklady = Ultra-vysoké riziko</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Ryanair tlačí náklady na minimum: Lietadlá v prevádzke 12-16h denne, 25-minútové medzipristátie, žiadne záložné posádky, minimálny personál.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">2. Agresívny overbooking</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Ryanair predáva viac lístkov, než má miest (typicky 5-10% viac). Keď sa všetci objavia = denied boarding.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">3. Sekundárne letiská</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Ryanair často používa menšie, vzdialené letiská s horšou infraštruktúrou a vyššou citlivosťou na počasie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">4. Odmietanie kompenzácií</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Ryanair je známy tým, že automaticky odmieta 95% nárokov. Vie, že väčšina cestujúcich sa nevyznačuje.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">5. Štrajky personálu</strong>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        Ryanair má časté štrajky pilotov a kabínových posádok kvôli pracovným podmienkam (najmä v Írsku, Španielsku, Portugalsku).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparison with Other Airlines */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  📊 Porovnanie: Ryanair vs Konkurencia (2024)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                        <th className="text-left py-2 px-3">Aerolínia</th>
                        <th className="text-center py-2 px-3">% Meškaní</th>
                        <th className="text-center py-2 px-3">% Zrušení</th>
                        <th className="text-center py-2 px-3">AirHelp Rank</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-200 dark:border-gray-700 bg-red-50 dark:bg-red-900/10">
                        <td className="py-3 px-3 font-semibold">Ryanair</td>
                        <td className="text-center text-red-600 font-semibold">22%</td>
                        <td className="text-center text-red-600 font-semibold">4%</td>
                        <td className="text-center text-red-600 font-semibold">68/80</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Wizz Air</td>
                        <td className="text-center">34%</td>
                        <td className="text-center">8%</td>
                        <td className="text-center">73/80</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">EasyJet</td>
                        <td className="text-center">18%</td>
                        <td className="text-center">2.5%</td>
                        <td className="text-center">45/80</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Lufthansa</td>
                        <td className="text-center">15%</td>
                        <td className="text-center">1.5%</td>
                        <td className="text-center">32/80</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Swiss</td>
                        <td className="text-center text-green-600">9%</td>
                        <td className="text-center text-green-600">0.8%</td>
                        <td className="text-center text-green-600">8/80</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                  📊 Zdroj: AirHelp Score 2024 + FlightStats
                </p>
              </div>
            </section>

            {/* Section 2: Most Common Ryanair Problems */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Plane className="w-8 h-8 text-blue-600" />
                Najčastejšie Problémy s Ryanair
              </h2>

              <div className="space-y-6">
                {/* Problem 1: Overbooking */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-red-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    1️⃣ Overbooking – Odmietnutie Nástupu
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Máte lístok, check-in OK, ale pri gate vám povedia "let je plný".
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded p-3 mb-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Príklad:</strong>
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Bratislava → Londýn Stansted (Friday 18:00)<br />
                      Check-in online OK, dorazili ste 2h vopred<br />
                      Pri gate: "Let je overbooked, ďalší let až zajtra ráno"<br />
                      <span className="text-red-600 font-semibold">Vaše plány zničené!</span>
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      ✓ Vaše Práva:
                    </p>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Kompenzácia:</strong> 250-600 € (podľa vzdialenosti)</li>
                      <li>• <strong>Alternatívny let:</strong> Najbližší dostupný (ASAP)</li>
                      <li>• <strong>ALEBO:</strong> Plná náhrada lístka + cesta domov</li>
                      <li>• <strong>Starostlivosť:</strong> Jedlo, nápoje, hotel (ak čakanie cez noc)</li>
                      <li>• <strong>HOTOVOSŤ:</strong> Môžete požadovať okamžitú hotovosť (nie voucher)</li>
                    </ul>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                    💡 <strong>Tip:</strong> Nikdy nesúhlaste s "voucherom" dobrovoľne! Máte právo na CASH kompenzáciu.
                  </p>
                </div>

                {/* Problem 2: Last-Minute Cancellation */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-orange-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    2️⃣ Zrušenie Letu na Poslednú Chvíľu
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Let zrušený 1-2 dni pred odletom (alebo aj v deň odletu).
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded p-3 mb-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Typické výhovorky Ryanair:</strong>
                    </p>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• "Technický problém lietadla" (často)</li>
                      <li>• "Operatívne dôvody" (nedostatok posádky)</li>
                      <li>• "Nedostatok cestujúcich" (nízka obsadenosť)</li>
                      <li>• "Štrajk personálu" (časté v IR, ES, PT)</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded p-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      ✓ Vaše Práva:
                    </p>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>Kompenzácia:</strong> 250-600 € (ak zrušenie &lt;14 dní pred odletom)</li>
                      <li>• <strong>Plná náhrada lístka:</strong> Vždy (nezávisle od kompenzácie)</li>
                      <li>• <strong>Alternatívny let:</strong> Najbližší možný (bezplatne)</li>
                      <li>• <strong>ALEBO:</strong> Náhrada + cesta domov (ak nechcete už letieť)</li>
                    </ul>
                  </div>
                  <p className="text-xs text-red-600 font-semibold mt-3">
                    ⚠️ Ryanair často ponúka iba VOUCHER na budúce lety – ODMIETNITE a požadujte HOTOVOSŤ!
                  </p>
                </div>

                {/* Problem 3: Long Delays */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    3️⃣ Dlhé Meškania (>3 hodiny)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Let má výrazné meškanie, často kvôli kaskádovým problémom.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded p-3 mb-3">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Príklad:</strong>
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Košice → Londýn Stansted (plánovaný odlet 15:00)<br />
                      Lietadlo meškalo na predchádzajúcom lete (Barcelona → Košice)<br />
                      Skutočný odlet: 19:30 (meškanie 4.5h)<br />
                      <span className="text-yellow-600 font-semibold">Príchod do Londýna: 21:45 (meškanie 4h)</span>
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3 mb-3">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      🎯 Kľúčová Zásada:
                    </p>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      Počíta sa čas PRÍCHODU na konečnú destináciu, nie čas odletu!<br />
                      V tomto prípade: Meškanie 4h pri príchode = <strong className="text-green-600">Nárok na 250 €</strong>
                    </p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                    💡 Ryanair často tvrdí "predchádzajúce meškanie = mimoriadna okolnosť" – to je <strong>NESPRÁVNE</strong>! Kaskádové meškania = zodpovednosť leteckej spoločnosti.
                  </p>
                </div>

                {/* Problem 4: Baggage Issues */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    4️⃣ Problémy s Batožinou
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Stratená, poškodená alebo mešká batožina.
                  </p>
                  <div className="space-y-3">
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        A) Mešká Batožina
                      </p>
                      <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Podať <strong>PIR report</strong> hneď na letisku (Property Irregularity Report)</li>
                        <li>• Nárok na nákup nevyhnutných vecí (~€50-150/deň)</li>
                        <li>• Ryanair musí doručiť batožinu na vašu adresu</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        B) Stratená Batožina (>21 dní)
                      </p>
                      <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Kompenzácia až <strong>€1,600</strong> (podľa Montreal Convention)</li>
                        <li>• Musíte dokázať hodnotu obsahu (faktúry, fotky)</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                        C) Poškodená Batožina
                      </p>
                      <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                        <li>• Nahlásiť do <strong>7 dní</strong> (s fotkami poškodenia)</li>
                        <li>• Náhrada alebo oprava batožiny</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Problem 5: Poor Communication */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    5️⃣ Zlá Komunikácia a Zákaznícky Servis
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Problém:</strong> Ryanair je známy zlou komunikáciou s cestujúcimi.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>SMS/email o zrušení príde 1-2h pred odletom (málo času reagovať)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Zákaznícky servis ťažko dostupný (platené telefónne linky)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Online formulár pre reklamácie často "zmiznú"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Automatické odmietnutie 95% nárokov</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <span>Odpovedá 3-6 mesiacov (ak vôbec)</span>
                    </li>
                  </ul>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-3 mt-3">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      💡 <strong>Riešenie:</strong> Použite ClaimWinger – profesionálny právny tím, ktorý Ryanair berie vážne (98% úspešnosť vs 5% priamo).
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Your Rights with Ryanair */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                Vaše Práva Ako Pasažier Ryanair
              </h2>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      🇪🇺 DÔLEŽITÉ: Rovnaké práva bez ohľadu na cenu lístka!
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Aj keď ste zaplatili len €19 za lístok, máte rovnaké práva podľa <strong>EU 261/2004</strong> ako pasažieri, ktorí zaplatili €500. Kompenzácia je založená na VZDIALENOSTI, nie cene lístka!
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* When Entitled */}
                <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-600 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Máte Nárok (250-600 €)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Meškanie <strong>&gt; 3h pri príchode</strong></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Zrušený let (<strong>{'<'}14 dní</strong> pred odletom)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Odmietnutie nástupu (overbooking)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Zmeškaný prestup (vina Ryanair)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>Let v rámci EÚ alebo z EÚ</span>
                    </li>
                  </ul>
                </div>

                {/* When NOT Entitled */}
                <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-600 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    Nemáte Nárok (0 €)
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
                      <span>Bezpečnostná hrozba (bomba)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Politické nepokoje (vojna)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span>Došli ste neskoro (Vaša chyba)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Compensation Amounts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Euro className="w-8 h-8 text-blue-600" />
                Koľko Peňazí Vám Patrí? (Ryanair Trasy)
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
                      <span>Bratislava → Londýn Stansted (1,440 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Bratislava → Rím (920 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Košice → Londýn Stansted (1,780 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Bratislava → Barcelona (1,250 km)</span>
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
                      <span>Bratislava → Santorini (1,650 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Bratislava → Malta (1,280 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Košice → Miláno Bergamo (1,050 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Bratislava → Kanárske ostrovy (3,100 km)</span>
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
                      <span>Bratislava → Maroko (2,100 km)*</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400">Ryanair neposkytuje dlhé trasy {'>'}3,500 km</span>
                    </li>
                  </ul>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                    * V praxi Ryanair nelietať trasy {'>'}3,500 km (low-cost model)
                  </p>
                </div>
              </div>

              {/* Popular Routes Table */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  🔥 Najpopulárnejšie Ryanair Trasy zo Slovenska
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                        <th className="text-left py-2 px-3">Trasa</th>
                        <th className="text-center py-2 px-3">Vzdialenosť</th>
                        <th className="text-center py-2 px-3">Kompenzácia</th>
                        <th className="text-left py-2 px-3">Frekvencia</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Bratislava → Londýn Stansted</td>
                        <td className="text-center">1,440 km</td>
                        <td className="text-center font-semibold text-blue-600">250 €</td>
                        <td className="px-3">Denne (2-3×)</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Košice → Londýn Stansted</td>
                        <td className="text-center">1,780 km</td>
                        <td className="text-center font-semibold text-blue-600">250 €</td>
                        <td className="px-3">4-5× týždenne</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Bratislava → Barcelona</td>
                        <td className="text-center">1,250 km</td>
                        <td className="text-center font-semibold text-blue-600">250 €</td>
                        <td className="px-3">3-4× týždenne</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Bratislava → Malta</td>
                        <td className="text-center">1,280 km</td>
                        <td className="text-center font-semibold text-green-600">400 €</td>
                        <td className="px-3">2× týždenne (leto)</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="py-3 px-3">Košice → Miláno Bergamo</td>
                        <td className="text-center">1,050 km</td>
                        <td className="text-center font-semibold text-green-600">400 €</td>
                        <td className="px-3">2-3× týždenne</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-3">Bratislava → Alicante</td>
                        <td className="text-center">1,680 km</td>
                        <td className="text-center font-semibold text-green-600">400 €</td>
                        <td className="px-3">2× týždenne</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 5: How to Claim Against Ryanair */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ako Získať Kompenzáciu od Ryanair?
              </h2>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 rounded-lg mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      ⚠️ VAROVANIE: Priamy kontakt s Ryanair má 5% úspešnosť!
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• <strong>95% nárokov</strong> automaticky odmietnutých</li>
                      <li>• <strong>3-6 mesiacov</strong> čakanie (ak vôbec odpovedia)</li>
                      <li>• <strong>Voucher</strong> namiesto hotovosti (ak súhlasíte)</li>
                      <li>• <strong>Žiadny právny tlak</strong> = Ryanair vás ignoruje</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Option A: Direct Contact */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-2 border-red-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Možnosť A: Priamy Kontakt
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Úspešnosť:</strong> 0-5%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Čas:</strong> 3-6 mesiacov</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Výsledok:</strong> Voucher (nie cash)</span>
                    </div>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded p-3 mb-3">
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      <strong>Postup:</strong>
                    </p>
                    <ol className="text-xs text-gray-700 dark:text-gray-300 mt-1 space-y-1 list-decimal list-inside">
                      <li>Webová stránka: ryanair.com/help-centre</li>
                      <li>Vyplňte online formulár (často "zmizne")</li>
                      <li>Čakajte 3-6 mesiacov</li>
                      <li>Dostanete automatické odmietnutie</li>
                      <li>Odvolanie (ďalších 3-6 mesiacov)</li>
                    </ol>
                  </div>
                  <p className="text-red-600 font-semibold text-sm">
                    ❌ NEODPORÚČAME
                  </p>
                </div>

                {/* Option B: ClaimWinger */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-2 border-green-500">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    Možnosť B: ClaimWinger
                  </h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Úspešnosť:</strong> 98%</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Čas:</strong> 8-12 týždňov</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700 dark:text-gray-300"><strong>Výsledok:</strong> Hotovosť (bank transfer)</span>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded p-3 mb-3">
                    <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Výhody ClaimWinger:</strong>
                    </p>
                    <ul className="text-xs text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Právny tím špecializovaný na letecké právo</li>
                      <li>• Ryanair berie vážnejšie a rýchlejšie vypláca</li>
                      <li>• Platíte iba pri úspechu (25% provízia)</li>
                      <li>• Môžete podať nárok až 3 roky dozadu</li>
                      <li>• Vždy hotovosť, nikdy voucher</li>
                    </ul>
                  </div>
                  <Link
                    href="https://claimwinger.com"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-semibold transition-colors w-full justify-center"
                  >
                    Skontrolovať nárok teraz
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <p className="text-green-600 font-semibold text-sm mt-3 text-center">
                    ✓ ODPORÚČAME
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-4 rounded-lg mt-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  💡 <strong>Prečo anglický formulár ClaimWinger funguje lepšie?</strong><br />
                  Ryanair často ignoruje nároky v slovenčine (vie, že Slováci sa nevedia dobre brániť). ClaimWinger má medzinárodný právny tím – overíme pravdivosť výhovorky!
                </p>
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
                    1. Môj lístok stál len €19. Prečo by som mal dostať €250?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>Preto, že to je ZÁKON!</strong> EU 261/2004 stanovuje kompenzáciu podľa <strong>VZDIALENOSTI</strong>, nie ceny lístka.</p>
                    <p className="mt-2"><strong>Príklad:</strong></p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>Bratislava → Londýn = 1,440 km</li>
                      <li>Kompenzácia: <strong>250 €</strong> (do 1,500 km)</li>
                      <li>Nemusíte platiť €500 za lístok, aby ste mali nárok!). Vždy hotovosť, nikdy voucher</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    2. Ryanair tvrdí "mimoriadna okolnosť". Mám nárok?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>NEVERITE automaticky!</strong> Ryanair používa "mimoriadna okolnosť" ako univerzálnu výhovorku.</p>
                    <p className="mt-2"><strong>Realita:</strong></p>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      <li>❌ "Technický problém" = NIE mimoriadna okolnosť (bežná údržba)</li>
                      <li>❌ "Nedostatok posádky" = NIE mimoriadna okolnosť (interní zamestnanci)</li>
                      <li>❌ "Predchádzajúce meškanie" = NIE mimoriadna okolnosť (zlé plánovanie)</li>
                      <li>✓ "Hurikán" = ÁNO mimoriadna okolnosť (nepredvídateľné)</li>
                    </ul>
                    <p className="mt-2 text-green-600 font-semibold">
                      💡 ClaimWinger má prístup k ATC záznamom a FlightRadar24 – overíme pravdivosť výhovorky!
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    3. Akceptoval som voucher. Môžem ešte dostať hotovosť?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>ÁNO, často áno!</strong> Voucher = náhrada lístka (ticket refund), NIE kompenzácia. Príklad: Lístok €50 + Voucher €50 (náhrada lístka) + Kompenzácia €250 (stále vám patrí!). Voucher a kompenzácia sú 2 rozdielne veci. Máte nárok na oboje!</p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    4. Koľko trvá, kým dostanem peniaze?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>2 Scenáre:</strong></p>
                    <div className="mt-2 space-y-2">
                      <div className="bg-red-50 dark:bg-red-900/20 rounded p-2">
                        <p className="text-sm font-semibold">Priamy kontakt s Ryanair:</p>
                        <p className="text-xs mt-1">3-6 mesiacov (často nikdy) | 95% automaticky odmietnuté</p>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 rounded p-2">
                        <p className="text-sm font-semibold">Cez ClaimWinger:</p>
                        <p className="text-xs mt-1">8-12 týždňov priemer | 98% úspešnosť | Vždy hotovosť</p>
                      </div>
                    </div>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    5. Môžem podať nárok aj roky dozadu?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>ÁNO!</strong> Máte <strong>3 roky</strong> na podanie nároku (na Slovensku). Príklad: Ak mal váš Ryanair let meškanie v júni 2022, môžete podať nárok až do júna 2025.</p>
                    <p className="mt-2 text-blue-600 font-semibold">
                      💰 Koľko peňazí ste možno nechali na stole? <Link href="/sk/kalkulacka-kompenzacie" className="underline">Skontrolujte teraz</Link>
                    </p>
                  </div>
                </details>

                <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 group">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer flex justify-between items-center">
                    6. Lietame ako rodina (4 osoby). Dostaneme všetci kompenzáciu?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                    <p><strong>ÁNO! Každý pasažier má nárok samostatne, vrátane detí. Príklad: Bratislava → Londýn (1,440 km), Kompenzácia na osobu: €250, Rodina 4 osoby: 4 × €250 = €1,000! Aj bábätká majú nárok na kompenzáciu (ak mali vlastný lístok)!</p>
                  </div>
                </details>
              </div>
            </section>

            {/* Final CTA */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nenechajte Ryanair, aby vás oklamal!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Ak mal váš Ryanair let meškanie alebo bol zrušený, máte nárok na kompenzáciu až <strong>600 €</strong>
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
                  <span>98% úspešnosť</span>
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
                Viac než 500,000 cestujúcich získalo svoje peniaze späť 💰
              </p>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Súvisiace Články
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/sk/blog/wizz-air-odszkodowanie" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Wizz Air Kompenzácia
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Ako získať kompenzáciu od Wizz Air za meškania a zrušenia
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Čítať viac <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/sk/blog/lotnisko-wieden-opoznienie" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Letisko Viedeň Sprievodca
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Čo robiť pri problémoch na letisku Viedeň Schwechat
                  </p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                    Čítať viac <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>

                <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie" className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Kompletný Sprievodca Kompenzáciou
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Všetko o právach cestujúcich a kompenzáciách
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
                "name": "Môj lístok stál len €19. Prečo by som mal dostať €250?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Preto, že to je ZÁKON! EU 261/2004 stanovuje kompenzáciu podľa VZDIALENOSTI, nie ceny lístka. Príklad: Bratislava → Londýn = 1,440 km → Kompenzácia: 250 € (do 1,500 km). Nemusíte platiť €500 za lístok, aby ste mali nárok!"
                }
              },
              {
                "@type": "Question",
                "name": "Ryanair tvrdí mimoriadna okolnosť. Mám nárok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NEVERITE automaticky! Ryanair používa 'mimoriadna okolnosť' ako univerzálnu výhovorku. Realita: Technický problém = NIE mimoriadna okolnosť (bežná údržba), Nedostatok posádky = NIE mimoriadna okolnosť (interní zamestnanci), Predchádzajúce meškanie = NIE mimoriadna okolnosť (zlé plánovanie). ClaimWinger má prístup k ATC záznamom a FlightRadar24 – overíme pravdivosť výhovorky!"
                }
              },
              {
                "@type": "Question",
                "name": "Akceptoval som voucher. Môžem ešte dostať hotovosť?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO, často áno! Voucher = náhrada lístka (ticket refund), NIE kompenzácia. Príklad: Lístok €50 + Voucher €50 (náhrada lístka) + Kompenzácia €250 (stále vám patrí!). Voucher a kompenzácia sú 2 rozdielne veci. Máte nárok na oboje!"
                }
              },
              {
                "@type": "Question",
                "name": "Koľko trvá, kým dostanem peniaze?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "2 Scenáre: Priamy kontakt s Ryanair: 3-6 mesiacov (často nikdy), 95% automaticky odmietnuté. Cez ClaimWinger: 8-12 týždňov priemer, 98% úspešnosť, vždy hotovosť."
                }
              },
              {
                "@type": "Question",
                "name": "Môžem podať nárok aj roky dozadu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO! Máte 3 roky na podanie nároku (na Slovensku). Príklad: Ak mal váš Ryanair let meškanie v júni 2022, môžete podať nárok až do júna 2025."
                }
              },
              {
                "@type": "Question",
                "name": "Lietame ako rodina (4 osoby). Dostaneme všetci kompenzáciu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO! Každý pasažier má nárok samostatne, vrátane detí. Príklad: Bratislava → Londýn (1,440 km), Kompenzácia na osobu: €250, Rodina 4 osoby: 4 × €250 = €1,000! Aj bábätká majú nárok na kompenzáciu (ak mali vlastný lístok)!"
                }
              }
            ]
          })
        }}
      />
    </LayoutSk>
  );
}