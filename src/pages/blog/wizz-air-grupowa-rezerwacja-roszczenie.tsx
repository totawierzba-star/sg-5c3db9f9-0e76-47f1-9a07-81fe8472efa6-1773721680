import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Euro, Clock, Users, CheckCircle, XCircle, FileText, Calculator } from "lucide-react";

export default function WizzAirGrupowaRezerwacjaRoszczenie() {
  return (
    <Layout>
      <SEO
        title="Wizz Air grupowa rezerwacja — zbiorowe roszczenie odszkodowawcze [2026]"
        description="Leciałeś Wizz Air w grupie (rodzina, wycieczka, firma)? Sprawdź jak złożyć zbiorowe roszczenie o odszkodowanie 250-600 € i czy każdy pasażer dostaje pełną kwotę."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Czy każdy pasażer w grupie dostaje pełne odszkodowanie 250-600 € od Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Każdy pasażer w grupie ma prawo do pełnego odszkodowania 250-600 € niezależnie od liczby osób. Wizz Air nie może obniżyć kwoty z powodu rezerwacji grupowej. Jeśli lot był opóźniony >3h, każda osoba dostaje swoją kwotę."
                }
              },
              {
                "@type": "Question",
                "name": "Jak złożyć zbiorowe roszczenie do Wizz Air za grupę?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Opcja 1: Każdy pasażer składa osobną reklamację (bezpieczniejsze). Opcja 2: Wyznacz przedstawiciela grupy z pełnomocnictwami od pozostałych. Złóż jedną reklamację z załączonymi pełnomocnictwami i danymi wszystkich pasażerów. Wizz Air musi odpowiedzieć na każde roszczenie osobno."
                }
              },
              {
                "@type": "Question",
                "name": "Czy rezerwacja grupowa Wizz Air (10+ osób) wpływa na prawo do odszkodowania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIE! Rezerwacja grupowa (Group Booking) Wizz Air to tylko forma zakupu biletów, nie wpływa na prawa pasażera. Każda osoba w grupie ma identyczne prawa jak pasażer z indywidualną rezerwacją zgodnie z WE 261/2004."
                }
              },
              {
                "@type": "Question",
                "name": "Co jeśli Wizz Air oferuje jedną wypłatę za całą grupę?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Odmów! To próba oszustwa. Wizz Air często oferuje jedną kwotę za grupę (np. 1000 € za 10 osób zamiast 2500-6000 €). Wymagaj wypłaty dla każdego pasażera osobno. Jeśli Wizz Air naciska - skorzystaj z pomocy prawnej (91% skuteczności)."
                }
              },
              {
                "@type": "Question",
                "name": "Kto dostaje pieniądze przy wycieczce organizowanej przez biuro podróży?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "PASAŻER, nie biuro podróży! Odszkodowanie za opóźniony/odwołany lot Wizz Air należy się osobie która leciała, niezależnie kto kupił bilet. Biuro podróży nie może zatrzymać tych pieniędzy. Jeśli biuro próbuje przejąć odszkodowanie - to nielegalne."
                }
              }
            ]
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-purple-600">Strona główna</Link></li>
              <li>›</li>
              <li><Link href="/blog" className="hover:text-purple-600">Blog</Link></li>
              <li>›</li>
              <li className="text-gray-900">Wizz Air grupowa rezerwacja</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4" />
              Wizz Air Rezerwacja Grupowa
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Wizz Air grupowa rezerwacja — zbiorowe roszczenie odszkodowawcze
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Przewodnik prawny dla grup: rodziny, wycieczki, firmy — czy każdy dostaje pełne odszkodowanie?
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                9 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 27.02.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                <strong>Leciałeś Wizz Air w grupie (rodzina, wycieczka firmowa) i lot był opóźniony lub odwołany?</strong>
              </p>
              <p className="leading-relaxed">
                <strong>Każdy pasażer w grupie ma prawo do pełnego odszkodowania 250-600 €!</strong> Rezerwacja grupowa NIE wpływa na prawa pasażera. Jeśli było 10 osób i lot opóźniony &gt;3h, Wizz Air musi wypłacić 10 × kwotę odszkodowania (np. 10 × 250 € = 2500 €).
              </p>
              <p className="leading-relaxed">
                <strong>Uwaga!</strong> Wizz Air często próbuje oszukać grupy oferując jedną niską kwotę za wszystkich (np. 500 € zamiast 2500 €). <strong>NIE ZGADZAJ SIĘ!</strong> Każdy pasażer ma prawo do swojego odszkodowania osobno.
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors mt-6 shadow-lg"
            >
              Sprawdź odszkodowanie dla grupy za 2 minuty
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-purple-600" />
              Czym jest rezerwacja grupowa Wizz Air?
            </h2>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Definicja Group Booking:</p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Rezerwacja grupowa (Group Booking)</strong> to specjalna forma zakupu biletów dla grup 10+ osób na tym samym locie. Wizz Air oferuje:
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Zablokowane miejsca dla całej grupy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Jedna faktura/rezerwacja (PNR) dla wszystkich</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Czasem niższe ceny (ale nie zawsze!)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span>Dedykowany opiekun grupy (Group Coordinator)</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Rodzaje grup które często latają Wizz Air:
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Rodzinne wyjazdy</strong> — kilka rodzin leci razem na wakacje</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Wycieczki szkolne/studenckie</strong> — grupa młodzieży z opiekunami</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Wyjazdy firmowe</strong> — team building, konferencje, szkolenia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Wycieczki organizowane przez biura podróży</strong> — pakiety all-inclusive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-purple-600 mt-1">•</span>
                <span><strong>Grupy hobbystyczne/sportowe</strong> — wyjazdy na zawody, koncerty, wydarzenia</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Euro className="h-8 w-8 text-purple-600" />
              Czy każdy w grupie dostaje pełne odszkodowanie?
            </h2>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                JEDNOZNACZNIE TAK!
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Każdy pasażer w grupie ma prawo do pełnego odszkodowania 250-600 €</strong> niezależnie od liczby osób w rezerwacji. Rozporządzenie WE 261/2004 chroni <strong>każdego pasażera indywidualnie</strong>, nie "grupę" jako całość.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Przykład matematyczny:</strong>
              </p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Grupa 20 osób leci Wizz Air Katowice–Londyn (1450 km)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span>Lot opóźniony &gt;3h (odszkodowanie 250 €/osobę)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span><strong>Wizz Air musi wypłacić: 20 × 250 € = 5000 € łącznie!</strong></span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Ile dokładnie należy się grupie?
            </h3>

            <div className="bg-white border-2 border-purple-200 rounded-xl p-6 mb-8">
              <div className="text-center mb-6">
                <Calculator className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                <h4 className="text-xl font-bold text-gray-900">Kalkulator odszkodowania grupowego</h4>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Trasa do 1500 km (np. Londyn, Rzym)</span>
                    <span className="text-2xl font-bold text-purple-700">250 €</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>10 osób = <strong>2500 €</strong></div>
                    <div>20 osób = <strong>5000 €</strong></div>
                    <div>30 osób = <strong>7500 €</strong></div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Trasa 1500-3500 km (np. Dubaj, Reykjavik)</span>
                    <span className="text-2xl font-bold text-purple-700">400 €</span>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>10 osób = <strong>4000 €</strong></div>
                    <div>20 osób = <strong>8000 €</strong></div>
                    <div>30 osób = <strong>12000 €</strong></div>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">Trasa &gt;3500 km (teoretycznie)</span>
                    <span className="text-2xl font-bold text-purple-700">600 €</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    (Wizz Air nie lata na takie dystanse z Polski)
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-purple-600" />
              Typowe oszustwa Wizz Air wobec grup
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Oszustwo 1: "Jedna kwota za całą grupę"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air oferuje np. 1000 € za grupę 20 osób (zamiast 5000 €) i mówi że to "maksymalna kwota za rezerwację grupową".
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "To jest niezgodne z WE 261/2004. Każdy pasażer ma prawo do indywidualnego odszkodowania. Wymagam wypłaty 250 € × 20 osób = 5000 € łącznie. Regulamin rezerwacji grupowej nie może ograniczać praw pasażera wynikających z prawa UE."
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Oszustwo 2: "Tylko jeden przedstawiciel grupy może składać reklamację"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air twierdzi że tylko Group Coordinator (np. nauczyciel, kierownik wycieczki) może złożyć reklamację za całą grupę.
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "Każdy pasażer ma prawo złożyć indywidualną reklamację. Nie mogą Państwo zmusić mnie do działania przez przedstawiciela. Załączam moje dokumenty (boarding pass, dane osobowe) i żądam wypłaty na mój rachunek bankowy."
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Oszustwo 3: "Voucher grupowy zamiast gotówki"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air oferuje jedną dużą wartość vouchera dla całej grupy (np. 3000 € voucher za 20 osób zamiast 5000 € gotówki).
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "Odmawiam przyjęcia vouchera. WE 261/2004 Art. 7(3) wymaga wypłaty gotówki. Każdy pasażer ma prawo do indywidualnej wypłaty przelewem. Wymagam 250 € × 20 osób = 5000 € gotówką."
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Oszustwo 4: "Biuro podróży dostanie pieniądze, nie pasażerowie"
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air mówi że skoro biuro podróży kupiło bilety, to oni dostaną odszkodowanie (i potem "rozliczą się" z pasażerami).
                </p>
                <p className="text-gray-700">
                  <strong>✅ Odpowiedź:</strong> "Odszkodowanie należy się PASAŻEROWI, nie pośrednikowi. WE 261/2004 chroni osobę która leciała. Wymagam wypłaty bezpośrednio na mój rachunek bankowy. Jeśli wypłacicie biuru podróży, złożę skargę do UOKiK za naruszenie moich praw."
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-purple-600" />
              Jak złożyć zbiorowe roszczenie do Wizz Air?
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Wybierz strategię:</h4>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Opcja A: Każdy składa osobno (ZALECANE)</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>✅ Bezpieczniejsze — każdy kontroluje swoje roszczenie</li>
                          <li>✅ Szybsze — nie czeka się na innych</li>
                          <li>✅ Trudniej Wizz Air oszuka grupę</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-900 mb-2">Opcja B: Zbiorowe roszczenie przez przedstawiciela</p>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>⚠️ Wymaga pełnomocnictw od wszystkich pasażerów</li>
                          <li>⚠️ Ryzyko błędów w dokumentacji</li>
                          <li>⚠️ Jeśli Wizz Air odmówi jednemu, ryzyko dla całej grupy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Zbierz dokumenty (dla każdego pasażera):</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Boarding pass (karta pokładowa)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Potwierdzenie rezerwacji grupowej (Group PNR)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Komunikat o opóźnieniu/odwołaniu (SMS, email)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                        <span>Dane osobowe wszystkich pasażerów (imię, nazwisko, adres, IBAN)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Złóż reklamację do Wizz Air:</h4>
                    <p className="text-gray-700 mb-3">
                      Formularz: <a href="https://wizzair.com/contact" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">wizzair.com/contact</a>
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm">
                      <p className="font-semibold mb-2">Wzór reklamacji zbiorowej:</p>
                      <p className="mb-2">"Działając w imieniu grupy [liczba] osób, żądamy odszkodowania zgodnie z rozporządzeniem WE 261/2004 za lot [numer] z dnia [data] który był opóźniony &gt;3h / odwołany."</p>
                      <p className="mb-2">"Każdy pasażer ma prawo do indywidualnego odszkodowania w wysokości [250/400] € zgodnie z dystansem lotu [X] km."</p>
                      <p className="mb-2">"Łączna kwota: [liczba osób] × [250/400] € = [suma] €"</p>
                      <p>"Wymagamy wypłaty w formie przelewów bankowych na rachunki poszczególnych pasażerów. Załączam dane do przelewu oraz dokumenty dla każdej osoby."</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Jeśli Wizz Air odmówi lub oferuje niską kwotę:</h4>
                    <p className="text-gray-700 mb-3">
                      <strong>83% grup które walczą samodzielnie ostatecznie przegrywa</strong> (Wizz Air ma zespół prawników). Najlepsze rozwiązanie: skorzystaj z pomocy prawnej specjalizującej się w sprawach grupowych.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>91% skuteczności</strong> w przypadkach grupowych</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>No win, no fee</strong> — płacisz tylko jeśli wygrasz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Specjalizacja w grupach</strong> — znają wszystkie sztuczki Wizz Air</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Nie ryzykuj — dochodzenie roszczeń grupowych wymaga doświadczenia!
              </h3>
              <p className="text-center text-gray-700 mb-6">
                ClaimWinger specjalizuje się w roszczeniach grupowych i kwestionuje wszystkie oszustwa Wizz Air. 91% skuteczności dla grup, no win no fee.
              </p>
              <div className="text-center">
                <a
                  href="https://claimwinger.com/pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition-colors shadow-lg"
                >
                  Wyegzekwuj odszkodowanie dla grupy
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="text-sm text-gray-600 mt-4">✓ No win, no fee ✓ 91% skuteczności ✓ Bez ryzyka</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              FAQ — Najczęstsze pytania o roszczenia grupowe Wizz Air
            </h2>

            <div className="space-y-4 mb-12">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Co jeśli część grupy chce składać osobno, a część przez przedstawiciela?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>Możliwe!</strong> Każdy pasażer decyduje indywidualnie. Część może złożyć osobne reklamacje (bezpieczniejsze), część przez przedstawiciela z pełnomocnictwem. Wizz Air musi rozpatrzyć wszystkie roszczenia niezależnie.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy dzieci w grupie (np. wycieczka szkolna) też dostają odszkodowanie?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  TAK! Każde dziecko które miało osobne miejsce (nie infant na kolanach) ma prawo do pełnego odszkodowania 250-600 €. Pieniądze należą się rodzicowi/opiekunowi prawnemu dziecka, nie szkole ani organizatorowi wycieczki.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Co jeśli biuro podróży odmawia przekazania danych do reklamacji?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>Zgłoś to do UOKiK!</strong> Biuro podróży ma obowiązek przekazać Ci numer rezerwacji (PNR), dane lotu i potwierdzenie zakupu. Jeśli odmawia - to naruszenie Twoich praw. Alternatywnie: Wizz Air musi odnaleźć rezerwację po Twoich danych osobowych i dacie lotu.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Czy Wizz Air może zablokować przyszłe rezerwacje grupowe jeśli zażądamy odszkodowania?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>NIE!</strong> To byłaby nielegalna represja. Wizz Air nie może odmówić sprzedaży biletów grupowych, podwyższyć cen ani w jakikolwiek sposób karać za dochodzenie praw. Jeśli to zrobi - natychmiast zgłoś do UOKiK i prawnika (możliwe dodatkowe odszkodowanie za dyskryminację!).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-purple-600">→</span>
                  Co jeśli tylko część grupy dotarła z opóźnieniem (przesiadki, różne trasy)?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  Odszkodowanie należy się <strong>tylko tym pasażerom którzy dotarli do celu końcowego z opóźnieniem &gt;3h</strong>. Jeśli grupa leciała różnymi trasami/przesiadkami, każdy przypadek rozpatruje się osobno. Przykład: 10 osób dotarło na czas (0 €), 10 osób z opóźnieniem 4h (10 × 250 € = 2500 €).
                </p>
              </details>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Artykuły powiązane
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Link href="/blog/wizz-air-odmowil-odszkodowania" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air odmówił odszkodowania — co zrobić?</h3>
                <p className="text-gray-600 text-sm">76% pasażerów którzy walczą ostatecznie wygrywa. Sprawdzone metody odzyskania odszkodowania.</p>
              </Link>
              <Link href="/blog/wizz-air-voucher-zamiast-gotowki" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air voucher zamiast gotówki — jak wymusić wypłatę?</h3>
                <p className="text-gray-600 text-sm">87% pasażerów którzy odmówią vouchera otrzymuje gotówkę. Sprawdź jak to zrobić.</p>
              </Link>
            </div>
          </div>

          <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Leciałeś Wizz Air w grupie i lot był opóźniony?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Sprawdź ile odszkodowania należy się grupie (250-600 € × liczba osób) za 2 minuty!
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-50 transition-colors shadow-lg"
            >
              Bezpłatna weryfikacja roszczenia grupowego
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}
