import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle2, ShieldCheck, Banknote, Plane } from "lucide-react";

export default function HomeSk() {
  return (
    <LayoutSk>
      <SEO
        title="Odszkodowanie za meškanie letu 600€ | LotProblem.pl"
        description="Získajte až 600 € za meškanie alebo zrušenie letu. Pomáhame cestujúcim z Bratislavy, Viedne a Košíc. Žiadne poplatky vopred, platíte len pri úspechu."
      />
      
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2"></span>
            Právo EÚ vás chráni
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Meškal alebo bol zrušený <span className="text-blue-600">váš let?</span>
            <br />
            Získajte až <span className="text-blue-600">600 €</span> kompenzácie.
          </h1>
          
          <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300 mb-10">
            Pomáhame slovenským cestujúcim získať odškodnenie od leteckých spoločností.
            <br />
            <strong>Wizz Air, Ryanair, Smartwings</strong> a ďalšie. Žiadne poplatky vopred.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a 
              href="https://claimwinger.com/delayed-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 md:text-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Clock className="mr-2 h-6 w-6" />
              Meškanie letu
            </a>
            <a 
              href="https://claimwinger.com/cancelled-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 dark:border-gray-700 text-lg font-bold rounded-xl text-gray-900 dark:text-white bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 md:text-xl transition-all hover:border-blue-300 dark:hover:border-blue-700"
            >
              <Plane className="mr-2 h-6 w-6" />
              Zrušený let
            </a>
          </div>
          
          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            ✓ Priemerná výplata: 400 € • ✓ 98% úspešnosť na súde • ✓ Iba 25% provízia pri úspechu
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">3 hodiny</div>
              <div className="text-gray-600 dark:text-gray-300">Minimálne meškanie pre nárok na odškodnenie</div>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">až 600 €</div>
              <div className="text-gray-600 dark:text-gray-300">Maximálna výška kompenzácie na osobu</div>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700">
              <div className="text-4xl font-bold text-blue-600 mb-2">3 roky</div>
              <div className="text-gray-600 dark:text-gray-300">Čas na podanie žiadosti (premlčacia lehota)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Cards */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Koľko peňazí môžete získať?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Výška odškodnenia závisí od dĺžky letu, nie od ceny letenky.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 250 EUR */}
            <div className="relative group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm font-bold">
                Lety do 1 500 km
              </div>
              <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">250 €</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">Na osobu</div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Bratislava ➔ Rím</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Viedeň ➔ Londýn</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Košice ➔ Praha</span>
                </div>
              </div>
              
              <a href="https://claimwinger.com" className="block w-full text-center bg-gray-50 dark:bg-gray-700 hover:bg-blue-600 hover:text-white text-gray-900 dark:text-white font-semibold py-3 rounded-xl transition-colors">
                Skontrolovať let
              </a>
            </div>

            {/* 400 EUR */}
            <div className="relative group bg-white dark:bg-gray-800 rounded-2xl border-2 border-blue-600 p-8 shadow-xl transform scale-105 z-10">
              <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-2xl rounded-tr-xl text-sm font-bold">
                Najčastejšie
              </div>
              <div className="text-5xl font-extrabold text-blue-600 mb-4">400 €</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">Na osobu</div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Bratislava ➔ Dubaj</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Viedeň ➔ Tenerife</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Košice ➔ Hurghada</span>
                </div>
              </div>
              
              <a href="https://claimwinger.com" className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
                Žiadať 400 € teraz
              </a>
            </div>

            {/* 600 EUR */}
            <div className="relative group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm font-bold">
                Lety nad 3 500 km
              </div>
              <div className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">600 €</div>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-6">Na osobu</div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Viedeň ➔ New York</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Viedeň ➔ Bangkok</span>
                </div>
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Plane className="h-5 w-5 text-blue-500 mr-3" />
                  <span>Budapešť ➔ Toronto</span>
                </div>
              </div>
              
              <a href="https://claimwinger.com" className="block w-full text-center bg-gray-50 dark:bg-gray-700 hover:bg-blue-600 hover:text-white text-gray-900 dark:text-white font-semibold py-3 rounded-xl transition-colors">
                Skontrolovať let
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ako to funguje?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Získanie odškodnenia je jednoduchšie, než si myslíte.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-blue-600">1</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Vyplňte formulár</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Zaberie to len 3 minúty. Budete potrebovať číslo letu a dátum. Formulár je v angličtine, čo urýchľuje proces.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-blue-600">2</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">My bojujeme za vás</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Naši právnici kontaktujú leteckú spoločnosť. Ak odmietnu zaplatiť, ideme na súd. Vy nerobíte nič.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-green-600">3</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Peniaze na účet</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Keď vyhráme, pošleme peniaze priamo na váš účet (mínus naša provízia 25%). Ak nevyhráme, neplatíte nič.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Príručky pre cestujúcich
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Užitočné rady pre lety z Bratislavy, Viedne a Košíc.
              </p>
            </div>
            <Link href="/sk/blog" className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              Všetky články <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">Fundamenty</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    Kompletný sprievodca: Kedy vám patrí 600 €?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Všetko o nariadení EU 261/2004. Zistite svoje práva pri meškaní nad 3 hodiny.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/sk/blog/smartwings-odszkodowania-czarterowe" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="text-xs font-semibold text-red-600 mb-2 uppercase tracking-wider">Letecké spoločnosti</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    Smartwings a dovolenkové charterové lety
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Mešká váš let na dovolenku? Smartwings musí platiť odškodné aj pri charteroch.
                  </p>
                </div>
              </div>
            </Link>
            
            <Link href="/sk/blog/lotnisko-wieden-schwechat-poradnik" className="group">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="p-6 flex-1">
                  <div className="text-xs font-semibold text-blue-600 mb-2 uppercase tracking-wider">Letiská</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                    Letisko Viedeň (Schwechat) – sprievodca pre Slovákov
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Odlietate z Viedne? Vaše práva sú rovnaké. Čo robiť pri meškaní na Schwechate.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-8 md:hidden text-center">
            <Link href="/sk/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
              Všetky články <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Nenechajte prepadnúť svoje peniaze
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Podaním žiadosti cez medzinárodný servis ClaimWinger zvyšujete šancu na úspech. Letecké spoločnosti často ignorujú lokálne sťažnosti, ale rešpektujú veľkých hráčov.
          </p>
          <a
            href="https://claimwinger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <ShieldCheck className="mr-2 h-6 w-6" />
            Získať kompenzáciu (Formulár v EN)
          </a>
          <p className="mt-4 text-blue-200 text-sm">
            Bez rizika • Platba len pri úspechu • 2 minúty
          </p>
        </div>
      </section>
    </LayoutSk>
  );
}
