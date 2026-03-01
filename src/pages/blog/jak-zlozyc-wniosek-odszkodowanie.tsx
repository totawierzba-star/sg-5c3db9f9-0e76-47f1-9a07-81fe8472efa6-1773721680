import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { CheckCircle2, XCircle, AlertCircle, FileText, Send, Clock, TrendingUp } from "lucide-react";

export default function JakZlozycWniosekOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Jak złożyć wniosek o odszkodowanie lotnicze? [Przewodnik krok po kroku 2025]"
        description="Kompletny przewodnik: jak złożyć wniosek o odszkodowanie za opóźniony lub odwołany lot. 6 kroków + szablony dokumentów."
        image="https://lotproblem.pl/og-image.png"
        url="https://lotproblem.pl/blog/jak-zlozyc-wniosek-odszkodowanie"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Jak złożyć wniosek o odszkodowanie lotnicze",
            "description": "Przewodnik krok po kroku jak złożyć wniosek o odszkodowanie za opóźniony lub odwołany lot",
            "image": "https://lotproblem.pl/og-image.png",
            "totalTime": "PT30M",
            "estimatedCost": {
              "@type": "MonetaryAmount",
              "currency": "EUR",
              "value": "0"
            },
            "step": [
              {
                "@type": "HowToStep",
                "position": 1,
                "name": "Zbierz dokumenty",
                "text": "Karta pokładowa, potwierdzenie rezerwacji, dokumentacja opóźnienia",
                "image": "https://lotproblem.pl/og-image.png"
              },
              {
                "@type": "HowToStep",
                "position": 2,
                "name": "Ustal wysokość odszkodowania",
                "text": "250-600 EUR w zależności od odległości lotu",
                "image": "https://lotproblem.pl/og-image.png"
              },
              {
                "@type": "HowToStep",
                "position": 3,
                "name": "Napisz wniosek do linii",
                "text": "Formalny wniosek z danymi lotu i pasażera",
                "image": "https://lotproblem.pl/og-image.png"
              },
              {
                "@type": "HowToStep",
                "position": 4,
                "name": "Wyślij wniosek",
                "text": "Email lub formularz na stronie linii lotniczej",
                "image": "https://lotproblem.pl/og-image.png"
              },
              {
                "@type": "HowToStep",
                "position": 5,
                "name": "Czekaj na odpowiedź",
                "text": "Linia ma 6-8 tygodni na odpowiedź",
                "image": "https://lotproblem.pl/og-image.png"
              },
              {
                "@type": "HowToStep",
                "position": 6,
                "name": "Eskaluj jeśli trzeba",
                "text": "ULC, firma odszkodowawcza lub sąd",
                "image": "https://lotproblem.pl/og-image.png"
              }
            ],
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Jak długo linia lotnicza ma na odpowiedź na wniosek o odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Linie lotnicze mają zazwyczaj 6-8 tygodni na rozpatrzenie wniosku. W praktyce często odpowiadają po 4-12 tygodniach. Brak odpowiedzi po 8 tygodniach to podstawa do eskalacji sprawy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy muszę mieć kartę pokładową aby złożyć wniosek?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Karta pokładowa jest najlepszym dowodem, ale NIE jest obligatoryjna. Wystarczy potwierdzenie rezerwacji + dowód osobisty/paszport + dokumentacja opóźnienia (email od linii, zdjęcia z lotniska)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co zrobić jeśli linia odrzuciła wniosek powołując się na nadzwyczajne okoliczności?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zażądaj szczegółowego uzasadnienia i dowodów. W 73% przypadków 'nadzwyczajne okoliczności' są nieprawidłowo stosowane. Skonsultuj się z firmą odszkodowawczą - ClaimWinger weryfikuje takie przypadki bezpłatnie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę złożyć wniosek po polsku do zagranicznej linii?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK, możesz złożyć wniosek po polsku do każdej linii obsługującej lot z/do Polski. Linia MUSI obsługiwać wnioski w języku państwa członkowskiego UE. Dla wygody większość linii ma formularze też po angielsku."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak wysłać wniosek do linii lotniczej - email czy poczta?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "EMAIL jest najszybszy i najprostszy (większość linii preferuje). Niektóre linie mają dedykowane formularze online. List polecony używaj tylko jeśli: 1) linia nie odpowiada na email, 2) sprawa idzie do sądu (dowód doręczenia)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy firma odszkodowawcza jest lepsza niż samodzielne składanie wniosku?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zależy od sytuacji. Samodzielnie: 0% prowizji, ale 28% skuteczności i 6-12 miesięcy czasu. Z ClaimWinger: 25% prowizji (tylko przy sukcesie), ale 83% skuteczności i brak zachodu z Twojej strony. Sprawdź bezpłatnie swój przypadek."
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
          <span className="text-gray-900 dark:text-gray-100">Jak złożyć wniosek o odszkodowanie</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
              Przewodnik How-To
            </span>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <time className="text-gray-600 dark:text-gray-400">28 stycznia 2025</time>
            <span className="text-gray-500 dark:text-gray-400">•</span>
            <span className="text-gray-600 dark:text-gray-400">12 min czytania</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Jak złożyć wniosek o odszkodowanie lotnicze? [Przewodnik krok po kroku 2025]
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Kompletny, praktyczny przewodnik jak skutecznie złożyć wniosek o odszkodowanie za opóźniony lub odwołany lot. 
            6 kroków + gotowe szablony dokumentów.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">~30 min</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Czas na złożenie wniosku</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">28%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Skuteczność samodzielnego wniosku</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">83%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Skuteczność z ClaimWinger</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed">
              <strong>Opóźniony lub odwołany lot</strong> to frustrujące doświadczenie, ale <strong>prawo unijne (Rozporządzenie WE 261/2004)</strong> 
              daje Ci możliwość uzyskania <strong>odszkodowania do 600 €</strong> — niezależnie od ceny biletu.
            </p>

            <p className="text-lg leading-relaxed">
              W tym przewodniku pokażę Ci <strong>krok po kroku</strong> jak skutecznie złożyć wniosek o odszkodowanie. 
              Dowiesz się:
            </p>

            <ul className="space-y-2">
              <li>✅ Jakie dokumenty musisz zebrać</li>
              <li>✅ Jak prawidłowo napisać wniosek (+ gotowy szablon)</li>
              <li>✅ Gdzie i jak wysłać wniosek do linii lotniczej</li>
              <li>✅ Czego oczekiwać i jak długo czekać na odpowiedź</li>
              <li>✅ Co zrobić jeśli linia odmówi lub ignoruje wniosek</li>
              <li>✅ Kiedy warto skorzystać z firmy odszkodowawczej</li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                    Ważna statystyka przed rozpoczęciem:
                  </p>
                  <p className="text-yellow-800 dark:text-yellow-200">
                    <strong>Tylko 28% samodzielnie złożonych wniosków</strong> kończy się sukcesem. Główne przyczyny: 
                    błędy formalne, brak reakcji na odmowy, nieznajomość argumentacji prawnej. 
                    <strong className="block mt-2">
                      Z ClaimWinger skuteczność wynosi 83%</strong> — bez żadnego zachodu z Twojej strony.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA #1 - Po intro */}
          <div className="my-12 p-8 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Nie chcesz tracić czasu? Sprawdź Claimwinger
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              83% skuteczności • 0% ryzyka • Prowizja tylko przy sukcesie (25%)
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Sprawdź bezpłatnie swój case →
            </a>
            <p className="text-blue-200 text-sm mt-4">
              Weryfikacja zajmuje 2 minuty • Bez zobowiązań
            </p>
          </div>

          {/* KROK 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-xl">1</span>
              Zbierz wymagane dokumenty
            </h2>

            <p className="text-lg mb-6">
              Aby złożyć skuteczny wniosek, potrzebujesz <strong>3 podstawowych kategorii dokumentów</strong>:
            </p>

            <div className="space-y-6">
              {/* Kategoria A */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  A. Dokumenty potwierdzające rezerwację i lot
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Karta pokładowa (boarding pass)</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Najlepszy dowód że byłeś na lotnisku. Jeśli nie masz papierowej — screenshot mobilnej też działa.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Potwierdzenie rezerwacji (booking confirmation)</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Email od linii z numerem rezerwacji (PNR). Zawiera: trasę, daty, dane pasażera.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Dowód osobisty lub paszport (kserokopia)</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Potwierdza Twoją tożsamość jako pasażera. W praktyce rzadko wymagane, ale warto mieć.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Kategoria B */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  B. Dokumenty potwierdzające opóźnienie/odwołanie
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Email/SMS od linii o zmianie lotu</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Oficjalna komunikacja o opóźnieniu, odwołaniu lub zmianie harmonogramu.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Zdjęcia tablicy odlotów na lotnisku</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Pokaż swój numer lotu z widocznym opóźnieniem lub statusem "cancelled". Timestamped najlepiej.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Nowa karta pokładowa (jeśli dostałeś lot zastępczy)</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Pokazuje o której faktycznie dotarłeś do celu (liczy się czas przylotu, nie odlotu!).
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Dane lotu z FlightRadar24 lub podobnych</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Opcjonalne, ale pomocne. Screenshot z dokładnymi czasami odlotu/przylotu.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Kategoria C */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Send className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  C. Dodatkowe dokumenty (jeśli masz)
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Potwierdzenie care (posiłki, hotel, transport)</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Jeśli linia NIE zapewniła opieki — rachunki własne mogą podwyższyć roszczenie.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <strong className="text-gray-900 dark:text-white">Korespondencja z linią (jeśli wcześniej kontaktowałeś się)</strong>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                        Pokazuje że próbowałeś rozwiązać problem uprzednio.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mt-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                💡 Pro tip: Nie masz wszystkich dokumentów?
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                To NIE dyskwalifikuje Twojego wniosku! <strong>Karta pokładowa + potwierdzenie rezerwacji</strong> to minimum. 
                Reszta wzmacnia sprawę, ale nie jest obligatoryjna. Linia MUSI mieć pełne dane lotu w swoim systemie.
              </p>
            </div>
          </section>

          {/* KROK 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-xl">2</span>
              Ustal wysokość należnego odszkodowania
            </h2>

            <p className="text-lg mb-6">
              Odszkodowanie zależy WYŁĄCZNIE od <strong>dystansu lotu</strong> (nie od ceny biletu!):
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-4 text-left font-semibold">Dystans lotu</th>
                    <th className="p-4 text-left font-semibold">Odszkodowanie</th>
                    <th className="p-4 text-left font-semibold">Przykładowe trasy z Polski</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="p-4 font-medium">Do 1500 km</td>
                    <td className="p-4 text-xl font-bold text-blue-600 dark:text-blue-400">250 €</td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                      Warszawa → Berlin, Kraków → Londyn, Gdańsk → Kopenhaga
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="p-4 font-medium">1500-3500 km</td>
                    <td className="p-4 text-xl font-bold text-blue-600 dark:text-blue-400">400 €</td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                      Warszawa → Madryt, Kraków → Lizbona, Gdańsk → Ateny
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="p-4 font-medium">Powyżej 3500 km</td>
                    <td className="p-4 text-xl font-bold text-blue-600 dark:text-blue-400">600 €</td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400">
                      Warszawa → Nowy Jork, Kraków → Bangkok, dowolne loty intercontinentalne
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6">
              <p className="font-semibold text-green-900 dark:text-green-100 mb-2">
                ✅ Jak sprawdzić dystans swojego lotu?
              </p>
              <p className="text-green-800 dark:text-green-200">
                Użyj kalkulatora dystansu: <a href="https://www.greatcirclemap.com/" target="_blank" rel="noopener" className="underline font-semibold">GreatCircleMap.com</a> 
                {" "}lub Google: "distance [airport A] to [airport B]". Liczy się <strong>wielka linia okręgu</strong> (great circle), nie rzeczywista trasa samolotu.
              </p>
            </div>
          </section>

          {/* KROK 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-xl">3</span>
              Napisz formalny wniosek do linii lotniczej
            </h2>

            <p className="text-lg mb-6">
              Wniosek musi zawierać <strong>konkretne dane</strong> i <strong>podstawę prawną</strong>. Oto gotowy szablon:
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border-2 border-gray-300 dark:border-gray-600 mb-6">
              <div className="font-mono text-sm space-y-4 text-gray-800 dark:text-gray-200">
                <p><strong>[Twoje Imię i Nazwisko]</strong><br />
                [Twój adres]<br />
                [Email kontaktowy]<br />
                [Telefon]</p>

                <p className="pt-4"><strong>[Nazwa linii lotniczej]</strong><br />
                [Dział reklamacji / Customer Relations]<br />
                [Adres siedziby linii]</p>

                <p className="pt-4 text-center"><strong>WNIOSEK O WYPŁATĘ ODSZKODOWANIA<br />
                NA PODSTAWIE ROZPORZĄDZENIA WE 261/2004</strong></p>

                <p className="pt-4">Dotyczy: Lot numer <strong>[FR1234]</strong><br />
                Trasa: <strong>[Warszawa (WAW) → Londyn (STN)]</strong><br />
                Data zaplanowanego lotu: <strong>[15.01.2025]</strong><br />
                Numer rezerwacji (PNR): <strong>[ABC123]</strong></p>

                <p className="pt-4">Szanowni Państwo,</p>

                <p>W dniu <strong>[15.01.2025]</strong> miałem/am zarezerwowany lot nr <strong>[FR1234]</strong> z Warszawy (WAW) do Londynu (STN), 
                z zaplanowanym odlotem o godzinie <strong>[10:00]</strong> i przylotem o <strong>[11:30]</strong>.</p>

                <p><strong>Lot został [opóźniony o X godzin / odwołany]</strong>, w wyniku czego dotarłem/am do miejsca docelowego 
                z opóźnieniem przekraczającym 3 godziny (faktyczny czas przylotu: <strong>[16:45]</strong>).</p>

                <p>Na podstawie <strong>Rozporządzenia (WE) nr 261/2004 Parlamentu Europejskiego i Rady</strong> w sprawie odszkodowania 
                i pomocy dla pasażerów w przypadku odmowy przyjęcia na pokład, odwołania lub dużego opóźnienia lotów, 
                przysługuje mi odszkodowanie w wysokości:</p>

                <p className="text-center py-4 text-2xl font-bold text-blue-600 dark:text-blue-400">
                  [250 € / 400 € / 600 €]
                </p>

                <p>Dystans lotu Warszawa-Londyn wynosi około <strong>[1150 km]</strong>, co zgodnie z art. 7 Rozporządzenia kwalifikuje 
                do odszkodowania w wysokości <strong>250 EUR</strong> za lot opóźniony o ponad 3 godziny.</p>

                <p><strong>Proszę o wypłatę odszkodowania</strong> na poniższe dane bankowe w terminie <strong>14 dni</strong> od daty otrzymania niniejszego wniosku:</p>

                <p className="pl-4">
                  Imię i nazwisko: <strong>[Jan Kowalski]</strong><br />
                  Numer konta (IBAN): <strong>[PL XX XXXX XXXX XXXX XXXX XXXX XXXX]</strong><br />
                  Bank: <strong>[Nazwa banku]</strong>
                </p>

                <p>W przypadku braku odpowiedzi lub odmowy wypłaty, będę zmuszony/a skierować sprawę do:</p>
                <ul className="list-disc pl-8">
                  <li>Urzędu Lotnictwa Cywilnego (ULC) w Polsce</li>
                  <li>Sądu powszechnego właściwego dla mojego miejsca zamieszkania</li>
                  <li>Firmy odszkodowawczej specjalizującej się w prawach pasażerów</li>
                </ul>

                <p className="pt-4">Z poważaniem,<br />
                <strong>[Podpis / Imię i nazwisko]</strong></p>

                <p className="pt-4 text-xs">Załączniki:<br />
                — Kopia karty pokładowej<br />
                — Potwierdzenie rezerwacji<br />
                — Dokumentacja opóźnienia (screenshoty, emaile)</p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6">
              <p className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
                ⚠️ Uwagi do szablonu:
              </p>
              <ul className="text-yellow-800 dark:text-yellow-200 space-y-2 text-sm">
                <li>✏️ Zamień wszystko w <strong>[kwadratowych nawiasach]</strong> na swoje dane</li>
                <li>📅 Podaj <strong>dokładne czasy</strong> — zaplanowany odlot vs faktyczny przylot</li>
                <li>💳 <strong>IBAN</strong> musi być poprawny (linie nie kontaktują się przed przelewem)</li>
                <li>🇵🇱 Możesz pisać <strong>po polsku</strong> do każdej linii obsługującej Polskę</li>
                <li>📎 Załącz dokumenty jako <strong>PDF</strong> (max 5 MB łącznie dla emaila)</li>
              </ul>
            </div>
          </section>

          {/* KROK 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-xl">4</span>
              Wyślij wniosek do linii lotniczej
            </h2>

            <p className="text-lg mb-6">
              Większość linii preferuje <strong>email</strong> lub <strong>formularz online</strong>. Oto adresy głównych przewoźników:
            </p>

            <div className="space-y-4 mb-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🇵🇱 LOT Polish Airlines</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Email:</strong> customerrelations@lot.pl
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Formularz:</strong> <a href="https://www.lot.com/pl/pl/kontakt" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 underline">lot.com/kontakt</a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  💡 LOT odpowiada w 4-6 tygodni. Możesz pisać po polsku.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🇮🇪 Ryanair</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Formularz TYLKO:</strong> <a href="https://www.ryanair.com/pl/pl/help-centre" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 underline">ryanair.com/help-centre</a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  ⚠️ Ryanair NIE akceptuje emaili! Musisz użyć formularza na stronie (zakładka "EU261 Claim").
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🇭🇺 Wizz Air</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Formularz:</strong> <a href="https://wizzair.com/en-gb/information-and-services/customer-service/contact-us" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 underline">wizzair.com/contact-us</a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  💡 Wizz Air preferuje formularz, ale można też wysłać email do ich Customer Relations (adres podany w formularzu).
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🇩🇪 Lufthansa</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Email:</strong> customer.relations@dlh.de
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Formularz:</strong> <a href="https://www.lufthansa.com/pl/pl/kontakt" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 underline">lufthansa.com/kontakt</a>
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">🇬🇧 easyJet</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <strong>Formularz:</strong> <a href="https://www.easyjet.com/en/help/contact-us" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 underline">easyjet.com/contact-us</a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                  💡 easyJet preferuje formularz online. Odpowiedzi zazwyczaj w 4-6 tygodni.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                📧 Email vs Formularz — co wybrać?
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Email:</strong> Masz potwierdzenie wysłania + dowód w razie sporu. Zachowaj kopię w wysłanych.<br />
                <strong>Formularz:</strong> Szybszy, linie preferują, ale brak automatycznego potwierdzenia. Zrób screenshot po wysłaniu!
              </p>
            </div>
          </section>

          {/* KROK 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-xl">5</span>
              Czekaj na odpowiedź (4-8 tygodni)
            </h2>

            <p className="text-lg mb-6">
              Po wysłaniu wniosku linia ma <strong>6-8 tygodni</strong> na odpowiedź (choć prawo tego nie reguluje ściśle). 
              W praktyce:
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-green-900 dark:text-green-100">Pozytywna odpowiedź (10-15% przypadków)</strong>
                  <p className="text-green-800 dark:text-green-200 text-sm mt-1">
                    Linia uznaje roszczenie i wypłaca odszkodowanie (zwykle w ciągu 2-4 tygodni od akceptacji). 
                    Sprawdź kwotę — czasem obniżają bez uzasadnienia!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <XCircle className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-red-900 dark:text-red-100">Odmowa (60-70% przypadków)</strong>
                  <p className="text-red-800 dark:text-red-200 text-sm mt-1">
                    Najczęstsze powody: "nadzwyczajne okoliczności", "usterka techniczna", "brak odpowiedzialności". 
                    <strong className="block mt-2">W 73% tych odmów linia się myli!</strong> Nie rezygnuj — zobacz KROK 6.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <strong className="text-yellow-900 dark:text-yellow-100">Brak odpowiedzi (15-20% przypadków)</strong>
                  <p className="text-yellow-800 dark:text-yellow-200 text-sm mt-1">
                    Jeśli po <strong>8 tygodniach</strong> nie otrzymałeś żadnej odpowiedzi, wyślij przypomnienie. 
                    Po 12 tygodniach — eskaluj do ULC lub firmy odszkodowawczej.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-300 dark:border-gray-600">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                📋 Szablon przypomnienia (po 8 tygodniach bez odpowiedzi):
              </h3>
              <div className="font-mono text-sm text-gray-800 dark:text-gray-200">
                <p>Temat: <strong>Przypomnienie — Wniosek o odszkodowanie, lot [FR1234], PNR [ABC123]</strong></p>
                <p className="pt-4">Szanowni Państwo,</p>
                <p className="pt-2">W dniu [data wysłania] wysłałem/am wniosek o wypłatę odszkodowania za lot nr [FR1234] z dnia [15.01.2025].</p>
                <p className="pt-2">Do chwili obecnej (8 tygodni) nie otrzymałem/am żadnej odpowiedzi.</p>
                <p className="pt-2">Uprzejmie proszę o <strong>niezwłoczne rozpatrzenie wniosku</strong> i potwierdzenie jego statusu.</p>
                <p className="pt-2">W przypadku dalszego braku reakcji, będę zmuszony/a skierować sprawę do Urzędu Lotnictwa Cywilnego 
                oraz firmy specjalizującej się w dochodzeniu roszczeń lotniczych.</p>
                <p className="pt-4">Z poważaniem,<br />[Imię i nazwisko]</p>
              </div>
            </div>
          </section>

          {/* KROK 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <span className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full text-xl">6</span>
              Co zrobić jeśli linia odmówiła lub nie odpowiada?
            </h2>

            <p className="text-lg mb-6">
              <strong>Odmowa NIE oznacza końca drogi!</strong> Masz kilka opcji eskalacji:
            </p>

            <div className="space-y-6">
              {/* Opcja A - ULC */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-blue-300 dark:border-blue-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">🇵🇱</span>
                  Opcja A: Urząd Lotnictwa Cywilnego (ULC)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Bezpłatna mediacja</strong> między Tobą a linią lotniczą. ULC analizuje sprawę i wydaje opinię.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>✅ Plusy:</strong> Darmowe, stosunkowo szybkie (2-4 miesiące), oficjalny organ</p>
                  <p><strong>❌ Minusy:</strong> Opinia NIE jest wiążąca dla linii (28% skuteczności), czasochłonne</p>
                  <p><strong>📧 Jak zgłosić:</strong> <a href="https://www.ulc.gov.pl/pl/prawa-pasazera" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 underline">ulc.gov.pl/prawa-pasazera</a></p>
                </div>
              </div>

              {/* Opcja B - Firma odszkodowawcza */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-green-500 dark:border-green-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  Opcja B: Firma odszkodowawcza (np. ClaimWinger) — NAJLEPSZA
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Przekazujesz sprawę ekspertom</strong>, którzy walczą z liniami zawodowo.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <p><strong>✅ Plusy:</strong> 83% skuteczności, zero zachodu z Twojej strony, brak ryzyka (no win - no fee)</p>
                  <p><strong>❌ Minusy:</strong> Prowizja 25% od wypłaty (tylko przy sukcesie)</p>
                  <p><strong>⏱️ Czas:</strong> Średnio 3-6 miesięcy do wypłaty</p>
                </div>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Sprawdź bezpłatnie z ClaimWinger →
                </a>
              </div>

              {/* Opcja C - Sąd */}
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-gray-400 dark:border-gray-600">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span>
                  Opcja C: Postępowanie sądowe
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Ostateczność</strong> — nakaz zapłaty lub pozew cywilny.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>✅ Plusy:</strong> Wiążący wyrok, możliwość odzyskania kosztów sądowych</p>
                  <p><strong>❌ Minusy:</strong> Długo (6-18 miesięcy), koszty (opłata sądowa ~300 zł + ewentualnie prawnik), stres</p>
                  <p><strong>💡 Kiedy:</strong> Gdy wartość roszczenia jest wysoka (600 €) i masz mocne dowody</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mt-6">
              <p className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                🎯 Nasze zalecenie:
              </p>
              <p className="text-blue-800 dark:text-blue-200">
                <strong>Jeśli linia odmówiła lub ignoruje Cię po 8 tygodniach</strong> — skontaktuj się z ClaimWinger. 
                Bezpłatna weryfikacja zabierze Ci 2 minuty, a 83% szans na sukces vs 28% samodzielnie to ogromna różnica. 
                Prowizja 25% jest tego warta, szczególnie gdy alternatywą jest miesiące walki i niepewność.
              </p>
            </div>
          </section>

          {/* CTA #2 - Po case studies */}
          <div className="my-12 p-8 bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Nie walcz sam — eksperci zrobią to za Ciebie
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">83%</div>
                <div className="text-green-100 text-sm">Skuteczność ClaimWinger</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">0 zł</div>
                <div className="text-green-100 text-sm">Koszty z góry (no win - no fee)</div>
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
                Sprawdź swój case bezpłatnie →
              </a>
              <p className="text-green-200 text-sm mt-4">
                ✓ Weryfikacja w 2 minuty  ✓ Bez zobowiązań  ✓ Prowizja tylko przy wygranej
              </p>
            </div>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Jak długo linia lotnicza ma na odpowiedź na wniosek o odszkodowanie?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Linie lotnicze mają zazwyczaj <strong>6-8 tygodni</strong> na rozpatrzenie wniosku. W praktyce często odpowiadają 
                  po 4-12 tygodniach. <strong>Brak odpowiedzi po 8 tygodniach</strong> to podstawa do eskalacji sprawy 
                  (przypomnienie → ULC → firma odszkodowawcza).
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Czy muszę mieć kartę pokładową aby złożyć wniosek?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  Karta pokładowa jest <strong>najlepszym dowodem</strong> że byłeś na lotnisku, ale <strong>NIE jest obligatoryjna</strong>. 
                  Wystarczy:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>✅ Potwierdzenie rezerwacji (booking confirmation)</li>
                  <li>✅ Dowód osobisty/paszport (potwierdzenie tożsamości)</li>
                  <li>✅ Dokumentacja opóźnienia (email od linii, zdjęcia z lotniska)</li>
                </ul>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Linia MUSI mieć pełne dane lotu w swoim systemie, więc brak boarding pass nie dyskwalifikuje wniosku.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Co zrobić jeśli linia odrzuciła wniosek powołując się na nadzwyczajne okoliczności?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Zażądaj szczegółowego uzasadnienia i dowodów!</strong> W 73% przypadków "nadzwyczajne okoliczności" 
                  są nieprawidłowo stosowane przez linie. Typowe wymówki które NIE działają:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>❌ "Usterka techniczna" — to część normalnych operacji</li>
                  <li>❌ "Brak załogi" — to wina planowania linii</li>
                  <li>❌ "Wcześniejsze opóźnienie" — każdy lot to osobna sprawa</li>
                </ul>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Skonsultuj się z ClaimWinger</strong> — weryfikują takie przypadki bezpłatnie i wiedzą jak zakwestionować błędne odmowy.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Czy mogę złożyć wniosek po polsku do zagranicznej linii?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>TAK!</strong> Możesz złożyć wniosek po polsku do <strong>każdej linii obsługującej lot z/do Polski</strong>. 
                  Zgodnie z prawem UE, linia MUSI obsługiwać wnioski w języku państwa członkowskiego. 
                  W praktyce większość linii ma też formularze po angielsku dla wygody, ale polski jest w pełni akceptowalny.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Jak wysłać wniosek do linii lotniczej - email czy poczta?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>EMAIL jest najszybszy i najprostszy</strong> (większość linii preferuje). Zalety:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>✅ Natychmiastowe doręczenie</li>
                  <li>✅ Potwierdzenie wysłania</li>
                  <li>✅ Kopia w wysłanych (dowód w razie sporu)</li>
                </ul>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>List polecony</strong> używaj tylko jeśli:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Linia nie odpowiada na email (po 8 tygodniach)</li>
                  <li>• Sprawa idzie do sądu (dowód doręczenia z datą)</li>
                </ul>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Niektóre linie (jak Ryanair) mają <strong>tylko formularz online</strong> — wtedy email nie zadziała.
                </p>
              </details>

              <details className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <summary className="font-semibold text-lg text-gray-900 dark:text-white">
                  Czy firma odszkodowawcza jest lepsza niż samodzielne składanie wniosku?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Zależy od Twojej sytuacji:</strong>
                </p>
                <div className="mt-4 grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">✍️ Samodzielnie:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>✅ 0% prowizji</li>
                      <li>❌ 28% skuteczności</li>
                      <li>❌ 6-12 miesięcy czasu</li>
                      <li>❌ Musisz sam walczyć z linią</li>
                      <li>❌ Ryzyko błędów formalnych</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">🚀 Z ClaimWinger:</p>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>✅ 83% skuteczności</li>
                      <li>✅ Zero zachodu z Twojej strony</li>
                      <li>✅ No win - no fee (0 zł ryzyka)</li>
                      <li>✅ Średnio 3-6 miesięcy</li>
                      <li>❌ Prowizja 25% (tylko przy sukcesie)</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nasze zalecenie:</strong> Jeśli wartość roszczenia to 250-600 €, a nie masz czasu/cierpliwości do walki z linią 
                  — ClaimWinger jest opłacalny. 83% szans vs 28% samodzielnie to ogromna różnica, a prowizja 25% jest warta spokoju i czasu.
                </p>
              </details>
            </div>
          </section>

          {/* Podsumowanie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Podsumowanie: 6 kroków do odszkodowania
            </h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold flex-shrink-0">1</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Zbierz dokumenty:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> karta pokładowa, potwierdzenie rezerwacji, dokumentacja opóźnienia</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold flex-shrink-0">2</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Ustal wysokość odszkodowania:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> 250 € / 400 € / 600 € w zależności od dystansu</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold flex-shrink-0">3</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Napisz formalny wniosek:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> użyj naszego szablonu powyżej</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold flex-shrink-0">4</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Wyślij do linii:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> email lub formularz online (zachowaj potwierdzenie!)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold flex-shrink-0">5</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Czekaj 6-8 tygodni:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> monitoruj odpowiedź, po 8 tygodniach wyślij przypomnienie</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold flex-shrink-0">6</span>
                  <div>
                    <strong className="text-gray-900 dark:text-white">Eskaluj jeśli trzeba:</strong>
                    <span className="text-gray-600 dark:text-gray-400"> ULC → ClaimWinger → Sąd (wybierz ścieżkę odpowiednią dla Ciebie)</span>
                  </div>
                </li>
              </ol>

              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  💡 Pamiętaj:
                </p>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                  <li>✅ Samodzielnie = 0% prowizji, ale <strong>tylko 28% skuteczności</strong></li>
                  <li>✅ Z ClaimWinger = 25% prowizji, ale <strong>83% skuteczności i zero zachodu</strong></li>
                  <li>✅ Masz <strong>2-6 lat</strong> na zgłoszenie roszczenia (zależy od kraju)</li>
                  <li>✅ Odszkodowanie <strong>nie zależy od ceny biletu</strong> — nawet 20 zł bilet może dać 600 € wypłaty!</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="my-12 p-8 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Gotowy żeby odzyskać swoje pieniądze?
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              Sprawdź bezpłatnie z ClaimWinger — weryfikacja zajmuje 2 minuty
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Sprawdź swój case →
            </a>
            <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-bold text-2xl mb-1">83%</div>
                <div className="text-blue-200">Skuteczność</div>
              </div>
              <div>
                <div className="font-bold text-2xl mb-1">0 zł</div>
                <div className="text-blue-200">Koszty z góry</div>
              </div>
              <div>
                <div className="font-bold text-2xl mb-1">3-6 mies.</div>
                <div className="text-blue-200">Średni czas wypłaty</div>
              </div>
            </div>
          </div>

          {/* Powiązane artykuły */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Przydatne artykuły:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/nadzwyczajne-okolicznosci-odszkodowanie"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Nadzwyczajne okoliczności — kiedy linie NIE płacą?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Sprawdź co to są prawdziwe nadzwyczajne okoliczności i jak zakwestionować błędną odmowę linii.
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

              <Link
                href="/blog/odszkodowanie-wizz-air-polska"
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                  Odszkodowanie Wizz Air — prawa pasażera
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Jak skutecznie złożyć wniosek do Wizz Air i czego oczekiwać.
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