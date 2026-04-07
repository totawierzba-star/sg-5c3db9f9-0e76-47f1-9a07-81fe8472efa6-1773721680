import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  History,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function KerhetekKarteritestRegiJaratra() {
  return (
    <LayoutHu>
      <SEO
        title="Kérhetek kártérítést régi járatra? Mikor nem késő még [2026]"
        description="Magyar útmutató régi járatokhoz: mikor lehet még kártérítést kérni, milyen bizonyítékok kellenek, és mikor válik túl gyengévé vagy túl késővé az ügy."
        url="https://problemlot.com/hu/blog/kerhetek-karteritest-regi-jaratra"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kérhetek kártérítést régi járatra? Mikor nem késő még [2026]",
            description:
              "Magyar nyelvű útmutató arról, lehet-e kártérítést kérni régi járatra, mitől függ az időbeli esély, és mikor válik túl gyengévé a dokumentáció.",
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
              "@id": "https://problemlot.com/hu/blog/kerhetek-karteritest-regi-jaratra",
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
                name: "Lehet még pénzt kérni egy régi járat miatt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. Egy régi járat nem automatikusan elveszett ügy. Az számít, hogy még belefér-e az adott ügy időbeli keretébe, és hogy maradt-e elegendő bizonyíték.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a legnagyobb gond a régi ügyeknél?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem csak az idő, hanem a dokumentáció gyengülése. Minél régebbi az ügy, annál nagyobb az esélye, hogy az utas már elvesztette a foglalási vagy utazási bizonyítékokat.",
                },
              },
              {
                "@type": "Question",
                name: "Érdemes még megnézni, ha csak néhány dokumentum maradt meg?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A PNR, e-ticket, régi email, screenshot vagy akár banki nyomok is elégséges kiindulópontot adhatnak ahhoz, hogy legalább előzetesen értékelhető legyen az ügy.",
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
            <span className="text-slate-900 dark:text-white">Regi jarat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <History className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Kérhetek kártérítést régi járatra?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Igen, sok esetben igen. Egy régi járat nem automatikusan „lejárt ügy”. A valódi kérdés az,
              hogy még belefér-e az időbeli keretbe, és hogy maradt-e elég dokumentum ahhoz, hogy a késést,
              törlést vagy más járatproblémát hitelesen bizonyítani lehessen.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Igen, lehet.</strong> A régi járat önmagában nem zárja ki a kártérítési lehetőséget. A
              két legfontosabb kérdés az, hogy időben még nyitott-e az ügy, és hogy van-e elég bizonyíték
              a foglalásra, az útvonalra és a problémás eseményre.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A régi ügy nem ugyanaz, mint a reménytelen ügy</h2>
            <p className="mb-6 text-blue-100">
              Sokan azért nem lépnek, mert azt hiszik, hogy ha a járat nem friss, akkor már biztosan semmit
              sem lehet tenni. Ez sokszor tévedés. A valódi kérdés inkább az, hogy mennyi dokumentum maradt meg,
              és mennyire tisztán rekonstruálható az eset.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Régi ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet még erős az ügy?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha megvannak a foglalási vagy jegyadatok.</li>
                <li>Ha van email, PNR, e-ticket vagy más visszakereshető nyom.</li>
                <li>Ha a járatprobléma típusa még tisztán meghatározható.</li>
                <li>Ha az ügy időben még nem vált teljesen zárttá.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor gyengül jelentősen?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha semmilyen dokumentum nem maradt meg.</li>
                <li>Ha az útvonal, dátum vagy légitársaság már nem azonosítható pontosan.</li>
                <li>Ha a jogi időkeret és a bizonyítás is egyszerre gyenge.</li>
                <li>Ha csak nagyon általános emlék maradt, de nincs hivatalos nyom.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miért a dokumentáció a régi ügyek valódi szűk keresztmetszete?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert egy régi ügyben nem csak az számít, hogy eltelt-e egy bizonyos idő, hanem az is, hogy
                mit tudsz még ma bizonyítani. Sok utas itt bukik el: nem azért, mert biztosan nincs már joga,
                hanem mert már alig maradt valami kézzelfogható az eredeti utazásból.
              </p>
              <p>
                Ezért régi ügyeknél a legelső feladat nem a hosszú jogi vita, hanem a bizonyítékok mentése és
                rendszerezése.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mit érdemes előkeresni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Első körben a foglalási emailt, a jegyszámot, a PNR-t, a légitársaság értesítéseit és minden
                régi screenshotot vagy naptárbejegyzést. Még a bankkártyás terhelés vagy egy régi utasbiztosítási
                email is segíthet visszaépíteni az ügyet.
              </p>
              <p>
                Nem kell tökéletes dossziéval indulni. Sokszor már néhány stabil adat is elég ahhoz, hogy
                előzetesen meg lehessen ítélni, van-e értelme továbbmenni.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor lehet már túl késő vagy túl gyenge?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, ha sem az időbeli keret, sem a dokumentáció nem áll már az ügy mellett. Ha az utas nem
                tudja pontosan azonosítani a járatot, a dátumot, a foglalást, és nincs meg semmilyen hivatalos
                nyom, a gyakorlati esély jelentősen csökken.
              </p>
              <p>
                Ezért érdemes régi ügyeknél is gyorsan lépni, amint felmerül az igény gondolata.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miben más ez, mint a „meddig lehet visszamenőleg igényelni?” kérdés?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A két kérdés rokon, de nem ugyanaz. Az egyik inkább a jogi-időbeli lehetőséget nézi, a másik
                azt, hogy a konkrét utas szemszögéből egy régi járat ügye még tényleg feldolgozható-e.
              </p>
              <p>
                Vagyis nem csak az számít, hogy elméletben lehet-e még igényt benyújtani, hanem az is, hogy
                a gyakorlatban mennyire él még az ügy.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha egy régi járat jutott eszedbe, ne abból indulj ki, hogy már biztosan késő. Előbb érdemes
              összeszedni, ami még megvan, és megnézni, hogy az ügy időben és bizonyítás szempontjából
              mennyire maradt életképes.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Régi járat ellenőrzése most
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Régi járatra is járhat még kártérítés?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, ha az ügy még időben nyitott és a bizonyítékok elég erősek.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mi a legfontosabb régi ügyeknél?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Az, hogy még visszakereshető legyen a foglalás és a járatprobléma alapadata.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ha kevés dokumentum maradt, akkor is érdemes megnézni?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, mert néhány stabil adatból is kiderülhet, hogy van-e még értelme foglalkozni az üggyel.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/meddig-lehet-visszamenoleg-igenyelni" className="block hover:underline">
                Meddig lehet visszamenőleg igényelni?
              </Link>
              <Link href="/hu/blog/kerhetek-karteritest-beszallokartya-nelkul" className="block hover:underline">
                Kérhetek kártérítést beszállókártya nélkül?
              </Link>
              <Link href="/hu/blog/milyen-dokumentumok-kellenek-a-karteriteshez" className="block hover:underline">
                Milyen dokumentumok kellenek a kártérítéshez?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
