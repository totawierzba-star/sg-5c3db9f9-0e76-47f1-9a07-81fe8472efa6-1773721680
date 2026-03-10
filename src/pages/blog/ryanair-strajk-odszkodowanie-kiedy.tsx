import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Users, CheckCircle, XCircle, AlertTriangle, Scale, Info } from "lucide-react";

export default function RyanairStrajkOdskodowaKiedy() {
  return (
    <Layout>
      <SEO
        title="Ryanair strajk — kiedy należy się odszkodowanie? [2026]"
        description="Strajk załogi Ryanair odwołał Twój lot? Sprawdź, kiedy przysługuje odszkodowanie (strajk Ryanair vs ATC), a kiedy linia legalnie odmówi wypłaty."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">Ryanair strajk odszkodowanie</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Ryanair
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ryanair strajk — kiedy należy się odszkodowanie?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Kompletny przewodnik: różnice między strajkiem Ryanair a strajkiem ATC, Twoje prawa pasażera
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Czas czytania: 7 min</span>
              <span>•</span>
              <span>Aktualizacja: 26.02.2025</span>
            </div>
          </header>

          {/* Quick Decision Matrix - AI Overview */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź: Czy mam prawo do odszkodowania?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-500 bg-opacity-20 backdrop-blur-sm border-2 border-green-300 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <CheckCircle className="h-6 w-6" />
                  TAK — przysługuje odszkodowanie
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span><strong>Strajk załogi Ryanair</strong> (piloci, stewardesy, personel pokładowy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span><strong>Strajk personelu naziemnego Ryanair</strong> (check-in, bagaż, obsługa)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span><strong>Strajk pracowników Ryanair</strong> w jakiejkolwiek formie</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs font-medium">
                    ⚖️ Kwota: <strong>250-600 € w zależności od dystansu</strong>
                  </p>
                </div>
              </div>

              <div className="bg-red-500 bg-opacity-20 backdrop-blur-sm border-2 border-red-300 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <XCircle className="h-6 w-6" />
                  NIE — brak odszkodowania
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 font-bold">✗</span>
                    <span><strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 font-bold">✗</span>
                    <span><strong>Strajk lotniska</strong> (służby porządkowe, ochrona, zarządca lotniska)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 font-bold">✗</span>
                    <span><strong>Strajk władz lotniczych</strong> (CAA, PANSA, EUROCONTROL)</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs font-medium">
                    ⚖️ Przysługuje: <strong>prawo do opieki</strong> (posiłki, napoje, hotel), ale <strong>0 € odszkodowania</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-medium">
                <Info className="h-4 w-4 inline mr-2" />
                <strong>Kluczowa zasada:</strong> Jeśli strajkujący pracują <strong>dla Ryanair</strong> (są zatrudnieni przez linię) → odszkodowanie TAK. Jeśli strajkujący są <strong>niezależni od Ryanair</strong> (ATC, lotnisko) → odszkodowanie NIE.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Dlaczego strajk Ryanair = odszkodowanie, a strajk ATC = brak?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Orzecznictwo TSUE — stanowisko prawne:</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Wyrok C-195/17 (TUIfly vs HK):</strong> Strajk pracowników przewoźnika lotniczego <strong>NIE stanowi nadzwyczajnej okoliczności</strong>, ponieważ linia ma wpływ na warunki pracy, negocjacje płacowe i relacje ze związkami zawodowymi.
              </p>
              <p className="text-gray-700 leading-relaxed mb-0">
                <strong>Wyrok C-28/20 (Airhelp vs SAS):</strong> Strajk &quot;dziki&quot; (wildcat strike) również <strong>NIE zwalnia z wypłaty</strong>, jeśli dotyczy pracowników linii lotniczej.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Różnica jest prosta: <strong>Ryanair kontroluje swoich pracowników</strong> — może negocjować wynagrodzenia, warunki pracy, harmonogramy. Strajk załogi to konsekwencja decyzji biznesowych Ryanair, więc <strong>linia ponosi odpowiedzialność</strong>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Natomiast <strong>strajk ATC lub lotniska</strong> jest poza kontrolą Ryanair — linia nie ma wpływu na decyzje organów państwowych czy zarządców infrastruktury lotniczej. Dlatego takie strajki <strong>są uznawane za nadzwyczajne okoliczności</strong>.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Przykłady z praktyki — konkretne przypadki:</h3>

            <div className="grid gap-6 mb-8">
              <div className="bg-white border-l-4 border-green-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Przykład 1: Strajk pilotów Ryanair (wrzesień 2022)
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Sytuacja:</strong> Piloci Ryanair w Hiszpanii, Portugalii i Belgii strajkowali przez 3 dni, domagając się wyższych pensji. Setki lotów zostały odwołane.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Decyzja sądu:</strong> Ryanair MUSI zapłacić odszkodowanie — strajk własnej załogi nie jest nadzwyczajną okolicznością.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Kwota: 250-600 € na pasażera w zależności od dystansu lotu.
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Przykład 2: Strajk personelu pokładowego Ryanair (lipiec 2018)
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Sytuacja:</strong> Stewardesy i stewardzi Ryanair w Hiszpanii strajkowali, protestując przeciwko warunkom pracy. 600+ lotów odwołanych.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Decyzja organów:</strong> Hiszpańska Agencja Lotnictwa Cywilnego (AESA) nakazała Ryanair wypłatę odszkodowań.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Ryanair próbował odmówić, powołując się na &quot;extraordinary circumstances&quot; — sądy odrzuciły tę obronę.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Przykład 3: Strajk ATC we Francji (2023)
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Sytuacja:</strong> Kontrolerzy ruchu lotniczego we Francji strajkowali przez 5 dni. Tysiące lotów przez przestrzeń powietrzną Francji zostały odwołanych, w tym loty Ryanair.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Decyzja:</strong> Brak odszkodowania — strajk ATC jest nadzwyczajną okolicznością (Ryanair nie kontroluje DGAC).
                </p>
                <p className="text-sm text-gray-600 italic">
                  Pasażerom przysługiwało prawo do opieki (posiłki, hotel), ale 0 € odszkodowania.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  Przykład 4: Strajk lotniska Barcelona El Prat (2019)
                </h4>
                <p className="text-gray-700 mb-3">
                  <strong>Sytuacja:</strong> Pracownicy lotniska (ochrona, służby porządkowe) strajkowali. Lotnisko zamknięte na 8 godzin.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Decyzja:</strong> Brak odszkodowania — strajk lotniska jest poza kontrolą linii lotniczych.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
              Jak Ryanair próbuje uniknąć wypłaty?
            </h2>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-orange-900 mb-3">Typowa odpowiedź Ryanair przy strajku załogi:</h3>
              <p className="text-gray-700 italic mb-3">
                &quot;Your flight was cancelled due to a <strong>strike</strong>, which constitutes an extraordinary circumstance beyond our control under EU Regulation 261/2004. Therefore, we are not liable to pay compensation.&quot;
              </p>
              <p className="text-gray-700 font-bold">
                ⚠️ To jest NIEPRAWDA! Ryanair liczy na to, że nie znasz swoich praw.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Jak zakwestionować odmowę?</h3>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Zidentyfikuj rodzaj strajku</h4>
                    <p className="text-gray-700 mb-3">
                      Ustal, <strong>kto strajkował</strong>: załoga Ryanair (piloci, stewardesy, personel naziemny Ryanair) → odszkodowanie TAK. ATC/lotnisko → odszkodowanie NIE.
                    </p>
                    <p className="text-sm text-gray-600">
                      💡 <strong>Jak sprawdzić?</strong> Wyszukaj w Google: &quot;Ryanair strike [data]&quot; lub sprawdź komunikaty prasowe linii. Jeśli Ryanair publikował &quot;pilot strike&quot;, &quot;cabin crew strike&quot; — masz prawo do odszkodowania.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Wyślij appeal letter</h4>
                    <p className="text-gray-700 mb-3">
                      Odpowiedz na odmowę Ryanair, powołując się na <strong>wyrok C-195/17 TUIfly</strong>.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-700 font-medium mb-2">Przykładowy szablon (po angielsku):</p>
                      <p className="text-xs text-gray-600 italic leading-relaxed">
                        &quot;We reject your claim that the strike constituted an extraordinary circumstance. Under ECJ case law C-195/17 (TUIfly vs HK), a strike by an airline&apos;s own employees does NOT exempt the carrier from paying compensation. The strike was within your sphere of control. We demand payment of €[kwota] within 14 days, or we will escalate to legal action.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Złóż skargę do organu nadzoru</h4>
                    <p className="text-gray-700 mb-3">
                      Polska: <strong>Urząd Lotnictwa Cywilnego (ULC)</strong><br />
                      Irlandia (siedziba Ryanair): <strong>Commission for Aviation Regulation (CAR)</strong>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Użyj ClaimWinger (bez ryzyka)</h4>
                    <p className="text-gray-700 mb-3">
                      ClaimWinger zajmie się całą sprawą profesjonalnie — <strong>zapłacisz tylko po wygranej</strong> (25% + VAT). Zero kosztów z góry.
                    </p>
                    <a 
                      href="https://claimwinger.com/pl/odwolany-lot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Sprawdź swoje odszkodowanie
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section - Schema.org */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy każdy strajk daje prawo do odszkodowania?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE.</strong> Tylko strajk pracowników <strong>zatrudnionych przez Ryanair</strong> (piloci, stewardesy, personel naziemny linii) daje prawo do odszkodowania. Strajk ATC, lotniska, władz lotniczych — brak odszkodowania (nadzwyczajna okoliczność).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jak sprawdzić, kto strajkował?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Wyszukaj w Google: <code className="bg-gray-100 px-2 py-1 rounded">&quot;Ryanair strike [data lotu]&quot;</code> lub sprawdź komunikaty prasowe linii. Jeśli znajdziesz wzmianki o &quot;pilot strike&quot;, &quot;cabin crew strike&quot;, &quot;Ryanair staff strike&quot; — <strong>masz prawo do odszkodowania</strong>.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ryanair twierdzi że strajk był &quot;nadzwyczajną okolicznością&quot; — co robić?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Wyślij <strong>appeal letter</strong> powołując się na wyrok TSUE C-195/17 (TUIfly). Jeśli Ryanair nadal odmawia, złóż pozew — <strong>sądy konsekwentnie orzekają na korzyść pasażerów</strong> w sprawach strajku załogi.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ile wynosi odszkodowanie za lot odwołany przez strajk Ryanair?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>250-600 € na pasażera</strong> w zależności od dystansu: <br />
                  • Do 1500 km: <strong>250 €</strong><br />
                  • 1500-3500 km: <strong>400 €</strong><br />
                  • Powyżej 3500 km: <strong>600 €</strong>
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy strajk &quot;dziki&quot; (wildcat strike) daje prawo do odszkodowania?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>TAK.</strong> Wyrok C-28/20 (Airhelp vs SAS) potwierdził, że nawet nielegalne strajki załogi <strong>NIE zwalniają linii z wypłaty</strong>, jeśli strajkujący są pracownikami przewoźnika.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jak długo mam na złożenie reklamacji po strajku Ryanair?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  W Polsce: <strong>3 lata od daty lotu</strong>. Irlandia (siedziba Ryanair): <strong>6 lat</strong>. Zalecamy działać szybko — im szybciej, tym większe szanse na szybką wypłatę.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Strajk Ryanair odwołał Twój lot? Sprawdź swoje prawa!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger pomoże Ci odzyskać 250-600 € odszkodowania. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka finansowego.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl/odwolany-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Sprawdź odszkodowanie za odwołany lot
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="https://claimwinger.com/pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                >
                  Dowiedz się więcej
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ryanair-odmowil-odszkodowania" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair odmówił wypłaty — co robić?
                </h3>
                <p className="text-gray-600 text-sm">
                  Poznaj 3 skuteczne metody wymuszenia wypłaty odszkodowania od Ryanair.
                </p>
              </Link>

              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Nadzwyczajne okoliczności — kompletny przewodnik
                </h3>
                <p className="text-gray-600 text-sm">
                  Kiedy linia lotnicza może legalnie odmówić wypłaty? Wszystkie przypadki.
                </p>
              </Link>

              <Link href="/blog/ryanair-usterka-techniczna-zakwestionowac-odmowe" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair usterka techniczna — jak zakwestionować?
                </h3>
                <p className="text-gray-600 text-sm">
                  Praktyczny przewodnik walki z odmową powołującą się na &quot;technical defect&quot;.
                </p>
              </Link>

              <Link href="/blog/prawa-pasazera-ryanair" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Prawa pasażera Ryanair — kompletny przewodnik
                </h3>
                <p className="text-gray-600 text-sm">
                  Wszystko o EU261: odszkodowania, posiłki, hotel, alternatywny transport.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}