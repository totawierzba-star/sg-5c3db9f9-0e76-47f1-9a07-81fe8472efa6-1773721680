import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, CheckCircle, Euro, Plane, Shield, XCircle, Scale, Users, Clock, Globe } from "lucide-react";

export default function NarizeniES2612004Article() {
  return (
    <LayoutCs>
      <SEO
        title="Nařízení ES 261/2004 – práva cestujících při zpoždění letu"
        description="Zjistěte, jak nařízení ES 261/2004 chrání vaše práva při zpožděných a zrušených letech. Až 600 € kompenzace – zjistěte, kdy máte nárok."
        url="https://problemlot.com/cs/blog/narizeni-es-261-2004"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          <span className="mx-2">/</span>
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-white">Nařízení ES 261/2004</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Právní základ
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Co je nařízení ES 261/2004 a jak chrání cestující v EU
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Čtení: 12 minut</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Pro: Všechny cestující v EU</span>
            </div>
            <div className="flex items-center gap-2">
              <Euro className="h-4 w-4" />
              <span>Až 600 € kompenzace</span>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Nařízení ES 261/2004 je nejdůležitější právní předpis Evropské unie, který chrání práva leteckých cestujících. 
            Pokud máte zpožděný nebo zrušený let, <strong>máte právo na kompenzaci až 600 €</strong> – bez ohledu na cenu letenky.
          </p>
        </header>

        {/* Alert Box */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-6 mb-12 rounded-r-lg">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                ⚖️ Klíčová informace:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Nařízení ES 261/2004 platí automaticky pro všechny lety z EU (bez ohledu na aeroliku) 
                a pro lety do EU (pokud provozuje aerolinka z EU). <strong>Nemusíte si kupovat žádné 
                speciální pojištění – právo na kompenzaci máte ze zákona!</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Platí od 2005</strong> – téměř 20 let ochrany cestujících</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Nezávislé na ceně letenky</strong> – i nízkonákladové lety jsou pokryty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Až 600 € kompenzace</strong> za jeden zpožděný nebo zrušený let</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              Co je nařízení ES 261/2004?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              <strong>Nařízení Evropského parlamentu a Rady (ES) č. 261/2004</strong> je právní předpis, 
              který stanovuje <strong>společná pravidla pro náhradu a pomoc cestujícím</strong> v případě 
              odepření nástupu na palubu, zrušení nebo významného zpoždění letů.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-xl">
                📜 Plný název nařízení:
              </h3>
              <p className="text-gray-700 dark:text-gray-300 italic text-sm mb-3">
                "Nařízení Evropského parlamentu a Rady (ES) č. 261/2004 ze dne 11. února 2004, 
                kterým se stanoví společná pravidla náhrady a pomoci cestujícím v případě odepření 
                nástupu na palubu, zrušení nebo významného zpoždění letů."
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Přijato:</strong> 11. února 2004</li>
                <li>• <strong>V platnosti od:</strong> 17. února 2005</li>
                <li>• <strong>Platí v:</strong> Všech 27 zemích EU + Island, Norsko, Švýcarsko</li>
                <li>• <strong>Upraveno:</strong> 2008 (rozhodnutí ESD), 2016 (Brexit změny)</li>
              </ul>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Nařízení vzniklo jako reakce na <strong>rostoucí počet stížností cestujících</strong> 
              na aeroliky, které odmítaly vyplácet kompenzace nebo poskytovat pomoc při problémech s lety. 
              Před rokem 2005 neexistovala jednotná pravidla a cestující často zůstávali bez nároku na náhradu.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              Na jaké lety se nařízení vztahuje?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Nařízení ES 261/2004 se vztahuje na <strong>všechny lety odlétající z EU</strong> (bez ohledu 
              na aeroliku) a na <strong>lety přilétající do EU provozované aerolkou z EU</strong>. 
              To znamená, že ochrana platí pro miliony cestujících ročně.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Covered Flights */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    ✅ Pokryté lety
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Praha → Londýn</strong> (Ryanair, Wizz Air, ČSA...)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Praha → New York</strong> (ČSA, Lufthansa...)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Praha → Bangkok</strong> (Czech Airlines, Emirates...)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>New York → Praha</strong> (ČSA, Lufthansa, ale NE American Airlines)</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 italic">
                  ✅ Lety z EU = vždy pokryté<br />
                  ✅ Lety do EU = jen pokud provozuje aerolinka z EU
                </p>
              </div>

              {/* Not Covered Flights */}
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                    ❌ Nepokryté lety
                  </h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1 rotate-180" />
                    <span><strong>New York → Bangkok</strong> (mimo EU, ne-EU aerolinka)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1 rotate-180" />
                    <span><strong>Bangkok → Praha</strong> (Thai Airways = ne-EU aerolinka)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1 rotate-180" />
                    <span><strong>Dubaj → Praha</strong> (Emirates = ne-EU aerolinka)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Plane className="h-4 w-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-1 rotate-180" />
                    <span><strong>Soukromé lety</strong> (privátní chartery, vládní lety)</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-4 italic">
                  ❌ Lety mimo EU + ne-EU aerolinka = nepokryté<br />
                  ❌ Soukromé/vojenské lety = nepokryté
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    ⚠️ Brexit a UK261:
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Po Brexitu (1. ledna 2021) Velká Británie vytvořila vlastní verzi: <strong>UK261</strong>. 
                    Funguje velmi podobně jako ES 261/2004, ale platí pro lety z UK a pro lety do UK 
                    provozované britskými aerolikami (British Airways, EasyJet UK, Jet2...).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              💰 Kolik můžete získat podle ES 261/2004?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Výše kompenzace <strong>závisí pouze na vzdálenosti letu</strong>, nikoliv na ceně letenky. 
              To znamená, že i když jste koupili letenku za 30 €, můžete dostat kompenzaci 250 € nebo více!
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-blue-600 dark:bg-blue-700 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Vzdálenost letu</th>
                    <th className="px-6 py-4 text-left font-semibold">Kompenzace</th>
                    <th className="px-6 py-4 text-left font-semibold">Příklady tras</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                      Do 1,500 km
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full font-semibold">
                        <Euro className="h-4 w-4" />
                        250 €
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      Praha → Londýn<br />
                      Praha → Berlín<br />
                      Praha → Vídeň
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                      1,500 – 3,500 km
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold">
                        <Euro className="h-4 w-4" />
                        400 €
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      Praha → Barcelona<br />
                      Praha → Atény<br />
                      Praha → Dubrovník
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 dark:text-white font-medium">
                      Více než 3,500 km
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full font-semibold">
                        <Euro className="h-4 w-4" />
                        600 €
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                      Praha → New York<br />
                      Praha → Bangkok<br />
                      Praha → Dubaj
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Důležité poznámky:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Kompenzace je <strong>nezávislá na ceně letenky</strong> – i za 30€ letenku můžete dostat 250€</li>
                <li>• Vzdálenost se počítá <strong>"great circle distance"</strong> (nejkratší vzdálenost mezi letišti)</li>
                <li>• Pro přestupní lety se počítá <strong>celková vzdálenost</strong> (Praha → Frankfurt → New York = 6,380 km = 600 €)</li>
                <li>• Kompenzaci dostanete <strong>na osobu</strong> (rodina 4 osob = 4× kompenzace)</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              📋 Kdy máte nárok na kompenzaci?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Nařízení ES 261/2004 stanovuje <strong>čtyři základní podmínky</strong>, které musí být 
              splněny současně, abyste měli nárok na kompenzaci. Pokud i jen jedna podmínka není splněna, 
              aerolinka nemusí platit.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Let musí být pokryt nařízením
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Let odlétá z EU (jakákoliv aerolinka) nebo přilétá do EU (aerolinka z EU)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Zpoždění ≥3 hodiny NEBO zrušení
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Příchod na cílové letiště se zpožděním 3+ hodin nebo let byl zrušen {'<'}14 dní před odletem
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Platná rezervace a check-in
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Máte potvrzenou rezervaci a dostavili jste se včas na check-in (obvykle 45 min před odletem)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 border-2 border-blue-200 dark:border-blue-700 p-6 rounded-lg">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Není mimořádná okolnost
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Zpoždění/zrušení nebylo způsobeno mimořádnou okolností (hurikán, válka, teroristický útok)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    ❌ Kdy NEMÁTE nárok:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>• <strong>Zpoždění {'<'} 3 hodiny</strong> – nárok na kompenzaci nevzniká (ale máte právo na péči: jídlo, pití)</li>
                    <li>• <strong>Zrušení oznámeno {'>'} 14 dní dopředu</strong> – aerolinka vám musí nabídnout alternativu, ale nemusí platit kompenzaci</li>
                    <li>• <strong>Mimořádná okolnost</strong> – např. hurikán, válka, teroristický útok, ATC stávka (NE stávka posádky!)</li>
                    <li>• <strong>Nepřišli jste včas na check-in</strong> – aerolinka má právo odmítnout nástup bez kompenzace</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Article CTA */}
          <div className="my-12 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-start gap-6">
              <div className="hidden md:block bg-white/10 p-4 rounded-xl">
                <Euro className="h-12 w-12" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Měli jste zpožděný nebo zrušený let?
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  ClaimWinger vám pomůže získat kompenzaci až 600 € za pouhých 3 minuty. 
                  Bez rizika – platíte pouze v případě úspěchu (25% z kompenzace).
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="https://claimwinger.com/cs?utm_source=blog&utm_medium=article&utm_campaign=narizeni_es_261"
                    className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Zkontrolovat nárok na kompenzaci
                    <span className="text-xl">→</span>
                  </Link>
                  <Link
                    href="https://claimwinger.com/cs/zpozdeny-let?utm_source=blog&utm_medium=cta&utm_campaign=delayed_flight"
                    className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                  >
                    Zpožděný let
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              🚫 Co NENÍ pokryto nařízením ES 261/2004?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Je důležité vědět, <strong>co nařízení NEpokrývá</strong>. Mnoho cestujících se mylně domnívá, 
              že mají nárok na kompenzaci za jakýkoliv problém s letem. Realita je jiná:
            </p>

            <div className="grid gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 dark:border-gray-600 p-6 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  1. Ztracená nebo poškozená zavazadla
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Spadá pod Montrealskou úmluvu</strong>, nikoliv pod ES 261/2004. 
                  Náhrady se řídí jiným právním předpisem (až ~1,300 € za ztracenou/poškozenou zavazadlo).
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  💡 Tip: Reklamaci musíte podat do 7 dní od příletu (zavazadlo) nebo 21 dní (zpoždění zavazadla)
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 dark:border-gray-600 p-6 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  2. Zmeškané události kvůli zpoždění
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Nemáte nárok na náhradu dodatečných nákladů</strong> (zmeškaná svatba, koncert, 
                  pracovní schůzka). ES 261/2004 pokrývá pouze přímo let, nikoliv následné škody.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  ⚠️ Výjimka: Pokud máte cestovní pojištění, může pokrýt dodatečné náklady (ztracené ubytování, akce)
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 dark:border-gray-600 p-6 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  3. "Pohodlí" a kvalita služeb na palubě
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Špatná kvalita jídla, nefunkční Wi-Fi, špinavé sedačky</strong> – to nejsou důvody 
                  pro kompenzaci podle ES 261/2004. Můžete se stěžovat aerolince, ale nárok na peníze nevzniká.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  💡 Tip: Fotit problémy a napsat stížnost na zákaznický servis aerolinky (někdy dobrovolně vrátí část peněz)
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-400 dark:border-gray-600 p-6 rounded-r-lg">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                  4. Zpoždění {'<'} 3 hodiny
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Kompenzace vzniká až od 3 hodin zpoždění</strong> při příchodu. 
                  Pokud je zpoždění 2 hodiny 59 minut, kompenzaci nedostanete (ale máte právo na péči na letišti).
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 italic">
                  ⚠️ Počítá se čas příchodu, nikoliv odletu! Let odlétá 4h pozdě, ale přílétá 2h 30min pozdě = ŽÁDNÁ kompenzace
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              🇨🇿 Jak funguje ES 261/2004 v České republice?
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              V České republice je nařízení ES 261/2004 <strong>přímo aplikovatelné</strong> – není třeba 
              žádný národní zákon. To znamená, že čeští cestující mají stejná práva jako kdokoliv jiný v EU.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                📌 České specifika:
              </h3>
              <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold mt-0.5">1</span>
                  <div>
                    <strong>Úřad pro civilní letectví (ÚCL)</strong><br />
                    Je národní dozorový orgán pro civilní letectví v ČR. Pokud aerolinka odmítá vyplácet kompenzaci, 
                    můžete podat stížnost na ÚCL (zdarma). ÚCL může vydat rozhodnutí, ale nemůže přímo vynutit platbu.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold mt-0.5">2</span>
                  <div>
                    <strong>Česká obchodní inspekce (ČOI)</strong><br />
                    ČOI se zabývá ochranou spotřebitelů v ČR. V některých případech lze podat podnět na ČOI, 
                    která může vyšetřovat nekalé praktiky aerolinek.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold mt-0.5">3</span>
                  <div>
                    <strong>Promlčecí lhůta: 3 roky</strong><br />
                    V ČR máte <strong>3 roky od data letu</strong> na podání žádosti o kompenzaci. 
                    To je výhoda oproti některým zemím (např. Velká Británie má 6 let, ale Itálie jen 2 roky).
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-bold mt-0.5">4</span>
                  <div>
                    <strong>České soudy jsou pro-spotřebitelské</strong><br />
                    Pokud se věc dostane k soudu, české soudy mají tendenci rozhodovat ve prospěch cestujících. 
                    ClaimWinger využívá tuto výhodu při vyjednávání s aerolinkami.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 dark:border-green-400 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    ✅ Dobrá zpráva pro české cestující:
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Čeští cestující jsou <strong>relativně dobře chráněni</strong> díky ES 261/2004. 
                    Úspěšnost žádostí o kompenzaci v ČR je vyšší než v mnoha jiných zemích EU, 
                    protože soudy jsou pro-spotřebitelské a ÚCL aktivně monitoruje aeroliky.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    <strong>ClaimWinger má úspěšnost 92%</strong> v ČR díky znalosti českého právního prostředí 
                    a dobrým vztahům s úřady. Pokud aerolinka odmítne, ClaimWinger jde k soudu – za vás, bez rizika.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA before FAQ */}
          <div className="my-12 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white p-8 rounded-2xl shadow-xl">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Získejte svou kompenzaci ještě dnes
              </h3>
              <p className="text-green-100 mb-6 text-lg leading-relaxed">
                ClaimWinger vyřídí celý proces za vás – od podání žádosti až po soudní spor (pokud je třeba). 
                <strong>Platíte pouze v případě úspěchu</strong> (25% z kompenzace).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="https://claimwinger.com/cs?utm_source=blog&utm_medium=cta&utm_campaign=narizeni_bottom"
                  className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
                >
                  <Euro className="h-6 w-6" />
                  Zkontrolovat nárok zdarma
                </Link>
                <div className="flex items-center gap-2 text-green-100 text-sm">
                  <CheckCircle className="h-5 w-5" />
                  <span>Bez rizika • 3 minuty • 92% úspěšnost</span>
                </div>
              </div>
              <p className="text-green-200 text-sm mt-4">
                ✓ Již 25,000+ spokojených zákazníků z České republiky<br />
                ✓ Průměrná kompenzace: 380 € na osobu
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              ❓ Často kladené otázky (FAQ)
            </h2>
            
            <div className="space-y-6">
              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span>Platí ES 261/2004 i na levné letenky (Ryanair, Wizz Air)?</span>
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">
                  <p className="mb-3">
                    <strong>ANO, absolutně!</strong> Nařízení ES 261/2004 se vztahuje na <strong>všechny komerční lety</strong> 
                    provozované v EU, bez ohledu na cenu letenky nebo typ aerolinky.
                  </p>
                  <p className="text-sm">
                    To znamená, že i když jste koupili letenku za 30 € u Ryanair nebo Wizz Air, máte stejná práva 
                    na kompenzaci až 600 € jako cestující s drahým bussiness letem. Nízkonákladové aeroliky to často 
                    zatajují a snaží se vyhnout vyplácení kompenzací – proto existuje ClaimWinger, který vám pomůže 
                    získat peníze, které vám patří.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span>Musím si koupit speciální pojištění, abych měl nárok na kompenzaci?</span>
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">
                  <p className="mb-3">
                    <strong>NE, vůbec ne!</strong> Právo na kompenzaci podle ES 261/2004 máte <strong>automaticky ze zákona</strong>, 
                    bez nutnosti jakéhokoliv dodatečného pojištění.
                  </p>
                  <p className="text-sm">
                    Cestovní pojištění může pokrýt jiné věci (ztracená zavazadla, zdravotní péče v zahraničí, 
                    zmeškaná události), ale <strong>kompenzace za zpožděný/zrušený let je garantována nařízením EU</strong> 
                    a nepotřebujete k ní žádné pojištění. Pokud vám aerolinka tvrdí, že "musíte mít pojištění", lže vám.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span>Platí ES 261/2004 i pro lety mimo EU (např. do USA, Thajska)?</span>
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">
                  <p className="mb-3">
                    <strong>Záleží na směru letu a aerolince:</strong>
                  </p>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li><strong>Technická závada</strong> – 99% případů = aerolinka zodpovídá (údržba je její povinnost)</li>
                    <li><strong>Stávka posádky</strong> (piloti, stewardky) = aerolinka zodpovídá (interní problém)</li>
                    <li><strong>Nedostatek posádky</strong> – aerolinka zodpovídá (špatné plánování)</li>
                    <li><strong>Počasí</strong> – pokud ostatní lety létaly, aerolinka zodpovídá (lepší vybavení = její volba)</li>
                  </ul>
                  <p className="text-sm mt-3">
                    💡 <strong>ClaimWinger ověří</strong> pomocí FlightRadar24, meteorologických dat a soudní judikatury, 
                    zda je výmluva aerolinky pravdivá. <strong>V 92% případů zjišťujeme, že aerolinka lže</strong> a vymáháme kompenzaci.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span>Jak dlouho mám čas na podání žádosti o kompenzaci?</span>
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">
                  <p className="mb-3">
                    <strong>V České republice máte 3 roky od data letu.</strong>
                  </p>
                  <p className="text-sm mb-3">
                    Příklad: Váš let měl zpoždění 15. ledna 2023. Můžete podat žádost o kompenzaci až do 15. ledna 2026. 
                    Po tomto datu nárok propadá navždy.
                  </p>
                  <p className="text-sm mb-3">
                    <strong>Proč NEČEKAT:</strong>
                  </p>
                  <ul className="space-y-2 text-sm list-disc list-inside">
                    <li>Po 2-3 letech lidé ztrácejí důkazy (palubní vstupenky, screenshoty, emaily)</li>
                    <li>Aeroliky častěji odmítají staré žádosti (i když je to nepravdivé)</li>
                    <li>Inflace: 600 € dnes ≠ 600 € za 3 roky (ztráta kupní síly ~10%)</li>
                    <li>Psychologická zátěž: Po 2-3 letech už o tom nechcete přemýšlet</li>
                  </ul>
                  <p className="text-sm mt-3">
                    💡 <strong>ClaimWinger vyřídí vše za 3 minuty.</strong> Odesílejte data jednou, my vyřídíme celý proces – 
                    včetně soudního sporu, pokud je třeba.
                  </p>
                </div>
              </details>

              <details className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center justify-between">
                  <span>Mohu dostat kompenzaci i pro děti v mé rezervaci?</span>
                  <span className="text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300">
                  <p className="mb-3">
                    <strong>ANO!</strong> Děti mají <strong>stejné právo na kompenzaci jako dospělí</strong> – 
                    pokud mají vlastní letenku (i když letí zdarma nebo s dětskou slevou).
                  </p>
                  <p className="text-sm mb-3">
                    <strong>Příklad:</strong> Rodina 4 osob (2 dospělí + 2 děti) má zpožděný let Praha → Barcelona (400 € kompenzace na osobu).
                  </p>
                  <p className="text-sm font-semibold mb-3">
                    Celková kompenzace: 4 × 400 € = <span className="text-green-600 dark:text-green-400">1,600 €</span>
                  </p>
                  <p className="text-sm">
                    ⚠️ <strong>Pozor:</strong> Pokud dítě letí jako "infant" (do 2 let, sedí na klíně rodiče, bez vlastní letenky), 
                    nemá nárok na samostatnou kompenzaci. Jakmile má vlastní sedadlo + letenku → má nárok (i za 1 €).
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📚 Související články
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/cs/zpozdeny-let"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Zpožděný let – vaše práva
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Zjistěte, kdy máte nárok na kompenzaci za zpožděný let a jak ji získat.
                </p>
              </Link>
              <Link
                href="/cs/zruseny-let"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Zrušený let – co dělat?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kompletní průvodce kompenzací a právy při zrušeném letu.
                </p>
              </Link>
              <Link
                href="/cs/kompenzace-kalkulacka"
                className="block bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Kalkulačka kompenzací
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Zjistěte okamžitě, kolik můžete dostat za zpožděný nebo zrušený let.
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
            "headline": "Co je nařízení ES 261/2004 a jak chrání cestující v EU",
            "description": "Komplexní průvodce nařízením ES 261/2004, které chrání práva leteckých cestujících v EU. Zjistěte, kdy máte nárok na kompenzaci až 600 €.",
            "image": "https://problemlot.com/og-image.png",
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
              "@id": "https://problemlot.com/cs/blog/narizeni-es-261-2004"
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
                "name": "Platí ES 261/2004 i na levné letenky (Ryanair, Wizz Air)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO, absolutně! Nařízení ES 261/2004 se vztahuje na všechny komerční lety provozované v EU, bez ohledu na cenu letenky nebo typ aerolinky. To znamená, že i když jste koupili letenku za 30 € u Ryanair nebo Wizz Air, máte stejná práva na kompenzaci až 600 € jako cestující s drahým business letem."
                }
              },
              {
                "@type": "Question",
                "name": "Musím si koupit speciální pojištění, abych měl nárok na kompenzaci?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NE, vůbec ne! Právo na kompenzaci podle ES 261/2004 máte automaticky ze zákona, bez nutnosti jakéhokoliv dodatečného pojištění. Cestovní pojištění může pokrýt jiné věci, ale kompenzace za zpožděný/zrušený let je garantována nařízením EU a nepotřebujete k ní žádné pojištění."
                }
              },
              {
                "@type": "Question",
                "name": "Platí ES 261/2004 i pro lety mimo EU?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Záleží na směru letu a aerolince. Pokud odlétáte z EU, máte vždy nárok (jakákoliv aerolinka). Pokud přilétáte do EU, máte nárok jen pokud provozuje aerolinka z EU. Například: Praha → New York (jakákoliv aerolinka) = pokryto, New York → Praha (jen EU aerolinka) = pokryto."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dlouho mám čas na podání žádosti o kompenzaci?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "V České republice máte 3 roky od data letu. Například: Váš let měl zpoždění 15. ledna 2023, můžete podat žádost až do 15. ledna 2026. Po tomto datu nárok propadá navždy."
                }
              },
              {
                "@type": "Question",
                "name": "Mohu dostat kompenzaci i pro děti v mé rezervaci?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO! Děti mají stejné právo na kompenzaci jako dospělí – pokud mají vlastní letenku. Rodina 4 osob může dostat až 1,600 € celkové kompenzace (4 × 400 €). Pouze kojenci bez vlastního sedadla ('infant') nemají nárok na samostatnou kompenzaci."
                }
              }
            ]
          })
        }}
      />
    </LayoutCs>
  );
}
