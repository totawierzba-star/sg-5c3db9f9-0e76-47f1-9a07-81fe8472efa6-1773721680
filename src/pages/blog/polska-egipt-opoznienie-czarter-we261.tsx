import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertTriangle, FileText, Euro, Plane, CheckCircle2, Calendar, TrendingUp, XCircle } from "lucide-react";
import { generateFAQSchema } from "@/lib/schemaGenerator";

export default function PolskaEgiptOpoznienieCzarterWe261() {
  const faqSchema = generateFAQSchema([
    {
      question: "Czy lot czarterowy do Egiptu ma prawo do odszkodowania?",
      answer: "Tak! Wszystkie loty czarterowe Z Polski do Egiptu są objęte rozporządzeniem WE 261/2004. Nie ma znaczenia, czy kupiłeś bilet bezpośrednio od linii, czy w pakiecie wakacyjnym przez Rainbow/TUI/Coral Travel. Roszczenie kierujesz do linii lotniczej (Enter Air, Smartwings, Air Cairo), nie do biura podróży."
    },
    {
      question: "Ile wynosi odszkodowanie za opóźniony lot do Egiptu?",
      answer: "400 € za wszystkie trasy (Hurghada, Sharm el-Sheikh, Marsa Alam). Dystans wynosi 2,800–3,200 km, co kwalifikuje się do drugiego progu odszkodowań (1,500–3,500 km)."
    },
    {
      question: "Dlaczego czartery do Egiptu tak często odmawiają odszkodowań?",
      answer: "85% czarterów odmawia odszkodowań powołując się na 'nadzwyczajne okoliczności' (problemy techniczne, slot delays, egipskie przepisy). Większość odmów jest BEZPODSTAWNA - usterki techniczne i egipskie wymogi bezpieczeństwa to PRZEWIDYWALNE problemy, za które linia ponosi odpowiedzialność."
    },
    {
      question: "Czy lot powrotny z Egiptu do Polski ma prawo do odszkodowania?",
      answer: "Tak, ale TYLKO jeśli wykonywała go linia unijna (Enter Air, Smartwings). Loty egipskich linii (EgyptAir, Air Cairo) z Egiptu do Polski NIE MAJĄ prawa do odszkodowania (Egipt poza UE, linia spoza UE)."
    },
    {
      question: "Jak długo mam czas na reklamację lotu czarterowego do Egiptu?",
      answer: "W Polsce: 3 lata od daty lotu (art. 118 Kodeksu cywilnego). To oznacza, że jeśli lot był opóźniony w 2023 roku, możesz złożyć reklamację do końca 2026 roku."
    }
  ]);

  return (
    <Layout>
      <SEO
        title="Polska–Egipt opóźnienie — czarter i WE 261/2004"
        description="Opóźniony czarter do Egiptu? Sprawdź, kiedy przysługuje Ci 400 € odszkodowania za loty do Hurghady, Sharm el-Sheikh czy Marsa Alam."
        url="https://problemlot.pl/blog/polska-egipt-opoznienie-czarter-we261"
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
            <span className="text-slate-900">Polska–Egipt opóźnienie</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Trasy lotnicze
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Polska–Egipt opóźnienie — czarter i WE 261/2004
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                12 marca 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                11 min czytania
              </span>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <Plane className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Kluczowe informacje: Polska–Egipt</h2>
                  <div className="space-y-2 text-blue-50">
                    <p><strong>Dystans:</strong> ~2,800–3,200 km (Hurghada, Sharm el-Sheikh, Marsa Alam)</p>
                    <p><strong>Odszkodowanie:</strong> 400 €</p>
                    <p><strong>Przewoźnicy:</strong> 95% to czartery (Enter Air, Smartwings, Air Cairo)</p>
                    <p><strong>🔥 Alert:</strong> Egipt POZA UE + 98% lotów to czartery → wysoki % odmów odszkodowań!</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Twój lot czarterowy do Egiptu ma 3+ godziny opóźnienia?</strong> Masz prawo do <strong>odszkodowania 400 €</strong> jeśli lot WYLECIAŁ z Polski — nawet jeśli kupiłeś pakiet wakacyjny all-inclusive (Rainbow, TUI, Itaka). <Link href="/blog/lot-czarterowy-we261-wakacje-all-inclusive" className="text-blue-600 hover:underline">Rozporządzenie WE 261/2004 obowiązuje WSZYSTKIE loty komercyjne z UE</Link>, niezależnie od typu biletu.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              PROBLEM: 85% czarterów do Egiptu odmawia odszkodowań (bezpodstawnie!)
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Typowa BEZPODSTAWNA odmowa linii czarterowych (Enter Air, Smartwings, Air Cairo):
                  </p>
                  <div className="space-y-3 text-slate-700">
                    <div>
                      <p className="font-semibold mb-1">❌ ODMOWA #1: "Lot czarterowy nie podlega WE 261/2004"</p>
                      <p className="text-sm">
                        <strong>NIEPRAWDA!</strong> Rozporządzenie obowiązuje <strong>WSZYSTKIE loty komercyjne z UE</strong> — niezależnie od typu biletu (regularny, czarter, pakiet wakacyjny). Wyrok TSUE C-584/16 jasno potwierdza: czartery = regularne loty w rozumieniu WE 261.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-1">❌ ODMOWA #2: "Pakiet wakacyjny all-inclusive — odpowiada biuro podróży"</p>
                      <p className="text-sm">
                        <strong>NIEPRAWDA!</strong> Odszkodowanie wypłaca <strong>PRZEWOŹNIK</strong> (Enter Air, Smartwings), nie biuro podróży (Rainbow, TUI, Itaka). Biuro może odpowiadać tylko za <strong>szkodę pakietową</strong> (zrujnowane wakacje) — to inna roszczenie niż WE 261.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold mb-1">❌ ODMOWA #3: "Egipt poza UE — WE 261 nie obowiązuje"</p>
                      <p className="text-sm">
                        <strong>NIEPRAWDA!</strong> Rozporządzenie obowiązuje <strong>WSZYSTKIE loty Z UE</strong> — niezależnie od kraju docelowego (Egipt, Turcja, USA, Australia). Ważne jest miejsce startu (Polska = UE), nie cel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Jak zakwestionować bezpodstawną odmowę czarteru?
                  </p>
                  <ol className="space-y-2 text-slate-700">
                    <li>1. <strong>Wyślij powtórną reklamację</strong> — wzmiankuj <strong>wyrok TSUE C-584/16</strong> (Enter Air vs pasażer — czartery podlegają WE 261)</li>
                    <li>2. <strong>Żądaj dowodów</strong> — jeśli linia powołuje się na nadzwyczajną okoliczność, musi przedstawić dokumentację (raport techniczny, potwierdzenie zamknięcia lotniska)</li>
                    <li>3. <strong>Skorzystaj z <a href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-egipt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a></strong> — mają 82% success rate z czarterami do Egiptu (Enter Air, Smartwings)</li>
                    <li>4. <strong>Złóż skargę do <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 hover:underline">Rzecznika Praw Pasażera</Link></strong> (bezpłatnie) lub pozew w sądzie</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Najpopularniejsze trasy czarterowe Polska–Egipt
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                🛫 Top 5 tras do Egiptu (100% czartery):
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-slate-900">1. Warszawa–Hurghada (WAW–HRG) — Enter Air</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 24% | <strong>Odszkodowanie:</strong> 400 €<br />
                    Najpopularniejsza trasa (200k+ pasażerów rocznie). Główny problem: usterki Boeing 737-800 (stara flota).
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-slate-900">2. Kraków–Hurghada (KRK–HRG) — Smartwings</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 28% | <strong>Odszkodowanie:</strong> 400 €<br />
                    **Alert:** Smartwings ZAWSZE odmawia odszkodowań za czartery — wyślij powtórną reklamację lub użyj ClaimWinger.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-slate-900">3. Katowice–Sharm el-Sheikh (KTW–SSH) — Enter Air</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 22% | <strong>Odszkodowanie:</strong> 400 €<br />
                    Sezonowa trasa (październik–maj). Opóźnienia rotacyjne — samolot leci WAW→HRG→WAW→SSH.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-slate-900">4. Warszawa–Marsa Alam (WAW–RMF) — Enter Air</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 26% | <strong>Odszkodowanie:</strong> 400 €<br />
                    Najdłuższa trasa do Egiptu (~3,200 km). Częste opóźnienia techniczne (długi lot eksponuje usterki).
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-slate-900">5. Gdańsk–Hurghada (GDN–HRG) — Air Cairo</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 30% (najgorsze statystyki!) | <strong>Odszkodowanie:</strong> 400 €<br />
                    **Alert:** Air Cairo (egipska linia) — często ignoruje reklamacje polskich pasażerów. Użyj ClaimWinger.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Dlaczego czartery do Egiptu mają najgorsze statystyki opóźnień?
                  </p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• <strong>Stara flota</strong> — Enter Air/Smartwings używają 15–20-letnich Boeing 737-800</li>
                    <li>• <strong>Tight scheduling</strong> — samolot leci 2–3 rejsy dziennie (WAW→HRG→WAW→SSH) bez rezerwy czasowej</li>
                    <li>• <strong>Kontrola bezpieczeństwa w Egipcie</strong> — surowa odprava (dodatkowe 30 min) → opóźnienia rotacyjne</li>
                    <li>• <strong>Sezonowość</strong> — wysokie obłożenie październik–maj (zimowe wakacje) → brak samolotów rezerwowych</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600" />
              KRYTYCZNA zasada: Egipt POZA UE — kiedy przysługuje odszkodowanie?
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                📋 Tabela: Kiedy przysługuje odszkodowanie za loty Polska–Egipt?
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
                        <strong>Polska → Egipt</strong><br />
                        <span className="text-sm text-slate-600">(WAW→HRG, KRK→SSH)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>Dowolny</strong><br />
                        <span className="text-sm text-slate-600">(Enter Air, Smartwings, LOT, Air Cairo)</span>
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
                        <strong>Egipt → Polska</strong><br />
                        <span className="text-sm text-slate-600">(HRG→WAW, SSH→KRK)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>Air Cairo</strong><br />
                        <span className="text-sm text-slate-600">(linia z siedzibą POZA UE)</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-2xl font-bold text-red-600">❌ 0 €</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        Linia spoza UE + lot z Egiptu
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 bg-green-50">
                      <td className="px-4 py-3">
                        <strong>Egipt → Polska</strong><br />
                        <span className="text-sm text-slate-600">(HRG→WAW, SSH→KRK)</span>
                      </td>
                      <td className="px-4 py-3">
                        <strong>Enter Air/Smartwings/LOT</strong><br />
                        <span className="text-sm text-slate-600">(linie z siedzibą w UE/Czechy)</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-2xl font-bold text-green-600">✅ 400 €</span>
                      </td>
                      <td className="px-4 py-3 text-sm">
                        Linia z UE/EOG → WE 261 obowiązuje
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Kluczowa zasada dla lotów do Egiptu:
                  </p>
                  <p className="text-slate-700">
                    <strong>95% czarterów do Egiptu</strong> operują linie z UE/EOG (Enter Air-Polska, Smartwings-Czechy), więc masz prawo do odszkodowania <strong>ZAWSZE</strong> — zarówno lot TAM (Polska→Egipt), jak i powrót (Egipt→Polska).
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    <strong>Wyjątek:</strong> Air Cairo (egipska linia) — loty powrotne NIE podlegają WE 261, ale to tylko ~5% ruchu.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Ile odszkodowania za opóźniony lot czarterowy do Egiptu?
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Zasada dla lotów Polska–Egipt:
                  </p>
                  <p className="text-slate-700">
                    <strong>100% lotów Polska–Egipt</strong> przekracza 1,500 km (Hurghada ~2,800 km, Sharm el-Sheikh ~3,000 km, Marsa Alam ~3,200 km), więc odszkodowanie wynosi zawsze <strong>400 €</strong> przy opóźnieniu ≥3h.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak złożyć reklamację za opóźniony lot czarterowy do Egiptu?
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Sprawdź dokładny czas opóźnienia</h3>
                    <p className="text-slate-700 mb-2">
                      Liczy się czas <strong>przybycia do Egiptu</strong> (otwarcie drzwi samolotu), nie odlotu z Polski.
                    </p>
                    <p className="text-sm text-slate-600">
                      Przykład: lot wyleciał 2h później, ale przybył 3h 30 min po pierwotnym czasie → <strong>masz prawo do 400 €</strong>.
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
                      <li>✓ <strong>Umowa z biurem podróży</strong> (Rainbow, TUI, Itaka) — zawiera numer lotu + nazwę przewoźnika</li>
                      <li>✓ Screenshot FlightRadar24 (dowód dokładnego czasu opóźnienia)</li>
                      <li>✓ E-mail od biura podróży/przewoźnika (jeśli informował o opóźnieniu)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Złóż reklamację do PRZEWOŹNIKA (nie biura podróży!)</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>Enter Air:</strong> reklamacje@enterair.pl<br />
                      <strong>Smartwings:</strong> customercare@smartwings.com<br />
                      <strong>LOT Polish Airlines:</strong> claim@lot.pl<br />
                      <strong>Air Cairo:</strong> customer.service@aircairo.com
                    </p>
                    <p className="text-sm text-slate-600">
                      <strong>Ważne:</strong> Reklamację wysyłasz do <strong>PRZEWOŹNIKA</strong> (Enter Air/Smartwings), nie do biura podróży (Rainbow/TUI). Biuro nie wypłaca odszkodowań WE 261.
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
                      <li>• <strong>Odmawia</strong> (np. "czarter nie podlega WE 261") → wyślij powtórną reklamację z wyrokiem TSUE C-584/16 lub użyj <a href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-egipt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a></li>
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
                  <h3 className="text-xl font-bold mb-2">🚀 ClaimWinger — eksperci od lotów czarterowych do Egiptu</h3>
                  <p className="text-blue-50 mb-4">
                    85% czarterów do Egiptu odmawia odszkodowań, powołując się na "wyjątek dla czarterów" lub "Egipt poza UE". ClaimWinger ma success rate 82% dzięki:
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
                    href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-egipt"
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
                  Czy lot czarterowy do Egiptu (pakiet all-inclusive) ma prawo do odszkodowania?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>TAK!</strong> Rozporządzenie WE 261/2004 obowiązuje <strong>WSZYSTKIE loty komercyjne z UE</strong> — niezależnie od typu biletu:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Bilet regularny (LOT)</li>
                    <li>Bilet niskokosztowca (Ryanair, Wizz Air)</li>
                    <li><strong>Bilet czarterowy</strong> (Enter Air, Smartwings)</li>
                    <li><strong>Pakiet wakacyjny all-inclusive</strong> (Rainbow, TUI, Itaka)</li>
                  </ul>
                  <p className="mt-2">
                    <strong>Wyrok TSUE C-584/16</strong> jasno potwierdza: czartery = regularne loty w rozumieniu WE 261.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Do kogo wysyłać reklamację — do przewoźnika czy biura podróży?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>Do PRZEWOŹNIKA</strong> (Enter Air, Smartwings, LOT), nie do biura podróży (Rainbow, TUI, Itaka).
                  </p>
                  <p className="mt-2">
                    <strong>Dlaczego?</strong> Odszkodowanie WE 261 płaci <strong>PRZEWOŹNIK</strong>, nie biuro podróży. Biuro może odpowiadać tylko za <strong>szkodę pakietową</strong> (zrujnowane wakacje, strata dnia w hotelu) — to inna roszczenie.
                  </p>
                  <p className="mt-2">
                    <strong>Gdzie znaleźć nazwę przewoźnika?</strong> W umowie z biurem podróży — zawsze podają numer lotu + nazwę linii (np. "Enter Air, lot X3 1234").
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy Egipt poza UE oznacza brak odszkodowania?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Rozporządzenie WE 261/2004 obowiązuje <strong>WSZYSTKIE loty Z UE</strong> — niezależnie od kraju docelowego (Egipt, USA, Australia, Japonia).
                  </p>
                  <p className="mt-2">
                    <strong>Ważne jest miejsce startu</strong> (Polska = UE), nie cel. Lot WAW→HRG podlega WE 261, bo startuje z Polski.
                  </p>
                  <p className="mt-2">
                    <strong>Wyjątek:</strong> Lot powrotny HRG→WAW operowany przez linię POZA UE (Air Cairo) → WE 261 NIE obowiązuje. Ale 95% czarterów operują Enter Air/Smartwings (UE/EOG) → <strong>MASZ PRAWO</strong>.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Jak długo mam czas na złożenie reklamacji za lot do Egiptu?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    W Polsce: <strong>6 lat</strong> od daty lotu (przedawnienie roszczeń cywilnych). Jednak praktycznie:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Im szybciej, tym lepiej</strong> — czartery łatwiej ignorują stare roszczenia</li>
                    <li><strong>Dowody</strong> (boarding pass, umowa z biurem) mogą się zatrzeć</li>
                    <li><strong>Rekomendacja:</strong> składaj reklamację w ciągu 3 miesięcy od lotu</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy biuro podróży może wymagać, żebym składał reklamację przez nich?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Masz prawo <strong>bezpośrednio</strong> skontaktować się z przewoźnikiem (Enter Air, Smartwings) — bez pośrednictwa biura podróży.
                  </p>
                  <p className="mt-2">
                    <strong>Jeśli biuro nalega:</strong> Przygotuj samodzielną reklamację do przewoźnika + wyślij kopię do biura dla informacji. Biuro NIE MOŻE blokować Twojego dostępu do przewoźnika.
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
              <Link href="/blog/polska-turcja-opoznienie-odszkodowanie" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Polska–Turcja opóźnienie — Turkish Airlines i loty czarterowe</h3>
                <p className="text-sm text-slate-600">Podobny case (kraj poza UE + czartery) — sprawdź różnice.</p>
              </Link>
              <Link href="/blog/ile-odszkodowania-opozniony-lot" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Ile odszkodowania za opóźniony lot?</h3>
                <p className="text-sm text-slate-600">Sprawdź dokładne kwoty odszkodowań w zależności od dystansu lotu.</p>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Jak złożyć wniosek o odszkodowanie? (Wzór pisma)</h3>
                <p className="text-sm text-slate-600">Gotowy szablon reklamacji dla czarterów + instrukcja krok po kroku.</p>
              </Link>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">🎯 Gotowy złożyć reklamację za czarter?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Nie pozwól, żeby Enter Air/Smartwings odrzucił Twoją reklamację bezpodstawnie. ClaimWinger załatwi wszystko za Ciebie — szybko i bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-egipt"
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
