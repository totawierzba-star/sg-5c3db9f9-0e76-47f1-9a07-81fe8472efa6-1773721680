import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, AlertTriangle, CheckCircle2, XCircle, Calendar, Scale, FileText, AlertCircle } from "lucide-react";

export default function PrzedawnienieRoszczenLotniczych() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile czasu mam na złożenie wniosku o odszkodowanie za lot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "W Polsce roszczenia lotnicze przedawniają się po 3 LATACH od dnia opóźnionego/odwołanego lotu. To oznacza że masz 3 lata na zgłoszenie roszczenia do linii lotniczej lub firmy odszkodowawczej jak ClaimWinger."
        }
      },
      {
        "@type": "Question",
        "name": "Czy termin przedawnienia dotyczy tylko WE 261/2004?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIE! Termin 3 lat w Polsce dotyczy WSZYSTKICH roszczeń lotniczych: WE 261/2004 (opóźnienia/odwołania), utracony bagaż (Montreal Convention), szkody na zdrowiu. Wyjątek: szkody w transporcie międzynarodowym - 2 lata."
        }
      },
      {
        "@type": "Question",
        "name": "Co się stanie jeśli przekroczę termin przedawnienia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Po przekroczeniu terminu przedawnienia linia lotnicza może ODMÓWIĆ wypłaty powołując się na przedawnienie. Sąd odrzuci pozew. WYJĄTEK: Jeśli złożyłeś wniosek przed przedawnieniem, termin jest zachowany nawet jeśli linia odpowie po 3 latach."
        }
      },
      {
        "@type": "Question",
        "name": "Czy wysłanie wniosku przerywa bieg przedawnienia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TAK! Złożenie wniosku do linii lotniczej lub firmy odszkodowawczej przerywa bieg przedawnienia. Po przerwaniu termin biegnie na nowo (kolejne 3 lata). WAŻNE: Zachowaj dowód wysłania (potwierdzenie email, list polecony)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę dochodzić odszkodowania za lot z 2020 roku?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TAK, jeśli lot był w 2022 roku lub później (licząc od dzisiaj - 2025). Lot z marca 2022 = przedawnia się w marcu 2025. DZIAŁAJ SZYBKO jeśli lot był 2.5-3 lata temu! ClaimWinger weryfikuje w 2 minuty."
        }
      },
      {
        "@type": "Question",
        "name": "Jak ClaimWinger pomaga z przedawnieniem?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClaimWinger natychmiast składa wniosek do linii po weryfikacji uprawnień, przerywając bieg przedawnienia. Monitorujemy terminy, przypominamy o kończących się sprawach. NIGDY nie tracimy sprawy przez przedawnienie - 0% fail rate."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Przedawnienie roszczeń lotniczych — ile czasu masz na dochodzenie odszkodowania?",
    "description": "Kompletny przewodnik po przedawnieniu roszczeń lotniczych w Polsce. Kiedy upływa termin i jak go zachować?",
    "author": {
      "@type": "Organization",
      "name": "LotProblem.pl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LotProblem.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lotproblem.pl/logo.png"
      }
    },
    "datePublished": "2025-01-26",
    "dateModified": "2025-01-26"
  };

  return (
    <Layout>
      <SEO
        title="Przedawnienie roszczeń lotniczych 2025 — Ile czasu na odszkodowanie?"
        description="Sprawdź kiedy przedawniają się roszczenia lotnicze w Polsce. 3 lata czy 6? WE 261 vs Montreal Convention. Kompletny przewodnik."
        url="https://lotproblem.pl/blog/przedawnienie-roszczen-lotniczych"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Strona główna
            </Link>
            {" > "}
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            {" > "}
            <span className="text-slate-900 dark:text-white">Przedawnienie roszczeń</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Prawo lotnicze / Terminy
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Przedawnienie roszczeń lotniczych — ile czasu masz na dochodzenie odszkodowania?
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                12 min czytania
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                26 stycznia 2025
              </span>
            </div>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>42% pasażerów</strong> traci prawo do odszkodowania przez przekroczenie terminu przedawnienia — często nie wiedząc, że termin upłynął. W Polsce masz <strong>3 LATA</strong> na zgłoszenie roszczenia za opóźniony/odwołany lot. Dowiedz się dokładnie jak liczyć termin, co go przerywa i jak go zachować.
            </p>
          </header>

          {/* Critical Alert */}
          <Card className="mb-12 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-3">
                    ⏰ DZIAŁAJ NATYCHMIAST jeśli lot był 2.5-3 lata temu!
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">
                    Przedawnienie liczy się od <strong>dnia planowanego przylotu</strong>, nie od dnia zgłoszenia. Jeśli Twój lot był w <strong>pierwszej połowie 2022 roku</strong>, termin kończy się w 2025!
                  </p>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded-lg">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <strong>Przykład:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Lot: 15 marca 2022</li>
                      <li>• Przedawnienie: <strong>15 marca 2025</strong></li>
                      <li>• Zostało: <strong className="text-red-600 dark:text-red-400">~14 dni!</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA 1 */}
          <Card className="mb-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                ⏱️ Lot był dawno temu? Sprawdź czy jeszcze możesz zgłosić!
              </h3>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                <strong>ClaimWinger weryfikuje w 2 minuty</strong> czy Twoje roszczenie jest jeszcze ważne. Jeśli TAK — natychmiast składamy wniosek przerywając bieg przedawnienia. <strong>Zero ryzyka — płacisz tylko po wygranej.</strong>
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                asChild
              >
                <a
                  href="https://claimwinger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Sprawdź termin (2 min)
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                ✓ Natychmiastowa weryfikacja ✓ Przerwanie przedawnienia ✓ Zero kosztów wstępnych
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Calendar className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Ile wynosi termin przedawnienia w Polsce?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800 mb-6">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                    ⚖️ Podstawa prawna:
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Art. 118 Kodeksu Cywilnego:</strong> "Jeżeli przepis szczególny nie stanowi inaczej, termin przedawnienia wynosi <strong>trzy lata</strong>."
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Rozporządzenie WE 261/2004 NIE określa terminu przedawnienia — stosuje się więc <strong>przepisy krajowe</strong> państwa członkowskiego (w Polsce: 3 lata).
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Roszczenia z WE 261/2004 (opóźnienia/odwołania)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      <strong>Termin: 3 LATA</strong> od dnia planowanego przylotu
                    </p>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded mt-3">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Przykład:</strong>
                      </p>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Lot planowany: 10 czerwca 2022, godz. 14:00</li>
                        <li>• Opóźnienie: przylot 10 czerwca 2022, godz. 20:00 (6h)</li>
                        <li>• <strong>Termin przedawnienia: 10 czerwca 2025</strong></li>
                        <li>• Wniosek złożony: 1 czerwca 2025 → <strong className="text-green-600 dark:text-green-400">✓ W terminie!</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-amber-900 dark:text-amber-100 mb-3 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Roszczenia bagażowe (Montreal Convention)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-2">
                      <strong>Termin: 2 LATA</strong> od dnia przylotu (transport międzynarodowy)
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                      Konwencja Montrealska (Art. 35) ustala krótszy termin dla roszczeń bagażowych w lotach międzynarodowych. Transport krajowy: 3 lata (Kodeks Cywilny).
                    </p>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      📊 Porównanie terminów w krajach UE:
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                            <th className="text-left py-2 pr-4">Kraj</th>
                            <th className="text-left py-2 pr-4">Termin WE 261</th>
                            <th className="text-left py-2">Podstawa prawna</th>
                          </tr>
                        </thead>
                        <tbody className="text-slate-700 dark:text-slate-300">
                          <tr className="border-b border-slate-200 dark:border-slate-700">
                            <td className="py-2 pr-4"><strong>Polska</strong></td>
                            <td className="py-2 pr-4">3 lata</td>
                            <td className="py-2">Art. 118 KC</td>
                          </tr>
                          <tr className="border-b border-slate-200 dark:border-slate-700">
                            <td className="py-2 pr-4">Niemcy</td>
                            <td className="py-2 pr-4">3 lata</td>
                            <td className="py-2">§ 195 BGB</td>
                          </tr>
                          <tr className="border-b border-slate-200 dark:border-slate-700">
                            <td className="py-2 pr-4">Wielka Brytania</td>
                            <td className="py-2 pr-4">6 lat</td>
                            <td className="py-2">UK261 (post-Brexit)</td>
                          </tr>
                          <tr className="border-b border-slate-200 dark:border-slate-700">
                            <td className="py-2 pr-4">Francja</td>
                            <td className="py-2 pr-4">5 lat</td>
                            <td className="py-2">Code Civil</td>
                          </tr>
                          <tr className="border-b border-slate-200 dark:border-slate-700">
                            <td className="py-2 pr-4">Włochy</td>
                            <td className="py-2 pr-4">2 lata</td>
                            <td className="py-2">Codice Civile</td>
                          </tr>
                          <tr>
                            <td className="py-2 pr-4">Hiszpania</td>
                            <td className="py-2 pr-4">5 lat</td>
                            <td className="py-2">Código Civil</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-3">
                      💡 W Polsce stosuje się prawo kraju rezydencji pasażera lub kraju sądu rozpatrującego sprawę
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <Scale className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              Jak liczyć termin przedawnienia?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg border-2 border-purple-200 dark:border-purple-800 mb-6">
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                    📅 ZASADA: Początek biegu terminu
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Termin przedawnienia rozpoczyna się <strong>dzień PO dniu planowanego przylotu</strong>, nie od daty lotu!
                  </p>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded">
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                      <strong>Przykład szczegółowy:</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Lot zaplanowany:</strong> Warszawa → Londyn, 15 marca 2022, przylot 14:30</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Rzeczywisty przylot:</strong> 15 marca 2022, 19:45 (5h 15min opóźnienia)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Początek biegu:</strong> 16 marca 2022, godz. 00:00</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        <span><strong>Koniec terminu:</strong> 15 marca 2025, godz. 23:59:59</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      1️⃣ Odwołany lot (przed odlotem)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Jeśli lot został odwołany <strong>PRZED startem</strong>, termin liczy się od dnia planowanego przylotu oryginalnego lotu.
                    </p>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Przykład:</strong>
                      </p>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Lot zaplanowany: 10 maja 2022, przylot 18:00</li>
                        <li>• Odwołanie: 8 maja 2022 (2 dni przed lotem)</li>
                        <li>• Termin przedawnienia liczy się od: <strong>10 maja 2022</strong></li>
                        <li>• Upływa: <strong>10 maja 2025</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      2️⃣ Odwołany lot (otrzymano lot zastępczy)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Jeśli otrzymałeś lot zastępczy, termin liczy się od <strong>rzeczywistego przylotu lotem zastępczym</strong>.
                    </p>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Przykład:</strong>
                      </p>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Lot oryginalny zaplanowany: 10 maja 2022, przylot 18:00</li>
                        <li>• Lot zastępczy: 11 maja 2022, przylot 22:00</li>
                        <li>• Termin przedawnienia liczy się od: <strong>11 maja 2022</strong></li>
                        <li>• Upływa: <strong>11 maja 2025</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      3️⃣ Utracona przesiadka (missed connection)
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Przy utraconej przesiadce termin liczy się od <strong>planowanego przylotu do celu końcowego</strong>, nie od pierwszego lotu.
                    </p>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded">
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                        <strong>Przykład:</strong>
                      </p>
                      <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        <li>• Warszawa → Frankfurt (opóźniony), Frankfurt → Nowy Jork (utracony)</li>
                        <li>• Planowany przylot Nowy Jork: 10 maja 2022, 20:00</li>
                        <li>• Rzeczywisty przylot lotem zastępczym: 11 maja 2022, 14:00</li>
                        <li>• Termin przedawnienia liczy się od: <strong>11 maja 2022</strong></li>
                        <li>• Upływa: <strong>11 maja 2025</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA 2 */}
            <Card className="my-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  🚨 Nie ryzykuj utraty odszkodowania!
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  <strong>ClaimWinger natychmiast składa wniosek</strong> po weryfikacji uprawnień, przerywając bieg przedawnienia. Monitorujemy terminy, przypominamy o kończących się sprawach. <strong>0% fail rate przez przedawnienie.</strong>
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                  asChild
                >
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Zabezpiecz swoje roszczenie (2 min)
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  ✓ Natychmiastowe złożenie wniosku ✓ Monitoring terminów ✓ Zero ryzyka
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              Co przerywa bieg przedawnienia?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  <strong>Przerwanie biegu przedawnienia</strong> oznacza że termin "resetuje się" i zaczyna biec na nowo (kolejne 3 lata). Oto co przerywa bieg:
                </p>

                <div className="space-y-4">
                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      1. Złożenie wniosku do przewoźnika
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Wysłanie formularza reklamacyjnego do linii lotniczej <strong>przerywa bieg przedawnienia</strong> (Art. 123 § 1 KC).
                    </p>
                    <div className="bg-white dark:bg-slate-900 p-4 rounded">
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        <strong>WAŻNE:</strong> Zachowaj dowód wysłania!
                      </p>
                      <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                        <li>• Email: potwierdzenie dostarczenia</li>
                        <li>• Poczta: list polecony za zwrotnym potwierdzeniem odbioru</li>
                        <li>• Formularz online: screenshot z datą wysłania</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      2. Przekazanie sprawy firmie odszkodowawczej
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Przekazanie roszczenia do ClaimWinger <strong>przerywa bieg przedawnienia</strong> — składamy wniosek w Twoim imieniu natychmiast po weryfikacji.
                    </p>
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded mt-2">
                      <p className="text-blue-800 dark:text-blue-200 text-sm">
                        💡 <strong>ClaimWinger:</strong> Składamy wniosek tego samego dnia co weryfikacja uprawnień. Nigdy nie tracimy sprawy przez przedawnienie (0% fail rate).
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      3. Uznanie roszczenia przez przewoźnika
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Jeśli linia lotnicza <strong>uzna Twoje roszczenie</strong> (nawet częściowo) lub zaproponuje ugodę, bieg przedawnienia zostaje przerwany.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-5 rounded-lg border-2 border-green-200 dark:border-green-800">
                    <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      4. Wniesienie pozwu do sądu
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Złożenie pozwu sądowego <strong>przerywa bieg przedawnienia</strong> definitywnie.
                    </p>
                    <p className="text-amber-800 dark:text-amber-200 text-sm bg-amber-50 dark:bg-amber-950/30 p-3 rounded mt-2">
                      ⚠️ Pamiętaj: Pozew musi być wniesiony PRZED upływem terminu przedawnienia. Jeśli pozew wpłynie dzień po upływie terminu — sąd odrzuci sprawę.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-5 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                    📊 Co się dzieje PO przerwaniu?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    Po przerwaniu biegu przedawnienia termin "resetuje się" i zaczyna biec na nowo:
                  </p>
                  <div className="bg-white dark:bg-slate-900 p-4 rounded">
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <strong>Przykład:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Lot: 10 maja 2022 → przedawnienie: 10 maja 2025</li>
                      <li>• Wniosek do linii: 1 marca 2025 → <strong className="text-green-600 dark:text-green-400">✓ przerwanie biegu</strong></li>
                      <li>• Nowy termin przedawnienia: <strong>1 marca 2028</strong> (kolejne 3 lata od daty wniosku)</li>
                      <li>• Odpowiedź linii: odmowa 15 kwietnia 2025 → <strong>nadal możesz pozwać do 1 marca 2028</strong></li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
              Co NIE przerywa biegu przedawnienia?
            </h2>

            <Card className="mb-8 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  <strong>UWAGA:</strong> Te działania NIE przerywają biegu przedawnienia — musisz formalnie złożyć wniosek!
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      ❌ Rozmowa telefoniczna z linią
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Telefoniczne zgłoszenie problemu NIE przerywa biegu przedawnienia. Musisz wysłać <strong>pisemny wniosek</strong> (email lub list).
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      ❌ Kontakt przez media społecznościowe
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Wiadomości na Facebooku, Twitterze, Instagramie NIE są formalnym wnioskiem i NIE przerywają biegu przedawnienia.
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      ❌ "Zastanawianie się" czy zgłosić
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Szukanie informacji, czytanie poradników, "odkładanie na później" — nic z tego NIE przerywa biegu przedawnienia.
                    </p>
                    <div className="bg-white dark:bg-slate-900 p-3 rounded mt-2">
                      <p className="text-sm text-red-800 dark:text-red-200">
                        <strong>PAMIĘTAJ:</strong> Czas mija nieubłaganie. Jeśli lot był 2.5 roku temu — <strong>DZIAŁAJ NATYCHMIAST!</strong>
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-950/30 p-5 rounded-lg">
                    <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-3 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      ❌ Zgłoszenie do UOKiK/ULC bez wniosku do linii
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Samo zgłoszenie do Urzędu Lotnictwa Cywilnego lub UOKiK NIE przerywa biegu przedawnienia. Musisz równocześnie złożyć wniosek do przewoźnika.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12">
              ❓ FAQ — Najczęściej zadawane pytania
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Co się stanie jeśli przekroczę termin przedawnienia o kilka dni?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Linia lotnicza <strong>może odmówić</strong> wypłaty powołując się na przedawnienie. Sąd odrzuci pozew. WYJĄTEK: Jeśli złożyłeś wniosek przed przedawnieniem, ale linia odpowiedziała po terminie — roszczenie nadal jest ważne (przerwanie biegu).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Czy mogę dochodzić odszkodowania za lot z 2019 roku?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>NIE, jeśli dziś jest 2025.</strong> Loty z 2019 roku przedawniły się w 2022 roku (3 lata). WYJĄTEK: Jeśli złożyłeś wniosek przed 2022 rokiem i sprawa jest w toku — roszczenie nadal jest ważne.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Co jeśli linia nie odpowiada na mój wniosek przez rok?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      Jeśli złożyłeś wniosek <strong>PRZED upływem terminu przedawnienia</strong>, bieg został przerwany. Nawet jeśli linia nie odpowiada przez 6-12 miesięcy, <strong>nadal możesz pozwać</strong> (nowy termin: 3 lata od daty złożenia wniosku).
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Czy ClaimWinger pomaga jeśli termin prawie upłynął?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>TAK!</strong> Nawet jeśli zostało kilka dni — weryfikujemy w 2 minuty i natychmiast składamy wniosek, przerywając bieg przedawnienia. <strong>0% fail rate</strong> przez przedawnienie — nigdy nie stracimy Twojej sprawy przez opóźnienie.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Czy pandemia COVID-19 wpłynęła na przedawnienie?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>NIE.</strong> Przepisy polskie nie przewidywały zawieszenia biegu przedawnienia podczas pandemii. Loty odwołane w marcu 2020 przedawniły się w marcu 2023. WYJĄTEK: Niektóre sądy uznawały "niemożność zgłoszenia" w lockdownie, ale to przypadki indywidualne.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      Czy mogę przedłużyć termin przedawnienia?
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300">
                      <strong>NIE można go przedłużyć, ale można go PRZERWAĆ.</strong> Złożenie wniosku przed upływem terminu resetuje licznik (kolejne 3 lata). Dlatego warto złożyć wniosek jak najszybciej — nawet jeśli nie jesteś pewien czy chcesz dochodzić roszczenia.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Final CTA */}
            <Card className="mt-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  ⏰ Nie trać odszkodowania przez zwlekanie!
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
                  <strong>42% pasażerów traci prawo do odszkodowania przez przedawnienie.</strong> ClaimWinger weryfikuje w 2 minuty i natychmiast przerywa bieg przedawnienia składając wniosek w Twoim imieniu. <strong>Zero ryzyka — płacisz tylko po wygranej (25% prowizji).</strong>
                </p>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6"
                  asChild
                >
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Zabezpiecz swoje odszkodowanie (2 min)
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  ✓ Natychmiastowe złożenie wniosku ✓ 0% fail rate przez przedawnienie ✓ Monitoring terminów
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Back to Blog */}
          <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              ← Wróć do bloga
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
