import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";

export default function LetistePrahaPresmerovaniLetu() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Václava Havla: Přesměrování letu — vaše práva 2026"
        description="Aerolinka vás přesměrovala na jiný let z Prahy? Získejte 250-600 € kompenzace pokud přesměrování znamená významné zpoždění. Průvodce právy pasažérů."
        url="https://lotproblem.pl/cs/blog/letiste-praha-presmerovani-letu-prava"
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
            Letiště Václava Havla: Přesměrování letu — vaše práva 2026
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>11 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> Pokud vás aerolinka přesměrovala z Prahy na jiný let a dorazili jste s <strong>3+ hodinami zpoždění</strong>, máte právo na kompenzaci <strong>€250–600</strong> podle nařízení EU 261/2004. Výše závisí na vzdálenosti letu a finální době zpoždění při příletu.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Byl jste přesměrován z Prahy? Zkontrolujte nárok
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
              <RefreshCw className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Co je přesměrování letu (re-routing)?
            </h2>
            <p className="mb-4">
              <strong>Přesměrování (re-routing)</strong> nastává, když aerolinka změní váš let na jiný spoj kvůli:
            </p>
            <ul className="space-y-2">
              <li>🚫 Zrušení původního letu</li>
              <li>⏰ Technické závadě nebo provozním problémům</li>
              <li>🛫 Změně letového plánu aerolinie</li>
              <li>✈️ Přesunutí na jiný let téhož dne nebo následující den</li>
            </ul>
            <p className="mt-4 text-sm">
              <strong>Důležité:</strong> Přesměrování není to samé jako jednoduchá změna času odletu — je to kompletní změna letu (jiné číslo letu, možná jiná trasa, jiný čas).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci za přesměrování?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>🛫 <strong>Původní let měl odletět z Prahy</strong> (EU letiště)</li>
              <li>⏰ <strong>Dorazili jste 3+ hodiny později</strong> než původně plánovaný čas příletu</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada = PLATÍ)</li>
              <li>✈️ <strong>EU aerolinka</strong> nebo ne-EU aerolinka letící Z Prahy</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong> (prekluzivní lhůta v ČR)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              ❌ Nemáte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>⏱️ <strong>Dorazili méně než 3 hodiny později</strong> než původní plán</li>
              <li>🌩️ <strong>Extrémní počasí</strong> uzavřelo destinační letiště</li>
              <li>✈️ <strong>Stávka ATC</strong> (mimo kontrolu aerolinie)</li>
              <li>📢 <strong>Informováni 14+ dní předem</strong> a nový let dorazil max. 2h později</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kolik dostanete za přesměrování z Prahy?
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&lt;1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">3+ hodiny</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€250</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">3+ hodiny</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€400</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">3-4 hodiny</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€300</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">4+ hodiny</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€600</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">
              📍 Příklady nejčastějších přesměrování z Prahy
            </h3>
            <ul className="space-y-2">
              <li><strong>Praha→Londýn:</strong> Přesměrován přes Vídeň, dorazil 4h později → €250</li>
              <li><strong>Praha→Barcelona:</strong> Přesměrován na let druhý den, dorazil 6h později → €250</li>
              <li><strong>Praha→Amsterdam:</strong> Změněn na let přes Frankfurt, dorazil 3,5h později → €250</li>
              <li><strong>Praha→Dubaj:</strong> Přesměrován přes Istanbul, dorazil 5h později → €600</li>
              <li><strong>Praha→New York:</strong> Změněn na let přes Frankfurt, dorazil 4,5h později → €600</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Jak postupovat při přesměrování z Prahy?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📝 Krok za krokem</h3>
            
            <ol className="space-y-4">
              <li>
                <strong>1. Poznamenejte si původní čas příletu</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Kompenzace závisí na rozdílu mezi PŮVODNĚ plánovaným časem příletu a skutečným časem, kdy se otevřely dveře letadla na konečné destinaci.
                </p>
              </li>

              <li>
                <strong>2. Požádejte o písemné potvrzení</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Na přepážce aerolinie požádejte o dokument potvrzující:<br/>
                  • Důvod přesměrování<br/>
                  • Původní číslo letu<br/>
                  • Nové číslo letu<br/>
                  • Plánované časy odletu a příletu
                </p>
              </li>

              <li>
                <strong>3. Uchováte všechny doklady</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  • Originální palubní vstupenky (oba lety)<br/>
                  • E-mailová potvrzení o změně letu<br/>
                  • SMS zprávy od aerolinie<br/>
                  • Fotky informačních tabulí<br/>
                  • Účtenky za výdaje (pokud jste čekali 2+ hodiny)
                </p>
              </li>

              <li>
                <strong>4. Požádejte o péči</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Podle EU261 máte nárok na:<br/>
                  • Jídlo a nápoje (2+ hodiny čekání)<br/>
                  • 2 telefonní hovory nebo e-maily<br/>
                  • Hotel (pokud přesměrování znamená přenocování)<br/>
                  • Transport mezi letištěm a hotelem
                </p>
              </li>

              <li>
                <strong>5. Vypočítejte finální zpoždění</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  KLÍČOVÉ: Musíte dorazit 3+ hodiny později než PŮVODNĚ plánováno, ne než čas nového přesměrovaného letu!
                </p>
              </li>
            </ol>
          </div>

          <div className="bg-white dark:bg-gray-800 border-2 border-green-600 dark:border-green-400 rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              💰 Nechte odborníky získat vaši kompenzaci
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
                🔹 Mohu odmítnout přesměrování a požadovat vrácení peněz?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Máte právo odmítnout přesměrovaný let a požadovat plnou refundaci za původní letenku. Můžete také požadovat kompenzaci €250-600, pokud důvod přesměrování nebyla mimořádná okolnost.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Dorazil jsem 2,5 hodiny později — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE.</strong> EU261 vyžaduje minimálně 3 hodiny zpoždění při příletu na konečnou destinaci. Při 2,5h máte nárok na péči (jídlo, nápoje), ale ne na finanční kompenzaci.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Aerolinka říká "technická závada = mimořádná okolnost" — je to pravda?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE, to je lež!</strong> Podle rozsudku Evropského soudu (C-549/07), technická závada NENÍ mimořádná okolnost. Aerolinka musí zaplatit kompenzaci i když důvodem přesměrování byla technická porucha letadla.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Přesměrování vs. změna času — jaký je rozdíl?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Přesměrování (re-routing):</strong> Kompletní změna letu (jiné číslo letu, možná jiná trasa).<br/>
                <strong>Změna času (schedule change):</strong> Stejné číslo letu, jen změněný čas odletu/příletu.<br/><br/>
                Oba případy mohou znamenat nárok na kompenzaci pokud dorazíte 3+ hodiny později než původně plánováno.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Přesměrování přes jiné letiště (např. Frankfurt místo přímého letu) — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO, pokud dorazíte 3+ hodiny později.</strong> Nezáleží na tom, kolik zastávek máte nebo kudy letíte. Rozhodující je pouze finální čas příletu na konečnou destinaci vs. původně plánovaný čas.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Jak dlouho mám na podání reklamace?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                V České republice je <strong>prekluzivní lhůta 3 roky</strong> od data letu. Doporučujeme však reklamovat do <strong>6 měsíců</strong> pro nejlepší výsledky.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Mohu požadovat kompenzaci za každého cestujícího?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Každý pasažér (včetně dětí) má nárok na samostatnou kompenzaci €250-600. Např. rodina 4 osob s přesměrováním Praha→Londýn (dorazili 4h později) = 4 × €250 = <strong>€1000 celkem</strong>.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Aerolinka nabízí voucher — musím přijmout?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE.</strong> Máte právo na <strong>hotovostní kompenzaci</strong> podle EU261. Voucher můžete přijmout pouze dobrovolně. NIKDY nepodepisujte dokumenty, které se vzdávají práva na hotovost.
              </p>
            </div>
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Získejte kompenzaci za přesměrování z Prahy
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
                <Link href="/cs/blog/letiste-praha-zruseny-let" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Letiště Praha: Zrušený let
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Co je nařízení ES 261/2004?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/3hodinove-pravidlo-zpozdeni" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → 3hodinové pravidlo zpoždění
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
                  "name": "Mohu odmítnout přesměrování a požadovat vrácení peněz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Máte právo odmítnout přesměrovaný let a požadovat plnou refundaci za původní letenku. Můžete také požadovat kompenzaci €250-600, pokud důvod přesměrování nebyla mimořádná okolnost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Dorazil jsem 2,5 hodiny později — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE. EU261 vyžaduje minimálně 3 hodiny zpoždění při příletu na konečnou destinaci. Při 2,5h máte nárok na péči (jídlo, nápoje), ale ne na finanční kompenzaci."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Aerolinka říká technická závada = mimořádná okolnost — je to pravda?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE, to je lež! Podle rozsudku Evropského soudu (C-549/07), technická závada NENÍ mimořádná okolnost. Aerolinka musí zaplatit kompenzaci i když důvodem přesměrování byla technická porucha letadla."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Přesměrování vs. změna času — jaký je rozdíl?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Přesměrování (re-routing): Kompletní změna letu (jiné číslo letu, možná jiná trasa). Změna času (schedule change): Stejné číslo letu, jen změněný čas. Oba případy mohou znamenat nárok na kompenzaci pokud dorazíte 3+ hodiny později."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak dlouho mám na podání reklamace?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "V České republice je prekluzivní lhůta 3 roky od data letu. Doporučujeme však reklamovat do 6 měsíců pro nejlepší výsledky."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mohu požadovat kompenzaci za každého cestujícího?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Každý pasažér (včetně dětí) má nárok na samostatnou kompenzaci €250-600. Např. rodina 4 osob s přesměrováním Praha→Londýn = 4 × €250 = €1000 celkem."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Aerolinka nabízí voucher — musím přijmout?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE. Máte právo na hotovostní kompenzaci podle EU261. Voucher můžete přijmout pouze dobrovolně. NIKDY nepodepisujte dokumenty, které se vzdávají práva na hotovost."
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