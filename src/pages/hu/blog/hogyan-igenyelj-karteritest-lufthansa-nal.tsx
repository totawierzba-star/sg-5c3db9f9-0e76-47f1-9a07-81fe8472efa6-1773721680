import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  GitBranch,
  Mail,
  Plane,
  Send,
  ShieldAlert,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function HogyanIgenyeljKarteritestLufthansanal() {
  return (
    <LayoutHu>
      <SEO
        title="Hogyan igényelj kártérítést Lufthansa-nál? [2026]"
        description="Magyar útmutató a Lufthansa kártérítési igényléséhez: mit készíts elő, mit őrizz meg, és hogyan építs erős claimet a teljes útvonal alapján."
        url="https://problemlot.com/hu/blog/hogyan-igenyelj-karteritest-lufthansa-nal"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hogyan igényelj kártérítést Lufthansa-nál? [2026]",
            description:
              "Magyar útmutató a Lufthansa kártérítési igényléséhez: hogyan készítsd elő a dokumentumokat, és hogyan építs erős ügyet a teljes útvonal alapján.",
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
              "@id": "https://problemlot.com/hu/blog/hogyan-igenyelj-karteritest-lufthansa-nal",
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
                name: "Hogyan érdemes elindítani a Lufthansa kártérítési igényt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Először érdemes összegyűjteni a teljes dokumentációt: PNR, boarding pass, Lufthansa üzenetek, a végső érkezés ideje és a teljes útvonal adatai. Csak ezután érdemes beadni az igényt.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos Lufthansánál a teljes útvonal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert ennél a légitársaságnál sok ügy több szakaszból és átszállásból áll. A claim erejét ezért gyakran jobban mutatja a végső célállomásra érkezés, mint az egyes részek külön-külön.",
                },
              },
              {
                "@type": "Question",
                name: "Mit őrizzek meg a beadás előtt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a foglalási adatokat, az összes boarding passt, a Lufthansa kommunikációját, az új útvonal részleteit és a végső érkezésed idejét.",
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
            <span className="text-slate-900 dark:text-white">Lufthansa igénylés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ClipboardList className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hogyan igényelj kártérítést Lufthansa-nál?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez egy mocny wpis proceduralny dla użytkownika, który chce ruszyć z claimem do <strong>Lufthansa</strong>.
              Przy tej linii bardzo często pojawia się jeszcze jeden ważny element: <strong>pełny route z przesiadkami</strong>.
              Dlatego samo zgłoszenie trzeba budować nie tylko wokół jednego lotu, ale często wokół całej podróży.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ClipboardList className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>A Lufthansa kártérítési igényt is érdemes teljes dokumentációval és a teljes útvonalra nézve előkészíteni.</strong>
              Sam formularz to ważny krok, ale przy tej linii często kluczowe są <strong>przesiadki</strong>, końcowa godzina
              dotarcia do celu i dobrze uporządkowany komplet dowodów.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Lufthansa ügyet akarsz beadni?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli chcesz zacząć claim do Lufthansy, najlepiej najpierw poukładać cały route, dokumenty i końcowy czas
              dotarcia do celu, zanim wyślesz formularz.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Lufthansa ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a beadást?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Teljes PNR i wszystkie boarding passek z całej podróży.</li>
                <li>Megőrzött Lufthansa mailek i appos komunikaty.</li>
                <li>Wyraźnie zapisany końcowy czas dotarcia do celu.</li>
                <li>Dobrze uporządkowany pełny route, zwłaszcza przy przesiadkach.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub komplikuje sprawę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Patrzenie tylko na jeden segment lotu przy podróży złożonej.</li>
                <li>Brak danych o finalnym dotarciu do końcowego celu.</li>
                <li>Niepełna dokumentacja dalszych odcinków i zmian trasy.</li>
                <li>Założenie, że sam formularz zastąpi porządne przygotowanie case’u.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Od czego najlepiej zacząć?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Najpierw zbierz pełen route: numer rezerwacji, wszystkie boarding passek, komunikaty od Lufthansy,
                ewentualne zmiany trasy oraz dane pokazujące, kiedy faktycznie dotarłeś do miejsca docelowego.
              </p>
              <p>
                Przy tej linii bardzo często największy sens ma patrzenie na całą podróż, a nie tylko na pierwszy problematyczny odcinek.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért pełny route jest przy Lufthansie tak ważny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo wiele Lufthansa cases dotyczy podróży złożonych z kilku segmentów i przesiadek. W takim układzie pojedynczy
                lot nie zawsze najlepiej pokazuje realny problem pasażera.
              </p>
              <p>
                Dużo ważniejsze bywa to, jak opóźnienie lub zmiana wpłynęły na końcowe dotarcie do celu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit kell megőrizni beadás előtt?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj pełny PNR, wszystkie boarding passek, maile i komunikaty od linii, nowe odcinki podróży oraz
                końcowy czas przybycia do celu.
              </p>
              <p>
                Im lepiej uporządkowany jest cały chain, tym łatwiej zbudować logiczny i mocny case jeszcze przed wysłaniem formularza.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <GitBranch className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes route</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Przy podróży złożonej to pełny chain zwykle najlepiej pokazuje skalę problemu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Mail className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Kommunikacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Lufthansa mailek i komunikaty pomagają odtworzyć dokładny przebieg całej podróży.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Bizonyitas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dobrze zebrane dokumenty z całej trasy tworzą dużo mocniejszy claim niż sam pojedynczy odcinek.
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
              Pasażer buduje zgłoszenie tylko wokół jednego lotu, choć problem realnie dotyczył całej podróży z przesiadkami.
              To osłabia cały obraz sprawy już na starcie.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy jeszcze przed zgłoszeniem masz pełen route, komplet dokumentów i jasno pokazany końcowy czas dotarcia
                do celu po całej podróży.
              </p>
              <p>
                W takich sprawach bardzo dużo daje traktowanie claimu jako uporządkowanego projektu obejmującego cały chain lotów.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Hogyan érdemes elindítani a Lufthansa kártérítési igényt?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najlepiej zacząć od zebrania pełnej dokumentacji całej podróży i dopiero potem przejść do formularza.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miért fontos Lufthansánál a teljes útvonal?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo wiele spraw dotyczy podróży z przesiadkami, więc to końcowe dotarcie do celu lepiej pokazuje skalę problemu niż pojedynczy lot.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit őrizzek meg a beadás előtt?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj pełny PNR, wszystkie boarding passek, komunikację od linii i końcowy czas dotarcia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli chcesz ruszyć z Lufthansa claimem, najlepiej najpierw poukładać pełny route i końcowe dotarcie do celu,
              zanim przejdziesz do formularza.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Ügy ellenőrzése most
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
