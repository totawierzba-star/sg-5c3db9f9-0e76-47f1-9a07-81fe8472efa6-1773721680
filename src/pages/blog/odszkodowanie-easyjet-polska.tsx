import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Plane, Euro, Clock, AlertTriangle, CheckCircle2, FileText, Scale, MapPin } from "lucide-react";

export default function OdszkodowanieEasyJetPolska() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Ile wynosi odszkodowanie od easyJet za opóźniony lot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odszkodowanie od easyJet wynosi 250 € (loty do 1500 km), 400 € (1500-3500 km) lub 600 € (powyżej 3500 km) gdy opóźnienie przekracza 3 godziny. Dla polskich pasażerów najczęstsze trasy to Kraków-Londyn (250 €) i Warszawa-Manchester (250 €)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy easyJet wypłaca odszkodowanie za loty z Polski?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, easyJet jest zobowiązany do wypłaty odszkodowania za loty z Polski zgodnie z rozporządzeniem WE 261/2004. Dotyczy to wszystkich lotów z polskich lotnisk (Warszawa, Kraków, Gdańsk, Katowice) oraz lotów easyJet do Polski z dowolnego miejsca w UE."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo easyJet ma na wypłatę odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rozporządzenie WE 261/2004 nie określa terminu wypłaty. easyJet zazwyczaj odpowiada w ciągu 4-6 tygodni, ale przy odrzuceniu roszczenia może to potrwać dłużej. Z ClaimWinger średni czas to 3-5 tygodni (79% skuteczności)."
        }
      },
      {
        "@type": "Question",
        "name": "Czy mogę dostać odszkodowanie jeśli easyJet zaproponował voucher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak! Przyjęcie vouchera NIE wyklucza późniejszego żądania odszkodowania pieniężnego. To dwa różne prawa - voucher to zwrot za bilet, odszkodowanie to rekompensata za stratę czasu zgodnie z WE 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Czy pogoda zwalnia easyJet z wypłaty odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tylko EKSTREMALNA pogoda (huragan, śnieżyca, burza uniemożliwiająca loty) jest nadzwyczajną okolicznością. Zwykły deszcz, wiatr, czy mgła NIE zwalniają easyJet z odszkodowania. Jeśli inne samoloty latały w tym samym czasie - easyJet MUSI zapłacić."
        }
      },
      {
        "@type": "Question",
        "name": "Jak ClaimWinger pomaga z roszczeniem przeciwko easyJet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ClaimWinger zajmuje się całym procesem: weryfikacja uprawnień (2 min), korespondencja z easyJet, analiza odmów, egzekwowanie przez prawników. 79% skuteczności, płatność tylko po wygranej (25% prowizji). Zero ryzyka finansowego."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Odszkodowanie easyJet dla polskich pasażerów — kompletny przewodnik 2025",
    "description": "Sprawdź jak uzyskać 250-600 € odszkodowania od easyJet za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera.",
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
    "datePublished": "2025-01-22",
    "dateModified": "2025-01-22"
  };

  return (
    <Layout>
      <SEO
        title="Odszkodowanie easyJet 2025 — 250-600 € za opóźniony lot [79% skuteczności]"
        description="Sprawdź jak uzyskać 250-600 € odszkodowania od easyJet za opóźniony lub odwołany lot. Procedury, stawki, prawa pasażera. 79% skuteczności."
        url="https://lotproblem.pl/blog/odszkodowanie-easyjet-polska"
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
            <span className="text-slate-900 dark:text-slate-100">Odszkodowanie easyJet</span>
          </nav>

          {/* Hero */}
          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-sm font-medium mb-4">
              easyJet
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Odszkodowanie easyJet dla polskich pasażerów — kompletny przewodnik 2025
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                9 min czytania
              </span>
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                22 stycznia 2025
              </span>
            </div>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              easyJet to jedna z najpopularniejszych tanich linii lotniczych w Europie, obsługująca wiele tras z Polski. <strong className="text-slate-900 dark:text-white">Sprawdź, jak uzyskać 250-600 € odszkodowania</strong> za opóźniony lub odwołany lot easyJet.
            </p>
          </header>

          {/* Intro Alert */}
          <Card className="mb-12 border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                    🎯 Kluczowe informacje o odszkodowaniu easyJet
                  </h3>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>250-600 €</strong> odszkodowania za opóźnienie 3h+ lub odwołanie lotu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span><strong>79% skuteczności</strong> z ClaimWinger przy roszczeniach przeciwko easyJet</span>
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
                Sprawdź swoje odszkodowanie easyJet w 2 minuty
              </h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                Bezpłatna weryfikacja online. 79% skuteczności. Płacisz tylko po wygranej.
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
                ✓ Bez ukrytych kosztów ✓ 2 minuty ✓ 79% pasażerów wygrywa
              </p>
            </CardContent>
          </Card>

          {/* Main Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              Ile wynosi odszkodowanie od easyJet?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Wysokość odszkodowania od easyJet zależy od dystansu lotu i określona jest przez rozporządzenie <strong>WE 261/2004</strong>:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">250 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty do 1500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Przykłady: Kraków-Londyn, Warszawa-Genewa
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">400 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty 1500-3500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Przykłady: Warszawa-Lizbona, Kraków-Tel Awiw
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-800">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">600 €</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">Loty powyżej 3500 km</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Rzadkie dla easyJet z Polski
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-orange-50 dark:bg-orange-950/20 border-l-4 border-orange-600 dark:border-orange-400 p-6 my-8">
              <p className="text-slate-800 dark:text-slate-200 font-medium mb-2">
                💡 <strong>Najczęstsze trasy easyJet z Polski:</strong>
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>• <strong>Kraków (KRK) – Londyn Luton (LTN):</strong> ~1,650 km → <strong>400 €</strong></li>
                <li>• <strong>Warszawa (WAW) – Londyn Gatwick (LGW):</strong> ~1,450 km → <strong>250 €</strong></li>
                <li>• <strong>Gdańsk (GDN) – Londyn Stansted (STN):</strong> ~1,380 km → <strong>250 €</strong></li>
                <li>• <strong>Katowice (KTW) – Londyn Luton (LTN):</strong> ~1,580 km → <strong>400 €</strong></li>
                <li>• <strong>Warszawa (WAW) – Manchester (MAN):</strong> ~1,650 km → <strong>400 €</strong></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              Kiedy easyJet MUSI wypłacić odszkodowanie?
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-6">
                  easyJet jest zobowiązany do wypłaty odszkodowania w następujących sytuacjach:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      1. Opóźniony lot (3 godziny lub więcej)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Jeśli Twój lot easyJet dotarł do miejsca docelowego z opóźnieniem <strong>3 godzin lub więcej</strong>, masz prawo do odszkodowania. Liczy się czas otwarcia drzwi samolotu na miejscu docelowym, nie czas lądowania.
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        <strong>Przykład:</strong> Lot Kraków-Londyn zaplanowany na 08:00, wystartował o 08:30, ale dotarł o 13:15 (zamiast 10:00). Opóźnienie: <strong>3 godziny 15 minut</strong> → Odszkodowanie <strong>400 €</strong>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                      2. Odwołany lot
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 mb-3">
                      Gdy easyJet odwołuje lot, przysługuje Ci odszkodowanie <strong>CHYBA ŻE</strong>:
                    </p>
                    <ul className="space-y-2 text-slate-700 dark:text-slate-300 ml-6">
                      <li>• Zostałeś poinformowany <strong>co najmniej 14 dni przed planowanym odlotem</strong></li>
                      <li>• Zaproponowano Ci lot zastępczy który dotarł max. 2h później niż pierwotny</li>
                      <li>• Odwołanie było spowodowane <strong>nadzwyczajnymi okolicznościami</strong> (np. ekstremalna pogoda, zamknięcie lotniska)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      3. Odmowa przyjęcia na pokład (overbooking)
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      Jeśli easyJet sprzedał więcej biletów niż miejsc w samolocie i <strong>nie wpuszczono Cię na pokład pomimo ważnego biletu</strong>, masz prawo do natychmiastowego odszkodowania (chyba że zaakceptowałeś dobrowolnie przeniesienie na inny lot z korzyściami).
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
                        <strong>Przykład:</strong> Lot Warszawa → Londyn → Barcelona (jedna rezerwacja easyJet). Pierwszy lot opóźniony o 1,5h, nie zdążyłeś na drugi. Alternatywny lot dostarczył Cię do Barcelony z opóźnieniem 4h → Odszkodowanie <strong>400 €</strong>
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
                easyJet NIE musi płacić odszkodowania jeśli opóźnienie/odwołanie było spowodowane <strong>nadzwyczajnymi okolicznościami</strong>:
              </p>
              <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                <li>• Ekstremalne warunki pogodowe (burze, huragan, śnieżyca)</li>
                <li>• Zamknięcie przestrzeni powietrznej lub lotniska</li>
                <li>• Strajki kontrolerów lotu</li>
                <li>• Zagrożenie bezpieczeństwa</li>
              </ul>
              <p className="text-slate-700 dark:text-slate-300 mt-3">
                <strong className="text-red-700 dark:text-red-300">CO NIE JEST nadzwyczajną okolicznością:</strong> Usterki techniczne, nieobecność załogi, strajki easyJet, opóźnienia operacyjne, zwykła pogoda (deszcz, wiatr, mgła).
              </p>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              Jak uzyskać odszkodowanie od easyJet? [7 kroków]
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
                        Karta pokładowa (boarding pass), potwierdzenie rezerwacji, zdjęcia tablicy informacyjnej na lotnisku, komunikaty od easyJet (email/SMS), rachunki za dodatkowe wydatki (hotel, posiłki jeśli easyJet nie zapewnił opieki).
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
                        <li>✓ Lot z/do UE lub przewoźnik unijny (easyJet jest)</li>
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
                        Złóż wniosek do easyJet
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Formularz online:</strong> <a href="https://www.easyjet.com/pl/help/contact-us" target="_blank" rel="noopener" className="text-blue-600 dark:text-blue-400 hover:underline">easyjet.com/help/contact-us</a>
                      </p>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        <strong>Email:</strong> <a href="mailto:customerservice@easyjet.com" className="text-blue-600 dark:text-blue-400 hover:underline">customerservice@easyjet.com</a>
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
                        Czekaj na odpowiedź (4-6 tygodni)
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">
                        easyJet zazwyczaj odpowiada w ciągu 4-6 tygodni. Mogą wysłać formularz do wypełnienia, zapytać o dodatkowe dokumenty lub od razu podjąć decyzję.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white mb-2">
                        Jeśli easyJet odmówi — nie rezygnuj!
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 mb-2">
                        <strong className="text-red-700 dark:text-red-300">67% odmów easyJet to standardowe "nadzwyczajne okoliczności"</strong> bez prawdziwego uzasadnienia. Możesz:
                      </p>
                      <ul className="space-y-1 text-slate-700 dark:text-slate-300 ml-4">
                        <li>• Skorzystać z <strong>ClaimWinger</strong> (79% skuteczności, zero ryzyka)</li>
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
                        Jeśli skorzystasz z ClaimWinger, ich prawnicy analizują odmowę easyJet, gromadzą dodatkowe dowody (dane o locie, pogodzie, statusie samolotu) i prowadzą korespondencję. W razie potrzeby wnoszą sprawę do sądu.
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
                        Przy pozytywnym rozstrzygnięciu, easyJet wypłaca odszkodowanie bezpośrednio na Twoje konto. Średni czas z ClaimWinger: <strong>3-5 tygodni od przejęcia sprawy</strong>.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 mt-12 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-orange-600 dark:text-orange-400" />
              easyJet w Polsce — najważniejsze trasy
            </h2>

            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  easyJet obsługuje regularne połączenia z kilku polskich miast, głównie do Wielkiej Brytanii i Szwajcarii:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🛫 Kraków (KRK)</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Londyn Luton (LTN)</li>
                      <li>• Londyn Gatwick (LGW)</li>
                      <li>• Genewa (GVA)</li>
                      <li>• Manchester (MAN)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🛫 Warszawa (WAW)</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Londyn Gatwick (LGW)</li>
                      <li>• Manchester (MAN)</li>
                      <li>• Bristol (BRS)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🛫 Gdańsk (GDN)</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Londyn Stansted (STN)</li>
                      <li>• Bristol (BRS)</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🛫 Katowice (KTW)</h4>
                    <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <li>• Londyn Luton (LTN)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA 2 - Before FAQ */}
            <Card className="mb-12 border-blue-600 dark:border-blue-400 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Nie trać czasu na walkę z easyJet — zleć to specjalistom
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                  79% skuteczności. Płacisz tylko po wygranej (25% prowizji). Sprawdzenie trwa 2 minuty.
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
                  ✓ Zero ryzyka ✓ Średnio 3-5 tygodni ✓ 79% pasażerów wygrywa
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
                    Ile wynosi odszkodowanie od easyJet za opóźniony lot?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Odszkodowanie od easyJet wynosi <strong>250 €</strong> (loty do 1500 km), <strong>400 €</strong> (1500-3500 km) lub <strong>600 €</strong> (powyżej 3500 km) gdy opóźnienie przekracza 3 godziny. Dla polskich pasażerów najczęstsze trasy to Kraków-Londyn (400 €) i Warszawa-Manchester (400 €).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Czy easyJet wypłaca odszkodowanie za loty z Polski?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Tak, easyJet jest zobowiązany do wypłaty odszkodowania za loty z Polski zgodnie z rozporządzeniem WE 261/2004. Dotyczy to wszystkich lotów z polskich lotnisk (Warszawa, Kraków, Gdańsk, Katowice) oraz lotów easyJet do Polski z dowolnego miejsca w UE.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Jak długo easyJet ma na wypłatę odszkodowania?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Rozporządzenie WE 261/2004 nie określa terminu wypłaty. easyJet zazwyczaj odpowiada w ciągu <strong>4-6 tygodni</strong>, ale przy odrzuceniu roszczenia może to potrwać dłużej. Z ClaimWinger średni czas to <strong>3-5 tygodni</strong> (79% skuteczności).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Czy mogę dostać odszkodowanie jeśli easyJet zaproponował voucher?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>Tak!</strong> Przyjęcie vouchera NIE wyklucza późniejszego żądania odszkodowania pieniężnego. To dwa różne prawa — voucher to zwrot za bilet, odszkodowanie to rekompensata za stratę czasu zgodnie z WE 261/2004.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Czy pogoda zwalnia easyJet z wypłaty odszkodowania?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Tylko <strong>EKSTREMALNA</strong> pogoda (huragan, śnieżyca, burza uniemożliwiająca loty) jest nadzwyczajną okolicznością. Zwykły deszcz, wiatr, czy mgła NIE zwalniają easyJet z odszkodowania. Jeśli inne samoloty latały w tym samym czasie - easyJet MUSI zapłacić.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                    Jak ClaimWinger pomaga z roszczeniem przeciwko easyJet?
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    ClaimWinger zajmuje się całym procesem: weryfikacja uprawnień (2 min), korespondencja z easyJet, analiza odmów, egzekwowanie przez prawników. <strong>79% skuteczności</strong>, płatność tylko po wygranej (25% prowizji). Zero ryzyka finansowego.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <Card className="mb-12 border-green-600 dark:border-green-400 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  ✅ Gotowy odzyskać swoje pieniądze od easyJet?
                </h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6 max-w-2xl mx-auto">
                  Nie pozwól easyJet uniknąć odpowiedzialności. 79% pasażerów z ClaimWinger wygrywa.
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

              <Link href="/blog/odszkodowanie-lufthansa-polska" className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Odszkodowanie Lufthansa
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Przewodnik dla polskich pasażerów Lufthansa
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
