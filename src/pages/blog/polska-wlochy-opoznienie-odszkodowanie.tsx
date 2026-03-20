import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, Euro, Plane, CheckCircle, MapPin } from "lucide-react";

export default function PolskaWlochyOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Polska–Włochy opóźnienie — Ryanair, Wizz Air, LOT odszkodowanie"
        description="Sprawdź, jak uzyskać odszkodowanie za opóźniony lot z Polski do Włoch. Rzym, Mediolan, Wenecja — nawet 400 € rekompensaty."
        canonicalUrl="https://problemlot.pl/blog/polska-wlochy-opoznienie-odszkodowanie"
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            ← Powrót do bloga
          </Link>
        </div>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Polska–Włochy opóźnienie — Ryanair, Wizz Air, LOT odszkodowanie
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime="2026-03-11">11 marca 2026</time>
            <span>•</span>
            <span>Czas czytania: 8 min</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  Opóźniony lot z Polski do Włoch? Odszkodowanie do 400 €
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Dystans Polski–Włochy: 1,000–1,600 km</strong> → Odszkodowanie: <strong>250 € (krótki) lub 400 € (średni)</strong> przy opóźnieniu ≥3h. Nawet jeśli lot operuje Ryanair, Wizz Air czy LOT — WE 261/2004 chroni Twoją trasę.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              Kluczowe trasy Polska–Włochy
            </h2>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Trasa</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dystans</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Główni przewoźnicy</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Odszkodowanie</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Rzym (FCO)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,310 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">LOT, Ryanair, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Mediolan (BGY)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,110 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ryanair, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kraków → Rzym (CIA)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,250 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ryanair, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Katowice → Mediolan (BGY)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~870 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ryanair, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gdańsk → Rzym (CIA)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,440 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ryanair, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Neapol</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,530 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Ryanair, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">400 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Uwaga: Ryanair i Wizz Air dominują na trasach do Włoch</p>
                  <p className="text-gray-700 mb-0">
                    <strong>~85% lotów Polska–Włochy</strong> obsługują linie niskokosztowe (Ryanair, Wizz Air). Obie są znane z częstych odmów odszkodowań, powołując się na "nadzwyczajne okoliczności". <strong>Nie rezygnuj po pierwszej odmowie</strong> — ClaimWinger weryfikuje każde uzasadnienie bezpłatnie.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              <strong>Najpopularniejsze trasy:</strong> Warszawa–Rzym (LOT/Ryanair/Wizz Air), Kraków–Rzym (Ryanair/Wizz Air), Katowice–Mediolan Bergamo (Wizz Air). Większość tras mieści się w przedziale dystansu 800–1,500 km, co daje odszkodowanie <strong>250 €</strong> przy opóźnieniu ≥3 godziny.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              Kiedy przysługuje odszkodowanie za lot Polska–Włochy?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Warunki uzyskania odszkodowania za trasę Polska–Włochy
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Opóźnienie ≥3 godziny</strong> — liczony czas przybycia do portu docelowego (otwarcie drzwi samolotu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Lot z lotniska w UE</strong> (Polska → Włochy) — WE 261/2004 obowiązuje automatycznie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Przyczyna opóźnienia leży po stronie linii</strong> (usterka techniczna, brak załogi, overbooking, logistyka)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Lot odbył się w ciągu ostatnich 3 lat</strong> (termin przedawnienia w Polsce)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  Kiedy odszkodowanie NIE przysługuje?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Nadzwyczajne okoliczności:</strong> burza, strajk kontrolerów ruchu lotniczego (ATC), zamknięcie przestrzeni powietrznej, popioły wulkaniczne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Byłeś powiadomiony ≥14 dni przed lotem</strong> o zmianie rozkładu/odwołaniu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Spóźniłeś się na odprawę</strong> (nie dotyczy sytuacji, gdy linia nie wpuściła Cię mimo punktual check-in)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Ryanair i Wizz Air — najczęstsze wymówki na trasach do Włoch</p>
                  <p className="text-gray-700 mb-0">
                    Statystyki ClaimWinger: <strong>~55% odmów Ryanair/Wizz Air na trasach do Włoch jest niezasadnych</strong>. Typowe wymówki: "bird strike" (zderzenie z ptakiem), "usterka techniczna jako nadzwyczajna okoliczność", "kontrola ATC". <strong>Większość z tych powodów NIE kwalifikuje się jako extraordinary circumstance</strong> zgodnie z orzecznictwem TSUE. Jeśli dostaniesz odmowę, wyślij sprawę do ClaimWinger — zweryfikują bezpłatnie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania za opóźniony lot Polska–Włochy?
            </h2>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-8 mb-6 shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                  <Euro className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">250 € lub 400 €</p>
                <p className="text-lg text-gray-700">
                  Zależnie od dystansu lotu (większość tras = 250 €)
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-6">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dystans lotu</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Opóźnienie</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Kwota odszkodowania</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">Do 1,500 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">≥3 godziny</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">1,500–3,500 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">≥3 godziny</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">400 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900">&gt;3,500 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">≥4 godziny</td>
                    <td className="px-6 py-4 text-sm font-semibold text-green-600">600 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Przykłady kwot odszkodowania dla popularnych tras:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Warszawa–Rzym (1,310 km) — 4h opóźnienia</p>
                    <p className="text-gray-700">Odszkodowanie: <strong>250 €</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Katowice–Mediolan Bergamo (870 km) — 3.5h opóźnienia</p>
                    <p className="text-gray-700">Odszkodowanie: <strong>250 €</strong></p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Warszawa–Neapol (1,530 km) — 4h opóźnienia</p>
                    <p className="text-gray-700">Odszkodowanie: <strong>400 €</strong> (dystans &gt;1,500 km)</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              <strong>Uwaga:</strong> Kwota odszkodowania <strong>nie zależy od ceny biletu</strong>. Nawet jeśli kupiłeś promocyjny bilet Ryanair za 99 zł, przysługuje Ci pełne 250 € odszkodowania przy opóźnieniu ≥3h. WE 261/2004 gwarantuje stałą kwotę rekompensaty niezależnie od klasy biletu czy ceny.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jak złożyć reklamację za opóźniony lot Polska–Włochy?
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Krok 1: Zbierz dokumenty
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span><strong>Bilet lotniczy</strong> (boarding pass + potwierdzenie rezerwacji)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span><strong>Dowód opóźnienia</strong> (zrzut ekranu z FlightRadar24, mail od linii, zdjęcie z tablicy odlotów)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                    <span><strong>Przyczyna opóźnienia</strong> (jeśli linia podała — mail, SMS, ogłoszenie na lotnisku)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Krok 2: Wyślij reklamację do linii
                </h3>
                <p className="text-gray-700 mb-4">
                  Najpierw próbujesz bezpośrednio u przewoźnika (Ryanair, Wizz Air, LOT). Zwykle: formularz online na stronie linii lub mail do działu reklamacji.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-semibold mb-2">Adresy reklamacji głównych przewoźników:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Ryanair:</strong> ryanair.com → Help Centre → Compensation</li>
                    <li>• <strong>Wizz Air:</strong> wizzair.com → Contact → Claims</li>
                    <li>• <strong>LOT:</strong> lot.com → Kontakt → Reklamacje</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Krok 3: Czekaj na odpowiedź (lub użyj ClaimWinger)
                </h3>
                <p className="text-gray-700">
                  Linia ma <strong>30 dni</strong> na odpowiedź (ULC zaleca, ale nie jest to termin ustawowy). Jeśli:
                </p>
                <ul className="space-y-2 text-gray-700 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Akceptacja:</strong> Pieniądze na konto w ciągu 7-14 dni</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Odmowa:</strong> Linia powołuje się na "nadzwyczajne okoliczności" → ClaimWinger weryfikuje zasadność (bezpłatnie)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 mt-1">⏳</span>
                    <span><strong>Brak odpowiedzi:</strong> Po 60 dniach możesz eskalować sprawę (Rzecznik Praw Pasażera, sąd)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">ClaimWinger = szybsza i skuteczniejsza metoda</p>
                  <p className="text-gray-700 mb-0">
                    Zamiast czekać 2-3 miesiące na odpowiedź Ryanair/Wizz Air (i ryzykować odmowę), możesz od razu zlecić sprawę ClaimWinger. <strong>Płacisz tylko przy sukcesie (25% prowizji)</strong> — jeśli nie wygrają, nie płacisz nic. Średni czas: 8-12 tygodni (vs 4-6 miesięcy samodzielnie).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy odszkodowanie za lot Polska–Włochy należy się przy opóźnieniu 2 godziny?
                </h3>
                <p className="text-gray-700">
                  <strong>Nie.</strong> Odszkodowanie finansowe (250 € lub 400 €) przysługuje dopiero przy opóźnieniu <strong>≥3 godziny</strong>. Przy 2 godzinach opóźnienia masz prawo do opieki (posiłki, napoje, prawo do kontaktu), ale nie do kwoty pieniężnej.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy Ryanair i Wizz Air płacą odszkodowania za loty do Włoch?
                </h3>
                <p className="text-gray-700">
                  <strong>Tak, ale bardzo niechętnie.</strong> Statystyki ClaimWinger: <strong>~55% odmów Ryanair/Wizz Air na trasach do Włoch jest niezasadnych</strong>. Obie linie regularnie odrzucają roszczenia, powołując się na "bird strike", "usterki techniczne" czy "kontrolę ATC" — mimo że większość tych powodów <strong>nie kwalifikuje się jako extraordinary circumstance</strong>. Jeśli dostaniesz odmowę, zakwestionuj ją przez ClaimWinger.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy lot czarterowy do Włoch (wycieczka biura podróży) też jest chroniony?
                </h3>
                <p className="text-gray-700">
                  <strong>Tak.</strong> Nawet jeśli kupiłeś lot jako część pakietu wakacyjnego (biuro podróży sprzedaje całość: lot + hotel), <strong>za opóźnienie lotu odpowiada linia lotnicza</strong>, nie biuro. WE 261/2004 obowiązuje niezależnie od tego, kto sprzedał bilet. Roszczenie składasz do przewoźnika (Ryanair, Wizz Air, LOT), nie do Rainbow Tours/TUI/Itaki.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy mogę żądać odszkodowania za lot do Rzymu Ciampino (CIA) vs Fiumicino (FCO)?
                </h3>
                <p className="text-gray-700">
                  <strong>Tak, bez różnicy.</strong> Oba lotniska w Rzymie (Fiumicino FCO i Ciampino CIA) są chronione przez WE 261/2004. Odszkodowanie zależy wyłącznie od <strong>dystansu</strong> (Warszawa–Rzym ~1,310 km = 250 €) i <strong>opóźnienia</strong> (≥3h), nie od konkretnego lotniska. Ryanair lata do Ciampino, LOT do Fiumicino — obie trasy mają te same prawa.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Jak długo mogę złożyć reklamację za lot Polska–Włochy?
                </h3>
                <p className="text-gray-700">
                  <strong>Do 3 lat</strong> (termin przedawnienia w Polsce). Przykład: lot z 15 marca 2023 → możesz złożyć reklamację do <strong>14 marca 2026</strong>. Po tym terminie prawo do odszkodowania wygasa. Ryanair/Wizz Air/LOT nie przypomną Ci o terminie — musisz działać samodzielnie.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Opóźniony lot Polska–Włochy? Sprawdź swoje odszkodowanie
                </h2>
                <p className="text-xl mb-6 text-blue-100">
                  ClaimWinger wyegzekwuje Twoje pieniądze od Ryanair/Wizz Air/LOT bez ryzyka — płacisz tylko przy sukcesie (25% prowizji).
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-semibold rounded-lg text-white bg-transparent hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Sprawdź odszkodowanie za 2 minuty
                  </a>
                </div>
                <p className="text-sm text-blue-100 mt-4">
                  ✓ Bez ukrytych kosztów ✓ 97% skuteczności ✓ Średni czas: 8-12 tygodni
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Powiązane artykuły
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/blog/odszkodowanie-ryanair-polska"
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Odszkodowanie Ryanair Polska — kompletny przewodnik
                  </h3>
                  <p className="text-sm text-gray-600">
                    Wzory reklamacji, terminy, najczęstsze błędy przy zgłoszeniach Ryanair.
                  </p>
                </Link>
                <Link
                  href="/blog/odszkodowanie-wizz-air-polska"
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Odszkodowanie Wizz Air Polska — jak uzyskać pieniądze?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Praktyczny przewodnik po roszczeniach Wizz Air — terminy, procedury, przykłady.
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
