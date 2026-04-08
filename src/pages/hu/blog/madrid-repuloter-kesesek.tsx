import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Route,
  Sun,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MadridRepuloterKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Madrid repülőtér késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha a madridi repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, csatlakozásról, átfoglalásról és végső késésről."
        url="https://problemlot.com/hu/blog/madrid-repuloter-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Madrid repülőtér késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató a madridi repülőtéren felmerülő késésekhez, törlésekhez, csatlakozásokhoz és EU261 jogokhoz.",
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
            datePublished: "2026-04-08",
            dateModified: "2026-04-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/madrid-repuloter-kesesek",
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
                name: "Madridnál is a végső célállomás számít leginkább?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen. Madridnál is gyakoriak a csatlakozások és az átfoglalások, ezért a claim erejét gyakran a végső érkezési késés mutatja meg.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos Madridban az új útvonal és az időveszteség?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert egy törlés vagy komoly késés után nem elég azt nézni, hogy kaptál-e új járatot. Az is fontos, mennyivel később értél oda, és mennyire volt használható az alternatíva.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Madridban késés vagy törlés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg az eredeti és az új útvonalat, a boarding passokat, a PNR-t, az airline üzeneteit, a kijelzőfotókat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Madrid repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Madrid repülőtér késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>madridi repülőtér</strong> sok magyar utasnál dél-európai, nyaralási vagy továbbszállásos
              útvonalakhoz kapcsolódik. Emiatt a késések és törlések itt is gyorsan az egész utazás problémájává
              válhatnak, különösen akkor, ha az átfoglalás gyenge vagy a végső célállomásra érkezés erősen kitolódik.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
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
              <strong>Madridnál is a teljes utazási veszteséget kell nézni.</strong> A claim erejét nem az dönti el,
              hogy a járat késett-e egy kicsit, hanem az, hogy mennyi lett a végső csúszás, és milyen minőségű új
              megoldást adott a légitársaság.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Madridban csúszott meg az utad?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járatod késik, törölték vagy az új útvonal nagy extra időveszteséget okoz, érdemes most gyorsan
              megnézni, mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Madridi járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a madridi ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Egy foglalásban lévő teljes utazás.</li>
                <li>Jelentős végső érkezési késés.</li>
                <li>Jól dokumentált átfoglalási ajánlat.</li>
                <li>Megőrzött airline üzenetek és blokkok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti a claimet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Külön jegyes továbbutazás.</li>
                <li>Hiányzó nyom az eredeti és új útvonalról.</li>
                <li>Csak az első szakasz csúszására épített következtetés.</li>
                <li>Nem dokumentált időveszteség vagy költség.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért nem elég Madridban csak az első késést nézni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Madridnál sokszor az első csúszás csak a kezdete annak, ami később egy teljes útvonal-problémává válik.
                Az utas szempontjából a valódi veszteség nem a kiinduló késés, hanem az, hogy mikor ért oda végül a
                célállomásra.
              </p>
              <p>
                Emiatt a claim elemzése itt is inkább a teljes útvonal eredményén múlik, nem önmagában az első
                információn.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj a madridi repülőtéren?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passokat, a PNR-t, az airline összes értesítését, az eredeti és az új útvonalat,
                valamint a kijelzőkről készült képeket. Ha több új ajánlatot kapsz, mindegyiket érdemes elmenteni.
              </p>
              <p>
                Madridi ügyeknél is sokat számít a pontos idővonal, mert később ez mutatja meg, mennyire volt jó vagy
                gyenge az airline tényleges megoldása.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért fontos az átfoglalás minősége Madridnál?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a légitársaság új útvonalat ad, nem csak az számít, hogy kaptál-e valamit, hanem az is, mennyivel
                később jutsz el a célodhoz. Egy gyenge alternatíva nagy végső időveszteséget okozhat.
              </p>
              <p>
                Ezért Madridnál a claim értékelésének része az is, hogy a felajánlott megoldás mennyire közelítette
                meg az eredeti utazási tervet.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes utvonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Madridnál is a teljes utazás eredménye mutatja meg a claim erejét.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső célállomásra érkezés ideje sokszor többet mond, mint az első indulási csúszás.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Sun className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Deli es nyaralasi utak</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A madridi problémák gyakran érintik a dél-európai és vakációs útvonalakat is, nem csak a klasszikus hub forgalmat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Madridban már most biztos, hogy az érkezés jelentősen kitolódik, vagy az új útvonal gyenge, nem
                érdemes túl sokat várni az első elemzéssel. A frissen mentett bizonyítékok sokat számítanak.
              </p>
              <p>
                Különösen igaz ez akkor, ha a légitársaság több különböző opciót mutatott, és később nehéz lenne
                visszaidézni, melyik milyen végső időveszteséget eredményezett volna.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Madridhoz
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Őrizd meg az airline minden üzenetét.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Dokumentáld a releváns költségeket és a módosítások sorrendjét.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Madridnál is a végső célállomás a legfontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. A teljes időveszteséget általában ez mutatja meg a legjobban.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontos a madridi új útvonal dokumentálása?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert így látszik később, milyen alternatívát adott a légitársaság és mennyi lett a teljes csúszás.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Madridnál a nyaralási útvonalaknál is ugyanúgy számít az EU261?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen. A nyaralási jelleg önmagában semmit nem változtat a jogi kereten, ha az útvonal egyébként megfelel a szabályoknak.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
