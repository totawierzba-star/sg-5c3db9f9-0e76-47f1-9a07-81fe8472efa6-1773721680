import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Baby, Users, Euro, AlertTriangle, CheckCircle2, FileText } from "lucide-react";

export default function DzieckoInfantOdszkodowaniePage() {
  return (
    <Layout>
      <SEO 
        title="Odszkodowanie za lot z dzieckiem i niemowlęciem (infant) – prawa pasażera"
        description="Czy niemowlę bez własnego miejsca dostaje odszkodowanie za opóźniony lot? Sprawdź prawa dzieci i rodziców przy opóźnieniach i odwołaniach lotów."
      />
      
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">Strona główna</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <span>/</span>
          <span className="text-gray-900">Odszkodowanie dziecko infant</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            <Baby className="w-4 h-4" />
            Prawo lotnicze
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Podróż z małym dzieckiem (infant) a odszkodowanie za opóźniony lot
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>20 lutego 2025</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min czytania</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          {/* Lead */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg mb-8">
            <p className="text-lg text-gray-800 leading-relaxed m-0">
              <strong>Czy niemowlę podróżujące na kolanach rodzica ma prawo do odszkodowania za opóźniony lot?</strong> To jedno z najczęściej zadawanych pytań przez rodziców. Odpowiedź brzmi: <strong>TAK</strong> – dzieci poniżej 2. roku życia (tzw. infants) również mają prawo do odszkodowania <strong>250–600 EUR</strong>, mimo że nie zajmują osobnego fotela.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Users className="w-8 h-8 text-blue-600" />
              Kategorie wiekowe dzieci w lotnictwie
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Linie lotnicze dzielą małych pasażerów na dwie kategorie ze względu na wiek:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Baby className="w-6 h-6 text-blue-600" />
                  Infant (0–23 miesiące)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Wiek:</strong> Od urodzenia do 2. roku życia (do dnia 2. urodzin)</li>
                  <li><strong>Miejsce:</strong> Podróżuje na kolanach rodzica (bez osobnego fotela)</li>
                  <li><strong>Bilet:</strong> Zwykle 10% ceny biletu dorosłego lub darmowy</li>
                  <li><strong>Bagaż:</strong> Prawo do bagażu rejestrowanego + wózka</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Users className="w-6 h-6 text-green-600" />
                  Child (2–11 lat)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Wiek:</strong> Od 2. do 12. roku życia</li>
                  <li><strong>Miejsce:</strong> Zajmuje własny fotel</li>
                  <li><strong>Bilet:</strong> Zwykle 75–90% ceny biletu dorosłego</li>
                  <li><strong>Bagaż:</strong> Taki sam jak dorosły pasażer</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>⚠️ Ważne:</strong> Kategoria wiekowa jest określana na <strong>dzień wylotu</strong>. Jeśli dziecko kończy 2 lata w trakcie podróży (np. podczas powrotu), niektóre linie wymagają osobnego fotela na lot powrotny.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <Euro className="w-8 h-8 text-blue-600" />
              Czy infant dostaje odszkodowanie za opóźniony lot?
            </h2>

            <div className="bg-green-50 border border-green-500 rounded-lg p-6 mb-6">
              <p className="text-xl font-bold text-green-800 mb-3">
                ✅ TAK – niemowlę ma prawo do pełnego odszkodowania!
              </p>
              <p className="text-gray-700">
                Rozporządzenie UE 261/2004 <strong>nie rozróżnia</strong> pasażerów ze względu na wiek czy cenę biletu. Każdy pasażer (również infant podróżujący na kolanach) ma <strong>równe prawo do odszkodowania</strong> przy opóźnieniu lub odwołaniu lotu.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💶 Ile dostanie niemowlę za opóźniony lot?</h3>
              <p className="text-gray-700 mb-4">
                Kwota odszkodowania zależy od <strong>długości trasy lotu</strong>, nie od wieku pasażera ani ceny biletu:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>250 EUR</strong> – loty do 1 500 km (np. Warszawa–Berlin)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>400 EUR</strong> – loty 1 500–3 500 km (np. Warszawa–Madryt)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>600 EUR</strong> – loty powyżej 3 500 km (np. Warszawa–Nowy Jork)</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">📊 Przykład:</h3>
              <p className="text-gray-700">
                <strong>Rodzina leci z Warszawy do Barcelony (ok. 2 000 km).</strong>
              </p>
              <ul className="mt-3 space-y-2 text-gray-700">
                <li>• Mama: 400 EUR</li>
                <li>• Tata: 400 EUR</li>
                <li>• 3-letnie dziecko (osobny fotel): 400 EUR</li>
                <li>• 1-roczne niemowlę (na kolanach): <strong>400 EUR</strong></li>
              </ul>
              <p className="font-bold text-blue-700 mt-4">
                RAZEM: 4 × 400 EUR = <strong>1 600 EUR (ok. 7 000 PLN)</strong>
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900 mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak ubiegać się o odszkodowanie za dziecko?
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Sprawdź, czy lot kwalifikuje się do odszkodowania</h3>
                  <p className="text-gray-700">
                    Odszkodowanie przysługuje przy <strong>opóźnieniu powyżej 3 godzin</strong> lub <strong>odwołaniu lotu</strong> (poza nadzwyczajnymi okolicznościami). Więcej: <Link href="/blog/odszkodowanie-lot-polish-airlines" className="text-blue-600 hover:underline">Przewodnik po UE 261/2004</Link>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Złóż reklamację w imieniu dziecka</h3>
                  <p className="text-gray-700">
                    Rodzic/opiekun prawny składa reklamację <strong>osobno za każdego pasażera</strong> (w tym za niemowlę). W reklamacji podaj:
                  </p>
                  <ul className="mt-2 ml-6 space-y-1 text-gray-700">
                    <li>• Dane dziecka (imię, nazwisko, data urodzenia)</li>
                    <li>• Numer rezerwacji/biletu</li>
                    <li>• Dowód, że dziecko faktycznie leciało (karta pokładowa, e-mail potwierdzenia)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Kto otrzyma pieniądze?</h3>
                  <p className="text-gray-700">
                    Odszkodowanie dla dziecka poniżej 18. roku życia jest wypłacane <strong>na konto rodzica/opiekuna prawnego</strong>. Możesz podać swój numer konta jako odbiorca środków za całą rodzinę.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-6">
              <p className="text-gray-800">
                <strong>💡 Wskazówka:</strong> Jeśli linia lotnicza próbuje odmówić wypłaty odszkodowania dla niemowlęcia argumentując, że „bilet był darmowy", powołaj się na art. 3 ust. 2 Rozporządzenia UE 261/2004, który nie uzależnia prawa do odszkodowania od ceny biletu.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-8 my-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">
                Latasz z rodziną? Możesz dostać nawet kilka tysięcy złotych!
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                ClaimWinger pomoże Ci wyegzekwować odszkodowanie dla całej rodziny – w tym dla niemowląt i małych dzieci. Bez ryzyka, bez ukrytych kosztów.
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                Sprawdź swoje roszczenie
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-blue-200 mt-4">
                ✓ Bezpłatna weryfikacja roszczenia<br />
                ✓ Płacisz tylko w przypadku sukcesu (25% prowizji)<br />
                ✓ Zajmiemy się całą biurokracją za Ciebie
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Czy linie lotnicze próbują unikać wypłaty odszkodowania dla dzieci?
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              Niestety, niektóre linie lotnicze próbują wykorzystywać niewielką świadomość prawną rodziców i <strong>odmawiają wypłaty odszkodowania dla niemowląt</strong>. Najczęstsze „wymówki":
            </p>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-bold text-red-800 mb-2">❌ „Bilet dla niemowlęcia był darmowy, więc nie przysługuje odszkodowanie"</p>
                <p className="text-gray-700 text-sm">
                  <strong>Odpowiedź:</strong> Rozporządzenie UE 261/2004 <strong>nie uzależnia</strong> prawa do odszkodowania od ceny biletu. Nawet darmowy bilet kwalifikuje się do rekompensaty.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-bold text-red-800 mb-2">❌ „Niemowlę nie miało osobnego fotela, więc nie jest pasażerem"</p>
                <p className="text-gray-700 text-sm">
                  <strong>Odpowiedź:</strong> Niemowlę jest w pełni prawnym pasażerem z rezerwacją i numerem biletu. Miejsce siedzące nie jest kryterium.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-4">
                <p className="font-bold text-red-800 mb-2">❌ „Odszkodowanie przysługuje tylko jednemu rodzicowi, nie za każde dziecko"</p>
                <p className="text-gray-700 text-sm">
                  <strong>Odpowiedź:</strong> Każdy pasażer (rodzic + każde dziecko) ma <strong>osobne prawo do odszkodowania</strong>. To nie jest „odszkodowanie rodzinne", lecz indywidualne roszczenie każdego pasażera.
                </p>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6">
              Jeśli spotkasz się z odmową, nie rezygnuj! Możesz skorzystać z pomocy specjalisty od roszczeń lotniczych (np. <a href="https://claimwinger.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">ClaimWinger</a>), który wyegzekwuje odszkodowanie dla całej rodziny.
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Najczęściej zadawane pytania
            </h2>

            <div className="space-y-6">
              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę wykupić osobny fotel dla niemowlęcia, aby miało większy komfort?
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Możesz wykupić osobny fotel dla niemowlęcia (np. aby zamontować fotelik samochodowy). W takim przypadku płacisz za bilet jak za starsze dziecko (75–90% ceny biletu dorosłego), a niemowlę podróżuje w foteliku zapiętym pasami.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę zabrać wózek dziecięcy do samolotu?
                </summary>
                <p className="text-gray-700 mt-4">
                  Tak! Większość linii lotniczych pozwala zabrać <strong>wózek spacerowy/składany bezpłatnie</strong> jako dodatkowy bagaż. Możesz go zazwyczaj złożyć przy wejściu do samolotu i odebrać zaraz po wylądowaniu.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Co jeśli dziecko skończy 2 lata w trakcie podróży (np. podczas powrotu)?
                </summary>
                <p className="text-gray-700 mt-4">
                  <strong>Zasada:</strong> Kategoria wiekowa jest określana na dzień rozpoczęcia każdego lotu.
                  <ul className="mt-2 ml-6 space-y-1">
                    <li>• Lot w dniu urodzin lub wcześniej: infant (na kolanach)</li>
                    <li>• Lot po 2. urodzinach: child (osobny fotel)</li>
                  </ul>
                  Jeśli dziecko kończy 2 lata między lotem „tam" a „z powrotem", musisz wykupić osobny fotel na lot powrotny.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Czy mogę ubiegać się o odszkodowanie za dziecko starsze (np. 5-letnie)?
                </summary>
                <p className="text-gray-700 mt-4">
                  Oczywiście! Dzieci w wieku 2–11 lat (kategoria „child") mają <strong>dokładnie takie same prawa</strong> jak dorośli pasażerowie – 250–600 EUR za opóźniony lub odwołany lot.
                </p>
              </details>

              <details className="bg-gray-50 rounded-lg p-6 cursor-pointer">
                <summary className="font-bold text-lg text-gray-900">
                  Kto dostanie pieniądze za odszkodowanie dla dziecka?
                </summary>
                <p className="text-gray-700 mt-4">
                  Odszkodowanie dla dziecka poniżej 18. roku życia jest wypłacane <strong>rodzicowi lub opiekunowi prawnemu</strong>. Podajesz swój numer konta bankowego w reklamacji i otrzymujesz przelew za całą rodzinę (swoje + dzieci).
                </p>
              </details>
            </div>
          </section>

          {/* Related Articles */}
          <section className="border-t border-gray-200 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Przeczytaj również:
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/odszkodowanie-lot-polish-airlines" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Odszkodowanie LOT Polish Airlines
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Kompletny przewodnik po odszkodowaniach za opóźnione i odwołane loty LOT.
                  </p>
                </div>
              </Link>
              <Link href="/blog/jak-zlozyc-wniosek-odszkodowanie" className="group">
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                    Jak złożyć wniosek o odszkodowanie
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Praktyczny przewodnik krok po kroku dla pasażerów LOT, Ryanair i Wizz Air.
                  </p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}
