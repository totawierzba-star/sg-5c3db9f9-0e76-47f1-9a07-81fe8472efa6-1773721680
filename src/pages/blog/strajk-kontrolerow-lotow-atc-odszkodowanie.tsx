import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, AlertTriangle, CheckCircle2, XCircle, Users, Euro } from "lucide-react";

export default function StrajkATCPage() {
  return (
    <Layout>
      <SEO 
        title="Strajk kontrolerów lotów (ATC) a odszkodowanie – prawa pasażera"
        description="Czy za opóźniony lub odwołany lot przez strajk kontrolerów ruchu lotniczego przysługuje odszkodowanie? Sprawdź różnicę między strajkiem ATC a strajkiem linii lotniczej."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Strona główna</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Strajk ATC</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Prawo lotnicze
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Strajk kontrolerów lotów (ATC) a odszkodowanie za opóźniony lot
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>23 lutego 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min czytania</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Lead */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed m-0">
              <strong>Strajk kontrolerów ruchu lotniczego (ATC) to jedna z najczęstszych przyczyn masowych opóźnień i odwołań lotów w Europie.</strong> Czy w takiej sytuacji przysługuje odszkodowanie? Odpowiedź brzmi: <strong>NIE</strong> – strajk ATC jest uznawany za nadzwyczajną okoliczność. Jednak linia lotnicza nadal ma obowiązek zapewnić Ci opiekę (hotel, posiłki).
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              Strajk ATC vs strajk linii lotniczej – kluczowa różnica
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Rozporządzenie UE 261/2004</strong> rozróżnia dwa rodzaje strajków, które mają zupełnie inne skutki dla praw pasażerów:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-600" />
                  Strajk ATC (kontrolerów lotów)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Kim są ATC:</strong> Kontrolerzy ruchu lotniczego zatrudnieni przez organy państwowe lub agencje zarządzające przestrzenią powietrzną (np. PANSA w Polsce, NATS w UK)</li>
                  <li><strong>Status:</strong> <span className="text-red-700 font-semibold">Nadzwyczajna okoliczność</span></li>
                  <li><strong>Odszkodowanie:</strong> ❌ NIE (250–600 EUR)</li>
                  <li><strong>Prawo do opieki:</strong> ✅ TAK (hotel, posiłki, transport)</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-500 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                  Strajk linii lotniczej
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Kto strajkuje:</strong> Pracownicy linii lotniczej (piloci, załoga pokładowa, personel naziemny)</li>
                  <li><strong>Status:</strong> <span className="text-green-700 font-semibold">Wewnętrzny problem linii</span></li>
                  <li><strong>Odszkodowanie:</strong> ✅ TAK (250–600 EUR)</li>
                  <li><strong>Prawo do opieki:</strong> ✅ TAK (hotel, posiłki, transport)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>⚠️ Ważne:</strong> Linia lotnicza nie może powiedzieć „to był strajk, więc nic Ci nie przysługuje". Musisz sprawdzić <strong>KTO strajkował</strong>. Jeśli to pracownicy linii – masz prawo do odszkodowania!
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <AlertTriangle className="w-8 h-8 text-blue-600" />
              Dlaczego strajk ATC to nadzwyczajna okoliczność?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Strajk kontrolerów lotów jest uznawany za <strong>nadzwyczajną okoliczność</strong>, ponieważ:
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Jest poza kontrolą linii lotniczej</strong> – linia nie zatrudnia kontrolerów ATC, więc nie może wpływać na ich decyzje o strajku</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Dotyczy całej przestrzeni powietrznej</strong> – podczas strajku ATC zamykana jest cała przestrzeń powietrzna (nie tylko loty jednej linii)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span><strong>Nie można było go uniknąć</strong> – nawet przy podjęciu wszystkich rozsądnych działań, linia nie mogła go zapobiec</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Europejski Trybunał Sprawiedliwości wielokrotnie orzekał, że strajki ATC, kontroli bezpieczeństwa na lotniskach czy służb celnych <strong>nie obciążają linii lotniczych</strong> odpowiedzialnością za odszkodowania.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Euro className="w-8 h-8 text-blue-600" />
              Co Ci przysługuje podczas strajku ATC?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Mimo że <strong>nie dostaniesz odszkodowania 250–600 EUR</strong>, linia lotnicza nadal ma wobec Ciebie obowiązki wynikające z Rozporządzenia UE 261/2004:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">✅ 1. Prawo do opieki (Care Rights)</h3>
                <p className="text-gray-700 mb-3">
                  Jeśli opóźnienie przekracza określone progi czasowe, linia musi zapewnić:
                </p>
                <ul className="space-y-2 text-gray-700 ml-6">
                  <li>• <strong>Posiłki i napoje</strong> (proporcjonalne do czasu oczekiwania)</li>
                  <li>• <strong>2 rozmowy telefoniczne</strong> (lub e-maile/faksy)</li>
                  <li>• <strong>Nocleg w hotelu</strong> (jeśli opóźnienie wymaga noclegu)</li>
                  <li>• <strong>Transport</strong> do/z hotelu</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">✅ 2. Prawo do wyboru (Right to Choose)</h3>
                <p className="text-gray-700">
                  Możesz wybrać między:
                </p>
                <ul className="mt-2 space-y-2 text-gray-700 ml-6">
                  <li>• <strong>Przelot zastępczy</strong> przy najbliższej okazji (linia musi zadbać o alternatywny transport)</li>
                  <li>• <strong>Zwrot pełnej ceny biletu</strong> i rezygnacja z podróży</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">✅ 3. Informacja i pomoc</h3>
                <p className="text-gray-700">
                  Linia lotnicza musi aktywnie informować pasażerów o:
                </p>
                <ul className="mt-2 space-y-2 text-gray-700 ml-6">
                  <li>• Przyczynie opóźnienia/odwołania</li>
                  <li>• Szacowanym czasie nowego odlotu</li>
                  <li>• Dostępnych opcjach (rebooking, refund)</li>
                  <li>• Prawach pasażera</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>💡 Wskazówka:</strong> Zachowaj wszystkie paragony za jedzenie/napoje/transport, które kupiłeś samodzielnie podczas oczekiwania. Jeśli linia nie zapewniła opieki mimo obowiązku, możesz żądać zwrotu tych kosztów!
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Nie masz pewności, czy to był strajk ATC czy linii lotniczej?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                ClaimWinger pomoże Ci ustalić, kto strajkował i czy masz prawo do odszkodowania. Wystarczy podać numer lotu – my zbadamy sprawę za Ciebie.
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Sprawdź swoje roszczenie
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-blue-200 mt-4">
                ✓ Bezpłatna weryfikacja roszczenia<br />
                ✓ Płacisz tylko w przypadku sukcesu<br />
                ✓ Specjalizacja w skomplikowanych sprawach
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Przykłady znanych strajków ATC w Europie
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Strajki kontrolerów ruchu lotniczego regularnie zakłócają ruch lotniczy w Europie. Oto najgłośniejsze przykłady:
            </p>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">🇫🇷 Francja (DGAC)</h3>
                <p className="text-gray-700 text-sm">
                  Francuscy kontrolerzy lotów (związek SNCTA) strajkują kilka razy w roku. Strajki te wpływają na cały ruch nad Francją, w tym przeloty tranzytowe.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">🇩🇪 Niemcy (DFS)</h3>
                <p className="text-gray-700 text-sm">
                  Deutsche Flugsicherung (DFS) – niemiecka służba kontroli lotów. Strajki rzadsze niż we Francji, ale wpływają na Frankfurt i München.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">🇮🇹 Włochy (ENAV)</h3>
                <p className="text-gray-700 text-sm">
                  Włoscy kontrolerzy (ENAV) regularnie strajkują, co wpływa na loty do/z Rzymu, Mediolanu, Wenecji.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-2">🇬🇷 Grecja (HCAA)</h3>
                <p className="text-gray-700 text-sm">
                  Strajki greckich kontrolerów (szczególnie w sezonie letnim) wpływają na ruch wakacyjny do Grecji.
                </p>
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
                  Skąd mam wiedzieć, czy to był strajk ATC czy linii lotniczej?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Sprawdź oficjalne źródła:</strong>
                  <ul className="mt-2 ml-6 space-y-1">
                    <li>• Strona Eurocontrol (Network Manager Operations Centre) publikuje informacje o strajkach ATC</li>
                    <li>• Strona lotniska (sekcja „Aktualizacje")</li>
                    <li>• Media lotnicze (np. FlightRadar24, Fly4Free)</li>
                    <li>• Oficjalna komunikacja linii lotniczej</li>
                  </ul>
                  Jeśli linia pisze „strajk" bez szczegółów, zapytaj wprost: <strong>„Kto strajkował – kontrolerzy ATC czy Wasi pracownicy?"</strong>
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę dostać zwrot kosztów za hotel, który sam zarezerwowałem podczas strajku ATC?
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak, ale tylko jeśli <strong>linia lotnicza nie zaoferowała Ci hotelu</strong>. Jeśli powiedziała „niestety nie mamy miejsc w hotelach" lub w ogóle nie zapewniła opieki, możesz wynająć hotel samodzielnie i żądać zwrotu kosztów (w rozsądnej wysokości – np. hotel 3-gwiazdkowy, nie luksusowy apartament).
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy strajk personelu naziemnego (handling) to nadzwyczajna okoliczność?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Zależy, kto zatrudnia personel:</strong>
                  <ul className="mt-2 ml-6 space-y-1">
                    <li>• Jeśli to pracownicy <strong>zewnętrznej firmy handlingowej</strong> (np. Swissport, Menzies) → nadzwyczajna okoliczność (brak odszkodowania)</li>
                    <li>• Jeśli to pracownicy <strong>zatrudnieni przez linię lotniczą</strong> → wewnętrzny problem linii (odszkodowanie przysługuje)</li>
                  </ul>
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Co jeśli linia lotnicza wiedziała o strajku ATC z wyprzedzeniem i nie powiadomiła mnie?
                </summary>
                <p className="text-gray-700 mt-4">
                  Jeśli linia wiedziała o strajku co najmniej <strong>14 dni przed odlotem</strong> i nie powiadomiła Cię o odwołaniu/opóźnieniu, <strong>możesz mieć prawo do odszkodowania</strong>. To oznacza, że linia nie podjęła rozsądnych działań zapobiegawczych (np. przekierowanie lotu, wcześniejsza zmiana rozkładu). W takiej sytuacji warto skonsultować się z prawnikiem lotniczym.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy za strajk kontroli bagażu przysługuje odszkodowanie?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Nie.</strong> Strajk personelu kontroli bezpieczeństwa (security screening) jest uznawany za nadzwyczajną okoliczność, podobnie jak strajk ATC. To pracownicy organów państwowych lub zewnętrznych firm ochroniarskich, nie linii lotniczej.
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
              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Nadzwyczajne okoliczności – kompletny przewodnik
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Dowiedz się, kiedy linia lotnicza może legalnie odmówić wypłaty odszkodowania.
                  </p>
                </div>
              </Link>
              <Link href="/blog/lot-strajk-kiedy-odszkodowanie" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    LOT strajk – kiedy przysługuje odszkodowanie?
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Specyfika strajków pracowników LOT Polish Airlines i Twoje prawa.
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