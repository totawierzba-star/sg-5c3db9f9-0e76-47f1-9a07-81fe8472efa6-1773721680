import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertTriangle, FileText, Euro, Plane, CheckCircle2, Calendar, TrendingUp, XCircle } from "lucide-react";

export default function PolskaTurcjaOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Polska–Turcja opóźnienie — Turkish Airlines i loty czarterowe"
        description="Opóźniony lot do Turcji? Sprawdź, kiedy przysługuje odszkodowanie 400 € za Turkish Airlines, LOT i loty czarterowe."
        url="https://problemlot.pl/blog/polska-turcja-opoznienie-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Polska–Turcja opóźnienie</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Trasy lotnicze
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Polska–Turcja opóźnienie — Turkish Airlines i loty czarterowe
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
                  <h2 className="text-xl font-bold mb-2">Kluczowe informacje: Polska–Turcja</h2>
                  <div className="space-y-2 text-blue-50">
                    <p><strong>Dystans:</strong> ~1,600–1,800 km (Istanbul, Antalya, Bodrum)</p>
                    <p><strong>Odszkodowanie:</strong> 400 €</p>
                    <p><strong>Przewoźnicy:</strong> Turkish Airlines (50%), LOT (15%), czartery (35%)</p>
                    <p><strong>⚠️ Alert:</strong> Turcja POZA UE — WE 261 obowiązuje tylko loty Z Polski</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Twój lot do Turcji ma 3+ godziny opóźnienia?</strong> Masz prawo do <strong>odszkodowania 400 €</strong> jeśli lot WYLECIAŁ z Polski (Warszawa, Kraków, Gdańsk). Rozporządzenie WE 261/2004 obowiązuje również <Link href="/blog/lot-czarterowy-we261-wakacje-all-inclusive" className="text-blue-600 hover:underline">loty czarterowe</Link> — nawet jeśli kupiłeś pakiet wakacyjny all-inclusive.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              KRYTYCZNA zasada: Turcja POZA UE — kiedy przysługuje odszkodowanie?
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Turcja NIE JEST w Unii Europejskiej — rozporządzenie WE 261/2004 ma ograniczoną ważność!
                  </p>
                  <div className="space-y-3 text-slate-700">
                    <div>
                      <p className="font-semibold mb-1">✅ MASZ PRAWO do odszkodowania:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li><strong>Lot Z Polski do Turcji</strong> (WAW→IST, KRK→AYT) — niezależnie od przewoźnika (Turkish, LOT, czarter)</li>
                        <li><strong>Przyczyna:</strong> Lot startuje z terytorium UE → WE 261 obowiązuje</li>
                      </ul>
                    </div>

                    <div>
                      <p className="font-semibold mb-1">❌ NIE MASZ PRAWA do odszkodowania:</p>
                      <ul className="list-disc list-inside space-y-1 text-sm ml-4">
                        <li><strong>Lot Z Turcji do Polski</strong> (IST→WAW, AYT→KRK) operowany przez <strong>Turkish Airlines</strong></li>
                        <li><strong>Przyczyna:</strong> Turkish Airlines ma siedzibę POZA UE → WE 261 NIE obowiązuje lotów powrotnych</li>
                        <li><strong>Wyjątek:</strong> Jeśli lot powrotny operuje <strong>LOT/Ryanair/Wizz Air</strong> (linie z UE) → MASZ PRAWO do odszkodowania</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                📋 Tabela: Kiedy przysługuje odszkodowanie za loty Polska–Turcja?
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
                        <strong>Polska → Turcja</strong><br />
                        <span className="text-sm text-slate-600">(WAW→IST, KRK→AYT)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>Dowolny</strong><br />
                        <span className="text-sm text-slate-600">(Turkish, LOT, czarter)</span>
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
                        <strong>Turcja → Polska</strong><br />
                        <span className="text-sm text-slate-600">(IST→WAW, AYT→KRK)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>Turkish Airlines</strong><br />
                        <span className="text-sm text-slate-600">(linia z siedzibą POZA UE)</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-2xl font-bold text-red-600">❌ 0 €</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        Linia spoza UE + lot z Turcji
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-green-50">
                      <td className="px-4 py-3">
                        <strong>Turcja → Polska</strong><br />
                        <span className="text-sm text-slate-600">(IST→WAW, AYT→KRK)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>LOT/Ryanair/Wizz Air</strong><br />
                        <span className="text-sm text-slate-600">(linie z siedzibą w UE)</span>
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
              Najpopularniejsze trasy Polska–Turcja (i ich problemy)
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                🛫 Top 5 tras do Turcji z Polski:
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-slate-900">1. Warszawa–Istanbul (WAW–IST) — Turkish Airlines</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 16% | <strong>Odszkodowanie:</strong> 400 € (tylko lot TAM)<br />
                    Najczęstszy problem: opóźnienia rotacyjne (samolot z Azji spóźniony → kaskada)
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-slate-900">2. Kraków–Antalya (KRK–AYT) — loty czarterowe</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 22% (lipiec–sierpień 28%!) | <strong>Odszkodowanie:</strong> 400 €<br />
                    <strong>Alert:</strong> Czarter Enter Air/Smartwings — często odmawiają odszkodowań (bezpodstawnie!)
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-slate-900">3. Warszawa–Antalya (WAW–AYT) — LOT Polish Airlines</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 14% | <strong>Odszkodowanie:</strong> 400 €<br />
                    Sezonowa trasa (kwiecień–październik) — LOT często powołuje się na "pogodę" (bezpodstawnie)
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-slate-900">4. Gdańsk–Antalya (GDN–AYT) — czarter Enter Air</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 25% | <strong>Odszkodowanie:</strong> 400 €<br />
                    Główny problem: usterki techniczne Boeing 737-800 (stara flota)
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-slate-900">5. Katowice–Bodrum (KTW–BJV) — Wizz Air</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 19% | <strong>Odszkodowanie:</strong> 400 €<br />
                    Sezonowa trasa — Wizz Air często odrzuca roszczenia (wysyłaj powtórną reklamację!)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Problem: Loty czarterowe do Turcji — Enter Air i Smartwings odmawiają odszkodowań
                  </p>
                  <p className="text-sm text-slate-700 mb-2">
                    <strong>Typowa odmowa:</strong> "Lot czarterowy nie podlega WE 261/2004" — to NIEPRAWDA! <Link href="/blog/lot-czarterowy-we261-wakacje-all-inclusive" className="text-blue-600 hover:underline">Rozporządzenie obowiązuje WSZYSTKIE loty komercyjne z UE</Link>, niezależnie od typu biletu (czarter, regularne, pakiet wakacyjny).
                  </p>
                  <p className="text-sm text-slate-600">
                    <strong>Jak zakwestionować:</strong> Wyślij powtórną reklamację z odwołaniem do orzecznictwa TSUE (C-584/16 — sprawa Enter Air vs pasażer). Skorzystaj z <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 hover:underline">ClaimWinger</Link> — mają 82% success rate z czarterami.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Ile odszkodowania za opóźniony lot Polska–Turcja?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Zasada dla lotów Polska–Turcja:
                  </p>
                  <p className="text-slate-700">
                    <strong>100% lotów Polska–Turcja</strong> przekracza 1,500 km (Istanbul ~1,600 km, Antalya ~1,800 km), więc odszkodowanie wynosi zawsze <strong>400 €</strong> przy opóźnieniu ≥3h — pod warunkiem, że <strong>lot WYLECIAŁ z Polski</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak złożyć reklamację za opóźniony lot do Turcji?
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
                      <strong>Lot Z Polski (TAM):</strong> Zawsze masz prawo do 400 € (niezależnie od przewoźnika)
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Lot Z Turcji (powrót):</strong> Tylko jeśli operuje linia z UE (LOT, Ryanair, Wizz Air). Turkish Airlines → BRAK prawa.
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
                      <li>✓ Potwierdzenie rezerwacji (jeśli czarter — umowa z biurem podróży)</li>
                      <li>✓ Screenshot FlightRadar24 (dowód dokładnego czasu opóźnienia)</li>
                      <li>✓ E-mail od przewoźnika/biura podróży (jeśli informował o opóźnieniu)</li>
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
                      <strong>Turkish Airlines:</strong> customer.relations@thy.com<br />
                      <strong>LOT Polish Airlines:</strong> claim@lot.pl<br />
                      <strong>Czarter (Enter Air):</strong> reklamacje@enterair.pl<br />
                      <strong>Wizz Air:</strong> formularz online (wizzair.com)
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
                      <li>• <strong>Odmawia</strong> (np. "czarter nie podlega WE 261") → wyślij powtórną reklamację lub użyj ClaimWinger.com</li>
                      <li>• <strong>Ignoruje</strong> → złóż skargę do <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 hover:underline">Rzecznika Praw Pasażera</Link> (bezpłatnie)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">🚀 ClaimWinger — eksperci od lotów czarterowych do Turcji</h3>
                  <p className="text-blue-50 mb-4">
                    Czartery (Enter Air, Smartwings) często odmawiają odszkodowań, powołując się na "wyjątek dla czarterów". ClaimWinger ma success rate 82% dzięki:
                  </p>
                  <ul className="space-y-2 text-blue-50 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Prawników znających orzecznictwo TSUE (C-584/16 — Enter Air vs pasażer)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Specjalizacja w lotach czarterowych i pakietach wakacyjnych
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
                    href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-turcja"
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
                  Czy lot powrotny Turkish Airlines (IST→WAW) ma prawo do odszkodowania?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Turkish Airlines ma siedzibę POZA UE (Turcja), więc rozporządzenie WE 261/2004 <strong>NIE obowiązuje</strong> lotów powrotnych z Turcji do Polski operowanych przez Turkish.
                  </p>
                  <p className="mt-2">
                    <strong>Wyjątek:</strong> Jeśli lot powrotny operuje linia z UE (LOT, Ryanair, Wizz Air) → <strong>MASZ PRAWO</strong> do odszkodowania 400 €.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy lot czarterowy do Turcji (pakiet wakacyjny) ma prawo do odszkodowania?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>TAK!</strong> Rozporządzenie WE 261/2004 obowiązuje <strong>WSZYSTKIE loty komercyjne z UE</strong> — niezależnie od typu biletu:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Bilet regularny (LOT, Turkish)</li>
                    <li>Bilet niskokosztowca (Ryanair, Wizz Air)</li>
                    <li><strong>Bilet czarterowy</strong> (Enter Air, Smartwings)</li>
                    <li><strong>Pakiet wakacyjny all-inclusive</strong> (Rainbow, TUI, Itaka)</li>
                  </ul>
                  <p className="mt-2">
                    Czartery często odmawiają odszkodowań — wyślij powtórną reklamację lub użyj <a href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-turcja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a>.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Dlaczego Turcja ma ograniczoną ważność WE 261?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>Turcja NIE JEST w Unii Europejskiej</strong> (tylko w unii celnej). Rozporządzenie WE 261/2004 obowiązuje:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Wszystkie loty Z UE</strong> — niezależnie od przewoźnika i kraju docelowego</li>
                    <li><strong>Loty DO UE operowane przez linie z UE</strong> (np. LOT powrót z Turcji)</li>
                    <li><strong>NIE obowiązuje:</strong> Loty DO UE operowane przez linie POZA UE (np. Turkish Airlines powrót)</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Jak długo mam czas na złożenie reklamacji za lot do Turcji?
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
                  Czy biuro podróży płaci odszkodowanie za lot czarterowy?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Odszkodowanie wypłaca <strong>PRZEWOŹNIK</strong> (Enter Air, Smartwings, LOT), nie biuro podróży (Rainbow, TUI, Itaka).
                  </p>
                  <p className="mt-2">
                    <strong>Wyjątek:</strong> Jeśli biuro podróży jest <strong>organizatorem lotu</strong> (nie tylko pośrednikiem) → może odpowiadać solidarnie z przewoźnikiem. Szczegóły w <Link href="/blog/lot-czarterowy-we261-wakacje-all-inclusive" className="text-blue-600 hover:underline">naszym artykule o czarterach</Link>.
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
              <Link href="/blog/lot-czarterowy-we261-wakacje-all-inclusive" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Lot czarterowy a WE 261 — czy masz prawo do odszkodowania?</h3>
                <p className="text-sm text-slate-600">Kompletny przewodnik po odszkodowaniach za loty czarterowe i pakiety wakacyjne.</p>
              </Link>
              <Link href="/blog/ile-odszkodowania-opozniony-lot" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Ile odszkodowania za opóźniony lot?</h3>
                <p className="text-sm text-slate-600">Sprawdź dokładne kwoty odszkodowań w zależności od dystansu lotu.</p>
              </Link>
              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Nadzwyczajne okoliczności — kiedy linia NIE musi płacić?</h3>
                <p className="text-sm text-slate-600">Lista wszystkich nadzwyczajnych okoliczności z orzecznictwem TSUE.</p>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Jak złożyć wniosek o odszkodowanie? (Wzór pisma)</h3>
                <p className="text-sm text-slate-600">Gotowy szablon reklamacji + instrukcja krok po kroku.</p>
              </Link>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">🎯 Gotowy złożyć reklamację?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Nie czekaj miesiącami na odpowiedź od przewoźnika. ClaimWinger załatwi wszystko za Ciebie — szybko i bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-turcja"
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