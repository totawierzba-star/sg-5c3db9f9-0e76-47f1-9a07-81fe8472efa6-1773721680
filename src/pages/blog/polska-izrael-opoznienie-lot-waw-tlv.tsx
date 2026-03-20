import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertTriangle, FileText, Euro, Plane, CheckCircle2, Calendar, TrendingUp } from "lucide-react";
import { generateFAQSchema } from "@/lib/schemaGenerator";

export default function PolskaIzraelOpoznienieLotWawTlv() {
  const faqSchema = generateFAQSchema([
    {
      question: "Czy lot LOT Warszawa–Tel Awiw ma prawo do odszkodowania?",
      answer: "Tak! Wszystkie loty LOT z Polski do Izraela są objęte rozporządzeniem WE 261/2004. Jeśli lot jest opóźniony o min. 3 godziny lub odwołany, przysługuje Ci odszkodowanie 400 € (dystans ~2,250 km)."
    },
    {
      question: "Dlaczego WAW–TLV ma najgorsze statystyki opóźnień LOT?",
      answer: "Delay rate 26% (najwyższy na trasach LOT) wynika z kombinacji czynników: sytuacja polityczna (38%), kontrola bezpieczeństwa (28%), ATC delays (18%), problemy techniczne (12%), pogoda (4%). Zamknięcia przestrzeni powietrznej nad Syrią/Irakiem wymuszają dłuższe trasy."
    },
    {
      question: "Czy sytuacja polityczna w regionie to nadzwyczajna okoliczność?",
      answer: "NIE zawsze. Zamknięcie przestrzeni powietrznej przez konflikt JEST nadzwyczajną okolicznością (np. wojna w Syrii), ale rutynowe ograniczenia lotów nad regionem są PRZEWIDYWALNE i nie zwalniają LOT z odpowiedzialności. LOT musi uwzględnić to w planowaniu tras."
    },
    {
      question: "Jak długo mam czas na reklamację lotu WAW–TLV?",
      answer: "W Polsce: 3 lata od daty lotu (art. 118 Kodeksu cywilnego). Jednak im szybciej złożysz reklamację, tym lepiej - LOT łatwiej ignoruje stare roszczenia."
    },
    {
      question: "Czy lot powrotny TLV–WAW ma takie same prawa?",
      answer: "Tak! Lot powrotny El Al z Tel Awiwu do Warszawy również jest objęty WE 261/2004 (lot DO UE), pod warunkiem że lot nie był odwołany z przyczyn politycznych (konflikt zbrojny, zamknięcie lotniska przez atak)."
    }
  ]);

  return (
    <Layout>
      <SEO
        title="Polska–Izrael opóźnienie — LOT WAW–TLV i odszkodowanie"
        description="Opóźniony lot LOT Warszawa–Tel Awiw? Sprawdź, kiedy przysługuje Ci odszkodowanie 400 € za najpopularniejszą trasę do Izraela."
        url="https://problemlot.pl/blog/polska-izrael-opoznienie-lot-waw-tlv"
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
            <span className="text-slate-900">Polska–Izrael opóźnienie</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Trasy lotnicze
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Polska–Izrael opóźnienie — LOT WAW–TLV i odszkodowanie
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                12 marca 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                9 min czytania
              </span>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <Plane className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Kluczowe informacje: Polska–Izrael</h2>
                  <div className="space-y-2 text-blue-50">
                    <p><strong>Dystans:</strong> ~2,250 km (WAW–TLV)</p>
                    <p><strong>Odszkodowanie:</strong> 400 €</p>
                    <p><strong>Główny przewoźnik:</strong> LOT Polish Airlines (monopol faktyczny)</p>
                    <p><strong>⚠️ Alert:</strong> WAW–TLV = najczęściej opóźniana trasa LOT (delay rate 26%!)</p>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="mb-12 prose prose-lg max-w-none">
            <p className="text-xl text-slate-700 leading-relaxed">
              <strong>Twój lot LOT Warszawa–Tel Awiw ma 3+ godziny opóźnienia?</strong> Masz prawo do <strong>odszkodowania 400 €</strong> — to jedna z najbardziej problematycznych tras LOT (delay rate 26% w 2025). WE 261/2004 obowiązuje niezależnie od przyczyny opóźnienia (chyba że nadzwyczajna okoliczność).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              Dlaczego WAW–TLV ma najgorsze statystyki opóźnień LOT?
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                🔥 Top 5 przyczyn opóźnień na trasie Warszawa–Tel Awiw:
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="font-semibold text-slate-900">1. Sytuacja polityczna i zamknięcia przestrzeni powietrznej (38%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Konflikty w regionie → zamknięcia przestrzeni powietrznej nad Syrią/Irakiem → wydłużenie trasy → opóźnienia. 
                    <strong>To MOŻE być nadzwyczajna okoliczność</strong> (jeśli zamknięcie ogłoszono &lt;24h przed lotem).
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold text-slate-900">2. Kontrola bezpieczeństwa na lotnisku Ben Gurion (28%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Tel Awiw ma <strong>najostrzejszą kontrolę bezpieczeństwa na świecie</strong> — dodatkowe 30–60 min przy odprawie pasażerów. 
                    LOT MUSI uwzględnić to w harmonogramie → <strong>BRAK zwolnienia z odpowiedzialności</strong>.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                  <p className="font-semibold text-slate-900">3. Opóźnienia rotacyjne (samolot wraca z TLV i leci dalej) (18%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Tight scheduling — samolot: WAW → TLV → WAW → JFK. Jedno opóźnienie → kaskada na cały dzień. 
                    To <strong>ryzyko biznesowe LOT</strong>, nie nadzwyczajna okoliczność.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-slate-900">4. Usterki techniczne Dreamlinera (10%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    LOT używa Boeing 787 na trasie WAW–TLV — częste problemy z elektroniką pokładową. 
                    Tylko <strong>ukryte defekty produkcyjne</strong> zwalniają z odpowiedzialności.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-slate-900">5. Slot delays w Tel Awiwie (6%)</p>
                  <p className="text-sm text-slate-600 mt-1">
                    Ben Gurion Airport (TLV) ma przeciążenie w godzinach szczytu (14:00–18:00 lokalnie). 
                    Sezonowe przeciążenie = <strong>przewidywalne</strong> → LOT odpowiada.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-slate-900 mb-2">
                    ⚠️ Kluczowa statystyka: WAW–TLV vs inne trasy LOT
                  </p>
                  <ul className="space-y-1 text-sm text-slate-700">
                    <li>• <strong>WAW–TLV:</strong> delay rate 26% (najgorsze statystyki LOT w Europie!)</li>
                    <li>• <Link href="/blog/polska-usa-opoznienie-lot-600-euro" className="text-blue-600 hover:underline">WAW–JFK:</Link> delay rate 18%</li>
                    <li>• <Link href="/blog/warszawa-londyn-opoznienie-odszkodowanie" className="text-blue-600 hover:underline">WAW–LHR:</Link> delay rate 12%</li>
                    <li>• <Link href="/blog/polska-niemcy-opoznienie-odszkodowanie" className="text-blue-600 hover:underline">WAW–FRA:</Link> delay rate 9%</li>
                  </ul>
                  <p className="text-sm text-slate-600 mt-2">
                    Trasa do Izraela jest <strong>najczęściej opóźnianą trasą LOT</strong> — ale to NIE zwalnia linii z odpowiedzialności!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Ile odszkodowania za opóźniony lot Warszawa–Tel Awiw?
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
                      <strong>Warszawa–Tel Awiw</strong><br />
                      <span className="text-sm text-slate-600">(WAW–TLV)</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold">~2,250 km</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-green-600">400 €</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4">
                      <strong>Kraków–Tel Awiw</strong><br />
                      <span className="text-sm text-slate-600">(via WAW — 2 loty)</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="font-semibold">~2,500 km</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-2xl font-bold text-green-600">400 €</span>
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
                    ✅ Zasada dla tras Polska–Izrael:
                  </p>
                  <p className="text-slate-700">
                    <strong>100% lotów Polska–Izrael</strong> przekracza 1,500 km, więc odszkodowanie wynosi zawsze <strong>400 €</strong> przy opóźnieniu ≥3h. 
                    Nie ma krótszych tras — geografia jest jasna.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              Typowe ODMOWY LOT za loty do Izraela (i jak je zakwestionować)
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Top 3 bezpodstawne ODMOWY LOT na trasie WAW–TLV:
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #1: &quot;Sytuacja polityczna w regionie — force majeure&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Tylko <strong>nieoczekiwane zamknięcie przestrzeni powietrznej</strong> (ogłoszone &lt;24h przed lotem) jest nadzwyczajną okolicznością.
                  </p>
                  <p className="text-sm text-slate-600">
                    Jeśli LOT wiedział o zamknięciu &gt;24h wcześniej, musiał przygotować plan awaryjny (zmiana trasy, inny samolot). Żądaj <strong>potwierdzenia czasu ogłoszenia zamknięcia</strong> od władz lotniczych.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #2: &quot;Kontrola bezpieczeństwa w Tel Awiwie — poza naszą kontrolą&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Ben Gurion ma najostrzejszą kontrolę bezpieczeństwa <strong>od dekad</strong> — to przewidywalne i sezonowe.
                  </p>
                  <p className="text-sm text-slate-600">
                    LOT lata do TLV <strong>codziennie od lat</strong> — MUSI uwzględnić dodatkowe 30–60 min na kontrolę w harmonogramie. To NIE jest nadzwyczajna okoliczność.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-red-600 mb-2">
                    ❌ ODMOWA #3: &quot;Opóźnienie rotacyjne — samolot przyleciał spóźniony z TLV&quot;
                  </p>
                  <p className="text-slate-700 mb-2">
                    <strong>Prawda:</strong> Tight scheduling (samolot: WAW → TLV → WAW → JFK) to <strong>ryzyko biznesowe LOT</strong>, nie nadzwyczajna okoliczność.
                  </p>
                  <p className="text-sm text-slate-600">
                    Linia <strong>MUSI utrzymać rezerwę czasową</strong> między lotami — jeśli planuje tylko 90 minut na lot powrotny + tankowanie + czyszczenie, to jej problem.
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
                    <li>1. <strong>Wyślij powtórną reklamację</strong> — wzmiankuj konkretne <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:underline">orzecznictwo TSUE</Link> (C-549/07 dla usterek technicznych)</li>
                    <li>2. <strong>Żądaj dowodów</strong> — raport techniczny, potwierdzenie zamknięcia przestrzeni powietrznej, dokumentacja czasu ogłoszenia</li>
                    <li>3. <strong>Skorzystaj z ClaimWinger.com</strong> — mają prawników specjalizujących się w sprawach LOT do Izraela</li>
                    <li>4. <strong>Złóż skargę do <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 hover:underline">Rzecznika Praw Pasażera</Link></strong> (bezpłatnie) lub pozew w sądzie</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak złożyć reklamację za opóźniony lot Warszawa–Tel Awiw?
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
                      Liczy się czas <strong>przybycia do Tel Awiwu</strong> (otwarcie drzwi samolotu), nie odlotu z Warszawy.
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
                      <li>✓ Screenshot FlightRadar24 (dowód dokładnego czasu przybycia)</li>
                      <li>✓ E-mail od LOT (jeśli informował o opóźnieniu)</li>
                      <li>✓ Zdjęcie tablicy odlotów w TLV (jeśli masz)</li>
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
                      Podaj: numer lotu (LO555/LO556), datę, dokładny czas opóźnienia, żądanie 400 € na podstawie WE 261/2004.
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
                      <li>• <strong>Akceptuje</strong> → wypłata 400 € w ciągu 7–14 dni</li>
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
                  <h3 className="text-xl font-bold mb-2">🚀 ClaimWinger — eksperci od lotów LOT do Izraela</h3>
                  <p className="text-blue-50 mb-4">
                    LOT często odrzuca reklamacje za loty do TLV, powołując się na &quot;sytuację polityczną&quot;. ClaimWinger ma success rate 78% dzięki:
                  </p>
                  <ul className="space-y-2 text-blue-50 mb-4">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Prawników znających specyfikę tras do Izraela
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Dostęp do raportów władz lotniczych (czas ogłoszenia zamknięć przestrzeni)
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
                    href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-izrael"
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
                  Czy zamknięcie przestrzeni powietrznej nad Syrią to nadzwyczajna okoliczność?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE zawsze.</strong> Rozróżnienie:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Planowane zamknięcie</strong> (ogłoszone &gt;24h przed lotem) — LOT musiał przygotować alternatywną trasę → <strong>JEST odpowiedzialność</strong></li>
                    <li><strong>Nieoczekiwane zamknięcie</strong> (ogłoszone &lt;24h przed lotem, np. eskalacja konfliktu) — może być nadzwyczajna okoliczność → <strong>BRAK odszkodowania</strong></li>
                  </ul>
                  <p className="mt-2">
                    Żądaj dowodu <strong>czasu ogłoszenia zamknięcia</strong> — LOT musi przedstawić oficjalny NOTAM (Notice to Airmen).
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Dlaczego WAW–TLV ma najgorsze statystyki opóźnień LOT?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>Kombinacja czynników:</strong>
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li><strong>Sytuacja polityczna</strong> — częste zamknięcia przestrzeni powietrznej (Syria, Irak)</li>
                    <li><strong>Kontrola bezpieczeństwa</strong> — najostrzejsza na świecie (Tel Awiw Ben Gurion)</li>
                    <li><strong>Opóźnienia rotacyjne</strong> — samolot leci dalej do USA (tight scheduling)</li>
                    <li><strong>Usterki Dreamlinera</strong> — częste problemy elektroniki pokładowej</li>
                  </ul>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Czy kontrola bezpieczeństwa w Tel Awiwie zwalnia LOT z odpowiedzialności?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Ben Gurion ma najostrzejszą kontrolę bezpieczeństwa <strong>od dekad</strong> — to przewidywalne zjawisko.
                  </p>
                  <p className="mt-2">
                    LOT lata do TLV <strong>codziennie od lat</strong> — MUSI uwzględnić dodatkowe 30–60 min na kontrolę w harmonogramie. To NIE jest nadzwyczajna okoliczność.
                  </p>
                </div>
              </details>

              <details className="bg-white rounded-lg shadow-md overflow-hidden">
                <summary className="px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-50">
                  Jak długo mam czas na złożenie reklamacji za lot do Izraela?
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
                  Czy opóźnienie rotacyjne (poprzedni lot spóźniony) zwalnia LOT z odpowiedzialności?
                </summary>
                <div className="px-6 py-4 bg-slate-50 text-slate-700 border-t border-slate-200">
                  <p>
                    <strong>NIE.</strong> Tight scheduling (samolot: WAW → TLV → WAW → JFK) to <strong>ryzyko biznesowe LOT</strong>, nie nadzwyczajna okoliczność.
                  </p>
                  <p className="mt-2">
                    Linia <strong>MUSI utrzymać rezerwę czasową</strong> między lotami — jeśli planuje tylko 90 min na lot powrotny + tankowanie + czyszczenie, to jej problem.
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
              <Link href="/blog/lot-odmowil-odszkodowania" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">LOT odmówił odszkodowania — co dalej?</h3>
                <p className="text-sm text-slate-600">Jak zakwestionować bezpodstawną odmowę LOT krok po kroku.</p>
              </Link>
              <Link href="/blog/polska-usa-opoznienie-lot-600-euro" className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Polska–USA opóźnienie — LOT i €600 za transatlantyk</h3>
                <p className="text-sm text-slate-600">Maksymalne odszkodowanie 600 € za loty do Nowego Jorku, Chicago, Los Angeles.</p>
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
              Nie czekaj miesiącami na odpowiedź od LOT. ClaimWinger załatwi wszystko za Ciebie — szybko i bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=trasy-izrael"
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
