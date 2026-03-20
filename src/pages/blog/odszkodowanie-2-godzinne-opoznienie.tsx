import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, AlertCircle, CheckCircle, XCircle, Plane } from "lucide-react";

export default function Odszkodowanie2GodzinneOpoznienie() {
  return (
    <Layout>
      <SEO
        title="Czy mam prawo do odszkodowania za 2-godzinne opóźnienie?"
        description="Sprawdź czy 2-godzinne opóźnienie lotu uprawnia do odszkodowania. Wyjaśniamy zasadę 3 godzin i prawa pasażera."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li><ArrowRight className="h-4 w-4" /></li>
              <li className="text-blue-600 font-medium">Odszkodowanie 2h opóźnienie</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Clock className="h-4 w-4" />
              Prawo pasażera
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Czy przysługuje odszkodowanie za 2-godzinne opóźnienie?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Krótka odpowiedź: NIE, ale przysługują inne prawa
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                5 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 25.02.2025</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <XCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Niestety, <strong>2-godzinne opóźnienie NIE uprawnia do odszkodowania pieniężnego</strong> 
              (250-600 €). Rozporządzenie EU261 wymaga minimum 3 godzin opóźnienia w momencie przylotu.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <div className="text-5xl font-bold mb-2">3 godz.</div>
                <div className="text-sm font-medium opacity-90">Minimalne opóźnienie dla odszkodowania</div>
              </div>
              <p className="text-sm opacity-90 text-center">
                ⚠️ Liczą się 3 godziny opóźnienia w momencie <strong>przylotu</strong>, nie wylotu
              </p>
            </div>
          </div>

          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Zasada 3 godzin – jak to działa?</h2>
            
            <p className="text-gray-700 mb-6">
              Według rozporządzenia EU261, odszkodowanie pieniężne (250-600 €) przysługuje dopiero gdy:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Lot dotarł do miejsca docelowego z <strong>opóźnieniem co najmniej 3 godzin</strong></li>
              <li>Opóźnienie jest mierzone w momencie <strong>otwarcia drzwi samolotu</strong> po lądowaniu</li>
              <li>Opóźnienie nie było spowodowane nadzwyczajnymi okolicznościami</li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-4">Przykład:</h3>
              <div className="space-y-3 text-blue-900 text-sm">
                <p>
                  <strong>Lot planowany:</strong> Wylot 10:00, przylot 12:00<br />
                  <strong>Lot rzeczywisty:</strong> Wylot 11:30, przylot 13:30
                </p>
                <p className="font-bold">
                  Opóźnienie wylotu: 1,5 godziny<br />
                  Opóźnienie przylotu: 1,5 godziny<br />
                  <span className="text-red-600">❌ Brak odszkodowania (poniżej 3h)</span>
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-green-900 mb-4">Przykład z odszkodowaniem:</h3>
              <div className="space-y-3 text-green-900 text-sm">
                <p>
                  <strong>Lot planowany:</strong> Wylot 10:00, przylot 12:00<br />
                  <strong>Lot rzeczywisty:</strong> Wylot 12:30, przylot 15:10
                </p>
                <p className="font-bold">
                  Opóźnienie wylotu: 2,5 godziny<br />
                  Opóźnienie przylotu: 3 godziny 10 minut<br />
                  <span className="text-green-600">✅ Odszkodowanie przysługuje (powyżej 3h)</span>
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Co przysługuje przy 2-godzinnym opóźnieniu?</h2>

            <p className="text-gray-700 mb-6">
              Mimo że nie dostaniesz pieniędzy, <strong>przysługuje Ci prawo do opieki</strong> ze strony linii lotniczej:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  Loty do 1500 km
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Prawo do opieki od <strong>2 godzin</strong> opóźnienia:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Posiłki i napoje</li>
                  <li>• 2 bezpłatne rozmowy telefoniczne</li>
                  <li>• Dostęp do poczty e-mail</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Loty 1500-3500 km
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Prawo do opieki od <strong>3 godzin</strong> opóźnienia:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Posiłki i napoje</li>
                  <li>• 2 bezpłatne rozmowy</li>
                  <li>• Dostęp do e-mail</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  Loty powyżej 3500 km
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  Prawo do opieki od <strong>4 godzin</strong> opóźnienia:
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Posiłki i napoje proporcjonalnie do czasu oczekiwania</li>
                  <li>• 2 bezpłatne rozmowy telefoniczne lub wiadomości e-mail</li>
                  <li>• Nocleg w hotelu (jeśli lot przeniesiony na następny dzień)</li>
                  <li>• Transport między lotniskiem a hotelem</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-yellow-900 mb-2">Ważne!</h3>
                  <p className="text-yellow-800 mb-2">
                    Prawo do opieki (posiłki, napoje) jest <strong>niezależne</strong> od prawa do odszkodowania. 
                    Przysługuje Ci nawet jeśli:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-yellow-800">
                    <li>Opóźnienie było spowodowane nadzwyczajnymi okolicznościami</li>
                    <li>Opóźnienie było krótsze niż 3 godziny (ale dłuższe niż 2h dla krótkich lotów)</li>
                    <li>Linia oferuje lot zastępczy</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Co jeśli pilot "nadrobi" opóźnienie?</h2>

            <p className="text-gray-700 mb-6">
              To częsta sytuacja: lot startuje z 2-godzinnym opóźnieniem, ale dzięki szybszemu lotowi 
              lub korzystnym wiatrom, ostatecznie przylot następuje z opóźnieniem tylko 2 godzin 45 minut.
            </p>

            <div className="bg-red-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-red-900 mb-3">W takim przypadku:</h3>
              <p className="text-red-800 mb-2">
                ❌ <strong>Brak odszkodowania</strong> – opóźnienie przylotu poniżej 3 godzin
              </p>
              <p className="text-red-800 text-sm">
                Liczą się <strong>dokładne godziny i minuty</strong>. Jeśli samolot wylądował o 14:59, 
                a miał być o 12:00, to opóźnienie wynosi 2h 59min – czyli o 1 minutę za mało dla odszkodowania.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kiedy warto walczyć o odszkodowanie mimo 2h?</h2>

            <p className="text-gray-700 mb-6">
              Jeśli jesteś przekonany, że opóźnienie było jednak dłuższe niż 2 godziny, warto sprawdzić:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                <strong>Dokładną godzinę otwarcia drzwi samolotu</strong> (to oficjalny moment przylotu według EU261)
              </li>
              <li>
                <strong>Dane z FlightRadar24</strong> – pokazuje rzeczywiste godziny lądowania
              </li>
              <li>
                <strong>Boarding pass i bilet</strong> – porównaj planowane vs rzeczywiste godziny
              </li>
            </ul>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-3">💡 Wskazówka:</h3>
              <p className="text-blue-800">
                Jeśli opóźnienie było bliskie 3 godzin (np. 2h 50min), zgłoś sprawę do ClaimWinger. 
                Eksperci sprawdzą dokładne dane lotu i ocenią czy jednak nie przekroczyło progu 3 godzin.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy mogę dostać odszkodowanie za 2h 59min opóźnienia?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Niestety nie. Rozporządzenie EU261 wymaga <strong>minimum 3 godzin</strong> opóźnienia 
                  w momencie przylotu. Nawet 2h 59min to za mało.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Co jeśli lot startował z 3h opóźnieniem, ale przyleciał z 2h?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Liczy się opóźnienie w momencie <strong>przylotu</strong>, nie wylotu. Jeśli ostatecznie 
                  samolot dotarł do celu z opóźnieniem poniżej 3 godzin, odszkodowanie nie przysługuje.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy przysługują mi posiłki przy 2-godzinnym opóźnieniu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Dla lotów do 1500 km prawo do opieki (posiłki, napoje) zaczyna się od 2 godzin 
                  opóźnienia. To niezależne od prawa do odszkodowania pieniężnego.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Jak sprawdzić dokładne opóźnienie mojego lotu?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Możesz użyć FlightRadar24.com – wpisz numer lotu i datę, a zobaczysz rzeczywiste 
                  godziny startu i lądowania. Możesz też zwrócić się do ClaimWinger o weryfikację danych lotu.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Czy opóźnienie na lotnisku wyjściowym się liczy?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Tylko jeśli ostatecznie przełożyło się na opóźnienie przylotu o minimum 3 godziny. 
                  Samo siedzenie na lotnisku przez 4 godziny nie wystarczy, jeśli samolot "nadrobił" 
                  czas w powietrzu.
                </p>
              </details>

              <details className="bg-white rounded-xl shadow-md p-6 group">
                <summary className="font-bold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  <span>Co jeśli linia twierdzi że było tylko 2h opóźnienia?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4">
                  Zgłoś sprawę do ClaimWinger – eksperci weryfikują dane lotu z niezależnych źródeł 
                  (FlightRadar, systemy lotniskowe) i mogą udowodnić rzeczywiste opóźnienie.
                </p>
              </details>
            </div>
          </section>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 sm:p-12 text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nie jesteś pewien opóźnienia? Sprawdź teraz
            </h2>
            <p className="text-xl mb-8 opacity-90">
              ClaimWinger zweryfikuje dokładne godziny Twojego lotu i powie czy przysługuje Ci odszkodowanie
            </p>
            <a
              href="https://claimwinger.com/pl/opozniony-lot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
            >
              Sprawdź swój lot
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="text-sm mt-6 opacity-75">
              ✓ Darmowa weryfikacja ✓ Płatność tylko w przypadku sukcesu ✓ Średnio 600 € wypłaty
            </p>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Podsumowanie</h2>
            
            <p className="text-gray-700 mb-6">
              2-godzinne opóźnienie lotu <strong>nie uprawnia do odszkodowania pieniężnego</strong> (250-600 €). 
              Zgodnie z rozporządzeniem EU261, odszkodowanie przysługuje dopiero od 3 godzin opóźnienia 
              w momencie przylotu.
            </p>

            <p className="text-gray-700 mb-6">
              Jednak nawet przy krótszym opóźnieniu przysługuje Ci <strong>prawo do opieki</strong> 
              (posiłki, napoje) – dla lotów do 1500 km już od 2 godzin.
            </p>

            <div className="bg-blue-50 rounded-xl p-6">
              <p className="text-blue-900 mb-0">
                💡 <strong>Wskazówka:</strong> Jeśli nie jesteś pewien dokładnego czasu opóźnienia, 
                zgłoś sprawę do ClaimWinger. Eksperci zweryfikują rzeczywiste dane lotu i ocenią czy 
                jednak nie przekroczył progu 3 godzin.
              </p>
            </div>
          </section>

          <section className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Powiązane artykuły:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/ile-odszkodowania-opozniony-lot" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Clock className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Ile odszkodowania za opóźniony lot</span>
              </Link>
              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Nadzwyczajne okoliczności</span>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Jak złożyć wniosek o odszkodowanie</span>
              </Link>
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Plane className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-900 font-medium">Odszkodowanie LOT Polish Airlines</span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
