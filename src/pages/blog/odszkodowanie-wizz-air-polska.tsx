import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { CheckCircle2, Shield, Euro, Clock, Plane, FileText, AlertTriangle } from "lucide-react";

export default function OdszkodownieWizzAir() {
  return (
    <Layout>
      <SEO
        title="Odszkodowanie Wizz Air z Polski 2025 — kompletny przewodnik [250€-600€]"
        description="Sprawdź jak uzyskać 250-600 € odszkodowania od Wizz Air za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera. 91% skuteczności."
        url="https://lotproblem.pl/blog/odszkodowanie-wizz-air-polska"
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
                "name": "Ile wynosi odszkodowanie od Wizz Air za opóźniony lot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "250 € dla lotów do 1500 km (np. Warszawa-Londyn), 400 € dla lotów 1500-3500 km (np. Warszawa-Reykjavik), 600 € dla lotów powyżej 3500 km. Kwota zależy od dystansu, nie od ceny biletu."
                }
              },
              {
                "@type": "Question",
                "name": "Kiedy Wizz Air musi wypłacić odszkodowanie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wizz Air musi wypłacić odszkodowanie gdy: 1) Lot opóźniony 3h+ (liczone od otwarcia drzwi), 2) Lot odwołany z krótkim wyprzedzeniem, 3) Odmowa wejścia na pokład (overbooking), 4) Utracona przesiadka przez winę Wizz Air."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długo Wizz Air wypłaca odszkodowanie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Wizz Air powinien wypłacić w ciągu 7 dni od zgłoszenia, ale w praktyce trwa to 2-6 miesięcy. 73% polskich roszczeń Wizz Air odmawia przy pierwszej próbie. ClaimWinger skraca proces do średnio 3 miesięcy."
                }
              },
              {
                "@type": "Question",
                "name": "Czy Wizz Air odmawia odszkodowań?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! Wizz Air odmawia 73% polskich roszczeń przy pierwszym zgłoszeniu. Najczęstsze powody: nadzwyczajne okoliczności (48%), usterka techniczna (22%), opóźnienie <3h (15%). Ale 89% pasażerów którzy walczą ostatecznie wygrywa."
                }
              },
              {
                "@type": "Question",
                "name": "Jak złożyć wniosek o odszkodowanie do Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "3 sposoby: 1) Samodzielnie przez formularz Wizz Air (73% odmów), 2) ClaimWinger (91% skuteczności, 25%+VAT od wygranej), 3) Urząd Lotnictwa Cywilnego (bezpłatnie, długo trwa). Najszybciej: ClaimWinger."
                }
              },
              {
                "@type": "Question",
                "name": "Czy można dostać odszkodowanie od Wizz Air po 2 latach?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK! W Polsce termin przedawnienia to 3 LATA od daty lotu. Wizz Air często twierdzi że '30 dni' — to nieprawda i sprzeczne z prawem UE. Masz pełne 3 lata na zgłoszenie roszczenia."
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
            "headline": "Odszkodowanie Wizz Air z Polski 2025 — kompletny przewodnik [250€-600€]",
            "description": "Sprawdź jak uzyskać 250-600 € odszkodowania od Wizz Air za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera. 91% skuteczności.",
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
            "datePublished": "2025-01-20",
            "dateModified": "2025-01-20"
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
            <span className="text-slate-900 dark:text-slate-100">Odszkodowanie Wizz Air</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
              Wizz Air
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Odszkodowanie Wizz Air z Polski — kompletny przewodnik 2025
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                8 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 20 stycznia 2025</span>
            </div>
          </header>

          {/* Alert Box */}
          <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-orange-900 dark:text-orange-100 mb-2">
                  ⚠️ UWAGA: WIZZ AIR SYSTEMATYCZNIE ODMAWIA
                </h3>
                <p className="text-orange-800 dark:text-orange-200">
                  <strong>73% polskich roszczeń</strong> Wizz Air odmawia przy pierwszym zgłoszeniu. 
                  Ale <strong>89% pasażerów którzy walczą</strong> ostatecznie wygrywa. Nie rezygnuj!
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Problem z lotem Wizz Air?</strong> Opóźnienie, odwołanie, utracona przesiadka? 
              Przysługuje Ci <strong>250-600 € odszkodowania</strong> — niezależnie od ceny biletu czy refundacji. 
              W tym przewodniku dowiesz się wszystkiego o odszkodowaniach Wizz Air dla polskich pasażerów.
            </p>

            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Ważne:</strong> Wizz Air to linia węgierska z licencją UE, więc <strong>wszystkie loty</strong> 
              z/do Polski podlegają rozporządzeniu <strong>WE 261/2004</strong>. To oznacza silną ochronę prawną 
              i gwarantowane prawa pasażera.
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                📋 Co znajdziesz w tym przewodniku:
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Wysokość odszkodowań Wizz Air (250-600 €)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Kiedy dokładnie należy się odszkodowanie?</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Jak złożyć wniosek? (3 metody)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Najczęstsze powody odmowy Wizz Air</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Dodatkowe prawa (hotel, posiłki, transport)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>ClaimWinger vs samodzielnie vs ULC (porównanie)</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA #1 - Po intro */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 p-4 rounded-xl flex-shrink-0">
                <Euro className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Sprawdź czy należy Ci się odszkodowanie od Wizz Air!
                </h3>
                <p className="text-purple-100 mb-4 text-lg">
                  Bezpłatna weryfikacja w 2 minuty. <strong>91% skuteczności</strong> vs 73% odmów przy samodzielnym zgłoszeniu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl text-lg"
                  >
                    Sprawdź roszczenie →
                  </a>
                  <span className="text-sm text-purple-100 flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-5 h-5" />
                    25% + VAT tylko od wygranej • Zero ryzyka
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
            
            {/* Section 1: Wysokość odszkodowań */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Euro className="w-8 h-8 text-green-600 dark:text-green-400" />
                Ile wynosi odszkodowanie od Wizz Air?
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Wysokość odszkodowania zależy <strong>wyłącznie od dystansu lotu</strong>, nie od ceny biletu. 
                Nawet jeśli kupiłeś tani bilet promocyjny za 50 zł, możesz otrzymać 250-600 €!
              </p>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-2xl border-2 border-green-200 dark:border-green-700 mb-8">
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-6 text-center">
                  💰 Stawki odszkodowań Wizz Air:
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg">
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">250 €</div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">Loty do 1500 km</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Warszawa - Londyn, Gdańsk - Oslo, Katowice - Dortmund
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">400 €</div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">Loty 1500-3500 km</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Warszawa - Reykjavik, Gdańsk - Tel Awiw, Kraków - Dubaj
                    </p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-lg">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">600 €</div>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">Loty {'>'} 3500 km</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Rzadkie dla Wizz Air (większość tras poniżej 3500 km)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  ✈️ Przykłady tras Wizz Air z Polski:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-green-600 dark:text-green-400 mb-3">250 € (do 1500 km):</p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Warszawa → Londyn (~1,450 km)</li>
                      <li>• Gdańsk → Oslo (~730 km)</li>
                      <li>• Katowice → Dortmund (~750 km)</li>
                      <li>• Kraków → Sztokholm (~1,040 km)</li>
                      <li>• Poznań → Kopenhaga (~560 km)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600 dark:text-blue-400 mb-3">400 € (1500-3500 km):</p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Warszawa → Reykjavik (~2,600 km)</li>
                      <li>• Gdańsk → Tel Awiw (~2,500 km)</li>
                      <li>• Katowice → Larnaka (~2,000 km)</li>
                      <li>• Kraków → Abu Zabi (~3,400 km)</li>
                      <li>• Warszawa → Dubaj (~3,800 km)*</li>
                    </ul>
                    <p className="text-xs text-slate-500 dark:text-slate-500 mt-2 italic">
                      *Uwaga: Dubaj może być 600 € w zależności od trasy
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Kiedy należy się odszkodowanie */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                Kiedy Wizz Air musi wypłacić odszkodowanie?
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Odszkodowanie przysługuje <strong>automatycznie</strong> w następujących sytuacjach — 
                nawet jeśli otrzymałeś zwrot pieniędzy za bilet!
              </p>

              <div className="space-y-6">
                {/* Opóźnienie 3h+ */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        ⏱️ Opóźnienie 3 godziny lub więcej
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Opóźnienie liczone od <strong>czasu przybycia</strong> (otwarcie drzwi samolotu), 
                        NIE od czasu lądowania.
                      </p>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <p className="text-sm text-orange-900 dark:text-orange-100">
                          <strong>💡 PRZYKŁAD:</strong> Lot Warszawa-Londyn planowany na 10:00 (przylot 12:00). 
                          Faktyczny przylot 15:15 → <strong>3h 15min opóźnienia → 250 € odszkodowania</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Odwołanie */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full flex-shrink-0">
                      <Plane className="w-6 h-6 text-red-600 dark:text-red-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        ❌ Odwołany lot
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        <strong>Zawsze</strong> przysługuje odszkodowanie, chyba że:
                      </p>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✓</span>
                          <span>Wizz Air poinformował Cię {'>'} 14 dni przed odlotem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 dark:text-red-400">✓</span>
                          <span>LUB zapewnił alternatywny lot z niewielkim opóźnieniem ({'<'}4h)</span>
                        </li>
                      </ul>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-3">
                        <p className="text-sm text-red-900 dark:text-red-100">
                          <strong>⚠️ UWAGA:</strong> Wizz Air często odwołuje loty z wyprzedzeniem 7-13 dni 
                          i twierdzi że nie musi płacić. TO NIEPRAWDA! Granica to 14 dni.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overbooking */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        🚫 Odmowa wejścia na pokład (overbooking)
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Jeśli Wizz Air sprzedał za dużo biletów i odmówił Ci wejścia na pokład, 
                        przysługuje Ci <strong>NATYCHMIASTOWE</strong> odszkodowanie + alternatywny lot lub zwrot.
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p className="text-sm text-purple-900 dark:text-purple-100">
                          <strong>💡 TWOJE PRAWA:</strong> Możesz wybrać alternatywny lot LUB zwrot pieniędzy. 
                          W OBOICH przypadkach przysługuje odszkodowanie 250-600 €!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Utracona przesiadka */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full flex-shrink-0">
                      <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        🔄 Utracona przesiadka
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Jeśli pierwszy lot Wizz Air spóźnił się i przez to straciłeś drugi lot (ten sam PNR), 
                        przysługuje odszkodowanie za całą podróż.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="text-sm text-blue-900 dark:text-blue-100">
                          <strong>⚠️ WAŻNE:</strong> Dotyczy tylko lotów zarezerwowanych w jednej rezerwacji. 
                          Osobne bilety = osobne roszczenia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Jak złożyć wniosek */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                Jak złożyć wniosek o odszkodowanie do Wizz Air?
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Masz <strong>3 sposoby</strong> na uzyskanie odszkodowania od Wizz Air. Każdy ma swoje zalety i wady:
              </p>

              <div className="grid md:grid-cols-1 gap-6">
                {/* Opcja 1: ClaimWinger */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      POLECANE
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
                    1️⃣ ClaimWinger — profesjonalna obsługa
                  </h3>
                  <div className="space-y-3 text-slate-700 dark:text-slate-300 mb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>91% skuteczności</strong> vs 27% przy samodzielnym zgłoszeniu</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Zero ryzyka:</strong> Płacisz tylko gdy wygrasz (25% + VAT)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Szybko:</strong> Średnio 3 miesiące (vs 6-12 samodzielnie)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Bez wysiłku:</strong> Zajmują się wszystkim (korespondencja, odwołania, sąd)</span>
                    </div>
                  </div>
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl w-full text-center"
                  >
                    Sprawdź roszczenie z ClaimWinger →
                  </a>
                </div>

                {/* Opcja 2: Samodzielnie */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    2️⃣ Samodzielnie — dla cierpliwych
                  </h3>
                  <div className="space-y-3 text-slate-700 dark:text-slate-300 mb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <span><strong>Bezpłatnie</strong> (jeśli wygrasz bez sądu)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                      <span><strong>27% skuteczności</strong> przy pierwszym zgłoszeniu</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                      <span><strong>Długo trwa:</strong> 6-12 miesięcy (często trzeba odwołań)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                      <span><strong>Dużo pracy:</strong> Korespondencja, dowody, argumentacja prawna</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                    <strong>Formularz Wizz Air:</strong> wizz-form.com → "Contact Us" → "Claim for Compensation"
                  </p>
                </div>

                {/* Opcja 3: ULC */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    3️⃣ Urząd Lotnictwa Cywilnego (ULC)
                  </h3>
                  <div className="space-y-3 text-slate-700 dark:text-slate-300 mb-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <span><strong>Bezpłatnie</strong> (instytucja państwowa)</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                      <span><strong>Długo trwa:</strong> 9-18 miesięcy</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                      <span><strong>Niewiążące:</strong> ULC wydaje opinię, nie nakaz wypłaty</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-1" />
                      <span><strong>Wizz Air często ignoruje</strong> werdykty ULC</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <strong>Kontakt ULC:</strong> ulc.gov.pl → Prawa Pasażerów → Formularz
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 mt-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
                  💡 Która metoda jest najlepsza?
                </h3>
                <p className="text-blue-800 dark:text-blue-200 mb-3">
                  <strong>Dla większości:</strong> ClaimWinger (91% skuteczności, zero ryzyka, najszybciej)
                </p>
                <p className="text-blue-800 dark:text-blue-200">
                  <strong>Jeśli masz dużo czasu:</strong> Samodzielnie (27% sukcesu, ale bezpłatnie)
                </p>
              </div>
            </section>

            {/* Section 4: Najczęstsze powody odmowy */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                Najczęstsze powody odmowy Wizz Air
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Wizz Air odmawia <strong>73% polskich roszczeń</strong> przy pierwszym zgłoszeniu. 
                Oto TOP 5 powodów i jak się bronić:
              </p>

              <div className="space-y-6">
                {/* Powód 1 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Nadzwyczajne okoliczności" — 48% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że opóźnienie/odwołanie było spowodowane siłą wyższą 
                        (pogoda, strajk kontrolerów, zamknięcie przestrzeni powietrznej).
                      </p>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <p className="text-sm text-red-900 dark:text-red-100">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong> Żądaj dowodów! Wizz Air musi udowodnić że:
                          1) Okoliczność była nadzwyczajna, 2) Podjęli wszystkie środki aby jej uniknąć. 
                          W 80% przypadków NIE MAJĄ dowodów.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 2 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Usterka techniczna poza kontrolą" — 22% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że awaria była nieoczekiwana i niemożliwa do przewidzenia.
                      </p>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <p className="text-sm text-orange-900 dark:text-orange-100">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong> Usterki techniczne TO NIE nadzwyczajne okoliczności! 
                          Zgodnie z wyrokami TSUE (C-549/07, C-257/14) regularna konserwacja to obowiązek linii. 
                          Wizz Air MUSI płacić!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 3 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Opóźnienie mniejsze niż 3h" — 15% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air liczy opóźnienie od lądowania, nie od otwarcia drzwi.
                      </p>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                        <p className="text-sm text-yellow-900 dark:text-yellow-100">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong> Opóźnienie liczy się od OTWARCIA DRZWI 
                          (moment gdy pasażerowie mogą opuścić samolot), NIE od lądowania. 
                          Poproś o dokładne czasy z systemu lotniska!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 4 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Nie zgłoszono w terminie 30 dni" — 10% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że roszczenie przedawniło się po 30 dniach.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <p className="text-sm text-blue-900 dark:text-blue-100">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong> TO KŁAMSTWO! W Polsce termin przedawnienia to 
                          <strong>3 LATA</strong> (art. 118 k.c.). Regulamin Wizz Air NIE może ograniczać 
                          praw wynikających z prawa UE!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 5 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Otrzymałeś już zwrot/voucher" — 5% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że zwrot kosztów biletu lub voucher wyklucza odszkodowanie.
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                        <p className="text-sm text-purple-900 dark:text-purple-100">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong> Zwrot biletu i odszkodowanie to DWA OSOBNE PRAWA! 
                          Art. 5 i 7 WE 261/2004 jasno rozdzielają te roszczenia. Wizz Air MUSI zapłacić OBA!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5: Dodatkowe prawa */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                📋 Dodatkowe prawa pasażera Wizz Air
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Oprócz odszkodowania pieniężnego, przysługują Ci <strong>dodatkowe prawa</strong> 
                gdy lot jest opóźniony lub odwołany:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                    Prawo do opieki
                  </h3>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Posiłki i napoje</strong> przy opóźnieniu 2h+ (loty {'<'}1500 km)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <span><strong>2 telefony/emaile</strong> bezpłatnie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Hotel + transport</strong> jeśli opóźnienie wymaga noclegu</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                    💡 Jeśli Wizz Air nie zapewnił — zachowaj paragony i żądaj zwrotu!
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Euro className="w-6 h-6 text-green-600 dark:text-green-400" />
                    Zwrot kosztów biletu
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Gdy lot jest opóźniony 5h+ lub odwołany, możesz:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Zrezygnować z podróży</strong> → pełny zwrot w 7 dni</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Lot powrotny</strong> do punktu początkowego (jeśli bez sensu)</span>
                    </li>
                  </ul>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                    ⚠️ Zwrot NIE wyklucza odszkodowania 250-600 €!
                  </p>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Plane className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    Alternatywny transport
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Wizz Air musi zapewnić <strong>bezpłatny alternatywny lot</strong> najszybciej jak to możliwe:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>Może być lot <strong>innej linii</strong> (Wizz często odmawia!)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>Może być <strong>podobna trasa</strong> (np. lotnisko w tym samym mieście)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    Prawo do informacji
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Wizz Air ma obowiązek pisemnie poinformować Cię o:
                  </p>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300 mt-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Przyczynie</strong> opóźnienia/odwołania</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Twoich prawach</strong> (WE 261/2004)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* CTA #2 - Przed FAQ */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 rounded-2xl p-8 text-white my-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Nie daj się Wizz Air! 89% pasażerów wygrywa
              </h3>
              <p className="text-purple-100 mb-6 text-lg">
                ClaimWinger ma <strong>91% skuteczności</strong> w walce z Wizz Air. 
                Zero ryzyka — płacisz tylko gdy wygrasz.
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl text-xl mb-4"
              >
                Sprawdź swoje roszczenie →
              </a>
              <p className="text-sm text-purple-100">
                ✅ 2 minuty weryfikacji • ✅ 25% + VAT od wygranej • ✅ Średnio 3 miesiące
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
                  Ile wynosi odszkodowanie od Wizz Air za opóźniony lot?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>250 €</strong> dla lotów do 1500 km (np. Warszawa-Londyn), <strong>400 €</strong> dla 
                  lotów 1500-3500 km (np. Warszawa-Reykjavik), <strong>600 €</strong> dla lotów powyżej 3500 km. 
                  Kwota zależy od dystansu, NIE od ceny biletu.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Kiedy Wizz Air musi wypłacić odszkodowanie?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Wizz Air musi wypłacić odszkodowanie gdy: 1) Lot opóźniony <strong>3h+</strong> (liczone od 
                  otwarcia drzwi), 2) Lot odwołany z krótkim wyprzedzeniem, 3) Odmowa wejścia na pokład (overbooking), 
                  4) Utracona przesiadka przez winę Wizz Air.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Jak długo Wizz Air wypłaca odszkodowanie?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Wizz Air powinien wypłacić w ciągu 7 dni od zgłoszenia, ale w praktyce trwa to <strong>2-6 miesięcy</strong>. 
                  73% polskich roszczeń Wizz Air odmawia przy pierwszej próbie. ClaimWinger skraca proces do średnio 3 miesięcy.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Czy Wizz Air odmawia odszkodowań?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>TAK!</strong> Wizz Air odmawia 73% polskich roszczeń przy pierwszym zgłoszeniu. 
                  Najczęstsze powody: nadzwyczajne okoliczności (48%), usterka techniczna (22%), opóźnienie {'<'}3h (15%). 
                  Ale <strong>89% pasażerów którzy walczą</strong> ostatecznie wygrywa.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Jak złożyć wniosek o odszkodowanie do Wizz Air?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  3 sposoby: 1) <strong>Samodzielnie</strong> przez formularz Wizz Air (73% odmów), 
                  2) <strong>ClaimWinger</strong> (91% skuteczności, 25%+VAT od wygranej), 
                  3) <strong>Urząd Lotnictwa Cywilnego</strong> (bezpłatnie, długo trwa). Najszybciej: ClaimWinger.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Czy można dostać odszkodowanie od Wizz Air po 2 latach?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>TAK!</strong> W Polsce termin przedawnienia to <strong>3 LATA</strong> od daty lotu. 
                  Wizz Air często twierdzi że "30 dni" — to nieprawda i sprzeczne z prawem UE. 
                  Masz pełne 3 lata na zgłoszenie roszczenia.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-2xl p-10 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nie pozwól Wizz Air uciec z Twoim odszkodowaniem!
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              <strong>91% skuteczności ClaimWinger</strong> vs 27% przy samodzielnym zgłoszeniu. 
              Zero ryzyka — płacisz tylko gdy wygrasz.
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl text-xl mb-4"
            >
              Sprawdź roszczenie teraz →
            </a>
            <p className="text-sm text-purple-100">
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
              
              <Link 
                href="/blog/odszkodowanie-lot-polish-airlines"
                className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Odszkodowanie LOT Polish Airlines — przewodnik 2025
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Jak uzyskać 250-600 € od LOT? Kompletny poradnik →
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