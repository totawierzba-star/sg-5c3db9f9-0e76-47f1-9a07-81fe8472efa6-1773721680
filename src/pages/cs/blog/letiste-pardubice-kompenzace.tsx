import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { AlertCircle, Clock, XCircle, Euro, FileText, CheckCircle, Plane, MapPin } from "lucide-react";

export default function LetistePardubiceKompenzace() {
  return (
    <LayoutCs>
      <SEO 
        title="Letiště Pardubice (PED) - práva pasažérů a kompenzace 2026"
        description="Měli jste problémy s letem z letiště Pardubice? Zjistěte, jak získat až 600 € odškodnění za zpožděný nebo zrušený let."
        url="https://problemlot.com/cs/blog/letiste-pardubice-kompenzace"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>Letiště Pardubice</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Letiště Pardubice (PED): Práva pasažérů a kompenzace 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 6 min čtení</span>
              <span>🇨🇿 PED</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              <strong>Letiště Pardubice (PED)</strong> je regionální letiště ve východních Čechách s omezeným 
              komerčním provozem. Přestože počet pravidelných letů je nižší, platí zde stejná práva pasažérů podle 
              <strong> nařízení EU 261/2004</strong>. Pokud váš let z Pardubic byl zpožděn o více než 3 hodiny nebo 
              zrušen, máte nárok na kompenzaci <strong>až 600 €</strong>.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Měli jste problém s letem z Pardubic?</h3>
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

          {/* Section 1: O letišti */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-blue-600" />
              O letišti Pardubice (PED)
            </h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📊 Základní informace:</h3>
              <ul className="space-y-2">
                <li><strong>Kód IATA:</strong> PED</li>
                <li><strong>Kód ICAO:</strong> LKPD</li>
                <li><strong>Počet cestujících:</strong> ~10 000 ročně</li>
                <li><strong>Hlavní destinace:</strong> Sezónní chartery, cargo</li>
                <li><strong>Typ provozu:</strong> Smíšený - komerční lety, vojenské využití, cargo</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 Tip:</strong> PED má omezený komerční provoz - většina letů je charterová nebo sezónní. 
                Informace o pravidelných letech najdete na webu letiště nebo u cestovních kanceláří.
              </p>
            </div>
          </section>

          {/* Section 2: Kdy máte nárok */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              Kdy máte nárok na kompenzaci z Pardubic?
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">✅ Základní podmínky:</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">1.</span>
                  <span><strong>Zpoždění příletu o 3+ hodiny</strong> do konečné destinace</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">2.</span>
                  <span>Let odletěl z <strong>EU</strong> (Pardubice = ČR = EU)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">3.</span>
                  <span>Problém <strong>nezavinil cestující</strong> (včasný check-in)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold">4.</span>
                  <span>Příčina <strong>není mimořádná okolnost</strong></span>
                </li>
              </ol>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">✅ Nárok MÁTE</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Technická závada letadla</li>
                  <li>• Nedostatek posádky</li>
                  <li>• Overbooking</li>
                  <li>• Zpoždění z předchozího letu</li>
                </ul>
              </div>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-red-900">❌ Nárok NEMÁTE</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Extrémní počasí (blizzard, hurikán)</li>
                  <li>• Bezpečnostní hrozby</li>
                  <li>• Stávky řídících letového provozu</li>
                  <li>• Politické nestability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Výše kompenzace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-green-600" />
              Výše kompenzace z Pardubic
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">250 €</div>
                <div className="text-gray-600">Do 1 500 km</div>
                <div className="text-sm text-gray-500 mt-2">Např. do Říma, Vídně</div>
              </div>
              <div className="bg-white border-2 border-blue-300 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">400 €</div>
                <div className="text-gray-600">1 500 – 3 500 km</div>
                <div className="text-sm text-gray-500 mt-2">Např. do Athén, Lisabonu</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
                <div className="text-4xl font-bold mb-2">600 €</div>
                <div className="font-semibold">Nad 3 500 km</div>
                <div className="text-sm text-blue-100 mt-2">Např. do Dubaje</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <p className="mb-0">
                <strong>⚠️ Důležité:</strong> Kompenzace se vyplácí na <strong>osobu</strong>, ne na rezervaci. 
                Pokud cestujete s rodinou (4 osoby), můžete získat až 4× 600 € = 2 400 €!
              </p>
            </div>
          </section>

          {/* Section 4: Časté problémy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Časté problémy s lety z Pardubic
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-600" />
                  1. Omezený počet letů
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> PED má velmi omezený komerční provoz. Pokud je váš let zrušen, 
                  kontaktujte aerolínku nebo cestovní kancelář okamžitě pro alternativní řešení.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  2. Charterové lety - nejasná odpovědnost
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Většina letů z PED je charterová. Reklamujte u operátora letu 
                  (uvedeno na palubní vstupence), ne u cestovní kanceláře.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600" />
                  3. Sezónní provoz
                </h3>
                <p className="text-gray-700">
                  <strong>Řešení:</strong> Mnoho letů funguje pouze sezónně. Pokud je let zrušen mimo sezónu, 
                  stále máte nárok na kompenzaci nebo plnou refundaci letenky.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Jak podat reklamaci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jak podat reklamaci za let z Pardubic?
            </h2>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📝 Postup krok za krokem:</h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <strong>Zjistěte operátora letu</strong>
                    <p className="text-gray-600 mt-1">Zkontrolujte palubní vstupenku - kdo let skutečně provozoval</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <strong>Kontaktujte aerolínku</strong>
                    <p className="text-gray-600 mt-1">Pošlete reklamaci e-mailem s požadavkem na kompenzaci</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <strong>Přiložte dokumenty</strong>
                    <p className="text-gray-600 mt-1">Palubní vstupenky, booking reference, fotografie</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <strong>Čekejte na odpověď</strong>
                    <p className="text-gray-600 mt-1">Aerolinka má 30 dní na vyřízení reklamace</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Section 6: ClaimWinger */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nechte to na profesionálech
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Proč využít služby ClaimWinger?
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Bez rizika:</strong> Platíte pouze v případě úspěchu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Zkušenost s regionálními letišti:</strong> Víme, jak argumentovat</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Charterové lety:</strong> Specializujeme se na komplikované případy</span>
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
                  Kolik letů ročně z Pardubic operuje?
                </summary>
                <p className="mt-4 text-gray-700">
                  PED obsluhuje přibližně 10 000 pasažérů ročně, především charterové a sezónní lety. 
                  Komerční provoz je omezený, letiště se zaměřuje také na cargo a vojenské využití.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Platí EU261 pro charterové lety z PED?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! EU261 platí pro <strong>všechny komerční lety</strong> z EU, včetně charterů z Pardubic. 
                  Důležité je zjistit, která aerolinka let provozovala.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Mám nárok i při zrušení sezónního letu?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! Pokud byl váš sezónní let zrušen a nebyla to mimořádná okolnost, máte nárok na plnou 
                  refundaci letenky a potenciálně také kompenzaci podle EU261.
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
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Měli jste problém s letem z Pardubic?
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
