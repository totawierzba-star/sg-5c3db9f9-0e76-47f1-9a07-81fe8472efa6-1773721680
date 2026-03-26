import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, Calendar, AlertCircle } from "lucide-react";

export default function PromlceniNarokuKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Promlčení nároků na kompenzaci za zpožděný let - kolik máte času?"
        description="Zjistěte, jak dlouho máte na uplatnění nároku na kompenzaci za zpožděný nebo zrušený let podle právní úpravy v ČR."
        url="https://problemlot.com/cs/blog/promlceni-naroku-kompenzace"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          <span className="mx-2">/</span>
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span>Promlčení nároků na kompenzaci</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Clock className="w-4 h-4" />
            <span>6 min čtení</span>
            <span className="mx-2">•</span>
            <span>24. 2. 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Promlčení nároků na kompenzaci za zpožděný let
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Máte zpožděný let z minulého roku? Zjistěte, jak dlouho máte na uplatnění nároku na kompenzaci podle právní úpravy v České republice.
          </p>
        </header>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Není čas ztrácet čas!</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nechte si zkontrolovat nárok na kompenzaci zdarma. ClaimWinger vyřídí reklamaci za vás – platíte pouze při úspěchu (provize 30%).
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Zkontrolovat nárok zdarma
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Promlčecí lhůta v České republice</h2>
          <p>
            Podle <strong>občanského zákoníku České republiky</strong> se nárok na kompenzaci za zpožděný nebo zrušený let promlčuje za:
          </p>

          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600" />
              3 roky od vzniku nároku
            </h3>
            <p className="mb-2">
              Máte <strong>3 roky</strong> na uplatnění nároku na kompenzaci od data, kdy měl let odletět.
            </p>
            <p className="text-sm mb-0 text-gray-600 dark:text-gray-400">
              <strong>Příklad:</strong> Let 15. března 2023 → Můžete uplatnit nárok do 15. března 2026
            </p>
          </div>

          <h2>Jak se počítá promlčecí lhůta?</h2>
          <p>
            Promlčecí lhůta začína běžet <strong>první den po dni, kdy měl let odletět</strong>:
          </p>

          <div className="space-y-4 my-8">
            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-green-900 dark:text-green-100">✅ PŘÍKLAD 1: Let 10. ledna 2023</h4>
              <ul className="text-sm space-y-2 mb-0">
                <li>📅 <strong>Den letu:</strong> 10. ledna 2023</li>
                <li>⏰ <strong>Začátek promlčení:</strong> 11. ledna 2023</li>
                <li>⌛ <strong>Konec promlčení:</strong> 10. ledna 2026 (23:59)</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-green-900 dark:text-green-100">✅ PŘÍKLAD 2: Let 31. prosince 2022</h4>
              <ul className="text-sm space-y-2 mb-0">
                <li>📅 <strong>Den letu:</strong> 31. prosince 2022</li>
                <li>⏰ <strong>Začátek promlčení:</strong> 1. ledna 2023</li>
                <li>⌛ <strong>Konec promlčení:</strong> 31. prosince 2025 (23:59)</li>
              </ul>
            </div>
          </div>

          <h2>Co přerušuje promlčení?</h2>
          <p>
            Promlčecí lhůta se <strong>přerušuje</strong> v těchto případech:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">1. Podání reklamace u aerolinie</h4>
                <p className="text-sm mb-0">Písemná reklamace přeruší promlčení. Aerolinka má 6 týdnů na odpověď.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">2. Zahájení soudního řízení</h4>
                <p className="text-sm mb-0">Podání žaloby k soudu přeruší promlčení.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-amber-50 dark:bg-amber-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">3. Uznání dluhu aerolinkou</h4>
                <p className="text-sm mb-0">Pokud aerolinka uzná váš nárok na kompenzaci (i když nezaplatí), promlčení se přeruší.</p>
              </div>
            </div>
          </div>

          <h2>Co když už je nárok promlčený?</h2>
          <p>
            Pokud uplynula <strong>3letá promlčecí lhůta</strong>, nemáte již právní nárok na kompenzaci. Aerolinka může (ale nemusí) promlčení namítat.
          </p>

          <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg my-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-3 text-red-900 dark:text-red-100">❌ PROMLČENÝ NÁROK</h4>
                <ul className="text-sm space-y-1 mb-0">
                  <li>✈️ Nárok zanikl uplynutím promlčecí lhůty</li>
                  <li>✈️ Aerolinka může (a pravděpodobně bude) namítat promlčení</li>
                  <li>✈️ Soud nemůže přiznat kompenzaci, pokud aerolinka namítne promlčení</li>
                  <li>✈️ Je pozdě na jakékoliv právní kroky</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Promlčení v jiných zemích EU</h2>
          <p>
            Promlčecí lhůty se v Evropě <strong>liší podle národní legislativy</strong>:
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <th className="text-left py-3">Země</th>
                  <th className="text-right py-3">Promlčecí lhůta</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">🇨🇿 Česká republika</td>
                  <td className="text-right py-3 font-bold">3 roky</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">🇵🇱 Polsko</td>
                  <td className="text-right py-3 font-bold">3 roky</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">🇸🇰 Slovensko</td>
                  <td className="text-right py-3 font-bold">2 roky</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">🇩🇪 Německo</td>
                  <td className="text-right py-3 font-bold">3 roky</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="py-3">🇬🇧 Velká Británie</td>
                  <td className="text-right py-3 font-bold">6 let</td>
                </tr>
                <tr>
                  <td className="py-3">🇮🇹 Itálie</td>
                  <td className="text-right py-3 font-bold">2 roky</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Kdy podat reklamaci?</h2>
          <p>
            Doporučujeme <strong>co nejdříve</strong>:
          </p>

          <ul>
            <li><strong>Ideálně do 14 dnů</strong> po letu – máte incident čerstvě v paměti</li>
            <li><strong>Nejpozději do 3 let</strong> – abyste nepřišli o nárok kvůli promlčení</li>
            <li><strong>Průběžně hlídejte lhůtu</strong> – pokud aerolinka nereaguje, eskalujte</li>
          </ul>

          <h2>Časté chyby pasažérů</h2>

          <div className="space-y-4 my-8">
            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ "Nechám to na později"</h4>
              <p className="text-sm mb-0">
                Mnoho cestujících odkládá reklamaci a pak je překvapených, že je již pozdě.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ "Aerolinka neodpověděla, tak jsem to vzdal"</h4>
              <p className="text-sm mb-0">
                Neodpověď aerolinie není důvodem ke vzdání se nároku. Eskalujte to k regulátorovi nebo specialistům.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ "Myslel jsem, že mám víc času"</h4>
              <p className="text-sm mb-0">
                Promlčecí lhůty se liší podle zemí. Vždy si ověřte národní legislativu.
              </p>
            </div>
          </div>

          <h2>Časté otázky (FAQ)</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Můžu podat reklamaci za let z roku 2021?</h4>
              <p className="mb-0 text-sm">
                Ano, pokud od data letu neuplynuly 3 roky. Například let z března 2021 můžete reklamovat do března 2024.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Co když aerolinka neodpověděla na moji reklamaci?</h4>
              <p className="mb-0 text-sm">
                Podání reklamace přerušilo promlčení. Pokud aerolinka neodpověděla do 6 týdnů, obraťte se na Úřad pro civilní letectví nebo specialisty jako ClaimWinger.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Platí jiná lhůta pro mezinárodní lety?</h4>
              <p className="mb-0 text-sm">
                Ne. Promlčecí lhůta 3 roky platí pro všechny lety spadající pod nařízení EU 261/2004, bez ohledu na vzdálenost.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Může aerolinka promlčení prominout?</h4>
              <p className="mb-0 text-sm">
                Ano, aerolinka se může rozhodnout promlčení nenamítat a přesto vyplatit kompenzaci. V praxi je to však výjimečné.
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl my-12">
            <h3 className="text-2xl font-bold mb-4">Máte starší nárok na kompenzaci?</h3>
            <p className="mb-6 text-blue-100">
              Nechte si svůj případ zkontrolovat zdarma specialisty na letecké nároky. ClaimWinger vyřídí reklamaci za vás – platíte pouze při úspěchu (provize 30%).
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Zkontrolovat nárok zdarma
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Související články</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/cs/blog/kdy-mate-narok-kompenzaci"
                className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold mb-2 text-lg">Kdy máte nárok na kompenzaci?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                  Zjistěte 4 hlavní podmínky nároku na odškodnění za zpožděný let
                </p>
              </Link>

              <Link 
                href="/cs/blog/narizeni-es-261-2004"
                className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold mb-2 text-lg">Co je nařízení ES 261/2004?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                  Kompletní průvodce evropským nařízením o právech cestujících
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Promlčení nároků na kompenzaci za zpožděný let",
              "description": "Máte zpožděný let z minulého roku? Zjistěte, jak dlouho máte na uplatnění nároku na kompenzaci podle právní úpravy v České republice.",
              "author": {
                "@type": "Organization",
                "name": "LotProblem.pl"
              },
              "datePublished": "2026-02-24",
              "image": "https://problemlot.com/og-image.png"
            })
          }}
        />
      </article>
    </LayoutCs>
  );
}
