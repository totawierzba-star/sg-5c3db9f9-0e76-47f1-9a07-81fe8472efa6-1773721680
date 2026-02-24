import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { AlertCircle, Clock, XCircle, Euro, FileText, CheckCircle, Phone, Mail } from "lucide-react";

export default function BritishAirwaysKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="British Airways kompenzace za zpoždění a zrušení letu 2026"
        description="Kompletní průvodce reklamací u British Airways. Zjistěte, jak získat až 600 € kompenzace za zpožděný nebo zrušený let BA."
        url="https://lotproblem.pl/cs/blog/british-airways-kompenzace"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>British Airways kompenzace</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              British Airways kompenzace za zpoždění a zrušení letu 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 7 min čtení</span>
              <span>🇬🇧 British Airways</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              <strong>British Airways</strong> je vlajkovou leteckou společností Velké Británie a členem aliance oneworld. 
              I přes Brexit stále podléhá <strong>nařízení EU 261/2004</strong> na letech z EU. Pokud byl váš let BA zpožděn 
              o více než 3 hodiny nebo zrušen, máte nárok na kompenzaci <strong>až 600 €</strong>. V tomto článku se dozvíte, 
              jak správně podat reklamaci a co dělat v případě problémů s British Airways.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Měli jste problém s letem British Airways?</h3>
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
              Kdy máte nárok na kompenzaci u British Airways?
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
                  <span>Let odletěl z <strong>EU</strong> (i po Brexitu platí EU261 pro lety z EU)</span>
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

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 Brexit a EU261:</strong> British Airways stále podléhá nařízení EU 261/2004 na všech letech 
                <strong> odlétajících z EU</strong>. Lety do EU z UK již nejsou pokryty (platí UK261 - obdobná pravidla).
              </p>
            </div>
          </section>

          {/* Section 2: Výše kompenzace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Výše kompenzace u British Airways
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
                <div className="text-sm text-gray-500 mt-2">Např. Londýn → Tel Aviv</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">600 €</div>
                <div className="font-semibold">Nad 3 500 km</div>
                <div className="text-sm text-blue-100 mt-2">Např. Londýn → New York</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <p className="mb-0">
                <strong>⚠️ Důležité:</strong> Při zpoždění nad 3 500 km mezi 3-4 hodinami může být kompenzace snížena o 50 % (300 € místo 600 €).
              </p>
            </div>
          </section>

          {/* Section 3: Jak podat reklamaci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak podat reklamaci u British Airways?
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📝 Postup krok za krokem:</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <strong>Vyplňte online formulář</strong>
                    <p className="text-gray-600 mt-1">Na ba.com → Customer Relations → EU261 Compensation Claim</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <strong>Přiložte dokumenty</strong>
                    <p className="text-gray-600 mt-1">Palubní vstupenky, booking reference, e-maily od BA, fotografie</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <strong>Čekejte na odpověď</strong>
                    <p className="text-gray-600 mt-1">BA obvykle odpovídá do 4-6 týdnů</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <strong>V případě zamítnutí</strong>
                    <p className="text-gray-600 mt-1">Obraťte se na ADR/CAA (UK) nebo Úřad civilního letectví (CZ) nebo využijte ClaimWinger</p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">📧 Kontaktní údaje British Airways:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>Online formulář: ba.com/customerrelations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Zákaznická linka: +44 20 8738 5050 (poplatky podle tarifu)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Časté problémy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Časté problémy s British Airways
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  1. Odmítnutí s odkazem na "průmyslovou akci" nebo stávku
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Stávka vlastních zaměstnanců BA <strong>NENÍ</strong> mimořádnou okolností podle judikatury EU. 
                  Pouze "divoké" stávky třetích stran (ATC, letiště) jsou uznány jako mimořádná okolnost.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  2. Dlouhá doba vyřizování (8+ týdnů)
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> BA často zpožďuje odpovědi. Pokud nedostanete odpověď do 6 týdnů, eskalujte 
                  stížnost na CAA (Civil Aviation Authority) nebo využijte služby ClaimWinger pro rychlejší vyřízení.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  3. Nabídka voucherů místo peněz
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Máte právo na <strong>peněžní kompenzaci</strong>. BA často nabízí vouchery 
                  (s vyšší hodnotou), ale je to vaše volba. Pokud chcete peníze, jasně to zdůrazněte v reklamaci.
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
                  <span><strong>Zkušenost s BA:</strong> Víme, jak na jejich časté odmítací argumenty</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Mezinárodní zastoupení:</strong> Komunikujeme s BA za vás (i v angličtině)</span>
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
                  Platí EU261 stále pro British Airways po Brexitu?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! EU261 stále platí pro všechny lety <strong>odlétající z EU</strong>, i když je provozuje britská společnost. 
                  Lety z UK do EU jsou pokryty UK261 (téměř identické pravidla).
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Mohu získat kompenzaci i za starý let?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano, promlčecí lhůta v ČR je 3 roky od data letu. Ve Velké Británii (UK261) je to 6 let.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když BA tvrdí, že to byla stávka (industrial action)?
                </summary>
                <p className="mt-4 text-gray-700">
                  Stávka vlastních zaměstnanců BA <strong>NENÍ mimořádnou okolností</strong> podle rozsudku EU (Soudní dvůr 2018). 
                  Pouze externí stávky ATC nebo letiště jsou uznány jako mimořádná okolnost.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Můžu odmítnout vouchery a požadovat peníze?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! Máte právo na <strong>peněžní kompenzaci</strong>. Vouchery jsou dobrovolná nabídka BA (často s vyšší hodnotou), 
                  ale rozhodnutí je na vás. Jasně to uvedte v reklamaci.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Byl váš let s British Airways zpožděný nebo zrušený?
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