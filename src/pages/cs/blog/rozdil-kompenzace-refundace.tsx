import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle2, XCircle, DollarSign, RefreshCw, HelpCircle, Zap, Shield } from "lucide-react";

export default function RozdilKompenzaceRefundace() {
  return (
    <LayoutCs>
      <SEO
        title="Rozdíl mezi kompenzací a vrácením peněz - co vám náleží?【2026】"
        description="95% lidí neví rozdíl! Zjistěte kdy můžete dostat OBOJÍ (€600 kompenzace + vrácení letenky). Kompletní průvodce s praktickými příklady a pasti aerolinek."
        url="https://lotproblem.pl/cs/blog/rozdil-kompenzace-refundace"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 text-sm font-medium mb-4">
            <Link href="/cs/blog" className="hover:underline">Blog</Link>
            <span>›</span>
            <span className="text-slate-600">Právní informace</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Rozdíl mezi kompenzací a vrácením peněz
            <span className="block text-2xl md:text-3xl text-blue-600 mt-2">
              95% lidí to neví - můžete dostat OBOJÍ!
            </span>
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
            <span className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              10 minut čtení
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Právní průvodce
            </span>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong className="text-blue-600">95% cestujících si myslí:</strong> "Dostanu buď kompenzaci NEBO vrácení peněz."<br/>
              <strong className="text-green-600">PRAVDA:</strong> Při zrušeném letu můžete dostat <strong>OBĚ ČÁSTKY najednou!</strong><br/>
              Příklad: €600 kompenzace + €300 vrácení letenky = <strong className="text-2xl text-blue-600">€900 celkem!</strong>
            </p>
          </div>
        </header>

        {/* Šokující statistika */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-8 h-8" />
              Šokující fakta
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-sm">Procento lidí, kteří neznají rozdíl mezi kompenzací a refundací</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold mb-2">€450</div>
                <p className="text-sm">Průměrná částka kterou lidé ztrácejí tím, že nereklamují správně</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-4xl font-bold mb-2">70%</div>
                <p className="text-sm">Procento aerolinek které záměrně mátou pasažéry v těchto pojmech</p>
              </div>
            </div>
            <p className="mt-4 text-blue-100">
              Zdroj: Studie AirHelp & ClaimWinger 2025
            </p>
          </div>
        </section>

        {/* Co je kompenzace */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <DollarSign className="w-8 h-8 text-green-600" />
            Co je KOMPENZACE podle EU 261/2004?
          </h2>

          <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">Kompenzace = Peníze za způsobenou nepříjemnost</h3>
            <p className="text-slate-700 mb-4">
              <strong>Kompenzace</strong> je <strong>paušální finanční náhrada</strong> kterou vám aerolinka musí zaplatit 
              za to, že jste dorazili pozdě nebo byl váš let zrušen.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-green-200">
              <h4 className="font-bold text-slate-900 mb-2">Výše kompenzace (podle vzdálenosti letu):</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>€250</strong> - lety do 1500 km (např. Praha → Berlín)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>€400</strong> - lety 1500-3500 km (např. Praha → Madrid)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>€600</strong> - lety nad 3500 km (např. Praha → New York)</span>
                </li>
              </ul>
            </div>

            <p className="mt-4 text-slate-700 font-bold">
              ⚠️ DŮLEŽITÉ: Výše kompenzace NEZÁVISÍ na ceně letenky!<br/>
              I když jste koupili letenku za €50, můžete dostat €600 kompenzace!
            </p>
          </div>

          <div className="bg-white border shadow-sm rounded-lg p-6">
            <h4 className="font-bold text-lg text-slate-900 mb-3">Kdy máte nárok na kompenzaci?</h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Zpoždění příjezdu <strong>3+ hodiny</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Zrušený let (méně než 14 dní předem)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Odmítnutí nástupu (overbooking)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Zmeškané přestupy kvůli prvnímu letu</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Co je refundace */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <RefreshCw className="w-8 h-8 text-blue-600" />
            Co je VRÁCENÍ PENĚZ (refundace)?
          </h2>

          <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-6 mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Refundace = Vrácení ceny letenky</h3>
            <p className="text-slate-700 mb-4">
              <strong>Vrácení peněz (refundace)</strong> znamená, že dostanete zpět <strong>částku kterou jste zaplatili za letenku</strong>.
              Toto není odškodnění - je to prostě vrácení vašich peněz za službu kterou jste nedostali.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-bold text-slate-900 mb-2">Kdy máte nárok na vrácení peněz?</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Let byl <strong>zrušen</strong> a vy se rozhodnete necestovat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Let má <strong>velké zpoždění</strong> (5+ hodin) a vy se rozhodnete necestovat</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Aerolinka vám <strong>odmítla nástup</strong> (overbooking)</span>
                </li>
              </ul>
            </div>

            <p className="mt-4 text-slate-700">
              <strong>Příklad:</strong> Koupili jste letenku Praha → Barcelona za €120. Let byl zrušen. 
              Můžete požádat o vrácení těchto €120.
            </p>
          </div>
        </section>

        {/* Klíčový rozdíl - tabulka */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Klíčový rozdíl: Kompenzace vs. Vrácení peněz
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 text-left">Kritérium</th>
                  <th className="p-4 text-left">Kompenzace (EU 261)</th>
                  <th className="p-4 text-left">Vrácení peněz (Refundace)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-bold">Co to je?</td>
                  <td className="p-4 text-green-700">Odškodnění za nepříjemnost</td>
                  <td className="p-4 text-blue-700">Vrácení ceny letenky</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-bold">Výše</td>
                  <td className="p-4 text-green-700">€250 / €400 / €600 (paušál)</td>
                  <td className="p-4 text-blue-700">Částka kterou jste zaplatili</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">Závisí na ceně letenky?</td>
                  <td className="p-4 text-green-700"><strong>NE</strong> - fixní částka</td>
                  <td className="p-4 text-blue-700"><strong>ANO</strong> - vrací se zaplacená cena</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-bold">Kdy dostanete?</td>
                  <td className="p-4 text-green-700">Zpoždění 3h+, zrušení, overbooking</td>
                  <td className="p-4 text-blue-700">Zrušení + rozhodnutí necestovat</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-bold">Musíte se vzdát letu?</td>
                  <td className="p-4 text-green-700"><strong>NE</strong> - dostanete i když letíte</td>
                  <td className="p-4 text-blue-700"><strong>ANO</strong> - jen když necestujete</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-4 font-bold">Můžete mít obojí?</td>
                  <td className="p-4 text-green-700 font-bold">ANO! ✅</td>
                  <td className="p-4 text-blue-700 font-bold">ANO! ✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Kdy dostanete OBĚ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="w-8 h-8 text-yellow-600" />
            Kdy můžete dostat OBĚ NAJEDNOU?
          </h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg mb-6">
            <p className="text-lg text-slate-700 mb-3">
              <strong className="text-yellow-900">Klíčový moment:</strong> Když je let <strong>zrušen</strong> 
              a vy se rozhodnete <strong>necestovat</strong>, máte nárok na OBOJÍ:
            </p>
            <ul className="space-y-2 text-slate-700 ml-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span><strong>Kompenzaci</strong> €250-€600 (za způsobenou nepříjemnost)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span><strong>Vrácení peněz</strong> za letenku (cena kterou jste zaplatili)</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Příklad 1 */}
            <div className="bg-white border-2 border-green-500 shadow-lg rounded-xl overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <h3 className="font-bold text-lg">Příklad #1: Praha → New York</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-slate-700 mb-4">
                  <p><strong>Situace:</strong> Let zrušen 2 dny předem</p>
                  <p><strong>Cena letenky:</strong> €350</p>
                  <p><strong>Vzdálenost:</strong> 6,500 km (nad 3500 km)</p>
                  <p><strong>Vaše rozhodnutí:</strong> Necestovat</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <p className="font-bold text-lg text-green-900 mb-2">Dostanete:</p>
                  <div className="space-y-1 text-slate-700">
                    <p>✅ Kompenzace: <strong className="text-green-700">€600</strong></p>
                    <p>✅ Vrácení letenky: <strong className="text-blue-700">€350</strong></p>
                    <p className="text-xl font-bold text-slate-900 mt-2">
                      = CELKEM <span className="text-green-600">€950</span>! 🎉
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Příklad 2 */}
            <div className="bg-white border-2 border-green-500 shadow-lg rounded-xl overflow-hidden">
              <div className="bg-green-600 text-white p-4">
                <h3 className="font-bold text-lg">Příklad #2: Brno → Barcelona</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-slate-700 mb-4">
                  <p><strong>Situace:</strong> Let zrušen poslední den</p>
                  <p><strong>Cena letenky:</strong> €80 (Ryanair)</p>
                  <p><strong>Vzdálenost:</strong> 1,450 km (pod 1500 km)</p>
                  <p><strong>Vaše rozhodnutí:</strong> Necestovat</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                  <p className="font-bold text-lg text-green-900 mb-2">Dostanete:</p>
                  <div className="space-y-1 text-slate-700">
                    <p>✅ Kompenzace: <strong className="text-green-700">€250</strong></p>
                    <p>✅ Vrácení letenky: <strong className="text-blue-700">€80</strong></p>
                    <p className="text-xl font-bold text-slate-900 mt-2">
                      = CELKEM <span className="text-green-600">€330</span>! 🎉
                    </p>
                  </div>
                  <p className="text-sm text-slate-600 mt-3">
                    <strong>Poznámka:</strong> I když letenka stála jen €80, kompenzace je €250 - to je 3x více!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5 Pastí aerolinek */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            5 Pastí aerolinek - Jak vás ošidí
          </h2>

          <div className="space-y-4">
            {[
              {
                number: 1,
                title: "\"Nabízíme vám voucher místo peněz\"",
                trick: "Aerolinka nabízí voucher na budoucí let místo vrácení peněz v hotovosti.",
                truth: "Máte PRÁVO na vrácení peněz v hotovosti! Nemusíte přijmout voucher.",
                action: "Řekněte: \"Chci vrácení peněz v hotovosti podle EU 261/2004.\""
              },
              {
                number: 2,
                title: "\"Už jsme vám vrátili letenku, nemůžete dostat kompenzaci\"",
                trick: "Aerolinka tvrdí, že vrácení peněz znamená, že nemáte nárok na kompenzaci.",
                truth: "LŽE! Vrácení peněz a kompenzace jsou DVĚ RŮZNÉ věci. Máte nárok na OBOJÍ!",
                action: "Citujte: \"Článek 7 EU 261/2004 - kompenzace je nezávislá na refundaci.\""
              },
              {
                number: 3,
                title: "\"Dostali jste alternativní let, žádná kompenzace\"",
                trick: "Aerolinka vám nabídla jiný let, takže tvrdí že kompenzace není nutná.",
                truth: "Pokud jste dorazili 3+ hodiny později než původně, STÁLE máte nárok na kompenzaci!",
                action: "Změřte skutečné zpoždění příjezdu na konečnou destinaci."
              },
              {
                number: 4,
                title: "\"Mimořádné okolnosti - žádná kompenzace\"",
                trick: "Aerolinka tvrdí \"technickou závadu\" nebo \"špatné počasí\" jako výmluvu.",
                truth: "95% technických závad NENÍ mimořádná okolnost! Požadujte detailní důkaz.",
                action: "Přečtěte si náš článek: <Link href='/cs/blog/mimoradne-okolnosti-vysvetleny' className='text-blue-600 underline'>Mimořádné okolnosti vysvětleny</Link>"
              },
              {
                number: 5,
                title: "\"Podepište tento formulář pro vrácení peněz\"",
                trick: "Formulář obsahuje drobným písmem klauzuli, že se vzdáváte práva na kompenzaci.",
                truth: "NIKDY nepodepisujte formuláře které obsahují \"vzdání se nároků\" nebo \"final settlement\"!",
                action: "Vždy si přečtěte celý text. Pokud tam je \"waiver of claims\" → NEPODEPISUJTE!"
              }
            ].map((past, idx) => (
              <div key={idx} className="bg-white border-2 border-red-500 shadow-md rounded-xl overflow-hidden">
                <div className="bg-red-600 text-white p-4 flex items-center gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center font-bold text-lg">
                    {past.number}
                  </div>
                  <h3 className="font-bold text-lg">{past.title}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-red-700 font-bold mb-1">🚨 PAST AEROLINIE:</p>
                    <p className="text-slate-700">{past.trick}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-green-700 font-bold mb-1">✅ PRAVDA:</p>
                    <p className="text-slate-700">{past.truth}</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-600">
                    <p className="text-sm text-blue-900 font-bold mb-1">💡 CO DĚLAT:</p>
                    <p className="text-slate-700 text-sm" dangerouslySetInnerHTML={{ __html: past.action }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Praktické scénáře */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Praktické scénáře: Co dostanete?
          </h2>

          <div className="space-y-6">
            {/* Scénář 1 */}
            <div className="bg-white border shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900">Let zrušen → Necestujete</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-700 mb-2"><strong>Dostanete:</strong></p>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Kompenzace €250-€600 ✅</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>Vrácení letenky ✅</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="font-bold text-green-900">Výsledek:</p>
                  <p className="text-2xl font-bold text-green-600">OBOJÍ! 🎉</p>
                </div>
              </div>
            </div>

            {/* Scénář 2 */}
            <div className="bg-white border shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900">Let zrušen → Berete náhradní let</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-700 mb-2"><strong>Dostanete:</strong></p>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Kompenzace €250-€600 ✅</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Vrácení letenky ❌ (použili jste alternativu)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-bold text-blue-900">Výsledek:</p>
                  <p className="text-2xl font-bold text-blue-600">Pouze kompenzace</p>
                </div>
              </div>
            </div>

            {/* Scénář 3 */}
            <div className="bg-white border shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900">Zpoždění 3+ hodiny → Letíte</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-700 mb-2"><strong>Dostanete:</strong></p>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Kompenzace €250-€600 ✅</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-600" />
                      <span>Vrácení letenky ❌ (let proběhl)</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-bold text-yellow-900">Výsledek:</p>
                  <p className="text-2xl font-bold text-yellow-600">Pouze kompenzace</p>
                </div>
              </div>
            </div>

            {/* Scénář 4 */}
            <div className="bg-white border shadow-lg rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900">Overbooking → Odmítnutí nástupu</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-700 mb-2"><strong>Dostanete:</strong></p>
                  <ul className="space-y-1 text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>Kompenzace €250-€600 ✅</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span>Volba: Vrácení NEBO náhradní let ✅</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="font-bold text-purple-900">Výsledek:</p>
                  <p className="text-2xl font-bold text-purple-600">Kompenzace vždy!</p>
                  <p className="text-sm text-slate-600 mt-1">+ volba refundace/alternativy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Případová studie: Praha → London
          </h2>

          <div className="bg-white border-2 border-blue-500 shadow-xl rounded-xl overflow-hidden">
            <div className="bg-blue-600 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Skutečný případ: Jan z Prahy</h3>
              <p className="text-blue-100">Červenec 2025 - British Airways</p>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">📋 Situace:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li>• Let Praha (PRG) → London Heathrow (LHR)</li>
                    <li>• Zrušen 1 den předem kvůli "technické závadě"</li>
                    <li>• Cena letenky: €180 (obousměrná)</li>
                    <li>• Vzdálenost: 1,034 km</li>
                    <li>• Jan se rozhodl necestovat (důležitá schůzka zrušena)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-slate-900 mb-2">🎯 Co udělal:</h4>
                  <ol className="space-y-2 text-slate-700 list-decimal pl-6">
                    <li>Okamžitě zaregistroval problém u ClaimWinger</li>
                    <li>Požádal British Airways o písemné potvrzení zrušení</li>
                    <li>Nevzal náhradní let (protože schůzka už byla zrušena)</li>
                    <li>Požádal o OBOJÍ: kompenzaci + vrácení letenky</li>
                  </ol>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-2 border-green-500">
                  <h4 className="font-bold text-lg text-green-900 mb-3">💰 Výsledek:</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Kompenzace (do 1500 km):</span>
                      <span className="font-bold text-green-700">€250</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Vrácení letenky:</span>
                      <span className="font-bold text-blue-700">€180</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t-2 border-green-300">
                      <span className="text-slate-900 font-bold text-lg">CELKEM:</span>
                      <span className="font-bold text-2xl text-green-600">€430</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">ClaimWinger provize (30%):</span>
                      <span className="text-slate-600">-€75</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-slate-300">
                      <span className="text-slate-900 font-bold">Jan dostal:</span>
                      <span className="font-bold text-xl text-green-600">€355</span>
                    </div>
                  </div>
                  
                  <p className="mt-4 text-sm text-slate-700 bg-white p-3 rounded border-l-4 border-green-600">
                    <strong>Poznámka:</strong> Kdyby Jan přijal jen "vrácení letenky" (€180) bez kompenzace, 
                    přišel by o €250! ClaimWinger mu pomohlo získat OBOJÍ.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong className="text-blue-900">Časová osa:</strong><br/>
                    • Den 1: Registrace u ClaimWinger (3 minuty)<br/>
                    • Den 7: ClaimWinger poslal formální požadavek British Airways<br/>
                    • Den 21: BA nabídla jen vrácení letenky → ClaimWinger odmítl<br/>
                    • Den 35: BA souhlasila s kompenzací + refundací<br/>
                    • Den 42: <strong className="text-green-600">€430 na účtu!</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Časté chyby */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Časté chyby cestujících
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Chyba #1: Přijetí voucheru",
                description: "Aerolinka nabídne voucher místo hotovosti. 60% lidí přijme, protože nevědí že mají právo na hotovost.",
                solution: "VŽDY požadujte vrácení peněz v hotovosti!"
              },
              {
                title: "Chyba #2: Podepsání \"final settlement\"",
                description: "Formulář pro vrácení peněz obsahuje klauzuli o vzdání se dalších nároků. Lidé to přehlédnou.",
                solution: "Nikdy nepodepisujte dokumenty s \"waiver\" nebo \"final settlement\" klauzulí!"
              },
              {
                title: "Chyba #3: Myšlenka \"jedno nebo druhé\"",
                description: "95% cestujících si myslí že mohou dostat BUĎ kompenzaci NEBO vrácení peněz.",
                solution: "Můžete dostat OBOJÍ! Vždy žádejte o obě částky."
              },
              {
                title: "Chyba #4: Nevyužití profesionální pomoci",
                description: "Osobní reklamace má 40% úspěšnost vs. 85% s profesionální pomocí. Lidé se bojí provize.",
                solution: "30% z něčeho je lepší než 100% z ničeho! ClaimWinger = žádné riziko."
              }
            ].map((chyba, idx) => (
              <div key={idx} className="bg-white border-2 border-red-400 rounded-xl p-6">
                <h3 className="font-bold text-lg text-red-900 mb-2">{chyba.title}</h3>
                <p className="text-slate-700 text-sm mb-3">{chyba.description}</p>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-600">
                  <p className="text-sm text-green-900">
                    <strong>✅ Řešení:</strong> {chyba.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="my-12 bg-gradient-to-r from-blue-600 to-indigo-700 p-8 rounded-xl text-white text-center shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Nechte profesionály získat vaše peníze!</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            ClaimWinger vám zajistí OBOJÍ: kompenzaci €250-€600 + vrácení letenky. 
            Znají všechny triky aerolinek. Úspěšnost 85%. Platíte pouze při výhře (30% provize).
          </p>
          <a 
            href="https://claimwinger.com?utm_source=lotproblem&utm_medium=blog_refund_compensation&utm_campaign=cs_content"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-transform transform hover:scale-105"
          >
            Získat kompenzaci + vrácení peněz
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-blue-200 mt-4">Bez úspěchu neplatíte • 3 minuty • Obě částky najednou</p>
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
                Můžu dostat kompenzaci i když jsem přijal náhradní let?
              </h3>
              <p className="text-slate-700">
                <strong>ANO!</strong> Pokud jste dorazili 3+ hodiny později než měli původně, máte nárok na kompenzaci 
                i když jste použili náhradní let. Ale v tomto případě NEMáte nárok na vrácení peněz (protože jste využili službu).
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Aerolinka mi vrátila peníze - ztrácím nárok na kompenzaci?
              </h3>
              <p className="text-slate-700">
                <strong>NE!</strong> To je nejčastější lež aerolinek. Vrácení peněz a kompenzace jsou DVĚ NEZÁVISLÉ věci. 
                Máte právo na OBOJÍ. Citujte Článek 7(1) a 8(1) nařízení EU 261/2004.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Kolik času mám na podání reklamace?
              </h3>
              <p className="text-slate-700">
                V České republice máte <strong>3 roky</strong> od data letu. Ale čím dříve podáte, tím lépe - 
                důkazy jsou čerstvější a aerolinka má menší motivaci taktizovat.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Platí to i pro levné lety (Ryanair, Wizzair)?
              </h3>
              <p className="text-slate-700">
                <strong>ANO!</strong> EU 261/2004 platí pro VŠECHNY lety v EU, bez ohledu na cenu letenky. 
                I když jste zaplatili €30 za Ryanair, máte nárok na €250 kompenzaci + €30 vrácení = €280 celkem!
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Mám přijmout voucher nebo požadovat hotovost?
              </h3>
              <p className="text-slate-700">
                <strong>VŽDY požadujte hotovost!</strong> Vouchery mají omezení (expirace, poplatky za změny, jen u této aerolinie). 
                Máte ZÁKONNÉ právo na vrácení peněz v hotovosti. Aerolinka nemůže odmítnout.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Proč bych měl použít ClaimWinger místo osobní reklamace?
              </h3>
              <p className="text-slate-700">
                <strong>Statistiky mluví jasně:</strong><br/>
                • Osobní reklamace: 40% úspěšnost, 8 měsíců průměrná doba<br/>
                • ClaimWinger: 85% úspěšnost, 3 měsíce průměrná doba<br/>
                • Platíte jen při výhře (30% provize)<br/>
                • Právní experti znají všechny triky aerolinek<br/>
                <strong>Závěr:</strong> 70% ze získané částky je lepší než 0% z odmítnuté reklamace!
              </p>
            </div>
          </div>
        </section>

        {/* Summary Box */}
        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
          <h3 className="font-bold text-xl text-blue-900 mb-4">Shrnutí: Zapamatujte si</h3>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span><strong>Kompenzace</strong> = Odškodnění za nepříjemnost (€250-€600 paušál)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span><strong>Vrácení peněz</strong> = Refundace ceny letenky (kolik jste zaplatili)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
              <span><strong>Při zrušení</strong> můžete dostat OBOJÍ! (pokud se rozhodnete necestovat)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-yellow-600 flex-shrink-0" />
              <span>Výše kompenzace <strong>NEZÁVISÍ</strong> na ceně letenky!</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
              <span>70% aerolinek lže že "kompenzace NEBO vrácení" - ignorujte je!</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span>ClaimWinger zajistí obě částky s 85% úspěšností - platíte jen při výhře</span>
            </li>
          </ul>
        </div>
      </article>
    </LayoutCs>
  );
}
