import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Sun, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasHighSeasonPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS försening i högsäsong — statistik och hur du kräver ersättning"
        description="Flyger du med SAS på sommaren eller julen? Risken för förseningar ökar. Se hur du får ersättning trots högt tryck."
        url="https://problemlot.com/sv/blog/sas-forsening-i-hogsasong"
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
            SAS i högsäsong: När flygplatsen kokar och flygen står stilla
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Sommarsemester, julrusch och sportlov. Det är då vi reser som mest – och då SAS har svårast att hålla tidtabellen. Men "högt tryck" är ingen ursäkt för att neka dig ersättning.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Försenad på semestern?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Du kan ha rätt till 600 € per person. Perfekt tillskott till reskassan.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-high-season" target="_blank" rel="nofollow noreferrer noopener">
              Kolla ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Varför ökar förseningarna vid högsäsong?</h2>
          <p>
            Under juli och augusti flyger SAS maximalt antal rutter. Det finns inga reservplan. Om ett plan blir stående i Alicante på morgonen, sprider sig förseningen som ringar på vattnet till Arlanda, Oslo och Köpenhamn under resten av dagen.
          </p>
          <p>
            Detta kallas "knock-on effect" eller följdförseningar. För dig som passagerare är det goda nyheter (juridiskt sett): Det räknas <strong>inte</strong> som extraordinärt. Det är SAS operativa ansvar.
          </p>

          <h2>Statistik: SAS punktlighet</h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm my-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              Riskzoner för förseningar
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span>Fredag eftermiddag</span>
                <span className="font-bold text-red-500">Hög risk</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span>Juli månad (Charter & reguljärt)</span>
                <span className="font-bold text-red-500">Mycket hög risk</span>
              </li>
              <li className="flex justify-between border-b border-gray-100 dark:border-gray-700 pb-2">
                <span>Vinter (Snökaos på Arlanda)</span>
                <span className="font-bold text-orange-500">Medelrisk (ofta force majeure)</span>
              </li>
            </ul>
          </div>

          <h2>Dina rättigheter vid "Operational Issues"</h2>
          <p>
            När SAS skyller på "trafikledning" eller "operativa skäl" under högsäsong, betyder det oftast att de inte har tillräckligt med personal eller plan.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Personalbrist:</strong> Ger ALLTID ersättning (domstolspraxis).</li>
            <li><strong>Kö på startbanan:</strong> Ofta ATC (flygledning), vilket kan vara extraordinärt, men SAS måste bevisa det.</li>
          </ul>

          <h2>Tips för högsäsongsresenären</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Boka morgonflyg – de är oftast i tid.</li>
            <li>Ha minst 2 timmar mellan anslutningsflyg.</li>
            <li>Ladda ner SAS-appen för snabb info.</li>
            <li>Om det skiter sig: Spara boardingkort och kräv ersättning direkt när du kommer hem.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Sun className="w-12 h-12 mx-auto text-yellow-500 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev semestern förstörd?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Få kompensation för den förlorade tiden. Vi tar fajten med SAS åt dig.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-high-season" target="_blank" rel="nofollow noreferrer noopener">
              Få ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
