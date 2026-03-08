import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Euro, XCircle, CheckCircle, ArrowRight, Globe } from "lucide-react";

export default function PobedaBelaviaEU261() {
  return (
    <LayoutCs>
      <SEO 
        title="Pobeda / Belavia — platí EU261 pro tyto dopravce? Průvodce 2026"
        description="Zjistěte, zda máte nárok na kompenzaci €250-600 při letu s Pobeda nebo Belavia podle EU261. Kompletní průvodce pro české cestující."
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
                "name": "Platí EU261 pro lety s Pobeda Airlines?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO, ale pouze pro lety ODLÉTAJÍCÍ z území EU. Pobeda není evropská aerolinka, takže lety Z Ruska DO Evropy NEPODLÉHAJÍ EU261. Například: Vídeň → Moskva (platí EU261), ale Moskva → Vídeň (NEPLATÍ)."
                }
              },
              {
                "@type": "Question",
                "name": "Platí EU261 pro lety s Belavia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO, ale pouze pro lety z EU. Belavia je běloruská aerolinka, takže stejné pravidlo: lety Z Evropy (např. Praha → Minsk) podléhají EU261, ale zpáteční lety (Minsk → Praha) NEPODLÉHAJÍ."
                }
              },
              {
                "@type": "Question",
                "name": "Jaké jsou aktuální sankce vůči Pobeda a Belavia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Od 2022 platí sankce EU: Pobeda a Belavia mají ZÁKAZ přelétávat vzdušný prostor EU a přistávat na letištích EU. Prakticky tyto aerolinie NELÉTAJÍ do Evropy, takže EU261 nároky jsou teoretické."
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
            <Globe className="w-10 h-10 text-red-600" />
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              Sankcionované aerolinie
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pobeda / Belavia — platí EU261 pro tyto dopravce?
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>9 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Máte let s Pobeda Airlines nebo Belavia?</strong> Zjistěte, zda vám přísluší kompenzace <strong>€250-600</strong> podle EU261 a jaké jsou aktuální sankce vůči těmto aerolinkám od roku 2022. <strong>Klíčové:</strong> EU261 platí <strong>pouze pro lety z EU</strong>, ale od 2022 tyto aerolinie <strong>nelétají do Evropy</strong> kvůli sankcím.
          </p>

          <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  ⚠️ Aktuální stav sankcí (2022-2026):
                </p>
                <p className="text-gray-700 mb-4">
                  Pobeda Airlines a Belavia mají od února/března 2022 <strong>ZÁKAZ přelétávat vzdušný prostor EU</strong> a přistávat na evropských letištích. Prakticky nelétají do/z Evropy, takže EU261 nároky jsou teoretické (týkají se starých letů před sankcemi).
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Ověřit nárok u jiné aerolinie
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-blue-600" />
            Kdy platí EU261 pro Pobeda a Belavia?
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Základní pravidlo EU261:</h3>
            <p className="text-gray-700 mb-4">
              Nařízení EU 261/2004 platí pro <strong>všechny lety odlétající z území EU</strong>, bez ohledu na národnost aerolinie. Pobeda (ruská) a Belavia (běloruská) musely respektovat EU261, když létaly z Evropy.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="font-semibold text-green-900 mb-2">✅ PLATILO EU261 (před 2022):</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• VIE → SVO (Vídeň → Moskva, Pobeda)</li>
                  <li>• PRG → MSQ (Praha → Minsk, Belavia)</li>
                  <li>• WAW → MSQ (Varšava → Minsk, Belavia)</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r">
                <p className="font-semibold text-red-900 mb-2">❌ NEPLATILO EU261:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• SVO → VIE (start mimo EU)</li>
                  <li>• MSQ → PRG (start mimo EU)</li>
                  <li>• Jakékoliv lety po 2022 (sankce)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            Sankce EU proti Pobeda a Belavia — timeline
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Datum</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Aerolinka</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Sankce</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">24.2.2022</td>
                  <td className="px-6 py-4">Belavia</td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-semibold">Zákaz přeletu vzdušného prostoru EU</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">27.2.2022</td>
                  <td className="px-6 py-4">Pobeda Airlines</td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-semibold">Zákaz přistání na letištích EU</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">1.3.2022</td>
                  <td className="px-6 py-4">Všechny RU/BY aerolinie</td>
                  <td className="px-6 py-4">
                    <span className="text-red-600 font-semibold">Úplný zákaz letů do/z EU</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 italic">
            *Od března 2022 žádné ruské ani běloruské aerolinie nelétají do Evropy. EU261 nároky se týkají pouze starých letů před sankcemi.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Jak vymáhat kompenzaci za staré lety (před 2022)?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Postup pro staré nároky:</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Ověřte prekluzivní lhůtu</strong>
                  <p className="text-gray-700 mt-2">
                    V ČR máte 3 roky na uplatnění nároku. Pro let z 1.1.2022 máte čas do 31.12.2024 → <strong>většina nároků už PROMLČENA</strong>.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Kontaktujte aerolinie (pokud existují)</strong>
                  <p className="text-gray-700 mt-2">
                    Pobeda stále existuje (létá v Rusku), Belavia také (létá v Bělorusku). Ale <strong>nerespektují EU rozhodnutí</strong> kvůli sankcím.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Soudní cesta je NEPROVEDITELNÁ</strong>
                  <p className="text-gray-700 mt-2">
                    Nelze vymáhat rozsudek proti ruské/běloruské aerolince kvůli sankcím. Prakticky: <strong>nárok existuje, ale není vymahatelný</strong>.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Máte zpožděný let s jinou aerolínkou?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vymáhá kompenzace za lety s běžnými evropskými a mezinárodními aeroliniemi (Ryanair, Wizz Air, Lufthansa, Emirates, Turkish Airlines atd.). Pobeda a Belavia NELZE vymáhat kvůli sankcím.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Ověřit nárok za jinou aerolínku
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
                Můžu získat kompenzaci za let Pobeda Praha → Moskva v roce 2021?
              </h3>
              <p className="text-gray-700">
                Teoreticky ANO (EU261 platilo), ale prakticky <strong>NELZE vymáhat</strong> kvůli sankcím. Navíc nárok z 2021 už je PROMLČEN (3 roky prošly k 2024).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Belavia mi dluží €600 za let v roce 2021 — co mám dělat?
              </h3>
              <p className="text-gray-700">
                Bohužel, <strong>nelze vymáhat</strong>. Belavia má zakázaný vstup do EU a české soudy nemohou vykonat rozsudek proti běloruské společnosti kvůli sankcím. Nárok existuje, ale je nevymahatelný.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kdy budou sankce zrušeny?
              </h3>
              <p className="text-gray-700">
                Není známo. Sankce EU proti Rusku a Bělorusku jsou podmíněny politickou situací. Do té doby Pobeda a Belavia <strong>nelétají do Evropy</strong> a EU261 nároky jsou teoretické.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Existuje pojištění, které by krylo tento případ?
              </h3>
              <p className="text-gray-700">
                Standard travel insurance obvykle <strong>nekryje sankce proti aeroliniím</strong>. Je to politické riziko, které není součástí běžného cestovního pojištění.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr
          </h2>

          <p>
            Pobeda Airlines a Belavia teoreticky podléhají EU261 pro lety z Evropy, ale od 2022 tyto aerolinie nelétají do EU kvůli sankcím.
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>EU261 platilo pro lety z EU (např. Praha → Moskva, Vídeň → Minsk)</li>
            <li>Od února/března 2022: <strong>zákaz přeletu vzdušného prostoru EU</strong></li>
            <li>Staré nároky (před 2022) jsou teoreticky platné, ale <strong>prakticky nevymahatelné</strong></li>
            <li>Většina nároků z 2021-2022 už je <strong>promlčena</strong> (3 roky)</li>
            <li>Nelze vymáhat rozsudek proti RU/BY aeroliniím kvůli sankcím</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Zpožděný let s jinou aerolínkou?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vymáhá kompenzace za běžné evropské a mezinárodní lety. Pobeda a Belavia bohužel nelze vymáhat, ale většina ostatních aerolinií ano. Ověřte svůj nárok zdarma.
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Ověřit nárok u jiné aerolinie
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