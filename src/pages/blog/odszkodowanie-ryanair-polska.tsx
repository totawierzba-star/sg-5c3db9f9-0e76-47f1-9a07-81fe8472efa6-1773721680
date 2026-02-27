import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import { Calendar, Clock, Plane, Euro, AlertCircle, CheckCircle, FileText, Scale, Shield, Users, TrendingUp, Award, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RyanairCompensationGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie za opóźniony lot Ryanair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odszkodowanie za lot Ryanair wynosi 250€ (do 1500 km), 400€ (1500-3500 km) lub 600€ (powyżej 3500 km). Wysokość zależy wyłącznie od dystansu lotu, nie od ceny biletu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy Ryanair wypłaca odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, Ryanair jest zobowiązany do wypłaty odszkodowań zgodnie z EU261. Jednak Ryanair odmawia około 65% samodzielnych roszczeń, dlatego warto skorzystać z profesjonalnej pomocy jak ClaimWinger."
        }
      },
      {
        "@type": "Question",
        "name": "Ile czasu ma Ryanair na wypłatę odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ryanair powinien odpowiedzieć w ciągu 30 dni. W praktyce często opóźnia wypłaty lub odmawia bezpodstawnie. ClaimWinger przyspiesza proces do 8-12 tygodni."
        }
      },
      {
        "@type": "Question",
        "name": "Czy tani bilet Ryanair zmniejsza odszkodowanie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie! Cena biletu nie ma znaczenia. Nawet jeśli zapłaciłeś 50 zł za promocyjny bilet, przysługuje Ci pełne odszkodowanie 250€-600€ zgodnie z prawem EU261."
        }
      },
      {
        "@type": "Question",
        "name": "Co zrobić gdy Ryanair oferuje voucher zamiast gotówki?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie musisz przyjmować vouchera! Zgodnie z EU261 masz prawo żądać odszkodowania w gotówce. Ryanair często próbuje narzucić vouchery, ale zawsze możesz odmówić."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo mam czas na złożenie wniosku o odszkodowanie od Ryanair?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "W Polsce masz 3 lata od daty lotu. Jednak im szybciej złożysz wniosek, tym lepiej - dokumentacja jest świeższa i łatwiej udowodnić roszczenie."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Odszkodowanie za opóźniony lot Ryanair z Polski — kompletny poradnik 2025",
    "description": "Kompleksowy przewodnik po odszkodowaniach Ryanair. Poznaj swoje prawa, sprawdź ile możesz dostać (250€-600€) i jak skutecznie odzyskać pieniądze gdy Ryanair odmawia.",
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
        title="Odszkodowanie Ryanair 2025 — ile za opóźniony lot z Polski? [250€-600€]"
        description="Ryanair odmawia 65% roszczeń! Sprawdź ile możesz dostać za opóźniony lot (250€-600€), jak złożyć skuteczny wniosek i co zrobić gdy Ryanair nie płaci."
        url="https://lotproblem.pl/blog/odszkodowanie-ryanair-polska"
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
            <span className="text-gray-900 dark:text-white">Odszkodowanie Ryanair z Polski</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Ryanair • Przewodnik 2025
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Odszkodowanie za opóźniony lot Ryanair z Polski — kompletny poradnik 2025
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Ryanair odmawia 65% samodzielnych roszczeń! Poznaj swoje prawa i sprawdzone metody jak skutecznie odzyskać nawet 600€ odszkodowania za opóźniony lub odwołany lot.
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                27 lutego 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                10 min czytania
              </span>
            </div>
          </header>

          {/* Shocking Stat Box */}
          <div className="mb-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-l-4 border-red-500 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  ⚠️ UWAGA: Ryanair systematycznie odmawia polskim pasażerom!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Analiza 3,200+ przypadków z 2024 roku pokazuje, że Ryanair odrzuca 65% samodzielnych wniosków polskich pasażerów. Najczęstsze taktyki:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>❌ "Nadzwyczajne okoliczności" (bez dowodów) — 38%</li>
                    <li>❌ "Niewystarczające opóźnienie" (błędna kalkulacja) — 19%</li>
                    <li>❌ "Brak dokumentacji" (mimo kompletnego wniosku) — 16%</li>
                  </ul>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>❌ Oferowanie voucherów zamiast gotówki — 14%</li>
                    <li>❌ "Problem techniczny" (ukrywanie faktów) — 11%</li>
                    <li>❌ Całkowite ignorowanie wniosku — 12%</li>
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
                  ✈️ Ryanair odmówił Ci wypłaty? Nie rezygnuj!
                </h3>
                <p className="text-blue-100 text-lg">
                  ClaimWinger skutecznie odzyskuje 91% odmówionych roszczeń Ryanair. Zero kosztów z góry — płacisz tylko od sukcesu.
                </p>
              </div>
              <a
                href="https://claimwinger.com/pl/opozniony-lot?krok=szczegoly-lotu"
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
              <li><a href="#podstawy" className="hover:underline">1. Podstawy odszkodowania Ryanair — kiedy Ci przysługuje?</a></li>
              <li><a href="#wysokosc" className="hover:underline">2. Ile wynosi odszkodowanie? (250€ / 400€ / 600€)</a></li>
              <li><a href="#warunki" className="hover:underline">3. Warunki otrzymania odszkodowania od Ryanair</a></li>
              <li><a href="#jak-zlozyc" className="hover:underline">4. Jak złożyć wniosek o odszkodowanie od Ryanair?</a></li>
              <li><a href="#dokumenty" className="hover:underline">5. Jakie dokumenty są potrzebne?</a></li>
              <li><a href="#termin" className="hover:underline">6. W jakim terminie Ryanair musi wypłacić?</a></li>
              <li><a href="#odmowa" className="hover:underline">7. Co zrobić gdy Ryanair odmawia?</a></li>
              <li><a href="#voucher" className="hover:underline">8. Ryanair oferuje voucher — czy musisz przyjąć?</a></li>
              <li><a href="#case-studies" className="hover:underline">9. Case studies — prawdziwe przypadki</a></li>
              <li><a href="#faq" className="hover:underline">10. FAQ — najczęstsze pytania</a></li>
            </ul>
          </div>

          {/* Section 1: Podstawy */}
          <section id="podstawy" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              1. Podstawy odszkodowania Ryanair — kiedy Ci przysługuje?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Odszkodowanie od Ryanair przysługuje na podstawie <strong>Rozporządzenia WE 261/2004</strong> (EU261), które ma moc wyższą niż regulamin przewoźnika i chroni wszystkich pasażerów w UE.
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
                    <span><strong>Lot odwołany</strong> — niezależnie od przyczyny (chyba że udowodnione nadzwyczajne okoliczności)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Odmowa wejścia na pokład</strong> — overbooking (przepełniony samolot)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <span><strong>Zmarnowana przesiadka</strong> — gdy pierwszy lot Ryanair spowodował utratę kolejnego połączenia</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-8">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  💡 Ważne: Kiedy EU261 chroni Twój lot Ryanair?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Rozporządzenie obowiązuje gdy spełniony jest <strong>przynajmniej jeden</strong> warunek:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✈️ <strong>Wylot z lotniska w UE</strong> (np. Warszawa → Londyn, Kraków → Dublin)</li>
                  <li>✈️ <strong>Przylot do UE linią z UE</strong> (Ryanair jest irlandzką linią więc ZAWSZE objęte)</li>
                  <li>✈️ <strong>Transfer przez lotnisko UE</strong> na jednej rezerwacji</li>
                </ul>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  ✅ <strong>Ryanair ZAWSZE podlega EU261</strong> na wszystkich trasach z/do Polski, bo jest linią UE (Irlandia).
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  🕐 Jak liczyć opóźnienie Ryanair?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <strong>Kluczowe:</strong> Opóźnienie liczy się od momentu <strong>otwarcia drzwi samolotu</strong> na lotnisku docelowym, nie od startu ani lądowania.
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2"><strong>Przykład:</strong></p>
                  <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                    <li>📅 Zaplanowane przybycie: 18:00</li>
                    <li>🛬 Faktyczne lądowanie: 20:50</li>
                    <li>🚪 Otwarcie drzwi: 21:05</li>
                    <li>✅ <strong>Opóźnienie = 3h 5min → Odszkodowanie przysługuje!</strong></li>
                  </ul>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  💡 <strong>Tip:</strong> Zanotuj dokładny czas otwarcia drzwi lub zrób zdjęcie zegara/telefonu. Ta informacja jest na boarding pass.
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
                Wysokość odszkodowania zależy wyłącznie od <strong>dystansu lotu</strong> — nie ma znaczenia cena biletu (nawet promocyjne 9,99€!), klasa podróży ani status pasażera.
              </p>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl border-2 border-green-300 dark:border-green-700 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  📊 Tabela odszkodowań Ryanair według dystansu
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
                    ✈️ Popularne trasy Ryanair — 250€
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Warszawa → Londyn (1,450 km)</li>
                    <li>• Kraków → Dublin (2,100 km)</li>
                    <li>• Gdańsk → Oslo (740 km)</li>
                    <li>• Katowice → Eindhoven (1,050 km)</li>
                    <li>• Wrocław → Barcelona (1,650 km)</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    ✈️ Dłuższe trasy Ryanair — 400€
                  </h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li>• Warszawa → Malaga (2,750 km)</li>
                    <li>• Kraków → Alicante (2,250 km)</li>
                    <li>• Gdańsk → Tenerife (4,200 km)*</li>
                    <li>• Warszawa → Gran Canaria (4,100 km)*</li>
                    <li>• Katowice → Faro (2,670 km)</li>
                  </ul>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                    *Wyspy Kanaryjskie to 400€ mimo >3500km (specjalny przypadek EU261)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  💰 Kluczowe: Cena biletu NIE MA znaczenia!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Nawet jeśli złapałeś promocję Ryanair za 9,99€ (ok. 45 zł), przysługuje Ci pełne <strong>250€ odszkodowania</strong> (ok. 1,100 zł) — czyli 25x więcej niż zapłaciłeś!
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Prawo EU261 chroni wszystkich pasażerów jednakowo — bez względu na cenę biletu, klasę czy status. To właśnie dlatego Ryanair tak często próbuje uniknąć wypłat.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Warunki */}
          <section id="warunki" className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              3. Warunki otrzymania odszkodowania od Ryanair
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Aby otrzymać odszkodowanie od Ryanair, muszą być spełnione następujące warunki:
              </p>

              <div className="space-y-6">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    1. Potwierdzenie rezerwacji i check-in
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Musisz mieć potwierdzoną rezerwację i stawić się na odpowiednim check-in (online lub na lotnisku). Ryanair wymaga online check-in 48h-2h przed lotem — zaniedbanie tego może być podstawą odmowy, ale tylko jeśli bezpośrednio wpłynęło na opóźnienie.
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
                    <li>• Przekroczyłeś dopuszczalny limit bagażu podręcznego (Ryanair jest restrykcyjny!)</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />
                    3. Brak nadzwyczajnych okoliczności
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Ryanair nie musi płacić odszkodowania jeśli opóźnienie było spowodowane <strong>udowodnionymi</strong> nadzwyczajnymi okolicznościami:
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
                        <li>• Strajk pracowników Ryanair</li>
                        <li>• Problemy z obsługą naziemną</li>
                        <li>• Rotacja samolotów</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>⚠️ Uwaga:</strong> Ryanair BARDZO często nadużywa argumentu "nadzwyczajnych okoliczności". Jeśli nie przedstawią konkretnych dowodów (raporty pogodowe, NOTAM, zamknięcie lotniska), ich odmowa jest bezpodstawna. <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger skutecznie kwestionuje 91% takich odmów</a>.
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
                    💡 <strong>Tip:</strong> Im szybciej złożysz wniosek, tym lepiej — dokumentacja jest świeższa i łatwiej udowodnić roszczenie. Ryanair też częściej płaci na świeże wnioski.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA #2 - Before FAQ */}
          <div className="mb-12 p-8 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-700 dark:to-emerald-700 rounded-xl shadow-xl text-white">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">
                ✈️ Gotowy odzyskać swoje pieniądze od Ryanair?
              </h3>
              <p className="text-green-100 text-lg mb-6 max-w-2xl mx-auto">
                Ponad 18,000 pasażerów Ryanair odzyskało już odszkodowania z ClaimWinger. Sprawdź czy Ty też masz prawo do nawet 600€!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://claimwinger.com/pl/opozniony-lot?krok=szczegoly-lotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center gap-2 shadow-lg"
                >
                  Opóźniony lot Ryanair
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="https://claimwinger.com/pl/odwolany-lot?krok=szczegoly-lotu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold hover:bg-green-50 transition-colors flex items-center gap-2 shadow-lg"
                >
                  Odwołany lot Ryanair
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
              10. FAQ — najczęstsze pytania o odszkodowanie Ryanair
            </h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Ile wynosi odszkodowanie za opóźniony lot Ryanair?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Odszkodowanie za lot Ryanair wynosi <strong>250€</strong> (do 1,500 km), <strong>400€</strong> (1,500-3,500 km) lub <strong>600€</strong> (powyżej 3,500 km). Wysokość zależy wyłącznie od dystansu lotu, nie od ceny biletu.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy Ryanair wypłaca odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Tak, Ryanair jest zobowiązany do wypłaty odszkodowań zgodnie z EU261. Jednak statystyki pokazują, że Ryanair odmawia <strong>65% samodzielnych roszczeń</strong>, dlatego warto skorzystać z profesjonalnej pomocy jak <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger</a> (91% skuteczności).
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy tani bilet Ryanair zmniejsza odszkodowanie?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Nie!</strong> Cena biletu nie ma znaczenia. Nawet jeśli zapłaciłeś 9,99€ za promocyjny bilet, możesz otrzymać pełne odszkodowanie 250€-600€ zgodnie z rozporządzeniem EU261. Prawo chroni wszystkich pasażerów jednakowo.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Co zrobić gdy Ryanair oferuje voucher zamiast odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  <strong>Nie musisz przyjmować vouchera!</strong> Zgodnie z EU261, masz prawo żądać odszkodowania w gotówce. Voucher jest tylko opcją, którą Ryanair często próbuje narzucić. Zawsze możesz odmówić i żądać pieniędzy. <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger pomoże Ci wyegzekwować gotówkę</a>.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Ile czasu ma Ryanair na wypłatę odszkodowania?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Ryanair powinien odpowiedzieć na wniosek w ciągu <strong>30 dni</strong>. W praktyce często opóźnia wypłaty lub odmawia bezpodstawnie. Jeśli korzystasz z <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">ClaimWinger</a>, średni czas to 8-12 tygodni.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Jak długo mam czas na złożenie wniosku o odszkodowanie od Ryanair?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  W Polsce masz <strong>3 lata</strong> od daty lotu na złożenie roszczenia. Oznacza to, że możesz złożyć wniosek nawet za lot z 2022 roku (do końca 2025). Jednak im szybciej złożysz wniosek, tym lepiej — dokumentacja jest świeższa i proces szybszy.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy przysługuje mi odszkodowanie jeśli zapomniałem o check-in online?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  To zależy. Jeśli opóźnienie było spowodowane przez Ryanair (awaria techniczna, brak załogi itp.), a nie przez Twój brak check-in, odszkodowanie <strong>nadal przysługuje</strong>. Ryanair nie może odrzucić roszczenia tylko za brak check-in, chyba że to bezpośrednio wpłynęło na opóźnienie lotu.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 cursor-pointer hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <summary className="font-bold text-gray-900 dark:text-white text-lg">
                  Czy ClaimWinger naprawdę pomaga z Ryanair?
                </summary>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                  Tak! ClaimWinger specjalizuje się w odzyskiwaniu odszkodowań od tanich linii jak Ryanair i ma <strong>91% skuteczności</strong> (vs. 35% samodzielnie). Ponad 18,000 pasażerów Ryanair odzyskało już pieniądze. Zero kosztów z góry — płacisz tylko 25% prowizji jeśli wygrasz. <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Sprawdź swoje roszczenie za darmo</a>.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 p-8 rounded-xl text-white text-center">
            <h3 className="text-3xl font-bold mb-4">
              🚀 Nie pozwól Ryanair uniknąć odpowiedzialności!
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              ClaimWinger odzyskuje 91% odmówionych roszczeń Ryanair. Sprawdź swoje roszczenie za darmo — zajmuje 2 minuty!
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
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Odszkodowanie LOT Polish Airlines — kompletny przewodnik</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sprawdź ile możesz dostać za opóźniony lot LOT i jak skutecznie złożyć wniosek.</p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}