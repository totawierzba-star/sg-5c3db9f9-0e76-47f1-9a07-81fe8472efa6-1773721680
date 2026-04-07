import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Plane,
  RefreshCcw,
  Users,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function KesesVsTorlesVsTulfoglalasKulonbsegek() {
  return (
    <LayoutHu>
      <SEO
        title="Keses vs torles vs tulfoglalas: mi a kulonbseg es mikor mi jar? [2026]"
        description="Magyar utmutato a keses, torles es tulfoglalas kozotti kulonbsegekhez: mikor jar penzbeli karterites, mikor fontosabb az atfoglalas, es hogyan valtozik az utas jogi helyzete."
        url="https://problemlot.com/hu/blog/keses-vs-torles-vs-tulfoglalas-kulonbsegek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Keses vs torles vs tulfoglalas: mi a kulonbseg es mikor mi jar? [2026]",
            description:
              "Magyar nyelvu osszehasonlito utmutato a keses, torles es tulfoglalas kozotti kulonbsegekrol, az EU261 kulonbozo jogkovetkezmenyeirol es a fo gyakorlati teendokrol.",
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
              "@id":
                "https://problemlot.com/hu/blog/keses-vs-torles-vs-tulfoglalas-kulonbsegek",
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
                name: "Melyik a legerosebb utasjogi helyzet: keses, torles vagy tulfoglalas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ez az adott tenyallastol fugg, de a tulfoglalas miatti akarat ellenere torteno megtagadott beszallas sokszor kulonosen eros helyzetet teremt az utas szempontjabol.",
                },
              },
              {
                "@type": "Question",
                name: "Lehet egy menetrendvaltozas jogilag inkabb torles, mint egyszeru keses?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Bizonyos nagy valtozasok vagy masnapi atfoglalasok mar nem egyszeru keseskent, hanem torleshez kozeli jogi helyzetkent ertekelhetok.",
                },
              },
              {
                "@type": "Question",
                name: "Mindharom esetben ugyanaz a penzbeli szabaly ervenyes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem teljesen. Vannak kozos elemek, de a refund, az atfoglalas, a gondoskodasi kotelezettseg es a penzbeli igeny feltetelei helyzettipusonkent elternek.",
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
            <span className="text-slate-900 dark:text-white">Keses, torles, tulfoglalas</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Keses vs torles vs tulfoglalas: mi a kulonbseg?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A legtobb utas csak annyit erez, hogy „valami rosszul ment a jarattal”. Jogilag viszont
              nagyon nem mindegy, hogy kesesről, torlesről vagy tulfoglalas miatti megtagadott beszallasrol
              van szo. A jogosultsagok, a bizonyitas es a helyes kovetkezo lepes is elterhet.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A lenyeg roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              A keses azt jelenti, hogy a jarat ugyan megvalosul, de csuszassal. A torlesnel az eredeti
              jarat megszunik vagy jogilag atalakul. A tulfoglalas pedig gyakran abban csucsosodik ki,
              hogy az utasnak ervenyes foglalassal sem engednek beszallni. Mindharom helyzet mas jogi
              keretet es mas reakciot igenyel.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-4 flex items-center gap-3">
                <Clock3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Keses</h2>
              </div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                A jarat elindul vagy megvalosul, de idoben megcsuszik. Itt sokszor a vegso erkezesi keses
                lesz a kulcskerdes.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-4 flex items-center gap-3">
                <RefreshCcw className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Torles</h2>
              </div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Az eredeti jarat nem ugy valosul meg, ahogy tervezted. Itt a refund, az atfoglalas es
                a 14 napos szabaly kulonosen fontos lehet.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-4 flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Tulfoglalas</h2>
              </div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                A jarat indulhatna, de az utast ervenyes foglalassal sem engedik fel. Ez gyakran az egyik
                legerosebb utasjogi helyzet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              A kulcs nem az, hogy „gond volt a jarattal”, hanem az, hogy milyen fajta gond volt
            </h2>
            <p className="mb-6 text-blue-100">
              Ugyanarra az utvonalra teljesen mas jogi elemzes kell, ha az utas csak kesve erkezik meg,
              mintha egyaltalan nem jut fel a gepre tulfoglalas miatt, vagy ha a legifuvarozo masnapra
              atdobja egy masik jaratra.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ugytipus gyors ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Keses: mikor lesz fontos a vegso erkezes?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Keses eseten a jarat altalaban tenylegesen megvalosul, csak nem az eredeti menetrend szerint.
                Az EU261-es penzbeli igenynel sokszor nem a felszallas csuszasa, hanem a vegso celallomasra
                valo erkezes lesz a meghatarozo.
              </p>
              <p>
                Ez azt jelenti, hogy ugyanaz a 90 perces indulasi csuszas lehet jelentektelen egy egyenes utvonalon,
                de kritikus egy csatlakozasos ut eseteben.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Torles: mikor nem csak egyszeru keses?
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <p className="text-slate-600 dark:text-slate-300">
                  Torlesnel az eredeti jarat tenylegesen kiesik a kepbol, vagy legalabbis ugy valtozik meg,
                  hogy az utas eredeti utazasi terve mar nem tekintheto erintetlennek.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <p className="text-slate-600 dark:text-slate-300">
                  Itt mar a 14 napos szabaly, az alternativ jarat minosege, valamint a refund vs atfoglalas
                  kerdes valik kulcsfontossaguva.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Tulfoglalas: miert ilyen eros jogi helyzet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A tulfoglalas tipikus vegpontja az, hogy az utasnak van ervenyes foglalasa, idoben ott van,
                de a legitarsasag megsem engedi fel a gepre. Ez jogilag mas, mint amikor maga a jarat omlik ossze.
              </p>
              <p>
                Ilyenkor a penzbeli kompenzacio, az atfoglalas es a gondoskodasi kotelezettseg sokszor kulonosen
                eros alapon kerheto, feltéve hogy az utas nem onkent mondott le a helyerol.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Ugyanaz a penzbeli szabaly ervenyes mindharomra?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nem teljesen. Vannak kozos logikak es hasonlo savok, de a tenyleges jogi elemzes mindig
                a problematipustol fugg. Kesesnel a vegso erkezesi ido hangsulyos, torlesnel a tajekoztatas
                es az alternativa, tulfoglalasnal pedig a beszallas megtagadasanak tenye.
              </p>
              <p>
                Ezert az sem jo megkozelites, hogy egyetlen sablont probalunk minden helyzetre rahuzni.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              A leggyakoribb felreertesek
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Az egyik leggyakoribb tevedes, hogy az utas minden problemat keseskent ir le, mert a vege
                ugyis az lett, hogy kesobb ert haza. Jogilag viszont lehet, hogy valojaban torles vagy
                megtagadott beszallas tortent.
              </p>
              <p>
                A masik felreertes az, hogy ugyanazok a bizonyitekok es ugyanaz a kommunikacio eleg mindenhez.
                A harom helyzethez mas hangsulyokkal kell dokumentalni a tortenteket.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Melyiknel mi a legfontosabb kovetkezo lepes?
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Keses</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Az erkezesi kesest es a vegso celallomast kell jol rogzitani.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Torles</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A tajekoztatas idejet, az alternativat es a valasztasi lehetosegek hianyat kell figyelni.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Tulfoglalas</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Azt kell tisztan rogzitani, hogy az utas ervenyes foglalassal jelent meg, es akaratán kivul nem engedtek felszallni.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Nem ugyanazt kell kovetelni minden helyzetben
            </h2>
            <p className="mb-6 text-slate-300">
              Az okos lepes nem az, hogy „akarok 600 eurot”, hanem az, hogy eloszor pontosan beazonositjuk,
              mi tortent: keses, torles vagy tulfoglalas. Onnantol a megfelelo jogi ut sokkal tisztabb lesz.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Ugytipus es jogosultsag ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Melyik a legerosebb helyzet: keses, torles vagy tulfoglalas?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Ez az adott tenyallastol fugg, de a tulfoglalas miatti akarat ellenere torteno beszallasmegtagadas
                  sokszor kulonosen eros utasjogi helyzet.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Egy nagy menetrendvaltozas lehet valojaban torles?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen. Bizonyos esetekben a jelentős valtozas vagy masnapi atfoglalas jogilag mar nem puszta keses.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Ugyanaz a penzbeli logika ervenyes mindharomra?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem teljesen. Vannak kozos elemek, de a reszletszabalyok es a hangsulyok kulonboznek.
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
              <Link href="/hu/blog/mikor-jar-karterites-torolt-jarat-eseten" className="block hover:underline">
                Mikor jar karterites torolt jarat eseten?
              </Link>
              <Link href="/hu/blog/mennyit-fizetnek-a-legitarsasagok-250-400-600-euro" className="block hover:underline">
                Mennyit fizetnek a legitarsasagok? 250, 400 vagy 600 euro
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
