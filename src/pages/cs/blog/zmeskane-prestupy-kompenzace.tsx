import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { ArrowRight, Plane, Clock, AlertCircle, CheckCircle, FileText } from "lucide-react";

export default function ZmeskanePrestupyKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Zmeškané přestupy – nárok na kompenzaci podle EU 261/2004"
        description="Zmeškal jste přestup kvůli zpoždění? Zjistěte, kdy máte nárok na až 600 € kompenzace za zmeškaný spoj."
        url="https://lotproblem.pl/cs/blog/zmeskane-prestupy-kompenzace"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          <span className="mx-2">/</span>
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span>Zmeškané přestupy – kompenzace</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Clock className="w-4 h-4" />
            <span>9 min čtení</span>
            <span className="mx-2">•</span>
            <span>23. 2. 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Zmeškané přestupy – nárok na kompenzaci podle EU 261/2004
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Zmeškal jste přípojný let kvůli zpoždění prvního spoje? Zjistěte, kdy máte nárok na kompenzaci až 600 € a jak postupovat při reklamaci.
          </p>
        </header>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Zmeškal jste přestup?</h3>
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
          <h2>Co je zmeškané přípojné spojení?</h2>
          <p>
            O zmeškané přestup jde tehdy, když kvůli <strong>zpoždění prvního letu</strong> nestihnete nastoupit na <strong>další plánovaný spoj</strong> v rámci jedné rezervace.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Plane className="w-6 h-6 text-blue-600" />
              Příklad situace
            </h3>
            <p className="mb-0">
              Let Praha → Frankfurt (zpoždění 2 hodiny) → zmeškaný přestup na Frankfurt → New York. Celkové zpoždění příchodu do New Yorku: 6 hodin.
            </p>
          </div>

          <h2>Kdy máte nárok na kompenzaci?</h2>
          <p>
            Podle <strong>nařízení EU 261/2004</strong> máte nárok na kompenzaci při zmeškání přestupu, pokud jsou splněny tyto podmínky:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">1. Jedna rezervace</h4>
                <p className="text-sm mb-0">Oba lety musí být součástí jedné rezervace (jedno číslo PNR). Samostatně zakoupené letenky nejsou chráněny.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">2. Zpoždění alespoň 3 hodiny</h4>
                <p className="text-sm mb-0">Celkové zpoždění příchodu na konečnou destinaci musí být minimálně 3 hodiny.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">3. Let z EU nebo letecká společnost z EU</h4>
                <p className="text-sm mb-0">Platí pro lety z EU nebo lety s evropskou aerolinkou do EU.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">4. Žádné mimořádné okolnosti</h4>
                <p className="text-sm mb-0">Zpoždění nesmí být způsobeno okolnostmi mimo kontrolu aerolinek (extrémní počasí, stávka řídících letu).</p>
              </div>
            </div>
          </div>

          <h2>Kolik dostanete jako kompenzaci?</h2>
          <p>
            Výše kompenzace závisí na <strong>celkové vzdálenosti</strong> cesty (od místa odletu k finální destinaci):
          </p>

          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <th className="text-left py-3">Vzdálenost</th>
                  <th className="text-right py-3">Kompenzace</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <td className="py-3">Do 1 500 km</td>
                  <td className="text-right py-3 font-bold">250 €</td>
                </tr>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <td className="py-3">1 500 – 3 500 km</td>
                  <td className="text-right py-3 font-bold">400 €</td>
                </tr>
                <tr>
                  <td className="py-3">Nad 3 500 km</td>
                  <td className="text-right py-3 font-bold">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Na co máte ještě nárok?</h2>
          <p>
            Kromě kompenzace máte nárok i na <strong>péči ze strany letecké společnosti</strong>:
          </p>

          <ul>
            <li><strong>Jídlo a pití</strong> – přiměřené občerstvení v závislosti na době čekání</li>
            <li><strong>Ubytování</strong> – pokud je nutné přenocovat kvůli zmeškání přestupu</li>
            <li><strong>Doprava</strong> – transfer mezi letištěm a hotelem</li>
            <li><strong>Komunikace</strong> – 2 telefonní hovory, e-maily nebo faxy</li>
            <li><strong>Náhradní let</strong> – letecká společnost vám musí zajistit další spoj na konečnou destinaci</li>
          </ul>

          <h2>Jak postupovat při reklamaci?</h2>
          <p>
            Postup je stejný jako u zpožděných letů:
          </p>

          <ol>
            <li><strong>Dokumentace</strong> – uschovejte palubní vstupenky obou letů, potvrzenky o nákladech</li>
            <li><strong>Kontaktujte aeroliku</strong> – napište na reklamační e-mail s požadavkem na kompenzaci</li>
            <li><strong>Vyčkejte odpověď</strong> – aerolinie má 6–8 týdnů na vyřízení</li>
            <li><strong>Eskalace</strong> – pokud odmítnou, obraťte se na ÚCL nebo specialisty jako ClaimWinger</li>
          </ol>

          <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-6 rounded-lg my-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">Pozor na samostatné letenky</h4>
                <p className="mb-0 text-sm">
                  Pokud jste zakoupili letenky <strong>samostatně</strong> (dvě různá PNR čísla), aerolinie za zmeškaný přestup neodpovídá. V takovém případě nemáte nárok na kompenzaci ani na zajištění náhradního letu.
                </p>
              </div>
            </div>
          </div>

          <h2>Nejčastější chyby při zmeškaných přestupech</h2>

          <div className="space-y-4 my-8">
            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ Samostatné rezervace</h4>
              <p className="text-sm mb-0">Zakoupení letů od různých aerolinií nebo se samostatnými PNR kódy = žádný nárok na ochranu.</p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ Krátký přestupní čas</h4>
              <p className="text-sm mb-0">Pokud jste si vybrali příliš krátký přestup (pod minimum stanovené letištěm), aerolinie může odpovědnost odmítnout.</p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ Nedoložení nákladů</h4>
              <p className="text-sm mb-0">Nevyhazujte účtenky za jídlo, ubytování nebo taxi – bez nich vám aerolinie výdaje neproplatí.</p>
            </div>
          </div>

          <h2>Časté otázky (FAQ)</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Platí EU 261 i pro přestupy mimo EU?</h4>
              <p className="mb-0 text-sm">
                Ano, pokud první let odletěl z EU nebo jste letěli s evropskou aerolinií do EU. Platí celková ochrana pro celou cestu.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Co když jsem měl přestup v non-EU zemi?</h4>
              <p className="mb-0 text-sm">
                Pokud první let odletěl z EU, platí EU 261 pro celou cestu včetně přestupu mimo EU.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Mám nárok i když jsem koupil „selfconnect" letenky?</h4>
              <p className="mb-0 text-sm">
                Ne. Pokud jste spojili dva samostatné lety od různých aerolinií, nejste chráněni EU 261. První aerolinie neodpovídá za návaznost.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Jak rychle musím podat reklamaci?</h4>
              <p className="mb-0 text-sm">
                Doporučujeme podat reklamaci do <strong>14 dnů</strong> od letu. Promlčecí lhůta je však 3 roky (dle českého práva).
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl my-12">
            <h3 className="text-2xl font-bold mb-4">Nevíte, zda máte nárok?</h3>
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
              "headline": "Zmeškané přestupy – nárok na kompenzaci podle EU 261/2004",
              "description": "Zmeškal jste přestup kvůli zpoždění? Zjistěte, kdy máte nárok na až 600 € kompenzace za zmeškaný spoj.",
              "author": {
                "@type": "Organization",
                "name": "LotProblem.pl"
              },
              "datePublished": "2026-02-23",
              "image": "https://lotproblem.pl/og-image.png"
            })
          }}
        />
      </article>
    </LayoutCs>
  );
}
