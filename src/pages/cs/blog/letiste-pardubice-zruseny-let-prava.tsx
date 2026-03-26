import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertCircle } from "lucide-react";

export default function LetistePardubiceZrusenyLet() {
  return (
    <LayoutCs>
      <SEO
        title="Letiště Pardubice: Zrušený let — vaše práva 2026"
        description="Byl váš let z Pardubic zrušen? Zjistěte, jak získat až 600 € kompenzace podle EU261. Průvodce právy pasažérů z letiště PED."
        url="https://problemlot.com/cs/blog/letiste-pardubice-zruseny-let-prava"
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
            Letiště Pardubice: Zrušený let — vaše práva 2026
          </h1>
          <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime="2026-03-09">9. března 2026</time>
            <span className="mx-2">•</span>
            <span>8 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            <strong>Rychlá odpověď:</strong> Pokud byl váš let z letiště Pardubice (PED) zrušen, máte právo na kompenzaci <strong>€250–600</strong> podle nařízení EU 261/2004 + vrácení peněz za letenku nebo náhradní přepravu. Výše kompenzace závisí na vzdálenosti letu a včasnosti oznámení.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-600 dark:border-blue-400 rounded-lg p-8 my-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🎯 Byl váš let z Pardubic zrušen? Zkontrolujte nárok
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
              Letiště Pardubice (PED) — základní info
            </h2>
            <ul className="space-y-2">
              <li><strong>IATA kód:</strong> PED</li>
              <li><strong>Lokace:</strong> Pardubice, Pardubický kraj</li>
              <li><strong>Ročně cestujících:</strong> ~120 000</li>
              <li><strong>Typ letů:</strong> Převážně charterové lety na dovolenou</li>
              <li><strong>Hlavní destinace:</strong> Rhodos, Kréta, Burgas, Antalya, Mallorca</li>
              <li><strong>Nejčastější dopravci:</strong> Smartwings, Travel Service</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kdy máte nárok na kompenzaci za zrušený let z Pardubic?
          </h2>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-4 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5" />
              ✅ Máte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>🛫 <strong>Let odletěl/měl odletět z Pardubic</strong> (EU letiště)</li>
              <li>⏰ <strong>Oznámení méně než 14 dní předem</strong> (nebo nevhodná náhrada)</li>
              <li>🚫 <strong>Příčina není mimořádná okolnost</strong> (technická závada = PLATÍ)</li>
              <li>✈️ <strong>Aerolinka má sídlo v EU</strong> (Smartwings) nebo ne-EU aerolinka letící Z EU</li>
              <li>📅 <strong>Let byl za posledních 3 roky</strong> (prekluzivní lhůta v ČR)</li>
            </ul>
          </div>

          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
            <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-4 flex items-center">
              <AlertCircle className="mr-2 h-5 w-5" />
              ❌ Nemáte nárok na kompenzaci
            </h3>
            <ul className="space-y-3">
              <li>🌩️ <strong>Extrémní počasí</strong> (bouře zavřela destinační letiště)</li>
              <li>✈️ <strong>Stávka letových dispečerů (ATC)</strong> mimo kontrolu aerolinek</li>
              <li>🚨 <strong>Bezpečnostní riziko</strong> (politické nepokoje v destinaci)</li>
              <li>📅 <strong>Oznámení 14+ dní předem</strong> + nabídnutí vhodné náhrady</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Kolik dostanete za zrušený let z Pardubic?
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Vzdálenost letu</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Kompenzace</th>
                  <th className="border border-gray-300 dark:border-gray-700 px-4 py-3 text-left font-semibold">Příklady tras</th>
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
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Řecko, Bulharsko, Tunisko</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">&gt;3500 km</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-bold text-blue-600 dark:text-blue-400">€600</td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">Dubaj (pokud EU dopravce)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Charterový let z Pardubic zrušen — platí EU261?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>ANO.</strong> Nařízení EU261 platí pro všechny komerční lety (pravidelné i charterové) z EU letišť. Máte nárok na €250-400 kompenzaci podle vzdálenosti + refundaci nebo náhradní přepravu.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Smartwings zrušil let 2 týdny předem — mám nárok?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Závisí na nabídnuté náhradě.</strong> Pokud vám Smartwings nabídl náhradní let, který odlétá max. 2h dříve a přilétá max. 2h později → nemáte nárok na kompenzaci. Pokud náhrada nesplňuje tyto podmínky → máte nárok na €250-400.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Mohu požadovat kompenzaci i vrácení peněz?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE, musíte si vybrat:</strong> buď kompenzaci €250-400 (pokud přijmete náhradní let), nebo vrácení peněz za letenku (pokud odmítnete náhradní let). Pokud však náhradní let dorazí s velkým zpožděním (2+ hodiny), dostanete kompenzaci + náhradní přepravu.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Jak dlouho mám na podání reklamace?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                V České republice je <strong>prekluzivní lhůta 3 roky</strong> od data letu. Doporučujeme reklamovat do 6 měsíců pro nejlepší výsledky.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Aerolinka nabízí voucher — musím přijmout?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>NE.</strong> Máte právo na hotovostní kompenzaci podle EU261. Voucher můžete přijmout pouze dobrovolně. NIKDY nepodepisujte dokumenty, které se vzdávají práva na hotovost.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                🔹 Kam se obrátit, když aerolinka odmítne kompenzaci?
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Máte několik možností: <strong>ÚCL</strong>, <strong>ČOI</strong>, soud nebo profesionální služby jako <Link href="https://claimwinger.com/cs/zruseny-let" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">ClaimWinger</Link> (98% úspěšnost).
              </p>
            </div>
          </div>

          <div className="bg-blue-600 dark:bg-blue-700 text-white rounded-lg p-8 my-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              🚀 Získejte kompenzaci za zrušený let z Pardubic
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
                <Link href="/cs/blog/letiste-pardubice-zpozdeny-let-kompenzace" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Pardubice: Zpožděný let a kompenzace
                </Link>
              </li>
              <li>
                <Link href="/cs/blog/smartwings-prava-cestujicich" className="text-blue-600 dark:text-blue-400 hover:underline">
                  → Smartwings kompenzace
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
                  "name": "Charterový let z Pardubic zrušen — platí EU261?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ANO. Nařízení EU261 platí pro všechny komerční lety (pravidelné i charterové) z EU letišť. Máte nárok na €250-400 kompenzaci podle vzdálenosti + refundaci nebo náhradní přepravu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Smartwings zrušil let 2 týdny předem — mám nárok?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Závisí na nabídnuté náhradě. Pokud vám Smartwings nabídl náhradní let, který odlétá max. 2h dříve a přilétá max. 2h později → nemáte nárok. Pokud náhrada nesplňuje tyto podmínky → máte nárok na €250-400."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Mohu požadovat kompenzaci i vrácení peněz?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE, musíte si vybrat: buď kompenzaci €250-400 (pokud přijmete náhradní let), nebo vrácení peněz za letenku (pokud odmítnete náhradní let)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Aerolinka nabízí voucher — musím přijmout?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NE. Máte právo na hotovostní kompenzaci podle EU261. Voucher můžete přijmout pouze dobrovolně."
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
