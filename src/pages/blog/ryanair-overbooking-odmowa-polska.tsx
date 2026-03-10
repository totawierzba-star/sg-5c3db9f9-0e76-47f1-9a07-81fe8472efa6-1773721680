import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, UserX, CheckCircle, AlertTriangle, Euro, Scale, FileText, Clock } from "lucide-react";

export default function RyanairOverbookingOdmowaPolska() {
  return (
    <Layout>
      <SEO
        title="Ryanair overbooking — odmowa wejścia na pokład z Polski [2026]"
        description="Ryanair odmówił Ci wejścia na pokład z powodu overbookingu? Należy Ci się natychmiastowe odszkodowanie 250-600 € + zwrot/przekierowanie. Sprawdź procedury."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">Ryanair overbooking</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <UserX className="h-4 w-4" />
              Ryanair Overbooking
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ryanair overbooking — odmowa wejścia na pokład z Polski
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Twoje prawa pasażera: natychmiastowe odszkodowanie 250-600 € + zwrot kosztów lub alternatywny transport
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Czas czytania: 10 min</span>
              <span>•</span>
              <span>Aktualizacja: 26.02.2025</span>
            </div>
          </header>

          {/* Quick Answer - AI Overview Optimization */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Co Ci się należy NATYCHMIAST?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <Euro className="h-6 w-6" />
                  Odszkodowanie (gotówka)
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span><strong>250 €</strong> za loty do 1500 km (Warszawa–Londyn)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span><strong>400 €</strong> za loty 1500-3500 km (Warszawa–Malaga)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span><strong>600 €</strong> za loty powyżej 3500 km (rzadko Ryanair)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Dodatkowe prawa
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span><strong>Zwrot pełnej ceny biletu</strong> (jeśli rezygnujesz)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span><strong>Alternatywny transport</strong> (następny lot Ryanair lub inna linia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span><strong>Prawo do opieki</strong> (posiłki, napoje, hotel jeśli konieczny)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-medium">
                ⚠️ <strong>WAŻNE:</strong> Odszkodowanie przysługuje NIEZALEŻNIE od tego, czy przyjmujesz alternatywny transport, czy żądasz zwrotu pieniędzy. To są OSOBNE prawa!
              </p>
            </div>
          </div>

          {/* Main Content */}
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              Co to jest overbooking i dlaczego Ryanair go stosuje?
            </h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-3">Definicja overbookingu:</h3>
              <p className="text-gray-700 mb-3">
                <strong>Overbooking</strong> to celowa strategia linii lotniczych polegająca na sprzedaży większej liczby biletów niż liczba miejsc w samolocie. Ryanair robi to, licząc że część pasażerów się nie stawi (no-show).
              </p>
              <p className="text-sm text-gray-600 italic">
                Problem: Gdy wszyscy pasażerowie się stawią, linia musi <strong>odmówić wejścia na pokład</strong> części z nich (denied boarding).
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Dlaczego Ryanair to robi?</strong> Żeby maksymalizować zyski — każde puste miejsce w samolocie to strata. Ale prawo UE chroni Cię jako pasażera: <strong>jeśli Ryanair odmówi Ci wejścia z powodu overbookingu, MUSI zapłacić 250-600 € odszkodowania PLUS zapewnić alternatywny transport lub zwrot kosztów.</strong>
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Jak Ryanair wybiera komu odmówić wejścia?</h3>

            <div className="grid gap-6 mb-8">
              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">1. Najpierw szuka ochotników</h4>
                <p className="text-gray-700 mb-3">
                  Na bramce Ryanair pyta: <em>&quot;Kto jest gotów zrezygnować z tego lotu w zamian za kompensatę?&quot;</em> Oferują voucher (zazwyczaj 100-200 €) + bilet na następny lot.
                </p>
                <p className="text-sm text-gray-600 italic">
                  💡 Jeśli się zgodzisz dobrowolnie, <strong>tracisz prawo do odszkodowania gotówką</strong> — dostajesz tylko to, co wynegocjujesz z Ryanair.
                </p>
              </div>

              <div className="bg-white border-l-4 border-red-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">2. Jeśli brak ochotników → przymusowa odmowa wejścia</h4>
                <p className="text-gray-700 mb-3">
                  Ryanair wybiera pasażerów według swoich wewnętrznych kryteriów (często ostatnio odprawieni, bez bagażu rejestrowanego, tańsze bilety). <strong>Wtedy przysługuje Ci pełne odszkodowanie 250-600 € gotówką.</strong>
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Twoje prawa według WE 261/2004 — krok po kroku</h3>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Co musisz dostać na miejscu (lotnisko):</h4>
              <ol className="space-y-3 text-gray-700 list-decimal list-inside">
                <li><strong>Pisemne potwierdzenie odmowy wejścia</strong> (denied boarding notice) z przyczyną i informacją o prawach</li>
                <li><strong>Wybór:</strong> zwrot pełnej ceny biletu LUB alternatywny transport (najbliższy lot Ryanair lub innej linii)</li>
                <li><strong>Prawo do opieki:</strong> posiłki, napoje, 2 połączenia telefoniczne/emaile, hotel (jeśli lot następnego dnia)</li>
                <li><strong>Informacja o odszkodowaniu:</strong> Ryanair musi Ci powiedzieć ile dostaniesz (250-600 €)</li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Jak wyegzekwować odszkodowanie od Ryanair?
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Procedura krok po kroku:</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Na lotnisku — zbieraj dowody</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Dostań <strong>pisemne potwierdzenie</strong> odmowy wejścia (denied boarding notice) od Ryanair</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Zachowaj <strong>potwierdzenie rezerwacji</strong> i kartę pokładową (jeśli dostałeś)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Zrób <strong>zdjęcia ekranu odlotów</strong> pokazujące, że lot się odbył bez Ciebie</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Jeśli Ryanair zaoferował Ci voucher na miejscu — <strong>NIE PRZYJMUJ GO</strong>, chyba że kwota jest wyższa niż 250-600 € gotówką</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">W ciągu 7 dni — złóż reklamację do Ryanair</h4>
                    <p className="text-gray-700 mb-3">
                      Wyślij email na <strong>ryanair.com/en/help-centre/customer-support</strong> żądając:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Odszkodowania 250-600 € gotówką (podaj kwotę zgodnie z dystansem)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Zwrotu dodatkowych kosztów (taxi, hotel, posiłki) jeśli poniosłeś</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Załącz: denied boarding notice, potwierdzenie rezerwacji, zdjęcia, rachunki</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Ryanair odmówił lub ignoruje? → Eskalacja</h4>
                    <p className="text-gray-700 mb-3">
                      Jeśli Ryanair nie odpowiada w 30 dni lub odmawia wypłaty:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Złóż skargę do <strong>Urzędu Lotnictwa Cywilnego (ULC)</strong> w Polsce</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Lub do <strong>Commission for Aviation Regulation (CAR)</strong> w Irlandii (siedziba Ryanair)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Rozważ <strong>pozew sądowy</strong> przez europejskie postępowanie w sprawie drobnych roszczeń (ESCP) — koszt ~35 €</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Najszybsza opcja: ClaimWinger (bez ryzyka)</h4>
                    <p className="text-gray-700 mb-3">
                      ClaimWinger zajmie się całą sprawą za Ciebie — <strong>zapłacisz tylko po wygranej</strong> (25% + VAT od odzyskanej kwoty). Zero kosztów z góry, zero ryzyka.
                    </p>
                    <a 
                      href="https://claimwinger.com/pl/odwolany-lot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Sprawdź swoje odszkodowanie
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-orange-600" />
              Najczęstsze pułapki i błędy pasażerów
            </h2>

            <div className="grid gap-6">
              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-lg text-red-900 mb-2">❌ Błąd #1: Przyjęcie vouchera na miejscu</h3>
                <p className="text-gray-700">
                  Ryanair często oferuje voucher 100-200 € na lotnisku. <strong>To DUŻO MNIEJ niż Twoje prawo (250-600 € gotówką).</strong> Jeśli przyjmiesz voucher dobrowolnie, tracisz prawo do odszkodowania. Zawsze żądaj gotówki!
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-lg text-red-900 mb-2">❌ Błąd #2: Brak pisemnego potwierdzenia</h3>
                <p className="text-gray-700">
                  Bez <strong>denied boarding notice</strong> trudno będzie udowodnić odmowę wejścia. Zawsze żądaj pisemnego potwierdzenia na miejscu — to Twoje prawo!
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-lg text-red-900 mb-2">❌ Błąd #3: Myślenie że zwrot biletu = odszkodowanie</h3>
                <p className="text-gray-700">
                  <strong>To są OSOBNE prawa!</strong> Możesz dostać ZARÓWNO zwrot ceny biletu (jeśli rezygnujesz) JAK I odszkodowanie 250-600 €. Nie pozwól Ryanair wmówić Ci, że zwrot biletu to wszystko co Ci się należy.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-6">
                <h3 className="font-bold text-lg text-red-900 mb-2">❌ Błąd #4: Opóźnienie w składaniu reklamacji</h3>
                <p className="text-gray-700">
                  Im szybciej złożysz reklamację, tym lepiej. <strong>Zalecamy w ciągu 7 dni od zdarzenia.</strong> Terminy przedawnienia to 3-6 lat, ale szybkie działanie zwiększa szanse na wypłatę.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section - Schema.org markup */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ile odszkodowania za overbooking Ryanair z Polski?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>250 €</strong> za loty do 1500 km (np. Warszawa–Londyn), <strong>400 €</strong> za loty 1500-3500 km (np. Warszawa–Malaga), <strong>600 €</strong> za loty powyżej 3500 km (bardzo rzadko w przypadku Ryanair). Kwota jest niezależna od ceny biletu — dostaniesz pełną kwotę nawet jeśli kupiłeś bilet za 50 zł.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy mogę dostać ZARÓWNO zwrot biletu JAK I odszkodowanie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>TAK!</strong> To są osobne prawa. Jeśli rezygnujesz z lotu (nie chcesz alternatywnego transportu), dostanjesz <strong>zwrot pełnej ceny biletu + odszkodowanie 250-600 €</strong>. Jeśli lecisz następnym lotem, dostaniesz tylko odszkodowanie (ale bez zwrotu biletu, bo lecisz).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ryanair oferuje mi voucher na miejscu — brać czy nie?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE BIERZ,</strong> chyba że voucher jest warty więcej niż Twoje odszkodowanie gotówką (250-600 €). Ryanair często oferuje 100-200 € voucher, co jest dużo mniej niż Twoje prawo. Jeśli przyjmiesz voucher dobrowolnie, <strong>tracisz prawo do odszkodowania gotówką</strong>.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Co jeśli nie mam denied boarding notice?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Będzie trudniej, ale <strong>nie niemożliwe</strong>. Zbierz inne dowody: email od Ryanair o odwołaniu rezerwacji, zdjęcia ekranu odlotów, świadków, potwierdzenie rezerwacji. Następnie złóż reklamację i żądaj aby Ryanair dostarczył dowody — często linia sama potwierdzi odmowę wejścia.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jak długo mam na złożenie reklamacji?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  W Polsce: <strong>3 lata od daty lotu</strong>. Irlandia (siedziba Ryanair): <strong>6 lat</strong>. Zalecamy działać szybko — im szybciej złożysz reklamację, tym większe szanse na wypłatę bez problemów.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy overbooking to nadzwyczajna okoliczność?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE!</strong> Overbooking jest świadomą decyzją biznesową Ryanair. To nie jest zdarzenie losowe poza kontrolą linii. <strong>Ryanair zawsze musi zapłacić</strong> pełne odszkodowanie 250-600 € za odmowę wejścia z powodu overbookingu. Nie ma żadnych wymówek.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ryanair odmówił Ci wejścia na pokład? Nie rezygnuj!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger pomoże Ci odzyskać 250-600 € odszkodowania za overbooking. <strong>Płacisz tylko po wygranej</strong> — zero ryzyka finansowego.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl/odwolany-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Sprawdź swoje odszkodowanie
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="https://claimwinger.com/pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                >
                  Dowiedz się więcej
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ryanair-odmowil-odszkodowania" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair odmówił wypłaty — co robić?
                </h3>
                <p className="text-gray-600 text-sm">
                  Poznaj 3 skuteczne metody wymuszenia wypłaty odszkodowania od Ryanair.
                </p>
              </Link>

              <Link href="/blog/prawa-pasazera-ryanair" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Prawa pasażera Ryanair — kompletny przewodnik
                </h3>
                <p className="text-gray-600 text-sm">
                  Wszystko o EU261: odszkodowania, posiłki, hotel, alternatywny transport.
                </p>
              </Link>

              <Link href="/blog/ryanair-voucher-zamiast-gotowki-wymusic" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair voucher zamiast gotówki — jak wymusić wypłatę?
                </h3>
                <p className="text-gray-600 text-sm">
                  Linia oferuje voucher zamiast pieniędzy? Sprawdź jak wymusić gotówkę.
                </p>
              </Link>

              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Nadzwyczajne okoliczności — kompletny przewodnik
                </h3>
                <p className="text-gray-600 text-sm">
                  Kiedy linia lotnicza może legalnie odmówić wypłaty? Wszystkie przypadki.
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}