import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Star } from "lucide-react";

export default function SwissAirOdszkodowniePolska() {
  return (
    <Layout>
      <SEO 
        title="Swiss Air odszkodowanie z Polski — kiedy należy się €600?"
        description="Sprawdź, kiedy Swiss Air musi wypłacić odszkodowanie do 600 € za opóźniony lub odwołany lot z Polski. Kompletny przewodnik prawny 2026."
        url="https://problemlot.pl/blog/swiss-air-odszkodowanie-polska"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Swiss Air odszkodowanie z Polski — kiedy należy się €600?
          </h1>
          <p className="text-gray-600 text-lg">
            Kompletny przewodnik: jak uzyskać 250-600 € odszkodowania od Swiss International Air Lines za opóźniony lub odwołany lot z/do Polski
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            <span>Zaktualizowano: 10 marca 2026</span>
            <span>•</span>
            <span>Czas czytania: 9 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Featured Snippet Box */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold mb-3 mt-0 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-red-600" />
              Najważniejsze informacje o Swiss Air
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Swiss podlega WE 261/2004</strong> — takie same prawa jak wszystkie linie europejskie</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie (niezależnie od ceny biletu)</li>
              <li>✅ <strong>Premium service = szybsza wypłata</strong> — Swiss płaci średnio w 4-6 tygodni</li>
              <li>✅ <strong>Hub Zurych (ZRH)</strong> — missed connections to częsty problem!</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (przedawnienie)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź odszkodowanie Swiss Air za 2 minuty</h3>
                <p className="mb-4 text-red-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile możesz dostać za opóźniony lub odwołany lot Swiss International Air Lines.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź lot Swiss Air <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Swiss International Air Lines a rozporządzenie WE 261/2004</h2>
          <p>
            <strong>Swiss International Air Lines (SWISS)</strong> to narodowy przewoźnik Szwajcarii, należący do Lufthansa Group. 
            Mimo że Szwajcaria nie jest członkiem UE, <strong>Swiss w pełni stosuje rozporządzenie WE 261/2004</strong> na wszystkich lotach 
            z/do krajów Unii Europejskiej (w tym Polski).
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 flex items-center gap-2">
              <Star className="w-5 h-5" />
              ✅ Swiss = Premium service + wysoka kultura wypłat
            </p>
            <p className="mb-0 text-green-800">
              W przeciwieństwie do tanich linii lowcost (Ryanair, Wizz Air), <strong>Swiss rzadko kwestionuje uzasadnione roszczenia</strong> 
              i wypłaca odszkodowania stosunkowo szybko (<strong>średnio 4-6 tygodni</strong>). Należy do Lufthansa Group, co przekłada się 
              na wysokie standardy obsługi pasażerów.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Swiss Air?</h2>
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
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Zurych (1250 km)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Tel Awiw (via ZRH), Kraków-Lizbona (via ZRH)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Bangkok (via ZRH), Kraków-Singapur (via ZRH)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Uwaga na loty z przesiadką w Zurychu!</p>
            <p className="mb-0 text-yellow-800">
              Jeśli lecisz z Polski do Azji <strong>z przesiadką w Zurychu</strong> (np. Warszawa → Zurych → Bangkok), odszkodowanie 
              oblicza się na podstawie <strong>całkowitej odległości lotu</strong> (Warszawa-Bangkok, ok. 8700 km = <strong>600 €</strong>), 
              nie osobno za każdy odcinek.
            </p>
            <p className="mt-2 text-yellow-800">
              <strong>Kluczowe:</strong> Jeśli opóźnienie pierwszego odcinka (WAW→ZRH) spowodowało missed connection i finalnie dotarłeś 
              do Bangkoku ≥3h później — należy Ci się pełne 600 €!
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od Swiss Air?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot Swiss Air
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Lot opóźnił się o ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład: Missed connection w Zurychu</p>
            <p className="mb-2">
              <strong>Lot 1:</strong> Warszawa (WAW) → Zurych (ZRH) — opóźnienie 45 minut<br/>
              <strong>Lot 2:</strong> Zurych (ZRH) → Bangkok (BKK) — planowane odlot 11:30<br/>
              <strong>Skutek:</strong> Przegapiłeś lot do Bangkoku, następny dostępny lot za 6 godzin<br/>
              <strong>Finalny przylot do Bangkoku:</strong> 6 godzin 45 minut później niż planowano<br/>
              <strong>Całkowity dystans:</strong> WAW-BKK ~8700 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">600 €</span> na pasażera (maksymalna stawka!)
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot Swiss Air
          </h3>
          <p>Swiss musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy (dużo wcześniej/później)</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ Swiss rzadko odwołuje loty, ale...</p>
            <p className="mb-0 text-red-800">
              Gdy już to robi, <strong>często jest to z powodów operacyjnych</strong> (rotacja samolotu, brak załogi), które NIE są 
              nadzwyczajnymi okolicznościami. Jeśli Swiss odwołał lot powołując się na "technical issue" lub "operational reasons" 
              — <strong>należy Ci się pełne odszkodowanie</strong>!
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            3. Overbooking (odmowa wejścia na pokład)
          </h3>
          <p>
            Jeśli Swiss <strong>odmówił Ci wejścia na pokład pomimo ważnego biletu i odprawy</strong> (overbooking), należy Ci się 
            <strong>natychmiastowa wypłata odszkodowania</strong> (gotówka na lotnisku lub przelew w 7 dni) + lot zastępczy lub zwrot pieniędzy.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Swiss prawie nigdy nie robi overbookingu</p>
            <p className="mb-0 text-green-800">
              W przeciwieństwie do lowcost carriers, <strong>Swiss bardzo rzadko nadsprzedaje bilety</strong>. Jeśli jednak się to stanie, 
              linia zazwyczaj oferuje natychmiastową kompensację na lotnisku (często wyższą niż ustawowe minimum).
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Swiss NIE musi płacić?</h2>
          <p>
            Swiss <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
          </p>
          <ul>
            <li>❌ <strong>Ekstremalne warunki pogodowe</strong> (śnieżyca w Alpach, gęsta mgła uniemożliwiająca start)</li>
            <li>❌ <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></li>
            <li>❌ <strong>Zagrożenie bezpieczeństwa</strong> (bomb threat, konflikt zbrojny)</li>
            <li>❌ <strong>Zamknięcie lotniska</strong> z powodów niezależnych od linii</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Te sytuacje NIE są nadzwyczajnymi okolicznościami:</p>
            <ul className="mb-0 text-green-800">
              <li>✅ <strong>Usterka techniczna</strong> (awaria samolotu, problem z silnikiem)</li>
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, strajk pracowników Swiss)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja samolotu)</li>
              <li>✅ <strong>Ptasie uderzenie</strong> (bird strike — linia musi mieć procedury zapobiegawcze)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do Swiss Air?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Karta pokładowa</strong> (boarding pass) — PDF lub fizyczna (dla OBUDWÓCH odcinków jeśli przesiadka)</li>
            <li>📧 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> pokazującej opóźnienie</li>
            <li>💬 <strong>Komunikaty od Swiss</strong> (SMS, email o odwołaniu/opóźnieniu)</li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking po missed connection)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online Swiss</strong>: swiss.com → Customer Support → Claim Form</li>
            <li>📧 <strong>Email</strong>: service@swiss.com</li>
            <li>📬 <strong>Poczta</strong>: Swiss International Air Lines, Customer Relations, P.O. Box, CH-4002 Basel, Switzerland</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Swiss <strong>odpowiada zwykle w ciągu 3-5 tygodni</strong>. Jeśli zaakceptują roszczenie, wypłata następuje w ciągu kolejnych 2-3 tygodni. 
              Łączny czas: <strong>5-8 tygodni od złożenia reklamacji</strong> (szybciej niż u większości linii).
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Swiss odmówi?</h3>
          <p>Jeśli Swiss odrzuci Twoją reklamację powołując się na "nadzwyczajne okoliczności":</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami (logi techniczne, raporty pogodowe)</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy odszkodowawcze mają 88-92% skuteczności z Swiss</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure — online, prosty proces)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 90% szans na sukces z Swiss Air</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z Swiss: <strong>6-8 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Swiss Air do ClaimWinger <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Najpopularniejsze trasy Swiss Air z Polski</h2>
          <p>Swiss obsługuje głównie połączenia z polskich miast do swojego hubu w Zurychu:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-red-700 mb-2">Warszawa (WAW) → Zurych (ZRH)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1250 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 2-3 razy dziennie</li>
                <li>• Średnie opóźnienie: 12 minut (bardzo punktualni!)</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-red-700 mb-2">Kraków (KRK) → Zurych (ZRH)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~950 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 1 raz dziennie (sezonowo 2x)</li>
                <li>• Średnie opóźnienie: 15 minut</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Popularne trasy długodystansowe z przesiadką w ZRH:</h3>
          <ul>
            <li>🌏 <strong>Warszawa → Bangkok</strong> (via ZRH) — 8700 km = <strong>600 € odszkodowania</strong></li>
            <li>🌏 <strong>Warszawa → Singapur</strong> (via ZRH) — 10200 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Kraków → Nowy Jork</strong> (via ZRH) — 7400 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Warszawa → Los Angeles</strong> (via ZRH) — 10100 km = <strong>600 € odszkodowania</strong></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Swiss Air vs Lufthansa — różnice dla pasażerów z Polski</h2>
          <p>Mimo że Swiss należy do Lufthansa Group, istnieją pewne różnice:</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Cecha</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Swiss Air</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Lufthansa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Hub</td>
                  <td className="border border-gray-300 px-4 py-3">Zurych (ZRH)</td>
                  <td className="border border-gray-300 px-4 py-3">Frankfurt (FRA), Monachium (MUC)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Cena biletów</td>
                  <td className="border border-gray-300 px-4 py-3">Porównywalna (czasem 10-15% wyższa)</td>
                  <td className="border border-gray-300 px-4 py-3">Premium pricing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Odszkodowanie WE 261</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Identyczne (250-600 €)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Identyczne (250-600 €)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Czas odpowiedzi na reklamację</td>
                  <td className="border border-gray-300 px-4 py-3">3-5 tygodni</td>
                  <td className="border border-gray-300 px-4 py-3">3-5 tygodni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Punktualność</td>
                  <td className="border border-gray-300 px-4 py-3">82% on-time (bardzo wysoka)</td>
                  <td className="border border-gray-300 px-4 py-3">79% on-time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Gotowość do wypłaty</td>
                  <td className="border border-gray-300 px-4 py-3">Bardzo wysoka (rzadko kwestionują)</td>
                  <td className="border border-gray-300 px-4 py-3">Wysoka</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-blue-900">💡 Swiss = Premium choice z Polski</p>
            <p className="mb-0 text-blue-800">
              <strong>Wyższa cena biletu = wyższa kultura obsługi</strong>. Swiss oferuje lepsze jedzenie na pokładzie, wygodniejsze fotele 
              i <strong>znacznie szybszą obsługę reklamacji</strong> niż tanie linie. Jeśli lot się opóźni, masz duże szanse dostać pieniądze 
              bez walki prawnej.
            </p>
          </div>

          {/* FAQ Section */}
          <section className="my-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Przegapiłem przesiadkę w Zurychu przez opóźnienie pierwszego odcinka — czy dostanę 600 €?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jeśli kupiłeś oba odcinki <strong>w jednej rezerwacji</strong> (np. WAW→ZRH→BKK) i pierwszy lot 
                      (WAW→ZRH) miał opóźnienie, przez co przegapiłeś drugi lot (ZRH→BKK), a finalnie dotarłeś do Bangkoku ≥3h później niż 
                      planowano — należy Ci się odszkodowanie za <strong>całą trasę</strong> (WAW-BKK ~8700 km = <strong>600 €</strong>).
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Kluczowe: Oba loty muszą być w <em>jednej rezerwacji</em> (jeden booking reference/PNR). Jeśli kupiłeś je osobno 
                      — Swiss nie ponosi odpowiedzialności za przegapioną przesiadkę.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy odszkodowanie przysługuje pasażerom klasy biznes/pierwszej?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Rozporządzenie WE 261/2004 <strong>nie rozróżnia klas podróży</strong>. Pasażer Swiss First Class 
                      (który zapłacił 15000 PLN za bilet) dostaje <strong>taką samą kwotę 250-600 €</strong> jak pasażer klasy ekonomicznej 
                      (który zapłacił 800 PLN).
                    </p>
                    <p className="mt-2 text-red-700 font-bold">
                      ⚠️ Jednak: Swiss często oferuje pasażerom premium <strong>wyższe odszkodowania dobrowolne</strong> (np. 500 € voucher + 400 € gotówki). 
                      Możesz zaakceptować ofertę lub żądać ustawowego minimum.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Swiss oferuje mi voucher 300 CHF zamiast odszkodowania — muszę zaakceptować?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Masz <strong>ustawowe prawo do pieniędzy w euro</strong>, nie vouchera w frankach szwajcarskich. 
                      Swiss może zaproponować voucher jako dodatkowy gest (np. 300 CHF voucher + 250 € gotówki), ale <strong>nie może wymuszać 
                      przyjęcia samego vouchera</strong>.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jeśli naciskają na voucher — odrzuć i wyraźnie napisz: <em>"Żądam wypłaty odszkodowania zgodnie z art. 7 rozporządzenia 
                      WE 261/2004 w formie przelewu bankowego w euro na konto: [IBAN]."</em>
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji do Swiss Air?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot, który odbył się 
                      nawet 2 lata i 11 miesięcy temu — Swiss musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Swiss twierdzi, że opóźnienie było spowodowane "złymi warunkami pogodowymi w Alpach" — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Zależy!</strong> Pogoda może być nadzwyczajną okolicznością, ale <strong>tylko wtedy, gdy faktycznie uniemożliwiła 
                      bezpieczny lot</strong>. "Złe warunki" to zbyt ogólne — poproś o konkretne dane:
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>✅ <strong>Raport meteorologiczny z lotniska</strong> (METAR/TAF) z godziny odlotu</li>
                      <li>✅ <strong>Informacja czy inne loty Swiss</strong> w tym samym czasie leciały normalnie</li>
                      <li>✅ <strong>Czy zamknięto pas startowy</strong> z powodu pogody</li>
                    </ul>
                    <p className="mt-2 font-bold text-red-700">
                      ❌ Jeśli inne linie (np. Lufthansa, Austrian) leciały normalnie w tym samym czasie — pogoda <strong>NIE była</strong> 
                      nadzwyczajną okolicznością i należy Ci się odszkodowanie!
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Swiss Air — za darmo!</h2>
            <p className="text-xl mb-6 text-red-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Swiss Air <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="https://claimwinger.com/pl/odwolany-lot" 
                className="inline-flex items-center justify-center gap-2 bg-red-700 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-600 transition-all"
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
                <Link href="/blog/austrian-airlines-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Austrian Airlines odszkodowanie dla polskich pasażerów
                </Link>
              </li>
              <li>
                <Link href="/blog/eurowings-odszkodowanie-polscy-pasazerowie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Eurowings odszkodowanie dla polskich pasażerów — przewodnik 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Nadzwyczajne okoliczności — kiedy linie NIE muszą płacić odszkodowania?
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}