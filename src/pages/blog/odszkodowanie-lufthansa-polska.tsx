import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Plane, Euro, Clock, AlertTriangle, CheckCircle2, FileText, Scale } from "lucide-react";

export default function OdszkodowanieLufthansaPolska() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie od Lufthansa za opóźniony lot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odszkodowanie od Lufthansa wynosi 250 € (loty do 1500 km), 400 € (1500-3500 km) lub 600 € (powyżej 3500 km) gdy opóźnienie przekracza 3 godziny. Dla polskich pasażerów najczęstsze trasy to Warszawa-Frankfurt (250 €) i Warszawa-Monachium (250 €)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy Lufthansa wypłaca odszkodowanie za loty czarterowe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, jeśli lot był obsługiwany przez Lufthansa (a nie tylko sprzedawany przez biuro podróży) i spełnia kryteria WE 261/2004. Ważne: przewoźnik wykonujący lot, nie agent sprzedaży, odpowiada za odszkodowanie."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo Lufthansa ma na wypłatę odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rozporządzenie WE 261/2004 nie określa terminu wypłaty. Lufthansa zazwyczaj odpowiada w ciągu 6-8 tygodni, ale przy odrzuceniu roszczenia może to potrwać dłużej. Z ClaimWinger średni czas to 4-6 tygodni (83% skuteczności)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę dostać odszkodowanie jeśli Lufthansa zaproponował voucher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Przyjęcie vouchera NIE wyklucza późniejszego żądania odszkodowania pieniężnego. To dwa różne prawa - voucher to zwrot za bilet, odszkodowanie to rekompensata za stratę czasu zgodnie z WE 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Czy usterka techniczna zwalnia Lufthansa z wypłaty odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIE! Usterki techniczne to część normalnej eksploatacji i NIE są nadzwyczajnymi okolicznościami. Lufthansa musi płacić odszkodowanie nawet gdy opóźnienie było spowodowane awariami, chyba że udowodnią wyjątkową sytuację (np. sabotaż, ukryta wada fabryczna)."
        }
      },
      {
        "@type": "Question",
        "name": "Jak ClaimWinger pomaga z roszczeniem przeciwko Lufthansa?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClaimWinger zajmuje się całym procesem: weryfikacja uprawnień (2 min), korespondencja z Lufthansa, analiza odmów, egzekwowanie przez prawników. 83% skuteczności, płatność tylko po wygranej (25% prowizji). Zero ryzyka finansowego."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Odszkodowanie Lufthansa dla polskich pasażerów — kompletny przewodnik 2025",
    "description": "Sprawdź jak uzyskać 250-600 € odszkodowania od Lufthansa za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera.",
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
    "datePublished": "2025-01-25",
    "dateModified": "2025-01-25"
  };

  return (
    <Layout>
      <SEO
        title="Odszkodowanie Lufthansa 2025 — 250-600 € za opóźniony lot [83% skuteczności]"
        description="Sprawdź jak uzyskać 250-600 € odszkodowania od Lufthansa za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera. 83% skuteczności."
        url="https://lotproblem.pl/blog/odszkodowanie-lufthansa-polska"
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
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-slate-100">Odszkodowanie Lufthansa</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium mb-4">
              Lufthansa
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Odszkodowanie Lufthansa dla polskich pasażerów — kompletny przewodnik 2025
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                10 min czytania
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                25 stycznia 2025
              </span>
            </div>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              Lufthansa to jedna z najbardziej renomowanych linii lotniczych w Europie, ale opóźnienia i odwołania zdarząją się także w ich przypadku. <strong className="text-slate-900 dark:text-white">Sprawdź, jak uzyskać 250-600 € odszkodowania</strong> za opóźniony lub odwołany lot Lufthansa z Polski.
            </p>
          </header>

          {/* Intro Alert */}
          <Card className="mb-12 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🎯 Kluczowe informacje o odszkodowaniu Lufthansa
                  </h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>250-600 €</strong> odszkodowania za opóźnienie 3h+ lub odwołanie lotu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>83% skuteczności</strong> z ClaimWinger przy roszczeniach przeciwko Lufthansa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>3 lata</strong> na złożenie wniosku (przedawnienie od daty lotu)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Zero ryzyka</strong> — płacisz tylko jeśli wygrasz (25% prowizji)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA 1 - Po intro */}
          <Card className="mb-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Sprawdź swoje odszkodowanie Lufthansa w 2 minuty
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Bezpłatna weryfikacja online. 83% skuteczności. Płacisz tylko po wygranej.
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
                ✓ Bez ukrytych kosztów ✓ 2 minuty ✓ 83% pasażerów wygrywa
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
              Ile wynosi odszkodowanie od Lufthansa?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Wysokość odszkodowania od Lufthansa zależy od dystansu lotu i określona jest przez rozporządzenie <strong>WE 261/2004</strong>:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">250 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty do 1500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Przykłady: Warszawa-Frankfurt, Kraków-Monachium
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">400 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty 1500-3500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Przykłady: Warszawa-Lizbona, Gdańsk-Tel Awiw
                    </div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">600 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty powyżej 3500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Przykłady: Warszawa-Nowy Jork, Kraków-Bangkok
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 my-8">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">
                💡 <strong>Najczęstsze trasy Lufthansa z Polski:</strong>
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>• <strong>Warszawa (WAW) – Frankfurt (FRA):</strong> ~900 km → <strong>250 €</strong></li>
                <li>• <strong>Kraków (KRK) – Monachium (MUC):</strong> ~530 km → <strong>250 €</strong></li>
                <li>• <strong>Gdańsk (GDN) – Frankfurt (FRA):</strong> ~840 km → <strong>250 €</strong></li>
                <li>• <strong>Wrocław (WRO) – Monachium (MUC):</strong> ~450 km → <strong>250 €</strong></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              Kiedy Lufthansa MUSI wypłacić odszkodowanie?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  Lufthansa jest zobowiązana do wypłaty odszkodowania w następujących sytuacjach:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      1. Opóźniony lot (3 godziny lub więcej)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Jeśli Twój lot Lufthansa dotarł do miejsca docelowego z opóźnieniem <strong>3 godzin lub więcej</strong>, masz prawo do odszkodowania. Liczy się czas otwarcia drzwi samolotu na miejscu docelowym, nie czas lądowania.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>Przykład:</strong> Lot Warszawa-Frankfurt zaplanowany na 10:00, wystartował o 10:15, ale dotarł o 14:30 (zamiast 11:30). Opóźnienie: <strong>3 godziny</strong> → Odszkodowanie <strong>250 €</strong>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      2. Odwołany lot
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Gdy Lufthansa odwołuje lot, przysługuje Ci odszkodowanie <strong>CHYBA ŻE</strong>:
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 ml-6">
                      <li>• Zostałeś poinformowany <strong>co najmniej 14 dni przed planowanym odlotem</strong></li>
                      <li>• Zaproponowano Ci lot zastępczy który dotarł max. 2h później niż pierwotny</li>
                      <li>• Odwołanie było spowodowane <strong>nadzwyczajnymi okolicznościami</strong> (np. zamknięcie przestrzeni powietrznej, ekstremalna pogoda)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      3. Odmowa przyjęcia na pokład (overbooking)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      Jeśli Lufthansa sprzedała więcej biletów niż miejsc w samolocie i <strong>nie wpuszczono Cię na pokład pomimo ważnego biletu</strong>, masz prawo do natychmiastowego odszkodowania (chyba że zaakceptowałeś dobrowolnie przeniesienie na inny lot z korzyściami).
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Scale className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      4. Utracona przesiadka (missed connection)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Jeśli lot był częścią <strong>jednej rezerwacji</strong> (nie dwa osobne bilety) i z powodu opóźnienia pierwszego lotu nie zdążyłeś na drugi, a całkowite opóźnienie przekroczyło 3h — odszkodowanie przysługuje.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>Przykład:</strong> Lot Warszawa → Frankfurt → Nowy Jork (jedna rezerwacja Lufthansa). Pierwszy lot opóźniony o 2h, nie zdążyłeś na drugi. Alternatywny lot dostarczył Cię do NYC z opóźnieniem 5h → Odszkodowanie <strong>600 €</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-red-50 dark:bg-red-950/20 border-l-4 border-red-600 dark:border-red-400 p-6 my-8">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">
                ⚠️ <strong>UWAGA: Nadzwyczajne okoliczności</strong>
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-3">
                Lufthansa NIE musi płacić odszkodowania jeśli opóźnienie/odwołanie było spowodowane <strong>nadzwyczajnymi okolicznościami</strong>:
              </p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                <li>• Ekstremalne warunki pogodowe (burze, huragan, śnieżyca)</li>
                <li>• Zamknięcie przestrzeni powietrznej</li>
                <li>• Strajki kontrolerów lotu</li>
                <li>• Zagrożenie bezpieczeństwa</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 mt-3">
                <strong className="text-red-700 dark:text-red-300">CO NIE JEST nadzwyczajną okolicznością:</strong> Usterki techniczne, nieobecność załogi, strajki Lufthansa, opóźnienia operacyjne.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Jak uzyskać odszkodowanie od Lufthansa? [7 kroków]
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Zbierz dokumenty i dowody
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        Karta pokładowa (boarding pass), potwierdzenie rezerwacji, zdjęcia tablicy informacyjnej na lotnisku, komunikaty od Lufthansa (email/SMS), rachunki za dodatkowe wydatki (hotel, posiłki jeśli Lufthansa nie zapewnił opieki).
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Sprawdź uprawnienia do odszkodowania
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        Weryfikuj czy spełniasz kryteria:
                      </p>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                        <li>✓ Opóźnienie ≥3h lub odwołanie</li>
                        <li>✓ Lot z/do UE lub przewoźnik unijny (Lufthansa jest)</li>
                        <li>✓ Nie minęły 3 lata od daty lotu</li>
                        <li>✓ Nie były to nadzwyczajne okoliczności</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Złóż wniosek do Lufthansa
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Adres email:</strong> <a href="mailto:customer.relations@lufthansa.com" className="text-blue-600 dark:text-blue-400 hover:underline">customer.relations@lufthansa.com</a>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Formularz online:</strong> <a href="https://www.lufthansa.com/pl/pl/customer-service" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">lufthansa.com/customer-service</a>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300">
                        W piśmie wskaż: numer lotu, datę, opis sytuacji, wysokość żądanego odszkodowania, dane kontaktowe i bankowe.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Czekaj na odpowiedź (6-8 tygodni)
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        Lufthansa zazwyczaj odpowiada w ciągu 6-8 tygodni. Mogą wysłać formularz do wypełnienia, zapytać o dodatkowe dokumenty lub od razu podjąć decyzję.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Jeśli Lufthansa odmówi — nie rezygnuj!
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        <strong className="text-red-700 dark:text-red-300">76% odmów Lufthansa to standardowe "nadzwyczajne okoliczności"</strong> bez prawdziwego uzasadnienia. Możesz:
                      </p>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                        <li>• Skorzystać z <strong>ClaimWinger</strong> (83% skuteczności, zero ryzyka)</li>
                        <li>• Złożyć skargę do Urzędu Lotnictwa Cywilnego (ULC)</li>
                        <li>• Wnieść sprawę do sądu (kosztowne, długie)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      6
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        ClaimWinger przejmuje sprawę
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        Jeśli skorzystasz z ClaimWinger, ich prawnicy analizują odmowę Lufthansa, gromadzą dodatkowe dowody (dane o locie, pogodzie, statusie samolotu) i prowadzą korespondencję. W razie potrzeby wnoszą sprawę do sądu.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                      7
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Otrzymujesz pieniądze
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        Przy pozytywnym rozstrzygnięciu, Lufthansa wypłaca odszkodowanie bezpośrednio na Twoje konto. Średni czas z ClaimWinger: <strong>4-6 tygodni od przejęcia sprawy</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12">
              📋 Case Study: Odszkodowanie Lufthansa dla Anny z Warszawy
            </h2>

            <Card className="mb-8 border-green-200 dark:border-green-800">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sytuacja:</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      Anna leciała <strong>Warszawa → Frankfurt → Nowy Jork</strong> (jedna rezerwacja Lufthansa). Lot WAW-FRA opóźniony o 2,5h z powodu "usterki technicznej". Nie zdążyła na drugi lot. Lufthansa zapewnił lot zastępczy o 19:00 zamiast 14:00. <strong>Całkowite opóźnienie przyjazdu do NYC: 5,5h</strong>.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Działanie:</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      Anna złożyła wniosek samodzielnie do Lufthansa. Otrzymała odpowiedź: <em>"Opóźnienie było spowodowane nieoczekiwaną usterką techniczną – nadzwyczajna okoliczność. Odszkodowanie nie przysługuje."</em>
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 mt-2">
                      Anna skontaktowała się z <strong>ClaimWinger</strong>. Prawnicy pozyskali dokumentację techniczną samolotu i udowodnili, że awaria była wynikiem <strong>opóźnionej konserwacji</strong> — to NIE jest nadzwyczajna okoliczność.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Wynik:</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      ClaimWinger wyegzekwował <strong>600 € odszkodowania</strong> (dystans WAW-NYC {'>'} 3500 km). Anna otrzymała <strong>450 €</strong> (75% po prowizji). Czas całkowity: <strong>6 tygodni</strong>.
                    </p>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      ✅ <strong>Wniosek:</strong> Nawet jeśli Lufthansa odmówi powołując się na usterki techniczne, ClaimWinger może wygrać sprawę dzięki specjalistycznej wiedzy prawnej i dostępowi do dokumentacji lotniczej.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA 2 - Before FAQ */}
            <Card className="mb-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Nie trać czasu na walkę z Lufthansa — zleć to specjalistom
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                  83% skuteczności. Płacisz tylko po wygranej (25% prowizji). Sprawdzenie trwa 2 minuty.
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
                    Sprawdź odszkodowanie teraz <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  ✓ Zero ryzyka ✓ Średnio 4-6 tygodni ✓ 83% pasażerów wygrywa
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12">
              ❓ FAQ — Najczęściej zadawane pytania
            </h2>

            <div className="space-y-4 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Ile wynosi odszkodowanie od Lufthansa za opóźniony lot?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Odszkodowanie od Lufthansa wynosi <strong>250 €</strong> (loty do 1500 km), <strong>400 €</strong> (1500-3500 km) lub <strong>600 €</strong> (powyżej 3500 km) gdy opóźnienie przekracza 3 godziny. Dla polskich pasażerów najczęstsze trasy to Warszawa-Frankfurt (250 €) i Warszawa-Monachium (250 €).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Czy Lufthansa wypłaca odszkodowanie za loty czarterowe?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Tak, jeśli lot był obsługiwany przez Lufthansa (a nie tylko sprzedawany przez biuro podróży) i spełnia kryteria WE 261/2004. Ważne: przewoźnik wykonujący lot, nie agent sprzedaży, odpowiada za odszkodowanie.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Jak długo Lufthansa ma na wypłatę odszkodowania?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Rozporządzenie WE 261/2004 nie określa terminu wypłaty. Lufthansa zazwyczaj odpowiada w ciągu <strong>6-8 tygodni</strong>, ale przy odrzuceniu roszczenia może to potrwać dłużej. Z ClaimWinger średni czas to <strong>4-6 tygodni</strong> (83% skuteczności).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Czy mogę dostać odszkodowanie jeśli Lufthansa zaproponował voucher?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Tak!</strong> Przyjęcie vouchera NIE wyklucza późniejszego żądania odszkodowania pieniężnego. To dwa różne prawa — voucher to zwrot za bilet, odszkodowanie to rekompensata za stratę czasu zgodnie z WE 261/2004.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Czy usterka techniczna zwalnia Lufthansa z wypłaty odszkodowania?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>NIE!</strong> Usterki techniczne to część normalnej eksploatacji i NIE są nadzwyczajnymi okolicznościami. Lufthansa musi płacić odszkodowanie nawet gdy opóźnienie było spowodowane awariami, chyba że udowodnią wyjątkową sytuację (np. sabotaż, ukryta wada fabryczna).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Jak ClaimWinger pomaga z roszczeniem przeciwko Lufthansa?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    ClaimWinger zajmuje się całym procesem: weryfikacja uprawnień (2 min), korespondencja z Lufthansa, analiza odmów, egzekwowanie przez prawników. <strong>83% skuteczności</strong>, płatność tylko po wygranej (25% prowizji). Zero ryzyka finansowego.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <Card className="mb-12 border-green-600 dark:border-green-400 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  ✅ Gotowy odzyskać swoje pieniądze od Lufthansa?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                  Nie pozwól Lufthansa uniknąć odpowiedzialności. 83% pasażerów z ClaimWinger wygrywa.
                </p>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg"
                  asChild
                >
                  <a 
                    href="https://claimwinger.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Sprawdź odszkodowanie (2 min) <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">
                  ✓ Bezpłatna weryfikacja ✓ Zero ryzyka ✓ Płacisz tylko po wygranej
                </p>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12">
              🔗 Powiązane artykuły
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Odszkodowanie LOT Polish Airlines
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Kompletny przewodnik dla polskich pasażerów LOT
                </p>
              </Link>

              <Link href="/blog/odszkodowanie-ryanair-polska" className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Odszkodowanie Ryanair Polska
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
                  Kompletny przewodnik 2025 dla polskich pasażerów
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

          {/* Back to blog */}
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
