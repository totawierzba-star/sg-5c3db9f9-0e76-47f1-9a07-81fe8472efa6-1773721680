import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, CalendarDays, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasScheduleChangePage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS tidsändring utan förvarning — när har du rätt till ersättning?"
        description="Ändrade SAS tiden för ditt flyg? Om det skedde mindre än 14 dagar före avgång kan det räknas som inställt flyg med rätt till 600 €."
        url="https://lotproblem.pl/sv/blog/sas-tidsandring"
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
            SAS ändrade tiden för flyget — dina rättigheter
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Fick du ett mail om att ditt flyg har "flyttats" eller fått en "ny tidtabell"? Se upp! Om ändringen är stor och sker nära inpå resan, räknas det juridiskt som ett inställt flyg.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Ny flygtid?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Om ändringen var mer än 1 timme kan du ha rätt till pengar.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-schedule-change" target="_blank" rel="nofollow noreferrer noopener">
              Kontrollera din rätt till ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>När räknas en tidsändring som inställt flyg?</h2>
          <p>
            EU-domstolen har klargjort att en tidtabellsändring som gör att flyget avgår <strong>mer än 1 timme tidigare</strong> än ursprungligen bokat, ska likställas med ett inställt flyg.
          </p>
          <p>
            Detta betyder att du har rätt till ersättning (250-600 €) om:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <span>Du informerades <strong>mindre än 14 dagar</strong> före avgång.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
              <span>OCH den nya tiden innebär en betydande förändring (särskilt om du måste åka mycket tidigare).</span>
            </li>
          </ul>

          <h2>Dina alternativ vid tidsändring</h2>
          <p>
            Oavsett när ändringen sker (även månader i förväg), om den nya tiden inte passar dig, har du rätt att:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Tacka nej och få full återbetalning</strong> av biljetten.</li>
            <li><strong>Kräva ombokning</strong> till en annan tid/dag som passar dig bättre (utan extra kostnad).</li>
          </ol>
          <p>
            Om ändringen sker "sista veckan" (mindre än 7 dagar före), är kraven ännu strängare. Om du kommer fram mer än 2 timmar senare än planerat, ska du ha ersättning.
          </p>

          <h2>Exempel</h2>
          <p>
            Du bokade SAS till London kl 10:00. 
            <br />
            <strong>Scenario A:</strong> 5 dagar före resan ändrar SAS tiden till 08:30 (1,5h tidigare).
            <br />
            <strong>Rättighet:</strong> Eftersom det är mer än 1 timme tidigare och sent besked &rarr; Rätt till ersättning + du kan avboka och få pengarna åter.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <CalendarDays className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ändrade SAS dina planer?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Tidtabellsändringar är ett vanligt sätt för flygbolag att "ställa in" utan att säga det. Vi ser igenom det.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-schedule-change" target="_blank" rel="nofollow noreferrer noopener">
              Kräv ersättning nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}