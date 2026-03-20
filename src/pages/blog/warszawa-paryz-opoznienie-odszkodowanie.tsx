import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertTriangle, Euro, Building2, MapPin, ArrowRight } from "lucide-react";

export default function WarszawaParyzOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Warszawa–Paryż opóźnienie — prawa pasażera i odszkodowanie"
        description="Lot Warszawa–Paryż opóźniony? Sprawdź, jak uzyskać 250 € odszkodowania od LOT, Air France i tanich linii. Praktyczny przewodnik."
        url="https://problemlot.pl/blog/warszawa-paryz-opoznienie-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Warszawa–Paryż opóźnienie</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Trasy z Warszawy
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Warszawa–Paryż opóźnienie — prawa pasażera i odszkodowanie
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
                  Lot Warszawa–Paryż opóźniony o <strong>3+ godziny</strong>? Przysługuje Ci <strong>250 € odszkodowania</strong> 
                  na podstawie rozporządzenia WE 261/2004. Dotyczy LOT, Air France, easyJet i wszystkich linii UE.
                </p>
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <div className="font-bold text-slate-900 mb-2">Dystans: ~1,350 km</div>
                  <div className="text-2xl font-bold text-blue-600">Odszkodowanie: 250 €</div>
                  <div className="text-sm text-slate-600 mt-2">Czas na roszczenie: 3 lata od daty lotu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Trasa <strong>Warszawa–Paryż</strong> to jedno z kluczowych połączeń biznesowych i kulturalnych między Polską a Francją — 
              obsługiwane głównie przez LOT Polish Airlines i Air France, z dodatkowymi połączeniami od easyJet i Transavia. Paryż 
              Charles de Gaulle (CDG) to drugi największy hub w Europie po Londynie Heathrow, przez który przesiadają się polscy pasażerowie 
              lecący do Afryki, Ameryki Południowej i Azji. <strong>Niestety, CDG to również jedno z najbardziej opóźnionych lotnisk 
              w Europie</strong> — zwłaszcza podczas strajków francuskich kontrolerów ruchu i Air France.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Jeśli Twój lot z Warszawy do Paryża został opóźniony o <strong>3 godziny lub więcej</strong>, masz prawo do <strong>250 € 
              odszkodowania</strong> — niezależnie od linii lotniczej, ceny biletu czy powodu opóźnienia (o ile nie była to nadzwyczajna 
              okoliczność). W tym artykule dowiesz się, jak skutecznie wyegzekwować swoje prawa i uzyskać pieniądze.
            </p>
          </div>

          {/* Section: Dlaczego Paryż jest opóźniony */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              Dlaczego loty do Paryża są często opóźniane?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Problemy w Paryżu (CDG)
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Strajki ATC</strong> — francuscy kontrolerzy ruchu często strajkują (10–15 dni/rok)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Strajki Air France</strong> — piloci, personel pokładowy, obsługa naziemna (latem)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Przeciążenie CDG</strong> — 3 terminale, 76 mln pasażerów/rok (2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Kolejki do lądowania</strong> — 15–25 min czekania w powietrzu (rush hours)</span>
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
                    <span><strong>Rotacja floty LOT</strong> — samolot leci WAW→CDG→WAW→JFK → opóźnienie w CDG = łańcuch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Chopin przeciążony</strong> — jeden pas startowy, maksymalna przepustowość</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Usterki techniczne</strong> — starsza flota (zwłaszcza easyJet A319/320)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Pogoda</strong> — mgły nad Mazowszem (jesień/zima) opóźniają start z WAW</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">📊 Statystyki opóźnień WAW–CDG (2025)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">19%</div>
                  <div className="text-sm text-slate-600">Lotów opóźnionych &gt;3h</div>
                  <div className="text-xs text-slate-500 mt-1">(LOT, Air France, easyJet łącznie)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">46 min</div>
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
              Które linie latają Warszawa–Paryż?
            </h2>

            <div className="space-y-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">LOT Polish Airlines</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">Najlepsze połączenie</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → CDG (Charles de Gaulle)
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 2–3 razy dziennie
                  </div>
                  <div>
                    <strong>Zalety:</strong> Bagaż w cenie, wygodne godziny, codeshare z Air France
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
                  <h3 className="font-bold text-lg">Air France</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">Przewoźnik narodowy</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → CDG
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 3 razy dziennie
                  </div>
                  <div>
                    <strong>Zalety:</strong> Wysoka jakość, transfery worldwide, SkyTeam
                  </div>
                  <div>
                    <strong>Wady:</strong> Najdrożej, CDG często opóźniony
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ⚠️ <strong>Uwaga:</strong> Air France płaci odszkodowania, ale BARDZO wolno (10–12 tygodni, czasem dłużej).
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">easyJet</h3>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold">Budget friendly</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → CDG (czasem ORY - Orly)
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 1–2 razy dziennie
                  </div>
                  <div>
                    <strong>Zalety:</strong> Niższe ceny niż LOT/Air France
                  </div>
                  <div>
                    <strong>Wady:</strong> Bagaż extra, mniej wygodne godziny
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ✅ <strong>Tip:</strong> easyJet szybko wypłaca odszkodowania (średnio 6–8 tygodni).
                </div>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Transavia France</h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">Najtańsze</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Trasa:</strong> WAW → ORY (Orly, lotnisko miejskie)
                  </div>
                  <div>
                    <strong>Częstotliwość:</strong> 2–3 razy w tygodniu (sezonowo)
                  </div>
                  <div>
                    <strong>Zalety:</strong> Najniższe ceny, Orly bliżej centrum Paryża
                  </div>
                  <div>
                    <strong>Wady:</strong> Bagaż extra, rzadkie połączenia
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  ⚠️ <strong>Uwaga:</strong> Transavia często opóźniona (problemy z flotą).
                </div>
              </div>
            </div>
          </section>

          {/* Compensation Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania za opóźnienie Warszawa–Paryż?
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">
                  Dystans: ~1,350 km (lot krótki)
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

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg mb-6">
              <h3 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Ważne: Strajki francuskie a odszkodowanie
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Francja słynie z częstych strajków. <strong>Kluczowa różnica:</strong><br/>
                • <strong>Strajk kontrolerów ruchu (ATC)</strong> = nadzwyczajna okoliczność → brak odszkodowania<br/>
                • <strong>Strajk Air France (piloci, personel)</strong> = NIE jest nadzwyczajną okolicznością → odszkodowanie przysługuje<br/>
                Linia często twierdzi inaczej — ale orzecznictwo TSUE jest jasne: za strajki własnego personelu linia odpowiada.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">💡 Przykład kalkulacji odszkodowania</h3>
              <div className="text-sm space-y-2">
                <p>
                  <strong>Twój lot:</strong> Air France AF 1147, WAW → CDG, 22 czerwca 2025<br/>
                  <strong>Planowane wylądowanie:</strong> 13:20<br/>
                  <strong>Rzeczywiste wylądowanie:</strong> 17:05 (opóźnienie <strong>3h 45min</strong>)
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <div className="text-green-900">
                    ✅ <strong>Opóźnienie &gt;3h</strong> → Przysługuje odszkodowanie<br/>
                    ✅ <strong>Dystans ~1,350 km</strong> → Stawka: 250 €<br/>
                    ✅ <strong>Termin na roszczenie:</strong> Do 22 czerwca 2028 (3 lata)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Jak uzyskać odszkodowanie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak uzyskać odszkodowanie za opóźniony lot Warszawa–Paryż?
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
                    pokazujący faktyczny czas przylotu do Paryża. Jeśli linia przesłała SMS/email o opóźnieniu — zapisz to.
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
                    Wyślij formularz reklamacyjny na stronę linii. <strong>Deadline: 3 lata</strong> od daty lotu (polskie prawo cywilne). 
                    Linia ma <strong>30 dni</strong> na odpowiedź.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                    <strong>Formularz LOT:</strong> <a href="https://www.lot.com/pl/pl/kontakt" target="_blank" rel="noopener" className="text-blue-600 hover:underline">lot.com/kontakt</a><br/>
                    <strong>Formularz Air France:</strong> <a href="https://wwws.airfrance.fr/contact" target="_blank" rel="noopener" className="text-blue-600 hover:underline">airfrance.fr/contact</a><br/>
                    <strong>Formularz easyJet:</strong> <a href="https://www.easyjet.com/pl/help" target="_blank" rel="noopener" className="text-blue-600 hover:underline">easyjet.com/help</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Czekaj na odpowiedź
                  </h3>
                  <p className="text-slate-700">
                    <strong>LOT:</strong> zwykle odpowiada w 4–6 tygodni. <strong>Air France:</strong> odpowiada w 10–12 tygodni 
                    (czasem dłużej — francuska biurokracja). <strong>easyJet:</strong> odpowiada w 6–8 tygodni.
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
                    ClaimWinger wyegzekwuje odszkodowanie w Twoim imieniu (w tym spory prawne z Air France). <strong>Płacisz tylko 
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
                  Czy strajk Air France zwalnia z wypłaty odszkodowania?
                </h3>
                <p className="text-slate-700">
                  <strong>NIE — strajk własnego personelu linii NIE jest nadzwyczajną okolicznością.</strong> Tylko strajk kontrolerów 
                  ruchu (ATC) może być uznany za nadzwyczajną okoliczność. Orzecznictwo TSUE (C-195/17, C-501/17) jest jasne: linia 
                  odpowiada za strajki swoich pracowników.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy lot powrotny Paryż–Warszawa też daje prawo do odszkodowania?
                </h3>
                <p className="text-slate-700">
                  <strong>Tak!</strong> WE 261 obowiązuje dla lotów <strong>do UE</strong> (wszystkie linie) oraz <strong>z UE</strong> 
                  (tylko linie UE). Lot CDG→WAW = lot do UE, więc jeśli leciałeś LOT/Air France/easyJet i był opóźniony &gt;3h, 
                  masz prawo do 250 €.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Co jeśli miałem przesiadkę w Paryżu i straciłem dalszy lot?
                </h3>
                <p className="text-slate-700">
                  <strong>Masz prawo do odszkodowania — pod warunkiem, że oba loty były w jednej rezerwacji.</strong> Jeśli WAW→CDG 
                  był opóźniony i przez to straciłeś CDG→JFK, linia musi wypłacić odszkodowanie za całą trasę (600 €, bo &gt;3,500 km). 
                  Jeśli kupowałeś bilety oddzielnie — brak odszkodowania.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Dlaczego Air France płaci tak wolno?
                </h3>
                <p className="text-slate-700">
                  Air France to duża, zbiurokratyzowana linia z wielopoziomowym systemem rozpatrywania roszczeń. Dodatkowo, 
                  francuskie prawo pracy i regulacje wewnętrzne spowalniają proces. <strong>ClaimWinger przyspiesza wypłatę poprzez 
                  nacisk prawny i spory sądowe</strong> (średnio 8–12 tygodni vs 4–6 miesięcy samodzielnie).
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Jak długo mogę czekać z roszczeniem?
                </h3>
                <p className="text-slate-700">
                  W Polsce masz <strong>3 lata</strong> od daty lotu (termin przedawnienia roszczeń cywilnych). We Francji — 5 lat. 
                  Ale im szybciej złożysz roszczenie, tym lepiej (łatwiej zdobyć dowody, linia szybciej płaci).
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Odzyskaj swoje 250 € za opóźniony lot Warszawa–Paryż
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                ClaimWinger wyegzekwuje odszkodowanie za Ciebie — nawet od Air France. Płacisz tylko przy sukcesie.
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
