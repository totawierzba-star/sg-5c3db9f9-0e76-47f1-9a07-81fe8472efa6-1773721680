import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Plane,
  ShieldAlert,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function EuNKivuliJaratokMikorErvenyesAzEu261() {
  return (
    <LayoutHu>
      <SEO
        title="EU-n kivuli jaratok: mikor ervenyes az EU261 es mikor nem? [2026]"
        description="Magyar utmutato az EU-n kivuli jaratokhoz: mikor ved meg az EU261, mikor szamit az EU-s legifuvarozo, es hogyan kell ertelmezni a harmadik orszagokbol indulo utvonalakat."
        url="https://problemlot.com/hu/blog/eu-n-kivuli-jaratok-mikor-ervenyes-az-eu261"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "EU-n kivuli jaratok: mikor ervenyes az EU261 es mikor nem? [2026]",
            description:
              "Magyar nyelvu attekintes az EU-n kivuli jaratok jogi helyzeterol: harmadik orszagbol indulo utvonalak, EU-s es nem EU-s legifuvarozok, csatlakozasok es a leggyakoribb tevhitek.",
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
              "@id":
                "https://problemlot.com/hu/blog/eu-n-kivuli-jaratok-mikor-ervenyes-az-eu261",
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
                name: "Ha a jarat nem EU-bol indul, akkor mar biztosan nem EU261-es?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem biztos. Az EU-n kivulrol az EU-ba erkezo jaratoknal sokszor tovabbra is relevans lehet az EU261, ha a tenyleges uzemelteto EU-s legifuvarozo.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a leggyakoribb tevedes az EU-n kivuli jaratoknal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az, hogy az utas azt hiszi: ha az uticel Europaban van, akkor automatikusan vedett. Valojaban ilyenkor sokszor a carrier szarmazasa a donto.",
                },
              },
              {
                "@type": "Question",
                name: "A kulon vasarolt, Europan kivuli csatlakozasoknal egyben nezik az utat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltetlen. A kulon jegyek, self-transfer konstrukciok es tobb PNR gyakran szetbontjak az elemzest.",
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
            <span className="text-slate-900 dark:text-white">EU-n kivuli jaratok</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Globe2 className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              EU-n kivuli jaratok: mikor ervenyes az EU261 es mikor nem?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez az a tema, ahol a legtobb felreertes szuletik. Sokan azt gondoljak, hogy ha a jarat
              hosszú tavu, nem EU-s orszagok kozott megy, vagy csak valahol Europan kivul kezdodik,
              akkor az EU261 biztosan kiesik. A valosag ennel sokkal arnyaltabb.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A legfontosabb szabaly roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Az EU-n kivuli jarat sem automatikusan „EU261-en kivuli”. A döntő kerdes rendszerint az,
              hogy honnan indul a jarat, hova erkezik, es ki a tenyleges uzemelteto legifuvarozo.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet megis vedett?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a teljes utazas EU-s repuloterrol indul, akkor a tavoli celorszag onmagaban nem problema.</li>
                <li>Ha egy harmadik orszagbol az EU-ba erkezo jaratot EU-s legifuvarozo uzemeltet.</li>
                <li>Ha az atszallasos ut egy foglalason van, es az EU261-es szakasz jogilag huzza magaval a tovabbi elemzest.</li>
                <li>Ha a vegso vita keses, torles vagy elveszett csatlakozas miatt merul fel egy vedett utvonalon.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor esik ki leggyakrabban?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a jarat EU-n kivulrol jon az EU-ba, de nem EU-s legifuvarozo uzemelteti.</li>
                <li>Ha az ut az EU-n kivul kezdodik es vegzodik, unios kapcsolodasi pont nelkul.</li>
                <li>Ha az utas kulon vett jegyekkel, self-transferrel epitette ossze a teljes utat.</li>
                <li>Ha az utas egy teljes, Europan kivuli kovetkezmenylancot probal egyetlen EU261-es ugykent kezelni, de a szerkezet ezt nem tamasztja ala.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Itt hibazik a legtobb utas: csak az uticelt nezi
            </h2>
            <p className="mb-6 text-blue-100">
              Nem az a fo kerdes, hogy a jarat Europaba erkezik-e, hanem az, hogy az adott utvonalon
              fennallnak-e az EU261 alapfeltetelei. Harmadik orszagoknal a carrier kerdes kulonosen fontos.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Jaratvedelem ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Hosszu tavu, de EU-bol indulo jaratok
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a jarat Budapestről, Becsbol vagy mas EU-s repuloterrol indul New Yorkba, Dubaiba,
                Bangkokba vagy Dohaba, akkor attol, hogy a celorszag nem unios, az utvonal meg lehet
                EU261-es. Itt az indulasi pont a meghatarozo.
              </p>
              <p>
                Ezert a magyar utasoknal sok klasszikus tavol-keleti vagy kozel-keleti utvonal tovabbra
                is beleferhet az unios rendszerbe, ha a gond egy unios induloponttal rendelkezo szakaszon tortenik.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Harmadik orszagbol az EU-ba erkezo jaratok
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Itt sokszor az uzemelteto dont
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ugyanaz az utvonal mas eredmenyt adhat jogilag attol fuggoen, hogy EU-s vagy nem EU-s
                  legifuvarozo repuli a gepet.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ezert veszelyes a leegyszerusites
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Sok utas csak annyit lat, hogy „vissza Europaba”. A jogi kerdes azonban nem ez,
                  hanem a tenyleges uzemelteto es az utvonal szerkezete.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit valtoztat a csatlakozas?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Egy EU-bol indulo, egy foglalason levo csatlakozasos ut gyakran sokkal jobb helyzetben van,
                mint egy kulon vasarolt self-transfer konstrukcio. Kulonosen akkor, ha a vita a vegso
                celallomasi erkezesi kesesrol vagy egy elveszett csatlakozasrol szol.
              </p>
              <p>
                Ha viszont az utas sajat maga rakja ossze a kulon PNR-eket, a teljes ut elvesztheti azt
                az egységet, amelyre az EU261-es logikat epiteni lehetne.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor NEM ervenyes az EU261?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                A legtipikusabb eset az, amikor az utas egy harmadik orszagbol EU-ba tarto, nem EU-s
                legifuvarozoval uzemeltetett jaratra hivatkozik ugy, mintha az automatikusan vedett lenne.
                Ez altalaban nem helyes kiindulas.
              </p>
              <p>
                Ugyanigy gyenge pont a kulon vett jegyekkel felepitett utvonal, ahol az utas a teljes
                ut veszteseit szeretne egyetlen EU261-es igenyben kezelni, mikozben a foglalasi struktura
                ezt nem tamasztja ala.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miert fontos ez SEO szinten is a valodi utasnak?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Azert, mert a „jar-e penz?” kerdesre nem lehet jo valaszt adni, ha elotte nem tisztazzuk,
                hogy maga a jarat EU261-es ugy-e. Az EU-n kivuli utvonalaknal ez az elso es legfontosabb szuro.
              </p>
              <p>
                Ha ezt az elejen rosszul dontik el, az utas vagy feleslegesen ad be remenytelen igenyt,
                vagy epp olyan ugyrol mond le, amely valojaban vedett lett volna.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Nem az utvonal hangzasa, hanem a jogi szerkezete szamit
            </h2>
            <p className="mb-6 text-slate-300">
              Ugyanaz a Budapest–Isztambul–Azsia vagy Amerika–Europa utvonal ket teljesen mas eredmenyt
              adhat attol fuggoen, hogy ki uzemelteti a kritikus szakaszt, es egy foglalason van-e az ut.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Jogosultsag gyors ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Ha a jarat nem EU-bol indul, akkor mar biztosan nincs EU261?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. Harmadik orszagbol EU-ba erkezo jaratoknal tovabbra is lehet relevans az EU261,
                  ha a tenyleges uzemelteto EU-s legifuvarozo.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mi a legnagyobb tevhit?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Az, hogy „ha Europaba megyek, akkor biztos vedett vagyok”. Ez onmagaban nem eleg.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A kulon vett csatlakozasokat is egyben nezik?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem feltetlen. A self-transfer gyakran szetbontja a jogi elemzest, ami sokkal gyengebb
                  helyzetet teremthet.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/mi-az-eu261-rendelet-es-mikor-alkalmazhato" className="block hover:underline">
                Mi az EU261 rendelet es mikor alkalmazhato?
              </Link>
              <Link href="/hu/blog/mely-jaratokra-vonatkozik-az-eu261" className="block hover:underline">
                Mely jaratokra vonatkozik az EU261?
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jar karterites keses eseten?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
