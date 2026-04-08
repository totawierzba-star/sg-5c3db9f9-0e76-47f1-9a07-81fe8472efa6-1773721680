import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Plane,
  Receipt,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function DebrecenRepuloterJaratkesesek() {
  return (
    <LayoutHu>
      <SEO
        title="Debrecen repülőtér járatkésések – jogok és teendők [2026]"
        description="Mit tegyél, ha Debrecen repülőtéren késik vagy törlik a járatodat? Magyar útmutató EU261 jogokról, bizonyításról, költségekről és következő lépésekről."
        url="https://problemlot.com/hu/blog/debrecen-repuloter-jaratkesesek"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Debrecen repülőtér járatkésések – jogok és teendők [2026]",
            description:
              "Magyar útmutató a debreceni repülőtéren felmerülő járatkésésekhez, törlésekhez, költségekhez és EU261 jogokhoz.",
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
            datePublished: "2026-04-08",
            dateModified: "2026-04-08",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://problemlot.com/hu/blog/debrecen-repuloter-jaratkesesek",
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
                name: "Debrecenből induló késő járatra is vonatkozhat az EU261?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. Mivel Debrecen is uniós indulási pont, sok járatra alkalmazható az EU261, ha a végső késés és a konkrét körülmények ezt alátámasztják.",
                },
              },
              {
                "@type": "Question",
                name: "Mi a legfontosabb, ha Debrecenben nincs gyors alternatíva?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor különösen fontos az átfoglalási ajánlatok, a várható indulási idők és minden felmerülő indokolt költség pontos dokumentálása.",
                },
              },
              {
                "@type": "Question",
                name: "Debrecenben vett taxi vagy hotel blokkja számíthat később?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen, ha a költség indokolt, arányos és jól dokumentált. A blokk, az időpont és a helyszín együtt sokkal erősebb bizonyítékot ad.",
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
            <span className="text-slate-900 dark:text-white">Debrecen repülőtér</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <MapPin className="h-4 w-4" />
              Repuloteri utmutato
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Debrecen repülőtér járatkésések
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A <strong>Debrecen repülőtéren</strong> egy járatkésés vagy törlés gyakran más helyzetet jelent, mint
              egy nagy hubon. Kevesebb az azonnali alternatíva, nehezebb lehet az átfoglalás, és ezért még fontosabb,
              hogy gyorsan és pontosan dokumentáld, mi történt az utazásoddal.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-08</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Plane className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Debrecenből induló járatnál is lehet erős EU261-claim.</strong> A kulcs az, hogy mennyi lett a
              végső késés, hogyan reagált a légitársaság, és mennyire jól dokumentáltad a helyszíni eseményeket és
              költségeket.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Debrecenben ragadtál késés vagy törlés miatt?</h2>
            <p className="mb-6 text-blue-100">
              Ha nincs egyértelmű új járat, hosszú a várakozás vagy saját költség merült fel, érdemes most rögtön
              megnézni, milyen erős lehet a claim.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Debreceni járat ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mi erősíti a debreceni ügyet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Uniós indulás Debrecenből.</li>
                <li>Jól igazolható végső érkezési késés.</li>
                <li>Mentett airline üzenetek és átfoglalási ajánlatok.</li>
                <li>Megőrzött blokkok minden indokolt költségről.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mi gyengíti a helyzetet?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Nincs pontos nyom a repülőtéri kommunikációról.</li>
                <li>Csak becsült, de nem bizonyított költségek merülnek fel.</li>
                <li>Nem látszik tisztán a végső célállomásra érkezés ideje.</li>
                <li>Külön vett csatlakozásnál hiányzik az egy foglalás logikája.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. Miért más a Debrecen repülőtéri helyzet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Debrecen kisebb repülőtér, ezért egy késés vagy törlés után gyakran kevesebb azonnali opció van, mint
                egy nagyobb európai csomóponton. Ez az utas szempontjából azt jelenti, hogy az airline reakciója és az
                átfoglalás minősége különösen fontossá válik.
              </p>
              <p>
                Ilyen környezetben sokkal nagyobb súlya van annak is, hogy mit vállalsz saját költségre, és ezt
                mennyire tudod később bizonyítani.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Mit dokumentálj rögtön Debrecenben?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Mentsd el a foglalási adatokat, fotózd le a kijelzőt, őrizd meg a beszállókártyát és az airline minden
                e-mailjét vagy app-értesítését. Ha az indulási idő többször módosul, azt is érdemes külön követni.
              </p>
              <p>
                Debrecenben különösen fontos, hogy ne csak azt rögzítsd, mi volt az első ígéret, hanem azt is, hogyan
                változott a helyzet óráról órára.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Költségek, hotel, taxi, új jegy
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Debrecenben a késés vagy törlés miatt extra költséged keletkezik, a későbbi vita során sok múlik
                azon, hogy ezek indokolhatók és dokumentálhatók voltak-e. Egy blokk nélküli taxi vagy hotel jóval
                gyengébb, mint egy pontosan megőrzött költség.
              </p>
              <p>
                Saját jegyvásárlás előtt mindig érdemes megnézni, hogy a légitársaság adott-e reális alternatívát, mert
                később ez is központi kérdés lehet.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso keses</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A valódi időveszteség itt is inkább a végső célállomásnál látszik, nem csak a terminál kijelzőjén.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Receipt className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Minden blokk fontos</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Debreceni helyzetben a dokumentált taxi, étel vagy hotel költség sokkal többet ér, mint az utólagos emlék.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Kevesebb alternativa</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A kisebb repülőtéri környezet miatt az airline gyakorlati megoldása még fontosabb, mint nagy hubokon.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mikor érdemes gyorsan claim-ellenőrzést kérni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ha Debrecenből indulva már most látszik, hogy az átfoglalás gyenge, a késés hosszú lesz, vagy saját
                költségek jelennek meg, nem érdemes heteket várni az első elemzéssel. Minél frissebb a helyzet, annál
                könnyebb összerakni a teljes bizonyítási képet.
              </p>
              <p>
                A gyors ellenőrzés nem azért fontos, mert minden ügy egyforma, hanem azért, mert a kisebb repülőtéri
                környezetben a részletek gyorsan elvesznek, ha nincs rendben a dokumentáció.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-slate-100 p-8 dark:bg-gray-800/70">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Gyors ellenőrzőlista Debrecenhez
            </h2>
            <ul className="space-y-3 text-lg text-slate-700 dark:text-slate-200">
              <li>Fotózd le a kijelzőt és minden új indulási időt.</li>
              <li>Őrizd meg a boarding passt, a PNR-t és az airline üzeneteket.</li>
              <li>Dokumentáld az átfoglalási ajánlatokat vagy azok hiányát.</li>
              <li>Tartsd meg a taxi, étel és hotel blokkjait.</li>
              <li>A végső érkezési időre figyelj, ne csak az első csúszásra.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Debrecenből induló Wizz Air vagy más low-cost járatnál is lehet claim?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Igen. A döntő szempont itt sem a low-cost jelleg, hanem az EU261, a végső késés és a konkrét
                  tényállás.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Ha Debrecenben saját taxit vagy hotelt fizettem, az elveszett pénz?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Nem feltétlenül. Ha a költség indokolt és jól dokumentált, később fontos része lehet az ügynek.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                  Miért fontosabb Debrecenben a gyors dokumentálás?
                </h3>
                <p className="text-slate-700 dark:text-slate-200">
                  Mert kisebb repülőtéren gyorsabban elvész az információs lánc. Ha nincs mentve a kijelző, az airline
                  üzenet és a költség, később jóval nehezebb összerakni a teljes képet.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
