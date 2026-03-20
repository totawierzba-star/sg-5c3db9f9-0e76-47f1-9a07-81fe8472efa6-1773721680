import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertTriangle, Building, Euro, ArrowRight, XCircle } from "lucide-react";

export default function UpadlaLiniaLotniczaOdszkodowanie() {
  return (
    <Layout>
      <SEO
        title="Upadła linia lotnicza — co z odszkodowaniem?"
        description="Linia lotnicza zbankrutowała i Twój lot został odwołany? Sprawdź, czy masz szansę na odszkodowanie i jak odzyskać pieniądze za bilet."
        url="https://problemlot.pl/blog/upadla-linia-lotnicza-odszkodowanie"
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
            <span className="text-slate-900">Upadła linia lotnicza — odszkodowanie</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <Building className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Sytuacje Specjalne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Upadła linia lotnicza — co z odszkodowaniem i zwrotem za bilet?
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-slate-600">
              <span>📅 11 marca 2026</span>
              <span>⏱️ 7 min czytania</span>
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
                  Gdy linia lotnicza ogłasza upadłość (bankructwo), odzyskanie standardowego odszkodowania z WE 261/2004 
                  staje się niezwykle trudne. W pierwszej kolejności powinieneś walczyć o <strong>zwrot kosztów biletu</strong> 
                  poprzez procedurę chargeback (jeśli płaciłeś kartą) lub z ubezpieczenia podróżnego. 
                  Twoje roszczenia spadają na koniec kolejki wierzycieli.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Bankructwa linii lotniczych (jak WOW air, Thomas Cook, Flybe czy Air Berlin) to koszmar dla pasażerów. 
              Z dnia na dzień samoloty zostają uziemione, a tysiące osób traci swoje loty. Co gorsza, prawo unijne 
              WE 261/2004, które tak dobrze chroni przed opóźnieniami, w przypadku upadłości okazuje się w dużej mierze nieskuteczne.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Dlaczego? Ponieważ zbankrutowana firma nie ma środków na wypłatę roszczeń pasażerskich. Zanim syndyk masy 
              upadłościowej cokolwiek Ci wypłaci, najpierw musi zaspokoić urzędy skarbowe, banki i pracowników. 
              W tym artykule pokazujemy, <strong>jak realnie odzyskać pieniądze</strong> za bilet i z kim się kontaktować.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-blue-600" />
              Zwrot za bilet vs Odszkodowanie WE 261
            </h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Brutalna prawda o odszkodowaniu (250-600 €)
              </h3>
              <p className="text-slate-700 mb-4">
                Formalnie upadłość firmy nie zwalnia jej z przestrzegania Rozporządzenia WE 261/2004. 
                Prawnie nadal przysługuje Ci 250, 400 lub 600 euro za odwołany lot. Jednak <strong>w praktyce odzyskanie tych środków graniczy z cudem</strong>. 
                Pasażerowie są tzw. wierzycielami niezabezpieczonymi — są na samym końcu listy osób, którym upadła firma winna jest pieniądze.
              </p>
              <p className="text-slate-700">
                Oznacza to, że zamiast walczyć o mityczne odszkodowanie we261, należy skupić się na <strong>odzyskaniu samej ceny biletu</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Największe szanse odzyskania:
                </h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Cena biletu</strong> (zapłacona kartą kredytową/debetową)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Pakiet all-inclusive</strong> (chroniony przez Turystyczny Fundusz Gwarancyjny)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">•</span>
                    <span><strong>Bilet kupiony przez OTA</strong> (jeśli miałeś ich dodatkowe ubezpieczenie)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Prawie niemożliwe do odzyskania:
                </h3>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Odszkodowanie 250-600 €</strong> z WE 261/2004</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Koszty opieki</strong> (hotel, taksówka na lotnisku)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 font-bold">•</span>
                    <span><strong>Bilety kupione przelewem bankowym</strong> (bezpośrednio u linii)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              3 sposoby na odzyskanie pieniędzy za bilet
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Procedura Chargeback (Płatność Kartą) — Najskuteczniejsza!
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Jeśli za bilet płaciłeś kartą (kredytową lub debetową) z logo Visa lub Mastercard, jesteś chroniony. 
                      Procedura obciążenia zwrotnego (chargeback) pozwala bankowi cofnąć transakcję, gdy usługodawca nie wywiązał się z umowy.
                    </p>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="font-semibold text-sm text-blue-900 mb-2">Co musisz zrobić:</p>
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Skontaktuj się ze swoim bankiem (infolinia lub aplikacja)</li>
                        <li>• Zgłoś reklamację transakcji powołując się na "niedostarczenie usługi z powodu upadłości"</li>
                        <li>• Dołącz potwierdzenie rezerwacji i informację z mediów/strony linii o upadłości</li>
                        <li>• Bank zwróci pieniądze z reguły w ciągu 30-60 dni</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-indigo-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Turystyczny Fundusz Gwarancyjny (Pakiety Wakacyjne)
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Jeśli lot był częścią wycieczki z biurem podróży (all-inclusive), jesteś bezpieczny. 
                      Zgodnie z dyrektywą unijną, to <strong>organizator wycieczki ponosi pełną odpowiedzialność</strong> za realizację imprezy.
                    </p>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                      <ul className="space-y-1 text-sm text-slate-700">
                        <li>• Biuro podróży musi zorganizować lot powrotny inną linią (na własny koszt)</li>
                        <li>• Jeśli wakacje się nie odbyły, biuro musi zwrócić całą wpłaconą kwotę</li>
                        <li>• W przypadku bankructwa samego biura, odszkodowanie wypłaca Turystyczny Fundusz Gwarancyjny (TFG) lub marszałek województwa</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-purple-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Ubezpieczenie podróżne (Polisa Turystyczna)
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Część dobrych ubezpieczeń podróżnych zawiera klauzulę chroniącą przed "niewypłacalnością przewoźnika" 
                      (SAFI - Scheduled Airline Failure Insurance).
                    </p>
                    <p className="text-sm text-slate-700">
                      Sprawdź OWU (Ogólne Warunki Ubezpieczenia) swojej polisy. Jeśli taka klauzula występuje, 
                      skontaktuj się z ubezpieczycielem, aby uzyskać zwrot kosztów biletu, a często również zwrot 
                      kosztów za przymusowy zakup nowego biletu u innej linii.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Najczęściej zadawane pytania (FAQ)
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Co zrobić, gdy płaciłem za bilet przelewem bankowym, a nie kartą?
                </h3>
                <p className="text-slate-700">
                  Niestety, jesteś w trudnej sytuacji (brak chargebacku). Musisz zgłosić swoją wierzytelność syndykowi masy 
                  upadłościowej w kraju rejestracji linii. Proces trwa latami, a szansa na odzyskanie gotówki jest minimalna. 
                  Sprawdź, czy masz ubezpieczenie podróżne z klauzulą SAFI.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy inne linie lotnicze przejmą mój bilet?
                </h3>
                <p className="text-slate-700">
                  Bardzo rzadko za darmo. Czasem w przypadku głośnych bankructw, konkurencyjne linie oferują tzw. 
                  "rescue fares" (taryfy ratunkowe) — mocno obniżone ceny biletów dla poszkodowanych pasażerów, aby pomóc im wrócić do domu. 
                  Będziesz jednak musiał zapłacić z własnej kieszeni.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy ClaimWinger może pomóc w uzyskaniu odszkodowania od upadłej linii?
                </h3>
                <p className="text-slate-700">
                  Większość firm odszkodowawczych (w tym ClaimWinger) nie przyjmuje spraw przeciwko przewoźnikom w upadłości likwidacyjnej. 
                  Wynika to z faktu, że koszty prawne zgłoszenia wierzytelności przewyższają potencjalne odszkodowanie, którego odzyskanie i tak jest bliskie zeru.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Utknąłem na lotnisku za granicą z powodu bankructwa. Kto zapłaci za mój hotel?
                </h3>
                <p className="text-slate-700">
                  Początkowo musisz pokryć te koszty sam. Jeśli masz bilet powrotny od innej linii na następny dzień, 
                  zapłać za hotel kartą kredytową. Ubezpieczyciel turystyczny (jeśli masz dobrą polisę) powinien zwrócić te koszty po Twoim powrocie.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Masz problem z inną linią, która NIE ogłosiła upadłości?
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                Twój lot opóźnił się o 3 godziny lub został odwołany, a linia normalnie funkcjonuje (np. Ryanair, LOT, Wizz Air)? 
                Przysługuje Ci od 250 do 600 € odszkodowania! Płacisz prowizję tylko wtedy, gdy wygramy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Odzyskaj odszkodowanie
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/ile-mozesz-dostac"
                  className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
                >
                  Kalkulator WE 261
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
                href="/blog/bilet-ota-kiwi-booking-esky-odszkodowanie"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Bilet przez OTA (Kiwi, Booking, eSky) — czy wpływa na odszkodowanie?
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Sprawdź, czy zakup przez pośrednika zmienia Twoje prawa do odszkodowania za opóźniony lot.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/lot-czarterowy-we261-wakacje-all-inclusive"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Lot czarterowy a WE 261 — czy wakacje all-inclusive są chronione?
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Prawa pasażera z pakietem turystycznym: dlaczego biuro nie płaci, a linia tak.
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
                  WE 261/2004 — kompletny przewodnik praw pasażera
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Dowiedz się wszystkiego o rozporządzeniu chroniącym pasażerów lotniczych w UE.
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
