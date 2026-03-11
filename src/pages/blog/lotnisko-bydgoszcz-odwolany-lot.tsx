import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertCircle, Plane, ArrowRight, Euro } from "lucide-react";

export default function LotniskoBydgoszczOdwolanyLot() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Bydgoszcz — odszkodowanie za odwołany lot | ProblemLot.pl"
        description="Odwołany lot z Bydgoszczy BZG? Sprawdź, jak uzyskać 250-600 € odszkodowania. Ryanair, czartery - poznaj swoje prawa jako pasażer."
        url="https://problemlot.pl/blog/lotnisko-bydgoszcz-odwolany-lot"
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
            Lotnisko Bydgoszcz — odszkodowanie za odwołany lot
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
                <strong>Odwołany lot z Bydgoszczy BZG?</strong> Przysługuje Ci <strong>250-600 € odszkodowania</strong> według rozporządzenia WE 261/2004, niezależnie od linii lotniczej i ceny biletu.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Lotnisko Bydgoszcz im. Ignacego Jana Paderewskiego (BZG)
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Port Lotniczy Bydgoszcz (BZG)</strong> to <strong>małe lotnisko regionalne w północno-centralnej Polsce</strong>. Obsługuje około 40-50 tys. pasażerów rocznie, oferując sezonowe połączenia lowcost oraz loty czarterowe. Lotnisko położone jest około 3,5 km od centrum Bydgoszczy.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Najważniejsze informacje o BZG
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kod IATA:</strong> BZG (Bydgoszcz)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Główne linie lotnicze:</strong> Ryanair (dominujący przewoźnik lowcost), sezonowe czartery</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Najpopularniejsze kierunki:</strong> Londyn, Dublin (sezonowe połączenia)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Roczny ruch:</strong> ~40-50 tys. pasażerów (2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Specjalizacja:</strong> Sezonowe połączenia lowcost + czartery wakacyjne</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ile wynosi odszkodowanie za odwołany lot z Bydgoszczy?
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
                  <span className="text-gray-700"><strong>Do 1500 km</strong> (np. BZG-Londyn, Dublin)</span>
                  <span className="text-2xl font-bold text-blue-600">250 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>1500-3500 km</strong> (czartery wakacyjne)</span>
                  <span className="text-2xl font-bold text-blue-600">400 €</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700"><strong>Powyżej 3500 km</strong> (bardzo rzadkie z BZG)</span>
                  <span className="text-2xl font-bold text-blue-600">600 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ważne dla pasażerów z Bydgoszczy!</h3>
                <p className="text-gray-700">
                  <strong>Bydgoszcz obsługuje głównie krótkie loty europejskie do 1500 km.</strong> Większość odwołanych lotów z BZG kwalifikuje się do <strong>250 € odszkodowania</strong>.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęstsze problemy z odwołanymi lotami z Bydgoszczy BZG
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">1. Ryanair odwołuje sezonowe loty "na ostatnią chwilę"</h3>
              <p className="text-gray-700">
                Ryanair często odwołuje loty z Bydgoszczy <strong>ostatnio (np. 13 dni przed wylotem)</strong>, próbując uniknąć wypłaty odszkodowania. <strong>To nielegalne!</strong> Odszkodowanie przysługuje przy odwołaniu mniej niż 14 dni przed lotem.
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/ryanair-odwolanie-14-dni-przed-lotem" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Ryanair odwołanie 14 dni przed lotem
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">2. Małe lotnisko = częste odwołania z powodu "nieopłacalności"</h3>
              <p className="text-gray-700">
                <strong>BZG to małe lotnisko regionalne</strong> z ograniczoną liczbą pasażerów. Ryanair często odwołuje loty z powodu "małego wypełnienia" - ale <strong>to nie zwalnia z odszkodowania</strong>! Linia musi honorować sprzedane bilety.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">3. Sezonowe loty - częste odwołania poza sezonem</h3>
              <p className="text-gray-700">
                Większość lotów z Bydgoszczy to <strong>sezonowe połączenia (głównie lato)</strong>. Ryanair czasami odwołuje loty na początku/końcu sezonu - <strong>odszkodowanie 250 € nadal przysługuje</strong>!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak dochodzić odszkodowania za odwołany lot z Bydgoszczy? Krok po kroku
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
                      <span>Zdjęcia tablicy odlotów w BZG (opcjonalnie)</span>
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
                  <p className="text-gray-700 mb-2">
                    <strong>Formularz reklamacyjny:</strong>
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Ryanair: ryanair.com/customer-service</li>
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
                    <strong>Wskaźnik odmów Ryanair z BZG:</strong> ~<strong>31%</strong> reklamacji jest odrzucanych bezpodstawnie.
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
                <span><strong>Ekstremalne warunki pogodowe</strong> (silna burza, huragan, gęsta mgła zamykająca lotnisko BZG)</span>
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
              <strong>Uwaga!</strong> "Małe wypełnienie", "nieopłacalność trasy", "problemy operacyjne" <strong>NIE SĄ nadzwyczajnymi okolicznościami</strong>!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy przysługuje mi odszkodowanie za odwołany lot Ryanair BZG-Londyn?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> BZG-Londyn to trasa <strong>do 1500 km</strong> (~1300 km), więc przysługuje Ci <strong>250 € odszkodowania</strong> przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem).
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ryanair odwołał lot z powodu "małego wypełnienia". Czy to legalne?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>To taktyka Ryanair!</strong> "Małe wypełnienie" czy "nieopłacalność trasy" <strong>NIE są nadzwyczajnymi okolicznościami</strong>. Linia musi honorować sprzedane bilety. <strong>Odszkodowanie 250 € przysługuje!</strong>
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy tanio kupiony bilet (np. 19 zł) uprawnia do odszkodowania 250 €?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od długości trasy. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Lot sezonowy (tylko latem) został odwołany - czy WE 261 obowiązuje?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Rozporządzenie WE 261/2004 obowiązuje <strong>przez cały rok</strong> dla wszystkich lotów - regularnych i sezonowych. Pełne prawa pasażera!
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Jak długo mogę domagać się odszkodowania za odwołany lot z Bydgoszczy?
              </summary>
              <p className="text-gray-700 mt-3">
                W Polsce termin przedawnienia to <strong>3 lata</strong> od odwołania lotu. Nawet bardzo stare loty (np. z 2023 roku) mogą być reklamowane w 2026!
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">
              Odwołany lot z Bydgoszczy BZG? Sprawdź swoje odszkodowanie!
            </h2>
            <p className="mb-6 text-blue-100">
              Nie pozwól, aby Ryanair zignorował Twoje prawa. ClaimWinger pomoże Ci uzyskać 250-600 € odszkodowania bez ryzyka.
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
                Poznaj taktyki Ryanair i swoje prawa.
              </p>
            </Link>

            <Link
              href="/blog/lotnisko-warszawa-chopin-odwolany-lot"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Lotnisko Warszawa Chopin — odszkodowanie za odwołany lot
              </h3>
              <p className="text-gray-600 text-sm">
                Porównaj z największym lotniskiem w Polsce.
              </p>
            </Link>

            <Link
              href="/blog/lotnisko-szczecin-goleniow-odwolany-lot"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Lotnisko Szczecin-Goleniów — odszkodowanie za odwołany lot
              </h3>
              <p className="text-gray-600 text-sm">
                Inne małe lotnisko regionalne w Polsce.
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
              <h3 itemProp="name">Czy przysługuje mi odszkodowanie za odwołany lot Ryanair BZG-Londyn?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! BZG-Londyn to trasa do 1500 km (~1300 km), więc przysługuje Ci 250 € odszkodowania przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem) według rozporządzenia WE 261/2004.
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Ryanair odwołał lot z powodu małego wypełnienia. Czy to legalne?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  To taktyka Ryanair! Małe wypełnienie czy nieopłacalność trasy NIE są nadzwyczajnymi okolicznościami. Linia musi honorować sprzedane bilety. Odszkodowanie 250 € przysługuje!
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Lot sezonowy (tylko latem) został odwołany - czy WE 261 obowiązuje?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! Rozporządzenie WE 261/2004 obowiązuje przez cały rok dla wszystkich lotów - regularnych i sezonowych. Pełne prawa pasażera przysługują zawsze!
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}