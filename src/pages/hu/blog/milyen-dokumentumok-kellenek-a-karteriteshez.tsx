import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Receipt,
  Ticket,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MilyenDokumentumokKellenekAKarteriteshez() {
  return (
    <LayoutHu>
      <SEO
        title="Milyen dokumentumok kellenek a karteriteshez? Teljes magyar checklista [2026]"
        description="Teljes magyar checklista a repulesi karteritesi igenyhez: boarding pass, PNR, e-ticket, screenshot, blokk, email, atfoglalasi adatok es minden fontos bizonyitek."
        url="https://problemlot.com/hu/blog/milyen-dokumentumok-kellenek-a-karteriteshez"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Milyen dokumentumok kellenek a karteriteshez? Teljes magyar checklista [2026]",
            description:
              "Magyar nyelvu dokumentum-checklista repulesi karteritesi ugyekhez: mely iratokat, screenshotokat, blokkokat es foglalasi adatokat erdemes megorizni keses, torles vagy atfoglalas utan.",
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
                "https://problemlot.com/hu/blog/milyen-dokumentumok-kellenek-a-karteriteshez",
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
                name: "Mi a legfontosabb dokumentum egy repulesi igenyhez?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A legfontosabb alapok altalaban a foglalasi adat, a boarding pass vagy e-ticket, valamint minden olyan bizonyitek, amely mutatja, mi tortent a jarattal.",
                },
              },
              {
                "@type": "Question",
                name: "Ha elveszett a boarding pass, akkor mar nincs esely?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem feltetlen. A boarding pass hasznos, de sokszor mas dokumentumok, emailek, app-screenshotok vagy foglalasi adatok is segitenek a tenyallas rekonstrukciojaban.",
                },
              },
              {
                "@type": "Question",
                name: "A blokkok tenyleg ennyire fontosak?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Ha a keses vagy torles miatt felmerult indokolt koltsegek visszateriteserol van szo, a blokk nagyon sokat szamit.",
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
            <span className="text-slate-900 dark:text-white">Dokumentum-checklista</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <FileText className="h-4 w-4" />
              Gyakorlati teendok
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Milyen dokumentumok kellenek a karteriteshez?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              Sokan csak akkor kezdenek dokumentumokat keresni, amikor mar be akarjak adni az igenyt.
              Addigra azonban gyakran eltunnek a screenshotok, elvesznek a blokkok, vagy mar senki nem
              emlekszik pontosan, mit ajanlott fel a legitarsasag. Ez a checklista abban segit, hogy ne
              maradjon ki semmi fontos.
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
                A lenyeg roviden
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              Minel jobb a dokumentacio, annal konnyebb pontosan megmutatni, mi tortent a jarattal,
              mikor kaptal tajekoztatast, es milyen koltsegek merultek fel. Nem csak egyetlen papir
              fontos, hanem a teljes bizonyiteklanc.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">
              Ha mar most megvan a dokumentacio, sokkal gyorsabb a kesobbi ellenorzes
            </h2>
            <p className="mb-6 text-blue-100">
              A legtobb jo ugy ott kezdodik, hogy az utas nem csak emlekszik a problemara, hanem meg is
              tudja mutatni az adatokat: mikor indult volna a jarat, mit irt a legitarsasag, es milyen
              kovetkezmenye volt a kesesnek vagy torlesnek.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Igeny elokeszitese magyarul
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Foglalasi adatok: PNR, e-ticket, visszaigazolo email
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 flex items-center gap-3">
                <Ticket className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">A foglalas gerince</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                A PNR, az e-ticket szam, a jegyvisszaigazolas es a teljes utvonal kulcsfontossagu alap.
                Ezek nelkul sokkal nehezebb egyertelmuen azonosítani, milyen jaratrol, melyik napon es
                milyen foglalasi strukturarol volt szo.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Boarding pass vagy check-in bizonyitek
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                Ha megvan a boarding pass, az nagyon jo. Ha nincs, akkor is hasznos lehet a mobil boarding pass
                screenshotja, a check-in email vagy barmilyen bizonyitek, ami mutatja, hogy az utas valóban
                jogosult volt a beszalasra.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Screenshotok es ertesitesek a legitarsasagtol
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <div className="mb-3 flex items-center gap-3">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Email, app, SMS</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                A kesesrol, torlesrol, atfoglalasrol vagy uj indulasi idorol szolo ertesitesek kulcsfontossaguak.
                Kulonosen torlesnel az ertesites idopontja gyakran a teljes ugy egyik legerosebb tenyezoje.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Fotok a repuloteri kijelzorol es az aktualis helyzetrol
            </h2>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <p className="text-slate-600 dark:text-slate-300">
                A kijelzo, gate informacio, kesesjelzes vagy mas relevans repuloteri allapotfoto nem helyettesiti
                a hivatalos dokumentumokat, de nagyon jo tamaszto bizonyitek lehet. Kulonosen akkor, ha kesobb vita
                van arrol, mikor es hogyan valtozott a helyzet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              5. Blokkok minden indokolt koltsegrol
            </h2>
            <div className="mb-4 flex items-center gap-3">
              <Receipt className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                Etel, ital, hotel, taxi, uj kozlekedes
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              Ha a keses vagy torles miatt tenylegesen kiadasod volt, a blokk altalaban kulcskategoria.
              Nem eleg arra emlekezni, hogy „vettem valamit a repuloteren”. A visszateritesi vitaknal a blokk
              sokszor fontosabb, mint maga a sajat elmondasod.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              6. Atfoglalasi es alternativ jarat adatok
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha a legitarsasag masik jaratra tett at, akkor az uj utvonal adatai ugyanolyan fontosak,
                mint az eredeti jarate. Uj indulasi ido, uj erkezesi ido, csatlakozas, masik repuloter:
                ezek mind befolyasolhatjak a kesobbi elemzest.
              </p>
              <p>
                Sok utas csak az eredeti jaratot orzi meg, mikozben a vita valojaban mar az alternativ
                utvonal kovetkezmenyeirol szol.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mi van, ha valami hianyzik?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Nem minden ugy bukik el attol, hogy nincs meg egyetlen konkret papir. Ha peldaul elveszett a
                boarding pass, a foglalasi email, a PNR, az app-screenshot vagy a legitarsasag uzenetei meg
                mindig segithetnek a tenyallas rekonstrukciojaban.
              </p>
              <p>
                Ugyanakkor minel tobbet kell utolag potolni, annal gyengebb lehet az ugy tisztasaga. Ezert
                a legjobb strategia mindig az, ha mar az utazas napjan rendszerezed a bizonyitekokat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Hogyan erdemes tarolni mindezt?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A legegyszerubb, ha egy kulon mappaba vagy albumba teszed a jarat osszes anyagat: foglalasi email,
                boarding pass, screenshotok, kijelzofotok, blokkok. Igy kesobb nem kell kulon osszevadaszni mindent.
              </p>
              <p>
                Praktikusan mar aznap este is sokat segithet, ha a fajlnevek vagy screenshotok alapjan latszik,
                mi az eredeti jarat, mi az uj ajanlat, es melyik blokk mihez tartozik.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-900 p-8 text-white dark:bg-black">
            <h2 className="mb-3 text-3xl font-bold">
              A jo dokumentacio sokszor fele siker
            </h2>
            <p className="mb-6 text-slate-300">
              A karteritesi vagy visszateritesi vita ritkan csak arrol szol, hogy „emlekszem, mi tortent”.
              Sokkal erossebb helyzet, ha ezt pontos adatokkal, idopontokkal, uzenetekkel es blokkokkal is ala tudod tamasztani.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-8 py-4 font-bold text-white transition hover:bg-blue-400"
            >
              Dokumentumok alapjan ellenorzes inditasa
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">FAQ</h2>
            <div className="space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Mi a legfontosabb dokumentum?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  A foglalasi adat, a boarding pass vagy check-in bizonyitek, es minden olyan anyag,
                  ami mutatja, pontosan mi tortent a jarattal.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  Ha nincs meg a boarding pass, vege az ugynek?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Nem feltetlen. Mas bizonyitekok is segithetnek, de nyilvan jobb, ha minel tobb minden megvan.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">
                  A blokkok tenyleg ennyire fontosak?
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Igen. Koltsegvisszateritesnel kulonosen sokat szamitanak.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              Kapcsolodo magyar cikkek
            </h2>
            <div className="space-y-3 text-blue-600 dark:text-blue-400">
              <Link href="/hu/blog/mit-tegyel-azonnal-ha-kesik-a-jaratod" className="block hover:underline">
                Mit tegyel azonnal, ha kesik a jaratod?
              </Link>
              <Link href="/hu/blog/mit-tegyel-ha-torlik-a-jaratodat" className="block hover:underline">
                Mit tegyel, ha torlik a jaratodat?
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
