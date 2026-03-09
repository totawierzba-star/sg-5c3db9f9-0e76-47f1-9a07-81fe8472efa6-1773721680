import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";

export default function LotGroupBookingClaim() {
  return (
    <Layout>
      <SEO
        title="LOT grupowa rezerwacja — zbiorowe roszczenie odszkodowawcze 250-600 €"
        description="Leciałeś LOT w grupie (rodzina, wycieczka, firma)? Sprawdź jak złożyć zbiorowe roszczenie o odszkodowanie 250-600 € i czy każdy pasażer dostaje pełną kwotę."
        url="https://lotproblem.pl/blog/lot-grupowa-rezerwacja-roszczenie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            LOT Grupowa Rezerwacja: Zbiorowe Roszczenie o Odszkodowanie
          </h1>
          <p className="text-xl text-gray-600">
            Leciałeś LOT w grupie (rodzina, wycieczka szkolna, delegacja firmowa)? Sprawdź jak złożyć zbiorowe roszczenie o odszkodowanie 250-600 € za opóźniony/odwołany lot, czy każdy pasażer dostaje pełną kwotę i jak uprościć procedurę dla całej grupy.
          </p>
        </header>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="text-lg font-semibold text-blue-900 mb-2">
            ✈️ Grupowa rezerwacja LOT opóźniona/odwołana?
          </p>
          <p className="text-blue-800 mb-4">
            <strong>Każdy pasażer ma OSOBNE prawo do odszkodowania 250-600 €!</strong> Nie dzielicie jednej kwoty — każdy dostaje pełną kwotę zależną od odległości lotu. Możecie złożyć jedno zbiorowe roszczenie dla całej grupy (łatwiejsze) lub osobne reklamacje (każdy sam).
          </p>
          <a
            href="https://claimwinger.com/pl/opozniony-lot"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Sprawdź odszkodowanie dla grupy →
          </a>
        </div>

        <section className="prose prose-lg max-w-none mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Czym jest grupowa rezerwacja LOT?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>Grupowa rezerwacja (Group Booking)</strong> to zakup biletów dla 10+ pasażerów jednocześnie pod jednym PNR (Passenger Name Record). LOT oferuje grupowe rabaty (~5-15% zniżki) dla:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🧳 Rodzaje grup na LOT:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Rodziny (2-10 osób):</strong> Wspólne wakacje, uroczystości</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Wycieczki szkolne (15-50 osób):</strong> Uczniowie + opiekunowie</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Delegacje firmowe (5-30 osób):</strong> Konferencje, szkolenia</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Grupy pielgrzymkowe (20-100 osób):</strong> Pielgrzymki religijne</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">•</span>
                <span><strong>Grupy sportowe/artystyczne (10-40 osób):</strong> Członkowie + sprzęt</span>
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
            <p className="text-lg font-semibold text-yellow-900 mb-2">
              ⚠️ Kluczowa różnica: Rodzaj rezerwacji NIE WPŁYWA na prawo do odszkodowania!
            </p>
            <p className="text-yellow-800">
              Zgodnie z WE 261/2004 art. 3 — każdy pasażer ma OSOBISTE prawo do odszkodowania, niezależnie czy leciał sam czy w grupie. LOT nie może odmówić wypłaty z powodu "grupowej rezerwacji".
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Czy każdy pasażer z grupy dostaje odszkodowanie?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            <strong>TAK!</strong> Zgodnie z <strong>rozporządzeniem WE 261/2004 art. 7</strong>:
          </p>

          <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700 mb-6 bg-green-50 p-4">
            "Odszkodowanie przysługuje KAŻDEMU pasażerowi indywidualnie, niezależnie od rodzaju rezerwacji (grupowa/indywidualna)."
          </blockquote>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Jak działa odszkodowanie dla grup:</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-900 mb-2">Przykład: Grupa 20 osób, lot WAW→LHR (1465 km), opóźnienie 4h</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Odległość: ≤1500 km → <strong>250 € na osobę</strong></li>
                  <li>• Liczba pasażerów: 20</li>
                  <li>• <strong>RAZEM: 20 × 250 € = 5 000 € dla całej grupy</strong></li>
                  <li>• Każdy pasażer dostaje: 250 € (pełna kwota, nie dzielona)</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-semibold text-green-900 mb-2">Przykład: Rodzina 4 osoby, lot WAW→JFK (6844 km), lot odwołany</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Odległość: &gt;3500 km → <strong>600 € na osobę</strong></li>
                  <li>• Liczba pasażerów: 4 (2 dorośli + 2 dzieci)</li>
                  <li>• <strong>RAZEM: 4 × 600 € = 2 400 € dla rodziny</strong></li>
                  <li>• Każdy pasażer (włącznie z dziećmi) dostaje: 600 €</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak złożyć zbiorowe roszczenie dla grupy?
          </h2>

          <p className="text-lg leading-relaxed mb-6">
            Masz dwie opcje: <strong>(A) Jedno zbiorowe roszczenie</strong> (łatwiejsze, szybsze) lub <strong>(B) Osobne reklamacje</strong> każdego pasażera.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">💡 Opcja A: Jedno zbiorowe roszczenie (zalecane dla grup 10+)</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Organizator składa JEDNO pismo</strong> w imieniu całej grupy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Załączasz listę pasażerów + boarding passes</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>LOT rozpatruje RAZEM</strong> (szybciej niż 20 osobnych wniosków)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Wypłata na indywidualne konta</strong> każdego pasażera</span>
              </li>
            </ul>
            <p className="text-blue-700 mt-4 font-semibold">
              ✅ Najlepsza opcja dla grup 10+ pasażerów z jednym PNR.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">💼 Opcja B: Osobne reklamacje każdego pasażera</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-gray-600 font-bold mr-3">•</span>
                <span><strong>Każdy pasażer składa OSOBNE pismo</strong> do LOT</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 font-bold mr-3">•</span>
                <span><strong>20 osób = 20 osobnych reklamacji</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 font-bold mr-3">•</span>
                <span><strong>LOT rozpatruje KAŻDĄ osobno</strong> (dłużej)</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-600 font-bold mr-3">•</span>
                <span><strong>Każdy dostaje wypłatę niezależnie</strong></span>
              </li>
            </ul>
            <p className="text-gray-700 mt-4">
              ℹ️ Dobra opcja dla małych grup (2-5 osób) lub gdy każdy chce samodzielności.
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Procedura zbiorowego roszczenia krok po kroku
          </h2>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-green-900 mb-4">✅ Dla organizatora grupy:</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-green-900">Zbierz dokumenty od WSZYSTKICH pasażerów:</strong>
                  <ul className="text-gray-700 mt-2 space-y-1">
                    <li>• Boarding passes (karty pokładowe) — KAŻDEGO pasażera</li>
                    <li>• Booking confirmation (PNR) — wspólny dla grupy</li>
                    <li>• Lista pasażerów (imię, nazwisko, numer konta do wypłaty)</li>
                    <li>• Potwierdzenie opóźnienia (SMS LOT, screenshot FlightRadar24)</li>
                    <li>• Dowód płatności (jeśli organizator płacił za wszystkich)</li>
                  </ul>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-green-900">Oblicz CAŁKOWITE odszkodowanie:</strong>
                  <p className="text-gray-700 mt-1">
                    ≤1500 km: 250 € × [liczba osób] | 1500-3500 km: 400 € × [liczba osób] | &gt;3500 km: 600 € × [liczba osób]
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-green-900">Wyślij JEDNO zbiorowe roszczenie:</strong>
                  <p className="text-gray-700 mt-1">
                    Email: <a href="mailto:customer.relations@lot.pl" className="text-blue-600 hover:underline">customer.relations@lot.pl</a><br />
                    Temat: <em>"Zbiorowe roszczenie — [PNR] — [liczba] pasażerów — lot [numer] — [data]"</em><br />
                    Treść: <em>"Składam zbiorowe roszczenie w imieniu [liczba] pasażerów + załącznik lista pasażerów + potwierdzenie opóźnienia."</em>
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">4</span>
                <div>
                  <strong className="text-green-900">Oczekuj odpowiedzi LOT (14-30 dni):</strong>
                  <p className="text-gray-700 mt-1">
                    LOT odpowiada szybciej dla grup (14-21 dni). Jeśli brak odpowiedzi po 30 dniach → przypomnienie lub ULC.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">5</span>
                <div>
                  <strong className="text-green-900">Wypłata na indywidualne konta pasażerów:</strong>
                  <p className="text-gray-700 mt-1">
                    LOT wymaga numerów kont od KAŻDEGO pasażera (LOT wymaga numerów kont od każdego). Organizator NIE odbiera za wszystkich.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-3">6</span>
                <div>
                  <strong className="text-green-900">Jeśli LOT odmawia → eskalacja:</strong>
                  <p className="text-gray-700 mt-1">
                    Skarga do ULC lub profesjonalne firmy jak <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ClaimWinger</a> (obsługują roszczenia grupowe).
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              💡 Problem z grupowym roszczeniem?
            </p>
            <p className="text-blue-800 mb-4">
              <strong>ClaimWinger specjalizuje się w roszczeniach grupowych</strong> (10-500+ pasażerów). Zajmują się całą procedurą (dokumenty, negocjacje, eskalacja) i mają 91% skuteczności. Prowizja TYLKO przy sukcesie.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Złóż bezpłatne zgłoszenie grupowe →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Częste problemy z grupowymi rezerwacjami
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Problem 1: LOT oferuje vouchery zamiast pieniędzy</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> LOT proponuje vouchery (bony na przyszłe loty) zamiast gotówki 250-600 € dla grupy.
              </p>
              <p className="text-gray-700">
                <strong>✅ Rozwiązanie:</strong> Odmów voucherów! WE 261/2004 art. 7 gwarantuje PIENIĄDZE (gotówka/przelew). Odpowiedz:<br />
                <em>"Nie akceptujemy voucherów. Żądamy wypłaty odszkodowania 250-600 € ([kwota] na osobę) zgodnie z WE 261. Nie akceptujemy voucherów."</em>
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Problem 2: LOT prosi o pełnomocnictwa od KAŻDEGO pasażera</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> LOT wymaga osobnych pełnomocnictw notarialnych od wszystkich 20 osób (koszt ~100 zł × 20 = 2000 zł!).
              </p>
              <p className="text-gray-700">
                <strong>✅ Rozwiązanie:</strong> To NADMIERNE wymaganie! WE 261 nie wymaga pełnomocnictw. Wyślij:<br />
                <em>"Składam zbiorowe roszczenie jako przedstawiciel grupy. Załączam listę pasażerów + boarding passes. Pełnomocnictwa notarialne są nadmiernym wymaganiem."</em><br />
                Jeśli LOT nadal wymaga → każdy pasażer może złożyć OSOBNĄ reklamację (bez kosztów notarialnych) LUB użyć prostych pełnomocnictw (bez notarialnych) → zgłoś do ULC (nadmierne wymagania formalne).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Problem 3: LOT chce wypłacić JEDNĄ kwotę organizatorowi (zamiast indywidualnych wypłat)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> LOT proponuje 5000 € na konto biura podróży/szkoły (zamiast 20 × 250 € osobno).
              </p>
              <p className="text-gray-700">
                <strong>✅ Rozwiązanie:</strong> Akceptuj TYLKO jeśli organizator rozliczy pasażerów uczciwie (przekaże każdemu 250 €). W przeciwnym razie:<br />
                <em>"Żądamy wypłaty odszkodowania bezpośrednio pasażerom (załączam numery kont). Organizator nie ma prawa zatrzymać odszkodowania."</em><br />
                Alternatywnie: każdy pasażer składa OSOBNĄ reklamację → wypłaty bezpośrednio pasażerom (nie biuru) jeśli pasażerowie złożą reklamacje osobiście.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-red-600 mb-3">❌ Problem 4: Brak boarding passes (np. check-in biletowy przez organizatora)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> Organizator nie rozdał boarding passes (check-in zbiorowy), pasażerowie nie mają dowodu lotu.
              </p>
              <p className="text-gray-700">
                <strong>✅ Rozwiązanie:</strong> Użyj alternatywnych dowodów:<br />
                • Booking confirmation (PNR) + lista pasażerów<br />
                • Potwierdzenie opóźnienia (FlightRadar24, SMS LOT)<br />
                • Wyciąg z karty (jeśli płaciłeś za bilety)<br />
                LOT nie może odmówić tylko dlatego że brakuje boarding passes. Jeśli odmawia → zgłoś do <a href="https://claimwinger.com/pl" className="text-blue-600 hover:underline">ClaimWinger</a> (mają dostęp do baz danych PNR).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przykłady rzeczywistych spraw grupowych
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 1: Wycieczka szkolna 35 uczniów (8 750 €)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> Lot WAW→BCN (1667 km) opóźniony 5h. Grupa 35 uczniów + 3 nauczycieli.<br />
                <strong>Kwota:</strong> 35 × 250 € = 8 750 €
              </p>
              <p className="text-gray-700">
                <strong>🎯 Rozwiązanie:</strong> Nauczyciel złożył zbiorowe roszczenie (lista uczniów + boarding passes). LOT wypłacił 8 750 € w 18 dni na konto szkoły. Szkoła rozliczyła rodziców.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 2: Delegacja firmowa 12 osób (4 800 €)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> Lot WAW→FRA (860 km) odwołany. Grupa 12 pracowników na konferencję.<br />
                <strong>Kwota:</strong> 12 × 400 € = 4 800 € (lot UE w UE, 1500-3500 km)
              </p>
              <p className="text-gray-700">
                <strong>🎯 Rozwiązanie:</strong> HR złożył roszczenie w imieniu firmy. LOT początkowo oferował vouchery → HR odmówił → LOT wypłacił gotówkę po 21 dniach. Firma przekazała pieniądze pracownikom.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-600 mb-3">✅ Sprawa 3: Pielgrzymka 85 osób (51 000 €!)</h3>
              <p className="text-gray-700 mb-3">
                <strong>Sytuacja:</strong> Lot WAW→JFK (6844 km) opóźniony 4h. Grupa pielgrzymkowa 85 osób.<br />
                <strong>Kwota:</strong> 85 × 600 € = 51 000 €
              </p>
              <p className="text-gray-700">
                <strong>🎯 Rozwiązanie:</strong> Organizator zgłosił do ClaimWinger (LOT odmówił "nadzwyczajne okoliczności"). ClaimWinger wyegzekwował pełną kwotę 51 000 € w 4 miesiące (prowizja 25% = 12 750 €, netto dla grupy 38 250 €).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kiedy warto zgłosić sprawę do ClaimWinger?
          </h2>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">💡 Zalecane dla grup 10+ pasażerów gdy:</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>LOT odmówił wypłaty</strong> (nadzwyczajne okoliczności, techniczne problemy)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>LOT oferuje vouchery</strong> zamiast pieniędzy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>LOT nie odpowiada</strong> po 30 dniach od reklamacji</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Chcesz uniknąć biurokracji</strong> (ClaimWinger załatwi wszystko)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 font-bold mr-3">✓</span>
                <span><strong>Grupa zagraniczna</strong> (ClaimWinger obsługuje 40+ języków)</span>
              </li>
            </ul>
            <p className="text-blue-700 mt-4 font-semibold">
              Prowizja: 25-30% (TYLKO przy sukcesie). 91% skuteczności.
            </p>
            <a
              href="https://claimwinger.com/pl"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
            >
              Sprawdź roszczenie grupowe →
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            FAQ — Najczęściej zadawane pytania
          </h2>

          <div className="space-y-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Czy dzieci również dostają odszkodowanie?</h3>
              <p className="text-gray-700">
                <strong>TAK!</strong> Każde dziecko (nawet niemowlę 0+) ma OSOBISTE prawo do pełnej kwoty odszkodowania 250-600 € zgodnie z WE 261/2004 art. 3.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Kto może być organizatorem roszczenia grupowego?</h3>
              <p className="text-gray-700">
                Dowolna osoba z grupy: <strong>nauczyciel, przewodnik, HR, członek rodziny</strong>. Nie potrzeba formalnego umocowania (chyba że LOT wymaga pełnomocnictw — wtedy użyj prostych pełnomocnictw, nie notarialnych).
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Czy można połączyć różne grupy PNR w jedno roszczenie?</h3>
              <p className="text-gray-700">
                <strong>NIE zalecane.</strong> Każdy PNR = osobne roszczenie. Jeśli 2 rodziny mają osobne PNR (nawet na tym samym locie) → złóż 2 osobne roszczenia. LOT łatwiej rozpatruje jednolite PNR.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Ile czasu ma LOT na wypłatę odszkodowania grupowego?</h3>
              <p className="text-gray-700">
                <strong>14-30 dni</strong> (grupy przetwarzane szybciej niż indywidualne roszczenia). Jeśli brak wypłaty po 30 dniach → przypomnienie lub eskalacja do ULC/ClaimWinger.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Co jeśli niektórzy pasażerowie nie chcą ubiegać się o odszkodowanie?</h3>
              <p className="text-gray-700">
                <strong>Nie ma problemu!</strong> Złóż roszczenie TYLKO dla tych którzy chcą. Przykład: grupa 20 osób, 15 chce odszkodowania → złóż roszczenie za 15 osób (3 750 €). Pozostałych 5 nie musisz uwzględniać.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">❓ Czy biuro podróży może zatrzymać odszkodowanie dla siebie?</h3>
              <p className="text-gray-700">
                <strong>NIE!</strong> Odszkodowanie przysługuje PASAŻEROM (osobom które leciały), nie organizatorowi. Jeśli biuro zatrzymało pieniądze → zgłoś do ULC (art. 7 WE 261) lub każdy pasażer składa OSOBNĄ reklamację (wypłata bezpośrednio na ich konta).
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
            <p className="text-lg font-semibold text-green-900 mb-2">
              ✅ Podsumowanie: Grupowa rezerwacja LOT
            </p>
            <ul className="text-green-800 space-y-2">
              <li>• <strong>Każdy pasażer dostaje PEŁNĄ kwotę</strong> odszkodowania 250-600 € (nie dzielona)</li>
              <li>• <strong>Zbiorowe roszczenie = łatwiejsze</strong> dla grup 10+ (jedno pismo, szybsza odpowiedź)</li>
              <li>• <strong>LOT wypłaca na indywidualne konta</strong> pasażerów (nie organizatora)</li>
              <li>• <strong>Vouchery? Odmów!</strong> WE 261 gwarantuje PIENIĄDZE</li>
              <li>• <strong>Problem z LOT?</strong> ClaimWinger (91% skuteczności, 25% prowizja TYLKO przy sukcesie)</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-semibold text-blue-900 mb-2">
              🚀 Gotowy złożyć roszczenie grupowe?
            </p>
            <p className="text-blue-800 mb-4">
              ClaimWinger obsługuje grupy 10-500+ pasażerów. Załatwią całą procedurę (dokumenty, negocjacje, eskalacja) za prowizję TYLKO przy sukcesie. 91% skuteczności.
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
                  "name": "Czy każdy pasażer z grupowej rezerwacji LOT dostaje odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK! Każdy pasażer ma OSOBNE prawo do pełnej kwoty odszkodowania 250-600 € zgodnie z WE 261/2004 art. 7. Nie dzielicie jednej kwoty - każdy dostaje pełną kwotę zależną od odległości lotu."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Czy dzieci również dostają odszkodowanie?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "TAK! Każde dziecko (nawet niemowlę 0+) ma OSOBISTE prawo do pełnej kwoty odszkodowania 250-600 € zgodnie z WE 261/2004 art. 3."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Jak złożyć zbiorowe roszczenie dla grupy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Organizator składa JEDNO pismo do customer.relations@lot.pl załączając: listę pasażerów, boarding passes wszystkich, booking confirmation (PNR), potwierdzenie opóźnienia. LOT rozpatruje razem (szybciej) i wypłaca na indywidualne konta każdego pasażera."
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