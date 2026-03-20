import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, TrendingUp, CheckCircle } from "lucide-react";

export default function PrahaLondynKompenzace() {
  return (
    <LayoutCs>
      <SEO
        title="Praha–Londýn: Nejčastější trasa a kompenzace za zpoždění 2026"
        description="Zpožděný nebo zrušený let Praha–Londýn? Získejte až 250 € kompenzace. Průvodce právy pasažérů na nejfrekventovanější trase z ČR do UK."
        url="https://lotproblem.pl/cs/blog/praha-londyn-trasa-kompenzace"
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
            Praha–Londýn: Nejčastější trasa a kompenzace za zpoždění 2026
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>10 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> Trasa Praha–Londýn je nejfrekventovanějším spojem z České republiky. Pokud byl váš let zpožděný <strong>3+ hodiny</strong> nebo zrušen, máte nárok na kompenzaci <strong>€250</strong> podle nařízení EU 261/2004 (platí i po Brexitu pro lety Z Prahy).
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ✈️ Měli jste problém na trase Praha–Londýn?
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
              Trasa Praha–Londýn — základní info
            </h2>
            <ul className="space-y-2">
              <li><strong>Vzdálenost:</strong> ~1050 km</li>
              <li><strong>Doba letu:</strong> ~2 hodiny</li>
              <li><strong>Denně letů:</strong> 10-15 (všechny aerolinie)</li>
              <li><strong>Ročně cestujících:</strong> ~1,5 milionu</li>
              <li><strong>Hlavní dopravci:</strong> British Airways, Ryanair, Wizz Air, Smartwings, easyJet</li>
              <li><strong>Londýnská letiště:</strong> Heathrow (LHR), Gatwick (LGW), Stansted (STN), Luton (LTN)</li>
              <li><strong>Kompenzace za zpoždění 3h+:</strong> €250</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci na trase Praha–Londýn?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na €250 kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>⏰ <strong>Zpoždění 3+ hodiny</strong> při příletu do Londýna</li>
              <li>🛫 <strong>Zrušení letu</strong> oznámeno méně než 14 dní předem</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada = PLATÍ)</li>
              <li>✈️ <strong>Let Z Prahy</strong> (EU letiště) — platí i pro British Airways po Brexitu!</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
              🇬🇧 Brexit a EU261 — stále platí!
            </h3>
            <p className="mb-3">
              <strong>DŮLEŽITÉ:</strong> I po Brexitu platí EU261 pro lety <strong>Z Prahy do Londýna</strong>, protože odlétáte z EU letiště. Nezáleží na tom, že destinace (Londýn) je v UK.
            </p>
            <ul className="space-y-2">
              <li>✅ <strong>Praha→Londýn:</strong> EU261 platí (odlet z EU)</li>
              <li>✅ <strong>Londýn→Praha:</strong> UK261 platí (British Airways, easyJet)</li>
              <li>❌ <strong>Londýn→Praha:</strong> Ryanair (irská aerolinka) — EU261 neplatí pro lety DO EU</li>
            </ul>
            <p className="text-sm mt-3">
              <strong>Pravidlo:</strong> EU261 platí pro všechny lety odlétající Z EU, bez ohledu na destinaci nebo národnost aerolinie.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Nejčastější dopravci Praha–Londýn
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                British Airways (PRG→LHR)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 3-4× denně</li>
                <li><strong>Letiště:</strong> Heathrow (LHR)</li>
                <li><strong>Průměrná cena:</strong> 3000-8000 Kč</li>
                <li><strong>On-time rate:</strong> ~75%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Ryanair (PRG→STN)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 2-3× denně</li>
                <li><strong>Letiště:</strong> Stansted (STN)</li>
                <li><strong>Průměrná cena:</strong> 800-3000 Kč</li>
                <li><strong>On-time rate:</strong> ~80%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+ (Z Prahy platí EU261)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Wizz Air (PRG→LTN)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 1-2× denně</li>
                <li><strong>Letiště:</strong> Luton (LTN)</li>
                <li><strong>Průměrná cena:</strong> 1000-4000 Kč</li>
                <li><strong>On-time rate:</strong> ~70%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                easyJet (PRG→LGW)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 1-2× denně</li>
                <li><strong>Letiště:</strong> Gatwick (LGW)</li>
                <li><strong>Průměrná cena:</strong> 1500-5000 Kč</li>
                <li><strong>On-time rate:</strong> ~78%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-green-600 dark:border-green-400 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💰 Měli jste zpoždění Praha–Londýn?
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
                🔹 Platí EU261 pro lety Praha→Londýn po Brexitu?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> EU261 platí pro všechny lety odlétající Z EU, bez ohledu na destinaci. Brexit nezměnil práva pasažérů na lety Z Prahy do Londýna.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 British Airways zpožděn 3,5h Praha→Londýn — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Máte nárok na €250 kompenzaci. Nezáleží na tom, že British Airways je UK dopravce — platí EU261 protože let odlétal Z Prahy (EU letiště).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Ryanair zpožděn 4h Praha→Stansted — co dělat?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Máte nárok na €250.</strong> Kontaktujte Ryanair do 6 měsíců s reklamací. Pokud odmítnou vyplatit, kontaktujte <Link href="https://claimwinger.com/cs/zpozdeny-let" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">ClaimWinger</Link> (98% úspěšnost vymáhání).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Let zpožděn kvůli londýnské mlze — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na situaci.</strong> Pokud mlha zavřela Heathrow/Gatwick (všechny lety zpoždněny) → mimořádná okolnost, nemáte nárok. Pokud jiné lety normálně přistávaly → máte nárok na €250.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Které londýnské letiště má nejvíc zpoždění?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Gatwick (LGW)</strong> a <strong>Heathrow (LHR)</strong> mají nejčastější zpoždění kvůli velké vytíženosti. Stansted (STN) a Luton (LTN) jsou obecně spolehlivější.
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
              🚀 Získejte €250 za zpoždění Praha–Londýn
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
                <Link href="/cs/blog/ryanair-kompenzace-reklamace" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Ryanair: Kompenzace a reklamace
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/british-airways-kompenzace" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → British Airways: Kompenzace
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Co je nařízení ES 261/2004?
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
                  "name": "Platí EU261 pro lety Praha→Londýn po Brexitu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. EU261 platí pro všechny lety odlétající Z EU, bez ohledu na destinaci. Brexit nezměnil práva pasažérů na lety Z Prahy do Londýna."
                  }
                },
                {
                  "@type": "Question",
                  "name": "British Airways zpožděn 3,5h Praha→Londýn — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Máte nárok na €250 kompenzaci. Nezáleží na tom, že British Airways je UK dopravce — platí EU261 protože let odlétal Z Prahy (EU letiště)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Let zpožděn kvůli londýnské mlze — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí na situaci. Pokud mlha zavřela letiště (všechny lety zpoždněny) → mimořádná okolnost. Pokud jiné lety normálně přistávaly → máte nárok na €250."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Které londýnské letiště má nejvíc zpoždění?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Gatwick (LGW) a Heathrow (LHR) mají nejčastější zpoždění kvůli velké vytíženosti. Stansted (STN) a Luton (LTN) jsou obecně spolehlivější."
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
