import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Clock, Euro, ArrowRight, CheckCircle2, MapPin, AlertCircle, Building2 } from "lucide-react";

export default function PragueAirportDelayedFlight() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Praha zpožděný let – kompenzace a práva cestujících 2026"
        description="Zpožděný let z letiště Praha-Ruzyně? Kompletní průvodce kompenzací až 600 € podle EU 261. Terminál 1 vs 2, nejčastější problémy."
        url="https://lotproblem.pl/cs/blog/letiste-praha-zpozdeny-let"
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
            <span className="text-gray-900 dark:text-white">Praha zpožděný let</span>
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
              Letiště Praha zpožděný let – kompenzace až 600 € (2026)
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>25 min čtení</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Praha-Ruzyně (PRG)</span>
              </div>
              <div className="flex items-center">
                <Euro className="h-4 w-4 mr-2" />
                <span>250-600 € kompenzace</span>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Zpožděný let z Prahy? Zjistěte vše o kompenzaci až 600 € podle EU 261/2004. Specifika Terminálu 1 a 2, 
              nejčastější příčiny zpoždění, jak uplatnit nárok a praktické tipy pro cestující z letiště Praha-Ruzyně.
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 mb-12 border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              📋 Rychlý přehled – Praha zpožděný let
            </h2>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Nárok:</strong> Přílet zpožděný 3+ hodiny z letiště Praha-Ruzyně (PRG)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Částka:</strong> 250 € (do 1500 km), 400 € (1500-3500 km), 600 € (nad 3500 km)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Časový limit:</strong> Až 3 roky zpětně od data letu</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0 mt-0.5" />
                <span><strong>Specifika PRG:</strong> Terminál 1 (Schengen), Terminál 2 (Non-Schengen + mimo EU)</span>
              </li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              ✈️ Letiště Praha-Ruzyně – základní info
            </h2>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Václav Havel Airport Prague (PRG)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Kapacita:</strong> ~17 milionů cestujících ročně</li>
                <li><strong>Terminály:</strong> Terminál 1 (Schengen) + Terminál 2 (Non-Schengen)</li>
                <li><strong>Hlavní aerolinie:</strong> Czech Airlines (ČSA), Ryanair, Wizz Air, Lufthansa, LOT</li>
                <li><strong>Nejčastější destinace:</strong> Londýn, Amsterdam, Paříž, Frankfurt, Řím</li>
                <li><strong>Peak časy:</strong> 6-9 ráno, 17-20 večer (největší riziko zpoždění)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              ⏰ Kdy máte nárok na kompenzaci? (Pravidlo 3 hodin)
            </h2>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-300 mb-3 flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-2" />
                MÁTE NÁROK když:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>✅ Přílet na konečnou destinaci zpožděný <strong>3+ hodiny</strong></li>
                <li>✅ Let provozovaný evropskou aerolinkou (ČSA, Ryanair, Wizz Air, LOT, Lufthansa...)</li>
                <li>✅ Let z Prahy do EU/EHP + nebo let do Prahy z EU/EHP na evropské aerolince</li>
                <li>✅ Check-in proběhl včas (dostavení se k odbavení min. 45 min před odletem)</li>
                <li>✅ Aerolinka nezaviní „mimořádné okolnosti"</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-red-800 dark:text-red-300 mb-3 flex items-center">
                <AlertCircle className="h-6 w-6 mr-2" />
                NEMÁTE NÁROK když:
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>❌ Přílet zpožděný méně než 3 hodiny (i když odlet byl 5+ hodin pozdě)</li>
                <li>❌ Mimořádné okolnosti (extrémní počasí, stávka řídících letového provozu, bezpečnostní riziko)</li>
                <li>❌ Let operovaný non-EU aerolinkou mimo EU (např. Emirates Praha → Dubai)</li>
                <li>❌ Check-in po uzavření odbavení (obvykle 45 min před odletem)</li>
                <li>❌ Zpoždění kvůli vašemu chování (opilost, agrese, odmítnutí nástupu)</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              💰 Výše kompenzace z Prahy (podle vzdálenosti)
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
              🏢 Specifika Terminálu 1 vs Terminálu 2
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Terminál 1 (Schengen)
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>Destinace:</strong> EU/Schengen (Londýn post-Brexit = Terminál 2)</li>
                  <li><strong>Aerolinie:</strong> ČSA, Ryanair, Wizz Air (vnitro-EU lety)</li>
                  <li><strong>Běžné problémy:</strong> Přetížení v peak hodinách, pomalé boarding</li>
                  <li><strong>Tip:</strong> Dorazte 90 min před odletem v peak times (7-9h, 17-20h)</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Terminál 2 (Non-Schengen)
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li><strong>Destinace:</strong> Mimo Schengen (UK, USA, Rusko, Asie, Afrika)</li>
                  <li><strong>Aerolinie:</strong> LOT, Lufthansa, British Airways, Emirates</li>
                  <li><strong>Běžné problémy:</strong> Delší pasová kontrola, bezpečnostní screening</li>
                  <li><strong>Tip:</strong> Dorazte 2-3 hodiny před long-haul lety (USA, Asie)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
              🚨 Nejčastější příčiny zpoždění z Prahy
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
                  Pokud let zpozdí technická závada (porucha motoru, hydrauliky, elektroniky), 
                  máte nárok na kompenzaci. Aerolinka musí zajistit, aby letadlo bylo funkční.
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
                  Pokud pilot nebo letušky nemohou přiletět včas (např. zpoždění předchozího letu), 
                  aerolinka musí mít záložní plán. Nedostatek posádky = kompenzace.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  3. Stávka posádky aerolinie
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ✅ ANO (interní stávka = odpovědnost aerolinie)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Pokud stávkují piloti nebo pozemní personál aerolinie, máte nárok. 
                  Výjimka: stávka řídících letového provozu (ATC) = mimořádná okolnost.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  4. Přetížení letiště (slot delay)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ⚠️ ZÁLEŽÍ (pokud aerolinka nedodržela slot)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Praha má omezené sloty v peak hodinách. Pokud aerolinka zmeškala svůj slot kvůli 
                  vlastním problémům (opozdění předchozího letu), máte nárok. ATC delay = bez nároku.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  5. Špatné počasí
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nárok:</strong> ❌ NE (mimořádná okolnost)
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Extrémní počasí (bouřka, mlha, sněhová kalamita) je mimořádná okolnost. 
                  Běžný déšť nebo vítr NENÍ mimořádná okolnost pokud ostatní lety létají.
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
                    Zadejte číslo letu, datum a čas příjezdu.
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
                    Potřebujete: potvrzení rezervace (boarding pass), email s potvrzením letu, 
                    dokumentaci o zpoždění (screenshot z flight tracker, email od aerolinie).
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Tip:</strong> Vyfotografujte display na letišti s informací o zpoždění!
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
                    soudní řízení (pokud nutné). Platíte pouze při úspěchu (30% provize).
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
                  Musím nejdřív kontaktovat aerolinka sám?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ne, ale můžete zkusit. Aerolinie často odmítají nebo nabízejí nižší částku (vouchery). 
                  Náš tým má zkušenosti a vymůže plnou částku bez vašeho úsilí.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Platí 3hodina i pro přestupní lety?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ano! Počítá se čas příjezdu na konečnou destinaci. Pokud Praha → Frankfurt → New York 
                  dorazí 3+ hodiny pozdě do NYC, máte nárok (i když zpoždění bylo jen 1h z Prahy).
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Co když jsem letěl/a se slevou nebo bonusovou letenkou?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Kompenzace se vztahuje na všechny letenky kromě zaměstnaneckých zdarma (staff travel). 
                  Slevové akce, bonusové míle, last-minute = plný nárok.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Jak dlouho trvá získání peněz?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Typicky 2-6 měsíců. Záleží na aerolince – Ryanair/Wizz Air často odmítají a jde se 
                  k soudu (6-12 měsíců). Legacy carriers (ČSA, Lufthansa) platí rychleji (2-4 měsíce).
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Co když aerolinka říká „mimořádné okolnosti"?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Aerolinie často zneužívají tuto výjimku. Náš právní tým ověří důvod zpoždění 
                  (přístup k letištním datům) a v 70% případů prokážeme, že to nebyla mimořádná okolnost.
                </p>
              </div>
            </div>

          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl p-8 text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Neztrácejte peníze, které vám patří
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
              ✓ Žádné riziko • ✓ Žádné skryté poplatky • ✓ 30% provize pouze při úspěchu
            </p>
          </div>

          {/* Related Articles */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Související články
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/cs/blog/letiste-praha-zruseny-let"
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Praha zrušený let
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Kompenzace a práva při zrušení
                </p>
              </Link>

              <Link
                href="/cs/zpozdeny-let"
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                  Zpožděný let obecně
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