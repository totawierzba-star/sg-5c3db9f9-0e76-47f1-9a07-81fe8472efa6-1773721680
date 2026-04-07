import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Euro,
  Plane,
  Route,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MennyitFizetnekALegitarsasagok250400600Euro() {
  return (
    <LayoutHu>
      <SEO
        title="Mennyit fizetnek a legitarsasagok? 250, 400 vagy 600 euro magyarazata [2026]"
        description="Magyar utmutato az EU261 karteritesi osszegeihez: mikor jarhat 250, 400 vagy 600 euro, mitol fugg a sav, es miert nem eleg csak a keses oraszamat nezni."
        url="https://problemlot.com/hu/blog/mennyit-fizetnek-a-legitarsasagok-250-400-600-euro"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mennyit fizetnek a legitarsasagok? 250, 400 vagy 600 euro magyarazata [2026]",
            description:
              "Magyar nyelvu attekintes az EU261 szerinti 250, 400 es 600 euro karteritesi savokrol, a tavolsag szereperol, valamint arrol, hogy milyen tevhitek vannak az osszeg meghatarozasa korul.",
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
                "https://problemlot.com/hu/blog/mennyit-fizetnek-a-legitarsasagok-250-400-600-euro",
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
                name: "A 3 oras keses automatikusan 600 eurot jelent?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A 3 oras keses a penzbeli igeny egyik kuszobe lehet, de a konkret osszeg a jarat tavolsagatol es szerkezetetol is fugg.",
                },
              },
              {
                "@type": "Question",
                name: "Rovidebb jaratoknal is lehet penzbeli karterites?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A rovidebb jaratoknal tipikusan a 250 euros sav jon szoba, ha a tobbi jogi feltetel is teljesul.",
                },
              },
              {
                "@type": "Question",
                name: "A legitarsasag szabadon eldonti, hogy mennyit fizet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Az EU261 nem szabad alku, hanem jogi savok szerint mukodik. A vita altalaban nem az osszeg kitalalasarol, hanem a jogosultsagrol es a megfelelo kategoriarol szol.",
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
            <span className="text-slate-900 dark:text-white">Karteritesi osszegek</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Calculator className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mennyit fizetnek a legitarsasagok? 250, 400 vagy 600 euro
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Az utasok nagy resze mar hallott a 250, 400 es 600 euros savokrol, de sokan meg mindig
              ugy gondoljak, hogy a penz csak a keses hosszatol fugg. A valosagban az EU261-es osszeg
              tobb tenyezobol all ossze, es eloszor mindig a jogosultsagot kell igazolni.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Euro className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A lenyeg roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Az EU261 szerinti penzbeli karterites tipikusan 250, 400 vagy 600 euro lehet, de az
              osszeg nem egyszeruen attol fugg, hogy mennyi orat kesett a gep. A tavolsag, a jarat
              szerkezete, a vegso celallomas es maga az EU261-es jogosultsag mind meghatarozo.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 text-4xl font-bold text-blue-600 dark:text-blue-400">250 EUR</div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Tipikusan a rovidebb, legfeljebb 1500 km-es jaratoknal.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 text-4xl font-bold text-blue-600 dark:text-blue-400">400 EUR</div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Sok kozepes tavolsagu, illetve bizonyos hosszu unios jaratnal.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 text-4xl font-bold text-blue-600 dark:text-blue-400">600 EUR</div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                Tipikusan a leghosszabb, 3500 km feletti utaknal.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              A legtobb utas itt teved: a 3 oras szabaly nem egyenlo a 600 euroval
            </h2>
            <p className="mb-6 text-blue-100">
              A 3 oras vegso erkezesi keses lehet a penzbeli igeny egyik kulcsa, de nem azonos azzal,
              hogy automatikusan a legmagasabb sav fog jarni. Az osszeghez meg kell nezni a jarat tavolsagat
              es a jogi besorolast is.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Karteritesi sav ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Mitol fugg a 250, 400 vagy 600 euro?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az egyik fo tenyezo a tavolsag. Az EU261 savjai nem veletlenszeruen lettek meghatarozva:
                a rovidebb jaratok jellemzoen az alsobb, a nagyon hosszu utak a felso kategoriaba esnek.
              </p>
              <p>
                Ugyanakkor a tavolsag mellett a jarat szerkezete is fontos lehet. Nem ugyanugy kell elemezni
                egy egyszeru pont-pont jaratot, mint egy tobb szakaszbol allo, egy foglalason levo utat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mikor johet szoba a 250 euros sav?
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                Altalaban a rovidebb, 1500 km-ig terjedo utaknal. Ez nem azt jelenti, hogy a kartalanitas
                „kicsi”, hanem azt, hogy a rendelet kulon kategoriakban kezeli a tavolsagot.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mikor johet szoba a 400 euros sav?
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                Ez az a sav, amely sok utast meglep, mert nagyon sok kozepes tavolsagu jarat es egyes
                hosszu unios utvonalak is ide eshetnek. Emiatt nem jo csak arra gondolni, hogy „ha nem
                600, akkor biztos csak 250”.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor johet szoba a 600 euros sav?
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                Tipikusan a leghosszabb, 3500 km feletti utvonalaknal, ha a tobbi jogi feltetel is teljesul.
                Ezert keresnek sokan ra kulon a tavol-keleti, amerikai vagy kozel-keleti utvonalak kapcsan.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <Route className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              Miert nem eleg csak a keses hosszat nezni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert a keses hossza elsosorban a jogosultsag egyik kuszobe lehet, nem az osszeg kalkulatora.
                A 3 oras erkezesi keses nem azt mondja meg, hogy 250, 400 vagy 600 euro jar, hanem azt,
                hogy egyaltalan nyitva van-e a penzbeli igeny ajtaja.
              </p>
              <p>
                Az osszeghez ezutan meg kell nezni a tavolsagi savot, es azt is, hogy a jarat valoban
                beleesik-e az EU261 hatalya ala. Ha mar ezen a ponton kiesik az ugy, akkor a magas tavolsag
                onmagaban semmit nem er.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor NEM lehet egyszeruen a 250/400/600 savokbol kiindulni?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ha maga a jarat nem EU261-es ugy, akkor a tavolsag teljesen masodlagos. Elobb mindig az
                alkalmazhatosagot kell ellenorizni.
              </p>
              <p>
                Szinten fontos, hogy torlesnel az alternativ utvonal es a vegso erkezesi kulonbseg is
                hatassal lehet az eredmenyre, tehat nem mindig eleg csak a savot bemondani.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              A legitarsasag valasztja ki az osszeget?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Nem ugy, mint egy kupon vagy gesztus eseteben. Az EU261 savjai jogi kategoriak, nem
                szabadon osztogathato ajanlatok. A valodi vita altalaban arrol szol, hogy fennall-e a
                jogosultsag, es melyik kategoriaba esik a konkret jarat.
              </p>
              <p>
                Ezert ha a legitarsasag egyszeruen egy joval alacsonyabb osszeget vagy voucher-t ajanl,
                az meg nem jelenti azt, hogy az a rendelet szerinti megfelelo eredmeny.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              A helyes sorrend: elobb jogosultsag, utana sav
            </h2>
            <p className="mb-6 text-slate-300">
              A jo elemzes nem ugy indul, hogy „szerintem 600 euro jar”, hanem ugy, hogy: EU261-es-e a
              jarat, megvan-e a megfelelo keses vagy torlesi helyzet, nincs-e rendkivuli korulmeny,
              es ezek utan melyik tavolsagi sav ervenyes.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Osszeg gyors ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A 3 oras keses automatikusan 600 euro?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. A 3 oras keses inkabb a penzbeli igeny egyik kuszobe lehet, de az osszeg a tavolsagtol
                  es a jarat jogi kategoriajatol is fugg.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Rovidebb jaratoknal is jarhat penz?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen. A rovidebb, de jogilag megfelelo ugyeknel tipikusan a 250 euros sav johet szoba.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A legitarsasag szabadon alkudozhat az osszeggel?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. Az EU261 savjai jogi alapkategoriak, nem szabadon kitalalt ajanlatok.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jar karterites keses eseten?
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-torolt-jarat-eseten" className="block hover:underline">
                Mikor jar karterites torolt jarat eseten?
              </Link>
              <Link href="/hu/karteritesi-kalkulator" className="block hover:underline">
                Karteritesi kalkulator
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
