import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Palmtree } from "lucide-react";

export default function SmartwingsOdszkodownieCzarterWe261() {
  return (
    <Layout>
      <SEO 
        title="Smartwings odszkodowanie — czarter wakacyjny a WE 261/2004 (2026)"
        description="Sprawdź, czy czarter wakacyjny Smartwings podlega WE 261. Przewodnik odszkodowań za loty czarterowe 250-600 € z Polski."
        url="https://problemlot.pl/blog/smartwings-odszkodowanie-czarter-we261"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Smartwings odszkodowanie — czarter wakacyjny a WE 261/2004
          </h1>
          <p className="text-gray-600 text-lg">
            Kompleksowy przewodnik prawny: czy loty czarterowe Smartwings podlegają WE 261 i kiedy należy się odszkodowanie 250-600 €
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
              Najważniejsze informacje o Smartwings i WE 261/2004
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Czarter Smartwings = PODLEGA WE 261/2004</strong> (bez znaczenia czy pakiet czy osobny bilet)</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie</li>
              <li>✅ <strong>Carrier europejski</strong> (Czechy = UE) — full ochrona WE 261</li>
              <li>⚠️ <strong>Biuro podróży NIE odpowiada</strong> za odszkodowanie — to obowiązek linii</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (prawo polskie)</li>
              <li>✅ <strong>82% skuteczności</strong> przy pomocy prawnej (Smartwings często płaci)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie Smartwings za 2 minuty</h3>
                <p className="mb-4 text-red-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot czarterowy Smartwings.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie Smartwings <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Czy czarter Smartwings podlega WE 261/2004?</h2>
          
          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 text-xl">✅ TAK! Czarter Smartwings ZAWSZE podlega WE 261/2004</p>
            <p className="mb-0 text-green-800">
              <strong>Smartwings</strong> to czechy carrier (UE), więc <strong>wszystkie loty z/do UE podlegają WE 261</strong> — bez względu 
              na to, czy kupiłeś bilet bezpośrednio, przez biuro podróży, czy w pakiecie wakacyjnym all-inclusive. Prawa pasażera są 
              IDENTYCZNE jak przy regularnych lotach linii europejskich.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Najczęstsze mity o czarterach:</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-red-600 bg-red-50 p-4">
              <p className="font-bold text-red-900 mb-1">❌ MIT: "Czarter nie podlega WE 261"</p>
              <p className="mb-0 text-red-800">
                <strong>FAŁSZ!</strong> Smartwings to carrier europejski — wszystkie loty podlegają WE 261, zarówno czarter jak i regularne.
              </p>
            </div>

            <div className="border-l-4 border-red-600 bg-red-50 p-4">
              <p className="font-bold text-red-900 mb-1">❌ MIT: "Biuro podróży musi wypłacić odszkodowanie"</p>
              <p className="mb-0 text-red-800">
                <strong>FAŁSZ!</strong> Odszkodowanie WE 261 to obowiązek LINII LOTNICZEJ (Smartwings), nie biura podróży. 
                Biuro odpowiada tylko za całość pakietu wakacyjnego (hotel, ubezpieczenie).
              </p>
            </div>

            <div className="border-l-4 border-red-600 bg-red-50 p-4">
              <p className="font-bold text-red-900 mb-1">❌ MIT: "Pakiet all-inclusive = brak odszkodowania"</p>
              <p className="mb-0 text-red-800">
                <strong>FAŁSZ!</strong> Nawet jeśli kupiłeś pakiet (lot + hotel), masz prawo do odszkodowania 250-600 € DODATKOWO 
                do zwrotu kosztów wakacji przez biuro podróży.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Smartwings?</h2>
          <p>
            Wysokość odszkodowania <strong>zależy wyłącznie od dystansu lotu</strong>, nie od ceny biletu ani tego, czy to czarter:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Dystans lotu</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Kwota odszkodowania</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Przykładowe trasy czarterowe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">do 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Burgas, Katowice→Split</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Rodos, Kraków→Hurghada, Gdańsk→Antalya</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Dominikana, Kraków→Zanzibar</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2 flex items-center gap-2">
              <Palmtree className="w-6 h-6 text-blue-600" />
              📊 Przykład: Czarter do Turcji z Polski
            </p>
            <p className="mb-2">
              <strong>Lot:</strong> Warszawa (WAW) → Antalya (AYT)<br/>
              <strong>Pakiet:</strong> 7 dni all-inclusive (lot + hotel + transfer)<br/>
              <strong>Planowany powrót:</strong> Sobota 18:00<br/>
              <strong>Faktyczny powrót:</strong> Niedziela 01:30 (7h 30min opóźnienia)<br/>
              <strong>Dystans:</strong> 2100 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">400 €</span> na pasażera (rodzina 4 osoby = 1600 €!)
            </p>
            <p className="mt-2 text-sm text-blue-800">
              ✅ + Zwrot kosztów niewykorzystanego dnia hotelu przez biuro podróży (niezależnie od odszkodowania WE 261)
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od Smartwings?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot czarterowy Smartwings
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Opóźnienie ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Lot startował z UE lub lądował w UE</strong></li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot czarterowy Smartwings
          </h3>
          <p>Smartwings musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Biuro podróży vs Smartwings — kto za co odpowiada?</p>
            <div className="space-y-2 text-yellow-800">
              <p className="mb-0">
                <strong>Smartwings (linia)</strong> wypłaca odszkodowanie WE 261 (250-600 €) za opóźnienie/odwołanie
              </p>
              <p className="mb-0">
                <strong>Biuro podróży</strong> (TUI, Itaka, Rainbow) zwraca koszty niewykorzystanej części pakietu (hotel, wycieczki) 
                i może wypłacić odszkodowanie za zmarnowane wakacje (odrębne roszczenie, nie WE 261)
              </p>
              <p className="mb-0 font-bold text-red-700">
                💡 To dwa NIEZALEŻNE roszczenia! Możesz dostać pieniądze OD OBUDWÓCH — od Smartwings za lot i od biura za pakiet.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Smartwings NIE musi płacić?</h2>
          <p>
            Smartwings <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
          </p>
          <ul>
            <li>❌ <strong>Ekstremalne warunki pogodowe</strong> (huragan, gęsta mgła uniemożliwiająca lądowanie)</li>
            <li>❌ <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></li>
            <li>❌ <strong>Zagrożenie bezpieczeństwa</strong> (konflikt zbrojny, zagrożenie terrorystyczne)</li>
            <li>❌ <strong>Zamknięcie lotniska</strong> z powodów politycznych</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Te sytuacje NIE są nadzwyczajnymi okolicznościami:</p>
            <ul className="mb-0 text-green-800">
              <li>✅ <strong>Usterka techniczna</strong> (awaria samolotu, problem z silnikiem)</li>
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, problemy kadrowe)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja)</li>
              <li>✅ <strong>Strajk pracowników Smartwings</strong> (kabinowych, pilotów)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację za lot czarterowy Smartwings?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Voucher/potwierdzenie rezerwacji</strong> od biura podróży z numerem lotu</li>
            <li>🎫 <strong>Karta pokładowa</strong> (boarding pass)</li>
            <li>📧 <strong>Email od biura/linii</strong> o opóźnieniu/odwołaniu</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> z opóźnieniem</li>
            <li>💬 <strong>Komunikaty SMS</strong> od Smartwings</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację BEZPOŚREDNIO do Smartwings (NIE do biura!)</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online</strong>: smartwings.com → Customer Care → EU261 Compensation</li>
            <li>📧 <strong>Email</strong>: compensation@smartwings.com</li>
            <li>📬 <strong>Poczta</strong>: Smartwings a.s., Customer Relations, K letišti 1068/30, 160 08 Praha 6, Czech Republic</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Smartwings <strong>odpowiada zwykle w ciągu 4-8 tygodni</strong>. Jeśli zaakceptują roszczenie, 
              wypłata następuje w ciągu kolejnych 2-4 tygodni. Łączny czas: <strong>6-12 tygodni</strong> — jeden z najszybszych 
              czasów w branży czarterowej.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Smartwings odmówi?</h3>
          <p>Jeśli Smartwings odrzuci Twoją reklamację:</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy mają 82% skuteczności ze Smartwings</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 85% szans na sukces ze Smartwings</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty ze Smartwings: <strong>8-10 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Smartwings do ClaimWinger <ArrowRight className="w-5 h-5" />
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
                  Kupiłem pakiet all-inclusive przez TUI — czy mogę dostać odszkodowanie od Smartwings?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Nawet jeśli kupiłeś pakiet wakacyjny przez biuro podróży, masz prawo do odszkodowania 
                      WE 261 <strong>bezpośrednio od Smartwings</strong>. Biuro podróży odpowiada za hotel/transfer, linia za lot.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Możesz dostać pieniądze OD OBUDWÓCH: 400 € od Smartwings za opóźnienie + zwrot kosztów hotelu od TUI.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Lot powrotny z Turcji do Polski był opóźniony — czy należy się odszkodowanie?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Smartwings to czechy carrier (UE), więc <strong>WSZYSTKIE loty podlegają WE 261</strong> 
                      — zarówno wylot z Polski do Turcji, jak i powrót z Turcji do Polski.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot powrotny AYT→WAW opóźniony ≥3h = 400 € odszkodowania (dystans ~2100 km)
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji za lot czarterowy Smartwings?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować czarter 
                      sprzed 2 lat i 11 miesięcy — Smartwings musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Czarter wakacyjny z lipca 2023 → możesz reklamować do czerwca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Smartwings twierdzi, że była usterka techniczna — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Według orzecznictwa TSUE, <strong>zwykłe usterki techniczne NIE są nadzwyczajnymi okolicznościami</strong>. 
                      Linie mają obowiązek utrzymywać flotę w sprawności.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jedynie ukryta wada fabryczna (wykryta po raz pierwszy) może być nadzwyczajną okolicznością — ale Smartwings musi to udowodnić.
                    </p>
                    <p className="mt-2">
                      <strong>Twoja odpowiedź:</strong> <em>"Żądam szczegółowego uzasadnienia technicznego i raportów serwisowych 
                      potwierdzających ukrytą wadę producenta, nie zwykłe zużycie."</em>
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Leciałem rodziną 4 osoby — każdy dostanie 400 €?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Odszkodowanie WE 261 przysługuje <strong>każdemu pasażerowi indywidualnie</strong>, 
                      niezależnie od tego, czy to rodzina czy grupa.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Przykład: Rodzina 4 osoby, lot Warszawa-Antalya opóźniony 5h = <strong>4 × 400 € = 1600 €</strong> łącznie!
                    </p>
                    <p className="mt-2 text-sm">
                      Dotyczy także niemowląt (infant) z biletem — jeśli dziecko ma kartę pokładową, należy się odszkodowanie.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Smartwings — za darmo!</h2>
            <p className="text-xl mb-6 text-red-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Smartwings <ArrowRight className="w-5 h-5" />
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
                <Link href="/blog/enter-air-odszkodowanie-czarter" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Enter Air odszkodowanie — czarter wakacyjny a WE 261
                </Link>
              </li>
              <li>
                <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Nadzwyczajne okoliczności — kiedy linie NIE muszą płacić?
                </Link>
              </li>
              <li>
                <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Jak złożyć wniosek o odszkodowanie — przewodnik krok po kroku
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}
