import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, CheckCircle, AlertTriangle, Euro, MapPin, Building2, ArrowRight } from "lucide-react";

export default function KrakowDublinOpoznienieOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Kraków–Dublin opóźnienie — odszkodowanie za lot do Irlandii"
        description="Lot Kraków–Dublin opóźniony? Sprawdź, jak uzyskać 250 € odszkodowania od Ryanair i innych linii. Praktyczny przewodnik."
        url="https://problemlot.pl/blog/krakow-dublin-opoznienie-odszkodowanie"
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Kraków–Dublin opóźnienie</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                Trasy z lotnisk regionalnych
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Kraków–Dublin opóźnienie — odszkodowanie za lot do Irlandii
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>📅 11 marca 2026</span>
              <span>⏱️ 6 min czytania</span>
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
                  Lot Kraków–Dublin opóźniony o <strong>3+ godziny</strong>? Przysługuje Ci <strong>250 € odszkodowania</strong> 
                  na podstawie rozporządzenia WE 261/2004. Dotyczy Ryanair i wszystkich linii UE.
                </p>
                <div className="bg-white border border-blue-200 rounded-lg p-4">
                  <div className="font-bold text-slate-900 mb-2">Dystans: ~1,680 km</div>
                  <div className="text-2xl font-bold text-blue-600">Odszkodowanie: 400 €</div>
                  <div className="text-sm text-slate-600 mt-2">Czas na roszczenie: 3 lata od daty lotu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Trasa <strong>Kraków–Dublin</strong> to popularne połączenie z polską diasporą w Irlandii — obsługiwane głównie przez 
              Ryanair. Rocznie leci nią ponad 200,000 pasażerów, z czego <strong>~80% to Polacy pracujący w Irlandii</strong> 
              (szacunkowo 120,000+ Polaków mieszka w Irlandii).
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Jeśli Twój lot z Krakowa do Dublina został opóźniony o <strong>3 godziny lub więcej</strong>, masz prawo do <strong>400 € 
              odszkodowania</strong> (dystans ~1,680 km) — niezależnie od linii lotniczej, ceny biletu czy powodu opóźnienia (o ile 
              nie była to nadzwyczajna okoliczność). W tym artykule dowiesz się, jak skutecznie wyegzekwować swoje prawa.
            </p>
          </div>

          {/* Section: Dlaczego Dublin jest opóźniony */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              Dlaczego loty Kraków–Dublin są często opóźniane?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Problemy w Dublinie (DUB)
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Pogoda atlantycka</strong> — częste wiatry boczne, mgły (jesień/zima)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Jeden pas startowy</strong> — Dublin Airport ma ograniczoną przepustowość</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Ryanair hub</strong> — 40% ruchu to Ryanair (rotacje samolotów powodują łańcuchy opóźnień)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-600 mt-1">•</span>
                    <span><strong>Ograniczenia nocne</strong> — zakaz lotów 23:00–07:00</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  Problemy w Krakowie (KRK)
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Rotacja floty Ryanair</strong> — samolot leci KRK→DUB→STN→KRK → łańcuch opóźnień</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Jeden pas startowy</strong> — Balice ma ograniczoną przepustowość</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Usterki techniczne</strong> — starsza flota Ryanair (Boeing 737-800)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span><strong>Mgły zimowe</strong> — częste w kotlinie krakowskiej (grudzień–luty)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">📊 Statystyki opóźnień KRK–DUB (2025)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">19%</div>
                  <div className="text-sm text-slate-600">Lotów opóźnionych &gt;3h</div>
                  <div className="text-xs text-slate-500 mt-1">(Ryanair)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">43 min</div>
                  <div className="text-sm text-slate-600">Średnie opóźnienie</div>
                  <div className="text-xs text-slate-500 mt-1">(wszystkie loty)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">400 €</div>
                  <div className="text-sm text-slate-600">Twoje odszkodowanie</div>
                  <div className="text-xs text-slate-500 mt-1">(gdy &gt;3h opóźnienia)</div>
                </div>
              </div>
            </div>
          </section>

          {/* Compensation Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-blue-600" />
              Ile odszkodowania za opóźnienie Kraków–Dublin?
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 mb-6">
              <div className="text-center mb-6">
                <div className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-2">
                  Dystans: ~1,680 km (lot średni w UE)
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

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-3">💡 Przykład kalkulacji odszkodowania</h3>
              <div className="text-sm space-y-2">
                <p>
                  <strong>Twój lot:</strong> Ryanair FR 9142, KRK → DUB, 12 czerwca 2025<br/>
                  <strong>Planowane wylądowanie:</strong> 17:30<br/>
                  <strong>Rzeczywiste wylądowanie:</strong> 21:00 (opóźnienie <strong>3h 30min</strong>)
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                  <div className="text-green-900">
                    ✅ <strong>Opóźnienie &gt;3h</strong> → Przysługuje odszkodowanie<br/>
                    ✅ <strong>Dystans ~1,680 km</strong> → Stawka: 400 €<br/>
                    ✅ <strong>Termin na roszczenie:</strong> Do 12 czerwca 2028 (3 lata)
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Jak uzyskać odszkodowanie */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Jak uzyskać odszkodowanie za opóźniony lot Kraków–Dublin?
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
                    pokazujący faktyczny czas przylotu do Dublina.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Złóż roszczenie do Ryanair
                  </h3>
                  <p className="text-slate-700 mb-3">
                    Wyślij formularz reklamacyjny na stronę linii. <strong>Deadline: 3 lata</strong> od daty lotu.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
                    <strong>Formularz Ryanair:</strong> <a href="https://www.ryanair.com/pl/pl/useful-info/help-centre/refunds" target="_blank" rel="noopener" className="text-blue-600 hover:underline">ryanair.com/refunds</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    Przekaż sprawę do ClaimWinger
                  </h3>
                  <p className="text-slate-700">
                    ClaimWinger wyegzekwuje odszkodowanie w Twoim imieniu — szczególnie skuteczny w sporach z Ryanair. 
                    <strong>Płacisz tylko prowizję przy sukcesie</strong> (25% + VAT).
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
                  Czy lot powrotny Dublin–Kraków też daje prawo do odszkodowania?
                </h3>
                <p className="text-slate-700">
                  <strong>Tak!</strong> WE 261 obowiązuje dla lotów do UE (wszystkie linie) oraz z UE (tylko linie UE). 
                  Lot DUB→KRK = lot do UE, więc odszkodowanie 400 € przysługuje.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Dlaczego Ryanair często odmawia odszkodowania za loty do Dublina?
                </h3>
                <p className="text-slate-700">
                  Ryanair stosuje <strong>agresywną politykę odmów</strong>, powołując się na "nadzwyczajne okoliczności" — 
                  zwłaszcza na trasach do swojego głównego hubu (Dublin). ClaimWinger ma 96% skuteczności w egzekwowaniu 
                  odszkodowań dzięki naciskom prawnym.
                </p>
              </div>

              <div className="border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">
                  Czy pogoda w Dublinie zwalnia z wypłaty odszkodowania?
                </h3>
                <p className="text-slate-700">
                  <strong>Zależy.</strong> Ekstremalna pogoda (huragan, śnieżyca) = nadzwyczajna okoliczność (brak odszkodowania). 
                  Zwykłe opady deszczu, mgła, wiatr boczny = normalne warunki eksploatacyjne (odszkodowanie przysługuje).
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Odzyskaj swoje 400 € za opóźniony lot Kraków–Dublin
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                ClaimWinger wyegzekwuje odszkodowanie za Ciebie — nawet od Ryanair. Płacisz tylko przy sukcesie.
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
                ✓ Bez ukrytych kosztów &nbsp;•&nbsp; ✓ Prowizja tylko przy sukcesie &nbsp;•&nbsp; ✓ 96% skuteczności z Ryanair
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
              <Link href="/blog/ryanair-odszkodowanie-polska" className="text-blue-600 hover:underline">
                → Ryanair odszkodowanie — kompletny przewodnik
              </Link>
              <Link href="/blog/lotnisko-krakow-balice-opozniony-lot" className="text-blue-600 hover:underline">
                → Lotnisko Kraków-Balice — opóźniony lot
              </Link>
              <Link href="/blog/warszawa-dublin-opoznienie-odszkodowanie" className="text-blue-600 hover:underline">
                → Warszawa–Dublin opóźnienie — odszkodowanie
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
