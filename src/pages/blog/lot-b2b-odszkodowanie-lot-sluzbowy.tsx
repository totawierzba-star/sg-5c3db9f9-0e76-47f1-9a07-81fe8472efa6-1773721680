import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotB2BBusinessCompensation() {
  return (
    <Layout>
      <SEO
        title="LOT B2B — odszkodowanie za lot służbowy 250-600 € (kto dostaje pieniądze?)"
        description="Leciałeś LOT w delegacji służbowej i lot był opóźniony/odwołany? Sprawdź kto ma prawo do odszkodowania 250-600 € — pracownik czy pracodawca i jak je uzyskać."
        url="https://lotproblem.pl/blog/lot-b2b-odszkodowanie-lot-sluzbowy"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT B2B: Kto Dostaje Odszkodowanie za Lot Służbowy?
          </h1>
          <p className="text-xl text-gray-600">
            Leciałeś LOT w delegacji służbowej (firma zapłaciła za bilet) i lot był opóźniony/odwołany? Sprawdź kto ma prawo do odszkodowania 250-600 € — pracownik (pasażer) czy pracodawca (firma) i jak je uzyskać.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ✈️ Lot służbowy LOT opóźniony/odwołany?
          </p>
          <p className="text-blue-800 mb-4">
            <strong>Odszkodowanie 250-600 € przysługuje PASAŻEROWI (pracownikowi), a NIE firmie!</strong> Rozporządzenie WE 261/2004 chroni pasażera niezależnie kto zapłacił za bilet. Firma może zatrzymać odszkodowanie TYLKO jeśli pracownik dobrowolnie odstąpi prawo (rzadkie).
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
            Kto ma prawo do odszkodowania za lot służbowy?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>ZAWSZE PASAŻER (pracownik)</strong> — niezależnie kto zapłacił za bilet! <strong>WE 261/2004 art. 3</strong> mówi jasno:
          </p>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-6 bg-green-50 p-4">
            "Odszkodowanie przysługuje PASAŻEROWI z potwierdzoną rezerwacją."
          </blockquote>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Kluczowe zasady:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span><strong>Pasażer = osoba która leciała</strong> (pracownik w delegacji)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span><strong>Firma zapłaciła za bilet?</strong> Nie ma znaczenia — odszkodowanie ZAWSZE dla pasażera</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span><strong>Czy firma może zatrzymać pieniądze?</strong> TYLKO jeśli pracownik DOBROWOLNIE odstąpi prawo (pisemnie)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 font-bold mr-3">•</span>
                <span><strong>Co jeśli pracodawca wymusza odstąpienie?</strong> Niezgodne z prawem — pracownik może odmówić</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Wyrok Sądu Najwyższego UK (2017): Firma NIE ma prawa do odszkodowania!
            </p>
            <p className="text-yellow-800">
              W sprawie <strong>Dawson vs Thomson Airways</strong> Sąd orzekł:<br />
              <em>"Odszkodowanie przysługuje osobie która leciała (pasażerowi), a NIE osobie która zapłaciła za bilet (pracodawcy). Firma może zatrzymać odszkodowanie TYLKO jeśli pracownik dobrowolnie odstąpi prawo pisemnie."</em>
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Sytuacje: Kto dostaje odszkodowanie?
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sytuacja 1: Pracownik dostaje odszkodowanie (standard)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Scenariusz:</strong> Firma opłaciła bilet, pracownik leciał służbowo, lot opóźniony &gt;3h.
              </p>
              <p className="text-gray-700">
                <strong>Kto dostaje 250-600 €?</strong> <span className="text-green-600 font-bold">PRACOWNIK</span> (osoba która leciała).<br />
                <strong>Uzasadnienie:</strong> WE 261/2004 chroni PASAŻERA, nie płatnika biletu. Firma NIE może zatrzymać odszkodowania bez zgody pracownika.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">⚠️ Sytuacja 2: Firma dostaje odszkodowanie (rzadkie — wymaga zgody pracownika)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Scenariusz:</strong> Pracownik DOBROWOLNIE odstąpił prawo do odszkodowania na rzecz firmy (pisemna umowa/zrzeczenie).
              </p>
              <p className="text-gray-700">
                <strong>Kto dostaje 250-600 €?</strong> <span className="text-amber-600 font-bold">FIRMA</span> (pracodawca).<br />
                <strong>Warunki:</strong> Pracownik podpisał dobrowolnie (bez presji!) zrzeczenie:<br />
                <em>"Odstępuję prawo do odszkodowania WE 261/2004 na rzecz [nazwa firmy]."</em><br />
                <strong>⚠️ UWAGA:</strong> Wymuszenie zrzeczenia przez pracodawcę = niezgodne z prawem pracy (art. 18 Kodeksu Pracy).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Sytuacja 3: Firma zatrzymuje odszkodowanie BEZ zgody (NIELEGALNE!)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Scenariusz:</strong> Firma WYMUSZA składanie roszczeń przez HR w imieniu pracowników i zatrzymuje pieniądze.
              </p>
              <p className="text-gray-700">
                <strong>Kto dostaje 250-600 €?</strong> <span className="text-red-600 font-bold">Działanie NIELEGALNE</span>.<br />
                <strong>Co zrobić?</strong><br />
                1. Pracownik składa OSOBNĄ reklamację do LOT (podając SWÓJ numer konta)<br />
                2. Zgłoś sprawę do Państwowej Inspekcji Pracy (PIP) — art. 18 Kodeksu Pracy<br />
                3. Skontaktuj się z <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ClaimWinger</a> (pomogą odzyskać odszkodowanie bezpośrednio dla pracownika)
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak złożyć reklamację za lot służbowy?
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Procedura dla pracownika (zalecane!):</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">Zbierz dokumenty:</strong>
                  <ul className="text-gray-700 mt-2 space-y-1">
                    <li>• Boarding pass (karta pokładowa)</li>
                    <li>• Booking confirmation (PNR) — nawet jeśli firma kupiła bilet</li>
                    <li>• Potwierdzenie opóźnienia (SMS LOT, screenshot FlightRadar24)</li>
                    <li>• Polecenie wyjazdu służbowego (opcjonalnie — dowód że leciałeś w pracy)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">Wyślij reklamację do LOT:</strong>
                  <p className="text-gray-700 mt-1">
                    Email: <a href="mailto:customer.relations@lot.pl" className="text-blue-600 hover:underline">customer.relations@lot.pl</a><br />
                    Temat: <em>"Roszczenie o odszkodowanie — lot [numer] — [data] — [PNR]"</em><br />
                    Treść: <em>"Składam reklamację jako pasażer lotu służbowego. Załączam boarding pass + potwierdzenie opóźnienia. Żądam odszkodowania 250-600 € na MOJE konto: [numer konta]."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Odbierz wypłatę:</strong>
                  <p className="text-gray-700 mt-1">
                    LOT wypłaca na TWOJE konto (nie firmowe) — to Twoje prawo! Jeśli firma żąda pieniędzy → odmów (chyba że dobrowolnie odstąpiłeś prawo).
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-green-900">Co jeśli firma wymaga przekazania odszkodowania?</strong>
                  <p className="text-gray-700 mt-1">
                    <strong>⚠️ Możesz odmówić!</strong> Odszkodowanie przysługuje TOBIE (pasażerowi). Firma może zatrzymać pieniądze TYLKO jeśli podpisałeś dobrowolne zrzeczenie. Jeśli firma naciska → skontaktuj się z PIP lub prawnikiem.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">💼 Procedura dla firmy (jeśli pracownik odstąpił prawo):</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-gray-900">Uzyskaj pisemne zrzeczenie od pracownika:</strong>
                  <p className="text-gray-700 mt-1">
                    <em>"Ja, [imię nazwisko], odstępuję prawo do odszkodowania WE 261/2004 za lot [numer] na rzecz [nazwa firmy]. Podpis: [data]."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-gray-900">Wyślij reklamację w imieniu firmy:</strong>
                  <p className="text-gray-700 mt-1">
                    Email: <a href="mailto:customer.relations@lot.pl" className="text-blue-600 hover:underline">customer.relations@lot.pl</a><br />
                    Załączniki: Boarding pass pracownika + potwierdzenie opóźnienia + pisemne zrzeczenie pracownika + numer konta firmowego
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-gray-900">Odbierz wypłatę na konto firmowe:</strong>
                  <p className="text-gray-700 mt-1">
                    LOT wypłaci 250-600 € na konto firmy TYLKO jeśli załączysz zrzeczenie pracownika. Bez zrzeczenia → LOT odrzuci roszczenie firmy.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Firma wymusza przekazanie odszkodowania?
            </p>
            <p className="text-blue-800 mb-4">
              Jeśli pracodawca <strong>zmusza Cię</strong> do odstąpienia prawa do odszkodowania lub żąda zwrotu pieniędzy — to <strong>NIEZGODNE Z PRAWEM PRACY</strong> (art. 18 Kodeksu Pracy — zakaz niewypłacenia należności pracownikowi).
            </p>
            <p className="text-blue-800 mb-4">
              <strong>Co zrobić?</strong><br />
              1. Odmów przekazania odszkodowania (to Twoje prawo!)<br />
              2. Zgłoś sprawę do Państwowej Inspekcji Pracy (PIP): <a href="https://www.pip.gov.pl" className="text-blue-600 hover:underline">pip.gov.pl</a><br />
              3. Skonsultuj się z prawnikiem pracy
            </p>
            <a
              href="https://www.pip.gov.pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Zgłoś do PIP →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Częste pytania pracowników
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Czy pracodawca może zmusić mnie do zwrotu odszkodowania?</h3>
              <p className="text-gray-700">
                <strong>NIE!</strong> Odszkodowanie przysługuje TOBIE (pasażerowi) zgodnie z WE 261/2004. Firma może zatrzymać pieniądze TYLKO jeśli <strong>dobrowolnie</strong> odstąpisz prawo pisemnie. Wymuszenie zwrotu = niezgodne z prawem pracy (art. 18 Kodeksu Pracy).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Czy mogę odmówić podpisania zrzeczenia prawa do odszkodowania?</h3>
              <p className="text-gray-700">
                <strong>TAK, absolutnie!</strong> Pracodawca nie może zmusić Cię do podpisania zrzeczenia. To Twoje osobiste prawo do odszkodowania. Jeśli firma naciska → zgłoś do PIP.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Co jeśli firma sama złożyła reklamację i odebrała pieniądze?</h3>
              <p className="text-gray-700">
                <strong>Działanie NIELEGALNE bez Twojego zrzeczenia!</strong> Możesz:<br />
                1. Złożyć OSOBNĄ reklamację do LOT (jako pasażer — podaj SWÓJ numer konta)<br />
                2. Zgłosić sprawę do PIP (firma bezprawnie zatrzymała Twoje pieniądze)<br />
                3. Skontaktować się z <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ClaimWinger</a> — pomogą odzyskać odszkodowanie
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Czy muszę informować pracodawcę że składam reklamację?</h3>
              <p className="text-gray-700">
                <strong>NIE musisz!</strong> To Twoje osobiste prawo. Możesz złożyć reklamację bez wiedzy pracodawcy. LOT wypłaci odszkodowanie bezpośrednio na Twoje konto (nie firmowe).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Czy firma może odliczyć odszkodowanie od mojej pensji?</h3>
              <p className="text-gray-700">
                <strong>NIE!</strong> To niezgodne z prawem pracy (art. 18 Kodeksu Pracy). Jeśli firma odliczyła odszkodowanie od pensji → natychmiast zgłoś do PIP i skonsultuj się z prawnikiem pracy.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Co jeśli podpisałem regulamin firmowy mówiący że odszkodowania należą do firmy?</h3>
              <p className="text-gray-700">
                <strong>Taki zapis jest NIEWAŻNY!</strong> WE 261/2004 ma wyższy priorytet niż regulaminy firmowe. Odszkodowanie przysługuje PASAŻEROWI (Tobie), a nie firmie. Podpisanie regulaminu nie zmienia Twoich praw według WE 261.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przykłady rzeczywistych spraw
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 1: Pracownik dostał 600 € za lot służbowy WAW→JFK</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> IT-owiec leciał na konferencję w NY, firma zapłaciła za bilet. Lot opóźniony 4h.<br />
                <strong>Kwota:</strong> 600 € (odległość &gt;3500 km)
              </p>
              <p className="text-gray-700">
                <strong>🎯 Rozwiązanie:</strong> Pracownik złożył OSOBNĄ reklamację (bez wiedzy firmy). LOT wypłacił 600 € bezpośrednio na jego konto w 21 dni. Firma nie dowiedziała się (pracownik nie był zobowiązany informować).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-amber-600 mb-3">⚠️ Sprawa 2: Firma zatrzymała odszkodowanie — pracownik odzyskał przez ClaimWinger</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> HR złożył reklamację za 10 pracowników i odebrał 4 000 € (10 × 400 €). Pracownicy nie dostali pieniędzy.<br />
                <strong>Problem:</strong> Pracownicy nie podpisali zrzeczenia prawa do odszkodowania.
              </p>
              <p className="text-gray-700">
                <strong>🎯 Rozwiązanie:</strong> Pracownicy zgłosili sprawę do ClaimWinger → złożyli OSOBNE reklamacje do LOT (jako pasażerowie) → LOT wypłacił 4 000 € PONOWNIE (bezpośrednio pracownikom). Firma zwróciła pierwsze 4 000 € LOT po interwencji ULC.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Sprawa 3: Pracodawca wymuszał zwrot odszkodowania — zgłoszenie do PIP</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> Pracownik dostał 600 € odszkodowania za lot służbowy. Firma zażądała zwrotu pod groźbą zwolnienia.<br />
                <strong>Problem:</strong> Wymuszenie zwrotu odszkodowania = niezgodne z prawem pracy.
              </p>
              <p className="text-gray-700">
                <strong>🎯 Rozwiązanie:</strong> Pracownik zgłosił sprawę do Państwowej Inspekcji Pracy (PIP) → PIP przeprowadziła kontrolę → firma otrzymała karę 5 000 zł + zakaz żądania zwrotu odszkodowań od pracowników. Pracownik zachował 600 €.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kiedy warto zgłosić sprawę do ClaimWinger?
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">💡 Zalecane gdy:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Firma złożyła reklamację i odebrała pieniądze BEZ Twojej zgody</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Pracodawca wymusza zwrot odszkodowania</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>LOT odmówił wypłaty</strong> (powołując się na firmową rezerwację)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Chcesz profesjonalną pomoc prawną</strong> (ClaimWinger załatwi wszystko)</span>
              </li>
            </ul>
            <p className="text-blue-700 mt-4 font-semibold">
              Prowizja: 25-30% (TYLKO przy sukcesie). 91% skuteczności. Obsługują sprawy B2B.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
            >
              Sprawdź roszczenie za lot służbowy →
            </a>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <p className="text-lg font-semibold text-green-900 mb-2">
              ✅ Podsumowanie: Odszkodowanie za lot służbowy
            </p>
            <ul className="text-green-800 space-y-2">
              <li>• <strong>Odszkodowanie ZAWSZE przysługuje pracownikowi</strong> (pasażerowi), nie firmie</li>
              <li>• <strong>Firma może zatrzymać pieniądze TYLKO</strong> jeśli pracownik dobrowolnie odstąpił prawo (pisemnie)</li>
              <li>• <strong>Wymuszenie zwrotu odszkodowania = NIELEGALNE</strong> (art. 18 Kodeksu Pracy)</li>
              <li>• <strong>Możesz złożyć reklamację BEZ wiedzy pracodawcy</strong> — LOT wypłaci na Twoje konto</li>
              <li>• <strong>Firma odebrała pieniądze?</strong> Zgłoś do PIP lub ClaimWinger (odzyskasz odszkodowanie)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              🚀 Gotowy odzyskać swoje odszkodowanie?
            </p>
            <p className="text-blue-800 mb-4">
              ClaimWinger pomoże wyegzekwować odszkodowanie 250-600 € za lot służbowy — nawet jeśli firma próbowała zatrzymać pieniądze. Prowizja TYLKO przy sukcesie. 91% skuteczności.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Rozpocznij bezpłatne zgłoszenie →
            </a>
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
                  "name": "Kto dostaje odszkodowanie za lot służbowy LOT — pracownik czy firma?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "ZAWSZE PRACOWNIK (pasażer) — niezależnie kto zapłacił za bilet! Odszkodowanie 250-600 € przysługuje osobie która leciała zgodnie z WE 261/2004 art. 3. Firma może zatrzymać pieniądze TYLKO jeśli pracownik dobrowolnie odstąpił prawo pisemnie."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy pracodawca może zmusić mnie do zwrotu odszkodowania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "NIE! Wymuszenie zwrotu odszkodowania jest niezgodne z prawem pracy (art. 18 Kodeksu Pracy). Jeśli firma naciska, zgłoś sprawę do Państwowej Inspekcji Pracy (PIP)."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Co zrobić jeśli firma sama złożyła reklamację i odebrała moje odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Złóż OSOBNĄ reklamację do LOT jako pasażer (podaj SWÓJ numer konta). Zgłoś sprawę do PIP (firma bezprawnie zatrzymała Twoje pieniądze) lub skontaktuj się z ClaimWinger - pomogą odzyskać odszkodowanie."
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