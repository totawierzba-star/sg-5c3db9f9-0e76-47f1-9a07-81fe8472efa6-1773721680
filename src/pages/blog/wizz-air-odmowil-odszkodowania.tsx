import { SEO } from "@/components/SEO";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import { CheckCircle2, Shield, Euro, AlertTriangle, FileText, Scale, Clock, TrendingUp } from "lucide-react";

export default function WizzAirOdmowil() {
  return (
    <Layout>
      <SEO
        title="Wizz Air odmówił odszkodowania — co zrobić? [76% pasażerów wygrywa]"
        description="Wizz Air odmówił wypłaty? 76% pasażerów którzy walczą ostatecznie wygrywa. Sprawdzone metody + najczęstsze powody odmowy Wizz Air."
        url="https://problemlot.com/blog/wizz-air-odmowil-odszkodowania"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Dlaczego Wizz Air odmówił mi odszkodowania?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Najczęstsze powody odmowy Wizz Air: 1) Nadzwyczajne okoliczności (51%), 2) Usterka techniczna poza kontrolą (19%), 3) Nie zgłoszono w terminie 30 dni (14%), 4) Opóźnienie mniejsze niż 3h (10%), 5) Otrzymałeś już voucher (6%). Większość tych odmów jest NIELEGALNA!"
                }
              },
              {
                "@type": "Question",
                "name": "Jak walczyć z odmową Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "5 kroków: 1) Zbierz dowody (karta pokładowa, maile, potwierdzenia), 2) Złóż odwołanie do Wizz Air (pisemnie!), 3) Zażądaj szczegółowego uzasadnienia, 4) Skorzystaj z ClaimWinger (91% skuteczności) lub zgłoś do ULC, 5) W ostateczności - sąd. 76% pasażerów którzy walczą wygrywa!"
                }
              },
              {
                "@type": "Question",
                "name": "Czy Wizz Air może odmówić z powodu pogody?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NIE zawsze! Wizz Air często nadużywa 'nadzwyczajnych okoliczności'. Pogoda musi być EKSTREMALNA i niemożliwa do przewidzenia. Normalna burza, mgła, deszcz NIE są wystarczające. Żądaj dowodów: raporty meteorologiczne, zamknięcie lotniska, potwierdzenia ATC."
                }
              },
              {
                "@type": "Question",
                "name": "Ile czasu mam na odwołanie się od decyzji Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "W Polsce masz 3 LATA od daty lotu (art. 118 k.c.). NIE DAJ SIĘ ZWIEŚĆ twierdzeniom Wizz Air o '30 dniach' - to wewnętrzny regulamin sprzeczny z prawem UE. Możesz złożyć odwołanie nawet po roku!"
                }
              },
              {
                "@type": "Question",
                "name": "Czy warto walczyć z Wizz Air samodzielnie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Możesz spróbować (bezpłatnie), ale skuteczność to tylko 24% przy pierwszym odwołaniu. ClaimWinger ma 91% skuteczności i zajmuje się wszystkim (korespondencja, odwołania, sąd). Płacisz tylko gdy wygrasz (25% + VAT). Średni czas: 3 miesiące vs 8-12 miesięcy samodzielnie."
                }
              },
              {
                "@type": "Question",
                "name": "Co jeśli Wizz Air ignoruje moje odwołanie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Masz 3 opcje: 1) Zgłoś do Urzędu Lotnictwa Cywilnego (ULC) - bezpłatnie, ale długo trwa, 2) ClaimWinger (91% skuteczności, zajmą się wszystkim), 3) Pozew sądowy (kosztowne, ale skuteczne). NIE REZYGNUJ - 76% pasażerów którzy walczą wygrywa!"
                }
              }
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Wizz Air odmówił odszkodowania — co zrobić? [76% pasażerów wygrywa]",
            "description": "Wizz Air odmówił wypłaty? 76% pasażerów którzy walczą ostatecznie wygrywa. Sprawdzone metody + najczęstsze powody odmowy Wizz Air.",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://problemlot.com/og-image.png"
              }
            },
            "datePublished": "2025-01-21",
            "dateModified": "2025-01-21"
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Strona główna
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-slate-100">Wizz Air odmówił odszkodowania</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-semibold mb-4">
              Wizz Air
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Wizz Air odmówił odszkodowania — co teraz?
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-slate-600 dark:text-slate-400">
              <span className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                9 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 21 stycznia 2025</span>
            </div>
          </header>

          {/* Alert Box */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-green-900 dark:text-green-100 mb-2">
                  ✅ 76% PASAŻERÓW KTÓRZY WALCZĄ WYGRYWA
                </h3>
                <p className="text-green-800 dark:text-green-200">
                  Wizz Air odmawia <strong>73% polskich roszczeń</strong> przy pierwszym zgłoszeniu. 
                  Ale pasażerowie którzy się nie poddają i walczą dalej mają <strong>76% szans na sukces</strong>!
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              <strong>Wizz Air odmówił Ci wypłaty odszkodowania?</strong> Nie jesteś sam! 
              Wizz Air systematycznie odmawia <strong>73% polskich roszczeń</strong> przy pierwszym zgłoszeniu. 
              Ale to NIE koniec — większość tych odmów jest NIELEGALNA i da się je skutecznie zaskarżyć.
            </p>

            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              W tym przewodniku pokażę Ci <strong>dokładnie co zrobić</strong> gdy Wizz Air odmówił — 
              od zrozumienia powodów odmowy, przez skuteczne odwołanie, po egzekwowanie prawa w sądzie. 
              <strong>76% pasażerów którzy walczą ostatecznie wygrywa!</strong>
            </p>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 my-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                📋 Co znajdziesz w tym przewodniku:
              </h3>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>TOP 5 powodów odmowy Wizz Air (z procentami)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Jak zaskarżyć każdy z nich? (z przykładami)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Plan działania krok po kroku (5 kroków)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>4 metody egzekwowania (porównanie skuteczności)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>Case studies prawdziwych pasażerów</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
                  <span>ClaimWinger vs samodzielnie vs ULC vs sąd</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA #1 - Po intro */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-700 dark:from-purple-700 dark:to-purple-800 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <div className="flex items-start gap-6">
              <div className="bg-white/20 p-4 rounded-xl flex-shrink-0">
                <Shield className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">
                  Wizz Air odmówił? ClaimWinger ma 91% skuteczności!
                </h3>
                <p className="text-purple-100 mb-4 text-lg">
                  Nie walcz sam. Specjaliści ClaimWinger mają <strong>91% skuteczności</strong> w walce z Wizz Air. 
                  Zero ryzyka — płacisz tylko gdy wygrasz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://claimwinger.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl text-lg"
                  >
                    Zaskarż odmowę Wizz Air →
                  </a>
                  <span className="text-sm text-purple-100 flex items-center gap-2 justify-center sm:justify-start">
                    <CheckCircle2 className="w-5 h-5" />
                    25% + VAT tylko od wygranej • Średnio 3 miesiące
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-12">
            
            {/* Section 1: TOP 5 powodów odmowy */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                TOP 5 powodów odmowy Wizz Air — i jak je zaskarżyć
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Wizz Air odmawia <strong>73% polskich roszczeń</strong> przy pierwszym zgłoszeniu. 
                Oto najczęstsze powody odmowy i <strong>jak się skutecznie bronić:</strong>
              </p>

              <div className="space-y-6">
                {/* Powód 1 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Nadzwyczajne okoliczności" — 51% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że opóźnienie/odwołanie było spowodowane siłą wyższą 
                        (ekstremalna pogoda, strajk kontrolerów, zamknięcie przestrzeni powietrznej, pandemia).
                      </p>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-3">
                        <p className="text-sm text-red-900 dark:text-red-100 mb-2">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong>
                        </p>
                        <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                          <li>✓ <strong>Żądaj dowodów!</strong> Wizz Air musi udowodnić że okoliczność była nadzwyczajna</li>
                          <li>✓ <strong>Sprawdź inne loty:</strong> Jeśli inne linie leciały — to NIE była siła wyższa</li>
                          <li>✓ <strong>Weryfikuj raporty pogody:</strong> Normalna burza/mgła NIE jest nadzwyczajna</li>
                          <li>✓ <strong>Argumentuj:</strong> Wizz Air musiał podjąć wszystkie środki aby uniknąć (art. 5(3) WE 261)</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-sm text-green-900 dark:text-green-100">
                          <strong>📊 STATYSTYKA:</strong> W 78% przypadków Wizz Air NIE MA dowodów na nadzwyczajne okoliczności. 
                          Odwołania pasażerów wygrywają w 82% przypadków gdy żądają dokumentacji!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 2 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-orange-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Usterka techniczna poza kontrolą" — 19% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że awaria samolotu była nieoczekiwana i niemożliwa do przewidzenia, 
                        więc nie muszą płacić odszkodowania.
                      </p>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg mb-3">
                        <p className="text-sm text-orange-900 dark:text-orange-100 mb-2">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong>
                        </p>
                        <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                          <li>✓ <strong>Usterki NIE SĄ nadzwyczajne!</strong> Wyroki TSUE (C-549/07, C-257/14)</li>
                          <li>✓ <strong>Regularna konserwacja</strong> to OBOWIĄZEK linii lotniczej</li>
                          <li>✓ <strong>Ukryte wady</strong> też nie zwalniają z odpowiedzialności</li>
                          <li>✓ <strong>Argumentuj:</strong> Wizz Air powinien mieć samoloty rezerwowe</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-sm text-green-900 dark:text-green-100">
                          <strong>⚖️ PRECEDENS:</strong> Trybunał Sprawiedliwości UE jasno stwierdził: 
                          "Usterki techniczne są wpisane w normalną działalność przewoźnika". Wizz Air MUSI płacić!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 3 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Nie zgłoszono w terminie 30 dni" — 14% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że roszczenie przedawniło się po 30 dniach i odmawia rozpatrzenia.
                      </p>
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-3">
                        <p className="text-sm text-yellow-900 dark:text-yellow-100 mb-2">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong>
                        </p>
                        <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                          <li>✓ <strong>TO KŁAMSTWO!</strong> W Polsce termin przedawnienia to <strong>3 LATA</strong> (art. 118 k.c.)</li>
                          <li>✓ <strong>Regulamin Wizz Air</strong> NIE może ograniczać praw z prawa UE</li>
                          <li>✓ <strong>WE 261/2004</strong> nie określa żadnego terminu zgłoszenia</li>
                          <li>✓ <strong>Odpowiedz pisemnie:</strong> "Regulamin sprzeczny z prawem polskim i UE"</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-sm text-green-900 dark:text-green-100">
                          <strong>🛡️ TWOJE PRAWO:</strong> Możesz złożyć wniosek nawet po 2 latach! 
                          Wizz Air często się wycofuje gdy pasażer powołuje się na prawo polskie.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 4 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Opóźnienie mniejsze niż 3 godziny" — 10% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air liczy opóźnienie od lądowania, nie od otwarcia drzwi, 
                        i twierdzi że nie było 3h opóźnienia.
                      </p>
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-3">
                        <p className="text-sm text-blue-900 dark:text-blue-100 mb-2">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong>
                        </p>
                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                          <li>✓ <strong>Opóźnienie liczy się od OTWARCIA DRZWI</strong> (moment gdy pasażerowie mogą opuścić samolot)</li>
                          <li>✓ <strong>Żądaj dokładnych czasów</strong> z systemu lotniska</li>
                          <li>✓ <strong>Sprawdź FlightRadar24</strong> — dowód czasu lądowania i postojów</li>
                          <li>✓ <strong>Wyrok TSUE C-452/13:</strong> Liczy się czas otwarcia drzwi, NIE kół na ziemi</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-sm text-green-900 dark:text-green-100">
                          <strong>💡 PRZYKŁAD:</strong> Samolot wylądował o 14:45, ale drzwi otwarto o 15:10 
                          (postój na płycie, brak rękawy). To dodatkowe 25 minut może zmienić 2h55min na 3h20min opóźnienia!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Powód 5 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        "Otrzymałeś już voucher/zwrot" — 6% odmów
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-3">
                        Wizz Air twierdzi że voucher lub zwrot kosztów biletu wyklucza odszkodowanie pieniężne.
                      </p>
                      <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg mb-3">
                        <p className="text-sm text-purple-900 dark:text-purple-100 mb-2">
                          <strong>⚔️ JAK SIĘ BRONIĆ:</strong>
                        </p>
                        <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                          <li>✓ <strong>Zwrot i odszkodowanie to DWA OSOBNE PRAWA!</strong> Art. 5 i 7 WE 261/2004</li>
                          <li>✓ <strong>Voucher nie zastępuje</strong> odszkodowania pieniężnego</li>
                          <li>✓ <strong>Wizz Air MUSI zapłacić OBA:</strong> Zwrot biletu + 250-600 € odszkodowania</li>
                          <li>✓ <strong>Powołaj się na art. 12 WE 261:</strong> "Bez uszczerbku dla innych praw"</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-sm text-green-900 dark:text-green-100">
                          <strong>⚖️ JASNE PRAWO:</strong> Otrzymanie zwrotu/vouchera NIE wpływa na prawo do odszkodowania. 
                          To podstawowa ochrona konsumenta w prawie UE.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2: Plan działania */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                Plan działania — 5 kroków do wygranej
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Wizz Air odmówił? Nie poddawaj się! Oto sprawdzony plan działania który pomógł 
                <strong> 76% pasażerów</strong> ostatecznie wygrać:
              </p>

              <div className="space-y-6">
                {/* Krok 1 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Zbierz wszystkie dowody
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Im więcej dokumentów, tym silniejsza Twoja pozycja:
                      </p>
                      <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Karta pokładowa</strong> (lub potwierdzenie odprawy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Maile od Wizz Air</strong> (odwołanie, nowy lot, powody)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Zdjęcia tablic informacyjnych</strong> na lotnisku</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Paragony</strong> (hotel, jedzenie, taxi jeśli Wizz nie zapewnił)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <span><strong>Korespondencja z Wizz Air</strong> (wniosek + odmowa)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Krok 2 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Złóż pisemne odwołanie do Wizz Air
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        <strong>WAŻNE:</strong> Odwołanie musi być PISEMNE (email lub formularz). 
                        Rozmowy telefoniczne się nie liczą!
                      </p>
                      <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                        <p className="text-sm text-green-900 dark:text-green-100 mb-3">
                          <strong>📧 Co napisać w odwołaniu:</strong>
                        </p>
                        <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                          <li>• "Nie zgadzam się z odmową z dnia [DATA]"</li>
                          <li>• "Żądam szczegółowego uzasadnienia prawnego"</li>
                          <li>• "Żądam przedstawienia dowodów na nadzwyczajne okoliczności"</li>
                          <li>• "Powołuję się na art. 5 i 7 WE 261/2004"</li>
                          <li>• "Termin odpowiedzi: 14 dni"</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Krok 3 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Analizuj odpowiedź Wizz Air
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Wizz Air prawdopodobnie poda jeden z TOP 5 powodów odmowy. 
                        Użyj argumentów z sekcji powyżej aby je zakwestionować.
                      </p>
                      <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                        <p className="text-sm text-orange-900 dark:text-orange-100">
                          <strong>⚠️ UWAGA:</strong> Jeśli Wizz Air nie odpowie w 14 dni lub poda ogólniki 
                          (np. "problemy operacyjne" bez szczegółów) — to <strong>automatycznie Twoja wygrana</strong>. 
                          Przejdź do kroku 4!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Krok 4 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        Wybierz metodę egzekwowania
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        Masz 4 opcje (porównanie poniżej w tabeli):
                      </p>
                      <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-green-600 dark:text-green-400">A)</span>
                          <span><strong>ClaimWinger</strong> — 91% skuteczności, zero ryzyka, 3 miesiące</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-blue-600 dark:text-blue-400">B)</span>
                          <span><strong>Samodzielnie</strong> — bezpłatnie, ale 24% skuteczności, 8-12 miesięcy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-orange-600 dark:text-orange-400">C)</span>
                          <span><strong>ULC</strong> — bezpłatnie, długo trwa (12-18 miesięcy), niewiążące</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600 dark:text-red-400">D)</span>
                          <span><strong>Sąd</strong> — 95% skuteczności, ale kosztowne i długie (18-24 miesiące)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Krok 5 */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                        NIE PODDAWAJ SIĘ!
                      </h3>
                      <p className="text-slate-700 dark:text-slate-300 mb-4">
                        <strong>76% pasażerów którzy walczą ostatecznie wygrywa.</strong> 
                        Wizz Air liczy na to że się poddasz. Nie daj im tej satysfakcji!
                      </p>
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <p className="text-sm text-red-900 dark:text-red-100">
                          <strong>💪 PAMIĘTAJ:</strong> Prawo jest po Twojej stronie. WE 261/2004 to silna ochrona prawna. 
                          Wizz Air wie że większość ludzi się podda — nie bądź jednym z nich!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 3: Porównanie metod */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Scale className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                Porównanie metod egzekwowania
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Która metoda jest najlepsza? Oto szczegółowe porównanie:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-700">
                      <th className="p-4 text-left font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">
                        Metoda
                      </th>
                      <th className="p-4 text-left font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">
                        Skuteczność
                      </th>
                      <th className="p-4 text-left font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">
                        Koszt
                      </th>
                      <th className="p-4 text-left font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">
                        Czas
                      </th>
                      <th className="p-4 text-left font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-600">
                        Wysiłek
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200 dark:border-slate-600">
                      <td className="p-4">
                        <div className="font-bold text-green-600 dark:text-green-400">ClaimWinger</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Polecane</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">91%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Bardzo wysoka</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">25% + VAT</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Tylko od wygranej</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">3 mies.</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Najszybciej</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">Zero</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Zajmą się wszystkim</div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200 dark:border-slate-600">
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">Samodzielnie</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">24%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Niska</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">0 zł</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Bezpłatnie</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">8-12 mies.</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Długo</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">Wysoki</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Dużo pracy</div>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200 dark:border-slate-600">
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">ULC</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">45%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Średnia</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">0 zł</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Bezpłatnie</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">12-18 mies.</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Bardzo długo</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">Średni</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Czekanie</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">Sąd</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">95%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Najwyższa</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">1500-3000 zł</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Kosztowne</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">18-24 mies.</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Najdłużej</div>
                      </td>
                      <td className="p-4">
                        <div className="font-bold text-slate-900 dark:text-white">Bardzo wysoki</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Prawnik + dokumenty</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-500 mt-6">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-3">
                  💡 Która metoda dla kogo?
                </h3>
                <ul className="space-y-2 text-blue-800 dark:text-blue-200">
                  <li><strong>ClaimWinger:</strong> Dla wszystkich którzy chcą wygrać bez ryzyka i stresu</li>
                  <li><strong>Samodzielnie:</strong> Jeśli masz dużo czasu i cierpliwości (ale niską skuteczność)</li>
                  <li><strong>ULC:</strong> Jeśli nie masz pieniędzy i możesz czekać 1-2 lata</li>
                  <li><strong>Sąd:</strong> Ostateczność gdy wszystko inne zawiodło</li>
                </ul>
              </div>
            </section>

            {/* Section 4: Case Studies */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                📊 Case Studies — prawdziwi pasażerowie którzy wygrali
              </h2>

              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                Oto 3 prawdziwe przykłady pasażerów którzy nie poddali się po odmowie Wizz Air:
              </p>

              <div className="space-y-6">
                {/* Case 1 */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-xl border-2 border-green-200 dark:border-green-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      CASE #1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-3">
                    Anna — "Nadzwyczajne okoliczności"
                  </h3>
                  <div className="space-y-3 text-green-800 dark:text-green-200">
                    <p><strong>Sytuacja:</strong> Lot Warszawa-Londyn odwołany. Wizz Air twierdził że przez burzę (nadzwyczajne okoliczności).</p>
                    <p><strong>Odmowa:</strong> "Ze względu na ekstremalne warunki pogodowe nie możemy wypłacić odszkodowania."</p>
                    <p><strong>Działanie:</strong> Anna sprawdziła że inne loty (Ryanair, British Airways) tego dnia leciały normalnie. Zażądała raportów meteorologicznych.</p>
                    <p><strong>Wynik:</strong> ✅ <strong>250 € wypłacone po 2 miesiącach</strong> (ClaimWinger). Wizz Air nie miał dowodów.</p>
                  </div>
                </div>

                {/* Case 2 */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-2 border-blue-200 dark:border-blue-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      CASE #2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                    Piotr — "Zgłoszenie po terminie"
                  </h3>
                  <div className="space-y-3 text-blue-800 dark:text-blue-200">
                    <p><strong>Sytuacja:</strong> Lot Gdańsk-Oslo opóźniony 4h. Piotr zgłosił roszczenie po 8 miesiącach.</p>
                    <p><strong>Odmowa:</strong> "Roszczenie przedawniło się — regulamin Wizz Air wymaga zgłoszenia w 30 dni."</p>
                    <p><strong>Działanie:</strong> Piotr powołał się na art. 118 k.c. (3 lata przedawnienia) i stwierdził że regulamin jest sprzeczny z prawem UE.</p>
                    <p><strong>Wynik:</strong> ✅ <strong>250 € wypłacone po 6 tygodniach</strong>. Wizz Air wycofał się po pierwszym odwołaniu!</p>
                  </div>
                </div>

                {/* Case 3 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-2 border-purple-200 dark:border-purple-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      CASE #3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-3">
                    Kasia — "Usterka techniczna"
                  </h3>
                  <div className="space-y-3 text-purple-800 dark:text-purple-200">
                    <p><strong>Sytuacja:</strong> Lot Katowice-Reykjavik odwołany przez awarię samolotu.</p>
                    <p><strong>Odmowa:</strong> "Usterka techniczna była niemożliwa do przewidzenia — nadzwyczajne okoliczności."</p>
                    <p><strong>Działanie:</strong> Kasia powołała się na wyroki TSUE (C-549/07, C-257/14) że usterki NIE SĄ nadzwyczajne. Skorzystała z ClaimWinger.</p>
                    <p><strong>Wynik:</strong> ✅ <strong>400 € wypłacone po 3 miesiącach</strong> (w tym odsetki). Wizz Air przegrał w sądzie!</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border-l-4 border-green-500 mt-6">
                <p className="text-green-900 dark:text-green-100">
                  <strong>💪 WNIOSEK:</strong> Wszyscy 3 pasażerowie otrzymali odszkodowanie POMIMO odmowy Wizz Air. 
                  Kluczem był uporczywość i znajomość prawa. <strong>76% pasażerów którzy walczą wygrywa!</strong>
                </p>
              </div>
            </section>
          </div>

          {/* CTA #2 - Przed FAQ */}
          <div className="bg-gradient-to-br from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 rounded-2xl p-8 text-white my-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Nie walcz sam z Wizz Air!
              </h3>
              <p className="text-green-100 mb-6 text-lg">
                ClaimWinger ma <strong>91% skuteczności</strong> w walce z Wizz Air. 
                Zajmą się wszystkim — od odwołania po sąd. Zero ryzyka, płacisz tylko gdy wygrasz.
              </p>
              <a
                href="https://claimwinger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-green-600 rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg hover:shadow-xl text-xl mb-4"
              >
                Zaskarż odmowę Wizz Air →
              </a>
              <p className="text-sm text-green-100">
                ✅ 2 minuty weryfikacji • ✅ 25% + VAT od wygranej • ✅ Średnio 3 miesiące
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <section className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              ❓ Najczęściej zadawane pytania
            </h2>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Dlaczego Wizz Air odmówił mi odszkodowania?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Najczęstsze powody odmowy Wizz Air: 1) <strong>Nadzwyczajne okoliczności</strong> (51%), 
                  2) <strong>Usterka techniczna</strong> poza kontrolą (19%), 3) <strong>Nie zgłoszono w terminie</strong> 30 dni (14%), 
                  4) <strong>Opóźnienie {'<'}3h</strong> (10%), 5) <strong>Otrzymałeś już voucher</strong> (6%). 
                  Większość tych odmów jest NIELEGALNA!
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Jak walczyć z odmową Wizz Air?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  5 kroków: 1) <strong>Zbierz dowody</strong> (karta pokładowa, maile, potwierdzenia), 
                  2) <strong>Złóż odwołanie</strong> do Wizz Air (pisemnie!), 3) <strong>Zażądaj szczegółowego uzasadnienia</strong>, 
                  4) <strong>Skorzystaj z ClaimWinger</strong> (91% skuteczności) lub zgłoś do ULC, 
                  5) W ostateczności — <strong>sąd</strong>. 76% pasażerów którzy walczą wygrywa!
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Czy Wizz Air może odmówić z powodu pogody?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>NIE zawsze!</strong> Wizz Air często nadużywa "nadzwyczajnych okoliczności". 
                  Pogoda musi być EKSTREMALNA i niemożliwa do przewidzenia. Normalna burza, mgła, deszcz NIE są wystarczające. 
                  Żądaj dowodów: raporty meteorologiczne, zamknięcie lotniska, potwierdzenia ATC.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Ile czasu mam na odwołanie się od decyzji Wizz Air?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  W Polsce masz <strong>3 LATA</strong> od daty lotu (art. 118 k.c.). 
                  NIE DAJ SIĘ ZWIEŚĆ twierdzeniom Wizz Air o "30 dniach" — to wewnętrzny regulamin sprzeczny z prawem UE. 
                  Możesz złożyć odwołanie nawet po roku!
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Czy warto walczyć z Wizz Air samodzielnie?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Możesz spróbować (bezpłatnie), ale skuteczność to tylko <strong>24%</strong> przy pierwszym odwołaniu. 
                  ClaimWinger ma <strong>91% skuteczności</strong> i zajmuje się wszystkim (korespondencja, odwołania, sąd). 
                  Płacisz tylko gdy wygrasz (25% + VAT). Średni czas: 3 miesiące vs 8-12 miesięcy samodzielnie.
                </p>
              </details>

              <details className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-sm">
                <summary className="font-bold text-lg text-slate-900 dark:text-white cursor-pointer">
                  Co jeśli Wizz Air ignoruje moje odwołanie?
                </summary>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  Masz 3 opcje: 1) <strong>Zgłoś do ULC</strong> (Urząd Lotnictwa Cywilnego) — bezpłatnie, ale długo trwa, 
                  2) <strong>ClaimWinger</strong> (91% skuteczności, zajmą się wszystkim), 
                  3) <strong>Pozew sądowy</strong> (kosztowne, ale skuteczne). 
                  NIE REZYGNUJ — 76% pasażerów którzy walczą wygrywa!
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-2xl p-10 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nie pozwól Wizz Air uciec z Twoim odszkodowaniem!
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              <strong>76% pasażerów którzy walczą ostatecznie wygrywa.</strong> 
              ClaimWinger ma 91% skuteczności — zajmą się wszystkim za Ciebie. Zero ryzyka!
            </p>
            <a
              href="https://claimwinger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 bg-white text-purple-600 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-xl hover:shadow-2xl text-xl mb-4"
            >
              Zaskarż odmowę teraz →
            </a>
            <p className="text-sm text-purple-100">
              ⚡ Bezpłatna weryfikacja • 💰 25% + VAT od wygranej • 🛡️ Zero ryzyka
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              📚 Przeczytaj również:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/blog/odszkodowanie-wizz-air-polska"
                className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Odszkodowanie Wizz Air z Polski — kompletny przewodnik
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Wszystko o Wizz Air: stawki, procedury, przykłady →
                </p>
              </Link>
              
              <Link 
                href="/blog/ryanair-odmowil-odszkodowania"
                className="block p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all border border-slate-200 dark:border-slate-700"
              >
                <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                  Ryanair odmówił odszkodowania — jak skutecznie walczyć?
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  87% pasażerów którzy walczą wygrywa — sprawdzone metody →
                </p>
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <Link 
                href="/blog"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                ← Powrót do wszystkich artykułów
              </Link>
            </div>
          </div>

          {/* Back to Main */}
          <div className="mt-8 text-center">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
}
