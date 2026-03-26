import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertCircle, Calculator } from "lucide-react";

export default function LetistePardubiceZpozdenyLet() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Pardubice: Zpožděný let a kompenzace 2026"
        description="Měli jste zpoždění z letiště Pardubice? Zjistěte, jak získat až 600 € kompenzace podle EU261. Průvodce právy pasažérů z PED."
        url="https://problemlot.com/cs/blog/letiste-pardubice-zpozdeny-let-kompenzace"
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
            Letiště Pardubice: Zpožděný let a kompenzace 2026
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>9 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> Pokud byl váš let z letiště Pardubice (PED) zpožděný o <strong>3+ hodiny</strong>, máte právo na kompenzaci <strong>€250–600</strong> podle nařízení EU 261/2004. Výše kompenzace závisí na vzdálenosti letu a době zpoždění při příletu.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Měli jste zpoždění z Pardubic? Zkontrolujte nárok
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
              <Plane className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Letiště Pardubice (PED) — základní info
            </h2>
            <ul className="space-y-2">
              <li><strong>IATA kód:</strong> PED</li>
              <li><strong>Lokace:</strong> Pardubice, Pardubický kraj</li>
              <li><strong>Ročně cestujících:</strong> ~120 000</li>
              <li><strong>Hlavní destinace:</strong> Charterové lety (Řecko, Španělsko, Bulharsko, Tunisko)</li>
              <li><strong>Nejčastější dopravci:</strong> Smartwings, Travel Service</li>
              <li><strong>Typ letů:</strong> Převážně charterové lety na dovolenou</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci za zpožděný let z Pardubic?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>⏰ <strong>Zpoždění 3+ hodiny</strong> při příletu na konečnou destinaci</li>
              <li>🛫 <strong>Let odletěl z Pardubic</strong> (EU letiště)</li>
              <li>✈️ <strong>Aerolinka má sídlo v EU</strong> (Smartwings, Travel Service) nebo ne-EU aerolinka letící Z EU</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada = PLATÍ)</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong> (prekluzivní lhůta v ČR)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              ❌ Nemáte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>⏱️ <strong>Zpoždění méně než 3 hodiny</strong> při příletu</li>
              <li>🌩️ <strong>Extrémní počasí</strong> (bouře zavřela destinační letiště)</li>
              <li>✈️ <strong>Stávka letových dispečerů (ATC)</strong> mimo kontrolu aerolinek</li>
              <li>🚨 <strong>Bezpečnostní riziko</strong> (terorismus, politické nepokoje)</li>
            </ul>
            <p className="text-sm text-red-800 dark:text-red-200 mt-4 mb-0">
              <strong>⚠️ Pozor:</strong> Aerolinie často lžou o mimořádných okolnostech. Technická závada NENÍ mimořádná okolnost! Vždy nechte zkontrolovat odborníky.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kolik dostanete za zpožděný let z Pardubic?
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Vzdálenost letu</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Kompenzace</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Příklady tras z Pardubic</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&lt;1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€250</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Španělsko, Itálie</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€400</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Řecko, Bulharsko, Tunisko, Kypr</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€600</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Dubaj (pokud z EU dopravce)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center">
              <Calculator className="mr-2 h-5 w-5" />
              📍 Nejčastější charterové trasy z Pardubic
            </h3>
            <ul className="space-y-2">
              <li><strong>Pardubice–Rhodos (Řecko):</strong> €400 (~1950 km)</li>
              <li><strong>Pardubice–Heraklion (Kréta):</strong> €400 (~1920 km)</li>
              <li><strong>Pardubice–Burgas (Bulharsko):</strong> €400 (~1500 km)</li>
              <li><strong>Pardubice–Antalya (Turecko):</strong> €400 (~2350 km)</li>
              <li><strong>Pardubice–Mallorca (Španělsko):</strong> €250 (~1680 km)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Co dělat při zpožděném letu z Pardubic?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📝 Krok za krokem na letišti</h3>
            
            <ol className="space-y-4">
              <li>
                <strong>1. Zjistěte důvod zpoždění</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Zeptejte se personálu aerolinie na přepážce a požádejte o <strong>písemné potvrzení</strong> důvodu zpoždění.
                </p>
              </li>

              <li>
                <strong>2. Vyfotografujte informační tabule</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Udělejte fotku odletové tabule ukazující zpoždění + hodiny na telefonu jako důkaz.
                </p>
              </li>

              <li>
                <strong>3. Uchováte všechny doklady</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  • Originální palubní vstupenku<br/>
                  • Potvrzení o zpoždění od aerolinie<br/>
                  • Účtenky za jídlo (pokud čekáte 2+ hodiny)<br/>
                  • Všechny e-maily a SMS od aerolinie
                </p>
              </li>

              <li>
                <strong>4. Požádejte o péči</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Podle EU261 máte právo na:<br/>
                  • Jídlo a nápoje (2+ hodiny zpoždění)<br/>
                  • 2 telefonní hovory/e-maily<br/>
                  • Hotel (pokud čekáte přes noc)<br/>
                  • Přepravu mezi letištěm a hotelem
                </p>
              </li>

              <li>
                <strong>5. Poznamenejte si čas příletu</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  KLÍČOVÉ: Kompenzace závisí na zpoždění PŘI PŘÍLETU (kdy se otevřely dveře letadla), ne při odletu!
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
                🔹 Charterový let z Pardubic zpožděný 4 hodiny — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Nařízení EU261 platí pro všechny komerční lety (pravidelné i charterové) z EU letišť. Pokud byl váš charterový let zpožděný 3+ hodiny při příletu, máte nárok na €250-400 podle vzdálenosti.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Smartwings zpožděný z Pardubic kvůli "technické závadě" — platí kompenzace?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Technická závada NENÍ mimořádná okolnost podle rozsudku EU soudu C-549/07. Smartwings musí zaplatit kompenzaci €250-400 i když důvodem bylo technické selhání.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Let zpožděný při odletu 2 hodiny, ale dorazil s 3,5h zpožděním — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Rozhodující je čas PŘI PŘÍLETU, ne při odletu. Pokud jste dorazili 3+ hodiny později než plánovaný čas příletu → máte nárok na kompenzaci.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Jak dlouho mám na podání reklamace za zpožděný let z Pardubic?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                V České republice je <strong>prekluzivní lhůta 3 roky</strong> od data letu. Doporučujeme však reklamovat do <strong>6 měsíců</strong> pro nejlepší výsledky.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Mohu požadovat kompenzaci i když jsem koupil levný charterový balíček?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Výše kompenzace podle EU261 nezávisí na ceně letenky nebo typu rezervace (charter vs. pravidelný let). I s €150 charterovým balíčkem máte nárok na €250-400 kompenzace při zpoždění 3+ hodin.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Let zpožděný kvůli bouři na destinačním letišti — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na situaci.</strong> Pokud bouře zavřela destinační letiště (všechny lety zrušeny/zpožděny), je to mimořádná okolnost → nemáte nárok. Pokud však jiné lety v tu dobu normálně přistávaly → aerolinka lže a máte nárok na kompenzaci.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Aerolinka nabízí voucher místo peněz — musím přijmout?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE.</strong> Máte právo na <strong>hotovostní kompenzaci</strong> podle EU261. Voucher můžete přijmout pouze dobrovolně. NIKDY nepodepisujte dokumenty, které se vzdávají práva na hotovost.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Kam se obrátit, když aerolinka odmítne kompenzaci?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Máte několik možností: <strong>Úřad pro civilní letectví (ÚCL)</strong>, <strong>Česká obchodní inspekce (ČOI)</strong>, soud nebo profesionální služby jako <Link href="https://claimwinger.com/cs/zpozdeny-let" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">ClaimWinger</Link> (98% úspěšnost, platba pouze při výhře).
              </p>
            </div>
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Získejte kompenzaci za zpožděný let z Pardubic
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
                  → Letiště Praha: Zpožděný let a kompenzace
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/smartwings-prava-cestujicich" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Smartwings kompenzace — průvodce 2026
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/narizeni-es-261-2004" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Co je nařízení ES 261/2004?
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/3hodinove-pravidlo-zpozdeni" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → 3hodinové pravidlo zpoždění vysvětleno
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
                  "name": "Charterový let z Pardubic zpožděný 4 hodiny — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Nařízení EU261 platí pro všechny komerční lety (pravidelné i charterové) z EU letišť. Pokud byl váš charterový let zpožděný 3+ hodiny při příletu, máte nárok na €250-400 podle vzdálenosti."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Smartwings zpožděný z Pardubic kvůli technické závadě — platí kompenzace?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Technická závada NENÍ mimořádná okolnost podle rozsudku EU soudu C-549/07. Smartwings musí zaplatit kompenzaci €250-400 i když důvodem bylo technické selhání."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Let zpožděný při odletu 2 hodiny, ale dorazil s 3,5h zpožděním — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Rozhodující je čas PŘI PŘÍLETU, ne při odletu. Pokud jste dorazili 3+ hodiny později než plánovaný čas příletu → máte nárok na kompenzaci."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak dlouho mám na podání reklamace za zpožděný let z Pardubic?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "V České republice je prekluzivní lhůta 3 roky od data letu. Doporučujeme však reklamovat do 6 měsíců pro nejlepší výsledky."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mohu požadovat kompenzaci i když jsem koupil levný charterový balíček?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Výše kompenzace podle EU261 nezávisí na ceně letenky nebo typu rezervace. I s €150 charterovým balíčkem máte nárok na €250-400 kompenzace při zpoždění 3+ hodin."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Let zpožděný kvůli bouři na destinačním letišti — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí na situaci. Pokud bouře zavřela destinační letiště (všechny lety zrušeny/zpožděny), je to mimořádná okolnost. Pokud však jiné lety normálně přistávaly → máte nárok na kompenzaci."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Aerolinka nabízí voucher místo peněz — musím přijmout?",
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
