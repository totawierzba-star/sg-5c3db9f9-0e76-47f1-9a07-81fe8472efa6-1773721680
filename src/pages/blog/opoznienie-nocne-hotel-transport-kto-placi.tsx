import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertTriangle, Moon, Euro, ArrowRight, Bed } from "lucide-react";

export default function OpoznienieNocneHotelTransportKtoPlaci() {
  return (
    <Layout>
      <SEO
        title="Opóźnienie nocne — hotel i transport: kto płaci?"
        description="Twój lot opóźniony jest do następnego dnia? Zobacz, jak wyegzekwować darmowy hotel, transport oraz 600€ odszkodowania od linii."
        url="https://problemlot.pl/blog/opoznienie-nocne-hotel-transport-kto-placi"
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Nocne opóźnienie i prawo do opieki</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <Moon className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Sytuacje Specjalne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Opóźnienie nocne — hotel i transport: kto za to płaci?
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>📅 11 marca 2026</span>
              <span>⏱️ 8 min czytania</span>
              <span>✍️ Ekspert ds. praw pasażerów</span>
            </div>
          </header>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="font-bold text-lg text-slate-900 mb-2">
                  Szybka odpowiedź:
                </h2>
                <p className="text-slate-700 leading-relaxed">
                  Zgodnie z Art. 9 WE 261/2004, jeśli Twój lot został przełożony na następny dzień, 
                  <strong>linia lotnicza ma absolutny obowiązek</strong> zapewnić i opłacić pokój hotelowy 
                  oraz transport między lotniskiem a hotelem. <strong>Prawo to przysługuje Ci ZAWSZE</strong> — nawet jeśli 
                  opóźnienie to wina pogody! Zwrot kosztów opieki jest niezależny od odszkodowania pieniężnego (250-600 €).
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Utknięcie na lotnisku w środku nocy z powodu opóźnionego samolotu to frustrujące doświadczenie. 
              Pracownicy linii lotniczych są zmęczeni, okienka informacyjne zamknięte, a pasażerowie śpią na twardych krzesełkach. 
              Czy to jedyna opcja? Absolutnie nie.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Wiele osób nie zdaje sobie sprawy, że "prawo do opieki" i "prawo do odszkodowania" to dwa osobne mechanizmy w przepisach UE. 
              W tym artykule dokładnie wyjaśniamy, <strong>czego możesz żądać w nocy na lotnisku</strong>, kto za to płaci, 
              i jak odzyskać poniesione koszty, jeśli linia lotnicza całkowicie Cię zignorowała.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Bed className="w-8 h-8 text-blue-600" />
              Dwa odrębne roszczenia: Opieka a Odszkodowanie
            </h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <p className="text-slate-700 mb-4">
                Największym błędem pasażerów jest mylenie prawa do zwrotu wydatków hotelowych z ryczałtowym odszkodowaniem. 
                Pamiętaj: <strong>to są dwa niezależne od siebie roszczenia</strong>, które możesz składać równocześnie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  1. Prawo do opieki (Art. 9)
                </h3>
                <p className="text-sm text-blue-800 mb-3">
                  <strong>Przysługuje BEZWARUNKOWO</strong>
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Obejmuje: <strong>Hotel, taksówki, posiłki</strong>, napoje.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Należy Ci się nawet przy <strong>złej pogodzie, mgle, burzy</strong> lub uderzeniu pioruna.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Dotyczy rzeczywistych kosztów, które poniosłeś, na podstawie paragonów i faktur.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-green-900 mb-3 flex items-center gap-2">
                  <Euro className="w-5 h-5" />
                  2. Odszkodowanie (Art. 7)
                </h3>
                <p className="text-sm text-green-800 mb-3">
                  <strong>Przysługuje ZALEŻNIE OD PRZYCZYNY</strong>
                </p>
                <ul className="space-y-2 text-sm text-slate-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Obejmuje: <strong>250 €, 400 € lub 600 €</strong> gotówki za stracony czas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>Tylko za winę przewoźnika (usterka, brak załogi). <strong>NIE przysługuje</strong> przy złej pogodzie.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span>To stała, zryczałtowana kwota zależna wyłącznie od odległości trasy.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 bg-white border border-slate-200 rounded-lg p-4">
              <p className="font-semibold text-slate-900 mb-2">Przykład podsumowujący:</p>
              <p className="text-sm text-slate-700">
                Wielka śnieżyca wstrzymuje odlot z Modlina do następnego dnia. Czy dostaniesz 250 € odszkodowania? <strong>Nie (siła wyższa)</strong>. 
                Czy Ryanair musi zapłacić za Twój nocleg i jedzenie w hotelu? <strong>TAK (prawo do opieki)</strong>.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Co dokładnie musi zapewnić linia przy nocnym opóźnieniu?
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <Bed className="w-5 h-5 text-indigo-600" />
                  Zakwaterowanie w hotelu
                </h3>
                <p className="text-slate-700 mb-2">
                  Linia musi zorganizować pokój hotelowy, gdy zachodzi konieczność pobytu przez jedną lub więcej nocy.
                </p>
                <p className="text-sm text-slate-600">
                  <em>Praktyka:</em> Linie często rezerwują hotele w pobliżu lotniska. Jeśli jednak okienka są zamknięte, 
                  masz prawo samodzielnie wynająć hotel o <strong>rozsądnym standardzie</strong> (najlepiej do 3-4 gwiazdek, unikaj prezydenckich apartamentów), a linię obciążyć fakturą.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-indigo-600" />
                  Transport: Lotnisko ↔ Hotel
                </h3>
                <p className="text-slate-700 mb-2">
                  Nocleg nie znajduje się na pasie startowym. Linia jest zobowiązana zapewnić darmowy transport do miejsca zakwaterowania i z powrotem.
                </p>
                <p className="text-sm text-slate-600">
                  <em>Praktyka:</em> Jeśli autobusy lotniskowe nie kursują, weź licencjonowaną taksówkę lub Uber/Bolt i <strong>koniecznie zachowaj rachunek/e-fakturę</strong>.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                <h3 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  ☕ Posiłki i napoje
                </h3>
                <p className="text-slate-700 mb-2">
                  Przysługują Ci darmowe posiłki w ilości adekwatnej do czasu oczekiwania.
                </p>
                <p className="text-sm text-slate-600">
                  <em>Praktyka:</em> Zbieraj paragony za kanapki, wodę czy kolację i śniadanie w hotelu. 
                  Uwaga: linie zazwyczaj <strong>odmawiają zwrotu za alkohol</strong>.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Co robić na lotnisku? Złota instrukcja:
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <ol className="space-y-4 text-slate-700 list-decimal ml-4">
                <li>
                  <strong>Szukaj przedstawiciela:</strong> Najpierw zgłoś się do biura danej linii (tzw. handling agent). Poproś o voucher na hotel.
                </li>
                <li>
                  <strong>Brak pomocy? Działaj sam:</strong> Jeśli zgaszono światła i nikt nic nie wie, nie musisz spać na podłodze. Znajdź hotel w okolicy na własną rękę.
                </li>
                <li>
                  <strong>Zastrzeż kartę / Weź faktury:</strong> Rezerwując hotel czy Ubera, bezwzględnie proś o faktury i paragony na <strong>swoje nazwisko widniejące na bilecie</strong>. Bez dowodu zakupu przewoźnik Cię zignoruje.
                </li>
                <li>
                  <strong>Bądź rozsądny:</strong> Wynajmij zwykły pokój hotelowy 3* lub 4*. Linie lotnicze zwracają za niezbędne wydatki, a nocleg za 5000 PLN w Ritzu zostanie odrzucony jako fanaberia.
                </li>
              </ol>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy Ryanar zwróci mi za nocleg u rodziny w pobliżu lotniska?
                </h3>
                <p className="text-slate-700">
                  Nie. Zwroty dotyczą wyłącznie udokumentowanych wydatków potwierdzonych imiennymi fakturami VAT (hotele, hostele, Airbnb z fakturą). 
                  Spanie u znajomych nie generuje oficjalnych kosztów noclegowych do zwrotu.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Jeśli mój lot odwołano z powodu mgły i wziąłem hotel, to odzyskam 250 euro?
                </h3>
                <p className="text-slate-700">
                  <strong>Prawdopodobnie nie odzyskasz 250 €.</strong> Mgła to tzw. okoliczność nadzwyczajna wykluczająca odszkodowanie gotówkowe. 
                  Jednak masz stuprocentowe prawo wysłać do linii rachunki za sam hotel i jedzenie — to <strong>muszą Ci zwrócić</strong> w ramach prawa do opieki.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Co jeśli mieszkam w mieście, z którego wylatuję?
                </h3>
                <p className="text-slate-700">
                  Tu orzecznictwo jest lekko rozbieżne. Jeśli Twój lot z lotniska blisko Twojego domu opóźnia się o noc, linia często pokrywa jedynie 
                  koszty transportu do Twojego własnego domu i z powrotem na lotnisko. Płatny hotel w miejscu zamieszkania rzadko jest akceptowany, 
                  chyba że dotarcie do domu jest bardzo kosztowne/niemożliwe.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Lot przesunięty na kolejny dzień? Żądaj swoich 600 € i zwrotu za hotel!
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Złóż jednocześnie roszczenie o zwrot rachunków za nocleg oraz o ustawowe odszkodowanie z WE 261/2004. 
                ClaimWinger to zespół specjalistów, którzy wyegzekwują Twoje prawa na drodze przedsądowej lub przed sądem!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Odzyskaj pieniądze
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ile-mozesz-dostac"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Kalkulator odszkodowania
                  <Euro className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Powiązane artykuły:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/ile-odszkodowania-opozniony-lot"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Ile odszkodowania za opóźniony lot?
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Tabela odszkodowań 250€, 400€, 600€ w przypadku winy przewoźnika.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  WE 261/2004 — kompletny przewodnik
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Prawa pasażera z Unii Europejskiej opisane w prostych słowach.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/nadzwyczajne-okolicznosci-odszkodowanie"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Nadzwyczajne okoliczności i siła wyższa
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Dowiedz się, kiedy mgła lub uderzenie pioruna blokuje gotówkę WE261.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
