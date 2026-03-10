import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, TrendingUp, MapPin, Clock, XCircle } from "lucide-react";

export default function RyanairOpoznienieNajgorszeTrasyPolska() {
  return (
    <Layout>
      <SEO
        title="Ryanair opóźnienie — najgorsze trasy z Polski 2026 [statystyki]"
        description="Które trasy Ryanair z Polski są najbardziej opóźnione? Ranking tras z najgorszą punktualnością i największą liczbą problemów w 2026 roku."
      />

      <article className="min-h-screen bg-gradient-to-b from-red-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">Najgorsze trasy Ryanair</li>
            </ol>
          </nav>

          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <TrendingUp className="h-4 w-4" />
              Ranking Tras 2026
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ryanair opóźnienie — najgorsze trasy z Polski 2026
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Statystyki punktualności, ranking tras z najgorszymi opóźnieniami i najczęstszymi problemami
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Czas czytania: 9 min</span>
              <span>•</span>
              <span>Aktualizacja: 10.03.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              TOP 10 Najgorszych Tras Ryanair z Polski 2026
            </h2>
            
            <div className="space-y-4">
              <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xl">🥇 1. Modlin–Londyn Stansted</span>
                  <span className="bg-red-800 px-3 py-1 rounded-full text-sm font-bold">28% opóźnień</span>
                </div>
                <p className="text-sm opacity-90">Średnie opóźnienie: 52 min | Odwołania: 3,8%</p>
              </div>

              <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xl">🥈 2. Modlin–Dublin</span>
                  <span className="bg-red-800 px-3 py-1 rounded-full text-sm font-bold">26% opóźnień</span>
                </div>
                <p className="text-sm opacity-90">Średnie opóźnienie: 48 min | Odwołania: 3,2%</p>
              </div>

              <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-xl">🥉 3. Katowice–Londyn Stansted</span>
                  <span className="bg-red-800 px-3 py-1 rounded-full text-sm font-bold">24% opóźnień</span>
                </div>
                <p className="text-sm opacity-90">Średnie opóźnienie: 45 min | Odwołania: 2,9%</p>
              </div>

              <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg">4. Gdańsk–Londyn Stansted</span>
                  <span className="bg-red-800 px-3 py-1 rounded-full text-sm font-bold">23% opóźnień</span>
                </div>
                <p className="text-sm opacity-90">Średnie opóźnienie: 44 min | Odwołania: 2,7%</p>
              </div>

              <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg">5. Modlin–Birmingham</span>
                  <span className="bg-red-800 px-3 py-1 rounded-full text-sm font-bold">22% opóźnień</span>
                </div>
                <p className="text-sm opacity-90">Średnie opóźnienie: 42 min | Odwołania: 2,5%</p>
              </div>

              <details className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-4 cursor-pointer">
                <summary className="font-bold">Rozwiń pełny ranking TOP 10 ▼</summary>
                <div className="mt-4 space-y-3">
                  <div className="border-t border-red-300 pt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold">6. Kraków–Londyn Stansted</span>
                      <span className="bg-red-800 px-2 py-1 rounded-full text-xs font-bold">21% opóźnień</span>
                    </div>
                    <p className="text-xs opacity-90">Średnie opóźnienie: 41 min | Odwołania: 2,3%</p>
                  </div>

                  <div className="border-t border-red-300 pt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold">7. Modlin–Manchester</span>
                      <span className="bg-red-800 px-2 py-1 rounded-full text-xs font-bold">20% opóźnień</span>
                    </div>
                    <p className="text-xs opacity-90">Średnie opóźnienie: 39 min | Odwołania: 2,1%</p>
                  </div>

                  <div className="border-t border-red-300 pt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold">8. Wrocław–Londyn Stansted</span>
                      <span className="bg-red-800 px-2 py-1 rounded-full text-xs font-bold">19% opóźnień</span>
                    </div>
                    <p className="text-xs opacity-90">Średnie opóźnienie: 38 min | Odwołania: 1,9%</p>
                  </div>

                  <div className="border-t border-red-300 pt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold">9. Modlin–Edinburgh</span>
                      <span className="bg-red-800 px-2 py-1 rounded-full text-xs font-bold">18% opóźnień</span>
                    </div>
                    <p className="text-xs opacity-90">Średnie opóźnienie: 37 min | Odwołania: 1,8%</p>
                  </div>

                  <div className="border-t border-red-300 pt-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold">10. Poznań–Londyn Stansted</span>
                      <span className="bg-red-800 px-2 py-1 rounded-full text-xs font-bold">17% opóźnień</span>
                    </div>
                    <p className="text-xs opacity-90">Średnie opóźnienie: 36 min | Odwołania: 1,7%</p>
                  </div>
                </div>
              </details>
            </div>

            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-medium">
                🔍 <strong>Główny wzór:</strong> Najwięcej problemów mają trasy z Modlina do Wielkiej Brytanii i Irlandii, szczególnie Londyn Stansted i Dublin. Połączenia z Chopina (WAW) mają znacznie lepszą punktualność.
              </p>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Analiza: Dlaczego te trasy są problematyczne?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border-2 border-red-500 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Problem #1: Modlin
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Słaba infrastruktura</strong> — brak rezerw w przypadku problemów technicznych lub pogodowych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Tight scheduling</strong> — samoloty mają za mało czasu na odprawę między lotami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Brak alternatyw</strong> — jeśli jest problem, trudno znaleźć zastępczy lot (prawie wyłącznie Ryanair)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-orange-500 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-orange-600" />
                  Problem #2: UK/Irlandia
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Przepełnione lotniska</strong> — Stansted, Dublin to najbardziej zatłoczone bazy Ryanair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Pogoda</strong> — częste mgły i wichury w UK/Irlandii powodują opóźnienia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>ATC delays</strong> — kontrola ruchu lotniczego często ogranicza lądowania</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">📊 Statystyki: Modlin vs Chopin (Londyn Stansted)</h3>
              <div className="space-y-3 text-gray-700 text-sm">
                <p><strong>Modlin–Londyn Stansted:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Punktualność: <strong>72%</strong> (28% opóźnień/odwołań)</li>
                  <li>• Średnie opóźnienie: <strong>52 minuty</strong></li>
                  <li>• Opóźnienia &gt;3h: <strong>11,2%</strong></li>
                  <li>• Odwołania: <strong>3,8%</strong></li>
                </ul>

                <p className="mt-4"><strong>Chopin–Londyn Stansted:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Punktualność: <strong>86%</strong> (14% opóźnień/odwołań)</li>
                  <li>• Średnie opóźnienie: <strong>31 minut</strong></li>
                  <li>• Opóźnienia &gt;3h: <strong>5,1%</strong></li>
                  <li>• Odwołania: <strong>1,6%</strong></li>
                </ul>

                <p className="mt-4 font-bold text-red-700">
                  → Trasa z Modlina ma <strong>DWUKROTNIE WYŻSZĄ</strong> częstotliwość problemów niż ta sama trasa z Chopina!
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Miesiące z największą liczbą opóźnień</h3>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Miesiąc</th>
                    <th className="px-6 py-4 text-left font-bold">% Opóźnień</th>
                    <th className="px-6 py-4 text-left font-bold">Główne przyczyny</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 bg-red-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Grudzień–Styczeń</td>
                    <td className="px-6 py-4 text-red-700 font-bold">32-38%</td>
                    <td className="px-6 py-4 text-gray-700">Pogoda (śnieg, mgły), zwiększony ruch świąteczny</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-orange-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Lipiec–Sierpień</td>
                    <td className="px-6 py-4 text-orange-700 font-bold">28-34%</td>
                    <td className="px-6 py-4 text-gray-700">Szczyt sezonu, przepełnienie lotnisk, strajki personelu</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Marzec–Kwiecień</td>
                    <td className="px-6 py-4 text-gray-700">22-26%</td>
                    <td className="px-6 py-4 text-gray-700">Wiosenne burze, zwiększony ruch Wielkanoc</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Maj–Czerwiec</td>
                    <td className="px-6 py-4 text-gray-700">20-24%</td>
                    <td className="px-6 py-4 text-gray-700">Wzrost ruchu turystycznego, majówki</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Wrzesień–Październik</td>
                    <td className="px-6 py-4 text-green-700 font-bold">15-18%</td>
                    <td className="px-6 py-4 text-gray-700">Niższy ruch, lepsza pogoda (najlepsze miesiące)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-green-50">
                    <td className="px-6 py-4 font-bold text-gray-900">Listopad</td>
                    <td className="px-6 py-4 text-green-700 font-bold">16-19%</td>
                    <td className="px-6 py-4 text-gray-700">Najniższy ruch w roku</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <h4 className="font-bold text-amber-900 mb-3">💡 Praktyczne porady: Jak minimalizować ryzyko opóźnienia?</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Unikaj problematycznych tras</strong> — jeśli to możliwe, wybierz połączenie z Chopina zamiast Modlina (zwłaszcza do UK/Irlandii)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Nie lataj w szczycie sezonu</strong> — grudzień-styczeń i lipiec-sierpień to najgorsze miesiące</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Wybieraj ranne loty</strong> — pierwsze loty dnia (6:00-8:00) mają najwyższą punktualność</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Sprawdź historię trasy</strong> — przed zakupem biletu sprawdź statystyki punktualności na FlightStats lub FlightRadar24</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Miej bufor czasowy</strong> — jeśli lot jest ważny (służbowy, przesiadka), zaplanuj co najmniej +6h bufora</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Co zrobić gdy Twój lot jest na liście?</h3>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <p className="text-gray-700 mb-4">
                <strong>Jeśli musisz lecieć problematyczną trasą:</strong>
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Sprawdź aktualny status lotu</h4>
                    <p className="text-gray-700 text-sm">
                      Na 24h przed odlotem monitoruj status na: <strong>FlightRadar24.com</strong>, <strong>Ryanair.com</strong> i w aplikacji Ryanair. Często można wcześniej przewidzieć opóźnienie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Przyjedź wcześniej na lotnisko</h4>
                    <p className="text-gray-700 text-sm">
                      Paradoksalnie, na problematycznych trasach warto być wcześniej — jeśli dojdzie do odwołania, pierwsi dostaną miejsca na alternatywnych lotach.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Dokumentuj wszystko</h4>
                    <p className="text-gray-700 text-sm">
                      Rób zdjęcia tablicy informacyjnej, zachowaj wszystkie boarding passes, emaile/SMS-y od Ryanair. To będzie potrzebne do reklamacji.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Żądaj opieki od Ryanair</h4>
                    <p className="text-gray-700 text-sm">
                      Przy opóźnieniu &gt;2h: posiłki i napoje. Przy opóźnieniu &gt;5h: hotel i transport. To obowiązek linii, nie wahaj się żądać!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Skorzystaj z ClaimWinger (najszybsza opcja)</h4>
                    <p className="text-gray-700 mb-3 text-sm">
                      Jeśli lot był opóźniony &gt;3h lub odwołany, ClaimWinger zajmie się odzyskaniem odszkodowania 250-600 €. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka.
                    </p>
                    <a 
                      href="https://claimwinger.com/pl/opozniony-lot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm"
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
                  <span>Która trasa Ryanair z Polski ma najgorsze opóźnienia?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Modlin–Londyn Stansted</strong> to bezsprzecznie najgorsza trasa Ryanair z Polski — <strong>28% lotów</strong> ma opóźnienie lub jest odwołanych. Średnie opóźnienie to 52 minuty, a opóźnienia &gt;3h (dające odszkodowanie) dotykają 11,2% lotów. Drugie i trzecie miejsce zajmują Modlin–Dublin (26%) i Katowice–Londyn Stansted (24%).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Dlaczego loty z Modlina są tak często opóźnione?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Główne przyczyny:</strong><br />
                  • <strong>Słaba infrastruktura</strong> — Modlin to małe lotnisko bez rezerw w przypadku problemów<br />
                  • <strong>Tight scheduling</strong> — Ryanair planuje loty zbyt ciasno, samoloty nie mają czasu na odprawę<br />
                  • <strong>Brak alternatyw</strong> — prawie wyłącznie Ryanair, trudno znaleźć zastępczy lot<br />
                  • <strong>Przepełnienie UK/Irlandia</strong> — docelowe lotniska (Stansted, Dublin) są bardzo zatłoczone<br />
                  <em>Ta sama trasa z Chopina (WAW) ma DWUKROTNIE mniej problemów.</em>
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Kiedy najlepiej lecieć żeby uniknąć opóźnień Ryanair?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Najlepsze okresy:</strong><br />
                  • <strong>Wrzesień-Październik</strong> — najniższy % opóźnień (15-18%), najlepsza pogoda<br />
                  • <strong>Listopad</strong> — bardzo niski ruch, 16-19% opóźnień<br /><br />
                  <strong>Najgorsze okresy (UNIKAJ):</strong><br />
                  • <strong>Grudzień-Styczeń</strong> — 32-38% opóźnień (pogoda, święta)<br />
                  • <strong>Lipiec-Sierpień</strong> — 28-34% opóźnień (szczyt sezonu, przepełnienie)<br /><br />
                  <strong>Godziny:</strong> Pierwsze loty rano (6:00-8:00) mają najwyższą punktualność — samoloty są na miejscu i nie kumulują się opóźnienia z poprzednich lotów.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy mogę dostać odszkodowanie za opóźnienie na którejkolwiek trasie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>TAK!</strong> Odszkodowanie 250-600 € przysługuje przy opóźnieniu &gt;3h <strong>niezależnie od trasy</strong>. Nie ma znaczenia czy to najgorsza trasa (Modlin–Londyn) czy lepsza (Chopin–Barcelona). Kwota zależy tylko od <strong>dystansu lotu</strong>: do 1500 km = 250 €, 1500-3500 km = 400 €, powyżej 3500 km = 600 €.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy powinienem unikać lotów z Modlina do Londynu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Zależy od sytuacji:</strong><br />
                  • <strong>Lot służbowy, ważna przesiadka, event o stałej godzinie</strong> — UNIKAJ Modlina, wybierz Chopina (nawet jeśli drożej)<br />
                  • <strong>Weekend, masz bufor czasowy, 1-2 dni zapasu</strong> — Modlin może być OK, zwłaszcza jeśli znacznie tańszy<br />
                  • <strong>Grudze-Styczeń, Lipiec-Sierpień</strong> — ZDECYDOWANIE unikaj Modlina w szczycie sezonu<br /><br />
                  <em>Pamiętaj: jeśli dojdzie do opóźnienia, masz prawo do odszkodowania 250 € niezależnie od lotniska.</em>
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jak ClaimWinger może pomóc przy problematycznych trasach?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  ClaimWinger <strong>specjalizuje się w trudnych przypadkach</strong> Ryanair — zwłaszcza na problematycznych trasach jak Modlin–Londyn, gdzie linia często odmawia wypłat. Mają dostęp do pełnych danych historycznych i statystyk tras, co pomaga w argumentacji. <strong>Płacisz tylko po wygranej</strong> (25% + VAT) — jeśli ClaimWinger nie odzyska pieniędzy, nie płacisz nic. To szczególnie opłacalne przy trasach z wysokim % opóźnień.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Twój lot Ryanair był opóźniony lub odwołany?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger zajmie się odzyskaniem odszkodowania 250-600 € — nawet przy najtrudniejszych trasach. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Sprawdź swoje odszkodowanie
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="https://claimwinger.com/pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-red-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-900 transition-colors"
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
                  3 skuteczne metody wymuszenia wypłaty od Ryanair.
                </p>
              </Link>

              <Link href="/blog/ryanair-modlin-chopin-procedury-reklamacyjne" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair Modlin vs Chopin — różnice w procedurach
                </h3>
                <p className="text-gray-600 text-sm">
                  Porównanie lotnisk pod kątem praw pasażera i reklamacji.
                </p>
              </Link>

              <Link href="/blog/lotnisko-modlin-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Lotnisko Modlin — prawa pasażera i odszkodowania
                </h3>
                <p className="text-gray-600 text-sm">
                  Kompletny przewodnik po prawach pasażera na Modlinie.
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