import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, BarChart3, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasArlandaPage() {
  return (
    <LayoutSv>
      <SEO
        title="SAS Arlanda-avgångar — de mest försenade rutterna och vad du kan göra"
        description="Flyger du från Arlanda med SAS? Vissa rutter är mer drabbade än andra. Se statistiken och dina rättigheter vid förseningar från Stockholm."
        url="https://problemlot.com/sv/blog/sas-arlanda-avgangar"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              SAS Statistik
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            SAS och Arlanda: Här är rutterna som oftast blir sena
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Stockholm Arlanda är SAS nav i Sverige. Men vädret, personalbrist och tekniska problem skapar ofta kaos. Vi har listat rutterna där risken för försening är störst.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Fast på Arlanda?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vänta inte. Kolla direkt om din försening ger rätt till pengar.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-arlanda" target="_blank" rel="nofollow noreferrer noopener">
              Kolla din flight
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Varför drabbas Arlanda hårt?</h2>
          <p>
            Vintern är den stora boven. Snöstormar (snökaos) är vanliga.
            <br />
            <strong>MEN:</strong> Även om vädret är dåligt, måste SAS ha beredskap för avisning (de-icing). Om förseningen beror på att "avisningsbilen var trasig" eller "personalen inte kom fram", är det SAS ansvar, inte vädrets.
          </p>

          <h2>Problemrutter från Arlanda (ARN)</h2>
          <p>
            Baserat på historiska data ser vi ofta förseningar på:
          </p>
          <ul>
            <li><strong>ARN - London Heathrow (LHR):</strong> Hårt trafikerad, ofta slot-tider som missas.</li>
            <li><strong>ARN - Köpenhamn (CPH):</strong> Pendelflyget drabbas av följdförseningar.</li>
            <li><strong>ARN - New York (EWR):</strong> Långdistansflyg som ofta väntar in anslutningar.</li>
          </ul>

          <h2>Dina rättigheter på Arlanda</h2>
          <p>
            Om du blir stående på Arlanda mer än 2 timmar (för korta flyg) ska SAS ge dig:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Mat och dryck (ofta en voucher på ca 100-150 kr).</li>
            <li>Två samtal/email.</li>
            <li>Om förseningen blir över 3 timmar vid ankomst: Ersättning på 250-600 €.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <AlertTriangle className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev din avgång försenad?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Arlanda-förseningar är vardagsmat. Ersättningen är det inte. Se till att du får vad du har rätt till.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-arlanda" target="_blank" rel="nofollow noreferrer noopener">
              Få ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
