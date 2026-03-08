import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertCircle } from "lucide-react";

export default function LetisteBrnoZrusenyLet() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Brno-Tuřany: Zrušený let — vaše práva 2026"
        description="Byl váš let z Brno-Tuřany zrušen? Zjistěte, jak získat kompenzaci až 600 € podle EU261. Průvodce právy pasažérů + kontakty na pomoc."
        url="https://lotproblem.pl/cs/blog/letiste-brno-turany-zruseny-let-prava"
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
            Letiště Brno-Tuřany: Zrušený let — vaše práva 2026
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>8 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> Pokud byl váš let z letiště Brno-Tuřany (BRQ) zrušen, máte právo na kompenzaci <strong>€250–600</strong> podle nařízení EU 261/2004 + vrácení peněz za letenku nebo náhradní přepravu. Výše kompenzace závisí na vzdálenosti letu a včasnosti oznámení zrušení.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Byl váš let z Brna zrušen? Zkontrolujte nárok
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Zjistěte zdarma během 2 minut, zda máte nárok na kompenzaci až €600. Bez rizika — platba pouze při úspěchu.
            </p>
            <Link
              href="https://claimwinger.com/cs/zruseny-let"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Zkontrolovat nárok zdarma →
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-0 mb-4 flex items-center">
              <Plane className="mr-2 h-6 w-6 text-blue-600 dark:text-blue-400" />
              Letiště Brno-Tuřany (BRQ) — základní info
            </h2>
            <ul className="space-y-2">
              <li><strong>IATA kód:</strong> BRQ</li>
              <li><strong>Lokace:</strong> Brno, Jihomoravský kraj</li>
              <li><strong>Ročně cestujících:</strong> ~600 000</li>
              <li><strong>Hlavní destinace:</strong> Londýn, Barcelona, Alicante, Mallorca, Rhodos</li>
              <li><strong>Nejčastější dopravci:</strong> Smartwings, Ryanair, Wizz Air</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci za zrušený let z Brna?
          </h2>

          <p>
            Podle <strong>nařízení EU 261/2004</strong> máte nárok na kompenzaci, pokud:
          </p>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>🛫 <strong>Let odletěl/měl odletět z Brno-Tuřany</strong> (EU letiště)</li>
              <li>⏰ <strong>Oznámení méně než 14 dní předem</strong> (nebo nevhodná náhrada)</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada, nedostatek posádky = PLATÍ)</li>
              <li>✈️ <strong>Aerolinka má sídlo v EU</strong> (Smartwings, Ryanair, Wizz Air) nebo ne-EU aerolinka letící Z EU</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong> (prekluzivní lhůta v ČR)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              ❌ Nemáte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>🌩️ <strong>Extrémní počasí</strong> (bouře zavřela letiště, hustá mlha)</li>
              <li>✈️ <strong>Stávka letových dispečerů</strong> (ATC — mimo kontrolu aerolinek)</li>
              <li>🚨 <strong>Bezpečnostní riziko</strong> (terorismus, politické nepokoje)</li>
              <li>📅 <strong>Oznámení 14+ dní předem</strong> + nabídnutí vhodné náhrady</li>
            </ul>
            <p className="text-sm text-red-800 dark:text-red-200 mt-4 mb-0">
              <strong>⚠️ Pozor:</strong> Aerolinie často lžou o mimořádných okolnostech. Technická závada = NENÍ mimořádná okolnost! Vždy nechte zkontrolovat odborníky.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kolik dostanete za zrušený let z Brna?
          </h2>

          <p>
            Výše kompenzace závisí na <strong>vzdálenosti letu</strong> a <strong>včasnosti oznámení</strong>:
          </p>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Vzdálenost letu</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Kompenzace</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Příklady tras z Brna</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&lt;1500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€250</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Londýn, Amsterdam, Barcelona</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800/50">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€400</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Kypr, Tunisko, Maroko</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€600</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Dubaj, USA (pokud z EU)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 dark:text-yellow-100 mb-3">📍 Nejčastější trasy z Brna a kompenzace</h3>
            <ul className="space-y-2">
              <li><strong>Brno–Londýn Stansted:</strong> €250 (1156 km)</li>
              <li><strong>Brno–Barcelona:</strong> €250 (1395 km)</li>
              <li><strong>Brno–Alicante:</strong> €250 (1730 km, ale &lt;1500 km letecky)</li>
              <li><strong>Brno–Mallorca:</strong> €250 (1390 km)</li>
              <li><strong>Brno–Rhodos:</strong> €400 (1710 km)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Speciální situace: Oznámení zrušení předem
          </h2>

          <p>
            Pokud aerolinka zrušila let <strong>více než 14 dní předem</strong> a nabídla vhodnou náhradu, nemáte nárok na kompenzaci (ale máte nárok na vrácení peněz nebo přesměrování).
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">📋 Časová schémata pro oznámení</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 dark:border-green-400 pl-4">
                <p className="font-bold text-green-900 dark:text-green-100">✅ 14+ dní předem + vhodná náhrada</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">→ 0 € kompenzace (pouze refundace/přesměrování)</p>
              </div>

              <div className="border-l-4 border-yellow-600 dark:border-yellow-400 pl-4">
                <p className="font-bold text-yellow-900 dark:text-yellow-100">⚠️ 7-14 dní předem</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">→ €250-600 (pokud náhradní let odlétá &gt;2h dříve nebo přilétá &gt;4h později)</p>
              </div>

              <div className="border-l-4 border-red-600 dark:border-red-400 pl-4">
                <p className="font-bold text-red-900 dark:text-red-100">❌ Méně než 7 dní předem</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">→ €250-600 (pokud náhradní let odlétá &gt;1h dříve nebo přilétá &gt;2h později)</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Co dělat, když je let z Brna zrušen?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">📝 Krok za krokem na letišti</h3>
            
            <ol className="space-y-4">
              <li>
                <strong>1. Zjistěte důvod zrušení</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Zeptejte se personálu aerolinie na přepážce a požádejte o <strong>písemné potvrzení</strong> důvodu zrušení. Zapište si čas oznámení.
                </p>
              </li>

              <li>
                <strong>2. Vyfotografujte informační tabule</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Udělejte fotku odletové tabule ukazující status "CANCELLED" nebo "ZRUŠEN" + hodiny na telefonu.
                </p>
              </li>

              <li>
                <strong>3. Uchováte všechny doklady</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  • Originální palubní vstupenku<br/>
                  • Potvrzení o zrušení od aerolinie<br/>
                  • Účtenky za jídlo/hotel (pokud čekáte přes noc)<br/>
                  • Všechny e-maily a SMS od aerolinie
                </p>
              </li>

              <li>
                <strong>4. Požádejte o péči</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  Podle EU261 máte právo na: jídlo/nápoje, 2 telefonní hovory/e-maily, hotel (pokud čekáte přes noc), přepravu mezi letištěm a hotelem.
                </p>
              </li>

              <li>
                <strong>5. Vyberte si možnost</strong>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                  • <strong>Náhradní let</strong> (nejbližší možný)<br/>
                  • <strong>Vrácení peněz</strong> (celá částka letenky)<br/>
                  • <strong>Přesměrování</strong> (jiná trasa k cíli)
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
              href="https://claimwinger.com/cs/zruseny-let"
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
                🔹 Jak dlouho mám na podání reklamace za zrušený let z Brna?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                V České republice je <strong>prekluzivní lhůta 3 roky</strong> od data letu. Po 3 letech nárok zanikne. Doporučujeme reklamovat do <strong>6 měsíců</strong> pro nejlepší výsledky.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Smartwings zrušil let z Brna kvůli "technické závadě" — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Technická závada je ODPOVĚDNOST aerolinie, NENÍ mimořádná okolnost podle rozsudku EU soudu C-549/07. Smartwings musí zaplatit kompenzaci €250-600 + náhradní přepravu/refundaci.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Ryanair nabízí voucher místo peněz — musím přijmout?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE.</strong> Máte právo na <strong>hotovostní kompenzaci</strong> podle EU261. Voucher můžete přijmout pouze dobrovolně. Nikdy nepodepisujte dokumenty, které se vzdávají práva na hotovost.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Let z Brna zrušen, ale dostal jsem náhradní let — mám nárok na kompenzaci?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na zpoždění náhradního letu.</strong> Pokud jste dorazili na konečnou destinaci <strong>méně než 2 hodiny</strong> po původně plánovaném čase, nemáte nárok. Pokud <strong>více než 2 hodiny</strong> později → máte nárok na €250-600.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Mohu požadovat kompenzaci i vrácení peněz za letenku?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                <strong>NE, musíte si vybrat jednu z možností:</strong>
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Kompenzace €250-600</strong> (pokud přijmete náhradní let)</li>
                <li>• <strong>Vrácení peněz</strong> za letenku (pokud odmítnete náhradní let)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Pokud však přijmete náhradní let a ten dorazí s velkým zpožděním, dostanete kompenzaci + náhradní přepravu (ne ale refundaci původní letenky).
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Wizz Air zrušil let z Brna 2 měsíce předem — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na nabídnuté náhradě.</strong> Pokud Wizz Air oznámil zrušení 14+ dní předem a nabídl náhradní let, který odlétá max. 2h dříve a přilétá max. 2h později než původní → nemáte nárok na kompenzaci (pouze refundaci/přesměrování). Pokud náhrada není vhodná → máte nárok na €250-600.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Kam se obrátit, když aerolinka odmítne kompenzaci?
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Máte několik možností:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>Úřad pro civilní letectví (ÚCL):</strong> Národní autorita v ČR — řeší stížnosti na aerolinie</li>
                <li>• <strong>Česká obchodní inspekce (ČOI):</strong> Ochrana spotřebitele</li>
                <li>• <strong>Soud:</strong> Můžete podat žalobu (evropský řád drobných nároků do €5000)</li>
                <li>• <strong>Profesionální služby:</strong> <Link href="https://claimwinger.com/cs/zruseny-let" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">ClaimWinger</Link> má 98% úspěšnost</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Platí EU261 i pro charterové lety z Brna?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Nařízení EU 261/2004 platí pro všechny komerční lety (pravidelné i charterové) odlétající z EU letišť. Neplatí jen pro:
              </p>
              <ul className="space-y-1 text-gray-700 dark:text-gray-300 mt-2">
                <li>• Soukromé lety (private jets)</li>
                <li>• Vojenské lety</li>
                <li>• Nouzové lety (záchranářské, lékařské)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Získejte kompenzaci za zrušený let z Brna
            </h2>
            <p className="text-xl mb-6 opacity-90">
              98% úspěšnost • Žádné poplatky předem • Pouze 25% provize při výhře
            </p>
            <Link
              href="https://claimwinger.com/cs/zruseny-let"
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
                <Link href="/cs/blog/letiste-brno-zpozdeni" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Letiště Brno: Zpožděný let a kompenzace
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/smartwings-prava-cestujicich" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Smartwings kompenzace — průvodce 2026
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/ryanair-kompenzace-reklamace" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Ryanair kompenzace za zpoždění a zrušení
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
                  "name": "Jak dlouho mám na podání reklamace za zrušený let z Brna?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "V České republice je prekluzivní lhůta 3 roky od data letu. Po 3 letech nárok zanikne. Doporučujeme reklamovat do 6 měsíců pro nejlepší výsledky."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Smartwings zrušil let z Brna kvůli technické závadě — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Technická závada je ODPOVĚDNOST aerolinie, NENÍ mimořádná okolnost podle rozsudku EU soudu C-549/07. Smartwings musí zaplatit kompenzaci €250-600 + náhradní přepravu/refundaci."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ryanair nabízí voucher místo peněz — musím přijmout?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE. Máte právo na hotovostní kompenzaci podle EU261. Voucher můžete přijmout pouze dobrovolně. Nikdy nepodepisujte dokumenty, které se vzdávají práva na hotovost."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Let z Brna zrušen, ale dostal jsem náhradní let — mám nárok na kompenzaci?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí na zpoždění náhradního letu. Pokud jste dorazili na konečnou destinaci méně než 2 hodiny po původně plánovaném čase, nemáte nárok. Pokud více než 2 hodiny později → máte nárok na €250-600."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mohu požadovat kompenzaci i vrácení peněz za letenku?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE, musíte si vybrat: buď kompenzaci €250-600 (pokud přijmete náhradní let), nebo vrácení peněz za letenku (pokud odmítnete náhradní let). Pokud však přijmete náhradní let a ten dorazí s velkým zpožděním, dostanete kompenzaci + náhradní přepravu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Wizz Air zrušil let z Brna 2 měsíce předem — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí na nabídnuté náhradě. Pokud Wizz Air oznámil zrušení 14+ dní předem a nabídl náhradní let, který odlétá max. 2h dříve a přilétá max. 2h později než původní → nemáte nárok na kompenzaci. Pokud náhrada není vhodná → máte nárok na €250-600."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Platí EU261 i pro charterové lety z Brna?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Nařízení EU 261/2004 platí pro všechny komerční lety (pravidelné i charterové) odlétající z EU letišť. Neplatí jen pro soukromé lety, vojenské lety a nouzové lety."
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