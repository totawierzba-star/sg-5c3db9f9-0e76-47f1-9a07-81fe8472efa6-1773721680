import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  ShieldAlert,
  Sparkles,
  UserRoundSearch,
  Users,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorBizdSzakertoreAzUgyet() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor bízd szakértőre az ügyet? [2026]"
        description="Magyar útmutató arról, mikor érdemes szakértőre bízni egy elakadt járatkártérítési ügyet, és mikor lehet még ésszerű saját kézben tartani a folyamatot."
        url="https://problemlot.com/hu/blog/mikor-bizd-szakertore-az-ugyet"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mikor bízd szakértőre az ügyet? [2026]",
            description:
              "Magyar útmutató arról, mikor érdemes szakértőre bízni egy elakadt járatkártérítési ügyet, és mikor lehet még ésszerű saját kézben tartani a folyamatot.",
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
              "@id": "https://problemlot.com/hu/blog/mikor-bizd-szakertore-az-ugyet",
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
                name: "Mikor érdemes szakértőre bízni az ügyet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor érdemes, ha az ügy már elakadt, összetettebbé vált, a légitársaság gyenge vagy sablonos érveket ismétel, vagy a következő lépés kiválasztása túl bizonytalan saját erőből.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor lehet még saját kézben tartani?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha a claim egyszerű, jól dokumentált, a folyamat még korai szakaszban jár, és világos, hogy mi legyen a következő logikus lépés, sok utas még saját kézben is hatékonyan tud haladni.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a legfontosabb a döntésnél?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legfontosabb az, hogy felmérd: az ügy erejéhez és bonyolultságához képest saját kézben még gyorsabban és tisztábban haladsz-e, vagy már inkább szakértői támogatással lehet arányosan előrelépni.",
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
            <span className="text-slate-900 dark:text-white">Szakértőre bízni az ügyet</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Procedura
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor bízd szakértőre az ügyet?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              To wpis dla pasażera, który czuje, że sprawa zaczyna go przerastać, ale nie chce oddawać jej na zewnątrz
              bez sensu. <strong>Szakértői wsparcie</strong> ma sens nie wtedy, gdy brzmi profesjonalnie, tylko wtedy,
              gdy naprawdę odblokowuje kolejny etap lub porządkuje zbyt złożony claim.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-09</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <UserRoundSearch className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Rövid, snippetre kész válasz</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Sprawę warto oddać specjaliście wtedy, gdy przestała być prosta, utknęła albo wymaga decyzji,
              których nie opłaca się już podejmować w ciemno samodzielnie.</strong> Jeśli claim jest nadal prosty,
              dobrze udokumentowany i wiadomo, co robić dalej, własne prowadzenie sprawy może być wciąż rozsądne.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Nie wiesz, czy jeszcze działać samodzielnie?</h2>
            <p className="mb-6 text-blue-100">
              To zwykle nie jest decyzja „teraz albo nigdy”. Najważniejsze jest to, czy dalsze samodzielne ruchy wciąż
              mają sens, czy już tylko wydłużają sprawę bez poprawy pozycji.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy szakértői átvizsgálása
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor ma sens oddać sprawę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Claim utknął mimo sensownych wcześniejszych kroków.</li>
                <li>Sprawa stała się wielowarstwowa lub sporna.</li>
                <li>Nie masz pewności, która ścieżka będzie teraz najlepsza.</li>
                <li>Potrzebujesz uporządkowania materiału i mocniejszej strategii.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Kiedy jeszcze nie trzeba?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Sprawa jest nadal prosta i dobrze udokumentowana.</li>
                <li>Wiadomo, jaki jest kolejny logiczny krok.</li>
                <li>Nie wykorzystałeś jeszcze podstawowych, rozsądnych działań.</li>
                <li>Myślisz o wsparciu tylko dlatego, że zaczynasz się niecierpliwić.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Nie każda sprawa potrzebuje eksperta od razu
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wiele claimów da się prowadzić samodzielnie, zwłaszcza gdy sprawa jest świeża, dobrze udokumentowana i
                nie weszła jeszcze w etap realnego sporu o fakty. Oddawanie prostego case’u za wcześnie nie zawsze daje
                proporcjonalną korzyść.
              </p>
              <p>
                Warto więc najpierw ocenić nie tylko poziom frustracji, ale realną złożoność sprawy.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Sens pojawia się tam, gdzie kończy się prostota
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Jeśli linia powtarza słabe uzasadnienia, sprawa ma kilka warstw, pojawia się spór o `végső érkezés`,
                connection albo odpowiedzialność przewoźnika, wsparcie eksperckie zaczyna mieć realny sens. Nie chodzi
                wtedy tylko o „wysłanie czegoś dalej”, ale o lepszą ocenę strategii.
              </p>
              <p>
                To właśnie ten moment, w którym samodzielne prowadzenie sprawy bywa już mniej efektywne niż dobrze
                dobrana pomoc.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Najpierw oceń, czy ekspert coś realnie zmieni
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Najlepszy moment na oddanie sprawy to nie ten, w którym masz dość, tylko ten, w którym fachowe wsparcie
                może rzeczywiście uporządkować strategię, poprawić argumentację albo przejąć trudniejszy etap.
              </p>
              <p>
                Jeśli ekspert ma tylko powtórzyć dokładnie to, co możesz jeszcze sensownie zrobić sam, warto najpierw
                uczciwie ocenić, czy sprawa naprawdę jest już na tym etapie.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Briefcase className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Złożoność</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Im bardziej wielowarstwowa sprawa, tym większa szansa, że wsparcie zewnętrzne będzie proporcjonalnie
                pomocne.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Users className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Odciążenie</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Czasem główną wartością jest nie tylko wiedza, ale przejęcie cięższego etapu i uporządkowanie komunikacji.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <ShieldAlert className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Arányosság</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dobra decyzja to taka, w której wsparcie naprawdę poprawia pozycję sprawy, a nie tylko zwiększa liczbę
                uczestników procesu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Najczęstszy błąd przy tej decyzji</h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Najczęstszy błąd to oddawanie sprawy zbyt wcześnie albo zbyt późno. Za wcześnie oznacza, że nie wykorzystałeś
              prostszych ruchów. Za późno oznacza, że samodzielne prowadzenie sprawy przez długi czas nie poprawia już
              realnie Twojej pozycji.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Czy ekspert jest potrzebny przy każdym odrzuceniu claimu?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie. Sama odmowa nie oznacza jeszcze, że sprawa wymaga wsparcia zewnętrznego. Liczy się jakość odmowy
                  i poziom złożoności całego case’u.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Co jest sygnałem, że samodzielnie idzie już za ciężko?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Dobrym sygnałem jest moment, w którym nie chodzi już o wysłanie kolejnego maila, tylko o wybór
                  właściwej strategii i ocenę bardziej złożonych argumentów linii.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Co warto mieć przygotowane przed oddaniem sprawy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Najlepiej przygotować pełny timeline, claim, odpowiedzi linii, `PNR`, dokumenty lotu oraz krótki opis
                  tego, gdzie dokładnie sprawa utknęła.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-slate-900 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Czujesz, że sprawa przestała być prosta?</h2>
            <p className="mb-6 text-slate-300">
              Jeśli nie masz już pewności, czy kolejny krok robić samodzielnie, warto sprawdzić, czy wsparcie eksperta
              naprawdę poprawi strategię i tempo sprawy. To zwykle lepsze niż działanie w ciemno.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Ügy szakértői átvizsgálása
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
