import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertCircle, Phone, FileText, Clock, Euro, Plane, ArrowRight } from "lucide-react";

export default function LotniskoWarszawaChopinOdwolanyLot() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Warszawa Chopin — odszkodowanie za odwołany lot | ProblemLot.pl"
        description="Odwołany lot z Warszawy WAW? Sprawdź, jak uzyskać 250-600 € odszkodowania. LOT, Ryanair, Wizz Air - poznaj swoje prawa jako pasażer."
        url="https://problemlot.pl/blog/lotnisko-warszawa-chopin-odwolany-lot"
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
            Lotnisko Warszawa Chopin — odszkodowanie za odwołany lot
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <span>11 marca 2026</span>
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
                <strong>Odwołany lot z Warszawy WAW?</strong> Przysługuje Ci <strong>250-600 € odszkodowania</strong> według rozporządzenia WE 261/2004, niezależnie od linii lotniczej (LOT, Ryanair, Wizz Air, Lufthansa) i ceny biletu. Warszawa Chopin to największy hub w Polsce.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Lotnisko Warszawa Chopina (WAW) - największe lotnisko w Polsce
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Port Lotniczy im. Fryderyka Chopina (WAW)</strong> to <strong>największe i najbardziej ruchliwe lotnisko w Polsce</strong>. Obsługuje rocznie ponad 18 mln pasażerów, oferując połączenia z całym światem. To główny hub dla LOT Polish Airlines oraz baza dla Ryanair i Wizz Air.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Najważniejsze informacje o WAW
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kod IATA:</strong> WAW (Warsaw)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Główne linie lotnicze:</strong> LOT Polish Airlines, Ryanair, Wizz Air, Lufthansa, Turkish Airlines</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Najpopularniejsze kierunki:</strong> Londyn, Frankfurt, Amsterdam, Nowy Jork, Chicago, Tel Awiw, Tokio</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Roczny ruch:</strong> ~18 mln pasażerów (2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Hub dla:</strong> LOT Polish Airlines (Star Alliance)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ile wynosi odszkodowanie za odwołany lot z Warszawy?
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
                  <span className="text-gray-700"><strong>Do 1500 km</strong> (np. WAW-Londyn, Frankfurt, Amsterdam)</span>
                  <span className="text-2xl font-bold text-blue-600">250 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>1500-3500 km</strong> (np. WAW-Barcelona, Tel Awiw, Dubaj)</span>
                  <span className="text-2xl font-bold text-blue-600">400 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>Powyżej 3500 km</strong> (np. WAW-JFK, Chicago, Tokio)</span>
                  <span className="text-2xl font-bold text-blue-600">600 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ważne dla pasażerów z Warszawy!</h3>
                <p className="text-gray-700">
                  <strong>LOT WAW-JFK za 1200 zł = 600 € odszkodowania!</strong> Trasy transatlantyckie z Warszawy to dystanse powyżej 3500 km, co oznacza <strong>600 € rekompensaty</strong> przy odwołaniu, niezależnie od ceny biletu.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęstsze problemy z odwołanymi lotami z Warszawy WAW
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">1. LOT Polish Airlines odwołuje loty długodystansowe</h3>
              <p className="text-gray-700">
                <strong>LOT to główny przewoźnik z Warszawy WAW.</strong> Często odwołuje loty transatlantyckie (JFK, ORD, YYZ) oraz do Azji (NRT, PEK) z powodu <strong>"problemów operacyjnych"</strong>. To <strong>NIE są nadzwyczajne okoliczności</strong> - odszkodowanie 600 € przysługuje!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/lot-odmowil-odszkodowania" className="text-blue-600 hover:underline">
                  → Czytaj więcej: LOT odmówił odszkodowania
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">2. Ryanair odwołuje loty do UK (Londyn, Dublin, Edinburgh)</h3>
              <p className="text-gray-700">
                Ryanair często odwołuje loty z Warszawy <strong>ostatnio (13-14 dni przed wylotem)</strong>, próbując uniknąć wypłaty odszkodowania. <strong>To nielegalne!</strong> Odszkodowanie przysługuje przy odwołaniu mniej niż 14 dni przed lotem.
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/ryanair-odwolanie-14-dni-przed-lotem" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Ryanair odwołanie 14 dni przed lotem
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">3. Wizz Air oferuje voucher zamiast gotówki</h3>
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
              <h3 className="font-bold text-gray-900 mb-2">4. Odwołanie z powodu "usterki technicznej"</h3>
              <p className="text-gray-700">
                Linie lotnicze często powołują się na <strong>"usterkę techniczną"</strong> jako wymówkę. <strong>To NIE jest nadzwyczajna okoliczność!</strong> Samolot musi być sprawny przed lotem - to obowiązek przewoźnika. Odszkodowanie przysługuje!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/lot-usterka-techniczna-nadzwyczajna-okolicznosc" className="text-blue-600 hover:underline">
                  → Czytaj więcej: LOT usterka techniczna
                </Link>
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak dochodzić odszkodowania za odwołany lot z Warszawy? Krok po kroku
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
                      <span>Zdjęcia tablicy odlotów w WAW (opcjonalnie)</span>
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
                      <span><strong>LOT:</strong> lot.com/pl/pl/kontakt</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Ryanair:</strong> ryanair.com/customer-service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Wizz Air:</strong> claim.wizzair.com</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span><strong>Lufthansa:</strong> lufthansa.com/pl/pl/kontakt</span>
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
                    <strong>Wskaźnik odmów z Warszawy WAW:</strong> LOT odmawia w <strong>~18% przypadków</strong>, Ryanair w <strong>31%</strong>, Wizz Air w <strong>24%</strong>. Często odmowy są bezpodstawne.
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
                <span><strong>Ekstremalne warunki pogodowe</strong> (silna burza, huragan, gęsta mgła zamykająca lotnisko)</span>
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
              <strong>Uwaga!</strong> "Problemy operacyjne", "usterka techniczna", "brak załogi" <strong>NIE SĄ nadzwyczajnymi okolicznościami</strong>. Jeśli masz wątpliwości, skonsultuj sprawę z prawnikiem.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy przysługuje mi odszkodowanie za odwołany lot LOT WAW-JFK?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> WAW-JFK to trasa <strong>powyżej 3500 km</strong> (~6900 km), więc przysługuje Ci <strong>600 € odszkodowania</strong> przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem).
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                LOT odwołał lot z powodu "usterki technicznej". Czy to nadzwyczajna okoliczność?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Nie!</strong> Usterka techniczna <strong>NIE jest nadzwyczajną okolicznością</strong> - linia musi zapewnić sprawny samolot przed lotem. <strong>Odszkodowanie 250-600 € przysługuje!</strong>
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ryanair odwołał lot 13 dni przed wylotem. Czy przysługuje odszkodowanie?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Jeśli odwołanie nastąpiło <strong>mniej niż 14 dni przed lotem</strong> (np. 13 dni), przysługuje Ci odszkodowanie 250-600 € (w zależności od dystansu).
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
                Czy tanio kupiony bilet (np. 199 zł) uprawnia do odszkodowania 250-600 €?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od długości trasy. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ile czasu mam na zgłoszenie reklamacji za lot z Warszawy WAW?
              </summary>
              <p className="text-gray-700 mt-3">
                W Polsce termin przedawnienia wynosi <strong>3 lata</strong> od daty lotu. Zalecamy jednak zgłoszenie reklamacji <strong>jak najszybciej</strong> - im więcej czasu minie, tym trudniej zebrać dowody.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">
              Odwołany lot z Warszawy WAW? Sprawdź swoje odszkodowanie!
            </h2>
            <p className="mb-6 text-blue-100">
              Nie pozwól, aby LOT, Ryanair czy Wizz Air zignorowały Twoje prawa. ClaimWinger pomoże Ci uzyskać 250-600 € odszkodowania bez ryzyka.
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
              href="/blog/lot-odmowil-odszkodowania"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                LOT odmówił odszkodowania — co zrobić?
              </h3>
              <p className="text-gray-600 text-sm">
                Skuteczne metody walki z bezpodstawnymi odmowami LOT.
              </p>
            </Link>

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
              href="/blog/lot-usterka-techniczna-nadzwyczajna-okolicznosc"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                LOT usterka techniczna — nadzwyczajna okoliczność?
              </h3>
              <p className="text-gray-600 text-sm">
                Dowiedz się, kiedy usterka techniczna nie jest wymówką.
              </p>
            </Link>
          </div>

          <section itemScope itemType="https://schema.org/FAQPage" className="hidden">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy przysługuje mi odszkodowanie za odwołany lot LOT WAW-JFK?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! WAW-JFK to trasa powyżej 3500 km (~6900 km), więc przysługuje Ci 600 € odszkodowania przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem) według rozporządzenia WE 261/2004.
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">LOT odwołał lot z powodu usterki technicznej. Czy to nadzwyczajna okoliczność?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Nie! Usterka techniczna NIE jest nadzwyczajną okolicznością - linia musi zapewnić sprawny samolot przed lotem. Odszkodowanie 250-600 € przysługuje!
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Ryanair odwołał lot 13 dni przed wylotem. Czy przysługuje odszkodowanie?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Jeśli odwołanie nastąpiło mniej niż 14 dni przed lotem (np. 13 dni), przysługuje Ci odszkodowanie 250-600 € (w zależności od dystansu trasy).
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
              <h3 itemProp="name">Czy tanio kupiony bilet (np. 199 zł) uprawnia do odszkodowania 250-600 €?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Wysokość odszkodowania nie zależy od ceny biletu, ale od długości trasy. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania: 250 € (do 1500 km), 400 € (1500-3500 km), lub 600 € (powyżej 3500 km).
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}