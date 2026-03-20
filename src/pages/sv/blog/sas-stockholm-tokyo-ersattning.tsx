import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Plane, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasStockholmTokyoPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS Stockholm–Tokyo (Haneda) — maximalt anspråk på 600 €"
        description="SAS flyg till Tokyo försenat eller inställt? Långdistans till Asien ger högsta ersättningen. Läs om dina rättigheter här."
        url="https://lotproblem.pl/sv/blog/sas-stockholm-tokyo-ersattning"
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
            SAS till Tokyo: Lång resa, hög ersättning vid problem
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            En resa till Japan är ofta dyr och planerad i detalj. En försening kan förstöra mycket. Lyckligtvis skyddar EU-lagarna dig extra mycket på denna ultralånga rutt.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            600 € (ca 6800 kr) tillbaka
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Vid förseningar över 4 timmar till/från Tokyo är ersättningen garanterad om det är SAS fel.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-tokyo" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende mot SAS
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Rutten över Nordpolen</h2>
          <p>
            SAS flygningar till Tokyo (HND) är extremt känsliga för förseningar eftersom de ofta måste undvika ryskt luftrum, vilket gör resan längre. Men kom ihåg:
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md border border-yellow-200 dark:border-yellow-800 my-4">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200">Viktigt:</h4>
            <p className="text-sm">
              Att flygtiden är "längre än förr" p.g.a. geopolitik är känt och inräknat i tidtabellen. SAS kan inte skylla på det om de blir sena utöver den nya tidtabellen.
            </p>
          </div>

          <h2>Ersättningsnivåer</h2>
          <p>
            Eftersom Japan ligger långt över 3500 km bort, gäller kategori 3 (Type C):
          </p>
          <ul>
            <li><strong>Inställt flyg:</strong> 600 € (om du inte informerades 14 dagar innan).</li>
            <li><strong>Försening 3-4 timmar:</strong> 300 € (50% av 600 €).</li>
            <li><strong>Försening 4+ timmar:</strong> 600 €.</li>
          </ul>

          <h2>Krävs det att jag är svensk medborgare?</h2>
          <p>
            Nej. Reglerna gäller alla passagerare som flyger med SAS från Stockholm eller Köpenhamn, oavsett nationalitet. De gäller även på vägen HEM från Tokyo till Skandinavien med SAS.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Globe className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev Japan-resan försenad?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt oss hjälpa dig att få dina 600 €. Du betalar inget om vi inte vinner.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-tokyo" target="_blank" rel="nofollow noreferrer noopener">
              Kräv ersättning nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
