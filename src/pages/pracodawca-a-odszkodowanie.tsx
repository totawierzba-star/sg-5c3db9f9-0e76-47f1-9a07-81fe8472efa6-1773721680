import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, Building2, ArrowRight, CheckCircle2, AlertCircle, FileText, Scale, Users, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PracodawcaAOdszkodowanie() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Pracodawca a odszkodowanie lotnicze – Czy firma może żądać zwrotu?",
        "description": "Czy pracodawca ma prawo żądać zwrotu odszkodowania za lot służbowy? Analiza prawna relacji pracownik-pracodawca w kontekście rozporządzenia UE 261/2004.",
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
        "dateModified": "2026-01-07",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://bizneslot.info/pracodawca-a-odszkodowanie"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy pracodawca może żądać zwrotu odszkodowania lotniczego?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie. Rozporządzenie UE 261/2004 ma bezpośrednie zastosowanie i nadrzędny charakter wobec regulaminów wewnętrznych firm oraz umów o pracę. Pracodawca nie może skutecznie odebrać pracownikowi praw wynikających z prawa europejskiego. Odszkodowanie należy się pasażerowi, nie firmie."
            }
          },
          {
            "@type": "Question",
            "name": "Co jeśli firma potrąciła mi odszkodowanie z wynagrodzenia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To bezprawne potrącenie. Możesz żądać zwrotu tej kwoty w trybie natychmiastowym. Jeśli firma odmawia, skontaktuj się z prawnikiem i rozważ zgłoszenie do Państwowej Inspekcji Pracy oraz sądu pracy."
            }
          },
          {
            "@type": "Question",
            "name": "Czy regulamin firmowy żądający zwrotu odszkodowania jest ważny?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie. Taki zapis jest sprzeczny z nadrzędnym prawem UE i jako taki nie wywołuje skutków prawnych. Jest nieważny z mocy samego prawa. Nawet jeśli podpisałeś regulamin z takim zapisem, nie jesteś prawnie zobowiązany do zwrotu."
            }
          },
          {
            "@type": "Question",
            "name": "Czy muszę informować firmę o złożonej reklamacji lotniczej?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prawnie nie. To Twoja osobista sprawa między Tobą a linią lotniczą. W praktyce transparentność może zapobiec późniejszym nieporozumieniom. Możesz poinformować HR o fakcie złożenia reklamacji bez podawania szczegółów."
            }
          },
          {
            "@type": "Question",
            "name": "Co może, a czego nie może pracodawca w kwestii odszkodowań?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pracodawca MOŻE: prosić o informację o reklamacji, zapytać o okoliczności opóźnienia, rozliczyć dodatkowe koszty delegacji. Pracodawca NIE MOŻE: zażądać zwrotu odszkodowania, zabronić składania reklamacji, potrącić kwoty z wynagrodzenia, zastosować sankcji służbowych za niezwrócenie pieniędzy."
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
            "item": "https://bizneslot.info"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Pracodawca a odszkodowanie",
            "item": "https://bizneslot.info/pracodawca-a-odszkodowanie"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Pracodawca a odszkodowanie lotnicze | BiznesLot"
        description="Czy pracodawca ma prawo żądać zwrotu odszkodowania za lot służbowy? Analiza prawna relacji pracownik-pracodawca w kontekście rozporządzenia UE 261/2004."
        url="https://bizneslot.info/pracodawca-a-odszkodowanie"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-white py-20 overflow-hidden">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-slate-900 text-white -mt-20">
          <div className="container mx-auto max-w-4xl pt-20">
            <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
              <Link href="/" className="hover:text-white transition-colors">bizneslot.info</Link>
              <span>/</span>
              <span>Pracodawca a odszkodowanie</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Pracodawca a odszkodowanie lotnicze – Twoje prawa jako pracownika
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Czy musisz oddać firmie pieniądze za odszkodowanie od linii lotniczej? Co mówi prawo pracy 
              i europejskie? Szczegółowa analiza prawna dla pracowników podręcznych służbowo.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            
            {/* Key Takeaway */}
            <Alert className="mb-12 border-slate-700 bg-slate-50">
              <Scale className="h-5 w-5 text-slate-700" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                Fundamentalna zasada prawna
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                Rozporządzenie UE 261/2004 ma <strong>bezpośrednie zastosowanie</strong> w polskim prawie 
                i nadrzędny charakter wobec regulaminów wewnętrznych firm oraz umów o pracę. 
                Pracodawca <strong>nie może skutecznie odebrać</strong> pracownikowi praw wynikających 
                z prawa europejskiego.
              </AlertDescription>
            </Alert>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Hierarchia źródeł prawa – Dlaczego UE wygrywa z regulaminem?
              </h2>
              
              <div className="prose prose-slate max-w-none mb-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  W polskim systemie prawnym obowiązuje jasna hierarchia aktów prawnych. 
                  Rozumienie tej hierarchii jest kluczowe dla zrozumienia, dlaczego żadna firma 
                  nie może skutecznie zablokować pracownikowi prawa do odszkodowania.
                </p>
              </div>

              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Piramida źródeł prawa w Polsce</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-l-blue-600 pl-4 bg-blue-50 py-3">
                    <h4 className="font-bold text-blue-900 mb-1">1. Konstytucja RP</h4>
                    <p className="text-sm text-blue-800">Najwyższy akt prawny w Polsce</p>
                  </div>
                  
                  <div className="border-l-4 border-l-blue-500 pl-4 bg-blue-50 py-3">
                    <h4 className="font-bold text-blue-900 mb-1">2. Prawo Unii Europejskiej</h4>
                    <p className="text-sm text-blue-800">
                      <strong>Rozporządzenie UE 261/2004</strong> – bezpośrednie zastosowanie, 
                      nadrzędne wobec prawa krajowego
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-400 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">3. Ustawy polskie</h4>
                    <p className="text-sm text-slate-600">Kodeks pracy, prawo lotnicze krajowe</p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-300 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">4. Rozporządzenia wykonawcze</h4>
                    <p className="text-sm text-slate-600">Akty wykonawcze do ustaw</p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-200 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">5. Umowa o pracę</h4>
                    <p className="text-sm text-slate-600">Indywidualne warunki zatrudnienia</p>
                  </div>
                  
                  <div className="border-l-4 border-l-slate-100 pl-4 bg-slate-50 py-3">
                    <h4 className="font-bold text-slate-700 mb-1">6. Regulamin pracy</h4>
                    <p className="text-sm text-slate-600">Wewnętrzne zasady obowiązujące w firmie</p>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-blue-200 bg-blue-50">
                <CheckCircle2 className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Kluczowy wniosek:</strong> Rozporządzenie UE 261/2004 stoi wyżej w hierarchii 
                  niż umowa o pracę i regulamin firmy. Postanowienia firmowe sprzeczne 
                  z prawem UE są <strong>nieważne i niewykonalne</strong>.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Co to znaczy „bezpośrednie zastosowanie" rozporządzenia UE?
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Specyfika rozporządzeń unijnych</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Rozporządzenia UE (w odróżnieniu od dyrektyw) mają tzw. <strong>bezpośrednie zastosowanie</strong> 
                    (ang. <em>direct applicability</em>). Oznacza to, że:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Obowiązują automatycznie we wszystkich państwach członkowskich UE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Nie wymagają implementacji do prawa krajowego</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Nadrzędne wobec sprzecznych przepisów krajowych</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Każdy obywatel może się na nie powoływać bezpośrednio</span>
                    </li>
                  </ul>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-slate-900 mb-2">W praktyce oznacza to:</h4>
                    <p className="text-slate-700">
                      Jako pracownik lecący służbowo możesz powoływać się bezpośrednio na przepisy 
                      Rozporządzenia UE 261/2004 wobec linii lotniczej <strong>oraz wobec pracodawcy</strong>. 
                      Nie musisz szukać podstawy w polskiej ustawie czy umowie o pracy.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Regulamin firmowy żądający zwrotu odszkodowania – Czy jest ważny?
              </h2>
              
              <Card className="border-red-200 bg-red-50 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-900">Typowy zapis w regulaminie</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="bg-white border border-red-200 rounded-lg p-4">
                    <p className="text-slate-900 italic">
                      „Pracownik zobowiązuje się do przekazania Pracodawcy wszelkich kwot otrzymanych 
                      od przewoźnika tytułem odszkodowania za lot opłacony przez Pracodawcę."
                    </p>
                  </div>
                  <Alert className="border-red-300 bg-red-100">
                    <AlertCircle className="h-5 w-5 text-red-700" />
                    <AlertDescription className="text-red-900">
                      <strong>Ocena prawna:</strong> Taki zapis jest sprzeczny z nadrzędnym prawem UE 
                      i jako taki <strong>nie wywołuje skutków prawnych</strong>. Jest nieważny z mocy samego prawa.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Dlaczego taki zapis jest nieważny?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-l-slate-700 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-2">1. Sprzeczność z prawem UE</h4>
                      <p className="text-slate-700">
                        Rozporządzenie 261/2004 przyznaje prawo do odszkodowania <strong>pasażerowi</strong>. 
                        Próba odebrania tego prawa przez regulamin firmowy jest niedopuszczalna.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-slate-700 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-2">2. Cel odszkodowania</h4>
                      <p className="text-slate-700">
                        Rekompensata ma charakter osobisty – ma zrekompensować <strong>stratę czasu 
                        i niedogodności</strong> osoby podróżującej. Pracodawca tych niedogodności nie poniósł.
                      </p>
                    </div>

                    <div className="border-l-4 border-l-slate-700 pl-4">
                      <h4 className="font-semibold text-slate-900 mb-2">3. Zasada pierwszeństwa prawa UE</h4>
                      <p className="text-slate-700">
                        Zgodnie z orzecznictwem Trybunału Sprawiedliwości UE, przepisy krajowe (a tym 
                        bardziej regulaminy wewnętrzne) nie mogą ograniczać skuteczności prawa unijnego.
                      </p>
                    </div>
                  </div>

                  <Alert className="border-slate-700 bg-slate-50 mt-4">
                    <Shield className="h-5 w-5 text-slate-700" />
                    <AlertDescription className="text-slate-700">
                      <strong>Dla pracowników:</strong> Nawet jeśli podpisałeś regulamin z takim zapisem, 
                      nie jesteś prawnie zobowiązany do zwrotu. Zapis jest nieważny i niewykonalny.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Co może, a czego nie może pracodawca?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Co pracodawca MOŻE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-green-900">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Prosić o informację o reklamacji (dla dokumentacji wewnętrznej)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Zapytać o okoliczności opóźnienia/anulacji (cel: usprawnienie procesów)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Rozliczyć dodatkowe koszty delegacji wynikłe z zakłócenia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Złożyć własne roszczenie o zwrot kosztów biletu (jeśli linia nie przewiozła)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Czego pracodawca NIE MOŻE
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-red-900">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Zażądać zwrotu odszkodowania otrzymanego przez pracownika</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Zabronić pracownikowi składania reklamacji</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Wymagać przekazania pełnomocnictwa do reklamacji</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Potrącić kwotę odszkodowania z wynagrodzenia</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                        <span>Zastosować sankcje służbowe za niezwrócenie pieniędzy</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Uwaga prawna:</strong> Próba wymuszenia zwrotu przez pracodawcę (np. poprzez 
                  groźby, potrącenia z wynagrodzenia, negatywne konsekwencje służbowe) może stanowić 
                  naruszenie praw pracowniczych i być podstawą do skargi do Państwowej Inspekcji Pracy.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Praktyczne scenariusze – Jak reagować?
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenariusz 1: HR prosi o zwrot odszkodowania</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Otrzymałeś odszkodowanie 250 € za opóźniony lot w delegacji. 
                      HR wysyła email z prośbą o przekazanie kwoty na konto firmowe.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h4 className="font-semibold text-green-900 mb-2">Rekomendowana reakcja:</h4>
                      <p className="text-green-800 mb-3">
                        Uprzejmie, ale stanowczo odmów, powołując się na prawo europejskie:
                      </p>
                      <div className="bg-white border border-green-300 rounded p-3 text-sm text-slate-700 italic">
                        „Dziękuję za wiadomość. Odszkodowanie od linii lotniczej przysługuje mi jako 
                        pasażerowi zgodnie z Rozporządzeniem UE 261/2004. Przepisy te mają bezpośrednie 
                        zastosowanie i pierwszeństwo wobec regulacji wewnętrznych. Z tego powodu nie mogę 
                        przekazać otrzymanej kwoty."
                      </div>
                    </div>
                    <p className="text-slate-700 text-sm">
                      Możesz załączyć link do tego artykułu jako materiał edukacyjny dla działu HR.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenariusz 2: Regulamin wymaga podpisania oświadczenia</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Przed delegacją musisz podpisać oświadczenie, że zobowiąujesz 
                      się zwrócić ewentualne odszkodowania firmie.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-semibold text-blue-900 mb-2">Rekomendowane działanie:</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                          <span className="font-bold">1.</span>
                          <span>Możesz podpisać – takie oświadczenie jest prawnie nieważne (sprzeczne z UE)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">2.</span>
                          <span>Możesz odmówić – powołując się na sprzeczność z prawem europejskim</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold">3.</span>
                          <span>Możesz podpisać z zastrzeżeniem: „Podpisuję z zastrzeżeniem zgodności z UE 261/2004"</span>
                        </li>
                      </ul>
                    </div>
                    <p className="text-slate-700 font-medium">
                      <strong>Wniosek:</strong> Niezależnie od podpisu, takie oświadczenie nie ma mocy prawnej. 
                      Nie jesteś nim związany.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenariusz 3: Firma grozi konsekwencjami służbowymi</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> Przełożony sugeruje, że brak zwrotu odszkodowania może 
                      wpłynąć na ocenę pracy lub przyszłe delegacje.
                    </p>
                    <Alert className="border-red-300 bg-red-50">
                      <AlertCircle className="h-5 w-5 text-red-700" />
                      <AlertDescription className="text-red-900">
                        <strong>To poważne naruszenie praw pracowniczych!</strong> Taka sytuacja wymaga 
                        zdecydowanej reakcji.
                      </AlertDescription>
                    </Alert>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mt-3">
                      <h4 className="font-semibold text-slate-900 mb-2">Zalecane kroki:</h4>
                      <ol className="space-y-2 text-slate-700 ml-4">
                        <li>1. Udokumentuj sytuację (zapisz/zachowaj korespondencję)</li>
                        <li>2. Zgłoś do działu compliance/etyki w firmie (jeśli istnieje)</li>
                        <li>3. Skonsultuj się z prawnikiem specjalizującym się w prawie pracy</li>
                        <li>4. Rozważ zgłoszenie do Państwowej Inspekcji Pracy</li>
                      </ol>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Scenariusz 4: Firma proponuje „kompromis" 50/50</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700">
                      <strong>Sytuacja:</strong> HR proponuje podział odszkodowania: połowę zatrzymujesz, 
                      połowę przekazujesz firmie.
                    </p>
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                      <p className="text-slate-700 mb-2">
                        <strong>Ocena prawna:</strong> Masz pełne prawo do całej kwoty. Przyjęcie 
                        kompromisu jest Twoją wolną decyzją, ale nie wynika z żadnego obowiązku prawnego.
                      </p>
                      <p className="text-slate-700">
                        <strong>Jeśli przyjmujesz kompromis:</strong> Zrób to świadomie, rozumiejąc, 
                        że to dobrowolny gest, nie obowiązek. Nie twórz precedensu dla przyszłych przypadków.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Orzecznictvo i interpretacje prawne
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Stanowisko Trybunału Sprawiedliwości UE</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Trybunał wielokrotnie podkreślał, że:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Celem Rozporządzenia 261/2004 jest <strong>ochrona pasażerów</strong> jako strony słabszej 
                        w relacji z przewoźnikiem
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Prawo do rekompensaty ma charakter <strong>osobisty i niezbywalny</strong>
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Państwa członkowskie i podmioty prywatne <strong>nie mogą ograniczać</strong> 
                        skuteczności przepisów rozporządzenia
                      </span>
                    </li>
                  </ul>
                  <Alert className="border-blue-200 bg-blue-50 mt-4">
                    <FileText className="h-5 w-5 text-blue-700" />
                    <AlertDescription className="text-blue-900">
                      <strong>Kluczowe orzeczenie:</strong> W sprawie C-344/04 Trybunał stwierdził, 
                      że pasażer nie może zrzec się swoich praw wynikających z rozporządzenia. 
                      Oznacza to, że nawet dobrowolne zrzeczenie się (np. w regulaminie) jest nieważne.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Stanowisko polskich sądów</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-3">
                    Polskie sądy pracy konsekwentnie uznają, że:
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li>• Prawo UE ma pierwszeństwo przed krajowym prawem pracy</li>
                    <li>• Regulaminy wewnętrzne nie mogą ograniczać praw wynikających z UE</li>
                    <li>• Pracownik jest stroną uprawnioną do odszkodowania lotniczego</li>
                    <li>• Potrącenie odszkodowania z wynagrodzenia jest bezprawne</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 7 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Najczęstsze pytania pracowników
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy muszę informować firmę o złożonej reklamacji?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Prawnie nie. To Twoja osobista sprawa między Tobą a linią lotniczą. 
                      W praktyce transparentność może zapobiec późniejszym nieporozumieniom. 
                      Możesz poinformować HR o fakcie złożenia reklamacji bez podawania szczegółów.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Co jeśli firma już potrąciła mi odszkodowanie z wypłaty?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Bezprawne potrącenie. Możesz żądać zwrotu tej kwoty w trybie natychmiastowym. 
                      Jeśli firma odmawia, skontaktuj się z prawnikiem i rozważ zgłoszenie do 
                      Państwowej Inspekcji Pracy oraz sądu pracy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy firma może zmienić regulamin na przyszłość?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Firma może zmienić regulamin, ale nie może w nim skutecznie odebrać praw 
                      wynikających z prawa UE. Nowy regulamin z zapisem o zwrocie odszkodowań 
                      będzie równie nieważny jak poprzedni.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Co jeśli chcę dobrowolnie oddać odszkodowanie firmie?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      To Twoja decyzja. Możesz dobrowolnie przekazać pieniądze pracodawcy. 
                      Pamiętaj jednak, że to gest dobrej woli, nie obowiązek prawny. Nie twórz 
                      precedensu dla innych pracowników ani dla przyszłych przypadków.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Gdzie mogę sprawdzić, czy przysługuje mi odszkodowanie?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Jeśli Twój lot w delegacji był opóźniony lub anulowany, możesz 
                      <a href="https://claimwinger.com/pl/odwolany-lot" className="text-slate-900 underline hover:text-slate-700 mx-1" target="_blank" rel="noopener noreferrer">
                        sprawdzić swoje prawa online
                      </a>
                      w ciągu kilku minut. Niezależnie od wyniku, pamiętaj: ewentualne odszkodowanie 
                      należy się Tobie, nie firmie.
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
                    Twój lot służbowy był zakłócony?
                  </CardTitle>
                  <CardDescription className="text-slate-300 text-lg">
                    Niezależnie od stanowiska pracodawcy, masz prawo do odszkodowania jako pasażer. 
                    Sprawdź, czy przysługuje Ci rekompensata od 250 do 600 €.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild size="lg" variant="secondary">
                    <a href="https://claimwinger.com/pl/odwolany-lot" target="_blank" rel="noopener noreferrer">
                      Sprawdź swoje prawa
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
                <Link href="/bilet-firmowy-prawa" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Bilet firmowy a Twoje prawa
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Czy fakt, że firma kupuje bilet, zmienia Twoje prawa jako pasażera?
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
                        Podstawy prawne: komu przysługuje odszkodowanie i jakie kwoty?
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
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
                    <Link href="/anulowany-lot-delegacja" className="text-sm text-slate-600 hover:text-slate-900">
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
