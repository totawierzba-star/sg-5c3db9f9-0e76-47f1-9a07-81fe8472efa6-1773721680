import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeftRight,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Plane,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function VisszaforduloRepulogep() {
  return (
    <LayoutHu>
      <SEO
        title="Visszaforduló repülőgép – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató visszaforduló repülőgép esetére: mikor lehet erős a claim, hogyan számít a végső érkezés, az új útvonal és a teljes időveszteség."
        url="https://problemlot.com/hu/blog/visszafordulo-repulogep"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Visszaforduló repülőgép – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató a visszaforduló repülőgépekhez: hogyan számít a végső érkezés, az új útvonal és a teljes időveszteség.",
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
              "@id": "https://problemlot.com/hu/blog/visszafordulo-repulogep",
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
                name: "Visszaforduló repülőgép esetén lehet kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A kulcskérdés ilyenkor nem csak maga a visszafordulás, hanem az is, hogy ez végül mennyi időveszteséget és milyen új útvonalat okozott.",
                },
              },
              {
                "@type": "Question",
                name: "Elég az, hogy a gép visszafordult?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem önmagában. A claim erejét a végső érkezés, a további szervezés, az alternatív megoldás és a dokumentáció együtt mutatja meg.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni ilyen helyzetben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a visszafordulásról szóló tájékoztatást, valamint minden adatot a további útvonalról és a végső érkezésedről.",
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
            <span className="text-slate-900 dark:text-white">Visszaforduló repülőgép</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ArrowLeftRight className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Visszaforduló repülőgép
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>visszaforduló repülőgép</strong> to bardzo charakterystyczny edge case, który pasażer zwykle pamięta
              bardzo wyraźnie. Sam moment powrotu robi duże wrażenie, ale z punktu widzenia claimu najważniejsze jest nie
              tylko to, że samolot zawrócił, lecz także <strong>jak bardzo rozwaliło to całą podróż</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Visszaforduló repülőgép esetén sok esetben lehet erős claim.</strong> Sam zawrót nie jest jednak
              jedyną rzeczą, na którą trzeba patrzeć. Kluczowe są <strong>végső érkezés</strong>, nowy przebieg podróży
              i pełna strata czasu po całym zdarzeniu.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A gép felszállt, majd visszafordult?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli po starcie wróciliście na lotnisko odlotu albo wylądowaliście awaryjnie gdzie indziej, najlepiej szybko
              sprawdzić pełny wpływ na końcowe dotarcie do celu.
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
                <li>Jasno udokumentowany zawrót i dalszy przebieg podróży.</li>
                <li>Megőrzött komunikaty od linii i dane nowego planu.</li>
                <li>Wyraźnie pokazana końcowa strata czasu.</li>
                <li>Spójne dane o finalnym dotarciu do celu.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub miesza ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Skupienie się tylko na samym momencie zawrotu.</li>
                <li>Brak danych o nowym locie, transferze albo dalszym planie.</li>
                <li>Niepełna dokumentacja końcowego dotarcia do celu.</li>
                <li>Brak uporządkowanego timeline’u po incydencie.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért sam zawrót nie rozstrzyga jeszcze całej sprawy?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                To najbardziej pamiętny moment dla pasażera, ale claim nie kończy się na samym fakcie, że samolot wrócił.
                Później zwykle zaczyna się druga część historii: oczekiwanie, nowy lot, zmiana trasy albo nocny pobyt.
              </p>
              <p>
                Właśnie dlatego trzeba patrzeć na całą podróż po zawrocie, a nie tylko na sam incydent.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért végső érkezés és pełen timeline są tu najważniejsze?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zawrót samolotu to często dopiero początek dużego opóźnienia. Dla realnej oceny dużo ważniejsze jest to,
                kiedy i w jaki sposób udało się ostatecznie dotrzeć do miejsca docelowego.
              </p>
              <p>
                Im większy był rozjazd między pierwotnym planem a faktycznym końcem podróży, tym większe znaczenie ma pełny timeline.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj boarding pass, PNR, komunikaty od linii, informacje o zawrocie, dane nowego lotu lub transferu
                oraz wszystko, co pokazuje moment końcowego dotarcia do celu.
              </p>
              <p>
                Bez tego łatwo pamiętać sam dramatyczny moment, ale trudniej potem udowodnić pełną skalę opóźnienia.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ArrowLeftRight className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Visszafordulas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To mocny sygnał, ale dopiero początek analizy całego wpływu na podróż.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To końcowy rezultat podróży pokazuje faktyczną skalę szkody czasowej po zawrocie.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Komunikaty i zapis dalszej podróży są kluczowe, by pokazać pełny wpływ zdarzenia.
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
              Pasażer pamięta przede wszystkim sam zawrót i emocje z nim związane, ale nie porządkuje późniejszych zmian:
              nowego lotu, transferu i końcowego przylotu. To później osłabia obraz całej sprawy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze pokazano zawrót, cały dalszy przebieg podróży i dużą końcową stratę czasu aż do właściwego celu.
              </p>
              <p>
                W takich sprawach największe znaczenie ma nie sama spektakularność incydentu, tylko końcowy koszt czasowy dla pasażera.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Visszaforduló repülőgép esetén lehet kártérítés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. Kluczowe jest jednak to, jak zawrót wpłynął na końcowe dotarcie do celu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elég az, że samolot zawrócił?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie samo w sobie. Trzeba jeszcze zobaczyć nowy przebieg podróży, finalny przylot i pełną stratę czasu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj dane o zawrocie, nowe połączenie lub transfer i dokumenty pokazujące końcowy czas dotarcia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli samolot zawrócił po starcie lub nie doleciał do celu zgodnie z planem, najlepiej sprawdzić cały wpływ
              na końcową podróż, a nie tylko sam moment zawrotu.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Claim ellenőrzése most
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
