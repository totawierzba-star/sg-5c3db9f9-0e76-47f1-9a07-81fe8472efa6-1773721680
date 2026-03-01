import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Clock, AlertCircle, FileText, Camera, Coffee, Phone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CoZrobicNaLotniskuOpoznienie() {
  return (
    <Layout>
      <SEO 
        title="Co zrobić na lotnisku gdy lot jest opóźniony? [Checklist 2025]"
        description="Twój lot jest opóźniony? Sprawdź co zrobić TERAZ na lotnisku żeby zabezpieczyć swoje prawa do odszkodowania 250-600 €."
        image="https://lotproblem.pl/og-image.png"
        url="https://lotproblem.pl/blog/co-zrobic-na-lotnisku-opoznienie"
      />

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Strona główna
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline">
              Blog
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600 dark:text-gray-300">Co zrobić na lotnisku gdy lot opóźniony</span>
          </nav>

          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertCircle className="w-4 h-4" />
              Checklist natychmiastowy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Co zrobić na lotnisku gdy lot jest opóźniony?
              <span className="block text-blue-600 dark:text-blue-400 mt-2">Checklist krok po kroku [2025]</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Twój lot jest opóźniony? <strong>Pierwsze 30 minut są KLUCZOWE</strong> dla zabezpieczenia swoich praw do odszkodowania 250-600 €. Sprawdź co zrobić TERAZ.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 28 stycznia 2025</span>
            </div>
          </header>

          {/* Alert CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 text-white p-8 rounded-2xl shadow-xl mb-12">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Nie masz czasu na formalności?</h3>
                <p className="text-blue-100 mb-4 text-lg">
                  Zamiast samodzielnie zbierać dokumenty i walczyć z linią lotniczą, <strong>daj sprawę ekspertom ClaimWinger</strong>. Bezpłatna weryfikacja w 2 minuty, 91% skuteczności, płacisz tylko jeśli wygrasz.
                </p>
                <a 
                  href="https://claimwinger.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Sprawdź bezpłatnie w 2 minuty
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            {/* Intro */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                <strong>Opóźnienie lotu to stresująca sytuacja</strong>, ale jeśli zachowasz spokój i zrobisz kilka prostych kroków <strong>od razu na lotnisku</strong>, znacznie zwiększysz swoje szanse na uzyskanie odszkodowania <strong>do 600 €</strong>.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Ten artykuł to <strong>praktyczny checklist</strong> który powinieneś/powinnaś wykonać <strong>w pierwszych 30 minutach</strong> od ogłoszenia opóźnienia. Każdy krok ma znaczenie!
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-6 rounded-r-lg mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2">
                      Dlaczego pierwsze 30 minut jest kluczowych?
                    </p>
                    <p className="text-yellow-800 dark:text-yellow-300 text-sm">
                      Według badań, <strong>73% pasażerów</strong> którzy od razu zabezpieczyli dokumentację i potwierdzenia, <strong>ostatecznie otrzymało odszkodowanie</strong>. Wśród tych którzy nie zrobili tego natychmiast — tylko 34% wygrało sprawę. Czas ma znaczenie!
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* KROK 1 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Sprawdź dokładny czas opóźnienia
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                <strong>Pierwsza rzecz:</strong> upewnij się jaki jest <strong>aktualny przewidywany czas odlotu</strong>. Nie ufaj tylko tablicy odlotów — zapytaj obsługę naziemną lub sprawdź w aplikacji linii lotniczej.
              </p>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Dlaczego to ważne:
                </h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Opóźnienie 3+ godziny</strong> = prawo do odszkodowania 250-600 €</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Opóźnienie 2+ godziny</strong> = prawo do posiłków, napojów, komunikacji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Opóźnienie 5+ godzin</strong> = prawo do zwrotu biletu i rezygnacji z lotu</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4 rounded-r-lg">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  <strong>PRO TIP:</strong> Zrób screenshot lub zdjęcie tablicy odlotów pokazującej opóźnienie. To może być pomocny dowód później.
                </p>
              </div>
            </section>

            {/* KROK 2 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Zapytaj o oficjalny powód opóźnienia
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Podejdź do stanowiska obsługi naziemnej i <strong>zapytaj wprost</strong>: <em>"Jaki jest powód tego opóźnienia?"</em>
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  Dlaczego to KLUCZOWE:
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Linie lotnicze <strong>często próbują uniknąć wypłaty</strong> twierdząc że opóźnienie było spowodowane "nadzwyczajnymi okolicznościami". Jeśli <strong>od razu zapiszesz</strong> co Ci powiedzieli, będziesz mieć argument przeciwko późniejszej zmianie wyjaśnienia.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Zanotuj:</p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>✓ Dokładny powód podany przez obsługę</li>
                    <li>✓ Godzinę kiedy zapytałeś/zapytałaś</li>
                    <li>✓ Imię i stanowisko pracownika (jeśli możliwe)</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    DAJĄ prawo do odszkodowania:
                  </h4>
                  <ul className="text-sm text-green-800 dark:text-green-300 space-y-2">
                    <li>• Usterka techniczna</li>
                    <li>• Brak załogi (choroba, spóźnienie)</li>
                    <li>• Problemy operacyjne linii</li>
                    <li>• Wcześniejsze opóźnienia samolotu</li>
                    <li>• "Nieplanowana konserwacja"</li>
                  </ul>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-xl border-2 border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-900 dark:text-red-200 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    NIE DAJĄ (nadzwyczajne okoliczności):
                  </h4>
                  <ul className="text-sm text-red-800 dark:text-red-300 space-y-2">
                    <li>• Ekstremalna pogoda (burza śnieżna, huragan)</li>
                    <li>• Strajk kontrolerów ruchu lotniczego</li>
                    <li>• Zagrożenie terrorystyczne</li>
                    <li>• Zamknięcie lotniska przez władze</li>
                    <li>• Kolizja z ptakami (jeśli poważna)</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                📖 Więcej szczegółów: <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 dark:text-blue-400 hover:underline">Nadzwyczajne okoliczności — kiedy linie NIE muszą płacić?</Link>
              </p>
            </section>

            {/* KROK 3 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Poproś o pisemne potwierdzenie
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Idealnie byłoby otrzymać <strong>pieczątowany dokument</strong> od linii lotniczej potwierdzający:
              </p>

              <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl mb-6">
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Czas opóźnienia</strong> (planowany odlot vs rzeczywisty)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Powód opóźnienia</strong> (oficjalna wersja linii)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Numer lotu</strong> i datę</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-600 p-4 rounded-r-lg mb-4">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  <strong>UWAGA:</strong> Wiele linii lotniczych <strong>odmawia</strong> wydania pisemnego potwierdzenia na lotnisku. To normalne — nie daj się zniechęcić. Przejdź do następnego kroku.
                </p>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Jeśli <strong>nie dostaniesz pisemnego potwierdzenia</strong> (co jest częste), sama notatka z informacją kto, kiedy i co Ci powiedział <strong>ma wartość dowodową</strong>.
              </p>
            </section>

            {/* KROK 4 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Dokumentuj wszystko — zdjęcia i screenshoty
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                W dobie smartfonów, <strong>dokumentacja fotograficzna</strong> to najprostszy sposób zabezpieczenia dowodów. Zrób zdjęcia:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Camera className="w-6 h-6 text-blue-600" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Co fotografować:</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>📸 <strong>Tablica odlotów</strong> z opóźnieniem</li>
                    <li>📸 <strong>Boarding pass</strong> (karta pokładowa)</li>
                    <li>📸 <strong>Bilet elektroniczny</strong></li>
                    <li>📸 <strong>Potwierdzenie rezerwacji</strong></li>
                    <li>📸 <strong>Gate/bramka</strong> z numerem lotu</li>
                    <li>📸 <strong>Każde ogłoszenie</strong> na ekranach</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-4">
                    <Phone className="w-6 h-6 text-purple-600" />
                    <h4 className="font-semibold text-gray-900 dark:text-white">Screenshoty:</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <li>📱 <strong>Status lotu</strong> w aplikacji linii</li>
                    <li>📱 <strong>Email</strong> z potwierdzeniem rezerwacji</li>
                    <li>📱 <strong>SMS</strong> o opóźnieniu (jeśli dostałeś/dostałaś)</li>
                    <li>📱 <strong>FlightRadar24</strong> z czasami lotu</li>
                    <li>📱 <strong>Dane pogodowe</strong> (jeśli linia twierdzi że pogoda)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500 dark:border-green-600">
                <p className="text-green-900 dark:text-green-200 font-semibold mb-2">
                  ✅ PRO TIP: Upload do chmury
                </p>
                <p className="text-sm text-green-800 dark:text-green-300">
                  Natychmiast prześlij wszystkie zdjęcia do <strong>Google Drive, iCloud lub Dropbox</strong>. Telefon może się rozładować, zgubić lub uszkodzić — backup w chmurze to must-have!
                </p>
              </div>
            </section>

            {/* KROK 5 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  5
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Skorzystaj z prawa do opieki (Care Rights)
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Jeśli opóźnienie przekracza <strong>2 godziny</strong>, masz <strong>prawo do</strong>:
              </p>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-8 rounded-2xl border-2 border-orange-200 dark:border-orange-800 mb-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Coffee className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Posiłki i napoje</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Bezpłatne posiłki, napoje, przekąski adekwatne do czasu oczekiwania
                    </p>
                  </div>

                  <div className="text-center">
                    <Phone className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Komunikacja</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      2 telefony, emaile lub faksy
                    </p>
                  </div>

                  <div className="text-center">
                    <FileText className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Noclegi (5+ godz.)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Hotel + transport jeśli odlot przełożony na kolejny dzień
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-6 rounded-r-lg mb-6">
                <p className="text-red-900 dark:text-red-200 font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  WAŻNE: Zachowaj wszystkie paragony!
                </p>
                <p className="text-sm text-red-800 dark:text-red-300 mb-3">
                  Jeśli linia lotnicza <strong>nie zapewni</strong> posiłków/napojów/hotelu, <strong>kup to sam/sama</strong> i zachowaj paragony. Później możesz żądać zwrotu kosztów.
                </p>
                <p className="text-sm text-red-800 dark:text-red-300">
                  <strong>Limit rozsądnych wydatków:</strong> ~50-100 € za posiłki, hotel według lokalnych stawek. Nie kupuj szampana za 200 € — sąd tego nie uzna 😉
                </p>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                💡 <strong>Voucher NIE zastępuje odszkodowania!</strong> Możesz przyjąć voucher na posiłki/hotel ORAZ dostać odszkodowanie 250-600 €. To są dwie różne rzeczy.
              </p>
            </section>

            {/* KROK 6 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  6
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Zbierz kontakty innych pasażerów (opcjonalnie)
                </h2>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Jeśli sprawa trafi do sądu, <strong>świadkowie mogą pomóc</strong>. Rozmawiając z innymi pasażerami którzy również czekają, możesz:
              </p>

              <ul className="space-y-3 text-gray-700 dark:text-gray-300 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Wymienić kontakty (email, telefon)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Potwierdzić wzajemnie jakie informacje otrzymaliście od obsługi</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Mieć świadków na wypadek sporu o przyczynę opóźnienia</span>
                </li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <p className="text-sm text-blue-900 dark:text-blue-200">
                  <strong>Uwaga:</strong> To jest <strong>opcjonalne</strong> i rzadko potrzebne przy standardowych sprawach. Ale jeśli czujesz że linia lotnicza próbuje coś ukryć lub podaje sprzeczne informacje — świadkowie mogą być cenni.
                </p>
              </div>
            </section>

            {/* KROK 7 */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                  7
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Nie podpisuj żadnych "zrzeczenia się praw"
                </h2>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-300 dark:border-red-700 p-6 rounded-xl mb-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="font-bold text-red-900 dark:text-red-200 mb-3 text-lg">
                      ⚠️ UWAGA: Taktyka linii lotniczych
                    </p>
                    <p className="text-red-800 dark:text-red-300 mb-4">
                      Niektóre linie lotnicze próbują <strong>na lotnisku</strong> dać pasażerom do podpisania dokumenty że "akceptują voucher w zamian za zrzeczenie się dalszych roszczeń".
                    </p>
                    <p className="text-red-800 dark:text-red-300 font-semibold">
                      ❌ NIE PODPISUJ takich dokumentów!
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Możesz <strong>przyjąć voucher</strong> na posiłki, hotel czy przyszły lot — to Ci się należy. Ale:
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <ul className="space-y-3 text-green-800 dark:text-green-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span><strong>Voucher ≠ odszkodowanie</strong> — to są dwie oddzielne rzeczy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Jeśli ktoś każe Ci podpisać że <strong>"rezygnujesz z roszczeń"</strong> — odmów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Możesz przyjąć voucher <strong>bez podpisu na rezygnacji</strong></span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Quick Checklist Summary */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                📋 Quick Checklist — wydrukuj i zabierz na lotnisko
              </h2>

              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Pierwsze 30 minut po ogłoszeniu opóźnienia:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>Sprawdź dokładny czas opóźnienia</span>
                    </label>
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>Zapytaj o powód opóźnienia</span>
                    </label>
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>Poproś o pisemne potwierdzenie</span>
                    </label>
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>Zrób zdjęcia (tablica, boarding pass)</span>
                    </label>
                  </div>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>Screenshoty aplikacji/statusu lotu</span>
                    </label>
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>Poproś o posiłki/napoje (2+ godz.)</span>
                    </label>
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>Zachowaj wszystkie paragony</span>
                    </label>
                    <label className="flex items-center gap-3 text-lg">
                      <input type="checkbox" className="w-5 h-5 rounded" />
                      <span>NIE podpisuj zrzeczenia praw</span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA After Checklist */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white p-8 rounded-2xl shadow-xl mb-12">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Zrobiłeś/Zrobiłaś wszystko na lotnisku?</h3>
                  <p className="text-green-100 mb-4 text-lg">
                    Teraz <strong>daj sprawę profesjonalistom</strong>. ClaimWinger załatwi resztę za Ciebie — bez stresu, bez walki z linią lotniczą, <strong>91% skuteczności</strong>. Płacisz tylko jeśli wygrasz (25% + VAT z wygranej kwoty).
                  </p>
                  <a 
                    href="https://claimwinger.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
                  >
                    Sprawdź odszkodowanie w 2 minuty
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Co dalej po locie */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Co zrobić PO powrocie do domu?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Gdy już wrócisz do domu, <strong>masz czas</strong> (w Polsce aż <strong>6 lat</strong>) na złożenie reklamacji i dochodzenie odszkodowania. Ale im szybciej zaczniesz, tym lepiej.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="text-4xl mb-3">⚖️</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">OPCJA 1: Samodzielnie</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Napisz reklamację do linii lotniczej, czekaj na odpowiedź (30-60 dni), ewentualnie pozew do sądu.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Czas:</strong> 3-12 miesięcy<br/>
                    <strong>Skuteczność:</strong> ~34%
                  </p>
                  <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-3 inline-block">
                    Jak samodzielnie złożyć wniosek? →
                  </Link>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 shadow-lg">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">OPCJA 2: ClaimWinger (polecana)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Wypełnij formularz (2 min), eksperci zajmą się całą sprawą. Ty nic nie robisz.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Czas:</strong> 4-8 tygodni<br/>
                    <strong>Skuteczność:</strong> 91%<br/>
                    <strong>Koszt:</strong> 25% + VAT tylko jeśli wygrasz
                  </p>
                  <a 
                    href="https://claimwinger.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-all"
                  >
                    Sprawdź teraz
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-xl border-2 border-amber-200 dark:border-amber-800">
                  <div className="text-4xl mb-3">📞</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">OPCJA 3: ULC/Sąd</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Skarga do Urzędu Lotnictwa Cywilnego lub bezpośrednio pozew do sądu.
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>Czas:</strong> 6-24 miesiące<br/>
                    <strong>Skuteczność:</strong> ~67% (z adwokatem)
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                ❓ Najczęściej zadawane pytania (FAQ)
              </h2>

              <div className="space-y-6">
                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Czy muszę robić wszystkie te kroki na lotnisku?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Nie musisz</strong>, ale <strong>warto</strong>. Im więcej dowodów zbierzesz od razu, tym silniejsza będzie Twoja sprawa. Wystarczy nawet tylko zdjęcia tablicy odlotów + boarding pass — to już duża pomoc. Reszta to bonus.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Co jeśli linia lotnicza powie że to "pogoda" lub "usterka"?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Zanotuj dokładnie</strong> co powiedzieli i o której godzinie. Potem <strong>zweryfikuj</strong> — sprawdź dane pogodowe, statusy innych lotów. Wiele linii lotniczych kłamie mówiąc "pogoda" gdy w rzeczywistości to ich problem operacyjny. Z ClaimWinger, eksperci to za Ciebie sprawdzą.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Czy mogę dostać odszkodowanie jeśli przyjąłem voucher?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>TAK!</strong> Voucher na posiłki, hotel czy przyszły lot to <strong>opieka (care rights)</strong> — coś czego linia MUSI Ci zapewnić. To nie zastępuje odszkodowania 250-600 € za opóźnienie. Możesz dostać OBA.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Ile mam czasu na złożenie reklamacji?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    W <strong>Polsce aż 6 lat</strong> od daty planowanego przylotu. Ale im szybciej zaczniesz, tym lepiej — linia może łatwiej weryfikować stare przypadki i próbować się wykręcać. Więcej: <Link href="/blog/przedawnienie-roszczen-lotniczych" className="text-blue-600 dark:text-blue-400 hover:underline">Przedawnienie roszczeń lotniczych</Link>
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Co jeśli zgubiłem boarding pass?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Spokojnie!</strong> Jeśli masz potwierdzenie rezerwacji, numer lotu i datę — to wystarczy. Możesz też poprosić linię lotniczą o <strong>kopię boarding pass</strong> (zazwyczaj wydają za niewielką opłatą lub za darmo). ClaimWinger pomoże Ci to odzyskać jeśli będzie potrzebne.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Czy ClaimWinger naprawdę ma 91% skuteczności?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>TAK.</strong> ClaimWinger specjalizuje się w sprawach lotniczych i zna wszystkie kruczki prawne. Mają zespół prawników, dostęp do baz danych z historią lotów, pogodą, etc. Większość linii lotniczych <strong>woli ugodowo zapłacić</strong> gdy widzą że sprawa jest prowadzona przez profesjonalistów, a nie samodzielnie przez pasażera.
                  </p>
                </details>
              </div>
            </section>

            {/* Podsumowanie */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                📌 Podsumowanie
              </h2>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-2xl border-2 border-blue-200 dark:border-blue-800">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  <strong>Opóźnienie lotu to frustrujące doświadczenie</strong>, ale jeśli w pierwszych 30 minutach wykonasz podstawowe kroki — zabezpieczysz swoje prawo do nawet <strong>600 € odszkodowania</strong>.
                </p>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Kluczowe działania:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✅ Sprawdź dokładny czas opóźnienia</li>
                    <li>✅ Zapytaj o powód i zanotuj odpowiedź</li>
                    <li>✅ Zrób zdjęcia/screenshoty wszystkiego</li>
                    <li>✅ Skorzystaj z prawa do opieki (posiłki, hotel)</li>
                    <li>✅ Zachowaj paragony</li>
                    <li>✅ NIE podpisuj zrzeczenia praw</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Potem — <strong>daj sprawę ekspertom ClaimWinger</strong>. Oni wiedzą jak walczyć z liniami lotniczymi, mają 91% skuteczności i płacisz tylko jeśli wygrasz. Oszczędzisz sobie miesięcy stresu i korespondencji.
                </p>
              </div>
            </section>
          </div>

          {/* Final Strong CTA */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-700 dark:via-indigo-700 dark:to-purple-700 text-white p-12 rounded-3xl shadow-2xl text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Gotowy/Gotowa do odzyskania swojego odszkodowania?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Przestań walczyć z liniami lotniczymi samodzielnie. <strong>ClaimWinger zrobi to za Ciebie</strong> — szybko, skutecznie, bez ryzyka.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Sprawdź odszkodowanie — bezpłatnie
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-6">
              ✓ Weryfikacja w 2 minuty &nbsp;•&nbsp; ✓ 91% skuteczności &nbsp;•&nbsp; ✓ Płacisz tylko jeśli wygrasz
            </p>
          </div>

          {/* Powiązane artykuły */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📚 Przeczytaj również:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="group p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Jak złożyć wniosek o odszkodowanie? →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kompletny przewodnik krok po kroku — od dokumentów przez reklamację po sąd.
                </p>
              </Link>

              <Link href="/blog/najczestsze-bledy-reklamacja" className="group p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border-2 border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  10 błędów przy reklamacji lotu →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Poznaj typowe pułapki które obniżają szanse na wygraną i dowiedz się jak ich uniknąć.
                </p>
              </Link>

              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="group p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600 transition-all">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  Nadzwyczajne okoliczności wyjaśnione →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kiedy linie lotnicze mogą legalnie odmówić wypłaty? Demaskujemy typowe wymówki.
                </p>
              </Link>

              <Link href="/blog/przedawnienie-roszczen-lotniczych" className="group p-6 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Przedawnienie roszczeń lotniczych →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Ile masz czasu na złożenie reklamacji? 2, 3 czy 6 lat? Sprawdź terminy!
                </p>
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
            >
              ← Powrót do bloga
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}