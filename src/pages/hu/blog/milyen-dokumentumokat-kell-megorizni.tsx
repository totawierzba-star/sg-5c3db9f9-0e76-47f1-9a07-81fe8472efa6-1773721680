import Link from "next/link";
import {
  AlertTriangle,
  Archive,
  ArrowRight,
  Camera,
  CheckCircle2,
  FileText,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MilyenDokumentumokatKellMegorizni() {
  return (
    <LayoutHu>
      <SEO
        title="Milyen dokumentumokat kell megőrizni? Checklist késés, törlés és claim előtt [2026]"
        description="Magyar útmutató: milyen dokumentumokat érdemes megőrizni járatkésés vagy törlés után, mit fotózz le, mit ments el, és mi segít később a kártérítési ügyben."
        url="https://problemlot.com/hu/blog/milyen-dokumentumokat-kell-megorizni"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Milyen dokumentumokat kell megőrizni? Checklist késés, törlés és claim előtt [2026]",
            description:
              "Magyar nyelvű útmutató arról, milyen dokumentumokat kell megőrizni járatprobléma után, és mely bizonyítékok segíthetnek később a kártérítési vagy költség-visszatérítési ügyben.",
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
              "@id": "https://problemlot.com/hu/blog/milyen-dokumentumokat-kell-megorizni",
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
                name: "Milyen dokumentumokat kell mindenképp megőrizni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legfontosabbak általában a foglalási visszaigazolás, PNR, e-ticket, beszállókártya vagy annak helyettesítő adatai, valamint minden email és screenshot a késésről, törlésről vagy átfoglalásról.",
                },
              },
              {
                "@type": "Question",
                name: "A blokkok és számlák is fontosak?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Ha a járatprobléma miatt ételre, hotelre, taxira vagy új közlekedésre kellett költened, a számlák és blokkok később nagyon fontosak lehetnek.",
                },
              },
              {
                "@type": "Question",
                name: "Mi van, ha valamit már kidobtam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltétlenül vész el az ügy, de minél több eredeti nyom marad meg, annál erősebb és könnyebben kezelhető lesz a bizonyítás.",
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
            <span className="text-slate-900 dark:text-white">Mit őrizz meg</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Archive className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Milyen dokumentumokat kell megőrizni?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A leggyakoribb hiba nem az, hogy az utas nem akar claimet indítani, hanem az, hogy túl korán
              kitörli vagy kidobja a fontos nyomokat. Egy késés vagy törlés után gyakran nem rögtön látszik,
              melyik dokumentum lesz később döntő, ezért jobb többet megőrizni, mint kevesebbet.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Őrizd meg a foglalási visszaigazolást, a PNR-t, az e-ticketet, a boarding passt vagy annak helyettesítő
              adatait, a légitársaság összes emailjét, az appból készült screenshotokat és minden blokkot vagy
              számlát, ami a járatproblémához kapcsolódó pluszköltséget igazolja.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Ne csak azt őrizd meg, amit most fontosnak érzel</h2>
            <p className="mb-6 text-blue-100">
              A claim-eknél sokszor hónapokkal később derül ki, hogy melyik email, melyik screenshot vagy melyik
              blokk lett volna az egyik legerősebb bizonyíték. Ezért a jó stratégia a teljes nyomvonal megőrzése.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Dokumentumcheck ClaimWingerrel
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mit érdemes biztosan megtartani?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Foglalási visszaigazolás és PNR.</li>
                <li>E-ticket vagy jegyszám.</li>
                <li>Beszállókártya vagy check-in nyomok.</li>
                <li>Légitársasági email, SMS, app-értesítés.</li>
                <li>Átfoglalási vagy törlési értesítés.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mit szoktak túl korán kidobni?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Étkezési blokkok és taxi számlák.</li>
                <li>Repülőtéri kijelzőről készült fotók.</li>
                <li>Gate change és delay screenshotok.</li>
                <li>Alternatív útvonalról kapott üzenetek.</li>
                <li>Hotel számla éjszakai késés után.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. A foglalási lánc legyen visszakövethető
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az első és legfontosabb réteg az, hogy bizonyítható legyen maga az utazás. Ehhez a foglalási email,
                a PNR, a jegyszám és minden alapadat kritikus lehet. Ezek nélkül később már az is nehezebb lehet,
                hogy pontosan melyik ügyet próbálod érvényesíteni.
              </p>
              <p>
                Ezért már a vásárlás pillanatától érdemes rendszerezve eltenni ezeket az adatokat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. A repülőtéri valóságot is dokumentáld
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A késés vagy törlés gyakorlati képe sokszor nem csak emailben látszik. A kijelzőn megjelenő állapot,
                a gate-váltás, a sorok, az alkalmazás státusza mind olyan nyomok, amelyek később segíthetnek
                rekonstruálni a történteket.
              </p>
              <p>
                Ezért a screenshot és a fénykép nem „felesleges extra”, hanem sokszor az egyik legjobb támasz.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <div className="mb-5 flex items-center gap-3">
              <Camera className="h-6 w-6 text-slate-900 dark:text-white" />
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                3. Fotózz le mindent, ami később eltűnhet
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                App-értesítések, gate kijelzők, törlési státuszok és átfoglalási oldalak gyakran később már nem
                lesznek visszanézhetők ugyanabban a formában. Egy gyors screenshot viszont hónapokkal később is
                megmutatja, mi történt akkor és ott.
              </p>
              <p>
                Ez különösen fontos a gyorsan változó helyzetekben, például amikor a járat státusza többször módosul.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              4. A költségdokumentumokat se becsüld le
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ha a járatprobléma miatt ételre, italra, hotelre, taxira vagy más szükségszerű kiadásra ment el a
                pénzed, ezek a blokkok és számlák különösen fontosak lehetnek. Sok utas ezeket dobja ki leghamarabb,
                pedig később pont ezek hiányoznak a legjobban.
              </p>
              <p>
                Nem csak a nagy összegek számítanak. A kisebb, de indokolt költségek is relevánsak lehetnek.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Mi van, ha valamit már elvesztettél?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ez még nem jelenti automatikusan azt, hogy az ügy elveszett. Sokszor más dokumentumok, emailek,
                régi app-screenshotok vagy banki nyomok részben pótolhatják a hiányt.
              </p>
              <p>
                De minél több eredeti bizonyíték marad meg, annál könnyebb és erősebb lesz a későbbi claim-kezelés.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha most vagy egy friss késés, törlés vagy átfoglalás közepén, ne próbáld meg eldönteni fejben, melyik
              dokumentum lesz később fontos. Ments el mindent, ami a foglaláshoz, a járat állapotához és a pluszköltségekhez kapcsolódik.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Dokumentumok gyors ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Milyen dokumentumokat kell biztosan megőrizni?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A foglalási adatokat, a jegyet, a boarding pass nyomait, minden értesítést és az összes releváns blokkot.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  A screenshotok tényleg számítanak?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, különösen akkor, ha a járat státusza vagy az appos információk később már nem elérhetők.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ha valamit kidobtam, vége az ügynek?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem feltétlenül, de minél több eredeti nyom marad meg, annál erősebb és könnyebben bizonyítható a helyzet.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/milyen-dokumentumok-kellenek-a-karteriteshez" className="block hover:underline">
                Milyen dokumentumok kellenek a kártérítéshez?
              </Link>
              <Link href="/hu/blog/kerhetek-karteritest-beszallokartya-nelkul" className="block hover:underline">
                Kérhetek kártérítést beszállókártya nélkül?
              </Link>
              <Link href="/hu/blog/mit-tegyel-azonnal-ha-kesik-a-jaratod" className="block hover:underline">
                Mit tegyél azonnal, ha késik a járatod?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
