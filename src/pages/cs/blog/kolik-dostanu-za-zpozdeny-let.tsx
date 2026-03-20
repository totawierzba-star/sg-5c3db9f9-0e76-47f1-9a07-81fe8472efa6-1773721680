import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function KolikDostanuZaZpozdenyLet() {
  return (
    <LayoutCs>
      <SEO
        title="Kolik dostanu za zpožděný let? Tabulka kompenzací 2024"
        description="Zjistěte přesnou výši kompenzace za zpožděný let podle nařízení EU261. Tabulka s částkami 250 €, 400 € a 600 € dle vzdálenosti."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Kolik dostanu za zpožděný let?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            Za zpožděný let můžete získat kompenzaci od <strong>250 € do 600 €</strong> (cca 6 250 Kč až 15 000 Kč) podle vzdálenosti letu. Výše závisí na délce trasy a platí při zpoždění 3+ hodin.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Tabulka výše kompenzace za zpožděný let
          </h2>
          
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Vzdálenost letu</th>
                  <th className="border border-gray-300 p-3 text-left">Výše kompenzace</th>
                  <th className="border border-gray-300 p-3 text-left">V Kč (přibližně)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Do 1 500 km</td>
                  <td className="border border-gray-300 p-3 font-bold">250 €</td>
                  <td className="border border-gray-300 p-3">~6 250 Kč</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">1 500 - 3 500 km</td>
                  <td className="border border-gray-300 p-3 font-bold">400 €</td>
                  <td className="border border-gray-300 p-3">~10 000 Kč</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Nad 3 500 km</td>
                  <td className="border border-gray-300 p-3 font-bold">600 €</td>
                  <td className="border border-gray-300 p-3">~15 000 Kč</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Kdy mám nárok na kompenzaci?
          </h2>
          
          <p className="mb-4">
            Kompenzaci za zpožděný let získáte, pokud jsou splněny tyto podmínky:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Zpoždění alespoň 3 hodiny</strong> při příjezdu na cílové letiště</li>
            <li><strong>Let provozován leteckou společností EU</strong> nebo odlet z letiště v EU</li>
            <li><strong>Zakoupená letenka</strong> (nevztahuje se na bezplatné lety)</li>
            <li><strong>Check-in včas</strong> podle pokynů letecké společnosti</li>
            <li><strong>Zpoždění není způsobeno mimořádnými okolnostmi</strong> (např. extrémní počasí, stávka řídících letového provozu)</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Praktické příklady výše kompenzace
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-3">Praha → Londýn (1 050 km)</h3>
            <p className="mb-2">Vzdálenost: do 1 500 km</p>
            <p className="text-xl font-bold text-blue-600">Kompenzace: 250 € (~6 250 Kč)</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-3">Praha → Barcelona (1 520 km)</h3>
            <p className="mb-2">Vzdálenost: 1 500 - 3 500 km</p>
            <p className="text-xl font-bold text-blue-600">Kompenzace: 400 € (~10 000 Kč)</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-3">Praha → New York (6 570 km)</h3>
            <p className="mb-2">Vzdálenost: nad 3 500 km</p>
            <p className="text-xl font-bold text-blue-600">Kompenzace: 600 € (~15 000 Kč)</p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co když aerolinka nabízí poukaz místo peněz?
          </h2>
          
          <p className="mb-4">
            Podle nařízení <strong>EU261/2004</strong> máte právo na kompenzaci v <strong>hotovosti</strong>. Letecká společnost vám může nabídnout poukaz (voucher), ale:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Nemusíte ho přijmout</li>
            <li>Máte nárok požadovat peníze bankovním převodem</li>
            <li>Poukaz akceptujte pouze pokud je pro vás výhodnější</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Snížená kompenzace při krátkém zpoždění
          </h2>
          
          <p className="mb-4">
            U letů nad 3 500 km se kompenzace snižuje na <strong>300 €</strong> (místo 600 €), pokud je zpoždění mezi 3-4 hodinami.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="font-semibold mb-2">Příklad:</p>
            <p>
              Let Praha → Dubai (4 120 km) se zpožděním 3 hodiny 20 minut = <strong>300 €</strong><br/>
              Stejný let se zpožděním 4 hodiny 10 minut = <strong>600 €</strong>
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak získat kompenzaci rychle a spolehlivě?
          </h2>
          
          <p className="mb-4">
            Vyřízení kompenzace na vlastní pěst může trvat měsíce. ClaimWinger to za vás vyřídí profesionálně:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Zkontrolujeme váš nárok zdarma</strong> během 2 minut</li>
            <li><strong>Vyřídíme veškerou komunikaci</strong> s leteckou společností</li>
            <li><strong>V případě potřeby jdeme k soudu</strong> bez dodatečných poplatků</li>
            <li><strong>Platíte až po úspěchu</strong> - žádné skryté náklady</li>
          </ul>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Zjistěte přesnou výši vaší kompenzace
            </h3>
            <p className="mb-6 text-lg">
              Vyplňte údaje o letu a my během 2 minut zjistíme, kolik peněz vám náleží.
            </p>
            <Link
              href="https://claimwinger.com/cs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Časté otázky (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Platím provizi předem?
              </h3>
              <p>
                Ne. ClaimWinger si účtuje provizi pouze v případě úspěšného vymáhání kompenzace. Bez rizika, bez skrytých poplatků.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Mohu reklamovat let z minulého roku?
              </h3>
              <p>
                Ano. Nárok na kompenzaci máte až <strong>3 roky zpětně</strong> od data letu. Více informací v článku <Link href="/cs/blog/jak-dlouho-narok-zpozdeny-let" className="text-blue-600 hover:underline">Jak dlouho mám na uplatnění nároku</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když aerolinka tvrdí, že šlo o mimořádnou okolnost?
              </h3>
              <p>
                Letecké společnosti často neprávem odmítají vyplatit kompenzaci s odkazem na mimořádné okolnosti. ClaimWinger má právníky, kteří posoudí oprávněnost tohoto tvrzení a v případě potřeby jdou k soudu.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Dostanu kompenzaci i když mi aerolinka vrátila peníze za letenku?
              </h3>
              <p>
                Ano. Refundace ceny letenky a kompenzace za zpoždění jsou dvě nezávislé věci. Máte nárok na obojí.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h3 className="font-bold text-xl mb-4">Související články:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs/blog/jak-dlouho-trva-vyplaceni-kompenzace" className="text-blue-600 hover:underline">
                  → Jak dlouho trvá vyplacení kompenzace?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/narok-kompenzace-zpozdeni-2-hodiny" className="text-blue-600 hover:underline">
                  → Mám nárok na kompenzaci za zpoždění 2 hodiny?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/jak-podat-reklamaci-krok-za-krokem" className="text-blue-600 hover:underline">
                  → Jak podat reklamaci za zpoždění letu krok za krokem
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
