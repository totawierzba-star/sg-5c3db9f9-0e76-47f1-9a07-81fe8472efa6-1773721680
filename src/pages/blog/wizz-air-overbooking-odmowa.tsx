import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Euro, Clock, Plane, CheckCircle, XCircle, FileText, Scale, Users } from "lucide-react";

export default function WizzAirOverbookingOdmowa() {
  return (
    <Layout>
      <SEO
        title="Wizz Air overbooking — odmowa wejścia na pokład i 250-600 € [2026]"
        description="Wizz Air odmówił Ci wejścia na pokład z powodu overbookingu? Należy Ci się natychmiastowe odszkodowanie 250-600 € + zwrot/przekierowanie. Przewodnik prawny."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Co to jest overbooking u Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Overbooking (nadsprzedaż) to sytuacja gdy Wizz Air sprzedał więcej biletów niż jest miejsc w samolocie. Linia robi to celowo zakładając, że część pasażerów się nie stawi. Jeśli wszyscy się pojawią, Wizz Air odmawia wejścia na pokład ostatnim pasażerom."
                }
              },
              {
                "@type": "Question",
                "name": "Ile odszkodowania za overbooking Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "250 € (loty do 1500 km), 400 € (loty 1500-3500 km) lub 600 € (loty powyżej 3500 km). Odszkodowanie należy się natychmiast, na miejscu na lotnisku + zwrot kosztów biletu lub lot zastępczy."
                }
              },
              {
                "@type": "Question",
                "name": "Czy mogę odmówić vouchera od Wizz Air przy overbookingu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Wizz Air nie może Cię zmusić do przyjęcia vouchera. Masz prawo wymagać gotówki (przelewem). To jest Twoje ustawowe prawo zgodnie z WE 261/2004."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Wizz Air może wybrać kogo nie wpuści na pokład?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wizz Air najpierw musi szukać ochotników (za rekompensatę). Dopiero gdy nikt się nie zgłosi, może wybrać pasażerów według kryteriów (ostatni check-in, najtańsze bilety, pasażerowie bez przesiadki). Nie może dyskryminować ze względu na płeć, wiek, narodowość."
                }
              },
              {
                "@type": "Question",
                "name": "Co mi się należy oprócz odszkodowania przy overbookingu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1) Zwrot pełnej ceny biletu ALBO lot zastępczy na najbliższy możliwy termin, 2) Opieka na lotnisku: posiłki, napoje, 2 połączenia telefoniczne/emaile, 3) Hotel + transport (jeśli lot następnego dnia), 4) Odszkodowanie 250-600 € gotówką."
                }
              }
            ]
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-purple-600">Strona główna</Link></li>
              <li>›</li>
              <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
              <li>›</li>
              <li className="text-gray-900">Wizz Air overbooking</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              Wizz Air
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Wizz Air overbooking — odmowa wejścia na pokład
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Natychmiastowe odszkodowanie 250-600 € + zwrot lub lot zastępczy
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                8 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 27.02.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                <strong>Wizz Air odmówił Ci wejścia na pokład z powodu overbookingu (nadsprzedaży)?</strong>
              </p>
              <p className="leading-relaxed">
                Należy Ci się <strong>natychmiastowe odszkodowanie 250-600 €</strong> (w zależności od dystansu lotu) <strong>+ zwrot pełnej ceny biletu LUB lot zastępczy</strong> + opieka na lotnisku (posiłki, hotel jeśli potrzeba).
              </p>
              <p className="leading-relaxed">
                To jest <strong>jedno z najmocniejszych praw pasażera</strong> — odszkodowanie należy się <strong>zawsze</strong>, bez wyjątków. Wizz Air <strong>nie może</strong> odmówić wypłaty powołując się na nadzwyczajne okoliczności.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors mt-6 shadow-lg"
            >
              Sprawdź swoje odszkodowanie za 2 minuty
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-purple-600" />
              Co to jest overbooking u Wizz Air?
            </h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Definicja overbookingu:</p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Overbooking (nadsprzedaż)</strong> to sytuacja gdy linia lotnicza <strong>celowo sprzedaje więcej biletów niż jest miejsc w samolocie</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Wizz Air robi to zakładając, że <strong>część pasażerów się nie stawi</strong> (tzw. no-show). Jeśli jednak wszyscy pasażerowie pojawią się na lotnisku, Wizz Air <strong>odmawia wejścia na pokład ostatnim osobom</strong> mimo ważnych biletów.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Dlaczego Wizz Air robi overbooking?
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Maksymalizacja zysków</strong> — każde puste miejsce to strata dla linii</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Statystyki no-show</strong> — średnio 5-10% pasażerów się nie stawi (choroba, spóźnienie, zmiana planów)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Niska cena biletu</strong> — Wizz Air często sprzedaje bilety taniej niż koszt lotu, licząc na dodatkowe opłaty i overbooking</span>
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                Ważne!
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Overbooking to celowa praktyka biznesowa Wizz Air</strong>, NIE nadzwyczajna okoliczność. Linia <strong>zawsze musi wypłacić odszkodowanie</strong> pasażerom którym odmówiła wejścia na pokład.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-purple-600" />
              Ile odszkodowania za overbooking Wizz Air?
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-700 mb-2">250 €</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Loty do 1500 km</div>
                <div className="text-xs text-gray-600">Katowice–Londyn, Warszawa–Rzym, Gdańsk–Barcelona</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-700 mb-2">400 €</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Loty 1500-3500 km</div>
                <div className="text-xs text-gray-600">Warszawa–Tel Awiw, Katowice–Dubaj, Gdańsk–Reykjavik</div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-700 mb-2">600 €</div>
                <div className="text-sm font-semibold text-gray-700 mb-1">Loty powyżej 3500 km</div>
                <div className="text-xs text-gray-600">Teoretycznie (Wizz Air nie lata na takie dystanse z PL)</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Co jeszcze Ci się należy oprócz odszkodowania?
            </h3>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">1. Zwrot kosztów ALBO lot zastępczy (Twój wybór!):</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Zwrot pełnej ceny biletu</strong> (wszystkie opłaty + bagaż + miejsca) w ciągu 7 dni</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>LUB lot zastępczy</strong> na najbliższy możliwy termin (nawet tej samej linii konkurencyjnej!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>LUB lot w późniejszym terminie</strong> dogodnym dla Ciebie (jeśli są wolne miejsca)</span>
                </li>
              </ul>

              <h4 className="font-bold text-gray-900 mb-4 text-lg">2. Opieka na lotnisku (natychmiast!):</h4>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Posiłki i napoje</strong> adekwatne do czasu oczekiwania</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>2 połączenia telefoniczne, emaile lub faksy</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Hotel + transport</strong> (jeśli lot zastępczy jest następnego dnia)</span>
                </li>
              </ul>

              <h4 className="font-bold text-gray-900 mb-4 text-lg">3. Odszkodowanie finansowe 250-600 € (zawsze!):</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Gotówka, przelew lub czek</strong> (NIE voucher, chyba że sam chcesz)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Wypłata w ciągu 7 dni</strong> (jeśli Wizz Air nie płaci — reklamacja)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-purple-600" />
              Jak Wizz Air wybiera kogo nie wpuści na pokład?
            </h2>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Procedura zgodna z prawem:</p>
              <ol className="space-y-3 mt-4">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-1">1.</span>
                  <span><strong>Najpierw szuka ochotników</strong> — Wizz Air musi zapytać kto zgodzi się dobrowolnie oddać miejsce za rekompensatę (często proponują voucher + lot następnego dnia)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-amber-700 mt-1">2.</span>
                  <span><strong>Dopiero potem wybiera pasażerów</strong> — jeśli nikt się nie zgłosi, Wizz Air może wybrać pasażerów według kryteriów</span>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Typowe kryteria wyboru (od najczęstszych):
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Ostatni odprawieni</strong> — pasażerowie którzy najdalej zapisali się na lot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Najtańsze bilety</strong> — pasażerowie którzy zapłacili najmniej (promocje, last minute)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Bez przesiadki</strong> — pasażerowie lecący tylko tym jednym lotem (łatwiej przełożyć)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Pasażerowie samotni</strong> — łatwiej znaleźć 1 miejsce niż 4 dla rodziny</span>
              </li>
            </ul>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                Zabronione kryteria!
              </p>
              <p className="text-gray-700 leading-relaxed mb-3">
                Wizz Air <strong>NIE MOŻE</strong> wybrać Cię ze względu na:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Płeć, wiek, narodowość, pochodzenie etniczne</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Niepełnosprawność (chyba że potrzeby medyczne uniemożliwiają lot)</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                  <span>Wygląd, ubiór, język którym mówisz</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-purple-600" />
              Voucher czy gotówka — Twój wybór!
            </h2>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Pamiętaj:</p>
              <p className="text-gray-700 leading-relaxed">
                Wizz Air <strong>nie może Cię zmusić do przyjęcia vouchera</strong>. Masz <strong>prawo wymagać gotówki</strong> (przelewem) zgodnie z rozporządzeniem WE 261/2004.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Jeśli Wizz Air odmawia wypłaty gotówki — <strong>odmów vouchera na piśmie</strong> i złóż reklamację. 91% pasażerów którzy domagają się gotówki ostatecznie ją otrzymuje.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nie daj się zmusić do vouchera!
              </h3>
              <div className="text-center">
                <a
                  href="https://claimwinger.com/pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
                >
                  Wymuś wypłatę gotówki przez ClaimWinger
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="text-sm text-gray-600 mt-4">✓ No win, no fee ✓ 91% skuteczności ✓ Bez ryzyka</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              FAQ — Najczęstsze pytania o overbooking Wizz Air
            </h2>

            <div className="space-y-4 mb-12">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy mogę odmówić lotu zastępczego i wymagać tylko zwrotu?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  TAK! Masz prawo wybrać <strong>tylko zwrot pełnej ceny biletu</strong> i zrezygnować z podróży. Wizz Air musi zwrócić pieniądze w ciągu 7 dni. <strong>Odszkodowanie 250-600 € należy Ci się tak czy tak</strong>, niezależnie od wyboru.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Co jeśli Wizz Air zaproponuje mi upgrade do wyższej klasy?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  Jeśli Wizz Air oferuje Ci upgrade do wyższej klasy (np. z economy do business) jako alternatywę — <strong>możesz przyjąć bez utraty prawa do odszkodowania</strong>. Upgrade nie zastępuje odszkodowania 250-600 €, należy Ci się obie rzeczy!
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy muszę podpisać oświadczenie Wizz Air na lotnisku?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>NIE podpisuj</strong> oświadczeń które mówią "rezygnuję z dalszych roszczeń" lub "przyjmuję voucher jako pełną rekompensatę". Możesz podpisać tylko potwierdzenie odbioru vouchera/gotówki, ale <strong>dopisz "bez rezygnacji z praw wynikających z WE 261/2004"</strong>.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Co jeśli lecę z rodziną i Wizz Air chce wpuścić tylko część osób?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  Wizz Air powinien <strong>starać się nie rozdzielać rodzin</strong>, szczególnie gdy lecisz z małymi dziećmi. Możesz <strong>odmówić rozdzielenia</strong> i wymagać aby wszyscy lecieli tym samym lotem zastępczym. Odszkodowanie należy się każdemu pasażerowi osobno (jeśli rodzina 4 osobowa, to 4 × 250-400 € = 1000-1600 € łącznie!).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy dostanę odszkodowanie jeśli sam zgłoszę się jako ochotnik?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  Jeśli <strong>dobrowolnie oddasz miejsce</strong> jako ochotnik (Wizz Air ogłasza szukanie ochotników), wtedy <strong>nie dostaniesz ustawowego odszkodowania 250-600 €</strong>, ale <strong>Wizz Air zaproponuje Ci rekompensatę</strong> (często wyższą: np. 300-500 € voucher + hotel + lot następnego dnia). Możesz negocjować warunki przed zgodą!
                </p>
              </details>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Artykuły powiązane
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Link href="/blog/wizz-air-odmowil-odszkodowania" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air odmówił odszkodowania — co zrobić?</h3>
                <p className="text-gray-600 text-sm">76% pasażerów którzy walczą ostatecznie wygrywa. Sprawdzone metody odzyskania odszkodowania.</p>
              </Link>
              <Link href="/blog/wizz-air-voucher-zamiast-gotowki" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air voucher zamiast gotówki — jak wymusić wypłatę?</h3>
                <p className="text-gray-600 text-sm">Prawny przewodnik odmowy vouchera i wymuszenia gotówki.</p>
              </Link>
            </div>
          </div>

          <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Wizz Air odmówił Ci wejścia na pokład?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Sprawdź ile odszkodowania Ci się należy (250-600 €) za 2 minuty!
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Bezpłatna weryfikacja roszczenia
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}
