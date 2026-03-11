import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertTriangle, TrendingDown, Euro, ArrowRight, Plane } from "lucide-react";

export default function DowngradeNizszejKlasyZwrot75Procent() {
  return (
    <Layout>
      <SEO
        title="Downgrade — przeniesienie do niższej klasy i zwrot do 75%"
        description="Linia przeniosła Cię z klasy biznesowej do ekonomicznej? Sprawdź, ile zwrotu kosztów biletu Ci przysługuje (30%, 50% lub 75%)."
        url="https://problemlot.pl/blog/downgrade-nizszej-klasy-zwrot-75-procent"
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
            <span className="text-slate-900">Downgrade — przeniesienie do niższej klasy</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <TrendingDown className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Sytuacje Specjalne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Downgrade — przeniesienie do niższej klasy i zwrot do 75%
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
                  Jeśli linia lotnicza przeniosła Cię do niższej klasy (np. z biznesowej do ekonomicznej), 
                  przysługuje Ci <strong>zwrot 30%, 50% lub 75% ceny biletu</strong> w zależności od dystansu lotu 
                  (Rozporządzenie WE 261/2004, Art. 10). To nie jest odszkodowanie — to <strong>zwrot nadpłaty</strong> 
                  za usługę, której nie otrzymałeś.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Downgrade to sytuacja, w której kupiłeś bilet w wyższej klasie (biznesowa, premium economy, pierwsza klasa), 
              ale linia lotnicza przeniosła Cię do klasy niższej. Najczęstsze przyczyny to: overbooking w wyższej klasie, 
              zmiana typu samolotu (mniejszy), problem techniczny.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Choć może wydawać się to korzystne dla linii, prawo unijne jasno chroni pasażerów przed taką sytuacją. 
              <strong>Nie musisz się zgadzać na downgrade</strong> — możesz odmówić lotu i otrzymać pełny zwrot biletu. 
              Jeśli jednak zdecydujesz się lecieć, linia <strong>musi zwrócić Ci część ceny biletu</strong> proporcjonalnie do obniżenia standardu.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingDown className="w-8 h-8 text-blue-600" />
              Co to jest downgrade i kiedy się zdarza?
            </h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Definicja downgrade'u:
              </h3>
              <p className="text-slate-700 mb-4">
                <strong>Downgrade (obniżenie klasy podróży)</strong> to sytuacja, w której pasażer, który zakupił bilet 
                w określonej klasie obsługi (np. biznesowej), zostaje przeniesiony do klasy niższej (np. ekonomicznej) 
                bez wcześniejszego powiadomienia lub zgody.
              </p>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Przykład:</strong>
                </p>
                <p className="text-slate-700">
                  Kupiłeś bilet w klasie biznesowej na lot Warszawa → Nowy Jork za 12 000 zł. 
                  Na lotnisku dowiadujesz się, że klasa biznesowa jest przepełniona i musisz lecieć w ekonomicznej. 
                  Linia musi zwrócić Ci 75% ceny biletu = 9000 zł.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Najczęstsze przyczyny downgrade:
                </h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Overbooking w wyższej klasie</strong> — sprzedano więcej biletów biznesowych niż miejsc</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Zmiana typu samolotu</strong> — zastępcza maszyna ma mniej miejsc biznesowych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Problem techniczny</strong> — część samolotu niedostępna (np. uszkodzone fotele)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Reorganizacja lotu</strong> — łączenie lotów, upgrade VIP-ów kosztem innych</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Typowe scenariusze:
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Biznesowa → Ekonomiczna</strong> — najczęstszy przypadek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Pierwsza klasa → Biznesowa</strong> — rzadsze, ale możliwe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Premium Economy → Ekonomiczna</strong> — głównie na długich trasach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span><strong>Downgrade częściowy</strong> — gorsze miejsce w tej samej klasie (np. przy toalecie)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Ważne:</strong> Linia lotnicza <strong>nie może zmusić Cię do downgrade'u</strong>. 
                Masz prawo odmówić lotu i otrzymać pełny zwrot biletu. Jeśli jednak zdecydujesz się lecieć w niższej klasie, 
                przysługuje Ci automatyczny zwrot części ceny zgodnie z poniższą tabelą.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile wynosi zwrot za downgrade?
            </h2>

            <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h3 className="font-bold text-lg">Tabela zwrotów za obniżenie klasy podróży</h3>
                <p className="text-sm text-blue-100 mt-1">Rozporządzenie WE 261/2004, Art. 10</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b-2 border-slate-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Dystans lotu</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">% zwrotu ceny biletu</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-slate-700">Przykładowe trasy</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900">Do 1500 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-800">
                          30%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Warszawa → Berlin, Kraków → Londyn, Gdańsk → Paryż
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900">1500–3500 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-indigo-100 text-indigo-800">
                          50%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        Warszawa → Barcelona, Poznań → Tel Awiw, Wrocław → Dubai (EU)
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-6 py-4 text-slate-900">Ponad 3500 km</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-purple-100 text-purple-800">
                          75%
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

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-slate-700">
                <strong>Jak liczyć zwrot:</strong> Zwrot dotyczy <strong>różnicy w cenie między klasami</strong>, 
                nie całego biletu. Jeśli bilet biznesowy kosztował 8000 zł, a ekonomiczny 2000 zł, różnica to 6000 zł. 
                Zwrot = [procent] × 6000 zł.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                📋 Przykłady kalkulacji:
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold text-slate-900 mb-2">
                    Przykład 1: Lot krótki (do 1500 km)
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Trasa:</strong> Warszawa → Berlin (520 km)<br />
                    <strong>Bilet biznesowy:</strong> 2000 zł | <strong>Ekonomiczny:</strong> 500 zł<br />
                    <strong>Różnica:</strong> 1500 zł
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3">
                    <p className="text-sm font-semibold text-blue-900">
                      💰 Zwrot: 30% × 1500 zł = <strong className="text-lg">450 zł</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold text-slate-900 mb-2">
                    Przykład 2: Lot średni (1500-3500 km)
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Trasa:</strong> Warszawa → Barcelona (1660 km)<br />
                    <strong>Bilet biznesowy:</strong> 4000 zł | <strong>Ekonomiczny:</strong> 800 zł<br />
                    <strong>Różnica:</strong> 3200 zł
                  </p>
                  <div className="bg-indigo-50 border border-indigo-200 rounded p-3">
                    <p className="text-sm font-semibold text-indigo-900">
                      💰 Zwrot: 50% × 3200 zł = <strong className="text-lg">1600 zł</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold text-slate-900 mb-2">
                    Przykład 3: Lot długi (ponad 3500 km)
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Trasa:</strong> Warszawa → Nowy Jork (6800 km)<br />
                    <strong>Bilet biznesowy:</strong> 12 000 zł | <strong>Ekonomiczny:</strong> 3000 zł<br />
                    <strong>Różnica:</strong> 9000 zł
                  </p>
                  <div className="bg-purple-50 border border-purple-200 rounded p-3">
                    <p className="text-sm font-semibold text-purple-900">
                      💰 Zwrot: 75% × 9000 zł = <strong className="text-lg">6750 zł</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak dochodzić zwrotu za downgrade — krok po kroku
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Na lotnisku: zbierz dokumentację
                    </h3>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Żądaj pisemnego potwierdzenia <strong>downgrade'u</strong> od linii lotniczej</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zapisz <strong>oryginalną klasę biletu</strong> (biznesowa) i <strong>faktyczną klasę lotu</strong> (ekonomiczna)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zachowaj <strong>kartę pokładową</strong> i <strong>potwierdzenie rezerwacji</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zrób zdjęcia <strong>miejsca w samolocie</strong> (dowód, że faktycznie leciałeś niższą klasą)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zachowaj <strong>potwierdzenie zapłaty</strong> za bilet (wyciąg z karty, e-mail)</span>
                      </li>
                    </ul>
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
                      Oblicz należny zwrot
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Musisz znać <strong>cenę biletu biznesowego</strong> (którą zapłaciłeś) oraz <strong>cenę biletu ekonomicznego</strong> 
                      na ten sam lot w dniu podróży.
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-3">
                      <p className="font-semibold text-sm text-slate-900 mb-2">Formuła kalkulacji:</p>
                      <div className="bg-white border border-slate-300 rounded p-3 font-mono text-sm text-slate-800">
                        <p><strong>Różnica cen</strong> = Cena biznesowa - Cena ekonomiczna</p>
                        <p className="mt-2"><strong>Zwrot</strong> = Różnica × % (30/50/75%) zależnie od dystansu</p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      💡 Jeśli nie znasz ceny ekonomicznej, sprawdź historyczne ceny na stronach typu Google Flights lub poproś linię o podanie.
                    </p>
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
                      Złóż reklamację do linii lotniczej
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Wyślij reklamację w ciągu <strong>7-14 dni</strong> od lotu (choć formalnie masz 3 lata).
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-3">
                      <p className="font-semibold text-sm text-slate-900 mb-2">Reklamacja musi zawierać:</p>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Numer lotu, data, trasa</li>
                        <li>• Numer rezerwacji (PNR)</li>
                        <li>• Opis: "Przeniesiono mnie z klasy biznesowej do ekonomicznej bez mojej zgody"</li>
                        <li>• Żądanie: "Żądam zwrotu [X%] różnicy w cenie biletu zgodnie z WE 261/2004, Art. 10"</li>
                        <li>• Kalkulacja zwrotu (wykaż jak obliczyłeś kwotę)</li>
                        <li>• Dane do przelewu (IBAN, imię/nazwisko)</li>
                        <li>• Załączniki: bilet, karta pokładowa, potwierdzenie downgrade'u</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <p className="text-sm font-semibold text-green-900 mb-2">🚀 Skorzystaj z ClaimWinger (NAJSZYBSZA OPCJA)</p>
                      <p className="text-sm text-slate-700 mb-2">
                        Specjaliści zajmą się całą procedurą za Ciebie — od reklamacji po pozew. Płacisz tylko od sukcesu (25-30%).
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
                  Czy mogę odmówić downgrade'u i otrzymać pełny zwrot biletu?
                </h3>
                <p className="text-slate-700">
                  <strong>Tak.</strong> Nie musisz się zgadzać na przeniesienie do niższej klasy. Możesz odmówić lotu 
                  i zażądać pełnego zwrotu ceny biletu (100%). Linia musi też zaoferować Ci alternatywny lot w oryginalnej klasie 
                  w najszybszym możliwym terminie lub zwrot pieniędzy.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy oprócz zwrotu mogę dostać odszkodowanie jak za opóźniony lot?
                </h3>
                <p className="text-slate-700">
                  <strong>Nie.</strong> Downgrade to osobna kategoria — przysługuje Ci tylko <strong>zwrot części ceny biletu</strong> (30/50/75%), 
                  nie odszkodowanie pieniężne (250-600 €) jak przy opóźnieniu czy odwołaniu lotu. Są to dwa różne prawa wynikające 
                  z różnych artykułów WE 261/2004.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Co jeśli linia oferuje mi voucher zamiast zwrotu gotówkowego?
                </h3>
                <p className="text-slate-700">
                  <strong>Nie musisz się zgadzać.</strong> WE 261/2004 nie przewiduje voucherów w przypadku downgrade'u — 
                  przysługuje Ci <strong>zwrot gotówkowy</strong> różnicy w cenie. Jeśli linia proponuje voucher, możesz odmówić 
                  i żądać przelewu na konto.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Jak długo mam na zgłoszenie roszczenia o zwrot?
                </h3>
                <p className="text-slate-700">
                  Formalnie <strong>3 lata</strong> (przedawnienie roszczenia cywilnego w Polsce). 
                  Jednak zalecamy działać szybko — linie chętniej płacą za świeże przypadki, a dokumentacja jest łatwiejsza do zebrania. 
                  Idealnie: zgłoś reklamację w ciągu 7-14 dni.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy zwrot dotyczy również biletów kupionych przez biuro podróży lub OTA?
                </h3>
                <p className="text-slate-700">
                  <strong>Tak.</strong> Nie ma znaczenia, gdzie kupiłeś bilet (bezpośrednio u linii, przez biuro podróży, OTA jak Booking czy Kiwi). 
                  Zwrot za downgrade przysługuje Ci automatycznie na podstawie WE 261/2004. Reklamację składasz bezpośrednio do linii lotniczej, 
                  nie do pośrednika.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Przeniesiono Cię do niższej klasy? Odzyskaj nawet 75% ceny biletu
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                ClaimWinger to specjaliści od odszkodowań lotniczych. Sprawdzimy Twoje roszczenie i zajmiemy się całą procedurą — 
                od reklamacji po pozew. Płacisz tylko w przypadku sukcesu.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Sprawdź swój zwrot
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
                href="/blog/overbooking-odmowa-wejscia-odszkodowanie"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Overbooking — odmowa wejścia na pokład i odszkodowanie do €600
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Sprawdź, ile odszkodowania przysługuje przy przymusowej odmowie wejścia na pokład.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

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
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}