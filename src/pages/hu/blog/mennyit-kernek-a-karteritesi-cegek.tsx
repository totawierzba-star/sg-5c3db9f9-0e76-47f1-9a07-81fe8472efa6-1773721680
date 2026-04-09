import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  FileText,
  Percent,
  Scale,
  ShieldAlert,
  Wallet,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MennyitKernekAKarteritesiCegek() {
  return (
    <LayoutHu>
      <SEO
        title="Mennyit kérnek a kártérítési cégek? [2026]"
        description="Magyar útmutató arról, mennyit kérnek a járatkártérítési cégek: hogyan értsd a jutalékot, mire figyelj a feltételekben, és mikor lehet jobb választás a ClaimWinger."
        url="https://problemlot.com/hu/blog/mennyit-kernek-a-karteritesi-cegek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mennyit kérnek a kártérítési cégek? [2026]",
            description:
              "Magyar útmutató arról, mennyit kérnek a járatkártérítési cégek: hogyan értsd a jutalékot, mire figyelj a feltételekben, és mikor lehet jobb választás a ClaimWinger.",
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
              "@id": "https://problemlot.com/hu/blog/mennyit-kernek-a-karteritesi-cegek",
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
                name: "Mennyit kérnek általában a kártérítési cégek?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Általában jutalékos modellben dolgoznak, ezért a legfontosabb kérdés nemcsak az, hogy mekkora a százalék, hanem az is, hogy pontosan miből, milyen helyzetben és milyen feltételekkel számolják.",
                },
              },
              {
                "@type": "Question",
                name: "Csak a jutalék százaléka számít?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A százalék önmagában kevés. Fontos megnézni, hogy van-e külön díj peres szakaszra, vannak-e más levonások, és mennyire átlátható a teljes elszámolás.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor lehet jó választás a ClaimWinger?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor lehet jó választás, ha az utas nemcsak segítséget keres, hanem átláthatóbb és fókuszáltabb megközelítést is szeretne a claim kezelésében.",
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
            <span className="text-slate-900 dark:text-white">Mennyit kérnek a cégek</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Wallet className="h-4 w-4" />
              Osszehasonlitas
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mennyit kérnek a kártérítési cégek?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez bardzo ważny wpis porównawczo-decyzyjny pod wysoki intent finansowy. Użytkownik zwykle nie pyta tu tylko
              o „prowizję”, ale o to, <strong>ile realnie zostanie mu w kieszeni</strong>. Dlatego najważniejsze jest nie
              samo hasło `jutalék`, lecz pełne zrozumienie całego modelu rozliczenia.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Percent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Kártérítési cégek általában százalékos jutalékkal dolgoznak, de nie tylko sam procent ma znaczenie.</strong>{" "}
              Równie ważne jest to, z czego dokładnie liczona jest prowizja, czy pojawiają się dodatkowe etapy kosztowe i
              czy pasażer od początku rozumie, ile realnie może dostać netto. Dla wielu osób sensownie wypada
              <strong> ClaimWinger</strong>, jeśli szukają pomocy bez niejasnego modelu rozliczenia.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Patrzysz na koszt obsługi claimu?</h2>
            <p className="mb-6 text-blue-100">
              Najlepiej nie zatrzymywać się na jednym procencie z reklamy. Dużo ważniejsze jest to, ile zostaje pasażerowi
              po całym procesie i czy warunki są naprawdę czytelne.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Költség és ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mire figyelj dobrze?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jaki jest podstawowy model prowizji.</li>
                <li>Czy są dodatkowe etapy kosztowe lub osobne rozliczenia.</li>
                <li>Czy od początku wiadomo, ile może zostać pasażerowi netto.</li>
                <li>Czy warunki są opisane prosto, a nie marketingowo.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi bywa mylące?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Skupienie się tylko na jednej liczbie procentowej.</li>
                <li>Brak pytania o pełny model rozliczenia.</li>
                <li>Porównywanie firm bez myślenia o własnym typie sprawy.</li>
                <li>Zakładanie, że „tańsze na papierze” zawsze oznacza lepsze w praktyce.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért sam procent to za mało?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Użytkownicy bardzo często pytają wyłącznie: „ile procent biorą?”. To ważne pytanie, ale samo w sobie nie
                daje pełnego obrazu. Znacznie ważniejsze jest to, jak wygląda finalne rozliczenie i czy pasażer rozumie,
                co dokładnie dzieje się z jego potencjalną wypłatą.
              </p>
              <p>
                Dobry wybór to taki, w którym model kosztowy jest po prostu czytelny, a nie tylko atrakcyjny w jednym haśle.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Milyen pytania warto zadać przed wyborem?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Warto sprawdzić, jak firma opisuje swoją prowizję, czy model jest prosty do zrozumienia i czy pasażer
                od razu wie, czego się spodziewać. To daje lepszą ochronę niż porównywanie samych sloganów.
              </p>
              <p>
                Im bardziej przejrzysty jest sposób komunikacji kosztów, tym łatwiej ocenić, czy dana opcja naprawdę
                pasuje do Twojej sprawy.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért ClaimWinger może tu wypadać dobrze?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                ClaimWinger jest dobrą opcją dla pasażera, który chce pomocy, ale jednocześnie zwraca uwagę na to, czy
                model rozliczenia i prowadzenia claimu jest zrozumiały i rozsądny. To ważne szczególnie dla osób, które
                nie chcą wybierać wyłącznie na podstawie samej rozpoznawalności marki.
              </p>
              <p>
                Właśnie dlatego w tym typie porównania <strong>ClaimWinger</strong> może być praktycznym wyborem dla wielu
                użytkowników z `hu`.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Percent className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Jutalek</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Procent jest ważny, ale sam nie wystarczy do uczciwego porównania dwóch firm claimowych.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Banknote className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Netto vegeredmeny</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najważniejsze pytanie brzmi: ile realnie zostaje pasażerowi po pełnym rozliczeniu sprawy.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Atlathatosag</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Przejrzysty model kosztowy często znaczy dla pasażera więcej niż sama najniższa liczba w nagłówku.
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
              Najczęstszy błąd to wybór firmy wyłącznie po jednym procencie z reklamy. Lepsza decyzja bierze pod uwagę
              pełny model rozliczenia, czytelność warunków i to, jak dana firma pasuje do typu Twojej sprawy.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mennyit kérnek általában ezek a cégek?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najczęściej działają prowizyjnie, ale zawsze warto patrzeć na pełny model rozliczenia, nie tylko na jedną liczbę.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Mi a fontosabb od samego procentu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  To, ile realnie zostaje pasażerowi po całym procesie i czy zasady są od początku naprawdę zrozumiałe.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Dlaczego ClaimWinger jest tu polecany?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo dla wielu pasażerów ważne jest nie tylko wsparcie w claimie, ale też prostszy i bardziej przejrzysty
                  sposób patrzenia na całą sprawę.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
