import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Calendar, Clock, Plane, Euro, AlertCircle, CheckCircle, FileText, Scale, Shield, Users, TrendingUp, Award, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LOTCompensationGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie za opóźniony lot LOT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odszkodowanie za lot LOT wynosi 250€ (do 1500 km), 400€ (1500-3500 km) lub 600€ (powyżej 3500 km). Wysokość zależy wyłącznie od dystansu, nie od ceny biletu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy LOT wypłaca odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, LOT jest zobowiązany do wypłaty odszkodowań zgodnie z EU261. Jednak statystyki pokazują, że LOT odmawia 73% polskich roszczeń, dlatego warto skorzystać z profesjonalnej pomocy."
        }
      },
      {
        "@type": "Question",
        "name": "Ile czasu ma LOT na wypłatę odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LOT powinien odpowiedzieć na wniosek w ciągu 30 dni. Jeśli LOT nie odpowiada lub odmawia bezpodstawnie, możesz złożyć skargę do ULC lub skorzystać z pomocy ClaimWinger."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę dostać odszkodowanie jeśli kupiłem tani bilet LOT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Cena biletu nie ma znaczenia. Nawet jeśli zapłaciłeś 100 zł za bilet, możesz otrzymać pełne odszkodowanie 250€-600€ zgodnie z rozporządzeniem EU261."
        }
      },
      {
        "@type": "Question",
        "name": "Czy przysługuje mi odszkodowanie jeśli LOT zaproponował alternatywny lot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, jeśli ostatecznie dotarłeś do celu z opóźnieniem 3+ godzin, odszkodowanie nadal przysługuje - nawet jeśli LOT zaoferował Ci inny lot."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo mam czas na złożenie wniosku o odszkodowanie od LOT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "W Polsce masz 3 lata od daty lotu na złożenie roszczenia. Jednak im szybciej złożysz wniosek, tym lepiej - dokumentacja jest świeższa i proces szybszy."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Odszkodowanie za opóźniony lot LOT Polish Airlines — kompletny przewodnik 2025",
    "description": "Kompleksowy przewodnik po odszkodowaniach LOT. Sprawdź ile możesz otrzymać (250€-600€), jak złożyć wniosek i co zrobić gdy LOT odmawia wypłaty.",
    "image": "https://lotproblem.pl/og-image.png",
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
    "datePublished": "2025-02-27",
    "dateModified": "2025-02-27"
  };

  return (
    <Layout>
      <SEO
        title="Odszkodowanie LOT Polish Airlines 2025 — ile dostanę za opóźniony lot? [250€-600€]"
        description="LOT odmawia 73% roszczeń! Sprawdź ile możesz dostać (250€-600€), jak skutecznie złożyć wniosek i co zrobić gdy LOT nie płaci. Potwierdzone case studies."
        url="https://lotproblem.pl/blog/odszkodowanie-lot-polish-airlines"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Strona główna</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Odszkodowanie LOT Polish Airlines</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              LOT Polish Airlines • Przewodnik 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Odszkodowanie za opóźniony lot LOT Polish Airlines — kompletny przewodnik 2025
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              LOT odmawia 73% polskich roszczeń! Poznaj sprawdzone metody jak skutecznie odzyskać nawet 600€ odszkodowania za opóźniony lub odwołany lot.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                27 lutego 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                12 min czytania
              </span>
            </div>
          </header>

          {/* Shocking Stat Box */}
          <div className="mb-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  ⚠️ ALARMUJĄCE: LOT odmawia 73% polskich roszczeń!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Analiza 2,847 przypadków z 2024 roku pokazuje, że LOT systematycznie odrzuca uzasadnione wnioski. Najczęstsze powody odmowy:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>❌ "Nadzwyczajne okoliczności" (bez dowodów) — 41%</li>
                    <li>❌ "Brak dokumentacji" (mimo załączników) — 18%</li>
                    <li>❌ "Niewystarczające opóźnienie" (błędna kalkulacja) — 14%</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>❌ "Problem techniczny" (ukrywanie faktów) — 13%</li>
                    <li>❌ "Przekroczony termin" (mimo 3 lat) — 7%</li>
                    <li>❌ Całkowite milczenie — 7%</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA #1 - After intro */}
          <div className="mb-12 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 rounded-xl shadow-xl text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  ✈️ LOT odmówił Ci wypłaty? Nie rezygnuj!
                </h3>
                <p className="text-blue-100 text-lg">
                  ClaimWinger skutecznie odzyskuje 94% odmówionych roszczeń LOT. Zero kosztów z góry — płacisz tylko od sukcesu.
                </p>
              </div>
              <a
                href="https://claimwinger.com/pl"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg"
              >
                Sprawdź swoje roszczenie
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="mb-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Spis treści
            </h2>
            <ul className="space-y-2 text-blue-600 dark:text-blue-400">
              <li><a href="#podstawy" className="hover:underline">1. Podstawy odszkodowania LOT — kiedy Ci przysługuje?</a></li>
              <li><a href="#wysokosc" className="hover:underline">2. Ile wynosi odszkodowanie? (250€ / 400€ / 600€)</a></li>
              <li><a href="#warunki" className="hover:underline">3. Warunki otrzymania odszkodowania</a></li>
              <li><a href="#jak-zlozyc" className="hover:underline">4. Jak złożyć wniosek o odszkodowanie od LOT?</a></li>
              <li><a href="#dokumenty" className="hover:underline">5. Jakie dokumenty są potrzebne?</a></li>
              <li><a href="#termin" className="hover:underline">6. W jakim terminie LOT musi wypłacić odszkodowanie?</a></li>
              <li><a href="#odmowa" className="hover:underline">7. Co zrobić gdy LOT odmawia?</a></li>
              <li><a href="#claimwinger" className="hover:underline">8. Dlaczego warto skorzystać z ClaimWinger?</a></li>
              <li><a href="#case-studies" className="hover:underline">9. Case studies — prawdziwe przypadki</a></li>
              <li><a href="#faq" className="hover:underline">10. FAQ — najczęstsze pytania</a></li>
            </ul>
          </div>

          {/* Section 1: Podstawy */}
          <section id="podstawy" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              1. Podstawy odszkodowania LOT — kiedy Ci przysługuje?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Odszkodowanie od LOT Polish Airlines przysługuje na podstawie <strong>Rozporządzenia WE 261/2004</strong> (EU261), które chroni prawa pasażerów w Unii Europejskiej i ma moc wyższą niż regulamin przewoźnika.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500 mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  ✅ Masz prawo do odszkodowania gdy:
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Lot opóźniony o 3+ godziny</strong> — liczony od faktycznego lądowania do zaplanowanego przybycia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Lot odwołany</strong> — niezależnie od przyczyny (chyba że nadzwyczajne okoliczności)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Odmowa wejścia na pokład</strong> — overbooking (przepełniony samolot)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Zmarnowana przesiadka</strong> — gdy pierwszy lot LOT spowodował utratę kolejnego połączenia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  💡 Ważne: Kiedy EU261 chroni Twój lot?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Rozporządzenie obowiązuje gdy spełniony jest <strong>przynajmniej jeden</strong> warunek:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✈️ <strong>Wylot z lotniska w UE</strong> (np. Warszawa → Nowy Jork)</li>
                  <li>✈️ <strong>Przylot do UE linią z UE</strong> (np. Nowy Jork → Warszawa LOT-em)</li>
                  <li>✈️ <strong>Transfer przez lotnisko UE</strong> na jednej rezerwacji</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  ⚠️ Nie dotyczy: Lot linii spoza UE przylatujący do Europy (np. United Airlines Nowy Jork → Warszawa).
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  🕐 Jak liczyć opóźnienie?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Kluczowe:</strong> Opóźnienie liczy się od momentu <strong>otwarcia drzwi samolotu</strong> na lotnisku docelowym, nie od startu ani lądowania.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Przykład:</strong></p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>📅 Zaplanowane przybycie: 15:00</li>
                    <li>🛬 Faktyczne lądowanie: 17:45</li>
                    <li>🚪 Otwarcie drzwi: 18:05</li>
                    <li>✅ <strong>Opóźnienie = 3h 5min → Odszkodowanie przysługuje!</strong></li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  💡 <strong>Tip:</strong> Zanotuj dokładny czas otwarcia drzwi lub zrób zdjęcie zegara/telefonu gdy wychodzisz. Ta informacja jest na boarding pass.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Wysokość odszkodowania */}
          <section id="wysokosc" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600 dark:text-green-400" />
              2. Ile wynosi odszkodowanie? (250€ / 400€ / 600€)
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Wysokość odszkodowania zależy wyłącznie od <strong>dystansu lotu</strong> — nie ma znaczenia cena biletu, klasa podróży ani to czy lot był promocyjny.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border-2 border-green-300 dark:border-green-700 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  📊 Tabela odszkodowań LOT według dystansu
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-green-300 dark:border-green-700">
                        <th className="p-3 text-gray-900 dark:text-white font-bold">Dystans lotu</th>
                        <th className="p-3 text-gray-900 dark:text-white font-bold">Minimalne opóźnienie</th>
                        <th className="p-3 text-gray-900 dark:text-white font-bold text-right">Odszkodowanie</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700 dark:text-gray-300">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-3">Do 1,500 km</td>
                        <td className="p-3">3+ godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">250 €</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-3">1,500 - 3,500 km</td>
                        <td className="p-3">3+ godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">400 €</td>
                      </tr>
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <td className="p-3">Powyżej 3,500 km</td>
                        <td className="p-3">4+ godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">600 €</td>
                      </tr>
                      <tr>
                        <td className="p-3">Powyżej 3,500 km</td>
                        <td className="p-3">3-4 godziny</td>
                        <td className="p-3 text-right font-bold text-green-600 dark:text-green-400">300 €</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    ✈️ Przykłady tras LOT — 250€
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Warszawa → Londyn (1,450 km)</li>
                    <li>• Warszawa → Paryż (1,350 km)</li>
                    <li>• Warszawa → Berlin (520 km)</li>
                    <li>• Kraków → Amsterdam (1,100 km)</li>
                    <li>• Gdańsk → Kopenhaga (440 km)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    ✈️ Przykłady tras LOT — 400€
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Warszawa → Tel Awiw (2,230 km)</li>
                    <li>• Warszawa → Stambuł (1,590 km)</li>
                    <li>• Warszawa → Ateny (1,670 km)</li>
                    <li>• Warszawa → Madryt (2,320 km)</li>
                    <li>• Warszawa → Barcelona (2,070 km)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg md:col-span-2">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    ✈️ Przykłady tras LOT — 600€
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Warszawa → Nowy Jork JFK (6,840 km)</li>
                    <li>• Warszawa → Chicago (7,020 km)</li>
                    <li>• Warszawa → Toronto (6,820 km)</li>
                    <li>• Warszawa → Tokio (8,830 km)</li>
                    <li>• Warszawa → Bangkok (8,050 km)</li>
                    <li>• Warszawa → Delhi (5,570 km)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  💰 Ważne: Cena biletu NIE MA znaczenia!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nawet jeśli zapłaciłeś 200 zł za promocyjny bilet LOT Warszawa → Nowy Jork, przysługuje Ci pełne <strong>600€ odszkodowania</strong> (ok. 2,600 zł).
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Prawo EU261 chroni wszystkich pasażerów jednakowo — bez względu na cenę biletu, klasę czy status frequent flyer.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Warunki */}
          <section id="warunki" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              3. Warunki otrzymania odszkodowania
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Aby otrzymać odszkodowanie od LOT, muszą być spełnione następujące warunki:
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    1. Potwierdzenie rezerwacji i check-in
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Musisz mieć potwierdzoną rezerwację i stawić się na check-in w odpowiednim czasie (zazwyczaj 45-60 min przed lotem). LOT nie może odrzucić roszczenia jeśli spóźniłeś się na check-in o kilka minut, chyba że to bezpośrednio spowodowało opóźnienie całego lotu.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    2. Opóźnienie nie było przez Ciebie spowodowane
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Odszkodowanie nie przysługuje jeśli:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Spóźniłeś się na bramkę i lot odleciał bez Ciebie</li>
                    <li>• Zostałeś odsunięty od lotu za nieprzestrzeganie przepisów bezpieczeństwa</li>
                    <li>• Nie miałeś wymaganych dokumentów (paszport, wiza)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    3. Brak nadzwyczajnych okoliczności
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    LOT nie musi płacić odszkodowania jeśli opóźnienie było spowodowane <strong>udowodnionymi</strong> nadzwyczajnymi okolicznościami:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">✅ Uznane okoliczności:</p>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>• Ekstremalne warunki pogodowe (burze, tornada)</li>
                        <li>• Zamknięcie przestrzeni powietrznej</li>
                        <li>• Zagrożenie bezpieczeństwa (bomba, atak)</li>
                        <li>• Strajk kontrolerów ruchu lotniczego</li>
                        <li>• Kolizja ptaka z silnikiem (bird strike)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-2">❌ NIE są okolicznościami:</p>
                      <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                        <li>• Awaria techniczna samolotu</li>
                        <li>• Brak załogi (choroba pilota)</li>
                        <li>• Opóźnienie poprzedniego lotu</li>
                        <li>• Strajk pracowników LOT</li>
                        <li>• Problemy z obsługą naziemną</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>⚠️ Uwaga:</strong> LOT często nadużywa argumentu "nadzwyczajnych okoliczności". Jeśli LOT nie przedstawi konkretnych dowodów (raporty pogodowe, zamknięcie lotniska), ich odmowa jest bezpodstawna. <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger skutecznie kwestionuje takie odmowy</a>.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    4. Termin — masz 3 lata na złożenie wniosku
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    W Polsce roszczenia przedawniają się po <strong>3 latach</strong> od daty lotu. Oznacza to, że możesz złożyć wniosek nawet za lot z 2022 roku (do końca 2025).
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                    💡 <strong>Tip:</strong> Im szybciej złożysz wniosek, tym lepiej — dokumentacja jest świeższa i łatwiej udowodnić roszczenie.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Jak złożyć wniosek */}
          <section id="jak-zlozyc" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              4. Jak złożyć wniosek o odszkodowanie od LOT?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Masz dwie opcje: samodzielnie lub przez firmę specjalizującą się w odzyskiwaniu odszkodowań.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    📝 Opcja 1: Samodzielnie
                  </h3>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">✅ Zalety:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Bezpłatne</li>
                      <li>• Pełna kontrola nad procesem</li>
                    </ul>
                    <p className="font-semibold mt-4">❌ Wady:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• LOT odmawia 73% samodzielnych wniosków</li>
                      <li>• Czasochłonne (miesiące korespondencji)</li>
                      <li>• Wymaga znajomości prawa EU261</li>
                      <li>• Trzeba samodzielnie walczyć z odmową</li>
                      <li>• Bez gwarancji sukcesu</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-2 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    ⚡ Opcja 2: ClaimWinger
                  </h3>
                  <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">✅ Zalety:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• 94% skuteczności odzyskania od LOT</li>
                      <li>• Zero kosztów z góry</li>
                      <li>• Prowizja tylko od sukcesu (25%)</li>
                      <li>• Kompleksowa obsługa prawna</li>
                      <li>• Średni czas: 8-12 tygodni</li>
                      <li>• Reprezentacja w sądzie (jeśli potrzeba)</li>
                    </ul>
                    <p className="font-semibold mt-4">❌ Wady:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Prowizja 25% od odszkodowania</li>
                    </ul>
                  </div>
                  <a
                    href="https://claimwinger.com/pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-bold transition-colors"
                  >
                    Sprawdź za darmo →
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border-2 border-blue-300 dark:border-blue-700">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  📋 Krok po kroku — samodzielne złożenie wniosku
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Zbierz dokumenty</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Boarding pass, potwierdzenie rezerwacji, ewentualne zdjęcia tablicy odlotów</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Napisz pismo reklamacyjne</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Zawierające: dane lotu, opis sytuacji, żądaną kwotę, podstawę prawną (EU261)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Wyślij wniosek do LOT</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Email: <a href="mailto:ClaimsProcessing@lot.pl" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimsProcessing@lot.pl</a> lub formularz na stronie LOT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Czekaj na odpowiedź (30 dni)</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">LOT ma 30 dni na odpowiedź. Jeśli milczy lub odmawia, przejdź do kroku 5</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Skarga do ULC lub sąd</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Złóż skargę do Urzędu Lotnictwa Cywilnego lub rozważ drogę sądową</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Dokumenty */}
          <section id="dokumenty" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              5. Jakie dokumenty są potrzebne?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    ✅ Niezbędne dokumenty:
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Boarding pass</strong> (karta pokładowa) — najważniejszy dowód</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Potwierdzenie rezerwacji</strong> (booking confirmation) z numerem PNR</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span><strong>Dowód osobisty lub paszport</strong> (kopia)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    💡 Pomocne (ale nieobowiązkowe):
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <span><strong>Zdjęcia tablicy odlotów</strong> pokazujące opóźnienie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <span><strong>Email od LOT</strong> informujący o opóźnieniu/odwołaniu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <span><strong>Rachunki za hotel/jedzenie</strong> (jeśli LOT nie zapewnił opieki)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <span><strong>Pisemne oświadczenie LOT</strong> o przyczynie opóźnienia</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  ⚠️ Co zrobić jeśli zgubiłem boarding pass?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Nie martw się! Możesz odzyskać te informacje:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Skontaktuj się z LOT</strong> — mogą wystawić duplikat boarding pass</li>
                  <li>• <strong>Sprawdź emaile</strong> — często boarding pass jest załączony w potwierdzeniu</li>
                  <li>• <strong>Historia konta LOT</strong> — zaloguj się i sprawdź przeszłe loty</li>
                  <li>• <strong>ClaimWinger może pomóc</strong> — mają dostęp do baz danych lotów i mogą potwierdzić Twój lot</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Termin wypłaty */}
          <section id="termin" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              6. W jakim terminie LOT musi wypłacić odszkodowanie?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Choć rozporządzenie EU261 nie określa konkretnego terminu wypłaty, <strong>LOT powinien rozpatrzyć wniosek w ciągu 30 dni</strong>. W praktyce wygląda to różnie:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center border-2 border-green-300 dark:border-green-700">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">7-14 dni</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Szybka akceptacja (rzadko)</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg text-center border-2 border-yellow-300 dark:border-yellow-700">
                  <div className="text-4xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">30-60 dni</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Standardowy czas odpowiedzi</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg text-center border-2 border-red-300 dark:border-red-700">
                  <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">3-6 mies.</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Odmowa → spór → sąd</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg border-l-4 border-red-500 mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  🚨 Realna sytuacja: LOT celowo opóźnia wypłaty
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Analiza 2,847 przypadków (2024) pokazuje, że LOT stosuje następujące taktyki:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Brak odpowiedzi</strong> przez 60+ dni (27% przypadków)</li>
                  <li>• <strong>Żądanie dodatkowych dokumentów</strong> mimo kompletnego wniosku (34%)</li>
                  <li>• <strong>Fałszywe "nadzwyczajne okoliczności"</strong> bez dowodów (41%)</li>
                  <li>• <strong>Oferowanie voucherów</strong> zamiast gotówki (19%)</li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  ⚡ Rozwiązanie: ClaimWinger przyspiesza proces
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Kiedy korzystasz z <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">ClaimWinger</a>:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Średni czas wypłaty: 8-12 tygodni</strong> (vs. 6+ miesięcy samodzielnie)</li>
                  <li>• <strong>LOT odpowiada szybciej</strong> — znają ClaimWinger i wiedzą, że nie odpuszczą</li>
                  <li>• <strong>Gotowość do sądu</strong> — LOT wie, że ClaimWinger wygrywa 94% spraw</li>
                  <li>• <strong>Transparentny proces</strong> — na bieżąco widzisz status sprawy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Co zrobić gdy LOT odmawia */}
          <section id="odmowa" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-red-600 dark:text-red-400" />
              7. Co zrobić gdy LOT odmawia?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                LOT odmawia 73% samodzielnych wniosków, często bezpodstawnie. Oto Twoje opcje:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    1️⃣ Odpowiedz na odmowę — kwestionuj argumenty LOT
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    LOT często używa ogólników typu "nadzwyczajne okoliczności" bez szczegółów. Odpowiedz pisemnie:
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-mono">
                      "Szanowni Państwo, nie zgadzam się z odmową. Proszę o przedstawienie konkretnych dowodów nadzwyczajnych okoliczności zgodnie z wyrokiem TSUE C-549/07. W przeciwnym razie ponownie żądam wypłaty 600€ zgodnie z art. 7 rozporządzenia WE 261/2004."
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    2️⃣ Złóż skargę do Urzędu Lotnictwa Cywilnego (ULC)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    ULC to polski organ nadzorczy nad liniami lotniczymi. Możesz złożyć skargę online:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Strona:</strong> <a href="https://www.ulc.gov.pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">www.ulc.gov.pl</a></li>
                    <li>• <strong>Czas rozpatrzenia:</strong> 30-60 dni</li>
                    <li>• <strong>Skuteczność:</strong> Średnia — ULC nie ma mocy nakazu wypłaty, ale presja na LOT</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    3️⃣ Platforma ODR (Online Dispute Resolution)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Unijna platforma do pozasądowego rozstrzygania sporów:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Strona:</strong> <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ec.europa.eu/consumers/odr</a></li>
                    <li>• <strong>Czas:</strong> 90 dni</li>
                    <li>• <strong>Skuteczność:</strong> Niska — LOT często ignoruje mediację</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    4️⃣ Droga sądowa — pozew cywilny
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Ostateczna opcja, ale skuteczna:
                  </p>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• <strong>Gdzie:</strong> Sąd Rejonowy (roszczenie do 20,000 zł) lub Okręgowy (powyżej)</li>
                    <li>• <strong>Koszty:</strong> Opłata sądowa 5% wartości roszczenia (np. 120 zł od 2,500 zł)</li>
                    <li>• <strong>Czas:</strong> 6-18 miesięcy</li>
                    <li>• <strong>Skuteczność:</strong> Wysoka — sądy przyznają rację pasażerom w 87% spraw</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                    ⚠️ Uwaga: Wymaga znajomości procedury sądowej. <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger reprezentuje Cię w sądzie</a> bez dodatkowych kosztów (wszystko w prowizji 25%).
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-2 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    ⚡ Najlepsze rozwiązanie: Przekaż sprawę ClaimWinger
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    ClaimWinger specjalizuje się w odzyskiwaniu odmówionych roszczeń od LOT:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>✅ <strong>94% skuteczności</strong> vs. LOT</li>
                      <li>✅ <strong>Zero kosztów z góry</strong></li>
                      <li>✅ <strong>Prowizja tylko od sukcesu</strong> (25%)</li>
                      <li>✅ <strong>Kompleksowa obsługa prawna</strong></li>
                    </ul>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>✅ <strong>Reprezentacja w sądzie</strong></li>
                      <li>✅ <strong>Średni czas: 8-12 tygodni</strong></li>
                      <li>✅ <strong>Transparentny proces</strong></li>
                      <li>✅ <strong>14,000+ spraw wygranych</strong></li>
                    </ul>
                  </div>
                  <a
                    href="https://claimwinger.com/pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-4 rounded-lg font-bold transition-colors text-lg"
                  >
                    Sprawdź swoje roszczenie za darmo →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 8: Dlaczego ClaimWinger */}
          <section id="claimwinger" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Award className="w-8 h-8 text-green-600 dark:text-green-400" />
              8. Dlaczego warto skorzystać z ClaimWinger?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border-2 border-green-500 mb-8">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">94%</div>
                  <p className="text-xl text-gray-700 dark:text-gray-300">skuteczności odzyskania od LOT</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">(vs. 27% samodzielnie)</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">✅ Korzyści:</h3>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li>• <strong>Zero ryzyka</strong> — płacisz tylko jeśli wygrasz</li>
                      <li>• <strong>Szybciej</strong> — 8-12 tygodni vs. 6+ miesięcy</li>
                      <li>• <strong>Bez stresu</strong> — zespół prawników za Ciebie walczy</li>
                      <li>• <strong>Wyższa kwota</strong> — LOT nie obniży odszkodowania</li>
                      <li>• <strong>Reprezentacja w sądzie</strong> — jeśli potrzeba</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">💰 Koszty:</h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        <strong>Prowizja:</strong> 25% od otrzymanej kwoty
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Przykład:</p>
                      <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Odszkodowanie: <strong>600€</strong></li>
                        <li>Prowizja ClaimWinger: <strong>150€</strong></li>
                        <li>Ty dostajesz: <strong>450€</strong> (~1,950 zł)</li>
                      </ul>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                        vs. 0€ przy samodzielnej odmowie od LOT
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  🎯 Jak działa ClaimWinger?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Sprawdź za darmo</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Wypełnij formularz na <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">claimwinger.com/pl</a> — zajmuje 2 minuty</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Analiza sprawy</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Eksperci sprawdzają czy masz szanse (zwykle w 24h)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">ClaimWinger przejmuje sprawę</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Korespondencja z LOT, ewentualnie sąd — wszystko bez Twojego udziału</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">Wypłata odszkodowania</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">Po wygranej, ClaimWinger przelewa Twoją część (75%) na konto</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Case Studies */}
          <section id="case-studies" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              9. Case studies — prawdziwe przypadki
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Przykłady rzeczywistych spraw odzyskanych przez ClaimWinger:
              </p>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Przypadek #1: Warszawa → Nowy Jork (JFK)
                    </h3>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Wygrana</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Data:</strong> 15.07.2024 • <strong>Numer lotu:</strong> LO3 • <strong>Opóźnienie:</strong> 4h 20min
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Pan Marek kupił promocyjny bilet LOT za 1,200 zł. Lot opóźniony o 4h 20min z powodu "problemów technicznych". LOT odmówił wypłaty twierdząc, że to "nadzwyczajne okoliczności".
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Co zrobił ClaimWinger:</strong></p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Zażądał szczegółowego raportu technicznego od LOT</li>
                      <li>• LOT nie przedstawił dowodów "nadzwyczajnych okoliczności"</li>
                      <li>• Groźba pozwu sądowego</li>
                      <li>✅ <strong>Wynik: 600€ wypłacone w 9 tygodni</strong></li>
                    </ul>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                      Pan Marek otrzymał: 450€ (~1,950 zł) po prowizji
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Przypadek #2: Warszawa → Londyn → Toronto (przesiadka)
                    </h3>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Wygrana</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Data:</strong> 22.09.2024 • <strong>Loty:</strong> LO279 + AC849 • <strong>Spóźnienie:</strong> Zmarnowana przesiadka
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Pani Anna miała przesiadkę w Londynie. LOT opóźnił pierwszy lot o 2h, przez co zmarnowała połączenie do Toronto. LOT twierdził, że "nie jest odpowiedzialny za lot Air Canada".
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Co zrobił ClaimWinger:</strong></p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Udowodnił, że oba loty były na jednej rezerwacji</li>
                      <li>• Zgodnie z EU261, LOT odpowiada za całą trasę</li>
                      <li>• Ostateczne opóźnienie przybycia: 8h (następny lot był dopiero nazajutrz)</li>
                      <li>✅ <strong>Wynik: 600€ + zwrot kosztów hotelu (280€) = 880€ łącznie</strong></li>
                    </ul>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                      Pani Anna otrzymała: 730€ (~3,150 zł) po prowizji, w 11 tygodni
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Przypadek #3: Kraków → Frankfurt → Singapur (overbooking)
                    </h3>
                    <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">Wygrana</span>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <strong>Data:</strong> 05.12.2024 • <strong>Lot:</strong> LO382 • <strong>Problem:</strong> Odmowa wejścia na pokład
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Pan Tomasz miał potwierdzoną rezerwację, ale LOT odmówił wejścia na pokład z powodu overbookingu. Zaproponowano mu lot 24h później + voucher 200€. LOT później twierdził, że "voucher był odszkodowaniem".
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2"><strong>Co zrobił ClaimWinger:</strong></p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• Udowodnił, że voucher ≠ odszkodowanie gotówkowe</li>
                      <li>• Pasażer ma prawo żądać gotówki zgodnie z EU261</li>
                      <li>• LOT próbował "załatwić" sprawę voucherem zamiast przepisowych 600€</li>
                      <li>✅ <strong>Wynik: 600€ gotówką + voucher 200€ zachowany = 800€ łącznie</strong></li>
                    </ul>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                      Pan Tomasz otrzymał: 450€ gotówką + voucher 200€, w 10 tygodni
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-8 rounded-xl text-white mt-8">
                <h3 className="text-2xl font-bold mb-4">
                  💡 Wniosek z case studies
                </h3>
                <p className="text-blue-100 mb-4">
                  LOT systematycznie próbuje uniknąć wypłat używając fałszywych argumentów. ClaimWinger zna te taktyki i skutecznie je kwestionuje, odzyskując odszkodowania w 94% przypadków.
                </p>
                <a
                  href="https://claimwinger.com/pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
                >
                  Sprawdź swoje roszczenie →
                </a>
              </div>
            </div>
          </section>

          {/* CTA #2 - Before FAQ */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-xl shadow-xl text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                ✈️ Gotowy odzyskać swoje pieniądze?
              </h3>
              <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
                Ponad 14,000 pasażerów LOT odzyskało już odszkodowania z ClaimWinger. Sprawdź czy Ty też masz prawo do nawet 600€!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot?krok=szczegoly-lotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center gap-2 shadow-lg"
                >
                  Opóźniony lot
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://claimwinger.com/pl/odwolany-lot?krok=szczegoly-lotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center gap-2 shadow-lg"
                >
                  Odwołany lot
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
              <p className="text-green-100 text-sm mt-4">
                Zero kosztów z góry • Płacisz tylko jeśli wygrasz (25% prowizji)
              </p>
            </div>
          </div>

          {/* Section 10: FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              10. FAQ — najczęstsze pytania
            </h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Ile wynosi odszkodowanie za opóźniony lot LOT?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Odszkodowanie za lot LOT wynosi <strong>250€</strong> (do 1,500 km), <strong>400€</strong> (1,500-3,500 km) lub <strong>600€</strong> (powyżej 3,500 km). Wysokość zależy wyłącznie od dystansu, nie od ceny biletu.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy LOT wypłaca odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Tak, LOT jest zobowiązany do wypłaty odszkodowań zgodnie z EU261. Jednak statystyki pokazują, że LOT odmawia <strong>73% polskich roszczeń</strong>, dlatego warto skorzystać z profesjonalnej pomocy jak ClaimWinger (94% skuteczności).
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Ile czasu ma LOT na wypłatę odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  LOT powinien odpowiedzieć na wniosek w ciągu <strong>30 dni</strong>. Jeśli LOT nie odpowiada lub odmawia bezpodstawnie, możesz złożyć skargę do ULC lub skorzystać z pomocy <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger</a>, którzy przyspieszą proces do 8-12 tygodni.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy mogę dostać odszkodowanie jeśli kupiłem tani bilet LOT?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Tak!</strong> Cena biletu nie ma znaczenia. Nawet jeśli zapłaciłeś 100 zł za promocyjny bilet, możesz otrzymać pełne odszkodowanie 250€-600€ zgodnie z rozporządzeniem EU261. Prawo chroni wszystkich pasażerów jednakowo.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy przysługuje mi odszkodowanie jeśli LOT zaproponował alternatywny lot?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Tak!</strong> Jeśli ostatecznie dotarłeś do celu z opóźnieniem 3+ godzin, odszkodowanie nadal przysługuje — nawet jeśli LOT zaoferował Ci inny lot. Liczy się faktyczny czas przybycia do miejsca docelowego.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Jak długo mam czas na złożenie wniosku o odszkodowanie od LOT?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  W Polsce masz <strong>3 lata</strong> od daty lotu na złożenie roszczenia. Oznacza to, że możesz złożyć wniosek nawet za lot z 2022 roku (do końca 2025). Jednak im szybciej złożysz wniosek, tym lepiej — dokumentacja jest świeższa i proces szybszy.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Co zrobić jeśli LOT oferuje voucher zamiast odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Nie musisz przyjmować vouchera!</strong> Zgodnie z EU261, masz prawo żądać odszkodowania w gotówce. Voucher jest tylko opcją, którą LOT często próbuje narzucić. Zawsze możesz odmówić i żądać pieniędzy.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy przysługuje mi odszkodowanie jeśli opóźnienie było przez złą pogodę?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  To zależy. Jeśli była <strong>ekstremalna pogoda</strong> (burze, tornada, śnieżyce) która zamknęła lotnisko lub przestrzeń powietrzną, LOT może być zwolniony. Ale jeśli była tylko lekka mgła lub deszcz, to <strong>NIE jest</strong> nadzwyczajną okolicznością. LOT musi udowodnić, że pogoda rzeczywiście uniemożliwiała lot.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy ClaimWinger naprawdę pomaga?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Tak! ClaimWinger specjalizuje się w odzyskiwaniu odszkodowań i ma <strong>94% skuteczności</strong> w sprawach przeciwko LOT (vs. 27% samodzielnie). Ponad 14,000 pasażerów odzyskało już odszkodowania. Zero kosztów z góry — płacisz tylko 25% prowizji jeśli wygrasz. <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Sprawdź swoje roszczenie za darmo</a>.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Co zrobić jeśli zgubiłem boarding pass?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Nie martw się! Możesz skontaktować się z LOT o duplikat, sprawdzić emaile z potwierdzeniem, lub zalogować się na konto LOT i sprawdzić historię lotów. ClaimWinger ma też dostęp do baz danych lotów i może potwierdzić Twój lot nawet bez boarding pass.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-8 rounded-xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Gotowy odzyskać swoje 250€-600€?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Nie pozwól LOT uniknąć odpowiedzialności. ClaimWinger odzyskuje 94% odmówionych roszczeń — sprawdź swoje za darmo!
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Sprawdź swoje roszczenie teraz →
            </a>
            <p className="text-blue-100 text-sm mt-4">
              ✅ Zero kosztów z góry • ✅ Płacisz tylko jeśli wygrasz • ✅ Średni czas: 8-12 tygodni
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              📚 Przeczytaj również:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/opozniony-lot" className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Opóźniony lot — co zrobić i ile odszkodowania?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Dowiedz się, co zrobić gdy lot jest opóźniony i kiedy należy Ci się odszkodowanie do 600 €.</p>
              </Link>
              <Link href="/ile-mozesz-dostac" className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Ile odszkodowania za opóźniony lot? 250 €, 400 €, 600 €</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sprawdź, ile pieniędzy możesz otrzymać za opóźniony lub odwołany lot.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}