import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Plane,
  RefreshCcw,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorJarKarteritesToroltJaratEseten() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor jar karterites torolt jarat eseten? 14 napos szabaly, refund vagy atfoglalas [2026]"
        description="Magyar utmutato a torolt jaratok jogaihoz: mikor jar penzbeli karterites, hogyan mukodik a 14 napos szabaly, es mikor valaszthat az utas visszaterites vagy atfoglalas kozott."
        url="https://problemlot.com/hu/blog/mikor-jar-karterites-torolt-jarat-eseten"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mikor jar karterites torolt jarat eseten? 14 napos szabaly, refund vagy atfoglalas [2026]",
            description:
              "Magyar nyelvu attekintes torolt jaratokhoz: 14 napos szabaly, penzbeli karterites, refund, atfoglalas, rendkivuli korulmenyek es a legfontosabb gyakorlati kulonbsegek.",
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
                "https://problemlot.com/hu/blog/mikor-jar-karterites-torolt-jarat-eseten",
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
                name: "Ha a legifuvarozo 14 nappal korabban szol, akkor mar soha nem jar penz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A penzbeli karterites leggyakrabban valoban kiesik, ha az utast eleg koran tajekoztatjak. Ettol fuggetlenul a visszaterites vagy az atfoglalas joga ilyenkor is relevans lehet.",
                },
              },
              {
                "@type": "Question",
                name: "A torles utan a legifuvarozo valaszthat helyettem refundot vagy atfoglalast?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem idealis, ha ezt egyoldaluan teszi. Elvileg az utasnak kell lehetoseget kapnia a fo opciok kozotti valasztasra.",
                },
              },
              {
                "@type": "Question",
                name: "A torlesnel is csak akkor jar penz, ha az EU261 ervenyes a jaratra?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Eloszor mindig azt kell tisztazni, hogy az adott jarat egyaltalan EU261-es ugy-e, es csak ezutan jon a 14 napos szabaly vagy a rendkivuli korulmenyek elemzese.",
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
            <span className="text-slate-900 dark:text-white">Torolt jarat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <CalendarClock className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor jar karterites torolt jarat eseten?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A torolt jarat sok utas fejeben egyenlo az azonnali 250, 400 vagy 600 euroval. Valojaban
              a kerdes itt is tobb lepesbol all: belefer-e a jarat az EU261-be, mikor tajekoztattak az
              utast, milyen alternativat ajanlott a legifuvarozo, es volt-e rendkivuli korulmeny.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A lenyeg roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Torolt jarat eseten penzbeli karterites akkor johet szoba, ha a jarat EU261-es ugy,
              az utast nem eleg koran tajekoztattak, a felajanlott alternativa nem neutralizalja a
              keses hatasat, es nincs igazolt rendkivuli korulmeny.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor eros a karteritesi helyzet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>A jarat az EU261 hatalya ala tartozik.</li>
                <li>Az utast 14 napon belul tajekoztattak, vagy tul keson es tul rossz alternativaval.</li>
                <li>A legifuvarozo nem tud rendkivuli korulmenyt bizonyitani.</li>
                <li>A torles tenylegesen felboritotta a vegso erkezest vagy az utazas tervet.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor gyengebb a penzbeli igeny?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>A jarat eleve nem EU261-es ugy.</li>
                <li>Az utas 14 napnal korabban megfelelo tajekoztatast kapott.</li>
                <li>A felajanlott alternativa belefer a jogi kuszobokba.</li>
                <li>A legifuvarozo sikeresen igazol rendkivuli korulmenyt.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Torolt jaratnal a legfontosabb kerdes: refund vagy atfoglalas?
            </h2>
            <p className="mb-6 text-blue-100">
              Sok utas reflexbol elfogadja, amit a legifuvarozo automatikusan felajanl. Pedig a
              sajat helyzete szerint kell eldonteni, hogy a gyors uj utvonal, a kesobbi indulasi
              lehetoseg vagy a teljes visszaterites az okosabb.
            </p>
            <a
              href="https://claimwinger.com/hu/torolt-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Torolt jarat ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mit jelent pontosan a „torles”?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A jogi „cancelled flight” nem csak azt jelenti, hogy az adott jarat egyszeruen eltunik
                a rendszerbol. Bizonyos nagyobb menetrendvaltozasok, egy masik jaratra valo atereles,
                vagy az az eset, amikor a gep felszall, de visszafordul, szinten belecsuszhatnak a
                torleshez kozeli kategoriaba.
              </p>
              <p>
                Ezert kulonosen fontos, hogy ne csak azt nezze, mit ir az app vagy az email targya,
                hanem azt is, mi tortent tenylegesen az eredeti utazasi tervvel.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              A 14 napos szabaly: miert ennyire fontos?
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  14 napnal korabbi ertesites
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ilyenkor a penzbeli karterites gyakran kiesik. Ez viszont nem jelenti azt, hogy az
                  utasnak nincs joga refundra vagy megfelelo alternativ utvonalra.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  14 napon beluli ertesites
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt mar sokkal erosebb lehet a penzbeli igeny, de meg mindig meg kell nezni, hogy
                  pontosan mikor tajekoztattak, es milyen alternativat ajanlottak.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Nem csak az email idopontja szamit
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A konkret korulmenyeket is latni kell: milyen volt az eredeti jarat, mennyit csuszott
                  a felajanlott uj utvonal, es tenylegesen mennyire borult fel a vegso erkezes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Refund vagy atfoglalas: mi az utas valodi valasztasa?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-gray-900">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
                  <RefreshCcw className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Refund
                </h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Akkor lehet jo dontes, ha az utazas mar elvesztette az ertelmet, vagy a felajanlott
                  alternativa irrealisan keso, rossz vagy hasznalhatatlan.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-gray-900">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
                  <Plane className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Atfoglalas
                </h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Akkor lehet jobb, ha a cel tovabbra is fontos, es az utasnak az a leglenyegesebb,
                  hogy a lehető legkorabban eljusson a vegso celallomasra.
                </p>
              </div>
            </div>
            <p className="mt-5 text-slate-700 dark:text-slate-200">
              A fo jogi logika az, hogy a legifuvarozo nem jo esetben nem egyoldaluan dont helyette,
              hanem valasztasi lehetoseget ad. A gyakorlatban ez nem mindig tortenik meg eleg tisztan.
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor NEM jar penzbeli karterites torlesnel?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Eloszor is akkor nem, ha a jarat egyaltalan nem esik az EU261 ala. Ez a legelso szuro
                torlesnel is.
              </p>
              <p>
                Masodszor akkor lehet gyengebb vagy nulla a penzbeli igeny, ha az utast eleg koran
                tajekoztattak, es az alternativa jogilag megfelelo keretek kozott maradt.
              </p>
              <p>
                Harmadszor a rendkivuli korulmenyek itt is kulcsszerepet jatszhatnak, bar ettol a
                refundhoz, atfoglalashoz vagy ellatashoz kapcsolodo mas jogok meg fennmaradhatnak.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mekkora osszeg johet szoba torles eseten?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A klasszikus savok itt is 250, 400 vagy 600 euro lehetnek, elsosorban a jarat
                tavolsagatol es szerkezetetol fuggoen. Ugyanakkor torlesnel kulonosen fontos, hogy
                a felajanlott alternativ jarat mennyire hozza kozel az eredeti erkezest.
              </p>
              <p>
                Bizonyos helyzetekben, ha az utas vegul egy alternativ jarattal viszonylag kisebb
                kesessel erkezik meg, a penzbeli osszeg csokkenhet. Emiatt torlesnel mindig egyutt
                kell nezni a savot, az uj utvonalat es a vegso erkezest.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Torolt jaratnal a gyors reakcio kulonosen sokat szamit
            </h2>
            <p className="mb-6 text-slate-300">
              Ilyenkor nem csak a penzrol van szo. A legrosszabb forgatokonyv altalaban az, amikor az
              utas automatikusan elfogad valamit, ami se nem jo atfoglalas, se nem tudatos refunddontes.
            </p>
            <a
              href="https://claimwinger.com/hu/torolt-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Torolt jarat magyar ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Ha 14 nappal korabban szoltak, akkor mar semmi nem jar?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A penzbeli karterites gyakran nem, de a megfelelo alternativ utvonal vagy a jegy
                  visszateritese ilyenkor is fontos jog maradhat.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A legifuvarozo eldontheti helyettem, hogy refundot kapok?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem ez lenne az idealis jogi logika. Az utasnak erdemi valasztast kell kapnia a fo
                  opciok kozott.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Torlesnel is szamit, hogy EU261-es-e maga a jarat?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen, ez az elso lepes. Ha a jarat nem esik a rendelet hatalya ala, a torles tenye
                  onmagaban nem eleg az EU261-es penzbeli igenyhez.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/mi-az-eu261-rendelet-es-mikor-alkalmazhato" className="block hover:underline">
                Mi az EU261 rendelet es mikor alkalmazhato?
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jar karterites keses eseten?
              </Link>
              <Link href="/hu/torolt-jarat" className="block hover:underline">
                Torolt jarat: alapjogok, refund es atfoglalas
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
