import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  MailWarning,
  MessageSquare,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MitTegyekHaNemValaszolnak() {
  return (
    <LayoutHu>
      <SEO
        title="Mit tegyek, ha a légitársaság nem válaszol? Elutasítás nélkül is elakadhat az ügy [2026]"
        description="Magyar útmutató: mit tegyél, ha a légitársaság nem válaszol a kártérítési igényedre, mikor normális a várakozás, és mikor érdemes továbblépni."
        url="https://problemlot.com/hu/blog/mit-tegyek-ha-nem-valaszolnak"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mit tegyek, ha a légitársaság nem válaszol? Elutasítás nélkül is elakadhat az ügy [2026]",
            description:
              "Magyar nyelvű útmutató arról, mit tegyél, ha a légitársaság nem reagál a kártérítési igényedre, és mikor kell a puszta várakozás helyett továbblépni.",
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
              "@id": "https://problemlot.com/hu/blog/mit-tegyek-ha-nem-valaszolnak",
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
                name: "Mit tegyek, ha a légitársaság hetek óta nem válaszol?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Először érdemes ellenőrizni, hogy az igény valóban be lett-e nyújtva, minden adat rendben van-e, és érkezett-e automatikus visszaigazolás. Ha az ügy tartósan nem mozdul, jöhet a tudatos utánkövetés és az eszkaláció.",
                },
              },
              {
                "@type": "Question",
                name: "A csend ugyanaz, mint az elutasítás?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A válasz hiánya és a kifejezett elutasítás nem ugyanaz. A csend azonban idővel ugyanúgy problémává válhat, különösen ha a légitársaság érdemben nem foglalkozik a megfelelően beadott igénnyel.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor kell továbblépni a sima várakozásból?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Akkor, ha hosszabb ideje nincs érdemi reakció, sablonos válaszok ismétlődnek, vagy látszik, hogy az ügy nem halad. Ilyenkor már nem a türelem, hanem a következetes eszkaláció a jobb stratégia.",
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
            <span className="text-slate-900 dark:text-white">Nem válaszolnak</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MailWarning className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mit tegyek, ha a légitársaság nem válaszol?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A legrosszabb érzés sokszor nem is az első késés vagy törlés, hanem amikor utána hetekig semmi
              nem történik. A jó hír az, hogy a válasz hiánya még nem jelenti automatikusan azt, hogy az ügyed
              gyenge. A rossz hír az, hogy egy ponton a puszta várakozás már nem stratégia.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Először ellenőrizd, hogy az igény valóban be lett-e küldve, minden adat teljes volt-e, és maradt-e
              nyoma a benyújtásnak. Ha az ügy tartósan nem mozdul, a csendet nem szabad a végtelenségig tűrni:
              ilyenkor jön az utánkövetés, majd szükség esetén az eszkaláció.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A csend nem ugyanaz, mint a kudarc</h2>
            <p className="mb-6 text-blue-100">
              Sok utas túl korán feladja, mert nem kap gyors választ. Mások túl sokáig várnak, és hónapokig nem
              történik semmi. A jó megközelítés az, hogy először tisztázod, hol akadt el az ügy, és csak utána
              döntesz a következő lépésről.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Elakadt ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi az első jó lépés?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ellenőrizd, hogy megvan-e a beadás nyoma.</li>
                <li>Nézd meg, kaptál-e automatikus visszaigazolást.</li>
                <li>Győződj meg róla, hogy a PNR, dátum és járatadatok helyesek.</li>
                <li>Rendszerezd a teljes dokumentációt, mielőtt újra írsz.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi a gyakori rossz reakció?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Várni teljesen passzívan hónapokig.</li>
                <li>Minden héten új claimet beadni ugyanarra az ügyre.</li>
                <li>Újraírni az egész történetet strukturálatlanul.</li>
                <li>Összekeverni a csendet a végleges elutasítással.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Először nézd meg, hogy valóban bejutott-e az igény
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sok ügy már itt félremegy. Előfordul, hogy az űrlap elküldése után az utas azt hiszi, minden
                rendben volt, de valójában nem maradt meg a beadás nyoma, hiányzott melléklet, vagy a kérelem
                technikailag nem rögzült tisztán.
              </p>
              <p>
                Ezért az első kérdés mindig az legyen: van-e képernyőkép, email, automatikus ticket vagy bármilyen
                nyom arról, hogy a claim ténylegesen be lett adva?
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. A csend és az elutasítás nem ugyanaz
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a légitársaság kifejezetten elutasít, legalább tudod, mivel vitatkozik. Ha viszont semmi
                nem érkezik, akkor először azt kell tisztázni, hogy adminisztratív csúszásról, gyenge ügykezelésről
                vagy tényleges időhúzásról van-e szó.
              </p>
              <p>
                A stratégia emiatt más: csöndnél előbb rendezetten utánkövetünk, elutasításnál pedig az indoklást
                boncoljuk.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mikor normális még a várakozás?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Rövidebb adminisztratív várakozás önmagában még nem rendellenes. Ha látod, hogy az ügyet
                befogadták, és van valamiféle ügyazonosító vagy követhető kommunikáció, az általában jobb,
                mint a teljes némaság.
              </p>
              <p>
                A probléma ott kezdődik, amikor az ügy heteken-hónapokon át nem kap semmilyen érdemi választ,
                vagy csak ugyanazok a semmitmondó sablonok ismétlődnek.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              4. Mikor jön el az eszkaláció ideje?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, ha már nem csak idő telik, hanem látszik, hogy az ügy nem halad. Tipikus jel, ha nincs
                konkrét visszajelzés, nem kérnek hiánypótlást, nem reagálnak a rendezett follow-upra, vagy a
                kommunikáció szándékosan ködös.
              </p>
              <p>
                Ilyenkor nem az a kérdés, hogy „várjak-e még egy kicsit”, hanem az, hogy milyen következő fórumon
                vagy milyen struktúrában kell továbbvinni az ügyet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Milyen sorrendben érdemes lépni?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">1. Ellenőrzés</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Be lett-e küldve, megvan-e a visszaigazolás, hiányzik-e valami?
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">2. Utánkövetés</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Rövid, tiszta follow-up ugyanarra az ügyre, nem újranyitott káosz.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">3. Eszkaláció</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ha nincs érdemi haladás, már nem várni kell, hanem továbbvinni az ügyet.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha a légitársaság nem válaszol, ne maradj a „talán majd írnak” állapotban. Előbb tedd rendbe az
              ügyed dokumentációját és a beadás nyomát, utána viszont érdemes tudatosan eldönteni, mikor jön el
              a tényleges továbblépés ideje.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Elakadt claim ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit tegyek, ha a légitársaság egyáltalán nem válaszol?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Először ellenőrizd a beadás nyomát és a dokumentációt, utána jöhet a rendezett utánkövetés,
                  majd szükség esetén az eszkaláció.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  A válasz hiánya ugyanaz, mint az elutasítás?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem, de idővel ugyanúgy komoly problémává válhat.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Meddig érdemes csak várni?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem egyetlen varázsszám számít, hanem az, hogy látszik-e érdemi ügyhaladás.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/hogyan-mukodik-a-karterites-folyamata" className="block hover:underline">
                Hogyan működik a kártérítés folyamata?
              </Link>
              <Link href="/hu/blog/mennyi-ido-alatt-fizetik-ki-a-karteritest" className="block hover:underline">
                Mennyi idő alatt fizetik ki a kártérítést?
              </Link>
              <Link href="/hu/blog/ki-kapja-a-penzt-utas-vagy-ceg" className="block hover:underline">
                Ki kapja a pénzt: utas vagy cég?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
