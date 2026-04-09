import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MailCheck,
  MessageSquareMore,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorKuldjFollowUpotALegitarsasagnak() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor küldj follow-upot a légitársaságnak? [2026]"
        description="Magyar útmutató arról, mikor érdemes follow-upot küldeni a légitársaságnak, hogyan tedd ezt jól, és mikor nem elég már egy újabb emlékeztető."
        url="https://problemlot.com/hu/blog/mikor-kuldj-follow-upot-a-legitarsasagnak"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mikor küldj follow-upot a légitársaságnak? [2026]",
            description:
              "Magyar útmutató arról, mikor érdemes follow-upot küldeni a légitársaságnak, hogyan tedd ezt jól, és mikor nem elég már egy újabb emlékeztető.",
            author: {
              "@type": "Organization",
              name: "ProblemLot.com",
            },
            publisher: {
              "@type": "Organization",
              name: "ProblemLot.com",
              logo: {
                "@type": "ImageObject",
                url: "https://problemlot.com/og-image.png",
              },
            },
            datePublished: "2026-04-09",
            dateModified: "2026-04-09",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/mikor-kuldj-follow-upot-a-legitarsasagnak",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Mikor érdemes follow-upot küldeni a légitársaságnak?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Follow-upot akkor érdemes küldeni, ha a claimet már rendesen benyújtottad, van nyoma a beküldésnek, eltelt egy ésszerű idő, és még mindig nincs érdemi válasz vagy csak automatikus visszaigazolást kaptál.",
                },
              },
              {
                "@type": "Question",
                name: "Mit írj egy jó follow-upban?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Egy jó follow-up rövid, tárgyszerű és könnyen ellenőrizhető. Legyen benne a claim dátuma, a járatszám, a PNR, a végső érkezésre vonatkozó fő adat és egy világos kérés arra, hogy a légitársaság érdemben reagáljon.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor nem elég már egy újabb follow-up?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha a légitársaság sablonosan ismétli önmagát, nyilvánvalóan nem vizsgálja a dokumentumokat, vagy túl régóta nincs érdemi előrelépés, akkor egy újabb follow-up helyett már erősebb továbblépésen érdemes gondolkodni.",
                },
              },
            ],
          }),
        }}
      />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <nav className="mb-8 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/hu" className="hover:text-blue-600 dark:hover:text-blue-400">
              Fooldal
            </Link>
            <span className="mx-2">/</span>
            <Link href="/hu/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 dark:text-white">Follow-up a légitársaságnak</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor küldj follow-upot a légitársaságnak?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              To praktyczny wpis dla pasażera, który już wysłał claim i nie wie, czy dalej czekać, czy przypomnieć się
              linii. Dobry <strong>follow-up</strong> nie jest spamem ani emocjonalnym ponagleniem. Jego celem jest
              przesunąć sprawę do przodu, a nie tylko wysłać kolejnego maila.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <MailCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Rövid, snippetre kész válasz</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Follow-upot wtedy warto wysłać, gdy claim został już poprawnie złożony, masz ślad zgłoszenia i
              minął rozsądny czas bez konkretnej odpowiedzi.</strong> Dobry follow-up jest krótki, rzeczowy i opiera
              się na faktach: dacie zgłoszenia, numerze lotu, `PNR` i końcowym efekcie problemu dla pasażera.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Chcesz sprawdzić, czy follow-up ma jeszcze sens?</h2>
            <p className="mb-6 text-blue-100">
              Zanim wyślesz kolejne przypomnienie, warto ocenić, czy sprawa potrzebuje jeszcze follow-upu, czy już
              mocniejszego ruchu. Dobrze dobrany następny krok często oszczędza sporo czasu.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy következő lépésének ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor jó a follow-up?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Masz potwierdzenie wcześniejszego zgłoszenia.</li>
                <li>Minął rozsądny czas bez merytorycznej odpowiedzi.</li>
                <li>Możesz podać konkretny numer sprawy, lot i `PNR`.</li>
                <li>Twój follow-up realnie porządkuje sprawę i wzmacnia claim.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor to już za mało?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nie masz żadnego śladu, że pierwszy claim w ogóle dotarł.</li>
                <li>Chcesz wysłać dokładnie ten sam tekst co wcześniej.</li>
                <li>Linia od dawna odpowiada wyłącznie formułkami.</li>
                <li>Sprawa wygląda już bardziej na potrzebę eskalacji niż przypomnienia.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Follow-up ma sens tylko wtedy, gdy jest do czego wrócić
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Najsłabszy follow-up to taki, który nie odwołuje się do niczego konkretnego. Jeśli nie masz numeru
                sprawy, potwierdzenia wysyłki albo przynajmniej jasnej daty pierwotnego claimu, to nowa wiadomość
                często nie porządkuje sprawy, tylko zaczyna ją od nowa.
              </p>
              <p>
                Dlatego zanim napiszesz follow-up, zbierz podstawy: datę zgłoszenia, numer lotu, `PNR`, to co wysłałeś
                wcześniej i główne dokumenty, które pokazują przebieg podróży.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Dobry follow-up jest krótki i konkretny
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                W follow-upie nie chodzi o napisanie dłuższego maila niż za pierwszym razem. Działa raczej odwrotna
                logika: krótko przypominasz, kiedy claim został złożony, czego dotyczył i że nadal czekasz na
                merytoryczną odpowiedź.
              </p>
              <p>
                Jeśli masz nowy element wzmacniający sprawę, na przykład lepiej pokazany `végső érkezés` albo
                dodatkowe załączniki, właśnie wtedy follow-up zyskuje realną wartość.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Nie każdy brak odpowiedzi oznacza to samo
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Czym innym jest automatyczne potwierdzenie przyjęcia zgłoszenia, czym innym cisza, a czym innym
                szablonowa odpowiedź, która wygląda formalnie, ale nie odnosi się do faktów. Follow-up najlepiej działa
                wtedy, gdy ma jasno nazwać, czego jeszcze brakuje po stronie linii.
              </p>
              <p>
                Gdy przewoźnik od dłuższego czasu tylko powtarza tę samą formułkę, problemem nie jest już brak
                przypomnienia, ale brak realnego ruchu po ich stronie.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Időzítés</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Follow-up działa najlepiej wtedy, gdy odwołuje się do realnego opóźnienia odpowiedzi, a nie do
                niecierpliwości pasażera.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <MessageSquareMore className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Tömörség</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najlepsze follow-upy są krótkie, czytelne i od razu pokazują, jakiej odpowiedzi oczekujesz.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ShieldAlert className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Következő lépés</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dobry follow-up pomaga ocenić, czy warto jeszcze czekać, czy trzeba już myśleć o mocniejszej
                eskalacji.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Najczęstszy błąd przy follow-upie</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Najczęstszy błąd to wysyłanie kolejnych wiadomości, które niczego nie porządkują. Jeśli follow-up nie
              dodaje daty zgłoszenia, numeru sprawy, `PNR`, głównego faktu o `végső érkezés` albo konkretnego pytania
              do linii, bardzo łatwo staje się tylko następnym mailem w kolejce.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Hányszor érdemes follow-upot küldeni?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Liczy się nie sama liczba wiadomości, tylko ich sens. Jeśli nowy mail nic nie dodaje i nie zmienia
                  pozycji sprawy, kolejny follow-up zwykle niewiele daje.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy w follow-upie warto dołączać dokumenty jeszcze raz?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tak, jeśli wzmacniają sprawę albo pomagają szybciej zrozumieć claim. Warto jednak wysyłać tylko te
                  załączniki, które realnie porządkują problem.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Skąd wiedzieć, że follow-up już nie wystarczy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Jeśli linia od dawna nie daje merytorycznej odpowiedzi, powtarza formułki albo ignoruje kluczowe
                  dokumenty, problem nie polega już na braku przypomnienia, tylko na braku realnej reakcji.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Claim elakadt és nem tudod, czy írni jeszcze raz?</h2>
            <p className="mb-6 text-slate-300">
              Jeśli nie masz pewności, czy wysłać follow-up, czy przejść do mocniejszego kroku, lepiej ocenić to przed
              stratą kolejnych tygodni. Czasem dobrze zrobiony follow-up pomaga, a czasem tylko wydłuża sprawę.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Következő lépés ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
