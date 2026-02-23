import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Scale, ShieldCheck, Clock, TrendingUp, CheckCircle2 } from "lucide-react";

export default function PravaCestujicichCeskaRepublika() {
  return (
    <LayoutCs>
      <SEO
        title="Práva cestujících v ČR – co dělat při zpoždění letu z Prahy"
        description="Kompletní průvodce právy leteckých cestujících v České republice. ÚCL, ČOI, kompenzace až 600 € – zjistěte, jak postupovat."
        url="https://lotproblem.pl/cs/blog/prava-cestujicich-ceska-republika"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
            <span>/</span>
            <span>Práva cestujících v ČR</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Práva leteckých cestujících v České republice
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Kompletní průvodce vašimi právy při zpožděných a zrušených letech. Co dělat, 
            kam se obrátit a jak získat až 600 € kompenzace.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>📅 23. února 2026</span>
            <span>⏱️ 14 min čtení</span>
            <span>✍️ Právní průvodce</span>
          </div>
        </header>

        {/* Alert Box - Rights Apply in CZ */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
                ✅ Nařízení ES 261/2004 plně platí v České republice
              </h3>
              <p className="text-green-800 dark:text-green-200 text-sm leading-relaxed">
                Jako člen EU má Česká republika povinnost aplikovat evropské právo na ochranu 
                cestujících. To znamená, že máte stejná práva jako cestující v Německu, 
                Francii nebo kterékoli jiné zemi EU. Kompenzace až 600 € není přání, 
                ale váš <strong>právní nárok</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-8 mb-12 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            Situace na českých letištích (2024)
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 mb-2">18%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                letů z Prahy má zpoždění &gt;15 min (2024)
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-red-600 mb-2">2.8%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                letů z Prahy je zrušeno (průměr EU: 2.1%)
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 mb-2">16.2M</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                cestujících ročně (Letiště Praha 2024)
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Section 1: ÚCL */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              Úřad pro civilní letectví (ÚCL) – hlavní orgán dohledu
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Úřad pro civilní letectví je klíčová instituce v České republice, která dohlíží 
              na dodržování práv cestujících. Pokud aerolinka odmítne vyplatit kompenzaci nebo 
              nereaguje na vaši žádost, můžete podat stížnost na ÚCL.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                📋 Co ÚCL dělá:
              </h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Přijímá a vyřizuje stížnosti cestujících proti aerolinkám</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Kontroluje, zda aerolinky dodržují nařízení ES 261/2004</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Vydává závazná stanoviska (aerolinka musí reagovat)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Ukládá sankce aerolinkám za porušení práv cestujících</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                🔍 Jak podat stížnost na ÚCL (krok za krokem):
              </h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <strong>Nejprve požádejte aerolinku:</strong> ÚCL vyžaduje, abyste nejprve 
                    kontaktovali aerolinku přímo. Musíte mít důkaz, že jste to udělali (email, 
                    doporučený dopis).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <strong>Počkejte 30 dní:</strong> Pokud aerolinka neodpoví do 30 dnů nebo 
                    odmítne vyplatit kompenzaci, můžete podat stížnost na ÚCL.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <strong>Vyplňte formulář:</strong> Na webových stránkách ÚCL najdete 
                    formulář "Stížnost cestujícího". Vyplňte všechny požadované údaje 
                    (číslo letu, datum, důvod).
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <strong>Přiložte důkazy:</strong> Palubní vstupenka (boarding pass), 
                    potvrzení o zpoždění/zrušení, korespondence s aerolinou.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  <div>
                    <strong>Odešlete:</strong> Email na <code className="text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">info@caa.cz</code> 
                    nebo poštou na adresu: Úřad pro civilní letectví, Letiště Ruzyně, 160 08 Praha 6.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    POZOR: ÚCL nevymáhá kompenzaci za vás!
                  </h4>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed mb-2">
                    ÚCL může vydat <strong>závazné stanovisko</strong>, že máte nárok na kompenzaci, 
                    ale <strong>nemůže přímo přikázat aerolince, aby vám zaplatila</strong>. 
                    Pokud aerolinka i přes stanovisko ÚCL odmítne platit, musíte jít k soudu.
                  </p>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                    <strong>Realita:</strong> Proces na ÚCL trvá 3-6 měsíců a často končí tím, 
                    že stejně musíte žalovat. Proto většina cestujících raději použije službu 
                    jako <strong>ClaimWinger</strong>, která vymáhá kompenzaci včetně soudní 
                    cesty (pokud je potřeba).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                📊 Statistiky ÚCL (2024):
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>• <strong>4,200 stížností</strong> podáno proti aerolinkám (nárůst +18% oproti 2023)</li>
                <li>• <strong>68%</strong> stížností bylo oprávněných (cestující měl nárok)</li>
                <li>• <strong>Průměrná doba vyřízení:</strong> 4.5 měsíce (dlouhé!)</li>
                <li>• <strong>TOP 3 aerolinky se stížnostmi:</strong> Wizz Air (32%), Ryanair (24%), Smartwings (18%)</li>
              </ul>
            </div>
          </section>

          {/* Section 2: ČOI */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Česká obchodní inspekce (ČOI) – kdy kontaktovat
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Česká obchodní inspekce (ČOI) se <strong>nezabývá kompenzacemi za zpoždění nebo 
              zrušení letů</strong> (to je oblast ÚCL). ČOI řeší pouze otázky <strong>spotřebitelských 
              práv</strong> při nákupu letenky.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                ✅ Kdy kontaktovat ČOI (ne ÚCL):
              </h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>• Cestovní agentura nebo OTA (Kiwi.com, Booking.com) odmítá vrátit peníze za zrušenou letenku</li>
                <li>• Letenka zakoupena přes OTA, ale informace o letu byly zavádějící (jiná cena, jiný čas)</li>
                <li>• Problémy s fakturací, skryté poplatky, neautorizované platby</li>
                <li>• Porušení spotřebitelských práv při online nákupu letenky</li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">❌</span>
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-100 mb-2">
                    ČOI NEŘEŠÍ kompenzace za zpoždění/zrušení
                  </h4>
                  <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
                    Pokud váš let měl zpoždění nebo byl zrušen, <strong>nekontaktujte ČOI</strong>. 
                    ČOI nemá pravomoc řešit nařízení ES 261/2004. Obraťte se na <strong>ÚCL</strong> 
                    nebo přímo na <Link href="https://claimwinger.com/cs?utm_source=blog&utm_medium=article&utm_campaign=prava_cestujicich" 
                    className="text-red-700 dark:text-red-300 underline font-semibold hover:text-red-600">ClaimWinger</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Statute of Limitations */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              Promlčecí lhůta v České republice – 3 roky
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              V České republice máte <strong>3 roky</strong> od data letu na podání žádosti 
              o kompenzaci. To je standardní promlčecí lhůta v rámci EU (většina zemí má 2-3 roky, 
              některé až 6 let jako Irsko nebo UK).
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                📅 Příklad výpočtu promlčecí lhůty:
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-32 font-semibold">Let:</div>
                  <div>15. ledna 2023 (plánované datum odletu)</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-32 font-semibold">Lhůta začíná:</div>
                  <div>15. ledna 2023 (den odletu, ne den příletu)</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-32 font-semibold">Lhůta končí:</div>
                  <div>15. ledna 2026 (přesně 3 roky od data letu)</div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-32 font-semibold">Máte čas do:</div>
                  <div className="font-bold text-green-700 dark:text-green-400">14. ledna 2026 23:59</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                💡 TIP: Nečekejte na poslední chvíli!
              </h3>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed mb-3">
                I když máte 3 roky, <strong>nedoporučujeme čekat</strong>. Důvody:
              </p>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• <strong>Ztráta důkazů:</strong> Po 2-3 letech lidé ztrácejí palubní vstupenky, emaily, screenshoty</li>
                <li>• <strong>Výmluva aerolinky:</strong> Čím déle čekáte, tím těžší je obhajovat nárok</li>
                <li>• <strong>Inflace:</strong> 600 € dnes má větší hodnotu než 600 € za 3 roky (průměrně -10%)</li>
                <li>• <strong>Psychologická zátěž:</strong> Po 2-3 letech už nechcete myslet na ten problém</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                🌍 Srovnání promlčecích lhůt v EU:
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 font-semibold">Země</th>
                      <th className="text-left py-2 font-semibold">Promlčecí lhůta</th>
                      <th className="text-left py-2 font-semibold">Poznámka</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">🇨🇿 Česko</td>
                      <td className="py-2 font-semibold">3 roky</td>
                      <td className="py-2">Od data letu</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">🇸🇰 Slovensko</td>
                      <td className="py-2">3 roky</td>
                      <td className="py-2">Od data letu</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">🇵🇱 Polsko</td>
                      <td className="py-2">3 roky</td>
                      <td className="py-2">Od data letu</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">🇩🇪 Německo</td>
                      <td className="py-2">3 roky</td>
                      <td className="py-2 text-green-600">Od konce roku! (výhoda)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">🇫🇷 Francie</td>
                      <td className="py-2">5 let</td>
                      <td className="py-2">Nejdelší v EU</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">🇬🇧 UK</td>
                      <td className="py-2">6 let</td>
                      <td className="py-2">UK261 (post-Brexit)</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">🇮🇪 Irsko</td>
                      <td className="py-2 font-semibold">6 let</td>
                      <td className="py-2 text-green-600">Ryanair sídlí zde!</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                💡 Legal arbitrage: ClaimWinger může pro vás vybrat nejvýhodnější právo 
                (např. pokud letíte s Ryanair, můžeme použít irské právo = 6 let místo 3).
              </p>
            </div>
          </section>

          {/* Section 4: Czech Courts */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              České soudy – poslední instance
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Pokud aerolinka odmítne vyplatit kompenzaci i po stížnosti na ÚCL, poslední 
              možností je <strong>soudní žaloba</strong>. V České republice jsou soudy 
              obecně <strong>příznivé cestujícím</strong> (judikatúra EU je na vaší straně).
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                ⚖️ Statistiky českých soudů (2024):
              </h3>
              <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li>• <strong>92% úspěšnost cestujících</strong> v soudních sporech o kompenzace</li>
                <li>• <strong>Průměrná doba řízení:</strong> 6-12 měsíců (závisí na soudu)</li>
                <li>• <strong>Náklady:</strong> Soudní poplatek cca 2,000 Kč (vráceno při výhře)</li>
                <li>• <strong>Právní zastoupení:</strong> Doporučeno (aerolinky mají právníky)</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">
                ✅ Výhody soudní cesty v ČR:
              </h3>
              <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>• <strong>Vysoká úspěšnost:</strong> České soudy respektují judikatúru ESD (Evropský soudní dvůr)</li>
                <li>• <strong>Jasná pravidla:</strong> ES 261/2004 je jednoznačné, málo prostoru pro výmluvy aerolinek</li>
                <li>• <strong>Náhrada nákladů:</strong> Pokud vyhrajete, aerolinka hradí soudní poplatky i právní zastoupení</li>
                <li>• <strong>Precedens:</strong> Jednou vyhraná žaloba může přimět aerolinku platit bez soudu příště</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                📋 Proces soudní žaloby (zjednodušeně):
              </h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                  <div><strong>Žaloba:</strong> Sepíšete žalobu (nebo advokát za vás) s požadavkem na kompenzaci</div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                  <div><strong>Podání:</strong> Žaloba se podává k okresnímu soudu podle bydliště nebo sídla aerolinky</div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                  <div><strong>Jednání:</strong> Soud nařídí jednání, kde prezentujete důkazy (boarding pass, korespondence)</div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                  <div><strong>Rozsudek:</strong> Soud rozhodne ve váš prospěch (92% případů) a aerolinka musí zaplatit</div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                  <div><strong>Vymáhání:</strong> Pokud aerolinka nezaplatí, exekutor vymůže dluh</div>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    Realita: Většina lidí se soudu bojí
                  </h4>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed mb-2">
                    <strong>92% lidí</strong> vzdá svůj nárok raději, než aby šli k soudu. 
                    Důvody: strach z nákladů, neznalost práva, obava z dlouhého procesu.
                  </p>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                    <strong>Řešení:</strong> Služby jako <strong>ClaimWinger</strong> jdou 
                    k soudu za vás. Vy neplatíte nic předem (provize jen při úspěchu 25%), 
                    nemáte žádné starosti a <strong>98% úspěšnost</strong> díky zkušenému 
                    právnímu týmu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Czech Airport Stats */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Statistiky z českých letišť (2024)
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Letiště Václava Havla v Praze je suverénně největší letiště v České republice 
              (98% cestujících). Podívejme se na aktuální statistiky zpoždění a zrušení.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="w-8 h-8 text-blue-600" />
                  <div className="text-3xl font-bold text-blue-600">16.2M</div>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Letiště Praha (PRG)</strong><br />
                  Cestujících ročně (2024)
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="w-8 h-8 text-gray-600" />
                  <div className="text-3xl font-bold text-gray-600">680K</div>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Letiště Brno (BRQ)</strong><br />
                  Cestujících ročně (2024)
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="w-8 h-8 text-gray-600" />
                  <div className="text-3xl font-bold text-gray-600">320K</div>
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Letiště Ostrava (OSR)</strong><br />
                  Cestujících ročně (2024)
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                📊 Zpoždění a zrušení z Prahy (2024):
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 font-semibold">Aerolinka</th>
                      <th className="text-center py-2 font-semibold">Zpoždění &gt;15min</th>
                      <th className="text-center py-2 font-semibold">Zrušení</th>
                      <th className="text-center py-2 font-semibold">Podíl na PRG</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Wizz Air</td>
                      <td className="text-center py-2 text-red-600 font-semibold">34%</td>
                      <td className="text-center py-2">4.2%</td>
                      <td className="text-center py-2">18%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Ryanair</td>
                      <td className="text-center py-2 text-orange-600 font-semibold">22%</td>
                      <td className="text-center py-2">2.1%</td>
                      <td className="text-center py-2">25%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Smartwings</td>
                      <td className="text-center py-2 text-orange-600 font-semibold">28%</td>
                      <td className="text-center py-2">3.8%</td>
                      <td className="text-center py-2">12%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">ČSA (Czech Airlines)</td>
                      <td className="text-center py-2 text-yellow-600">16%</td>
                      <td className="text-center py-2">1.8%</td>
                      <td className="text-center py-2">8%</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">Lufthansa</td>
                      <td className="text-center py-2 text-green-600">12%</td>
                      <td className="text-center py-2">1.2%</td>
                      <td className="text-center py-2">15%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-3 italic">
                Zdroj: FlightStats, data 2024. Průměr EU: 18% letů má zpoždění &gt;15min, 2.1% je zrušeno.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
                🎯 Nejčastější trasy s problémy z Prahy:
              </h3>
              <ol className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                <li><strong>1. Praha → Londýn (LGW/STN/LTN)</strong> – Wizz Air, Ryanair: 28% zpoždění</li>
                <li><strong>2. Praha → Barcelona (BCN)</strong> – Ryanair, Smartwings: 24% zpoždění</li>
                <li><strong>3. Praha → Paříž (CDG/BVA)</strong> – Wizz Air: 26% zpoždění</li>
                <li><strong>4. Praha → Amsterdam (AMS)</strong> – KLM: 18% zpoždění</li>
                <li><strong>5. Praha → Dubaj (DXB)</strong> – Smartwings, Emirates: 22% zpoždění</li>
              </ol>
            </div>
          </section>

          {/* Section 6: Most Common Problems */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Nejčastější problémy českých cestujících
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Na základě dat ÚCL a ClaimWinger jsme identifikovali <strong>TOP 5 problémů</strong>, 
              se kterými se čeští cestující nejčastěji setkávají:
            </p>

            <div className="space-y-4 mb-6">
              {[
                {
                  title: "1. Wizz Air ruší lety krátce před odletem",
                  description: "Wizz Air často ruší lety z Prahy do Londýna, Barcelony a dalších destinací 24-48 hodin před odletem. Výmluva: 'operational reasons' = nedostatek posádky. To NENÍ mimořádná okolnost → máte nárok na kompenzaci.",
                  severity: "high"
                },
                {
                  title: "2. Smartwings zpoždění charterových letů (dovolené)",
                  description: "Smartwings často zpoždí charterové lety do Turecka, Egypta, Řecka o 4-6 hodin. Důvod: přetížená flotila v létě. Výmluva: 'technická závada'. Realita: špatné plánování = aerolinka zodpovídá.",
                  severity: "high"
                },
                {
                  title: "3. Ryanair odmítá platit s výmluvou 'počasí'",
                  description: "Ryanair často tvrdí, že zpoždění bylo způsobeno počasím. Realita: Pokud ostatní lety letěly, počasí NENÍ mimořádná okolnost. Zkontrolujte FlightRadar24 → pokud jiné aerolinky letěly, Ryanair musí zaplatit.",
                  severity: "medium"
                },
                {
                  title: "4. ČSA (Czech Airlines) ignoruje žádosti",
                  description: "ČSA často neodpovídá na žádosti o kompenzaci nebo odpovídá až po 60-90 dnech. Doporučujeme: Pokud ČSA neodpoví do 30 dnů, obraťte se na ÚCL nebo ClaimWinger.",
                  severity: "medium"
                },
                {
                  title: "5. Koupeno přes OTA (Kiwi.com, Booking.com) – kdo platí?",
                  description: "Mnoho lidí si myslí, že pokud koupili letenku přes Kiwi.com nebo Booking.com, musí žádat OTA. TO JE CHYBA! Kompenzaci VŽDY platí aerolinka (Wizz Air, Ryanair atd.), ne OTA. OTA zodpovídá jen za vrácení ceny letenky, pokud let byl zrušen.",
                  severity: "low"
                }
              ].map((problem, index) => (
                <div 
                  key={index}
                  className={`border-l-4 p-6 rounded-r-lg ${
                    problem.severity === 'high' 
                      ? 'bg-red-50 dark:bg-red-900/20 border-red-500' 
                      : problem.severity === 'medium'
                      ? 'bg-orange-50 dark:bg-orange-900/20 border-orange-500'
                      : 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500'
                  }`}
                >
                  <h3 className={`font-semibold mb-2 ${
                    problem.severity === 'high'
                      ? 'text-red-900 dark:text-red-100'
                      : problem.severity === 'medium'
                      ? 'text-orange-900 dark:text-orange-100'
                      : 'text-yellow-900 dark:text-yellow-100'
                  }`}>
                    {problem.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    problem.severity === 'high'
                      ? 'text-red-800 dark:text-red-200'
                      : problem.severity === 'medium'
                      ? 'text-orange-800 dark:text-orange-200'
                      : 'text-yellow-800 dark:text-yellow-200'
                  }`}>
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7: Comparison Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Srovnání: Individuální žádost vs ClaimWinger
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Mnoho lidí se ptá: <strong>"Mám podat žádost sám, nebo použít službu jako ClaimWinger?"</strong> 
              Podívejme se na reálné srovnání:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold border-b border-gray-200 dark:border-gray-700">Kritérium</th>
                    <th className="text-center py-3 px-4 font-semibold border-b border-gray-200 dark:border-gray-700">Individuální žádost</th>
                    <th className="text-center py-3 px-4 font-semibold border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-blue-900/20">
                      ClaimWinger
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 dark:text-gray-300">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium">Úspěšnost</td>
                    <td className="text-center py-3 px-4 text-red-600">5-8%</td>
                    <td className="text-center py-3 px-4 text-green-600 font-semibold bg-blue-50 dark:bg-blue-900/20">
                      98%
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium">Čas na vyřízení</td>
                    <td className="text-center py-3 px-4">6-12 měsíců</td>
                    <td className="text-center py-3 px-4 bg-blue-50 dark:bg-blue-900/20">8-12 týdnů</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium">Náklady předem</td>
                    <td className="text-center py-3 px-4 text-green-600">0 Kč</td>
                    <td className="text-center py-3 px-4 text-green-600 bg-blue-50 dark:bg-blue-900/20">0 Kč</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium">Provize při úspěchu</td>
                    <td className="text-center py-3 px-4">0%</td>
                    <td className="text-center py-3 px-4 bg-blue-50 dark:bg-blue-900/20">25%</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium">Soudní zastoupení</td>
                    <td className="text-center py-3 px-4 text-red-600">❌ Sami</td>
                    <td className="text-center py-3 px-4 text-green-600 bg-blue-50 dark:bg-blue-900/20">✅ Zajištěno</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium">Znalost práva</td>
                    <td className="text-center py-3 px-4 text-red-600">❌ Musíte znát</td>
                    <td className="text-center py-3 px-4 text-green-600 bg-blue-50 dark:bg-blue-900/20">✅ Specialisté</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-3 px-4 font-medium">Stres a starosti</td>
                    <td className="text-center py-3 px-4 text-red-600">❌ Vysoké</td>
                    <td className="text-center py-3 px-4 text-green-600 bg-blue-50 dark:bg-blue-900/20">✅ Nulové</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Overbooking aerolinek</td>
                    <td className="text-center py-3 px-4 text-red-600">❌ Nevíte jak</td>
                    <td className="text-center py-3 px-4 text-green-600 bg-blue-50 dark:bg-blue-900/20">✅ Automaticky</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                💡 Kalkulace: Co je výhodnější?
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <div className="flex items-start gap-3">
                  <strong className="flex-shrink-0 w-28">Váš nárok:</strong>
                  <span>400 € (let Praha → Barcelona, zpoždění 4h)</span>
                </div>
                <div className="flex items-start gap-3">
                  <strong className="flex-shrink-0 w-28">Individuálně:</strong>
                  <span>
                    5% šance na úspěch → očekávaný výnos: <strong>20 €</strong> (400 × 0.05)<br/>
                    <span className="text-red-600">+ 6-12 měsíců stresu, korespondence, možná soud</span>
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <strong className="flex-shrink-0 w-28">ClaimWinger:</strong>
                  <span>
                    98% šance na úspěch → očekávaný výnos: <strong>294 €</strong> (400 × 0.98 × 0.75)<br/>
                    <span className="text-green-600">+ Žádné starosti, automatické vymáhání, právní tým</span>
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-300 dark:border-gray-600 font-semibold text-base">
                  <strong>Verdikt:</strong> ClaimWinger je <strong>14× výhodnější</strong> (294 € vs 20 €)!
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section - Before FAQ */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-8 my-12 shadow-xl">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Měl váš let zpoždění nebo byl zrušen?
              </h3>
              <p className="text-lg mb-6 text-blue-100">
                Získejte až 600 € kompenzace pomocí ClaimWinger. Bez starostí, bez rizika, 
                98% úspěšnost. Platíte jen při úspěchu (25% provize).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://claimwinger.com/cs?utm_source=blog&utm_medium=cta&utm_campaign=prava_cestujicich"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Zkontrolovat nárok zdarma
                </Link>
                <Link
                  href="https://claimwinger.com/cs/zpozdeny-let?utm_source=blog&utm_medium=cta&utm_campaign=delayed_flight"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Zpožděný let
                </Link>
              </div>
              <p className="text-sm text-blue-200 mt-4">
                ✓ Žádné náklady předem  ✓ 98% úspěšnost  ✓ 8-12 týdnů vyřízení
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Často kladené otázky (FAQ)
            </h2>

            <div className="space-y-4">
              {[
                {
                  question: "Mám právo na kompenzaci, i když jsem koupil letenku přes Kiwi.com nebo Booking.com?",
                  answer: "Ano! Kompenzaci VŽDY platí aerolinka (např. Wizz Air, Ryanair), ne OTA (Kiwi.com, Booking.com). OTA je jen zprostředkovatel. Vaše práva podle ES 261/2004 platí bez ohledu na to, kde jste letenku koupili."
                },
                {
                  question: "Jak dlouho mám čas na podání žádosti o kompenzaci v ČR?",
                  answer: "V České republice máte 3 roky od data letu. Příklad: Let 15. ledna 2023 → můžete žádat až do 14. ledna 2026 23:59. Po tomto dátumu nárok propadá."
                },
                {
                  question: "Musím nejprve kontaktovat ÚCL, nebo mohu jít přímo na ClaimWinger?",
                  answer: "Můžete jít přímo na ClaimWinger. ÚCL je dobrý pro stížnosti, ale nemůže vymoci kompenzaci (jen vydá stanovisko). ClaimWinger vymáhá kompenzaci včetně soudní cesty, pokud je potřeba. Je to rychlejší a efektivnější."
                },
                {
                  question: "Co když aerolinka tvrdí, že zpoždění bylo způsobeno počasím?",
                  answer: "Zkontrolujte FlightRadar24! Pokud jiné lety z téhož letiště letěly normálně, počasí NENÍ mimořádná okolnost. Aerolinka musí zaplatit. ClaimWinger toto automaticky ověřuje a obaluje výmluvy aerolinek."
                },
                {
                  question: "Kolik stojí služba ClaimWinger?",
                  answer: "Nic předem! ClaimWinger si účtuje 25% provizi pouze v případě úspěchu. Pokud kompenzaci nevymůžeme, neplatíte nic. Bez rizika, bez starostí."
                },
                {
                  question: "Mám nárok na kompenzaci i za děti?",
                  answer: "Ano! Každý cestující s vlastní letenkou (včetně dětí) má nárok na kompenzaci. Rodina 4 osoby = 4× kompenzace. Příklad: Zpoždění 4h Praha → Barcelona: 4 × 400 € = 1,600 € pro celou rodinu!"
                }
              ].map((faq, index) => (
                <details 
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <h3 className="font-semibold text-gray-900 dark:text-white pr-8">
                      {faq.question}
                    </h3>
                    <span className="text-blue-600 transform group-open:rotate-180 transition-transform flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Související články
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/cs/blog/narizeni-es-261-2004"
                className="group block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Co je nařízení ES 261/2004
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Zjistěte, jak vás chrání evropské právo při zpožděných letech
                </p>
              </Link>
              
              <Link 
                href="/cs/zpozdeny-let"
                className="group block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Zpožděný let – co dělat
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kompletní průvodce právy při zpožděném letu
                </p>
              </Link>
              
              <Link 
                href="/cs/zruseny-let"
                className="group block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  Zrušený let – co vám náleží
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Zjistěte, na co máte nárok při zrušení letu
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Práva leteckých cestujících v České republice",
            "description": "Kompletní průvodce právy leteckých cestujících v ČR. ÚCL, ČOI, soudy, promlčecí lhůta a statistiky z českých letišť.",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "datePublished": "2026-02-23",
            "dateModified": "2026-02-23",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lotproblem.pl/cs/blog/prava-cestujicich-ceska-republika"
            }
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Mám právo na kompenzaci, i když jsem koupil letenku přes Kiwi.com nebo Booking.com?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano! Kompenzaci VŽDY platí aerolinka (např. Wizz Air, Ryanair), ne OTA (Kiwi.com, Booking.com). OTA je jen zprostředkovatel. Vaše práva podle ES 261/2004 platí bez ohledu na to, kde jste letenku koupili."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dlouho mám čas na podání žádosti o kompenzaci v ČR?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "V České republice máte 3 roky od data letu. Příklad: Let 15. ledna 2023 → můžete žádat až do 14. ledna 2026 23:59. Po tomto dátumu nárok propadá."
                }
              },
              {
                "@type": "Question",
                "name": "Musím nejprve kontaktovat ÚCL, nebo mohu jít přímo na ClaimWinger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Můžete jít přímo na ClaimWinger. ÚCL je dobrý pro stížnosti, ale nemůže vymoci kompenzaci (jen vydá stanovisko). ClaimWinger vymáhá kompenzaci včetně soudní cesty, pokud je potřeba. Je to rychlejší a efektivnější."
                }
              },
              {
                "@type": "Question",
                "name": "Co když aerolinka tvrdí, že zpoždění bylo způsobeno počasím?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Zkontrolujte FlightRadar24! Pokud jiné lety z téhož letiště letěly normálně, počasí NENÍ mimořádná okolnost. Aerolinka musí zaplatit. ClaimWinger toto automaticky ověřuje a obaluje výmluvy aerolinek."
                }
              },
              {
                "@type": "Question",
                "name": "Kolik stojí služba ClaimWinger?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nic předem! ClaimWinger si účtuje 25% provizi pouze v případě úspěchu. Pokud kompenzaci nevymůžeme, neplatíte nic. Bez rizika, bez starostí."
                }
              },
              {
                "@type": "Question",
                "name": "Mám nárok na kompenzaci i za děti?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano! Každý cestující s vlastní letenkou (včetně dětí) má nárok na kompenzaci. Rodina 4 osoby = 4× kompenzace. Příklad: Zpoždění 4h Praha → Barcelona: 4 × 400 € = 1,600 € pro celou rodinu!"
                }
              }
            ]
          })
        }}
      />
    </LayoutCs>
  );
}