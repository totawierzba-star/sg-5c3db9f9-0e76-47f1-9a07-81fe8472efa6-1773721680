import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Clock, CheckCircle2, XCircle, AlertTriangle, Plane, Euro, Calendar, ArrowRight } from "lucide-react";

export default function MeskanieLetu() {
  return (
    <LayoutSk>
      <SEO
        title="Meškanie letu – Kompenzácia až 600 € | Vaše práva"
        description="Meškal vám let viac ako 3 hodiny? Máte nárok na kompenzáciu až 600 €. Zistite svoje práva podľa nariadenia EU 261/2004."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-16 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
            <Clock className="h-4 w-4 mr-2" />
            Nariadenie EU 261/2004
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            Meškanie letu – Kompenzácia až <span className="text-blue-600">600 €</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Ak váš let priletel do cieľa s meškaním viac ako 3 hodiny, máte nárok na finančnú kompenzáciu. 
            Nezáleží na tom, koľko ste zaplatili za letenku.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://claimwinger.com/delayed-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
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
                  <span className="text-gray-700 dark:text-gray-300">Meškanie <strong>viac ako 3 hodiny</strong> pri prílete do cieľa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Let vykonáva letecká spoločnosť z EÚ alebo odchádza z letiska v EÚ</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Meškanie spôsobené technickými problémami alebo nedostatkom posádky</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 dark:text-green-400 mr-3 text-xl">✓</span>
                  <span className="text-gray-700 dark:text-gray-300">Check-in ste urobili včas a neodmietli vám nástup</span>
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
                  <span className="text-gray-700 dark:text-gray-300">Meškanie kratšie ako 3 hodiny</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Mimoriadne okolnosti (búrka, štrajk leteckej kontroly, pandemické zákazy)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Prišli ste neskoro na check-in</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 dark:text-red-400 mr-3 text-xl">✗</span>
                  <span className="text-gray-700 dark:text-gray-300">Let mimo EÚ leteckou spoločnosťou mimo EÚ (napr. Emirates z Dubaja do USA)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Rule */}
      <section className="py-16 bg-yellow-50 dark:bg-yellow-900/10 border-y border-yellow-200 dark:border-yellow-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="h-10 w-10 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                ⚠️ Kritické pravidlo: Počíta sa čas PRÍLETU
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Meškanie sa meria podľa času, kedy lietadlo <strong>otvorilo dvere po pristátí</strong> v cieľovej destinácii, 
                nie podľa času odletu.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border-2 border-yellow-300 dark:border-yellow-700">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Príklad:</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• <strong>Odlet</strong> z Bratislavy: 10:00 (meškanie 2 hodiny)</li>
                  <li>• <strong>Prílet</strong> do Londýna: 13:30 (meškanie 3,5 hodiny)</li>
                  <li className="text-green-600 dark:text-green-400 font-semibold">→ Máte nárok na kompenzáciu! ✓</li>
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">250 €</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Do 1 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Bratislava → Rím</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Viedeň → Londýn</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Košice → Praha</span>
                </div>
              </div>
            </div>

            {/* 400 EUR */}
            <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white transform scale-105 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                Najčastejšie
              </div>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold mb-2">400 €</div>
                <div className="text-sm text-blue-100 uppercase tracking-wide">1 500 - 3 500 km</div>
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
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                  <Plane className="h-8 w-8" />
                </div>
                <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2">600 €</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Nad 3 500 km</div>
              </div>
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Viedeň → New York</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Viedeň → Bangkok</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="text-blue-500 mr-2">✈</span>
                  <span>Budapešť → Toronto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Claim */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Ako získať kompenzáciu?
          </h2>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
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
                  href="https://claimwinger.com/delayed-flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                >
                  Vyplniť formulár
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
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
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Často kladené otázky
          </h2>

          <div className="space-y-6">
            <details className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Musím platiť vopred?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Nie. Platíte len vtedy, keď vyhráme. Provízia je 25% + DPH z vyplatenej sumy. 
                Ak nevyhráme, neplatíte nič.
              </p>
            </details>

            <details className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Ako dlho to trvá?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                V priemere 2-4 mesiace. Niektoré letecké spoločnosti (Ryanair, Wizz Air) často odmietajú prvú žiadosť 
                a musíme ísť na súd, čo môže trvať až 12 mesiacov.
              </p>
            </details>

            <details className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Môžem získať kompenzáciu aj za starý let?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Áno. Na Slovensku máte na podanie žiadosti <strong>3 roky</strong> od dátumu letu. 
                Ak bol váš let meškajúci v roku 2023, môžete žiadať až do konca roku 2026.
              </p>
            </details>

            <details className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Čo ak letecká spoločnosť ponúka voucher?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                <strong>Neakceptujte voucher!</strong> Máte právo na finančnú kompenzáciu v hotovosti (na účet). 
                Voucher je len pokus leteckej spoločnosti ušetriť peniaze. Vždy trvajte na hotovosti.
              </p>
            </details>

            <details className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
              <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                Platí kompenzácia aj pre deti?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Áno! Každý cestujúci (vrátane detí a dojčiat s vlastným sedadlom) má nárok na plnú kompenzáciu. 
                Ak letela rodina 4 osôb a let meškal 4 hodiny na vzdialenosť 2 500 km, každý dostane 400 €, 
                t.j. spolu <strong>1 600 €</strong>.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nezmeškajte svoje peniaze
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Viac ako <strong>80% cestujúcich</strong> nikdy nepožiada o kompenzáciu, hoci majú na ňu nárok. 
            Letecké spoločnosti počítajú s vašou nevedomosťou.
          </p>
          <a
            href="https://claimwinger.com/delayed-flight"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-gray-100 transition-all shadow-xl"
          >
            <Euro className="mr-2 h-6 w-6" />
            Získať moju kompenzáciu
          </a>
          <p className="mt-6 text-blue-200 text-sm">
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
              href="/sk/zruseny-let"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Zrušený let</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kompenzácia + vrátenie peňazí
              </p>
            </Link>
            <Link
              href="/sk/kalkulacka-kompenzacie"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Kalkulačka kompenzácie</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vypočítajte svoju sumu
              </p>
            </Link>
            <Link
              href="/sk/blog"
              className="p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
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