import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, Shield, FileText, HelpCircle, Zap } from "lucide-react";

export default function MimoradneOkolnostiVysvetleny() {
  return (
    <LayoutCs>
      <SEO
        title="Mimořádné okolnosti vysvětleny【2026】Kdy aerolinka může odmítnout kompenzaci?"
        description="60% aerolinek lže o mimořádných okolnostech! Zjistěte pravdu o technických závadách, počasí a stávkách. Kompletní průvodce jak zpochybnit odmítnutí a získat €250-€600."
        url="https://lotproblem.pl/cs/blog/mimoradne-okolnosti-vysvetleny"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
            <Link href="/cs/blog" className="hover:underline">Blog</Link>
            <span>›</span>
            <span className="text-slate-600">Práva cestujících</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Mimořádné okolnosti vysvětleny
            <span className="block text-2xl md:text-3xl text-red-600 mt-2">
              60% aerolinek lže! Zjistěte pravdu a získejte své peníze
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              15 minut čtení
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Ochrana práv
            </span>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong className="text-red-600">"Mimořádné okolnosti"</strong> je nejčastější výmluva aerolinek pro odmítnutí kompenzace.
              Výzkumy ukazují, že <strong className="text-red-600">v 60% případů aerolinka lže</strong>!
              Technická závada, "špatné počasí" nebo "control tower delay" většinou <strong>NEJSOU</strong> mimořádné okolnosti.
            </p>
          </div>
        </header>

        {/* Úvodní šokující fakt */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-8 h-8" />
              Šokující pravda
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold mb-2">60%</div>
                <p className="text-sm">Procento odmítnutí kompenzací s falešným odůvodněním "mimořádné okolnosti"</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold mb-2">€420</div>
                <p className="text-sm">Průměrná částka kterou aerolinka ušetří odmítnutím jedné žádosti</p>
              </div>
            </div>
            <p className="mt-4 text-blue-100">
              Zdroj: Studie AirHelp 2025 - analýza 150,000 reklamací
            </p>
          </div>
        </section>

        {/* Co jsou mimořádné okolnosti */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Co jsou "Mimořádné okolnosti" podle EU 261/2004?
          </h2>
          
          <div className="bg-white border shadow-md rounded-xl p-6 mb-6">
            <p className="text-lg text-slate-700 mb-4">
              Podle Nařízení EU 261/2004, <strong>mimořádné okolnosti</strong> jsou události které:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li><strong>Nebyly pod kontrolou aerolinie</strong> (external causes)</li>
              <li><strong>Nebylo možné jim předejít</strong> ani při maximální péči</li>
              <li><strong>Aerolinka prokáže</strong> přímou souvislost s rušením/zpožděním</li>
            </ol>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="font-bold text-lg text-blue-900 mb-3">Klíčová otázka:</h3>
            <p className="text-slate-700 text-lg">
              "Mohla aerolinka této situaci zabránit, i když by udělala všechno správně?"
            </p>
            <p className="text-slate-600 text-sm mt-2">
              Pokud ANO → Musí platit kompenzaci ✅<br/>
              Pokud NE → Může odmítnout ❌
            </p>
          </div>
        </section>

        {/* Legitimní vs. Falešné výmluvy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Legitimní vs. Falešné výmluvy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* LEGITIMNÍ */}
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-900">Skutečné mimořádné okolnosti</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Přírodní katastrofy:</strong> Sopečný popel (Island 2010), hurikány, zemětřesení</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Bezpečnostní rizika:</strong> Terorismus, válečný konflikt, politická nestabilita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Srážka s ptáky (bird strike):</strong> Pokud způsobila závažné poškození</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Zdravotní nouzová situace:</strong> Pasažér vyžaduje okamžitou lékařskou pomoc</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Skrytá výrobní vada:</strong> Defekt který výrobce nezjistil při testech</span>
                </li>
              </ul>
            </div>

            {/* FALEŠNÉ */}
            <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-red-900">Falešné výmluvy aerolinek</h3>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Technická závada:</strong> 95% případů NENÍ mimořádná okolnost!</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>"Špatné počasí":</strong> Vágní tvrzení bez specifikace (mlha, déšť = OK pro létání)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Zpožděné letadlo z předchozího letu:</strong> Problém plánování aerolinie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Chybějící posádka:</strong> Zodpovědnost aerolinie za personální zajištění</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">✗</span>
                  <span><strong>Stávka zaměstnanců aerolinie:</strong> Interní záležitost (wild-cat strike)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technická závada - mýty vs. pravda */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-600" />
            Technická závada - Největší mýtus!
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-6">
            <p className="text-lg text-slate-700 mb-3">
              <strong className="text-yellow-900">95% technických závad NEJSOU mimořádné okolnosti!</strong>
            </p>
            <p className="text-slate-700">
              Aerolinka má povinnost udržovat své letadlo v perfektním stavu. To je součást normální operace.
              Pouze <strong>skryté výrobní vady</strong>, které nebylo možné předvídat, jsou uznány jako "extraordinary".
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white border shadow-sm rounded-lg p-5">
              <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-red-600" />
                ❌ NENÍ mimořádná okolnost:
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Prasklá pneumatika</li>
                <li>Porucha motoru (běžná opotřebení)</li>
                <li>Problém s hydraulikou</li>
                <li>Výměna baterie</li>
                <li>Závada software palubního počítače</li>
              </ul>
              <p className="text-sm text-slate-600 mt-3">
                <strong>Proč?</strong> Aerolinka má zodpovědnost za preventivní údržbu a záložní letadla.
              </p>
            </div>

            <div className="bg-white border shadow-sm rounded-lg p-5">
              <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                ✅ JE mimořádná okolnost (vzácné!):
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-slate-700">
                <li>Skrytá výrobní vada (hidden manufacturing defect) zjištěná až při letu</li>
                <li>Defekt který výrobce (Boeing/Airbus) nezjistil při testech</li>
                <li>Sabotáž třetí stranou</li>
              </ul>
              <p className="text-sm text-slate-600 mt-3">
                <strong>Důležité:</strong> Aerolinka MUSÍ prokázat, že závada byla skutečně nepředvídatelná!
              </p>
            </div>
          </div>
        </section>

        {/* 3 rozpoznávací testy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            3 testy: Jak rozpoznat falešnou výmluvu
          </h2>

          <div className="space-y-6">
            {[
              {
                number: 1,
                title: "Test #1: Kontrola aerolinie?",
                question: "Mohla aerolinka ovlivnit situaci?",
                examples: [
                  { situation: "Technická závada", control: "ANO", result: "Musí platit", color: "red" },
                  { situation: "Sopečný popel", control: "NE", result: "Může odmítnout", color: "green" },
                  { situation: "Chybějící personál", control: "ANO", result: "Musí platit", color: "red" },
                  { situation: "Uzavřený vzdušný prostor", control: "NE", result: "Může odmítnout", color: "green" }
                ]
              },
              {
                number: 2,
                title: "Test #2: Včasné informování?",
                question: "Oznámila aerolinka zrušení více než 14 dní předem?",
                info: "Pokud aerolinka věděla o problému více než 14 dní předem, musela vám nabídnout alternativu nebo kompenzaci. 'Mimořádná okolnost' platí jen pro náhlé, nepředvídatelné události.",
                examples: [
                  { situation: "Informováno &gt;14 dní předem", result: "Žádná kompenzace (pokud nabídli alternativu)", color: "green" },
                  { situation: "Informováno &lt;14 dní", result: "Plná kompenzace €250-€600", color: "red" }
                ]
              },
              {
                number: 3,
                title: "Test #3: Snaha aerolinie vyřešit problém?",
                question: "Podnikla aerolinka všechny rozumné kroky k vyřešení situace?",
                info: "I když došlo k mimořádné okolnosti (např. počasí), aerolinka má povinnost minimalizovat dopad. Pokud měla k dispozici záložní letadlo nebo posádku a nepoužila je, není to výmluva!",
                examples: [
                  { situation: "Nepřivolali záložní letadlo", result: "Musí platit", color: "red" },
                  { situation: "Opravdu nebylo řešení", result: "Může odmítnout", color: "green" }
                ]
              }
            ].map((test, idx) => (
              <div key={idx} className="bg-white border shadow-md rounded-xl overflow-hidden">
                <div className="bg-slate-900 text-white p-4">
                  <h3 className="text-xl font-bold">{test.title}</h3>
                  <p className="text-slate-300 text-sm mt-1">{test.question}</p>
                </div>
                <div className="p-6">
                  {test.info && (
                    <p className="text-slate-700 mb-4 bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                      {test.info}
                    </p>
                  )}
                  <div className="space-y-2">
                    {test.examples.map((ex, i) => (
                      <div key={i} className={`flex justify-between items-center p-3 rounded ${
                        ex.color === 'red' ? 'bg-red-50 border border-red-200' : 'bg-green-50 border border-green-200'
                      }`}>
                        <span className="text-slate-700 font-medium">{ex.situation}</span>
                        {ex.control && <span className="text-slate-600">{ex.control}</span>}
                        <span className={`font-bold ${ex.color === 'red' ? 'text-red-700' : 'text-green-700'}`}>
                          {ex.result}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Jak zpochybnit odmítnutí */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Jak zpochybnit odmítnutí aerolinie?
          </h2>

          <div className="bg-white border shadow-lg rounded-xl p-6">
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Požádejte o DETAILNÍ vysvětlení</h3>
                  <p className="text-slate-700">
                    Nestačí "technická závada". Požadujte: Jaká konkrétní komponenta? Kdy byla naposledy servisována? 
                    Proč nebylo použito náhradní letadlo?
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Zkontrolujte počasí na letišti</h3>
                  <p className="text-slate-700">
                    Tvrdí "špatné počasí"? Ověřte na FlightRadar24 nebo METAR reporty. Pokud ostatní lety létaly normálně, 
                    je to důkaz že "počasí" byla lež!
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Citujte právní precedens</h3>
                  <p className="text-slate-700">
                    Rozhodnutí ESD C-549/07 (Wallentin-Hermann): "Technická závada není per se mimořádná okolnost."
                    Aerolinka musí prokázat, že závada byla způsobena nepředvídatelnou příčinou.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Použijte profesionální službu</h3>
                  <p className="text-slate-700">
                    Společnosti jako ClaimWinger mají zkušenosti s tisíci případů a znají všechny triky aerolinek. 
                    Úspěšnost profesionálních nároků je 85% vs. 40% při osobní reklamaci.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">Shromážděte důkazy</h3>
                  <p className="text-slate-700">
                    Fotografie, videa, svědecké výpovědi, METAR počasí, FlightRadar24 historie, servisní záznamy letadla. 
                    Čím více důkazů, tím silnější je váš případ.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Skutečné případy
          </h2>

          <div className="space-y-6">
            {/* Success Story */}
            <div className="bg-white border-2 border-green-500 shadow-lg rounded-xl overflow-hidden">
              <div className="bg-green-600 text-white p-4 flex justify-between items-center">
                <span className="font-bold text-lg">Úspěšný případ: Praha → Amsterdam</span>
                <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-bold">
                  Vyplaceno €400
                </span>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-3">
                  <strong>Situace:</strong> KLM zrušila let s odůvodněním "technická závada motoru". 
                  Pasažér požádal o detaily - aerolinka odmítla poskytnout.
                </p>
                <p className="text-slate-700 mb-3">
                  <strong>Akce:</strong> Pasažér ověřil servisní záznamy letadla přes veřejné registry. 
                  Objevil, že stejné letadlo mělo problémy týden předem, ale údržba byla odložena.
                </p>
                <p className="text-green-700 font-bold">
                  <strong>Výsledek:</strong> ✅ Prokázáno že závada byla předvídatelná a způsobená nedostatečnou údržbou. 
                  KLM musela zaplatit plnou kompenzaci €400!
                </p>
              </div>
            </div>

            {/* Failed Story */}
            <div className="bg-white border-2 border-red-500 shadow-lg rounded-xl overflow-hidden">
              <div className="bg-red-600 text-white p-4 flex justify-between items-center">
                <span className="font-bold text-lg">Neúspěšný případ: Ostrava → London</span>
                <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold">
                  Odmítnuto €0
                </span>
              </div>
              <div className="p-6">
                <p className="text-slate-700 mb-3">
                  <strong>Situace:</strong> Let zrušen kvůli "špatnému počasí" - hustá mlha. 
                  Pasažér podal reklamaci bez kontroly dalších detailů.
                </p>
                <p className="text-slate-700 mb-3">
                  <strong>Chyba:</strong> Pasažér neověřil zda:
                  - Jiné lety z Ostravy létaly normálně (≈ létaly!)
                  - Meteorologické reporty (METAR) skutečně zakazovaly přistání
                  - Tato aerolinka byla jediná s problémem
                </p>
                <p className="text-red-700 font-bold">
                  <strong>Výsledek:</strong> ❌ Bez důkazů nemohl zpochybnit tvrzení aerolinie. 
                  Pokud by použil ClaimWinger, profesionálové by získali METAR data a dokázali že "mlha" byla výmluva.
                </p>
              </div>
            </div>

            {/* Lesson Learned Box */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-lg text-blue-900 mb-2">Ponaučení:</h3>
              <p className="text-slate-700 mb-2">
                Rozdíl mezi úspěchem a neúspěchem je často <strong>kvalita důkazů</strong> a <strong>právní argumentace</strong>.
              </p>
              <p className="text-slate-700">
                Proto profesionální služby jako <strong>ClaimWinger</strong> dosahují 85% úspěšnosti - 
                mají přístup k databázím, právním precedensům a zkušenostem s tisíci případy.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="my-12 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-xl text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Aerolinka odmítla vaši reklamaci?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            60% odmítnutí jsou neoprávněná! ClaimWinger zná všechny triky aerolinek a úspěšně zpochybní 
            falešné výmluvy. Profesionální právníci, databáze precedensů, 85% úspěšnost.
          </p>
          <a 
            href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog_extraordinary&utm_campaign=cs_content"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
          >
            Zpochybnit odmítnutí zdarma
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-blue-200 mt-4">Bez úspěchu neplatíte • 30% provize jen při výhře • 3 minuty</p>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            Časté otázky
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Aerolinka tvrdí "technická závada" - mohu něco dělat?
              </h3>
              <p className="text-slate-700">
                <strong>Ano!</strong> Požádejte o detailní technickou zprávu (technical report). 
                Aerolinka musí specifikovat: konkrétní komponenta, příčina závady, důvod proč to nebylo zjištěno při údržbě, 
                proč nebylo použito náhradní letadlo. Většina aerolinek to odmítne specifikovat = důkaz že lžou.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Je "špatné počasí" vždy mimořádná okolnost?
              </h3>
              <p className="text-slate-700">
                <strong>NE!</strong> Musí jít o extrémní počasí které skutečně znemožňuje bezpečný let 
                (bouře, orkán, ledovka na ranveji). Normální déšť, mlha nebo vítr nejsou výmluva pokud ostatní lety 
                z téhož letiště létaly normálně. Vždy ověřte METAR reporty a FlightRadar24 historii!
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Jak dlouho mám na podání reklamace?
              </h3>
              <p className="text-slate-700">
                V České republice platí <strong>3letá promlčecí lhůta</strong> od data letu. 
                Ale čím dříve podáte, tím lépe - důkazy jsou čerstvější a aerolinka má menší motivaci odkládat.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Stojí za to najmout profesionální službu?
              </h3>
              <p className="text-slate-700">
                <strong>Rozhodně ano!</strong> Statistiky ukazují:<br/>
                • Osobní reklamace: 40% úspěšnost, průměrná doba 8 měsíců<br/>
                • Profesionální služba (ClaimWinger): 85% úspěšnost, průměrná doba 3 měsíce<br/>
                Navíc platíte pouze při úspěchu (30% provize). Pokud nevyhrajete, nic neplatíte.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Může aerolinka použít COVID-19 jako výmluvu i v roce 2026?
              </h3>
              <p className="text-slate-700">
                <strong>NE!</strong> COVID-19 byl uznáván jako mimořádná okolnost pouze do konce 2022 
                (během pandemie a cestovních zákazů). Od roku 2023 již není akceptován jako důvod pro odmítnutí kompenzace, 
                protože aerolinie měly dostatek času se přizpůsobit a operovat normálně.
              </p>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-bold text-xl text-blue-900 mb-4">Shrnutí: Co si zapamatovat</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>60% aerolinek lže o "mimořádných okolnostech" - nezbaví vás to práva na kompenzaci!</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Technická závada je ve 95% případů ZODPOVĚDNOST aerolinie, ne výmluva</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Vždy požadujte detailní vysvětlení - pokud odmítnou, je to důkaz že lžou</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Ověřte počasí (METAR), FlightRadar24 a servisní historii letadla</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>Profesionální služby dosahují 85% úspěšnosti vs. 40% při osobní reklamaci</span>
            </li>
          </ul>
        </div>
      </article>
    </LayoutCs>
  );
}