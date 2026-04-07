import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Plane,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MiAzEu261RendeletEsMikorAlkalmazhato() {
  return (
    <LayoutHu>
      <SEO
        title="Mi az EU261 rendelet es mikor alkalmazhato? Magyar utasjogi utmutato [2026]"
        description="Magyar utmutato az EU261 szabalyairol: mely jaratokra ervenyes, mikor jar karterites keses vagy torles utan, es mikor nem terjed ki a vedelem."
        url="https://problemlot.com/hu/blog/mi-az-eu261-rendelet-es-mikor-alkalmazhato"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mi az EU261 rendelet es mikor alkalmazhato? Magyar utasjogi utmutato [2026]",
            description:
              "Magyar nyelvu attekintes az EU261 rendelet hatalyarol, a keses, torles es tulfoglalas eseteirol, valamint arrol, hogy mely jaratokra terjed ki a vedelem.",
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
                "https://problemlot.com/hu/blog/mi-az-eu261-rendelet-es-mikor-alkalmazhato",
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
                name: "Minden Europaba tarto jaratra ervenyes az EU261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A szabalyok tipikusan az EU-bol indulo jaratokra, illetve az EU-n kivulrol az EU-ba erkezo, EU-s legifuvarozoval uzemeltetett jaratokra alkalmazhatok.",
                },
              },
              {
                "@type": "Question",
                name: "Csak keses eseten letezik karterites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Az EU261 a hosszú keses mellett torles, megtagadott beszallas, valamint bizonyos esetekben downgrade es elveszett csatlakozas eseten is ad jogokat.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor nem jar penzbeli karterites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ha a legifuvarozo bizonyitani tudja, hogy a problema rendkivuli korulmeny miatt tortent, vagy a jarat eleve nem esik az EU261 teruleti-szemelyi hatalya ala.",
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
            <span className="text-slate-900 dark:text-white">EU261 alapok</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FileText className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mi az EU261 rendelet es mikor alkalmazhato?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az EU261 az a szabalyrendszer, amely meghatarozza, mikor jarhat az utasnak penzbeli
              karterites, ellatas, atfoglalas vagy jegy-visszaterites keses, torles vagy
              tulfoglalas utan. A legfontosabb kerdes azonban mindig ugyanaz:
              a sajat jaratara egyaltalan kiterjed-e a vedelem?
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
                A lenyeg egy mondatban
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Az EU261 altalaban akkor alkalmazhato, ha a jarat az EU-bol indul, vagy EU-n kivulrol
              erkezik az EU-ba es azt EU-s legifuvarozo uzemelteti. Innen indul az osszes tovabbi
              elemzes: keses, torles, csatlakozas, karterites osszege.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Tipikusan vedett helyzetek
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Barmely jarat, amely unios repuloterrol indul, akar EU-s, akar nem EU-s legifuvarozoval.</li>
                <li>EU-n kivulrol az EU-ba erkezo jarat, ha a tenyleges uzemelteto EU-s legifuvarozo.</li>
                <li>Egy foglalason levo csatlakozas, ha a teljes utazas belefer az EU261 hatalyaba.</li>
                <li>Keses, torles, tulfoglalas vagy bizonyos atfoglalasi helyzetek.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Tipikusan nem vedett helyzetek
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>EU-n kivulrol az EU-ba erkezo jarat, ha azt nem EU-s legifuvarozo uzemelteti.</li>
                <li>Tisztan harmadik orszagok kozotti jarat, amelynek nincs EU261 kapcsolata.</li>
                <li>Olyan eset, amikor az utas kesett el, nem volt rendben a dokumentum, vagy nem tartotta a boarding szabalyokat.</li>
                <li>Ha csak annyi tortent, hogy kellemetlen volt az utazas, de a jogi kuszobok nem teljesulnek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Nem biztos benne, hogy a sajat jarata belefer-e az EU261-be?
            </h2>
            <p className="mb-6 text-blue-100">
              A leggyakoribb bizonytalansag nem az osszeg, hanem az alkalmazhatosag:
              melyik orszagbol indult a jarat, ki volt a tenyleges uzemelteto, es egyben volt-e a foglalas.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ingyenes jogosultsag-ellenorzes
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mit jelent pontosan az EU261?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az EU261 az utasok vedelmet szolgalja, amikor a legifuvarozo jaratkeses,
                torles, megtagadott beszallas vagy bizonyos atfoglalasi helyzetek miatt
                felboritja az utazasi tervet.
              </p>
              <p>
                A rendelet nem csak penzbeli karteritesrol szol. Ugyanugy ide tartozhat az
                ellatas, a hotel, az atfoglalas, a jegy-visszaterites, es egyes helyzetekben
                a vegso celallomasra valo megkesett erkezes alapjan szamitott karterites is.
              </p>
              <p>
                Magyar utaskent azert kulonosen fontos, mert a Budapestrol indulo, illetve az
                Europaba tarto sok atszallasos ut kozvetlenul erintheti a rendelet hatalyat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mikor alkalmazhato biztosabban az EU261?
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  1. Ha a jarat az EU teruleterol indul
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ez a legegyszerubb eset. Ha a jarat Budapestről, Becsbol, Frankfurtbol vagy mas
                  unios repuloterrol indul, az EU261 jellemzoen akkor is relevans lehet, ha a
                  legifuvarozo nem EU-s ceg.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  2. Ha a jarat EU-n kivulrol jon be az EU-ba, es EU-s legifuvarozo repuli
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Itt a tenyleges uzemelteto kiléte donto. Ugyanaz az utvonal egyik jaratnal lehet
                  vedett, a masiknal nem, pusztan attol fuggoen, hogy EU-s vagy nem EU-s ceg uzemelteti.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3. Ha egy foglalason belul van az egesz ut
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A missed connection es vegso celallomasi keses elemzesenel kulcskerdes, hogy
                  ugyanazon foglalason volt-e a teljes utazas. Az egyben foglalt csatlakozasok
                  jogi helyzete erossebb lehet, mint a kulon vasarolt self-transfer utaké.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Fontos pontositas: mikor NEM ervenyes az EU261?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Nem eleg az, hogy a jarat Europaba tart. Ha peldaul egy nem EU-s legifuvarozo
                viszi az utast harmadik orszagbol az EU-ba, a vedelem sokszor mar az alkalmazhatosag
                szintjen elbukhat.
              </p>
              <p>
                Ugyanez igaz arra, ha a problema valojaban nem keses vagy torles, hanem dokumentumhiany,
                kesoi erkezes a kapuhoz, vagy olyan kulso ok, amelyrol a legifuvarozo rendkivuli
                korulmenykent tud bizonyitott modon szamot adni.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Milyen helyzetekben johet szo karterites?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A legismertebb eset a 3 orat meghalado vegso erkezesi keses, de nem ez az egyetlen.
                Torolt jarat, tulfoglalas, lekesett csatlakozas es bizonyos downgrade-helyzetek is
                adhatnak kulonbozo jogokat.
              </p>
              <p>
                Az osszeg jellemzoen 250, 400 vagy 600 euro savban mozog, a tavolsagtol es az utvonal
                szerkezetetol fuggoen. Ez viszont csak akkor lesz relevans, ha az alapkerdesre igen a valasz:
                az adott jaratra kiterjed-e az EU261.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              A gyakorlatban a legtobb utas itt bizonytalanodik el
            </h2>
            <p className="mb-6 text-slate-300">
              Nem az a nehez, hogy hallott-e mar a 600 eurorol, hanem az, hogy a sajat jarata
              tenyleg EU261-es ugy-e. Ha ezt gyorsan tisztazza, utana mar sokkal konnyebb
              eldonteni, hogy erdemes-e tovabblepni.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Jarat ellenorzese magyarul
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Minden Europaba tarto jaratra ervenyes az EU261?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. A donteshez mindig meg kell nezni az indulasi helyet, az erkezesi helyet es
                  a tenyleges uzemelteto legifuvarozot.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Low-cost jaratoknal is ervenyes lehet?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen. A low-cost modell nem zarja ki az EU261 alkalmazasat. A jarat szerkezete es a jogi hataly a fontos.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Az EU261 csak penzbeli karteritesrol szol?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. Az utasnak joga lehet atfoglalashoz, jegy-visszateriteshez, ellatashoz,
                  es bizonyos helyzetekben hotelhez vagy mas segitseghez is.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/kesett-jarat" className="block hover:underline">
                Kesett jarat: mikor johet szo penzbeli karterites?
              </Link>
              <Link href="/hu/torolt-jarat" className="block hover:underline">
                Torolt jarat: visszaterites, atfoglalas es az utas jogai
              </Link>
              <Link href="/hu/karteritesi-kalkulator" className="block hover:underline">
                Karteritesi kalkulator: mekkora osszeg johet szoba?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
