import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Star, Globe } from "lucide-react";

export default function KlmOdszkodowniePolska() {
  return (
    <Layout>
      <SEO 
        title="KLM odszkodowanie dla polskich pasażerów — przewodnik 2026"
        description="Sprawdź, kiedy KLM musi wypłacić odszkodowanie do 600 € za opóźniony lub odwołany lot z Polski. Kompletny przewodnik prawny i procedury reklamacyjne."
        url="https://problemlot.pl/blog/klm-odszkodowanie-polska"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            KLM odszkodowanie dla polskich pasażerów — przewodnik 2026
          </h1>
          <p className="text-gray-600 text-lg">
            Kompletny przewodnik prawny: kiedy KLM musi wypłacić 250-600 € odszkodowania za opóźniony lub odwołany lot z/do Polski
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
              Najważniejsze informacje o KLM Royal Dutch Airlines
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>KLM podlega WE 261/2004</strong> — holenderski carrier z EU prawami</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie</li>
              <li>✅ <strong>Hub Amsterdam Schiphol (AMS)</strong> — missed connections częsty problem</li>
              <li>✅ <strong>85% skuteczności</strong> przy pomocy prawnej (KLM wypłaca stosunkowo szybko)</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (prawo polskie)</li>
              <li>✅ <strong>SkyTeam Alliance</strong> — codeshare z Air France, Delta (kto płaci?)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie KLM za 2 minuty</h3>
                <p className="mb-4 text-blue-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot KLM Royal Dutch Airlines.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie KLM <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">KLM Royal Dutch Airlines a rozporządzenie WE 261/2004</h2>
          <p>
            <strong>KLM Royal Dutch Airlines</strong> to narodowy przewoźnik Holandii i jeden z najstarszych carrierów na świecie (założony 1919). 
            Wszystkie loty KLM <strong>podlegają rozporządzeniu WE 261/2004</strong>, co oznacza identyczne prawa pasażerów jak przy lotach innych 
            europejskich linii.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 flex items-center gap-2">
              <Star className="w-5 h-5" />
              ✅ KLM = Premium service + wysoka kultura wypłat (część Air France-KLM Group)
            </p>
            <p className="mb-0 text-green-800">
              KLM ma <strong>dobrą reputację w wypłacaniu odszkodowań</strong> — 85% uzasadnionych roszczeń jest akceptowanych bez walki sądowej. 
              Średni czas odpowiedzi: <strong>4-6 tygodni</strong>, wypłata: kolejne 2-3 tygodnie. To jeden z bardziej "passenger-friendly" carrierów 
              w Europie.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od KLM?</h2>
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
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Amsterdam (1150 km), Kraków-Amsterdam (1050 km)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Barcelona (via AMS), Kraków-Ateny (via AMS)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Nowy Jork (via AMS), Kraków-Singapur (via AMS)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Uwaga na loty z przesiadką w Amsterdamie!</p>
            <p className="mb-0 text-yellow-800">
              Jeśli lecisz z Polski do Azji/Ameryki <strong>z przesiadką w Amsterdamie</strong> (np. Warszawa → Amsterdam → Bangkok), 
              odszkodowanie oblicza się na podstawie <strong>całkowitej odległości lotu</strong> (Warszawa-Bangkok, ok. 8700 km = <strong>600 €</strong>), 
              nie osobno za każdy odcinek.
            </p>
            <p className="mt-2 text-yellow-800">
              <strong>Kluczowe:</strong> Jeśli opóźnienie pierwszego odcinka (WAW→AMS) spowodowało missed connection i finalnie dotarłeś 
              do Bangkoku ≥3h później — należy Ci się pełne 600 €!
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od KLM?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot KLM
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Lot opóźnił się o ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład: Missed connection w Amsterdamie</p>
            <p className="mb-2">
              <strong>Lot 1:</strong> Warszawa (WAW) → Amsterdam (AMS) — opóźnienie 45 minut<br/>
              <strong>Lot 2:</strong> Amsterdam (AMS) → Bangkok (BKK) — planowane odlot 11:05<br/>
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
            2. Odwołany lot KLM
          </h3>
          <p>KLM musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy (dużo wcześniej/później)</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ KLM czasem odwołuje loty zimą i latem</p>
            <p className="mb-0 text-red-800">
              <strong>Problemowe okresy:</strong> styczeń-luty (mgła/śnieg w AMS) i lipiec-sierpień (braki personelu). 
              Jeśli Twój lot został odwołany <strong>z powodu "operational issues"</strong> — to NIE jest nadzwyczajna okoliczność i należy Ci się pieniądze!
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            3. Overbooking (odmowa wejścia na pokład)
          </h3>
          <p>
            Jeśli KLM <strong>odmówił Ci wejścia na pokład pomimo ważnego biletu i odprawy</strong> (overbooking), 
            należy Ci się <strong>natychmiastowa wypłata odszkodowania</strong> (gotówka na lotnisku lub przelew w 7 dni) + lot zastępczy lub zwrot pieniędzy.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ KLM rzadko robi overbooking</p>
            <p className="mb-0 text-green-800">
              W przeciwieństwie do lowcost carriers, <strong>KLM bardzo rzadko nadsprzedaje bilety</strong>. Jeśli jednak się to stanie, 
              linia zazwyczaj oferuje natychmiastową kompensację na lotnisku + upgrade do wyższej klasy na następnym locie.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy KLM NIE musi płacić?</h2>
          <p>
            KLM <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
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
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, strajk pracowników KLM)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja samolotu)</li>
              <li>✅ <strong>Ptasie uderzenie</strong> (bird strike — linia musi mieć procedury zapobiegawcze)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do KLM?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Karta pokładowa</strong> (boarding pass) — PDF lub fizyczna (dla OBUDWÓCH odcinków jeśli przesiadka)</li>
            <li>📧 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> pokazującej opóźnienie</li>
            <li>💬 <strong>Komunikaty od KLM</strong> (SMS, email o odwołaniu/opóźnieniu)</li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking po missed connection)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online KLM</strong>: klm.com → Customer Service → Refund & Compensation</li>
            <li>📧 <strong>Email</strong>: customer.care@klm.com</li>
            <li>📬 <strong>Poczta</strong>: KLM Customer Care, P.O. Box 7700, 1117 ZL Schiphol Airport, Netherlands</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              KLM <strong>odpowiada zwykle w ciągu 4-6 tygodni</strong>. Jeśli zaakceptują roszczenie, wypłata następuje w ciągu kolejnych 2-3 tygodni. 
              Łączny czas: <strong>6-9 tygodni od złożenia reklamacji</strong> (podobnie jak Lufthansa).
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli KLM odmówi?</h3>
          <p>Jeśli KLM odrzuci Twoją reklamację powołując się na "nadzwyczajne okoliczności":</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami (logi techniczne, raporty pogodowe)</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy odszkodowawcze mają 85-90% skuteczności z KLM</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure — online, prosty proces)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 88% szans na sukces z KLM</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z KLM: <strong>7-9 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot KLM do ClaimWinger <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Najpopularniejsze trasy KLM z Polski</h2>
          <p>KLM obsługuje głównie połączenia z polskich miast do swojego hubu w Amsterdamie:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Warszawa (WAW) → Amsterdam (AMS)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1150 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 3-4 razy dziennie</li>
                <li>• Średnie opóźnienie: 18 minut (dobry wskaźnik)</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-blue-700 mb-2">Kraków (KRK) → Amsterdam (AMS)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1050 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 1-2 razy dziennie</li>
                <li>• Średnie opóźnienie: 22 minuty</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Popularne trasy długodystansowe z przesiadką w AMS:</h3>
          <ul>
            <li>🌏 <strong>Warszawa → Bangkok</strong> (via AMS) — 8700 km = <strong>600 € odszkodowania</strong></li>
            <li>🌏 <strong>Warszawa → Singapur</strong> (via AMS) — 10200 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Kraków → Nowy Jork JFK</strong> (via AMS) — 6900 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Warszawa → Toronto</strong> (via AMS) — 6900 km = <strong>600 € odszkodowania</strong></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">KLM vs Air France — różnice dla pasażerów z Polski</h2>
          <p>Mimo że KLM i Air France należą do tej samej grupy (Air France-KLM), istnieją pewne różnice:</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Cecha</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">KLM</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Air France</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Hub</td>
                  <td className="border border-gray-300 px-4 py-3">Amsterdam Schiphol (AMS)</td>
                  <td className="border border-gray-300 px-4 py-3">Paris CDG (CDG)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Cena biletów</td>
                  <td className="border border-gray-300 px-4 py-3">Premium (5-10% taniej niż AF)</td>
                  <td className="border border-gray-300 px-4 py-3">Premium pricing</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Odszkodowanie WE 261</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Identyczne (250-600 €)</td>
                  <td className="border border-gray-300 px-4 py-3 text-green-700 font-bold">Identyczne (250-600 €)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Czas odpowiedzi na reklamację</td>
                  <td className="border border-gray-300 px-4 py-3">4-6 tygodni</td>
                  <td className="border border-gray-300 px-4 py-3">4-7 tygodni</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Punktualność</td>
                  <td className="border border-gray-300 px-4 py-3">78% on-time</td>
                  <td className="border border-gray-300 px-4 py-3">75% on-time</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Gotowość do wypłaty</td>
                  <td className="border border-gray-300 px-4 py-3">Wysoka (85% akceptacji)</td>
                  <td className="border border-gray-300 px-4 py-3">Średnia-wysoka (80% akceptacji)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-blue-900">💡 Amsterdam Schiphol = kompaktowe lotnisko, efektywne przesiadki</p>
            <p className="mb-0 text-blue-800">
              Schiphol Airport jest <strong>jednym z najbardziej efektywnych hubów w Europie</strong>. Minimalny czas przesiadki (MCT) to 40 minut 
              Schengen, 50 minut non-Schengen — niższy niż Paris CDG (60 min) czy Frankfurt (45-50 min).
            </p>
          </div>

          {/* FAQ Section */}
          <section className="my-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Przegapiłem przesiadkę w Amsterdamie przez opóźnienie pierwszego odcinka — czy dostanę 600 €?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jeśli kupiłeś oba odcinki <strong>w jednej rezerwacji</strong> (np. WAW→AMS→BKK) i pierwszy lot 
                      (WAW→AMS) miał opóźnienie, przez co przegapiłeś drugi lot (AMS→BKK), a finalnie dotarłeś do Bangkoku ≥3h później niż 
                      planowano — należy Ci się odszkodowanie za <strong>całą trasę</strong> (WAW-BKK ~8700 km = <strong>600 €</strong>).
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Kluczowe: Oba loty muszą być w <em>jednej rezerwacji</em> (jeden booking reference/PNR). Jeśli kupiłeś je osobno 
                      — KLM nie ponosi odpowiedzialności za przegapioną przesiadkę.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Leciałem KLM z codeshare Air France — kto płaci odszkodowanie?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      Odszkodowanie płaci <strong>linia wykonująca lot</strong> (operating carrier), nie sprzedająca bilet (marketing carrier).
                    </p>
                    <p className="mt-2">
                      <strong>Przykład:</strong> Kupiłeś bilet KLM (KL1234), ale lot wykonywała Air France (samolot AF, załoga AF) 
                      → reklamację składasz do <strong>Air France</strong>, bo oni faktycznie wykonywali lot.
                    </p>
                    <p className="mt-2 font-bold text-blue-700">
                      💡 Sprawdź na boarding pass: "Operated by..." — to jest linia odpowiedzialna za odszkodowanie!
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy KLM wypłaci odszkodowanie na polskie konto bankowe?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak.</strong> KLM wypłaca pieniądze przelewem SEPA na dowolne konto bankowe w Polsce (lub innym kraju UE). 
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
                  Ile czasu mam na złożenie reklamacji do KLM?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot, który odbył się nawet 
                      2 lata i 11 miesięcy temu — KLM musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  KLM twierdzi, że opóźnienie było spowodowane "problemami technicznymi" — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Według orzecznictwa TSUE (Trybunału Sprawiedliwości UE), <strong>zwykłe usterki techniczne NIE są 
                      nadzwyczajnymi okolicznościami</strong>. Linie lotnicze mają obowiązek utrzymywać flotę w sprawności technicznej.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jedynie <em>ukryta wada fabryczna</em> (defect producenta wykryta po raz pierwszy) może być uznana za nadzwyczajną okoliczność 
                      — ale KLM musi to udowodnić dokumentami producenta.
                    </p>
                    <p className="mt-2">
                      <strong>Twoja odpowiedź:</strong> <em>"Żądam szczegółowego uzasadnienia technicznego i raportów serwisowych potwierdzających, 
                      że była to ukryta wada producenta, a nie efekt zwykłego zużycia eksploatacyjnego."</em>
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od KLM — za darmo!</h2>
            <p className="text-xl mb-6 text-blue-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot KLM <ArrowRight className="w-5 h-5" />
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
                <Link href="/blog/air-france-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Air France odszkodowanie z Polski — przewodnik 2026
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
