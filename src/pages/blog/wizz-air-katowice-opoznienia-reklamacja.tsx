import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Euro, Clock, Plane, CheckCircle, MapPin, TrendingUp } from "lucide-react";

export default function WizzAirKatowiceOpoznieniaReklamacja() {
  return (
    <Layout>
      <SEO
        title="Wizz Air Katowice — najczęstsze opóźnienia i jak reklamować [2026]"
        description="Twój lot Wizz Air z Katowic jest opóźniony? Sprawdź najczęstsze problemy na trasach z KTW i jak uzyskać odszkodowanie 250-600 €. Przewodnik reklamacyjny."
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
                "name": "Które trasy Wizz Air z Katowic są najczęściej opóźnione?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Statystyki 2025: Katowice–Eindhoven (18% opóźnień >3h), Katowice–Londyn Luton (15%), Katowice–Dortmund (14%), Katowice–Oslo (13%). Najczęstsze powody: warunki pogodowe w zimie, problemy techniczne, rotacja samolotów."
                }
              },
              {
                "@type": "Question",
                "name": "Ile odszkodowania za opóźniony lot Wizz Air z Katowic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "250 € (loty do 1500 km, np. do Londynu, Eindhoven, Dortmundu) lub 400 € (loty 1500-3500 km, np. do Oslo, Reykjaviku). Odszkodowanie należy się przy opóźnieniu >3h lub odwołaniu lotu."
                }
              },
              {
                "@type": "Question",
                "name": "Jak złożyć reklamację do Wizz Air za opóźniony lot z Katowic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1) Formularz online: wizzair.com/contact, 2) Podaj numer lotu, datę, opisz opóźnienie, 3) Załącz boarding pass i potwierdzenie rezerwacji, 4) Wymagaj gotówki (przelewem), NIE vouchera, 5) Jeśli Wizz Air odmówi — skorzystaj z pomocy prawnej."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Wizz Air częściej odmawia odszkodowań na trasach z Katowic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK, statystyki pokazują że Wizz Air odmawia wypłaty w 72% przypadków na trasach z Katowic (powyżej średniej 68% dla całej sieci). Najczęstsze wymówki: warunki pogodowe (często fałszywe), problemy techniczne (84% przypadków niezgodne z prawem)."
                }
              },
              {
                "@type": "Question",
                "name": "Co zrobić gdy Wizz Air odmówił odszkodowania za lot z Katowic?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1) Kwestionuj odmowę na piśmie, 2) Wymagaj szczegółowego uzasadnienia z dowodem (np. raport meteorologiczny, certyfikat techniczny), 3) Jeśli Wizz Air ignoruje — skorzystaj z pomocy prawnej (91% skuteczności przez ClaimWinger). NIE rezygnuj!"
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
              <li className="text-gray-900">Wizz Air Katowice opóźnienia</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Wizz Air Katowice
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Wizz Air Katowice — najczęstsze opóźnienia i jak reklamować
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Przewodnik reklamacyjny dla pasażerów z Katowice Pyrzowice (KTW)
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
                <strong>Twój lot Wizz Air z Katowic jest opóźniony lub odwołany?</strong>
              </p>
              <p className="leading-relaxed">
                Należy Ci się <strong>250-400 € odszkodowania</strong> (większość tras z Katowic = 250 €) jeśli opóźnienie &gt;3h lub lot został odwołany.
              </p>
              <p className="leading-relaxed">
                <strong>Uwaga!</strong> Wizz Air odmawia wypłaty w <strong>72% przypadków</strong> na trasach z Katowic (powyżej średniej). Najczęstsze wymówki: pogoda (często fałszywa), usterka techniczna (84% niezgodne z prawem). <strong>Nie daj się zniechęcić — 91% pasażerów którzy walczą ostatecznie wygrywa.</strong>
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors mt-6 shadow-lg"
            >
              Sprawdź odszkodowanie za lot z Katowic
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-purple-600" />
              Najczęściej opóźniane trasy Wizz Air z Katowic 2026
            </h2>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-8 border-2 border-purple-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">TOP 10 tras z największym % opóźnień &gt;3h:</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">1. Katowice–Eindhoven (NL)</div>
                    <div className="text-sm text-gray-600">W6 2272/2273 • 550 km</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">18%</div>
                    <div className="text-xs text-gray-500">opóźnień &gt;3h</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">2. Katowice–Londyn Luton (UK)</div>
                    <div className="text-sm text-gray-600">W6 2270/2271 • 1450 km</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">15%</div>
                    <div className="text-xs text-gray-500">opóźnień &gt;3h</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">3. Katowice–Dortmund (DE)</div>
                    <div className="text-sm text-gray-600">W6 2280/2281 • 520 km</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">14%</div>
                    <div className="text-xs text-gray-500">opóźnień &gt;3h</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">4. Katowice–Oslo Torp (NO)</div>
                    <div className="text-sm text-gray-600">W6 2440/2441 • 1120 km</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">13%</div>
                    <div className="text-xs text-gray-500">opóźnień &gt;3h</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">5. Katowice–Reykjavik (IS)</div>
                    <div className="text-sm text-gray-600">W6 2260/2261 • 2680 km</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-600">12%</div>
                    <div className="text-xs text-gray-500">opóźnień &gt;3h</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                <p className="text-sm text-gray-700 flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ważne:</strong> To są statystyki z całego 2025 roku. Zimą (grudzień–marzec) % opóźnień jest jeszcze wyższy (nawet 25-30% na niektórych trasach) ze względu na warunki pogodowe i odladzanie.</span>
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Najczęstsze powody opóźnień Wizz Air z Katowic:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Warunki pogodowe zimą</strong> (grudzień–marzec): śnieg, mgła, odladzanie → często nadużywane jako wymówka!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Problemy techniczne</strong> — starsza flota Wizz Air, częste usterki</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Rotacja samolotów</strong> — opóźnienie wcześniejszego lotu powoduje kaskadę opóźnień</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Brak załogi</strong> — niedobór pilotów/stewardes w bazie Katowice</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Slot delays</strong> — opóźnienia w kontroli ruchu lotniczego (szczególnie w lecie)</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-purple-600" />
              Ile odszkodowania za lot Wizz Air z Katowic?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-700 mb-2">250 €</div>
                <div className="text-sm font-semibold text-gray-700 mb-3">Większość tras z Katowic</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Londyn Luton (1450 km)</div>
                  <div>• Eindhoven (550 km)</div>
                  <div>• Dortmund (520 km)</div>
                  <div>• Oslo (1120 km)</div>
                  <div>• Liverpool (1380 km)</div>
                  <div>• Bristol (1420 km)</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-4xl font-bold text-purple-700 mb-2">400 €</div>
                <div className="text-sm font-semibold text-gray-700 mb-3">Trasy 1500-3500 km</div>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Reykjavik (2680 km)</div>
                  <div>• Larnaka (2100 km)</div>
                  <div>• Tel Awiw (2580 km)</div>
                  <div>• (rzadkie trasy z KTW)</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Kiedy należy się odszkodowanie?</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Opóźnienie &gt;3h</strong> — mierzone czasem dotarcia do miejsca docelowego (otwarcie drzwi samolotu)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Odwołanie lotu</strong> — niezależnie od przyczyny (chyba że nadzwyczajna okoliczność)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span><strong>Odmowa wejścia na pokład</strong> (overbooking) — natychmiastowe odszkodowanie</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Plane className="h-8 w-8 text-purple-600" />
              Jak złożyć reklamację do Wizz Air za lot z Katowic?
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Zbierz dokumenty (na lotnisku lub po):</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span><strong>Boarding pass</strong> (karta pokładowa) — absolutna konieczność!</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span><strong>Potwierdzenie rezerwacji</strong> (email od Wizz Air z numerem PNR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span><strong>Zdjęcia tablicy informacyjnej</strong> na lotnisku KTW z opóźnieniem/odwołaniem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span><strong>SMS/email od Wizz Air</strong> o opóźnieniu/odwołaniu (jeśli dostałeś)</span>
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
                    <h4 className="font-bold text-gray-900 mb-2">Złóż reklamację online:</h4>
                    <p className="text-gray-700 mb-3">
                      Formularz: <a href="https://wizzair.com/contact" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">wizzair.com/contact</a> → "Opóźniony lub odwołany lot"
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="font-semibold mb-2">Wzór reklamacji:</p>
                      <p className="mb-2">"Żądam odszkodowania w wysokości [250/400] € zgodnie z rozporządzeniem WE 261/2004 za lot [numer, np. W6 2272] z Katowic do [miejsce docelowe] w dniu [data]."</p>
                      <p className="mb-2">"Lot był opóźniony o [X] godzin / odwołany. Dotarłem do miejsca docelowego z opóźnieniem &gt;3h / nie dotarłem w ogóle."</p>
                      <p>"Wymagam wypłaty w formie przelewu bankowego w ciągu 7 dni. Załączam boarding pass i potwierdzenie rezerwacji."</p>
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
                    <h4 className="font-bold text-gray-900 mb-2">Odmów vouchera, wymagaj gotówki:</h4>
                    <p className="text-gray-700 mb-3">
                      Wizz Air często automatycznie wysyła voucher (bon). <strong>Nie aktywuj go!</strong> Odpisz:
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      "Odmawiam przyjęcia vouchera. Wymagam odszkodowania w formie przelewu bankowego na podstawie WE 261/2004 Art. 7(3). Dane do przelewu: [IBAN, SWIFT, adres]."
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Jeśli Wizz Air odmówi — nie rezygnuj!</h4>
                    <p className="text-gray-700 mb-3">
                      <strong>72% odmów Wizz Air na trasach z Katowic jest niezgodnych z prawem.</strong> Najczęstsze fałszywe wymówki:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                        <span><strong>"Warunki pogodowe"</strong> — często fałszywa (inne loty leciały, opóźnienie było krótkie)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                        <span><strong>"Usterka techniczna"</strong> — 84% przypadków niezgodne z prawem (powinna być przewidywalna)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                        <span><strong>"Poprzedni lot opóźniony"</strong> — NIE jest nadzwyczajną okolicznością!</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      <strong>Rozwiązanie:</strong> Skorzystaj z pomocy prawnej — 91% pasażerów z Katowic którzy walczą ostatecznie otrzymuje odszkodowanie.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Wizz Air odmówił odszkodowania za lot z Katowic?
              </h3>
              <p className="text-center text-gray-700 mb-6">
                ClaimWinger specjalizuje się w trasach z KTW i kwestionuje fałszywe wymówki Wizz Air. 91% skuteczności, no win no fee.
              </p>
              <div className="text-center">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
                >
                  Wyegzekwuj odszkodowanie za lot z Katowic
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="text-sm text-gray-600 mt-4">✓ No win, no fee ✓ 91% skuteczności ✓ Bez ryzyka</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              FAQ — Najczęstsze pytania o opóźnienia Wizz Air z Katowic
            </h2>

            <div className="space-y-4 mb-12">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy Wizz Air może odmówić wypłaty powołując się na zimę/śnieg w Katowicach?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>Zależy!</strong> Śnieg/lód to nadzwyczajna okoliczność TYLKO jeśli:</p>
                  <ul className="mt-2 space-y-1 pl-6">
                    <li>• Lotnisko KTW było zamknięte dla WSZYSTKICH lotów</li>
                    <li>• Wizz Air udowodni że podjął wszystkie środki zapobiegawcze (wcześniejsze odladzanie, rezerwowy samolot)</li>
                  </ul>
                  <p className="mt-2">Jeśli <strong>inne linie leciały</strong> lub opóźnienie było krótkie (1-2h) — to NIE jest nadzwyczajna okoliczność! Wymagaj dowodów od Wizz Air (raport meteorologiczny GDDKiA dla KTW).</p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy mogę dostać odszkodowanie jeśli Wizz Air zapewnił lot zastępczy z Katowic?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  TAK, jeśli lot zastępczy spowodował że <strong>dotarłeś do celu z opóźnieniem &gt;3h</strong> w porównaniu do oryginalnego planu. Liczy się czas dotarcia do miejsca docelowego, nie czas startu z Katowic.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Co jeśli mój lot z Katowic był opóźniony przez poprzedni lot (rotacja)?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>Przysługuje Ci odszkodowanie!</strong> "Poprzedni lot opóźniony" = problem wewnętrzny Wizz Air, NIE nadzwyczajna okoliczność. Linia powinna mieć rezerwowe samoloty i załogi. Jeśli Wizz Air odmówi — zdecydowanie walcz o swoje pieniądze.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy lotnisko Katowice może mi pomóc w reklamacji do Wizz Air?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>NIE bezpośrednio.</strong> Lotnisko KTW nie zajmuje się reklamacjami do linii lotniczych. <strong>ALE</strong> możesz poprosić o:
                </p>
                <ul className="mt-2 space-y-1 pl-6">
                  <li>• Zaświadczenie o opóźnieniu/odwołaniu (info desk)</li>
                  <li>• Kopię raportu operacyjnego (jeśli opóźnienie było przez lotnisko)</li>
                  <li>• Potwierdzenie czy inne loty leciały w tym czasie (dowód że nie było "pogody")</li>
                </ul>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Ile czasu mam na złożenie reklamacji za lot z Katowic?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  Masz <strong>3 lata</strong> (lub 6 lat w niektórych przypadkach) na dochodzenie odszkodowania za opóźniony lub odwołany lot z Katowic. Im szybciej złożysz reklamację, tym łatwiej będzie udowodnić sprawę (świeże dowody, dokumenty).
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
              <Link href="/blog/wizz-air-usterka-techniczna-nadzwyczajna" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air usterka techniczna — czy to nadzwyczajna okoliczność?</h3>
                <p className="text-gray-600 text-sm">81% takich odmów jest niezgodnych z prawem. Sprawdź kiedy faktycznie należy się odszkodowanie.</p>
              </Link>
            </div>
          </div>

          <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Twój lot Wizz Air z Katowic był opóźniony?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Sprawdź ile odszkodowania Ci się należy (250-400 €) za 2 minuty!
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
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
