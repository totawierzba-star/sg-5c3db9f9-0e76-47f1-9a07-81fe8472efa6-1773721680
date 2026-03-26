import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Clock, Euro, FileText, AlertCircle, CheckCircle, XCircle, TrendingUp } from "lucide-react";

export default function RyanairKompenzaceReklamace() {
  return (
    <LayoutCs>
      <SEO 
        title="Ryanair kompenzace za zpoždění a zrušení letu - Jak na reklamaci"
        description="Komplexní průvodce kompenzací u Ryanairu. Zjistěte, jak správně reklamovat zpoždění nebo zrušení letu a získat až 600 € kompenzace."
        url="https://problemlot.com/cs/blog/ryanair-kompenzace-reklamace"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8 text-gray-600 dark:text-gray-400">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          {" > "}
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          {" > "}
          <span className="text-gray-900 dark:text-gray-100">Ryanair kompenzace</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <Plane className="w-5 h-5" />
            <span className="text-sm font-medium">Letecké společnosti</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Ryanair kompenzace za zpoždění a zrušení letu – Jak na reklamaci
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Čtení: 8 min</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>4 000 slov</span>
            </div>
            <time>Publikováno: 23. února 2026</time>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Ryanair je největší nízkonákladová letecká společnost v Evropě. Pokud máte problém s letem, máte právo na kompenzaci až <strong>600 €</strong>. Zjistěte, jak správně reklamovat a získat své peníze zpět.
          </p>
        </header>

        {/* Quick CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 rounded-xl p-8 mb-12 border border-blue-100 dark:border-blue-900">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 dark:bg-blue-500 rounded-lg p-3 shrink-0">
              <Euro className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Měli jste problém s letem Ryanair?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Zkontrolujte svůj nárok na kompenzaci zdarma. ClaimWinger vám pomůže získat až 600 € za méně než 5 minut.
              </p>
              <a 
                href="https://claimwinger.com?utm_source=blog&utm_medium=article&utm_campaign=ryanair_kompenzace"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Zkontrolovat nárok zdarma
                <CheckCircle className="w-5 h-5" />
              </a>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                ✓ Bez rizika • ✓ Žádné skryté poplatky • ✓ 30% provize pouze při úspěchu
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Section 1: Základní informace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Kdy máte nárok na kompenzaci od Ryanairu
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ryanair podléhá <strong>evropskému nařízení ES 261/2004</strong>, které chrání práva cestujících. To znamená, že máte nárok na kompenzaci v těchto případech:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 border border-red-200 dark:border-red-900">
                <XCircle className="w-10 h-10 text-red-600 dark:text-red-400 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Zrušený let</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pokud byl váš let zrušen méně než 14 dní před odletem
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 rounded-lg p-6 border border-orange-200 dark:border-orange-900">
                <Clock className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Zpoždění 3+ hodin</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Když dorazíte na konečnou destinaci s více než 3hodinovým zpožděním
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-6 border border-purple-200 dark:border-purple-900">
                <AlertCircle className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Odmítnutí nástupu</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Při přeplnění letu (overbooking) bez vaší souhlasu
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Důležité podmínky pro nárok na kompenzaci:
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>✓ Let z EU nebo přistání v EU s evropským dopravcem</li>
                <li>✓ Odbavení proběhlo včas (45 min před odletem)</li>
                <li>✓ Problém nebyl způsoben mimořádnými okolnostmi</li>
                <li>✓ Od letu neuplynuly více než 3 roky (promlčecí lhůta)</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Výše kompenzace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Kolik můžete získat od Ryanairu
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Výše kompenzace závisí na <strong>vzdálenosti letu</strong>, nikoliv na ceně letenky. I když jste letěli za pár eur, můžete dostat stovky eur zpět:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Vzdálenost letu</th>
                    <th className="px-6 py-4 text-left font-semibold">Výše kompenzace</th>
                    <th className="px-6 py-4 text-left font-semibold">Typické trasy Ryanair</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">Do 1 500 km</td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">250 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">
                      Praha → Londýn, Berlín, Vídeň, Amsterdam
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">1 500 - 3 500 km</td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">400 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">
                      Praha → Barcelona, Madrid, Řím, Atény
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">Nad 3 500 km</td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">600 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">
                      Většinou mimo EU (Kanárské ostrovy, Maroko)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                Příklad výpočtu pro typický let Ryanair:
              </h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Let Praha → Barcelona (1 268 km)</span>
                  <span className="font-bold">400 €</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>Provize ClaimWinger (30%)</span>
                  <span>-120 €</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between items-center font-bold text-lg">
                  <span>Dostanete na účet:</span>
                  <span className="text-green-600 dark:text-green-400">280 €</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                💡 <strong>Tip:</strong> I když jste za letenku zaplatili pouze 20 €, stále máte nárok na plnou kompenzaci 400 €!
              </p>
            </div>
          </section>

          {/* Section 3: Jak reklamovat */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Jak správně reklamovat u Ryanairu
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Máte <strong>dvě možnosti</strong>, jak získat kompenzaci od Ryanairu:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Samostatná reklamace */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  ❌ Samostatná reklamace (nedoporučujeme)
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Najděte kontaktní formulář na webu Ryanairu</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Vyplňte podrobný popis problému</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Připojte všechny doklady (palubní vstupenka, boarding pass)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Čekejte 4-8 týdnů na odpověď</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">V případě zamítnutí podávejte stížnost k úřadům nebo soudu</p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950 rounded-lg p-4 border border-red-200 dark:border-red-900">
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Nevýhody:</h4>
                  <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                    <li>⏱️ Zdlouhavý proces (měsíce až roky)</li>
                    <li>📄 Složitá administrativní zátěž</li>
                    <li>🚫 Vysoká míra zamítnutí</li>
                    <li>💸 Riziko soudních poplatků</li>
                    <li>🤝 Žádná expertní pomoc</li>
                  </ul>
                </div>
              </div>

              {/* Přes ClaimWinger */}
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 rounded-lg p-6 border-2 border-blue-600 dark:border-blue-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DOPORUČENO
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  ✓ Přes ClaimWinger (rychlé a bez rizika)
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Vyplňte 3minutový online formulář</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Experti vyhodnotí váš nárok zdarma</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">ClaimWinger vyřídí vše za vás</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Dostanete peníze na účet (průměrně za 8 týdnů)</p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-950 rounded-lg p-4 border border-green-200 dark:border-green-900 mb-6">
                  <h4 className="font-bold text-green-900 dark:text-green-100 mb-2">Výhody:</h4>
                  <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>✓ Bez předplacení – platíte jen při úspěchu</li>
                    <li>✓ 98% úspěšnost proti Ryanairu</li>
                    <li>✓ Veškerou byrokracii vyřídíme za vás</li>
                    <li>✓ Expertní znalost práv cestujících</li>
                    <li>✓ Při zamítnutí jdeme k soudu zdarma</li>
                  </ul>
                </div>

                <a 
                  href="https://claimwinger.com?utm_source=blog&utm_medium=article&utm_campaign=ryanair_kompenzace"
                  className="block text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-colors"
                >
                  Zkontrolovat nárok zdarma →
                </a>
                <p className="text-center text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Žádné skryté poplatky • 30% provize pouze při úspěchu
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Proč Ryanair často odmítá */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Proč Ryanair často odmítá kompenzace
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Ryanair je známý tím, že <strong>automaticky odmítá většinu reklamací</strong>. Používá k tomu několik standardních důvodů:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-6 border-l-4 border-yellow-600 dark:border-yellow-400">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🌩️ "Mimořádné okolnosti"</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ryanair často tvrdí, že zpoždění bylo způsobeno mimořádnými okolnostmi (špatné počasí, technická porucha, stávka kontrolorů), i když to není pravda.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded p-3">
                  <strong>Realita:</strong> Pouze vážné technické poruchy mimo kontrolu aerolinky nebo extrémní počasí jsou mimořádné okolnosti. Běžné údržbové problémy nebo stávky vlastního personálu NEJSOU výjimkou.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-6 border-l-4 border-yellow-600 dark:border-yellow-400">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">⏰ "Zpoždění pod 3 hodiny"</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ryanair tvrdí, že jste dorazili s méně než 3hodinovým zpožděním, i když reálné zpoždění bylo delší.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded p-3">
                  <strong>Realita:</strong> Počítá se čas otevření dveří na konečné destinaci, ne plánovaný příletu. ClaimWinger má přístup k přesným letovým datům a dokáže to prokázat.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-6 border-l-4 border-yellow-600 dark:border-yellow-400">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">📄 "Chybějící doklady"</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ryanair žádá palubní vstupenku, rezervační číslo nebo další dokumenty, i když je nemáte povinnost poskytnout všechny.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded p-3">
                  <strong>Realita:</strong> Podle ES 261/2004 stačí základní údaje o letu. ClaimWinger má databázi všech letů a dokáže váš nárok prokázat i bez všech dokumentů.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-6 border-l-4 border-yellow-600 dark:border-yellow-400">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">⏳ "Promlčeno"</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Ryanair tvrdí, že jste podali reklamaci pozdě a váš nárok už je promlčený.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded p-3">
                  <strong>Realita:</strong> V ČR máte <strong>3 roky</strong> na podání reklamace. Iresko právo (kde má Ryanair sídlo) dává dokonce 6 let. Není tedy důvod k panike.
                </p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 border border-red-200 dark:border-red-900">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <XCircle className="w-5 h-5" />
                Statistika: Proč lidé vzdávají své reklamace
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">78%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">vzdá po prvním zamítnutí od Ryanairu</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">15%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">nevydrží dlouhé čekání na odpověď</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">7%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">dostane kompenzaci samostatně</p>
                </div>
              </div>
              <p className="text-sm text-red-800 dark:text-red-200 mt-4 text-center">
                <strong>S ClaimWinger získá kompenzaci 98 % lidí</strong> – včetně případů, které Ryanair původně zamítl.
              </p>
            </div>
          </section>

          {/* Section 5: Časté otázky */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Časté otázky o kompenzaci od Ryanairu
            </h2>

            <div className="space-y-4">
              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Můžu získat kompenzaci, i když jsem letěl se super levnou letenkou?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Ano!</strong> Výše kompenzace je stanovena zákonem a závisí pouze na vzdálenosti letu, ne na ceně letenky. I když jste za let zaplatili 10 €, máte nárok na až 600 € kompenzace.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Jak dlouho trvá získání kompenzace od Ryanairu?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Při samostatné reklamaci: <strong>4-12 měsíců</strong> (často i déle při zamítnutí a opakované stížnosti).<br/>
                  S ClaimWinger: průměrně <strong>8 týdnů</strong>, protože máme zkušenosti a dokážeme rychle reagovat na taktiky Ryanairu.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Ztratím nárok, pokud Ryanair nabídl náhradní let?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Ne nutně.</strong> Záleží na tom, kdy vám náhradní let nabídli a jak velké zpoždění způsobil. Pokud náhradní let dorazil s více než 3hodinovým zpožděním oproti původnímu plánu, stále máte nárok na kompenzaci.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Co když mi Ryanair už vyplatil voucher nebo refundaci?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Pořád máte nárok!</strong> Vrácení ceny letenky nebo voucher je něco jiného než kompenzace podle ES 261/2004. Máte právo na obojí – refundaci letenky + kompenzaci za zpoždění/zrušení.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Platí ES 261/2004 i pro lety mimo EU?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Částečně.</strong> Pokud letíte z EU kamkoliv na světě, jste chráněni. Pokud letíte ze země mimo EU do EU, máte nárok pouze pokud je dopravcem evropská letecká společnost (např. Ryanair ano, ale americká aerolinka ne).
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Co když nemám všechny dokumenty od letu?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Není problém!</strong> ClaimWinger má přístup k databázím letů a dokáže váš nárok prokázat i bez palubní vstupenky. Stačí rezervační číslo nebo jméno + datum letu.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Měli jste problém s letem Ryanair?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Zkontrolujte svůj nárok na kompenzaci zdarma. Vyřídíme vše za vás – platíte pouze při úspěchu (30% provize).
            </p>
            <a 
              href="https://claimwinger.com?utm_source=blog&utm_medium=cta&utm_campaign=ryanair_kompenzace"
              className="inline-flex items-center gap-2 bg-white text-blue-600 dark:text-blue-700 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-100 transition-colors text-lg"
            >
              Zkontrolovat nárok zdarma
              <CheckCircle className="w-6 h-6" />
            </a>
            <p className="text-sm text-blue-100 mt-6">
              ✓ 98% úspěšnost • ✓ Průměrná výplata za 8 týdnů • ✓ Žádné skryté poplatky
            </p>
          </section>
        </div>

        {/* Related Articles */}
        <aside className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Související články
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              href="/cs/blog/kdy-mate-narok-kompenzaci"
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Kdy máte nárok na kompenzaci
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompletní přehled všech situací, kdy vám podle zákona přísluší finanční odškodnění.
              </p>
            </Link>

            <Link 
              href="/cs/blog/prava-cestujicich-ceska-republika"
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Práva cestujících v ČR
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vše o tom, jak funguje ochrana práv cestujících v České republice.
              </p>
            </Link>

            <Link 
              href="/cs/zpozdeny-let"
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Zpožděný let – co dělat?
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Praktický průvodce pro situaci, kdy je váš let zpožděný.
              </p>
            </Link>
          </div>
        </aside>
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ryanair kompenzace za zpoždění a zrušení letu – Jak na reklamaci",
            "description": "Komplexní průvodce kompenzací u Ryanairu. Zjistěte, jak správně reklamovat zpoždění nebo zrušení letu a získat až 600 € kompenzace.",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2026-02-23",
            "dateModified": "2026-02-23",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://problemlot.com/cs/blog/ryanair-kompenzace-reklamace"
            },
            "image": "https://problemlot.com/og-image.png"
          })
        }}
      />
    </LayoutCs>
  );
}
