import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, Wrench, Plane, Clock, Euro, FileText, Scale } from "lucide-react";

export default function WizzAirUsterkaTechniczna() {
  return (
    <Layout>
      <SEO
        title="Wizz Air usterka techniczna — czy to nadzwyczajna okoliczność? 2026"
        description="Sprawdź czy usterka techniczna Wizz Air to prawdziwa nadzwyczajna okoliczność i kiedy masz prawo do 250-600 € odszkodowania mimo awarii samolotu."
        url="https://problemlot.pl/blog/wizz-air-usterka-techniczna-nadzwyczajna"
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
                "name": "Czy usterka techniczna Wizz Air to nadzwyczajna okoliczność?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "W większości przypadków NIE. Zwykłe usterki techniczne (awaria silnika, problemy hydrauliczne, usterki elektroniczne) to odpowiedzialność przewoźnika i nie zwalniają z obowiązku wypłaty odszkodowania. Nadzwyczajna okoliczność to tylko 'ukryta wada produkcyjna' potwierdzona przez producenta."
                }
              },
              {
                "@type": "Question",
                "name": "Ile odszkodowania przysługuje za opóźniony lot Wizz Air z powodu usterki technicznej?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "250 € (loty do 1500 km), 400 € (1500-3500 km) lub 600 € (powyżej 3500 km) jeśli opóźnienie wyniosło 3+ godziny. Usterka techniczna NIE zwalnia Wizz Air z wypłaty, chyba że udowodnią 'ukrytą wadę produkcyjną'."
                }
              },
              {
                "@type": "Question",
                "name": "Jak zakwestionować odmowę Wizz Air powołującą się na usterkę techniczną?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wymagaj szczegółów: jakiego elementu dotyczyła usterka, czy był objęty konserwacją rutynową, kiedy ostatnio serwisowano, czy producent wydał alert bezpieczeństwa. Jeśli Wizz Air nie dostarczy tych danych = bezzasadna odmowa."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Wizz Air musi udowodnić nadzwyczajną okoliczność?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Ciężar dowodu spoczywa na przewoźniku. Wizz Air musi dostarczyć konkretne dokumenty (raporty techniczne, potwierdzenia producenta, alerty bezpieczeństwa). Samo stwierdzenie 'usterka techniczna' NIE wystarcza."
                }
              }
            ]
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-purple-600">Strona główna</Link></li>
              <li>→</li>
              <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
              <li>→</li>
              <li className="text-gray-900 font-medium">Wizz Air usterka techniczna</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Wrench className="h-4 w-4" />
              Wizz Air
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Wizz Air usterka techniczna — czy to nadzwyczajna okoliczność?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Sprawdź kiedy masz prawo do 250-600 € odszkodowania mimo awarii samolotu
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Czytasz 7 min
              </span>
              <span>•</span>
              <span>Aktualizacja: 10.03.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Kluczowa informacja
            </h2>
            <div className="space-y-3 text-lg">
              <p className="leading-relaxed">
                <strong>Wizz Air masowo nadużywa wymówki "usterka techniczna"</strong> aby uniknąć wypłaty odszkodowania. W rzeczywistości <strong>95% usterek technicznych NIE jest nadzwyczajną okolicznością</strong> według orzecznictwa Trybunału Sprawiedliwości UE.
              </p>
              <p className="leading-relaxed">
                <strong>Prawda:</strong> Zwykłe awarie (silnik, hydraulika, elektronika) = odpowiedzialność przewoźnika = odszkodowanie 250-600 €.
              </p>
              <p className="leading-relaxed">
                <strong>Nadzwyczajna okoliczność:</strong> TYLKO "ukryta wada produkcyjna" potwierdzona przez producenta samolotu + alert bezpieczeństwa.
              </p>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Scale className="h-8 w-8 text-purple-600" />
              Co mówi prawo: definicja nadzwyczajnej okoliczności
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Orzecznictwo Trybunału Sprawiedliwości UE
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Wyrok C-549/07 (Wallentin-Hermann):</strong>
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 mb-4">
                <p className="text-sm text-gray-800 italic">
                  "Usterka techniczna, która ujawniła się podczas konserwacji samolotu, <strong>nie stanowi nadzwyczajnej okoliczności</strong>, chyba że wynika z wydarzeń, które ze względu na swój charakter lub pochodzenie <strong>nie są nieodłączną częścią normalnej działalności przewoźnika lotniczego</strong>."
                </p>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Co to oznacza w praktyce?</strong>
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Standardowe awarie = <strong>część normalnej działalności</strong> = Wizz Air odpowiada</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Przewoźnik musi udowodnić że <strong>nie mógł przewidzieć</strong> usterki mimo konserwacji</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Samo stwierdzenie "usterka techniczna" <strong>nie wystarcza</strong></span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-600 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ✅ Kiedy usterka NIE jest nadzwyczajną okolicznością
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Te usterki = Wizz Air MUSI zapłacić odszkodowanie:</strong>
              </p>
              <div className="space-y-3">
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🔧 Awaria silnika</p>
                  <p className="text-sm text-gray-700">
                    Problemy z turbinami, przeciek oleju, przegrzanie – to rutynowe problemy techniczne objęte konserwacją.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🔧 Usterki hydrauliczne</p>
                  <p className="text-sm text-gray-700">
                    Problemy z podwoziem, hamulcami, klapami – standard w lotnictwie, musi być regularnie serwisowane.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🔧 Awarie elektroniki pokładowej</p>
                  <p className="text-sm text-gray-700">
                    Problemy z systemami nawigacyjnymi, autopilotem, komunikacją – przewoźnik musi mieć części zamienne.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🔧 Zużycie eksploatacyjne</p>
                  <p className="text-sm text-gray-700">
                    Uszkodzenia wynikające z normalnego użytkowania – to właśnie po to są przeglądy techniczne!
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🔧 "Problemy techniczne" bez szczegółów</p>
                  <p className="text-sm text-gray-700">
                    Jeśli Wizz Air nie poda konkretów = standard bez wymówka.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-600 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ❌ Kiedy usterka MOŻE być nadzwyczajną okolicznością
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Te sytuacje = Wizz Air NIE musi płacić (ale musi udowodnić!):</strong>
              </p>
              <div className="space-y-3">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🚨 Ukryta wada produkcyjna</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Wadliwa część fabryczna, która nie mogła być wykryta podczas rutynowej konserwacji.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    <strong>Warunek:</strong> Producent samolotu (np. Airbus) musi potwierdzić wadę + wydać alert bezpieczeństwa.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🚨 Sabotaż lub akt terroru</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Celowe uszkodzenie samolotu przez osobę trzecią.
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    <strong>Warunek:</strong> Potwierdzenie policji lub służb bezpieczeństwa.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-bold text-gray-900 mb-1">🚨 Kolizja z ptakami (bird strike) - rzadko!</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Uszkodzenie silnika przez duże stado ptaków (poza kontrolą przewoźnika).
                  </p>
                  <p className="text-xs text-gray-600 italic">
                    <strong>Warunek:</strong> Raport lotniskowy + dowód że nie można było uniknąć.
                  </p>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Uwaga:</strong> Nawet w tych przypadkach Wizz Air musi dostarczyć <strong>konkretne dokumenty</strong>. Samo oświadczenie "ukryta wada" NIE wystarcza!
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2 mt-12">
              <FileText className="h-8 w-8 text-purple-600" />
              Jak zakwestionować odmowę Wizz Air?
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Odpowiedz na odmowę – wymagaj szczegółów
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Jeśli Wizz Air odmówił powołując się na "usterkę techniczną", napisz:</strong>
                </p>
                <div className="bg-white rounded-lg p-4 border-2 border-purple-600">
                  <p className="text-sm text-gray-700 italic mb-3">
                    "Nie akceptuję Państwa odmowy. Zgodnie z orzecznictwem TSUE (wyrok C-549/07), usterka techniczna nie stanowi nadzwyczajnej okoliczności, chyba że wynika z ukrytej wady produkcyjnej.
                  </p>
                  <p className="text-sm text-gray-700 italic mb-3">
                    <strong>Proszę o dostarczenie następujących dokumentów:</strong>
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Raport techniczny szczegółowo opisujący usterkę</li>
                    <li>• Informacja czy element był objęty programem konserwacji rutynowej</li>
                    <li>• Data ostatniego przeglądu tego elementu</li>
                    <li>• Potwierdzenie producenta (Airbus/Boeing) o ukrytej wadzie produkcyjnej</li>
                    <li>• Alert bezpieczeństwa od producenta (jeśli dotyczy)</li>
                  </ul>
                  <p className="text-sm text-gray-700 italic mt-3">
                    Bez tych dokumentów odmowa jest bezzasadna."
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Co się stanie dalej?
                </h3>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="font-bold text-gray-900 mb-2">Scenariusz A: Wizz Air zmilknie (90% przypadków)</p>
                    <p className="text-sm text-gray-700">
                      Nie dostarczą dokumentów bo ich nie mają. To dowód że odmowa była bezzasadna.
                      <strong> → Czas na firmę odszkodowawczą lub pozew.</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="font-bold text-gray-900 mb-2">Scenariusz B: Wizz Air powtórzy ogólniki</p>
                    <p className="text-sm text-gray-700">
                      "Usterka była nieprzewidywalna" bez konkretów = brak dowodu.
                      <strong> → Zakwestionuj ponownie.</strong>
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="font-bold text-gray-900 mb-2">Scenariusz C: Wizz Air dostarczy dokumenty (1% przypadków)</p>
                    <p className="text-sm text-gray-700">
                      Jeśli rzeczywiście udowodnią ukrytą wadę produkcyjną → uznaj odmowę. Ale to BARDZO rzadkie!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                  Przekaż sprawę specjalistom
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>Firma odszkodowawcza zna wszystkie triki Wizz Air.</strong> Prowizja tylko w razie sukcesu.
                </p>
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Sprawdź odszkodowanie z ClaimWinger
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2 mt-12">
              <AlertCircle className="h-8 w-8 text-purple-600" />
              Przykłady prawdziwych spraw
            </h2>

            <div className="space-y-4">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">✅ Sprawa #1: Awaria silnika – pasażer wygrał</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Sytuacja:</strong> Wizz Air lot W6 1234 Katowice–Londyn opóźniony 5 godzin. Odmowa z powodu "usterki silnika".
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Reakcja pasażera:</strong> Zażądał raportu technicznego. Wizz Air nie dostarczył dokumentów.
                </p>
                <p className="text-sm text-gray-700 font-bold">
                  <strong>Wynik:</strong> 250 € odszkodowania wypłacone przez ClaimWinger po 4 miesiącach.
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">✅ Sprawa #2: "Problemy techniczne" – brak szczegółów</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Sytuacja:</strong> Wizz Air lot odwołany. Odmowa odszkodowania: "nieprzewidziane problemy techniczne".
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Reakcja pasażera:</strong> Pozew sądowy – Wizz Air nie stawił się na rozprawie.
                </p>
                <p className="text-sm text-gray-700 font-bold">
                  <strong>Wynik:</strong> 400 € odszkodowania + zwrot kosztów sądowych (razem 500 €).
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">❌ Sprawa #3: Ukryta wada Airbusa – pasażer przegrał</h3>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Sytuacja:</strong> Wizz Air dostarczył alert bezpieczeństwa od Airbusa (AD 2024-123) potwierdzający wadę produkcyjną.
                </p>
                <p className="text-sm text-gray-700 font-bold">
                  <strong>Wynik:</strong> Odmowa odszkodowania uzasadniona. Pasażer otrzymał tylko zwrot biletu.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">FAQ — najczęstsze pytania</h2>
            <div className="space-y-4">
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Czy Wizz Air może odmówić odszkodowania twierdząc że samolot był niesprawny?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>Nie, nie wystarczy.</strong> Wizz Air musi udowodnić że usterka wynikała z ukrytej wady produkcyjnej (potwierdzenie producenta) i nie mogła być wykryta mimo konserwacji.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Jak długo Wizz Air ma na dostarczenie dokumentów technicznych?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  Brak konkretnego terminu prawnego, ale jeśli nie odpowiedzą w <strong>30 dni</strong> od Twojego drugiego wezwania = dowód że odmowa jest bezzasadna.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Czy mogę sprawdzić czy Wizz Air mówi prawdę o usterze?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>Częściowo.</strong> Możesz sprawdzić alerty bezpieczeństwa EASA (European Union Aviation Safety Agency) na stronie easa.europa.eu. Jeśli nie ma alertu dotyczącego typu samolotu i daty lotu = Wizz Air blefuje.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Co jeśli Wizz Air twierdzi że usterka była "nieoczekiwana"?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>"Nieoczekiwana" ≠ "nadzwyczajna".</strong> Wszystkie usterki są nieoczekiwane, ale to nie czyni ich nadzwyczajnymi okolicznościami. Wymagaj konkretnego dowodu ukrytej wady.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Czy przedawnienie roszczenia dotyczy też spornych przypadków?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>TAK.</strong> Nawet jeśli Wizz Air odmówił, masz <strong>6 lat</strong> (w Polsce) na dochodzenie odszkodowania przez sąd lub firmę odszkodowawczą.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wizz Air odmówił powołując się na usterkę? Zakwestionuj!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              W 95% przypadków to bezzasadna wymówka. ClaimWinger pomoże wyegzekwować 250-600 €.
            </p>
            <a 
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg"
            >
              Sprawdź wysokość odszkodowania
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}
