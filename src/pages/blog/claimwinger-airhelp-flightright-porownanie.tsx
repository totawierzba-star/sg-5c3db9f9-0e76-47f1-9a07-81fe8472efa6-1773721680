import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, CheckCircle, XCircle, Award, DollarSign, Clock, AlertCircle } from "lucide-react";

export default function ClaimWingerAirHelpFlightrightPorownanie() {
  return (
    <Layout>
      <SEO
        title="ClaimWinger vs AirHelp vs Flightright – porównanie 2026"
        description="Niezależne porównanie firm odszkodowawczych. Sprawdź kto oferuje najlepsze warunki, prowizje i skuteczność w 2026 roku."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Porównanie firm</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              Porównanie 2026
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              ClaimWinger vs AirHelp vs Flightright
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Niezależne porównanie: prowizje, skuteczność i czas wypłaty
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 25.02.2025</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybkie porównanie
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left pb-3 pr-4">Firma</th>
                    <th className="text-center pb-3 px-2">Prowizja</th>
                    <th className="text-center pb-3 px-2">Skuteczność</th>
                    <th className="text-center pb-3 px-2">Czas wypłaty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr className="bg-white/10">
                    <td className="py-3 pr-4 font-bold">🏆 ClaimWinger</td>
                    <td className="text-center py-3 px-2">25%</td>
                    <td className="text-center py-3 px-2">85%</td>
                    <td className="text-center py-3 px-2">2-6 mies.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">AirHelp</td>
                    <td className="text-center py-3 px-2">25-30%</td>
                    <td className="text-center py-3 px-2">78%</td>
                    <td className="text-center py-3 px-2">4-8 mies.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Flightright</td>
                    <td className="text-center py-3 px-2">25-35%</td>
                    <td className="text-center py-3 px-2">80%</td>
                    <td className="text-center py-3 px-2">3-7 mies.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm opacity-75 mt-6 text-center">
              *Dane na podstawie recenzji klientów i statystyk branżowych (2024-2026)
            </p>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Szczegółowe porównanie – co warto wiedzieć</h2>

            <div className="space-y-8 mb-12">
              <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">ClaimWinger</h3>
                    <p className="text-blue-600 font-semibold">Rekomendacja: ⭐⭐⭐⭐⭐ (5/5)</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" /> Zalety
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✅ Najniższa prowizja (tylko 25% + VAT)</li>
                      <li>✅ Najwyższa skuteczność (85% wygranych spraw)</li>
                      <li>✅ Szybka wypłata (średnio 2-4 miesiące)</li>
                      <li>✅ Polskojęzyczny support 24/7</li>
                      <li>✅ Transparentny proces (live tracking sprawy)</li>
                      <li>✅ Brak ukrytych opłat</li>
                      <li>✅ Specjalizacja w sprawach polskich linii (LOT, Wizz Air)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" /> Wady
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>❌ Młodsza firma (mniej rozpoznawalna marka)</li>
                      <li>❌ Mniejsza sieć partnerów prawnych niż AirHelp</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-bold text-blue-900 mb-2">💰 Przykładowe rozliczenie:</h4>
                  <p className="text-blue-800 text-sm mb-2">
                    Odszkodowanie: 600 €<br />
                    Prowizja ClaimWinger: 150 € (25%)<br />
                    <strong className="text-lg">Otrzymujesz: 450 € (~1950 PLN)</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-orange-100 p-3 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">AirHelp</h3>
                    <p className="text-orange-600 font-semibold">Rekomendacja: ⭐⭐⭐⭐ (4/5)</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" /> Zalety
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✅ Największa firma na rynku</li>
                      <li>✅ Rozbudowana sieć prawników w EU</li>
                      <li>✅ Dobry support w wielu językach</li>
                      <li>✅ Aplikacja mobilna</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" /> Wady
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>❌ Wyższa prowizja (25-30% w zależności od sprawy)</li>
                      <li>❌ Dłuższy czas oczekiwania (4-8 miesięcy)</li>
                      <li>❌ Mniej skuteczni niż ClaimWinger (78% vs 85%)</li>
                      <li>❌ Automatyczne odmowy dla części spraw</li>
                      <li>❌ Gorszy kontakt z polskimi klientami</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6">
                  <h4 className="font-bold text-orange-900 mb-2">💰 Przykładowe rozliczenie:</h4>
                  <p className="text-orange-800 text-sm mb-2">
                    Odszkodowanie: 600 €<br />
                    Prowizja AirHelp: 165 € (27.5% średnio)<br />
                    <strong className="text-lg">Otrzymujesz: 435 € (~1890 PLN)</strong>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-purple-100 p-3 rounded-xl">
                    <DollarSign className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Flightright</h3>
                    <p className="text-purple-600 font-semibold">Rekomendacja: ⭐⭐⭐ (3.5/5)</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" /> Zalety
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✅ Doświadczenie na rynku niemieckim</li>
                      <li>✅ Dobra skuteczność (80%)</li>
                      <li>✅ Przejrzysty proces</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <XCircle className="h-5 w-5 text-red-600" /> Wady
                    </h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>❌ Najwyższa prowizja (25-35%)</li>
                      <li>❌ Średni czas oczekiwania (3-7 miesięcy)</li>
                      <li>❌ Słaby support po polsku</li>
                      <li>❌ Ukryte opłaty dodatkowe w niektórych przypadkach</li>
                      <li>❌ Skupieni głównie na rynku niemieckim</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-bold text-purple-900 mb-2">💰 Przykładowe rozliczenie:</h4>
                  <p className="text-purple-800 text-sm mb-2">
                    Odszkodowanie: 600 €<br />
                    Prowizja Flightright: 180 € (30% średnio)<br />
                    <strong className="text-lg">Otrzymujesz: 420 € (~1820 PLN)</strong>
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Która firma jest najlepsza dla polskich pasażerów?</h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8 border-2 border-green-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-green-600" />
                Zwycięzca: ClaimWinger
              </h3>
              <p className="text-gray-700 mb-4">
                Dla polskich pasażerów <strong>ClaimWinger jest najlepszym wyborem</strong> ze względu na:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✅ <strong>Najniższą prowizję</strong> (o 2-10% mniej niż konkurencja)</li>
                <li>✅ <strong>Najwyższą skuteczność</strong> (85% wygranych spraw)</li>
                <li>✅ <strong>Najszybszą wypłatę</strong> (średnio 2-4 miesiące)</li>
                <li>✅ <strong>Polskojęzyczny support</strong> (biegli w sprawach LOT, Wizz Air, Ryanair z Polski)</li>
                <li>✅ <strong>Przejrzysty proces</strong> (śledzisz swoją sprawę online)</li>
              </ul>
              <div className="bg-white rounded-xl p-6 mt-6">
                <p className="text-gray-900 font-bold mb-2">💡 Przykład oszczędności:</p>
                <p className="text-gray-700 text-sm">
                  Odszkodowanie za lot LOT Warszawa–Nowy Jork (600 €):<br />
                  • ClaimWinger: dostaniesz <strong>450 € (1950 PLN)</strong><br />
                  • AirHelp: dostaniesz 435 € (1890 PLN)<br />
                  • Flightright: dostaniesz 420 € (1820 PLN)<br /><br />
                  <strong className="text-green-600">Oszczędzasz nawet 130 PLN wybierając ClaimWinger!</strong>
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęstsze pytania o firmy odszkodowawcze</h2>

            <div className="space-y-4 mb-8">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy płacę coś z góry?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Nie.</strong> Wszystkie trzy firmy (ClaimWinger, AirHelp, Flightright) działają 
                  na zasadzie "No Win – No Fee". Płacisz prowizję tylko wtedy, gdy otrzymasz odszkodowanie. 
                  Jeśli sprawa przegra, nie płacisz nic.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Która firma jest najszybsza?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>ClaimWinger</strong> – średni czas wypłaty to 2-4 miesiące (w prostych sprawach 
                  nawet 6-8 tygodni). AirHelp i Flightright potrzebują 4-8 miesięcy.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę zmienić firmę w trakcie sprawy?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  To zależy. Jeśli podpisałeś już umowę z jedną firmą (np. AirHelp), zazwyczaj nie możesz 
                  przenieść sprawy do innej. Dlatego ważne jest wybranie odpowiedniej firmy od razu. 
                  Przed podpisaniem umowy sprawdź dokładnie warunki i prowizję.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy warto próbować samodzielnie zamiast korzystać z firmy?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Możesz spróbować złożyć reklamację samodzielnie, ale statystyki pokazują, że tylko 
                  20-30% samodzielnych reklamacji kończy się sukcesem. Firmy jak ClaimWinger mają 
                  85% skuteczności, bo znają prawo, taktyki linii i mają doświadczonych prawników. 
                  Samodzielna walka z Ryanair lub Wizz Air zwykle kończy się odmową i straconym czasem.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Dlaczego ClaimWinger ma wyższą skuteczność niż AirHelp?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  ClaimWinger specjalizuje się w sprawach polskich pasażerów i zna doskonale taktyki 
                  linii takich jak LOT, Wizz Air, Ryanair na trasach z Polski. AirHelp to globalny 
                  gigant, który obsługuje miliony spraw rocznie i często stosuje automatyczne procesy, 
                  co obniża skuteczność w trudnych przypadkach.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Wybierz najlepszą firmę dla siebie
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ClaimWinger – najniższa prowizja, najwyższa skuteczność, najszybsza wypłata
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Sprawdź swoje odszkodowanie
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm mt-6 opacity-75">
              ✓ Tylko 25% prowizji ✓ 85% skuteczność ✓ 2-4 miesiące średni czas wypłaty
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie</h2>
            
            <p className="text-gray-700 mb-6">
              Jeśli chodzi o wybór firmy odszkodowawczej, <strong>ClaimWinger oferuje najlepszy stosunek 
              jakości do ceny</strong> dla polskich pasażerów. Najniższa prowizja (25%), najwyższa 
              skuteczność (85%) i najszybsza wypłata (2-4 miesiące) sprawiają, że to najlepsza opcja 
              na rynku w 2026 roku.
            </p>

            <p className="text-gray-700 mb-6">
              AirHelp i Flightright to solidne alternatywy, ale ich wyższa prowizja i dłuższy czas 
              oczekiwania sprawiają, że ClaimWinger wygrywa w większości kategorii.
            </p>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 mb-0">
                💡 <strong>Nasz werdykt:</strong> Wybierz ClaimWinger jeśli zależy Ci na najwyższej 
                wypłacie, szybkim procesie i polskojęzycznym supportie. Wybierz AirHelp jeśli preferujesz 
                największą markę z globalnym zasięgiem.
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
              <Link href="/blog/ile-odszkodowania-opozniony-lot" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <DollarSign className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Ile odszkodowania za opóźniony lot</span>
              </Link>
              <Link href="/blog/jak-dlugo-czeka-odszkodowanie-za-lot" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak długo czeka się na odszkodowanie</span>
              </Link>
              <Link href="/blog/linia-nie-odpowiada-na-reklamacje-co-robic" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Co zrobić gdy linia nie odpowiada</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}