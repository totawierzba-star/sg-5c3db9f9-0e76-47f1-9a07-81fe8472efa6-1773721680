import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Plane,
  RefreshCcw,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function RepulogepRotaciosKesese() {
  return (
    <LayoutHu>
      <SEO
        title="Repülőgép rotációs késése – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató repülőgép rotációs késéséhez: mikor lehet erős a claim, hogyan számít a végső érkezés és miért nem elég a légitársaság operatív magyarázata."
        url="https://problemlot.com/hu/blog/repulogep-rotacios-kesese"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Repülőgép rotációs késése – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató a repülőgép rotációs késéseihez: hogyan számít a végső érkezés, a teljes időveszteség és az operatív magyarázat valós súlya.",
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
              "@id": "https://problemlot.com/hu/blog/repulogep-rotacios-kesese",
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
                name: "Repülőgép rotációs késése esetén lehet kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. Az, hogy a légitársaság az előző szektor vagy a gép késő beérkezésére hivatkozik, még nem zárja ki automatikusan az erős claim lehetőségét.",
                },
              },
              {
                "@type": "Question",
                name: "Mit jelent pontosan a rotációs késés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Azt, hogy a te járatodat ugyanaz a repülőgép szolgálta volna ki, amely korábban már késve érkezett vagy késve fordult vissza, és ez továbbgyűrűzött a következő indulásra.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni ilyen ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a kijelzőfotókat és minden adatot, ami a végső érkezésedet és a késés tényleges hatását mutatja.",
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
            <span className="text-slate-900 dark:text-white">Rotációs késés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <RefreshCcw className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Repülőgép rotációs késése
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>repülőgép rotációs késése</strong> to temat, który brzmi technicznie, ale dla użytkownika
              sprowadza się do prostego pytania: skoro opóźnienie „przyszło” z wcześniejszego lotu tego samego samolotu,
              czy to coś zmienia. W praktyce ważne jest to, że sama operacyjna narracja linii nie zamyka jeszcze oceny claimu.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Repülőgép rotációs késése esetén sok esetben lehet erős claim.</strong> To, że przewoźnik mówi o
              wcześniejszym locie tego samego samolotu, nie oznacza jeszcze automatycznie, że sprawa odpada. Nadal
              najważniejsze są <strong>végső érkezés</strong>, pełna strata czasu i dobra dokumentacja.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A légitársaság az előző járatra hivatkozik?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli linia tłumaczy Twoje opóźnienie tym, że samolot przyleciał późno z wcześniejszego sektora, warto
              szybko sprawdzić, czy to rzeczywiście zamyka temat.
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
                <li>Megőrzött komunikaty od linii i dane lotu.</li>
                <li>Spójna dokumentacja całego przebiegu opóźnienia.</li>
                <li>Wyraźnie pokazana realna strata czasu, nie tylko techniczne wytłumaczenie.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub zaciemnia ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Założenie, że rotacyjny delay wszystko automatycznie tłumaczy.</li>
                <li>Brak danych o finalnym dotarciu do celu.</li>
                <li>Brak dokumentów potwierdzających pełny przebieg sprawy.</li>
                <li>Skupienie się tylko na technicznym opisie bez oceny skutków dla pasażera.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Mit jelent dokładnie a rotációs késés?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Chodzi o sytuację, gdy Twój lot miał być obsługiwany przez samolot, który wcześniej już przybył późno albo
                nie zdążył sprawnie wykonać poprzedniego odcinka. W efekcie opóźnienie „przeniosło się” na kolejny lot.
              </p>
              <p>
                Dla pasażera to nadal konkretna strata czasu, więc sama techniczna nazwa nie jest jeszcze pełną odpowiedzią.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért sama operacyjna narracja nie wystarcza?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Linie lotnicze często podają rotację jako skrócone operacyjne wyjaśnienie. To ważna wskazówka, ale nie
                zastępuje oceny końcowego wpływu na pasażera.
              </p>
              <p>
                W praktyce trzeba nadal zobaczyć, ile czasu realnie straciłeś i czy dokumenty dobrze to pokazują.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj boarding pass, PNR, wiadomości od linii, zdjęcia tablic lotów i dane pokazujące, kiedy faktycznie
                dotarłeś do celu.
              </p>
              <p>
                Im lepiej udokumentujesz opóźnienie i jego skutek, tym łatwiej ocenić, jak silna jest sprawa niezależnie
                od operacyjnego wyjaśnienia przewoźnika.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <RefreshCcw className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Rotacios logika</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To opis operacyjny, który pomaga zrozumieć źródło problemu, ale nie kończy całej analizy.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ostateczny czas dotarcia do celu mówi znacznie więcej o sile claimu niż sama etykieta „rotacja”.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dokumenty pomagają pokazać realny wpływ opóźnienia zamiast samego technicznego opisu problemu.
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
              Pasażer słyszy, że samolot „przyleciał późno z poprzedniego lotu” i uznaje to za ostateczne wyjaśnienie.
              Tymczasem claim nadal trzeba ocenić przez końcową stratę czasu i pełny zestaw dowodów.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze udokumentowano końcowe opóźnienie, pełną stratę czasu i spójny przebieg zdarzeń, a przewoźnik
                opiera się głównie na skróconym operacyjnym wytłumaczeniu.
              </p>
              <p>
                W takich sprawach największą różnicę robi szybka analiza faktów zamiast przyjęcia technicznej narracji bez sprawdzenia.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Repülőgép rotációs késése esetén lehet kártérítés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. Sam fakt, że opóźnienie przyszło z wcześniejszego sektora, nie wyklucza automatycznie mocnego claimu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit jelent pontosan a rotációs késés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  To sytuacja, gdy ten sam samolot spóźnił się na wcześniejszym odcinku i opóźnienie przeszło na kolejny lot.
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
              Jeśli linia tłumaczy opóźnienie wcześniejszym lotem tego samego samolotu, najlepiej sprawdzić sprawę przez
              końcową stratę czasu i dokumenty, a nie przez samą techniczną nazwę.
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
