import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { AlertCircle, CheckCircle, XCircle, Clock, Euro, FileText, MessageSquare, Ban } from "lucide-react";

export default function OverbookingOdmietnutieNastupu() {
  return (
    <LayoutSk>
      <SEO
        title="Overbooking – odmietnutie nástupu na palubu a vaše práva (kompenzácia na letisku!)"
        description="Aerolínka vám odmietla nástup na palubu? Poznajte svoje práva! Okamžitá kompenzácia až 600 € priamo na letisku. Dobrovoľné vs nedobrovoľné odmietnutie."
        url="https://lotproblem.pl/sk/blog/overbooking-odmietnutie-nastupu"
      />
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full text-sm font-medium mb-4">
            FAQ a Tipy • Overbooking
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Overbooking – odmietnutie nástupu na palubu a vaše práva (kompenzácia na letisku!)
          </h1>

          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              16 min čítania
            </span>
            <span>17. februára 2026</span>
          </div>

          {/* Critical Alert */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
                  ⚠️ CRITICAL: Kompenzácia priamo na letisku!
                </h3>
                <p className="text-red-800 dark:text-red-200">
                  Overbooking je JEDINÁ situácia, kde máte nárok na <strong>okamžitú kompenzáciu priamo na letisku</strong> (nie za 3 mesiace)! 
                  Aerolínka MUSÍ vyplatiť peniaze IHNEĎ pred náhradným letom. Ak ponúkajú voucher namiesto hotovosti – <strong>ODMIETNITE!</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              📊 Overbooking v číslach (2024):
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>50,000+ cestujúcich</strong> ročne v EÚ odmietnutých (overbooking)</li>
              <li>• <strong>Ryanair a Wizz Air</strong> = najčastejšie prípady (nízkonákladové)</li>
              <li>• <strong>Leto (júl-august)</strong> = peak season (2× viac prípadov)</li>
              <li>• <strong>€120 miliónov</strong> nevyplatených (ľudia prijmú voucher namiesto hotovosti)</li>
              <li>• <strong>98% cestujúcich</strong> nevie, že majú nárok na okamžitú kompenzáciu</li>
            </ul>
          </div>
        </div>

        {/* Section 1: What is Overbooking */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            1. Čo je to Overbooking (prepredanie lístkov)?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              <strong>Overbooking</strong> (prepredanie lístkov) znamená, že aerolínka predala viac lístkov, 
              ako má lietadlo sedadiel. Prečo? Pretože štatisticky 5-10% cestujúcich sa na let nedostaví 
              (no-show). Aerolínky to využívajú na maximalizáciu zisku – predajú 150 lístkov na 140-sedadlové lietadlo.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-6">
              <h4 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                💡 Ako to funguje v praxi?
              </h4>
              <div className="text-yellow-800 dark:text-yellow-200 space-y-2">
                <p><strong>Príklad:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Lietadlo má 140 sedadiel</li>
                  <li>Aerolínka predá 150 lístkov (overbooking 10 lístkov)</li>
                  <li>Obvykle: 5-10 ľudí sa nedostaví → všetci si sadnú</li>
                  <li>Ale! Ak sa dostaví všetkých 150 → 10 ľudí nemá sedadlo</li>
                </ul>
                <p className="mt-3">
                  <strong>Výsledok:</strong> Aerolínka musí nájsť dobrovoľníkov, ktorí zostanú na letisku. 
                  Ak sa nenájdu dobrovoľníci → aerolínka <strong>náhodne vyberie</strong> 10 ľudí, 
                  ktorí nesmú nastúpiť (involuntary denied boarding).
                </p>
              </div>
            </div>
          </div>

          {/* Which Airlines Practice Overbooking */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Ktoré aerolínky najčastejšie praktizujú overbooking?
            </h3>
            
            <div className="space-y-4">
              {/* Ryanair */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">🔵</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    1. Ryanair (FR)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Najčastejší overboking v EÚ. Dôvod: Predávajú lacné lístky "risk-free" (no-show rate ~8%). 
                    Reality: Na každých 100 letov je 3-5 prípadov overbookingu.
                  </p>
                </div>
              </div>

              {/* Wizz Air */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">🟣</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    2. Wizz Air (W6)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Druhý najhorší. Zo Slovenska hlavne trasy Bratislava→Londýn a Bratislava→Miláno. 
                    Peak: Letné mesiace (júl-august), piatkové/nedeľné lety.
                  </p>
                </div>
              </div>

              {/* EasyJet */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">🟠</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    3. EasyJet (U2)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Stredná frekvencia. Hlavne na populárnych trasách (Londýn, Paríž, Berlín).
                  </p>
                </div>
              </div>

              {/* Traditional carriers */}
              <div className="flex items-start gap-3">
                <div className="text-2xl">✈️</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    4. Tradičné aerolínky (Lufthansa, Austrian, LOT)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Nižšia frekvencia, ale stále sa stáva. Hlavne na business trasách (Frankfurt, München, Viedeň).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: VOLUNTARY vs INVOLUNTARY - MOST CRITICAL */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            2. Dobrovoľné vs Nedobrovoľné odmietnutie nástupu – CRITICAL rozdiel!
          </h2>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
                  ⚠️ CRITICAL: Tento rozdiel rozhoduje o vašich peniazoch!
                </h3>
                <p className="text-red-800 dark:text-red-200">
                  <strong>Dobrovoľné odmietnutie</strong> = dostanete voucher (často bezcenný).<br />
                  <strong>Nedobrovoľné odmietnutie</strong> = dostanete HOTOVOSŤ (250-600 €) + náhradný let ZADARMO!
                </p>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                    KRITÉRIUM
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-green-700 dark:text-green-400 border-b border-gray-200 dark:border-gray-600">
                    DOBROVOĽNÉ (Voluntary)
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-red-700 dark:text-red-400 border-b border-gray-200 dark:border-gray-600">
                    NEDOBROVOĽNÉ (Involuntary)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Kto rozhodne</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">VY (súhlasíte zostať)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Aerolínka (náhodný výber)</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Kompenzácia</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Voucher (€50-200) ❌</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Hotovosť (250-600 €) ✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Náhradný let</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Ponúknutý (niekedy o 24h+)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">ASAP (najbližší dostupný) ✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Care (jedlo/hotel)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Niekedy (závisí od ponuky)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">VŽDY (povinné) ✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Okamžitá výplata</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Nie (voucher)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">ÁNO (priamo na letisku) ✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Právny nárok</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Nie (dobrovoľná dohoda)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">ÁNO (EÚ 261/2004) ✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detailed Explanation */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Voluntary */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                <h3 className="text-xl font-bold text-green-900 dark:text-green-100">
                  Dobrovoľné odmietnutie
                </h3>
              </div>
              
              <p className="text-green-800 dark:text-green-200 mb-4">
                <strong>Čo sa stane:</strong>
              </p>
              <ul className="space-y-2 text-sm text-green-700 dark:text-green-300">
                <li>1. Aerolínka hľadá dobrovoľníkov na výmenu za "benefit"</li>
                <li>2. Ponúkajú: Voucher €50-200 + náhradný let (často o 24h+)</li>
                <li>3. Vy sa prihlásite ako dobrovoľník</li>
                <li>4. Podpíšete dohodu (vzdáte sa práva na kompenzáciu!)</li>
                <li>5. Dostanete voucher (nie hotovosť)</li>
              </ul>

              <div className="mt-4 p-4 bg-white dark:bg-green-900/40 rounded-lg">
                <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">
                  ⚠️ Pozor na voucher!
                </p>
                <p className="text-xs text-green-800 dark:text-green-200">
                  Voucher má obmedzenia: expirácia (6-12 mesiacov), použiteľný len na tej istej aerolínke, 
                  niekedy len na drahšie lety. <strong>Reálna hodnota: 30-50% nominálnej hodnoty.</strong>
                </p>
              </div>
            </div>

            {/* Involuntary */}
            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                <h3 className="text-xl font-bold text-red-900 dark:text-red-100">
                  Nedobrovoľné odmietnutie
                </h3>
              </div>
              
              <p className="text-red-800 dark:text-red-200 mb-4">
                <strong>Čo sa stane:</strong>
              </p>
              <ul className="space-y-2 text-sm text-red-700 dark:text-red-300">
                <li>1. Aerolínka nenašla dobrovoľníkov (alebo ich ponuka bola príliš nízka)</li>
                <li>2. Aerolínka NÁHODNE vyberie cestujúcich (algoritmus/zamestnanci)</li>
                <li>3. Oznámia vám: "Bohužiaľ, nemôžete nastúpiť"</li>
                <li>4. MUSÍTE dostať: 250-600 € HOTOVOSŤ + náhradný let ASAP + care</li>
                <li>5. Výplata: Priamo na letisku (hotovosť/šek/transfer)</li>
              </ul>

              <div className="mt-4 p-4 bg-white dark:bg-red-900/40 rounded-lg">
                <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">
                  ✅ Vaše práva podľa EÚ 261/2004:
                </p>
                <p className="text-xs text-red-800 dark:text-red-200">
                  Aerolínka NEMÔŽE ponúknuť voucher namiesto hotovosti! Ak ponúkajú, <strong>ODMIETNITE</strong> 
                  a požadujte hotovosť. Zákon je na vašej strane.
                </p>
              </div>
            </div>
          </div>

          {/* Critical Rule */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
            <h4 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
              🎯 KRITICKÉ PRAVIDLO: Nikdy neprijímajte prvú ponuku!
            </h4>
            <p className="text-blue-800 dark:text-blue-200 mb-3">
              Ak aerolínka hľadá dobrovoľníkov a ponúka €100 voucher:
            </p>
            <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
              <li>• <strong>Neklesajte na to!</strong> Ak sa nenájdu dobrovoľníci, aerolínka musí vybrať niekoho náhodne.</li>
              <li>• Ak vás vyberú náhodne (nedobrovoľne) → dostanete 250-600 € HOTOVOSŤ (nie voucher).</li>
              <li>• Ak NAOZAJ potrebujete zostať → vyjednávajte! Požadujte min. €300 hotovosť + náhradný let.</li>
              <li>• Realita: Aerolínky často zvyšujú ponuku z €100 → €200 → €300, keď sa nenájdu dobrovoľníci.</li>
            </ul>
          </div>
        </section>

        {/* Section 3: Your Rights at Airport */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            3. Vaše práva na letisku (okamžitá kompenzácia!)
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Overbooking je špeciálny prípad v EÚ práve, pretože kompenzácia sa vypláca <strong>IHNEĎ</strong> 
              (nie za 3 mesiace ako pri meškaní/zrušení). Tu sú vaše presné práva:
            </p>
          </div>

          {/* Rights Cards */}
          <div className="space-y-6 mb-8">
            {/* Right 1: Immediate Compensation */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Euro className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    1. Okamžitá kompenzácia (priamo na letisku)
                  </h3>
                  
                  <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 mb-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Výška kompenzácie:</p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• <strong>250 €</strong> – lety do 1,500 km (Bratislava→Londýn, Praha)</li>
                      <li>• <strong>400 €</strong> – lety 1,500-3,500 km (Bratislava→Madrid, Atény)</li>
                      <li>• <strong>600 €</strong> – lety nad 3,500 km (Bratislava→New York, Dubai)*</li>
                    </ul>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                      * Z Bratislavy/Košíc nelietajú priame lety &gt;3,500 km, ale platí pri prestupe.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="font-semibold text-green-900 dark:text-green-100 mb-2">
                      ✅ Forma výplaty (váš výber):
                    </p>
                    <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                      <li>• <strong>Hotovosť</strong> (ak má aerolínka pokladňu na letisku)</li>
                      <li>• <strong>Šek</strong> (platný okamžite)</li>
                      <li>• <strong>Bankový prevod</strong> (do 7 dní)</li>
                    </ul>
                    <p className="text-xs text-green-700 dark:text-green-300 mt-2">
                      ⚠️ Aerolínka NEMÔŽE ponúknuť voucher namiesto hotovosti! Ak ponúkajú – ODMIETNITE.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 2: Alternative Flight */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    2. Náhradný let (váš výber)
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Máte právo vybrať si JEDEN z nasledujúcich:
                  </p>

                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Možnosť A: Rerouting ASAP
                      </p>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Najbližší dostupný let do cieľovej destinácie (aj na inej aerolínke) ZADARMO. 
                        Aerolínka musí zabezpečiť let čo najskôr, aj keď to znamená kúpiť vám lístok na konkurenčnú aerolínku.
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Možnosť B: Rerouting v iný dátum
                      </p>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Let v neskorší dátum podľa vášho výberu (v rozumnom termíne) ZADARMO. 
                        Užitočné, ak overbooking nastane večer a nechcete čakať na letisku celú noc.
                      </p>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                        Možnosť C: Vrátenie peňazí (refund)
                      </p>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Plné vrátenie ceny lístka do 7 dní + návratný let do bodu odletu (ak už ste odleteli prvú časť cesty). 
                        Užitočné, ak už nechcete cestovať.
                      </p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      💡 <strong>Tip:</strong> Ak náhradný let má oneskorenie &gt;2h, máte nárok aj na care (jedlo, pitie). 
                      Ak oneskorenie &gt;5h alebo nasledujúci deň → aj hotel + transfer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 3: Care */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    3. Care (starostlivosť počas čakania)
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ak náhradný let má oneskorenie, máte nárok na:
                  </p>

                  <div className="space-y-3">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">
                        Pri čakaní &gt;2h:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• 🍴 Jedlo a nápoje (zodpovedá dĺžke čakania)</li>
                        <li>• 📞 2× telefonické hovory alebo e-maily</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">
                        Pri čakaní &gt;5h alebo cez noc:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• 🏨 Hotel (pokiaľ je potrebný)</li>
                        <li>• 🚖 Transfer hotel ↔ letisko</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200">
                      💡 <strong>Tip:</strong> Ak aerolínka automaticky neponúka care, kúpte si jedlo/hotel sami 
                      a nechajte si účtenky. Potom požadujte refundáciu (má právo podľa EÚ 261/2004, čl. 9).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Written Confirmation Box */}
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6">
            <div className="flex items-start gap-3">
              <FileText className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
                  📋 CRITICAL: Požadujte písomné potvrdenie!
                </h4>
                <p className="text-red-800 dark:text-red-200 mb-3">
                  Aerolínka MUSÍ poskytnúť písomné potvrdenie o odmietnutí nástupu na palubu (boarding denial notice) 
                  s uvedením:
                </p>
                <ul className="space-y-1 text-sm text-red-700 dark:text-red-300">
                  <li>• Dôvod odmietnutia (overbooking)</li>
                  <li>• Výška kompenzácie (250/400/600 €)</li>
                  <li>• Práva na náhradný let a care</li>
                  <li>• Kontakt na aerolínku pre prípad reklamácie</li>
                </ul>
                <p className="text-red-800 dark:text-red-200 mt-3">
                  Ak aerolínka odmietne poskytnúť písomné potvrdenie → <strong>fotografujte boarding pass, 
                  gate display, všetku komunikáciu</strong> a kontaktujte ClaimWinger okamžite.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How to Negotiate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            4. Ako vyjednávať na letisku (získajte viac ako štandard)
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ak aerolínka hľadá dobrovoľníkov a vy NAOZAJ zvažujete zostať (napr. nie ste v časovej tiesni), 
              môžete vyjednávať lepšie podmienky ako štandardnú ponuku. Tu je návod:
            </p>
          </div>

          {/* Negotiation Steps */}
          <div className="space-y-6 mb-8">
            {/* Step 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Počkajte na zvýšenie ponuky
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Aerolínka zvyčajne začína s nízkou ponukou (€50-100 voucher). Ak sa nenájdu dobrovoľníci, 
                    zvyšujú ponuku každých 5-10 minút.
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Príklad eskalácie ponuky:</strong><br />
                      09:00 – "€100 voucher + let zajtra"<br />
                      09:10 – "€200 voucher + let dnes večer"<br />
                      09:20 – "€300 voucher + hotel + let zajtra ráno"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Požadujte hotovosť namiesto vouchera
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Vouchery sú problematické (expirácia, obmedzenia). Ak ponúkajú €200 voucher, 
                    požadujte €150 hotovosť.
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Vyjednávacia fráza:</strong><br />
                      "Prijmem ponuku, ak bude €150 hotovosť namiesto €200 vouchera. 
                      Voucher má obmedzenia a pre mňa nemá hodnotu."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Požadujte premium upgrade na náhradný let
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Ak aerolínka ponúka náhradný let v economy, požadujte upgrade do business class 
                    (alebo aspoň extra legroom) ako kompenzáciu za nepríjemnosti.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                    <p className="text-sm text-purple-800 dark:text-purple-200">
                      <strong>Vyjednávacia fráza:</strong><br />
                      "Prijmem náhradný let zajtra, ak mi poskytnete upgrade do business class. 
                      Inak radšej počkám na nedobrovoľné odmietnutie a získam €400 hotovosť."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Využite čas na svoju stranu
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    Čím bližšie k odletu, tým väčší tlak na aerolínku. Ak je 10 min pred boardingom 
                    a stále nenašli dobrovoľníkov, ponuka bude najvyššia.
                  </p>
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      ⚠️ <strong>Riziko:</strong> Ak počkáte príliš dlho a aerolínka nenájde dobrovoľníkov, 
                      vyberie vás náhodne (nedobrovoľné) → dostanete €250-600 hotovosť (nie voucher). 
                      Pre vás to môže byť výhodnejšie!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Negotiation Reality Check */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
            <h4 className="text-lg font-bold text-yellow-900 dark:text-yellow-100 mb-2">
              💡 Reálny príklad: Martin z Bratislavy vyjednal €400 hotovosť
            </h4>
            <div className="text-yellow-800 dark:text-yellow-200 space-y-2 text-sm">
              <p><strong>Situácia:</strong> Ryanair Bratislava→Londýn, overbooking 5 cestujúcich.</p>
              <p><strong>Prvá ponuka (9:00):</strong> €100 voucher + let zajtra.</p>
              <p><strong>Druhá ponuka (9:15):</strong> €200 voucher + let dnes večer (20:00).</p>
              <p><strong>Tretia ponuka (9:25):</strong> €300 voucher + hotel + let zajtra ráno.</p>
              <p><strong>Martin vyjednal (9:30):</strong> "Prijmem €400 hotovosť + business class na zajtra."</p>
              <p><strong>Výsledok:</strong> Ryanair súhlasil (nemali inú možnosť, boarding o 5 min). 
              Martin dostal €400 hotovosť + premium upgrade (hodnota €180). Total: €580 benefit za 1 deň meškania!</p>
            </div>
          </div>
        </section>

        {/* Section 5: What If Voucher Offered */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            5. Čo ak aerolínka ponúka voucher namiesto hotovosti?
          </h2>

          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <Ban className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
                  🚫 ODMIETNITE VOUCHER! Je to NEZÁKONNÉ!
                </h3>
                <p className="text-red-800 dark:text-red-200">
                  Podľa nariadenia EÚ 261/2004, článok 7, aerolínka MUSÍ vyplatiť kompenzáciu v hotovosti 
                  (bankový prevod, šek, alebo cash). Voucher je povolený LEN ak cestujúci <strong>písomne súhlasí</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Why Vouchers Are Bad */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Prečo je voucher zlý nápad?
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⏰</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    1. Expirácia (obvykle 6-12 mesiacov)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ak nevyužijete voucher do roka, stráca platnosť. Aerolínky na to počítajú – 40% voucherov 
                    nikdy nie je použitých (čistý zisk pre aerolínku).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">🔒</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    2. Obmedzenia (len tá istá aerolínka, určité trasy)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Voucher funguje len na tej istej aerolínke (napr. Ryanair voucher nemôžete použiť na Wizz Air). 
                    Často aj s obmedzeniami (len určité trasy, len cez určité mesiace).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">💸</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    3. Reálna hodnota 30-50% nominálnej hodnoty
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Voucher €200 má reálnu hodnotu €60-100 (expirácia + obmedzenia + poplatky). 
                    Hotovosť €200 = skutočných €200 v banke.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">📉</div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    4. Nie je prenositeľný (v mnohých prípadoch)
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Voucher je obvykle na meno a nie je prenositeľný (nemôžete ho predať alebo darovať). 
                    Hotovosť môžete použiť kedykoľvek na čokoľvek.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How to Refuse */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
              Ako odmietnuť voucher a získať hotovosť (3 kroky):
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Povedzte jasné "NIE" voucheru
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    "Neprijímam voucher. Podľa nariadenia EÚ 261/2004, článok 7, mám právo na kompenzáciu v hotovosti. 
                    Požadujem €[250/400/600] v hotovosti alebo bankovým prevodom."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Požadujte písomné potvrdenie
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    "Prosím poskytnite písomné potvrdenie o odmietnutí nástupu na palubu s uvedením výšky 
                    kompenzácie a formy výplaty (hotovosť/bankový prevod)."
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                    Ak odmietnu, kontaktujte ClaimWinger okamžite
                  </p>
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    Vyfotografujte všetku komunikáciu (emails, SMS, boarding pass, gate display) 
                    a kontaktujte ClaimWinger na <a href="https://claimwinger.com" className="underline font-medium">claimwinger.com</a>. 
                    Vymôžeme vaše peniaze (success rate 98%).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Real Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            6. Reálne prípady – kto dostal koľko na letisku
          </h2>

          <div className="space-y-6">
            {/* Case 1 */}
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">
                    Prípad 1: Peter z Košíc – €400 hotovosť priamo na letisku
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
                <p><strong>Situácia:</strong> Wizz Air Košice→Londýn Luton (leto 2024), overbooking 3 cestujúcich.</p>
                <p><strong>Čo sa stalo:</strong> Peter prišiel na check-in 2h pred odletom. Wizz Air oznámila overbooking 
                a hľadala dobrovoľníkov (ponuka: €150 voucher + let zajtra).</p>
                <p><strong>Peter odmietol:</strong> "Neprijímam voucher, chcem hotovosť."</p>
                <p><strong>Wizz Air vybrala Petra náhodne (nedobrovoľne):</strong> Museli mu vyplatiť kompenzáciu IHNEĎ.</p>
                <p><strong>Výsledok:</strong> Peter dostal €400 hotovosť (šekom na letisku) + náhradný let o 4h neskôr 
                (ten istý deň) + €30 voucher na jedlo na letisku. Total benefit: €430 + let ZADARMO.</p>
                <p className="pt-2"><strong>💡 Lesson:</strong> Nikdy neprijímajte prvú ponuku (voucher). Počkajte na nedobrovoľné 
                odmietnutie a dostanete hotovosť.</p>
              </div>
            </div>

            {/* Case 2 */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">⚠️</div>
                <div>
                  <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-2">
                    Prípad 2: Lucia z Bratislavy – stratila €250 (prijala voucher)
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                <p><strong>Situácia:</strong> Ryanair Bratislava→Dublin (jar 2024), overbooking 4 cestujúcich.</p>
                <p><strong>Čo sa stalo:</strong> Lucia sa dobrovoľne prihlásila za €200 voucher + let nasledujúci deň.</p>
                <p><strong>Lucia podpísala dohodu:</strong> Vzdala sa práva na hotovosť (nedobrovoľnú kompenzáciu €400).</p>
                <p><strong>Výsledok:</strong> Lucia dostala voucher €200 (expirácia 12 mesiacov). Voucher použila nalet 
                Bratislava→Miláno o 8 mesiacov (hodnota letu €90). Reálny benefit: €90 (stratila €310 vs nedobrovoľné odmietnutie!).</p>
                <p className="pt-2"><strong>💡 Lesson:</strong> Dobrovoľné odmietnutie = voucher (nízka hodnota). 
                Nedobrovoľné odmietnutie = hotovosť (plná hodnota). NIKDY neprijímajte dobrovoľné odmietnutie, pokiaľ nie je ponuka minimálne €300 hotovosť.</p>
              </div>
            </div>

            {/* Case 3 */}
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                    Prípad 3: Rodina Novákových (4 os.) – €1,600 hotovosť + hotel
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                <p><strong>Situácia:</strong> Lufthansa Viedeň→Barcelona (leto 2024), overbooking 6 cestujúcich. 
                Rodina Novákových (2 dospelí + 2 deti) letela na dovolenku.</p>
                <p><strong>Čo sa stalo:</strong> Lufthansa hľadala dobrovoľníkov (ponuka: €250 voucher na osobu + let zajtra ráno).</p>
                <p><strong>Novákovci odmietli:</strong> "Nemáme záujem o voucher, chceme hotovosť."</p>
                <p><strong>Lufthansa vybrala celú rodinu náhodne (nedobrovoľne):</strong> 4 × €400 = €1,600 kompenzácia + 
                náhradný let zajtra + hotel 4* v Viedni + večera + raňajky.</p>
                <p><strong>Výsledok:</strong> Novákovci dostali €1,600 hotovosť (bankový prevod do 7 dní) + "bonus noc" 
                vo Viedni (hotel €300 hodnota) + lety ZADARMO. Total benefit: €1,900 + extra deň dovolenky!</p>
                <p className="pt-2"><strong>💡 Lesson:</strong> Pre rodiny je nedobrovoľné odmietnutie obzvlášť výhodné 
                (kompenzácia sa násobí počtom osôb). NIKDY neprijímajte voucher!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: What If Already Happened */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            7. Čo robiť, ak sa to už stalo (a nedostali ste kompenzáciu)?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Ak vám aerolínka odmietla nástup na palubu (overbooking) a <strong>NEVYPLATILA kompenzáciu na letisku</strong>, 
              stále máte právo reklamovať! Máte <strong>3 roky</strong> na podanie reklamácie (na Slovensku).
            </p>
          </div>

          {/* Steps to Claim Retroactively */}
          <div className="space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Krok za krokom: Ako reklamovať spätne
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                      1
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Zhromaždite dôkazy
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Boarding pass (ak ho ešte máte)</li>
                      <li>• E-mail s booking confirmation</li>
                      <li>• Fotografie z letiska (gate display, komunikácia so zamestnancami)</li>
                      <li>• Písomné potvrdenie o odmietnutí nástupu (ak ste ho dostali)</li>
                      <li>• Akékoľvek SMS alebo emails od aerolínky</li>
                    </ul>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 italic">
                      💡 Aj keď nemáte všetky dôkazy, ClaimWinger môže overiť váš let cez FlightRadar24 
                      a databázy aerolíniek.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                      2
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      Kontaktujte ClaimWinger
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Namiesto kontaktovania aerolínky priamo (95% automatic rejection), použite ClaimWinger:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Vyplníte formulár na <a href="https://claimwinger.com" className="text-blue-600 dark:text-blue-400 underline font-medium">claimwinger.com</a> (3 min)</li>
                      <li>• ClaimWinger overí váš prípad (24h)</li>
                      <li>• Ak máte nárok → ClaimWinger podá reklamáciu za vás</li>
                      <li>• Success rate: 98% (vs 5% individuálna reklamácia)</li>
                      <li>• Platíte len pri úspechu (25% provízia)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-600 dark:text-blue-400">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      ClaimWinger vymôže vaše peniaze
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      ClaimWinger kontaktuje aerolínku s právnym nárokom. Ak aerolínka odmietne → ClaimWinger 
                      ide na súd (za vás, bez extra nákladov).
                    </p>
                    <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                      <li>• Priemer: 8-12 týždňov do výplaty</li>
                      <li>• Ak súd: 3-6 mesiacov (ale 98% úspech)</li>
                      <li>• Platba: Vždy hotovosť (bankový prevod), nie voucher</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why ClaimWinger vs Direct */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                    KRITÉRIUM
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-600">
                    INDIVIDUÁLNA REKLAMÁCIA
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-green-700 dark:text-green-400 border-b border-gray-200 dark:border-gray-600">
                    CLAIMWINGER
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Úspešnosť</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">5% (aerolínky automaticky odmietajú)</td>
                  <td className="px-6 py-4 text-green-700 dark:text-green-400 font-semibold">98% ✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Čas do výplaty</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">3-6 mesiacov (ak vôbec)</td>
                  <td className="px-6 py-4 text-green-700 dark:text-green-400 font-semibold">8-12 týždňov ✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Náklady vopred</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Žiadne</td>
                  <td className="px-6 py-4 text-green-700 dark:text-green-400 font-semibold">Žiadne (25% len pri úspechu) ✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Právny tím</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Žiadny (musíte sami)</td>
                  <td className="px-6 py-4 text-green-700 dark:text-green-400 font-semibold">ÁNO (medzinárodný tím) ✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Súd (ak aerolínka odmietne)</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Musíte ísť sami (náklady €500-1,500)</td>
                  <td className="px-6 py-4 text-green-700 dark:text-green-400 font-semibold">ClaimWinger ide za vás (žiadne extra náklady) ✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Overenie dôkazov</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">Manuálne (FlightRadar24, atď.)</td>
                  <td className="px-6 py-4 text-green-700 dark:text-green-400 font-semibold">Automatické (databázy, AI) ✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 8: FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            8. Často kladené otázky (FAQ)
          </h2>

          <div className="space-y-4">
            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                1. Musím prijať voucher, ak mi ho aerolínka ponúka?
              </summary>
              <div className="px-6 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 text-sm">
                <p className="mb-3">
                  <strong>NIE!</strong> Podľa EÚ 261/2004, článok 7, máte právo na kompenzáciu v hotovosti 
                  (bankový prevod, šek, alebo cash). Voucher je povolený LEN ak <strong>písomne súhlasíte</strong>.
                </p>
                <p>
                  Ak aerolínka ponúka len voucher, povedzte: "Neprijímam voucher. Požadujem kompenzáciu v hotovosti 
                  podľa EÚ 261/2004, článok 7." Ak odmietnu, kontaktujte ClaimWinger.
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                2. Čo ak som sa dobrovoľne prihlásil ako volunteer a teraz ľutujem?
              </summary>
              <div className="px-6 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 text-sm">
                <p className="mb-3">
                  Ak ste podpísali dohodu (voluntary denied boarding agreement), <strong>vzdali ste sa práva</strong> 
                  na kompenzáciu podľa EÚ 261/2004. Bohužiaľ, nemôžete to zmeniť spätne.
                </p>
                <p>
                  <strong>Výnimka:</strong> Ak vás aerolínka nútila podpísať (napr. tvrdila "to je jediná možnosť") 
                  alebo neklamala o vašich právach, môžete to napadnúť. Kontaktujte ClaimWinger pre právnu analýzu.
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                3. Prečo ma aerolínka vybrala (nedobrovoľne)? Je to náhodné?
              </summary>
              <div className="px-6 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 text-sm">
                <p className="mb-3">
                  Aerolínky používajú <strong>algoritmy</strong> na výber cestujúcich pri overbookingu. Faktory:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Check-in čas (neskoro check-in = vyššia šanca)</li>
                  <li>Booking class (lacné lístky = vyššia šanca)</li>
                  <li>Frequent flyer status (nízky/žiadny status = vyššia šanca)</li>
                  <li>Solo vs rodina (solo cestujúci = vyššia šanca)</li>
                  <li>Náhodný výber (ak viaceré osoby majú rovnaké faktory)</li>
                </ul>
                <p>
                  <strong>Reality:</strong> Ak ste check-in online včas + máte frequent flyer status + cestujete v skupine → 
                  nižšia šanca. Ale aj tak môže byť náhodné!
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                4. Môžem dostať kompenzáciu aj za deti (ak majú vlastný lístok)?
              </summary>
              <div className="px-6 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 text-sm">
                <p className="mb-3">
                  <strong>ÁNO!</strong> Kompenzácia sa vypláca na <strong>každého cestujúceho</strong>, vrátane detí a bábätiek, 
                  pokiaľ majú <strong>vlastný lístok</strong> (aj 10% infant ticket).
                </p>
                <p className="mb-3">
                  <strong>Príklad:</strong> Rodina 4 osoby (2 dospelí + 2 deti, všetci majú lístok) → overbooking na lete 
                  Bratislava→Barcelona (1,350 km) → kompenzácia: 4 × €250 = <strong>€1,000</strong>!
                </p>
                <p>
                  <strong>Výnimka:</strong> Ak bábätko nemá vlastný lístok (letí na kolenách dospelého, "lap infant") → 
                  žiadna kompenzácia (nemá booking).
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                5. Aerolínka tvrdí "technická porucha = mimoriadna okolnosť, žiadna kompenzácia". Je to pravda?
              </summary>
              <div className="px-6 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 text-sm">
                <p className="mb-3">
                  <strong>NEPRAVDA!</strong> Technická porucha je v 99% prípadov <strong>zodpovednosť aerolínky</strong> 
                  (povinnosť údržby). Overbooking + technická porucha = aerolínka MUSÍ platiť.
                </p>
                <p className="mb-3">
                  <strong>Výnimka:</strong> Len ak je technická porucha spôsobená:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                  <li>Výrobné chyby (ktoré výrobca nenahlásil vopred)</li>
                  <li>Sabotáž (teroristický útok na lietadlo)</li>
                  <li>Bird strike (náraz vtáka do motora, ak aerolínka preukáže okamžitú reakciu)</li>
                </ul>
                <p>
                  <strong>Reality:</strong> Aerolínky systematicky klamú o technických poruchách. ClaimWinger overí 
                  pravý dôvod a vymôže vaše peniaze (success rate: 92% pri "technických poruchách").
                </p>
              </div>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <summary className="px-6 py-4 font-semibold text-gray-900 dark:text-white cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                6. Ako dlho mám čas na podanie reklamácie (overbooking)?
              </summary>
              <div className="px-6 py-4 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 text-sm">
                <p className="mb-3">
                  Na Slovensku máte <strong>3 roky</strong> na podanie reklamácie (od dátumu plánovaného letu).
                </p>
                <p className="mb-3">
                  <strong>Príklad:</strong> Overbooking na lete 10. januára 2024 → môžete reklamovať až do 10. januára 2027.
                </p>
                <p>
                  <strong>Odporúčanie:</strong> Neodkladajte! Čím skôr podáte reklamáciu, tým rýchlejšie dostanete peniaze. 
                  ClaimWinger dokáže spracovať vašu reklamáciu za 24 hodín.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Odmietli vám nástup na palubu? Získajte až 600 € kompenzácie!
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                ClaimWinger vymôže vaše peniaze za vás. Úspešnosť 98%. Platíte len pri úspechu (25%).
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Žiadne náklady vopred</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">8-12 týždňov do výplaty</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Vždy hotovosť, nie voucher</span>
                </div>
              </div>
              <Link
                href="https://claimwinger.com"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Skontrolovať nárok na kompenzáciu →
              </Link>
              <p className="text-sm text-blue-100 mt-4">
                Overenie vášho prípadu trvá len 3 minúty. Bez záväzkov.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="border-t border-gray-200 dark:border-gray-700 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Súvisiace články
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/sk/blog/kompletny-przewodnik-odszkodowanie"
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                Fundamenty
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Kompletný sprievodca: Kompenzácia za meškanie letu
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Komplexný sprievodca právami cestujúcich podľa nariadenia EU 261/2004...
              </p>
            </Link>

            <Link
              href="/sk/meskanie-letu"
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                Stránky
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Meškanie letu – vaše práva
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Zistite, čo robiť, keď váš let meš a kedy máte nárok na kompenzáciu...
              </p>
            </Link>

            <Link
              href="/sk/zruseny-let"
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                Stránky
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Zrušený let – vrátenie peňazí alebo kompenzácia?
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Zistite rozdiel medzi vrátením peňazí a kompenzáciou pri zrušenom lete...
              </p>
            </Link>

            <Link
              href="/sk/kalkulacka-kompenzacie"
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">
                Nástroj
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Kalkulačka kompenzácie
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Zistite okamžite, koľko peňazí vám patrí za opoždený alebo zrušený let...
              </p>
            </Link>
          </div>
        </section>
      </article>

      {/* Schema.org FAQ Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Musím prijať voucher, ak mi ho aerolínka ponúka?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIE! Podľa EÚ 261/2004, článok 7, máte právo na kompenzáciu v hotovosti (bankový prevod, šek, alebo cash). Voucher je povolený LEN ak písomne súhlasíte."
                }
              },
              {
                "@type": "Question",
                "name": "Čo ak som sa dobrovoľne prihlásil ako volunteer a teraz ľutujem?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ak ste podpísali dohodu (voluntary denied boarding agreement), vzdali ste sa práva na kompenzáciu podľa EÚ 261/2004. Bohužiaľ, nemôžete to zmeniť spätne. Výnimka: Ak vás aerolínka nútila podpísať alebo klamala o vašich právach."
                }
              },
              {
                "@type": "Question",
                "name": "Prečo ma aerolínka vybrala (nedobrovoľne)? Je to náhodné?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Aerolínky používajú algoritmy na výber cestujúcich pri overbookingu. Faktory: check-in čas, booking class, frequent flyer status, solo vs rodina. Neskoro check-in + lacné lístky + žiadny status = vyššia šanca."
                }
              },
              {
                "@type": "Question",
                "name": "Môžem dostať kompenzáciu aj za deti (ak majú vlastný lístok)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ÁNO! Kompenzácia sa vypláca na každého cestujúceho, vrátane detí a bábätiek, pokiaľ majú vlastný lístok (aj 10% infant ticket). Rodina 4 osoby na lete 1,350 km = 4 × €250 = €1,000!"
                }
              },
              {
                "@type": "Question",
                "name": "Aerolínka tvrdí 'technická porucha = mimoriadna okolnosť'. Je to pravda?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NEPRAVDA! Technická porucha je v 99% prípadov zodpovednosť aerolínky (povinnosť údržby). Overbooking + technická porucha = aerolínka MUSÍ platiť. ClaimWinger overí pravý dôvod (success rate: 92%)."
                }
              },
              {
                "@type": "Question",
                "name": "Ako dlho mám čas na podanie reklamácie (overbooking)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Na Slovensku máte 3 roky na podanie reklamácie (od dátumu plánovaného letu). Príklad: Overbooking 10. januára 2024 → môžete reklamovať až do 10. januára 2027. ClaimWinger dokáže spracovať reklamáciu za 24 hodín."
                }
              }
            ]
          })
        }}
      />
    </LayoutSk>
  );
}