import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, AlertTriangle, ArrowRight, CheckCircle2, Clock, FileText, Scale, Phone, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AnulowanyLotDelegacja() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Anulowany lot w delegacji – Procedura krok po kroku",
        "description": "Kompleksowy przewodnik dla pracowników: co robić, gdy lot służbowy zostanie odwołany, jak zabezpieczyć swoje prawa i jak rozliczyć dodatkowe koszty z pracodawcą.",
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
          "@id": "https://bizneslot.info/anulowany-lot-delegacja"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Co robić w pierwszej kolejności gdy lot w delegacji zostanie anulowany?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "W pierwszej godzinie: (1) Ustal przyczynę anulacji u linii lotniczej, (2) Zabezpiecz lot zastępczy, (3) Poinformuj pracodawcę emailem i telefonem, (4) Rozpocznij dokumentację - rób zdjęcia tablicy odlotów, zachowaj wszystkie potwierdzenia."
            }
          },
          {
            "@type": "Question",
            "name": "Jakie koszty pokrywa linia lotnicza przy anulowanym locie w delegacji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Linia lotnicza ma obowiązek zapewnić: posiłki i napoje, nocleg w hotelu (jeśli lot zastępczy jest następnego dnia), transport z lotniska do hotelu i z powrotem, oraz dostęp do środków komunikacji."
            }
          },
          {
            "@type": "Question",
            "name": "Czy pracownik ma prawo do odszkodowania za anulowany lot służbowy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak, odszkodowanie od 250 do 600 € przysługuje pasażerowi (pracownikowi), nie firmie. Warunki: lot anulowany z winy linii, powiadomienie krócej niż 14 dni przed odlotem, brak okoliczności nadzwyczajnych."
            }
          },
          {
            "@type": "Question",
            "name": "Jak rozliczyć dodatkowe koszty delegacji z pracodawcą po anulowanym locie?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Uporządkuj pełną dokumentację (faktury, rachunki, potwierdzenia), wypełnij standardowy formularz rozliczenia delegacji zaznaczając dodatkowe dni, dołącz notatkę wyjaśniającą sytuację i wskaż które koszty pokryła linia, a które Ty."
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
            "name": "Strona główna",
            "item": "https://bizneslot.info"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Anulowany lot w delegacji",
            "item": "https://bizneslot.info/anulowany-lot-delegacja"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Anulowany lot w delegacji - co robić? | BiznesLot.info"
        description="Kompleksowy przewodnik: anulowany lot służbowy, Twoje prawa, odszkodowanie, rozliczenie kosztów z pracodawcą. Praktyczne porady dla delegowanych pracowników."
        url="https://bizneslot.info/anulowany-lot-delegacja"
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
              <span>Anulowany lot w delegacji</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Anulowany lot w delegacji – Procedura krok po kroku
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Kompleksowy przewodnik dla pracowników: co robić, gdy lot służbowy zostanie odwołany, 
              jak zabezpieczyć swoje prawa i jak rozliczyć dodatkowe koszty z pracodawcą.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Alert */}
            <Alert className="mb-12 border-red-200 bg-red-50">
              <AlertCircle className="h-5 w-5 text-red-700" />
              <AlertTitle className="text-lg font-bold text-red-900">
                Pilne działania w pierwszej godzinie
              </AlertTitle>
              <AlertDescription className="text-red-800 text-base mt-2">
                Gdy dowiesz się o anulacji lotu w delegacji, w pierwszej kolejności: (1) Skontaktuj się 
                z linią lotniczą, (2) Poinformuj pracodawcę, (3) Zabezpiecz dokumentację. 
                Czas reakcji ma kluczowe znaczenie dla Twoich praw i rozliczeń.
              </AlertDescription>
            </Alert>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Clock className="h-8 w-8 text-slate-700" />
                Pierwsze 60 minut – Co zrobić natychmiast
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                      Ustal przyczynę anulacji
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Podejdź do stanowiska linii lotniczej lub zadzwoń na infolinię. Zapytaj wprost:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Jaka jest oficjalna przyczyna anulacji?</li>
                      <li>• Czy przyczyna jest uznawana za „nadzwyczajną okoliczność"?</li>
                      <li>• Czy otrzymam pisemne potwierdzenie?</li>
                    </ul>
                    <Alert className="border-slate-200 bg-slate-50">
                      <AlertDescription className="text-slate-700 text-sm">
                        <strong>Dlaczego to ważne?</strong> Odszkodowanie nie przysługuje w przypadku 
                        okoliczności nadzwyczajnych (ekstremalna pogoda, strajki kontrolerów, zagrożenia bezpieczeństwa). 
                        Problemy techniczne, niedobór załogi czy overbooking <strong>dają prawo do odszkodowania</strong>.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-orange-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                      Zabezpiecz lot zastępczy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Linia lotnicza ma obowiązek zaproponować Ci:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Najbliższy możliwy lot zastępczy (tej samej lub innej linii)</li>
                      <li>• Zmianę trasy (np. inny port docelowy + transport dalej)</li>
                      <li>• Zwrot pełnej ceny biletu (jeśli rezygnujesz z podróży)</li>
                    </ul>
                    <p className="text-slate-700 font-medium">
                      W delegacji najczęściej wybierzesz lot zastępczy. Upewnij się, że nowy bilet 
                      nie generuje dodatkowych kosztów dla Ciebie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                      Poinformuj pracodawcę
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      Jak najszybciej skontaktuj się ze swoim przełożonym lub osobą koordynującą delegację:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Email + telefon (dla pewności obydwa kanały)</li>
                      <li>• Podaj szczegóły: numer lotu, nowy termin wylotu</li>
                      <li>• Zapytaj o polecenia: czy lecieć dalej? Czy czekać na decyzję?</li>
                      <li>• Zgłoś potencjalne problemy (spóźnienie na spotkanie, nowy nocleg itp.)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Dokumentacja – Co zapisać i zachować
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-slate-700" />
                    Lista niezbędnych dokumentów
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Dokumenty od linii lotniczej:</h4>
                      <ul className="space-y-1 ml-6 text-slate-700">
                        <li>• Pisemne potwierdzenie anulacji z podaniem przyczyny</li>
                        <li>• Nowa karta pokładowa (lot zastępczy)</li>
                        <li>• Vouchery na posiłki/nocleg (jeśli je otrzymałeś)</li>
                        <li>• Wszelkie maile i SMS-y od linii</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Twoje zdjęcia i notatki:</h4>
                      <ul className="space-y-1 ml-6 text-slate-700">
                        <li>• Zdjęcia tablicy odlotów ze statusem "CANCELLED"</li>
                        <li>• Zrzuty ekranu z aplikacji linii/lotniska</li>
                        <li>• Notatka z godziną powiadomienia o anulacji</li>
                        <li>• Rachunki/paragony za dodatkowe wydatki</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Korespondencja z pracodawcą:</h4>
                      <ul className="space-y-1 ml-6 text-slate-700">
                        <li>• Maile informujące o sytuacji</li>
                        <li>• Zgody/polecenia dotyczące dalszego postępowania</li>
                        <li>• Akceptacja wydatków na nocleg/transport</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Wskazówka:</strong> Rób zdjęcia wszystkiego na bieżąco. Po kilku dniach 
                  trudniej jest odtworzyć przebieg zdarzeń. Dokumentacja to podstawa zarówno do rozliczenia 
                  z firmą, jak i do ewentualnej reklamacji u linii lotniczej.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Dodatkowe koszty – Co przysługuje w delegacji
              </h2>
              
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Anulacja lotu w delegacji często wiąże się z nieprzewidzianymi wydatkami. 
                  Musisz rozróżnić dwa źródła rekompensaty:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Od linii lotniczej</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3 font-medium">
                      Linia ma obowiązek zapewnić:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Posiłki i napoje (w zależności od czasu oczekiwania)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Nocleg w hotelu (jeśli lot zastępczy jest następnego dnia)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Transport z lotniska do hotelu i z powrotem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Dostęp do środków komunikacji (telefon, email)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Od pracodawcy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3 font-medium">
                      Firma pokrywa koszty delegacji:
                    </p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Przedłużony nocleg (jeśli linia nie zapewniła)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Dodatkowe diety/ryczałty</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Transport lokalny (taxi, uber)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <span>Dodatkowe koszty telekomunikacji (jeśli potrzebne)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-slate-700 bg-slate-50">
                <AlertDescription className="text-slate-700">
                  <strong>Ważna zasada:</strong> Zawsze najpierw żądaj świadczeń od linii lotniczej. 
                  Jeśli linia nie wypełnia obowiązków, dokumentuj to i pokrywaj koszty sam. 
                  Następnie możesz rozliczyć się z pracodawcą i równolegle domagać się zwrotu od linii.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Rozliczenie z pracodawcą – Procedura krok po kroku
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Krok 1: Uporządkuj dokumentację</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Przygotuj kompletną dokumentację z wyraźnym podziałem na kategorie:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Potwierdzenie anulacji lotu</li>
                      <li>• Nowa karta pokładowa/bilet</li>
                      <li>• Wszystkie faktury/rachunki z datami i kwotami</li>
                      <li>• Potwierdzenia płatności</li>
                      <li>• Korespondencja z linią i przełożonym</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Krok 2: Wypełnij rozliczenie delegacji</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      W standardowym formularzu rozliczenia delegacji:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Zaznacz dodatkowe dni spowodowane anulacją</li>
                      <li>• Dołącz osobną notatkę wyjaśniającą sytuację</li>
                      <li>• Podkreśl, które koszty pokryła linia, a które Ty</li>
                      <li>• Wskaż, które wydatki były konieczne (nocleg, posiłki)</li>
                      <li>• Załącz pełną dokumentację</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Krok 3: Komunikuj się z HR/księgowością</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Bądź proaktywny w komunikacji:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Zgłoś sytuację z wyprzedzeniem (nie czekaj do końca miesiąca)</li>
                      <li>• Zapytaj o procedurę w takich przypadkach</li>
                      <li>• Wyjaśnij, dlaczego niektóre koszty są wyższe niż zwykle</li>
                      <li>• Zachowaj profesjonalny ton – to nie Twoja wina</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Krok 4: Dokumentuj dalsze kroki</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Zachowaj potwierdzenia zaakceptowania rozliczenia, przelewów zwrotu kosztów, 
                      oraz wszelkiej korespondencji. Może to być przydatne, jeśli później będziesz 
                      dochodzić odszkodowania od linii lotniczej.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Odszkodowanie dla Ciebie – Kolejny etap
              </h2>
              
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Rozliczenie delegacji z pracodawcą to jedno. Rekompensata od linii lotniczej to drugie, 
                  całkowicie niezależne prawo.
                </p>
              </div>

              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Kiedy przysługuje odszkodowanie?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-slate-700">
                    Możesz ubiegać się o odszkodowanie od 250 do 600 € (w zależności od dystansu), jeśli:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Lot został anulowany z winy linii (problemy techniczne, brak załogi, overbooking)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Zostałeś poinformowany o anulacji krócej niż 14 dni przed odlotem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Nie było to spowodowane okolicznościami nadzwyczajnymi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Lot był w Unii Europejskiej lub wykonywany przez unijnego przewoźnika</span>
                    </li>
                  </ul>
                  <p className="text-slate-700 mt-4">
                    <strong>Ważne:</strong> To odszkodowanie przysługuje Tobie jako pasażerowi, 
                    nie firmie. Więcej szczegółów znajdziesz w artykule: 
                    <Link href="/odszkodowanie-lot-sluzbowy" className="text-slate-900 underline hover:text-slate-700 ml-1">
                      Odszkodowanie za lot służbowy
                    </Link>.
                  </p>
                </CardContent>
              </Card>

              <Alert className="border-slate-700 bg-slate-50">
                <Phone className="h-5 w-5 text-slate-700" />
                <AlertDescription className="text-slate-700">
                  <strong>Praktyczna wskazówka:</strong> Możesz <a href="https://claimwinger.com/pl/odwolany-lot" className="text-slate-900 underline hover:text-slate-700" target="_blank" rel="noopener noreferrer">sprawdzić swoje prawa</a> i złożyć 
                  reklamację niezależnie od rozliczeń z pracodawcą. To dwa osobne procesy.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Najczęstsze błędy i pułapki
              </h2>
              
              <div className="space-y-6">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Błąd 1: Akceptacja voucherów bez analizy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">
                      Linia może zaoferować Ci voucher na przyszłe loty zamiast zwrotu pieniędzy. 
                      <strong> Masz prawo odmówić i żądać zwrotu gotówki.</strong> Vouchery często 
                      mają ograniczenia (terminy ważności, opłaty za rezerwację).
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Błąd 2: Brak dokumentacji wydatków
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">
                      Bez faktur i paragonów trudno będzie rozliczyć dodatkowe koszty z pracodawcą. 
                      Zachowuj wszystko, nawet małe kwoty. Suma może być znacząca.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Błąd 3: Zgoda na lot znacznie późniejszy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">
                      Jeśli linia proponuje lot o 12-24 godziny później, a jest dostępne wcześniejsze 
                      połączenie (nawet u konkurencji), masz prawo żądać rebookingu na ten wcześniejszy lot. 
                      Nie musisz akceptować pierwszej propozycji.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Błąd 4: Podpisanie dokumentu o zrzeczeniu się praw
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-800">
                      Linie czasem proszą o podpisanie dokumentu, że otrzymałeś pomoc i nie masz 
                      dalszych roszczeń. <strong>Nie podpisuj takiego dokumentu</strong> bez dokładnego 
                      przeczytania. Możesz nieświadomie zrzec się prawa do odszkodowania.
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
                    Sprawdź swoje prawa po anulowanym locie
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    Jeśli Twój lot służbowy został odwołany, możesz mieć prawo do odszkodowania 
                    od 250 do 600 €. To Twoje pieniądze, niezależnie od rozliczeń z pracodawcą.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" variant="secondary">
                    <a href="https://claimwinger.com/pl/odwolany-lot" target="_blank" rel="noopener noreferrer">
                      Sprawdź należną rekompensatę
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Related Articles */}
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Powiązane tematy</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/odszkodowanie-lot-sluzbowy" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Odszkodowanie za lot służbowy
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Czy pracownik ma prawo do odszkodowania? Komu przysługują pieniądze?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/opozniony-lot-delegacja" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Opóźniony lot w delegacji
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Kiedy opóźnienie daje prawo do odszkodowania? Jak rozliczyć przedłużoną delegację?
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
                <h3 className="font-semibold text-slate-900 mb-4">Tematy</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/odszkodowanie-lot-sluzbowy" className="text-sm text-slate-600 hover:text-slate-900">
                      Odszkodowanie za lot służbowy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anulowany-lot-delegacja" className="text-sm text-slate-900 font-medium">
                      Anulowany lot
                    </Link>
                  </li>
                  <li>
                    <Link href="/opozniony-lot-delegacja" className="text-sm text-slate-600 hover:text-slate-900">
                      Opóźniony lot
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
                    <Link href="/artykuly" className="text-sm text-slate-600 hover:text-slate-900">
                      Artykuły
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
