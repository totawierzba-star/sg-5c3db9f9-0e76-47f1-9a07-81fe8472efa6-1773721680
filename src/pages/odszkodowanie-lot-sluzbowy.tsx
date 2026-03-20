import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, Shield, ArrowRight, CheckCircle2, AlertCircle, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function OdskodowanieLotSluzbowy() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Odszkodowanie za lot służbowy – Kto ma prawo i komu przysługują pieniądze?",
        "description": "Czy pracownik ma prawo do odszkodowania za lot służbowy? Kto dostaje pieniądze, gdy bilet kupuje firma? Kompleksowy przewodnik po prawach pasażera w delegacjach.",
        "author": {
          "@type": "Organization",
          "name": "bizneslot.info"
        },
        "publisher": {
          "@type": "Organization",
          "name": "bizneslot.info",
          "logo": {
            "@type": "ImageObject",
            "url": "https://bizneslot.info/og-image.png"
          }
        },
        "datePublished": "2026-01-07",
        "dateModified": "2026-01-08",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://bizneslot.info/odszkodowanie-lot-sluzbowy"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy pracownik ma prawo do odszkodowania za lot służbowy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak. Pracownik podróżujący służbowo ma pełne prawo do odszkodowania za lot, jeśli lot został opóźniony o co najmniej 3 godziny lub został anulowany. Europejskie rozporządzenie UE 261/2004 jasno określa, że uprawnionym do rekompensaty jest pasażer – osoba, która faktycznie odbyła podróż. Nie ma znaczenia, kto zapłacił za bilet."
            }
          },
          {
            "@type": "Question",
            "name": "Kto dostaje pieniądze za odwołany lot firmowy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pieniądze należą się pasażerowi – czyli pracownikowi, który odbywał podróż. Pracownik ma prawo złożyć reklamację we własnym imieniu, otrzymać odszkodowanie na swoje konto i zatrzymać pieniądze dla siebie. Firma nie ma prawa zażądać zwrotu odszkodowania."
            }
          },
          {
            "@type": "Question",
            "name": "Czy muszę poinformować firmę o złożeniu reklamacji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prawnie nie musisz. Odszkodowanie to Twoja sprawa osobista. W praktyce warto jednak być transparentnym, aby uniknąć nieporozumień z działem HR."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie kwoty odszkodowania przysługują w delegacjach?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Wysokość odszkodowania zależy od dystansu lotu: 250 € dla lotów do 1500 km, 400 € dla lotów 1500-3500 km, i 600 € dla lotów powyżej 3500 km. Nie ma znaczenia, czy podróż była służbowa czy prywatna."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "bizneslot.info",
            "item": "https://bizneslot.info/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Odszkodowanie za lot służbowy",
            "item": "https://bizneslot.info/odszkodowanie-lot-sluzbowy"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Odszkodowanie za lot służbowy - przewodnik | BiznesLot.info"
        description="Kompletny przewodnik: komu przysługuje odszkodowanie za lot służbowy? Co mówi prawo UE? Jak rozliczyć z pracodawcą? Wszystko o prawach pasażera w delegacji."
        url="https://bizneslot.info/odszkodowanie-lot-sluzbowy"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 overflow-hidden">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">bizneslot.info</Link>
              <span>/</span>
              <span>Odszkodowanie za lot służbowy</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Odszkodowanie za lot służbowy – Komu przysługują pieniądze?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Kompleksowy przewodnik po prawach pracownika w delegacjach lotniczych. 
              Dowiedz się, kto ma prawo do odszkodowania, gdy lot służbowy zostanie opóźniony lub anulowany.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Key Takeaway Alert */}
            <Alert className="mb-12 border-slate-700 bg-slate-50">
              <Shield className="h-5 w-5 text-slate-700" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                Najważniejsza informacja
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                Odszkodowanie za lot służbowy przysługuje <strong>pasażerowi</strong> – czyli pracownikowi, 
                który podróżował. To Ty masz prawo do rekompensaty, nawet jeśli bilet opłaciła firma. 
                Tak stanowi europejskie rozporządzenie UE 261/2004.
              </AlertDescription>
            </Alert>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-slate-700" />
                Czy pracownik ma prawo do odszkodowania za lot?
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Tak. Pracownik podróżujący służbowo ma pełne prawo do odszkodowania za lot, 
                  jeśli lot został opóźniony o co najmniej 3 godziny lub został anulowany. 
                  To jedno z najbardziej niezrozumiałych zagadnień w świecie podróży służbowych.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  Wielu pracowników i menedżerów błędnie sądzi, że skoro bilet kupuje firma, 
                  to firma ma prawo do pieniędzy. <strong>To nieprawda.</strong>
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Europejskie rozporządzenie UE 261/2004 jasno określa, że uprawnionym do rekompensaty 
                  jest <strong>pasażer</strong> – osoba, która faktycznie odbyła (lub miała odbyć) podróż. 
                  Nie ma znaczenia, kto zapłacił za bilet.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Podstawa prawna: Rozporządzenie UE 261/2004
              </h2>
              <Card className="border-slate-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-slate-700" />
                    Co mówi prawo europejskie?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Rozporządzenie (WE) nr 261/2004 Parlamentu Europejskiego i Rady z dnia 11 lutego 2004 r. 
                    reguluje prawa pasażerów w przypadku:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Odmowy przyjęcia na pokład (overbooking)</span>
                    </li>
                    <li className="text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Anulowania lotów</span>
                    </li>
                    <li className="text-slate-700 flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Dużych opóźnień (3 godziny lub więcej)</span>
                    </li>
                  </ul>
                  <p className="text-slate-700 font-medium">
                    Rozporządzenie definiuje pasażera jako osobę posiadającą ważny bilet i zgłaszającą się 
                    do odprawy. <strong>Nie ma w nim rozróżnienia na bilety prywatne i służbowe.</strong>
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Kto dostaje pieniądze za odwołany lot firmowy?
              </h2>
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  To pytanie, które najczęściej pojawia się w działach HR i księgowości. 
                  Odpowiedź jest prosta: <strong>pieniądze należą się pasażerowi</strong>.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed mb-4">
                  W praktyce oznacza to, że:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Pracownik ma prawo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Złożyć reklamację we własnym imieniu</li>
                      <li>• Otrzymać odszkodowanie na swoje konto</li>
                      <li>• Zatrzymać pieniądze dla siebie</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600" />
                      Firma nie ma prawa
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Zażądać zwrotu odszkodowania</li>
                      <li>• Złożyć reklamacji w imieniu pracownika</li>
                      <li>• Zmusić do oddania pieniędzy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Ważne:</strong> Niektóre firmy mają w regulaminach wewnętrznych zapisy 
                  o zwrocie odszkodowania. Taki zapis może być niezgodny z prawem europejskim 
                  i warto skonsultować go z prawnikiem lub związkami zawodowymi.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Jakie kwoty przysługują w delegacjach?
              </h2>
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Wysokość odszkodowania zależy od dystansu lotu, nie od tego, czy podróż była służbowa czy prywatna:
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">250 €</CardTitle>
                    <CardDescription>Loty do 1500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Np. Warszawa–Londyn, Kraków–Berlin, Gdańsk–Paryż
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">400 €</CardTitle>
                    <CardDescription>Loty 1500–3500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Np. Warszawa–Lizbona, Kraków–Madryt, Gdańsk–Barcelona
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">600 €</CardTitle>
                    <CardDescription>Loty powyżej 3500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Np. Warszawa–Nowy Jork, Kraków–Dubai, loty interkontynentalne
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Praktyczne scenariusze w podróżach służbowych
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Scenariusz 1: Anulowany lot na konferencję</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Lecisz na służbową konferencję do Paryża. 
                      Lot zostaje anulowany z przyczyn leżących po stronie linii lotniczej.
                    </p>
                    <p className="text-slate-700">
                      <strong>Twoje prawa:</strong> Przysługuje Ci odszkodowanie 250 €. 
                      Dodatkowo linia musi zapewnić Ci lot zastępczy lub zwrot kosztów biletu.
                    </p>
                    <p className="text-slate-700">
                      <strong>Rozliczenie z firmą:</strong> Firma pokrywa koszty nowego biletu 
                      (to koszt delegacji). Odszkodowanie należy do Ciebie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Scenariusz 2: Opóźniony powrót z delegacji</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Wracasz z tygodniowej delegacji. 
                      Lot opóźnia się o 5 godzin.
                    </p>
                    <p className="text-slate-700">
                      <strong>Twoje prawa:</strong> Opóźnienie powyżej 3 godzin daje prawo do rekompensaty. 
                      Możesz <a href="https://claimwinger.com/pl/opozniony-lot" className="text-slate-900 underline hover:text-slate-700" target="_blank" rel="noopener noreferrer">sprawdzić należną kwotę</a> w zależności od dystansu lotu.
                    </p>
                    <p className="text-slate-700">
                      <strong>Rozliczenie z firmą:</strong> Przedłużona delegacja (dodatkowy nocleg, posiłki) 
                      to koszty, które firma powinna zwrócić. Odszkodowanie od linii to osobna kwestia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Scenariusz 3: Lot z przesiadką w delegacji</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Lecisz do USA z przesiadką w Londynie. 
                      Opóźnienie pierwszego lotu powoduje, że tracisz połączenie.
                    </p>
                    <p className="text-slate-700">
                      <strong>Twoje prawa:</strong> Jeśli lot był zarezerwowany jako jeden bilet, 
                      przysługuje Ci odszkodowanie za całą trasę (do 600 €).
                    </p>
                    <p className="text-slate-700">
                      <strong>Rozliczenie z firmą:</strong> Dodatkowe koszty (nocleg w Londynie, posiłki) 
                      to część delegacji. Odszkodowanie należy do Ciebie jako pasażera.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Jak postępować krok po kroku?
              </h2>
              
              <div className="space-y-4">
                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 1: Dokumentuj sytuację</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Zachowaj kartę pokładową i potwierdzenie rezerwacji</li>
                      <li>• Zrób zdjęcia tablicy odlotów z widocznym opóźnieniem</li>
                      <li>• Zbierz pisemne potwierdzenia od linii (jeśli dostępne)</li>
                      <li>• Zapisz numer lotu, datę i czas planowanego odlotu</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 2: Poinformuj pracodawcę</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Zgłoś sytuację swojemu przełożonemu</li>
                      <li>• Wyjaśnij, że może dojść do przedłużenia delegacji</li>
                      <li>• Uzgodnij, jak rozliczyć dodatkowe koszty (hotel, posiłki)</li>
                      <li>• Zachowaj wszystkie paragony i faktury</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 3: Sprawdź swoje uprawnienia</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Nie każde opóźnienie czy anulacja daje prawo do odszkodowania. Wyjątkami są 
                      sytuacje nadzwyczajne (ekstremalna pogoda, strajki kontrolerów, zagrożenia bezpieczeństwa).
                    </p>
                    <p className="text-slate-700">
                      Możesz <a href="https://claimwinger.com/pl/odwolany-lot" className="text-slate-900 underline hover:text-slate-700" target="_blank" rel="noopener noreferrer">sprawdzić swoje prawa</a> oraz należną kwotę w oparciu o dane konkretnego lotu.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 4: Złóż reklamację</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Reklamację składasz we własnym imieniu (jako pasażer)</li>
                      <li>• Kierujesz ją do linii lotniczej</li>
                      <li>• Możesz skorzystać z pomocy firm specjalizujących się w odzyskiwaniu odszkodowań</li>
                      <li>• Linia ma 2 miesiące na odpowiedź</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Najczęstsze pytania i wątpliwości
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy muszę poinformować firmę o złożeniu reklamacji?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Prawnie nie musisz. Odszkodowanie to Twoja sprawa osobista. W praktyce warto 
                      jednak być transparentnym, aby uniknąć nieporozumień z działem HR.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Co jeśli regulamin firmowy wymaga zwrotu odszkodowania?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Taki zapis może być niezgodny z prawem europejskim. Rozporządzenie UE 261/2004 
                      ma pierwszeństwo przed regulaminami wewnętrznymi firm. Warto skonsultować 
                      sytuację z prawnikiem prawa pracy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy odszkodowanie jest opodatkowane?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Odszkodowanie od linii lotniczej jest rekompensatą za niedogodności, 
                      nie przychodem ze stosunku pracy. W większości krajów UE nie podlega 
                      opodatkowaniu. Warto jednak potwierdzić to z księgowym lub doradcą podatkowym.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Jak długo mam czas na złożenie reklamacji?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      W Polsce masz 3 lata od daty lotu na złożenie reklamacji. W praktyce im 
                      szybciej to zrobisz, tym łatwiej będzie udowodnić okoliczności zdarzenia.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTA Section */}
            <section className="mb-12">
              <Card className="bg-slate-900 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl">
                    Sprawdź, czy przysługuje Ci rekompensata
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    Jeśli Twój lot służbowy był opóźniony ponad 3 godziny lub został anulowany, 
                    możesz być uprawniony do odszkodowania od 250 do 600 €.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" variant="secondary">
                      <a href="https://claimwinger.com/pl/odwolany-lot" target="_blank" rel="noopener noreferrer">
                        Sprawdź swoje prawa
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Powiązane tematy</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/anulowany-lot-delegacja" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Anulowany lot w delegacji
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Co robić, gdy lot służbowy zostanie odwołany? Praktyczny przewodnik krok po kroku.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/artykuly/dlaczego-stworzylem-claimwinger" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Dlaczego stworzyłem ClaimWinger?
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Historia powstania platformy pomagającej pasażerom odzyskiwać odszkodowania.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <img src="/bizneslotlogotyp.png" alt="BizneLot.info" className="h-6 w-auto" />
                  BizneLot.info
                </h3>
                <p className="text-sm text-slate-600">
                  Portal edukacyjny o prawach pasażerów w podróżach służbowych.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-4">Główne tematy</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="hover:text-white transition-colors">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="hover:text-white transition-colors">
                      Anulowany lot w delegacji
                    </Link>
                  </li>
                  <li>
                    <Link href="/pracodawca-a-odszkodowanie" className="hover:text-white transition-colors">
                      Pracodawca a odszkodowanie
                    </Link>
                  </li>
                  <li>
                    <Link href="/artykuly" className="hover:text-white transition-colors">
                      Artykuły
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-autorze" className="hover:text-white transition-colors">
                      O autorze
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Więcej</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/bilet-firmowy-prawa" className="text-sm text-slate-600 hover:text-slate-900">
                      Bilet firmowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/pracodawca-a-odszkodowanie" className="text-sm text-slate-600 hover:text-slate-900">
                      Pracodawca a odszkodowanie
                    </Link>
                  </li>
                  <li>
                    <Link href="/o-autorze" className="text-sm text-slate-600 hover:text-slate-900">
                      O autorze
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-4">Sprawdź odszkodowanie</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Korzystamy z usług ClaimWinger do weryfikacji uprawnień.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a href="https://claimwinger.com/pl" target="_blank" rel="noopener noreferrer">
                    ClaimWinger.com
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 text-center text-sm text-slate-600">
              <p>© 2026 bizneslot.info. Portal edukacyjny o prawach pasażerów w podróżach służbowych.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
