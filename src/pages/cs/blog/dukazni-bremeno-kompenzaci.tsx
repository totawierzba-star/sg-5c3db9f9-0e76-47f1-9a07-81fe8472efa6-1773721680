import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Scale, Shield, FileText, AlertCircle, CheckCircle, XCircle, Camera, Mail } from "lucide-react";

export default function DukazniBemenoKompenzaci() {
  return (
    <LayoutCs>
      <SEO 
        title="Důkazní břemeno u kompenzací za zpožděný let - kdo musí dokazovat?"
        description="Zjistěte, kdo nese důkazní břemeno při reklamaci za zpožděný nebo zrušený let. Komplexní průvodce pro cestující."
        url="https://problemlot.com/cs/blog/dukazni-bremeno-kompenzaci"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>Důkazní břemeno</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Důkazní břemeno u kompenzací za zpožděný let
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 8 min čtení</span>
              <span>⚖️ Právní průvodce</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Při reklamaci kompenzace za zpožděný nebo zrušený let je klíčové vědět, <strong>kdo musí co dokazovat</strong>. 
              Podle nařízení <strong>EU 261/2004</strong> a judikatury Soudního dvora EU platí jasná pravidla o <strong>důkazním břemenu</strong>. 
              Tento článek vysvětlí, co musíte dokázat vy jako cestující, a co je povinností aerolínky.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Nechte důkazy na profesionálech</h3>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger se postará o kompletní dokazování - <strong>bez rizika, platíte jen při úspěchu</strong>
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

          {/* Section 1: Co je důkazní břemeno */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-blue-600" />
              Co je důkazní břemeno?
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📚 Základní definice:</h3>
              <p className="text-gray-700 mb-4">
                <strong>Důkazní břemeno</strong> (latinsky: onus probandi) znamená, že ten, kdo tvrdí nějakou skutečnost, 
                ji musí také <strong>dokázat</strong>. V praxi to znamená:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Pokud vy tvrdíte, že let měl zpoždění → musíte to dokázat</li>
                <li>• Pokud aerolínka tvrdí "mimořádné okolnosti" → musí to dokázat ona</li>
                <li>• Pokud tvrdíte, že jste byli včas na check-in → musíte to dokázat</li>
              </ul>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>💡 Klíčové pravidlo:</strong> Podle EU 261/2004 a judikatury SDEU má <strong>aerolínka těžší 
                důkazní břemeno</strong> než cestující. To znamená, že při pochybnostech se rozhoduje ve váš prospěch.
              </p>
            </div>
          </section>

          {/* Section 2: Co musí dokázat cestující */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-green-600" />
              Co musíte dokázat vy (cestující)?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  1. Že jste měli platnou rezervaci
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Důkaz:</strong> Booking reference (PNR kód), e-ticket, potvrzení od aerolínky
                </p>
                <div className="bg-green-50 p-4 rounded text-sm text-gray-700">
                  ✅ <strong>Snadné:</strong> E-mail s potvrzením rezervace obvykle stačí
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  2. Že jste se dostavili včas na check-in
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Důkaz:</strong> Palubní vstupenka (boarding pass), časová známka check-in
                </p>
                <div className="bg-green-50 p-4 rounded text-sm text-gray-700">
                  ✅ <strong>Snadné:</strong> Palubní vstupenka obsahuje čas odbavení
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  3. Že let měl zpoždění/byl zrušen
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Důkaz:</strong> Fotografie tabule s odlety, SMS/e-mail od aerolínky, flight tracking data
                </p>
                <div className="bg-yellow-50 p-4 rounded text-sm text-gray-700">
                  ⚠️ <strong>Doporučení:</strong> Vždy si vyfoťte tabuli odletů zobrazující zpoždění!
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  4. Délka zpoždění na konečné destinaci
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Důkaz:</strong> Čas příletu, palubní vstupenka z náhradního letu
                </p>
                <div className="bg-green-50 p-4 rounded text-sm text-gray-700">
                  ✅ <strong>Pomoc:</strong> ClaimWinger má přístup k oficiálním databázím letů a dokáže doložit zpoždění i bez vašich fotek
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Co musí dokázat aerolínka */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-red-600" />
              Co musí dokázat aerolínka?
            </h2>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg mb-6 border-2 border-red-200">
              <h3 className="text-xl font-semibold mb-4">🛡️ Těžké důkazní břemeno aerolínky:</h3>
              <p className="text-gray-700 mb-4">
                Podle rozsudků Soudního dvora EU (např. C-549/07, C-22/11, C-257/14) má aerolínka <strong>mnohem těžší 
                důkazní břemeno</strong> než cestující. Musí doložit:
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  1. Mimořádné okolnosti (pokud je tvrdí)
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Musí doložit:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• <strong>Konkrétní událost:</strong> Ne jen "technická závada", ale specifický defekt s časovými údaji</li>
                  <li>• <strong>Kauzální vztah:</strong> Že tato událost přímo způsobila zpoždění</li>
                  <li>• <strong>Nevyhnutelnost:</strong> Že i při rozumných opatřeních se zpoždění nedalo předejít</li>
                  <li>• <strong>Dokumentace:</strong> Technické zprávy, potvrzení třetích stran (ATC, letiště)</li>
                </ul>
                <div className="bg-red-50 p-4 rounded text-sm text-gray-700 mt-4">
                  ❌ <strong>Nedostatečné:</strong> Obecné fráze typu "špatné počasí" nebo "technické problémy" bez konkrétních důkazů
                </div>
              </div>

              <div className="bg-white border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  2. Že učinila vše rozumné pro předejití zpoždění
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Musí doložit:</strong>
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Jaká konkrétní opatření učinila</li>
                  <li>• Proč tato opatření nestačila</li>
                  <li>• Že neexistovala jiná rozumná alternativa</li>
                </ul>
              </div>

              <div className="bg-white border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  3. Že cestující byl informován včas (pokud tvrdí výjimku)
                </h3>
                <p className="text-gray-700 mb-3">
                  <strong>Musí doložit:</strong> Kdy a jakým způsobem byl cestující informován o zrušení (min. 14 dní předem = žádná kompenzace)
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Praktické tipy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Camera className="w-8 h-8 text-blue-600" />
              Praktické tipy pro dokazování
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">✅ Co dělat na letišti:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>📸 Vyfoťte tabuli s odlety (zpoždění viditelné)</li>
                  <li>📸 Vyfoťte svou palubní vstupenku</li>
                  <li>💬 Požádejte o písemné potvrzení o důvodu zpoždění</li>
                  <li>📧 Uložte všechny e-maily a SMS od aerolínky</li>
                  <li>🎫 Uschovejte všechny nové palubní vstupenky</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">💡 Další užitečné důkazy:</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>🌐 Screenshot z flight tracking webu (FlightRadar24)</li>
                  <li>📱 Fotky z letištních monitorů</li>
                  <li>👥 Kontakty na další cestující (svědci)</li>
                  <li>🧾 Účtenky za jídlo/hotel (když aerolínka nepomohla)</li>
                  <li>📝 Poznámky z rozhovorů s personálem</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Časté situace */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Časté situace a důkazní břemeno
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🌩️ Situace: Aerolínka tvrdí "špatné počasí"</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-green-700">✅ Vy:</strong>
                    <p className="text-gray-700 mt-2">Stačí doložit zpoždění + že jste byli včas na check-in</p>
                  </div>
                  <div>
                    <strong className="text-red-700">❌ Aerolínka:</strong>
                    <p className="text-gray-700 mt-2">Musí doložit meteorologické zprávy, potvrzení od ATC, že počasí bylo skutečně extrémní</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🔧 Situace: Aerolínka tvrdí "technickou závadu"</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-green-700">✅ Vy:</strong>
                    <p className="text-gray-700 mt-2">Stačí doložit zpoždění</p>
                  </div>
                  <div>
                    <strong className="text-red-700">❌ Aerolínka:</strong>
                    <p className="text-gray-700 mt-2">Musí doložit technickou zprávu, že šlo o "skrytou závadu" (hidden defect), ne běžnou údržbu</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🪧 Situace: Aerolínka tvrdí "stávku"</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-green-700">✅ Vy:</strong>
                    <p className="text-gray-700 mt-2">Stačí doložit zpoždění</p>
                  </div>
                  <div>
                    <strong className="text-red-700">❌ Aerolínka:</strong>
                    <p className="text-gray-700 mt-2">Musí doložit, že šlo o stávku MIMO jejich kontrolu (např. ATC), ne vlastních zaměstnanců</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: ClaimWinger */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nechte dokazování na profesionálech
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Proč využít služby ClaimWinger?
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Přístup k databázím:</strong> Ověříme zpoždění i bez vašich fotek</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Právní expertise:</strong> Víme, jak vyvrátit argumenty aerolinky</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Bez rizika:</strong> Platíte pouze v případě úspěchu</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Rychlé vyřízení:</strong> Průměrně 2-4 měsíce vs. 6-12 měsíců vlastní reklamace</span>
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
                  Co když nemám fotografie z letiště?
                </summary>
                <p className="mt-4 text-gray-700">
                  Není to konec světa! ClaimWinger má přístup k oficiálním databázím letů (FlightStats, Eurocontrol) 
                  a může doložit zpoždění i bez vašich fotek. Palubní vstupenka je obvykle dostačující.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Musím dokazovat, že zpoždění nebylo mimořádnou okolností?
                </summary>
                <p className="mt-4 text-gray-700">
                  <strong>Ne!</strong> To je povinnost <strong>aerolínky</strong>. Podle judikatury SDEU má aerolínka 
                  důkazní břemeno ohledně mimořádných okolností. Vy jen musíte dokázat, že let měl zpoždění.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když aerolínka odmítne poskytnout důkazy?
                </summary>
                <p className="mt-4 text-gray-700">
                  To je ve váš prospěch! Pokud aerolínka odmítne doložit své tvrzení o mimořádných okolnostech, 
                  soud rozhodne v neprospěch aerolínky. ClaimWinger vám s tímto pomůže.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Platí důkazní břemeno i u českých soudů?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! České soudy jsou vázány judikaturou Soudního dvora EU. Pravidla o důkazním břemenu 
                  z rozsudků SDEU platí i v České republice.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Nechte dokazování na odborníkech
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              ClaimWinger vymůže vaši kompenzaci až <strong>600 €</strong> - s právním zázemím a bez rizika
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              Začít reklamaci zdarma →
            </a>
          </section>
        </div>
      </article>
    </LayoutCs>
  );
}
