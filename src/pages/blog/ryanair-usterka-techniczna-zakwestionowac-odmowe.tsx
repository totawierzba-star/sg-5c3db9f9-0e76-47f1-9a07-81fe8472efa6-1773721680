import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, FileText, CheckCircle, XCircle, Scale, Mail, Phone } from "lucide-react";

export default function RyanairUsterkaTechnicznaZakwestionowacOdmowe() {
  return (
    <Layout>
      <SEO
        title="Ryanair usterka techniczna — jak zakwestionować odmowę? [2026]"
        description="Ryanair odmówił wypłaty, powołując się na usterkę techniczną? Dowiedz się, jak skutecznie zakwestionować odmowę i wygrać sprawę o 250-600 €."
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>/</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>/</li>
              <li className="text-gray-900">Ryanair usterka techniczna</li>
            </ol>
          </nav>

          {/* Header */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="h-4 w-4" />
              Ryanair
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Ryanair usterka techniczna — jak zakwestionować odmowę?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Praktyczny przewodnik: jak skutecznie walczyć z odmową Ryanair powołującego się na &quot;technical defect&quot;
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Czas czytania: 8 min</span>
              <span>•</span>
              <span>Aktualizacja: 26.02.2025</span>
            </div>
          </header>

          {/* Quick Answer - AI Overview Optimization */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Szybka odpowiedź
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              <strong>NIE każda usterka techniczna zwalnia Ryanair z wypłaty odszkodowania.</strong> Linia lotnicza musi udowodnić, że:
            </p>
            <ul className="space-y-3 text-base">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Usterka była <strong>nieoczekiwana i nieunikniona</strong> (nie wynikała z zaniedbań konserwacyjnych)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Podjęto <strong>wszystkie racjonalne środki</strong>, aby jej zapobiec</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Problem był <strong>poza zwykłym wykonywaniem obowiązków</strong> przewoźnika</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <p className="text-sm font-medium">
                ⚖️ <strong>Orzecznictwo TSUE:</strong> Zwykłe awarie techniczne NIE są nadzwyczajnymi okolicznościami (wyrok C-549/07 Wallentin-Hermann).
              </p>
            </div>
          </div>

          {/* Main Content */}
          <section className="prose prose-lg max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <XCircle className="h-8 w-8 text-red-600" />
              Dlaczego Ryanair najczęściej odmawia wypłaty?
            </h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-900 mb-3">Typowa odpowiedź Ryanair:</h3>
              <p className="text-gray-700 italic mb-0">
                &quot;Your flight was cancelled/delayed due to an <strong>unexpected technical defect</strong> which constitutes an extraordinary circumstance under EU Regulation 261/2004. We are therefore not liable to pay compensation.&quot;
              </p>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Ryanair bardzo często powołuje się na &quot;usterkę techniczną&quot; jako nadzwyczajną okoliczność. <strong>W rzeczywistości 80-90% takich odmów jest bezprawnych</strong> i można je skutecznie zakwestionować.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Kiedy usterka techniczna NIE jest nadzwyczajną okolicznością?</h3>

            <div className="grid gap-6 mb-8">
              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">1. Zużycie eksploatacyjne i zaniedbania konserwacyjne</h4>
                <p className="text-gray-700 mb-3">
                  Jeśli usterka wynikała z normalnego zużycia części, braku regularnej konserwacji lub niedotrzymania harmonogramu przeglądów — Ryanair MUSI zapłacić.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Przykłady: zużyty silnik, wyciekający olej hydrauliczny, problemy z oponami, uszkodzone uszczelki.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">2. Problemy znane Ryanair przed lotem</h4>
                <p className="text-gray-700 mb-3">
                  Jeśli usterka była <strong>znana wcześniej</strong> (np. samolot wrócił z poprzedniego lotu z raportem o usterze), linia lotnicza miała czas na naprawę — nie może powołać się na &quot;unexpected defect&quot;.
                </p>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">3. Awarie standardowych komponentów</h4>
                <p className="text-gray-700 mb-3">
                  TSUE orzekł, że awarie elementów objętych zwykłą konserwacją NIE są nadzwyczajne (np. awaria systemu klimatyzacji, drzwi, światła kokpitu).
                </p>
                <p className="text-sm text-gray-600 italic">
                  Wyrok C-549/07 Wallentin-Hermann: <em>&quot;Technical problems which come to light during maintenance of aircraft or on account of failure to carry out such maintenance cannot constitute, in themselves, &apos;extraordinary circumstances&apos;.&quot;</em>
                </p>
              </div>

              <div className="bg-white border-l-4 border-green-600 p-6 shadow-sm">
                <h4 className="font-bold text-lg text-gray-900 mb-2">✅ Kiedy usterka MOŻE być nadzwyczajną okolicznością?</h4>
                <p className="text-gray-700">
                  Tylko wyjątkowe przypadki: <strong>ukryta wada fabryczna</strong> (hidden manufacturing defect), <strong>sabotaż</strong>, <strong>uderzenie ptaka powodujące uszkodzenie silnika</strong>, groźba terrorystyczna.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Jak skutecznie zakwestionować odmowę Ryanair?
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Krok po kroku — plan działania:</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Wyślij pismo odwoławcze (Appeal Letter)</h4>
                    <p className="text-gray-700 mb-3">
                      Odpowiedz na odmowę Ryanair, <strong>żądając szczegółowego wyjaśnienia</strong> natury usterki i podjętych środków zapobiegawczych.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-700 font-medium mb-2">Przykładowy szablon (po angielsku):</p>
                      <p className="text-xs text-gray-600 italic leading-relaxed">
                        &quot;We reject your claim that the technical defect constituted an extraordinary circumstance. Under EU Regulation 261/2004 and ECJ case law (C-549/07), ordinary technical failures do not exempt you from compensation. Please provide: (1) the exact nature of the defect, (2) maintenance records showing it was unforeseeable, (3) evidence of all reasonable measures taken. Failure to provide this information within 14 days will result in legal action.&quot;
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Złóż skargę do organu nadzoru</h4>
                    <p className="text-gray-700 mb-3">
                      W Polsce: <strong>Urząd Lotnictwa Cywilnego (ULC)</strong><br />
                      W Irlandii (siedziba Ryanair): <strong>Commission for Aviation Regulation (CAR)</strong>
                    </p>
                    <p className="text-sm text-gray-600">
                      Organy mogą zobowiązać Ryanair do wypłaty lub nałożyć karę administracyjną.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Europejskie postępowanie w sprawie drobnych roszczeń (ESCP)</h4>
                    <p className="text-gray-700 mb-3">
                      Jeśli Ryanair nadal odmawia, złóż <strong>pozew elektroniczny przez formularz ESCP</strong> (European Small Claims Procedure). Koszt: ~35 €, czas: 3-6 miesięcy.
                    </p>
                    <p className="text-sm text-gray-600">
                      🌐 Formularz: <a href="https://e-justice.europa.eu/content_small_claims-354-pl.do" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">e-justice.europa.eu</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">Skorzystaj z pomocy ClaimWinger (bez ryzyka)</h4>
                    <p className="text-gray-700 mb-3">
                      ClaimWinger zajmie się całą sprawą za Ciebie — <strong>zapłacisz tylko w przypadku sukcesu</strong> (25% + VAT od odzyskanej kwoty). Zero ryzyka, zero ukrytych kosztów.
                    </p>
                    <a 
                      href="https://claimwinger.com/pl/opozniony-lot" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Sprawdź swoje odszkodowanie
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              Jakie dokumenty zebrać?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">✅ Dokumenty które MASZ:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Potwierdzenie rezerwacji (booking confirmation)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Karty pokładowe (boarding passes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Zrzuty ekranu z tablicy odlotów pokazującej opóźnienie/odwołanie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Korespondencja z Ryanair (email z odmową)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-3">📋 Dokumenty które MUSISZ ZAŻĄDAĆ od Ryanair:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Szczegółowy opis usterki</strong> (technical log entry)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Protokoły konserwacyjne</strong> samolotu (maintenance records)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Dowód podjęcia wszystkich racjonalnych środków</strong> zapobiegawczych</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <span>Wyjaśnienie, dlaczego usterka była &quot;unexpected and unavoidable&quot;</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-600 p-6">
              <p className="text-gray-700">
                <strong>💡 Wskazówka:</strong> Ryanair rzadko dostarcza te dokumenty dobrowolnie. Brak dostarczenia dowodów <strong>działa na Twoją korzyść w postępowaniu sądowym</strong> — sąd uzna, że linia nie udowodniła nadzwyczajnych okoliczności.
              </p>
            </div>
          </section>

          {/* FAQ Section - Schema.org markup */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Najczęściej zadawane pytania (FAQ)</h2>
            
            <div className="space-y-6">
              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy każda usterka techniczna to nadzwyczajna okoliczność?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE.</strong> Tylko wyjątkowe, nieprzewidywalne usterki (np. ukryta wada fabryczna, sabotaż) mogą być nadzwyczajną okolicznością. Zwykłe awarie techniczne, zużycie eksploatacyjne, problemy konserwacyjne <strong>NIE zwalniają z wypłaty</strong> (wyrok TSUE C-549/07).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ryanair nie podał szczegółów usterki — co robić?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Wyślij <strong>appeal letter</strong> żądając: (1) dokładnego opisu usterki, (2) protokołów konserwacyjnych, (3) dowodu podjęcia wszystkich racjonalnych środków. Jeśli Ryanair nie dostarczy tych informacji w 14 dni, złóż pozew — <strong>brak dowodów działa na Twoją korzyść</strong>.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Ile czasu mam na zakwestionowanie odmowy?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  W Polsce: <strong>3 lata od daty lotu</strong> (termin przedawnienia roszczenia). Irlandia (siedziba Ryanair): <strong>6 lat</strong>. Zalecamy działać szybko — im szybciej zaczniesz, tym większe szanse na sukces.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Czy muszę płacić za prawnika?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>NIE.</strong> Możesz samodzielnie złożyć pozew przez <strong>europejskie postępowanie w sprawie drobnych roszczeń (ESCP)</strong> — koszt ~35 €, obsługa online, nie potrzebujesz prawnika. Alternatywnie: ClaimWinger zajmie się wszystkim za prowizję success fee (płacisz tylko po wygranej).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm group">
                <summary className="font-bold text-lg text-gray-900 cursor-pointer flex justify-between items-center">
                  <span>Jakie są szanse na wygraną?</span>
                  <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  <strong>Bardzo wysokie (80-90%)</strong>, jeśli masz dowody na opóźnienie/odwołanie. Ryanair rzadko dostarcza przekonujące dowody nadzwyczajnych okoliczności — większość ich odmów opartych na &quot;technical defect&quot; zostaje odrzucona przez sądy.
                </p>
              </details>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ryanair odmówił wypłaty? Nie rezygnuj!
              </h2>
              <p className="text-lg mb-6 opacity-90">
                ClaimWinger pomoże Ci odzyskać 250-600 € odszkodowania. Sprawdź swoje prawa w 2 minuty — <strong>bez ryzyka, płacisz tylko po wygranej</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://claimwinger.com/pl/opozniony-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Sprawdź odszkodowanie za opóźniony lot
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a 
                  href="https://claimwinger.com/pl/odwolany-lot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors"
                >
                  Sprawdź odszkodowanie za odwołany lot
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Powiązane artykuły</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/blog/ryanair-odmowil-odszkodowania" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Ryanair odmówił wypłaty — co robić?
                </h3>
                <p className="text-gray-600 text-sm">
                  Poznaj 3 skuteczne metody wymuszenia wypłaty odszkodowania od Ryanair.
                </p>
              </Link>

              <Link href="/blog/nadzwyczajne-okolicznosci-odszkodowanie" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Nadzwyczajne okoliczności — kompletny przewodnik
                </h3>
                <p className="text-gray-600 text-sm">
                  Kiedy linia lotnicza może legalnie odmówić wypłaty? Sprawdź prawne definicje.
                </p>
              </Link>

              <Link href="/blog/pozew-sadowy-ryanair-drobne-roszczenia" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Pozew sądowy Ryanair — europejskie postępowanie
                </h3>
                <p className="text-gray-600 text-sm">
                  Jak złożyć pozew elektroniczny przez ESCP? Krok po kroku (koszt ~35 €).
                </p>
              </Link>

              <Link href="/blog/prawa-pasazera-ryanair" className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 mb-2">
                  Prawa pasażera Ryanair — kompletny przewodnik
                </h3>
                <p className="text-gray-600 text-sm">
                  Wszystko o EU261: kiedy przysługuje Ci odszkodowanie, posiłki, hotel?
                </p>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
}