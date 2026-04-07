import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  Plane,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function LotPolishAirlinesKarterites() {
  return (
    <LayoutHu>
      <SEO
        title="LOT Polish Airlines kártérítés – késés, törlés, EU261 [2026]"
        description="Magyar útmutató LOT Polish Airlines járatokhoz: mikor járhat kártérítés késés vagy törlés esetén, hogyan működik az EU261, és mire figyelj claimnél."
        url="https://problemlot.com/hu/blog/lot-polish-airlines-karterites"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "LOT Polish Airlines kártérítés – késés, törlés, EU261 [2026]",
            description:
              "Magyar nyelvű útmutató a LOT Polish Airlines járatkéséseihez és törléseihez: mikor jöhet szóba kártérítés, hogyan kell értelmezni az EU261 szabályait, és mikor erős vagy gyenge a claim.",
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
              "@id": "https://problemlot.com/hu/blog/lot-polish-airlines-karterites",
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
                name: "LOT járatnál is járhat kártérítés?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Igen. A LOT Polish Airlines járatainál is felmerülhet kártérítés, ha a járat az EU261 hatálya alá tartozik, és a késés vagy törlés megfelel a szabályoknak.",
                },
              },
              {
                "@type": "Question",
                name: "A LOT uniós légitársaságként mindig EU261-es ügyet jelent?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem minden eset automatikus, de a LOT uniós státusza gyakran fontos tényező. A pontos jogosultságot mindig az útvonal, az esemény és a végső érkezési késés alapján kell vizsgálni.",
                },
              },
              {
                "@type": "Question",
                name: "Mit tegyek, ha a LOT nem fizet vagy elutasítja a claimet?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ilyenkor újra kell nézni az ügy jogi alapját, a járat részleteit, a dokumentációt és az airline indoklását. Az első elutasítás nem feltétlenül zárja le végleg az ügyet.",
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
            <span className="text-slate-900 dark:text-white">LOT Polish Airlines</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <Plane className="h-4 w-4" />
              Legitarsasag-specifikus
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              LOT Polish Airlines kártérítés
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A LOT Polish Airlines különösen fontos a magyar utasoknak a varsói átszállások, lengyelországi indulások
              és Európán túli útvonalak miatt. Ezért gyakori kérdés, hogy <strong>mikor járhat kártérítés</strong>
              késés vagy törlés esetén. A rövid válasz az, hogy igen, sokszor felmerülhet, de a döntő tényező itt is
              az <strong>EU261</strong>, az útvonal és a tényleges járatesemény.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 10 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <BadgeEuro className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              <strong>Igen, LOT járatnál is járhat kártérítés.</strong> A döntő kérdés az, hogy a járat az EU261
              hatálya alá tartozik-e, mekkora lett a végső érkezési késés, és pontosan milyen feltételek mellett
              történt a törlés vagy más zavar.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">A LOT uniós státusza fontos, de nem ez az egyetlen kérdés</h2>
            <p className="mb-6 text-blue-100">
              A LOT EU-s légitársaság, ami sok útvonalnál erős jogi alapot jelenthet. Ettől még nem minden ügy lesz
              automatikusan nyerő: továbbra is számít az útvonal, a csatlakozás, a végső késés és az airline indoklása.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              LOT ügy ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős a LOT claim?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat az EU261 hatálya alá tartozik.</li>
                <li>Ha a végső érkezésnél jelentős késés alakult ki.</li>
                <li>Ha a törlés feltételei külön is megalapozhatják a kompenzációt.</li>
                <li>Ha a dokumentáció rendezett és az airline nem bizonyít kizáró okot.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor lehet nehezebb vagy gyengébb?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat jogi helyzete nem egyértelmű.</li>
                <li>Ha az érkezési késés nem éri el a döntő szintet.</li>
                <li>Ha a csatlakozás külön jegyen volt.</li>
                <li>Ha a bizonyítékok hiányosak vagy szétesettek.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              1. LOT és EU261: miért keresnek erre ilyen sokan?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A LOT sok olyan útvonalat üzemeltet, ahol a magyar utasok Lengyelországon keresztül jutnak tovább más
                európai vagy tengerentúli célok felé. Emiatt a claim értékelésénél gyakran nem egy egyszerű point-to-point
                járatot kell nézni, hanem egy teljes utazási láncot.
              </p>
              <p>
                Ezért LOT ügyben különösen fontos, hogy ne csak a brandre, hanem a teljes útvonal jogi logikájára
                figyeljünk.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              2. Késésnél mi a legfontosabb LOT esetén?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A LOT járatoknál is gyakran a <strong>végső célállomásra</strong> való késés a kulcs, nem pusztán az,
                hogy az első gép mennyivel csúszott.
              </p>
              <p>
                Ez különösen igaz varsói átszállásoknál, ahol egy rövidebb első késés is komoly végső időveszteséget
                okozhat, ha emiatt lekésed a csatlakozást.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              3. Törlésnél mire kell figyelni?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Törlésnél nem elég azt megnézni, hogy kaptál-e új járatot. A claim szempontjából fontos lehet, mikor
                tájékoztatott a LOT, milyen alternatívát adott, és mennyire változott meg a teljes utazási terv.
              </p>
              <p>
                Sok utas ott hibázik, hogy elfogadja a helyettesítő megoldást, de nem dokumentálja pontosan, mennyi
                végső idővesztesége lett valójában.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Clock3 className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Vegso erkezes</h3>
              <p className="text-slate-700 dark:text-slate-200">
                A claim erejét gyakran az mutatja meg, mennyivel később értél a tényleges célállomásra.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <Plane className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Csatlakozasok</h3>
              <p className="text-slate-700 dark:text-slate-200">
                LOT ügyeknél gyakori, hogy a csatlakozás és az egy foglalás kérdése döntő jelentőségű.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <AlertTriangle className="mb-4 h-8 w-8 text-blue-600 dark:text-blue-400" />
              <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">Indoklas es bizonyitek</h3>
              <p className="text-slate-700 dark:text-slate-200">
                Az airline válasza és a te dokumentumaid együtt határozzák meg, mennyire stabil az ügy.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              4. Mit tegyél, ha a LOT nem válaszol vagy vitatja az ügyet?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Ilyenkor először a claim szerkezetét kell rendbe tenni: foglalás, járatszámok, érkezési késés,
                csatlakozási logika és minden megőrzött dokumentum számít.
              </p>
              <p>
                Sok esetben nem az a fő probléma, hogy a LOT elutasította a kérelmet, hanem az, hogy az utas nem
                pontosan látja, melyik ponton vitatja az airline a felelősséget.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl bg-amber-50 p-8 ring-1 ring-amber-200 dark:bg-amber-900/10 dark:ring-amber-800">
            <h2 className="mb-4 text-2xl font-bold text-amber-900 dark:text-amber-300">
              Gyors ellenőrzőlista LOT ügyhöz
            </h2>
            <ul className="space-y-3 text-lg text-amber-900 dark:text-amber-200">
              <li>Írd fel a végső célállomásra való érkezés pontos idejét.</li>
              <li>Őrizd meg a teljes foglalás részleteit és az átszállási adatokat.</li>
              <li>Nézd meg, hogy egy bookingon volt-e az egész út.</li>
              <li>Dokumentáld a felajánlott alternatív járatot vagy útvonalat.</li>
              <li>Ne tekintsd véglegesnek az első sablonválaszt.</li>
            </ul>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Szeretnéd gyorsan ellenőrizni a LOT ügyedet?</h2>
            <p className="mb-6 text-slate-200">
              Ha késés, törlés vagy lekésett csatlakozás miatt bizonytalan vagy, érdemes rendezett ellenőrzéssel
              kezdeni. Így gyorsabban kiderül, hogy valóban erős-e az ügy és érdemes-e továbbvinni.
            </p>
            <a
              href="https://claimwinger.com/hu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-100"
            >
              ClaimWinger megnyitása
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">Gyakori kérdések</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  LOT járatnál az uniós státusz automatikusan elég?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Nem önmagában. Fontos tényező, de a konkrét útvonal, a késés mértéke és az esemény jellege is kell
                  az erős claimhez.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  LOT csatlakozásnál is járhat pénz, ha a végén csúszik meg az egész út?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, ez sokszor épp a csatlakozásos ügyek lényege. A végső érkezési késés és az egy foglalás kérdése
                  itt kulcsfontosságú.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  Érdemes külső segítséget kérni LOT ügyben?
                </h3>
                <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                  Igen, különösen akkor, ha a claim több szegmensből áll, csatlakozásos, vagy az airline indoklása
                  látszólag részletes, de nem egyértelműen meggyőző.
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
