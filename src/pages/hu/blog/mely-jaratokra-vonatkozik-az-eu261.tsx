import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Plane,
  Ticket,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MelyJaratokraVonatkozikAzEu261() {
  return (
    <LayoutHu>
      <SEO
        title="Mely jaratokra vonatkozik az EU261? EU-bol indulo, EU-ba erkezo es atszallasos utak [2026]"
        description="Magyar utmutato az EU261 hatalyarol: mely jaratok tartoznak bele, mikor szamit az EU-s legifuvarozo, es hogyan valtoztat a helyzeten az atszallas vagy a kulon vett jegy."
        url="https://problemlot.com/hu/blog/mely-jaratokra-vonatkozik-az-eu261"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mely jaratokra vonatkozik az EU261? EU-bol indulo, EU-ba erkezo es atszallasos utak [2026]",
            description:
              "Magyar nyelvu attekintes az EU261 jarathatarol: EU-bol indulo, EU-ba erkezo, EU-s es nem EU-s legifuvarozok, csatlakozasok es kulon vasarolt jegyek esetei.",
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
              "@id": "https://problemlot.com/hu/blog/mely-jaratokra-vonatkozik-az-eu261",
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
                name: "Minden EU-ba erkezo jaratra ervenyes az EU261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Az EU-n kivulrol az EU-ba erkezo jaratoknal altalaban az is fontos, hogy a tenyleges uzemelteto EU-s legifuvarozo legyen.",
                },
              },
              {
                "@type": "Question",
                name: "Ha Budapestről indulok nem EU-s legifuvarozoval, akkor is lehet EU261-es ugy?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, sok esetben igen. Az EU-bol indulo jaratoknal nem az a fo kerdes, hogy ki uzemelteti a gepet, hanem hogy az utazas EU-teruleti kiinduloponttal indul-e.",
                },
              },
              {
                "@type": "Question",
                name: "A kulon vasarolt atszallasok is egy teljesen vedett utnak szamitanak?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltetlen. A kulon jegyek, self-transfer utak es tobb kulon foglalas gyakran gyengitik vagy szetbontjak az EU261 szerinti elemzest.",
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
            <span className="text-slate-900 dark:text-white">EU261 hataly</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Globe2 className="h-4 w-4" />
              EU261 alapok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mely jaratokra vonatkozik az EU261?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Ez az egyik legfontosabb alapkérdés az egesz utasjogi rendszerben. Nem eleg tudni, hogy
              a jarat kesett vagy toroltek. Eloszor mindig azt kell tisztazni, hogy a konkret utvonal
              egyaltalan beleesik-e az EU261 hatalya ala.
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
                A legfontosabb szabaly egy bekezdesben
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Az EU261 tipikusan ket nagy csoportot fed le: az EU-bol indulo jaratokat, valamint az
              EU-n kivulrol az EU-ba erkezo jaratokat akkor, ha a tenyleges uzemelteto EU-s legifuvarozo.
              Ezen a ponton dol el, hogy egy keses, torles vagy megtagadott beszallas unios ugy lesz-e.
            </p>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Tipikusan beleeso jaratok
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Budapestrol, Becsbol vagy mas EU-s repuloterrol indulo jarat.</li>
                <li>New Yorkbol, Isztambulbol vagy Dohabol az EU-ba tarto jarat, ha EU-s legifuvarozo uzemelteti.</li>
                <li>Egy foglalason levo csatlakozasos ut, amely megfelel a fenti alapszabalynak.</li>
                <li>Nem csak klasszikus menetrendi jarat, hanem bizonyos charter vagy atfoglalt utvonal is.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Tipikusan kieső jaratok
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>EU-n kivulrol az EU-ba erkezo jarat nem EU-s legifuvarozoval.</li>
                <li>Ket harmadik orszag kozotti jarat EU-kapcsolat nelkul.</li>
                <li>Olyan self-transfer konstrukcio, ahol a teljes ut nem elemezheto egy vedett utvonalkent.</li>
                <li>Nem publikus tarifaval, kulonleges sajat celra adott, szabaly alol kieső jegyhelyzetek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              A leggyakoribb hiba: az utas csak az uticelt nezi
            </h2>
            <p className="mb-6 text-blue-100">
              Attol, hogy egy jarat Europaba tart, meg nem biztos, hogy az EU261 vedelme ala esik.
              Itt nem eleg az erkezesi orszag: az indulasi pont, az uzemelteto es a foglalasi szerkezet is szamit.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Jarat jogosultsag ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Az EU-bol indulo jaratok
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ez a legegyszerubb nagy kategoria. Ha a jarat EU-s repuloterrol indul, akkor sokkal
                valoszinubb, hogy az EU261 relevans lesz. Ilyenkor az sem feltetlenul kulcskerdes,
                hogy a jaratot EU-s vagy nem EU-s legifuvarozo uzemelteti.
              </p>
              <p>
                Gyakorlatban ez azt jelenti, hogy egy Budapestről indulo, kesobb problemassá való
                utvonal jo esellyel mar az elso szuron atmegy, es ezutan lehet tovabblepni a keses,
                torles vagy tulfoglalas tenyleges elemzesere.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Az EU-n kivulrol az EU-ba erkezo jaratok
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Itt mar szamit a tenyleges uzemelteto
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ugyanaz az utvonal lehet egyszer EU261-es, masik esetben pedig nem, attol fuggoen,
                  hogy EU-s vagy nem EU-s legifuvarozo uzemelteti a jaratot.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ez kulonosen fontos a torok, kozel-keleti es tavol-keleti utvonalaknál
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Budapest felől sok utas hasznal olyan csatlakozasokat, ahol Europan kivulrol jon vissza.
                  Ezeknel a jaratoknal a carrier kiléte sokszor donto kerdes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Mit valtoztat az atszallas es a foglalas szerkezete?
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-gray-900">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
                  <Ticket className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Egy foglalas
                </h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  Erősebb lehet a jogi helyzet, kulonosen akkor, ha a vegso celallomasra valo erkezes
                  egyetlen utazasi lancot alkot.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-5 dark:bg-gray-900">
                <h3 className="mb-2 flex items-center gap-2 text-xl font-semibold text-slate-900 dark:text-white">
                  <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  Kulon vasarolt jegyek
                </h3>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">
                  A self-transfer gyakran szetbontja az elemzest. Ilyenkor az egyik szakasz meg lehet EU261-es,
                  a teljes ut elvesztett csatlakozasi kovetkezmenye viszont mar nem feltetlenul.
                </p>
              </div>
            </div>
            <p className="mt-5 text-slate-700 dark:text-slate-200">
              Ezert minden atszallasos ugyben kulon erdemes megnezni, hogy ugyanazon foglalason szerepelt-e
              a teljes utvonal, vagy csak az utas epitett maganak kulon jaratokbol egy utazasi lancot.
            </p>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Fontos pontositas: mikor NEM ervenyes az EU261?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Az egyik legtipikusabb tevedes az, hogy „ha EU-ba megyek, akkor biztosan vedett vagyok”.
                Ez nem igaz. Az EU-n kivulrol az EU-ba tarto nem EU-s legifuvarozoval uzemeltetett
                jarat sokszor mar az alapalkalmazhatósagnal kiesik.
              </p>
              <p>
                Ugyanigy a kulon jegyes, onallo atszallasos utak sem automatikusan egyetlen vedett
                utazaskent kezelendok. Sok esetben csak az egyik szakasz vizsgalhato, a teljes elveszett
                utazasi kovetkezmeny mar nem.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mi tortenik a gyakorlatban ezutan?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha mar tudjuk, hogy a jarat beleesik az EU261 ala, akkor lehet ertelmesen tovabblepni
                a kovetkezo kerdesekre: kesesrol, torlesrol, tulfoglalasrol, vegso erkezesi csuszasrol
                es a rendkivuli korulmenyekrol.
              </p>
              <p>
                Ha viszont mar itt elbukik az ugy, akkor hiaba volt nagy a kellemetlenseg, a klasszikus
                EU261-es penzbeli igeny sokszor nem lesz megalapozhato.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Ha bizonytalan a sajat utvonalaban, ezt erdemes legeloszor tisztazni
            </h2>
            <p className="mb-6 text-slate-300">
              A legtobb sikeres igeny alapja az, hogy az utas mar az elejen pontosan tudja:
              melyik szakaszra terjed ki az EU261, es melyikre nem. Ez kulonosen fontos atszallas,
              kulon jegyek es nem EU-s legifuvarozok eseten.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Jaratvedelem ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Minden EU-ba erkezo jaratra ervenyes az EU261?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. Az EU-n kivulrol az EU-ba tarto jaratoknal kulonosen fontos, hogy EU-s vagy
                  nem EU-s legifuvarozo uzemelteti-e a jaratot.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Budapestről indulo nem EU-s legifuvarozo is lehet EU261-es?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen, sok esetben igen, mert az indulasi pont maga EU-s repuloteren van.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Kulon vett jegyeknel is egyben nezik az egesz utat?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem feltetlen. A self-transfer sokszor kulon jogi vizsgalatot igenyel, es a teljes
                  utazasi kovetkezmeny nem mindig lesz egyben vedett.
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
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jar karterites keses eseten?
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-torolt-jarat-eseten" className="block hover:underline">
                Mikor jar karterites torolt jarat eseten?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
