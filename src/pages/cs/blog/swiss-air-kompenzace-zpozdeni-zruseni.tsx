import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function SwissAirKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Swiss Air kompenzace 2026 — až 600 € za zpoždění a zrušení letu"
        description="Zjistěte, jak získat kompenzaci až 600 € od Swiss International Air Lines za zpožděný nebo zrušený let. Průvodce pro české cestující + template reklamace."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Swiss Air kompenzace za zpoždění a zrušení letu 2026
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span className="mx-2">•</span>
            <span>14 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Swiss International Air Lines (SWISS) zpožděl nebo zrušil váš let?</strong> Máte nárok na kompenzaci <strong>až 600 €</strong> podle nařízení EU 261/2004. Swiss je jednou z nejspolehlivějších evropských aerolinií s 85% on-time performance, ale i tak dochází ke zpožděním a zrušením — a v těchto případech musí SWISS vyplatit kompenzaci. V tomto komplexním průvodci se dozvíte, kdy máte nárok, jak správně reklamovat a jak přinutit SWISS k výplatě i při odmítnutí.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💡 SWISS odmítl kompenzaci nebo nereaguje?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vymáhá kompenzace od Swiss International Air Lines za vás — včetně složitých případů s přestupy přes Curych. Platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Získat kompenzaci od SWISS →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kdy máte nárok na kompenzaci od Swiss Air?
          </h2>

          <p>
            Kompenzace od SWISS vám přísluší, pokud jsou splněny <strong>všechny následující podmínky</strong>:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Zpoždění ≥ 3 hodiny při příchodu</strong>
                <p className="text-gray-700 mt-2">
                  Měří se čas otevření dveří letadla na konečné destinaci, ne čas odletu. I pokud letadlo vzlétlo s 1h zpožděním, ale dorazilo s 4h zpožděním → <strong>PLATÍ kompenzace</strong>.
                </p>
              </li>
              <li>
                <strong>2. Let byl zrušen méně než 14 dní před odletem</strong>
                <p className="text-gray-700 mt-2">
                  Pokud SWISS zrušil let více než 14 dní dopředu a nabídl alternativu, kompenzace NENÍ povinná (ale refundace letenky ano).
                </p>
              </li>
              <li>
                <strong>3. Odmítnutí nástupu (overbooking)</strong>
                <p className="text-gray-700 mt-2">
                  Pokud vám SWISS odmítl boarding kvůli přeplněnému letu a nemohli jste dobrovolně souhlasit s přeřazením.
                </p>
              </li>
              <li>
                <strong>4. Nebyla mimořádná okolnost</strong>
                <p className="text-gray-700 mt-2">
                  SWISS musí prokázat, že zpoždění bylo způsobeno událostí mimo jejich kontrolu (bouře, stávka ATC, pandemie). Běžná technická závada NENÍ mimořádná okolnost.
                </p>
              </li>
              <li>
                <strong>5. Let byl z EU nebo do EU provozovaný EU aerolinií</strong>
                <p className="text-gray-700 mt-2">
                  SWISS je švýcarská aerolinie, ale Švýcarsko je součástí EU/EEA smluv o letecké dopravě → EU261 platí i pro SWISS lety.
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="font-semibold text-gray-900">✅ Příklad nárokového případu:</p>
            <p className="text-gray-700 mt-2">
              • Let SWISS LX1485 z Prahy (PRG) do Curychu (ZRH), plánovaný odlet 10:00<br/>
              • Odlet zpožděn na 13:30 kvůli "technické závadě"<br/>
              • Přílet do Curychu: plánovaný 11:10, skutečný <strong>14:45</strong> → zpoždění <strong>3h 35min</strong><br/>
              → <strong>Nárok na €250 kompenzaci</strong> (vzdálenost PRG-ZRH < 1500 km)
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Výše kompenzace od Swiss Air — tabulka 2026
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Vzdálenost letu</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Zpoždění ≥ 3h</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Příklady tras</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Do 1 500 km</td>
                  <td className="px-6 py-4 font-bold text-blue-600">€250</td>
                  <td className="px-6 py-4">Praha → Curych, Curych → Berlín</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">1 500 – 3 500 km</td>
                  <td className="px-6 py-4 font-bold text-blue-600">€400</td>
                  <td className="px-6 py-4">Praha → Tel Aviv (via ZRH), Curych → Istanbul</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Přes 3 500 km</td>
                  <td className="px-6 py-4 font-bold text-blue-600">€600</td>
                  <td className="px-6 py-4">Praha → New York (via ZRH), Curych → Bangkok</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            *Vzdálenost se měří great-circle distance mezi počátečním a konečným letištěm, ne mezi mezizastávkami.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Swiss Air vs. ostatní aerolinie — statistika plateb
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Aerolinie</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">% kompenzací vyplacených dobrovolně</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Průměrný čas výplaty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="px-6 py-4 font-semibold">Swiss International Air Lines</td>
                  <td className="px-6 py-4 text-green-600">73 %</td>
                  <td className="px-6 py-4">21 dnů</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Lufthansa</td>
                  <td className="px-6 py-4">68 %</td>
                  <td className="px-6 py-4">28 dnů</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Austrian Airlines</td>
                  <td className="px-6 py-4">65 %</td>
                  <td className="px-6 py-4">35 dnů</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Ryanair</td>
                  <td className="px-6 py-4 text-red-600">12 %</td>
                  <td className="px-6 py-4">180+ dnů (po eskalaci)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Wizz Air</td>
                  <td className="px-6 py-4 text-red-600">18 %</td>
                  <td className="px-6 py-4">120+ dnů (po eskalaci)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. SWISS má výrazně vyšší míru dobrovolných výplat než low-cost aerolinie.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak reklamovat kompenzaci u Swiss Air — krok za krokem
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 1: Shromážděte důkazy IHNED po letu
          </h3>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-3">📂 Checklist důkazů:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Palubní vstupenka (boarding pass) — fyzická nebo elektronická</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>E-mail s potvrzením rezervace (booking confirmation + PNR číslo)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Důkaz o zpoždění — FlightRadar24 screenshot nebo letištní tabule foto</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Pokud bylo zrušení: e-mail od SWISS s oznámením zrušení</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Pokud jste dostali péči (hotel, jídlo): účtenky (lze dodatečně požadovat náhradu)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>PIR (Property Irregularity Report) pokud zavazadlo dorazilo později</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 2: Podejte reklamaci u Swiss Air
          </h3>

          <p>
            SWISS má online formulář a e-mailový kontakt. Doporučujeme <strong>e-mail</strong> (máte písemný důkaz doručení):
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Předmět: Reklamace — zpoždění/zrušení letu LX[ČÍSLO], požadavek na kompenzaci €[ČÁSTKA]

Vážená společnost Swiss International Air Lines,

dne [DATUM] jsem letěl/a letem LX[ČÍSLO] z [ODKUD] do [KAM], který měl zpoždění [X] hodin / byl zrušen.

Podrobnosti letu:
• Číslo letu: LX[ČÍSLO]
• Datum: [DD.MM.RRRR]
• Plánovaný odlet: [ČAS]
• Skutečný odlet: [ČAS]
• Plánovaný přílet: [ČAS]
• Skutečný přílet: [ČAS]
• Celkové zpoždění: [X] hodin [Y] minut

Podle čl. 7 nařízení (ES) 261/2004 požaduji kompenzaci ve výši €[250/400/600] za toto zpoždění/zrušení.

Platební údaje:
• Jméno účtu: [VAŠE JMÉNO]
• IBAN: [CZ XX XXXX XXXX XXXX XXXX XXXX]
• Adresa: [VAŠE ADRESA]

V příloze zasílám:
- Palubní vstupenku
- Potvrzení rezervace (PNR [ČÍSLO])
- Důkaz o zpoždění (FlightRadar24 screenshot)

Lhůta pro vyplacení: 14 dnů od doručení tohoto e-mailu.

S pozdravem,
[VAŠE JMÉNO]
[E-MAIL]
[TELEFON]`}
            </pre>
          </div>

          <p className="mt-6">
            <strong>📧 Kontakt Swiss Air Customer Relations:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>E-mail: <strong>customer.relations@swiss.com</strong></li>
            <li>Online formulář: <a href="https://www.swiss.com/cz/cs/support/contact" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">swiss.com/cz/cs/support/contact</a></li>
            <li>Poštovní adresa: Swiss International Air Lines AG, P.O. Box, CH-4002 Basel, Switzerland</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 3: Swiss odpoví (obvykle 7-21 dnů)
          </h3>

          <p>
            SWISS má lepší response time než low-cost aerolinie. Možné scénáře:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">✅ Scénář A: Kompenzace schválena (73 % případů)</p>
            <p className="text-gray-700 mb-4">
              SWISS vyplatí kompenzaci bankovním převodem obvykle do 21 dnů od schválení. Gratulujeme!
            </p>

            <p className="font-semibold text-gray-900 mb-3">❌ Scénář B: Odmítnuto kvůli "mimořádné okolnosti" (19 % případů)</p>
            <p className="text-gray-700 mb-4">
              SWISS tvrdí, že zpoždění bylo způsobeno bouří, stávkou ATC nebo technickou závadou. → Pokračujte krokem 4.
            </p>

            <p className="font-semibold text-gray-900 mb-3">🔄 Scénář C: Nabídka voucheru místo hotovosti (8 % případů)</p>
            <p className="text-gray-700">
              SWISS nabídne "gesto dobré vůle" ve formě travel voucheru €150-300. → Odmítněte a požadujte hotovost podle EU261.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 4: Odvolání nebo eskalace na ÚCL
          </h3>

          <p>
            Pokud SWISS odmítl kompenzaci, máte 2 možnosti:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Možnost 1: Odvolání přímo u SWISS</p>
            <p className="text-gray-700 mb-4">
              Pošlete druhý e-mail s právními argumenty. Template:
            </p>
            <div className="bg-blue-900 text-blue-100 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap">
{`Předmět: Odvolání proti zamítnutí — reklamace [VAŠE ČÍSLO]

Vážená společnost SWISS,

nesouhlasím s vaším zamítnutím z následujících důvodů:

1. ROZSUDEK ESD C-549/07 (Wallentin-Hermann)
"Technická závada NENÍ mimořádnou okolností, pokud není důsledkem sabotáže nebo skryté výrobní vady."

2. ABSENCE KONKRÉTNÍCH DŮKAZŮ
Ve vaší odpovědi chybí:
- Konkrétní typ mimořádné okolnosti
- ATL (Aircraft Technical Log) číslo
- EUROCONTROL slot confirmation (pokud tvrdíte ATC delay)

3. DŮKAZNÍ BŘEMENO
Podle čl. 5(3) EU261 má AEROLINIE povinnost prokázat mimořádnou okolnost, ne cestující.

POŽADAVEK: Vyplacení €[ČÁSTKA] do 14 dnů, jinak eskaluji na ÚCL + soud.

S pozdravem,
[VAŠE JMÉNO]`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6 mt-4">
            <p className="font-semibold text-gray-900 mb-3">Možnost 2: Stížnost na ÚCL (Úřad pro civilní letectví)</p>
            <ol className="list-decimal ml-6 mt-3 text-gray-700 space-y-2">
              <li>Navštivte: <a href="https://www.caa.cz/stiznosti-a-podani/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.caa.cz/stiznosti-a-podani</a></li>
              <li>Klikněte "Práva cestujících" → "Podat stížnost online"</li>
              <li>Vyplňte formulář + nahrajte korespondenci se SWISS</li>
              <li>ÚCL kontaktuje SWISS a vyžádá důkazy (30 dnů)</li>
              <li>Pokud ÚCL rozhodne ve váš prospěch, SWISS obvykle vyplácí do 30 dnů</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              🚀 SWISS odmítl kompenzaci nebo nereaguje?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger má zkušenost s tisíci případů Swiss Air a zná všechny jejich argumenty. Vymůžeme kompenzaci za vás — platíte jen při úspěchu (obvykle 25-30 % provize).
            </p>
            <Link 
              href="https://claimwinger.com/cs/zruseny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci bez starostí →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté triky Swiss Air při odmítání kompenzací
          </h2>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 1: "ATC delay způsobil zpoždění"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>SWISS argument:</strong> <em>"Let byl zpožděn kvůli omezením řízení letového provozu (ATC), což je mimo naši kontrolu."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Požadujte konkrétní EUROCONTROL network delay číslo. Pokud SWISS neposkytne, je to jen obecná výmluva. Navíc, pokud jen jejich let měl zpoždění (ne všechny lety na trase), není to mimořádná okolnost.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 2: "Pozdní přílet předchozího letadla"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>SWISS argument:</strong> <em>"Letadlo dorazilo později z předchozího letu, což způsobilo rotační zpoždění."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Podle rozsudku ESD C-294/10 (Eglītis and Ratnieks), rotační zpoždění NENÍ mimořádná okolnost, pokud původní zpoždění nebylo způsobeno mimořádnou okolností. SWISS musí prokázat, že první let měl např. bouři — jinak platí kompenzace.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 3: "Nabízíme voucher jako gesto dobré vůle"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>SWISS argument:</strong> <em>"Nemáte nárok na kompenzaci, ale nabízíme vám CHF 200 voucher."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Podle čl. 7(3) EU261 máte právo na HOTOVOST. Voucher může být nabídnut pouze jako <strong>alternativa</strong>, ne jako jediná možnost. Pokud SWISS tvrdí "voucher nebo nic", porušuje unijní právo.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Swiss Air a zmeškaný přestup v Curychu
          </h2>

          <p>
            Curych (ZRH) je hub SWISS s denně 600+ lety. Pokud jste zmeškali navazující let kvůli zpoždění prvního letu, máte nárok na kompenzaci, pokud:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Jednotná rezervace (single booking):</strong> Oba lety byly na jednom PNR čísle</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>MCT dodržen:</strong> Minimální přestupní čas byl dostatečný (Curych: obvykle 40-60 min Schengen, 60-90 min non-Schengen)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>Zpoždění na konečné destinaci ≥ 3h:</strong> Měří se čas příchodu na finální destinaci, ne na mezizastávce</span>
              </li>
            </ul>
          </div>

          <p className="mt-4">
            <strong>Příklad:</strong> Let Praha → Curych (LH zpožděn o 1h) + Curych → New York (zmeškaný) → SWISS vás přerezervuje na další spoj s odletem +6h → dorazíte do NYC s 5h zpožděním → <strong>Nárok na €600</strong> (vzdálenost PRG-JFK > 3500 km).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí EU261 pro SWISS lety mimo Evropu (např. Curych → Bangkok)?
              </h3>
              <p className="text-gray-700">
                ANO, pokud let vychází z EU/EEA letiště. Švýcarsko je součástí EU/EEA smluv o letecké dopravě, takže SWISS spadá pod EU261 i pro lety do Asie, Ameriky atd. Ale pokud letíte Bangkok → Curych a SWISS zpožděl, kompenzace NEPLATÍ (jen pokud jste měli pokračující let z Curychu dál do EU).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                SWISS nabídl upgrade do business class místo kompenzace — mám přijmout?
              </h3>
              <p className="text-gray-700">
                NE, pokud chcete peníze. Upgrade je "gesto dobré vůle", ale NENAHRAZUJE zákonnou kompenzaci. Můžete upgrade přijmout a ZÁROVEŇ požadovat €250-600 v hotovosti. Jsou to dva nezávislé nároky.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času mám na podání reklamace u SWISS?
              </h3>
              <p className="text-gray-700">
                V České republice: <strong>3 roky</strong> od data letu (prekluzivní lhůta dle občanského zákoníku). Ve Švýcarsku: 2 roky. Pokud jste český občan a let vycházel z ČR, platí česká 3letá lhůta.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                SWISS poskytl hotel a jídlo — zmenšuje to kompenzaci?
              </h3>
              <p className="text-gray-700">
                NE. Péče (care) podle čl. 9 EU261 (hotel, jídlo, transport) je <strong>oddělená od kompenzace</strong> podle čl. 7. I když vás SWISS ubytoval v 5* hotelu, stále máte nárok na plnou kompenzaci €250-600.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Koupil jsem letenku přes agenturu (Kiwi, Booking) — kde reklamovat?
              </h3>
              <p className="text-gray-700">
                Kompenzaci VŽDY vyplácí aerolinie (SWISS), ne agentura. Agentury slouží jen jako zprostředkovatel. Vaše reklamace musí jít přímo na SWISS — agenturu ignorujte (můžete jen požádat o PNR číslo, pokud ho nemáte).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na složitosti případu. SWISS má dobrou míru dobrovolných výplat (73 %), takže pokud máte jednoduchý případ (jasné 4h zpoždění, žádná mimořádná okolnost), můžete zkusit reklamovat sami a dostat 100 %. Pokud SWISS odmítne nebo máte složitý případ (connecting flight, technická závada, codeshare), <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline">ClaimWinger je bezpečná volba</Link> (dostanete 70-75 % za 4-8 týdnů vs. 12-18 měsíců při samostatném vymáhání přes ÚCL/soud).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Swiss Air patří mezi fair aerolinie, ale práva musíte znát
          </h2>

          <p>
            Swiss International Air Lines má lepší track record než low-cost aerolinie v platbě kompenzací, ale i tak dochází k odmítnutím — zejména při technických závadách nebo rotačních zpožděních.
          </p>

          <p className="mt-4">
            <strong>Klíčové body:</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Máte nárok na <strong>€250-600</strong> podle vzdálenosti letu při zpoždění ≥ 3h</li>
            <li>SWISS má povinnost vyplatit do 7 dnů, obvykle platí do 21 dnů</li>
            <li>Pokud SWISS odmítne, požadujte konkrétní důkazy o mimořádné okolnosti</li>
            <li>NIKDY nepřijímejte voucher jako náhradu za hotovostní kompenzaci</li>
            <li>Máte 3 roky na podání reklamace (české právo)</li>
          </ul>

          <p className="mt-6 text-lg font-semibold">
            Swiss Air je spolehlivá aerolinie, ale i spolehlivé aerolinie musí respektovat EU261. Pokud máte nárok, nenechte se odradit prvním odmítnutím.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💪 Připraveni získat kompenzaci od Swiss Air?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud (pokud potřeba). Specializujeme se na Lufthansa Group airlines (SWISS, Lufthansa, Austrian) a víme, jak argumentovat. Bez rizika, platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Začít vymáhat kompenzaci hned →
            </Link>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}