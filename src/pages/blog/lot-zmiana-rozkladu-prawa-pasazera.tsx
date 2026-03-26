import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotZmianaRozkladu() {
  return (
    <Layout>
      <SEO
        title="LOT zmiana rozkładu lotu: Prawa pasażera i odszkodowanie 2026"
        description="LOT zmienił godzinę lub datę lotu bez Twojej zgody? Sprawdź swoje prawa, kiedy przysługuje odszkodowanie €250-600 i jak skutecznie je wyegzekwować."
        url="https://problemlot.com/blog/lot-zmiana-rozkladu-prawa-pasazera"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Zmiana Rozkładu Lotu: Prawa Pasażera
          </h1>
          <p className="text-xl text-gray-600">
            LOT zmienił godzinę odlotu, datę, trasę lub odwołał lot bez Twojej zgody? To naruszenie umowy przewozu. Sprawdź kiedy przysługuje Ci zwrot biletu, lot zastępczy lub nawet €250-600 odszkodowania za zmianę rozkładu.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ⚠️ LOT jednostronnie zmienił rozkład Twojego lotu?
          </p>
          <p className="text-blue-800 mb-4">
            Masz prawo do: (1) BEZPŁATNEJ zmiany na inny lot LOT w dogodnym terminie, (2) PEŁNEGO zwrotu biletu bez kar, (3) Odszkodowania €250-600 jeśli zmiana = faktyczne odwołanie lotu. LOT NIE może zmusić Cię do akceptacji nowego rozkładu.
          </p>
          <a
            href="https://claimwinger.com/pl/odwolany-lot"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sprawdź swoje odszkodowanie →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Czym jest zmiana rozkładu lotu (schedule change)?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Zmiana rozkładu</strong> to jednostronna modyfikacja przez LOT warunków umowy przewozu po zakupie biletu. Może dotyczyć:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">📋 Rodzaje zmian rozkładu LOT:</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Zmiana godziny odlotu</strong> — wcześniej lub później (np. 10:00 → 15:00)</li>
              <li>• <strong>Zmiana daty</strong> — inny dzień (np. 15 marca → 16 marca)</li>
              <li>• <strong>Zmiana trasy/przesiadki</strong> — dodatkowa przesiadka lub inna trasa (np. direct → via VIE)</li>
              <li>• <strong>Zmiana numeru lotu</strong> — połączenie z innym lotem (np. LO281 + LO283 → LO285)</li>
              <li>• <strong>Zmiana samolotu/klasy</strong> — mniejszy samolot, niższa klasa (downgrade)</li>
              <li>• <strong>Odwołanie lotu</strong> — lot usunięty z rozkładu, pasażerowie przeniesieni na inny termin</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Kiedy zmiana rozkładu = odwołanie lotu?
            </p>
            <p className="text-yellow-800 mb-4">
              Według orzecznictwa Trybunału Sprawiedliwości UE (TSUE), <strong>"znacząca" zmiana rozkładu</strong> jest traktowana jak odwołanie lotu i uprawnia do odszkodowania €250-600. Co to znaczy "znacząca"?
            </p>
            <ul className="list-disc list-inside text-yellow-800 space-y-2">
              <li><strong>Zmiana godziny ≥3h</strong> (odlot lub przylot) — C-832/18 Laudamotion</li>
              <li><strong>Zmiana daty</strong> (inny dzień) — jednoznacznie = odwołanie</li>
              <li><strong>Dodatkowa przesiadka</strong> (direct → connecting) — faktyczna zmiana charakteru podróży</li>
              <li><strong>Zmiana trasy przez inne lotnisko</strong> (np. WAW → LHR via FRA zamiast direct)</li>
            </ul>
            <p className="text-yellow-800 font-semibold mt-4">
              → W tych przypadkach przysługuje Ci odszkodowanie €250-600 JAK ZA ODWOŁANY LOT!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Twoje prawa przy zmianie rozkładu LOT
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            LOT MUSI poinformować Cię o zmianie rozkładu <strong>co najmniej 14 dni przed planowanym odlotem</strong> (art. 5(1)(c) WE 261/2004). Jeśli zmiana jest "znacząca", masz prawo do:
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Opcja 1: Bezpłatna zmiana na inny lot LOT</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• LOT musi zaproponować Ci lot zastępczy w <strong>dogodnym dla Ciebie terminie</strong> (bez dopłaty)</li>
              <li>• Możesz wybrać wcześniejszy lub późniejszy lot (jeśli są wolne miejsca)</li>
              <li>• LOT musi przenieść Cię do tej samej klasy (jeśli kupiłeś Business — LOT nie może dać Ci Economy)</li>
              <li>• Zmiana obejmuje cały bilet (jeśli lecisz z przesiadką WAW→VIE→NYC, LOT musi zmienić oba segmenty)</li>
            </ul>
            <p className="text-green-900 font-semibold mt-4">
              → Najlepsza opcja jeśli nowy termin Ci odpowiada.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Opcja 2: Pełny zwrot biletu (refund)</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• LOT musi zwrócić Ci <strong>100% ceny biletu</strong> (bez kar za anulację)</li>
              <li>• Zwrot w ciągu 7 dni (przelew na konto)</li>
              <li>• Obejmuje wszystkie opłaty (podatki lotniskowe, bagaż, seat selection)</li>
              <li>• Jeśli lot był w jedną stronę (outbound) — możesz zażądać też lotu powrotnego do punktu wyjścia (jeśli już jesteś w podróży)</li>
            </ul>
            <p className="text-green-900 font-semibold mt-4">
              → Najlepsza opcja jeśli nowy termin Ci nie odpowiada lub znalazłeś tańszy bilet na innej linii.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Opcja 3: Odszkodowanie €250-600 (jeśli zmiana = odwołanie)</h3>
            <p className="text-gray-800 mb-3">
              Jeśli zmiana rozkładu jest "znacząca" (≥3h, inna data, dodatkowa przesiadka), przysługuje Ci odszkodowanie JAK ZA ODWOŁANY LOT:
            </p>
            <ul className="space-y-2 text-gray-800">
              <li>• <strong>250 €</strong> — loty do 1500 km</li>
              <li>• <strong>400 €</strong> — loty 1500-3500 km</li>
              <li>• <strong>600 €</strong> — loty powyżej 3500 km</li>
            </ul>
            <p className="text-green-900 font-semibold mt-4">
              → Odszkodowanie + zwrot biletu LUB lot zastępczy (możesz mieć oba!)
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-lg font-semibold text-red-900 mb-2">
              ❌ Kiedy LOT NIE musi płacić odszkodowania?
            </p>
            <ul className="list-disc list-inside text-red-800 space-y-2">
              <li><strong>Zmiana ≤3h</strong> — małe zmiany (np. 10:00 → 12:30) nie są traktowane jak odwołanie</li>
              <li><strong>Powiadomienie ≥14 dni wcześniej</strong> — jeśli LOT poinformowało Cię z wyprzedzeniem i zaproponowało alternatywy</li>
              <li><strong>Nadzwyczajna okoliczność</strong> — zamknięcie przestrzeni powietrznej, pogoda ekstremalna (ale LOT musi to UDOWODNIĆ)</li>
            </ul>
            <p className="text-red-900 mt-4">
              → Ale ZAWSZE masz prawo do zwrotu biletu lub bezpłatnej zmiany!
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak LOT powiadamia o zmianie rozkładu?
          </h2>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">📧 Sposoby powiadamiania:</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li><strong>Email</strong> — na adres podany przy rezerwacji (sprawdź też folder spam)</li>
              <li><strong>SMS</strong> — na numer telefonu z rezerwacji</li>
              <li><strong>Aplikacja LOT</strong> — push notification (jeśli masz aplikację zainstalowaną)</li>
              <li><strong>Portal LOT</strong> — zaloguj się na lot.com → Moje rezerwacje</li>
              <li><strong>Biuro podróży/OTA</strong> — jeśli kupowałeś przez eSky, Kiwi, Booking — oni też powinni Cię powiadomić</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ LOT nie poinformowało Cię o zmianie rozkładu?
            </p>
            <p className="text-yellow-800 mb-4">
              To naruszenie obowiązku informacyjnego (art. 14 WE 261). Jeśli dowiedziałeś się o zmianie dopiero na lotnisku lub &lt;14 dni przed odlotem — przysługuje Ci pełne odszkodowanie €250-600 (bez względu na wielkość zmiany).
            </p>
            <p className="text-yellow-800 font-semibold">
              Zapisz dowody: Brak emaila/SMS-a LOT, zrzut ekranu z portalu LOT (data ostatniej aktualizacji rezerwacji).
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ile wynosi odszkodowanie za zmianę rozkładu?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Odszkodowanie przysługuje tylko gdy zmiana rozkładu jest "znacząca" (≥3h, inna data, dodatkowa przesiadka). Wysokość zależy od odległości lotu:
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
              💡 LOT zmienił rozkład i oferuje voucher zamiast odszkodowania?
            </p>
            <p className="text-blue-800 mb-4">
              <strong>ODMÓW!</strong> Masz prawo do odszkodowania w GOTÓWCE (przelew na konto). Vouchery LOT są mniej wartościowe (krótka ważność, ograniczenia). Żądaj płatności zgodnie z WE 261/2004.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatną reklamację →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak zareagować na zmianę rozkładu LOT?
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">Sprawdź szczegóły zmiany:</strong>
                  <p className="text-gray-700 mt-1">
                    Zaloguj się na lot.com → Moje rezerwacje. Sprawdź: nową godzinę odlotu, nową datę, nową trasę. Porównaj z oryginalnym biletem.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">Oceń czy zmiana jest "znacząca":</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Zmiana ≥3h (odlot lub przylot)? → TAK = odszkodowanie</li>
                    <li>Zmiana daty (inny dzień)? → TAK = odszkodowanie</li>
                    <li>Dodatkowa przesiadka (direct → connecting)? → TAK = odszkodowanie</li>
                    <li>Zmiana &lt;3h (np. 10:00 → 12:30)? → NIE = tylko zwrot lub zmiana, bez odszkodowania</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Wybierz opcję:</strong>
                  <p className="text-gray-700 mt-1">
                    <strong>A) Nowy termin Ci odpowiada?</strong> Zaakceptuj zmianę (bezpłatnie) + żądaj odszkodowania (jeśli znacząca).<br/>
                    <strong>B) Nowy termin NIE odpowiada?</strong> Żądaj zwrotu biletu + odszkodowania (jeśli znacząca).
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-green-900">Skontaktuj się z LOT:</strong>
                  <p className="text-gray-700 mt-1">
                    Email: customer.relations@lot.pl<br/>
                    Formularz: <a href="https://www.lot.com/pl/pl/customer-service/contact-us" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.lot.com → Kontakt</a><br/>
                    Treść: <em>"Żądam [zwrotu biletu / zmiany na lot [numer] / odszkodowania €[kwota]] z powodu zmiany rozkładu lotu [numer] z dnia [data]."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <div>
                  <strong className="text-green-900">Dokumentuj komunikację:</strong>
                  <p className="text-gray-700 mt-1">
                    Zapisz: email LOT o zmianie, Twoją odpowiedź, potwierdzenie zwrotu/zmiany. To dowody w reklamacji o odszkodowanie.
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
                1. LOT zmienił godzinę lotu o 2 godziny — czy przysługuje mi odszkodowanie?
              </h3>
              <p className="text-gray-700">
                <strong>Prawdopodobnie nie.</strong> Zmiana &lt;3h nie jest traktowana jak odwołanie lotu. Ale masz prawo do bezpłatnej zmiany na inny lot LOT lub pełnego zwrotu biletu (bez kar).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. LOT zmienił datę lotu (inny dzień) — czy to odwołanie?
              </h3>
              <p className="text-gray-700">
                <strong>Tak!</strong> Zmiana daty = jednoznacznie odwołanie lotu. Przysługuje Ci odszkodowanie €250-600 (zależnie od odległości) + zwrot biletu lub lot zastępczy.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. LOT dodał przesiadkę (miał być direct, teraz via VIE) — mam prawo do odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>Tak!</strong> Dodatkowa przesiadka to znacząca zmiana charakteru podróży. Przysługuje Ci odszkodowanie €250-600 + zwrot biletu lub akceptacja nowej trasy.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. LOT zmienił rozkład ale poinformował mnie 2 miesiące wcześniej — czy nadal przysługuje odszkodowanie?
              </h3>
              <p className="text-gray-700">
                <strong>Zależy od wielkości zmiany.</strong> Jeśli zmiana ≥3h, inna data, lub dodatkowa przesiadka — TAK, przysługuje odszkodowanie (powiadomienie z wyprzedzeniem nie zwalnia LOT z odpowiedzialności). Jeśli zmiana &lt;3h — tylko zwrot lub zmiana, bez odszkodowania.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Czy mogę dostać zarówno zwrot biletu jak i odszkodowanie?
              </h3>
              <p className="text-gray-700">
                <strong>Tak!</strong> Jeśli zmiana jest znacząca (≥3h, inna data), masz prawo do: (1) zwrotu pełnej ceny biletu + (2) odszkodowania €250-600. To są OSOBNE prawa, nie "albo-albo".
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. LOT oferuje mi voucher na przyszły lot zamiast zwrotu — czy muszę zaakceptować?
              </h3>
              <p className="text-gray-700">
                <strong>Nie!</strong> Masz prawo do zwrotu w GOTÓWCE (przelew na konto), nie w voucherze. LOT nie może zmusić Cię do akceptacji vouchera.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Ile czasu mam na złożenie reklamacji po zmianie rozkładu?
              </h3>
              <p className="text-gray-700">
                <strong>3 lata od daty ORYGINALNEGO lotu</strong> (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym szybciej otrzymasz zwrot/odszkodowanie.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Co jeśli LOT odmówi odszkodowania twierdząc że "to była tylko mała zmiana"?
              </h3>
              <p className="text-gray-700">
                Odwołaj się do ULC (Urząd Lotnictwa Cywilnego) lub skorzystaj z pomocy <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ekspertów ClaimWinger</a>. Jeśli zmiana ≥3h lub inna data — to ODWOŁANIE według TSUE, LOT musi zapłacić.
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
                  "name": "LOT zmienił godzinę lotu o 2 godziny — czy przysługuje mi odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Prawdopodobnie nie. Zmiana <3h nie jest traktowana jak odwołanie lotu. Ale masz prawo do bezpłatnej zmiany na inny lot LOT lub pełnego zwrotu biletu (bez kar)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "LOT zmienił datę lotu (inny dzień) — czy to odwołanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak! Zmiana daty = jednoznacznie odwołanie lotu. Przysługuje Ci odszkodowanie €250-600 (zależnie od odległości) + zwrot biletu lub lot zastępczy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "LOT dodał przesiadkę (miał być direct, teraz via VIE) — mam prawo do odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak! Dodatkowa przesiadka to znacząca zmiana charakteru podróży. Przysługuje Ci odszkodowanie €250-600 + zwrot biletu lub akceptacja nowej trasy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "LOT zmienił rozkład ale poinformował mnie 2 miesiące wcześniej — czy nadal przysługuje odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zależy od wielkości zmiany. Jeśli zmiana ≥3h, inna data, lub dodatkowa przesiadka — TAK, przysługuje odszkodowanie (powiadomienie z wyprzedzeniem nie zwalnia LOT z odpowiedzialności). Jeśli zmiana <3h — tylko zwrot lub zmiana, bez odszkodowania."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę dostać zarówno zwrot biletu jak i odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak! Jeśli zmiana jest znacząca (≥3h, inna data), masz prawo do: (1) zwrotu pełnej ceny biletu + (2) odszkodowania €250-600. To są OSOBNE prawa, nie 'albo-albo'."
                  }
                },
                {
                  "@type": "Question",
                  "name": "LOT oferuje mi voucher na przyszły lot zamiast zwrotu — czy muszę zaakceptować?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie! Masz prawo do zwrotu w GOTÓWCE (przelew na konto), nie w voucherze. LOT nie może zmusić Cię do akceptacji vouchera."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ile czasu mam na złożenie reklamacji po zmianie rozkładu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 lata od daty ORYGINALNEGO lotu (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym szybciej otrzymasz zwrot/odszkodowanie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli LOT odmówi odszkodowania twierdząc że 'to była tylko mała zmiana'?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Odwołaj się do ULC (Urząd Lotnictwa Cywilnego) lub skorzystaj z pomocy ekspertów ClaimWinger. Jeśli zmiana ≥3h lub inna data — to ODWOŁANIE według TSUE, LOT musi zapłacić."
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
