import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, AlertTriangle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasDelay3HoursPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS försenat mer än 3 timmar — dina rättigheter steg för steg"
        description="Har ditt SAS-flyg landat mer än 3 timmar för sent? Läs vår guide om hur du säkrar upp till 600 € i ersättning. Steg-för-steg instruktioner."
        url="https://lotproblem.pl/sv/blog/sas-forsenat-mer-an-3-timmar"
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
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS försenat mer än 3 timmar — dina rättigheter steg för steg
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Tiden är pengar, bokstavligen. När ditt SAS-flyg är försenat med mer än 3 timmar vid ankomst aktiveras dina rättigheter till kontantersättning enligt EU-lag. Här är exakt vad du ska göra.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Var ditt flyg mer än 3 timmar sent?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Du kan ha rätt till upp till 600 € per person. Kontrollera ditt flyg gratis på 3 minuter.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-3h-delay" target="_blank" rel="nofollow noreferrer noopener">
              Kolla ersättning gratis
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Varför just 3 timmar?</h2>
          <p>
            EU-förordning 261/2004 sätter en skarp gräns vid <strong>3 timmar</strong>. Det är skillnaden mellan att bara vara irriterad och att ha rätt till hundratals euro.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>Under 3 timmar:</strong> Ingen kontantersättning (men rätt till mat/dryck vid väntan).</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span><strong>Över 3 timmar:</strong> Rätt till 250 €, 400 € eller 600 € beroende på flygsträcka.</span>
            </li>
          </ul>
          <p className="text-sm bg-gray-100 dark:bg-gray-800 p-4 rounded-md mt-4">
            <strong>Viktigt:</strong> Tiden räknas när flygplansdörrarna öppnas vid ankomst (inte när planet landar på marken).
          </p>

          <h2>Steg-för-steg guide: Vad du ska göra</h2>

          <h3>1. Spara bevis direkt</h3>
          <p>
            När du landar, ta en skärmdump på klockan i mobilen och, om möjligt, ta ett foto på en flygplatsskärm som visar ankomsttiden. Spara ditt boardingkort (digitalt eller papper).
          </p>

          <h3>2. Fråga om orsaken</h3>
          <p>
            Fråga SAS-personalen varför flyget är försenat. Försök få det skriftligt eller spela in svaret. Om de säger "tekniskt fel" eller "brist på personal" — bingo! Då är det inte en extraordinär omständighet.
          </p>

          <h3>3. Begär mat och dryck</h3>
          <p>
            Om du väntar på flygplatsen i mer än 2 timmar ska SAS ge dig kuponger för mat och dryck. Om de inte gör det, köp själv och spara kvittona. Du kan kräva tillbaka dessa utlägg senare.
          </p>

          <h3>4. Ansök om ersättning</h3>
          <p>
            Vänta inte för länge. Du har upp till 10 år på dig i Sverige (preskriptionstid), men det är bäst att agera direkt. Använd en tjänst som <a href="https://claimwinger.com/sv" target="_blank" rel="nofollow noreferrer noopener">ClaimWinger</a> för att maximera dina chanser.
          </p>

          <h2>Hur mycket får du?</h2>
          <p>
            Beloppet beror på distansen, inte biljettpriset:
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Flygsträcka</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Exempel SAS</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Ersättning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Upp till 1 500 km</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Stockholm – Köpenhamn</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">250 €</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">1 500 – 3 500 km</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Stockholm – Barcelona</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">400 €</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Över 3 500 km</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">Stockholm – New York</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">600 €</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Undantag: När slipper SAS betala?</h2>
          <p>
            SAS behöver inte betala om förseningen orsakades av "extraordinära omständigheter". Detta inkluderar:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Extremt väder (snöstorm som stänger flygplatsen).</li>
            <li>Flygledarstrejk (ej SAS egen personal).</li>
            <li>Säkerhetshot eller politisk instabilitet.</li>
          </ul>
          <div className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
            <p className="text-sm m-0">
              <strong>Tekniska fel är INTE extraordinära!</strong> Om SAS säger att planet var trasigt, har du rätt till ersättning enligt EU-domstolens praxis.
            </p>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Clock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Var ditt flyg 3 timmar sent?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt inte SAS behålla dina pengar. Vi driver ditt krav professionellt och tar bara betalt om vi lyckas.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-3h-delay" target="_blank" rel="nofollow noreferrer noopener">
              Starta ditt ärende nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}