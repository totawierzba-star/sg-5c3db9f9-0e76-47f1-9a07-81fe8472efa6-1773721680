import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertCircle, Plane, ArrowRight, Euro } from "lucide-react";

export default function LotniskoZielonaGoraBabimostOpoznionyLot() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Zielona Góra-Babimost — odszkodowanie za opóźniony lot | ProblemLot.pl"
        description="Opóźniony lot z Zielonej Góry IEG? Sprawdź, jak uzyskać 250-600 € odszkodowania. Poznaj swoje prawa jako pasażer."
        url="https://problemlot.pl/blog/lotnisko-zielona-gora-babimost-opozniony-lot"
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
            Lotnisko Zielona Góra-Babimost — odszkodowanie za opóźniony lot
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
                <strong>Opóźniony lot z Zielonej Góry IEG?</strong> Przy opóźnieniu &gt;3 godziny przysługuje Ci <strong>250-600 € odszkodowania</strong> według rozporządzenia WE 261/2004, niezależnie od linii lotniczej i ceny biletu.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Port Lotniczy Zielona Góra-Babimost (IEG)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Port Lotniczy Zielona Góra-Babimost (IEG)</strong> to <strong>jedno z najmniejszych lotnisk regionalnych w Polsce</strong>. Obsługuje około 20-30 tys. pasażerów rocznie, oferując sporadyczne loty czarterowe oraz okazjonalne połączenia cargo. Lotnisko położone jest około 40 km od centrum Zielonej Góry w miejscowości Babimost.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Najważniejsze informacje o IEG
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kod IATA:</strong> IEG (Zielona Góra)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Główne linie lotnicze:</strong> Sporadyczne czartery, brak regularnych połączeń lowcost</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Najpopularniejsze kierunki:</strong> Czartery wakacyjne (sezonowe)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Roczny ruch:</strong> ~20-30 tys. pasażerów (2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Specjalizacja:</strong> Cargo + okazjonalne czartery wakacyjne</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ile wynosi odszkodowanie za opóźniony lot z Zielonej Góry?
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
                  <span className="text-gray-700"><strong>Do 1500 km + opóźnienie &gt;3h</strong> (krótkie europejskie)</span>
                  <span className="text-2xl font-bold text-blue-600">250 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>1500-3500 km + opóźnienie &gt;3h</strong> (czartery wakacyjne)</span>
                  <span className="text-2xl font-bold text-blue-600">400 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>Powyżej 3500 km + opóźnienie &gt;4h</strong> (bardzo rzadkie z IEG)</span>
                  <span className="text-2xl font-bold text-blue-600">600 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ważne dla pasażerów z Zielonej Góry!</h3>
                <p className="text-gray-700">
                  <strong>IEG to jedno z najmniejszych lotnisk w Polsce z bardzo ograniczoną liczbą lotów pasażerskich.</strong> Większość lotów to <strong>czartery wakacyjne 1500-3500 km (400 € odszkodowania)</strong> przy opóźnieniu &gt;3h.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęstsze problemy z opóźnionymi lotami z Zielonej Góry IEG
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">1. Bardzo małe lotnisko = ekstremalne problemy operacyjne</h3>
              <p className="text-gray-700">
                <strong>IEG to jedno z najmniejszych lotnisk w Polsce</strong> z minimalną infrastrukturą. Linie czarterowe często tłumaczą opóźnienia "ograniczeniami małego lotniska", ale <strong>to NIE zwalnia z odszkodowania</strong> - linia musi być przygotowana na trudności operacyjne!
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">2. Czartery wakacyjne - jedyne loty pasażerskie</h3>
              <p className="text-gray-700">
                Praktycznie wszystkie loty pasażerskie z IEG to <strong>loty czarterowe (Egipt, Tunezja, Turcja)</strong>. Linie czarterowe mają tendencję do opóźniania lotów z powodu "problemów z samolotami" - ale <strong>to NIE są nadzwyczajne okoliczności</strong>! Odszkodowanie 400 € przysługuje.
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/enter-air-odszkodowanie-czarter" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Enter Air odszkodowanie czarter
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">3. Bardzo rzadkie loty - pasażerowie nie znają swoich praw</h3>
              <p className="text-gray-700">
                Z powodu małej liczby lotów pasażerskich z IEG, wielu pasażerów <strong>nie wie o swoich prawach</strong> i rezygnuje z reklamacji. Nie pozwól się oszukać - <strong>WE 261/2004 obowiązuje na wszystkich lotniskach UE</strong>, nawet najmniejszych!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak dochodzić odszkodowania za opóźniony lot z Zielonej Góry? Krok po kroku
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
                      <span>Zdjęcia tablicy odlotów w IEG (opcjonalnie)</span>
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
                  <p className="text-gray-700 mb-2">
                    <strong>Formularz reklamacyjny linii czarterowych:</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Enter Air: enterair.pl/kontakt</li>
                    <li>• Inne czartery: sprawdź dane kontaktowe na bilecie</li>
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
                    <strong>Wskaźnik odmów lotów czarterowych z IEG:</strong> ~<strong>40%</strong> reklamacji jest odrzucanych bezpodstawnie. ClaimWinger skutecznie walczy z tymi odmowami.
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
                <span><strong>Ekstremalne warunki pogodowe</strong> (silna burza, huragan, gęsta mgła <strong>zamykająca lotnisko IEG</strong>)</span>
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
              <strong>Uwaga!</strong> "Problemy operacyjne", "bardzo małe lotnisko", "ograniczenia infrastruktury" czy "opóźnienie czarteru" <strong>NIE SĄ nadzwyczajnymi okolicznościami</strong>!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy przysługuje mi odszkodowanie za czarter z Zielonej Góry opóźniony o 5 godzin?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Większość czarterów z IEG to trasy <strong>1500-3500 km</strong> (Egipt, Tunezja, Turcja), więc przy opóźnieniu &gt;3h przysługuje Ci <strong>400 € odszkodowania</strong> (jeśli opóźnienie nie było spowodowane nadzwyczajnymi okolicznościami).
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Linia czarterowa tłumaczy się "bardzo małym lotniskiem". Czy to nadzwyczajna okoliczność?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Nie!</strong> Bardzo małe lotnisko to <strong>NIE jest wymówka</strong>. Linia musi być przygotowana na trudności operacyjne na wszystkich lotniskach, z których operuje - nawet najmniejszych. <strong>Odszkodowanie 400 € przysługuje!</strong>
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy czarter z tak małego lotniska jak IEG podlega rozporządzeniu WE 261?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> WE 261/2004 obowiązuje <strong>na wszystkich lotniskach UE</strong>, niezależnie od wielkości. Nawet najmniejsze lotnisko regionalne musi przestrzegać praw pasażerów!
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Jak długo mogę domagać się odszkodowania za opóźniony lot z Zielonej Góry?
              </summary>
              <p className="text-gray-700 mt-3">
                W Polsce termin przedawnienia to <strong>3 lata</strong> od opóźnienia lotu. Nawet bardzo stare loty (np. z 2023 roku) mogą być reklamowane w 2026!
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">
              Opóźniony lot z Zielonej Góry IEG? Sprawdź swoje odszkodowanie!
            </h2>
            <p className="mb-6 text-blue-100">
              Nie pozwól, aby linie czarterowe zignorowały Twoje prawa. ClaimWinger pomoże Ci uzyskać 250-600 € odszkodowania bez ryzyka.
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
              href="/blog/enter-air-odszkodowanie-czarter"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Enter Air odszkodowanie czarter — poznaj swoje prawa
              </h3>
              <p className="text-gray-600 text-sm">
                Specyfika czarterów i odszkodowania dla lotów wakacyjnych.
              </p>
            </Link>

            <Link
              href="/blog/lotnisko-lublin-opozniony-lot"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Lotnisko Lublin — odszkodowanie za opóźniony lot
              </h3>
              <p className="text-gray-600 text-sm">
                Inne małe lotnisko regionalne w Polsce.
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

            <Link
              href="/blog/ile-odszkodowania-opozniony-lot"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Ile odszkodowania za opóźniony lot? Tabela 2026
              </h3>
              <p className="text-gray-600 text-sm">
                Pełna tabela odszkodowań 250-600 €.
              </p>
            </Link>
          </div>

          <section itemScope itemType="https://schema.org/FAQPage" className="hidden">
            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy przysługuje mi odszkodowanie za czarter z Zielonej Góry opóźniony o 5 godzin?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Większość czarterów z IEG to trasy 1500-3500 km (Egipt, Tunezja, Turcja), więc przy opóźnieniu większym niż 3 godziny przysługuje Ci 400 € odszkodowania według rozporządzenia WE 261/2004 (jeśli opóźnienie nie było spowodowane nadzwyczajnymi okolicznościami).
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Linia czarterowa tłumaczy się bardzo małym lotniskiem. Czy to nadzwyczajna okoliczność?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Nie! Bardzo małe lotnisko to NIE jest wymówka. Linia musi być przygotowana na trudności operacyjne na wszystkich lotniskach, z których operuje - nawet najmniejszych. Odszkodowanie 400 € przysługuje!
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy czarter z tak małego lotniska jak IEG podlega rozporządzeniu WE 261?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! WE 261/2004 obowiązuje na wszystkich lotniskach UE, niezależnie od wielkości. Nawet najmniejsze lotnisko regionalne musi przestrzegać praw pasażerów!
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
