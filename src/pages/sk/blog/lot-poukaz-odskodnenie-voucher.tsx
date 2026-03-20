import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  XCircle, 
  CheckCircle2, 
  Euro, 
  AlertTriangle,
  FileText,
  ArrowRight,
  HelpCircle,
  Banknote
} from "lucide-react";
import Link from "next/link";

export default function LOTPoukazOdskodnenieVoucher() {
  return (
    <LayoutSk>
      <SEO
        title="LOT Ponúka Poukaz (Voucher) Namiesto Odškodnenia – Musíte Ho Prijať?"
        description="LOT vám ponúkol voucher namiesto peňazí? Pozor! Zistite, prečo je hotovosť lepšia a ako odmietnuť voucher. ✓ Vaše práva ✓ Ako získať peniaze na účet"
        url="https://lotproblem.pl/sk/blog/lot-poukaz-odskodnenie-voucher"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LOT Ponúka Poukaz (Voucher) Namiesto Odškodnenia – Musíte Ho Prijať?",
            "description": "Prečo by ste nemali prijať voucher od LOT Polish Airlines a ako trvať na hotovostnom odškodnení.",
            "image": "https://lotproblem.pl/og-image.png",
            "author": {
              "@type": "Organization",
              "name": "LotProblem.pl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "LotProblem.pl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://lotproblem.pl/og-image.png"
              }
            },
            "datePublished": "2026-03-05",
            "dateModified": "2026-03-05"
          })
        }}
      />

      <article className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/sk" className="hover:text-blue-600">Domov</Link>
            <span>/</span>
            <Link href="/sk/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span>LOT voucher vs peniaze</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              LOT Ponúka Poukaz (Voucher) Namiesto Odškodnenia – Musíte Ho Prijať?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Dostali ste email od LOT s ponukou na voucher? Zastavte sa! Zistite, prečo by ste ho mali odmietnuť a radšej požadovať hotovosť.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Aktualizované: 5. marca 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Čítanie: 10 minút</span>
              </div>
            </div>
          </header>

          {/* AI Overview */}
          <div className="mb-12 bg-gradient-to-br from-yellow-500 to-orange-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">⚡ Rýchla odpoveď: NIE, nemusíte prijať voucher!</h2>
                <p className="text-yellow-100 text-lg">
                  Podľa nariadenia EU261 máte právo na odškodnenie v <strong>peniazoch</strong> (bankový prevod). LOT ponúka vouchery, pretože je to pre nich výhodnejšie.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  Nevýhody voucheru LOT
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-red-300">•</span>
                    <span>Platnosť len 12-24 mesiacov (môže prepadnúť)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300">•</span>
                    <span>Viazaný len na lety LOT (nie iné aerolinky)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300">•</span>
                    <span>Ak LOT skrachuje, voucher je bezcenný</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-300">•</span>
                    <span>Často neprenosný na inú osobu</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Výhody hotovosti
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Peniaze na účet (EUR) – miniete kdekoľvek</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Nikdy neexspirujú</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Bezpečné aj pri krachu aerolinky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Zákonný nárok podľa EU261</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA 1 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold mb-4 text-center">Chcete peniaze namiesto voucheru?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Vymôžeme pre vás hotovostné odškodnenie na účet – aj keď vám LOT už ponúkol voucher
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_voucher_cta1" target="_blank" rel="noopener noreferrer">
                    Získať peniaze teraz <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                ✓ Bez rizika ✓ 98% úspešnosť ✓ Peniaze na váš účet
              </p>
            </Card>
          </div>

          {/* Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Banknote className="w-8 h-8 text-green-600" />
              Prečo LOT tak tlačí na vouchery?
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Letecké spoločnosti milujú vouchery z jednoduchého dôvodu: <strong>zostávajúce peniaze zostávajú v ich systéme</strong>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 bg-white dark:bg-gray-800">
                  <h3 className="font-bold text-lg mb-3">Pre LOT je voucher výhodný:</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>1. Neodteká im hotovosť (cash flow)</li>
                    <li>2. Garantuje, že si u nich kúpite ďalšiu letenku</li>
                    <li>3. Štatisticky 20-30% voucherov prepadne (ľudia ich zabudnú využiť)</li>
                    <li>4. Nemusia platiť transakčné poplatky za prevody</li>
                  </ul>
                </Card>
                <Card className="p-6 bg-white dark:bg-gray-800">
                  <h3 className="font-bold text-lg mb-3">Pre vás je voucher nevýhodný:</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li>1. Ste nútení letieť znova s LOT (aj keď iná aerolinka je lacnejšia)</li>
                    <li>2. Máte časový limit na využitie</li>
                    <li>3. Inflácia znižuje hodnotu voucheru</li>
                    <li>4. Riziko straty pri krachu</li>
                  </ul>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mb-4">Čo hovorí zákon (EU 261/2004)?</h3>
              <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 mb-6">
                <p className="italic text-gray-700 dark:text-gray-300">
                  "Odškodnenie sa vyplatí v hotovosti, elektronickým bankovým prevodom, bankovým príkazom alebo bankovým šekom, alebo, <strong>s písomným súhlasom cestujúceho</strong>, v cestovných poukazoch a/alebo iných službách."
                </p>
                <p className="mt-4 font-bold text-blue-800 dark:text-blue-300">
                  Preklad: Voucher vám môžu dať LEN vtedy, ak s tým písomne súhlasíte. Ak nesúhlasíte, MUSIA vám dať peniaze!
                </p>
              </Card>

              <h3 className="text-2xl font-bold mb-4">Čo ak som už voucher omylom prijal?</h3>
              <p className="mb-4">
                Ak ste klikli na "Accept" v emaili alebo podpísali formulár na letisku, situácia je zložitejšia, ale <strong>nie stratená</strong>.
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Ak vás LOT <strong>zavádzal</strong> (tvrdili, že máte nárok len na voucher), súhlas môže byť neplatný.</li>
                <li>Ak ste voucher ešte <strong>nepoužili</strong>, právnici ClaimWinger môžu často vyjednať jeho zrušenie a vyplatenie hotovosti.</li>
                <li>Ak ste voucher už čiastočne použili, nárok na hotovosť zvyčajne zaniká.</li>
              </ul>
            </div>
          </section>

          {/* Step by Step */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Ako odmietnuť voucher a získať peniaze?</h2>
            <div className="space-y-4">
              <Card className="p-6 flex gap-4 items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg">Neklikajte na "Accept Voucher"</h3>
                  <p className="text-gray-600 dark:text-gray-400">LOT často posiela emaily, ktoré vyzerajú, že voucher je jediná možnosť. Ignorujte tlačidlá na prijatie.</p>
                </div>
              </Card>
              <Card className="p-6 flex gap-4 items-start">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg">Odpovedzte, že požadujete bankový prevod</h3>
                  <p className="text-gray-600 dark:text-gray-400">Ak komunikujete s LOT, jasne napíšte: "I do not accept the voucher. I request cash compensation via bank transfer according to Regulation EC 261/2004."</p>
                </div>
              </Card>
              <Card className="p-6 flex gap-4 items-start border-2 border-green-500 bg-green-50 dark:bg-green-900/20">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg">Nechajte to na ClaimWinger (Najjednoduchšie)</h3>
                  <p className="text-gray-600 dark:text-gray-400">Vyplňte náš formulár. My oficiálne odmietneme voucher v vašom mene a vymôžeme hotovosť právnou cestou.</p>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA 2 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Vymeňte voucher za hotovosť na účte</h3>
              <p className="text-xl text-blue-100 mb-6">
                Overte si nárok za 2 minúty – pomohli sme tisícom cestujúcich získať peniaze
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_voucher_cta2" target="_blank" rel="noopener noreferrer">
                    Chcem peniaze <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">❓ Často kladené otázky</h2>
            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Čo ak je voucher vyšší ako odškodnenie?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Niekedy LOT ponúkne napr. 300 € voucher namiesto 250 € hotovosti. Je na vás, či to prijmete. Ak často lietate s LOT, môže sa to oplatiť. Ale pamätajte: hotovosť je istejšia.</p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Môžem vymeniť voucher za peniaze neskôr?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Zvyčajne nie. Prijatím voucheru sa vzdávate nároku na hotovosť. Výnimkou je, ak voucher prepadne a nebol využitý – v niektorých krajinách máte potom nárok na refund, ale je to komplikované.</p>
              </details>
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Ako dlho trvá vyplatenie peňazí cez ClaimWinger?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Priemerne 8-12 týždňov. Ak LOT spolupracuje, môže to byť rýchlejšie. Ak musíme ísť na súd, môže to trvať dlhšie.</p>
              </details>
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}
