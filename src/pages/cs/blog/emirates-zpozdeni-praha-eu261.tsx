import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, MapPin, Euro, AlertCircle, CheckCircle, ArrowRight, Globe } from "lucide-react";

export default function EmiratesZpozdeniPraha() {
  return (
    <LayoutCs>
      <SEO 
        title="Emirates zpoždění z Prahy — kdy platí EU261 a nárok na €600?"
        description="Zjistěte, kdy platí EU261 pro lety Emirates z Prahy a jak získat kompenzaci až €600 za zpoždění nebo zrušení letu do Dubaje."
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
                "name": "Platí EU261 pro lety Emirates z Prahy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ANO. Lety Emirates odlétající z Praha Ruzyně (PRG) do Dubaje (DXB) podléhají EU261, protože odlétají z území EU. Máte nárok na kompenzaci €600 při zpoždění ≥3 hodiny (vzdálenost >3500 km)."
                }
              },
              {
                "@type": "Question",
                "name": "Kolik dostanu za zpožděný let Emirates z Prahy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "€600 — Praha-Dubaj má vzdálenost ~3,776 km (kategorie nad 3,500 km). Při zpoždění ≥3 hodiny na konečné destinaci máte nárok na maximální kompenzaci €600."
                }
              },
              {
                "@type": "Question",
                "name": "Emirates je mimoevropská aerolinka — jak vymáhat nárok?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Emirates musí respektovat EU261 pro lety z EU. Pokud odmítnou výplatu, můžete se obrátit na ÚCL (Czech Aviation Authority) nebo využít ClaimWinger k vymáhání přes české soudy."
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
              Emirates & EU261
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Emirates zpoždění z Prahy — kdy platí EU261 a nárok na €600?
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>12 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Let Emirates z Prahy do Dubaje měl zpoždění?</strong> Máte nárok na kompenzaci <strong>až €600</strong> podle nařízení EU 261/2004, i když Emirates je mimoevropská aerolinka. Klíčové je, že let <strong>odlétal z území EU</strong> (Praha Ruzyně). V tomto průvodci se dozvíte, kdy přesně platí EU261 pro Emirates, jak vysoká je kompenzace a jak ji vymoci i při odmítnutí.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Emirates odmítl kompenzaci nebo nereaguje?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí vymáhání za vás — i proti mimoevropským aerolinkám jako Emirates. Máme zkušenost s tisíci případů letů z/do Prahy a víme, jak argumentovat proti typickým odmítnutím. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Získat €600 od Emirates
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            Kdy platí EU261 pro lety Emirates z Prahy?
          </h2>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Základní pravidlo EU261:</h3>
            <p className="text-gray-700 mb-4">
              Nařízení EU 261/2004 platí pro <strong>všechny lety odlétající z území EU</strong>, bez ohledu na národnost aerolinie. Emirates EK 139 Praha → Dubaj → destinace v Asii/Africe podléhá EU261, protože <strong>start je v Praze (EU)</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r">
                <p className="font-semibold text-green-900 mb-2">✅ Platí EU261:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• PRG → DXB (Emirates)</li>
                  <li>• PRG → DXB → BKK (s přestupem)</li>
                  <li>• PRG → DXB → SYD (s přestupem)</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-4 rounded-r">
                <p className="font-semibold text-red-900 mb-2">❌ NEPLATÍ EU261:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• DXB → PRG (start mimo EU)</li>
                  <li>• BKK → DXB → PRG (celá trasa mimo EU)</li>
                  <li>• IST → PRG (není EU aerolinka)</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <Euro className="w-8 h-8 text-blue-600" />
            Kolik dostanu za zpožděný let Emirates z Prahy?
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Trasa</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Vzdálenost</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Kompenzace (≥3h)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">PRG → DXB (přímý)</td>
                  <td className="px-6 py-4">~3,776 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">PRG → DXB → BKK</td>
                  <td className="px-6 py-4">~7,400 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">PRG → DXB → SYD</td>
                  <td className="px-6 py-4">~12,800 km</td>
                  <td className="px-6 py-4">
                    <span className="text-2xl font-bold text-blue-600">€600</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 italic">
            *Všechny trasy Emirates z Prahy přesahují 3,500 km → vždy kategorie €600 při zpoždění ≥3 hodiny.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Přestupy přes Dubaj — jak se počítá zpoždění?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <p className="font-semibold text-gray-900 mb-4">Scénář 1: Přímý let PRG → DXB</p>
            <p className="text-gray-700 mb-4">
              • Plánovaný přílet DXB: 23:30<br/>
              • Skutečný přílet DXB: <strong>03:15</strong> (následující den)<br/>
              → Zpoždění: <strong>3h 45min</strong> → <span className="text-green-600 font-bold">NÁROK na €600</span>
            </p>

            <p className="font-semibold text-gray-900 mb-4 mt-6">Scénář 2: Let s přestupem PRG → DXB → BKK</p>
            <p className="text-gray-700 mb-4">
              • Plánovaný přílet BKK: 19:00<br/>
              • Skutečný přílet BKK: <strong>22:30</strong> (zmeškaný přestup, přeložení na pozdější let)<br/>
              → Zpoždění na konečné destinaci: <strong>3h 30min</strong> → <span className="text-green-600 font-bold">NÁROK na €600</span>
            </p>
            
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r mt-4">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Klíčové:</strong> Zpoždění se měří při <strong>příchodu na konečnou destinaci</strong> (otevření dveří letadla), nikoli při odletu nebo přistání prvního úseku!
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Emirates vs. ostatní Gulf carriers — statistika výplat
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
                <tr className="border-b bg-green-50 hover:bg-green-100">
                  <td className="px-6 py-4 font-semibold">Emirates</td>
                  <td className="px-6 py-4">
                    <span className="text-green-700 font-bold">68 %</span>
                  </td>
                  <td className="px-6 py-4">45 dnů</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">Qatar Airways</td>
                  <td className="px-6 py-4">62 %</td>
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
            *Data: ÚCL & ClaimWinger statistiky 2023-2025. Emirates má nejlepší track record mezi Gulf carriers pro EU261 výplaty.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Emirates odmítl kompenzaci nebo nabízí voucher?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s vymáháním kompenzací od Emirates i při odmítnutí. Specializujeme se na lety z Prahy a víme, jak přimět Gulf carriers k výplatě. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zruseny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat kompenzaci od Emirates
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
                Mám nárok na kompenzaci za zpáteční let DXB → PRG?
              </h3>
              <p className="text-gray-700">
                NE. Zpáteční let Dubaj → Praha NEODLÉTÁ z EU, takže EU261 NEPLATÍ (Emirates není evropská aerolinka). Máte pouze nárok na refundaci letenky a péči na letišti podle pravidel Emirates.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Emirates nabízí voucher — musím přijmout?
              </h3>
              <p className="text-gray-700">
                NE. Máte právo na <strong>hotovostní kompenzaci €600</strong>. Voucher můžete přijmout pouze dobrovolně. <Link href="https://claimwinger.com/cs" className="text-blue-600 hover:underline font-semibold">ClaimWinger získá hotovost za vás</Link> i při odmítnutí Emirates.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jak dlouho trvá vymáhání kompenzace od Emirates?
              </h3>
              <p className="text-gray-700">
                Emirates dobrovolně vyplácí v ~68 % případů do 45 dnů. Při odmítnutí může eskalace přes ÚCL/soud trvat 6-12 měsíců. ClaimWinger zkracuje proces díky zkušenostem s Gulf carriers.
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
            Lety Emirates z Prahy podléhají EU261 a máte nárok na kompenzaci €600 při zpoždění ≥3 hodiny.
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>EU261 platí pro <strong>všechny lety z Prahy</strong> (včetně Emirates)</li>
            <li>Kompenzace: <strong>€600</strong> (všechny trasy Emirates z PRG přesahují 3,500 km)</li>
            <li>Emirates má 68% míru dobrovolných výplat — lepší než Turkish/Etihad</li>
            <li>Zpáteční let DXB → PRG NEPLATÍ EU261</li>
            <li>Máte 3 roky na reklamaci</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Připraveni získat €600 od Emirates?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger vyřídí celý proces za vás — od reklamace přes ÚCL až po soud (pokud potřeba). Specializujeme se na mimoevropské aerolinie a víme, jak argumentovat. Bez rizika, platíte jen při úspěchu.
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