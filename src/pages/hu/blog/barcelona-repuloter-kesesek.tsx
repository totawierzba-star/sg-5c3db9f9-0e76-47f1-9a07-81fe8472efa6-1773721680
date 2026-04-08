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

export default function BarcelonaRepuloterKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Barcelona repülőtér késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha a barcelonai repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, átfoglalásról, végső késésről és költségekről."
        url="https://problemlot.com/hu/blog/barcelona-repuloter-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Barcelona repülőtér késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató a barcelonai repülőtéren felmerülő késésekhez, törlésekhez, átfoglalásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/barcelona-repuloter-kesesek",
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
                name: "Barcelona repülőtéren is a végső érkezés a fontosabb?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen. A claim erejét gyakran az mutatja meg, mennyivel később értél oda végül a célállomásra, nem csak az első indulási csúszás.",
                },
              },
              {
                "@type": "Question",
                name: "Nyaralási útvonalnál Barcelonából is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A nyaralási vagy low-cost jelleg önmagában nem zárja ki a kártérítést. A döntő az EU261 szerinti helyzet, a végső késés és a dokumentáció.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Barcelonában törlés vagy hosszú késés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, a kijelzőfotókat, az eredeti és az új útvonalat, valamint minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Barcelona repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Barcelona repülőtér késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>barcelonai repülőtér</strong> sok magyar utasnál city-break, nyaralási és rövidebb európai
              útvonalak kiindulópontja vagy célállomása. Emiatt a késés vagy törlés itt gyakran gyakorlati kérdéssé
              válik: mennyit veszítettél valójában, milyen új útvonalat kaptál, és mit tudsz később bizonyítani.
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
              <strong>Barcelona repülőtéren is lehet erős claim, ha a teljes időveszteség jelentős.</strong> Nem a
              nyaralási jelleg számít, hanem az, hogy a járat EU261 alá tartozik-e, mekkora lett a végső késés, és
              mennyire jól dokumentáltad a teljes helyzetet.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Barcelonában csúszott meg az utad?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járat késik, törölték vagy az új útvonal gyenge megoldást adott, most érdemes gyorsan megnézni,
              mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Barcelonai járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a barcelonai ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jól látható végső érkezési késés.</li>
                <li>Dokumentált eredeti és új útvonal.</li>
                <li>Megőrzött airline üzenetek és kijelzőfotók.</li>
                <li>Rendezett költségblokkok és idővonal.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti a claimet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Csak az első indulási csúszásra épített következtetés.</li>
                <li>Hiányzó nyom a módosított útvonalról.</li>
                <li>Nem bizonyított költségek.</li>
                <li>Összekevert vagy hiányos idővonal.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért a teljes veszteséget kell nézni Barcelonánál is?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Barcelonánál sok utas hajlamos csak annyit nézni, hogy mennyit késett a gép indulása. A claim
                szempontjából viszont sokszor az a fontosabb, hogy mennyivel később jutottál el oda, ahová tényleg
                menni akartál.
              </p>
              <p>
                Ez különösen igaz akkor, ha az első késésből később új útvonal, másnapi indulás vagy komoly átfoglalás lett.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj Barcelonában?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a PNR-t, az airline értesítéseit, az eredeti és az új útvonal részleteit,
                a kijelzőről készült képeket és minden releváns blokkot. Ha több módosítás is történt, mindegyiket
                külön érdemes menteni.
              </p>
              <p>
                A későbbi claimnél sokszor az dönti el az ügy erejét, hogy mennyire tisztán látszik: mi volt az eredeti
                terv és mennyi lett belőle végül.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért fontos az átfoglalás minősége Barcelona esetén?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a légitársaság új járatot vagy másik útvonalat ad, a kérdés nem csak az, hogy kaptál-e valamilyen
                megoldást, hanem az is, hogy az mennyire mentette meg az utazásodat. Egy gyenge alternatíva nagy plusz
                veszteséget okozhat.
              </p>
              <p>
                Emiatt a barcelonai claimnél is fontos része az elemzésnek, hogy az új terv mennyire volt reális az
                eredeti utazási célhoz képest.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Sun className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Nyaralasi utak</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A vakációs vagy city-break jelleg nem változtat a jogi logikán, ha a járat egyébként megfelel a szabályoknak.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső érkezés ideje mutatja meg legjobban, mekkora lett a tényleges veszteség.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Uj utvonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Az új útvonal minősége sokszor önmagában fontos része az ügy értékelésének.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Barcelonában már most biztos, hogy a végső érkezés jelentősen kitolódik, vagy a felajánlott új
                útvonal gyenge, érdemes gyorsan átnézni az ügyet. A friss dokumentáció itt is sokat számít.
              </p>
              <p>
                Minél több a módosítás, annál fontosabb gyorsan összerakni a teljes történetet, amíg minden adat kéznél van.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Barcelonához
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Őrizd meg az airline minden értesítését.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Dokumentáld a költségeket és az időrendet.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Barcelonánál is a végső célállomás a legfontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. Ez mutatja meg a teljes utazási veszteséget a legjobban.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  A nyaralási útvonal gyengébb claimet jelent?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem. A nyaralási jelleg önmagában semmit nem dönt el, ha az útvonal egyébként megfelel az EU261 logikájának.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért kell Barcelonában is elmenteni az új útvonalat?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert később ebből látszik, mennyire volt jó vagy rossz a légitársaság által adott alternatíva.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
