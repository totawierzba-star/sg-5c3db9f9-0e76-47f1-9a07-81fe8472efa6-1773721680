import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Plane,
  RefreshCcw,
  Wallet,
} from "lucide-react";

const canonicalUrl =
  "https://problemlot.com/blog/odwolany-lot-dzien-przed-wylotem-odszkodowanie";

const faq = [
  {
    question: "Czy za lot odwołany dzień przed wylotem należy się odszkodowanie?",
    answer:
      "Zwykle tak, jeżeli linia nie wykaże nadzwyczajnych okoliczności i nie zapewni alternatywy mieszczącej się w wyjątkach z rozporządzenia WE 261/2004. Przy powiadomieniu krócej niż 7 dni przed wylotem alternatywa musi odlatywać najwyżej godzinę wcześniej i lądować mniej niż 2 godziny później, aby wyłączyć odszkodowanie.",
  },
  {
    question: "Czy mogę żądać zwrotu pieniędzy zamiast lotu zastępczego?",
    answer:
      "Tak. Przy odwołanym locie masz wybór między zwrotem biletu, zmianą trasy w najwcześniejszym możliwym terminie albo podróżą w późniejszym terminie, jeśli są miejsca.",
  },
  {
    question: "Czy odszkodowanie zastępuje zwrot biletu?",
    answer:
      "Nie. Zwrot lub lot zastępczy to osobne prawo. Ryczałtowe odszkodowanie 250-600 EUR może przysługiwać dodatkowo, jeżeli spełnione są warunki.",
  },
];

export default function CancelledDayBeforeArticle() {
  return (
    <Layout>
      <SEO
        title="Odwołany lot dzień przed wylotem - zwrot, lot zastępczy i odszkodowanie"
        description="Linia odwołała lot dzień przed podróżą? Sprawdź regułę 14 i 7 dni, prawo do zwrotu, lotu zastępczego, hotelu i 250-600 EUR odszkodowania."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
      />

      <article className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-12 px-4">
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
            <span className="text-slate-900">Odwołany lot dzień przed wylotem</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-800">
              <Plane className="h-4 w-4" />
              Odwołany lot
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Odwołany lot dzień przed wylotem - zwrot, lot zastępczy i odszkodowanie
            </h1>
            <p className="text-xl leading-relaxed text-slate-700">
              Odwołanie na ostatnią chwilę jest jedną z najmocniejszych sytuacji
              pasażera, ale tylko wtedy, gdy dobrze rozdzielisz trzy prawa:
              zwrot, przekierowanie i odszkodowanie.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Data publikacji: 8 lipca 2026</span>
              <span>8 min czytania</span>
              <span>Prawo lotnicze</span>
            </div>
          </header>

          <section className="mb-10 rounded-r-2xl border-l-4 border-rose-600 bg-rose-50 p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-rose-700" />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-950">
                  Szybka odpowiedź
                </h2>
                <p className="leading-relaxed text-slate-800">
                  Jeśli linia odwołała lot dzień przed wylotem, masz prawo do
                  zwrotu biletu albo lotu zastępczego. Odszkodowanie 250-600 EUR
                  często przysługuje dodatkowo, chyba że linia udowodni
                  nadzwyczajne okoliczności albo zaoferuje alternatywę mieszczącą
                  się w bardzo wąskim wyjątku.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2>Reguła 14 dni i 7 dni w praktyce</h2>
            <p>
              Najprostsza zasada: im później linia informuje o odwołaniu, tym
              trudniej jej uniknąć odszkodowania. Dzień przed wylotem mieści się
              w kategorii powiadomienia krócej niż 7 dni przed podróżą.
            </p>

            <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid gap-5 md:grid-cols-3">
                <div>
                  <CalendarClock className="mb-3 h-7 w-7 text-rose-700" />
                  <h3 className="mb-2 font-bold text-slate-950">14+ dni</h3>
                  <p className="text-sm text-slate-700">
                    Zwykle brak ryczałtowego odszkodowania, ale nadal jest zwrot
                    albo zmiana trasy.
                  </p>
                </div>
                <div>
                  <Clock3 className="mb-3 h-7 w-7 text-rose-700" />
                  <h3 className="mb-2 font-bold text-slate-950">7-14 dni</h3>
                  <p className="text-sm text-slate-700">
                    Wyjątek zależy od godzin alternatywnego lotu: maks. 2h
                    wcześniej i mniej niż 4h później.
                  </p>
                </div>
                <div>
                  <AlertTriangle className="mb-3 h-7 w-7 text-rose-700" />
                  <h3 className="mb-2 font-bold text-slate-950">Mniej niż 7 dni</h3>
                  <p className="text-sm text-slate-700">
                    Wyjątek jest węższy: maks. 1h wcześniej i mniej niż 2h
                    później.
                  </p>
                </div>
              </div>
            </div>

            <h2>Masz wybór: zwrot albo lot zastępczy</h2>
            <p>
              Przy odwołaniu lotu przewoźnik musi zaproponować wybór. Nie musi
              to być voucher. Możesz żądać zwrotu pieniędzy, zmiany trasy w
              najwcześniejszym możliwym terminie albo podróży później, jeśli są
              dostępne miejsca.
            </p>

            <div className="not-prose my-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                <Wallet className="mb-3 h-7 w-7 text-green-700" />
                <h3 className="mb-2 text-lg font-bold text-green-950">
                  Zwrot biletu
                </h3>
                <p className="text-sm text-green-950">
                  Dobry wybór, gdy rezygnujesz z podróży albo sam kupujesz inną
                  trasę. Zachowaj dowód, kiedy i jak linia zaoferowała zwrot.
                </p>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-5">
                <RefreshCcw className="mb-3 h-7 w-7 text-blue-700" />
                <h3 className="mb-2 text-lg font-bold text-blue-950">
                  Lot zastępczy
                </h3>
                <p className="text-sm text-blue-950">
                  Dobry wybór, gdy musisz dotrzeć do celu. Przy długim czekaniu
                  dochodzi prawo do posiłków, hotelu i transportu.
                </p>
              </div>
            </div>

            <h2>Kiedy odszkodowanie jest najmocniejsze?</h2>
            <p>
              Najmocniejszy przypadek to odwołanie dzień przed wylotem bez
              sensownej alternatywy i bez nadzwyczajnych okoliczności. Brak
              załogi, problem z rotacją, usterka techniczna, decyzje handlowe
              albo zbyt mało pasażerów zwykle nie są automatycznym
              usprawiedliwieniem.
            </p>
            <p>
              Kwota zależy od dystansu: 250 EUR dla lotów do 1500 km, 400 EUR
              dla większości lotów 1500-3500 km i 600 EUR dla najdłuższych tras.
              Przy części alternatywnych połączeń kwota może być obniżona, ale
              warto to policzyć na danych konkretnego lotu.
            </p>

            <h2>Co zrobić w pierwszej godzinie po SMS-ie od linii?</h2>
            <ol>
              <li>Zrób zrzut ekranu wiadomości o odwołaniu z datą i godziną.</li>
              <li>Sprawdź, jaką alternatywę linia proponuje i zapisz jej godziny.</li>
              <li>Nie klikaj pochopnie vouchera, jeżeli chcesz zwrot pieniędzy.</li>
              <li>Jeżeli kupujesz nowy bilet, zachowaj potwierdzenia i porównaj warunki przewozu.</li>
              <li>Złóż reklamację o odszkodowanie osobno od wniosku o zwrot kosztów.</li>
            </ol>

            <h2>Przykład</h2>
            <p>
              Wizz Air odwołuje lot Katowice-Luton w poniedziałek wieczorem, a
              wylot miał być we wtorek rano. Proponuje połączenie dwa dni
              później. Jeżeli przyczyną nie była nadzwyczajna okoliczność,
              pasażer może mieć roszczenie o zwrot lub re-routing oraz
              dodatkowe odszkodowanie według dystansu.
            </p>

            <h2>Źródła i podstawa prawna</h2>
            <p>
              Podstawą jest art. 5, 7, 8 i 9 rozporządzenia WE 261/2004 oraz
              wyjaśnienia Your Europe dotyczące odwołań, przekierowania,
              zwrotu kosztów i prawa do opieki.
            </p>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="mb-3 text-2xl font-bold">
              Lot odwołany na ostatnią chwilę?
            </h2>
            <p className="mb-5 text-slate-200">
              Sprawdź, czy alternatywa od linii faktycznie wyłącza
              odszkodowanie. W wielu przypadkach tak nie jest.
            </p>
            <a
              href="https://claimwinger.com/pl/odwolany-lot?utm_source=problemlot&utm_medium=article&utm_campaign=cancelled_day_before"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Sprawdź odwołany lot
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Powiązane poradniki
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/odwolany-lot"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Odwołany lot</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Główna strona o prawach pasażera.
                </p>
              </Link>
              <Link
                href="/blog/ryanair-odwolanie-14-dni-przed-lotem"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Ryanair i 14 dni</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Jak działa powiadomienie przed wylotem?
                </p>
              </Link>
              <Link
                href="/blog/wizz-air-odwolany-lot-polska-prawa"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Wizz Air odwołany lot</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Prawa pasażera przy odwołaniu z Polski.
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
