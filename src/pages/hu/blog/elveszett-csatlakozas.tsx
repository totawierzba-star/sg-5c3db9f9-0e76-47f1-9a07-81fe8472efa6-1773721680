import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  GitBranch,
  Plane,
  Route,
  ShieldAlert,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function ElveszettCsatlakozas() {
  return (
    <LayoutHu>
      <SEO
        title="Elveszett csatlakozás – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató elveszett csatlakozáshoz: mikor lehet erős a claim, hogyan számít az egy foglalás, a végső érkezés és a teljes útvonal."
        url="https://problemlot.com/hu/blog/elveszett-csatlakozas"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Elveszett csatlakozás – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató az elveszett csatlakozásokhoz: hogyan számít az egy foglalás, a végső érkezés és a teljes utazási lánc.",
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
              "@id": "https://problemlot.com/hu/blog/elveszett-csatlakozas",
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
                name: "Elveszett csatlakozásnál lehet kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A claim erejét itt főleg az határozza meg, hogy egy foglalásról van-e szó, mikor értél oda a végső célállomásra, és hogyan dokumentálható a teljes útvonal.",
                },
              },
              {
                "@type": "Question",
                name: "Miért olyan fontos, hogy egy foglalás volt-e?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert ez gyakran alapvetően meghatározza, hogyan értékelhető a teljes utazási lánc. Egy valódi csatlakozási ügy és két külön jegy teljesen más helyzetet teremthet.",
                },
              },
              {
                "@type": "Question",
                name: "Mit őrizzek meg elveszett csatlakozásnál?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a teljes foglalási adatokat, a boarding passeket, az airline üzeneteit, az eredeti és új útvonal részleteit, valamint a végső célállomás tényleges érkezési idejét.",
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
            <span className="text-slate-900 dark:text-white">Elveszett csatlakozás</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <GitBranch className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Elveszett csatlakozás
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az <strong>elveszett csatlakozás</strong> az egyik najmocniejszych tematów pod high intent i GEO. Użytkownik
              zwykle czuje, że „przez pierwszy lot wszystko się posypało”, ale nie zawsze wie, czy chodzi o prawdziwy
              csatlakozási ügy na <strong>egy foglalás</strong>, czy o zupełnie inną sytuację. Właśnie to trzeba tu dobrze
              uporządkować.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
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
              <strong>Elveszett csatlakozásnál sok esetben lehet erős claim.</strong> A kulcskérdés usually az, hogy
              <strong> egy foglalásról</strong> volt-e szó, hogyan nézett ki a teljes útvonal, i kiedy faktycznie dotarłeś
              do końcowego celu.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Lekésted a csatlakozást przez opóźnienie?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli pierwszy odcinek rozsypał Ci dalszą podróż, najlepiej szybko sprawdzić, czy chodzi o mocny claim i
              jak uporządkować pełny timeline.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Csatlakozási ügy ellenőrzése
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
                <li>Jasno widać, że cała podróż była na jednej rezerwacji.</li>
                <li>Megőrzött boarding passek i pełne dane całego route.</li>
                <li>Dobrze udokumentowane końcowe dotarcie do celu.</li>
                <li>Wyraźnie pokazana pełna strata czasu po utracie connection.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub komplikuje sprawę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Brak pewności, czy to było jedno czy dwa osobne bilety.</li>
                <li>Niepełna dokumentacja dalszej części podróży.</li>
                <li>Brak dowodu finalnej godziny dotarcia do celu.</li>
                <li>Chaos w komunikacji i brak zapisanych zmian trasy.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért ennyire ważne jest, hogy to było egy foglalás?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                To właśnie ten element bardzo często decyduje o tym, czy użytkownik opisuje klasyczny csatlakozási ügy,
                czy raczej dwa osobne loty, które tylko wyglądały jak jedna podróż.
              </p>
              <p>
                W praktyce ta różnica mocno wpływa na ocenę całego case’u, dlatego trzeba ją ustalić od razu.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért a végső célállomás a kulcs, a nie sama utracona przesiadka?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Utracona przesiadka jest zwykle momentem największego stresu, ale z punktu widzenia claimu równie ważne
                jest to, kiedy faktycznie dotarłeś do końcowego miejsca podróży.
              </p>
              <p>
                To końcowa strata czasu najlepiej pokazuje, jak duży był realny problem po rozpadzie całego route.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj wszystkie boarding passek, pełny numer rezerwacji, wiadomości od linii, screeny zmian w aplikacji
                i dane pokazujące, kiedy naprawdę dotarłeś do końcowego celu.
              </p>
              <p>
                Jeśli po utracie connection pojawił się nowy routing, hotel lub transport, również trzeba to dokładnie zapisać.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <GitBranch className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Egy foglalas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To jedna z najważniejszych rzeczy do ustalenia na samym początku analizy.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ostateczna godzina dotarcia do celu zwykle najlepiej pokazuje skalę szkody czasowej.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Im pełniejszy zapis zmian trasy i komunikacji, tym łatwiej zbudować mocny case.
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
              Użytkownik zakłada, że każda utracona przesiadka działa tak samo. W praktyce trzeba najpierw ustalić,
              czy była to jedna podróż na jednej rezerwacji, bo to zmienia całą ocenę sprawy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze pokazano, że cała podróż była na jednej rezerwacji, utrata connection przełożyła się na dużą
                końcową stratę czasu, a cały route jest dobrze udokumentowany.
              </p>
              <p>
                W takich sprawach bardzo dużo zależy od poprawnego złożenia całego timeline’u, nie tylko od jednego lotu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elveszett csatlakozásnál lehet kártérítés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. Kluczowe jest jednak to, czy chodzi o jedną rezerwację i jak duża była końcowa strata czasu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miért olyan ważne, że to było jedno foglalás?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo to często decyduje, czy analizujemy klasyczny utracony connection, czy dwie osobne podróże wymagające innej oceny.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj pełne dane rezerwacji, boarding passek, wiadomości od linii i dowody końcowego dotarcia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli przez pierwszy lot rozsypała się dalsza podróż, najlepiej szybko sprawdzić, czy to mocny connection case
              i jak wygląda pełny timeline całego route.
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
