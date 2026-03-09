import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, AlertCircle, CheckCircle } from "lucide-react";

export default function JakDlugoNaReklamacje() {
  return (
    <Layout>
      <SEO
        title="Jak długo mam na złożenie reklamacji za opóźniony lot?"
        description="Sprawdź terminy przedawnienia roszczeń lotniczych w Polsce i EU. Masz 3 lata, ale im szybciej tym lepiej."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Termin złożenia reklamacji</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Calendar className="h-4 w-4" />
              Przedawnienie
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Jak długo mam na złożenie reklamacji za opóźniony lot?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              W Polsce: 3 lata od daty lotu, ale nie zwlekaj bez powodu
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
              W Polsce masz <strong>3 lata</strong> od daty lotu na złożenie reklamacji i dochodzenie odszkodowania. 
              Jednak zalecamy działać szybciej:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">2-4 tyg.</div>
                <div className="text-sm font-medium opacity-90">Optymalny czas</div>
                <div className="text-xs mt-2 opacity-75">Najłatwiej zebrać dowody</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">6 mies.</div>
                <div className="text-sm font-medium opacity-90">Rozsądne maximum</div>
                <div className="text-xs mt-2 opacity-75">Nadal dobra szansa powodzenia</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">3 lata</div>
                <div className="text-sm font-medium opacity-90">Termin przedawnienia</div>
                <div className="text-xs mt-2 opacity-75">Ostateczny deadline</div>
              </div>
            </div>
            <p className="text-sm opacity-90 mt-6 text-center">
              ⚠️ Im dłużej czekasz, tym trudniej udowodnić roszczenie
            </p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Terminy przedawnienia w różnych krajach EU</h2>
            
            <p className="text-gray-700 mb-6">
              Rozporządzenie EU261 nie określa jednolitego terminu przedawnienia – każdy kraj członkowski 
              ustala własne przepisy. W Polsce jest to 3 lata, ale w innych krajach może być inaczej:
            </p>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Kraj</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Termin przedawnienia</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Uwagi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Polska</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">3 lata</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Od daty planowanego przylotu</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Niemcy</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">3 lata</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Od końca roku incydentu</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Wielka Brytania</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">6 lat</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Najdłuższy termin w EU</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Francja</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">5 lat</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Od daty lotu</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Włochy</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">2 lata</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Krótszy termin</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Hiszpania</td>
                    <td className="px-6 py-4 text-sm font-bold text-blue-600">5 lat</td>
                    <td className="px-6 py-4 text-sm text-gray-600">Od daty lotu</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-3">Które prawo się stosuje?</h3>
              <p className="text-blue-800 mb-2">
                Jeśli składasz reklamację w Polsce (niezależnie od linii lotniczej), stosuje się 
                <strong> polski 3-letni termin przedawnienia</strong>.
              </p>
              <p className="text-blue-800 text-sm">
                Jeśli planujesz pozew sądowy w innym kraju EU, może obowiązywać termin tamtego kraju.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego warto działać szybko?</h2>

            <p className="text-gray-700 mb-6">
              Mimo 3-letniego terminu, im szybciej złożysz reklamację, tym lepiej:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Zalety szybkiego działania
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✅ Łatwiej zebrać dowody (boarding pass, potwierdzenia)</li>
                  <li>✅ Lepsza pamięć okoliczności incydentu</li>
                  <li>✅ Dane lotu świeże w systemach lotniskowych</li>
                  <li>✅ Linia szybciej reaguje na świeże sprawy</li>
                  <li>✅ Większa szansa na szybką wypłatę</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Ryzyka zwlekania
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>❌ Trudniej udowodnić opóźnienie po latach</li>
                  <li>❌ Możesz zgubić dokumenty (boarding pass)</li>
                  <li>❌ Linia może zakwestionować roszczenie</li>
                  <li>❌ Dłuższy czas oczekiwania na wypłatę</li>
                  <li>❌ Możesz zapomnieć szczegóły sprawy</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Od kiedy biegnie termin przedawnienia?</h2>

            <p className="text-gray-700 mb-6">
              W Polsce 3-letni termin przedawnienia zaczyna biec od:
            </p>

            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">1.</span>
                  <div>
                    <strong>Daty planowanego przylotu</strong> (dla opóźnień)<br />
                    <span className="text-sm text-gray-600">
                      Przykład: Lot miał przylecieć 15.01.2025 → termin upływa 15.01.2028
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">2.</span>
                  <div>
                    <strong>Daty odwołania lotu</strong> (dla anulowanych lotów)<br />
                    <span className="text-sm text-gray-600">
                      Przykład: Lot odwołany 10.02.2025 → termin upływa 10.02.2028
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-600">3.</span>
                  <div>
                    <strong>Daty utraconej przesiadki</strong> (dla missed connection)<br />
                    <span className="text-sm text-gray-600">
                      Przykład: Utracona przesiadka 20.03.2025 → termin upływa 20.03.2028
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Uwaga!</h3>
                  <p className="text-yellow-800">
                    Termin przedawnienia nie przerywa się automatycznie złożeniem reklamacji do linii. 
                    Jeśli linia nie wypłaci odszkodowania, musisz wnieść pozew do sądu <strong>przed upływem 
                    3 lat</strong> od daty incydentu.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Co jeśli termin już minął?</h2>

            <p className="text-gray-700 mb-6">
              Jeśli minęło już więcej niż 3 lata od daty lotu, roszczenie jest niestety przedawnione 
              i nie ma już możliwości dochodzenia odszkodowania.
            </p>

            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-3">Przykład przedawnionego roszczenia:</h3>
              <p className="text-red-800 mb-2">
                <strong>Data lotu:</strong> 10.05.2021<br />
                <strong>Termin przedawnienia:</strong> 10.05.2024<br />
                <strong>Dzisiaj:</strong> 25.02.2025
              </p>
              <p className="text-red-800 font-bold">
                ❌ Roszczenie przedawnione – nie można już dochodzić odszkodowania
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Jak złożyć reklamację przed upływem terminu?</h2>

            <p className="text-gray-700 mb-6">
              Jeśli zbliża się koniec 3-letniego terminu, masz dwie opcje:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-3">Opcja 1: ClaimWinger (zalecane)</h3>
                <p className="text-gray-700 mb-3">
                  Najszybszy sposób – wypełnij formularz online i ClaimWinger zajmie się resztą, 
                  w tym ewentualnym pozwem sądowym przed upływem terminu.
                </p>
                <p className="text-sm text-gray-600">
                  ✅ Żadnych formalności z Twojej strony<br />
                  ✅ Eksperci dbają o terminy<br />
                  ✅ W razie potrzeby wniosą pozew przed przedawnieniem
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-3">Opcja 2: Samodzielnie</h3>
                <p className="text-gray-700 mb-3">
                  Złóż reklamację przez formularz linii lotniczej. Jeśli linia odmówi lub nie odpowie, 
                  musisz wnieść pozew do sądu <strong>przed upływem 3 lat</strong>.
                </p>
                <p className="text-sm text-gray-600">
                  ⚠️ Ryzyko: Możesz nie zdążyć z pozwem sądowym<br />
                  ⚠️ Wymaga wiedzy prawnej i pilnowania terminów
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę reklamować lot sprzed 2 lat?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! W Polsce masz 3 lata od daty lotu, więc lot sprzed 2 lat nadal można reklamować. 
                  Jednak zalecamy działać szybko – im dłużej czekasz, tym trudniej zebrać dowody.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Co jeśli złożyłem reklamację 2 lata temu i linia nie odpowiedziała?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Złożenie reklamacji NIE przerywa biegu przedawnienia. Jeśli linia nie wypłaciła 
                  odszkodowania, musisz wnieść pozew do sądu przed upływem 3 lat od daty lotu. 
                  Skorzystaj z ClaimWinger – zajmą się tym za Ciebie.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy linia może odmówić ze względu na czas który minął?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Linia nie może odmówić tylko dlatego, że minęło np. pół roku. Dopóki nie upłynął 
                  3-letni termin przedawnienia, masz pełne prawo do odszkodowania. Linie często próbują 
                  odstraszać pasażerów tym argumentem – nie daj się!
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy termin liczy się od wylotu czy przylotu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  W przypadku opóźnień – od planowanej daty <strong>przylotu</strong>. W przypadku 
                  odwołanych lotów – od daty, w której miał odbyć się lot. To jest data, od której 
                  biegnie 3-letni termin.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Co jeśli zgubiłem boarding pass?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nie jest to problem! ClaimWinger może pozyskać dane lotu z systemu linii lub innych 
                  źródeł (FlightRadar, potwierdzenie rezerwacji). Boarding pass pomaga, ale nie jest 
                  konieczny do dochodzenia roszczenia.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę reklamować kilka lotów jednocześnie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Możesz złożyć reklamacje za wszystkie opóźnione/odwołane loty z ostatnich 3 lat. 
                  Każdy lot to osobna sprawa z osobnym terminem przedawnienia.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nie czekaj aż termin minie – sprawdź teraz
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Masz 3 lata, ale im szybciej zadziałasz, tym lepiej. ClaimWinger załatwi wszystko za Ciebie.
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Sprawdź swoje roszczenie
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm mt-6 opacity-75">
              ✓ Darmowa weryfikacja ✓ Płatność tylko w przypadku sukcesu ✓ Dbamy o terminy
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie</h2>
            
            <p className="text-gray-700 mb-6">
              W Polsce masz <strong>3 lata</strong> od daty lotu na złożenie reklamacji i dochodzenie 
              odszkodowania za opóźniony lub odwołany lot. Termin ten liczy się od planowanej daty 
              przylotu (dla opóźnień) lub od daty odwołania lotu.
            </p>

            <p className="text-gray-700 mb-6">
              Mimo długiego terminu, zalecamy działać szybko (2-4 tygodnie) – łatwiej zebrać dowody 
              i większa szansa na szybką wypłatę.
            </p>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 mb-0">
                💡 <strong>Wskazówka:</strong> Jeśli zbliża się koniec 3-letniego terminu lub nie jesteś 
                pewien czy zdążysz – skorzystaj z ClaimWinger. Eksperci zadbają o terminy i w razie 
                potrzeby wniosą pozew sądowy przed przedawnieniem.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/przedawnienie-roszczen-lotniczych" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Przedawnienie roszczeń lotniczych</span>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak złożyć wniosek o odszkodowanie</span>
              </Link>
              <Link href="/blog/jak-dlugo-czeka-odszkodowanie-za-lot" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak długo czeka się na odszkodowanie</span>
              </Link>
              <Link href="/blog/linia-nie-odpowiada-na-reklamacje-co-robic" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Linia nie odpowiada na reklamację</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}