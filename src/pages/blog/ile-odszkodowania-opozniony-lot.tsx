import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Euro, Clock, Plane, CheckCircle, AlertCircle, Calculator } from "lucide-react";

export default function IleOdskodowaniaOpoznionyLot() {
  return (
    <Layout>
      <SEO
        title="Ile odszkodowania za opóźniony lot? Tabela kwot 250-600 €"
        description="Sprawdź dokładnie ile odszkodowania możesz dostać za opóźniony lot. Tabela kwot: 250 €, 400 € lub 600 € w zależności od dystansu lotu."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Ile odszkodowania</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Euro className="h-4 w-4" />
              Tabela Odszkodowań
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ile odszkodowania za opóźniony lot?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Kompletna tabela kwot: 250 €, 400 € lub 600 € w zależności od dystansu
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                6 min czytania
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
              Wysokość odszkodowania za opóźniony lot zależy wyłącznie od dystansu lotu i wynosi:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">250 €</div>
                <div className="text-sm font-medium opacity-90 mb-1">Loty do 1500 km</div>
                <div className="text-xs opacity-75">Warszawa–Londyn, Kraków–Rzym</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">400 €</div>
                <div className="text-sm font-medium opacity-90 mb-1">Loty 1500–3500 km</div>
                <div className="text-xs opacity-75">Warszawa–Lizbona, Gdańsk–Tel Awiw</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">600 €</div>
                <div className="text-sm font-medium opacity-90 mb-1">Loty powyżej 3500 km</div>
                <div className="text-xs opacity-75">Warszawa–Nowy Jork, Kraków–Bangkok</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mt-6 text-center">
              ⚠️ Kwota nie zależy od ceny biletu ani klasy podróży
            </p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Szczegółowa tabela odszkodowań EU261</h2>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dystans lotu</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wysokość odszkodowania</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Przykłady tras</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Do 1500 km</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">250 €</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Warszawa–Londyn, Kraków–Paryż, Gdańsk–Berlin, Katowice–Rzym
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">1500–3500 km (wewnątrz UE)</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">400 €</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Warszawa–Lizbona, Gdańsk–Barcelona, Kraków–Ateny
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Powyżej 1500 km (poza UE)</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">400 €</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Warszawa–Dubaj, Kraków–Tel Awiw, Gdańsk–Tunezja
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">Powyżej 3500 km</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">600 €</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Warszawa–Nowy Jork, Kraków–Bangkok, Gdańsk–Tokio, Warszawa–Toronto
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Ważne!</h3>
                  <p className="text-yellow-800 mb-2">
                    Kwota odszkodowania NIE zależy od:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-yellow-800">
                    <li>Ceny biletu (nawet bilety za 50 zł uprawniają do 600 €)</li>
                    <li>Klasy podróży (ekonomiczna, biznes, pierwsza)</li>
                    <li>Typu biletu (normalny, low-cost, premiowy)</li>
                    <li>Tego, czy lot był służbowy czy prywatny</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak obliczyć dystans lotu?</h2>
            
            <p className="text-gray-700 mb-6">
              Dystans lotu mierzony jest tzw. <strong>metodą ortodromiczną</strong> – czyli najkrótszą odległością 
              między dwoma punktami na kuli ziemskiej (tak jakbyś leciał w linii prostej przez kulę ziemską).
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Sposoby sprawdzenia dystansu:
              </h3>
              <ol className="space-y-3 text-blue-900">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>
                    <strong>Kalkulator Great Circle Mapper:</strong> Wejdź na stronę{" "}
                    <a href="http://www.gcmap.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      gcmap.com
                    </a>
                    , wpisz kody lotnisk (np. WAW-JFK) i sprawdź dystans w kilometrach.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>
                    <strong>Google:</strong> Wpisz "dystans Warszawa Nowy Jork" – Google pokaże przybliżony dystans.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>
                    <strong>ClaimWinger:</strong> Wpisz swoją trasę w formularzu – system automatycznie obliczy dystans 
                    i wyświetli kwotę odszkodowania.
                  </span>
                </li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Przykłady popularnych tras</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-3">250 € (do 1500 km)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✈️ Warszawa–Londyn (1458 km)</li>
                  <li>✈️ Kraków–Paryż (1272 km)</li>
                  <li>✈️ Gdańsk–Berlin (419 km)</li>
                  <li>✈️ Katowice–Rzym (1169 km)</li>
                  <li>✈️ Wrocław–Amsterdam (823 km)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-3">400 € (1500–3500 km)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✈️ Warszawa–Lizbona (2879 km)</li>
                  <li>✈️ Gdańsk–Tel Awiw (2467 km)</li>
                  <li>✈️ Kraków–Dubaj (3818 km, ale poza UE)</li>
                  <li>✈️ Warszawa–Tunezja (1952 km)</li>
                  <li>✈️ Katowice–Hurghada (2654 km)</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-3">600 € (powyżej 3500 km)</h3>
                <ul className="space-y-2 text-gray-700 text-sm grid md:grid-cols-2 gap-2">
                  <li>✈️ Warszawa–Nowy Jork (6916 km)</li>
                  <li>✈️ Kraków–Chicago (7201 km)</li>
                  <li>✈️ Gdańsk–Bangkok (8132 km)</li>
                  <li>✈️ Warszawa–Tokio (8556 km)</li>
                  <li>✈️ Katowice–Toronto (6938 km)</li>
                  <li>✈️ Warszawa–Los Angeles (9623 km)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Czy kwota może być niższa?</h2>

            <p className="text-gray-700 mb-4">
              Tak, w jednym przypadku: jeśli linia lotnicza zaproponowała Ci <strong>lot zastępczy</strong>, 
              który dotarł do miejsca docelowego z opóźnieniem mniejszym niż:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>2 godziny (dla lotów do 1500 km) → odszkodowanie nie przysługuje</li>
              <li>3 godziny (dla lotów 1500–3500 km) → odszkodowanie może być zmniejszone o 50%</li>
              <li>4 godziny (dla lotów powyżej 3500 km) → odszkodowanie może być zmniejszone o 50%</li>
            </ul>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Przykład:</h3>
              <p className="text-gray-700 mb-3">
                Lot Warszawa–Nowy Jork (6916 km) został odwołany. Linia zaproponowała lot zastępczy, 
                który dotarł do celu z opóźnieniem 3,5 godziny.
              </p>
              <p className="text-gray-700">
                <strong>Standardowe odszkodowanie:</strong> 600 €<br />
                <strong>Opóźnienie lotu zastępczego:</strong> 3,5 godziny (mniej niż 4)<br />
                <strong>Faktyczne odszkodowanie:</strong> 300 € (50% z 600 €)
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dodatkowe prawa pasażera</h2>

            <p className="text-gray-700 mb-6">
              Oprócz odszkodowania pieniężnego, przysługują Ci również:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Prawo do opieki
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Posiłki i napoje (proporcjonalnie do czasu oczekiwania)</li>
                  <li>• 2 rozmowy telefoniczne lub e-maile</li>
                  <li>• Nocleg w hotelu (jeśli konieczne)</li>
                  <li>• Transport między lotniskiem a hotelem</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Prawo do zwrotu
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Zwrot pełnej ceny biletu (jeśli rezygnujesz z lotu)</li>
                  <li>• Lot powrotny do punktu wyjścia (jeśli ma to sens)</li>
                  <li>• To niezależne od odszkodowania!</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy odszkodowanie zależy od ceny biletu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nie! Nawet jeśli kupiłeś bilet promocyjny za 50 zł, przysługuje Ci pełne odszkodowanie 
                  (250-600 €) w zależności od dystansu. Wysokość odszkodowania jest ustalona przez prawo 
                  unijne i nie zależy od ceny biletu.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy dziecko też dostaje odszkodowanie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Jeśli dziecko miało wykupiony osobny bilet (nawet bilet dziecięcy), przysługuje mu 
                  pełne odszkodowanie na takich samych zasadach jak dorosłemu. Niemowlę lecące na kolanach 
                  (infant) również może dostać odszkodowanie, jeśli opłacono za nie bilet.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy klasa biznes dostaje więcej?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nie. Kwota odszkodowania jest taka sama dla wszystkich klas podróży – ekonomicznej, 
                  premium economy, biznes i pierwszej. Wszystko zależy wyłącznie od dystansu lotu.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy dostaję 600 € za każdy odcinek lotu z przesiadką?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nie. Jeśli lot składał się z jednej rezerwacji (np. Warszawa–Londyn–Nowy Jork), 
                  odszkodowanie liczy się od całkowitego dystansu (Warszawa–Nowy Jork). Jeśli jednak 
                  kupiłeś dwie osobne rezerwacje, każda może być rozpatrywana oddzielnie.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Kto płaci odszkodowanie – linia czy ubezpieczyciel?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Odszkodowanie wypłaca <strong>linia lotnicza</strong>, nie ubezpieczyciel. To jest 
                  obowiązek prawny przewoźnika wynikający z rozporządzenia EU261. Ubezpieczenie podróżne 
                  to dodatkowy benefit, który może pokryć inne koszty (np. utratę bagażu).
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę dostać odszkodowanie + zwrot biletu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak, ale tylko w przypadku odwołanego lotu. Jeśli lot został odwołany i zdecydowałeś 
                  się zrezygnować z podróży, możesz dostać zwrot pełnej ceny biletu PLUS odszkodowanie 
                  250-600 €. W przypadku opóźnionego lotu, który ostatecznie wystartował, zwrot biletu 
                  nie przysługuje.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Sprawdź swoją sprawę w 2 minuty
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Podaj szczegóły swojego lotu, a nasz system automatycznie obliczy kwotę odszkodowania 
              i szanse powodzenia sprawy.
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Sprawdź odszkodowanie
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm mt-6 opacity-75">
              ✓ Bez ukrytych kosztów ✓ Płatność tylko w przypadku sukcesu ✓ Średnio 600 € wypłaty
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie</h2>
            
            <p className="text-gray-700 mb-6">
              Wysokość odszkodowania za opóźniony lot jest ściśle określona przez rozporządzenie EU261 
              i zależy wyłącznie od dystansu lotu:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>250 €</strong> dla lotów do 1500 km</li>
              <li><strong>400 €</strong> dla lotów 1500–3500 km (lub powyżej 1500 km poza UE)</li>
              <li><strong>600 €</strong> dla lotów powyżej 3500 km</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Kwota nie zależy od ceny biletu, klasy podróży, czy typu rezerwacji. Każdy pasażer ma 
              prawo do tej samej kwoty za tę samą trasę.
            </p>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 mb-0">
                💡 <strong>Wskazówka:</strong> Jeśli nie jesteś pewien dystansu swojego lotu lub 
                chcesz szybko sprawdzić wysokość odszkodowania, skorzystaj z darmowego kalkulatora 
                ClaimWinger. System automatycznie obliczy dystans i poinformuje Cię o przysługującej 
                kwocie.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Plane className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Odszkodowanie LOT Polish Airlines</span>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Plane className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak złożyć wniosek o odszkodowanie</span>
              </Link>
              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Plane className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Nadzwyczajne okoliczności</span>
              </Link>
              <Link href="/blog/przedawnienie-roszczen-lotniczych" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Plane className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Przedawnienie roszczeń</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
