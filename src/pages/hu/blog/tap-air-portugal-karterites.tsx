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

export default function TapAirPortugalKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="TAP Air Portugal kártérítés – késés, törlés, EU261 [2026]"
        description="Magyar útmutató TAP Air Portugal járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mire figyelj claimnél."
        url="https://problemlot.com/hu/blog/tap-air-portugal-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "TAP Air Portugal kártérítés – késés, törlés, EU261 [2026]",
            description:
              "Magyar nyelvű útmutató TAP Air Portugal járatokhoz: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
              "@id": "https://problemlot.com/hu/blog/tap-air-portugal-karterites",
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
                name: "TAP Air Portugal járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A TAP Air Portugal járatainál is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a késés vagy törlés megfelel a szabályoknak.",
                },
              },
              {
                "@type": "Question",
                name: "Miért fontos a lisszaboni csatlakozás TAP ügyben?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok TAP ügy csatlakozásos útvonal, ezért a claimnél gyakran a végső célállomásra való érkezési késés és az egy foglalás kérdése lesz a legfontosabb.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a TAP nem válaszol vagy elutasítja a claimet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor újra kell nézni az útvonalat, a végső késést, a csatlakozási logikát és a dokumentációt. Az első airline-válasz nem mindig végleges értékelés.",
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
            <span className="text-slate-900 dark:text-white">TAP Air Portugal</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              TAP Air Portugal kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A TAP Air Portugal sok magyar utasnál jelenik meg portugáliai, atlanti és hosszabb csatlakozásos
              útvonalaknál, ezért gyakori kérdés, hogy <strong>mikor járhat kártérítés</strong> késés vagy törlés
              esetén. A rövid válasz az, hogy igen, sok esetben felmerülhet, de a döntést itt is az
              <strong> EU261</strong>, a konkrét útvonal és a végső érkezési helyzet határozza meg.
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
              <strong>Igen, TAP Air Portugal járatnál is járhat kártérítés.</strong> A claim erejét az dönti el,
              hogy a járat az EU261 alá tartozik-e, mekkora lett a végső késés, és hogyan hatott a probléma a teljes
              útvonalra.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Lisszaboni csatlakozásnál a teljes út logikája a kulcs</h2>
            <p className="mb-6 text-blue-100">
              A TAP ügyeinél sokszor nem az első szakasz a legfontosabb, hanem az, hogy mi történt az egész útvonal
              végén. Ha egy lisszaboni csatlakozás miatt csúszik meg az egész út, az a claim erejét is jelentősen
              befolyásolhatja.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              TAP ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a TAP claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU261 alá tartozik.</li>
                <li>Ha a végső célállomásra jelentős késéssel érkezel.</li>
                <li>Ha a csatlakozás egy foglaláson volt.</li>
                <li>Ha az airline nem bizonyít meggyőző kizáró okot.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb vagy vitás?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a jogi alap nem elég tiszta.</li>
                <li>Ha a végső késés túl alacsony marad.</li>
                <li>Ha a csatlakozás külön foglaláson volt.</li>
                <li>Ha a dokumentáció hiányos vagy pontatlan.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. TAP és EU261: miért kell az egész útvonalat nézni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A TAP Air Portugal gyakran csatlakozásos és hosszabb útvonalakban jelenik meg, ezért a claim
                értékelésénél sokszor nem elég csak az első szakaszt nézni. A teljes utazási lánc mutatja meg,
                mennyire lett valóban súlyos a probléma.
              </p>
              <p>
                Emiatt TAP ügyben különösen fontos a végső érkezési idő és az egész booking szerkezete.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mit kell nézni TAP járatnál?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A TAP járatoknál is gyakran a <strong>végső célállomásra</strong> való érkezés a döntő, nem pusztán
                az indulási csúszás vagy az első szakasz eltérése.
              </p>
              <p>
                Ez különösen fontos lisszaboni átszállásoknál, ahol egy kisebb első zavar is komoly végső késéssé
                válhat.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire kell figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                TAP törlés esetén sem elég annyit nézni, hogy kaptál-e új útvonalat. A claimnél az is számít, mikor
                tájékoztattak, milyen alternatívát ajánlottak, és mekkora lett a teljes útvonal végső idővesztesége.
              </p>
              <p>
                Hosszabb távú és atlanti útvonalaknál ez különösen fontos, mert a pótlólagos megoldás akár jelentős
                eltérést is okozhat az eredeti tervhez képest.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Ez mutatja meg, mekkora lett a valós utazási veszteség az út végén.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Lisszaboni csatlakozas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Sok TAP claimnél ez az a pont, ahol a kisebb probléma már komoly végső késést okoz.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Dokumentacio</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A rendezett bizonyíték sokszor többet számít, mint az első airline-válasz hangneme.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha a TAP nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor érdemes újra összerakni az egész ügyet: foglalás, útvonal, csatlakozás, végső érkezés,
                emailes értesítések és minden megőrzött dokumentum számít.
              </p>
              <p>
                Sok claim nem attól gyenge, hogy a TAP vitatja, hanem attól, hogy az utas nem mutatja be elég pontosan
                a teljes késési vagy törlési láncot.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista TAP ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Jegyezd fel a végső célállomásra való érkezés pontos idejét.</li>
              <li>Nézd meg, hogy a teljes út egy foglaláson volt-e.</li>
              <li>Őrizd meg a lisszaboni csatlakozással kapcsolatos értesítéseket.</li>
              <li>Dokumentáld az alternatív útvonalat vagy átfoglalást.</li>
              <li>Ne csak az első szakaszt nézd, hanem a teljes utazást.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni a TAP ügyedet?</h2>
            <p className="mb-6 text-slate-200">
              Ha késés, törlés vagy csatlakozási gond miatt bizonytalan vagy, érdemes rendezett ellenőrzéssel kezdeni.
              Így gyorsan kiderül, mennyire erős a claim és van-e reális esély pénzbeli kompenzációra.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              ClaimWinger megnyitása
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  TAP ügyben a lisszaboni csatlakozás különösen fontos?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen. Sok claimnél éppen ez dönti el, mekkora lett a teljes útvonal végső késése.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  TAP törlésnél az új útvonal automatikusan lezárja a claimet?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. Továbbra is számít, mennyire változott meg a teljes utazás és mekkora lett a végső
                  időveszteség.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Érdemes segítséget kérni TAP claimnél?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, főleg csatlakozásos és hosszabb távú vitatott ügyeknél, ahol a teljes út logikáját kell
                  pontosan bemutatni.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
