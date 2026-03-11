import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertCircle, Phone, FileText, Clock, Euro, Plane, ArrowRight } from "lucide-react";

export default function LotnisoKatowiceOdwolanyLot() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Katowice Pyrzowice — odszkodowanie za odwołany lot | ProblemLot.pl"
        description="Odwołany lot z Katowic? Sprawdź, jak uzyskać 250-600 € odszkodowania. Wizz Air, Ryanair, LOT - poznaj swoje prawa jako pasażer KTW."
        url="https://problemlot.pl/blog/lotnisko-katowice-pyrzowice-odwolany-lot"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2 mb-4"
          >
            ← Powrót do bloga
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lotnisko Katowice Pyrzowice — odszkodowanie za odwołany lot
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>10 marca 2026</span>
            <span>•</span>
            <span>Lotniska</span>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-lg text-gray-900 mb-2">
                Szybka odpowiedź
              </h2>
              <p className="text-gray-700">
                <strong>Odwołany lot z Katowic?</strong> Przysługuje Ci <strong>250-600 € odszkodowania</strong> według rozporządzenia WE 261/2004, niezależnie od linii lotniczej (Wizz Air, Ryanair, LOT) i ceny biletu. Katowice-Pyrzowice obsługują głównie połączenia lowcost do UK, Skandynawii i Europy Zachodniej.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Lotnisko Katowice-Pyrzowice (KTW) - profil i charakterystyka
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Katowice-Pyrzowice (KTW)</strong> to <strong>drugie największe lotnisko w Polsce</strong> pod względem liczby pasażerów. Znajduje się w Pyrzowicach, około 30 km od centrum Katowic. Obsługuje głównie <strong>połączenia lowcost</strong>, z dominacją <strong>Wizz Air</strong> i <strong>Ryanair</strong>.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Najważniejsze informacje o KTW
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kod IATA:</strong> KTW (Katowice)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Główne linie lotnicze:</strong> Wizz Air (największy przewoźnik), Ryanair, LOT Polish Airlines</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Popularne kierunki:</strong> Londyn, Oslo, Bergen, Sztokholm, Dublin, Dortmund, Eindhoven</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Region:</strong> Śląsk, GOP (Górnośląski Okręg Przemysłowy), Śląskie</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Profil pasażerów:</strong> emigracja zarobkowa (UK, Norwegia), turystyka, podróże biznesowe</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ile wynosi odszkodowanie za odwołany lot z Katowic?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od <strong>długości trasy</strong>:
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Euro className="w-5 h-5 text-blue-600" />
              Tabela odszkodowań WE 261/2004
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>Do 1500 km</strong> (np. Katowice-Londyn, Oslo, Dublin, Dortmund)</span>
                  <span className="text-2xl font-bold text-blue-600">250 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>1500-3500 km</strong> (np. Katowice-Alicante, Malaga, Tenerife)</span>
                  <span className="text-2xl font-bold text-blue-600">400 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>Powyżej 3500 km</strong> (loty intercontinentalne)</span>
                  <span className="text-2xl font-bold text-blue-600">600 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ważne dla pasażerów z Katowic!</h3>
                <p className="text-gray-700">
                  <strong>Bilet Wizz Air za 59 zł = 250 € odszkodowania!</strong> Katowice-Londyn, Katowice-Oslo, Katowice-Dublin - wszystkie te popularne trasy uprawniają do <strong>250 € rekompensaty</strong> przy odwołaniu, niezależnie od tego, ile zapłaciłeś za bilet.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęstsze problemy z odwołanymi lotami z Katowic
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">1. Wizz Air odwołuje loty do UK (Londyn, Birmingham, Doncaster)</h3>
              <p className="text-gray-700">
                <strong>Katowice-Londyn to jedna z najbardziej dotkniętych tras odwołaniami.</strong> Wizz Air często odwołuje loty z Katowic do UK z powodu <strong>"problemów operacyjnych"</strong> lub <strong>"braku załogi"</strong>. To <strong>NIE są nadzwyczajne okoliczności</strong> - odszkodowanie przysługuje!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/wizz-air-katowice-opoznienia-reklamacja" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Wizz Air Katowice opóźnienia - jak reklamować?
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">2. Ryanair oferuje "alternatywny lot" przez Kraków</h3>
              <p className="text-gray-700">
                Ryanair czasem odwołuje lot z Katowic i <strong>proponuje przelot przez Kraków</strong> (120 km). Jeśli to powoduje znaczące opóźnienie lub wymaga własnego transportu do Krakowa, <strong>nadal przysługuje odszkodowanie</strong>.
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">3. Odwołanie lotu w sezonie zimowym (mgły, opady śniegu)</h3>
              <p className="text-gray-700">
                Katowice-Pyrzowice są <strong>podatne na mgły i opady śniegu</strong> w sezonie zimowym. Linie lotnicze często powołują się na <strong>"warunki pogodowe"</strong>, ale jeśli inne loty w tym samym czasie nie były odwołane, to <strong>nie jest nadzwyczajna okoliczność</strong>.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">4. Grupowe rezerwacje (wycieczki, delegacje)</h3>
              <p className="text-gray-700">
                Katowice obsługują wiele <strong>lotów grupowych</strong> (wycieczki, delegacje firmowe). Każdy pasażer z grupy ma <strong>indywidualne prawo do odszkodowania</strong> - nie tylko organizator!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/wizz-air-grupowa-rezerwacja-roszczenie" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Wizz Air grupowa rezerwacja - roszczenie
                </Link>
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak dochodzić odszkodowania za odwołany lot z Katowic? Krok po kroku
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Zbierz dokumenty potwierdzające odwołanie</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>Potwierdzenie rezerwacji (numer PNR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>E-mail/SMS od linii lotniczej o odwołaniu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>Boarding pass (jeśli otrzymałeś)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>Zdjęcia tablicy odlotów w Katowicach (opcjonalnie)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Złóż reklamację do linii lotniczej</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Termin:</strong> maksymalnie <strong>3 lata</strong> od odwołania lotu (przedawnienie w Polsce).
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Wizz Air:</strong> claim.wizzair.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Ryanair:</strong> formularz online na ryanair.com/customer-service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>LOT:</strong> lot.com/pl/pl/kontakt</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Linia odmówiła? Skorzystaj z pomocy prawnej</h3>
                  <p className="text-gray-700 mb-3">
                    <strong>Wskaźnik odmów z Katowic:</strong> Wizz Air odmawia w <strong>24% przypadków</strong>, Ryanair w <strong>31%</strong>. Często odmowy są bezpodstawne, szczególnie przy lotach do UK.
                  </p>
                  <div className="bg-blue-50 p-4 rounded">
                    <p className="text-gray-900 font-semibold mb-2">
                      ClaimWinger zajmie się Twoją sprawą bez ryzyka:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>✓ Prowizja <strong>tylko od wygranej</strong> (25% + VAT)</li>
                      <li>✓ Brak opłat z góry</li>
                      <li>✓ 78% skuteczności w Polsce</li>
                      <li>✓ Wsparcie prawne i reprezentacja w sądzie</li>
                    </ul>
                    <a
                      href="https://claimwinger.com/pl/odwolany-lot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                    >
                      Sprawdź odszkodowanie za odwołany lot
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Kiedy NIE przysługuje odszkodowanie?
          </h2>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-600" />
              Nadzwyczajne okoliczności (art. 5 ust. 3 WE 261)
            </h3>
            <p className="text-gray-700 mb-3">
              Odszkodowanie <strong>nie przysługuje</strong>, jeśli odwołanie było spowodowane:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>Ekstremalne warunki pogodowe</strong> (gęsta mgła uniemożliwiająca starty, silna burza śnieżna zamykająca lotnisko)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong> - ale strajk załogi Wizz Air/Ryanair = odszkodowanie!</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>Zagrożenie bezpieczeństwa</strong> (atak terrorystyczny, bird strike potwierdzony raportem)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>Decyzja organów państwowych</strong> (zamknięcie lotniska, zakaz lotów)</span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Uwaga!</strong> Lekka mgła, opady śniegu przy działającym lotnisku, czy "problemy operacyjne" <strong>NIE SĄ nadzwyczajnymi okolicznościami</strong>. Jeśli masz wątpliwości, skonsultuj sprawę z prawnikiem.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy przysługuje mi odszkodowanie za odwołany lot Wizz Air Katowice-Londyn?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Katowice-Londyn (KTW-LTN/LGW/STN) to trasa <strong>poniżej 1500 km</strong>, więc przysługuje Ci <strong>250 € odszkodowania</strong> przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem).
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Wizz Air odwołał lot z powodu "problemów operacyjnych". Czy to nadzwyczajna okoliczność?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Nie!</strong> "Problemy operacyjne", "brak załogi", "rotacja samolotów" to <strong>NIE SĄ nadzwyczajne okoliczności</strong>. Linia lotnicza musi zapewnić rezerwową załogę i planować rotację - to jej obowiązek. <strong>Odszkodowanie przysługuje!</strong>
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ryanair zaproponował przelot przez Kraków. Czy muszę się zgodzić?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Nie musisz.</strong> Jeśli alternatywny lot przez Kraków jest o znacznie innej godzinie, wymaga własnego transportu (120 km), lub powoduje inne niedogodności, możesz <strong>odmówić i żądać odszkodowania</strong> jak za odwołany lot.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Lot został odwołany z powodu mgły w Katowicach. Czy przysługuje odszkodowanie?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Zależy.</strong> Jeśli mgła była na tyle gęsta, że <strong>zamknęła lotnisko dla wszystkich samolotów</strong>, to jest nadzwyczajna okoliczność. Ale jeśli inne loty tego samego dnia leciały normalnie, to <strong>odszkodowanie przysługuje</strong>!
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Leciałem w grupie z Katowic. Czy każdy pasażer ma prawo do odszkodowania?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Każdy pasażer ma <strong>indywidualne prawo do odszkodowania</strong>, niezależnie od tego, czy leciał sam czy w grupie. Organizator wycieczki nie może "zgłosić reklamacji zbiorowej" - każdy musi złożyć osobno.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ile czasu mam na zgłoszenie reklamacji za lot z Katowic?
              </summary>
              <p className="text-gray-700 mt-3">
                W Polsce termin przedawnienia wynosi <strong>3 lata</strong> od daty lotu. Zalecamy jednak zgłoszenie reklamacji <strong>jak najszybciej</strong> - im więcej czasu minie, tym trudniej zebrać dowody.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">
              Odwołany lot z Katowic? Sprawdź swoje odszkodowanie!
            </h2>
            <p className="mb-6 text-blue-100">
              Nie pozwól, aby Wizz Air czy Ryanair zignorowały Twoje prawa. ClaimWinger pomoże Ci uzyskać 250-600 € odszkodowania bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl/odwolany-lot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
              >
                Sprawdź odszkodowanie
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/ile-mozesz-dostac"
                className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
              >
                Kalkulator odszkodowań
                <Euro className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Powiązane artykuły
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              href="/blog/wizz-air-katowice-opoznienia-reklamacja"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Wizz Air Katowice opóźnienia — jak reklamować?
              </h3>
              <p className="text-gray-600 text-sm">
                Przewodnik po najczęstszych problemach z Wizz Air w Katowicach.
              </p>
            </Link>

            <Link
              href="/blog/wizz-air-grupowa-rezerwacja-roszczenie"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Wizz Air grupowa rezerwacja — roszczenie
              </h3>
              <p className="text-gray-600 text-sm">
                Jak uzyskać odszkodowanie dla całej grupy?
              </p>
            </Link>

            <Link
              href="/blog/lotnisko-katowice-odszkodowanie"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Lotnisko Katowice odszkodowanie — kompletny przewodnik
              </h3>
              <p className="text-gray-600 text-sm">
                Wszystko o odszkodowaniach za loty z Katowic-Pyrzowice.
              </p>
            </Link>

            <Link
              href="/blog/wizz-air-odmowil-odszkodowania"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Wizz Air odmówił odszkodowania — co zrobić?
              </h3>
              <p className="text-gray-600 text-sm">
                Skuteczne metody walki z bezpodstawnymi odmowami.
              </p>
            </Link>
          </div>

          <section itemScope itemType="https://schema.org/FAQPage" className="hidden">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy przysługuje mi odszkodowanie za odwołany lot Wizz Air Katowice-Londyn?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Katowice-Londyn (KTW-LTN/LGW/STN) to trasa poniżej 1500 km, więc przysługuje Ci 250 € odszkodowania przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem) według rozporządzenia WE 261/2004.
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Wizz Air odwołał lot z powodu problemów operacyjnych. Czy to nadzwyczajna okoliczność?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Nie! Problemy operacyjne, brak załogi, rotacja samolotów to NIE SĄ nadzwyczajne okoliczności. Linia lotnicza musi zapewnić rezerwową załogę i planować rotację - to jej obowiązek. Odszkodowanie 250-600 € przysługuje!
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Ryanair zaproponował przelot przez Kraków. Czy muszę się zgodzić?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Nie musisz. Jeśli alternatywny lot przez Kraków jest o znacznie innej godzinie, wymaga własnego transportu (120 km), lub powoduje inne niedogodności, możesz odmówić i żądać odszkodowania jak za odwołany lot (250-600 €).
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Lot został odwołany z powodu mgły w Katowicach. Czy przysługuje odszkodowanie?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Zależy. Jeśli mgła była na tyle gęsta, że zamknęła lotnisko dla wszystkich samolotów, to jest nadzwyczajna okoliczność (brak odszkodowania). Ale jeśli inne loty tego samego dnia leciały normalnie, to odszkodowanie przysługuje!
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Leciałem w grupie z Katowic. Czy każdy pasażer ma prawo do odszkodowania?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Każdy pasażer ma indywidualne prawo do odszkodowania 250-600 €, niezależnie od tego, czy leciał sam czy w grupie. Organizator wycieczki nie może zgłosić reklamacji zbiorowej - każdy musi złożyć osobno.
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}