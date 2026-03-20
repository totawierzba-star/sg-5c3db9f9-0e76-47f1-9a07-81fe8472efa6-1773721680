import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function CoJeMimoradnaOkolnostLetu() {
  return (
    <LayoutCs>
      <SEO
        title="Co je mimořádná okolnost u letů? [EU261 vysvětlení]"
        description="Zjistěte, co je považováno za mimořádnou okolnost podle EU261 a kdy aerolinka nemusí vyplatit kompenzaci za zpožděný nebo zrušený let."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Co je mimořádná okolnost u letů?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            Mimořádná okolnost je <strong>nepředvídatelná událost mimo kontrolu letecké společnosti</strong>, která osvobozuje aeroliku od povinnosti vyplatit kompenzaci. Patří sem: extrémní počasí, stávka řídících letového provozu, bezpečnostní hrozby nebo zdravotní krize. Technické problémy NEJSOU mimořádnou okolností.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Definice podle EU261/2004
          </h2>
          
          <p className="mb-4">
            Podle nařízení <strong>EU261/2004</strong> musí mimořádná okolnost splňovat <strong>3 podmínky</strong>:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Nepředvídatelnost</strong> - událost nemohla být předvídána ani při vynaložení veškeré péče
              </li>
              <li>
                <strong>Nevyhnutelnost</strong> - aerolinka nemohla události zabránit ani při maximálním úsilí
              </li>
              <li>
                <strong>Mimo kontrolu aerolinek</strong> - letecká společnost nemá vliv na vznik události
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co JE mimořádná okolnost? ✅
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">1. Extrémní počasí</h3>
              <ul className="text-sm list-disc pl-6 space-y-1">
                <li>Silné bouře, hurikány, tornáda</li>
                <li>Vulkanický popel (např. erupce islandské sopky 2010)</li>
                <li>Husté mlhy nebo těžký sníh způsobující uzavření letiště</li>
                <li>Extrémní mrazy zamrzající letadla</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">2. Stávka řídících letového provozu (ATC)</h3>
              <ul className="text-sm list-disc pl-6 space-y-1">
                <li>Stávka dispečerů ovládajících vzdušný prostor</li>
                <li>Omezení letového provozu z důvodu protestů ATC</li>
                <li><strong>Pozor:</strong> Stávka zaměstnanců aerolinek (piloti, palubní personál) NENÍ mimořádnou okolností</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">3. Bezpečnostní hrozby</h3>
              <ul className="text-sm list-disc pl-6 space-y-1">
                <li>Teroristická hrozba na letišti nebo letadle</li>
                <li>Sabotáž nebo bezpečnostní incident</li>
                <li>Politické nepokoje nebo válečný konflikt</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">4. Srážka s ptáky (bird strike)</h3>
              <ul className="text-sm list-disc pl-6 space-y-1">
                <li>Pouze pokud způsobí vážné poškození letadla</li>
                <li>Aerolinka musí prokázat nepředvídatelnost</li>
                <li>Běžné srážky s ptáky NEJSOU automaticky mimořádnou okolností</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">5. Lékařská nouze během letu</h3>
              <ul className="text-sm list-disc pl-6 space-y-1">
                <li>Neplánované přistání z důvodu zdravotního stavu pasažéra nebo posádky</li>
                <li>Pouze pokud šlo o skutečnou nouzi, ne běžné zdravotní problémy</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">6. Nečekané omezení letového provozu</h3>
              <ul className="text-sm list-disc pl-6 space-y-1">
                <li>Uzavření vzdušného prostoru vládou</li>
                <li>Náhlé zavedení bezpečnostních opatření</li>
                <li>Pandemie COVID-19 (uznáno soudy v některých případech)</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co NENÍ mimořádná okolnost? ❌
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold mb-2">❌ Technické problémy letadla</h3>
              <p className="text-sm mb-2">
                Poruchy motoru, elektrické systémy, hydraulika - to vše je <strong>běžná odpovědnost aerolinek</strong> za údržbu.
              </p>
              <p className="text-sm text-gray-700">
                Výjimka: Skrytá konstrukční vada, kterou výrobce zatajil a nedalo se ji odhalit běžnou údržbou.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold mb-2">❌ Stávka zaměstnanců aerolinek</h3>
              <p className="text-sm mb-2">
                Protesty pilotů, palubního personálu nebo pozemního personálu NEJSOU mimo kontrolu aerolinek.
              </p>
              <p className="text-sm text-gray-700">
                Aerolinka je odpovědná za pracovní vztahy se svými zaměstnanci.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold mb-2">❌ Nedostatek posádky</h3>
              <p className="text-sm">
                Pokud aerolinka nemá dostatek pilotů nebo palubního personálu, je to její problém s plánováním.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold mb-2">❌ Overbooking (přeprodání letenek)</h3>
              <p className="text-sm">
                Záměrné přeprodání míst nad kapacitu letadla je obchodní strategie aerolinek.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold mb-2">❌ Zpožděné zásobování palivem</h3>
              <p className="text-sm">
                Běžná logistika letiště není mimořádnou okolností.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold mb-2">❌ Zpoždění předchozího letu (rotace letadla)</h3>
              <p className="text-sm">
                Pokud se letadlo zpoždělo kvůli technickému problému na předchozím letu, kompenzace přísluší.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Šedé zóny - sporné případy
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Situace</th>
                  <th className="border border-gray-300 p-3 text-left">Aerolinka tvrdí</th>
                  <th className="border border-gray-300 p-3 text-left">Realita</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Mírný déšť</td>
                  <td className="border border-gray-300 p-3">Špatné počasí</td>
                  <td className="border border-gray-300 p-3 text-red-600 font-bold">NENÍ mimořádná okolnost</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Pozdní přistavení letadla</td>
                  <td className="border border-gray-300 p-3">Technický problém</td>
                  <td className="border border-gray-300 p-3 text-red-600 font-bold">NENÍ mimořádná okolnost</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Srážka s ptáky - běžná</td>
                  <td className="border border-gray-300 p-3">Mimořádná okolnost</td>
                  <td className="border border-gray-300 p-3 text-yellow-600 font-bold">Záleží na okolnostech</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Nemocný pilot - náhradník nedostupný</td>
                  <td className="border border-gray-300 p-3">Mimořádná okolnost</td>
                  <td className="border border-gray-300 p-3 text-red-600 font-bold">NENÍ (špatné plánování)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak aerolinka musí prokázat mimořádnou okolnost?
          </h2>
          
          <p className="mb-4">
            Pokud aerolinka odmítne vyplatit kompenzaci s odkazem na mimořádnou okolnost, <strong>musí to prokázat</strong>:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-3">Důkazní břemeno leží na aerolince:</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Konkrétní popis události</strong> - co přesně se stalo
              </li>
              <li>
                <strong>Datum a čas</strong> - kdy k události došlo
              </li>
              <li>
                <strong>Dokumentace</strong> - zprávy o počasí, technické protokoly, úřední oznámení
              </li>
              <li>
                <strong>Kauzální souvislost</strong> - jak událost přímo způsobila zpoždění nebo zrušení
              </li>
              <li>
                <strong>Vynaložené úsilí</strong> - jaká opatření aerolinka přijala k minimalizaci dopadu
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="font-semibold mb-2">⚠️ Pozor na vágní odpovědi:</p>
            <p>
              Pokud aerolinka napíše pouze "technický problém z bezpečnostních důvodů" nebo "nepříznivé počasí", <strong>to není dostatečný důkaz</strong>. Požadujte konkrétní informace a dokumentaci.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co dělat, když aerolinka tvrdí mimořádnou okolnost?
          </h2>

          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>
              <strong>Požádejte o písemné vysvětlení</strong> - aerolinka musí specifikovat, jaká konkrétní událost nastala
            </li>
            <li>
              <strong>Ověřte si fakta</strong> - zkontrolujte počasí v den letu, stávky ATC, bezpečnostní incidenty
            </li>
            <li>
              <strong>Požadujte dokumentaci</strong> - technické zprávy, oznámení úřadů, záznamy o počasí
            </li>
            <li>
              <strong>Nesouhlasíte-li, podejte stížnost</strong> - kontaktujte Úřad pro civilní letectví (CAA)
            </li>
            <li>
              <strong>Využijte profesionální pomoc</strong> - ClaimWinger má zkušenosti s rozpoznáním falešných tvrzení
            </li>
          </ol>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Aerolinka odmítla vyplatit s odkazem na mimořádnou okolnost?
            </h3>
            <p className="mb-6 text-lg">
              Většina odmítnutí je neoprávněná. Nechte právníky posoudit váš případ zdarma.
            </p>
            <Link
              href="https://claimwinger.com/cs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Judikatura Evropského soudního dvora
          </h2>

          <p className="mb-4">
            Několik klíčových rozhodnutí, která definují mimořádné okolnosti:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">C-549/07 (Wallentin-Hermann)</h3>
              <p className="text-sm">
                <strong>Rozhodnutí:</strong> Technická porucha motoru NENÍ mimořádnou okolností, i když šlo o skrytou vadu.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">C-12/11 (McDonagh)</h3>
              <p className="text-sm">
                <strong>Rozhodnutí:</strong> Srážka s ptáky je mimořádnou okolností pouze pokud způsobí závažné poškození.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">C-257/14 (van der Lans)</h3>
              <p className="text-sm">
                <strong>Rozhodnutí:</strong> Pozdní dodávka náhradních dílů NENÍ mimořádnou okolností - aerolinka je odpovědná za zásoby.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Časté otázky (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Mohu dostat kompenzaci, pokud byla mimořádná okolnost?
              </h3>
              <p>
                Ne, pokud aerolinka prokáže skutečnou mimořádnou okolnost a vynaložila veškeré přiměřené úsilí k minimalizaci zpoždění, kompenzace nepřísluší. Máte však nárok na péči (občerstvení, hotel).
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když aerolinka tvrdí technický problém "z bezpečnostních důvodů"?
              </h3>
              <p>
                To stále není mimořádná okolnost. Aerolinka je odpovědná za udržování letadel v bezpečném stavu. Požadujte konkrétní vysvětlení a dokumentaci.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Jak ověřit, zda bylo skutečně špatné počasí?
              </h3>
              <p>
                Zkontrolujte historické údaje o počasí na letišti (např. FlightRadar24, Time and Date Weather). Pokud let jiných aerolinií letěl normálně, nebyla to mimořádná okolnost. Více v článku <Link href="/cs/blog/mimoradne-okolnosti-vysvetleny" className="text-blue-600 hover:underline">Mimořádné okolnosti vysvětleny</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když aerolinka odmítne poskytnout dokumentaci?
              </h3>
              <p>
                Pokud aerolinka odmítne prokázat mimořádnou okolnost, má slabou pozici. Podejte stížnost u CAA nebo využijte ClaimWinger - profesionální vymahači mají metody, jak získat důkazy.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h3 className="font-bold text-xl mb-4">Související články:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs/blog/mimoradne-okolnosti-vysvetleny" className="text-blue-600 hover:underline">
                  → Mimořádné okolnosti vysvětleny - kompletní průvodce
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/kolik-dostanu-za-zpozdeny-let" className="text-blue-600 hover:underline">
                  → Kolik dostanu za zpožděný let?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/co-delat-aerolinka-neodpovi-reklamaci" className="text-blue-600 hover:underline">
                  → Co dělat když aerolinka neodpoví na reklamaci?
                </Link>
              </li>
              <li>
                <Link href="/cs/zpozdeny-let" className="text-blue-600 hover:underline">
                  → Zpožděný let - kompletní průvodce
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}
