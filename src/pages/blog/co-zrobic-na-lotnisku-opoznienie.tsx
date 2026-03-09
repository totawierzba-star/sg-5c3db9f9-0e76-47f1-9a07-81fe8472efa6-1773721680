import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function AirportDelayGuide() {
  return (
    <Layout>
      <SEO
        title="Co zrobić na lotnisku gdy lot jest opóźniony? Prawa pasażera"
        description="Twój lot jest opóźniony lub odwołany? Sprawdź, co musisz zrobić jeszcze na lotnisku (posiłki, hotel, zaświadczenia), aby zapewnić sobie prawo do odszkodowania."
        url="https://lotproblem.pl/blog/co-zrobic-na-lotnisku-opoznienie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Co zrobić na lotnisku, gdy Twój lot jest opóźniony?
          </h1>
          <p className="text-xl text-gray-600">
            Siedzisz właśnie na lotnisku i patrzysz na czerwoną tablicę "DELAYED"? To frustrujące, ale Twoje działania w ciągu najbliższych kilku godzin zadecydują o tym, czy otrzymasz odszkodowanie (nawet 600 euro) oraz czy linia lotnicza zapłaci za Twój hotel i jedzenie.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            🚨 Zanim opuścisz lotnisko!
          </p>
          <p className="text-blue-800 mb-4">
            Jeśli opóźnienie wynosi <strong>powyżej 3 godzin</strong> na lotnisku docelowym, możesz mieć prawo do <strong>250 - 600 € odszkodowania</strong> na mocy rozporządzenia WE 261/2004. Najważniejsze to zebrać dowody już teraz.
          </p>
          <a
            href="https://claimwinger.com/pl/opozniony-lot"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sprawdź odszkodowanie →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            7 kroków, które musisz wykonać na lotnisku
          </h2>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">1. Zapytaj o PRZYCZYNĘ opóźnienia na piśmie</h3>
              <p>
                To najważniejszy krok! Obsługa lotniska często mówi ogólnikowo "z powodów operacyjnych". Udaj się do bramki (gate) lub punktu obsługi linii lotniczej (Help Desk) i zapytaj o konkretny powód.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Poproś o pisemne zaświadczenie o opóźnieniu i jego przyczynie.</li>
                <li>Jeśli to niemożliwe, nagraj lub zapisz to, co mówi obsługa.</li>
                <li>Zrób zdjęcie tablicy odlotów z widocznym statusem opóźnienia.</li>
              </ul>
              <div className="mt-3 text-sm bg-blue-50 p-3 rounded text-blue-800">
                <strong>Dlaczego to ważne?</strong> Linie lotnicze często zmieniają zdanie po czasie, tłumacząc się "złą pogodą", aby uniknąć wypłaty. Dowód z lotniska może podważyć ich wersję.
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">2. Zachowaj WSZYSTKIE dokumenty podróżne</h3>
              <p>
                Nigdy nie wyrzucaj karty pokładowej! Jest to Twój główny dowód, że stawiłeś się na lot.
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li><strong>Papierowa karta pokładowa (Boarding Pass)</strong> - zrób jej zdjęcie.</li>
                <li><strong>Mobilna karta pokładowa</strong> - zrób zrzut ekranu (screenshot), zanim zniknie z aplikacji.</li>
                <li><strong>Przywieszki bagażowe (Baggage Tags)</strong> - zachowaj te małe naklejki.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">3. Żądaj posiłków i napojów (Prawo do opieki)</h3>
              <p>
                Jeśli lot jest opóźniony powyżej określonego czasu (2h dla lotów do 1500 km, 3h dla 1500-3500 km, 4h dla powyżej 3500 km), linia lotnicza MUSI zapewnić Ci:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Posiłki i napoje adekwatne do czasu oczekiwania.</li>
                <li>Vouchery do zrealizowania w restauracjach na lotnisku.</li>
              </ul>
              <div className="mt-3 text-sm bg-yellow-50 border-l-4 border-yellow-500 p-3 text-yellow-800">
                <strong>Jeśli nie dają voucherów:</strong> Kup jedzenie sam, ale ZBIERAJ PARAGONY (itemized receipts). Linia lotnicza musi Ci zwrócić koszty, ale uwaga — nie zwracają za alkohol!
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">4. Zażądaj hotelu (przy opóźnieniu nocnym)</h3>
              <p>
                Jeżeli opóźnienie przeciąga się do następnego dnia, nie musisz spać na podłodze lotniska. Linia lotnicza ma obowiązek:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Zapewnić nocleg w hotelu.</li>
                <li>Zorganizować transport między lotniskiem a hotelem (w obie strony).</li>
              </ul>
              <p className="mt-2">
                Jeśli obsługa mówi "nie mamy miejsc w hotelach, załatwcie sobie sami" — zrób to. Zarezerwuj rozsądny cenowo hotel (np. 3 gwiazdki), zachowaj rachunek za hotel oraz taksówkę/Ubera. Zwrócą Ci za to pieniądze (na podstawie paragonów).
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">5. Nie przyjmuj "śmiesznych" voucherów podróżnych</h3>
              <p>
                Czasami obsługa lotniska lub powiadomienie z aplikacji zaoferuje Ci mały voucher (np. 50-100 euro) w zamian za zrzeczenie się roszczeń.
              </p>
              <p className="font-bold text-red-600 mt-2">
                Uważaj! Przyjęcie vouchera może oznaczać zrzeczenie się prawa do ustawowego odszkodowania (które wynosi od 250 do 600 euro w gotówce).
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">6. Wymieniaj się kontaktami z innymi pasażerami</h3>
              <p>
                Zanotuj numery telefonów lub adresy e-mail innych pasażerów. W razie późniejszego sporu z linią lotniczą, np. jeśli przewoźnik twierdzi, że "pasażerowie zostali poinformowani", zeznania współpasażerów mogą być kluczowym dowodem.
              </p>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-lg p-6">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">7. Zapisz dokładny czas OTWARCIA DRZWI samolotu</h3>
              <p>
                To niezwykle istotny detal! Odszkodowanie zależy od opóźnienia w miejscu docelowym. Zgodnie z wyrokiem Trybunału Sprawiedliwości UE, czas przylotu to <strong>nie moment dotknięcia pasa startowego</strong>, ale moment, w którym przynajmniej jedne drzwi samolotu zostaną otwarte i pasażerowie mogą zacząć opuszczać pokład.
              </p>
              <p className="mt-2 text-green-700 font-semibold">
                Jeśli drzwi otworzą się 3 godziny i 1 minutę po planowanym czasie — masz prawo do odszkodowania!
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Prawa pasażera a rodzaj opóźnienia
          </h2>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-3 border">Czas opóźnienia</th>
                  <th className="p-3 border">Dystans lotu</th>
                  <th className="p-3 border">Twoje prawa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-semibold">Ponad 2 godziny</td>
                  <td className="p-3 border">Do 1500 km</td>
                  <td className="p-3 border">Posiłki, napoje, 2 telefony/emaile</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border font-semibold">Ponad 3 godziny</td>
                  <td className="p-3 border">Dowolny</td>
                  <td className="p-3 border text-green-700 font-bold">Prawo do odszkodowania finansowego (250-600 €)</td>
                </tr>
                <tr>
                  <td className="p-3 border font-semibold">Ponad 5 godzin</td>
                  <td className="p-3 border">Dowolny</td>
                  <td className="p-3 border">Opcja zwrotu kosztów biletu (rezygnacja z lotu)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-3 border font-semibold">Nocne (do kolejnego dnia)</td>
                  <td className="p-3 border">Dowolny</td>
                  <td className="p-3 border">Hotel + transport z/na lotnisko</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Czego linia lotnicza Ci NIE powie?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Przewoźnicy często nadużywają argumentu o "nadzwyczajnych okolicznościach" (np. zła pogoda, usterki techniczne, strajki). Warto wiedzieć, że:
          </p>

          <ul className="list-disc pl-6 space-y-3 mb-8 text-lg">
            <li><strong>Usterka techniczna to NIE jest nadzwyczajna okoliczność.</strong> Linie lotnicze muszą regularnie serwisować samoloty. Awaria maszyny daje prawo do odszkodowania.</li>
            <li><strong>Brak załogi (crew shortage)</strong> to problem linii lotniczej, a nie "siła wyższa". Przysługuje Ci rekompensata.</li>
            <li><strong>Strajk personelu samej linii lotniczej</strong> (np. pilotów Ryanair czy LOT) w świetle prawa unijnego nie zwalnia przewoźnika z wypłaty odszkodowania. (Inaczej jest w przypadku strajku kontrolerów lotów ATC na lotnisku).</li>
          </ul>

          <div className="bg-gray-50 border-l-4 border-gray-500 p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Wróciłeś już do domu? Co teraz?</h3>
            <p className="mb-4">
              Masz pełne prawo ubiegać się o odszkodowanie (w Polsce masz na to 1 rok, w innych krajach nawet do 3-5 lat wstecz). Najszybszą opcją jest sprawdzenie kwalifikacji lotu w specjalnych kalkulatorach, bez konieczności samodzielnego pisania prawniczych pism do linii lotniczej.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a
                href="https://claimwinger.com/pl/opozniony-lot"
                className="bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Sprawdź, czy należy Ci się rekompensata
              </a>
              <Link
                href="/kalkulator"
                className="bg-gray-200 text-gray-800 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Użyj naszego kalkulatora
              </Link>
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
                  "name": "Co zrobić gdy utknę na lotnisku z powodu opóźnienia?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "1. Poproś o pisemne zaświadczenie o przyczynie opóźnienia. 2. Zachowaj kartę pokładową. 3. Żądaj vouchera na posiłki po 2h czekania. 4. Żądaj hotelu jeśli opóźnienie przesuwa się na kolejny dzień. 5. Zapisz dokładną godzinę otwarcia drzwi samolotu po przylocie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy linia lotnicza odda mi pieniądze za jedzenie na lotnisku?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak, jeśli opóźnienie przekracza 2-4 godziny (w zależności od dystansu). Jeśli nie dadzą Ci vouchera, kupuj posiłki samodzielnie i zachowuj paragony imienne. Linia musi zwrócić koszty, ale uwaga - nie zwracają za alkohol."
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