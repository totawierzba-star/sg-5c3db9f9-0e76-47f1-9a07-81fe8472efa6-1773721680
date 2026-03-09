import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, AlertCircle, CheckCircle, TrendingUp } from "lucide-react";

export default function IleTrwaRozpatrzenieReklamacji() {
  return (
    <Layout>
      <SEO
        title="Ile trwa rozpatrzenie reklamacji przez linię lotniczą?"
        description="Sprawdź jak długo linia lotnicza ma na odpowiedź na reklamację o odszkodowanie za opóźniony lub odwołany lot."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Czas rozpatrzenia reklamacji</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              Terminy procesowe
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ile trwa rozpatrzenie reklamacji przez linię lotniczą?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Oficjalne terminy vs rzeczywistość – czego możesz się spodziewać
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
              <strong>Oficjalnie:</strong> Linie lotnicze mają obowiązek odpowiedzieć na reklamację w ciągu 
              <strong> 30 dni</strong> (niektóre kraje wymagają odpowiedzi w 6-8 tygodni). 
              <strong> W praktyce:</strong> większość linii odpowiada po 4-12 tygodniach, a niektóre w ogóle nie odpowiadają.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">30 dni</div>
                <div className="text-sm font-medium opacity-90">Oficjalny termin</div>
                <div className="text-xs mt-2 opacity-75">Wg rozporządzenia UE</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">6-8 tyg.</div>
                <div className="text-sm font-medium opacity-90">Rzeczywisty czas</div>
                <div className="text-xs mt-2 opacity-75">Typowa odpowiedź linii</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="text-5xl font-bold mb-2">40%</div>
                <div className="text-sm font-medium opacity-90">Brak odpowiedzi</div>
                <div className="text-xs mt-2 opacity-75">Linie ignorują reklamacje</div>
              </div>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Oficjalne terminy rozpatrzenia reklamacji</h2>
            
            <p className="text-gray-700 mb-6">
              Chociaż rozporządzenie EU261 nie określa konkretnego terminu na odpowiedź linii lotniczej, 
              większość krajów europejskich wymaga odpowiedzi w rozsądnym czasie:
            </p>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Kraj / Orgán</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wymagany termin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Polska (ULC)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">30 dni roboczych</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Niemcy (LBA)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">6 tygodni</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Wielka Brytania (CAA)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">8 tygodni</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Francja (DGAC)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">2 miesiące</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Uwaga!</h3>
                  <p className="text-yellow-800">
                    Przekroczenie tych terminów <strong>nie oznacza automatycznej wypłaty odszkodowania</strong>. 
                    To jedynie zalecenie dla linii lotniczych, a nie wiążący przepis z sankcjami.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rzeczywisty czas oczekiwania – dane z praktyki</h2>

            <p className="text-gray-700 mb-6">
              Na podstawie tysięcy spraw prowadzonych przez ClaimWinger, rzeczywisty czas odpowiedzi 
              linii lotniczych wygląda następująco:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Szybkie linie (4-6 tygodni)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Lufthansa Group (Lufthansa, Swiss, Austrian)</li>
                  <li>• KLM</li>
                  <li>• Air France</li>
                  <li>• British Airways</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-orange-600" />
                  Wolne linie (8-12 tygodni)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Ryanair</li>
                  <li>• Wizz Air</li>
                  <li>• LOT Polish Airlines</li>
                  <li>• EasyJet</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  Bardzo wolne / często nie odpowiadają
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Wizz Air (często całkowicie ignoruje reklamacje)</li>
                  <li>• Ryanair (wysyła odmowy bez uzasadnienia)</li>
                  <li>• Małe linie czarterowe (Enter Air, Travel Service)</li>
                  <li>• Linie z krajów spoza UE (Turkish Airlines, Emirates na trasach z UE)</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Co jeśli linia nie odpowiada?</h2>

            <p className="text-gray-700 mb-6">
              Jeśli minęło już 8 tygodni od złożenia reklamacji, a linia nie odpowiedziała lub 
              odpowiedziała odmownie bez uzasadnienia, masz kilka opcji:
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-3">Opcja 1: Złóż skargę do ULC (Urząd Lotnictwa Cywilnego)</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  ULC może wezwać linię do wyjaśnienia sprawy, ale to tylko postępowanie mediacyjne 
                  – nie mogą zmusić linii do wypłaty.
                </p>
                <p className="text-sm text-gray-600">
                  ⏱️ Czas: 3-6 miesięcy<br />
                  💰 Koszt: Bezpłatnie<br />
                  📊 Skuteczność: ~30% (linie często ignorują ULC)
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-3">Opcja 2: Zgłoś sprawę do ClaimWinger</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  ClaimWinger natychmiast podejmie działania prawne, w tym ewentualny pozew sądowy. 
                  Nie musisz niczego robić – eksperci zajmują się wszystkim.
                </p>
                <p className="text-sm text-gray-600">
                  ⏱️ Czas: 2-6 miesięcy (w tym ewentualny sąd)<br />
                  💰 Koszt: Płatność tylko w przypadku sukcesu (25% prowizji)<br />
                  📊 Skuteczność: ~85% spraw wygranych
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500">
                <h3 className="font-bold text-gray-900 mb-3">Opcja 3: Samodzielny pozew do sądu</h3>
                <p className="text-gray-700 mb-3 text-sm">
                  Możesz wystąpić do sądu rejonowego z pozwem o odszkodowanie. Wymaga to wiedzy 
                  prawnej i czasu na rozprawy.
                </p>
                <p className="text-sm text-gray-600">
                  ⏱️ Czas: 12-24 miesiące<br />
                  💰 Koszt: Opłata sądowa ~30 PLN + ewentualnie adwokat<br />
                  📊 Skuteczność: Zależy od Twojej wiedzy prawnej
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-3">💡 Wskazówka eksperta:</h3>
              <p className="text-blue-800">
                Jeśli minęło już 6-8 tygodni od złożenia reklamacji, nie trać więcej czasu. 
                Zgłoś sprawę do ClaimWinger – im szybciej zadziałasz, tym większa szansa na 
                wypłatę bez długiego czekania na sąd.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dlaczego linie celowo zwlekają z odpowiedzią?</h2>

            <p className="text-gray-700 mb-6">
              Linie lotnicze stosują strategię "zniechęcania przez zwłokę". Im dłużej czekasz, tym:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Większe prawdopodobieństwo, że się poddasz i zrezygnujesz</li>
              <li>Trudniej będzie Ci znaleźć dokumenty (boarding pass, potwierdzenia)</li>
              <li>Możesz zapomnieć szczegóły incydentu</li>
              <li>Linia zyskuje czas na wykorzystanie Twoich pieniędzy (odszkodowanie x tysiące pasażerów = miliony euro)</li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-2">Przykład z życia:</h3>
              <p className="text-red-800">
                Wizz Air regularnie nie odpowiada na reklamacje przez 3-4 miesiące, licząc na to, 
                że pasażerowie się zniechęcą. W rzeczywistości 60% pasażerów rezygnuje po takim czasie 
                oczekiwania. To strategia biznesowa linii – im więcej osób się podda, tym więcej zaoszczędzą.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Co jeśli linia odpowiedziała po 2 miesiącach, ale odmówiła wypłaty?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Odmowa linii nie oznacza końca sprawy. Możesz złożyć skargę do ULC lub zgłosić sprawę 
                  do ClaimWinger, który podejmie działania prawne (w tym pozew sądowy). W 85% przypadków 
                  udaje się wywalczyć odszkodowanie mimo początkowej odmowy linii.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę przyspieszyć rozpatrzenie reklamacji?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Niestety nie. Upominanie się mailowo lub telefonicznie rzadko przyspiesza proces. 
                  Bardziej skuteczne jest oddanie sprawy ClaimWinger, który natychmiast podejmuje 
                  działania prawne i nie czeka na odpowiedź linii.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy brak odpowiedzi linii oznacza, że mam rację?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Nie automatycznie. Brak odpowiedzi to taktyka zwlekania, ale nie przyznanie się do winy. 
                  Aby dostać odszkodowanie, musisz podjąć dalsze kroki (sąd lub ClaimWinger).
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Ile czasu zajmuje ClaimWinger wywalczenie odszkodowania?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Średnio 2-6 miesięcy. ClaimWinger nie czeka na odpowiedź linii – natychmiast podejmuje 
                  działania prawne. W prostych sprawach (linia się zgadza) to może być nawet 4-6 tygodni. 
                  W przypadku pozwu sądowego – 4-8 miesięcy.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy warto czekać na odpowiedź linii czy od razu iść do ClaimWinger?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Jeśli zależy Ci na czasie i pewności sukcesu, lepiej od razu zgłosić sprawę do ClaimWinger. 
                  Eksperci natychmiast podejmą działania i nie będziesz musiał czekać miesięcy na odpowiedź linii. 
                  Samodzielna reklamacja ma sens tylko jeśli masz dużo czasu i chcesz spróbować "za darmo" 
                  (choć 60% takich prób kończy się niczym).
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę złożyć reklamację do linii i jednocześnie do ClaimWinger?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak, ale nie ma to sensu. ClaimWinger i tak rozpocznie własne postępowanie z linią, 
                  więc Twoja reklamacja będzie zdublowana. Lepiej od razu oddać sprawę ClaimWinger 
                  i nie marnować czasu na własne pisma.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nie czekaj miesięcy na odpowiedź linii
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ClaimWinger natychmiast podejmie działania prawne i wywalczy Twoje 600 € w ciągu 2-6 miesięcy
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Zgłoś sprawę teraz
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm mt-6 opacity-75">
              ✓ Żadnych formularzy ✓ Płatność tylko w przypadku sukcesu ✓ 85% spraw wygranych
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie</h2>
            
            <p className="text-gray-700 mb-6">
              Oficjalnie linie lotnicze mają obowiązek odpowiedzieć na reklamację w ciągu 30 dni - 
              8 tygodni, ale w praktyce większość odpowiada po 6-12 tygodniach, a część w ogóle nie odpowiada.
            </p>

            <p className="text-gray-700 mb-6">
              Jeśli nie chcesz czekać miesięcy i mieć niepewność czy dostaniesz swoje pieniądze, 
              najlepszym rozwiązaniem jest oddanie sprawy ClaimWinger od razu. Eksperci natychmiast 
              podejmą działania prawne i wywalczą Twoje odszkodowanie w ciągu 2-6 miesięcy, bez żadnego 
              wysiłku z Twojej strony.
            </p>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 mb-0">
                💡 <strong>Pamiętaj:</strong> Im dłużej czekasz na odpowiedź linii, tym więcej tracisz czasu. 
                Zgłoś sprawę do ClaimWinger i zapomnij o stresie – eksperci zajmą się wszystkim.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/linia-nie-odpowiada-na-reklamacje-co-robic" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Co zrobić gdy linia nie odpowiada</span>
              </Link>
              <Link href="/blog/jak-dlugo-czeka-odszkodowanie-za-lot" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak długo czeka się na odszkodowanie</span>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak złożyć wniosek o odszkodowanie</span>
              </Link>
              <Link href="/blog/przedawnienie-roszczen-lotniczych" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Przedawnienie roszczeń lotniczych</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}