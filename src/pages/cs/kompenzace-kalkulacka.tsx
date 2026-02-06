import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Calculator, Euro, Plane, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export default function CsCompensationCalculator() {
  return (
    <LayoutCs>
      <SEO
        title="Kalkulačka kompenzace za zpožděný let | Spočítejte nárok"
        description="Zjistěte, kolik můžete získat za zpožděný nebo zrušený let. Kalkulačka kompenzace podle EU 261 - 250 €, 400 € nebo 600 €."
        url="https://lotproblem.pl/cs/kompenzace-kalkulacka"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calculator className="h-4 w-4" />
              <span>EU 261/2004 • Kalkulačka kompenzace</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Kolik můžete získat?
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                Spočítejte nárok na kompenzaci
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Výše kompenzace závisí na vzdálenosti letu. Zjistěte přesnou částku, která vám náleží za zpožděný nebo zrušený let.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Calculator */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Rychlá kalkulačka kompenzace
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Vyberte vzdálenost vašeho letu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Short Distance */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">Do 1 500 km</div>
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">250 €</div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Londýn</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Amsterdam</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Stockholm</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Vídeň</span>
                  </div>
                </div>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Zkontrolovat nárok
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Medium Distance */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-600 dark:border-blue-400 hover:shadow-2xl transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Nejčastější
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">1 500 – 3 500 km</div>
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">400 €</div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Řím</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Madrid</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Atény</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Lisabon</span>
                  </div>
                </div>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Zkontrolovat nárok
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Long Distance */}
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-100 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all hover:shadow-xl">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-2">Nad 3 500 km</div>
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">600 €</div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-6">
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → New York</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Bangkok</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Dubai</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Plane className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Praha → Tokyo</span>
                  </div>
                </div>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Zkontrolovat nárok
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                🎯 Přesná kalkulace vašeho letu
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Zadejte údaje o vašem letu a získejte okamžitý odhad kompenzace včetně kontroly oprávnění.
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Spočítat přesnou částku
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How Compensation Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Jak funguje kompenzace?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Výše kompenzace podle EU 261/2004
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Euro className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                Fixní částky podle vzdálenosti
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>250 €</strong> - Lety do 1 500 km (krátké vzdálenosti)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>400 €</strong> - Lety 1 500-3 500 km (střední vzdálenosti)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>600 €</strong> - Lety nad 3 500 km (dlouhé vzdálenosti)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Calculator className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                Měří se vzdálenost "crow flies"
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Počítá se <strong>přímá vzdálenost</strong> mezi letišti (ne trasa letu)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Přestupní lety = celková vzdálenost prvního až posledního letiště</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Kompenzace je stejná pro ekonomickou i business třídu</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Routes from Czech Airports */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Časté trasy z Prahy
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Příklady kompenzací pro populární destinace
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                250 € Kompenzace
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div>Praha → Londýn (1 035 km)</div>
                <div>Praha → Paříž (885 km)</div>
                <div>Praha → Amsterdam (715 km)</div>
                <div>Praha → Stockholm (1 155 km)</div>
                <div>Praha → Berlín (280 km)</div>
                <div>Praha → Vídeň (251 km)</div>
                <div>Praha → Mnichov (300 km)</div>
                <div>Praha → Curych (550 km)</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                400 € Kompenzace
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div>Praha → Řím (922 km)</div>
                <div>Praha → Madrid (1 785 km)</div>
                <div>Praha → Atény (1 745 km)</div>
                <div>Praha → Barcelona (1 525 km)</div>
                <div>Praha → Lisabon (2 335 km)</div>
                <div>Praha → Oslo (1 315 km)</div>
                <div>Praha → Reykjavík (2 655 km)</div>
                <div>Praha → Istanbul (1 695 km)</div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-4">
                600 € Kompenzace
              </h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div>Praha → New York (6 570 km)</div>
                <div>Praha → Bangkok (8 590 km)</div>
                <div>Praha → Dubai (4 045 km)</div>
                <div>Praha → Tokyo (8 925 km)</div>
                <div>Praha → Los Angeles (9 585 km)</div>
                <div>Praha → Hong Kong (8 315 km)</div>
                <div>Praha → Singapore (10 115 km)</div>
                <div>Praha → Toronto (6 655 km)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              ⚠️ Důležité informace o kompenzaci
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>Výše kompenzace <strong>nezávisí na ceně letenky</strong> - je pevně stanovena zákonem EU 261</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>Máte nárok i když jste letěli se slevou nebo bonusovou letenkou (ne zaměstnanecká)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>Kompenzace je <strong>navíc k vrácení peněz</strong> za zrušený let</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>Nárok platí <strong>až 3 roky zpětně</strong> od data letu</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                <span>Pro zpoždění musí být přílet 3+ hodiny pozdě (ne odlet)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Získejte kompenzaci, která vám patří
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Náš tým vymůže vaše peníze bez rizika. Platíte pouze při úspěchu.
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            Zkontrolovat nárok zdarma
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-blue-100 mt-4 text-sm">
            ✓ Žádné riziko • ✓ Žádné skryté poplatky • ✓ 25% provize pouze při úspěchu
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Další užitečné stránky
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/cs/zpozdeny-let"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Zpožděný let
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Práva a kompenzace při zpoždění
              </p>
            </Link>

            <Link
              href="/cs/zruseny-let"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Zrušený let
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Co dělat když aerolinka zruší let
              </p>
            </Link>

            <Link
              href="/cs/blog"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Blog a průvodci
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Praktické rady pro cestující
              </p>
            </Link>
          </div>
        </div>
      </section>
    </LayoutCs>
  );
}