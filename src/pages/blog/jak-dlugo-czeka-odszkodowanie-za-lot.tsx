import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, AlertCircle, Calendar, TrendingUp } from "lucide-react";

export default function JakDlugoCzekaOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Jak długo czeka się na odszkodowanie za lot? Terminy wypłaty"
        description="Sprawdź ile trwa wypłata odszkodowania za opóźniony lub odwołany lot. Średnio 2-8 tygodni, ale może potrwać dłużej."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Jak długo czeka się na odszkodowanie</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              Terminy Wypłat
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Jak długo czeka się na odszkodowanie za lot?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Średnie terminy wypłaty: 2-8 tygodni, ale może potrwać nawet kilka miesięcy
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                5 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 25.02.2025</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Czas oczekiwania na odszkodowanie za lot zależy od metody dochodzenia roszczenia:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">2-4 tyg.</div>
                <div className="text-sm font-medium opacity-90 mb-1">Z ClaimWinger</div>
                <div className="text-xs opacity-75">Średni czas od zgłoszenia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">2-6 mies.</div>
                <div className="text-sm font-medium opacity-90 mb-1">Samodzielnie</div>
                <div className="text-xs opacity-75">Jeśli linia w ogóle odpowie</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">6-18 mies.</div>
                <div className="text-sm font-medium opacity-90 mb-1">Postępowanie sądowe</div>
                <div className="text-xs opacity-75">Gdy linia odmówi</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mt-6 text-center">
              ⚠️ Terminy mogą się różnić w zależności od linii lotniczej i złożoności sprawy
            </p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Szczegółowy harmonogram wypłat</h2>
            
            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  Przez ClaimWinger (zalecane)
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600">1.</span>
                    <div>
                      <strong>Dzień 1:</strong> Wypełniasz formularz online (2 minuty)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600">2.</span>
                    <div>
                      <strong>Dzień 2-3:</strong> ClaimWinger weryfikuje sprawę i kontaktuje się z linią
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600">3.</span>
                    <div>
                      <strong>Tydzień 2-4:</strong> Linia lotnicza wypłaca odszkodowanie
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-green-600">4.</span>
                    <div>
                      <strong>Dzień następny:</strong> Otrzymujesz przelew na konto (minus prowizja ClaimWinger)
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 bg-green-50 p-3 rounded-lg">
                  💡 <strong>Zaleta:</strong> Nie musisz nic robić poza wypełnieniem formularza. ClaimWinger zajmuje się wszystkim.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-600" />
                  Samodzielnie (dłużej i trudniej)
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-orange-600">1.</span>
                    <div>
                      <strong>Tydzień 1:</strong> Szukasz danych kontaktowych linii, piszesz reklamację
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-orange-600">2.</span>
                    <div>
                      <strong>Tydzień 2-4:</strong> Czekasz na odpowiedź (często brak reakcji)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-orange-600">3.</span>
                    <div>
                      <strong>Tydzień 5-8:</strong> Wysyłasz przypomnienie/drugą reklamację
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-orange-600">4.</span>
                    <div>
                      <strong>Miesiąc 3-6:</strong> Linia w końcu odpowiada (często odmowa lub vaucher)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-orange-600">5.</span>
                    <div>
                      <strong>Miesiąc 6-12+:</strong> Musisz wnieść sprawę do sądu (dodatkowe koszty i czas)
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 bg-orange-50 p-3 rounded-lg">
                  ⚠️ <strong>Wada:</strong> Wymaga dużo czasu, wiedzy prawnej i często kończy się rezygnacją pasażera.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Postępowanie sądowe (ostateczność)
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-red-600">1.</span>
                    <div>
                      <strong>Miesiąc 1-2:</strong> Zbierasz dokumenty, piszesz pozew (lub zatrudniasz prawnika)
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-red-600">2.</span>
                    <div>
                      <strong>Miesiąc 3-6:</strong> Czekasz na wyznaczenie rozprawy
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-red-600">3.</span>
                    <div>
                      <strong>Miesiąc 6-12:</strong> Rozprawa sądowa, wyrok
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-red-600">4.</span>
                    <div>
                      <strong>Miesiąc 12-18:</strong> Egzekucja wyroku (jeśli linia nie płaci dobrowolnie)
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4 bg-red-50 p-3 rounded-lg">
                  🚫 <strong>Wada:</strong> Najdłuższy proces, wysokie koszty (opłaty sądowe, prawnik), duży stres.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Czemu linie lotnicze zwlekają z wypłatą?</h2>
            
            <p className="text-gray-700 mb-6">
              Linie lotnicze celowo stosują taktyki opóźniania wypłat odszkodowań, licząc na to, że pasażer:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Zrezygnuje z roszczenia po kilku tygodniach oczekiwania</li>
              <li>Przyjmie voucher zamiast gotówki (linia oszczędza)</li>
              <li>Nie będzie wiedział, jak dalej procedować</li>
              <li>Uzna, że walka o pieniądze nie jest warta stresu</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Statystyki pokazują:</h3>
                  <ul className="list-disc list-inside space-y-1 text-yellow-800">
                    <li><strong>70% pasażerów</strong> rezygnuje po pierwszej odmowie linii</li>
                    <li><strong>50% reklamacji</strong> nie dostaje odpowiedzi w ustawowym terminie 30 dni</li>
                    <li><strong>Ryanair i Wizzair</strong> to linie z najdłuższymi terminami rozpatrzenia (często 3-6 miesięcy)</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak przyspieszyć wypłatę?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Skuteczne metody
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ Użyj ClaimWinger – mają stałe kontakty z liniami</li>
                  <li>✅ Wyślij reklamację natychmiast po locie</li>
                  <li>✅ Zbierz wszystkie dokumenty (boarding pass, potwierdzenia)</li>
                  <li>✅ Wysyłaj przypomnienia co 2 tygodnie</li>
                  <li>✅ Wzmiankuj gotowość wniesienia sprawy do sądu</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Unikaj błędów
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>❌ Nie akceptuj voucherów (chyba że naprawdę chcesz)</li>
                  <li>❌ Nie rezygnuj po pierwszej odmowie</li>
                  <li>❌ Nie wysyłaj reklamacji mailem (użyj formularza linii)</li>
                  <li>❌ Nie czekaj miesiącami bez reakcji</li>
                  <li>❌ Nie próbuj sam negocjować kwoty (masz prawo do pełnej)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Przykładowe terminy według linii lotniczych</h2>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Linia lotnicza</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Średni czas (samodzielnie)</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Średni czas (ClaimWinger)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">LOT Polish Airlines</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2-4 miesiące</td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600">2-3 tygodnie</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Ryanair</td>
                    <td className="px-6 py-4 text-sm text-gray-600">3-6 miesięcy</td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600">3-4 tygodnie</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Wizz Air</td>
                    <td className="px-6 py-4 text-sm text-gray-600">3-6 miesięcy</td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600">2-4 tygodnie</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Lufthansa</td>
                    <td className="px-6 py-4 text-sm text-gray-600">1-3 miesiące</td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600">2-3 tygodnie</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">easyJet</td>
                    <td className="px-6 py-4 text-sm text-gray-600">2-4 miesiące</td>
                    <td className="px-6 py-4 text-sm font-bold text-green-600">2-3 tygodnie</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy linia może zwlekać z wypłatą bez konsekwencji?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Teoretycznie nie. Rozporządzenie EU261 wymaga wypłaty "bez zbędnej zwłoki". W praktyce jednak 
                  linie często celowo opóźniają proces, licząc na rezygnację pasażera. Dlatego warto skorzystać 
                  z usług takich jak ClaimWinger, które mają doświadczenie w przyspieszaniu wypłat.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Co jeśli linia nie odpowiada na reklamację?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Jeśli po 30 dniach nie otrzymasz odpowiedzi, możesz złożyć skargę do Urzędu Lotnictwa Cywilnego 
                  lub skorzystać z pomocy ClaimWinger, który ma procedury na takie przypadki. Brak odpowiedzi NIE 
                  oznacza automatycznej odmowy – nadal masz prawo do odszkodowania.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy ClaimWinger naprawdę przyspiesza proces?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! ClaimWinger ma bezpośrednie kontakty z działami odszkodowań linii lotniczych i wie dokładnie, 
                  jak poprawnie sformułować roszczenie. Linie traktują profesjonalne firmy priorytetowo, ponieważ 
                  wiedzą, że te nie odpuszczą i pójdą do sądu w razie potrzeby.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Ile bierze ClaimWinger prowizji?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  ClaimWinger pobiera prowizję tylko w przypadku sukcesu (No Win, No Fee). Zazwyczaj jest to 
                  25-35% wypłaconego odszkodowania. Przykład: za odszkodowanie 600 € otrzymasz ~420 € na konto, 
                  bez żadnych ukrytych kosztów.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę przyspieszyć wypłatę dzwoniąc do linii?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Niestety nie. Infolinie nie mają dostępu do spraw odszkodowań i przekierują Cię do formularza 
                  reklamacyjnego. Linie celowo utrudniają kontakt telefoniczny w sprawie odszkodowań. Dlatego 
                  lepiej od razu skorzystać z profesjonalnej pomocy.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Jak długo mam na złożenie reklamacji?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  W Polsce masz 3 lata od daty lotu na złożenie reklamacji. Jednak im szybciej złożysz, tym 
                  szybciej otrzymasz wypłatę. Zalecamy zgłoszenie sprawy w ciągu 2-4 tygodni od opóźnienia/odwołania.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nie czekaj miesiącami – sprawdź swoją sprawę teraz
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ClaimWinger załatwi odszkodowanie za Ciebie w 2-4 tygodnie. Wypełnij formularz i zapomnij o stresie.
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Sprawdź odszkodowanie teraz
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm mt-6 opacity-75">
              ✓ 2-4 tygodnie do wypłaty ✓ Płatność tylko w przypadku sukcesu ✓ Zero stresu
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie</h2>
            
            <p className="text-gray-700 mb-6">
              Czas oczekiwania na odszkodowanie za lot zależy głównie od tego, czy dochodzisz roszczenia 
              samodzielnie, czy korzystasz z pomocy profesjonalnej firmy:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>ClaimWinger:</strong> 2-4 tygodnie (najszybsza metoda)</li>
              <li><strong>Samodzielnie:</strong> 2-6 miesięcy (jeśli linia w ogóle odpowie)</li>
              <li><strong>Sąd:</strong> 6-18 miesięcy (ostateczność, duże koszty)</li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 mb-0">
                💡 <strong>Zalecenie:</strong> Jeśli zależy Ci na czasie i chcesz uniknąć stresu, skorzystaj 
                z ClaimWinger. Profesjonalna pomoc przyspiesza proces 3-4 razy i zwiększa szanse powodzenia 
                do ponad 95%.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak złożyć wniosek o odszkodowanie</span>
              </Link>
              <Link href="/blog/najczestsze-bledy-reklamacja" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Najczęstsze błędy przy reklamacji</span>
              </Link>
              <Link href="/blog/przedawnienie-roszczen-lotniczych" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Przedawnienie roszczeń lotniczych</span>
              </Link>
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Odszkodowanie LOT Polish Airlines</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
