import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertTriangle, Euro, Landmark, MapPin, ArrowRight } from "lucide-react";

export default function WarszawaAmsterdamOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Warszawa–Amsterdam opóźnienie — odszkodowanie krok po kroku"
        description="Lot Warszawa–Amsterdam opóźniony? Sprawdź, jak uzyskać 250 € odszkodowania od LOT, KLM i tanich linii. Praktyczny przewodnik."
        url="https://problemlot.pl/blog/warszawa-amsterdam-opoznienie-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Warszawa–Amsterdam opóźnienie</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Trasy z Warszawy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Warszawa–Amsterdam opóźnienie — odszkodowanie krok po kroku
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>📅 11 marca 2026</span>
              <span>⏱️ 7 min czytania</span>
              <span>✍️ Ekspert ds. praw pasażerów</span>
            </div>
          </header>

          {/* Featured Snippet Box */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Szybka odpowiedź</h3>
                <p className="text-slate-700 mb-4">
                  Lot Warszawa–Amsterdam opóźniony o <strong>3+ godziny</strong>? Przysługuje Ci <strong>250 € odszkodowania</strong> 
                  na podstawie rozporządzenia WE 261/2004. Dotyczy LOT, KLM, Transavia i wszystkich linii UE.
                </p>
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <div className="font-bold text-slate-900 mb-2">Dystans: ~1,150 km</div>
                  <div className="text-2xl font-bold text-blue-600">Odszkodowanie: 250 €</div>
                  <div className="text-sm text-slate-600 mt-2">Czas na roszczenie: 3 lata od daty lotu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Trasa <strong>Warszawa–Amsterdam</strong> to jedno z kluczowych połączeń biznesowych i transferowych z Polski — obsługiwane 
              głównie przez LOT Polish Airlines i KLM Royal Dutch Airlines, z dodatkowymi połączeniami od Transavia i Wizz Air. Amsterdam 
              Schiphol to największy hub transferowy w Europie Zachodniej, przez który przesiadają się polscy pasażerowie lecący do USA, 
              Azji i Ameryki Południowej. <strong>Niestety, Schiphol to również jedno z najbardziej opóźnionych lotnisk w Europie</strong> 
              — zwłaszcza od 2022 roku, gdy zaczęły się chroniczne braki personelu obsługi naziemnej.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Jeśli Twój lot z Warszawy do Amsterdamu został opóźniony o <strong>3 godziny lub więcej</strong>, masz prawo do <strong>250 € 
              odszkodowania</strong> — niezależnie od linii lotniczej, ceny biletu czy powodu opóźnienia (o ile nie była to nadzwyczajna 
              okoliczność). W tym artykule dowiesz się, jak skutecznie wyegzekwować swoje prawa i uzyskać pieniądze.
            </p>
          </div>

          {/* Section: Dlaczego Amsterdam jest opóźniony */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Landmark className="w-8 h-8 text-blue-600" />
              Dlaczego loty do Amsterdamu są często opóźniane?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Problemy w Schiphol (AMS)
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Niedobory personelu</strong> — od 2022 chroniczny brak obsługi naziemnej (3–4h kolejki do check-in)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Slot restrictions</strong> — Schiphol obniżył max. liczbę operacji/dzień (z 500k do 460k)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Kolejki do lądowania</strong> — 20–30 min czekania w powietrzu (zwłaszcza rano 7–9)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Strajki KLM/Transavia</strong> — personel pokładowy i obsługa naziemna (częste latem)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  Problemy po stronie polskiej
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Rotacja floty LOT</strong> — samolot leci WAW→AMS→WAW→JFK → opóźnienie w AMS = łańcuch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Chopin przeciążony</strong> — jeden pas startowy, maksymalna przepustowość</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Usterki techniczne</strong> — starsza flota (zwłaszcza Wizz Air A320, Transavia 737)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Pogoda</strong> — mgły nad Mazowszem (jesień/zima) opóźniają start z WAW</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">📊 Statystyki opóźnień WAW–AMS (2025)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">16%</div>
                  <div className="text-sm text-slate-600">Lotów opóźnionych &gt;3h</div>
                  <div className="text-xs text-slate-500 mt-1">(LOT, KLM, Transavia łącznie)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">38 min</div>
                  <div className="text-sm text-slate-600">Średnie opóźnienie</div>
                  <div className="text-xs text-slate-500 mt-1">(wszystkie linie)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">250 €</div>
                  <div className="text-sm text-slate-600">Twoje odszkodowanie</div>
                  <div className="text-xs text-slate-500 mt-1">(gdy &gt;3h opóźnienia)</div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Które linie latają */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-blue-600" />
              Które linie latają Warszawa–Amsterdam?
            </h2>

            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">LOT Polish Airlines</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Najlepsze połączenie</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → AMS (Schiphol)
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 3–4 razy dziennie
                  </div>
                  <div>
                    <strong>Zalety:</strong> Bagaż w cenie, wygodne godziny, codeshare z KLM
                  </div>
                  <div>
                    <strong>Wady:</strong> Drożej niż budżetówki
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  💡 <strong>Tip:</strong> LOT wypłaca odszkodowania sprawnie (średnio 6–8 tygodni).
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">KLM Royal Dutch Airlines</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">Przewoźnik narodowy</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → AMS
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 3 razy dziennie
                  </div>
                  <div>
                    <strong>Zalety:</strong> Wysoka jakość, transfery worldwide, SkyTeam
                  </div>
                  <div>
                    <strong>Wady:</strong> Najdrożej, Schiphol często opóźniony
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ✅ <strong>Tip:</strong> KLM płaci odszkodowania (średnio 8–10 tygodni), ale wymaga dokumentacji.
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Transavia (KLM Group)</h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">Budget friendly</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → AMS
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 1–2 razy dziennie (sezonowo)
                  </div>
                  <div>
                    <strong>Zalety:</strong> Niższe ceny niż LOT/KLM
                  </div>
                  <div>
                    <strong>Wady:</strong> Bagaż extra, mniej wygodne godziny
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ⚠️ <strong>Uwaga:</strong> Transavia często opóźniona (problemy ze sprzętem w AMS).
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Wizz Air</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">Najtańsze</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → AMS (sezonowo)
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 2–3 razy w tygodniu
                  </div>
                  <div>
                    <strong>Zalety:</strong> Najniższe ceny (od 89 PLN)
                  </div>
                  <div>
                    <strong>Wady:</strong> Bagaż extra, częste opóźnienia, trudny kontakt
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ⚠️ <strong>Uwaga:</strong> Wizz Air często odmawia odszkodowania — przygotuj się na spór.
                </div>
              </div>
            </div>
          </section>

          {/* Compensation Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania za opóźnienie Warszawa–Amsterdam?
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">
                  Dystans: ~1,150 km (lot krótki)
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-2">250 €</div>
                <div className="text-slate-700">
                  Przy opóźnieniu <strong>3+ godziny</strong>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-sm text-slate-600 mb-1">Opóźnienie</div>
                  <div className="text-2xl font-bold text-slate-900">&lt; 3h</div>
                  <div className="text-sm text-red-600 mt-2">Brak odszkodowania</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-blue-500">
                  <div className="text-sm text-slate-600 mb-1">Opóźnienie</div>
                  <div className="text-2xl font-bold text-blue-600">3–4h</div>
                  <div className="text-sm text-green-600 mt-2 font-bold">250 € ✓</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-blue-500">
                  <div className="text-sm text-slate-600 mb-1">Opóźnienie</div>
                  <div className="text-2xl font-bold text-blue-600">&gt; 4h</div>
                  <div className="text-sm text-green-600 mt-2 font-bold">250 € ✓</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-blue-900 mb-2">
                Dlaczego 250 €, a nie 400 € czy 600 €?
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Warszawa–Amsterdam to <strong>~1,150 km</strong> (lot krótki w UE, poniżej 1,500 km). Rozporządzenie WE 261 definiuje 3 stawki:<br/>
                • <strong>250 €</strong> — loty do 1,500 km (np. Warszawa–Amsterdam, Warszawa–Berlin)<br/>
                • <strong>400 €</strong> — loty 1,500–3,500 km w UE (np. Warszawa–Barcelona, Gdańsk–Madryt)<br/>
                • <strong>600 €</strong> — loty &gt;3,500 km poza UE (np. Warszawa–Nowy Jork)
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">💡 Przykład kalkulacji odszkodowania</h3>
              <div className="text-sm space-y-2">
                <p>
                  <strong>Twój lot:</strong> KLM KL 1356, WAW → AMS, 15 maja 2025<br/>
                  <strong>Planowane wylądowanie:</strong> 10:45<br/>
                  <strong>Rzeczywiste wylądowanie:</strong> 14:15 (opóźnienie <strong>3h 30min</strong>)
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <div className="text-green-900">
                    ✅ <strong>Opóźnienie &gt;3h</strong> → Przysługuje odszkodowanie<br/>
                    ✅ <strong>Dystans ~1,150 km</strong> → Stawka: 250 €<br/>
                    ✅ <strong>Termin na roszczenie:</strong> Do 15 maja 2028 (3 lata)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Jak uzyskać odszkodowanie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak uzyskać odszkodowanie za opóźniony lot Warszawa–Amsterdam?
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Zbierz dowody opóźnienia
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Zachowaj <strong>kartę pokładową</strong>, potwierdzenie rezerwacji i zrób <strong>zrzut ekranu z FlightRadar24</strong> 
                    pokazujący faktyczny czas przylotu do Amsterdamu. Jeśli linia przesłała SMS/email o opóźnieniu — zapisz to.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-sm">
                    <strong>Gdzie sprawdzić czas przylotu:</strong><br/>
                    • <a href="https://www.flightradar24.com" target="_blank" rel="noopener" className="text-blue-600 hover:underline">FlightRadar24.com</a> (wpisz numer lotu + datę)<br/>
                    • <a href="https://www.schiphol.nl/en/departures" target="_blank" rel="noopener" className="text-blue-600 hover:underline">Schiphol.nl</a> (oficjalna strona lotniska)<br/>
                    • Aplikacja linii lotniczej (LOT, KLM)
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Złóż roszczenie do linii lotniczej
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Wyślij formularz reklamacyjny na stronę linii. <strong>Deadline: 3 lata</strong> od daty lotu (polskie prawo cywilne). 
                    Linia ma <strong>30 dni</strong> na odpowiedź (nie zawsze odpowiada w terminie).
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                    <strong>Formularz LOT:</strong> <a href="https://www.lot.com/pl/pl/kontakt" target="_blank" rel="noopener" className="text-blue-600 hover:underline">lot.com/kontakt</a><br/>
                    <strong>Formularz KLM:</strong> <a href="https://www.klm.com/travel/pl_pl/customer_support/contact/index.htm" target="_blank" rel="noopener" className="text-blue-600 hover:underline">klm.com/customer_support</a><br/>
                    <strong>Formularz Transavia:</strong> <a href="https://www.transavia.com/en-EU/customer-service/contact/" target="_blank" rel="noopener" className="text-blue-600 hover:underline">transavia.com/contact</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Czekaj na odpowiedź (lub jej brak)
                  </h3>
                  <p className="text-slate-700">
                    <strong>LOT:</strong> zwykle odpowiada w 4–6 tygodni. <strong>KLM:</strong> odpowiada w 6–8 tygodni, ale wymaga 
                    dokładnej dokumentacji. <strong>Transavia/Wizz Air:</strong> często ignorują roszczenia lub odmawiają powołując 
                    się na "usterki techniczne".
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Przekaż sprawę do ClaimWinger
                  </h3>
                  <p className="text-slate-700">
                    ClaimWinger wyegzekwuje odszkodowanie w Twoim imieniu (w tym spory prawne, pozwy sądowe). <strong>Płacisz tylko 
                    prowizję przy sukcesie</strong> (25% + VAT). Średni czas: 8–12 tygodni.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-4">
              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy odszkodowanie przysługuje przy każdym opóźnieniu &gt;3h do Amsterdamu?
                </h3>
                <p className="text-slate-700">
                  <strong>Prawie zawsze — ale nie zawsze.</strong> Linia może odmówić, jeśli udowodni <strong>nadzwyczajne okoliczności</strong> 
                  (np. zamknięcie przestrzeni powietrznej, ekstremalna pogoda, strajk kontrolerów ruchu ATC). Zwykłe usterki techniczne, 
                  brak załogi, strajk KLM/Transavia <strong>NIE są nadzwyczajnymi okolicznościami</strong> — odszkodowanie przysługuje.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy lot powrotny Amsterdam–Warszawa też daje prawo do odszkodowania?
                </h3>
                <p className="text-slate-700">
                  <strong>Tak!</strong> WE 261 obowiązuje dla lotów <strong>do UE</strong> (wszystkie linie) oraz <strong>z UE</strong> 
                  (tylko linie UE). Lot AMS→WAW = lot do UE, więc jeśli leciałeś LOT/KLM/Transavia i był opóźniony &gt;3h, masz prawo do 250 €.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Co jeśli miałem przesiadkę w Amsterdamie i straciłem dalszy lot?
                </h3>
                <p className="text-slate-700">
                  <strong>Masz prawo do odszkodowania — pod warunkiem, że oba loty były w jednej rezerwacji.</strong> Jeśli WAW→AMS 
                  był opóźniony i przez to straciłeś AMS→NYC, linia musi wypłacić odszkodowanie za całą trasę (600 €, bo &gt;3,500 km). 
                  Jeśli kupowałeś bilety oddzielnie — brak odszkodowania.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy niedobory personelu w Schiphol to nadzwyczajna okoliczność?
                </h3>
                <p className="text-slate-700">
                  <strong>NIE — to problem wewnętrzny lotniska/linii, nie pasażera.</strong> Orzecznictwo TSUE (Trybunału Sprawiedliwości 
                  UE) jest jasne: problemy operacyjne, braki kadry, strajki personelu linii <strong>nie zwalniają z wypłaty odszkodowania</strong>. 
                  Tylko strajk ATC (kontrolerów ruchu) może być uznany za nadzwyczajną okoliczność.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Jak długo mogę czekać z roszczeniem?
                </h3>
                <p className="text-slate-700">
                  W Polsce masz <strong>3 lata</strong> od daty lotu (termin przedawnienia roszczeń cywilnych). W Holandii — 5 lat. 
                  Ale im szybciej złożysz roszczenie, tym lepiej (łatwiej zdobyć dowody, linia szybciej płaci).
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Odzyskaj swoje 250 € za opóźniony lot Warszawa–Amsterdam
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                ClaimWinger wyegzekwuje odszkodowanie za Ciebie — bez ryzyka, bez stresu. Płacisz tylko przy sukcesie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                >
                  Sprawdź swoje odszkodowanie
                  <ArrowRight className="w-5 h-5" />
                </a>
                <span className="text-blue-100 text-sm">
                  ⚡ Średni czas: 8–12 tygodni
                </span>
              </div>
              <div className="mt-6 text-blue-100 text-sm">
                ✓ Bez ukrytych kosztów &nbsp;•&nbsp; ✓ Prowizja tylko przy sukcesie &nbsp;•&nbsp; ✓ 98% skuteczności
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="border-t border-slate-200 pt-8">
            <h3 className="font-bold text-slate-900 mb-4">📚 Przydatne artykuły:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <Link href="/blog/ile-odszkodowania-opozniony-lot" className="text-blue-600 hover:underline">
                → Ile odszkodowania za opóźniony lot?
              </Link>
              <Link href="/blog/jak-dlugo-czeka-odszkodowanie-za-lot" className="text-blue-600 hover:underline">
                → Jak długo czeka się na odszkodowanie?
              </Link>
              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="text-blue-600 hover:underline">
                → Nadzwyczajne okoliczności — kiedy linia nie płaci?
              </Link>
              <Link href="/blog/warszawa-londyn-opoznienie-odszkodowanie" className="text-blue-600 hover:underline">
                → Warszawa–Londyn opóźnienie — odszkodowanie
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
