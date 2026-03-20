import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock, AlertCircle, Plane, Shield } from "lucide-react";
import Link from "next/link";

export default function PrawaPasazeraPodrozSluzbowa() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Czy prawa pasażera dotyczą także lotów służbowych?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, Rozporządzenie WE 261/2004 dotyczy wszystkich pasażerów, niezależnie od tego, kto opłacił bilet. Nawet jeśli lot jest służbowy i opłacony przez pracodawcę, pasażer (pracownik) ma pełne prawa wynikające z unijnych przepisów."
        }
      },
      {
        "@type": "Question",
        "name": "Jakie odszkodowanie przysługuje za opóźniony lot służbowy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wysokość odszkodowania zależy od dystansu lotu: 250 EUR (do 1500 km), 400 EUR (1500-3500 km w UE lub powyżej 1500 km poza UE), 600 EUR (powyżej 3500 km poza UE). Opóźnienie musi wynieść co najmniej 3 godziny."
        }
      },
      {
        "@type": "Question",
        "name": "Czy linia lotnicza musi zapewnić opiekę podczas opóźnienia lotu służbowego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tak, linia lotnicza ma obowiązek zapewnić posiłki, napoje, dostęp do komunikacji oraz nocleg (jeśli konieczny), niezależnie od tego, czy lot jest prywatny czy służbowy. Obowiązek ten wynika z Rozporządzenia WE 261/2004."
        }
      },
      {
        "@type": "Question",
        "name": "Co zrobić, gdy lot służbowy został odwołany?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "W przypadku odwołania lotu masz prawo do: (1) zwrotu kosztów biletu lub lotu alternatywnego, (2) odszkodowania 250-600 EUR (zależnie od dystansu), (3) opieki ze strony linii lotniczej (posiłki, nocleg). Należy zachować wszystkie dokumenty i niezwłocznie zgłosić roszczenie."
        }
      },
      {
        "@type": "Question",
        "name": "Czy pracodawca może zablokować pracownikowi dostęp do odszkodowania?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nie, pracodawca nie może zabronić pracownikowi ubiegać się o odszkodowanie. Kwestia, komu ostatecznie przysługuje odszkodowanie (pracownikowi czy firmie), zależy od tego, kto jest stroną umowy przewozu i często regulują to wewnętrzne zasady firmy."
        }
      },
      {
        "@type": "Question",
        "name": "Jak długo można ubiegać się o odszkodowanie za lot służbowy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Termin przedawnienia wynosi w Polsce 3 lata od daty lotu (zgodnie z prawem cywilnym). W praktyce warto złożyć wniosek jak najszybciej - im więcej czasu upłynie, tym trudniej może być zebrać dokumentację i wyegzekwować roszczenie."
        }
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Prawa pasażera w podróży służbowej przy odwołaniu lub opóźnieniu lotu",
    "description": "Kompletny przewodnik po prawach pasażera w lotach służbowych. Dowiedz się, jakie odszkodowania i świadczenia przysługują przy opóźnieniach i odwołaniach lotów biznesowych.",
    "author": {
      "@type": "Person",
      "name": "Bizneslot.pl"
    },
    "datePublished": "2025-02-23",
    "dateModified": "2025-02-23",
    "publisher": {
      "@type": "Organization",
      "name": "Bizneslot.pl",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizneslot.pl/bizneslotlogotyp.png"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Prawa Pasażera w Podróży Służbowej — Opóźnienie i Odwołanie [2025]"
        description="Jakie prawa ma pasażer lotu służbowego? Sprawdź, jakie odszkodowania i świadczenia przysługują przy opóźnieniach i odwołaniach lotów biznesowych według Rozporządzenia WE 261/2004."
        url="https://bizneslot.pl/artykuly/prawa-pasazera-podroz-sluzbowa"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-10 h-10" />
              <h1 className="text-4xl font-bold m-0">
                Prawa Pasażera w Podróży Służbowej
              </h1>
            </div>
            <p className="text-xl text-blue-100 m-0">
              Kompletny przewodnik po prawach i odszkodowaniach przy opóźnieniach i odwołaniach lotów biznesowych
            </p>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded">
            <p className="text-lg font-semibold text-blue-900 mb-3">
              <strong>Czy wiesz, że lot służbowy podlega tym samym przepisom o prawach pasażera co lot prywatny?</strong>
            </p>
            <p className="text-gray-700 mb-0">
              Wielu pracowników podróżujących służbowo nie zdaje sobie sprawy, że przysługują im identyczne prawa jak pasażerom prywatnym. Niezależnie od tego, kto opłacił bilet — Ty czy Twój pracodawca — masz pełne prawo do odszkodowania i opieki ze strony linii lotniczej w przypadku zakłóceń w podróży.
            </p>
          </div>

          <p>
            W tym artykule dowiesz się <strong>wszystkiego o prawach pasażera w kontekście lotów służbowych</strong>: jakie odszkodowania przysługują, jakie świadczenia musisz otrzymać od linii lotniczej, oraz jak skutecznie egzekwować swoje prawa bez względu na to, czy podróżujesz prywatnie czy w celach biznesowych.
          </p>

          {/* Main Rights Overview */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-blue-600" />
            Podstawowe Prawa Pasażera w Locie Służbowym
          </h2>

          <p>
            <strong>Rozporządzenie WE 261/2004</strong> jest głównym aktem prawnym regulującym prawa pasażerów lotniczych w Unii Europejskiej. <strong>Dotyczy ono WSZYSTKICH pasażerów</strong>, bez względu na:
          </p>

          <ul className="space-y-2">
            <li>Kto opłacił bilet (pasażer, pracodawca, agencja podróży)</li>
            <li>Cel podróży (prywatny, służbowy, delegacja)</li>
            <li>Klasę podróży (ekonomiczna, biznes, pierwsza)</li>
            <li>Sposób zakupu biletu (bezpośrednio, przez pośrednika, przez firmę)</li>
          </ul>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="p-6 border-2 border-green-200 bg-green-50">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900 m-0">Prawa Podstawowe</h3>
              </div>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>✓ Odszkodowanie 250-600 EUR</li>
                <li>✓ Posiłki i napoje podczas oczekiwania</li>
                <li>✓ Dostęp do komunikacji (telefon, e-mail)</li>
                <li>✓ Nocleg, jeśli konieczny</li>
                <li>✓ Transport hotel-lotnisko</li>
                <li>✓ Zwrot kosztów biletu lub lot alternatywny</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 border-blue-200 bg-blue-50">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-900 m-0">Warunki Zastosowania</h3>
              </div>
              <ul className="space-y-2 text-gray-700 mb-0">
                <li>✓ Start z UE lub lądowanie w UE (linia unijna)</li>
                <li>✓ Opóźnienie min. 3h lub odwołanie lotu</li>
                <li>✓ Brak nadzwyczajnych okoliczności</li>
                <li>✓ Ważna rezerwacja i check-in na czas</li>
                <li>✓ Lot nie starszy niż 3 lata (Polska)</li>
              </ul>
            </Card>
          </div>

          {/* Compensation Amounts */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Wysokość Odszkodowania za Opóźniony lub Odwołany Lot Służbowy
          </h2>

          <p>
            Kwota odszkodowania <strong>nie zależy od ceny biletu</strong>, ale od dystansu lotu i czasu opóźnienia. Nawet jeśli Twój pracodawca kupił tani bilet promocyjny, przysługuje Ci pełne odszkodowanie według poniższych stawek:
          </p>

          <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden my-8">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-4 font-bold">Dystans Lotu</th>
                  <th className="text-left p-4 font-bold">Kwota Odszkodowania</th>
                  <th className="text-left p-4 font-bold">Przykładowe Trasy</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4">Do 1500 km</td>
                  <td className="p-4 font-bold text-green-600">250 EUR</td>
                  <td className="p-4">Warszawa-Londyn, Kraków-Berlin</td>
                </tr>
                <tr className="border-t bg-gray-50">
                  <td className="p-4">1500-3500 km (UE)<br/>lub powyżej 1500 km (poza UE)</td>
                  <td className="p-4 font-bold text-green-600">400 EUR</td>
                  <td className="p-4">Warszawa-Lizbona, Gdańsk-Barcelona</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4">Powyżej 3500 km (poza UE)</td>
                  <td className="p-4 font-bold text-green-600">600 EUR</td>
                  <td className="p-4">Warszawa-Nowy Jork, Kraków-Dubai</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8 rounded">
            <p className="font-semibold text-yellow-900 mb-2">
              <AlertCircle className="inline w-5 h-5 mr-2" />
              Ważne dla lotów służbowych:
            </p>
            <p className="text-gray-700 mb-0">
              Kwota odszkodowania jest niezależna od klasy biletu. Nawet jeśli leciałeś w klasie ekonomicznej, a Twój kolega w klasie biznes na tym samym locie, otrzymacie identyczne odszkodowanie (jeśli spełnicie te same warunki).
            </p>
          </div>

          {/* Care Obligations */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Prawo do Opieki — Co Musi Zapewnić Linia Lotnicza?
          </h2>

          <p>
            Niezależnie od tego, czy ostatecznie otrzymasz odszkodowanie finansowe, <strong>linia lotnicza ma bezwarunkowy obowiązek zapewnić Ci opiekę</strong> podczas opóźnienia lub odwołania lotu. To prawo obowiązuje od momentu osiągnięcia określonych progów czasowych:
          </p>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200">
              <Clock className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-bold mb-3">Opóźnienie 2h+</h3>
              <p className="text-sm text-gray-600 mb-3">(loty do 1500 km)</p>
              <ul className="space-y-1 text-sm mb-0">
                <li>• Posiłki i napoje</li>
                <li>• Dostęp do komunikacji</li>
                <li>• E-maile/telefony (2 szt.)</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
              <Clock className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="text-lg font-bold mb-3">Opóźnienie 3h+</h3>
              <p className="text-sm text-gray-600 mb-3">(loty 1500-3500 km)</p>
              <ul className="space-y-1 text-sm mb-0">
                <li>• Wszystko z poprzedniego</li>
                <li>• Dodatkowe posiłki</li>
                <li>• Więcej komunikacji</li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200">
              <Clock className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-bold mb-3">Opóźnienie 4h+</h3>
              <p className="text-sm text-gray-600 mb-3">(loty 3500+ km)</p>
              <ul className="space-y-1 text-sm mb-0">
                <li>• Wszystko z poprzednich</li>
                <li>• Zakwaterowanie (jeśli noc)</li>
                <li>• Transport hotel-lotnisko</li>
              </ul>
            </Card>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded">
            <p className="font-semibold text-green-900 mb-2">
              <CheckCircle className="inline w-5 h-5 mr-2" />
              Praktyczna rada dla podróżujących służbowo:
            </p>
            <p className="text-gray-700 mb-0">
              Zachowuj wszystkie rachunki i potwierdzenia wydatków poniesionych podczas opóźnienia (posiłki, taxi, hotel), jeśli linia lotnicza nie zapewniła ich od razu. Możesz je później doliczyć do roszczenia. <strong>To dotyczy także lotów służbowych</strong> — koszty te mogą być później zwrócone Tobie lub Twojemu pracodawcy.
            </p>
          </div>

          {/* MID-ARTICLE CTA */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg p-8 my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Opóźniony lub Odwołany Lot Służbowy?</h3>
            <p className="text-lg mb-6 text-green-100">
              Sprawdź swoje roszczenie w 2 minuty — bez rejestracji, bez ukrytych kosztów. ClaimWinger obsługuje loty służbowe dla pracowników i firm.
            </p>
            <Link 
              href="https://claimwinger.com/pl/opozniony-lot?utm_source=problemlot&utm_medium=blog&utm_campaign=article_prawa_pasazera" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold text-lg px-8">
                Sprawdź Swoje Odszkodowanie →
              </Button>
            </Link>
          </div>

          {/* Cancelled Flight Rights */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Prawa Pasażera przy Odwołaniu Lotu Służbowego
          </h2>

          <p>
            Odwołanie lotu to jedna z najbardziej frustrujących sytuacji, szczególnie gdy jedziesz na ważne spotkanie biznesowe, konferencję lub szkolenie. <strong>W przypadku odwołania lotu przysługują Ci rozszerzone prawa</strong>:
          </p>

          <div className="space-y-6 my-8">
            <Card className="p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">1</span>
                Wybór: Zwrot Kosztów lub Lot Alternatywny
              </h3>
              <p className="text-gray-700 mb-3">
                Masz prawo zdecydować, czy chcesz:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li><strong>A)</strong> Pełny zwrot kosztów biletu (w ciągu 7 dni) + ewentualny lot powrotny do miejsca początkowego wyjazdu</li>
                <li><strong>B)</strong> Lot alternatywny na zbliżonych warunkach, najwcześniej jak to możliwe lub w terminie przez Ciebie wybranym</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">2</span>
                Odszkodowanie Finansowe 250-600 EUR
              </h3>
              <p className="text-gray-700 mb-0">
                <strong>Nawet jeśli otrzymasz lot zastępczy</strong>, nadal przysługuje Ci odszkodowanie, chyba że:
              </p>
              <ul className="space-y-1 text-gray-700 mt-2 mb-0">
                <li>• Zostałeś poinformowany o odwołaniu min. 14 dni wcześniej</li>
                <li>• Zostałeś poinformowany 7-13 dni wcześniej, a lot zastępczy odlatuje max. 2h wcześniej i przylatuje max. 4h później</li>
                <li>• Odwołanie nastąpiło z powodu nadzwyczajnych okoliczności</li>
              </ul>
            </Card>

            <Card className="p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">3</span>
                Pełna Opieka podczas Oczekiwania
              </h3>
              <p className="text-gray-700 mb-0">
                Linia lotnicza musi zapewnić: posiłki, napoje, komunikację, nocleg (jeśli musisz czekać do następnego dnia) oraz transport między hotelem a lotniskiem.
              </p>
            </Card>
          </div>

          {/* Denied Boarding */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Odmowa Wejścia na Pokład (Overbooking) w Locie Służbowym
          </h2>

          <p>
            <strong>Overbooking</strong> to sytuacja, w której linia lotnicza sprzedała więcej biletów niż ma miejsc w samolocie. Jeśli znajdujesz się na lotnisku z ważną rezerwacją i na czas na odprawę, ale linia odmawia Ci wejścia na pokład, przysługują Ci <strong>identyczne prawa jak przy odwołaniu lotu</strong>:
          </p>

          <ul className="space-y-2">
            <li><strong>Odszkodowanie 250-600 EUR</strong> (zależnie od dystansu)</li>
            <li><strong>Lot zastępczy</strong> (najwcześniej jak możliwe) lub <strong>zwrot kosztów biletu</strong></li>
            <li><strong>Opieka ze strony linii</strong> (posiłki, napoje, komunikacja, nocleg)</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded">
            <p className="font-semibold text-red-900 mb-2">
              <XCircle className="inline w-5 h-5 mr-2" />
              Uwaga dla podróżujących służbowo:
            </p>
            <p className="text-gray-700 mb-0">
              W przypadku overbookingu na locie służbowym, <strong>nigdy nie podpisuj dobrowolnego zrzeczenia się miejsca</strong> bez wcześniejszej konsultacji z pracodawcą lub działem HR. Dobrowolna rezygnacja z lotu może skutkować utratą prawa do odszkodowania, a także komplikacjami w rozliczeniu delegacji i kosztów podróży.
            </p>
          </div>

          {/* Extraordinary Circumstances */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Nadzwyczajne Okoliczności — Kiedy Odszkodowanie NIE Przysługuje?
          </h2>

          <p>
            Linia lotnicza jest zwolniona z obowiązku wypłaty odszkodowania finansowego (ale NIE z obowiązku opieki!), jeśli zakłócenie w podróży wynikało z <strong>nadzwyczajnych okoliczności</strong>, których nie mogła uniknąć, nawet gdyby podjęła wszelkie rozsądne środki.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <Card className="p-6 bg-red-50 border-2 border-red-200">
              <div className="flex items-start gap-3 mb-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-gray-900 m-0">Nadzwyczajne Okoliczności<br/>(brak odszkodowania)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-0">
                <li>• Ekstremalne warunki pogodowe (burza, huragan)</li>
                <li>• Zagrożenie bezpieczeństwa (terroryzm, niepokoje)</li>
                <li>• Strajki kontroli ruchu lotniczego</li>
                <li>• Ukryte wady fabryczne samolotu</li>
                <li>• Zderzenie z ptakiem (bird strike)</li>
                <li>• Zamknięcie przestrzeni powietrznej</li>
              </ul>
            </Card>

            <Card className="p-6 bg-green-50 border-2 border-green-200">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-gray-900 m-0">NIE są Nadzwyczajne<br/>(odszkodowanie przysługuje)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 mb-0">
                <li>• Problemy techniczne samolotu (zwykłe awarie)</li>
                <li>• Brak załogi (choroba, spóźnienie)</li>
                <li>• Strajki pracowników linii lotniczej</li>
                <li>• Opóźnienie z poprzedniego lotu tej samej maszyny</li>
                <li>• Brak paliwa lub catering</li>
                <li>• Problemy z zarządzaniem operacyjnym</li>
              </ul>
            </Card>
          </div>

          <p>
            <strong>Ważne:</strong> To linia lotnicza ma obowiązek udowodnić, że zaistniały nadzwyczajne okoliczności. Nie musisz tego wykazywać — linia musi przedstawić dowody. Jeśli twierdzi, że przyczyną był problem techniczny będący „nadzwyczajną okolicznością", poproś o szczegółowe wyjaśnienie na piśmie.
          </p>

          {/* How to Claim */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak Ubiegać Się o Odszkodowanie za Lot Służbowy — Procedura Krok po Kroku
          </h2>

          <div className="space-y-6 my-8">
            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Zbierz Dokumentację</h3>
                <p className="text-gray-700 mb-0">
                  Karty pokładowe, potwierdzenie rezerwacji, zdjęcia tablicy odlotów z widocznym opóźnieniem, rachunki za wydatki (jeśli linia nie zapewniła opieki).
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Ustal, Kto Wystąpi z Roszczeniem</h3>
                <p className="text-gray-700 mb-0">
                  Sprawdź politykę firmy lub skonsultuj z działem HR/księgowością, czy odszkodowanie ma trafić do pracownika czy do firmy. W razie wątpliwości, możesz wystąpić samodzielnie jako pasażer.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Złóż Wniosek do Linii Lotniczej</h3>
                <p className="text-gray-700 mb-0">
                  Możesz to zrobić samodzielnie (formularz online, pismo), przez prawnika lub przez platformę taką jak <a href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=article_prawa_pasazera" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ClaimWinger</a>. Platforma nie wymaga rejestracji — wystarczy wypełnić prosty formularz.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Poczekaj na Odpowiedź</h3>
                <p className="text-gray-700 mb-0">
                  Linia ma obowiązek odpowiedzieć w rozsądnym terminie (zwykle 6-8 tygodni). Jeśli odpowiedź jest negatywna lub nie otrzymasz jej wcale, możesz eskalować sprawę.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="text-lg font-bold mb-2">Eskalacja (jeśli potrzebna)</h3>
                <p className="text-gray-700 mb-0">
                  Możesz zgłosić sprawę do Urzędu Lotnictwa Cywilnego, skorzystać z platformy ODR (Online Dispute Resolution) lub zlecić obsługę profesjonalnej firmie reklamacyjnej, która poprowadzi sprawę aż do sądu (jeśli będzie to konieczne).
                </p>
              </div>
            </div>
          </div>

          {/* Additional Rights */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Dodatkowe Prawa Pasażera w Lotach Służbowych
          </h2>

          <div className="space-y-4">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-600" />
                Downgrade (Obniżenie Klasy Podróży)
              </h3>
              <p className="text-gray-700 mb-0">
                Jeśli zostałeś przeniesiony z klasy wyższej do niższej (np. z biznes do ekonomicznej), przysługuje Ci zwrot części ceny biletu: 30% (loty do 1500 km), 50% (1500-3500 km), 75% (powyżej 3500 km).
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-600" />
                Utracony lub Uszkodzony Bagaż
              </h3>
              <p className="text-gray-700 mb-0">
                Zgodnie z Konwencją Montrealską, przysługuje Ci odszkodowanie do ~1500 EUR za utracony, uszkodzony lub opóźniony bagaż. Zgłoś sprawę natychmiast (formularz PIR) i zachowaj wszystkie rachunki za niezbędne zakupy.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Plane className="w-5 h-5 text-blue-600" />
                Prawo do Informacji
              </h3>
              <p className="text-gray-700 mb-0">
                Linia lotnicza ma obowiązek poinformować Cię na piśmie o Twoich prawach w przypadku opóźnienia, odwołania lotu lub odmowy wejścia na pokład. Jeśli tego nie zrobiła, nie trać praw — i tak możesz wystąpić z roszczeniem.
              </p>
            </Card>
          </div>

          {/* Resources */}
          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Przydatne Zasoby i Dalsze Informacje
          </h2>

          <p>
            Jeśli chcesz pogłębić swoją wiedzę o prawach pasażera lotniczego, polecam odwiedzić <a href="https://wise-flight.info" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">wise-flight.info</a> — kompleksowy portal poświęcony prawom pasażerów lotniczych, z bazą wiedzy, analizami przepisów i praktycznymi poradami.
          </p>

          <p>
            Warto również zapoznać się z pełnym tekstem <strong>Rozporządzenia WE 261/2004</strong> dostępnym na stronach Urzędu Lotnictwa Cywilnego oraz witrynie EUR-Lex.
          </p>

          {/* FINAL CTA BEFORE FAQ */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-10 my-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-4 text-center">Odzyskaj Swoje Odszkodowanie z ClaimWinger</h3>
            <p className="text-xl text-center mb-8 text-blue-100">
              Wypełnij prosty formularz bez rejestracji i sprawdź, ile możesz otrzymać za opóźniony lub odwołany lot służbowy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://claimwinger.com/pl/opozniony-lot?utm_source=problemlot&utm_medium=blog&utm_campaign=article_prawa_pasazera" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold w-full sm:w-auto">
                  Opóźniony Lot →
                </Button>
              </Link>
              <Link 
                href="https://claimwinger.com/pl/odwolany-lot?utm_source=problemlot&utm_medium=blog&utm_campaign=article_prawa_pasazera" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 font-bold w-full sm:w-auto">
                  Odwołany Lot →
                </Button>
              </Link>
            </div>
            <p className="text-center mt-6 text-sm text-blue-200">
              ✓ Bez ukrytych kosztów • ✓ Prowizja tylko od wygranej • ✓ Obsługa lotów służbowych
            </p>
          </div>

          {/* FAQ Section */}
          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-8">Najczęściej Zadawane Pytania (FAQ)</h2>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Czy prawa pasażera dotyczą także lotów służbowych?
              </h3>
              <p className="text-gray-700 mb-0">
                Tak, Rozporządzenie WE 261/2004 dotyczy wszystkich pasażerów, niezależnie od tego, kto opłacił bilet. Nawet jeśli lot jest służbowy i opłacony przez pracodawcę, pasażer (pracownik) ma pełne prawa wynikające z unijnych przepisów.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Jakie odszkodowanie przysługuje za opóźniony lot służbowy?
              </h3>
              <p className="text-gray-700 mb-0">
                Wysokość odszkodowania zależy od dystansu lotu: 250 EUR (do 1500 km), 400 EUR (1500-3500 km w UE lub powyżej 1500 km poza UE), 600 EUR (powyżej 3500 km poza UE). Opóźnienie musi wynieść co najmniej 3 godziny.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Czy linia lotnicza musi zapewnić opiekę podczas opóźnienia lotu służbowego?
              </h3>
              <p className="text-gray-700 mb-0">
                Tak, linia lotnicza ma obowiązek zapewnić posiłki, napoje, dostęp do komunikacji oraz nocleg (jeśli konieczny), niezależnie od tego, czy lot jest prywatny czy służbowy. Obowiązek ten wynika z Rozporządzenia WE 261/2004.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Co zrobić, gdy lot służbowy został odwołany?
              </h3>
              <p className="text-gray-700 mb-0">
                W przypadku odwołania lotu masz prawo do: (1) zwrotu kosztów biletu lub lotu alternatywnego, (2) odszkodowania 250-600 EUR (zależnie od dystansu), (3) opieki ze strony linii lotniczej (posiłki, nocleg). Należy zachować wszystkie dokumenty i niezwłocznie zgłosić roszczenie.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Czy pracodawca może zablokować pracownikowi dostęp do odszkodowania?
              </h3>
              <p className="text-gray-700 mb-0">
                Nie, pracodawca nie może zabronić pracownikowi ubiegać się o odszkodowanie. Kwestia, komu ostatecznie przysługuje odszkodowanie (pracownikowi czy firmie), zależy od tego, kto jest stroną umowy przewozu i często regulują to wewnętrzne zasady firmy.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Jak długo można ubiegać się o odszkodowanie za lot służbowy?
              </h3>
              <p className="text-gray-700 mb-0">
                Termin przedawnienia wynosi w Polsce 3 lata od daty lotu (zgodnie z prawem cywilnym). W praktyce warto złożyć wniosek jak najszybciej - im więcej czasu upłynie, tym trudniej może być zebrać dokumentację i wyegzekwować roszczenie.
              </p>
            </Card>
          </div>

          {/* Conclusion */}
          <h2 className="text-3xl font-bold text-gray-900 mt-16 mb-6">Podsumowanie</h2>
          
          <p>
            <strong>Prawa pasażera w podróży służbowej są identyczne jak w podróży prywatnej.</strong> Niezależnie od tego, kto opłacił bilet, masz prawo do odszkodowania, opieki ze strony linii lotniczej oraz innych świadczeń przewidzianych przez Rozporządzenie WE 261/2004.
          </p>

          <p>
            Kluczowe punkty do zapamiętania:
          </p>

          <ul className="space-y-2">
            <li>✓ <strong>Odszkodowanie 250-600 EUR</strong> zależy od dystansu, nie od ceny biletu</li>
            <li>✓ <strong>Opieka ze strony linii</strong> (posiłki, nocleg, komunikacja) jest bezwarunkowa</li>
            <li>✓ <strong>Odwołanie lotu</strong> daje prawo do zwrotu kosztów lub lotu zastępczego + odszkodowanie</li>
            <li>✓ <strong>Nadzwyczajne okoliczności</strong> zwalniają linię z odszkodowania, ale nie z opieki</li>
            <li>✓ <strong>Termin przedawnienia:</strong> 3 lata w Polsce</li>
            <li>✓ <strong>Dokumentacja:</strong> karty pokładowe, potwierdzenia, rachunki</li>
          </ul>

          <p>
            Jeśli Twój lot służbowy był opóźniony lub odwołany, nie zwlekaj — <a href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=blog&utm_campaign=article_prawa_pasazera" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">sprawdź swoje roszczenie przez ClaimWinger</a> i odzyskaj należne Ci odszkodowanie.
          </p>

          {/* Back to Articles */}
          <div className="mt-12 pt-8 border-t">
            <Link href="/artykuly">
              <Button variant="outline" className="gap-2">
                ← Wróć do Wszystkich Artykułów
              </Button>
            </Link>
          </div>

        </article>
      </div>
    </>
  );
}
