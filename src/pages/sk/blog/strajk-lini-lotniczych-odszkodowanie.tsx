import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, XCircle, Shield, Clock, Euro, FileText, Users, Plane, Info } from "lucide-react";

export default function StrajkKompenzaciaSk() {
  return (
    <LayoutSk>
      <SEO
        title="Štrajk leteckých spoločností a kompenzácia – Vaše práva v 2024/2025"
        description="Zrušený let kvôli štrajku? Zistite, kedy vám patrí kompenzácia až 600 € a ako ju získať. Aktuálne informácie pre rok 2024/2025."
        url="https://lotproblem.pl/sk/blog/strajk-lini-lotniczych-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <header className="mb-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-medium text-red-800 dark:bg-red-900/30 dark:text-red-200">
              <AlertTriangle className="h-4 w-4" />
              <span>Aktuálne: Štrajky v Európe 2024/2025</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Štrajk leteckých spoločností a kompenzácia – Vaše práva
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>23 min čítania</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>6,800 slov</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Aktualizované: Február 2025</span>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white shadow-xl">
              <div className="flex items-start gap-4">
                <Shield className="h-12 w-12 flex-shrink-0" />
                <div>
                  <h2 className="mb-3 text-2xl font-bold">Rýchla odpoveď</h2>
                  <p className="text-lg leading-relaxed text-blue-50">
                    <strong>Áno, kompenzácia patrí!</strong> Štrajk zamestnancov leteckej spoločnosti (piloti, personál) NIE JE nadzwyczajná okolnosť. Máte právo na až <strong>600 €</strong> podľa nariadenia EÚ 261/2004.
                  </p>
                  <p className="mt-3 text-blue-100">
                    ⚠️ Výnimka: Štrajk riadenia letovej prevádzky alebo bezpečnostného personálu letiska môže byť výnimkou.
                  </p>
                </div>
              </div>
            </div>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Obsah článku</h2>
            <ol className="space-y-2 text-sm">
              <li><a href="#zlata-zasada" className="text-blue-600 hover:underline dark:text-blue-400">1. Zlatá zásada: Airline vs Airport štrajk</a></li>
              <li><a href="#kedy-patri" className="text-blue-600 hover:underline dark:text-blue-400">2. Kedy patrí kompenzácia pri štrajku?</a></li>
              <li><a href="#scenare" className="text-blue-600 hover:underline dark:text-blue-400">3. Najčastejšie scenáre štrajkov</a></li>
              <li><a href="#sumy" className="text-blue-600 hover:underline dark:text-blue-400">4. Výška kompenzácie</a></li>
              <li><a href="#ako-udowodnit" className="text-blue-600 hover:underline dark:text-blue-400">5. Ako dokázať, že štrajk nie je výnimkou?</a></li>
              <li><a href="#strajky-2024-2025" className="text-blue-600 hover:underline dark:text-blue-400">6. Aktuálne štrajky v Európe 2024/2025</a></li>
              <li><a href="#proces" className="text-blue-600 hover:underline dark:text-blue-400">7. Ako získať kompenzáciu (ClaimWinger)</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline dark:text-blue-400">8. Často kladené otázky (FAQ)</a></li>
            </ol>
          </nav>

          {/* Section 1: Golden Rule */}
          <section id="zlata-zasada" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              1. Zlatá zásada: Airline vs Airport štrajk
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Kľúčové je pochopiť, <strong>KTO štrajkuje</strong>. Zákon rozlišuje medzi:
              </p>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Airline Strike - Compensation YES */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 p-6 shadow-lg dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">
                    Štrajk AIRLINE = Kompenzácia ✅
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-green-800 dark:text-green-200">
                  <p><strong>Kto štrajkuje:</strong></p>
                  <ul className="ml-4 space-y-2">
                    <li>✓ Piloti leteckej spoločnosti</li>
                    <li>✓ Palubný personál (stevardky, stewarti)</li>
                    <li>✓ Technici leteckej spoločnosti</li>
                    <li>✓ Pozemný personál airline</li>
                  </ul>
                  <p className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900/30">
                    <strong>Výsledok:</strong> Letecká spoločnosť MUSÍ zaplatiť kompenzáciu. Je to jej interný problém.
                  </p>
                </div>
              </div>

              {/* Airport Strike - Maybe Exception */}
              <div className="rounded-xl bg-gradient-to-br from-red-50 to-orange-50 p-6 shadow-lg dark:from-red-900/20 dark:to-orange-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100">
                    Štrajk AIRPORT = Možná výnimka ⚠️
                  </h3>
                </div>
                <div className="space-y-3 text-sm text-red-800 dark:text-red-200">
                  <p><strong>Kto štrajkuje:</strong></p>
                  <ul className="ml-4 space-y-2">
                    <li>✗ Riadenie letovej prevádzky (ATC)</li>
                    <li>✗ Bezpečnostná kontrola letiska</li>
                    <li>✗ Colníci</li>
                    <li>✗ Hasičská služba letiska</li>
                  </ul>
                  <p className="mt-4 rounded-lg bg-red-100 p-3 dark:bg-red-900/30">
                    <strong>Výsledok:</strong> Môže byť uznané ako "nadzwyczajná okolnosť" - airline nemusí platiť.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-blue-50 p-6 dark:bg-blue-900/20">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <div className="text-gray-700 dark:text-gray-300">
                  <p className="mb-2 font-semibold text-blue-900 dark:text-blue-100">Prečo je to rozdiel?</p>
                  <p>
                    Letecká spoločnosť má kontrolu nad svojimi zamestnancami (môže vyjednávať, riešiť spory). Nemá však kontrolu nad letiskom alebo riadením letovej prevádzky - to sú externé faktory.
                  </p>
                  <p className="mt-2">
                    <strong>Prax:</strong> Vo väčšine prípadov štrajkujú zamestnanci airline (piloti, kabína) → <strong>kompenzácia patrí!</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: When Entitled */}
          <section id="kedy-patri" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              2. Kedy patrí kompenzácia pri štrajku?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Musíte splniť všetky tieto podmienky:
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Let v rámci EÚ alebo z EÚ</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Štartuje z letiska v EÚ (napr. Viedeň, Bratislava) ALEBO pristáva v EÚ s európskou leteckou spoločnosťou.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Zrušenie alebo meškanie &gt;3 hodiny</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Let bol úplne zrušený ALEBO prišiel na cieľové letisko s meškaním viac ako 3 hodiny.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Štrajk INTERNÝCH zamestnancov airline</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Štrajkovali piloti, kabína, technici LETECKEJ SPOLOČNOSTI - nie letiska alebo ATC.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">4</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Neprijali ste alternatívny let</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Ak ste odmietli náhradný let, ktorý by vás dostal včas, kompenzácia nepatrí.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Common Scenarios */}
          <section id="scenare" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              3. Najčastejšie scenáre štrajkov
            </h2>

            <div className="space-y-6">
              {/* Scenario 1: Pilot Strike */}
              <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Štrajk pilotov Wizz Air/Ryanair</h3>
                </div>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Situácia:</strong> Piloti Wizz Air vyhlásili štrajk, váš let z Bratislavy do Londýna bol zrušený.</p>
                  <p><strong>Výsledok:</strong> ✅ <span className="font-semibold text-green-600 dark:text-green-400">Kompenzácia patrí (250 €)</span></p>
                  <p><strong>Dôvod:</strong> Interný problém airline - mohla vyjednávať, riešiť spor vopred.</p>
                </div>
              </div>

              {/* Scenario 2: Cabin Crew Strike */}
              <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Štrajk palubného personálu</h3>
                </div>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Situácia:</strong> Stevardky/stewarti Lufthansa štrajkujú, váš let z Viedne do Frankfurtu má 5-hodinové meškanie.</p>
                  <p><strong>Výsledok:</strong> ✅ <span className="font-semibold text-green-600 dark:text-green-400">Kompenzácia patrí (250 €)</span></p>
                  <p><strong>Dôvod:</strong> Interní zamestnanci leteckej spoločnosti.</p>
                </div>
              </div>

              {/* Scenario 3: Ground Staff Strike */}
              <div className="rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-6 dark:border-green-800 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100">Štrajk pozemného personálu airline</h3>
                </div>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Situácia:</strong> Pracovníci nakladania batožiny Austrian Airlines štrajkujú, váš let z Viedne do Barcelony je zrušený.</p>
                  <p><strong>Výsledok:</strong> ✅ <span className="font-semibold text-green-600 dark:text-green-400">Kompenzácia patrí (400 €)</span></p>
                  <p><strong>Dôvod:</strong> Zamestnanci zahrnutí v štruktúre airline.</p>
                </div>
              </div>

              {/* Scenario 4: ATC Strike */}
              <div className="rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6 dark:border-red-800 dark:from-red-900/20 dark:to-orange-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100">Štrajk riadenia letovej prevádzky (ATC)</h3>
                </div>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Situácia:</strong> Francúzski ATC kontrolóri štrajkujú, váš let cez francúzsky vzdušný priestor je zrušený.</p>
                  <p><strong>Výsledok:</strong> ❌ <span className="font-semibold text-red-600 dark:text-red-400">Kompenzácia nepatrí</span></p>
                  <p><strong>Dôvod:</strong> Nadzwyczajná okolnosť - airline nemôže ovplyvniť riadenie letovej prevádzky.</p>
                  <p className="text-sm italic">*Poznámka: Vždy však žiadajte kompenzáciu - niektoré súdy rozhodli aj v prospech cestujúcich.</p>
                </div>
              </div>

              {/* Scenario 5: Security Strike */}
              <div className="rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6 dark:border-red-800 dark:from-red-900/20 dark:to-orange-900/20">
                <div className="mb-4 flex items-center gap-3">
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100">Štrajk bezpečnostnej kontroly letiska</h3>
                </div>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><strong>Situácia:</strong> Pracovníci bezpečnostnej kontroly na letisku Viedeň štrajkujú, váš let je zrušený.</p>
                  <p><strong>Výsledok:</strong> ❌ <span className="font-semibold text-red-600 dark:text-red-400">Kompenzácia pravdepodobne nepatrí</span></p>
                  <p><strong>Dôvod:</strong> Letisko je externý subjekt - airline ho neovláda.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Compensation Amounts */}
          <section id="sumy" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              4. Výška kompenzácie pri štrajku airline
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Suma závisí od <strong>vzdialenosti letu</strong>, nie od ceny lístka:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* 250 EUR */}
              <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-lg dark:from-blue-900/30 dark:to-blue-800/30">
                <div className="mb-4 text-center">
                  <Euro className="mx-auto h-12 w-12 text-blue-600 dark:text-blue-400" />
                  <div className="mt-3 text-4xl font-bold text-blue-900 dark:text-blue-100">250 €</div>
                  <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">Do 1,500 km</p>
                </div>
                <div className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <p className="font-semibold">Príklady tratí:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Bratislava → Rím</li>
                    <li>• Viedeň → Londýn</li>
                    <li>• Košice → Amsterdam</li>
                  </ul>
                </div>
              </div>

              {/* 400 EUR */}
              <div className="rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-6 shadow-lg ring-2 ring-green-500 dark:from-green-900/30 dark:to-green-800/30">
                <div className="mb-2 text-center">
                  <div className="inline-block rounded-full bg-green-600 px-3 py-1 text-xs font-bold text-white">NAJČASTEJŠIE</div>
                </div>
                <div className="mb-4 text-center">
                  <Euro className="mx-auto h-12 w-12 text-green-600 dark:text-green-400" />
                  <div className="mt-3 text-4xl font-bold text-green-900 dark:text-green-100">400 €</div>
                  <p className="mt-1 text-sm text-green-700 dark:text-green-300">1,500 - 3,500 km</p>
                </div>
                <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
                  <p className="font-semibold">Príklady tratí:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Bratislava → Dubaj</li>
                    <li>• Viedeň → Tel Aviv</li>
                    <li>• Košice → Egypt</li>
                  </ul>
                </div>
              </div>

              {/* 600 EUR */}
              <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-6 shadow-lg dark:from-purple-900/30 dark:to-purple-800/30">
                <div className="mb-4 text-center">
                  <Euro className="mx-auto h-12 w-12 text-purple-600 dark:text-purple-400" />
                  <div className="mt-3 text-4xl font-bold text-purple-900 dark:text-purple-100">600 €</div>
                  <p className="mt-1 text-sm text-purple-700 dark:text-purple-300">Nad 3,500 km</p>
                </div>
                <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                  <p className="font-semibold">Príklady tratí:</p>
                  <ul className="ml-4 space-y-1">
                    <li>• Viedeň → New York</li>
                    <li>• Bratislava → Thajsko</li>
                    <li>• Viedeň → Tokio</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-yellow-50 p-6 dark:bg-yellow-900/20">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Dôležité:</strong> Kompenzácia je NAVIAC k refundácii lístka. Pri zrušení letu kvôli štrajku máte právo na:
              </p>
              <ul className="ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li>✓ <strong>Kompenzáciu</strong> (250-600 €) - za nepríjemnosti</li>
                <li>✓ <strong>Refundáciu</strong> (100% ceny lístka) - vrátenie peňazí</li>
                <li>✓ <strong>Alternatívny let</strong> - ak chcete (namiesto refundácie)</li>
              </ul>
            </div>
          </section>

          {/* Section 5: How to Prove */}
          <section id="ako-udowodnit" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              5. Ako dokázať, že štrajk nie je "nadzwyczajná okolnosť"?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Letecké spoločnosti často tvrdia, že štrajk je mimo ich kontroly. Tu sú argumenty, ktoré to vyvracajú:
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">1. Interní zamestnanci = zodpovednosť airline</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Rozhodnutie Európskeho súdneho dvora (<strong>C-613/20 Airhelp vs Austrian Airlines</strong>) potvrdilo:
                </p>
                <div className="mt-4 rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
                  <p className="text-gray-700 dark:text-gray-300">
                    <em>"Štrajk vlastných zamestnancov airline NIE JE nadzwyczajná okolnosť, pretože letecká spoločnosť môže ovplyvniť pracovné podmienky a vyjednávať so zamestnancami."</em>
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">2. Štrajk je predvídateľný</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Štrajky sú zvyčajne ohlásené vopred (7-14 dní). Airline má čas:
                </p>
                <ul className="ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✓ Vyjednávať so zamestnancami</li>
                  <li>✓ Zabezpečiť náhradných pilotov/personál</li>
                  <li>✓ Preknihovať cestujúcich vopred</li>
                  <li>✓ Zrušiť lety s dostatočným predstihom</li>
                </ul>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">3. Iné airlines normálne lietali</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ak štrajkovali len zamestnanci JEDNEJ airline (napr. Wizz Air), zatiaľ čo ostaté spoločnosti (Ryanair, Austrian) normálne lietali z toho istého letiska, je to dôkaz, že problém bol interný.
                </p>
              </div>

              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
                <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">4. História opakovaných štrajkov</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ak tá istá airline má opakované štrajky (napr. Ryanair každých pár mesiacov), je to dôkaz zlého manažmentu a pracovných vzťahov - nie náhoda.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-green-50 p-6 dark:bg-green-900/20">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-green-600 dark:text-green-400" />
                <div>
                  <p className="mb-2 font-semibold text-green-900 dark:text-green-100">Tip od ClaimWinger:</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Nemusíte zbierať dôkazy sami. Služby ako <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 hover:underline dark:text-green-400">ClaimWinger</a> majú databázu tisícok prípadov a právne argumenty pripravené. Vystavia za vás celú žiadosť s dôkazmi.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Current Strikes 2024/2025 */}
          <section id="strajky-2024-2025" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              6. Aktuálne štrajky v Európe 2024/2025
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Tieto štrajky boli hlásené v posledných mesiacoch (relevantné pre Slovákov):
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl border-l-4 border-red-500 bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Lufthansa (Nemecko) - Opakované štrajky pilotov</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Status:</strong> Štrajky každých pár mesiacov (2024-2025)<br/>
                  <strong>Trasy:</strong> Viedeň-Frankfurt, Bratislava-München<br/>
                  <strong>Kompenzácia:</strong> ✅ Patrí (interní zamestnanci)
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-red-500 bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Wizz Air (Maďarsko) - Štrajk kabíny</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Status:</strong> Júl-August 2024<br/>
                  <strong>Trasy:</strong> Bratislava-Londýn, Bratislava-Miláno<br/>
                  <strong>Kompenzácia:</strong> ✅ Patrí (interní zamestnanci)
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-red-500 bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Ryanair (Írsko) - Štrajk pilotov + kabíny</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Status:</strong> Leto 2024, Vianoce 2024/2025<br/>
                  <strong>Trasy:</strong> Bratislava-Dublin, Viedeň-Manchester<br/>
                  <strong>Kompenzácia:</strong> ✅ Patrí (interní zamestnanci)
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-orange-500 bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Francúzske ATC - Opakované štrajky riadenia</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Status:</strong> Pravidelné (2-3x ročne)<br/>
                  <strong>Trasy:</strong> Všetky lety cez francúzsky vzdušný priestor<br/>
                  <strong>Kompenzácia:</strong> ⚠️ Komplikované (môže byť uznané ako výnimka)
                </p>
              </div>

              <div className="rounded-xl border-l-4 border-red-500 bg-white p-6 shadow-lg dark:bg-gray-800">
                <div className="flex items-center gap-3 mb-3">
                  <Plane className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">SAS Scandinavian (Švédsko) - Dlhodobý štrajk</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Status:</strong> Júl 2024 (15 dní)<br/>
                  <strong>Trasy:</strong> Všetky severské lety<br/>
                  <strong>Kompenzácia:</strong> ✅ Patrí (interní zamestnanci)
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Process */}
          <section id="proces" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              7. Ako získať kompenzáciu cez ClaimWinger?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Letecké spoločnosti automaticky odmietajú žiadosti pri štrajku. Profesionálna služba vie, ako argumentovať:
              </p>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 p-6 dark:from-blue-900/20 dark:to-indigo-900/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Vyplňte žiadosť online (2 minúty)</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Zadajte číslo letu, dátum a dôvod (štrajk). ClaimWinger automaticky zistí, či vám patrí kompenzácia.
                    </p>
                    <a 
                      href="https://claimwinger.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-3 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                    >
                      Začať žiadosť →
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 p-6 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Tím právnikov jedná s airline</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      ClaimWinger využije všetky právne argumenty, súdne precedensy a databázu prípadov. Airline dostane profesionálnu žiadosť s dôkazmi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 p-6 dark:from-purple-900/20 dark:to-pink-900/20">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">Peniaze na váš účet (bez rizika)</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Platíte len pri úspechu (25% provízia). Ak prehrávate, neplatíte nič. Priemerný čas: 8-12 týždňov.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl bg-yellow-50 p-6 dark:bg-yellow-900/20">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 flex-shrink-0 text-yellow-600 dark:text-yellow-400" />
                <div>
                  <p className="mb-2 font-semibold text-yellow-900 dark:text-yellow-100">Prečo anglický formulár namiesto slovenského?</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Letecké spoločnosti často ignorujú žiadosti v "malých" jazykoch (slovenčina, čeština). Medzinárodný serwis po anglicky má vyššiu mieru úspešnosti, pretože:
                  </p>
                  <ul className="ml-6 mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✓ Airlines berú vážne profesionálne právne firmy</li>
                    <li>✓ Angličtina = štandard v leteckom priemysle</li>
                    <li>✓ Vyšší úspech vďaka databáze precedensov</li>
                    <li>✓ Rýchlejšie vybavenie (žiadne prekladateľské zdržania)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section with Schema.org */}
          <section id="faq" className="mb-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              8. Často kladené otázky (FAQ)
            </h2>

            <div className="space-y-4">
              <details className="group rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white" itemProp="name">
                  Môžem dostať kompenzáciu aj roky po štrajku?
                  <span className="ml-4 text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-gray-700 dark:text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Áno! Na Slovensku máte <strong>3 roky</strong> na podanie žiadosti (počítané od dátumu letu). V praxi to znamená, že ak váš let bol v januári 2022, môžete požiadať až do januára 2025.
                    </p>
                    <p className="mt-2">
                      Preto nikdy nie je neskoro - aj "staré" prípady majú vysokú mieru úspešnosti, ak bol štrajk interný (piloti, kabína).
                    </p>
                  </div>
                </div>
              </details>

              <details className="group rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white" itemProp="name">
                  Čo ak airline tvrdí, že štrajk je nadzwyczajná okolnosť?
                  <span className="ml-4 text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-gray-700 dark:text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      To je ich <strong>štandardná obrana</strong>. Ryanair, Wizz Air a ostatní automaticky odmietajú všetky žiadosti pri štrajku s odôvodnením "mimořádné okolnosti".
                    </p>
                    <p className="mt-2">
                      <strong>Právna realita:</strong> Súdy (vrátane Európskeho súdneho dvora) rozhodli, že štrajk INTERNÝCH zamestnancov (piloti, kabína) NIE je nadzwyczajná okolnosť. Airline má zodpovednosť za svoje pracovné vzťahy.
                    </p>
                    <p className="mt-2">
                      <strong>Riešenie:</strong> Nekomunikujte sami - nechajte to profesionálom ako ClaimWinger, ktorí majú právne argumenty pripravené.
                    </p>
                  </div>
                </div>
              </details>

              <details className="group rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white" itemProp="name">
                  Dostanem kompenzáciu, aj keď som mal low-cost letenku?
                  <span className="ml-4 text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-gray-700 dark:text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Jednoznačne áno!</strong> Právo na kompenzáciu nie je závislé od ceny lístka. Či ste zaplatili 20 € alebo 500 €, pravidlá sú rovnaké.
                    </p>
                    <p className="mt-2">
                      Príklad: Ryanair za 29 € Bratislava-Londýn zrušený kvôli štrajku pilotov → patrí vám <strong>250 €</strong> (viac ako 8x cena lístka!).
                    </p>
                  </div>
                </div>
              </details>

              <details className="group rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white" itemProp="name">
                  Čo ak som prijal voucher namiesto refundácie?
                  <span className="ml-4 text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-gray-700 dark:text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Prijatie vouchera <strong>NEOVPLYVŇUJE</strong> vaše právo na kompenzáciu! Toto sú dva oddelené nároky:
                    </p>
                    <ul className="ml-6 mt-3 space-y-2">
                      <li>🎟️ <strong>Voucher/refundácia</strong> = náhrada za cenu lístka</li>
                      <li>💰 <strong>Kompenzácia</strong> = peňažná náhrada za nepríjemnosti (250-600 €)</li>
                    </ul>
                    <p className="mt-2">
                      Môžete použiť voucher NA NOVÝ let a ZÁROVEŇ požiadať o kompenzáciu za ten zrušený kvôli štrajku.
                    </p>
                  </div>
                </div>
              </details>

              <details className="group rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900 dark:text-white" itemProp="name">
                  Koľko to trvá získať peniaze?
                  <span className="ml-4 text-2xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-gray-700 dark:text-gray-300" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Priemerný čas: <strong>8-12 týždňov</strong> pri use ClaimWinger (profesionálny serwis).
                    </p>
                    <p className="mt-2">
                      Prečo tak dlho?
                    </p>
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>1. Airlines majú 6 týždňov na odpoveď (zákonná lehota)</li>
                      <li>2. Často odmietnu → treba vyjednávať/eskalovať</li>
                      <li>3. Niektoré prípady idú do súdu (vtedy 6-12 mesiacov)</li>
                    </ul>
                    <p className="mt-2">
                      Dôležité: <strong>Neplatíte nič vopred</strong>. Ak to trvá dlho, nesú náklady za vás.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-12">
            <div className="rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-2xl md:p-12">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Zrušený let kvôli štrajku? Získajte až 600 €
                </h2>
                <p className="mb-8 text-lg text-blue-100 md:text-xl">
                  Letecké spoločnosti automaticky odmietajú žiadosti pri štrajku. ClaimWinger má 89% úspešnosť vďaka právnym argumentom a databáze precedensov. Neplatíte nič vopred - len 25% pri úspechu.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl"
                  >
                    Získať kompenzáciu →
                  </a>
                  <Link
                    href="/sk/kalkulacka-kompenzacie"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-white/10"
                  >
                    Kalkulačka kompenzácie
                  </Link>
                </div>
                <p className="mt-6 text-sm text-blue-200">
                  ⏱️ Vyplnenie trvá 2 minúty • 💰 Platíte len pri úspechu • ⚖️ Právnici sa postarajú o všetko
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section>
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Súvisiace články</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie" className="group rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  Kompletný sprievodca kompenzáciou
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Všetko, čo potrebujete vedieť o kompenzácii za meškanie a zrušenie letu.
                </p>
              </Link>

              <Link href="/sk/meskanie-letu" className="group rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  Meškanie letu – Vaše práva
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kedy patrí kompenzácia pri meškaní letu a ako ju získať.
                </p>
              </Link>

              <Link href="/sk/zruseny-let" className="group rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  Zrušený let – Kompenzácia + Refund
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Dvojité plnenie: Kompenzácia až 600 € + vrátenie peňazí za lístok.
                </p>
              </Link>
            </div>
          </section>

        </div>
      </article>

      {/* Schema.org FAQPage Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Môžem dostať kompenzáciu aj roky po štrajku?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Áno! Na Slovensku máte 3 roky na podanie žiadosti (počítané od dátumu letu). V praxi to znamená, že aj 'staré' prípady majú vysokú mieru úspešnosti, ak bol štrajk interný (piloti, kabína)."
                }
              },
              {
                "@type": "Question",
                "name": "Čo ak airline tvrdí, že štrajk je nadzwyczajná okolnosť?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To je ich štandardná obrana. Súdy (vrátane Európskeho súdneho dvora) rozhodli, že štrajk INTERNÝCH zamestnancov (piloti, kabína) NIE je nadzwyczajná okolnosť. Airline má zodpovednosť za svoje pracovné vzťahy."
                }
              },
              {
                "@type": "Question",
                "name": "Dostanem kompenzáciu, aj keď som mal low-cost letenku?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jednoznačne áno! Právo na kompenzáciu nie je závislé od ceny lístka. Či ste zaplatili 20 € alebo 500 €, pravidlá sú rovnaké. Príklad: Ryanair za 29 € Bratislava-Londýn zrušený kvôli štrajku pilotov → patrí vám 250 € (viac ako 8x cena lístka!)."
                }
              },
              {
                "@type": "Question",
                "name": "Čo ak som prijal voucher namiesto refundácie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Prijatie vouchera NEOVPLYVŇUJE vaše právo na kompenzáciu! Voucher/refundácia je náhrada za cenu lístka, zatiaľ čo kompenzácia je peňažná náhrada za nepríjemnosti (250-600 €). Môžete použiť voucher NA NOVÝ let a ZÁROVEŇ požiadať o kompenzáciu za ten zrušený kvôli štrajku."
                }
              },
              {
                "@type": "Question",
                "name": "Koľko to trvá získať peniaze?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Priemerný čas: 8-12 týždňov pri use ClaimWinger (profesionálny serwis). Airlines majú 6 týždňov na odpoveď. Často odmietnu, vtedy sa musí vyjednávať alebo eskalovať. Niektoré prípady idú do súdu (6-12 mesiacov). Dôležité: Neplatíte nič vopred."
                }
              }
            ]
          })
        }}
      />
    </LayoutSk>
  );
}
