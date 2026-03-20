import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Clock, Euro, FileText, AlertCircle, CheckCircle, XCircle, TrendingUp, Shield } from "lucide-react";

export default function WizzAirZpozdeniZruseni() {
  return (
    <LayoutCs>
      <SEO 
        title="Wizz Air kompenzace za zpoždění a zrušení letu – Průvodce 2026"
        description="Kompletní průvodce reklamací u Wizz Air. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let."
        url="https://lotproblem.pl/cs/blog/wizz-air-zpozdeni-zruseni"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8 text-gray-600 dark:text-gray-400">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          {" > "}
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          {" > "}
          <span className="text-gray-900 dark:text-gray-100">Wizz Air kompenzace</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <Plane className="w-5 h-5" />
            <span className="text-sm font-medium">Letecké společnosti</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Wizz Air kompenzace za zpoždění a zrušení letu – Průvodce 2026
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Čtení: 7 min</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>3 500 slov</span>
            </div>
            <time>Publikováno: 23. února 2026</time>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Wizz Air je maďarská nízkonákladová letecká společnost s rozsáhlou sítí po celé Evropě. Pokud máte problém s letem, máte právo na kompenzaci až <strong>600 €</strong> podle evropského nařízení ES 261/2004.
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
                Měli jste problém s letem Wizz Air?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Zkontrolujte svůj nárok na kompenzaci zdarma. ClaimWinger vám pomůže získat až 600 € za méně než 5 minut.
              </p>
              <a 
                href="https://claimwinger.com?utm_source=blog&utm_medium=article&utm_campaign=wizz_air_kompenzace"
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
              Kdy máte nárok na kompenzaci od Wizz Air
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Wizz Air, stejně jako všechny evropské letecké společnosti, musí dodržovat <strong>nařízení ES 261/2004</strong>. Máte nárok na kompenzaci v těchto případech:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 border border-red-200 dark:border-red-900">
                <XCircle className="w-10 h-10 text-red-600 dark:text-red-400 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Zrušený let</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Zrušení oznámeno méně než 14 dní před plánovaným odletem
                </p>
              </div>

              <div className="bg-orange-50 dark:bg-orange-950 rounded-lg p-6 border border-orange-200 dark:border-orange-900">
                <Clock className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Zpoždění 3+ hodin</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Přílet na konečnou destinaci s více než 3hodinovým zpožděním
                </p>
              </div>

              <div className="bg-purple-50 dark:bg-purple-950 rounded-lg p-6 border border-purple-200 dark:border-purple-900">
                <AlertCircle className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Odmítnutí nástupu</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Přeplnění letu (overbooking) bez vašeho souhlasu
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 border-l-4 border-blue-600 dark:border-blue-400 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Klíčové podmínky pro nárok:
              </h4>
              <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                <li>✓ Let z EU nebo přistání v EU s evropským dopravcem</li>
                <li>✓ Včasné odbavení (45 minut před odletem)</li>
                <li>✓ Problém nebyl způsoben mimořádnými okolnostmi</li>
                <li>✓ Od letu neuplynuly více než 3 roky</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Výše kompenzace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Výše kompenzace od Wizz Air
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Kompenzace se odvíjí od <strong>vzdálenosti letu</strong>, ne od ceny letenky. Wizz Air létá převážně na krátké a střední tratě:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Vzdálenost letu</th>
                    <th className="px-6 py-4 text-left font-semibold">Výše kompenzace</th>
                    <th className="px-6 py-4 text-left font-semibold">Typické trasy Wizz Air</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">Do 1 500 km</td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-green-600 dark:text-green-400">250 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">
                      Praha → Londýn, Vídeň, Berlín, Brusel
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">1 500 - 3 500 km</td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">400 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">
                      Praha → Tel Aviv, Dubaj, Reykjavík
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-900">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">Nad 3 500 km</td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">600 €</span>
                    </td>
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">
                      Vzácné (většina tras Wizz Air je kratší)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-400" />
                Příklad výpočtu pro typický let Wizz Air:
              </h4>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 space-y-2 text-gray-700 dark:text-gray-300">
                <div className="flex justify-between items-center">
                  <span>Let Praha → Londýn (1 028 km)</span>
                  <span className="font-bold">250 €</span>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>Provize ClaimWinger (30%)</span>
                  <span>-75 €</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-2 flex justify-between items-center font-bold text-lg">
                  <span>Dostanete na účet:</span>
                  <span className="text-green-600 dark:text-green-400">175 €</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                💡 <strong>Tip:</strong> I když jste za letenku zaplatili pouze 15 €, máte nárok na plnou kompenzaci 250 €!
              </p>
            </div>
          </section>

          {/* Section 3: Specifika Wizz Air */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Specifika reklamací u Wizz Air
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Wizz Air má svá specifika při vyřizování reklamací. Je důležité znát jejich <strong>typické postupy a argumenty</strong>:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-6 border-l-4 border-yellow-600 dark:border-yellow-400">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">⚡ "Technická závada mimo naši kontrolu"</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Wizz Air často argumentuje, že technický problém byl neočekávaný a mimo jejich kontrolu.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded p-3">
                  <strong>Realita:</strong> Běžné technické problémy (prasklá pneumatika, drobné poruchy systémů) NEJSOU mimořádné okolnosti. Pouze závady způsobené výrobní vadou letadla nebo skrytou vadou mohou být výjimkou.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-6 border-l-4 border-yellow-600 dark:border-yellow-400">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🌩️ "Špatné počasí na trase"</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Wizz Air tvrdí, že zpoždění bylo způsobeno nepříznivým počasím, i když jiné lety létaly normálně.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded p-3">
                  <strong>Realita:</strong> Pokud ostatní letecké společnosti létaly bez problémů, počasí nebylo extrémní. ClaimWinger dokáže získat meteorologické reporty a prokázat, že počasí nebránilo letu.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 rounded-lg p-6 border-l-4 border-yellow-600 dark:border-yellow-400">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">🕐 "Kaskádový efekt předchozích zpoždění"</h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Wizz Air používá argument, že zpoždění bylo způsobeno předchozím zpožděním téhož letadla dříve během dne.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 rounded p-3">
                  <strong>Realita:</strong> Letecká společnost je povinna mít dostatečné kapacity pro řešení zpoždění. "Kaskádový efekt" je organizační problém aerolinky, ne mimořádná okolnost.
                </p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 border border-red-200 dark:border-red-900">
              <h4 className="font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Proč je těžké získat kompenzaci samostatně
              </h4>
              <ul className="text-sm text-red-800 dark:text-red-200 space-y-2">
                <li>📧 <strong>Pomalá reakce:</strong> Wizz Air odpovídá na reklamace průměrně za 6-8 týdnů</li>
                <li>🔄 <strong>Opakované zamítání:</strong> I oprávněné nároky jsou často zamítnuty napoprvé</li>
                <li>📄 <strong>Složité formuláře:</strong> Online systém vyžaduje přesné údaje a dokumenty</li>
                <li>💬 <strong>Jazyková bariéra:</strong> Komunikace probíhá v angličtině nebo maďarštině</li>
                <li>⚖️ <strong>Právní kroky:</strong> Při zamítnutí je potřeba podat stížnost k úřadům nebo soudu</li>
              </ul>
            </div>
          </section>

          {/* Section 4: ClaimWinger vs samostatně */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              ClaimWinger vs. samostatná reklamace
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Samostatná reklamace */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                  Samostatně (nedoporučujeme)
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Najděte kontaktní formulář na wizz-air.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Vyplňte podrobný popis (v angličtině)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Připojte dokumenty (palubní vstupenka, boarding pass)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">4</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Čekejte 6-8 týdnů na odpověď</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-gray-200 dark:bg-gray-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">5</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Při zamítnutí podávejte stížnost k ÚCL nebo soudu</p>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-950 rounded-lg p-4 border border-red-200 dark:border-red-900">
                  <h4 className="font-bold text-red-900 dark:text-red-100 mb-2">Nevýhody:</h4>
                  <ul className="text-sm text-red-800 dark:text-red-200 space-y-1">
                    <li>⏱️ Dlouhý proces (4-12 měsíců)</li>
                    <li>📄 Vysoká administrativní zátěž</li>
                    <li>🚫 Nízká úspěšnost (cca 15-20%)</li>
                    <li>💸 Riziko soudních poplatků</li>
                    <li>🇬🇧 Jazyková bariéra (angličtina/maďarština)</li>
                  </ul>
                </div>
              </div>

              {/* Přes ClaimWinger */}
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 rounded-lg p-6 border-2 border-blue-600 dark:border-blue-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DOPORUČENO
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  S ClaimWinger (rychle a snadno)
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">1</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Vyplňte 3minutový online formulář (v češtině)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">2</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">Experti vyhodnotí váš nárok zdarma</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold shrink-0">3</span>
                    <p className="text-sm text-gray-700 dark:text-gray-300">ClaimWinger vyřídí celou komunikaci s Wizz Air</p>
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
                    <li>✓ 98% úspěšnost u Wizz Air</li>
                    <li>✓ Veškerou byrokracii vyřídíme za vás</li>
                    <li>✓ Komunikace v češtině</li>
                    <li>✓ Při zamítnutí jdeme k soudu (zdarma)</li>
                  </ul>
                </div>

                <a 
                  href="https://claimwinger.com?utm_source=blog&utm_medium=article&utm_campaign=wizz_air_kompenzace"
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

          {/* Section 5: FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Časté otázky o kompenzaci od Wizz Air
            </h2>

            <div className="space-y-4">
              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Jak dlouho trvá získání kompenzace od Wizz Air?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Při samostatné reklamaci: <strong>6-12 měsíců</strong> (často i déle při zamítnutí).<br/>
                  S ClaimWinger: průměrně <strong>8 týdnů</strong>, protože máme zkušenosti s Wizz Air a dokážeme rychle reagovat na jejich argumenty.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Mohu dostat kompenzaci, i když jsem letěl s Priority boardingem?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Ano!</strong> Kompenzace se vztahuje na všechny cestující, nezáleží na tom, jaké služby jste si zakoupili (Priority, Wizz Flex, zavazadlo atd.). Pokud byl let zpožděný nebo zrušený, máte nárok bez ohledu na typ tarif
u.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Co když mi Wizz Air nabídl voucher místo kompenzace?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Máte právo odmítnout voucher</strong> a požadovat finanční kompenzaci. Wizz Air často nabízí vouchery, protože je to pro ně výhodnější (voucher většina lidí nevyužije nebo propadne). Vy máte ale zákonné právo na hotovost.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Můžu reklamovat starší lety od Wizz Air?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Ano, ale pozor na promlčecí lhůtu!</strong> V České republice máte <strong>3 roky</strong> na podání reklamace. Wizz Air má sídlo v Maďarsku, kde je lhůta <strong>5 let</strong>. ClaimWinger dokáže určit, které právo se vztahuje na váš případ.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400">
                  Co když jsem letenku koupil přes jiný web (Booking.com, Kiwi.com)?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Není problém!</strong> Nárok na kompenzaci máte vůči letecké společnosti (Wizz Air), ne vůči prostředníkovi. ClaimWinger vyřídí reklamaci přímo s Wizz Air bez ohledu na to, kde jste letenku zakoupili.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Měli jste problém s letem Wizz Air?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Zkontrolujte svůj nárok na kompenzaci zdarma. Vyřídíme vše za vás – platíte pouze při úspěchu (30% provize).
            </p>
            <a 
              href="https://claimwinger.com?utm_source=blog&utm_medium=cta&utm_campaign=wizz_air_kompenzace"
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
              href="/cs/blog/ryanair-kompenzace-reklamace"
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Ryanair kompenzace
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Jak získat až 600 € od Ryanairu za zpožděný nebo zrušený let.
              </p>
            </Link>

            <Link 
              href="/cs/blog/kdy-mate-narok-kompenzaci"
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                Kdy máte nárok na kompenzaci
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompletní přehled všech situací, kdy vám přísluší odškodnění.
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
            "headline": "Wizz Air kompenzace za zpoždění a zrušení letu – Průvodce 2026",
            "description": "Kompletní průvodce reklamací u Wizz Air. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let.",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png"
              }
            },
            "datePublished": "2026-02-23",
            "dateModified": "2026-02-23",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lotproblem.pl/cs/blog/wizz-air-zpozdeni-zruseni"
            },
            "image": "https://lotproblem.pl/og-image.png"
          })
        }}
      />
    </LayoutCs>
  );
}
