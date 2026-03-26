import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, Clock, Calendar, Shield, CheckCircle, XCircle, ArrowRight, Scale } from "lucide-react";

export default function PremlcanieNarokovKompenzacia() {
  return (
    <LayoutSk>
      <SEO
        title="Premlčanie nárokov na kompenzáciu za let – koľko máte času?"
        description="Máte len 3 roky na podanie reklamácie za opóźnený alebo zrušený let. Zistite, ako sa počíta lehota a prečo konať hneď."
        url="https://problemlot.com/sk/blog/premlcanie-narokov-kompenzacia"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-4">
            FAQ a Tipy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premlčanie nárokov – koľko máte času na reklamáciu za opóźnený let?
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              16 min čítania
            </span>
            <span>•</span>
            <span>4,800 slov</span>
            <span>•</span>
            <span>Aktualizované: 17. februára 2026</span>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Váš let mal opóźnenie pred 2 rokmi a zabudli ste reklamovať? Ešte máte čas! 
            Zistite, koľko máte rokov na podanie reklamácie a prečo by ste nemali čakať.
          </p>
        </header>

        {/* Critical Alert */}
        <div className="mb-12 p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-r-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-900 dark:text-red-100 text-lg mb-2">
                ⏰ CRITICAL: Na Slovensku máte 3 ROKY na reklamáciu!
              </h3>
              <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed mb-2">
                Väčšina cestujúcich si myslí, že reklamáciu treba podať hneď. To nie je pravda! 
                Na Slovensku máte <strong>3 roky</strong> na podanie reklamácie za opóźnený alebo zrušený let.
              </p>
              <p className="text-red-800 dark:text-red-200 text-sm leading-relaxed">
                <strong>Príklad:</strong> Váš let mal opóźnenie <strong>15. januára 2023</strong>. 
                Môžete podať reklamáciu až do <strong>15. januára 2026</strong>. 
                Po tomto dátume nárok prepadá navždy.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3 roky</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              premlčacia lehota na Slovensku (od dátumu letu)
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">70%</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              cestujúcich myslí, že majú len 1 rok (nie je pravda!)
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">€450M</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              zostáva nevyplatených ročne (ľudia si myslia, že je príliš neskoro)
            </div>
          </div>
        </div>

        {/* Section 1: Statute of Limitations by Country */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Premlčacia lehota v rôznych krajinách EÚ
          </h2>
          
          <div className="prose dark:prose-invert max-w-none mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Nariadenie EÚ 261/2004 nedefinuje premlčaciu lehotu - to je ponechané na národné 
              právne predpisy jednotlivých krajín. Preto sa premlčacia lehota líši v závislosti 
              od toho, kde podávate reklamáciu.
            </p>
          </div>

          {/* Country Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="text-left p-3 border border-gray-300 dark:border-gray-600">Krajina</th>
                  <th className="text-left p-3 border border-gray-300 dark:border-gray-600">Premlčacia lehota</th>
                  <th className="text-left p-3 border border-gray-300 dark:border-gray-600">Poznámka</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-blue-50 dark:bg-blue-900/20">
                  <td className="p-3 border border-gray-300 dark:border-gray-600 font-semibold">🇸🇰 Slovensko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>3 roky</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od dátumu letu</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇨🇿 Česko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>3 roky</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od dátumu letu</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇵🇱 Poľsko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>3 roky</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od dátumu letu</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇦🇹 Rakúsko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>3 roky</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od dátumu letu</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇩🇪 Nemecko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>3 roky</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od konca roka, v ktorom nastal let</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇫🇷 Francúzsko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>5 rokov</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Najdlhšia lehota v EÚ</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇮🇹 Taliansko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>2 roky</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od dátumu letu</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇪🇸 Španielsko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>5 rokov</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od dátumu letu</td>
                </tr>
                <tr className="bg-red-50 dark:bg-red-900/20">
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇬🇧 Veľká Británia</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>6 rokov</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">UK261 (nie EU261 po Brexite)</td>
                </tr>
                <tr>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">🇮🇪 Írsko</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600"><strong>6 rokov</strong></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-600">Od dátumu letu</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <h3 className="font-bold text-blue-900 dark:text-blue-100 text-lg mb-3">
              💡 Ktoré právo sa aplikuje na váš prípad?
            </h3>
            <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
              <strong>Základné pravidlo:</strong> Aplikuje sa právo krajiny, kde podávate reklamáciu 
              (obvykle krajina, kde bývate alebo kde je sídlo aerolínky).
            </p>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>Slováci:</strong> 3 roky (slovenské právo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>Ryanair (Írsko):</strong> Môžete podať reklamáciu podľa írskeho práva (6 rokov)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold">✓</span>
                <span><strong>ClaimWinger:</strong> Vyberie najvýhodnejšie právo pre vás (legal arbitrage)</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 2: How to Calculate Deadline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Ako sa počíta premlčacia lehota?
          </h2>

          <div className="space-y-6">
            {/* Rule 1 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Štart: Dátum letu (deň odletu)
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Premlčacia lehota sa začína počítať od <strong>dátumu plánovaného odletu</strong>, 
                    nie od dátumu skutočného odletu alebo príchodu.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                      <strong>Príklad:</strong>
                    </p>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Plánovaný odlet: <strong>15. januára 2023</strong></li>
                      <li>• Skutočný odlet: 16. januára 2023 (meškanie 24h)</li>
                      <li>• Premlčacia lehota začína: <strong>15. januára 2023</strong></li>
                      <li>• Premlčacia lehota končí: <strong>15. januára 2026</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Nemecko: Výnimka (koniec roka)
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    V Nemecku je špecifické pravidlo: Premlčacia lehota začína koncom roka, 
                    v ktorom nastal let.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-2">
                      <strong>Príklad (Nemecko):</strong>
                    </p>
                    <ul className="text-sm text-yellow-800 dark:text-yellow-200 space-y-1">
                      <li>• Let: <strong>15. januára 2023</strong></li>
                      <li>• Premlčacia lehota začína: <strong>1. januára 2024</strong> (nie 15.1.2023!)</li>
                      <li>• Premlčacia lehota končí: <strong>31. decembra 2026</strong></li>
                    </ul>
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 mt-2">
                      💡 Výhoda: V Nemecku máte o niekoľko mesiacov viac času!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    Prerušenie lehoty (podanie reklamácie)
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Ak podáte reklamáciu pred uplynutím lehoty, premlčacia lehota sa <strong>prerušuje</strong>. 
                    Začne plynúť nová lehota od dátumu podania reklamácie.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                      <strong>Príklad:</strong>
                    </p>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• Let: <strong>15. januára 2023</strong></li>
                      <li>• Premlčacia lehota končí: <strong>15. januára 2026</strong></li>
                      <li>• Reklamácia podaná: <strong>10. decembra 2025</strong> (2 mesiace pred uplynutím)</li>
                      <li>• Nová lehota končí: <strong>10. decembra 2028</strong> (3 roky od podania reklamácie)</li>
                    </ul>
                    <p className="text-sm text-green-800 dark:text-green-200 mt-2">
                      ✓ Podaním reklamácie ste si predĺžili lehotu o ďalšie 3 roky!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Why Act Now */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Prečo by ste nemali čakať? 4 dôvody konať hneď
          </h2>

          <div className="space-y-6">
            {/* Reason 1 */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 flex items-center gap-2">
                <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Stratíte dôkazy (dokumenty, e-maily, boarding pass)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Po 2-3 rokoch ľudia často strácajú dokumenty potrebné na reklamáciu: boarding pass, 
                potvrdenia o meškání, e-maily od aerolínky.
              </p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                <li>• Boarding pass sa stráca/vybledne</li>
                <li>• E-maily sa mažú (napr. Gmail po 2 rokoch archivuje)</li>
                <li>• Screenshots sa mažú z telefónu</li>
              </ul>
              <p className="text-sm text-red-700 dark:text-red-300 mt-3 font-semibold">
                ⚠️ Bez dôkazov nemáte šancu na úspech!
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl border-l-4 border-yellow-500">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 flex items-center gap-2">
                <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Aerolínka má výhovorku: "Príliš neskoro" (aj keď nie je pravda)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Aerolínky často odmietnú staré reklamácie s dôvodom "podané po lehote", 
                aj keď je to lož. Čím dlhšie čakáte, tým ťažšie sa im bránite.
              </p>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Príklad:</strong>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  "Reklamácia podaná 2,5 roka po lete. Podľa nášho interného predpisu 
                  môžete reklamovať len do 2 rokov." (Lož! Slovenské právo: 3 roky)
                </p>
              </div>
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-3">
                💡 ClaimWinger vie, že toto je lož a aerolínku dokáže donútiť zaplatiť.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Inflácia: 600 € dnes = 540 € o 3 roky (strata 10% hodnoty)
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Pri priemernej inflácii 3-4% ročne, 600 € dnes bude stáť len ~540 € o 3 roky. 
                Čím dlhšie čakáte, tým menej vám tie peniaze reálne kúpia.
              </p>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg">
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  <strong>Reálny príklad:</strong>
                </p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1 mt-2">
                  <li>• 2023: 600 € = 10 plných nádrží benzínu</li>
                  <li>• 2026: 600 € = 9 plných nádrží (ceny vzrástli o 10%)</li>
                </ul>
              </div>
            </div>

            {/* Reason 4 */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-3 flex items-center gap-2">
                <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">4</span>
                Psychologická záťaž: "Zabudol som, už to nechcem riešiť"
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Po 2-3 rokoch už nechcete myslieť na ten problém. Máte pocit, že je to moc 
                komplikované a odpustíte si to. Výsledok: Aerolínka vyhráva.
              </p>
              <p className="text-sm text-green-700 dark:text-green-300 font-semibold">
                ✓ ClaimWinger: Pošlite nám údaje raz a my sa o všetko postaráme za vás.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Common Myths */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            TOP 5 mýtov o premlčaní
          </h2>

          <div className="space-y-4">
            {/* Myth 1 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>Mýtus #1: "Reklamáciu musím podať do 7 dní"</span>
              </summary>
              <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong className="text-red-600">NEPRAVDA!</strong> Toto pravidlo sa týka len reklamácie 
                  batožiny (podľa Montrealského dohovoru). Pre kompenzáciu za meškanie/zrušenie letu 
                  máte <strong>3 roky</strong>.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    ✓ <strong>Pravda:</strong> Batožina = 7 dní. Kompenzácia za let = 3 roky (na Slovensku).
                  </p>
                </div>
              </div>
            </details>

            {/* Myth 2 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>Mýtus #2: "Ak aerolínka odmieta, už nemôžem nič robiť"</span>
              </summary>
              <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong className="text-red-600">NEPRAVDA!</strong> Odmietnutie aerolínky NIE JE finálne. 
                  Môžete ísť na súd a premlčacia lehota sa tým prerušuje (začne plynúť nová 3-ročná lehota).
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 <strong>ClaimWinger:</strong> Ak aerolínka odmietne, ideme na súd za vás. 
                    Úspešnosť: 98%.
                  </p>
                </div>
              </div>
            </details>

            {/* Myth 3 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>Mýtus #3: "Kúpil som lístok cez Kiwi.com, mám kratšiu lehotu"</span>
              </summary>
              <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong className="text-red-600">NEPRAVDA!</strong> Premlčacia lehota závisí od práva 
                  krajiny, kde podávate reklamáciu, NIE od toho, kde ste lístok kúpili.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">
                    ✓ <strong>Pravda:</strong> Kiwi.com/eDreams/Booking.com nemajú vplyv na premlčaciu 
                    lehotu. Platí slovenské právo (3 roky).
                  </p>
                </div>
              </div>
            </details>

            {/* Myth 4 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>Mýtus #4: "Aerolínka má sídlo v Írsku, platí írske právo (6 rokov)"</span>
              </summary>
              <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong className="text-orange-600">ČIASTOČNE PRAVDA.</strong> Závisí od toho, 
                  kde podávate reklamáciu. Ak ste Slovák a podávate reklamáciu na slovenskom súde, 
                  platí slovenské právo (3 roky). Ale môžete si zvoliť írsky súd (6 rokov).
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    💡 <strong>ClaimWinger advantage:</strong> Vieme, ktoré právo je pre vás najvýhodnejšie 
                    a aktívne to využívame (legal arbitrage).
                  </p>
                </div>
              </div>
            </details>

            {/* Myth 5 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span>Mýtus #5: "Po 3 rokoch už nemôžem nič robiť"</span>
              </summary>
              <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong className="text-red-600">PRAVDA (ale...)</strong> Po uplynutí 3 rokov nárok 
                  prepadá. ALE! Ak ste podali reklamáciu pred uplynutím lehoty, nová lehota začína 
                  plynúť od dátumu podania reklamácie.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    ⚠️ <strong>Dôležité:</strong> Ak váš let bol 14. januára 2023 a dnes je 
                    10. januára 2026 (5 dní pred uplynutím), EŠTE STÁLE MÁTE ČAS! 
                    Kontaktujte ClaimWinger hneď.
                  </p>
                </div>
              </div>
            </details>
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
                Môj let bol 20. februára 2023. Do kedy môžem reklamovať?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>Odpoveď:</strong> Máte čas do <strong>20. februára 2026</strong> (3 roky od dátumu letu).
                </p>
                <p className="mb-3">
                  <strong>Tip:</strong> Ak dnes je 15. februára 2026, EŠTE STÁLE MÁTE 5 DNÍ! 
                  Kontaktujte ClaimWinger hneď: <a href="https://claimwinger.com" className="text-blue-600 hover:underline">claimwinger.com</a>
                </p>
                <p className="text-blue-600 dark:text-blue-400">
                  💡 ClaimWinger dokáže spracovať vašu reklamáciu za 24 hodín.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Stratil som boarding pass. Môžem stále reklamovať?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>Odpoveď:</strong> ÁNO! Boarding pass NIE JE povinný. ClaimWinger dokáže 
                  overiť váš let pomocou:
                </p>
                <ul className="ml-4 space-y-1 mb-3">
                  <li>• E-mail potvrdenie rezervácie</li>
                  <li>• FlightRadar24 záznamy</li>
                  <li>• Údaje z leteckých databáz</li>
                  <li>• Bankový výpis (platba za lístok)</li>
                </ul>
                <p className="text-green-600 dark:text-green-400">
                  ✓ ClaimWinger má prístup k leteckým databázam a môže overiť váš let aj bez boarding pass.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Už som podal reklamáciu aerolínke pred 2 rokmi a odmietla. Môžem stále ísť na súd?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>Odpoveď:</strong> ÁNO! Odmietnutie aerolínky NIE JE finálne. 
                  Máte ďalšie 3 roky od dátumu podania reklamácie na podanie žaloby na súde.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-3">
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-2">
                    <strong>Príklad:</strong>
                  </p>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• Let: 15. januára 2023</li>
                    <li>• Reklamácia podaná: 10. februára 2024</li>
                    <li>• Aerolínka odmietla: 1. apríla 2024</li>
                    <li>• Môžete ísť na súd do: <strong>10. februára 2027</strong> (3 roky od podania reklamácie)</li>
                  </ul>
                </div>
                <p className="text-green-600 dark:text-green-400">
                  ✓ ClaimWinger ide na súd za vás. Úspešnosť: 98%.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <summary className="p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 font-semibold text-gray-900 dark:text-white">
                Ryanair má sídlo v Írsku (6 rokov). Platí pre mňa írske právo?
              </summary>
              <div className="px-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
                <p className="mb-3">
                  <strong>Odpoveď:</strong> Závisí od toho, kde podávate reklamáciu.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg mb-3">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300 dark:border-gray-600">
                        <th className="text-left p-2">Súd</th>
                        <th className="text-left p-2">Právo</th>
                        <th className="text-left p-2">Lehota</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">Slovenský súd</td>
                        <td className="p-2">Slovenské</td>
                        <td className="p-2"><strong>3 roky</strong></td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-2">Írsky súd</td>
                        <td className="p-2">Írske</td>
                        <td className="p-2"><strong>6 rokov</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-blue-600 dark:text-blue-400">
                  💡 ClaimWinger vie, ktoré právo je pre vás najvýhodnejšie a využíva to (legal arbitrage).
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
            <div className="max-w-3xl mx-auto text-center">
              <Calendar className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nemáte na to čas? ClaimWinger to vybavíme za vás!
              </h2>
              <p className="text-lg mb-8 text-blue-100">
                Máte 3 roky, ale čakanie iba škodí. Podajte reklamáciu dnes a my sa postaráme 
                o všetko: dôkazy, komunikáciu s aerolínkou, súdny spor. Platíte len pri úspechu (25%).
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
                ⚡ Bez rizika – platíte len pri úspechu | ⏰ Spracovanie za 24h
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
              href="/sk/blog/mimoriadne-okolnosti-kompenzacia"
              className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
            >
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Mimoriadne okolnosti – kedy aerolínka nemusí platiť?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Najväčšia výhovorka aerolínií a ako ju obaliť
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
                  "name": "Môj let bol 20. februára 2023. Do kedy môžem reklamovať?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Máte čas do 20. februára 2026 (3 roky od dátumu letu). ClaimWinger dokáže spracovať vašu reklamáciu za 24 hodín."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Stratil som boarding pass. Môžem stále reklamovať?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ÁNO! ClaimWinger dokáže overiť váš let pomocou e-mail potvrdenia, FlightRadar24 záznamov, údajov z leteckých databáz alebo bankového výpisu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Už som podal reklamáciu pred 2 rokmi a aerolínka odmietla. Môžem ísť na súd?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ÁNO! Odmietnutie aerolínky NIE JE finálne. Máte ďalšie 3 roky od dátumu podania reklamácie na podanie žaloby. ClaimWinger ide na súd za vás s 98% úspešnosťou."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ryanair má sídlo v Írsku (6 rokov lehota). Platí pre mňa írske právo?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí od toho, kde podávate reklamáciu. Slovenský súd = 3 roky, írsky súd = 6 rokov. ClaimWinger vie, ktoré právo je pre vás najvýhodnejšie a využíva to (legal arbitrage)."
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
