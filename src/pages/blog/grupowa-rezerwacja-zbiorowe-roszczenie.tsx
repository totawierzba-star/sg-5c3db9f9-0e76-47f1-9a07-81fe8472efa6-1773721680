import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { CheckCircle, AlertTriangle, Users, Euro, ArrowRight, FileText } from "lucide-react";

export default function GrupowaRezerwacjaZbioroweRoszczenie() {
  return (
    <Layout>
      <SEO
        title="Grupowa rezerwacja — zbiorowe roszczenie krok po kroku"
        description="Podróżowałeś grupą i lot się opóźnił? Dowiedz się, jak złożyć zbiorowe roszczenie o odszkodowanie dla całej grupy pasażerów."
        url="https://problemlot.pl/blog/grupowa-rezerwacja-zbiorowe-roszczenie"
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
            <span className="text-slate-900">Grupowa rezerwacja — zbiorowe roszczenie</span>
          </nav>

          <header className="mb-12">
            <div className="flex items-center gap-2 text-blue-600 mb-4">
              <Users className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Sytuacje Specjalne
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Grupowa rezerwacja — zbiorowe roszczenie krok po kroku
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
                  Zgodnie z WE 261/2004, <strong>każdy pasażer ma indywidualne prawo do odszkodowania</strong> — nawet w przypadku grupowej rezerwacji. 
                  Masz dwie opcje: każda osoba składa oddzielne roszczenie (najprostsze) lub jedna osoba zbiera pełnomocnictwa i składa roszczenie zbiorcze 
                  w imieniu całej grupy (wymaga dokumentacji). Obie metody są prawnie skuteczne.
                </p>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none mb-12">
            <p className="text-lg text-slate-700 leading-relaxed">
              Lot z ekipą na wesele, wycieczkę firmową lub wieczór kawalerski został opóźniony o kilka godzin? 
              Frustracja się mnoży, gdy problem dotyka nie jednej, a dziesięciu czy dwudziestu osób. 
              Dobrą wiadomością jest, że <strong>każdy z Was ma prawo do odszkodowania</strong> — od 250 do 600 euro na osobę.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              W tym artykule wyjaśniamy krok po kroku, jak skutecznie ubiegać się o odszkodowanie dla całej grupy: 
              czy lepiej działać indywidualnie, czy zbiorowo? Jakie dokumenty przygotować? Kto może reprezentować grupę? 
              Odpowiadamy na wszystkie pytania, które pojawią się podczas dochodzenia roszczeń grupowych.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              Dwie ścieżki roszczenia grupowego
            </h2>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Kluczowa zasada prawna
              </h3>
              <p className="text-slate-700">
                Rozporządzenie WE 261/2004 <strong>NIE przewiduje szczególnych procedur dla rezerwacji grupowych</strong>. 
                Każdy bilet to odrębna umowa przewozu, więc każdy pasażer ma osobne roszczenie. To oznacza, że musisz wybrać strategię: 
                indywidualne wnioski (każdy sam za siebie) lub zbiorczy wniosek z pełnomocnictwami (jeden reprezentant za wszystkich).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-green-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Opcja A: Indywidualne roszczenia
                </h3>
                <p className="text-sm text-green-800 mb-3">
                  <strong>Najprostszy wariant (zalecany dla małych grup)</strong>
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Każdy wypełnia swój własny formularz reklamacyjny</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Brak potrzeby pełnomocnictw i dodatkowej dokumentacji</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Każdy samodzielnie monitoruje swoją sprawę</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Wypłaty na osobiste rachunki bankowe</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-blue-900 mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Opcja B: Zbiorczy wniosek (pełnomocnictwo)
                </h3>
                <p className="text-sm text-blue-800 mb-3">
                  <strong>Efektywny dla dużych grup (10+ osób)</strong>
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Jedna osoba (organizator) reprezentuje całą grupę</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Wymaga pisemnych pełnomocnictw od każdego pasażera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Jednolita korespondencja — oszczędność czasu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>Linia negocjuje z jedną osobą, nie z 20</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Tabela odszkodowania dla grupy (przykład 10 osób)
            </h2>

            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-100 border-b-2 border-slate-300">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Dystans lotu</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Odszkodowanie / osobę</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-slate-900">Grupa 10 osób (RAZEM)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-700">Do 1500 km</td>
                      <td className="px-4 py-3 font-semibold text-green-700">250 €</td>
                      <td className="px-4 py-3 font-bold text-green-800">2 500 €</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-700">1500–3500 km</td>
                      <td className="px-4 py-3 font-semibold text-blue-700">400 €</td>
                      <td className="px-4 py-3 font-bold text-blue-800">4 000 €</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="px-4 py-3 text-slate-700">Powyżej 3500 km</td>
                      <td className="px-4 py-3 font-semibold text-purple-700">600 €</td>
                      <td className="px-4 py-3 font-bold text-purple-800">6 000 €</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
              <p className="text-sm text-slate-700">
                <strong>Przykład:</strong> 10-osobowa ekipa leci z Warszawy do Nowego Jorku (6800 km). Lot opóźniony o 5 godzin z winy linii. 
                Całkowite odszkodowanie dla grupy: <strong>10 × 600 € = 6000 €</strong>. Każda osoba dostanie 600 € na swoje konto 
                (lub reprezentant zbiera całość, jeśli ma pełnomocnictwa).
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Krok po kroku: Jak złożyć zbiorczy wniosek?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-l-4 border-blue-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Wybierz reprezentanta grupy
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Ustal, kto będzie osobą kontaktową. Najlepiej organizator wyjazdu (ten, kto rezerwował loty) lub osoba, 
                      która zna temat praw pasażera.
                    </p>
                    <p className="text-sm text-slate-600">
                      <em>Uwaga:</em> Reprezentant odpowiada za zebranie dokumentów, monitoring sprawy i komunikację z linią. 
                      Reszta grupy musi mu zaufać.
                    </p>
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
                      Zbierz pełnomocnictwa od każdego pasażera
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Każdy członek grupy musi podpisać pisemne pełnomocnictwo upoważniające reprezentanta do działania w jego imieniu.
                    </p>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                      <p className="font-semibold text-sm text-indigo-900 mb-2">Minimalna treść pełnomocnictwa:</p>
                      <p className="text-sm text-slate-700 italic">
                        "Ja, [Imię Nazwisko], upoważniam [Imię Nazwisko Reprezentanta] do dochodzenia w moim imieniu 
                        odszkodowania z tytułu opóźnionego/odwołanego lotu nr [XX123] z dnia [DD.MM.RRRR] na trasie [XXX-YYY]. 
                        [Podpis + Data]"
                      </p>
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
                      Przygotuj dokumentację dla całej grupy
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Zbierz od każdej osoby: kartę pokładową (boarding pass), potwierdzenie rezerwacji (PNR), kserokopię dowodu osobistego.
                    </p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      <li>• Karty pokładowe (PDF lub zdjęcia czytelne)</li>
                      <li>• Numery PNR/rezerwacji dla każdego biletu</li>
                      <li>• Podpisane pełnomocnictwa (oryginały lub skany)</li>
                      <li>• Lista uczestników z danymi kontaktowymi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-green-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Złóż jeden zbiorczy wniosek do linii
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Reprezentant pisze jeden e-mail/formularz do linii lotniczej, wymieniając wszystkich pasażerów + załączając ich pełnomocnictwa.
                    </p>
                    <p className="text-sm text-slate-600">
                      <em>Przykład:</em> "W załączeniu pełnomocnictwa od 10 pasażerów lotu XX123. Żądamy odszkodowania dla wszystkich 
                      uczestników zgodnie z art. 7 WE 261/2004 (10 × 600 € = 6000 €)."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-amber-600 rounded-r-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">
                      Monitoruj odpowiedź i rozliczenie
                    </h3>
                    <p className="text-slate-700 mb-3">
                      Linia może zaproponować przelew na rachunek reprezentanta (który potem rozdziela środki) lub osobne przelewy na każde konto.
                    </p>
                    <p className="text-sm text-slate-600">
                      <em>Uwaga:</em> Podaj numery rachunków bankowych wszystkich uczestników od razu — unikniesz opóźnień w wypłacie.
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
                  Czy linia może odmówić przyjęcia zbiorczego roszczenia?
                </h3>
                <p className="text-slate-700">
                  Teoretycznie nie, ale niektóre linie preferują indywidualne wnioski dla uproszczenia procedur wewnętrznych. 
                  Jeśli dołączysz poprawne pełnomocnictwa, linia <strong>musi zaakceptować</strong> reprezentanta jako osobę działającą w imieniu pasażerów.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy pełnomocnictwo musi być notarialne?
                </h3>
                <p className="text-slate-700">
                  Nie. Wystarczy zwykły podpis na kartce papieru (lub skan w PDF). Notarialne pełnomocnictwo nie jest wymagane 
                  w procedurach reklamacyjnych wobec linii lotniczych. Dopiero w postępowaniu sądowym może być wymagane pełnomocnictwo procesowe.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Co jeśli jeden z grupy ma inną trasę/numer lotu?
                </h3>
                <p className="text-slate-700">
                  Jeśli grupa podzieliła się na różne loty (np. połowa leciała przez Amsterdam, połowa przez Wiedeń), 
                  musisz złożyć <strong>dwa oddzielne roszczenia</strong> — po jednym na każdy numer lotu. 
                  WE 261 dotyczy konkretnego lotu, nie rezerwacji grupowej.
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Czy firma ClaimWinger obsługuje roszczenia grupowe?
                </h3>
                <p className="text-slate-700">
                  Tak! ClaimWinger regularnie reprezentuje grupy pasażerów (np. wycieczki szkolne, wyjazdy firmowe). 
                  Wystarczy, że każda osoba osobno złoży formularz online lub jeden przedstawiciel załączy pełnomocnictwa. 
                  Płacisz prowizję tylko w przypadku wygranej (success fee 25%).
                </p>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Ile czasu zajmuje rozpatrzenie roszczenia grupowego?
                </h3>
                <p className="text-slate-700">
                  Tyle samo, co indywidualne — średnio 2-6 miesięcy. Linie czasem potrzebują więcej czasu na weryfikację pełnomocnictw, 
                  ale <strong>nie mogą odmówić wypłaty tylko dlatego, że wniosek dotyczy grupy</strong>. Prawo do odszkodowania jest indywidualne dla każdego pasażera.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold mb-4">
                Grupa 10+ osób? Łatwo odzyskajcie nawet 6000 € razem!
              </h2>
              <p className="text-blue-100 mb-6 text-lg">
                ClaimWinger obsługuje roszczenia grupowe sprawnie i profesjonalnie. Wystarczy, że każdy wypełni prosty formularz 
                lub jedna osoba załączy pełnomocnictwa. Płacicie prowizję tylko gdy wygramy (25% z kwoty). Zero ryzyka!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://claimwinger.com/pl/opozniony-lot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Złóż roszczenie grupowe
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
                href="/blog/lot-b2b-odszkodowanie-lot-sluzbowy"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Lot służbowy (B2B) — kto dostaje odszkodowanie: firma czy pracownik?
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Wyjaśniamy, jak działa odszkodowanie przy biznesowych rezerwacjach.
                </p>
                <span className="text-blue-600 text-sm font-semibold flex items-center gap-1">
                  Czytaj więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link
                href="/blog/ile-odszkodowania-opozniony-lot"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Ile odszkodowania za opóźniony lot? Pełna tabela stawek
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  250, 400 czy 600 euro? Sprawdź dokładnie, ile pieniędzy należy Ci się za opóźniony lot.
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

              <Link
                href="/blog/overbooking-odmowa-wejscia-odszkodowanie"
                className="block bg-white border border-slate-200 rounded-lg p-6 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-slate-900 mb-2">
                  Overbooking — odmowa wejścia na pokład i odszkodowanie do €600
                </h3>
                <p className="text-sm text-slate-600 mb-3">
                  Linia odmówiła Ci wejścia na pokład? Zobacz, kiedy przysługuje Ci odszkodowanie.
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
