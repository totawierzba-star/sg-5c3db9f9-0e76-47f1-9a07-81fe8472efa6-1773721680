import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldAlert,
  TimerReset,
  Users,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function SzemelyzethianyMiattiKeses() {
  return (
    <LayoutHu>
      <SEO
        title="Személyzethiány miatti késés – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató személyzethiány miatti járatkéséshez: mikor lehet erős a claim, hogyan számít a végső érkezés és miért nem elég csak a légitársaság magyarázata."
        url="https://problemlot.com/hu/blog/szemelyzethiany-miatti-keses"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Személyzethiány miatti késés – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató a személyzethiány miatti késésekhez: hogyan számít a végső érkezés, a dokumentáció és a légitársaság indoklásának valós súlya.",
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
              "@id": "https://problemlot.com/hu/blog/szemelyzethiany-miatti-keses",
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
                name: "Személyzethiány miatti késésnél lehet kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. Az, hogy a légitársaság személyzethiányra hivatkozik, még nem jelenti automatikusan azt, hogy a claim gyenge vagy kizárt.",
                },
              },
              {
                "@type": "Question",
                name: "Elég az, ha a légitársaság azt mondja, hogy nem volt személyzet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem önmagában. A felhasználónak mindig érdemes a végső érkezésre, a dokumentációra és a konkrét körülményekre néznie, nem csak a rövid magyarázatra.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni ilyen ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a reptéri kijelzőfotókat és a végső érkezés idejét igazoló adatokat.",
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
            <span className="text-slate-900 dark:text-white">Személyzethiány miatti késés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Users className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Személyzethiány miatti késés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>személyzethiány miatti késés</strong> to jeden z tych tematów, przy których linie często próbują
              zamknąć sprawę krótkim wyjaśnieniem. Dla użytkownika najważniejsze jest jednak to, że sama etykieta
              „brak załogi” nie rozstrzyga jeszcze wszystkiego. Kluczowe pozostają <strong>końcowa strata czasu</strong>,
              fakty i dokumenty.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Személyzethiány miatti késésnél sok esetben lehet erős claim.</strong> Samo to, że linia powołuje
              się na brak załogi, nie oznacza jeszcze automatycznie, że sprawa odpada. Trzeba zobaczyć, jaka była
              <strong> végső érkezés</strong>, jak wygląda dokumentacja i jak dokładnie opisano problem.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A légitársaság személyzethiányra hivatkozott?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli przewoźnik tłumaczy opóźnienie brakiem załogi, najlepiej szybko sprawdzić, czy to rzeczywiście zamyka
              temat, czy jednak claim może być mocny.
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
                <li>Jelentős końcowe opóźnienie przy dotarciu do celu.</li>
                <li>Megőrzött wiadomości od linii i dane lotu.</li>
                <li>Jasna dokumentacja pokazująca pełną stratę czasu.</li>
                <li>Spójny obraz tego, co naprawdę wydarzyło się operacyjnie.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub miesza ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Oparcie się wyłącznie na krótkim wyjaśnieniu linii.</li>
                <li>Brak danych o finalnej godzinie dotarcia do celu.</li>
                <li>Niepełna dokumentacja komunikacji i zmian lotu.</li>
                <li>Przyjęcie, że „brak załogi” automatycznie kończy temat.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért sama etykieta „brak załogi” nie wystarcza?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Linie lotnicze często skracają opis problemu do jednego zdania. Dla pasażera brzmi to jak gotowa odpowiedź,
                ale w praktyce to dopiero początek oceny.
              </p>
              <p>
                Dobrze zbudowany claim nie opiera się na samej etykiecie, tylko na tym, co naprawdę stało się z podróżą i
                jak duża była końcowa strata czasu.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért końcowe dotarcie do celu jest ważniejsze niż samo wyjaśnienie linii?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                To właśnie końcowy rezultat najlepiej pokazuje, jak poważny był problem dla pasażera. Krótkie operacyjne
                uzasadnienie bez finalnego czasu dotarcia nie pokazuje jeszcze pełnego obrazu sprawy.
              </p>
              <p>
                Dlatego przy takich wyjaśnieniach zawsze warto wrócić do faktów: kiedy faktycznie dotarłeś na miejsce i
                co masz na to na piśmie.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj boarding pass, PNR, e-maile i komunikaty od linii, zdjęcia z tablicy lotów oraz wszystko, co
                pokazuje rzeczywistą godzinę dotarcia do celu.
              </p>
              <p>
                Im lepiej zachowany jest cały przebieg opóźnienia, tym łatwiej oddzielić fakty od skrótowej narracji przewoźnika.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Users className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Szemelyzet magyarazat</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To ważna informacja, ale nie pełna odpowiedź na pytanie o siłę claimu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To właśnie końcowe opóźnienie najlepiej pokazuje, jak duża była realna szkoda pasażera.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dokumenty i komunikaty pomagają sprawdzić, czy wyjaśnienie linii rzeczywiście pasuje do faktów.
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
              Pasażer widzi w mailu „brak załogi” i zakłada, że nie ma już o czym rozmawiać. To właśnie w tym momencie
              najłatwiej przestać patrzeć na realne fakty i własną dokumentację.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze widać dużą końcową stratę czasu, pełny przebieg zdarzenia i spójną dokumentację, a jedyną
                odpowiedzią linii pozostaje krótkie operacyjne wyjaśnienie.
              </p>
              <p>
                W takich sytuacjach bardzo dużo daje szybka analiza case’u oparta na faktach, nie na samym haśle z maila.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Személyzethiány miatti késésnél lehet kártérítés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. Sama wzmianka o braku załogi nie wyklucza automatycznie mocnego claimu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elég to, że linia powiedziała, że nie było személyzet?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie samo w sobie. Trzeba nadal sprawdzić końcowe opóźnienie, dokumenty i pełen przebieg sprawy.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj boarding pass, PNR, komunikaty od linii i dane pokazujące finalny czas dotarcia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli linia tłumaczy opóźnienie brakiem załogi, najlepiej sprawdzić sprawę na danych, a nie kończyć ją na
              jednym zdaniu z komunikatu.
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
