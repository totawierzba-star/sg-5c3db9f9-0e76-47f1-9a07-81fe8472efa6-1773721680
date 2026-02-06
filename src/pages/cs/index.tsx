import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Euro, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function CsHomepage() {
  return (
    <LayoutCs>
      <SEO
        title="Zpožděný nebo zrušený let – zkontrolujte kompenzaci až 600 €"
        description="Máte problém s letem? Zjistěte, zda máte nárok na kompenzaci až 600 € za zpožděný nebo zrušený let."
        url="https://lotproblem.pl/cs"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="h-4 w-4" />
              <span>EU 261/2004 • Práva cestujících</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Zpožděný nebo zrušený let?
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                Získejte až 600 € kompenzace
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Pomáháme českým cestujícím získat finanční kompenzaci za problémy s lety z letišť Praha, Brno a Ostrava.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Zkontrolovat nárok zdarma
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                href="/cs/kompenzace-kalkulacka"
                className="inline-flex items-center justify-center bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
              >
                Kalkulačka kompenzace
              </Link>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              ✓ Žádné skryté poplatky • ✓ Platíte pouze při úspěchu • ✓ Vyřízeno za 24-48 hodin
            </p>
          </div>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Kolik můžete získat?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Výše kompenzace závisí na vzdálenosti letu
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-blue-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">Do 1 500 km</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Např. Praha → Londýn<br />
                  Praha → Amsterdam<br />
                  Praha → Stockholm
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-600 dark:border-blue-400 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Nejčastější
              </div>
              <div className="text-center">
                <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">400 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">1 500 – 3 500 km</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Např. Praha → Řím<br />
                  Praha → Madrid<br />
                  Praha → Atény
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 border border-blue-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Euro className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">600 €</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium mb-4">Nad 3 500 km</div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Např. Praha → New York<br />
                  Praha → Bangkok<br />
                  Praha → Dubai
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When You're Entitled */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Kdy máte nárok na kompenzaci?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Vaše práva podle nařízení EU 261/2004
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Zpožděný let
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Let přistál se zpožděním více než 3 hodiny od plánovaného času.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Zpoždění 3+ hodiny od plánovaného příletu</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Let z EU nebo letadlem EU společnosti</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Nárok platí až 3 roky zpětně</span>
                    </li>
                  </ul>
                  <Link
                    href="/cs/zpozdeny-let"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mt-4 transition-colors"
                  >
                    Více o zpožděných letech
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Plane className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Zrušený let
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Společnost zrušila let a nedostali jste alternativní let nebo odmítli náhradní dopravu.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Zrušení bez předchozího upozornění (méně než 14 dní)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Alternativní let nedorazil včas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Plné právo na kompenzaci + vrácení peněz</span>
                    </li>
                  </ul>
                  <Link
                    href="/cs/zruseny-let"
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium mt-4 transition-colors"
                  >
                    Více o zrušených letech
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Jak to funguje?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Získejte kompenzaci ve 3 jednoduchých krocích
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Zkontrolujte nárok
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vyplňte údaje o letu a zjistěte, zda máte nárok na kompenzaci za méně než 2 minuty.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                My se postaráme o zbytek
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Náš právní tým jedná s leteckou společností vaším jménem. Žádná práce z vaší strany.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Získejte peníze
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Po získání kompenzace dostanete peníze na váš účet. Platíte pouze při úspěchu (25% provize).
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Začít reklamaci zdarma
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Neztrácejte peníze, které vám patří
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            98% leteckých společností dobrovolně nevyplatí kompenzaci. Pomozte si získat, co vám náleží.
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-xl"
          >
            Zkontrolovat nárok (2 minuty)
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <p className="text-blue-100 mt-4 text-sm">
            ✓ Žádné riziko • ✓ Žádné skryté poplatky • ✓ Platíte pouze při úspěchu
          </p>
        </div>
      </section>
    </LayoutCs>
  );
}