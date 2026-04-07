import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Euro,
  Plane,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorJarKarteritesKesesEseten() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor jar karterites keses eseten? 3 oras szabaly, osszegek es kivetelek [2026]"
        description="Magyar utmutato a kesett jaratok karteritesi szabalyaihoz: mikor szamit a 3 oras erkezes, mennyi lehet a 250/400/600 EUR, es mikor nem jar penzbeli karterites."
        url="https://problemlot.com/hu/blog/mikor-jar-karterites-keses-eseten"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mikor jar karterites keses eseten? 3 oras szabaly, osszegek es kivetelek [2026]",
            description:
              "Magyar nyelvu utmutato a kesett jaratok utani karteritesrol: 3 oras erkezesi szabaly, 250/400/600 EUR savok, rendkivuli korulmenyek es a legfontosabb gyakorlati kivetelek.",
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
              "@id": "https://problemlot.com/hu/blog/mikor-jar-karterites-keses-eseten",
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
                name: "Eleg a 2 oras keses a karteriteshez?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltetlen. A 2 oras keses mar gondoskodasi jogokat is elindithat, de a penzbeli karteritesnel a fo kuszob altalaban a vegso celallomasra valo legalabb 3 oras keses.",
                },
              },
              {
                "@type": "Question",
                name: "Mindig a felszallas kesese szamit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A penzbeli karteritesnel sokszor a vegso erkezesi keses a meghatarozo, nem pusztan az, hogy a gep mennyit kesett az indulaskor.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor nem jar penzbeli karterites kesesnel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha a jarat egyaltalan nem esik az EU261 hatalya ala, vagy ha a legifuvarozo rendkivuli korulmenyt tud igazolni, a penzbeli igeny megbukhat, noha mas utasjogok megmaradhatnak.",
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
            <span className="text-slate-900 dark:text-white">Keses es karterites</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Clock3 className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor jar karterites keses eseten?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A legtobb utas annyit hallott, hogy „3 oras kesesnel jarhat penz”, de a gyakorlatban
              a kerdes mindig bonyolultabb. Nem minden keses EU261-es ugy, es nem minden kesett jarat
              vezet automatikusan 250, 400 vagy 600 eurohoz.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Euro className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A legfontosabb szabaly roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Penzbeli karterites kesesnel altalaban akkor jon szoba, ha a jarat az EU261 hatalya ala
              esik, es az utas legalabb 3 oras kesessel erkezik meg a vegso celallomasra, mikozben a
              kesest nem rendkivuli korulmeny okozta.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor eros a penzbeli igeny?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>A jarat az EU-bol indult, vagy EU-s legifuvarozo hozta be az utast az EU-ba.</li>
                <li>A vegso celallomasra legalabb 3 oras kesessel erkezett meg.</li>
                <li>A keses oka nem minosul igazolt rendkivuli korulmenynek.</li>
                <li>Az utasnak ervenyes foglalasa volt, es rendben megjelent check-inre, illetve beszallasra.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor gyengebb vagy nincs ilyen igeny?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>A jarat nem tartozik az EU261 ala.</li>
                <li>Az erkezes vegul nem lepett at kb. 3 oras kesest.</li>
                <li>A legifuvarozo rendkivuli korulmenyt tud bizonyitani.</li>
                <li>A problema valojaban utasoldali: dokumentum, kesoi kapuhoz erkezes vagy onallo atszallas hibaja.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Kesesnel is erdemes azonnal ellenorizni a jaratot
            </h2>
            <p className="mb-6 text-blue-100">
              A legtobb hibas dontes ott szuletik, hogy az utas csak az indulasi tablat nezi,
              pedig a penzbeli igenyhez sokszor a vegso erkezes, a foglalas szerkezete es a
              keses oka egyutt szamit.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Kesett jarat ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Nem minden keses jelent ugyanazt
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az EU261-ben kulon kell valasztani a gondoskodasi jogokat es a penzbeli karteritest.
                Mar viszonylag korabban is jarhat ellatas, frissito, kommunikacios segitseg vagy
                bizonyos esetben hotel, de a penzbeli karteritesnel a klasszikus kuszob a vegso
                celallomasi 3 oras keses.
              </p>
              <p>
                Ez azt jelenti, hogy nem eleg pusztan azt nezni, mennyit csuszik a felszallas.
                Lehet, hogy a gep egy ora kesessel indul, de a levegoben behoz valamit, vagy az is
                lehet, hogy csak 90 perc volt az indulasi csuszas, megis sokkal nagyobb lesz a vegso
                erkezesi keses egy csatlakozas elvesztese miatt.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              A 3 oras szabaly: mit jelent pontosan?
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  A vegso erkezesi keses a kulcs
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ha a jarat egy egyenes ut volt, a kerdes egyszerubb: mennyivel kesobb ert oda a
                  celallomasra. Ha csatlakozasos utrol van szo, akkor a vegso celallomasi keses
                  szamit, kulonosen egy foglalason levo utvonalnal.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Nem minden 3 oras keses lesz automatikus penz
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A 3 oras szabaly csak az egyik feltetel. Ha a jarat nem EU261-es, vagy a kesest
                  olyan rendkivuli korulmeny okozta, amelyet a legifuvarozo megfeleloen igazolni tud,
                  a penzbeli igeny elbukhat.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mekkora osszeg johet szoba?
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-gray-900">
                <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">250 EUR</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Tipikusan rovidebb, 1500 km-ig terjedo jaratoknal.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-gray-900">
                <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">400 EUR</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Hosszabb unios utvonalaknal es sok 1500-3500 km kozotti jaratnal.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-gray-900">
                <div className="mb-2 text-3xl font-bold text-blue-600 dark:text-blue-400">600 EUR</div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Tipikusan a leghosszabb, 3500 km feletti utvonalaknal.
                </p>
              </div>
            </div>
            <p className="mt-5 text-slate-700 dark:text-slate-200">
              Az osszeg nem „alku kerdese”, hanem a jogi savokbol indul ki. A konkret ugyben azonban
              a tavolsag mellett az utvonal es a vegso celallomas is lenyeges lehet.
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor NEM jar penzbeli karterites?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Eloszor is akkor nem, ha a jarat jogilag nem esik az EU261 hatalya ala. Ez a kerdes
                mindig megelőzi a 3 oras szabaly elemzeset.
              </p>
              <p>
                Masodszor akkor sem feltetlen jar penz, ha a keses oka olyan rendkivuli korulmeny,
                amelyet a legifuvarozo hitelesen igazol. Ettol fuggetlenul a gondoskodasi kotelezettseg
                sok esetben megmarad.
              </p>
              <p>
                Harmadszor az utasoldali hibak, peldaul dokumentumprobléma vagy lekesett boarding time,
                teljesen mas jogi helyzetet jelentenek, mint a legifuvarozo altal okozott keses.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a helyzet 2 oras vagy 5 oras kesesnel?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A 2 oras keses mar onmagaban is fontos lehet, mert a legifuvarozo bizonyos tavolsagok
                es helyzetek mellett mar ekkor sem hagyhatja teljesen magara az utast. Ez azonban
                meg nem ugyanaz, mint a penzbeli karterites.
              </p>
              <p>
                Az 5 oras vagy annal hosszabb keses mar egy masik komoly kulon kategoria:
                ilyenkor a jegy-visszaterites lehetosege is sokkal erosebben felmerulhet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Ha csak egy dolgot jegyez meg, ez legyen az
            </h2>
            <p className="mb-6 text-slate-300">
              A penzbeli karteritesnel nem eleg a „sokat kesett a gep” erzes. A jogi kerethez az kell,
              hogy a jarat EU261-es legyen, a vegso erkezesi keses atlepje a 3 orat, es a legifuvarozo
              ne tudjon sikeresen rendkivuli korulmenyre hivatkozni.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Keseses ugy gyors ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Eleg a 2 oras keses a penzbeli karteriteshez?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Altalaban nem. A 2 oras keses mas utasjogokat mar felhozhat, de a penzbeli karteritesnel
                  a fo kuszob jellemzoen a legalabb 3 oras vegso erkezesi keses.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mindig a vegso erkezes szamit?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Sok esetben igen, kulonosen csatlakozasos utvonalnal. Ezert lehet, hogy ugyanaz az
                  indulasi keses egyik utasnak kevesebb, masiknak sokkal erosebb ugyet jelent.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Low-cost jaratoknal is jarhat ugyanugy?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen. A jegy olcsosaga vagy a low-cost modell onmagaban semmit nem valtoztat az EU261
                  alkalmazhatosagan.
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
              <Link href="/hu/kesett-jarat" className="block hover:underline">
                Kesett jarat: alapjogok, teendok es igenyellenorzes
              </Link>
              <Link href="/hu/karteritesi-kalkulator" className="block hover:underline">
                Karteritesi kalkulator: mennyi johet szoba?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
