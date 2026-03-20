import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { AlertCircle, Clock, Euro, Plane, CheckCircle, XCircle, Info, Calculator, FileText } from "lucide-react";

export default function ThreeHourDelayRule() {
  return (
    <LayoutCs>
      <SEO
        title="3hodinové pravidlo zpoždění - kdy máte nárok na €600? | LotProblem.cz"
        description="Kompletní průvodce 3hodinovým pravidlem EU 261/2004. Jak správně měřit zpoždění, hraniczne případy a kalkulátor kompenzace."
        url="https://lotproblem.pl/cs/blog/3hodinove-pravidlo-zpozdeni"
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-slate-600">
          <Link href="/cs" className="hover:text-blue-600">Domů</Link>
          <span className="mx-2">/</span>
          <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">3hodinové pravidlo</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-8">
          <div className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            ZÁKLADNÍ PRAVIDLO EU 261
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            3hodinové Pravidlo Zpoždění Vysvětleno
          </h1>
          <p className="text-xl text-slate-600 mb-6">
            Proč přesně 3 hodiny rozhodují o vašich €250-600? Jak správně měřit delay a co dělat při 2h59min vs 3h01min?
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-600">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Čtení: 12 min
            </span>
            <span className="flex items-center gap-1">
              <FileText className="w-4 h-4" />
              Aktualizováno: 26.2.2026
            </span>
          </div>
        </header>

        {/* Shocking Fact Alert */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-900 text-lg mb-2">
                ⚠️ 80% lidí měří zpoždění ŠPATNĚ!
              </h3>
              <p className="text-red-800 mb-3">
                Myslíte si, že váš let měl 3h15min zpoždění? <strong>Možná to bylo jen 2h45min</strong> a nemáte nárok na kompenzaci!
              </p>
              <p className="text-red-800 font-semibold">
                Správné měření = rozdíl mezi €0 a €600!
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Základní pravidlo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Clock className="w-8 h-8 text-blue-600" />
            Základní Pravidlo: 3 Hodiny = Kompenzace
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-lg text-slate-800 mb-4">
              Podle <strong>nařízení EU 261/2004</strong> máte nárok na peněžní kompenzaci, pokud váš let dorazí na konečnou destinaci s <strong>minimálním zpožděním 3 hodin</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">≤ 2h59min</div>
                <div className="text-slate-600">Žádná kompenzace</div>
                <div className="text-2xl mt-2">€0</div>
              </div>
              <div className="bg-green-100 p-4 rounded-lg text-center border-2 border-green-500">
                <div className="text-3xl font-bold text-green-900 mb-2">≥ 3h00min</div>
                <div className="text-green-700 font-semibold">NÁROK NA KOMPENZACI! ✓</div>
                <div className="text-2xl mt-2 text-green-700">€250-600</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">≥ 4h</div>
                <div className="text-slate-600">Maximální kompenzace</div>
                <div className="text-2xl mt-2">až €600</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
            <p className="text-slate-800">
              <strong>POZOR:</strong> Výše kompenzace závisí na <Link href="#vzdalenost" className="text-blue-600 hover:underline">vzdálenosti letu</Link>, nikoliv na délce zpoždění! Let zpožděný o 10 hodin může přinést stejnou částku jako 3hodinové zpoždění.
            </p>
          </div>
        </section>

        {/* Section 2: Proč přesně 3 hodiny? */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Info className="w-8 h-8 text-blue-600" />
            Proč Přesně 3 Hodiny?
          </h2>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 mb-4">
              Hranice 3 hodin byla stanovena Evropským parlamentem jako <strong>spravedlivá rovnováha</strong> mezi právy pasažérů a ekonomickou realitou leteckých společností.
            </p>

            <div className="bg-slate-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">🏛️ Historie pravidla:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>2004:</strong> EU přijala nařízení 261/2004 s 3hodinovým pravidlem</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Rationale:</strong> 3h = významné narušení cestovních plánů (zmeškaná schůzka, hotel, přípojný transport)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Kompromis:</strong> Kratší delay (1-2h) = běžná část letecké dopravy, delší = kompenzovatelná újma</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Judikatura:</strong> Evropský soudní dvůr potvrdil pravidlo v roce 2009 (C-402/07)</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-700">
              Pravidlo je <strong>absolutní a nezměnitelné</strong>. Letecké společnosti nemohou svévolně zvýšit hranici na 4 nebo 5 hodin. Je to legislativní právo pasažérů chráněné evropským právem.
            </p>
          </div>
        </section>

        {/* Section 3: Jak správně měřit zpoždění? */}
        <section className="mb-12" id="mereni">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Calculator className="w-8 h-8 text-blue-600" />
            Jak Správně Měřit Zpoždění?
          </h2>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6 rounded-r-lg">
            <h3 className="font-bold text-red-900 text-xl mb-3">
              🚨 KRITICKÁ CHYBA 80% PASAŽÉRŮ!
            </h3>
            <p className="text-red-800 mb-3">
              Většina lidí měří zpoždění od <strong>plánovaného odletu</strong> nebo <strong>boardingu</strong>. To je ŠPATNĚ!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* WRONG */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">❌ CHYBNÉ MĚŘENÍ</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Boarding time:</strong> Čas nástupu do letadla</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Take-off time:</strong> Čas vzletu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Landing time:</strong> Čas přistání</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Departure delay:</strong> Zpoždění odletu</span>
                </li>
              </ul>
            </div>

            {/* CORRECT */}
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-5">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">✓ SPRÁVNÉ MĚŘENÍ</h3>
              </div>
              <div className="bg-white p-4 rounded-lg border-2 border-green-400">
                <p className="text-lg font-bold text-green-900 mb-2">
                  🎯 ARRIVAL TIME na konečné destinaci
                </p>
                <p className="text-slate-700 mb-3">
                  Zpoždění = Rozdíl mezi <strong>plánovaným</strong> a <strong>skutečným</strong> časem <strong>otevření dveří letadla</strong> na cílovém letišti.
                </p>
                <div className="bg-green-100 p-3 rounded text-sm">
                  <p className="font-semibold text-green-900">Oficiální definice EU:</p>
                  <p className="text-slate-700">"Čas, kdy je alespoň jedno dveře letadla otevřeno pro vystoupení pasažérů"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Praktický příklad */}
          <div className="bg-slate-100 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">📊 Praktický Příklad:</h3>
            
            <div className="bg-white p-5 rounded-lg mb-4">
              <p className="font-semibold text-slate-900 mb-3">Let Praha → Barcelona (Ryanair FR1234)</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-slate-600 mb-2">PLÁNOVANÝ ČASY:</p>
                  <ul className="space-y-1 text-slate-700">
                    <li>• Boarding: 10:30</li>
                    <li>• Departure: 11:00</li>
                    <li>• <strong className="text-blue-600">Arrival: 13:15</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">SKUTEČNÉ ČASY:</p>
                  <ul className="space-y-1 text-slate-700">
                    <li>• Boarding: 13:00 (2h30min delay)</li>
                    <li>• Departure: 13:30 (2h30min delay)</li>
                    <li>• <strong className="text-red-600">Arrival: 16:00</strong></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-lg font-bold text-slate-900 mb-2">VÝPOČET ZPOŽDĚNÍ:</p>
                <p className="text-slate-700 mb-1">Plánovaný arrival: 13:15</p>
                <p className="text-slate-700 mb-1">Skutečný arrival: 16:00</p>
                <p className="text-2xl font-bold text-green-600 mt-2">= 2h 45min DELAY</p>
                <p className="text-red-600 font-semibold mt-2">❌ NEMÁTE NÁROK (méně než 3h)</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r">
              <p className="text-slate-800">
                <strong>Pozor:</strong> I když let odletěl s 2,5h zpožděním, piloti někdy "doženou čas" rychlejším letem. Počítá se POUZE skutečné zpoždění na příletovém letišti!
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Kritický moment 2h59 vs 3h01 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <AlertCircle className="w-8 h-8 text-red-600" />
            Hraničné Případy: 2h59min vs 3h01min
          </h2>

          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 mb-4">
              Rozdíl 2 minut může znamenat rozdíl €400! Jak to funguje v praxi?
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* 2h59min */}
              <div className="bg-red-50 border-2 border-red-300 rounded-lg p-5">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-red-600">2h 59min</div>
                  <div className="text-red-700 font-semibold mt-2">ŽÁDNÁ KOMPENZACE</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-slate-600 mb-2">Příklad:</p>
                  <p className="text-slate-700 mb-1">Plánovaný přílet: 15:00</p>
                  <p className="text-slate-700 mb-1">Skutečný přílet: 17:59</p>
                  <p className="text-2xl font-bold text-red-600 mt-3">€0</p>
                </div>
              </div>

              {/* 3h01min */}
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-5">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-600">3h 01min</div>
                  <div className="text-green-700 font-semibold mt-2">KOMPENZACE! ✓</div>
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-sm text-slate-600 mb-2">Příklad:</p>
                  <p className="text-slate-700 mb-1">Plánovaný přílet: 15:00</p>
                  <p className="text-slate-700 mb-1">Skutečný přílet: 18:01</p>
                  <p className="text-2xl font-bold text-green-600 mt-3">€250-600</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">⚖️ Co když je to přesně 3h00min?</h3>
              <p className="text-slate-700 mb-3">
                Pokud je zpoždění <strong>přesně 3 hodiny</strong> (např. plánovaný přílet 15:00, skutečný 18:00), <strong className="text-green-600">MÁTE NÁROK</strong> na kompenzaci.
              </p>
              <p className="text-slate-700">
                Nařízení EU 261 stanovuje hranici jako "3 hodiny <strong>nebo více</strong>" (3h+), nikoliv "více než 3 hodiny" (&gt;3h).
              </p>
            </div>

            {/* Důležité upozornění */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 rounded-r-lg">
              <h4 className="font-bold text-yellow-900 mb-2">🔍 Jak aerolinka určí přesný čas?</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Letecké společnosti používají <strong>ACARS data</strong> (Aircraft Communications Addressing and Reporting System)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Čas otevření dveří je zaznamenán <strong>automaticky</strong> letadlem</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Můžete požádat o <strong>kopii ACARS reportu</strong> jako důkaz</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>FlightRadar24 nebo FlightAware ukazují <strong>přibližné časy</strong>, nejsou 100% přesné</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Vzdálenost = Výška kompenzace */}
        <section className="mb-12" id="vzdalenost">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Plane className="w-8 h-8 text-blue-600" />
            Vzdálenost Letu = Výška Kompenzace
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl mb-6">
            <p className="text-lg text-slate-800 mb-4">
              <strong>KRITICKÉ:</strong> Výše kompenzace <strong>NEZÁVISÍ</strong> na délce zpoždění! Závisí pouze na <strong>vzdálenosti letu</strong>.
            </p>
            <p className="text-slate-700">
              Let zpožděný o 3 hodiny může přinést €250 nebo €600 – podle toho, kam letíte.
            </p>
          </div>

          {/* Tabulka kompenzací */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="p-4 text-left">Vzdálenost Letu</th>
                  <th className="p-4 text-left">Typ Letu</th>
                  <th className="p-4 text-left">Příklady</th>
                  <th className="p-4 text-center">Kompenzace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Do 1500 km</td>
                  <td className="p-4">Krátké lety</td>
                  <td className="p-4 text-sm">Praha→Amsterdam, Praha→Wien, Praha→Berlin</td>
                  <td className="p-4 text-center">
                    <span className="text-2xl font-bold text-green-600">€250</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">1500-3500 km</td>
                  <td className="p-4">Střední lety</td>
                  <td className="p-4 text-sm">Praha→Barcelona, Praha→Atény, Praha→Londýn</td>
                  <td className="p-4 text-center">
                    <span className="text-2xl font-bold text-blue-600">€400</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Nad 3500 km</td>
                  <td className="p-4">Dlouhé lety</td>
                  <td className="p-4 text-sm">Praha→New York, Praha→Bangkok, Praha→Dubai</td>
                  <td className="p-4 text-center">
                    <span className="text-2xl font-bold text-purple-600">€600</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Praktické příklady */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-green-600 font-bold mb-2">Praha → Amsterdam</div>
              <div className="text-sm text-slate-600 mb-2">Vzdálenost: ~650 km</div>
              <div className="text-slate-700 text-sm mb-3">
                3h+ delay = <strong className="text-green-600">€250</strong><br/>
                5h+ delay = <strong className="text-green-600">€250</strong><br/>
                10h+ delay = <strong className="text-green-600">€250</strong>
              </div>
              <p className="text-xs text-slate-600">Výše se NEMĚNÍ s délkou delay!</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-blue-600 font-bold mb-2">Praha → Barcelona</div>
              <div className="text-sm text-slate-600 mb-2">Vzdálenost: ~1,450 km</div>
              <div className="text-slate-700 text-sm mb-3">
                3h+ delay = <strong className="text-blue-600">€400</strong><br/>
                5h+ delay = <strong className="text-blue-600">€400</strong><br/>
                10h+ delay = <strong className="text-blue-600">€400</strong>
              </div>
              <p className="text-xs text-slate-600">Konstantní částka!</p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-purple-600 font-bold mb-2">Praha → New York</div>
              <div className="text-sm text-slate-600 mb-2">Vzdálenost: ~6,500 km</div>
              <div className="text-slate-700 text-sm mb-3">
                3h+ delay = <strong className="text-purple-600">€600</strong><br/>
                5h+ delay = <strong className="text-purple-600">€600</strong><br/>
                12h+ delay = <strong className="text-purple-600">€600</strong>
              </div>
              <p className="text-xs text-slate-600">Maximum €600!</p>
            </div>
          </div>
        </section>

        {/* Section 6: Case Studies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            📋 4 Reálné Case Studies
          </h2>

          {/* Case 1 */}
          <div className="bg-white border-2 border-red-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                CASE #1: ŽÁDNÁ KOMPENZACE
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Praha → Amsterdam (2h45min delay)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">FLIGHT DETAILS:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Aerolinka: KLM</li>
                  <li>• Vzdálenost: 650 km</li>
                  <li>• Plánovaný arrival: 14:30</li>
                  <li>• Skutečný arrival: 17:15</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">VÝPOČET:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Delay: 2h 45min</li>
                  <li>• Kompenzace: <strong className="text-red-600">€0</strong></li>
                  <li>• Důvod: Méně než 3h</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <p className="text-slate-700 text-sm">
                <strong>Poznámka:</strong> Pasažér si myslel, že má nárok (let odletěl s 3h zpožděním), ale piloti dohnali čas. Arrival delay byl jen 2h45min.
              </p>
            </div>
          </div>

          {/* Case 2 */}
          <div className="bg-white border-2 border-green-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                CASE #2: €400 VYPLACENO ✓
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Praha → Barcelona (3h05min delay)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">FLIGHT DETAILS:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Aerolinka: Ryanair</li>
                  <li>• Vzdálenost: 1,450 km</li>
                  <li>• Plánovaný arrival: 13:15</li>
                  <li>• Skutečný arrival: 16:20</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">VÝSLEDEK:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Delay: 3h 05min ✓</li>
                  <li>• Kompenzace: <strong className="text-green-600">€400</strong></li>
                  <li>• Vyplaceno: Ano</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="text-slate-700 text-sm">
                <strong>SUCCESS:</strong> Pasažér použil ClaimWinger, získal €400 za 6 týdnů. Ryanair původně odmítl (tvrdil "technickou závadu"), ale CW to zpochybnil.
              </p>
            </div>
          </div>

          {/* Case 3 */}
          <div className="bg-white border-2 border-red-200 rounded-lg p-6 mb-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                CASE #3: CHYBA PASAŽÉRA
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Praha → Londýn (2h58min delay)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">FLIGHT DETAILS:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Aerolinka: British Airways</li>
                  <li>• Vzdálenost: 1,050 km</li>
                  <li>• Plánovaný arrival: 18:00</li>
                  <li>• Skutečný arrival: 20:58</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">PROBLÉM:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Delay: 2h 58min</li>
                  <li>• Kompenzace: <strong className="text-red-600">€0</strong></li>
                  <li>• 2 minuty chyběly!</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded">
              <p className="text-slate-700 text-sm">
                <strong>Chyba:</strong> Pasažér měřil zpoždění od boarding time (3h15min), ne od arrival. FlightRadar24 ukázal 2h58min arrival delay. Nezískal nic.
              </p>
            </div>
          </div>

          {/* Case 4 */}
          <div className="bg-white border-2 border-green-200 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                CASE #4: €600 VYPLACENO ✓
              </div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Praha → New York (4h20min delay)</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-slate-600 mb-1">FLIGHT DETAILS:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Aerolinka: CSA (Czech Airlines)</li>
                  <li>• Vzdálenost: 6,500 km</li>
                  <li>• Plánovaný arrival: 16:30 (local)</li>
                  <li>• Skutečný arrival: 20:50 (local)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">VÝSLEDEK:</p>
                <ul className="text-slate-700 text-sm space-y-1">
                  <li>• Delay: 4h 20min ✓</li>
                  <li>• Kompenzace: <strong className="text-green-600">€600</strong></li>
                  <li>• Vyplaceno: Ano</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded">
              <p className="text-slate-700 text-sm">
                <strong>SUCCESS:</strong> Maximální kompenzace €600 za dlouhý let (3500+ km). Pasažér navíc dostal meal voucher (€15) a hotel (1 noc) přímo na letišti.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Speciální situace */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            🔄 Speciální Situace
          </h2>

          <div className="space-y-6">
            {/* Missed Connection */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Zmeškaný Přestup (Missed Connection)
              </h3>
              <p className="text-slate-700 mb-3">
                Pokud máte <strong>jeden ticket</strong> s přestupem a první let se zpozdí, což způsobí zmeškaný druhý let:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Počítá se <strong>celkové zpoždění</strong> na konečnou destinaci</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>První let 1h delay + čekání 4h na druhý let = možná €400-600!</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span>Vzdálenost = celková trasa (Praha→Frankfurt→New York = 6500 km)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded">
                <p className="text-sm text-slate-700">
                  <strong>Příklad:</strong> Praha→Frankfurt (45min delay) → Zmeškaný Frankfurt→NYC → Čekání 5h → Celkové zpoždění NYC: 5h45min → <strong className="text-green-600">€600 kompenzace!</strong>
                </p>
              </div>
            </div>

            {/* Změna letu */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🔄 Změna Letu (Rebooking)
              </h3>
              <p className="text-slate-700 mb-3">
                Pokud aerolinka zruší let a přesměruje vás na jiný:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Počítá se zpoždění na <strong>původně plánovanou destinaci</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Alternatívní trasa (např. jiný hub) nemění výpočet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Pokud dorazíte 3h+ později než byl původní plán = kompenzace</span>
                </li>
              </ul>
            </div>

            {/* Technické mezipřistání */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                🛬 Technické Mezipřistání
              </h3>
              <p className="text-slate-700 mb-3">
                Let musí mezipřistát kvůli technickému problému (tankování, oprava):
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Počítá se POUZE zpoždění na <strong>původní konečnou destinaci</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Pokud let Praha→NYC přistane v Reykjavíku a dorazí do NYC 3h+ později = €600</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Mezipřistání se <strong>nepočítá</strong> jako samostatný segment</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Jak dokázat delay */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Jak Dokázat Zpoždění?
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">📸 Dokumentace na Letišti:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Boarding pass:</strong> Uschovejte si! Obsahuje flight number a datum</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Fotka displeje:</strong> Vyfotit displej s delay information</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Email/SMS od aerolinek:</strong> Automatické notifikace o zpoždění</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span><strong>Svědci:</strong> Kontakt na spolucestující (pokud možné)</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">🌐 Online Nástroje:</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">FlightRadar24.com</p>
                  <p className="text-slate-700 text-sm">Historická data letů (až 7 dní zpět zdarma)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">FlightAware.com</p>
                  <p className="text-slate-700 text-sm">Arrival times + delay statistics</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Stránky letiště</p>
                  <p className="text-slate-700 text-sm">Oficiální arrival/departure boards (screenshot)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">ACARS Report</p>
                  <p className="text-slate-700 text-sm">Požádejte aerolinku o oficiální report (100% přesný)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Euro className="w-10 h-10" />
            <h3 className="text-2xl font-bold">Nejste si jistí zda máte nárok?</h3>
          </div>
          <p className="text-blue-100 mb-6 text-lg">
            ClaimWinger <strong>profesionálně změří</strong> vaše zpoždění, získá ACARS data od aerolinek a zpochybní jakékoliv odmítnutí. Získáte kompenzaci nebo nic neplatíte!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Zkontrolovat nárok zdarma
              <span>→</span>
            </a>
            <div className="flex items-center gap-6 text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Bez rizika</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>30% provize pouze při úspěchu</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            ❓ Často Kladené Otázky
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-50 rounded-lg">
              <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100 rounded-lg">
                Co když je zpoždění přesně 3h00min00s?
              </summary>
              <div className="px-5 pb-5 text-slate-700">
                <p>
                  <strong className="text-green-600">MÁTE NÁROK!</strong> Nařízení EU 261 stanovuje hranici jako "3 hodiny nebo více" (≥3h), nikoliv "více než 3 hodiny" (&gt;3h). Přesně 3h = kompenzace.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg">
              <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100 rounded-lg">
                Počítá se místní čas nebo UTC?
              </summary>
              <div className="px-5 pb-5 text-slate-700">
                <p className="mb-2">
                  Používá se <strong>místní čas cílové destinace</strong>. Pokud letíte Praha→London:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Plánovaný arrival London: 18:00 (local UK time)</li>
                  <li>Skutečný arrival London: 21:05 (local UK time)</li>
                  <li>Delay = 3h05min ✓</li>
                </ul>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg">
              <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100 rounded-lg">
                FlightRadar24 ukazuje jiný čas než aerolinka. Komu věřit?
              </summary>
              <div className="px-5 pb-5 text-slate-700">
                <p className="mb-3">
                  FlightRadar24 je <strong>přibližný</strong> (±5 minut tolerance). Oficiální čas = <strong>ACARS data</strong> od aerolinek (automatický záznam otevření dveří).
                </p>
                <p>
                  Pokud je rozdíl kritický (např. FR24: 3h02min, aerolinka tvrdí 2h58min), <strong>požádejte o ACARS report</strong> jako důkaz. ClaimWinger to udělá za vás.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg">
              <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100 rounded-lg">
                Může aerolinka snížit delay tím, že změní plánovaný čas?
              </summary>
              <div className="px-5 pb-5 text-slate-700">
                <p className="mb-3">
                  <strong className="text-red-600">NE!</strong> Počítá se <strong>původní plánovaný čas</strong> z booking confirmace nebo ticketu. Aerolinka nemůže "upravit" delay změnou scheduled time v systému.
                </p>
                <p>
                  Proto je důležité uschovvat si <strong>původní boarding pass</strong> a booking email.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg">
              <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100 rounded-lg">
                Co když aerolinka odmítne kompenzaci kvůli "mimořádným okolnostem"?
              </summary>
              <div className="px-5 pb-5 text-slate-700">
                <p className="mb-3">
                  60% odmítnutí je <strong>nelegitimních</strong>! Technická závada, "špatné počasí" nebo "ATC delay" NEJSOU automaticky mimořádné okolnosti.
                </p>
                <p>
                  <Link href="/cs/blog/mimoradne-okolnosti-vysvetleny" className="text-blue-600 hover:underline font-semibold">
                    Přečtěte si náš kompletní průvodce o mimořádných okolnostech →
                  </Link>
                </p>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg">
              <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100 rounded-lg">
                Jak dlouho mám čas na reklamaci?
              </summary>
              <div className="px-5 pb-5 text-slate-700">
                <p className="mb-2">
                  Závisí na národní legislativě:
                </p>
                <ul className="list-disc list-inside space-y-1 mb-3">
                  <li><strong>Česká republika:</strong> 3 roky od data letu</li>
                  <li><strong>Slovensko:</strong> 2 roky od data letu</li>
                  <li><strong>Polsko:</strong> 3 roky od data letu</li>
                  <li><strong>Německo:</strong> 3 roky od konce roku, kdy nastal incident</li>
                </ul>
                <p className="text-sm text-slate-600">
                  Doporučujeme reklamovat co nejdříve – čím starší případ, tím těžší důkazní břemeno.
                </p>
              </div>
            </details>

            <details className="bg-slate-50 rounded-lg">
              <summary className="p-5 font-semibold text-slate-900 cursor-pointer hover:bg-slate-100 rounded-lg">
                Můžu dostat kompenzaci i když jsem použil voucher nebo byl let zdarma?
              </summary>
              <div className="px-5 pb-5 text-slate-700">
                <p className="mb-3">
                  <strong className="text-green-600">ANO!</strong> EU 261 se vztahuje na <strong>všechny potvrzené rezervace</strong>, včetně:
                </p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Lety zakoupené voucherem</li>
                  <li>Věrnostní lety (míle/body)</li>
                  <li>Zaměstnanecké lety (s potvrzenou rezervací)</li>
                  <li>Lety v rámci balíčku (package holiday)</li>
                </ul>
                <p className="mt-3 text-sm text-slate-600">
                  Výjimka: Standby lety bez potvrzené rezervace (čekaní na volné místo).
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Summary Box */}
        <div className="bg-slate-900 text-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6">🎯 Shrnutí: 5 Klíčových Bodů</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <p className="text-slate-200"><strong>3h+ arrival delay</strong> = nárok na €250-600</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <p className="text-slate-200">Měřte delay od <strong>otevření dveří</strong>, ne od boardingu</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <p className="text-slate-200">Výše závisí na <strong>vzdálenosti</strong>, ne délce delay</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <p className="text-slate-200">Dokumentujte! Boarding pass + foto displeje</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                <p className="text-slate-200">ClaimWinger = profesionální měření + zpochybnění odmítnutí</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-slate-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">📚 Související Články</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/cs/blog/mimoradne-okolnosti-vysvetleny" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-slate-900 mb-2">Mimořádné okolnosti vysvětleny</h4>
              <p className="text-sm text-slate-600">60% aerolinek lže! Kdy opravdu nemohou vyplatit?</p>
            </Link>
            <Link href="/cs/blog/rozdil-kompenzace-refundace" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-slate-900 mb-2">Kompenzace vs. Vrácení peněz</h4>
              <p className="text-sm text-slate-600">95% lidí neví že můžete dostat OBĚ částky najednou!</p>
            </Link>
            <Link href="/cs/blog/jak-podat-reklamaci-krok-za-krokem" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-slate-900 mb-2">Jak podat reklamaci krok za krokem</h4>
              <p className="text-sm text-slate-600">Kompletní návod pro úspěšnou reklamaci</p>
            </Link>
            <Link href="/cs/blog/zmeskane-prestupy-kompenzace" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-slate-900 mb-2">Zmeškaný přestup - kompenzace</h4>
              <p className="text-sm text-slate-600">První let jen 40min delay → €600 kompenzace!</p>
            </Link>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}
