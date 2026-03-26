import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, AlertTriangle, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasDelayVsCancellationPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS Försening vs. Inställt flyg — Vad är skillnaden för ersättning?"
        description="Reglerna skiljer sig åt beroende på om ditt SAS-flyg var försenat eller inställt. Vi reder ut begreppen och visar hur du maximerar din ersättning."
        url="https://problemlot.com/sv/blog/sas-forsening-vs-installt-flyg"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              SAS Guide
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS Försening vs. Inställt flyg — olika regler, olika ersättning
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Ibland är gränsen hårfin. Ditt flyg skjuts upp gång på gång, tills det plötsligt får ett nytt flightnummer eller ställs in helt. Är det en försening eller ett inställt flyg? Svaret avgör dina rättigheter.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Osäker på vad som hände med ditt flyg?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vi har tillgång till historiska flygdata och ser exakt om ditt flyg klassades som försenat eller inställt.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-delay-vs-cancel" target="_blank" rel="nofollow noreferrer noopener">
              Kontrollera ditt flyg gratis
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Huvudskillnaderna i korthet</h2>
          
          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="p-4 border border-gray-200 dark:border-gray-700 w-1/3">Kriterium</th>
                  <th className="p-4 border border-gray-200 dark:border-gray-700 w-1/3 text-blue-600"><Clock className="inline mr-2 w-5 h-5"/> Försening</th>
                  <th className="p-4 border border-gray-200 dark:border-gray-700 w-1/3 text-red-600"><AlertTriangle className="inline mr-2 w-5 h-5"/> Inställt flyg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-semibold">Definition</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Samma plan avgår senare än tidtabell. Flightnumret är detsamma.</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Planerad avgång ställs in helt. Du bokas om till ett annat flyg (ofta nytt flightnummer).</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-semibold">Krav för ersättning</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Minst <strong>3 timmars</strong> försening vid ankomst till slutdestinationen.</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Du informerades <strong>mindre än 14 dagar</strong> före avgång.</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200 dark:border-gray-700 font-semibold">Rätt till återbetalning</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Endast om förseningen överstiger <strong>5 timmar</strong> och du väljer att inte resa.</td>
                  <td className="p-4 border border-gray-200 dark:border-gray-700">Ja, om du väljer att inte acceptera ombokningen.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Varför spelar det roll?</h2>
          <p>
            Det finns ett scenario där "Inställt flyg" är mycket bättre för dig än "Försening": <strong>När du får beskedet 7-13 dagar innan.</strong>
          </p>
          <p>
            Om SAS meddelar en försening 10 dagar innan resan, får du ingen ersättning (så länge du kommer fram till slut). En försening mäts bara på resdagen.
          </p>
          <p>
            Men om SAS <em>ställer in</em> flyget 10 dagar innan och bokar om dig så att du kommer fram mer än 4 timmar sent, har du rätt till full ersättning (upp till 600 €).
          </p>

          <h2>Exempel från verkligheten</h2>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Situation A: Det försenade planet</h4>
              <p className="text-sm">Ditt plan står på marken med tekniskt fel. Det lyfter till slut 4 timmar sent med samma flightnummer (SK123). Du landar 4 timmar sent.</p>
              <p className="font-bold text-green-600 mt-2">Resultat: 250-600 € i ersättning.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Situation B: Det "inställda" planet</h4>
              <p className="text-sm">Samma tekniska fel. SAS bestämmer sig för att ställa in SK123. De bokar om alla passagerare till nästa avgång (SK125) som går 4 timmar senare.</p>
              <p className="font-bold text-green-600 mt-2">Resultat: 250-600 € i ersättning.</p>
            </div>
          </div>
          <p>
            I de flesta fall på själva resdagen ger båda situationerna samma rätt till pengar. Skillnaden märks mest när beskedet kommer några dagar i förväg.
          </p>

          <h2>Vad gör jag om jag är osäker?</h2>
          <p>
            Ofta står det "Cancelled" på skärmarna på flygplatsen, men i SAS app står det "Delayed". Det kan vara förvirrande. Det viktigaste för dig är:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Sparar alla boardingkort (även för nya flyg).</li>
            <li>Anteckna när du <strong>faktiskt landade</strong> och dörrarna öppnades.</li>
            <li>Ta en skärmdump på meddelandet från SAS.</li>
          </ul>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <HelpCircle className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Låt oss reda ut begreppen</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Oavsett om det var en försening eller inställt flyg, så har du troligen rätt till pengar om du kom fram sent. Skicka in ditt ärende så analyserar vi det gratis.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-delay-vs-cancel" target="_blank" rel="nofollow noreferrer noopener">
              Kolla min ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
