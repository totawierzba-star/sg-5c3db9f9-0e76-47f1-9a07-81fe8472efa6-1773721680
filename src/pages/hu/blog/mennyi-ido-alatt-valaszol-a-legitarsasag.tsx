import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MailCheck,
  MessageSquareMore,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MennyiIdoAlattValaszolALegitarsasag() {
  return (
    <LayoutHu>
      <SEO
        title="Mennyi idő alatt válaszol a légitársaság? [2026]"
        description="Magyar útmutató arról, mennyi idő alatt válaszol a légitársaság egy kártérítési ügyben, mikor normális még a várakozás, és mikor érdemes továbblépni."
        url="https://problemlot.com/hu/blog/mennyi-ido-alatt-valaszol-a-legitarsasag"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mennyi idő alatt válaszol a légitársaság? [2026]",
            description:
              "Magyar útmutató arról, mennyi idő alatt válaszol a légitársaság egy kártérítési ügyben, mikor normális még a várakozás, és mikor érdemes továbblépni.",
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
            datePublished: "2026-04-08",
            dateModified: "2026-04-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/mennyi-ido-alatt-valaszol-a-legitarsasag",
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
                name: "Mennyi idő alatt szokott válaszolni a légitársaság?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nincs egyetlen univerzális időtartam. Rövidebb adminisztratív várakozás még normális lehet, de ha az ügy tartósan nem kap érdemi reakciót, akkor már nem a türelem, hanem a tudatos utánkövetés lesz fontos.",
                },
              },
              {
                "@type": "Question",
                name: "Mit jelent az, ha csak automatikus választ kaptam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az automatikus visszaigazolás azt mutathatja, hogy az ügy beérkezett, de nem jelenti azt, hogy érdemi vizsgálat is történt. A fontos kérdés az, hogy később jön-e konkrét, ügyre szabott reakció.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor nem érdemes tovább passzívan várni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor, ha már hosszabb ideje nincs valódi előrelépés, csak sablonos üzenetek ismétlődnek, vagy teljes a csend. Ilyenkor érdemes strukturált follow-uppal és erősebb ügyépítéssel továbblépni.",
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
            <span className="text-slate-900 dark:text-white">Mennyi idő alatt válaszolnak</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Clock3 className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mennyi idő alatt válaszol a légitársaság?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez bardzo ważny wpis proceduralny pod wysoki intent, bo użytkownik po wysłaniu claimu zwykle chce wiedzieć,
              czy jego sprawa <strong>utknęła</strong>, czy po prostu jest jeszcze w zwykłym obiegu. Kluczowe jest nie samo
              liczenie dni, ale rozpoznanie, czy w sprawie pojawia się <strong>jakikolwiek realny ruch</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Nincs egyetlen stała odpowiedź, po ilu dniach linia musi odpisać w praktyce.</strong> Krótszy czas
              oczekiwania może być jeszcze normalny, ale jeśli sprawa długo nie dostaje żadnej konkretnej odpowiedzi,
              pojawiają się tylko szablony albo całkowita cisza, warto przejść z samego czekania do uporządkowanego
              follow-upu.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Czekasz na odpowiedź linii?</h2>
            <p className="mb-6 text-blue-100">
              Zanim uznasz, że sprawa utknęła, warto sprawdzić, czy jest jakikolwiek ślad realnej obsługi: numer sprawy,
              prośba o uzupełnienie, konkretne pytanie albo odpowiedź odnosząca się do Twojego timeline’u.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy állapotának ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi utal arra, hogy az ügy még él?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jest potwierdzenie przyjęcia zgłoszenia.</li>
                <li>Pojawia się numer sprawy albo konkretny ticket.</li>
                <li>Linia prosi o doprecyzowanie lub uzupełnienie dokumentów.</li>
                <li>Odpowiedź odnosi się do faktów z Twojej sprawy, a nie tylko do ogólnego szablonu.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi pokazuje, że samo czekanie już nie wystarcza?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Przez dłuższy czas nie ma żadnej merytorycznej reakcji.</li>
                <li>Powtarzają się tylko automatyczne lub ogólne wiadomości.</li>
                <li>Brak jasnej informacji, czy claim w ogóle jest analizowany.</li>
                <li>Masz komplet dowodów, ale sprawa nadal stoi w miejscu.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért nie da się podać jednej dobrej liczby dni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Różne linie lotnicze, różne kanały zgłoszeń i różne stopnie skomplikowania spraw powodują, że sam czas
                oczekiwania nie daje jeszcze pełnej odpowiedzi. Jedna sprawa może ruszyć szybko, a inna wymagać więcej
                obiegu administracyjnego.
              </p>
              <p>
                Dlatego lepiej patrzeć nie tylko na kalendarz, ale na jakość reakcji i to, czy widać realne przetwarzanie
                claimu.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mi a különbség między automatycznym potwierdzeniem a prawdziwą odpowiedzią?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Automatyczne potwierdzenie mówi tylko tyle, że coś wpłynęło do systemu. Nie oznacza jeszcze, że ktoś
                przeanalizował Twoją sprawę, porównał timeline albo odniósł się do dokumentów.
              </p>
              <p>
                Prawdziwa odpowiedź zaczyna się tam, gdzie linia odnosi się do konkretów: lotu, daty, końcowego wpływu
                problemu i Twoich załączników.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mikor warto przestać czekać biernie?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Jeśli masz już uporządkowany claim, zachowane potwierdzenie zgłoszenia i komplet dowodów, a mimo to nie
                dzieje się nic konkretnego, sama cierpliwość przestaje być strategią. Wtedy sens ma uporządkowany
                follow-up albo mocniejsze poprowadzenie sprawy.
              </p>
              <p>
                Najlepszy moment na taki ruch to nie emocjonalne zniecierpliwienie, tylko chwila, w której widać brak
                realnego postępu mimo dobrze przygotowanego zgłoszenia.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <MailCheck className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Visszaigazolas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Samo potwierdzenie wpływu zgłoszenia jest przydatne, ale nie kończy jeszcze etapu weryfikacji sprawy.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <MessageSquareMore className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Erdemi valasz</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najważniejsze jest to, czy linia faktycznie odniosła się do Twojego lotu i Twojego timeline’u.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <TimerReset className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Jo moment</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dobre wyczucie czasu pomaga nie eskalować za wcześnie, ale też nie tracić miesięcy na bierne czekanie.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Najczęstszy błąd przy tym temacie
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Najczęstszy błąd to patrzenie wyłącznie na upływ czasu i ignorowanie jakości komunikacji. Krótsze czekanie
              z konkretną obsługą może być zdrowsze niż długie tygodnie kompletnej ciszy albo samych szablonów.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Elég, ha kaptam automatikus visszaigazolást?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie. To dobry początek, ale ważniejsze jest to, czy później pojawia się konkretna, merytoryczna reakcja.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mit jelent a jó jel podczas oczekiwania?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Numer sprawy, pytanie o dokumenty, albo odpowiedź, która naprawdę odnosi się do Twojego lotu i przebiegu
                  zdarzeń.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mikor warto przestać tylko czekać?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Gdy mimo dobrze przygotowanego claimu nie ma realnego postępu, a komunikacja utknęła w ciszy albo
                  powtarzalnych szablonach.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
