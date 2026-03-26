import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Wrench, AlertTriangle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasTechnicalIssuePage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS tekniskt fel och försening — är det en extraordinär omständighet?"
        description="Skyller SAS på tekniskt fel? Läs varför detta nästan aldrig är en giltig ursäkt för att neka ersättning. Vi förklarar reglerna."
        url="https://problemlot.com/sv/blog/sas-tekniskt-fel-ersattning"
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
            SAS tekniskt fel och försening — är det en extraordinär omständighet?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            "Tyvärr är ditt flyg försenat på grund av tekniska problem." Det är en klassisk ursäkt. Men visste du att EU-domstolen har slagit fast att tekniska fel nästan aldrig befriar flygbolaget från att betala ersättning?
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Nekad p.g.a. tekniskt fel?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            95% av alla tekniska fel ger rätt till ersättning. Låt oss granska ditt fall.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-technical" target="_blank" rel="nofollow noreferrer noopener">
              Kolla om du har rätt till pengar
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vad räknas som tekniskt fel?</h2>
          <p>
            Flygplan är komplexa maskiner och saker går sönder. Det kan vara allt från problem med motorn till en trasig kaffekokare. Men för SAS är underhåll en del av den dagliga driften. Därför anses tekniska problem ligga inom flygbolagets kontroll.
          </p>

          <h3>Då får du ersättning (Vanliga fall)</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Slitna delar som måste bytas ut.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Oväntade reparationer upptäckta vid rutinkontroll.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span>Problem orsakade av bristande underhåll.</span>
            </li>
          </ul>

          <h3>Då får du INTE ersättning (Sällsynta undantag)</h3>
          <p>
            Endast om det tekniska felet beror på något helt utomstående kan det räknas som en "extraordinär omständighet":
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span>Tillverkningsfel som påverkar en hel flygplansmodell (t.ex. Boeing 737 MAX-groundingen).</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span>Skador orsakade av sabotage eller terrorism.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
              <span>Krock med fåglar (bird strike) som skadar motorn.</span>
            </li>
          </ul>

          <h2>Vad säger EU-domstolen?</h2>
          <p>
            I det kända rättsfallet <em>Wallentin-Hermann mot Alitalia</em> slogs det fast att tekniska problem som uppstår till följd av normal drift inte är extraordinära. Även om felet var oväntat och SAS gjort alla kontroller, är det deras ansvar att ha fungerande flygplan.
          </p>

          <h2>Hur svarar SAS?</h2>
          <p>
            SAS avslår ofta förstahandskrav med standardfrasen: <em>"Förseningen orsakades av en oförutsedd teknisk händelse som ligger utanför vår kontroll."</em>
          </p>
          <p>
            <strong>Tro inte på det.</strong> Det är en standardtaktik för att slippa betala.
          </p>

          <h2>Dina rättigheter vid tekniskt fel</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Ersättning:</strong> Upp till 600 € om ankomsten är försenad mer än 3 timmar.
            </li>
            <li>
              <strong>Mat och dryck:</strong> SAS ska stå för detta under väntetiden.
            </li>
            <li>
              <strong>Hotell:</strong> Om reparationen drar ut på tiden till nästa dag, ska SAS betala hotell och transport.
            </li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Wrench className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Tekniskt fel? Kräv dina pengar!</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt inte SAS komma undan med dåliga ursäkter. Vi vet hur man synar deras argument.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-technical" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende mot SAS
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
