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

export default function LufthansaKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="Lufthansa kártérítés – késés, törlés, EU261 útmutató [2026]"
        description="Magyar útmutató Lufthansa járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mit tegyél, ha a claim elakad."
        url="https://problemlot.com/hu/blog/lufthansa-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Lufthansa kártérítés – késés, törlés, EU261 útmutató [2026]",
            description:
              "Magyar nyelvű útmutató Lufthansa járatokhoz: mikor lehet szó kártérítésről, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
              "@id": "https://problemlot.com/hu/blog/lufthansa-karterites",
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
                name: "Lufthansa járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Lufthansa járatnál is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a késés vagy törlés megfelel a szabályoknak.",
                },
              },
              {
                "@type": "Question",
                name: "A Lufthansa teljes szolgáltatású modellje jelent automatikus előnyt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem automatikusan. A Lufthansa full-service légitársaság, de a jogosultságot itt sem a márkapozíció, hanem a konkrét útvonal, esemény és az EU261 logikája dönti el.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a Lufthansa nem fizet vagy vitatja az ügyet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor a claim jogi alapját, a végső érkezési késést, a dokumentációt és a légitársaság indoklását kell újra ellenőrizni. A kezdeti elutasítás nem mindig a végső szó.",
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
            <span className="text-slate-900 dark:text-white">Lufthansa</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Lufthansa kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A Lufthansa sok magyar utasnál alapválasztás európai és hosszabb útvonalakon is, ezért gyakori kérdés,
              hogy <strong>mikor járhat kártérítés</strong> késés vagy törlés esetén. A rövid válasz az, hogy igen,
              sok esetben felmerülhet, de nem a márkanév vagy a jegy ára, hanem az <strong>EU261</strong>, a konkrét
              útvonal és a tényleges esemény dönti el a jogosultságot.
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
              <strong>Igen, Lufthansa járatnál is járhat kártérítés.</strong> A döntő kérdés itt is az, hogy a
              járat EU261-es ügy-e, mekkora volt a végső késés, vagy milyen feltételekkel történt a törlés.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A Lufthansa neve önmagában nem garantál és nem zár ki semmit</h2>
            <p className="mb-6 text-blue-100">
              Sokan azt feltételezik, hogy egy nagy, hagyományos légitársaság esetén könnyebb vagy automatikusabb a
              kifizetés. A valóság ennél árnyaltabb: a kulcs itt is az útvonal, az érkezési késés, a törlés részletei
              és az airline indoklása.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Lufthansa ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a Lufthansa claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat az EU261 hatálya alá tartozik.</li>
                <li>Ha a végső érkezés jelentősen csúszott.</li>
                <li>Ha törlésnél külön is vizsgálható a kompenzáció.</li>
                <li>Ha az airline nem tud meggyőző kizáró okot bizonyítani.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet gyengébb vagy vitás?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat nem EU261-es ügy.</li>
                <li>Ha a valós késés nem éri el a kulcsfontosságú küszöböt.</li>
                <li>Ha a bizonyítékok hiányosak.</li>
                <li>Ha az airline részletesen és hihetően vitatja a felelősséget.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Lufthansa és EU261: miért ez az első kérdés?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Lufthansa neve sok utasnál bizalmat kelt, de a claim szempontjából nem ez az első kérdés. A
                vizsgálat mindig ott kezdődik, hogy a konkrét járat hogyan illeszkedik az EU261 rendszerébe.
              </p>
              <p>
                Ha ezt a részt félreértjük, könnyen rossz következtetésre jutunk: vagy túl korán feladjuk az ügyet,
                vagy túl biztosra vesszük a pénzbeli kompenzációt.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mit kell nézni Lufthansa ügyben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Lufthansa késésnél sem elég annyit tudni, hogy a járat később indult. Gyakran a
                <strong> végső érkezés</strong> és az ott elvesztett idő a fontosabb.
              </p>
              <p>
                Ez különösen lényeges csatlakozásos útvonalaknál, ahol egy első szakasz kisebb csúszása a végén már
                komoly teljes késéssé válhat.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire érdemes figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Lufthansa törlés esetén sem csak az a kérdés, hogy kaptál-e másik járatot. A claim szempontjából
                fontos lehet az értesítés időpontja, az alternatív ajánlat minősége és az, hogy mekkora tényleges
                időveszteség keletkezett.
              </p>
              <p>
                Emiatt a törléses ügyek gyakran részletesebb elemzést igényelnek, mint azt az utas elsőre gondolná.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Erkezesi keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim erejét gyakran a végső megérkezésnél elvesztett idő mutatja meg igazán.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Utmod es foglalas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Egyetlen foglalás, csatlakozások és operáló légitársaság mind számíthatnak.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Airline indoklas</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Nem minden elutasítás erős, de nem minden airline-érv gyenge sem. A részletek számítanak.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha a Lufthansa nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Először mindig azt kell ellenőrizni, hogy a claim alapja valóban erős-e: a járat jogi helyzete,
                a végső késés, a törlés ténye és a dokumentáció együtt számít.
              </p>
              <p>
                Sok ügy nem attól gyenge, hogy a Lufthansa elsőre elutasította, hanem attól válik gyengévé, ha az
                utas nem tudja rendszerezni a bizonyítékait és nem látja, pontosan min vitatkozik az airline.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista Lufthansa ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Jegyezd fel a végső érkezési időt, ne csak az indulási csúszást.</li>
              <li>Őrizd meg a foglalási adatokat, emailt és boarding passt.</li>
              <li>Írd le, milyen alternatív járatot ajánlottak fel.</li>
              <li>Nézd meg, hogy egy foglaláson volt-e az egész út.</li>
              <li>Ne kezeld véglegesnek az első sablonelutasítást.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni a Lufthansa ügyedet?</h2>
            <p className="mb-6 text-slate-200">
              Ha a járat késése vagy törlése után nem világos, hogy valóban erős-e a claim, érdemes egy rendezett
              ellenőrzéssel kezdeni, nem találgatással. Így gyorsabban kiderül, van-e reális esély pénzbeli
              kompenzációra.
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
                  Lufthansa járatnál automatikusan jár pénz, ha sokat késett?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem automatikusan. A jelentős késés fontos, de a járat jogi státusza és az airline érvelése is
                  számít.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Lufthansa törlés után a másik járat felajánlása megszünteti a claimet?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. A claim értékeléséhez azt is nézni kell, mikor szóltak, milyen alternatívát adtak,
                  és mekkora végső időveszteség maradt.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Lufthansa ügyben is lehet értelme külső segítséget kérni?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, főleg akkor, ha csatlakozás, összetett útvonal vagy vitatott indoklás miatt az ügy már nem
                  egyszerű, egyenes vonalú claim.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
