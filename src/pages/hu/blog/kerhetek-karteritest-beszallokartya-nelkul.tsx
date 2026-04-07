import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Plane,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function KerhetekKarteritestBeszallokartyaNelkul() {
  return (
    <LayoutHu>
      <SEO
        title="Kérhetek kártérítést beszállókártya nélkül? Mit fogadnak el helyette [2026]"
        description="Magyar útmutató: lehet-e kártérítést kérni boarding pass nélkül, milyen bizonyítékok pótolhatják a beszállókártyát, és mikor gyengül az ügy."
        url="https://problemlot.com/hu/blog/kerhetek-karteritest-beszallokartya-nelkul"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Kérhetek kártérítést beszállókártya nélkül? Mit fogadnak el helyette [2026]",
            description:
              "Magyar nyelvű útmutató arról, lehet-e kártérítést kérni beszállókártya nélkül, milyen bizonyítékok pótolhatják a boarding passt, és mikor válik gyengébbé az ügy.",
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
              "@id": "https://problemlot.com/hu/blog/kerhetek-karteritest-beszallokartya-nelkul",
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
                name: "Lehet kártérítést kérni beszállókártya nélkül?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. A beszállókártya hasznos bizonyíték, de nem mindig az egyetlen. Foglalási visszaigazolás, e-ticket, PNR, email, alkalmazás-képernyőkép és más adatok is segíthetnek igazolni az utazást.",
                },
              },
              {
                "@type": "Question",
                name: "Mi helyettesítheti a boarding passt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Leggyakrabban a PNR, az e-ticket, a check-in email, az alkalmazásból mentett képernyőkép, az alternatív járatról kapott üzenet, vagy bármely hivatalos utazási dokumentum segíthet.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor okoz komoly gondot a beszállókártya hiánya?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor lehet nehezebb a helyzet, ha alig maradt más bizonyíték arról, hogy az utas ténylegesen rajta volt a foglaláson vagy jelen volt az utazásnál.",
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
            <span className="text-slate-900 dark:text-white">Beszallokartya nelkul</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FileSearch className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Kérhetek kártérítést beszállókártya nélkül?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Igen, sok esetben igen. A beszállókártya fontos bizonyíték lehet, de nem az egyetlen. Ha
              megvan a foglalási adat, az e-ticket, a PNR, a check-in email vagy más hivatalos nyom,
              attól még lehet erős ügyed akkor is, ha maga a boarding pass elveszett.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Igen, lehet.</strong> A beszállókártya hiánya nem zárja ki automatikusan a kártérítési
              igényt. A lényeg az, hogy maradjon elég hiteles bizonyíték arra, hogy a foglalás létezett,
              az utazás tervezett volt, és az érintett járat valóban téged érintett.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Nincs boarding pass? Még nem veszett el az ügy</h2>
            <p className="mb-6 text-blue-100">
              A legtöbb ügyben nem egyetlen dokumentum dönt. A jó stratégia az, hogy összerakod az összes
              megmaradt nyomot: foglalási email, PNR, e-ticket, app screenshot, átfoglalási értesítés,
              költségblokkok és minden más hivatalos adat.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy ellenőrzése ClaimWingerrel
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi segíthet a boarding pass helyett?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Foglalási visszaigazolás és PNR.</li>
                <li>E-ticket vagy elektronikus jegyszám.</li>
                <li>Check-in email vagy appból mentett képernyőkép.</li>
                <li>Átfoglalásról vagy késésről kapott hivatalos üzenetek.</li>
                <li>Számlák és blokkok a járatproblémához kapcsolódó költségekről.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor gyengül az ügy?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha sem boarding pass, sem PNR, sem email nem maradt meg.</li>
                <li>Ha nem bizonyítható, hogy az utas ténylegesen az adott foglaláson volt.</li>
                <li>Ha különösen régi ügyről van szó és szinte minden nyom elveszett.</li>
                <li>Ha az alapjogi jogosultság is kérdéses, nem csak a dokumentáció.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miért nem a boarding pass az egyetlen kulcsdokumentum?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert a légitársasági ügyek bizonyítása több elemből áll. A boarding pass megmutathatja, hogy
                az utas eljutott a kapuig vagy be volt check-olva, de a foglalási és utazási lánc sokszor más
                dokumentumokkal is rekonstruálható.
              </p>
              <p>
                A jó kérdés nem az, hogy megvan-e pont ez az egy papír, hanem az, hogy a teljes bizonyítási
                kép mennyire áll össze hitelesen.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mit érdemes összeszedni, ha nincs meg a beszállókártya?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Kezdd a legstabilabb adatokkal: foglalási szám, jegyszám, utasnév, dátum, útvonal, airline,
                email-visszaigazolások. Utána gyűjts minden screenshotot az alkalmazásból és minden hivatalos
                értesítést a késésről, törlésről vagy átfoglalásról.
              </p>
              <p>
                Ha volt alternatív járat, hotel, taxi vagy egyéb költség, ezek is segíthetnek, mert azt mutatják,
                hogy a problémás utazás ténylegesen megtörtént és következményei voltak.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor lesz igazán problémás a hiánya?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, ha a beszállókártya mellett szinte minden más is hiányzik. Ha nincs e-ticket, nincs PNR,
                nincs check-in email, nincs app screenshot, és nincs semmi más hivatalos bizonyíték, az ügy
                jóval nehezebben bizonyítható.
              </p>
              <p>
                De a legtöbb valós helyzet ennél jobb: általában legalább néhány kulcsadat visszakereshető.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Jó megközelítés régi vagy hiányos ügyeknél
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Erősebb helyzet
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Megvan a foglalási email, a PNR, a járatszám és néhány screenshot. Ilyenkor a boarding pass
                  hiánya általában nem végzetes.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Gyengébb helyzet
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Csak egy emlék maradt arról, hogy volt valamilyen utazás évekkel ezelőtt. Ilyenkor a
                  dokumentáció hiánya már önmagában is komoly kockázat.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha nincs meg a boarding pass, ne állj le ennél a pontnál. Gyűjtsd össze az összes megmaradt
              adatot, és nézesd meg, hogy ezek együtt elég erős bizonyítási csomagot adnak-e az igényhez.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Ügy ellenőrzése most
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Boarding pass nélkül is lehet ügyet indítani?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, ha más bizonyítékokból jól rekonstruálható az utazás és a járatprobléma.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mi a legfontosabb helyettesítő dokumentum?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Általában a PNR, az e-ticket és a foglalási email a legerősebb kiindulópont.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ha semmim nem maradt meg, akkor vége az ügynek?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem biztos, de az ügy jóval nehezebb lesz. Ilyenkor az a kérdés, hogy visszakereshető-e még
                  valamilyen hivatalos adat a foglalásról vagy a járatról.
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
              <Link href="/hu/blog/meddig-lehet-visszamenoleg-igenyelni" className="block hover:underline">
                Meddig lehet visszamenőleg igényelni?
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
