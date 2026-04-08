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

export default function MunchenRepuloterKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="München repülőtér késések – jogok és teendők [2026]"
        description="Mit tegyél, ha a müncheni repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, csatlakozásról, átfoglalásról és végső késésről."
        url="https://problemlot.com/hu/blog/munchen-repuloter-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "München repülőtér késések – jogok és teendők [2026]",
            description:
              "Magyar útmutató a müncheni repülőtéren felmerülő késésekhez, törlésekhez, csatlakozásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/munchen-repuloter-kesesek",
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
                name: "Münchenben lekésett csatlakozásnál is lehet EU261-claim?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen, főleg ha az egész útvonal egy foglalásban volt, és a végső célállomásra jelentős késéssel értél oda.",
                },
              },
              {
                "@type": "Question",
                name: "Miért különösen fontos Münchenben az átfoglalás minősége?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert egy nagy hubon gyakran több alternatíva is létezik. Később fontos lehet, hogy az airline milyen megoldást ajánlott, és mennyi plusz időveszteséget okozott.",
                },
              },
              {
                "@type": "Question",
                name: "Mit ments el Münchenben késés vagy törlés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passt, a PNR-t, az airline üzeneteit, az új útvonal részleteit, a kijelzőkről készült fotókat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">München repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              München repülőtér késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>müncheni repülőtér</strong> sok magyar utasnál klasszikus átszállási pont. Ez azt jelenti,
              hogy egy késés vagy törlés itt ritkán csak egy járatról szól: gyakran az egész útvonal, a csatlakozás
              és a végső érkezési idő lesz a döntő a későbbi claim szempontjából.
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
              <strong>Münchenben is lehet erős EU261-claim, de a teljes útvonalat kell nézni.</strong> Ha a probléma
              miatt lekésted a csatlakozást vagy gyenge átfoglalást kaptál, a végső célállomásra érkezés ideje gyakran
              fontosabb, mint az első indulási csúszás.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Münchenben esett szét az utazásod?</h2>
            <p className="mb-6 text-blue-100">
              Ha a csatlakozás bizonytalanná vált, új útvonalat kaptál vagy a végső érkezés jelentősen kitolódott,
              most érdemes gyorsan ellenőrizni, mennyire erős lehet a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Müncheni járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a müncheni ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Egy foglalásban lévő teljes útvonal.</li>
                <li>Jelentős végső érkezési késés.</li>
                <li>Jól dokumentált átfoglalási ajánlatok.</li>
                <li>Megőrzött airline üzenetek és költségblokkok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi teszi vitásabbá?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Külön jegyes self-transfer kapcsolat.</li>
                <li>Nem mentett új útvonal vagy módosítás.</li>
                <li>Csak az első szakasz késésére épített értelmezés.</li>
                <li>Bizonyítatlan vagy túlzó költségek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért más München, mint egy egyszerű indulási pont?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                München tipikus hub, ezért a problémák nagy része nem áll meg az első késésnél. Az utas számára
                gyakran a valódi veszteség csak ott látszik meg, amikor kiderül, hogy a csatlakozás elment, az új járat
                későbbi, és a végső célállomásra sokkal később lehet megérkezni.
              </p>
              <p>
                Emiatt itt különösen fontos az egész foglalás logikáját nézni, nem csak az első gate-et.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj Münchenben csatlakozásnál?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Tartsd meg az eredeti és az új útvonalat, mentsd el a boarding passokat, a PNR-t, az airline e-mailjeit
                és az appból érkező módosításokat. Ha a kijelzőn többször is változik az információ, érdemes ezeket
                külön képekkel is megőrizni.
              </p>
              <p>
                Müncheni ügyeknél később sokszor pont az dönti el a vitát, hogy mennyire pontosan látszik az utazás
                újraszervezése.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Miért fontos az átfoglalás minősége?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Egy nagy hubon a légitársaság gyakran több megoldás közül választhat. Ezért később az is fontos lehet,
                hogy milyen új útvonalat ajánlottak, mennyivel lett későbbi az érkezés, és mennyire volt reális az
                alternatíva az eredeti tervhez képest.
              </p>
              <p>
                Nem minden átfoglalás egyforma. A claim erejét sokszor nem az dönti el, hogy kaptál-e másik járatot,
                hanem az, hogy az mennyire mentette meg az utazásodat.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes foglalas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Münchenben a teljes foglalás mutatja meg igazán, mennyi lett a valós utazási veszteség.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A valódi kérdés gyakran nem az, mikor indultál, hanem az, mikor értél célba.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Alternativak</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Egy nagy hubon az ajánlott új útvonal minősége sokkal fontosabb lehet, mint elsőre látszik.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Münchenben már most biztos, hogy a csatlakozás elúszott vagy a felajánlott új járat nagy plusz
                időveszteséget jelent, nem érdemes túl sokat várni az első elemzéssel. A friss dokumentáció itt is
                kulcsfontosságú.
              </p>
              <p>
                Minél összetettebb az új útvonal, annál hasznosabb gyorsan összerakni az egész történetet egy claim
                szempontjából is értelmezhető formába.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Münchenhez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Fotózd le a kijelzőt és a kapuinformációkat.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Őrizd meg az indokolt költségek blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Münchenben lekéstem a csatlakozást. Ez már önmagában sokat számít?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, különösen akkor, ha az egész utazás egy foglalásban volt, és a végső célállomásra emiatt
                  jelentős késéssel értél oda.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontosabb Münchenben az új útvonal, mint egy kisebb reptéren?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert egy nagy hubon a légitársaság gyakran több lehetőség közül választhat. Ezért az ajánlott
                  alternatíva minősége külön súlyt kap a későbbi ügyben.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mit tegyek, ha Münchenben többször átírják az utamat?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Őrizd meg minden módosítás nyomát. A több átfoglalásból álló történet később csak akkor érthető jól,
                  ha időrendben látszik minden változás.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
