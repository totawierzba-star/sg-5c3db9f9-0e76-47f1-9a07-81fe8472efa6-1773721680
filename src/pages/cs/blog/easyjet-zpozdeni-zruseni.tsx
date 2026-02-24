import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { AlertCircle, Clock, XCircle, Euro, FileText, CheckCircle, Phone, Mail } from "lucide-react";

export default function EasyJetKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="easyJet kompenzace za zpoždění a zrušení letu – Průvodce 2026"
        description="Kompletní průvodce reklamací u easyJet. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let easyJet."
        url="https://lotproblem.pl/cs/blog/easyjet-zpozdeni-zruseni"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>easyJet kompenzace</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              easyJet kompenzace za zpoždění a zrušení letu – Průvodce 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 7 min čtení</span>
              <span>🧡 easyJet</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              <strong>easyJet</strong> je jednou z největších nízkonákladových leteckých společností v Evropě. 
              Pokud byl váš let zpožděn o více než 3 hodiny nebo zrušen, máte nárok na kompenzaci <strong>až 600 €</strong> podle 
              nařízení <strong>EU 261/2004</strong>. V tomto článku se dozvíte, jak správně podat reklamaci 
              a co dělat v případě problémů s letem easyJet.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Měli jste problém s letem easyJet?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              Zkontrolujte zdarma, zda máte nárok na kompenzaci až <strong>600 €</strong>
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

          {/* Section 1: Kdy máte nárok */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Kdy máte nárok na kompenzaci u easyJet?
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">✅ Základní podmínky:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">1.</span>
                  <span><strong>Zpoždění příletu o 3+ hodiny</strong> nebo zrušený let</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>Let odletěl z <strong>EU</strong> nebo přiletěl do EU s evropskou společností</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Problém <strong>nezavinil cestující</strong> (včasný check-in)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">4.</span>
                  <span>Příčina <strong>není mimořádná okolnost</strong> (např. nepříznivé počasí)</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 Důležité:</strong> easyJet často argumentuje technickými problémy jako mimořádnou okolností. 
                Běžné technické závady <strong>NEJSOU</strong> mimořádnou okolností a nárok na kompenzaci zůstává.
              </p>
            </div>
          </section>

          {/* Section 2: Výše kompenzace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Výše kompenzace u easyJet
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">250 €</div>
                <div className="text-gray-600">Do 1 500 km</div>
                <div className="text-sm text-gray-500 mt-2">Např. Praha → Londýn</div>
              </div>
              <div className="bg-white border-2 border-blue-300 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">400 €</div>
                <div className="text-gray-600">1 500 – 3 500 km</div>
                <div className="text-sm text-gray-500 mt-2">Např. Praha → Barcelona</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">600 €</div>
                <div className="font-semibold">Nad 3 500 km</div>
                <div className="text-sm text-blue-100 mt-2">Např. Londýn → Tel Aviv</div>
              </div>
            </div>
          </section>

          {/* Section 3: Jak podat reklamaci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak podat reklamaci u easyJet?
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📝 Postup krok za krokem:</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <strong>Vyplňte online formulář</strong>
                    <p className="text-gray-600 mt-1">Na webu easyJet.com → Customer Service → EU261 Compensation Claim</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <strong>Přiložte dokumenty</strong>
                    <p className="text-gray-600 mt-1">Palubní vstupenky, e-maily od easyJet, fotografie z letiště</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <strong>Čekejte na odpověď</strong>
                    <p className="text-gray-600 mt-1">easyJet má povinnost odpovědět do 6 týdnů</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <strong>V případě zamítnutí</strong>
                    <p className="text-gray-600 mt-1">Obraťte se na ADR/Úřad civilního letectví nebo využijte služby ClaimWinger</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="mb-0">
                <strong>⚠️ Pozor:</strong> easyJet často zamítá reklamace s odkazem na "mimořádné okolnosti" nebo "technické problémy". 
                Pokud nesouhlasíte, máte právo obrátit se na nezávislý subjekt nebo specializovanou společnost.
              </p>
            </div>
          </section>

          {/* Section 4: Časté problémy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Časté problémy s easyJet
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  1. Odmítnutí reklamace s odkazem na "technické problémy"
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Běžné technické závady NEJSOU mimořádnou okolností. easyJet musí prokázat, 
                  že problém byl nepředvídatelný a mimo jejich kontrolu. Požadujte podrobné vysvětlení.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  2. Dlouhá doba vyřizování reklamace
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Pokud easyJet nereaguje do 6 týdnů, obraťte se přímo na národní orgán dohledu (v ČR Úřad civilního letectví) 
                  nebo využijte služby specializované společnosti jako ClaimWinger.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  3. Nedostatečná komunikace
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Veškerou komunikaci s easyJet veďte písemně (e-mail, formulář). 
                  Uchovejte si všechny odpovědi jako důkaz. Telefonické záznamy nejsou dostatečným důkazem.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Alternativa - ClaimWinger */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jednodušší cesta: Nechte to na profesionálech
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Proč využít služby ClaimWinger?
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Bez rizika:</strong> Platíte pouze v případě úspěchu (provize z kompenzace)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Zkušenost s easyJet:</strong> Víme, jak na jejich argumenty reagovat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Rychlé vyřízení:</strong> Komunikujeme s easyJet za vás</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Právní zastoupení:</strong> V případě potřeby vás zastoupíme u soudu</span>
                </li>
              </ul>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors no-underline"
              >
                Začít reklamaci zdarma →
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
                  Jak dlouho trvá vyřízení reklamace u easyJet?
                </summary>
                <p className="mt-4 text-gray-700">
                  easyJet má povinnost odpovědět do 6 týdnů. V praxi to často trvá déle, zejména pokud dojde k zamítnutí a je potřeba další komunikace.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Mohu požadovat kompenzaci i za starý let?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano, v České republice máte na uplatnění nároku 3 roky od data letu. V jiných zemích EU se promlčecí lhůty liší (2-6 let).
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když easyJet tvrdí, že to byla mimořádná okolnost?
                </summary>
                <p className="mt-4 text-gray-700">
                  Požadujte podrobné vysvětlení a důkazy. Běžné technické problémy, nedostatek personálu nebo operační obtíže NEJSOU mimořádnou okolností podle judikatury EU.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Můžu získat kompenzaci i když mi easyJet nabídl alternativní let?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! Pokud jste přiletěli s více než 3hodinovým zpožděním nebo jste museli přenocovat, máte nárok na kompenzaci i přes nabídku náhradního letu.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Byl váš let s easyJet zpožděný nebo zrušený?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Získejte až <strong className="text-white">600 € kompenzace</strong> s pomocí ClaimWinger
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              Zkontrolovat nárok zdarma →
            </a>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}