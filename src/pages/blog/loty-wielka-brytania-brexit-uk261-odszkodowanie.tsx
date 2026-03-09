import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, MapPin, AlertTriangle, CheckCircle2, Plane, Scale } from "lucide-react";

export default function BrexitUK261Page() {
  return (
    <Layout>
      <SEO 
        title="Loty do Wielkiej Brytanii po Brexicie – UK261 vs EU261 i odszkodowanie"
        description="Czy po Brexicie nadal przysługuje odszkodowanie za opóźniony lot do Londynu? Sprawdź różnice między UK261 a EU261 i poznaj swoje prawa."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Strona główna</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Loty UK Brexit</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <MapPin className="w-4 h-4" />
            Prawo lotnicze
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Loty do Wielkiej Brytanii po Brexicie – UK261 vs EU261 i odszkodowanie
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>21 lutego 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min czytania</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Lead */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed m-0">
              <strong>Brexit zmienił zasady odszkodowań lotniczych dla pasażerów latających do i z Wielkiej Brytanii.</strong> Od 1 stycznia 2021 roku Wielka Brytania nie jest częścią Unii Europejskiej, co oznacza, że niektóre loty nie podlegają już europejskiemu Rozporządzeniu UE 261/2004. Zamiast tego obowiązuje brytyjskie <strong>UK261</strong> – które jest bardzo podobne, ale ma swoje niuanse.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
              EU261 vs UK261 – co się zmieniło po Brexicie?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Przed Brexitem wszystkie loty z Polski do Wielkiej Brytanii były objęte <strong>Rozporządzeniem UE 261/2004</strong>. Po wystąpieniu UK z UE, Wielka Brytania stworzyła własne prawo – <strong>UK Civil Aviation (Denied Boarding, Compensation and Assistance) Regulations 2005</strong>, potocznie zwane <strong>UK261</strong>.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Najważniejsze różnice:</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 font-bold text-gray-900">Kryterium</th>
                      <th className="py-3 px-4 font-bold text-gray-900">EU261</th>
                      <th className="py-3 px-4 font-bold text-gray-900">UK261</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">Kwoty odszkodowania</td>
                      <td className="py-3 px-4">250–600 EUR</td>
                      <td className="py-3 px-4">220–540 GBP (ok. 250–600 EUR)</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">Próg opóźnienia</td>
                      <td className="py-3 px-4">3 godziny</td>
                      <td className="py-3 px-4">3 godziny</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">Opieka (posiłki, hotel)</td>
                      <td className="py-3 px-4">Tak</td>
                      <td className="py-3 px-4">Tak</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">Loty connecting poza UK/UE</td>
                      <td className="py-3 px-4">Nie</td>
                      <td className="py-3 px-4">Nie</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              W praktyce <strong>UK261 jest niemal identyczne z EU261</strong>. Różnice są głównie techniczne (kwoty wyrażone w GBP zamiast EUR, jurysdykcja brytyjskich sądów).
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Plane className="w-8 h-8 text-blue-600" />
              Które loty podlegają EU261, a które UK261?
            </h2>

            <div className="space-y-6">
              {/* Scenario 1 */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  1. Lot z Polski do UK (np. Warszawa → Londyn)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Przewoźnik:</strong> LOT, Ryanair, Wizz Air, British Airways
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Obowiązuje:</strong> <span className="font-bold text-blue-700">EU261</span> (lot wychodzi z terytorium UE)
                </p>
                <p className="text-gray-700">
                  <strong>Odszkodowanie:</strong> 250–600 EUR (wypłaca linia lotnicza, egzekwuje polski sąd lub CAA)
                </p>
              </div>

              {/* Scenario 2 */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  2. Lot z UK do Polski (np. Londyn → Warszawa)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Przewoźnik unijny (LOT, Ryanair, Wizz Air):</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Obowiązuje:</strong> <span className="font-bold text-green-700">EU261</span> (przewoźnik z UE)
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Przewoźnik brytyjski (British Airways, easyJet UK):</strong>
                </p>
                <p className="text-gray-700">
                  <strong>Obowiązuje:</strong> <span className="font-bold text-green-700">UK261</span> (przewoźnik spoza UE, lot z UK)
                </p>
              </div>

              {/* Scenario 3 */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  3. Lot z UK do USA/Azji (np. Londyn → Nowy Jork)
                </h3>
                <p className="text-gray-700 mb-2">
                  <strong>Przewoźnik brytyjski (British Airways):</strong>
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Obowiązuje:</strong> <span className="font-bold text-yellow-700">UK261</span>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Przewoźnik amerykański (United, Delta):</strong>
                </p>
                <p className="text-gray-700">
                  <strong>Obowiązuje:</strong> <span className="font-bold text-red-700">Żadne</span> (ani EU261, ani UK261 – tylko prawo USA, które nie gwarantuje odszkodowania)
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>💡 Zasada ogólna:</strong> Jeśli lot wychodzi z UE lub wykonuje go przewoźnik unijny → EU261. Jeśli lot wychodzi z UK i wykonuje go przewoźnik brytyjski → UK261.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Twój lot do/z Wielkiej Brytanii był opóźniony?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                ClaimWinger pomaga wyegzekwować odszkodowania zarówno na podstawie EU261, jak i UK261. Sprawdzimy Twoje roszczenie i zajmiemy się całą sprawą za Ciebie.
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
                ✓ Doświadczenie z lotami UK i EU
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Najpopularniejsze trasy Polska–UK i ich status
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Warszawa (WAW) → Londyn (LHR/LGW/STN)</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Przewoźnicy:</strong> LOT, British Airways, Ryanair, Wizz Air<br />
                  <strong>EU261:</strong> Tak (lot z UE)<br />
                  <strong>Odszkodowanie:</strong> 250 EUR za opóźnienie 3h+
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Kraków (KRK) → Londyn (STN/LTN)</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Przewoźnicy:</strong> Ryanair, Wizz Air<br />
                  <strong>EU261:</strong> Tak<br />
                  <strong>Odszkodowanie:</strong> 250 EUR
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Gdańsk (GDN) → Londyn (STN)</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Przewoźnicy:</strong> Ryanair, Wizz Air<br />
                  <strong>EU261:</strong> Tak<br />
                  <strong>Odszkodowanie:</strong> 250 EUR
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">Wrocław (WRO) → Londyn (LTN)</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Przewoźnicy:</strong> Wizz Air<br />
                  <strong>EU261:</strong> Tak<br />
                  <strong>Odszkodowanie:</strong> 250 EUR
                </p>
              </div>
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
                  Czy Brexit wpłynął na wysokość odszkodowań za loty do Londynu?
                </summary>
                <p className="text-gray-700 mt-4">
                  Praktycznie nie. UK261 przewiduje kwoty 220–540 GBP, które przy obecnym kursie funta odpowiadają mniej więcej 250–600 EUR (jak w EU261). Różnica może wynosić kilkadziesiąt złotych, ale mechanizm działania jest identyczny.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę ubiegać się o odszkodowanie za lot powrotny z Londynu do Polski?
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Jeśli lecisz przewoźnikiem unijnym (LOT, Ryanair, Wizz Air), obowiązuje EU261 nawet na locie z UK do Polski. Jeśli lecisz British Airways lub innym przewoźnikiem brytyjskim, obowiązuje UK261 (bardzo podobne zasady).
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy Ryanair i Wizz Air nadal muszą płacić odszkodowania za loty UK?
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Ryanair i Wizz Air to przewoźnicy unijni (siedziba w Irlandii/na Węgrzech), więc wszystkie ich loty z Polski do UK nadal podlegają EU261. Brexit nie zmienił tej zasady.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Co jeśli mój lot był operowany przez British Airways?
                </summary>
                <p className="text-gray-700 mt-4">
                  <ul className="mt-2 ml-6 space-y-1">
                    <li>• <strong>Lot z Polski do UK:</strong> EU261 (lot wychodzi z UE)</li>
                    <li>• <strong>Lot z UK do Polski:</strong> UK261 (przewoźnik brytyjski, lot z UK)</li>
                  </ul>
                  W obu przypadkach przysługuje odszkodowanie, tylko zmienia się podstawa prawna.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę dochodzić odszkodowania w polskim sądzie za lot UK261?
                </summary>
                <p className="text-gray-700 mt-4">
                  To zależy od przewoźnika i jurysdykcji. Loty na podstawie EU261 można dochodzić w polskich sądach. Loty UK261 mogą wymagać postępowania przed brytyjskim Civil Aviation Authority (CAA) lub brytyjskim sądem, ale firmy takie jak ClaimWinger zajmują się tym za Ciebie.
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
              <Link href="/blog/odszkodowanie-ryanair-polska" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Odszkodowanie Ryanair z Polski
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Kompletny przewodnik po odszkodowaniach od Ryanair dla polskich pasażerów.
                  </p>
                </div>
              </Link>
              <Link href="/blog/odszkodowanie-wizz-air-polska" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Odszkodowanie Wizz Air Polska
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prawa pasażerów Wizz Air i jak skutecznie uzyskać rekompensatę.
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