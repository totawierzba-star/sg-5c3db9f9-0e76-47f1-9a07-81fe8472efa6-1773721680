import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Gavel,
  Scale,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorErdemesBirosaghozFordulni() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor érdemes bírósághoz fordulni? [2026]"
        description="Magyar útmutató arról, mikor érdemes bírósághoz fordulni repülési kártérítés ügyben: hogyan mérd fel a bizonyítékokat, az airline válaszát és az ügy erejét."
        url="https://problemlot.com/hu/blog/mikor-erdemes-birosaghoz-fordulni"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mikor érdemes bírósághoz fordulni? [2026]",
            description:
              "Magyar útmutató arról, mikor érdemes bírósághoz fordulni repülési kártérítés ügyben: hogyan mérd fel a bizonyítékokat, az airline válaszát és az ügy erejét.",
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
              "@id": "https://problemlot.com/hu/blog/mikor-erdemes-birosaghoz-fordulni",
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
                name: "Mikor érdemes bírósághoz fordulni egy repülési ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Általában akkor, ha az ügy erős dokumentációval rendelkezik, a légitársaság nem válaszol vagy gyenge indokkal utasít el, és a sima reklamációs szakasz már nem visz előre.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor korai még a bírósági lépés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor, ha a bizonyítékok hiányosak, az utas még nem rendezte a timeline-t, vagy az airline válasza alapján előbb célszerű pontosítani és megerősíteni az ügyet.",
                },
              },
              {
                "@type": "Question",
                name: "Minden elutasított igénnyel érdemes bíróságra menni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Az elutasítás önmagában nem elég. Előbb azt kell megnézni, hogy az indoklás mennyire erős, mennyire teljes a dokumentáció, és valóban van-e jól felépített ügy.",
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
            <span className="text-slate-900 dark:text-white">Bírósághoz fordulni</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Gavel className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor érdemes bírósághoz fordulni?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez ważny wpis proceduralny pod wysoki intent, bo użytkownik po odmowie albo ciszy linii często zbyt szybko
              myśli o <strong>bíróság</strong>, albo przeciwnie, odwleka eskalację zbyt długo. Najważniejsze jest nie samo
              „iść do sądu”, tylko ocenić, czy sprawa jest już <strong>dojrzała dowodowo i logicznie</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Gavel className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Akkor érdemes bírósághoz fordulni, ha az ügy már erős dokumentációval rendelkezik</strong>, a
              légitársaság nem reagál vagy gyenge indokkal utasít el, és a szokásos reklamációs szakasz már nem visz
              előre. Sama odmowa nie wystarcza, jeśli timeline i dowody są jeszcze nieuporządkowane.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Myślisz o eskalacji sprawy?</h2>
            <p className="mb-6 text-blue-100">
              Zanim wejdziesz w cięższy etap, najlepiej sprawdzić, czy dokumentacja, odmowa linii i cały timeline
              naprawdę tworzą mocny case.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti az eskaláció értelmét?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Kompletny timeline i dobrze zachowane dowody.</li>
                <li>Jasno widoczny końcowy wpływ problemu na podróż.</li>
                <li>Brak odpowiedzi albo słaba, szablonowa odmowa linii.</li>
                <li>Dobrze rozdzielona logika roszczenia i realistyczny opis sprawy.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor korai még?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Brakuje kluczowych dowodów albo końcowego czasu dotarcia.</li>
                <li>Utas nie uporządkował jeszcze własnej wersji przebiegu sprawy.</li>
                <li>Odmowa linii jest niejasna, ale nie została jeszcze dobrze przeanalizowana.</li>
                <li>Sprawa jest emocjonalnie pilna, ale jeszcze słaba dowodowo.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért nem każda odmowa oznacza od razu sąd?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wiele odmów jest szablonowych albo skrótowych i same w sobie nie pokazują jeszcze, jak silna jest pozycja
                przewoźnika. Najpierw trzeba ocenić, czy linia naprawdę odpowiedziała na sedno sprawy.
              </p>
              <p>
                Jeśli pasażer idzie dalej bez uporządkowania własnego materiału dowodowego, może osłabić nawet obiektywnie
                mocny case.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mi mutatja, hogy az ügy już dojrzał?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Dojrzała sprawa to taka, w której widać pełny przebieg zdarzeń: plan lotu, problem, reakcję linii,
                ewentualny nowy routing i końcowy efekt dla pasażera.
              </p>
              <p>
                Im mniej luk, chaosu i niespójności, tym sensowniejsza staje się poważniejsza eskalacja.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit rendezz el, mielőtt myślisz o sądzie?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Uporządkuj booking, boarding pass, wiadomości od linii, końcowy czas dotarcia do celu, rachunki i własny,
                krótki opis całego przebiegu. Bez tego nawet dobra sprawa może wyglądać gorzej, niż jest naprawdę.
              </p>
              <p>
                W praktyce chodzi o to, żeby najpierw mieć mocną, czytelną historię sprawy, a dopiero potem iść w cięższą
                ścieżkę egzekwowania.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Bez pełnego zestawu dowodów eskalacja jest bardziej ryzykowna i mniej przekonująca.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Scale className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Odmowa linii</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Kluczowe jest nie to, że odmowa padła, ale czy jest konkretna, spójna i dobrze uzasadniona.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <TimerReset className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Jo idozites</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Zbyt wczesna eskalacja bywa tak samo słaba jak zbyt długie czekanie bez żadnego ruchu.
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
              Najczęstszy błąd to myślenie, że samo słowo <strong>„elutasítva”</strong> automatycznie oznacza gotowość
              do wejścia w etap sądowy. W praktyce najpierw trzeba sprawdzić, czy sprawa jest naprawdę dobrze złożona i
              czy airline została już skonfrontowana z mocnym, uporządkowanym claimem.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Minden elutasított ügyet érdemes bíróságra vinni?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem. Najpierw trzeba ocenić siłę odmowy, komplet dowodów i to, czy sprawa jest już logicznie gotowa do
                  dalszej eskalacji.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mi a legfontosabb a bírósági myśleniu előtt?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Kompletny timeline, dokumentacja i jasna odpowiedź na pytanie, co dokładnie pokazuje siłę Twojego claimu.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Co jeśli linia po prostu milczy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Długie milczenie może wzmacniać sens eskalacji, ale nadal warto wcześniej uporządkować dokumenty i
                  sprawdzić, czy sprawa jest naprawdę gotowa na cięższy etap.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
