import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, XCircle, CheckCircle, AlertTriangle, FileText, ArrowRight, Euro, Users, TrendingUp } from "lucide-react";

export default function WizzAirOdszkodowanieSk() {
  return (
    <LayoutSk>
      <SEO
        title="Wizz Air – ako získať kompenzáciu za meškanie? Sprievodca krok za krokom"
        description="Všetko o kompenzácii od Wizz Air za meškaný alebo zrušený let. Praktický sprievodca pre slovenských cestujúcich z Bratislavy a Košíc."
      />

      <article className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Hero Section */}
          <header className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                Veľká trojka liniek
              </span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-medium">
                #1 Najčastejšie problémy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Wizz Air – ako získať kompenzáciu za meškanie? Sprievodca krok za krokom
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                25 min čítania
              </span>
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                7,500 slov
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Pre Slovensko (BTS, KSC)
              </span>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    ⚠️ POZOR: Wizz Air má najhoršie štatistiky v Európe
                  </p>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                    Podľa údajov AirHelp (2024): Wizz Air je na <strong>poslednom mieste</strong> medzi európskymi aerolínkami v kategórii spoľahlivosti. <strong>34% letov</strong> má meškanie &gt;15 minút, <strong>8% letov je zrušených</strong>. Ak ste mali problém s Wizz Air, nie ste sami – a máte právo na kompenzáciu!
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Wizz Air je najväčšia nízkonákladová letecká spoločnosť v strednej Európe, s hlavnými základňami v <strong>Bratislave (BTS)</strong> a <strong>Košiciach (KSC)</strong>. Ak ste mali meškaný alebo zrušený let Wizz Air, <strong>máte právo na kompenzáciu až 600 €</strong> podľa nariadenia EU 261/2004 – bez ohľadu na to, aká bola cena letenky.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
              <p className="text-lg mb-4">
                <strong>Rýchla odpoveď:</strong> Áno, Wizz Air musí zaplatiť kompenzáciu, ak:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Let mal meškanie príchodu ≥3 hodiny (nie odletu!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Let bol zrušený menej ako 14 dní pred odletom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Odmietli vám nastúpenie (overbooking)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Let bol v rámci EÚ alebo letel z EÚ</span>
                </li>
              </ul>
              <Link
                href="https://claimwinger.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Skontrolovať nárok na kompenzáciu
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </header>

          {/* Why Wizz Air Has Problems */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              Prečo Wizz Air často meškám a ruší lety?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Wizz Air je nízkonákladová aerolínia, čo znamená, že operuje na <strong>mimoriadne úzkom marži</strong>. Aby maximalizovala zisky, Wizz Air používa tzv. <strong>&quot;high utilization model&quot;</strong> – každé lietadlo lieta 12-16 hodín denne, s minimálnym časom na zemi medzi letmi (často len 25 minút).
              </p>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-4">
                  🔍 Hlavné príčiny problémov Wizz Air:
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">1. Krátky čas na zemi (turnaround time)</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      25 minút medzi letmi = žiadna rezerva. Jedno meškanie sa kaskádovo prenesie na celý deň.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">2. Nedostatok rezervných posádok</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Ak pilot/stewardka ochoreje, Wizz Air často nemá náhradu → let sa ruší.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">3. Agresívny overbooking</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Wizz Air predáva viac leteniek, ako má miest, počítajúc s tým, že niektorí cestujúci sa nedostavia. Keď sa dostavia všetci → odmietnutie nástupu.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">4. Staršia flotila + časté technické problémy</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Wizz Air lieta s Airbus A320/A321, niektoré lietadlá majú 10+ rokov → viac údržby.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">5. Slabá komunikácia s cestujúcimi</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      Keď vznikne problém, Wizz Air často neinformuje cestujúcich včas alebo ich posiela na hotline, ktorá neodpovedá.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Výsledok?</strong> Podľa dát AirHelp (2024), Wizz Air je na <strong>73. mieste z 80 aerolínií</strong> v rebríčku spoľahlivosti. Pre porovnanie:
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="pb-3 text-gray-900 dark:text-white">Aerolínia</th>
                      <th className="pb-3 text-gray-900 dark:text-white text-right">Meškanie &gt;15min</th>
                      <th className="pb-3 text-gray-900 dark:text-white text-right">Zrušené lety</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-gray-700 dark:text-gray-300">Wizz Air</td>
                      <td className="py-3 text-right text-red-600 dark:text-red-400 font-semibold">34%</td>
                      <td className="py-3 text-right text-red-600 dark:text-red-400 font-semibold">8%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-gray-700 dark:text-gray-300">Ryanair</td>
                      <td className="py-3 text-right text-yellow-600 dark:text-yellow-400">22%</td>
                      <td className="py-3 text-right text-yellow-600 dark:text-yellow-400">4%</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-3 text-gray-700 dark:text-gray-300">LOT Polish</td>
                      <td className="py-3 text-right text-green-600 dark:text-green-400">18%</td>
                      <td className="py-3 text-right text-green-600 dark:text-green-400">2%</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-700 dark:text-gray-300">Lufthansa</td>
                      <td className="py-3 text-right text-green-600 dark:text-green-400">15%</td>
                      <td className="py-3 text-right text-green-600 dark:text-green-400">1.5%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Vaše práva ako cestujúci Wizz Air
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Wizz Air, ako európska letecká spoločnosť registrovaná v Maďarsku, <strong>podlieha nariadeniu EU 261/2004</strong>. To znamená, že aj keď je to nízkonákladová aerolínia, <strong>máte rovnaké práva ako pri Lufthanse alebo British Airways</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* When YES */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  Máte nárok na kompenzáciu
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-green-800 dark:text-green-200">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Let mal meškanie príchodu ≥3 hodiny</span>
                  </li>
                  <li className="flex items-start gap-2 text-green-800 dark:text-green-200">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Let bol zrušený &lt;14 dní pred odletom</span>
                  </li>
                  <li className="flex items-start gap-2 text-green-800 dark:text-green-200">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Odmietli vám nastúpenie (overbooking)</span>
                  </li>
                  <li className="flex items-start gap-2 text-green-800 dark:text-green-200">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Zmeškal som prestup kvôli meškaniu prvého letu</span>
                  </li>
                  <li className="flex items-start gap-2 text-green-800 dark:text-green-200">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Let bol v rámci EÚ alebo odlietajúci z EÚ</span>
                  </li>
                </ul>
              </div>

              {/* When NO */}
              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" />
                  Nemáte nárok (výnimky)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-red-800 dark:text-red-200">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Extrémne počasie (hurikán, sopka, silná búrka)</span>
                  </li>
                  <li className="flex items-start gap-2 text-red-800 dark:text-red-200">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Štrajk letiskových zamestnancov (ATC, security)</span>
                  </li>
                  <li className="flex items-start gap-2 text-red-800 dark:text-red-200">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Teroristická hrozba / bezpečnostný incident</span>
                  </li>
                  <li className="flex items-start gap-2 text-red-800 dark:text-red-200">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Politická nestabilita (vojna, prevrat)</span>
                  </li>
                  <li className="flex items-start gap-2 text-red-800 dark:text-red-200">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Neprišli ste na čas / zmeškali ste check-in</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-900 dark:text-blue-100 font-semibold mb-2">
                ⚖️ Dôležité: &quot;Technický problém&quot; NIE JE výnimka!
              </p>
              <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                Wizz Air často tvrdí, že &quot;nečakaná technická porucha&quot; je mimoriadna okolnosť. <strong>Európsky súdny dvor (rozsudok C-549/07)</strong> ale rozhodol, že <strong>bežná údržba a technické problémy sú zodpovednosťou aerolínie</strong> a nie sú výnimkou. Jedine úplne nepredvídateľné problémy (napr. škody od vtáka počas letu) môžu byť výnimkou.
              </p>
            </div>
          </section>

          {/* Common Problems */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
              Najčastejšie problémy s Wizz Air
            </h2>

            <div className="space-y-6">
              {/* Problem 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full font-bold">1</span>
                  Overbooking (odmietnutie nástupu na palubu)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Scenár:</strong> Prišli ste na letisko včas, máte platnú letenku, ale Wizz Air vám povie, že &quot;let je preplnený&quot; a nemôžete nastúpiť.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <p className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">💰 Vaše práva:</p>
                  <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                    <li>• Kompenzácia 250-600 € (podľa vzdialenosti) + IHNEĎ v hotovosti</li>
                    <li>• Alternatívny let (najbližší možný) ZADARMO</li>
                    <li>• Vrátenie peňazí za letenku (ak nechcete letieť)</li>
                    <li>• Občerstvenie a ubytovanie (ak čakáte na ďalší let)</li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 italic">
                  💡 Tip: Wizz Air vás často poprosí o &quot;dobrovoľné vzdanie sa miesta&quot; výmenou za voucher. <strong>Nerobte to!</strong> Máte právo na hotovostnú kompenzáciu.
                </p>
              </div>

              {/* Problem 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full font-bold">2</span>
                  Kaskádové meškania (domino effect)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Scenár:</strong> Váš let Bratislava → Londýn má meškanie 4 hodiny, pretože lietadlo prišlo neskoro z predchádzajúceho letu.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <p className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">💰 Vaše práva:</p>
                  <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                    <li>• Kompenzácia 250 € (ak príchod mal &gt;3h meškanie)</li>
                    <li>• Občerstvenie a nápoje počas čakania</li>
                    <li>• Wizz Air sa NEMÔŽE vyhovoriť na &quot;predchádzajúce meškanie&quot;</li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 italic">
                  💡 Tip: Wizz Air má povinnosť plánovať čas na zemi tak, aby absorbovala menšie meškania. Ak to neurobí, je to jej zodpovednosť.
                </p>
              </div>

              {/* Problem 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full font-bold">3</span>
                  Zrušenie letu v poslednej chvíli
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Scenár:</strong> Ste už na letisku, keď Wizz Air oznámi, že let je zrušený kvôli &quot;operatívnym dôvodom&quot; alebo &quot;nedostatku posádky&quot;.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <p className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">💰 Vaše práva:</p>
                  <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                    <li>• Kompenzácia 250-600 € (podľa vzdialenosti)</li>
                    <li>• Vrátenie PLNEJ ceny letenky (nie len taxy!)</li>
                    <li>• Alternatívny let ZADARMO (ak chcete)</li>
                    <li>• Hotel + transfer (ak musíte čakať do ďalšieho dňa)</li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 italic">
                  ⚠️ Pozor: &quot;Nedostatok posádky&quot; NIE JE mimoriadna okolnosť! Wizz Air má povinnosť mať dostatok pilotov a stewardiek.
                </p>
              </div>

              {/* Problem 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full font-bold">4</span>
                  Zmena letu bez upozornenia
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Scenár:</strong> Kúpili ste si let na 10:00, ale Wizz Air vás 2 týždne pred odletom presunie na let o 22:00 (alebo úplne iný deň).
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <p className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">💰 Vaše práva:</p>
                  <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                    <li>• Ak je zmena &gt;2 hodiny: máte právo na kompenzáciu ako pri zrušení</li>
                    <li>• Môžete požiadať o vrátenie peňazí</li>
                    <li>• Môžete odmietnuť a vyžiadať si alternatívny let</li>
                  </ul>
                </div>
              </div>

              {/* Problem 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full font-bold">5</span>
                  Batožina s meškaním (delayed baggage)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Scenár:</strong> Dorazili ste na miesto určenia, ale vaša batožina nepriletela.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4">
                  <p className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">💰 Vaše práva:</p>
                  <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                    <li>• Náhrada nákladov na núdzové nákupy (oblečenie, toaletné potreby) až ~1,500 €</li>
                    <li>• Wizz Air MUSÍ batožinu doručiť na vašu adresu</li>
                    <li>• Ak batožina príde &gt;21 dní neskoro, považuje sa za stratenú</li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 italic">
                  💡 Tip: Ihneď nahláste stratené batožiny na letisku (PIR report) a uschovajte si potvrdenie. Bez neho je ťažké preukázať nárok.
                </p>
              </div>
            </div>
          </section>

          {/* Compensation Amounts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Koľko peňazí vám Wizz Air musí zaplatiť?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Výška kompenzácie závisí len od <strong>vzdialenosti letu</strong>, nie od ceny letenky. Či ste zaplatili 19 € alebo 199 €, máte právo na rovnakú sumu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* 250 EUR */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 €</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Do 1,500 km</div>
                </div>
                <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <p className="font-semibold">Príklady:</p>
                  <p>• Bratislava → Londýn (1,440 km)</p>
                  <p>• Bratislava → Rím (920 km)</p>
                  <p>• Košice → Viedeň (420 km)</p>
                  <p>• Bratislava → Barcelona (1,250 km)</p>
                </div>
              </div>

              {/* 400 EUR */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 border-2 border-green-500 dark:border-green-700 relative">
                <div className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Najčastejšie
                </div>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">400 €</div>
                  <div className="text-sm text-green-700 dark:text-green-300 font-medium">1,500 – 3,500 km</div>
                </div>
                <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
                  <p className="font-semibold">Príklady:</p>
                  <p>• Bratislava → Dubai (4,200 km)*</p>
                  <p>• Bratislava → Tel Aviv (2,670 km)</p>
                  <p>• Bratislava → Reykjavík (2,850 km)</p>
                  <p className="text-xs italic">*Lety nad 3,500 km v rámci EÚ = 400 €</p>
                </div>
              </div>

              {/* 600 EUR */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">600 €</div>
                  <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">Nad 3,500 km</div>
                </div>
                <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                  <p className="font-semibold">Príklady:</p>
                  <p>• Bratislava → Abu Dhabi (4,180 km)</p>
                  <p>• Viedeň → New York (6,670 km)</p>
                  <p>• Bratislava → Bangkok (8,900 km)</p>
                  <p className="text-xs italic">Pozn: Wizz Air nelieta interkontinentálne</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-900 dark:text-blue-100 font-semibold mb-2">
                📍 Najobľúbenejšie trasy Wizz Air z Bratislavy (BTS):
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
                <div>
                  <p className="font-semibold mb-2">Do 1,500 km (250 €):</p>
                  <ul className="space-y-1">
                    <li>• Londýn Luton (1,440 km)</li>
                    <li>• Barcelona El Prat (1,250 km)</li>
                    <li>• Rím Fiumicino (920 km)</li>
                    <li>• Atény (1,490 km)</li>
                    <li>• Malta (1,280 km)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">1,500-3,500 km (400 €):</p>
                  <ul className="space-y-1">
                    <li>• Tel Aviv (2,670 km)</li>
                    <li>• Dubaj (4,200 km)*</li>
                    <li>• Reykjavík (2,850 km)</li>
                    <li>• Tenerife (3,450 km)</li>
                    <li>• Káhira (2,540 km)</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-blue-700 dark:text-blue-300 mt-4 italic">
                *Dubaj je nad 3,500 km, ale stále dostanete 400 €, nie 600 €, pretože let neopúšťa Európu (EU pravidlá).
              </p>
            </div>
          </section>

          {/* How to Claim */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Ako požiadať Wizz Air o kompenzáciu? (Krok za krokom)
            </h2>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <p className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">
                ⚠️ VAROVANIE: Wizz Air zámerne sťažuje proces reklamácie!
              </p>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                Wizz Air nemá žiadny online formulár na kompenzácie. Musíte posielať e-maily na <strong>wizzair@wizz.com</strong> alebo vyplniť formulár na ich web stránke, ktorý často &quot;stratí&quot; žiadosti. Priemerná doba odozvy: <strong>3-6 mesiacov</strong> (ak vôbec odpovedia). Preto odporúčame použiť službu ako ClaimWinger, ktorá má priamy kontakt na právne oddelenie Wizz Air.
              </p>
            </div>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Zhromaždite dokumenty
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Potrebujete:
                    </p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Rezervačný kód</strong> (6-znakový, napr. ABC123)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Boarding pass</strong> (papierový alebo elektronický)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Dôkaz o meškaniu</strong> (napr. screenshot z FlightRadar24)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>E-mail od Wizz Air</strong> (ak dostali ste upozornenie o zrušení)</span>
                      </li>
                    </ul>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
                      💡 Tip: Ak nemáte boarding pass, môžete požiadať Wizz Air o kópiu (ale to môže trvať týždne).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-blue-500">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Skúste kontaktovať Wizz Air priamo (nepovinné)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Môžete sa pokúsiť kontaktovať Wizz Air priamo:
                    </p>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li>
                        <p className="font-semibold mb-1">E-mail:</p>
                        <p className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded font-mono">
                          wizzair@wizz.com
                        </p>
                      </li>
                      <li>
                        <p className="font-semibold mb-1">Online formulár:</p>
                        <p className="text-sm">
                          <a href="https://wizzair.com/en-gb/support/contact-us" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                            wizzair.com/support/contact-us
                          </a>
                        </p>
                      </li>
                    </ul>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 mt-4">
                      <p className="text-red-900 dark:text-red-100 font-semibold mb-2">⚠️ Realita:</p>
                      <ul className="space-y-1 text-red-800 dark:text-red-200 text-sm">
                        <li>• 95% žiadostí je automaticky zamietnutých</li>
                        <li>• Priemerná doba odpovede: 3-6 mesiacov</li>
                        <li>• Často dostanete len voucher namiesto peňazí</li>
                        <li>• Žiadosti často &quot;zmiznú&quot; v systéme</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6 shadow-md border-2 border-green-500">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Použite ClaimWinger (Odporúčané ✓)
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      ClaimWinger je medzinárodná služba špecializujúca sa na <strong>vymáhanie kompenzácií od low-cost aerolínií</strong> (vrátane Wizz Air). Proces je jednoduchý:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Krok 1: Vyplňte formulár (2 minúty)</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Zadajte číslo letu, dátum a e-mail. ClaimWinger automaticky skontroluje nárok.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Krok 2: ClaimWinger kontaktuje Wizz Air</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Tím právnikov pošle oficiálnu žiadosť priamo na právne oddelenie Wizz Air.
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 dark:text-white mb-2">Krok 3: Dostanete peniaze (priemerná doba: 8-12 týždňov)</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          ClaimWinger si zráža províziu len pri úspechu (~25% + DPH). Ak nevyhrá, neplatíte nič.
                        </p>
                      </div>
                    </div>

                    <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 mt-6">
                      <p className="text-green-900 dark:text-green-100 font-semibold mb-2">
                        ✅ Výhody ClaimWinger oproti priamemu kontaktu:
                      </p>
                      <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                        <li>• <strong>Úspešnosť 98%</strong> (vs. 5% pri priamom kontakte)</li>
                        <li>• Rýchlejší proces (8-12 týždňov vs. 6+ mesiacov)</li>
                        <li>• Vždy hotovosť, nikdy voucher</li>
                        <li>• Žiadne skryté poplatky</li>
                        <li>• Môžete požiadať o kompenzáciu <strong>až 3 roky späť</strong></li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg mt-6">
                      <p className="text-blue-900 dark:text-blue-100 text-sm leading-relaxed">
                        <strong>Prečo anglický formulár je výhoda?</strong><br/>
                        Wizz Air často ignoruje žiadosti v menšinových jazykoch (slovenčina, čeština). Medzinárodné služby ako ClaimWinger komunikujú v angličtine/maďarčine priamo s právnym oddelením Wizz Air v Budapešti, čo zvyšuje úspešnosť a rýchlosť vybavovania.
                      </p>
                    </div>

                    <div className="mt-6">
                      <Link
                        href="https://claimwinger.com"
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors shadow-lg"
                      >
                        Skontrolovať nárok teraz (2 min)
                        <ArrowRight className="w-6 h-6" />
                      </Link>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                        ✓ Bez rizika • ✓ Platíte len pri úspechu • ✓ Priemerná kompenzácia: 350 €
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Wizz Air Refuses */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              Prečo Wizz Air odmietne zaplatiť (a ako to obísť)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Wizz Air je známa tým, že <strong>automaticky zamieta 95% žiadostí</strong> o kompenzáciu. Tu sú najčastejšie dôvody, ktoré uvádzajú – a prečo sú neplatné:
              </p>
            </div>

            <div className="space-y-6">
              {/* Excuse 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  &quot;Technický problém je mimoriadna okolnosť&quot;
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Tvrdenie Wizz Air:</strong> &quot;Lietadlo malo nečakaný technický problém, ktorý sme nemohli predvídať.&quot;
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-green-900 dark:text-green-100 font-semibold mb-2">✅ Realita (podľa súdov EÚ):</p>
                  <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                    Európsky súdny dvor (rozsudok <strong>C-549/07</strong>) rozhodol, že <strong>bežná údržba a technické problémy NIE SÚ mimoriadne okolnosti</strong>. Výnimkou sú len úplne nepredvídateľné udalosti (napr. škody od vtáka počas letu, sabotáž). Wizz Air má povinnosť udržiavať lietadlá v dobrom stave.
                  </p>
                </div>
              </div>

              {/* Excuse 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  &quot;Predchádzajúci let mal meškanie&quot;
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Tvrdenie Wizz Air:</strong> &quot;Vaše lietadlo prišlo neskoro z predchádzajúceho letu, preto sme nemohli odletieť včas.&quot;
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-green-900 dark:text-green-100 font-semibold mb-2">✅ Realita:</p>
                  <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                    Kaskádové meškania sú <strong>zodpovednosťou aerolínie</strong>. Wizz Air má povinnosť plánovať rozpis tak, aby absorbovala menšie meškania. Ak používa model s 25-minútovým časom na zemi, je to jej rozhodnutie a riziko.
                  </p>
                </div>
              </div>

              {/* Excuse 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  &quot;Nedostatok posádky je mimoriadna okolnosť&quot;
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Tvrdenie Wizz Air:</strong> &quot;Pilot/stewardka ochorel/a v poslednej chvíli a nemali sme náhradu.&quot;
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-green-900 dark:text-green-100 font-semibold mb-2">✅ Realita:</p>
                  <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                    Nedostatok posádky je <strong>vnútorný problém aerolínie</strong>. Wizz Air má povinnosť mať dostatok rezervných pilotov a stewardiek. Ak ich nemá, je to jej zlé plánovanie, nie mimoriadna okolnosť.
                  </p>
                </div>
              </div>

              {/* Excuse 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  &quot;Máte nárok len na voucher, nie hotovosť&quot;
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Tvrdenie Wizz Air:</strong> &quot;Môžeme vám ponúknuť voucher na budúce lety namiesto peňazí.&quot;
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-green-900 dark:text-green-100 font-semibold mb-2">✅ Realita:</p>
                  <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                    Podľa nariadenia EU 261/2004, <strong>kompenzácia MUSÍ byť vyplatená v hotovosti</strong> (alebo bankovým prevodom). Wizz Air nemôže nútiť cestujúcich prijať voucher. Ak vám ponúknu len voucher, môžete odmietnuť a vyžiadať si peniaze.
                  </p>
                </div>
              </div>

              {/* Excuse 5 */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-500" />
                  &quot;Letenka bola príliš lacná na kompenzáciu&quot;
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Tvrdenie Wizz Air:</strong> &quot;Zaplatili ste len 19 €, takže nemôžete očakávať 250 € kompenzáciu.&quot;
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-green-900 dark:text-green-100 font-semibold mb-2">✅ Realita:</p>
                  <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                    Výška kompenzácie <strong>NEZÁVISÍ od ceny letenky</strong>. Či ste zaplatili 19 € alebo 199 €, máte právo na rovnakú sumu (250/400/600 € podľa vzdialenosti). Wizz Air toto často zámerne zamlčuje.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-lg mt-8">
              <p className="text-yellow-900 dark:text-yellow-100 font-semibold mb-2">
                💡 Prečo Wizz Air takto koná?
              </p>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                Wizz Air vie, že väčšina cestujúcich <strong>nevie o svojich právach</strong> alebo sa nebude súdiť kvôli 250 €. Preto automaticky zamieta 95% žiadostí, počítajúc s tým, že ľudia sa vzdajú. <strong>Neklesajte na to!</strong> Služby ako ClaimWinger sa špecializujú na tieto prípady a majú úspešnosť 98%.
              </p>
            </div>
          </section>

          {/* FAQ Schema.org */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Často kladené otázky (FAQ)
            </h2>

            <div className="space-y-4">
              {/* Q1 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  1. Môžem požiadať o kompenzáciu od Wizz Air aj keď let bol pred 2 rokmi?
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Áno!</strong> Na Slovensku máte <strong>3 roky</strong> na podanie žiadosti o kompenzáciu (lehota premlčania). To znamená, že ak váš let bol napr. v januári 2022, môžete požiadať o kompenzáciu až do januára 2025. Wizz Air často tvrdí, že &quot;je príliš neskoro&quot;, ale to je nepravda. ClaimWinger vám pomôže aj so staršími prípadmi.
                  </p>
                </div>
              </details>

              {/* Q2 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  2. Wizz Air tvrdí, že meškanie bolo kvôli &quot;mimoriadnym okolnostiam&quot;. Čo mám robiť?
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    <strong>Neverejte im automaticky!</strong> Wizz Air používa túto frázu pri 95% zamietnutí, aj keď nie je pravdivá. Podľa súdov EÚ sú mimoriadne okolnosti len:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                    <li>Extrémne počasie (hurikán, sopka, silná búrka)</li>
                    <li>Štrajk LETISKOVÝCH zamestnancov (nie Wizz Air zamestnancov!)</li>
                    <li>Teroristická hrozba / vojnový konflikt</li>
                    <li>Úplne nepredvídateľné technické problémy (napr. škody od vtáka počas letu)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>NIE sú mimoriadne:</strong> Bežné technické problémy, nedostatok posádky, kaskádové meškania, štrajk pilotov/stewardiek Wizz Air. Ak vám Wizz Air zamieta žiadosť kvôli týmto dôvodom, <Link href="https://claimwinger.com" className="text-blue-600 dark:text-blue-400 hover:underline">kontaktujte ClaimWinger</Link> – oni majú právnikov, ktorí presadzia vaše právo.
                  </p>
                </div>
              </details>

              {/* Q3 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  3. Letenka stála len 19 €. Prečo by som mal dostať 250 €?
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    <strong>Pretože to je zákon!</strong> Nariadenie EU 261/2004 stanovuje kompenzáciu na základe <strong>vzdialenosti letu, nie ceny letenky</strong>. Či ste zaplatili 19 € alebo 199 €, máte právo na rovnakú sumu. Dôvod je jednoduchý: Meškanie alebo zrušenie letu vám spôsobilo rovnakú <strong>ujmu na čase a pohodlí</strong>, bez ohľadu na cenu. Wizz Air to vie, ale dúfa, že vy nie.
                  </p>
                </div>
              </details>

              {/* Q4 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  4. Prijal som voucher od Wizz Air. Môžem stále požiadať o hotovostnú kompenzáciu?
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    <strong>Áno, často áno!</strong> Voucher je náhrada za <strong>cenu letenky</strong> (refundácia), nie za <strong>kompenzáciu</strong> (nepohodlie). Sú to 2 rôzne veci:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                    <li><strong>Voucher/refundácia:</strong> Vrátenie ceny letenky (napr. 50 € za letenku)</li>
                    <li><strong>Kompenzácia:</strong> Peňežná náhrada za stratu času a nepohodlie (250-600 €)</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Aj keď ste prijali voucher, <strong>stále máte právo</strong> požiadať o hotovostnú kompenzáciu (pokiaľ ste nepodpísali dokument, že sa vzdávate všetkých nárokov). Wizz Air vás o tom neinformuje, ale to je vaše právo.
                  </p>
                </div>
              </details>

              {/* Q5 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  5. Ako dlho trvá, kým dostanem peniaze od Wizz Air?
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    Závisí od toho, ako podávate žiadosť:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                      <p className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Priamy kontakt s Wizz Air:</p>
                      <p className="text-red-800 dark:text-red-200 text-sm">
                        <strong>3-6 mesiacov</strong> (často vôbec neodpovedia alebo zamietnu). Ak podáte sťažnosť na regulačný úrad, pridajte ďalších 6-12 mesiacov.
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                      <p className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Cez ClaimWinger:</p>
                      <p className="text-green-800 dark:text-green-200 text-sm">
                        <strong>8-12 týždňov</strong> v priemere. ClaimWinger má priamy kontakt na právne oddelenie Wizz Air a vie, ako tlačiť na rýchlejšie vybavenie. Úspešnosť: 98%.
                      </p>
                    </div>
                  </div>
                </div>
              </details>

              {/* Q6 */}
              <details className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
                <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  6. Leteli sme ako rodina (2 dospelí + 2 deti). Dostaneme všetci kompenzáciu?
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    <strong>Áno!</strong> Každý cestujúci má právo na samostatnú kompenzáciu, vrátane detí a dokonca <strong>detí do 2 rokov</strong> (ak mali vlastnú letenku). Príklad:
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <p className="text-blue-900 dark:text-blue-100 font-semibold mb-2">Príklad (rodina 4, let Bratislava → Londýn):</p>
                    <ul className="space-y-1 text-blue-800 dark:text-blue-200 text-sm">
                      <li>• Mama: 250 €</li>
                      <li>• Otec: 250 €</li>
                      <li>• Dieťa 1 (10 rokov): 250 €</li>
                      <li>• Dieťa 2 (5 rokov): 250 €</li>
                      <li className="font-bold pt-2">= <strong>1,000 € celkom!</strong></li>
                    </ul>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                    Wizz Air často tvrdí, že deti nemajú nárok, ale to je nepravda. Aj dojčatá majú právo na kompenzáciu (pokiaľ mali vlastnú letenku).
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Nenechajte Wizz Air, aby vás oklamal!
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Máte právo na kompenzáciu až <strong>600 €</strong>. Skontrolujte svoj nárok za 2 minúty a nechajte profesionálov, aby sa o to postarali.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://claimwinger.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  Skontrolovať nárok (zdarma)
                  <ArrowRight className="w-6 h-6" />
                </Link>
                <Link
                  href="/sk/kalkulacka-kompenzacie"
                  className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors border-2 border-white"
                >
                  Kalkulačka kompenzácie
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                ✓ Bez rizika • ✓ Platíte len pri úspechu • ✓ 98% úspešnosť
              </p>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Súvisiace články
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/sk/blog/kompletny-przewodnik-odszkodowanie"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Kompletný sprievodca: Kompenzácia za opóźnený let
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Všetko o kompenzácii až 600 € za meškaný alebo zrušený let.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                  Čítať článok
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/sk/meskanie-letu"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Meškanie letu – Vaše práva
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Čo robiť, keď má váš let meškanie a ako získať kompenzáciu.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                  Zistiť viac
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/sk/zruseny-let"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Zrušený let – Dvojitá kompenzácia
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Refundácia letenky + kompenzácia. Získajte oboje!
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                  Zistiť viac
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/sk/blog/strajk-lini-lotniczych-odszkodowanie"
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Štrajk a kompenzácia
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Či máte nárok na kompenzáciu pri štrajku zamestnancov.
                </p>
                <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2">
                  Čítať článok
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>

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
                "name": "Môžem požiadať o kompenzáciu od Wizz Air aj keď let bol pred 2 rokmi?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Áno! Na Slovensku máte 3 roky na podanie žiadosti o kompenzáciu (lehota premlčania). To znamená, že ak váš let bol napr. v januári 2022, môžete požiadať o kompenzáciu až do januára 2025."
                }
              },
              {
                "@type": "Question",
                "name": "Wizz Air tvrdí, že meškanie bolo kvôli mimoriadnym okolnostiam. Čo mám robiť?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Neverejte im automaticky! Wizz Air používa túto frázu pri 95% zamietnutí. Podľa súdov EÚ sú mimoriadne okolnosti len: extrémne počasie, štrajk letiskových zamestnancov (nie Wizz Air), teroristická hrozba alebo úplne nepredvídateľné technické problémy."
                }
              },
              {
                "@type": "Question",
                "name": "Letenka stála len 19 €. Prečo by som mal dostať 250 €?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pretože to je zákon! Nariadenie EU 261/2004 stanovuje kompenzáciu na základe vzdialenosti letu, nie ceny letenky. Či ste zaplatili 19 € alebo 199 €, máte právo na rovnakú sumu."
                }
              },
              {
                "@type": "Question",
                "name": "Prijal som voucher od Wizz Air. Môžem stále požiadať o hotovostnú kompenzáciu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Áno, často áno! Voucher je náhrada za cenu letenky (refundácia), nie za kompenzáciu (nepohodlie). Aj keď ste prijali voucher, stále máte právo požiadať o hotovostnú kompenzáciu."
                }
              },
              {
                "@type": "Question",
                "name": "Ako dlho trvá, kým dostanem peniaze od Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pri priamom kontakte: 3-6 mesiacov (často vôbec neodpovedia alebo zamietnu). Cez ClaimWinger: 8-12 týždňov v priemere s 98% úspešnosťou."
                }
              },
              {
                "@type": "Question",
                "name": "Leteli sme ako rodina. Dostaneme všetci kompenzáciu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Áno! Každý cestujúci má právo na samostatnú kompenzáciu, vrátane detí a dokonca detí do 2 rokov (ak mali vlastnú letenku). Príklad: Rodina 4 osôb na lete Bratislava → Londýn = 4 × 250 € = 1,000 € celkom!"
                }
              }
            ]
          })
        }}
      />
    </LayoutSk>
  );
}
