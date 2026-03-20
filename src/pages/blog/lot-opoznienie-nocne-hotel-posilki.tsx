import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotOpoznienieNocne() {
  return (
    <Layout>
      <SEO
        title="LOT opóźnienie nocne — hotel, posiłki, transport 2026"
        description="LOT opóźnił lot i musisz czekać całą noc? Sprawdź swoje prawa do bezpłatnego hotelu, posiłków, transportu i odszkodowania €250-600."
        url="https://lotproblem.pl/blog/lot-opoznienie-nocne-hotel-posilki"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Opóźnienie Nocne: Hotel, Posiłki, Transport
          </h1>
          <p className="text-xl text-gray-600">
            LOT opóźnił lot i musisz czekać na lotnisku całą noc? Przysługuje Ci bezpłatny hotel, posiłki, transport do/z hotelu + odszkodowanie €250-600 jeśli opóźnienie ≥3h. LOT MUSI zapewnić Ci pomoc — nie płać z własnej kieszeni.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ⚠️ LOT opóźnił lot i musisz czekać do następnego dnia?
          </p>
          <p className="text-blue-800 mb-4">
            Przysługuje Ci: (1) Bezpłatny hotel (3-4 gwiazdki), (2) Transport do/z hotelu, (3) Posiłki i napoje, (4) 2 darmowe połączenia/emaile, (5) Odszkodowanie €250-600 jeśli opóźnienie końcowe ≥3h. LOT NIE może odmówić pomocy.
          </p>
          <a
            href="https://claimwinger.com/pl/opozniony-lot"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sprawdź swoje odszkodowanie →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Twoje prawa przy opóźnieniu nocnym (WE 261/2004)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Według rozporządzenia WE 261/2004 (art. 9), <strong>LOT MUSI zapewnić Ci pomoc i opiekę</strong> jeśli opóźnienie lotu wymusza nocleg na lotnisku lub w mieście. Wysokość pomocy zależy od czasu oczekiwania:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Co LOT MUSI Ci zapewnić przy opóźnieniu nocnym:</h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">1. Hotel (zakwaterowanie):</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>LOT musi zapewnić pokój hotelowy (3-4 gwiazdki) na czas oczekiwania</li>
                  <li>Hotel musi być w rozsądnej odległości od lotniska (15-30 min dojazdu)</li>
                  <li>Jeśli lot zastępczy następnego wieczoru — hotel na 1 noc</li>
                  <li>Jeśli lot dopiero za 2-3 dni — hotel na cały czas oczekiwania</li>
                </ul>
                <p className="text-green-700 mt-2 font-semibold">
                  → LOT pokrywa PEŁEN koszt hotelu (bez limitu), nie musisz płacić z własnej kieszeni
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">2. Transport do/z hotelu:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>LOT musi zorganizować transport lotnisko → hotel → lotnisko</li>
                  <li>Zazwyczaj autobusem/vanem zbiorowym (dla wszystkich opóźnionych pasażerów)</li>
                  <li>Jeśli LOT nie organizuje — możesz wziąć taxi i zażądać zwrotu kosztów (zachowaj paragon!)</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">3. Posiłki i napoje:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Na lotnisku:</strong> Vouchery na restauracje (zależnie od czasu oczekiwania)</li>
                  <li><strong>W hotelu:</strong> Śniadanie, obiadokolacja included (lub voucher)</li>
                  <li>Jeśli LOT nie daje voucherów — kup sam (rozsądne kwoty: 50-100 zł/posiłek) i żądaj zwrotu</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">4. Komunikacja:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>2 darmowe połączenia telefoniczne, emaile lub faksy</strong></li>
                  <li>Możesz zadzwonić do rodziny/pracodawcy i poinformować o opóźnieniu</li>
                  <li>LOT musi zapewnić dostęp do telefonu/WiFi na lotnisku</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-lg font-semibold mb-2">5. Odszkodowanie €250-600 (jeśli opóźnienie końcowe ≥3h):</h4>
                <p className="text-gray-700">
                  Pomoc (hotel, posiłki) + odszkodowanie to OSOBNE prawa. Jeśli lot dotrze z opóźnieniem ≥3h — przysługuje Ci zarówno pomoc JAK I odszkodowanie €250-600 (zależnie od odległości).
                </p>
              </div>
            </div>

            <p className="text-green-900 font-semibold mt-4">
              → Wszystko powyższe JEDNOCZEŚNIE! Nie możesz wybierać "hotel albo odszkodowanie" — LOT musi dać Ci wszystko.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-lg font-semibold text-red-900 mb-2">
              ❌ Kiedy LOT może odmówić hotelu?
            </p>
            <ul className="list-disc list-inside text-red-800 space-y-2">
              <li><strong>Opóźnienie &lt;4h i lot tego samego dnia:</strong> Jeśli lot zastępczy jest za 3h (tego samego dnia wieczorem) — LOT może nie dawać hotelu (ale musi dać posiłki)</li>
              <li><strong>Nadzwyczajna okoliczność:</strong> Jeśli opóźnienie spowodowane zamknięciem przestrzeni powietrznej, pogodą ekstremalną — LOT może odmówić ODSZKODOWANIA, ale MUSI nadal dać hotel + posiłki</li>
            </ul>
            <p className="text-red-900 font-semibold mt-4">
              → Nawet w przypadku nadzwyczajnej okoliczności — LOT MUSI zapewnić pomoc (hotel, posiłki)!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak uzyskać hotel od LOT na lotnisku?
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">Zgłoś się do biura LOT na lotnisku:</strong>
                  <p className="text-gray-700 mt-1">
                    Znajdź desk LOT Customer Service (zwykle przy bramkach lub w głównej hali). Powiedz: <em>"Lot [numer] jest opóźniony do jutra. Żądam hotelu, transportu i posiłków zgodnie z WE 261."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">LOT powinno dać Ci voucher hotelowy:</strong>
                  <p className="text-gray-700 mt-1">
                    Otrzymasz kartę/voucher z nazwą hotelu + adresem + potwierdzeniem rezerwacji. LOT organizuje też transport (autobus/van) dla grupy pasażerów.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Jeśli LOT odmawia hotelu:</strong>
                  <p className="text-gray-700 mt-1">
                    Zarezerwuj hotel sam (rozsądna cena: 200-400 zł/noc za 3-gwiazdkowy hotel blisko lotniska). Zachowaj paragon + potwierdzenie rezerwacji. Złóż reklamację o zwrot kosztów.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-green-900">Dokumentuj wszystko:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Zrób zdjęcia: voucher hotelowy, boarding pass, ekran z opóźnieniem lotu</li>
                    <li>Zachowaj paragony: hotel, taxi, posiłki (jeśli płaciłeś sam)</li>
                    <li>Notuj: rozmowy z LOT staff (kto, kiedy, co powiedział)</li>
                  </ul>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ LOT mówi "nie mamy umowy z hotelami, zarezerwuj sam"?
            </p>
            <p className="text-yellow-800 mb-4">
              To NIEPRAWA wymówka! LOT ma obowiązek zapewnić Ci hotel (art. 9 WE 261). Jeśli LOT odmawia:
            </p>
            <ul className="list-disc list-inside text-yellow-800 space-y-2">
              <li><strong>Zarezerwuj hotel sam</strong> (rozsądna cena 200-400 zł/noc)</li>
              <li><strong>Zachowaj paragon + potwierdzenie rezerwacji</strong></li>
              <li><strong>Złóż reklamację o zwrot kosztów</strong> (LOT musi zwrócić)</li>
            </ul>
            <p className="text-yellow-800 font-semibold mt-4">
              → Nie śpij na lotnisku jeśli lot jest następnego dnia — LOT MUSI pokryć koszt hotelu!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ile wynosi odszkodowanie za opóźnienie nocne?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Oprócz hotelu, posiłków i transportu, przysługuje Ci <strong>odszkodowanie €250-600</strong> jeśli lot dotrze z opóźnieniem końcowym ≥3h:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Odległość lotu</th>
                  <th className="py-3 px-4 text-left">Odszkodowanie</th>
                  <th className="py-3 px-4 text-left">Przykłady tras LOT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">≤ 1500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">250 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–BER, WAW–VIE, WAW–PRG, WAW–CPH</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4">1500-3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">400 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–LHR, WAW–MAD, WAW–ATH, WAW–TLV</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">&gt; 3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">600 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–JFK, WAW–ORD, WAW–NRT, WAW–YYZ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Przykład kalkulacji: LOT WAW→JFK opóźnienie 12h
            </p>
            <p className="text-blue-800 mb-4">
              <strong>Sytuacja:</strong> Lot LOT WAW→JFK opóźniony o 12h (wylot zamiast 14:00 w poniedziałek → 02:00 we wtorek). Musisz czekać całą noc na lotnisku.
            </p>
            <p className="text-blue-800 font-semibold">
              <strong>Co Ci przysługuje:</strong>
            </p>
            <ul className="list-disc list-inside text-blue-800 space-y-2">
              <li>Hotel na 1 noc (LOT pokrywa koszt ~300-500 zł)</li>
              <li>Transport do/z hotelu (autobus LOT)</li>
              <li>Posiłki (obiadokolacja + śniadanie w hotelu)</li>
              <li>Odszkodowanie <strong>600 €</strong> (lot &gt;3500 km + opóźnienie ≥3h)</li>
            </ul>
            <p className="text-blue-800 font-semibold mt-4">
              → Łącznie: ~3000 zł (hotel + posiłki + transport) + 2600 zł (odszkodowanie 600 €) = <strong>~5600 zł</strong> rekompensaty!
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              className="inline-block mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatną reklamację →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak złożyć reklamację o zwrot kosztów hotelu?
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">📝 Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-blue-900">Zbierz dokumenty:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Boarding pass (original + replacement jeśli był lot zastępczy)</li>
                    <li>Potwierdzenie rezerwacji hotelu (receipt/invoice)</li>
                    <li>Paragony taxi/transport (jeśli płaciłeś sam)</li>
                    <li>Paragony posiłki (jeśli kupiłeś sam, rozsądne kwoty)</li>
                    <li>Zrzut ekranu: opóźnienie lotu (FlightRadar24, LOT.com)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-blue-900">Wyślij reklamację do LOT:</strong>
                  <p className="text-gray-700 mt-1">
                    Email: customer.relations@lot.pl<br/>
                    Formularz online: <a href="https://www.lot.com/pl/pl/customer-service/contact-us" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.lot.com → Obsługa klienta → Kontakt</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Treść: <em>"Żądam zwrotu kosztów hotelu, transportu i posiłków za opóźnienie lotu [numer] z dnia [data]. LOT nie zapewniło hotelu na miejscu, musiałem zarezerwować sam. Załączam paragony [kwota] zł. Dodatkowo żądam odszkodowania €[kwota] za opóźnienie ≥3h. Proszę o przelew na konto [IBAN] w ciągu 7 dni."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-blue-900">Daj LOT 30 dni na odpowiedź:</strong>
                  <p className="text-gray-700 mt-1">
                    LOT ma 30 dni na rozpatrzenie reklamacji.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-blue-900">Jeśli LOT odmówi lub nie odpowie:</strong>
                  <p className="text-gray-700 mt-1">
                    Zgłoś sprawę do ULC: <a href="https://www.ulc.gov.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.ulc.gov.pl</a><br/>
                    LUB skorzystaj z pomocy <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ekspertów ClaimWinger</a>.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pytania i odpowiedzi (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Czy LOT może zmusić mnie do spania na lotnisku zamiast hotelu?
              </h3>
              <p className="text-gray-700">
                <strong>Nie!</strong> Jeśli lot jest następnego dnia (opóźnienie ≥4-6h wieczorem/nocą) — LOT MUSI zapewnić hotel. Nie możesz być zmuszony do spania na lotnisku bez rekompensaty.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Czy mogę wybrać hotel sam i zażądać zwrotu kosztów?
              </h3>
              <p className="text-gray-700">
                <strong>Tak, jeśli LOT nie zapewniło hotelu.</strong> Zarezerwuj rozsądny hotel (200-400 zł/noc, 3-gwiazdki blisko lotniska). Zachowaj paragon i złóż reklamację o zwrot. LOT musi pokryć koszty jeśli nie wywiązało się z obowiązku.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Czy przysługuje mi hotel jeśli opóźnienie było spowodowane nadzwyczajną okolicznością?
              </h3>
              <p className="text-gray-700">
                <strong>TAK!</strong> Nawet jeśli opóźnienie było spowodowane pogodą ekstremalną lub zamknięciem przestrzeni powietrznej — LOT MUSI zapewnić hotel, posiłki, transport. Nadzwyczajna okoliczność zwalnia LOT tylko z ODSZKODOWANIA (€250-600), ale NIE z pomocy.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Ile maksymalnie mogę wydać na hotel i posiłki?
              </h3>
              <p className="text-gray-700">
                <strong>Rozsądne kwoty:</strong> Hotel 200-400 zł/noc (3-gwiazdki), Posiłki 50-100 zł/posiłek, Taxi 50-150 zł (jeśli LOT nie organizowało transportu). Unikaj luksusowych hoteli (5-gwiazdek za 1000 zł/noc) — LOT może odmówić zwrotu "nadmiernych" kosztów.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Czy mogę dostać odszkodowanie €250-600 OPRÓCZ hotelu?
              </h3>
              <p className="text-gray-700">
                <strong>TAK!</strong> Pomoc (hotel, posiłki) i odszkodowanie to OSOBNE prawa. Jeśli lot dotrze z opóźnieniem ≥3h — otrzymujesz ZARÓWNO pomoc (hotel) JAK I odszkodowanie €250-600.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Ile czasu mam na złożenie reklamacji o zwrot kosztów hotelu?
              </h3>
              <p className="text-gray-700">
                <strong>3 lata od daty lotu</strong> (przedawnienie). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (paragony) i przyspieszyć zwrot.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Co jeśli LOT mówi "to była Twoja wina" (spóźniłeś się na lot)?
              </h3>
              <p className="text-gray-700">
                <strong>Sprawdź czy rzeczywiście spóźniłeś się.</strong> Jeśli dotarłeś na lotnisko w dozwolonym terminie (45min przed lotem międzynarodowym) i lot był opóźniony — LOT nie może obwiniać Ciebie. Odwołaj się do ULC.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Czy LOT pokrywa koszt pralni w hotelu?
              </h3>
              <p className="text-gray-700">
                <strong>Nie automatycznie.</strong> LOT pokrywa: hotel, transport, posiłki. Dodatkowe usługi (pralnia, minibar, pay-per-view) musisz płacić sam. Ale jeśli opóźnienie było 3+ dni i musiałeś użyć pralni — możesz spróbować zażądać zwrotu (zachowaj paragon).
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
                  "name": "Czy LOT może zmusić mnie do spania na lotnisku zamiast hotelu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie! Jeśli lot jest następnego dnia (opóźnienie ≥4-6h wieczorem/nocą) — LOT MUSI zapewnić hotel. Nie możesz być zmuszony do spania na lotnisku bez rekompensaty."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę wybrać hotel sam i zażądać zwrotu kosztów?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak, jeśli LOT nie zapewniło hotelu. Zarezerwuj rozsądny hotel (200-400 zł/noc, 3-gwiazdki blisko lotniska). Zachowaj paragon i złóż reklamację o zwrot. LOT musi pokryć koszty jeśli nie wywiązało się z obowiązku."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy przysługuje mi hotel jeśli opóźnienie było spowodowane nadzwyczajną okolicznością?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK! Nawet jeśli opóźnienie było spowodowane pogodą ekstremalną lub zamknięciem przestrzeni powietrznej — LOT MUSI zapewnić hotel, posiłki, transport. Nadzwyczajna okoliczność zwalnia LOT tylko z ODSZKODOWANIA (€250-600), ale NIE z pomocy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ile maksymalnie mogę wydać na hotel i posiłki?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Rozsądne kwoty: Hotel 200-400 zł/noc (3-gwiazdki), Posiłki 50-100 zł/posiłek, Taxi 50-150 zł (jeśli LOT nie organizowało transportu). Unikaj luksusowych hoteli (5-gwiazdek za 1000 zł/noc) — LOT może odmówić zwrotu 'nadmiernych' kosztów."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę dostać odszkodowanie €250-600 OPRÓCZ hotelu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK! Pomoc (hotel, posiłki) i odszkodowanie to OSOBNE prawa. Jeśli lot dotrze z opóźnieniem ≥3h — otrzymujesz ZARÓWNO pomoc (hotel) JAK I odszkodowanie €250-600."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ile czasu mam na złożenie reklamacji o zwrot kosztów hotelu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 lata od daty lotu (przedawnienie). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (paragony) i przyspieszyć zwrot."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli LOT mówi 'to była Twoja wina' (spóźniłeś się na lot)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sprawdź czy rzeczywiście spóźniłeś się. Jeśli dotarłeś na lotnisko w dozwolonym terminie (45min przed lotem międzynarodowym) i lot był opóźniony — LOT nie może obwiniać Ciebie. Odwołaj się do ULC."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy LOT pokrywa koszt pralni w hotelu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie automatycznie. LOT pokrywa: hotel, transport, posiłki. Dodatkowe usługi (pralnia, minibar, pay-per-view) musisz płacić sam. Ale jeśli opóźnienie było 3+ dni i musiałeś użyć pralni — możesz spróbować zażądać zwrotu (zachowaj paragon)."
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
