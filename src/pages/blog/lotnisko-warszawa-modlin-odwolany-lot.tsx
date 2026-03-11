import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertCircle, Phone, FileText, Clock, Euro, Plane, ArrowRight } from "lucide-react";

export default function LotnisoModlinOdwolanyLot() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Warszawa Modlin — odszkodowanie za odwołany lot | ProblemLot.pl"
        description="Odwołany lot z Modlina? Sprawdź, jak uzyskać 250-600 € odszkodowania. Ryanair, Wizz Air, LOT - poznaj swoje prawa jako pasażer WMI."
        url="https://problemlot.pl/blog/lotnisko-warszawa-modlin-odwolany-lot"
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
            Lotnisko Warszawa Modlin — odszkodowanie za odwołany lot
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
                <strong>Odwołany lot z Modlina?</strong> Przysługuje Ci <strong>250-600 € odszkodowania</strong> według rozporządzenia WE 261/2004, niezależnie od tego, czy leciałeś Ryanair, Wizz Air czy LOT. Odszkodowanie nie zależy od ceny biletu - przysługuje również za tanie loty lowcost.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Lotnisko Warszawa-Modlin (WMI) - specyfika odwołanych lotów
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Warszawa-Modlin (WMI)</strong> to drugie co do wielkości lotnisko obsługujące Warszawę i jedno z głównych <strong>lotnisk lowcost w Polsce</strong>. Obsługuje głównie połączenia niskobudżetowych linii lotniczych, przede wszystkim <strong>Ryanair</strong> i <strong>Wizz Air</strong>.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Najważniejsze informacje o Modlinie
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kod IATA:</strong> WMI (Warsaw Modlin)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Główne linie lotnicze:</strong> Ryanair (dominujący przewoźnik), Wizz Air</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Popularne kierunki:</strong> Londyn, Dublin, Oslo, Sztokholm, Barcelona, Alicante</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Profil pasażerów:</strong> głównie turystyka indywidualna i podróże biznesowe lowcost</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Charakterystyka:</strong> lotnisko militarne przekształcone na cywilne, infrastruktura podstawowa</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ile wynosi odszkodowanie za odwołany lot z Modlina?
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
                  <span className="text-gray-700"><strong>Do 1500 km</strong> (np. Modlin-Londyn, Oslo, Dublin)</span>
                  <span className="text-2xl font-bold text-blue-600">250 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>1500-3500 km</strong> (np. Modlin-Alicante, Barcelona, Madera)</span>
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
                <h3 className="font-bold text-gray-900 mb-2">Ważne!</h3>
                <p className="text-gray-700">
                  <strong>Bilet Ryanair za 49 zł = 250 € odszkodowania!</strong> Wysokość rekompensaty nie zależy od tego, ile zapłaciłeś za bilet. Nawet najtańsze bilety promocyjne uprawniają do pełnego odszkodowania przy odwołaniu lotu.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęstsze problemy z odwołanymi lotami z Modlina
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">1. Ryanair odwołuje ostatnio (14 dni przed lotem)</h3>
              <p className="text-gray-700">
                Ryanair często odwołuje loty z Modlina <strong>13-14 dni przed planowanym wylotem</strong>, próbując uniknąć wypłaty odszkodowania. <strong>To nielegalne!</strong> Odszkodowanie przysługuje, jeśli odwołanie nastąpiło <strong>mniej niż 14 dni przed lotem</strong>.
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/ryanair-odwolanie-14-dni-przed-lotem" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Ryanair odwołuje lot 14 dni przed wylotem
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">2. Wizz Air oferuje voucher zamiast gotówki</h3>
              <p className="text-gray-700">
                Wizz Air często <strong>automatycznie wystawia vouchery</strong> zamiast wypłacać odszkodowanie. Pasażer ma prawo <strong>żądać wypłaty gotówki</strong> - voucher jest dobrowolny!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/wizz-air-voucher-zamiast-gotowki" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Wizz Air voucher zamiast gotówki
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">3. Zmiana trasy na Chopin bez zgody pasażera</h3>
              <p className="text-gray-700">
                Linie lotnicze czasem <strong>przenoszą lot z Modlina na Chopin</strong> bez zgody pasażera. Jeśli zmiana jest znacząca (np. inna godzina, transfer do Warszawy), to również upoważnia do odszkodowania.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">4. "Problemy operacyjne" jako wymówka</h3>
              <p className="text-gray-700">
                Lowcosty z Modlina często powołują się na <strong>"problemy operacyjne"</strong> lub <strong>"brak załogi"</strong>. To <strong>NIE są nadzwyczajne okoliczności</strong> - odszkodowanie przysługuje!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak dochodzić odszkodowania za odwołany lot z Modlina? Krok po kroku
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
                      <span>Zdjęcia tablicy odlotów w Modlinie (opcjonalnie)</span>
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
                    <strong>Termin:</strong> maksymalnie <strong>3 lata</strong> od odwołania lotu (przedawnienie).
                  </p>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Ryanair:</strong> formularz online na ryanair.com/customer-service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Wizz Air:</strong> claim.wizzair.com</span>
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
                    <strong>Wskaźnik odmów:</strong> Ryanair odmawia w <strong>31% przypadków</strong>, Wizz Air w <strong>24%</strong>. Często odmowy są bezpodstawne.
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
                <span><strong>Ekstremalne warunki pogodowe</strong> (burza, huragan, gęsta mgła uniemożliwiająca starty/lądowania)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>Strajk kontrolerów ruchu lotniczego (ATC)</strong> - ale strajk załogi linii = odszkodowanie!</span>
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
              <strong>Uwaga!</strong> Linie lotnicze często <strong>bezpodstawnie</strong> powołują się na nadzwyczajne okoliczności. Jeśli masz wątpliwości, skonsultuj sprawę z prawnikiem.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy przysługuje mi odszkodowanie, jeśli lot z Modlina został odwołany 10 dni przed wylotem?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Jeśli odwołanie nastąpiło <strong>mniej niż 14 dni przed lotem</strong>, przysługuje Ci odszkodowanie. Ryanair często odwołuje loty 13-14 dni przed wylotem, próbując uniknąć wypłaty - to nielegalne.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy tanio kupiony bilet Ryanair (np. 49 zł) uprawnia do odszkodowania 250 €?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od długości trasy. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Wizz Air zaproponował mi voucher. Czy muszę go przyjąć?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Nie!</strong> Masz prawo <strong>żądać wypłaty gotówki</strong>. Voucher jest dobrowolny - linia nie może cię zmusić do jego przyjęcia. <Link href="/blog/wizz-air-voucher-zamiast-gotowki" className="text-blue-600 hover:underline">→ Więcej o voucherach Wizz Air</Link>
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Lot został przeniesiony z Modlina na Chopin. Czy mogę żądać odszkodowania?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak, jeśli zmiana była znacząca.</strong> Jeśli nowy lot był o innej godzinie, wymagał transferu na Chopin, lub spowodował inne niedogodności, masz prawo do odszkodowania jak za odwołany lot.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ile czasu mam na zgłoszenie reklamacji?
              </summary>
              <p className="text-gray-700 mt-3">
                W Polsce termin przedawnienia wynosi <strong>3 lata</strong> od daty lotu. Nie zwlekaj jednak - im szybciej złożysz reklamację, tym łatwiej udowodnić swoją sprawę.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy Modlin ma specjalne procedury dla odwołanych lotów?
              </summary>
              <p className="text-gray-700 mt-3">
                Modlin to lotnisko lowcost z <strong>podstawową infrastrukturą</strong>. W przypadku odwołania lotu linie lotnicze muszą zapewnić <strong>opiekę (care)</strong> - posiłki, napoje, hotel (jeśli konieczne), ale praktyka pokazuje, że często tego nie robią. Możesz żądać zwrotu kosztów.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">
              Odwołany lot z Modlina? Sprawdź swoje odszkodowanie!
            </h2>
            <p className="mb-6 text-blue-100">
              Nie pozwól, aby linie lotnicze zignorowały Twoje prawa. ClaimWinger pomoże Ci uzyskać 250-600 € odszkodowania bez ryzyka.
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
              href="/blog/ryanair-odwolanie-14-dni-przed-lotem"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Ryanair odwołanie 14 dni przed lotem — czy to legalne?
              </h3>
              <p className="text-gray-600 text-sm">
                Poznaj swoje prawa gdy Ryanair odwołuje lot na granicy 14 dni.
              </p>
            </Link>

            <Link
              href="/blog/wizz-air-voucher-zamiast-gotowki"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Wizz Air voucher zamiast gotówki — jak wymusić wypłatę?
              </h3>
              <p className="text-gray-600 text-sm">
                Dowiedz się, jak żądać gotówki zamiast vouchera od Wizz Air.
              </p>
            </Link>

            <Link
              href="/blog/lotnisko-modlin-odszkodowanie"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Lotnisko Modlin odszkodowanie — kompletny przewodnik
              </h3>
              <p className="text-gray-600 text-sm">
                Wszystko o odszkodowaniach za loty z Warszawy-Modlin.
              </p>
            </Link>

            <Link
              href="/blog/ryanair-odmowil-odszkodowania"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Ryanair odmówił odszkodowania — co zrobić?
              </h3>
              <p className="text-gray-600 text-sm">
                Skuteczne metody walki z bezpodstawnymi odmowami Ryanair.
              </p>
            </Link>
          </div>

          <section itemScope itemType="https://schema.org/FAQPage" className="hidden">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy przysługuje mi odszkodowanie, jeśli lot z Modlina został odwołany 10 dni przed wylotem?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Jeśli odwołanie nastąpiło mniej niż 14 dni przed lotem, przysługuje Ci odszkodowanie 250-600 € według WE 261/2004. Ryanair często odwołuje loty 13-14 dni przed wylotem, próbując uniknąć wypłaty - to nielegalne.
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy tanio kupiony bilet Ryanair (np. 49 zł) uprawnia do odszkodowania 250 €?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Wysokość odszkodowania nie zależy od ceny biletu, ale od długości trasy. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania: 250 € (do 1500 km), 400 € (1500-3500 km), lub 600 € (powyżej 3500 km).
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Wizz Air zaproponował mi voucher. Czy muszę go przyjąć?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Nie! Masz prawo żądać wypłaty gotówki. Voucher jest dobrowolny - linia nie może cię zmusić do jego przyjęcia. Wizz Air często automatycznie wystawia vouchery zamiast wypłacać odszkodowanie, ale to niezgodne z prawem.
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Lot został przeniesiony z Modlina na Chopin. Czy mogę żądać odszkodowania?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak, jeśli zmiana była znacząca. Jeśli nowy lot był o innej godzinie, wymagał transferu na Chopin (35 km), lub spowodował inne niedogodności, masz prawo do odszkodowania jak za odwołany lot (250-600 €).
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Ile czasu mam na zgłoszenie reklamacji za odwołany lot z Modlina?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  W Polsce termin przedawnienia wynosi 3 lata od daty lotu. Nie zwlekaj jednak - im szybciej złożysz reklamację, tym łatwiej udowodnić swoją sprawę i zebrać dowody.
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}