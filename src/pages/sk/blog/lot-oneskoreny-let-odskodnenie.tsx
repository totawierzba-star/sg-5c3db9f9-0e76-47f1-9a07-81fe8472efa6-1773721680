import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Plane, 
  Clock, 
  Euro, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle,
  FileText,
  ArrowRight,
  Shield,
  Calculator
} from "lucide-react";
import Link from "next/link";

export default function LOTOneskorenyLetOdskodnenie() {
  return (
    <LayoutSk>
      <SEO
        title="Odškodnenie za oneskorený let LOT Polish Airlines – Kompletný sprievodca 2026"
        description="LOT Polish Airlines oneskorenie letu? Získajte až 600 € odškodnenie! Kompletný sprievodca právami slovenských cestujúcich podľa EU261. ✓ Bez rizika ✓ 98% úspešnosť"
        url="https://lotproblem.pl/sk/blog/lot-oneskoreny-let-odskodnenie"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Odškodnenie za oneskorený let LOT Polish Airlines – Kompletný sprievodca 2026",
            "description": "Ako získať až 600 € odškodnenie od LOT za oneskorený let. Kompletný sprievodca právami slovenských cestujúcich.",
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
            <span>LOT oneskorený let odškodnenie</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Odškodnenie za oneskorený let LOT Polish Airlines – Kompletný sprievodca 2026
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Váš let s LOT mal oneskorenie? Zistite, kedy máte nárok na odškodnenie až 600 € a ako ho získať bez zbytočného stresu.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Aktualizované: 5. marca 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Čítanie: 12 minút</span>
              </div>
            </div>
          </header>

          {/* AI Overview Section */}
          <div className="mb-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <Shield className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">🎯 Kľúčové fakty (okamžitý prehľad)</h2>
                <p className="text-blue-100 text-lg">
                  LOT Polish Airlines = EU letecká spoločnosť (Poľsko) → chránená nariadením EU 261/2004
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
                    <span>Prílet oneskorený o <strong>3+ hodiny</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Let prevádzkuje <strong>LOT Polish Airlines</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Oneskorenie <strong>nie je</strong> spôsobené mimoriadnymi okolnosťami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-300">✓</span>
                    <span>Včas ste sa dostavili na check-in</span>
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
                    <span className="text-green-300">💡 Bratislava → Varšava = 250 €</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA 1 - Po prvom paragrafe */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-2 border-green-200 dark:border-green-800">
              <h3 className="text-2xl font-bold mb-4 text-center">Váš let LOT mal oneskorenie?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Overenie nároku na odškodnenie trvá len 2 minúty – zadarmo a bez záväzkov
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://claimwinger.com/sk/meskajuci-let?utm_source=blog&utm_medium=article&utm_campaign=lot_oneskoreny_cta1" target="_blank" rel="noopener noreferrer">
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
              <li><a href="#kedy-narok" className="text-blue-600 hover:underline">1. Kedy mám nárok na odškodnenie od LOT?</a></li>
              <li><a href="#vyska-odskodnenia" className="text-blue-600 hover:underline">2. Aká je výška odškodnenia?</a></li>
              <li><a href="#mimoriadne-okolnosti" className="text-blue-600 hover:underline">3. Čo sú "mimoriadne okolnosti"?</a></li>
              <li><a href="#ako-poziadat" className="text-blue-600 hover:underline">4. Ako požiadať o odškodnenie?</a></li>
              <li><a href="#claimwinger" className="text-blue-600 hover:underline">5. Prečo použiť ClaimWinger?</a></li>
              <li><a href="#faq" className="text-blue-600 hover:underline">6. Často kladené otázky</a></li>
            </ul>
          </Card>

          {/* Section 1: Kedy máte nárok */}
          <section id="kedy-narok" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              Kedy mám nárok na odškodnenie od LOT?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                <strong>LOT Polish Airlines</strong> je poľská letecká spoločnosť so sídlom vo Varšave, čo znamená, že patrí medzi <strong>EU letecké spoločnosti</strong>. Všetky jej lety sú preto chránené nariadením <strong>EU 261/2004</strong> o právach cestujúcich v leteckej doprave.
              </p>

              <Card className="p-6 mb-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600">
                <h3 className="text-xl font-bold mb-4">✅ Základné podmienky nároku na odškodnenie:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Oneskorenie príchodu o 3+ hodiny</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Počíta sa čas, kedy sa otvorili dvere lietadla na cieľovom letisku, nie čas odletu! Ak odlet bol oneskorený o 5 hodín, ale nakoniec prišli ste s oneskorením len 2:45, <strong>nemáte nárok</strong> na odškodnenie.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Plane className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Let prevádzkuje LOT Polish Airlines</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Platí pre všetky lety s <strong>kódom LO</strong> (napr. LO521 Varšava-Bratislava). Pri codeshare letoch (napr. UA s číslom United Airlines, ale prevádzkovaných LOT) tiež platí ochrana EU261, ak skutočne leti LOT lietadlo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Nie je to "mimoriadna okolnosť"</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        LOT nemusí platiť odškodnenie, ak oneskorenie spôsobila <strong>mimoriadna okolnosť</strong> mimo ich kontroly (napr. extrémne počasie, štrajk letiskového personálu mimo LOT, bezpečnostné hrozby). Bežná technická porucha <strong>nie je</strong> mimoriadna okolnosť!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Včasný check-in a nástup</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        Museli ste sa dostaviť na check-in včas (zvyčajne aspoň 45 min pred odletom pre európske lety, 90 min pre medzikontinentálne) a nestihli ste boarding gate po jeho zatvorení.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <h3 className="text-2xl font-bold mt-8 mb-4">🛫 Príklady letov LOT, na ktoré sa vzťahuje EU261:</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="p-4 border-2 border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Lety z EU</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Bratislava → Varšava (LO521)</li>
                    <li>✓ Varšava → New York (LO3)</li>
                    <li>✓ Budapešť → Varšava (LO539)</li>
                    <li>✓ Varšava → Tokio (LO79)</li>
                  </ul>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    <strong>Pravidlo:</strong> Všetky lety odlietajúce z letísk v EÚ.
                  </p>
                </Card>

                <Card className="p-4 border-2 border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-2">Lety do EU</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ New York → Varšava (LO4)</li>
                    <li>✓ Tokio → Varšava (LO80)</li>
                    <li>✓ Chicago → Varšava (LO6)</li>
                    <li>✓ Peking → Varšava (LO92)</li>
                  </ul>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-3">
                    <strong>Pravidlo:</strong> Lety do EÚ prevádzkované EU spoločnosťou (LOT).
                  </p>
                </Card>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 rounded-lg p-6 my-6">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Dôležité: Váš pas/štátna príslušnosť NEZÁLEŽÍ!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Nariadenie EU261 platí pre <strong>všetkých cestujúcich</strong> bez ohľadu na štátnu príslušnosť. Ak ste občan Slovenska, Poľska, Ukrajiny, USA, Číny alebo akejkoľvek inej krajiny – vaše práva sú rovnaké! LOT nemôže zamietnuť odškodnenie s odôvodnením, že nie ste občanom EÚ.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Výška odškodnenia */}
          <section id="vyska-odskodnenia" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-purple-600" />
              Aká je výška odškodnenia?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Výška odškodnenia závisí od <strong>vzdialenosti letu</strong> (nie od ceny letenky!) a <strong>dĺžky oneskorenia príchodu</strong>.
              </p>

              <Card className="p-6 bg-white dark:bg-gray-800 overflow-x-auto mb-6">
                <h3 className="text-xl font-bold mb-4">💰 Tabuľka odškodnenia podľa vzdialenosti</h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                      <th className="text-left p-3">Vzdialenosť letu</th>
                      <th className="text-left p-3">Oneskorenie 3-4h</th>
                      <th className="text-left p-3">Oneskorenie 4h+</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-3">
                        <strong>Do 1 500 km</strong>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Napr. Bratislava ↔ Varšava (680 km)
                        </div>
                      </td>
                      <td className="p-3 font-bold text-green-600">250 €</td>
                      <td className="p-3 font-bold text-green-600">250 €</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-3">
                        <strong>1 500 – 3 500 km</strong>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Napr. Varšava ↔ Reykjavík (2 100 km)
                        </div>
                      </td>
                      <td className="p-3 font-bold text-orange-600">200 €</td>
                      <td className="p-3 font-bold text-green-600">400 €</td>
                    </tr>
                    <tr className="border-b border-gray-100 dark:border-gray-800">
                      <td className="p-3">
                        <strong>Nad 3 500 km</strong>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Napr. Varšava ↔ New York (6 800 km)
                        </div>
                      </td>
                      <td className="p-3 font-bold text-orange-600">300 €</td>
                      <td className="p-3 font-bold text-green-600">600 €</td>
                    </tr>
                  </tbody>
                </table>

                <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm">
                    <strong>💡 Poznámka:</strong> Pri oneskorení 3-4 hodiny na dlhých trasách (nad 1 500 km) sa odškodnenie znižuje o 50 %. Pri oneskorení 4+ hodiny dostanete plnú sumu.
                  </p>
                </div>
              </Card>

              <h3 className="text-2xl font-bold mt-8 mb-4">📊 Najčastejšie lety LOT a ich odškodnenie</h3>

              <div className="space-y-3">
                <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">Bratislava → Varšava (LO521)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Vzdialenosť: ~680 km</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">250 €</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">pri oneskorení 3h+</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">Varšava → Londýn (LO281)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Vzdialenosť: ~1 450 km</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">250 €</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">pri oneskorení 3h+</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold">Varšava → New York (LO3)</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Vzdialenosť: ~6 800 km</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">300-600 €</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">300 € (3-4h) / 600 € (4h+)</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Section 3: Mimoriadne okolnosti */}
          <section id="mimoriadne-okolnosti" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-orange-600" />
              Čo sú "mimoriadne okolnosti"?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                <strong>Mimoriadne okolnosti</strong> (Extraordinary Circumstances) sú situácie mimo kontroly leteckej spoločnosti, pri ktorých <strong>LOT nemusí platiť odškodnenie</strong> – aj keď let mal oneskorenie 3+ hodiny. Ale pozor: LOT často tvrdí, že išlo o mimoriadnu okolnosť, aj keď to nie je pravda!
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
                      <span><strong>Extrémne počasie</strong> (snežná búrka, hurikán, hustá hmla s uzavretím letiska)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Štrajk letiskového personálu</strong> (kontrolóri letovej prevádzky, bezpečnostná služba – mimo LOT)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Bezpečnostné hrozby</strong> (teroristický útok, vojenský konflikt, uzavretie vzdušného priestoru)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Bird strike</strong> (zrážka s vtákmi) – len ak išlo o nepredvídateľnú udalosť</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Pandémia COVID-19</strong> (uzavretie hraníc, povinná karanténa)</span>
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
                      <span><strong>Technická porucha</strong> (aj "nečakaná") – LOT má povinnosť udržiavať lietadlá!</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Štrajk zamestnancov LOT</strong> (piloti, personál kabíny, technici)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Chorá posádka</strong> (LOT musí mať náhradných pilotov/stewardov)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Nedostatok paliva</strong> (plánovaná vec, nie náhla udalosť)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Overbooking</strong> (prebookovanie letu – LOT zodpovedá)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">•</span>
                      <span><strong>Oneskorená dodávka lietadla</strong> z predchádzajúceho letu</span>
                    </li>
                  </ul>
                </Card>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6 my-6">
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-3">
                  ⚠️ Najčastejší trik LOT: "Technická porucha = mimoriadna okolnosť"
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  LOT často tvrdí, že technická porucha bola "nepredvídateľná" a preto nemusia platiť odškodnenie. To je <strong>nesprávne</strong>! Európsky súdny dvor rozhodol, že:
                </p>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• Letecké spoločnosti musia vykonávať <strong>pravidelnú údržbu</strong> a mať náhradné diely</li>
                  <li>• "Skrytá výrobná chyba" môže byť mimoriadna okolnosť, ale LOT musí <strong>dokázať</strong>, že to nebolo možné odhaliť bežnou údržbou</li>
                  <li>• V praxi súdy uznávajú len veľmi málo technických porúch ako mimoriadne okolnosti</li>
                </ul>
                <p className="text-sm mt-3 font-semibold">
                  <strong>ClaimWinger</strong> má skúsenosti s tisíckami prípadov LOT a vie, ako napadnúť tvrdenie o "technickej poruche". <strong>Nikdy neprijmite zamietnutie LOT ako konečné!</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Ako požiadať */}
          <section id="ako-poziadat" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <FileText className="w-8 h-8 text-blue-600" />
              Ako požiadať o odškodnenie?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Máte dve možnosti: <strong>požiadať LOT priamo</strong> alebo <strong>použiť ClaimWinger</strong>. Odporúčame druhú možnosť – LOT odmieta alebo ignoruje väčšinu individuálnych nárokov, zatiaľ čo ClaimWinger má 98% úspešnosť.
              </p>

              <h3 className="text-2xl font-bold mb-4">🛠️ Možnosť 1: Priama žiadosť LOT (nedoporučujeme)</h3>

              <Card className="p-6 mb-6 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600">
                <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-yellow-700 dark:text-yellow-400">1.</span>
                    <div>
                      <p className="font-semibold">Zhromaždite dokumenty</p>
                      <p className="text-sm mt-1">Kópia palubného lístka, potvrdenie o rezervácii, dôkaz o oneskorení (email/SMS od LOT, fotka displeja na letisku)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-yellow-700 dark:text-yellow-400">2.</span>
                    <div>
                      <p className="font-semibold">Napíšte formálnu sťažnosť LOT</p>
                      <p className="text-sm mt-1">Pošlite na <strong>customerrelations@lot.pl</strong> s popisom situácie a požiadavkou na odškodnenie podľa EU261</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-yellow-700 dark:text-yellow-400">3.</span>
                    <div>
                      <p className="font-semibold">Čakajte 6-8 týždňov (alebo dlhšie)</p>
                      <p className="text-sm mt-1">LOT má zákonný limit 2 mesiace na odpoveď, často to trvá dlhšie</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-yellow-700 dark:text-yellow-400">4.</span>
                    <div>
                      <p className="font-semibold">LOT vás pravdepodobne zamietne</p>
                      <p className="text-sm mt-1">Typické dôvody: "mimoriadne okolnosti", "technická porucha", "nedostatok dokumentov"</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-yellow-700 dark:text-yellow-400">5.</span>
                    <div>
                      <p className="font-semibold">Musíte ísť na súd</p>
                      <p className="text-sm mt-1">Potrebujete právnika, čo stojí peniaze a trvá mesiace až roky</p>
                    </div>
                  </li>
                </ol>

                <p className="mt-4 font-semibold text-yellow-800 dark:text-yellow-300">
                  ❌ <strong>Prečo to nedoporučujeme:</strong> LOT zamietne 70-80% individuálnych nárokov. Aj keď máte nárok, LOT vás môže odradiť zdĺhavým procesom.
                </p>
              </Card>

              <h3 className="text-2xl font-bold mb-4">✅ Možnosť 2: ClaimWinger (odporúčame)</h3>

              <Card className="p-6 mb-6 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600">
                <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-green-700 dark:text-green-400">1.</span>
                    <div>
                      <p className="font-semibold">Overenie nároku (2 minúty, zadarmo)</p>
                      <p className="text-sm mt-1">Zadajte číslo letu a dátum na <a href="https://claimwinger.com/sk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">claimwinger.com/sk</a></p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-green-700 dark:text-green-400">2.</span>
                    <div>
                      <p className="font-semibold">Nahrajte dokumenty (5 minút)</p>
                      <p className="text-sm mt-1">Palubný lístok, pas, potvrdenie o oneskorení – systém vás prevedie</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-green-700 dark:text-green-400">3.</span>
                    <div>
                      <p className="font-semibold">ClaimWinger sa postará o všetko</p>
                      <p className="text-sm mt-1">Právnici ClaimWinger komunikujú s LOT, v prípade potreby idú na súd</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-green-700 dark:text-green-400">4.</span>
                    <div>
                      <p className="font-semibold">Dostanete peniaze (8-12 týždňov)</p>
                      <p className="text-sm mt-1">ClaimWinger vymôže odškodnenie a pošle vám peniaze po odpočítaní provízie (zvyčajne 25% + DPH)</p>
                    </div>
                  </li>
                </ol>

                <p className="mt-4 font-semibold text-green-800 dark:text-green-300">
                  ✅ <strong>Prečo je to lepšie:</strong> 98% úspešnosť, žiadne riziko (platíte len pri úspechu), šetrí váš čas a nervy.
                </p>
              </Card>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-3">
                  💡 Aké dokumenty potrebujete?
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Palubný lístok (boarding pass)</strong> – môžete ho nájsť v emaili od LOT alebo vytlačený z letiska</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Potvrdenie o rezervácii</strong> – booking confirmation s PNR kódom (6-znakový kód)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Dôkaz o oneskorení</strong> – email/SMS od LOT, fotka displeja na letisku, alebo ClaimWinger to overí sám</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Kópia pasu</strong> – stačí strana s vašou fotkou a údajmi</span>
                  </li>
                </ul>
                <p className="text-sm mt-3 italic text-gray-600 dark:text-gray-400">
                  <strong>Tip:</strong> Vždy si uschovajte kópie dokumentov po lete – nikdy neviete, kedy ich budete potrebovať!
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: ClaimWinger Benefits */}
          <section id="claimwinger" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-purple-600" />
              Prečo použiť ClaimWinger?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                <strong>ClaimWinger</strong> je špecializovaná spoločnosť na vymáhanie odškodnenia od leteckých spoločností. Pre LOT Polish Airlines máme tisíce úspešných prípadov a poznáme všetky ich triky.
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

              <Card className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 mb-6">
                <h3 className="text-xl font-bold mb-4">🎯 Špeciálne výhody pre slovenských cestujúcich</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Slovenská podpora</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Komunikácia v slovenčine cez našich partnerov</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Slovenské bankové účty</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Odškodnenie priamo na váš účet v EUR</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Právna expertíza pre LOT</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tisíce úspešných prípadov s LOT Polish Airlines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Súdne konanie v cene</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Ak LOT odmietne, ideme na súd za vás – bez extra poplatku</p>
                    </div>
                  </div>
                </div>
              </Card>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 rounded-lg p-6">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">
                  💰 Koľko zaplatíte ClaimWinger?
                </h4>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  ClaimWinger si účtuje <strong>25% + DPH</strong> z vymôženého odškodnenia – ale len <strong>pri úspechu</strong>! Ak nevymôžime odškodnenie, neplatíte nič.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <strong>Príklad:</strong> Let Bratislava → Varšava oneskorený o 4 hodiny = 250 € odškodnenie.<br/>
                  ClaimWinger si účtuje ~62,50 € (25%) + DPH → Vám zostane ~187,50 € – 218,75 € (podľa miestnej DPH).
                </p>
              </div>
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
                  <a href="https://claimwinger.com/sk/meskajuci-let?utm_source=blog&utm_medium=article&utm_campaign=lot_oneskoreny_cta2" target="_blank" rel="noopener noreferrer">
                    Overiť nárok teraz <ArrowRight className="ml-2 w-5 w-5" />
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Section 6: FAQ */}
          <section id="faq" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">❓ Často kladené otázky</h2>

            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môžem požadovať odškodnenie, ak som občanom Slovenska, ale nemal som let z/do Slovenska?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno!</strong> EU261 sa vzťahuje na všetky lety LOT odlietajúce z EÚ alebo prilietajúce do EÚ, bez ohľadu na štátnu príslušnosť cestujúceho. Napríklad ak občan Slovenska letel z Varšavy do New Yorku s LOT a mal oneskorenie, má nárok na odškodnenie.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  LOT mi ponúkol voucher namiesto peňazí – musím ho prijať?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nie!</strong> Máte právo na hotovostné odškodnenie (alebo bankový prevod). LOT často ponúka vouchery, pretože pre nich je to lacnejšie a mnohí cestujúci nevedia o svojich právach. Vždy môžete odmietnuť voucher a trvať na peniazoch.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Ako dlho mám čas podať žiadosť o odškodnenie?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Na Slovensku: 2 roky</strong> (premlčacia lehota). V Poľsku (LOT sídlo): 3 roky. To znamená, že aj keď váš let bol pred 18 mesiacmi, stále môžete požadovať odškodnenie! Odporúčame však podať žiadosť čo najskôr, pretože LOT môže mať ťažkosti s nájdením starších záznamov.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Čo ak LOT zamietne moju žiadosť s odvolaním sa na "technickú poruchu"?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nikdy sa nevzdávajte!</strong> LOT často používa "technickú poruchu" ako všeobecnú výhovorku, ale <strong>väčšina technických porúch nie je mimoriadna okolnosť</strong>. ClaimWinger má skúsenosti s prelamovaním týchto zamietnutí a môže vyžadovať podrobné technické správy od LOT, ktoré musia dokázať, že porucha bola nepredvídateľná.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Čo ak som letel cez Varšavu s prestupom – platí EU261?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno, ak išlo o jednu rezerváciu!</strong> Napríklad Bratislava → Varšava → Tokio s jedným booking kódom (PNR) = celý let je chránený EU261. Ak ste kúpili dva samostatné letenky (Bratislava-Varšava oddelene, Varšava-Tokio oddelene), druhý let nemusí byť chránený, ak oneskorenie prvého letu spôsobilo zmeškanie druhého.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môže LOT odmietnuť odškodnenie, ak som letel s propagačnou letenkou alebo bodmi?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Nie!</strong> EU261 sa vzťahuje na všetkých cestujúcich s potvrdenou rezerváciou, bez ohľadu na cenu letenky alebo spôsob platby. Aj keď ste leteli zadarmo s miles & more bodmi alebo s ultra-lacnou Ryanair promo-letenkou, vaše práva sú rovnaké.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Čo ak LOT nereaguje na moje emaily?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>To je bežný problém!</strong> LOT má zákonný limit 2 mesiace na odpoveď na sťažnosti, ale často ho ignoruje alebo odpovedá veľmi neskoro. Preto odporúčame použiť ClaimWinger – máme priamy kontakt s LOT a vieme, ako urýchliť proces. Ak LOT nereaguje ani po mesiaci, môžeme začať súdne konanie.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Dostanem odškodnenie aj za rodinu (manželka, deti)?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno!</strong> Každý cestujúci má nárok na samostatné odškodnenie. Ak let oneskorený o 4+ hodiny letel celá rodina (4 osoby), každý dostane 250 € (pre krátke trasy) = spolu 1 000 €. Deti majú rovnaké práva ako dospelí (aj bábätká s vlastným sedadlom).
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Platí EU261 aj pre lety LOT mimo Európy (napr. Varšava → New York)?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno, ak let odlieta z EÚ!</strong> Všetky lety LOT odlietajúce z európskych letísk (aj do USA, Ázie, atď.) sú chránené EU261. Napríklad Varšava → New York s oneskorením 4h+ = 600 € odškodnenie. Opačný smer (New York → Varšava) tiež platí, pretože LOT je EU spoločnosť.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold text-lg cursor-pointer">
                  Môžem požadovať odškodnenie, aj keď som už prijal náhradné ubytovanie alebo stravné od LOT?
                </summary>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Áno, určite!</strong> Právo na starostlivosť (care) – jedlo, ubytovanie, transport – je <strong>oddelené</strong> od práva na odškodnenie. LOT vám musí poskytnúť starostlivosť pri dlhom oneskorení bez ohľadu na príčinu. To <strong>nevylučuje</strong> vaše právo na hotovostné odškodnenie 250-600 €, ak bolo oneskorenie 3h+ a nebolo spôsobené mimoriadnymi okolnosťami.
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
                    "name": "Môžem požadovať odškodnenie, ak som občanom Slovenska, ale nemal som let z/do Slovenska?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno! EU261 sa vzťahuje na všetky lety LOT odlietajúce z EÚ alebo prilietajúce do EÚ, bez ohľadu na štátnu príslušnosť cestujúceho."
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
                      "text": "Na Slovensku: 2 roky. V Poľsku: 3 roky. Aj keď váš let bol pred 18 mesiacmi, stále môžete požadovať odškodnenie."
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
                    "name": "Čo ak som letel cez Varšavu s prestupom – platí EU261?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno, ak išlo o jednu rezerváciu s jedným booking kódom (PNR). Celý let je chránený EU261."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Môže LOT odmietnuť odškodnenie, ak som letel s propagačnou letenkou?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nie! EU261 sa vzťahuje na všetkých cestujúcich s potvrdenou rezerváciou, bez ohľadu na cenu letenky."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Dostanem odškodnenie aj za rodinu (manželka, deti)?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno! Každý cestujúci má nárok na samostatné odškodnenie. Deti majú rovnaké práva ako dospelí."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Platí EU261 aj pre lety LOT mimo Európy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno, ak let odlieta z EÚ! Všetky lety LOT odlietajúce z európskych letísk sú chránené EU261."
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
              <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">Kompletný sprievodca odškodnením za let</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Všetko o právach cestujúcich podľa EU261
                  </p>
                </Card>
              </Link>
              <Link href="/sk/blog/wizz-air-odszkodowanie">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">Wizz Air odškodnenie</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ako získať odškodnenie od Wizz Air
                  </p>
                </Card>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
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