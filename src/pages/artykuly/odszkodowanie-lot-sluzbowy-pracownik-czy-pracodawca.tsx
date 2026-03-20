import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  AlertCircle, 
  Scale, 
  FileText, 
  Users, 
  Briefcase,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function OdszkodowanieSluzbowyPracownikCzyPracodawca() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Komu przysługuje odszkodowanie za opóźniony lot służbowy — pracownikowi czy pracodawcy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Odszkodowanie przysługuje osobie, która była stroną umowy przewozu. W praktyce, jeśli bilet kupił pracodawca, to on jest stroną umowy i formalnoprawnie ma prawo do odszkodowania. Jednak pracownik jako rzeczywisty pasażer również może je uzyskać, jeśli nie zostało to inaczej uregulowane w polityce firmowej."
        }
      },
      {
        "@type": "Question",
        "name": "Czy pracownik może zatrzymać odszkodowanie za lot służbowy dla siebie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zależy to od polityki firmy i zapisów w umowie o pracę lub regulaminie podróży służbowych. Jeśli firma nie ma jasnych zasad, pracownik teoretycznie może zatrzymać odszkodowanie, ale zaleca się wcześniejsze uzgodnienie tego z pracodawcą, aby uniknąć problemów."
        }
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może zażądać zwrotu odszkodowania od pracownika?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, jeśli w polityce podróży służbowych lub umowie o pracę znajduje się zapis zobowiązujący pracownika do przekazania odszkodowania firmie. Bez takich zapisów pracodawca może mieć trudności z wyegzekwowaniem zwrotu."
        }
      },
      {
        "@type": "Question",
        "name": "Czy odszkodowanie za lot służbowy podlega opodatkowaniu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Według interpretacji organów podatkowych, odszkodowanie otrzymane przez pracownika za opóźniony lot służbowy co do zasady nie stanowi przychodu podlegającego opodatkowaniu PIT, jeśli zostanie przekazane pracodawcy. Jeśli pracownik je zatrzyma, może być traktowane jako przychód."
        }
      },
      {
        "@type": "Question",
        "name": "Kto powinien złożyć wniosek o odszkodowanie — pracownik czy firma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wniosek może złożyć zarówno pracownik (jako rzeczywisty pasażer), jak i firma (jako strona umowy przewozu). W praktyce często wygodniej jest, gdy wniosek składa pracownik, a następnie przekazuje odszkodowanie firmie zgodnie z wewnętrznymi procedurami."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo można ubiegać się o odszkodowanie za opóźniony lot służbowy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zgodnie z polskim prawem, roszczenie przedawnia się po 3 latach od daty zakończonego lotu. Warto jednak zgłosić reklamację jak najszybciej, ponieważ linie lotnicze mogą mieć własne, krótsze terminy dla uproszczonych procedur."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Odszkodowanie za opóźniony lot służbowy — komu przysługuje: pracownikowi czy pracodawcy?",
    "description": "Kompleksowy przewodnik wyjaśniający, kto ma prawo do odszkodowania za opóźniony lot służbowy. Aspekty prawne, podatkowe i praktyczne rozwiązania dla firm i pracowników.",
    "image": "https://bizneslot.pl/og-image.png",
    "author": {
      "@type": "Person",
      "name": "Ekspert BiznesLot"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BiznesLot.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizneslot.pl/bizneslotlogotyp.png"
      }
    },
    "datePublished": "2025-02-23",
    "dateModified": "2025-02-23"
  };

  return (
    <>
      <SEO 
        title="Odszkodowanie za lot służbowy — pracownik czy pracodawca? [Poradnik 2025]"
        description="Komu przysługuje odszkodowanie za opóźniony lot służbowy? Kompleksowy przewodnik po prawach pracownika i pracodawcy, aspektach prawnych i podatkowych. Sprawdź!"
        url="https://bizneslot.pl/artykuly/odszkodowanie-lot-sluzbowy-pracownik-czy-pracodawca"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Scale className="h-6 w-6" />
              <span className="text-blue-100 font-medium">Prawa pasażera w podróży służbowej</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Odszkodowanie za opóźniony lot służbowy — komu przysługuje: pracownikowi czy pracodawcy?
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Kompleksowy przewodnik wyjaśniający, kto ma prawo do odszkodowania za opóźniony lot służbowy. Aspekty prawne, podatkowe i praktyczne rozwiązania dla firm i pracowników.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Opóźnienie lotu służbowego to sytuacja, która dotyka tysiące polskich firm rocznie. Gdy dochodzi do znacznego opóźnienia lub odwołania lotu, pojawia się pytanie: <strong>kto ma prawo do odszkodowania — pracownik, który faktycznie podróżował, czy pracodawca, który opłacił bilet?</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              To nie tylko kwestia praktyczna, ale też prawna i podatkowa. W tym artykule szczegółowo wyjaśniamy, jak działa system odszkodowań w kontekście lotów służbowych, kto formalnie jest stroną umowy przewozu, i jak firmy oraz pracownicy powinni postępować, aby uniknąć nieporozumień.
            </p>
          </div>

          {/* Key Insight Box */}
          <Card className="p-6 mb-12 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
            <div className="flex gap-4">
              <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Kluczowa informacja
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Zgodnie z rozporządzeniem WE 261/2004, odszkodowanie przysługuje pasażerowi, który faktycznie odbył (lub miał odbyć) lot. Jednak w kontekście lotów służbowych sytuacja jest bardziej złożona, ponieważ stroną umowy przewozu jest zazwyczaj pracodawca, który kupił bilet.
                </p>
              </div>
            </div>
          </Card>

          {/* Section 1: Kto jest stroną umowy przewozu */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Kto jest stroną umowy przewozu lotniczego?
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Podstawową kwestią jest ustalenie, kto formalnie zawarł umowę z linią lotniczą. W przypadku lotów służbowych najczęściej spotykamy dwa scenariusze:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Briefcase className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Bilet kupiony przez firmę
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Gdy pracodawca bezpośrednio kupuje bilet (przez biuro podróży firmowe, korporacyjny system rezerwacji lub własną kartą płatniczą), to <strong>firma jest stroną umowy przewozu</strong>.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        W takim przypadku formalnoprawnie to firma ma roszczenie o odszkodowanie, choć pracownik jako rzeczywisty pasażer również może je uzyskać.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Bilet kupiony przez pracownika
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Jeśli pracownik kupuje bilet na własne nazwisko i własną kartą (a następnie rozlicza się z firmą), to <strong>pracownik jest stroną umowy przewozu</strong>.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        W tej sytuacji pracownik jednoznacznie ma prawo do odszkodowania, ale powinien uzgodnić z pracodawcą, co z nim zrobi.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>W praktyce</strong> linie lotnicze często przyjmują wnioski zarówno od firm, jak i od pracowników, nie weryfikując szczegółowo, kto faktycznie był stroną umowy. Kluczowe jest jednak uniknięcie sytuacji, w której zarówno pracownik, jak i pracodawca składają odrębne wnioski o to samo odszkodowanie — może to prowadzić do komplikacji prawnych.
              </p>
            </div>
          </section>

          {/* Section 2: Przepisy prawne */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Co mówią przepisy? Rozporządzenie WE 261/2004
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Podstawowym aktem prawnym regulującym odszkodowania za opóźnione i odwołane loty w Unii Europejskiej jest <strong>rozporządzenie WE 261/2004</strong>. Określa ono prawa pasażerów, wysokość odszkodowań oraz procedury dochodzenia roszczeń.
              </p>

              <Card className="p-6 my-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Kluczowe zapisy rozporządzenia:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Odszkodowanie przysługuje pasażerowi</strong> — osobie, która faktycznie miała lecieć
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Wysokość odszkodowania zależy od dystansu lotu: <strong>250–600 EUR</strong>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Opóźnienie musi wynosić co najmniej <strong>3 godziny</strong> (czas dotarcia do celu)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      Lot musi wystartować z UE lub lądować w UE (przy przewoźniku unijnym)
                    </span>
                  </li>
                </ul>
              </Card>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Rozporządzenie nie rozróżnia lotów prywatnych i służbowych — zasady są te same. Jednak w kontekście korporacyjnym pojawia się dodatkowa warstwa: <strong>wewnętrzne regulacje firmy dotyczące podróży służbowych</strong>.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Więcej szczegółów na temat przepisów znajdziesz na stronie{" "}
                <a 
                  href="https://wise-flight.info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline font-medium inline-flex items-center gap-1"
                >
                  Wise-Flight.info
                  <ExternalLink className="h-4 w-4" />
                </a>
                {" "}— kompleksowym portalu o prawach pasażerów lotniczych.
              </p>
            </div>
          </section>

          {/* CTA Mid-Article */}
          <Card className="p-8 my-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Masz opóźniony lub odwołany lot służbowy?
                </h3>
                <p className="text-blue-100 text-lg">
                  Sprawdź w 2 minuty, czy przysługuje Ci odszkodowanie do 600 EUR. Bez rejestracji, bez ukrytych kosztów.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg whitespace-nowrap"
              >
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot?utm_source=problemlot&utm_medium=blog&utm_campaign=article_pracownik_pracodawca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Sprawdź odszkodowanie
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </Card>

          {/* Section 3: Praktyczne scenariusze */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Praktyczne scenariusze — kto dostaje odszkodowanie?
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                W praktyce biznesowej spotykamy różne warianty rozliczeń odszkodowań za loty służbowe. Oto najczęstsze scenariusze:
              </p>

              <div className="space-y-6">
                <Card className="p-6 border-l-4 border-l-blue-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Scenariusz 1: Firma ma jasną politykę podróży służbowych
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Najlepszy wariant. Firma posiada dokument (regulamin podróży, polityka travel, aneks do umowy), który wprost określa:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700 dark:text-gray-300">✓ Kto składa wniosek o odszkodowanie (pracownik czy dział HR/finanse)</li>
                    <li className="text-gray-700 dark:text-gray-300">✓ Kto zatrzymuje odszkodowanie (firma czy pracownik)</li>
                    <li className="text-gray-700 dark:text-gray-300">✓ Jak przebiega rozliczenie (czy pracownik przekazuje środki firmie)</li>
                  </ul>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-3 italic">
                    W tym przypadku nie ma wątpliwości — obowiązują zapisy firmowe.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-l-yellow-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Scenariusz 2: Brak jasnych zasad w firmie
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Najczęstsza sytuacja w polskich firmach. Firma nie ma pisemnej polityki dotyczącej odszkodowań lotniczych.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Co może zrobić pracodawca?</strong>
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-gray-700 dark:text-gray-300">→ Jeśli nie ma zapisów w umowie/regulaminie — trudno wyegzekwować zwrot</li>
                    <li className="text-gray-700 dark:text-gray-300">→ Może spróbować potrącić z wynagrodzenia (ryzykowne prawnie bez zgody pracownika)</li>
                    <li className="text-gray-700 dark:text-gray-300">→ Może wnieść sprawę do sądu pracy (kosztowne i czasochłonne)</li>
                  </ul>
                  <p className="text-red-700 dark:text-red-400 font-medium mt-3">
                    ⚠️ Unikaj tego scenariusza — ustal zasady wcześniej!
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 4: Aspekty podatkowe */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Aspekty podatkowe — czy odszkodowanie trzeba opodatkować?
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Ważnym pytaniem jest również kwestia opodatkowania odszkodowania za lot służbowy. Zgodnie z interpretacjami organów podatkowych:
              </p>

              <Card className="p-6 my-6 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
                <div className="flex gap-4">
                  <AlertCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Kluczowa zasada podatkowa
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">
                      <strong>Jeśli pracownik przekazuje odszkodowanie pracodawcy</strong> — nie powstaje przychód podlegający opodatkowaniu PIT u pracownika.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>Jeśli pracownik zatrzymuje odszkodowanie dla siebie</strong> — może być traktowane jako przychód z innych źródeł (choć interpretacje są niejednoznaczne).
                    </p>
                  </div>
                </div>
              </Card>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Jak prawidłowo rozliczyć odszkodowanie w firmie?
                </h3>
                <ol className="space-y-3 list-decimal list-inside">
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Pracownik otrzymuje odszkodowanie</strong> — linia lotnicza wypłaca środki na konto pracownika
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Pracownik wystawia firmie notę księgową</strong> — dokument potwierdzający przekazanie odszkodowania pracodawcy
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Firma księguje odszkodowanie jako przychód</strong> — zmniejszenie kosztów podróży służbowych
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Pracownik nie wykazuje tego w PIT</strong> — ponieważ środki zostały przekazane pracodawcy
                  </li>
                </ol>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong>Uwaga:</strong> Interpretacje podatkowe w tym zakresie nie są jednolite. W razie wątpliwości warto skonsultować się z księgowym lub doradcą podatkowym, szczególnie w przypadku wyższych kwot odszkodowań.
              </p>
            </div>
          </section>

          {/* Section 5: Jak postępować krok po kroku */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Jak postępować krok po kroku — praktyczny poradnik
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Oto zalecana procedura dla firm i pracowników, które chcą skutecznie odzyskać odszkodowanie za opóźniony lot służbowy:
              </p>

              <div className="space-y-4">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Ustal zasady z pracodawcą PRZED podróżą
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Najlepiej, jeśli firma ma pisemną politykę podróży służbowych. Jeśli nie ma — uzgodnij z przełożonym lub działem HR, jak postępować w razie opóźnienia.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Zbierz dokumenty dotyczące opóźnionego lotu
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Karta pokładowa, potwierdzenie rezerwacji, informacja o opóźnieniu od linii lotniczej, zdjęcia tablicy informacyjnej na lotnisku.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Złóż wniosek o odszkodowanie
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Możesz to zrobić samodzielnie (bezpośrednio do linii lotniczej) lub przez wyspecjalizowaną platformę, która zajmie się całą procedurą za Ciebie.
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <strong>Wskazówka:</strong> Platformy takie jak ClaimWinger obsługują również loty służbowe i nie wymagają rejestracji — wystarczy wypełnić prosty formularz online.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Poinformuj pracodawcę o złożeniu wniosku
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Zgłoś działowi HR lub bezpośrednim przełożonemu, że złożyłeś wniosek o odszkodowanie. Przygotuj się na przekazanie środków firmie, jeśli takie są ustalenia.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Otrzymaj odszkodowanie i rozlicz się
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Po otrzymaniu środków (zazwyczaj po 4-8 tygodniach) przekaż odszkodowanie firmie zgodnie z ustaleniami. Wystawiasz notę księgową lub inny dokument rozliczeniowy.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 6: Rekomendacje dla firm */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Rekomendacje dla działów HR i travel managerów
            </h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                Jeśli jesteś odpowiedzialny za zarządzanie podróżami służbowymi w firmie, warto wdrożyć jasne procedury dotyczące odszkodowań lotniczych:
              </p>

              <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Co powinna zawierać firmowa polityka podróży służbowych?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Kto składa wnioski o odszkodowanie</strong> — pracownik czy dział HR/finanse?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Kto zatrzymuje odszkodowanie</strong> — firma czy pracownik?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Termin przekazania środków</strong> — np. 14 dni od otrzymania
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Procedura rozliczenia</strong> — jakie dokumenty są potrzebne?
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">
                      <strong>Konsekwencje niezastosowania się</strong> — potrącenia, upomnienia?
                    </span>
                  </li>
                </ul>
              </Card>

              <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  💡 Wskazówka dla firm
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Jeśli Twoja firma regularnie wysyła pracowników w podróże służbowe, warto rozważyć współpracę z platformą specjalizującą się w odzyskiwaniu odszkodowań lotniczych. Dzięki temu:
                </p>
                <ul className="mt-3 space-y-2 ml-6">
                  <li className="text-gray-700 dark:text-gray-300">→ Zautomatyzujesz proces składania wniosków</li>
                  <li className="text-gray-700 dark:text-gray-300">→ Odciążysz dział HR/finanse</li>
                  <li className="text-gray-700 dark:text-gray-300">→ Zwiększysz skuteczność odzyskiwania środków</li>
                  <li className="text-gray-700 dark:text-gray-300">→ Zmniejszysz ryzyko sporów z pracownikami</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <Card className="p-8 my-12 bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Nie trać czasu na skomplikowane procedury
              </h3>
              <p className="text-blue-100 text-lg mb-6">
                Zgłoś opóźniony lub odwołany lot służbowy przez prosty formularz ClaimWinger. Bez rejestracji, bez ukrytych kosztów — płacisz tylko prowizję od sukcesu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-6 text-lg"
                >
                  <a 
                    href="https://claimwinger.com/pl/opozniony-lot?utm_source=problemlot&utm_medium=blog&utm_campaign=article_pracownik_pracodawca_cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Opóźniony lot
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-lg"
                >
                  <a 
                    href="https://claimwinger.com/pl/odwolany-lot?utm_source=problemlot&utm_medium=blog&utm_campaign=article_pracownik_pracodawca_cta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Odwołany lot
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Najczęściej zadawane pytania
            </h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Komu przysługuje odszkodowanie za opóźniony lot służbowy — pracownikowi czy pracodawcy?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Odszkodowanie przysługuje osobie, która była stroną umowy przewozu. W praktyce, jeśli bilet kupił pracodawca, to on jest stroną umowy i formalnoprawnie ma prawo do odszkodowania. Jednak pracownik jako rzeczywisty pasażer również może je uzyskać, jeśli nie zostało to inaczej uregulowane w polityce firmowej.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Czy pracownik może zatrzymać odszkodowanie za lot służbowy dla siebie?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Zależy to od polityki firmy i zapisów w umowie o pracę lub regulaminie podróży służbowych. Jeśli firma nie ma jasnych zasad, pracownik teoretycznie może zatrzymać odszkodowanie, ale zaleca się wcześniejsze uzgodnienie tego z pracodawcą, aby uniknąć problemów.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Czy pracodawca może zażądać zwrotu odszkodowania od pracownika?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Tak, jeśli w polityce podróży służbowych lub umowie o pracę znajduje się zapis zobowiązujący pracownika do przekazania odszkodowania firmie. Bez takich zapisów pracodawca może mieć trudności z wyegzekwowaniem zwrotu.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Czy odszkodowanie za lot służbowy podlega opodatkowaniu?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Według interpretacji organów podatkowych, odszkodowanie otrzymane przez pracownika za opóźniony lot służbowy co do zasady nie stanowi przychodu podlegającego opodatkowaniu PIT, jeśli zostanie przekazane pracodawcy. Jeśli pracownik je zatrzyma, może być traktowane jako przychód.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Kto powinien złożyć wniosek o odszkodowanie — pracownik czy firma?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Wniosek może złożyć zarówno pracownik (jako rzeczywisty pasażer), jak i firma (jako strona umowy przewozu). W praktyce często wygodniej jest, gdy wniosek składa pracownik, a następnie przekazuje odszkodowanie firmie zgodnie z wewnętrznymi procedurami.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Jak długo można ubiegać się o odszkodowanie za opóźniony lot służbowy?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Zgodnie z polskim prawem, roszczenie przedawnia się po 3 latach od daty zakończonego lotu. Warto jednak zgłosić reklamację jak najszybciej, ponieważ linie lotnicze mogą mieć własne, krótsze terminy dla uproszczonych procedur.
                </p>
              </Card>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-12">
            <Card className="p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Podsumowanie
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Odszkodowanie za opóźniony lot służbowy to temat, który wymaga jasnych ustaleń między pracownikiem a pracodawcą. Kluczowe jest:
                </p>
                <ul className="space-y-2">
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Ustalenie zasad z wyprzedzeniem</strong> — najlepiej w formie pisemnej polityki podróży służbowych
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Zrozumienie, kto jest stroną umowy przewozu</strong> — to determinuje, kto formalnie ma prawo do odszkodowania
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Świadomość aspektów podatkowych</strong> — prawidłowe rozliczenie odszkodowania w firmie
                  </li>
                  <li className="text-gray-700 dark:text-gray-300">
                    <strong>Korzystanie z profesjonalnych platform</strong> — uproszczenie procesu i zwiększenie skuteczności
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Pamiętaj, że zgodnie z rozporządzeniem WE 261/2004 każdy pasażer ma prawo do odszkodowania za opóźniony lub odwołany lot — niezależnie od tego, czy podróżuje prywatnie, czy służbowo. Kluczem do sukcesu jest właściwa organizacja procesu odzyskiwania tych środków w firmie.
                </p>
              </div>
            </Card>
          </section>

          {/* Back to Articles */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/artykuly" className="inline-flex items-center gap-2">
                <ArrowRight className="h-5 w-5 rotate-180" />
                Powrót do listy artykułów
              </Link>
            </Button>
          </div>

        </article>
      </div>
    </>
  );
}
