import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import {
  ArrowRight,
  Bus,
  CheckCircle2,
  Clock,
  MapPinned,
  Plane,
  Receipt,
  Route,
} from "lucide-react";

const canonicalUrl =
  "https://problemlot.com/blog/lot-przekierowany-na-inne-lotnisko-odszkodowanie";

const faq = [
  {
    question: "Czy lot przekierowany na inne lotnisko daje prawo do odszkodowania?",
    answer:
      "Może dawać, jeżeli z powodu przekierowania dotarłeś do miejsca docelowego co najmniej 3 godziny później, a przyczyna była po stronie przewoźnika. Jeśli przekierowanie wynikało z nadzwyczajnych okoliczności, np. zamknięcia lotniska przez pogodę, odszkodowanie może nie przysługiwać.",
  },
  {
    question: "Kto płaci za dojazd z innego lotniska?",
    answer:
      "Jeżeli samolot wylądował na innym lotnisku obsługującym ten sam region lub miasto, przewoźnik powinien pokryć transport do lotniska pierwotnego albo do uzgodnionego pobliskiego miejsca.",
  },
  {
    question: "Co zrobić, jeśli linia nie zorganizowała autobusu?",
    answer:
      "Zachowaj rachunki za pociąg, autobus, taksówkę lub hotel, jeżeli nocleg był konieczny. Następnie złóż reklamację o zwrot uzasadnionych kosztów i osobno sprawdź prawo do ryczałtowego odszkodowania.",
  },
];

export default function DivertedFlightCompensationArticle() {
  return (
    <Layout>
      <SEO
        title="Lot przekierowany na inne lotnisko - odszkodowanie i dojazd"
        description="Samolot wylądował na innym lotnisku? Sprawdź, kto płaci za dojazd, hotel i kiedy przekierowany lot daje prawo do 250-600 EUR odszkodowania."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
      />

      <article className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12 px-4">
        <div className="mx-auto max-w-4xl">
          <nav className="mb-8 text-sm text-slate-600">
            <Link href="/" className="hover:text-blue-600">
              Strona główna
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-blue-600">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">Lot przekierowany</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-800">
              <MapPinned className="h-4 w-4" />
              Przekierowanie lotu
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Lot przekierowany na inne lotnisko - kto płaci za dojazd i kiedy jest odszkodowanie?
            </h1>
            <p className="text-xl leading-relaxed text-slate-700">
              Przekierowanie do innego miasta potrafi zepsuć całą podróż. Masz
              jednak konkretne prawa: do transportu, opieki, a w części spraw
              także do odszkodowania.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Data publikacji: 6 lipca 2026</span>
              <span>8 min czytania</span>
              <span>Prawo lotnicze</span>
            </div>
          </header>

          <section className="mb-10 rounded-r-2xl border-l-4 border-indigo-600 bg-indigo-50 p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-indigo-700" />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-950">
                  Szybka odpowiedź
                </h2>
                <p className="leading-relaxed text-slate-800">
                  Gdy lot kończy się na innym lotnisku niż w bilecie, linia
                  powinna zapewnić transport do pierwotnego lotniska albo
                  uzgodnionego pobliskiego miejsca. Odszkodowanie 250-600 EUR
                  zależy od przyczyny przekierowania i opóźnienia w dotarciu do
                  miejsca docelowego.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2>Najpierw rozdziel dwa roszczenia</h2>
            <p>
              Przy przekierowanym locie często mieszają się dwie sprawy:
              zwrot kosztów dojazdu oraz ryczałtowe odszkodowanie za opóźnienie
              lub odwołanie. Pierwsze dotyczy tego, że przewoźnik ma dowieźć Cię
              tam, gdzie miałeś dotrzeć. Drugie zależy od tego, czy spełnione są
              warunki z rozporządzenia WE 261/2004.
            </p>

            <div className="not-prose my-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
                <Bus className="mb-3 h-7 w-7 text-blue-700" />
                <h3 className="mb-2 text-lg font-bold text-blue-950">
                  Transport i koszty
                </h3>
                <p className="text-sm text-blue-950">
                  Autobus, pociąg, taksówka lub inny rozsądny dojazd z lotniska
                  zastępczego powinien obciążać przewoźnika.
                </p>
              </div>
              <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                <Clock className="mb-3 h-7 w-7 text-green-700" />
                <h3 className="mb-2 text-lg font-bold text-green-950">
                  Odszkodowanie
                </h3>
                <p className="text-sm text-green-950">
                  Liczy się opóźnienie w dotarciu do finalnego celu i przyczyna
                  zakłócenia. Sama zmiana lotniska nie zawsze wystarczy.
                </p>
              </div>
            </div>

            <h2>Kiedy linia musi pokryć dojazd?</h2>
            <p>
              Jeżeli bilet wskazywał Kraków, a samolot wylądował w Katowicach,
              albo miałeś lądować w Warszawie Chopina, a przewieziono Cię do
              Modlina, przewoźnik powinien zorganizować dalszy transport.
              W praktyce najczęściej jest to autobus podstawiony po przylocie.
            </p>
            <p>
              Jeśli autobus nie został zapewniony albo nie rozwiązuje problemu,
              możesz kupić rozsądny przejazd samodzielnie. Zachowaj rachunki i
              udokumentuj, że przekierowanie wynikało z decyzji linii lub
              operacji lotu, a nie z Twojej dobrowolnej zmiany planów.
            </p>

            <h2>Kiedy przekierowanie daje prawo do 250-600 EUR?</h2>
            <p>
              Odszkodowanie jest możliwe, gdy dotarłeś do finalnego miejsca
              przeznaczenia co najmniej 3 godziny po czasie i przewoźnik nie
              wykaże nadzwyczajnych okoliczności. Przykładowo: samolot nie
              ląduje w planowanym mieście z powodu problemu technicznego,
              pasażerowie jadą autokarem kilka godzin i finalnie docierają
              mocno po czasie.
            </p>
            <p>
              Jeżeli przyczyną była nagła mgła, zamknięcie pasa, decyzja ATC
              albo inna okoliczność poza kontrolą linii, odszkodowanie może być
              wyłączone. To nie usuwa jednak prawa do opieki i organizacji
              dalszego transportu.
            </p>

            <h2>Checklist: co zebrać po przekierowaniu?</h2>
            <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <ul className="grid gap-4 md:grid-cols-2">
                <li className="flex gap-3">
                  <Plane className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-700" />
                  <span>Numer lotu, data, planowane i faktyczne lotnisko lądowania.</span>
                </li>
                <li className="flex gap-3">
                  <Receipt className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-700" />
                  <span>Rachunki za pociąg, autobus, taksówkę, hotel i posiłki.</span>
                </li>
                <li className="flex gap-3">
                  <Route className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-700" />
                  <span>Dowód trasy dojazdu z lotniska zastępczego.</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-indigo-700" />
                  <span>Godzinę faktycznego dotarcia do celu podróży.</span>
                </li>
              </ul>
            </div>

            <h2>Przykłady praktyczne</h2>
            <p>
              <strong>Przekierowanie przez pogodę:</strong> samolot do Krakowa
              ląduje w Katowicach z powodu mgły. Linia podstawia autobus do
              Krakowa. Zwykle silniejszy będzie zwrot kosztów i prawo do opieki
              niż roszczenie o ryczałtowe odszkodowanie.
            </p>
            <p>
              <strong>Przekierowanie przez usterkę lub rotację:</strong> samolot
              ląduje daleko od celu, pasażerowie docierają 5 godzin później, a
              powodem była organizacja przewoźnika. Tu warto sprawdzić pełne
              odszkodowanie.
            </p>

            <h2>Jak napisać reklamację?</h2>
            <ol>
              <li>Opisz planowany lot i faktyczne lotnisko lądowania.</li>
              <li>Podaj godzinę, o której realnie dotarłeś do miejsca docelowego.</li>
              <li>Załącz rachunki za dojazd i niezbędne wydatki.</li>
              <li>Zażądaj zwrotu kosztów transportu oraz sprawdzenia prawa do odszkodowania z art. 7 WE 261/2004.</li>
              <li>Jeżeli linia powołuje się na nadzwyczajne okoliczności, poproś o konkretny dowód i opis przyczyny.</li>
            </ol>

            <h2>Źródła i podstawa prawna</h2>
            <p>
              Rozporządzenie WE 261/2004 przewiduje zwrot, przekierowanie,
              opiekę i odszkodowanie w zależności od sytuacji. Your Europe
              wyjaśnia także obowiązek pokrycia kosztu transportu, gdy
              przewoźnik dowozi pasażera na inne lotnisko obsługujące ten sam
              cel podróży.
            </p>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="mb-3 text-2xl font-bold">
              Wylądowałeś na innym lotnisku?
            </h2>
            <p className="mb-5 text-slate-200">
              Sprawdź, czy poza zwrotem kosztów dojazdu możesz odzyskać także
              ryczałtowe odszkodowanie.
            </p>
            <a
              href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=article&utm_campaign=diverted_flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Sprawdź lot
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Powiązane poradniki
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/blog/utracona-przesiadka-odszkodowanie"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Utracona przesiadka</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Kiedy opóźnienie pierwszego lotu daje roszczenie?
                </p>
              </Link>
              <Link
                href="/blog/opoznienie-nocne-hotel-transport-kto-placi"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Hotel i transport</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Co zrobić, gdy linia zostawia pasażerów na noc?
                </p>
              </Link>
              <Link
                href="/blog/ile-odszkodowania-opozniony-lot"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Tabela kwot</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Sprawdź 250, 400 i 600 EUR według dystansu.
                </p>
              </Link>
            </div>
          </section>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </article>
    </Layout>
  );
}
