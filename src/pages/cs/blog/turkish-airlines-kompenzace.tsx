import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { AlertCircle, Clock, XCircle, Euro, FileText, CheckCircle, Phone, Mail, Globe } from "lucide-react";

export default function TurkishAirlinesKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Turkish Airlines kompenzace za zpoždění a zrušení letu 2026"
        description="Kompletní průvodce reklamací u Turkish Airlines. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let THY."
        url="https://lotproblem.pl/cs/blog/turkish-airlines-kompenzace"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>Turkish Airlines kompenzace</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Turkish Airlines kompenzace za zpoždění a zrušení letu 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 6 min čtení</span>
              <span>🇹🇷 Turkish Airlines</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              <strong>Turkish Airlines (THY)</strong> je vlajkovou leteckou společností Turecka a jednou z největších evropských aerolinek. 
              Pokud váš let Turkish Airlines odlétal z EU a byl zpožděn o více než 3 hodiny nebo zrušen, máte nárok na kompenzaci 
              <strong> až 600 €</strong> podle nařízení EU 261/2004. V tomto článku se dozvíte, jak správně podat reklamaci a co dělat 
              v případě problémů.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Měli jste problém s letem Turkish Airlines?</h3>
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
              Kdy máte nárok na kompenzaci u Turkish Airlines?
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
                  <span>Let odletěl z <strong>EU</strong> (Praha, Vídeň, Budapešť, atd.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Problém <strong>nezavinil cestující</strong> (včasný check-in)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">4.</span>
                  <span>Příčina <strong>není mimořádná okolnost</strong> (např. vážné počasí)</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="mb-0">
                <strong>⚠️ Důležité:</strong> Turkish Airlines má hub v Istanbulu (mimo EU). EU261 platí <strong>pouze pro lety 
                odlétající z EU</strong>. Lety z Istanbulu do EU nejsou pokryty! (Turecko není v EU ani EEA)
              </p>
            </div>
          </section>

          {/* Section 2: Výše kompenzace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Výše kompenzace u Turkish Airlines
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">250 €</div>
                <div className="text-gray-600">Do 1 500 km</div>
                <div className="text-sm text-gray-500 mt-2">Např. Praha → Istanbul</div>
              </div>
              <div className="bg-white border-2 border-blue-300 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">400 €</div>
                <div className="text-gray-600">1 500 – 3 500 km</div>
                <div className="text-sm text-gray-500 mt-2">Např. Istanbul → Tel Aviv</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">600 €</div>
                <div className="font-semibold">Nad 3 500 km</div>
                <div className="text-sm text-blue-100 mt-2">Např. Praha → Bangkok</div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
              <p className="mb-0">
                <strong>💡 Tip:</strong> Pokud máte přestup v Istanbulu, počítá se celková vzdálenost od počátečního místa odletu (v EU) 
                do konečné destinace. To může znamenat nárok na vyšší kompenzaci!
              </p>
            </div>
          </section>

          {/* Section 3: Jak podat reklamaci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak podat reklamaci u Turkish Airlines?
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📝 Postup krok za krokem:</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <strong>Vyplňte online formulář</strong>
                    <p className="text-gray-600 mt-1">Na turkishairlines.com → Customer Relations → Compensation Request</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <strong>Přiložte dokumenty</strong>
                    <p className="text-gray-600 mt-1">Palubní vstupenky, booking reference (PNR), e-maily od THY, fotografie</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <strong>Čekejte na odpověď</strong>
                    <p className="text-gray-600 mt-1">THY obvykle odpovídá do 4-6 týdnů (může být déle)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <strong>V případě zamítnutí</strong>
                    <p className="text-gray-600 mt-1">Obraťte se na národní orgán (ÚCL v ČR) nebo využijte ClaimWinger</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">📧 Kontaktní údaje Turkish Airlines:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span>Online formulář: turkishairlines.com/customerrelations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>E-mail: customerrelations@thy.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Call centrum CZ: +420 239 017 374</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Časté problémy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Časté problémy s Turkish Airlines
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  1. Odmítnutí s odkazem na "technické problémy"
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Běžné technické poruchy <strong>NEJSOU</strong> mimořádnou okolností. THY musí prokázat, 
                  že šlo o nepředvídatelnou závadu navzdory běžné údržbě. Vyžádejte si podrobné vysvětlení.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  2. Dlouhá doba vyřizování (8+ týdnů)
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> THY často zpožďuje odpovědi, zejména u komplikovaných případů. Pokud nedostanete odpověď 
                  do 8 týdnů, eskalujte stížnost na ÚCL nebo využijte služby ClaimWinger.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  3. Problémy s komunikací v češtině/angličtině
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> THY preferuje angličtinu nebo turečtinu. Pokud není odpověď srozumitelná, 
                  požádejte o vysvětlení v angličtině nebo využijte služby profesionálů.
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
                  <span><strong>Zkušenost s THY:</strong> Víme, jak argumentovat proti jejich typickým odmítnutím</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Mezinárodní zastoupení:</strong> Komunikujeme s THY v angličtině i turečtině</span>
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
                  Platí EU261 pro lety z Istanbulu do Prahy?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ne! EU261 platí <strong>pouze pro lety odlétající z EU</strong>. Lety z Turecka (mimo EU) do EU nejsou pokryty, 
                  protože Turecko není členem EU ani EEA. Máte nárok pouze na vrácení peněz nebo alternativní let.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když mám přestup v Istanbulu?
                </summary>
                <p className="mt-4 text-gray-700">
                  Pokud váš let začal v EU (např. Praha → Istanbul → Bangkok), EU261 platí pro celou cestu. 
                  Zpoždění se počítá na konečné destinaci (Bangkok), ne v Istanbulu.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Mohu získat kompenzaci i za starý let?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano, promlčecí lhůta v ČR je 3 roky od data letu. Můžete podat reklamaci i za lety z minulých let.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  THY mi nabízí vouchery - musím je přijmout?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ne! Máte právo na <strong>peněžní kompenzaci</strong>. Vouchery jsou dobrovolná nabídka, 
                  ale rozhodnutí je na vás. Pokud chcete peníze, jasně to uvedte v reklamaci.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Byl váš let s Turkish Airlines zpožděný nebo zrušený?
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
