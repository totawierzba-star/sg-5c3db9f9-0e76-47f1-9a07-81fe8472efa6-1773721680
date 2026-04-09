import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  GitBranch,
  Plane,
  Route,
  ShieldAlert,
  TimerReset,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function KesesMiattLekesettCsatlakozas() {
  return (
    <LayoutHu>
      <SEO
        title="Késés miatt lekésett csatlakozás – mikor lehet kártérítés? [2026]"
        description="Magyar útmutató késés miatt lekésett csatlakozáshoz: mikor lehet erős a claim, hogyan számít az egy foglalás, a végső célállomás és a teljes időveszteség."
        url="https://problemlot.com/hu/blog/keses-miatt-lekesett-csatlakozas"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Késés miatt lekésett csatlakozás – mikor lehet kártérítés? [2026]",
            description:
              "Magyar útmutató a késés miatt lekésett csatlakozásokhoz: hogyan számít az egy foglalás, a végső célállomás és a teljes időveszteség.",
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
              "@id": "https://problemlot.com/hu/blog/keses-miatt-lekesett-csatlakozas",
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
                name: "Ha késés miatt lekéstem a csatlakozást, lehet kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A kulcskérdés ilyenkor az, hogy a teljes utazás egy foglalásban volt-e, és mekkora lett a végső célállomásra érkezés késése.",
                },
              },
              {
                "@type": "Question",
                name: "Miért nem elég csak az első járat késését nézni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert a claim erejét sokkal jobban mutatja meg, hogyan hatott a teljes utazásra, különösen arra, mikor jutottál el végül a célállomásodra.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megőrizni ilyen ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a teljes foglalás adatait, az összes boarding passt, az airline üzeneteit, az új útvonal részleteit és a végső célállomásra érkezésed idejét.",
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
            <span className="text-slate-900 dark:text-white">Késés miatt lekésett csatlakozás</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <GitBranch className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Késés miatt lekésett csatlakozás
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>késés miatt lekésett csatlakozás</strong> to bardzo bezpośredni, conversionowy temat. Użytkownik
              zwykle już wie, co było przyczyną problemu: pierwszy lot się spóźnił, a dalsza podróż się rozsypała.
              Najważniejsze jest więc szybkie przełożenie tego na <strong>końcową stratę czasu</strong> i pełny sens claimu.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Route className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Ha késés miatt lekésted a csatlakozást, sok esetben erős claim lehet.</strong> Najważniejsze jest
              jednak to, czy cała podróż była na <strong>egy foglalás</strong>, oraz jak duża była końcowa strata czasu
              przy dotarciu do <strong>végső célállomás</strong>.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Az első járat késése miatt lemaradtál a dalszym locie?</h2>
            <p className="mb-6 text-blue-100">
              Jeśli pierwszy odcinek rozwalił dalszy plan podróży, najlepiej szybko sprawdzić pełny chain i końcowe
              dotarcie do celu, zamiast patrzeć tylko na sam pierwszy delay.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Csatlakozási ügy ellenőrzése
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
                <li>Jasno widać, że cała podróż była na jednej rezerwacji.</li>
                <li>Megőrzött boarding passek i pełny PNR całej trasy.</li>
                <li>Wyraźnie udokumentowane końcowe dotarcie do celu.</li>
                <li>Spójny obraz, jak pierwszy delay rozbił cały chain podróży.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub miesza ocenę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Brak pewności, czy to była jedna czy kilka osobnych rezerwacji.</li>
                <li>Brak danych o nowym połączeniu lub finalnym przylocie.</li>
                <li>Skupienie się wyłącznie na pierwszym opóźnieniu.</li>
                <li>Niepełna dokumentacja dalszych etapów podróży.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért pierwszy opóźniony lot nie powinien być jedynym centrum analizy?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bo to, co naprawdę boli pasażera, zwykle nie kończy się na samym pierwszym opóźnieniu. Prawdziwy problem
                zaczyna się wtedy, gdy przez ten pierwszy delay rozsypuje się cała dalsza podróż.
              </p>
              <p>
                Właśnie dlatego trzeba patrzeć na pełen chain i końcowy efekt, a nie tylko na pierwszy segment.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért az egy foglalás i końcowy cel są tak ważne?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                To właśnie te dwa elementy pozwalają ocenić, czy cała podróż może być traktowana jako jedna całość oraz
                jak bardzo problem pierwszego lotu wpłynął na ostateczny rezultat.
              </p>
              <p>
                Im wyraźniej widać pełen route i końcową godzinę przyjazdu, tym mocniej można pokazać rzeczywistą stratę czasu.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Co trzeba zachować przy takim case?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj pełny PNR, wszystkie boarding passek, komunikaty od linii, dane o nowym połączeniu i końcowy
                czas dotarcia do celu.
              </p>
              <p>
                Im lepiej zrekonstruowany jest cały route po utracie connection, tym łatwiej zbudować mocny obraz sprawy.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Elso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To początek problemu, ale nie zawsze najlepszy punkt do oceny pełnej szkody czasowej.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                To końcowy czas dotarcia najlepiej pokazuje, jak bardzo rozsypała się cała podróż.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <FileText className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Dokumenty z całej podróży pomagają pokazać, że problem jednego lotu przełożył się na cały route.
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
              Pasażer analizuje wyłącznie pierwszy opóźniony lot, a nie całą dalszą podróż. Przez to łatwo zgubić to,
              co w sprawie najmocniejsze: końcową stratę czasu na całym chainie.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze pokazano jedną rezerwację, opóźnienie pierwszego lotu, utratę connection i dużą końcową stratę
                czasu przy dotarciu do celu.
              </p>
              <p>
                W takich sprawach największą różnicę robi spojrzenie na pełny route zamiast na jeden odcinek.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ha késés miatt lekéstem a csatlakozást, lehet kártérítés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, sok esetben igen. Kluczowe jest jednak to, czy podróż była na jednej rezerwacji i jak duża była końcowa strata czasu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miért nie wystarczy tylko patrzeć na pierwszy opóźniony lot?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Bo prawdziwa skala problemu zwykle wychodzi dopiero przy końcowym dotarciu do celu.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Co zachować przy takim case?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj pełny PNR, wszystkie boarding passek, nowe połączenie i finalny czas przybycia do celu.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli pierwszy opóźniony lot rozsypał Ci dalszą podróż, najlepiej sprawdzić pełny route i końcowe dotarcie
              do celu, a nie tylko sam pierwszy delay.
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
