import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Plane, Clock, AlertCircle, CheckCircle, XCircle, ArrowRight, FileText, Shield } from "lucide-react";
import Link from "next/link";

export default function UtraconegooPrzesiadkaOdszkodowanie() {
  return (
    <Layout>
      <SEO 
        title="Utracona przesiadka — czy należy się odszkodowanie? [Przewodnik 2025]"
        description="Nie zdążyłeś/Nie zdążyłaś na lot przesiadkowy? Sprawdź czy przysługuje Ci odszkodowanie do 600 € za missed connection."
        image="https://lotproblem.pl/og-image.png"
        url="https://lotproblem.pl/blog/utracona-przesiadka-odszkodowanie"
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
            <span className="text-gray-600 dark:text-gray-300">Utracona przesiadka odszkodowanie</span>
          </nav>

          {/* Header */}
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Plane className="w-4 h-4" />
              Missed Connection
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Utracona przesiadka — czy należy się odszkodowanie?
              <span className="block text-blue-600 dark:text-blue-400 mt-2">Przewodnik kompletny [2025]</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              <strong>Nie zdążyłeś/Nie zdążyłaś na lot przesiadkowy?</strong> To częsty problem — w 2024 roku aż <strong>18% pasażerów</strong> z przesiadkami doświadczyło missed connection. Sprawdź czy przysługuje Ci odszkodowanie <strong>do 600 €</strong>.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                7 min czytania
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
                <h3 className="text-2xl font-bold mb-3">Nie masz czasu walczyć z linią lotniczą?</h3>
                <p className="text-blue-100 mb-4 text-lg">
                  <strong>ClaimWinger ma 89% skuteczności</strong> przy utraconej przesiadce. Bezpłatna weryfikacja w 2 minuty, płacisz tylko jeśli wygrasz (25% + VAT z wygranej kwoty).
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
                <strong>Utracona przesiadka (missed connection)</strong> to sytuacja gdy pierwszy lot opóźnił się na tyle że <strong>nie zdążyłeś/nie zdążyłaś</strong> na kolejny zaplanowany lot w ramach tej samej rezerwacji.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                To bardzo częsty problem — według danych z 2024 roku, <strong>prawie co piąty pasażer</strong> z przesiadkami doświadczył missed connection przynajmniej raz. Dobra wiadomość? <strong>W większości przypadków przysługuje Ci odszkodowanie do 600 €</strong>.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-200 mb-2">
                      Kluczowa zasada WE 261/2004:
                    </p>
                    <p className="text-green-800 dark:text-green-300 text-sm">
                      Jeśli <strong>wszystkie loty były w jednej rezerwacji</strong> i ostateczny przyLOT opóźnił się <strong>o 3+ godziny</strong> z powodu opóźnienia pierwszego lotu — <strong>masz prawo do odszkodowania 250-600 €</strong>, niezależnie od tego że przesiadka była w środku.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kiedy należy się odszkodowanie */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Kiedy należy się odszkodowanie za utraconą przesiadkę?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Kluczowe jest <strong>spełnienie wszystkich 4 warunków</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Jedna rezerwacja</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Wszystkie loty muszą być w jednej rezerwacji.</strong> Jeśli kupiłeś/kupiłaś bilety osobno — nie masz prawa do odszkodowania za missed connection.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-xs text-green-800 dark:text-green-300 font-semibold mb-1">✅ OK:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Warszawa → Frankfurt → Nowy Jork (jeden bilet, PNR: ABC123)</p>
                    <p className="text-xs text-red-800 dark:text-red-300 font-semibold mt-2 mb-1">❌ NIE OK:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Warszawa → Frankfurt (bilet #1) + Frankfurt → Nowy Jork (bilet #2)</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">3+ godziny opóźnienia</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Ostateczny przylot opóźniony o 3+ godziny</strong> w stosunku do pierwotnie planowanego czasu.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-xs text-blue-800 dark:text-blue-300 font-semibold mb-1">Przykład:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Planowany przylot: 15:00<br/>
                      Rzeczywisty przylot: 18:30<br/>
                      <span className="text-green-600 font-semibold">→ 3,5h opóźnienia = ODSZKODOWANIE!</span>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Wina linii lotniczej</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Opóźnienie pierwszego lotu było <strong>z winy linii lotniczej</strong>, a nie nadzwyczajnych okoliczności.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-xs text-green-800 dark:text-green-300 font-semibold mb-1">✅ Wina linii:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Usterka techniczna, brak załogi, problemy operacyjne</p>
                    <p className="text-xs text-red-800 dark:text-red-300 font-semibold mb-1">❌ Nadzwyczajne:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Burza śnieżna, strajk ATC, zagrożenie</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Lot z/do UE lub unijna linia</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Co najmniej jeden z lotów musi być objęty <strong>rozporządzeniem WE 261/2004</strong>.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                    <p className="text-xs text-purple-800 dark:text-purple-300 font-semibold mb-1">✅ Objęte:</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      • Odlot z UE (dowolna linia)<br/>
                      • Przylot do UE (unijna linia)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-600 p-6 rounded-r-lg">
                <p className="font-semibold text-yellow-900 dark:text-yellow-200 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  WAŻNE: Liczy się ostateczny przylot, nie przesiadka!
                </p>
                <p className="text-sm text-yellow-800 dark:text-yellow-300">
                  Nawet jeśli dotarłeś/dotarłaś na przesiadkę z opóźnieniem 5 minut, ale ostateczny przylot był opóźniony o 3+ godziny — <strong>masz prawo do odszkodowania</strong>. Nie ma znaczenia ile czasu straciłeś/straciłaś na przesiadce — liczy się całkowite opóźnienie podróży.
                </p>
              </div>
            </section>

            {/* Ile odszkodowania */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ile wynosi odszkodowanie za utraconą przesiadkę?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Kwota odszkodowania zależy od <strong>całkowitego dystansu podróży</strong> (od pierwszego odlotu do ostatecznego przylotu) i <strong>opóźnienia ostatecznego przylotu</strong>:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-4 text-left font-semibold">Dystans całkowity</th>
                      <th className="p-4 text-left font-semibold">Opóźnienie 3-4h</th>
                      <th className="p-4 text-left font-semibold">Opóźnienie 4h+</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 bg-gray-50 dark:bg-gray-800/50">
                        <div className="font-semibold text-gray-900 dark:text-white">Do 1500 km</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">np. Warszawa → Berlin → Londyn</div>
                      </td>
                      <td className="p-4 text-green-600 dark:text-green-400 font-bold">125 €</td>
                      <td className="p-4 text-green-600 dark:text-green-400 font-bold">250 €</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 bg-gray-50 dark:bg-gray-800/50">
                        <div className="font-semibold text-gray-900 dark:text-white">1500-3500 km</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">np. Kraków → Frankfurt → Madryt</div>
                      </td>
                      <td className="p-4 text-green-600 dark:text-green-400 font-bold">200 €</td>
                      <td className="p-4 text-green-600 dark:text-green-400 font-bold">400 €</td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <td className="p-4 bg-gray-50 dark:bg-gray-800/50">
                        <div className="font-semibold text-gray-900 dark:text-white">Ponad 3500 km</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">np. Warszawa → Frankfurt → Nowy Jork</div>
                      </td>
                      <td className="p-4 text-green-600 dark:text-green-400 font-bold">300 €</td>
                      <td className="p-4 text-green-600 dark:text-green-400 font-bold">600 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl mb-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  Przykłady praktyczne:
                </h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      🛫 Warszawa → Amsterdam → Nowy Jork
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Pierwszy lot opóźniony 2h, nie zdążyłeś na przesiadkę. Ostateczny przylot do NYC opóźniony 5 godzin.
                    </p>
                    <p className="text-lg text-green-600 dark:text-green-400 font-bold">
                      = 600 € odszkodowania (dystans 6,500km, opóźnienie 5h)
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">
                      🛫 Kraków → Frankfurt → Barcelona
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Pierwszy lot opóźniony 1,5h, nie zdążyłaś na przesiadkę. Ostateczny przylot opóźniony 3,5 godziny.
                    </p>
                    <p className="text-lg text-green-600 dark:text-green-400 font-bold">
                      = 400 € odszkodowania (dystans 2,300km, opóźnienie 3,5h)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kiedy NIE należy się */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Kiedy NIE należy się odszkodowanie?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Jest kilka sytuacji gdy <strong>nie masz prawa</strong> do odszkodowania za utraconą przesiadkę:
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                        1. Osobne rezerwacje (self-transfer)
                      </h3>
                      <p className="text-sm text-red-800 dark:text-red-300 mb-3">
                        Jeśli kupiłeś/kupiłaś bilety osobno (np. Warszawa-Berlin na jednym bilecie, Berlin-Londyn na drugim) — <strong>nie masz prawa do odszkodowania</strong>. To nazywa się "self-transfer" i jest na Twoje ryzyko.
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-400">
                        💡 Zawsze kupuj loty z przesiadką <strong>w jednej rezerwacji</strong> jeśli chcesz mieć ochronę!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                        2. Opóźnienie poniżej 3 godzin (ostateczny przylot)
                      </h3>
                      <p className="text-sm text-red-800 dark:text-red-300 mb-3">
                        Jeśli ostateczny przylot opóźnił się o <strong>mniej niż 3 godziny</strong> — nie masz prawa do odszkodowania, nawet jeśli straciłeś/straciłaś przesiadkę i musisz czekać 6 godzin na następny lot.
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-400">
                        📊 Liczy się <strong>czas ostatecznego przylotu</strong>, nie czas oczekiwania na przesiadce!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                        3. Nadzwyczajne okoliczności
                      </h3>
                      <p className="text-sm text-red-800 dark:text-red-300 mb-3">
                        Jeśli opóźnienie było spowodowane <strong>nadzwyczajnymi okolicznościami</strong> (ekstremalna pogoda, strajk ATC, zagrożenie) — linia lotnicza nie musi płacić odszkodowania.
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-400">
                        📖 Więcej: <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-red-600 dark:text-red-400 hover:underline font-semibold">Nadzwyczajne okoliczności — kiedy linie NIE płacą?</Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-600 p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-red-600 dark:text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                        4. Spóźniłeś/Spóźniłaś się przez kontrolę bezpieczeństwa
                      </h3>
                      <p className="text-sm text-red-800 dark:text-red-300 mb-3">
                        Jeśli pierwszy lot był na czasie, ale <strong>Ty się spóźniłeś/spóźniłaś</strong> przez długą kolejkę w security, lost baggage claim, etc. — to Twoja wina, nie linii.
                      </p>
                      <p className="text-xs text-red-700 dark:text-red-400">
                        ⚠️ Linia lotnicza zapewnia <strong>minimum connection time (MCT)</strong> — jeśli go przekroczono i nie zdążyłeś, to ich wina!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Co zrobić gdy straciłeś przesiadkę */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Co zrobić gdy straciłeś/straciłaś przesiadkę?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Jeśli już wiesz że nie zdążysz na przesiadkę — <strong>natychmiast</strong>:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Zgłoś się do transfer desk</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Na lotnisku przesiadkowym <strong>od razu po wyjściu z samolotu</strong> udaj się do transfer desk lub gate drugiego lotu. Oni automatycznie zobaczą że nie zdążyłeś/nie zdążyłaś i <strong>przepiszą Cię na następny dostępny lot</strong> — bezpłatnie!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Zażądaj opieki (care rights)</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Jeśli czekasz <strong>2+ godziny</strong> na następny lot, masz prawo do:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-6">
                    <li>✓ Bezpłatnych posiłków i napojów</li>
                    <li>✓ 2 połączeń telefonicznych / emaili</li>
                    <li>✓ Hotelu (jeśli nocleg konieczny)</li>
                    <li>✓ Transportu hotel ↔ lotnisko</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 p-6 rounded-xl border-2 border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Zachowaj dokumentację</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>KLUCZOWE</strong> dla późniejszego dochodzenia odszkodowania:
                  </p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-6">
                    <li>📸 Boarding passes oba loty</li>
                    <li>📸 Nowy boarding pass na lot zastępczy</li>
                    <li>📸 Tablica odlotów z opóźnieniem</li>
                    <li>📸 Potwierdzenie rezerwacji (pokazuje to jest jedna rezerwacja)</li>
                    <li>📝 Notatka: czas planowanego vs rzeczywistego przylotu</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      4
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">NIE akceptuj voucher w zamian za odszkodowanie</h3>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Niektóre linie lotnicze oferują na lotnisku voucher (np. 50-100 €) <strong>"w zamian za rezygnację z dalszych roszczeń"</strong>. <strong>NIE PODPISUJ!</strong> Przysługuje Ci 250-600 € odszkodowania + care rights. Voucher możesz przyjąć BEZ rezygnacji z odszkodowania.
                  </p>
                </div>
              </div>
            </section>

            {/* Jak dochodzić odszkodowania */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Jak dochodzić odszkodowania za utraconą przesiadkę?
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Po powrocie do domu, masz <strong>3 opcje</strong>:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                  <div className="text-4xl mb-3">⚖️</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">OPCJA 1: Samodzielnie</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Napisz reklamację do linii lotniczej, czekaj 30-60 dni, ewentualnie pozew do sądu.
                  </p>
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <p><strong>Czas:</strong> 3-12 miesięcy</p>
                    <p><strong>Skuteczność:</strong> ~38%</p>
                    <p><strong>Koszt:</strong> 0 € (twój czas)</p>
                  </div>
                  <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="text-blue-600 dark:text-blue-400 text-sm hover:underline mt-3 inline-block">
                    Jak samodzielnie? →
                  </Link>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-2 border-green-300 dark:border-green-700 shadow-lg">
                  <div className="text-4xl mb-3">🚀</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">OPCJA 2: ClaimWinger (polecana)</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Wypełnij formularz (2 min), eksperci zajmą się całą sprawą. Ty nic nie robisz.
                  </p>
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1 mb-3">
                    <p><strong>Czas:</strong> 4-8 tygodni</p>
                    <p><strong>Skuteczność:</strong> 89% (missed connection)</p>
                    <p><strong>Koszt:</strong> 25% + VAT tylko jeśli wygrasz</p>
                  </div>
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
                  <div className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <p><strong>Czas:</strong> 6-24 miesiące</p>
                    <p><strong>Skuteczność:</strong> ~71%</p>
                    <p><strong>Koszt:</strong> Opłaty sądowe + adwokat</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 text-white p-8 rounded-2xl shadow-xl">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Dlaczego ClaimWinger?</h3>
                    <ul className="text-green-100 space-y-2 text-sm mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>89% skuteczności</strong> przy missed connection (vs 38% samodzielnie)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>4-8 tygodni</strong> średni czas rozpatrzenia (vs 3-12 miesięcy)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Płacisz tylko jeśli wygrasz</strong> — zero ryzyka, zero kosztów z góry</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                        <span><strong>Eksperci prawni</strong> specjalizujący się w WE 261/2004</span>
                      </li>
                    </ul>
                    <a 
                      href="https://claimwinger.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl"
                    >
                      Sprawdź bezpłatnie w 2 minuty
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
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
                    Czy mogę dostać odszkodowanie jeśli linia zapewniła mi lot zastępczy tego samego dnia?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>TAK!</strong> Nie ma znaczenia czy dostałeś/dostałaś lot zastępczy. Liczy się <strong>ostateczny czas przylotu</strong> — jeśli opóźniony o 3+ godziny w stosunku do planu, masz prawo do odszkodowania. Lot zastępczy to obowiązek linii, nie łaska.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Co jeśli kupiłem bilety u różnych linii lotniczych ale w jednej rezerwacji?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    To się nazywa <strong>"interline agreement"</strong> lub <strong>"code-share"</strong>. Jeśli <strong>wszystko było w jednej rezerwacji</strong> (jeden PNR) — masz prawo do odszkodowania. Pozywasz <strong>pierwszą linię wykonującą</strong> (operating carrier), nawet jeśli bilet kupiony u innej linii.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Czy mogę dostać odszkodowanie jeśli to mój bagaż był powodem opóźnienia?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>Zależy.</strong> Jeśli opóźnienie było spowodowane <strong>standardową procedurą załadunku bagażu</strong> która trwała dłużej niż zwykle (wina linii) — TAK. Jeśli <strong>Ty się spóźniłeś/spóźniłaś</strong> i bagaż trzeba było zdejmować — NIE (Twoja wina). Jeśli <strong>bagaż był przekierowany przez linię</strong> i to spowodowało opóźnienie — TAK (ich wina).
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Ile minimum connection time (MCT) powinno być między lotami?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>MCT zależy od lotniska</strong> i jest określone przez linie lotnicze. Zazwyczaj:
                    <ul className="mt-2 space-y-1 ml-6">
                      <li>• <strong>45-60 minut</strong> — przesiadka w tym samym terminalu (Schengen → Schengen)</li>
                      <li>• <strong>60-90 minut</strong> — przesiadka między terminalami lub strefy</li>
                      <li>• <strong>90-120 minut</strong> — przesiadka międzynarodowa (non-Schengen)</li>
                    </ul>
                    Jeśli linia lotnicza sprzedała Ci bilet z MCT krótszym niż minimum — to <strong>ich błąd</strong> i przysługuje Ci odszkodowanie.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Czy mogę dostać odszkodowanie za missed connection przy powrocie?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    <strong>TAK!</strong> Nie ma znaczenia czy to był lot "tam" czy "z powrotem". Liczy się:
                    <ul className="mt-2 space-y-1 ml-6">
                      <li>• Jedna rezerwacja</li>
                      <li>• 3+ godziny opóźnienia ostatecznego przylotu</li>
                      <li>• Wina linii lotniczej</li>
                    </ul>
                    Jeśli spełnione — masz prawo do odszkodowania bez względu na kierunek.
                  </p>
                </details>

                <details className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl">
                  <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer text-lg">
                    Ile mam czasu na złożenie reklamacji?
                  </summary>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    W <strong>Polsce 6 lat</strong> od daty planowanego przylotu. W innych krajach UE od 2 do 6 lat. Ale <strong>im szybciej</strong>, tym lepiej — linie mogą łatwiej weryfikować dane gdy sprawa jest świeża. Więcej: <Link href="/blog/przedawnienie-roszczen-lotniczych" className="text-blue-600 dark:text-blue-400 hover:underline">Przedawnienie roszczeń lotniczych</Link>
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
                  <strong>Utracona przesiadka (missed connection)</strong> to frustrujące doświadczenie które dotyka prawie 20% pasażerów z przesiadkami. Ale <strong>dobra wiadomość</strong>: w większości przypadków przysługuje Ci odszkodowanie <strong>250-600 €</strong>.
                </p>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Kluczowe punkty:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>✅ <strong>Jedna rezerwacja</strong> — wszystkie loty w jednym PNR</li>
                    <li>✅ <strong>3+ godziny opóźnienia</strong> ostatecznego przylotu</li>
                    <li>✅ <strong>Wina linii lotniczej</strong> (nie nadzwyczajne okoliczności)</li>
                    <li>✅ <strong>Zachowaj dokumentację</strong> — boarding passes, potwierdzenia, notatki</li>
                    <li>✅ <strong>Nie akceptuj voucher w zamian za rezygnację</strong> z odszkodowania</li>
                  </ul>
                </div>

                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Najlepsza opcja? <strong>ClaimWinger</strong> — 89% skuteczności przy missed connection, 4-8 tygodni, płacisz tylko jeśli wygrasz. Oszczędzisz sobie miesięcy walki i stresu.
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
              ✓ Weryfikacja w 2 minuty &nbsp;•&nbsp; ✓ 89% skuteczności &nbsp;•&nbsp; ✓ Płacisz tylko jeśli wygrasz
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

              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="group p-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 rounded-xl border-2 border-yellow-200 dark:border-yellow-800 hover:border-yellow-400 dark:hover:border-yellow-600 transition-all">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                  Nadzwyczajne okoliczności wyjaśnione →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Kiedy linie lotnicze mogą legalnie odmówić wypłaty? Demaskujemy typowe wymówki.
                </p>
              </Link>

              <Link href="/blog/co-zrobic-na-lotnisku-opoznienie" className="group p-6 bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl border-2 border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                  Co zrobić na lotnisku gdy lot opóźniony? →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Checklist natychmiastowy — pierwsze 30 minut są kluczowe dla zabezpieczenia praw.
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