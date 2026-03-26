import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { FileText, CheckCircle, Clock, Mail, Phone, AlertCircle, Shield, MessageSquare } from "lucide-react";

export default function JakPodatReklamaciKrokZaKrokem() {
  return (
    <LayoutCs>
      <SEO 
        title="Jak podat reklamaci za zpožděný let krok za krokem - průvodce 2026"
        description="Detailní návod, jak správně podat reklamaci za zpožděný nebo zrušený let. Šablony, termíny, dokumenty a časté chyby."
        url="https://problemlot.com/cs/blog/jak-podat-reklamaci-krok-za-krokem"
        image="https://problemlot.com/og-image.png"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
              <Link href="/cs/blog" className="hover:text-blue-600">Blog</Link>
              <span>→</span>
              <span>Jak podat reklamaci</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Jak podat reklamaci za zpožděný let krok za krokem
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span>📅 24. února 2026</span>
              <span>⏱️ 10 min čtení</span>
              <span>📝 Právní průvodce</span>
            </div>
          </div>

          {/* Introduction */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-0">
              Měli jste zpožděný nebo zrušený let a chcete získat kompenzaci podle <strong>EU 261/2004</strong>? 
              Tento detailní průvodce vás provede celým procesem reklamace <strong>krok za krokem</strong>. 
              Naučíte se, jaké dokumenty potřebujete, jak napsat reklamaci, kde ji podat a co dělat, 
              když aerolinka odmítne platit.
            </p>
          </div>

          {/* Early CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg mb-12 text-center">
            <h3 className="text-2xl font-bold mb-3">Nechte reklamaci na profesionálech</h3>
            <p className="text-blue-100 mb-6 text-lg">
              ClaimWinger se postará o celou reklamaci za vás - <strong>bez rizika, platíte jen při úspěchu</strong>
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

          {/* Section 1: Příprava před reklamací */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Krok 1: Shromážděte dokumenty
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">📋 Potřebné dokumenty:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Palubní vstupenka (boarding pass)</strong>
                    <p className="text-gray-600 text-sm">Nejdůležitější dokument - potvrzuje, že jste na let skutečně nastoupili</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Booking reference / PNR kód</strong>
                    <p className="text-gray-600 text-sm">6-znakový kód z potvrzení rezervace (např. ABC123)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>E-ticket / číslo letenky</strong>
                    <p className="text-gray-600 text-sm">13-číselný e-ticket number (např. 220-1234567890)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Fotografie tabule s odlety</strong>
                    <p className="text-gray-600 text-sm">Ukažte skutečné zpoždění nebo zrušení letu</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Komunikace s aerolínkou</strong>
                    <p className="text-gray-600 text-sm">E-maily, SMS, oznámení o změně letu</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Potvrzení o náhradním letu</strong>
                    <p className="text-gray-600 text-sm">Pokud vám aerolinka nabídla alternativu</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="mb-0">
                <strong>💡 Tip:</strong> Pokud nemáte všechny dokumenty, nebojte se. Palubní vstupenka 
                a booking reference často stačí. Aerolínka má přístup k detailům vašeho letu.
              </p>
            </div>
          </section>

          {/* Section 2: Zjistěte kontakt na aerolínku */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8 text-blue-600" />
              Krok 2: Najděte správný kontakt
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  E-mailová adresa
                </h3>
                <p className="text-gray-700 mb-3">
                  Většina aerolinek má speciální e-mail pro reklamace. Hledejte:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• customer.relations@</li>
                  <li>• complaints@</li>
                  <li>• customercare@</li>
                  <li>• eu261@</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  Online formulář
                </h3>
                <p className="text-gray-700 mb-3">
                  Některé aerolínky preferují online formuláře na webu:
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• "Contact Us" / "Kontakt"</li>
                  <li>• "Complaints" / "Reklamace"</li>
                  <li>• "EU261 Claim"</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <p className="mb-0">
                <strong>⚠️ Důležité:</strong> Reklamaci posílejte přímo <strong>provozní aerolínce</strong> 
                (ta, co skutečně provozovala let), ne cestovní kanceláři nebo online agentuře, kde jste letenku koupili.
              </p>
            </div>
          </section>

          {/* Section 3: Napište reklamaci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Krok 3: Napište reklamaci
            </h2>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">✍️ Struktura reklamačního dopisu:</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">1. Předmět e-mailu:</h4>
                  <p className="text-gray-700 text-sm font-mono bg-gray-100 p-2 rounded">
                    Reklamace - zpožděný let [číslo letu] [datum] - EU 261/2004
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">2. Úvodní věta:</h4>
                  <p className="text-gray-700 text-sm">
                    "Vážení, dne [datum] jsem cestoval(a) vaším letem [číslo letu] z [město] do [město]. 
                    Let byl zpožděn o více než 3 hodiny / zrušen..."
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">3. Údaje o letu:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• Číslo letu: [např. FR1234]</li>
                    <li>• Datum: [DD.MM.YYYY]</li>
                    <li>• Trasa: [odlet] → [přílet]</li>
                    <li>• Booking reference: [ABC123]</li>
                    <li>• Jména cestujících: [všichni]</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">4. Požadavek na kompenzaci:</h4>
                  <p className="text-gray-700 text-sm">
                    "Na základě nařízení EU 261/2004 žádám o vyplacení kompenzace ve výši [250/400/600] € 
                    pro každého cestujícího."
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">5. Kontaktní údaje:</h4>
                  <p className="text-gray-700 text-sm">
                    Jméno, adresa, telefonní číslo, e-mail, číslo bankovního účtu (IBAN)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
              <h3 className="text-xl font-semibold mb-3">📄 Šablona reklamačního dopisu:</h3>
              <div className="bg-white p-4 rounded text-sm font-mono text-gray-800 overflow-x-auto">
                <pre>{`Předmět: Reklamace - zpožděný let FR1234 15.01.2026 - EU 261/2004

Vážení,

dne 15. ledna 2026 jsem cestoval(a) vaším letem FR1234 
z Prahy (PRG) do Londýna (STN).

Plánovaný odlet: 10:00
Skutečný odlet: 14:30
Zpoždění: 4 hodiny 30 minut

Údaje o letu:
- Číslo letu: FR1234
- Datum: 15.01.2026
- Trasa: Praha → Londýn Stansted
- Booking reference: XYZ789
- Cestující: Jan Novák, Marie Nováková

Dle nařízení EU 261/2004 žádám o vyplacení kompenzace 
250 € pro každého cestujícího (celkem 500 €).

Kontaktní údaje:
Jan Novák
Ulice 123, 110 00 Praha
+420 123 456 789
jan.novak@email.cz
IBAN: CZ65 0800 0000 1920 0014 5399

S pozdravem,
Jan Novák`}</pre>
              </div>
            </div>
          </section>

          {/* Section 4: Odešlete reklamaci */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Mail className="w-8 h-8 text-green-600" />
              Krok 4: Odešlete reklamaci
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Checklist před odesláním:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Správná e-mailová adresa aerolínky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Přiloženy všechny dokumenty (PDF, JPG)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Údaje o letu zkontrolovány</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>IBAN bankovního účtu správný</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Předmět e-mailu obsahuje číslo letu a datum</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <p className="mb-0">
                  <strong>💡 Tip:</strong> Odešlete reklamaci s <strong>potvrzením o doručení</strong> 
                  (read receipt). Nebo použijte doporučený e-mail, abyste měli důkaz o odeslání.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Čekejte na odpověď */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Clock className="w-8 h-8 text-orange-600" />
              Krok 5: Čekejte na odpověď aerolínky
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">7-14 dní</div>
                <div className="text-gray-600">První odpověď</div>
                <div className="text-sm text-gray-500 mt-2">Potvrzení přijetí reklamace</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">30 dní</div>
                <div className="text-gray-600">Vyřízení reklamace</div>
                <div className="text-sm text-gray-500 mt-2">Dle občanského zákoníku ČR</div>
              </div>
              <div className="bg-white border border-gray-200 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">60-90 dní</div>
                <div className="text-gray-600">Vyplacení peněz</div>
                <div className="text-sm text-gray-500 mt-2">Pokud aerolínka přijme nárok</div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <p className="mb-0">
                <strong>⚠️ Pozor:</strong> Pokud aerolínka neodpoví do 30 dnů nebo odmítne platit, 
                můžete se obrátit na <strong>Úřad pro civilní letectví (ÚCL)</strong> nebo využít 
                služby společností jako ClaimWinger.
              </p>
            </div>
          </section>

          {/* Section 6: Co když aerolínka odmítne? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              Co když aerolínka odmítne platit?
            </h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">🔴 Časté důvody odmítnutí:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• "Mimořádné okolnosti" (počasí, stávka ATC)</li>
                  <li>• "Zpoždění bylo kratší než 3 hodiny"</li>
                  <li>• "Byli jste informováni 14+ dní předem"</li>
                  <li>• "Let nepodléhá EU 261"</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-2 border-red-200">
                <h3 className="text-xl font-semibold mb-4">🛡️ Možnosti, jak postupovat dál:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <strong>Úřad pro civilní letectví (ÚCL)</strong>
                      <p className="text-gray-600 mt-1 text-sm">
                        Podejte stížnost na ÚCL - dohlížejí na dodržování EU 261 v ČR
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <strong>Česká obchodní inspekce (ČOI)</strong>
                      <p className="text-gray-600 mt-1 text-sm">
                        Pro případy klamavé obchodní praktiky nebo nekalé jednání
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <strong>Soudní cesta</strong>
                      <p className="text-gray-600 mt-1 text-sm">
                        Pokud všechny kroky selžou, můžete podat žalobu u soudu
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                    <div>
                      <strong>ClaimWinger (doporučeno)</strong>
                      <p className="text-gray-600 mt-1 text-sm">
                        Profesionální zastoupení bez rizika - platíte jen při úspěchu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 7: Časté chyby */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-orange-600" />
              Časté chyby při reklamaci
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-red-900">❌ Co NEDĚLAT:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✗ Poslat reklamaci jen cestovní kanceláři</li>
                  <li>✗ Zapomenout přiložit palubní vstupenku</li>
                  <li>✗ Uvést špatný IBAN</li>
                  <li>✗ Žádat kompenzaci za zpoždění 2,5 hodiny</li>
                  <li>✗ Vzdát to po prvním odmítnutí</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 text-green-900">✅ Co DĚLAT:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Poslat reklamaci provozní aerolínce</li>
                  <li>✓ Přiložit všechny důležité dokumenty</li>
                  <li>✓ Zkontrolovat bankovní údaje 2×</li>
                  <li>✓ Počkat na zpoždění 3+ hodin</li>
                  <li>✓ Vytrvat a případně eskalovat</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: ClaimWinger */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nechte reklamaci na profesionálech
            </h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                ✅ Proč využít služby ClaimWinger?
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Bez rizika:</strong> Platíte pouze v případě úspěchu (25% z kompenzace)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Vše za vás:</strong> Kompletní zastoupení od reklamace po soud</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>98% úspěšnost:</strong> Zkušený právní tým s tisíci vyřešenými případy</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span><strong>Rychlejší vyřízení:</strong> Průměrně 2-4 měsíce vs. 6-12 měsíců vlastní reklamace</span>
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
                  Jak dlouho trvá vyřízení reklamace?
                </summary>
                <p className="mt-4 text-gray-700">
                  Aerolínka má podle českého práva <strong>30 dní</strong> na vyřízení reklamace. 
                  V praxi to může trvat 2-6 měsíců, zvláště pokud aerolínka nejprve odmítne a vy musíte eskalovat.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když nemám palubní vstupenku?
                </summary>
                <p className="mt-4 text-gray-700">
                  Palubní vstupenka je nejdůležitější dokument. Pokud ji nemáte, zkuste kontaktovat aerolínku 
                  s booking reference a požádat o kopii. Alternativně můžete použít e-ticket a potvrzení o check-in.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Mohu reklamovat i po roce?
                </summary>
                <p className="mt-4 text-gray-700">
                  Ano! V České republice je <strong>promlčecí lhůta 3 roky</strong> od data letu. 
                  Můžete tedy podat reklamaci i za starší lety.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Kam poslat reklamaci, když jsem letenku koupil přes booking.com?
                </summary>
                <p className="mt-4 text-gray-700">
                  Reklamaci <strong>VŽDY</strong> posílejte provozní aerolínce (ta, co let skutečně provozovala), 
                  ne booking.com nebo jiné online agentuře. Najděte kontakt na webu aerolínky.
                </p>
              </details>

              <details className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <summary className="font-semibold text-lg cursor-pointer">
                  Co když aerolínka tvrdí "mimořádné okolnosti"?
                </summary>
                <p className="mt-4 text-gray-700">
                  Aerolínky často zneužívají tento argument. Požádejte o <strong>konkrétní důkaz</strong> 
                  (technická zpráva, potvrzení od ATC). Pokud ho neposkytnou, mají platit. 
                  ClaimWinger vám s tímto pomůže.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-10 rounded-2xl shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Potřebujete pomoc s reklamací?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              ClaimWinger vás <strong>zdarma</strong> provede celým procesem a vymůže až <strong>600 € kompenzace</strong>
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
