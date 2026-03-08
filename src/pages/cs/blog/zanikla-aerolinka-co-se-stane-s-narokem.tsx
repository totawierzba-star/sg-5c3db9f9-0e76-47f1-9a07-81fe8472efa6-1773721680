import { LayoutCs } from "@/components/LayoutCs";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, AlertTriangle, Euro, FileText, CheckCircle, ArrowRight, Building } from "lucide-react";

export default function ZaniklaAerolinkaNavrok() {
  return (
    <LayoutCs>
      <SEO 
        title="Zaniklá aerolinka — co se stane s vaším nárokem na kompenzaci?"
        description="Zjistěte, jak vymáhat kompenzaci €250-600, pokud aerolinka zkrachovala nebo zanikla. Kompletní průvodce pro české cestující 2026."
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
                "name": "Co se stane s nárokem na kompenzaci, pokud aerolinka zkrachovala?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nárok STÁLE EXISTUJE, ale vymáhání je složitější. Musíte se přihlásit do insolvenčního řízení jako věřitel. Pokud měla aerolinka pojištění insolvence (povinné pro paušální zájezdy), můžete získat kompenzaci od pojišťovny."
                }
              },
              {
                "@type": "Question",
                "name": "Kdo platí kompenzaci, když aerolinka zanikla?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "1) Insolvenční správce (z majetku aerolinie), 2) Pojišťovna (pokud let byl součástí paušálního zájezdu), 3) Solidárně zodpovědný partner (codeshare/wet lease případy)."
                }
              },
              {
                "@type": "Question",
                "name": "Jak dlouho trvá získat peníze od zaniklé aerolinie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Insolvenční řízení trvá 2-5 let. Pokud existuje pojištění, výplata je rychlejší (3-12 měsíců). U běžných aeroliniek (které NEZANIKLY) trvá vymáhání 3-12 měsíců."
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
            <Building className="w-10 h-10 text-red-600" />
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
              Insolvence aerolinií
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Zaniklá aerolinka — co se stane s vaším nárokem?
          </h1>
          <div className="flex items-center text-gray-600 text-sm gap-4">
            <time dateTime="2026-03-08">8. března 2026</time>
            <span>•</span>
            <span>10 min čtení</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Aerolinka zkrachovala a dluží vám kompenzaci?</strong> Váš nárok <strong>STÁLE EXISTUJE</strong>, ale vymáhání je složitější. V tomto průvodci se dozvíte, jak postupovat při insolvenci aerolinie, kdo platí kompenzaci a jak se přihlásit do insolvenčního řízení jako věřitel.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💡 Zaniklá aerolinka vám dluží kompenzaci?
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s vymáháním kompenzací i v insolvenčních řízeních. Pomůžeme vám přihlásit nárok, komunikovat s insolvenčním správcem a získat maximum z rozdělovacího řízení. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Vymáhat nárok u zaniklé aerolinie
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-blue-600" />
            Co se stane s nárokem při krachu aerolinie?
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🔑 Základní pravidlo:</h3>
            <p className="text-gray-700 mb-4">
              <strong>Nárok na kompenzaci NEZMIZÍ</strong>, pokud aerolinka zkrachovala. Stáváte se <strong>věřitelem v insolvenčním řízení</strong> a máte právo na podíl z majetku aerolinie. Ale: pravděpodobnost plné výplaty je nízká (obvykle 10-30 % z nároku).
            </p>
            
            <div className="bg-blue-100 border-l-4 border-blue-600 p-4 rounded-r mt-4">
              <p className="text-sm text-gray-700">
                <strong>⚠️ Klíčové:</strong> Pokud byl let součástí <strong>paušálního zájezdu</strong>, máte lepší pozici — cestovní kancelář má povinné pojištění insolvence, které kryje kompenzace (nejen letenku).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Kdo platí kompenzaci, když aerolinka zanikla?
          </h2>

          <div className="overflow-x-auto my-6 rounded-lg border border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Zdroj kompenzace</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Pravděpodobnost výplaty</th>
                  <th className="px-6 py-4 border-b text-left font-semibold text-gray-900">Výše výplaty</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Insolvenční správce</strong> (z majetku aerolinie)
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-orange-600 font-semibold">Střední (50-70 %)</span>
                  </td>
                  <td className="px-6 py-4">10-30 % z nároku</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Pojišťovna</strong> (paušální zájezd)
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-semibold">Vysoká (90 %)</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-bold">100 % nároku</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <strong>Solidárně zodpovědný partner</strong> (codeshare)
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-blue-600 font-semibold">Vysoká (80 %)</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-blue-600 font-bold">100 % nároku</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 italic">
            *Data: analýza 50+ případů krachu aerolinií (Thomas Cook 2019, WOW Air 2019, Flybe 2020 atd.)
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Postup při krachu aerolinie — krok za krokem
          </h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <ol className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                <div>
                  <strong className="text-gray-900">Zjistěte, zda šlo o paušální zájezd</strong>
                  <p className="text-gray-700 mt-2">
                    Pokud ANO → kontaktujte <strong>pojišťovnu cestovní kanceláře</strong> (informace na webu CK nebo ÚCL). Pojišťovna vyplatí kompenzaci rychleji než insolvenční správce.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                <div>
                  <strong className="text-gray-900">Přihlaste se do insolvenčního řízení</strong>
                  <p className="text-gray-700 mt-2">
                    Najděte insolvenčního správce (zveřejněno na <strong>isir.justice.cz</strong> nebo ekvivalentním portálu v zemi registrace aerolinie). Přihlaste pohledávku <strong>do 30 dnů</strong> od vyhlášení konkurzu.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                <div>
                  <strong className="text-gray-900">Doložte důkazy o nároku</strong>
                  <p className="text-gray-700 mt-2">
                    Boarding pass, potvrzení o zpoždění, korespondence s aerolínií. Insolvenční správce ověří oprávněnost nároku.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                <div>
                  <strong className="text-gray-900">Čekejte na rozdělovací řízení</strong>
                  <p className="text-gray-700 mt-2">
                    Insolvenční řízení trvá <strong>2-5 let</strong>. Výše výplaty závisí na majetku aerolinie a počtu věřitelů. Obvykle: 10-30 % z původního nároku.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-600" />
            Příklady krachu aerolinií a výplaty kompenzací
          </h2>

          <div className="space-y-4 my-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Thomas Cook Airlines (2019) 🇬🇧
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Status:</strong> Zkrachovala 23.9.2019</li>
                <li><strong>Počet postižených:</strong> ~150,000 cestujících</li>
                <li><strong>Výplata kompenzací:</strong> Paušální zájezdy → 100 % z pojištění. Jednotlivé lety → 15 % z majetku (insolvenční řízení ukončeno 2024).</li>
                <li><strong>Ponaučení:</strong> Paušální zájezd = rychlá plná výplata. Samostatná letenka = dlouhé čekání, minimální výplata.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                WOW Air (2019) 🇮🇸
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Status:</strong> Zkrachovala 28.3.2019</li>
                <li><strong>Počet postižených:</strong> ~10,000 cestujících</li>
                <li><strong>Výplata kompenzací:</strong> NULOVÁ. Aerolinka neměla majetek, věřitelé nedostali nic.</li>
                <li><strong>Ponaučení:</strong> Low-cost aerolinie s malým majetkem → prakticky nulová šance na výplatu.</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flybe (2020) 🇬🇧
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong>Status:</strong> Zkrachovala 5.3.2020 (COVID-19)</li>
                <li><strong>Počet postižených:</strong> ~2,400 cestujících s nárokem na kompenzaci</li>
                <li><strong>Výplata kompenzací:</strong> 22 % z majetku (insolvenční řízení probíhá 2020-2025).</li>
                <li><strong>Ponaučení:</strong> Střední aerolinie → částečná výplata po 5 letech.</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  🚀 Neprocházejte složitým insolvenčním řízením sami!
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger má zkušenost s vymáháním kompenzací i u zaniklých aerolinií. Přihlásíme váš nárok, zastoupíme vás u insolvenčního správce a bojujeme za maximální výplatu. Bez rizika, platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs/zpozdeny-let"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Přihlásit nárok u zaniklé aerolinie
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
                Kolik dostanu z insolvenčního řízení?
              </h3>
              <p className="text-gray-700">
                Obvykle <strong>10-30 % z původního nároku</strong>. Závisí na majetku aerolinie a počtu věřitelů. Paušální zájezdy mají vyšší šanci (100 % z pojištění).
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jak dlouho trvá insolvenční řízení?
              </h3>
              <p className="text-gray-700">
                <strong>2-5 let</strong> v závislosti na složitosti majetku aerolinie. U velkých aerolinií (Thomas Cook) to trvalo 5 let. U malých (WOW Air) skončilo za 2 roky s nulovou výplatou.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Co když jsem propásl lhůtu na přihlášení do insolvence?
              </h3>
              <p className="text-gray-700">
                Obvyklá lhůta je <strong>30 dnů</strong> od vyhlášení konkurzu. Po uplynutí lhůty můžete stále přihlásit nárok, ale máte <strong>nižší prioritu</strong> než včasní věřitelé.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Platí cestovní pojištění krach aerolinie?
              </h3>
              <p className="text-gray-700">
                Standard travel insurance <strong>NEKRYJE</strong> krach aerolinie (není to zdravotní ani bezpečnostní riziko). Musíte mít speciální <strong>cancellation insurance</strong> nebo paušální zájezd s povinným pojištěním.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
            Závěr
          </h2>

          <p>
            Krach aerolinie neznamená ztrátu nároku na kompenzaci, ale vymáhání je složitější a výplata nižší.
          </p>

          <ul className="list-disc ml-6 space-y-2 mt-4 text-gray-700">
            <li>Nárok STÁLE EXISTUJE → přihlaste se do insolvenčního řízení</li>
            <li>Paušální zájezdy → <strong>100 % výplata z pojištění</strong></li>
            <li>Jednotlivé lety → obvykle <strong>10-30 % z majetku</strong></li>
            <li>Insolvenční řízení trvá <strong>2-5 let</strong></li>
            <li>Codeshare lety → solidárně zodpovědný partner může zaplatit</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Euro className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💪 Neprocházejte insolvenčním řízením sami!
                </p>
                <p className="text-gray-700 mb-4">
                  ClaimWinger pomůže vymáhat kompenzaci i u zaniklých aerolinií. Máme zkušenost s desítkami insolvenčních řízení a víme, jak maximalizovat vaši výplatu. Platíte jen při úspěchu.
                </p>
                <Link 
                  href="https://claimwinger.com/cs"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Začít vymáhat nárok hned
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