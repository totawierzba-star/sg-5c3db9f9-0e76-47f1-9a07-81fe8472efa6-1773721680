import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Clock, Euro, FileText, Scale, Plane } from "lucide-react";

export default function AustrianAirlinesKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Austrian Airlines kompenzace za zpoždění a zrušení letu 2026"
        description="Kompletní průvodce reklamací u Austrian Airlines. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let."
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
            <li className="text-gray-900">Austrian Airlines kompenzace</li>
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
            Austrian Airlines kompenzace za zpoždění a zrušení letu 2026
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            Kompletní průvodce reklamací u Austrian Airlines. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let.
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
              <li>✈️ Austrian Airlines je vlajková společnost Rakouska (člen Lufthansa Group)</li>
              <li>💰 Můžete získat až 600 € kompenzace za zpoždění nebo zrušení</li>
              <li>⏰ Nárok máte i za starší lety (až 3 roky zpět)</li>
              <li>📝 Reklamaci lze podat online během několika minut</li>
            </ul>
          </div>

          {/* Early CTA */}
          <div className="bg-blue-600 text-white rounded-xl p-8 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Měli jste problém s letem Austrian Airlines?</h3>
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
              Kolik můžete dostat od Austrian Airlines?
            </h2>
            
            <p className="text-gray-700 mb-6">
              Výše kompenzace závisí na délce letu, nikoli na ceně letenky. Austrian Airlines musí respektovat evropské nařízení ES 261/2004.
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
                    <p className="text-gray-600 text-sm">Např.: Vídeň → Praha, Vídeň → Mnichov, Vídeň → Curych</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-lg min-w-[100px] text-center">
                    400 €
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Lety 1 500 – 3 500 km</p>
                    <p className="text-gray-600 text-sm">Např.: Vídeň → Londýn, Vídeň → Madrid, Vídeň → Istanbul</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-700 font-bold px-4 py-2 rounded-lg min-w-[100px] text-center">
                    600 €
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Lety nad 3 500 km</p>
                    <p className="text-gray-600 text-sm">Např.: Vídeň → New York, Vídeň → Bangkok, Vídeň → Los Angeles</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 mb-6">
              <p className="text-yellow-900 font-medium flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
                <span><strong>Důležité:</strong> Výše kompenzace není závislá na ceně vaší letenky. I pokud jste letěli za Miles & More body nebo dostali speciální tarif, máte nárok na plnou kompenzaci.</span>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle2 className="w-8 h-8 text-blue-600 mr-3" />
              Kdy máte nárok na kompenzaci od Austrian Airlines?
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
                  Pokud vám Austrian Airlines odmítne nástup na palubu kvůli přeplněnému letu, máte automatický nárok na kompenzaci plus náhradní přepravu nebo vrácení peněz.
                </p>
              </div>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  4. Zmeškaný přestup
                </h3>
                <p className="text-gray-700">
                  Pokud kvůli zpoždění jednoho letu Austrian Airlines zmeškáte navazující spojení a dorazíte do cíle s více než 3hodinovým zpožděním, máte nárok na kompenzaci.
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
              Austrian Airlines nemusí vyplatit kompenzaci, pokud zpoždění nebo zrušení bylo způsobeno <strong>mimořádnými okolnostmi</strong>, které společnost nemohla ovlivnit.
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
                  <span>Stávkách zaměstnanců Austrian Airlines nebo Lufthansa Group</span>
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
              Jak podat reklamaci k Austrian Airlines?
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
                    <p className="text-gray-700 text-sm">Palubní vstupenka, potvrzení rezervace (booking number OS1234), fotky z letiště</p>
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
                    <p className="text-gray-700 text-sm">Austrian Airlines má 30 dní na odpověď, ale s pomocí ClaimWinger to bývá rychlejší</p>
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

          {/* Austrian Airlines Specifics */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Plane className="w-8 h-8 text-blue-600 mr-3" />
              Specifika Austrian Airlines
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Členství v Lufthansa Group
                </h3>
                <p className="text-gray-700">
                  Austrian Airlines je součástí Lufthansa Group. Pokud máte problém s letem, může být obtížnější určit, která společnost je odpovědná. ClaimWinger má zkušenosti s celou skupinou a ví, jak postupovat.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Hub ve Vídni
                </h3>
                <p className="text-gray-700">
                  Hlavní základna Austrian Airlines je na letišti Vídeň-Schwechat (VIE). Mnoho cestujících z České republiky využívá Vídeň pro přestupy - pokud zmeškáte spojení, máte nárok na kompenzaci.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Miles & More body
                </h3>
                <p className="text-gray-700">
                  I pokud jste letěli za Miles & More body (věrnostní program), máte plný nárok na kompenzaci. Letecká společnost nemůže argumentovat, že jste za letenku nezaplatili.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Často kladené otázky</h2>
            
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Jak dlouho trvá vyřízení reklamace u Austrian Airlines?
                </h3>
                <p className="text-gray-700">
                  Austrian Airlines (jako člen Lufthansa Group) má ze zákona 30 dní na odpověď. S pomocí ClaimWinger je průměrná doba vyřízení 6-10 týdnů.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Mohu žádat kompenzaci za starší let?
                </h3>
                <p className="text-gray-700">
                  Ano! Nárok na kompenzaci máte až 3 roky zpět (v Česku a Rakousku). Pro lety z Vídně platí rakouský právní řád s 3letou promlčecí lhůtou.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Co když jsem letenku dostal za Miles & More body?
                </h3>
                <p className="text-gray-700">
                  Nárok na kompenzaci máte i v tomto případě. Neplatili jste peníze, ale vaše práva jako pasažér zůstávají stejná podle EU261.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Austrian Airlines mi nabídl poukaz. Musím ho přijmout?
                </h3>
                <p className="text-gray-700">
                  Ne! Máte nárok na finanční kompenzaci v hotovosti. Poukaz můžete odmítnout a požadovat peníze na bankovní účet.
                </p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Letěl jsem přes Vídeň s přestupem - mám nárok?
                </h3>
                <p className="text-gray-700">
                  Ano! Pokud byl váš přestup součástí jedné rezervace a dorazil jste do finálního cíle s více než 3hodinovým zpožděním, máte nárok na kompenzaci.
                </p>
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Související články</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/cs/blog/eurowings-kompenzace-reklamace" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Eurowings kompenzace</h3>
                <p className="text-gray-600 text-sm">Průvodce reklamací u Eurowings</p>
              </Link>
              
              <Link href="/cs/blog/wizz-air-zpozdeni-zruseni" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Wizz Air zpoždění a zrušení</h3>
                <p className="text-gray-600 text-sm">Jak reklamovat u Wizz Air</p>
              </Link>

              <Link href="/cs/blog/narizeni-es-261-2004" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Nařízení ES 261/2004</h3>
                <p className="text-gray-600 text-sm">Vše o evropském nařízení</p>
              </Link>

              <Link href="/cs/blog/zmeskane-prestupy-kompenzace" className="block bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-600 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Zmeškané přestupy</h3>
                <p className="text-gray-600 text-sm">Kompenzace při zmeškaném přestupu</p>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Máte problém s letem Austrian Airlines?
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