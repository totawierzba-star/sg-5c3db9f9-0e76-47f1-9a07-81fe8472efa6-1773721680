import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertTriangle, FileText, Euro, Plane, CheckCircle2, Calendar, TrendingUp } from "lucide-react";
import { generateFAQSchema } from "@/lib/schemaGenerator";

export default function PolskaUsaOpoznienieLot600Euro() {
  const faqSchema = generateFAQSchema([
    {
      question: "Czy lot z Polski do USA ma prawo do odszkodowania?",
      answer: "Tak! Wszystkie loty z Polski do USA są objęte rozporządzeniem WE 261/2004. Jeśli lot jest opóźniony o min. 3 godziny lub odwołany, przysługuje Ci maksymalne odszkodowanie 600 € (dystans >3,500 km)."
    },
    {
      question: "Ile wynosi odszkodowanie za opóźniony lot do USA?",
      answer: "600 € - maksymalna kwota odszkodowania w UE! Dystans Polska–USA wynosi 6,500–9,300 km (>3,500 km), co kwalifikuje się do najwyższego progu odszkodowań."
    },
    {
      question: "Czy LOT często odmawia odszkodowań za loty transatlantyckie?",
      answer: "Tak, LOT odmawia w ~55% przypadków, powołując się na 'nadzwyczajne okoliczności' (problemy techniczne, air traffic control, pogoda). Większość odmów jest BEZPODSTAWNA - usterki techniczne to odpowiedzialność linii."
    },
    {
      question: "Jak długo mam czas na reklamację lotu do USA?",
      answer: "W Polsce: 3 lata od daty lotu (art. 118 Kodeksu cywilnego). To oznacza, że jeśli lot był opóźniony w 2023 roku, możesz złożyć reklamację do końca 2026 roku."
    },
    {
      question: "Czy lot powrotny z USA do Polski ma prawo do odszkodowania?",
      answer: "Tak, ale TYLKO jeśli wykonywała go linia unijna (LOT). Loty LOT z JFK/ORD/EWR do Warszawy są objęte WE 261/2004. Loty amerykańskich linii (United, Delta, American) z USA do Europy NIE MAJĄ prawa do odszkodowania."
    }
  ]);

  return (
    <Layout>
      <SEO
        title="Polska–USA opóźnienie — LOT i €600 za transatlantyk"
        description="Opóźniony lot LOT do USA? Sprawdź, kiedy przysługuje Ci maksymalne odszkodowanie 600 € za loty do Nowego Jorku, Chicago czy Toronto."
        url="https://problemlot.pl/blog/polska-usa-opoznienie-lot-600-euro"
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
            <span className="text-slate-900">Polska–USA opóźnienie</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Trasy lotnicze
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Polska–USA opóźnienie — LOT i €600 za transatlantyk
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
                  <h2 className="text-xl font-bold mb-2">Kluczowe informacje: Polska–USA</h2>
                  <div className="space-y-2 text-blue-50">
                    <p><strong>Dystans:</strong> 6,500–7,100 km (zależy od miasta)</p>
                    <p><strong>Odszkodowanie:</strong> <span className="text-2xl font-bold">600 €</span> (maksymalna kwota!)</p>
                    <p><strong>Przewoźnik:</strong> LOT Polish Airlines (monopol faktyczny)</p>
                    <p><strong>✨ Najwyższe odszkodowanie</strong> w systemie WE 261/2004</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Twój lot LOT do USA ma 3+ godziny opóźnienia?</strong> Przysługuje Ci <strong>maksymalne odszkodowanie 600 €</strong> — najwyższa kwota w rozporządzeniu WE 261/2004. To dotyczy wszystkich lotów transatlantyckich z Polski (Nowy Jork, Chicago, Newark, Toronto, Los Angeles).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Najpopularniejsze trasy LOT Polska–USA (i ich problemy)
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                🛫 Top 5 tras LOT do Ameryki Północnej:
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-slate-900">1. Warszawa–Nowy Jork JFK (LO003/LO004) — 6,850 km</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 18% | <strong>Odszkodowanie:</strong> 600 €<br />
                    Najważniejsza trasa LOT — 350,000+ pasażerów rocznie. Główne problemy: slot delays JFK, usterki Dreamlinera.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-slate-900">2. Warszawa–Chicago O&apos;Hare (LO005/LO006) — 7,070 km</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 22% | <strong>Odszkodowanie:</strong> 600 €<br />
                    Najdłuższa trasa LOT z Europy. Zimowe burze śnieżne w Chicago → opóźnienia 4–6h.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-slate-900">3. Warszawa–Newark EWR (LO027/LO028) — 6,850 km</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 16% | <strong>Odszkodowanie:</strong> 600 €<br />
                    Alternatywa dla JFK — mniej przeciążone lotnisko, lepsze statystyki.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-slate-900">4. Warszawa–Toronto YYZ (LO045/LO046) — 6,780 km</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 19% | <strong>Odszkodowanie:</strong> 600 €<br />
                    Trasa do Kanady — obowiązuje WE 261 (lot z UE). Zimowe burze śnieżne.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-slate-900">5. Warszawa–Los Angeles LAX (sezonowo) — 9,300 km</p>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Delay rate:</strong> 25% | <strong>Odszkodowanie:</strong> 600 €<br />
                    Najdłuższy lot LOT — 12–13h. Częste usterki techniczne (długość lotu).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Dlaczego loty transatlantyckie LOT mają częste opóźnienia?
                  </p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• <strong>Slot congestion w USA</strong> — JFK/Chicago mają opóźnienia 30–60 min w godzinach szczytu</li>
                    <li>• <strong>Usterki techniczne Dreamliner</strong> — długie loty eksponują problemy elektroniki pokładowej</li>
                    <li>• <strong>Zimowe burze śnieżne</strong> — Chicago/Toronto zamknięte lotniska grudzień–marzec</li>
                    <li>• <strong>Opóźnienia rotacyjne</strong> — samolot: WAW → JFK → WAW → TLV → kaskada opóźnień</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Ile odszkodowania za opóźniony lot Polska–USA?
            </h2>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
              <table className="w-full">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Trasa</th>
                    <th className="px-6 py-4 text-left">Dystans</th>
                    <th className="px-6 py-4 text-left">Odszkodowanie</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50 bg-green-50">
                    <td className="px-6 py-4">
                      <strong>Wszystkie trasy Polska–USA</strong><br />
                      <span className="text-sm text-slate-600">(JFK, Newark, Chicago, LAX, Toronto)</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold">&gt;3,500 km</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-3xl font-bold text-green-600">600 €</span>
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
                    ✅ Zasada dla lotów transatlantyckich:
                  </p>
                  <p className="text-slate-700">
                    <strong>100% lotów Polska–USA/Kanada</strong> przekracza 3,500 km, więc odszkodowanie wynosi zawsze <strong>maksymalne 600 €</strong> przy opóźnieniu ≥3h. 
                    To najwyższa kwota w rozporządzeniu WE 261/2004 — bez wyjątków.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              Typowe ODMOWY LOT za loty transatlantyckie (i jak je zakwestionować)
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Top 4 bezpodstawne ODMOWY LOT na trasach do USA:
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #1: &quot;Burza śnieżna w Chicago — force majeure&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Tylko <strong>nieoczekiwane ekstremalne zjawiska pogodowe</strong> (ogłoszone &lt;24h przed lotem) są nadzwyczajną okolicznością.
                  </p>
                  <p className="text-sm text-slate-600">
                    Zimowe burze śnieżne w Chicago <strong>zdarzają się co roku grudzień–marzec</strong>. LOT MUSI uwzględnić to w planowaniu. Żądaj raportu meteorologicznego + potwierdzenia zamknięcia lotniska.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #2: &quot;Slot delay JFK — poza naszą kontrolą&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Przeciążenie lotnisk w USA (JFK, O&apos;Hare) to <strong>przewidywalne zjawisko sezonowe</strong> — nie zwalnia linii z odpowiedzialności.
                  </p>
                  <p className="text-sm text-slate-600">
                    LOT lata do JFK <strong>codziennie od dekad</strong> — zna slot delays 30–60 min w godzinach szczytu. MUSI uwzględnić to w harmonogramie.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #3: &quot;Usterka techniczna Dreamliner — ukryty defekt&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Tylko <strong>ukryte defekty produkcyjne</strong> (np. pęknięcie turbiny niewidoczne przy kontroli) są nadzwyczajną okolicznością.
                  </p>
                  <p className="text-sm text-slate-600">
                    Zwykłe usterki (elektronika, hydraulika) = <strong>brak konserwacji</strong> = odpowiedzialność LOT. Żądaj raportu technicznego potwierdzającego &quot;ukryty defekt&quot;.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #4: &quot;Opóźnienie rotacyjne — samolot wrócił spóźniony z JFK&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Tight scheduling (samolot: WAW → JFK → WAW → TLV) to <strong>ryzyko biznesowe LOT</strong>, nie nadzwyczajna okoliczność.
                  </p>
                  <p className="text-sm text-slate-600">
                    Linia <strong>MUSI utrzymać rezerwę czasową</strong> między lotami — jeśli planuje tylko 2h na powrót + tankowanie + czyszczenie, to jej problem.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ✅ Jak zakwestionować odmowę LOT?
                  </p>
                  <ol className="space-y-2 text-slate-700">
                    <li>1. <strong>Wyślij powtórną reklamację</strong> — wzmiankuj <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:underline">orzecznictwo TSUE</Link> (C-549/07 dla usterek)</li>
                    <li>2. <strong>Żądaj dowodów</strong> — raport techniczny, dokumentacja pogody, potwierdzenie zamknięcia lotniska</li>
                    <li>3. <strong>Skorzystaj z ClaimWinger.com</strong> — mają prawników specjalizujących się w sprawach LOT transatlantyk</li>
                    <li>4. <strong>Złóż skargę do <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 hover:underline">Rzecznika Praw Pasażera</Link></strong> (bezpłatnie) lub pozew w sądzie</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak złożyć reklamację za opóźniony lot LOT do USA?
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
                      Liczy się czas <strong>przybycia do USA</strong> (otwarcie drzwi samolotu), nie odlotu z Warszawy. Użyj FlightRadar24 lub FlightAware.
                    </p>
                    <p className="text-sm text-slate-600">
                      Przykład: lot wyleciał 1h później, ale przybył 3h 20 min po pierwotnym czasie → <strong>masz prawo do 600 €</strong>.
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
                      <li>✓ Screenshot FlightRadar24 (dowód dokładnego czasu przybycia)</li>
                      <li>✓ E-mail od LOT (jeśli informował o opóźnieniu)</li>
                      <li>✓ Zdjęcie tablicy odlotów w JFK/Chicago (jeśli masz)</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Złóż reklamację do LOT Polish Airlines</h3>
                    <p className="text-slate-700 mb-2">
                      <strong>E-mail:</strong> claim@lot.pl<br />
                      <strong>Formularz online:</strong> www.lot.com/pl/pl/kontakt/formularz-reklamacyjny
                    </p>
                    <p className="text-sm text-slate-600">
                      Podaj: numer lotu (LO003/LO005), datę, dokładny czas opóźnienia, żądanie 600 € na podstawie WE 261/2004.
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
                      LOT odpowiada w ciągu 30–60 dni. Jeśli:
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• <strong>Akceptuje</strong> → wypłata 600 € w ciągu 7–14 dni</li>
                      <li>• <strong>Odmawia</strong> → wyślij powtórną reklamację lub użyj ClaimWinger.com</li>
                      <li>• <strong>Ignoruje</strong> → złóż skargę do Rzecznika Praw Pasażera (bezpłatnie)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">🚀 ClaimWinger — eksperci od lotów LOT do USA</h3>
                  <p className="text-blue-50 mb-4">
                    LOT często odrzuca reklamacje za loty transatlantyckie, powołując się na &quot;pogodę&quot; lub &quot;usterki techniczne&quot;. ClaimWinger ma success rate 82% dzięki:
                  </p>
                  <ul className="space-y-2 text-blue-50 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Prawników znających specyfikę tras transatlantyckich
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Dostęp do raportów meteorologicznych USA (National Weather Service)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Prowizja tylko od wygranej (450 € netto po prowizji 25% + VAT)
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Zero ryzyka — nie wygramy = nie płacisz
                    </li>
                  </ul>
                  <a
                    href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-usa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                  >
                    Sprawdź odszkodowanie 600 € teraz →
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
                  Czy zimowa burza śnieżna w Chicago to nadzwyczajna okoliczność?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE zawsze.</strong> Rozróżnienie:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Sezonowe burze śnieżne</strong> (grudzień–marzec, przewidywalne) — LOT MUSI uwzględnić to w planowaniu → <strong>JEST odpowiedzialność</strong></li>
                    <li><strong>Ekstremalna burza</strong> (nieoczekiwana, zamknięcie lotniska &lt;24h przed lotem) — może być nadzwyczajna okoliczność → <strong>BRAK odszkodowania</strong></li>
                  </ul>
                  <p className="mt-2">
                    Żądaj dowodu <strong>czasu zamknięcia lotniska</strong> — LOT musi przedstawić oficjalny NOTAM (Notice to Airmen) + raport National Weather Service.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy lot do Kanady (Toronto) ma prawo do odszkodowania 600 €?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>TAK!</strong> Rozporządzenie WE 261/2004 obowiązuje <strong>wszystkie loty z UE</strong> — niezależnie od kraju docelowego (USA, Kanada, Azja, Australia).
                  </p>
                  <p className="mt-2">
                    Warszawa–Toronto (6,780 km) &gt; 3,500 km → odszkodowanie <strong>600 €</strong> przy opóźnieniu ≥3h.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy slot delay w JFK zwalnia LOT z odpowiedzialności?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Orzecznictwo TSUE (C-294/10) jasno stwierdza: <strong>sezonowe przeciążenie lotnisk to przewidywalne zjawisko</strong>, za które linia ponosi odpowiedzialność.
                  </p>
                  <p className="mt-2">
                    JFK ma slot delays 30–60 min w godzinach szczytu <strong>od dekad</strong> — LOT MUSI uwzględnić to w planowaniu slotów. Jeśli nie, płaci odszkodowanie 600 €.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Jak długo mam czas na złożenie reklamacji za lot do USA?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    W Polsce: <strong>6 lat</strong> od daty lotu (przedawnienie roszczeń cywilnych). Jednak praktycznie:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Im szybciej, tym lepiej</strong> — LOT łatwiej ignoruje stare roszczenia</li>
                    <li><strong>Dowody</strong> (boarding pass, potwierdzenie) mogą się zatrzeć</li>
                    <li><strong>Rekomendacja:</strong> składaj reklamację w ciągu 3 miesięcy od lotu</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy usterka Dreamlinera to zawsze nadzwyczajna okoliczność?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Tylko <strong>ukryte defekty produkcyjne</strong> (niewidoczne przy rutynowej kontroli technicznej) są nadzwyczajną okolicznością.
                  </p>
                  <p className="mt-2">
                    Zwykłe usterki (elektronika pokładowa, hydraulika, awaria kabiny) = <strong>brak konserwacji</strong> = odpowiedzialność LOT. 
                    Żądaj raportu technicznego potwierdzającego &quot;ukryty defekt&quot; + potwierdzenia Boeing.
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
                <p className="text-sm text-slate-600">Sprawdź dokładne kwoty odszkodowań — 250 €, 400 € czy 600 €.</p>
              </Link>
              <Link href="/blog/lot-odmowil-odszkodowania" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">LOT odmówił odszkodowania — co dalej?</h3>
                <p className="text-sm text-slate-600">Jak zakwestionować bezpodstawną odmowę LOT krok po kroku.</p>
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
            <h2 className="text-3xl font-bold mb-4">🎯 Gotowy złożyć reklamację o 600 €?</h2>
            <p className="text-xl mb-6 text-blue-50">
              Nie czekaj miesiącami na odpowiedź od LOT. ClaimWinger załatwi wszystko za Ciebie — szybko i bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-usa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-center hover:bg-blue-50 transition-colors shadow-lg"
              >
                Sprawdź swoje odszkodowanie 600 € →
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