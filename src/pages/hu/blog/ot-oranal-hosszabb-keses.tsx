import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Hourglass,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function OtOranalHosszabbKeses() {
  return (
    <LayoutHu>
      <SEO
        title="5 óránál hosszabb késés – mikor lehet erős a claim? [2026]"
        description="Magyar útmutató 5 óránál hosszabb járatkéséshez: mikor lehet erős a claim, hogyan számít a végső érkezés, a teljes időveszteség és a dokumentáció."
        url="https://problemlot.com/hu/blog/ot-oranal-hosszabb-keses"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "5 óránál hosszabb késés – mikor lehet erős a claim? [2026]",
            description:
              "Magyar útmutató az 5 óránál hosszabb késésekhez: hogyan számít a végső érkezés, a teljes időveszteség és a dokumentáció.",
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
              "@id": "https://problemlot.com/hu/blog/ot-oranal-hosszabb-keses",
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
                name: "5 óránál hosszabb késésnél erős lehet a claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. Az öt órát meghaladó késés nagyon fontos gyakorlati küszöb, de a claim erejét továbbra is a végső érkezés, a teljes útvonal és a dokumentáció mutatja meg igazán.",
                },
              },
              {
                "@type": "Question",
                name: "Elég az, hogy a késés több mint 5 óra volt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem önmagában. Az időtartam nagyon fontos jelzés, de a végső célállomásra érkezés, az utas döntései és az egész ügy gyakorlati következményei is számítanak.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni 5 óránál hosszabb késésnél?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a kijelzőfotókat, a költségbizonyítékokat és minden adatot, ami a végső érkezést mutatja.",
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
            <span className="text-slate-900 dark:text-white">5 óránál hosszabb késés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Hourglass className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              5 óránál hosszabb késés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az <strong>5 óránál hosszabb késés</strong> to bardzo mocny temat pod snippets, AI Overviews i conversion.
              Użytkownik zwykle chce jednej, szybkiej odpowiedzi: czy to już naprawdę poważny case. Dobra odpowiedź brzmi:
              to bardzo ważny próg praktyczny, ale nadal trzeba dobrze zobaczyć <strong>cały skutek dla podróży</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Hourglass className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>5 óránál hosszabb késésnél sok esetben erős claim lehet.</strong> Sam próg pięciu godzin jest bardzo
              ważny, ale nie wystarcza sam w sobie. Nadal trzeba patrzeć na <strong>végső érkezés</strong>, pełną stratę
              czasu, dokumentację i praktyczny wpływ na pasażera.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Több mint 5 órát késett a járatod?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli opóźnienie przekroczyło pięć godzin, najlepiej szybko sprawdzić pełną skalę sprawy i uporządkować
              dokumenty, bo to zwykle już bardzo poważny problem praktyczny.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Késés ellenőrzése
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
                <li>Bardzo duża końcowa strata czasu.</li>
                <li>Megőrzött boarding pass, PNR i pełna komunikacja od linii.</li>
                <li>Wyraźnie udokumentowany finalny przylot do celu.</li>
                <li>Rozsądnie zachowane koszty i dowody skutków opóźnienia.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub miesza ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Założenie, że sam próg 5 godzin automatycznie daje pełną odpowiedź.</li>
                <li>Brak danych o końcowym dotarciu do celu.</li>
                <li>Nieuporządkowane dokumenty i koszty.</li>
                <li>Brak pełnego obrazu wpływu opóźnienia na podróż.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért próg 5 godzin jest tak ważny praktycznie?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo przy takim opóźnieniu problem zwykle przestaje być tylko „niewygodą”. Zaczyna realnie rozwalać plan dnia,
                połączenia, noclegi, spotkania i dalszą logistykę.
              </p>
              <p>
                Dlatego pięć godzin to dla użytkownika bardzo mocny sygnał, że sprawę warto traktować serio.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért sama liczba godzin nie wystarcza?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo nawet przy bardzo dużym opóźnieniu nadal trzeba zobaczyć, jak wyglądał końcowy rezultat podróży.
                Czasem różnica między planem a rzeczywistością jest jeszcze większa niż sugeruje sam licznik godzin.
              </p>
              <p>
                Właśnie dlatego końcowe dotarcie do celu i pełna dokumentacja nadal pozostają kluczowe.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj boarding pass, PNR, komunikaty od linii, zdjęcia z tablic lotów, rachunki za uzasadnione koszty
                i wszystkie dane pokazujące, kiedy faktycznie dotarłeś do celu.
              </p>
              <p>
                Przy tak dużym opóźnieniu dobrze uporządkowane dokumenty bardzo pomagają pokazać realną skalę problemu.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Hourglass className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">5 oras kuszob</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To bardzo silny praktyczny sygnał, że opóźnienie miało już realny ciężar dla pasażera.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <TimerReset className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes veszteseg</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ostatecznie liczy się cały realny koszt czasowy i organizacyjny, nie sam próg godzinowy.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dobrze uporządkowane dowody pomagają pokazać, jak bardzo opóźnienie zmieniło całą podróż.
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
              Pasażer widzi „ponad 5 godzin” i uznaje, że to już cała odpowiedź. Tymczasem nadal trzeba dobrze pokazać
              końcowe dotarcie do celu i pełną skalę skutków dla podróży.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze udokumentowano bardzo dużą końcową stratę czasu, pełen przebieg sprawy i realny wpływ na podróż.
              </p>
              <p>
                W takich sytuacjach szybkie uporządkowanie dowodów potrafi bardzo wzmocnić cały obraz case’u.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  5 óránál hosszabb késésnél erős lehet a claim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. To bardzo mocny sygnał praktyczny, ale nadal trzeba ocenić końcowe dotarcie do celu i dokumenty.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elég az, że opóźnienie trwało ponad 5 godzin?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie samo w sobie. Liczy się także końcowy rezultat podróży i pełna skala problemu dla pasażera.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj boarding pass, PNR, komunikaty od linii, rachunki i dane pokazujące finalny czas dotarcia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli opóźnienie przekroczyło pięć godzin, najlepiej od razu sprawdzić pełny wpływ na podróż i uporządkować
              dokumenty, zamiast opierać się tylko na samym progu czasu.
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
