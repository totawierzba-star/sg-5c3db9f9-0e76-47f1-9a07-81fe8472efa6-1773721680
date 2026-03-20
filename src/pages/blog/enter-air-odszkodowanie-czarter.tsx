import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Plane, Euro, Clock, AlertTriangle, CheckCircle2, FileText, Scale, AlertCircle } from "lucide-react";

export default function EnterAirOdszkodowanieCzarter() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy przysługuje odszkodowanie za lot czarterowy Enter Air?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TAK! Loty czarterowe Enter Air objęte są rozporządzeniem WE 261/2004 jeśli startują z UE lub lądują w UE (gdy przewoźnik jest unijny). Enter Air jako polski przewoźnik MUSI wypłacać odszkodowania 250-600 € za opóźnienia 3h+ i odwołania."
        }
      },
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie od Enter Air za lot czarterowy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odszkodowanie od Enter Air wynosi 250 € (loty do 1500 km), 400 € (1500-3500 km) lub 600 € (powyżej 3500 km) gdy opóźnienie przekracza 3 godziny. Najczęstsze trasy: Egipt 400 €, Turcja 400 €, Tunezja 400 €."
        }
      },
      {
        "@type": "Question",
        "name": "Czy biuro podróży czy Enter Air wypłaca odszkodowanie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter Air jako PRZEWOŹNIK WYKONUJĄCY LOT odpowiada za odszkodowanie, NIE biuro podróży. Nawet jeśli kupiłeś pakiet wakacyjny przez TUI, Rainbow, Itakę - roszczenie kierujesz do Enter Air."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo Enter Air ma na wypłatę odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rozporządzenie WE 261/2004 nie określa terminu wypłaty. Enter Air zazwyczaj odpowiada w ciągu 6-10 tygodni, ale często odmawia przy pierwszym zgłoszeniu. Z ClaimWinger średni czas to 5-7 tygodni (68% skuteczności)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę dostać odszkodowanie jeśli biuro podróży zaproponowało voucher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TAK! Voucher od biura podróży to zwrot za pakiet wakacyjny. Odszkodowanie od Enter Air to osobne prawo - rekompensata za stratę czasu zgodnie z WE 261/2004. Możesz otrzymać OBA."
        }
      },
      {
        "@type": "Question",
        "name": "Jak ClaimWinger pomaga z roszczeniem przeciwko Enter Air?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClaimWinger zajmuje się całym procesem: weryfikacja uprawnień (2 min), korespondencja z Enter Air, analiza odmów, egzekwowanie przez prawników. 68% skuteczności przy czarterach, płatność tylko po wygranej (25% prowizji). Zero ryzyka finansowego."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Enter Air odszkodowanie — czarter a prawa pasażera WE 261/2004",
    "description": "Sprawdź jak uzyskać 250-600 € odszkodowania za lot czarterowy Enter Air. Przewodnik dla pasażerów wakacyjnych.",
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
    "datePublished": "2025-01-23",
    "dateModified": "2025-01-23"
  };

  return (
    <Layout>
      <SEO
        title="Enter Air Odszkodowanie 2025 — Czarter a Prawa Pasażera [68% skuteczności]"
        description="Sprawdź jak uzyskać 250-600 € odszkodowania za lot czarterowy Enter Air. TAK, czarter też podlega WE 261/2004! Przewodnik."
        url="https://lotproblem.pl/blog/enter-air-odszkodowanie-czarter"
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
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-slate-100">Enter Air Odszkodowanie</span>
          </nav>

          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium mb-4">
              Enter Air / Czarter
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Enter Air odszkodowanie — czarter a prawa pasażera WE 261/2004
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                11 min czytania
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                23 stycznia 2025
              </span>
            </div>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Enter Air to największy polski przewoźnik czarterowy obsługujący wakacyjne loty do Egiptu, Turcji, Tunezji i innych popularnych kierunków. <strong className="text-slate-900 dark:text-white">Wielu pasażerów błędnie sądzi, że loty czarterowe nie podlegają prawom UE — to MIT!</strong> Sprawdź, jak uzyskać 250-600 € odszkodowania za opóźniony lub odwołany lot Enter Air.
            </p>
          </header>

          <Card className="mb-12 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🎯 Kluczowe informacje o odszkodowaniu Enter Air
                  </h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>TAK, czarter podlega WE 261/2004!</strong> Odszkodowanie 250-600 €</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Enter Air, NIE biuro podróży</strong> odpowiada za odszkodowanie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>3 lata</strong> na złożenie wniosku (przedawnienie od daty lotu)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>68% skuteczności</strong> z ClaimWinger przy czarterach</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Sprawdź swoje odszkodowanie Enter Air w 2 minuty
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Bezpłatna weryfikacja online. 68% skuteczności przy czarterach. Płacisz tylko po wygranej.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                asChild
              >
                <a 
                  href="https://claimwinger.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Sprawdź odszkodowanie <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                ✓ Bez ukrytych kosztów ✓ 2 minuty ✓ Działa dla czarterów!
              </p>
            </CardContent>
          </Card>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              MIT: &quot;Czarter nie podlega prawom UE&quot;
            </h2>

            <Card className="mb-8 border-red-200 dark:border-red-800">
              <CardContent className="p-6">
                <div className="bg-red-50 dark:bg-red-950/30 p-6 rounded-lg mb-4">
                  <p className="text-red-800 dark:text-red-200 font-medium text-lg mb-3">
                    ❌ <strong>NIEPRAWDA:</strong> &quot;Loty czarterowe nie są chronione przez WE 261/2004&quot;
                  </p>
                  <p className="text-slate-700 dark:text-slate-300">
                    To jeden z <strong>najczęstszych mitów</strong> powtarzanych przez biura podróży i same linie czarterowe. Wielu pasażerów Enter Air rezygnuje z odszkodowania wierząc, że czarter = brak praw.
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg border-2 border-green-200 dark:border-green-800">
                  <p className="text-green-800 dark:text-green-200 font-medium text-lg mb-3">
                    ✅ <strong>PRAWDA:</strong> Loty czarterowe PODLEGAJĄ rozporządzeniu WE 261/2004
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 mb-3">
                    <strong>Rozporządzenie WE 261/2004 obowiązuje dla WSZYSTKICH lotów:</strong>
                  </p>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>• Startujących z lotniska w UE (niezależnie od przewoźnika)</li>
                    <li>• Lądujących w UE jeśli przewoźnik jest z UE</li>
                    <li>• <strong>WŁĄCZNIE Z CZARTERAMI</strong> - bez wyjątków!</li>
                  </ul>
                </div>

                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    <strong>Podstawa prawna:</strong>
                  </p>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    Art. 3 ust. 1 WE 261/2004: &quot;Niniejsze rozporządzenie stosuje się: a) do pasażerów odlatujących z lotniska znajdującego się na terytorium Państwa Członkowskiego podlegającego postanowieniom Traktatu&quot; — <strong>NIE MA wyjątku dla czarterów!</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <Euro className="w-8 h-8 text-teal-600 dark:text-teal-400" />
              Ile wynosi odszkodowanie od Enter Air?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Wysokość odszkodowania od Enter Air jest <strong>identyczna</strong> jak przy lotach regularnych:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">250 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty do 1500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Rzadkie dla Enter Air (głównie dalekie destynacje)
                    </div>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">400 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty 1500-3500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      WIĘKSZOŚĆ tras Enter Air (Egipt, Turcja, Tunezja)
                    </div>
                  </div>
                  <div className="bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800">
                    <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">600 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty powyżej 3500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Możliwe przy długich trasach (Karaiby, egzotyka)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-teal-50 dark:bg-teal-950/20 border-l-4 border-teal-600 dark:border-teal-400 p-6 my-8">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">
                💡 <strong>Najczęstsze trasy Enter Air z Polski:</strong>
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>• <strong>Warszawa/Katowice – Hurghada (Egipt):</strong> ~2,800 km → <strong>400 €</strong></li>
                <li>• <strong>Warszawa/Kraków – Antalya (Turcja):</strong> ~2,000 km → <strong>400 €</strong></li>
                <li>• <strong>Warszawa – Monastir (Tunezja):</strong> ~2,200 km → <strong>400 €</strong></li>
                <li>• <strong>Katowice – Sharm El Sheikh (Egipt):</strong> ~3,000 km → <strong>400 €</strong></li>
                <li>• <strong>Warszawa – Enfidha (Tunezja):</strong> ~2,100 km → <strong>400 €</strong></li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 mt-3">
                <strong>Wniosek:</strong> Zdecydowana większość tras Enter Air kwalifikuje się do odszkodowania <strong>400 €</strong> na pasażera!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12">
              🔗 Powiązane artykuły
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Odszkodowanie LOT Polish Airlines
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Kompletny przewodnik dla pasażerów LOT
                </p>
              </Link>

              <Link href="/blog/odszkodowanie-ryanair-polska" className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Odszkodowanie Ryanair
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Wszystko o odszkodowaniach od Ryanair
                </p>
              </Link>

              <Link href="/blog/odszkodowanie-wizz-air-polska" className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Odszkodowanie Wizz Air
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Kompletny przewodnik 2025
                </p>
              </Link>

              <Link href="/ile-mozesz-dostac" className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Kalkulator odszkodowania
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Sprawdź ile dokładnie możesz dostać
                </p>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← Powrót do bloga
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
