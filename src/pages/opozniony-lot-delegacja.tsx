import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, Clock, ArrowRight, CheckCircle2, AlertCircle, FileText, Scale, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function OpoznionyLotDelegacja() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Opóźniony lot w delegacji – Twoje prawa i rozliczenia",
        "description": "Kompleksowy przewodnik dla pracowników podróżujących służbowo: kiedy opóźnienie daje prawo do odszkodowania, jak rozliczyć przedłużoną delegację i co zrobić z kosztami dodatkowych godzin.",
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
          "@id": "https://bizneslot.info/opozniony-lot-delegacja"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy muszę oddać odszkodowanie pracodawcy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie. Odszkodowanie od linii lotniczej przysługuje pasażerowi – Tobie. To Twoje osobiste prawo wynikające z rozporządzenia UE 261/2004, niezależnie od faktu, kto kupił bilet. Rozliczenie delegacji z pracodawcą to osobna kwestia."
            }
          },
          {
            "@type": "Question",
            "name": "Co jeśli pracodawca wymaga zwrotu rekompensaty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Regulamin firmowy wymagający zwrotu odszkodowania może być niezgodny z prawem europejskim. Rozporządzenie UE ma pierwszeństwo przed wewnętrznymi politykami firm."
            }
          },
          {
            "@type": "Question",
            "name": "Jak długo mam czas na złożenie reklamacji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "W Polsce termin przedawnienia wynosi 3 lata od daty lotu. W praktyce im szybciej złożysz reklamację, tym łatwiej będzie udokumentować okoliczności opóźnienia."
            }
          },
          {
            "@type": "Question",
            "name": "Czy przedłużona delegacja wpływa na diety i ryczałty?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tak. Jeśli delegacja przedłuża się o pełny dzień (lub część wymagającą noclegu), przysługuje Ci dodatkowa dieta. Rozlicz to standardową procedurą, zaznaczając w formularzu przyczynę przedłużenia."
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
            "name": "Opóźniony lot w delegacji",
            "item": "https://bizneslot.info/opozniony-lot-delegacja"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Opóźniony lot w delegacji – Kiedy przysługuje odszkodowanie?"
        description="Opóźniony lot w podróży służbowej – Kiedy masz prawo do odszkodowania? Jak rozliczyć przedłużoną delegację z pracodawcą? Praktyczny przewodnik dla pracowników."
        url="https://bizneslot.info/opozniony-lot-delegacja"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-slate-900 text-white">
          <div className="container mx-auto max-w-4xl">
            <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">bizneslot.info</Link>
              <span>/</span>
              <span>Opóźniony lot w delegacji</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Opóźniony lot w delegacji – Twoje prawa i rozliczenia
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Kompleksowy przewodnik dla pracowników podróżujących służbowo: kiedy opóźnienie daje prawo 
              do odszkodowania, jak rozliczyć przedłużoną delegację i co zrobić z kosztami dodatkowych godzin.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Key Takeaway */}
            <Alert className="mb-12 border-slate-700 bg-slate-50">
              <Clock className="h-5 w-5 text-slate-700" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                Podstawowa zasada dla podróży służbowych
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                Opóźnienie lotu o <strong>3 godziny lub więcej</strong> daje prawo do odszkodowania 
                od linii lotniczej. To prawo przysługuje <strong>pasażerowi</strong> (czyli Tobie), 
                niezależnie od tego, kto kupił bilet. Przedłużona delegacja to osobna kwestia do rozliczenia z pracodawcą.
              </AlertDescription>
            </Alert>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Kiedy opóźniony lot w delegacji daje prawo do rekompensaty?
              </h2>
              
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  W kontekście podróży służbowych opóźnienie lotu to sytuacja, która generuje dwa niezależne 
                  problemy: prawo pasażera do odszkodowania od linii oraz kwestię rozliczenia przedłużonej 
                  delegacji z pracodawcą.
                </p>
              </div>

              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Próg 3 godzin – Kluczowa granica prawna</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Rozporządzenie UE 261/2004 jasno określa, że pasażer ma prawo do rekompensaty, 
                    gdy opóźnienie przybycia do miejsca docelowego wynosi <strong>3 godziny lub więcej</strong>.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Przykład w delegacji:</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li>• Planowany przylot do Frankfurtu: 14:00</li>
                      <li>• Rzeczywisty przylot: 17:30</li>
                      <li>• Opóźnienie: 3,5 godziny = <strong>prawo do odszkodowania</strong></li>
                    </ul>
                  </div>
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertDescription className="text-blue-900">
                      <strong>Ważne:</strong> Liczy się czas przybycia do miejsca docelowego, nie czas odlotu. 
                      Jeśli lot wystartował z opóźnieniem, ale pilot nadrobił czas w powietrzu i dotarliście 
                      z opóźnieniem poniżej 3 godzin – odszkodowanie nie przysługuje.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Wyjątki – Okoliczności nadzwyczajne</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">
                    Odszkodowanie nie przysługuje, jeśli opóźnienie było spowodowane okolicznościami 
                    nadzwyczajnymi, których linia nie mogła uniknąć:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li>• Ekstremalne warunki pogodowe (burze, silne wiatry, obfite opady śniegu)</li>
                    <li>• Strajki kontrolerów ruchu lotniczego lub personelu lotniska</li>
                    <li>• Zagrożenia bezpieczeństwa (alarmy bombowe, incydenty polityczne)</li>
                    <li>• Ograniczenia w przestrzeni powietrznej</li>
                  </ul>
                  <p className="text-slate-700 mt-3 font-medium">
                    Problemy techniczne samolotu, brak załogi czy problemy operacyjne linii 
                    <strong> NIE są okolicznościami nadzwyczajnymi</strong> i dają prawo do rekompensaty.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Wysokość odszkodowania w podróżach służbowych
              </h2>
              
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Kwota rekompensaty zależy wyłącznie od dystansu lotu, nie od tego, czy podróż była 
                  służbowa czy prywatna, ani od ceny biletu.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">250 €</CardTitle>
                    <CardDescription>Loty do 1500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">
                      Większość europejskich połączeń w delegacjach
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Warszawa–Londyn</li>
                      <li>• Kraków–Berlin</li>
                      <li>• Gdańsk–Amsterdam</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">400 €</CardTitle>
                    <CardDescription>Loty 1500–3500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">
                      Dłuższe europejskie trasy oraz bliski wschód
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Warszawa–Lizbona</li>
                      <li>• Kraków–Tel Awiw</li>
                      <li>• Gdańsk–Dubaj (EU część)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold">600 €</CardTitle>
                    <CardDescription>Loty powyżej 3500 km</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600 mb-3">
                      Loty interkontynentalne w biznesie
                    </p>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Warszawa–Nowy Jork</li>
                      <li>• Kraków–Singapur</li>
                      <li>• Gdańsk–Los Angeles</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-slate-700 bg-slate-50">
                <CheckCircle2 className="h-5 w-5 text-slate-700" />
                <AlertDescription className="text-slate-700">
                  <strong>Dla pracowników:</strong> Te kwoty przysługują Tobie jako pasażerowi, 
                  nie pracodawcy. Fakt, że firma opłaciła bilet, nie zmienia Twoich praw osobistych. 
                  Więcej w artykule: <Link href="/odszkodowanie-lot-sluzbowy" className="text-slate-900 underline hover:text-slate-700">Odszkodowanie za lot służbowy</Link>.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Praktyczne scenariusze opóźnień w delegacjach
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Scenariusz 1: Opóźniony start delegacji</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Lecisz na trzydniową konferencję do Monachium. 
                      Lot opóźnia się o 4 godziny. Tracisz pierwsze spotkanie i wieczorną kolację networkingową.
                    </p>
                    <p className="text-slate-700">
                      <strong>Twoje prawa od linii:</strong> Odszkodowanie 250 € za opóźnienie. 
                      Linia musi zapewnić posiłki i napoje podczas oczekiwania.
                    </p>
                    <p className="text-slate-700">
                      <strong>Rozliczenie z firmą:</strong> Delegacja przedłuża się, ale to nie generuje 
                      dodatkowych kosztów noclegowych. Informujesz przełożonego o sytuacji i kontynuujesz 
                      plan według nowego harmonogramu.
                    </p>
                    <p className="text-slate-700 font-medium">
                      <strong>Wniosek:</strong> Odszkodowanie od linii to Twoja sprawa osobista. 
                      Rozliczenie delegacji pozostaje bez zmian.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Scenariusz 2: Opóźniony powrót z delegacji</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Wracasz po tygodniu w Paryżu. Lot opóźnia się o 5 godzin. 
                      Musisz zarezerwować dodatkowy nocleg i przedłużyć wynajem samochodu.
                    </p>
                    <p className="text-slate-700">
                      <strong>Twoje prawa od linii:</strong> Odszkodowanie 250 €. Linia powinna pokryć 
                      nocleg i transport, jeśli następny lot jest następnego dnia.
                    </p>
                    <p className="text-slate-700">
                      <strong>Rozliczenie z firmą:</strong> Przedłużona delegacja generuje rzeczywiste 
                      dodatkowe koszty:
                    </p>
                    <ul className="ml-6 space-y-1 text-slate-700">
                      <li>• Dodatkowy nocleg w hotelu</li>
                      <li>• Przedłużenie wynajmu samochodu</li>
                      <li>• Dodatkowa dieta za dzień</li>
                      <li>• Ewentualny parking na lotnisku w Polsce</li>
                    </ul>
                    <p className="text-slate-700 font-medium">
                      <strong>Wniosek:</strong> Dokumentuj wszystkie wydatki i rozlicz je standardową 
                      procedurą delegacyjną. Odszkodowanie osobiste od linii to osobna sprawa.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-xl">Scenariusz 3: Opóźniony lot z przesiadką</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Lecisz do USA (Nowy Jork) z przesiadką w Amsterdamie. 
                      Pierwszy lot opóźnia się, tracisz połączenie. Następny dostępny lot jest dopiero 
                      następnego dnia.
                    </p>
                    <p className="text-slate-700">
                      <strong>Twoje prawa od linii:</strong> Odszkodowanie do 600 € (lot interkontyntentalny). 
                      Linia musi zapewnić nocleg w Amsterdamie, transport i posiłki.
                    </p>
                    <p className="text-slate-700">
                      <strong>Rozliczenie z firmą:</strong> Sytuacja złożona – tracisz dzień roboczy w USA. 
                      Delegacja przedłuża się lub musisz zrezygnować z części planu.
                    </p>
                    <p className="text-slate-700 font-medium">
                      <strong>Wniosek:</strong> Skontaktuj się natychmiast z przełożonym. Jeśli linia 
                      nie pokrywa wszystkich kosztów, dokumentuj i rozliczaj z pracodawcą. 
                      Możesz <a href="https://claimwinger.com/pl/opozniony-lot" className="text-slate-900 underline hover:text-slate-700" target="_blank" rel="noopener noreferrer">sprawdzić należną rekompensatę</a> po powrocie.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Rozliczenie przedłużonej delegacji – Procedura
              </h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 1: Natychmiastowa komunikacja</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      W momencie, gdy dowiesz się o opóźnieniu przekraczającym 2 godziny:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Wyślij email do przełożonego z informacją o sytuacji</li>
                      <li>• Podaj numer lotu, planowany i rzeczywisty czas przylotu</li>
                      <li>• Zapytaj o dalsze instrukcje (czy kontynuować plan, czy zmienić)</li>
                      <li>• Zgłoś potencjalne konflikty (przegapione spotkania, rezerwacje)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 2: Dokumentuj wszystko</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Zbieraj dowody na bieżąco:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Zdjęcia tablicy odlotów ze statusem opóźnienia</li>
                      <li>• Komunikaty od linii (SMS, email, ogłoszenia)</li>
                      <li>• Karta pokładowa z faktycznym czasem odlotu</li>
                      <li>• Rachunki/faktury za wszystkie dodatkowe wydatki</li>
                      <li>• Potwierdzenia płatności</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 3: Identyfikuj dodatkowe koszty</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      Koszty, które możesz rozliczyć z pracodawcą:
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <h4 className="font-semibold text-slate-900 mb-2">Nocleg i zakwaterowanie:</h4>
                      <ul className="space-y-1 ml-6 text-slate-700 text-sm">
                        <li>• Dodatkowa noc w hotelu (jeśli linia nie pokryła)</li>
                        <li>• Przedłużenie obecnej rezerwacji</li>
                        <li>• Nocleg awaryjny w pobliżu lotniska</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-3">
                      <h4 className="font-semibold text-slate-900 mb-2">Transport i komunikacja:</h4>
                      <ul className="space-y-1 ml-6 text-slate-700 text-sm">
                        <li>• Taxi/Uber do/z lotniska</li>
                        <li>• Przedłużenie wynajmu samochodu</li>
                        <li>• Dodatkowy parking na lotnisku</li>
                        <li>• Międzynarodowe rozmowy służbowe</li>
                      </ul>
                    </div>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-3">
                      <h4 className="font-semibold text-slate-900 mb-2">Wyżywienie i diety:</h4>
                      <ul className="space-y-1 ml-6 text-slate-700 text-sm">
                        <li>• Posiłki (jeśli linia nie zapewniła voucherów)</li>
                        <li>• Dodatkowa dieta za przedłużony dzień delegacji</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg">Krok 4: Wypełnij rozliczenie delegacji</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 mb-3">
                      W standardowym formularzu rozliczeniowym:
                    </p>
                    <ul className="space-y-2 ml-6 text-slate-700">
                      <li>• Zaznacz rzeczywiste daty i godziny wyjazdu/powrotu</li>
                      <li>• Dołącz osobną notatkę opisującą sytuację</li>
                      <li>• Wyszczególnij, które koszty pokryła linia lotnicza</li>
                      <li>• Załącz kompletną dokumentację (faktury, potwierdzenia)</li>
                      <li>• Podkreśl, że opóźnienie było poza Twoją kontrolą</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Co z niewykorzystanym noclegiem?
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Problem: Opłacony nocleg, którego nie użyłeś</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    <strong>Sytuacja:</strong> Firma zarezerwowała Ci hotel na pierwsze dwie noce delegacji. 
                    Lot opóźnił się o 8 godzin i dotarłeś dopiero rano drugiego dnia. Pierwsza noc była 
                    opłacona, ale jej nie wykorzystałeś.
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-3">Możliwe rozwiązania:</h4>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Anuluj rezerwację:</strong> Jeśli polityka hotelu pozwala na anulację 
                          (zwykle do 24h przed przyjazdem), natychmiast anuluj. Informuj dział travel/HR.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Zmień rezerwację:</strong> Niektóre hotele pozwalają przesunąć nocleg 
                          na inny termin. Skontaktuj się z recepcją i wyjaśnij sytuację.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Utracony nocleg:</strong> Jeśli nie można anulować/zmienić, dokumentuj 
                          to jako stratę spowodowaną opóźnieniem. W rozliczeniu wyjaśnij sytuację. 
                          Firma powinna to zaakceptować jako koszt niezawiniony.
                        </div>
                      </li>
                    </ul>
                  </div>
                  <Alert className="border-blue-200 bg-blue-50">
                    <AlertDescription className="text-blue-900">
                      <strong>Wskazówka:</strong> W przyszłości warto rezerwować hotele z elastyczną 
                      polityką anulacji, zwłaszcza w delegacjach z ryzykiem opóźnień (zimą, 
                      w sezonie urlopowym, na trasach z przesiadkami).
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Najczęstsze pytania – Opóźnienia w delegacjach
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy muszę oddać odszkodowanie pracodawcy?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Nie. Odszkodowanie od linii lotniczej przysługuje pasażerowi – Tobie. 
                      To Twoje osobiste prawo wynikające z rozporządzenia UE 261/2004, niezależnie 
                      od faktu, kto kupił bilet. Rozliczenie delegacji z pracodawcą to osobna kwestia.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Co jeśli pracodawca wymaga zwrotu rekompensaty?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Regulamin firmowy wymagający zwrotu odszkodowania może być niezgodny z prawem 
                      europejskim. Rozporządzenie UE ma pierwszeństwo przed wewnętrznymi politykami firm. 
                      Więcej: <Link href="/pracodawca-a-odszkodowanie" className="text-slate-900 underline hover:text-slate-700">Pracodawca a odszkodowanie lotnicze</Link>.
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
                      W Polsce termin przedawnienia wynosi 3 lata od daty lotu. W praktyce im szybciej 
                      złożysz reklamację, tym łatwiej będzie udokumentować okoliczności opóźnienia. 
                      Możesz <a href="https://claimwinger.com/pl/opozniony-lot" className="text-slate-900 underline hover:text-slate-700" target="_blank" rel="noopener noreferrer">sprawdzić swoje uprawnienia</a> już teraz.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy przedłużona delegacja wpływa na diet i ryczałty?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Tak. Jeśli delegacja przedłuża się o pełny dzień (lub część wymagającą noclegu), 
                      przysługuje Ci dodatkowa dieta. Rozlicz to standardową procedurą, zaznaczając 
                      w formularzu przyczynę przedłużenia. Pracodawca powinien pokryć te koszty jako 
                      nieplanowane wydatki służbowe.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Co jeśli linia oferuje voucher zamiast pieniędzy?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Masz prawo odmówić vouchera i żądać rekompensaty pieniężnej. Vouchery często mają 
                      ograniczenia (terminy ważności, opłaty za rezerwację, wyłączenia tras). 
                      W podróżach służbowych pieniądze są bardziej uniwersalne niż voucher na prywatne loty.
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
                    Twój lot w delegacji był opóźniony?
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    Jeśli opóźnienie wyniosło 3 godziny lub więcej, możesz być uprawniony do rekompensaty 
                    od 250 do 600 €. Sprawdź swoje prawa – to niezależne od rozliczeń służbowych.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" variant="secondary">
                    <a href="https://claimwinger.com/pl/opozniony-lot" target="_blank" rel="noopener noreferrer">
                      Sprawdź należną kwotę
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
                <Link href="/anulowany-lot-delegacja" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Anulowany lot w delegacji
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Co robić krok po kroku, gdy lot służbowy zostanie odwołany? Procedury i rozliczenia.
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>

                <Link href="/odszkodowanie-lot-sluzbowy" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Odszkodowanie za lot służbowy
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Podstawy prawne: komu przysługuje rekompensata i dlaczego to Twoje prawo?
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
                    <Link href="/anulowany-lot-delegacja" className="text-sm text-slate-600 hover:text-slate-900">
                      Anulowany lot
                    </Link>
                  </li>
                  <li>
                    <Link href="/opozniony-lot-delegacja" className="text-sm text-slate-900 font-medium">
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
