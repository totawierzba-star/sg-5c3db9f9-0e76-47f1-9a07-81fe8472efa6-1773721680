import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Star } from "lucide-react";

export default function AustrianAirlinesOdszkodowniePolska() {
  return (
    <Layout>
      <SEO 
        title="Austrian Airlines odszkodowanie dla polskich pasażerów — przewodnik 2026"
        description="Sprawdź, kiedy Austrian Airlines musi wypłacić odszkodowanie do 600 € za opóźniony lub odwołany lot z Polski. Kompletny przewodnik prawny."
        url="https://problemlot.pl/blog/austrian-airlines-odszkodowanie-polska"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Austrian Airlines odszkodowanie dla polskich pasażerów — przewodnik 2026
          </h1>
          <p className="text-gray-600 text-lg">
            Kompletny przewodnik prawny: kiedy Austrian Airlines musi wypłacić 250-600 € odszkodowania za opóźniony lub odwołany lot z/do Polski
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
              Najważniejsze informacje o Austrian Airlines
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Austrian Airlines podlega WE 261/2004</strong> — część Lufthansa Group</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie</li>
              <li>✅ <strong>Hub Wiedeń (VIE)</strong> — missed connections to częsty problem!</li>
              <li>✅ <strong>88% skuteczności</strong> przy pomocy prawnej (Austrian płaci bez walki)</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie Austrian Airlines za 2 minuty</h3>
                <p className="mb-4 text-red-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot Austrian Airlines.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie Austrian Airlines <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Austrian Airlines a rozporządzenie WE 261/2004</h2>
          <p>
            <strong>Austrian Airlines (OS)</strong> to narodowy przewoźnik Austrii, należący do Lufthansa Group. 
            Wszystkie loty Austrian Airlines <strong>podlegają rozporządzeniu WE 261/2004</strong>, co oznacza identyczne prawa pasażerów 
            jak przy lotach Lufthansa, Swiss czy Eurowings.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 flex items-center gap-2">
              <Star className="w-5 h-5" />
              ✅ Austrian Airlines = Premium service + wysoka kultura wypłat
            </p>
            <p className="mb-0 text-green-800">
              W przeciwieństwie do tanich linii lowcost, <strong>Austrian Airlines rzadko kwestionuje uzasadnione roszczenia</strong> 
              i wypłaca odszkodowania stosunkowo szybko (<strong>średnio 4-6 tygodni</strong>). Należy do Lufthansa Group, co przekłada się 
              na wysokie standardy obsługi reklamacji.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Austrian Airlines?</h2>
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
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Wiedeń (550 km), Kraków-Wiedeń (380 km)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Larnaka (via VIE), Kraków-Tel Awiw (via VIE)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa-Bangkok (via VIE), Kraków-Tokio (via VIE)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Uwaga na loty z przesiadką w Wiedniu!</p>
            <p className="mb-0 text-yellow-800">
              Jeśli lecisz z Polski do Azji <strong>z przesiadką w Wiedniu</strong> (np. Warszawa → Wiedeń → Bangkok), 
              odszkodowanie oblicza się na podstawie <strong>całkowitej odległości lotu</strong> (Warszawa-Bangkok, ok. 8400 km = <strong>600 €</strong>), 
              nie osobno za każdy odcinek.
            </p>
            <p className="mt-2 text-yellow-800">
              <strong>Kluczowe:</strong> Jeśli opóźnienie pierwszego odcinka (WAW→VIE) spowodowało missed connection i finalnie dotarłeś 
              do Bangkoku ≥3h później — należy Ci się pełne 600 €!
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od Austrian Airlines?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot Austrian Airlines
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Lot opóźnił się o ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład: Missed connection w Wiedniu</p>
            <p className="mb-2">
              <strong>Lot 1:</strong> Warszawa (WAW) → Wiedeń (VIE) — opóźnienie 50 minut<br/>
              <strong>Lot 2:</strong> Wiedeń (VIE) → Bangkok (BKK) — planowane odlot 10:20<br/>
              <strong>Skutek:</strong> Przegapiłeś lot do Bangkoku, następny dostępny lot za 8 godzin<br/>
              <strong>Finalny przylot do Bangkoku:</strong> 8 godzin 50 minut później niż planowano<br/>
              <strong>Całkowity dystans:</strong> WAW-BKK ~8400 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">600 €</span> na pasażera (maksymalna stawka!)
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot Austrian Airlines
          </h3>
          <p>Austrian Airlines musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy (dużo wcześniej/później)</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ Austrian Airlines czasem odwołuje loty zimą</p>
            <p className="mb-0 text-red-800">
              <strong>Problemowe okresy:</strong> styczeń-luty (śnieg w Alpach) i lipiec-sierpień (braki personelu). 
              Jeśli Twój lot został odwołany <strong>z powodu "problemów operacyjnych"</strong> — to NIE jest nadzwyczajna okoliczność i należy Ci się pieniądze!
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-orange-600" />
            3. Overbooking (odmowa wejścia na pokład)
          </h3>
          <p>
            Jeśli Austrian Airlines <strong>odmówił Ci wejścia na pokład pomimo ważnego biletu i odprawy</strong> (overbooking), 
            należy Ci się <strong>natychmiastowa wypłata odszkodowania</strong> (gotówka na lotnisku lub przelew w 7 dni) + lot zastępczy lub zwrot pieniędzy.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Austrian Airlines prawie nigdy nie robi overbookingu</p>
            <p className="mb-0 text-green-800">
              W przeciwieństwie do lowcost carriers, <strong>Austrian Airlines bardzo rzadko nadsprzedaje bilety</strong>. Jeśli jednak się to stanie, 
              linia zazwyczaj oferuje natychmiastową kompensację na lotnisku (często wyższą niż ustawowe minimum).
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Austrian Airlines NIE musi płacić?</h2>
          <p>
            Austrian Airlines <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
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
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, strajk pracowników Austrian Airlines)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja samolotu)</li>
              <li>✅ <strong>Ptasie uderzenie</strong> (bird strike — linia musi mieć procedury zapobiegawcze)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do Austrian Airlines?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Karta pokładowa</strong> (boarding pass) — PDF lub fizyczna (dla OBUDWÓCH odcinków jeśli przesiadka)</li>
            <li>📧 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> pokazującej opóźnienie</li>
            <li>💬 <strong>Komunikaty od Austrian</strong> (SMS, email o odwołaniu/opóźnieniu)</li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking po missed connection)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online Austrian</strong>: austrian.com → Customer Service → Claim Form</li>
            <li>📧 <strong>Email</strong>: service@austrian.com</li>
            <li>📬 <strong>Poczta</strong>: Austrian Airlines AG, Customer Relations, P.O. Box 100, A-1300 Vienna Airport, Austria</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Austrian Airlines <strong>odpowiada zwykle w ciągu 3-5 tygodni</strong>. Jeśli zaakceptują roszczenie, wypłata następuje w ciągu kolejnych 2-3 tygodni. 
              Łączny czas: <strong>5-8 tygodni od złożenia reklamacji</strong> (podobnie jak Swiss Air).
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Austrian Airlines odmówi?</h3>
          <p>Jeśli Austrian odrzuci Twoją reklamację powołując się na "nadzwyczajne okoliczności":</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami (logi techniczne, raporty pogodowe)</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy odszkodowawcze mają 88-92% skuteczności z Austrian</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure — online, prosty proces)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 90% szans na sukces z Austrian Airlines</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z Austrian: <strong>6-8 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Austrian Airlines do ClaimWinger <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Najpopularniejsze trasy Austrian Airlines z Polski</h2>
          <p>Austrian Airlines obsługuje głównie połączenia z polskich miast do swojego hubu w Wiedniu:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-red-700 mb-2">Warszawa (WAW) → Wiedeń (VIE)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~550 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 3-4 razy dziennie</li>
                <li>• Średnie opóźnienie: 10 minut (bardzo punktualni!)</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-red-700 mb-2">Kraków (KRK) → Wiedeń (VIE)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~380 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 2 razy dziennie</li>
                <li>• Średnie opóźnienie: 12 minut</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Popularne trasy długodystansowe z przesiadką w VIE:</h3>
          <ul>
            <li>🌏 <strong>Warszawa → Bangkok</strong> (via VIE) — 8400 km = <strong>600 € odszkodowania</strong></li>
            <li>🌏 <strong>Warszawa → Tokio</strong> (via VIE) — 8900 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Kraków → Nowy Jork</strong> (via VIE) — 7200 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Warszawa → Los Angeles</strong> (via VIE) — 9900 km = <strong>600 € odszkodowania</strong></li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-8">Austrian Airlines vs Lufthansa — różnice dla pasażerów z Polski</h2>
          <p>Mimo że Austrian należy do Lufthansa Group, istnieją pewne różnice:</p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Cecha</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Austrian Airlines</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Lufthansa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 font-bold">Hub</td>
                  <td className="border border-gray-300 px-4 py-3">Wiedeń (VIE)</td>
                  <td className="border border-gray-300 px-4 py-3">Frankfurt (FRA), Monachium (MUC)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-bold">Cena biletów</td>
                  <td className="border border-gray-300 px-4 py-3">Średnia (pomiędzy lowcost a premium)</td>
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
                  <td className="border border-gray-300 px-4 py-3">80% on-time</td>
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
            <p className="mb-2 font-bold text-blue-900">💡 Wiedeń (VIE) = kompaktowe lotnisko, mniej problemów z przesiadkami</p>
            <p className="mb-0 text-blue-800">
              W przeciwieństwie do ogromnych hubów Frankfurt czy Monachium, <strong>lotnisko w Wiedniu jest mniejsze i bardziej efektywne</strong>. 
              Minimalny czas przesiadki (MCT) to 25 minut — rzadziej przegapisz connection niż we FRA (45 min MCT).
            </p>
          </div>

          {/* FAQ Section */}
          <section className="my-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Przegapiłem przesiadkę w Wiedniu przez opóźnienie pierwszego odcinka — czy dostanę 600 €?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jeśli kupiłeś oba odcinki <strong>w jednej rezerwacji</strong> (np. WAW→VIE→BKK) i pierwszy lot 
                      (WAW→VIE) miał opóźnienie, przez co przegapiłeś drugi lot (VIE→BKK), a finalnie dotarłeś do Bangkoku ≥3h później niż 
                      planowano — należy Ci się odszkodowanie za <strong>całą trasę</strong> (WAW-BKK ~8400 km = <strong>600 €</strong>).
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Kluczowe: Oba loty muszą być w <em>jednej rezerwacji</em> (jeden booking reference/PNR). Jeśli kupiłeś je osobno 
                      — Austrian nie ponosi odpowiedzialności za przegapioną przesiadkę.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy Austrian Airlines wypłaci odszkodowanie na polskie konto bankowe?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak.</strong> Austrian Airlines wypłaca pieniądze przelewem SEPA na dowolne konto bankowe w Polsce (lub innym kraju UE). 
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
                  Ile czasu mam na złożenie reklamacji do Austrian Airlines?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot, który odbył się nawet 
                      2 lata i 11 miesięcy temu — Austrian Airlines musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Austrian Airlines twierdzi, że opóźnienie było spowodowane "problemami technicznymi" — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Według orzecznictwa TSUE (Trybunału Sprawiedliwości UE), <strong>zwykłe usterki techniczne NIE są 
                      nadzwyczajnymi okolicznościami</strong>. Linie lotnicze mają obowiązek utrzymywać flotę w sprawności technicznej.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jedynie <em>ukryta wada fabryczna</em> (defect producenta wykryta po raz pierwszy) może być uznana za nadzwyczajną okoliczność 
                      — ale Austrian musi to udowodnić dokumentami producenta.
                    </p>
                    <p className="mt-2">
                      <strong>Twoja odpowiedź:</strong> <em>"Żądam szczegółowego uzasadnienia technicznego i raportów serwisowych potwierdzających, 
                      że była to ukryta wada producenta, a nie efekt zwykłego zużycia eksploatacyjnego."</em>
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy mogę dostać odszkodowanie jeśli kupiłem bilet przez biuro podróży?
                  <span className="ml-2 text-red-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Roszczenie przysługuje <strong>pasażerowi (osobie lecącej)</strong>, nie kupującemu bilet. 
                      Nawet jeśli firma wykupiła bilety dla delegacji, to każdy uczestnik lotu ma prawo do indywidualnego odszkodowania 250-600 €.
                    </p>
                    <p className="mt-2">
                      Biuro podróży lub agent OTA (Booking.com, eDreams, Kiwi) <strong>nie wpływa na Twoje prawa</strong> — reklamujesz bezpośrednio 
                      do Austrian Airlines jako wykonawcy lotu.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Austrian Airlines — za darmo!</h2>
            <p className="text-xl mb-6 text-red-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Austrian Airlines <ArrowRight className="w-5 h-5" />
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
                <Link href="/blog/swiss-air-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Swiss Air odszkodowanie z Polski — kiedy należy się €600?
                </Link>
              </li>
              <li>
                <Link href="/blog/eurowings-odszkodowanie-polscy-pasazerowie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Eurowings odszkodowanie dla polskich pasażerów — przewodnik 2026
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
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}
