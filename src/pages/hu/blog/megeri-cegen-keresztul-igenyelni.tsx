import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  HandCoins,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MegeriCegenKeresztulIgenyelni() {
  return (
    <LayoutHu>
      <SEO
        title="Megéri cégen keresztül igényelni? Mikor van értelme claim companyt választani [2026]"
        description="Magyar útmutató: mikor éri meg cégen keresztül intézni a repülési kártérítést, mikor elég az egyszerű saját ügyintézés, és miben segíthet egy jó claim company."
        url="https://problemlot.com/hu/blog/megeri-cegen-keresztul-igenyelni"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Megéri cégen keresztül igényelni? Mikor van értelme claim companyt választani [2026]",
            description:
              "Magyar nyelvű útmutató arról, mikor érdemes claim companyn keresztül intézni a repülési kártérítést, és mikor lehet elég az egyszerűbb saját ügyintézés.",
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
              "@id": "https://problemlot.com/hu/blog/megeri-cegen-keresztul-igenyelni",
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
                name: "Megéri claim companyn keresztül intézni a kártérítést?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen, különösen akkor, ha az ügy elakadt, vitatott vagy az utas nem akar időt tölteni a teljes folyamattal. Egyszerűbb ügyeknél viszont előfordulhat, hogy a saját ügyintézés is elegendő.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor lehet elég az egyszerű saját ügyintézés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha az ügy tiszta, a dokumentáció rendezett, a légitársaság reagál, és nincs komolyabb jogvita, akkor a saját ügyintézés sokszor reális opció lehet.",
                },
              },
              {
                "@type": "Question",
                name: "Miben segít egy jó claim company?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Abban, hogy strukturálja az ügyet, megfelelően kezelje a dokumentációt, kövesse az airline válaszait, és ne hagyja szétesni vagy elhúzódni a folyamatot.",
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
            <span className="text-slate-900 dark:text-white">Cégen keresztül</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <HandCoins className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Megéri cégen keresztül igényelni?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A rövid válasz az, hogy <strong>attól függ, mennyire tiszta vagy mennyire problémás az ügy</strong>.
              Nem minden claimhez kell feltétlenül közvetítő, de nem is minden ügyet érdemes teljesen egyedül
              végigvinni. A jó döntés a várható bonyolultság, az időigény és az airline hozzáállása alapján dől el.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Igen, sokszor megérheti, főleg ha az ügy vitatott, elakadt vagy egyszerűen nem akarsz végigmenni
              egy hosszú és frusztráló folyamatsoron. Ugyanakkor tisztább, egyszerűbb ügyeknél a saját ügyintézés
              is lehet teljesen reális út.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Nem az a kérdés, hogy „mindig” megéri-e</h2>
            <p className="mb-6 text-blue-100">
              A jobb kérdés ez: mennyi időd van, mennyire tiszta az ügy, mennyire együttműködő a légitársaság,
              és mekkora az esélye, hogy a claim elakad vagy vitássá válik.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ügy gyors felmérése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet jó döntés cégen keresztül?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha az airline nem válaszol vagy sablonosan elutasít.</li>
                <li>Ha az ügy dokumentációja szétesőben van.</li>
                <li>Ha nincs időd vagy energiád a teljes folyamatra.</li>
                <li>Ha az ügy nem tűnik teljesen egyszerűnek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet elég a saját ügyintézés?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a tényállás nagyon tiszta.</li>
                <li>Ha az EU261 jól alkalmazható és az airline reagál.</li>
                <li>Ha a dokumentáció rendezett és teljes.</li>
                <li>Ha az ügy nem csúszott át komolyabb jogvitába.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. A közvetítő nem azért hasznos, mert „varázsol”
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A jó claim company értéke nem abban áll, hogy csodát tesz egy gyenge ügyből, hanem abban,
                hogy struktúrát ad a folyamatnak. Rendbe rakja a dokumentumokat, tudja, hol szokott elakadni
                az airline kommunikációja, és nem engedi szétfolyni az ügyet.
              </p>
              <p>
                Ez különösen azoknak lehet hasznos, akiknek nincs idejük vagy türelmük végigkísérni az egész eljárást.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Egyszerű ügyben nem mindig kell plusz réteg
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha minden tiszta: megvan a foglalás, egyértelmű a késés vagy törlés, a légitársaság reagál, és nincs
                komoly vita a jogi alapról, akkor a saját ügyintézés is teljesen életszerű lehet.
              </p>
              <p>
                Ilyenkor a döntés már inkább kényelmi és időgazdálkodási kérdés, nem feltétlenül jogi szükségszerűség.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mikor kezd valóban megérni a segítség?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, amikor az ügy nem csak „be kell küldeni egy űrlapot” szinten van, hanem több körös
                kommunikáció, sablonos elutasítás, hiányos válasz vagy bizonytalan dokumentáció jelenik meg.
              </p>
              <p>
                Minél inkább változik az ügy egyszerű adminisztrációból valós claim-kezeléssé, annál nagyobb
                lehet az értéke annak, hogy valaki rendszerben vigye végig.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              4. Mit kell reálisan mérlegelni?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Azt, hogy mennyi időt akarsz rászánni, mennyire szereted magad intézni a vitás helyzeteket, és
                mennyire tűnik jelenleg tisztának a claim. Nem csak a pénz számít, hanem az is, hogy mennyire
                akarsz te magad végigmenni a teljes folyamaton.
              </p>
              <p>
                A jó döntés itt nem ideológiai, hanem praktikus: a konkrét ügyhöz kell igazítani.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Tipikus példák</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Tiszta, egyszerű késési ügy
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt gyakran a saját ügyintézés is működhet, ha van hozzá időd és kedved.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Elakadt vagy vitatott claim
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt már sokkal gyakrabban értéket ad a jó strukturálás és a következetes ügyvitel.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Először azt mérd fel, hogy a te ügyed tiszta vagy problémás. Ha gyorsan, átláthatóan és kevés vitával
              kezelhető, lehet, hogy a saját út is elég. Ha már most látszik az elakadás vagy a bizonytalanság,
              a külső segítség könnyen jobban megtérülhet.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Ügy gyors felmérése most
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Megéri cégen keresztül intézni?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Sok esetben igen, főleg vitatott vagy elakadt ügyeknél.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Egyszerű ügyben is kell közvetítő?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem feltétlenül, ott a saját ügyintézés is lehet reális.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Miben segít egy jó claim company?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A dokumentáció és az egész folyamat strukturált végigvitelében.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/kell-ugyved-a-karteriteshez" className="block hover:underline">
                Kell ügyvéd a kártérítéshez?
              </Link>
              <Link href="/hu/blog/mit-tegyek-ha-elutasitjak-az-igenyt" className="block hover:underline">
                Mit tegyek, ha elutasítják az igényt?
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
