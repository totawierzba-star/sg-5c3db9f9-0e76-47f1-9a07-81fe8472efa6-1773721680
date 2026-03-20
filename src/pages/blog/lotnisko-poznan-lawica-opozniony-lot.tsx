import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertCircle, Plane, ArrowRight, Euro } from "lucide-react";

export default function LotnioskoPoznanLawicaOpoznionyLot() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Poznań-Ławica — odszkodowanie za opóźniony lot | ProblemLot.pl"
        description="Opóźniony lot z Poznania POZ? Sprawdź, jak uzyskać 250-600 € odszkodowania. Ryanair, Wizz Air, LOT - poznaj swoje prawa jako pasażer."
        url="https://problemlot.pl/blog/lotnisko-poznan-lawica-opozniony-lot"
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
            Lotnisko Poznań-Ławica — odszkodowanie za opóźniony lot
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
                <strong>Opóźniony lot z Poznania POZ?</strong> Przy opóźnieniu &gt;3 godziny przysługuje Ci <strong>250-600 € odszkodowania</strong> według rozporządzenia WE 261/2004, niezależnie od linii lotniczej (Ryanair, Wizz Air, LOT) i ceny biletu.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Lotnisko Poznań-Ławica (POZ) - regionalne centrum lotnicze
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Port Lotniczy Poznań-Ławica (POZ)</strong> to <strong>piąte co do wielkości lotnisko w Polsce</strong>. Obsługuje rocznie około 2,5 mln pasażerów, oferując głównie połączenia europejskie. To ważna baza dla Ryanair i Wizz Air oraz regionalnych przewoźników.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Najważniejsze informacje o POZ
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kod IATA:</strong> POZ (Poznań)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Główne linie lotnicze:</strong> Ryanair, Wizz Air, LOT Polish Airlines, Lufthansa</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Najpopularniejsze kierunki:</strong> Londyn, Dublin, Eindhoven, Dortmund, Frankfurt, Monachium</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Roczny ruch:</strong> ~2,5 mln pasażerów (2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Specjalizacja:</strong> Połączenia lowcost + biznesowe (Lufthansa, LOT do WAW)</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ile wynosi odszkodowanie za opóźniony lot z Poznania?
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od <strong>długości trasy i czasu opóźnienia</strong>:
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
              <Euro className="w-5 h-5 text-blue-600" />
              Tabela odszkodowań WE 261/2004
            </h3>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>Do 1500 km + opóźnienie &gt;3h</strong> (np. POZ-Londyn, Dublin, Frankfurt)</span>
                  <span className="text-2xl font-bold text-blue-600">250 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>1500-3500 km + opóźnienie &gt;3h</strong> (np. POZ-Barcelona, Lizbona, Ateny)</span>
                  <span className="text-2xl font-bold text-blue-600">400 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>Powyżej 3500 km + opóźnienie &gt;4h</strong> (rzadkie z POZ - głównie via)</span>
                  <span className="text-2xl font-bold text-blue-600">600 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ważne dla pasażerów z Poznania!</h3>
                <p className="text-gray-700">
                  <strong>Poznań-Ławica obsługuje głównie loty europejskie do 1500 km.</strong> Oznacza to, że większość opóźnionych lotów kwalifikuje się do <strong>250 € odszkodowania</strong> (przy opóźnieniu &gt;3h).
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęstsze problemy z opóźnionymi lotami z Poznania POZ
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">1. Ryanair opóźnia loty z powodu "rotacji samolotów"</h3>
              <p className="text-gray-700">
                Ryanair to <strong>największy przewoźnik w Poznaniu</strong>. Często opóźnia loty z powodu <strong>"problemów operacyjnych"</strong> lub <strong>"rotacji samolotów"</strong>. To <strong>NIE są nadzwyczajne okoliczności</strong> - odszkodowanie przysługuje!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/ryanair-odmowil-odszkodowania" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Ryanair odmówił odszkodowania
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">2. Wizz Air oferuje voucher zamiast gotówki</h3>
              <p className="text-gray-700">
                Wizz Air regularnie obsługuje trasy z Poznania i często <strong>automatycznie wystawia vouchery</strong> zamiast wypłacać odszkodowanie. Pasażer ma prawo <strong>żądać wypłaty gotówki</strong> - voucher jest dobrowolny!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/wizz-air-voucher-zamiast-gotowki" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Wizz Air voucher zamiast gotówki
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">3. LOT opóźnia loty do Warszawy (missed connections)</h3>
              <p className="text-gray-700">
                Jeśli lecisz LOT <strong>POZ → WAW → dalej</strong> (np. do USA/Azji) i pierwszy odcinek się opóźnił, powodując utratę przesiadki, przysługuje Ci odszkodowanie za <strong>całą trasę</strong> (liczony dystans do celu końcowego)!
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/utracona-przesiadka-odszkodowanie" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Utracona przesiadka odszkodowanie
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">4. Lufthansa opóźnia loty z Poznania przez Frankfurt</h3>
              <p className="text-gray-700">
                Lufthansa regularnie opóźnia loty <strong>POZ → FRA</strong> z powodu <strong>"problemów w porcie docelowym"</strong>. Frankfurt (FRA) to jeden z najbardziej zatłoczonych portów w Europie - ale to <strong>NIE jest nadzwyczajna okoliczność</strong>. Odszkodowanie przysługuje!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak dochodzić odszkodowania za opóźniony lot z Poznania? Krok po kroku
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Zbierz dokumenty potwierdzające opóźnienie</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>Potwierdzenie rezerwacji (numer PNR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>Boarding pass (dowód wejścia na pokład)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>Zdjęcia tablicy odlotów/przylotów w POZ (opcjonalnie)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-1" />
                      <span>E-mail/SMS od linii lotniczej o opóźnieniu</span>
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
                    <strong>Termin:</strong> maksymalnie <strong>3 lata</strong> od opóźnienia lotu (przedawnienie w Polsce).
                  </p>
                  <ul className="space-y-1 text-gray-700">
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
                      <span><strong>LOT:</strong> lot.com/pl/pl/kontakt</span>
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
                    <strong>Wskaźnik odmów z Poznania POZ:</strong> Ryanair odmawia w <strong>~31% przypadków</strong>, Wizz Air w <strong>24%</strong>, LOT w <strong>~18%</strong>. Często odmowy są bezpodstawne.
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
                      href="https://claimwinger.com/pl/opozniony-lot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors mt-4"
                    >
                      Sprawdź odszkodowanie za opóźniony lot
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
              Odszkodowanie <strong>nie przysługuje</strong>, jeśli opóźnienie było spowodowane:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold">✗</span>
                <span><strong>Ekstremalne warunki pogodowe</strong> (silna burza, huragan, gęsta mgła <strong>zamykająca lotnisko</strong>)</span>
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
              <strong>Uwaga!</strong> "Problemy operacyjne", "rotacja samolotów", "zatłoczenie w porcie docelowym" czy "brak załogi" <strong>NIE SĄ nadzwyczajnymi okolicznościami</strong>. Linia musi być przygotowana na typowe problemy operacyjne!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy przysługuje mi odszkodowanie za lot Ryanair POZ-Londyn opóźniony o 4 godziny?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> POZ-Londyn to trasa <strong>do 1500 km</strong> (~1050 km), więc przy opóźnieniu &gt;3h przysługuje Ci <strong>250 € odszkodowania</strong> (jeśli opóźnienie nie było spowodowane nadzwyczajnymi okolicznościami).
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ryanair opóźnił lot z powodu "rotacji samolotów". Czy to nadzwyczajna okoliczność?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Nie!</strong> "Rotacja samolotów", "problemy operacyjne", "brak załogi" to <strong>NIE SĄ nadzwyczajne okoliczności</strong>. Linia lotnicza musi zapewnić rezerwowy samolot i załogę - to jej obowiązek. <strong>Odszkodowanie 250 € przysługuje!</strong>
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Lufthansa opóźnił lot z powodu "problemów w porcie docelowym" (Frankfurt). Czy to nadzwyczajna okoliczność?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Zazwyczaj NIE!</strong> Zatłoczenie w porcie docelowym (FRA) jest <strong>typowym problemem operacyjnym</strong>. Linia musi uwzględniać opóźnienia na zatłoczonych portach w planowaniu. Odszkodowanie przysługuje!
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Straciłem przesiadkę w Poznaniu. Czy przysługuje odszkodowanie?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Jeśli pierwszy lot się opóźnił, straciłeś przesiadkę w POZ i dotarłeś do celu końcowego z opóźnieniem &gt;3h, przysługuje Ci odszkodowanie za <strong>całą trasę</strong> (liczony dystans od startu do celu końcowego).
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy tanio kupiony bilet (np. 49 zł) uprawnia do odszkodowania 250 €?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od długości trasy i czasu opóźnienia. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania.
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
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">
              Opóźniony lot z Poznania POZ? Sprawdź swoje odszkodowanie!
            </h2>
            <p className="mb-6 text-blue-100">
              Nie pozwól, aby Ryanair, Wizz Air czy LOT zignorowały Twoje prawa. ClaimWinger pomoże Ci uzyskać 250-600 € odszkodowania bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl/opozniony-lot"
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
              href="/blog/utracona-przesiadka-odszkodowanie"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Utracona przesiadka — odszkodowanie
              </h3>
              <p className="text-gray-600 text-sm">
                Straciłeś przesiadkę w POZ? Sprawdź swoje prawa.
              </p>
            </Link>

            <Link
              href="/blog/lotnisko-warszawa-chopin-opozniony-lot"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Lotnisko Warszawa Chopin — odszkodowanie za opóźniony lot
              </h3>
              <p className="text-gray-600 text-sm">
                Porównaj z największym lotniskiem w Polsce.
              </p>
            </Link>
          </div>

          <section itemScope itemType="https://schema.org/FAQPage" className="hidden">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy przysługuje mi odszkodowanie za lot Ryanair POZ-Londyn opóźniony o 4 godziny?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! POZ-Londyn to trasa do 1500 km (~1050 km), więc przy opóźnieniu większym niż 3 godziny przysługuje Ci 250 € odszkodowania według rozporządzenia WE 261/2004 (jeśli opóźnienie nie było spowodowane nadzwyczajnymi okolicznościami).
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Ryanair opóźnił lot z powodu rotacji samolotów. Czy to nadzwyczajna okoliczność?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Nie! Rotacja samolotów, problemy operacyjne, brak załogi to NIE SĄ nadzwyczajne okoliczności. Linia lotnicza musi zapewnić rezerwowy samolot i załogę - to jej obowiązek. Odszkodowanie 250 € przysługuje!
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy tanio kupiony bilet (np. 49 zł) uprawnia do odszkodowania 250 €?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Wysokość odszkodowania nie zależy od ceny biletu, ale od długości trasy i czasu opóźnienia. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania: 250 € (do 1500 km), 400 € (1500-3500 km), lub 600 € (powyżej 3500 km).
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
