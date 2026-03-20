import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotCodeshareWithLufthansa() {
  return (
    <Layout>
      <SEO
        title="LOT codeshare z Lufthansą — kto płaci odszkodowanie za opóźniony lot?"
        description="Twój lot LOT miał kod Lufthansy (LH)? Sprawdź kto odpowiada za odszkodowanie €250-600 przy codeshare i jak złożyć skuteczną reklamację."
        url="https://lotproblem.pl/blog/lot-codeshare-lufthansa-kto-placi"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Codeshare z Lufthansą: Kto Płaci Odszkodowanie?
          </h1>
          <p className="text-xl text-gray-600">
            Kupiłeś bilet LOT z numerem lotu LH (Lufthansa) i masz opóźnienie/odwołanie? Sprawdź kto jest odpowiedzialny za odszkodowanie €250-600 w lotach codeshare LOT–Lufthansa i jak uniknąć "ping-ponga" między liniami.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ✈️ Lot codeshare LOT–Lufthansa opóźniony/odwołany?
          </p>
          <p className="text-blue-800 mb-4">
            Odpowiada WYKONUJĄCY PRZEWOŹNIK (operating carrier) — linia, której samolot faktycznie wykonał lot. Nie ma znaczenia czyj numer lotu był na bilecie. Jeśli LOT odmawia twierdząc "to był lot Lufthansy" — to błąd!
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
            Czym jest lot codeshare LOT–Lufthansa?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Codeshare (współdzielenie kodów)</strong> to umowa między liniami lotniczymi, która pozwala dwóm lub więcej przewoźnikom sprzedawać miejsca na tym samym locie pod różnymi numerami. Dla LOT i Lufthansy (obie w aliansu Star Alliance) oznacza to:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Przykład codeshare LOT–Lufthansa:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Ten sam lot fizyczny:</strong> Samolot LOT leci WAW → FRA</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Dwa numery lotu:</strong> LO 347 (LOT) + LH 1614 (Lufthansa)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Różne bilety:</strong> Możesz kupić bilet na lot.com (LO 347) lub lufthansa.com (LH 1614)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>WYKONAWCA:</strong> LOT Polish Airlines (samolot LOT, załoga LOT)</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Kluczowa różnica: Marketing vs Operating Carrier
            </p>
            <p className="text-yellow-800 mb-4">
              <strong>Marketing Carrier (przewoźnik sprzedający):</strong> Linia, której logo/numer lotu jest na bilecie (np. Lufthansa LH 1614).
            </p>
            <p className="text-yellow-800 mb-4">
              <strong>Operating Carrier (przewoźnik wykonujący):</strong> Linia, której samolot FAKTYCZNIE leci (np. LOT).
            </p>
            <p className="text-yellow-900 font-semibold">
              → Za odszkodowanie odpowiada OPERATING CARRIER! Nie ma znaczenia gdzie kupiłeś bilet.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kto płaci odszkodowanie w codeshare LOT–Lufthansa?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Zgodnie z <strong>rozporządzeniem WE 261/2004 art. 3 ust. 5</strong>:
          </p>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-6 bg-green-50 p-4">
            "Wykonujący przewoźnik ponosi odpowiedzialność za loty wykonywane na podstawie umowy o wet lease lub innych podobnych umów."
          </blockquote>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Zasada odpowiedzialności:</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-900 mb-2">Scenariusz 1: Lot wykonywany przez LOT</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Bilet: Lufthansa LH 1614 WAW → FRA</li>
                  <li>Samolot: LOT (SP-LWB Embraer 195)</li>
                  <li><strong className="text-green-600">Odpowiedzialny: LOT Polish Airlines</strong></li>
                  <li>Reklamację składasz do: LOT</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-900 mb-2">Scenariusz 2: Lot wykonywany przez Lufthansę</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Bilet: LOT LO 347 WAW → FRA</li>
                  <li>Samolot: Lufthansa (D-AIZR Airbus A320)</li>
                  <li><strong className="text-green-600">Odpowiedzialny: Lufthansa</strong></li>
                  <li>Reklamację składasz do: Lufthansa</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak rozpoznać kto wykonał lot codeshare?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Sprawdź <strong>boarding pass (kartę pokładową)</strong> — tam zawsze widnieje przewoźnik wykonujący:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Numer lotu na boarding pass</th>
                  <th className="py-3 px-4 text-left">Przewoźnik wykonujący</th>
                  <th className="py-3 px-4 text-left">Kto płaci odszkodowanie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-semibold">LO 347 (LOT)</td>
                  <td className="py-3 px-4">LOT Polish Airlines</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">LOT</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 font-semibold">LH 1614 (Lufthansa)</td>
                  <td className="py-3 px-4">Lufthansa</td>
                  <td className="py-3 px-4 text-green-600 font-semibold">Lufthansa</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">LO/LH (codeshare na BP)</td>
                  <td className="py-3 px-4 text-gray-600">Sprawdź rejestrację samolotu (SP-xxx = LOT, D-xxx = Lufthansa)</td>
                  <td className="py-3 px-4 text-blue-600">Operating carrier</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">💡 Jak sprawdzić operating carrier:</h3>
            <ol className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">1.</span>
                <span>Sprawdź <strong>boarding pass</strong> — numer lotu pokazuje wykonującego przewoźnika</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">2.</span>
                <span>Sprawdź <strong>rejestrację samolotu</strong> (SP-xxx = LOT, D-xxx = Lufthansa)</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">3.</span>
                <span>Użyj FlightRadar24 — wpisz numer lotu i sprawdź który samolot leciał</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-600 mr-3">4.</span>
                <span>Zapytaj obsługę naziemną/załogę — mogą potwierdzić operating carrier</span>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Częste problemy z codeshare i jak je rozwiązać
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Problem 1: LOT odmawia twierdząc "to był lot Lufthansy"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Kupiłeś bilet na lot.com (LO 347), ale lot wykonywała Lufthansa (codeshare). LOT odmawia odszkodowania mówiąc "to był lot Lufthansy".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Rozwiązanie:</strong> Złóż reklamację do Lufthansy (operating carrier). Dołącz boarding pass pokazujący LH jako wykonawcę + bilet pokazujący zakup na lot.com.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                ✅ Lufthansa MUSI rozpatrzyć reklamację — art. 3 ust. 5 WE 261 nie pozwala odmówić ze względu na marketing carrier.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Problem 2: Lufthansa odmawia twierdząc "kupiłeś bilet u LOT"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Kupiłeś bilet na lufthansa.com (LH 1614), ale lot wykonywała LOT (codeshare). Lufthansa odmawia mówiąc "to lot LOT".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Rozwiązanie:</strong> Złóż reklamację do LOT (operating carrier). Powołaj się na art. 3 ust. 5 WE 261 i dołącz boarding pass + bilet.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                ✅ LOT MUSI zapłacić — niezależnie od tego gdzie kupiłeś bilet.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Problem 3: Ping-pong między LOT a Lufthansą</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> LOT mówi "to Lufthansa", Lufthansa mówi "to LOT" — nikt nie chce płacić.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Rozwiązanie:</strong> Zgłoś sprawę do <a href="https://www.ulc.gov.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener">ULC (Urząd Lotnictwa Cywilnego)</a> lub skorzystaj z <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">pomocy ekspertów ClaimWinger</a>, którzy zajmą się walką z obiema liniami.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                ✅ ULC/ClaimWinger szybko ustali kto był operating carrier i wymusi wypłatę.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Masz problem z codeshare LOT–Lufthansa?
            </p>
            <p className="text-blue-800 mb-4">
              Eksperci ClaimWinger pomogą ustalić kto jest odpowiedzialny i wyegzekwują odszkodowanie €250-600. Prowizja TYLKO przy sukcesie (~25-30%). Jeśli nie wygrasz — nie płacisz.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatne zgłoszenie →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ile wynosi odszkodowanie za lot codeshare?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Odszkodowanie za lot codeshare LOT–Lufthansa jest TAKIE SAMO jak za lot bez codeshare:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Odległość lotu</th>
                  <th className="py-3 px-4 text-left">Opóźnienie ≥3h</th>
                  <th className="py-3 px-4 text-left">Odwołanie</th>
                  <th className="py-3 px-4 text-left">Przykłady tras LOT–LH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4">≤ 1500 km</td>
                  <td className="py-3 px-4 font-semibold text-green-600">250 €</td>
                  <td className="py-3 px-4 font-semibold text-green-600">250 €</td>
                  <td className="py-3 px-4 text-gray-600">WAW–FRA, WAW–MUC, WAW–VIE</td>
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

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak złożyć reklamację za lot codeshare LOT–Lufthansa?
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">Ustal operating carrier:</strong>
                  <p className="text-gray-700 mt-1">
                    Sprawdź boarding pass + rejestrację samolotu (SP-xxx = LOT, D-xxx = Lufthansa). Możesz też użyć FlightRadar24.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">Zbierz dokumenty:</strong>
                  <ul className="list-disc list-inside ml-4 mt-2 text-gray-700 space-y-1">
                    <li>Booking confirmation (PNR)</li>
                    <li>Boarding pass (pokazujący operating carrier)</li>
                    <li>Potwierdzenie opóźnienia (FlightRadar24, ekran lotniska)</li>
                    <li>Bilet (pokazujący marketing carrier)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Oblicz odszkodowanie:</strong>
                  <p className="text-gray-700 mt-1">
                    ≤1500 km: 250 € | 1500-3500 km: 400 € | &gt;3500 km: 600 €
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-green-900">Wyślij reklamację do operating carrier:</strong>
                  <p className="text-gray-700 mt-1">
                    <strong>LOT:</strong> customer.relations@lot.pl<br/>
                    <strong>Lufthansa:</strong> <a href="https://www.lufthansa.com/contact" className="text-blue-600 hover:underline" target="_blank" rel="noopener">lufthansa.com/contact</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    Treść: <em>"Żądam odszkodowania €[kwota] za opóźniony/odwołany lot [numer] z dnia [data] zgodnie z WE 261/2004 art. 3 ust. 5. Lot wykonywany przez [operating carrier]. Załączam boarding pass pokazujący wykonawcę + bilet."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <div>
                  <strong className="text-green-900">Czekaj 30 dni na odpowiedź</strong>
                  <p className="text-gray-700 mt-1">
                    Operating carrier ma 30 dni na rozpatrzenie reklamacji.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                <div>
                  <strong className="text-green-900">Jeśli odmówią/ignorują:</strong>
                  <p className="text-gray-700 mt-1">
                    Zgłoś do ULC lub skorzystaj z <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ClaimWinger</a>.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przykłady rzeczywistych spraw codeshare
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 1: Bilet Lufthansa LH 1614, lot wykonywany przez LOT (250 €)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer kupił bilet na lufthansa.com (LH 1614 WAW→FRA). Lot opóźniony o 4h. Boarding pass pokazywał LO 347 (LOT).
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer złożył do Lufthansy. Lufthansa odmówiła: "To lot LOT".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź pasażera:</strong> Ponowna reklamacja do LOT (operating carrier) z powołaniem na art. 3 ust. 5 WE 261 + boarding pass.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> LOT wypłaciło 250 € w 14 dni.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 2: Bilet LOT LO 4302, lot wykonywany przez Lufthansę (250 €)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer kupił bilet na lot.com (LO 4302 BER→WAW). Lot odwołany. Boarding pass pokazywał LH 1632 (Lufthansa).
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer złożył do LOT. LOT odmówiło: "To lot Lufthansy".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odpowiedź pasażera:</strong> Zgłoszenie do ULC. ULC nakazało Lufthansie wypłatę (operating carrier).
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> Lufthansa wypłaciła 250 € + odsetki (60 zł) w 30 dni.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 3: Ping-pong między LOT a Lufthansą (400 € przez ClaimWinger)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Pasażer kupił bilet codeshare (nie pamiętał kto wykonywał lot). LOT mówiło "Lufthansa", Lufthansa mówiła "LOT".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Reklamacja:</strong> Pasażer zgłosił do ClaimWinger. ClaimWinger ustalił operating carrier (LOT) na podstawie FlightRadar24 + danych PNR.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> ClaimWinger wyegzekwowało 400 € od LOT w 45 dni. Pasażer otrzymał 280 € (po prowizji).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pytania i odpowiedzi (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Kto płaci odszkodowanie w locie codeshare LOT–Lufthansa?
              </h3>
              <p className="text-gray-700">
                <strong>Operating carrier (przewoźnik wykonujący)</strong> — linia, której samolot faktycznie leciał. Sprawdź boarding pass i rejestrację samolotu (SP-xxx = LOT, D-xxx = Lufthansa).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Czy miejsce zakupu biletu (lot.com vs lufthansa.com) ma znaczenie?
              </h3>
              <p className="text-gray-700">
                <strong>NIE!</strong> Marketing carrier (sprzedawca biletu) nie ma wpływu na odpowiedzialność. Liczy się tylko kto WYKONAŁ lot (operating carrier).
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Co jeśli LOT i Lufthansa wzajemnie się obwiniają?
              </h3>
              <p className="text-gray-700">
                Zgłoś sprawę do ULC (Urząd Lotnictwa Cywilnego) lub skorzystaj z <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">pomocy ClaimWinger</a>. Oni szybko ustalą operating carrier i wymuszą wypłatę.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Czy codeshare wpływa na wysokość odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>NIE!</strong> Odszkodowanie €250-600 jest takie samo niezależnie czy lot jest codeshare czy nie. Liczy się tylko odległość i czas opóźnienia.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. Jak sprawdzić kto był operating carrier po fakcie?
              </h3>
              <p className="text-gray-700">
                Sprawdź: (1) boarding pass — numer lotu pokazuje wykonawcę, (2) FlightRadar24 — wpisz numer lotu i datę, (3) rejestracja samolotu z PNR/booking confirmation.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Czy mogę złożyć reklamację do obu linii jednocześnie?
              </h3>
              <p className="text-gray-700">
                <strong>TAK</strong>, ale niewskazane — może wydłużyć proces. Lepiej ustalić operating carrier i złożyć reklamację tylko do niego.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Co jeśli nie mam boarding pass i nie pamiętam kto wykonywał lot?
              </h3>
              <p className="text-gray-700">
                Użyj FlightRadar24 (wpisz numer lotu + datę) lub skontaktuj się z <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ClaimWinger</a> — oni mają dostęp do baz danych PNR i ustalą operating carrier.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Ile czasu mam na złożenie reklamacji za lot codeshare?
              </h3>
              <p className="text-gray-700">
                <strong>3 lata od daty lotu</strong> (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej ustalić operating carrier.
              </p>
            </div>
          </div>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            💡 Problem z codeshare LOT–Lufthansa?
          </p>
          <p className="text-blue-800 mb-4">
            Eksperci ClaimWinger ustalą kto jest odpowiedzialny i wyegzekwują odszkodowanie €250-600. Prowizja TYLKO przy sukcesie (~25-30%). Jeśli nie wygrasz — nie płacisz.
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
                  "name": "Kto płaci odszkodowanie w locie codeshare LOT–Lufthansa?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Operating carrier (przewoźnik wykonujący) — linia, której samolot faktycznie leciał. Sprawdź boarding pass i rejestrację samolotu (SP-xxx = LOT, D-xxx = Lufthansa)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy miejsce zakupu biletu (lot.com vs lufthansa.com) ma znaczenie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! Marketing carrier (sprzedawca biletu) nie ma wpływu na odpowiedzialność. Liczy się tylko kto WYKONAŁ lot (operating carrier)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli LOT i Lufthansa wzajemnie się obwiniają?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Zgłoś sprawę do ULC (Urząd Lotnictwa Cywilnego) lub skorzystaj z pomocy ClaimWinger. Oni szybko ustalą operating carrier i wymuszą wypłatę."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy codeshare wpływa na wysokość odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! Odszkodowanie €250-600 jest takie samo niezależnie czy lot jest codeshare czy nie. Liczy się tylko odległość i czas opóźnienia."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak sprawdzić kto był operating carrier po fakcie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sprawdź: (1) boarding pass — numer lotu pokazuje wykonawcę, (2) FlightRadar24 — wpisz numer lotu i datę, (3) rejestracja samolotu z PNR/booking confirmation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy mogę złożyć reklamację do obu linii jednocześnie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK, ale niewskazane — może wydłużyć proces. Lepiej ustalić operating carrier i złożyć reklamację tylko do niego."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli nie mam boarding pass i nie pamiętam kto wykonywał lot?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Użyj FlightRadar24 (wpisz numer lotu + datę) lub skontaktuj się z ClaimWinger — oni mają dostęp do baz danych PNR i ustalą operating carrier."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Ile czasu mam na złożenie reklamacji za lot codeshare?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 lata od daty lotu (przedawnienie w Polsce). Ale nie odkładaj — im wcześniej złożysz reklamację, tym łatwiej ustalić operating carrier."
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
