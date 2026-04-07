import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Mail,
  Scale,
  Wallet,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function HogyanMukodikAKarteritesFolyamata() {
  return (
    <LayoutHu>
      <SEO
        title="Hogyan mukodik a karterites folyamata? Lepesrol lepesre az igenytol a kifizetesig [2026]"
        description="Magyar utmutato a teljes repulesi karteritesi folyamathoz: jogosultsag ellenorzese, dokumentumok, igenybeadas, legitarsasagi valasz, eszkalacio es vegso kifizetes."
        url="https://problemlot.com/hu/blog/hogyan-mukodik-a-karterites-folyamata"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Hogyan mukodik a karterites folyamata? Lepesrol lepesre az igenytol a kifizetesig [2026]",
            description:
              "Magyar nyelvu, lepesrol lepesre felépített attekintes a repulesi karteritesi folyamatrol: mikor mit kell ellenorizni, milyen dokumentum kell, hogyan valaszol a legitarsasag, es mikor jon az eszkalacio.",
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
              "@id": "https://problemlot.com/hu/blog/hogyan-mukodik-a-karterites-folyamata",
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
                name: "Mi az elso lepes a teljes folyamatban?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Altalaban a jogosultsag alapjanak ellenorzese: az utvonal, a carrier, a problema tipusa es a fo dokumentumok tisztazasa.",
                },
              },
              {
                "@type": "Question",
                name: "Mi tortenik az igeny beadása utan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legitarsasag vagy erdemben valaszol, vagy tovabbi informaciot ker, vagy vitatja az igenyt. Ha az ugy nem mozdul, a folyamat kovetkezo szintre kerulhet.",
                },
              },
              {
                "@type": "Question",
                name: "Minden ugy ugyanabba a vegkimenetelbe fut?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem. Lehet gyors kifizetes, lehet reszleges vita, lehet elutasitas, es lehet olyan helyzet is, amikor az ugyet tovabb kell vinni, mert a legitarsasag nem zarja le korrektul.",
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
            <span className="text-slate-900 dark:text-white">Karteritesi folyamat</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <ClipboardList className="h-4 w-4" />
              Eljaras es hataridok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Hogyan mukodik a karterites folyamata?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Sok utas addig jut el, hogy tudja: talan jarna neki penz. A bizonytalansag utana kezdodik:
              mi jon most, milyen sorrendben, mire kell figyelni, mikor mi a kovetkezo lepes? Ez a cikk a
              teljes folyamatot rakja egy ertelmezheto sorrendbe.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A folyamat lenyege roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              A jo karteritesi folyamat altalaban nem a reklam levellel kezdodik, hanem azzal, hogy eloszor
              ellenorizzuk a jogi alapokat, osszerakjuk a dokumentaciot, es utana lepunk tovabb a beadott
              igeny, a legitarsasagi reakcio es szukseg esetén az eszkalacio iranyaba.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Akkor halad jol egy ugy, ha nem ugrasz at lepeseket
            </h2>
            <p className="mb-6 text-blue-100">
              A legtobb felesleges kor abból adodik, hogy az utas tul koran akar vitatkozni, vagy pont ellenkezoleg:
              tul sokaig var, mikozben meg alapdolgok sincsenek tisztazva. A jo sorrend sok idot sporolhat.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Folyamat elinditasa magyarul
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Jogosultsag ellenorzese
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az elso lepes mindig az, hogy tisztazd: EU261-es ugyrol beszelunk-e egyaltalan. Ide tartozik
                az utvonal, az indulasi es erkezesi pont, a tenyleges carrier, valamint az, hogy kesesről,
                torlesről vagy megtagadott beszallasrol van-e szo.
              </p>
              <p>
                Ha ezen a ponton az ugy kiesik, akkor a tobbi lepest mar nem jo ugyanazzal a logikaval eroltetni.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Dokumentumok osszerakasa
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Bizonyiteklanc epitese</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Foglalasi adatok, boarding pass, screenshotok, blokkok, atfoglalasi informaciok es minden olyan
                adat, amely segit pontosan bemutatni, mi tortent. Minel tisztabb a dokumentacio, annal nehezebb a
                legitarsasagnak szethuzni az ugyet.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Az igeny beadása
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Az elso erdemi benyujtas</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Itt az a cel, hogy a legitim kerdes es a fo tenyallás vilagos legyen. Nem a felesleges hossz,
                hanem a pontossag a fontos: melyik jarat, mi tortent, milyen jogalap latszik, es milyen alapdokumentumok allnak rendelkezesre.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Legitarsasagi valasz: elfogadas, hiany, vita vagy huzas
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A legitarsasag valaszolhat gyors elfogadassal, kerhet tovabbi adatot, hivatkozhat rendkivuli
                korulmenyre, vagy egyszeruen huzhatja az idot sablonvalaszokkal. Ezek kozul nem mindegyik jelent
                ugyanazt.
              </p>
              <p>
                A jo folyamatkezelés ott valik fontossa, hogy el tudjuk kuloniteni a valodi jogvitát a puszta
                adminisztrativ keslekedestol.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Kifizetes vagy eszkalacio
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-3">
                  <Wallet className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Kifizetes</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Ha az ugy egyertelmu es a legitarsasag elfogadja, a folyamat ebbe az iranyba zarul.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-3">
                  <Scale className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Eszkalacio</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Ha a legitim kerdes nyitva marad, a kovetkezo szintre kell vinni az ugyet, nem csak ujra elkuldeni ugyanazt az emailt.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Hol csuszik el leggyakrabban a folyamat?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ott, hogy az utas nem tisztazza az alapokat, hianyosan adja be az ugyet, vagy tul sokaig
                turelemmel kezeli azt is, amikor valojaban mar nyilvanvaloan nem halad az ugy.
              </p>
              <p>
                A masik tipikus hiba az, hogy egy elutasito mondat utan teljesen feladja, pedig lehet, hogy az
                ugy valojaban csak a kovetkezo szintű elemzest igenyli.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              A jo eredmeny altalaban nem a kapkodasbol, hanem a jo sorrendbol jon
            </h2>
            <p className="mb-6 text-slate-300">
              Ha a folyamat jo logikaban epul fel, akkor gyorsabban latszik, hogy eros ugyrol van-e szo,
              es kisebb az eselye annak, hogy a legitarsasag adminisztrativ kaosszá alakitja a helyzetet.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Folyamat alapu ellenorzes inditasa
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mi az elso lepes?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A jogosultsag es a fo tenyallas ellenorzese.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mi jon a beadás utan?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Legitarsasagi valasz, hianypotlas, vita vagy tovabblepes a kovetkezo szintre.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Minden ugy ugyanugy zarul?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem. Lehet gyors kifizetes, lehet vita, es lehet eszkalacio is.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/milyen-dokumentumok-kellenek-a-karteriteshez" className="block hover:underline">
                Milyen dokumentumok kellenek a karteriteshez?
              </Link>
              <Link href="/hu/blog/mennyi-ido-alatt-fizetik-ki-a-karteritest" className="block hover:underline">
                Mennyi ido alatt fizetik ki a karteritest?
              </Link>
              <Link href="/hu/blog/mikor-nem-jar-karterites-alapok" className="block hover:underline">
                Mikor nem jar karterites?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
