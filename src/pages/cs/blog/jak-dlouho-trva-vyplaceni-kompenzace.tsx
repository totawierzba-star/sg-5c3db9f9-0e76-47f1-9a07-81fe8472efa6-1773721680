import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function JakDlouhoTrvaVyplaceniKompenzace() {
  return (
    <LayoutCs>
      <SEO
        title="Jak dlouho trvá vyplacení kompenzace za zpožděný let?"
        description="Zjistěte, jak dlouho trvá vyplacení kompenzace za zpožděný nebo zrušený let. Reálné lhůty u jednotlivých aerolinií a tipy na zrychlení."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Jak dlouho trvá vyplacení kompenzace za zpožděný let?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            Vyplacení kompenzace trvá obvykle <strong>2-8 týdnů</strong> při přímé reklamaci u aerolinek, které spolupracují. U problematických společností nebo soudních sporů to může být <strong>6-12 měsíců</strong>. S pomocí ClaimWinger dostanete peníze průměrně za <strong>8-12 týdnů</strong>.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Oficiální lhůta podle EU261
          </h2>
          
          <p className="mb-4">
            Nařízení EU261/2004 <strong>nestanovuje konkrétní lhůtu</strong>, do kdy musí aerolinka vyplatit kompenzaci. Letecké společnosti by však měly vyřídit reklamaci v <strong>přiměřené době</strong>, což v praxi znamená:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>6 týdnů</strong> - standardní lhůta pro odpověď na reklamaci</li>
            <li><strong>2-3 měsíce</strong> - reálná doba do vyplacení při uznaném nároku</li>
            <li><strong>6-12 měsíců</strong> - při odmítnutí nároku a nutnosti soudního vymáhání</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Reálné lhůty u jednotlivých aerolinií
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Letecká společnost</th>
                  <th className="border border-gray-300 p-3 text-left">Typická doba vyplacení</th>
                  <th className="border border-gray-300 p-3 text-left">Hodnocení</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Lufthansa</td>
                  <td className="border border-gray-300 p-3">2-4 týdny</td>
                  <td className="border border-gray-300 p-3 text-green-600 font-bold">Velmi dobrá</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">ČSA (Czech Airlines)</td>
                  <td className="border border-gray-300 p-3">4-6 týdnů</td>
                  <td className="border border-gray-300 p-3 text-green-600 font-bold">Dobrá</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Smartwings</td>
                  <td className="border border-gray-300 p-3">6-10 týdnů</td>
                  <td className="border border-gray-300 p-3 text-yellow-600 font-bold">Průměrná</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Ryanair</td>
                  <td className="border border-gray-300 p-3">3-6 měsíců</td>
                  <td className="border border-gray-300 p-3 text-orange-600 font-bold">Pomalá</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Wizz Air</td>
                  <td className="border border-gray-300 p-3">4-8 měsíců</td>
                  <td className="border border-gray-300 p-3 text-red-600 font-bold">Velmi pomalá</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Proč vyplacení trvá tak dlouho?
          </h2>
          
          <p className="mb-4">
            Hlavní důvody zdlouhavého procesu:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">1. Záměrné průtahy od aerolinek</h3>
              <p>
                Některé nízkonákladové aerolinie (zejména Ryanair a Wizz Air) záměrně zdržují vyřizování reklamací v naději, že cestující to vzdá.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">2. Neúplné dokumenty</h3>
              <p>
                Pokud nepřiložíte všechny potřebné dokumenty (palubní vstupenka, potvrzení o zpoždění), aerolinka může reklamaci vrátit k doplnění.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">3. Vyšetřování mimořádných okolností</h3>
              <p>
                Letecká společnost může tvrdit, že šlo o mimořádnou okolnost (např. špatné počasí) a hledá důkazy. Ověření trvá týdny.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">4. Nutnost soudního vymáhání</h3>
              <p>
                Pokud aerolinka nárok odmítne, musíte podat žalobu k soudu. Soudní řízení trvá v průměru 6-12 měsíců.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak urychlit vyplacení kompenzace?
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-3">Tipy pro rychlejší vyřízení:</h3>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Podejte reklamaci ihned</strong> po letu (nejpozději do 7 dnů)</li>
              <li><strong>Přiložte všechny dokumenty najednou</strong> (palubní vstupenka, boarding pass, potvrzení o zpoždění)</li>
              <li><strong>Komunikujte písemně</strong> (e-mail) - máte důkaz korespondence</li>
              <li><strong>Sledujte lhůty</strong> - pokud aerolinka neodpoví do 6 týdnů, urgujte</li>
              <li><strong>Využijte profesionální služby</strong> - ClaimWinger má zkušenosti a vyřídí to rychleji</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Výhody vymáhání s ClaimWinger
          </h2>
          
          <p className="mb-4">
            S ClaimWinger dostanete kompenzaci rychleji a bez starostí:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚡ Rychlejší vyřízení</h3>
              <p className="text-sm">
                Průměrná doba 8-12 týdnů díky zkušenostem a tlaku na aerolinie.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">📋 Žádná administrativa</h3>
              <p className="text-sm">
                Nemusíte řešit dokumenty, lhůty ani komunikaci s aerolinkou.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">⚖️ Soudní zastoupení v ceně</h3>
              <p className="text-sm">
                Pokud aerolinka odmítne platit, jdeme k soudu bez dodatečných nákladů.
              </p>
            </div>

            <div className="bg-white border-2 border-blue-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">💰 Platíte až po úspěchu</h3>
              <p className="text-sm">
                Žádné předběžné náklady. Provize pouze z vyplacené kompenzace.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Získejte kompenzaci rychle a bez starostí
            </h3>
            <p className="mb-6 text-lg">
              Vyplňte údaje o letu a my se postaráme o zbytek. Platíte až po úspěchu.
            </p>
            <Link
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Podat reklamaci teď →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co dělat, když aerolinka nereaguje?
          </h2>
          
          <p className="mb-4">
            Pokud aerolinka neodpověděla na vaši reklamaci ani po <strong>6 týdnech</strong>:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <strong>Urgujte písemně</strong> - pošlete připomenutí e-mailem s odkazem na původní reklamaci
            </li>
            <li>
              <strong>Využijte národního arbitra</strong> - v ČR je to Úřad pro civilní letectví (CAA)
            </li>
            <li>
              <strong>Podejte žalobu k soudu</strong> - soudní řízení trvá déle, ale máte vysokou šanci na úspěch
            </li>
            <li>
              <strong>Svěřte případ ClaimWinger</strong> - profesionálové mají zkušenosti s nereagujícími aerolinkami
            </li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="font-semibold mb-2">💡 Tip:</p>
            <p>
              Přečtěte si článek <Link href="/cs/blog/co-delat-aerolinka-neodpovi-reklamaci" className="text-blue-600 hover:underline">Co dělat když aerolinka neodpoví na reklamaci</Link> pro podrobný návod.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Časté otázky (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Mohu požadovat úroky z prodlení?
              </h3>
              <p>
                Ano. Pokud aerolinka vyplatí kompenzaci se zpožděním, můžete požadovat úroky z prodlení od data podání reklamace. V praxi se to však vymáhá obtížně.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když aerolinka nabídne voucher místo peněz?
              </h3>
              <p>
                Voucher nemusíte přijmout. Máte právo na kompenzaci v hotovosti bankovním převodem. Více v článku <Link href="/cs/blog/kolik-dostanu-za-zpozdeny-let" className="text-blue-600 hover:underline">Kolik dostanu za zpožděný let</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Jak dlouho mám na podání reklamace?
              </h3>
              <p>
                Nárok na kompenzaci máte až <strong>3 roky zpětně</strong> od data letu. Více informací v článku <Link href="/cs/blog/jak-dlouho-narok-zpozdeny-let" className="text-blue-600 hover:underline">Jak dlouho mám na uplatnění nároku</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Platí lhůty i při soudním vymáhání?
              </h3>
              <p>
                Soudní řízení má vlastní lhůty, které se liší podle země a soudu. V Česku trvá průměrně 6-12 měsíců, ale může to být i déle.
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
                <Link href="/cs/blog/co-delat-aerolinka-neodpovi-reklamaci" className="text-blue-600 hover:underline">
                  → Co dělat když aerolinka neodpoví na reklamaci?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/jak-dlouho-narok-zpozdeny-let" className="text-blue-600 hover:underline">
                  → Jak dlouho mám na uplatnění nároku za zpožděný let?
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