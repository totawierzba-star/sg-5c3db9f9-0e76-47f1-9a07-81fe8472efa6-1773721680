import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileWarning,
  Gavel,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MitTegyekHaElutasitjakAzIgenyt() {
  return (
    <LayoutHu>
      <SEO
        title="Mit tegyek, ha elutasítják az igényt? Nem minden légitársasági odmowa végleges [2026]"
        description="Magyar útmutató: mit tegyél, ha a légitársaság elutasítja a kártérítési igényt, mikor lehet jogos a vita, és mikor érdemes továbblépni."
        url="https://problemlot.com/hu/blog/mit-tegyek-ha-elutasitjak-az-igenyt"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mit tegyek, ha elutasítják az igényt? Nem minden légitársasági odmowa végleges [2026]",
            description:
              "Magyar nyelvű útmutató arról, mit tegyél, ha a légitársaság elutasítja a kártérítési igényt, és hogyan különítsd el a gyenge, sablonos elutasítást a valóban erős ellenérvektől.",
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
              "@id": "https://problemlot.com/hu/blog/mit-tegyek-ha-elutasitjak-az-igenyt",
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
                name: "Mit tegyek, ha a légitársaság elutasította az igényemet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Először azt kell megnézni, hogy az elutasítás konkrét és bizonyított indokokon alapul-e, vagy csak általános sablon. Nem minden elutasítás jelenti azt, hogy az ügy valóban gyenge.",
                },
              },
              {
                "@type": "Question",
                name: "Ha a légitársaság rendkívüli körülményekre hivatkozik, vége az ügynek?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltétlenül. A rendkívüli körülményre való hivatkozás önmagában nem mindig elég. Az számít, hogy az indok mennyire konkrét, hiteles és a teljes késési láncra vonatkozóan meggyőző.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor érdemes továbblépni az első elutasítás után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor, ha az elutasítás sablonos, hiányos, ellentmondásos, vagy ha a tényállás alapján továbbra is erősnek tűnik az ügy. Ilyenkor az első 'nem' gyakran nem az utolsó szó.",
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
            <span className="text-slate-900 dark:text-white">Igény elutasítása</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FileWarning className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mit tegyek, ha elutasítják az igényt?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az első elutasítás sok utasnál azt az érzést kelti, hogy az ügynek vége. Pedig a valóságban nem
              minden légitársasági „nem” egyenlő egy erős, bizonyított és végleges jogi állásponttal. Sokszor
              inkább csak az első védelmi falról van szó.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Gavel className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Először azt nézd meg, hogy az elutasítás konkrét, részletes és bizonyított indokokra épül-e,
              vagy csak egy általános sablonra. Ha az indoklás gyenge, hiányos vagy ellentmondásos, az ügy
              gyakran még egyáltalán nincs lezárva.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Az első „nem” nem mindig az utolsó válasz</h2>
            <p className="mb-6 text-blue-100">
              Sok légitársaság első körben sablonosan hivatkozik technikai okra, rendkívüli körülményre vagy
              általános policy-re. Ettől még nem biztos, hogy az ügy tényleg gyenge. A kérdés mindig az, hogy
              az elutasítás mögött mennyi valós, ellenőrizhető tartalom van.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Elutasított ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet még mindig erős az ügy?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha az elutasítás sablonos és kevéssé konkrét.</li>
                <li>Ha a légitársaság nem magyarázza el a teljes késési láncot.</li>
                <li>Ha a tényállás alapján az EU261 továbbra is jól alkalmazhatónak tűnik.</li>
                <li>Ha a dokumentáció erős, de az indoklás gyenge.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet tényleg nehezebb a helyzet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha részletes, következetes és bizonyítható az elutasítás oka.</li>
                <li>Ha a járat eleve nem EU261-es ügy.</li>
                <li>Ha az utas dokumentációja gyenge vagy hiányos.</li>
                <li>Ha a probléma inkább utasoldali vagy külön jegyes self-transfer ügy.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Először az indoklást olvasd, ne csak a végeredményt
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sok utas ott áll meg, hogy „elutasították”, és ezzel lezártnak tekinti az ügyet. Pedig a döntő
                kérdés nem az, hogy kaptál-e nemet, hanem az, hogy <strong>miért</strong> kaptál nemet.
              </p>
              <p>
                Egy általános mondat arról, hogy „operational reasons” vagy „extraordinary circumstances”
                gyakran még nem valódi, részletes és meggyőző válasz.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Rendkívüli körülményre hivatkoznak? Ez még nem a vita vége
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A „rendkívüli körülmény” az egyik leggyakoribb elutasítási formula. De önmagában attól, hogy a
                légitársaság leírja ezt a kifejezést, még nem biztos, hogy valóban el is vitte a teljes bizonyítási
                terhet.
              </p>
              <p>
                A jó kérdés itt az: pontosan mi történt, ez mennyire volt kívül a légitársaság kontrollján, és
                az adott ok tényleg megmagyarázza-e a teljes késést vagy törlést.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Milyen jelek utalnak sablonos elutasításra?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha az indoklás rövid, általános és teljesen egyforma más ügyekben használt szövegekre hasonlít,
                az sokszor arra utal, hogy az ügyet nem bontották ki valódi részletességgel.
              </p>
              <p>
                Ilyen jel lehet az is, ha nincs benne konkrét dátum, konkrét esemény, konkrét műszaki vagy
                operatív magyarázat, csak egy tág kategória.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              4. Mikor érdemes továbblépni?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, ha az elutasítás gyenge, sablonos, vagy ha a saját dokumentumaid és a tényállás alapján
                továbbra is erősnek tűnik a claim. Ilyenkor az első döntést nem szabad automatikusan végleges
                igazságnak tekinteni.
              </p>
              <p>
                Minél világosabban látod a gyenge pontokat az airline válaszában, annál könnyebb eldönteni, hogy
                utánérdeklésre, új érvelésre vagy komolyabb eszkalációra van szükség.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Mit ne tegyél elutasítás után?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Ne add fel azonnal</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Az első elutasítás sokszor csak az első kapu.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Ne csak érzelmileg reagálj</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Előbb az indoklás szerkezetét kell szétszedni.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Ne keverd össze a claimtípusokat</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Refund, voucher és kompenzáció nem ugyanaz.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha elutasították az igényedet, ne csak a „nem” szóra nézz. A valódi kérdés az, hogy mennyire erős,
              részletes és bizonyítható az indoklás. Ebből derül ki, hogy tényleg gyenge az ügy, vagy csak még
              nem lett jól végigvive.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Elutasított claim ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit tegyek, ha elutasították az igényt?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Először nézd meg az indoklás minőségét, ne csak a végeredményt.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  A rendkívüli körülményre hivatkozás automatikusan lezárja az ügyet?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem feltétlenül, mert az indoklás részletessége és hitelessége is számít.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mikor érdemes továbbvinni az ügyet?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Akkor, ha az elutasítás sablonos, gyenge vagy ellentmondásosnak tűnik.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/mit-tegyek-ha-nem-valaszolnak" className="block hover:underline">
                Mit tegyek, ha a légitársaság nem válaszol?
              </Link>
              <Link href="/hu/blog/mikor-nem-jar-karterites-alapok" className="block hover:underline">
                Mikor NEM jár kártérítés?
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
