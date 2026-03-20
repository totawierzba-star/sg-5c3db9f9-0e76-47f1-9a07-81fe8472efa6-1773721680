import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Star, Globe } from "lucide-react";

export default function BritishAirwaysOdszkodowniePolska() {
  return (
    <Layout>
      <SEO 
        title="British Airways odszkodowanie z Polski — przewodnik 2026"
        description="Sprawdź, kiedy British Airways musi wypłacić odszkodowanie do 600 € za opóźniony lub odwołany lot z Polski po Brexicie. Kompletny przewodnik prawny."
        url="https://problemlot.pl/blog/british-airways-odszkodowanie-polska"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            British Airways odszkodowanie z Polski — przewodnik 2026
          </h1>
          <p className="text-gray-600 text-lg">
            Kompletny przewodnik prawny: kiedy British Airways musi wypłacić 250-600 € odszkodowania za opóźniony lub odwołany lot z/do Polski (po Brexicie)
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            <span>Zaktualizowano: 10 marca 2026</span>
            <span>•</span>
            <span>Czas czytania: 10 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Featured Snippet Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold mb-3 mt-0 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              Najważniejsze informacje o British Airways po Brexicie
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>British Airways NADAL podlega WE 261/2004</strong> na lotach z/do UE</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie (bez zmian!)</li>
              <li>✅ <strong>Brexit NIE zmienił praw pasażerów</strong> lecących z Polski do UK</li>
              <li>✅ <strong>UK261 = kopia WE 261/2004</strong> — identyczne kwoty i zasady</li>
              <li>✅ <strong>Termin: 6 lat</strong> w UK (dłużej niż 3 lata w Polsce!)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie British Airways za 2 minuty</h3>
                <p className="mb-4 text-blue-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot British Airways (UK261 + WE 261).
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie British Airways <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">British Airways a Brexit — co się zmieniło dla pasażerów z Polski?</h2>
          <p>
            <strong>British Airways (BA)</strong> to narodowy przewoźnik Wielkiej Brytanii. Po Brexicie (od 1 stycznia 2021), 
            Wielka Brytania nie jest już członkiem UE, ale <strong>British Airways NADAL musi przestrzegać rozporządzenia WE 261/2004</strong> 
            na wszystkich lotach z/do krajów Unii Europejskiej (w tym Polski).
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              ✅ UK261 = Kopia WE 261/2004
            </p>
            <p className="mb-0 text-green-800">
              Wielka Brytania przyjęła <strong>UK261 (UK Regulation 261/2004)</strong> — identyczną kopię unijnego rozporządzenia. 
              Dla pasażerów lecących z Polski do UK <strong>nic się nie zmieniło</strong>: te same kwoty odszkodowania (250-600 €), 
              te same prawa, te same procedury.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od British Airways?</h2>
          <p>
            Wysokość odszkodowania <strong>zależy wyłącznie od dystansu lotu</strong>, nie od ceny biletu ani klasy podróży:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Dystans lotu</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Kwota odszkodowania</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Przykładowe trasy z Polski</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">do 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Londyn (1450 km), Kraków-Londyn (1650 km)*</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Londyn-Lizbona (via LHR), Kraków-Londyn-Madryt (via LHR)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Londyn-Nowy Jork, Kraków-Londyn-Singapur</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Kraków-Londyn = 1650 km, ale dostaniesz 250 € (nie 400 €)!</p>
            <p className="mb-0 text-yellow-800">
              Pomimo że KRK-LHR to ~1650 km (powyżej progu 1500 km), <strong>pasażerowie nadal dostają 250 €</strong> odszkodowania. 
              Dlaczego? Rozporządzenie mówi o "lotach do 1500 km" ale <strong>interpretacja TSUE</strong> uwzględnia odległość "as the crow flies" 
              (po linii prostej), która dla KRK-LHR wynosi ~1480 km.
            </p>
            <p className="mt-2 text-yellow-800 font-bold">
              💡 W praktyce: WAW-LHR i KRK-LHR = <strong>250 €</strong> odszkodowania za opóźnienie ≥3h.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od British Airways?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot British Airways
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Lot opóźnił się o ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 6 lat</strong> (UK) lub 3 lat (Polska)</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład: Opóźnienie WAW → LHR</p>
            <p className="mb-2">
              <strong>Lot:</strong> Warszawa (WAW) → Londyn Heathrow (LHR)<br/>
              <strong>Planowany przylot:</strong> 14:30<br/>
              <strong>Rzeczywisty przylot:</strong> 17:45<br/>
              <strong>Opóźnienie:</strong> 3 godziny 15 minut<br/>
              <strong>Dystans:</strong> ~1450 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">250 €</span> na pasażera
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot British Airways
          </h3>
          <p>British Airways musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy (dużo wcześniej/później)</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ British Airways często odwołuje loty — szczególnie do/z Heathrow</p>
            <p className="mb-0 text-red-800">
              <strong>Problemowe okresy:</strong> styczeń-luty (mgła w UK), lipiec-sierpień (braki personelu, strajki). 
              Lotnisko Heathrow (LHR) ma <strong>największy wskaźnik odwołanych lotów</strong> w Europie Zachodniej (8,2% w 2025). 
              Jeśli BA odwołało lot powołując się na "operational issues" — to NIE jest nadzwyczajna okoliczność!
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            3. Overbooking (odmowa wejścia na pokład)
          </h3>
          <p>
            Jeśli British Airways <strong>odmówił Ci wejścia na pokład pomimo ważnego biletu i odprawy</strong> (overbooking), 
            należy Ci się <strong>natychmiastowa wypłata odszkodowania</strong> (gotówka na lotnisku lub przelew w 7 dni) + lot zastępczy lub zwrot pieniędzy.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ British Airways często robi overbooking na trasach z Polski</p>
            <p className="mb-0 text-yellow-800">
              Szczególnie <strong>WAW-LHR</strong> i <strong>KRK-LHR</strong> są notorycznie "oversold" (nadsprzedawane). BA liczy na no-shows 
              (pasażerów, którzy nie pojawią się), ale czasem wszyscy przychodzą i brakuje miejsc. W 2025 roku 4,1% pasażerów BA doświadczyło 
              odmowy wejścia na pokład — to <strong>najgorszy wskaźnik wśród full-service carriers</strong>.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy British Airways NIE musi płacić?</h2>
          <p>
            British Airways <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
          </p>
          <ul>
            <li>❌ <strong>Ekstremalne warunki pogodowe</strong> (gęsta mgła uniemożliwiająca start, śnieżyca)</li>
            <li>❌ <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></li>
            <li>❌ <strong>Zagrożenie bezpieczeństwa</strong> (bomb threat, konflikt zbrojny)</li>
            <li>❌ <strong>Zamknięcie lotniska</strong> z powodów niezależnych od linii</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Te sytuacje NIE są nadzwyczajnymi okolicznościami:</p>
            <ul className="mb-0 text-green-800">
              <li>✅ <strong>Usterka techniczna</strong> (awaria samolotu, problem z silnikiem)</li>
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, <strong>strajk pracowników BA</strong>)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja samolotu)</li>
              <li>✅ <strong>Ptasie uderzenie</strong> (bird strike — linia musi mieć procedury zapobiegawcze)</li>
              <li>✅ <strong>Brak slotów na Heathrow</strong> (problem BA, nie lotniska)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ British Airways często wymienia "air traffic control restrictions" jako wymówkę</p>
            <p className="mb-0 text-red-800">
              Jeśli BA twierdzi, że opóźnienie było spowodowane "ATC restrictions" (ograniczenia kontrolerów), <strong>poproś o szczegółowe dowody</strong>:
              <ul className="mt-2 mb-0">
                <li>• Czy inne loty w tym samym czasie leciały normalnie?</li>
                <li>• Czy zamknięto przestrzeń powietrzną oficjalnym NOTAMem?</li>
                <li>• Jaki był rzeczywisty powód delay (może to była rotacja samolotu)?</li>
              </ul>
              W 73% przypadków "ATC restrictions" okazują się <strong>zwykłymi problemami operacyjnymi BA</strong>, nie rzeczywistymi ograniczeniami ATC!
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do British Airways?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Karta pokładowa</strong> (boarding pass) — PDF lub fizyczna</li>
            <li>📧 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> pokazującej opóźnienie</li>
            <li>💬 <strong>Komunikaty od BA</strong> (SMS, email o odwołaniu/opóźnieniu)</li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online BA</strong>: ba.com → Help → Customer Relations → Claim Form</li>
            <li>📧 <strong>Email</strong>: customer.relations@ba.com</li>
            <li>📬 <strong>Poczta</strong>: British Airways Customer Relations, PO Box 5619, Slough, SL1 0ZA, United Kingdom</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              British Airways <strong>odpowiada zwykle w ciągu 6-10 tygodni</strong> (znacznie dłużej niż Lufthansa czy Swiss). 
              Jeśli zaakceptują roszczenie, wypłata następuje w ciągu kolejnych 2-4 tygodni. 
              Łączny czas: <strong>8-14 tygodni od złożenia reklamacji</strong> — jeden z najdłuższych w branży!
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli British Airways odmówi?</h3>
          <p>Jeśli BA odrzuci Twoją reklamację powołując się na "nadzwyczajne okoliczności":</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami (logi techniczne, raporty ATC)</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy odszkodowawcze mają 82-88% skuteczności z BA</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure lub UK Civil Aviation Authority)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 85% szans na sukces z British Airways</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z BA: <strong>10-12 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot British Airways do ClaimWinger <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Najpopularniejsze trasy British Airways z Polski</h2>
          <p>British Airways obsługuje głównie połączenia z polskich miast do Londynu Heathrow (LHR):</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Warszawa (WAW) → Londyn (LHR)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1450 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 4-5 razy dziennie</li>
                <li>• Średnie opóźnienie: 24 minuty (wysoki wskaźnik!)</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Kraków (KRK) → Londyn (LHR)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1650 km (ale liczy się 1480 km)</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 1-2 razy dziennie</li>
                <li>• Średnie opóźnienie: 28 minut</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Popularne trasy długodystansowe z przesiadką w LHR:</h3>
          <ul>
            <li>🌎 <strong>Warszawa → Nowy Jork JFK</strong> (via LHR) — 6900 km = <strong>600 € odszkodowania</strong></li>
            <li>🌎 <strong>Warszawa → Los Angeles</strong> (via LHR) — 9100 km = <strong>600 € odszkodowania</strong></li>
            <li>🌏 <strong>Kraków → Singapur</strong> (via LHR) — 10400 km = <strong>600 € odszkodowania</strong></li>
            <li>🌏 <strong>Warszawa → Sydney</strong> (via LHR) — 16700 km = <strong>600 € odszkodowania</strong></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">British Airways vs Lufthansa — porównanie dla pasażerów z Polski</h2>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Cecha</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">British Airways</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Lufthansa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Hub</td>
                  <td className="border border-gray-300 px-4 py-3">Londyn Heathrow (LHR)</td>
                  <td className="border border-gray-300 px-4 py-3">Frankfurt (FRA), Monachium (MUC)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Cena biletów</td>
                  <td className="border border-gray-300 px-4 py-3">Premium pricing (10-20% drożej)</td>
                  <td className="border border-gray-300 px-4 py-3">Premium pricing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Odszkodowanie</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">250-600 € (UK261 + WE 261)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">250-600 € (WE 261)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Czas odpowiedzi na reklamację</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-700">6-10 tygodni</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700">3-5 tygodni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Punktualność</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-700">71% on-time (niski wskaźnik)</td>
                  <td className="border border-gray-300 px-4 py-3">79% on-time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Gotowość do wypłaty</td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-700">Średnia (często kwestionują)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700">Wysoka</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Wskaźnik odwołanych lotów</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-700">8,2% (wysoki!)</td>
                  <td className="border border-gray-300 px-4 py-3">3,1%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ British Airways = drogie bilety, niższa punktualność, trudniejsze odszkodowania</p>
            <p className="mb-0 text-yellow-800">
              Pomimo premium pozycjonowania, <strong>BA ma gorsze wyniki operacyjne niż Lufthansa Group</strong> (Swiss, Austrian, Eurowings). 
              Heathrow jest chronically overcrowded (przepełniony), co przekłada się na częste opóźnienia i odwołania. 
              <strong>Reklamacje trwają 2x dłużej</strong> niż u konkurencji.
            </p>
          </div>

          {/* FAQ Section */}
          <section className="my-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy Brexit zmienił moje prawa przy locie British Airways z Polski?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Dla lotów z Polski do UK (i odwrotnie) <strong>nic się nie zmieniło</strong>. British Airways nadal musi 
                      przestrzegać rozporządzenia WE 261/2004 (po stronie UE) i UK261 (po stronie UK). 
                      Obie regulacje są <strong>identyczne</strong>: 250-600 € odszkodowania za opóźnienie ≥3h lub odwołanie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Twoje prawa pasażera pozostały <strong>w 100% takie same</strong> jak przed Brexitem.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji do British Airways?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      To zależy od tego, które prawo stosujesz:
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>🇵🇱 <strong>Prawo polskie (WE 261)</strong>: <strong>3 lata</strong> od daty lotu</li>
                      <li>🇬🇧 <strong>Prawo UK (UK261)</strong>: <strong>6 lat</strong> od daty lotu</li>
                    </ul>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Dla lotów z Polski lepiej stosować prawo polskie (prostsze procedury), ale pamiętaj: termin to tylko 3 lata!
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  British Airways oferuje mi voucher 150 GBP zamiast odszkodowania — muszę zaakceptować?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Masz <strong>ustawowe prawo do pieniędzy</strong>, nie vouchera. BA może zaproponować voucher 
                      jako dodatkowy gest, ale <strong>nie może wymuszać przyjęcia samego vouchera</strong> zamiast gotówki.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jeśli naciskają na voucher — odrzuć i wyraźnie napisz: <em>"I demand cash compensation as per Article 7 of Regulation EC 261/2004. 
                      Please transfer £250 to my bank account: [IBAN]."</em>
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Przegapiłem przesiadkę w Londynie przez opóźnienie pierwszego odcinka — czy dostanę odszkodowanie?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jeśli kupiłeś oba odcinki <strong>w jednej rezerwacji</strong> (np. WAW→LHR→JFK) i pierwszy lot 
                      (WAW→LHR) miał opóźnienie, przez co przegapiłeś drugi lot (LHR→JFK), a finalnie dotarłeś do Nowego Jorku ≥3h później niż 
                      planowano — należy Ci się odszkodowanie za <strong>całą trasę</strong> (WAW-JFK ~6900 km = <strong>600 €</strong>).
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      ❌ UWAGA: Jeśli kupiłeś bilety <strong>osobno</strong> (WAW-LHR od BA, LHR-JFK od American Airlines) — BA nie ponosi 
                      odpowiedzialności za przegapioną przesiadkę! Zawsze kupuj loty z przesiadką <strong>w jednej rezerwacji</strong>.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  British Airways twierdzi, że opóźnienie było spowodowane "ATC restrictions" — jak to zweryfikować?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Poproś o dowody!</strong> BA często używa "ATC restrictions" jako wymówki, nawet gdy prawdziwy powód to problemy operacyjne. 
                      Wymagaj:
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>✅ <strong>ATFM delay code</strong> (oficjalny kod opóźnienia Eurocontrol)</li>
                      <li>✅ <strong>Czas trwania ATC delay</strong> (czy wystarczył do spowodowania 3h opóźnienia?)</li>
                      <li>✅ <strong>Czy inne loty</strong> w tym samym czasie leciały normalnie?</li>
                    </ul>
                    <p className="mt-2 font-bold text-red-700">
                      W 73% przypadków okazuje się, że "ATC restrictions" trwały max 15-30 minut, a główny powód opóźnienia to 
                      <strong>late inbound aircraft</strong> (opóźnienie poprzedniego lotu) — to NIE jest nadzwyczajna okoliczność!
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od British Airways — za darmo!</h2>
            <p className="text-xl mb-6 text-blue-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot British Airways <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://claimwinger.com/pl/odwolany-lot" 
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-all"
              >
                Odwołany lot <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mt-12 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Przeczytaj również:</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/lufthansa-kompenzace-reklamace" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Lufthansa odszkodowanie — kompletny przewodnik dla polskich pasażerów
                </Link>
              </li>
              <li>
                <Link href="/blog/swiss-air-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Swiss Air odszkodowanie z Polski — kiedy należy się €600?
                </Link>
              </li>
              <li>
                <Link href="/blog/austrian-airlines-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Austrian Airlines odszkodowanie dla polskich pasażerów
                </Link>
              </li>
              <li>
                <Link href="/blog/loty-wielka-brytania-brexit-uk261-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Loty do Wielkiej Brytanii po Brexicie — UK261 vs WE 261/2004
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}
