import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  PlaneLanding,
  Split,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function AtszallasnalIsJarKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Átszállásnál is jár kártérítés? Egy foglalás, lekésett csatlakozás, EU261 [2026]"
        description="Magyar útmutató: átszállásnál mikor járhat kártérítés, miért számít az egy foglalás, a végső célállomás és a 3 órás késés, és mikor nem működik ugyanez."
        url="https://problemlot.com/hu/blog/atszallasnal-is-jar-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Átszállásnál is jár kártérítés? Egy foglalás, lekésett csatlakozás, EU261 [2026]",
            description:
              "Magyar nyelvű útmutató arról, mikor járhat kártérítés lekésett csatlakozás vagy átszállásos késés esetén, és miért kulcsfontosságú az egy foglalás és a végső érkezés.",
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
            datePublished: "2026-04-07",
            dateModified: "2026-04-07",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/atszallasnal-is-jar-karterites",
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
                name: "Átszállásnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. Különösen akkor, ha a járatok egyetlen foglalásban voltak, az EU261 alkalmazható az útra, és a végső célállomásra legalább 3 órás késéssel érkezel meg.",
                },
              },
              {
                "@type": "Question",
                name: "Miért olyan fontos, hogy egy foglalásban legyen a csatlakozás?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert az EU261-es csatlakozási logikánál ez kulcskérdés. Ha az út egyetlen foglalás része, könnyebb a teljes utat egy egységként kezelni. Külön vett jegyeknél ez sokkal nehezebb vagy egészen másképp működik.",
                },
              },
              {
                "@type": "Question",
                name: "Az első járat késése vagy a végső érkezés számít?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A pénzbeli kompenzáció szempontjából jellemzően a végső célállomásra történő érkezés késése a döntőbb, nem pusztán az első szakasz indulási vagy érkezési késése.",
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
            <span className="text-slate-900 dark:text-white">Átszállás</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Split className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Átszállásnál is jár kártérítés?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Igen, sok esetben igen. A legfontosabb kérdés az, hogy a csatlakozás <strong>egyetlen foglalás</strong>
              része volt-e, az útvonalra alkalmazható-e az <strong>EU261</strong>, és a lekésett átszállás miatt
              a <strong>végső célállomásra</strong> mennyi késéssel érkeztél meg.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <PlaneLanding className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Igen, járhat.</strong> Ha a járatok egy foglalás részei, az EU261 alkalmazható, és a
              lekésett csatlakozás miatt a végső célállomásra legalább 3 órás késéssel érsz meg, sok esetben
              felmerülhet a pénzbeli kompenzáció.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Átszállásnál nem az első szakasz a teljes történet</h2>
            <p className="mb-6 text-blue-100">
              Sok utas ott hibázik, hogy csak az első járat késését nézi. A csatlakozásos ügyeknél gyakran a
              teljes út számít, különösen az, hogy mikor érsz meg a végső célállomásra.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Átszállásos ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős az ügy?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járatok egyetlen foglalásban szerepeltek.</li>
                <li>Ha az útvonal az EU261 hatálya alá tartozik.</li>
                <li>Ha a végső érkezési késés eléri a releváns küszöböt.</li>
                <li>Ha nincs sikeresen bizonyított rendkívüli körülmény.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor gyengébb vagy más a helyzet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha külön vett jegyekről, self-transferről van szó.</li>
                <li>Ha a csatlakozás a biztonsági ellenőrzés vagy saját késésed miatt ment el.</li>
                <li>Ha a végső késés nem éri el a lényeges küszöböt.</li>
                <li>Ha az útvonal eleve nem EU261-es ügy.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miért ennyire fontos az egy foglalás?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert az átszállásos kompenzáció logikája jellemzően egyetlen utazásként kezeli a teljes útvonalat,
                ha az egy foglalás része. Ilyenkor az első szakasz hibája és a végső megérkezés együtt értelmezhető.
              </p>
              <p>
                Külön jegyeknél ez már nem ilyen egyenes. Ott sokszor külön kell nézni az első járatot és a
                lekésett további utat, ami teljesen más eredményre vezethet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miért a végső célállomás számít?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert a lekésett csatlakozás valódi következménye nem mindig az első járatnál látszik meg,
                hanem annál, hogy végül mikor érsz meg oda, ahová eredetileg tartottál.
              </p>
              <p>
                Előfordulhat, hogy az első szakasz „csak” rövidebbet késik, de a csatlakozás elvesztése miatt
                a teljes út már több órával csúszik. Ilyenkor a végső érkezés adja a teljes kárkép lényegét.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor nem működik ugyanez a logika?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ha az utas két külön jegyet vett és maga vállalta az átszállás kockázatát, a helyzet sokkal
                gyengébb lehet. Ugyanígy: ha a csatlakozás amiatt ment el, mert nem tartottad a boarding time-ot
                vagy a késlekedésed nem a légitársaság oldalán keletkezett.
              </p>
              <p>
                Ezért az „átszállásnál is jár?” kérdésre a jó válasz majdnem mindig így kezdődik: „attól függ,
                hogy ez egy foglalás volt-e”.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Tipikus példák</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Egy foglalás, lekésett csatlakozás
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ez a klasszikus erősebb helyzet, ha a végső érkezés jelentősen csúszott és az út egyetlen
                  reservation része volt.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Külön vett jegyek, saját átszállás
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt már sokkal óvatosabban kell elemezni a helyzetet, mert a teljes út nem biztos, hogy egy
                  jogi egységként kezelhető.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha lekésted a csatlakozást, először azt ellenőrizd, hogy az út egy foglalás volt-e, és mennyi
              lett a végső érkezési késés. Ez sokkal fontosabb, mint önmagában az első járat csúszása.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Lekésett csatlakozás ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Átszállásnál is járhat kártérítés?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, különösen akkor, ha egy foglalásról van szó és a végső megérkezés jelentősen csúszott.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Az első járat késése vagy a végső érkezés számít?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A pénzbeli kompenzációnál jellemzően a végső célállomásra történő megérkezés a döntőbb.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Külön vett jegyeknél is ugyanez van?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem feltétlenül. Külön jegyeknél sokkal gyengébb vagy eltérő lehet a teljes út kompenzációs logikája.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/hany-ora-keses-utan-jar-karterites" className="block hover:underline">
                Hány óra késés után jár kártérítés?
              </Link>
              <Link href="/hu/blog/mely-jaratokra-vonatkozik-az-eu261" className="block hover:underline">
                Mely járatokra vonatkozik az EU261?
              </Link>
              <Link href="/hu/blog/low-cost-jaratoknal-is-jar-penz" className="block hover:underline">
                Low-cost járatoknál is jár pénz?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
