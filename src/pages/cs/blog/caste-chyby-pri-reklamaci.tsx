import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { AlertTriangle, XCircle, CheckCircle, FileText, Clock, Mail, MessageSquare, Scale } from "lucide-react";

export default function CasteChybyPriReklamaci() {
  return (
    <LayoutCs>
      <SEO 
        title="Časté chyby při reklamaci zpožděného letu - jak se jich vyhnout"
        description="Zjistěte nejčastější chyby při reklamaci kompenzace a jak se jim vyhnout. Zvyšte své šance na úspěch."
        url="https://problemlot.com/cs/blog/caste-chyby-pri-reklamaci"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>Praktické rady</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Časté chyby při reklamaci zpožděného letu - jak se jich vyhnout
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 8 min čtení</span>
              <span>⚠️ Praktický průvodce</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              <strong>Až 40 % reklamací je zamítnuto kvůli zbytečným chybám!</strong> Většina cestujících má nárok 
              na kompenzaci, ale prohraje kvůli nedostatečným důkazům, pozdní reklamaci nebo špatné komunikaci. 
              Tento článek vám ukáže <strong>7 nejčastějších chyb</strong> a jak se jim vyhnout.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Nechcete dělat chyby?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger se postará o vaši reklamaci profesionálně - <strong>bez chyb, bez stresu</strong>
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-md hover:shadow-xl no-underline"
            >
              Zkontrolovat nárok zdarma →
            </a>
          </div>

          {/* Section 1: Top 7 mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              7 nejčastějších chyb při reklamaci
            </h2>

            <div className="space-y-6">
              {/* Mistake 1 */}
              <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      ❌ Neuschovávání důkazů přímo na letišti
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Mnoho cestujících si myslí, že si důkazy mohou opatřit později. <strong>CHYBA!</strong> 
                      Fotky z informační tabule, boarding pass a účtenky musíte mít IHNED.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900 font-semibold mb-2">✅ Správný postup:</p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>📸 Vyfoťte informační tabuli s číslem letu a stavem "DELAYED"</li>
                        <li>📱 Screenshot z aplikace aerolinky</li>
                        <li>🎫 Uschovejte boarding pass (fyzický + foto)</li>
                        <li>🧾 Účtenky za jídlo, hotel, taxi</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      ❌ Pozdní podání reklamace
                    </h3>
                    <p className="text-gray-700 mb-3">
                      "Mám 3 roky, tak počkám..." - špatný přístup! Čím déle čekáte, tím méně důkazů máte 
                      k dispozici a aerolinka má více času na přípravu obhajoby.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900 font-semibold mb-2">✅ Správný postup:</p>
                      <p className="text-gray-700 text-sm">
                        Podejte reklamaci <strong>do 14 dnů</strong> od letu. Čím rychleji, tím lépe. 
                        Vzpomínky jsou čerstvé, důkazy dostupné, odpověď rychlejší.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      ❌ Příliš agresivní nebo emocionální tón
                    </h3>
                    <p className="text-gray-700 mb-3">
                      "OKAMŽITĚ ZAPLAŤTE!!! JE TO SKANDÁL!!!" - taková reklamace skončí v koši. 
                      Agresivita nebo obviňování nikoho nepřesvědčí.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900 font-semibold mb-2">✅ Správný postup:</p>
                      <p className="text-gray-700 text-sm mb-2">
                        Buďte <strong>profesionální, věcný a klidný</strong>. Uveďte fakta:
                      </p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Číslo letu a datum</li>
                        <li>• Délka zpoždění (s důkazy)</li>
                        <li>• Odkaz na nařízení ES 261/2004</li>
                        <li>• Požadovaná částka (250/400/600 €)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mistake 4 */}
              <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      ❌ Nedostatečné důkazy o zpoždění
                    </h3>
                    <p className="text-gray-700 mb-3">
                      "Let měl zpoždění 4 hodiny" - bez důkazů to aerolinka odmítne. Musíte prokázat 
                      <strong>přesnou dobu příletu</strong>.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900 font-semibold mb-2">✅ Správný postup:</p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>📸 Foto informační tabule s novým časem</li>
                        <li>🌐 Screenshot z FlightRadar24</li>
                        <li>📧 E-mail od aerolinky o změně času</li>
                        <li>🎫 Boarding pass s gate a skutečným časem odletu</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mistake 5 */}
              <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      ❌ Přijmutí voucheru místo peněz
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Aerolinka nabídne voucher nebo slevu na další let. <strong>POZOR!</strong> Tím se vzdáváte 
                      nároku na kompenzaci v penězích.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900 font-semibold mb-2">✅ Správný postup:</p>
                      <p className="text-gray-700 text-sm">
                        <strong>Nikdy</strong> nepřijímejte voucher jako kompenzaci. Máte právo na 
                        <strong>peníze v hotovosti</strong> (nebo bankovní převod). Voucher je bonus navíc, 
                        ne náhrada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mistake 6 */}
              <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      ❌ Vzdání se po prvním odmítnutí
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Aerolinka napíše "mimořádné okolnosti" a vy rezignujete. <strong>CHYBA!</strong> 
                      80 % prvních odmítnutí je automatických a nepodložených.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900 font-semibold mb-2">✅ Správný postup:</p>
                      <p className="text-gray-700 text-sm mb-2">
                        Pokud aerolinka odmítne:
                      </p>
                      <ol className="text-gray-700 space-y-1 text-sm">
                        <li>1. Požádejte o detailní zdůvodnění</li>
                        <li>2. Ověřte si jejich tvrzení (počasí, technické problémy)</li>
                        <li>3. Podejte další reklamaci s novými argumenty</li>
                        <li>4. Obraťte se na ÚCL nebo advokáta</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mistake 7 */}
              <div className="bg-white border-2 border-red-200 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 text-red-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                    7
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">
                      ❌ Nepřesné nebo neúplné kontaktní údaje
                    </h3>
                    <p className="text-gray-700 mb-3">
                      Špatný e-mail, zastaralá adresa nebo nepřesné jméno = aerolinka nemůže odpovědět 
                      nebo zaplatit.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-green-900 font-semibold mb-2">✅ Správný postup:</p>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>✅ Zkontrolujte překlepy v e-mailu</li>
                        <li>✅ Uveďte aktuální telefonní číslo</li>
                        <li>✅ Jméno přesně jako na boarding pass</li>
                        <li>✅ IBAN pro bankovní převod (pokud žádáte)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: How to avoid mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Jak se vyhnout všem chybám najednou?
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Použijte profesionální službu
              </h3>
              <p className="text-gray-700 mb-6">
                ClaimWinger se stará o tisíce reklamací ročně. Víme přesně, které dokumenty jsou důležité, 
                jak komunikovat s aerolinkami a jak argumentovat. <strong>Vaše šance na úspěch: 98 %</strong>
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-red-900">❌ Vlastní reklamace:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Riziko chyb v dokumentaci</li>
                    <li>• Nedostatečné znalosti práva</li>
                    <li>• Časová náročnost</li>
                    <li>• Nižší šance na úspěch</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-green-900">✅ S ClaimWinger:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Profesionální příprava</li>
                    <li>• Právní expertiza</li>
                    <li>• Žádná práce na vaší straně</li>
                    <li>• Úspěšnost téměř 100 %</li>
                  </ul>
                </div>
              </div>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors no-underline"
              >
                Vyhnout se chybám s ClaimWinger →
              </a>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Často kladené otázky
            </h2>

            <div className="space-y-4">
              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když jsem už udělal některou z těchto chyb?
                </summary>
                <p className="mt-4 text-gray-700">
                  Není pozdě! Můžete podat novou reklamaci s doplněnými důkazy a argumenty. ClaimWinger 
                  vám pomůže "zachránit" i reklamaci, která byla zamítnuta.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Kolikrát mohu podat reklamaci?
                </summary>
                <p className="mt-4 text-gray-700">
                  Můžete podat reklamaci opakovaně, dokud neuplyne promlčecí lhůta (3 roky v ČR). 
                  Každá reklamace by však měla obsahovat nové argumenty nebo důkazy.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Je lepší reklamovat e-mailem nebo poštou?
                </summary>
                <p className="mt-4 text-gray-700">
                  E-mail je rychlejší, ale doporučené dopisy (s potvrzením o doručení) mají větší právní 
                  váhu. ClaimWinger používá obě metody podle situace.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Nechcete dělat chyby? Nechte to na nás.
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              ClaimWinger se postará o perfektní reklamaci - <strong>bez chyb, bez stresu, bez rizika</strong>.
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              Získat kompenzaci bez chyb →
            </a>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}
