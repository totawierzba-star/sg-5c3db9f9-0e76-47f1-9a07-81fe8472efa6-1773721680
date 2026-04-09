import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Gavel,
  Scale,
  ShieldAlert,
  Sparkles,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorErdemesKisErtekuPeresUtraLepni() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor érdemes kis értékű peres útra lépni? [2026]"
        description="Magyar útmutató arról, mikor érdemes kis értékű peres útra lépni egy elakadt járatkártérítési ügyben, és mikor jobb még más, kevésbé terhelő utat választani."
        url="https://problemlot.com/hu/blog/mikor-erdemes-kis-erteku-peres-utra-lepni"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mikor érdemes kis értékű peres útra lépni? [2026]",
            description:
              "Magyar útmutató arról, mikor érdemes kis értékű peres útra lépni egy elakadt járatkártérítési ügyben, és mikor jobb még más, kevésbé terhelő utat választani.",
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
              "@id": "https://problemlot.com/hu/blog/mikor-erdemes-kis-erteku-peres-utra-lepni",
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
                name: "Mikor lehet értelme kis értékű peres útra lépni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor lehet értelme, ha az ügy már jól rendezett, a bizonyítékok erősek, a légitársaság álláspontja ismert, és más ésszerű lépések nem hoztak előrelépést.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor túl korai ez a lépés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Túl korai lehet, ha a claim még hiányos, nincs jól összerakva az idővonal, vagy még nem világos, hogy a légitársaság pontosan mire hivatkozik.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a legfontosabb peres út előtt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legfontosabb a rendezett dokumentáció, a végső érkezést is mutató teljes idővonal, a claim története és annak felmérése, hogy az ügy tényleg megérett-e erre a szintre.",
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
            <span className="text-slate-900 dark:text-white">Kis értékű peres út</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor érdemes kis értékű peres útra lépni?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              To wpis dla pasażera, który rozważa już bardziej formalną drogę sądową, ale nie chce robić tego zbyt
              wcześnie. <strong>Kis értékű peres út</strong> nie jest dobry tylko dlatego, że brzmi stanowczo. Ma sens
              dopiero wtedy, gdy sprawa jest naprawdę dojrzała, uporządkowana i dobrze udokumentowana.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Gavel className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Rövid, snippetre kész válasz</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Mały tryb sądowy ma sens dopiero wtedy, gdy claim jest mocny, sprawa uporządkowana, a wcześniejsze
              rozsądne kroki nie przyniosły efektu.</strong> Jeśli nadal brakuje dokumentów, timeline’u albo jasnej
              odpowiedzi linii, wejście na ten etap bywa przedwczesne.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Nie wiesz, czy Twoja sprawa jest już gotowa na sądowy etap?</h2>
            <p className="mb-6 text-blue-100">
              To jeden z momentów, w których zły timing kosztuje najwięcej energii. Lepiej najpierw ocenić dojrzałość
              sprawy, niż wchodzić za wcześnie w bardziej obciążającą ścieżkę.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Peres lépés előtti ellenőrzés
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor ma sens?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sprawa ma pełny, logiczny timeline.</li>
                <li>Masz mocne dokumenty i historię kontaktu z linią.</li>
                <li>Wiadomo już, na czym polega główny spór.</li>
                <li>Wcześniejsze sensowne kroki nie przyniosły przełomu.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Kiedy to jeszcze za wcześnie?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Claim jest nadal nieuporządkowany.</li>
                <li>Brakuje dowodów na `végső érkezés` i przebieg podróży.</li>
                <li>Nie wiesz jeszcze, jak naprawdę argumentuje linia.</li>
                <li>Myślisz o tej drodze tylko dlatego, że brzmi bardziej stanowczo.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Ten etap ma sens tylko przy dojrzałej sprawie
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sądowy krok w małych roszczeniach działa najlepiej wtedy, gdy sprawa jest już krótka, czytelna i trudna
                do rozmycia. Jeśli sam pasażer nadal musi dopiero zbierać dokumenty albo doprecyzowywać chronologię, to
                znaczy, że sprawa nie jest jeszcze na właściwym etapie.
              </p>
              <p>
                Im lepiej zbudowany claim, tym bardziej ten krok staje się kontynuacją logicznej ścieżki, a nie próbą
                ratowania chaosu na późnym etapie.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Formalność nie zastąpi jakości sprawy
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Częsty błąd polega na założeniu, że sądowy tryb automatycznie wzmacnia słabą sprawę. Tak nie działa
                nawet dobrze brzmiąca ścieżka. Jeśli dokumentacja jest dziurawa, a główne fakty nie są dobrze pokazane,
                formalność nie naprawi tych braków.
              </p>
              <p>
                Najpierw trzeba upewnić się, że sprawa wygląda mocno sama z siebie, dopiero potem myśleć o cięższym
                narzędziu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Przygotuj pakiet, nie tylko decyzję
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zanim wejdziesz na bardziej formalny etap, przygotuj pełny zestaw: claim, odpowiedzi linii, `PNR`,
                dokumenty lotu, dane o `végső érkezés` i krótki, logiczny opis całej sprawy.
              </p>
              <p>
                Najlepszy znak gotowości to sytuacja, w której ktoś z zewnątrz może szybko zrozumieć spór bez
                dodatkowych domysłów i bez ratowania braków w materiale.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Scale className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Érettség</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ten etap najlepiej działa wtedy, gdy sprawa naprawdę dojrzała, a nie tylko utknęła emocjonalnie.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentumok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najmocniejszym fundamentem jest dobrze złożony zestaw faktów, nie sama nazwa procedury.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ShieldAlert className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Arányosság</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ważne jest nie tylko „czy można”, ale też „czy to już proporcjonalny i sensowny moment”.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Najczęstszy błąd przy tej decyzji</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Najczęstszy błąd to wejście na tę ścieżkę zbyt wcześnie, zanim claim naprawdę nabierze siły. Jeśli nadal
              trzeba dopiero układać historię sprawy albo uzupełniać kluczowe dowody, formalniejszy etap tylko zwiększa
              obciążenie bez proporcjonalnego zysku.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy trzeba mieć pełną odpowiedź linii przed takim krokiem?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najważniejsze jest to, żeby rozumieć aktualny stan sporu. Im lepiej wiadomo, co linia zrobiła albo
                  czego nie zrobiła, tym łatwiej ocenić gotowość sprawy.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy mały tryb sądowy wzmacnia słaby claim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie. To narzędzie dla spraw już uporządkowanych, a nie sposób na zastąpienie brakującej dokumentacji
                  albo chaotycznego opisu.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Co najlepiej przygotować przed podjęciem decyzji?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najlepiej mieć gotowy claim, historię korespondencji, dowody lotu, `PNR`, końcową godzinę dotarcia do
                  celu i zwięzły opis tego, na czym polega spór.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Myślisz o bardziej formalnym kroku sądowym?</h2>
            <p className="mb-6 text-slate-300">
              Zanim wejdziesz na ten etap, warto sprawdzić, czy sprawa naprawdę jest już gotowa. Dobrze oceniona
              dojrzałość claimu bywa ważniejsza niż sama determinacja, żeby działać dalej.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Peres lépés előtti ellenőrzés
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
