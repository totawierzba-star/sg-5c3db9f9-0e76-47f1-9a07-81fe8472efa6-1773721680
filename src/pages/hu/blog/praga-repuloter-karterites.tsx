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

export default function PragaRepuloterKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Prága repülőtér kártérítés – késések és jogok [2026]"
        description="Mit tegyél, ha a prágai repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, átfoglalásról, csatlakozásról és bizonyításról."
        url="https://problemlot.com/hu/blog/praga-repuloter-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Prága repülőtér kártérítés – késések és jogok [2026]",
            description:
              "Magyar útmutató a prágai repülőtéren felmerülő késésekhez, törlésekhez, csatlakozásokhoz és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/praga-repuloter-karterites",
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
                name: "Prágából induló járatnál is számít az EU261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Prága uniós indulási pont, ezért sok járatnál erős az EU261 alapja, ha a végső késés és a konkrét körülmények ezt alátámasztják.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos Prágában is a végső célállomás?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert csatlakozás és átfoglalás esetén nem az első indulási csúszás, hanem a teljes útvonal végső idővesztesége mutatja meg igazán a claim erejét.",
                },
              },
              {
                "@type": "Question",
                name: "Mit ments el, ha Prágában többször változik az indulási idő?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a kijelzőről készült fotókat, az airline üzeneteit, az alkalmazás képernyőképeit, a boarding passt és minden átfoglalási ajánlatot.",
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
            <span className="text-slate-900 dark:text-white">Prága repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Prága repülőtér kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>prágai repülőtér</strong> sok magyar utasnál rövidebb city-break, európai átszállás vagy
              alternatív indulási pont. Emiatt a késés vagy törlés értelmezésénél itt is gyakran a teljes útvonal
              számít, nem csak az, amit az első kijelzőn látsz.
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
              <strong>Prágából induló járatnál is lehet erős kártérítési ügy.</strong> A legfontosabb itt is az, hogy
              a járat EU261 alá tartozik-e, mennyi lett a végső érkezési késés, és mennyire egyértelmű az airline
              kommunikációja és az útvonal későbbi alakulása.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Prágában csúszott szét az utad?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járatod késik, törölték vagy az átfoglalás miatt az egész útvonal bizonytalanná vált, most érdemes
              gyorsan ellenőrizni, milyen erős lehet a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Prágai járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a prágai claimet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Uniós indulási pont Prágából.</li>
                <li>Egy foglalásban lévő útvonal.</li>
                <li>Jól látható végső célállomási késés.</li>
                <li>Elmentett kijelzők, app-üzenetek és átfoglalások.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti az ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Külön jegyen vett továbbutazás.</li>
                <li>Hiányos vagy ellentmondó dokumentáció.</li>
                <li>Csak az első indulási időre épített értelmezés.</li>
                <li>Utólag nem bizonyítható költségek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért fontos Prágánál a teljes utazási lánc?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A prágai indulás sok utasnál európai utazásokhoz vagy továbbszállásokhoz kapcsolódik. Ezért a claim
                megítélésénél sokszor nem maga az első indulási csúszás a döntő, hanem az, hogy mikor értél oda a
                végső célállomásra.
              </p>
              <p>
                Ha a járat késése vagy törlése új útvonalat eredményezett, a teljes időveszteség és az alternatív
                megoldás minősége lesz a fontos kérdés.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj a prágai repülőtéren?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Fotózd le a kijelzőt, mentsd el az app-értesítéseket és az e-maileket, tartsd meg a boarding passt és
                a foglalási azonosítót. Ha több új indulási idő jelenik meg, azt is külön dokumentáld.
              </p>
              <p>
                Prágában a későbbi claim erejét gyakran az határozza meg, hogy mennyire tudod időrendi sorrendben
                bemutatni, mi történt az eredeti járattal és a későbbi átfoglalással.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Csatlakozás és átfoglalás Prágában
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Prágában egy további szakasz is érintett, mindig nézd meg, hogy az egész út egy foglalásban volt-e.
                Ez nagy különbséget jelenthet abban, hogyan kell értelmezni a végső késést és a légitársaság felelősségét.
              </p>
              <p>
                Az sem mindegy, hogy az airline milyen új megoldást adott, mennyivel később értél oda, és mennyire
                volt reális az eredeti utazási cél szempontjából.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Route className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Teljes utvonal</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Prágában is sokszor a teljes foglalás mutatja meg, mennyire erős a későbbi ügy.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Nem csak az számít, mikor indult a gép, hanem az is, mikor értél oda végül.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Bizonyitas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Többszöri módosításnál a képernyőképek és airline üzenetek különösen sokat érnek.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyors claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a prágai repülőtéren már most látszik, hogy a késés több szakaszt érint, vagy az átfoglalás
                jelentős többletidőt okoz, érdemes gyorsan átnézni az ügyet. A friss dokumentáció itt is különösen
                fontos.
              </p>
              <p>
                Minél több a változó indulási idő és az újraszervezett útvonal, annál inkább kell egy helyre rendezni
                a teljes történetet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Prágához
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Fotózd le a kijelzőt és mentsd el az app-értesítéseket.</li>
              <li>Tartsd meg a boarding passt és a PNR-t.</li>
              <li>Őrizd meg az eredeti és az új útvonal részleteit.</li>
              <li>Figyeld a végső célállomásra érkezési időt.</li>
              <li>Dokumentáld az összes releváns költséget.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Prágában késik a járatom. Már most lehet erős ügy?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, ha a késés jelentős végső időveszteséghez vezet, és az útvonal, valamint a dokumentáció is
                  tisztán látszik.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mi fontosabb Prágában: az indulás vagy az érkezés?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Sok esetben az érkezés. A claim erejét gyakran a végső célállomásra való megérkezés ideje mutatja meg.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mit tegyek, ha Prágában többször átírják az indulási időt?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ments el minden változást. Többszöri módosításnál pont ezek a részletek mutatják meg később, hogyan
                  alakult valójában az utazásod.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
