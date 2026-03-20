import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Globe, MapPin } from "lucide-react";

export default function QatarAirwaysOdwolaniePolska() {
  return (
    <Layout>
      <SEO 
        title="Qatar Airways odwołanie z Polski — prawa pasażera i odszkodowanie do 600 €"
        description="Sprawdź, kiedy Qatar Airways musi wypłacić odszkodowanie za odwołany lot z Polski. Przewodnik WE 261 dla połączeń przez Doha."
        url="https://problemlot.pl/blog/qatar-airways-odwolanie-polska"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Qatar Airways odwołanie z Polski — prawa pasażera i odszkodowanie do 600 €
          </h1>
          <p className="text-gray-600 text-lg">
            Kompleksowy przewodnik prawny: kiedy Qatar Airways musi wypłacić 600 € odszkodowania za odwołany lot z Polski
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
              Najważniejsze informacje o Qatar Airways i WE 261/2004
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Loty Z Polski</strong> (WAW→DOH) = ZAWSZE podlegają WE 261/2004</li>
              <li>❌ <strong>Loty DO Polski z Kataru</strong> (DOH→WAW) = NIE podlegają (Katar poza UE)</li>
              <li>✅ <strong>600 € odszkodowania</strong> za odwołanie (wszystkie trasy długodystansowe)</li>
              <li>⚠️ <strong>Hub Doha (DOH)</strong> — missed connections przy przesiadkach</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (prawo polskie)</li>
              <li>✅ <strong>72% skuteczności</strong> przy pomocy prawnej (QR często odmawia)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie Qatar Airways za 2 minuty</h3>
                <p className="mb-4 text-red-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za odwołany lot Qatar Airways z Polski.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie Qatar Airways <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Qatar Airways a rozporządzenie WE 261/2004 — KLUCZOWA zasada</h2>
          <p>
            <strong>Qatar Airways</strong> to narodowy przewoźnik Kataru (państwo POZA Unią Europejską). 
            Rozporządzenie WE 261/2004 stosuje się <strong>tylko do lotów WYLOTU z UE</strong>, nie do lotów PRZYLOTU do UE 
            z państw trzecich przez carrierów spoza UE.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              ⚠️ KLUCZOWA RÓŻNICA: Kierunek lotu decyduje o prawach!
            </p>
            <div className="space-y-3 text-yellow-800">
              <p className="mb-0">
                ✅ <strong>Lot Z Polski do Kataru/dalej</strong> (WAW→DOH, WAW→DOH→SIN) = <strong>PODLEGA WE 261/2004</strong><br/>
                → Odwołanie = prawo do odszkodowania 600 €
              </p>
              <p className="mb-0">
                ❌ <strong>Lot Z Kataru do Polski</strong> (DOH→WAW, SIN→DOH→WAW) = <strong>NIE PODLEGA WE 261/2004</strong><br/>
                → Brak prawa do odszkodowania (tylko zwrot/przekierowanie przy odwołaniu)
              </p>
              <p className="mb-0 font-bold text-red-700">
                💡 Ważne: Cała trasa (np. WAW→DOH→SIN) podlega WE 261, bo pierwszy odcinek startuje z UE!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Qatar Airways?</h2>
          <p>
            Wszystkie loty Qatar Airways z Polski to trasy <strong>długodystansowe &gt;3500 km</strong>, więc kwota odszkodowania jest ZAWSZE maksymalna:
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 text-2xl">💰 600 € na pasażera</p>
            <p className="mb-0 text-green-800">
              Dotyczy wszystkich tras Qatar Airways z Polski: WAW→DOH (bezpośrednio) lub WAW→DOH→[dalej] (Singapur, Bangkok, Sydney, Tokio, itp.)
            </p>
          </div>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Trasa</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Dystans</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Odszkodowanie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Doha</td>
                  <td className="border border-gray-300 px-4 py-3">~4100 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Singapur (via DOH)</td>
                  <td className="border border-gray-300 px-4 py-3">~9200 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Bangkok (via DOH)</td>
                  <td className="border border-gray-300 px-4 py-3">~8700 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Sydney (via DOH)</td>
                  <td className="border border-gray-300 px-4 py-3">~16200 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie za odwołany lot Qatar Airways?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            Odwołany lot Qatar Airways Z Polski
          </h3>
          <p>Qatar Airways musi wypłacić 600 € odszkodowania, jeśli:</p>
          <ul>
            <li>✅ <strong>Lot STARTOWAŁ z Polski</strong> (WAW)</li>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład: Odwołanie WAW→DOH→SIN</p>
            <p className="mb-2">
              <strong>Odwołany lot:</strong> Warszawa (WAW) → Doha (DOH) → Singapur (SIN)<br/>
              <strong>Powiadomienie:</strong> 5 dni przed odlotem<br/>
              <strong>Lot zastępczy:</strong> Następnego dnia, przylot 15h później<br/>
              <strong>Całkowity dystans:</strong> WAW-SIN ~9200 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">600 €</span> na pasażera
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ Lot POWROTNY DOH→WAW = brak odszkodowania WE 261!</p>
            <p className="mb-0 text-red-800">
              Jeśli <strong>lot powrotny</strong> z Kataru do Polski (DOH→WAW lub SIN→DOH→WAW) został odwołany, 
              <strong>NIE masz prawa do odszkodowania 600 €</strong> według WE 261/2004, bo lot startował spoza UE. 
              Masz tylko prawo do zwrotu pieniędzy lub lotu zamiennego.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Odwołanie krócej niż 14 dni — jakie masz prawa?</h2>
          
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Czas powiadomienia</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Lot zastępczy</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Odszkodowanie 600 €</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">≥14 dni</td>
                  <td className="border border-gray-300 px-4 py-3">Dowolny</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">❌ NIE</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">7-13 dni</td>
                  <td className="border border-gray-300 px-4 py-3">Wylot ≤2h wcześniej, przylot ≤4h później</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">❌ NIE</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">7-13 dni</td>
                  <td className="border border-gray-300 px-4 py-3">Gorszy (wylot &gt;2h wcześniej LUB przylot &gt;4h później)</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">✅ TAK</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">&lt;7 dni</td>
                  <td className="border border-gray-300 px-4 py-3">Wylot ≤1h wcześniej, przylot ≤2h później</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-red-600">❌ NIE</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">&lt;7 dni</td>
                  <td className="border border-gray-300 px-4 py-3">Gorszy (wylot &gt;1h wcześniej LUB przylot &gt;2h później)</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">✅ TAK</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Dowolny</td>
                  <td className="border border-gray-300 px-4 py-3">Brak lotu zastępczego</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-600">✅ TAK</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Qatar Airways NIE musi płacić?</h2>
          <p>
            Qatar Airways <strong>nie musi wypłacać odszkodowania</strong>, jeśli odwołanie wynikało z:
          </p>
          <ul>
            <li>❌ <strong>Ekstremalne warunki pogodowe</strong> (burza piaskowa w Zatoce Perskiej)</li>
            <li>❌ <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></li>
            <li>❌ <strong>Zagrożenie bezpieczeństwo</strong> (konflikt zbrojny w regionie)</li>
            <li>❌ <strong>Zamknięcie przestrzeni powietrznej</strong> (np. napięcie Iran-kraje Zatoki)</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Te sytuacje NIE są nadzwyczajnymi okolicznościami:</p>
            <ul className="mb-0 text-green-800">
              <li>✅ <strong>Usterka techniczna</strong> (awaria A350/Boeing 777/787)</li>
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, problemy z personelem)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu)</li>
              <li>✅ <strong>Bird strike</strong> (ptasie uderzenie — QR musi mieć procedury)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do Qatar Airways?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📧 <strong>Email od Qatar Airways o odwołaniu</strong></li>
            <li>📱 <strong>SMS z informacją o odwołaniu</strong></li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking)</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> (jeśli byłeś na lotnisku)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online</strong>: qatarairways.com → Contact Us → EU261 Compensation</li>
            <li>📧 <strong>Email</strong>: customercare@qatarairways.com.qa</li>
            <li>📬 <strong>Poczta</strong>: Qatar Airways Customer Care, P.O. Box 22550, Doha, Qatar</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Qatar Airways <strong>odpowiada zwykle w ciągu 6-10 tygodni</strong>. Jeśli zaakceptują roszczenie, 
              wypłata następuje w ciągu kolejnych 4-6 tygodni. Łączny czas: <strong>10-16 tygodni</strong> od złożenia reklamacji.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Qatar Airways odmówi?</h3>
          <p>Jeśli QR odrzuci Twoją reklamację:</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy mają 72-75% skuteczności z QR</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 75% szans na sukces z Qatar Airways</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z QR: <strong>12-14 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/odwolany-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Qatar Airways do ClaimWinger <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="my-12" itemScope itemType="https://schema.org/FAQPage">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy lot powrotny z Kataru do Polski (DOH→WAW) podlega WE 261/2004?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie.</strong> Lot powrotny DOH→WAW <strong>NIE podlega WE 261/2004</strong>, bo startuje spoza UE. 
                      Qatar Airways to carrier z Kataru (poza UE), więc brak odszkodowania. Masz tylko prawo do zwrotu pieniędzy 
                      lub lotu zamiennego przy odwołaniu.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Qatar Airways odwołał lot 10 dni przed wylotem — czy dostanę 600 €?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Zależy od lotu zastępczego.</strong> Jeśli QR zaproponował lot wylot ≤2h wcześniej i przylot ≤4h później 
                      niż planowano — <strong>brak odszkodowania</strong>. Jeśli gorszy lub brak lotu — należy się <strong>600 €</strong>.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Przykład: Planowany lot 10:00, zastępczy 7:30 (2h 30min wcześniej) = odszkodowanie TAK!
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji do Qatar Airways?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot sprzed 
                      2 lat i 11 miesięcy — Qatar Airways musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Qatar Airways oferuje voucher zamiast gotówki — czy muszę przyjąć?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Masz PRAWO do odszkodowania w <strong>gotówce</strong> (przelew bankowy). Qatar Airways 
                      często oferuje vouchery, ale możesz odmówić i żądać pieniędzy.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      ❌ Voucher = wygasa po 12 miesiącach, tylko na loty QR<br/>
                      ✅ Gotówka = 600 € na konto, do wydania na co chcesz
                    </p>
                    <p className="mt-2">
                      <strong>Twoja odpowiedź:</strong> <em>"Odmawiam vouchera. Żądam odszkodowania 600 € w gotówce przelewem 
                      bankowym zgodnie z art. 7 WE 261/2004."</em>
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Qatar Airways twierdzi, że była usterka techniczna — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Według orzecznictwa TSUE, <strong>zwykłe usterki techniczne NIE są nadzwyczajnymi okolicznościami</strong>. 
                      Linie mają obowiązek utrzymywać flotę w sprawności.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jedynie ukryta wada fabryczna (wykryta po raz pierwszy) może być nadzwyczajną okolicznością — ale QR musi to udowodnić.
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
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Qatar Airways — za darmo!</h2>
            <p className="text-xl mb-6 text-red-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Qatar Airways <ArrowRight className="w-5 h-5" />
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
                <Link href="/blog/turkish-airlines-odszkodowanie-polska-we261" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Turkish Airlines odszkodowanie z Polski — kiedy stosuje się WE 261?
                </Link>
              </li>
              <li>
                <Link href="/blog/emirates-opoznienie-warszawa-we261" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Emirates opóźnienie z Warszawy — czy WE 261 obowiązuje?
                </Link>
              </li>
              <li>
                <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Nadzwyczajne okoliczności — kiedy linie NIE muszą płacić?
                </Link>
              </li>
              <li>
                <Link href="/blog/odwolany-lot-historia-pasazera" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Historia pasażera: Jak wywalczyłem odszkodowanie za odwołany lot
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}
