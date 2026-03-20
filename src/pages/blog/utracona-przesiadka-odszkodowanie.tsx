import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";

export default function MissedConnectionGuide() {
  return (
    <Layout>
      <SEO
        title="Utracona przesiadka (Missed Connection) — kiedy przysługuje odszkodowanie?"
        description="Spóźniłeś się na lot łączony przez opóźnienie pierwszego lotu? Sprawdź, kiedy przysługuje Ci od 250 do 600 euro odszkodowania za utraconą przesiadkę."
        url="https://lotproblem.pl/blog/utracona-przesiadka-odszkodowanie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Utracona przesiadka (Missed Connection) – Kiedy należy się odszkodowanie?
          </h1>
          <p className="text-xl text-gray-600">
            Twój pierwszy lot miał lekkie opóźnienie, przez co samolot uciekł Ci sprzed nosa na lotnisku transferowym? Utrata przesiadki to ogromny stres, ale europejskie prawo (WE 261/2004) jest w tej sytuacji niezwykle korzystne dla pasażera.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ✈️ Przegapiłeś lot łączony?
          </p>
          <p className="text-blue-800 mb-4">
            Nawet jeśli Twój pierwszy lot był opóźniony o zaledwie 30-45 minut, ale przez to <strong>dotarłeś do miejsca docelowego z ponad 3-godzinnym opóźnieniem</strong>, należy Ci się <strong>od 250 do 600 euro odszkodowania</strong>.
          </p>
          <a
            href="https://claimwinger.com/pl/opozniony-lot"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Zweryfikuj swój lot łączony →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kluczowy warunek: "Jedna rezerwacja" (One Booking)
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Aby mieć prawo do odszkodowania za utraconą przesiadkę oraz do darmowego lotu zastępczego, Twoja podróż musi spełniać <strong>jeden, absolutnie najważniejszy warunek:</strong> wszystkie odcinki lotu muszą znajdować się na <strong>jednej rezerwacji</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-5">
              <h3 className="text-xl font-bold text-green-800 mb-3">✅ Jedna rezerwacja (Masz ochronę!)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Kupiłeś bilety w ramach jednej transakcji. Masz jeden Numer Rezerwacji (PNR - np. X7Y9Z).
              </p>
              <ul className="text-sm space-y-2 text-green-900">
                <li>• Odprawiasz bagaż tylko raz (do miejsca docelowego)</li>
                <li>• Linia lotnicza MA OBOWIĄZEK za darmo przebukować Cię na kolejny lot</li>
                <li>• <strong>Masz prawo do odszkodowania (250-600 €)</strong></li>
              </ul>
              <p className="mt-3 text-xs italic">Przykład: Warszawa - Frankfurt - Nowy Jork (kupione na stronie Lufthansy).</p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-5">
              <h3 className="text-xl font-bold text-red-800 mb-3">❌ Osobne bilety (Brak ochrony)</h3>
              <p className="text-gray-700 text-sm mb-3">
                Składałeś podróż "na własną rękę". Masz dwa osobne numery rezerwacji (często tanimi liniami).
              </p>
              <ul className="text-sm space-y-2 text-red-900">
                <li>• Samodzielnie odbierasz i nadajesz bagaż na przesiadce</li>
                <li>• Jeśli pierwszy lot się spóźni, drugi bilet przepada - linia nie pomoże</li>
                <li>• <strong>Brak prawa do odszkodowania za utraconą przesiadkę</strong> (tylko ew. za opóźnienie 1 odcinka, jeśli wynosiło min. 3h)</li>
              </ul>
              <p className="mt-3 text-xs italic">Przykład: Warszawa - Londyn (Ryanair) i osobno Londyn - Nowy Jork (British Airways).</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak liczone jest 3-godzinne opóźnienie?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            To kolejny powód, dla którego przepisy UE są tak korzystne. Aby dostać odszkodowanie, liczy się opóźnienie w <strong>miejscu docelowym</strong>, a nie na lotnisku przesiadkowym.
          </p>

          <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm mb-8">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Klasyczny przykład:</h3>
            <p className="mb-4">
              Lot Warszawa → Monachium → Madryt (Lufthansa).
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Lot z Warszawy startuje z <strong>zaledwie 45-minutowym opóźnieniem</strong>.</li>
              <li>Z powodu tych 45 minut, po wylądowaniu w Monachium okazuje się, że samolot do Madrytu właśnie odleciał.</li>
              <li>Lufthansa daje Ci miejsce w następnym samolocie za 5 godzin.</li>
              <li>Docierasz do Madrytu z opóźnieniem <strong>5 godzin i 15 minut</strong> w stosunku do pierwotnego planu.</li>
            </ul>
            <div className="mt-4 p-4 bg-green-100 rounded text-green-900 font-semibold">
              Wynik: Należy Ci się 400 € odszkodowania. Nie ma znaczenia, że wina leżała w "drobnym" 45-minutowym opóźnieniu pierwszego lotu.
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Co zrobić na lotnisku przesiadkowym po ucieczce samolotu?
          </h2>

          <ol className="list-decimal pl-6 space-y-4 mb-8 text-lg">
            <li><strong>Idź do punktu "Transfer/Transit Desk" lub stanowiska obsługi Twojej linii:</strong> Masz prawo do darmowej zmiany rezerwacji (rebooking) na najszybszy możliwy lot zastępczy do Twojego miejsca docelowego. Może to być lot tej samej lub, w określonych przypadkach, innej linii.</li>
            <li><strong>Poproś o vouchery na posiłki:</strong> Zgodnie z Prawem do Opieki, jeśli czekasz na lotnisku przesiadkowym na nowy lot, przewoźnik musi zapewnić Ci wyżywienie. Jeśli nie dadzą vouchera - zbieraj paragony za jedzenie!</li>
            <li><strong>Zażądaj hotelu (jeśli lot jest następnego dnia):</strong> Przewoźnik MUSI opłacić hotel na noc oraz taksówkę/transfer do niego.</li>
            <li><strong>Zapytaj o powód opóźnienia pierwszego lotu:</strong> Postaraj się zdobyć dowód, dlaczego pierwszy odcinek był opóźniony (np. usterka techniczna).</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Różne linie lotnicze (Codeshare) a odszkodowanie
          </h2>

          <p className="text-lg leading-relaxed mb-4">
            Co jeśli pierwszy lot wykonywał LOT, a drugi Lufthansa, ale wszystko było na jednym bilecie? To zjawisko nazywa się umowami codeshare.
          </p>
          <p className="text-lg leading-relaxed mb-6 font-semibold">
            Kluczowa zasada: Roszczenie o odszkodowanie zawsze kierujesz do tej linii lotniczej (tzw. operating carrier), która spowodowała opóźnienie prowadzące do utraty przesiadki.
          </p>
          <p className="text-lg leading-relaxed mb-8">
            Jeśli opóźnił się samolot obsługiwany przez LOT, piszesz do LOT-u. Jeśli opóźnił się lot Lufthansy — piszesz do Lufthansy, nawet jeśli kupiłeś cały bilet na stronie LOT-u.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Loty poza Unią Europejską
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Aby rozporządzenie WE 261 chroniło Twoją przesiadkę, cała podróż musi spełniać kryteria terytorialne:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-8 text-lg">
            <li><strong>Wylot z lotniska w UE</strong> (dowolną linią, np. z Frankfurtu do Dubaju, a potem do Bangkoku Emirates).</li>
            <li>LUB <strong>Przylot do lotniska w UE, ale tylko linią z UE</strong> (np. Nowy Jork do Paryża, a potem do Warszawy na pokładzie Air France).</li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-3">Jak najszybciej uzyskać pieniądze za utraconą przesiadkę?</h3>
            <p className="mb-4">
              Loty łączone są często skomplikowane do reklamacji, a linie lotnicze zrzucają winę na siebie nawzajem (jeśli w lot zaangażowane były dwie różne firmy). Przekazanie sprawy ekspertom od praw pasażera pozwala uniknąć odbijania od ściany.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com/pl/opozniony-lot"
                className="bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Złóż wniosek przez ekspertów
              </a>
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
                  "name": "Czy dostanę odszkodowanie za utratę przesiadki kupionej osobno (np. Ryanair i potem Wizz Air)?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Niestety nie. Odszkodowanie za utraconą przesiadkę i obowiązek zapewnienia lotu zastępczego przysługują tylko wtedy, gdy cała podróż (wszystkie loty) znajduje się na jednej, wspólnej rezerwacji (posiada jeden numer PNR)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Moje pierwsze opóźnienie wynosiło tylko 40 minut, ale spóźniłem się na kolejny lot. Mam prawo do rekompensaty?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tak! Czas opóźnienia pierwszego lotu nie ma znaczenia. Liczy się to, z jakim opóźnieniem dotarłeś do końcowego miejsca przeznaczenia. Jeśli ostatecznie byłeś na miejscu min. 3 godziny po czasie - przysługuje Ci 250-600 euro."
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
