import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, TrendingUp, CheckCircle, Wind } from "lucide-react";

export default function PrahaAmsterdamKompenzace() {
  return (
    <LayoutCs>
      <SEO
        title="Praha–Amsterdam: Nejčastější zpoždění a jak na kompenzaci"
        description="Zpožděný nebo zrušený let Praha–Amsterdam? Získejte až 250 € kompenzace. Průvodce právy pasažérů na klíčové evropské trase."
        url="https://problemlot.com/cs/blog/praha-amsterdam-kompenzace"
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
            Praha–Amsterdam: Nejčastější zpoždění a jak na kompenzaci
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>9 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> Trasa Praha–Amsterdam je klíčovým business a transfer hubem. Pokud byl váš let zpožděný <strong>3+ hodiny</strong> nebo zrušen, máte nárok na kompenzaci <strong>€250</strong> podle nařízení EU 261/2004.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ✈️ Měli jste problém na trase Praha–Amsterdam?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zjistěte zdarma během 2 minut, zda máte nárok na kompenzaci €250. Bez rizika — platba pouze při úspěchu.
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
              <TrendingUp className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Trasa Praha–Amsterdam — základní info
            </h2>
            <ul className="space-y-2">
              <li><strong>Vzdálenost:</strong> ~710 km</li>
              <li><strong>Doba letu:</strong> ~1,5 hodiny</li>
              <li><strong>Denně letů:</strong> 6-8 (různé aerolinie)</li>
              <li><strong>Ročně cestujících:</strong> ~600 000</li>
              <li><strong>Hlavní dopravci:</strong> KLM, Transavia, Czech Airlines (codeshare), Smartwings</li>
              <li><strong>Amsterdam letiště:</strong> Schiphol (AMS) — 3. největší hub v Evropě</li>
              <li><strong>Kompenzace za zpoždění 3h+:</strong> €250</li>
              <li><strong>Účel cesty:</strong> 60% business, 40% transfer lety</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci Praha–Amsterdam?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na €250 kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>⏰ <strong>Zpoždění 3+ hodiny</strong> při příletu do Amsterdamu</li>
              <li>🛫 <strong>Zrušení letu</strong> oznámeno méně než 14 dní předem</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada = PLATÍ)</li>
              <li>✈️ <strong>Let Z Prahy</strong> (EU letiště) — platí pro všechny aerolinie!</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong></li>
              <li>🔄 <strong>Zmeškaná přesiadka</strong> v Amsterdamu (pokud 1 rezervace)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
              <Wind className="mr-2 h-5 w-5" />
              Schiphol (AMS) — nejčastější problémy
            </h3>
            <p className="mb-3">
              <strong>DŮLEŽITÉ:</strong> Amsterdam Schiphol patří k nejvíce zatíženým letištím Evropy. Nejčastější problémy:
            </p>
            <ul className="space-y-2">
              <li>🌫️ <strong>Povětrnostní podmínky:</strong> Silný vítr z Severního moře (častější podzim/zima)</li>
              <li>✈️ <strong>Přetížené letiště:</strong> 71M cestujících ročně (2025)</li>
              <li>🔧 <strong>Slot delays:</strong> Časté zpoždění kvůli nedostatku slotů</li>
              <li>🧳 <strong>Personální problémy:</strong> Nedostatek bezpečnostního personálu (2023-2025)</li>
              <li>🔄 <strong>Transfer lety:</strong> KLM hub → vysoké riziko zmeškaných přesiadek</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Nejčastější dopravci Praha–Amsterdam
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                KLM Royal Dutch Airlines (PRG→AMS)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 3-4× denně</li>
                <li><strong>Letiště:</strong> Amsterdam Schiphol (AMS)</li>
                <li><strong>Průměrná cena:</strong> 3000-7000 Kč</li>
                <li><strong>On-time rate:</strong> ~74%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
                <li><strong>Poznámka:</strong> Hlavní hub pro transfer lety (Asie, USA)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Transavia (PRG→AMS)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 5-7× týdně</li>
                <li><strong>Letiště:</strong> Amsterdam Schiphol (AMS)</li>
                <li><strong>Průměrná cena:</strong> 1500-4000 Kč</li>
                <li><strong>On-time rate:</strong> ~76%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
                <li><strong>Poznámka:</strong> Low-cost dceřiná společnost KLM</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Czech Airlines (codeshare s KLM)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> Codeshare lety (provozuje Smartwings)</li>
                <li><strong>Letiště:</strong> Amsterdam Schiphol (AMS)</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
                <li><strong>Poznámka:</strong> Při codeshare zodpovídá provozní dopravce (Smartwings)</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-green-600 dark:border-green-400 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💰 Měli jste zpoždění Praha–Amsterdam?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              98% úspěšnost. Pouze 25% provize při výhře. Žádné riziko — platba jen při úspěchu.
            </p>
            <Link
              href="https://claimwinger.com/cs/zpozdeny-let"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Podat nárok na €250 →
            </Link>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 KLM zpožděn 4h Praha→Amsterdam — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Máte nárok na €250 kompenzaci. KLM má povinnost vyplatit pokud příčina nebyla mimořádná okolnost.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Zmeškal jsem přesídku v Amsterdamu — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO, pokud:</strong><br/>
                • Měli jste <strong>jednu rezervaci</strong> (Praha→Amsterdam→New York jako 1 letenka)<br/>
                • Zpoždění Praha→Amsterdam způsobilo zmeškání další lety<br/>
                • Dorazili jste na finální destinaci 3+ hodiny později<br/><br/>
                <strong>Kompenzace:</strong> €250-600 podle celkové vzdálenosti Praha→finální destinace.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Let zpožděn kvůli silnému větru v Amsterdamu — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na situaci.</strong> Pokud extrémní vítr zavřel letiště nebo všechny lety měly problémy → mimořádná okolnost. Pokud pouze váš let byl zpožděn → máte nárok na €250.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Transavia odmítla kompenzaci s odůvodněním "slot delay" — je to platné?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE, to je lež!</strong> Slot delay (čekání na místo pro odlet/přistání) NENÍ mimořádná okolnost. Aerolinka musí zahrnout slot delays do svého plánování. Máte nárok na €250.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Codeshare let (Czech Airlines číslo, provozuje Smartwings) — kdo platí kompenzaci?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Zodpovídá provozní dopravce.</strong> Při codeshare musíte reklamovat u aerolinie, která skutečně provozovala let (Smartwings), ne u té na letu (Czech Airlines).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 KLM nabízí voucher místo hotovosti — musím přijmout?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE.</strong> Máte právo na <strong>hotovostní kompenzaci</strong> podle EU261. Voucher můžete přijmout pouze dobrovolně. NIKDY nepodepisujte dokumenty vzdávající se práva na hotovost.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Mohu požadovat kompenzaci za každého cestujícího?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Rodina 4 osob se zpožděním 3h+ = 4 × €250 = <strong>€1000 celkem</strong>.
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
              🚀 Získejte €250 za zpoždění Praha–Amsterdam
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
                <Link href="/cs/blog/klm-kompenzace-zpozdeni-cesko" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → KLM: Kompenzace za zpoždění
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/zmeskane-prestupy-kompenzace" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Zmeškaná přesídka: Kompenzace
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/praha-londyn-trasa-kompenzace" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Praha–Londýn: Nejčastější trasa
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
                  "name": "KLM zpožděn 4h Praha→Amsterdam — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Máte nárok na €250 kompenzaci. KLM má povinnost vyplatit pokud příčina nebyla mimořádná okolnost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Zmeškal jsem přesídku v Amsterdamu — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO, pokud: měli jste jednu rezervaci (Praha→Amsterdam→New York jako 1 letenka), zpoždění Praha→Amsterdam způsobilo zmeškání další lety, dorazili jste na finální destinaci 3+ hodiny později. Kompenzace: €250-600 podle celkové vzdálenosti."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Transavia odmítla kompenzaci s odůvodněním slot delay — je to platné?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE, to je lež! Slot delay (čekání na místo pro odlet/přistání) NENÍ mimořádná okolnost. Aerolinka musí zahrnout slot delays do svého plánování. Máte nárok na €250."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Codeshare let — kdo platí kompenzaci?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zodpovídá provozní dopravce. Při codeshare musíte reklamovat u aerolinie, která skutečně provozovala let, ne u té na letu."
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
