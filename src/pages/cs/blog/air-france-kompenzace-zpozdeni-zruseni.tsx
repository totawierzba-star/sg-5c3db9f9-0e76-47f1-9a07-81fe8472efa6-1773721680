import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, Euro, AlertCircle, CheckCircle, ArrowRight, Users } from "lucide-react";

export default function AirFranceKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Air France kompenzace 2026 — až 600 € za zpoždění a zrušení"
        description="Zjistěte, jak získat kompenzaci až 600 € od Air France za zpožděný nebo zrušený let. Kompletní průvodce pro české cestující + právní template."
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
                "name": "Kolik zaplatí Air France za zpožděný let?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Air France vyplácí kompenzaci €250 za lety do 1500 km, €400 za lety 1500-3500 km a €600 za lety přes 3500 km při zpoždění ≥ 3 hodiny podle EU261."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dlouho trvá výplata od Air France?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Air France obvykle vyplácí kompenzaci do 28-42 dnů od schválení nároku. Patří mezi aerolinie se střední mírou dobrovolných výplat (62%)."
                }
              },
              {
                "@type": "Question",
                "name": "Air France nabídla voucher místo peněz — musím přijmout?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ne. Podle EU261 máte právo na hotovostní kompenzaci. Voucher může být jen dobrovolnou alternativou, nikoli náhradou povinné kompenzace."
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
              Air France
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Air France kompenzace za zpoždění a zrušení letu 2026
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>14 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Air France zpožděla nebo zrušila váš let?</strong> Máte nárok na kompenzaci <strong>až 600 €</strong> podle nařízení EU 261/2004. Air France je vlajková francouzská aerolinie s 79% on-time performance, ale i tak dochází ke zpožděním a zrušením — a v těchto případech musí Air France vyplatit kompenzaci. V tomto komplexním průvodci se dozvíte, kdy máte nárok, jak správně reklamovat a jak přinutit Air France k výplatě i při odmítnutí nebo nabídce voucheru.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Air France odmítla kompenzaci nebo nabízí voucher?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vymáhá kompenzace od Air France za vás — včetně složitých případů s přestupy přes Paříž (CDG) a sporů o mimořádné okolnosti. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Získat kompenzaci od Air France
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Kdy máte nárok na kompenzaci od Air France?
          </h2>

          <p>
            Kompenzace od Air France vám přísluší, pokud jsou splněny <strong>všechny následující podmínky</strong>:
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
                    Pokud Air France zrušila let více než 14 dní dopředu a nabídla alternativu, kompenzace NENÍ povinná (ale refundace letenky ano).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Odmítnutí nástupu (overbooking)</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud vám Air France odmítla boarding kvůli přeplněnému letu a nemohli jste dobrovolně souhlasit s přeřazením.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Nebyla mimořádná okolnost</strong>
                  <p className="text-gray-700 mt-2">
                    Air France musí prokázat, že zpoždění bylo způsobeno událostí mimo jejich kontrolu (bouře, stávka ATC, pandemie). Běžná technická závada NENÍ mimořádná okolnost.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                <div>
                  <strong className="text-gray-900">Let byl z EU nebo do EU provozovaný EU aerolinií</strong>
                  <p className="text-gray-700 mt-2">
                    Air France je francouzská aerolinie → EU261 platí pro všechny lety Air France z/do Evropy (včetně letů Paříž-Praha, Praha-New York přes CDG atd.).
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
              <p>• Let Air France AF1138 z Paříže (CDG) do Prahy (PRG), plánovaný odlet 18:45</p>
              <p>• Odlet zpožděn na 22:10 kvůli "technické závadě"</p>
              <p>• Přílet do Prahy: plánovaný 20:35, skutečný <strong>23:50</strong> → zpoždění <strong>3h 15min</strong></p>
              <p className="font-semibold text-green-700">→ Nárok na €250 kompenzaci (vzdálenost CDG-PRG {"<"} 1500 km)</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Euro className="w-8 h-8 text-blue-600" />
            Výše kompenzace od Air France — tabulka 2026
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Vzdálenost letu</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Zpoždění ≥ 3h</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Příklady tras Air France</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Do 1 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€250</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Paříž → Praha, Paříž → Amsterdam</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">1 500 – 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€400</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Praha → Káhira (via CDG), Paříž → Tel Aviv</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Přes 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Praha → New York (via CDG), Paříž → Bangkok</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            *Vzdálenost se měří great-circle distance mezi počátečním a konečným letištěm, ne mezi mezizastávkami.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Air France vs. ostatní aerolinie — statistika plateb
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
                <tr className="border-b bg-yellow-50 hover:bg-yellow-100">
                  <td className="px-6 py-4 font-semibold">Air France</td>
                  <td className="px-6 py-4">
                    <span className="text-yellow-700 font-bold">62 %</span>
                  </td>
                  <td className="px-6 py-4">35 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">KLM (sesterská společnost)</td>
                  <td className="px-6 py-4 text-green-600 font-bold">64 %</td>
                  <td className="px-6 py-4">28 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Lufthansa</td>
                  <td className="px-6 py-4 text-green-600 font-bold">68 %</td>
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
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. Air France má střední míru dobrovolných výplat mezi evropskými aeroliniemi.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak reklamovat kompenzaci u Air France — krok za krokem
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
                <span>Pokud bylo zrušení: e-mail od Air France s oznámením zrušení</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Pokud jste dostali péči (hotel, jídlo): účtenky (lze dodatečně požadovat náhradu)</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">2</span>
            Podejte reklamaci u Air France
          </h3>

          <p className="mb-4">
            Air France má online formulář a e-mailový kontakt. Doporučujeme <strong>e-mail</strong> (máte písemný důkaz doručení):
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap font-mono">
{`Předmět: Reklamace — zpoždění/zrušení letu AF[ČÍSLO], požadavek na kompenzaci €[ČÁSTKA]

Vážená společnost Air France,

dne [DATUM] jsem letěl/a letem AF[ČÍSLO] z [ODKUD] do [KAM], který měl zpoždění [X] hodin / byl zrušen.

Podrobnosti letu:
• Číslo letu: AF[ČÍSLO]
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
              📧 Kontakt Air France Customer Relations:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>E-mail: <strong className="text-gray-900">indemnisation.cz@airfrance.fr</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Online formulář: <a href="https://wwws.airfrance.cz/information/nous-contacter" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">airfrance.cz → Kontaktujte nás</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Poštovní adresa: Air France, Service Clientèle, 45 rue de Paris, 95747 Roissy CDG Cedex, France</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">3</span>
            Air France odpoví (obvykle 14-42 dnů)
          </h3>

          <p className="mb-4">
            Air France má střední response time mezi evropskými aeroliniemi. Možné scénáře:
          </p>

          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Scénář A: Kompenzace schválena (62 % případů)
              </p>
              <p className="text-gray-700">
                Air France vyplatí kompenzaci bankovním převodem obvykle do 35 dnů od schválení. Gratulujeme!
              </p>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-red-600" />
                Scénář B: Odmítnuto kvůli "mimořádné okolnosti" (23 % případů)
              </p>
              <p className="text-gray-700">
                Air France tvrdí, že zpoždění bylo způsobeno bouří, stávkou ATC nebo technickou závadou. → Pokračujte krokem 4.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-yellow-600" />
                Scénář C: Nabídka voucheru místo hotovosti (15 % případů)
              </p>
              <p className="text-gray-700">
                Air France nabídne "gesto dobré vůle" ve formě travel voucheru €150-400. → Odmítněte a požadujte hotovost podle EU261.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Air France odmítla kompenzaci nebo nabízí voucher?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s tisíci případů Air France a zná všechny jejich argumenty. Vymůžeme HOTOVOSTNÍ kompenzaci za vás — platíte jen při úspěchu (obvykle 25-30 % provize).
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

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">4</span>
            Odvolání nebo eskalace na ÚCL
          </h3>

          <p className="mb-4">
            Pokud Air France odmítla kompenzaci nebo nabízí jen voucher, máte 2 možnosti:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">
              📋 Možnost 1: Odvolání přímo u Air France
            </p>
            <p className="text-gray-700 mb-4">
              Pošlete druhý e-mail s právními argumenty. Template:
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
              <pre className="whitespace-pre-wrap font-mono">
{`Předmět: Odvolání proti zamítnutí — reklamace [VAŠE ČÍSLO]

Vážená společnost Air France,

nesouhlasím s vaším zamítnutím / nabídkou voucheru z následujících důvodů:

1. ROZSUDEK ESD C-549/07 (Wallentin-Hermann)
"Technická závada NENÍ mimořádnou okolností, pokud není důsledkem sabotáže nebo skryté výrobní vady."

2. ČLÁNEK 7(3) NAŘÍZENÍ EU261
"Kompenzace může být vyplacena v hotovosti, bankovním převodem, šekem nebo - SE SOUHLASEM CESTUJÍCÍHO - v cestovních voucherech."
→ Voucher může být jen ALTERNATIVOU, ne náhradou. Požaduji HOTOVOST.

3. ABSENCE KONKRÉTNÍCH DŮKAZŮ
Ve vaší odpovědi chybí:
- Konkrétní typ mimořádné okolnosti
- ATL (Aircraft Technical Log) číslo
- EUROCONTROL slot confirmation (pokud tvrdíte ATC delay)

4. DŮKAZNÍ BŘEMENO
Podle čl. 5(3) EU261 má AEROLINIE povinnost prokázat mimořádnou okolnost, ne cestující.

POŽADAVEK: Vyplacení €[ČÁSTKA] V HOTOVOSTI do 14 dnů, jinak eskaluji na ÚCL + soud.

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
              <li>Vyplňte formulář + nahrajte korespondenci s Air France</li>
              <li>ÚCL kontaktuje Air France a vyžádá důkazy (30 dnů)</li>
              <li>Pokud ÚCL rozhodne ve váš prospěch, Air France obvykle vyplácí do 30 dnů</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté triky Air France při odmítání kompenzací
          </h2>

          <div className="space-y-6">
            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Trik 1: Nabídka voucheru jako "gesta dobré vůle"
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Air France argument:</strong> <em>"Jako gesto dobré vůle vám nabízíme voucher €300 na budoucí lety."</em>
              </p>
              <p className="text-gray-700">
                <strong>Counter-argument:</strong> Podle čl. 7(3) EU261 je voucher pouze ALTERNATIVOU k hotovosti, kterou můžete dobrovolně přijmout. Air France NEMÁ PRÁVO odmítnout hotovostní kompenzaci a nabízet pouze voucher. Pokud tak činí, porušuje unijní právo. Požadujte: "Chci kompenzaci v hotovosti podle EU261."
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Trik 2: "Stávka personálu Air France"
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Air France argument:</strong> <em>"Let byl zrušen kvůli stávce našich zaměstnanců, což je mimořádná okolnost."</em>
              </p>
              <p className="text-gray-700">
                <strong>Counter-argument:</strong> Podle rozsudku ESD C-195/17 (TUIfly), stávka VLASTNÍCH zaměstnanců aerolinie NENÍ mimořádná okolnost, protože je to součást normálního vztahu zaměstnavatel-zaměstnanec. Pouze stávka MIMO kontrolu aerolinie (např. ATC stávka) je mimořádná okolnost. Požadujte důkaz, že šlo o externí stávku.
              </p>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ⚠️ Trik 3: "Pozdní přílet předchozího letadla"
              </h3>
              <p className="text-gray-700 mb-3">
                <strong>Air France argument:</strong> <em>"Letadlo dorazilo později z předchozího letu, což způsobilo rotační zpoždění."</em>
              </p>
              <p className="text-gray-700">
                <strong>Counter-argument:</strong> Podle rozsudku ESD C-294/10 (Eglītis and Ratnieks), rotační zpoždění NENÍ mimořádná okolnost, pokud původní zpoždění nebylo způsobeno mimořádnou okolností. Air France musí prokázat, že první let měl např. bouři — jinak platí kompenzace.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Air France a zmeškaný přestup v Paříži (CDG)
          </h2>

          <p>
            Paříž Charles de Gaulle (CDG) je hlavní hub Air France s denně 1200+ lety. Pokud jste zmeškali navazující let kvůli zpoždění prvního letu, máte nárok na kompenzaci, pokud:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Jednotná rezervace (single booking):</strong> Oba lety byly na jednom PNR čísle</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>MCT dodržen:</strong> Minimální přestupní čas byl dostatečný (CDG: obvykle 60 min Schengen, 90 min non-Schengen)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Zpoždění na konečné destinaci ≥ 3h:</strong> Měří se čas příchodu na finální destinaci, ne na mezizastávce</span>
              </li>
            </ul>
          </div>

          <p className="mt-4">
            <strong>Příklad:</strong> Let Praha → Paříž (AF zpožděn o 1h) + Paříž → New York (zmeškaný) → Air France vás přerezervuje na další spoj s odletem +7h → dorazíte do NYC s 6h zpožděním → <strong>Nárok na €600</strong> (vzdálenost PRG-JFK {">"} 3500 km).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Air France nabídla €300 voucher, ale já chci hotovost — co dělat?
              </h3>
              <p className="text-gray-700">
                Odmítněte voucher a citujte čl. 7(3) EU261: "Kompenzace může být vyplacena... SE SOUHLASEM CESTUJÍCÍHO v cestovních voucherech." Pokud NESOUHLASÍTE, máte právo na HOTOVOST. Napište: "Voucher odmítám. Požaduji kompenzaci €[částka] v hotovosti podle EU261."
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí EU261 pro Air France lety mimo Evropu (např. Paříž → Bangkok)?
              </h3>
              <p className="text-gray-700">
                ANO, pokud let vychází z EU letiště. Air France je francouzská aerolinie → EU261 platí pro všechny lety Air France z Evropy. Ale pokud letíte Bangkok → Paříž a Air France zpožděla, kompenzace NEPLATÍ (jen pokud jste měli pokračující let z Paříže dál do EU).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času mám na podání reklamace u Air France?
              </h3>
              <p className="text-gray-700">
                V České republice: <strong>3 roky</strong> od data letu (prekluzivní lhůta dle občanského zákoníku). Ve Francii: 5 let. Pokud jste český občan a let vycházel z ČR, platí česká 3letá lhůta.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Air France poskytla hotel a jídlo — zmenšuje to kompenzaci?
              </h3>
              <p className="text-gray-700">
                NE. Péče (care) podle čl. 9 EU261 (hotel, jídlo, transport) je <strong>oddělená od kompenzace</strong> podle čl. 7. I když vás Air France ubytovala v 5* hotelu, stále máte nárok na plnou kompenzaci €250-600.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Koupil jsem letenku přes agenturu (Kiwi, Booking) — kde reklamovat?
              </h3>
              <p className="text-gray-700">
                Kompenzaci VŽDY vyplácí aerolinie (Air France), ne agentura. Agentury slouží jen jako zprostředkovatel. Vaše reklamace musí jít přímo na Air France — agenturu ignorujte (můžete jen požádat o PNR číslo, pokud ho nemáte).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na vaší situaci. Air France má střední míru dobrovolných výplat (62 %), takže pokud máte jednoduchý případ (jasné 4h zpoždění, žádná mimořádná okolnost), můžete zkusit reklamovat sami a dostat 100 %. Pokud Air France odmítne nebo nabízí voucher, <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger je bezpečná volba</Link> (dostanete 70-75 % HOTOVOSTI za 4-8 týdnů vs. 12-18 měsíců při samostatném vymáhání přes ÚCL/soud).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Air France často nabízí vouchery místo peněz — nenechte se oblafnout
          </h2>

          <p>
            Air France má střední track record v platbě kompenzací a často se snaží vyhnout hotovostním výplatám nabídkou voucherů. To je sice legální (pokud je voucher jako ALTERNATIVA), ale cestující často nevědí, že mají právo odmítnout.
          </p>

          <p className="mt-4">
            <strong>Klíčové body:</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Máte nárok na <strong>€250-600 V HOTOVOSTI</strong> podle vzdálenosti letu při zpoždění ≥ 3h</li>
            <li>Voucher může být jen ALTERNATIVOU se souhlasem — můžete odmítnout</li>
            <li>Pokud Air France odmítne hotovost, citujte čl. 7(3) EU261</li>
            <li>Stávka vlastních zaměstnanců NENÍ mimořádná okolnost</li>
            <li>Máte 3 roky na podání reklamace (české právo)</li>
          </ul>

          <p className="mt-6 text-lg font-semibold text-gray-900">
            Air France je kvalitní aerolinie, ale při kompenzacích se snaží ušetřit. Znalost vašich práv je klíčová — nenechte se odradit nabídkou voucheru.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Připraveni získat HOTOVOSTNÍ kompenzaci od Air France?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud (pokud potřeba). Specializujeme se na Air France-KLM Group a víme, jak přinutit k výplatě hotovosti místo voucheru. Bez rizika, platíte jen při úspěchu.
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