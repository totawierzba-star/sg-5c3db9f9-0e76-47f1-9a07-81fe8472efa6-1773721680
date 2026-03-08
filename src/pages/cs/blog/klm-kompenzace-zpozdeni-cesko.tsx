import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, Euro, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function KLMKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="KLM kompenzace za zpoždění 2026 — až 600 € pro české cestující"
        description="Zjistěte, jak získat kompenzaci až 600 € od KLM Royal Dutch Airlines za zpožděný nebo zrušený let. Průvodce pro české pasažéry + template reklamace."
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
                "name": "Kolik zaplatí KLM za zpožděný let?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KLM vyplácí kompenzaci €250 za lety do 1500 km, €400 za lety 1500-3500 km a €600 za lety přes 3500 km při zpoždění ≥ 3 hodiny podle EU261."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dlouho trvá výplata od KLM?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "KLM obvykle vyplácí kompenzaci do 21-35 dnů od schválení nároku. Patří mezi aerolinie s vyšší mírou dobrovolných výplat (64%)."
                }
              },
              {
                "@type": "Question",
                "name": "Platí EU261 pro KLM lety z Amsterdamu do Prahy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano, KLM je nizozemská aerolinie spadající pod EU261 pro všechny lety z EU i do EU. Let Amsterdam-Praha je plně chráněn nařízením EU261."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-2">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="w-10 h-10 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              KLM Royal Dutch Airlines
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            KLM kompenzace za zpoždění — průvodce pro české cestující
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>13 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>KLM Royal Dutch Airlines zpožděla nebo zrušila váš let?</strong> Máte nárok na kompenzaci <strong>až 600 €</strong> podle nařízení EU 261/2004. KLM je jednou z nejspolehlivějších evropských aerolinií s 82% on-time performance, ale i tak dochází ke zpožděním a zrušením — a v těchto případech musí KLM vyplatit kompenzaci. V tomto komplexním průvodci se dozvíte, kdy máte nárok, jak správně reklamovat a jak přinutit KLM k výplatě i při odmítnutí.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 KLM odmítla kompenzaci nebo nereaguje?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vymáhá kompenzace od KLM Royal Dutch Airlines za vás — včetně složitých případů s přestupy přes Amsterdam Schiphol. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Získat kompenzaci od KLM
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Kdy máte nárok na kompenzaci od KLM?
          </h2>

          <p>
            Kompenzace od KLM vám přísluší, pokud jsou splněny <strong>všechny následující podmínky</strong>:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Zpoždění ≥ 3 hodiny při příchodu</strong>
                  <p className="text-gray-700 mt-2">
                    Měří se čas otevření dveří letadla na konečné destinaci, ne čas odletu. I pokud letadlo vzlétlo s 1h zpožděním, ale dorazilo s 4h zpožděním → <strong>PLATÍ kompenzace</strong>.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Let byl zrušen méně než 14 dní před odletem</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud KLM zrušila let více než 14 dní dopředu a nabídla alternativu, kompenzace NENÍ povinná (ale refundace letenky ano).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Odmítnutí nástupu (overbooking)</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud vám KLM odmítla boarding kvůli přeplněnému letu a nemohli jste dobrovolně souhlasit s přeřazením.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Nebyla mimořádná okolnost</strong>
                  <p className="text-gray-700 mt-2">
                    KLM musí prokázat, že zpoždění bylo způsobeno událostí mimo jejich kontrolu (bouře, stávka ATC, pandemie). Běžná technická závada NENÍ mimořádná okolnost.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <strong className="text-gray-900">Let byl z EU nebo do EU provozovaný EU aerolinií</strong>
                  <p className="text-gray-700 mt-2">
                    KLM je nizozemská aerolinie → EU261 platí pro všechny lety KLM z/do Evropy (včetně letů Amsterdam-Praha, Praha-New York přes AMS atd.).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8 rounded-r-lg">
            <p className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              Příklad nárokového případu:
            </p>
            <div className="text-gray-700 space-y-2">
              <p>• Let KLM KL1357 z Amsterdamu (AMS) do Prahy (PRG), plánovaný odlet 14:20</p>
              <p>• Odlet zpožděn na 17:45 kvůli "technické závadě"</p>
              <p>• Přílet do Prahy: plánovaný 15:55, skutečný <strong>19:15</strong> → zpoždění <strong>3h 20min</strong></p>
              <p className="font-semibold text-green-700">→ Nárok na €250 kompenzaci (vzdálenost AMS-PRG {"<"} 1500 km)</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Euro className="w-8 h-8 text-blue-600" />
            Výše kompenzace od KLM — tabulka 2026
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Vzdálenost letu</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Zpoždění ≥ 3h</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Příklady tras KLM</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Do 1 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€250</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Amsterdam → Praha, Amsterdam → Berlín</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">1 500 – 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€400</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Praha → Tel Aviv (via AMS), Amsterdam → Istanbul</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Přes 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Praha → New York (via AMS), Amsterdam → Tokyo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            *Vzdálenost se měří great-circle distance mezi počátečním a konečným letištěm, ne mezi mezizastávkami.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            KLM vs. ostatní aerolinie — statistika plateb
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Aerolinie</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">% dobrovolných výplat</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Průměrný čas výplaty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 font-semibold">KLM Royal Dutch Airlines</td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-bold">64 %</span>
                  </td>
                  <td className="px-6 py-4">28 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Air France (sesterská společnost)</td>
                  <td className="px-6 py-4">62 %</td>
                  <td className="px-6 py-4">30 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Lufthansa</td>
                  <td className="px-6 py-4">68 %</td>
                  <td className="px-6 py-4">28 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Ryanair</td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-bold">12 %</span>
                  </td>
                  <td className="px-6 py-4">180+ dnů (po eskalaci)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Wizz Air</td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-bold">18 %</span>
                  </td>
                  <td className="px-6 py-4">120+ dnů (po eskalaci)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. KLM má výrazně vyšší míru dobrovolných výplat než low-cost aerolinie.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak reklamovat kompenzaci u KLM — krok za krokem
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">1</span>
            Shromážděte důkazy IHNED po letu
          </h3>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600" />
              Checklist důkazů:
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Palubní vstupenka (boarding pass) — fyzická nebo elektronická</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>E-mail s potvrzením rezervace (booking confirmation + PNR číslo)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Důkaz o zpoždění — FlightRadar24 screenshot nebo letištní tabule foto</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Pokud bylo zrušení: e-mail od KLM s oznámením zrušení</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Pokud jste dostali péči (hotel, jídlo): účtenky (lze dodatečně požadovat náhradu)</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">2</span>
            Podejte reklamaci u KLM
          </h3>

          <p className="mb-4">
            KLM má online formulář a e-mailový kontakt. Doporučujeme <strong>e-mail</strong> (máte písemný důkaz doručení):
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap font-mono">
{`Předmět: Reklamace — zpoždění/zrušení letu KL[ČÍSLO], požadavek na kompenzaci €[ČÁSTKA]

Vážená společnost KLM Royal Dutch Airlines,

dne [DATUM] jsem letěl/a letem KL[ČÍSLO] z [ODKUD] do [KAM], který měl zpoždění [X] hodin / byl zrušen.

Podrobnosti letu:
• Číslo letu: KL[ČÍSLO]
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

          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <p className="font-semibold text-gray-900 mb-3">
              📧 Kontakt KLM Customer Care:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>E-mail: <strong className="text-gray-900">customer.care@klm.com</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Online formulář: <a href="https://www.klm.com/travel/cz_cs/customer_support/contact_us.htm" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">klm.com → Contact Us</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Poštovní adresa: KLM Royal Dutch Airlines, P.O. Box 7700, 1117 ZL Schiphol, Netherlands</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">3</span>
            KLM odpoví (obvykle 10-28 dnů)
          </h3>

          <p className="mb-4">
            KLM má lepší response time než low-cost aerolinie. Možné scénáře:
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Scénář A: Kompenzace schválena (64 % případů)
              </p>
              <p className="text-gray-700">
                KLM vyplatí kompenzaci bankovním převodem obvykle do 28 dnů od schválení. Gratulujeme!
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Scénář B: Odmítnuto kvůli "mimořádné okolnosti" (26 % případů)
              </p>
              <p className="text-gray-700">
                KLM tvrdí, že zpoždění bylo způsobeno bouří, stávkou ATC nebo technickou závadou. → Pokračujte krokem 4.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                Scénář C: Nabídka voucheru místo hotovosti (10 % případů)
              </p>
              <p className="text-gray-700">
                KLM nabídne "gesto dobré vůle" ve formě travel voucheru €150-300. → Odmítněte a požadujte hotovost podle EU261.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">4</span>
            Odvolání nebo eskalace na ÚCL
          </h3>

          <p className="mb-4">
            Pokud KLM odmítla kompenzaci, máte 2 možnosti:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">
              📋 Možnost 1: Odvolání přímo u KLM
            </p>
            <p className="text-gray-700 mb-4">
              Pošlete druhý e-mail s právními argumenty. Template:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap font-mono">
{`Předmět: Odvolání proti zamítnutí — reklamace [VAŠE ČÍSLO]

Vážená společnost KLM,

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

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">
              🏛️ Možnost 2: Stížnost na ÚCL (Úřad pro civilní letectví)
            </p>
            <ol className="list-decimal ml-6 mt-3 text-gray-700 space-y-2">
              <li>Navštivte: <a href="https://www.caa.cz/stiznosti-a-podani/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.caa.cz/stiznosti-a-podani</a></li>
              <li>Klikněte "Práva cestujících" → "Podat stížnost online"</li>
              <li>Vyplňte formulář + nahrajte korespondenci s KLM</li>
              <li>ÚCL kontaktuje KLM a vyžádá důkazy (30 dnů)</li>
              <li>Pokud ÚCL rozhodne ve váš prospěch, KLM obvykle vyplácí do 30 dnů</li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 KLM odmítla kompenzaci nebo nereaguje?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s tisíci případů KLM Royal Dutch Airlines a zná všechny jejich argumenty. Vymůžeme kompenzaci za vás — platíte jen při úspěchu (obvykle 25-30 % provize).
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zruseny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat kompenzaci bez starostí
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté triky KLM při odmítání kompenzací
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Trik 1: "ATC delay způsobil zpoždění"
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>KLM argument:</strong> <em>"Let byl zpožděn kvůli omezením řízení letového provozu (ATC), což je mimo naši kontrolu."</em>
              </p>
              <p className="text-gray-700">
                <strong>Counter-argument:</strong> Požadujte konkrétní EUROCONTROL network delay číslo. Pokud KLM neposkytne, je to jen obecná výmluva. Navíc, pokud jen jejich let měl zpoždění (ne všechny lety na trase), není to mimořádná okolnost.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Trik 2: "Pozdní přílet předchozího letadla"
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>KLM argument:</strong> <em>"Letadlo dorazilo později z předchozího letu, což způsobilo rotační zpoždění."</em>
              </p>
              <p className="text-gray-700">
                <strong>Counter-argument:</strong> Podle rozsudku ESD C-294/10 (Eglītis and Ratnieks), rotační zpoždění NENÍ mimořádná okolnost, pokud původní zpoždění nebylo způsobeno mimořádnou okolností. KLM musí prokázat, že první let měl např. bouři — jinak platí kompenzace.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Trik 3: "Nabízíme voucher jako gesto dobré vůle"
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>KLM argument:</strong> <em>"Nemáte nárok na kompenzaci, ale nabízíme vám €200 voucher."</em>
              </p>
              <p className="text-gray-700">
                <strong>Counter-argument:</strong> Podle čl. 7(3) EU261 máte právo na HOTOVOST. Voucher může být nabídnut pouze jako <strong>alternativa</strong>, ne jako jediná možnost. Pokud KLM tvrdí "voucher nebo nic", porušuje unijní právo.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            KLM a zmeškaný přestup v Amsterdamu (Schiphol)
          </h2>

          <p>
            Amsterdam Schiphol (AMS) je hub KLM s denně 1000+ lety. Pokud jste zmeškali navazující let kvůli zpoždění prvního letu, máte nárok na kompenzaci, pokud:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Jednotná rezervace (single booking):</strong> Oba lety byly na jednom PNR čísle</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>MCT dodržen:</strong> Minimální přestupní čas byl dostatečný (Schiphol: obvykle 50 min Schengen, 70 min non-Schengen)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Zpoždění na konečné destinaci ≥ 3h:</strong> Měří se čas příchodu na finální destinaci, ne na mezizastávce</span>
              </li>
            </ul>
          </div>

          <p className="mt-4">
            <strong>Příklad:</strong> Let Praha → Amsterdam (KL zpožděn o 1h) + Amsterdam → New York (zmeškaný) → KLM vás přerezervuje na další spoj s odletem +6h → dorazíte do NYC s 5h zpožděním → <strong>Nárok na €600</strong> (vzdálenost PRG-JFK {">"} 3500 km).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí EU261 pro KLM lety mimo Evropu (např. Amsterdam → Bangkok)?
              </h3>
              <p className="text-gray-700">
                ANO, pokud let vychází z EU letiště. KLM je nizozemská aerolinie → EU261 platí pro všechny lety KLM z Evropy. Ale pokud letíte Bangkok → Amsterdam a KLM zpožděla, kompenzace NEPLATÍ (jen pokud jste měli pokračující let z Amsterdamu dál do EU).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                KLM nabídla upgrade do business class místo kompenzace — mám přijmout?
              </h3>
              <p className="text-gray-700">
                NE, pokud chcete peníze. Upgrade je "gesto dobré vůle", ale NENAHRAZUJE zákonnou kompenzaci. Můžete upgrade přijmout a ZÁROVEŇ požadovat €250-600 v hotovosti. Jsou to dva nezávislé nároky.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času mám na podání reklamace u KLM?
              </h3>
              <p className="text-gray-700">
                V České republice: <strong>3 roky</strong> od data letu (prekluzivní lhůta dle občanského zákoníku). V Nizozemsku: 2 roky. Pokud jste český občan a let vycházel z ČR, platí česká 3letá lhůta.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                KLM poskytla hotel a jídlo — zmenšuje to kompenzaci?
              </h3>
              <p className="text-gray-700">
                NE. Péče (care) podle čl. 9 EU261 (hotel, jídlo, transport) je <strong>oddělená od kompenzace</strong> podle čl. 7. I když vás KLM ubytovala v 5* hotelu, stále máte nárok na plnou kompenzaci €250-600.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Koupil jsem letenku přes agenturu (Kiwi, Booking) — kde reklamovat?
              </h3>
              <p className="text-gray-700">
                Kompenzaci VŽDY vyplácí aerolinie (KLM), ne agentura. Agentury slouží jen jako zprostředkovatel. Vaše reklamace musí jít přímo na KLM — agenturu ignorujte (můžete jen požádat o PNR číslo, pokud ho nemáte).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na složitosti případu. KLM má dobrou míru dobrovolných výplat (64 %), takže pokud máte jednoduchý případ (jasné 4h zpoždění, žádná mimořádná okolnost), můžete zkusit reklamovat sami a dostat 100 %. Pokud KLM odmítne nebo máte složitý případ (connecting flight, technická závada), <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger je bezpečná volba</Link> (dostanete 70-75 % za 4-8 týdnů vs. 12-18 měsíců při samostatném vymáhání přes ÚCL/soud).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: KLM patří mezi fair aerolinie, ale práva musíte znát
          </h2>

          <p>
            KLM Royal Dutch Airlines má lepší track record než low-cost aerolinie v platbě kompenzací, ale i tak dochází k odmítnutím — zejména při technických závadách nebo rotačních zpožděních.
          </p>

          <p className="mt-4">
            <strong>Klíčové body:</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Máte nárok na <strong>€250-600</strong> podle vzdálenosti letu při zpoždění ≥ 3h</li>
            <li>KLM má povinnost vyplatit do 7 dnů, obvykle platí do 28 dnů</li>
            <li>Pokud KLM odmítne, požadujte konkrétní důkazy o mimořádné okolnosti</li>
            <li>NIKDY nepřijímejte voucher jako náhradu za hotovostní kompenzaci</li>
            <li>Máte 3 roky na podání reklamace (české právo)</li>
          </ul>

          <p className="mt-6 text-lg font-semibold text-gray-900">
            KLM je spolehlivá aerolinie, ale i spolehlivé aerolinie musí respektovat EU261. Pokud máte nárok, nenechte se odradit prvním odmítnutím.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Připraveni získat kompenzaci od KLM?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud (pokud potřeba). Specializujeme se na Air France-KLM Group a víme, jak argumentovat. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Začít vymáhat kompenzaci hned
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}