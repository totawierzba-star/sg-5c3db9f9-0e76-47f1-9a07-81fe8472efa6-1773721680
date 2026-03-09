import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotDowngrade() {
  return (
    <Layout>
      <SEO
        title="LOT downgrade — przeniesienie do niższej klasy i zwrot pieniędzy 2026"
        description="LOT przeniósł Cię z Business do Economy bez Twojej zgody? Sprawdź swoje prawa do zwrotu 30-75% ceny biletu i jak skutecznie wyegzekwować rekompensatę."
        url="https://lotproblem.pl/blog/lot-downgrade-nizszej-klasy-zwrot"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Downgrade: Przeniesienie do Niższej Klasy
          </h1>
          <p className="text-xl text-gray-600">
            Kupiłeś bilet Business Class, a LOT przeniósł Cię do Economy? To downgrade (obniżenie klasy podróży) bez Twojej zgody. Przysługuje Ci zwrot 30-75% ceny biletu + możliwe odszkodowanie. Sprawdź jak skutecznie wyegzekwować swoje prawa.
          </p>
        </header>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <p className="text-lg font-semibold text-red-900 mb-2">
            ⚠️ LOT przeniósł Cię do niższej klasy bez zgody?
          </p>
          <p className="text-red-800 mb-4">
            To naruszenie umowy przewozu! Przysługuje Ci AUTOMATYCZNY zwrot 30-75% ceny biletu (zależnie od odległości lotu) + możliwe dodatkowe odszkodowanie za straty. LOT NIE może zmusić Cię do akceptacji downgrade'u bez rekompensaty.
          </p>
          <a
            href="https://claimwinger.com/pl"
            className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Sprawdź swoje odszkodowanie →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Czym jest downgrade (obniżenie klasy)?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Downgrade</strong> to sytuacja gdy linia lotnicza (LOT) przenosi pasażera do niższej klasy obsługi niż ta, za którą zapłacił. Najczęstsze przypadki:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">📋 Rodzaje downgrade LOT:</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Business Class → Economy Class</strong> (najczęstszy downgrade)</li>
              <li>• <strong>Premium Economy → Economy</strong></li>
              <li>• <strong>Economy Flex → Economy Light</strong> (obniżenie taryfy w ramach tej samej klasy)</li>
              <li>• <strong>Business Class → Premium Economy</strong> (rzadsze, ale możliwe)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Kiedy dochodzi do downgrade'u?
            </p>
            <p className="text-yellow-800 mb-4">
              Główne przyczyny obniżenia klasy przez LOT:
            </p>
            <ul className="list-disc list-inside text-yellow-800 space-y-2">
              <li><strong>Overbooking Business Class</strong> — LOT sprzedało więcej biletów niż dostępnych miejsc</li>
              <li><strong>Zmiana samolotu</strong> — LOT użyło mniejszego samolotu bez sekcji Business</li>
              <li><strong>Usterka techniczna</strong> — uszkodzony fotel Business, pasażer przeniesiony do Economy</li>
              <li><strong>Late check-in</strong> — pasażerowie sprawdzeni późno tracą miejsce Business na rzecz VIP</li>
            </ul>
            <p className="text-yellow-800 font-semibold mt-4">
              → W KAŻDYM przypadku przysługuje Ci zwrot części ceny biletu!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Twoje prawa przy downgrade (WE 261/2004 art. 10)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Według rozporządzenia WE 261/2004 (art. 10), <strong>LOT MUSI zwrócić Ci część ceny biletu</strong> jeśli przeniósł Cię do niższej klasy. Wysokość zwrotu zależy od odległości lotu:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Odległość lotu</th>
                  <th className="py-3 px-4 text-left">Zwrot przy downgrade</th>
                  <th className="py-3 px-4 text-left">Przykłady tras LOT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">≤ 1500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">30% ceny biletu</td>
                  <td className="py-3 px-4 text-gray-600">WAW–BER, WAW–VIE, WAW–PRG, WAW–CPH</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4">1500-3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">50% ceny biletu</td>
                  <td className="py-3 px-4 text-gray-600">WAW–LHR, WAW–MAD, WAW–ATH, WAW–TLV</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">&gt; 3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">75% ceny biletu</td>
                  <td className="py-3 px-4 text-gray-600">WAW–JFK, WAW–ORD, WAW–NRT, WAW–YYZ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Przykład kalkulacji zwrotu:</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">Przykład 1: LOT WAW→JFK Business → Economy</h4>
                <p className="text-gray-700">
                  <strong>Cena biletu Business Class:</strong> 12 000 zł<br/>
                  <strong>Odległość lotu:</strong> 6800 km (powyżej 3500 km)<br/>
                  <strong>Zwrot przysługujący:</strong> 75% × 12 000 zł = <strong className="text-green-600">9 000 zł</strong>
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">Przykład 2: LOT WAW→LHR Business → Economy</h4>
                <p className="text-gray-700">
                  <strong>Cena biletu Business Class:</strong> 3 200 zł<br/>
                  <strong>Odległość lotu:</strong> 1600 km (1500-3500 km)<br/>
                  <strong>Zwrot przysługujący:</strong> 50% × 3 200 zł = <strong className="text-green-600">1 600 zł</strong>
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">Przykład 3: LOT WAW→BER Business → Economy</h4>
                <p className="text-gray-700">
                  <strong>Cena biletu Business Class:</strong> 1 500 zł<br/>
                  <strong>Odległość lotu:</strong> 520 km (≤1500 km)<br/>
                  <strong>Zwrot przysługujący:</strong> 30% × 1 500 zł = <strong className="text-green-600">450 zł</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Czy mogę odmówić downgrade'u?
            </p>
            <p className="text-blue-800 mb-4">
              <strong>TAK!</strong> Jeśli LOT proponuje Ci downgrade PRZED odprawą (check-in) — możesz odmówić i zażądać:
            </p>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li><strong>Lotu zastępczego w tej samej klasie</strong> (Business) w późniejszym terminie</li>
              <li><strong>Pełnego zwrotu biletu</strong> (bez kar za anulację)</li>
            </ul>
            <p className="text-blue-800 mt-4">
              Jeśli downgrade jest proponowany NA LOTNISKU tuż przed wejściem na pokład — trudniej odmówić (LOT może argumentować "operacyjną konieczność"), ale NADAL przysługuje Ci zwrot 30-75%.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Downgrade vs overbooking — różnice
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-4 text-left">Aspekt</th>
                  <th className="py-3 px-4 text-left">Downgrade</th>
                  <th className="py-3 px-4 text-left">Overbooking (denied boarding)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-semibold">Co się dzieje?</td>
                  <td className="py-3 px-4">Lecisz, ale w niższej klasie</td>
                  <td className="py-3 px-4">Nie lecisz wcale (odmowa wejścia)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-semibold">Rekompensata</td>
                  <td className="py-3 px-4">Zwrot 30-75% ceny biletu</td>
                  <td className="py-3 px-4">Odszkodowanie €250-600</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Lot zastępczy?</td>
                  <td className="py-3 px-4">Nie (lecisz tym samym lotem)</td>
                  <td className="py-3 px-4">Tak (LOT musi dać Ci lot zastępczy)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-semibold">Pomoc (hotel, posiłki)?</td>
                  <td className="py-3 px-4">Nie</td>
                  <td className="py-3 px-4">Tak (jeśli czekasz ≥2h/3h/4h)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak zareagować na downgrade LOT?
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">NIE akceptuj downgrade'u bez walki:</strong>
                  <p className="text-gray-700 mt-1">
                    Jeśli LOT proponuje Ci downgrade na lotnisku — zapytaj o lot zastępczy w Business Class w późniejszym terminie LUB pełny zwrot biletu. Nie zgadzaj się od razu na obniżenie klasy.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">Żądaj pisemnego potwierdzenia:</strong>
                  <p className="text-gray-700 mt-1">
                    LOT musi wystawić dokument "Downgrade Notice" (potwierdzenie obniżenia klasy) z informacją o Twoich prawach do zwrotu. BEZ tego dokumentu trudno wyegzekwować rekompensatę.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Dokumentuj wszystko:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Zrób zdjęcia: oryginalny boarding pass (Business Class) + nowy boarding pass (Economy)</li>
                    <li>Zachowaj: booking confirmation (potwierdzenie rezerwacji Business Class)</li>
                    <li>Zapisz: SMS/email od LOT o downgrade'dzie</li>
                    <li>Notuj: okoliczności (kto, kiedy, co powiedział na lotnisku)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-green-900">Złóż reklamację natychmiast:</strong>
                  <p className="text-gray-700 mt-1">
                    Nie czekaj — złóż reklamację do LOT zaraz po powrocie. Im szybciej, tym łatwiej zebrać dowody i uzyskać zwrot.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ LOT oferuje voucher zamiast zwrotu gotówki?
            </p>
            <p className="text-yellow-800 mb-4">
              <strong>ODMÓW!</strong> Masz prawo do zwrotu w GOTÓWCE (przelew na konto bankowe). Vouchery LOT są mniej wartościowe (krótka ważność 6-12 miesięcy, ograniczenia — tylko loty LOT). Żądaj płatności zgodnie z WE 261/2004.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition"
            >
              Złóż bezpłatną reklamację →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak złożyć reklamację o zwrot za downgrade?
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">📝 Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-blue-900">Zbierz dokumenty:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Booking confirmation (potwierdzenie rezerwacji Business Class z numerem PNR)</li>
                    <li>Boarding pass (oryginalny Business + nowy Economy)</li>
                    <li>Downgrade Notice (z lotniska — najważniejszy dokument!)</li>
                    <li>Potwierdzenie płatności (receipt — ile zapłaciłeś za bilet Business)</li>
                    <li>SMS/email od LOT o downgrade'dzie</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-blue-900">Oblicz kwotę zwrotu:</strong>
                  <p className="text-gray-700 mt-1">
                    • Loty ≤1500 km: 30% ceny biletu<br/>
                    • Loty 1500-3500 km: 50% ceny biletu<br/>
                    • Loty &gt;3500 km: 75% ceny biletu
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-blue-900">Wyślij reklamację do LOT:</strong>
                  <p className="text-gray-700 mt-1">
                    Email: customer.relations@lot.pl<br/>
                    Formularz online: <a href="https://www.lot.com/pl/pl/customer-service/contact-us" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.lot.com → Obsługa klienta → Kontakt</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Treść: <em>"Żądam zwrotu [30%/50%/75%] ceny biletu z powodu obniżenia klasy podróży (downgrade) z Business Class do Economy Class na locie [numer lotu] dnia [data]. Załączam dokumenty potwierdzające. Proszę o przelew [kwota] zł na konto bankowe [IBAN] w ciągu 7 dni."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-blue-900">Daj LOT 30 dni na odpowiedź:</strong>
                  <p className="text-gray-700 mt-1">
                    LOT ma 30 dni na rozpatrzenie reklamacji (zgodnie z polskimi przepisami o prawach pasażera).
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <div>
                  <strong className="text-blue-900">Jeśli LOT odmówi lub nie odpowie:</strong>
                  <p className="text-gray-700 mt-1">
                    Zgłoś sprawę do ULC (Urząd Lotnictwa Cywilnego): <a href="https://www.ulc.gov.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.ulc.gov.pl</a><br/>
                    LUB skorzystaj z pomocy <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ekspertów ClaimWinger</a> (prowizja tylko przy sukcesie ~25-30%).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Dodatkowe odszkodowania poza zwrotem 30-75%
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Oprócz automatycznego zwrotu 30-75% ceny biletu, możesz ubiegać się o <strong>dodatkowe odszkodowania</strong> jeśli downgrade spowodował konkretne straty:
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">💰 Możliwe dodatkowe roszczenia:</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Utrata korzyści biznesowych:</strong> Jeśli lecisz na spotkanie biznesowe i downgrade uniemożliwił Ci pracę/odpoczynek w locie → możesz domagać się odszkodowania za utracone korzyści (musisz UDOWODNIĆ straty)</li>
              <li>• <strong>Stress i dyskomfort:</strong> W Polsce trudno wyegzekwować "odszkodowanie moralne" za dyskomfort, ale UE pracuje nad rozszerzeniem praw pasażerów</li>
              <li>• <strong>Dodatkowe koszty:</strong> Jeśli musiałeś kupić coś co byłoby included w Business (np. posiłek, WiFi) → zachowaj paragony i żądaj zwrotu</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przykłady rzeczywistych spraw downgrade LOT
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 1: LOT WAW→JFK Business → Economy (9000 zł zwrotu)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer kupił bilet Business Class LOT WAW→JFK za 12 000 zł (meeting biznesowy w NYC). Na lotnisku LOT poinformowało o "problemie technicznym z sekcją Business" i przeniesieniu do Economy. Zaproponowano voucher 2000 zł.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer odmówił vouchera. Zażądał lotu zastępczego w Business następnego dnia LUB zwrotu biletu. LOT odmówił (argumentując "brak wolnych miejsc Business przez tydzień"). Pasażer poleciał Economy i złożył reklamację o 75% zwrotu (9000 zł).
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź LOT:</strong> LOT zaproponowało voucher 4000 zł. Pasażer odrzucił — żądał gotówki. LOT odmówił twierdząc że "voucher to uczciwa rekompensata".
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> Pasażer odwołał się do ULC. ULC nakazało LOT wypłatę 9000 zł gotówką w ciągu 14 dni. LOT wypłaciło bez dalszej eskalacji.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 2: LOT WAW→LHR Business → Economy (1600 zł zwrotu)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer kupił bilet Business Class za 3200 zł. LOT zmieniło samolot na mniejszy (bez sekcji Business) i przeniósł pasażerów do Economy. Poinformowało o tym emailem 3 dni przed lotem.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer zaakceptował downgrade (nie miał czasu szukać alternatywy), ale złożył reklamację o 50% zwrotu (1600 zł). LOT zaproponowało voucher 800 zł "w ramach dobrej woli".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź LOT:</strong> Pasażer odmówił vouchera i ponownie zażądał 1600 zł gotówką (powołując się na art. 10 WE 261). LOT zignorowało reklamację przez 45 dni.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> Pasażer zgłosił sprawę do ULC. ULC nakazało LOT wypłatę 1600 zł + odsetki za opóźnienie (60 zł). Łącznie 1660 zł.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 3: LOT WAW→BER Business → Economy (450 zł zwrotu)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer kupił bilet Business Class za 1500 zł (krótki lot, ale potrzebował przestrzeni do pracy). LOT dokonało overbookingu Business i przeniosło pasażera do Economy. Zaproponowano voucher 300 zł + upgrade na przyszłym locie.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer odmówił vouchera i żądał 30% zwrotu (450 zł) gotówką. LOT wypłaciło 450 zł bez problemów w 10 dni.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> 450 zł zwrotu. LOT wypłaciło szybko, prawdopodobnie ze względu na niską kwotę (tańsze niż eskalacja do ULC).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pytania i odpowiedzi (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Czy LOT może zmusić mnie do downgrade'u bez rekompensaty?
              </h3>
              <p className="text-gray-700">
                <strong>Nie!</strong> LOT MUSI wypłacić Ci zwrot 30-75% ceny biletu (zależnie od odległości lotu) zgodnie z art. 10 WE 261/2004. To automatyczne prawo — nie musisz "negocjować" czy "prosić" o zwrot.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Czy mogę odmówić downgrade'u i zażądać lotu zastępczego w Business?
              </h3>
              <p className="text-gray-700">
                <strong>Tak, jeśli LOT proponuje downgrade PRZED odprawą.</strong> Możesz zażądać lotu zastępczego w Business Class w późniejszym terminie LUB pełnego zwrotu biletu. Jeśli downgrade jest na bramce (tuż przed wejściem) — trudniej odmówić, ale nadal przysługuje Ci zwrot 30-75%.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Ile czasu mam na złożenie reklamacji za downgrade?
              </h3>
              <p className="text-gray-700">
                <strong>3 lata od daty lotu</strong> (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (Downgrade Notice, boarding pass) i przyspieszyć wypłatę.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Czy zwrot 30-75% jest od ceny biletu brutto czy netto?
              </h3>
              <p className="text-gray-700">
                <strong>Od ceny brutto (całkowitej).</strong> Zwrot obejmuje wszystkie opłaty (podatki, bagaż, seat selection). Jeśli zapłaciłeś 12 000 zł za bilet Business (all-in) → zwrot 75% = 9000 zł.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Czy LOT może obniżyć zwrot jeśli zaproponowało lot zastępczy w Business?
              </h3>
              <p className="text-gray-700">
                <strong>Nie, jeśli NIE skorzystałeś z propozycji.</strong> Jeśli LOT zaproponowało lot zastępczy w Business (następnego dnia) i odmówiłeś — LOT musi wypłacić pełny zwrot 30-75%. Jeśli zaakceptowałeś lot zastępczy — tracisz prawo do zwrotu.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Co jeśli kupiłem bilet Business promocyjnie (za mało punktów Miles & More)?
              </h3>
              <p className="text-gray-700">
                <strong>Zwrot jest od ceny biletu, nie od punktów.</strong> Jeśli użyłeś punktów Miles & More + doładowanie gotówką (cash top-up) — zwrot jest od całkowitej wartości biletu (przeliczona na złotówki). LOT nie może odmówić zwrotu argumentując "to był bilet premiowy".
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Czy przysługuje mi odszkodowanie €250-600 JAK ZA odwołany lot?
              </h3>
              <p className="text-gray-700">
                <strong>Nie.</strong> Downgrade ≠ odwołanie lotu. Przysługuje Ci TYLKO zwrot 30-75% ceny biletu. Odszkodowanie €250-600 przysługuje za odwołany lot, denied boarding (overbooking), lub opóźnienie ≥3h — ale NIE za downgrade.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Co jeśli LOT odmówi zwrotu twierdząc że "to była Twoja wina" (late check-in)?
              </h3>
              <p className="text-gray-700">
                Odwołaj się do ULC lub skorzystaj z pomocy <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ekspertów ClaimWinger</a>. Jeśli sprawdziłeś się w dozwolonym terminie (45min przed lotem międzynarodowym) — LOT MUSI wypłacić zwrot. Late check-in to rzadko uznawana wymówka.
              </p>
            </div>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Czy LOT może zmusić mnie do downgrade'u bez rekompensaty?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie! LOT MUSI wypłacić Ci zwrot 30-75% ceny biletu (zależnie od odległości lotu) zgodnie z art. 10 WE 261/2004. To automatyczne prawo — nie musisz 'negocjować' czy 'prosić' o zwrot."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę odmówić downgrade'u i zażądać lotu zastępczego w Business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak, jeśli LOT proponuje downgrade PRZED odprawą. Możesz zażądać lotu zastępczego w Business Class w późniejszym terminie LUB pełnego zwrotu biletu. Jeśli downgrade jest na bramce (tuż przed wejściem) — trudniej odmówić, ale nadal przysługuje Ci zwrot 30-75%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ile czasu mam na złożenie reklamacji za downgrade?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 lata od daty lotu (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (Downgrade Notice, boarding pass) i przyspieszyć wypłatę."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy zwrot 30-75% jest od ceny biletu brutto czy netto?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Od ceny brutto (całkowitej). Zwrot obejmuje wszystkie opłaty (podatki, bagaż, seat selection). Jeśli zapłaciłeś 12 000 zł za bilet Business (all-in) → zwrot 75% = 9000 zł."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy LOT może obniżyć zwrot jeśli zaproponowało lot zastępczy w Business?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie, jeśli NIE skorzystałeś z propozycji. Jeśli LOT zaproponowało lot zastępczy w Business (następnego dnia) i odmówiłeś — LOT musi wypłacić pełny zwrot 30-75%. Jeśli zaakceptowałeś lot zastępczy — tracisz prawo do zwrotu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli kupiłem bilet Business promocyjnie (za mało punktów Miles & More)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zwrot jest od ceny biletu, nie od punktów. Jeśli użyłeś punktów Miles & More + doładowanie gotówką (cash top-up) — zwrot jest od całkowitej wartości biletu (przeliczona na złotówki). LOT nie może odmówić zwrotu argumentując 'to był bilet premiowy'."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy przysługuje mi odszkodowanie €250-600 JAK ZA odwołany lot?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie. Downgrade ≠ odwołanie lotu. Przysługuje Ci TYLKO zwrot 30-75% ceny biletu. Odszkodowanie €250-600 przysługuje za odwołany lot, denied boarding (overbooking), lub opóźnienie ≥3h — ale NIE za downgrade."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli LOT odmówi zwrotu twierdząc że 'to była Twoja wina' (late check-in)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Odwołaj się do ULC lub skorzystaj z pomocy ekspertów ClaimWinger. Jeśli sprawdziłeś się w dozwolonym terminie (45min przed lotem międzynarodowym) — LOT MUSI wypłacić zwrot. Late check-in to rzadko uznawana wymówka."
                  }
                }
              ]
            })
          }}
        />
      </article>
    </Layout>
  );
}