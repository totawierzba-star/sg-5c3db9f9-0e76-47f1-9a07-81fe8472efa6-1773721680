import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Euro, CheckCircle2, ArrowRight, AlertCircle, FileText, Calendar, Shield } from "lucide-react";

export default function CsCancelledFlight() {
  return (
    <LayoutCs>
      <SEO
        title="Zrušený let – kompenzace až 600 € | EU 261/2004"
        description="Zrušený let z Prahy? Zjistěte, kdy máte nárok na kompenzaci až 600 € podle EU 261. Zkontrolujte své práva zdarma."
        url="https://lotproblem.pl/cs/zruseny-let"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="h-4 w-4" />
              <span>EU 261/2004 • Práva cestujících</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Zrušený let?
              <span className="block text-blue-600 dark:text-blue-400 mt-2">
                Máte nárok na až 600 € + vrácení peněz
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Pokud letecká společnost zruší váš let, máte právo na kompenzaci 250-600 € PLUS plnou náhradu nákladů na letenku podle nařízení EU 261/2004.
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
          </div>
        </div>
      </section>

      {/* When Entitled */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Kdy máte nárok na kompenzaci?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Kompenzace za zrušený let podle EU 261/2004
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border-2 border-green-200 dark:border-green-800">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    MÁTE NÁROK pokud:
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Let byl zrušen <strong>méně než 14 dní před odletem</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Let odlétá z letiště v <strong>EU</strong> (Praha, Brno, Ostrava)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Let provozuje <strong>letecká společnost EU</strong> (odkudkoliv)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Zrušení <strong>není způsobeno mimořádnými okolnostmi</strong></span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Let proběhl <strong>v posledních 3 letech</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-8 w-8 text-red-600 dark:text-red-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    NEMÁTE NÁROK pokud:
                  </h3>
                  <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Zrušení způsobeno <strong>mimořádnými okolnostmi</strong> (přírodní katastrofa, válka, stávka ATC)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Byli jste <strong>informováni 14+ dní předem</strong> a dostali jste alternativní let</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Letěli jste <strong>zdarma nebo se slevou</strong> pro zaměstnance</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>Let byl před <strong>více než 3 lety</strong></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start space-x-4">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Důležité: Dvojí kompenzace při zrušení
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Při zrušení letu máte nárok na <strong>DVA druhy náhrad</strong>:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>1. Finanční kompenzace</strong> - 250-600 € podle vzdálenosti letu (EU 261)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span><strong>2. Vrácení peněz za letenku</strong> - plná cena letenky NEBO alternativní let zdarma</span>
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Příklad:</strong> Let Praha → New York zrušen → Dostanete 600 € kompenzace + plné vrácení 15 000 Kč za letenku!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
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
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
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

            <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/30 dark:to-gray-900 rounded-xl p-8 border-2 border-blue-600 dark:border-blue-400 hover:shadow-xl transition-shadow relative">
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

            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
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

          <div className="text-center mt-8">
            <Link
              href="/cs/kompenzace-kalkulacka"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              Spočítejte přesnou částku pro váš let
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Jak získat kompenzaci?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              3 jednoduché kroky ke kompenzaci
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Zkontrolujte nárok
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Vyplňte údaje o zrušeném letu (číslo letu, datum, důvod zrušení) a zjistěte, zda máte nárok.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                My vyřídíme reklamaci
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Náš tým jednání s leteckou společností za vás. Vymáháme kompenzaci i vrácení peněz za letenku.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Dostanete peníze
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Po získání kompenzace vám peníze přijedou na váš účet. Platíte pouze při úspěchu (25% provize).
              </p>
            </div>
          </div>

          <div className="text-center">
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

      {/* FAQ */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Časté otázky
            </h2>
          </div>

          <div className="space-y-6">
            <details className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer">
                Co když mi aerolinka nabídla alternativní let?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Stále máte nárok na kompenzaci! I když přijmete alternativní let, pokud dorazíte s významným 
                zpožděním (2-4+ hodiny podle vzdálenosti), máte nárok na finanční kompenzaci 250-600 €. 
                Alternativní let je pouze náhrada za zrušený let, nikoliv náhrada za kompenzaci.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer">
                Dostanu zpět i peníze za letenku?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                ANO! Máte DVOJE práva: (1) Finanční kompenzace 250-600 € za zrušení PLUS (2) Vrácení plné 
                ceny letenky NEBO alternativní let zdarma. Pokud odmítnete alternativní let, aerolinka musí 
                vrátit 100% ceny letenky do 7 dní.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer">
                Co když aerolinka tvrdí "mimořádné okolnosti"?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Letecké společnosti často tvrdí "mimořádné okolnosti" (počasí, technická závada), aby se 
                vyhnuly výplatě. Většina těchto případů ale nespadá pod mimořádné okolnosti podle EU 261. 
                Náš tým zkontroluje oficiální data a zjistí, zda máte skutečně nárok. V 70% případů mají 
                cestující stále nárok, i když aerolinky tvrdí opak.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer">
                Jak dlouho trvá vyřízení reklamace?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Průměrně 2-6 měsíců. Letecké společnosti mají 6-8 týdnů na odpověď, pak následuje jednání. 
                V některých případech (odmítnutí aerolinek) může proces trvat déle (soudní cesta), ale my se 
                o vše postaráme a neustále vás informujeme o stavu.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <summary className="font-semibold text-lg text-gray-900 dark:text-white cursor-pointer">
                Mohu získat kompenzaci i za starší lety?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                ANO, máte nárok zpětně až 3 roky (podle českého práva). Například v roce 2026 můžete reklamovat 
                lety od roku 2023. Důležité je mít doklady (palubní vstupenka, email o zrušení, potvrzení 
                od aerolinek).
              </p>
            </details>
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
            Zkontrolujte svůj zrušený let zdarma a zjistěte, kolik můžete získat.
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

      {/* Related Pages */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Související témata
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
                Co dělat když let má zpoždění
              </p>
            </Link>

            <Link
              href="/cs/kompenzace-kalkulacka"
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700"
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2">
                Kalkulačka kompenzace
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Spočítejte přesnou výši kompenzace
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