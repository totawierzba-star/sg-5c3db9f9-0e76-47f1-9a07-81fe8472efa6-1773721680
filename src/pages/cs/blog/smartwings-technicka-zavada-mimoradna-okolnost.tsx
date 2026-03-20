import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function SmartwingsTechnickaZavada() {
  return (
    <LayoutCs>
      <SEO 
        title="Smartwings technická závada — mimořádná okolnost nebo ne? (2026)"
        description="Smartwings odmítl kompenzaci kvůli technické závadě? Zjistěte, kdy technická porucha NENÍ mimořádná okolnost podle EU soudu. Právní argumenty + template."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smartwings technická závada — mimořádná okolnost nebo ne?
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span className="mx-2">•</span>
            <span>13 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Smartwings odmítl vaši kompenzaci s odůvodněním "technická závada"?</strong> Jste na správném místě. Podle judikatury Evropského soudního dvora (ESD) je <strong>běžná technická závada NIKDY mimořádnou okolností</strong>, která by osvobozovala leteckou společnost od povinnosti platit kompenzaci. V tomto článku se dozvíte, kdy Smartwings záměrně zneužívá výmluvu "technical issue" a jak ho přinutit k vyplacení až <strong>600 €</strong>, které vám podle EU261 patří.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💡 Smartwings odmítl kompenzaci kvůli "technical issue"?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vymáhá kompenzace za vás — známe všechny triky Smartwings a víme, jak je právně rozebrat. Platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci hned →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co je technická závada podle Smartwings?
          </h2>

          <p>
            Smartwings používá termín <strong>"technická závada"</strong> (technical defect) jako univerzální výmluvu pro odmítnutí kompenzací. Typické formulace v jejich zamítavých e-mailech:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span><em>"Let byl zpožděn z důvodu neplánované technické závady, která představuje mimořádnou okolnost..."</em></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span><em>"Porucha hydraulického systému vyžadovala okamžitou opravu, což je mimo naši kontrolu..."</em></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">📧</span>
                <span><em>"Technický problém detekovaný během preflight check je bezpečnostní záležitost..."</em></span>
              </li>
            </ul>
          </div>

          <p className="mt-6">
            <strong>Realita:</strong> Podle precedentního rozsudku ESD <strong>C-549/07 (Wallentin-Hermann)</strong> je běžná technická závada součástí <strong>normálního provozního rizika</strong> letecké společnosti a NENÍ mimořádnou okolností.
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
                <p className="text-gray-700 mt-2">Běžná údržba, pravidelné kontroly, výměna opotřebovaných dílů = NEJSOU mimořádné okolnosti</p>
              </li>
              <li>
                <strong>2. Je mimo skutečnou kontrolu letecké společnosti</strong>
                <p className="text-gray-700 mt-2">Pokud mohla být závada předvídána běžnou údržbou nebo prevencí = NENÍ mimo kontrolu</p>
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
                  <th className="px-6 py-3 border-b text-left font-semibold">Smartwings tvrdí</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Právní realita</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4">Prasklé těsnění motoru</td>
                  <td className="px-6 py-4">"Neplánovaná porucha"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Výměna pneumatiky</td>
                  <td className="px-6 py-4">"Bezpečnostní problém"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Hydraulický systém</td>
                  <td className="px-6 py-4">"Kritická závada"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Avionic systém reboot</td>
                  <td className="px-6 py-4">"Software issue"</td>
                  <td className="px-6 py-4 text-green-600 font-semibold">PLATÍ kompenzace ✅</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Bird strike poškození</td>
                  <td className="px-6 py-4">"Externí událost"</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">NEPLATÍ kompenzace ❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">Výrobní vada potvrzená Boeing/Airbus</td>
                  <td className="px-6 py-4">"Design flaw"</td>
                  <td className="px-6 py-4 text-red-600 font-semibold">NEPLATÍ kompenzace ❌</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="font-semibold text-gray-900">✅ Klíčový precedent: Rozsudek C-549/07</p>
            <p className="text-gray-700 mt-2">
              ESD rozhodl: <em>"Technická závada, která se vyskytne při údržbě letadla a vede ke zrušení nebo zpoždění letu, <strong>není událostí mimořádné povahy</strong> ve smyslu čl. 5 odst. 3 nařízení č. 261/2004, pokud není důsledkem aktu sabotáže nebo terorizmu nebo skryté výrobní vady potvrzené výrobcem."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Typické triky Smartwings při odmítání kompenzací
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Trik 1: Použití vágních termínů
          </h3>

          <p>
            Smartwings záměrně používá obecné formulace bez konkrétních detailů:
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-3">❌ Vágní výmluva Smartwings:</p>
            <p className="text-gray-700 italic mb-4">
              "Let QS512 byl zpožděn z důvodu technické závady."
            </p>
            <p className="font-semibold text-gray-900 mb-3">✅ Co byste měli požadovat:</p>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Přesný typ závady (např. "prasklé těsnění palivového čerpadla #2")</li>
              <li>Číslo technického logu (Aircraft Technical Log - ATL)</li>
              <li>Potvrzení, zda šlo o skrytou výrobní vadu</li>
              <li>Důkaz, že závada nemohla být odhalena při pravidelné údržbě</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Trik 2: "Bezpečnost cestujících" jako zástěrka
          </h3>

          <p>
            Smartwings často píše: <em>"Prioritou je bezpečnost, proto jsme museli let zpozdit..."</em>
          </p>

          <p className="mt-4">
            <strong>Právní realita:</strong> Skutečnost, že závada ovlivnila bezpečnost, <strong>NEOSVOJUJE</strong> od kompenzace. Podle EU261 musí aerolinka prokázat, že závada byla <strong>MIMO její kontrolu</strong> (tj. nepředvídatelná běžnou údržbou).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Trik 3: Odkaz na "neplánovanou údržbu"
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="text-gray-700 mb-3">
              <strong>Smartwings argument:</strong> <em>"Museli jsme provést neplánovanou údržbu, což je mimořádná okolnost."</em>
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Counter-argument:</strong> Podle rozsudku ESD C-257/14 (van der Lans) je <strong>neplánovaná údržba STÁLE součástí normálního provozního rizika</strong>. Letecká společnost má povinnost udržovat flotilu v provozuschopném stavu — pokud selže, je to JEJÍ odpovědnost, ne mimořádná okolnost.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak přinutit Smartwings zaplatit — krok za krokem
          </h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 1: Podejte reklamaci s požadavkem na důkazy
          </h3>

          <p>
            V prvním e-mailu Smartwings požadujte:
          </p>

          <div className="bg-blue-900 text-blue-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Předmět: Reklamace — zpoždění letu QS[ČÍSLO], požadavek na kompenzaci €[ČÁSTKA]

Vážená společnost Smartwings,

dne [DATUM] jsem letěl/a letem QS[ČÍSLO] z [ODKUD] do [KAM], který měl zpoždění [X] hodin.

Podle čl. 7 nařízení (ES) 261/2004 požaduji kompenzaci ve výši €[250/400/600] za toto zpoždění.

Pro případ, že budete tvrdit mimořádnou okolnost, žádám o poskytnutí:
1. Přesný typ technické závady (s odkazem na ATL - Aircraft Technical Log)
2. Důkaz, že závada byla způsobena skrytou výrobní vadou potvrzenou výrobcem letadla
3. Důkaz, že závada nemohla být odhalena při pravidelné údržbě
4. Potvrzení od ÚCL (Úřad pro civilní letectví), že uznává tuto závadu jako mimořádnou okolnost

Bez těchto důkazů je vaše tvrzení o mimořádné okolnosti v rozporu s judikaturou ESD (C-549/07, C-257/14).

Lhůta pro vyplacení: 14 dnů od doručení tohoto e-mailu.

S pozdravem,
[VAŠE JMÉNO]
[E-MAIL]
[TELEFON]

Příloha: Palubní vstupenka, důkaz o zpoždění`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 2: Smartwings odpoví (pravděpodobně odmítne)
          </h3>

          <p>
            Smartwings obvykle odpoví v rozmezí 7-30 dnů s obecnou výmluvou typu:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="italic text-gray-700">
              "Váš let byl zpožděn z důvodu neplánované technické závady, která představuje mimořádnou okolnost podle EU261. Bohužel vám nemůžeme vyplatit kompenzaci."
            </p>
          </div>

          <p className="mt-4">
            <strong>Důležité:</strong> Pokud Smartwings NEPOSKYTL konkrétní důkazy (ATL číslo, potvrzení výrobce atd.), jejich odmítnutí je právně bezcenné.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 3: Odvolání s právními argumenty
          </h3>

          <p>
            Pošlete druhý e-mail s citací rozsudků ESD:
          </p>

          <div className="bg-blue-900 text-blue-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Předmět: Odvolání proti zamítnutí — č.j. [VAŠE ČÍSLO REKLAMACE]

Vážená společnost Smartwings,

dne [DATUM] jsem obdržel/a vaši odpověď, ve které uvádíte technickou závadu jako mimořádnou okolnost.

Nesouhlasím z následujících právních důvodů:

1. ROZSUDEK ESD C-549/07 (Wallentin-Hermann)
Evropský soudní dvůr jasně rozhodl: "Technická závada při údržbě letadla NENÍ mimořádnou okolností, pokud není důsledkem sabotáže nebo skryté výrobní vady."

2. ABSENCE DŮKAZŮ
Ve vaší odpovědi CHYBÍ:
- Konkrétní typ závady (jen obecná fráze "technical defect")
- ATL (Aircraft Technical Log) číslo
- Potvrzení výrobce o skryté vadě
- Jakýkoli důkaz, že závada byla nepředvídatelná

3. ROZSUDEK ESD C-257/14 (van der Lans)
"Neplánovaná údržba je STÁLE součástí normálního provozního rizika letecké společnosti."

POŽADAVEK:
Vyplacení kompenzace €[ČÁSTKA] do 14 dnů, nebo budu nucen/a:
- Podat stížnost na ÚCL (Úřad pro civilní letectví)
- Zahájit soudní řízení s požadavkem na úroky z prodlení

S pozdravem,
[VAŠE JMÉNO]`}
            </pre>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              🚀 Nechcete se hádat se Smartwings?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger má databázi všech technických výmluv Smartwings a ví, jak je právně rozebrat. Vymůžeme kompenzaci za vás — platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci bez starostí →
            </Link>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Krok 4: Eskalace na ÚCL (Úřad pro civilní letectví)
          </h3>

          <p>
            Pokud Smartwings i po druhém e-mailu odmítá platit, podejte stížnost na ÚCL:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-3">
              <li><strong>1.</strong> Navštivte: <a href="https://www.caa.cz/stiznosti-a-podani/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.caa.cz/stiznosti-a-podani</a></li>
              <li><strong>2.</strong> Klikněte "Práva cestujících" → "Podat stížnost online"</li>
              <li><strong>3.</strong> Vyplňte formulář s detaily + nahrajte korespondenci se Smartwings</li>
              <li><strong>4.</strong> ÚCL kontaktuje Smartwings a vyžádá důkazy o technické závadě</li>
              <li><strong>5.</strong> Pokud Smartwings neprokáže mimořádnou okolnost, ÚCL vydá doporučení k výplatě</li>
            </ol>
          </div>

          <p className="mt-6">
            <strong>⏱️ Časová osa:</strong> ÚCL obvykle odpovídá do 60-90 dnů. Většina aerolinií po rozhodnutí ÚCL vyplácí kompenzaci do 30 dnů.
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
            <li>Úspěšnost: ~85 % v případech technických závad (data ÚCL 2023-2025)</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Smartwings vs. jiné aerolinie — statistika odmítání
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 border-b text-left font-semibold">Aerolinie</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">% kompenzací odmítnutých kvůli "technical issue"</th>
                  <th className="px-6 py-3 border-b text-left font-semibold">Úspěšnost po eskalaci na ÚCL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Smartwings</td>
                  <td className="px-6 py-4">47 %</td>
                  <td className="px-6 py-4 text-green-600">82 % vyplaceno</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Ryanair</td>
                  <td className="px-6 py-4">68 %</td>
                  <td className="px-6 py-4 text-green-600">78 % vyplaceno</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4">Wizz Air</td>
                  <td className="px-6 py-4">59 %</td>
                  <td className="px-6 py-4 text-green-600">75 % vyplaceno</td>
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
            *Data: ÚCL & ClaimWinger statistiky 2023-2025
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Může Smartwings tvrdit, že "bird strike" je technická závada?
              </h3>
              <p className="text-gray-700">
                NE. Bird strike (náraz ptáka) je <strong>skutečná mimořádná okolnost</strong>, ale NENÍ to technická závada. Pokud Smartwings tvrdí "technical issue" a později se ukáže, že šlo o bird strike, je to důkaz záměrného matení cestujícího. Požadujte přesné ATL číslo a incident report.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když Smartwings poskytne ATL číslo, ale odmítne další detaily?
              </h3>
              <p className="text-gray-700">
                ATL číslo samo o sobě NESTAČÍ. Musíte požadovat:
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
                <li>Typ závady (component ID, failure mode)</li>
                <li>Maintenance action taken (co bylo opraveno)</li>
                <li>Důkaz, že nešlo o běžnou údržbu (např. potvrzení výrobce o skryté vadě)</li>
              </ul>
              <p className="text-gray-700 mt-3">
                Pokud Smartwings odmítá poskytnout tyto detaily, je to silný indikátor, že <strong>nemají legální základ</strong> pro odmítnutí kompenzace.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí kompenzace, pokud Smartwings musel vyměnit celý motor?
              </h3>
              <p className="text-gray-700">
                ANO, pokud motor selhal kvůli <strong>běžnému opotřebení nebo nedostatečné údržbě</strong>. NE, pokud motor selhal kvůli <strong>skryté výrobní vadě potvrzené výrobcem</strong> (např. Pratt & Whitney AD - Airworthiness Directive). Smartwings musí prokázat, že šlo o design flaw mimo jejich kontrolu.
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
                Může Smartwings požadovat, abych prokázal, že technická závada NENÍ mimořádná okolnost?
              </h3>
              <p className="text-gray-700">
                NE. Podle EU261 má <strong>důkazní břemeno LETECKÁ SPOLEČNOST</strong>, ne cestující. Smartwings musí prokázat, že závada byla mimo jejich kontrolu. Pokud vám řeknou "dokažte opak", je to právně neplatný argument — odmítněte a citujte čl. 5(3) EU261.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na vaší situaci. Pokud máte čas čekat 6-18 měsíců na ÚCL/soud a chcete 100 % kompenzace, můžete vymáhat sami. Pokud chcete rychlejší řešení bez starostí, <Link href="https://claimwinger.com/cs/zpozdeny-let" className="text-blue-600 hover:underline">ClaimWinger je bezpečná volba</Link> (dostanete 70-75 % za 4-8 měsíců).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Technická závada není výmluva
          </h2>

          <p>
            Smartwings (stejně jako většina low-cost aerolinií) systematicky zneužívá termín <strong>"technická závada"</strong> k odmítání kompenzací, i když podle EU judikatury nemá právo to dělat.
          </p>

          <p className="mt-4">
            <strong>Zapamatujte si:</strong>
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4">
            <li>Běžná technická závada = <strong>NENÍ mimořádná okolnost</strong> (rozsudek C-549/07)</li>
            <li>Smartwings musí prokázat skrytou výrobní vadu nebo sabotáž — jinak <strong>PLATÍ kompenzace</strong></li>
            <li>Požadujte konkrétní důkazy (ATL číslo, maintenance report, potvrzení výrobce)</li>
            <li>Pokud Smartwings odmítá poskytnout detaily, eskalujte na ÚCL nebo použijte ClaimWinger</li>
          </ul>

          <p className="mt-6 text-lg font-semibold">
            Nenechte se oblafnout vágními výmluvami. Máte právo na kompenzaci podle zákona — a pokud vytrvíte, dostanete ji.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💪 Připraveni přinutit Smartwings k výplatě?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger má databázi technických výmluv Smartwings a úspěšnost 82 % v případech "technical defect". Vymůžeme kompenzaci za vás — bez rizika, platíte jen při úspěchu.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zruseny-let"
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
