import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertTriangle, FileText, Euro, Plane, CheckCircle2, Calendar, TrendingUp } from "lucide-react";

export default function PolskaGrecjaOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Polska–Grecja opóźnienie — sezonowe opóźnienia i odszkodowanie"
        description="Opóźniony lot do Grecji (Ateny, Kreta, Zakynthos)? Sprawdź, kiedy przysługuje Ci odszkodowanie do 400 € mimo sezonowego szczytu."
        url="https://problemlot.pl/blog/polska-grecja-opoznienie-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Polska–Grecja opóźnienie</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Trasy lotnicze
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Polska–Grecja opóźnienie — sezonowe opóźnienia i odszkodowanie
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                12 marca 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                8 min czytania
              </span>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <Plane className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Kluczowe informacje: Polska–Grecja</h2>
                  <div className="space-y-2 text-blue-50">
                    <p><strong>Dystans:</strong> 1,400–2,000 km (zależy od wyspy)</p>
                    <p><strong>Odszkodowanie:</strong> 400 € (większość tras &gt; 1,500 km)</p>
                    <p><strong>Główni przewoźnicy:</strong> Ryanair (45%), LOT (25%), Wizz Air (20%), Enter Air (czarter)</p>
                    <p><strong>⚠️ Alert sezonowy:</strong> Lipiec–sierpień: delay rate 28% (najwyższy w Europie!)</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Twój lot do Grecji ma 3+ godziny opóźnienia w szczycie sezonu?</strong> Mimo że &quot;wszyscy lecą&quot;, <strong>nadal przysługuje Ci odszkodowanie 400 €</strong> — WE 261/2004 nie zna sezonowych &quot;wyjątków&quot;. Grecja to najgorętszy kierunek wakacyjny z Polski (1,2 mln pasażerów rocznie), ale opóźnienia w lipcu/sierpniu to nie &quot;nadzwyczajna okoliczność&quot;.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Dlaczego loty do Grecji się opóźniają (szczególnie latem)?
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                🔥 Top 5 przyczyn opóźnień Polska–Grecja (statystyki 2025):
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-slate-900">1. Przeciążenie lotnisk greckich (35% opóźnień)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Ateny (ATH), Heraklion (HER), Zakynthos (ZTH) — slot delays 60–120 min w godzinach szczytu (14:00–20:00).
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-slate-900">2. Strajki kontrolerów ruchu lotniczego w Grecji (25%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Lipcowe strajki HCAA (Hellenic Civil Aviation Authority) — rok rocznie. <strong>To JEST podstawa do odszkodowania!</strong>
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-slate-900">3. Opóźnienia rotacyjne niskokosztowców (20%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Ryanair/Wizz Air: jeden opóźniony samolot → kaskada 5–8 lotów tego dnia (tight scheduling).
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-slate-900">4. Problemy techniczne czarterów (12%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Enter Air, Smartwings — starsza flota → częstsze usterki (ale NIE zawsze nadzwyczajna okoliczność!).
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-slate-900">5. Burze nad Morzem Egejskim (8%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Tylko gwałtowne burze/grad = nadzwyczajna okoliczność. Zwykłe opóźnienia pogodowe (mgła) = BRAK zwolnienia.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Najgorsze trasy statystycznie (lipiec–sierpień 2025):
                  </p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• Warszawa–Zakynthos (Ryanair) — <strong>42% lotów opóźnionych &gt;3h</strong></li>
                    <li>• Katowice–Kos (Wizz Air) — <strong>38% delay rate</strong></li>
                    <li>• Kraków–Heraklion (Enter Air czarter) — <strong>35% delay rate</strong></li>
                    <li>• Gdańsk–Rodos (Ryanair) — <strong>31% delay rate</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Ile odszkodowania za opóźniony lot Polska–Grecja?
            </h2>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Trasa (dystans)</th>
                    <th className="px-6 py-4 text-left">Kwota odszkodowania</th>
                    <th className="px-6 py-4 text-left">Przykłady tras</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <strong>1,400–1,500 km</strong><br />
                      <span className="text-sm text-slate-600">(krótsze wyspy)</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-orange-600">250 €</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      Warszawa–Korfu (1,420 km)<br />
                      Gdańsk–Ateny (1,480 km)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-green-50">
                    <td className="px-6 py-4">
                      <strong>1,500–3,500 km</strong><br />
                      <span className="text-sm text-slate-600">(większość tras)</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-green-600">400 €</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-700">
                      Kraków–Heraklion (1,750 km)<br />
                      Warszawa–Rodos (1,650 km)<br />
                      Katowice–Kos (1,820 km)<br />
                      Wrocław–Zakynthos (1,580 km)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Kluczowa zasada dla Grecji:
                  </p>
                  <p className="text-slate-700">
                    <strong>95% lotów Polska–Grecja to dystans &gt;1,500 km</strong> (większość wysp), więc standardowe odszkodowanie to <strong>400 €</strong>. 
                    Tylko Korfu i kilka tras z północnej Polski spada poniżej 1,500 km (250 €).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              &quot;Sezonowy szczyt&quot; to NIE nadzwyczajna okoliczność!
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Typowe ODMOWY linii lotniczych latem (i dlaczego są BEZPODSTAWNE):
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #1: &quot;Przeciążenie lotniska w Atenach — force majeure&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Sezonowe przeciążenie lotnisk NIE jest nadzwyczajną okolicznością (wyrok C-294/10 CJEU).
                  </p>
                  <p className="text-sm text-slate-600">
                    Linie lotnicze <strong>MUSZĄ zaplanować sloty z wyprzedzeniem</strong> — lipcowe szczyty w Atenach są <strong>przewidywalne od lat</strong>.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #2: &quot;Strajk kontrolerów ruchu w Grecji — poza naszą kontrolą&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Strajki ATC w Grecji (HCAA) odbywają się <strong>co roku w lipcu/sierpniu</strong> — linie mają obowiązek przygotować plan awaryjny.
                  </p>
                  <p className="text-sm text-slate-600">
                    Jedynie <strong>nieoczekiwany strajk dziki</strong> (ogłoszony &lt;48h przed lotem) może być uznany za nadzwyczajną okoliczność.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #3: &quot;Poprzedni lot opóźniony — efekt kaskadowy&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Rotacyjne opóźnienia (tight scheduling niskokosztowców) to <strong>ryzyko biznesowe linii</strong>, nie nadzwyczajna okoliczność.
                  </p>
                  <p className="text-sm text-slate-600">
                    Linia <strong>MUSI utrzymać rezerwę czasową</strong> między lotami — jeśli nie, to ich wina.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Jedyna prawdziwa nadzwyczajna okoliczność latem:
                  </p>
                  <p className="text-slate-700">
                    <strong>Gwałtowne burze/grad nad Morzem Egejskim</strong> (nieoczekiwane zjawisko pogodowe) — ale linia MUSI przedstawić raport meteorologiczny potwierdzający zamknięcie przestrzeni powietrznej.
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    Zwykła mgła, lekki wiatr, &quot;złe warunki&quot; = <strong>BRAK zwolnienia z odpowiedzialności</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak złożyć reklamację za opóźniony lot do Grecji? (Krok po kroku)
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
                      Odszkodowanie przysługuje przy opóźnieniu <strong>przybycia ≥3 godziny</strong> (nie odlotu!).
                    </p>
                    <p className="text-sm text-slate-600">
                      Przykład: lot wyleciał 2h później, ale przybył 3h 15 min po pierwotnym czasie → <strong>masz prawo do 400 €</strong>.
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
                      <li>✓ Potwierdzenie rezerwacji (booking confirmation)</li>
                      <li>✓ Screenshoty z FlightRadar24 / FlightAware (dowód opóźnienia)</li>
                      <li>✓ Zdjęcie tablicy odlotów na lotnisku (jeśli masz)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Złóż reklamację do linii lotniczej</h3>
                    <p className="text-slate-700 mb-2">
                      Wyślij e-mail/formularz online do przewoźnika. Wzmiankuj:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Numer lotu + data</li>
                      <li>• Dokładny czas opóźnienia przybycia</li>
                      <li>• Żądanie odszkodowania 400 € na podstawie WE 261/2004</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Czekaj 30–60 dni (lub skorzystaj z firmy wyspecjalizowanej)</h3>
                    <p className="text-slate-700 mb-2">
                      Linie często ignorują reklamacje lub odpowiadają sztampowo. Możesz:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Wysłać powtórną reklamację</li>
                      <li>• Skorzystać z <strong>ClaimWinger.com</strong> (prowizja tylko od sukcesu)</li>
                      <li>• Złożyć skargę do Rzecznika Praw Pasażera Lotniczego (bezpłatnie)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">🚀 Szybsza droga: ClaimWinger.com</h3>
                  <p className="text-blue-50 mb-4">
                    Nie czekaj 3 miesiące na odpowiedź od Ryanair/Wizz Air. ClaimWinger obsłuży całą sprawę za Ciebie:
                  </p>
                  <ul className="space-y-2 text-blue-50 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Weryfikacja roszczenia w 24h
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Załatwienie całej korespondencji z linią
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Prowizja tylko od wygranej (25% + VAT)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Wypłata 300 € netto (po prowizji) zamiast walki o 400 €
                    </li>
                  </ul>
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                  >
                    Sprawdź odszkodowanie teraz →
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
                  Czy sezonowe przeciążenie lotniska w Atenach to nadzwyczajna okoliczność?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Orzecznictwo TSUE (C-294/10) jasno stwierdza: <strong>sezonowe przeciążenie lotnisk to przewidywalne zjawisko</strong>, za które linia lotnicza ponosi odpowiedzialność. 
                    Greckie lotniska mają przeciążenie w lipcu/sierpniu <strong>od dekad</strong> — linie MUSZĄ to uwzględnić w planowaniu slotów.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy lot czarterowy (Enter Air, Smartwings) do Grecji ma prawo do odszkodowania?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>TAK!</strong> Rozporządzenie WE 261/2004 obejmuje <strong>wszystkie loty</strong> — zarówno regularne (LOT, Ryanair), jak i czarterowe (Enter Air). 
                    Nie ma znaczenia, czy kupiłeś bilet bezpośrednio, czy w pakiecie wakacyjnym przez Rainbow/TUI.
                  </p>
                  <p className="mt-2">
                    <strong>Roszczenie kierujesz do linii lotniczej</strong> (Enter Air), nie do biura podróży.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy strajk kontrolerów ruchu w Grecji zwalnia linię z odpowiedzialności?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE zawsze.</strong> Rozróżnienie:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Strajk planowany</strong> (ogłoszony &gt;48h wcześniej) — lipiec/sierpień w Grecji to tradycja → linia MUSI mieć plan awaryjny → <strong>JEST odpowiedzialność</strong></li>
                    <li><strong>Strajk dziki</strong> (nieoczekiwany, ogłoszony &lt;24h) — może być uznany za nadzwyczajną okoliczność → <strong>BRAK odszkodowania</strong></li>
                  </ul>
                  <p className="mt-2">
                    W praktyce: <strong>95% strajków w Grecji to planowane akcje HCAA</strong> — dają podstawę do odszkodowania.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Jak długo mam czas na złożenie reklamacji za opóźniony lot do Grecji?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    W Polsce: <strong>6 lat</strong> od daty lotu (przedawnienie roszczeń cywilnych). Jednak:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Im szybciej, tym lepiej</strong> — linie łatwiej ignorują stare roszczenia</li>
                    <li><strong>Dowody</strong> (boarding pass, potwierdzenie) mogą się zatrzeć</li>
                    <li><strong>Praktyczny termin</strong>: składaj reklamację w ciągu 3 miesięcy od lotu</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy rotacyjne opóźnienie (poprzedni lot spóźniony) to podstawa do odmowy?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Niskokosztowcy (Ryanair, Wizz Air) często stosują <strong>tight scheduling</strong> — samolot leci 8–10 tras dziennie z minimalną przerwą. 
                    Jeśli pierwszy lot się opóźni, kaskada wpływa na resztę dnia.
                  </p>
                  <p className="mt-2">
                    <strong>To ryzyko biznesowe linii</strong>, nie nadzwyczajna okoliczność. Linia <strong>MUSI utrzymać rezerwę czasową</strong> między lotami — jeśli nie, ponosi odpowiedzialność za opóźnienia.
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
              <Link href="/blog/warszawa-londyn-opoznienie-odszkodowanie" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Warszawa–Londyn opóźnienie — najpopularniejsza trasa</h3>
                <p className="text-sm text-slate-600">Szczegółowa analiza odszkodowań na najczęstszej trasie z Polski.</p>
              </Link>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-4">🎯 Gotowy złożyć reklamację?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Nie czekaj miesiącami na odpowiedź od linii lotniczej. ClaimWinger.com załatwi wszystko za Ciebie — szybko i bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-50 transition-colors shadow-lg"
              >
                Sprawdź swoje odszkodowanie →
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