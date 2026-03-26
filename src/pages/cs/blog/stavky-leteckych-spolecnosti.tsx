import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, XCircle, Euro, Clock, AlertCircle } from "lucide-react";

export default function StavkyLeteckychSpolecnosti() {
  return (
    <LayoutCs>
      <SEO 
        title="Stávka letecké společnosti - máte nárok na kompenzaci?"
        description="Váš let byl zrušen nebo zpožděn kvůli stávce? Zjistěte, kdy vám přísluší kompenzace podle EU 261/2004."
        url="https://problemlot.com/cs/blog/stavky-leteckych-spolecnosti"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          <span className="mx-2">/</span>
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span>Stávky leteckých společností</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Clock className="w-4 h-4" />
            <span>7 min čtení</span>
            <span className="mx-2">•</span>
            <span>24. 2. 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Stávka letecké společnosti - nárok na kompenzaci
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Váš let byl zrušen nebo zpožděn kvůli stávce? Záleží na typu stávky - někdy máte nárok na kompenzaci až 600 €.
          </p>
        </header>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Stávka zrušila váš let?</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nechte si zkontrolovat nárok na kompenzaci zdarma. ClaimWinger vyřídí reklamaci za vás – platíte pouze při úspěchu (provize 30%).
              </p>
              <a 
                href="https://claimwinger.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Zkontrolovat nárok zdarma
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Stávka vs. mimořádné okolnosti</h2>
          <p>
            Podle <strong>nařízení EU 261/2004</strong> záleží na tom, <strong>kdo stávkuje</strong>:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-3 text-red-900 dark:text-red-100">VNĚJŠÍ STÁVKA</h4>
                  <p className="text-sm mb-2"><strong>= Mimořádná okolnost</strong></p>
                  <p className="text-sm mb-3">❌ ŽÁDNÁ kompenzace</p>
                  <ul className="text-sm space-y-1 mb-0">
                    <li>✈️ Stávka letových dispečerů</li>
                    <li>✈️ Stávka bezpečnostní kontroly</li>
                    <li>✈️ Stávka celního personálu</li>
                    <li>✈️ Generální stávka v zemi</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950 border-l-4 border-green-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-3 text-green-900 dark:text-green-100">VNITŘNÍ STÁVKA</h4>
                  <p className="text-sm mb-2"><strong>= Odpovědnost aerolinie</strong></p>
                  <p className="text-sm mb-3">✅ NÁROK na kompenzaci</p>
                  <ul className="text-sm space-y-1 mb-0">
                    <li>✈️ Stávka pilotů aerolinie</li>
                    <li>✈️ Stávka palubního personálu</li>
                    <li>✈️ Stávka pozemního personálu</li>
                    <li>✈️ Stávka mechaniků aerolinie</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h2>Jaká vám přísluší kompenzace?</h2>
          <p>
            Pokud šlo o <strong>vnitřní stávku</strong> (stávka zaměstnanců aerolinie), máte nárok na:
          </p>

          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Euro className="w-6 h-6 text-blue-600" />
              Výše kompenzace
            </h3>
            <table className="w-full">
              <thead>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <th className="text-left py-3">Vzdálenost letu</th>
                  <th className="text-right py-3">Kompenzace</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <td className="py-3">Do 1 500 km</td>
                  <td className="text-right py-3 font-bold text-lg">250 €</td>
                </tr>
                <tr className="border-b border-blue-200 dark:border-blue-800">
                  <td className="py-3">1 500 – 3 500 km</td>
                  <td className="text-right py-3 font-bold text-lg">400 €</td>
                </tr>
                <tr>
                  <td className="py-3">Nad 3 500 km</td>
                  <td className="text-right py-3 font-bold text-lg">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Příklady ze soudní praxe</h2>

          <div className="space-y-6 my-8">
            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-green-900 dark:text-green-100">✅ PŘÍPAD: Lufthansa - stávka pilotů (2014-2016)</h4>
              <p className="text-sm mb-2">
                Evropský soudní dvůr rozhodl, že <strong>stávka pilotů je vnitřní záležitostí</strong> aerolinie a pasažéři mají nárok na kompenzaci.
              </p>
              <p className="text-sm mb-0 font-semibold">
                Výsledek: Pasažéři dostali plnou kompenzaci 250-600 € podle vzdálenosti letu.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950 p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-green-900 dark:text-green-100">✅ PŘÍPAD: Ryanair - stávka pilotů a kabinového personálu (2018)</h4>
              <p className="text-sm mb-2">
                Ryanair argumentoval, že stávka je mimořádná okolnost. Soudy rozhodly jinak.
              </p>
              <p className="text-sm mb-0 font-semibold">
                Výsledek: Pasažéři obdrželi kompenzace za zpožděné a zrušené lety.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-6 rounded-lg">
              <h4 className="font-bold mb-3 text-red-900 dark:text-red-100">❌ PŘÍPAD: Stávka francouzských dispečerů (2023)</h4>
              <p className="text-sm mb-2">
                Generální stávka letových dispečerů ve Francii zrušila tisíce letů napříč Evropou.
              </p>
              <p className="text-sm mb-0 font-semibold">
                Výsledek: Žádné kompenzace (vnější mimořádná okolnost mimo kontrolu aerolinií).
              </p>
            </div>
          </div>

          <h2>Jak poznat, jaký typ stávky to byl?</h2>

          <div className="bg-amber-50 dark:bg-amber-950 p-6 rounded-lg my-8">
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              Kontrolní seznam:
            </h4>
            <ol className="text-sm space-y-3 mb-0">
              <li><strong>1. Zkontrolujte oznámení aerolinie</strong> - Co uvádí jako důvod zrušení/zpoždění?</li>
              <li><strong>2. Vyhledejte zprávy</strong> - Byly zprávy o stávce v médiích? Kdo stávkoval?</li>
              <li><strong>3. Ověřte, zda létaly jiné aerolinie</strong> - Pokud ano, vnější stávka je méně pravděpodobná</li>
              <li><strong>4. Kontaktujte aerolini</strong> - Požádejte o písemné vysvětlení důvodu</li>
            </ol>
          </div>

          <h2>Na co máte ještě nárok?</h2>
          <p>
            Bez ohledu na typ stávky máte vždy nárok na <strong>péči ze strany aerolinie</strong>:
          </p>

          <ul>
            <li><strong>Jídlo a nápoje</strong> přiměřené době čekání</li>
            <li><strong>Ubytování v hotelu</strong> (pokud je nutné přenocování)</li>
            <li><strong>Doprava</strong> mezi letištěm a hotelem</li>
            <li><strong>2 telefonní hovory</strong>, e-maily nebo faxy</li>
            <li><strong>Výběr mezi:</strong>
              <ul>
                <li>Vrácením plné ceny letenky</li>
                <li>Přesměrováním na jiný let</li>
              </ul>
            </li>
          </ul>

          <h2>Jak postupovat při stávce?</h2>

          <ol>
            <li><strong>Požádejte o písemné potvrzení</strong> – Vyžádejte si dokument potvrzující důvod zrušení/zpoždění</li>
            <li><strong>Zjistěte typ stávky</strong> – Vnitřní (zaměstnanci aerolinie) nebo vnější (letištní personál, dispečeři)</li>
            <li><strong>Dokumentujte vše</strong> – Fotografie tabule s informacemi, boarding pass, účtenky</li>
            <li><strong>Uschovejte účtenky</strong> – Za jídlo, ubytování, dopravu (pokud aerolinka neposkytla péči)</li>
            <li><strong>Podejte reklamaci</strong> – Aerolinka má povinnost odpovědět do 6 týdnů</li>
            <li><strong>Eskalujte v případě odmítnutí</strong> – Obraťte se na specialisty jako ClaimWinger</li>
          </ol>

          <h2>Časté výmluvy aerolinií</h2>

          <div className="space-y-4 my-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2">❌ "To byla mimořádná okolnost"</h4>
              <p className="text-sm mb-0">
                <strong>Odpověď:</strong> Stávka VAŠICH zaměstnanců není mimořádná okolnost. Máte povinnost ji předvídat a řešit.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2">❌ "Nemohli jsme to ovlivnit"</h4>
              <p className="text-sm mb-0">
                <strong>Odpověď:</strong> Pracovní spory s vlastními zaměstnanci jsou vaší odpovědností jako zaměstnavatele.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold mb-2">❌ "Nabízíme voucher místo peněz"</h4>
              <p className="text-sm mb-0">
                <strong>Odpověď:</strong> Podle EU 261 máte nárok na finanční kompenzaci v penězích, ne jen voucher.
              </p>
            </div>
          </div>

          <h2>Časté otázky (FAQ)</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Co když aerolinka tvrdí, že to byla stávka letových dispečerů?</h4>
              <p className="mb-0 text-sm">
                Požádejte o písemné potvrzení a ověřte si to v médiích. Pokud máte pochybnosti, obraťte se na ClaimWinger pro analýzu vašeho případu.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Může aerolinka říct, že stávka byla "divoká" a nemohla ji předvídat?</h4>
              <p className="mb-0 text-sm">
                Ne. Stávka vlastních zaměstnanců je vždy interní záležitostí a aerolinka za ni nese odpovědnost.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Co když můj let byl zpožděn kvůli stávce, ale byl méně než 3 hodiny?</h4>
              <p className="mb-0 text-sm">
                Pokud zpoždění bylo méně než 3 hodiny, nemáte nárok na finanční kompenzaci, ale stále máte nárok na péči (jídlo, nápoje).
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Jak dlouho mám na podání reklamace?</h4>
              <p className="mb-0 text-sm">
                Doporučujeme podat reklamaci do <strong>14 dnů</strong>. Promlčecí lhůta je však 3 roky (dle českého práva).
              </p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-xl my-12">
            <h3 className="text-2xl font-bold mb-4">Byl váš let ovlivněn stávkou?</h3>
            <p className="mb-6 text-blue-100">
              Nechte si svůj případ zkontrolovat zdarma specialisty na letecké nároky. ClaimWinger vyřídí reklamaci za vás – platíte pouze při úspěchu (provize 30%).
            </p>
            <a 
              href="https://claimwinger.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Zkontrolovat nárok zdarma
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Související články</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link 
                href="/cs/blog/kdy-mate-narok-kompenzaci"
                className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold mb-2 text-lg">Kdy máte nárok na kompenzaci?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                  Zjistěte 4 hlavní podmínky nároku na odškodnění za zpožděný let
                </p>
              </Link>

              <Link 
                href="/cs/blog/narizeni-es-261-2004"
                className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
              >
                <h4 className="font-bold mb-2 text-lg">Co je nařízení ES 261/2004?</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-0">
                  Kompletní průvodce evropským nařízením o právech cestujících
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Stávka letecké společnosti - nárok na kompenzaci",
              "description": "Váš let byl zrušen nebo zpožděn kvůli stávce? Záleží na typu stávky - někdy máte nárok na kompenzaci až 600 €.",
              "author": {
                "@type": "Organization",
                "name": "LotProblem.pl"
              },
              "datePublished": "2026-02-24",
              "image": "https://problemlot.com/og-image.png"
            })
          }}
        />
      </article>
    </LayoutCs>
  );
}
