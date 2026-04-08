import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  GitBranch,
  Globe,
  Map,
  ShieldAlert,
  Waypoints,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function EuNKivuliCsatlakozasSzabalyok() {
  return (
    <LayoutHu>
      <SEO
        title="EU-n kívüli csatlakozás szabályok – mikor számít az EU261? [2026]"
        description="Magyar útmutató EU-n kívüli csatlakozásokhoz: mikor számít az EU261, hogyan számít az egy foglalás, a teljes útvonal és a végső érkezés."
        url="https://problemlot.com/hu/blog/eu-n-kivuli-csatlakozas-szabalyok"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "EU-n kívüli csatlakozás szabályok – mikor számít az EU261? [2026]",
            description:
              "Magyar útmutató EU-n kívüli csatlakozásokhoz: hogyan számít az egy foglalás, a teljes útvonal és az EU261 hatálya a gyakorlatban.",
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
              "@id": "https://problemlot.com/hu/blog/eu-n-kivuli-csatlakozas-szabalyok",
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
                name: "EU-n kívüli csatlakozásnál is számíthat az EU261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, bizonyos esetekben igen. A kulcs itt az indulási pont, a teljes útvonal, az egy foglalás kérdése és az, hogy melyik légitársaság működtette az utat.",
                },
              },
              {
                "@type": "Question",
                name: "Miért nem elég csak azt nézni, hogy a csatlakozás az EU-n kívül történt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert a szabályi logikát nem önmagában a csatlakozás helye dönti el. Gyakran a teljes route, az indulás helye és a foglalás szerkezete a döntő.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni ilyen ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a teljes útvonal adatait, a foglalási kódot, az összes boarding passt, az airline-üzeneteket és a végső célállomás tényleges érkezési idejét.",
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
            <span className="text-slate-900 dark:text-white">EU-n kívüli csatlakozás</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Globe className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              EU-n kívüli csatlakozás szabályok
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az <strong>EU-n kívüli csatlakozás</strong> to klasyczny temat GEO: użytkownik wie, że coś z podróżą się
              rozsypało, ale nie rozumie, czy skoro sama przesiadka była poza UE, to <strong>EU261</strong> jeszcze w ogóle
              ma znaczenie. W tym wpisie porządkuję właśnie tę granicę: liczy się nie sam punkt na mapie, ale cały route i
              sposób rezerwacji.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Waypoints className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>EU-n kívüli csatlakozásnál is lehet erős claim bizonyos esetekben.</strong> Nem elég jednak patrzeć
              tylko na miejsce samej przesiadki. Liczy się <strong>pełny útvonal</strong>, miejsce rozpoczęcia podróży,
              pytanie o <strong>egy foglalás</strong> oraz to, jak działa az adott airline.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">EU-n kívül veszett el a csatlakozás?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli nie wiesz, czy sama lokalizacja przesiadki wyłącza ochronę, najlepiej szybko sprawdzić pełny route i
              strukturę rezerwacji.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Route ellenőrzése
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
                <li>Jasno udokumentowany pełny route od początku do końca.</li>
                <li>Wyraźnie widać, że to jedna podróż na jednej rezerwacji.</li>
                <li>Megőrzött boarding passek i wiadomości od przewoźnika.</li>
                <li>Udokumentowana końcowa strata czasu przy dotarciu do celu.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub miesza ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Założenie, że sama przesiadka poza UE automatycznie wszystko wyłącza.</li>
                <li>Brak danych o pełnym początku i końcu podróży.</li>
                <li>Niepewność, czy był to jeden bilet czy osobne rezerwacje.</li>
                <li>Brak końcowego czasu dotarcia do celu.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért miejsce samej przesiadki nie daje jeszcze dobrej odpowiedzi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                To jeden z największych błędów użytkowników. Widzą, że connection było poza UE, więc zakładają, że ochrona
                od razu znika. W praktyce sama lokalizacja przesiadki jeszcze nie wystarcza do sensownej oceny.
              </p>
              <p>
                Trzeba patrzeć szerzej: skąd ruszyła podróż, jak wyglądał pełny route i jak została zbudowana rezerwacja.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért az egy foglalás kérdése tak wiele zmienia?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo to właśnie ona pokazuje, czy analizujemy jedną ciągłą podróż, czy raczej kilka osobnych odcinków,
                które tylko z perspektywy pasażera wyglądały jak jedna całość.
              </p>
              <p>
                Przy connection cases poza UE to bardzo często najważniejsza rzecz do ustalenia już na starcie.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj pełne dane całego route, numer rezerwacji, boarding passek, komunikaty od przewoźnika oraz dane
                pokazujące rzeczywisty czas dotarcia do końcowego celu.
              </p>
              <p>
                Im lepiej pokazany jest cały łańcuch podróży, tym łatwiej ocenić, czy i jak działa tutaj EU261.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Map className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes route</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ocena zaczyna się od całej podróży, nie od jednego lotniska transferowego.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <GitBranch className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Egy foglalas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To często najważniejszy filtr rozróżniający podobnie wyglądające sprawy.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Pełna dokumentacja trasy i końcowego przylotu pozwala w ogóle sensownie ocenić case.
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
              Użytkownik patrzy tylko na jedno zdanie: „przesiadka była poza UE”. To za mało. Dopiero pełny route pokazuje,
              czy ochrona może działać i jak mocny jest cały case.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy wyraźnie widać pełną podróż, jedną rezerwację, dużą stratę czasu przy dotarciu do celu i spójną dokumentację
                całego łańcucha lotów.
              </p>
              <p>
                W takich sprawach kluczowe jest nie tyle jedno zdarzenie, ile poprawne złożenie całej historii podróży.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  EU-n kívüli csatlakozásnál is számíthat az EU261?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, bizonyos sytuacjach tak. Liczy się jednak pełny route, jedna rezerwacja i końcowy rezultat podróży.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miért nie wystarczy patrzeć tylko na miejsce przesiadki?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo sama lokalizacja connection nie wyjaśnia jeszcze, jak działa ochrona. Trzeba zobaczyć całą podróż.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj pełny route, boarding passek, numer rezerwacji i dane końcowego dotarcia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli connection outside the EU rozsypał Ci całą podróż, najlepiej sprawdzić pełny route i strukturę rezerwacji,
              zamiast zgadywać po samym miejscu przesiadki.
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
