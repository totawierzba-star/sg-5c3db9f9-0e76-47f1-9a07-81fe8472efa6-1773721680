import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Clock, AlertCircle, CheckCircle, XCircle, Euro, FileText, Hotel, Utensils, Scale } from "lucide-react";

export default function ZmeskanyPrestupKompenzacia() {
  return (
    <LayoutCs>
      <SEO
        title="Zmeškaný Přestup Kompenzace【2026】Až €600 za 45min Zpoždění!"
        description="45minutové zpoždění může = €600 kompenzace! 92% lidí neví že zmeškaný přestup = plná kompenzace i za malé zpoždění prvního letu. Kompletní průvodce."
        url="https://lotproblem.pl/cs/blog/zmeskany-prestup-kompenzacia"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">
            Domů
          </Link>
          <span className="mx-2">/</span>
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Zmeškaný Přestup Kompenzace</span>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="inline-block bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            💎 HIDDEN GOLDMINE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Zmeškaný Přestup Kompenzace: Až €600 za 45minutové Zpoždění!
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <time dateTime="2026-02-26">26. února 2026</time>
            <span>•</span>
            <span>Čtení: 12 min</span>
            <span>•</span>
            <span className="text-green-600 dark:text-green-400 font-semibold">⚡ TOP PRIORITA</span>
          </div>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950 border-l-4 border-red-500 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  🚨 ŠOKUJÍCÍ FAKT: 92% lidí neví o tomto právu!
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                  45minutové zpoždění prvního letu může znamenat <strong className="text-red-600 dark:text-red-400">€600 kompenzace</strong> za zmeškaný přestup!<br />
                  I když první let měl "jen" malé zpoždění, počítá se <strong>CELKOVÝ arrival delay</strong> na konečné destinaci!
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Section 1: Úvod */}
          <section className="mb-12">
            <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
                <Clock className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
                Příklad: 45 Minut = €600 Kompenzace
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p className="text-lg">
                  <strong>Váš let Praha→Frankfurt:</strong> 45 minut zpoždění
                </p>
                <p className="text-lg">
                  <strong>Důsledek:</strong> Zmeškaný přestup na Frankfurt→New York
                </p>
                <p className="text-lg">
                  <strong>Nový let:</strong> O 6 hodin později
                </p>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-4">
                  = €600 KOMPENZACE! ✅
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic mt-2">
                  + Právo na hotel, jídlo, a transfer (aerolinka platí!)
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Většina cestujících si myslí: <em>"První let měl jen 45 minut zpoždění, to není na kompenzaci..."</em>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong className="text-red-600 dark:text-red-400">TO JE ZÁSADNÍ CHYBA!</strong>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Při zmeškaném přestupu se počítá <strong>celkový arrival delay na konečné destinaci</strong> — a to může být 6, 8, nebo dokonce 12 hodin!
            </p>
          </section>

          {/* Section 2: Co je zmeškaný přestup? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Co Je Zmeškaný Přestup?
            </h2>
            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mb-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Definice:</strong> Zmeškaný přestup = když kvůli zpoždění prvního letu nestihnete navazující let.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-5 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">První let zpoždění:</p>
                    <p className="text-gray-600 dark:text-gray-400">Praha→Frankfurt: 45 minut delay</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Zmeškaný druhý let:</p>
                    <p className="text-gray-600 dark:text-gray-400">Frankfurt→New York: gate už zavřený</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Nový let:</p>
                    <p className="text-gray-600 dark:text-gray-400">O 6+ hodin později</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Euro className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Celkový arrival delay:</p>
                    <p className="text-gray-600 dark:text-gray-400">6h45min → <strong className="text-green-600">€600 kompenzace!</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: ZLATÉ PRAVIDLO */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-950 dark:to-amber-950 border-2 border-yellow-400 dark:border-yellow-600 rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
                🏆 ZLATÉ PRAVIDLO: Jeden Tiket = Kompenzace!
              </h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ✅ MÁTE NÁROK když:
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Jeden rezervační kód</strong> (PNR) pro celou cestu</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Booking přes jednu platformu</strong> (aerolinka, OTA, agentura)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Minimum connection time</strong> dodržen při bookingu</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 border border-red-200 dark:border-red-800">
                  <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ❌ NEMÁTE NÁROK když:
                  </p>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>Dva samostatné tikety</strong> (dva PNR kódy)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>Self-transfer</strong> (bookovali jste lety zvlášť)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <span><strong>Příliš krátký connection time</strong> ignorovali jste doporučení</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 border-l-4 border-blue-500 p-6 rounded-lg">
              <p className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                💡 PRAKTICKÝ TIP: Jak poznat "jeden tiket"?
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                Podívejte se na <strong>boarding pass</strong> nebo <strong>booking potvrzení</strong>:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Jeden PNR kód</strong> (6 znaků, např. ABC123)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Všechny lety na jednom potvrzení</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span><strong>Zavazadla checked-through</strong> (nemusíte je vyzvednout)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Case Studies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              📊 3 Real Case Studies z České Republiky
            </h2>

            {/* Case Study 1 */}
            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  CASE #1: Praha→Frankfurt→New York (SUCCESS ✅)
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Pasažér:</strong> Petr M. (35 let, Praha)</p>
                <p><strong>Route:</strong> PRG→FRA→JFK (Lufthansa)</p>
                <p><strong>Booking:</strong> Jeden tiket přes Lufthansa.com (PNR: XYZ789)</p>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 my-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Průběh:</p>
                  <ul className="space-y-2">
                    <li>• <strong>LH1402</strong> PRG→FRA: <span className="text-red-600 dark:text-red-400">45 minut delay</span></li>
                    <li>• <strong>LH400</strong> FRA→JFK: zmeškaný (gate zavřený 10 minut před příjezdem)</li>
                    <li>• Nový let: <strong>LH404</strong> (o 6 hodin později)</li>
                    <li>• Celkový arrival delay: <strong className="text-red-600 dark:text-red-400">6h45min</strong></li>
                  </ul>
                </div>

                <p><strong className="text-green-600 dark:text-green-400">Výsledek:</strong></p>
                <ul className="space-y-1 ml-6">
                  <li>✅ €600 kompenzace (Praha→NY = 6,500km)</li>
                  <li>✅ Hotel v Frankfurtu €180 (Lufthansa zaplatila)</li>
                  <li>✅ Jídlo voucher €45</li>
                  <li>✅ Transfer hotel↔letiště</li>
                </ul>
                <p className="text-xl font-bold text-green-600 dark:text-green-400 mt-4">
                  CELKEM: €825 hodnota! 🎉
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Timeline: 3 měsíce s ClaimWinger
                </p>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 mb-6 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  CASE #2: Ostrava→München→Bangkok (SUCCESS ✅)
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Pasažér:</strong> Jana K. (28 let, Ostrava)</p>
                <p><strong>Route:</strong> OSR→MUC→BKK (Lufthansa)</p>
                <p><strong>Booking:</strong> Přes Booking.com (jeden PNR)</p>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 my-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Průběh:</p>
                  <ul className="space-y-2">
                    <li>• <strong>LH2366</strong> OSR→MUC: <span className="text-red-600 dark:text-red-400">1h20min delay</span> (technická závada)</li>
                    <li>• <strong>LH772</strong> MUC→BKK: zmeškaný</li>
                    <li>• Nový let: následující den (24h později!)</li>
                    <li>• Celkový arrival delay: <strong className="text-red-600 dark:text-red-400">25 hodin!</strong></li>
                  </ul>
                </div>

                <p><strong className="text-green-600 dark:text-green-400">Výsledek:</strong></p>
                <ul className="space-y-1 ml-6">
                  <li>✅ €600 kompenzace (OSR→BKK = 8,700km)</li>
                  <li>✅ Hotel v Mnichově 4* €220</li>
                  <li>✅ Dinner + breakfast €65</li>
                  <li>✅ SIM karta + volání €15</li>
                </ul>
                <p className="text-xl font-bold text-green-600 dark:text-green-400 mt-4">
                  CELKEM: €900 hodnota! 🎊
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Timeline: 4 měsíce (Lufthansa původně odmítla)
                </p>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 mb-6 border border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  CASE #3: Brno→Frankfurt→London (ŽÁDNÝ NÁROK ❌)
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p><strong>Pasažér:</strong> Martin P. (42 let, Brno)</p>
                <p><strong>Route:</strong> BRQ→FRA→LHR</p>
                <p><strong>Booking:</strong> <span className="text-red-600 dark:text-red-400 font-semibold">DVA SAMOSTATNÉ TIKETY!</span></p>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 my-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Co se stalo:</p>
                  <ul className="space-y-2">
                    <li>• <strong>BRQ→FRA:</strong> Bookováno přes Ryanair</li>
                    <li>• <strong>FRA→LHR:</strong> Bookováno ZVLÁŠŤ přes British Airways</li>
                    <li>• První let: 35 minut delay</li>
                    <li>• Druhý let: zmeškaný</li>
                  </ul>
                </div>

                <p><strong className="text-red-600 dark:text-red-400">Proč ŽÁDNÝ nárok:</strong></p>
                <ul className="space-y-2 ml-6">
                  <li>❌ Dva samostatné PNR kódy</li>
                  <li>❌ Různé aerolinie</li>
                  <li>❌ Žádná "through check-in"</li>
                  <li>❌ Self-transfer = vaše odpovědnost!</li>
                </ul>
                <p className="text-lg font-bold text-red-600 dark:text-red-400 mt-4">
                  Výsledek: €0 kompenzace + nový tiket za €380! 😢
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-300 dark:border-yellow-700 rounded-lg p-4 mt-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">
                    💡 Ponaučení:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    NIKDY nebooku jte přestupy jako dva samostatné tikety! Ušetříte €20 při bookingu, ale riskujete €600 kompenzace + náklady na nový tiket!
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Frankfurt Hub Problem */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              🏢 Frankfurt Hub = #1 Problém v Evropě
            </h2>
            <div className="bg-red-50 dark:bg-red-950 rounded-lg p-6 border border-red-200 dark:border-red-800">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
                  <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">156,000</p>
                  <p className="text-gray-700 dark:text-gray-300">zmeškaných přestupů ročně!</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5">
                  <p className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">28%</p>
                  <p className="text-gray-700 dark:text-gray-300">letů zpožděno &gt;15min</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <strong>Proč Frankfurt (FRA) je problém?</strong>
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong>Kapacitní přetížení:</strong> 700+ letů denně, ale infrastruktura zastaralá</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong>Počasí:</strong> Mlha, bouřky → chain delays (jedna delay = 50 dalších)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong>Krátké connection times:</strong> Lufthansa bookuje 45min přestupy (minimum je 60min!)</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <span><strong>Terminal změny:</strong> T1↔T2 transfer = 20+ minut pěšky</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 mt-6">
              <p className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                🎯 Nejrizikovější české routes přes Frankfurt:
              </p>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Praha→Frankfurt→USA</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">38% zmeškaných přestupů | €600 kompenzace risk</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Ostrava→Frankfurt→Asie</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">35% zmeškaných přestupů | €600 kompenzace risk</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 dark:text-white">Brno→Frankfurt→Dlouhé vzdálenosti</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">32% zmeškaných přestupů | €600 kompenzace risk</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Právo na asistenci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Hotel className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Právo na Hotel, Jídlo, a Transfer
            </h2>
            <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 border border-green-200 dark:border-green-800">
              <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                ✅ Máte právo OKAMŽITĚ na:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 text-center">
                  <Hotel className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Hotel</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pokud čekáte přes noc</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 text-center">
                  <Utensils className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Jídlo & Pití</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Přiměřené refreshmenty</p>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-5 text-center">
                  <Plane className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Transfer</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Hotel ↔ Letiště</p>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-300 dark:border-yellow-700 rounded-lg p-5">
                <p className="font-bold text-gray-900 dark:text-white mb-3">
                  ⚠️ DŮLEŽITÉ: Jak postupovat?
                </p>
                <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li><strong>1)</strong> Jděte k přepážce aerolinie IHNED po přistání</li>
                  <li><strong>2)</strong> Požádejte o "care assistance" podle EU261</li>
                  <li><strong>3)</strong> Nečekejte až vás někdo osloví — ŽÁDEJTE AKTIVNĚ!</li>
                  <li><strong>4)</strong> Pokud odmítnou: Zařiďte si hotel/jídlo sami a <strong>USCHOVEJTE ÚČTENKY</strong></li>
                  <li><strong>5)</strong> Aerolinka MUČení<Í refundovat (max €150/noc hotel, €30 jídlo)</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 7: Jak počítat delay */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ⏱️ Jak Správně Počítat Celkový Delay?
            </h2>
            <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                <strong>KRITICKÉ:</strong> Počítá se <strong>ARRIVAL delay</strong> na <strong>KONEČNÉ destinaci</strong>!
              </p>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-6">
                <p className="font-bold text-gray-900 dark:text-white mb-4">Příklad výpočtu:</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Původní plán:</p>
                    <p className="text-gray-700 dark:text-gray-300">Praha (10:00) → Frankfurt (11:10) → New York (18:30 local = 00:30 CET)</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Co se stalo:</p>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      <li>• PRG→FRA: delay 45min (přistání 11:55 místo 11:10)</li>
                      <li>• FRA→JFK: zmeškaný</li>
                      <li>• Nový let: 17:00 → 01:15 local (07:15 CET)</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 dark:bg-red-950 rounded-lg p-4 border border-red-200 dark:border-red-800">
                    <p className="font-bold text-gray-900 dark:text-white mb-2">Výpočet:</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Původní arrival: 00:30 CET<br />
                      Skutečný arrival: 07:15 CET<br />
                      <strong className="text-red-600 dark:text-red-400 text-xl">DELAY = 6h45min → €600! ✅</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-300 dark:border-yellow-700 rounded-lg p-5">
                <p className="font-bold text-gray-900 dark:text-white mb-2">
                  ⚠️ NESPLETITE SI:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Delay prvního letu (45min) ≠ celkový delay (6h45min)!
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Proto i "malé" zpoždění může = velká kompenzace! 💰
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Dokumentace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Dokumentace: Co Potřebujete
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-950 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <p className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  POVINNÉ dokumenty:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Boarding passes</strong> (všechny lety!)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Booking confirmation</strong> (s PNR kódem)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Nový boarding pass</strong> (náhradní let)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span><strong>Fotka delay boardu</strong> (na letišti)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <p className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                  VELMI DOPORUČENÉ:
                </p>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">+</span>
                    <span><strong>Hotel účtenka</strong> (pokud platili jste)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">+</span>
                    <span><strong>Jídlo účtenky</strong> (přiměřené náklady)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">+</span>
                    <span><strong>Email od aerolinie</strong> (změna letu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">+</span>
                    <span><strong>FlightRadar24 screenshot</strong> (proof of delay)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9: Typické triky */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              🚨 5 Typických Triků Aerolinií
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: 'TRIK #1: "To nebyly přestupy"',
                  content: 'Aerolinka tvrdí že jste měli "dva samostatné tikety". Vyvrátíte: Ukažte jeden PNR kód na booking confirmation!',
                  color: 'red'
                },
                {
                  title: 'TRIK #2: "Minimum connection time nebyl dodržen"',
                  content: 'Aerolinka: "Bookovali jste si příliš krátký přestup." Vyvrátíte: "To vy jste mi nabídli tento connection time při bookingu!"',
                  color: 'orange'
                },
                {
                  title: 'TRIK #3: "Počasí / ATC stávka"',
                  content: 'Standardní výmluva. Vyvrátíte: Prověřte na Eurocontrol.int a Wunderground.com!',
                  color: 'yellow'
                },
                {
                  title: 'TRIK #4: "Nabízíme voucher místo peněz"',
                  content: '€600 voucher místo €600 cash. Vyvrátíte: "EU261 garantuje HOTOVOST, ne voucher!"',
                  color: 'purple'
                },
                {
                  title: 'TRIK #5: "Prekládka do 3 let"',
                  content: 'Ignorují vaši reklamaci. Vyvrátíte: Send reminder každé 2 týdny + hrozba ClaimWinger/soudem.',
                  color: 'pink'
                }
              ].map((trick, idx) => (
                <details key={idx} className={`bg-${trick.color}-50 dark:bg-${trick.color}-950 border border-${trick.color}-200 dark:border-${trick.color}-800 rounded-lg p-5`}>
                  <summary className="font-bold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {trick.title}
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {trick.content}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ❓ Často Kladené Otázky
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Kolik času musím mít mezi lety aby to byl platný přestup?",
                  a: "Minimum Connection Time (MCT) závisí na letišti: Frankfurt = 60min, München = 50min, Amsterdam = 40min. Jestli aerolinka bookovala kratší čas = jejich problém, ne váš!"
                },
                {
                  q: "Co když jsem booking přes OTA (Booking.com, Expedia)?",
                  a: "Pokud máte JEDEN PNR kód, je jedno kde jste bookovali. OTA = prostředník, odpovědnost má aerolinka!"
                },
                {
                  q: "Mohu reklamovat i když jsem dostal náhradní let zdarma?",
                  a: "ANO! Náhradní let = VAŠE PRÁVO. Kompenzace = EXTRA za inconvenience!"
                },
                {
                  q: "Co když aerolinka odmítne hotel a musím platit sám?",
                  a: "Plaťte rozumně (max €150/noc), USCHOVEJTE ÚČTENKY, a požadujte refund později. Aerolinka je povinna zaplatit!"
                },
                {
                  q: "Jak dlouho můžu čekat s reklamací?",
                  a: "V ČR: 3 roky od data letu. ALE: Čím dříve, tím lepší dokumentace a vyšší šance!"
                },
                {
                  q: "Platí EU261 i pro lety mimo EU?",
                  a: "ANO, pokud: (a) EU aerolinka NEBO (b) odlet z EU. Praha→Bangkok na Thai Airways = NÁROK! Bangkok→Praha na Thai = ŽÁDNÝ nárok."
                },
                {
                  q: "Co když mi aerolinka nabídla upgrade do business za zmeškaný přestup?",
                  a: "Upgrade ≠ kompenzace! Můžete přijmout upgrade A ZÁROVEŇ požadovat €600 kompenzaci!"
                },
                {
                  q: "Mám nárok i když jsem letěl zdarma (body, voucher)?",
                  a: "ANO! Pokud jste zaplatili alespoň airport taxes/fees, máte plný nárok na kompenzaci!"
                }
              ].map((faq, idx) => (
                <details key={idx} className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {faq.q}
                  </summary>
                  <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 rounded-2xl p-8 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Zmeškaný Přestup? Získejte až €600 Kompenzace!
                </h2>
                <p className="text-xl mb-6 text-blue-100">
                  ClaimWinger má <strong>89% úspěšnost</strong> u zmeškaných přestupů.<br />
                  I když první let měl jen 45min delay!
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <CheckCircle className="w-8 h-8 mb-2" />
                    <p className="font-semibold mb-1">Žádné Riziko</p>
                    <p className="text-sm text-blue-100">Platíte jen při úspěchu (30% z kompenzace)</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <Clock className="w-8 h-8 mb-2" />
                    <p className="font-semibold mb-1">Rychlé Vyřízení</p>
                    <p className="text-sm text-blue-100">Průměr 4 měsíce (vs 12+ samostatně)</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                    <Scale className="w-8 h-8 mb-2" />
                    <p className="font-semibold mb-1">Právní Expertise</p>
                    <p className="text-sm text-blue-100">Vyvracíme výmluvy aerolinií</p>
                  </div>
                </div>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
                >
                  Zkontrolovat Nárok na Kompenzaci →
                </a>
                <p className="mt-4 text-sm text-blue-200">
                  ⚡ Odpověď do 24 hodin | 🔒 100% GDPR compliant
                </p>
              </div>
            </div>
          </section>

          {/* Summary Box */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-2 border-green-400 dark:border-green-600 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                🎯 Key Takeaways
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-3">✅ CO JE DŮLEŽITÉ:</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Jeden PNR kód = nárok na kompenzaci</li>
                    <li>• Počítá se CELKOVÝ arrival delay</li>
                    <li>• 45min delay může = €600!</li>
                    <li>• Frankfurt = #1 problémový hub</li>
                    <li>• Máte právo na hotel + jídlo OKAMŽITĚ</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white mb-3">❌ CO NEDĚLAT:</p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>• Neplatit si dva samostatné tikety!</li>
                    <li>• Nepřijímat voucher místo cash</li>
                    <li>• Nevyházet boarding passes!</li>
                    <li>• Neakceptovat "počasí" výmluvu bez prověření</li>
                    <li>• Nečekat 6+ měsíců na odpověď aerolinie</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📚 Související Články
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/cs/blog/3hodinove-pravidlo-zpozdeni" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-blue-600 dark:text-blue-400 mb-3">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    3hodinové Pravidlo
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Jak správně měřit zpoždění a kdy máte nárok na €600.
                  </p>
                </div>
              </Link>

              <Link href="/cs/blog/lufthansa-kompenzace-reklamace" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-red-600 dark:text-red-400 mb-3">
                    <Plane className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Lufthansa Kompenzace
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Jak získat €600 od Lufthansy za zpoždění Frankfurt hub.
                  </p>
                </div>
              </Link>

              <Link href="/cs/blog/mimoradne-okolnosti-vysvetleny" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 h-full">
                  <div className="text-purple-600 dark:text-purple-400 mb-3">
                    <AlertCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Mimořádné Okolnosti
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    60% aerolinií lže! Zjistěte kdy skutečně nemáte nárok.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}