import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertTriangle, ShoppingCart, Euro, ArrowRight, Building } from "lucide-react";

export default function BiletOTAKiwiBookingEskyOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Bilet przez OTA (Kiwi, Booking, eSky) — czy wpływa na odszkodowanie?"
        description="Kupiłeś bilet przez pośrednika (Kiwi, Booking, eSky)? Sprawdź, czy to zmienia Twoje prawa do odszkodowania za opóźniony lub odwołany lot."
        url="https://problemlot.pl/blog/bilet-ota-kiwi-booking-esky-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Bilet przez OTA — odszkodowanie</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <ShoppingCart className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Sytuacje Specjalne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Bilet przez OTA (Kiwi, Booking, eSky) — czy wpływa na odszkodowanie?
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>📅 11 marca 2026</span>
              <span>⏱️ 7 min czytania</span>
              <span>✍️ Ekspert ds. praw pasażerów</span>
            </div>
          </header>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-lg text-slate-900 mb-2">
                  Szybka odpowiedź:
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  <strong>NIE</strong> — zakup biletu przez OTA (Online Travel Agency) jak Kiwi, Booking, eSky, Expedia czy Opodo 
                  <strong>nie zmienia Twoich praw</strong> do odszkodowania. Przysługuje Ci 250-600 € zgodnie z WE 261/2004, 
                  niezależnie od sposobu zakupu. <strong>Kluczowe:</strong> reklamację składasz do linii lotniczej, nie do Kiwi/eSky.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Coraz więcej osób kupuje bilety przez platformy agregujące oferty — Kiwi.com, Booking Flights, eSky, 
              Expedia, Opodo czy Momondo. Są tańsze, wygodne i pokazują najlepsze połączenia. Problem zaczyna się, 
              gdy lot jest opóźniony lub odwołany — czy OTA pomoże?
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Odpowiedź jest prosta: <strong>OTA to tylko pośrednik</strong>. Twoja umowa przewozu jest z linią lotniczą, 
              nie z Kiwi czy eSky. To linia musi wypłacić odszkodowanie, zapewnić opiekę i rozwiązać problem z lotem. 
              W tym artykule wyjaśniamy dokładnie, jak dochodzić odszkodowania gdy kupiłeś bilet przez OTA, 
              i jak unikać pułapek związanych z pośrednikami.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              Czym jest OTA i jak działa zakup biletu przez pośrednika?
            </h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Definicja OTA:
              </h3>
              <p className="text-slate-700 mb-4">
                <strong>OTA (Online Travel Agency)</strong> to internetowa platforma sprzedażowa, która agreguje oferty 
                lotów od różnych linii lotniczych i pozwala kupić bilet w jednym miejscu. OTA zarabia prowizję 
                od linii lub marżę na cenie biletu.
              </p>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Przykład:</strong>
                </p>
                <p className="text-slate-700">
                  Szukasz lotu Warszawa → Barcelona. Zamiast odwiedzać strony Ryanair, Wizz Air, LOT osobno, 
                  wchodzisz na Kiwi.com, które pokazuje wszystkie opcje. Wybierasz Ryanair, płacisz Kiwi, 
                  a oni rezerwują bilet u Ryanair i wysyłają Ci potwierdzenie.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Popularne OTA w Polsce:
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Kiwi.com</strong> — czeski agregator, automatyczne połączenia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>eSky</strong> — polska platforma, duża popularność w CEE</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Booking Flights</strong> — nowa usługa znanego Booking.com</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Expedia</strong> — amerykański gigant, międzynarodowe loty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Opodo, Momondo, Skyscanner</strong> — europejskie portale</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Jak OTA zarabia:
                </h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Prowizja od linii</strong> — marża na rezerwacji (5-15%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Opłaty serwisowe</strong> — dodatkowa opłata za obsługę (10-50 zł)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Ubezpieczenia</strong> — sprzedaż opcjonalnych polis (często drogie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Upselling</strong> — paid seat selection, priorytet odprawy, bagaż</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Ważne:</strong> OTA działa jako <strong>agent sprzedaży</strong>, nie przewoźnik. 
                Po zakupie biletu, Twoja umowa jest z linią lotniczą (np. Ryanair), nie z Kiwi. 
                Dlatego wszelkie roszczenia (odszkodowania, zmiany, zwroty) musisz kierować do linii.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-blue-600" />
              Kluczowy przekaz: OTA nie zmienia praw pasażera
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">
                    Twoje prawa są identyczne niezależnie od sposobu zakupu:
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Rozporządzenie WE 261/2004 chroni <strong>pasażera</strong>, nie sposób zakupu biletu. 
                    Czy kupiłeś przez stronę Ryanair, Kiwi, eSky, czy w biurze podróży — Twoje prawa są takie same.
                  </p>
                  <div className="bg-white border border-blue-200 rounded-lg p-4">
                    <p className="font-semibold text-sm text-blue-900 mb-2">Co Ci przysługuje (zawsze):</p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>250-600 € odszkodowania</strong> przy opóźnieniu >3h lub odwołaniu</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Opieka</strong> (posiłki, napoje, hotel, transport)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>Zwrot biletu</strong> lub przelot alternatywny</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span><strong>2 rozmowy telefoniczne/emaile</strong></span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-red-900 mb-3">
                  ❌ Błędne przekonania:
                </h3>
                <ul className="space-y-3 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>"Kupiłem przez Kiwi, więc Kiwi musi mi zapłacić" — <strong>NIE</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>"OTA obniża moje odszkodowanie" — <strong>NIE</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>"Linia odmówi, bo nie kupowałem bezpośrednio" — <strong>NIE</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">✗</span>
                    <span>"Muszę składać reklamację przez OTA" — <strong>NIE</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-green-900 mb-3">
                  ✅ Prawda:
                </h3>
                <ul className="space-y-3 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Linia lotnicza płaci</strong> odszkodowanie, nie OTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Kwota odszkodowania</strong> jest taka sama (250/400/600 €)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>Reklamację wysyłasz</strong> bezpośrednio do linii (ominięcie OTA)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span><strong>WE 261/2004 chroni</strong> wszystkich pasażerów równo</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania przysługuje przy zakupie przez OTA?
            </h2>

            <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h3 className="font-bold text-lg">Tabela odszkodowań — identyczna dla wszystkich kanałów zakupu</h3>
                <p className="text-sm text-blue-100 mt-1">Rozporządzenie WE 261/2004 — ta sama kwota czy kupiłeś przez linię, OTA czy biuro</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b-2 border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Dystans lotu</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Odszkodowanie</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Przykładowe trasy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900">Do 1500 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                          250 €
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Warszawa → Londyn, Kraków → Berlin, Gdańsk → Sztokholm
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900">1500–3500 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
                          400 €
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Warszawa → Barcelona, Poznań → Tel Awiw, Wrocław → Dubaj (EU)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900">Ponad 3500 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
                          600 €
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Warszawa → Nowy Jork, Kraków → Bangkok, Gdańsk → Toronto
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Przykład praktyczny:</strong>
              </p>
              <div className="mt-3 bg-white border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-slate-700 mb-3">
                  Kupiłeś bilet Warszawa → Barcelona (Ryanair) przez Kiwi.com za 400 zł. 
                  Lot opóźniony o 5 godzin (dystans 1660 km).
                </p>
                <div className="pt-3 border-t border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">💰 Twoje roszczenie:</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span><strong>400 € odszkodowania</strong> (1500-3500 km)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Reklamację wysyłasz do <strong>Ryanair</strong>, nie Kiwi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Sposób zakupu: bez znaczenia</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Opłata serwisowa Kiwi (50 zł): nie podlega zwrotowi</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak dochodzić odszkodowania gdy kupiłeś przez OTA — krok po kroku
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Zidentyfikuj linię lotniczą
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Na potwierdzeniu rezerwacji od OTA znajdź nazwę przewoźnika i numer lotu:
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-slate-900 mb-2">Gdzie szukać:</p>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• <strong>Email potwierdzenia</strong> od Kiwi/eSky/Booking</li>
                        <li>• <strong>Numer lotu</strong> (np. FR2451 = Ryanair, W62451 = Wizz Air)</li>
                        <li>• <strong>Karta pokładowa</strong> (nazwa linii na górze)</li>
                        <li>• <strong>Logo linii</strong> w aplikacji OTA</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-indigo-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Zbierz dokumentację
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Potwierdzenie rezerwacji</strong> od OTA (email z numerem PNR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Karta pokładowa</strong> lub potwierdzenie odprawy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Dowód opóźnienia</strong> (zdjęcia tablicy odlotów, email od linii)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span><strong>Potwierdzenie zapłaty</strong> (faktura od OTA, wyciąg z karty)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Złóż reklamację BEZPOŚREDNIO do linii
                    </h3>
                    <p className="text-slate-700 mb-3">
                      <strong>Pomiń OTA całkowicie</strong> — nie składaj reklamacji przez Kiwi/eSky, tylko bezpośrednio do Ryanair/LOT/Wizz Air.
                    </p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
                      <p className="text-sm font-semibold text-amber-900 mb-2">⚠️ Uwaga na pułapki OTA:</p>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Kiwi często oferuje "Guarantee" za opłatą — <strong>niepotrzebne</strong></li>
                        <li>• eSky może próbować pośredniczyć — <strong>omijaj</strong>, wolniej i mniej skutecznie</li>
                        <li>• Niektóre OTA blokują dane kontaktowe linii — <strong>znajdź oficjalną stronę przewoźnika</strong></li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-900 mb-2">🚀 Lub skorzystaj z ClaimWinger (NAJSZYBSZA OPCJA)</p>
                      <p className="text-sm text-slate-700 mb-2">
                        Specjaliści zajmą się całą procedurą za Ciebie — niezależnie czy kupiłeś przez OTA czy bezpośrednio. 
                        Płacisz tylko od sukcesu (25-30%).
                      </p>
                      <Link
                        href="https://claimwinger.com/pl/opozniony-lot"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-green-700 hover:text-green-900"
                      >
                        Sprawdź teraz <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy linia może odmówić odszkodowania bo kupiłem przez OTA?
                </h3>
                <p className="text-slate-700">
                  <strong>Nie.</strong> Sposób zakupu biletu nie wpływa na Twoje prawa. Jeśli linia odmawia z tego powodu, 
                  powołaj się na Art. 3 ust. 1 WE 261/2004, który nie różnicuje pasażerów według kanału zakupu. 
                  Możesz też zgłosić odmowę do Rzecznika Praw Pasażera (ULC).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Co jeśli OTA nie chce podać danych kontaktowych linii?
                </h3>
                <p className="text-slate-700">
                  Znajdź oficjalną stronę linii (np. ryanair.com, wizzair.com) i użyj formularza reklamacyjnego. 
                  Potrzebujesz tylko numeru rezerwacji (PNR) z potwierdzenia OTA — to wystarczy, by linia zidentyfikowała Twój lot. 
                  Jeśli OTA celowo utrudnia dostęp, możesz złożyć skargę do UOKiK.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy mogę dostać zwrot opłaty serwisowej OTA jeśli lot był opóźniony?
                </h3>
                <p className="text-slate-700">
                  <strong>Zazwyczaj nie.</strong> Opłata serwisowa OTA (np. 50 zł) to prowizja za rezerwację, nie część biletu. 
                  Linia zwróci tylko wartość biletu lotniczego, nie opłat pośrednika. Możesz spróbować negocjować z OTA, 
                  ale nie masz prawnej podstawy do żądania zwrotu.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy Kiwi Guarantee (ubezpieczenie za opłatą) zwiększa odszkodowanie?
                </h3>
                <p className="text-slate-700">
                  <strong>Nie.</strong> Kiwi Guarantee to dodatkowa usługa (płatna), która obiecuje pomoc w rebookingu jeśli zmarnujesz przesiadkę. 
                  Nie zwiększa odszkodowania z WE 261/2004 (250-600 €). Często jest niepotrzebna, bo linia i tak musi Ci pomóc na podstawie prawa.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Jak długo trwa rozpatrzenie reklamacji gdy kupiłem przez OTA?
                </h3>
                <p className="text-slate-700">
                  <strong>Czas jest identyczny</strong> jak przy zakupie bezpośrednim — linie odpowiadają w ciągu 4-8 tygodni. 
                  Jeśli składasz przez OTA jako pośrednika, może to zająć <strong>dłużej</strong> (10-12 tygodni), 
                  bo OTA przekazuje sprawę linii z opóźnieniem. Dlatego zalecamy omijanie OTA i składanie bezpośrednio.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Kupiłeś bilet przez OTA? Odzyskaj nawet 600 € — tak samo jak inni pasażerowie
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                ClaimWinger obsługuje roszczenia niezależnie od kanału zakupu. Sprawdzimy Twoje roszczenie 
                i zajmiemy się całą procedurą. Płacisz tylko w przypadku sukcesu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Sprawdź swoje odszkodowanie
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ile-mozesz-dostac"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Kalkulator odszkodowania
                  <Euro className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Powiązane artykuły:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  WE 261/2004 — kompletny przewodnik praw pasażera
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Dowiedz się wszystkiego o rozporządzeniu chroniącym pasażerów lotniczych w UE.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/lot-czarterowy-we261-wakacje-all-inclusive"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Lot czarterowy a WE 261 — czy wakacje all-inclusive są chronione?
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Sprawdź, czy prawa pasażera dotyczą również lotów czarterowych kupionych w pakiecie.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/jak-zlozyc-wniosek-odszkodowanie"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Jak złożyć wniosek o odszkodowanie — krok po kroku
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Szczegółowy przewodnik z wzorami pism i najczęstszymi błędami do uniknięcia.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/ile-odszkodowania-opozniony-lot"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Ile odszkodowania za opóźniony lot?
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Tabela odszkodowań i kalkulator — sprawdź dokładną kwotę dla Twojego lotu.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}