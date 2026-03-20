import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotUsterkaTechniczna() {
  return (
    <Layout>
      <SEO
        title="LOT Usterka techniczna: Nadzwyczajna okoliczność czy nie? 2026"
        description="Czy awaria techniczna samolotu LOT zwalnia z wypłaty odszkodowania? Sprawdź kiedy usterka to nadzwyczajna okoliczność, a kiedy LOT musi zapłacić €250-600."
        url="https://lotproblem.pl/blog/lot-usterka-techniczna-nadzwyczajna-okolicznosc"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Usterka Techniczna: Nadzwyczajna Okoliczność czy Nie?
          </h1>
          <p className="text-xl text-gray-600">
            LOT Polish Airlines często tłumaczy opóźnienia "problemami technicznymi" i odmawia odszkodowania. Sprawdź kiedy mają rację, a kiedy to wymówka – i jak odzyskać nawet 600 € odszkodowania.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ⚠️ LOT odmówił odszkodowania z powodu usterki technicznej?
          </p>
          <p className="text-blue-800 mb-4">
            W 90% przypadków standardowe problemy techniczne NIE są nadzwyczajną okolicznością. LOT odpowiada za utrzymanie floty i musi wypłacić €250-600.
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
            Usterka techniczna według WE 261/2004: Co mówi prawo?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Rozporządzenie WE 261/2004 jasno określa, że linie lotnicze odpowiadają za <strong>utrzymanie swojej floty w odpowiednim stanie technicznym</strong>. Oznacza to, że większość usterek technicznych <strong>NIE jest nadzwyczajną okolicznością</strong> i LOT musi wypłacić odszkodowanie.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Kiedy usterka NIE zwalnia LOT z odszkodowania:</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Typowe awarie eksploatacyjne</strong> – system hydrauliczny, klimatyzacja, drobne usterki elektroniczne</li>
              <li>• <strong>Zaniedbana konserwacja</strong> – problemy wynikające z braku regularnych przeglądów</li>
              <li>• <strong>Znane wcześniej usterki</strong> – awaria która powinna być wykryta podczas standardowej kontroli</li>
              <li>• <strong>Wymiana części eksploatacyjnych</strong> – opony, hamulce, filtry (to normalna część utrzymania)</li>
              <li>• <strong>Problemy z silnikiem</strong> – większość usterek silnikowych to odpowiedzialność LOT</li>
              <li>• <strong>Awaria systemu pokładowego</strong> – entertainment, Wi-Fi, APU (auxiliary power unit)</li>
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-red-900 mb-4">❌ Kiedy usterka MOŻE być nadzwyczajną okolicznością:</h3>
            <ul className="space-y-3 text-gray-800">
              <li>• <strong>Hidden manufacturing defect</strong> – ukryta wada produkcyjna wykryta przez producenta (np. Boeing AD – Airworthiness Directive)</li>
              <li>• <strong>Foreign object damage (FOD)</strong> – uszkodzenie przez obiekt na pasie (śruby, kamienie) poza kontrolą LOT</li>
              <li>• <strong>Bird strike</strong> – uderzenie ptaka w silnik (jeśli rzeczywiście niemożliwe do przewidzenia)</li>
              <li>• <strong>Sabotaż/atak terrorystyczny</strong> – celowe uszkodzenie samolotu przez osoby trzecie</li>
              <li>• <strong>Lightning strike</strong> – uderzenie pioruna powodujące poważne uszkodzenia (jeśli ekstremalne warunki)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Ciężar dowodu leży po stronie LOT
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Według orzecznictwa TSUE (Trybunału Sprawiedliwości Unii Europejskiej), to <strong>linie lotnicze muszą udowodnić</strong>, że usterka była nadzwyczajną okolicznością. Nie wystarczy ogólne stwierdzenie "problemy techniczne" – LOT musi przedstawić:
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4">📋 Dokumentacja wymagana od LOT:</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-800">
              <li><strong>Raport techniczny</strong> – szczegółowy opis usterki z danymi technicznymi</li>
              <li><strong>Dowody regularnej konserwacji</strong> – potwierdzenie przeglądów zgodnie z zaleceniami producenta</li>
              <li><strong>Certyfikaty techniczne</strong> – dokumenty potwierdzające że samolot był w pełni sprawny przed lotem</li>
              <li><strong>Oświadczenie producenta</strong> – jeśli to wada ukryta, musi być potwierdzona przez Boeing/Embraer/producenta</li>
              <li><strong>Raport zdarzenia</strong> – jeśli FOD/bird strike, raport z lotniska potwierdzający incydent</li>
            </ol>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              💡 Ważne!
            </p>
            <p className="text-yellow-800">
              Jeśli LOT odmawia odszkodowania z powodu "usterki technicznej" bez przedstawienia szczegółowej dokumentacji – <strong>masz pełne prawo do odwołania</strong>. Zwykłe stwierdzenie "problemy techniczne poza naszą kontrolą" to <strong>nie wystarczający dowód</strong>.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Najczęstsze wymówki LOT: Jak je obalić?
          </h2>

          <div className="space-y-6 mb-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">1. "Nieoczekiwana awaria techniczna poza naszą kontrolą"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Twoja odpowiedź:</strong> Żądaj raportu technicznego z dokładnym opisem usterki. Jeśli to standardowa awaria (np. system hydrauliczny, APU, klimatyzacja) – LOT odpowiada za konserwację.
              </p>
              <p className="text-gray-700">
                <strong>Dowód:</strong> Wyrok TSUE C-549/07 (Wallentin-Hermann) – "awaria techniczna nie jest nadzwyczajną okolicznością, chyba że wynika z ukrytej wady produkcyjnej".
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">2. "Konieczność wymiany części – nie da się przewidzieć"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Twoja odpowiedź:</strong> Części eksploatacyjne podlegają planowanej wymianie zgodnie z harmonogramem konserwacji. Jeśli LOT nie wymieniło części na czas – to ich zaniedbanie.
              </p>
              <p className="text-gray-700">
                <strong>Przykład:</strong> Wymiana opon, hamulców, filtrów – to normalna część utrzymania floty, nie nadzwyczajna okoliczność.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">3. "Problemy z silnikiem wykryte podczas kontroli przedlotowej"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Twoja odpowiedź:</strong> Kontrola przedlotowa to standardowa procedura. Jeśli usterka została wykryta wtedy – oznacza że powinna być wykryta wcześniej podczas regularnej konserwacji.
              </p>
              <p className="text-gray-700">
                <strong>Wniosek:</strong> To dowód zaniedbania w utrzymaniu samolotu = odpowiedzialność LOT.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">4. "Bird strike – uderzenie ptaka w silnik"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Twoja odpowiedź:</strong> Żądaj raportu z lotniska potwierdzającego incydent. Bird strike jest nadzwyczajną okolicznością TYLKO jeśli:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                <li>Incydent został oficjalnie zgłoszony (raport ICAO)</li>
                <li>Uszkodzenie było na tyle poważne, że uniemożliwiało lot</li>
                <li>Było niemożliwe do przewidzenia (nie standardowe zagrożenie na danym lotnisku)</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold mb-2">5. "Wada ukryta producenta – Boeing/Embraer wydał AD"</h3>
              <p className="text-gray-700 mb-2">
                <strong>Twoja odpowiedź:</strong> To jedyny przypadkiedy usterka MOŻE być nadzwyczajną okolicznością. LOT musi przedstawić:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700 space-y-1">
                <li>Oficjalne Airworthiness Directive (AD) od producenta</li>
                <li>Potwierdzenie że wada była ukryta i nie mogła być wykryta podczas standardowej konserwacji</li>
                <li>Dowód że LOT stosowało się do wszystkich zaleceń producenta</li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przykłady rzeczywistych spraw: Kiedy wygrali pasażerowie?
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 1: Awaria układu hydraulicznego Boeing 787</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Lot LO15 WAW→JFK opóźniony o 7 godzin z powodu awarii układu hydraulicznego. LOT odmówił odszkodowania twierdząc że to "nieoczekiwana usterka poza kontrolą".
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odwołanie:</strong> Pasażer zgłosił sprawę do ULC. Ekspertyza wykazała że usterka wynikała z zaniedbań w konserwacji – części nie zostały wymienione zgodnie z harmonogramem producenta.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> LOT wypłacił 600 € + odsetki za opóźnienie płatności.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 2: Problemy z APU (Auxiliary Power Unit)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Lot LO331 WAW→BRU opóźniony o 5 godzin. LOT twierdził że awaria APU to nadzwyczajna okoliczność techniczna.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odwołanie:</strong> Pasażer zażądał raportu technicznego. Okazało się że APU miało zaległe przeglądy i LOT wiedziało o problemach wcześniej.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> ULC nakazało wypłatę 400 € odszkodowania.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Sprawa 3: Bird strike potwierdzony raportem lotniska</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Lot LO80 WAW→NRT odwołany z powodu uderzenia ptaka w silnik podczas startu. Samolot musiał zawrócić.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Dokumentacja:</strong> LOT przedstawił oficjalny raport ICAO potwierdzający incydent + ekspertyzę techniczną showing poważne uszkodzenie silnika.
              </p>
              <p className="text-gray-700 font-semibold text-red-600">
                <strong>Wynik:</strong> Brak odszkodowania – bird strike uznany za nadzwyczajną okoliczność (prawdziwie niemożliwe do przewidzenia). Pasażerowie otrzymali lot zastępczy + pomoc (posiłki, hotel).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 4: "Problemy techniczne" bez dokumentacji</h3>
              <p className="text-gray-700 mb-2">
                <strong>Sytuacja:</strong> Lot LO281 WAW→LHR opóźniony o 4 godziny. LOT w reklamacji podał ogólne "problemy techniczne" bez szczegółów.
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Odwołanie:</strong> Pasażer zażądał szczegółowego raportu technicznego. LOT nie przedstawił żadnej dokumentacji.
              </p>
              <p className="text-gray-700 font-semibold text-green-600">
                <strong>Wynik:</strong> ULC uznało że brak dowodów = brak nadzwyczajnej okoliczności. LOT wypłacił 400 € + odsetki.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Nie daj się zwieść ogólnym wymówkom LOT
            </p>
            <p className="text-blue-800 mb-4">
              Jeśli LOT odmawia odszkodowania z powodu "usterki technicznej" – żądaj szczegółowej dokumentacji i nie akceptuj voucherów. W 90% przypadków masz pełne prawo do €250-600.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatną reklamację →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak skutecznie odwołać się od odmowy LOT?
          </h2>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">📝 Procedura krok po kroku:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-blue-900">Otrzymałeś odmowę z powodu "usterki technicznej":</strong>
                  <p className="text-gray-700 mt-1">
                    LOT często wysyła ogólną odpowiedź bez szczegółów. Nie akceptuj tego.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-blue-900">Wyślij pisemne żądanie dokumentacji:</strong>
                  <p className="text-gray-700 mt-1">
                    Email do customer.relations@lot.pl z treścią:<br/>
                    <em>"Proszę o przedstawienie szczegółowego raportu technicznego opisującego usterkę, dowodów regularnej konserwacji samolotu oraz wyjaśnienia dlaczego usterka nie mogła być wykryta podczas standardowych przeglądów."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-blue-900">Daj LOT 14 dni na odpowiedź:</strong>
                  <p className="text-gray-700 mt-1">
                    Jeśli LOT nie odpowie lub nie przedstawi dowodów – masz silny argument do eskalacji.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-blue-900">Zgłoś sprawę do ULC:</strong>
                  <p className="text-gray-700 mt-1">
                    Urząd Lotnictwa Cywilnego: <a href="https://www.ulc.gov.pl" className="text-blue-600 hover:underline" target="_blank" rel="noopener">www.ulc.gov.pl</a><br/>
                    Formularz reklamacji + wszystkie dokumenty (PNR, boarding pass, korespondencja z LOT)
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <div>
                  <strong className="text-blue-900">Rozważ pomoc prawną:</strong>
                  <p className="text-gray-700 mt-1">
                    Jeśli ULC nie pomoże, <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">firmy zajmujące się odszkodowaniami lotniczymi</a> mogą za Ciebie wyegzekwować należność (prowizja tylko przy sukcesie ~25-30%).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Tabela odszkodowań: Ile możesz dostać?
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white border border-gray-300">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Odległość lotu</th>
                  <th className="py-3 px-4 text-left">Opóźnienie ≥3h</th>
                  <th className="py-3 px-4 text-left">Odwołanie</th>
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

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Uwaga!
            </p>
            <p className="text-yellow-800">
              Odszkodowanie to nie to samo co zwrot biletu. Jeśli lot został odwołany, przysługuje Ci:<br/>
              • <strong>Zwrot biletu</strong> (cała kwota zapłacona)<br/>
              • <strong>PLUS odszkodowanie</strong> (€250-600)<br/>
              • <strong>PLUS pomoc</strong> (posiłki, hotel, transport) jeśli trzeba czekać
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Pytania i odpowiedzi (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Czy każda usterka techniczna zwalnia LOT z odszkodowania?
              </h3>
              <p className="text-gray-700">
                <strong>Nie!</strong> Tylko usterki będące prawdziwie nadzwyczajnymi okolicznościami (ukryta wada producenta, FOD, sabotaż). Standardowe awarie eksploatacyjne = odpowiedzialność LOT.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. LOT nie przedstawił raportu technicznego – co zrobić?
              </h3>
              <p className="text-gray-700">
                Wyślij pisemne żądanie dokumentacji. Jeśli LOT nie odpowie w 14 dni – zgłoś sprawę do ULC. Brak dowodów = brak nadzwyczajnej okoliczności = LOT musi zapłacić.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Bird strike – czy to zawsze nadzwyczajna okoliczność?
              </h3>
              <p className="text-gray-700">
                <strong>Niekoniecznie.</strong> LOT musi przedstawić oficjalny raport ICAO potwierdzający incydent + dowód poważnego uszkodzenia. Jeśli to standardowe zagrożenie na danym lotnisku (np. sezon migracji ptaków) – LOT powinno podjąć środki zapobiegawcze.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Czy "problemy techniczne wykryte podczas kontroli przedlotowej" to nadzwyczajna okoliczność?
              </h3>
              <p className="text-gray-700">
                <strong>Nie!</strong> Kontrola przedlotowa to standardowa procedura. Jeśli usterka została wykryta wtedy – oznacza zaniedbanie w utrzymaniu samolotu = odpowiedzialność LOT.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                5. LOT oferuje voucher zamiast gotówki – czy muszę akceptować?
              </h3>
              <p className="text-gray-700">
                <strong>Absolutnie nie!</strong> Według WE 261/2004 masz prawo do odszkodowania w gotówce (przelew na konto). Vouchery to próba oszczędzenia przez LOT – odmów i żądaj płatności.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                6. Jaki jest termin na złożenie reklamacji?
              </h3>
              <p className="text-gray-700">
                <strong>3 lata od daty lotu</strong> (przedawnienie w Polsce). Nie odkładaj – im wcześniej złożysz reklamację, tym łatwiej zebrać dowody.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                7. Czy LOT może obniżyć kwotę odszkodowania?
              </h3>
              <p className="text-gray-700">
                Tak, jeśli opóźnienie wynosi <strong>3-4 godziny na lotach &gt;3500 km</strong>, LOT może obniżyć o 50% (z 600 € do 300 €). Jeśli ≥4 godziny = zawsze pełne 600 €.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                8. Co jeśli ULC nie pomoże?
              </h3>
              <p className="text-gray-700">
                Możesz skorzystać z pomocy <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">firm zajmujących się odszkodowaniami lotniczymi</a> (prowizja ~25-30% tylko przy sukcesie) lub wytoczyć pozew sądowy (warto dla kwot €400-600).
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
                  "name": "Czy każda usterka techniczna zwalnia LOT z odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie! Tylko usterki będące prawdziwie nadzwyczajnymi okolicznościami (ukryta wada producenta, FOD, sabotaż). Standardowe awarie eksploatacyjne = odpowiedzialność LOT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "LOT nie przedstawił raportu technicznego – co zrobić?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Wyślij pisemne żądanie dokumentacji. Jeśli LOT nie odpowie w 14 dni – zgłoś sprawę do ULC. Brak dowodów = brak nadzwyczajnej okoliczności = LOT musi zapłacić."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Bird strike – czy to zawsze nadzwyczajna okoliczność?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Niekoniecznie. LOT musi przedstawić oficjalny raport ICAO potwierdzający incydent + dowód poważnego uszkodzenia. Jeśli to standardowe zagrożenie na danym lotnisku – LOT powinno podjąć środki zapobiegawcze."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy 'problemy techniczne wykryte podczas kontroli przedlotowej' to nadzwyczajna okoliczność?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Nie! Kontrola przedlotowa to standardowa procedura. Jeśli usterka została wykryta wtedy – oznacza zaniedbanie w utrzymaniu samolotu = odpowiedzialność LOT."
                  }
                },
                {
                  "@type": "Question",
                  "name": "LOT oferuje voucher zamiast gotówki – czy muszę akceptować?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutnie nie! Według WE 261/2004 masz prawo do odszkodowania w gotówce (przelew na konto). Vouchery to próba oszczędzenia przez LOT – odmów i żądaj płatności."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jaki jest termin na złożenie reklamacji?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "3 lata od daty lotu (przedawnienie w Polsce). Nie odkładaj – im wcześniej złożysz reklamację, tym łatwiej zebrać dowody."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy LOT może obniżyć kwotę odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak, jeśli opóźnienie wynosi 3-4 godziny na lotach >3500 km, LOT może obniżyć o 50% (z 600 € do 300 €). Jeśli ≥4 godziny = zawsze pełne 600 €."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co jeśli ULC nie pomoże?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Możesz skorzystać z pomocy firm zajmujących się odszkodowaniami lotniczymi (prowizja ~25-30% tylko przy sukcesie) lub wytoczyć pozew sądowy (warto dla kwot €400-600)."
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
