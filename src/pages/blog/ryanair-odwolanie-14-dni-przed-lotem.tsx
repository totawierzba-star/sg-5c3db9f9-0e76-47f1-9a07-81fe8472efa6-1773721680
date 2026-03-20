import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Calendar, XCircle, CheckCircle, AlertTriangle, Clock, Euro } from "lucide-react";

export default function RyanairOdwolanie14DniPrzedLotem() {
  return (
    <Layout>
      <SEO
        title="Ryanair odwołanie 14 dni przed lotem — jakie masz opcje? [2026]"
        description="Ryanair odwołał Twój lot 14 dni (lub wcześniej) przed odlotem? Sprawdź czy należy się odszkodowanie i jakie masz opcje (zwrot, przekierowanie)."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">Ryanair odwołanie 14 dni przed</li>
            </ol>
          </nav>

          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Ryanair Odwołanie
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ryanair odwołanie 14 dni przed lotem — jakie masz opcje?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Kiedy należy się odszkodowanie za odwołanie z wyprzedzeniem? Różnica między 14+ dni a 7-14 dni
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Czas czytania: 9 min</span>
              <span>•</span>
              <span>Aktualizacja: 26.02.2025</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Szybka odpowiedź: Czy należy się odszkodowanie?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  NIE — brak odszkodowania
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 font-bold">✗</span>
                    <span><strong>Odwołanie 14+ dni przed odlotem</strong> (Ryanair powiadomił wcześniej)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 font-bold">✗</span>
                    <span>Ryanair zaproponował alternatywny lot w podobnym czasie</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs font-medium">
                    ⚠️ <strong>Przysługuje:</strong> Zwrot kosztów biletu LUB przekierowanie na inny lot (Twój wybór)
                  </p>
                </div>
              </div>

              <div className="bg-green-500 bg-opacity-20 backdrop-blur-sm border-2 border-green-300 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  TAK — przysługuje odszkodowanie
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span><strong>Odwołanie 7-14 dni przed</strong> + brak odpowiedniego lotu zastępczego</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span><strong>Odwołanie &lt;7 dni przed</strong> odlotem (zawsze odszkodowanie)</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs font-medium">
                    💰 Kwota: <strong>250-600 € + zwrot/przekierowanie</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-medium">
                🔑 <strong>Kluczowa zasada:</strong> Im później Ryanair odwołał lot, tym więcej Ci się należy. Odwołanie 14+ dni przed = tylko zwrot/przekierowanie. Odwołanie &lt;7 dni = pełne odszkodowanie 250-600 €.
              </p>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tabela: Kiedy należy się odszkodowanie?</h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Czas powiadomienia</th>
                    <th className="px-6 py-4 text-left font-bold">Warunki</th>
                    <th className="px-6 py-4 text-left font-bold">Odszkodowanie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">14+ dni przed</div>
                      <div className="text-xs text-gray-500">Dwa tygodnie lub więcej</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Niezależnie od zaproponowanej alternatywy
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-red-600 font-bold">
                        <XCircle className="h-4 w-4" />
                        BRAK
                      </span>
                      <div className="text-xs text-gray-500 mt-1">Tylko zwrot/przekierowanie</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">7-14 dni przed</div>
                      <div className="text-xs text-gray-500">Tydzień do dwóch tygodni</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Zaproponowano lot zastępczy:<br />
                      • Wylot maks. 2h wcześniej<br />
                      • Przylot maks. 4h później
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-red-600 font-bold">
                        <XCircle className="h-4 w-4" />
                        BRAK
                      </span>
                      <div className="text-xs text-gray-500 mt-1">Dobra alternatywa = brak odszkodowania</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">7-14 dni przed</div>
                      <div className="text-xs text-gray-500">Tydzień do dwóch tygodni</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Zaproponowano zły lot zastępczy:<br />
                      • Wylot &gt;2h wcześniej<br />
                      • Przylot &gt;4h później
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-green-600 font-bold">
                        <CheckCircle className="h-4 w-4" />
                        250-600 €
                      </span>
                      <div className="text-xs text-gray-500 mt-1">Zła alternatywa = odszkodowanie</div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4">
                      <div className="font-bold text-gray-900">&lt;7 dni przed</div>
                      <div className="text-xs text-gray-500">Mniej niż tydzień</div>
                    </td>
                    <td className="px-6 py-4 text-gray-700">
                      Niezależnie od zaproponowanej alternatywy
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 text-green-600 font-bold">
                        <CheckCircle className="h-4 w-4" />
                        250-600 €
                      </span>
                      <div className="text-xs text-gray-500 mt-1">ZAWSZE przysługuje</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Przykład konkretnej sprawy:</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>Scenariusz 1:</strong> Ryanair odwołał lot Gdańsk–Barcelona <strong>20 dni przed odlotem</strong>.</p>
                <p className="ml-4">→ Zaproponował alternatywny lot tego samego dnia (+3h później)</p>
                <p className="ml-4 font-bold text-red-700">✗ <strong>BRAK odszkodowania</strong> (powiadomienie 14+ dni przed)</p>

                <p className="mt-4"><strong>Scenariusz 2:</strong> Ryanair odwołał lot Warszawa–Londyn <strong>10 dni przed odlotem</strong>.</p>
                <p className="ml-4">→ Zaproponował lot następnego dnia (+6h przylot później)</p>
                <p className="ml-4 font-bold text-green-700">✓ <strong>250 € odszkodowania</strong> (przylot &gt;4h później = zła alternatywa)</p>

                <p className="mt-4"><strong>Scenariusz 3:</strong> Ryanair odwołał lot Kraków–Dublin <strong>5 dni przed odlotem</strong>.</p>
                <p className="ml-4">→ Zaproponował idealny lot zastępczy (ta sama godzina)</p>
                <p className="ml-4 font-bold text-green-700">✓ <strong>250 € odszkodowania</strong> (odwołanie &lt;7 dni = zawsze należy się)</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jakie masz opcje po odwołaniu lotu?</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Euro className="h-6 w-6 text-blue-600" />
                  Opcja 1: Zwrot kosztów biletu
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Pełny zwrot</strong> ceny biletu w ciągu 7 dni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Gotówka (przelew bankowy), NIE voucher</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Możesz kupić bilet u innej linii</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  💡 Najlepsza opcja jeśli plany się zmieniły lub Ryanair nie ma dobrego lotu zastępczego.
                </p>
              </div>

              <div className="bg-white border-2 border-purple-500 rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  Opcja 2: Przekierowanie na inny lot
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Alternatywny lot</strong> do tego samego miejsca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Najwcześniejsza możliwa data (lub wybrana przez Ciebie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Bez dodatkowych opłat</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-500 mt-4 italic">
                  💡 Najlepsza opcja jeśli nadal chcesz lecieć i Ryanair ma dobry lot zastępczy.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <h4 className="font-bold text-amber-900 mb-3">⚠️ WAŻNE: Nie daj się naciągnąć na voucher!</h4>
              <p className="text-gray-700 mb-3">
                Ryanair często oferuje <strong>voucher zamiast gotówki</strong> przy zwrocie biletu. <strong>Nie musisz go akceptować!</strong> Masz bezwarunkowe prawo do <strong>przelewu bankowego w gotówce</strong>.
              </p>
              <p className="text-sm text-gray-600">
                Voucher ma ograniczony termin ważności (12 miesięcy), działa tylko na loty Ryanair i często nie da się go w pełni wykorzystać. <strong>Zawsze żądaj gotówki.</strong>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak odzyskać odszkodowanie za odwołany lot?</h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Procedura krok po kroku:</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Sprawdź kiedy zostałeś powiadomiony</h4>
                    <p className="text-gray-700 mb-2">
                      Znajdź email od Ryanair o odwołaniu lotu. <strong>Data powiadomienia</strong> decyduje o Twoich prawach:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• 14+ dni przed = tylko zwrot/przekierowanie</li>
                      <li>• 7-14 dni przed = odszkodowanie jeśli zła alternatywa</li>
                      <li>• &lt;7 dni przed = zawsze odszkodowanie 250-600 €</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Wybierz opcję: zwrot czy przekierowanie</h4>
                    <p className="text-gray-700 mb-2">
                      Skontaktuj się z Ryanair (przez stronę lub infolinię) i wybierz:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Zwrot kosztów</strong> (gotówka, nie voucher!) - jeśli nie chcesz już lecieć</li>
                      <li>• <strong>Przekierowanie</strong> na inny lot - jeśli nadal chcesz lecieć</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-2 italic">
                      💡 Masz prawo do obu opcji niezależnie od tego czy należy się odszkodowanie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Złóż reklamację o odszkodowanie (jeśli należy się)</h4>
                    <p className="text-gray-700 mb-2">
                      Jeśli zostałeś powiadomiony &lt;14 dni przed (lub 7-14 dni + zła alternatywa), wyślij email do Ryanair żądając odszkodowania 250-600 €.
                    </p>
                    <p className="text-sm text-gray-600">
                      Załącz: potwierdzenie rezerwacji, email o odwołaniu, boarding pass (jeśli leciałeś innym lotem).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Skorzystaj z ClaimWinger (najszybsza opcja)</h4>
                    <p className="text-gray-700 mb-3">
                      ClaimWinger zajmie się wszystkim za Ciebie. <strong>Płacisz tylko po wygranej</strong> (25% + VAT). Zero kosztów z góry.
                    </p>
                    <a 
                      href="https://claimwinger.com/pl/odwolany-lot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Sprawdź swoje odszkodowanie
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ryanair odwołał lot 20 dni przed odlotem — czy należy się odszkodowanie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE.</strong> Jeśli Ryanair powiadomił Cię 14+ dni przed odlotem, odszkodowanie 250-600 € <strong>nie przysługuje</strong>. Masz jednak prawo do <strong>pełnego zwrotu kosztów biletu</strong> (gotówka, nie voucher) LUB <strong>przekierowania na inny lot</strong> bez dodatkowych opłat.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ryanair odwołał lot 10 dni przed — kiedy należy się odszkodowanie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Zależy od zaproponowanej alternatywy:</strong><br />
                  • Jeśli Ryanair zaproponował lot zastępczy z <strong>wylotem maks. 2h wcześniej</strong> i <strong>przylotem maks. 4h później</strong> — odszkodowanie NIE przysługuje.<br />
                  • Jeśli alternatywa jest gorsza (wylot &gt;2h wcześniej LUB przylot &gt;4h później) — należy się <strong>250-600 € odszkodowania</strong>.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ryanair odwołał lot 3 dni przed odlotem — ile odszkodowania?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>250-600 € w zależności od dystansu lotu</strong> (niezależnie od zaproponowanej alternatywy):<br />
                  • Do 1500 km: <strong>250 €</strong><br />
                  • 1500-3500 km: <strong>400 €</strong><br />
                  • Powyżej 3500 km: <strong>600 €</strong><br />
                  <em>+ pełny zwrot biletu LUB przekierowanie na inny lot.</em>
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy muszę przyjąć voucher zamiast zwrotu gotówki?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE!</strong> Masz bezwarunkowe prawo do <strong>przelewu bankowego w gotówce</strong>. Ryanair nie może zmuszać Cię do przyjęcia vouchera. Jeśli oferują voucher, wyraźnie odmów i zażądaj gotówki. Rozporządzenie EU 261/2004 wymaga pisemnej zgody pasażera na bon — bez Twojej zgody MUSZĄ wypłacić pieniądze.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Co jeśli Ryanair nie zaproponował żadnego lotu zastępczego?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Odszkodowanie przysługuje ZAWSZE</strong> jeśli powiadomienie było &lt;14 dni przed odlotem. Brak zaproponowania alternatywy automatycznie traktowany jest jako "zła alternatywa". Masz prawo do: <strong>pełnego zwrotu biletu + odszkodowanie 250-600 €</strong> (jeśli &lt;14 dni przed odlotem).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jak ClaimWinger może pomóc przy odwołanym locie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  ClaimWinger <strong>automatycznie sprawdza</strong> czy należy się odszkodowanie za odwołany lot (biorąc pod uwagę czas powiadomienia i alternatywy). Zajmują się całą korespondencją z Ryanair, w razie potrzeby składają skargę do ULC lub prowadzą sprawę sądową. <strong>Płacisz tylko po wygranej</strong> (25% + VAT) — zero kosztów z góry.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ryanair odwołał Twój lot?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger sprawdzi czy należy się odszkodowanie 250-600 € i zajmie się całą sprawą. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl/odwolany-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Sprawdź swoje odszkodowanie
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="https://claimwinger.com/pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                >
                  Dowiedz się więcej
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ryanair-odmowil-odszkodowania" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair odmówił odszkodowania — co robić?
                </h3>
                <p className="text-gray-600 text-sm">
                  Poznaj 3 skuteczne metody wymuszenia wypłaty odszkodowania od Ryanair.
                </p>
              </Link>

              <Link href="/blog/ryanair-voucher-zamiast-gotowki-wymusic" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair voucher — jak wymusić gotówkę?
                </h3>
                <p className="text-gray-600 text-sm">
                  Nie daj się naciągnąć! Sprawdź jak odmówić vouchera i wymusić wypłatę pieniędzy.
                </p>
              </Link>

              <Link href="/blog/prawa-pasazera-ryanair" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Prawa pasażera Ryanair — kompletny przewodnik
                </h3>
                <p className="text-gray-600 text-sm">
                  Wszystko o EU261: odszkodowania, posiłki, hotel, alternatywny transport.
                </p>
              </Link>

              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Jak złożyć wniosek o odszkodowanie — krok po kroku
                </h3>
                <p className="text-gray-600 text-sm">
                  Kompletny przewodnik jak samodzielnie złożyć reklamację do linii lotniczych.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
