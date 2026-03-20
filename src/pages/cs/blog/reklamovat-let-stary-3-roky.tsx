import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function ReklamovatLetStary3Roky() {
  return (
    <LayoutCs>
      <SEO
        title="Mohu reklamovat let starý 3 roky? [Prekluzivní lhůta]"
        description="Zjistěte, zda můžete ještě reklamovat let starý 3 roky. Pravidla prekluzivní lhůty a výjimky v České republice."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Mohu reklamovat let starý 3 roky?
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Rychlá odpověď:
          </p>
          <p className="text-gray-800">
            <strong>Záleží na přesném datu.</strong> V České republice máte na reklamaci letu <strong>3 roky od data letu</strong>. Pokud od vašeho letu uplynulo <strong>přesně 3 roky nebo méně</strong>, stále můžete reklamovat. Po uplynutí 3 let nárok zaniká prekluzí.
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak přesně funguje 3letá lhůta?
          </h2>
          
          <p className="mb-4">
            Prekluzivní lhůta v České republice je <strong>3 roky od data letu</strong>. To znamená:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Začátek lhůty:</strong> Den po datu letu (00:00 dalšího dne)
              </li>
              <li>
                <strong>Konec lhůty:</strong> Přesně 3 roky od tohoto data
              </li>
              <li>
                <strong>Poslední den pro reklamaci:</strong> Den před 3. výročím letu
              </li>
            </ul>
          </div>

          <h3 className="text-xl font-bold mt-6 mb-3">Praktické příklady:</h3>

          <div className="space-y-4 mb-8">
            <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-green-600">✅ STÁLE MŮŽETE REKLAMOVAT</h4>
              <p className="mb-2">
                <strong>Datum letu:</strong> 15. března 2021<br/>
                <strong>Dnes je:</strong> 10. března 2024<br/>
                <strong>Poslední den:</strong> 14. března 2024
              </p>
              <p className="text-sm text-gray-700">
                Zbývá vám ještě 4 dny - jednajte rychle!
              </p>
            </div>

            <div className="bg-white border-2 border-green-600 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-green-600">✅ STÁLE MŮŽETE REKLAMOVAT</h4>
              <p className="mb-2">
                <strong>Datum letu:</strong> 1. ledna 2022<br/>
                <strong>Dnes je:</strong> 8. března 2024<br/>
                <strong>Poslední den:</strong> 31. prosince 2024
              </p>
              <p className="text-sm text-gray-700">
                Máte dostatek času, ale neodkládejte to.
              </p>
            </div>

            <div className="bg-white border-2 border-red-600 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-red-600">❌ JIŽ NELZE REKLAMOVAT</h4>
              <p className="mb-2">
                <strong>Datum letu:</strong> 1. března 2021<br/>
                <strong>Dnes je:</strong> 8. března 2024<br/>
                <strong>Lhůta vypršela:</strong> 28. února 2024
              </p>
              <p className="text-sm text-gray-700">
                Bohužel nárok zanikl prekluzí.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co když je můj let přesně před 3 lety?
          </h2>
          
          <p className="mb-4">
            Pokud váš let byl <strong>přesně před 3 lety</strong>, záleží na tom, zda uplynul celý den:
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 mb-8">
            <p className="font-semibold mb-2">Příklad hraniční situace:</p>
            <p className="mb-2">
              <strong>Datum letu:</strong> 8. března 2021<br/>
              <strong>Dnes je:</strong> 8. března 2024 (přesné výročí)
            </p>
            <p className="mb-2">
              <strong>❌ JIŽ NELZE REKLAMOVAT</strong> - uplynulo přesně 3 roky (od 00:00 9. března 2021 do 00:00 9. března 2024).
            </p>
            <p className="text-sm text-gray-700">
              Poslední den pro reklamaci byl 7. března 2024 (do 23:59).
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Výjimky a přerušení prekluzivní lhůty
          </h2>
          
          <p className="mb-4">
            Existují situace, kdy se prekluzivní lhůta <strong>přeruší</strong> a začne běžet nová 3letá lhůta:
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">1. Uznání dluhu aerolinkou</h3>
              <p className="text-sm mb-2">
                Pokud aerolinka <strong>písemně uzná</strong> váš nárok na kompenzaci, lhůta se přeruší.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Příklad:</strong> Let byl 1. března 2021, aerolinka uznala nárok 15. února 2023 → nová lhůta běží od 15. února 2023 (můžete reklamovat až do 14. února 2026).
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">2. Podání žaloby k soudu</h3>
              <p className="text-sm mb-2">
                Podáním žaloby se lhůta <strong>zastaví</strong> až do pravomocného rozhodnutí soudu.
              </p>
              <p className="text-sm text-gray-700">
                Pokud vám zbývá málo času, můžete podat žalobu preventivně.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold mb-2">3. Mimosoudní řízení (CAA)</h3>
              <p className="text-sm mb-2">
                Podání stížnosti u Úřadu pro civilní letectví (CAA) může přerušit běh lhůty.
              </p>
              <p className="text-sm text-gray-700">
                Je vhodné podat stížnost včas, pokud vám zbývá méně než rok.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
            <p className="font-semibold mb-2">⚠️ Pozor:</p>
            <p>
              Samotné <strong>podání reklamace u aerolinek NEPŘERUŠUJE</strong> běh prekluzivní lhůty. Lhůtu přeruší až uznání dluhu aerolinkou nebo podání žaloby.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co dělat, když zbývá méně než měsíc?
          </h2>

          <p className="mb-4">
            Pokud zjistíte, že máte právo na kompenzaci a zbývá vám méně než měsíc do konce lhůty:
          </p>

          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>
              <strong>JEDNEJTE OKAMŽITĚ</strong> - neodkládejte to ani o den
            </li>
            <li>
              <strong>Využijte ClaimWinger</strong> - profesionální služba podá reklamaci během 24 hodin
            </li>
            <li>
              <strong>Připravte dokumenty</strong> - palubní vstupenka, boarding pass, potvrzení rezervace
            </li>
            <li>
              <strong>Zvažte preventivní žalobu</strong> - pokud zbývá méně než týden, může být rychlejší podat rovnou žalobu
            </li>
          </ol>

          <div className="bg-blue-600 text-white p-8 rounded-lg text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Máte let z posledních 3 let?
            </h3>
            <p className="mb-6 text-lg">
              ClaimWinger posoudí váš nárok zdarma během 2 minut a v případě blížící se lhůty podá reklamaci okamžitě.
            </p>
            <Link
              href="https://claimwinger.com/cs"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Co když jsem již podal reklamaci před 2 roky?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <p className="mb-4">
              <strong>Situace:</strong> Let byl v březnu 2021, podali jste reklamaci v květnu 2021, ale aerolinka stále neodpověděla nebo odmítla vyplatit.
            </p>
            
            <p className="mb-4">
              <strong>Řešení:</strong>
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Pokud aerolinka <strong>uznal váš nárok písemně</strong>, lhůta běží od data uznání
              </li>
              <li>
                Pokud aerolinka <strong>pouze mlčela nebo odmítla</strong>, původní lhůta stále běží (3 roky od data letu)
              </li>
              <li>
                Doporučujeme <strong>okamžitě podat žalobu</strong> nebo svěřit případ ClaimWinger
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Jak vypočítat, kolik času vám zbývá?
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-3">Kalkulačka prekluzivní lhůty:</h3>
            
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                <strong>Zjistěte přesné datum letu</strong> (den, měsíc, rok)
              </li>
              <li>
                <strong>Přičtěte 3 roky</strong> k tomuto datu
              </li>
              <li>
                <strong>Odečtěte 1 den</strong> = poslední den pro podání reklamace
              </li>
            </ol>

            <div className="bg-white p-4 rounded border mt-4">
              <p className="text-sm mb-2"><strong>Příklad výpočtu:</strong></p>
              <p className="text-sm mb-1">
                Datum letu: <strong>10. června 2021</strong><br/>
                +3 roky = <strong>10. června 2024</strong><br/>
                Poslední den pro reklamaci = <strong>9. června 2024</strong>
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            Proč je důležité jednat včas?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white border-2 border-red-600 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-red-600">❌ Rizika odkládání</h3>
              <ul className="text-sm space-y-1 list-disc pl-4">
                <li>Zapomenete na blížící se lhůtu</li>
                <li>Ztratíte dokumenty (palubní vstupenka)</li>
                <li>Aerolinka bude zdržovat odpověď</li>
                <li>Po uplynutí lhůty ztratíte nárok navždy</li>
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
            Časté otázky (FAQ)
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">
                Můj let byl přesně před 3 lety a 1 dnem. Mohu ještě reklamovat?
              </h3>
              <p>
                <strong>Ne.</strong> Pokud uplynulo 3 roky a 1 den od data letu, prekluzivní lhůta vypršela a nárok zanikl.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Co když jsem podal reklamaci před měsícem a blíží se konec lhůty?
              </h3>
              <p>
                Samotné podání reklamace nepřerušuje běh lhůty. Pokud aerolinka neuznala váš nárok písemně a blíží se konec 3 let, doporučujeme <strong>okamžitě podat žalobu</strong> nebo kontaktovat ClaimWinger.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Běží lhůta od data letu nebo od data, kdy jsem se dozvěděl o svém právu?
              </h3>
              <p>
                Lhůta běží <strong>vždy od data letu</strong>, ne od data, kdy jste se o svém právu dozvěděli. Více v článku <Link href="/cs/blog/jak-dlouho-narok-zpozdeny-let" className="text-blue-600 hover:underline">Jak dlouho mám na uplatnění nároku</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                Můžu reklamovat let z 29. února 2020 (přestupný rok) v roce 2023?
              </h3>
              <p>
                Ano. Lhůta vyprší 28. února 2023 (v nepřestupných letech se používá 28. únor jako odpovídající datum).
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg mt-12">
            <h3 className="font-bold text-xl mb-4">Související články:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs/blog/jak-dlouho-narok-zpozdeny-let" className="text-blue-600 hover:underline">
                  → Jak dlouho mám na uplatnění nároku za zpožděný let?
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
