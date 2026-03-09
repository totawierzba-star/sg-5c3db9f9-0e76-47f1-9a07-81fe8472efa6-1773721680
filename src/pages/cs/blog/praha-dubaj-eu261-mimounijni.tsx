import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Globe, CheckCircle, AlertCircle } from "lucide-react";

export default function PrahaDubajEU261() {
  return (
    <LayoutCs>
      <SEO
        title="Praha–Dubaj: Kdy platí EU261 na mimounijních dopravcích?"
        description="Let Praha–Dubaj zpožděný nebo zrušený? Zjistěte, kdy máte nárok na kompenzaci až 600 € při letu s Emirates nebo FlyDubai podle EU261."
        url="https://lotproblem.pl/cs/blog/praha-dubaj-eu261-mimounijni"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <Link 
            href="/cs/blog"
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4 inline-block transition-colors"
          >
            ← Zpět na blog
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Praha–Dubaj: Kdy platí EU261 na mimounijních dopravcích?
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>10 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> <strong>ANO</strong> — EU261 platí pro lety Praha→Dubaj i když letíte s mimounijním dopravcem (Emirates, FlyDubai). Pokud let odlétal Z Prahy a byl zpožděný <strong>4+ hodiny</strong>, máte nárok na kompenzaci <strong>€600</strong>.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ✈️ Let Praha–Dubaj zpožděný nebo zrušený?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zjistěte zdarma během 2 minut, zda máte nárok na kompenzaci až €600. Bez rizika — platba pouze při úspěchu.
            </p>
            <Link
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4 flex items-center">
              <Globe className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Klíčové pravidlo EU261 pro mimounijní dopravce
            </h2>
            <p className="text-lg mb-4">
              <strong>EU261 platí pro VŠECHNY lety odlétající Z EU</strong>, bez ohledu na:
            </p>
            <ul className="space-y-2">
              <li>❌ <strong>Národnost aerolinie</strong> (Emirates = SAE, FlyDubai = SAE)</li>
              <li>❌ <strong>Destinaci</strong> (Dubaj není v EU)</li>
              <li>✅ <strong>POUZE záleží:</strong> Let odlétal Z Prahy (EU letiště)</li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>Důležité:</strong> Pro zpáteční let Dubaj→Praha EU261 NEPLATÍ (odlet mimo EU + ne-EU aerolinka).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci Praha–Dubaj?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na €600 kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>⏰ <strong>Zpoždění 4+ hodiny</strong> při příletu do Dubaje (dlouhá vzdálenost &gt;3500 km)</li>
              <li>🛫 <strong>Zrušení letu</strong> oznámeno méně než 14 dní předem</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada = PLATÍ)</li>
              <li>✈️ <strong>Let odlétal Z Prahy</strong> (EU letiště) — platí i pro Emirates/FlyDubai!</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong></li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>Poznámka:</strong> Při zpoždění 3-4h Praha→Dubaj máte nárok na €300 (snížená kompenzace pro dlouhé trasy). Při 4h+ → €600.
            </p>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              ❌ Nemáte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>🔄 <strong>Zpáteční let Dubaj→Praha</strong> (odlet mimo EU + ne-EU dopravce)</li>
              <li>⏱️ <strong>Zpoždění méně než 4 hodiny</strong> při příletu do Dubaje</li>
              <li>🌩️ <strong>Extrémní počasí</strong> uzavřelo dubajské letiště</li>
              <li>✈️ <strong>Stávka ATC</strong> nebo jiná mimořádná okolnost mimo kontrolu aerolinie</li>
              <li>📢 <strong>Informováni 14+ dní předem</strong> o zrušení a alternativní let dorazil max. 2h později</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kolik dostanete za zpoždění Praha–Dubaj?
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Vzdálenost letu</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Zpoždění</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Kompenzace</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Praha→Dubaj<br/>(~4500 km)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">3-4 hodiny</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€300</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Praha→Dubaj<br/>(~4500 km)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">4+ hodiny</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-green-600 dark:text-green-400">€600</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Dubaj→Praha<br/>(zpět)</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Jakékoliv</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-red-600 dark:text-red-400">€0 (EU261 neplatí)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
              🔍 Příklady reálných případů
            </h3>
            <ul className="space-y-3">
              <li>
                <strong>Emirates OK→DXB zpožděn 5h</strong> (technická závada v Praze)<br/>
                <span className="text-sm">→ Nárok na €600 (let Z EU + 4h+ zpoždění)</span>
              </li>
              <li>
                <strong>FlyDubai PRG→DXB zrušen den před odletem</strong> (provozní důvody)<br/>
                <span className="text-sm">→ Nárok na €600 + refundace letenky nebo náhradní let</span>
              </li>
              <li>
                <strong>Emirates DXB→PRG zpožděn 6h</strong> (zpáteční let)<br/>
                <span className="text-sm">→ Žádný nárok (odlet mimo EU + ne-EU dopravce)</span>
              </li>
              <li>
                <strong>FlyDubai PRG→DXB zpožděn 3,5h</strong> (slot delay)<br/>
                <span className="text-sm">→ Nárok na €300 (3-4h zpoždění na dlouhé trase)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Nejčastější dopravci Praha–Dubaj
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Emirates (PRG→DXB)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 1× denně (non-stop)</li>
                <li><strong>Doba letu:</strong> ~5,5 hodiny</li>
                <li><strong>Letiště:</strong> Dubaj International (DXB)</li>
                <li><strong>Průměrná cena:</strong> 12 000-25 000 Kč</li>
                <li><strong>On-time rate:</strong> ~82%</li>
                <li><strong>Kompenzace:</strong> €600 za 4h+ zpoždění (pouze PRG→DXB)</li>
                <li><strong>Poznámka:</strong> Premium služby, A380 na vybrané lety</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                FlyDubai (PRG→DXB)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 5-7× týdně (non-stop)</li>
                <li><strong>Doba letu:</strong> ~5,5 hodiny</li>
                <li><strong>Letiště:</strong> Dubaj International (DXB)</li>
                <li><strong>Průměrná cena:</strong> 8000-18 000 Kč</li>
                <li><strong>On-time rate:</strong> ~76%</li>
                <li><strong>Kompenzace:</strong> €600 za 4h+ zpoždění (pouze PRG→DXB)</li>
                <li><strong>Poznámka:</strong> Low-cost dceřiná společnost Emirates Group</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-green-600 dark:border-green-400 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💰 Získejte €600 za zpoždění Praha–Dubaj
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              98% úspěšnost. Pouze 25% provize při výhře. Žádné riziko — platba jen při úspěchu.
            </p>
            <Link
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Podat nárok na kompenzaci →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Emirates je z SAE — platí EU261 pro let Z Prahy?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO!</strong> EU261 platí pro VŠECHNY lety odlétající Z EU, bez ohledu na národnost aerolinie. Emirates/FlyDubai musí respektovat EU261 pro lety Z Prahy.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Zpáteční let Dubaj→Praha zpožděn 6h — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE.</strong> EU261 platí pouze pro lety:<br/>
                • Odlétající Z EU (jakákoliv aerolinka) NEBO<br/>
                • Přilétající DO EU (pouze EU aerolinie)<br/><br/>
                Dubaj→Praha s Emirates/FlyDubai = odlet mimo EU + ne-EU dopravce → EU261 neplatí.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Emirates zpožděn 3,5h — mám nárok na €600 nebo €300?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>€300.</strong> Pro dlouhé trasy (&gt;3500 km) platí:<br/>
                • 3-4h zpoždění → €300<br/>
                • 4h+ zpoždění → €600
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 FlyDubai odmítla kompenzaci s odůvodněním "jsme mimo EU" — je to platné?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE, to je lež!</strong> FlyDubai musí respektovat EU261 pro lety Z EU. Národnost aerolinie není relevantní. Kontaktujte <Link href="https://claimwinger.com/cs/zpozdeny-let" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">ClaimWinger</Link> — 98% úspěšnost vymáhání.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Mohu požadovat kompenzaci za každého cestujícího?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Rodina 4 osob se zpožděním 4h+ = 4 × €600 = <strong>€2400 celkem</strong>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Let zpožděn kvůli písečné bouři v Dubaji — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí.</strong> Pokud písečná bouře zavřela dubajské letiště (všechny lety zrušeny/zpožděny) → mimořádná okolnost. Pokud pouze váš let měl problém → máte nárok na €600.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Technická závada na dubajském letišti — platí EU261?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Technická závada NENÍ mimořádná okolnost podle rozsudku Evropského soudu (C-549/07). Emirates/FlyDubai musí zaplatit €600 i když závada nastala v Dubaji.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Jak dlouho mám na podání reklamace?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                V ČR je prekluzivní lhůta <strong>3 roky</strong>. Doporučujeme reklamovat do <strong>6 měsíců</strong> pro nejlepší výsledky.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Získejte až €600 za zpoždění Praha–Dubaj
            </h2>
            <p className="text-xl mb-6 opacity-90">
              98% úspěšnost • Žádné poplatky předem • Pouze 25% provize při výhře
            </p>
            <Link
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Zkontrolovat nárok zdarma →
            </Link>
            <p className="text-sm mt-4 opacity-75">
              Trvá 2 minuty • Není třeba kreditní karta • Platba pouze při úspěchu
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mt-12">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📚 Související články:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cs/blog/letiste-praha-zpozdeny-let" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Letiště Praha: Zpožděný let
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/plati-eu261-lety-mimo-eu" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Platí EU261 na lety mimo EU?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Co je nařízení ES 261/2004?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/emirates-zpozdeni-praha-eu261" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Emirates zpoždění Praha
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Emirates je z SAE — platí EU261 pro let Z Prahy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO! EU261 platí pro VŠECHNY lety odlétající Z EU, bez ohledu na národnost aerolinie. Emirates/FlyDubai musí respektovat EU261 pro lety Z Prahy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Zpáteční let Dubaj→Praha zpožděn 6h — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE. EU261 platí pouze pro lety odlétající Z EU (jakákoliv aerolinka) NEBO přilétající DO EU (pouze EU aerolinie). Dubaj→Praha s Emirates/FlyDubai = odlet mimo EU + ne-EU dopravce → EU261 neplatí."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Emirates zpožděn 3,5h — mám nárok na €600 nebo €300?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "€300. Pro dlouhé trasy (>3500 km): 3-4h zpoždění → €300, 4h+ zpoždění → €600."
                  }
                },
                {
                  "@type": "Question",
                  "name": "FlyDubai odmítla kompenzaci s odůvodněním jsme mimo EU — je to platné?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE, to je lež! FlyDubai musí respektovat EU261 pro lety Z EU. Národnost aerolinie není relevantní. Kontaktujte ClaimWinger — 98% úspěšnost vymáhání."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak dlouho mám na podání reklamace?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "V ČR je prekluzivní lhůta 3 roky. Doporučujeme reklamovat do 6 měsíců pro nejlepší výsledky."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </LayoutCs>
  );
}