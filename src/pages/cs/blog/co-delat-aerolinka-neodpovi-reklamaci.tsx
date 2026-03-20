import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function CoDelatAerolinkaNeodpoviReklamaci() {
  return (
    <LayoutCs>
      <SEO
        title="Co dělat když aerolinka neodpoví na reklamaci? [2024]"
        description="Aerolinka nereaguje na vaši reklamaci za zpožděný let? Zjistěte, jak postupovat krok za krokem a získat kompenzaci do 600 €."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Co dělat když aerolinka neodpoví na reklamaci?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            Pokud aerolinka nereaguje na reklamaci do <strong>6 týdnů</strong>, můžete: (1) poslat písemnou urgenci, (2) podat stížnost u národního arbitra (CAA v ČR), (3) podat žalobu k soudu, nebo (4) svěřit případ ClaimWinger, který má zkušenosti s nereagujícími aerolinkami.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Proč aerolinka nereaguje?
          </h2>
          
          <p className="mb-4">
            Existuje několik důvodů, proč letecká společnost neodpovídá na vaši reklamaci:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold mb-2">1. Záměrná strategie průtahů</h3>
              <p>
                Některé aerolinie (zejména Ryanair, Wizz Air) záměrně nereagují v naději, že se cestující vzdá vymáhání.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-bold mb-2">2. Neúplné podklady</h3>
              <p>
                Pokud jste nepřiložili všechny potřebné dokumenty, aerolinka může ignorovat reklamaci nebo ji vrátit k doplnění.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-bold mb-2">3. Technické problémy</h3>
              <p>
                Váš e-mail mohl skončit ve spamu nebo se ztratit v systému. Méně časté, ale možné.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold mb-2">4. Vysoká zátěž zákaznického servisu</h3>
              <p>
                V období po masivních poruchách (např. IT výpadky) aerolinie dostávají tisíce reklamací najednou.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Krok za krokem: Co dělat když aerolinka mlčí
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Počkejte 6 týdnů od podání reklamace</h3>
                  <p className="mb-2">
                    Aerolinka má podle praxe <strong>6 týdnů</strong> na odpověď. Pokud neodpoví ani po této lhůtě, přejděte k dalšímu kroku.
                  </p>
                  <p className="text-sm text-gray-700">
                    💡 Tip: Poznamenejte si datum podání reklamace, abyste mohli přesně určit uplynutí lhůty.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Pošlete písemnou urgenci</h3>
                  <p className="mb-2">
                    Napište připomenutí e-mailem s těmito informacemi:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Datum původní reklamace</li>
                    <li>Číslo letu a datum letu</li>
                    <li>Kopii původní reklamace v příloze</li>
                    <li>Výzvu k odpovědi do 14 dnů</li>
                    <li>Upozornění, že v případě mlčení podáte stížnost k arbitra</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Podejte stížnost u národního arbitra</h3>
                  <p className="mb-2">
                    V České republice je to <strong>Úřad pro civilní letectví (CAA)</strong>:
                  </p>
                  <div className="bg-white p-4 rounded border mb-2">
                    <p className="text-sm mb-1"><strong>E-mail:</strong> posta@caa.cz</p>
                    <p className="text-sm mb-1"><strong>Formulář:</strong> <a href="https://www.caa.cz" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.caa.cz</a></p>
                    <p className="text-sm"><strong>Telefon:</strong> +420 225 422 602</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    CAA kontaktuje leteckou společnost a zprostředkuje řešení sporu. Proces trvá 2-3 měsíce.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Podejte žalobu k soudu</h3>
                  <p className="mb-2">
                    Pokud ani CAA nepomůže, zbývá soudní cesta:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm mb-2">
                    <li>Žaloba se podává k okresnímu soudu podle místa bydliště</li>
                    <li>Soudní poplatek je cca 1 000-2 000 Kč</li>
                    <li>Proces trvá 6-12 měsíců</li>
                    <li>Úspěšnost je vysoká (80-90 %), pokud máte nárok</li>
                  </ul>
                  <p className="text-sm text-gray-700">
                    ⚠️ Upozornění: Soudní řízení je časově náročné a vyžaduje znalost právních postupů.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-600">
              <div className="flex items-start">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Svěřte případ ClaimWinger (Doporučeno)</h3>
                  <p className="mb-2">
                    Profesionální vymáhání kompenzace bez starostí:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-sm">
                    <li>Zkušenosti s nereagujícími aerolinkami</li>
                    <li>Právní tým, který v případě potřeby jde k soudu</li>
                    <li>Platíte až po úspěchu (žádné předběžné náklady)</li>
                    <li>Průměrná doba vyřízení 8-12 týdnů</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Přenechte vymáhání profesionálům
            </h3>
            <p className="mb-6 text-lg">
              Máme zkušenosti s nereagujícími aerolinkami a v případě potřeby jdeme k soudu bez dodatečných nákladů.
            </p>
            <Link
              href="https://claimwinger.com/cs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Podat nárok teď →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Vzorový text urgence aerolince
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-6 font-mono text-sm">
            <p className="mb-4"><strong>Předmět:</strong> Urgence reklamace - Let [číslo letu] dne [datum]</p>
            <p className="mb-2">Vážení,</p>
            <p className="mb-2">
              dne [datum] jsem podal(a) reklamaci týkající se zpožděného/zrušeného letu č. [číslo letu] z [odkud] do [kam] dne [datum letu].
            </p>
            <p className="mb-2">
              Podle nařízení EU 261/2004 mám nárok na kompenzaci ve výši [částka] EUR. Přiložil(a) jsem všechny potřebné dokumenty (palubní vstupenka, potvrzení o zpoždění).
            </p>
            <p className="mb-2">
              Uplynulo již více než 6 týdnů od podání reklamace a na můj požadavek jste nereagovali. Žádám vás o:
            </p>
            <ul className="list-disc pl-6 mb-2">
              <li>Vyřízení reklamace do 14 dnů</li>
              <li>Vyplacení kompenzace bankovním převodem</li>
            </ul>
            <p className="mb-2">
              V případě dalšího mlčení podám stížnost u Úřadu pro civilní letectví ČR a případně žalobu k soudu.
            </p>
            <p className="mb-2">V příloze zasílám kopii původní reklamace.</p>
            <p>S pozdravem,<br/>[Vaše jméno]</p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Nejčastější chyby při urgenci
          </h2>

          <div className="space-y-4 mb-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">❌ Urgujete příliš brzy</h3>
              <p className="text-sm">
                Aerolinka má 6 týdnů na odpověď. Urgence po 2 týdnech je zbytečná a může být ignorována.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">❌ Agresivní tón</h3>
              <p className="text-sm">
                Vyhrožování nebo hrubé výrazy sníží šance na úspěch. Pište profesionálně a věcně.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">❌ Nepřikládáte původní reklamaci</h3>
              <p className="text-sm">
                Aerolinka může tvrdit, že o reklamaci neví. Vždy přiložte kopii původního e-mailu.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">❌ Urgujete telefonicky bez písemného záznamu</h3>
              <p className="text-sm">
                Telefonát nemáte jak doložit. Vždy komunikujte e-mailem.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co dělat, pokud aerolinka odmítne vyplatit?
          </h2>
          
          <p className="mb-4">
            Pokud aerolinka konečně odpoví, ale nárok <strong>odmítne</strong> s odkazem na mimořádné okolnosti:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>
              <strong>Požádejte o důkazy</strong> - aerolinka musí prokázat, že šlo skutečně o mimořádnou okolnost
            </li>
            <li>
              <strong>Ověřte si fakta</strong> - zkontrolujte počasí v den letu, stávky ATC apod.
            </li>
            <li>
              <strong>Podejte stížnost u CAA</strong> - úřad posoudí oprávněnost odmítnutí
            </li>
            <li>
              <strong>Svěřte případ ClaimWinger</strong> - právníci posoudí, zda má aerolinka pravdu
            </li>
          </ol>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="font-semibold mb-2">💡 Dobrá zpráva:</p>
            <p>
              Většina odmítnutí s odkazem na mimořádné okolnosti je <strong>neoprávněná</strong>. Aerolinie často lžou, aby nemusely platit. ClaimWinger má zkušenosti s rozpoznáním falešných tvrzení.
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
                Ano, pokud aerolinka vyplatí kompenzaci se zpožděním. V praxi se to však vymáhá obtížně a úroky jsou nízké.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když aerolinka tvrdí, že reklamaci nedostala?
              </h3>
              <p>
                Proto je důležité komunikovat e-mailem a uchovávat potvrzení o odeslání. V urgenci přiložte kopii původní reklamace jako důkaz.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Je lepší volat nebo psát e-mail?
              </h3>
              <p>
                Vždy <strong>e-mail</strong>. Telefonickou komunikaci nemáte jak doložit v případě sporu. E-mail je písemný důkaz.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Kolik času zabere soudní vymáhání?
              </h3>
              <p>
                Soudní řízení trvá v průměru 6-12 měsíců v první instanci. Pokud aerolinka podá odvolání, může to být i delší. Více v článku <Link href="/cs/blog/jak-dlouho-trva-vyplaceni-kompenzace" className="text-blue-600 hover:underline">Jak dlouho trvá vyplacení kompenzace</Link>.
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
                <Link href="/cs/blog/jak-podat-reklamaci-krok-za-krokem" className="text-blue-600 hover:underline">
                  → Jak podat reklamaci za zpoždění letu krok za krokem
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/kolik-dostanu-za-zpozdeny-let" className="text-blue-600 hover:underline">
                  → Kolik dostanu za zpožděný let?
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
