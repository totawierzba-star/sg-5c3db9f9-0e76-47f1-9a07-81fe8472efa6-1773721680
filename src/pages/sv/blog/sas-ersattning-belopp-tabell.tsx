import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Coins, ArrowRight, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasAmountsPage() {
  return (
    <LayoutSv>
      <SEO
        title="Hur mycket ersättning från SAS? Tabell 250€, 400€, 600€"
        description="Osäker på hur mycket du kan få? Se vår enkla tabell över ersättningsnivåer för SAS-flyg beroende på distans. Upp till 600 euro per person."
        url="https://lotproblem.pl/sv/blog/sas-ersattning-belopp-tabell"
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
            <span className="text-gray-500 text-sm">• 4 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Hur mycket ersättning kan du kräva från SAS?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Ersättningen för försenade eller inställda flyg är inte baserad på biljettpriset. Den baseras strikt på flygsträckan. Här reder vi ut exakt hur mycket pengar du har rätt till.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Vill du veta exakt belopp för ditt flyg?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vår kalkylator räknar ut avståndet och din exakta ersättning på sekunder.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-amounts" target="_blank" rel="nofollow noreferrer noopener">
              Beräkna min ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Ersättningstabell SAS (EU 261/2004)</h2>
          <p>
            Nedan ser du de tre ersättningsnivåerna som gäller för alla flygningar med SAS (och andra EU-flygbolag).
          </p>

          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm my-8">
            <table className="w-full text-left border-collapse bg-white dark:bg-gray-800">
              <thead className="bg-gray-100 dark:bg-gray-900">
                <tr>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Flygsträcka</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700">Exempelrutter från Sverige</th>
                  <th className="p-4 border-b border-gray-200 dark:border-gray-700 text-right">Ersättning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-blue-500" /> Upp till 1 500 km
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-sm">
                    Stockholm ↔ Oslo<br/>
                    Stockholm ↔ Berlin<br/>
                    Göteborg ↔ London
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-right font-bold text-lg text-green-600">
                    250 €
                    <span className="block text-xs font-normal text-gray-500">(ca 2 900 kr)</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-purple-500" /> 1 500 – 3 500 km
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-sm">
                    Stockholm ↔ Barcelona<br/>
                    Stockholm ↔ Rom<br/>
                    Köpenhamn ↔ Aten
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-right font-bold text-lg text-green-600">
                    400 €
                    <span className="block text-xs font-normal text-gray-500">(ca 4 600 kr)</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 font-semibold">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-red-500" /> Över 3 500 km
                    </div>
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-sm">
                    Stockholm ↔ New York<br/>
                    Köpenhamn ↔ Tokyo<br/>
                    Stockholm ↔ Miami
                  </td>
                  <td className="p-4 border-b border-gray-200 dark:border-gray-700 text-right font-bold text-lg text-green-600">
                    600 €
                    <span className="block text-xs font-normal text-gray-500">(ca 6 900 kr)</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Viktiga detaljer</h2>
          <ul>
            <li><strong>Per passagerare:</strong> Beloppen gäller per person. En familj på fyra som flyger till New York kan alltså ha rätt till totalt 2 400 € (ca 27 000 kr).</li>
            <li><strong>Oavsett biljettpris:</strong> Även om du köpte en lågprisbiljett för 500 kr, har du rätt till 250 € om flyget blir kraftigt försenat.</li>
            <li><strong>Spädbarn:</strong> Om du betalade en avgift för spädbarnet (även liten) har barnet ofta också rätt till ersättning. Om barnet reste helt gratis kan det vara svårare.</li>
          </ul>

          <h2>Undantaget: 50% minskning</h2>
          <p>
            SAS har rätt att minska ersättningen med 50% i vissa specifika fall av ombokning eller försening, om den nya ankomsttiden inte överskrider den ursprungliga med:
          </p>
          <ul className="list-disc pl-6">
            <li>2 timmar (för flyg upp till 1 500 km)</li>
            <li>3 timmar (för flyg inom EU över 1 500 km och övriga mellan 1 500–3 500 km)</li>
            <li>4 timmar (för flyg över 3 500 km)</li>
          </ul>
          <p>
            Detta är dock ganska tekniskt. I praktiken är det enklast att söka full ersättning och låta flygbolaget bevisa om de har rätt till rabatt.
          </p>

        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Coins className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Få ut maxbeloppet</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi ser till att SAS inte betalar ut för lite. Vi vet exakt hur distansen ska beräknas ("Great Circle Distance") för att maximera din ersättning.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 font-bold" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-amounts" target="_blank" rel="nofollow noreferrer noopener">
              Kräv din ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}