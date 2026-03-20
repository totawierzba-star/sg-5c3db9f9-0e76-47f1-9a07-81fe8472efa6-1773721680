import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Clock, Euro, AlertCircle, CheckCircle, ArrowRight, MapPin } from "lucide-react";

export default function TransaviaKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Transavia kompenzace 2026 — až 600 € za zpoždění letu"
        description="Zjistěte, jak získat kompenzaci až 600 € od Transavia za zpožděný nebo zrušený let. Kompletní průvodce pro české pasažéry."
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Kdy mám nárok na kompenzaci od Transavia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nárok máte při zpoždění ≥3 hodiny na konečné destinaci, zrušení letu méně než 14 dní před odletem nebo odmítnutí nástupu. Transavia musí prokázat mimořádnou okolnost, jinak platí €250-600 podle vzdálenosti."
                }
              },
              {
                "@type": "Question",
                "name": "Kolik zaplatí Transavia za zpožděný let?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Transavia vyplácí €250 za lety do 1500 km, €400 za lety 1500-3500 km a €600 za lety přes 3500 km při zpoždění ≥3 hodiny podle EU261."
                }
              },
              {
                "@type": "Question",
                "name": "Transavia je low-cost — platí EU261?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ano. EU261 platí pro VŠECHNY aerolinie provozující lety z/do EU, bez ohledu na to, zda jsou low-cost nebo premium. Transavia musí vyplatit stejně jako KLM."
                }
              }
            ]
          })
        }}
      />

      <article className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/cs/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center gap-2">
            ← Zpět na blog
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Plane className="w-10 h-10 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              Transavia
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transavia kompenzace za zpoždění — průvodce 2026
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>11 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Transavia zpožděla nebo zrušila váš let?</strong> Máte nárok na kompenzaci <strong>až 600 €</strong> podle nařízení EU 261/2004. Transavia je nízkonákladová dceřiná společnost KLM s 74% on-time performance, ale i tak dochází ke zpožděním a zrušením — a v těchto případech musí Transavia vyplatit kompenzaci. V tomto komplexním průvodci se dozvíte, kdy máte nárok, jak správně reklamovat a jak přinutit Transavia k výplatě i při odmítnutí.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Transavia odmítla kompenzaci nebo nereaguje?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vymáhá kompenzace od Transavia za vás — včetně složitých případů s přestupy přes Amsterdam (AMS) a sporů o mimořádné okolnosti. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Získat kompenzaci od Transavia
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Kdy máte nárok na kompenzaci od Transavia?
          </h2>

          <p>
            Kompenzace od Transavia vám přísluší, pokud jsou splněny <strong>všechny následující podmínky</strong>:
          </p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Zpoždění ≥ 3 hodiny při příchodu</strong>
                  <p className="text-gray-700 mt-2">
                    Měří se čas otevření dveří letadla na konečné destinaci. I pokud letadlo vzlétlo s 1h zpožděním, ale dorazilo s 4h zpožděním → <strong>PLATÍ kompenzace</strong>.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Let byl zrušen méně než 14 dní před odletem</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud Transavia zrušila let více než 14 dní dopředu a nabídla alternativu, kompenzace NENÍ povinná (ale refundace letenky ano).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Nebyla mimořádná okolnost</strong>
                  <p className="text-gray-700 mt-2">
                    Transavia musí prokázat, že zpoždění bylo způsobeno událostí mimo jejich kontrolu (bouře, stávka ATC). Běžná technická závada NENÍ mimořádná okolnost.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Let byl z EU nebo do EU</strong>
                  <p className="text-gray-700 mt-2">
                    Transavia je nizozemská aerolinie → EU261 platí pro všechny lety Transavia z/do Evropy.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Euro className="w-8 h-8 text-blue-600" />
            Výše kompenzace od Transavia — tabulka 2026
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Vzdálenost letu</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Zpoždění ≥ 3h</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Příklady tras Transavia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Do 1 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€250</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Amsterdam → Praha, Rotterdam → Vídeň</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">1 500 – 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€400</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Amsterdam → Marrákeš, Paříž → Tel Aviv</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Přes 3 500 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">Transavia většinou provozuje krátké/střední trasy</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Transavia vs. ostatní low-cost aerolinie — statistika
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Aerolinie</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">% dobrovolných výplat</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Průměrný čas výplaty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 font-semibold">Transavia</td>
                  <td className="px-6 py-4">
                    <span className="text-green-700 font-bold">61 %</span>
                  </td>
                  <td className="px-6 py-4">32 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">easyJet</td>
                  <td className="px-6 py-4">54 %</td>
                  <td className="px-6 py-4">35 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Vueling</td>
                  <td className="px-6 py-4">52 %</td>
                  <td className="px-6 py-4">42 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Ryanair</td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-bold">12 %</span>
                  </td>
                  <td className="px-6 py-4">180+ dnů (po eskalaci)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Wizz Air</td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-bold">18 %</span>
                  </td>
                  <td className="px-6 py-4">120+ dnů (po eskalaci)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. Transavia má lepší track record než většina low-cost konkurence díky vazbě na KLM Group.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Transavia odmítla kompenzaci nebo nereaguje?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s tisíci případů Transavia a zná všechny jejich argumenty. Vymůžeme kompenzaci za vás — platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zruseny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat kompenzaci bez starostí
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Časté dotazy (FAQ)
          </h2>

          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Transavia je low-cost — platí stejná kompenzace jako u KLM?
              </h3>
              <p className="text-gray-700">
                ANO. EU261 platí pro VŠECHNY aerolinie bez ohledu na cenu letenky. Transavia musí vyplatit stejných €250-600 jako mateřská společnost KLM.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času mám na podání reklamace u Transavia?
              </h3>
              <p className="text-gray-700">
                V České republice: <strong>3 roky</strong> od data letu. V Nizozemsku: 2 roky. Pokud jste český občan a let vycházel z ČR, platí česká 3letá lhůta.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Vyplatí se použít ClaimWinger místo samostatného vymáhání?
              </h3>
              <p className="text-gray-700">
                Ano. Transavia má střední míru dobrovolných výplat (61 %), ale občas odmítá neopodstatněně. <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger získá kompenzaci</Link> za 4-8 týdnů vs. 8-12 měsíců při samostatném vymáhání.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr
          </h2>

          <p>
            Transavia má lepší track record než většina low-cost konkurence díky standardům KLM Group, ale stále dochází k odmítnutím.
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Nárok na <strong>€250-600</strong> při zpoždění ≥ 3h</li>
            <li>Low-cost ≠ nižší kompenzace (EU261 platí pro všechny)</li>
            <li>Máte 3 roky na reklamaci</li>
            <li>61% dobrovolných výplat — vyšší než Ryanair/Wizz Air</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Připraveni získat kompenzaci od Transavia?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud (pokud potřeba). Specializujeme se na KLM Group (Transavia, KLM, Air France) a víme, jak argumentovat. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Začít vymáhat kompenzaci hned
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </LayoutCs>
  );
}
