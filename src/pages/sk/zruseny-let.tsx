import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { XCircle, CheckCircle2, AlertTriangle, Plane, Euro, RefreshCw, ArrowRight } from "lucide-react";

export default function ZrusenyLet() {
  return (
    <LayoutSk>
      <SEO
        title="Zrušený let – Kompenzácia až 600 € + Plná náhrada | Vaše práva"
        description="Zrušil sa vám let? Máte nárok na kompenzáciu až 600 € PLUS vrátenie celej sumy za letenku. Zistite svoje práva podľa nariadenia EU 261/2004."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 mb-6">
            <XCircle className="h-4 w-4 mr-2" />
            Nariadenie EU 261/2004
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Zrušený let – Kompenzácia až <span className="text-red-600">600 €</span> + Plná náhrada
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Ak sa váš let zrušil, máte nárok na dvojitú náhradu: finančnú kompenzáciu AJ vrátenie celej sumy za letenku. 
            Nezáleží na príčine zrušenia.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://claimwinger.com/cancelled-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Euro className="mr-2 h-6 w-6" />
              Získať kompenzáciu
            </a>
            <Link
              href="/sk/kalkulacka-kompenzacie"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700 transition-all"
            >
              Kalkulačka
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Double Compensation Highlight */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-800 dark:to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">⚡ Dvojitá náhrada pri zrušenom lete!</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-extrabold mb-3">💰 Kompenzácia</div>
                <div className="text-xl mb-2">250 € - 600 €</div>
                <div className="text-red-100">Za spôsobené nepríjemnosti</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-5xl font-extrabold mb-3">🔄 Náhrada</div>
                <div className="text-xl mb-2">100% ceny letenky</div>
                <div className="text-red-100">Vrátenie peňazí za letenku</div>
              </div>
            </div>
            <div className="bg-yellow-400 text-gray-900 rounded-xl p-6 text-lg font-bold">
              Príklad: Letenka za 400 € → Kompenzácia 400 € + Náhrada 400 € = <span className="text-2xl">800 € CELKOM!</span>
            </div>
          </div>
        </div>
      </section>

      {/* When Entitled Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Kedy máte nárok na kompenzáciu?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Rights */}
            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Máte nárok</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Let zrušený <strong>menej ako 14 dní</strong> pred odletom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Let vykonáva letecká spoločnosť z EÚ alebo odchádza z letiska v EÚ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Zrušenie spôsobené technickými problémami alebo nedostatkom posádky</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Neponúkli vám vhodné alternatívne spojenie</span>
                </li>
              </ul>
            </div>

            {/* No Rights */}
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <XCircle className="h-8 w-8 text-red-600 dark:text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Nemáte nárok</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Zrušenie oznámené viac ako 14 dní vopred</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Mimoriadne okolnosti (búrka, štrajk leteckej kontroly, pandémia)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Ponúkli vám alternatívny let s meškaním kratším ako 2-4 hodiny</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Let mimo EÚ leteckou spoločnosťou mimo EÚ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Warning */}
      <section className="py-16 bg-yellow-50 dark:bg-yellow-900/10 border-y border-yellow-200 dark:border-yellow-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-10 w-10 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ⚠️ Kritické upozornenie: Neakceptujte voucher!
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Letecké spoločnosti často ponúkajú <strong>vouchery na ďalší let</strong> namiesto peňazí. 
                Toto je trik, ako vás pripraviť o peniaze!
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Vaše právo:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>✅ <strong>Vždy máte právo na hotovosť</strong> (prevod na účet)</li>
                  <li>✅ Voucher môžete odmietnuť a požadovať peniaze</li>
                  <li>✅ Kompenzácia + vrátenie peňazí za letenku = oboje v hotovosti</li>
                  <li className="text-red-600 dark:text-red-400 font-semibold">❌ NIKDY neakceptujte voucher ako náhradu za kompenzáciu!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Amounts */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Koľko peňazí vám patrí?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Výška kompenzácie závisí od vzdialenosti letu, nie od ceny letenky.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 250 EUR */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">250 €</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Do 1 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-2">✈</span>
                  <span>Bratislava → Rím</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-2">✈</span>
                  <span>Viedeň → Londýn</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-2">✈</span>
                  <span>Košice → Praha</span>
                </div>
              </div>
            </div>

            {/* 400 EUR */}
            <div className="bg-red-600 dark:bg-red-700 rounded-2xl p-8 text-white transform scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                Najčastejšie
              </div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold mb-2">400 €</div>
                <div className="text-sm text-red-100 uppercase tracking-wide">1 500 - 3 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✈</span>
                  <span>Bratislava → Dubaj</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✈</span>
                  <span>Viedeň → Tenerife</span>
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-300 mr-2">✈</span>
                  <span>Košice → Hurghada</span>
                </div>
              </div>
            </div>

            {/* 600 EUR */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-8 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">600 €</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Nad 3 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-2">✈</span>
                  <span>Viedeň → New York</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-2">✈</span>
                  <span>Viedeň → Bangkok</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-red-500 mr-2">✈</span>
                  <span>Bratislava → Los Angeles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Options Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Čo môžete robiť pri zrušenom lete?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-blue-200 dark:border-blue-800 p-8">
              <div className="flex items-center mb-6">
                <RefreshCw className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Možnosť 1: Alternatívny let</h3>
              </div>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">→</span>
                  <span>Letecká spoločnosť vám ponúkne náhradný let do cieľa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">→</span>
                  <span>Nesmú vám účtovať žiadne dodatočné poplatky</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">→</span>
                  <span><strong>Stále máte nárok na kompenzáciu</strong> (ak let pricestuje s meškaním)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3 mt-1">→</span>
                  <span>Môžu vám ponúknuť vyššiu triedu zdarma</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-green-200 dark:border-green-800 p-8">
              <div className="flex items-center mb-6">
                <Euro className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Možnosť 2: Plné vrátenie peňazí</h3>
              </div>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 mt-1">→</span>
                  <span>Dostanete späť 100% ceny letenky</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 mt-1">→</span>
                  <span>Náhrada do 7 dní (v hotovosti, nie voucher!)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 mt-1">→</span>
                  <span><strong>Plus kompenzácia</strong> 250-600 € za spôsobené nepríjemnosti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 mt-1">→</span>
                  <span>Môžete si zabookovat iný let u konkurencie</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <p className="text-center text-lg text-gray-700 dark:text-gray-300">
              <strong>Zlatá rada:</strong> Ak nepotrebujete letieť naliehavo, zvoľte <strong>Možnosť 2</strong> 
              (vrátenie peňazí + kompenzácia). Dostanete dvojnásobné peniaze a môžete si nájsť lepšiu letenku.
            </p>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Ako získať kompenzáciu?
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Vyplňte formulár (v angličtine)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Podanie žiadosti cez <strong>ClaimWinger</strong> (medzinárodný servis) zvyšuje šance na úspech. 
                  Letecké spoločnosti často ignorujú lokálne žiadosti v slovenčine, ale rešpektujú žiadosti od 
                  veľkých medzinárodných firiem s právnickými tímami.
                </p>
                <a
                  href="https://claimwinger.com/cancelled-flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-600 dark:text-red-400 hover:underline font-semibold"
                >
                  Vyplniť formulár
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  My bojujeme za vás
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  ClaimWinger kontaktuje leteckú spoločnosť v mene tisícov cestujúcich. Ak odmietnu platiť, 
                  máme právnikov, ktorí idú na súd. Vy nerobíte nič a nič neplatíte vopred.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Peniaze na váš účet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Po získaní kompenzácie pošleme peniaze na váš účet mínus provízia 25% + DPH. 
                  Ak nevyhráme, neplatíte nič.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Často kladené otázky
          </h2>

          <div className="space-y-6">
            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Môžem dostať kompenzáciu AJ vrátenie peňazí súčasne?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong>Áno!</strong> Toto je veľká chyba, ktorú robia cestujúci. Myslí si, že môžu dostať len jedno. 
                V skutočnosti máte nárok na <strong>oboje</strong>:
                <br/><br/>
                1. <strong>Kompenzácia</strong> (250-600 €) - za spôsobené nepríjemnosti<br/>
                2. <strong>Vrátenie peňazí</strong> (100% ceny letenky) - náhrada za neuskutočnenú službu
                <br/><br/>
                Príklad: Letenka za 300 € + kompenzácia 400 € = <strong>700 € celkom</strong>.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Čo ak mi ponúkli voucher namiesto peňazí?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong>Odmieťte voucher!</strong> Máte zákonné právo na hotovosť (prevod na účet). Voucher je len pokus 
                leteckej spoločnosti ušetriť peniaze. Vždy trvajte na vrátení peňazí v hotovosti + kompenzáciu v hotovosti.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Čo sú "prevádzkové dôvody"?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                "Prevádzkové dôvody" je vágny termín, ktorý letecké spoločnosti používajú, aby sa vyhli plateniu. 
                Môže to znamenať čokoľvek od technických problémov až po nedostatok posádky. 
                <strong>Vo väčšine prípadov musí letecká spoločnosť platiť kompenzáciu</strong>, 
                pokiaľ to neboli skutočné mimoriadne okolnosti (búrka, pandémia, štrajk mimo ich kontroly).
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Čo ak mi ponúkli alternatívny let?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Ak prijmete alternatívny let a <strong>dorazíte na miesto určenia s meškaním menej ako 2-4 hodiny</strong> 
                (závisí od vzdialenosti), letecká spoločnosť nemusí platiť kompenzáciu. Ale:
                <br/><br/>
                • Ak alternatívny let meška viac → stále máte nárok na kompenzáciu<br/>
                • Môžete odmietnuť alternatívny let a požiadať o vrátenie peňazí + kompenzáciu<br/>
                • Ak vám ponúknu horšie podmienky (viac prestupov, horší čas), môžete odmietnuť
              </p>
            </details>

            <details className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Ako dlho to trvá?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                V priemere 2-4 mesiace. Niektoré letecké spoločnosti (Ryanair, Wizz Air) často odmietajú prvú žiadosť 
                a musíme ísť na súd, čo môže trvať až 12 mesiacov. Ale my to riešime za vás - vy len čakáte na peniaze.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-red-600 dark:bg-red-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Získajte svoje peniaze späť
          </h2>
          <p className="text-xl text-red-100 mb-10">
            Viac ako <strong>85% cestujúcich</strong> nikdy nepožiada o kompenzáciu pri zrušenom lete. 
            Letecké spoločnosti s tým počítajú a šetria miliardy eur ročne.
          </p>
          <a
            href="https://claimwinger.com/cancelled-flight"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-red-600 bg-white hover:bg-gray-100 transition-all shadow-xl"
          >
            <Euro className="mr-2 h-6 w-6" />
            Získať moju kompenzáciu
          </a>
          <p className="mt-6 text-red-200 text-sm">
            ✓ Bez rizika • ✓ Platba len pri úspechu • ✓ 3 minúty
          </p>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Súvisiace témy:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/sk/meskanie-letu"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Meškanie letu</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompenzácia až 600 €
              </p>
            </Link>
            <Link
              href="/sk/kalkulacka-kompenzacie"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kalkulačka kompenzácie</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vypočítajte svoju sumu
              </p>
            </Link>
            <Link
              href="/sk/blog"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-500 dark:hover:border-red-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Blog a príručky</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Všetko o právach cestujúcich
              </p>
            </Link>
          </div>
        </div>
      </section>
    </LayoutSk>
  );
}
