import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { Plane, Clock, Euro, FileText, CheckCircle2, AlertCircle, Calendar, Users } from "lucide-react";

export default function SmartwingsPravaCestujicich() {
  return (
    <LayoutCs>
      <SEO
        title="Smartwings kompenzace za zpoždění a zrušení letu – Průvodce 2026"
        description="Jak reklamovat zpožděný nebo zrušený let u Smartwings? Zjistěte své práva, postupy a získejte až 600 € kompenzace."
        url="https://lotproblem.pl/cs/blog/smartwings-prava-cestujicich"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          {" / "}
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          {" / "}
          <span className="text-gray-900 dark:text-gray-100">Smartwings kompenzace</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-4">
            <Plane className="w-5 h-5" />
            <span className="text-sm font-medium">Průvodce aerolinek</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Smartwings kompenzace za zpoždění a zrušení letu – Průvodce 2026
          </h1>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>23. února 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>7 min čtení</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              <span>900 slov</span>
            </div>
          </div>
        </header>

        {/* Main CTA */}
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 rounded-2xl p-8 mb-12 border border-blue-100 dark:border-blue-900">
          <div className="flex items-start gap-4">
            <div className="bg-blue-600 rounded-full p-3 flex-shrink-0">
              <Euro className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Máte problém se Smartwings? Získejte až 600 € kompenzace
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Zkontrolujeme váš nárok zdarma. Platíte pouze při úspěchu (30% provize).
              </p>
              <a
                href="https://claimwinger.com?utm_source=blog&utm_medium=cta&utm_campaign=smartwings_prava_cestujicich"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Kontrola nároku zdarma
                <CheckCircle2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Smartwings je největší česká letecká společnost a pravidelně se potýká s problémy zpožděných a zrušených letů. Pokud jste byli postiženi, máte právo na <strong>finanční kompenzaci až 600 €</strong> podle evropského nařízení 261/2004.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">78%</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Úspěšnost reklamací u Smartwings přes ClaimWinger
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-950 rounded-xl p-6">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">14 dní</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Průměrná doba vyřízení kompenzace
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-950 rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">600 €</div>
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Maximální kompenzace za let 3500+ km
            </div>
          </div>
        </div>

        {/* Section 1: Kdy máte nárok */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Kdy máte nárok na kompenzaci od Smartwings?
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              4 základní podmínky nároku
            </h3>
            
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">1.</span>
                <span><strong>Let z EU</strong> nebo do EU s unijní aerolinek (Smartwings je česká společnost)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">2.</span>
                <span><strong>Zpoždění 3+ hodin</strong> na cílovém letišti nebo zrušení letu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">3.</span>
                <span><strong>Check-in včas</strong> – dorazili jste na check-in v požadovaném čase</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 dark:text-blue-400 font-bold">4.</span>
                <span><strong>Žádné mimořádné okolnosti</strong> (přírodní katastrofy, stávky leteckých dispečerů)</span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 dark:bg-blue-950 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
              💡 Důležité upozornění pro pasažéry Smartwings
            </h3>
            <p className="text-blue-800 dark:text-blue-200">
              Smartwings často tvrdí, že zpoždění bylo způsobeno "technickou závadou" (což je mimořádná okolnost). Ve většině případů to <strong>není pravda</strong> – běžná údržba a opravy NEJSOU mimořádné okolnosti. ClaimWinger má zkušenosti s prolamováním těchto obran.
            </p>
          </div>
        </section>

        {/* Section 2: Částky kompenzací */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Kolik peněz můžete získat?
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="text-left p-4 border border-gray-200 dark:border-gray-700">Vzdálenost letu</th>
                  <th className="text-left p-4 border border-gray-200 dark:border-gray-700">Kompenzace</th>
                  <th className="text-left p-4 border border-gray-200 dark:border-gray-700">Typické cíle Smartwings</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Do 1 500 km</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-bold text-green-600">250 €</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Vídeň, Řím, Barcelona</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="p-4 border border-gray-200 dark:border-gray-700">1 500 – 3 500 km</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-bold text-green-600">400 €</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Kanárské ostrovy, Tunisko, Egypt</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Nad 3 500 km</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-bold text-green-600">600 €</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Dubaj, Maledivy, Kuba</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
            💡 <strong>Tip:</strong> Kompenzace se vztahuje na každého pasažéra zvlášť. Pokud cestujete s rodinou (4 osoby) na Kanárské ostrovy a máte zpoždění 3+ hodin, máte nárok na 4 × 400 € = <strong>1 600 € celkem</strong>!
          </p>
        </section>

        {/* Section 3: Jak reklamovat */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Jak reklamovat zpoždění nebo zrušení letu u Smartwings?
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Způsob 1: Reklamace přímo u Smartwings (složité)
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <strong>Připravte dokumenty:</strong> palubní vstupenky, potvrzení o rezervaci, potvrzení o zpoždění/zrušení
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <strong>Napište reklamaci:</strong> Email na <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">customerrelations@smartwings.com</code> nebo formulář na webu
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <strong>Čekejte 2-6 měsíců:</strong> Smartwings často reklamace ignoruje nebo zamítá bez řádného odůvodnění
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <strong>Obracejte se na ÚCL:</strong> Pokud Smartwings neodpoví nebo zamítne, musíte podat stížnost na Úřad pro civilní letectví
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                <p className="text-red-800 dark:text-red-200 text-sm">
                  ⚠️ <strong>Pozor:</strong> Smartwings má špatnou pověst v rychlosti vyřizování reklamací. Průměrná doba vyřízení je 3-6 měsíců a mnoho reklamací je zamítnuto bez řádného zdůvodnění.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white dark:from-green-950 dark:to-gray-900 rounded-xl p-6 border border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Způsob 2: Přes ClaimWinger (rychlé a bez rizika) ⭐
              </h3>
              
              <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Bez předem placení:</strong> Platíte jen při úspěchu (30% provize)
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Rychlé vyřízení:</strong> Průměrná doba 14 dní (vs. 3-6 měsíců u přímé reklamace)
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>Právní zastoupení:</strong> Pokud Smartwings odmítne zaplatit, jdeme k soudu (za vás)
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <strong>78% úspěšnost:</strong> Máme zkušenosti s prolamováním obran Smartwings
                  </div>
                </div>
              </div>

              <a
                href="https://claimwinger.com?utm_source=blog&utm_medium=article&utm_campaign=smartwings_prava_cestujicich"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Zkontrolovat nárok zdarma
                <CheckCircle2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Běžné problémy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Nejčastější problémy se Smartwings
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Technické závady
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Smartwings často uvádí "technickou závadu" jako důvod zpoždění. To NENÍ mimořádná okolnost, pokud šlo o běžnou údržbu nebo předvídatelnou opravu.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Nedostatek posádky
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Problém s dostupností pilotů nebo palubního personálu NENÍ mimořádná okolnost. Aerolinka má povinnost zajistit dostatek zaměstnanců.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Kaskádové zpoždění
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Pokud bylo předchozí zpoždění zaviněno aerolinkou, i následné zpoždění na dalších letech je zodpovědností Smartwings.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pozdní informace
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Smartwings často neinformuje pasažéry včas o zpoždění nebo zrušení, což zhoršuje situaci. To nemění nic na vašem nároku na kompenzaci.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Často kladené otázky
          </h2>

          <div className="space-y-4">
            <details className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Můžu reklamovat i starší lety?
              </summary>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Ano! V České republice máte na podání reklamace <strong>3 roky</strong> od data letu. I pokud letěl váš let před 2 lety, stále můžete požadovat kompenzaci.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Co když Smartwings tvrdí, že to byla mimořádná okolnost?
              </summary>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Aerolinie často zneužívají pojem "mimořádné okolnosti". ClaimWinger má právníky, kteří dokážou prokázat, že většina technických závad a organizačních problémů NEJSOU mimořádné okolnosti podle judikatury.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Platím předem za služby ClaimWinger?
              </summary>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Ne! Platíte pouze v případě úspěchu. Pokud nedostanete kompenzaci, neplatíte nic. Provize je 30% z vybrané částky.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Co když jsem dostal voucher místo peněz?
              </summary>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Máte právo na <strong>peněžní kompenzaci</strong>, ne voucher. Pokud vás Smartwings přesvědčil k přijetí voucheru, stále můžete požadovat finanční náhradu.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Může Smartwings odmítnout zaplatit?
              </summary>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Může, ale pokud máte oprávněný nárok, ClaimWinger půjde místo vás k soudu. Všechny náklady na právní zastoupení jsou zahrnuty v 30% provizi – vy nenesete žádné další náklady.
              </p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Neztrácejte čas – získejte svou kompenzaci
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            ClaimWinger vyřídí vše za vás. Kontrola nároku trvá 2 minuty a je zdarma.
          </p>
          <a
            href="https://claimwinger.com?utm_source=blog&utm_medium=cta&utm_campaign=smartwings_prava_cestujicich"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors text-lg"
          >
            Zkontrolovat nárok nyní
            <CheckCircle2 className="w-6 h-6" />
          </a>
          <p className="text-sm text-blue-100 mt-4">
            ✓ Bez rizika • ✓ Žádné skryté poplatky • ✓ 30% provize pouze při úspěchu
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Související články
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/cs/blog/ryanair-kompenzace-reklamace"
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Ryanair – kompenzace a reklamace
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Jak získat kompenzaci za zpožděný nebo zrušený let u Ryanairu
              </p>
            </Link>
            
            <Link
              href="/cs/blog/wizz-air-zpozdeni-zruseni"
              className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Wizz Air – zpoždění a zrušení
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Průvodce kompenzacemi u Wizz Air
              </p>
            </Link>
          </div>
        </div>
      </article>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Smartwings kompenzace za zpoždění a zrušení letu – Průvodce 2026",
            "description": "Jak reklamovat zpožděný nebo zrušený let u Smartwings? Zjistěte své práva, postupy a získejte až 600 € kompenzace.",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "datePublished": "2026-02-23",
            "dateModified": "2026-02-23",
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://lotproblem.pl/cs/blog/smartwings-prava-cestujicich"
            },
            "image": "https://lotproblem.pl/og-image.png"
          })
        }}
      />
    </LayoutCs>
  );
}
