import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Scale, Gavel, FileText, AlertCircle, CheckCircle, XCircle, Euro, Building } from "lucide-react";

export default function SoudniVymahaniKompenzaci() {
  return (
    <LayoutCs>
      <SEO 
        title="Soudní vymáhání kompenzace za zpožděný let - kdy se vyplatí žaloba?"
        description="Kdy se vyplatí soudit s aerolinkou? Průvodce soudním vymáháním, evropské drobné nároky a náklady řízení."
        url="https://problemlot.com/cs/blog/soudni-vymahani-kompenzaci"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>Soudní vymáhání</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Soudní vymáhání kompenzace za zpožděný let - kdy se vyplatí žaloba?
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 9 min čtení</span>
              <span>⚖️ Právní průvodce</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Aerolinka zamítla vaši reklamaci, ale vy jste si jistí, že máte pravdu? Dalším krokem může být 
              <strong>soudní žaloba</strong>. Mnoho cestujících se soudu bojí, ale v EU existují zjednodušené 
              postupy pro drobné nároky. Tento článek vám vysvětlí, kdy se vyplatí jít k soudu, kolik to stojí 
              a jaká jsou rizika.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Nechce se vám k soudu?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger vás zastoupí u soudu na vlastní náklady - <strong>pokud prohrajeme, neplatíte nic</strong>
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

          {/* Section 1: Kdy uvažovat o žalobě */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Gavel className="w-8 h-8 text-blue-600" />
              Kdy má smysl podat žalobu?
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">✅ Indikátory pro úspěšnou žalobu:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Máte jasné důkazy</strong>
                    <p className="text-gray-600 text-sm">Fotky z letiště, potvrzení o zpoždění, boarding pass.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Aerolinka lže nebo mlží</strong>
                    <p className="text-gray-600 text-sm">Tvrdí "počasí", ale ostatní lety létaly normálně.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Ignorují vás</strong>
                    <p className="text-gray-600 text-sm">Uběhlo 6 týdnů bez odpovědi na vaši reklamaci.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Vysoká částka</strong>
                    <p className="text-gray-600 text-sm">Při rodinném letu (4 osoby × 600 € = 2400 €) se žaloba rozhodně vyplatí.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2: Možnosti soudního řešení */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              Jaké máte možnosti?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Building className="w-5 h-5 text-blue-600" />
                  1. Český soud
                </h3>
                <p className="text-gray-700 mb-3">
                  Pokud má aerolinka sídlo v ČR nebo letadlo odlétalo z ČR, můžete žalovat u českého soudu.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Potřebujete advokáta (doporučeno)</li>
                  <li>• Soudní poplatek (5 % z částky, min. 1000 Kč)</li>
                  <li>• Délka: 6-18 měsíců</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Euro className="w-5 h-5 text-blue-600" />
                  2. Evropský platební rozkaz
                </h3>
                <p className="text-gray-700 mb-3">
                  Zjednodušený proces pro přeshraniční spory v EU. Vhodné pro zahraniční aerolinky.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Formulář A (online)</li>
                  <li>• Bez nutnosti osobní účasti</li>
                  <li>• Rychlejší než klasický soud</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 Evropské řízení o drobných nárocích (ESCP):</strong> Pro nároky do 5000 € existuje 
                speciální zjednodušený proces. Stačí vyplnit formulář a poslat na příslušný soud. Je to levnější a rychlejší.
              </p>
            </div>
          </section>

          {/* Section 3: Rizika a náklady */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Rizika a náklady soudního sporu
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-red-900">💸 Co když prohrajete?</h3>
                <p className="text-gray-700 mb-3">
                  Pokud soud prohrajete, musíte zaplatit:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>1. Své náklady na právníka</li>
                  <li>2. Soudní poplatky</li>
                  <li>3. Náklady protistrany (právníci aerolinky jsou drazí!)</li>
                </ul>
                <p className="text-red-800 font-bold mt-3">
                  Celková částka může přesáhnout 20 000 Kč, i když jste žalovali jen o 250 €.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">🛡️ Řešení bez rizika: ClaimWinger</h3>
                <p className="text-gray-700 mb-3">
                  Společnosti jako ClaimWinger přebírají veškeré riziko. Pokud se případ dostane k soudu:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>✅ Platí soudní poplatky</li>
                  <li>✅ Platí své právníky</li>
                  <li>✅ V případě prohry platí náklady protistrany</li>
                  <li>✅ Vy neplatíte <strong>NIKDY NIC</strong>, pokud nevyhrajeme</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Jak probíhá soud */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Gavel className="w-8 h-8 text-blue-600" />
              Jak probíhá soudní spor?
            </h2>

            <div className="relative border-l-4 border-blue-200 ml-4 pl-8 space-y-8">
              <div className="relative">
                <div className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold">Předžalobní výzva</h3>
                <p className="text-gray-600 mt-2">Poslední varování aerolince. Často stačí k tomu, aby zaplatili ("pokus o smír").</p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold">Podání žaloby</h3>
                <p className="text-gray-600 mt-2">Sepsání žaloby a odeslání na soud + zaplacení poplatku.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold">Vyjádření aerolinky</h3>
                <p className="text-gray-600 mt-2">Soud pošle žalobu aerolince, ta má čas na obhajobu.</p>
              </div>

              <div className="relative">
                <div className="absolute -left-12 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold">Jednání soudu</h3>
                <p className="text-gray-600 mt-2">Většinou není nutné osobní stání u drobných nároků, rozhoduje se "od stolu".</p>
              </div>

              <div className="relative">
                <div className="absolute -left-12 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
                <h3 className="text-xl font-bold text-green-700">Rozsudek a exekuce</h3>
                <p className="text-gray-600 mt-2">Pokud vyhrajete, aerolinka musí zaplatit. Pokud ne, následuje exekuce.</p>
              </div>
            </div>
          </section>

          {/* Section 5: ClaimWinger */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Soudy jsou komplikované. Nechte to na nás.
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Proč se soudit přes ClaimWinger?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-blue-900">Sami (na vlastní pěst):</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>❌ Riziko poplatků 20 000+ Kč</li>
                    <li>❌ Stres a administrativa</li>
                    <li>❌ Nutnost hledat právníka</li>
                    <li>❌ Nejistý výsledek</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-green-900">S ClaimWinger:</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>✅ Nulové riziko (platíme my)</li>
                    <li>✅ Žádný stres (vše vyřídíme)</li>
                    <li>✅ Zkušení právníci v ceně</li>
                    <li>✅ Platíte jen % z výhry</li>
                  </ul>
                </div>
              </div>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors no-underline"
              >
                Chci se soudit bez rizika →
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
                  Můžu žalovat zahraniční aerolinku v ČR?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano, pokud let odlétal z České republiky (např. Praha, Brno), můžete žalovat u českého soudu, 
                  i když je aerolinka z Irska (Ryanair) nebo Maďarska (Wizz Air).
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Jak dlouho trvá soudní spor?
                </summary>
                <p className="mt-4 text-gray-700">
                  V České republice průměrně 6 až 18 měsíců. Pokud se aerolinka odvolá, může to trvat i déle. 
                  Proto je dobré mít trpělivost.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Kolik si bere ClaimWinger za soudní spor?
                </summary>
                <p className="mt-4 text-gray-700">
                  Standardní provize je 25 %. Pokud musíme jít k soudu, provize se může zvýšit na 40-50 % kvůli 
                  vysokým nákladům a riziku, které na sebe bereme. Vždy jste o tom informováni předem.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Aerolinka stále nechce platit?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Převezmeme váš případ a půjdeme i k soudu. Vy neriskujete ani korunu.
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              Předat případ právníkům →
            </a>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}
