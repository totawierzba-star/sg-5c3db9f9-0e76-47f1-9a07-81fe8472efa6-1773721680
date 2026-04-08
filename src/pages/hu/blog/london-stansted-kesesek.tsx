import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Ticket,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function LondonStanstedKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="London Stansted késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha a londoni Stansted repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261, UK261, low-cost útvonalak és bizonyítás témában."
        url="https://problemlot.com/hu/blog/london-stansted-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "London Stansted késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató a londoni Stansted repülőtéren felmerülő késésekhez, törlésekhez, átfoglalásokhoz és EU261/UK261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/london-stansted-kesesek",
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
                name: "Stanstednél is fontos, hogy EU261 vagy UK261 vonatkozik-e rám?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. London Stansted esetén is fontos megnézni, milyen útvonalról és melyik légitársaságról van szó, mert ez befolyásolja, melyik szabályrendszer releváns.",
                },
              },
              {
                "@type": "Question",
                name: "Low-cost járatnál Stanstedről is lehet erős claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A low-cost modell önmagában nem zárja ki a kártérítést. A döntő tényező itt is a szabályi keret, a végső késés és a dokumentáció.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Stanstednél, ha törlik a járatot?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a foglalási adatokat, a boarding passt, a kijelzőről készült képeket, az airline értesítéseit, az új útvonalat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">London Stansted</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              London Stansted késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>London Stansted</strong> sok magyar utasnál inkább low-cost, rövidebb európai útvonalakat jelent.
              Emiatt a késések és törlések itt gyakran praktikus, gyors döntési helyzetet teremtenek: elfogadd-e az új
              ajánlatot, várj-e, vagy kezdj el azonnal mindent dokumentálni egy későbbi claimhez.
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
              <strong>Stanstedről induló low-cost járatnál is lehet erős claim.</strong> A döntő tényező itt sem maga
              a légitársaság típusa, hanem a szabályi keret, a végső késés, az airline reakciója és a megőrzött
              bizonyítékok.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Stanstednél csúszott meg az utad?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járatod késik, törölték vagy új útvonalat ajánlottak, most érdemes gyorsan ellenőrizni, mennyire
              erős lehet a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Stansted járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a Stansted-ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jól azonosítható EU261 vagy UK261 helyzet.</li>
                <li>Egyértelmű végső késés vagy törlés.</li>
                <li>Megőrzött airline üzenetek és kijelzőfotók.</li>
                <li>Dokumentált új útvonal vagy annak hiánya.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti vagy bonyolítja?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Csak az első kijelzett késésre épített értelmezés.</li>
                <li>Hiányzó bizonyíték a módosított indulási időkről.</li>
                <li>Nem megőrzött eredeti és új foglalási adatok.</li>
                <li>Bizonytalan szabályrendszer-értelmezés London miatt.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért más Stansted, mint Heathrow?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Stanstednél sokkal gyakoribbak a rövidebb, egyszerűbb, low-cost útvonalak. Ez azt jelenti, hogy a claim
                megítélése néha kevésbé egy bonyolult csatlakozási láncon, inkább az airline azonnali reakcióján, a
                végső indulási terven és a bizonyítás minőségén múlik.
              </p>
              <p>
                Ettől még a low-cost jelleg nem jelent gyengébb jogi helyzetet. A döntő kérdés itt is az, hogyan néz ki
                a szabályi keret és mekkora lett a tényleges időveszteség.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj Stanstednél késés vagy törlés után?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passt, a foglalási azonosítót, az airline e-mailjeit, a mobilalkalmazásban látható
                módosításokat és a kijelzőről készült képeket. Ha új járatot ajánlanak, annak minden részletét is mentsd el.
              </p>
              <p>
                Stanstednél különösen sokat ér, ha pontosan látszik, hogyan változott az indulási idő és mikor vált
                egy késés ténylegesen törléshez közeli helyzetté.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért fontos itt is a végső késés?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Még egyszerűbb útvonalaknál is előfordulhat, hogy a kapunál látott első adat nem mutatja meg a teljes
                problémát. Ha később új időpont, másik járat vagy másnapi indulás lesz belőle, a tényleges veszteség
                csak a teljes végkimenetből látszik.
              </p>
              <p>
                Emiatt a végső érkezési logika Stanstednél is fontos marad, még ha kevesebb csatlakozás érintett is,
                mint Heathrow esetén.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Ticket className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Low-cost nem kizaras</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A low-cost modell önmagában semmit nem dönt el a claim szempontjából.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Az ügy valódi súlyát sokszor itt látod meg, nem az első kijelzőn.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Minden valtozas szamit</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Stanstednél a többször változó indulási idő fontos bizonyítékká válhat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Stanstednél már most bizonytalan, hogy az airline mikor és hogyan visz tovább, vagy a késésből
                hamar törlésközeli helyzet lett, érdemes gyorsan átnézni az ügyet. A helyzetek itt is gyorsan
                elmosódhatnak, ha nincs rendben a dokumentáció.
              </p>
              <p>
                A korai ellenőrzés fő előnye az, hogy még frissen összeáll a pontos idővonal és a teljes módosítási lánc.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Stanstedhez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Fotózd le a kijelzőt minden fontos változásnál.</li>
              <li>Tartsd meg a boarding passt és a foglalási adatokat.</li>
              <li>Mentsd el az airline összes értesítését.</li>
              <li>Őrizd meg az új indulási vagy átfoglalási részleteket.</li>
              <li>Dokumentáld a költségeket és a végső érkezést.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Stanstedről induló Ryanair vagy más low-cost járatnál is lehet claim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen. A low-cost modell nem zárja ki a kártérítést. A döntő itt is az, hogy milyen szabályrendszer
                  vonatkozik az utadra és mekkora lett a tényleges késés.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontos Stanstednél a kijelzőről készült fotó?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert a többször módosuló indulási idő később fontos bizonyíték lehet arra, hogyan alakult valójában a helyzet.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Stanstednél is a végső érkezés számít?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen. Még egyszerűbb útvonalaknál is a végső eredmény mutatja meg, mekkora lett a tényleges időveszteség.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
