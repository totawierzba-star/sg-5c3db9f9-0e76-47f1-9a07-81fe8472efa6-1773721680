import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { Calendar, Clock, AlertCircle, CheckCircle, Plane, Users, TrendingUp } from "lucide-react";

export default function LotniskoGdanskOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Lotnisko Gdańsk Rębiechowo — odszkodowanie za opóźniony lot [2025]"
        description="Twój lot z Gdańska jest opóźniony lub odwołany? Sprawdź jak uzyskać 250-600 € odszkodowania. Wizz Air, Ryanair, LOT - kompletny przewodnik."
        canonicalUrl="https://lotproblem.pl/blog/lotnisko-gdansk-odszkodowanie"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mb-4 inline-block">
            ← Powrót do bloga
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Lotnisko Gdańsk Rębiechowo — odszkodowanie za opóźniony lot [2025]
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>1 marca 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>9 min czytania</span>
            </div>
            <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              Lotniska
            </div>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-gray-800 dark:text-gray-200 font-semibold mb-2">
                  Twój lot z Gdańska jest opóźniony lub odwołany?
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Możesz mieć prawo do <strong>250-600 € odszkodowania</strong> niezależnie od powodu opóźnienia według rozporządzenia WE 261/2004.
                </p>
                <a
                  href="https://claimwinger.com"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sprawdź bezpłatnie swoje roszczenie →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>O Lotnisku Gdańsk im. Lecha Wałęsy</h2>
          <p>
            <strong>Port Lotniczy Gdańsk im. Lecha Wałęsy (GDN)</strong> to czwarte co do wielkości lotnisko w Polsce, 
            obsługujące rocznie <strong>ponad 6 milionów pasażerów</strong>. Zlokalizowane 12 km od centrum Gdańska, 
            jest główną bramą lotniczą dla Trójmiasta i całego regionu Pomorza.
          </p>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Plane className="w-6 h-6 text-blue-600" />
              Najczęstsze linie lotnicze z Gdańska
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span><strong>Wizz Air</strong> — największy przewoźnik (45%+ ruchu)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span><strong>Ryanair</strong> — drugi co do wielkości (30%+ ruchu)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span><strong>LOT Polish Airlines</strong> — połączenia krajowe i europejskie</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span><strong>Lufthansa</strong> — połączenia do Monachium i Frankfurtu</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span><strong>Norwegian</strong> — kierunki skandynawskie</span>
              </li>
            </ul>
          </div>

          <h2>Kiedy przysługuje odszkodowanie z Lotniska Gdańsk?</h2>
          <p>
            Odszkodowanie przysługuje niezależnie od tego, z którego lotniska rozpoczynasz podróż. 
            <strong>Rozporządzenie WE 261/2004</strong> chroni wszystkich pasażerów startujących z lotnisk UE.
          </p>

          <h3>✅ Warunki odszkodowania:</h3>
          <ul>
            <li><strong>Opóźnienie 3h+</strong> do miejsca docelowego</li>
            <li><strong>Odwołanie lotu</strong> z mniej niż 14 dni wyprzedzeniem</li>
            <li><strong>Odmowa wejścia na pokład</strong> (overbooking)</li>
            <li><strong>Utracona przesiadka</strong> powodująca 3h+ opóźnienie</li>
            <li>Problem <strong>nie</strong> był spowodowany nadzwyczajnymi okolicznościami</li>
          </ul>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg my-8 border border-green-200 dark:border-green-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-600" />
              Kwoty odszkodowania z Gdańska
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Do 1500 km (np. Berlin, Kopenhaga, Oslo)</span>
                <span className="text-2xl font-bold text-green-600">250 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">1500-3500 km (np. Londyn, Barcelona, Ateny)</span>
                <span className="text-2xl font-bold text-blue-600">400 €</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Ponad 3500 km (np. Dubaj, Hurghada)</span>
                <span className="text-2xl font-bold text-purple-600">600 €</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              💡 <strong>Wskazówka:</strong> Jeśli lot był opóźniony o 3-4h (nie więcej), możesz otrzymać 50% kwoty.
            </p>
          </div>

          <h2>Najczęstsze problemy z lotami z Gdańska</h2>

          <h3>🔴 1. Wizz Air — opóźnienia techniczne</h3>
          <p>
            Jako główny przewoźnik z Gdańska, <strong>Wizz Air</strong> odpowiada za większość problemów. 
            Najczęstsze przyczyny:
          </p>
          <ul>
            <li><strong>Problemy techniczne samolotów</strong> — stara flota wymaga częstych napraw</li>
            <li><strong>Brak załogi</strong> — szczególnie w sezonie letnim</li>
            <li><strong>Opóźnienia łańcuchowe</strong> — efekt domina z wcześniejszych lotów</li>
          </ul>
          <p>
            Zobacz szczegóły: <Link href="/blog/odszkodowanie-wizz-air-polska" className="text-blue-600 hover:underline">
            Odszkodowanie Wizz Air z Polski — kompletny przewodnik</Link>.
          </p>

          <h3>🔴 2. Ryanair — sezonowe odwołania</h3>
          <p>
            Ryanair z Gdańska często <strong>odwołuje loty poza sezonem</strong> (październik-marzec), 
            argumentując niskim obłożeniem. To nadal uprawnia do odszkodowania!
          </p>
          <p>
            Przeczytaj: <Link href="/blog/odszkodowanie-ryanair-polska" className="text-blue-600 hover:underline">
            Odszkodowanie Ryanair z Polski — kompletny przewodnik</Link>.
          </p>

          <h3>🔴 3. LOT — problemy z przesiadkami przez Warszawę</h3>
          <p>
            Większość lotów LOT z Gdańska to połączenia przez Warszawę. Problemy:
          </p>
          <ul>
            <li><strong>Utracone przesiadki</strong> — krótki czas na transfer</li>
            <li><strong>Opóźnienia na WAW</strong> wpływające na lot z Gdańska</li>
            <li><strong>Zmiany terminali</strong> w Warszawie</li>
          </ul>
          <p>
            Sprawdź prawa: <Link href="/blog/utracona-przesiadka-odszkodowanie" className="text-blue-600 hover:underline">
            Utracona przesiadka — czy należy się odszkodowanie?</Link>
          </p>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white mb-2">
                  🚨 Co zrobić bezpośrednio na Lotnisku Gdańsk?
                </p>
                <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li><strong>1.</strong> Zgłoś się do stanowiska linii lotniczej i żądaj pisemnego potwierdzenia opóźnienia</li>
                  <li><strong>2.</strong> Rób zdjęcia wyświetlaczy z godzinami odlotu</li>
                  <li><strong>3.</strong> Zachowaj boarding pass i wszystkie pokwitowania</li>
                  <li><strong>4.</strong> Żądaj opieki (posiłki, napoje, hotel jeśli overnight)</li>
                  <li><strong>5.</strong> Zapisz numery lotów i imiona personelu</li>
                </ol>
                <p className="mt-4 text-sm">
                  Kompletny przewodnik: <Link href="/blog/co-zrobic-na-lotnisku-opoznienie" className="text-blue-600 hover:underline font-semibold">
                  Co zrobić na lotnisku gdy lot jest opóźniony?</Link>
                </p>
              </div>
            </div>
          </div>

          <h2>Statystyki Lotniska Gdańsk (2024)</h2>
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-8 h-8 text-blue-600" />
                <div>
                  <p className="text-3xl font-bold text-blue-600">6.1M</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pasażerów rocznie</p>
                </div>
              </div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Plane className="w-8 h-8 text-green-600" />
                <div>
                  <p className="text-3xl font-bold text-green-600">7.2%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Średnie opóźnienia</p>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 italic">
            Źródło: Dane operacyjne Port Lotniczy Gdańsk 2024
          </p>

          <h2>Jak dochodzić odszkodowania z Lotniska Gdańsk?</h2>
          
          <h3>Opcja 1: Samodzielnie</h3>
          <ul>
            <li>Czas: 3-6 miesięcy</li>
            <li>Skuteczność: ~22% (linie często odmawiają)</li>
            <li>Koszt: Twój czas i nerwy</li>
            <li>Wymaga: Pisanie reklamacji, monitorowanie, ewentualnie sąd</li>
          </ul>

          <h3>Opcja 2: Z ClaimWinger (rekomendowane)</h3>
          <ul>
            <li>Czas: 4-8 tygodni</li>
            <li>Skuteczność: <strong>91%</strong></li>
            <li>Koszt: 0 zł z góry, prowizja tylko od wygranej</li>
            <li>Zero wysiłku: Eksperci robią wszystko za Ciebie</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4">💼 Dlaczego pasażerowie z Gdańska wybierają ClaimWinger?</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span><strong>91% skuteczności</strong> — eksperci znają wszystkie triki linii lotniczych</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span><strong>Zero ryzyka</strong> — płacisz tylko jeśli wygrasz</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span><strong>4-8 tygodni</strong> zamiast miesięcy walki</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
                <span><strong>Obsługa w języku polskim</strong> — rozumiemy lokalne realia</span>
              </li>
            </ul>
            <a
              href="https://claimwinger.com"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sprawdź bezpłatnie swoje roszczenie z Gdańska →
            </a>
          </div>

          <h2>Najczęściej zadawane pytania (FAQ)</h2>

          <div className="space-y-6 my-8">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Czy każdy lot z Gdańska jest objęty WE 261/2004?</h3>
              <p>
                Tak, wszystkie loty startujące z Lotniska Gdańsk (niezależnie od linii) są objęte ochroną 
                rozporządzenia WE 261/2004, nawet jeśli lecisz linią spoza UE.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Ile czasu mam na zgłoszenie roszczenia z Gdańska?</h3>
              <p>
                W Polsce termin wynosi <strong>6 lat</strong> od daty lotu. Jednak im szybciej zgłosisz, 
                tym łatwiej jest udowodnić roszczenie.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Co jeśli Wizz Air odmówił wypłaty?</h3>
              <p>
                <strong>Nie rezygnuj!</strong> 78% pasażerów którzy otrzymali odmowę i zgłosili się do ClaimWinger 
                ostatecznie wygrało sprawę. Wizz Air często odmawia bezpodstawnie.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Czy lot z przesiadką przez Warszawę to problem?</h3>
              <p>
                Jeśli masz <strong>jedną rezerwację</strong> (Gdańsk → Warszawa → dalej), utrata przesiadki 
                uprawnia do odszkodowania jeśli końcowe opóźnienie to 3h+. Zobacz: <Link href="/blog/utracona-przesiadka-odszkodowanie" className="text-blue-600 hover:underline">
                Utracona przesiadka — odszkodowanie</Link>.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Czy loty sezonowe (wakacyjne) też są objęte?</h3>
              <p>
                <strong>TAK!</strong> Loty czarterowe i sezonowe również podlegają WE 261/2004, jeśli startują z UE.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-bold text-lg mb-2">Co jeśli pogoda była zła?</h3>
              <p>
                Tylko <strong>ekstremalne</strong> warunki pogodowe (huragan, śnieżyca zamykająca lotnisko) zwalniają 
                linię. Zwykły deszcz, mgła czy wiatr <strong>NIE</strong> są wymówką!
              </p>
            </div>
          </div>

          <h2>Powiązane artykuły</h2>
          <div className="grid md:grid-cols-2 gap-4 my-8">
            <Link href="/blog/odszkodowanie-wizz-air-polska" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2">Odszkodowanie Wizz Air z Polski</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Główny przewoźnik z Gdańska</p>
            </Link>
            <Link href="/blog/odszkodowanie-ryanair-polska" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2">Odszkodowanie Ryanair z Polski</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Drugi największy przewoźnik</p>
            </Link>
            <Link href="/blog/utracona-przesiadka-odszkodowanie" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2">Utracona przesiadka — odszkodowanie</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Loty przez Warszawę</p>
            </Link>
            <Link href="/blog/co-zrobic-na-lotnisku-opoznienie" className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 transition-colors">
              <h3 className="font-bold text-lg mb-2">Co zrobić na lotnisku?</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Praktyczny checklist</p>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl my-12 border-2 border-green-200 dark:border-green-800">
            <h2 className="text-2xl font-bold mb-4">🎯 Gotowy odzyskać swoje pieniądze?</h2>
            <p className="text-lg mb-6">
              Nie trać czasu na walkę z linią lotniczą. <strong>91% pasażerów z Gdańska</strong> którzy 
              korzystają z ClaimWinger otrzymuje pełne odszkodowanie w ciągu 4-8 tygodni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://claimwinger.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sprawdź bezpłatnie swoje roszczenie →
              </a>
              <Link
                href="/blog"
                className="inline-block bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 px-8 py-4 rounded-lg font-bold text-center transition-colors"
              >
                Więcej artykułów
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium">
              ← Powrót do bloga
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
