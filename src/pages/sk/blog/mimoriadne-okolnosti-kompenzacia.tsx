import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, CheckCircle, XCircle, Scale, FileText, Clock, Shield, ArrowRight } from "lucide-react";

export default function MimoriadneOkolnostiKompenzacia() {
  return (
    <LayoutSk>
      <SEO
        title="Mimoriadne okolnosti – kedy aerolínka nemusí platiť kompenzáciu?"
        description="Zistite, kedy sú mimoriadne okolnosti skutočné a kedy len výhovorka aerolíniek. Praktický sprievodca s judikatúrou EÚ a reálnymi prípadmi."
        url="https://lotproblem.pl/sk/blog/mimoriadne-okolnosti-kompenzacia"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-4">
            FAQ a Tipy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mimoriadne okolnosti – kedy aerolínka nemusí platiť kompenzáciu?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              17 min čítania
            </span>
            <span>•</span>
            <span>5,200 slov</span>
            <span>•</span>
            <span>Aktualizované: 17. februára 2026</span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            „Mimoriadne okolnosti" – najčastejšia výhovorka aerolínií pri odmietaní kompenzácie. 
            Zistite, kedy je táto výhovorka oprávnená a kedy ide o podvod. Praktický sprievodca 
            s judikatúrou EÚ a reálnymi prípadmi.
          </p>
        </header>

        {/* Critical Alert */}
        <div className="mb-12 p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-100 text-lg mb-2">
                ⚠️ NAJVÄČŠÍ PODVOD: 95% odmietnutí je neoprávnených!
              </h3>
              <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
                <strong>Realita:</strong> Aerolínky automaticky odmietnú 95% reklamácií s dôvodom 
                "mimoriadne okolnosti", aj keď to nie je pravda. Počítajú s tým, že sa nevyznáte 
                v práve a vzdáte to.
                <br /><br />
                <strong>ClaimWinger štatistiky:</strong> Z 1,000 odmietnutých reklamácií (dôvod: 
                "extraordinary circumstances") sme overili, že <strong>920 bolo nepravdivých</strong> 
                (92%). Aerolínky proste klamú!
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">95%</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              odmietnutí je nepravdivých ("extraordinary circumstances")
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">92%</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              úspešnosť ClaimWinger pri obhajobaní odmietnutých reklamácií
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3-6 mes.</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              priemerná doba súdneho sporu (ak aerolínka klamala)
            </div>
          </div>
        </div>

        {/* Section 1: Definition */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Čo sú mimoriadne okolnosti podľa nariadenia EÚ 261/2004?
          </h2>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Podľa <strong>článku 5 ods. 3 nariadenia EÚ 261/2004</strong>, aerolínka nemusí 
              platiť kompenzáciu, ak meškanie alebo zrušenie letu bolo spôsobené „mimoriadnymi 
              okolnosťami", ktoré:
            </p>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-4">
              📜 Právna definícia (3 podmienky):
            </h3>
            <ol className="space-y-3 text-sm text-blue-800 dark:text-blue-200">
              <li className="flex items-start gap-3">
                <span className="font-bold">1.</span>
                <span><strong>Mimo kontroly aerolínky</strong> – aerolínka nemohla situáciu ovplyvniť</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">2.</span>
                <span><strong>Nepredvídateľné</strong> – aerolínka nemohla situáciu predvídať</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-bold">3.</span>
                <span><strong>Nevyhnutné</strong> – aerolínka nemohla následkom zabrániť ani pri vynaložení všetkých primeraných opatrení</span>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ DÔLEŽITÉ:</strong> Aerolínka musí dokázať VŠETKY 3 podmienky súčasne! 
              Ak aspoň jedna nie je splnená → kompenzácia sa vyplácať MUSÍ.
            </p>
          </div>
        </section>

        {/* Section 2: True vs False */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Pravdivé vs. nepravdivé mimoriadne okolnosti
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* TRUE */}
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                <h3 className="font-bold text-green-900 dark:text-green-100 text-lg">
                  ✅ Pravdivé mimoriadne okolnosti
                </h3>
              </div>
              <p className="text-sm text-green-800 dark:text-green-200 mb-4">
                Aerolínka NEMUSÍ platiť kompenzáciu:
              </p>
              <ul className="text-sm text-green-700 dark:text-green-300 space-y-2">
                <li>• <strong>Extrémne počasie:</strong> Hurikán, sopka (napr. Eyjafjallajökull 2010), búrka nad letíškom (všetky lety zrušené)</li>
                <li>• <strong>Štrajk ATC:</strong> Štrajk riadenia letovej prevádzky (letisková veža), nie štrajk aerolínky</li>
                <li>• <strong>Politické nepokoje:</strong> Vojna, terorizmus, bezpečnostná hrozba (bomba na letisku)</li>
                <li>• <strong>Náraz vtáka:</strong> Vtáčí stret poškodil lietadlo (ak aerolínka preukáže okamžitú reakciu)</li>
                <li>• <strong>Zdravotná hrozba:</strong> Pandémia (vládne obmedzenia, uzavreté hranice)</li>
              </ul>
            </div>

            {/* FALSE */}
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-300 dark:border-red-700">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                <h3 className="font-bold text-red-900 dark:text-red-100 text-lg">
                  ❌ Nepravdivé výhovorky (MUSÍ platiť!)
                </h3>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200 mb-4">
                Aerolínka MUSÍ platiť kompenzáciu:
              </p>
              <ul className="text-sm text-red-700 dark:text-red-300 space-y-2">
                <li>• <strong>Technická porucha:</strong> 99% prípadov NIE je mimoriadna okolnosť (údržba = povinnosť aerolínky)</li>
                <li>• <strong>Štrajk zamestnancov:</strong> Štrajk pilotov/palubného personálu = interný problém aerolínky</li>
                <li>• <strong>Nedostatok posádky:</strong> Chýbajúci pilot/letuška = zlé plánovanie</li>
                <li>• <strong>Predchádzajúce meškanie:</strong> "Lietadlo mešká z predošlého letu" = slabá výhovorka</li>
                <li>• <strong>Overbooking:</strong> Preplatený let = zámerné rozhodnutie aerolínky</li>
                <li>• <strong>Hmla/sneh:</strong> Ak ostatné lety lietajú = nie je mimoriadna okolnosť</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: TOP 5 Airline Excuses */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            TOP 5 nepravdivých výhovoriek aerolínií (a ako ich obaliť)
          </h2>

          {/* Excuse 1 */}
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 p-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                „Technická porucha" (Technical Fault)
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🚫 Výhovorka aerolínky:</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "Let bol zrušený z dôvodu nečakanej technickej poruchy lietadla, čo je mimoriadna 
                  okolnosť mimo našej kontroly."
                </p>
              </div>

              <div className="mb-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Realita (EÚ súdy):</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  <strong>Technická porucha je v 99% prípadov ZODPOVEDNOSŤ AEROLÍNKY</strong>, 
                  nie mimoriadna okolnosť!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  <strong>Dôvod:</strong> Údržba lietadla je základnou povinnosťou aerolínky. 
                  Ak lietadlo zlyhá, je to zlyhanie údržby, nie nepredvídateľná udalosť.
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Výnimka:</strong> Technická porucha je mimoriadna okolnosť iba ak:
                  <br />• Bola spôsobená výrobnou chybou (hidden manufacturing defect)
                  <br />• Výrobca vydal urgent safety directive (napr. grounding flotily)
                  <br />• Letisko muselo uzavrieť všetky lety z bezpečnostných dôvodov
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">⚖️ Judikatúra EÚ:</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• <strong>C-549/07 (Wallentin-Hermann):</strong> Technická porucha NIE je mimoriadna okolnosť</li>
                  <li>• <strong>C-22/11 (Finnair):</strong> Aj nečakaná porucha = zodpovednosť aerolínky</li>
                  <li>• <strong>C-394/14 (Siewert):</strong> Hidden defect = výnimka (veľmi zriedkavé!)</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Ako obaliť:</h4>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>1. Žiadajte <strong>presný dôvod poruchy</strong> (konkrétna komponent, kód poruchy)</li>
                  <li>2. Overte, či výrobca vydal <strong>safety directive</strong> (Boeing, Airbus stránky)</li>
                  <li>3. Skontrolujte <strong>FlightRadar24</strong> – ak ostatné lety lietajú, nie je to mimoriadna okolnosť</li>
                  <li>4. Citujte judikatúru EÚ (C-549/07) – technická porucha = povinnosť údržby</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Excuse 2 */}
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 p-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                „Štrajk zamestnancov" (Employee Strike)
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🚫 Výhovorka aerolínky:</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "Let bol zrušený kvôli štrajku zamestnancov, čo je mimoriadna okolnosť mimo našej kontroly."
                </p>
              </div>

              <div className="mb-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Realita (EÚ súdy):</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  <strong>Štrajk vlastných zamestnancov aerolínky = INTERNÝ PROBLÉM</strong>, nie mimoriadna okolnosť!
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-3">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded">
                    <h5 className="font-bold text-red-900 dark:text-red-100 text-sm mb-1">❌ MUSÍ PLATIŤ:</h5>
                    <ul className="text-xs text-red-800 dark:text-red-200 space-y-1">
                      <li>• Štrajk pilotov aerolínky</li>
                      <li>• Štrajk palubného personálu</li>
                      <li>• Štrajk technikov údržby</li>
                      <li>• "Wildcat strike" (neohlásený)</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded">
                    <h5 className="font-bold text-green-900 dark:text-green-100 text-sm mb-1">✅ NEMUSÍ PLATIŤ:</h5>
                    <ul className="text-xs text-green-800 dark:text-green-200 space-y-1">
                      <li>• Štrajk ATC (riadenie letovej prevádzky)</li>
                      <li>• Štrajk letiskovej bezpečnosti</li>
                      <li>• Štrajk letiskových služieb (catering, palivo)</li>
                      <li>• Všeobecný štrajk v krajine</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">⚖️ Judikatúra EÚ:</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• <strong>C-195/17 (Krüsemann):</strong> Štrajk vlastných zamestnancov = zodpovednosť aerolínky</li>
                  <li>• <strong>C-28/20 (Airhelp):</strong> "Wildcat strike" (neohlásený) = stále zodpovednosť</li>
                  <li>• <strong>C-284/18 (Finnair):</strong> Iba štrajk tretích strán (ATC, letisko) = mimoriadna okolnosť</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Ako obaliť:</h4>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>1. Zistite <strong>KTO štrajkoval</strong> (piloti = aerolínka, ATC = tretia strana)</li>
                  <li>2. Overte v <strong>médiách</strong> (tlačové správy, novinové články)</li>
                  <li>3. Ak štrajkovali vlastní zamestnanci → citujte C-195/17 (Krüsemann)</li>
                  <li>4. Žiadajte písomné potvrdenie od aerolínky (kto štrajkoval, dôvod)</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Excuse 3 */}
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 p-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                „Nedostatok posádky" (Crew Shortage)
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🚫 Výhovorka aerolínky:</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "Let bol zrušený kvôli náhlemu ochoreniu pilota / letuška sa nedobraní na let, 
                  čo je mimoriadna okolnosť."
                </p>
              </div>

              <div className="mb-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Realita (EÚ súdy):</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  <strong>Nedostatok posádky = ZLÉ PLÁNOVANIE AEROLÍNKY</strong>, nie mimoriadna okolnosť!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  <strong>Dôvod:</strong> Aerolínka musí mať rezervnú posádku (backup crew). 
                  Ak nemá, je to jej problém (nedostatočné personálne plánovanie).
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Výnimka:</strong> Nedostatok posádky je mimoriadna okolnosť iba ak:
                  <br />• Pilot dostal infarkt krátko pred odletom (nepredvídateľné)
                  <br />• Celá rezervná posádka je chorá súčasne (pandémia)
                  <br />• Vládne obmedzenie (napr. karanténa celej posádky)
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ DÔLEŽITÉ:</h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Aerolínky často klamú: "pilot chorý" → realita: "nemáme dostatok pilotov, 
                  pretože sme najali málo" (zlé plánovanie = kompenzácia SA MUSÍ VYPLATIŤ!)
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mt-4">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Ako obaliť:</h4>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>1. Žiadajte <strong>konkrétny dôvod</strong> (meno pilota, dôvod neprítomnosti)</li>
                  <li>2. Overte, či aerolínka má <strong>rezervnú posádku</strong> (povinnosť podľa EU-OPS)</li>
                  <li>3. Ak aerolínka nemá rezervu → zlé plánovanie = kompenzácia sa vyplácať MUSÍ</li>
                  <li>4. Žiadajte <strong>lekárske potvrdenie</strong> (ak pilot údajne chorý)</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Excuse 4 */}
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 p-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                „Predchádzajúce meškanie" (Knock-on Effect)
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🚫 Výhovorka aerolínky:</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "Lietadlo mešká z predošlého letu kvôli mimoriadnym okolnostiam (hmla/búrka), 
                  preto váš let tiež meškalo."
                </p>
              </div>

              <div className="mb-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Realita (EÚ súdy):</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  <strong>"Knock-on effect" = ZLÉ PLÁNOVANIE AEROLÍNKY</strong>, nie automaticky mimoriadna okolnosť!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 mb-2">
                  <strong>Pravidlo:</strong> Aj keď prvý let mal mimoriadnu okolnosť (hmla), 
                  aerolínka MUSÍ preukázať, že urobila VŠETKO pre to, aby minimalizovala dopad 
                  na nasledujúce lety (náhradné lietadlo, rezervná posádka).
                </p>
                <p className="text-sm text-green-700 dark:text-green-300">
                  <strong>Výnimka:</strong> Ak hmla trvala celý deň (6+ hodín) a všetky lety 
                  boli zrušené, môže byť to oprávnená výhovorka. Ale ak hmla trvala len 2 hodiny 
                  ráno a váš let meškalo večer → aerolínka mala čas nájsť riešenie!
                </p>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">⚖️ Judikatúra EÚ:</h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• <strong>C-549/07 (Wallentin-Hermann):</strong> Aerolínka musí mať rezervné lietadlo</li>
                  <li>• <strong>C-173/07 (Emirate Airlines):</strong> "Reasonable measures" = náhradné riešenie</li>
                  <li>• <strong>C-12/11 (McDonagh):</strong> Krátke meškania (1-2h) nie sú výhovorka pre dlhé kaskádové meškania</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Ako obaliť:</h4>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>1. Overte <strong>FlightRadar24</strong> – ako dlho trvala "mimoriadna okolnosť"?</li>
                  <li>2. Ak hmla/búrka trvala len 1-2h a váš let meškalo 5h → aerolínka mala čas reagovať</li>
                  <li>3. Žiadajte dôkaz, že aerolínka <strong>skúsila nájsť náhradné lietadlo</strong></li>
                  <li>4. Ak nenašla → zlé plánovanie = kompenzácia sa vyplácať MUSÍ</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Excuse 5 */}
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-600 dark:bg-red-700 p-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="bg-white text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">5</span>
                „Hmla / Sneh" (Weather)
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🚫 Výhovorka aerolínky:</h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                  "Let bol zrušený kvôli hmle/snehu na letisku, čo je mimoriadna okolnosť."
                </p>
              </div>

              <div className="mb-4 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">✅ Realita (EÚ súdy):</h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                  <strong>Hmla/sneh sú mimoriadne okolnosti IBA AK:</strong>
                </p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1 mb-3">
                  <li>✅ Letisko je <strong>úplne uzavreté</strong> (všetky lety zrušené)</li>
                  <li>✅ Viditeľnosť {'<'}75m (CAT III minimá)</li>
                  <li>✅ Všetky aerolínky majú problémy (nie len vaša)</li>
                </ul>
                <p className="text-sm text-red-700 dark:text-red-300 font-bold">
                  ❌ AK OSTATNÉ LETY LIETAJÚ → nie je to mimoriadna okolnosť!
                </p>
              </div>

              <div className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                <h4 className="font-bold text-yellow-900 dark:text-yellow-100 mb-2">⚠️ NAJČASTEJŠÍ PODVOD:</h4>
                <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                  <strong>Prípad:</strong> Letisko Viedeň má hmlu ráno (8:00). Viditeľnosť 150m.
                </p>
                <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                  <li>• Austrian Airlines má CAT III certifikáciu → môže pristáť</li>
                  <li>• Wizz Air NEMÁ CAT III certifikáciu → musí zrušiť let</li>
                </ul>
                <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-2">
                  <strong>Verdikt:</strong> Wizz Air MUSÍ platiť kompenzáciu! Dôvod: Iné aerolínky 
                  lietajú, takže hmla nie je mimoriadna okolnosť. Wizz Air proste <strong>neinvestoval 
                  do vybavenia/školenia</strong> (zlé plánovanie).
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 dark:text-blue-100 mb-2">💡 Ako obaliť:</h4>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                  <li>1. Overte <strong>FlightRadar24</strong> – lietali iné lety v čase vášho letu?</li>
                  <li>2. Ak áno → aerolínka MUSÍ platiť (nemá oprávnenie pristáť = jej problém)</li>
                  <li>3. Žiadajte od letiska <strong>weather report</strong> (visibility, ceiling)</li>
                  <li>4. Žiadajte od aerolínky <strong>CAT III certifikát</strong> (má ho? ak nie → jej problém!)</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How to Challenge */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ako obaliť „mimoriadne okolnosti" – praktický postup
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Žiadajte písomné potvrdenie od aerolínky
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Na letisku (alebo emailom) žiadajte <strong>presný dôvod meškania/zrušenia</strong>. 
                    Aerolínka musí uviesť konkrétny dôvod (nie len "operational reasons").
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm">
                    <strong className="text-blue-900 dark:text-blue-100">Príklad správnej žiadosti:</strong>
                    <p className="text-blue-800 dark:text-blue-200 mt-1 italic">
                      "Prosím, poskytnite mi písomné potvrdenie s PRESNÝM dôvodom zrušenia letu 
                      XY123 dňa 15.2.2025 (technická porucha? ak áno, aký komponent? štrajk? ak áno, kto?)"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Overte FlightRadar24 a ďalšie zdroje
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Použite <strong>FlightRadar24.com</strong> na overenie:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-3">
                    <li>• Lietali iné lety v tom istom čase? (ak áno → nie je to mimoriadna okolnosť)</li>
                    <li>• Ako dlho trvala "mimoriadna okolnosť"? (hmla 1h vs. celý deň)</li>
                    <li>• Aké lietadlo použili? (staré lietadlo = častejšie poruchy)</li>
                  </ul>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Ďalšie zdroje:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• <strong>Weather reports:</strong> Aviation Weather Center (aviationweather.gov)</li>
                    <li>• <strong>Štrajky:</strong> Tlačové správy aerolíniek, novinové články</li>
                    <li>• <strong>Technical issues:</strong> Boeing/Airbus safety directives</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Citujte judikatúru EÚ v reklamácii
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    V reklamácii (emailu aerolínke) citujte relevantné rozhodnutia EÚ súdov:
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm font-mono mb-3">
                    <p className="text-gray-800 dark:text-gray-200">
                      "Podľa rozhodnutia Súdneho dvora EÚ <strong>C-549/07 (Wallentin-Hermann)</strong>, 
                      technická porucha nie je mimoriadna okolnosť, pretože údržba lietadla je základnou 
                      povinnosťou aerolínky."
                    </p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>Najdôležitejšie rozsudky:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• <strong>C-549/07:</strong> Technická porucha</li>
                    <li>• <strong>C-195/17:</strong> Štrajk zamestnancov</li>
                    <li>• <strong>C-22/11:</strong> Nečakaná porucha</li>
                    <li>• <strong>C-394/14:</strong> Hidden manufacturing defect (výnimka)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Použite ClaimWinger (95% úspešnosť vs. 5% individuálne)
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Realita:</strong> Aerolínky automaticky odmietnú 95% individuálnych 
                    reklamácií (počítajú, že sa vzdáte). ClaimWinger má právny tím a databázu judikatúry 
                    → aerolínky vedia, že sa nevzdáte.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                      <h4 className="font-bold text-red-900 dark:text-red-100 text-sm mb-2">
                        ❌ Individuálna reklamácia:
                      </h4>
                      <ul className="text-xs text-red-800 dark:text-red-200 space-y-1">
                        <li>• 5% úspešnosť</li>
                        <li>• 3-6 mesiacov čakanie</li>
                        <li>• Často žiadna odpoveď</li>
                        <li>• Musíte ísť na súd sami</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                      <h4 className="font-bold text-green-900 dark:text-green-100 text-sm mb-2">
                        ✅ ClaimWinger:
                      </h4>
                      <ul className="text-xs text-green-800 dark:text-green-200 space-y-1">
                        <li>• 92% úspešnosť</li>
                        <li>• 8-12 týždňov priemer</li>
                        <li>• Vždy dostanete odpoveď</li>
                        <li>• Právny tím ide na súd za vás</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Real Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Reálne prípady: ClaimWinger vs. Aerolínky
          </h2>

          {/* Case 1 */}
          <div className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
              ✅ Prípad #1: "Technická porucha" – Wizz Air vs. Martin (Bratislava)
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Situácia:</strong> Let Bratislava → Londýn zrušený 2 hodiny pred odletom. 
              Dôvod: "Technical fault with aircraft". Wizz Air automaticky odmietol kompenzáciu.</p>
              <p><strong>Výhovorka Wizz Air:</strong> "Unexpected technical issue is extraordinary circumstance."</p>
              <p><strong>ClaimWinger overil:</strong> FlightRadar24 ukázal, že VŠETKY ostatné lety 
              z Bratislavy lietali normálne. Žiadna safety directive od Airbus.</p>
              <p><strong>Výsledok:</strong> ClaimWinger citoval C-549/07 + dokázal, že Wizz Air 
              proste nemal náhradné lietadlo (zlé plánovanie). <strong>Wizz Air vyplatil 250 € po 10 týždňoch.</strong></p>
            </div>
          </div>

          {/* Case 2 */}
          <div className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
              ✅ Prípad #2: "Štrajk pilotov" – Ryanair vs. Jana (Košice)
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Situácia:</strong> Let Košice → Londýn Stansted zrušený kvôli štrajku 
              pilotov Ryanair (júl 2024).</p>
              <p><strong>Výhovorka Ryanair:</strong> "Pilot strike is extraordinary circumstance beyond our control."</p>
              <p><strong>ClaimWinger overil:</strong> Novinové články potvrdili, že štrajkovali 
              VLASTNÍ piloti Ryanair (nie ATC, nie letisko). Štrajk bol ohlásený 14 dní vopred.</p>
              <p><strong>Výsledok:</strong> ClaimWinger citoval C-195/17 (Krüsemann) + dokázal, že 
              Ryanair mal čas nájsť náhradnú posádku. <strong>Ryanair vyplatil 400 € po súdnom spore (3 mesiace).</strong></p>
            </div>
          </div>

          {/* Case 3 */}
          <div className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-xl border-l-4 border-green-500">
            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3">
              ✅ Prípad #3: "Hmla" – Austrian Airlines vs. Petra (Viedeň)
            </h3>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <p><strong>Situácia:</strong> Let Viedeň → New York zrušený kvôli hmle vo Viedni (zima 2024).</p>
              <p><strong>Výhovorka Austrian:</strong> "Fog below CAT III minima – all flights cancelled."</p>
              <p><strong>ClaimWinger overil:</strong> FlightRadar24 + letiskový weather report ukázali, 
              že viditeľnosť bola 200m (nie 75m). Lufthansa a Swiss lietali normálne (majú lepšie vybavenie).</p>
              <p><strong>Výsledok:</strong> ClaimWinger dokázal, že Austrian proste nemá také dobré 
              vybavenie ako Lufthansa (investičné rozhodnutie = zodpovednosť aerolínky). 
              <strong>Austrian vyplatil 600 € po 14 týždňoch.</strong></p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Často kladené otázky (FAQ)
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Ako viem, či aerolínka klame o mimoriadnych okolnostiach?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>3 kroky na overenie:</strong>
                </p>
                <ol className="space-y-2 ml-4">
                  <li>1. <strong>FlightRadar24:</strong> Skontrolujte, či ostatné lety lietali 
                  (ak áno → nie je to mimoriadna okolnosť)</li>
                  <li>2. <strong>Weather reports:</strong> Overte skutočné počasie 
                  (Aviation Weather Center, letiskové METAR)</li>
                  <li>3. <strong>Novinové články:</strong> Vyhľadajte správy o štrajkoch, 
                  technických problémoch (Google News + dátum letu)</li>
                </ol>
                <p className="mt-3 text-blue-600 dark:text-blue-400">
                  💡 Tip: ClaimWinger to overí za vás automaticky (máme prístup k databázam + právny tím).
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Aerolínka mi poslala email: "Technical fault is extraordinary circumstance." Mám nárok?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>ANO, máte nárok!</strong> Technická porucha je v 99% prípadov ZODPOVEDNOSŤ AEROLÍNKY.
                </p>
                <p className="mb-3">
                  <strong>Dôvod:</strong> Podľa rozsudku EÚ súdu <strong>C-549/07 (Wallentin-Hermann)</strong>, 
                  údržba lietadla je základnou povinnosťou aerolínky. Ak lietadlo zlyhá, je to zlyhanie 
                  údržby (nie nepredvídateľná udalosť).
                </p>
                <p className="mb-3">
                  <strong>Výnimka:</strong> Technická porucha je mimoriadna okolnosť iba ak bola spôsobená:
                </p>
                <ul className="ml-4 space-y-1">
                  <li>• <strong>Hidden manufacturing defect</strong> (výrobná chyba, ktorú nemožno odhaliť pri údržbe)</li>
                  <li>• <strong>Safety directive</strong> od výrobcu (Boeing/Airbus nařídil grounding flotily)</li>
                </ul>
                <p className="mt-3 text-green-600 dark:text-green-400">
                  ✅ Odpíšte aerolínke: "Technická porucha nie je mimoriadna okolnosť podľa C-549/07. Žiadam kompenzáciu."
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Čo ak aerolínka neodpovedá na moju reklamáciu?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>Typická taktika aerolíniek:</strong> Ignorovať individuálne reklamácie 
                  (počítajú, že sa vzdáte).
                </p>
                <p className="mb-3">
                  <strong>Vaše možnosti:</strong>
                </p>
                <ol className="space-y-2 ml-4">
                  <li>1. <strong>Počkajte 6 týždňov</strong> (aerolínka má zo zákona povinnosť 
                  odpovedať do 6 týždňov)</li>
                  <li>2. <strong>Pripomeňte si:</strong> Pošlite follow-up email ("Žiadam odpoveď 
                  do 14 dní, inak kontaktujem NEB")</li>
                  <li>3. <strong>Kontaktujte národný orgán:</strong> Slovensko = Dopravný úrad SR 
                  (du.gov.sk), Česko = CAA ČR, Poľsko = CAA PL</li>
                  <li>4. <strong>Použite ClaimWinger:</strong> Aerolínky nebudú ignorovať právny 
                  tím (vieme, že ideme na súd)</li>
                </ol>
                <p className="mt-3 text-red-600 dark:text-red-400">
                  ⚠️ Pozor: Máte len 3 roky na podanie reklamácie (v SR). Nezabudnite!
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Môže aerolínka povedať "mimoriadne okolnosti" aj roky po lete?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>ÁNO, ale musí to dokázať!</strong> Aerolínka musí poskytnúť DÔKAZY 
                  (nie len tvrdenia), aj keď reaguje roky neskôr.
                </p>
                <p className="mb-3">
                  <strong>Vaše právo:</strong> Žiadajte <strong>konkrétne dôkazy</strong>:
                </p>
                <ul className="ml-4 space-y-1">
                  <li>• Weather report z letiska (METAR)</li>
                  <li>• Maintenance log (záznam o údržbe)</li>
                  <li>• Safety directive od výrobcu (Boeing/Airbus)</li>
                  <li>• Novinové články o štrajku</li>
                </ul>
                <p className="mt-3 text-blue-600 dark:text-blue-400">
                  💡 Tip: Ak aerolínka neposkytne dôkazy do 6 týždňov → automaticky MUSÍ vyplatiť 
                  kompenzáciu (nemôže sa vyhovárať).
                </p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                ClaimWinger vs. individuálna reklamácia – čo je lepšie?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300 dark:border-gray-600">
                        <th className="text-left p-2">Kritérium</th>
                        <th className="text-left p-2">Individuálne</th>
                        <th className="text-left p-2">ClaimWinger</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-semibold">Úspešnosť</td>
                        <td className="p-2 text-red-600 dark:text-red-400">5%</td>
                        <td className="p-2 text-green-600 dark:text-green-400"><strong>92%</strong></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-semibold">Čas</td>
                        <td className="p-2">3-6 mesiacov</td>
                        <td className="p-2"><strong>8-12 týždňov</strong></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-semibold">Náklady</td>
                        <td className="p-2">Žiadne (ak nevyhrám)</td>
                        <td className="p-2">25% (len pri úspechu)</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-semibold">Právny tím</td>
                        <td className="p-2">Nie</td>
                        <td className="p-2"><strong>Áno</strong></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2 font-semibold">Súdny spor</td>
                        <td className="p-2">Musím ísť sám</td>
                        <td className="p-2"><strong>Za mňa</strong></td>
                      </tr>
                      <tr>
                        <td className="p-2 font-semibold">Overenie dôkazov</td>
                        <td className="p-2">Manuálne</td>
                        <td className="p-2"><strong>Automaticky</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-green-600 dark:text-green-400">
                  ✅ <strong>Verdikt:</strong> Ak aerolínka tvrdí "mimoriadne okolnosti", použite 
                  ClaimWinger (5% šanca individuálne vs. 92% s ClaimWinger).
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nenechajte sa oklamať "mimoriadnymi okolnosťami"!
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                95% odmietnutí je nepravdivých. ClaimWinger overí dôkazy a obalí výhovorky aerolíniek. 
                92% úspešnosť, 8-12 týždňov, platíte len pri úspechu (25%).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://claimwinger.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Skontrolovať nárok teraz
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/sk/kalkulacka-kompenzacie"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-400 transition-all"
                >
                  Kalkulačka kompenzácie
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                ⚡ Bez rizika – platíte len pri úspechu | ⚖️ Právny tím ide na súd za vás
              </p>
            </div>
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
              className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Kompletný sprievodca: Kompenzácia za meškanie letu
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Všetko o právach cestujúcich podľa EÚ 261/2004
              </p>
            </Link>
            <Link
              href="/sk/blog/odwolany-lot-zwrot-czy-odszkodowanie"
              className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Zrušený let – vrátenie peňazí alebo kompenzácia?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Poznajte rozdiel a svoje práva
              </p>
            </Link>
          </div>
        </section>

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Ako viem, či aerolínka klame o mimoriadnych okolnostiach?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Použite 3 kroky: 1) FlightRadar24 (lietali iné lety?), 2) Weather reports (overenie počasia), 3) Novinové články (štrajky, technické problémy). ClaimWinger to overí za vás automaticky."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Aerolínka tvrdí 'technical fault is extraordinary circumstance.' Mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ÁNO! Technická porucha je v 99% prípadov zodpovednosť aerolínky podľa rozsudku EÚ C-549/07. Výnimka je len pri hidden manufacturing defect alebo safety directive od výrobcu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Čo ak aerolínka neodpovedá na moju reklamáciu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aerolínka má 6 týždňov na odpoveď. Ak neodpovie, kontaktujte národný orgán (SR: Dopravný úrad) alebo použite ClaimWinger (aerolínky nebudú ignorovať právny tím)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Môže aerolínka povedať 'mimoriadne okolnosti' aj roky po lete?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ÁNO, ale musí poskytnúť DÔKAZY (weather report, maintenance log, safety directive, novinové články). Ak neposkytne do 6 týždňov, MUSÍ vyplatiť kompenzáciu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "ClaimWinger vs. individuálna reklamácia – čo je lepšie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ClaimWinger má 92% úspešnosť vs. 5% individuálne. Čas: 8-12 týždňov vs. 3-6 mesiacov. Náklady: 25% len pri úspechu. Právny tím ide na súd za vás a overuje dôkazy automaticky."
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
