import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, XCircle, Euro, ArrowRight, CheckCircle2, MapPin, AlertCircle, Building2 } from "lucide-react";

export default function PragueAirportCancelledFlight() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Praha zrušený let – kompenzace a práva cestujících 2026"
        description="Zrušený let z letiště Praha-Ruzyně? Kompletní průvodce kompenzací až 600 € + vrácení peněz podle EU 261. Co dělat když aerolinka zruší let?"
        url="https://lotproblem.pl/cs/blog/letiste-praha-zruseny-let"
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">
              Domů
            </Link>
            <span>›</span>
            <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span>›</span>
            <span className="text-gray-900 dark:text-white">Praha zrušený let</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <span className="text-emerald-600 dark:text-emerald-400 font-medium">Letiště Praha (PRG)</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Letiště Praha zrušený let – kompenzace až 600 € + vrácení peněz (2026)
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <XCircle className="h-4 w-4 mr-2" />
                <span>27 min čtení</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Praha-Ruzyně (PRG)</span>
              </div>
              <div className="flex items-center">
                <Euro className="h-4 w-4 mr-2" />
                <span>250-600 € kompenzace + vrácení</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Zrušený let z Prahy? Zjistěte vše o kompenzaci až 600 € + plném vrácení ceny letenky podle EU 261/2004. 
              Specifika Terminálu 1 a 2, náhradní lety, co dělat když aerolinka zruší váš let z letiště Praha-Ruzyně.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-12 border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📋 Rychlý přehled – Praha zrušený let
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Nárok:</strong> Kompenzace 250-600 € + vrácení ceny letenky</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Výjimka:</strong> Oznámení 14+ dní předem (bez kompenzace)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Časový limit:</strong> Až 3 roky zpětně od data letu</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Možnosti:</strong> Náhradní let nebo vrácení peněz (vaše volba)</span>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              ⚖️ Kdy máte nárok na kompenzaci? (Zrušený let z Prahy)
            </h2>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-2" />
                MÁTE NÁROK když:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ Aerolinka zrušila váš let z Prahy</li>
                <li>✅ Oznámení méně než 14 dní před odletem</li>
                <li>✅ Let provozovaný evropskou aerolinkou (ČSA, Ryanair, Wizz Air, LOT, Lufthansa...)</li>
                <li>✅ Let z Prahy do EU/EHP nebo let do Prahy z EU/EHP na evropské aerolince</li>
                <li>✅ Nezavinil mimořádné okolnosti (extrémní počasí, ATC stávka)</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2" />
                NEMÁTE NÁROK na kompenzaci když:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>❌ Aerolinka vás informovala <strong>14+ dní předem</strong> (máte ale právo na vrácení nebo přeložení)</li>
                <li>❌ Mimořádné okolnosti (extrémní počasí, stávka řídících letového provozu, bezpečnostní riziko)</li>
                <li>❌ Let operovaný non-EU aerolinkou mimo EU (např. Emirates Praha → Dubai)</li>
                <li>❌ Vy jste zrušili let dobrovolně (bez kompenzace, možné vrácení s poplatkem)</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <strong>⚠️ Důležité:</strong> I když nemáte nárok na kompenzaci (14+ dní oznámení), stále máte právo na vrácení ceny letenky nebo přeložení na jiný let!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              💰 Dvojí kompenzace – Peníze + Vrácení letenky
            </h2>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-300 mb-3">
                🎯 Získáte OBĚ částky:
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start">
                  <Euro className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">Kompenzace 250-600 €</strong>
                    <p className="text-sm mt-1">Pevná částka podle vzdálenosti (záleží na km, ne na ceně letenky)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Euro className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <strong className="text-lg">+ Vrácení ceny letenky</strong>
                    <p className="text-sm mt-1">Plná cena letenky vrácena (pokud neletíte náhradním letem)</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <strong>Příklad:</strong> Letenka Praha → New York za 15 000 Kč zrušena. Získáte: <strong>600 € (15 600 Kč) + 15 000 Kč = 30 600 Kč celkem!</strong>
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              💵 Výše kompenzace z Prahy (podle vzdálenosti)
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-blue-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Do 1 500 km</div>
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <div>Praha → Londýn</div>
                    <div>Praha → Amsterdam</div>
                    <div>Praha → Stockholm</div>
                    <div>Praha → Vídeň</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-blue-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">400 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">1 500 – 3 500 km</div>
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <div>Praha → Řím</div>
                    <div>Praha → Madrid</div>
                    <div>Praha → Atény</div>
                    <div>Praha → Lisabon</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 border border-blue-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">600 €</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">Nad 3 500 km</div>
                  <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <div>Praha → New York</div>
                    <div>Praha → Bangkok</div>
                    <div>Praha → Dubai</div>
                    <div>Praha → Tokyo</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              🔄 Vaše možnosti po zrušení letu
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  Možnost 1: Náhradní let
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>Zdarma:</strong> Aerolinka musí nabídnout přeložení</li>
                  <li><strong>Kdy:</strong> Co nejdříve nebo v vámi zvolený termín</li>
                  <li><strong>Podmínky:</strong> Stejná třída, stejná destinace</li>
                  <li><strong>Kompenzace:</strong> Stále máte nárok pokud oznámení &lt;14 dní</li>
                  <li><strong>Tip:</strong> Pokud nabídnou horší let (přestupy), můžete odmítnout</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Euro className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                  Možnost 2: Vrácení peněz
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>Plná částka:</strong> 100% ceny letenky vráceno</li>
                  <li><strong>Časový rámec:</strong> Do 7 dní od žádosti</li>
                  <li><strong>Forma:</strong> Hotovost, ne vouchery (pokud nechcete)</li>
                  <li><strong>Kompenzace:</strong> Navíc 250-600 € pokud oznámení &lt;14 dní</li>
                  <li><strong>Tip:</strong> Nepřijímejte vouchery pokud chcete peníze</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              🚨 Nejčastější důvody zrušení z Prahy
            </h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  1. Technické problémy letadla
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ✅ ANO (aerolinka zodpovědná za údržbu)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Pokud aerolinka zruší let kvůli technické závadě, máte plný nárok na kompenzaci. 
                  Preventivní údržba je povinností aerolinek.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  2. Nedostatek posádky
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ✅ ANO (aerolinka zodpovědná za plánování)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Pokud nemají dostatek pilotů nebo letušek, to je jejich problém plánování. 
                  Musí mít záložní posádku = kompenzace.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  3. Nízká obsazenost (konsolidace letů)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ✅ ANO (komerční rozhodnutí aerolinie)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Pokud aerolinka zruší let protože je málo cestujících a sloučí vás s jiným letem, 
                  máte plný nárok na kompenzaci. To je čistě jejich business rozhodnutí.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  4. Stávka posádky aerolinie
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ✅ ANO (interní stávka = odpovědnost aerolinie)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Pokud stávkují piloti nebo pozemní personál aerolinie, máte nárok. 
                  Výjimka: stávka řídících letového provozu (ATC) = mimořádná okolnost (bez nároku).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  5. Extrémní počasí
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ❌ NE (mimořádná okolnost)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Skutečné extrémní počasí (tornádo, silná bouřka, sněhová kalamita) je mimořádná okolnost. 
                  ALE: běžný déšť nebo vítr NENÍ mimořádná okolnost pokud ostatní lety létají.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              📝 Jak uplatnit nárok (krok za krokem)
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Zkontrolujte nárok zdarma
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Použijte náš bezplatný nástroj a ověřte, zda máte nárok na kompenzaci. 
                    Zadejte číslo letu, datum zrušení a důvod (pokud víte).
                  </p>
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    → Zkontrolovat nárok nyní
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Shromážděte dokumenty
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Potřebujete: potvrzení rezervace, email o zrušení od aerolinie, 
                    boarding pass (pokud máte), dokumentaci o náhradním letu (pokud jste přijali).
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Tip:</strong> Vyfotografujte display na letišti s informací o zrušení!
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 dark:bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Podejte reklamaci přes specialistu
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    Náš tým zařídí celý proces za vás: komunikace s aerolinkou, právní zastoupení, 
                    soudní řízení (pokud nutné). Platíte pouze při úspěchu (25% provize).
                  </p>
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Podat reklamaci
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              ❓ Často kladené otázky (FAQ)
            </h2>

            <div className="space-y-4 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Co když aerolinka nabízí voucher místo peněz?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Máte PRÁVO odmítnout voucher a požadovat hotovost. Aerolinie často nabízejí vouchery 
                  protože doufají, že je nevyužijete. Trvejte na vrácení peněz pokud nechcete voucher.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Musím přijmout náhradní let který nabízejí?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  NE. Pokud náhradní let nesplňuje vaše potřeby (špatný čas, mnoho přestupů, horší třída), 
                  můžete odmítnout a požadovat plné vrácení peněz + kompenzaci.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Jak poznám jestli byl důvod zrušení oprávněný?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Aerolinie často lžou o důvodu ("mimořádné okolnosti"). Náš právní tým má přístup 
                  k letištním datům a ověří skutečný důvod. V 70% případů prokážeme že to NEBYLA mimořádná okolnost.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Co když jsem rezervoval/a hotel a auto které teď nemůžu využít?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  EU 261 pokrývá pouze kompenzaci za let a vrácení letenky. ALE pokud můžete prokázat 
                  že aerolinka zrušila let nedostatečně předem a způsobila vám další škodu, můžete žádat 
                  náhradu dodatečných nákladů (hotel, auto). Náš tým vám s tím pomůže.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Platí pravidlo 14 dní i pro přestupní lety?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ano. Pokud aerolinka zrušila první nebo druhý úsek méně než 14 dní předem, 
                  máte nárok na kompenzaci za celou cestu (Praha → Frankfurt → New York = kompenzace za celou trasu).
                </p>
              </div>
            </div>

          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-8 text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Získejte kompenzaci + vrácení peněz
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Vymůžeme vaše peníze bez rizika. Platíte pouze při úspěchu.
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
            >
              Zkontrolovat nárok zdarma
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <p className="text-blue-100 mt-4 text-sm">
              ✓ Žádné riziko • ✓ Žádné skryté poplatky • ✓ 25% provize pouze při úspěchu
            </p>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Související články
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/cs/blog/letiste-praha-zpozdeny-let"
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Praha zpožděný let
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Kompenzace při zpoždění z Prahy
                </p>
              </Link>

              <Link
                href="/cs/zruseny-let"
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Zrušený let obecně
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Úplný průvodce EU 261 pravidly
                </p>
              </Link>

              <Link
                href="/cs/kompenzace-kalkulacka"
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Kalkulačka
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Spočítejte svůj nárok
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}