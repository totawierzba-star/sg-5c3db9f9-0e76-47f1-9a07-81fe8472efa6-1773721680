import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, Clock, XCircle, Plane, Calculator, MapPin } from "lucide-react";

export default function Jet2OdszkodowniePolska() {
  return (
    <Layout>
      <SEO 
        title="Jet2 odszkodowanie dla polskich pasażerów — przewodnik 2026"
        description="Sprawdź jak uzyskać 250-600 € odszkodowania od Jet2 za opóźniony lub odwołany lot z Polski. Przewodnik WE 261/2004."
        url="https://problemlot.pl/blog/jet2-odszkodowanie-polska"
      />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm mb-4 inline-flex items-center gap-1">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            Jet2 odszkodowanie dla polskich pasażerów — przewodnik 2026
          </h1>
          <p className="text-gray-600 text-lg">
            Kompleksowy przewodnik prawny: jak uzyskać 250-600 € odszkodowania od Jet2 za opóźniony lub odwołany lot z Polski
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
              Najważniejsze informacje o Jet2 i WE 261/2004
            </h2>
            <ul className="mb-0 space-y-2">
              <li>✅ <strong>Jet2 = brytyjski carrier</strong> — UK261 + EU261 obowiązuje (loty z/do Polski)</li>
              <li>✅ <strong>250-600 € odszkodowania</strong> za opóźnienie ≥3h lub odwołanie</li>
              <li>✅ <strong>Główne trasy z Polski</strong>: Kraków, Gdańsk, Katowice → UK (Manchester, Birmingham, Leeds)</li>
              <li>✅ <strong>Termin: 3 lata</strong> wstecz od daty lotu (prawo polskie)</li>
              <li>✅ <strong>79% skuteczności</strong> przy pomocy prawnej (Jet2 zazwyczaj szybko płaci)</li>
              <li>⚠️ <strong>Brexit</strong>: UK261 = prawie identyczne prawa jak EU261</li>
            </ul>
          </div>

          {/* Kalkulator CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl mb-8 shadow-xl">
            <div className="flex items-start gap-4">
              <Calculator className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Sprawdź swoje odszkodowanie Jet2 za 2 minuty</h3>
                <p className="mb-4 text-red-100 text-lg">
                  Bezpłatny kalkulator — dowiedz się, ile pieniędzy możesz dostać za opóźniony lub odwołany lot Jet2 z Polski.
                </p>
                <a 
                  href="https://claimwinger.com/pl" 
                  className="inline-flex items-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Sprawdź odszkodowanie Jet2 <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jet2 a rozporządzenie WE 261/2004 po Brexicie</h2>
          <p>
            <strong>Jet2</strong> to brytyjski przewoźnik czarterowy i lowcost z UK. Po Brexicie (2021) Wielka Brytania 
            wdrożyła własne rozporządzenie <strong>UK261</strong>, które jest niemal identyczne z EU261/2004.
          </p>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900 text-xl">✅ Loty Jet2 z/do Polski = PEŁNA OCHRONA</p>
            <div className="space-y-2 text-green-800">
              <p className="mb-0">
                ✅ <strong>Loty Z Polski do UK</strong> (KRK→MAN, GDN→LBA) = <strong>EU261 obowiązuje</strong><br/>
                → Carrier europejski startujący z UE = pełne prawa pasażera
              </p>
              <p className="mb-0">
                ✅ <strong>Loty Z UK do Polski</strong> (MAN→KRK, LBA→GDN) = <strong>UK261 obowiązuje</strong><br/>
                → Praktycznie identyczne prawa jak EU261 (250-600 €)
              </p>
              <p className="mb-0 font-bold text-blue-700">
                💡 Brexit nie zmienił Twoich praw — Jet2 musi płacić odszkodowania tak samo jak przed 2021!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Ile można dostać odszkodowania od Jet2?</h2>
          <p>
            Wysokość odszkodowania <strong>zależy wyłącznie od dystansu lotu</strong>:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left">Dystans lotu</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Kwota odszkodowania</th>
                  <th className="border border-gray-300 px-4 py-3 text-left">Przykładowe trasy Jet2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">do 1500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">250 €</td>
                  <td className="border border-gray-300 px-4 py-3">Kraków→Birmingham, Gdańsk→Leeds</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3">1500-3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">400 €</td>
                  <td className="border border-gray-300 px-4 py-3">Kraków→Tenerife, Katowice→Malaga</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3">powyżej 3500 km</td>
                  <td className="border border-gray-300 px-4 py-3 font-bold text-green-700">600 €</td>
                  <td className="border border-gray-300 px-4 py-3">Rzadko (Jet2 głównie short/medium-haul)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <p className="font-bold mb-2 flex items-center gap-2">
              <Plane className="w-6 h-6 text-blue-600" />
              📊 Przykład: Lot Kraków–Manchester Jet2
            </p>
            <p className="mb-2">
              <strong>Trasa:</strong> Kraków (KRK) → Manchester (MAN)<br/>
              <strong>Opóźnienie:</strong> 4 godziny 15 minut<br/>
              <strong>Dystans:</strong> ~1800 km<br/>
              <strong>Powód:</strong> Usterka techniczna Boeing 737
            </p>
            <p className="mb-0 font-bold text-blue-700">
              💰 Odszkodowanie: <span className="text-2xl">400 €</span> na pasażera (rodzina 4 osoby = 1600 €!)
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Kiedy przysługuje odszkodowanie od Jet2?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <Clock className="w-6 h-6 text-blue-600" />
            1. Opóźniony lot Jet2
          </h3>
          <p>Prawo do odszkodowania powstaje, gdy:</p>
          <ul>
            <li>✅ <strong>Opóźnienie ≥3 godziny</strong> (czas przylotu do miejsca docelowego)</li>
            <li>✅ <strong>Lot startował z Polski lub lądował w Polsce</strong></li>
            <li>✅ <strong>Opóźnienie nie wynikało z nadzwyczajnych okoliczności</strong></li>
            <li>✅ <strong>Lot odbył się w ciągu ostatnich 3 lat</strong></li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6 flex items-center gap-2">
            <XCircle className="w-6 h-6 text-red-600" />
            2. Odwołany lot Jet2
          </h3>
          <p>Jet2 musi wypłacić odszkodowanie, jeśli:</p>
          <ul>
            <li>✅ <strong>Odwołanie nastąpiło krócej niż 14 dni przed odlotem</strong></li>
            <li>✅ <strong>Nie zaproponowano lotu zamiennego</strong> lub lot zastępczy był znacznie gorszy</li>
            <li>✅ <strong>Przyczyna nie była nadzwyczajną okolicznością</strong></li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⚠️ Jet2 czarter wakacyjny — pakiet vs osobny bilet</p>
            <p className="mb-0 text-yellow-800">
              Jet2 latają głównie czartery wakacyjne (TUI, Thomas Cook). <strong>Bez znaczenia czy kupiłeś pakiet czy osobny bilet</strong> 
              — odszkodowanie WE 261 przysługuje ZAWSZE. Biuro podróży odpowiada za hotel/transfer, Jet2 za lot.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Nadzwyczajne okoliczności — kiedy Jet2 NIE musi płacić?</h2>
          <p>
            Jet2 <strong>nie musi wypłacać odszkodowania</strong>, jeśli opóźnienie/odwołanie wynikało z:
          </p>
          <ul>
            <li>❌ <strong>Ekstremalne warunki pogodowe</strong> (gęsta mgła nad UK, burza śnieżna)</li>
            <li>❌ <strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></li>
            <li>❌ <strong>Zagrożenie bezpieczeństwa</strong> (zagrożenie terrorystyczne na lotnisku)</li>
            <li>❌ <strong>Zamknięcie lotniska</strong> z powodów politycznych</li>
          </ul>

          <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-green-900">✅ Te sytuacje NIE są nadzwyczajnymi okolicznościami:</p>
            <ul className="mb-0 text-green-800">
              <li>✅ <strong>Usterka techniczna</strong> (awaria Boeing 737, problem z silnikiem)</li>
              <li>✅ <strong>Brak załogi</strong> (choroba pilota, problemy kadrowe)</li>
              <li>✅ <strong>Problemy operacyjne</strong> (opóźnienie poprzedniego lotu, rotacja samolotu)</li>
              <li>✅ <strong>Strajk pracowników Jet2</strong> (kabinowych, pilotów, inżynierów)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold mb-4 mt-8">Jak złożyć reklamację do Jet2?</h2>
          
          <h3 className="text-xl font-bold mb-3 mt-6">Krok 1: Zbierz dowody</h3>
          <ul>
            <li>📄 <strong>Potwierdzenie rezerwacji</strong> z numerem lotu i datą</li>
            <li>🎫 <strong>Karta pokładowa</strong> (boarding pass)</li>
            <li>📧 <strong>Email od Jet2/biura</strong> o opóźnieniu/odwołaniu</li>
            <li>📸 <strong>Zdjęcie tablicy odlotów</strong> z opóźnieniem</li>
            <li>💬 <strong>SMS</strong> od Jet2 z powiadomieniem</li>
          </ul>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 2: Wyślij reklamację bezpośrednio do Jet2</h3>
          <p>Możesz złożyć reklamację przez:</p>
          <ul>
            <li>🌐 <strong>Formularz online</strong>: jet2.com → Help → EU Compensation</li>
            <li>📧 <strong>Email</strong>: customerrelations@jet2.com</li>
            <li>📬 <strong>Poczta</strong>: Jet2.com Limited, Low Fare Finder House, Leeds Bradford Airport, Leeds, LS19 7TU, UK</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
            <p className="mb-2 font-bold text-yellow-900">⏱️ Czas oczekiwania na odpowiedź</p>
            <p className="mb-0 text-yellow-800">
              Jet2 <strong>odpowiada zwykle w ciągu 6-10 tygodni</strong>. Jeśli zaakceptują roszczenie, 
              wypłata następuje w ciągu kolejnych 4-6 tygodni. Łączny czas: <strong>10-16 tygodni</strong>.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-3 mt-6">Krok 3: Co jeśli Jet2 odmówi?</h3>
          <p>Jeśli Jet2 odrzuci Twoją reklamację:</p>
          <ul>
            <li>✅ <strong>Poproś o szczegółowe uzasadnienie</strong> z dowodami</li>
            <li>✅ <strong>Skorzystaj z pomocy prawnej</strong> — firmy mają 79% skuteczności z Jet2</li>
            <li>✅ <strong>Złóż pozew sądowy</strong> (European Small Claims Procedure lub UK Small Claims)</li>
          </ul>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-green-600 to-green-800 text-white p-8 rounded-xl my-8 shadow-xl">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-12 h-12 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 mt-0">Zlecenie ClaimWinger = 82% szans na sukces z Jet2</h3>
                <p className="mb-4 text-green-100 text-lg">
                  Bez opłat wstępnych. Płacisz tylko 25% prowizji gdy wygrasz. Średni czas wypłaty z Jet2: <strong>10-14 tygodni</strong>.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  className="inline-flex items-center gap-2 bg-white text-green-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Zgłoś lot Jet2 do ClaimWinger <ArrowRight className="w-5 h-5" />
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
                  Czy Brexit zmienił moje prawa przy lotach Jet2?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> UK wdrożyło rozporządzenie <strong>UK261</strong>, które jest praktycznie identyczne z EU261/2004. 
                      Kwoty odszkodowań (250-600 €) i prawa pasażera <strong>pozostały bez zmian</strong>.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Loty Jet2 z/do Polski = pełna ochrona (EU261 + UK261)
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Kupiłem pakiet wakacyjny przez TUI — czy mogę dostać odszkodowanie od Jet2?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Nawet jeśli kupiłeś pakiet wakacyjny przez biuro podróży, masz prawo do odszkodowania 
                      WE 261 <strong>bezpośrednio od Jet2</strong>. Biuro odpowiada za hotel/transfer, linia za lot.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Możesz dostać pieniądze OD OBUDWÓCH: 250-400 € od Jet2 za lot + zwrot kosztów hotelu od TUI.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Ile czasu mam na złożenie reklamacji za lot Jet2?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      W Polsce obowiązuje <strong>3-letni termin przedawnienia</strong> od daty lotu. Możesz reklamować lot sprzed 
                      2 lat i 11 miesięcy — Jet2 musi rozpatrzyć roszczenie.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ Lot z 10 marca 2023 → możesz reklamować do 9 marca 2026
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Jet2 twierdzi, że była usterka techniczna — czy to nadzwyczajna okoliczność?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Nie!</strong> Według orzecznictwa TSUE i UK High Court, <strong>zwykłe usterki techniczne NIE są nadzwyczajnymi okolicznościami</strong>. 
                      Linie mają obowiązek utrzymywać flotę w sprawności.
                    </p>
                    <p className="mt-2 font-bold text-red-700">
                      Jedynie ukryta wada fabryczna (wykryta po raz pierwszy) może być nadzwyczajną okolicznością — ale Jet2 musi to udowodnić.
                    </p>
                  </div>
                </div>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary className="font-bold text-lg cursor-pointer text-gray-900 flex items-center justify-between" itemProp="name">
                  Czy lot powrotny z UK do Polski (MAN→KRK) podlega odszkodowaniu?
                  <span className="ml-2 text-blue-600">+</span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">
                    <p>
                      <strong>Tak!</strong> Jet2 to carrier z UK, więc <strong>stosuje się UK261</strong> (niemal identyczne z EU261). 
                      Opóźnienie/odwołanie lotu powrotnego MAN→KRK daje prawo do odszkodowania 250-400 €.
                    </p>
                    <p className="mt-2 font-bold text-green-700">
                      ✅ UK261 = te same kwoty i procedury co EU261 po Brexicie
                    </p>
                  </div>
                </div>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-xl my-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-4 mt-0">Sprawdź swoje odszkodowanie od Jet2 — za darmo!</h2>
            <p className="text-xl mb-6 text-red-100">
              Bezpłatna weryfikacja w 2 minuty. Bez ryzyka — płacisz tylko gdy wygrasz (25% prowizji od wypłaconej kwoty).
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://claimwinger.com/pl" 
                className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                Sprawdź lot Jet2 <ArrowRight className="w-5 h-5" />
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
                <Link href="/blog/british-airways-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  British Airways odszkodowanie z Polski — przewodnik 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/ryanair-odszkodowanie-polska" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Ryanair odszkodowanie z Polski — kompletny przewodnik 2025
                </Link>
              </li>
              <li>
                <Link href="/blog/loty-wielka-brytania-brexit-uk261-odszkodowanie" className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Loty do Wielkiej Brytanii po Brexicie — UK261 vs EU261
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </Layout>
  );
}