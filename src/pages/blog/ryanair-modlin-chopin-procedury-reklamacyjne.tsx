import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Building2, Plane, AlertTriangle, CheckCircle, Info, MapPin } from "lucide-react";

export default function RyanairModlinChopinProceduryReklamacyjne() {
  return (
    <Layout>
      <SEO
        title="Ryanair Modlin vs Chopin — różnice w procedurach reklamacyjnych"
        description="Czy lotnisko startowe wpływa na odszkodowanie Ryanair? Porównanie procedur Modlin vs Chopin przy opóźnieniach i odwołaniach lotów."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">Ryanair Modlin vs Chopin</li>
            </ol>
          </nav>

          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Porównanie Lotnisk
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ryanair Modlin vs Chopin — różnice w procedurach reklamacyjnych
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Czy lotnisko startowe wpływa na Twoje prawa do odszkodowania? Porównanie procedur przy opóźnieniach i odwołaniach
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Czas czytania: 8 min</span>
              <span>•</span>
              <span>Aktualizacja: 10.03.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Info className="h-6 w-6" />
              Szybka odpowiedź: Czy lotnisko ma znaczenie?
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-xl mb-3">NIE — Twoje prawa są identyczne!</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong>EU 261/2004 obowiązuje jednakowo</strong> na wszystkich polskich lotniskach</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong>Kwoty odszkodowania są takie same</strong> (250-600 €) bez względu na lotnisko</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong>Procedura reklamacyjna identyczna</strong> — wysyłasz to samo zgłoszenie do Ryanair</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-500 bg-opacity-20 backdrop-blur-sm border-2 border-amber-300 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Jednak są różnice w praktyce!
              </h3>
              <p className="text-sm mb-3">
                Chociaż <strong>prawa pasażera są identyczne</strong>, w praktyce istnieją różnice w:
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">→</span>
                  <span><strong>Częstotliwości opóźnień</strong> (Modlin ma więcej problemów)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">→</span>
                  <span><strong>Infrastrukturze lotniska</strong> (Chopin lepiej wyposażony)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">→</span>
                  <span><strong>Obsłudze naziemnej</strong> (różne standardy)</span>
                </li>
              </ul>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Porównanie: Modlin vs Chopin</h2>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Aspekt</th>
                    <th className="px-6 py-4 text-left font-bold">Modlin (WMI)</th>
                    <th className="px-6 py-4 text-left font-bold">Chopin (WAW)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Prawa pasażera</td>
                    <td className="px-6 py-4 text-gray-700">✅ EU 261/2004</td>
                    <td className="px-6 py-4 text-gray-700">✅ EU 261/2004</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Kwoty odszkodowania</td>
                    <td className="px-6 py-4 text-gray-700">250-600 €</td>
                    <td className="px-6 py-4 text-gray-700">250-600 €</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Procedura reklamacji</td>
                    <td className="px-6 py-4 text-gray-700">Identyczna</td>
                    <td className="px-6 py-4 text-gray-700">Identyczna</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Częstotliwość opóźnień</td>
                    <td className="px-6 py-4 text-red-700 font-bold">⚠️ Wyższa (18-22%)</td>
                    <td className="px-6 py-4 text-green-700">Niższa (12-15%)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Infrastruktura</td>
                    <td className="px-6 py-4 text-gray-700">Podstawowa</td>
                    <td className="px-6 py-4 text-gray-700">Pełna (hub)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Alternatywne loty</td>
                    <td className="px-6 py-4 text-gray-700">Ograniczone (tylko Ryanair)</td>
                    <td className="px-6 py-4 text-gray-700">Wiele opcji (różne linie)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Obsługa reklamacji</td>
                    <td className="px-6 py-4 text-gray-700">Ryanair Customer Service</td>
                    <td className="px-6 py-4 text-gray-700">Ryanair Customer Service</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Punktualność Ryanair</td>
                    <td className="px-6 py-4 text-red-700">78-82% (gorsza)</td>
                    <td className="px-6 py-4 text-green-700">85-88% (lepsza)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">📊 Statystyki opóźnień Ryanair 2024-2025:</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>Modlin (WMI):</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Średnie opóźnienie: <strong>42 minuty</strong></li>
                  <li>• Opóźnienia &gt;3h: <strong>8,2%</strong> lotów</li>
                  <li>• Odwołania: <strong>2,1%</strong> lotów</li>
                </ul>

                <p className="mt-4"><strong>Chopin (WAW):</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Średnie opóźnienie: <strong>28 minuty</strong></li>
                  <li>• Opóźnienia &gt;3h: <strong>4,6%</strong> lotów</li>
                  <li>• Odwołania: <strong>1,3%</strong> lotów</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dlaczego Modlin ma więcej opóźnień?</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-red-500 rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Problemy Modlina
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Słaba infrastruktura</strong> — brak rezerw w przypadku problemów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Tight scheduling</strong> — Ryanair planuje loty zbyt ciasno</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Brak alternatyw</strong> — prawie wyłącznie Ryanair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span><strong>Odległość od Warszawy</strong> — trudniejsza logistyka</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-green-500 rounded-xl p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  Zalety Chopina
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Pełna infrastruktura</strong> — rezerwy i backupy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Wiele linii</strong> — łatwiej znaleźć alternatywę</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Lepsza organizacja</strong> — doświadczony hub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Więcej slotów</strong> — większa elastyczność</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak złożyć reklamację — procedura identyczna!</h3>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Ważne:</strong> Niezależnie czy Twój lot wyleciał z Modlina czy Chopina, <strong>procedura reklamacyjna jest absolutnie identyczna</strong>. Wysyłasz to samo zgłoszenie do tego samego działu Ryanair Customer Service.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Zbierz dokumenty</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Potwierdzenie rezerwacji (booking confirmation)</li>
                      <li>• Boarding pass (karta pokładowa)</li>
                      <li>• Zdjęcia tablicy informacyjnej (delay reason)</li>
                      <li>• Email/SMS od Ryanair o opóźnieniu/odwołaniu</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Wypełnij formularz reklamacyjny</h4>
                    <p className="text-gray-700 mb-2">
                      Wejdź na: <a href="https://www.ryanair.com/pl/pl/formularz-reklamacji-eu261" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">ryanair.com/pl/pl/formularz-reklamacji-eu261</a>
                    </p>
                    <p className="text-sm text-gray-600">
                      Procedura jest identyczna dla Modlina i Chopina — nie musisz niczego zmieniać w zależności od lotniska.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Poczekaj na odpowiedź (30-90 dni)</h4>
                    <p className="text-gray-700 text-sm">
                      Ryanair ma obowiązek odpowiedzieć w ciągu 30 dni, ale w praktyce często czeka się 60-90 dni. Jeśli odmówią wypłaty, możesz:
                    </p>
                    <ul className="mt-2 space-y-1 text-gray-700 text-sm">
                      <li>• Złożyć skargę do ULC (Urząd Lotnictwa Cywilnego)</li>
                      <li>• Skorzystać z firmy odszkodowawczej (np. ClaimWinger)</li>
                      <li>• Pozwać Ryanair w europejskim postępowaniu uproszczonym</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Czy warto lecieć z Modlina czy Chopina?</h3>

            <div className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow-sm mb-8">
              <h4 className="font-bold text-lg text-gray-900 mb-3">💡 Praktyczne porady:</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <span><strong>Wybierz Chopina</strong> jeśli lot jest ważny (służbowy, przesiadka, połączenie międzynarodowe) — lepsza punktualność i więcej alternatyw w razie problemów.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <span><strong>Modlin może być OK</strong> dla prostych, krótkich lotów weekendowych gdzie masz bufor czasowy i opóźnienie nie jest tragedią.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <span><strong>ZAWSZE sprawdź historię trasy</strong> przed zakupem — niektóre kierunki z Modlina mają katastrofalną punktualność (np. Londyn Stansted, Dublin).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-lg">→</span>
                  <span><strong>Prawa pasażera są identyczne</strong> — jeśli dojdzie do opóźnienia/odwołania, dostaniesz to samo odszkodowanie bez względu na lotnisko.</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy dostanę mniej odszkodowania jeśli lot był z Modlina?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE.</strong> Kwota odszkodowania zależy <strong>wyłącznie od dystansu lotu</strong>, a nie od lotniska wylotu. Lot Modlin-Londyn (1500 km) daje takie samo odszkodowanie 250 € jak Chopin-Londyn. Lotnisko nie ma żadnego wpływu na wysokość kompensaty.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy procedura reklamacyjna różni się dla Modlina i Chopina?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE — procedura jest absolutnie identyczna.</strong> Niezależnie z jakiego lotniska leciałeś, wysyłasz to samo zgłoszenie przez formularz Ryanair EU261. Dział obsługi reklamacji jest ten sam dla wszystkich polskich lotnisk. Nie musisz niczego zmieniać w zależności od miejsca startu.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Dlaczego loty z Modlina są częściej opóźnione?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Główne powody:</strong><br />
                  • <strong>Słabsza infrastruktura</strong> — Modlin to mniejsze lotnisko z mniejszymi rezerwami w przypadku problemów<br />
                  • <strong>Tight scheduling</strong> — Ryanair planuje loty bardzo ciasno, bez bufora czasowego<br />
                  • <strong>Brak alternatyw</strong> — jeśli coś idzie nie tak, trudniej znaleźć zastępcze rozwiązanie (prawie wyłącznie Ryanair)<br />
                  • <strong>Odległość od Warszawy</strong> — logistyka personelu i obsługi naziemnej jest trudniejsza
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy Ryanair szybciej odpowie na reklamację z Chopina?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE.</strong> Dział Customer Service Ryanair jest wspólny dla wszystkich lotnisk. Czas odpowiedzi (30-90 dni) jest taki sam bez względu na to, czy lot wyleciał z Modlina, Chopina, czy innego polskiego lotniska. Lotnisko nie wpływa na kolejkę reklamacyjną.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Co zrobić gdy lot z Modlina jest opóźniony a ja muszę zdążyć na połączenie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Na lotnisku:</strong><br />
                  1. Natychmiast zgłoś się do desk Ryanair i poproś o przekierowanie na najszybszy dostępny lot<br />
                  2. Jeśli Ryanair odmówi lub nie ma dostępnych lotów, <strong>Ty sam możesz kupić bilet u innej linii</strong> (Ryanair musi później zwrócić Ci koszty + wypłacić odszkodowanie)<br />
                  3. Zachowaj wszystkie dokumenty: boarding passes, paragony, zdjęcia tablicy informacyjnej<br /><br />
                  <strong>Problem:</strong> Modlin ma ograniczoną liczbę połączeń (głównie Ryanair), więc znalezienie alternatywy jest trudniejsze niż na Chopinie.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy warto skorzystać z ClaimWinger przy problemach z lotem z Modlina?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>TAK, szczególnie dla lotów z Modlina!</strong> Ponieważ loty z Modlina są częściej opóźnione, Ryanair ma więcej praktyki w odmawianiu wypłat i wymyślaniu wymówek. ClaimWinger zna wszystkie kruczki Ryanair i skutecznie wymusza odszkodowania — także przy trudnych przypadkach z Modlina. <strong>Płacisz tylko po wygranej</strong> (25% + VAT), zero ryzyka finansowego.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Problem z lotem Ryanair z Modlina lub Chopina?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger zajmie się Twoją sprawą — bez względu z którego lotniska leciałeś. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Sprawdź swoje odszkodowanie
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="https://claimwinger.com/pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors"
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
                  3 skuteczne metody wymuszenia wypłaty odszkodowania od Ryanair.
                </p>
              </Link>

              <Link href="/blog/lotnisko-modlin-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Lotnisko Modlin — prawa pasażera i odszkodowania
                </h3>
                <p className="text-gray-600 text-sm">
                  Kompletny przewodnik po prawach pasażera na lotnisku Modlin.
                </p>
              </Link>

              <Link href="/blog/ryanair-opoznienie-najgorsze-trasy-polska" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair — najgorsze trasy z Polski 2026
                </h3>
                <p className="text-gray-600 text-sm">
                  Sprawdź które kierunki Ryanair są najbardziej problematyczne.
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
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
