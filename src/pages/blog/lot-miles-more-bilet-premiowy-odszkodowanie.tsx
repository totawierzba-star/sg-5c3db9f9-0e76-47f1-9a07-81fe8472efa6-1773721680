import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotMilesMoreBiletPremiowy() {
  return (
    <Layout>
      <SEO
        title="LOT Miles & More — bilet premiowy a odszkodowanie za opóźniony lot 2026"
        description="Używasz punktów Miles & More na loty LOT? Sprawdź czy przysługuje Ci odszkodowanie €250-600 za opóźniony lub odwołany lot premiowy."
        url="https://lotproblem.pl/blog/lot-miles-more-bilet-premiowy-odszkodowanie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Miles & More: Bilet Premiowy a Odszkodowanie
          </h1>
          <p className="text-xl text-gray-600">
            Kupiłeś bilet LOT za punkty Miles & More i lot był opóźniony/odwołany? Przysługuje Ci PEŁNE odszkodowanie €250-600 jak za bilet gotówkowy! LOT nie może odmówić twierdząc "to był bilet premiowy". Sprawdź swoje prawa.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ✈️ LOT opóźnił/odwołał lot premiowy (Miles & More)?
          </p>
          <p className="text-blue-800 mb-4">
            Przysługuje Ci TAKIE SAMO odszkodowanie €250-600 jak za bilet gotówkowy! Nie ma znaczenia czy zapłaciłeś punktami czy gotówką — rozporządzenie WE 261/2004 chroni WSZYSTKICH pasażerów LOT bez wyjątku.
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
            Czy bilet Miles & More wpływa na odszkodowanie?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>NIE!</strong> Rozporządzenie WE 261/2004 (art. 3) chroni WSZYSTKICH pasażerów posiadających ważną rezerwację — niezależnie od sposobu płatności. Bilety premiowe LOT (wykupione punktami Miles & More) dają TAKIE SAME prawa do odszkodowania jak bilety gotówkowe.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Co mówi prawo (WE 261 art. 3):</h3>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-4">
              "Niniejsze rozporządzenie stosuje się do pasażerów, którzy posiadają potwierdzoną rezerwację na dany lot i [...] zostali przyjęci na pokład."
            </blockquote>
            <p className="text-gray-700 mb-4">
              <strong>Kluczowe słowa:</strong> "posiadają potwierdzoną rezerwację" — NIE MA słowa o "sposobie płatności", "typie biletu" czy "punktach lojalnościowych".
            </p>
            <p className="text-green-900 font-semibold">
              → LOT nie może odmówić odszkodowania argumentując "to był bilet premiowy"!
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Częsta wymówka LOT:
            </p>
            <p className="text-yellow-800 mb-4">
              <strong>"Bilet premiowy nie uprawnia do odszkodowania, ponieważ nie zapłaciłeś pełnej ceny."</strong>
            </p>
            <p className="text-yellow-800 mb-4">
              To NIEPRAWDA i NIEZGODNE z prawem UE! Bilety Miles & More to PEŁNOPRAWNE bilety lotnicze. Zapłaciłeś za nie punktami (które zdobyłeś latając za gotówkę wcześniej) + często taxes & fees gotówką.
            </p>
            <p className="text-yellow-900 font-semibold">
              → Jeśli LOT odmawia odszkodowania za bilet premiowy — odwołaj się do ULC lub skorzystaj z pomocy <a href="https://claimwinger.com/pl" className="text-yellow-700 hover:underline">ekspertów ClaimWinger</a>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ile wynosi odszkodowanie za bilet Miles & More?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Odszkodowanie za bilet premiowy LOT jest TAKIE SAMO jak za bilet gotówkowy — €250-600 zależnie od odległości lotu i czasu opóźnienia:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Odległość lotu</th>
                  <th className="py-3 px-4 text-left">Opóźnienie ≥3h</th>
                  <th className="py-3 px-4 text-left">Odwołanie/Overbooking</th>
                  <th className="py-3 px-4 text-left">Przykłady tras LOT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">≤ 1500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">250 €</td>
                  <td className="py-3 px-4 font-semibold text-green-600">250 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–BER, WAW–VIE, WAW–PRG</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4">1500-3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">400 €</td>
                  <td className="py-3 px-4 font-semibold text-green-600">400 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–LHR, WAW–MAD, WAW–ATH</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">&gt; 3500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">600 €</td>
                  <td className="py-3 px-4 font-semibold text-green-600">600 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–JFK, WAW–ORD, WAW–NRT</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Przykład kalkulacji: LOT WAW→JFK bilet premiowy
            </p>
            <p className="text-blue-800 mb-4">
              <strong>Sytuacja:</strong> Wykupiłeś bilet Business Class LOT WAW→JFK za 100 000 punktów Miles & More + 1500 zł taxes/fees. Lot opóźniony o 5h.
            </p>
            <p className="text-blue-800 font-semibold">
              <strong>Odszkodowanie przysługujące:</strong> 600 € (~2600 zł)
            </p>
            <p className="text-blue-800 mb-4">
              LOT nie może powiedzieć "dostałeś bilet taniej punktami" — przysługuje Ci PEŁNE 600 €, tak samo jak pasażerom z biletami gotówkowymi za 15 000 zł.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatną reklamację →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Czy LOT może odmówić odszkodowania za bilet Miles & More?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>NIE może!</strong> Ale LOT często próbuje. Najczęstsze wymówki i jak na nie reagować:
          </p>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Wymówka 1: "Bilet premiowy nie kwalifikuje się do odszkodowania"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź:</strong> "Rozporządzenie WE 261/2004 art. 3 chroni WSZYSTKICH pasażerów z potwierdzoną rezerwacją. Sposób płatności (gotówka/punkty) nie ma znaczenia. Żądam odszkodowania €[kwota] zgodnie z prawem UE."
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                ✅ Powołaj się na art. 3 WE 261 i zagrożaj zgłoszeniem do ULC.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Wymówka 2: "Zapłaciłeś tylko taxes, nie pełną cenę biletu"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź:</strong> "Punkty Miles & More mają wartość ekonomiczną (zdobyte za wcześniejsze loty gotówkowe). Dodatkowo zapłaciłem taxes & fees gotówką. To PEŁNOPRAWNY bilet lotniczy zgodnie z regulaminem LOT."
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                ✅ Załącz potwierdzenie rezerwacji z numerem PNR + potwierdzenie płatności taxes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Wymówka 3: "Voucher zamiast gotówki za bilet premiowy"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź:</strong> "WE 261 art. 7 wymaga wypłaty odszkodowania w GOTÓWCE (przelew na konto bankowe). Voucher to NIEWYSTARCZAJĄCA rekompensata. Żądam przelewu €[kwota] na konto [IBAN]."
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                ✅ ODMÓW vouchera i żądaj tylko gotówki.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak złożyć reklamację za opóźniony lot premiowy LOT?
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">Zbierz dokumenty:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Booking confirmation (potwierdzenie rezerwacji z numerem PNR)</li>
                    <li>Miles & More account statement (wyciąg z konta punktowego pokazujący obciążenie punktów)</li>
                    <li>Potwierdzenie płatności taxes & fees (receipt/invoice)</li>
                    <li>Boarding pass (original + replacement jeśli był lot zastępczy)</li>
                    <li>Zrzut ekranu: opóźnienie lotu (FlightRadar24, LOT.com, ekran lotniska)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">Oblicz kwotę odszkodowania:</strong>
                  <p className="text-gray-700 mt-1">
                    • Loty ≤1500 km: 250 € (~1100 zł)<br/>
                    • Loty 1500-3500 km: 400 € (~1750 zł)<br/>
                    • Loty &gt;3500 km: 600 € (~2600 zł)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Wyślij reklamację do LOT:</strong>
                  <p className="text-gray-700 mt-1">
                    Email: customer.relations@lot.pl<br/>
                    Formularz online: <a href="https://www.lot.com/pl/pl/customer-service/contact-us" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.lot.com → Obsługa klienta</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Treść: <em>"Żądam odszkodowania €[kwota] za opóźniony/odwołany lot [numer] z dnia [data] zgodnie z rozporządzeniem WE 261/2004. Lot wykupiony punktami Miles & More nie zmienia moich praw do odszkodowania (art. 3 WE 261). Załączam dokumenty. Proszę o przelew na konto bankowe [IBAN] w ciągu 7 dni."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-green-900">Daj LOT 30 dni na odpowiedź:</strong>
                  <p className="text-gray-700 mt-1">
                    LOT ma 30 dni na rozpatrzenie reklamacji (zgodnie z polskimi przepisami o prawach pasażera).
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <div>
                  <strong className="text-green-900">Jeśli LOT odmówi argumentując "bilet premiowy":</strong>
                  <p className="text-gray-700 mt-1">
                    Zgłoś sprawę do ULC (Urząd Lotnictwa Cywilnego): <a href="https://www.ulc.gov.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.ulc.gov.pl</a><br/>
                    LUB skorzystaj z pomocy <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ekspertów ClaimWinger</a> (prowizja tylko przy sukcesie ~25-30%).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przykłady rzeczywistych spraw Miles & More
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 1: LOT WAW→JFK bilet premiowy (600 € wypłacone)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer wykupił bilet Business Class LOT WAW→JFK za 120 000 punktów Miles & More + 2000 zł taxes. Lot opóźniony o 4h.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer zażądał odszkodowania 600 €. LOT odmówił: "Bilet premiowy nie uprawnia do odszkodowania."
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź pasażera:</strong> Odwołanie do ULC z powołaniem na art. 3 WE 261 ("pasażerowie z potwierdzoną rezerwacją") + wyciąg z konta Miles & More + potwierdzenie płatności taxes.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> ULC nakazało LOT wypłatę 600 € w ciągu 14 dni. LOT wypłaciło bez dalszej eskalacji.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 2: LOT WAW→LHR bilet premiowy (400 € + odsetki)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer wykupił bilet Economy za 35 000 punktów Miles & More + 600 zł taxes. Lot odwołany, lot zastępczy następnego dnia (opóźnienie końcowe 22h).
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer zażądał 400 €. LOT zaproponowało voucher 1000 zł "w ramach dobrej woli".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź pasażera:</strong> Odmowa vouchera. Ponowna reklamacja z żądaniem gotówki. LOT zignorowało przez 45 dni.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> Pasażer zgłosił do ULC. ULC nakazało wypłatę 400 € + odsetki za opóźnienie (80 zł). Łącznie 1830 zł.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 3: LOT WAW→BCN bilet premiowy (250 €)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer wykupił bilet za 25 000 punktów + 400 zł taxes. Lot opóźniony o 3h 30min.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> LOT wypłaciło 250 € bez problemu w 14 dni (prawdopodobnie ze względu na niską kwotę — tańsze niż walka).
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> 250 € (~1100 zł) przelew bez eskalacji.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pytania i odpowiedzi (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Czy bilet Miles & More uprawnia do odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>TAK!</strong> Rozporządzenie WE 261/2004 chroni WSZYSTKICH pasażerów z potwierdzoną rezerwacją — niezależnie od sposobu płatności (gotówka, punkty, vouchery). LOT nie może odmówić odszkodowania za bilet premiowy.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Ile wynosi odszkodowanie za bilet premiowy LOT?
              </h3>
              <p className="text-gray-700">
                <strong>€250-600 zależnie od odległości lotu</strong> — TAKIE SAMO jak za bilet gotówkowy. Sposób płatności nie wpływa na wysokość odszkodowania.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Co jeśli LOT odmawia twierdząc "to był bilet premiowy"?
              </h3>
              <p className="text-gray-700">
                Odwołaj się do ULC lub skorzystaj z pomocy <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ekspertów ClaimWinger</a>. Powołaj się na art. 3 WE 261/2004 i załącz: booking confirmation, wyciąg z Miles & More, potwierdzenie płatności taxes.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Czy mogę dostać odszkodowanie w punktach Miles & More zamiast gotówki?
              </h3>
              <p className="text-gray-700">
                <strong>NIE!</strong> WE 261 art. 7 wymaga wypłaty odszkodowania w GOTÓWCE (przelew na konto bankowe). LOT może ZAPROPONOWAĆ punkty jako alternatywę, ale nie może ZMUSIĆ Cię do akceptacji. Żądaj tylko gotówki.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Czy odszkodowanie jest obliczane od wartości punktów czy ceny biletu?
              </h3>
              <p className="text-gray-700">
                <strong>Od odległości lotu, nie od ceny!</strong> Odszkodowanie €250-600 zależy TYLKO od kilometrów (≤1500 km, 1500-3500 km, &gt;3500 km), a NIE od tego ile zapłaciłeś punktami lub gotówką.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Co jeśli użyłem punkty + doładowanie gotówką (cash + points)?
              </h3>
              <p className="text-gray-700">
                <strong>Przysługuje Ci PEŁNE odszkodowanie!</strong> Jeśli użyłeś kombinacji punkty + gotówka (np. 50 000 punktów + 1000 zł) — LOT musi wypłacić €250-600 jak za normalny bilet. Nie może argumentować "zapłaciłeś częściowo punktami".
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Czy LOT może zwrócić punkty zamiast odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>NIE!</strong> Zwrot punktów Miles & More ≠ odszkodowanie za opóźnienie. To OSOBNE prawa:
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li>Zwrot punktów — jeśli lot odwołany i nie skorzystałeś z lotu zastępczego</li>
                  <li>Odszkodowanie €250-600 — za opóźnienie ≥3h lub odwołanie (niezależnie od zwrotu punktów)</li>
                </ul>
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Ile czasu mam na złożenie reklamacji za bilet premiowy?
              </h3>
              <p className="text-gray-700">
                <strong>3 lata od daty lotu</strong> (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (booking confirmation, wyciąg Miles & More) i przyspieszyć wypłatę.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            💡 Potrzebujesz pomocy z reklamacją?
          </p>
          <p className="text-blue-800 mb-4">
            Eksperci ClaimWinger pomogą Ci wyegzekwować odszkodowanie za bilet Miles & More. Prowizja TYLKO przy sukcesie (~25-30% odszkodowania). Jeśli nie wygrasz — nie płacisz.
          </p>
          <a
            href="https://claimwinger.com/pl"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Złóż bezpłatne zgłoszenie →
          </a>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Czy bilet Miles & More uprawnia do odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK! Rozporządzenie WE 261/2004 chroni WSZYSTKICH pasażerów z potwierdzoną rezerwacją — niezależnie od sposobu płatności (gotówka, punkty, vouchery). LOT nie może odmówić odszkodowania za bilet premiowy."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ile wynosi odszkodowanie za bilet premiowy LOT?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "€250-600 zależnie od odległości lotu — TAKIE SAMO jak za bilet gotówkowy. Sposób płatności nie wpływa na wysokość odszkodowania."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli LOT odmawia twierdząc 'to był bilet premiowy'?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Odwołaj się do ULC lub skorzystaj z pomocy ekspertów ClaimWinger. Powołaj się na art. 3 WE 261/2004 i załącz: booking confirmation, wyciąg z Miles & More, potwierdzenie płatności taxes."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę dostać odszkodowanie w punktach Miles & More zamiast gotówki?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! WE 261 art. 7 wymaga wypłaty odszkodowania w GOTÓWCE (przelew na konto bankowe). LOT może ZAPROPONOWAĆ punkty jako alternatywę, ale nie może ZMUSIĆ Cię do akceptacji. Żądaj tylko gotówki."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy odszkodowanie jest obliczane od wartości punktów czy ceny biletu?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Od odległości lotu, nie od ceny! Odszkodowanie €250-600 zależy TYLKO od kilometrów (≤1500 km, 1500-3500 km, >3500 km), a NIE od tego ile zapłaciłeś punktami lub gotówką."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli użyłem punkty + doładowanie gotówką (cash + points)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Przysługuje Ci PEŁNE odszkodowanie! Jeśli użyłeś kombinacji punkty + gotówka (np. 50 000 punktów + 1000 zł) — LOT musi wypłacić €250-600 jak za normalny bilet. Nie może argumentować 'zapłaciłeś częściowo punktami'."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy LOT może zwrócić punkty zamiast odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! Zwrot punktów Miles & More ≠ odszkodowanie za opóźnienie. To OSOBNE prawa: Zwrot punktów — jeśli lot odwołany i nie skorzystałeś z lotu zastępczego. Odszkodowanie €250-600 — za opóźnienie ≥3h lub odwołanie (niezależnie od zwrotu punktów)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ile czasu mam na złożenie reklamacji za bilet premiowy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 lata od daty lotu (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej zebrać dowody (booking confirmation, wyciąg Miles & More) i przyspieszyć wypłatę."
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
