import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertTriangle, FileText, Euro, Plane, CheckCircle2, Calendar, XCircle, TrendingUp } from "lucide-react";
import { generateFAQSchema } from "@/lib/schemaGenerator";

export default function PolskaDubajOpoznienieEmiratesWe261() {
  const faqSchema = generateFAQSchema([
    {
      question: "Czy lot Emirates z Polski do Dubaju ma prawo do odszkodowania?",
      answer: "Tak! Lot Z Polski do Dubaju (wylot z UE) jest objęty rozporządzeniem WE 261/2004, niezależnie od przewoźnika (Emirates, Flydubai, LOT). Jeśli lot jest opóźniony ≥3h, przysługuje Ci 400 € odszkodowania."
    },
    {
      question: "Czy lot powrotny Emirates z Dubaju do Polski ma prawo do odszkodowania?",
      answer: "NIE! Dubaj jest poza UE, a Emirates to linia spoza UE. Lot powrotny z Dubaju do Polski NIE JEST objęty WE 261/2004. Odszkodowanie przysługuje TYLKO za lot Z Polski do Dubaju."
    },
    {
      question: "Ile wynosi odszkodowanie za opóźniony lot Warszawa–Dubaj?",
      answer: "400 € (dystans ~4,200 km). Mimo że dystans przekracza 3,500 km, WE 261/2004 przewiduje odszkodowanie 400 € dla lotów poza UE w zakresie 1,500–3,500 km (art. 7 ust. 2b). Maksymalne 600 € dotyczy tylko lotów >3,500 km wewnątrz UE."
    },
    {
      question: "Czy Flydubai musi zapłacić odszkodowanie za lot z Warszawy?",
      answer: "Tak! Jeśli Flydubai wykonuje lot Z Polski do Dubaju i jest opóźniony ≥3h, musi zapłacić 400 € odszkodowania. Nie ma znaczenia, że to linia z UAE - liczy się kierunek lotu (wylot z UE)."
    },
    {
      question: "Jak długo mam czas na reklamację lotu do Dubaju?",
      answer: "W Polsce: 3 lata od daty lotu (art. 118 Kodeksu cywilnego). To oznacza, że jeśli lot był opóźniony w 2023 roku, możesz złożyć reklamację do końca 2026 roku."
    }
  ]);

  return (
    <Layout>
      <SEO
        title="Polska–Dubaj opóźnienie — Emirates i granice WE 261"
        description="Opóźniony lot do Dubaju? Sprawdź, kiedy przysługuje Ci 400 € odszkodowania za loty Emirates/Flydubai z Polski do UAE."
        url="https://problemlot.pl/blog/polska-dubaj-opoznienie-emirates-we261"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Polska–Dubaj opóźnienie</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Trasy lotnicze
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Polska–Dubaj opóźnienie — Emirates i granice WE 261
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                12 marca 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min czytania
              </span>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <Plane className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Kluczowe informacje: Polska–Dubaj</h2>
                  <div className="space-y-2 text-blue-50">
                    <p><strong>Dystans:</strong> ~4,200 km</p>
                    <p><strong>Odszkodowanie:</strong> 400 € (TYLKO lot Z Polski!)</p>
                    <p><strong>Przewoźnicy:</strong> Emirates (55%), LOT (25%), Flydubai (20%)</p>
                    <p><strong>⚠️ KRYTYCZNE:</strong> Dubaj POZA UE — lot powrotny Emirates/Flydubai NIE MA PRAWA do odszkodowania!</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Twój lot do Dubaju ma 3+ godziny opóźnienia?</strong> Masz prawo do <strong>odszkodowania 400 €</strong> TYLKO jeśli lot WYLECIAŁ z Polski — rozporządzenie WE 261/2004 obowiązuje wyłącznie loty <strong>Z TERYTORIUM UE</strong>. Lot powrotny Dubaj→Warszawa operowany przez Emirates/Flydubai (linie spoza UE) <strong>NIE MA PRAWA</strong> do odszkodowania.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              KRYTYCZNA zasada: Dubaj POZA UE — kiedy przysługuje odszkodowanie?
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ ZEA (Dubaj) NIE JEST w Unii Europejskiej — rozporządzenie WE 261/2004 ma ograniczoną ważność!
                  </p>
                  <div className="space-y-3 text-slate-700">
                    <div>
                      <p className="font-semibold mb-1">✅ MASZ PRAWO do odszkodowania:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li><strong>Lot Z Polski do Dubaju</strong> (WAW→DXB) — niezależnie od przewoźnika (Emirates, LOT, Flydubai)</li>
                        <li><strong>Przyczyna:</strong> Lot startuje z terytorium UE → WE 261 obowiązuje</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-1">❌ NIE MASZ PRAWA do odszkodowania:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li><strong>Lot Z Dubaju do Polski</strong> (DXB→WAW) operowany przez <strong>Emirates lub Flydubai</strong></li>
                        <li><strong>Przyczyna:</strong> Emirates/Flydubai mają siedzibę POZA UE → WE 261 NIE obowiązuje lotów powrotnych</li>
                        <li><strong>Wyjątek:</strong> Jeśli lot powrotny operuje <strong>LOT Polish Airlines</strong> (linia z UE) → MASZ PRAWO do odszkodowania</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                📋 Tabela: Kiedy przysługuje odszkodowanie za loty Polska–Dubaj?
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Kierunek</th>
                      <th className="px-4 py-3 text-left">Przewoźnik</th>
                      <th className="px-4 py-3 text-left">Odszkodowanie</th>
                      <th className="px-4 py-3 text-left">Podstawa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50 bg-green-50">
                      <td className="px-4 py-3">
                        <strong>Polska → Dubaj</strong><br />
                        <span className="text-sm text-slate-600">(WAW→DXB)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>Dowolny</strong><br />
                        <span className="text-sm text-slate-600">(Emirates, LOT, Flydubai)</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-2xl font-bold text-green-600">✅ 400 €</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        Lot z UE → WE 261 obowiązuje
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-red-50">
                      <td className="px-4 py-3">
                        <strong>Dubaj → Polska</strong><br />
                        <span className="text-sm text-slate-600">(DXB→WAW)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>Emirates / Flydubai</strong><br />
                        <span className="text-sm text-slate-600">(linie z siedzibą POZA UE)</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-2xl font-bold text-red-600">❌ 0 €</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        Linia spoza UE + lot z Dubaju
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-green-50">
                      <td className="px-4 py-3">
                        <strong>Dubaj → Polska</strong><br />
                        <span className="text-sm text-slate-600">(DXB→WAW)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>LOT Polish Airlines</strong><br />
                        <span className="text-sm text-slate-600">(linia z siedzibą w UE)</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-2xl font-bold text-green-600">✅ 400 €</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        Linia z UE → WE 261 obowiązuje
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Najpopularniejsze trasy Polska–Dubaj (i ich problemy)
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                🛫 Top 3 tras do Dubaju z Polski:
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-slate-900">1. Warszawa–Dubaj (WAW–DXB) — Emirates</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 14% | <strong>Odszkodowanie:</strong> 400 € (tylko lot TAM)<br />
                    Główny problem: opóźnienia techniczne Airbus A380 (stara flota, częste przeglądy)
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-slate-900">2. Warszawa–Dubaj (WAW–DXB) — LOT Polish Airlines</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 12% | <strong>Odszkodowanie:</strong> 400 € (TAM i powrót)<br />
                    <strong>Przewaga:</strong> LOT = linia z UE → odszkodowanie ZAWSZE (nawet lot powrotny DXB→WAW)
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-slate-900">3. Katowice–Dubaj (KTW–DXB) — Flydubai</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 18% | <strong>Odszkodowanie:</strong> 400 € (tylko lot TAM)<br />
                    Alert: Flydubai (emiracka linia niskokosztowa) — często ignoruje reklamacje polskich pasażerów
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Problem: Emirates i Flydubai odmawiają odszkodowań za loty powrotne
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Typowa odmowa:</strong> "Lot z Dubaju do Polski nie podlega WE 261/2004" — to PRAWDA dla Emirates/Flydubai (linie spoza UE). Ale jeśli lot operuje <Link href="/blog/odszkodowanie-lot-polish-airlines" className="text-blue-600 hover:underline">LOT Polish Airlines</Link>, masz prawo do odszkodowania.
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Rozwiązanie:</strong> Kupuj bilety powrotne na LOT (nie Emirates) jeśli chcesz mieć pełną ochronę WE 261/2004.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Ile odszkodowania za opóźniony lot do Dubaju?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Zasada dla lotów Polska–Dubaj:
                  </p>
                  <p className="text-slate-700">
                    <strong>Dystans WAW–DXB: ~4,200 km</strong> → odszkodowanie wynosi <strong>400 €</strong> przy opóźnieniu ≥3h (przedział 1,500–3,500 km zgodnie z <Link href="/blog/ile-odszkodowania-opozniony-lot" className="text-blue-600 hover:underline">WE 261/2004</Link>).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak złożyć reklamację za opóźniony lot do Dubaju?
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Sprawdź, czy masz prawo do odszkodowania</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Lot Z Polski (TAM):</strong> Zawsze masz prawo do 400 € (niezależnie od przewoźnika — Emirates, LOT, Flydubai)
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Lot Z Dubaju (powrót):</strong> Tylko jeśli operuje <strong>LOT Polish Airlines</strong>. Emirates/Flydubai → BRAK prawa.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Zbierz dokumenty</h3>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>✓ Karta pokładowa (boarding pass)</li>
                      <li>✓ Potwierdzenie rezerwacji</li>
                      <li>✓ Screenshot FlightRadar24 (dowód dokładnego czasu opóźnienia)</li>
                      <li>✓ E-mail od przewoźnika (jeśli informował o opóźnieniu)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Złóż reklamację do przewoźnika</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Emirates:</strong> customer.affairs@emirates.com<br />
                      <strong>LOT Polish Airlines:</strong> claim@lot.pl<br />
                      <strong>Flydubai:</strong> customeraffairs@flydubai.com
                    </p>
                    <p className="text-sm text-slate-600">
                      Podaj: numer lotu, datę, dokładny czas opóźnienia, żądanie 400 € na podstawie WE 261/2004.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Czekaj 30–60 dni (lub użyj ClaimWinger)</h3>
                    <p className="text-slate-700 mb-2">
                      Przewoźnik odpowiada w ciągu 30–60 dni. Jeśli:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• <strong>Akceptuje</strong> → wypłata 400 € w ciągu 7–14 dni</li>
                      <li>• <strong>Odmawia</strong> (np. "lot z Dubaju nie podlega WE 261") → sprawdź, czy lot operował LOT. Jeśli tak, wyślij powtórną reklamację.</li>
                      <li>• <strong>Ignoruje</strong> → złóż skargę do <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 hover:underline">Rzecznika Praw Pasażera</Link> (bezpłatnie) lub użyj ClaimWinger</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">🚀 ClaimWinger — eksperci od lotów do Dubaju</h3>
                  <p className="text-blue-50 mb-4">
                    Emirates i Flydubai często odmawiają odszkodowań za loty powrotne (bezpodstawnie, jeśli operuje LOT). ClaimWinger ma success rate 78% dzięki:
                  </p>
                  <ul className="space-y-2 text-blue-50 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Weryfikacji, czy lot operował linia z UE (LOT) czy spoza (Emirates)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Prawników znających orzecznictwo TSUE
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Prowizja tylko od wygranej (300 € netto po prowizji 25% + VAT)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Zero ryzyka — nie wygramy = nie płacisz
                    </li>
                  </ul>
                  <a
                    href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-dubaj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                  >
                    Sprawdź odszkodowanie 400 € teraz →
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              ❓ Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy lot powrotny Emirates (DXB→WAW) ma prawo do odszkodowania?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Emirates ma siedzibę POZA UE (ZEA), więc rozporządzenie WE 261/2004 <strong>NIE obowiązuje</strong> lotów powrotnych z Dubaju do Polski operowanych przez Emirates.
                  </p>
                  <p className="mt-2">
                    <strong>Wyjątek:</strong> Jeśli lot powrotny operuje <Link href="/blog/odszkodowanie-lot-polish-airlines" className="text-blue-600 hover:underline">LOT Polish Airlines</Link> (linia z UE) → <strong>MASZ PRAWO</strong> do odszkodowania 400 €.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Dlaczego Dubaj POZA UE oznacza brak odszkodowania za lot powrotny?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>ZEA (Dubaj) NIE JEST w Unii Europejskiej.</strong> Rozporządzenie WE 261/2004 obowiązuje:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Wszystkie loty Z UE</strong> — niezależnie od przewoźnika i kraju docelowego</li>
                    <li><strong>Loty DO UE operowane przez linie z UE</strong> (np. LOT powrót z Dubaju)</li>
                    <li><strong>NIE obowiązuje:</strong> Loty DO UE operowane przez linie POZA UE (np. Emirates powrót)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Jak sprawdzić, czy mój lot powrotny operował LOT czy Emirates?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    Sprawdź <strong>numer lotu</strong> na karcie pokładowej:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>LO xxxx</strong> (np. LO 155) → LOT Polish Airlines → <strong>MASZ PRAWO</strong> do 400 €</li>
                    <li><strong>EK xxxx</strong> (np. EK 181) → Emirates → <strong>BRAK PRAWA</strong></li>
                    <li><strong>FZ xxxx</strong> (np. FZ 41) → Flydubai → <strong>BRAK PRAWA</strong></li>
                  </ul>
                  <p className="mt-2 text-sm">
                    <strong>Codeshare:</strong> Jeśli kupiłeś bilet przez LOT, ale lot operował Emirates (EK xxxx) → BRAK prawa do odszkodowania.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Jak długo mam czas na złożenie reklamacji za lot do Dubaju?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    W Polsce: <strong>6 lat</strong> od daty lotu (przedawnienie roszczeń cywilnych). Jednak praktycznie:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Im szybciej, tym lepiej</strong> — przewoźnicy łatwiej ignorują stare roszczenia</li>
                    <li><strong>Dowody</strong> (boarding pass, potwierdzenie) mogą się zatrzeć</li>
                    <li><strong>Rekomendacja:</strong> składaj reklamację w ciągu 3 miesięcy od lotu</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy Emirates płaci odszkodowania za loty z Polski do Dubaju?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>TAK</strong> — ale niechętnie. Emirates często:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Ignoruje pierwsze reklamacje (odpowiada dopiero po powtórnej)</li>
                    <li>Powołuje się na <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:underline">nadzwyczajne okoliczności</Link> bez przedstawienia dowodów</li>
                    <li>Proponuje vouchery zamiast gotówki (nie akceptuj — żądaj pieniędzy!)</li>
                  </ul>
                  <p className="mt-2">
                    <strong>Rozwiązanie:</strong> Jeśli Emirates odmawia bezpodstawnie, użyj <a href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-dubaj" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a> — mają 78% success rate z Emirates.
                  </p>
                </div>
              </details>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              📚 Powiązane artykuły
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/polska-turcja-opoznienie-odszkodowanie" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Polska–Turcja opóźnienie — Turkish Airlines i loty czarterowe</h3>
                <p className="text-sm text-slate-600">Podobny case (kraj poza UE) — sprawdź różnice między Turcją a Dubajem.</p>
              </Link>
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">LOT Polish Airlines — odszkodowanie i prawa pasażera</h3>
                <p className="text-sm text-slate-600">Dlaczego LOT to najlepsza opcja na lot powrotny z Dubaju?</p>
              </Link>
              <Link href="/blog/ile-odszkodowania-opozniony-lot" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Ile odszkodowania za opóźniony lot?</h3>
                <p className="text-sm text-slate-600">Sprawdź dokładne kwoty odszkodowań w zależności od dystansu lotu.</p>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Jak złożyć wniosek o odszkodowanie? (Wzór pisma)</h3>
                <p className="text-sm text-slate-600">Gotowy szablon reklamacji + instrukcja krok po kroku.</p>
              </Link>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">🎯 Gotowy złożyć reklamację za lot do Dubaju?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Nie pozwól, żeby Emirates odrzucił Twoją reklamację bezpodstawnie. ClaimWinger załatwi wszystko za Ciebie — szybko i bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-dubaj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-50 transition-colors shadow-lg"
              >
                Sprawdź swoje odszkodowanie 400 € →
              </a>
              <Link
                href="/"
                className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-800 transition-colors border-2 border-white"
              >
                Wróć na stronę główną
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}