import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, AlertCircle, Euro, Plane, CheckCircle, MapPin } from "lucide-react";

export default function PolskaNiemcyOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Polska–Niemcy opóźnienie — Lufthansa, Eurowings, Ryanair odszkodowanie"
        description="Sprawdź, jak uzyskać odszkodowanie za opóźniony lot z Polski do Niemiec. Berlin, Frankfurt, Monachium — nawet 250 € rekompensaty."
        canonical="https://problemlot.pl/blog/polska-niemcy-opoznienie-odszkodowanie"
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
            Polska–Niemcy opóźnienie — Lufthansa, Eurowings, Ryanair odszkodowanie
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
                  Opóźniony lot z Polski do Niemiec? Odszkodowanie 250 €
                </p>
                <p className="text-gray-700 mb-0">
                  <strong>Dystans Polski–Niemcy: 500–900 km</strong> → Odszkodowanie: <strong>250 €</strong> (przy opóźnieniu ≥3h). Nawet jeśli lot operuje Lufthansa, Eurowings, Ryanair czy LOT — WE 261/2004 chroni Twoją trasę.
                </p>
              </div>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              Kluczowe trasy Polska–Niemcy
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Berlin</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~520 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">LOT, Lufthansa, Ryanair</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Frankfurt</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~900 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">LOT, Lufthansa (codeshare)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Warszawa → Monachium</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~850 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">LOT, Lufthansa</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Kraków → Monachium</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~530 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Lufthansa, LOT</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gdańsk → Berlin</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~470 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Eurowings, Ryanair, Wizz Air</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Wrocław → Frankfurt</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">~640 km</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Lufthansa, Ryanair</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">250 €</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-2">Frankfurt i Monachium = główne huby przesiadkowe</p>
                  <p className="text-gray-700 mb-0">
                    Większość długodystansowych połączeń z Polski do USA/Azji (LOT, Lufthansa, United) przechodzi przez <strong>Frankfurt (FRA)</strong> lub <strong>Monachium (MUC)</strong>. Jeśli opóźnienie pierwszego odcinka (WAW→FRA) spowodowało utratę połączenia transatlantyckiego, możesz rościć odszkodowanie za <strong>całą trasę</strong> (250 € za odcinek europejski + potencjalnie 600 € za odcinek długodystansowy).
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              <strong>Najpopularniejsze trasy:</strong> Warszawa–Berlin (LOT, Lufthansa, Ryanair), Warszawa–Frankfurt (LOT/Lufthansa codeshare), Kraków–Monachium (Lufthansa). Wszystkie te połączenia mieszczą się w przedziale dystansu &lt;1,500 km, co daje odszkodowanie <strong>250 €</strong> przy opóźnieniu ≥3 godziny.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              Kiedy przysługuje odszkodowanie za lot Polska–Niemcy?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  Warunki uzyskania 250 € za trasę Polska–Niemcy
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Opóźnienie ≥3 godziny</strong> — liczony czas przybycia do portu docelowego (otwarcie drzwi samolotu)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Lot z lotniska w UE</strong> (Polska → Niemcy) — WE 261/2004 obowiązuje automatycznie</span>
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
                    <span><strong>Nadzwyczajne okoliczności:</strong> burza, strajk kontrolerów ruchu lotniczego (ATC), zamknięcie przestrzeni powietrznej</span>
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
                  <p className="font-semibold text-gray-900 mb-2">Lufthansa często odmawia odszkodowań powołując się na "usterki techniczne"</p>
                  <p className="text-gray-700 mb-0">
                    Lufthansa regularnie klasyfikuje usterki techniczne jako "nadzwyczajne okoliczności" — co jest błędne. <strong>Usterka techniczna = część normalnej eksploatacji samolotu</strong> i nie zwalnia linii z obowiązku wypłaty odszkodowania (wyrok TSUE C-549/07 Wallentin-Hermann). Jeśli dostaniesz odmowę z takim uzasadnieniem, <strong>zakwestionuj ją</strong> — ClaimWinger zrobi to za Ciebie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania za opóźniony lot Polska–Niemcy?
            </h2>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-500 rounded-xl p-8 mb-6 shadow-lg">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                  <Euro className="w-8 h-8 text-white" />
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">250 €</p>
                <p className="text-lg text-gray-700">
                  Za dystans &lt;1,500 km (wszystkie trasy Polska–Niemcy)
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
              <strong>Przykład:</strong> Twój lot Lufthansa z Warszawy do Frankfurtu (900 km) miał <strong>4 godziny opóźnienia</strong> z powodu usterki technicznej. Przysługuje Ci <strong>250 € odszkodowania</strong> — niezależnie od tego, czy lot był kodem Lufthansa czy LOT (codeshare). WE 261/2004 gwarantuje stałą kwotę rekompensaty.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jak złożyć reklamację za opóźniony lot Polska–Niemcy?
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
                  Najpierw próbujesz bezpośrednio u przewoźnika (Lufthansa, Eurowings, Ryanair, LOT). Zwykle: formularz online na stronie linii lub mail do działu reklamacji.
                </p>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 font-semibold mb-2">Adresy reklamacji głównych przewoźników:</p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• <strong>Lufthansa:</strong> lufthansa.com/pl → Customer Relations</li>
                    <li>• <strong>Eurowings:</strong> eurowings.com → Contact Us → Complaint</li>
                    <li>• <strong>Ryanair:</strong> ryanair.com → Help Centre → Compensation</li>
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
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy odszkodowanie za lot Polska–Niemcy należy się przy opóźnieniu 2 godziny?
                </h3>
                <p className="text-gray-700">
                  <strong>Nie.</strong> Odszkodowanie finansowe (250 €) przysługuje dopiero przy opóźnieniu <strong>≥3 godziny</strong>. Przy 2 godzinach opóźnienia masz prawo do opieki (posiłki, napoje, prawo do kontaktu), ale nie do kwoty pieniężnej.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy Lufthansa płaci odszkodowania za opóźnione loty?
                </h3>
                <p className="text-gray-700">
                  <strong>Tak, ale niechętnie.</strong> Lufthansa często odrzuca roszczenia, powołując się na "usterki techniczne jako nadzwyczajne okoliczności". To błędna interpretacja — <strong>wyrok TSUE C-549/07</strong> jednoznacznie stwierdza, że usterka techniczna <strong>nie jest</strong> extraordinary circumstance. Jeśli dostaniesz odmowę z takim uzasadnieniem, ClaimWinger zakwestionuje to bezpłatnie.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy lot codeshare LOT–Lufthansa zmienia procedurę roszczenia?
                </h3>
                <p className="text-gray-700">
                  <strong>Nie zmienia praw, ale może zmienić adresata reklamacji.</strong> Jeśli lot operował fizycznie Lufthansa (numer LH xxxx), roszczenie składasz do Lufthansa — nawet jeśli kupiłeś bilet od LOT. Jeśli lot operował LOT (numer LO xxxx), roszczenie składasz do LOT — nawet jeśli miał numer Lufthansa na bilecie. <strong>Operating carrier = odpowiedzialny za odszkodowanie.</strong>
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Czy Frankfurt i Monachium to szczególnie problematyczne lotniska?
                </h3>
                <p className="text-gray-700">
                  <strong>Tak, ze względu na misconnections.</strong> Frankfurt (FRA) i Monachium (MUC) to główne huby przesiadkowe Lufthansa. Jeśli opóźnienie krótkiego odcinka (WAW→FRA) spowodowało utratę połączenia długodystansowego (FRA→JFK), możesz rościć odszkodowanie za <strong>całą trasę</strong>. Przykład: WAW→FRA 2h delay + missed connection FRA→JFK = 600 € odszkodowania (zamiast 250 € tylko za odcinek WAW→FRA).
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Jak długo mogę złożyć reklamację za lot Polska–Niemcy?
                </h3>
                <p className="text-gray-700">
                  <strong>Do 3 lat</strong> (termin przedawnienia w Polsce). Przykład: lot z 15 marca 2023 → możesz złożyć reklamację do <strong>14 marca 2026</strong>. Po tym terminie prawo do odszkodowania wygasa. Lufthansa/Ryanair/Eurowings nie przypomną Ci o terminie — musisz działać samodzielnie.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Opóźniony lot Polska–Niemcy? Sprawdź swoje odszkodowanie
                </h2>
                <p className="text-xl mb-6 text-blue-100">
                  ClaimWinger wyegzekwuje Twoje pieniądze od Lufthansa/Eurowings/Ryanair bez ryzyka — płacisz tylko przy sukcesie (25% prowizji).
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
                  href="/blog/odszkodowanie-lufthansa-polska"
                  className="block p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Odszkodowanie Lufthansa Polska — kompletny przewodnik
                  </h3>
                  <p className="text-sm text-gray-600">
                    Wzory reklamacji, terminy, najczęstsze błędy przy zgłoszeniach Lufthansa.
                  </p>
                </Link>
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
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}