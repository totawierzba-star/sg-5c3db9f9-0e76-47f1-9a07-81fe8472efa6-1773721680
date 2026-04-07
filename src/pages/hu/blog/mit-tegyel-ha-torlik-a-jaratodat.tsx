import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Plane,
  RefreshCcw,
  Ticket,
  Wallet,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MitTegyelHaTorlikAJaratodat() {
  return (
    <LayoutHu>
      <SEO
        title="Mit tegyel, ha torlik a jaratodat? Azonnali lepesek refundhoz, atfoglalashoz es karteriteshez [2026]"
        description="Magyar utmutato torolt jarat eseten: mit kerj azonnal a legitarsasagtol, hogyan valassz refund vagy atfoglalas kozott, es mit dokumentalj a kesobbi igenyhez."
        url="https://problemlot.com/hu/blog/mit-tegyel-ha-torlik-a-jaratodat"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mit tegyel, ha torlik a jaratodat? Azonnali lepesek refundhoz, atfoglalashoz es karteriteshez [2026]",
            description:
              "Gyakorlati magyar nyelvu utmutato torolt jaratokhoz: azonnali repuloteri es online teendok, refund vagy atfoglalas valasztasa, dokumentalas es a kesobbi igeny megalapozasa.",
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
              "@id": "https://problemlot.com/hu/blog/mit-tegyel-ha-torlik-a-jaratodat",
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
                name: "Mi az elso kerdes, amit torlesnel fel kell tenni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az egyik legfontosabb kerdes az, hogy milyen alternativ utvonalat tud felajanlani a legitarsasag, es az utas akar-e inkabb refundot vagy mielobbi atfoglalast.",
                },
              },
              {
                "@type": "Question",
                name: "Azonnal el kell fogadnom, amit a legitarsasag felajanl?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltetlen. Erdemes eloszor megerteni, hogy refundrol, ujrafoglalasrol vagy mas kompromisszumos ajanlatrol van-e szo, mert ezek kesobb a jogi helyzetet is befolyasolhatjak.",
                },
              },
              {
                "@type": "Question",
                name: "Torlesnel is fontos a dokumentalas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Az ertesites ideje, az eredeti jarat adatai, az alternativ ajanlat es az utas valasztasa kesobb kulcsfontossagu lehet.",
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
            <span className="text-slate-900 dark:text-white">Torolt jarat azonnali teendok</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <RefreshCcw className="h-4 w-4" />
              Gyakorlati teendok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mit tegyel, ha torlik a jaratodat?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Torolt jaratnal a legnagyobb hiba az, amikor az utas panikbol azonnal elfogad valamit,
              amit valojaban nem ert. Ilyenkor nem csak a penzbeli karterites lehet a kerdes, hanem az is,
              hogy refundot, ujrafoglalast vagy egy masik, kedvezotlenebb megoldast kapsz-e.
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
                A legfontosabb alapelv
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Torlesnel az elso cel nem az, hogy azonnal „harcolj”, hanem az, hogy jol valassz a
              lehetosegek kozul. Eloszor tisztazni kell, hogy a legitarsasag pontosan mit ajanl:
              refundot, ujrafoglalast, masnapi indulast vagy valamilyen voucher-megoldast.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Torolt jaratnal mar most elindithatod a jogosultsag ellenorzeset
            </h2>
            <p className="mb-6 text-blue-100">
              A torlesnel kulonosen sok mulik azon, hogy pontosan mikor kaptad az ertesitest, milyen
              alternativat ajanlottak fel, es mit fogadtal el. Minel korabban tisztazod ezt, annal jobb.
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
              1. Eloszor tudd meg, milyen opciokat kaptal
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-3">
                  <Ticket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Alternativ jarat</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Van-e meg aznap vagy hamarosan masik utvonal? Kozvetlen vagy rosszabb csatlakozasos? Ugyanabba
                  a vegso celallomasba visz, vagy csak egy kozelibe?
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-3">
                  <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Refund</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Ha az utazas mar elvesztette az ertelmet, a visszaterites lehet jo irany. De ezt ne automatikus
                  reflexbol valaszd, hanem mert tenyleg ez a jobb opcio a sajat helyzetedre.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Dokumentald az ertesites idopontjat
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Email, app, SMS, screenshot</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Torlesnel kulonosen fontos, mikor es hogyan tajekoztattak. Mentsd el az emailt, app-ertesitest,
                SMS-t vagy barmilyen screenshotot, ami mutatja az eredeti jaratot es az uj ajanlatot.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Ne fogadj el semmit vakon
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Torlesnel a legnagyobb nyomas altalaban az, hogy valamit gyorsan valasztani kell. Ez ertheto,
                de nem jo, ha az utas ugy kattint egy voucherre vagy egy gyenge alternativ utvonalra, hogy
                kozben nem latja a sajat helyzete teljes kepet.
              </p>
              <p>
                Eloszor azt tisztazd: tenyleg el akarsz utazni, csak mashogy? Vagy mar fontosabb a penz
                visszaszerzese es az, hogy ne vesztegess tovabbi idot?
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Jegyezd fel, mit ajanlott fel a legitarsasag
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Uj indulasi ido, uj erkezesi ido, csatlakozasok, masik repuloter vagy masik nap: ezek
                kulcsszerepet kaphatnak kesobb. Nem eleg azt irni, hogy „masik jaratot ajanlottak”.
              </p>
              <p>
                Minel pontosabban latszik az alternativ utvonal, annal konnyebb lesz kesobb megerteni,
                hogy valojaban mennyire borult fel az eredeti utazasi terv.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Ha extra koltseg merul fel, gyujts minden bizonylatot
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                Hotel, taxi, etel, ital vagy uj helyi kozlekedes: ha torles miatt tenylegesen koltseged
                keletkezik, a blokk itt is kulcsfontossagu. Nem minden kiadas lesz automatikusan teritheto,
                de blokk nelkul mar a jogos koltseg is nehezen bizonyithato.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mit ne csinalj torlesnel?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ne hagyd elveszni az eredeti jarat adatait, ne csak szobeli igeretekre tamaszkodj,
                es ne feltetelezd, hogy amit automatikusan felajanl a rendszer, az biztosan a legjobb opcio.
              </p>
              <p>
                Akkor sem jo reflex rogton veglegesiteni valamit, ha kozben nem erted, hogy ez refund,
                atfoglalas, voucher vagy valamilyen kompromisszumos megoldas.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mikor erdemes mar azonnal ellenorzest inditani?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Szinte azonnal. Torlesnel mar a kezdeti helyzet is kulcsfontossagu: mikor kaptad az ertesitest,
                milyen alternativat ajanlottak, es te mit fogadtal el vagy mit utasitottal vissza.
              </p>
              <p>
                Ha ezt mar az elejen tisztazod, sokkal kisebb az eselye, hogy kesobb fontos reszletek vagy
                bizonyitekok vesznek el.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Torlesnel a jo dontes sokszor fontosabb, mint a gyors kattintas
            </h2>
            <p className="mb-6 text-slate-300">
              A legjobb eredmeny altalaban annak jut, aki eloszor tisztan atlatja a lehetosegeit:
              refund vagy uj ut, ma vagy holnap, direkt vagy csatlakozassal, es ezek hogyan hatnak a kesobbi igenyre.
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
                  Mi az elso kerdes torlesnel?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Azt kell tisztazni, hogy milyen alternativ utvonal vagy refund-opcio all rendelkezesre.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Azonnal el kell fogadnom, amit a rendszer felajanl?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem feltetlen. Eloszor ertsd meg, pontosan mit jelent az adott opcio.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Torlesnel is fontos a screenshot es a dokumentalas?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen, kulonosen az ertesites ideje, az eredeti jarat es az uj ajanlat miatt.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/mikor-jar-karterites-torolt-jarat-eseten" className="block hover:underline">
                Mikor jar karterites torolt jarat eseten?
              </Link>
              <Link href="/hu/blog/keses-vs-torles-vs-tulfoglalas-kulonbsegek" className="block hover:underline">
                Keses vs torles vs tulfoglalas: mi a kulonbseg?
              </Link>
              <Link href="/hu/torolt-jarat" className="block hover:underline">
                Torolt jarat: alapjogok es ellenorzes
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
