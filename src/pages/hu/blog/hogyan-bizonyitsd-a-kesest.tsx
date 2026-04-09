import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileText,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function HogyanBizonyitsdAKesest() {
  return (
    <LayoutHu>
      <SEO
        title="Hogyan bizonyítsd a késést? [2026]"
        description="Magyar útmutató a járatkésés bizonyításához: milyen dokumentumokat gyűjts, mit fotózz le, és hogyan rakd össze az erős idővonalat."
        url="https://problemlot.com/hu/blog/hogyan-bizonyitsd-a-kesest"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hogyan bizonyítsd a késést? [2026]",
            description:
              "Magyar útmutató a járatkésés bizonyításához: hogyan gyűjts dokumentumokat, fényképeket és egy erős idővonalat.",
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
              "@id": "https://problemlot.com/hu/blog/hogyan-bizonyitsd-a-kesest",
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
                name: "Mivel lehet a legjobban bizonyítani a járatkésést?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legerősebb bizonyítás általában több dolog együttese: boarding pass, PNR, airline üzenetek, reptéri kijelzőfotók, a végső érkezés ideje és minden releváns költségbizonyíték.",
                },
              },
              {
                "@type": "Question",
                name: "Elég egy képernyőfotó az alkalmazásból?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem mindig. Egyetlen screenshot hasznos lehet, de a legerősebb ügyet a több, egymást erősítő bizonyíték és a jól felépített idővonal adja.",
                },
              },
              {
                "@type": "Question",
                name: "Mit érdemes lefotózni a reptéren?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A kijelzőt, a gate környékét, a módosított indulási időt, az esetleges sorban állást vagy új tájékoztatást, valamint mindent, ami segít rekonstruálni a késés menetét.",
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
            <span className="text-slate-900 dark:text-white">Késés bizonyítása</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ClipboardCheck className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hogyan bizonyítsd a késést?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez jeden z najważniejszych proceduralnych wpisów pod wysoki intent i GEO, bo użytkownik często już wie,
              że lot się spóźnił, ale nie wie, <strong>jak to dobrze udowodnić</strong>. Kluczowe jest nie tylko zbieranie
              pojedynczych screenshotów, ale zbudowanie spójnego <strong>dowodowego timeline’u</strong>.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ClipboardCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>A járatkésést a legerősebben több bizonyíték együttese mutatja meg.</strong> Najlepiej działa
              połączenie: <strong>boarding pass</strong>, <strong>PNR</strong>, komunikaty od linii, zdjęcia z lotniska,
              końcowy czas dotarcia do celu i dobrze uporządkowany timeline.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Bizonyítani akarod a késést, mielőtt złożysz claim?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli chcesz zbudować mocny case, najlepiej najpierw uporządkować dowody i sprawdzić, czy timeline jest
              naprawdę spójny.
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
                Mi erősíti a bizonyítást?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Boarding pass, PNR i pełny zestaw komunikatów od linii.</li>
                <li>Megőrzött screeny z aplikacji i zdjęcia z lotniska.</li>
                <li>Wyraźnie ustalony końcowy czas przybycia do celu.</li>
                <li>Spójny timeline bez luk i sprzeczności.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub komplikuje sprawę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Oparcie się tylko na jednym screenie bez dalszych dowodów.</li>
                <li>Brak końcowego czasu dotarcia do celu.</li>
                <li>Chaotyczny zestaw dokumentów bez logicznej kolejności.</li>
                <li>Brak zdjęć lub zapisów z momentu, gdy sytuacja się rozwijała.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért jeden screenshot zwykle nie wystarcza?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Jeden screen z aplikacji może być bardzo pomocny, ale rzadko buduje pełny obraz sprawy. Opóźnienie rozwija
                się w czasie, a mocny claim pokazuje właśnie tę całą sekwencję zdarzeń.
              </p>
              <p>
                Dlatego najlepiej zbierać kilka rodzajów dowodów, które wzajemnie się potwierdzają.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit érdemes lefotózni a reptéren?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Warto sfotografować tablicę lotów, gate, zmienione godziny i wszystkie nowe komunikaty, które pojawiają się
                w miarę rozwoju sytuacji.
              </p>
              <p>
                Taki materiał bardzo pomaga później odtworzyć rzeczywisty przebieg opóźnienia i momenty przełomowe.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Jak złożyć z tego mocny timeline?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ułóż dowody w kolejności: planowany lot, pierwsza informacja o problemie, kolejne zmiany, ewentualny nowy
                routing i końcowy czas przybycia do celu.
              </p>
              <p>
                Im bardziej logiczna i chronologiczna jest ta historia, tym łatwiej pokazać realną skalę opóźnienia.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Camera className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Fotok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Zdjęcia z lotniska pomagają pokazać nie tylko fakt opóźnienia, ale też jego rozwój w czasie.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To końcowy czas przybycia do celu zwykle najlepiej pokazuje realną skalę szkody czasowej.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Timeline</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Chronologicznie ułożony zestaw dowodów robi większą różnicę niż nawet pojedynczy bardzo mocny screenshot.
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
              Pasażer ma dużo materiału, ale nie układa go w logiczną całość. W efekcie nawet dobre dowody wyglądają słabiej,
              bo nie pokazują przejrzystej historii opóźnienia.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case jest najlepiej przygotowany?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy masz kilka niezależnych dowodów, końcowy czas przybycia do celu i dobrze uporządkowany timeline całej sprawy.
              </p>
              <p>
                W takich przypadkach claim wygląda nie jak zbiór pojedynczych screenów, ale jak spójnie udokumentowane zdarzenie.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mivel lehet a legjobban bizonyítani a járatkésést?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najlepiej działa zestaw dowodów: boarding pass, PNR, komunikaty od linii, zdjęcia z lotniska i końcowy czas przybycia do celu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elég egy képernyőfotó az alkalmazásból?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie zawsze. Jeden screen pomaga, ale mocniejszy case buduje kilka wzajemnie potwierdzających się dowodów.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit érdemes lefotózni a reptéren?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Tablicę lotów, gate, zmienione godziny i nowe komunikaty, które pokazują rozwój sytuacji w czasie.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli chcesz dobrze udowodnić opóźnienie, najlepiej najpierw ułożyć dowody w logiczny timeline i dopiero potem
              przejść do właściwego claimu.
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
