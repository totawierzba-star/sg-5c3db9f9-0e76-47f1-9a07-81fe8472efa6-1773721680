import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { CheckCircle2, Shield, Euro, Clock, Plane, FileText } from "lucide-react";

export default function PrawaRyanair() {
  return (
    <Layout>
      <SEO
        title="Prawa Pasażera Ryanair 2025 — WE 261/2004 [Kompletny Przewodnik]"
        description="Poznaj wszystkie prawa pasażera Ryanair: odszkodowania 250€-600€, prawo do opieki, zwroty kosztów, hotel. Kompletny przewodnik WE 261/2004."
        url="https://lotproblem.pl/blog/prawa-pasazera-ryanair"
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
                "name": "Jakie prawa ma pasażer Ryanair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pasażer Ryanair ma prawo do: 1) Odszkodowania 250-600 € za opóźnienie 3h+ lub odwołanie, 2) Zwrotu kosztów biletu, 3) Bezpłatnej opieki (jedzenie, napoje, hotel), 4) Informacji o przyczynach opóźnienia, 5) Alternatywnego transportu."
                }
              },
              {
                "@type": "Question",
                "name": "Czy WE 261/2004 obejmuje loty Ryanair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Wszystkie loty Ryanair z/do UE są objęte rozporządzeniem WE 261/2004. Ryanair ma licencję irlandzką, więc większość ich tras podlega prawu unijnemu o ochronie praw pasażerów."
                }
              },
              {
                "@type": "Question",
                "name": "Ile wynosi odszkodowanie od Ryanair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "250 € dla lotów do 1500 km, 400 € dla lotów 1500-3500 km w UE lub lotów powyżej 1500 km poza UE, 600 € dla lotów powyżej 3500 km poza UE. Kwota zależy od dystansu, nie od ceny biletu."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Ryanair musi zapewnić hotel przy opóźnieniu?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Jeśli opóźnienie wymaga noclegu, Ryanair musi zapewnić bezpłatny hotel + transport do hotelu. Jeśli tego nie zrobi, masz prawo do zwrotu kosztów (zachowaj paragony!)."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długo mam na zgłoszenie roszczenia do Ryanair?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "W Polsce masz 3 LATA od daty lotu. Nie daj się zwieść twierdzeniom Ryanair o '7 dniach' — to wewnętrzny regulamin sprzeczny z prawem UE."
                }
              },
              {
                "@type": "Question",
                "name": "Co jeśli Ryanair odmówi wypłaty odszkodowania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nie rezygnuj! 87% pasażerów którzy walczą o swoje prawa ostatecznie wygrywa. Możesz: 1) Złożyć odwołanie, 2) Skorzystać z ClaimWinger (91% skuteczności), 3) Zgłosić sprawę do ULC, 4) Pozwać do sądu."
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Prawa Pasażera Ryanair 2025 — WE 261/2004 [Kompletny Przewodnik]",
            "description": "Poznaj wszystkie prawa pasażera Ryanair: odszkodowania 250€-600€, prawo do opieki, zwroty kosztów, hotel. Kompletny przewodnik WE 261/2004.",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png"
              }
            },
            "datePublished": "2025-01-19",
            "dateModified": "2025-01-19"
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-100">Prawa pasażera Ryanair</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-sm font-semibold mb-4">
              Ryanair
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Prawa Pasażera Ryanair — co gwarantuje WE 261/2004?
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                7 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 19 stycznia 2025</span>
            </div>
          </header>

          {/* Alert Box */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">
                  🛡️ TWOJE PRAWA SĄ CHRONIONE PRAWEM UNIJNYM
                </h3>
                <p className="text-blue-800 dark:text-blue-200">
                  Niezależnie od tego co piszą regulaminy Ryanair, <strong>WE 261/2004</strong> to prawo nadrzędne. 
                  Ryanair NIE MOŻE odmówić tych praw — są egzekwowalne sądownie w całej Unii Europejskiej.
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Masz problem z lotem Ryanair?</strong> Opóźnienie, odwołanie, overbooking? 
              Poznaj swoje prawa! Rozporządzenie <strong>WE 261/2004</strong> gwarantuje pasażerom Ryanair szeroki 
              zakres ochrony — od odszkodowań pieniężnych po bezpłatną opiekę i hotel.
            </p>

            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Ważne:</strong> Te prawa przysługują automatycznie i Ryanair ma obowiązek je respektować. 
              W tym przewodniku dowiesz się wszystkiego o prawach pasażera Ryanair i jak je egzekwować.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                📋 Co znajdziesz w tym przewodniku:
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Podstawy WE 261/2004 — zakres i stosowanie</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Prawo do odszkodowania pieniężnego (250-600 €)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Prawo do opieki (jedzenie, napoje, komunikacja)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Prawo do zwrotu kosztów biletu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Prawo do hotelu i transportu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                  <span>Jak egzekwować prawa? (ClaimWinger, ULC, sąd)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA #1 - Po intro */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 p-4 rounded-xl flex-shrink-0">
                <Euro className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Sprawdź czy należy Ci się odszkodowanie!
                </h3>
                <p className="text-blue-100 mb-4 text-lg">
                  Bezpłatna weryfikacja w 2 minuty. <strong>91% skuteczności</strong> w dochodzeniu roszczeń od Ryanair.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl text-lg"
                  >
                    Sprawdź roszczenie →
                  </a>
                  <span className="text-sm text-blue-100 flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-5 h-5" />
                    25% + VAT tylko od wygranej • Zero ryzyka
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
            
            {/* Section 1: WE 261/2004 Podstawy */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                WE 261/2004 — podstawy rozporządzenia
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
                <strong>Rozporządzenie (WE) nr 261/2004</strong> Parlamentu Europejskiego i Rady z dnia 11 lutego 2004 r. 
                to fundament ochrony praw pasażerów lotniczych w Unii Europejskiej. Ustanawia jasne zasady odszkodowań 
                i opieki w przypadku problemów z lotem.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 my-6">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                  ✅ Kiedy WE 261/2004 chroni Twoją podróż Ryanair?
                </h3>
                <ul className="space-y-3 text-blue-800 dark:text-blue-200">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span><strong>Odloty z UE:</strong> Dowolny lot Ryanair startujący z lotniska w UE (również do krajów trzecich)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span><strong>Przyloty do UE:</strong> Loty Ryanair (linia z licencją UE) lądujące w UE z krajów trzecich</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span><strong>Wewnątrz UE:</strong> Wszystkie loty Ryanair między państwami członkowskimi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span><strong>UWAGA:</strong> Wielka Brytania (po Brexit) — loty do/z UK wciąż objęte!</span>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  📊 Przykłady tras Ryanair objętych WE 261/2004:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-green-600 dark:text-green-400 mb-2">✅ OBJĘTE:</p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Warszawa → Londyn (odlot z UE)</li>
                      <li>• Kraków → Dublin (odlot z UE)</li>
                      <li>• Barcelona → Warszawa (odlot + przylot UE)</li>
                      <li>• Londyn → Polska (linia UE → przylot UE)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 dark:text-red-400 mb-2">❌ NIE OBJĘTE:</p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Nowy Jork → Los Angeles (poza UE)</li>
                      <li>• Pekin → Tokio (poza UE)</li>
                      <li>• Dubaj → Bangkok (poza UE, nie linia UE)</li>
                      <li className="text-slate-500 dark:text-slate-500 italic">Ryanair nie lata na tych trasach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Prawo do Odszkodowania */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Euro className="w-8 h-8 text-green-600 dark:text-green-400" />
                Prawo do odszkodowania pieniężnego
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Najważniejsze prawo pasażera! Gdy Ryanair spóźnia się 3h+ lub odwołuje lot, <strong>automatycznie</strong> 
                przysługuje Ci odszkodowanie pieniężne — niezależnie od ceny biletu czy refundacji.
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 mb-8">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6 text-center">
                  💰 Wysokość odszkodowania od Ryanair:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">250 €</div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">Loty do 1500 km</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Np. Warszawa - Londyn, Kraków - Dublin, Gdańsk - Berlin
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">400 €</div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">Loty 1500-3500 km</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Np. Warszawa - Madera, Kraków - Wyspy Kanaryjskie
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">600 €</div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">Loty >3500 km</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Ryanair nie lata na takie dystanse (teoretycznie)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  ⏱️ Kiedy DOKŁADNIE należy się odszkodowanie?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg flex-shrink-0">
                      <Plane className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Opóźnienie</h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>3 godziny lub więcej</strong> opóźnienia czasu przybycia (liczone od otwarcia drzwi samolotu, 
                        NIE lądowania). Dotyczy też lotów przełożonych na inny dzień.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg flex-shrink-0">
                      <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Odwołanie</h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Zawsze</strong> przysługuje odszkodowanie (chyba że Ryanair poinformował Cię &gt;14 dni wcześniej 
                        lub zapewnił alternatywny lot z niewielkim opóźnieniem).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg flex-shrink-0">
                      <Plane className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2">Overbooking / Odmowa wejścia na pokład</h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        <strong>Zawsze</strong> przysługuje odszkodowanie + alternatywny lot lub pełny zwrot kosztów.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Prawo do Opieki */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                Prawo do opieki na lotnisku
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Gdy lot jest opóźniony lub odwołany, Ryanair ma obowiązek zapewnić Ci <strong>bezpłatną opiekę</strong> 
                w zależności od długości oczekiwania. To prawo niezależne od odszkodowania pieniężnego!
              </p>

              <div className="space-y-6">
                {/* 2h+ */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Od 2 godzin opóźnienia (loty do 1500 km)
                      </h3>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Posiłki i napoje</strong> adekwatne do czasu oczekiwania</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Możliwość wykonania 2 telefonów</strong> lub emaili (lub faksów)</span>
                        </li>
                      </ul>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 italic">
                        Np. Warszawa - Londyn, Kraków - Dublin
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3h+ */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Od 3 godzin opóźnienia (loty 1500-3500 km)
                      </h3>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Posiłki i napoje</strong> adekwatne do czasu oczekiwania</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Możliwość wykonania 2 telefonów</strong> lub emaili</span>
                        </li>
                      </ul>
                      <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 italic">
                        Np. Warszawa - Madera, większość lotów Ryanair do ciepłych krajów
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nocleg */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Gdy opóźnienie wymaga noclegu
                      </h3>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Bezpłatny hotel</strong> (nocleg + śniadanie)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Transport</strong> z lotniska do hotelu i z powrotem</span>
                        </li>
                      </ul>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mt-4">
                        <p className="text-sm text-purple-900 dark:text-purple-100">
                          <strong>💡 WAŻNE:</strong> Jeśli Ryanair nie zapewnił hotelu, <strong>masz prawo sam zarezerwować 
                          rozsądny hotel</strong> (kategoria 3★) i zażądać zwrotu kosztów. ZACHOWAJ PARAGONY!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Pozostałe prawa (zwrot, informacje, etc.) - skrócone dla oszczędności miejsca */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                📋 Pozostałe prawa pasażera Ryanair
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-green-600 dark:text-green-400" />
                    Zwrot kosztów biletu
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Gdy lot jest odwołany lub opóźniony 5h+, możesz zrezygnować z podróży i zażądać <strong>pełnego zwrotu</strong> 
                    w ciągu 7 dni.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    + Lot powrotny do punktu początkowego (jeśli stało się to bez sensu)
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Alternatywny transport
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Ryanair musi zapewnić <strong>bezpłatny alternatywny lot</strong> do miejsca docelowego najszybciej jak to możliwe.
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Może być lot innej linii! (Ryanair często odmawia — to NIELEGALNE)
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    Prawo do informacji
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Ryanair ma obowiązek pisemnie poinformować Cię o <strong>przyczynie</strong> opóźnienia/odwołania 
                    i <strong>Twoich prawach</strong> (WE 261/2004).
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    Priorytetowe traktowanie
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Osoby o ograniczonej sprawności ruchowej (PRMs) mają prawo do <strong>dodatkowej opieki</strong> 
                    i pomocy na lotnisku + w samolocie.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA #2 - Przed FAQ */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-2xl p-8 text-white my-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Znasz swoje prawa — czas je egzekwować!
              </h3>
              <p className="text-green-100 mb-6 text-lg">
                ClaimWinger pomoże Ci odzyskać <strong>250-600 € odszkodowania</strong> od Ryanair. 
                <strong>91% skuteczności</strong>, zero ryzyka, płacisz tylko gdy wygrasz.
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl text-xl mb-4"
              >
                Sprawdź swoje roszczenie →
              </a>
              <p className="text-sm text-green-100">
                ✅ 2 minuty weryfikacji • ✅ 25% + VAT od wygranej • ✅ Średnio 2-6 miesięcy
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              ❓ Najczęściej zadawane pytania
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Jakie prawa ma pasażer Ryanair?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Pasażer Ryanair ma prawo do: <strong>1) Odszkodowania</strong> 250-600 € za opóźnienie 3h+ lub odwołanie, 
                  <strong>2) Zwrotu kosztów</strong> biletu, <strong>3) Bezpłatnej opieki</strong> (jedzenie, napoje, hotel), 
                  <strong>4) Informacji</strong> o przyczynach opóźnienia, <strong>5) Alternatywnego transportu</strong>.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Czy WE 261/2004 obejmuje loty Ryanair?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>TAK!</strong> Wszystkie loty Ryanair z/do UE są objęte rozporządzeniem WE 261/2004. Ryanair ma 
                  licencję irlandzką (UE), więc większość ich tras podlega prawu unijnemu o ochronie praw pasażerów.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Ile wynosi odszkodowanie od Ryanair?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>250 €</strong> dla lotów do 1500 km, <strong>400 €</strong> dla lotów 1500-3500 km w UE lub lotów 
                  powyżej 1500 km poza UE, <strong>600 €</strong> dla lotów powyżej 3500 km poza UE. Kwota zależy od dystansu, 
                  NIE od ceny biletu.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Czy Ryanair musi zapewnić hotel przy opóźnieniu?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>TAK!</strong> Jeśli opóźnienie wymaga noclegu, Ryanair musi zapewnić <strong>bezpłatny hotel</strong> + 
                  transport do hotelu. Jeśli tego nie zrobi, masz prawo do zwrotu kosztów (zachowaj paragony!). Zarezerwuj 
                  rozsądny hotel (3★).
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Jak długo mam na zgłoszenie roszczenia do Ryanair?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  W Polsce masz <strong>3 LATA</strong> od daty lotu. Nie daj się zwieść twierdzeniom Ryanair o "7 dniach" — 
                  to wewnętrzny regulamin sprzeczny z prawem UE. Termin przedawnienia określa ustawa, nie regulamin linii.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Co jeśli Ryanair odmówi wypłaty odszkodowania?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Nie rezygnuj! <strong>87% pasażerów</strong> którzy walczą o swoje prawa ostatecznie wygrywa. 
                  Możesz: 1) Złożyć odwołanie do Ryanair, 2) Skorzystać z ClaimWinger (91% skuteczności), 
                  3) Zgłosić sprawę do ULC, 4) Pozwać do sądu.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-10 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Egzekwuj swoje prawa pasażera!
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Znasz już wszystkie prawa — teraz czas je wykorzystać. <strong>91% skuteczności</strong> ClaimWinger 
              w walce z Ryanair.
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl text-xl mb-4"
            >
              Sprawdź roszczenie teraz →
            </a>
            <p className="text-sm text-blue-100">
              ⚡ Bezpłatna weryfikacja • 💰 25% + VAT od wygranej • 🛡️ Zero ryzyka
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              📚 Przeczytaj również:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/blog/ryanair-odmowil-odszkodowania"
                className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Ryanair odmówił odszkodowania — jak skutecznie walczyć?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  87% pasażerów którzy walczą wygrywa — dowiedz się jak →
                </p>
              </Link>
              
              <Link 
                href="/blog/odszkodowanie-ryanair-polska"
                className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Odszkodowanie Ryanair z Polski — kompletny przewodnik
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Wszystko o Ryanair: stawki, procedury, przykłady →
                </p>
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                ← Powrót do wszystkich artykułów
              </Link>
            </div>
          </div>

          {/* Back to Main */}
          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}