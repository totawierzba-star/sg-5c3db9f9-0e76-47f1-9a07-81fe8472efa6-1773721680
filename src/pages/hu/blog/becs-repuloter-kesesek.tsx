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

export default function BecsRepuloterKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Bécs repülőtér késések – jogok és teendők [2026]"
        description="Mit tegyél, ha a bécsi repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, csatlakozásokról, átfoglalásról és költségekről."
        url="https://problemlot.com/hu/blog/becs-repuloter-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Bécs repülőtér késések – jogok és teendők [2026]",
            description:
              "Magyar útmutató a bécsi repülőtéren felmerülő járatkésésekhez, törlésekhez, csatlakozásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/becs-repuloter-kesesek",
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
                name: "Ha Bécsben késik a járatom, számíthat a csatlakozás is?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Bécsben sok utas csatlakozó vagy átszállásos útvonalon utazik, ezért a végső célállomásra érkezési késés gyakran fontosabb, mint az első szakasz csúszása.",
                },
              },
              {
                "@type": "Question",
                name: "Bécsből induló járatnál is alkalmazható az EU261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Mivel Bécs uniós repülőtér, sok innen induló járat erős kiindulópontot ad EU261-elemzéshez, függetlenül attól, hogy az airline uniós vagy nem uniós.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Bécsben, ha átfoglalnak?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg az eredeti jegyet, az új útvonalat, az airline értesítéseit, a kijelzőről készült képeket és minden költség blokkot. Átfoglalásnál a teljes időveszteség különösen fontos.",
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
            <span className="text-slate-900 dark:text-white">Bécs repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Bécs repülőtér késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>bécsi repülőtéren</strong> a késés vagy törlés sokszor nem csak egy helyi kellemetlenség,
              hanem egy teljes útvonal problémája. Itt különösen gyakoriak a csatlakozások, az átfoglalások és azok
              a helyzetek, ahol a <strong>végső célállomásra érkezés</strong> többet mond a claimről, mint az első
              kapunál látott csúszás.
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
              <strong>Bécsből induló vagy Bécsen átmenő útvonalnál is lehet erős EU261-claim.</strong> A legfontosabb
              kérdés itt gyakran az, hogy egy foglalásban utaztál-e, mennyi lett a teljes időveszteség, és mennyire
              volt valós az airline által kínált alternatíva.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Bécsben akadt meg az utad?</h2>
            <p className="mb-6 text-blue-100">
              Ha csatlakozást vesztettél, új útvonalat kaptál vagy órákra bizonytalanná vált az indulás, most érdemes
              gyorsan megnézni, mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Bécsi járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a bécsi ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Uniós indulás vagy erős EU261-kapcsolat.</li>
                <li>Egy foglalásban vett csatlakozó útvonal.</li>
                <li>Jól látszó végső érkezési késés.</li>
                <li>Megőrzött átfoglalási és kommunikációs nyomok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi teszi vitásabbá?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Külön jegyen vett self-transfer kapcsolat.</li>
                <li>Hiányzó adatok az átfoglalásról.</li>
                <li>Csak az első szakasz csúszására épített értelmezés.</li>
                <li>Olyan költségek, amelyekhez nincs blokk vagy indoklás.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért különösen fontos Bécsben a teljes útvonal?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Bécs sok magyar utasnál nem végállomás, hanem csatlakozási pont. Emiatt a claim vizsgálatánál gyakran
                nem az az egyetlen kérdés, hogy hány percet késett az indulás, hanem az, hogy mikor értél oda a
                <strong> végső célállomásra</strong>.
              </p>
              <p>
                Ha az egész útvonal egy foglalásban volt, a bécsi probléma az egész utazást átírhatja, és pont ez
                teszi erőssé vagy gyengévé a későbbi igényt.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj Bécsben átfoglalásnál?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg az eredeti és az új útvonalat, fotózd le a kijelzőt, mentsd el az airline e-mailjeit és az
                appban megjelent új indulási időket. Ha több alternatívát kaptál, az is fontos bizonyíték lehet.
              </p>
              <p>
                Bécsben sok ügy azon dől el, hogy mennyire volt valódi az airline által kínált megoldás, és mennyi
                plusz időveszteséget okozott összesen.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Költségek, hotel és hosszú várakozás
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a bécsi helyzet miatt ételre, italra, hotelre vagy helyi közlekedésre költesz, a későbbi ügyben
                az indokoltság és a dokumentáltság lesz a döntő. A blokk, az időpont és a helyszín együtt sokkal erősebb,
                mint egy utólagos összefoglaló.
              </p>
              <p>
                A túlzó vagy nehezen indokolható kiadás viszont könnyebben vitatható, ezért itt is a mértékletesség
                a legjobb stratégia.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Egy foglalas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Bécsi csatlakozásnál ez az egyik legfontosabb részlet az egész claim megítélésében.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A teljes időveszteség sokkal többet mond, mint az első gate-nél látott késés.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Athfoglalasi minoseg</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Nem csak az számít, hogy kaptál-e másik járatot, hanem az is, mennyit veszítettél vele.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes rögtön claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Bécsben már most látszik, hogy az eredeti útvonal szétesett, a csatlakozás elveszett vagy az új
                járat jelentős többletidőt okoz, érdemes gyorsan átnézni az ügyet. A friss dokumentáció itt különösen
                sokat számít.
              </p>
              <p>
                Minél több az átfoglalás, annál inkább kell egy helyre rendezni az eredeti és az új utazási tervet,
                mert később ez lesz a vita központja.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Bécshez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Fotózd le a kijelzőt és az új indulási időket.</li>
              <li>Tartsd meg az airline összes üzenetét és boarding passát.</li>
              <li>Figyeld a végső érkezési időt, ne csak az első szakaszt.</li>
              <li>Őrizd meg a hotel, taxi és étkezés blokkjaidat.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bécsben lekéstem a csatlakozást. Ez automatikusan erős claim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem automatikusan, de ha az út egy foglalásban volt és a végső célállomásra jelentős késéssel értél
                  oda, az sokszor erős kiindulópont.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Bécsből induló nem uniós airline járatára is lehet EU261?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, mert az indulási pont uniós repülőtér. Ez önmagában nem dönt el mindent, de erős alap a
                  jogi elemzéshez.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mit tegyek, ha többször is átfoglalnak Bécsben?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ments el minden verziót. Több új útvonalnál később különösen fontos lesz látni, melyik ajánlat mikor
                  érkezett és mennyi plusz időveszteséget okozott.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
