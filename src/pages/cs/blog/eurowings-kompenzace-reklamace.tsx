import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Clock, Euro, FileText, Scale } from "lucide-react";

export default function EurowingsKompenzaceReklamace() {
  return (
    <LayoutCs>
      <SEO 
        title="Eurowings kompenzace za zpoždění a zrušení letu – Průvodce 2026"
        description="Komplexní průvodce reklamací u Eurowings. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let Eurowings."
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2 text-gray-600">
            <li><Link href="/cs" className="hover:text-blue-600">Domů</Link></li>
            <li>→</li>
            <li><Link href="/cs/blog" className="hover:text-blue-600">Blog</Link></li>
            <li>→</li>
            <li className="text-gray-900">Eurowings kompenzace</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center space-x-2 text-blue-600 mb-4">
            <span className="px-3 py-1 bg-blue-50 rounded-full text-sm font-medium">Letecké společnosti</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600 text-sm">7 min čtení</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Eurowings kompenzace za zpoždění a zrušení letu – Průvodce 2026
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Komplexní průvodce reklamací u Eurowings. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let.
          </p>
        </header>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
            <p className="text-gray-800 font-medium mb-2">
              <strong>Víte, že:</strong>
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✈️ Eurowings je jednou z největších nízkonákladových společností v Evropě</li>
              <li>💰 Můžete získat až 600 € kompenzace za zpoždění nebo zrušení</li>
              <li>⏰ Nárok máte i za starší lety (až 3 roky zpět)</li>
              <li>📝 Reklamaci můžete podat online během několika minut</li>
            </ul>
          </div>

          {/* Early CTA */}
          <div className="bg-blue-600 text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Měli jste problém s letem Eurowings?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Zjistěte zdarma, zda máte nárok na kompenzaci až 600 €
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
            >
              Zkontrolovat nárok zdarma →
            </a>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Euro className="w-8 h-8 text-blue-600 mr-3" />
              Kolik můžete dostat od Eurowings?
            </h2>
            
            <p className="text-gray-700 mb-6">
              Výše kompenzace závisí na délce letu a nikoli na ceně letenky. Eurowings musí respektovat evropské nařízení ES 261/2004.
            </p>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Výše kompenzace podle vzdálenosti:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-lg min-w-[100px] text-center">
                    250 €
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Lety do 1 500 km</p>
                    <p className="text-gray-600 text-sm">Např.: Praha → Amsterdam, Vídeň → Berlín, Košice → Mnichov</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-lg min-w-[100px] text-center">
                    400 €
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Lety 1 500 – 3 500 km</p>
                    <p className="text-gray-600 text-sm">Např.: Praha → Barcelona, Vídeň → Atény, Košice → Londýn</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-lg min-w-[100px] text-center">
                    600 €
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Lety nad 3 500 km</p>
                    <p className="text-gray-600 text-sm">Např.: Praha → Dubai, Vídeň → New York</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-6">
              <p className="text-yellow-900 font-medium flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Důležité:</strong> Výše kompenzace není závislá na ceně vaší letenky. I pokud jste letěli za 50 €, máte nárok na plnou kompenzaci podle vzdálenosti letu.</span>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle2 className="w-8 h-8 text-blue-600 mr-3" />
              Kdy máte nárok na kompenzaci od Eurowings?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-2" />
                  1. Zpoždění příjezdu
                </h3>
                <p className="text-gray-700 mb-4">
                  Nárok na kompenzaci máte, když váš let dorazí do cíle s následujícím zpožděním:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>3+ hodiny</strong> - pro lety do 1 500 km</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>3+ hodiny</strong> - pro lety 1 500 – 3 500 km</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span><strong>4+ hodiny</strong> - pro lety nad 3 500 km</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  2. Zrušený let
                </h3>
                <p className="text-gray-700 mb-4">
                  Kompenzaci získáte, pokud byl let zrušen a:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Byli jste informováni méně než 14 dní před odletem</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Nebyla vám nabídnuta adekvátní náhradní přeprava</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Zrušení nebylo způsobeno mimořádnými okolnostmi</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  3. Odmítnutí nástupu (overbooking)
                </h3>
                <p className="text-gray-700">
                  Pokud vám Eurowings odmítne nástup na palubu kvůli přeplněnému letu, máte automatický nárok na kompenzaci plus náhradní přepravu nebo vrácení peněz.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  4. Zmeškaný přestup
                </h3>
                <p className="text-gray-700">
                  Pokud kvůli zpoždění jednoho letu Eurowings zmeškáte navazující let a dorazíte do cíle s více než 3hodinovým zpožděním, máte nárok na kompenzaci.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="w-8 h-8 text-blue-600 mr-3" />
              Kdy kompenzaci NEDOSTANETE?
            </h2>

            <p className="text-gray-700 mb-6">
              Eurowings nemusí vyplatit kompenzaci, pokud zpoždění nebo zrušení bylo způsobeno <strong>mimořádnými okolnostmi</strong>, které společnost nemohla ovlivnit.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
              <h3 className="font-bold text-red-900 mb-3">Mimořádné okolnosti zahrnují:</h3>
              <ul className="space-y-2 text-red-900">
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Extrémní počasí (silné bouřky, hurikány, sněhové kalamity)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Politická nestabilita nebo bezpečnostní rizika</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Stávky řízení letového provozu (ATC)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Náhlá technická závada mimo pravidelnou údržbu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">❌</span>
                  <span>Kolize s ptáky (bird strike)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <h3 className="font-bold text-green-900 mb-3">Nárok na kompenzaci MÁTE i při:</h3>
              <ul className="space-y-2 text-green-900">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Stávkách zaměstnanců Eurowings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Technických problémech zjištěných při pravidelné údržbě</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Nedostatku posádky</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Opoždění předchozího letu stejného letadla</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-8 h-8 text-blue-600 mr-3" />
              Jak podat reklamaci k Eurowings?
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Krok za krokem:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Shromážděte dokumenty</p>
                    <p className="text-gray-700 text-sm">Palubní vstupenka, potvrzení rezervace, fotky z nástěnky na letišti</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Použijte ClaimWinger</p>
                    <p className="text-gray-700 text-sm">Nejrychlejší způsob - vyplníte jednoduchý formulář a odborníci se postarají o vše ostatní</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Počkejte na vyřízení</p>
                    <p className="text-gray-700 text-sm">Eurowings má 30 dní na odpověď, ale s pomocí ClaimWinger to bývá rychlejší</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 text-white font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Získejte peníze</p>
                    <p className="text-gray-700 text-sm">Kompenzace přijde na váš účet - zaplatíte pouze v případě úspěchu</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Zjistěte svůj nárok během 2 minut</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Nechte si zkontrolovat nárok profesionály - bez rizika, platíte jen při úspěchu
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg"
              >
                Zkontrolovat nárok zdarma →
              </a>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Často kladené otázky</h2>
            
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Jak dlouho trvá vyřízení reklamace u Eurowings?
                </h3>
                <p className="text-gray-700">
                  Eurowings má ze zákona 30 dní na odpověď. Často však odpovídá později nebo vůbec. S pomocí ClaimWinger je průměrná doba vyřízení 4-8 týdnů, včetně případného soudního vymáhání.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Mohu žádat kompenzaci za starší let?
                </h3>
                <p className="text-gray-700">
                  Ano! Nárok na kompenzaci máte až 3 roky zpět (v Česku) nebo 2 roky (v některých jiných zemích). Záleží na tom, odkud let odlétal.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Co když jsem letenku dostal zdarma nebo za body?
                </h3>
                <p className="text-gray-700">
                  Nárok na kompenzaci máte i v tomto případě. Neplatili jste za letenku, ale vaše práva jako pasažér zůstávají stejná.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Eurowings mi nabídl poukaz místo kompenzace. Musím ho přijmout?
                </h3>
                <p className="text-gray-700">
                  Ne! Máte nárok na finanční kompenzaci v hotovosti. Poukaz můžete odmítnout a požadovat peníze na účet.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Co když Eurowings tvrdí, že příčinou byly mimořádné okolnosti?
                </h3>
                <p className="text-gray-700">
                  Letecká společnost musí důkladně prokázat, že šlo o mimořádné okolnosti. ClaimWinger ověří, zda je tvrzení Eurowings oprávněné, a v případě potřeby věc vymáhá soudně.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Související články</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/cs/blog/ryanair-kompenzace-reklamace" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Ryanair kompenzace a reklamace</h3>
                <p className="text-gray-600 text-sm">Kompletní průvodce reklamací u Ryanair</p>
              </Link>
              
              <Link href="/cs/blog/wizz-air-zpozdeni-zruseni" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air zpoždění a zrušení</h3>
                <p className="text-gray-600 text-sm">Jak reklamovat u Wizz Air krok za krokem</p>
              </Link>

              <Link href="/cs/blog/narizeni-es-261-2004" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Nařízení ES 261/2004</h3>
                <p className="text-gray-600 text-sm">Vše o evropském nařízení o právech cestujících</p>
              </Link>

              <Link href="/cs/blog/kdy-mate-narok-kompenzaci" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Kdy máte nárok na kompenzaci</h3>
                <p className="text-gray-600 text-sm">Podrobný rozbor nároku na odškodnění</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Máte problém s letem Eurowings?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Získejte až 600 € kompenzace s pomocí odborníků. Vyřídíme vše za vás - platíte jen při úspěchu.
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors text-lg shadow-xl"
            >
              Zkontrolovat nárok zdarma →
            </a>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}
