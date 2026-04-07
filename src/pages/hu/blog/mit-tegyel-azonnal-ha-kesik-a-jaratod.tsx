import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Camera,
  CheckCircle2,
  Clock3,
  FileText,
  Receipt,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MitTegyelAzonnalHaKesikAJaratod() {
  return (
    <LayoutHu>
      <SEO
        title="Mit tegyel azonnal, ha kesik a jaratod? Repuloteri teendok lepesrol lepesre [2026]"
        description="Magyar utmutato azonnali teendokhoz kesett jarat eseten: mit dokumentalj a repuloteren, mit kerj a legitarsasagtol, es hogyan erositsd a kesobbi karteritesi igenyt."
        url="https://problemlot.com/hu/blog/mit-tegyel-azonnal-ha-kesik-a-jaratod"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Mit tegyel azonnal, ha kesik a jaratod? Repuloteri teendok lepesrol lepesre [2026]",
            description:
              "Gyakorlati magyar nyelvu utmutato a repuloteren mar kesesben levo utasnak: dokumentalas, blokkgyujtes, tajekoztatas kérése, ellatas, hotel, atfoglalas es a kesobbi igeny megalapozasa.",
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
              "@id": "https://problemlot.com/hu/blog/mit-tegyel-azonnal-ha-kesik-a-jaratod",
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
                name: "Mi az elso dolog, amit kesesnel erdemes megtenni?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az egyik legfontosabb lepes az aktualis informaciok rogzitese: foto a kijelzorol, boarding pass megorzese, es annak feljegyzese, mit mondott pontosan a legitarsasag.",
                },
              },
              {
                "@type": "Question",
                name: "Erdemes blokkot kerni minden kiadasrol?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Etelek, italok, taxi, hotel vagy mas indokolt koltseg eseten a blokkok gyakran kulcsszerepet kapnak a kesobbi visszateritesi vitaban.",
                },
              },
              {
                "@type": "Question",
                name: "Mar a repuloteren is elindithato a jogosultsag ellenorzes?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Sok esetben mar ott is van eleg informacio ahhoz, hogy latszodjon, erdemes-e kesobb karteritesi vagy visszateritesi igenyt epiteni.",
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
            <span className="text-slate-900 dark:text-white">Kesett jarat azonnali teendok</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Clock3 className="h-4 w-4" />
              Gyakorlati teendok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mit tegyel azonnal, ha kesik a jaratod?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Amikor mar a repuloteren vagy, es kiderul, hogy a jaratod kesik, a legrosszabb, amit tehetsz,
              hogy csak varsz es remenykedsz. Mar az elso 15-30 percben olyan informaciokat es bizonyitekokat
              lehet osszegyujteni, amelyek kesobb sokat szamitanak.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissitve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasasi ido: 9 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                A legfontosabb alapelv
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Kesesnel egyszerre ket dolgot kell csinalni: kezelni a sajat utazasi helyzetedet, es kozben
              ugy dokumentalni a tortenteket, hogy kesobb ne csak emlekek maradjanak, hanem hasznalhato
              bizonyitekok is.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Ha mar most csuszik a jarat, erdemes azonnal ellenorizni a lehetosegeket
            </h2>
            <p className="mb-6 text-blue-100">
              Nem kell megvarni, amig teljesen szetesik az utazasi terv. Sokszor mar a repuloteren latszik,
              hogy a keses komolyabba valhat, es erdemes elinditani az elozetes ellenorzest.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Kesett jarat ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Rogzitsd az aktualis helyzetet
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 flex items-center gap-3">
                <Camera className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Foto, screenshot, idopecset</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Fotozd le a kijelzot, a gate informaciot, az uj indulasi idot, es tartsd meg a legitarsasag
                appjaban vagy emailben kuldott uzeneteket. Ezek segitenek kesobb megmutatni, hogy a keses
                mikor es hogyan jelent meg a gyakorlatban.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Orizd meg a boarding passt es minden foglalasi adatot
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 flex items-center gap-3">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Ne dobj ki semmit</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Boarding pass, PNR, e-ticket, foglalasi email, SMS vagy app screenshot: minden hasznos lehet.
                Sok ugy ott gyengul meg, hogy az utas utolag mar nem tudja egyertelmuen bemutatni az eredeti
                jarat adatait.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Kerj egyertelmu tajekoztatast a legitarsasagtol
            </h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <p className="text-slate-600 dark:text-slate-300">
                  Nem kell jogaszkent fogalmazni, de erdemes rogzíteni, mit mond a szemelyzet: mi az aktualis ok,
                  mekkora a varhato keses, lesz-e atfoglalas, es mikor adnak uj tajekoztatast.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <p className="text-slate-600 dark:text-slate-300">
                  Ha van ra mod, irasban vagy screenshotolhato formaban kulonosen ertekes lehet egy ilyen tajekoztatas.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Gyujtsd a blokkokat minden indokolt kiadasrol
            </h2>
            <div className="mb-4 flex items-center gap-3">
              <Receipt className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Etel, ital, taxi, hotel
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Ha a keses valoban elhuzodik, es emiatt indokolt koltseg merul fel, akkor a blokk kulcsfontossagu.
              Nem minden koltseg teritheto automatikusan, de blokk nelkul a jogos kiadasok bizonyitasa is sokkal nehezebb.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Figyeld, hogy csak kesesrol van-e meg szo
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Egy elhuzodo keses konnyen atcsuszhat mas jogi kategoriaba. Ha a jaratot atteszik masnapra,
                masik jaratra terelnek, vagy teljesen uj utvonalat ajanlanak fel, akkor mar lehet, hogy
                nem egyszeru keseskent kell gondolkodni.
              </p>
              <p>
                Ez azert fontos, mert ilyenkor a kesobbi jogi elemzes is mas lehet: refund, atfoglalas,
                torleshez kozeli helyzet vagy elveszett csatlakozas is felmerulhet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mit ne csinalj?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ne dobd ki a dokumentumokat, ne hagyatkozz csak szobeli igeretekre, es ne gondold azt,
                hogy „majd kesobb ugyis emlekezni fogok mindenre”.
              </p>
              <p>
                Akkor sem jo reflex azonnal elfogadni barmilyen voucher-t vagy gyors megoldast, ha nem erted,
                pontosan mit kapsz cserébe, es ez hogyan hat a kesobbi igenyre.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mikor erdemes mar a repuloteren elinditani az ellenorzest?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, amikor mar latszik, hogy a keses nem csak 20-30 perces csuszas. Ha a legitarsasag
                bizonytalan, folyamatosan tolja ki az idot, csatlakozast veszelyeztet, vagy mar etelre,
                italra, hotelre lesz szukseg, akkor a helyzet komolyabb lehet.
              </p>
              <p>
                Ilyenkor nem az a cel, hogy azonnal „nyerj” egy ugyet, hanem hogy minel kevesebb informacio vesszen el.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              Az elso oraban osszegyujtott anyag sokszor tobbet er, mint egy hosszu utolagos vita
            </h2>
            <p className="mb-6 text-slate-300">
              A jo ugyek egy resze mar a repuloteren eldol, mert az utas rendesen dokumental, megorzi a
              bizonylatokat, es idoben felismeri, hogy a keses mar tulmutat egy egyszeru kellemetlensegen.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Kesett jarat magyar ellenorzese
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mi az elso dolog, amit kesesnel erdemes megtenni?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Rogzitsd az aktualis allapotot: fotozd a kijelzot, orizd meg a boarding passt, es mentsd el,
                  mit ir vagy mond a legitarsasag.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Minden kiadasrol kell blokk?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen, erosen ajanlott. Blokk nelkul sokkal nehezebb lesz barmilyen utolagos koltsegvisszaterites.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mar ott, a repuloteren is lehet ertelme az ellenorzesnek?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen. Sokszor mar eleg adat van ahhoz, hogy latszodjon, komolyabb ugy lesz-e a keses.
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
              <Link href="/hu/blog/keses-vs-torles-vs-tulfoglalas-kulonbsegek" className="block hover:underline">
                Keses vs torles vs tulfoglalas: mi a kulonbseg?
              </Link>
              <Link href="/hu/kesett-jarat" className="block hover:underline">
                Kesett jarat: alapjogok es ellenorzes
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
