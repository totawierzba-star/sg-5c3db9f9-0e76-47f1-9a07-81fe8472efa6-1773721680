import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertTriangle, Euro, Sun, MapPin, ArrowRight } from "lucide-react";

export default function WarszawaBarcelonaOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Warszawa–Barcelona opóźnienie — jak uzyskać odszkodowanie?"
        description="Lot Warszawa–Barcelona opóźniony? Sprawdź, jak uzyskać do 400 € odszkodowania od LOT, Ryanair, Wizz Air i Vueling. Praktyczny przewodnik."
        url="https://problemlot.pl/blog/warszawa-barcelona-opoznienie-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Warszawa–Barcelona opóźnienie</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Trasy z Warszawy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Warszawa–Barcelona opóźnienie — jak uzyskać odszkodowanie?
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
                  Lot Warszawa–Barcelona opóźniony o <strong>3+ godziny</strong>? Przysługuje Ci <strong>400 € odszkodowania</strong> 
                  na podstawie rozporządzenia WE 261/2004. Dotyczy LOT, Ryanair, Wizz Air, Vueling i wszystkich linii UE.
                </p>
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <div className="font-bold text-slate-900 mb-2">Dystans: ~1,800 km</div>
                  <div className="text-2xl font-bold text-blue-600">Odszkodowanie: 400 €</div>
                  <div className="text-sm text-slate-600 mt-2">Czas na roszczenie: 3 lata od daty lotu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Trasa <strong>Warszawa–Barcelona</strong> to jedno z najpopularniejszych połączeń z Polski do Hiszpanii — obsługiwane przez 
              LOT Polish Airlines, Ryanair, Wizz Air i hiszpańską Vueling. Rocznie na tej trasie lata ponad 500,000 polskich turystów 
              (wakacje, długie weekendy, city break) oraz emigrantów zarobkowych. <strong>Niestety, Barcelona-El Prat to jedno z najbardziej 
              opóźnionych lotnisk w Europie</strong> — zwłaszcza latem i podczas strajków hiszpańskiej obsługi naziemnej.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Jeśli Twój lot z Warszawy do Barcelony został opóźniony o <strong>3 godziny lub więcej</strong>, masz prawo do <strong>400 € 
              odszkodowania</strong> — niezależnie od linii lotniczej, ceny biletu czy powodu opóźnienia (o ile nie była to nadzwyczajna 
              okoliczność). W tym artykule dowiesz się, jak skutecznie wyegzekwować swoje prawa i uzyskać pieniądze.
            </p>
          </div>

          {/* Section: Dlaczego Barcelona jest opóźniana */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Sun className="w-8 h-8 text-blue-600" />
              Dlaczego loty do Barcelony są często opóźniane?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Problemy w Barcelonie (BCN)
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Przeciążenie w sezonie</strong> — lipiec/sierpień: lotnisko pracuje na max. przepustowości</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Strajki obsługi naziemnej</strong> — IBERIA Ground Handling, Vueling staff (częste latem)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Burze nad Katalonią</strong> — letnie grzmoty powodują zamknięcie pasa (30–60 min)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Sloty Vueling/Ryanair</strong> — budżetówki często tracą przydział slotów na rzecz Lufthansy/BA</span>
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
                    <span><strong>Rotacja floty LOT</strong> — samolot leci WAW→BCN→WAW→JFK → opóźnienie w BCN = łańcuch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Usterki techniczne Wizz/Ryanair</strong> — starsza flota A320, brak zapasowych maszyn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Modlin vs Chopin</strong> — Ryanair czasem przenosi lot z WMI na WAW ostatnią chwilą</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Weekend majowy/długie</strong> — ekstremalne przeciążenie Chopina (3–4h kolejki do check-in)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">📊 Statystyki opóźnień WAW–BCN (2025)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">22%</div>
                  <div className="text-sm text-slate-600">Lotów opóźnionych &gt;3h</div>
                  <div className="text-xs text-slate-500 mt-1">(wszystkie linie łącznie)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">58 min</div>
                  <div className="text-sm text-slate-600">Średnie opóźnienie</div>
                  <div className="text-xs text-slate-500 mt-1">(sezon letni)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">400 €</div>
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
              Które linie latają Warszawa–Barcelona?
            </h2>

            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">LOT Polish Airlines</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Najlepsze połączenie</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → BCN (El Prat)
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 1–2 razy dziennie (więcej latem)
                  </div>
                  <div>
                    <strong>Zalety:</strong> Bagaż w cenie, wygodne godziny, transfer w WAW
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
                  <h3 className="font-bold text-lg">Ryanair</h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">Najtańsze bilety</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WMI → BCN (czasem WAW)
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 2–3 razy w tygodniu (sezonowo)
                  </div>
                  <div>
                    <strong>Zalety:</strong> Najniższe ceny (od 129 PLN)
                  </div>
                  <div>
                    <strong>Wady:</strong> Modlin daleko, bagaż extra, częste opóźnienia
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ⚠️ <strong>Uwaga:</strong> Ryanair często odmawia odszkodowania — przygotuj się na walkę.
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Wizz Air</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">Tanie + często</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → BCN
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 3–5 razy w tygodniu
                  </div>
                  <div>
                    <strong>Zalety:</strong> Przyzwoite ceny, z Chopina, częste połączenia
                  </div>
                  <div>
                    <strong>Wady:</strong> Wysoki % opóźnień, usterki techniczne
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ⚠️ <strong>Uwaga:</strong> Wizz Air często powołuje się na "usterki techniczne" — to NIE zwalnia z odszkodowania.
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Vueling (Hiszpania)</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">Lokalna linia</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → BCN
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 2–3 razy w tygodniu (sezonowo)
                  </div>
                  <div>
                    <strong>Zalety:</strong> Dobre połączenia do innych miast Hiszpanii
                  </div>
                  <div>
                    <strong>Wady:</strong> Często opóźniona (problemy w BCN), trudny kontakt
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  💡 <strong>Tip:</strong> Vueling wypłaca odszkodowania, ale BARDZO powoli (10–14 tygodni).
                </div>
              </div>
            </div>
          </section>

          {/* Compensation Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania za opóźnienie Warszawa–Barcelona?
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">
                  Dystans: ~1,800 km (lot średni)
                </div>
                <div className="text-5xl font-bold text-blue-600 mb-2">400 €</div>
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
                  <div className="text-sm text-green-600 mt-2 font-bold">400 € ✓</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border-2 border-blue-500">
                  <div className="text-sm text-slate-600 mb-1">Opóźnienie</div>
                  <div className="text-2xl font-bold text-blue-600">&gt; 4h</div>
                  <div className="text-sm text-green-600 mt-2 font-bold">400 € ✓</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-blue-900 mb-2">
                Dlaczego 400 €, a nie 250 €?
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Warszawa–Barcelona to <strong>~1,800 km</strong> (lot średni w UE). Rozporządzenie WE 261 definiuje 3 stawki:<br/>
                • <strong>250 €</strong> — loty do 1,500 km (np. Warszawa–Londyn)<br/>
                • <strong>400 €</strong> — loty 1,500–3,500 km w UE (np. Warszawa–Barcelona, Gdańsk–Madryt)<br/>
                • <strong>600 €</strong> — loty &gt;3,500 km poza UE (np. Warszawa–Nowy Jork)
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">💡 Przykład kalkulacji odszkodowania</h3>
              <div className="text-sm space-y-2">
                <p>
                  <strong>Twój lot:</strong> LOT LO 437, WAW → BCN, 12 lipca 2025<br/>
                  <strong>Planowane wylądowanie:</strong> 14:30<br/>
                  <strong>Rzeczywiste wylądowanie:</strong> 18:45 (opóźnienie <strong>4h 15min</strong>)
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <div className="text-green-900">
                    ✅ <strong>Opóźnienie &gt;3h</strong> → Przysługuje odszkodowanie<br/>
                    ✅ <strong>Dystans ~1,800 km</strong> → Stawka: 400 €<br/>
                    ✅ <strong>Termin na roszczenie:</strong> Do 12 lipca 2028 (3 lata)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Jak uzyskać odszkodowanie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak uzyskać odszkodowanie za opóźniony lot Warszawa–Barcelona?
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
                    pokazujący faktyczny czas przylotu do Barcelony. Jeśli linia przesłała SMS/email o opóźnieniu — zapisz to.
                  </p>
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
                    Wyślij formularz reklamacyjny na stronę linii. <strong>Deadline: 3 lata</strong> od daty lotu. Linia ma <strong>30 dni</strong> 
                    na odpowiedź (często nie odpowiada w terminie).
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                    <strong>Formularz LOT:</strong> <a href="https://www.lot.com/pl/pl/kontakt" target="_blank" rel="noopener" className="text-blue-600 hover:underline">lot.com/kontakt</a><br/>
                    <strong>Formularz Wizz Air:</strong> <a href="https://wizzair.com/pl-pl/informacje-i-uslugi/kontakt" target="_blank" rel="noopener" className="text-blue-600 hover:underline">wizzair.com/kontakt</a><br/>
                    <strong>Formularz Vueling:</strong> <a href="https://www.vueling.com/en/we-are-vueling/customer-service" target="_blank" rel="noopener" className="text-blue-600 hover:underline">vueling.com/customer-service</a>
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
                    <strong>LOT:</strong> zwykle odpowiada w 4–6 tygodni. <strong>Wizz Air/Ryanair:</strong> często ignorują roszczenia 
                    lub odmawiają powołując się na "usterki techniczne" lub "problemy ATC". <strong>Vueling:</strong> odpowiada po 
                    8–10 tygodniach (czasem dłużej).
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
                  Czy odszkodowanie przysługuje przy każdym opóźnieniu &gt;3h do Barcelony?
                </h3>
                <p className="text-slate-700">
                  <strong>Prawie zawsze — ale nie zawsze.</strong> Linia może odmówić, jeśli udowodni <strong>nadzwyczajne okoliczności</strong> 
                  (np. ekstremalna burza nad Katalonią, zamknięcie lotniska BCN, strajk kontrolerów ruchu). Zwykłe usterki techniczne, 
                  brak załogi, strajk obsługi naziemnej Vueling <strong>NIE są nadzwyczajnymi okolicznościami</strong> — odszkodowanie przysługuje.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy lot powrotny Barcelona–Warszawa też daje prawo do odszkodowania?
                </h3>
                <p className="text-slate-700">
                  <strong>Tak!</strong> WE 261 obowiązuje dla lotów <strong>do UE</strong> (wszystkie linie) oraz <strong>z UE</strong> 
                  (tylko linie UE). Lot BCN→WAW = lot do UE, więc jeśli leciałeś LOT/Wizz Air/Ryanair/Vueling i był opóźniony &gt;3h, 
                  masz prawo do 400 €.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy strajk w Barcelonie zwalnia linię z wypłaty odszkodowania?
                </h3>
                <p className="text-slate-700">
                  <strong>Zależy od rodzaju strajku:</strong><br/>
                  • <strong>Strajk kontrolerów ruchu (ATC)</strong> = nadzwyczajna okoliczność → brak odszkodowania<br/>
                  • <strong>Strajk obsługi naziemnej Vueling/Iberia</strong> = NIE jest nadzwyczajną okolicznością → odszkodowanie przysługuje<br/>
                  • <strong>Strajk pilotów/personelu pokładowego</strong> = NIE jest nadzwyczajną okolicznością → odszkodowanie przysługuje
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Jak długo mogę czekać z roszczeniem?
                </h3>
                <p className="text-slate-700">
                  W Polsce masz <strong>3 lata</strong> od daty lotu (termin przedawnienia roszczeń cywilnych). W Hiszpanii — 5 lat. 
                  Ale im szybciej złożysz roszczenie, tym lepiej (łatwiej zdobyć dowody, linia szybciej płaci).
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy Vueling płaci odszkodowania sprawnie?
                </h3>
                <p className="text-slate-700">
                  <strong>Płaci — ale BARDZO wolno.</strong> Vueling to hiszpańska linia (własność IAG — grupa British Airways/Iberia), 
                  która jest znana z długich terminów rozpatrywania roszczeń (10–14 tygodni, czasem dłużej). ClaimWinger przyspiesza 
                  proces poprzez nacisk prawny.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Odzyskaj swoje 400 € za opóźniony lot Warszawa–Barcelona
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
