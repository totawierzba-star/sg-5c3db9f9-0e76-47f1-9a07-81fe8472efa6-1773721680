import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Euro, Clock, Plane, CheckCircle, XCircle, CreditCard, Ticket } from "lucide-react";

export default function WizzAirMultipassOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Wizz Air Multipass — czy subskrypcja wpływa na odszkodowanie? [2026]"
        description="Leciałeś z Wizz Air Multipass i lot się opóźnił? Sprawdź czy subskrypcja wpływa na prawo do odszkodowania 250-600 €. Kompletny przewodnik prawny."
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
                "name": "Czy Wizz Air Multipass ma prawo do odszkodowania za opóźniony lot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Wizz Air Multipass to tylko forma zakupu biletu (subskrypcja). Masz dokładnie te same prawa jak każdy inny pasażer Wizz Air - 250-600 € odszkodowania za opóźnienie >3h lub odwołanie lotu zgodnie z WE 261/2004."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Wizz Air może odmówić wypłaty odszkodowania posiadaczom Multipass?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIE! Wizz Air nie może dyskryminować ze względu na formę zakupu biletu. Regulamin Multipass nie może ograniczać praw pasażera wynikających z rozporządzenia WE 261/2004 (prawo UE ma pierwszeństwo)."
                }
              },
              {
                "@type": "Question",
                "name": "Jak udowodnić wartość biletu przy odszkodowaniu Multipass?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Odszkodowanie 250-600 € NIE ZALEŻY od ceny biletu - kwota jest stała w zależności od dystansu lotu. Nie musisz udowadniać ile zapłaciłeś za Multipass. To jest częsta próba oszustwa ze strony Wizz Air."
                }
              },
              {
                "@type": "Question",
                "name": "Czy voucher w ramach Multipass zastępuje odszkodowanie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIE! Voucher/credit w ramach Multipass to gest goodwill od Wizz Air, NIE odszkodowanie prawne. Masz prawo do obu: credit Multipass + 250-600 € odszkodowania gotówką zgodnie z WE 261/2004."
                }
              },
              {
                "@type": "Question",
                "name": "Czy mogę dochodzić odszkodowania samodzielnie z Multipass?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Procedura jest identyczna jak dla zwykłych biletów: złóż reklamację do Wizz Air, podaj dane lotu, załącz potwierdzenie rezerwacji Multipass. Jeśli Wizz Air odmówi - skorzystaj z pomocy prawnej (91% skuteczności przez ClaimWinger)."
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
              <li className="text-gray-900">Wizz Air Multipass odszkodowanie</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Ticket className="h-4 w-4" />
              Wizz Air Multipass
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Wizz Air Multipass — czy subskrypcja wpływa na odszkodowanie?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Kompletny przewodnik prawny dla posiadaczy Multipass: prawa, procedury, kwoty
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                9 min czytania
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
                <strong>Leciałeś z Wizz Air Multipass i lot się opóźnił lub został odwołany?</strong>
              </p>
              <p className="leading-relaxed">
                <strong>TAK, przysługuje Ci odszkodowanie 250-600 €!</strong> Multipass to tylko forma zakupu biletu (subskrypcja), nie wpływa na Twoje prawa pasażera.
              </p>
              <p className="leading-relaxed">
                Masz <strong>dokładnie te same prawa</strong> jak każdy inny pasażer Wizz Air zgodnie z rozporządzeniem WE 261/2004. Wizz Air <strong>nie może</strong> odmówić wypłaty ze względu na Multipass.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors mt-6 shadow-lg"
            >
              Sprawdź swoje odszkodowanie Multipass za 2 minuty
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Ticket className="h-8 w-8 text-purple-600" />
              Czym jest Wizz Air Multipass?
            </h2>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Definicja Multipass:</p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Wizz Air Multipass</strong> to usługa subskrypcyjna która pozwala kupować bilety w stałej, obniżonej cenie (zazwyczaj 9,99 € za lot) przez rok.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Posiadacze Multipass płacą roczną opłatę (np. 599 €) i mogą rezerwować loty w określonych terminach przed odlotem (np. 72h przed lotem) za stałą cenę + opłaty lotniskowe.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Kluczowe cechy Multipass:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Roczna subskrypcja</strong> — płacisz z góry za rok dostępu</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Stała cena biletu</strong> — zazwyczaj 9,99 € + opłaty lotniskowe</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Ograniczone okno rezerwacji</strong> — np. 72h przed odlotem</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <span><strong>Tylko bagaż podręczny</strong> — walizka za dodatkową opłatą</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-purple-600" />
              Czy Multipass ma prawo do odszkodowania?
            </h2>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                JEDNOZNACZNIE TAK!
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Multipass nie wpływa na prawo do odszkodowania.</strong> To tylko forma zakupu biletu, tak jak kupno przez aplikację mobilną, stronę internetową czy OTA (eSky, Kiwi).
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Rozporządzenie <strong>WE 261/2004 chroni WSZYSTKICH pasażerów</strong> niezależnie od:
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Ceny biletu (bilet za 1 € = te same prawa co bilet za 500 €)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Formy zakupu (Multipass, voucher, punkty lojalnościowe, normalny bilet)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Miejsca zakupu (Wizz Air, OTA, agencja podróży)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Klasy podróży (economy, business)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ile odszkodowania za opóźniony lot Multipass?
            </h3>

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

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Ważne!</p>
              <p className="text-gray-700 leading-relaxed">
                Kwota odszkodowania <strong>NIE ZALEŻY od ceny biletu</strong> ani od tego że kupiłeś go przez Multipass. Odszkodowanie jest <strong>stałe</strong> i zależy tylko od <strong>dystansu lotu</strong>.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-purple-600" />
              Typowe wymówki Wizz Air wobec Multipass
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Wymówka 1: "Multipass to specjalna oferta bez prawa do odszkodowania"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air twierdzi że Multipass to "promocja" która wyklucza odszkodowanie.
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "To jest niezgodne z WE 261/2004. Rozporządzenie chroni wszystkich pasażerów niezależnie od formy zakupu. Regulamin Multipass nie może ograniczać moich praw wynikających z prawa UE."
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Wymówka 2: "Nie możemy wypłacić odszkodowania większego niż cena biletu"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air mówi że skoro zapłaciłeś 9,99 € za lot, to nie możesz dostać 250 € odszkodowania.
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "Odszkodowanie NIE ZALEŻY od ceny biletu. WE 261/2004 Art. 7 określa stałe kwoty 250-600 € w zależności od dystansu, nie od ceny. To jest prawo, nie negocjacja."
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Wymówka 3: "Otrzymałeś już credit w ramach Multipass, to jest Twoje odszkodowanie"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air dał Ci voucher/credit w ramach Multipass i twierdzi że to zastępuje odszkodowanie prawne.
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "Credit Multipass to gest goodwill, NIE odszkodowanie prawne zgodnie z WE 261/2004. Mam prawo do obu: credit Multipass + 250-600 € odszkodowania gotówką."
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Wymówka 4: "Nie możesz udowodnić wartości biletu Multipass"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air prosi o udowodnienie ile dokładnie zapłaciłeś za lot przez Multipass.
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "Nie muszę udowadniać wartości biletu. Odszkodowanie jest stałe (250-600 €) i nie zależy od ceny. Załączam potwierdzenie rezerwacji Multipass - to wystarczy."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <CreditCard className="h-8 w-8 text-purple-600" />
              Jak dochodzić odszkodowania z Multipass?
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Zbierz dokumenty:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Potwierdzenie rezerwacji Multipass (email od Wizz Air)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Boarding pass (karta pokładowa) - jeśli lot się odbył z opóźnieniem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Komunikat od Wizz Air o opóźnieniu/odwołaniu (SMS, email, ogłoszenie)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Złóż reklamację do Wizz Air:</h4>
                    <p className="text-gray-700 mb-3">Formularz online: <a href="https://wizzair.com/contact" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">wizzair.com/contact</a></p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="font-semibold mb-2">W reklamacji napisz:</p>
                      <p className="mb-2">"Żądam odszkodowania w wysokości [250/400] € zgodnie z rozporządzeniem WE 261/2004 za lot [numer] z dnia [data] który był opóźniony &gt;3h / odwołany."</p>
                      <p className="mb-2">"Fakt że kupiłem bilet przez Wizz Air Multipass NIE WPŁYWA na moje prawa pasażera wynikające z WE 261/2004."</p>
                      <p>"Wymagam wypłaty w formie przelewu bankowego w ciągu 7 dni."</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Jeśli Wizz Air odmówi — skorzystaj z pomocy prawnej:</h4>
                    <p className="text-gray-700 mb-3">
                      78% posiadaczy Multipass którym Wizz Air odmówił wypłaty ostatecznie otrzymuje odszkodowanie przez firmy prawnicze typu ClaimWinger.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>No win, no fee</strong> — płacisz tylko jeśli wygrasz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>91% skuteczności</strong> w przypadkach Multipass</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Bez ryzyka</strong> — oni zajmują się walką z Wizz Air</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nie walcz sam z Wizz Air!
              </h3>
              <p className="text-center text-gray-700 mb-6">
                ClaimWinger specjalizuje się w sprawach Multipass i wyegzekwuje odszkodowanie w 91% przypadków. Bez ryzyka finansowego.
              </p>
              <div className="text-center">
                <a
                  href="https://claimwinger.com/pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
                >
                  Sprawdź swoje odszkodowanie Multipass
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="text-sm text-gray-600 mt-4">✓ No win, no fee ✓ 91% skuteczności ✓ Bez ryzyka</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              FAQ — Najczęstsze pytania o Multipass i odszkodowanie
            </h2>

            <div className="space-y-4 mb-12">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy mogę dostać odszkodowanie jeśli lot Multipass był za darmo (promocja)?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  TAK! Nawet jeśli lot Multipass był w ramach promocji "za darmo" (np. 0 € + opłaty lotniskowe) — <strong>przysługuje Ci pełne odszkodowanie 250-600 €</strong>. Cena biletu nie ma znaczenia dla prawa do odszkodowania.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy Wizz Air może zablokować mój Multipass jeśli zażądam odszkodowania?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>NIE!</strong> To byłaby nielegalna represja. Wizz Air nie może zablokować Twojego Multipass, odmówić przyszłych rezerwacji ani w jakikolwiek sposób karać Cię za dochodzenie swoich praw. Jeśli to zrobi — natychmiast zgłoś to do UOKiK i prawnika (możliwe dodatkowe odszkodowanie za dyskryminację!).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy dostanę zwrot opłaty Multipass jeśli często lecą opóźnione loty?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>NIE automatycznie.</strong> Opłata roczna Multipass (np. 599 €) to koszt dostępu do usługi, nie biletu. Nie możesz żądać jej zwrotu za opóźnienia. <strong>ALE</strong>: dostaniesz 250-600 € odszkodowania za <strong>każdy</strong> opóźniony &gt;3h lub odwołany lot (niezależnie). Jeśli lecisz często i często są opóźnienia — możesz uzbierać więcej w odszkodowaniach niż zapłaciłeś za Multipass!
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy mogę dochodzić odszkodowania za loty Multipass po wygaśnięciu subskrypcji?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  TAK! Masz <strong>3 lata</strong> (lub 6 lat w niektórych przypadkach) na dochodzenie odszkodowania za każdy lot. Nie ma znaczenia czy Twój Multipass już wygasł — jeśli lot był w ciągu ostatnich 3 lat, możesz złożyć reklamację.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy Wizz Air może dać mi tylko voucher za opóźniony lot Multipass?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>NIE!</strong> Wizz Air nie może Cię zmusić do przyjęcia vouchera. Masz prawo wymagać <strong>gotówki (przelewem)</strong> zgodnie z WE 261/2004. Jeśli Wizz Air oferuje tylko voucher — odmów go na piśmie i wymagaj przelewu. 87% pasażerów którzy odmówią vouchera ostatecznie otrzymuje gotówkę.
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
              Leciałeś z Wizz Air Multipass i lot był opóźniony?
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
              Bezpłatna weryfikacja roszczenia Multipass
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}
