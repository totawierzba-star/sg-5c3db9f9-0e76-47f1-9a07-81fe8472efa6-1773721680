import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, XCircle, AlertTriangle, Clock, Plane, Shield, FileText, Users } from "lucide-react";

export default function KdyMateNarokKompenzaci() {
  return (
    <LayoutCs>
      <SEO
        title="Kdy máte nárok na kompenzaci za zpožděný let? Průvodce 2026"
        description="Zjistěte, kdy vám přísluší kompenzace za zpožděný let. Minimální zpoždění, vzdálenost letu, výjimky – kompletní průvodce s příklady."
        image="/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">
              Domů
            </Link>
            <span>/</span>
            <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span>/</span>
            <span>Kdy máte nárok</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Kdy máte nárok na kompenzaci za zpožděný let?
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>15 min čtení</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>4,200 slov</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>Aktualizováno: 23. února 2026</span>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Nařízení ES 261/2004 chrání vaše práva
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Pokud váš let měl zpoždění 3+ hodiny, můžete mít nárok na kompenzaci <strong>250–600 €</strong> podle vzdálenosti letu. 
                  Ale pozor – musíte splnit všechny 4 podmínky, které si vysvětlíme v tomto článku.
                </p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Zpožděný let je frustrující. Ale věděli jste, že <strong>92 % cestujících</strong> nevyužije svůj nárok na kompenzaci? 
            Důvod je prostý: Neví, zda mají nárok, nebo si myslí, že proces je příliš složitý.
          </p>

          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            V tomto komplexním průvodci se dozvíte <strong>přesně</strong>, kdy máte nárok na kompenzaci, jak se měří zpoždění, 
            co jsou mimořádné okolnosti a jak se vyhnout častým chybám, kvůli kterým lidé přicházejí o peníze.
          </p>
        </header>

        {/* Quick Checklist */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ✅ Rychlý test: Mám nárok na kompenzaci?
          </h2>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 rounded-xl p-8 mb-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Odpovězte ANO na všechny 4 otázky → máte nárok na kompenzaci:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Měl váš let zpoždění 3 hodiny nebo více při příjezdu?
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    (Počítá se čas příletu, ne odletu)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Letěl jste z/do EU, nebo provozovala let evropská aerolinka?
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    (Praha → New York ✅ | New York → Tokio ❌)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Dokončili jste check-in včas (online nebo na letišti)?
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    (Obvykle 45 min před odletem pro EU lety)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Nebylo zpoždění způsobeno mimořádnou okolností?
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    (Technická závada ✅ kompenzace | Hurikán ❌)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                <strong>💡 TIP:</strong> Pokud si nejste jisti některou z odpovědí, přečtěte si podrobné vysvětlení níže, 
                nebo nechte <Link href="https://claimwinger.com/cs?utm_source=blog&utm_medium=article&utm_campaign=kdy_mate_narok" className="text-blue-600 dark:text-blue-400 underline font-semibold">ClaimWinger</Link> zdarma zkontrolovat váš nárok za 2 minuty.
              </p>
            </div>
          </div>
        </section>

        {/* Podmínka #1: Minimální zpoždění */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            📏 Podmínka #1: Minimální zpoždění 3 hodiny
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Podle <strong>nařízení ES 261/2004</strong> vzniká nárok na kompenzaci, pokud váš let dorazil na místo určení 
              s <strong>zpožděním 3 hodiny nebo více</strong>.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ⏰ Jak se měří zpoždění?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>SPRÁVNĚ:</strong> Počítá se čas otevření dveří letadla na cílové destinaci (ATA – Actual Time of Arrival)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>ŠPATNĚ:</strong> Zpoždění odletu se nezapočítává (pokud letadlo doletí rychleji a dorazí s menším zpožděním)
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Příklad výpočtu zpoždění
            </h3>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Váš let:</strong> Praha (PRG) → Barcelona (BCN)
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>📅 <strong>Plánovaný přílet:</strong> 14:00</p>
                <p>📅 <strong>Skutečný přílet:</strong> 17:15 (otevření dveří)</p>
                <p className="pt-2 border-t border-gray-300 dark:border-gray-600">
                  ⏱️ <strong>Zpoždění:</strong> 3 hodiny 15 minut
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ✅ Máte nárok na kompenzaci 250 € (vzdálenost do 1 500 km)
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚠️ POZOR: Zpoždění 2h 59min = bez kompenzace
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                Pokud letadlo dorazilo s zpožděním <strong>2 hodiny a 59 minut</strong>, kompenzace <strong>nevzniká</strong>. 
                Toto je přísný limit nařízení ES 261/2004. Aerolinka vám může dobrovolně nabídnout poukaz, ale nemá povinnost.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Co když letadlo odletělo pozdě, ale doletělo rychleji?
            </h3>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Scénář:</strong> Praha → Londýn
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>🛫 <strong>Plánovaný odlet:</strong> 10:00</p>
                <p>🛫 <strong>Skutečný odlet:</strong> 13:00 (zpoždění 3 hodiny)</p>
                <p>🛬 <strong>Plánovaný přílet:</strong> 11:30</p>
                <p>🛬 <strong>Skutečný přílet:</strong> 14:15 (zpoždění jen 2h 45min)</p>
                <p className="pt-2 border-t border-gray-300 dark:border-gray-600 text-red-600 dark:text-red-400 font-semibold">
                  ❌ Nárok na kompenzaci nevzniká (přílet &lt;3h)
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              <strong>Závěr:</strong> Není důležité, jak dlouho jste čekali na letišti při odletu. 
              Rozhodující je, s <strong>jakým zpožděním jste dorazili</strong> na cílovou destinaci.
            </p>
          </div>
        </section>

        {/* Podmínka #2: Let z/do EU */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🌍 Podmínka #2: Let z/do EU nebo evropská aerolinka
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Nařízení ES 261/2004 platí <strong>pouze pro lety</strong>, které splňují alespoň jednu z těchto podmínek:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 border-2 border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Odlet z EU
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Pokud váš let odlétal z letiště v EU, platí ES 261 <strong>bez ohledu na aerolinku</strong>.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-green-700 dark:text-green-300">✅ Praha → New York (Delta)</p>
                  <p className="text-green-700 dark:text-green-300">✅ Paříž → Bangkok (Thai Airways)</p>
                  <p className="text-green-700 dark:text-green-300">✅ Madrid → Buenos Aires (Aerolíneas)</p>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 border-2 border-green-200 dark:border-green-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Přílet do EU (evropská aerolinka)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                  Let do EU platí ES 261 <strong>pouze</strong> pokud ho provozuje aerolinka se sídlem v EU.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="text-green-700 dark:text-green-300">✅ New York → Praha (Lufthansa)</p>
                  <p className="text-green-700 dark:text-green-300">✅ Dubaj → Londýn (British Airways)</p>
                  <p className="text-red-700 dark:text-red-300">❌ New York → Praha (Delta)</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Co jsou evropské aerolinie?
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Evropská aerolinka = společnost se sídlem v zemích EU/EEA/Švýcarsko:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🇩🇪 Německo</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Lufthansa</li>
                    <li>• Eurowings</li>
                    <li>• Condor</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🇬🇧 UK</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• British Airways</li>
                    <li>• easyJet</li>
                    <li>• Jet2</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🇮🇪 Irsko</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Ryanair</li>
                    <li>• Aer Lingus</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🇳🇱 Nizozemsko</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• KLM</li>
                    <li>• Transavia</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🇵🇱 Polsko</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• LOT Polish</li>
                    <li>• Enter Air</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">🇭🇺 Maďarsko</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>• Wizz Air</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ❌ Tyto aerolinie NEJSOU evropské:
              </h4>
              <div className="grid md:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Emirates (🇦🇪 SAE)</p>
                <p>• Turkish Airlines (🇹🇷 Turecko)</p>
                <p>• Qatar Airways (🇶🇦 Katar)</p>
                <p>• American Airlines (🇺🇸 USA)</p>
                <p>• Air Canada (🇨🇦 Kanada)</p>
                <p>• Singapore Airlines (🇸🇬 Singapur)</p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Matoucí případy
            </h3>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  🤔 Emirates Praha → Dubaj (zpoždění)
                </p>
                <p className="text-green-600 dark:text-green-400 mb-2">✅ Máte nárok</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Důvod: Let odlétal z EU (Praha), i když Emirates je neevropská aerolinka.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  🤔 Emirates Dubaj → Praha (zpoždění)
                </p>
                <p className="text-red-600 dark:text-red-400 mb-2">❌ Nemáte nárok</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Důvod: Let přilétal do EU, ale Emirates NENÍ evropská aerolinka.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  🤔 Lufthansa New York → Praha (zpoždění)
                </p>
                <p className="text-green-600 dark:text-green-400 mb-2">✅ Máte nárok</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Důvod: Let přilétal do EU A Lufthansa JE evropská aerolinka.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Podmínka #3: Včasný check-in */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            ✈️ Podmínka #3: Včasný check-in
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Abyste měli nárok na kompenzaci, musíte <strong>splnit podmínky check-in</strong> stanovené aerolinkou. 
              Pokud jste se dostavili pozdě nebo nesplnili podmínky, aerolinka vám může kompenzaci odmítnout.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ⏰ Typické lhůty check-in
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-600">
                      <th className="text-left py-2 px-4 text-gray-900 dark:text-white">Typ letu</th>
                      <th className="text-left py-2 px-4 text-gray-900 dark:text-white">Online check-in</th>
                      <th className="text-left py-2 px-4 text-gray-900 dark:text-white">Check-in na letišti</th>
                      <th className="text-left py-2 px-4 text-gray-900 dark:text-white">Zavření gate</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4">Lety v EU</td>
                      <td className="py-3 px-4">24h–2h před odletem</td>
                      <td className="py-3 px-4">45 min před odletem</td>
                      <td className="py-3 px-4">20 min před odletem</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-3 px-4">Interkontinentální</td>
                      <td className="py-3 px-4">24h–3h před odletem</td>
                      <td className="py-3 px-4">60 min před odletem</td>
                      <td className="py-3 px-4">30 min před odletem</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Low-cost (Ryanair)</td>
                      <td className="py-3 px-4">24h–2h před odletem</td>
                      <td className="py-3 px-4">40 min před odletem</td>
                      <td className="py-3 px-4">20 min před odletem</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚠️ POZOR: Pravidla se liší podle aerolinek
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Vždy si ověřte konkrétní podmínky ve vašem potvrzení rezervace nebo na webu aerolinek:
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• <strong>Ryanair:</strong> Online check-in 2–24h před odletem (povinný!)</li>
                <li>• <strong>Wizz Air:</strong> Online check-in 3h–30 dnů před odletem</li>
                <li>• <strong>Lufthansa:</strong> Online check-in 23h před odletem</li>
                <li>• <strong>LOT:</strong> Check-in na letišti 60 min před interkont. lety</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Co když jsem nestihl check-in?
            </h3>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 mb-6">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pokud jste <strong>nesplnili podmínky check-in</strong> (dostavili se pozdě, zapomněli online check-in), 
                aerolinka vám může <strong>odmítnout nástup</strong> a <strong>zrušit váš nárok na kompenzaci</strong>.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Nedostavení se včas:</strong> Ztráta nároku na kompenzaci
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>No-show:</strong> Možná pokuta + ztráta zpáteční letenky
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300">
              <strong>💡 TIP:</strong> Vždy si nastavte upomínku na mobilu 3 hodiny před odletem, 
              abyste stihli online check-in. A doražte na letiště s <strong>minimálně 2hodinovým</strong> předstihem 
              při interkontinentálních letech.
            </p>
          </div>
        </section>

        {/* Podmínka #4: Mimořádné okolnosti */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🌩️ Podmínka #4: Žádná mimořádná okolnost
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Toto je <strong>nejčastější výmluva aerolinií</strong>, proč vám kompenzaci nechtějí vyplatit. 
              Podle ES 261/2004 <strong>aerolinka nemusí platit</strong>, pokud zpoždění bylo způsobeno <strong>mimořádnou okolností</strong>, 
              kterou nemohla předvídat ani zabránit.
            </p>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ❌ Mimořádné okolnosti (bez kompenzace)
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Přírodní katastrofy</p>
                    <p className="text-sm">Hurikán, sopečný prach (Island 2010), zemětřesení, tsunami</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Extrémní počasí</p>
                    <p className="text-sm">Hustá mlha s viditelností &lt;200m, silná bouře, tornádo, sněhová vánice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Bezpečnostní hrozby</p>
                    <p className="text-sm">Teroristický útok, bomb threat, sabotáž, únos letadla</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Stávka řídících letového provozu</p>
                    <p className="text-sm">Stávka ATC (air traffic control), nikoli zaměstnanců aerolinek!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Politická nestabilita</p>
                    <p className="text-sm">Válka, občanské nepokoje, uzavření vzdušného prostoru</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Náraz s ptákem (bird strike)</p>
                    <p className="text-sm">Pokud způsobil vážné poškození motoru – POUZE při vzletu/přistání</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Lékařská nouze</p>
                    <p className="text-sm">Vážné onemocnění cestujícího/posádky vyžadující okamžité přistání</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                ✅ NEJSOU mimořádné okolnosti (máte nárok!)
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Technická závada</p>
                    <p className="text-sm">Porucha motoru, hydrauliky, elektroniky – aerolinka zodpovídá za údržbu!</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Stávka zaměstnanců aerolinek</p>
                    <p className="text-sm">Stávka pilotů, palubního personálu, pozemní obsluhy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Nedostatek posádky</p>
                    <p className="text-sm">Chybějící pilot, steward – špatné plánování aerolinek</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Overbooking</p>
                    <p className="text-sm">Přeprodaný let – aerolinka prodala víc letenek než míst</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Zpoždění předchozího letu</p>
                    <p className="text-sm">"Rotační zpoždění" – letadlo dorazilo pozdě kvůli špatnému plánování</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Čekání na přestupující cestující</p>
                    <p className="text-sm">Aerolinka se rozhodla počkat – její volba, její odpovědnost</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Běžné počasí</p>
                    <p className="text-sm">Déšť, sníh, mlha (pokud ostatní lety letěly), běžný vítr</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              🕵️ Jak ověřit výmluvu aerolinek?
            </h3>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Aerolinka tvrdí "počasí" – jak zjistit pravdu?
              </h4>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>1. Zkontrolujte FlightRadar24.com</strong>
                  <p className="text-sm mt-1">
                    Vyhledejte vaše letiště a datum → Pokud <strong>ostatní lety letěly</strong> normálně, 
                    počasí NEBYLO mimořádnou okolností!
                  </p>
                </li>
                <li>
                  <strong>2. Zkontrolujte archiv počasí</strong>
                  <p className="text-sm mt-1">
                    Wunderground.com, TimeAndDate.com → Podívejte se na historická data (teplota, vítr, srážky, viditelnost)
                  </p>
                </li>
                <li>
                  <strong>3. Porovnejte s jinými lety téhož dne</strong>
                  <p className="text-sm mt-1">
                    Jestliže Lufthansa, KLM, British Airways letěly bez problémů → počasí nebylo extrémní
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                💡 PŘÍKLAD: Wizz Air tvrdí "mlha" (2h zpoždění)
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Situace:</strong> Praha → Londýn, 15. ledna 2026, zpoždění 4 hodiny
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Tvrzení Wizz Air:</strong> "Mlha na letišti Luton způsobila zpoždění"
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Vaše kontrola:</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>✅ FlightRadar24: Ryanair (PRG→STN) letěl ve stejnou dobu bez zpoždění</li>
                <li>✅ easyJet (PRG→LGW) letěl ve stejnou dobu bez zpoždění</li>
                <li>✅ Wunderground: Viditelnost 5 km (dobrá), lehká mlha ráno (už rozptýlená)</li>
              </ul>
              <p className="text-green-600 dark:text-green-400 font-semibold mt-3">
                → <strong>Verdikt:</strong> Mlha NEBYLA mimořádná okolnost. Máte nárok na 250 €!
              </p>
            </div>
          </div>
        </section>

        {/* Speciální případy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            🔄 Speciální případy
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Lety s přestupem
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Pokud máte let s přestupem (např. Praha → Londýn → New York) a <strong>zmeškaný přestup</strong> 
              způsobí celkové zpoždění 3+ hodiny, <strong>máte nárok</strong> na kompenzaci.
            </p>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                ✅ Podmínky pro nárok při přestupu:
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Všechny lety musí být rezervovány <strong>v jedné rezervaci</strong> (jeden PNR kód)</li>
                <li>• První let měl zpoždění → zmeškal jste navazující let</li>
                <li>• Celkové zpoždění na cílové destinaci je <strong>3+ hodiny</strong></li>
                <li>• Kompenzace se počítá podle <strong>celkové vzdálenosti</strong> (Praha → New York, ne jen Praha → Londýn)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                📋 Příklad výpočtu při přestupu
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Rezervace:</strong> Praha → Londýn (Lufthansa) → New York (United) – jedno PNR</p>
                <p><strong>1. let:</strong> Praha → Londýn – zpoždění 2 hodiny</p>
                <p><strong>Důsledek:</strong> Zmeškaný navazující let Londýn → New York</p>
                <p><strong>Náhradní let:</strong> Londýn → New York o 6 hodin později</p>
                <p><strong>Plánovaný přílet NYC:</strong> 18:00</p>
                <p><strong>Skutečný přílet NYC:</strong> 00:00 (následující den)</p>
                <p className="pt-2 border-t border-gray-300 dark:border-gray-600">
                  <strong>Celkové zpoždění:</strong> 6 hodin
                </p>
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ✅ Nárok na 600 € (Praha → NYC = 6,500 km, zpoždění 6h)
                </p>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ❌ Kdy NEMÁTE nárok při přestupu:
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Koupili jste lety <strong>odděleně</strong> (dvě různá PNR) → každý let se posuzuje zvlášť</li>
                <li>• Zmeškaný přestup byl vaše vina (např. pozdní příjezd na letiště)</li>
                <li>• Přestupní čas byl <strong>příliš krátký</strong> (méně než minimální doporučená doba)</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Code-share lety
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Code-share</strong> = let provozovaný jednou aerolinkou, ale prodávaný i pod čísly jiných aerolinií.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <p className="font-semibold text-gray-900 dark:text-white mb-2">
                📋 Příklad code-share
              </p>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>Koupili jste letenku: <strong>LOT LO435</strong> Praha → Varšava</p>
                <p>Skutečný provozovatel: <strong>Brussels Airlines SN9115</strong></p>
                <p className="pt-2 border-t border-gray-300 dark:border-gray-600">
                  <strong>Otázka:</strong> Na koho se obrátit při zpoždění?
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">
                  → Odpovídá <strong>provozující aerolinka</strong> (Brussels Airlines), ne LOT!
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mb-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                💡 Jak poznat provozující aerolinku?
              </h4>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>• Podívejte se do potvrzení rezervace (pole "Operated by")</li>
                <li>• Zkontrolujte boarding pass (palubní vstupenku)</li>
                <li>• FlightRadar24 ukazuje skutečného provozovatele</li>
                <li>• Na letišti se ptejte u check-in přepážky</li>
              </ul>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Charterové lety
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>Charterové lety</strong> (např. v rámci zájezdu) <strong>TAKÉ</strong> podléhají ES 261/2004. 
              Máte stejná práva jako při běžném letu!
            </p>

            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                ✅ Vaše práva u charteru:
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Kompenzace 250–600 € při zpoždění 3+ hodin</li>
                <li>• Péče (jídlo, pití, ubytování) během čekání</li>
                <li>• Vrácení peněz za letenku při zrušení letu</li>
                <li>• Náhradní let v co nejkratší době</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                ⚠️ POZOR: Na koho se obrátit?
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                U charteru odpovídá <strong>aerolinka</strong> (např. Smartwings, Travel Service), 
                <strong>NIKOLI</strong> cestovní kancelář! CK zodpovídá jen za zrušení/změnu zájezdu, 
                ale kompenzaci řeší přímo s aerolinkou.
              </p>
            </div>
          </div>
        </section>

        {/* Časté chyby */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            ⚠️ 7 nejčastějších chyb, kvůli kterým lidé přijdou o kompenzaci
          </h2>

          <div className="space-y-6">
            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                1. Přijmou poukaz místo peněz
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Aerolinka nabízí <strong>poukaz 50 €</strong> jako "kompenzaci" → vy ho přijmete → <strong>ztráta nároku na 250–600 €!</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Řešení:</strong> Nikdy nepodepisujte nic na letišti. Vždy požadujte <strong>písemné potvrzení</strong> zpoždění/zrušení 
                a podejte žádost o kompenzaci později.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                2. Uvěří výmluvě "technická závada = mimořádná okolnost"
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Aerolinka tvrdí: "Technická závada je nepředvídatelná" → <strong>TO JE LEŽ!</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Realita:</strong> Aerolinka zodpovídá za údržbu. Technická závada = její selhání → <strong>máte nárok</strong>!
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                3. Myslí si, že kompenzaci platí OTA (Kiwi.com, Booking.com)
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Koupili jste letenku přes Kiwi → myslíte si, že se musíte obrátit na Kiwi → <strong>CHYBA!</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Správně:</strong> Kompenzaci <strong>VŽDY</strong> platí <strong>aerolinka</strong>. 
                Kiwi/Booking zodpovídá jen za vrácení ceny letenky (pokud jste ji koupili s Flex opcí).
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                4. Nechají si ujít promlčecí lhůtu
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Odkládají podání žádosti → za 3 roky (v ČR) nárok zanikne → <strong>ztráta 250–600 €!</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Řešení:</strong> Podejte žádost <strong>co nejdříve</strong> po letu. 
                S <Link href="https://claimwinger.com/cs?utm_source=blog&utm_medium=article&utm_campaign=kdy_mate_narok" className="text-blue-600 dark:text-blue-400 underline">ClaimWinger</Link> to trvá jen 2 minuty.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                5. Vzdají to po prvním odmítnutí aerolinek
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Podají žádost → aerolinka odmítne → vzdají to → <strong>92 % lidí!</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Realita:</strong> První odmítnutí je <strong>standard</strong>. Aerolinie vědomě odmítají oprávněné nároky, 
                aby ušetřily peníze. <Link href="https://claimwinger.com/cs?utm_source=blog&utm_medium=article&utm_campaign=kdy_mate_narok" className="text-blue-600 dark:text-blue-400 underline">ClaimWinger</Link> jde k soudu → <strong>98% úspěšnost</strong>.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                6. Neschovají si boarding pass a důkazy
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Po letu vyhodí palubní vstupenku → za 2 roky chtějí podat žádost → <strong>chybí důkazy!</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Důležité dokumenty:</strong> Boarding pass, potvrzení rezervace, fotografie informačních tabulí na letišti, 
                e-maily/SMS od aerolinek.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                7. Bojí se právních nákladů
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                "Co když soud prohraju? Budu muset platit náklady aerolinek!" → strach → <strong>ztráta nároku</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Řešení:</strong> S <Link href="https://claimwinger.com/cs?utm_source=blog&utm_medium=article&utm_campaign=kdy_mate_narok" className="text-blue-600 dark:text-blue-400 underline">ClaimWinger</Link> <strong>neplatíte nic předem</strong>. 
                Provize (30 %) se strhne až při úspěchu. Pokud neuspějeme → neplatíte nic!
              </p>
            </div>
          </div>
        </section>

        {/* CTA před FAQ */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-8 my-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Máte nárok na kompenzaci?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Nevíte si rady? Nechte naše specialisty <strong>zdarma</strong> zkontrolovat váš nárok za 2 minuty. 
              Pokud máte nárok, vyřídíme vše za vás – <strong>bez rizika, bez starostí</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://claimwinger.com/cs?utm_source=blog&utm_medium=cta&utm_campaign=kdy_mate_narok"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Plane className="w-5 h-5 mr-2" />
                Zkontrolovat nárok zdarma
              </Link>
              <Link
                href="/cs/zpozdeny-let"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors border-2 border-white"
              >
                Zjistit více o zpožděném letu
              </Link>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              ✅ 98 % úspěšnost | ✅ Platíte až při úspěchu | ✅ Bez skrytých poplatků
            </p>
          </div>
        </div>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Často kladené otázky
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                1. Mám nárok i když let odletěl s 1 hodinou zpoždění, ale dorazil s 3hodinovým zpožděním?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Ano!</strong> Rozhodující je zpoždění <strong>příjezdu</strong>, ne odletu. 
                Pokud jste dorazili s 3hodinovým nebo větším zpožděním, máte nárok na kompenzaci.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                2. Co když mi aerolinka nabídla náhradní let – mám stále nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Ano, pokud náhradní let dorazil s 3+ hodinovým zpožděním.</strong> Kompenzace se počítá podle celkového zpoždění 
                oproti původně plánovanému příjezdu.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Příklad:</strong> Původní let měl dorazit v 14:00 → Náhradní let dorazil v 18:00 → Zpoždění 4 hodiny → <strong>Nárok na kompenzaci ✅</strong>
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                3. Mám nárok i když let byl zdarma (upgrade, poukaz)?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Ano!</strong> Nárok na kompenzaci má <strong>každý cestující s platnou rezervací</strong>, 
                bez ohledu na to, kolik zaplatil (i 0 € při použití mil/bodů/poukazu).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                4. Co když jsem koupil letenku přes Kiwi.com – kdo mi zaplatí kompenzaci?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Kompenzaci VŽDY platí aerolinka, ne Kiwi.com!</strong> Online travel agencies (OTA) jako Kiwi, Booking, Expedia 
                jsou jen prostředníci. Obraťte se přímo na aerolinku, která let provozovala.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                5. Co když jsem nestihl check-in kvůli zpoždění?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>Záleží na situaci:</strong>
              </p>
              <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>✅ ANO:</strong> Pokud jste nestihl check-in kvůli zpoždění <strong>předchozího letu v rámci přestupu</strong> 
                  (v jedné rezervaci) → aerolinka vás musí přebookovat zdarma
                </li>
                <li>
                  <strong>❌ NE:</strong> Pokud jste nestihl check-in z vlastní viny (zaspali, špatně plánované, dopravní zácpa) → 
                  ztráta nároku + možná pokuta
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Související články */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Související články
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/cs/zpozdeny-let"
              className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Zpožděný let – co dělat?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Praktický průvodce kroky, které je třeba udělat při zpožděném letu.
              </p>
            </Link>

            <Link
              href="/cs/zruseny-let"
              className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Zrušený let – vaše práva
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Co vám přísluší při zrušení letu: kompenzace, vrácení peněz, náhradní let.
              </p>
            </Link>

            <Link
              href="/cs/blog/prava-cestujicich-ceska-republika"
              className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Práva cestujících v ČR
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Úřad pro civilní letectví, ČOI, české soudy, promlčecí lhůta.
              </p>
            </Link>

            <Link
              href="/cs/kompenzace-kalkulacka"
              className="group block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Kalkulačka kompenzace
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Spočítejte si přesnou částku kompenzace podle vzdálenosti letu.
              </p>
            </Link>
          </div>
        </section>
      </article>

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Mám nárok i když let odletěl s 1 hodinou zpoždění, ale dorazil s 3hodinovým zpožděním?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano! Rozhodující je zpoždění příjezdu, ne odletu. Pokud jste dorazili s 3hodinovým nebo větším zpožděním, máte nárok na kompenzaci."
                }
              },
              {
                "@type": "Question",
                "name": "Co když mi aerolinka nabídla náhradní let – mám stále nárok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano, pokud náhradní let dorazil s 3+ hodinovým zpožděním. Kompenzace se počítá podle celkového zpoždění oproti původně plánovanému příjezdu."
                }
              },
              {
                "@type": "Question",
                "name": "Mám nárok i když let byl zdarma (upgrade, poukaz)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano! Nárok na kompenzaci má každý cestující s platnou rezervací, bez ohledu na to, kolik zaplatil (i 0 € při použití mil/bodů/poukazu)."
                }
              },
              {
                "@type": "Question",
                "name": "Co když jsem koupil letenku přes Kiwi.com – kdo mi zaplatí kompenzaci?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Kompenzaci VŽDY platí aerolinka, ne Kiwi.com! Online travel agencies (OTA) jsou jen prostředníci. Obraťte se přímo na aerolinku, která let provozovala."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dlouho mám čas na podání žádosti?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "V České republice je promlčecí lhůta 3 roky od data letu. Ale doporučujeme podat žádost co nejdříve, protože po 2-3 letech můžete ztratit důkazy."
                }
              },
              {
                "@type": "Question",
                "name": "Co když aerolinka ignoruje mé žádosti?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To je velmi časté! Můžete kontaktovat ÚCL (Úřad pro civilní letectví), nebo nechte <Link href=\"https://claimwinger.com/cs?utm_source=blog&utm_medium=article&utm_campaign=kdy_mate_narok\" className=\"text-blue-600 dark:text-blue-400 underline\">ClaimWinger</Link> vyřídit vše za vás – včetně soudu (98 % úspěšnost)."
                }
              },
              {
                "@type": "Question",
                "name": "Mám nárok i pokud jsem nestihl check-in kvůli zpoždění?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO, pokud jste nestihl check-in kvůli zpoždění předchozího letu v rámci přestupu (v jedné rezervaci). NE, pokud jste nestihl check-in z vlastní viny."
                }
              }
            ]
          })
        }}
      />
    </LayoutCs>
  );
}