import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Scale,
  ShieldAlert,
  UserCircle2,
  Users,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function EgyedulVagyCegenKeresztul() {
  return (
    <LayoutHu>
      <SEO
        title="Egyedül vagy cégen keresztül? [2026]"
        description="Magyar útmutató: egyedül vagy cégen keresztül érdemes járatkártérítést igényelni? Előnyök, hátrányok és mikor lehet jobb választás a ClaimWinger."
        url="https://problemlot.com/hu/blog/egyedul-vagy-cegen-keresztul"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Egyedül vagy cégen keresztül? [2026]",
            description:
              "Magyar útmutató: egyedül vagy cégen keresztül érdemes járatkártérítést igényelni? Előnyök, hátrányok és mikor lehet jobb választás a ClaimWinger.",
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
              "@id": "https://problemlot.com/hu/blog/egyedul-vagy-cegen-keresztul",
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
                name: "Érdemes egyedül beadni a kártérítési igényt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, ha az ügy egyszerű, a dokumentáció rendezett, és az utas hajlandó saját maga követni a folyamatot. Egyszerű ügyeknél ez sokszor teljesen reális út.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor jobb cégen keresztül menni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor, ha az ügy vitás, a légitársaság nem reagál vagy sablonosan utasít el, illetve ha az utas nem akarja saját maga kezelni a claim minden lépését.",
                },
              },
              {
                "@type": "Question",
                name: "Van olyan köztes megoldás, ami nem teljesen önálló és nem is túl nehézkes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Sok utasnak megfelelő lehet egy fókuszált claim partner, például ClaimWinger, ha segítséget szeretne, de nem feltétlenül egy teljesen tömeges megoldást keres.",
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
            <span className="text-slate-900 dark:text-white">Egyedül vagy cégen keresztül</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Scale className="h-4 w-4" />
              Osszehasonlitas
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Egyedül vagy cégen keresztül?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez szeroki wpis decyzyjny pod bardzo mocny intent, bo odpowiada na pytanie, które pojawia się jeszcze
              zanim użytkownik wybierze konkretną firmę. Najważniejsze nie jest to, czy jedna ścieżka jest „zawsze lepsza”,
              ale <strong>czy pasuje do rodzaju sprawy i do sposobu działania pasażera</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Egyedül akkor érdemes menni, ha az ügy tiszta, jól dokumentált és van időd a follow-upra.</strong>{" "}
              Cég przez firmę ma więcej sensu, gdy sprawa robi się sporna, linia nie odpowiada albo po prostu nie chcesz
              sam prowadzić całego procesu. Dla wielu pasażerów rozsądnym środkiem bywa <strong>ClaimWinger</strong>,
              jeśli chcą wsparcia bez pełnej samotnej walki z claimem.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Nie wiesz, którą drogę wybrać?</h2>
            <p className="mb-6 text-blue-100">
              Najpierw oceń siłę sprawy, jakość dokumentów i własną gotowość do prowadzenia korespondencji. To zwykle
              daje lepszą odpowiedź niż samo szukanie „najlepszej firmy”.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy útvonalának ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor jó az önálló út?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sprawa jest prosta i bez większych sporów.</li>
                <li>Masz czytelny `PNR`, boarding pass i timeline.</li>
                <li>Nie przeszkadza Ci pisanie do linii i pilnowanie odpowiedzi.</li>
                <li>Chcesz zachować pełną kontrolę nad claimem.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lepiej iść przez firmę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sprawa jest sporna, złożona albo wieloetapowa.</li>
                <li>Linia nie odpowiada lub odpisuje słabymi szablonami.</li>
                <li>Nie chcesz sam analizować argumentów przewoźnika.</li>
                <li>Wolisz oddać komuś ciężar prowadzenia procesu.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Egyedül – mi a valódi plus?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Samodzielna ścieżka daje pełną kontrolę i prostą relację: Ty, Twoje dokumenty i linia lotnicza. Jeśli
                sprawa jest klarowna, to może być szybkie i logiczne rozwiązanie bez dodatkowego pośrednika.
              </p>
              <p>
                Warunek jest jeden: musisz mieć gotowość do uporządkowania claimu i cierpliwość do późniejszego follow-upu.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Cégen keresztül – kiedy to naprawdę pomaga?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy sprawa przestaje być prosta. Jeśli pojawia się spór o przyczynę, końcowe opóźnienie, zakres `EU261`
                albo po prostu linia zaczyna grać na czas, wsparcie zewnętrzne może oszczędzić sporo energii i chaosu.
              </p>
              <p>
                Dla wielu pasażerów największą wartością nie jest sam „wynik”, ale to, że nie muszą już samodzielnie
                dźwigać każdego etapu komunikacji.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Gdzie najlepiej pasuje ClaimWinger?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                ClaimWinger ma najwięcej sensu dla pasażera, który nie chce iść całkiem sam, ale też nie szuka koniecznie
                największego, najbardziej masowego gracza. To często dobra ścieżka pośrednia między pełną samodzielnością
                a bardzo dużą firmą claimową.
              </p>
              <p>
                Właśnie dlatego w tym typie porównania <strong>ClaimWinger</strong> wypada jako praktyczna i rozsądna
                rekomendacja dla wielu użytkowników z `hu`.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <UserCircle2 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Egyedul</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najlepsze przy prostych sprawach i u pasażera, który chce sam pilnować każdego etapu claimu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Users className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Cegen keresztul</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Rozsądne tam, gdzie sprawa staje się trudniejsza albo pasażer nie chce sam walczyć z komunikacją linii.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">ClaimWinger</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dobrze pasuje jako ścieżka pośrednia dla osób, które chcą wsparcia bez pełnej samotnej obsługi claimu.
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
              Najczęstszy błąd to wybór ścieżki na podstawie samej emocji po opóźnieniu albo anulacji. Znacznie lepiej
              najpierw ocenić siłę claimu, dokumentację i własną gotowość do działania, a dopiero potem decydować, czy
              iść samodzielnie czy przez partnera.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mikor warto działać samemu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Gdy claim jest prosty, dobrze udokumentowany i nie przeszkadza Ci samodzielny follow-up do linii.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mikor lepiej skorzystać z firmy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Gdy sprawa jest bardziej sporna, linia nie odpowiada albo nie chcesz sam prowadzić procesu od początku do końca.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Dlaczego ClaimWinger jest tu polecany?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo dla wielu pasażerów jest rozsądną opcją pośrednią między pełną samodzielnością a bardzo dużym,
                  bardziej masowym modelem obsługi claimu.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
