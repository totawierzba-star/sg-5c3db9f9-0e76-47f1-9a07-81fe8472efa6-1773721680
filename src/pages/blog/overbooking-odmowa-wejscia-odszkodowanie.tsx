import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertTriangle, Users, Euro, ArrowRight, Scale } from "lucide-react";

export default function OverbookingOdmowaWejsciaOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Overbooking — odmowa wejścia na pokład i odszkodowanie do €600"
        description="Linia lotnicza odmówiła Ci wejścia na pokład z powodu overbookingu? Sprawdź, ile odszkodowania Ci przysługuje i jak je uzyskać."
        url="https://problemlot.pl/blog/overbooking-odmowa-wejscia-odszkodowanie"
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
            <span className="text-slate-900">Overbooking i odmowa wejścia na pokład</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <Users className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Sytuacje Specjalne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Overbooking — odmowa wejścia na pokład i odszkodowanie do €600
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>📅 11 marca 2026</span>
              <span>⏱️ 8 min czytania</span>
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
                  Jeśli linia lotnicza odmówiła Ci wejścia na pokład z powodu overbookingu (nadsprzedaży biletów), 
                  przysługuje Ci <strong>odszkodowanie od 250 € do 600 €</strong> zgodnie z Rozporządzeniem WE 261/2004. 
                  Wysokość zależy od dystansu lotu. Ważne: <strong>dobrowolna rezygnacja w zamian za voucher oznacza utratę prawa do odszkodowania pieniężnego</strong>.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Overbooking to praktyka linii lotniczych polegająca na sprzedaży większej liczby biletów niż jest dostępnych miejsc w samolocie. 
              Choć może wydawać się nieuczciwa, jest legalna i stosowana przez wszystkie większe przewoźniki. Problem zaczyna się, gdy wszyscy 
              pasażerowie stawiają się na lotnisku — wtedy ktoś musi zostać.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Jeśli spotkało Cię to samo, wiedz że Twoje prawa są jasno określone przez prawo unijne. Linia lotnicza <strong>musi wypłacić odszkodowanie</strong>, 
              zapewnić opiekę (posiłki, hotel) oraz przelot alternatywny. W tym artykule dowiesz się dokładnie, kiedy i ile możesz dostać, jak rozróżnić 
              dobrowolną rezygnację od przymusowej odmowy, oraz jakie kroki podjąć, by skutecznie odzyskać pieniądze.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              Co to jest overbooking i dlaczego linie go stosują?
            </h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                Definicja overbookingu:
              </h3>
              <p className="text-slate-700 mb-4">
                <strong>Overbooking (nadsprzedaż biletów)</strong> to sytuacja, w której linia lotnicza sprzedaje więcej biletów 
                niż jest fizycznych miejsc w samolocie. Praktyka ta jest legalna i opiera się na statystykach pokazujących, 
                że przeciętnie 5-15% pasażerów nie pojawia się na lotnisku (tzw. "no-show").
              </p>
              <div className="bg-white border border-slate-200 rounded-lg p-4">
                <p className="text-sm text-slate-600 mb-2">
                  <strong>Przykład:</strong>
                </p>
                <p className="text-slate-700">
                  Boeing 737 ma 189 miejsc. Linia sprzedaje 200 biletów, licząc że około 11 osób się nie stawi. 
                  Jeśli jednak pojawi się wszystkich 200 pasażerów, 11 osób nie dostanie miejsca — to właśnie overbooking.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Dlaczego linie stosują overbooking:
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Maksymalizacja przychodu</strong> — puste miejsca to stracone pieniądze</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Statystyki no-show</strong> — wielu pasażerów nie odbiera lotów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Elastyczne bilety</strong> — klienci zmieniają plany ostatniej chwili</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Niższe ceny</strong> — overbooking pozwala utrzymać konkurencyjne stawki</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Kiedy overbooking staje się problemem:
                </h3>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Wszyscy się stawiają</strong> — więcej pasażerów niż miejsc</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Brak ochotników</strong> — nikt nie chce dobrowolnie zrezygnować</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Przymusowa odmowa</strong> — linia wybiera pasażerów do "zdjęcia" z lotu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 font-bold">•</span>
                    <span><strong>Opóźnienie podróży</strong> — musisz czekać na następny lot (często następny dzień)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-slate-700">
                <strong>Ważne:</strong> Overbooking jest prawnie dozwolony, ale <strong>pasażer nie ponosi za to odpowiedzialności</strong>. 
                To linia lotnicza podejmuje ryzyko nadsprzedaży i musi ponieść konsekwencje finansowe, gdy wszyscy pasażerowie się stawią.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              Dobrowolna vs przymusowa odmowa — kluczowa różnica
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-lg text-green-900 mb-3">
                  ✅ Dobrowolna rezygnacja (volunteer)
                </h3>
                <p className="text-slate-700 mb-4">
                  Najpierw linia lotnicza pyta, czy ktoś dobrowolnie zrezygnuje z lotu w zamian za rekompensatę (voucher, przelot, gotówka).
                </p>
                <div className="bg-white border border-green-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-green-900 mb-2">Zazwyczaj oferta obejmuje:</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Voucher o wartości 200-500 € na przyszłe loty</li>
                    <li>• Przelot alternatywny (następny dostępny)</li>
                    <li>• Ewentualnie hotel + posiłki</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-900 mb-2">⚠️ Uwaga:</p>
                  <p className="text-sm text-red-800">
                    Jeśli zgodzisz się dobrowolnie, <strong>tracisz prawo do odszkodowania pieniężnego</strong> (250-600 €) 
                    wynikającego z WE 261/2004. Otrzymujesz tylko to, co zaproponuje linia.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <h3 className="font-bold text-lg text-red-900 mb-3">
                  ❌ Przymusowa odmowa (denied boarding)
                </h3>
                <p className="text-slate-700 mb-4">
                  Jeśli nie ma ochotników, linia <strong>wybiera pasażerów do zdjęcia z lotu</strong> wbrew ich woli 
                  (kryteria: późna odprawa, tani bilet, pojedynczy pasażer).
                </p>
                <div className="bg-white border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-red-900 mb-2">Twoje automatyczne prawa:</p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• <strong>Odszkodowanie 250-600 €</strong> (gotówka)</li>
                    <li>• Przelot alternatywny lub pełny zwrot biletu</li>
                    <li>• Opieka: posiłki, napoje, hotel, transport</li>
                    <li>• 2 rozmowy telefoniczne/emaile</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm font-semibold text-green-900 mb-2">✅ To jest Twój przypadek!</p>
                  <p className="text-sm text-green-800">
                    Przymusowa odmowa gwarantuje <strong>pełne odszkodowanie</strong> niezależnie od innych świadczeń. 
                    Linia nie może wymusić rezygnacji z pieniędzy.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="font-semibold text-amber-900 mb-2">
                💡 Porada praktyczna:
              </p>
              <p className="text-slate-700">
                Jeśli linia pyta o ochotników i oferuje voucher 300 €, ale przysługiwałoby Ci 600 € odszkodowania — 
                <strong>NIE zgadzaj się dobrowolnie</strong>. Poczekaj, aż linia będzie musiała wybrać kogoś przymusowo. 
                Wtedy dostaniesz 600 € + wszystkie świadczenia opiekuńcze + przelot alternatywny.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile wynosi odszkodowanie za overbooking?
            </h2>

            <div className="bg-white border-2 border-blue-200 rounded-lg overflow-hidden mb-6">
              <div className="bg-blue-600 text-white px-6 py-4">
                <h3 className="font-bold text-lg">Tabela odszkodowań za odmowę wejścia na pokład</h3>
                <p className="text-sm text-blue-100 mt-1">Rozporządzenie WE 261/2004, Art. 7</p>
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

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <p className="text-slate-700">
                <strong>Ważne:</strong> Odszkodowanie przysługuje <strong>NA DODATEK</strong> do zwrotu biletu lub przelotu alternatywnego. 
                To nie jest wybór "albo-albo" — dostajesz i odszkodowanie, i rozwiązanie problemu podróży.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-slate-900 mb-3">
                📋 Przykład kalkulacji:
              </h3>
              <div className="space-y-3 text-slate-700">
                <p>
                  <strong>Sytuacja:</strong> Odmówiono Ci wejścia na pokład lotu Warszawa → Barcelona (Ryanair) z powodu overbookingu. 
                  Bilet kosztował 200 zł.
                </p>
                <div className="bg-white border border-slate-200 rounded-lg p-4">
                  <p className="font-semibold mb-2">Co Ci przysługuje:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>400 € odszkodowania</strong> (dystans 1660 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Przelot alternatywny</strong> tym samym dniem lub zwrot 200 zł</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Opieka:</strong> posiłki w czasie oczekiwania</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Hotel</strong> jeśli lot alternatywny dopiero następnego dnia</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm">
                  💰 <strong>Łączna wartość świadczeń:</strong> około 1800 zł (400 € ≈ 1700 zł + zwrot biletu 200 zł + opieka ~100 zł)
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak dochodzić odszkodowania — krok po kroku
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
                        <span>Żądaj pisemnego potwierdzenia <strong>przyczyny odmowy</strong> (overbooking)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zapisz <strong>numer rezerwacji</strong> (PNR) i <strong>numer lotu</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zachowaj kartę pokładową (jeśli dostałeś) lub <strong>potwierdzenie odprawy</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zrób zdjęcia <strong>tablicy odlotów</strong> i <strong>potwierdzenia odmowy</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Zachowaj paragony za posiłki/hotel (jeśli linia nie zapewniła)</span>
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
                      Złóż reklamację do linii lotniczej
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Wyślij reklamację w ciągu <strong>7 dni</strong> (choć masz formalnie 3 lata). Im szybciej, tym lepiej.
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-3">
                      <p className="font-semibold text-sm text-slate-900 mb-2">Reklamacja musi zawierać:</p>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Numer lotu, data, godzina, trasa</li>
                        <li>• Numer rezerwacji (PNR)</li>
                        <li>• Opis sytuacji: "Odmówiono mi wejścia na pokład z powodu overbookingu"</li>
                        <li>• Żądanie: "Żądam odszkodowania [kwota] € zgodnie z WE 261/2004, Art. 7"</li>
                        <li>• Twoje dane kontaktowe i IBAN do przelewu</li>
                        <li>• Załączniki: karta pokładowa, potwierdzenie odprawy, dokumentacja</li>
                      </ul>
                    </div>
                    <p className="text-sm text-slate-600">
                      💌 Wyślij emailem lub listem poleconym. Zachowaj potwierdzenie wysłania.
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
                      Jeśli linia odmówi lub milczy — dalsze kroki
                    </h3>
                    <div className="space-y-3 text-slate-700">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="font-semibold text-blue-900 mb-2">🏛️ Opcja A: Rzecznik Praw Pasażera</p>
                        <p className="text-sm text-slate-700">
                          Bezpłatna mediacja przez ULC. Skuteczność ~40%. Czas: 2-6 miesięcy.
                        </p>
                      </div>
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                        <p className="font-semibold text-green-900 mb-2">⚖️ Opcja B: Pozew do sądu</p>
                        <p className="text-sm text-slate-700">
                          Do 20 000 zł = sąd uproszczony (opłata 30 zł). Czas: 6-12 miesięcy. Skuteczność ~70%.
                        </p>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="font-semibold text-purple-900 mb-2">🚀 Opcja C: ClaimWinger (NAJSZYBSZA)</p>
                        <p className="text-sm text-slate-700 mb-2">
                          Specjaliści od odszkodowań lotniczych załatwią wszystko za Ciebie. Prowizja tylko od sukcesu (25-30%).
                        </p>
                        <Link
                          href="https://claimwinger.com/pl/opozniony-lot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-purple-700 hover:text-purple-900"
                        >
                          Sprawdź teraz <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
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
                  Czy mogę dostać odszkodowanie jeśli zgodziłem się dobrowolnie na voucher?
                </h3>
                <p className="text-slate-700">
                  <strong>Nie.</strong> Dobrowolna rezygnacja w zamian za voucher lub inną rekompensatę oznacza rezygnację z odszkodowania 
                  pieniężnego wynikającego z WE 261/2004. Dlatego zawsze porównaj wartość oferty linii z kwotą odszkodowania, 
                  które by Ci przysługiwało (250-600 €).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Jak długo mam na zgłoszenie roszczenia?
                </h3>
                <p className="text-slate-700">
                  Formalnie masz <strong>3 lata od daty lotu</strong> (przedawnienie roszczenia cywilnego w Polsce). 
                  Jednak zalecamy działać szybko — linie chętniej płacą za świeże przypadki, a dokumentacja jest łatwiejsza do zebrania. 
                  Idealnie: zgłoś reklamację w ciągu 7-14 dni.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy odszkodowanie dotyczy również lotów poza UE?
                </h3>
                <p className="text-slate-700">
                  WE 261/2004 chroni loty:
                </p>
                <ul className="mt-2 space-y-1 text-slate-700 ml-4">
                  <li>• Odlot z lotniska w UE (dowolna linia)</li>
                  <li>• Przylot do UE linią z siedzibą w UE</li>
                </ul>
                <p className="text-slate-700 mt-2">
                  <strong>Przykład:</strong> Warszawa → Nowy Jork (LOT) = TAK ✅. Nowy Jork → Warszawa (United Airlines) = NIE ❌ (USA → UE, linia spoza UE).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy linia może obniżyć odszkodowanie jeśli zaproponowała mi lot alternatywny?
                </h3>
                <p className="text-slate-700">
                  <strong>Nie w przypadku overbookingu.</strong> Art. 7 WE 261/2004 jasno stanowi, że przy przymusowej odmowie wejścia na pokład 
                  przysługuje <strong>pełne odszkodowanie</strong> (250/400/600 €) niezależnie od tego, czy otrzymałeś lot zastępczy. 
                  Redukcja o 50% dotyczy tylko opóźnień, nie odmowy wejścia.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Co jeśli linia twierdzi, że to była "sytuacja operacyjna", a nie overbooking?
                </h3>
                <p className="text-slate-700">
                  Linie czasem próbują unikać odpowiedzialności twierdząc, że odmowa wynikała z "problemów operacyjnych" lub "bezpieczeństwa". 
                  <strong>To manipulacja.</strong> Jeśli otrzymałeś informację o overbookingu (nadsprzedaży biletów), możesz żądać pisemnego 
                  potwierdzenia przyczyny na lotnisku. W razie sporu, sąd lub Rzecznik Praw Pasażera weryfikują faktyczną przyczynę na podstawie 
                  dokumentacji linii.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Odmówiono Ci wejścia na pokład? Odzyskaj nawet 600 €
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
                href="/blog/downgrade-nizszej-klasy-zwrot-75-procent"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Downgrade — przeniesienie do niższej klasy i zwrot do 75%
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Sprawdź, ile możesz dostać jeśli linia przeniósł Cię do klasy ekonomicznej zamiast biznesowej.
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