import { SEO } from "@/components/SEO";
import Link from "next/link";
import { MobileNav } from "@/components/MobileNav";
import { Briefcase, FileText, ArrowRight, CheckCircle2, AlertCircle, Scale, Users, Building2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function BiletFirmowyPrawa() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Bilet firmowy a prawa pasażera – Kompletny przewodnik",
        "description": "Czy bilet opłacony przez firmę zmienia Twoje prawa jako pasażera? Kompleksowy przewodnik o prawach pracowników w podróżach służbowych.",
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
          "@id": "https://bizneslot.info/bilet-firmowy-prawa"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Czy firma ma prawo do odszkodowania za bilet służbowy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie. Odszkodowanie przysługuje pasażerowi – osobie, która faktycznie odbyła podróż i poniosła niedogodności. Rozporządzenie UE 261/2004 nie rozróżnia biletów prywatnych i służbowych. Sposób finansowania biletu nie ma znaczenia prawnego."
            }
          },
          {
            "@type": "Question",
            "name": "Czy pracownik musi mieć zgodę firmy na złożenie reklamacji?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie. Reklamacja to osobiste prawo pracownika wynikające z umowy przewozu. Jako pasażer masz autonomiczne prawo do złożenia reklamacji u linii lotniczej bez zgody pracodawcy, HR ani księgowości."
            }
          },
          {
            "@type": "Question",
            "name": "Czy zapis w umowie o pracę może odebrać prawo do odszkodowania?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie. Rozporządzenie UE ma nadrzędny charakter wobec krajowych regulacji i umów prywatnych. Pracodawca nie może w regulaminie wewnętrznym czy umowie o pracę odebrać pracownikowi praw wynikających z prawa europejskiego."
            }
          },
          {
            "@type": "Question",
            "name": "Czy bilet firmowy to inne zasady niż bilet prywatny?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nie. Prawo lotnicze nie rozróżnia biletów według celu podróży. Dla linii lotniczych i prawa europejskiego nie ma znaczenia, czy lecisz na wakacje czy na służbową konferencję. Jesteś pasażerem i masz te same prawa."
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
            "name": "Bilet firmowy a prawa pasażera",
            "item": "https://bizneslot.info/bilet-firmowy-prawa"
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Bilet firmowy a prawa pasażera | BiznesLot.info"
        description="Czy bilet opłacony przez pracodawcę zmienia Twoje prawa? Dowiedz się, kto jest pasażerem w świetle prawa i komu przysługuje odszkodowanie za lot służbowy."
        url="https://bizneslot.info/bilet-firmowy-prawa"
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
              <span>Bilet firmowy a prawa pasażera</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bilet firmowy a prawa pasażera – Co się zmienia?
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Czy fakt, że bilet opłaca firma, wpływa na Twoje prawa jako pasażera? 
              Kto jest uprawniony do rekompensaty w świetle prawa europejskiego? 
              Rozwiewamy najpopularniejsze mity dotyczące podróży służbowych.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            
            {/* Key Takeaway */}
            <Alert className="mb-12 border-slate-700 bg-slate-50">
              <Shield className="h-5 w-5 text-slate-700" />
              <AlertTitle className="text-lg font-bold text-slate-900">
                Podstawowa zasada prawna
              </AlertTitle>
              <AlertDescription className="text-slate-700 text-base mt-2">
                Prawo europejskie (Rozporządzenie UE 261/2004) <strong>nie rozróżnia biletów prywatnych i służbowych</strong>. 
                Uprawnionym do odszkodowania jest <strong>pasażer</strong> – osoba, która faktycznie odbyła podróż. 
                Sposób finansowania biletu nie ma znaczenia prawnego.
              </AlertDescription>
            </Alert>

            {/* Section 1 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Kim jest „pasażer" w świetle prawa?
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="h-6 w-6 text-slate-700" />
                    Definicja prawna pasażera
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700">
                    Rozporządzenie (WE) nr 261/2004 definiuje pasażera jako:
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <p className="text-slate-900 font-medium italic">
                      „każdą osobę posiadającą ważny bilet podróży, która została zaakceptowana 
                      do odprawy [...] lub której rezerwacja została potwierdzona"
                    </p>
                  </div>
                  <p className="text-slate-700">
                    W definicji tej <strong>nie ma żadnego odniesienia do:</strong>
                  </p>
                  <ul className="space-y-2 ml-6 text-slate-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Sposobu finansowania biletu</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Celu podróży (prywatny vs służbowy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Podmiotu, który opłacił rezerwację</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span>Relacji pracownik-pracodawca</span>
                    </li>
                  </ul>
                  <p className="text-slate-700 font-medium mt-4">
                    <strong>Wniosek:</strong> Pasażerem jest osoba fizycznie lecąca samolotem. 
                    To ona ma prawo do rekompensaty.
                  </p>
                </CardContent>
              </Card>

              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  To rozróżnienie jest kluczowe w kontekście podróży służbowych. Firma może być 
                  <strong> płatnikiem</strong> biletu, ale nie jest <strong>pasażerem</strong>. 
                  Prawo europejskie chroni osobę podróżującą, nie podmiot finansujący.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Bilet firmowy – Kto ma prawo do odszkodowania?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-900 flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      Pracownik (pasażer)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-green-900 font-semibold">
                      Ma pełne prawo do odszkodowania
                    </p>
                    <ul className="space-y-2 text-green-800">
                      <li>• Faktycznie odbył podróż</li>
                      <li>• Poniósł niedogodności (opóźnienie, anulacja)</li>
                      <li>• Jest stroną w relacji z linią lotniczą</li>
                      <li>• Może złożyć reklamację we własnym imieniu</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-900 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Pracodawca (płatnik)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-red-900 font-semibold">
                      NIE ma prawa do odszkodowania
                    </p>
                    <ul className="space-y-2 text-red-800">
                      <li>• Nie odbył podróży fizycznie</li>
                      <li>• Nie poniósł osobistych niedogodności</li>
                      <li>• Nie jest pasażerem w rozumieniu prawa</li>
                      <li>• Nie może złożyć reklamacji w swoim imieniu</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Alert className="border-blue-200 bg-blue-50">
                <FileText className="h-5 w-5 text-blue-700" />
                <AlertDescription className="text-blue-900">
                  <strong>Praktyczny przykład:</strong> Jan leci do Berlina na konferencję. Bilet kupuje 
                  dział zakupów firmy XYZ. Lot się opóźnia o 4 godziny. <strong>Jan</strong> ma prawo 
                  do 250 € odszkodowania, nie firma XYZ. To Jan był pasażerem, poniósł niedogodności 
                  i stracił czas.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 3 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Najczęstsze mity i błędne przekonania
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Mit 1: „Firma kupiła bilet, więc jej przysługuje odszkodowanie"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 font-medium">
                      <strong>Fakt:</strong> To nieprawda. Odszkodowanie przysługuje pasażerowi, 
                      nie płatnikowi biletu.
                    </p>
                    <p className="text-slate-700">
                      Rozporządzenie UE 261/2004 jasno określa, że rekompensata jest dla osoby podróżującej. 
                      Firma może być stroną transakcji zakupu biletu, ale nie jest stroną uprawnioną 
                      do odszkodowania w przypadku zakłóceń.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Mit 2: „W umowie o pracę jest zapis o zwrocie odszkodowań"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 font-medium">
                      <strong>Fakt:</strong> Taki zapis może być niezgodny z prawem europejskim.
                    </p>
                    <p className="text-slate-700">
                      Rozporządzenie UE ma nadrzędny charakter wobec krajowych regulacji i umów prywatnych. 
                      Pracodawca nie może w regulaminie wewnętrznym czy umowie o pracę odebrać pracownikowi 
                      praw wynikających z prawa europejskiego. Więcej: <Link href="/pracodawca-a-odszkodowanie" className="text-slate-900 underline hover:text-slate-700">Pracodawca a odszkodowanie lotnicze</Link>.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Mit 3: „Bilet firmowy to inne zasady niż bilet prywatny"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 font-medium">
                      <strong>Fakt:</strong> Prawo lotnicze nie rozróżnia biletów według celu podróży.
                    </p>
                    <p className="text-slate-700">
                      Dla linii lotniczych i prawa europejskiego nie ma znaczenia, czy lecisz na wakacje, 
                      do rodziny, czy na służbową konferencję. Jesteś pasażerem i masz te same prawa 
                      niezależnie od kontekstu podróży.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600" />
                      Mit 4: „Pracownik musi mieć zgodę firmy na złożenie reklamacji"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-slate-700 font-medium">
                      <strong>Fakt:</strong> Nie. Reklamacja to osobiste prawo pracownika.
                    </p>
                    <p className="text-slate-700">
                      Jako pasażer masz autonomiczne prawo do złożenia reklamacji u linii lotniczej. 
                      Nie musisz pytać o zgodę pracodawcy, HR ani księgowości. To Twoje osobiste 
                      uprawnienie wynikające z umowy przewozu (którą zawarłeś poprzez lot).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Bilet służbowy vs rezerwacja firmowa – Różnice prawne
              </h2>
              
              <Card className="border-slate-200 mb-6">
                <CardHeader>
                  <CardTitle className="text-xl">Trzy modele zakupu biletów w firmach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-l-4 border-l-slate-700 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Model 1: Firma kupuje bilet na nazwisko pracownika</h4>
                    <p className="text-slate-700 mb-2">
                      Najczęstszy model. Dział travel/zakupów rezerwuje bilet, podając dane pracownika. 
                      Pracownik otrzymuje potwierdzenie rezerwacji.
                    </p>
                    <p className="text-slate-700 font-medium">
                      <strong>Prawo do odszkodowania:</strong> Pracownik (pasażer)
                    </p>
                  </div>

                  <div className="border-l-4 border-l-slate-700 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Model 2: Pracownik kupuje, firma zwraca</h4>
                    <p className="text-slate-700 mb-2">
                      Pracownik rezerwuje bilet własną kartą, następnie rozlicza się z pracodawcą 
                      (refundacja lub nota księgowa).
                    </p>
                    <p className="text-slate-700 font-medium">
                      <strong>Prawo do odszkodowania:</strong> Pracownik (pasażer)
                    </p>
                  </div>

                  <div className="border-l-4 border-l-slate-700 pl-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Model 3: Firma ma konto korporacyjne z linią</h4>
                    <p className="text-slate-700 mb-2">
                      Duże firmy mają umowy korporacyjne z liniami lotniczymi. Rezerwacje są przypisane 
                      do konta firmowego, ale na nazwiska konkretnych pracowników.
                    </p>
                    <p className="text-slate-700 font-medium">
                      <strong>Prawo do odszkodowania:</strong> Pracownik (pasażer) – model finansowania nie zmienia praw
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-slate-700 bg-slate-50">
                <CheckCircle2 className="h-5 w-5 text-slate-700" />
                <AlertDescription className="text-slate-700">
                  <strong>Wniosek:</strong> Niezależnie od modelu finansowania, pasażerem jest zawsze 
                  osoba lecąca, i to ona ma prawo do rekompensaty. Żaden model organizacyjny nie zmienia 
                  tego fundamentalnego prawa.
                </AlertDescription>
              </Alert>
            </section>

            {/* Section 5 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Praktyczne implikacje dla pracowników
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Co możesz zrobić jako pracownik?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Złożyć reklamację we własnym imieniu:</strong> Nie potrzebujesz zgody 
                          firmy. Możesz <a href="https://claimwinger.com/pl/odwolany-lot" className="text-slate-900 underline hover:text-slate-700" target="_blank" rel="noopener noreferrer">sprawdzić swoje prawa</a> i rozpocząć proces.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Otrzymać pieniądze na swoje konto:</strong> Rekompensata od linii 
                          jest Twoja. To nie jest zwrot kosztów służbowych.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Nie informować pracodawcy:</strong> Prawnie nie musisz. W praktyce 
                          bycie transparentnym może zapobiec nieporozumieniom.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Zatrzymać rekompensatę:</strong> Pieniądze należą się Tobie za poniesione 
                          niedogodności. Nie jest to zwrot kosztów biletu, tylko odszkodowanie za utratę czasu.
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">Czego nie może zrobić pracodawca?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Zażądać zwrotu odszkodowania:</strong> Firma może mieć wewnętrzny 
                          regulamin, ale nie może wymusić zwrotu praw należnych z prawa europejskiego.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Złożyć reklamacji w imieniu pracownika:</strong> Tylko pasażer może 
                          być stroną postępowania reklamacyjnego.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Zabronić pracownikowi składania reklamacji:</strong> To ingerencja 
                          w osobiste prawa pracownika chronione prawem unijnym.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Zastrzec odszkodowanie w umowie o pracę:</strong> Umowa nie może 
                          odbierać praw wynikających z aktów prawnych wyższego rzędu (UE).
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6 */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Szczególne przypadki i wątpliwości
              </h2>
              
              <div className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Co jeśli lot był opłacony punktami lojalnościowymi firmy?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Bez znaczenia. Prawo do odszkodowania nie zależy od formy płatności. 
                      Czy bilet został opłacony gotówką, kartą, punktami czy voucherem – pasażer 
                      ma te same prawa w przypadku zakłóceń.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy klasa biletu (economy, business) ma znaczenie?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Nie dla wysokości odszkodowania. Kwota rekompensaty zależy tylko od dystansu lotu. 
                      Pasażer w klasie economy i pasażer w klasie biznes na tym samym locie otrzymają 
                      taką samą kwotę odszkodowania.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Co jeśli pracownik zmienił lot na prywatny przedłużając delegację?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      Jeśli po delegacji służbowej zdecydowałeś się zostać prywatnie (urlop, weekend), 
                      zmienić lot powrotny i lot powrotny został zakłócony – nadal masz prawo do 
                      rekompensaty. Jesteś pasażerem na tym locie.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Czy HR może zażądać udokumentowania reklamacji?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">
                      HR może prosić o informację dla celów wewnętrznej dokumentacji (np. w razie 
                      pytań o przedłużoną delegację). Ale nie może wymagać zwrotu pieniędzy ani 
                      blokować Twojego prawa do złożenia reklamacji.
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
                    Niezależnie od tego, kto kupił bilet, masz prawo do odszkodowania jako pasażer. 
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

                <Link href="/pracodawca-a-odszkodowanie" className="group">
                  <Card className="border-slate-200 hover:border-slate-400 transition-all h-full">
                    <CardHeader>
                      <CardTitle className="group-hover:text-slate-700 transition-colors flex items-start justify-between">
                        Pracodawca a odszkodowanie
                        <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-700 group-hover:translate-x-1 transition-all flex-shrink-0" />
                      </CardTitle>
                      <CardDescription>
                        Czy musisz oddać rekompensatę firmie? Co mówi prawo pracy?
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
                    <Link href="/bilet-firmowy-prawa" className="text-sm text-slate-900 font-medium">
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
