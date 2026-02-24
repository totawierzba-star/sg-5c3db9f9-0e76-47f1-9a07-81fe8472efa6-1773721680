import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Euro, RefreshCw, CircleDollarSign, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";

export default function RozdilKompenzaceRefundace() {
  return (
    <LayoutCs>
      <SEO 
        title="Rozdíl mezi kompenzací a refundací letenky - co vám náleží?"
        description="Kompenzace vs. refundace - zjistěte, co je co a kdy máte nárok na obojí. Kompletní právní průvodce s příklady."
        url="https://lotproblem.pl/cs/blog/rozdil-kompenzace-refundace"
        image="https://lotproblem.pl/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>Právní průvodce</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Rozdíl mezi kompenzací a refundací letenky - co vám náleží?
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 8 min čtení</span>
              <span>💰 Právní průvodce</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Mnoho cestujících si myslí, že <strong>kompenzace</strong> a <strong>refundace</strong> jsou totéž. 
              To je však <strong>velký omyl</strong>, který vás může stát tisíce korun. Kompenzace je odškodnění 
              za zpoždění nebo zrušení letu, zatímco refundace je vrácení ceny letenky. V mnoha případech 
              <strong> máte nárok na obojí současně</strong>!
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Nejste si jisti, co vám náleží?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger zkontroluje váš nárok <strong>zdarma</strong> a vymůže vše, co vám patří
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

          {/* Section 1: Základní rozdíl */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CircleDollarSign className="w-8 h-8 text-blue-600" />
              Co je kompenzace a co refundace?
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Euro className="w-6 h-6 text-green-600" />
                  Kompenzace (odškodnění)
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Peněžní náhrada za ztrátu času</strong> kvůli zpožděnému nebo zrušenému letu.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✅ Pevná částka: 250 €, 400 € nebo 600 €</li>
                  <li>✅ Nezávisí na ceně letenky</li>
                  <li>✅ Máte nárok i když vám nabídli náhradní let</li>
                  <li>✅ Upraveno nařízením EU 261/2004</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <RefreshCw className="w-6 h-6 text-blue-600" />
                  Refundace (vrácení peněz)
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Vrácení ceny letenky</strong>, pokud jste nepoletěli nebo aerolinka zrušila let.
                </p>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✅ Vrací se plná cena letenky</li>
                  <li>✅ Máte právo výběru: refundace nebo náhradní let</li>
                  <li>✅ Pokud zvolíte náhradní let, refundaci nedostanete</li>
                  <li>✅ Nezávisí na délce zpoždění</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="mb-0 text-gray-700">
                <strong>💡 Klíčová informace:</strong> Refundace = vrácení peněz za letenku. Kompenzace = odškodnění 
                za ztrátu času. <strong>Můžete dostat obojí současně!</strong>
              </p>
            </div>
          </section>

          {/* Section 2: Kdy máte nárok na obojí */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Kdy máte nárok na obojí?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Situace 1: Zrušený let</h3>
                <p className="text-gray-700 mb-3">
                  Aerolinka vám zrušila let méně než 14 dní před odletem:
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-900 font-semibold mb-2">✅ Máte nárok na:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>1. <strong>Refundaci</strong> - vrácení ceny letenky</li>
                    <li>2. <strong>Kompenzaci</strong> - 250-600 € podle vzdálenosti</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Situace 2: Zpožděný let 3+ hodiny</h3>
                <p className="text-gray-700 mb-3">
                  Nakonec jste poletěli, ale s více než 3hodinovým zpožděním:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold mb-2">✅ Máte nárok na:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>1. <strong>Kompenzaci</strong> - 250-600 € podle vzdálenosti</li>
                    <li>2. <strong>Refundace</strong> - ❌ NE (protože jste poletěli)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Situace 3: Náhradní let po zrušení</h3>
                <p className="text-gray-700 mb-3">
                  Aerolinka vám nabídla náhradní let a vy jste ho přijali:
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-yellow-900 font-semibold mb-2">⚠️ Máte nárok na:</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>1. <strong>Kompenzaci</strong> - 250-600 € (pokud náhradní let přiletěl s více než 2h zpožděním)</li>
                    <li>2. <strong>Refundace</strong> - ❌ NE (protože jste využili náhradní let)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Časté chyby */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              Časté chyby cestujících
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ CHYBA #1: Myslí si, že refundace = kompenzace</h3>
                <p className="text-gray-700 mb-2">
                  Aerolinka vrátila peníze za letenku, takže už nemáte nárok na nic dalšího.
                </p>
                <p className="text-green-800 font-semibold">
                  ✅ SPRÁVNĚ: Máte nárok na kompenzaci 250-600 € navíc!
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ CHYBA #2: Přijali voucher místo refundace</h3>
                <p className="text-gray-700 mb-2">
                  Aerolinka nabídla voucher na další let místo vrácení peněz.
                </p>
                <p className="text-green-800 font-semibold">
                  ✅ SPRÁVNĚ: Máte právo na vrácení peněz v hotovosti, ne voucher!
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ CHYBA #3: Nevyžádali kompenzaci, protože poletěli náhradním letem</h3>
                <p className="text-gray-700 mb-2">
                  Aerolinka vám zrušila let, ale nabídla náhradní. Myslíte si, že už nemáte nárok na kompenzaci.
                </p>
                <p className="text-green-800 font-semibold">
                  ✅ SPRÁVNĚ: Pokud náhradní let přiletěl s více než 2h zpožděním, stále máte nárok!
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Praktické příklady */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Praktické příklady
            </h2>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="text-lg font-bold mb-3">📋 Příklad 1: Zrušený let do Paříže</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✈️ <strong>Situace:</strong> Let Praha → Paříž zrušen 3 dny před odletem</li>
                  <li>💰 <strong>Cena letenky:</strong> 3000 Kč</li>
                  <li>🎯 <strong>Vzdálenost:</strong> 880 km</li>
                  <li>✅ <strong>Nárok na refundaci:</strong> 3000 Kč (vrácení ceny letenky)</li>
                  <li>✅ <strong>Nárok na kompenzaci:</strong> 250 € (~6250 Kč)</li>
                  <li>💵 <strong>CELKEM:</strong> 9250 Kč</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-lg font-bold mb-3">📋 Příklad 2: Zpožděný let do New Yorku</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✈️ <strong>Situace:</strong> Let Praha → New York zpožděn 5 hodin</li>
                  <li>💰 <strong>Cena letenky:</strong> 12 000 Kč</li>
                  <li>🎯 <strong>Vzdálenost:</strong> 6500 km</li>
                  <li>❌ <strong>Nárok na refundaci:</strong> NE (protože jste poletěli)</li>
                  <li>✅ <strong>Nárok na kompenzaci:</strong> 600 € (~15 000 Kč)</li>
                  <li>💵 <strong>CELKEM:</strong> 15 000 Kč</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Nechte ClaimWinger vymáhat vše, co vám náleží
              </h3>
              <p className="text-gray-700 mb-6">
                Nemusíte se znalosti právních nuancí. Vyřídíme za vás jak kompenzaci, tak refundaci. 
                <strong> Platíte pouze v případě úspěchu.</strong>
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors no-underline"
              >
                Vymáhat kompenzaci i refundaci →
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
                  Můžu požadovat kompenzaci i když mi aerolinka vrátila peníze?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! Refundace (vrácení ceny letenky) a kompenzace (odškodnění za ztrátu času) jsou dvě 
                  samostatné věci. Máte nárok na obojí.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když jsem přijal voucher místo refundace?
                </summary>
                <p className="mt-4 text-gray-700">
                  Vouchery jsou často méně výhodné. Máte právo na vrácení peněz v hotovosti. Pokud jste 
                  přijali voucher pod nátlakem, můžete stále požadovat refundaci.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Mám nárok na kompenzaci, i když mi aerolinka nabídla náhradní let?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano, pokud náhradní let přiletěl s více než 2hodinovým zpožděním oproti původnímu času 
                  příletu, máte nárok na kompenzaci.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Není čas ztrácet peníze
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              ClaimWinger vymůže vše, co vám náleží - kompenzaci i refundaci. Žádné riziko, platíte až po výhře.
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              Získat kompenzaci + refundaci →
            </a>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}