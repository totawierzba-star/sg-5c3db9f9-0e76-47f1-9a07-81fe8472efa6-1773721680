import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Euro, CheckCircle2, AlertTriangle, ArrowRight } from "lucide-react";

export default function KalkulackaKompenzacie() {
  return (
    <LayoutSk>
      <SEO
        title="Kalkulačka kompenzácie za let – Koľko vám patrí? 250-600 €"
        description="Vypočítajte výšku kompenzácie za meškanie alebo zrušenie letu. Zistite, či máte nárok na 250 €, 400 € alebo 600 €."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
            <Euro className="h-4 w-4 mr-2" />
            Kalkulačka kompenzácie
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Koľko peňazí vám patrí za <span className="text-blue-600">meškanie alebo zrušenie</span> letu?
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Výška kompenzácie závisí od vzdialenosti letu, nie od ceny letenky. 
            Zistite svoju sumu podľa nariadenia EU 261/2004.
          </p>
          
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            <Euro className="mr-2 h-6 w-6" />
            Žiadosť o kompenzáciu
          </a>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Výška kompenzácie podľa vzdialenosti letu
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tri kategórie podľa nariadenia EU 261/2004
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 250 EUR */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">250 €</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Do 1 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Bratislava → Rím</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Viedeň → Londýn</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Košice → Praha</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Bratislava → Barcelona</span>
                </div>
              </div>
            </div>

            {/* 400 EUR */}
            <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white transform scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                Najčastejšie
              </div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold mb-2">400 €</div>
                <div className="text-sm text-blue-100 uppercase tracking-wide">1 500 - 3 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✈</span>
                  <span>Bratislava → Dubaj</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✈</span>
                  <span>Viedeň → Tenerife</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✈</span>
                  <span>Košice → Hurghada</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✈</span>
                  <span>Bratislava → Egypt</span>
                </div>
              </div>
            </div>

            {/* 600 EUR */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">600 €</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Nad 3 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Viedeň → New York</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Viedeň → Bangkok</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Bratislava → Los Angeles</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Viedeň → Tokio</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes from Slovakia */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Obľúbené trasy zo Slovenska
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bratislava Routes */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Bratislava (BTS)
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Londýn</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">250 €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Barcelona</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">250 €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Dubaj</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">400 €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Hurghada</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">400 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">→ New York</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">600 €</span>
                </div>
              </div>
            </div>

            {/* Vienna Routes (popular for Slovaks) */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Viedeň (VIE) - Pre Slovákov
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Amsterdam</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">250 €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Paríž</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">250 €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Tenerife</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">400 €</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-700 dark:text-gray-300">→ Bangkok</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">600 €</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">→ Tokio</span>
                  <span className="font-bold text-blue-600 dark:text-blue-400">600 €</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Rules */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Dôležité pravidlá
          </h2>

          <div className="space-y-6">
            <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  1. Vzdialenosť sa počíta "vzdušnou čiarou"
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nie je dôležité, koľko prestupov máte. Počíta sa priama vzdialenosť medzi odletovým 
                  a cieľovým letiskom. Napríklad: Bratislava → New York = 6 860 km → 600 €.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  2. Musí byť spojenie s EÚ
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Kompenzácia platí len ak: (a) letecká spoločnosť má sídlo v EÚ, ALEBO (b) odlet je z letiska v EÚ. 
                  Príklad: Emirates z Dubaja do New Yorku → žiadna kompenzácia. Ale Emirates z Viedne do Dubaja → áno!
                </p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  3. Meškanie sa počíta pri prílete
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nie je dôležité, koľko mešká odlet. Počíta sa, <strong>kedy lietadlo otvorilo dvere po pristátí</strong> 
                  v cieľovej destinácii. Ak je meškanie 3+ hodiny → máte nárok na kompenzáciu.
                </p>
              </div>
            </div>

            <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <AlertTriangle className="h-6 w-6 text-green-600 dark:text-green-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  4. Pri zrušení = kompenzácia + vrátenie peňazí
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Ak sa let zrušil, máte nárok na <strong>dvojitú náhradu</strong>: finančnú kompenzáciu (250-600 €) 
                  PLUS 100% vrátenie ceny letenky. Príklad: Letenka za 400 € → dostanete 400 € (kompenzácia) + 400 € (vrátenie) = 800 €!
                </p>
              </div>
            </div>

            <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  5. Nezáleží na type letenky
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Kompenzácia platí pre všetky typy leteniek: economy, business, first class, nízkonákladové lety, 
                  charter lety, dovolenkové balíčky. Ak ste zaplatili 50 € za Ryanair, stále môžete dostať 250 €!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Získajte svoju kompenzáciu teraz
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Viac ako <strong>80% cestujúcich</strong> nikdy nepožiada o kompenzáciu. 
            Nezmeškajte svoje peniaze – vyplnenie formulára trvá len 2 minúty.
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-gray-100 transition-all shadow-xl"
          >
            <Euro className="mr-2 h-6 w-6" />
            Začať žiadosť
          </a>
          <p className="mt-6 text-blue-200 text-sm">
            ✓ Bez rizika • ✓ Platba len pri úspechu • ✓ 25% provízia + DPH
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Súvisiace témy:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/sk/meskanie-letu"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Meškanie letu</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompenzácia až 600 €
              </p>
            </Link>
            <Link
              href="/sk/zruseny-let"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Zrušený let</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompenzácia + vrátenie peňazí
              </p>
            </Link>
            <Link
              href="/sk/blog"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Blog a príručky</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Všetko o právach cestujúcich
              </p>
            </Link>
          </div>
        </div>
      </section>
    </LayoutSk>
  );
}
