import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  FileText,
  Luggage,
  ReceiptText,
  Shirt,
  TimerReset,
} from "lucide-react";

const canonicalUrl =
  "https://problemlot.com/blog/opozniony-bagaz-odszkodowanie-21-dni";

const faq = [
  {
    question: "Czy za opóźniony bagaż przysługuje odszkodowanie?",
    answer:
      "Tak, ale zwykle nie jest to ryczałt jak przy opóźnionym locie. Przy opóźnionym bagażu dochodzisz zwrotu udokumentowanych, rozsądnych i koniecznych wydatków poniesionych przez brak walizki.",
  },
  {
    question: "Ile dni mam na reklamację za opóźniony bagaż?",
    answer:
      "Reklamację pisemną za opóźniony bagaż należy złożyć w terminie 21 dni od dnia, w którym bagaż oddano do dyspozycji pasażera. Nie warto czekać - zgłoszenie PIR zrób od razu na lotnisku.",
  },
  {
    question: "Czy Rzecznik Praw Pasażerów rozpatruje opóźniony bagaż?",
    answer:
      "Nie. ULC wskazuje, że sprawy dotyczące opóźnionego, zagubionego, skradzionego lub zniszczonego bagażu nie należą do właściwości Rzecznika Praw Pasażerów. Roszczenia opiera się na Konwencji Montrealskiej.",
  },
];

export default function DelayedBaggageArticle() {
  return (
    <Layout>
      <SEO
        title="Opóźniony bagaż - co kupić, PIR i odszkodowanie do 21 dni"
        description="Bagaż nie doleciał razem z Tobą? Sprawdź, co kupić, jak zgłosić PIR, jakie rachunki zachować i jak dochodzić zwrotu za opóźniony bagaż."
        url={canonicalUrl}
        canonicalUrl={canonicalUrl}
        type="article"
      />

      <article className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-12 px-4">
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
            <span className="text-slate-900">Opóźniony bagaż</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              <Luggage className="h-4 w-4" />
              Bagaż lotniczy
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
              Opóźniony bagaż - co kupić, jak zgłosić PIR i ile można odzyskać?
            </h1>
            <p className="text-xl leading-relaxed text-slate-700">
              Walizka nie doleciała, a Ty jesteś już w hotelu albo na spotkaniu?
              Tu liczą się dwie rzeczy: szybki PIR na lotnisku i rozsądne,
              dobrze udokumentowane zakupy.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
              <span>Data publikacji: 9 lipca 2026</span>
              <span>7 min czytania</span>
              <span>Prawo lotnicze</span>
            </div>
          </header>

          <section className="mb-10 rounded-r-2xl border-l-4 border-emerald-600 bg-emerald-50 p-6">
            <div className="flex gap-4">
              <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-emerald-700" />
              <div>
                <h2 className="mb-2 text-xl font-bold text-slate-950">
                  Szybka odpowiedź
                </h2>
                <p className="leading-relaxed text-slate-800">
                  Za opóźniony bagaż możesz żądać zwrotu koniecznych i
                  rozsądnych wydatków, np. ubrań, kosmetyków czy leków. Zgłoś
                  PIR od razu na lotnisku, zachowaj rachunki i złóż reklamację
                  pisemną w ciągu 21 dni od otrzymania bagażu.
                </p>
              </div>
            </div>
          </section>

          <section className="prose prose-lg max-w-none">
            <h2>Opóźniony bagaż to nie to samo co opóźniony lot</h2>
            <p>
              Przy opóźnionym locie przepisy EU261 przewidują ryczałtowe kwoty
              250, 400 albo 600 EUR. Przy opóźnionym bagażu działa inna logika:
              dochodzisz realnej szkody i zwrotu udokumentowanych wydatków.
              Podstawą jest Konwencja Montrealska.
            </p>

            <div className="not-prose my-8 grid gap-5 md:grid-cols-3">
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <FileText className="mb-3 h-7 w-7 text-emerald-700" />
                <h3 className="mb-2 font-bold text-slate-950">PIR</h3>
                <p className="text-sm text-slate-700">
                  Zgłoszenie problemu z bagażem na lotnisku. Bez niego reklamacja
                  jest dużo słabsza.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <ReceiptText className="mb-3 h-7 w-7 text-emerald-700" />
                <h3 className="mb-2 font-bold text-slate-950">Rachunki</h3>
                <p className="text-sm text-slate-700">
                  Paragony i faktury za rzeczy kupione dlatego, że walizka nie
                  dotarła na czas.
                </p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <CalendarDays className="mb-3 h-7 w-7 text-emerald-700" />
                <h3 className="mb-2 font-bold text-slate-950">21 dni</h3>
                <p className="text-sm text-slate-700">
                  Termin na pisemną reklamację liczony od dnia wydania bagażu
                  pasażerowi.
                </p>
              </div>
            </div>

            <h2>Co można kupić, gdy bagaż się spóźnia?</h2>
            <p>
              Zasada jest prosta: kupuj to, co jest potrzebne, rozsądne i
              proporcjonalne do sytuacji. Inaczej wygląda jednodniowe opóźnienie
              po powrocie do domu, a inaczej brak walizki na tygodniowym
              wyjeździe, ślubie, konferencji albo wakacjach z dzieckiem.
            </p>

            <div className="not-prose my-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-emerald-950">
                <Shirt className="h-6 w-6" />
                Najczęściej uzasadnione zakupy
              </h3>
              <ul className="grid gap-3 md:grid-cols-2 text-emerald-950">
                <li>Podstawowe ubrania na zmianę.</li>
                <li>Kosmetyki i środki higieny.</li>
                <li>Leki i rzeczy medyczne, jeśli były w bagażu.</li>
                <li>Ładowarka, podstawowe akcesoria lub rzeczy dla dziecka.</li>
              </ul>
            </div>

            <p>
              Linie często odmawiają zwrotu za zakupy luksusowe, nadmierne albo
              niezwiązane z koniecznością. Jeżeli musisz kupić garnitur na
              spotkanie służbowe, opisz kontekst i załącz dowód celu podróży.
            </p>

            <h2>Jak zgłosić PIR?</h2>
            <ol>
              <li>Idź do stanowiska Lost & Found lub Baggage Services przed opuszczeniem lotniska.</li>
              <li>Podaj numer lotu, numer przywieszki bagażowej i opis walizki.</li>
              <li>Poproś o kopię raportu PIR z numerem referencyjnym.</li>
              <li>Zrób zdjęcie raportu i przywieszki bagażowej.</li>
              <li>Sprawdzaj status doręczenia, ale nie czekaj z kompletowaniem rachunków.</li>
            </ol>

            <h2>Reklamacja w 21 dni</h2>
            <p>
              Sam PIR nie zastępuje reklamacji o pieniądze. Po otrzymaniu
              bagażu złóż pisemną reklamację do linii w ciągu 21 dni. Dołącz
              kopię PIR, kartę pokładową, przywieszkę bagażową, rachunki i
              krótkie uzasadnienie każdego wydatku.
            </p>

            <div className="not-prose my-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-bold text-blue-950">
                <TimerReset className="h-6 w-6" />
                Kiedy bagaż staje się zagubiony?
              </h3>
              <p className="text-blue-950">
                Jeżeli bagaż nie zostanie odnaleziony przez dłuższy czas, sprawa
                przechodzi z opóźnienia w zagubienie. W praktyce często używa
                się granicy 21 dni. Wtedy dochodzi się już nie tylko wydatków
                awaryjnych, ale także wartości utraconego bagażu i zawartości.
              </p>
            </div>

            <h2>Gdzie nie składać takiej sprawy?</h2>
            <p>
              ULC wskazuje w FAQ, że Rzecznik Praw Pasażerów nie rozpatruje
              skarg dotyczących opóźnionego, zagubionego, skradzionego lub
              zniszczonego bagażu. Jeśli linia odmawia, kolejnymi adresami mogą
              być rzecznik konsumentów, Europejskie Centrum Konsumenckie przy
              sporze z przewoźnikiem z UE/EOG/Wielkiej Brytanii albo sąd.
            </p>

            <h2>Źródła i podstawa prawna</h2>
            <p>
              Podstawą jest Konwencja Montrealska oraz FAQ ULC dotyczące
              bagażu. W przeciwieństwie do EU261, tutaj kluczowe są realne
              koszty, rachunki i termin 21 dni na reklamację za opóźniony
              bagaż.
            </p>
          </section>

          <section className="mt-10 rounded-2xl bg-slate-950 p-7 text-white">
            <h2 className="mb-3 text-2xl font-bold">
              Bagaż dotarł za późno?
            </h2>
            <p className="mb-5 text-slate-200">
              Zbierz rachunki i sprawdź, czy możesz odzyskać koszty koniecznych
              zakupów. Nie mieszaj tej reklamacji z odszkodowaniem za lot.
            </p>
            <a
              href="https://claimwinger.com/pl?utm_source=problemlot&utm_medium=article&utm_campaign=delayed_baggage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Sprawdź możliwości
              <ArrowRight className="h-4 w-4" />
            </a>
          </section>

          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-bold text-slate-950">
              Powiązane poradniki
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link
                href="/blog/zgubiony-zniszczony-bagaz-lotniczy-odszkodowanie"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Zgubiony lub zniszczony bagaż</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Szerszy przewodnik po roszczeniach bagażowych.
                </p>
              </Link>
              <Link
                href="/blog/co-zrobic-na-lotnisku-opoznienie"
                className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
              >
                <h3 className="font-bold text-slate-950">Co zrobić na lotnisku?</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Dowody i dokumenty, których nie warto zgubić.
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
