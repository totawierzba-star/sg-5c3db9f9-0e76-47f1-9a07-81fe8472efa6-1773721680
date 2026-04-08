import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe,
  MapPin,
  Plane,
  Route,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function IsztambulRepuloterKesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Isztambul repülőtér késések – jogok és kártérítés [2026]"
        description="Mit tegyél, ha Isztambul repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 hatályról, csatlakozásról, átfoglalásról és végső késésről."
        url="https://problemlot.com/hu/blog/isztambul-repuloter-kesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Isztambul repülőtér késések – jogok és kártérítés [2026]",
            description:
              "Magyar útmutató az isztambuli repülőtéren felmerülő késésekhez, törlésekhez, csatlakozásokhoz és az EU261 hatályának értelmezéséhez.",
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
              "@id": "https://problemlot.com/hu/blog/isztambul-repuloter-kesesek",
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
                name: "Isztambul repülőtéren késő járatnál automatikusan járhat EU261 kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem automatikusan. Isztambulnál különösen fontos megnézni, honnan indult az útvonal, melyik légitársaság üzemeltette a járatot, és hogy a konkrét helyzet egyáltalán EU261 alá tartozik-e.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos Isztambulnál a teljes útvonal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert az isztambuli ügyek gyakran csatlakozó vagy hosszabb útvonalakhoz kapcsolódnak. A végső célállomásra érkezési késés és az útvonal szerkezete sokszor fontosabb, mint maga az első csúszás.",
                },
              },
              {
                "@type": "Question",
                name: "Mit dokumentáljak Isztambulban késés vagy törlés után?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a boarding passokat, a PNR-t, az airline üzeneteit, az eredeti és az új útvonalat, a kijelzőfotókat és minden releváns költség blokkot.",
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
            <span className="text-slate-900 dark:text-white">Isztambul repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Isztambul repülőtér késések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az <strong>isztambuli repülőtér</strong> sok magyar utasnál hosszabb útvonalak, átszállások és EU-n kívüli
              kapcsolatok csomópontja. Emiatt a késés vagy törlés értékelésénél itt nem elég azt nézni, mi történt a
              terminálon: először azt kell tisztázni, hogy a konkrét helyzet egyáltalán
              <strong> EU261 alá tartozik-e</strong>, és csak utána lehet a claim erejét érdemben mérlegelni.
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
              <strong>Isztambulnál először mindig a jogi keretet kell tisztázni.</strong> A claim erejét itt nem csak
              a késés vagy törlés mértéke dönti el, hanem az is, hogy az útvonal és a légitársaság alapján egyáltalán
              alkalmazható-e az `EU261`, illetve mekkora lett a végső érkezési veszteség.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Isztambulban csúszott szét az utazásod?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járat késik, törölték vagy a csatlakozás elveszett, most érdemes gyorsan ellenőrizni, hogy az ügy
              egyáltalán beleesik-e az uniós logikába, és mennyire lehet erős a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Isztambuli járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti az isztambuli ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Jól azonosítható EU261-hatály.</li>
                <li>Jelentős végső érkezési késés.</li>
                <li>Dokumentált eredeti és új útvonal.</li>
                <li>Megőrzött airline kommunikáció és költségblokkok.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi teszi gyengébbé vagy vitásabbá?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nem egyértelmű EU261-hatály.</li>
                <li>Csak a helyszíni káoszra épített következtetés.</li>
                <li>Hiányzó nyom az új útvonalról.</li>
                <li>Nem bizonyított végső időveszteség.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért más Isztambul, mint egy klasszikus EU-s hub?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Isztambulnál a legnagyobb hiba az, ha valaki automatikusan ugyanazt a logikát feltételezi, mint egy
                uniós indulási pontnál. Itt először mindig azt kell megnézni, hogy az útvonal, a járat és a légitársaság
                alapján az ügy egyáltalán beleesik-e az uniós szabályok körébe.
              </p>
              <p>
                Csak ezután érdemes a késés, az átfoglalás és a végső érkezés erősségét elemezni.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Miért fontos Isztambulnál a teljes útvonal?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az isztambuli ügyek gyakran hosszabb, több szakaszból álló utazásokhoz kapcsolódnak. Emiatt a valódi
                veszteség sokszor nem az első késésben, hanem a végső célállomásra érkezés idejében látszik.
              </p>
              <p>
                Ha a teljes útvonal egy foglalásban volt, ez különösen fontos lehet a claim szempontjából.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit dokumentálj Isztambulban?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Őrizd meg a boarding passokat, a PNR-t, az airline e-mailjeit és app-üzeneteit, az eredeti és az új
                útvonalat, valamint a kijelzőről készült fotókat. Ha több módosítás történt, mindegyiket külön mentsd el.
              </p>
              <p>
                Isztambulnál a későbbi claim erejét gyakran az dönti el, hogy mennyire tisztán látszik a teljes útvonal
                és a végső veszteség.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Globe className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Hatály kerdes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Isztambulnál ez az első és legfontosabb kérdés: tényleg működik-e itt az EU261.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes utvonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A teljes útvonal szerkezete sokszor fontosabb, mint maga az első késés.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A végső célállomásra érkezés mutatja meg, mekkora lett a tényleges veszteség.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Isztambulban már most látszik, hogy a csatlakozás elveszett, az új útvonal gyenge, vagy a végső
                érkezés jelentősen kitolódik, érdemes gyorsan átnézni az ügyet. A frissen mentett részletek különösen
                sokat érnek.
              </p>
              <p>
                Itt azért is fontos a gyors ellenőrzés, mert sok ügy első kérdése nem az, mennyi járhat, hanem az,
                hogy egyáltalán melyik jogi logika szerint kell gondolkodni.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Isztambulhoz
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Tisztázd, hogy az útvonal egyáltalán EU261 alá tartozik-e.</li>
              <li>Mentsd el az eredeti és az új útvonalat.</li>
              <li>Tartsd meg a boarding passokat és a PNR-t.</li>
              <li>Őrizd meg az airline minden értesítését.</li>
              <li>Figyeld a végső célállomásra érkezési időt és dokumentáld a költségeket.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Isztambulnál automatikusan működik az EU261?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem. Ezt minden ügyben külön meg kell nézni az útvonal, az airline és az indulási pont alapján.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontos itt jobban a jogi keret, mint más reptereknél?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert Isztambul sok EU-n kívüli kapcsolatot érint, ezért nem minden ügy értelmezhető automatikusan az uniós szabályok szerint.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Isztambulnál is a végső célállomás a legfontosabb?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben igen. A végső érkezés mutatja meg a teljes időveszteséget a legjobban.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
