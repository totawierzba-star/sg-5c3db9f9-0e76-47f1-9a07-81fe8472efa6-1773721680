import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  UserX,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MikorNemJarKarteritesAlapok() {
  return (
    <LayoutHu>
      <SEO
        title="Mikor NEM jar karterites? Alaphelyzetek, amikor az igeny elbukhat [2026]"
        description="Magyar utmutato a legfontosabb helyzetekrol, amikor nem jar penzbeli karterites: EU261-en kivuli jarat, rendkivuli korulmeny, utasoldali hiba es mas alapveto kizaro tenyezok."
        url="https://problemlot.com/hu/blog/mikor-nem-jar-karterites-alapok"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mikor NEM jar karterites? Alaphelyzetek, amikor az igeny elbukhat [2026]",
            description:
              "Magyar nyelvu attekintes a legfontosabb kizaro tenyezokrol: mikor nem alkalmazhato az EU261, mikor lehet valodi rendkivuli korulmeny, es mikor gyenge vagy nulla a penzbeli igeny.",
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
              "@id": "https://problemlot.com/hu/blog/mikor-nem-jar-karterites-alapok",
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
                name: "Ha nagy volt a keses, akkor mindig jar penz?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. A nagy keses onmagaban nem eleg, ha a jarat nem EU261-es, vagy ha a legitarsasag bizonyitott rendkivuli korulmenyre hivatkozik.",
                },
              },
              {
                "@type": "Question",
                name: "Mikor lehet valodi rendkivuli korulmenyrol beszelni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Altalaban akkor, ha a problema kivul esik a legitarsasag normalis uzemeltetesi korein, es megfeleloen bizonyithato. De ezt nem szabad automatikusan elhinni csak egy rovid cimke alapjan.",
                },
              },
              {
                "@type": "Question",
                name: "Az utas sajat hibaja miatt is elbukhat az igeny?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Dokumentumhiany, kesoi gate-erkezes vagy mas utasoldali problema teljesen mas helyzet, mint a legitarsasag altal okozott keses vagy torles.",
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
            <span className="text-slate-900 dark:text-white">Mikor nem jar karterites</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ShieldAlert className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mikor NEM jar karterites?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Nem minden rossz utazasi tapasztalat alakul at penzbeli igenybe. Ez nem azt jelenti, hogy a
              legitarsasag mindig igazat mond, amikor visszautasit, de azt igen, hogy vannak alaphelyzetek,
              amikor a penzbeli karterites jogilag gyengebb vagy teljesen kiesik.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A legfontosabb alapelv
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Az, hogy kellemetlen vagy komoly problema volt a jarattal, meg nem jelenti automatikusan azt,
              hogy penzbeli karterites is jar. Eloszor mindig azt kell nezni, hogy a jarat beleesik-e az
              EU261-be, es utana azt, hogy van-e olyan tenyezo, amely kizárja vagy legyengiti az igenyt.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Tipikus kizaro helyzetek
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>A jarat nem tartozik az EU261 hatalya ala.</li>
                <li>A legitarsasag valodi rendkivuli korulmenyt tud bizonyitani.</li>
                <li>Az utas sajat oldalan volt hiba, peldaul dokumentum vagy kesoi erkezes.</li>
                <li>A tenyallas valojaban nem eri el a penzbeli igeny egyik alapkuszobet sem.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Fontos pontositas
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Az, hogy a legitarsasag „nem fizet”, meg nem bizonyitja, hogy igaza van.</li>
                <li>Az elutasitas oka sokszor csak vizsgalat utan minositheto valosan.</li>
                <li>Lehet, hogy penzbeli karterites nem jar, de mas jogok meg igen.</li>
                <li>A „nem jar” es a „meg nem bizonyitott” nem ugyanaz.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              A korrekt elemzeshez azt is meg kell mondani, mikor nem all eros ugy az utas oldalan
            </h2>
            <p className="mb-6 text-blue-100">
              Ez nem a kedved elvetele, hanem a jo szuro. A valodi eros ugyeket csak ugy lehet gyorsan
              felismerni, ha eloszor azokat a helyzeteket is tisztan latjuk, ahol a penzbeli igeny gyengebb.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ugy erossegenek ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Ha a jarat eleve nem EU261-es
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ez az egyik legalapveto szuro. Ha a jarat nem esik az EU261 hatalya ala, akkor hiaba volt
                nagy a keses vagy a kellemetlenseg, az unios penzbeli igeny tipikusan mar ezen a ponton elesik.
              </p>
              <p>
                Ezert mindig az alkalmazhatosag az elso kerdes, es csak utana jo a kuszobokrol, savokrol
                vagy a rendkivuli korulmenyekrol beszelni.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Ha valodi rendkivuli korulmeny all fenn
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                A kulcsszo itt a „valodi”. Nem minden technikai hangzasu vagy altalanos legitarsasagi magyarazat
                eleg. Ugyanakkor letezik olyan helyzet, amely tenyleg kivul esik a normalis uzemeltetesi korokon,
                es ilyenkor a penzbeli igeny gyengulhet vagy elbukhat.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 flex items-center gap-2 text-3xl font-bold text-slate-900 dark:text-white">
              <UserX className="h-7 w-7 text-blue-600 dark:text-blue-400" />
              3. Ha a problema az utas oldalán volt
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Dokumentumhiany, kesoi gate-erkezes, lemaradt check-in, sajat csatlakozas hibaja vagy hasonlo
                helyzetek teljesen mas kategoriat jelentenek. Ezeket nem jo ugyanugy kezelni, mint a legitarsasag
                altal okozott kesest vagy torlest.
              </p>
              <p>
                Sok konfliktus itt csuszik felre, mert az utas erzelmileg ugyanugy igazsagtalannak eli meg a helyzetet,
                jogilag viszont ez mas alapallas.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Ha a kuszobok sem teljesulnek
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Előfordul, hogy volt problema, de a vegso erkezesi keses, a torles szerkezete vagy a megtagadott
                beszallas tenye nem all ugy ossze, hogy abbol penzbeli karterites kovetkezzen.
              </p>
              <p>
                Ilyenkor lehet, hogy mas jogok vagy szolgaltatasi igenyek meg fennmaradnak, de a klasszikus penzbeli
                kompenzacio mar nem lesz eros.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <ShieldAlert className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Fontos kulonbseg: a „nem jar” es a „vitatott” nem ugyanaz
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ha a legitarsasag egy mondattal elutasit, attol az ugy meg nem feltetlen bukott. Lehet, hogy az
                indoklas gyenge, pontatlan vagy egyszeruen sablonos.
              </p>
              <p>
                Masreszt tenyleg vannak olyan esetek, ahol a penzbeli igeny nem realis. A jo elemzes lényege,
                hogy ezt a kettot ne keverjuk ossze.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Nem minden ugy lesz eros, de ezt erdemes pontosan, nem hasrautesre megallapitani
            </h2>
            <p className="mb-6 text-slate-300">
              A rossz strategia az, ha minden ugyet automatikusan biztos győzelemnek vagy biztos bukasnak tekintunk.
              A helyes út az, hogy eloszor tisztazzuk a fenti alaphelyzeteket, es utana dontunk a kovetkezo lepesről.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Ugy valos erossegenek ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Ha nagy volt a keses, akkor mindig jar penz?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. Elobb meg kell nezni az EU261 hatalyt es azt is, van-e kizaro tenyezo.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Minden „rendkivuli korulmeny” hivatkozas valos?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem feltetlen. Ezt mindig erdemes tenyszeruen megvizsgalni.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Utasoldali hiba is nullazhatja az igenyt?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen. Dokumentum, check-in vagy mas utasoldali problema jogilag mas helyzet.
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
              <Link href="/hu/blog/eu-n-kivuli-jaratok-mikor-ervenyes-az-eu261" className="block hover:underline">
                EU-n kivuli jaratok: mikor ervenyes az EU261?
              </Link>
              <Link href="/hu/blog/mely-legitarsasagok-kotelesek-fizetni" className="block hover:underline">
                Mely legitarsasagok kotelesek fizetni?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
