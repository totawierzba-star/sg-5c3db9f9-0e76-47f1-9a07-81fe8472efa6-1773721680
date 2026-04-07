import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  Plane,
  ShieldAlert,
  Users,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MelyLegitarsasagokKotelesekFizetni() {
  return (
    <LayoutHu>
      <SEO
        title="Mely legitarsasagok kotelesek fizetni? EU-s es nem EU-s cegek szabalyai [2026]"
        description="Magyar utmutato ahhoz, mely legitarsasagoknal johet szoba EU261 szerinti karterites: mikor eleg az EU-bol valo indulas, mikor szamit a tenyleges uzemelteto, es miert nem eleg csak a brandet nezni."
        url="https://problemlot.com/hu/blog/mely-legitarsasagok-kotelesek-fizetni"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mely legitarsasagok kotelesek fizetni? EU-s es nem EU-s cegek szabalyai [2026]",
            description:
              "Magyar nyelvu attekintes arrol, mikor koteles egy legitarsasag EU261 szerint fizetni, hogyan szamit az EU-s vagy nem EU-s uzemelteto, es miert a tenyleges carrier a kulcs sok vitaban.",
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
              "@id": "https://problemlot.com/hu/blog/mely-legitarsasagok-kotelesek-fizetni",
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
                name: "Csak EU-s legitarsasag fizethet EU261 alapjan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Sok nem EU-s legitarsasag altal uzemeltetett jarat is EU261-es lehet, ha a jarat EU-s repuloterrol indul.",
                },
              },
              {
                "@type": "Question",
                name: "EU-ba erkezo jaratnal miert fontos a tenyleges uzemelteto?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mert az EU-n kivulrol az EU-ba erkezo jaratoknal sokszor pont az donti el az EU261 alkalmazhatosagat, hogy a gepet EU-s vagy nem EU-s legifuvarozo uzemelteti.",
                },
              },
              {
                "@type": "Question",
                name: "Mindig az a ceg felel, amelyiknek a neve a jegyen szerepel?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltetlen. Codeshare vagy wet lease helyzetben kulonosen fontos lehet, hogy ki volt a tenyleges uzemelteto, nem csak az, hogy milyen brand alatt adtak el a jegyet.",
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
            <span className="text-slate-900 dark:text-white">Mely legitarsasag fizet?</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Building2 className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mely legitarsasagok kotelesek fizetni?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az egyik leggyakoribb tevhit az, hogy csak EU-s legitarsasagok fizethetnek EU261 szerint.
              A valosag bonyolultabb: van, amikor egy nem EU-s ceg is teljesen EU261-es ugyben szerepel, es
              van, amikor pont az uzemelteto szarmazasa donti el, hogy egyaltalan van-e vedelmed.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A lenyeg roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Nem az a fo kerdes, hogy a legitarsasag „europai-e”, hanem az, hogy az adott jarat milyen
              utvonalon ment, honnan indult, hova erkezett, es ki volt a tenyleges uzemelteto. Ez kulonosen
              fontos az EU-n kivuli indulopontoknal es a codeshare helyzetekben.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor johet szoba fizetesi kotelezettseg?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a jarat EU-s repuloterrol indul, akar nem EU-s legitarsasaggal is.</li>
                <li>Ha a jarat EU-n kivulrol erkezik az EU-ba, es EU-s uzemelteto repuli.</li>
                <li>Ha a tenyleges tenyallas megfelel keses, torles vagy megtagadott beszallas jogi felteteleinek.</li>
                <li>Ha a legitarsasag nem tud sikeresen rendkivuli korulmenyre hivatkozni.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor nem eleg a brandet nezni?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Codeshare jaratoknal.</li>
                <li>Wet lease vagy ACMI helyzeteknel.</li>
                <li>Ha a jegyen egy ceg neve van, de masik ceg uzemeltette a gepet.</li>
                <li>Ha a jarat EU-n kivulrol jott, es a carrier szarmazasa donto a jogi hatalyhoz.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              A „ki fizet?” kerdesre nem lehet csak a logo alapjan valaszolni
            </h2>
            <p className="mb-6 text-blue-100">
              Ugyanaz a jegy lehet teljesen mas jogi helyzetben attol fuggoen, hogy ki uzemeltette a kritikus
              szakaszt. Ezert nem eleg csak a foglalasi email tetejen latott markat nezni.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Legitarsasag es jarat ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. EU-s indulás: itt sokszor nem a carrier szarmazasa a fo kerdes
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a jarat Budapestről, Becsbol vagy mas EU-s repuloterrol indul, akkor gyakran mar ez eleg ahhoz,
                hogy az EU261 relevans legyen, meg akkor is, ha maga a legitarsasag nem EU-s ceg.
              </p>
              <p>
                Ez az egyik pont, ahol a legtobb utas teved: sokan feleslegesen lemondanak az igenyrol,
                mert azt hiszik, hogy a nem EU-s carrier automatikusan kizárja a vedelmet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. EU-n kivuli indulás: itt sokszor mar a carrier a kulcs
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <p className="text-slate-600 dark:text-slate-300">
                  Ha a jarat egy harmadik orszagbol jon az EU-ba, akkor mar kulonosen fontos, hogy EU-s
                  legitarsasag repuli-e a gepet. Ugyanaz az utvonal mas eredmenyt adhat ket kulonbozo
                  uzemelteto mellett.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <p className="text-slate-600 dark:text-slate-300">
                  Itt jon elo az a gyakori felreertes, hogy az utas csak az uticelt nezi, mikozben a jogi
                  kerdes valojaban az uzemelteto szemelyen mulik.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Users className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              Codeshare es wet lease: ki felel ilyenkor?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ezekben a helyzetekben kulonosen fontos a tenyleges uzemelteto. Lehet, hogy a jegyen egy ismert
                marka szerepel, de a gepet es a szemelyzetet valojaban egy masik ceg adja. A jogi elemzesnel ez
                sokkal fontosabb lehet, mint a marketingnev.
              </p>
              <p>
                Emiatt ha a legitim kerdes az, hogy „melyik legitarsasag koteles fizetni?”, akkor az egyik
                legelso lepes a valodi carrier azonosítása.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor NEM eleg azt mondani, hogy „ez a legitarsasag biztos fizet”?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, ha maga a jarat nem esik az EU261 ala. Egy egyebkent ismert vagy „jo” carrier sem lesz
                automatikusan kotelezett minden utvonalon.
              </p>
              <p>
                Ugyanigy nem eleg a marka neve akkor sem, ha a jaratot valojaban mas uzemeltette, vagy ha az ut
                kulon foglalasokra bomlik.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mit erdemes ellenorizni, mielott kovetkeztetsz?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>Honnan indult a jarat.</p>
              <p>Hova erkezett.</p>
              <p>Ki volt a tenyleges uzemelteto.</p>
              <p>Egy vagy tobb foglalason volt-e az ut.</p>
              <p>Kesesrol, torlesrol vagy tulfoglalasrol beszelunk-e valojaban.</p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              A „melyik legitarsasag fizet?” kerdes valojaban egy teljes jogi ellenorzes roviditett valtozata
            </h2>
            <p className="mb-6 text-slate-300">
              Ha ezt a kerdest pontosan meg akarod valaszolni, akkor az utvonalat, az uzemeltetot es a
              foglalasi struktúrát is együtt kell nézni. Ettol lesz vilagos, hogy kinek lehet tenyleges fizetesi kotelezettsege.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Carrier es jogosultsag ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Csak EU-s legitarsasag fizethet?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. EU-s indulasu jaratoknal nem EU-s carrier mellett is lehet EU261-es ugy.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Miert fontos az uzemelteto?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Mert bizonyos utvonalaknál, kulonosen EU-n kivuli indulaspontnal, ez dontheti el az EU261 alkalmazhatosagat.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A jegyen szereplo brand mindig a felelos?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem feltetlen. Codeshare vagy wet lease esetben a valodi uzemelteto kulonosen fontos lehet.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/mely-jaratokra-vonatkozik-az-eu261" className="block hover:underline">
                Mely jaratokra vonatkozik az EU261?
              </Link>
              <Link href="/hu/blog/eu-n-kivuli-jaratok-mikor-ervenyes-az-eu261" className="block hover:underline">
                EU-n kivuli jaratok: mikor ervenyes az EU261?
              </Link>
              <Link href="/hu/blog/mennyit-fizetnek-a-legitarsasagok-250-400-600-euro" className="block hover:underline">
                Mennyit fizetnek a legitarsasagok? 250, 400 vagy 600 euro
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
