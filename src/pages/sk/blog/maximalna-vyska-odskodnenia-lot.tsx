import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Euro, 
  Calculator, 
  Plane, 
  CheckCircle2,
  AlertTriangle,
  FileText,
  ArrowRight,
  MapPin,
  Clock
} from "lucide-react";
import Link from "next/link";

export default function MaximalnaVyskaOdskodneniaLOT() {
  return (
    <LayoutSk>
      <SEO
        title="Maximálna Výška Odškodnenia za Let LOT – 250 €, 400 € alebo 600 €?"
        description="Koľko peňazí vám patrí od LOT? Kalkulátor odškodnenia ✓ Výška podľa vzdialenosti ✓ Príklady tras LOT ✓ Overenie nároku zadarmo"
        url="https://lotproblem.pl/sk/blog/maximalna-vyska-odskodnenia-lot"
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Maximálna Výška Odškodnenia za Let LOT – 250 €, 400 € alebo 600 €?",
            "description": "Kompletný sprievodca výškou odškodnenia od LOT Polish Airlines podľa vzdialenosti letu.",
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
            <span>Výška odškodnenia LOT</span>
          </div>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Maximálna Výška Odškodnenia za Let LOT – 250 €, 400 € alebo 600 €?
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Zistite presne, koľko peňazí vám patrí od LOT Polish Airlines podľa vzdialenosti vášho letu.
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Aktualizované: 5. marca 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>Čítanie: 11 minút</span>
              </div>
            </div>
          </header>

          {/* AI Overview */}
          <div className="mb-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <Euro className="w-8 h-8 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-2">💰 Rýchla kalkulácia (okamžitý prehľad)</h2>
                <p className="text-green-100 text-lg">
                  Výška odškodnenia závisí <strong>len od vzdialenosti letu</strong>, nie od ceny letenky!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-sm mb-2">Do 1 500 km</p>
                <p className="text-4xl font-bold">250 €</p>
                <p className="text-xs mt-2 text-green-200">Bratislava → Varšava</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur border-2 border-green-300/50">
                <p className="text-sm mb-2">1 500 – 3 500 km</p>
                <p className="text-4xl font-bold">400 €</p>
                <p className="text-xs mt-2 text-green-200">Varšava → Reykjavík</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                <p className="text-sm mb-2">Nad 3 500 km</p>
                <p className="text-4xl font-bold">600 €</p>
                <p className="text-xs mt-2 text-green-200">Varšava → New York</p>
              </div>
            </div>
          </div>

          {/* CTA 1 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold mb-4 text-center">Zistite presne, koľko vám patrí</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                Vypočítajte výšku odškodnenia za 2 minúty – zadarmo a bez záväzkov
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_vyska_cta1" target="_blank" rel="noopener noreferrer">
                    Vypočítať odškodnenie <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                ✓ Presný výpočet ✓ Overenie nároku ✓ 98% úspešnosť
              </p>
            </Card>
          </div>

          {/* Content */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-purple-600" />
              Ako sa vypočítava výška odškodnenia?
            </h2>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg mb-6">
                Výška odškodnenia od LOT Polish Airlines je definovaná <strong>nariadením EU 261/2004</strong> a závisí od <strong>dvoch faktorov</strong>:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="p-6 border-2 border-blue-200 dark:border-blue-800">
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">
                    1️⃣ Vzdialenosť letu
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Počíta sa <strong>vzdušná vzdialenosť</strong> medzi odletovým a cieľovým letiskom (nie skutočná trasa letu).
                  </p>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>Do 1 500 km = <strong>250 €</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>1 500 – 3 500 km = <strong>400 €</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span>Nad 3 500 km = <strong>600 €</strong></span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-orange-200 dark:border-orange-800">
                  <h3 className="text-xl font-bold text-orange-700 dark:text-orange-400 mb-3">
                    2️⃣ Dĺžka oneskorenia
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Pri dlhých trasách (1 500+ km) sa odškodnenie <strong>znižuje o 50%</strong>, ak oneskorenie bolo len 3-4 hodiny.
                  </p>
                  <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4">
                    <p className="text-sm font-semibold">Príklad:</p>
                    <p className="text-sm mt-2">
                      Let Varšava → New York (6 800 km)<br/>
                      • Oneskorenie 3-4h = <strong>300 €</strong><br/>
                      • Oneskorenie 4h+ = <strong>600 €</strong>
                    </p>
                  </div>
                </Card>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 rounded-lg p-6 my-6">
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Dôležité: Cena letenky NEZÁLEŽÍ!
                </h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Aj keď ste leteli s ultra-lacnou promo-letenkou za 19 €, <strong>odškodnenie je rovnaké</strong> ako pre niekoho, kto zaplatil 500 €. Odškodnenie je <strong>fixná suma podľa vzdialenosti</strong>, nie percentuálna.
                </p>
              </div>
            </div>
          </section>

          {/* Detailed Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">📊 Komplexná tabuľka odškodnení LOT</h2>

            <Card className="p-6 bg-white dark:bg-gray-800 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="text-left p-3">Vzdialenosť</th>
                    <th className="text-left p-3">Oneskorenie 3-4h</th>
                    <th className="text-left p-3">Oneskorenie 4h+</th>
                    <th className="text-left p-3">Zrušený let</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-3">
                      <strong>Do 1 500 km</strong>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Napr. BA ↔ WAW (680 km)
                      </div>
                    </td>
                    <td className="p-3 font-bold text-green-600">250 €</td>
                    <td className="p-3 font-bold text-green-600">250 €</td>
                    <td className="p-3 font-bold text-green-600">250 €</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-3">
                      <strong>1 500 – 3 500 km</strong>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Napr. WAW ↔ TLV (2 800 km)
                      </div>
                    </td>
                    <td className="p-3 font-bold text-orange-600">200 €</td>
                    <td className="p-3 font-bold text-green-600">400 €</td>
                    <td className="p-3 font-bold text-green-600">400 €</td>
                  </tr>
                  <tr className="border-b border-gray-100 dark:border-gray-800">
                    <td className="p-3">
                      <strong>Nad 3 500 km</strong>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Napr. WAW ↔ JFK (6 800 km)
                      </div>
                    </td>
                    <td className="p-3 font-bold text-orange-600">300 €</td>
                    <td className="p-3 font-bold text-green-600">600 €</td>
                    <td className="p-3 font-bold text-green-600">600 €</td>
                  </tr>
                </tbody>
              </table>

              <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm">
                  <strong>💡 Poznámka:</strong> Pri zrušenom lete menej ako 14 dní pred odletom dostanete plnú sumu bez ohľadu na alternatívu (pokiaľ alternatíva neprichádza v podobnom čase).
                </p>
              </div>
            </Card>
          </section>

          {/* Popular Routes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Plane className="w-8 h-8 text-blue-600" />
              Najčastejšie trasy LOT a ich odškodnenie
            </h2>

            <div className="space-y-3">
              <Card className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">Bratislava → Varšava (LO521)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vzdialenosť: ~680 km</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">250 €</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">pri oneskorení/zrušení</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">Varšava → Paríž (LO333)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vzdialenosť: ~1 360 km</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-600">250 €</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">pri oneskorení/zrušení</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">Varšava → Tel Aviv (LO555)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vzdialenosť: ~2 800 km</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">-50%</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">300 € (3 až 4 hod.) / 600 € (viac ako 4 hod.)</p>
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
                    <p className="text-3xl font-bold text-orange-600">300 až 600 €</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">300 € (3 až 4 hod.) / 600 € (viac ako 4 hod.)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">Varšava → Tokio (LO79)</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Vzdialenosť: ~8 600 km</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-orange-600">300 až 600 €</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">300 € (3 až 4 hod.) / 600 € (viac ako 4 hod.)</p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Special Cases */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🔍 Špeciálne prípady</h2>

            <div className="space-y-6">
              <Card className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-3">Prestupný let (connecting flight)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Pri prestupe cez Varšavu sa počíta <strong>celková vzdialenosť</strong> z počiatočného do konečného cieľa, nie jednotlivé úseky.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Príklad:</p>
                  <p className="text-sm">
                    Bratislava → Varšava → New York (jedna rezervácia)<br/>
                    Celková vzdialenosť: ~7 400 km<br/>
                    <strong>Odškodnenie: 600 € (pri oneskorení 4h+ príchodu do NYC)</strong>
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-3">Codeshare lety (UA, ANA, atď.)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Ak máte letenku s číslom UA (United Airlines), ale let skutočne vykonáva LOT lietadlo, <strong>platí EU261 a odškodnenie od LOT</strong>.
                </p>
                <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4">
                  <p className="text-sm">
                    <strong>Ako overiť:</strong> Na palubnom lístku hľadajte "Operated by LOT Polish Airlines". Ak je tam LOT, máte nárok na EU261 odškodnenie podľa vzdialenosti.
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-3">Rodina (deti, bábätká)</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Každý cestujúci</strong> má nárok na samostatné odškodnenie, vrátane detí a bábätiek s vlastným sedadlom.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="font-semibold mb-2">Príklad:</p>
                  <p className="text-sm">
                    Rodina 4 osôb (2 dospelí + 2 deti), let Bratislava → Varšava oneskorený o 4h:<br/>
                    <strong>4 × 250 € = 1 000 € spolu pre celú rodinu!</strong>
                  </p>
                </div>
              </Card>
            </div>
          </section>

          {/* CTA 2 */}
          <div className="mb-12">
            <Card className="p-8 bg-gradient-to-br from-green-500 to-green-600 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Vypočítajte si presne, koľko vám patrí</h3>
              <p className="text-xl text-green-100 mb-6">
                Zadajte číslo letu a okamžite zistite výšku odškodnenia
              </p>
              <div className="text-center">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-green-50">
                  <a href="https://claimwinger.com/sk?utm_source=blog&utm_medium=article&utm_campaign=lot_vyska_cta2" target="_blank" rel="noopener noreferrer">
                    Overiť nárok teraz <ArrowRight className="ml-2 w-5 h-5" />
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
                <summary className="font-bold cursor-pointer">Môže LOT znížiť odškodnenie, ak som letel lacno?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Nie!</strong> Výška odškodnenia je <strong>fixná podľa vzdialenosti</strong>, nezávisí od ceny letenky. Aj keď ste leteli s promo-letenkou za 19 €, dostanete rovnakých 250-600 € ako niekto, kto zaplatil 500 €.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Dostanem viac peňazí, ak let mal dlhšie oneskorenie?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Nie presne.</strong> Odškodnenie je buď 0 € (oneskorenie < 3h), čiastočné (3-4h pri dlhých trasách), alebo plné (4h+ alebo zrušenie). Neexistuje postupné navyšovanie – napr. 10h oneskorenie = rovnaká suma ako 4h oneskorenie.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Môžem požadovať odškodnenie za spiatočný let samostatne?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Áno!</strong> Ak ste mali problémy na oboch smeroch (tam aj späť), máte nárok na <strong>dve samostatné odškodnenia</strong>. Napríklad: Bratislava → Varšava (oneskorenie) + Varšava → Bratislava (zrušenie) = 250 € + 250 € = <strong>500 € spolu</strong>.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Ako overím vzdialenosť môjho letu?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Použite online kalkulátor vzdialenosti letísk (napr. <a href="https://www.airmilescalculator.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">airmilescalculator.com</a>) alebo zadajte číslo letu do <a href="https://claimwinger.com/sk" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ClaimWinger kalkulátora</a> – systém automaticky vypočíta vzdialenosť.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Čo ak LOT ponúkne nižšiu sumu?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Neakceptujte!</strong> LOT niekedy ponúka "čiastočné odškodnenie" (napr. 150 € namiesto 250 €) ako kompromis. To je taktika – ak akceptujete, vzdávate sa nároku na zvyšok. <strong>Trvajte na plnej sume podľa EU261.</strong>
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
                <summary className="font-bold cursor-pointer">Platí to aj pre Business Class alebo First Class?</summary>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Áno, ale suma je rovnaká!</strong> Odškodnenie 250-600 € platí pre všetky triedy (Economy, Premium Economy, Business, First). Trieda letu <strong>neovplyvňuje výšku odškodnenia</strong>. To je hotovostná kompenzácia za stratu času, nie za stratu komfortu.
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
                    "name": "Môže LOT znížiť odškodnenie, ak som letel lacno?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nie! Výška odškodnenia je fixná podľa vzdialenosti, nezávisí od ceny letenky."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Dostanem viac peňazí, ak let mal dlhšie oneskorenie?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nie presne. Odškodnenie je buď 0 € (< 3h), čiastočné (3-4h), alebo plné (4h+)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Môžem požadovať odškodnenie za spiatočný let samostatne?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Áno! Ak ste mali problémy na oboch smeroch, máte nárok na dve samostatné odškodnenia."
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
                    Kompletný sprievodca
                  </p>
                </Card>
              </Link>
              <Link href="/sk/blog/lot-zrusil-let-odskodnenie">
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <h3 className="font-bold mb-2">LOT zrušil let - odškodnenie</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Ako získať až 600 €
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
              Tento sprievodca je založený na nariadení EÚ 261/2004. Sumy sú aktuálne k marcu 2026. ClaimWinger je nezávislá spoločnosť, nie je pridružená k LOT Polish Airlines.
            </p>
          </div>
        </div>
      </article>
    </LayoutSk>
  );
}