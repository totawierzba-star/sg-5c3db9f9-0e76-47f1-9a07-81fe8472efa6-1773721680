import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Globe, MapPin } from "lucide-react";

export default function TurkishAirlinesOdszkodowniePolskaWe261() {
  return (
    <Layout>
      <SEO 
        title="Turkish Airlines odszkodowanie z Polski — kiedy stosuje się WE 261/2004?"
        description="Sprawdź, kiedy Turkish Airlines musi wypłacić odszkodowanie do 600 € za lot z Polski. Przewodnik WE 261 dla połączeń przez Stambuł."
        url="https://problemlot.pl/blog/turkish-airlines-odszkodowanie-polska-we261"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Turkish Airlines odszkodowanie z Polski — kiedy stosuje się WE 261/2004?
          </h1>
          <p className="text-gray-600 text-lg">
            Kompletny przewodnik prawny: kiedy Turkish Airlines musi wypłacić 250-600 € odszkodowania za lot z/przez Polskę
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            <span>Zaktualizowano: 10 marca 2026</span>
            <span>•</span>
            <span>Czas czytania: 9 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Featured Snippet Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold mb-3 mt-0 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              Najważniejsze informacje o Turkish Airlines i WE 261/2004
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Loty Z Polski</strong> (WAW→IST, KRK→IST) = ZAWSZE podlegają WE 261/2004</li>
              <li>❌ <strong>Loty DO Polski z Turcji</strong> (IST→WAW) = NIE podlegają (Turcja poza UE)</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie</li>
              <li>⚠️ <strong>Hub Stambuł (IST)</strong> — missed connections to częsty problem</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (prawo polskie)</li>
              <li>✅ <strong>75% skuteczności</strong> przy pomocy prawnej (TK często kwestionuje)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie Turkish Airlines za 2 minuty</h3>
                <p className="mb-4 text-red-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot Turkish Airlines.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie Turkish Airlines <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Turkish Airlines a rozporządzenie WE 261/2004 — KLUCZOWA zasada</h2>
          <p>
            <strong>Turkish Airlines</strong> to narodowy przewoźnik Turcji (państwo POZA Unią Europejską), co ma ogromne znaczenie 
            prawne. Rozporządzenie WE 261/2004 stosuje się <strong>tylko do lotów WYLOTU z UE</strong>, nie do lotów PRZYLOTU do UE 
            z państw trzecich.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ⚠️ KLUCZOWA RÓŻNICA: Kierunek lotu decyduje o wszystkim!
            </p>
            <div className="space-y-3 text-yellow-800">
              <p className="mb-0">
                ✅ <strong>Lot Z Polski do Turcji</strong> (np. WAW→IST, KRK→IST) = <strong>PODLEGA WE 261/2004</strong><br/>
                → Opóźnienie/odwołanie = prawo do odszkodowania 250-600 €
              </p>
              <p className="mb-0">
                ❌ <strong>Lot Z Turcji do Polski</strong> (np. IST→WAW, IST→KRK) = <strong>NIE PODLEGA WE 261/2004</strong><br/>
                → Brak prawa do odszkodowania (tylko zwrot/przekierowanie przy odwołaniu)
              </p>
              <p className="mb-0 font-bold text-red-700">
                💡 Wyjątek: Jeśli lecisz Z Polski do Azji/Ameryki z przesiadką w Stambule (np. WAW→IST→BKK), 
                cała trasa podlega WE 261, bo pierwszy odcinek startuje z UE!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Turkish Airlines?</h2>
          <p>
            Wysokość odszkodowania <strong>zależy wyłącznie od dystansu lotu</strong>, nie od ceny biletu:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Dystans lotu</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Kwota odszkodowania</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Przykładowe trasy Z Polski</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">do 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">—</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Stambuł (1570 km), Kraków→Stambuł (1480 km)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Bangkok (via IST), Kraków→Tokio (via IST)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Trasy długodystansowe z przesiadką w Stambule = 600 € odszkodowania!</p>
            <p className="mb-0 text-green-800">
              Jeśli lecisz z Polski do Azji/Ameryki/Afryki <strong>z przesiadką w Stambule</strong> (np. Warszawa → Stambuł → Bangkok), 
              odszkodowanie oblicza się na podstawie <strong>całkowitej odległości lotu</strong> (WAW-BKK ok. 8500 km = <strong>600 €</strong>), 
              nie osobno za każdy odcinek.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od Turkish Airlines?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot Turkish Airlines Z Polski
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Lot STARTOWAŁ z Polski</strong> (WAW, KRK, GDN, WRO, KTW, POZ)</li>
            <li>✅ <strong>Opóźnienie ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład 1: Opóźnienie na trasie WAW→IST</p>
            <p className="mb-2">
              <strong>Lot:</strong> Warszawa (WAW) → Stambuł (IST)<br/>
              <strong>Planowany przylot:</strong> 15:30<br/>
              <strong>Faktyczny przylot:</strong> 19:00<br/>
              <strong>Opóźnienie:</strong> 3h 30min<br/>
              <strong>Dystans:</strong> 1570 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">400 €</span> na pasażera
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład 2: Missed connection w Stambule</p>
            <p className="mb-2">
              <strong>Lot 1:</strong> Warszawa (WAW) → Stambuł (IST) — opóźnienie 1h 20min<br/>
              <strong>Lot 2:</strong> Stambuł (IST) → Bangkok (BKK) — przegapiony przez opóźnienie<br/>
              <strong>Następny lot:</strong> 8 godzin później<br/>
              <strong>Finalny przylot do Bangkoku:</strong> 9h 20min później niż planowano<br/>
              <strong>Całkowity dystans:</strong> WAW-BKK ~8500 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">600 €</span> na pasażera (maksymalna stawka!)
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot Turkish Airlines Z Polski
          </h3>
          <p>Turkish Airlines musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Lot STARTOWAŁ z Polski</strong></li>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ Lot POWROTNY IST→WAW = brak odszkodowania WE 261!</p>
            <p className="mb-0 text-red-800">
              Jeśli <strong>lot powrotny</strong> z Turcji do Polski (IST→WAW) został odwołany lub opóźniony, 
              <strong>NIE masz prawa do odszkodowania 400 €</strong> według WE 261/2004, bo lot startował spoza UE. 
              Masz tylko prawo do zwrotu pieniędzy za niewykorzystany bilet lub lotu zamiennego.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Turkish Airlines NIE musi płacić?</h2>
          <p>
            Turkish Airlines <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
          </p>
          <ul>
            <li>❌ <strong>Ekstremalne warunki pogodowe</strong> (burza piaskowa, gęsta mgła)</li>
            <li>❌ <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></li>
            <li>❌ <strong>Zagrożenie bezpieczeństwa</strong> (konflikt zbrojny, zagrożenie terrorystyczne)</li>
            <li>❌ <strong>Zamknięcie lotniska</strong> z powodów politycznych (np. zamach stanu w Turcji 2016)</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Te sytuacje NIE są nadzwyczajnymi okolicznościami:</p>
            <ul className="mb-0 text-green-800">
              <li>✅ <strong>Usterka techniczna</strong> (awaria samolotu, problem z silnikiem)</li>
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, strajk pracowników Turkish Airlines)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja)</li>
              <li>✅ <strong>Bird strike</strong> (ptasie uderzenie — linia musi mieć procedury)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do Turkish Airlines?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Karta pokładowa</strong> (boarding pass) dla OBUDWÓCH odcinków jeśli przesiadka</li>
            <li>📧 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> pokazującej opóźnienie</li>
            <li>💬 <strong>Komunikaty od Turkish Airlines</strong> (SMS, email)</li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online TK</strong>: turkishairlines.com → Contact Us → Compensation Request</li>
            <li>📧 <strong>Email</strong>: customerrelations@thy.com</li>
            <li>📬 <strong>Poczta</strong>: Turkish Airlines Customer Relations, Istanbul Airport, 34149 Istanbul, Turkey</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Turkish Airlines <strong>odpowiada zwykle w ciągu 6-12 tygodni</strong> (długi czas!). Jeśli zaakceptują roszczenie, 
              wypłata następuje w ciągu kolejnych 4-6 tygodni. Łączny czas: <strong>10-18 tygodni</strong> od złożenia reklamacji 
              — jeden z najdłuższych w branży.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Turkish Airlines odmówi?</h3>
          <p>Jeśli TK odrzuci Twoją reklamację:</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy odszkodowawcze mają 75-80% skuteczności z TK</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 78% szans na sukces z Turkish Airlines</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z TK: <strong>12-16 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Turkish Airlines do ClaimWinger <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Najpopularniejsze trasy Turkish Airlines z Polski</h2>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-red-700 mb-2">Warszawa (WAW) → Stambuł (IST)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1570 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>400 €</strong></li>
                <li>• Częstotliwość: 2-3 razy dziennie</li>
                <li>• ✅ Podlega WE 261/2004</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg">
              <p className="font-bold text-red-700 mb-2">Kraków (KRK) → Stambuł (IST)</p>
              <ul className="text-sm space-y-1">
                <li>• Dystans: ~1480 km</li>
                <li>• Odszkodowanie za opóźnienie ≥3h: <strong>250 €</strong></li>
                <li>• Częstotliwość: 1 raz dziennie</li>
                <li>• ✅ Podlega WE 261/2004</li>
              </ul>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Popularne trasy długodystansowe z przesiadką w IST:</h3>
          <ul>
            <li>🌏 <strong>Warszawa → Bangkok</strong> (via IST) — 8500 km = <strong>600 € odszkodowania</strong></li>
            <li>🌏 <strong>Warszawa → Tokio</strong> (via IST) — 8900 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Kraków → Nowy Jork</strong> (via IST) — 8100 km = <strong>600 € odszkodowania</strong></li>
            <li>🌍 <strong>Warszawa → Singapur</strong> (via IST) — 9100 km = <strong>600 € odszkodowania</strong></li>
          </ul>

          {/* FAQ Section */}
          <section className="my-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy lot powrotny z Turcji do Polski (IST→WAW) podlega WE 261/2004?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie.</strong> Lot powrotny z Turcji do Polski <strong>NIE podlega WE 261/2004</strong>, bo startuje 
                      spoza Unii Europejskiej. Rozporządzenie stosuje się tylko do:
                    </p>
                    <ul className="mt-2 space-y-1">
                      <li>✅ Lotów WYLOTU z UE (dowolny carrier)</li>
                      <li>✅ Lotów PRZYLOTU do UE przez carrierów UE (np. LOT, Lufthansa)</li>
                    </ul>
                    <p className="mt-2">
                      Turkish Airlines to carrier turecki (poza UE), więc lot IST→WAW = brak odszkodowania WE 261. 
                      Masz tylko prawo do zwrotu pieniędzy lub lotu zamiennego przy odwołaniu.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Przegapiłem przesiadkę w Stambule przez opóźnienie pierwszego odcinka — czy dostanę 600 €?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jeśli kupiłeś oba odcinki <strong>w jednej rezerwacji</strong> (np. WAW→IST→BKK) i pierwszy lot 
                      miał opóźnienie, przez co przegapiłeś drugi lot, a finalnie dotarłeś ≥3h później — należy Ci się odszkodowanie 
                      za <strong>całą trasę</strong>.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Przykład: WAW→IST→BKK (8500 km, finalnie 6h opóźnienia) = <strong>600 €</strong>
                    </p>
                    <p className="mt-2">
                      <strong>Uwaga:</strong> Oba loty muszą być w jednej rezerwacji (jeden PNR). Jeśli kupiłeś je osobno — brak odpowiedzialności TK.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy Turkish Airlines wypłaci odszkodowanie na polskie konto bankowe?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak.</strong> Turkish Airlines wypłaca pieniądze przelewem SWIFT na dowolne konto bankowe w Polsce. 
                      Kwota jest zawsze w <strong>euro</strong> — Twój bank wymieni ją na złotówki według kursu z dnia realizacji.
                    </p>
                    <p className="mt-2">
                      <strong>Przykład:</strong> Odszkodowanie 400 € przy kursie 4.30 PLN = <strong>~1720 PLN</strong> na Twoim koncie.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji do Turkish Airlines?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot sprzed 
                      2 lat i 11 miesięcy — Turkish Airlines musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Turkish Airlines twierdzi, że była usterka techniczna — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Według orzecznictwa TSUE, <strong>zwykłe usterki techniczne NIE są nadzwyczajnymi okolicznościami</strong>. 
                      Linie mają obowiązek utrzymywać flotę w sprawności.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jedynie ukryta wada fabryczna (wykryta po raz pierwszy) może być nadzwyczajną okolicznością — ale TK musi to udowodnić.
                    </p>
                    <p className="mt-2">
                      <strong>Twoja odpowiedź:</strong> <em>"Żądam szczegółowego uzasadnienia technicznego i raportów serwisowych 
                      potwierdzających ukrytą wadę producenta, nie zwykłe zużycie."</em>
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Turkish Airlines — za darmo!</h2>
            <p className="text-xl mb-6 text-red-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Turkish Airlines <ArrowRight className="w-5 h-5" />
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
                <Link href="/blog/emirates-opoznienie-warszawa-we261" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Emirates opóźnienie z Warszawy — czy WE 261 obowiązuje?
                </Link>
              </li>
              <li>
                <Link href="/blog/qatar-airways-odwolanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Qatar Airways odwołanie z Polski — prawa pasażera
                </Link>
              </li>
              <li>
                <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Nadzwyczajne okoliczności — kiedy linie NIE muszą płacić?
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
