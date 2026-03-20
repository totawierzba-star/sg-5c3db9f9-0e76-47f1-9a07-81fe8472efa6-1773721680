import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Plane, Luggage, FileText, AlertTriangle, CheckCircle2, Scale } from "lucide-react";

export default function ZgubionyBagazPage() {
  return (
    <Layout>
      <SEO 
        title="Zgubiony lub zniszczony bagaż lotniczy – odszkodowanie i prawa pasażera"
        description="Linia lotnicza zgubiła lub zniszczyła Twój bagaż? Sprawdź, ile odszkodowania Ci przysługuje według Konwencji Montrealskiej i jak je uzyskać."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Strona główna</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Zgubiony bagaż</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Luggage className="w-4 h-4" />
            Prawo lotnicze
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Zgubiony lub zniszczony bagaż lotniczy – odszkodowanie i prawa pasażera
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>20 lutego 2025</time>
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
              <strong>Zgubiony, opóźniony lub zniszczony bagaż to jeden z najczęstszych problemów podróżnych.</strong> Każdego roku linie lotnicze gubią miliony walizek. Na szczęście pasażerom przysługuje odszkodowanie zgodnie z Konwencją Montrealską – nawet <strong>do 1 781 SDR (ok. 8 500 PLN)</strong> za każdy zagubiony bagaż.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Scale className="w-8 h-8 text-blue-600" />
              Konwencja Montrealska – podstawa prawna
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Konwencja Montrealska z 1999 roku</strong> to międzynarodowe prawo regulujące odpowiedzialność linii lotniczych za bagaż. Obowiązuje na całym świecie i chroni pasażerów niezależnie od tego, czy lot odbywał się w Europie, Azji czy Ameryce.
            </p>

            <div className="bg-white border border-gray-200 rounded-lg p-6 my-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Kluczowe zasady Konwencji Montrealskiej:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Limit odszkodowania:</strong> Do 1 781 SDR (ok. 8 500 PLN) za zagubiony bagaż rejestrowany</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Odpowiedzialność automatyczna:</strong> Linia lotnicza odpowiada za szkody bez konieczności udowadniania winy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Termin zgłoszenia:</strong> 7 dni na zgłoszenie uszkodzenia, 21 dni na opóźniony bagaż</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Zakres:</strong> Loty międzynarodowe + loty krajowe w UE</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed">
              <strong>SDR (Special Drawing Rights)</strong> to międzynarodowa jednostka rozliczeniowa stosowana przez Międzynarodowy Fundusz Walutowy (IMF). Kurs SDR zmienia się codziennie, ale orientacyjnie 1 SDR = ok. 4,80 PLN.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Luggage className="w-8 h-8 text-blue-600" />
              3 sytuacje z bagażem i Twoje prawa
            </h2>

            <div className="space-y-6">
              {/* Situation 1 */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                  1. Bagaż całkowicie zgubiony
                </h3>
                <p className="text-gray-700 mb-3">
                  Jeśli linia lotnicza nie odnalazła Twojego bagażu w ciągu <strong>21 dni</strong>, bagaż uznaje się za <strong>trwale zgubiony</strong>.
                </p>
                <p className="text-gray-900 font-semibold">
                  💰 Odszkodowanie: Do 1 781 SDR (ok. 8 500 PLN)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  + zwrot kosztów niezbędnych zakupów (ubrania, przybory toaletowe) w rozsądnej wysokości
                </p>
              </div>

              {/* Situation 2 */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-yellow-600" />
                  2. Bagaż opóźniony
                </h3>
                <p className="text-gray-700 mb-3">
                  Twój bagaż dotarł, ale z <strong>kilkugodzinnym lub kilkudniowym opóźnieniem</strong>. Musiałeś kupić niezbędne rzeczy na miejscu (ubrania, kosmetyki, leki).
                </p>
                <p className="text-gray-900 font-semibold">
                  💰 Odszkodowanie: Zwrot uzasadnionych wydatków (do limitu 1 781 SDR)
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Zachowaj wszystkie paragony! Linia lotnicza zwróci Ci koszty zakupu najpotrzebniejszych rzeczy.
                </p>
              </div>

              {/* Situation 3 */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                  3. Bagaż uszkodzony
                </h3>
                <p className="text-gray-700 mb-3">
                  Twoja walizka dotarła, ale jest <strong>zniszczona, pęknięta, lub zawartość jest uszkodzona</strong> (np. rozlany szampon, stłuczone pamiątki).
                </p>
                <p className="text-gray-900 font-semibold">
                  💰 Odszkodowanie: Koszt naprawy lub wymiana walizki + zwrot za uszkodzoną zawartość
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Ważne:</strong> Zgłoś uszkodzenie natychmiast na lotnisku (formularz PIR) lub max. w ciągu 7 dni!
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak zgłosić problem z bagażem – krok po kroku
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Wypełnij formularz PIR na lotnisku</h3>
                  <p className="text-gray-700">
                    <strong>PIR (Property Irregularity Report)</strong> to oficjalny protokół zgłoszenia problemu z bagażem. Wypełnij go <strong>natychmiast na lotnisku</strong> w dziale „Lost & Found" lub „Baggage Services". Otrzymasz numer referencyjny (np. WAWLH12345).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Zachowaj dowody</h3>
                  <p className="text-gray-700">
                    Zrób zdjęcia uszkodzonej walizki lub jej zawartości. Zachowaj <strong>wszystkie paragony</strong> za zakupy niezbędnych rzeczy (ubrania, kosmetyki). To będzie potrzebne do zwrotu kosztów.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Złóż oficjalną reklamację na piśmie</h3>
                  <p className="text-gray-700">
                    W ciągu <strong>7 dni (bagaż uszkodzony)</strong> lub <strong>21 dni (bagaż opóźniony)</strong> wyślij oficjalną reklamację do linii lotniczej. Dołącz:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-700">
                    <li>• Kopię formularza PIR</li>
                    <li>• Kartę pokładową (boarding pass)</li>
                    <li>• Potwierdzenie odbioru bagażu (baggage tag)</li>
                    <li>• Zdjęcia uszkodzeń</li>
                    <li>• Paragony za zakupy</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Zażądaj odszkodowania</h3>
                  <p className="text-gray-700">
                    W reklamacji jasno określ wysokość szkody i zażądaj odszkodowania zgodnie z Konwencją Montrealską. Jeśli linia odmówi lub zaniża kwotę, możesz skorzystać z pomocy <strong>specjalisty od roszczeń lotniczych</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Linia lotnicza odmówiła wypłaty odszkodowania za bagaż?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Nie rezygnuj! ClaimWinger pomoże Ci wyegzekwować należne odszkodowanie z linii lotniczej – bez ryzyka i bez ukrytych kosztów.
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
                ✓ Doświadczony zespół prawników lotniczych
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ile dokładnie można dostać za zgubiony bagaż?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Maksymalna kwota odszkodowania wynosi <strong>1 781 SDR za każdy bagaż rejestrowany</strong>. W praktyce oznacza to ok. <strong>8 500 PLN</strong> (kurs SDR zmienia się codziennie).
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">💡 Przykładowe wyliczenie odszkodowania:</h3>
              <div className="space-y-2 text-gray-700">
                <p><strong>Lot do Egiptu:</strong> Walizka z ubraniami na 2 tygodnie + laptop + aparat</p>
                <ul className="ml-6 space-y-1">
                  <li>• Walizka Samsonite: 800 PLN</li>
                  <li>• Ubrania i buty (10 kompletów): 2 500 PLN</li>
                  <li>• Laptop Dell: 3 000 PLN</li>
                  <li>• Aparat Canon: 1 500 PLN</li>
                  <li>• Kosmetyki i dodatki: 300 PLN</li>
                </ul>
                <p className="font-bold text-blue-700 mt-3">RAZEM: 8 100 PLN (w limicie 8 500 PLN) ✓</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
              <p className="text-gray-800">
                <strong>⚠️ Uwaga:</strong> Jeśli wartość rzeczy w walizce przekracza 8 500 PLN, możesz wykupić <strong>dodatkowe ubezpieczenie bagażu</strong> przed lotem. Niektóre linie oferują taką opcję przy rezerwacji online.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Bagaż podręczny a odszkodowanie
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Konwencja Montrealska nie obejmuje bagażu podręcznego.</strong> Dlaczego? Ponieważ za bagaż podręczny odpowiada pasażer (masz go przy sobie przez cały czas).
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎒 Zasady dotyczące bagażu podręcznego:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <strong>Zgubiony w samolocie:</strong> Jeśli zostawiłeś laptopa lub telefon w fotelu, możesz zgłosić to załodze. Linia lotnicza <strong>nie ma jednak obowiązku</strong> wypłaty odszkodowania.
                </li>
                <li>
                  <strong>Uszkodzony przez załogę:</strong> Jeśli bagaż podręczny został uszkodzony przez personel pokładowy (np. wózek przejechał po Twojej torbie), możesz reklamować to jako szkodę spowodowaną przez przewoźnika.
                </li>
                <li>
                  <strong>Skradziony:</strong> Linia lotnicza nie ponosi odpowiedzialności za kradzież rzeczy z bagażu podręcznego. To kwestia ubezpieczenia podróżnego.
                </li>
              </ul>
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
                  Czy mogę dostać odszkodowanie za opóźniony bagaż, jeśli dotarł 2 dni później?
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Jeśli przez opóźnienie bagażu musiałeś kupić niezbędne rzeczy (ubrania, kosmetyki), linia lotnicza zwróci Ci te koszty. Zachowaj wszystkie paragony i złóż reklamację w ciągu 21 dni od otrzymania bagażu.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Co jeśli moja walizka była stara i tania, a linia chce wypłacić tylko 200 zł?
                </summary>
                <p className="text-gray-700 mt-4">
                  Odszkodowanie dotyczy nie tylko walizki, ale całej jej zawartości. Linia lotnicza musi zwrócić realną wartość ubrań, elektroniki i innych rzeczy, które były w środku (do limitu 8 500 PLN). Sporządź szczegółową listę utraconych przedmiotów z ich przybliżoną wartością.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy linia lotnicza może odmówić wypłaty odszkodowania?
                </summary>
                <p className="text-gray-700 mt-4">
                  Linia może próbować zaniżyć kwotę lub odmówić wypłaty, jeśli:
                  <ul className="mt-2 ml-6 space-y-1">
                    <li>• Nie zgłosiłeś problemu na lotnisku (brak formularza PIR)</li>
                    <li>• Zgłosiłeś reklamację po terminie (7 dni dla uszkodzenia, 21 dla opóźnienia)</li>
                    <li>• Nie dostarczyłeś dowodów (zdjęcia, paragony)</li>
                    <li>• Wartość rzeczy w bagażu jest nierealistycznie wysoka bez dowodów</li>
                  </ul>
                  Jeśli masz wszystkie dokumenty, a linia nadal odmawia, warto skorzystać z pomocy specjalisty od roszczeń lotniczych (np. ClaimWinger).
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Ile czasu mam na zgłoszenie reklamacji?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Terminy zgodnie z Konwencją Montrealską:</strong>
                  <ul className="mt-2 ml-6 space-y-1">
                    <li>• <strong>Bagaż uszkodzony:</strong> 7 dni od otrzymania bagażu</li>
                    <li>• <strong>Bagaż opóźniony:</strong> 21 dni od otrzymania bagażu</li>
                    <li>• <strong>Bagaż zgubiony:</strong> Bez ograniczeń czasowych (ale praktycznie uznaje się go za zgubiony po 21 dniach)</li>
                  </ul>
                  Po upływie tych terminów tracisz prawo do odszkodowania!
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę dostać odszkodowanie za emocjonalny stres związany ze zgubionym bagażem?
                </summary>
                <p className="text-gray-700 mt-4">
                  Niestety nie. Konwencja Montrealska przewiduje odszkodowanie <strong>tylko za szkody materialne</strong> (utracone lub uszkodzone rzeczy, koszty zakupu zamienników). Nie obejmuje zadośćuczynienia za stres, zmarnowane wakacje czy inne szkody niematerialne.
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
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Odszkodowanie LOT Polish Airlines
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Kompletny przewodnik po odszkodowaniach za opóźnione i odwołane loty LOT.
                  </p>
                </div>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Jak złożyć wniosek o odszkodowanie
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Praktyczny przewodnik krok po kroku z przykładami pism i formularzy.
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
