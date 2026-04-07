import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  Building2,
  CheckCircle2,
  User,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function KiKapjaAPenztUtasVagyCeg() {
  return (
    <LayoutHu>
      <SEO
        title="Ki kapja a pénzt: utas vagy cég? Üzleti út és repülési kártérítés [2026]"
        description="Magyar útmutató üzleti utakhoz: kié a repülési kártérítés, ha a jegyet a cég fizette, és mikor az utas a jogosult, nem a munkáltató vagy az utazási iroda."
        url="https://problemlot.com/hu/blog/ki-kapja-a-penzt-utas-vagy-ceg"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Ki kapja a pénzt: utas vagy cég? Üzleti út és repülési kártérítés [2026]",
            description:
              "Magyar nyelvű útmutató arról, ki jogosult a repülési kártérítésre üzleti út esetén, ha a jegyet a cég fizette, és mikor nem a jegyvásárló, hanem az utas személye a döntő.",
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
              "@id": "https://problemlot.com/hu/blog/ki-kapja-a-penzt-utas-vagy-ceg",
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
                name: "Ha a cég fizette a jegyet, akkor is az utas kapja a kártérítést?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sok esetben igen. A repülési kártérítés logikájában gyakran az utas személye a kulcs, nem az, hogy ki fizette a jegyet. A pontos helyzetet azonban a konkrét körülmények és a cég belső szabályai is befolyásolhatják.",
                },
              },
              {
                "@type": "Question",
                name: "A munkáltató automatikusan átveheti a pénzt az utas helyett?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem automatikusan. Az, hogy ki intézi az ügyet és ki kapja meg végül a kifizetést, külön kérdés lehet. Sok esetben az utas az elsődleges érintett fél, de a cég belső elszámolása ettől eltérhet.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a különbség a jegyár és a kártérítés között?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A jegyár visszatérítése és a pénzbeli kompenzáció nem ugyanaz. A jegy árát gyakran a fizető fél nézőpontjából vizsgálják, míg a kompenzáció sokszor az utast ért időveszteséghez és zavarhoz kapcsolódik.",
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
            <span className="text-slate-900 dark:text-white">Utas vagy cég</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <BadgeEuro className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Ki kapja a pénzt: utas vagy cég?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A rövid válasz az, hogy sok esetben a repülési kártérítés logikájában <strong>az utas</strong>
              a központi szereplő, még akkor is, ha a jegyet a cég fizette. A jegyár-visszatérítés és a
              pénzbeli kompenzáció azonban nem ugyanaz, ezért üzleti utaknál ezt a két kérdést külön kell
              kezelni.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Gyakran az utas.</strong> Attól, hogy a jegyet a munkáltató vagy egy cég fizette,
              a repülési kompenzáció nem válik automatikusan a cég „tulajdonává”. Az utast ért késés,
              törlés vagy más zavar sok esetben önállóan is értelmezhető.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Aki fizette a jegyet, nem mindig ugyanaz, akit a kár ért</h2>
            <p className="mb-6 text-blue-100">
              Ez a kulcs az egész témában. Egy üzleti úton a jegy árát fizetheti a cég, de a lekésett csatlakozás,
              a repülőtéri veszteglés vagy az elveszett idő közvetlenül mégis az utast érinti.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Jogosultság ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor erős a „utas kapja” logika?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a kérdés pénzbeli kompenzáció, nem sima jegyár-visszatérítés.</li>
                <li>Ha a járatprobléma közvetlenül az utas utazását zavarta meg.</li>
                <li>Ha nincs külön céges megállapodás az ilyen pénzek kezeléséről.</li>
                <li>Ha a claim maga az utashoz kötött történeti és személyes ügy.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet bonyolultabb a helyzet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a cég maga intézi az összes utazási claimet.</li>
                <li>Ha vállalati szabályzat külön rendelkezik az ilyen kifizetésekről.</li>
                <li>Ha a kérdés valójában refund, nem kompenzáció.</li>
                <li>Ha több szereplő van: cég, OTA, utazási iroda, utas.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miért kell különválasztani a refundot és a kompenzációt?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mert a refund sokszor ahhoz a félhez kötődik, aki a jegyet ténylegesen megvásárolta vagy a
                pénzügyi terhet viselte. A kompenzáció ezzel szemben gyakran inkább az utas oldaláról nézve
                értelmezhető, hiszen a járatprobléma az ő utazási élményét és idejét zavarta meg.
              </p>
              <p>
                Ha ezt a két kérdést összekeverjük, könnyen rossz következtetésre jutunk arról, hogy ki a
                tényleges jogosult vagy kinek kell egyáltalán elindítania az ügyet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Üzleti út: tipikus szereplők és félreértések
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A valóságban sokszor négy szereplő is megjelenik: az utas, a munkáltató, az OTA vagy travel
                manager, illetve maga a légitársaság. Ettől lesz a kérdés bonyolultabb, de a kiindulópont mégis
                ugyanaz: a járatprobléma kit érintett közvetlenül, és milyen típusú követelésről beszélünk.
              </p>
              <p>
                Emiatt gyakori, hogy a cég fizette a jegyet, de a claim logikája mégis az utasból indul ki.
                A belső céges elszámolás ezután már külön kérdés lehet.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor érdemes külön ránézni a belső céges szabályokra?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Akkor, ha a vállalatnak van travel policy-je, központi utazásszervezése vagy belső gyakorlata
                arra, hogyan kell kezelni a repülési claim-eket. Ezek nem írják át automatikusan az utasjogi
                logikát, de befolyásolhatják, hogy cégen belül ki intézi és hová érkezik a kifizetés.
              </p>
              <p>
                Praktikusan ezért üzleti utaknál nem elég a jogot nézni, a belső folyamatot is érdemes tisztázni.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Tipikus példák</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Cég fizette a jegyet</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Ettől még a kompenzációs kérdés sokszor továbbra is az utashoz kapcsolódik, nem pusztán a
                  fizető félhez.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <div className="mb-3 flex items-center gap-2">
                  <User className="h-5 w-5 text-slate-700 dark:text-slate-200" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Saját utazás, ajándékba vett jegy</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  Az, hogy más fizette a jegyet, még itt sem dönti el automatikusan, hogy ki lehet a kompenzáció
                  természetes jogosultja.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mi a legjobb következő lépés?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha üzleti útról vagy céges jegyről van szó, először azt tisztázd, hogy refundról vagy kompenzációról
              beszélünk, és van-e a cégnél külön szabály az ilyen ügyekre. Ezután lehet jól megítélni, ki a
              tényleges kedvezményezett.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Céges ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Ha a cég vette a jegyet, akkor biztosan a cég kapja a pénzt?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem biztos. A kompenzáció és a jegyár-visszatérítés logikája eltérhet.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Az utas lehet jogosult akkor is, ha nem ő fizetett?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Igen, sok esetben igen, mert a járatprobléma közvetlenül őt érinti.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Mit kell még megnézni üzleti útnál?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A cég belső szabályzatát és azt, hogy refundról vagy kompenzációról van-e szó.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/hogyan-mukodik-a-karterites-folyamata" className="block hover:underline">
                Hogyan működik a kártérítés folyamata?
              </Link>
              <Link href="/hu/blog/mi-van-ha-vouchert-fogadtam-el" className="block hover:underline">
                Mi van, ha voucher-t fogadtam el?
              </Link>
              <Link href="/hu/blog/low-cost-jaratoknal-is-jar-penz" className="block hover:underline">
                Low-cost járatoknál is jár pénz?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
