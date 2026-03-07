import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Megaphone, Users, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasStrikePage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS strejk och flygförsening — kan du fortfarande kräva ersättning?"
        description="Påverkas din resa av en SAS-strejk? Det är stor skillnad på pilotstrejk och flygledarstrejk. Se när du har rätt till ersättning."
        url="https://lotproblem.pl/sv/blog/sas-strajk-ersattning"
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
            <span className="text-gray-500 text-sm">• 7 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS strejk och flygförsening — när får du ersättning?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Strejker hos SAS har varit en het potatis de senaste åren. Men vad gäller egentligen? Är en strejk "force majeure" eller har du rätt till skadestånd? Svaret beror på VEM som strejkar.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Drabbad av strejk?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Om det var SAS egen personal som strejkade, är chansen stor att du ska ha pengar.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/installat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-strike" target="_blank" rel="nofollow noreferrer noopener">
              Kontrollera strejkersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vem strejkar? Det avgör allt</h2>
          <p>
            För att förstå dina rättigheter måste vi skilja på två typer av strejker. EU-domstolen har gjort en tydlig gränsdragning här.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-300 mb-3 flex items-center gap-2">
                <Check className="w-6 h-6" />
                SAS egen personal
              </h3>
              <p className="text-sm mb-2 font-bold">Ger rätt till ersättning!</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>SAS-piloter</li>
                <li>SAS-kabinpersonal</li>
                <li>SAS markpersonal (ibland)</li>
              </ul>
              <p className="text-sm mt-3">
                <strong>Varför?</strong> SAS anses ha kontroll över sina egna anställda och löneförhandlingar. En strejk här är en del av att driva företag, inte en extraordinär händelse.
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-100 dark:border-red-800">
              <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-3 flex items-center gap-2">
                <X className="w-6 h-6" />
                Utomstående personal
              </h3>
              <p className="text-sm mb-2 font-bold">Ger INTE rätt till ersättning.</p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Flygledare (ATC)</li>
                <li>Flygplatsens säkerhetspersonal</li>
                <li>Bagagehanterare (tredje part)</li>
              </ul>
              <p className="text-sm mt-3">
                <strong>Varför?</strong> Detta räknas som extraordinära omständigheter eftersom SAS inte kan påverka dessa grupper.
              </p>
            </div>
          </div>

          <h2>SAS Pilotstrejk 2022 och 2024?</h2>
          <p>
            Många resenärer drabbades av SAS-pilotstrejken sommaren 2022. Enligt EU-domstolen (mål C-28/20) är en strejk organiserad av ett fackförbund för flygbolagets personal INTE en extraordinär omständighet.
          </p>
          <p>
            Detta betyder att om ditt flyg ställdes in p.g.a. pilotstrejk hos SAS, har du rätt till kompensation på upp till 600 €, förutsatt att du inte blev informerad 14 dagar i förväg.
          </p>

          <h2>Dina rättigheter oavsett strejktyp</h2>
          <p>
            Även om strejken är "extraordinär" (t.ex. flygledarstrejk) och du inte får kontantersättning, har du <strong>alltid</strong> rätt till:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Ombokning eller återbetalning:</strong> Du ska komma fram så fort som möjligt eller få pengarna tillbaka för biljetten.</li>
            <li><strong>Omvårdnad:</strong> Mat och dryck under väntetiden.</li>
            <li><strong>Hotell:</strong> Om du måste vänta över natten ska SAS betala hotellrum och transport dit.</li>
          </ol>

          <h2>Vad ska du göra om du drabbas?</h2>
          <ul>
            <li>Spara alla kvitton på mat och hotell om SAS inte tillhandahåller det.</li>
            <li>Kräv ombokning med andra flygbolag om SAS inte kan flyga själva.</li>
            <li>Kolla orsaken noga. Ibland skyller bolag på "strejk" när det egentligen är personalbrist (vilket ger ersättning).</li>
          </ul>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Megaphone className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Ställdes ditt flyg in p.g.a. strejk?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Många tror felaktigt att strejk alltid är force majeure. Låt oss kolla om du har rätt till pengar.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-strike" target="_blank" rel="nofollow noreferrer noopener">
              Kolla strejkersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}