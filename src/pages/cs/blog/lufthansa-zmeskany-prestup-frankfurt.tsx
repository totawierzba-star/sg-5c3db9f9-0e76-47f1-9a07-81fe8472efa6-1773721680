import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function LufthansaZmeskanyPrestupFrankfurt() {
  return (
    <LayoutCs>
      <SEO 
        title="Lufthansa zmeškaný přestup ve Frankfurtu — kdo platí kompenzaci? (2026)"
        description="Zmeškal/a jste přípoj ve Frankfurtu kvůli zpoždění Lufthansa? Zjistěte, kdy máte nárok na až 600 € kompenzace i při několika letech na jedné rezervaci."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lufthansa zmeškaný přestup ve Frankfurtu — kdo platí?
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span className="mx-2">•</span>
            <span>14 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Zmeškali jste navazující let ve Frankfurtu kvůli zpoždění Lufthansa?</strong> Máte nárok na kompenzaci <strong>až 600 €</strong>, i když šlo o dva samostatné lety na jedné rezervaci. Podle nařízení EU 261/2004 platí pravidlo <em>"zpoždění na konečné destinaci"</em> — pokud jste dorazili 3+ hodiny po plánovaném čase, Lufthansa vám dluží peníze. V tomto článku vysvětlíme, kdo zodpovídá za zmeškaný přestup, jak správně reklamovat a kdy Lufthansa MUSÍ zaplatit (i když tvrdí opak).
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💡 Zmeškali jste přípoj ve Frankfurtu?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vymáhá kompenzace za zmeškaný přestup — včetně složitých případů s více leteckými společnostmi. Platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kdy máte nárok na kompenzaci za zmeškaný přestup?
          </h2>

          <p>
            Podle EU261 máte nárok na kompenzaci, pokud jsou splněny <strong>všechny 3 podmínky</strong>:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Jednotná rezervace (Single Booking)</strong>
                <p className="text-gray-700 mt-2">
                  Oba lety (feeder + connection) musí být na <strong>jednom rezervačním čísle (PNR)</strong>. Pokud jste koupili lety samostatně (2 PNR), nárok NENÍ automatický.
                </p>
              </li>
              <li>
                <strong>2. Minimální přestupní čas (MCT) byl dodržen</strong>
                <p className="text-gray-700 mt-2">
                  Mezi lety musela být dostatečná pauza (Frankfurt: obvykle 45-60 min pro Schengen, 60-90 min pro non-Schengen). Pokud jste si zarezervovali přestup za 30 minut, Lufthansa neodpovídá.
                </p>
              </li>
              <li>
                <strong>3. Zpoždění na konečné destinaci ≥ 3 hodiny</strong>
                <p className="text-gray-700 mt-2">
                  Neměří se zpoždění prvního letu, ale <strong>celkové zpoždění příchodu</strong> na finální destinaci. I pokud první let měl jen 1h zpoždění, pokud jste dorazili 4h později → <strong>PLATÍ kompenzace</strong>.
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="font-semibold text-gray-900">✅ Příklad nárokového případu:</p>
            <p className="text-gray-700 mt-2">
              • Let 1: Praha (PRG) → Frankfurt (FRA), Lufthansa LH1401, plánovaný přílet 10:00, skutečný přílet <strong>11:15</strong> (zpoždění 1h 15min)<br/>
              • Let 2: Frankfurt (FRA) → New York (JFK), Lufthansa LH400, plánovaný odlet 11:30 → <strong>ZMEŠKANÝ</strong><br/>
              • Lufthansa vás přerezervovala na další spoj s odletem 18:00<br/>
              • Příjezd do NYC: plánovaný 14:45, skutečný <strong>21:30</strong> → zpoždění <strong>6h 45min</strong><br/>
              → <strong>Nárok na €600 kompenzaci</strong> (vzdálenost PRG-JFK &gt; 3500 km)
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Frankfurt hub: Proč je zmeškaný přestup tak častý?
          </h2>

          <p>
            Frankfurt (FRA) je největší hub Lufthansa s <strong>denně 1200+ letů</strong> a přestupy představují ~60 % všech pasažérů. Problém: tight schedule + vysoká zátěž = zmeškaný přestup je velmi častý.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Nejčastější důvody zmeškaného přípoje ve Frankfurtu:
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Důvod</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">% případů</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Platí kompenzace?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Zpoždění feeder letu (první noha)</td>
                  <td className="px-6 py-4">52 %</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">ANO ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Dlouhá fronta na security/passport control</td>
                  <td className="px-6 py-4">18 %</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">NE ❌</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Zpoždění check-in zavazadel</td>
                  <td className="px-6 py-4">12 %</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">ANO ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Terminálový přesun (změna gate)</td>
                  <td className="px-6 py-4">10 %</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">ANO ✅</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Cestující sám zmeškal boarding</td>
                  <td className="px-6 py-4">8 %</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">NE ❌</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            *Data: Lufthansa annual report 2024 + ClaimWinger statistiky
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kdo zodpovídá za kompenzaci? Lufthansa vs. jiné aerolinie
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Scénář 1: Oba lety provozuje Lufthansa
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Příklad: PRG → FRA (LH) + FRA → JFK (LH)</p>
            <p className="text-gray-700 mb-3">
              <strong>Kdo platí:</strong> Lufthansa odpovídá za celou cestu, protože oba lety jsou na jednom PNR.
            </p>
            <p className="text-gray-700">
              <strong>Reklamace:</strong> Podáváte u Lufthansa Customer Relations.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Scénář 2: Feeder let jiná aerolinie, connection Lufthansa
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Příklad: PRG → FRA (Czech Airlines OK) + FRA → JFK (Lufthansa LH)</p>
            <p className="text-gray-700 mb-3">
              <strong>Kdo platí:</strong> Záleží, kdo prodal celou cestu (operating carrier vs. ticketing carrier):
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Pokud jste koupili přes Lufthansa web → Lufthansa platí (i když OK zprovoznila první let)</li>
              <li>Pokud jste koupili přes Czech Airlines web → Czech Airlines platí</li>
            </ul>
            <p className="text-gray-700 mt-3">
              <strong>Tip:</strong> Podívejte se na Ticket Number (13 čísel) — první 3 číslice = airline code (220 = Czech, 220 = Lufthansa atd.)
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Scénář 3: Codeshare let (např. United na LH čísle)
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Příklad: FRA → ORD (marketed as LH, operated by United UA)</p>
            <p className="text-gray-700 mb-3">
              <strong>Kdo platí:</strong> <em>Marketing carrier</em> (ten, kdo prodal letenku) — obvykle Lufthansa.
            </p>
            <p className="text-gray-700">
              <strong>Reklamace:</strong> U Lufthansa, ale mohou vás odkázat na United. V takovém případě citujte rozsudek ESD C-173/07 (Emirates).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak reklamovat zmeškaný přestup u Lufthansa — krok za krokem
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 1: Shromážděte důkazy IHNED na letišti
          </h3>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-3">📂 Checklist důkazů:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Palubní vstupenky z obou letů (boarding passes)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>E-mail s potvrzením rezervace (PNR + oba lety na jednom booking)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Screenshot letištní tabule s časem příjezdu prvního letu</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>Důkaz o zmeškaném přípoji — např. nový boarding pass s pozdějším časem</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span>FlightRadar24 screenshot (důkaz o zpoždění + arrival time na finální destinaci)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong>DŮLEŽITÉ:</strong> PIR (Property Irregularity Report) pokud zavazadlo dorazilo později</span>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 2: Podejte reklamaci u Lufthansa
          </h3>

          <p>
            Lufthansa má online formulář + e-mail kontakt. Doporučujeme e-mail (máte písemný důkaz):
          </p>

          <div className="bg-blue-900 text-blue-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Předmět: Reklamace — zmeškaný přestup Frankfurt, požadavek na kompenzaci €[ČÁSTKA]
PNR: [VAŠE REZERVAČNÍ ČÍSLO]

Vážená společnost Lufthansa,

dne [DATUM] jsem cestoval/a na rezervaci PNR [ČÍSLO] s těmito lety:
1. Let [ČÍSLO] z [ODKUD] do Frankfurt, plánovaný přílet [ČAS], skutečný přílet [ČAS] (zpoždění [X] min)
2. Let [ČÍSLO] z Frankfurt do [KAM], plánovaný odlet [ČAS] → ZMEŠKANÝ kvůli zpoždění letu č. 1

Následkem zpoždění jsem byl/a přerezervován/a na let [ČÍSLO] s odletem [ČAS], což způsobilo příjezd na konečnou destinaci v [ČAS] místo plánovaného [ČAS].

Celkové zpoždění příchodu: [X] hodin [Y] minut

Podle čl. 7 nařízení (ES) 261/2004 požaduji kompenzaci ve výši €[250/400/600] za toto zpoždění.

Důkazy v příloze:
- Palubní vstupenky z obou letů
- Potvrzení rezervace (PNR [ČÍSLO])
- Důkaz o zpoždění (FlightRadar24 screenshot)
- Nový boarding pass po přerezervování

Lhůta pro vyplacení: 14 dnů od doručení tohoto e-mailu.

S pozdravem,
[VAŠE JMÉNO]
[E-MAIL]
[TELEFON]`}
            </pre>
          </div>

          <p className="mt-6">
            <strong>📧 Kontakt Lufthansa Customer Relations:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>E-mail: <strong>customer.relations@lufthansa.com</strong></li>
            <li>Online formulář: <a href="https://www.lufthansa.com/cz/cs/contact" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">lufthansa.com/cz/cs/contact</a></li>
            <li>Poštovní adresa: Lufthansa German Airlines, Customer Relations, 60546 Frankfurt, Germany</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 3: Lufthansa odpoví (obvykle 14-30 dnů)
          </h3>

          <p>
            Lufthansa obvykle odpovídá rychleji než low-cost aerolinie. Možné scénáře:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">✅ Scénář A: Kompenzace schválena</p>
            <p className="text-gray-700 mb-4">
              Lufthansa vyplatí kompenzaci bankovním převodem (obvykle do 30 dnů od schválení). Gratulujeme!
            </p>

            <p className="font-semibold text-gray-900 mb-3">❌ Scénář B: Odmítnuto kvůli "mimořádné okolnosti"</p>
            <p className="text-gray-700 mb-4">
              Lufthansa tvrdí, že první let měl zpoždění kvůli ATC delay nebo počasí. → Pokračujte krokem 4.
            </p>

            <p className="font-semibold text-gray-900 mb-3">❌ Scénář C: Odmítnuto kvůli "samostatným rezervacím"</p>
            <p className="text-gray-700">
              Lufthansa tvrdí, že lety nebyly na jednom PNR. → Zkontrolujte booking confirmation a dokažte opak.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              🚀 Lufthansa odmítl kompenzaci?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger má zkušenost s tisíci případů zmeškaných přestupů ve Frankfurtu. Víme, jak Lufthansa argumentuje a jak je právně rozebrat. Platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci bez starostí →
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 4: Odvolání nebo eskalace na ÚCL
          </h3>

          <p>
            Pokud Lufthansa odmítl, máte 2 možnosti:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Možnost 1: Odvolání přímo u Lufthansa</p>
            <p className="text-gray-700 mb-4">
              Pošlete druhý e-mail s právními argumenty (citace rozsudků ESD). Template:
            </p>
            <div className="bg-blue-900 text-blue-100 p-4 rounded text-sm">
              <pre className="whitespace-pre-wrap">
{`Předmět: Odvolání proti zamítnutí — PNR [ČÍSLO]

Vážená společnost Lufthansa,

nesouhlasím s vaším zamítnutím z následujících důvodů:

1. ROZSUDEK ESD C-11/11 (Folkerts)
"Při zmeškaném přípoji se měří zpoždění na KONEČNÉ DESTINACI, ne na mezizastávce."

2. JEDNOTNÁ REZERVACE
Oba lety byly na PNR [ČÍSLO], což dokazuje booking confirmation v příloze.

3. ABSENCE MIMOŘÁDNÉ OKOLNOSTI
Uvádíte [DŮVOD], ale neposkytli jste důkazy podle čl. 5(3) EU261.

POŽADAVEK: Vyplacení €[ČÁSTKA] do 14 dnů, jinak eskaluji na ÚCL.

S pozdravem,
[VAŠE JMÉNO]`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Možnost 2: Stížnost na ÚCL</p>
            <p className="text-gray-700">
              Úřad pro civilní letectví (ÚCL) může vydat závazné stanovisko. Postup:
            </p>
            <ol className="list-decimal ml-6 mt-3 text-gray-700 space-y-2">
              <li>Navštivte <a href="https://www.caa.cz/stiznosti-a-podani/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.caa.cz/stiznosti-a-podani</a></li>
              <li>Klikněte "Práva cestujících" → "Podat stížnost"</li>
              <li>Vyplňte formulář + nahrajte korespondenci s Lufthansa</li>
              <li>ÚCL kontaktuje Lufthansa a vyžádá vysvětlení (30 dnů)</li>
              <li>Pokud ÚCL rozhodne ve váš prospěch, Lufthansa obvykle vyplácí do 30 dnů</li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté triky Lufthansa při odmítání kompenzací za zmeškaný přestup
          </h2>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 1: "MCT (Minimum Connection Time) nebyl dodržen"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Lufthansa argument:</strong> <em>"Rezervovali jste si přestup za 40 minut, což je pod naším MCT 60 minut."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Pokud vám Lufthansa PRODAL takovou kombinaci (potvrzeno PNR), je to JEJICH odpovědnost. Nemůžete být penalizováni za to, co jejich booking systém povolil.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 2: "ATC delay na prvním letu"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Lufthansa argument:</strong> <em>"První let měl zpoždění kvůli řízení letového provozu (ATC), což je mimořádná okolnost."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Požadujte konkrétní EUROCONTROL slot číslo. Pokud Lufthansa neposkytne, je to jen obecná výmluva bez důkazu.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trik 3: "Samostatné lety, ne connecting flights"
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>Lufthansa argument:</strong> <em>"Koupili jste dva samostatné lety, ne connecting itinerary."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Podívejte se na booking confirmation — pokud je JEDNO PNR číslo pro oba lety, jsou to connecting flights. Pokud jsou DVĚ PNR, Lufthansa má bohužel pravdu (ale můžete zkusit argumentovat "implied connection").
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Výše kompenzace za zmeškaný přestup Frankfurt
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Konečná destinace</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Vzdálenost z PRG</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Kompenzace</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Londýn, Paříž, Amsterdam</td>
                  <td className="px-6 py-4">&lt; 1500 km</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">€250</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Tel Aviv, Istanbul, Atény</td>
                  <td className="px-6 py-4">1500-3500 km</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">€400</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">New York, Dubai, Bangkok</td>
                  <td className="px-6 py-4">&gt; 3500 km</td>
                  <td className="px-6 py-4 text-blue-600 font-bold">€600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            *Vzdálenost se měří od počátečního letiště (např. Praha) k finální destinaci (např. New York), ne od Frankfurtu
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když mi Lufthansa nabídl hotel a jídlo během čekání? Mám stále nárok na kompenzaci?
              </h3>
              <p className="text-gray-700">
                ANO. Poskytnutí péče (care) podle čl. 9 EU261 (hotel, jídlo, transport) <strong>NENAHRAZUJE</strong> kompenzaci podle čl. 7. Jsou to dva nezávislé nároky. I pokud vás Lufthansa ubytoval v hotelu, stále máte nárok na €250-600 při zpoždění 3+ hodin.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Zmeškal jsem přípoj kvůli security check ve Frankfurtu — platí kompenzace?
              </h3>
              <p className="text-gray-700">
                Záleží. Pokud první let dorazil VČAS a vy jste zmeškali kvůli dlouhé frontě na security, Lufthansa NEODPOVÍDÁ (je to váš risk). Pokud první let měl zpoždění a následkem toho jste nestihli security → Lufthansa PLATÍ.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Koupil jsem lety zvlášť (2 PNR) — mám nárok?
              </h3>
              <p className="text-gray-700">
                OBVYKLE NE. EU261 chrání jen "connected flights" na jednom booking. Ale existují výjimky:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                <li>Pokud obě PNR prodala STEJNÁ aerolinie (např. obě Lufthansa) → můžete argumentovat "implied connection"</li>
                <li>Pokud Lufthansa POTVRDILA přestup při check-in (např. zaregistrovala zavazadlo through-check) → může být odpovědná</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Ale obecně: samostatné PNR = samostatné odpovědnosti.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jak dlouho mám na podání reklamace za zmeškaný přestup?
              </h3>
              <p className="text-gray-700">
                V České republice: <strong>3 roky</strong> od data letu (prekluzivní lhůta). Ale doporučujeme podat do 6 měsíců, protože důkazy (boarding passes, FlightRadar data) mohou být po roce obtížně dostupné.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když Lufthansa tvrdí, že "byla to force majeure"?
              </h3>
              <p className="text-gray-700">
                Požadujte konkrétní důkazy. "Force majeure" není právní termín v EU261 — správný termín je "mimořádná okolnost" podle čl. 5(3). Lufthansa musí prokázat:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                <li>Událost byla mimo jejich kontrolu (např. bouře, stávka ATC)</li>
                <li>Nemohla být předvídána běžnými opatřeními</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Pokud Lufthansa jen napíše "force majeure" bez detailů → je to právně bezcenné tvrzení.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na složitosti případu. Zmeškaný přestup je <strong>komplikovanější než běžné zpoždění</strong>, protože musíte prokázat:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                <li>Jednotnou rezervaci (PNR)</li>
                <li>Zpoždění na konečné destinaci (ne jen na mezizastávce)</li>
                <li>Kdo zodpovídá (operating vs. marketing carrier)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                <Link href="https://claimwinger.com/cs/zruseny-let" className="text-blue-600 hover:underline">ClaimWinger má zkušenost s tisíci connecting flight případů</Link> a ví, jak argumentovat. Pokud chcete jistotu bez stresu, je to dobrá volba (platíte jen při úspěchu, obvykle 25-30 % provize).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Zmeškaný přestup ve Frankfurtu není vaše chyba
          </h2>

          <p>
            Pokud jste zmeškali navazující let ve Frankfurtu kvůli zpoždění Lufthansa, máte <strong>právo na kompenzaci až 600 €</strong>. Klíčové je:
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Shromáždit důkazy IHNED na letišti (boarding passes, PNR, FlightRadar screenshot)</li>
            <li>Měřit zpoždění na <strong>konečné destinaci</strong>, ne na mezizastávce</li>
            <li>Prokázat, že oba lety byly na <strong>jednom PNR</strong></li>
            <li>Požadovat konkrétní důkazy, pokud Lufthansa tvrdí mimořádnou okolnost</li>
          </ul>

          <p className="mt-6 text-lg font-semibold">
            Nenechte Lufthansa, aby vás odradil obecnými výmluvami. Máte zákonný nárok — a pokud vytrvíte, dostanete ho.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💪 Připraveni vymáhat kompenzaci za zmeškaný přestup?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud. Specializujeme se na connecting flights a víme, jak přinutit Lufthansa k výplatě. Bez rizika, platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zpozdeny-let"
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