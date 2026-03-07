import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Clock, AlertTriangle, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasCancelled7DaysPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS ställde in flyget mindre än 7 dagar före avgång — dina rättigheter"
        description="Inställt flyg sista veckan? Om SAS meddelar dig mindre än 7 dagar före avresa är kraven för ersättning mycket stränga. Se vad som gäller."
        url="https://lotproblem.pl/sv/blog/sas-installt-flyg-7-dagar"
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
            SAS ställde in flyget mindre än 7 dagar före avgång — hur ansöker du snabbt?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            En vecka kvar till semester och pling — ett SMS från SAS om att flyget är inställt. Panik? Nej. Om detta händer har du nästan garanterat rätt till ersättning, om inte SAS lyckas med en mirakulös ombokning.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Inställt sista veckan?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Detta räknas som en allvarlig störning. Kräv upp till 600 € nu.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-7-days" target="_blank" rel="nofollow noreferrer noopener">
              Starta ditt ärende
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Regler för mindre än 7 dagar (Sista minuten)</h2>
          <p>
            När SAS ställer in flyget med mindre än en veckas varsel, sätter EU-lagen ribban extremt högt för flygbolaget. För att slippa betala ersättning måste de erbjuda en ombokning som är <strong>nästan identisk</strong> med din ursprungliga resa.
          </p>
          <p>
            SAS slipper bara betala om det nya flyget:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Avgår max <strong>1 timme tidigare</strong> än ursprungligt flyg.</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>OCH landar max <strong>2 timmar senare</strong> än ursprungligt flyg.</span>
            </li>
          </ul>
          <p>
            Detta är ett mycket snävt fönster. I praktiken betyder det att de flesta inställda flyg sista veckan ger rätt till ersättning.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border border-red-100 dark:border-red-800">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <X className="w-6 h-6 text-red-600" />
              Exempel: SAS ställer in Köpenhamn–Paris
            </h3>
            <p className="mb-2"><strong>Besked:</strong> 3 dagar före avgång.</p>
            <p className="mb-2"><strong>Nytt flyg:</strong> Avgår 2 timmar tidigare än planerat.</p>
            <p className="mt-4 font-semibold text-green-700 dark:text-green-400">
              Resultat: Rätt till ersättning!
            </p>
            <p className="text-sm mt-1">
              Varför? Även om du kommer fram i tid, tvingades du åka mer än 1 timme tidigare än planerat. Det stör din planering, så du ska ha pengar.
            </p>
          </div>

          <h2>Extraordinära omständigheter?</h2>
          <p>
            Självklart gäller undantaget för extraordinära omständigheter även här. Om SAS ställer in p.g.a. en plötslig vulkanutbrott eller flygledarstrejk, får du ingen ersättning. Men "brist på personal" eller "tekniskt underhåll" är INTE extraordinärt.
          </p>

          <h2>Vad ska du göra nu?</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong>Acceptera inte första bästa bud:</strong> Om SAS erbjuder en voucher på 500 kr, tacka nej. Din lagliga rätt kan vara värd 4000 kr (400 €).</li>
            <li><strong>Spara mailet/SMS:et:</strong> Beviset på NÄR du fick veta om inställningen är avgörande.</li>
            <li><strong>Använd en expert:</strong> Vi på ClaimWinger vet exakt hur man argumenterar mot SAS jurister.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Clock className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fick du beskedet för sent?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt oss kontrollera om SAS är skyldiga dig pengar. Det tar 3 minuter och kostar inget att kolla.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-7-days" target="_blank" rel="nofollow noreferrer noopener">
              Kolla min ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}