import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { ClaimWingerHeroEmbed } from "@/components/ClaimWingerHeroEmbed";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Clock, Euro } from "lucide-react";

export default function OdwolanyLotPage() {
  return (
    <Layout>
      <SEO
        title="Odwołany lot – odszkodowanie do 600 € i prawa pasażera"
        description="Twój lot został odwołany? Sprawdź, kiedy przysługuje Ci odszkodowanie do 600 € i jakie masz prawa jako pasażer linii lotniczych."
        url="https://problemlot.com/odwolany-lot"
      />

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              Lot odwołany
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Odwołany lot – ile odszkodowania Ci przysługuje?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Sprawdź swoje prawa i dowiedz się, kiedy możesz otrzymać nawet <span className="font-bold text-blue-600 dark:text-blue-400">600 €</span> rekompensaty za odwołany lot.
            </p>
            <ClaimWingerHeroEmbed className="mt-8" />
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Co to znaczy odwołany lot */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Co to znaczy, że lot został odwołany?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Lot uznaje się za odwołany, gdy linia lotnicza całkowicie anuluje zaplanowany rejs i nie realizuje go w pierwotnie przewidzianym terminie. Może to nastąpić z różnych powodów – od problemów technicznych, przez brak załogi, aż po decyzje biznesowe przewoźnika.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Niezależnie od przyczyny, <strong>pasażerom przysługują określone prawa</strong>, w tym możliwość uzyskania odszkodowania finansowego.
              </p>
            </div>

            {/* Twoje prawa */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Jakie prawa przysługują Ci przy odwołanym locie?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Zgodnie z rozporządzeniem UE 261/2004, gdy Twój lot zostanie odwołany, masz prawo do:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Zwrotu kosztów lub lotu zastępczego
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Możesz otrzymać pełny zwrot ceny biletu lub lot zastępczy do celu podróży w najwcześniejszym możliwym terminie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Opieki ze strony linii lotniczej
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Posiłki, napoje, możliwość wykonania połączeń telefonicznych, a w razie potrzeby – nocleg w hotelu i transport.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Odszkodowania finansowego
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      W zależności od dystansu lotu: <strong>250 €, 400 € lub 600 €</strong> – jeśli nie zostałeś poinformowany z odpowiednim wyprzedzeniem.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kiedy przysługuje odszkodowanie */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Kiedy przysługuje odszkodowanie za odwołany lot?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Odszkodowanie przysługuje, gdy spełnione są następujące warunki:
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Lot wyruszał z UE lub lądował w UE (unijny przewoźnik)
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Rozporządzenie UE 261/2004 chroni loty z lotnisk w Unii Europejskiej oraz loty do UE obsługiwane przez europejskie linie lotnicze.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Nie zostałeś poinformowany z wyprzedzeniem
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Jeśli linia lotnicza powiadomiła Cię o odwołaniu mniej niż 14 dni przed planowanym lotem, możesz ubiegać się o odszkodowanie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Odwołanie nie było spowodowane nadzwyczajnymi okolicznościami
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Linie lotnicze są zwolnione z wypłaty odszkodowania tylko w przypadkach takich jak ekstremalne warunki pogodowe, strajki kontrolerów ruchu lotniczego czy zagrożenie bezpieczeństwa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Ważne:</strong> Problemy techniczne samolotu, brak załogi czy decyzje biznesowe linii lotniczej <strong>NIE SĄ</strong> nadzwyczajnymi okolicznościami i nie zwalniają przewoźnika z wypłaty odszkodowania.
                </p>
              </div>
            </div>

            {/* Wysokość odszkodowania */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ile wynosi odszkodowanie za odwołany lot?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Wysokość odszkodowania zależy od dystansu lotu:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                  <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">250 €</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Loty do 1500 km
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                  <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">400 €</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Loty 1500-3500 km
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 text-center">
                  <Euro className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">600 €</div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Loty powyżej 3500 km
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link href="/ile-mozesz-dostac" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  Zobacz szczegółową tabelę kwot odszkodowania →
                </Link>
              </div>
            </div>

            {/* Co zrobić */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Co zrobić, gdy Twój lot został odwołany?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Zbierz dokumentację
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Zapisz numer lotu, datę, godzinę oraz wszelkie komunikaty od linii lotniczej (SMS, e-mail). Zachowaj kartę pokładową i dowody zakupu biletu.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Nie podpisuj rezygnacji z roszczeń
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Linie lotnicze często oferują vouchery w zamian za podpisanie oświadczenia o rezygnacji z dalszych roszczeń. Nie rób tego – masz prawo do odszkodowania pieniężnego.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Złóż reklamację
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Skontaktuj się z linią lotniczą i złóż oficjalną reklamację. Jeśli nie otrzymasz satysfakcjonującej odpowiedzi lub przewoźnik odmówi wypłaty, możesz skorzystać z pomocy specjalistów.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Skorzystaj z pomocy ekspertów
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Firmy takie jak <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">ClaimWinger</a> zajmują się całym procesem dochodzenia odszkodowania – od analizy sprawy, przez kontakt z przewoźnikiem, aż po ewentualne postępowanie sądowe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Najczęściej zadawane pytania
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Czy mogę dostać odszkodowanie, jeśli linia lotnicza zaproponowała mi lot zastępczy?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Tak, jeśli lot zastępczy spowodował opóźnienie w dotarciu do celu o więcej niż 2-4 godziny (w zależności od dystansu), nadal przysługuje Ci odszkodowanie.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Ile mam czasu na złożenie reklamacji?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    W Polsce masz aż <strong>6 lat</strong> od daty odwołanego lotu na dochodzenie swoich praw. Nie zwlekaj jednak – im szybciej złożysz reklamację, tym łatwiej będzie zebrać dokumentację.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Co jeśli kupiłem bilet promocyjny lub tani bilet?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Nie ma znaczenia, ile zapłaciłeś za bilet. Odszkodowanie nie zależy od ceny biletu, tylko od dystansu lotu i przestrzegania przepisów przez linię lotniczą.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Czy dostanę odszkodowanie, jeśli odwołanie było spowodowane strajkiem?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Zależy od rodzaju strajku. Strajk załogi linii lotniczej <strong>nie jest</strong> nadzwyczajną okolicznością – odszkodowanie przysługuje. Strajk kontrolerów ruchu lotniczego lub służb lotniskowych może być uznany za okoliczność nadzwyczajną.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-xl shadow-xl p-8 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Nie daj sobie odebrać swoich praw
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Sprawdź, czy przysługuje Ci odszkodowanie za odwołany lot
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Sprawdź swoje odszkodowanie
              </a>
              <p className="mt-4 text-sm text-blue-100">
                Bez ryzyka – płacisz tylko w przypadku sukcesu
              </p>
            </div>

            {/* Related Links */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Link
                href="/opozniony-lot"
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <Clock className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Opóźniony lot
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Sprawdź swoje prawa, gdy lot się spóźnia
                </p>
              </Link>

              <Link
                href="/ile-mozesz-dostac"
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <Euro className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Ile możesz dostać?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Zobacz dokładne kwoty odszkodowań
                </p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
