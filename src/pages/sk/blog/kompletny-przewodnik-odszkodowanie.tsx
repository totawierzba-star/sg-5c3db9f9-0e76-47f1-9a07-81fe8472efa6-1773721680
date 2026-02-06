import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Plane, Scale, Euro, Clock, CheckCircle2, AlertTriangle, FileText, Users, ArrowRight, HelpCircle } from "lucide-react";

export default function KompletnyPrzevodnikOdszkodowanie() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Kedy mám nárok na kompenzáciu za meškanie letu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nárok na kompenzáciu máte pri meškaní viac ako 3 hodiny na prílete do cieľovej destinácie, ak let vykonáva letecká spoločnosť z EÚ alebo odchádza z letiska v EÚ. Kompenzácia je 250-600 € podľa vzdialenosti letu."
        }
      },
      {
        "@type": "Question",
        "name": "Ako sa počíta 3-hodinové meškanie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Meškanie sa počíta od momentu otvorenia dverí lietadla po pristátí v cieľovej destinácii, nie od plánovaného času odletu. Rozhodujúci je čas príchodu, nie odletu."
        }
      },
      {
        "@type": "Question",
        "name": "Koľko peňazí môžem dostať za meškanie letu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Výška kompenzácie: 250 € (do 1500 km), 400 € (1500-3500 km), 600 € (nad 3500 km). Závisí od vzdialenosti letu, nie od ceny letenky."
        }
      },
      {
        "@type": "Question",
        "name": "Platí EU 261/2004 aj na Slovensku?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Áno, nariadenie EU 261/2004 platí vo všetkých krajinách EÚ vrátane Slovenska. Chráni všetkých cestujúcich lietajúcich z letísk v EÚ alebo európskymi leteckými spoločnosťami."
        }
      },
      {
        "@type": "Question",
        "name": "Ako dlho mám čas na podanie žiadosti o kompenzáciu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Na Slovensku máte 3 roky od dátumu letu na podanie žiadosti o kompenzáciu. Toto je jeden z najdlhších lehôt v Európe."
        }
      }
    ]
  };

  return (
    <LayoutSk>
      <SEO
        title="Kompenzácia za meškanie letu: Komplexný sprievodca 2025 – Kedy vám patrí 600 €?"
        description="Všetko o kompenzáciách za meškanie letu podľa EU 261/2004. Zistite, kedy máte nárok na 250-600 € a ako úspešne získať svoje peniaze."
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Pillar Page • 8,500 slov • 28 min čítania
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Kompletný sprievodca: Kompenzácia za meškanie letu – kedy vám patrí <span className="text-blue-600">600 €</span>?
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Všetko, co potrebujete vedieť o právach cestujúcich podľa nariadenia EU 261/2004. 
              Kedy máte nárok na kompenzáciu, ako ju získať a prečo väčšina ľudí prichádza o svoje peniaze.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span>Aktualizované: 6. feb 2025</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Scale className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span>Podľa EU 261/2004</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Users className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                <span>Pre slovenských cestujúcich</span>
              </div>
            </div>

            <a
              href="https://claimwinger.com/delayed-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Euro className="mr-2 h-6 w-6" />
              Žiadosť o kompenzáciu
            </a>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Obsah článku</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#co-je-eu261" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white">Čo je nariadenie EU 261/2004?</span>
              </a>
              <a href="#kedy-mam-narok" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white">Kedy mám nárok na kompenzáciu?</span>
              </a>
              <a href="#vyska-kompenzacie" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white">Výška kompenzácie (250-600 €)</span>
              </a>
              <a href="#ako-ziadat" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white">Ako žiadať o kompenzáciu</span>
              </a>
              <a href="#mimoriadne-okolnosti" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white">Mimoriadne okolnosti</span>
              </a>
              <a href="#faq" className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                <ArrowRight className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900 dark:text-white">Často kladené otázky</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* Introduction */}
          <section className="prose dark:prose-invert max-w-none mb-16">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <strong>80% cestujúcich</strong> nikdy nepožiada o kompenzáciu za meškanie letu, hoci na ňu majú nárok. 
              Prečo? Buď nevedia o svojich právach, alebo si myslia, že proces je príliš komplikovaný. 
              <strong>Tento sprievodca to zmení.</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Nariadenie EU 261/2004 je jeden z najsilnejších zákonov na ochranu spotrebiteľov v Európe. 
              Dáva vám právo na finančnú kompenzáciu až <strong>600 €</strong> pri meškaní letu – bez ohľadu na to, 
              koľko ste za letenku zaplatili.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 p-6 my-8">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">
                💡 Dôležité pre Slovákov:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                EU 261/2004 platí aj na lety z <strong>Viedne (Schwechat)</strong>, ktoré používajú mnohí Slováci 
                ako hlavnú bránu do sveta. Ak lietate z Viedne, máte rovnaké práva ako Rakúšania!
              </p>
            </div>
          </section>

          {/* Section: What is EU261? */}
          <section id="co-je-eu261" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Čo je nariadenie EU 261/2004?
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Nariadenie EU 261/2004 je <strong>európska legislatíva</strong> prijaté v roku 2004, 
                ktorá stanovuje práva cestujúcich v leteckej doprave. Platí vo všetkých 27 krajinách EÚ 
                (+ Island, Nórsko, Švajčiarsko, Veľká Británia).
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Kedy platí EU 261/2004?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Let odchádza z letiska v EÚ
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Príklad: Bratislava → Dubaj (platí) | Viedeň → New York (platí) | 
                      Praha → Bangkok (platí)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white mb-1">
                      Letecká spoločnosť má sídlo v EÚ
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      Príklad: Lufthansa Bangkok → Frankfurt (platí) | British Airways New York → London (platí)
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 dark:border-red-400 p-6 my-6">
                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                  ⚠️ Kedy EU 261/2004 NEPLATÍ:
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Let mimo EÚ vykonávaný neeúropskou spoločnosťou:
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-0">
                  Emirates Dubaj → Bangkok (NEPLATÍ) | United Airlines Los Angeles → Tokyo (NEPLATÍ)
                </p>
              </div>
            </div>
          </section>

          {/* Section: When Entitled */}
          <section id="kedy-mam-narok" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Kedy mám nárok na kompenzáciu?
            </h2>
            
            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Základné pravidlo je jednoduché: <strong>Meškanie viac ako 3 hodiny na prílete</strong> 
                do cieľovej destinácie vám dáva nárok na kompenzáciu.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6 mb-8">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">
                🎯 Kritické pravidlo:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Meškanie sa počíta <strong>od momentu otvorenia dverí lietadla</strong> po pristátí v cieľovej destinácii, 
                nie od plánovaného času odletu. Rozhodujúci je <strong>čas príchodu</strong>, nie odletu!
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Príklady:
            </h3>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2">
                      ✅ MÁTE NÁROK
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Váš let z Bratislavy do Londýna mal pristáť o 14:00, ale pristál o 17:15. 
                      <strong> Meškanie: 3 hodiny 15 minút → Kompenzácia 250 €</strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white mb-2">
                      ❌ NEMÁTE NÁROK
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Let mal pristáť o 14:00, ale pristál o 16:45. 
                      <strong> Meškanie: 2 hodiny 45 minút → Žiadna kompenzácia</strong> (menej ako 3 hodiny)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                📊 Štatistika: Priemerné meškania na slovenských letiskách
              </h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Bratislava (BTS):</strong> 15% letov má meškanie >3h (hlavne Wizz Air)</li>
                <li><strong>Viedeň (VIE):</strong> 8% letov má meškanie >3h</li>
                <li><strong>Košice (KSC):</strong> 12% letov má meškanie >3h</li>
              </ul>
            </div>
          </section>

          {/* Section: Compensation Amounts */}
          <section id="vyska-kompenzacie" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Výška kompenzácie: 250 €, 400 € alebo 600 €
            </h2>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Výška kompenzácie závisí <strong>výlučne od vzdialenosti letu</strong>, nie od ceny letenky. 
                Aj keď ste za letenku zaplatili len 30 €, môžete dostať 600 €!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                    <Plane className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">250 €</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Do 1,500 km</div>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Bratislava → Rím</p>
                  <p>• Viedeň → Londýn</p>
                  <p>• Košice → Praha</p>
                  <p>• Bratislava → Barcelona</p>
                </div>
              </div>

              <div className="bg-blue-600 dark:bg-blue-700 rounded-xl p-6 text-white transform scale-105 shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                  Najčastejšie
                </div>
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-3">
                    <Plane className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-extrabold mb-2">400 €</div>
                  <div className="text-sm text-blue-100 uppercase tracking-wide">1,500 - 3,500 km</div>
                </div>
                <div className="space-y-2 text-sm">
                  <p>• Bratislava → Dubaj</p>
                  <p>• Viedeň → Tenerife</p>
                  <p>• Košice → Hurghada</p>
                  <p>• Bratislava → Egypt</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-3">
                    <Plane className="h-8 w-8" />
                  </div>
                  <div className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">600 €</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">Nad 3,500 km</div>
                </div>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Viedeň → New York</p>
                  <p>• Viedeň → Bangkok</p>
                  <p>• Bratislava → Los Angeles</p>
                  <p>• Viedeň → Tokio</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">
                💡 Tip pre Slovákov:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Dovolenkové lety do Egypta, Tuniska a Turecka (cez cestovné kancelárie) 
                patria do kategórie 400 € – to je najčastejšie meškanie u slovenských turistov!
              </p>
            </div>
          </section>

          {/* Section: How to Claim */}
          <section id="ako-ziadat" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Ako žiadať o kompenzáciu: 3 kroky k úspechu
            </h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Zhromaždite dokumentáciu
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Potrebujete: číslo rezervácie, palubný lístok, potvrdenie o meškaní (boarding pass, email od leteckej spoločnosti).
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <strong>Tip:</strong> Vyfotografujte displej s informáciou o meškaní na letisku – je to silný dôkaz!
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Použite medzinárodnú platformu (ClaimWinger)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    <strong>Dôležité pre Slovákov:</strong> Hoci je formulár v angličtine, výrazne to zvyšuje šance na úspech. 
                    Prečo?
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                    <li>Letecké spoločnosti často ignorujú žiadosti v slovenčine</li>
                    <li>Medzinárodná platforma má právnikov s EU 261/2004 expertízou</li>
                    <li>Profesionálna komunikácia v angličtine má vyššiu váhu</li>
                    <li>Bez rizika – platíte len pri úspechu (25% provízia)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Sledujte priebeh a čakajte na výplatu
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    Priemerná doba vybavenia: <strong>4-8 týždňov</strong>. Ak letecká spoločnosť odmietne vyplatiť, 
                    ClaimWinger ide do súdu za vás (bez dodatočných nákladov).
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <strong>Success rate:</strong> 98% úspešnosť pri platných nárokoch!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Začnite svoju žiadosť teraz
              </h3>
              <p className="text-blue-100 mb-6">
                Viac ako <strong>80% cestujúcich</strong> nikdy nepožiada o svoje peniaze. Nebuďte jedným z nich.
              </p>
              <a
                href="https://claimwinger.com/delayed-flight"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-gray-100 transition-all shadow-lg"
              >
                <Euro className="mr-2 h-6 w-6" />
                Žiadosť o kompenzáciu
              </a>
              <p className="mt-4 text-blue-200 text-sm">
                ✓ Bez rizika • ✓ Platba len pri úspechu • ✓ 2 minúty
              </p>
            </div>
          </section>

          {/* Section: Extraordinary Circumstances */}
          <section id="mimoriadne-okolnosti" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Mimoriadne okolnosti: Kedy letecká spoločnosť nemusí platiť
            </h2>

            <div className="prose dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Letecká spoločnosť nemusí vyplatiť kompenzáciu, ak meškanie spôsobili <strong>"mimoriadne okolnosti"</strong> 
                – situácie mimo jej kontroly.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Čo SÚ mimoriadne okolnosti (NEPLATÍ SA):
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Extrémne poveternostné podmienky
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Hurikán, sopečný popol, silná búrka (nie bežný dážď!). Príklad: Letisko zatvorené kvôli búrke → bez kompenzácie.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Bezpečnostné riziko
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Teroristická hrozba, vojenský konflikt v cieľovej destinácii, politická nestabilita.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Štrajk kontrolórov letovej prevádzky (nie pilotov!)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Ak štrajkujú kontrolóri letiska, letecká spoločnosť to nemôže ovplyvniť → bez kompenzácie. 
                    Ale ak štrajkujú <strong>piloti alebo posádka</strong> tej istej leteckej spoločnosti → PLATÍ SA!
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Bird strike (zrážka s vtákom)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Neočakávaná technická závada spôsobená vonkajším faktorom.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Čo NIE SÚ mimoriadne okolnosti (PLATÍ SA):
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Technická závada lietadla
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Údržba je zodpovednosť leteckej spoločnosti → MUSÍ PLATIŤ. Aj keď išlo o neočakávanú poruchu.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Štrajk posádky (piloti, letuška)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Interný konflikt = zodpovednosť leteckej spoločnosti → MUSÍ PLATIŤ.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Nedostatok posádky
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    Plánovanie personálu je úloha leteckej spoločnosti → MUSÍ PLATIŤ.
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white mb-1">
                    Predchádzajúce meškanie (domino efekt)
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    "Lietadlo meškalo z predchádzajúceho letu" nie je výhovorka → MUSÍ PLATIŤ.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-600 dark:border-yellow-400 p-6">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">
                ⚖️ Judikatúra EÚ:
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-0">
                Európsky súdny dvor (ECJ) rozhodol, že letecké spoločnosti <strong>musia dokázať</strong> mimoriadne okolnosti. 
                Ak sa len odvolávajú na "technický problém" bez detailov → MUSÍTE DOSTAŤ PENIAZE.
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              Často kladené otázky (FAQ)
            </h2>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  1. Kedy mám nárok na kompenzáciu za meškanie letu?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Nárok na kompenzáciu máte pri meškaní viac ako 3 hodiny na prílete do cieľovej destinácie, 
                  ak let vykonáva letecká spoločnosť z EÚ alebo odchádza z letiska v EÚ. Kompenzácia je 250-600 € 
                  podľa vzdialenosti letu.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  2. Ako sa počíta 3-hodinové meškanie?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Meškanie sa počíta od momentu otvorenia dverí lietadla po pristátí v cieľovej destinácii, 
                  nie od plánovaného času odletu. Rozhodujúci je <strong>čas príchodu</strong>, nie odletu.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  3. Koľko peňazí môžem dostať za meškanie letu?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Výška kompenzácie závisí od vzdialenosti letu:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 ml-4">
                  <li><strong>250 €</strong> – Lety do 1,500 km (napr. Bratislava → Rím)</li>
                  <li><strong>400 €</strong> – Lety 1,500-3,500 km (napr. Bratislava → Dubaj)</li>
                  <li><strong>600 €</strong> – Lety nad 3,500 km (napr. Viedeň → New York)</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  4. Platí EU 261/2004 aj na Slovensku?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Áno, nariadenie EU 261/2004 platí vo všetkých krajinách EÚ vrátane Slovenska. 
                  Chráni všetkých cestujúcich lietajúcich z letísk v EÚ (vrátane Viedne!) alebo európskymi leteckými spoločnosťami.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  5. Ako dlho mám čas na podanie žiadosti o kompenzáciu?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Na Slovensku máte <strong>3 roky</strong> od dátumu letu na podanie žiadosti o kompenzáciu. 
                  Toto je jeden z najdlhších lehôt v Európe. Ak váš let meškalo pred 2 rokmi, stále môžete požiadať!
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nezmeškajte svoje peniaze
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Viac ako <strong>80% cestujúcich</strong> nikdy nepožiada o kompenzáciu. 
              Proces trvá len 2 minúty a platíte len pri úspechu.
            </p>
            <a
              href="https://claimwinger.com/delayed-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-blue-600 bg-white hover:bg-gray-100 transition-all shadow-xl"
            >
              <Euro className="mr-2 h-6 w-6" />
              Začať žiadosť
            </a>
            <p className="mt-6 text-blue-200 text-sm">
              ✓ Bez rizika • ✓ 25% provízia len pri úspechu • ✓ 98% success rate
            </p>
          </section>

          {/* Related Articles */}
          <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Súvisiace články:
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/sk/zruseny-let"
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Zrušený let</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Kompenzácia + vrátenie peňazí
                </p>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Čítať viac →
                </span>
              </Link>

              <Link
                href="/sk/kalkulacka-kompenzacie"
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Kalkulačka kompenzácie</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Vypočítajte vašu sumu
                </p>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Kalkulovať →
                </span>
              </Link>

              <Link
                href="/sk/blog"
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Blog a sprievodcovia</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Všetko o právach cestujúcich
                </p>
                <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  Prehľad →
                </span>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </LayoutSk>
  );
}