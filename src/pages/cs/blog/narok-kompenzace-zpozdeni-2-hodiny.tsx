import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function NarokKompenzaceZpozdeni2Hodiny() {
  return (
    <LayoutCs>
      <SEO
        title="Mám nárok na kompenzaci za zpoždění 2 hodiny? [EU261]"
        description="Zjistěte, zda vám náleží kompenzace za zpoždění letu 2 hodiny. Kdy platí EU261 a jaká je výše náhrady podle vzdálenosti."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Mám nárok na kompenzaci za zpoždění 2 hodiny?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            <strong>Ne</strong>, za zpoždění 2 hodiny vám kompenzace podle EU261 <strong>nepřísluší</strong>. Nárok vzniká až při zpoždění <strong>3 nebo více hodin</strong> při příletu na cílové letiště. Existují však výjimky u krátkých letů, kde máte nárok na občerstvení a služby.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Pravidlo 3 hodin podle EU261
          </h2>
          
          <p className="mb-4">
            Nařízení <strong>EU261/2004</strong> jasně stanovuje, že kompenzace přísluší pouze pokud:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>Let dorazil na cílové letiště se zpožděním <strong>3 nebo více hodin</strong></li>
              <li>Zpoždění není způsobeno mimořádnými okolnostmi (extrémní počasí, stávka ATC apod.)</li>
              <li>Let provozuje aerolinka EU nebo odletěl z letiště v EU</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="font-semibold mb-2">❌ Zpoždění 2 hodiny:</p>
            <p>
              Kompenzace <strong>NEPŘÍSLUŠÍ</strong>. Nárok vzniká až od 3. hodiny zpoždění při příjezdu.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co vám přísluší při zpoždění 2 hodin?
          </h2>
          
          <p className="mb-4">
            I když nemáte nárok na finanční kompenzaci, aerolinka vám <strong>musí poskytnout péči</strong>:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Vzdálenost letu</th>
                  <th className="border border-gray-300 p-3 text-left">Zpoždění</th>
                  <th className="border border-gray-300 p-3 text-left">Nárok na péči</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Do 1 500 km</td>
                  <td className="border border-gray-300 p-3">2+ hodiny</td>
                  <td className="border border-gray-300 p-3">✅ Občerstvení, nápoje</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">1 500 - 3 500 km</td>
                  <td className="border border-gray-300 p-3">3+ hodiny</td>
                  <td className="border border-gray-300 p-3">✅ Občerstvení, nápoje</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Nad 3 500 km</td>
                  <td className="border border-gray-300 p-3">4+ hodiny</td>
                  <td className="border border-gray-300 p-3">✅ Občerstvení, nápoje, hotel (pokud let přes noc)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3">Co zahrnuje péče?</h3>
          
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Občerstvení a nápoje</strong> v přiměřeném rozsahu</li>
            <li><strong>Možnost 2 telefonických hovorů</strong> nebo e-mailů</li>
            <li><strong>Ubytování v hotelu</strong> (pokud zpoždění trvá přes noc)</li>
            <li><strong>Transfer mezi letištěm a hotelem</strong></li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="font-semibold mb-2">💡 Tip:</p>
            <p>
              Pokud aerolinka neposkytne péči automaticky, požádejte o ni u přepážky. Uschovejte si účtenky za občerstvení - můžete je požadovat proplatit zpětně (obvykle do 10-15 € na osobu).
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Kdy přesně začíná 3hodinové pravidlo?
          </h2>
          
          <p className="mb-4">
            Důležité je <strong>čas příletu na cílové letiště</strong>, ne čas odletu:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold mb-3">Příklad 1: Zpoždění při odletu, ale včasný přílet</h3>
            <p className="mb-2">
              <strong>Plánovaný odlet:</strong> 10:00, <strong>Skutečný odlet:</strong> 12:30 (zpoždění 2,5 hodiny)<br/>
              <strong>Plánovaný přílet:</strong> 12:00, <strong>Skutečný přílet:</strong> 14:20 (zpoždění 2 hodiny 20 minut)
            </p>
            <p className="font-bold text-red-600">
              ❌ Nárok na kompenzaci NENÍ - přílet se zpožděním pod 3 hodiny
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold mb-3">Příklad 2: Mírné zpoždění při odletu, ale velké zpoždění přílet</h3>
            <p className="mb-2">
              <strong>Plánovaný odlet:</strong> 10:00, <strong>Skutečný odlet:</strong> 11:00 (zpoždění 1 hodina)<br/>
              <strong>Plánovaný přílet:</strong> 12:00, <strong>Skutečný přílet:</strong> 15:10 (zpoždění 3 hodiny 10 minut)
            </p>
            <p className="font-bold text-green-600">
              ✅ Nárok na kompenzaci JE - přílet se zpožděním nad 3 hodiny
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co když se zpoždění 2 hodiny změní na 3+ hodiny?
          </h2>
          
          <p className="mb-4">
            Pokud se původně ohlášené zpoždění 2 hodiny nakonec prodlouží na 3 nebo více hodin:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <strong>Počkejte, až skutečně přiletíte</strong> - nárok se posuzuje podle skutečného času příjezdu
            </li>
            <li>
              <strong>Získejte potvrzení o zpoždění</strong> u přepážky aeroliny nebo si stáhněte palubní vstupenku se skutečným časem
            </li>
            <li>
              <strong>Podejte reklamaci</strong> do 7 dnů po letu s doklady (boarding pass, potvrzení o zpoždění)
            </li>
          </ol>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Zjistěte, zda máte nárok na kompenzaci
            </h3>
            <p className="mb-6 text-lg">
              Pokud váš let dorazil se zpožděním 3+ hodin, můžete získat až 600 €. Kontrola trvá 2 minuty.
            </p>
            <Link
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Praktické situace a odpovědi
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Situace 1: Let Praha → Londýn (1 050 km)</h3>
              <p className="mb-2">
                Zpoždění příjezdu: <strong>2 hodiny 45 minut</strong>
              </p>
              <p className="text-red-600 font-bold">
                ❌ Kompenzace NEPŘÍSLUŠÍ (pod 3 hodiny)
              </p>
              <p className="text-sm mt-2">
                ✅ Nárok na občerstvení a nápoje (vzdálenost do 1 500 km, zpoždění 2+ hodiny)
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Situace 2: Let Praha → Barcelona (1 520 km)</h3>
              <p className="mb-2">
                Zpoždění příjezdu: <strong>2 hodiny 30 minut</strong>
              </p>
              <p className="text-red-600 font-bold">
                ❌ Kompenzace NEPŘÍSLUŠÍ (pod 3 hodiny)
              </p>
              <p className="text-sm mt-2">
                ❌ Nárok na péči NENÍ (vzdálenost 1 500-3 500 km, péče až od 3 hodin)
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">Situace 3: Let Praha → New York (6 570 km)</h3>
              <p className="mb-2">
                Zpoždění odletu: <strong>5 hodin</strong>, Zpoždění příjezdu: <strong>2 hodiny 50 minut</strong>
              </p>
              <p className="text-red-600 font-bold">
                ❌ Kompenzace NEPŘÍSLUŠÍ (přílet pod 3 hodiny zpoždění)
              </p>
              <p className="text-sm mt-2">
                ❌ Nárok na péči NENÍ (vzdálenost 3 500+ km, péče až od 4 hodin zpoždění)
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Časté otázky (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Mohu požadovat kompenzaci, pokud mi zpoždění 2 hodiny způsobilo zmeškaný přestup?
              </h3>
              <p>
                Pokud jste zmeškali navazující let kvůli zpoždění, posuzuje se <strong>celkové zpoždění příjezdu do finální destinace</strong>. Pokud jste dorazili s celkovým zpožděním 3+ hodin, máte nárok na kompenzaci. Více v článku <Link href="/cs/blog/zmeskane-prestupy-kompenzace" className="text-blue-600 hover:underline">Zmeškaný přestup - kompenzace</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když let odletěl včas, ale přiletěl se zpožděním 2 hodin 55 minut?
              </h3>
              <p>
                Nárok na kompenzaci není. Hranice je přesně <strong>3 hodiny</strong>. I kdyby zpoždění bylo 2 hodiny 59 minut, kompenzace nepřísluší.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Musím prokázat, že mi zpoždění 2 hodiny způsobilo škodu?
              </h3>
              <p>
                Ne. Kompenzace podle EU261 je <strong>paušální</strong> a nezávisí na tom, zda vám zpoždění způsobilo konkrétní škodu. Buď máte nárok (3+ hodiny), nebo ne.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Platí pravidlo 3 hodin i u zrušených letů?
              </h3>
              <p>
                U zrušených letů je to jinak. Pokud vám aerolinka nabídne náhradní let a vy dorazíte do cíle s menším zpožděním než 3-4 hodiny, kompenzace může být snížena nebo nulová. Více v článku <Link href="/cs/zruseny-let" className="text-blue-600 hover:underline">Zrušený let - kompenzace</Link>.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h3 className="font-bold text-xl mb-4">Související články:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs/blog/kolik-dostanu-za-zpozdeny-let" className="text-blue-600 hover:underline">
                  → Kolik dostanu za zpožděný let?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/3hodinove-pravidlo-zpozdeni" className="text-blue-600 hover:underline">
                  → 3hodinové pravidlo zpoždění - kompletní vysvětlení
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/zmeskane-prestupy-kompenzace" className="text-blue-600 hover:underline">
                  → Zmeškaný přestup - kdy máte nárok na kompenzaci
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
