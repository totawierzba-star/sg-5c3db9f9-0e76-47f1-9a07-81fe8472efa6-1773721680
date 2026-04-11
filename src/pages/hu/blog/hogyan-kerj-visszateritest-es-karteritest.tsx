import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  ReceiptText,
  Scale,
  ShieldAlert,
  Wallet,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function HogyanKerjVisszateritestEsKarteritest() {
  return (
    <LayoutHu>
      <SEO
        title="Hogyan kérj visszatérítést + kártérítést? [2026]"
        description="Magyar útmutató visszatérítés és kártérítés együttes igényléséhez: mi a különbség, mikor kérhető mindkettő, és hogyan építs erős ügyet."
        url="https://problemlot.com/hu/blog/hogyan-kerj-visszateritest-es-karteritest"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hogyan kérj visszatérítést + kártérítést? [2026]",
            description:
              "Magyar útmutató a visszatérítés és kártérítés együttes igényléséhez: hogyan különül el a két igény, és mikor lehet mindkettő releváns.",
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
              "@id": "https://problemlot.com/hu/blog/hogyan-kerj-visszateritest-es-karteritest",
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
                name: "Kérhető egyszerre visszatérítés és kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Bizonyos esetekben igen. A két igény nem ugyanaz: a visszatérítés a jegy értékéről, a kártérítés pedig a járatprobléma jogi következményéről szól, ezért külön kell őket helyesen értelmezni.",
                },
              },
              {
                "@type": "Question",
                name: "Miért nem szabad összekeverni a visszatérítést és a kártérítést?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert a két igény más logikán alapul. Ha az utas összemossa őket, könnyen rosszul kommunikálja a saját ügyét, és gyengítheti a claimet.",
                },
              },
              {
                "@type": "Question",
                name: "Mit őrizzek meg, ha mindkettőt szeretném érvényesíteni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a foglalási adatokat, a fizetés igazolását, az airline kommunikációját, a végső érkezésed adatait és minden olyan költségdokumentumot, ami a helyzetet pontosan mutatja.",
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
            <span className="text-slate-900 dark:text-white">Visszatérítés és kártérítés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Wallet className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hogyan kérj visszatérítést + kártérítést?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez bardzo ważny wpis proceduralno-decyzyjny, bo użytkownik bardzo często miesza <strong>visszatérítés</strong>{" "}
              i <strong>kártérítés</strong>. W praktyce to dwa różne świadczenia, oparte na innej logice. Dobra analiza musi
              więc najpierw rozdzielić te pojęcia, a dopiero potem pokazać, kiedy mogą występować obok siebie.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Bizonyos esetekben kérhető egyszerre visszatérítés és kártérítés is.</strong> Najważniejsze jest
              jednak to, że to <strong>nie są te same pieniądze</strong>. Zwrot dotyczy samego biletu lub niewykorzystanej
              usługi, a kártérítés dotyczy skutku prawnego problemu z lotem.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Zwrot i odszkodowanie naraz?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli nie chcesz pomylić dwóch różnych roszczeń, najlepiej najpierw uporządkować logikę sprawy i dokumenty,
              a dopiero potem wysyłać zgłoszenie.
            </p>
            <a
              href="https://claimwinger.com/hu/torolt-jarat"
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
                <li>Jasne rozdzielenie zwrotu od odszkodowania już na starcie.</li>
                <li>Megőrzött booking, płatność i pełna komunikacja od linii.</li>
                <li>Dobrze udokumentowany końcowy wpływ problemu na podróż.</li>
                <li>Spójna logika: co jest zwrotem, a co jest kártérítés.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub komplikuje sprawę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Mieszanie obu roszczeń w jedno żądanie bez rozróżnienia.</li>
                <li>Brak dowodów płatności lub struktury rezerwacji.</li>
                <li>Brak danych o końcowym przebiegu podróży.</li>
                <li>Niejasne opisanie, czego dokładnie domaga się pasażer.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Mi a különbség a visszatérítés és a kártérítés között?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zwrot dotyczy zasadniczo pieniędzy za sam bilet lub niewykorzystaną usługę. Odszkodowanie dotyczy z kolei
                skutku prawnego zakłócenia lotu i nie jest tym samym, co prosty zwrot ceny.
              </p>
              <p>
                To rozróżnienie wydaje się proste, ale właśnie jego brak bardzo często psuje sposób komunikowania całej sprawy.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mikor lehet sensownie myśleć o obu rzeczach naraz?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wtedy, gdy sytuacja pasażera obejmuje zarówno problem z samą realizacją biletu, jak i osobny skutek
                wynikający z zakłócenia lotu. Nie chodzi więc o „to samo dwa razy”, ale o dwa różne elementy sprawy.
              </p>
              <p>
                Właśnie dlatego trzeba je opisywać oddzielnie i logicznie.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit kell megőrizni, ha mindkettő szóba jöhet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj booking, dowód płatności, boarding pass, komunikaty od linii, dane o końcowym dotarciu do celu
                i wszystkie rachunki związane z sytuacją.
              </p>
              <p>
                Im czytelniej widać, co było pierwotnym zakupem, a co późniejszym skutkiem problemu z lotem, tym mocniejsza analiza.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ReceiptText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Visszaterites</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dotyczy przede wszystkim biletu, płatności i tego, co zostało lub nie zostało zrealizowane.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Wallet className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Karterites</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dotyczy prawnego skutku zakłócenia lotu i nie powinno być mieszane z prostym zwrotem ceny.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Scale className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Kulon logika</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najmocniejsze sprawy to te, w których obie rzeczy są opisane osobno i bez mieszania pojęć.
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
              Pasażer wrzuca wszystko do jednego worka i domaga się „zwrotu i odszkodowania” bez pokazania, z czego każde
              roszczenie wynika. To osłabia czytelność całego case’u.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy już na starcie widać wyraźnie: co jest roszczeniem o zwrot, co jest roszczeniem o odszkodowanie i jakie
                dokumenty wspierają każdą z tych części.
              </p>
              <p>
                W takich sprawach bardzo dużo daje spokojne, logiczne rozdzielenie obu żądań jeszcze przed zgłoszeniem.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Kérhető egyszerre visszatérítés és kártérítés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bizonyos esetekben igen, ale trzeba pamiętać, że to dwa różne roszczenia oparte na innej logice.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miért nie wolno ich mieszać?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo wtedy sprawa staje się mniej czytelna i trudniej pokazać, z czego dokładnie wynika każde żądanie.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit őrizzek meg, ha mindkettőt szeretném?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj booking, płatność, komunikaty od linii, dane o końcowym dotarciu do celu i wszystkie ważne rachunki.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli zastanawiasz się, czy w Twojej sprawie chodzi o zwrot, odszkodowanie czy oba elementy naraz, najlepiej
              najpierw uporządkować logikę i dokumenty całego case’u.
            </p>
            <a
              href="https://claimwinger.com/hu/torolt-jarat"
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
