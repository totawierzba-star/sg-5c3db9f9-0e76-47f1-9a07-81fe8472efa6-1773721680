import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Globe, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasStockholmNewYorkPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS Stockholm–New York (JFK/EWR) — hur får du 600 €?"
        description="Försenad på flyget till New York med SAS? Långdistansflyg ger högst ersättning. Se hur du kräver 600 euro per person."
        url="https://problemlot.com/sv/blog/sas-stockholm-new-york-ersattning"
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
            Försenad till New York med SAS? Så får du 600 € i ersättning
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Rutten Stockholm Arlanda (ARN) – New York (EWR/JFK) är en av SAS flaggskeppslinjer. Men långa avstånd betyder också höga insatser. Vid förseningar här gäller den maximala ersättningsnivån.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Problem på USA-resan?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Avståndet är över 3500 km. Det betyder 600 € (ca 6800 kr) direkt i fickan.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-nyc" target="_blank" rel="nofollow noreferrer noopener">
              Kräv 600 € nu
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Varför just New York-rutten?</h2>
          <p>
            EU-förordning 261/2004 delar in ersättning i tre nivåer baserat på avstånd.
          </p>
          <ul>
            <li>Upp till 1500 km: 250 €</li>
            <li>1500–3500 km: 400 €</li>
            <li><strong>Över 3500 km: 600 €</strong></li>
          </ul>
          <p>
            Avståndet mellan Stockholm och New York är ca 6300 km. Det placerar dig automatiskt i den högsta kategorin.
          </p>

          <h2>Reglerna för Arlanda ↔ Newark</h2>
          <p>
            För att få fulla 600 € måste förseningen vid ankomst vara minst <strong>4 timmar</strong> (för långdistans utanför EU).
          </p>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-md border border-yellow-200 dark:border-yellow-800 my-4">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-200">OBS: 3-4 timmars regeln</h4>
            <p className="text-sm">
              Om förseningen är mellan 3 och 4 timmar, har SAS rätt att minska ersättningen med 50%. Du får då 300 € istället för 600 €. Men 300 € är fortfarande mycket pengar!
            </p>
          </div>

          <h2>Gäller reglerna åt båda hållen?</h2>
          <p>
            <strong>JA.</strong> Eftersom SAS är ett EU-flygbolag (skandinaviskt), gäller reglerna oavsett om du flyger:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Från Stockholm till New York.</li>
            <li>Från New York till Stockholm.</li>
          </ul>
          <p>
            (Hade du flugit med Delta eller United från USA, hade reglerna INTE gällt på hemresan).
          </p>

          <h2>Inställt flyg till USA</h2>
          <p>
            Om SAS ställer in din flight till New York ska de:
          </p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Boka om dig (kanske via Köpenhamn eller med Lufthansa).</li>
            <li>Betala 600 € i ersättning (om du inte fick veta det 14 dagar innan).</li>
            <li>Ge dig mat och hotell om du måste vänta över natten på Arlanda.</li>
          </ol>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Globe className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev New York-resan försenad?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt inte SAS behålla dina pengar. Vi har hjälpt tusentals resenärer på denna rutt.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-nyc" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende (600 €)
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
