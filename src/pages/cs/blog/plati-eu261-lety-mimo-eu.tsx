import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function PlatiEu261LetyMimoEu() {
  return (
    <LayoutCs>
      <SEO
        title="Platí EU261 pro lety mimo EU? [Kompletní přehled]"
        description="Zjistěte, kdy platí nařízení EU261 pro lety mimo Evropskou unii. Pravidla pro USA, Asii, Afriku a další destinace."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Platí EU261 pro lety mimo EU?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            Ano, nařízení <strong>EU261 platí i pro lety mimo EU</strong>, pokud: (1) let provozuje <strong>evropská aerolinka</strong>, nebo (2) let <strong>odletěl z letiště v EU</strong>. Pro lety pouze mimo EU bez evropské aerolinek EU261 neplatí.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Základní pravidla EU261 podle směru letu
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Směr letu</th>
                  <th className="border border-gray-300 p-3 text-left">Aerolinka</th>
                  <th className="border border-gray-300 p-3 text-left">Platí EU261?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Z EU → mimo EU</td>
                  <td className="border border-gray-300 p-3">Jakákoliv</td>
                  <td className="border border-gray-300 p-3 text-green-600 font-bold">✅ ANO</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Mimo EU → do EU</td>
                  <td className="border border-gray-300 p-3">Evropská (EU/EEA/CH/UK)</td>
                  <td className="border border-gray-300 p-3 text-green-600 font-bold">✅ ANO</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Mimo EU → do EU</td>
                  <td className="border border-gray-300 p-3">Neevropská</td>
                  <td className="border border-gray-300 p-3 text-red-600 font-bold">❌ NE</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Mimo EU → mimo EU</td>
                  <td className="border border-gray-300 p-3">Jakákoliv</td>
                  <td className="border border-gray-300 p-3 text-red-600 font-bold">❌ NE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Příklady konkrétních letů
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-lg mb-2">✅ Praha → New York (Lufthansa)</h3>
              <p className="text-sm mb-2">
                <strong>Odlet z EU:</strong> Praha<br/>
                <strong>Aerolinka:</strong> Lufthansa (německá, EU)<br/>
                <strong>Platí EU261:</strong> ✅ ANO
              </p>
              <p className="text-sm text-gray-700">
                Nárok na kompenzaci až 600 € při zpoždění 3+ hodin.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-lg mb-2">✅ Praha → Dubai (Emirates)</h3>
              <p className="text-sm mb-2">
                <strong>Odlet z EU:</strong> Praha<br/>
                <strong>Aerolinka:</strong> Emirates (neevropská)<br/>
                <strong>Platí EU261:</strong> ✅ ANO (odlet z EU)
              </p>
              <p className="text-sm text-gray-700">
                I když je Emirates neevropská aerolinka, EU261 platí kvůli odletu z Prahy.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-lg mb-2">✅ New York → Praha (Lufthansa)</h3>
              <p className="text-sm mb-2">
                <strong>Odlet mimo EU:</strong> New York<br/>
                <strong>Aerolinka:</strong> Lufthansa (německá, EU)<br/>
                <strong>Platí EU261:</strong> ✅ ANO (evropská aerolinka)
              </p>
              <p className="text-sm text-gray-700">
                Nárok vzniká díky evropské aerolince, i když odlet je mimo EU.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-lg mb-2">❌ New York → Praha (United Airlines)</h3>
              <p className="text-sm mb-2">
                <strong>Odlet mimo EU:</strong> New York<br/>
                <strong>Aerolinka:</strong> United Airlines (americká)<br/>
                <strong>Platí EU261:</strong> ❌ NE
              </p>
              <p className="text-sm text-gray-700">
                Ani odlet, ani aerolinka nejsou evropské - EU261 neplatí.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
              <h3 className="font-bold text-lg mb-2">❌ Bangkok → Singapur (Thai Airways)</h3>
              <p className="text-sm mb-2">
                <strong>Odlet mimo EU:</strong> Bangkok<br/>
                <strong>Cíl mimo EU:</strong> Singapur<br/>
                <strong>Aerolinka:</strong> Thai Airways (asijská)<br/>
                <strong>Platí EU261:</strong> ❌ NE
              </p>
              <p className="text-sm text-gray-700">
                Žádná vazba na EU - EU261 neplatí.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co jsou "evropské aerolinie"?
          </h2>
          
          <p className="mb-4">
            Za evropské aerolinie se považují společnosti s licencí v:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Země EU</strong> - 27 členských států (Německo, Francie, Česká republika atd.)
              </li>
              <li>
                <strong>EEA (Evropský hospodářský prostor)</strong> - Island, Norsko, Lichtenštejnsko
              </li>
              <li>
                <strong>Švýcarsko</strong> - na základě bilaterální dohody
              </li>
              <li>
                <strong>Velká Británie (UK261)</strong> - po Brexitu platí vlastní verze UK261, velmi podobná EU261
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3">Příklady evropských aerolinií:</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white border p-4 rounded">
              <h4 className="font-bold mb-2">Česká republika:</h4>
              <ul className="text-sm list-disc pl-4">
                <li>ČSA (Czech Airlines)</li>
                <li>Smartwings</li>
              </ul>
            </div>

            <div className="bg-white border p-4 rounded">
              <h4 className="font-bold mb-2">Německo:</h4>
              <ul className="text-sm list-disc pl-4">
                <li>Lufthansa</li>
                <li>Eurowings</li>
              </ul>
            </div>

            <div className="bg-white border p-4 rounded">
              <h4 className="font-bold mb-2">Irsko:</h4>
              <ul className="text-sm list-disc pl-4">
                <li>Ryanair</li>
                <li>Aer Lingus</li>
              </ul>
            </div>

            <div className="bg-white border p-4 rounded">
              <h4 className="font-bold mb-2">Maďarsko:</h4>
              <ul className="text-sm list-disc pl-4">
                <li>Wizz Air</li>
              </ul>
            </div>

            <div className="bg-white border p-4 rounded">
              <h4 className="font-bold mb-2">UK (UK261):</h4>
              <ul className="text-sm list-disc pl-4">
                <li>British Airways</li>
                <li>EasyJet</li>
              </ul>
            </div>

            <div className="bg-white border p-4 rounded">
              <h4 className="font-bold mb-2">Francie:</h4>
              <ul className="text-sm list-disc pl-4">
                <li>Air France</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Speciální případy a výjimky
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <h3 className="font-bold mb-2">Codeshare lety (sdílení kódu)</h3>
              <p className="text-sm mb-2">
                Rozhodující je <strong>provozující aerolinka</strong>, ne ta, u které jste si letenku koupili.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Příklad:</strong> Koupili jste si letenku u ČSA, ale let provozovala Delta Airlines → platí pravidla pro Delta (americkou aeroliku).
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <h3 className="font-bold mb-2">Connecting flights (přestupy)</h3>
              <p className="text-sm mb-2">
                Pokud je celá cesta rezervována jako <strong>jedna letenka</strong>, EU261 platí pro celou cestu, pokud první úsek splňuje podmínky.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Příklad:</strong> Praha → Frankfurt → Bangkok (jedna rezervace, Lufthansa) → EU261 platí pro celou cestu.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <h3 className="font-bold mb-2">Charter lety</h3>
              <p className="text-sm mb-2">
                EU261 platí i pro charter lety, pokud splňují obecné podmínky (odlet z EU nebo evropská aerolinka).
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-600">
              <h3 className="font-bold mb-2">Švýcarsko a Brexit</h3>
              <p className="text-sm mb-2">
                <strong>Švýcarsko:</strong> I když není v EU, má bilaterální dohodu - EU261 platí.<br/>
                <strong>UK po Brexitu:</strong> Má vlastní UK261, téměř identické s EU261.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co když EU261 neplatí? Alternativní ochrany
          </h2>
          
          <p className="mb-4">
            Pokud váš let nespadá pod EU261, můžete mít nárok na kompenzaci podle:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">1. Montreal Convention (celosvětová dohoda)</h3>
              <p className="text-sm">
                Platí pro <strong>mezinárodní lety</strong> a poskytuje náhradu škody při ztrátě nebo poškození zavazadel, zranění cestujících. Kompenzace za zpoždění je však omezená (max. cca 5 000 EUR pouze při prokázané škodě).
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">2. US DOT Rules (USA)</h3>
              <p className="text-sm">
                Pro lety do/z/uvnitř USA platí pravidla Department of Transportation. Kompenzace pouze při <strong>involuntary denied boarding</strong> (overbooking), nikoli při běžném zpoždění.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">3. Vnitřní předpisy aerolinií</h3>
              <p className="text-sm">
                Některé aerolinie (např. Qatar Airways, Emirates) dobrovolně nabízejí kompenzace podobné EU261. Zkontrolujte pravidla přepravy (Conditions of Carriage).
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">4. Cestovní pojištění</h3>
              <p className="text-sm">
                Pokud máte cestovní pojištění zahrnující zpoždění letu, můžete získat náhradu od pojišťovny (i když EU261 neplatí).
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Není vám jasné, zda máte nárok?
            </h3>
            <p className="mb-6 text-lg">
              ClaimWinger posoudí váš případ zdarma během 2 minut. Vyplňte údaje o letu a my vám řekneme, zda platí EU261.
            </p>
            <Link
              href="https://claimwinger.com/cs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak zjistit, která aerolinka let provozovala?
          </h2>

          <p className="mb-4">
            Pokud si nejste jisti, která aerolinka váš let skutečně provozovala:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <strong>Podívejte se na palubní vstupenku</strong> - u čísla letu je obvykle uvedena provozující aerolinka
            </li>
            <li>
              <strong>Zkontrolujte rezervaci</strong> - e-mail s potvrzením často obsahuje informaci o provozující společnosti
            </li>
            <li>
              <strong>FlightRadar24</strong> - zadejte číslo letu a datum, uvidíte reálnou aeroliku
            </li>
            <li>
              <strong>Kontaktujte aeroliku</strong> - u které jste si letenku koupili a zeptejte se
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Časté otázky (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Platí EU261 pro let Praha → Dubaj (Emirates)?
              </h3>
              <p>
                <strong>Ano.</strong> I když Emirates je neevropská aerolinka, let odletěl z Prahy (EU), takže EU261 platí.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Platí EU261 pro let New York → Londýn (American Airlines)?
              </h3>
              <p>
                <strong>Ne.</strong> American Airlines není evropská aerolinka a let neodletěl z EU. Platí pouze pravidla US DOT.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když jsem měl přestup mimo EU?
              </h3>
              <p>
                Pokud byla celá cesta rezervována jako <strong>jedna letenka</strong> a první úsek splňoval podmínky EU261, ochrana platí pro celou cestu. Příklad: Praha → Istanbul (Turkish) → Bangkok - EU261 platí, pokud zmeškáte přestup v Istanbulu kvůli zpoždění prvního úseku.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Mohu vymáhat kompenzaci podle EU261 u neevropské aerolinek?
              </h3>
              <p>
                Ano, pokud let odletěl z EU. Aerolinka je povinna dodržovat EU261 bez ohledu na to, kde má sídlo. Více v článku <Link href="/cs/blog/kolik-dostanu-za-zpozdeny-let" className="text-blue-600 hover:underline">Kolik dostanu za zpožděný let</Link>.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h3 className="font-bold text-xl mb-4">Související články:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 hover:underline">
                  → Nařízení ES 261/2004 - kompletní přehled
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/kolik-dostanu-za-zpozdeny-let" className="text-blue-600 hover:underline">
                  → Kolik dostanu za zpožděný let?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/co-je-mimoradna-okolnost-letu" className="text-blue-600 hover:underline">
                  → Co je mimořádná okolnost u letů?
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