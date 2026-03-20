import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, Euro, AlertCircle, CheckCircle, ArrowRight, MapPin } from "lucide-react";

export default function IberiaKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Iberia kompenzace 2026 — až 600 € za zpoždění letu"
        description="Zjistěte, jak získat kompenzaci až 600 € od Iberia Airlines za zpožděný nebo zrušený let. Kompletní průvodce pro české pasažéry."
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
                "name": "Kdy mám nárok na kompenzaci od Iberia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nárok máte při zpoždění ≥3 hodiny na konečné destinaci, zrušení letu méně než 14 dní před odletem nebo odmítnutí nástupu. Iberia musí prokázat mimořádnou okolnost, jinak platí €250-600 podle vzdálenosti."
                }
              },
              {
                "@type": "Question",
                "name": "Kolik zaplatí Iberia za zpožděný let?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Iberia vyplácí €250 za lety do 1500 km, €400 za lety 1500-3500 km a €600 za lety přes 3500 km při zpoždění ≥3 hodiny podle EU261."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dlouho trvá výplata od Iberia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Iberia obvykle vyplácí kompenzaci do 30-45 dnů od schválení nároku. Patří mezi aerolinie se střední mírou dobrovolných výplat (58%)."
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
              Iberia Airlines
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Iberia kompenzace za zpoždění — průvodce 2026
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>12 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Iberia zpožděla nebo zrušila váš let?</strong> Máte nárok na kompenzaci <strong>až 600 €</strong> podle nařízení EU 261/2004. Iberia je španělská vlajková aerolinie s 76% on-time performance, ale i tak dochází ke zpožděním a zrušením — a v těchto případech musí Iberia vyplatit kompenzaci. V tomto komplexním průvodci se dozvíte, kdy máte nárok, jak správně reklamovat a jak přinutit Iberia k výplatě i při odmítnutí.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Iberia odmítla kompenzaci nebo nereaguje?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vymáhá kompenzace od Iberia Airlines za vás — včetně složitých případů s přestupy přes Madrid (MAD) a sporů o mimořádné okolnosti. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Získat kompenzaci od Iberia
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Kdy máte nárok na kompenzaci od Iberia?
          </h2>

          <p>
            Kompenzace od Iberia vám přísluší, pokud jsou splněny <strong>všechny následující podmínky</strong>:
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
                    Pokud Iberia zrušila let více než 14 dní dopředu a nabídla alternativu, kompenzace NENÍ povinná (ale refundace letenky ano).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Nebyla mimořádná okolnost</strong>
                  <p className="text-gray-700 mt-2">
                    Iberia musí prokázat, že zpoždění bylo způsobeno událostí mimo jejich kontrolu (bouře, stávka ATC, pandemie). Běžná technická závada NENÍ mimořádná okolnost.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Let byl z EU nebo do EU provozovaný EU aerolinií</strong>
                  <p className="text-gray-700 mt-2">
                    Iberia je španělská aerolinie → EU261 platí pro všechny lety Iberia z/do Evropy (včetně letů Madrid-Praha, Praha-Buenos Aires přes MAD atd.).
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
              <p>• Let Iberia IB3154 z Madridu (MAD) do Prahy (PRG), plánovaný odlet 11:30</p>
              <p>• Odlet zpožděn na 15:45 kvůli "technické závadě"</p>
              <p>• Přílet do Prahy: plánovaný 14:55, skutečný <strong>18:50</strong> → zpoždění <strong>3h 55min</strong></p>
              <p className="font-semibold text-green-700">→ Nárok na €250 kompenzaci (vzdálenost MAD-PRG {"<"} 1500 km)</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Euro className="w-8 h-8 text-blue-600" />
            Výše kompenzace od Iberia — tabulka 2026
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Vzdálenost letu</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Zpoždění ≥ 3h</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Příklady tras Iberia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Do 1 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€250</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Madrid → Praha, Barcelona → Vídeň</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">1 500 – 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€400</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Madrid → Tel Aviv, Barcelona → Káhira</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Přes 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Praha → Buenos Aires (via MAD), Madrid → Tokyo</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Iberia vs. ostatní aerolinie — statistika plateb
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
                  <td className="px-6 py-4 font-semibold">Iberia</td>
                  <td className="px-6 py-4">
                    <span className="text-yellow-700 font-bold">58 %</span>
                  </td>
                  <td className="px-6 py-4">38 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Lufthansa</td>
                  <td className="px-6 py-4 text-green-600 font-bold">68 %</td>
                  <td className="px-6 py-4">28 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Air France</td>
                  <td className="px-6 py-4">62 %</td>
                  <td className="px-6 py-4">35 dnů</td>
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
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. Iberia má nižší míru dobrovolných výplat než premium aerolinie jako Lufthansa.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak reklamovat kompenzaci u Iberia — krok za krokem
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
                <span>Pokud bylo zrušení: e-mail od Iberia s oznámením zrušení</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Pokud jste dostali péči (hotel, jídlo): účtenky (lze dodatečně požadovat náhradu)</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4 flex items-center gap-2">
            <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg">2</span>
            Podejte reklamaci u Iberia
          </h3>

          <p className="mb-4">
            Iberia má online formulář a e-mailový kontakt. Doporučujeme <strong>e-mail</strong> (máte písemný důkaz doručení):
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap font-mono">
{`Předmět: Reklamace — zpoždění/zrušení letu IB[ČÍSLO], požadavek na kompenzaci €[ČÁSTKA]

Vážená společnost Iberia Airlines,

dne [DATUM] jsem letěl/a letem IB[ČÍSLO] z [ODKUD] do [KAM], který měl zpoždění [X] hodin / byl zrušen.

Podrobnosti letu:
• Číslo letu: IB[ČÍSLO]
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
              📧 Kontakt Iberia Customer Relations:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Online formulář: <a href="https://www.iberia.com/cz/customer-service/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">iberia.com → Customer Service → EU261 Claims</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>E-mail: <strong className="text-gray-900">customerrelations@iberia.es</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Poštovní adresa: Iberia Customer Relations, Calle Velázquez 130, 28006 Madrid, Spain</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Iberia odmítla kompenzaci nebo nereaguje?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s tisíci případů Iberia Airlines a zná všechny jejich argumenty. Vymůžeme kompenzaci za vás — platíte jen při úspěchu (obvykle 25-30 % provize).
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
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí EU261 pro Iberia lety mimo Evropu?
              </h3>
              <p className="text-gray-700">
                ANO, pokud let vychází z EU letiště. Iberia je španělská aerolinie → EU261 platí pro všechny lety Iberia z Evropy. Ale pokud letíte Buenos Aires → Madrid a Iberia zpožděla, kompenzace NEPLATÍ (jen pokud jste měli pokračující let z Madridu dál do EU).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času mám na podání reklamace u Iberia?
              </h3>
              <p className="text-gray-700">
                V České republice: <strong>3 roky</strong> od data letu (prekluzivní lhůta dle občanského zákoníku). Ve Španělsku: 5 let. Pokud jste český občan a let vycházel z ČR, platí česká 3letá lhůta.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Iberia poskytla hotel a jídlo — zmenšuje to kompenzaci?
              </h3>
              <p className="text-gray-700">
                NE. Péče (care) podle čl. 9 EU261 (hotel, jídlo, transport) je <strong>oddělená od kompenzace</strong> podle čl. 7. I když vás Iberia ubytovala v hotelu, stále máte nárok na plnou kompenzaci €250-600.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na složitosti případu. Iberia má nižší míru dobrovolných výplat (58 %) než premium aerolinie. Pokud Iberia odmítne nebo neodpoví, <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger je bezpečná volba</Link> (dostanete 70-75 % za 4-8 týdnů vs. 12-18 měsíců při samostatném vymáhání přes ÚCL/soud).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Iberia má nižší míru dobrovolných výplat — buďte připraveni eskalovat
          </h2>

          <p>
            Iberia Airlines má střední track record v platbě kompenzací, ale často dochází k odmítnutím — zejména při technických závadách nebo rotačních zpožděních.
          </p>

          <p className="mt-4">
            <strong>Klíčové body:</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Máte nárok na <strong>€250-600</strong> podle vzdálenosti letu při zpoždění ≥ 3h</li>
            <li>Iberia má povinnost vyplatit, obvykle platí do 38 dnů</li>
            <li>Pokud Iberia odmítne, požadujte konkrétní důkazy o mimořádné okolnosti</li>
            <li>Máte 3 roky na podání reklamace (české právo)</li>
          </ul>

          <p className="mt-6 text-lg font-semibold text-gray-900">
            Iberia je spolehlivá aerolinie, ale při kompenzacích vyžaduje důsledné vymáhání. Znalost vašich práv je klíčová.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Připraveni získat kompenzaci od Iberia?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud (pokud potřeba). Specializujeme se na IAG Group (Iberia, British Airways, Vueling) a víme, jak argumentovat. Bez rizika, platíte jen při úspěchu.
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
