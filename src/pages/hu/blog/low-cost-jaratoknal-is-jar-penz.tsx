import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Plane,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function LowCostJaratoknalIsJarPenz() {
  return (
    <LayoutHu>
      <SEO
        title="Low-cost járatoknál is jár pénz? Wizz Air, Ryanair és más példák [2026]"
        description="Magyar útmutató: fapados járatoknál is járhat-e kártérítés, mikor védi az EU261 a low-cost utast, és mikor nem elég önmagában a járattípus."
        url="https://problemlot.com/hu/blog/low-cost-jaratoknal-is-jar-penz"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Low-cost járatoknál is jár pénz? Wizz Air, Ryanair és más példák [2026]",
            description:
              "Magyar nyelvű útmutató arról, hogy a low-cost vagy fapados járatoknál is járhat-e kártérítés, és miért nem a jegyár vagy a szolgáltatási szint dönti el az EU261-es jogosultságot.",
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
              "@id": "https://problemlot.com/hu/blog/low-cost-jaratoknal-is-jar-penz",
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
                name: "Fapados járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A low-cost vagy fapados jelleg önmagában nem zárja ki a kártérítést. Ha a járat az EU261 hatálya alá tartozik és a feltételek teljesülnek, ugyanúgy lehet pénzbeli igény.",
                },
              },
              {
                "@type": "Question",
                name: "A jegy olcsó volt, ezért kevesebb jár?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem a jegy ára dönti el a kártérítési összeget. Az EU261 szerinti összeg alapvetően a járat kategóriájától és a feltételektől függ, nem attól, mennyit fizettél a jegyért.",
                },
              },
              {
                "@type": "Question",
                name: "Wizz Air és Ryanair esetén is lehet erős ügy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Ezeknél a légitársaságoknál is sok olyan ügy van, ahol a feltételek teljesülése esetén felmerülhet a kártérítés. A kulcs mindig a konkrét tényállás, nem a márkanév önmagában.",
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
            <span className="text-slate-900 dark:text-white">Low-cost járatok</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <BadgeEuro className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Low-cost járatoknál is jár pénz?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Igen, sok esetben igen. A fapados vagy low-cost járat önmagában nem zárja ki a pénzbeli
              kártérítést. Az számít, hogy a járat az <strong>EU261</strong> hatálya alá tartozik-e, mekkora
              volt a végső késés vagy milyen típusú probléma történt, és van-e olyan kizáró körülmény, amelyre
              a légitársaság valóban hivatkozhat.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
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
              <strong>Igen, járhat.</strong> A low-cost státusz nem fosztja meg az utast az EU261 szerinti
              jogoktól. A jegyár, a fedélzeti szolgáltatás szintje vagy az, hogy „fapadosról” van szó,
              önmagában nem dönti el a jogosultságot.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Az olcsó jegy nem jelenti azt, hogy kevesebb jogod van</h2>
            <p className="mb-6 text-blue-100">
              Ez az egyik leggyakoribb tévhit. Az utasok sokszor azt hiszik, hogy ha nagyon olcsó volt a jegy,
              akkor a légitársaság „úgysem fizet”. Valójában az EU261 nem a jegy árát nézi, hanem a járat és a
              probléma jogi minősítését.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Low-cost járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet ugyanúgy erős az ügy?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat EU261-es ügynek minősül.</li>
                <li>Ha a végső érkezési késés eléri a releváns küszöböt.</li>
                <li>Ha törlés, túlfoglalás vagy más erős utasjogi esemény történt.</li>
                <li>Ha nincs sikeresen bizonyított rendkívüli körülmény.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor félrevezető a „fapados” szó?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha az utas a márkanévből próbál következtetni a jogokra.</li>
                <li>Ha a jegy árát keveri össze a kártérítés összegével.</li>
                <li>Ha minden low-cost ügyet automatikusan gyengének gondol.</li>
                <li>Ha nem a konkrét járati körülményeket vizsgálja.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miért nem a jegyár számít?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert az EU261 szerinti kompenzáció nem ár-visszatérítés logikán működik. Ez nem arról szól,
                hogy mennyit fizettél a jegyért, hanem arról, hogy egy jogilag releváns járatprobléma
                mekkora sérelmet okozott az utazási tervben.
              </p>
              <p>
                Emiatt fordulhat elő, hogy egy nagyon olcsó jeggyel utazó utas is komolyabb összegű igénnyel
                találkozik, miközben egy drágább jegy sem garantál automatikusan semmit, ha a jogi alap gyenge.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Wizz Air, Ryanair, Pegasus: ugyanaz a logika?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Alapvetően igen: nem a „low-cost” címke dönti el a kérdést. A döntő mindig a konkrét útvonal,
                a járat jogi besorolása, a késés vagy törlés ténye, valamint az, hogy milyen okkal próbálja
                a légitársaság kizárni a felelősséget.
              </p>
              <p>
                Ez azt jelenti, hogy Wizz Airnél vagy Ryanairnél ugyanúgy lehet erős ügy, mint bármely nagyobb
                hálózatos légitársaságnál. A márkanév önmagában nem pozitív vagy negatív döntő tényező.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor nem elég az, hogy low-cost járat volt?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ha a járat eleve nem tartozik az EU261 hatálya alá, vagy ha a légitársaság valós kizáró
                körülményt tud bizonyítani, a fapados jelleg semmit nem változtat a lényegen. Ugyanígy:
                a járat olcsósága sem teszi automatikusan erőssé az ügyet.
              </p>
              <p>
                A jó kérdés mindig ez: a konkrét járat és a konkrét esemény megfelel-e az EU261 feltételeinek?
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Gyakori példák</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Wizz Air európai járat nagy késéssel
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ha az ügy EU261-es és a végső késés elég nagy, ugyanúgy felmerülhet a pénzbeli igény, mint
                  bármely másik érintett légitársaságnál.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Olcsó jegy, de komoly törlés
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Attól, hogy a jegy nagyon olcsó volt, a törlés még lehet erős utasjogi ügy refunddal,
                  átfoglalással és adott esetben kompenzációval együtt.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha low-cost járattal volt problémád, ne abból indulj ki, hogy „fapados, úgysem jár semmi”.
              Előbb azt kell ellenőrizni, hogy a konkrét útvonal és a konkrét esemény megfelel-e az EU261
              feltételeinek.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Jogosultság ellenőrzése most
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Fapados járatnál is járhat kártérítés?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, ha a járat EU261 alá tartozik és a többi feltétel is teljesül.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Az olcsó jegy miatt kevesebb pénz jár?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem a jegyár dönti el a kompenzáció összegét.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Wizz Airnél vagy Ryanairnél is lehet sikeres ügy?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, a konkrét tényállástól függően teljesen lehet.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jár kártérítés késés esetén?
              </Link>
              <Link href="/hu/blog/mennyi-karterites-jar-3-oras-kesesert" className="block hover:underline">
                Mennyi kártérítés jár 3 órás késésért?
              </Link>
              <Link href="/hu/blog/mely-legitarsagok-kotelesek-fizetni" className="block hover:underline">
                Mely légitársaságok kötelesek fizetni?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
