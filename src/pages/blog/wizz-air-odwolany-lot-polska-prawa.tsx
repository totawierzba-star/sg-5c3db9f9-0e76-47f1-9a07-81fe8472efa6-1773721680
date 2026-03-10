import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertCircle, Plane, Clock, Euro, FileText, Scale, Phone } from "lucide-react";

export default function WizzAirOdwolanyLotPolskaPrawa() {
  return (
    <Layout>
      <SEO
        title="Wizz Air odwołany lot z Polski — prawa pasażera krok po kroku 2026"
        description="Kompleksowy przewodnik: co robić gdy Wizz Air odwołał lot z Polski. Zwrot vs odszkodowanie, dokumenty, terminy i procedura reklamacji."
        url="https://problemlot.pl/blog/wizz-air-odwolany-lot-polska-prawa"
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
                "name": "Ile odszkodowania za odwołany lot Wizz Air z Polski?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Odszkodowanie za odwołany lot Wizz Air wynosi 250 € (do 1500 km), 400 € (1500-3500 km) lub 600 € (powyżej 3500 km), jeśli odwołanie nastąpiło krócej niż 14 dni przed planowanym odlotem i Wizz Air nie zaproponował Ci alternatywnego lotu."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Wizz Air musi zwrócić pieniądze za odwołany lot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK, zawsze masz prawo wyboru: pełny zwrot ceny biletu (w ciągu 7 dni) lub lot zastępczy na najbliższy możliwy termin. To dwa niezależne prawa – zwrot to jedno, odszkodowanie (250-600 €) to drugie."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długo mam na złożenie reklamacji do Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "W Polsce roszczenia przedawniają się po 6 latach od daty odwołania lotu. Wizz Air ma obowiązek rozpatrzyć reklamację w ciągu 30 dni, ale w praktyce odpowiadają w 45-90 dni."
                }
              },
              {
                "@type": "Question",
                "name": "Co jeśli Wizz Air odmówi odszkodowania twierdząc że to nadzwyczajna okoliczność?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wizz Air często nadużywa wymówki 'nadzwyczajne okoliczności'. Jeśli otrzymasz odmowę powołującą się na usterki techniczne, warunki pogodowe czy problemy operacyjne – zakwestionuj to. W 80% przypadków odmowy są bezzasadne."
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
              <li className="text-gray-900 font-medium">Wizz Air odwołany lot</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="h-4 w-4" />
              Wizz Air
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Wizz Air odwołany lot z Polski — prawa pasażera krok po kroku
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Kompleksowy przewodnik: zwrot, odszkodowanie, dokumenty i skuteczna reklamacja
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Czytasz 8 min
              </span>
              <span>•</span>
              <span>Aktualizacja: 10.03.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <div className="space-y-3 text-lg">
              <p className="leading-relaxed">
                <strong>Tak, masz prawo do odszkodowania 250-600 €</strong> jeśli Wizz Air odwołał lot krócej niż 14 dni przed odlotem i nie zaoferował Ci alternatywnego lotu w odpowiednim czasie.
              </p>
              <p className="leading-relaxed">
                <strong>Dodatkowo zawsze masz prawo do:</strong> pełnego zwrotu ceny biletu (w 7 dni) lub lotu zastępczego + opieki na lotnisku (posiłki, napoje, nocleg jeśli konieczny).
              </p>
              <p className="leading-relaxed">
                <strong>Ważne:</strong> Zwrot i odszkodowanie to dwa niezależne prawa – możesz dostać oba!
              </p>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Euro className="h-8 w-8 text-purple-600" />
              Twoje prawa przy odwołanym locie Wizz Air
            </h2>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                1️⃣ Prawo do wyboru: zwrot lub lot zastępczy
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>To Twój wybór, nie lini lotniczej!</strong> Wizz Air musi zaoferować:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Pełny zwrot</strong> ceny biletu (w ciągu 7 dni) – bez względu na to czy kupiłeś bilet promocyjny czy standardowy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Lot zastępczy</strong> na najbliższy możliwy termin (w tej samej klasie) – Wizz Air musi poszukać alternatyw, nawet u innych przewoźników</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Lot w późniejszym terminie</strong> odpowiadający Twoim planom (jeśli chcesz)</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                2️⃣ Odszkodowanie pieniężne 250-600 €
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>To dodatkowe prawo!</strong> Niezależnie od zwrotu/lotu zastępczego, możesz dostać:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-2">250 €</div>
                  <div className="text-sm text-gray-600">Loty do 1500 km</div>
                  <div className="text-xs text-gray-500 mt-1">np. Katowice–Londyn</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-2">400 €</div>
                  <div className="text-sm text-gray-600">Loty 1500-3500 km</div>
                  <div className="text-xs text-gray-500 mt-1">np. Warszawa–Dubaj</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-700 mb-2">600 €</div>
                  <div className="text-sm text-gray-600">Loty powyżej 3500 km</div>
                  <div className="text-xs text-gray-500 mt-1">np. Warszawa–Abu Dhabi</div>
                </div>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Wyjątki:</strong> Nie dostaniesz odszkodowania jeśli:
                </p>
                <ul className="text-sm text-gray-700 mt-2 space-y-1 ml-4">
                  <li>• Wizz Air poinformował Cię o odwołaniu <strong>14+ dni przed odlotem</strong></li>
                  <li>• Zaproponował alternatywny lot z wyjazdem <strong>do 1h wcześniej</strong> i przybyciem <strong>do 2h później</strong> niż planowano</li>
                  <li>• Udowodnił <strong>nadzwyczajne okoliczności</strong> (bardzo rzadkie!)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-purple-600 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                3️⃣ Prawo do opieki na lotnisku
              </h3>
              <p className="text-gray-700 mb-4">
                <strong>Natychmiast, gdy dowiesz się o odwołaniu,</strong> Wizz Air musi zapewnić:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Posiłki i napoje</strong> (adekwatne do czasu oczekiwania)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>2 bezpłatne rozmowy telefoniczne</strong> lub emaile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Nocleg w hotelu</strong> + transport jeśli lot zastępczy jest następnego dnia</span>
                </li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4">
                <p className="text-sm text-gray-700">
                  <strong>💡 Ważne:</strong> Jeśli Wizz Air nie zapewnił opieki, <strong>zachowaj paragony!</strong> Możesz doliczyć te koszty do reklamacji (rozsądne wydatki).
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2 mt-12">
              <FileText className="h-8 w-8 text-purple-600" />
              Procedura krok po kroku: jak dochodzić swoich praw
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                  Zbierz dokumenty (na lotnisku lub z domu)
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Musisz mieć:</strong>
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Potwierdzenie rezerwacji</strong> (email od Wizz Air lub booking confirmation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Karty pokładowe</strong> (jeśli lot zastępczy) lub <strong>potwierdzenie odwołania</strong> od Wizz Air</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Zdjęcia tablicy odlotów</strong> pokazujące status "Cancelled"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Paragony</strong> za posiłki/nocleg (jeśli Wizz Air nie zapewnił)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                  Wyślij reklamację do Wizz Air
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Dwa sposoby:</strong>
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="font-bold text-gray-900 mb-2">📧 Formularz online (szybsze):</p>
                    <p className="text-sm text-gray-700 mb-2">
                      Wizz Air → Contact Us → Flight Disruption → Claim for Compensation
                    </p>
                    <p className="text-xs text-gray-500">
                      Uwaga: System często próbuje Cię zniechęcić – ignoruj komunikaty "nie przysługuje odszkodowanie" i wypełnij formularz do końca.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <p className="font-bold text-gray-900 mb-2">✉️ Email tradycyjny:</p>
                    <p className="text-sm text-gray-700 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">customerrelations@wizzair.com</code>
                    </p>
                    <p className="text-xs text-gray-500">
                      Wyślij skan dokumentów + opis sytuacji. Zachowaj kopię emaila!
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>⏱️ Termin odpowiedzi:</strong> Wizz Air ma <strong>30 dni</strong> na odpowiedź (rozporządzenie WE 261/2004). W praktyce odpowiadają w <strong>45-90 dni</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                  Co zrobić jeśli Wizz Air odmówi?
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>80% odmów Wizz Air jest bezzasadnych.</strong> Typowe wymówki:
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-3">
                    <p className="text-sm font-bold text-gray-900">❌ "Usterka techniczna"</p>
                    <p className="text-xs text-gray-700 mt-1">
                      Niewystarczające! Wizz Air musi udowodnić, że usterka była <strong>nieunikniona mimo rutynowej konserwacji</strong>. Zwykłe awarie = nie nadzwyczajna okoliczność.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-3">
                    <p className="text-sm font-bold text-gray-900">❌ "Problemy operacyjne"</p>
                    <p className="text-xs text-gray-700 mt-1">
                      To nie jest nadzwyczajna okoliczność. Brak załogi, opóźnienia innych lotów, rotacja samolotów = odpowiedzialność Wizz Air.
                    </p>
                  </div>
                  <div className="bg-red-50 border-l-4 border-red-500 p-3">
                    <p className="text-sm font-bold text-gray-900">❌ "Warunki pogodowe"</p>
                    <p className="text-xs text-gray-700 mt-1">
                      Weryfikuj! Jeśli inne loty z tego lotniska leciały = nie była to nadzwyczajna okoliczność.
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 font-bold">
                  Jeśli otrzymasz taką odmowę → <strong>NIE REZYGNUJ!</strong>
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                  Opcje po odmowie Wizz Air
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-purple-600">
                    <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                      Opcja A: Firma odszkodowawcza (najszybsze, no cure no pay)
                    </h4>
                    <p className="text-sm text-gray-700 mb-3">
                      Przekaż sprawę specjalistom. Prowizja tylko w razie sukcesu (20-35% odszkodowania).
                    </p>
                    <a 
                      href="https://claimwinger.com/pl/odwolany-lot"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    >
                      Sprawdź odszkodowanie ClaimWinger
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Opcja B: Pozew sądowy (samodzielnie)</h4>
                    <p className="text-sm text-gray-700">
                      Możesz pozwać Wizz Air w polskim sądzie (europejskie postępowanie w sprawach drobnych roszczeń). 
                      Koszt: ~100 zł. Czas: 6-18 miesięcy.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-2">Opcja C: Urząd Lotnictwa Cywilnego</h4>
                    <p className="text-sm text-gray-700 mb-2">
                      Złóż skargę do ULC: <code className="bg-gray-100 px-2 py-1 rounded text-xs">prawa.pasazera@ulc.gov.pl</code>
                    </p>
                    <p className="text-xs text-gray-500">
                      ULC nie wymusza wypłaty, ale może ukarać linię. Przydatne jako dodatkowa presja.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2 mt-12">
              <AlertCircle className="h-8 w-8 text-purple-600" />
              Najczęstsze błędy (i jak ich uniknąć)
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">❌ Błąd #1: Rezygnacja po odmowie Wizz Air</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Wizz Air celowo zniechęca.</strong> 80% odmów to standardowe szablony. Nie rezygnuj po pierwszej odmowie!
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">❌ Błąd #2: Akceptacja vouchera zamiast gotówki</h3>
                <p className="text-gray-700 text-sm">
                  <strong>Masz prawo do gotówki!</strong> Nie daj się przekonać do vouchera – ma ograniczoną ważność i można go wykorzystać tylko u Wizz Air.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">❌ Błąd #3: Brak dokumentacji</h3>
                <p className="text-gray-700 text-sm">
                  Rób <strong>zdjęcia tablicy odlotów, zachowaj emaile, zbieraj paragony.</strong> Bez dowodów trudniej wygrać sprawę.
                </p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">❌ Błąd #4: Przedawnienie roszczenia</h3>
                <p className="text-gray-700 text-sm">
                  W Polsce masz <strong>6 lat</strong> na złożenie reklamacji. Nie czekaj do ostatniej chwili!
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">FAQ — najczęstsze pytania</h2>
            <div className="space-y-4">
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Czy mogę dostać zarówno zwrot biletu jak i odszkodowanie?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>TAK!</strong> To dwa niezależne prawa. Zwrot = cena biletu z powrotem. Odszkodowanie = kara dla linii (250-600 €) za niedogodności.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Ile czasu Wizz Air ma na zwrot pieniędzy za bilet?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>7 dni</strong> od złożenia wniosku (rozporządzenie WE 261/2004). Jeśli nie otrzymałeś zwrotu w tym terminie, napisz ponownie z ostrzeżeniem o skarżedo ULC.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Co jeśli kupiłem bilet przez biuro podróży lub OTA (Booking, eDreams)?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>Reklamację składasz do Wizz Air</strong>, nie do pośrednika. OTA tylko sprzedało bilet – odpowiedzialność za lot ponosi przewoźnik.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Czy pandemia COVID-19 to nadzwyczajna okoliczność?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>Już NIE.</strong> Po 2022 roku COVID przestał być wymówką. Jeśli Wizz Air odwołał lot powołując się na pandemię w 2024-2026 = bezpodstawna odmowa.
                </p>
              </details>
              <details className="bg-white/10 backdrop-blur-sm rounded-lg p-4 cursor-pointer">
                <summary className="font-bold text-lg">
                  Czy bilet promocyjny (BASIC) ma takie same prawa?
                </summary>
                <p className="mt-3 text-white/90 leading-relaxed">
                  <strong>TAK!</strong> Prawa pasażera (WE 261/2004) obowiązują niezależnie od ceny biletu. Nawet jeśli zapłaciłeś 50 zł, masz prawo do 250-600 € odszkodowania.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Wizz Air odwołał Twój lot? Sprawdź odszkodowanie!
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              ClaimWinger pomoże wyegzekwować 250-600 € odszkodowania. Prowizja tylko w razie sukcesu.
            </p>
            <a 
              href="https://claimwinger.com/pl/odwolany-lot"
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