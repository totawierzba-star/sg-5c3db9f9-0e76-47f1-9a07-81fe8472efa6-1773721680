import Link from "next/link";
import {
  ArrowRight,
  CheckCheck,
  CheckCircle2,
  ClipboardCheck,
  FileText,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function ChecklistaMielottAtadodAzUgyetAClaimWingernek() {
  return (
    <LayoutHu>
      <SEO
        title="Checklista mielőtt átadod az ügyet a ClaimWingernek [2026]"
        description="Magyar checklista arról, mit készíts elő, mielőtt átadod a járatkártérítési ügyedet a ClaimWingernek: dokumentumok, idővonal, levelezés és a legfontosabb részletek."
        url="https://problemlot.com/hu/blog/checklista-mielott-atadod-az-ugyet-a-claimwingernek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Checklista mielőtt átadod az ügyet a ClaimWingernek [2026]",
            description:
              "Magyar checklista arról, mit készíts elő, mielőtt átadod a járatkártérítési ügyedet a ClaimWingernek: dokumentumok, idővonal, levelezés és a legfontosabb részletek.",
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
              "@id": "https://problemlot.com/hu/blog/checklista-mielott-atadod-az-ugyet-a-claimwingernek",
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
                name: "Mit készítsek elő, mielőtt átadom az ügyet a ClaimWingernek?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legfontosabb a PNR, a jegy vagy booking visszaigazolás, a boarding pass, a légitársasággal folytatott levelezés, a teljes idővonal és minden dokumentum, ami mutatja a végső érkezést vagy az új útvonalat.",
                },
              },
              {
                "@type": "Question",
                name: "Átadhatom az ügyet akkor is, ha nincs meg minden dokumentum?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok ügyben nem kell tökéletes csomag az induláshoz, de minél rendezettebbek a dokumentumok és az alapadatok, annál könnyebb gyorsan és tisztán felmérni az ügy erejét.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a leggyakoribb hiba az átadás előtt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A leggyakoribb hiba a szétszórt anyag: hiányzó dátumok, rendezetlen képernyőképek, rosszul áttekinthető levelezés és annak hiánya, hogy pontosan mi történt a teljes utazás során.",
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
            <span className="text-slate-900 dark:text-white">Checklista przed ClaimWingerem</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Checklista mielőtt átadod az ügyet a ClaimWingernek
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              To ostatni, bardzo praktyczny wpis z całej serii. Nie chodzi w nim o teorię prawa, tylko o prostą rzecz:
              <strong> co przygotować, żeby przekazanie sprawy do ClaimWingera było szybkie, czyste i sensowne</strong>.
              Im lepiej uporządkowane materiały na wejściu, tym łatwiej sprawnie ocenić siłę claimu.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ClipboardCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Rövid, snippetre kész válasz</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Przed przekazaniem sprawy do ClaimWingera warto przygotować podstawowe dokumenty, krótki timeline
              i historię kontaktu z linią.</strong> Nie musisz mieć idealnego pakietu, ale im mniej chaosu w materiałach,
              tym szybciej da się ocenić sprawę i przejść do sensownego następnego kroku.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Chcesz przygotować sprawę dobrze już na starcie?</h2>
            <p className="mb-6 text-blue-100">
              Najlepszy efekt daje zwykle nie większa liczba plików, tylko ich porządek. Dobrze zebrane materiały
              oszczędzają czas i pomagają szybciej ocenić, jak mocny jest claim.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy beküldésének indítása
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Co warto mieć?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>`PNR`, booking confirmation lub e-ticket.</li>
                <li>Boarding pass albo jego zamiennik.</li>
                <li>Korespondencję z linią i odpowiedzi na claim.</li>
                <li>Krótki timeline oraz dane o `végső érkezés`.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Co najczęściej psuje przekazanie?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Rozrzucone screeny bez dat i kontekstu.</li>
                <li>Brak jasnej informacji, jak zakończyła się podróż.</li>
                <li>Mieszanie kilku wersji tej samej historii.</li>
                <li>Brak rozróżnienia między mailem od linii a własnym komentarzem pasażera.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Zacznij od podstawowych danych lotu
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Najważniejsze na wejściu są dane, które pozwalają od razu zidentyfikować sprawę: lot, data, `PNR`,
                booking confirmation, boarding pass i podstawowy opis problemu. To rdzeń, bez którego reszta materiału
                staje się trudniejsza do szybkiego poukładania.
              </p>
              <p>
                Jeśli czegoś brakuje, nadal warto przekazać sprawę, ale dobrze jest od razu zaznaczyć, czego nie masz i
                co może jeszcze wymagać uzupełnienia.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Największą wartość daje uporządkowany timeline
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nawet przy dużej liczbie dokumentów najważniejsze jest to, czy da się szybko zrozumieć, co wydarzyło
                się po kolei. Krótki timeline z planem lotu, momentem problemu, ewentualnym `új útvonal` i końcowym
                dotarciem do celu często jest cenniejszy niż dziesięć przypadkowych screenshotów.
              </p>
              <p>
                Właśnie dzięki temu ocena claimu może być szybsza i mniej podatna na pomyłki.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Dołącz historię kontaktu z linią
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Jeśli claim był już wysłany, ogromne znaczenie ma pokazanie, co linia odpowiedziała i kiedy. Maile,
                formularze, ticket numbers i sablonowe odpowiedzi pomagają szybko ocenić, na jakim etapie faktycznie
                jest sprawa.
              </p>
              <p>
                To ważne nie tylko dla historii case’u, ale też dla decyzji, jaki powinien być sensowny następny ruch.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentumok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Nie chodzi o idealny komplet, tylko o najważniejsze dokumenty zebrane w zrozumiały sposób.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <CheckCheck className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Idővonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Krótki i logiczny timeline przyspiesza zrozumienie sprawy bardziej niż długi, chaotyczny opis.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ShieldAlert className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Tisztaság</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Im mniej chaosu na wejściu, tym łatwiej sprawnie ocenić siłę claimu i przejść do działania.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Najczęstszy błąd przed przekazaniem</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Najczęstszy błąd to przekazanie dużej liczby plików bez porządku i bez krótkiego wyjaśnienia, co naprawdę
              wydarzyło się w podróży. Nawet mocna sprawa może wtedy wyglądać mniej czytelnie niż jest w rzeczywistości.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy muszę mieć boarding pass, żeby przekazać sprawę?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie zawsze. Jeśli go brakuje, warto zebrać inne ślady lotu, takie jak `PNR`, ticket confirmation,
                  maile, screeny aplikacji i historię przebookowania.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy trzeba już wcześniej składać claim samodzielnie?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie zawsze, ale jeśli był już składany, dobrze dołączyć całą historię kontaktu z linią. To pomaga
                  szybciej ocenić etap i siłę sprawy.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Co najbardziej przyspiesza analizę sprawy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najbardziej pomaga krótki timeline, podstawowe dokumenty lotu, dane o końcowym dotarciu do celu i
                  uporządkowana korespondencja z linią.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz przekazać sprawę bez chaosu?</h2>
            <p className="mb-6 text-slate-300">
              Dobrze przygotowany pakiet startowy naprawdę robi różnicę. Jeśli masz już najważniejsze dokumenty i krótki
              timeline, dużo łatwiej przejść od oceny do realnego działania.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Ügy beküldésének indítása
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
