import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileWarning,
  MailCheck,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorErdemesEszkalalniAKerelemet() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor érdemes eszkalálni a kérelmet? [2026]"
        description="Magyar útmutató arról, mikor érdemes eszkalálni a légitársasági kártérítési kérelmet, milyen jelek mutatják, hogy a follow-up már nem elég, és hogyan készülj a következő lépésre."
        url="https://problemlot.com/hu/blog/mikor-erdemes-eszkalalni-a-kerelemet"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mikor érdemes eszkalálni a kérelmet? [2026]",
            description:
              "Magyar útmutató arról, mikor érdemes eszkalálni a légitársasági kártérítési kérelmet, milyen jelek mutatják, hogy a follow-up már nem elég, és hogyan készülj a következő lépésre.",
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
              "@id": "https://problemlot.com/hu/blog/mikor-erdemes-eszkalalni-a-kerelemet",
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
                name: "Mikor érdemes eszkalálni a kérelmet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor érdemes eszkalálni a kérelmet, ha a claim rendesen be lett adva, van dokumentáció, eltelt egy ésszerű idő, és a légitársaság továbbra sem ad érdemi választ vagy csak sablonos elutasítást ismétel.",
                },
              },
              {
                "@type": "Question",
                name: "Mi jelzi, hogy a follow-up már nem elég?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha a légitársaság több alkalommal is figyelmen kívül hagyja a fő dokumentumokat, nem reagál a konkrét kérdésekre, vagy ugyanazt a gyenge indokot ismétli, a follow-up gyakran már csak időveszteség.",
                },
              },
              {
                "@type": "Question",
                name: "Mit készíts elő eszkaláció előtt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Érdemes előkészíteni a teljes idővonalat, a claim beadásának nyomát, a légitársaság válaszait, a fő dokumentumokat és a végső érkezéshez kapcsolódó kulcsadatokat.",
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
            <span className="text-slate-900 dark:text-white">Kérelem eszkalálása</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor érdemes eszkalálni a kérelmet?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              To praktyczny wpis dla pasażera, który już wysłał claim, zrobił follow-up i nadal nie widzi realnego
              ruchu. <strong>Eskalacja</strong> nie polega na działaniu szybciej za wszelką cenę. Chodzi o to, żeby
              rozpoznać moment, w którym kolejne czekanie albo kolejny mail przestają mieć sens.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Rövid, snippetre kész válasz</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Kérelmet wtedy warto eskalować, gdy został poprawnie złożony, masz dowody i minął już etap
              sensownego czekania lub follow-upu.</strong> Najmocniejsze sygnały to brak merytorycznej odpowiedzi,
              powtarzanie szablonów i ignorowanie dokumentów, które realnie pokazują przebieg podróży.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Nie wiesz, czy sprawa dojrzała już do eskalacji?</h2>
            <p className="mb-6 text-blue-100">
              Dobrze oceniony moment eskalacji potrafi skrócić całą sprawę. Za wcześnie oznacza chaos, za późno oznacza
              kolejne tygodnie straty czasu bez realnego efektu.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Eszkaláció előtti ellenőrzés
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Erős jelek az eszkalációhoz
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Masz potwierdzenie złożenia claimu i jego historię.</li>
                <li>Minął już czas na sensowną odpowiedź lub follow-up.</li>
                <li>Linia ignoruje konkretne dokumenty i fakty.</li>
                <li>Sprawa jest uporządkowana i gotowa na mocniejszy kolejny krok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Kiedy jeszcze poczekać?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nie masz pewności, czy pierwszy claim w ogóle dotarł.</li>
                <li>Brakuje Ci podstawowych dokumentów lub timeline’u.</li>
                <li>Wysłałeś claim dopiero niedawno i nie było jeszcze follow-upu.</li>
                <li>Nie wiesz jeszcze, jaki dokładnie problem chcesz eskalować.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Eszkalacja ma sens dopiero po uporządkowaniu sprawy
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Najgorszy moment na eskalację to taki, w którym sam pasażer nie potrafi jeszcze jasno pokazać, co
                wydarzyło się w podróży. Jeśli brakuje `PNR`, dat zgłoszeń, odpowiedzi linii albo danych o
                `végső érkezés`, mocniejszy krok nie wzmacnia sprawy, tylko przenosi chaos na kolejny etap.
              </p>
              <p>
                Dobra eskalacja zwykle zaczyna się od prostego pytania: czy sprawa jest już czytelna, kompletna i
                gotowa do pokazania komuś, kto nie zna jej historii od początku?
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Follow-up i eskalacja to nie jest to samo
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Follow-up ma przypomnieć o sprawie i otworzyć drogę do merytorycznej odpowiedzi. Eskalacja zaczyna się
                wtedy, gdy widać już, że zwykłe przypomnienie nie zmienia pozycji linii albo nie porusza sprawy ani o
                krok do przodu.
              </p>
              <p>
                Jeśli przewoźnik wciąż odsyła ten sam argument, nie odnosi się do załączników albo po prostu milczy,
                kolejne przypomnienie często tylko wydłuża cały proces.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Przed eszkalacją przygotuj pełny pakiet dowodowy
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Najmocniejsza eskalacja nie opiera się na samym przekonaniu, że linia zachowała się źle. Powinna mieć
                prosty, czytelny pakiet: claim, historię korespondencji, najważniejsze dokumenty i wyraźny obraz
                końcowego skutku dla pasażera.
              </p>
              <p>
                Im lepiej to przygotujesz, tym łatwiej ocenić, czy sprawa naprawdę jest gotowa do mocniejszego kroku,
                a nie tylko do kolejnej wymiany maili.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <MailCheck className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Előzmények</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Eskalacja ma sens tylko wtedy, gdy jasno widać, co już zostało zrobione i jak odpowiadała linia.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileWarning className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentáció</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Bez dokumentów i logicznego timeline’u nawet słuszna sprawa może wyglądać mniej przekonująco.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ShieldAlert className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Érettség</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najważniejsze jest nie to, czy jesteś sfrustrowany, ale czy sprawa faktycznie dojrzała do kolejnego
                etapu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Najczęstszy błąd przy eskalacji
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Najczęstszy błąd to eskalowanie sprawy zbyt wcześnie albo bez porządku w dokumentach. Sama frustracja
              pasażera nie wzmacnia claimu. Mocniejszy krok działa najlepiej wtedy, gdy już widać, że linia miała czas,
              miała materiały i mimo to nie zrobiła realnego ruchu.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy zawsze trzeba zrobić follow-up przed eskalacją?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie zawsze, ale bardzo często to rozsądny etap pośredni. Ważne jest, czy linia miała realną szansę
                  odpowiedzieć merytorycznie, zanim przejdziesz dalej.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Co jest ważniejsze przed eskalacją: czas czy dokumenty?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Jedno i drugie. Sam upływ czasu nie wystarcza, jeśli sprawa jest słabo udokumentowana. Z kolei dobre
                  dokumenty bez historii prób kontaktu też nie zawsze pokazują, że to już właściwy moment.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Skąd wiedzieć, że sprawa jest gotowa na mocniejszy krok?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Gdy potrafisz krótko i jasno pokazać: co się stało, kiedy claim został złożony, jak reagowała linia
                  i jaki był końcowy efekt dla pasażera. To zwykle najlepszy znak dojrzałości sprawy.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Masz wrażenie, że linia już tylko przeciąga sprawę?</h2>
            <p className="mb-6 text-slate-300">
              Jeśli claim jest uporządkowany, a odpowiedzi nadal są słabe albo ich nie ma, warto sprawdzić, czy to już
              moment na eskalację. Dobrze oceniony następny krok potrafi oszczędzić kolejne tygodnie bez efektu.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Eszkaláció előtti ellenőrzés
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
