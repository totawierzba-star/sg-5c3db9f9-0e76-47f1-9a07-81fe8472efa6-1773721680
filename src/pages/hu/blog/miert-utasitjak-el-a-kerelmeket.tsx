import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileWarning,
  ShieldAlert,
  TextSearch,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MiertUtasitjakElAKerelmeket() {
  return (
    <LayoutHu>
      <SEO
        title="Miért utasítják el a kérelmeket? [2026]"
        description="Magyar útmutató a légitársasági kártérítési kérelmek elutasításának leggyakoribb okairól: mikor erős az indok, mikor gyenge, és mit jelent ez a claim szempontjából."
        url="https://problemlot.com/hu/blog/miert-utasitjak-el-a-kerelmeket"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Miért utasítják el a kérelmeket? [2026]",
            description:
              "Magyar útmutató a légitársasági kártérítési kérelmek elutasításának leggyakoribb okairól: mikor erős az indok, mikor gyenge, és mit jelent ez a claim szempontjából.",
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
              "@id": "https://problemlot.com/hu/blog/miert-utasitjak-el-a-kerelmeket",
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
                name: "Miért utasítják el gyakran a kártérítési kérelmeket?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Gyakori ok a hiányos dokumentáció, az EU261 hatályának hiánya, a rendkívüli körülményekre való hivatkozás, vagy egy sablonos, gyenge indoklás, amely nem feltétlenül zárja le az ügyet végleg.",
                },
              },
              {
                "@type": "Question",
                name: "Ha elutasítják a kérelmet, az azt jelenti, hogy gyenge az ügy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltétlenül. Az elutasítás önmagában még nem bizonyítja, hogy az ügy rossz. A döntő kérdés az, hogy mennyire konkrét és mennyire meggyőző az elutasítás indoklása.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor lehet még mindig erős a claim az elutasítás ellenére?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor, ha az indoklás sablonos, hiányos, ellentmondásos, vagy nem reagál a teljes útvonalra, a végső érkezésre és a benyújtott dokumentumokra.",
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
            <span className="text-slate-900 dark:text-white">Miért utasítják el</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FileWarning className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Miért utasítják el a kérelmeket?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez bardzo ważny wpis pod wysoki intent i GEO, bo wielu pasażerów słyszy „odmowa” i nie wie, czy problem leży
              w sprawie, czy tylko w sposobie, w jaki linia ją opisuje. Najważniejsze jest rozdzielenie
              <strong> realnie mocnych przyczyn odmowy</strong> od tych, które tylko brzmią stanowczo.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <TextSearch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Kérelmeket najczęściej odrzuca się z powodu słabej dokumentacji, sporu o zakres `EU261`, albo powołania się na wyjątkowe okoliczności.</strong>{" "}
              Nie każda odmowa oznacza jednak słaby claim. Kluczowe jest to, czy uzasadnienie jest konkretne, spójne i
              naprawdę odnosi się do całej sprawy.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Odmówili i nie wiesz, co to naprawdę znaczy?</h2>
            <p className="mb-6 text-blue-100">
              Najpierw warto rozłożyć odmowę na części: czy problem dotyczy dokumentów, zakresu przepisów, czy tylko
              słabego, szablonowego uzasadnienia. To zwykle dużo ważniejsze niż samo słowo „nie”.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Elutasított ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor odmowa może być logiczna?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Gdy lot faktycznie nie wpada w zakres `EU261`.</li>
                <li>Gdy dokumentacja pasażera jest bardzo słaba lub niepełna.</li>
                <li>Gdy sprawa dotyczy self-transfer albo problemu po stronie pasażera.</li>
                <li>Gdy uzasadnienie jest konkretne i dobrze opisuje pełny przebieg zdarzeń.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor odmowa wygląda słabo?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Gdy opiera się na bardzo ogólnej formule.</li>
                <li>Gdy nie odnosi się do końcowego opóźnienia i całej trasy.</li>
                <li>Gdy pomija dokumenty przesłane przez pasażera.</li>
                <li>Gdy można ją niemal skopiować do setek innych spraw.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Hiányos dokumentáció
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Jednym z najczęstszych powodów odmowy jest po prostu słaby materiał dowodowy. Jeśli nie ma czytelnego
                `PNR`, boarding pass, wiadomości od linii albo końcowego czasu dotarcia do celu, przewoźnik łatwiej
                buduje wrażenie, że sprawa jest niepełna.
              </p>
              <p>
                To nie zawsze oznacza, że claim jest zły. Czasem oznacza tylko, że został zbyt słabo pokazany.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Vita o zakres `EU261`
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wiele odmów wynika z tego, że linia albo pasażer inaczej rozumieją, czy dany lot w ogóle podlega unijnym
                przepisom. Dotyczy to szczególnie tras poza UE, przewoźników spoza UE i spraw z przesiadkami.
              </p>
              <p>
                Dlatego dobra analiza musi najpierw odpowiedzieć na pytanie o sam zakres ochrony, zanim przejdzie do
                wysokości czy zasadności wypłaty.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Rendkívüli körülmények és inne ogólne formuły
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                To jeden z najczęściej używanych argumentów, ale samo powołanie się na nadzwyczajne okoliczności nie
                zamyka jeszcze sprawy. Liczy się to, czy linia potrafi pokazać konkretny, wiarygodny związek między
                tym powodem a całym zakłóceniem lotu.
              </p>
              <p>
                Jeśli uzasadnienie jest zbyt ogólne, odmowa często nadal pozostawia sporo pola do dalszej analizy.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Sablonos odmowa zamiast realnej analizy
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Duża część pasażerów dostaje odpowiedzi, które brzmią poważnie, ale nie odpowiadają na sedno sprawy.
                To typowa sytuacja, gdy mail wygląda oficjalnie, ale nie mówi nic o trasie, końcowym opóźnieniu,
                załączonych dokumentach ani realnym przebiegu zdarzeń.
              </p>
              <p>
                W takich przypadkach najważniejsze jest nie samo „odmówili”, ale to, jak słaba jest treść tej odmowy.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileWarning className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentumok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Słaba dokumentacja to jeden z najczęstszych powodów, dla których linia łatwo odrzuca claim.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <TextSearch className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Indoklas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Kluczowe jest nie samo „nie”, ale to, czy linia naprawdę potrafi uzasadnić swoją odmowę.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Gyenge pontok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Wiele odmów ma słabe punkty, które wychodzą dopiero po spokojnej analizie całego claimu.
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
              Najczęstszy błąd to uznać każdą odmowę za dowód, że sprawa jest słaba. W praktyce trzeba najpierw zobaczyć,
              czy linia naprawdę pokazała mocną podstawę odmowy, czy tylko użyła wygodnej, ogólnej formuły.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mi a najczęstszy powód odmowy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bardzo często to słaba dokumentacja, spór o zakres `EU261` albo zbyt ogólne powołanie się na wyjątkowe okoliczności.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Czy odmowa zawsze oznacza koniec sprawy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie. To zależy od jakości uzasadnienia i od tego, jak mocno udokumentowany jest sam claim.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Kiedy warto spojrzeć na odmowę jeszcze raz?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Gdy pismo jest krótkie, ogólne, nie odnosi się do dokumentów albo nie tłumaczy całego przebiegu zakłócenia.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
