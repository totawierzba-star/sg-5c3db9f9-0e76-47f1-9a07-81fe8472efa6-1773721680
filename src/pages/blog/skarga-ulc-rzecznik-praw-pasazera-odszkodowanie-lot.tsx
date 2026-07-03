import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  FileText,
  HelpCircle,
  Scale,
} from "lucide-react";

const canonicalUrl =
  "https://problemlot.com/blog/skarga-ulc-rzecznik-praw-pasazera-odszkodowanie-lot";

const faq = [
  {
    question: "Kiedy złożyć skargę do ULC albo Rzecznika Praw Pasażerów?",
    answer:
      "Najpierw złóż reklamację do przewoźnika. Jeżeli linia nie odpowie w rozsądnym terminie albo odmówi bez przekonującego uzasadnienia, możesz rozważyć wniosek do Rzecznika Praw Pasażerów lub inną ścieżkę dochodzenia roszczenia.",
  },
  {
    question: "Czy Rzecznik Praw Pasażerów zajmuje się bagażem?",
    answer:
      "Nie. Według ULC spory o zagubiony, opóźniony, skradziony lub uszkodzony bagaż nie są właściwością Rzecznika Praw Pasażerów. Takie sprawy opierają się na Konwencji Montrealskiej i zwykle dochodzi się ich wobec przewoźnika lub w sądzie.",
  },
  {
    question: "Czy skarga do ULC zastępuje pozew albo claim company?",
    answer:
      "Nie zawsze. Postępowanie przed Rzecznikiem może pomóc w polubownym rozwiązaniu sporu, ale jeżeli linia nadal nie płaci albo sprawa wymaga egzekucji, potrzebna może być droga sądowa albo profesjonalne prowadzenie roszczenia.",
  },
];

export default function UlcComplaintArticle() {
  return (
    <Layout>
      <SEO
        title="Skarga do ULC i Rzecznika Praw Pasażerów - kiedy po odmowie linii?"
        description="Linia odmówiła odszkodowania albo nie odpowiada? Sprawdź, kiedy złożyć skargę do ULC/Rzecznika Praw Pasażerów i jakie dokumenty przygotować."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
      />

      <article className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
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
            <span className="text-slate-900">Skarga do ULC</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              <Scale className="h-4 w-4" />
              Reklamacja i spór z linią
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Skarga do ULC / Rzecznika Praw Pasażerów - kiedy i jak złożyć wniosek po odmowie linii?
            </h1>
            <p className="text-xl leading-relaxed text-slate-700">
              Jeśli przewoźnik milczy albo odmawia wypłaty, skarga do organu
              może być kolejnym krokiem. Ważne jest jednak, żeby wiedzieć, kiedy
              ta ścieżka pomaga, a kiedy tylko wydłuża sprawę.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Data publikacji: 7 lipca 2026</span>
              <span>9 min czytania</span>
              <span>Prawo lotnicze</span>
            </div>
          </header>

          <section className="mb-10 rounded-r-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-blue-700" />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-950">
                  Szybka odpowiedź
                </h2>
                <p className="leading-relaxed text-slate-800">
                  Najpierw składasz reklamację do linii. Jeżeli przewoźnik
                  odmawia, nie odpowiada albo odpowiedź jest ogólnikowa, możesz
                  przygotować wniosek do Rzecznika Praw Pasażerów. Nie kieruj
                  tam jednak spraw bagażowych - ULC wyraźnie wskazuje, że to
                  inna ścieżka.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2>Co zrobić przed skargą?</h2>
            <p>
              Organ nie powinien być pierwszym miejscem, do którego piszesz.
              Najpierw trzeba dać przewoźnikowi szansę na rozpatrzenie
              reklamacji. W Polsce warto pamiętać o 30-dniowym terminie
              odpowiedzi przedsiębiorcy na reklamację konsumencką, o którym
              wspomina ULC w FAQ dla pasażerów.
            </p>

            <div className="not-prose my-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-slate-950">
                <FileCheck className="h-6 w-6 text-blue-700" />
                Minimalny pakiet dokumentów
              </h3>
              <ul className="grid gap-4 md:grid-cols-2">
                <li>Potwierdzenie rezerwacji i numer lotu.</li>
                <li>Karta pokładowa lub dowód stawienia się do odprawy.</li>
                <li>Kopia reklamacji wysłanej do linii.</li>
                <li>Odpowiedź przewoźnika albo dowód braku odpowiedzi.</li>
                <li>Dowody opóźnienia, odwołania lub odmowy wejścia na pokład.</li>
                <li>Rachunki za koszty opieki, jeżeli ich dochodzisz.</li>
              </ul>
            </div>

            <h2>Kiedy Rzecznik Praw Pasażerów jest właściwy?</h2>
            <p>
              Zgodnie z informacjami ULC, właściwość organu wynika z art. 16
              rozporządzenia WE 261/2004. W praktyce chodzi przede wszystkim o
              loty z lotnisk znajdujących się w Polsce oraz loty z państw
              trzecich do Polski, o ile dana sprawa podpada pod przepisy o
              opóźnieniu, odwołaniu lub odmowie przyjęcia na pokład.
            </p>
            <p>
              Jeżeli lot zaczynał się w innym kraju UE, właściwy może być organ
              tego państwa. To ważne przy trasach takich jak Londyn-Warszawa,
              Paryż-Kraków czy Frankfurt-Gdańsk.
            </p>

            <h2>Kiedy nie składać sprawy do Rzecznika?</h2>
            <div className="not-prose my-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-amber-950">
                <AlertCircle className="h-6 w-6" />
                Sprawy bagażowe idą inną ścieżką
              </h3>
              <p className="text-amber-950">
                ULC wskazuje w FAQ, że Rzecznik Praw Pasażerów nie jest
                właściwy do rozpatrywania spraw związanych ze zniszczeniem,
                kradzieżą, opóźnieniem lub zagubieniem bagażu. Te roszczenia są
                oparte na Konwencji Montrealskiej.
              </p>
            </div>

            <h2>Skarga, claim company czy sąd?</h2>
            <p>
              Wybór ścieżki zależy od celu. Jeśli chcesz bezpłatnie spróbować
              polubownie rozwiązać spór, wniosek do Rzecznika może mieć sens.
              Jeśli chcesz maksymalnie odciążyć się od korespondencji i ryzyka
              błędów formalnych, wygodniejsza może być firma prowadząca
              roszczenie. Jeżeli linia konsekwentnie nie płaci, ostateczną
              ścieżką pozostaje sąd.
            </p>

            <div className="not-prose my-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <HelpCircle className="mb-3 h-7 w-7 text-blue-700" />
                <h3 className="mb-2 font-bold text-slate-950">Rzecznik</h3>
                <p className="text-sm text-slate-700">
                  Dobry przy sporze o prawa pasażera, gdy masz pełną dokumentację.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <FileText className="mb-3 h-7 w-7 text-blue-700" />
                <h3 className="mb-2 font-bold text-slate-950">Claim company</h3>
                <p className="text-sm text-slate-700">
                  Dobra, gdy nie chcesz prowadzić korespondencji i eskalacji samodzielnie.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5">
                <Scale className="mb-3 h-7 w-7 text-blue-700" />
                <h3 className="mb-2 font-bold text-slate-950">Sąd</h3>
                <p className="text-sm text-slate-700">
                  Najmocniejsza ścieżka egzekwowania roszczenia, ale wymaga formalności.
                </p>
              </div>
            </div>

            <h2>Jak przygotować wniosek krok po kroku?</h2>
            <ol>
              <li>Upewnij się, że sprawa dotyczy opóźnienia, odwołania lub odmowy wejścia na pokład.</li>
              <li>Sprawdź właściwość organu według miejsca wylotu lub przylotu z kraju trzeciego.</li>
              <li>Dołącz kopię reklamacji i odpowiedź przewoźnika albo dowód, że minął termin bez odpowiedzi.</li>
              <li>Opisz fakty bez emocji: numer lotu, trasa, data, czas opóźnienia i żądana kwota.</li>
              <li>Zachowaj kopię wszystkiego, co wysyłasz.</li>
            </ol>

            <h2>Źródła i podstawa prawna</h2>
            <p>
              Artykuł opiera się na materiałach ULC o prawach pasażera, FAQ ULC
              oraz rozporządzeniu WE 261/2004. Najważniejsze fakty praktyczne
              to właściwość organu według art. 16, 30 dni na odpowiedź na
              reklamację konsumencką w Polsce oraz wyłączenie spraw bagażowych
              z właściwości Rzecznika.
            </p>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="mb-3 text-2xl font-bold">
              Linia odmówiła albo milczy?
            </h2>
            <p className="mb-5 text-slate-200">
              Zanim wybierzesz ścieżkę, sprawdź czy sprawa w ogóle kwalifikuje
              się do odszkodowania i jakie dokumenty są najmocniejsze.
            </p>
            <a
              href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=article&utm_campaign=ulc_complaint"
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
              Powiązane poradniki
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Link
                href="/blog/linia-nie-odpowiada-na-reklamacje-co-robic"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Linia nie odpowiada</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Co zrobić po ciszy ze strony przewoźnika?
                </p>
              </Link>
              <Link
                href="/blog/jak-zlozyc-wniosek-odszkodowanie"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Jak złożyć wniosek</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Reklamacja krok po kroku.
                </p>
              </Link>
              <Link
                href="/blog/claimwinger-airhelp-flightright-porownanie"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Porównanie firm</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Kiedy warto skorzystać z pomocy?
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
