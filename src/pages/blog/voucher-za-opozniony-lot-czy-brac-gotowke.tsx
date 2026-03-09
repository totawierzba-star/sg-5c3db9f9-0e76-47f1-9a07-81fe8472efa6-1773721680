import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, CreditCard, Euro, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function VoucherCzyGotowkaPage() {
  return (
    <Layout>
      <SEO 
        title="Voucher od linii lotniczej czy gotówka? Co wybrać przy odszkodowaniu za lot?"
        description="Linia lotnicza oferuje Ci voucher zamiast pieniędzy za opóźniony lot? Sprawdź, dlaczego gotówka jest lepsza i czy linia może Cię zmuszać do przyjęcia bonu."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Strona główna</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Voucher czy gotówka</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <CreditCard className="w-4 h-4" />
            Prawo lotnicze
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Voucher od linii lotniczej czy gotówka – co wybrać przy odszkodowaniu?
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>24 lutego 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>9 min czytania</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Lead */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed m-0">
              <strong>Linia lotnicza oferuje Ci voucher (bon) zamiast pieniędzy za opóźniony lot?</strong> To powszechna taktyka przewoźników, aby uniknąć wypłaty gotówki. Prawda jest taka, że <strong>masz pełne prawo żądać pieniędzy</strong> – nikt nie może Cię zmusić do przyjęcia vouchera. Dowiedz się, dlaczego gotówka jest lepsza i jak odrzucić bon od linii lotniczej.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Euro className="w-8 h-8 text-blue-600" />
              Prawo do gotówki – co mówi Rozporządzenie UE 261/2004?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Rozporządzenie UE 261/2004</strong> jasno stanowi, że odszkodowanie za opóźniony lub odwołany lot <strong>musi być wypłacone w gotówce</strong> (lub przelewem bankowym, czekiem). Linia lotnicza <strong>nie może jednostronnie</strong> zastąpić pieniędzy voucherem.
            </p>

            <div className="bg-green-50 border border-green-500 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✅ Twoje prawa według UE 261/2004:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Prawo do gotówki:</strong> Możesz żądać odszkodowania w formie pieniężnej (przelew na konto)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Brak zgody = brak vouchera:</strong> Linia nie może wypłacić Ci bonu bez Twojej wyraźnej zgody</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Voucher tylko za Twoją zgodą:</strong> Możesz dobrowolnie wybrać voucher (często wyższej wartości), ale to Twoja decyzja</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-gray-800">
                <strong>❌ Niedozwolone praktyki linii lotniczych:</strong>
                <ul className="mt-2 ml-6 space-y-1">
                  <li>• „Voucher to jedyna opcja" – NIEPRAWDA</li>
                  <li>• „Gotówka dopiero po wykorzystaniu vouchera" – NIELEGALNE</li>
                  <li>• „Musisz zaakceptować voucher online" – możesz odmówić i żądać gotówki</li>
                </ul>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <CreditCard className="w-8 h-8 text-blue-600" />
              Voucher vs gotówka – szczegółowe porównanie
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="py-3 px-4 font-bold text-gray-900 border-b">Kryterium</th>
                    <th className="py-3 px-4 font-bold text-gray-900 border-b">💵 Gotówka</th>
                    <th className="py-3 px-4 font-bold text-gray-900 border-b">🎟️ Voucher</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Gdzie można użyć?</td>
                    <td className="py-3 px-4 text-green-700">✅ Wszędzie</td>
                    <td className="py-3 px-4 text-red-700">❌ Tylko u tej linii</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Data ważności</td>
                    <td className="py-3 px-4 text-green-700">✅ Brak (pieniądze nie tracą ważności)</td>
                    <td className="py-3 px-4 text-red-700">❌ Zazwyczaj 1-2 lata</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Przenośność</td>
                    <td className="py-3 px-4 text-green-700">✅ Dowolny użytek</td>
                    <td className="py-3 px-4 text-red-700">❌ Tylko na bilety tej linii</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Możliwość sprzedaży</td>
                    <td className="py-3 px-4 text-green-700">✅ Pieniądze można dowolnie wydać</td>
                    <td className="py-3 px-4 text-red-700">❌ Voucher trudno odsprzedać</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4 font-semibold">Komplikacje</td>
                    <td className="py-3 px-4 text-green-700">✅ Brak</td>
                    <td className="py-3 px-4 text-red-700">❌ Ograniczenia użycia, wygasanie</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-semibold">Co jeśli linia zbankrutuje?</td>
                    <td className="py-3 px-4 text-green-700">✅ Masz swoje pieniądze</td>
                    <td className="py-3 px-4 text-red-700">❌ Voucher traci wartość</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>💡 Wniosek:</strong> Gotówka daje Ci 100% elastyczności. Voucher to ryzyko, ograniczenia i presja czasowa.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Linia zmusza Cię do przyjęcia vouchera?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                ClaimWinger pomoże Ci wyegzekwować gotówkę zamiast bonu. Nie pozwól się zmusić do akceptacji vouchera – otrzymaj pieniądze, na które masz prawo!
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Uzyskaj gotówkę zamiast vouchera
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-blue-200 mt-4">
                ✓ Bezpłatna weryfikacja roszczenia<br />
                ✓ Płacisz tylko w przypadku sukcesu<br />
                ✓ Wyegzekwujemy pieniądze, nie bony
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Dlaczego linie lotnicze oferują vouchery?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Linie lotnicze aktywnie promują vouchery zamiast gotówki, ponieważ to dla nich <strong>znacznie tańsze rozwiązanie</strong>:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">1. Wielu pasażerów nie wykorzysta vouchera</h3>
                <p className="text-gray-700 text-sm">
                  Statystyki pokazują, że <strong>30-40% voucherów nigdy nie zostaje wykorzystanych</strong>. Ludzie zapominają o terminie ważności, rezygnują z latania tą linią lub gubią kod vouchera. Dla linii to czysty zysk – „wypłacili" odszkodowanie, które nigdy nie zostanie zrealizowane.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">2. Voucher to przyszły zakup, nie gotówka dzisiaj</h3>
                <p className="text-gray-700 text-sm">
                  Gdy dostajesz voucher na 400 EUR, linia nie traci 400 EUR gotówki od razu. Traci je dopiero, gdy wykorzystasz voucher na zakup biletu. To oznacza, że <strong>gotówka zostaje w kasie linii</strong> przez miesiące lub lata.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">3. Zmuszają Cię do ponownego latania z nimi</h3>
                <p className="text-gray-700 text-sm">
                  Voucher możesz wykorzystać <strong>tylko na loty tej samej linii</strong>. Jeśli miałeś zły doświadczenie i nie chcesz już z nią latać – trudno. Voucher Cię do tego zmusza lub traci wartość.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">4. Ukryte ograniczenia użycia</h3>
                <p className="text-gray-700 text-sm">
                  Wiele voucherów ma drobnym drukiem zapisane ograniczenia:
                  <ul className="mt-2 ml-6 space-y-1 text-xs">
                    <li>• Nie można użyć w okresie wakacyjnym (lipiec-sierpień)</li>
                    <li>• Nie obejmuje tanich promocji („tylko bilety w cenie regularnej")</li>
                    <li>• Nie można podzielić na kilka transakcji</li>
                  </ul>
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jak odrzucić voucher i zażądać gotówki?
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">NIE akceptuj vouchera online</h3>
                  <p className="text-gray-700">
                    Jeśli linia wysyła Ci e-mail z linkiem „Odbierz swój voucher", <strong>NIE KLIKAJ</strong>. Kliknięcie może być interpretowane jako zgoda na voucher zamiast gotówki.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Odpowiedz jasno: „Żądam gotówki"</h3>
                  <p className="text-gray-700">
                    Wyślij odpowiedź na e-mail linii lub złóż oficjalną reklamację z treścią:
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded p-4 mt-2 text-sm">
                    <em>„Zgodnie z art. 7 ust. 3 Rozporządzenia (WE) nr 261/2004 żądam wypłaty odszkodowania w formie pieniężnej (przelew bankowy) w kwocie [250/400/600] EUR. Nie wyrażam zgody na voucher ani żadną inną formę rekompensaty."</em>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Podaj numer konta bankowego</h3>
                  <p className="text-gray-700">
                    W reklamacji podaj swój IBAN (numer konta bankowego), na które linia ma przelać pieniądze. To jasny sygnał, że nie zaakceptujesz vouchera.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Jeśli linia odmawia – zgłoś się do specjalisty</h3>
                  <p className="text-gray-700">
                    Jeśli linia nadal próbuje zmusić Cię do vouchera, skorzystaj z pomocy firmy takiej jak <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">ClaimWinger</a>. Wyegzekwują gotówkę za Ciebie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Najczęściej zadawane pytania
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę przyjąć voucher, a potem zmienić zdanie i zażądać gotówki?
                </summary>
                <p className="text-gray-700 mt-4">
                  To zależy od tego, czy już wykorzystałeś voucher. Jeśli <strong>nie wykorzystałeś</strong> i minęło niewiele czasu od akceptacji, możesz spróbować anulować voucher i poprosić o gotówkę. Jednak jeśli już zużyłeś część vouchera, nie dostaniesz różnicy w gotówce.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy voucher od linii lotniczej jest warty więcej niż gotówka?
                </summary>
                <p className="text-gray-700 mt-4">
                  Czasami linie oferują voucher o <strong>wyższej wartości</strong> (np. 500 EUR voucher zamiast 400 EUR gotówki). To Twoja decyzja, czy dodatkowe 100 EUR jest warte ryzyka i ograniczeń. Pamiętaj jednak, że voucher może wygasnąć, a linia może zbankrutować (przykład: WOW air, Thomas Cook).
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Co jeśli akceptowałem voucher w pandemii COVID-19?
                </summary>
                <p className="text-gray-700 mt-4">
                  Podczas pandemii wiele krajów UE tymczasowo zmieniło zasady, pozwalając liniom wypłacać vouchery zamiast gotówki za odwołane loty. Jednak te przepisy już wygasły. Jeśli masz niewykorzystany voucher z 2020-2021 roku, który stracił ważność, możesz spróbować zażądać gotówki – niektóre linie zgadzają się na wymianę.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę sprzedać voucher od linii lotniczej?
                </summary>
                <p className="text-gray-700 mt-4">
                  Teoretycznie tak, ale w praktyce bardzo trudno. Większość voucherów jest <strong>imiennych</strong> lub wymaga podania numeru rezerwacji. Są platformy typu „voucher exchange", ale wartość odsprzedaży jest zazwyczaj o 20-40% niższa niż nominał vouchera.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Jakie linie najczęściej próbują wymusić vouchery?
                </summary>
                <p className="text-gray-700 mt-4">
                  Ryanair i Wizz Air są znane z agresywnego promowania voucherów. W ich systemach reklamacyjnych domyślną opcją jest voucher, a gotówkę trzeba aktywnie wybrać (i często jest ukryta). Lufthansa i British Airways również preferują vouchery, ale są bardziej elastyczne wobec pasażerów żądających gotówki.
                </p>
              </details>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Przeczytaj również:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ryanair-odmowil-odszkodowania" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Ryanair odmówił odszkodowania – co zrobić?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Praktyczny przewodnik, jak wyegzekwować pieniądze od Ryanair.
                  </p>
                </div>
              </Link>
              <Link href="/blog/wizz-air-odmowil-odszkodowania" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Wizz Air odmówił odszkodowania – jak wygrać?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Skuteczne metody na uzyskanie rekompensaty od Wizz Air.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}