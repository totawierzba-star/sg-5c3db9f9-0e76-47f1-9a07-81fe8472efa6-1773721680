import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  CloudSun,
  FileText,
  Hotel,
  Scale,
  Utensils,
} from "lucide-react";

const canonicalUrl =
  "https://problemlot.com/blog/opozniony-lot-przez-pogode-odszkodowanie";

const faq = [
  {
    question: "Czy za opóźniony lot przez pogodę należy się odszkodowanie?",
    answer:
      "Czasami nie. Jeżeli pogoda realnie uniemożliwiała bezpieczny lot i linia wykaże, że mimo rozsądnych działań nie mogła uniknąć opóźnienia, może to być nadzwyczajna okoliczność. Nadal masz jednak prawo do opieki, czyli posiłków, napojów, hotelu i transportu, gdy spełnione są progi czasowe.",
  },
  {
    question: "Czy linia musi udowodnić złą pogodę?",
    answer:
      "Tak. Ogólna informacja o pogodzie nie wystarczy. Przewoźnik powinien wykazać konkretny związek między warunkami meteorologicznymi a opóźnieniem Twojego lotu.",
  },
  {
    question: "Czy dostanę zwrot za hotel, jeśli opóźnienie przez pogodę trwało całą noc?",
    answer:
      "Tak, prawo do opieki działa także przy nadzwyczajnych okolicznościach. Jeśli linia nie zapewni hotelu i transportu, zachowaj rachunki i złóż reklamację o zwrot rozsądnych kosztów.",
  },
];

export default function WeatherDelayCompensationArticle() {
  return (
    <Layout>
      <SEO
        title="Opóźniony lot przez pogodę - czy należy się odszkodowanie?"
        description="Lot opóźniony przez burzę, mgłę, śnieg albo wiatr? Sprawdź, kiedy pogoda wyłącza odszkodowanie 250-600 EUR, a kiedy linia nadal musi zapewnić opiekę."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
      />

      <article className="min-h-screen bg-gradient-to-b from-sky-50 to-white py-12 px-4">
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
            <span className="text-slate-900">Opóźniony lot przez pogodę</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">
              <CloudSun className="h-4 w-4" />
              Nadzwyczajne okoliczności
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Opóźniony lot przez pogodę - czy należy się odszkodowanie?
            </h1>
            <p className="text-xl leading-relaxed text-slate-700">
              Zła pogoda to jeden z najczęstszych powodów odmowy wypłaty.
              Problem w tym, że czasem odmowa jest uzasadniona, a czasem jest
              tylko wygodnym skrótem w mailu od linii.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Data publikacji: 5 lipca 2026</span>
              <span>8 min czytania</span>
              <span>Prawo lotnicze</span>
            </div>
          </header>

          <section className="mb-10 rounded-r-2xl border-l-4 border-sky-600 bg-sky-50 p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-sky-700" />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-950">
                  Szybka odpowiedź
                </h2>
                <p className="leading-relaxed text-slate-800">
                  Jeśli opóźnienie wynikało z realnie niebezpiecznej pogody,
                  odszkodowanie 250, 400 albo 600 EUR może nie przysługiwać.
                  Ale prawo do opieki działa osobno: linia nadal musi zapewnić
                  posiłki, napoje, komunikację, a przy nocnym oczekiwaniu także
                  hotel i transport.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2>Kiedy pogoda faktycznie wyłącza odszkodowanie?</h2>
            <p>
              Pogoda może być nadzwyczajną okolicznością, jeżeli była poza
              kontrolą przewoźnika i bezpośrednio uniemożliwiała wykonanie
              lotu. Przykłady to silna burza nad lotniskiem, mgła poniżej
              minimów operacyjnych, zamknięcie pasa z powodu oblodzenia albo
              wiatr przekraczający limity dla danego samolotu.
            </p>
            <p>
              Sama fraza "warunki pogodowe" w odpowiedzi reklamacyjnej nie
              rozstrzyga sprawy. Linia powinna wykazać, że pogoda dotyczyła
              właśnie Twojego lotu, w konkretnym czasie i miejscu, oraz że
              opóźnienia nie dało się uniknąć rozsądnymi środkami.
            </p>

            <div className="not-prose my-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-lg border border-green-200 bg-green-50 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-green-900">
                  <CheckCircle2 className="h-5 w-5" />
                  Odmowa może być zasadna
                </h3>
                <ul className="space-y-2 text-sm text-green-950">
                  <li>Lotnisko czasowo zamknięte przez burzę, mgłę lub śnieg.</li>
                  <li>ATC ograniczyło starty i lądowania przez pogodę.</li>
                  <li>Warunki dotyczyły trasy lub lotniska docelowego.</li>
                </ul>
              </div>
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-5">
                <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-amber-950">
                  <AlertTriangle className="h-5 w-5" />
                  Odmowę warto kwestionować
                </h3>
                <ul className="space-y-2 text-sm text-amber-950">
                  <li>Inne loty startowały i lądowały normalnie.</li>
                  <li>Linia nie wskazuje konkretnego zjawiska pogodowego.</li>
                  <li>Opóźnienie zaczęło się od problemu technicznego lub braku załogi.</li>
                </ul>
              </div>
            </div>

            <h2>Odszkodowanie a prawo do opieki to dwie różne rzeczy</h2>
            <p>
              To najważniejszy praktyczny punkt. Nawet jeżeli pogoda wyłącza
              ryczałtowe odszkodowanie, nie wyłącza prawa do opieki. Po
              przekroczeniu progów opóźnienia przewoźnik powinien zapewnić
              pomoc pasażerom czekającym na lot.
            </p>

            <div className="not-prose my-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Utensils className="mb-3 h-7 w-7 text-sky-700" />
                <h3 className="mb-2 font-bold text-slate-950">Posiłki i napoje</h3>
                <p className="text-sm text-slate-700">
                  Vouchery lub zwrot rozsądnych wydatków, jeżeli linia niczego
                  nie zorganizowała.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Hotel className="mb-3 h-7 w-7 text-sky-700" />
                <h3 className="mb-2 font-bold text-slate-950">Hotel</h3>
                <p className="text-sm text-slate-700">
                  Gdy oczekiwanie przechodzi na kolejną dobę, nocleg powinien
                  być zapewniony lub zwrócony.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <FileText className="mb-3 h-7 w-7 text-sky-700" />
                <h3 className="mb-2 font-bold text-slate-950">Dowody</h3>
                <p className="text-sm text-slate-700">
                  Zachowaj karty pokładowe, komunikaty, zdjęcia tablic i
                  rachunki za konieczne wydatki.
                </p>
              </div>
            </div>

            <h2>Jak sprawdzić, czy "pogoda" nie jest wymówką?</h2>
            <ol>
              <li>
                Poproś linię o konkretną przyczynę: burza, mgła, wiatr, śnieg,
                oblodzenie, ograniczenia ATC.
              </li>
              <li>
                Sprawdź, czy inne loty z tego samego lotniska wykonywano w
                podobnym czasie. Jeżeli ruch działał normalnie, odmowa wymaga
                dokładniejszej analizy.
              </li>
              <li>
                Ustal, kiedy zaczęło się opóźnienie. Jeżeli pierwotną przyczyną
                była usterka, rotacja samolotu albo brak załogi, linia nie może
                automatycznie przykryć sprawy pogodą.
              </li>
              <li>
                Zapisz godzinę otwarcia drzwi po przylocie. Dla odszkodowania
                liczy się opóźnienie w miejscu docelowym, a nie samo
                opóźnienie startu.
              </li>
            </ol>

            <div className="not-prose my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h2 className="mb-3 flex items-center gap-2 text-2xl font-bold text-blue-950">
                <Scale className="h-6 w-6" />
                Przykład
              </h2>
              <p className="text-blue-950">
                Lot z Warszawy do Barcelony startuje 5 godzin później. Linia
                pisze tylko "weather". W tym czasie inne loty z Warszawy
                startowały, a problem zaczął się od spóźnionej rotacji
                samolotu z innego miasta. Taka sprawa wymaga odwołania, bo
                sama etykieta pogodowa nie przesądza o braku odszkodowania.
              </p>
            </div>

            <h2>Co zrobić od razu na lotnisku?</h2>
            <ul>
              <li>Poproś o pisemną przyczynę opóźnienia lub zrób notatkę z rozmowy.</li>
              <li>Nie oddawaj kart pokładowych i zachowaj potwierdzenie rezerwacji.</li>
              <li>Żądaj voucherów na posiłki; jeśli ich nie ma, zbieraj paragony.</li>
              <li>Przy nocnym oczekiwaniu żądaj hotelu i transportu.</li>
              <li>Po powrocie złóż reklamację oddzielnie o odszkodowanie i oddzielnie o zwrot kosztów opieki.</li>
            </ul>

            <h2>Źródła i podstawa prawna</h2>
            <p>
              Podstawą są rozporządzenie WE 261/2004, praktyczne wyjaśnienia
              Your Europe oraz polskie materiały ULC. W artykule celowo
              rozdzielamy prawo do odszkodowania od prawa do opieki, bo to
              najczęstszy błąd w reklamacjach po opóźnieniu przez pogodę.
            </p>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="mb-3 text-2xl font-bold">
              Linia odmówiła przez "złą pogodę"?
            </h2>
            <p className="mb-5 text-slate-200">
              Sprawdź, czy odmowa ma sens. ClaimWinger przeanalizuje przyczynę,
              dystans, opóźnienie i dostępne dowody.
            </p>
            <a
              href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=article&utm_campaign=weather_delay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Sprawdź sprawę
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Czytaj dalej
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/blog/nadzwyczajne-okolicznosci-odszkodowanie"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Nadzwyczajne okoliczności</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Kiedy linia naprawdę nie musi płacić?
                </p>
              </Link>
              <Link
                href="/blog/opoznienie-nocne-hotel-transport-kto-placi"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Hotel przy opóźnieniu</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Co musi zapewnić przewoźnik po nocy na lotnisku?
                </p>
              </Link>
              <Link
                href="/blog/co-zrobic-na-lotnisku-opoznienie"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Co zrobić na lotnisku?</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Checklista dowodów i działań przed odlotem.
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
