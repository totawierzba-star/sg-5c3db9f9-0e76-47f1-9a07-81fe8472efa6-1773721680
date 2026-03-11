import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, Euro, Plane, CheckCircle, MapPin } from "lucide-react";

export default function PolskaNorwegiaOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Polska–Norwegia opóźnienie — odszkodowanie za loty do Skandynawii"
        description="Sprawdź, jak uzyskać odszkodowanie za opóźniony lot z Polski do Norwegii. Oslo, Bergen, Stavanger — nawet 400 € rekompensaty."
        canonical="https://problemlot.pl/blog/polska-norwegia-opoznienie-odszkodowanie"
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
            Polska–Norwegia opóźnienie — odszkodowanie za loty do Skandynawii
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
                  Opóźniony lot z Polski do Norwegii? Odszkodowanie do 400 €
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Dystans Polski–Norwegia: 1,200–1,600 km</strong> → Odszkodowanie: <strong>400 €</strong> (przy opóźnieniu ≥3h). Nawet jeśli lot operuje Norwegian, Ryanair, Wizz Air czy LOT — WE 261/2004 chroni Twoją trasę.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              Kluczowe trasy Polska–Norwegia
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Oslo</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,190 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">LOT, Norwegian, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kraków → Oslo</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,450 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Norwegian, Ryanair</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gdańsk → Oslo</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~850 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Norwegian, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Bergen</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,320 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Norwegian, LOT (sezonowo)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Stavanger</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~1,280 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Norwegian, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Uwaga: Norwegia = UE/EOG → WE 261 obowiązuje w pełni</p>
                  <p className="text-gray-700 mb-0">
                    Choć Norwegia nie jest członkiem Unii Europejskiej, należy do <strong>Europejskiego Obszaru Gospodarczego (EOG)</strong>. Oznacza to, że rozporządzenie WE 261/2004 obowiązuje w obie strony: lot z Polski do Norwegii <strong>i</strong> lot z Norwegii do Polski są w pełni chronione.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              <strong>Najpopularniejsze trasy:</strong> Warszawa–Oslo (LOT Polish Airlines, Norwegian, Wizz Air), Kraków–Oslo (Norwegian, Ryanair), Gdańsk–Oslo (Norwegian, Wizz Air). Wszystkie te połączenia mieszczą się w przedziale dystansu 800–1,500 km, co daje odszkodowanie <strong>250 €</strong> przy opóźnieniu ≥3 godziny.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              Kiedy przysługuje odszkodowanie za lot Polska–Norwegia?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Warunki uzyskania 250 € za trasę Polska–Norwegia
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Opóźnienie ≥3 godziny</strong> — liczony czas przybycia do portu docelowego (otwarcie drzwi samolotu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Lot z lotniska w UE/EOG</strong> (Polska → Norwegia) <strong>lub</strong> lot linią z UE/EOG (Norwegia → Polska)</span>
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
                    <span><strong>Nadzwyczajne okoliczności:</strong> burza śnieżna (częsta w Norwegii zimą), zamknięcie przestrzeni powietrznej, strajk kontrolerów ruchu lotniczego (ATC)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Byłeś powiadomiony ≥14 dni przed lotem</strong> o zmianie rozkładu/odwołaniu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    <span><strong>Spóźniłeś się na odprawę</strong> (nie dotyczy sytuacji, gdy linia nie wpuściła Cię mimo punctual check-in)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Norwegian często używa "extraordinary circumstances" jako wymówki</p>
                  <p className="text-gray-700 mb-0">
                    Norwegian Air (główny carrier Polska–Norwegia) regularnie odrzuca roszczenia, powołując się na "nadzwyczajne okoliczności" — nawet gdy rzeczywista przyczyna opóźnienia to <strong>usterka techniczna</strong> (nie kwalifikuje się jako extraordinary circumstance). Jeśli dostaniesz odmowę, <strong>nie rezygnuj</strong> — ClaimWinger weryfikuje każdą odmowę bezpłatnie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania za opóźniony lot Polska–Norwegia?
            </h2>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-8 mb-6 shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                  <Euro className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">250 €</p>
                <p className="text-lg text-gray-700">
                  Za dystans &lt;1,500 km (większość tras Polska–Norwegia)
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

            <p className="text-gray-700">
              <strong>Przykład:</strong> Twój lot Norwegian z Warszawy do Oslo (1,190 km) miał <strong>4 godziny opóźnienia</strong> z powodu usterki technicznej. Przysługuje Ci <strong>250 € odszkodowania</strong> — niezależnie od tego, ile zapłaciłeś za bilet (nawet jeśli lot kosztował 150 zł). WE 261/2004 gwarantuje stałą kwotę rekompensaty.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jak złożyć reklamację za opóźniony lot Polska–Norwegia?
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
                  Najpierw próbujesz bezpośrednio u przewoźnika (Norwegian, LOT, Wizz Air, Ryanair). Zwykle: formularz online na stronie linii lub mail do działu reklamacji.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-0">
                    <strong>Uwaga:</strong> Norwegian i Wizz Air często ignorują reklamacje lub odpowiadają po 2-3 miesiącach. Jeśli nie chcesz czekać, skorzystaj z ClaimWinger — płacisz tylko przy sukcesie (25% prowizji).
                  </p>
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
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy odszkodowanie za lot Polska–Norwegia należy się przy opóźnieniu 2 godziny?
                </h3>
                <p className="text-gray-700">
                  <strong>Nie.</strong> Odszkodowanie finansowe (250 €) przysługuje dopiero przy opóźnieniu <strong>≥3 godziny</strong>. Przy 2 godzinach opóźnienia masz prawo do opieki (posiłki, napoje, prawo do kontaktu), ale nie do kwoty pieniężnej.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy Norwegian płaci odszkodowania za opóźnione loty?
                </h3>
                <p className="text-gray-700">
                  <strong>Tak, ale niechętnie.</strong> Norwegian Air często odrzuca roszczenia, powołując się na "nadzwyczajne okoliczności" (nawet gdy przyczyna to usterka techniczna). Statystyki ClaimWinger: <strong>~40% odmów Norwegian jest niezasadnych</strong>. Jeśli dostaniesz odmowę, wyślij sprawę do ClaimWinger — zweryfikują bezpłatnie.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy lot czarterowy do Norwegii (wycieczka biura podróży) też jest chroniony?
                </h3>
                <p className="text-gray-700">
                  <strong>Tak.</strong> Nawet jeśli kupiłeś lot jako część pakietu wakacyjnego (biuro podróży sprzedaje całość: lot + hotel), <strong>za opóźnienie lotu odpowiada linia lotnicza</strong>, nie biuro. WE 261/2004 obowiązuje niezależnie od tego, kto sprzedał bilet. Roszczenie składasz do przewoźnika (Norwegian, LOT, Wizz Air), nie do Rainbow Tours/TUI/Itaki.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy burza śnieżna w Oslo oznacza brak odszkodowania?
                </h3>
                <p className="text-gray-700">
                  <strong>Zazwyczaj tak.</strong> Ekstremalne warunki pogodowe (burze śnieżne, oblodzenie pasa startowego) kwalifikują się jako <strong>nadzwyczajne okoliczności</strong> — linia nie musi płacić odszkodowania. <strong>Ale uwaga:</strong> jeśli opóźnienie wynikło z kombinacji: "burza śnieżna + brak zapasowej załogi + usterka techniczna", ClaimWinger może wykazać, że linia mogła uniknąć części opóźnienia → częściowe odszkodowanie.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Jak długo mogę złożyć reklamację za lot Polska–Norwegia?
                </h3>
                <p className="text-gray-700">
                  <strong>Do 3 lat</strong> (termin przedawnienia w Polsce). Przykład: lot z 15 marca 2023 → możesz złożyć reklamację do <strong>14 marca 2026</strong>. Po tym terminie prawo do odszkodowania wygasa. Norwegian/LOT/Wizz Air nie przypomną Ci o terminie — musisz działać samodzielnie.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Opóźniony lot Polska–Norwegia? Sprawdź swoje odszkodowanie
                </h2>
                <p className="text-xl mb-6 text-blue-100">
                  ClaimWinger wyegzekwuje Twoje pieniądze od Norwegian/LOT/Wizz Air bez ryzyka — płacisz tylko przy sukcesie (25% prowizji).
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
                  href="/blog/warszawa-londyn-opoznienie-odszkodowanie"
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Warszawa–Londyn opóźnienie — najpopularniejsza trasa
                  </h3>
                  <p className="text-sm text-gray-600">
                    Jak uzyskać odszkodowanie za opóźniony lot WAW–LHR/LGW/STN?
                  </p>
                </Link>
                <Link
                  href="/blog/odszkodowanie-wizz-air-polska"
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Odszkodowanie Wizz Air Polska — kompletny przewodnik
                  </h3>
                  <p className="text-sm text-gray-600">
                    Wzory reklamacji, terminy, najczęstsze błędy przy zgłoszeniach Wizz Air.
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