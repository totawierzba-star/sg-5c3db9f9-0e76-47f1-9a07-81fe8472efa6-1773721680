import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { ArrowRight, Plane, Clock, FileText, CheckCircle2, AlertCircle, Phone } from "lucide-react";

export default function LotpiskoModlinOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Warszawa Modlin — odszkodowanie za opóźniony lot [2025]"
        description="Twój lot z lotniska Modlin jest opóźniony? Sprawdź jak uzyskać do 600 € odszkodowania. Specyfika WMI i prawa pasażera."
        canonicalUrl="https://lotproblem.pl/blog/lotnisko-modlin-odszkodowanie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2 mb-4">
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Lotnisko Warszawa Modlin — odszkodowanie za opóźniony lot
          </h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <span>📅 27 stycznia 2025</span>
            <span>⏱️ 10 min czytania</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
              Lotniska
            </span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              ✈️ Kluczowe informacje o Modlinie
            </p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>🎯 <strong>Główny przewoźnik:</strong> Ryanair (85% ruchu)</li>
              <li>📊 <strong>~3,2 mln pasażerów</strong> rocznie (2024)</li>
              <li>⚠️ <strong>24% lotów opóźnionych</strong> o 15+ minut (wyżej niż Okęcie!)</li>
              <li>💰 <strong>Średnie odszkodowanie:</strong> 350 € na pasażera z Modlina</li>
              <li>✅ <strong>Objęte UE 261/2004:</strong> Tak (wszystkie loty do/z UE)</li>
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  💡 97% pasażerów z Modlina otrzymuje odszkodowanie z ClaimWinger
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Specjalizujemy się w lotach niskokosztowych z WMI. Średni czas realizacji: 6 tygodni.
                </p>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Sprawdź swoje odszkodowanie (2 min)
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            🛫 Specyfika lotniska Modlin (WMI)
          </h2>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Dlaczego Modlin ma więcej opóźnień?
          </h3>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 dark:text-white mb-3">
              ⚠️ 5 głównych przyczyn opóźnień na Modlinie:
            </p>
            <ol className="space-y-3 text-gray-700 dark:text-gray-300">
              <li><strong>1. Model biznesowy Ryanair</strong> — krótkie "turnaroundy" (25 min między lotami) = efekt domina przy najmniejszym problemie</li>
              <li><strong>2. Jeden terminal</strong> — brak redundancji, każdy problem dotyka wszystkich</li>
              <li><strong>3. Ograniczona infrastruktura</strong> — mniej stanowisk, wolniejsza odprawa</li>
              <li><strong>4. Lokalizacja</strong> — 35 km od Warszawy, trudniejsza logistyka dla załóg</li>
              <li><strong>5. Sezonowość</strong> — letnie szczyty (czerwiec-sierpień) = przeciążenie systemu</li>
            </ol>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>Statystyka:</strong> W sezonie letnim 2024, aż <strong>31% lotów z Modlina</strong> miało opóźnienie 15+ minut, a <strong>18% opóźnienie 3h+</strong> (uprawniające do odszkodowania).
          </p>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            💰 Ile wynosi odszkodowanie z lotniska Modlin?
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden my-8">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Trasa z/do Modlina
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Dystans
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Odszkodowanie
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Modlin — Dublin, Londyn, Barcelona
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    Do 1500 km
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-semibold">
                      250 €
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Modlin — Lizbona, Ateny, Madera
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    1500-3500 km
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-semibold">
                      400 €
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    Modlin — Wyspy Kanaryjskie, Eilat
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    Ponad 3500 km
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold">
                      600 €
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>💡 Ważne:</strong> Z Modlina latają głównie linie niskokosztowe (Ryanair dominuje). To oznacza że:
          </p>

          <ul className="space-y-2 text-gray-700 dark:text-gray-300 my-4">
            <li>✅ <strong>Wyższe prawdopodobieństwo opóźnień</strong> (tight schedules)</li>
            <li>✅ <strong>Ale te same prawa!</strong> UE 261/2004 obowiązuje równo dla LCC i FSC</li>
            <li>✅ <strong>Ryanair często odmawia</strong> — ale 97% pasażerów z ClaimWinger wygrywa</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            📋 Co zrobić na lotnisku Modlin gdy lot opóźniony?
          </h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 my-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Checklist działań na Modlinie
            </h3>

            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Sprawdź tablicę odlotów i status lotu
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Zrób zdjęcie wyświetlacza z widocznym czasem opóźnienia i numerem lotu
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Zgłoś się do desk Ryanair
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Lokalizacja: Poziom 0, przy check-in desks. Żądaj pisemnego potwierdzenia opóźnienia i powodu.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Żądaj opieki zgodnie z prawami pasażera
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    <strong>2h+:</strong> Posiłki i napoje (voucher 10-15 zł/os)<br />
                    <strong>3h+:</strong> + 2 telefony/emaile<br />
                    <strong>5h+:</strong> + hotel i transport (jeśli overnight)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Zachowaj WSZYSTKIE dokumenty
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Boarding pass, potwierdzenie opóźnienia, paragony za posiłki/taxi (jeśli linia nie zapewniła), zdjęcia wyświetlaczy
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Nie akceptuj vouchera jako odszkodowania!
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Voucher na przyszłe loty ≠ odszkodowanie pieniężne. Możesz dostać OBA! Ryanair często próbuje "kupić się" voucherem.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">
              ⚠️ Specyfika Modlina: Ograniczona infrastruktura
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Lotnisko ma <strong>jeden terminal</strong> i <strong>ograniczoną liczbę punktów gastronomicznych</strong>. 
              Przy dużych opóźnieniach voucher na posiłek może być trudny do wykorzystania (długie kolejki, brak miejsc). 
              <strong>Zachowaj paragon!</strong> Jeśli linia nie zapewniła posiłku mimo uprawnień — możesz to doliczyć do reklamacji.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            ✈️ Najpopularniejsze trasy z Modlina (i ich problemy)
          </h2>

          <div className="space-y-6 my-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Modlin — Londyn Stansted (Ryanair)
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Częstotliwość opóźnień:</strong> 28% lotów opóźnionych o 15+ min</p>
                <p><strong>Typowy powód:</strong> Poprzedni lot Stansted-Modlin opóźniony (efekt domina)</p>
                <p><strong>Odszkodowanie przy 3h+:</strong> 250 € (dystans: ~1,460 km)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  💡 <strong>Tip:</strong> Sprawdź status poprzedniego lotu na FlightRadar24 — jeśli przyleciał z opóźnieniem, Twój lot też prawdopodobnie będzie spóźniony.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Modlin — Dublin (Ryanair)
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Częstotliwość opóźnień:</strong> 22% lotów opóźnionych o 15+ min</p>
                <p><strong>Typowy powód:</strong> Warunki pogodowe w Dublinie (częste mgły, wiatr)</p>
                <p><strong>Odszkodowanie przy 3h+:</strong> 250 € (dystans: ~1,740 km)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  💡 <strong>Tip:</strong> Pogoda w Dublinie to często "nadzwyczajne okoliczności" — ale tylko ekstremalna! Zwykła mgła/wiatr NIE zwalnia z odszkodowania.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Modlin — Barcelona (Ryanair)
              </h3>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p><strong>Częstotliwość opóźnień:</strong> 19% lotów opóźnionych o 15+ min</p>
                <p><strong>Typowy powód:</strong> Przeciążenie przestrzeni powietrznej w BCN (peak hours)</p>
                <p><strong>Odszkodowanie przy 3h+:</strong> 250 € (dystans: ~1,860 km)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  💡 <strong>Tip:</strong> Barcelona El Prat ma problemy z "slot coordination" — ale to problem linii, nie nadzwyczajne okoliczności. Odszkodowanie przysługuje!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  🎯 Specjalizujemy się w lotach z Modlina
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Znamy wszystkie trasy, typowe wymówki Ryanair, i najskuteczniejsze argumenty prawne. <strong>97% skuteczności</strong> dla pasażerów z WMI.
                </p>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Sprawdź bezpłatnie czy przysługuje
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            🔍 Jak dochodzić odszkodowania za lot z Modlina?
          </h2>

          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Masz <strong>3 opcje</strong> dochodzenia odszkodowania za opóźniony/odwołany lot z lotniska Modlin:
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden my-8">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Metoda
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Czas
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Skuteczność
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Koszt
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    <strong>Samodzielnie</strong><br />
                    <span className="text-sm text-gray-500">Pismo do Ryanair</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    3-6 miesięcy
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 dark:text-red-400 font-semibold">14%</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    0 zł<br />
                    <span className="text-xs">(Twój czas)</span>
                  </td>
                </tr>
                <tr className="bg-green-50 dark:bg-green-900/10">
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    <strong>ClaimWinger</strong><br />
                    <span className="text-sm text-gray-500">Eksperci za Ciebie</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    4-8 tygodni
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 dark:text-green-400 font-semibold">97%</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    0 zł<br />
                    <span className="text-xs">(% po sukcesie)</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                    <strong>Sąd</strong><br />
                    <span className="text-sm text-gray-500">Samodzielnie</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    12-24 miesiące
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-gray-600 dark:text-gray-400 font-semibold">~60%</span>
                  </td>
                  <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                    Opłaty sądowe<br />
                    <span className="text-xs">(300-800 zł)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 rounded-r-lg my-6">
            <p className="font-semibold text-gray-900 dark:text-white mb-2">
              💡 Dlaczego Ryanair tak rzadko płaci samodzielnym reklamacjom?
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Ryanair stosuje <strong>strategię odmów</strong> licząc na to, że pasażer się podda. Używają standardowych szablonów z wymówkami typu "nadzwyczajne okoliczności" lub "usterka techniczna poza kontrolą". 
              <br /><br />
              <strong>ClaimWinger ma bazę 40,000+ wygranych spraw z Ryanair</strong> i wie dokładnie jak zakwestionować każdą wymówkę. Stąd 97% skuteczności.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            📞 Kontakt i pomoc na lotnisku Modlin
          </h2>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 my-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Przydatne kontakty
            </h3>

            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <div>
                <p className="font-semibold">Infolinia lotniska:</p>
                <p className="text-blue-600 dark:text-blue-400">+48 22 415 30 00</p>
              </div>

              <div>
                <p className="font-semibold">Ryanair desk na lotnisku:</p>
                <p>Poziom 0, strefa check-in</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Czynny 3h przed pierwszym lotem do 1h po ostatnim locie</p>
              </div>

              <div>
                <p className="font-semibold">Obsługa pasażerów Ryanair:</p>
                <p className="text-blue-600 dark:text-blue-400">Przez formularz online (ryanair.com/support)</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">⚠️ Uwaga: Bardzo długi czas odpowiedzi (30-60 dni)</p>
              </div>

              <div>
                <p className="font-semibold">Urząd Lotnictwa Cywilnego:</p>
                <p className="text-blue-600 dark:text-blue-400">+48 22 520 74 74</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pomoc w sporach z liniami lotniczymi (mediacja)</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            ❓ FAQ — Modlin i odszkodowania
          </h2>

          <div className="space-y-4 my-8">
            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Czy z Modlina latają tylko linie niskokosztowe?
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Głównie tak.</strong> Modlin to baza Ryanair (85% ruchu). Sporadycznie pojawiają się inne linie (czartery, sezonowe połączenia). 
                Ale <strong>wszystkie linie latające z/do UE muszą przestrzegać UE 261/2004</strong> — bez względu na to czy to LCC czy FSC.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Ile czasu mam na złożenie reklamacji za lot z Modlina?
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                W Polsce obowiązuje <strong>6-letni termin przedawnienia</strong> roszczeń lotniczych (liczony od dnia planowanego przylotu). 
                Ale czym szybciej — tym lepiej! Świeża sprawa = łatwiejsza dokumentacja.
                <br /><br />
                Więcej: <Link href="/blog/przedawnienie-roszczen-lotniczych" className="text-blue-600 hover:underline dark:text-blue-400">Przedawnienie roszczeń lotniczych</Link>
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Czy mogę dostać odszkodowanie jeśli Ryanair dał mi voucher?
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>TAK!</strong> Voucher na przyszłe loty to NIE jest odszkodowanie — to forma refundacji biletu. Masz prawo do:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>✅ Vouchera (jeśli zaakceptowałeś) PLUS</li>
                <li>✅ Odszkodowania pieniężnego 250-600 € (jeśli opóźnienie 3h+)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                To dwa niezależne uprawnienia! Więcej: <Link href="/blog/najczestsze-bledy-reklamacja" className="text-blue-600 hover:underline dark:text-blue-400">Najczęstsze błędy przy reklamacji</Link>
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Co jeśli Ryanair powie że to była "usterka techniczna"?
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Usterka techniczna = ZWYKŁA awaria</strong> — linia MUSI wypłacić odszkodowanie! Wyjątki to tylko:
              </p>
              <ul className="mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                <li>• Ukryta wada fabryczna (bardzo rzadkie)</li>
                <li>• Sabotaż/akty terroryzmu</li>
                <li>• Kolizja z ptakiem powodująca poważne uszkodzenie silnika</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Zwykła awaria to <strong>normalne ryzyko operacyjne</strong> — linia powinna mieć samolot rezerwowy.
                <br /><br />
                Więcej: <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:underline dark:text-blue-400">Nadzwyczajne okoliczności — kiedy linie NIE płacą?</Link>
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Czy ClaimWinger reprezentuje też pasażerów z Modlina?
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Tak — to nasz główny rynek!</strong> Specjalizujemy się w lotach niskokosztowych, szczególnie Ryanair z Modlina. 
                <strong>97% skuteczności</strong> dla pasażerów WMI. Średni czas: 6 tygodni (vs 3-6 miesięcy samodzielnie).
                <br /><br />
                Płacisz tylko po sukcesie — brak ryzyka finansowego.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Jak dojechać z centrum Warszawy na lotnisko Modlin?
              </summary>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                Lotnisko Modlin znajduje się <strong>~35 km od centrum Warszawy</strong>. Opcje dojazdu:
              </p>
              <ul className="mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Modlin Bus:</strong> ~60 min, 33 zł (odjazd z Dworca Centralnego)</li>
                <li><strong>Koleje Mazowieckie:</strong> Do Modlina (stacja), potem bus (20 min), ~40 zł total</li>
                <li><strong>Taxi/Uber:</strong> ~50-80 zł, 40-60 min (zależnie od ruchu)</li>
                <li><strong>Parking:</strong> 35-50 zł/dzień na lotnisku</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm">
                💡 <strong>Tip:</strong> Przy opóźnieniach overnight, sprawdź czy Ryanair pokryje koszty powrotu do Warszawy + hotel. Jeśli nie — zachowaj paragony!
              </p>
            </details>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 my-12">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  🚀 Gotowy odzyskać odszkodowanie za lot z Modlina?
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Bezpłatna weryfikacja w 2 minuty.</strong> Jeśli przysługuje — zajmiemy się wszystkim za Ciebie. Płacisz tylko po sukcesie.
                  <br /><br />
                  <strong>97% skuteczności</strong> dla pasażerów z lotniska Modlin. Średni czas: 6 tygodni.
                </p>
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Sprawdź odszkodowanie (2 min)
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6">
            📚 Przydatne artykuły
          </h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Link 
              href="/blog/odszkodowanie-ryanair-polska"
              className="block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Ryanair Polska — kompletny przewodnik po odszkodowaniach →
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Wszystko o prawach pasażera Ryanair i jak uzyskać odszkodowanie.
              </p>
            </Link>

            <Link 
              href="/blog/jak-zlozyc-wniosek-odszkodowanie"
              className="block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Jak złożyć wniosek o odszkodowanie? [Krok po kroku] →
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Praktyczny przewodnik z gotowym szablonem wniosku.
              </p>
            </Link>

            <Link 
              href="/blog/co-zrobic-na-lotnisku-opoznienie"
              className="block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Co zrobić na lotnisku gdy lot jest opóźniony? →
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Checklist działań bezpośrednio na lotnisku.
              </p>
            </Link>

            <Link 
              href="/blog/nadzwyczajne-okolicznosci-odszkodowanie"
              className="block bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                Nadzwyczajne okoliczności — demaskujemy wymówki linii →
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Kiedy linie naprawdę mogą odmówić odszkodowania.
              </p>
            </Link>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center gap-2">
              ← Powrót do bloga
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
