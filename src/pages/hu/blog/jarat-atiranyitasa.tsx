import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bus,
  CheckCircle2,
  Clock3,
  FileText,
  MapPin,
  Plane,
  Route,
  ShieldAlert,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function JaratAtiranyitasa() {
  return (
    <LayoutHu>
      <SEO
        title="Járat átirányítása – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató átirányított járathoz: mikor lehet erős a claim, hogyan számít a végső célállomás, a transzfer és a teljes időveszteség."
        url="https://problemlot.com/hu/blog/jarat-atiranyitasa"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Járat átirányítása – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató az átirányított járatokhoz: hogyan számít a végső célállomás, a transzfer és a teljes időveszteség.",
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
              "@id": "https://problemlot.com/hu/blog/jarat-atiranyitasa",
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
                name: "Járat átirányítása esetén lehet kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A kulcskérdés ilyenkor nem csak az, hogy hova szállt le a gép, hanem az is, hogy mikor jutottál el ténylegesen a végső célállomásodra.",
                },
              },
              {
                "@type": "Question",
                name: "Miért nem elég azt nézni, hogy másik repülőtéren szálltam le?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert az átirányítás valódi hatását a végső út és a teljes pluszidő mutatja meg. A helyettesítő reptér önmagában még nem teljes válasz.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni átirányításnál?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a tényleges leszállási hely adatait, a transzfer részleteit és a végső célállomásra érkezés idejét.",
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
            <span className="text-slate-900 dark:text-white">Járat átirányítása</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Route className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Járat átirányítása
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>járat átirányítása</strong> to bardzo praktyczny temat, bo po diversionie pasażer często nie wie,
              czy ma patrzeć na sam fakt lądowania na innym lotnisku, na późniejszy transfer, czy na końcowe dotarcie do celu.
              W praktyce najważniejsze jest to, jak cała zmiana wpłynęła na <strong>pełną podróż</strong>.
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
              <strong>Járat átirányítása esetén sok esetben lehet erős claim.</strong> Najważniejsze pytanie brzmi nie tylko
              „gdzie wylądowałem?”, ale <strong>„kiedy naprawdę dotarłem do końcowego celu?”</strong>. To właśnie pełna strata
              czasu po diversionie zwykle najlepiej pokazuje wagę sprawy.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Másik repülőtéren szállt le a géped?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli po diversionie musiałeś jeszcze dojechać do celu autobusem, taxi lub nowym lotem, najlepiej szybko
              sprawdzić pełną skalę straty czasu.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Átirányítás ellenőrzése
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
                <li>Jól udokumentowane rzeczywiste lądowanie w innym miejscu.</li>
                <li>Megőrzött transfer details: bus, taxi, train lub nowy lot.</li>
                <li>Wyraźnie pokazana końcowa strata czasu aż do celu podróży.</li>
                <li>Spójna komunikacja i dokumenty od przewoźnika.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub myli ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Skupienie się tylko na lotnisku zastępczym bez końcowego rezultatu podróży.</li>
                <li>Brak danych o transferze do właściwego celu.</li>
                <li>Nieuporządkowane rachunki lub brak dowodu późniejszego dojazdu.</li>
                <li>Brak dokumentów pokazujących całkowitą stratę czasu.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért samo lądowanie na innym lotnisku nie daje jeszcze pełnej odpowiedzi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Diversion jest zwykle najbardziej widocznym momentem problemu, ale nie zawsze najlepiej pokazuje jego
                realny wpływ. Czasem prawdziwy ciężar sprawy zaczyna się dopiero po wylądowaniu, gdy trzeba organizować
                dalszy transport do celu.
              </p>
              <p>
                Dlatego sama nazwa lotniska zastępczego to za mało. Liczy się cała dalsza droga.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért końcowe dotarcie do celu jest tu najważniejsze?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                To właśnie ono pokazuje, jak długa była prawdziwa strata czasu po diversionie. Jeśli po lądowaniu w innym
                mieście musiałeś jeszcze długo dojeżdżać, cała sprawa może wyglądać dużo poważniej niż sam moment zmiany lotniska.
              </p>
              <p>
                W praktyce trzeba więc patrzeć na pełny chain podróży, nie tylko na jeden segment lotniczy.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj boarding pass, PNR, komunikaty od linii, dane o alternatywnym lotnisku, rachunki za transfer i
                wszystkie informacje pokazujące, kiedy faktycznie dotarłeś do właściwego celu.
              </p>
              <p>
                Im dokładniej pokazany jest cały proces po diversionie, tym łatwiej ocenić siłę sprawy.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <MapPin className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Alternativ repter</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To ważny fakt, ale jeszcze nie pełny obraz praktycznego skutku diversionu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Bus className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Transfer</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To właśnie dalszy transport często pokazuje realny koszt czasowy i organizacyjny całej sytuacji.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Rachunki, komunikaty i końcowy czas dotarcia do celu budują najważniejszy materiał dowodowy.
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
              Pasażer kończy analizę na stwierdzeniu „wylądowaliśmy gdzie indziej”. Tymczasem to dopiero połowa historii.
              Trzeba jeszcze pokazać, ile czasu i wysiłku kosztowało dotarcie do właściwego celu.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze udokumentowano lotnisko zastępcze, dalszy transport i pełną stratę czasu aż do właściwego celu.
              </p>
              <p>
                W takich sprawach największe znaczenie ma nie sama zmiana miejsca lądowania, tylko końcowy efekt dla pasażera.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Járat átirányítása esetén lehet kártérítés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. Najważniejsze jest jednak to, kiedy naprawdę dotarłeś do końcowego celu podróży.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miért nie wystarczy patrzeć tylko na lotnisko zastępcze?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo to dopiero początek problemu. O sile sprawy często decyduje późniejszy transfer i finalna strata czasu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy diversionie?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj dane o lądowaniu zastępczym, transferze i końcowym dotarciu do celu, plus pełną komunikację od linii.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli samolot wylądował gdzie indziej niż planowano, najlepiej sprawdzić pełny wpływ na całą podróż, a nie
              kończyć analizę na samym diversionie.
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
