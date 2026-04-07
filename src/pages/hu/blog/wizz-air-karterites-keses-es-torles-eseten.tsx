import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  Plane,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function WizzAirKarteritesKesesEsTorlesEseten() {
  return (
    <LayoutHu>
      <SEO
        title="Wizz Air kártérítés késés és törlés esetén – magyar útmutató [2026]"
        description="Magyar útmutató Wizz Air járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, mikor alkalmazható az EU261, és mit tegyél, ha a claim elakad."
        url="https://problemlot.com/hu/blog/wizz-air-karterites-keses-es-torles-eseten"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Wizz Air kártérítés késés és törlés esetén – magyar útmutató [2026]",
            description:
              "Magyar nyelvű útmutató a Wizz Air járatkésésekhez és törlésekhez: mikor jöhet szóba kártérítés, hogyan működik az EU261 ennél a légitársaságnál, és mire figyeljen az utas.",
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
              "@id": "https://problemlot.com/hu/blog/wizz-air-karterites-keses-es-torles-eseten",
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
                name: "Wizz Air járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A Wizz Airnél is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a késés vagy törlés megfelel a szabályoknak. A márkanév önmagában nem zárja ki a jogosultságot.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor fontos különösen az EU261 Wizz Air esetén?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Különösen akkor, ha EU-ból induló vagy megfelelően kapcsolódó útvonalról van szó. A pontos jogosultságot mindig az adott járat, útvonal és esemény alapján kell értékelni.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a Wizz Air nem válaszol vagy elutasít?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Először a dokumentációt és az indoklást kell rendbe tenni, utána pedig eldönteni, hogy a claim továbbra is erős-e. Sok ügy nem attól gyenge, hogy a Wizz Air nemet mondott elsőre.",
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
            <span className="text-slate-900 dark:text-white">Wizz Air</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Wizz Air kártérítés késés és törlés esetén
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A Wizz Air az egyik legfontosabb légitársaság a magyar utasok szempontjából, ezért teljesen jogos
              a kérdés: <strong>jár-e kártérítés</strong>, ha a Wizz Air járata késik vagy törlik. A rövid válasz
              az, hogy igen, sok esetben felmerülhet, de nem a márkanév, hanem az <strong>EU261</strong>, az útvonal,
              a késés mértéke és a konkrét esemény dönti el a helyzetet.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <BadgeEuro className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Igen, Wizz Air járatnál is járhat kártérítés.</strong> A kérdés nem az, hogy low-cost-e a
              légitársaság, hanem hogy a járat az EU261 alá tartozik-e, és a késés vagy törlés megfelel-e a jogi
              feltételeknek.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A Wizz Airnél sem kisebbek a jogaid attól, hogy fapados</h2>
            <p className="mb-6 text-blue-100">
              Ez az egyik legfontosabb félreértés. Attól, hogy a Wizz Air low-cost modellben működik, az utasjogi
              helyzet nem lesz automatikusan gyengébb. A döntő mindig a konkrét útvonal és a konkrét járatprobléma.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Wizz Air ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a Wizz Air claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat az EU261 hatálya alá tartozik.</li>
                <li>Ha a végső késés eléri a releváns küszöböt.</li>
                <li>Ha törlés vagy más erős utasjogi esemény történt.</li>
                <li>Ha nincs meggyőzően bizonyított kizáró ok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb a helyzet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat nem EU261-es ügy.</li>
                <li>Ha a késés nem éri el a lényeges szintet.</li>
                <li>Ha az airline valódi rendkívüli körülményt bizonyít.</li>
                <li>Ha a dokumentáció hiányos vagy pontatlan.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Wizz Air és EU261: miért ez a kulcs?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Wizz Airnél sem a brand a legfontosabb kérdés, hanem az, hogy a konkrét útvonal hogyan illeszkedik
                az EU261 rendszerébe. Ha ezt rosszul értelmezzük, könnyen azt hihetjük, hogy automatikusan jár valami
                vagy épp automatikusan nem jár semmi.
              </p>
              <p>
                Épp ezért Wizz Air ügyben az első kérdés mindig az legyen: az adott járat valóban beleesik-e az
                európai utasjogi védelem körébe.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mi a döntő?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Sok utas csak azt nézi, hogy a gép mikor szállt fel, pedig a pénzbeli kompenzációnál gyakran a
                <strong> végső érkezés</strong> számít igazán. Különösen igaz ez akkor, ha a késés további utazási
                problémákat is okozott.
              </p>
              <p>
                Ezért Wizz Air késésnél sem elég annyit tudni, hogy „csúszott a gép”, hanem azt kell megnézni,
                mennyi lett a tényleges végső időveszteség.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire kell figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Wizz Air törlésnél sem csak a „jár vagy nem jár” kérdés létezik. Itt mindig külön kell gondolkodni
                a refundról, az átfoglalásról és az esetleges pénzbeli kompenzációról. Ezek nem ugyanazok a jogok.
              </p>
              <p>
                Sok utas itt veszíti el az átláthatóságot, amikor egyetlen problémaként kezeli a teljes helyzetet,
                holott valójában több külön kérdésről van szó egyszerre.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              4. Mit tegyél, ha a Wizz Air nem válaszol vagy elutasít?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Először ne abból indulj ki, hogy a csend vagy az első elutasítás biztosan a claim gyengeségét jelenti.
                Sokszor a dokumentáció, az airline sablonos válasza vagy a rosszul értelmezett indoklás miatt áll meg az ügy.
              </p>
              <p>
                A jó következő lépés ilyenkor az, hogy újraértékeled a teljes helyzetet: EU261-hatály, végső késés,
                bizonyítékok és a Wizz Air konkrét indoklása.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Tipikus Wizz Air helyzetek</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Hosszú késés Budapestről</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Ilyenkor gyakran a végső érkezés és az EU261 alkalmazhatósága lesz a döntő.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-2">
                  <Plane className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Törölt Wizz Air járat</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt refund, átfoglalás és kompenzáció kérdéseit külön-külön kell végignézni.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha Wizz Air járattal volt problémád, ne csak abból indulj ki, hogy „fapados volt” vagy hogy mit írt
              elsőre az airline. Előbb azt kell tisztázni, hogy a konkrét útvonal és a konkrét esemény alapján
              tényleg milyen utasjogi helyzetben vagy.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Wizz Air claim ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Wizz Air járatnál is járhat kártérítés?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, ha a járat megfelel az EU261 és a konkrét tényállás feltételeinek.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  A low-cost jelleg kizárja a jogosultságot?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem, önmagában egyáltalán nem.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mi van, ha a Wizz Air nemet mondott?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Akkor az indoklást kell szétszedni, nem automatikusan feladni az ügyet.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/low-cost-jaratoknal-is-jar-penz" className="block hover:underline">
                Low-cost járatoknál is jár pénz?
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jár kártérítés késés esetén?
              </Link>
              <Link href="/hu/blog/mit-tegyek-ha-elutasitjak-az-igenyt" className="block hover:underline">
                Mit tegyek, ha elutasítják az igényt?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
