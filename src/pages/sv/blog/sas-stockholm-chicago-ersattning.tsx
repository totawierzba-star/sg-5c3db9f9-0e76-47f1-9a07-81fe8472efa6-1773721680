import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Globe, Building2, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasStockholmChicagoPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS Stockholm–Chicago (ORD) — transatlantisk guide"
        description="Flygförsening till Chicago med SAS? Du kan ha rätt till 600 € i ersättning. Läs vår guide om dina rättigheter på USA-flygningar."
        url="https://lotproblem.pl/sv/blog/sas-stockholm-chicago-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              SAS Rutter
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Försenad till Chicago? SAS är skyldiga dig upp till 600 €
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Rutten Stockholm (ARN) – Chicago O'Hare (ORD) är en lång resa. Om SAS ställer till det, ska du ha rejält betalt. Här är allt du behöver veta.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            600 € väntar på dig
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Chicago-rutten är över 3500 km. Det betyder maxbeloppet i ersättning.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-chicago" target="_blank" rel="nofollow noreferrer noopener">
              Kolla om du får 600 €
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Varför Chicago-rutten ger maximal ersättning</h2>
          <p>
            Avståndet mellan Arlanda och Chicago O'Hare är cirka 6 900 km. Enligt EU-förordning 261/2004 faller alla flygningar över 3 500 km (utanför EU) under den högsta ersättningsnivån.
          </p>
          <ul>
            <li><strong>Belopp:</strong> 600 € per passagerare.</li>
            <li><strong>Krav:</strong> Ankomstförsening på minst 4 timmar (eller inställt flyg).</li>
          </ul>

          <h2>Vad gäller vid mellanlandning i Köpenhamn?</h2>
          <p>
            Många svenskar flyger Stockholm &rarr; Köpenhamn &rarr; Chicago.
            <br />
            Om första flyget till Köpenhamn blir försenat så att du missar anslutningen till Chicago, har du rätt till 600 €. Detta gäller även om flyget till Köpenhamn bara var lite sent, men tillräckligt för att du skulle missa nästa.
          </p>

          <h2>Tekniska problem på långdistansplan</h2>
          <p>
            SAS använder ofta sina Airbus A330 eller A350 till Chicago. Om ett plan får "tekniskt fel" och måste repareras, är det <strong>inte</strong> en extraordinär omständighet. Det är SAS ansvar att ha fungerande flygplan. Du ska ha ersättning.
          </p>

          <h2>Vad gör jag om jag blir fast i Chicago?</h2>
          <p>
            Om flyget hem ställs in eller blir kraftigt försenat:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>SAS måste betala hotell och mat i USA.</li>
            <li>Spara alla kvitton! (Taxi, mat, hotell).</li>
            <li>Du har rätt till 600 € i kompensation utöver kostnadstäckningen.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Building2 className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Problem med Chicago-resan?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi hjälper dig att hämta hem dina 600 €. Enkelt och riskfritt.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-chicago" target="_blank" rel="nofollow noreferrer noopener">
              Få ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}