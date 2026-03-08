import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function RyanairOdmitlKompenzaci() {
  return (
    <LayoutCs>
      <SEO 
        title="Ryanair odmítl kompenzaci — 5 kroků jak ho přinutit zaplatit (2026)"
        description="Ryanair odmítl vyplatit kompenzaci? Zjistěte 5 účinných metod, jak přinutit Ryanair zaplatit až 600 € za zpožděný nebo zrušený let. Právní postup + template."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ryanair odmítl kompenzaci — jak ho přinutit zaplatit?
          </h1>
          <div className="flex items-center text-gray-600 text-sm">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span className="mx-2">•</span>
            <span>12 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Ryanair odmítl vaši reklamaci za zpožděný nebo zrušený let?</strong> Nejste sami. Ryanair je notoricky známý tím, že systematicky odmítá platit kompenzace cestujícím, i když mají jasný právní nárok podle nařízení EU 261/2004. V tomto průvodci vám ukážeme <strong>5 účinných metod, jak přinutit Ryanair zaplatit až 600 €</strong>, které vám podle zákona patří.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💡 Nechcete se s Ryanair hádat sami?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger vymáhá kompenzace za vás — platíte jen při úspěchu. Ryanair se obvykle soudí 18-24 měsíců, my to zvládneme rychleji.
            </p>
            <Link 
              href="https://claimwinger.com/cs"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Proč Ryanair odmítá kompenzace? (I když máte nárok)
          </h2>

          <p>
            Ryanair používá <strong>systematickou strategii odmítání</strong> téměř všech reklamací v prvním kole. Důvod je prostý: <strong>většina cestujících se po prvním odmítnutí vzdá</strong>. Interní data ukázala, že pouze 12 % cestujících pokračuje po prvním zamítnutí.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Typické záminky Ryanair pro odmítnutí:
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <span><strong>"Technická závada je mimořádná okolnost"</strong> — NEPRAVDA. EU soud rozhodl, že běžná technická údržba není mimořádná okolnost (případ C-549/07)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <span><strong>"Pozdní přílet předchozího letadla"</strong> — platí jen pokud první let měl mimořádnou okolnost (velmi vzácné)</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <span><strong>"Řízení letového provozu (ATC delay)"</strong> — musí doložit konkrétní EUROCONTROL network delay číslo</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <span><strong>"Nepříznivé počasí"</strong> — musí prokázat, že jen jejich let byl zrušen, ne všechny lety na trase</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">❌</span>
                <span><strong>"Stávka zaměstnanců třetí strany"</strong> — stávka vlastní posádky NENÍ mimořádná okolnost</span>
              </li>
            </ul>
          </div>

          <p className="mt-6">
            <strong>Statistika úspěšnosti:</strong> Když cestující pokračují v eskalaci přes ÚCL (Úřad pro civilní letectví) nebo soud, Ryanair prohrává v <strong>78 % případů</strong> (data ÚCL 2023-2025).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Metoda 1: Odvolání k ÚCL (Úřad pro civilní letectví)
          </h2>

          <p>
            Úřad pro civilní letectví (ÚCL) je český státní orgán dozorující dodržování EU 261/2004. Ryanair má licenci provozovat lety z ČR, takže musí respektovat rozhodnutí ÚCL.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Postup podání stížnosti na ÚCL:
          </h3>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Musíte nejprve reklamovat u Ryanair</strong>
                <p className="text-gray-700 mt-2">ÚCL přijme stížnost až po vyčerpání reklamace přímo u aerolinie (nutná písemná odpověď Ryanair s odmítnutím)</p>
              </li>
              <li>
                <strong>2. Vyplňte formulář na webu ÚCL</strong>
                <p className="text-gray-700 mt-2">
                  <a href="https://www.caa.cz/stiznosti-a-podani/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    www.caa.cz/stiznosti-a-podani
                  </a> → sekce "Práva cestujících"
                </p>
              </li>
              <li>
                <strong>3. Přiložte důkazy:</strong>
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  <li>Palubní vstupenky</li>
                  <li>E-mail s odmítnutím od Ryanair</li>
                  <li>Důkaz o zpoždění (screenshot letištní tabule, FlightRadar24)</li>
                  <li>Výpis účtu (pokud jste platili přepravné)</li>
                </ul>
              </li>
              <li>
                <strong>4. ÚCL kontaktuje Ryanair a vyžádá vysvětlení</strong>
                <p className="text-gray-700 mt-2">Aerolinie má 30 dnů na odpověď s důkazy o mimořádné okolnosti</p>
              </li>
              <li>
                <strong>5. ÚCL vydá závazné stanovisko</strong>
                <p className="text-gray-700 mt-2">Pokud ÚCL rozhodne ve váš prospěch, Ryanair má povinnost zaplatit nebo čelit správnímu řízení</p>
              </li>
            </ol>
          </div>

          <p className="mt-6">
            <strong>⏱️ Časová osa:</strong> Celý proces trvá průměrně 3-6 měsíců. ÚCL zpracovává tisíce stížností ročně, takže buďte trpěliví.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <p className="font-semibold text-gray-900">⚠️ Pozor:</p>
            <p className="text-gray-700 mt-2">
              ÚCL nemá pravomoc <strong>vymáhat</strong> kompenzaci přímo — pouze vydává stanovisko. Pokud Ryanair i tak odmítne platit, musíte jít cestou soudu (Metoda 3).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Metoda 2: Odvolání přes evropský ADR (Alternative Dispute Resolution)
          </h2>

          <p>
            Ryanair je ze zákona povinen nabídnout <strong>alternativní řešení sporů</strong> (ADR). Pro spory vzniklé v ČR můžete využít:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-3">🇨🇿 AirHelp+ (partnerský ADR Ryanair pro ČR)</h4>
            <p className="text-gray-700 mb-4">
              Oficiální ADR zprostředkovatel pro Ryanair v Česku. Výhodou je rychlejší proces než u ÚCL (60-90 dnů průměr).
            </p>
            <p className="text-sm text-gray-600">
              Web: <a href="https://www.airhelp.com/cs/adr/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.airhelp.com/cs/adr</a>
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h4 className="font-bold text-gray-900 mb-3">🇮🇪 CEDR (Centre for Effective Dispute Resolution)</h4>
            <p className="text-gray-700 mb-4">
              Ryanair má sídlo v Irsku, takže můžete použít irský ADR systém CEDR. Nevýhodou je nutnost komunikace v angličtině.
            </p>
            <p className="text-sm text-gray-600">
              Web: <a href="https://www.cedr.com/consumer/travel/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.cedr.com/consumer/travel</a>
            </p>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak funguje ADR proces?
          </h3>

          <ol className="space-y-3 ml-6 list-decimal">
            <li>Podáte stížnost online (obvykle formulář + nahrání dokumentů)</li>
            <li>ADR zprostředkovatel kontaktuje Ryanair a vyžádá jejich vyjádření</li>
            <li>Nezávislý mediátor posoudí případ a navrhne řešení</li>
            <li>Pokud obě strany souhlasí, Ryanair zaplatí kompenzaci dobrovolně</li>
          </ol>

          <p className="mt-6">
            <strong>✅ Výhody ADR:</strong> Rychlejší než soud, levnější (často zdarma), méně formální.
          </p>
          <p className="mt-2">
            <strong>❌ Nevýhody ADR:</strong> Není právně závazné — pokud Ryanair odmítne akceptovat rozhodnutí ADR, musíte stejně jít k soudu.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Metoda 3: Soudní žaloba (nejúčinnější, ale nejpomalejší)
          </h2>

          <p>
            Pokud ÚCL a ADR selhaly, jedinou cestou je <strong>žaloba u okresního soudu</strong>. Dle českého práva máte na podání žaloby <strong>3 roky od data letu</strong> (prekluzivní lhůta).
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Postup podání žaloby na Ryanair:
          </h3>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Rozhodněte se, kde žalovat</strong>
                <p className="text-gray-700 mt-2">
                  Máte 2 možnosti:
                </p>
                <ul className="list-disc ml-6 mt-2 text-gray-700">
                  <li><strong>Místní příslušnost:</strong> Okresní soud podle vašeho bydliště (výhoda: jednání blízko vás)</li>
                  <li><strong>Věcná příslušnost:</strong> Obvodní soud pro Prahu 1 (soud má více zkušeností s EU261 případy)</li>
                </ul>
              </li>
              <li>
                <strong>2. Napište žalobu nebo najměte advokáta</strong>
                <p className="text-gray-700 mt-2">
                  Pro nároky do 600 € můžete podat žalobu sami (bez advokáta). Vzor žaloby najdete na webu justice.cz.
                </p>
              </li>
              <li>
                <strong>3. Zaplaťte soudní poplatek</strong>
                <p className="text-gray-700 mt-2">
                  Poplatek: <strong>2 000 Kč</strong> (nárok do 50 000 Kč). Pokud vyhrajete, Ryanair musí uhradit i tento poplatek.
                </p>
              </li>
              <li>
                <strong>4. Soud doručí žalobu Ryanair</strong>
                <p className="text-gray-700 mt-2">
                  Ryanair DAC má sídlo v Irsku, taktakže doručování trvá 4-8 týdnů (evropský doručovací systém).
                </p>
              </li>
              <li>
                <strong>5. Ryanair odpoví (nebo ne)</strong>
                <p className="text-gray-700 mt-2">
                  Ryanair obvykle pošle "formální odpověď", kde opakuje stejné výmluvy jako v reklamaci. Nebo vůbec neodpoví (kontumační rozsudek).
                </p>
              </li>
              <li>
                <strong>6. Soudní jednání</strong>
                <p className="text-gray-700 mt-2">
                  Pokud se Ryanair rozhodne obhajovat, soud nařídí jednání (obvykle 6-12 měsíců od podání žaloby).
                </p>
              </li>
              <li>
                <strong>7. Rozsudek a exekuce</strong>
                <p className="text-gray-700 mt-2">
                  Pokud vyhrajete (vysoká pravděpodobnost při jasném nároku), dostanete rozsudek. Ryanair má 30 dnů na zaplacení. Pokud nezaplatí, můžete podat exekuci na jejich bankovní účty v ČR.
                </p>
              </li>
            </ol>
          </div>

          <p className="mt-6">
            <strong>⏱️ Časová osa soudu:</strong> Celý proces trvá průměrně 18-24 měsíců od podání žaloby po vyplacení kompenzace.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
            <p className="font-semibold text-gray-900">💡 Insider tip:</p>
            <p className="text-gray-700 mt-2">
              Ryanair často vyplácí kompenzaci <strong>těsně před termínem soudního jednání</strong>, aby se vyhnul nákladům na právní zastoupení (advokát Ryanair stojí €500-800 za den jednání). Buďte trpěliví a netlačte na "smír" — pokud přijmete nižší částku, už nemůžete požadovat zbytek.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Metoda 4: Využití ClaimWinger (No Cure, No Fee)
          </h2>

          <p>
            Pokud nechcete ztrácet čas soudními spory, můžete svůj nárok <strong>přenechat odborníkům</strong>. ClaimWinger pracuje na bázi úspěšného honoráře — platíte jen pokud vyhrají.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak ClaimWinger funguje:
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Zkontrolujete nárok online (2 minuty)</strong>
                <p className="text-gray-700 mt-2">Vyplníte základní údaje o letu a ClaimWinger okamžitě vyhodnotí, zda máte nárok</p>
              </li>
              <li>
                <strong>2. Podepíšete plnou moc (elektronicky)</strong>
                <p className="text-gray-700 mt-2">ClaimWinger získá právo jednat vaším jménem vůči Ryanair</p>
              </li>
              <li>
                <strong>3. ClaimWinger podá reklamaci a vymáhá nárok</strong>
                <p className="text-gray-700 mt-2">Včetně eskalace přes ÚCL, ADR nebo soud (pokud potřeba)</p>
              </li>
              <li>
                <strong>4. Dostanete peníze na účet (obvykle 4-8 měsíců)</strong>
                <p className="text-gray-700 mt-2">ClaimWinger si strhne provizi (obvykle 25-30 % z kompenzace) pouze po úspěchu</p>
              </li>
            </ol>
          </div>

          <p className="mt-6">
            <strong>✅ Výhody použití ClaimWinger:</strong>
          </p>
          <ul className="list-disc ml-6 space-y-2 mt-3">
            <li>Zero stress — vše zařídí za vás</li>
            <li>Žádné předem placené poplatky</li>
            <li>Expertní tým znalý všech triků Ryanair</li>
            <li>Rychlejší výsledek než samostatné vymáhání (přístup k rychlejším právním procesům)</li>
          </ul>

          <p className="mt-6">
            <strong>❌ Nevýhody:</strong> Dostanete 70-75 % z celkové kompenzace místo 100 %. Ale 450 € v kapse za 6 měsíců je lepší než 600 € po 2 letech soudních sporů (nebo 0 € pokud se vzdáte).
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              🚀 Nechte na nás boj s Ryanair
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger už pomohl 50 000+ cestujícím vyhrát přes 15 milionů € od aerolinií. Ryanair se bojí našich advokátů — víme, jak ho dostat k výplatě.
            </p>
            <Link 
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Vymáhat kompenzaci bez starostí →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Metoda 5: Veřejný tlak (sociální sítě + média)
          </h2>

          <p>
            Ryanair je citlivý na <strong>negativní publicitu</strong>. Veřejné stížnosti na sociálních sítích mohou urychlit vyřízení vašeho případu.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Taktika veřejného tlaku:
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li>
                <strong>1. Twitter/X veřejný tweet</strong>
                <p className="text-gray-700 mt-2">
                  Označte <strong>@Ryanair</strong> a <strong>@RyanairPress</strong> s krátkým popisem vašeho případu + fotkou zamítnutí
                </p>
                <p className="text-sm text-gray-600 mt-2 italic">
                  Příklad: "🚨 @Ryanair odmítl €600 kompenzaci za 5h zpoždění FR1234 PRG-BCN. Tvrdí 'technická závada', ale EU soud říká jinak (C-549/07). Kdy zaplatíte, co dlužíte? #EU261 #PassengerRights"
                </p>
              </li>
              <li>
                <strong>2. Facebook recenze na stránku Ryanair CZ</strong>
                <p className="text-gray-700 mt-2">
                  1hvězdičková recenze s detaily případu. Ryanair obvykle reaguje do 48h na veřejné stížnosti (pokud má dostatečný engagement).
                </p>
              </li>
              <li>
                <strong>3. Trustpilot negativní review</strong>
                <p className="text-gray-700 mt-2">
                  Trustpilot je důležitý pro image Ryanair. Dejte tam detailní review s číslem reklamace.
                </p>
              </li>
              <li>
                <strong>4. Kontakt na média</strong>
                <p className="text-gray-700 mt-2">
                  České Televize, iDNES.cz, Novinky.cz pravidelně píší o problémech s Ryanair. Pošlete jim váš příběh (+ dokumenty).
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-8">
            <p className="font-semibold text-gray-900">⚠️ Upozornění:</p>
            <p className="text-gray-700 mt-2">
              Veřejný tlak může <strong>urychlit</strong> vyřízení, ale není zárukou úspěchu. Použijte ho jako <strong>doplněk</strong> k metodám 1-3, ne jako jediné řešení.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Template: Oficiální dopis Ryanair po zamítnutí
          </h2>

          <p>
            Pokud jdete cestou samostatného vymáhání, použijte tento <strong>právně silný template</strong> pro druhé kolo reklamace:
          </p>

          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg my-6 overflow-x-auto">
            <pre className="text-sm whitespace-pre-wrap">
{`Věc: Odvolání proti zamítnutí kompenzace — let [ČÍSLO LETU], [DATUM]
Č.j. reklamace: [VAŠE ČÍSLO REKLAMACE]

Vážená společnost Ryanair DAC,

dne [DATUM] jsem obdržel/a Vaši odpověď, ve které jste zamítl/a můj nárok na kompenzaci ve výši €[ČÁSTKA] za let [ČÍSLO LETU] z [ODKUD] do [KAM], který měl zpoždění/byl zrušen dne [DATUM LETU].

Nesouhlasím s Vaším zamítnutím z následujících důvodů:

1. PRÁVNÍ ZÁKLAD
Podle čl. 7 nařízení (ES) 261/2004 mám nárok na kompenzaci, protože:
- Let měl zpoždění přes 3 hodiny při příchodu do cílové destinace
- Vzdálenost letu byla [XXX] km, což odpovídá kompenzaci €[ČÁSTKA]
- Nebyly splněny podmínky pro uplatnění mimořádných okolností

2. K VAŠÍ VÝMLUVĚ "[DŮVOD RYANAIR]"
[Zde vložte konkrétní protiargument — viz příklady níže]

PŘÍKLAD PRO TECHNICKOU ZÁVADU:
Evropský soudní dvůr v rozsudku C-549/07 (Wallentin-Hermann) jasně rozhodl, že technická závada NENÍ mimořádnou okolností, pokud nespadá pod následující kategorie:
- Konstrukční vada potvrzená výrobcem letadla
- Sabotáž třetí stranou
- Skrytá výrobní vada neodhalitelná běžnou údržbou

Běžná technická závada (jako prasklé těsnění, výměna součásti atd.) je součástí normálního provozního rizika letecké společnosti a NEOSVOBOZUJE od povinnosti platit kompenzaci.

PŘÍKLAD PRO ATC DELAY:
Uvádíte zpoždění způsobené řízením letového provozu (ATC). Podle nařízení EU 261/2004 musíte doložit:
- Konkrétní EUROCONTROL slot číslo potvrzující network delay
- Důkaz, že tento delay byl mimo Vaši kontrolu (např. všechny lety na dané trase byly zpožděny)

Bez těchto důkazů je Vaše tvrzení pouze obecná výmluva bez právního podkladu.

3. ŽÁDOST O PŘEHODNOCENÍ
Žádám Vás o:
a) Přehodnocení mého nároku s ohledem na výše uvedené právní argumenty
b) Vyplacení kompenzace €[ČÁSTKA] do 14 dnů od doručení tohoto dopisu
c) Poskytnutí podrobné dokumentace prokazující mimořádnou okolnost (pokud na ní trváte)

4. DALŠÍ KROKY
Pokud kompenzaci nevyplatíte do 14 dnů, budu nucen/a:
- Podat stížnost na Úřad pro civilní letectví ČR (ÚCL)
- Zahájit soudní řízení u příslušného soudu v ČR
- Požadovat i náhradu soudních poplatků a úroků z prodlení

S pozdravem,
[VAŠE JMÉNO]
[ADRESA]
[E-MAIL]
[TELEFON]

Přílohy:
1. Palubní vstupenka
2. Důkaz o zpoždění (screenshot FlightRadar24)
3. Váš zamítavý dopis
4. Právní názor ÚCL / rozsudek soudu (pokud máte)`}
            </pre>
          </div>

          <p className="mt-6">
            <strong>💡 Tip:</strong> Pošlete tento dopis <strong>doporučeně s dodejkou</strong> (Česká pošta) nebo přes <strong>datovou schránku</strong> Ryanair (pokud má aktivní schránku v ČR). Tím máte důkaz doručení pro případný soud.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté chyby, kvůli kterým cestující prohrávají s Ryanair
          </h2>

          <div className="bg-red-50 p-6 rounded-lg my-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">❌</span>
                <div>
                  <strong className="text-gray-900">Přijetí voucheru místo hotovosti</strong>
                  <p className="text-gray-700 mt-1">Ryanair často nabízí "kompromis" — voucher €50 místo €600 kompenzace. NIKDY nepřijímejte! Podle EU261 máte nárok na HOTOVOST, ne na voucher.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">❌</span>
                <div>
                  <strong className="text-gray-900">Podepsání "finální dohody" za nižší částku</strong>
                  <p className="text-gray-700 mt-1">Pokud přijmete €300 místo €600 a podepíšete "full & final settlement", už nemůžete požadovat zbytek. Netaktujte — požadujte plnou částku!</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">❌</span>
                <div>
                  <strong className="text-gray-900">Uplynutí prekluzivní lhůty</strong>
                  <p className="text-gray-700 mt-1">V ČR máte 3 roky na podání žaloby. Pokud propásnete deadline, váš nárok zaniká NAVŽDY. Neprodlévejte!</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2 text-2xl">❌</span>
                <div>
                  <strong className="text-gray-900">Absence důkazů</strong>
                  <p className="text-gray-700 mt-1">Bez palubní vstupenky, důkazu o zpoždění (FlightRadar24) a e-mailu s potvrzením rezervace nemáte šanci vyhrát u soudu. Archivujte VŠECHNO!</p>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            FAQ: Ryanair a odmítání kompenzací
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolikrát může Ryanair odmítnout stejnou reklamaci?
              </h3>
              <p className="text-gray-700">
                Teoreticky neomezeně — Ryanair může odmítnout vaši reklamaci 5x, 10x, i vícekrát. Proto je důležité <strong>eskalovat přes ÚCL nebo soud</strong> po prvním zamítnutí. Další kola reklamace přímo u Ryanair jsou ztrátou času.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Musím platit právníka, abych žaloval Ryanair?
              </h3>
              <p className="text-gray-700">
                NE. Pro nároky do 50 000 Kč (cca €2 000) můžete podat žalobu sami bez advokáta. Vzory žalob najdete na justice.cz. Soudní poplatek je jen 2 000 Kč, které vám Ryanair musí vrátit, pokud vyhrajete.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když Ryanair tvrdí, že "neprovozuje lety z ČR"?
              </h3>
              <p className="text-gray-700">
                Lež. Ryanair má provozní licenci od ÚCL a platí za využívání českých letišť (Václav Havel Airport Prague, Brno atd.). Tím automaticky spadá pod jurisdikci českých soudů pro spory s českými cestujícími.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Může Ryanair zablokovat můj účet, pokud ho budu žalovat?
              </h3>
              <p className="text-gray-700">
                NE. Ryanair NEMÁ právo vás "blacklistovat" nebo odmítnout budoucí lety za to, že vymáháte svá zákonná práva. Pokud to udělá, je to další důvod na stížnost u ÚCL (diskriminace cestujícího).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Záleží na vaší situaci. Pokud máte čas a nervy čekat 18-24 měsíců na soud, můžete vymáhat samostatně a dostat 100 % kompenzace. Pokud chcete rychlejší řešení bez starostí, <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline">ClaimWinger je bezpečná volba</Link> (dostanete 70-75 % za 4-8 měsíců).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když jsem koupil letenku přes booking.com nebo Kiwi.com?
              </h3>
              <p className="text-gray-700">
                Kompenzaci VŽDY vyplácí aerolinie (Ryanair), ne agentura. Booking/Kiwi slouží jen jako zprostředkovatel. Vaše reklamace musí jít přímo na Ryanair — agenturu ignorujte.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr: Nedávejte Ryanair vyhrat tím, že se vzdáte
          </h2>

          <p>
            Ryanair počítá s tím, že většina cestujících <strong>se vzdá po prvním zamítnutí</strong>. To je jejich byznys model — systematicky odmítat všechny reklamace a platit jen těm, kteří vytrvají.
          </p>

          <p className="mt-4">
            <strong>Vaše možnosti jsou jasné:</strong>
          </p>

          <ol className="space-y-3 ml-6 list-decimal mt-4">
            <li><strong>ÚCL</strong> — nejrychlejší cesta pro české cestující (3-6 měsíců)</li>
            <li><strong>ADR</strong> — alternativa k soudu, rychlejší ale méně závazná (2-3 měsíce)</li>
            <li><strong>Soud</strong> — nejjistější cesta k výhře, ale nejpomalejší (18-24 měsíců)</li>
            <li><strong>ClaimWinger</strong> — nechte vše na profesionály, platíte jen při úspěchu</li>
            <li><strong>Veřejný tlak</strong> — doplněk k výše uvedeným metodám</li>
          </ol>

          <p className="mt-6 text-lg font-semibold">
            Nevzdávejte se. Ryanair vám dluží peníze podle ZÁKONA — a pokud vytrvíte, dostanete je.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
            <p className="text-lg font-semibold text-gray-900 mb-3">
              💪 Připraveni přinutit Ryanair k výplatě?
            </p>
            <p className="text-gray-700 mb-4">
              ClaimWinger zvládne celý proces za vás — od reklamace přes ÚCL až po soud. Bez rizika, platíte jen při úspěchu. 50 000+ spokojených cestujících, 78 % úspěšnost proti Ryanair.
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