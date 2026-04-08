import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Route,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function AmszterdamSchipholKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Amszterdam Schiphol késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha a Schiphol repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, csatlakozásról, átfoglalásról és végső késésről."
        url="https://problemlot.com/hu/blog/amszterdam-schiphol-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Amszterdam Schiphol késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató a Schiphol repülőtéren felmerülő késésekhez, törlésekhez, csatlakozásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/amszterdam-schiphol-kesesek",
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
                name: "Schipholnál is a végső célállomás számít igazán?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen. Schiphol gyakori átszállási pont, ezért a claim erejét gyakran a végső célállomásra érkezési késés mutatja meg.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos Schipholnál az átfoglalási idővonal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert egy nagy hubon több különböző alternatíva is felmerülhet. A claimnél számíthat, milyen új útvonalat kaptál, mikor kaptad meg, és mekkora teljes időveszteséget okozott.",
                },
              },
              {
                "@type": "Question",
                name: "Mit ments el Schipholon késés vagy törlés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passokat, a PNR-t, az eredeti és az új útvonalat, az airline üzeneteit, a kijelzőfotókat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Amszterdam Schiphol</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Amszterdam Schiphol késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az <strong>Amszterdam Schiphol</strong> repülőtér sok magyar utasnál tipikus átszállási pont, ezért a
              késések és törlések itt gyakran nem önmagukban fontosak, hanem azért, mert az egész útvonalat átírják.
              Schipholnál a claim szempontjából különösen lényeges, hogy mennyi lett a <strong>végső késés</strong>,
              és milyen új útvonalat kínált a légitársaság.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 9 perc</span>
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
              <strong>Schipholnál a claim erejét gyakran a teljes utazási lánc mutatja meg.</strong> A késés vagy
              törlés önmagában kevés információ: az a fontos, hogy mikor értél oda végül a célállomásra, és mennyire
              volt jó vagy rossz az airline által felajánlott új útvonal.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Schipholnál borult fel az utazásod?</h2>
            <p className="mb-6 text-blue-100">
              Ha a csatlakozás elúszott, az útvonal újraszerveződött vagy a végső érkezés jelentősen kitolódott, most
              érdemes gyorsan ellenőrizni, mennyire erős lehet a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Schiphol járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a Schiphol-ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Egy foglalásban lévő teljes útvonal.</li>
                <li>Jelentős végső érkezési késés.</li>
                <li>Megőrzött átfoglalási idővonal.</li>
                <li>Dokumentált airline kommunikáció és költségek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti az ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Külön jegyes self-transfer megoldás.</li>
                <li>Hiányos nyom az új útvonalról.</li>
                <li>Csak az első késésre épített értelmezés.</li>
                <li>Nem bizonyítható időveszteség vagy költség.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért a végső érkezés a kulcskérdés Schipholnál?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Schiphol sokszor olyan pont, ahol egy kisebb első késésből nagy útvonalprobléma lesz. Emiatt a valódi
                utazási veszteség nem mindig az indulási táblán látszik, hanem a végső célállomásnál.
              </p>
              <p>
                Ha a teljes utazás egy foglalásban volt, a claim egyik legfontosabb eleme gyakran az lesz, hogy mennyivel
                később értél oda végül.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj Amszterdamban?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passokat, a PNR-t, az eredeti és az új útvonal részleteit, az airline összes
                értesítését és a kijelzőkről készült fotókat. Több átfoglalás esetén különösen fontos minden egyes
                változás rögzítése.
              </p>
              <p>
                Schipholnál gyakran pont az időrend számít: mikor jött az első módosítás, milyen alternatíva érkezett,
                és végül mennyi lett a teljes csúszás.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért fontos az átfoglalási idővonal?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Egy nagy hubon a légitársaság több különböző megoldást is kínálhat. Később a claimnél az is számíthat,
                hogy milyen alternatíva mikor érkezett, és mennyire volt alkalmas arra, hogy érdemben csökkentse a
                veszteséget.
              </p>
              <p>
                Az átfoglalási idővonal ezért Schipholnál nem mellékes adminisztráció, hanem a történet egyik
                legfontosabb része lehet.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes utvonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Schipholnál a claim sokszor csak a teljes foglalással együtt érthető meg helyesen.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső érkezési idő mutatja meg, mennyi lett a valós veszteség.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Idovonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Több módosításnál az időrendi bizonyítás az egyik legerősebb eszközöd lesz.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Schipholnál már most látszik, hogy a csatlakozás elúszott, a teljes érkezés erősen kitolódik vagy
                a légitársaság új útvonalat ad, érdemes korán átnézni az ügyet. A friss bizonyíték itt különösen sokat ér.
              </p>
              <p>
                Minél több a módosítás, annál fontosabb gyorsan összerakni a teljes képet, mielőtt az információk
                elvesznek vagy összekeverednek.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Schipholhoz
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Őrizd meg az airline minden értesítését.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Dokumentáld a költségeket és az átfoglalás sorrendjét.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Schipholnál lekéstem a csatlakozást. Ez erősítheti a claimet?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, főleg ha az egész útvonal egy foglalásban volt és a végső célállomásra emiatt jelentősen késve
                  érkeztél meg.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontos Amszterdamban az átfoglalási idővonal?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert egy nagy hubon az új ajánlatok gyorsan változhatnak. A későbbi claimnél ez megmutathatja, mennyire
                  volt jó vagy rossz a légitársaság tényleges megoldása.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Schipholnál is a végső érkezési idő a legfontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. A végső célállomásra érkezés ideje mutatja meg a teljes utazási veszteséget a legjobban.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
