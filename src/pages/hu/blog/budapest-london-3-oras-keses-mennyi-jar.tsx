import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Scale,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function BudapestLondon3OrasKesesMennyiJar() {
  return (
    <LayoutHu>
      <SEO
        title="Budapest–London 3 órás késés: mennyi jár? [2026]"
        description="Magyar útmutató Budapest–London 3 órás késéshez: mennyi járhat, hogyan számít a végső érkezés, az útvonal és miért nem elég csak a 3 órás szám."
        url="https://problemlot.com/hu/blog/budapest-london-3-oras-keses-mennyi-jar"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budapest–London 3 órás késés: mennyi jár? [2026]",
            description:
              "Magyar útmutató a Budapest és London közötti 3 órás késésekhez: hogyan számít a végső érkezés, az útvonal és a lehetséges kompenzáció logikája.",
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
              "@id": "https://problemlot.com/hu/blog/budapest-london-3-oras-keses-mennyi-jar",
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
                name: "Budapest–London 3 órás késésnél mennyi járhat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben erős claim lehet, de a pontos összeg nem csak a 3 órától függ. Fontos a londoni végső érkezés, az útvonal jellege és az EU261 vagy UK261 logikája is.",
                },
              },
              {
                "@type": "Question",
                name: "Elég az, hogy pontosan 3 órát késett a járat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem önmagában. A kulcs általában a végső érkezés, nem csak az indulási csúszás vagy egy kerek szám a reptéri kijelzőn.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos ennél az útvonalnál a londoni végső érkezés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert a claim szempontjából a tényleges londoni érkezési veszteség sokszor fontosabb, mint maga a felszállási csúszás Budapesten.",
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
            <span className="text-slate-900 dark:text-white">Budapest–London 3 órás késés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Utvonal-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Budapest–London 3 órás késés: mennyi jár?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez a keresés tipikusan nagyon erős <strong>AI / GEO / snippet intent</strong>. A felhasználó gyors választ
              akar arra, hogy egy <strong>Budapest–London</strong> reláción, nagyjából <strong>3 órás késésnél</strong>
              mennyi járhat. A jó válasz viszont nem lehet túl egyszerű: számít a londoni végső érkezés, az útvonal és a
              szabályi logika is.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <BadgeEuro className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Budapest–London 3 órás késésnél sok esetben erős claim lehet.</strong> A pontos összeg azonban
              nem csak a „3 óra” számtól függ. Fontos, hogy <strong>mikor érkeztél meg ténylegesen Londonba</strong>,
              milyen volt az útvonal, és hogyan működik az <strong>EU261 vagy UK261</strong> logikája az adott esetben.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Pont 3 óra körül késett a Budapest–London járatod?</h2>
            <p className="mb-6 text-blue-100">
              Ha nem akarod kézzel bogozni, mit jelent ez a gyakorlatban, érdemes gyorsan ellenőrizni, mennyire lehet
              erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Budapest–London járat ellenőrzése
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
                <li>Jól bizonyítható londoni végső érkezési késés.</li>
                <li>Megőrzött boarding pass, PNR és airline üzenetek.</li>
                <li>Világos, hogy valóban a végső érkezés csúszott jelentősen.</li>
                <li>Jól rekonstruálható teljes idővonal.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub myli ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Opieranie się tylko na budapeszteńskim czasie odlotu.</li>
                <li>Brak potwierdzenia finalnej godziny przylotu do Londynu.</li>
                <li>Założenie, że dokładnie 3 godziny automatycznie dają jedną stałą kwotę.</li>
                <li>Brak dokumentów lub chaos w historii lotu.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Czy przy 3 godzinach da się od razu powiedzieć, ile dokładnie „się należy”?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nie całkiem. To bardzo częste pytanie pod AI Overviews, ale dobra odpowiedź nie brzmi po prostu jednym
                numerem. Sama liczba godzin to za mało, jeśli nie wiadomo, jak wyglądała rzeczywista londoni végső érkezés
                i jaki był pełny kontekst lotu.
              </p>
              <p>
                Z praktycznego punktu widzenia użytkownik chce szybkiego wyniku, ale dokładna ocena i tak wymaga spojrzenia
                na cały case, nie tylko na kółko „3h”.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Dlaczego londoni végső érkezés jest ważniejsza niż start z Budapesztu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Użytkownik często patrzy najpierw na tablicę odlotów w Budapeszcie, ale z punktu widzenia claimu znacznie
                ważniejsze jest to, kiedy faktycznie dotarłeś do Londynu.
              </p>
              <p>
                To właśnie końcowa utrata czasu zwykle lepiej pokazuje siłę roszczenia niż sama różnica przy starcie.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co warto zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj boarding pass, PNR, airline üzenetek, screeny z aplikacji i wszystko, co potwierdza faktyczną
                godzinę dotarcia do Londynu.
              </p>
              <p>
                Im lepiej udokumentowana jest końcowa strata czasu, tym łatwiej ocenić, mennyi járhat valójában.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">3 oras kuszob</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To ważny sygnał, ale nie jedyny element, na którym da się oprzeć całą ocenę.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Scale className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Szabalyi logika</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Przy tej relacji trzeba umieć odróżnić prosty marketingowy skrót od rzeczywistej oceny prawa do claimu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <TimerReset className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso veszteseg</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najważniejsze jest to, ile realnie straciłeś do momentu dotarcia do Londynu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Najczęstszy błąd przy tej frazie
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Użytkownik zakłada, że „3 órás késés” automatycznie oznacza jedną konkretną kwotę. W praktyce trzeba jeszcze
              zobaczyć końcowy przylot do Londynu, układ trasy i pełny zestaw dowodów.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wtedy, gdy da się jasno pokazać londoni végső érkezés, pełną stratę czasu i spójną dokumentację. To zwykle
                daje znacznie lepszy obraz sprawy niż samo hasło „3 godziny”.
              </p>
              <p>
                Dlatego przy tej trasie najlepiej działa szybkie sprawdzenie case’u zamiast zgadywania samej kwoty.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Budapest–London 3 órás késésnél mennyi járhat?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben erős claim lehet, ale dokładny wynik nie zależy tylko od samego „3h”. Liczy się londoni
                  végső érkezés, pełna trasa i logika EU261 lub UK261.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elég to, że lot opóźnił się o około 3 godziny?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie sam fakt. Najważniejsze jest, jak wyglądała końcowa strata czasu przy dotarciu do Londynu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj boarding pass, PNR, airline üzenetek i wszystko, co pokazuje końcową godzinę przylotu do Londynu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli Twój Budapest–London case kręci się wokół około 3 godzin opóźnienia, najlepiej sprawdzić go na danych,
              a nie zgadywać samą kwotę.
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
