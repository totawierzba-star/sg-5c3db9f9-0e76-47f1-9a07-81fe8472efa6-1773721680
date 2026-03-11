import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Star, Globe } from "lucide-react";

export default function AirFranceOdszkodowniePolska() {
  return (
    <Layout>
      <SEO 
        title="Air France odszkodowanie z Polski — przewodnik 2026"
        description="Sprawdź, kiedy Air France musi wypłacić odszkodowanie do 600 € za opóźniony lub odwołany lot z Polski. Kompletny przewodnik prawny CDG hub."
        url="https://problemlot.pl/blog/air-france-odszkodowanie-polska"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Air France odszkodowanie z Polski — przewodnik 2026
          </h1>
          <p className="text-gray-600 text-lg">
            Kompletny przewodnik prawny: kiedy Air France musi wypłacić 250-600 € odszkodowania za opóźniony lub odwołany lot z/do Polski
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
              Najważniejsze informacje o Air France
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Air France podlega WE 261/2004</strong> — francuski carrier z EU prawami</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie</li>
              <li>✅ <strong>Hub Paris CDG</strong> — missed connections to częsty problem!</li>
              <li>✅ <strong>80% skuteczności</strong> przy pomocy prawnej (AF często kwestionuje roszczenia)</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (prawo polskie)</li>
              <li>✅ <strong>SkyTeam Alliance</strong> — codeshare z KLM, Delta (kto płaci?)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie Air France za 2 minuty</h3>
                <p className="mb-4 text-blue-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot Air France.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie Air France <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Air France a rozporządzenie WE 261/2004</h2>
          <p>
            <strong>Air France</strong> to narodowy przewoźnik Francji i jedna z największych linii lotniczych w Europie. 
            Wszystkie loty Air France <strong>podlegają rozporządzeniu WE 261/2004</strong>, co oznacza identyczne prawa pasażerów 
            jak przy lotach innych europejskich carrierów.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ⚠️ Air France = Premium pricing, ale średnia kultura wypłat
            </p>
            <p className="mb-0 text-yellow-800">
              Pomimo premium pozycjonowania, <strong>Air France często kwestionuje roszczenia odszkodowawcze</strong> — 80% skuteczności 
              przy pomocy prawnej (niższa niż KLM 85%, Lufthansa 88%). Średni czas odpowiedzi: <strong>5-8 tygodni</strong>, wypłata: 
              kolejne 3-4 tygodnie. To jeden z bardziej "defensive" carrierów wobec roszczeń pasażerów.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Air France?</h2>
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
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Paryż (1370 km), Kraków-Paryż (1280 km)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Lizbona (via CDG), Kraków-Ateny (via CDG)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Nowy Jork (via CDG), Kraków-Tokio (via CDG)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Uwaga na loty z przesiadką w Paryżu CDG!</p>
            <p className="mb-0 text-yellow-800">
              Jeśli lecisz z Polski do Azji/Ameryki <strong>z przesiadką w Paryżu CDG</strong> (np. Warszawa → Paryż → Bangkok), 
              odszkodowanie oblicza się na podstawie <strong>całkowitej odległości lotu</strong> (Warszawa-Bangkok, ok. 8600 km = <strong>600 €</strong>), 
              nie osobno za każdy odcinek.
            </p>
            <p className="mt-2 text-yellow-800">
              <strong>UWAGA CDG!</strong> Paris Charles de Gaulle to <strong>największy hub w Europie</strong> z notorycznymi problemami 
              z missed connections (MCT 60 minut, ale często za krótkie). Jeśli opóźnienie pierwszego odcinka spowodowało przegapioną przesiadkę 
              i dotarłeś ≥3h później — <strong>600 € należy Ci się!</strong>
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od Air France?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot Air France
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Lot opóźnił się o ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład: Missed connection w Paryżu CDG</p>
            <p className="mb-2">
              <strong>Lot 1:</strong> Warszawa (WAW) → Paryż CDG (CDG) — opóźnienie 50 minut<br/>
              <strong>Lot 2:</strong> Paryż CDG (CDG) → Bangkok (BKK) — planowane odlot 12:30<br/>
              <strong>Skutek:</strong> Przegapiłeś lot do Bangkoku, następny dostępny lot za 8 godzin<br/>
              <strong>Finalny przylot do Bangkoku:</strong> 8 godzin 50 minut później niż planowano<br/>
              <strong>Całkowity dystans:</strong> WAW-BKK ~8600 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">600 €</span> na pasażera (maksymalna stawka!)
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot Air France
          </h3>
          <p>Air France musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy (dużo wcześniej/później)</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ Air France często odwołuje loty — szczególnie zimą i latem</p>
            <p className="mb-0 text-red-800">
              <strong>Problemowe okresy:</strong> styczeń-luty (mgła/śnieg w CDG), czerwiec-sierpień (strajki francuskich związków zawodowych, 
              braki personelu). Paris CDG ma <strong>7,8% wskaźnik odwołanych lotów</strong> (wysoki jak na hub). 
              Jeśli AF odwołało lot powołując się na "operational issues" — to NIE jest nadzwyczajna okoliczność!
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            3. Overbooking (odmowa wejścia na pokład)
          </h3>
          <p>
            Jeśli Air France <strong>odmówił Ci wejścia na pokład pomimo ważnego biletu i odprawy</strong> (overbooking), 
            należy Ci się <strong>natychmiastowa wypłata odszkodowania</strong> (gotówka na lotnisku lub przelew w 7 dni) + lot zastępczy lub zwrot pieniędzy.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Air France czasem robi overbooking na trasach długodystansowych</p>
            <p className="mb-0 text-yellow-800">
              Szczególnie <strong>CDG→NYC</strong>, <strong>CDG→BKK</strong> i inne popularne trasy długodystansowe są "oversold" 
              (nadsprzedawane). AF liczy na no-shows, ale czasem wszyscy przychodzą i brakuje miejsc. W 2025 roku 3,2% pasażerów AF 
              doświadczyło odmowy wejścia na pokład.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Air France NIE musi płacić?</h2>
          <p>
            Air France <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
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
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, <strong>strajk pracowników Air France</strong>)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja samolotu)</li>
              <li>✅ <strong>Ptasie uderzenie</strong> (bird strike — linia musi mieć procedury zapobiegawcze)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ Air France często powołuje się na "strajk" — ale nie każdy jest nadzwyczajną okolicznością!</p>
            <p className="mb-0 text-red-800">
              <strong>Strajk pracowników Air France</strong> (piloci, kabina, obsługa naziemna) = <strong>NIE jest</strong> nadzwyczajną okolicznością 
              → należy się odszkodowanie!<br/>
              <strong>Strajk kontrolerów ATC</strong> (francuskiej kontroli ruchu lotniczego) = <strong>JEST</strong> nadzwyczajną okolicznością 
              → brak odszkodowania.
            </p>
            <p className="mt-2 text-red-800 font-bold">
              💡 Zawsze pytaj: "Kto strajkował — pracownicy Air France czy kontrolerzy ruchu lotniczego?" i żądaj dowodów!
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do Air France?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Karta pokładowa</strong> (boarding pass) — PDF lub fizyczna (dla OBUDWÓCH odcinków jeśli przesiadka)</li>
            <li>📧 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> pokazującej opóźnienie</li>
            <li>💬 <strong>Komunikaty od AF</strong> (SMS, email o odwołaniu/opóźnieniu)</li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking po missed connection)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online AF</strong>: airfrance.com → Customer Service → Claim Form</li>
            <li>📧 <strong>Email</strong>: indemnisation.compensation@airfrance.fr</li>
            <li>📬 <strong>Poczta</strong>: Air France Customer Relations, 45 rue de Paris, 95747 Roissy CDG Cedex, France</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Air France <strong>odpowiada zwykle w ciągu 6-10 tygodni</strong> (dłużej niż KLM 4-6 tyg, Lufthansa 3-5 tyg). 
              Jeśli zaakceptują roszczenie, wypłata następuje w ciągu kolejnych 3-4 tygodni. 
              Łączny czas: <strong>9-14 tygodni od złożenia reklamacji</strong> — jeden z najdłuższych w branży premium!
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Air France odmówi?</h3>
          <p>Jeśli AF odrzuci Twoją reklamację powołując się na "nadzwyczajne okoliczności":</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami (logi techniczne, raporty pogodowe, dowody strajku ATC)</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy odszkodowawcze mają 80-85% skuteczności z AF</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure — online, prosty proces)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 83% szans na sukces z Air France</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z AF: <strong>10-12 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Air France do ClaimWinger <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Najpopularniejsze trasy Air France z Polski</h2>
          <p>Air France obsługuje głównie połączenia z polskich miast do swojego hubu w Paryżu CDG:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Warszawa (WAW) → Paryż CDG (CDG)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1370 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 3-4 razy dziennie</li>
                <li>• Średnie opóźnienie: 26 minut (wysoki wskaźnik!)</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Kraków (KRK) → Paryż CDG (CDG)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1280 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 1-2 razy dziennie</li>
                <li>• Średnie opóźnienie: 32 minuty</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Popularne trasy długodystansowe z przesiadką w CDG:</h3>
          <ul>
            <li>🌏 <strong>Warszawa → Bangkok</strong> (via CDG) — 8600 km = <strong>600 € odszkodowania</strong></li>
            <li>🌏 <strong>Warszawa → Tokio</strong> (via CDG) — 9100 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Kraków → Nowy Jork JFK</strong> (via CDG) — 6900 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Warszawa → São Paulo</strong> (via CDG) — 10100 km = <strong>600 € odszkodowania</strong></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Air France vs KLM — różnice dla pasażerów z Polski</h2>
          <p>Mimo że Air France i KLM należą do tej samej grupy (Air France-KLM), istnieją znaczące różnice:</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Cecha</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Air France</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">KLM</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Hub</td>
                  <td className="border border-gray-300 px-4 py-3">Paris CDG (CDG)</td>
                  <td className="border border-gray-300 px-4 py-3">Amsterdam Schiphol (AMS)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Cena biletów</td>
                  <td className="border border-gray-300 px-4 py-3">Premium pricing</td>
                  <td className="border border-gray-300 px-4 py-3">Premium (5-10% taniej)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Odszkodowanie WE 261</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Identyczne (250-600 €)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Identyczne (250-600 €)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Czas odpowiedzi na reklamację</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-700">6-10 tygodni</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700">4-6 tygodni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Punktualność</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-700">75% on-time</td>
                  <td className="border border-gray-300 px-4 py-3">78% on-time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Gotowość do wypłaty</td>
                  <td className="border border-gray-300 px-4 py-3 text-yellow-700">Średnia (80% akceptacji)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700">Wysoka (85% akceptacji)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Wskaźnik odwołanych lotów</td>
                  <td className="border border-gray-300 px-4 py-3 text-red-700">7,8% (wysoki!)</td>
                  <td className="border border-gray-300 px-4 py-3">4,2%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Paris CDG = największy hub, ale problematyczny</p>
            <p className="mb-0 text-yellow-800">
              Paris Charles de Gaulle to <strong>największy hub w Europie</strong> (ponad 76 mln pasażerów/rok), ale <strong>notoryczny 
              dla missed connections</strong>. MCT 60 minut brzmi ok, ale w praktyce CDG ma 3 terminale (1, 2A-2G, 3) często wymagające przejazdu 
              busem — dłużej niż kompaktowy AMS. Wskaźnik przegapionych przesiadek: <strong>12,3%</strong> (najgorszy w EU premium hubs).
            </p>
          </div>

          {/* FAQ Section */}
          <section className="my-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Przegapiłem przesiadkę w Paryżu CDG przez opóźnienie pierwszego odcinka — czy dostanę 600 €?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jeśli kupiłeś oba odcinki <strong>w jednej rezerwacji</strong> (np. WAW→CDG→BKK) i pierwszy lot 
                      (WAW→CDG) miał opóźnienie, przez co przegapiłeś drugi lot (CDG→BKK), a finalnie dotarłeś do Bangkoku ≥3h później niż 
                      planowano — należy Ci się odszkodowanie za <strong>całą trasę</strong> (WAW-BKK ~8600 km = <strong>600 €</strong>).
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Kluczowe: Oba loty muszą być w <em>jednej rezerwacji</em> (jeden booking reference/PNR). Jeśli kupiłeś je osobno 
                      — Air France nie ponosi odpowiedzialności za przegapioną przesiadkę.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Air France twierdzi, że był strajk — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Zależy kto strajkował!</strong>
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>✅ <strong>Strajk pracowników Air France</strong> (piloci, kabina, obsługa naziemna) = <strong>NIE</strong> jest 
                      nadzwyczajną okolicznością → <strong>należy się odszkodowanie!</strong></li>
                      <li>❌ <strong>Strajk kontrolerów ATC</strong> (francuskiej kontroli ruchu lotniczego) = <strong>JEST</strong> nadzwyczajną 
                      okolicznością → brak odszkodowania</li>
                    </ul>
                    <p className="mt-2 font-bold text-red-700">
                      Zawsze żądaj dowodów: "Kto dokładnie strajkował? Proszę o oficjalny NOTAM lub komunikat ATC potwierdzający strajk 
                      kontrolerów ruchu lotniczego."
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Leciałem Air France z codeshare KLM — kto płaci odszkodowanie?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Odszkodowanie płaci <strong>linia wykonująca lot</strong> (operating carrier), nie sprzedająca bilet (marketing carrier).
                    </p>
                    <p className="mt-2">
                      <strong>Przykład:</strong> Kupiłeś bilet Air France (AF1234), ale lot wykonywała KLM (samolot KL, załoga KL) 
                      → reklamację składasz do <strong>KLM</strong>, bo oni faktycznie wykonywali lot.
                    </p>
                    <p className="mt-2 font-bold text-blue-700">
                      💡 Sprawdź na boarding pass: "Operated by..." — to jest linia odpowiedzialna za odszkodowanie!
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy Air France wypłaci odszkodowanie na polskie konto bankowe?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak.</strong> Air France wypłaca pieniądze przelewem SEPA na dowolne konto bankowe w Polsce (lub innym kraju UE). 
                      Kwota jest zawsze w <strong>euro</strong> — Twój bank wymieni ją na złotówki według kursu z dnia realizacji przelewu.
                    </p>
                    <p className="mt-2">
                      <strong>Przykład:</strong> Odszkodowanie 250 € przy kursie 4.30 PLN = <strong>~1075 PLN</strong> na Twoim koncie.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji do Air France?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot, który odbył się nawet 
                      2 lata i 11 miesięcy temu — Air France musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Air France — za darmo!</h2>
            <p className="text-xl mb-6 text-blue-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Air France <ArrowRight className="w-5 h-5" />
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
                <Link href="/blog/klm-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  KLM odszkodowanie dla polskich pasażerów — przewodnik 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/lufthansa-kompenzace-reklamace" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Lufthansa odszkodowanie — kompletny przewodnik dla polskich pasażerów
                </Link>
              </li>
              <li>
                <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Nadzwyczajne okoliczności — kiedy linie NIE muszą płacić odszkodowania?
                </Link>
              </li>
              <li>
                <Link href="/blog/utracona-przesiadka-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Utracona przesiadka — kiedy odszkodowanie i kto płaci?
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}