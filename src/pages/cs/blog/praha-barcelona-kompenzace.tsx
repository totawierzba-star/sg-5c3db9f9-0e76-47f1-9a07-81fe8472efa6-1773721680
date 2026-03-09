import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, TrendingUp, CheckCircle, Sun } from "lucide-react";

export default function PrahaBarcelonaKompenzace() {
  return (
    <LayoutCs>
      <SEO
        title="Praha–Barcelona: Kompenzace za zpoždění a zrušení 2026"
        description="Zpožděný nebo zrušený let Praha–Barcelona? Získejte až 250 € kompenzace. Průvodce právy pasažérů na oblíbené trase do Španělska."
        url="https://lotproblem.pl/cs/blog/praha-barcelona-kompenzace"
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
            Praha–Barcelona: Kompenzace za zpoždění a zrušení 2026
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>9 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> Trasa Praha–Barcelona je jednou z nejoblíbenějších dovolenkových tras z České republiky do Španělska. Pokud byl váš let zpožděný <strong>3+ hodiny</strong> nebo zrušen, máte nárok na kompenzaci <strong>€250</strong> podle nařízení EU 261/2004.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ✈️ Měli jste problém na trase Praha–Barcelona?
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
              Trasa Praha–Barcelona — základní info
            </h2>
            <ul className="space-y-2">
              <li><strong>Vzdálenost:</strong> ~1450 km</li>
              <li><strong>Doba letu:</strong> ~2,5 hodiny</li>
              <li><strong>Denně letů:</strong> 3-5 (různé aerolinie)</li>
              <li><strong>Ročně cestujících:</strong> ~400 000</li>
              <li><strong>Hlavní dopravci:</strong> Ryanair, Wizz Air, Vueling, Smartwings</li>
              <li><strong>Barcelonská letiště:</strong> El Prat (BCN), Girona-Costa Brava (GRO)</li>
              <li><strong>Kompenzace za zpoždění 3h+:</strong> €250</li>
              <li><strong>Sezona:</strong> Celoročně (nejvíc léto březen-říjen)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci Praha–Barcelona?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na €250 kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>⏰ <strong>Zpoždění 3+ hodiny</strong> při příletu do Barcelony</li>
              <li>🛫 <strong>Zrušení letu</strong> oznámeno méně než 14 dní předem</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada = PLATÍ)</li>
              <li>✈️ <strong>Let Z Prahy</strong> (EU letiště) — platí pro všechny aerolinie!</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
              🌞 Letní sezona = vyšší riziko zpoždění
            </h3>
            <p className="mb-3">
              <strong>DŮLEŽITÉ:</strong> Během letní sezony (květen-září) Barcelona patří k nejzatíženějším destinacím v Evropě. Nejčastější problémy:
            </p>
            <ul className="space-y-2">
              <li>🌩️ <strong>Letní bouřky:</strong> Časté odpolední bouřky nad Španělskem (červenec-srpen)</li>
              <li>✈️ <strong>Přetížené letiště:</strong> El Prat (BCN) má přes 50M cestujících ročně</li>
              <li>🧳 <strong>Technické problémy:</strong> Častější kvůli vysoké frekvenci letů</li>
              <li>👥 <strong>Stávky v Katalánsku:</strong> Občasné stávky letištního personálu</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Nejčastější dopravci Praha–Barcelona
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Ryanair (PRG→BCN)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 1-2× denně</li>
                <li><strong>Letiště:</strong> Barcelona El Prat (BCN)</li>
                <li><strong>Průměrná cena:</strong> 1200-4000 Kč</li>
                <li><strong>On-time rate:</strong> ~78%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Wizz Air (PRG→BCN)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 5-7× týdně</li>
                <li><strong>Letiště:</strong> Barcelona El Prat (BCN)</li>
                <li><strong>Průměrná cena:</strong> 1000-3500 Kč</li>
                <li><strong>On-time rate:</strong> ~72%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Vueling (PRG→BCN)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 1× denně (sezóna)</li>
                <li><strong>Letiště:</strong> Barcelona El Prat (BCN)</li>
                <li><strong>Průměrná cena:</strong> 2000-5000 Kč</li>
                <li><strong>On-time rate:</strong> ~75%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
                <li><strong>Poznámka:</strong> Katalánská aerolinka (IAG Group)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                <Plane className="mr-2 h-5 w-5 text-blue-600 dark:text-blue-400" />
                Smartwings (PRG→BCN)
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Frekvence:</strong> 2-3× týdně (letní sezona)</li>
                <li><strong>Letiště:</strong> Barcelona El Prat (BCN)</li>
                <li><strong>Průměrná cena:</strong> 2500-6000 Kč</li>
                <li><strong>On-time rate:</strong> ~76%</li>
                <li><strong>Kompenzace:</strong> €250 za zpoždění 3h+</li>
              </ul>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-green-600 dark:border-green-400 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💰 Měli jste zpoždění Praha–Barcelona?
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
                🔹 Ryanair zpožděn 4h Praha→Barcelona — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Máte nárok na €250 kompenzaci. Kontaktujte Ryanair do 6 měsíců s reklamací. Pokud odmítnou vyplatit, kontaktujte <Link href="https://claimwinger.com/cs/zpozdeny-let" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">ClaimWinger</Link> (98% úspěšnost).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Let zpožděn kvůli barcelonským bouřkám — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na situaci.</strong> Pokud bouřky zavřely El Prat (BCN) — všechny lety zpoždněny → mimořádná okolnost. Pokud jiné lety normálně přistávaly/odlétaly → máte nárok na €250.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Wizz Air zrušil let Praha–Barcelona den před odletem — co dělat?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Máte 2 možnosti:</strong><br/>
                1. Přijmout náhradní let + požadovat €250 kompenzaci (pokud dorazíte 3h+ později)<br/>
                2. Odmítnout náhradní let + požadovat plnou refundaci + €250 kompenzaci
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Která aerolinka má nejvíc zpoždění Praha→Barcelona?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Podle statistik 2025: <strong>Wizz Air ~28% letů zpožděno</strong>, Ryanair ~22%, Vueling ~25%, Smartwings ~24%. Low-cost aerolinie mají obecně vyšší riziko zpoždění.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Letěl jsem Praha→Girona místo Barcelona — platí EU261?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Girona-Costa Brava (GRO) je alternativní letiště pro Barcelonu (~100 km od města). EU261 platí stejně — €250 za 3h+ zpoždění.
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
                🔹 Stávka katalánského letištního personálu — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na typu stávky:</strong><br/>
                • <strong>Stávka zaměstnanců aerolinie</strong> (piloti, posádka) → PLATÍ €250<br/>
                • <strong>Stávka ATC nebo letištního personálu</strong> (mimo kontrolu aerolinie) → mimořádná okolnost, NEPLATÍ
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
              🚀 Získejte €250 za zpoždění Praha–Barcelona
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
                <Link href="/cs/blog/wizz-air-zpozdeni-zruseni" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Wizz Air: Zpoždění a zrušení
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
                  "name": "Ryanair zpožděn 4h Praha→Barcelona — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Máte nárok na €250 kompenzaci. Kontaktujte Ryanair do 6 měsíců s reklamací. Pokud odmítnou vyplatit, kontaktujte ClaimWinger (98% úspěšnost)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Let zpožděn kvůli barcelonským bouřkám — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí na situaci. Pokud bouřky zavřely El Prat — všechny lety zpoždněny → mimořádná okolnost. Pokud jiné lety normálně přistávaly → máte nárok na €250."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Která aerolinka má nejvíc zpoždění Praha→Barcelona?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Podle statistik 2025: Wizz Air ~28% letů zpožděno, Ryanair ~22%, Vueling ~25%, Smartwings ~24%. Low-cost aerolinie mají obecně vyšší riziko zpoždění."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Stávka katalánského personálu — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí na typu: Stávka zaměstnanců aerolinie → PLATÍ €250. Stávka ATC nebo letištního personálu (mimo kontrolu aerolinie) → mimořádná okolnost, NEPLATÍ."
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