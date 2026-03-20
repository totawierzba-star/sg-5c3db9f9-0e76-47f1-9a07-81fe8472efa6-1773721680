import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Globe, AlertTriangle, CheckCircle2, XCircle, Plane } from "lucide-react";

export default function LotyPozaUEPage() {
  return (
    <Layout>
      <SEO 
        title="Loty wakacyjne poza UE (Turcja, Egipt, Tunezja) – czy przysługuje odszkodowanie EU261?"
        description="Czy za opóźniony lot do Turcji, Egiptu lub Tunezji przysługuje odszkodowanie? Sprawdź, które loty czarterowe i regularne podlegają EU261."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Strona główna</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Loty poza UE</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4" />
            Prawo lotnicze
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Loty wakacyjne poza UE (Turcja, Egipt, Tunezja) – czy przysługuje odszkodowanie?
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>22 lutego 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min czytania</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Lead */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed m-0">
              <strong>Planujesz wakacje w Turcji, Egipcie lub Tunezji?</strong> Wiele osób nie zdaje sobie sprawy, że <strong>niektóre loty poza UE również podlegają Rozporządzeniu UE 261/2004</strong> i możesz dostać odszkodowanie za opóźnienie lub odwołanie. Kluczem jest zrozumienie, które loty są chronione, a które nie.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Plane className="w-8 h-8 text-blue-600" />
              Które loty poza UE podlegają EU261?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Rozporządzenie UE 261/2004 <strong>nie działa automatycznie dla wszystkich lotów międzynarodowych</strong>. Obowiązuje tylko wtedy, gdy spełniony jest jeden z dwóch warunków:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Warunek 1: Lot wychodzi z UE
                </h3>
                <p className="text-gray-700">
                  Jeśli Twój lot <strong>startuje z lotniska na terytorium UE</strong> (np. Warszawa, Kraków, Gdańsk), to EU261 obowiązuje <strong>niezależnie od tego, dokąd lecisz</strong> i kim jest przewoźnik.
                </p>
                <p className="text-sm text-green-700 mt-3 font-semibold">
                  ✓ Warszawa → Antalya (Turcja) = EU261<br />
                  ✓ Kraków → Hurghada (Egipt) = EU261<br />
                  ✓ Gdańsk → Djerba (Tunezja) = EU261
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  Warunek 2: Przewoźnik unijny
                </h3>
                <p className="text-gray-700">
                  Jeśli lot wykonuje <strong>przewoźnik z siedzibą w UE</strong> (LOT, Ryanair, Wizz Air, Lufthansa, Air France itp.), to EU261 obowiązuje również na lotach <strong>powrotnych spoza UE</strong>.
                </p>
                <p className="text-sm text-blue-700 mt-3 font-semibold">
                  ✓ Antalya → Warszawa (LOT) = EU261<br />
                  ✓ Hurghada → Kraków (Ryanair Sun) = EU261<br />
                  ✗ Antalya → Warszawa (Turkish Airlines) = brak EU261
                </p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>⚠️ Ważne:</strong> Jeśli lot powrotny wykonuje przewoźnik spoza UE (np. Turkish Airlines, EgyptAir), to <strong>nie podlega EU261</strong>, nawet jeśli ląduje w Polsce.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Globe className="w-8 h-8 text-blue-600" />
              Popularne kierunki wakacyjne i status EU261
            </h2>

            <div className="space-y-4">
              {/* Turkey */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇹🇷 Turcja (Antalya, Bodrum, Dalaman)</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Warszawa → Antalya (LOT, Ryanair Sun, Enter Air)</p>
                      <p className="text-sm text-gray-700">EU261: Tak | Odszkodowanie: 400 EUR za 3h+ opóźnienie</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Antalya → Warszawa (LOT, Enter Air)</p>
                      <p className="text-sm text-gray-700">EU261: Tak (przewoźnik unijny)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Antalya → Warszawa (Turkish Airlines, Pegasus)</p>
                      <p className="text-sm text-gray-700">EU261: Nie (przewoźnik spoza UE, lot z kraju trzeciego)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Egypt */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇪🇬 Egipt (Hurghada, Sharm el-Sheikh, Marsa Alam)</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Warszawa → Hurghada (LOT, Enter Air)</p>
                      <p className="text-sm text-gray-700">EU261: Tak | Odszkodowanie: 400 EUR</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Hurghada → Warszawa (LOT, Enter Air)</p>
                      <p className="text-sm text-gray-700">EU261: Tak (przewoźnik unijny)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Hurghada → Warszawa (EgyptAir)</p>
                      <p className="text-sm text-gray-700">EU261: Nie</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tunisia */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🇹🇳 Tunezja (Djerba, Monastir)</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Warszawa → Djerba (Enter Air, charter)</p>
                      <p className="text-sm text-gray-700">EU261: Tak | Odszkodowanie: 400 EUR</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Djerba → Warszawa (Enter Air)</p>
                      <p className="text-sm text-gray-700">EU261: Tak (przewoźnik unijny)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Djerba → Warszawa (Tunisair)</p>
                      <p className="text-sm text-gray-700">EU261: Nie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Twój lot wakacyjny był opóźniony lub odwołany?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Sprawdź z ClaimWinger, czy przysługuje Ci odszkodowanie do 600 EUR! Obsługujemy loty do Turcji, Egiptu, Tunezji i wielu innych destynacji.
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Sprawdź swoje roszczenie
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-blue-200 mt-4">
                ✓ Bezpłatna weryfikacja roszczenia<br />
                ✓ Płacisz tylko w przypadku sukcesu<br />
                ✓ Specjalizacja w lotach czarterowych
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Co z lotami czarterowymi (all-inclusive)?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Loty czarterowe również podlegają EU261!</strong> Wielu pasażerów myśli, że wykupienie wycieczki „all-inclusive" przez biuro podróży (Rainbow Tours, Itaka, TUI) oznacza brak prawa do odszkodowania. To nieprawda!
            </p>

            <div className="bg-green-50 border border-green-500 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">✓ Loty czarterowe chronione przez EU261:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Enter Air</strong> (największy polski przewoźnik czarterowy) – EU261 obowiązuje w pełni</li>
                <li>• <strong>Ryanair Sun</strong> (część grupy Ryanair) – EU261</li>
                <li>• <strong>Travel Service</strong> (SmartWings) – EU261 (przewoźnik czeski)</li>
                <li>• <strong>Corendon Airlines Europe</strong> – EU261 (rejestracja na Malcie)</li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              <strong>Zasada:</strong> Jeśli lot czarterowy wykonuje przewoźnik unijny i wychodzi z Polski, to <strong>zawsze</strong> podlega EU261. Nie ma znaczenia, czy kupiłeś bilet bezpośrednio, czy jako część pakietu „all-inclusive".
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>💡 Wskazówka:</strong> Biura podróży często próbują zniechęcić pasażerów do reklamacji, mówiąc że „to lot czarterowy, nie ma odszkodowania". To nieprawda! Możesz ubiegać się o odszkodowanie niezależnie od biura podróży.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Najczęściej zadawane pytania
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy za lot do Dubaju (ZEA) przysługuje odszkodowanie EU261?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Lot z Polski do Dubaju:</strong> Tak (lot wychodzi z UE → EU261 obowiązuje).<br />
                  <strong>Lot z Dubaju do Polski (Emirates):</strong> Nie (przewoźnik spoza UE, lot z kraju trzeciego).<br />
                  <strong>Lot z Dubaju do Polski (LOT, np. via Warszawa):</strong> Tak (przewoźnik unijny).
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę dostać odszkodowanie za opóźniony lot czarterowy Enter Air?
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Enter Air to polski przewoźnik unijny, więc wszystkie jego loty (zarówno regularne, jak i czarterowe) podlegają EU261. Jeśli lot był opóźniony o 3h+, przysługuje Ci 250–600 EUR odszkodowania.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Co jeśli kupiłem wycieczkę „all-inclusive" przez biuro podróży?
                </summary>
                <p className="text-gray-700 mt-4">
                  Nie ma znaczenia, czy kupiłeś bilet osobno, czy w ramach pakietu wakacyjnego. Jeśli lot wykonuje przewoźnik unijny (Enter Air, LOT, Ryanair Sun), to <strong>masz pełne prawo do odszkodowania</strong> od linii lotniczej. Biuro podróży nie może tego zablokować.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy za lot Turkish Airlines z Warszawy do Stambułu przysługuje EU261?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Lot Warszawa → Stambuł (Turkish Airlines):</strong> Tak! (lot wychodzi z UE, więc EU261 obowiązuje nawet dla przewoźnika spoza UE).<br />
                  <strong>Lot Stambuł → Warszawa (Turkish Airlines):</strong> Nie (przewoźnik spoza UE, lot z kraju trzeciego).
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Ile wynosi odszkodowanie za lot do Turcji/Egiptu?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Turcja, Egipt, Tunezja:</strong> To loty w przedziale 1 500–3 500 km, więc odszkodowanie wynosi <strong>400 EUR za opóźnienie 3h+</strong> lub odwołanie lotu bez wcześniejszego powiadomienia (min. 14 dni).
                </p>
              </details>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Przeczytaj również:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/enter-air-odszkodowanie-czarter" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Enter Air – odszkodowanie za loty czarterowe
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Kompletny przewodnik po odszkodowaniach od Enter Air dla lotów wakacyjnych.
                  </p>
                </div>
              </Link>
              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Nadzwyczajne okoliczności – kiedy nie ma odszkodowania?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dowiedz się, kiedy linia lotnicza może legalnie odmówić wypłaty.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
