import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, MapPin, Scale, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasStockholmLondonPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS Stockholm–London — UK261 eller EU261 efter Brexit?"
        description="Flyger du till London med SAS? Brexit har rört till det, men dina rättigheter är starka. Läs om skillnaden mellan EU261 och UK261."
        url="https://lotproblem.pl/sv/blog/sas-stockholm-london-ersattning"
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
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS till London: Gäller dina rättigheter efter Brexit?
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            London är en av svenskarnas favoritdestinationer. Men sedan Storbritannien lämnade EU undrar många: Har jag fortfarande rätt till ersättning om SAS-flyget till Heathrow är försenat? Svaret är ett rungande JA.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Försenad till/från London?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Oavsett Brexit är du skyddad. Du kan få 250 € eller £220.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-london" target="_blank" rel="nofollow noreferrer noopener">
              Kolla ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>EU261 vs. UK261</h2>
          <p>
            När Storbritannien lämnade EU, kopierade de i princip EU:s passagerarrättigheter till sin egen lagstiftning, känd som <strong>UK261</strong>.
          </p>
          <p>
            Eftersom du flyger med SAS (ett EU-bolag), är du dubbelt skyddad:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Stockholm till London:</strong> Täcks av EU261.</li>
            <li><strong>London till Stockholm:</strong> Täcks av både EU261 (eftersom SAS är EU-bolag) och UK261 (eftersom du reser från UK).</li>
          </ul>

          <h2>Hur mycket får du?</h2>
          <p>
            Avståndet Stockholm – London är ca 1400 km. Det faller precis inom den lägsta kategorin (under 1500 km).
          </p>
          <ul>
            <li><strong>Ersättning:</strong> 250 € per person.</li>
            <li><strong>I brittiska pund:</strong> £220 (enligt UK261).</li>
          </ul>
          <p>
            Vänta nu... 1400 km? Om du flyger från Luleå eller Umeå till London (via Arlanda) blir totalsträckan över 1500 km. Då hoppar ersättningen upp till <strong>400 €</strong>!
          </p>

          <h2>Heathrow-kaoset</h2>
          <p>
            London Heathrow är ökänt för sina köer och förseningar. Ofta skyller flygbolagen på "ATC restrictions" (flygledningen).
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md border border-blue-200 dark:border-blue-800 my-4">
            <h4 className="font-bold text-blue-800 dark:text-blue-200">Tips:</h4>
            <p className="text-sm">
              Om ditt SAS-flyg är sent för att de väntade på passagerare eller bagage, är det INTE extraordinärt. Det är SAS ansvar. Du ska ha ersättning.
            </p>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Landmark className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Problem med London-resan?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Brexit stoppar inte dina rättigheter. Vi kan lagen i både EU och UK.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-london" target="_blank" rel="nofollow noreferrer noopener">
              Få dina 250 € / 400 €
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}