import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ReceiptText,
  Ticket,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MiVanHaVouchertFogadtamEl() {
  return (
    <LayoutHu>
      <SEO
        title="Mi van, ha voucher-t fogadtam el? Elveszik a kártérítés joga [2026]"
        description="Magyar útmutató: mi történik, ha voucher-t fogadtál el késés vagy törlés után, és mikor maradhat még meg a pénzbeli kártérítés vagy más utasjog."
        url="https://problemlot.com/hu/blog/mi-van-ha-vouchert-fogadtam-el"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mi van, ha voucher-t fogadtam el? Elveszik a kártérítés joga [2026]",
            description:
              "Magyar nyelvű útmutató arról, mi történik, ha az utas voucher-t fogadott el késés vagy törlés után, és mikor maradhat még meg a pénzbeli igény vagy más utasjog.",
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
              "@id": "https://problemlot.com/hu/blog/mi-van-ha-vouchert-fogadtam-el",
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
                name: "Ha elfogadtam egy voucher-t, akkor biztosan elveszett a kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltétlenül. Az számít, hogy pontosan mit fogadtál el, milyen feltételekkel, és mit írtál vagy írt alá az utas a voucherhez kapcsolódóan.",
                },
              },
              {
                "@type": "Question",
                name: "Ugyanaz a voucher és a pénzbeli kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A voucher lehet utalvány, goodwill ajánlat, refund-helyettesítő vagy más megoldás. Nem minden voucher jelenti automatikusan azt, hogy minden más jogról is lemondtál.",
                },
              },
              {
                "@type": "Question",
                name: "Mit kell megnézni, ha már elfogadtam valamit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legfontosabb a voucherhez kapcsolódó szöveg, a feltételek, az elfogadás módja és az, hogy volt-e egyértelmű lemondás a további igényekről.",
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
            <span className="text-slate-900 dark:text-white">Voucher elfogadasa</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ReceiptText className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mi van, ha voucher-t fogadtam el?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A rövid válasz az, hogy a voucher elfogadása <strong>nem mindig</strong> zárja le automatikusan
              a pénzbeli igényt. Az a fontos, hogy pontosan milyen ajánlatot fogadtál el: egyszerű utalványt,
              refund-helyettesítőt, goodwill kompenzációt vagy olyan megállapodást, amelyben már le is mondtál
              további követelésekről.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Ticket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Nem biztos, hogy elveszett az igény.</strong> A voucher önmagában nem mindig egyenlő azzal,
              hogy az utas minden további jogáról lemondott. A kulcs az, hogy mit tartalmazott a konkrét ajánlat,
              és milyen feltételek mellett történt az elfogadás.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A voucher nem mindig ugyanaz, mint a kártérítés</h2>
            <p className="mb-6 text-blue-100">
              Sok utas azért áll meg félúton, mert azt hiszi, hogy bármilyen utalvány elfogadásával automatikusan
              lezárt minden további lehetőséget. Valójában előbb azt kell megnézni, hogy a voucher mire szólt,
              és kapcsolódott-e hozzá egyértelmű jogi lemondás.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Voucheres ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor maradhat még nyitva az ügy?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a voucher csak egy általános jóvátételi ajánlat volt.</li>
                <li>Ha nem volt egyértelmű lemondás minden további igényről.</li>
                <li>Ha az utas nem kapott világos tájékoztatást a következményekről.</li>
                <li>Ha a voucher inkább refund vagy alternatív megoldás volt, nem végső egyezség.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet problémás az elfogadás?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a szöveg egyértelműen teljes és végleges egyezségre utalt.</li>
                <li>Ha külön nyilatkozatban mondtál le további követelésekről.</li>
                <li>Ha a voucher kifejezetten a kompenzáció helyett került elfogadásra.</li>
                <li>Ha az elfogadási folyamat dokumentáltan és egyértelműen lezárta az ügyet.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a különbség voucher, refund és pénzbeli kártérítés között?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A voucher általában felhasználható utalvány vagy jóváírás. A refund a jegyár visszatérítése.
                A pénzbeli kártérítés pedig egy ettől különálló utasjogi igény lehet, ha a késés vagy törlés
                megfelel az EU261 feltételeinek.
              </p>
              <p>
                Sok félreértés abból születik, hogy ezek a fogalmak a gyakorlatban keverednek. Egy utalvány
                elfogadása nem minden esetben jelenti azt, hogy a másik két kérdés is automatikusan lezárult.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mit kell megnézni, ha már elfogadtál valamit?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nézd meg a voucher emailjét, a feltételeket, a kattintás vagy aláírás előtti szöveget, és azt,
                hogy szerepelt-e benne bármilyen utalás „full and final settlement”, teljes lemondás vagy a
                későbbi igények kizárására.
              </p>
              <p>
                A jó elemzés itt mindig szövegcentrikus: az számít, pontosan milyen ajánlatot fogadtál el,
                nem pusztán az, hogy kaptál valamit a légitársaságtól.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Miért érdemes óvatosnak lenni a gyors elfogadással?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Mert a repülőtéri vagy emailes káoszban az utas gyakran csak a gyors megoldást keresi, és nem
                mindig világos számára, hogy az ajánlat pontosan mit zár le. Egy gyors voucher elfogadás még
                nem feltétlen hiba, de utólag érdemes tisztán megnézni a feltételeket.
              </p>
              <p>
                Ez különösen fontos akkor, ha a járat valójában erős EU261-es ügynek tűnik, és a légitársaság
                egy kisebb, egyszerűbb alternatívát ajánlott.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mikor lehet még érdemes ellenőrizni a jogosultságot?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Erősebb helyzet
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Megvan a voucher email, nincs világos lemondó nyilatkozat, és a járat késése vagy törlése
                  egyébként is komoly EU261-es kérdést vet fel.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Óvatosabb helyzet
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A voucherhez erős lezáró szöveg tartozott, és a teljes ügyet végleges megegyezésként kezelték.
                  Ilyenkor a pontos dokumentumok kulcsfontosságúak.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha elfogadtál valamilyen voucher-t, ne abból indulj ki automatikusan, hogy „már mindennek vége”.
              Előbb érdemes megnézni a konkrét feltételeket és az eredeti járat jogi helyzetét.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Voucheres ügy ellenőrzése most
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ha elfogadtam egy voucher-t, akkor biztosan nem kérhetek már semmit?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem biztos. A pontos feltételek döntik el, hogy az elfogadás valóban lezárta-e minden további
                  igény lehetőségét.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  A voucher ugyanaz, mint a pénzbeli kártérítés?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem. A voucher sokszor más típusú megoldás vagy ajánlat, és nem automatikusan azonos az EU261
                  szerinti pénzbeli kompenzációval.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit őrizzek meg voucher elfogadása után?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A teljes emailt, a feltételeket, minden kapcsolódó screenshotot és azt a szöveget, amely az
                  elfogadás előtt megjelent.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jár kártérítés késés esetén?
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-torolt-jarat-eseten" className="block hover:underline">
                Mikor jár kártérítés törölt járat esetén?
              </Link>
              <Link href="/hu/blog/hogyan-mukodik-a-karterites-folyamata" className="block hover:underline">
                Hogyan működik a kártérítés folyamata?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
