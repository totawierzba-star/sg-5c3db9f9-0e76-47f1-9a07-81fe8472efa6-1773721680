import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Receipt,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function BudapestLisztFerencRepuloterKesesekEsJogok() {
  return (
    <LayoutHu>
      <SEO
        title="Budapest Liszt Ferenc repülőtér késések és jogok [2026]"
        description="Mit tegyél, ha késik vagy törlik a járatodat Budapesten? Magyar útmutató a Budapest Liszt Ferenc repülőtéren felmerülő EU261 jogokról, költségekről és bizonyításról."
        url="https://problemlot.com/hu/blog/budapest-liszt-ferenc-repuloter-kesesek-es-jogok"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Budapest Liszt Ferenc repülőtér késések és jogok [2026]",
            description:
              "Magyar útmutató a Budapest Liszt Ferenc repülőtéren felmerülő járatkésésekhez, törlésekhez, költségekhez és EU261 jogokhoz.",
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
              "@id": "https://problemlot.com/hu/blog/budapest-liszt-ferenc-repuloter-kesesek-es-jogok",
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
                name: "Ha a budapesti repülőtéren késik a járatom, automatikusan jár kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem automatikusan. A claim attól függ, hogy a járat az EU261 hatálya alá tartozik-e, mekkora a végső érkezési késés, és mi okozta a problémát.",
                },
              },
              {
                "@type": "Question",
                name: "Mit őrizzek meg Budapesten, ha hosszú késés vagy törlés történik?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Őrizd meg a beszállókártyát, a foglalási adatokat, a repülőtéri kijelzőről készült fotókat, az airline üzeneteit és minden releváns blokkot ételről, italról, taxiról vagy szállásról.",
                },
              },
              {
                "@type": "Question",
                name: "Budapestről induló nem uniós légitársaság járatára is érvényes lehet az EU261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Ha a járat Budapestről, vagyis EU repülőtérről indul, az EU261 sok esetben akkor is alkalmazható, ha a légitársaság nem uniós.",
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
            <span className="text-slate-900 dark:text-white">Budapest repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Budapest Liszt Ferenc repülőtér késések és jogok
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ha a <strong>Budapest Liszt Ferenc repülőtéren</strong> ragadsz késés vagy törlés miatt, a legfontosabb
              kérdés nem az, hogy mennyit csúszott a kijelzőn az indulás, hanem az, hogy milyen jogi helyzetbe került
              az utazásod, mit kell azonnal dokumentálni, és milyen költségeket lehet később érvényesíteni.
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
              <strong>Budapestről induló járatnál gyakran erős lehet az EU261-védelem.</strong> A claim erejét azonban
              mindig a végső érkezési késés, a járat útvonala, a tényleges zavar típusa és a megőrzött bizonyítékok
              együtt döntik el.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Budapesten ragadtál késés vagy törlés miatt?</h2>
            <p className="mb-6 text-blue-100">
              Ha a járatod már most csúszik, átfoglalásra vársz vagy a helyszínen gyűjtöd a bizonyítékokat, érdemes
              azonnal ellenőrizni, hogy a helyzetedből lehet-e erős claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Budapest indulás ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a budapesti claimet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Az indulás EU repülőtérről történik.</li>
                <li>Jól látszik a végső érkezési késés.</li>
                <li>Megvannak az airline üzenetei és a blokkok.</li>
                <li>Az utazás logikája egyértelműen rekonstruálható.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti vagy bonyolítja?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Hiányzó foglalási és repülőtéri bizonyítékok.</li>
                <li>Csak a kijelzőn látott indulási csúszásra épülő claim.</li>
                <li>Külön jegyen vett self-transfer kapcsolat.</li>
                <li>Bizonytalan vagy ellentmondásos airline kommunikáció.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért különösen fontos a budapesti indulás?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A Budapest Liszt Ferenc repülőtér uniós repülőtér, ezért a <strong>Budapestről induló</strong> járatok
                sokszor erősebb kiinduló helyzetet adnak az EU261 szempontjából. Ez különösen fontos akkor, ha a
                légitársaság nem uniós, de az indulás mégis az EU területéről történik.
              </p>
              <p>
                Ettől még a claim nem automatikus, de a budapesti indulási pont önmagában sok utasnál kedvezőbb
                jogi keretet teremt, mint egy EU-n kívüli start.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit csinálj azonnal a terminálon?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Fotózd le a kijelzőt, mentsd el az alkalmazásban vagy e-mailben kapott üzeneteket, és tartsd meg a
                beszállókártyát, a foglalási számot és minden alternatív ajánlatot. Ha az airline ételt, italt,
                szállást vagy átfoglalást ajánl, azt is dokumentáld.
              </p>
              <p>
                Ha saját zsebből fizetsz valamiért, csak a ténylegesen indokolható költségeket vállald, és a blokkot
                azonnal tedd félre. Később pont ez választja el a jó claimet a gyengétől.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Késés, törlés vagy lekésett csatlakozás Budapestről
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A repülőtéri élmény hasonló lehet, de jogilag nagy különbség van aközött, hogy a járat egyszerűen
                késik, törlik, vagy a késés miatt egy további szakasz dől el. A budapesti indulásnál sokszor a
                teljes utazási láncot kell nézni, nem csak az első gépet.
              </p>
              <p>
                Ha az utazás egy foglalásban volt, a végső célállomásra való érkezés sokkal fontosabb lehet, mint
                maga az első indulási késés.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim valódi erejét gyakran az mutatja meg, mikor értél oda a végső célállomásra.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Receipt className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Blokkok es uzenetek</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A budapesti helyszíni költségek és airline-kommunikáció megőrzése sokat számít a későbbi vitában.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Kulon jegyek</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Self-transfer esetén a budapesti indulás önmagában nem old meg minden későbbi csatlakozási vitát.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor lehet költségtérítésről is szó?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Budapesten hosszú várakozás, éjszakázás vagy átfoglalás miatt tényleges kiadásod keletkezik, a
                megfelelően dokumentált, indokolt költségek külön is fontossá válhatnak. Itt a mértékletesség és a
                jó bizonyítás a kulcs.
              </p>
              <p>
                A blokk nélküli költség sokkal nehezebben érvényesíthető, mint az, amelyikhez pontos idő, hely és
                összeg is társul.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista budapesti késéshez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Fotózd le a kijelzőt és az új indulási időt.</li>
              <li>Mentsd el az airline összes e-mailjét és app-értesítését.</li>
              <li>Tartsd meg a boarding passt és a PNR-t.</li>
              <li>Őrizd meg az indokolt költségek blokkjait.</li>
              <li>Nézd a végső célállomásra érkezési időt, ne csak a felszállást.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              GYIK
            </h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ha Budapestről indult a járat, az már elég a kártérítéshez?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem elég önmagában, de nagyon fontos kiindulópont. Emellett nézni kell a végső késést, a zavar
                  típusát és azt is, milyen dokumentumok maradtak meg.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Budapesten vett étel vagy taxi blokkja számíthat?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen, ha a költség indokolt és jól dokumentált. A blokk önmagában még nem minden, de nélküle jóval
                  nehezebb később bármit bizonyítani.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Mi van, ha Budapestről indultam, de Isztambulban vagy máshol csúszott szét a csatlakozás?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Ilyenkor gyakran az egész útvonalat kell nézni. Ha minden egy foglalásban volt, a végső célállomásra
                  érkezés sokkal fontosabb lehet, mint maga az első szakasz.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
