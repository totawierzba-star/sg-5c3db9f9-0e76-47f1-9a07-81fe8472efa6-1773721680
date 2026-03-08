import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function JakDlouhoNarokZpozdenyLet() {
  return (
    <LayoutCs>
      <SEO
        title="Jak dlouho mám na uplatnění nároku za zpožděný let? [3 roky]"
        description="Zjistěte, jak dlouho můžete reklamovat zpožděný nebo zrušený let. Prekluzivní lhůta 3 roky v ČR a postupy pro staré lety."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Jak dlouho mám na uplatnění nároku za zpožděný let?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            V České republice máte na uplatnění nároku za zpožděný nebo zrušený let <strong>3 roky od data letu</strong>. To je tzv. prekluzivní lhůta podle občanského zákoníku. Po uplynutí 3 let nárok zaniká a nelze jej vymáhat.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Prekluzivní lhůta 3 roky - co to znamená?
          </h2>
          
          <p className="mb-4">
            Nařízení <strong>EU261/2004</strong> nestanovuje konkrétní lhůtu pro uplatnění nároku. Záleží na národní legislativě jednotlivých zemí EU:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="border border-gray-300 p-3 text-left">Země</th>
                  <th className="border border-gray-300 p-3 text-left">Prekluzivní lhůta</th>
                  <th className="border border-gray-300 p-3 text-left">Poznámka</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Česká republika</td>
                  <td className="border border-gray-300 p-3 font-bold">3 roky</td>
                  <td className="border border-gray-300 p-3">Od data letu</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Slovensko</td>
                  <td className="border border-gray-300 p-3 font-bold">3 roky</td>
                  <td className="border border-gray-300 p-3">Od data letu</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Polsko</td>
                  <td className="border border-gray-300 p-3 font-bold">3 roky</td>
                  <td className="border border-gray-300 p-3">Od data letu</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 p-3">Německo</td>
                  <td className="border border-gray-300 p-3 font-bold">3 roky</td>
                  <td className="border border-gray-300 p-3">Od konce kalendářního roku</td>
                </tr>
                <tr className="bg-white">
                  <td className="border border-gray-300 p-3">Velká Británie</td>
                  <td className="border border-gray-300 p-3 font-bold">6 let</td>
                  <td className="border border-gray-300 p-3">Nejdelší lhůta v Evropě</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="font-semibold mb-2">⚠️ Důležité:</p>
            <p>
              Lhůta běží od <strong>data letu</strong>, ne od data podání reklamace. Pokud váš let byl 15. ledna 2021, máte čas do 14. ledna 2024 (včetně) na podání nároku.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Praktické příklady výpočtu lhůty
          </h2>

          <div className="space-y-4 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Příklad 1: Let v roce 2021</h3>
              <p className="mb-2">
                <strong>Datum letu:</strong> 10. března 2021<br/>
                <strong>Poslední den pro reklamaci:</strong> 9. března 2024
              </p>
              <p className="text-sm text-gray-700">
                Pokud podáte reklamaci 10. března 2024, bude zamítnuta z důvodu prekluze.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Příklad 2: Let koncem roku</h3>
              <p className="mb-2">
                <strong>Datum letu:</strong> 28. prosince 2021<br/>
                <strong>Poslední den pro reklamaci:</strong> 27. prosince 2024
              </p>
              <p className="text-sm text-gray-700">
                I když uplynul rok kalendářní, počítá se přesně 3 roky od data letu.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Příklad 3: Let v přestupném roce</h3>
              <p className="mb-2">
                <strong>Datum letu:</strong> 29. února 2020 (přestupný rok)<br/>
                <strong>Poslední den pro reklamaci:</strong> 28. února 2023 (v nepřestupném roce)
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co když je můj let starší než 3 roky?
          </h2>
          
          <p className="mb-4">
            Pokud od vašeho letu uplynulo více než 3 roky:
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="font-bold mb-2">❌ Nárok zanikl prekluzí</p>
            <p className="mb-4">
              Bohužel nemůžete získat kompenzaci, ani když měli být původně oprávněni. Prekluzivní lhůta je nepřekročitelná.
            </p>
            <p className="text-sm">
              Výjimkou jsou případy, kdy jste v době letu podali reklamaci u aerolinek a probíhala komunikace - to může lhůtu přerušit.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak zjistit, zda stále mám nárok?
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-3">Kontrolní kroky:</h3>
            
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Zjistěte přesné datum letu</strong> - podívejte se na palubní vstupenku nebo potvrzení rezervace
              </li>
              <li>
                <strong>Vypočítejte 3 roky od tohoto data</strong> - to je poslední den pro podání nároku
              </li>
              <li>
                <strong>Zkontrolujte aktuální datum</strong> - pokud ještě neuplynulo 3 roky, máte nárok
              </li>
              <li>
                <strong>Pokud zbývá méně než měsíc</strong> - jednejte rychle! Doporučujeme využít ClaimWinger
              </li>
            </ol>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Zkontrolujte nárok než vyprší lhůta
            </h3>
            <p className="mb-6 text-lg">
              Máte zpožděný nebo zrušený let z posledních 3 let? Kontrola nároku trvá 2 minuty.
            </p>
            <Link
              href="https://claimwinger.com/cs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Přerušení prekluzivní lhůty
          </h2>
          
          <p className="mb-4">
            Existují situace, kdy se prekluzivní lhůta <strong>přeruší</strong> a začne běžet znovu:
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">1. Uznání dluhu aerolinkou</h3>
              <p className="text-sm">
                Pokud aerolinka písemně uzná váš nárok na kompenzaci (i když ji nevyplatí), lhůta se přeruší a začne běžet nová 3letá lhůta.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">2. Podání žaloby k soudu</h3>
              <p className="text-sm">
                Podáním žaloby se lhůta zastaví až do pravomocného rozhodnutí soudu.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">3. Mimosoudní řízení (CAA)</h3>
              <p className="text-sm">
                Podání stížnosti u Úřadu pro civilní letectví (CAA) také přerušuje běh lhůty.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Proč nečekat do poslední chvíle?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border-2 border-red-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-red-600">❌ Rizika odkládání</h3>
              <ul className="text-sm space-y-1 list-disc pl-4">
                <li>Zapomenete na blížící se lhůtu</li>
                <li>Aerolinka může zdržovat odpověď</li>
                <li>Ztratíte dokumenty potřebné k reklamaci</li>
                <li>Změna právních předpisů</li>
              </ul>
            </div>

            <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-green-600">✅ Výhody rychlého jednání</h3>
              <ul className="text-sm space-y-1 list-disc pl-4">
                <li>Máte dostatek času na vyřízení</li>
                <li>Dokumenty jsou snadno dostupné</li>
                <li>Lepší vyjednávací pozice</li>
                <li>Rychlejší vyplacení kompenzace</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak ClaimWinger pomůže s vypršením lhůty?
          </h2>
          
          <p className="mb-4">
            Pokud vám zbývá málo času do konce prekluzivní lhůty:
          </p>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Rychlé posouzení nároku</strong> - do 24 hodin zjistíme, zda máte nárok</li>
            <li><strong>Okamžité podání reklamace</strong> - přerušíme běh lhůty ještě dnes</li>
            <li><strong>Profesionální právní zastoupení</strong> - v případě potřeby jdeme k soudu</li>
            <li><strong>Žádné předběžné náklady</strong> - platíte pouze z vyplacené kompenzace</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Časté otázky (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Začíná lhůta běžet od data letu nebo od data, kdy jsem se o zpoždění dozvěděl?
              </h3>
              <p>
                Lhůta začíná běžet vždy od <strong>data letu</strong>, ne od data, kdy jste se o svém právu dozvěděli.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Přerušuje běh lhůty podání reklamace u aerolinek?
              </h3>
              <p>
                Ne, samotné podání reklamace běh lhůty nepřerušuje. Lhůtu přeruší až <strong>uznání dluhu</strong> aerolinkou nebo podání žaloby k soudu.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když jsem podal reklamaci před 2,5 roky a aerolinka stále neodpověděla?
              </h3>
              <p>
                Pokud aerolinka neuznal váš nárok písemně, lhůta stále běží od data letu. Doporučujeme urychleně podat žalobu nebo svěřit případ ClaimWinger. Více v článku <Link href="/cs/blog/co-delat-aerolinka-neodpovi-reklamaci" className="text-blue-600 hover:underline">Co dělat když aerolinka neodpoví</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Mohu reklamovat let, který byl přesně před 3 roky?
              </h3>
              <p>
                Ano, pokud ještě neuplynulo přesně 3 roky (počítá se od 00:00 následujícího dne po výročí). Například let z 1. června 2021 můžete reklamovat nejpozději 31. května 2024.
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h3 className="font-bold text-xl mb-4">Související články:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs/blog/reklamovat-let-stary-3-roky" className="text-blue-600 hover:underline">
                  → Mohu reklamovat let starý 3 roky?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/jak-dlouho-trva-vyplaceni-kompenzace" className="text-blue-600 hover:underline">
                  → Jak dlouho trvá vyplacení kompenzace?
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