import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, MapPin, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasMalmoPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS Malmö–[destination] — guide för Sturup-resenärer"
        description="Flyger du från Malmö Airport (Sturup) med SAS? Förseningar till Stockholm eller Arlanda kan ge rätt till ersättning. Läs mer här."
        url="https://lotproblem.pl/sv/blog/sas-malmo-sturup-ersattning"
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
            <span className="text-gray-500 text-sm">• 4 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS från Malmö Sturup: Dina rättigheter vid försening
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Malmö Airport är en viktig länk till Stockholm Arlanda. Många skåningar använder denna rutt för att nå världen. Men när SAS-pendeln krånglar, kan hela resan påverkas.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Problem på Sturup?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Även korta förseningar till Stockholm kan ge upp till 600 € om du missar nästa flyg.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-malmo" target="_blank" rel="nofollow noreferrer noopener">
              Kolla din ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Malmö (MMX) &rarr; Stockholm (ARN)</h2>
          <p>
            Detta är en inrikesflygning på under 1500 km. 
          </p>
          <ul>
            <li><strong>Om bara denna rutt är sen (och du stannar i Stockholm):</strong> 250 € vid mer än 3 timmars försening.</li>
            <li><strong>Om du ska vidare (Transfer):</strong> Om du missar anslutningen på Arlanda p.g.a. försening från Malmö, kan ersättningen öka till 400 € eller 600 € beroende på slutdestinationen.</li>
          </ul>

          <h2>Varför väljer SAS att ställa in Malmö-avgångar?</h2>
          <p>
            Vid tekniska problem eller personalbrist prioriterar SAS ofta att ställa in inrikesflyg för att rädda långdistansflyg. Detta är frustrerande för pendlare, men ger dig en stark rätt till ersättning.
          </p>

          <h2>Alternativ transport</h2>
          <p>
            Om SAS ställer in flyget från Sturup, erbjuder de ibland buss till Köpenhamn (Kastrup) eller tåg.
            <br />
            <strong>Viktigt:</strong> Om detta gör att du kommer fram sent till din slutdestination, har du fortfarande rätt till kontantersättning utöver den nya transporten.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Plane className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Strul med SAS från Malmö?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi hjälper dig att kräva ersättning för förseningen.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-malmo" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}