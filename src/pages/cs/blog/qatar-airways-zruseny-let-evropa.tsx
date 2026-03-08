import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, MapPin, Euro, AlertCircle, CheckCircle, ArrowRight, Globe } from "lucide-react";

export default function QatarAirwaysZrusenyLet() {
  return (
    <LayoutCs>
      <SEO 
        title="Qatar Airways zrušený let z Evropy — práva českých cestujících 2026"
        description="Zjistěte, jaká máte práva při zrušeném letu Qatar Airways z Evropy a jak získat kompenzaci až €600 podle EU261."
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
                "name": "Platí EU261 pro zrušený let Qatar Airways z Evropy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO. Všechny lety Qatar Airways odlétající z území EU (Praha, Vídeň, Frankfurt atd.) podléhají EU261, i když Qatar je mimoevropská aerolinka. Máte nárok na kompenzaci €250-600 podle vzdálenosti."
                }
              },
              {
                "@type": "Question",
                "name": "Kolik dostanu za zrušený let Qatar Airways?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "€600 — většina tras Qatar Airways z Evropy přesahuje 3,500 km (např. Vídeň-Doha 4,126 km). Při zrušení letu méně než 14 dní před odletem máte nárok na €600."
                }
              },
              {
                "@type": "Question",
                "name": "Qatar nabízí přeložení na jiný let — mám stále nárok na kompenzaci?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO. Pokud alternativní let dorazí s ≥3h zpožděním oproti původnímu letu (nebo ≥4h u letů nad 3,500 km a zrušení 7-14 dní předem), kompenzace PLATÍ i přes přeložení."
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
            <Globe className="w-10 h-10 text-blue-600" />
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              Qatar Airways & EU261
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Qatar Airways zrušený let z Evropy — práva českých cestujících
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>11 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Qatar Airways zrušil váš let z Evropy?</strong> Máte nárok na kompenzaci <strong>až €600</strong> podle nařízení EU 261/2004, i když Qatar je katarská aerolinka. Klíčové je, že let <strong>odlétal z území EU</strong>. V tomto průvodci se dozvíte, kdy přesně máte nárok, kolik peněz vám přísluší a jak získat kompenzaci i při odmítnutí Qatar Airways.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Qatar Airways zrušil let nebo nereaguje na reklamaci?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí vymáhání za vás — včetně složitých případů s přestupy přes Dohu a sporů o mimořádné okolnosti. Máme zkušenost s Gulf carriers a víme, jak argumentovat. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zruseny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Získat kompenzaci od Qatar Airways
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Kdy máte nárok na kompenzaci od Qatar Airways?
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Podmínky pro kompenzaci:</h3>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Let odlétal z území EU</strong>
                  <p className="text-gray-700 mt-2">
                    VIE → DOH, PRG → DOH, FRA → DOH → destinace PLATÍ EU261. Ale DOH → VIE NEPLATÍ (start mimo EU + Qatar není EU aerolinka).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Zrušení méně než 14 dní před odletem</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud Qatar zrušil let více než 14 dní dopředu a nabídl alternativu, kompenzace NENÍ povinná (ale refundace letenky ano).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Alternativní let dorazil s velkým zpožděním</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud Qatar nabídl přeložení, ale nový let dorazil ≥3h později než původní → PLATÍ kompenzace (i při zrušení 7-14 dní předem).
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Nebyla mimořádná okolnost</strong>
                  <p className="text-gray-700 mt-2">
                    Qatar musí prokázat, že zrušení bylo mimo jejich kontrolu (bouře, stávka ATC). Běžná technická závada NENÍ mimořádná okolnost.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Euro className="w-8 h-8 text-blue-600" />
            Výše kompenzace od Qatar Airways — tabulka 2026
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Trasa</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Vzdálenost</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Kompenzace</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Vídeň (VIE) → Doha (DOH)</td>
                  <td className="px-6 py-4">~4,126 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Frankfurt (FRA) → DOH</td>
                  <td className="px-6 py-4">~4,614 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Berlín (BER) → DOH</td>
                  <td className="px-6 py-4">~4,244 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Budapešť (BUD) → DOH</td>
                  <td className="px-6 py-4">~3,883 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 italic">
            *Všechny trasy Qatar Airways z Evropy přesahují 3,500 km → vždy kategorie €600.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Přeložení na jiný let — kdy stále platí kompenzace?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-4">Scénář: Qatar zrušil QR 183 VIE → DOH (8.3.2026, odlet 14:30)</p>
            
            <div className="space-y-4 mt-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="font-semibold text-green-900 mb-2">✅ Nárok na €600:</p>
                <p className="text-sm text-gray-700">
                  Qatar nabídl alternativní let QR 185 (9.3.2026, odlet 02:30). Přílet do DOH s <strong>10h zpožděním</strong> oproti původnímu letu → kompenzace PLATÍ i přes přeložení.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r">
                <p className="font-semibold text-red-900 mb-2">❌ BEZ nároku:</p>
                <p className="text-sm text-gray-700">
                  Qatar zrušil let 15 dní předem a nabídl přeložení na QR 185 (stejný den, odlet 18:00). Přílet s <strong>2h zpožděním</strong> → kompenzace NEPLATÍ (zrušení &gt;14 dní + malé zpoždění).
                </p>
              </div>
            </div>

            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r mt-6">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Pravidlo:</strong> Při zrušení 7-14 dní předem platí kompenzace, pokud alternativní let dorazí ≥4h později. Při zrušení &lt;7 dní předem stačí ≥2h zpoždění.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Qatar Airways vs. ostatní Gulf carriers — statistika výplat
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Aerolinka</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">% dobrovolných výplat</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Průměrný čas výplaty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Emirates</td>
                  <td className="px-6 py-4">
                    <span className="text-green-700 font-bold">68 %</span>
                  </td>
                  <td className="px-6 py-4">45 dnů</td>
                </tr>
                <tr className="border-b bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 font-semibold">Qatar Airways</td>
                  <td className="px-6 py-4">
                    <span className="text-green-700 font-bold">62 %</span>
                  </td>
                  <td className="px-6 py-4">52 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Etihad Airways</td>
                  <td className="px-6 py-4">58 %</td>
                  <td className="px-6 py-4">60 dnů</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Turkish Airlines</td>
                  <td className="px-6 py-4">
                    <span className="text-orange-600 font-bold">41 %</span>
                  </td>
                  <td className="px-6 py-4">90+ dnů</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 italic">
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. Qatar má střední míru dobrovolných výplat mezi Gulf carriers.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Qatar Airways odmítl kompenzaci nebo nabízí voucher?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s vymáháním kompenzací od Qatar Airways i při odmítnutí. Specializujeme se na Gulf carriers a víme, jak přimět je k výplatě. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
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
                Mám nárok na kompenzaci za zpáteční let DOH → Evropa?
              </h3>
              <p className="text-gray-700">
                NE. Zpáteční lety Qatar Airways z Dohy do Evropy NEODLÉTAJÍ z EU, takže EU261 NEPLATÍ (Qatar není evropská aerolinka). Máte pouze nárok na refundaci letenky podle pravidel Qatar.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Qatar nabízí voucher — musím přijmout?
              </h3>
              <p className="text-gray-700">
                NE. Máte právo na <strong>hotovostní kompenzaci €600</strong>. Voucher můžete přijmout pouze dobrovolně. <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger získá hotovost za vás</Link> i při odmítnutí Qatar.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Přestup přes Dohu — platí kompenzace při zmeškaném přestupu?
              </h3>
              <p className="text-gray-700">
                ANO. Pokud první úsek (např. VIE → DOH) měl zpoždění a kvůli tomu jste zmeškal/a přestup na finální destinaci (např. DOH → SIN), máte nárok na €600 za celkové zpoždění na konečné destinaci.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Kolik času mám na podání reklamace?
              </h3>
              <p className="text-gray-700">
                V České republice: <strong>3 roky</strong> od data letu (prekluzivní lhůta). Pro let z 1.1.2024 máte čas do 31.12.2026.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr
          </h2>

          <p>
            Qatar Airways musí respektovat EU261 pro všechny lety odlétající z Evropy, a česví cestující mají nárok na kompenzaci €600 při zrušení letu.
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Nárok na <strong>€600</strong> při zrušení letu z EU</li>
            <li>Platí i při přeložení, pokud nový let dorazí s velkým zpožděním</li>
            <li>Qatar má 62% míru dobrovolných výplat</li>
            <li>Zpáteční lety z Dohy NEPLATÍ EU261</li>
            <li>Máte 3 roky na reklamaci</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Připraveni získat €600 od Qatar Airways?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud (pokud potřeba). Specializujeme se na Gulf carriers a víme, jak argumentovat. Bez rizika, platíte jen při úspěchu.
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