import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock3,
  History,
  ShieldAlert,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MeddigLehetVisszamenolegIgenyelni() {
  return (
    <LayoutHu>
      <SEO
        title="Meddig lehet visszamenoleg igenyelni? Elavulasi idok es regi jaratok [2026]"
        description="Magyar utmutato a regi jaratokra: meddig lehet utolag karteritest kerni, mitol fugg az idohatar, es miert erdemes minel hamarabb lepni akkor is, ha meg nem jart le a lehetoseg."
        url="https://problemlot.com/hu/blog/meddig-lehet-visszamenoleg-igenyelni"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Meddig lehet visszamenoleg igenyelni? Elavulasi idok es regi jaratok [2026]",
            description:
              "Magyar nyelvu attekintes a regi jaratok utani igenyekrol: meddig lehet visszamenoleg lepni, miert nem jo az utolso pillanatra hagyni az ugyet, es hogyan gyengul a bizonyithatosag az ido mulasaval.",
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
              "@id": "https://problemlot.com/hu/blog/meddig-lehet-visszamenoleg-igenyelni",
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
                name: "Ha a jaratom tobb eve volt, akkor is lehet eselyem?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, bizonyos esetekben igen. A valodi kerdes az, hogy az adott ugyre vonatkozo idohatar meg nyitva van-e, es megvannak-e a hasznalhato bizonyitekok.",
                },
              },
              {
                "@type": "Question",
                name: "Miert nem jo az utolso hetekre hagyni a regi ugyet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert az ido nemcsak a jogi hataridot fogyasztja, hanem a bizonyitekokat is gyengiti. Elveszhetnek emailek, boarding passok, blokkok vagy fontos emlekek a tenyallasrol.",
                },
              },
              {
                "@type": "Question",
                name: "A regi jarat automatikusan erosebb vagy gyengebb ugy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem automatikusan gyengebb jogilag, de gyakorlati szempontbol nehezebb lehet, mert a dokumentumok es az ellenorzeshez szukseges adatok mar kevesbe teljesek.",
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
            <span className="text-slate-900 dark:text-white">Visszamenoleges igeny</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <History className="h-4 w-4" />
              Eljaras es hataridok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Meddig lehet visszamenoleg igenyelni?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Sokan csak honapokkal vagy evekkel kesobb jonnek ra, hogy talan joguk lett volna karteritesre.
              Ilyenkor az elso kerdes szinte mindig ugyanaz: meg egyaltalan nem keso? A jo hir az, hogy
              egy regi jarat sem automatikusan elveszett ugy, de az ido itt ket iranybol is dolgozik ellened.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <CalendarClock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A lenyeg roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Regi jaratra is lehet meg lehetoseg igenyt beadni, de ez nem azt jelenti, hogy erdemes halogatni.
              Minel tobb ido telik el, annal konnyebben veszik el a dokumentacio, es annal nehezebb lesz tisztan
              bemutatni, mi tortent valojaban.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              A regi jarat sem remenytelen, de az ido nem a te oldaladon all
            </h2>
            <p className="mb-6 text-blue-100">
              Ha megvan a foglalas, a jarat adata es legalabb a fo bizonyitekok egy resze, sok regi ugy is
              vizsgalhato. Viszont minden plusz honap vagy ev novelheti a bizonytalansagot es a potolando hianyokat.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Regi jarat ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Két kulonbozo ora ketyeg egyszerre
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-3">
                  <Clock3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Jogi idokeret</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Az egyik kerdes az, hogy az adott ugyre vonatkozo igenyelesi idokeret meg nyitva van-e.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-3">
                  <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Bizonyithatosag</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  A masik kerdes az, hogy ennyi ido utan mennyi hasznalhato anyag maradt meg az ugy alatamasztasara.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miert nem jo az utolso pillanatra hagyni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert az idohatar nem az egyetlen kockazat. Sokszor a regi jaratoknal a legnagyobb baj az,
                hogy mar nincs meg a boarding pass, eltunt az email, nincs screenshot az ertesitesrol,
                vagy az utas sem emlekszik pontosan, mi volt az eredeti es az alternativ utvonal.
              </p>
              <p>
                Vagyis lehet, hogy papiron meg lenne idod, de gyakorlatban mar sokkal nehezebb a tenyallast
                olyan tisztan bemutatni, mint egy frissebb ugyben.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit erdemes megnezni egy regi jaratnal?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>Megvan-e a foglalasi szam, az e-ticket vagy legalabb a jarat pontos adata.</p>
              <p>Megvan-e barmilyen boarding pass, check-in email vagy app-screen.</p>
              <p>Van-e nyoma a legitarsasag kommunikaciojanak a kesesrol, torlesrol vagy atfoglalasrol.</p>
              <p>Fel tudod-e idezni, hogy volt-e csatlakozas, alternatív utvonal vagy extra koltseg.</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. A regi ugy automatikusan gyengebb?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nem feltetlen jogilag. Lehet, hogy maga az ugy eros, csak eppen kevesebb mar a jol
                hasznalhato anyag. Ez nagy kulonbseg. A problema sokszor nem az, hogy a jarat ne lenne
                jogosult, hanem az, hogy az utas mar alig tudja alatamasztani a tenyallast.
              </p>
              <p>
                Ezert a regi eseteknel gyakran az elso lepes nem a penz kiszamolasa, hanem annak tisztazasa,
                hogy mi mentheto meg a dokumentaciobol.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mire figyelj kulonosen regi jaratnal?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ne abból indulj ki, hogy „majd gyorsan beadom az utolso heten”. Ha barmit potolni kell,
                vagy ki kell deriteni a pontos utvonalat, az maris lefaraghat a maradek mozgasteredbol.
              </p>
              <p>
                A masik hiba az, hogy az utas csak a sajat emlekeire tamaszkodik. Regi eseteknel sokkal
                fontosabb, hogy legalabb a fo bizonyitekok visszakereshetok legyenek.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Miert erdemes most lepni, ha megvan egy regi ugyed?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert minden nappal nagyobb az eselye, hogy tovabbi emailek vesznek el, a szolgaltatoi fiokok
                megszunnek, a screenshotok eltunnek, es egyre tobb reszlet homalyosodik el.
              </p>
              <p>
                A regi ugyeknel sokszor nem az a kerdes, hogy „raerek-e meg?”, hanem az, hogy „mennyi mentheto
                meg a bizonyitekokbol, ha most allok neki?”.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              A regi jarat nem elveszett ugy, de a bizonyitekok gyorsabban avulnak, mint gondolnad
            </h2>
            <p className="mb-6 text-slate-300">
              Ha van egy regebbi kesesed vagy torlesed, a legjobb lepés altalaban nem a tovabbi varakozas,
              hanem egy gyors felmeres: megvannak-e a fo adatok, es erdemes-e most elindulni az igeny iranyaba.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Regi jarat gyors felmerese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Egy tobb eves jaratra is lehet esely?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen, bizonyos esetekben igen. A kerdes az, hogy meg nyitva van-e az ugy idokerete, es maradt-e eleg bizonyitek.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Miert nem jo az utolso pillanatig varni?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Mert nem csak a jogi ido fogy, hanem a bizonyithatosag is romlik.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A regi ugy automatikusan gyengebb?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem automatikusan, de gyakorlatban nehezebb lehet a dokumentacio miatt.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/milyen-dokumentumok-kellenek-a-karteriteshez" className="block hover:underline">
                Milyen dokumentumok kellenek a karteriteshez?
              </Link>
              <Link href="/hu/blog/mennyi-ido-alatt-fizetik-ki-a-karteritest" className="block hover:underline">
                Mennyi ido alatt fizetik ki a karteritest?
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jar karterites keses eseten?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
