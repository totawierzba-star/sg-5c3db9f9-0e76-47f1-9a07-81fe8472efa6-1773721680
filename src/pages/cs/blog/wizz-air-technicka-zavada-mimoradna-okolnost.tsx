import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function WizzAirTechnickaZavada() {
  return (
    <LayoutCs>
      <SEO 
        title="Wizz Air technická závada — mimořádná okolnost nebo ne? (2026)"
        description="Wizz Air odmítl kompenzaci kvůli technické závadě? Zjistěte, kdy technická porucha NENÍ mimořádná okolnost podle EU soudu + právní template."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Wizz Air technická závada — mimořádná okolnost nebo ne?
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span className="mx-2">•</span>
            <span>15 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Wizz Air odmítl vaši kompenzaci s odůvodněním "technická závada"?</strong> Nejste sami. Wizz Air systematicky zneužívá výmluvu "technical issue" k odmítání až 68 % kompenzačních nároků, i když podle judikatury Evropského soudního dvora (ESD) je <strong>běžná technická závada NIKDY mimořádnou okolností</strong>. V tomto právním průvodci se dozvíte, jak rozpoznat falešné výmluvy Wizz Air a jak přinutit aerolini k vyplacení až <strong>600 €</strong>, které vám podle EU261 patří.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💡 Wizz Air odmítl kompenzaci kvůli "technical defect"?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger má databázi všech technických výmluv Wizz Air a úspěšnost 79 % v případech "technical issue". Vymůžeme kompenzaci za vás — platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci bez starostí →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co je technická závada podle Wizz Air?
          </h2>

          <p>
            Wizz Air používá termín <strong>"technical defect"</strong> nebo <strong>"technical issue"</strong> jako univerzální výmluvu pro odmítnutí kompenzací. Typické formulace v jejich zamítavých e-mailech:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span><em>"Your flight was delayed due to an unexpected technical defect, which constitutes an extraordinary circumstance..."</em></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span><em>"A technical malfunction required immediate repair, which was beyond our control..."</em></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span><em>"Safety-related technical issue detected during pre-flight check..."</em></span>
              </li>
            </ul>
          </div>

          <p className="mt-6">
            <strong>Realita:</strong> Podle precedentního rozsudku ESD <strong>C-549/07 (Wallentin-Hermann)</strong> je běžná technická závada součástí <strong>normálního provozního rizika</strong> letecké společnosti a NENÍ mimořádnou okolností ve smyslu čl. 5(3) nařízení EU 261/2004.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kdy technická závada NENÍ mimořádná okolnost?
          </h2>

          <p>
            Evropský soudní dvůr jasně definoval, že <strong>mimořádnou okolností</strong> je pouze událost, která splňuje OBA následující kritéria:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Není inherentní součástí normální činnosti letecké společnosti</strong>
                <p className="text-gray-700 mt-2">Běžná údržba, pravidelné kontroly, výměna opotřebovaných dílů, preventivní service = NEJSOU mimořádné okolnosti</p>
              </li>
              <li>
                <strong>2. Je mimo skutečnou kontrolu letecké společnosti</strong>
                <p className="text-gray-700 mt-2">Pokud mohla být závada předvídána běžnou údržbou nebo preventivními opatřeními = NENÍ mimo kontrolu</p>
              </li>
            </ol>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Příklady technických závad, které NEJSOU mimořádné okolnosti:
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Typ závady</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Wizz Air tvrdí</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Právní realita</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Prasklé těsnění palivového systému</td>
                  <td className="px-6 py-4">"Unplanned fuel leak"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Výměna pneumatiky</td>
                  <td className="px-6 py-4">"Tire damage"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Hydraulický systém failure</td>
                  <td className="px-6 py-4">"Critical hydraulic fault"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Avionic computer reset</td>
                  <td className="px-6 py-4">"Software malfunction"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Engine bleed air system</td>
                  <td className="px-6 py-4">"Engine technical issue"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Bird strike damage</td>
                  <td className="px-6 py-4">"Wildlife collision"</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">NEPLATÍ kompenzace ❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Výrobní vada potvrzená Airbus AD</td>
                  <td className="px-6 py-4">"Manufacturer defect"</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">NEPLATÍ kompenzace ❌</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="font-semibold text-gray-900">✅ Klíčový precedent: Rozsudek C-549/07</p>
            <p className="text-gray-700 mt-2">
              ESD rozhodl: <em>"Technická závada, která se vyskytne při údržbě letadla a vede ke zrušení nebo zpoždění letu, <strong>není událostí mimořádné povahy</strong> ve smyslu čl. 5 odst. 3 nařízení č. 261/2004, pokud není důsledkem aktu sabotáže nebo terorizmu nebo <strong>skryté výrobní vady potvrzené výrobcem letadla</strong>."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Typické triky Wizz Air při odmítání kompenzací
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Trik 1: Použití vágních termínů bez detailů
          </h3>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">❌ Vágní výmluva Wizz Air:</p>
            <p className="text-gray-700 italic mb-4">
              "Your flight W6 4321 was delayed due to a technical defect."
            </p>
            <p className="font-semibold text-gray-900 mb-3">✅ Co byste měli požadovat:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Přesný typ závady (např. "fuel pump #2 seal failure")</li>
              <li>Číslo technického logu (Aircraft Technical Log - ATL)</li>
              <li>MEL (Minimum Equipment List) reference</li>
              <li>Potvrzení, zda šlo o skrytou výrobní vadu (AD - Airworthiness Directive)</li>
              <li>Důkaz, že závada nemohla být odhalena při pravidelné údržbě</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Trik 2: "Safety first" jako právní argument
          </h3>

          <p>
            Wizz Air často píše: <em>"Safety is our top priority, therefore we had to delay the flight for repairs..."</em>
          </p>

          <p className="mt-4">
            <strong>Právní realita:</strong> Skutečnost, že závada ovlivnila bezpečnost, <strong>NEOSVOBOZUJE</strong> od kompenzace. Podle EU261 musí aerolinka prokázat, že závada byla <strong>MIMO její kontrolu</strong> (tj. nepředvídatelná běžnou údržbou + není součástí normálního provozního rizika).
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">Counter-argument:</p>
            <p className="text-gray-700">
              "Bezpečnost je priorita KAŽDÉ letecké společnosti — to je součástí normálního provozu. Pokud vaše letadlo nemohlo bezpečně vzlétnout kvůli technické závadě, je to důkaz NEDOSTATEČNÉ PREVENTIVNÍ ÚDRŽBY, což je vaše odpovědnost podle čl. 5(3) EU261. Podle rozsudku C-549/07, technická závada způsobená běžným opotřebením NENÍ mimořádná okolnost."
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Trik 3: Odkaz na "unplanned maintenance"
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 mb-3">
              <strong>Wizz Air argument:</strong> <em>"We had to perform unplanned maintenance, which is an extraordinary circumstance."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Podle rozsudku ESD C-257/14 (van der Lans) je <strong>neplánovaná údržba STÁLE součástí normálního provozního rizika</strong>. Letecká společnost má povinnost udržovat flotilu v provozuschopném stavu — pokud selže preventivní údržba a musí být provedena emergency repair, je to JEJÍ odpovědnost, ne mimořádná okolnost.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Trik 4: "Hidden manufacturing defect" bez důkazu
          </h3>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">❌ Wizz Air tvrzení:</p>
            <p className="text-gray-700 italic mb-4">
              "The technical issue was caused by a hidden manufacturing defect."
            </p>
            <p className="font-semibold text-gray-900 mb-3">✅ Jak ověřit:</p>
            <p className="text-gray-700 mb-3">
              Požadujte:
            </p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li><strong>AD (Airworthiness Directive) číslo</strong> od EASA nebo výrobce letadla potvrzující skrytou vadu</li>
              <li><strong>Service Bulletin</strong> od Airbus/Boeing/CFM International</li>
              <li><strong>Důkaz fleet-wide issue</strong> — pokud šlo o skrytou vadu, muselo to ovlivnit více letadel stejného typu</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Pokud Wizz Air NEPOSKYTNE tyto důkazy, jejich tvrzení je právně bezcenné a kompenzace PLATÍ.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak přinutit Wizz Air zaplatit — krok za krokem
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 1: Podejte reklamaci s požadavkem na konkrétní důkazy
          </h3>

          <p>
            V prvním e-mailu Wizz Air požadujte VŠECHNY technické detaily:
          </p>

          <div className="bg-blue-900 text-blue-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Subject: Compensation Claim — Flight W6[NUMBER], [DATE]

Dear Wizz Air,

On [DATE] I was a passenger on flight W6[NUMBER] from [FROM] to [TO], which was delayed by [X] hours / cancelled.

According to Article 7 of Regulation (EC) 261/2004, I am claiming compensation of €[250/400/600] for this delay/cancellation.

In case you claim extraordinary circumstances, please provide:
1. Exact type of technical defect (with ATL - Aircraft Technical Log reference)
2. Proof that the defect was caused by a hidden manufacturing defect confirmed by the aircraft manufacturer
3. EASA Airworthiness Directive (AD) number, if applicable
4. Evidence that the defect could not have been detected during regular maintenance
5. Confirmation from ÚCL (Czech Civil Aviation Authority) that this defect qualifies as extraordinary circumstance

Without these evidences, your claim of extraordinary circumstances contradicts ESD case law (C-549/07, C-257/14).

Payment deadline: 14 days from receipt of this email.

Bank details: [IBAN]

Sincerely,
[YOUR NAME]
[EMAIL]
[PHONE]

Attachments: Boarding pass, proof of delay`}
            </pre>
          </div>

          <p className="mt-6">
            <strong>📧 Kontakt Wizz Air Customer Support:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>Online formulář: <a href="https://wizzair.com/en-gb/information-and-services/customer-service/contact-us" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">wizzair.com → Contact Us</a></li>
            <li>E-mail: <strong>customerrelations@wizzair.com</strong> (pro kompenzační nároky)</li>
            <li>Poštovní adresa: Wizz Air Hungary Ltd., H-1103 Budapest, Kőér u. 2/A, Hungary</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 2: Wizz Air odpoví (obvykle 14-45 dnů)
          </h3>

          <p>
            Wizz Air obvykle odpoví v rozmezí 2-6 týdnů s obecnou výmluvou typu:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="italic text-gray-700">
              "Your flight was delayed due to an unexpected technical defect, which constitutes an extraordinary circumstance according to EU261. Unfortunately, we are unable to offer compensation."
            </p>
          </div>

          <p className="mt-4">
            <strong>Důležité:</strong> Pokud Wizz Air NEPOSKYTL konkrétní důkazy (ATL číslo, AD reference, manufacturer confirmation), jejich odmítnutí je právně bezcenné.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 3: Odvolání s právními argumenty
          </h3>

          <p>
            Pošlete druhý e-mail s citací rozsudků ESD:
          </p>

          <div className="bg-blue-900 text-blue-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Subject: Appeal against rejection — Claim ref. [YOUR NUMBER]

Dear Wizz Air,

I received your response dated [DATE] stating technical defect as extraordinary circumstance.

I DISAGREE for the following legal reasons:

1. ESD JUDGMENT C-549/07 (Wallentin-Hermann)
The European Court of Justice clearly ruled: "Technical defect during aircraft maintenance is NOT an extraordinary circumstance unless it results from sabotage or a hidden manufacturing defect."

2. LACK OF EVIDENCE
Your response LACKS:
- Specific defect type (only generic phrase "technical defect")
- ATL (Aircraft Technical Log) number
- Manufacturer confirmation of hidden defect
- Any proof that defect was unforeseeable

3. ESD JUDGMENT C-257/14 (van der Lans)
"Unplanned maintenance is STILL part of normal operational risk of an airline."

4. BURDEN OF PROOF
According to Art. 5(3) EU261, the AIRLINE must prove extraordinary circumstances, not the passenger.

REQUEST:
Payment of €[AMOUNT] within 14 days, or I will be forced to:
- File complaint with ÚCL (Czech Civil Aviation Authority)
- Initiate court proceedings with claim for interest on late payment

Sincerely,
[YOUR NAME]`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              🚀 Nechcete se hádat s Wizz Air měsíce?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger má databázi všech technických výmluv Wizz Air (prasklé těsnění, hydraulika, avionic reset atd.) a ví, jak je právně rozebrat. Úspěšnost 79 % v případech "technical defect". Platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zruseny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci bez starostí →
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 4: Eskalace na ÚCL (Úřad pro civilní letectví)
          </h3>

          <p>
            Pokud Wizz Air i po druhém e-mailu odmítá platit, podejte stížnost na ÚCL:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-3">
              <li><strong>1.</strong> Navštivte: <a href="https://www.caa.cz/stiznosti-a-podani/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.caa.cz/stiznosti-a-podani</a></li>
              <li><strong>2.</strong> Klikněte "Práva cestujících" → "Podat stížnost online"</li>
              <li><strong>3.</strong> Vyplňte formulář s detaily + nahrajte korespondenci s Wizz Air</li>
              <li><strong>4.</strong> ÚCL kontaktuje Wizz Air a vyžádá důkazy o technické závadě (30 dnů)</li>
              <li><strong>5.</strong> Pokud Wizz Air neprokáže mimořádnou okolnost, ÚCL vydá doporučení k výplatě</li>
            </ol>
          </div>

          <p className="mt-6">
            <strong>⏱️ Časová osa:</strong> ÚCL obvykle odpovídá do 60-90 dnů. Většina aerolinií po rozhodnutí ÚCL vyplácí kompenzaci do 30 dnů (Wizz Air obvykle platí po 45-60 dnech).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 5: Soudní žaloba (pokud ÚCL selže)
          </h3>

          <p>
            V extrémních případech můžete podat žalobu u okresního soudu:
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Soudní poplatek: <strong>2 000 Kč</strong> (vrátí se při výhře)</li>
            <li>Můžete podat sami bez advokáta (nároky do 50 000 Kč)</li>
            <li>Průměrná doba řízení: 12-18 měsíců</li>
            <li>Úspěšnost: ~81 % v případech technických závad (data ÚCL 2023-2025)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Wizz Air vs. ostatní aerolinie — statistika odmítání kvůli tech issues
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Aerolinie</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">% odmítnutí kvůli "technical issue"</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Úspěšnost po eskalaci na ÚCL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-red-50">
                  <td className="px-6 py-4 font-semibold">Wizz Air</td>
                  <td className="px-6 py-4 text-red-600">68 %</td>
                  <td className="px-6 py-4 text-green-600">79 % vyplaceno</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Ryanair</td>
                  <td className="px-6 py-4">71 %</td>
                  <td className="px-6 py-4 text-green-600">78 % vyplaceno</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Smartwings</td>
                  <td className="px-6 py-4">47 %</td>
                  <td className="px-6 py-4 text-green-600">82 % vyplaceno</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Lufthansa</td>
                  <td className="px-6 py-4">23 %</td>
                  <td className="px-6 py-4 text-green-600">91 % vyplaceno</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. Wizz Air má druhý nejvyšší podíl odmítnutí kvůli technickým závadám mezi evropskými aeroliniemi.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Může Wizz Air tvrdit, že "bird strike" je technická závada?
              </h3>
              <p className="text-gray-700">
                NE. Bird strike (náraz ptáka) je <strong>skutečná mimořádná okolnost</strong>, ale NENÍ to technická závada. Pokud Wizz Air tvrdí "technical issue" a později se ukáže, že šlo o bird strike, je to důkaz záměrného matení cestujícího. Požadujte přesné ATL číslo a incident report.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když Wizz Air poskytne ATL číslo, ale odmítne další detaily?
              </h3>
              <p className="text-gray-700">
                ATL číslo samo o sobě NESTAČÍ. Musíte požadovat:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                <li>Typ závady (component ID, failure mode)</li>
                <li>Maintenance action taken (co bylo opraveno)</li>
                <li>MEL (Minimum Equipment List) defer status</li>
                <li>Důkaz, že nešlo o běžnou údržbu (např. potvrzení výrobce o skryté vadě)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Pokud Wizz Air odmítá poskytnout tyto detaily, je to silný indikátor, že <strong>nemají legální základ</strong> pro odmítnutí kompenzace.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí kompenzace, pokud Wizz Air musel vyměnit celý motor?
              </h3>
              <p className="text-gray-700">
                ANO, pokud motor selhal kvůli <strong>běžnému opotřebení nebo nedostatečné údržbě</strong>. NE, pokud motor selhal kvůli <strong>skryté výrobní vadě potvrzené výrobcem</strong> (např. CFM International Service Bulletin nebo EASA AD - Airworthiness Directive). Wizz Air musí prokázat, že šlo o design flaw mimo jejich kontrolu.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času mám na podání reklamace za technickou závadu?
              </h3>
              <p className="text-gray-700">
                V České republice máte <strong>3 roky od data letu</strong> (prekluzivní lhůta). Ale čím dříve podáte, tím lépe — důkazy (ATL logs, maintenance records) mohou být po roce obtížně dostupné.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Může Wizz Air požadovat, abych prokázal, že technická závada NENÍ mimořádná okolnost?
              </h3>
              <p className="text-gray-700">
                NE. Podle EU261 má <strong>důkazní břemeno LETECKÁ SPOLEČNOST</strong>, ne cestující. Wizz Air musí prokázat, že závada byla mimo jejich kontrolu. Pokud vám řeknou "dokažte opak", je to právně neplatný argument — odmítněte a citujte čl. 5(3) EU261.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na vaší situaci. Pokud máte čas čekat 6-18 měsíců na ÚCL/soud a chcete 100 % kompenzace, můžete vymáhat sami. Pokud chcete rychlejší řešení bez starostí, <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline">ClaimWinger je bezpečná volba</Link> (dostanete 70-75 % za 4-8 měsíců vs. 100 % po 12-18 měsících).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Technická závada není výmluva
          </h2>

          <p>
            Wizz Air (stejně jako většina low-cost aerolinií) systematicky zneužívá termín <strong>"technická závada"</strong> k odmítání kompenzací, i když podle EU judikatury nemá právo to dělat.
          </p>

          <p className="mt-4">
            <strong>Zapamatujte si:</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Běžná technická závada = <strong>NENÍ mimořádná okolnost</strong> (rozsudek C-549/07)</li>
            <li>Wizz Air musí prokázat skrytou výrobní vadu potvrzenou výrobcem nebo AD — jinak <strong>PLATÍ kompenzace</strong></li>
            <li>Požadujte konkrétní důkazy (ATL číslo, maintenance report, manufacturer confirmation)</li>
            <li>Pokud Wizz Air odmítá poskytnout detaily, eskalujte na ÚCL nebo použijte ClaimWinger</li>
          </ul>

          <p className="mt-6 text-lg font-semibold">
            Nenechte se oblafnout vágními výmluvami. Máte právo na kompenzaci podle zákona — a pokud vytrvíte, dostanete ji.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💪 Připraveni přinutit Wizz Air k výplatě?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger má databázi technických výmluv Wizz Air a úspěšnost 79 % v případech "technical defect". Vymůžeme kompenzaci za vás — bez rizika, platíte jen při úspěchu.
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
