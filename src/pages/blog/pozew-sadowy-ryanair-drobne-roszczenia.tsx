import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Scale, FileText, CheckCircle, AlertTriangle, Euro, Clock } from "lucide-react";

export default function PozewSadowyRyanairDrobneRoszczenia() {
  return (
    <Layout>
      <SEO
        title="Pozew sądowy Ryanair — europejskie postępowanie drobne roszczenia"
        description="Jak pozwać Ryanair przez europejskie postępowanie w sprawie drobnych roszczeń? Przewodnik krok po kroku, koszty, terminy i skuteczność."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">Pozew sądowy Ryanair</li>
            </ol>
          </nav>

          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Scale className="h-4 w-4" />
              Prawo Lotnicze
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Pozew sądowy Ryanair — europejskie postępowanie w sprawie drobnych roszczeń
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Jak pozwać Ryanair przez uproszczone postępowanie UE? Koszty, terminy i skuteczność
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Czas czytania: 11 min
              </span>
              <span>•</span>
              <span>Aktualizacja: 10.03.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              Szybka odpowiedź: Czy warto pozwać Ryanair samemu?
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-xl mb-3">TAK, ale to czasochłonne (6-12 miesięcy)</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong>Europejskie postępowanie uproszczone</strong> — możesz pozwać bez adwokata</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong>Niskie koszty</strong> — opłata sądowa 30-100 € (zwracana przy wygranej)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-300 mt-0.5 flex-shrink-0" />
                  <span><strong>Wysokie szanse wygranej</strong> — jeśli masz dokumentację i prawo jest jasne</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-500 bg-opacity-20 backdrop-blur-sm border-2 border-amber-300 rounded-xl p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Ale to zajmuje dużo czasu!
              </h3>
              <p className="text-sm mb-3">
                <strong>Alternatywa:</strong> Firma odszkodowawcza jak ClaimWinger zajmie się wszystkim za Ciebie — <strong>płacisz tylko po wygranej</strong> (25% + VAT). Oszczędzasz czas i nerwy.
              </p>
              <a 
                href="https://claimwinger.com/pl" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
              >
                Sprawdź ClaimWinger (bez ryzyka)
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Czym jest europejskie postępowanie w sprawie drobnych roszczeń?</h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">📋 Definicja:</h3>
              <p className="text-gray-700 mb-3">
                <strong>Europejskie postępowanie w sprawie drobnych roszczeń</strong> (ang. <em>European Small Claims Procedure</em>, ESCP) to <strong>uproszczona procedura sądowa</strong> dla roszczeń do 5000 € w sporach transgranicznych w UE.
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Najważniejsze cechy:</strong>
              </p>
              <ul className="space-y-1 text-gray-700 text-sm mt-2">
                <li>• <strong>Bez adwokata</strong> — możesz działać samodzielnie</li>
                <li>• <strong>Niskie koszty</strong> — opłata sądowa 30-100 €</li>
                <li>• <strong>Procedura pisemna</strong> — nie musisz uczestniczyć w rozprawie</li>
                <li>• <strong>Szybka</strong> — teoretycznie 6 miesięcy, praktycznie 6-12 miesięcy</li>
                <li>• <strong>Wyrok wykonalny w całej UE</strong> — możesz egzekwować go w kraju pozwanego</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Krok po kroku: Jak pozwać Ryanair?</h3>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Zbierz dokumentację (KRYTYCZNE!)</h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      <strong>Musisz mieć:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Potwierdzenie rezerwacji (booking confirmation)</li>
                      <li>• Boarding pass (karta pokładowa)</li>
                      <li>• Dowód opóźnienia/odwołania (zdjęcia tablicy, email/SMS od Ryanair)</li>
                      <li>• Korespondencja z Ryanair (Twoja reklamacja + odmowa wypłaty)</li>
                      <li>• Rachunki za dodatkowe koszty (hotel, transport) jeśli były</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Wypełnij formularz A (European Small Claims Procedure)</h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      Pobierz formularz A z portalu e-Justice UE: <a href="https://e-justice.europa.eu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">e-justice.europa.eu</a>
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Co wypełnić:</strong>
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• <strong>Strona A:</strong> Twoje dane (imię, nazwisko, adres w Polsce)</li>
                      <li>• <strong>Strona B:</strong> Dane Ryanair (Ryanair DAC, Airside Business Park, Swords, Co. Dublin, K67 NY94, Irlandia)</li>
                      <li>• <strong>Strona C:</strong> Kwota roszczenia (250-600 € + ewentualne dodatkowe koszty)</li>
                      <li>• <strong>Strona D:</strong> Opis sprawy (opóźnienie/odwołanie lotu, data, numer lotu, podstawa prawna EU 261/2004)</li>
                      <li>• <strong>Strona E:</strong> Załączniki (boarding pass, potwierdzenie rezerwacji, korespondencja)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Wybierz właściwy sąd</h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      <strong>Masz 2 opcje:</strong>
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>Sąd w Polsce</strong> (łatwiejsze — Sąd Rejonowy właściwy dla Twojego miejsca zamieszkania)</li>
                      <li>• <strong>Sąd w Irlandii</strong> (trudniejsze — District Court w Dublinie, ale czasem skuteczniejsze)</li>
                    </ul>
                    <p className="text-gray-700 text-sm mt-2">
                      <em>Zalecam: złóż pozew w Polsce — wygodniej i taniej (koszty dojazdów, język).</em>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Złóż pozew i zapłać opłatę sądową</h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      Wyślij formularz A + załączniki do wybranego sądu. Opłata sądowa w Polsce: <strong>~30-50 € (130-220 PLN)</strong>.
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Ważne:</strong> Przy wygranej Ryanair zwraca Ci opłatę sądową!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Sąd doręcza pozew Ryanair (30 dni)</h4>
                    <p className="text-gray-700 text-sm">
                      Ryanair ma 30 dni na odpowiedź (formularz C). Często nie odpowiada lub powtarza swoje standardowe wymówki.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Sąd wydaje wyrok (90-180 dni)</h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      Sąd rozpatruje sprawę na podstawie dokumentów — <strong>nie ma rozprawy</strong> (chyba że sąd o nią poprosi).
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Jeśli wygrasz:</strong> Otrzymasz wyrok + europejski certyfikat wykonalności (European Enforcement Order).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">7</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Egzekucja wyroku (30 dni — 6 miesięcy)</h4>
                    <p className="text-gray-700 mb-2 text-sm">
                      <strong>Ryanair ma 30 dni na dobrowolną wypłatę.</strong> Jeśli odmówi:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Przekaż wyrok komornikowi w Polsce lub Irlandii</li>
                      <li>• Komornik zajmuje konto Ryanair lub środki z przyszłych rezerwacji</li>
                      <li>• Koszty egzekucji pokrywa Ryanair</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Koszty pozwu sądowego vs firma odszkodowawcza</h3>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Aspekt</th>
                    <th className="px-6 py-4 text-left font-bold">Pozew samodzielny</th>
                    <th className="px-6 py-4 text-left font-bold">ClaimWinger</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Opłata początkowa</td>
                    <td className="px-6 py-4 text-gray-700">30-100 € (opłata sądowa)</td>
                    <td className="px-6 py-4 text-green-700 font-bold">0 € (płacisz po wygranej)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Czas</td>
                    <td className="px-6 py-4 text-red-700">6-12 miesięcy (Twój czas)</td>
                    <td className="px-6 py-4 text-green-700">6-12 miesięcy (ClaimWinger zajmuje się wszystkim)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Prowizja</td>
                    <td className="px-6 py-4 text-gray-700">0% (ale koszty czasu)</td>
                    <td className="px-6 py-4 text-gray-700">25% + VAT (tylko przy wygranej)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Ryzyko finansowe</td>
                    <td className="px-6 py-4 text-red-700">Opłata sądowa (zwracana przy wygranej)</td>
                    <td className="px-6 py-4 text-green-700 font-bold">ZERO (płacisz tylko po wygranej)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Stres i nerwy</td>
                    <td className="px-6 py-4 text-red-700">Wysoki (musisz wszystko załatwić sam)</td>
                    <td className="px-6 py-4 text-green-700">Niski (zajmują się profesjonaliści)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Szanse wygranej</td>
                    <td className="px-6 py-4 text-gray-700">Wysokie (jeśli masz dokumentację)</td>
                    <td className="px-6 py-4 text-green-700 font-bold">Bardzo wysokie (ekspercka wiedza)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50">
                    <td className="px-6 py-4 font-semibold text-gray-900">Przykładowa wypłata (250 € odszkodowanie)</td>
                    <td className="px-6 py-4 text-gray-900 font-bold">~220 € (po zwrocie opłaty sądowej)</td>
                    <td className="px-6 py-4 text-gray-900 font-bold">~175 € (po prowizji ClaimWinger)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8">
              <h4 className="font-bold text-amber-900 mb-3">💡 Kiedy warto pozwać samemu?</h4>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Masz dużo czasu</strong> i lubisz załatwiać sprawy samodzielnie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Sprawa jest bardzo prosta</strong> — masz kompletną dokumentację, Ryanair nie kwestionuje faktów tylko odmawia wypłaty</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">→</span>
                  <span><strong>Chcesz zaoszczędzić 25% prowizji</strong> (ale pamiętaj o wartości Twojego czasu!)</span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm mt-4">
                <strong>Kiedy lepiej skorzystać z ClaimWinger?</strong>
              </p>
              <ul className="space-y-2 text-gray-700 text-sm mt-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span><strong>Nie masz czasu</strong> — chcesz żeby ktoś załatwił to za Ciebie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span><strong>Sprawa jest skomplikowana</strong> — brak dokumentacji, Ryanair wymyśla wymówki, trudne nadzwyczajne okoliczności</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">→</span>
                  <span><strong>Zero ryzyka finansowego</strong> — ClaimWinger płacisz tylko po wygranej, jeśli przegrasz nie tracisz nic</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak długo trwa sprawa sądowa?</h3>

            <div className="bg-white border-2 border-blue-500 rounded-xl p-6 shadow-sm mb-8">
              <h4 className="font-bold text-lg text-gray-900 mb-3">⏱️ Realistyczne terminy:</h4>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1-2 miesiące:</span>
                  <span>Przygotowanie pozwu, złożenie do sądu, doręczenie Ryanair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1 miesiąc:</span>
                  <span>Ryanair odpowiada (lub nie)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3-6 miesięcy:</span>
                  <span>Sąd rozpatruje sprawę i wydaje wyrok</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1 miesiąc:</span>
                  <span>Ryanair dobrowolnie płaci (rzadko) LUB...</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2-6 miesięcy:</span>
                  <span>Egzekucja komornicza</span>
                </li>
              </ul>
              <p className="text-gray-900 font-bold mt-4">
                <strong>RAZEM: 6-12 miesięcy</strong> od złożenia pozwu do otrzymania pieniędzy.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy mogę pozwać Ryanair bez adwokata?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>TAK!</strong> Europejskie postępowanie w sprawie drobnych roszczeń zostało stworzone właśnie po to, żeby pasażerowie mogli dochodzić swoich praw <strong>bez adwokata</strong>. Wystarczy wypełnić formularz A (dostępny po polsku) i załączyć dokumentację. Sąd pomoże Ci w procesie.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ile kosztuje pozew sądowy przeciwko Ryanair?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Opłata sądowa w Polsce: ~30-50 € (130-220 PLN).</strong> To jedyny obowiązkowy koszt. <strong>Przy wygranej Ryanair zwraca Ci tę opłatę!</strong> Nie potrzebujesz adwokata (ale możesz wynająć jeśli chcesz — wtedy +500-1000 € koszty obsługi prawnej).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy mogę pozwać Ryanair w sądzie polskim czy muszę w irlandzkim?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Możesz w polskim!</strong> Według prawa UE możesz pozwać linię lotniczą w sądzie Twojego miejsca zamieszkania — jeśli mieszkasz w Polsce, możesz złożyć pozew do polskiego Sądu Rejonowego. To wygodniejsze i tańsze niż irlandzki District Court. Wyrok polskiego sądu jest wykonalny w całej UE, więc Ryanair będzie musiał zapłacić.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jak długo trwa sprawa sądowa z Ryanair?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Realistycznie: 6-12 miesięcy</strong> od złożenia pozwu do otrzymania pieniędzy. Teoretycznie europejskie postępowanie uproszczone ma trwać 6 miesięcy, ale w praktyce polskie sądy są obciążone i proces trwa dłużej. Jeśli Ryanair odmówi dobrowolnej wypłaty po wyroku, dodaj kolejne 2-6 miesięcy na egzekucję komorniczą.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Co jeśli przegram sprawę z Ryanair?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Jeśli przegrasz, <strong>stracisz tylko opłatę sądową</strong> (30-50 €). Ryanair <strong>nie może zażądać od Ciebie zwrotu swoich kosztów</strong> w europejskim postępowaniu uproszczonym — to jedna z jego zalet. Jednak przegrana jest rzadka jeśli masz pełną dokumentację i sprawa jest jasna (opóźnienie &gt;3h bez nadzwyczajnych okoliczności).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy ClaimWinger jest lepszy od samodzielnego pozwu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Zależy od Twojej sytuacji:</strong><br />
                  • <strong>ClaimWinger lepszy</strong> jeśli: nie masz czasu, sprawa jest skomplikowana, chcesz zero ryzyka (płacisz tylko po wygranej)<br />
                  • <strong>Pozew samodzielny lepszy</strong> jeśli: masz dużo czasu, sprawa jest prosta, chcesz zaoszczędzić 25% prowizji<br /><br />
                  <em>W praktyce większość osób wybiera ClaimWinger bo oszczędza czas i nerwy — oni zajmują się wszystkim od A do Z.</em>
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Nie masz czasu na sprawy sądowe?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger zajmie się wszystkim za Ciebie — od reklamacji po egzekucję komorniczą. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl" 
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
                  Dowiedz się więcej o ClaimWinger
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

              <Link href="/blog/linia-nie-odpowiada-na-reklamacje-co-robic" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Co zrobić gdy linia nie odpowiada na reklamację?
                </h3>
                <p className="text-gray-600 text-sm">
                  Praktyczne kroki gdy przewoźnik ignoruje Twoje zgłoszenie.
                </p>
              </Link>

              <Link href="/blog/claimwinger-airhelp-flightright-porownanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  ClaimWinger vs AirHelp vs Flightright — porównanie
                </h3>
                <p className="text-gray-600 text-sm">
                  Niezależne porównanie firm odszkodowawczych 2026.
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
