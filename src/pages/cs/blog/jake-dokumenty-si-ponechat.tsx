import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { FileText, Camera, Mail, Receipt, AlertCircle, CheckCircle, Smartphone, Clock } from "lucide-react";

export default function JakeDokumentySiPonechat() {
  return (
    <LayoutCs>
      <SEO 
        title="Jaké dokumenty si ponechat při zpožděném letu - kompletní checklist"
        description="Zjistěte, které dokumenty jsou klíčové pro získání kompenzace. Boarding pass, účtenky, fotky a další důkazy."
        url="https://lotproblem.pl/cs/blog/jake-dokumenty-si-ponechat"
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
              Jaké dokumenty si ponechat při zpožděném letu - kompletní checklist
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 7 min čtení</span>
              <span>📄 Praktický průvodce</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              <strong>Správná dokumentace = úspěšná reklamace!</strong> Až 70 % zamítnutých reklamací je kvůli 
              nedostatečným důkazům. Tento článek vám ukáže přesný checklist dokumentů, které potřebujete 
              <strong>uchovat, vyfotit a uschovat</strong> pro získání kompenzace až 600 €.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Nevíte, které dokumenty jsou důležité?</h3>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger vás provede celým procesem - <strong>řekneme vám přesně, co potřebujeme</strong>
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

          {/* Section 1: Nezbytné dokumenty */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-red-600" />
              Nezbytné dokumenty (bez nich to nejde!)
            </h2>

            <div className="space-y-6">
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-red-600" />
                  1. Palubní vstupenka (Boarding Pass)
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>NEJDŮLEŽITĚJŠÍ DOKUMENT!</strong> Bez něj nemůžete prokázat, že jste skutečně letěli.
                </p>
                <div className="bg-white p-4 rounded-lg mb-3">
                  <p className="font-semibold mb-2">Co musí obsahovat:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>✅ Vaše jméno a příjmení</li>
                    <li>✅ Číslo letu</li>
                    <li>✅ Datum a čas odletu</li>
                    <li>✅ Trasa (odkud - kam)</li>
                    <li>✅ Číslo sedadla</li>
                    <li>✅ Gate a boarding time</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-700 mb-0">
                    💡 <strong>Tip:</strong> Vyfoťte si boarding pass IHNED po obdržení a uschovejte fyzickou kopiu. 
                    Elektronická verze může zmizet z aplikace aerolinky.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Receipt className="w-6 h-6 text-red-600" />
                  2. Potvrzení o rezervaci / E-ticket
                </h3>
                <p className="text-gray-700 mb-3">
                  E-mail potvrzující nákup letenky obsahující:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>✅ Rezervační kód (booking reference)</li>
                  <li>✅ Číslo letu</li>
                  <li>✅ Datum a čas odletu</li>
                  <li>✅ Částku, kterou jste zaplatili</li>
                </ul>
                <p className="text-sm text-gray-600 mt-3">
                  📧 Obvykle přichází na e-mail hned po zakoupení letenky.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Důkazy o zpoždění */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Camera className="w-8 h-8 text-blue-600" />
              Důkazy o zpoždění/zrušení
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">📸 Fotografie z letiště</h3>
                <p className="text-gray-700 mb-3">
                  Vyfotit informační tabuli s:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Číslem letu</li>
                  <li>• Stavem "DELAYED" / "CANCELLED"</li>
                  <li>• Novým časem odletu</li>
                  <li>• Aktuálním časem (hodiny/telefon)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">📱 Screenshot z aplikace</h3>
                <p className="text-gray-700 mb-3">
                  Z aplikace aerolinky:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Status letu</li>
                  <li>• Push notifikace o zpoždění</li>
                  <li>• Nový čas odletu</li>
                  <li>• Důvod zpoždění (pokud uveden)</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">📧 E-maily od aerolinky</h3>
                <p className="text-gray-700 mb-3">
                  Uschovejte všechny e-maily:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• O změně času odletu</li>
                  <li>• O zrušení letu</li>
                  <li>• O náhradním letu</li>
                  <li>• Odpovědi na reklamaci</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">💬 SMS / Push notifikace</h3>
                <p className="text-gray-700 mb-3">
                  Screenshot oznámení:
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>• SMS o zpoždění</li>
                  <li>• Push z aplikace</li>
                  <li>• WhatsApp zprávy</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Náklady a účtenky */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Receipt className="w-8 h-8 text-green-600" />
              Účtenky za dodatečné náklady
            </h2>

            <div className="bg-green-50 border-2 border-green-200 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Pokud jste museli kvůli zpoždění zaplatit dodatečné náklady, <strong>můžete je vymáhat zpět</strong>!
              </p>
              <h3 className="font-semibold mb-3">Uschovejte si účtenky za:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="text-gray-700 space-y-2">
                  <li>🍔 Jídlo a pití na letišti</li>
                  <li>🏨 Hotel přes noc</li>
                  <li>🚕 Taxi / Uber</li>
                  <li>🚌 Veřejná doprava</li>
                </ul>
                <ul className="text-gray-700 space-y-2">
                  <li>📞 Telefonní hovory</li>
                  <li>💼 Ztráta pracovní doby</li>
                  <li>🎫 Zmeškané akce (koncerty)</li>
                  <li>✈️ Nová letenka</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="mb-0 text-gray-700">
                <strong>⚠️ DŮLEŽITÉ:</strong> Náklady musí být <strong>přiměřené</strong> a <strong>nezbytné</strong>. 
                Luxusní hotel za 10 000 Kč pravděpodobně neprojedete.
              </p>
            </div>
          </section>

          {/* Section 4: Extra důkazy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Smartphone className="w-8 h-8 text-purple-600" />
              Extra důkazy (zvyšují šance)
            </h2>

            <div className="space-y-4">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">👥 Kontakty na spolucestující</h3>
                <p className="text-gray-700">
                  Pokud s vámi cestovala rodina nebo přátelé, jejich svědectví může posílit vaši pozici.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">📹 Video z letiště</h3>
                <p className="text-gray-700">
                  Video dokumentace situace na letišti, rozhovory se zaměstnanci nebo chaos při zrušení letu.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">🌐 Webové stránky letišť</h3>
                <p className="text-gray-700">
                  Screenshot stavu letu z webových stránek letiště (FlightRadar24, oficiální web letiště).
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">📄 Písemné potvrzení od aerolinky</h3>
                <p className="text-gray-700">
                  Pokud vám aerolinka vydala písemné potvrzení o důvodu zpoždění - ZLATÝ DŮKAZ!
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Jak dokumenty organizovat */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Jak si dokumenty organizovat?
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Doporučený systém:
              </h3>
              <ol className="space-y-4 text-gray-700">
                <li>
                  <strong>1. Vytvořte složku na počítači/telefonu</strong>
                  <p className="text-gray-600 text-sm mt-1">Název: "Let_[datum]_[číslo letu]"</p>
                </li>
                <li>
                  <strong>2. Uložte všechny fotky a screenshoty</strong>
                  <p className="text-gray-600 text-sm mt-1">Do jedné složky, ideálně v cloudu (Google Drive, Dropbox)</p>
                </li>
                <li>
                  <strong>3. Vytvořte jeden dokument s popisem</strong>
                  <p className="text-gray-600 text-sm mt-1">Co se stalo, kdy, jak dlouhé bylo zpoždění, co vám řekli</p>
                </li>
                <li>
                  <strong>4. Uschovejte fyzické dokumenty</strong>
                  <p className="text-gray-600 text-sm mt-1">Boarding pass, účtenky - do obálky nebo šanonu</p>
                </li>
              </ol>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ ClaimWinger vám pomůže s dokumentací
              </h3>
              <p className="text-gray-700 mb-6">
                Nejste si jistí, jestli máte všechny potřebné dokumenty? Nemusíte! ClaimWinger má přístup k 
                databázím letišť a dokáže získat chybějící důkazy. <strong>Stačí nám základní informace.</strong>
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
                  Co když jsem ztratil boarding pass?
                </summary>
                <p className="mt-4 text-gray-700">
                  Můžete si ho vyžádat od aerolinky, nebo použít elektronickou verzi z e-mailu/aplikace. 
                  V nejhorším případě stačí potvrzení o rezervaci + fotky z letiště.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Jak dlouho si mám dokumenty ponechat?
                </summary>
                <p className="mt-4 text-gray-700">
                  Minimálně <strong>3 roky</strong> od data letu (promlčecí lhůta v ČR). Doporučujeme 5 let pro jistotu.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když nemám žádné fotky z letiště?
                </summary>
                <p className="mt-4 text-gray-700">
                  ClaimWinger může získat oficiální potvrzení od letiště a aerolinky. Chybějící fotky nejsou 
                  automaticky konec reklamace.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Máte dokumenty připravené?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Pošlete nám je a my se postaráme o zbytek. <strong>Bez rizika, platíte jen při úspěchu.</strong>
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