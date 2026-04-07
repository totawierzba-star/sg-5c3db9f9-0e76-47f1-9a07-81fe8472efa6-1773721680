import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeEuro,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

import { LayoutHu } from "@/components/LayoutHu";
import { SEO } from "@/components/SEO";

export default function MennyiKarteritesJar3OrasKesesert() {
  return (
    <LayoutHu>
      <SEO
        title="Mennyi kártérítés jár 3 órás késésért? 250€, 400€ vagy 600€ [2026]"
        description="Magyar útmutató: mennyi pénz járhat 3 órás késésért, mikor lehet 250 / 400 / 600 euró a kártérítés, és mikor nem elég önmagában a háromórás csúszás."
        url="https://problemlot.com/hu/blog/mennyi-karterites-jar-3-oras-kesesert"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Mennyi kártérítés jár 3 órás késésért? 250€, 400€ vagy 600€ [2026]",
            description:
              "Magyar nyelvű útmutató arról, mennyi kártérítés járhat 3 órás késésért, mitől függ a 250 / 400 / 600 eurós összeg, és mikor nem elég önmagában a háromórás csúszás.",
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
              "@id": "https://problemlot.com/hu/blog/mennyi-karterites-jar-3-oras-kesesert",
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
                name: "Mindig jár pénz, ha a késés eléri a 3 órát?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nem mindig. A háromórás késés csak az egyik kulcsfeltétel. A járatnak az EU261 hatálya alá kell tartoznia, és az is számít, hogy a légitársaság tud-e valós kizáró körülményt bizonyítani.",
                },
              },
              {
                "@type": "Question",
                name: "Mi dönti el, hogy 250, 400 vagy 600 euró jár?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Az összeg főként a járat távolságától és bizonyos útvonal-kategóriáktól függ. Nem ugyanaz a kártérítési sáv vonatkozik egy rövidebb európai útra és egy hosszabb, nagy távolságú járatra.",
                },
              },
              {
                "@type": "Question",
                name: "A 3 órát indulásnál vagy érkezésnél nézik?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A pénzbeli kártérítésnél jellemzően a végső érkezési késés a döntő, nem pusztán az, hogy mikor szállt fel a gép.",
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
            <span className="text-slate-900 dark:text-white">3 oras keses karterites</span>
          </nav>

          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              <BadgeEuro className="h-4 w-4" />
              AI / GEO kerdesek
            </div>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-slate-900 dark:text-white md:text-5xl">
              Mennyi kártérítés jár 3 órás késésért?
            </h1>
            <p className="text-xl leading-8 text-slate-600 dark:text-slate-300">
              A rövid válasz az, hogy egy 3 órás késésnél nem egyetlen fix összeg létezik. A leggyakrabban
              emlegetett sávok a <strong>250, 400 vagy 600 euró</strong>, de az, hogy melyik lehet releváns,
              a járat típusától, távolságától és attól függ, hogy maga az ügy egyáltalán EU261-es ügy-e.
            </p>
            <div className="mt-5 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
              <span>Frissítve: 2026-04-07</span>
              <span>•</span>
              <span>Olvasási idő: 8 perc</span>
            </div>
          </header>

          <section className="mb-10 rounded-3xl border border-blue-200 bg-blue-50 p-8 dark:border-blue-900 dark:bg-blue-900/20">
            <div className="mb-4 flex items-center gap-3">
              <Clock3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Rövid, snippetre kész válasz
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
              3 órás késésnél jellemzően <strong>250, 400 vagy 600 euró</strong> merülhet fel, de a pontos
              összeg nem csak a háromórás csúszástól függ. Először azt kell tisztázni, hogy a járat EU261 alá
              tartozik-e, majd azt, hogy melyik távolsági kategóriába esik az út.
            </p>
          </section>

          <section className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white shadow-xl">
            <h2 className="mb-3 text-3xl font-bold">Ne csak azt nézd, hogy 3 óra volt-e</h2>
            <p className="mb-6 text-blue-100">
              A jó kérdés nem csak az, hogy „megvan-e a három óra”, hanem az is, hogy melyik szabályrendszer
              alá esik a járat, mekkora távú út volt, és van-e olyan körülmény, amelyre a légitársaság
              ténylegesen hivatkozhat.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:bg-blue-50"
            >
              Ellenőrizd, mennyi járhat
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">250 €</h2>
              <p className="text-slate-700 dark:text-slate-200">
                Jellemzően a rövidebb, kisebb távolságú ügyeknél jelenik meg ez a sáv. Ez nem automatikus
                fix összeg minden európai késésnél, de ez a legalacsonyabb klasszikus EU261-es sáv.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">400 €</h2>
              <p className="text-slate-700 dark:text-slate-200">
                Közepes távolságú, gyakran Európán belüli vagy köztes hosszúságú útvonalaknál lehet releváns.
                Sok utas itt hibázik, mert automatikusan 600 euróra számít minden nagyobb késésnél.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">600 €</h2>
              <p className="text-slate-700 dark:text-slate-200">
                Ez a legmagasabb klasszikus sáv, de nem jár automatikusan pusztán azért, mert az utas sokat
                késett. Jellemzően nagy távolságú utaknál és megfelelő jogi alap mellett merül fel.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Mitől függ valójában az összeg?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                A háromórás késés csak a kapunyitó kérdés egyik része. Ezután jön a valódi elemzés:
                milyen típusú út volt, mekkora távolságú járatról beszélünk, és megfelel-e az ügy az
                EU261 alapfeltételeinek.
              </p>
              <p>
                Ugyanaz a háromórás végső érkezési késés nem feltétlenül jelent ugyanakkora összeget egy
                rövidebb Budapest környéki európai útvonalnál és egy hosszabb, interkontinentális ügyben.
              </p>
            </div>
          </section>

          <section className="mb-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-green-700 dark:text-green-400">
                <CheckCircle2 className="h-6 w-6" />
                Mikor lehet erős az ügy?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a végső érkezési késés legalább 3 óra.</li>
                <li>Ha a járat ténylegesen az EU261 hatálya alá tartozik.</li>
                <li>Ha a távolsági kategória alapján egyértelmű a megfelelő sáv.</li>
                <li>Ha nincs meggyőző kizáró körülmény.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-red-700 dark:text-red-400">
                <XCircle className="h-6 w-6" />
                Mikor félrevezető a 3 órás szabály?
              </h2>
              <ul className="space-y-3 text-slate-700 dark:text-slate-200">
                <li>Ha a járat eleve nem EU261-es.</li>
                <li>Ha csak az indulási késést nézed az érkezés helyett.</li>
                <li>Ha a légitársaság valós rendkívüli körülményt tud bizonyítani.</li>
                <li>Ha a probléma inkább törlés, átfoglalás vagy önálló átszállás volt.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-amber-200 bg-amber-50 p-8 dark:border-amber-900 dark:bg-amber-900/20">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
              <AlertTriangle className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              Mikor nem elég önmagában a 3 órás késés?
            </h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Ha az ügy nem EU261-es, a háromórás csúszás önmagában nem fogja „bekapcsolni” az európai
                kompenzációs rendszert. Ugyanígy: ha a légitársaság sikeresen bizonyít egy olyan kivételes
                körülményt, amely kívül esett az ésszerű kontrollján, az összegkérdés másodlagossá válhat.
              </p>
              <p>
                Emiatt a jó elemzés mindig kétlépcsős: előbb jogosultság, utána összeg.
              </p>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">
              Miért fontos a végső érkezési késés?
            </h2>
            <div className="space-y-5 text-lg leading-8 text-slate-700 dark:text-slate-200">
              <p>
                Az utasok gyakran a táblán látott indulási csúszást figyelik, de a pénzbeli kártérítésnél
                gyakran a végső célállomásra való tényleges érkezés a döntő. Ez különösen fontos csatlakozásos
                utaknál.
              </p>
              <p>
                Lehet, hogy a gép „csak” 90 percet késett induláskor, de emiatt elveszett egy csatlakozás,
                és a végső megérkezés már bőven 3 órán túl történt. Ilyenkor az összeg megítélésének logikája
                már egészen más képet adhat.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-3xl font-bold text-slate-900 dark:text-white">Gyakori helyzetek</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Budapest–London, több mint 3 óra késés
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Ilyenkor sokszor a kisebb vagy közepes sáv jöhet szóba, de a pontos összeghez az útvonal és
                  a tényleges jogi környezet is számít.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                  Budapest–New York, 3 órát meghaladó végső késés
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nagy távolságú ügyeknél gyakran magasabb sáv merül fel, de itt is először a teljes EU261-es
                  jogosultságot kell megerősíteni.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-10 rounded-3xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-900/20">
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white">
              Mit érdemes most ellenőrizni?
            </h2>
            <p className="mb-6 text-lg leading-8 text-slate-700 dark:text-slate-200">
              Ha azt szeretnéd tudni, hogy a te ügyedben inkább 250, 400 vagy 600 euró jöhet-e szóba,
              először ellenőrizni kell a járat jogi besorolását, a végső érkezési késést és a kizáró
              tényezőket. Ez sokkal pontosabb, mint pusztán a háromórás szabályból kiindulni.
            </p>
            <a
              href="https://claimwinger.com/hu/kesett-jarat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700"
            >
              Kártérítési összeg ellenőrzése
              <ArrowRight className="h-5 w-5" />
            </a>
          </section>

          <section className="mb-10">
            <h2 className="mb-6 text-3xl font-bold text-slate-900 dark:text-white">GYIK</h2>
            <div className="space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3 órás késésnél automatikusan 600 euró jár?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem. A háromórás késés önmagában nem dönti el a sávot. A járat távolsága és jogi kategóriája
                  is számít.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  3 órás késésnél mindig pénzbeli kártérítés jár?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Nem mindig. Előbb azt kell megerősíteni, hogy az ügy EU261 alá tartozik-e, és nincs-e olyan
                  kizáró ok, amely miatt a légitársaság mentesülhet.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 dark:bg-gray-800 dark:ring-gray-700">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">
                  Az indulási vagy az érkezési idő számít?
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A pénzbeli kártérítésnél jellemzően a végső érkezési késés a fontosabb, különösen összetett
                  vagy csatlakozásos utaknál.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 pt-8 dark:border-gray-700">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Kapcsolódó cikkek</h2>
            <div className="space-y-3 text-blue-700 dark:text-blue-400">
              <Link href="/hu/blog/hany-ora-keses-utan-jar-karterites" className="block hover:underline">
                Hány óra késés után jár kártérítés?
              </Link>
              <Link
                href="/hu/blog/mennyit-fizetnek-a-legitarsasagok-250-400-600-euro"
                className="block hover:underline"
              >
                Mennyit fizetnek a légitársaságok? 250, 400 vagy 600 euró magyarázata
              </Link>
              <Link href="/hu/blog/mikor-jar-karterites-keses-eseten" className="block hover:underline">
                Mikor jár kártérítés késés esetén?
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutHu>
  );
}
