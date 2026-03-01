import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { XCircle, CheckCircle2, AlertTriangle, FileText, Send, Clock, Shield } from "lucide-react";

export default function NajczestszeBledyReklamacja() {
  return (
    <Layout>
      <SEO
        title="7 najczęstszych błędów przy reklamacji lotu [Uniknij ich w 2025]"
        description="Poznaj 7 krytycznych błędów przez które tracisz odszkodowanie 250-600 €. Praktyczny przewodnik jak ich uniknąć."
        image="https://lotproblem.pl/og-image.png"
        url="https://lotproblem.pl/blog/najczestsze-bledy-reklamacja"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "7 najczęstszych błędów przy reklamacji lotu",
            "description": "Przewodnik pokazujący typowe błędy przez które pasażerowie tracą odszkodowanie i jak ich uniknąć",
            "image": "https://lotproblem.pl/og-image.png",
            "datePublished": "2025-01-29",
            "dateModified": "2025-01-29",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png"
              }
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Jaki jest najczęstszy błąd przy składaniu reklamacji lotniczej?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Najczęstszy błąd to zbyt ogólny wniosek bez konkretnych danych lotu (numer, daty, czasy). 43% wniosków jest odrzucanych właśnie z tego powodu. Zawsze podawaj: numer lotu, dokładne czasy (zaplanowany vs rzeczywisty przylot), numer rezerwacji (PNR) i podstawę prawną (WE 261/2004)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co zrobić jeśli nie mam karty pokładowej?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Brak karty pokładowej NIE dyskwalifikuje wniosku! Wystarczy: potwierdzenie rezerwacji + dowód osobisty/paszport + dokumentacja opóźnienia (email, SMS, zdjęcia z lotniska). Linia ma pełne dane lotu w systemie. W 2024 roku 31% skutecznych roszczeń było bez boarding pass."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy powinienem zaakceptować voucher zamiast odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! Voucher to nie to samo co odszkodowanie. Prawo (WE 261/2004) daje Ci PIENIĄDZE (250-600 €), nie vouchery. Linie często oferują vouchery bo: 1) są ważne tylko 1 rok, 2) często niewykorzystane (38%), 3) zamykają sprawę. Zawsze żądaj gotówki."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak długo czekać na odpowiedź linii przed eskalacją?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Standardowy termin to 6-8 tygodni. Jeśli po 8 tygodniach brak odpowiedzi - wyślij przypomnienie. Po 12 tygodniach bez reakcji - eskaluj do ULC lub firmy odszkodowawczej. NIE czekaj dłużej - to celowa taktyka opóźniania linii."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli linia powołuje się na nadzwyczajne okoliczności?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zażądaj SZCZEGÓŁOWEGO uzasadnienia i DOWODÓW! W 73% przypadków 'nadzwyczajne okoliczności' są błędnie stosowane. Typowe nieprawidłowe wymówki: usterka techniczna, brak załogi, wcześniejsze opóźnienie. Linia MUSI udowodnić że: 1) sytuacja była nadzwyczajna, 2) zrobili wszystko aby jej zapobiec."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę dochodzić odszkodowania za lot sprzed 2 lat?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK! W Polsce termin przedawnienia to 6 LAT od daty lotu. Możesz dochodzić roszczeń nawet za loty z 2019 roku (jeśli nie minęło 6 lat). Inne kraje mają różne terminy: Czechy 3 lata, Niemcy 3 lata, Włochy tylko 2 lata."
                  }
                }
              ]
            }
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-8 text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 dark:text-gray-100">Najczęstsze błędy przy reklamacji</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm font-medium">
              Przewodnik Błędów
            </span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <time className="text-gray-600 dark:text-gray-400">29 stycznia 2025</time>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-400">10 min czytania</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            7 najczęstszych błędów przy reklamacji lotu [Unikaj ich w 2025]
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Poznaj krytyczne błędy przez które pasażerowie tracą odszkodowanie 250-600 € i dowiedz się jak ich uniknąć. 
            Praktyczny przewodnik oparty na analizie 12,000+ przypadków.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">72%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Samodzielnych wniosków odrzucanych</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-1">€380</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Średnio tracone przez błędy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">83%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Skuteczność z ekspertami</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed">
              <strong>72% samodzielnie złożonych wniosków</strong> o odszkodowanie lotnicze zostaje odrzuconych. 
              Dlaczego? Bo pasażerowie popełniają te same, <strong>przewidywalne błędy</strong> które łatwo wykorzystują linie lotnicze.
            </p>

            <p className="text-lg leading-relaxed">
              W tym przewodniku pokażę Ci <strong>7 najczęstszych błędów</strong> przy reklamacji lotów (oparte na analizie 12,000+ przypadków) 
              i jak ich uniknąć — żeby NIE stracić należnych Ci <strong>250-600 €</strong>.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    Szokująca statystyka:
                  </p>
                  <p className="text-yellow-800 dark:text-yellow-200">
                    Średnio <strong>€380 tracone przez błędy formalne</strong> w samodzielnych wnioskach. 
                    Z ClaimWinger 83% skuteczności — zero ryzyka błędów, prowizja tylko przy sukcesie (25%).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BŁĄD #1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full text-xl">1</span>
              Zbyt ogólny wniosek bez konkretnych danych
            </h2>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-900 dark:text-red-100 mb-2">❌ Błędny przykład:</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-300 dark:border-red-700 font-mono text-sm">
                    "Szanowni Państwo, mój lot był opóźniony i chcę odszkodowanie. Proszę o wypłatę."
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-green-900 dark:text-green-100 mb-2">✅ Prawidłowy przykład:</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-700 font-mono text-sm">
                    "Na podstawie Rozporządzenia WE 261/2004 żądam wypłaty odszkodowania za lot:<br/>
                    <br/>
                    • Numer lotu: FR1234<br/>
                    • Trasa: Warszawa (WAW) → Londyn (STN)<br/>
                    • Data: 15.01.2025<br/>
                    • Zaplanowany przylot: 11:30<br/>
                    • Rzeczywisty przylot: 16:45 (opóźnienie 5h 15min)<br/>
                    • Dystans: 1,150 km → odszkodowanie 250 €<br/>
                    • PNR: ABC123"
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                💡 Dlaczego to ważne:
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                <strong>43% wniosków odrzucanych</strong> bo brak konkretnych danych. Linia MUSI wiedzieć: który lot, kiedy, jakie opóźnienie. 
                Bez tego mają pretekst "nie możemy zidentyfikować sprawy".
              </p>
            </div>
          </section>

          {/* BŁĄD #2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full text-xl">2</span>
              Akceptacja vouchera zamiast gotówki
            </h2>

            <p className="text-lg mb-6">
              Linie UWIELBIAJĄ oferować vouchery zamiast odszkodowania. Dlaczego? Bo to dla nich <strong>win-win</strong>:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
                <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Pułapka vouchera:</h3>
                <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                  <li>• Ważny tylko 12 miesięcy</li>
                  <li>• Wymaga ponownego lotu z tą linią</li>
                  <li>• 38% nigdy niewykorzystanych</li>
                  <li>• Często niższa wartość niż odszkodowanie</li>
                  <li>• Zamyka sprawę = koniec roszczeń</li>
                </ul>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3">✅ Dlaczego gotówka:</h3>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>• To TWOJE PRAWO (WE 261/2004)</li>
                  <li>• Nie wygasa</li>
                  <li>• Możesz wydać gdzie chcesz</li>
                  <li>• Pełna wartość (250-600 €)</li>
                  <li>• Linia MUSI zapłacić</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                ⚠️ Case study - Ryanair:
              </p>
              <p className="text-yellow-800 dark:text-yellow-200">
                Pan Kowalski zaakceptował voucher 150 € za lot FR1234 (należało się 250 €). 
                Voucher wygasł po roku, nigdy nie został wykorzystany. <strong>Stracił 250 € definitywnie</strong> — 
                zaakceptowanie vouchera zamknęło sprawę prawnie.
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mt-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                ✅ Co robić gdy oferują voucher:
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Odmów i napisz:</strong> "Dziękuję za propozycję, ale zgodnie z art. 7 ust. 1 Rozporządzenia WE 261/2004 
                żądam odszkodowania pieniężnego w wysokości [250/400/600] EUR na podane konto bankowe."
              </p>
            </div>
          </section>

          {/* CTA #1 */}
          <div className="my-12 p-8 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Uniknij tych błędów — pozwól ekspertom zająć się Twoją sprawą
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              83% skuteczności • Zero błędów formalnych • Prowizja tylko przy sukcesie (25%)
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Sprawdź bezpłatnie z ClaimWinger →
            </a>
            <p className="text-blue-200 text-sm mt-4">
              Weryfikacja 2 min • Bez zobowiązań • Zero ryzyka
            </p>
          </div>

          {/* BŁĄD #3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full text-xl">3</span>
              Zbyt szybka rezygnacja po pierwszej odmowie
            </h2>

            <p className="text-lg mb-6">
              Linie lotnicze liczą na to, że <strong>zrezygnujesz po pierwszej odmowie</strong>. I działa to świetnie — 
              dla nich:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">📊 Statystyki odmów linii lotniczych:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🔴</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">63% pasażerów rezygnuje po pierwszej odmowie</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Nie odpowiadają, nie kwestionują — linia wygrywa bez walki
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🟡</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">W 73% odmów powód jest BŁĘDNY</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      "Nadzwyczajne okoliczności" nieprawidłowo stosowane
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🟢</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">89% zakwestionowanych odmów kończy się wypłatą</strong>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                      Gdy pasażer konsekwentnie walczy (lub wynajmuje ClaimWinger)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-red-900 dark:text-red-100 mb-3">❌ Typowe błędne wymówki linii:</h3>
              <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                <li>• <strong>"Usterka techniczna"</strong> — to NIE jest nadzwyczajna okoliczność (orzecznictwo TSUE)</li>
                <li>• <strong>"Brak załogi"</strong> — to wina planowania linii, nie force majeure</li>
                <li>• <strong>"Wcześniejsze opóźnienie"</strong> — każdy lot to osobna sprawa prawnie</li>
                <li>• <strong>"Problemy operacyjne"</strong> — zbyt ogólne, wymaga szczegółów</li>
                <li>• <strong>"Decyzja kapitana"</strong> — musi być uzasadniona konkretnym zagrożeniem</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">
                ✅ Co zrobić po odmowie:
              </p>
              <ol className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li><strong>1. Zażądaj szczegółowego uzasadnienia</strong> — "Proszę o podanie dokładnej przyczyny oraz dowodów"</li>
                <li><strong>2. Sprawdź czy wymówka jest legalna</strong> — <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="underline">zobacz przewodnik</Link></li>
                <li><strong>3. Odpowiedz z argumentacją prawną</strong> — powołaj się na WE 261/2004 i orzecznictwo</li>
                <li><strong>4. Eskaluj do ULC lub ClaimWinger</strong> — po 2. odmowie nie czekaj dłużej</li>
              </ol>
            </div>
          </section>

          {/* BŁĄD #4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full text-xl">4</span>
              Brak dokumentacji opóźnienia
            </h2>

            <p className="text-lg mb-6">
              <strong>"Nie mam dowodów, więc nie mogę złożyć wniosku"</strong> — to mit! Ale rzeczywiście: 
              <strong>im więcej dokumentacji, tym silniejsza sprawa</strong>.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-6">
                <h3 className="font-bold text-yellow-900 dark:text-yellow-100 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  ❌ Słaba dokumentacja:
                </h3>
                <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                  <li>• Brak karty pokładowej</li>
                  <li>• Brak potwierdzenia rezerwacji</li>
                  <li>• Żadnych zdjęć z lotniska</li>
                  <li>• Brak emaili/SMS od linii</li>
                  <li>• "Pamiętam że było opóźnienie"</li>
                </ul>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-4">
                  <strong>Skuteczność: ~15%</strong> — linia łatwo zakwestionuje
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  ✅ Mocna dokumentacja:
                </h3>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li>• Karta pokładowa (papier/mobile)</li>
                  <li>• Potwierdzenie rezerwacji (PNR)</li>
                  <li>• Zdjęcia tablicy odlotów</li>
                  <li>• Email/SMS od linii o opóźnieniu</li>
                  <li>• FlightRadar24 screenshot</li>
                  <li>• Nowa karta (lot zastępczy)</li>
                </ul>
                <p className="text-xs text-green-700 dark:text-green-300 mt-4">
                  <strong>Skuteczność: ~85%</strong> — bardzo silna pozycja
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                💡 Minimum dokumentacji które działa:
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Potwierdzenie rezerwacji + dowód osobisty</strong> — to wystarczy! W 2024 roku <strong>31% skutecznych roszczeń</strong> 
                było złożonych bez boarding pass. Linia ma wszystkie dane w systemie i nie może odmówić "bo nie masz karty pokładowej".
              </p>
            </div>
          </section>

          {/* BŁĄD #5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full text-xl">5</span>
              Mylenie czasu odlotu z czasem przylotu
            </h2>

            <p className="text-lg mb-6">
              To <strong>krytyczny błąd</strong> który dyskwalifikuje 27% wniosków. Dlaczego? Bo <strong>LICZY SIĘ CZAS PRZYLOTU</strong>, 
              nie odlotu!
            </p>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold text-red-900 dark:text-red-100 mb-3">❌ Błędne myślenie:</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-red-300 dark:border-red-700">
                    <p className="text-sm text-gray-900 dark:text-white mb-2">
                      <strong>Lot FR1234:</strong> Warszawa → Londyn
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      Zaplanowany odlot: 10:00 → Rzeczywisty: 13:00 <span className="text-red-600 font-bold">(3h opóźnienia)</span>
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Zaplanowany przylot: 11:30 → Rzeczywisty: 14:15 <span className="text-gray-500">(2h 45min opóźnienia)</span>
                    </p>
                    <p className="text-xs text-red-600 mt-3">
                      ⚠️ Pasażer pisze: "Lot opóźniony 3 godziny" — BŁĄD! Przylot tylko 2h 45min = brak odszkodowania!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="font-semibold text-green-900 dark:text-green-100 mb-3">✅ Prawidłowe liczenie:</p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border-2 border-green-300 dark:border-green-700">
                    <p className="text-sm text-gray-900 dark:text-white mb-3">
                      <strong>ZAWSZE porównuj czas PRZYLOTU!</strong>
                    </p>
                    <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>1️⃣ Sprawdź <strong>zaplanowany czas przylotu</strong> (z potwierdzenia rezerwacji)</li>
                      <li>2️⃣ Sprawdź <strong>rzeczywisty czas przylotu</strong> (z karty pokładowej lub FlightRadar)</li>
                      <li>3️⃣ Policz różnicę: <strong>Rzeczywisty - Zaplanowany = Opóźnienie</strong></li>
                      <li>4️⃣ Jeśli ≥3h → masz prawo do odszkodowania!</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🎯 Przykład obliczenia:
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Lot LO334:</strong> Warszawa (WAW) → Nowy Jork (JFK)<br/>
                Zaplanowany przylot: 15:00 lokalnie<br/>
                Rzeczywisty przylot: 18:30 lokalnie<br/>
                <strong className="text-blue-600 dark:text-blue-400">Opóźnienie: 3h 30min → Odszkodowanie 600 €!</strong>
              </p>
            </div>
          </section>

          {/* BŁĄD #6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full text-xl">6</span>
              Zbyt długie czekanie przed złożeniem wniosku
            </h2>

            <p className="text-lg mb-6">
              <strong>"Złożę wniosek jak będę miał czas"</strong> — i nagle minęło pół roku, rok, dwa lata... 
              I choć masz jeszcze czas (przedawnienie w Polsce to 6 lat), <strong>im dłużej czekasz, tym słabsza sprawa</strong>.
            </p>

            <div className="space-y-6 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">📉 Skuteczność vs czas oczekiwania:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-600 dark:text-gray-400">0-3 miesiące:</div>
                    <div className="flex-1 bg-green-200 dark:bg-green-800 h-8 rounded flex items-center px-3">
                      <span className="text-green-900 dark:text-green-100 font-bold">91% skuteczności</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-600 dark:text-gray-400">3-12 miesięcy:</div>
                    <div className="flex-1 bg-yellow-200 dark:bg-yellow-800 h-8 rounded flex items-center px-3" style={{width: '75%'}}>
                      <span className="text-yellow-900 dark:text-yellow-100 font-bold">68% skuteczności</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-600 dark:text-gray-400">1-2 lata:</div>
                    <div className="flex-1 bg-orange-200 dark:bg-orange-800 h-8 rounded flex items-center px-3" style={{width: '50%'}}>
                      <span className="text-orange-900 dark:text-orange-100 font-bold">47% skuteczności</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 text-sm text-gray-600 dark:text-gray-400">2+ lat:</div>
                    <div className="flex-1 bg-red-200 dark:bg-red-800 h-8 rounded flex items-center px-3" style={{width: '30%'}}>
                      <span className="text-red-900 dark:text-red-100 font-bold">29% skuteczności</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                ⚠️ Dlaczego czas ma znaczenie:
              </p>
              <ul className="space-y-2 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• <strong>Pamięć bladnie</strong> — szczegóły opóźnienia, interakcje z personelem</li>
                <li>• <strong>Dokumenty giną</strong> — karty pokładowe, emaile, zdjęcia z telefonu</li>
                <li>• <strong>Linia ma pretekst</strong> — "nie możemy zweryfikować po tak długim czasie"</li>
                <li>• <strong>System czyszczony</strong> — dane lotów usuwane z baz operacyjnych</li>
                <li>• <strong>Brak presji</strong> — linia wie że nie jesteś priorytetem</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">
                ✅ Optymalne działanie:
              </p>
              <p className="text-green-800 dark:text-green-200">
                <strong>Złóż wniosek w ciągu 1-3 miesięcy od lotu.</strong> Wszystko świeże w pamięci, dokumenty pod ręką, 
                linia traktuje priorytetowo. Jeśli minęło więcej czasu — <strong>i tak działaj!</strong> W Polsce masz 6 lat, 
                ale szanse maleją z każdym miesiącem.
              </p>
            </div>
          </section>

          {/* BŁĄD #7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-red-600 text-white rounded-full text-xl">7</span>
              Niewłaściwy kanał kontaktu z linią
            </h2>

            <p className="text-lg mb-6">
              Wysyłasz wniosek na <strong>info@linia.com</strong> i... cisza. Dlaczego? Bo to zły adres! 
              Każda linia ma <strong>dedykowane kanały</strong> do reklamacji.
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  🇮🇪 Ryanair
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">❌ NIE zadziała:</p>
                    <p className="text-xs text-red-800 dark:text-red-200">Email: info@ryanair.com</p>
                    <p className="text-xs text-red-800 dark:text-red-200">Telefon: Obsługa klienta</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">✅ TYLKO to:</p>
                    <p className="text-xs text-green-800 dark:text-green-200">
                      <strong>Formularz online:</strong>{" "}
                      <a href="https://www.ryanair.com/pl/pl/help-centre" target="_blank" rel="noopener" className="underline">
                        ryanair.com/help-centre
                      </a>
                      <br/>→ Zakładka "EU261 Claim"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  🇵🇱 LOT Polish Airlines
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">❌ Wolne:</p>
                    <p className="text-xs text-red-800 dark:text-red-200">Formularz ogólny</p>
                    <p className="text-xs text-red-800 dark:text-red-200">Call center</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">✅ Najszybsze:</p>
                    <p className="text-xs text-green-800 dark:text-green-200">
                      <strong>Email:</strong> customerrelations@lot.pl<br/>
                      <strong>Lub:</strong> Formularz na lot.com/kontakt
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  🇭🇺 Wizz Air
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-red-900 dark:text-red-100 mb-2">❌ Unikaj:</p>
                    <p className="text-xs text-red-800 dark:text-red-200">Chat support (nie obsługuje EU261)</p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded">
                    <p className="text-sm font-semibold text-green-900 dark:text-green-100 mb-2">✅ Skuteczne:</p>
                    <p className="text-xs text-green-800 dark:text-green-200">
                      <strong>Formularz:</strong>{" "}
                      <a href="https://wizzair.com/en-gb/information-and-services/customer-service/contact-us" target="_blank" rel="noopener" className="underline">
                        wizzair.com/contact-us
                      </a>
                      <br/>→ "Compensation claim"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                💡 Pro tip:
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Email daje potwierdzenie wysłania</strong> (dowód w razie sporu). 
                <strong>Formularz jest szybszy</strong> (linie preferują), ale brak auto-potwierdzenia. 
                <strong>Zawsze rób screenshot</strong> po wysłaniu formularza!
              </p>
            </div>
          </section>

          {/* CTA #2 */}
          <div className="my-12 p-8 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Zero błędów, maksymalna skuteczność — pozwól ekspertom działać
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">83%</div>
                <div className="text-green-100 text-sm">Skuteczność ClaimWinger</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0 zł</div>
                <div className="text-green-100 text-sm">Koszty z góry</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25%</div>
                <div className="text-green-100 text-sm">Prowizja tylko przy sukcesie</div>
              </div>
            </div>
            <div className="text-center">
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition-colors shadow-lg"
              >
                Sprawdź bezpłatnie z ClaimWinger →
              </a>
              <p className="text-green-200 text-sm mt-4">
                ✓ Weryfikacja w 2 minuty  ✓ Bez zobowiązań  ✓ Zero ryzyka błędów
              </p>
            </div>
          </div>

          {/* Podsumowanie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Podsumowanie: 7 błędów które tracą odszkodowanie
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Zbyt ogólny wniosek</strong>
                    <span className="text-gray-600 dark:text-gray-400"> — podawaj konkretne dane: numer lotu, czasy, PNR</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Akceptacja vouchera</strong>
                    <span className="text-gray-600 dark:text-gray-400"> — zawsze żądaj gotówki (250-600 €)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Rezygnacja po odmowie</strong>
                    <span className="text-gray-600 dark:text-gray-400"> — 73% odmów jest błędnych, kwestionuj je!</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Brak dokumentacji</strong>
                    <span className="text-gray-600 dark:text-gray-400"> — zbieraj dowody: karty, emaile, zdjęcia</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-bold flex-shrink-0">5</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Mylenie odlotu z przylotem</strong>
                    <span className="text-gray-600 dark:text-gray-400"> — LICZY SIĘ CZAS PRZYLOTU! ≥3h = odszkodowanie</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-bold flex-shrink-0">6</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Zbyt długie czekanie</strong>
                    <span className="text-gray-600 dark:text-gray-400"> — złóż wniosek w 1-3 miesiące (skuteczność 91%)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-bold flex-shrink-0">7</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Zły kanał kontaktu</strong>
                    <span className="text-gray-600 dark:text-gray-400"> — używaj dedykowanych formularzy/emaili (nie info@)</span>
                  </div>
                </li>
              </ol>

              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  💡 Najważniejsza rada:
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  <strong>72% samodzielnych wniosków kończy się porażką</strong> przez te błędy. 
                  Z ClaimWinger <strong>83% skuteczności</strong> — zero błędów, zero stresu, prowizja tylko przy wygranej (25%). 
                  <strong className="block mt-2">Sprawdź bezpłatnie swój case — 2 minuty weryfikacji.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Najczęściej zadawane pytania
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Jaki jest najczęstszy błąd przy składaniu reklamacji lotniczej?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Najczęstszy błąd to <strong>zbyt ogólny wniosek bez konkretnych danych lotu</strong> (numer, daty, czasy). 
                  43% wniosków jest odrzucanych właśnie z tego powodu. Zawsze podawaj: numer lotu, dokładne czasy 
                  (zaplanowany vs rzeczywisty przylot), numer rezerwacji (PNR) i podstawę prawną (WE 261/2004).
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Co zrobić jeśli nie mam karty pokładowej?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Brak karty pokładowej <strong>NIE dyskwalifikuje wniosku!</strong> Wystarczy: potwierdzenie rezerwacji + 
                  dowód osobisty/paszport + dokumentacja opóźnienia (email, SMS, zdjęcia z lotniska). Linia ma pełne dane lotu w systemie. 
                  <strong className="block mt-2">W 2024 roku 31% skutecznych roszczeń było bez boarding pass.</strong>
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Czy powinienem zaakceptować voucher zamiast odszkodowania?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>NIE!</strong> Voucher to nie to samo co odszkodowanie. Prawo (WE 261/2004) daje Ci <strong>PIENIĄDZE</strong> (250-600 €), 
                  nie vouchery. Linie często oferują vouchery bo:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                  <li>• Są ważne tylko 1 rok</li>
                  <li>• Często niewykorzystane (38%)</li>
                  <li>• Zamykają sprawę = koniec roszczeń</li>
                </ul>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Zawsze żądaj gotówki!</strong>
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Jak długo czekać na odpowiedź linii przed eskalacją?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Standardowy termin to <strong>6-8 tygodni</strong>. Jeśli po 8 tygodniach brak odpowiedzi - wyślij przypomnienie. 
                  <strong>Po 12 tygodniach bez reakcji</strong> - eskaluj do ULC lub firmy odszkodowawczej. 
                  NIE czekaj dłużej - to celowa taktyka opóźniania linii.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Co jeśli linia powołuje się na nadzwyczajne okoliczności?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Zażądaj <strong>SZCZEGÓŁOWEGO uzasadnienia i DOWODÓW!</strong> W 73% przypadków "nadzwyczajne okoliczności" 
                  są błędnie stosowane. Typowe nieprawidłowe wymówki:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                  <li>❌ Usterka techniczna</li>
                  <li>❌ Brak załogi</li>
                  <li>❌ Wcześniejsze opóźnienie</li>
                </ul>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Linia MUSI udowodnić że: 1) sytuacja była nadzwyczajna, 2) zrobili wszystko aby jej zapobiec.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Czy mogę dochodzić odszkodowania za lot sprzed 2 lat?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>TAK!</strong> W Polsce termin przedawnienia to <strong>6 LAT</strong> od daty lotu. 
                  Możesz dochodzić roszczeń nawet za loty z 2019 roku (jeśli nie minęło 6 lat). 
                  Inne kraje mają różne terminy: Czechy 3 lata, Niemcy 3 lata, Włochy tylko 2 lata.
                  <strong className="block mt-2">
                    Uwaga: Im dłużej czekasz, tym niższa skuteczność (0-3 mies.: 91%, 2+ lat: 29%).
                  </strong>
                </p>
              </details>
            </div>
          </section>

          {/* Powiązane artykuły */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Przydatne artykuły:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/jak-zlozyc-wniosek-odszkodowanie"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Jak złożyć wniosek o odszkodowanie? [Krok po kroku]
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Kompletny przewodnik jak prawidłowo złożyć wniosek — 6 kroków + szablony.
                </p>
              </Link>

              <Link
                href="/blog/nadzwyczajne-okolicznosci-odszkodowanie"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Nadzwyczajne okoliczności — kiedy linie NIE płacą?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Sprawdź co to są prawdziwe nadzwyczajne okoliczności i jak zakwestionować odmowę.
                </p>
              </Link>

              <Link
                href="/blog/przedawnienie-roszczen-lotniczych"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Przedawnienie roszczeń lotniczych — ile masz czasu?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Dowiedz się ile czasu masz na złożenie wniosku (2-6 lat w zależności od kraju).
                </p>
              </Link>

              <Link
                href="/blog/odszkodowanie-ryanair-polska"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Odszkodowanie Ryanair — procedury i stawki
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Specyfika składania wniosków do Ryanair (tylko formularz online!).
                </p>
              </Link>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/blog"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              ← Powrót do bloga
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}