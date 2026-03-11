import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertCircle, Plane, ArrowRight, Euro } from "lucide-react";

export default function LotniskoSzczecinGoleniowoOdwolanyLot() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Szczecin-Goleniów — odszkodowanie za odwołany lot | ProblemLot.pl"
        description="Odwołany lot ze Szczecina SZZ? Sprawdź, jak uzyskać 250-600 € odszkodowania. Ryanair, Wizz Air - poznaj swoje prawa jako pasażer."
        url="https://problemlot.pl/blog/lotnisko-szczecin-goleniow-odwolany-lot"
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
            Lotnisko Szczecin-Goleniów — odszkodowanie za odwołany lot
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
                <strong>Odwołany lot ze Szczecina SZZ?</strong> Przysługuje Ci <strong>250-600 € odszkodowania</strong> według rozporządzenia WE 261/2004, niezależnie od linii lotniczej i ceny biletu.
              </p>
            </div>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Lotnisko Szczecin-Goleniów (SZZ) - port północno-zachodniej Polski
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Port Lotniczy Szczecin-Goleniów (SZZ)</strong> to <strong>jedno z kluczowych lotnisk regionalnych w północno-zachodniej Polsce</strong>. Obsługuje rocznie około 600 tys. pasażerów, oferując głównie połączenia lowcost oraz sezonowe loty czarterowe. Strategiczna lokalizacja blisko granicy z Niemcami czyni je atrakcyjną opcją dla pasażerów z regionu.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Plane className="w-5 h-5 text-blue-600" />
              Najważniejsze informacje o SZZ
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Kod IATA:</strong> SZZ (Szczecin)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Główne linie lotnicze:</strong> Ryanair, Wizz Air (dominujący przewoźnicy lowcost)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Najpopularniejsze kierunki:</strong> Londyn, Dublin, Oslo, Bergen, Eindhoven</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Roczny ruch:</strong> ~600 tys. pasażerów (2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Specjalizacja:</strong> Połączenia lowcost + czartery wakacyjne</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Ile wynosi odszkodowanie za odwołany lot ze Szczecina?
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
                  <span className="text-gray-700"><strong>Do 1500 km</strong> (np. SZZ-Londyn, Dublin, Oslo)</span>
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
                  <span className="text-gray-700"><strong>Powyżej 3500 km</strong> (bardzo rzadkie z SZZ)</span>
                  <span className="text-2xl font-bold text-blue-600">600 €</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Ważne dla pasażerów ze Szczecina!</h3>
                <p className="text-gray-700">
                  <strong>Szczecin-Goleniów obsługuje głównie loty europejskie do 1500 km.</strong> Większość odwołanych lotów z SZZ kwalifikuje się do <strong>250 € odszkodowania</strong>.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęstsze problemy z odwołanymi lotami ze Szczecina SZZ
          </h2>

          <div className="space-y-4 mb-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">1. Ryanair odwołuje loty ostatnio (13-14 dni przed wylotem)</h3>
              <p className="text-gray-700">
                Ryanair często odwołuje loty ze Szczecina <strong>ostatnio (np. 13 dni przed wylotem)</strong>, próbując uniknąć wypłaty odszkodowania. <strong>To nielegalne!</strong> Odszkodowanie przysługuje przy odwołaniu mniej niż 14 dni przed lotem.
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/ryanair-odwolanie-14-dni-przed-lotem" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Ryanair odwołanie 14 dni przed lotem
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">2. Wizz Air odwołuje loty z powodu "problemów operacyjnych"</h3>
              <p className="text-gray-700">
                <strong>Wizz Air również często odwołuje loty ze Szczecina</strong> z powodu "problemów operacyjnych" lub "usterki technicznej". <strong>To NIE są nadzwyczajne okoliczności!</strong> Odszkodowanie 250 € przysługuje.
              </p>
              <p className="text-gray-700 mt-2">
                <Link href="/blog/wizz-air-odwolany-lot-polska-prawa" className="text-blue-600 hover:underline">
                  → Czytaj więcej: Wizz Air odwołany lot - prawa pasażera
                </Link>
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-gray-900 mb-2">3. Loty do UK i Norwegii często odwołane - pełne prawa WE 261!</h3>
              <p className="text-gray-700">
                <strong>Kierunki do Wielkiej Brytanii i Norwegii ze Szczecina</strong> są szczególnie często odwołane przez lowcosty. Ale <strong>UK261 i norweskie prawo lotnicze = identyczne prawa jak EU261</strong> - odszkodowanie 250 € przysługuje!
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Jak dochodzić odszkodowania za odwołany lot ze Szczecina? Krok po kroku
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
                      <span>Zdjęcia tablicy odlotów w SZZ (opcjonalnie)</span>
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
                    <li>• Wizz Air: wizzair.com/contact</li>
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
                    <strong>Wskaźnik odmów lowcost ze Szczecina:</strong> ~<strong>27%</strong> reklamacji jest odrzucanych bezpodstawnie.
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
                <span><strong>Ekstremalne warunki pogodowe</strong> (silna burza, huragan, gęsta mgła zamykająca lotnisko SZZ)</span>
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
              <strong>Uwaga!</strong> "Problemy operacyjne", "usterka techniczna", "brak załogi" <strong>NIE SĄ nadzwyczajnymi okolicznościami</strong>!
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            Najczęściej zadawane pytania (FAQ)
          </h2>

          <div className="space-y-4 mb-8">
            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy przysługuje mi odszkodowanie za odwołany lot Ryanair SZZ-Londyn?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> SZZ-Londyn to trasa <strong>do 1500 km</strong> (~1100 km), więc przysługuje Ci <strong>250 € odszkodowania</strong> przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem).
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Ryanair odwołał lot 13 dni przed wylotem. Czy to legalne?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>To taktyka Ryanair!</strong> Jeśli odwołanie nastąpiło <strong>mniej niż 14 dni przed lotem</strong> (np. 13 dni), przysługuje Ci odszkodowanie 250 €. Ryanair często próbuje uniknąć wypłaty odwołując loty "na granicy" 14 dni.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy tanio kupiony bilet (np. 39 zł) uprawnia do odszkodowania 250 €?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> Wysokość odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od długości trasy. Nawet najtańszy bilet promocyjny uprawnia do pełnego odszkodowania.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Wizz Air odwołał lot z powodu "usterki technicznej". Czy to nadzwyczajna okoliczność?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Nie!</strong> Usterka techniczna <strong>NIE jest nadzwyczajną okolicznością</strong> - linia musi zapewnić sprawny samolot przed lotem. <strong>Odszkodowanie 250 € przysługuje!</strong>
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-lg">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Czy loty do UK są objęte WE 261 po Brexicie?
              </summary>
              <p className="text-gray-700 mt-3">
                <strong>Tak!</strong> UK261 = identyczne prawa jak EU261. Loty z Polski do UK nadal są objęte pełną ochroną - odszkodowanie 250 € przysługuje przy odwołaniu lub opóźnieniu &gt;3h.
              </p>
            </details>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg my-12">
            <h2 className="text-2xl font-bold mb-4">
              Odwołany lot ze Szczecina SZZ? Sprawdź swoje odszkodowanie!
            </h2>
            <p className="mb-6 text-blue-100">
              Nie pozwól, aby lowcost zignorował Twoje prawa. ClaimWinger pomoże Ci uzyskać 250-600 € odszkodowania bez ryzyka.
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
              href="/blog/wizz-air-odwolany-lot-polska-prawa"
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-600 hover:shadow-md transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2">
                Wizz Air odwołany lot — prawa pasażera
              </h3>
              <p className="text-gray-600 text-sm">
                Jak skutecznie walczyć z odmowami Wizz Air.
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
              <h3 itemProp="name">Czy przysługuje mi odszkodowanie za odwołany lot Ryanair SZZ-Londyn?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! SZZ-Londyn to trasa do 1500 km (~1100 km), więc przysługuje Ci 250 € odszkodowania przy odwołaniu lotu (jeśli odwołanie było mniej niż 14 dni przed wylotem) według rozporządzenia WE 261/2004.
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Ryanair odwołał lot 13 dni przed wylotem. Czy to legalne?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  To taktyka Ryanair! Jeśli odwołanie nastąpiło mniej niż 14 dni przed lotem (np. 13 dni), przysługuje Ci odszkodowanie 250 €. Ryanair często próbuje uniknąć wypłaty odwołując loty na granicy 14 dni.
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Wizz Air odwołał lot z powodu usterki technicznej. Czy to nadzwyczajna okoliczność?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Nie! Usterka techniczna NIE jest nadzwyczajną okolicznością - linia musi zapewnić sprawny samolot przed lotem. Odszkodowanie 250 € przysługuje!
                </div>
              </div>
            </div>

            <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <h3 itemProp="name">Czy loty do UK są objęte WE 261 po Brexicie?</h3>
              <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div itemProp="text">
                  Tak! UK261 = identyczne prawa jak EU261. Loty z Polski do UK nadal są objęte pełną ochroną - odszkodowanie 250 € przysługuje przy odwołaniu lub opóźnieniu większym niż 3 godziny.
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}