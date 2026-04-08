import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Bed,
  CheckCircle2,
  Clock3,
  FileText,
  Hotel,
  Receipt,
  ShieldCheck,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function EjszakaiKesesHotelEsJogok() {
  return (
    <LayoutHu>
      <SEO
        title="Éjszakai késés: hotel és jogok – mi járhat? [2026]"
        description="Magyar útmutató éjszakai járatkéséshez: mikor járhat hotel, mely költségeket őrizd meg, és hogyan számít a teljes éjszakai időveszteség."
        url="https://problemlot.com/hu/blog/ejszakai-keses-hotel-es-jogok"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Éjszakai késés: hotel és jogok – mi járhat? [2026]",
            description:
              "Magyar útmutató éjszakai járatkéséshez: hogyan számít a hotel, az indokolt költség, a teljes éjszakai időveszteség és a dokumentáció.",
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
              "@id": "https://problemlot.com/hu/blog/ejszakai-keses-hotel-es-jogok",
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
                name: "Éjszakai késésnél járhat hotel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen, különösen akkor, ha a késés miatt az utasnak éjszakára ott kell maradnia, és a helyzetből indokoltan szállásigény keletkezik.",
                },
              },
              {
                "@type": "Question",
                name: "Mit őrizzek meg, ha hotelre vagy taxira költöttem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg az összes blokkot, számlát, booking visszaigazolást, valamint azokat az airline-üzeneteket is, amelyek mutatják, miért kellett az éjszakai megoldás.",
                },
              },
              {
                "@type": "Question",
                name: "Elég az, hogy nagyon késő volt a járat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem önmagában. A valódi kérdés az, hogy a késés ténylegesen éjszakai ottmaradást, pluszköltséget vagy jelentős szervezési terhet okozott-e.",
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
            <span className="text-slate-900 dark:text-white">Éjszakai késés</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Bed className="h-4 w-4" />
              Problema-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Éjszakai késés: hotel és jogok
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az <strong>éjszakai késés</strong> az a helyzet, amikor a felhasználó általában már nem elméletet keres,
              hanem gyors, praktyczny wybór: járhat-e <strong>hotel</strong>, mely költségeket kell zachować, i co robić,
              ha linia nie daje od razu sensownego rozwiązania. Itt kluczowe są rozsądne koszty, dokumentacja i pełny
              obraz nocnej straty czasu.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Hotel className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Éjszakai késésnél sok esetben járhat hotel vagy más indokolt ellátás.</strong> A lényeg azonban nem
              csak az, hogy késő lett a járat, hanem az, hogy a helyzet ténylegesen <strong>éjszakai ottmaradást</strong>,
              pluszköltséget vagy komoly szervezési terhet okozott-e.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Éjszaka bent ragadtál a késés miatt?</h2>
            <p className="mb-6 text-blue-100">
              Ha hotelre, taxira vagy ételre kellett költened, érdemes gyorsan ellenőrizni, mennyire lehet erős a claim
              i które dokumenty warto od razu uporządkować.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Éjszakai késés ellenőrzése
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
                <li>Jól udokumentowana nocna strata czasu i brak sensownego rozwiązania od razu.</li>
                <li>Megőrzött blokki za hotel, taxi, jedzenie lub transfer.</li>
                <li>Wiadomości od linii pokazujące skalę problemu.</li>
                <li>Rozsądne, proporcjonalne koszty związane z nocnym oczekiwaniem.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti lub komplikuje sprawę?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Brak rachunków lub screenshotów z nocy zdarzenia.</li>
                <li>Wydatki trudne do uzasadnienia skalą sytuacji.</li>
                <li>Brak dowodu, że nocleg rzeczywiście był potrzebny.</li>
                <li>Niepełna historia komunikacji z linią lotniczą.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Mikor beszélünk naprawdę o nocnym problemie, a nie zwykłym opóźnieniu?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nie każde późne opóźnienie od razu tworzy taki sam ciężar dla pasażera. Kluczowy moment pojawia się wtedy,
                gdy przez sytuację realnie trzeba zostać na noc, zorganizować transport, hotel lub inne podstawowe potrzeby.
              </p>
              <p>
                Właśnie wtedy zwykły delay zaczyna zmieniać się w problem praktyczny i kosztowy.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért olyan ważne są rachunki i bookingi?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                W nocnych sprawach pamięć pasażera szybko przestaje wystarczać. To właśnie rachunki, potwierdzenia rezerwacji
                i wiadomości od linii najlepiej pokazują, co było konieczne i dlaczego.
              </p>
              <p>
                Im lepiej udokumentowane są nocleg, transport i podstawowe wydatki, tym łatwiej ocenić pełną skalę sprawy.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Jakie koszty warto zachować?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Zachowaj hotel, taxi, transfer, podstawowe posiłki i wszelkie inne rozsądne koszty, które wynikły
                bezpośrednio z nocnego oczekiwania.
              </p>
              <p>
                Dobrze jest też zachować komunikaty od linii, bo pokazują one, że nocny problem nie był tylko Twoim subiektywnym odczuciem.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Bed className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Hotel igeny</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Najważniejsze jest pokazanie, że nocleg był realnie potrzebny, nie tylko wygodny.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Receipt className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Koltsegek</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Rozsądnie udokumentowane wydatki dużo lepiej pokazują skalę nocnego problemu.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Ejszakai veszteseg</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Chodzi nie tylko o godziny, ale o realne skutki: nocleg, brak snu, reorganizację podróży i koszty.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Najczęstszy błąd przy nocnym opóźnieniu
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Pasażer skupia się na przetrwaniu nocy i nie zbiera dowodów. Rano okazuje się, że zniknęły ważne komunikaty,
              a rachunki nie są uporządkowane, co później osłabia sprawę.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Kiedy taki case może być szczególnie mocny?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Gdy dobrze pokazano, że nocne opóźnienie realnie wymusiło hotel, transport lub inne rozsądne wydatki,
                a wszystko jest podparte dokumentami i komunikacją z linią.
              </p>
              <p>
                W takich sprawach szybkie uporządkowanie dowodów potrafi zrobić większą różnicę niż sama liczba godzin opóźnienia.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/80">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Éjszakai késésnél járhat hotel?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen, szczególnie gdy sytuacja realnie wymusiła nocleg i podstawowe zabezpieczenie podróży.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit őrizzek meg, ha hotelre vagy taxira költöttem?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Zachowaj rachunki, bookingi i komunikaty od linii pokazujące, dlaczego nocne rozwiązanie było potrzebne.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Elég az, że lot był bardzo późno?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nie samo to. Trzeba pokazać, że opóźnienie naprawdę wymusiło nocne oczekiwanie, dodatkowe koszty lub duży ciężar organizacyjny.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-700 p-8 text-white">
            <h2 className="mb-3 text-3xl font-bold">Chcesz szybko sprawdzić swój case?</h2>
            <p className="mb-6 text-slate-200">
              Jeśli nocne opóźnienie zmusiło Cię do hotelu, taxi lub innych wydatków, najlepiej szybko uporządkować
              dokumenty i sprawdzić siłę całej sprawy.
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
