import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, Globe } from "lucide-react";

export default function EmiratesOpoznienieWarszawaWe261() {
  return (
    <Layout>
      <SEO 
        title="Emirates opóźnienie z Warszawy — czy WE 261/2004 obowiązuje?"
        description="Sprawdź, kiedy Emirates musi wypłacić odszkodowanie za lot z Warszawy. Przewodnik WE 261 dla połączeń przez Dubaj."
        url="https://problemlot.pl/blog/emirates-opoznienie-warszawa-we261"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Emirates opóźnienie z Warszawy — czy WE 261/2004 obowiązuje?
          </h1>
          <p className="text-gray-600 text-lg">
            Kompleksowy przewodnik prawny: kiedy Emirates musi wypłacić 600 € odszkodowania za lot z Warszawy
          </p>
          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            <span>Zaktualizowano: 10 marca 2026</span>
            <span>•</span>
            <span>Czas czytania: 8 min</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* Featured Snippet Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <h2 className="text-xl font-bold mb-3 mt-0 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              Najważniejsze informacje o Emirates i WE 261/2004
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Loty Z Warszawy</strong> (WAW→DXB) = ZAWSZE podlegają WE 261/2004</li>
              <li>❌ <strong>Loty DO Warszawy z Dubaju</strong> (DXB→WAW) = NIE podlegają (ZEA poza UE)</li>
              <li>✅ <strong>600 € odszkodowania</strong> za opóźnienie ≥3h (długodystansowe)</li>
              <li>⚠️ <strong>Hub Dubaj (DXB)</strong> — missed connections przy przesiadkach</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (prawo polskie)</li>
              <li>✅ <strong>70% skuteczności</strong> przy pomocy prawnej (Emirates często odmawia)</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie Emirates za 2 minuty</h3>
                <p className="mb-4 text-red-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot Emirates z Warszawy.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie Emirates <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Emirates a rozporządzenie WE 261/2004 — KLUCZOWA zasada</h2>
          <p>
            <strong>Emirates</strong> to narodowy przewoźnik Zjednoczonych Emiratów Arabskich (państwo POZA Unią Europejską). 
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
                ✅ <strong>Lot Z Warszawy do Dubaju/dalej</strong> (WAW→DXB, WAW→DXB→BKK) = <strong>PODLEGA WE 261/2004</strong><br/>
                → Opóźnienie/odwołanie = prawo do odszkodowania 600 €
              </p>
              <p className="mb-0">
                ❌ <strong>Lot Z Dubaju do Warszawy</strong> (DXB→WAW, BKK→DXB→WAW) = <strong>NIE PODLEGA WE 261/2004</strong><br/>
                → Brak prawa do odszkodowania (tylko zwrot/przekierowanie przy odwołaniu)
              </p>
              <p className="mb-0 font-bold text-red-700">
                💡 Ważne: Cała trasa (np. WAW→DXB→BKK) podlega WE 261, bo pierwszy odcinek startuje z UE!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Emirates?</h2>
          <p>
            Wszystkie loty Emirates z Warszawy to trasy <strong>długodystansowe &gt;3500 km</strong>, więc kwota odszkodowania jest ZAWSZE maksymalna:
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 text-2xl">💰 600 € na pasażera</p>
            <p className="mb-0 text-green-800">
              Dotyczy wszystkich tras Emirates z Warszawy: WAW→DXB (bezpośrednio) lub WAW→DXB→[dalej] (Bangkok, Singapur, Sydney, itp.)
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
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Dubaj</td>
                  <td className="border border-gray-300 px-4 py-3">~4200 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Bangkok (via DXB)</td>
                  <td className="border border-gray-300 px-4 py-3">~8300 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Singapur (via DXB)</td>
                  <td className="border border-gray-300 px-4 py-3">~9500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">Warszawa→Sydney (via DXB)</td>
                  <td className="border border-gray-300 px-4 py-3">~15800 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od Emirates?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot Emirates Z Warszawy
          </h3>
          <p>Prawo do odszkodowania 600 € powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Lot STARTOWAŁ z Warszawy</strong> (WAW)</li>
            <li>✅ <strong>Opóźnienie ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2">📊 Przykład: Opóźnienie WAW→DXB→BKK</p>
            <p className="mb-2">
              <strong>Lot 1:</strong> Warszawa (WAW) → Dubaj (DXB) — opóźnienie 2 godz<br/>
              <strong>Lot 2:</strong> Dubaj (DXB) → Bangkok (BKK) — przegapiony przez opóźnienie<br/>
              <strong>Następny lot:</strong> 6 godzin później<br/>
              <strong>Finalny przylot do Bangkoku:</strong> 8 godzin później niż planowano<br/>
              <strong>Całkowity dystans:</strong> WAW-BKK ~8300 km
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">600 €</span> na pasażera
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot Emirates Z Warszawy
          </h3>
          <p>Emirates musi wypłacić 600 € odszkodowania, jeśli:</p>
          <ul>
            <li>✅ <strong>Lot STARTOWAŁ z Warszawy</strong></li>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-red-900">❌ Lot POWROTNY DXB→WAW = brak odszkodowania WE 261!</p>
            <p className="mb-0 text-red-800">
              Jeśli <strong>lot powrotny</strong> z Dubaju do Warszawy (DXB→WAW lub BKK→DXB→WAW) został opóźniony/odwołany, 
              <strong>NIE masz prawa do odszkodowania 600 €</strong> według WE 261/2004, bo lot startował spoza UE. 
              Masz tylko prawo do zwrotu pieniędzy lub lotu zamiennego.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Emirates NIE musi płacić?</h2>
          <p>
            Emirates <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
          </p>
          <ul>
            <li>❌ <strong>Ekstremalne warunki pogodowe</strong> (burza piaskowa w Dubaju, cyklon)</li>
            <li>❌ <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></li>
            <li>❌ <strong>Zagrożenie bezpieczeństwa</strong> (konflikt zbrojny w regionie)</li>
            <li>❌ <strong>Zamknięcie przestrzeni powietrznej</strong> (np. napięcie Iran-USA)</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Te sytuacje NIE są nadzwyczajnymi okolicznościami:</p>
            <ul className="mb-0 text-green-800">
              <li>✅ <strong>Usterka techniczna</strong> (awaria samolotu A380/Boeing 777)</li>
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, problemy z personelem)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja)</li>
              <li>✅ <strong>Bird strike</strong> (ptasie uderzenie — Emirates musi mieć procedury)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do Emirates?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Karta pokładowa</strong> dla OBUDWÓCH odcinków jeśli przesiadka</li>
            <li>📧 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> z opóźnieniem</li>
            <li>💬 <strong>Komunikaty od Emirates</strong> (SMS, email)</li>
            <li>🎫 <strong>Nowy boarding pass</strong> (jeśli było rebooking)</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online</strong>: emirates.com → Contact Us → Compensation Claim</li>
            <li>📧 <strong>Email</strong>: customeraffairs@emirates.com</li>
            <li>📬 <strong>Poczta</strong>: Emirates Customer Affairs, P.O. Box 686, Dubai, UAE</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Emirates <strong>odpowiada zwykle w ciągu 8-16 tygodni</strong> (bardzo długi czas!). Jeśli zaakceptują roszczenie, 
              wypłata następuje w ciągu kolejnych 4-6 tygodni. Łączny czas: <strong>12-22 tygodnie</strong> — jeden z najdłuższych 
              w branży.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Emirates odmówi?</h3>
          <p>Jeśli Emirates odrzuci Twoją reklamację:</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy mają 70-75% skuteczności z Emirates</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 73% szans na sukces z Emirates</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z Emirates: <strong>14-18 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Emirates do ClaimWinger <ArrowRight className="w-5 h-5" />
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
                  Czy lot powrotny z Dubaju do Warszawy (DXB→WAW) podlega WE 261/2004?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie.</strong> Lot powrotny DXB→WAW <strong>NIE podlega WE 261/2004</strong>, bo startuje spoza UE. 
                      Emirates to carrier z ZEA (poza UE), więc brak odszkodowania. Masz tylko prawo do zwrotu pieniędzy lub lotu 
                      zamiennego przy odwołaniu.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Przegapiłem przesiadkę w Dubaju — czy dostanę 600 €?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jeśli kupiłeś oba odcinki w jednej rezerwacji (np. WAW→DXB→BKK) i pierwszy lot miał opóźnienie, 
                      przez co przegapiłeś drugi lot, a finalnie dotarłeś ≥3h później — należy Ci się <strong>600 €</strong> za całą trasę.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Kluczowe: Oba loty muszą być w jednej rezerwacji (jeden PNR). Jeśli kupiłeś je osobno — brak odpowiedzialności Emirates.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji do Emirates?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot sprzed 
                      2 lat i 11 miesięcy — Emirates musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Emirates twierdzi, że była burza piaskowa w Dubaju — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Zależy od intensywności.</strong> Ekstremalne burze piaskowe uniemożliwiające start/lądowanie = nadzwyczajna 
                      okoliczność. Ale typowa burza piaskowa (częsta w ZEA) = NIE.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Żądaj oficjalnych raportów METAR z lotniska DXB potwierdzających zamknięcie operacji + dowodów, że inne loty 
                      też były odwołane.
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Emirates — za darmo!</h2>
            <p className="text-xl mb-6 text-red-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Emirates <ArrowRight className="w-5 h-5" />
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
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}