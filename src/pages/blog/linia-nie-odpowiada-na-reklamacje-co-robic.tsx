import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertCircle, CheckCircle, Phone, Mail, FileText, Scale } from "lucide-react";

export default function LiniaNieOdpowiada() {
  return (
    <Layout>
      <SEO
        title="Co zrobić gdy linia lotnicza nie odpowiada na reklamację?"
        description="Linia lotnicza ignoruje Twoją reklamację? Sprawdź co robić krok po kroku: ULC, mediacja, sąd lub ClaimWinger."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Linia nie odpowiada na reklamację</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertCircle className="h-4 w-4" />
              Nieodpowiadająca linia
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Co zrobić gdy linia nie odpowiada na reklamację?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Kompletny przewodnik: ULC, mediacja, sąd i profesjonalna pomoc
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                7 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 25.02.2025</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Jeśli linia lotnicza nie odpowiada na reklamację, masz 4 opcje działania:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">1. ULC</div>
                <div className="text-sm font-medium opacity-90">Urząd Lotnictwa Cywilnego</div>
                <div className="text-xs mt-2 opacity-75">Darmowa skarga, ale brak egzekucji</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">2. Mediacja</div>
                <div className="text-sm font-medium opacity-90">Pozasądowe rozwiązanie sporu</div>
                <div className="text-xs mt-2 opacity-75">Darmowe, ale niewiążące</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">3. Sąd</div>
                <div className="text-sm font-medium opacity-90">Pozew cywilny</div>
                <div className="text-xs mt-2 opacity-75">Wiążący wyrok, ale długo i drogo</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">4. ClaimWinger</div>
                <div className="text-sm font-medium opacity-90">Profesjonalna pomoc (zalecane)</div>
                <div className="text-xs mt-2 opacity-75">Najszybsze i najskuteczniejsze</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mt-6 text-center">
              ⚠️ Brak odpowiedzi NIE oznacza automatycznej odmowy – nadal masz prawo do odszkodowania
            </p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Krok 1: Upewnij się że czekałeś wystarczająco długo</h2>
            
            <p className="text-gray-700 mb-6">
              Zanim uznasz, że linia ignoruje reklamację, sprawdź czy minął wystarczający czas:
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-4">Standardowe terminy odpowiedzi:</h3>
              <ul className="space-y-2 text-blue-900">
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>30 dni:</strong> Minimalny termin ustawowy dla linii (EU261)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>45-60 dni:</strong> Realistyczny czas na pierwszą odpowiedź (zwłaszcza Ryanair, Wizzair)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold">•</span>
                  <span><strong>90+ dni:</strong> Jeśli po 3 miesiącach brak reakcji, linia oficjalnie ignoruje sprawę</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Uwaga!</h3>
                  <p className="text-yellow-800">
                    Jeśli wysłałeś reklamację mailem (nie przez oficjalny formularz linii), jest duża szansa 
                    że nie została ona przyjęta do systemu. Linie często ignorują maile i wymuszają użycie 
                    formularzy online.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Krok 2: Wyślij przypomnienie</h2>

            <p className="text-gray-700 mb-6">
              Jeśli minęło 30-45 dni, wyślij przypomnienie (najlepiej przez oficjalny formularz linii):
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-3">Wzór przypomnienia:</h3>
              <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-800 font-mono">
                <p className="mb-2"><strong>Temat:</strong> Przypomnienie – Reklamacja nr [TWÓJ NUMER] – lot [DATA]</p>
                <p className="mb-4"><strong>Treść:</strong></p>
                <p>Szanowni Państwo,</p>
                <p className="mt-2">
                  W dniu [DATA PIERWSZEJ REKLAMACJI] złożyłem reklamację dotyczącą opóźnionego/odwołanego lotu 
                  [NUMER LOTU] z dnia [DATA LOTU]. Zgodnie z rozporządzeniem EU261, linia lotnicza jest zobowiązana 
                  do udzielenia odpowiedzi w ciągu 30 dni.
                </p>
                <p className="mt-2">
                  Minęło już [X] dni, a nie otrzymałem żadnej odpowiedzi. Proszę o pilne rozpatrzenie mojej sprawy 
                  i wypłacenie należnego odszkodowania w wysokości [250/400/600] €.
                </p>
                <p className="mt-2">
                  W przypadku braku odpowiedzi w ciągu 14 dni, zostanę zmuszony skierować sprawę do Urzędu Lotnictwa 
                  Cywilnego oraz rozważę drogę sądową.
                </p>
                <p className="mt-4">Z poważaniem,<br />[TWOJE IMIĘ I NAZWISKO]</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Krok 3: Skarga do Urzędu Lotnictwa Cywilnego (ULC)</h2>

            <p className="text-gray-700 mb-6">
              Jeśli po 60 dniach nadal brak odpowiedzi, możesz złożyć skargę do ULC:
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Jak złożyć skargę do ULC?
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <div>
                    Wejdź na stronę <a href="https://www.ulc.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ULC.gov.pl</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <div>
                    Przejdź do sekcji "Prawa pasażerów" → "Złóż skargę"
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <div>
                    Wypełnij formularz online (potrzebujesz: numer lotu, data, dowody opóźnienia, kopia reklamacji)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">4.</span>
                  <div>
                    Czekaj na decyzję ULC (zazwyczaj 2-3 miesiące)
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-900 mb-2">Ograniczenia ULC:</h3>
                  <ul className="list-disc list-inside space-y-1 text-red-800">
                    <li>ULC nie może wymusić wypłaty odszkodowania (tylko wydaje opinię)</li>
                    <li>Linie często ignorują zalecenia ULC</li>
                    <li>Proces trwa 2-4 miesiące</li>
                    <li>Nie przyspiesza faktycznej wypłaty pieniędzy</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Krok 4: Mediacja (opcjonalnie)</h2>

            <p className="text-gray-700 mb-6">
              Alternatywą dla sądu jest mediacja – pozasądowe rozwiązanie sporu:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Zalety mediacji
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ Darmowa dla pasażera</li>
                  <li>✅ Szybsza niż sąd (1-3 miesiące)</li>
                  <li>✅ Neutralny mediator</li>
                  <li>✅ Możliwość ugody</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Wady mediacji
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>❌ Niewiążąca (linia może odmówić uczestnictwa)</li>
                  <li>❌ Nie gwarantuje wypłaty</li>
                  <li>❌ Wymaga zgody obu stron</li>
                  <li>❌ Rzadko kończy się sukcesem w sprawach lotniczych</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Krok 5: Pozew sądowy (ostateczność)</h2>

            <p className="text-gray-700 mb-6">
              Jeśli wszystkie inne metody zawiodły, pozostaje droga sądowa:
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Scale className="h-5 w-5 text-blue-600" />
                Jak wnieść pozew?
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <div>
                    <strong>Zbierz dokumenty:</strong> Boarding pass, potwierdzenie rezerwacji, dowody opóźnienia, 
                    korespondencja z linią, decyzja ULC (jeśli jest)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <div>
                    <strong>Napisz pozew:</strong> Możesz sam (wzory dostępne online) lub zatrudnić prawnika 
                    (koszt 500-1500 zł)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <div>
                    <strong>Wpłać opłatę sądową:</strong> 30 zł (dla roszczeń do 2000 zł) lub 5% wartości 
                    roszczenia (dla wyższych kwot)
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">4.</span>
                  <div>
                    <strong>Czekaj na rozprawę:</strong> 6-12 miesięcy w zależności od obciążenia sądu
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">5.</span>
                  <div>
                    <strong>Egzekucja wyroku:</strong> Jeśli wygrasz i linia nie zapłaci dobrowolnie, 
                    musisz skierować sprawę do komornika (dodatkowe koszty 100-300 zł)
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Koszty postępowania sądowego:</h3>
                  <ul className="list-disc list-inside space-y-1 text-yellow-800">
                    <li><strong>Opłata sądowa:</strong> 30-200 zł (zwrot przy wygranej)</li>
                    <li><strong>Prawnik (opcjonalnie):</strong> 500-1500 zł</li>
                    <li><strong>Komornik (jeśli linia nie płaci):</strong> 100-300 zł</li>
                    <li><strong>Czas:</strong> 6-18 miesięcy</li>
                    <li><strong>Stres:</strong> Wysoki (rozprawy, dokumenty, korespondencja)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Opcja rekomendowana: ClaimWinger</h2>

            <p className="text-gray-700 mb-6">
              Zamiast walczyć z linią przez miesiące/lata, możesz od razu skorzystać z ClaimWinger:
            </p>

            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8 mb-8 border-l-4 border-green-500">
              <h3 className="font-bold text-green-900 mb-4 text-xl">Dlaczego ClaimWinger to najlepsza opcja?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-green-900">
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Szybkość
                  </h4>
                  <p className="text-sm">
                    Średnio 2-4 tygodnie do wypłaty (vs 6-18 miesięcy sąd)
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Zero ryzyka
                  </h4>
                  <p className="text-sm">
                    Płacisz tylko w przypadku sukcesu (No Win, No Fee)
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Profesjonalizm
                  </h4>
                  <p className="text-sm">
                    Bezpośrednie kontakty z działami odszkodowań linii
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Zero stresu
                  </h4>
                  <p className="text-sm">
                    Wypełniasz formularz i zapominasz – ClaimWinger zajmuje się resztą
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Porównanie metod</h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Metoda</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Czas</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Koszt</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Skuteczność</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">ClaimWinger</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2-4 tygodnie</td>
                    <td className="px-6 py-4 text-sm text-gray-600">25-35% prowizji</td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600">95%+</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Skarga ULC</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2-4 miesiące</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Darmowe</td>
                    <td className="px-6 py-4 text-sm font-bold text-yellow-600">20-30%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Mediacja</td>
                    <td className="px-6 py-4 text-sm text-gray-600">1-3 miesiące</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Darmowe</td>
                    <td className="px-6 py-4 text-sm font-bold text-yellow-600">10-20%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Sąd</td>
                    <td className="px-6 py-4 text-sm text-gray-600">6-18 miesięcy</td>
                    <td className="px-6 py-4 text-sm text-gray-600">500-2000 zł</td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600">90%+ (ale długo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy brak odpowiedzi to automatyczna odmowa?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nie! Brak odpowiedzi NIE oznacza automatycznej odmowy. Masz nadal prawo do odszkodowania 
                  i możesz je dochodzić innymi drogami (ULC, sąd, ClaimWinger).
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy skarga do ULC jest skuteczna?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Średnio skuteczna (20-30% przypadków). ULC nie ma uprawnień do wymuszenia wypłaty, może 
                  tylko wydać opinię. Linie często ignorują zalecenia ULC. Jednak warto złożyć skargę, 
                  bo może to przyspieszyć odpowiedź linii.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę od razu iść do sądu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Teoretycznie tak, ale sąd może zlecić wcześniejszą próbę polubownego rozwiązania sporu 
                  (np. przez mediację). W praktyce lepiej najpierw spróbować ULC lub od razu skorzystać 
                  z ClaimWinger (szybciej i taniej niż sąd).
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Ile kosztuje ClaimWinger?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  ClaimWinger pobiera 25-35% prowizji tylko w przypadku sukcesu (No Win, No Fee). 
                  Jeśli nie wygrasz, nie płacisz nic. Przykład: odszkodowanie 600 € → otrzymujesz 
                  ~420 € na konto.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Jak długo mam na złożenie reklamacji?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  W Polsce masz 3 lata od daty lotu. Jednak im dłużej zwlekasz, tym trudniej udowodnić 
                  roszczenie. Zalecamy zgłoszenie w ciągu 2-4 tygodni od incydentu.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Co jeśli wysłałem reklamację mailem, a nie formularzem?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Wiele linii ignoruje maile i wymusza użycie oficjalnych formularzy online. Jeśli 
                  wysłałeś reklamację mailem i nie otrzymałeś odpowiedzi, wyślij ją ponownie przez 
                  formularz na stronie linii lub skorzystaj z ClaimWinger.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Koniec walki z linią – ClaimWinger załatwi to za Ciebie
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nie trać czasu i nerwów. Wypełnij formularz i otrzymaj odszkodowanie w 2-4 tygodnie.
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Sprawdź swoją sprawę teraz
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm mt-6 opacity-75">
              ✓ Zero ryzyka ✓ Płatność tylko w przypadku sukcesu ✓ 95%+ skuteczności
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie</h2>
            
            <p className="text-gray-700 mb-6">
              Jeśli linia lotnicza nie odpowiada na reklamację, masz kilka opcji:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>Wyślij przypomnienie</strong> po 30-45 dniach</li>
              <li><strong>Złóż skargę do ULC</strong> (darmowe, ale niska skuteczność)</li>
              <li><strong>Rozważ mediację</strong> (niewiążąca, wymaga zgody linii)</li>
              <li><strong>Wnieś pozew do sądu</strong> (skuteczne, ale długo i drogo)</li>
              <li><strong>Skorzystaj z ClaimWinger</strong> (najszybsze, najskuteczniejsze, zero ryzyka)</li>
            </ul>

            <div className="bg-green-50 rounded-xl p-6">
              <p className="text-green-900 mb-0">
                💡 <strong>Rekomendacja:</strong> Zamiast tracić miesiące na walkę z linią, od razu 
                skorzystaj z ClaimWinger. W 2-4 tygodnie otrzymasz pieniądze na konto, bez stresu 
                i formalności.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <FileText className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak złożyć wniosek o odszkodowanie</span>
              </Link>
              <Link href="/blog/najczestsze-bledy-reklamacja" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Najczęstsze błędy przy reklamacji</span>
              </Link>
              <Link href="/blog/przedawnienie-roszczen-lotniczych" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Przedawnienie roszczeń lotniczych</span>
              </Link>
              <Link href="/blog/jak-dlugo-czeka-odszkodowanie-za-lot" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak długo czeka się na odszkodowanie</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}