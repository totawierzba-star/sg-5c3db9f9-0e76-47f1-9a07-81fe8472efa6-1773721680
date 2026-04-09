import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Scale,
  ShieldAlert,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function AdrVagyHatosagMerreTovabb() {
  return (
    <LayoutHu>
      <SEO
        title="ADR vagy hatóság – merre tovább? [2026]"
        description="Magyar útmutató arról, hogy elakadt járatkártérítési ügyben ADR felé, hatóság felé vagy más irányba érdemes-e továbblépni, és hogyan válaszd ki a következő lépést."
        url="https://problemlot.com/hu/blog/adr-vagy-hatosag-merre-tovabb"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "ADR vagy hatóság – merre tovább? [2026]",
            description:
              "Magyar útmutató arról, hogy elakadt járatkártérítési ügyben ADR felé, hatóság felé vagy más irányba érdemes-e továbblépni, és hogyan válaszd ki a következő lépést.",
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
              "@id": "https://problemlot.com/hu/blog/adr-vagy-hatosag-merre-tovabb",
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
                name: "ADR vagy hatóság: melyik a jobb út?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nincs egyetlen jó válasz minden ügyre. Az számít, mennyire rendezett a dokumentáció, milyen választ adott a légitársaság, és hogy pontosan milyen eredményt vársz a következő lépéstől.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor lehet jobb az ADR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "ADR akkor lehet hasznos, ha a cél egy rendezettebb, strukturált vitarendezési út, és az ügy már eljutott oda, hogy a sima follow-up nem hoz előrelépést.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor nem érdemes találomra választani?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha nem világos, mi akasztotta el az ügyet, vagy hiányos a dokumentáció, a rosszul megválasztott következő lépés csak lassíthatja az ügyet. Ilyenkor előbb az ügy erejét érdemes rendbe tenni.",
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
            <span className="text-slate-900 dark:text-white">ADR vagy hatóság</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              ADR vagy hatóság – merre tovább?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              To wpis dla pasażera, który przeszedł już etap zwykłego claimu i follow-upu, ale nadal stoi w miejscu.
              Największy błąd na tym etapie to wybieranie kolejnej ścieżki przypadkowo. <strong>ADR</strong>,
              <strong> hatóság</strong> i inne formalne drogi nie robią tego samego, więc najpierw trzeba dobrze
              zrozumieć, czego dokładnie brakuje sprawie.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Rövid, snippetre kész válasz</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Nie ma jednej dobrej odpowiedzi na pytanie „ADR czy organ”.</strong> Wybór zależy od tego, jak
              mocno uporządkowana jest sprawa, czego brakuje po stronie linii i jaki rezultat chcesz osiągnąć w
              następnym kroku. Zły wybór ścieżki potrafi tylko wydłużyć postępowanie.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Nie wiesz, którą drogę wybrać po odmowie lub ciszy?</h2>
            <p className="mb-6 text-blue-100">
              Zanim wejdziesz w formalniejszy etap, warto ocenić, czy sprawa jest już gotowa na ADR, organ lub inną
              ścieżkę. Dobrze dobrany kierunek oszczędza czas i zmniejsza chaos.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Következő jogi lépés ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor ma sens iść dalej?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Claim jest już uporządkowany i dobrze udokumentowany.</li>
                <li>Linia nie odpowiada merytorycznie albo powtarza słabe argumenty.</li>
                <li>Wiesz, czego oczekujesz od kolejnego etapu.</li>
                <li>Masz historię zgłoszenia, follow-upów i odpowiedzi przewoźnika.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Kiedy jeszcze nie?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nie wiesz, co dokładnie jest słabym punktem sprawy.</li>
                <li>Brakuje dokumentów lub spójnego timeline’u.</li>
                <li>Chcesz wybrać ścieżkę tylko dlatego, że brzmi „bardziej formalnie”.</li>
                <li>Sprawa nie przeszła jeszcze przez sensowny etap claimu i follow-upu.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Najpierw ustal, czego brakuje sprawie
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Czasem problemem jest całkowity brak reakcji linii. Innym razem odpowiedź jest, ale nie odnosi się do
                dokumentów, `végső érkezés` albo głównego przebiegu podróży. Dopiero gdy rozpoznasz ten brak, sensownie
                wybierzesz kolejny kierunek.
              </p>
              <p>
                Bez takiej diagnozy ADR czy organ stają się tylko nazwą następnego kroku, a nie realnie dobraną
                strategią dla konkretnej sprawy.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. ADR i hatóság nie pełnią tej samej roli
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Użytkownicy często traktują te drogi jak synonimy, ale to błąd. Jedna ścieżka może lepiej służyć
                uporządkowanemu sporowi, druga bardziej ocenie zgodności działań linii z zasadami. Dlatego nie chodzi o
                to, która brzmi „mocniej”, tylko która lepiej pasuje do charakteru Twojej sprawy.
              </p>
              <p>
                W praktyce najważniejsze jest, czy kolejny etap ma szansę ruszyć sprawę do przodu, a nie tylko dodać
                jej formalności.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Zanim wybierzesz drogę, przygotuj mocny pakiet
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Niezależnie od tego, czy wybierzesz ADR, organ czy inną formalniejszą ścieżkę, potrzebujesz tego samego
                rdzenia: claimu, historii komunikacji, dokumentów i czytelnego obrazu skutku dla pasażera.
              </p>
              <p>
                To właśnie ten pakiet decyduje, czy następny krok będzie wyglądał poważnie i spójnie, czy tylko wydłuży
                sprawę bez realnej poprawy pozycji.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Users className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">ADR</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Przydaje się wtedy, gdy sprawa potrzebuje uporządkowanej ścieżki sporu, a nie kolejnego zwykłego
                przypomnienia.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Building2 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Hatóság</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Nie zawsze jest „następnym oczywistym krokiem”. Najpierw trzeba wiedzieć, po co chcesz po nią sięgnąć.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ShieldAlert className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Diagnózis</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najpierw zrozum słaby punkt sprawy. Dopiero potem wybieraj drogę, która naprawdę pasuje do problemu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Najczęstszy błąd przy tym wyborze</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Najczęstszy błąd to szukanie „najmocniej brzmiącej” ścieżki zamiast tej, która pasuje do sprawy. Jeśli
              claim nadal jest nieuporządkowany albo nie wiadomo, co dokładnie blokuje postęp, sam wybór ADR lub organu
              nie rozwiąże problemu.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy zawsze po odmowie trzeba iść do organu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie. Sama odmowa nie mówi jeszcze, która droga będzie najlepsza. Najpierw trzeba ocenić jakość
                  odpowiedzi i siłę dokumentacji.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy ADR jest zawsze szybszy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie ma takiej uniwersalnej reguły. Ważniejsze jest to, czy ADR pasuje do charakteru sporu i czy sprawa
                  jest już dobrze przygotowana.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Co warto mieć pod ręką przed wyborem ścieżki?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najważniejsze są: claim, dowód jego złożenia, odpowiedzi linii, `PNR`, dane lotu i jasny obraz tego,
                  jak wyglądał końcowy skutek dla pasażera.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Sprawa utknęła i nie chcesz wybrać złej ścieżki?</h2>
            <p className="mb-6 text-slate-300">
              Zanim wejdziesz w ADR, organ albo inną formalną drogę, warto ocenić, czego dokładnie potrzebuje sprawa.
              Dobrze dobrany kolejny krok jest zwykle ważniejszy niż samo tempo działania.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Következő jogi lépés ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
