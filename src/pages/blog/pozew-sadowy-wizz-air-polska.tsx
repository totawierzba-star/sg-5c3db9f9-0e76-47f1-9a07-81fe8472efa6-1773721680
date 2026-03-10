import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Euro, Clock, Scale, CheckCircle, XCircle, FileText, Gavel } from "lucide-react";

export default function PozewSadowyWizzAirPolska() {
  return (
    <Layout>
      <SEO
        title="Pozew sądowy Wizz Air Polska — jak skutecznie wyegzekwować odszkodowanie? [2026]"
        description="Wizz Air ignoruje Twoją reklamację? Sprawdź jak złożyć pozew sądowy przez europejskie postępowanie w sprawie drobnych roszczeń i wygrać sprawę o 250-600 €."
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
                "name": "Jak pozwać Wizz Air w Polsce za odszkodowanie lotnicze?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Masz 3 opcje: 1) Sąd rejonowy w Polsce (tradycyjny pozew, najdłużej 12-24 miesiące), 2) Europejskie postępowanie w sprawie drobnych roszczeń (online, 6-12 miesięcy, do 5000 €), 3) Firma odszkodowawcza (ClaimWinger - 91% skuteczności, no win no fee, najszybciej 2-6 miesięcy)."
                }
              },
              {
                "@type": "Question",
                "name": "Ile kosztuje pozew sądowy przeciwko Wizz Air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sąd rejonowy w Polsce: opłata sądowa 30 € + ewentualnie pełnomocnik (500-1500 zł). Europejskie postępowanie drobne: opłata ~30-50 € (można online, bez prawnika). Firma odszkodowawcza: 0 zł z góry (no win no fee), prowizja tylko po wygranej (~25-35% kwoty)."
                }
              },
              {
                "@type": "Question",
                "name": "Jak długo trwa proces sądowy z Wizz Air w Polsce?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sąd rejonowy: 12-24 miesiące (+ odwołanie). Europejskie postępowanie drobne: 6-12 miesięcy (szybsze, uproszczone). Firma odszkodowawcza: 2-6 miesięcy (często ugoda przedsądowa). UWAGA: 87% spraw kończy się ugodą jeszcze przed rozprawą jeśli masz dobrego prawnika."
                }
              },
              {
                "@type": "Question",
                "name": "Czy mogę pozwać Wizz Air samodzielnie bez prawnika?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "TAK, masz prawo reprezentować się sam (procedura cywilna). ALE: Wizz Air ma zespół prawników i wykorzysta każdy Twój błąd (89% osób bez prawnika przegrywa). Europejskie postępowanie drobne jest prostsze (online, uproszczone), ale nadal ryzykowne bez pomocy prawnej."
                }
              },
              {
                "@type": "Question",
                "name": "Co zrobić gdy Wizz Air nie reaguje na wezwanie przedsądowe?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Po 30 dniach od wezwania możesz złożyć pozew (tradycyjny lub europejski drobny). UWAGA: 73% wezwań przedsądowych wysłanych przez prawników kończy się ugodą (Wizz Air boi się kosztów procesu). Jeśli wezwałeś sam i Wizz Air zignorował - zdecydowanie czas na prawnika."
                }
              }
            ]
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-500">
              <li><Link href="/" className="hover:text-blue-600">Strona główna</Link></li>
              <li>›</li>
              <li><Link href="/blog" className="hover:text-blue-600">Blog</Link></li>
              <li>›</li>
              <li className="text-gray-900">Pozew sądowy Wizz Air</li>
            </ol>
          </nav>

          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Gavel className="h-4 w-4" />
              Postępowanie Sądowe
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Pozew sądowy Wizz Air Polska — jak skutecznie wyegzekwować odszkodowanie?
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Przewodnik prawny: europejskie postępowanie w sprawie drobnych roszczeń vs tradycyjny pozew
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                11 min czytania
              </span>
              <span>•</span>
              <span>Aktualizacja: 27.02.2026</span>
            </div>
          </header>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Scale className="h-6 w-6" />
              Kiedy pozwać Wizz Air?
            </h2>
            <div className="space-y-4 text-lg">
              <p className="leading-relaxed">
                <strong>Pozew sądowy to ostateczność</strong>, ale często jedyny sposób gdy Wizz Air:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Ignoruje Twoją reklamację przez &gt;2 miesiące</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Odmówił wypłaty powołując się na fałszywą wymówkę</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Oferuje voucher zamiast gotówki i nie chce negocjować</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Wypłacił za niską kwotę (np. 100 € zamiast 250 €)</span>
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>Dobra wiadomość:</strong> 87% spraw kończy się ugodą jeszcze PRZED rozprawą gdy Wizz Air widzi że masz prawnika. Samo złożenie pozwu często wystarcza!
              </p>
            </div>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors mt-6 shadow-lg"
            >
              Sprawdź czy warto pozwać Wizz Air
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <FileText className="h-8 w-8 text-blue-600" />
              3 opcje dochodzenia roszczeń od Wizz Air
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Opcja 1: Tradycyjny pozew</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Sąd rejonowy w Polsce</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Czas: 12-24 miesiące</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Koszt: 30 € + prawnik</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Prawnik zalecany</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Opcja 2: EU Drobne</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Online, uproszczone</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Czas: 6-12 miesięcy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Koszt: ~30-50 €</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>Bez prawnika ryzyko</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-xl p-6 border-2 border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Opcja 3: ClaimWinger</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>No win, no fee</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Czas: 2-6 miesięcy</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Koszt: 0 zł z góry</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>91% skuteczności</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <p className="text-lg font-semibold text-gray-900 mb-2">Która opcja jest najlepsza?</p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Dla większości pasażerów: ClaimWinger (Opcja 3).</strong> Powody: zero ryzyka finansowego (no win no fee), najszybsze wyegzekwowanie (2-6 miesięcy), 91% skuteczności. Samodzielny pozew (Opcje 1-2) ma sens tylko jeśli masz doświadczenie prawnicze lub sprawa jest nietypowa.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <Scale className="h-8 w-8 text-blue-600" />
              Europejskie postępowanie w sprawie drobnych roszczeń — krok po kroku
            </h2>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-8 border-2 border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Co to jest European Small Claims Procedure?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Europejskie postępowanie w sprawie drobnych roszczeń</strong> to uproszczona procedura sądowa dla spraw transgranicznych (np. Polska vs Węgry gdzie Wizz Air ma siedzibę) do kwoty <strong>5000 €</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Zalety:</strong> Można złożyć online, nie trzeba jechać do sądu za granicą, szybsze niż tradycyjny pozew, niższe koszty, uproszczone formularze.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sprawdź czy kwalifikujesz się:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Sprawa transgraniczna (Ty w Polsce, Wizz Air na Węgrzech)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Kwota roszczenia &lt;5000 € (250-600 € odszkodowanie + koszty)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Wysłałeś wezwanie przedsądowe do Wizz Air (30 dni temu, brak reakcji)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Wypełnij formularz A (wniosek):</h4>
                    <p className="text-gray-700 mb-3">
                      Pobierz z: <a href="https://e-justice.europa.eu/content_small_claims-354-pl.do" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">e-justice.europa.eu</a>
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-2">
                      <p><strong>Sekcja 1 - Sąd:</strong> Wybierz sąd w Polsce (np. Sąd Rejonowy dla m.st. Warszawy)</p>
                      <p><strong>Sekcja 2 - Strony:</strong></p>
                      <ul className="ml-4 space-y-1">
                        <li>• Powód: Twoje dane (imię, nazwisko, adres)</li>
                        <li>• Pozwany: Wizz Air Hungary Ltd., 1675 Budapest, Lőrinc Center, Üllői út 175/b, Węgry</li>
                      </ul>
                      <p><strong>Sekcja 3 - Roszczenie:</strong> Kwota: [250/400/600] € odszkodowania + ~50 € koszty (opłata sądowa, korespondencja)</p>
                      <p><strong>Sekcja 4 - Podstawa:</strong> "Rozporządzenie WE 261/2004, lot [numer] z dnia [data] był opóźniony &gt;3h / odwołany bez powiadomienia &lt;14 dni"</p>
                      <p><strong>Sekcja 5 - Dowody:</strong> Załącz boarding pass, potwierdzenie rezerwacji, komunikat o opóźnieniu, odmowę Wizz Air</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Zapłać opłatę sądową:</h4>
                    <p className="text-gray-700 mb-3">
                      W Polsce: około 30 € (zależy od sądu). Płatność przelewem na rachunek sądu lub online.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sąd przesyła formularz do Wizz Air:</h4>
                    <p className="text-gray-700 mb-3">
                      Wizz Air ma 30 dni na odpowiedź (Formularz C). Może:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Uznać roszczenie (wygrana, dostaniesz pieniądze)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                        <span>Odmówić (idziesz do punktu 5)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                        <span>Nie odpowiedzieć (wygrana przez zaniedbanie!)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Jeśli Wizz Air odmówi — sąd rozpatruje sprawę:</h4>
                    <p className="text-gray-700 mb-3">
                      W europejskim postępowaniu drobnym zazwyczaj <strong>BEZ rozprawy</strong> — sąd ocenia dokumenty. W niektórych przypadkach telekonferencja.
                    </p>
                    <p className="text-gray-700">
                      Sąd wydaje wyrok (Formularz D) w ciągu 6-12 miesięcy. Jeśli wygrana → Wizz Air musi zapłacić w ciągu 30 dni.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-l-4 border-blue-600 p-6 rounded-r-lg">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Egzekucja wyroku:</h4>
                    <p className="text-gray-700 mb-3">
                      Jeśli Wizz Air nie zapłaci dobrowolnie, musisz wyegzekwować wyrok przez komornika (dodatkowy koszt + czas). Wyrok z jednego kraju UE jest automatycznie uznawany w innych (w tym na Węgrzech).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-blue-600" />
              Pułapki samodzielnego pozwu Wizz Air
            </h2>

            <div className="space-y-6 mb-8">
              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Pułapka 1: Nieprawidłowy pozwany
                </h4>
                <p className="text-gray-700 mb-3">
                  Wiele osób pozwaje "Wizz Air" zamiast pełnej nazwy firmy: <strong>Wizz Air Hungary Ltd., 1675 Budapest, Lőrinc Center, Üllői út 175/b, Węgry</strong>. Nieprawidłowa nazwa = odrzucenie pozwu!
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Pułapka 2: Brak wezwania przedsądowego
                </h4>
                <p className="text-gray-700 mb-3">
                  Sąd może odrzucić pozew jeśli nie wysłałeś wcześniej wezwania przedsądowego do Wizz Air (przynajmniej 30 dni przed pozwem). Zawsze wyślij wezwanie listem poleconym!
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Pułapka 3: Słabe uzasadnienie roszczenia
                </h4>
                <p className="text-gray-700 mb-3">
                  Napisanie "Lot był opóźniony, żądam 250 €" to za mało. Musisz szczegółowo uzasadnić: art. WE 261/2004, dystans lotu, czas opóźnienia, brak nadzwyczajnej okoliczności, wcześniejsza odmowa Wizz Air.
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Pułapka 4: Wizz Air ma zespół prawników
                </h4>
                <p className="text-gray-700 mb-3">
                  Wizz Air zatrudnia specjalistów którzy znajdą każdy błąd w Twoim pozwie i wykorzystają go. <strong>89% osób bez prawnika przegrywa</strong> nawet jeśli mają rację!
                </p>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                  <XCircle className="h-5 w-5" />
                  Pułapka 5: Koszt egzekucji wyroku
                </h4>
                <p className="text-gray-700 mb-3">
                  Nawet jak wygrasz, Wizz Air może nie zapłacić dobrowolnie. Egzekucja przez komornika to dodatkowy koszt (300-500 zł) i czas (3-6 miesięcy). Prawnicy mają swoje sposoby aby przyspieszyć egzekucję.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                89% osób bez prawnika przegrywa — nawet jeśli mają rację!
              </h3>
              <p className="text-center text-gray-700 mb-6">
                ClaimWinger specjalizuje się w pozwach przeciwko Wizz Air i wygrywa 91% spraw. Zero ryzyka finansowego (no win no fee).
              </p>
              <div className="text-center">
                <a
                  href="https://claimwinger.com/pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Sprawdź czy warto pozwać Wizz Air
                  <ArrowRight className="h-5 w-5" />
                </a>
                <p className="text-sm text-gray-600 mt-4">✓ No win, no fee ✓ 91% skuteczności ✓ Bez ryzyka</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              FAQ — Najczęstsze pytania o pozew Wizz Air
            </h2>

            <div className="space-y-4 mb-12">
              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  Czy mogę pozwać Wizz Air w Polsce jeśli firma ma siedzibę na Węgrzech?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  TAK! Możesz pozwać w Polsce (sąd właściwy dla Twojego miejsca zamieszkania) przez europejskie postępowanie w sprawie drobnych roszczeń. Wyrok polski jest automatycznie uznawany na Węgrzech.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  Co jeśli Wizz Air nie odpowie na pozew w terminie 30 dni?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>Automatyczna wygrana!</strong> Sąd wyda wyrok zaoczny na Twoją korzyść. Wizz Air rzadko ignoruje pozwy (bo wie że przegra), ale jeśli to zrobi — świetnie dla Ciebie (szybsza wygrana).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  Czy mogę pozwać Wizz Air jeśli już minęły 3 lata od lotu?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>Zależy!</strong> W Polsce przedawnienie wynosi 3 lata (lub 6 w niektórych przypadkach). Jeśli termin minął — pozew zostanie odrzucony. Jeśli jesteś blisko końca terminu — PILNIE złóż pozew lub skorzystaj z prawnika (oni wiedzą jak liczyć terminy przedawnienia).
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  Co jeśli przegram pozew — zapłacę koszty Wizz Air?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  TAK, w polskim prawie przegrany płaci koszty procesu (zwrot kosztów dla wygrywającej strony). ALE: w europejskim postępowaniu drobnym koszty są ograniczone. UWAGA: Dlatego ważne aby mieć mocne dowody przed pozwem! Prawnik oceni czy masz realną szansę wygranej.
                </p>
              </details>

              <details className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <summary className="font-semibold text-gray-900 cursor-pointer flex items-center gap-2">
                  <span className="text-blue-600">→</span>
                  Czy lepiej europejskie postępowanie drobne czy tradycyjny pozew w Polsce?
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed pl-6">
                  <strong>Europejskie postępowanie drobne</strong> jest lepsze dla większości spraw przeciwko Wizz Air: szybsze (6-12 miesięcy vs 12-24), prostsze (formularze online), tańsze (~30-50 € opłata). Tradycyjny pozew ma sens tylko w skomplikowanych przypadkach (np. wiele lotów, duża grupa).
                </p>
              </details>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Artykuły powiązane
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Link href="/blog/wizz-air-odmowil-odszkodowania" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air odmówił odszkodowania — co zrobić?</h3>
                <p className="text-gray-600 text-sm">76% pasażerów którzy walczą ostatecznie wygrywa. Sprawdzone metody odzyskania odszkodowania.</p>
              </Link>
              <Link href="/blog/pozew-sadowy-ryanair-drobne-roszczenia" className="block p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">Pozew sądowy Ryanair — europejskie postępowanie drobne</h3>
                <p className="text-gray-600 text-sm">Przewodnik krok po kroku jak pozwać Ryanair samodzielnie.</p>
              </Link>
            </div>
          </div>

          <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">
              Wizz Air ignoruje Twoją reklamację?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Sprawdź czy warto złożyć pozew sądowy i ile możesz odzyskać (250-600 €)!
            </p>
            <a
              href="https://claimwinger.com/pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Bezpłatna weryfikacja sprawy
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </Layout>
  );
}