import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Plane, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasMissedConnectionPage() {
  return (
    <LayoutSv>
      <SEO
        title="Missat anslutningsflyg på grund av SAS-försening — dina rättigheter"
        description="Missade du ditt nästa flyg för att SAS var sena? Du kan ha rätt till upp till 600 €. Läs om reglerna för anslutningsflyg."
        url="https://lotproblem.pl/sv/blog/sas-missat-anslutningsflyg"
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
            Missat anslutningsflyg på grund av SAS-försening — vem betalar?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Du landar 20 minuter sent, springer genom terminalen, men gaten är redan stängd. Ditt anslutningsflyg har gått. Om hela resan var bokad på en biljett med SAS, är det deras ansvar att fixa det – och betala dig.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Missade du flyget?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Om du kom fram mer än 3 timmar sent till slutdestinationen kan du få 600 €.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-missed-connection" target="_blank" rel="nofollow noreferrer noopener">
              Kolla om du får ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>En biljett eller två separata?</h2>
          <p>
            Detta är den absolut viktigaste frågan. För att ha rätt till ersättning måste dina flyg vara bokade på <strong>samma bokningsnummer (PNR)</strong>.
          </p>
          <ul>
            <li><strong>Genomgående biljett:</strong> SAS ansvarar för hela resan. Om första flyget är sent så att du missar nästa, måste de boka om dig gratis och ge dig mat/hotell.</li>
            <li><strong>Separata biljetter:</strong> Om du bokade SAS till Köpenhamn och sedan ett annat flyg vidare själv (två olika bokningar), tar du risken själv. SAS ansvarar bara för att ta dig till Köpenhamn.</li>
          </ul>

          <h2>Ersättning vid missad anslutning</h2>
          <p>
            Reglerna är enkla men kraftfulla. Om en mindre försening på första flyget (t.ex. 40 minuter) gör att du missar anslutningen och kommer fram till din <strong>slutdestination</strong> mer än 3 timmar för sent, har du rätt till ersättning för HELA resan.
          </p>
          <p>
            Exempel:
            <br />
            Resa Stockholm (ARN) &rarr; Köpenhamn (CPH) &rarr; New York (EWR).
            <br />
            Flyget till CPH är 45 minuter sent. Du missar flyget till EWR. SAS bokar om dig till nästa flyg som går 6 timmar senare.
            <br />
            <strong>Resultat:</strong> Du får 600 € i ersättning, eftersom förseningen vid slutmålet (New York) var över 3 timmar.
          </p>

          <h2>Vad ska SAS göra direkt?</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li><strong>Boka om dig:</strong> Till nästa tillgängliga flyg (gratis).</li>
            <li><strong>Mat och dryck:</strong> Under väntetiden på flygplatsen.</li>
            <li><strong>Hotell:</strong> Om nästa flyg går först nästa dag.</li>
            <li><strong>Kommunikation:</strong> Två telefonsamtal eller emails.</li>
          </ol>

          <h2>Vanliga undanflykter</h2>
          <p>
            SAS kan hävda att "första flyget bara var 20 minuter sent, så det räknas inte". Det är fel. Enligt EU-domstolen (Folkerts-domen) är det förseningen vid <strong>slutdestinationen</strong> som räknas.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Plane className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Strandad på flygplatsen?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Missad anslutning ger ofta de högsta ersättningarna (600 €). Låt oss hjälpa dig.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-missed-connection" target="_blank" rel="nofollow noreferrer noopener">
              Få ersättning för missat flyg
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
