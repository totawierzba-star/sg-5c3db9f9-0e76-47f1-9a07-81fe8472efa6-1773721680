import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  XCircle, 
  Clock, 
  Euro, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  ArrowRight,
  Shield,
  Calendar
} from "lucide-react";
import Link from "next/link";

export default function LOTZrusilLetOdskodnenie() {
  return (
    <LayoutSk>
      <SEO
        title="LOT Zrušil Let – Ako Získať Odškodnenie až 600 € Krok za Krokom?"
        description="LOT zrušil váš let? Získajte až 600 € odškodnenie! ✓ Kompletný postup ✓ Vzory žiadostí ✓ Bez rizika ✓ 98% úspešnosť. Kliknite a zistite svoje práva!"
        url="https://lotproblem.pl/sk/blog/lot-zrusil-let-odskodnenie"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "LOT Zrušil Let – Ako Získať Odškodnenie až 600 € Krok za Krokom?",
            "description": "Kompletný sprievodca získaním odškodnenia od LOT Polish Airlines pri zrušenom lete.",
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
            <span>LOT zrušil let odškodnenie</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              LOT Zrušil Let – Ako Získať Odškodnenie až 600 € Krok za Krokom?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Váš let s LOT Polish Airlines bol zrušený? Zistite, kedy máte nárok na odškodnenie a ako ho získať bez zbytočného stresu.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Aktualizované: 5. marca 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Čítanie: 14 minút</span>
              </div>
            </div>
          </header>

          {/* AI Overview */}
          <div className="mb-12 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <XCircle className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">🎯 Kľúčové fakty (okamžitý prehľad)</h2>
                <p className="text-red-100 text-lg">
                  LOT zrušil let = máte nárok na odškodnenie až 600 € + náhradný let ALEBO plný refund
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  Kedy máte nárok na odškodnenie
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>LOT <strong>zrušil let menej ako 14 dní</strong> pred odletom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Nedostali ste <strong>primeraný náhradný let</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Zrušenie <strong>nie je</strong> spôsobené mimoriadnymi okolnosťami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Platí pre <strong>všetky štátne príslušnosti</strong></span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Euro className="w-5 h-5" />
                  Výška odškodnenia
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center justify-between">
                    <span>Do 1 500 km:</span>
                    <strong className="text-xl">250 €</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>1 500 – 3 500 km:</span>
                    <strong className="text-xl">400 €</strong>
                  </li>
                  <li className="flex items-center justify-between">
                    <span>Nad 3 500 km:</span>
                    <strong className="text-xl">600 €</strong>
                  </li>
                  <li className="pt-2 border-t border-white/20 text-xs">
                    <span className="text-green-300">+ náhradný let ALEBO plný refund</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA 1 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold mb-4 text-center">LOT zrušil váš let?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Overenie nároku na odškodnenie trvá len 2 minúty – zadarmo a bez záväzkov
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://claimwinger.com/sk/zruseny-let?utm_source=blog&utm_medium=article&utm_campaign=lot_zruseny_cta1" target="_blank" rel="noopener noreferrer">
                    Overiť nárok na odškodnenie <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                ✓ Bez rizika – platíte len pri úspechu ✓ 98% úspešnosť ✓ 8-12 týždňov
              </p>
            </Card>
          </div>

          {/* Table of Contents */}
          <Card className="mb-12 p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Obsah článku
            </h2>
            <ul className="space-y-2">
              <li><a href="#kedy-narok" className="text-blue-600 hover:underline">1. Kedy mám nárok na odškodnenie pri zrušenom lete LOT?</a></li>
              <li><a href="#vyska-odskodnenia" className="text-blue-600 hover:underline">2. Aká je výška odškodnenia za zrušený let?</a></li>
              <li><a href="#ako-poziadat" className="text-blue-600 hover:underline">3. Ako požiadať o odškodnenie – krok za krokom</a></li>
              <li><a href="#nahrady" className="text-blue-600 hover:underline">4. Náhradný let alebo refund – čo si vybrať?</a></li>
              <li><a href="#mimoriadne-okolnosti" className="text-blue-600 hover:underline">5. Mimoriadne okolnosti – kedy LOT nemusí platiť?</a></li>
              <li><a href="#claimwinger" className="text-blue-600 hover:underline">6. Prečo použiť ClaimWinger namiesto samostatnej žiadosti?</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">7. Často kladené otázky</a></li>
            </ul>
          </Card>

          {/* Section 1: Kedy máte nárok */}
          <section id="kedy-narok" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              Kedy mám nárok na odškodnenie pri zrušenom lete LOT?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Zrušenie letu je jedna z <strong>najfrustrujúcejších situácií</strong> pri cestovaní. Našťastie, nariadenie <strong>EU 261/2004</strong> jasně definuje, kedy máte nárok na odškodnenie od LOT Polish Airlines.
              </p>

              <Card className="p-6 mb-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-4">✅ Základné podmienky nároku na odškodnenie:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">LOT informoval o zrušení menej ako 14 dní pred odletom</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Ak vás LOT informoval <strong>14+ dní vopred</strong>, odškodnenie spravidla nepatrí. Ale pozor – ak náhradný let prichádza/odlieta v úplne inom čase, môžete mať nárok aj tak!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">LOT vám neponúkol primerannú alternatívu</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        "Primeraná alternatíva" = let, ktorý prichádza na miesto určenia <strong>maximálne 2-4 hodiny</strong> po pôvodnom čase (závisí od vzdialenosti). Ak je náhradný let príliš neskoro, odškodnenie patrí!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Zrušenie nie je spôsobené "mimoriadnymi okolnosťami"</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Extrémne počasie, štrajk letiskového personálu (mimo LOT), bezpečnostné hrozby = mimoriadne okolnosti. <strong>Technická porucha, štrajk LOT zamestnancov = NIE SÚ mimoriadne okolnosti!</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Let prevádzkuje LOT Polish Airlines</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Kód letu začína <strong>LO</strong> (napr. LO521). Pri codeshare letoch (napr. UA číslo United Airlines, ale lietadlo LOT) tiež platí EU261, ak skutočný prevádzkovateľ je LOT.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <h3 className="text-2xl font-bold mt-8 mb-4">📅 Časová os notifikácie a výška odškodnenia</h3>

              <div className="space-y-3 mb-6">
                <Card className="p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-red-700 dark:text-red-400">Menej ako 7 dní pred odletom</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">LOT vás informoval týždeň alebo menej pred letom</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">Plné odškodnenie</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">250-600 € (podľa vzdialenosti)</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-orange-700 dark:text-orange-400">7-14 dní pred odletom</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">LOT vás informoval 1-2 týždne vopred</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">Závisí od alternatívy</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Ak náhradný let je v podobnom čase = žiadne odškodnenie</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-gradient-to-r from-yellow-50 to-green-50 dark:from-yellow-900/20 dark:to-green-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-yellow-700 dark:text-yellow-400">14+ dní pred odletom</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">LOT vás informoval viac ako 2 týždne vopred</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-600">Žiadne odškodnenie</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Len nárok na náhradný let alebo refund</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 rounded-lg p-6 my-6">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Dôležité: Váš pas/štátna príslušnosť NEZÁLEŽÍ!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Nariadenie EU261 platí pre <strong>všetkých cestujúcich</strong> bez ohľadu na štátnu príslušnosť. Občan Slovenska, Poľska, Ukrajiny, USA, Číny – vaše práva sú rovnaké! LOT nemôže zamietnuť odškodnenie s odôvodnením, že nie ste občanom EÚ.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Výška odškodnenia */}
          <section id="vyska-odskodnenia" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Euro className="w-8 h-8 text-purple-600" />
              Aká je výška odškodnenia za zrušený let?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Výška odškodnenia závisí <strong>výlučne od vzdialenosti letu</strong>, nie od ceny letenky! Aj keď ste leteli s ultra-lacnou promo-letenkou, odškodnenie je rovnaké.
              </p>

              <Card className="p-6 bg-white dark:bg-gray-800 overflow-x-auto mb-6">
                <h3 className="text-xl font-bold mb-4">💰 Tabuľka odškodnenia podľa vzdialenosti</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="text-left p-3">Vzdialenosť letu</th>
                      <th className="text-left p-3">Príklad trasy LOT</th>
                      <th className="text-left p-3">Odškodnenie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-3">
                        <strong>Do 1 500 km</strong>
                      </td>
                      <td className="p-3">
                        Bratislava ↔ Varšava (680 km)<br/>
                        Varšava ↔ Londýn (1 450 km)
                      </td>
                      <td className="p-3 font-bold text-green-600 text-xl">250 €</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-3">
                        <strong>1 500 – 3 500 km</strong>
                      </td>
                      <td className="p-3">
                        Varšava ↔ Reykjavík (2 100 km)<br/>
                        Varšava ↔ Tel Aviv (2 800 km)
                      </td>
                      <td className="p-3 font-bold text-green-600 text-xl">400 €</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-3">
                        <strong>Nad 3 500 km</strong>
                      </td>
                      <td className="p-3">
                        Varšava ↔ New York (6 800 km)<br/>
                        Varšava ↔ Tokio (8 600 km)<br/>
                        Varšava ↔ Peking (7 000 km)
                      </td>
                      <td className="p-3 font-bold text-green-600 text-xl">600 €</td>
                    </tr>
                  </tbody>
                </table>
              </Card>

              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 rounded-lg p-6 my-6">
                <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-3">
                  💡 Bonusové práva navyše k odškodneniu:
                </h4>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Náhradný let</strong> na rovnaké miesto určenia (ak chcete) ALEBO <strong>plný refund</strong> letenky</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Starostlivosť</strong> (care) – jedlo, nápoje, 2 telefónne hovory, hotel (ak čakáte cez noc)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Transport</strong> z/na letisko, ak LOT ubytuje vás v hoteli</span>
                  </li>
                </ul>
                <p className="text-sm mt-3 font-semibold">
                  <strong>Dôležité:</strong> Hotovostné odškodnenie 250-600 € je <strong>nezávislé</strong> od týchto práv. Aj keď vám LOT poskytol hotel a jedlo, stále máte nárok na peniaze!
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Ako požiadať */}
          <section id="ako-poziadat" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Ako požiadať o odškodnenie – krok za krokom
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Máte dve možnosti: <strong>požiadať LOT priamo</strong> alebo <strong>použiť ClaimWinger</strong>. Silne odporúčame druhú možnosť – LOT odmieta 70-80% individuálnych žiadostí, zatiaľ čo ClaimWinger má 98% úspešnosť.
              </p>

              <div className="space-y-4">
                <Card className="p-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-green-700 dark:text-green-400">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Zhromaždite dokumenty</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Potrebujete:
                      </p>
                      <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        <li>• Kópia palubného lístka (boarding pass)</li>
                        <li>• Potvrdenie o rezervácii (booking confirmation s PNR kódom)</li>
                        <li>• Email/SMS od LOT o zrušení letu</li>
                        <li>• Kópia pasu (stačí strana s fotkou)</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-blue-700 dark:text-blue-400">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Overte si nárok (2 minúty)</h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        Použite <a href="https://claimwinger.com/sk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ClaimWinger kalkulátor</a> – zadajte číslo letu a dátum. Systém okamžite vyhodnotí, či máte nárok a koľko.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-purple-700 dark:text-purple-400">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Nahrajte dokumenty (5 minút)</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        ClaimWinger vás prevedie online formulárom. Nahrajete dokumenty a systém automaticky pošle žiadosť LOT.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 dark:bg-orange-900/30 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-orange-700 dark:text-orange-400">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">ClaimWinger sa postará o všetko</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Právnici komunikujú s LOT, v prípade zamietnutia idú na súd. Vy nerobíte nič!
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white border-l-4 border-green-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-white text-green-600 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bold">5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">Dostanete peniaze (8-12 týždňov)</h3>
                      <p className="text-green-50">
                        ClaimWinger vymôže odškodnenie a pošle vám peniaze po odpočítaní provízie (zvyčajne 25% + DPH). Ak nevymôžime, neplatíte nič!
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 4: Náhradný let vs refund */}
          <section id="nahrady" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              Náhradný let alebo refund – čo si vybrať?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Keď LOT zruší let, máte <strong>právo voľby</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="p-6 border-2 border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">
                    ✈️ Možnosť 1: Náhradný let
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    LOT vám musí poskytnúť <strong>bezplatný náhradný let</strong> na rovnaké miesto určenia:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Čo najskôr možno (ideálne nasledujúci let LOT)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Rovnaká trieda (Economy, Business)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>LOT môže vás preložiť na iný let (aj konkurenčnej spoločnosti)</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm font-semibold text-blue-700 dark:text-blue-400">
                    <strong>Výhoda:</strong> Dostanete sa na miesto určenia
                  </p>
                </Card>

                <Card className="p-6 border-2 border-green-200 dark:border-green-800">
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-3">
                    💰 Možnosť 2: Plný refund
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    LOT vám musí vrátiť <strong>celú cenu letenky</strong> (vrátane daní a poplatkov):
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>100% vrátenie peňazí do 7 dní</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Aj za nevyužitú časť cesty (napr. spiatočný let)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Platí aj pre non-refundable letenky!</span>
                    </li>
                  </ul>
                  <p className="mt-3 text-sm font-semibold text-green-700 dark:text-green-400">
                    <strong>Výhoda:</strong> Dostanete peniaze späť a môžete si kúpiť iný let
                  </p>
                </Card>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-3">
                  ⚠️ POZOR: Refund vs Odškodnenie – to nie je to isté!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  Mnohí cestujúci si mýlia tieto dva pojmy:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-red-700 dark:text-red-400">Refund:</span>
                    <span>Vrátenie ceny letenky (napr. 50 € za Bratislava-Varšava)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-green-700 dark:text-green-400">Odškodnenie:</span>
                    <span>Hotovostná kompenzácia 250-600 € <strong>nezávisle od ceny letenky!</strong></span>
                  </li>
                </ul>
                <p className="text-sm mt-3 font-semibold">
                  Môžete dostať <strong>oboje</strong> – refund + odškodnenie! Nie je to jedno alebo druhé.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Mimoriadne okolnosti */}
          <section id="mimoriadne-okolnosti" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              Mimoriadne okolnosti – kedy LOT nemusí platiť?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                LOT <strong>nemusí platiť hotovostné odškodnenie</strong> (250-600 €), ak zrušenie bolo spôsobené "mimoriadnymi okolnosťami" mimo ich kontroly. Ale pozor – LOT často klamú!
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4 border-2 border-red-200 dark:border-red-800">
                  <h4 className="font-bold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5" />
                    ✅ Skutočné mimoriadne okolnosti
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Extrémne počasie (hurikán, snežná búrka, hustá hmla s uzavretím letiska)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Štrajk letiskového personálu (kontrolóri letovej prevádzky, bezpečnostná služba – <strong>mimo LOT</strong>)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Bezpečnostné hrozby (teroristický útok, vojenský konflikt)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span>Bird strike (zrážka s vtákmi) – len ak išlo o nepredvídateľnú udalosť</span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-4 border-2 border-green-200 dark:border-green-800">
                  <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    ❌ Nie sú mimoriadne okolnosti
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Technická porucha</strong> (aj "nečakaná") – LOT musí udržiavať lietadlá!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Štrajk LOT zamestnancov</strong> (piloti, personál kabíny, technici)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Chorá posádka</strong> (LOT musí mať náhradných pilotov)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Nedostatok paliva</strong> alebo prebookovanie (overbooking)</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6">
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-3">
                  🚨 Najčastejší trik LOT: "Technická porucha = mimoriadna okolnosť"
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm">
                  LOT veľmi často tvrdí, že technická porucha bola "nepredvídateľná" a preto nemusia platiť. To je <strong>vo väčšine prípadov NESPRÁVNE!</strong>
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Európsky súdny dvor rozhodol, že letecké spoločnosti musia vykonávať <strong>pravidelnú údržbu</strong> a mať náhradné diely. Len veľmi zriedkavé "skryté výrobné chyby" môžu byť mimoriadne okolnosti – ale LOT musí <strong>dokázať</strong>, že to nebolo možné odhaliť.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: ClaimWinger */}
          <section id="claimwinger" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              Prečo použiť ClaimWinger namiesto samostatnej žiadosti?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Hoci môžete žiadať LOT priamo, <strong>70-80% individuálnych žiadostí je zamietnutých alebo ignorovaných</strong>. ClaimWinger má 98% úspešnosť.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-green-200 dark:border-green-800">
                  <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">98% úspešnosť</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Vymôžeme odškodnenie aj v prípadoch, ktoré LOT zamietol
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-blue-200 dark:border-blue-800">
                  <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Euro className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Bez rizika</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Platíte len pri úspechu – žiadne skryté poplatky
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-shadow border-2 border-purple-200 dark:border-purple-800">
                  <div className="bg-purple-100 dark:bg-purple-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">8-12 týždňov</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Rýchlejšie než individuálna žiadosť (6+ mesiacov)
                  </p>
                </Card>
              </div>

              <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                <h3 className="text-xl font-bold mb-4">🎯 Špeciálne výhody</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Slovenská podpora</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Komunikácia v slovenčine</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Súdne konanie v cene</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Bez extra poplatku</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA 2 - Pred FAQ */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Pripravení získať svoje odškodnenie?</h3>
              <p className="text-xl text-blue-100 mb-6">
                Overte si nárok za 2 minúty – úplne zadarmo a bez záväzkov
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>✓ 98% úspešnosť</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>✓ Bez rizika</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>✓ 8-12 týždňov</span>
                </div>
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <a href="https://claimwinger.com/sk/zruseny-let?utm_source=blog&utm_medium=article&utm_campaign=lot_zruseny_cta2" target="_blank" rel="noopener noreferrer">
                    Overiť nárok teraz <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">❓ Často kladené otázky</h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Dostanем odškodnenie aj za rodinu (manželka, deti)?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno!</strong> Každý cestujúci má nárok na samostatné odškodnenie. Ak let zrušený letel celá rodina (4 osoby), každý dostane 250-600 € (podľa vzdialenosti) = spolu až 2 400 €. Deti majú rovnaké práva ako dospelí (aj bábätká s vlastným sedadlom).
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  LOT mi ponúkol voucher namiesto peňazí – musím ho prijať?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nie!</strong> Máte právo na hotovostné odškodnenie (alebo bankový prevod). LOT často ponúka vouchery, pretože pre nich je to lacnejšie. <strong>Vždy môžete odmietnuť voucher a trvať na peniazoch.</strong> Je to vaše zákonné právo!
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Ako dlho mám čas podať žiadosť o odškodnenie?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Na Slovensku: 2 roky</strong> (premlčacia lehota). V Poľsku (LOT sídlo): 3 roky. Odporúčame však podať žiadosť čo najskôr, pretože LOT môže mať ťažkosti s nájdením starších záznamov.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Čo ak LOT zamietne moju žiadosť s odvolaním sa na "technickú poruchu"?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nikdy sa nevzdávajte!</strong> LOT používa "technickú poruchu" ako všeobecnú výhovorku, ale väčšina technických porúch NIE JE mimoriadna okolnosť. ClaimWinger má skúsenosti s prelamovaním týchto zamietnutí a môže vyžadovať podrobné technické správy.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môžem požadovať odškodnenie, ak som už prijal náhradný let?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno, určite!</strong> Prijatie náhradného letu <strong>nevylučuje</strong> vaše právo na hotovostné odškodnenie 250-600 €. Sú to dve oddelené veci – LOT vám musí poskytnúť náhradný let (alebo refund) + hotovostné odškodnenie, ak bolo zrušenie menej ako 14 dní vopred a nebolo spôsobené mimoriadnymi okolnosťami.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Čo ak LOT nereaguje na moje emaily?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>To je bežný problém!</strong> LOT má zákonný limit 2 mesiace na odpoveď, ale často ho ignoruje. Preto odporúčame použiť ClaimWinger – máme priamy kontakt s LOT a vieme, ako urýchliť proces. Ak LOT nereaguje, môžeme začať súdne konanie.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môže LOT odmietnuť odškodnenie, ak som letel s propagačnou letenkou?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nie!</strong> EU261 sa vzťahuje na všetkých cestujúcich s potvrdenou rezerváciou, bez ohľadu na cenu letenky. Aj keď ste leteli zadarmo s miles bodmi alebo s ultra-lacnou promo-letenkou, vaše práva sú rovnaké.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Dostanем refund aj za spiatočný let, keď LOT zrušil len jeden smer?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno!</strong> Ak LOT zruší napr. let tam, môžete požadovať refund za <strong>celú letenku</strong> (tam aj späť), ak už nechcete cestovať. Alternatívne môžete požadovať len refund za zrušenú časť + odškodnenie za zrušený smer.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Čo ak LOT ponúkne náhradný let s príletom o 5 hodín neskôr?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Máte nárok na plné odškodnenie!</strong> "Primeraná alternatíva" znamená prílet maximálne 2-4 hodiny po pôvodnom čase (závisí od vzdialenosti). Ak náhradný let prichádza o 5+ hodín neskôr, je to ako keby LOT neposkytol žiadnu alternatívu → plné odškodnenie 250-600 €.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Koľko zaplatím ClaimWinger?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  ClaimWinger si účtuje <strong>25% + DPH</strong> z vymôženého odškodnenia – ale len <strong>pri úspechu</strong>! Ak nevymôžime odškodnenie, neplatíte nič. <strong>Príklad:</strong> Odškodnenie 400 € → ClaimWinger dostane ~100 € (25%) + DPH → vám zostane ~300 €.
                </p>
              </details>
            </div>
          </section>

          {/* FAQPage Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Dostanem odškodnenie aj za rodinu (manželka, deti)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno! Každý cestujúci má nárok na samostatné odškodnenie. Ak let zrušený letel celá rodina (4 osoby), každý dostane 250-600 € podľa vzdialenosti."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "LOT mi ponúkol voucher namiesto peňazí – musím ho prijať?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nie! Máte právo na hotovostné odškodnenie. Vždy môžete odmietnuť voucher a trvať na peniazoch."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Ako dlho mám čas podať žiadosť o odškodnenie?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Na Slovensku: 2 roky. V Poľsku: 3 roky. Odporúčame však podať žiadosť čo najskôr."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Čo ak LOT zamietne moju žiadosť s odvolaním sa na technickú poruchu?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nikdy sa nevzdávajte! Väčšina technických porúch nie je mimoriadna okolnosť. ClaimWinger má skúsenosti s prelamovaním týchto zamietnutí."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Môžem požadovať odškodnenie, ak som už prijal náhradný let?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno! Prijatie náhradného letu nevylučuje vaše právo na hotovostné odškodnenie 250-600 €."
                    }
                  }
                ]
              })
            }}
          />

          {/* Related Articles */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">📚 Súvisiace články</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sk/blog/lot-oneskoreny-let-odskodnenie">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">Oneskorený let LOT - odškodnenie</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kompletný sprievodca odškodnením za oneskorený let LOT
                  </p>
                </Card>
              </Link>
              <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">Kompletný sprievodca odškodnením</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Všetko o právach cestujúcich podľa EU261
                  </p>
                </Card>
              </Link>
            </div>
          </section>

          {/* Final note */}
          <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2 mb-8">
            <p>
              <strong>Oficiálne zdroje:</strong>
              <a href="https://eur-lex.europa.eu/eli/reg/2004/261/oj/eng" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2">
                Nariadenie EÚ 261/2004 (EUR-Lex)
              </a>
            </p>
            <p>
              Tento sprievodca je založený na nariadení EÚ 261/2004 a poľských právach cestujúcich. ClaimWinger je nezávislá spoločnosť na vymáhanie odškodnení, nie je pridružená k LOT Polish Airlines.
            </p>
          </div>
        </div>
      </article>
    </LayoutSk>
  );
}