import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  FileText,
  Settings,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function TechnikaiHibaMikorJarPenz() {
  return (
    <LayoutHu>
      <SEO
        title="Technikai hiba – mikor jár pénz? [2026]"
        description="Magyar útmutató technikai hiba miatti járatproblémához: mikor lehet erős a claim, hogyan számít a végső érkezés és miért nem elég a légitársaság rövid magyarázata."
        url="https://problemlot.com/hu/blog/technikai-hiba-mikor-jar-penz"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Technikai hiba – mikor jár pénz? [2026]",
            description:
              "Magyar útmutató a technikai hibák miatti járatproblémákhoz: hogyan számít a végső érkezés, a dokumentáció és a légitársaság magyarázatának valós súlya.",
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
              "@id": "https://problemlot.com/hu/blog/technikai-hiba-mikor-jar-penz",
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
                name: "Technikai hiba esetén járhat pénz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A technikai hiba önmagában nem zárja ki automatikusan az erős claim lehetőségét, de a végső érkezés, a dokumentáció és a konkrét körülmények mindig fontosak maradnak.",
                },
              },
              {
                "@type": "Question",
                name: "Elég az, hogy a légitársaság műszaki hibára hivatkozik?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem önmagában. A rövid technikai magyarázat nem mindig ad teljes képet arról, hogyan kell értékelni a helyzetet és a végső időveszteséget.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni technikai hiba esetén?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a kijelzőfotókat és minden adatot, ami mutatja a végső érkezésedet és a probléma gyakorlati hatását.",
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
            <span className="text-slate-900 dark:text-white">Technikai hiba</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Settings className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Technikai hiba – mikor jár pénz?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>technikai hiba</strong> to jeden z najmocniejszych tematów pod wysoki intent i AI Overviews.
              Użytkownik zwykle słyszy krótką informację o „usterce technicznej” i nie wie, czy to od razu oznacza brak
              roszczenia, czy wręcz przeciwnie. Dobra odpowiedź musi być spokojna: sama etykieta nie przesądza jeszcze wszystkiego.
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
              <strong>Technikai hiba esetén sokszor járhat pénz.</strong> Samo to, że linia mówi o usterce technicznej,
              nie zamyka automatycznie sprawy. Najważniejsze pozostają <strong>végső érkezés</strong>, pełna strata czasu,
              dokumentacja i to, jak dokładnie wyglądał cały przebieg zdarzenia.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A légitársaság technikai hibára hivatkozott?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli przewoźnik tłumaczy problem usterką, najlepiej szybko sprawdzić case na faktach, a nie kończyć analizy
              na samym krótkim opisie z komunikatu.
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
                Mi erősíti az ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jelentős końcowe opóźnienie lub duża strata czasu.</li>
                <li>Megőrzött wiadomości od linii i pełna dokumentacja lotu.</li>
                <li>Spójny obraz zdarzenia i jego skutków dla pasażera.</li>
                <li>Dane pokazujące, kiedy faktycznie dotarłeś do celu.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub zaciemnia ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Założenie, że każda technikai hiba automatycznie kończy sprawę.</li>
                <li>Brak danych o finalnym przylocie do celu.</li>
                <li>Niepełna dokumentacja komunikacji i zmian lotu.</li>
                <li>Skupienie się tylko na jednym zdaniu z komunikatu przewoźnika.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért sama „technikai hiba” nie wystarcza do pełnej odpowiedzi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Linie lotnicze bardzo często używają technicznych opisów jako skrótu dla całej sytuacji. Dla pasażera brzmi
                to jak gotowa odpowiedź, ale w praktyce to dopiero punkt wyjścia.
              </p>
              <p>
                Dobra ocena zawsze wraca do faktów: jak wyglądał przebieg lotu, ile wyniosła końcowa strata czasu i co da
                się realnie udokumentować.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért końcowe dotarcie do celu jest ważniejsze niż sama nazwa usterki?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo to właśnie końcowy rezultat pokazuje, jak duży był rzeczywisty problem dla pasażera. Sama nazwa awarii
                nic jeszcze nie mówi o pełnej skali opóźnienia lub reorganizacji podróży.
              </p>
              <p>
                Z perspektywy użytkownika najważniejsze jest więc nie to, jak brzmi techniczny opis, ale ile realnie stracił.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj boarding pass, PNR, komunikaty od linii, zdjęcia z tablic lotów oraz wszystko, co pokazuje finalny
                czas dotarcia do celu.
              </p>
              <p>
                Im bardziej uporządkowana dokumentacja, tym łatwiej oddzielić realny wpływ awarii od skróconej narracji przewoźnika.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Settings className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Technikai magyarazat</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To ważna informacja operacyjna, ale sama nie zamyka oceny claimu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To końcowe opóźnienie najlepiej pokazuje prawdziwą skalę problemu dla pasażera.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dokumenty pomagają ocenić faktyczny przebieg sprawy, a nie tylko krótką etykietę z maila.
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
              Pasażer słyszy „usterka techniczna” i uznaje, że już zna odpowiedź. W praktyce właśnie wtedy najłatwiej
              przestać patrzeć na końcową stratę czasu i własne dokumenty.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze widać dużą końcową stratę czasu, pełny przebieg zdarzenia i spójną dokumentację, a wyjaśnienie
                linii pozostaje bardzo ogólne.
              </p>
              <p>
                W takich sprawach najwięcej daje szybka analiza oparta na faktach, nie na samym technicznym haśle.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Technikai hiba esetén járhat pénz?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. Sama wzmianka o technikai hibie nie przekreśla automatycznie mocnego claimu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elég az, że linia powołała się na usterkę?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie samo w sobie. Trzeba nadal ocenić końcowe opóźnienie, dokumenty i pełny skutek dla pasażera.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj boarding pass, PNR, komunikaty od linii i dane pokazujące końcowy czas dotarcia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli linia tłumaczy problem techniczną usterką, najlepiej sprawdzić pełny skutek dla podróży i dokumenty,
              zamiast kończyć analizę na samym opisie awarii.
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
