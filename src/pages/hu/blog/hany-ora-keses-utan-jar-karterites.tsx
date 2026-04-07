import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  PlaneLanding,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function HanyOraKesesUtanJarKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Hany ora keses utan jar karterites? A 3 oras szabaly magyarul [2026]"
        description="Konkret magyar valasz: hany ora keses utan johet szoba penzbeli karterites, miert a vegso erkezes szamit, es mikor nem eleg onmagaban a nagy csuszas."
        url="https://problemlot.com/hu/blog/hany-ora-keses-utan-jar-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Hany ora keses utan jar karterites? A 3 oras szabaly magyarul [2026]",
            description:
              "Magyar nyelvu, konkret valasz arra, hogy hany ora keses utan johet szoba penzbeli karterites, miert a vegso erkezes a kulcs, es mikor nem eleg onmagaban a keses merteke.",
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
              "@id": "https://problemlot.com/hu/blog/hany-ora-keses-utan-jar-karterites",
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
                name: "Tényleg a 3 oras keses a fo szabaly?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, a penzbeli karteritesnel altalaban a legalabb 3 oras vegso erkezesi keses a fo kuszob, de ez csak akkor relevans, ha a jarat EU261-es ugy.",
                },
              },
              {
                "@type": "Question",
                name: "A 2 oras keses semmit nem jelent?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem ezt jelenti. A 2 oras keses mas utasjogokat mar felhozhat, de a penzbeli kompenzacio klasszikus kuszobe jellemzoen nem itt kezdodik.",
                },
              },
              {
                "@type": "Question",
                name: "Mindig a felszallas kesese szamit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Sok esetben a vegso celallomasra valo erkezes kesese a döntő, nem pusztan az indulasi csuszas.",
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
            <span className="text-slate-900 dark:text-white">Hany ora keses utan</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Clock3 className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hany ora keses utan jar karterites?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A rovid valasz az, hogy penzbeli karteritesnel a leggyakrabban a 3 oras keses a kulcs. A pontos
              valasz viszont az, hogy ez altalaban a vegso erkezesre vonatkozik, es csak akkor lesz relevans,
              ha maga a jarat egyaltalan az EU261 hatalya ala tartozik.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <PlaneLanding className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A rovid, snippetre kesz valasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              A penzbeli karterites klasszikus kuszobe altalaban a legalabb 3 oras keses a vegso
              celallomasra valo erkezesnel. A 2 oras keses mar lehet fontos mas jogok miatt, de önmagaban
              tipikusan nem ez az a pont, ahol a klasszikus penzbeli igeny elindul.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Nem csak az oraszam szamit, hanem az is, hogy melyik oraszam
            </h2>
            <p className="mb-6 text-blue-100">
              A leggyakoribb felreertes az, hogy az utas a kapunal latott csuszasra figyel, mikozben a jogi
              elemzesnel sokszor a vegso erkezesi ido az igazi donto pont.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Keses gyors ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor eros a kerdes?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a vegso erkezes legalabb kb. 3 orat csuszik.</li>
                <li>Ha a jarat EU261-es ugy.</li>
                <li>Ha nincs eros kizaro tenyezo vagy bizonyitott rendkivuli korulmeny.</li>
                <li>Ha a keses nem utasoldali hiba miatt alakult ki.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor felrevezeto a kerdes?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha csak az indulasi kesest nezed.</li>
                <li>Ha a jarat eleve nem EU261-es.</li>
                <li>Ha a problema valojaban torles vagy atfoglalas, nem puszta keses.</li>
                <li>Ha nagy a csuszas, de a jogi alap mas okbol gyenge.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miert a 3 oras szabaly lett a legismertebb?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert ez az a gyakorlatban leggyakrabban emlegetett kuszob, amelynel mar penzbeli kompenzacio
                is felmerulhet. Emiatt a legtobb utas erre keres ra, es az AI Overviews is ezt a valaszt próbálja
                roviden osszefoglalni.
              </p>
              <p>
                Viszont a jo valasz nem all meg ennyinel, mert a 3 oras szabaly csak az egyik darab a teljes
                kepben. A jogi hataly, a carrier es a keses oka ugyanugy fontos.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              A 2 oras keses akkor sem lenyegtelen
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                Az, hogy a klasszikus penzbeli igeny kuszobe altalaban nem itt van, nem jelenti azt, hogy a 2 oras
                keses semmit nem jelent. Mas utasjogok, ellatasi kotelezettseg vagy az esemeny tovabbi alakulasa
                miatt mar ez is fontos lehet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Indulasi keses vs vegso erkezes
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Egy jarat indulhat 2 orat kesve, de vegul valamit behozhat az utbol. Forditva is lehet:
                viszonylag kisebb indulasi csuszasbol nagy vegso keses lesz, peldaul egy csatlakozas elvesztese miatt.
              </p>
              <p>
                Ezert a jo kerdes nem egyszeruen az, hogy „mennyi volt a keses a tablan”, hanem az, hogy mikor
                jutottal be a vegso celallomasodra.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor nem eleg a 3 oras keses sem?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ha maga a jarat nem EU261-es, vagy ha a legitarsasag valodi rendkivuli korulmenyre tud sikeresen
                hivatkozni, a 3 oras keses onmagaban nem fog penzbeli kifizetest garantalni.
              </p>
              <p>
                Ugyanigy, ha a problema valojaban nem klasszikus keses, hanem mas jogi helyzet, akkor az elemzes
                mar atcsuszhat torlesi vagy csatlakozasi logikaba.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              A jo valasz nem csak egy szam, hanem egy helyes sorrend
            </h2>
            <p className="mb-6 text-slate-300">
              Igen, a legismertebb valasz a 3 ora. De a valodi hasznos valasz az, hogy 3 oras vegso erkezesi
              kesesnel johet szoba penz, ha a jarat EU261-es, es nincs eros kizaro tenyezo.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              3 oras szabaly ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A 3 oras keses a fo szabaly?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen, altalaban a penzbeli igeny klasszikus kuszobe ez, de csak EU261-es jaratnal.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A 2 oras keses nem szamit semmit?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem ezt jelenti. Mas jogok szempontjabol ez is lehet fontos.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mindig az indulasi keses a donto?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. Sok esetben a vegso erkezes lesz a meghatarozo.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jar karterites keses eseten?
              </Link>
              <Link href="/hu/blog/mennyit-fizetnek-a-legitarsasagok-250-400-600-euro" className="block hover:underline">
                Mennyit fizetnek a legitarsasagok? 250, 400 vagy 600 euro
              </Link>
              <Link href="/hu/blog/keses-vs-torles-vs-tulfoglalas-kulonbsegek" className="block hover:underline">
                Keses vs torles vs tulfoglalas
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
