import { SEO } from "@/components/SEO";
import { LayoutCs } from "@/components/LayoutCs";
import Link from "next/link";
import { ArrowRight, AlertTriangle, CheckCircle, XCircle, Euro, Clock } from "lucide-react";

export default function OverbookingOdmitnutyNastup() {
  return (
    <LayoutCs>
      <SEO 
        title="Overbooking - odmítnutí nástupu na palubu | Kompenzace až 600 €"
        description="Aerolinka vám odmítla nástup kvůli přeplněnému letu? Zjistěte, jaká vám přísluší kompenzace až 600 € podle EU 261/2004."
        url="https://lotproblem.pl/cs/blog/overbooking-odmitnuty-nastup"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          <Link href="/cs" className="hover:text-blue-600 dark:hover:text-blue-400">Domů</Link>
          <span className="mx-2">/</span>
          <Link href="/cs/blog" className="hover:text-blue-600 dark:hover:text-blue-400">Blog</Link>
          <span className="mx-2">/</span>
          <span>Overbooking - odmítnutí nástupu</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Clock className="w-4 h-4" />
            <span>8 min čtení</span>
            <span className="mx-2">•</span>
            <span>24. 2. 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Overbooking - odmítnutí nástupu na palubu a kompenzace
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Aerolinka vám odmítla nástup kvůli přeplněnému letu? Máte nárok na kompenzaci až 600 € a další výhody podle EU 261/2004.
          </p>
        </header>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-l-4 border-blue-600 p-6 rounded-lg mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Byla vám odepřena přeprava?</h3>
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
          <h2>Co je overbooking?</h2>
          <p>
            <strong>Overbooking</strong> (přeprodání letenek) je běžná praxe leteckých společností, kdy prodají více letenek, než je dostupných sedadel v letadle. Aerolinie počítají s tím, že určitá část pasažérů se nedostaví (no-show).
          </p>

          <p>
            Pokud se však dostaví všichni pasažéři, některým bude <strong>odmítnuto nastoupení na palubu</strong> (denied boarding), i když mají platnou letenku a potvrzenou rezervaci.
          </p>

          <div className="bg-red-50 dark:bg-red-950 border-l-4 border-red-500 p-6 rounded-lg my-8">
            <div className="flex items-start gap-4">
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">Typické situace:</h4>
                <ul className="text-sm mb-0 space-y-1">
                  <li>✈️ Máte potvrzenou rezervaci a včas jste se dostavili k odbavení</li>
                  <li>✈️ Aerolinka vám sdělí, že let je přeplněný a nemůžete nastoupit</li>
                  <li>✈️ Nabídnou vám jiný let nebo vrácení peněz</li>
                  <li>✈️ Dostáváte náhradní letenku na pozdější spoj</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Jaká vám přísluší kompenzace?</h2>
          <p>
            Podle <strong>nařízení EU 261/2004</strong> máte při odmítnutí nástupu nárok na:
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

          <h2>Kdy máte nárok na kompenzaci?</h2>
          <p>
            Kompenzace vám přísluší, pokud:
          </p>

          <div className="space-y-4 my-8">
            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">1. Potvrzená rezervace</h4>
                <p className="text-sm mb-0">Máte platnou letenku a potvrzenou rezervaci v systému aerolinie.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">2. Včasná registrace</h4>
                <p className="text-sm mb-0">Dostavili jste se k odbavení včas (obvykle 45-60 minut před odletem).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">3. Platné cestovní doklady</h4>
                <p className="text-sm mb-0">Máte platný pas/občanský průkaz a případné vízum.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-2">4. Let z EU nebo s EU aerolinkou</h4>
                <p className="text-sm mb-0">Platí pro lety z EU nebo lety s evropskou aerolinkou do EU.</p>
              </div>
            </div>
          </div>

          <h2>Na co máte ještě nárok?</h2>
          <p>
            Kromě finanční kompenzace máte nárok na:
          </p>

          <ul>
            <li><strong>Výběr mezi:</strong>
              <ul>
                <li>Vrácení plné ceny letenky do 7 dnů</li>
                <li>Přesměrování na jiný let (nejbližší možný spoj)</li>
                <li>Přesměrování v pozdější termín (dle vaší volby)</li>
              </ul>
            </li>
            <li><strong>Péče ze strany aerolinie:</strong>
              <ul>
                <li>Jídlo a nápoje přiměřené době čekání</li>
                <li>Ubytování v hotelu (pokud je nutné přenocování)</li>
                <li>Doprava mezi letištěm a hotelem</li>
                <li>2 telefonní hovory, e-maily nebo faxy</li>
              </ul>
            </li>
          </ul>

          <h2>Dobrovolné vzdání se místa</h2>
          <p>
            Pokud aerolinka hledá <strong>dobrovolníky</strong>, kteří by se vzdali svého místa výměnou za výhody (voucher, jiný let, kompenzaci), máte právo:
          </p>

          <div className="bg-amber-50 dark:bg-amber-950 p-6 rounded-lg my-8">
            <h4 className="font-bold mb-4">Vyjednávat podmínky:</h4>
            <ul className="text-sm mb-0 space-y-2">
              <li>✅ Kdy vás aerolinka přepraví náhradním letem</li>
              <li>✅ Jakou dostanete kompenzaci (peníze nebo voucher)</li>
              <li>✅ Jaké další výhody vám poskytnou (jídlo, ubytování)</li>
              <li>✅ Zda můžete odletět jinou trasou nebo z jiného letiště</li>
            </ul>
          </div>

          <p>
            <strong>POZOR:</strong> Pokud se dobrovolně vzdáte místa, <strong>ztrácíte nárok</strong> na standardní kompenzaci podle EU 261. Dostanete pouze to, na čem se s aerolinkou dohodnete.
          </p>

          <h2>Jak postupovat při odmítnutí nástupu?</h2>

          <ol>
            <li><strong>Požádejte o písemné potvrzení</strong> – Vyžádejte si dokument od aerolinie potvrzující, že vám byl odepřen nástup kvůli overbookingu</li>
            <li><strong>Zaznamenejte si detaily</strong> – Čas, místo, jména pracovníků aerolinie, co vám bylo nabídnuto</li>
            <li><strong>Pořiďte fotografie</strong> – Informační tabule s časy odletu, boarding pass, dokumenty od aerolinie</li>
            <li><strong>Uschovejte účtenky</strong> – Za jídlo, ubytování, dopravu (pokud aerolinka neposkytla péči)</li>
            <li><strong>Podejte reklamaci</strong> – Do 14 dnů napište aerolinii s požadavkem na kompenzaci</li>
            <li><strong>Eskalujte v případě odmítnutí</strong> – Obraťte se na ÚCL nebo specialisty jako ClaimWinger</li>
          </ol>

          <h2>Kdy nemáte nárok na kompenzaci?</h2>

          <div className="space-y-4 my-8">
            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ Bezpečnostní důvody</h4>
              <p className="text-sm mb-0">Pokud vám byl odepřen nástup z bezpečnostních, zdravotních nebo provozních důvodů (ne kvůli přeplněnosti).</p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ Neplatné dokumenty</h4>
              <p className="text-sm mb-0">Nemáte platný pas, vízum nebo jiné nutné cestovní doklady.</p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ Pozdní příchod</h4>
              <p className="text-sm mb-0">Nedostavili jste se včas k odbavení nebo k brance (gate).</p>
            </div>

            <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-red-900 dark:text-red-100">❌ Dobrovolné vzdání se místa</h4>
              <p className="text-sm mb-0">Pokud jste se sami přihlásili jako dobrovolník a přijali nabídku aerolinie.</p>
            </div>
          </div>

          <h2>Časté otázky (FAQ)</h2>

          <div className="space-y-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Mohu odmítnout náhradní let a požadovat vrácení peněz?</h4>
              <p className="mb-0 text-sm">
                Ano. Máte právo si vybrat mezi vrácením plné ceny letenky nebo přesměrováním na jiný let. Navíc vám stále přísluší kompenzace.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Co když mi aerolinka nabídne jen voucher místo peněz?</h4>
              <p className="mb-0 text-sm">
                Podle EU 261 máte nárok na <strong>finanční kompenzaci v penězích</strong>. Aerolinka vám může nabídnout voucher, ale nemůže vás nutit ho přijmout. Můžete trvat na peněžní kompenzaci.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Platí EU 261 i pro lety mimo Evropu?</h4>
              <p className="mb-0 text-sm">
                Ano, pokud let odletěl z EU nebo jste letěli s evropskou aerolinkou do EU.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Mohu dostat kompenzaci i když jsem létěl business class?</h4>
              <p className="mb-0 text-sm">
                Ano, výše kompenzace je stejná bez ohledu na třídu, ve které jste letěli (economy, business, first class).
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
            <h3 className="text-2xl font-bold mb-4">Bylo vám odepřeno nastoupení na palubu?</h3>
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
              "headline": "Overbooking - odmítnutí nástupu na palubu a kompenzace",
              "description": "Aerolinka vám odmítla nástup kvůli přeplněnému letu? Máte nárok na kompenzaci až 600 € a další výhody podle EU 261/2004.",
              "author": {
                "@type": "Organization",
                "name": "LotProblem.pl"
              },
              "datePublished": "2026-02-24",
              "image": "https://lotproblem.pl/og-image.png"
            })
          }}
        />
      </article>
    </LayoutCs>
  );
}
