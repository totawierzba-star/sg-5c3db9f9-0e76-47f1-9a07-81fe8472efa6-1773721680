import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Plane, Clock, XCircle, CheckCircle, AlertTriangle, FileText, Scale } from "lucide-react";

export default function RyanairMissedConnectionWlasnaPrzesiadka() {
  return (
    <Layout>
      <SEO
        title="Ryanair missed connection — odpowiedzialność przy własnej przesiadce [2026]"
        description="Straciłeś przesiadkę przez opóźnienie Ryanair? Sprawdź kiedy należy się odszkodowanie 250-600 € (jednolita rezerwacja vs osobne bilety) i kto płaci."
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
              <li className="text-gray-900">Ryanair missed connection</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="h-4 w-4" />
              Ryanair Missed Connection
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ryanair missed connection — odpowiedzialność przy własnej przesiadce
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Kiedy Ryanair musi zapłacić 250-600 € za straconą przesiadkę? Różnica między jednolitą rezerwacją a osobnymi biletami
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Czas czytania: 10 min</span>
              <span>•</span>
              <span>Aktualizacja: 26.02.2025</span>
            </div>
          </header>

          {/* Quick Decision Matrix - AI Overview */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
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
                    <span><strong>Jednolita rezerwacja</strong> (wszystkie loty w 1 rezerwacji PNR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span><strong>Multi-ticket</strong> z gwarancją połączenia (Kiwi Guarantee, eDreams Prime)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300 font-bold">✓</span>
                    <span>Opóźnienie pierwszego lotu Ryanair &gt;3h na miejscu docelowym</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs font-medium">
                    💰 Kwota: <strong>250-600 € w zależności od dystansu całej podróży</strong>
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
                    <span><strong>Osobne bilety</strong> kupione oddzielnie (2 różne rezerwacje PNR)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 font-bold">✗</span>
                    <span><strong>Self-transfer</strong> bez ochrony (np. 2 tanie bilety Ryanair)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300 font-bold">✗</span>
                    <span>Przesiadka między różnymi przewoźnikami bez połączenia</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-white/10 rounded-lg">
                  <p className="text-xs font-medium">
                    ⚠️ Ryanair nie odpowiada: <strong>Ty ponosisz ryzyko straconej przesiadki</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-medium">
                🔑 <strong>Kluczowa zasada:</strong> Jeśli wszystkie loty są w <strong>jednej rezerwacji</strong> (1 kod PNR), Ryanair ponosi pełną odpowiedzialność za utracone połączenie. Jeśli kupiłeś 2 osobne bilety — Ryanair nie musi Ci nic płacić.
              </p>
            </div>
          </div>

          {/* Main Content */}
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Co to jest &quot;jednolita rezerwacja&quot; (single booking)?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Definicja jednolitej rezerwacji:</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>Jednolita rezerwacja</strong> (single booking, through-ticket) to sytuacja, gdy <strong>wszystkie loty są kupione w ramach jednej transakcji</strong> i mają <strong>wspólny kod rezerwacji (PNR)</strong>.
              </p>
              <p className="text-sm text-gray-600 italic">
                Przykład: Kupiłeś lot Gdańsk → Dublin → Boston w 1 transakcji na stronie Ryanair lub biura podróży. Dostałeś 1 potwierdzenie rezerwacji z kodem PNR: <code className="bg-gray-200 px-1 rounded">ABC123</code>. To jest <strong>jednolita rezerwacja</strong>.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Dlaczego to ważne?</strong> Przy jednolitej rezerwacji <strong>Ryanair ponosi pełną odpowiedzialność</strong> za całą podróż, włączając w to przesiadki. Jeśli pierwszy lot się opóźni i stracisz przesiadkę, Ryanair MUSI:
            </p>

            <ul className="space-y-3 text-gray-700 mb-8 list-none">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span>Zapewnić Ci <strong>alternatywny transport</strong> (następny dostępny lot)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span>Zapłacić <strong>250-600 € odszkodowania</strong> (jeśli dojedziesz &gt;3h później)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <span>Zapewnić <strong>prawo do opieki</strong> (posiłki, hotel, transport)</span>
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A co jeśli kupiłem osobne bilety?</h3>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-3">Osobne bilety = BRAK odpowiedzialności Ryanair</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                Jeśli kupiłeś <strong>2 osobne bilety</strong> (2 różne kody PNR), np.:
              </p>
              <ul className="space-y-2 text-gray-700 mb-3">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">1.</span>
                  <span>Gdańsk → Dublin (rezerwacja <code className="bg-gray-200 px-1 rounded">ABC123</code>)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">2.</span>
                  <span>Dublin → Boston (rezerwacja <code className="bg-gray-200 px-1 rounded">XYZ789</code>)</span>
                </li>
              </ul>
              <p className="text-gray-700 font-bold">
                ⚠️ <strong>Ryanair nie ponosi odpowiedzialności</strong> za straconą przesiadkę! To tzw. <strong>self-transfer</strong> — ryzyko leży po Twojej stronie.
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Wyjątek:</strong> Jeśli kupiłeś osobne bilety przez platformy typu <strong>Kiwi.com z Kiwi Guarantee</strong> lub <strong>eDreams Prime</strong> — mają one własne ubezpieczenie przesiadek. Wtedy możesz dochodzić odszkodowania od platformy (nie od Ryanair).
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak sprawdzić czy mam jednolitą rezerwację?</h3>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Sprawdź kod rezerwacji (PNR):</h4>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Jednolita rezerwacja:</h5>
                    <p className="text-sm text-gray-700">
                      Dostałeś <strong>1 potwierdzenie rezerwacji</strong> z <strong>1 kodem PNR</strong> (np. ABC123). Wszystkie loty są wymienione w tym samym emailu/PDF.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">✗</div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Osobne bilety:</h5>
                    <p className="text-sm text-gray-700">
                      Dostałeś <strong>2 osobne potwierdzenia</strong> z <strong>różnymi kodami PNR</strong> (ABC123 i XYZ789). Każdy lot kupiony oddzielnie.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
                <p className="text-sm text-gray-700">
                  <strong>💡 Wskazówka:</strong> Jeśli nie jesteś pewien, sprawdź czy na potwierdzeniu jest napisane <em>&quot;through-ticket&quot;</em>, <em>&quot;connecting flights&quot;</em> lub <em>&quot;protected connection&quot;</em>. To oznacza jednolitą rezerwację.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Kiedy Ryanair musi zapłacić odszkodowanie za missed connection?
            </h2>

            <div className="grid gap-6 mb-8">
              <div className="bg-white border-l-4 border-green-600 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Warunki uzyskania odszkodowania (łącznie):</h3>
                <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                  <li><strong>Jednolita rezerwacja</strong> (1 kod PNR dla wszystkich lotów)</li>
                  <li><strong>Pierwszy lot Ryanair opóźniony</strong> (to Ryanair ponosi winę)</li>
                  <li><strong>Dotarcie na miejsce docelowe &gt;3h później</strong> niż planowano</li>
                  <li><strong>Brak nadzwyczajnych okoliczności</strong> (np. nie strajk ATC)</li>
                </ol>
                <p className="text-sm text-gray-600 mt-4 italic">
                  Kwota odszkodowania: 250-600 € w zależności od <strong>dystansu całej podróży</strong> (nie tylko pierwszego lotu).
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Przykład konkretnej sprawy:</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Trasa:</strong> Gdańsk → Dublin (1h 45min) → Boston (7h)</p>
                  <p><strong>Rezerwacja:</strong> Jednolita (1 kod PNR: ABC123)</p>
                  <p><strong>Problem:</strong> Lot Gdańsk–Dublin opóźniony 2h → stracona przesiadka do Bostonu</p>
                  <p><strong>Efekt:</strong> Dotarcie do Bostonu 8h później (następny lot następnego dnia)</p>
                  <p className="font-bold text-green-700 mt-3">
                    ✓ <strong>Należy się 600 € odszkodowania</strong> (dystans &gt;3500 km, opóźnienie &gt;3h na miejscu docelowym)
                  </p>
                </div>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Kiedy NIE należy się odszkodowanie?</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Osobne bilety</strong> (2 różne kody PNR) — self-transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Opóźnienie &lt;3h na miejscu docelowym</strong> (mimo straconej przesiadki)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Nadzwyczajne okoliczności</strong> (strajk ATC, warunki pogodowe)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Wina pasażera</strong> (spóźnienie na bramkę, brak odprawy)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Jak odzyskać odszkodowanie za missed connection?
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Procedura krok po kroku:</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Na lotnisku — zbieraj dowody</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dostań <strong>pisemne potwierdzenie</strong> opóźnienia od Ryanair</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Zachowaj <strong>oba boarding passes</strong> (pierwszy lot + nowy bilet na przesiadkę)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Zrób <strong>zdjęcia ekranu odlotów</strong> pokazujące opóźnienie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Zbierz <strong>rachunki</strong> za dodatkowe koszty (hotel, taxi, posiłki)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Udowodnij jednolitą rezerwację</h4>
                    <p className="text-gray-700 mb-3">
                      Załącz do reklamacji:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span><strong>Oryginalne potwierdzenie rezerwacji</strong> (email booking confirmation)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Pokaż że oba loty mają <strong>ten sam kod PNR</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Jeśli kupiłeś przez OTA (eSky, Kiwi) — załącz ich potwierdzenie</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Złóż reklamację do Ryanair</h4>
                    <p className="text-gray-700 mb-3">
                      Wyślij email żądając:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Odszkodowania 250-600 € (zgodnie z dystansem)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Zwrotu dodatkowych kosztów (hotel, posiłki, transport)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Powołaj się na <strong>jednolitą rezerwację</strong> i prawo UE 261/2004</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Skorzystaj z ClaimWinger (najszybsza opcja)</h4>
                    <p className="text-gray-700 mb-3">
                      ClaimWinger zajmie się całą sprawą profesjonalnie — <strong>zapłacisz tylko po wygranej</strong> (25% + VAT). Zero kosztów z góry.
                    </p>
                    <a 
                      href="https://claimwinger.com/pl/opozniony-lot" 
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

          {/* FAQ Section - Schema.org markup */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Kupiłem 2 osobne bilety Ryanair — czy należy się odszkodowanie za straconą przesiadkę?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE.</strong> Jeśli kupiłeś 2 osobne bilety (2 różne kody PNR), to jest <strong>self-transfer</strong> — Ryanair nie ponosi odpowiedzialności za straconą przesiadkę. Ryzyko leży po Twojej stronie. <strong>Wyjątek:</strong> Jeśli kupiłeś przez Kiwi.com z Kiwi Guarantee — możesz dochodzić odszkodowania od platformy.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jak sprawdzić czy mam jednolitą rezerwację?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Sprawdź <strong>kod rezerwacji (PNR)</strong> na potwierdzeniu rezerwacji. Jeśli wszystkie loty mają <strong>ten sam kod PNR</strong> (np. ABC123) — masz jednolitą rezerwację. Jeśli dostałeś 2 osobne potwierdzenia z różnymi kodami — to osobne bilety.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ile odszkodowania za missed connection?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>250-600 € w zależności od dystansu całej podróży</strong> (nie tylko pierwszego lotu):<br />
                  • Do 1500 km: <strong>250 €</strong><br />
                  • 1500-3500 km: <strong>400 €</strong><br />
                  • Powyżej 3500 km: <strong>600 €</strong><br />
                  <em>Warunek: dotarcie na miejsce docelowe &gt;3h później niż planowano.</em>
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Co jeśli straciłem przesiadkę przez własne spóźnienie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Brak odszkodowania.</strong> Jeśli straciłeś przesiadkę przez własne spóźnienie (nie stawiłeś się na bramce na czas, zbyt długo przechodzenie przez kontrolę) — Ryanair nie ponosi odpowiedzialności. Odszkodowanie przysługuje TYLKO gdy opóźnienie pierwszego lotu było winą Ryanair.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy dostanę zwrot kosztów hotelu i taksówki?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>TAK,</strong> przy jednolitej rezerwacji Ryanair musi zwrócić <strong>uzasadnione koszty</strong> spowodowane utraconym połączeniem: hotel, posiłki, transport między lotniskiem a hotelem. Zachowaj wszystkie rachunki! Kwoty zwrotu są <strong>NIEZALEŻNE</strong> od odszkodowania 250-600 €.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Co jeśli Ryanair odmówił wypłaty?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Wyślij <strong>appeal letter</strong> powołując się na jednolitą rezerwację i prawo UE 261/2004. Jeśli Ryanair nadal odmawia: złóż skargę do <strong>Urzędu Lotnictwa Cywilnego (ULC)</strong> lub użyj <strong>ClaimWinger</strong> — zajmą się wszystkim za Ciebie (płacisz tylko po wygranej).
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Straciłeś przesiadkę przez opóźnienie Ryanair?
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger pomoże Ci odzyskać 250-600 € odszkodowania za utracone połączenie. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Sprawdź swoje odszkodowanie
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
              <Link href="/blog/utracona-przesiadka-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Utracona przesiadka — kiedy odszkodowanie?
                </h3>
                <p className="text-gray-600 text-sm">
                  Ogólny przewodnik o odszkodowaniach za missed connection (wszystkie linie).
                </p>
              </Link>

              <Link href="/blog/ryanair-odmowil-odszkodowania" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair odmówił wypłaty — co robić?
                </h3>
                <p className="text-gray-600 text-sm">
                  Poznaj 3 skuteczne metody wymuszenia wypłaty odszkodowania od Ryanair.
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

              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Jak złożyć wniosek o odszkodowanie — krok po kroku
                </h3>
                <p className="text-gray-600 text-sm">
                  Kompletny przewodnik jak samodzielnie złożyć reklamację do linii lotniczych.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
