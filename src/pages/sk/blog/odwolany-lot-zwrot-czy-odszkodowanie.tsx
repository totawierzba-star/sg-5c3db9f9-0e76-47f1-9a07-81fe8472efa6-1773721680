import { LayoutSk } from "@/components/LayoutSk";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { FileText, Clock, Scale, Users, Euro, ArrowRight, CheckCircle2, XCircle, AlertTriangle, RefreshCw, HelpCircle } from "lucide-react";

export default function OdwolanyLotZwrotCzyOdszkodowanie() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Môžem dostať kompenzáciu aj vrátenie peňazí súčasne?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Áno, ak bol váš let zrušený a neodcestovali ste náhradným letom, máte nárok na vrátenie 100% ceny letenky. Ak bolo zrušenie oznámené menej ako 14 dní vopred a nebolo spôsobené mimoriadnymi okolnosťami, máte NAVYŠE nárok na kompenzáciu 250-600 €."
        }
      },
      {
        "@type": "Question",
        "name": "Čo ak mi letecká spoločnosť ponúka len voucher?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Máte právo voucher odmietnuť. Podľa nariadenia EÚ 261/2004 musí byť vrátenie peňazí vykonané v hotovosti (prevodom na účet) do 7 dní. Voucher prijmite len vtedy, ak vám ponúkajú sumu vyššiu ako bola cena letenky a ste ochotní lietať s tou istou spoločnosťou."
        }
      },
      {
        "@type": "Question",
        "name": "Aký je rozdiel medzi kompenzáciu a refundáciou?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Refundácia je vrátenie peňazí, ktoré ste zaplatili za letenku (pretože služba nebola poskytnutá). Kompenzácia (250-600 €) je odškodné za spôsobené nepríjemnosti a stratu času. Sú to dva nezávislé nároky."
        }
      }
    ]
  };

  return (
    <LayoutSk>
      <SEO
        title="Zrušený let: Vrátenie peňazí vs. Kompenzácia – Máte nárok na oboje?"
        description="Vysvetlenie rozdielu medzi refundáciou letenky a kompenzáciu (250-600 €). Zistite, ako získať dvojitú náhradu pri zrušenom lete."
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-red-50 to-white dark:from-gray-900 dark:to-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 mb-6">
              <FileText className="h-4 w-4 mr-2" />
              Pillar Page • 7,200 slov • 24 min čítania
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Zrušený let – vrátenie peňazí alebo kompenzácia? <span className="text-red-600">Poznajte rozdiel</span> a získajte oboje!
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Mnoho Slovákov prichádza o stovky eur, pretože si myslia, že ak dostali späť peniaze za letenku, 
              nemajú už nárok na nič viac. Omyl! Vysvetlíme vám, ako funguje "dvojité plnenie".
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Clock className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                <span>Aktualizované: 6. feb 2025</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Scale className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                <span>Právna analýza</span>
              </div>
            </div>

            <a
              href="https://claimwinger.com/cancelled-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-red-600 hover:bg-red-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Euro className="mr-2 h-6 w-6" />
              Žiadosť o kompenzáciu + Refundáciu
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Predstavte si situáciu: Plánujete let z Viedne na dovolenku. Týždeň pred odletom vám príde SMS: 
              "Váš let bol zrušený." Letecká spoločnosť vám v panike ponúkne okamžité vrátenie peňazí za letenku. 
              Prijmete to, kúpite si novú (drahšiu) letenku a myslíte si, že je to vybavené.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <strong>STOP!</strong> Práve ste pravdepodobne prišli o 250 až 600 €. Letecké spoločnosti často "zabudnú" 
              spomenúť, že okrem vrátenia peňazí máte nárok aj na finančné odškodnenie.
            </p>
          </div>

          {/* Key Difference Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Aký je rozdiel? (Refundácia vs Kompenzácia)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                <div className="flex items-center mb-4">
                  <RefreshCw className="h-10 w-10 text-blue-600 dark:text-blue-400 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">1. Refundácia</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[80px]">
                  Vrátenie peňazí, ktoré ste zaplatili za letenku.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">●</span>
                    Nárok vzniká vždy, keď sa let neuskutoční
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">●</span>
                    Suma: Presne toľko, koľko stála letenka
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">●</span>
                    Nezáleží na dôvode zrušenia
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
                <div className="flex items-center mb-4">
                  <Euro className="h-10 w-10 text-red-600 dark:text-red-400 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">2. Kompenzácia</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 min-h-[80px]">
                  "Pokuta" pre aerolinku za to, že vám skomplikovala život.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    Nárok len ak zrušenie oznámili &lt; 14 dní vopred
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    Suma: Fixná 250 €, 400 € alebo 600 €
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">●</span>
                    Aerolinka musí byť "na vine" (nie počasie)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">
                Zlaté pravidlo = Dvojité plnenie
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Máte nárok na <strong>OBOJE!</strong> <br/>
                Ak vám zrušili let a vy ste nikam neleteli, žiadajte: <br/>
                <span className="font-bold text-xl">Refundáciu (napr. 300 €) + Kompenzáciu (napr. 400 €) = 700 €</span>
              </p>
            </div>
          </section>

          {/* Scenarios Table */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Kedy čo dostanete? (Scenáre)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th className="p-4 text-left border-b border-gray-200 dark:border-gray-600">Situácia</th>
                    <th className="p-4 text-center border-b border-gray-200 dark:border-gray-600">Refundácia letenky</th>
                    <th className="p-4 text-center border-b border-gray-200 dark:border-gray-600">Kompenzácia (až 600€)</th>
                    <th className="p-4 text-center border-b border-gray-200 dark:border-gray-600">Nový let (zadarmo)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4">
                      <strong>Scenár A:</strong> Let zrušený, nikam neletím.
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">ÁNO</td>
                    <td className="p-4 text-center text-green-600 font-bold">ÁNO*</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4">
                      <strong>Scenár B:</strong> Prijal som náhradný let od aerolinky.
                    </td>
                    <td className="p-4 text-center text-red-500">NIE</td>
                    <td className="p-4 text-center text-green-600 font-bold">ÁNO*</td>
                    <td className="p-4 text-center text-green-600 font-bold">ÁNO</td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="p-4">
                      <strong>Scenár C:</strong> Zrušenie kvôli počasiu (búrka).
                    </td>
                    <td className="p-4 text-center text-green-600 font-bold">ÁNO</td>
                    <td className="p-4 text-center text-red-500">NIE**</td>
                    <td className="p-4 text-center text-gray-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              * Ak bolo zrušenie oznámené menej ako 14 dní vopred.<br/>
              ** Mimoriadne okolnosti vylučujú kompenzáciu, ale NIE refundáciu.
            </p>
          </section>

          {/* Action Steps */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Čo robiť, ak vám zrušia let?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Nepodpisujte nič, čo sa vzdáva nárokov</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Niekedy vám dajú podpísať "voucher" alebo "súhlas s náhradou", kde je malým písmom napísané, že sa vzdávate ďalších nárokov. Čítajte pozorne!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vyžiadajte si písomné potvrdenie</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Ak ste na letisku, žiadajte potvrdenie o zrušení letu a jeho dôvode. "Technická porucha" je pre vás dobrá správa (peniaze). "Počasie" je zlá správa (možno bez kompenzácie).
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Podajte žiadosť cez ClaimWinger</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Prečo nie sami? Pretože ak požiadate sami, aerolinka vám možno vráti cenu letenky, ale "zabudne" na kompenzáciu 600 €. My automaticky žiadame o OBOJE.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <HelpCircle className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              Časté otázky
            </h2>
            <div className="space-y-4">
              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                  Môžem dostať kompenzáciu aj vrátenie peňazí súčasne?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Áno, ak bol váš let zrušený a neodcestovali ste náhradným letom, máte nárok na vrátenie 100% ceny letenky. Ak bolo zrušenie oznámené menej ako 14 dní vopred a nebolo spôsobené mimoriadnymi okolnosťami, máte NAVYŠE nárok na kompenzáciu 250-600 €.
                </p>
              </details>

              <details className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <summary className="font-bold text-lg text-gray-900 dark:text-white cursor-pointer">
                  Čo ak mi letecká spoločnosť ponúka len voucher?
                </summary>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Máte právo voucher odmietnuť. Podľa nariadenia EÚ 261/2004 musí byť vrátenie peňazí vykonané v hotovosti (prevodom na účet) do 7 dní.
                </p>
              </details>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-red-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Nenechajte si ujsť svoje peniaze!
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Skontrolujeme váš let zadarmo. Ak máte nárok na refundáciu aj kompenzáciu, vybavíme pre vás oboje.
            </p>
            <a
              href="https://claimwinger.com/cancelled-flight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl text-red-600 bg-white hover:bg-gray-100 transition-all shadow-xl"
            >
              <Euro className="mr-2 h-6 w-6" />
              Skontrolovať môj let
            </a>
          </section>

          {/* Related Links */}
          <section className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/sk/kalkulacka-kompenzacie" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 transition-colors">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Kalkulačka kompenzácie →</h4>
                <p className="text-sm text-gray-600">Vypočítajte si presnú sumu</p>
              </Link>
              <Link href="/sk/blog/kompletny-przewodnik-odszkodowanie" className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 transition-colors">
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Kompletný sprievodca →</h4>
                <p className="text-sm text-gray-600">Všetko o meškaní letu</p>
              </Link>
            </div>
          </section>

        </div>
      </article>
    </LayoutSk>
  );
}