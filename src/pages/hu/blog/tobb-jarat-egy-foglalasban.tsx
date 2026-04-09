import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  GitBranch,
  Plane,
  Route,
  ShieldAlert,
  Ticket,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function TobbJaratEgyFoglalasban() {
  return (
    <LayoutHu>
      <SEO
        title="Több járat egy foglalásban – mikor lehet erős a claim? [2026]"
        description="Magyar útmutató több járat egy foglalásban témához: hogyan számít az egy foglalás, a végső célállomás és a teljes utazási lánc."
        url="https://problemlot.com/hu/blog/tobb-jarat-egy-foglalasban"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Több járat egy foglalásban – mikor lehet erős a claim? [2026]",
            description:
              "Magyar útmutató több járat egy foglalásban esetéhez: hogyan számít az egy foglalás, a végső célállomás és a teljes utazási lánc.",
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
              "@id": "https://problemlot.com/hu/blog/tobb-jarat-egy-foglalasban",
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
                name: "Ha több járat egy foglalásban volt, erősebb lehet a claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen. Egy foglalásnál a teljes utazási lánc és a végső célállomás késése gyakran fontosabb, mint az egyes szakaszok külön-külön nézve.",
                },
              },
              {
                "@type": "Question",
                name: "Miért olyan fontos az egy foglalás?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert ez gyakran meghatározza, hogy a teljes út egy egységként értékelhető-e, és hogy a végső célállomásra érkezés hogyan számít a claim szempontjából.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni ilyen ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a teljes foglalást, az összes boarding passt, a PNR-t, az airline üzeneteit és a végső célállomás tényleges érkezési idejét.",
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
            <span className="text-slate-900 dark:text-white">Több járat egy foglalásban</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Ticket className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Több járat egy foglalásban
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>több járat egy foglalásban</strong> to bardzo ważny temat pod wysoki intent i GEO, bo użytkownik
              zwykle czuje, że wszystko było „jedną podróżą”, ale nie wie jeszcze, jak to przełożyć na claim. W praktyce
              właśnie ta jedna rezerwacja często decyduje o tym, czy patrzymy na całą trasę jako jeden spójny łańcuch.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Route className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Ha több járat egy foglalásban volt, sok esetben erősebb lehet a claim logikája.</strong> Ilyenkor
              często najważniejsze staje się nie to, co stało się na jednym odcinku, lecz <strong>jak całość wpłynęła na
              végső célállomásra érkezést</strong>.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Több odcinek, jedna rezerwacja?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli problem zaczął się na jednym locie, ale rozlał się na całą podróż, najlepiej szybko sprawdzić pełny
              chain i końcowe dotarcie do celu.
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
                Mi erősíti az ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jasno widać, że wszystkie odcinki były na jednej rezerwacji.</li>
                <li>Megőrzött boarding passek i pełny PNR całej podróży.</li>
                <li>Dobrze udokumentowane końcowe dotarcie do celu.</li>
                <li>Wyraźna pełna strata czasu na całym chainie podróży.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub miesza ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Brak pewności, czy to była jedna, czy kilka osobnych rezerwacji.</li>
                <li>Niepełna dokumentacja dalszych odcinków podróży.</li>
                <li>Brak końcowego czasu dotarcia do celu.</li>
                <li>Skupienie się tylko na jednym locie bez analizy całego route.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért jedna rezerwacja tak wiele zmienia?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo pozwala spojrzeć na całą podróż jako na jeden logiczny ciąg, a nie tylko zbiór osobnych odcinków.
                W praktyce to często całkowicie zmienia sposób oceny opóźnienia, anulacji czy utraconej przesiadki.
              </p>
              <p>
                Właśnie dlatego warto ustalić to od razu, zanim zacznie się analizować pojedyncze segmenty.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért a végső célállomás a kulcs, a nie tylko pierwszy problematyczny lot?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo to właśnie końcowe dotarcie do celu zwykle najlepiej pokazuje realną skalę szkody czasowej. Pierwszy lot
                może wyglądać jak niewielki problem, ale dopiero cały chain pokazuje pełny efekt.
              </p>
              <p>
                Dlatego w tego typu sprawach trzeba patrzeć szerzej niż na pojedynczy numer rejsu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj pełny PNR, wszystkie boarding passek, komunikaty od linii i dane pokazujące, kiedy faktycznie
                dotarłeś do końcowego miejsca podróży.
              </p>
              <p>
                Im pełniejszy obraz całego chainu, tym łatwiej później pokazać, jak bardzo problem jednego odcinka wpłynął
                na całą trasę.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <GitBranch className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Egy foglalas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To jeden z najmocniejszych elementów porządkujących cały case od samego początku.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso cel</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To końcowe dotarcie do celu najlepiej pokazuje, jak duża była realna strata czasu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Pełna dokumentacja wszystkich odcinków wzmacnia cały obraz podróży jako jednej całości.
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
              Pasażer analizuje tylko pierwszy popsuty lot i pomija fakt, że cała podróż była jedną rezerwacją. To właśnie
              przez to łatwo zgubić najmocniejszy argument całej sprawy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze pokazano, że wszystkie odcinki były objęte jedną rezerwacją, a problem jednego z nich znacząco
                opóźnił dotarcie do końcowego celu.
              </p>
              <p>
                W takich sprawach bardzo dużo daje spojrzenie na całą trasę jako jeden spójny chain podróży.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ha több járat egy foglalásban volt, erősebb lehet a claim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. Właśnie wtedy bardzo ważne staje się końcowe dotarcie do celu i pełny łańcuch podróży.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miért olyan fontos az egy foglalás?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo to często pozwala ocenić całą podróż jako jedną całość, a nie zbiór osobnych odcinków.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj pełny PNR, wszystkie boarding passek i dane pokazujące finalny czas dotarcia do końcowego celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli problem jednego lotu rozsypał całą podróż objętą jedną rezerwacją, najlepiej sprawdzić cały chain i
              końcowe dotarcie do celu, a nie tylko pierwszy segment.
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
