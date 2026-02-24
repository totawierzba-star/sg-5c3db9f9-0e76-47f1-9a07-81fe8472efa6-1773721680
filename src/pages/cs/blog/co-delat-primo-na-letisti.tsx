import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Camera, FileText, Clock, AlertCircle, CheckCircle, Smartphone, MapPin, Users } from "lucide-react";

export default function CoDelatPrimoNaLetisti() {
  return (
    <LayoutCs>
      <SEO 
        title="Co dělat přímo na letišti při zpožděném letu - praktický průvodce"
        description="Detailní návod, co dělat přímo na letišti když máte zpoždění nebo zrušení letu. Dokumentace, fotky, formuláře."
        url="https://lotproblem.pl/cs/blog/co-delat-primo-na-letisti"
        image="https://lotproblem.pl/og-image.png"
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
              Co dělat přímo na letišti při zpožděném nebo zrušeném letu
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 8 min čtení</span>
              <span>✈️ Praktický průvodce</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Váš let má zpoždění nebo byl zrušen? <strong>Prvních 30 minut na letišti je klíčových!</strong> To, 
              co uděláte hned po oznámení zpoždění, může zásadně ovlivnit vaši šanci na získání kompenzace. 
              Tento článek vám krok za krokem vysvětlí, <strong>jak si zajistit všechny důkazy</strong> a 
              připravit se na úspěšnou reklamaci.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Nechte dokumentaci na nás</h3>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger vyřídí vše za vás - <strong>stačí nám základní údaje o letu</strong>
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

          {/* Section 1: První kroky */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              První 3 kroky v prvních 5 minutách
            </h2>

            <div className="space-y-6">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                  1. Vyfotit informační tabuli
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>HNED jak zjistíte zpoždění</strong>, vyfoťte si informační tabuli na letišti s:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✅ Číslem letu</li>
                  <li>✅ Plánovaným časem odletu</li>
                  <li>✅ Novým časem odletu nebo nápisem "CANCELLED" / "DELAYED"</li>
                  <li>✅ Aktuálním časem (na telefonu/hodinkách ve snímku)</li>
                </ul>
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-700 mb-0">
                    💡 <strong>Tip:</strong> Vyfoťte tabuli vícekrát během čekání - dokumentuje to průběh zpoždění.
                  </p>
                </div>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                  2. Screenshot z aplikace aerolinek
                </h3>
                <p className="text-gray-700 mb-3">
                  Otevřete aplikaci aerolinky (Ryanair, Wizz Air, Smartwings atd.) a udělejte screenshot:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✅ Stavu letu</li>
                  <li>✅ Oznámení o zpoždění/zrušení</li>
                  <li>✅ Nového času odletu</li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  3. Zjistit důvod zpoždění
                </h3>
                <p className="text-gray-700 mb-3">
                  Jděte k přepážce aerolinky a <strong>zeptejte se na důvod zpoždění</strong>. Personál vám musí 
                  poskytnout vysvětlení. Nejlépe:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>✅ Požádejte o písemné potvrzení důvodu</li>
                  <li>✅ Pokud odmítnou, nahrávejte si audio odpovědi (legální v ČR)</li>
                  <li>✅ Zapište si jméno zaměstnance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 2: Dokumenty */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Jaké dokumenty si ponechat?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">✅ Nezbytné dokumenty:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📄 <strong>Palubní vstupenka</strong> (boarding pass)</li>
                  <li>📄 <strong>Potvrzení o rezervaci</strong></li>
                  <li>📄 <strong>Fotky informační tabule</strong></li>
                  <li>📄 <strong>Účtenky</strong> (občerstvení, hotel)</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">💡 Extra důkazy (výhodné):</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>📸 <strong>Foto/video z letiště</strong></li>
                  <li>📧 <strong>E-maily od aerolinky</strong></li>
                  <li>💬 <strong>SMS/push notifikace</strong></li>
                  <li>👥 <strong>Kontakty spolucestujících</strong> (svědci)</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <p className="mb-0 text-gray-700">
                <strong>⚠️ NIKDY NEVYHAZUJTE:</strong> Palubní vstupenku musíte mít fyzicky nebo v elektronické 
                podobě i měsíce po letu. Je to klíčový důkaz!
              </p>
            </div>
          </section>

          {/* Section 3: Co požadovat */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              Co můžete požadovat přímo na letišti
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">🍽️ Občerstvení zdarma</h3>
                <p className="text-gray-700 mb-3">
                  Pokud zpoždění trvá více než 2 hodiny, máte právo na:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Nápoje</li>
                  <li>• Jídlo (přiměřené délce čekání)</li>
                  <li>• 2 telefonní hovory nebo e-maily</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  💡 Pokud aerolinka nic nenabídne, kupte si sami a <strong>uschovejte si účtenky</strong> - můžete 
                  je požadovat zpět.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">🏨 Ubytování přes noc</h3>
                <p className="text-gray-700 mb-3">
                  Pokud let odletí až následující den, aerolinka musí zaplatit:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Hotel</li>
                  <li>• Transfer letiště ↔ hotel</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  ⚠️ Pokud to aerolinka odmítne, zarezervujte si sami a <strong>uschovejte si fakturu</strong>.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">📄 Písemné potvrzení</h3>
                <p className="text-gray-700 mb-3">
                  Požádejte aerolince o <strong>písemné potvrzení</strong> (form EU261), které obsahuje:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Důvod zpoždění/zrušení</li>
                  <li>• Délku zpoždění</li>
                  <li>• Vaše práva podle EU261</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Časté chyby */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              Časté chyby cestujících na letišti
            </h2>

            <div className="space-y-4">
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ CHYBA #1: Nepořídili jste fotky</h3>
                <p className="text-gray-700 mb-2">
                  Spoléháte se na to, že aerolinka vám později poskytne dokumentaci.
                </p>
                <p className="text-green-800 font-semibold">
                  ✅ SPRÁVNĚ: Vyfoťte si všechno HNED! Aerolinka vám často odmítne poskytnout důkazy.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ CHYBA #2: Přijali jste voucher místo peněz</h3>
                <p className="text-gray-700 mb-2">
                  Aerolinka vám nabídla voucher na jídlo nebo budoucí let místo hotovosti.
                </p>
                <p className="text-green-800 font-semibold">
                  ✅ SPRÁVNĚ: Máte právo na vrácení peněz, ne voucher! Ale pokud chcete voucher, vezměte ho - 
                  nevylučuje to pozdější kompenzaci.
                </p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <h3 className="font-bold text-red-900 mb-2">❌ CHYBA #3: Vyhodili jste boarding pass</h3>
                <p className="text-gray-700 mb-2">
                  Po příletu jste vyhodili palubní vstupenku.
                </p>
                <p className="text-green-800 font-semibold">
                  ✅ SPRÁVNĚ: Boarding pass je KLÍČOVÝ důkaz! Uschovejte si ho minimálně 3 roky.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Nechte ClaimWinger vyřešit vše za vás
              </h3>
              <p className="text-gray-700 mb-6">
                Shromáždili jste důkazy? Skvělé! Teď už jen pošlete informace ClaimWinger a my se postaráme o 
                zbytek. <strong>Bez starostí, bez rizika.</strong>
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors no-underline"
              >
                Předat případ ClaimWinger →
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
                  Co když nemám boarding pass?
                </summary>
                <p className="mt-4 text-gray-700">
                  Můžete si ho vyžádat od aerolinky nebo použít elektronickou verzi z aplikace. V nejhorším případě 
                  stačí potvrzení rezervace + fotka z letiště.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Musím požádat o kompenzaci přímo na letišti?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ne! Kompenzaci můžete požadovat i měsíce po letu. Důležité je jen shromáždit důkazy na místě.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když aerolinka odmítne poskytnout písemné potvrzení?
                </summary>
                <p className="mt-4 text-gray-700">
                  To se stává často. V tom případě stačí vaše fotografie, účtenky a případně svědectví 
                  spolucestujících. ClaimWinger dokáže získat oficiální dokumentaci.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Máte shromážděné důkazy?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Pošlete nám je a my vyřídíme zbytek. <strong>Platíte pouze v případě úspěchu.</strong>
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              Získat kompenzaci →
            </a>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}