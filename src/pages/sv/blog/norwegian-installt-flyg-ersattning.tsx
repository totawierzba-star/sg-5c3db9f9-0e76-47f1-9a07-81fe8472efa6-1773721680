import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Calendar, XCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NorwegianCancelledPage() {
  return (
    <LayoutSv>
      <SEO
        title="Norwegian inställt flyg — ersättning och återbetalning"
        description="Ställde Norwegian in ditt flyg? Du har rätt till ombokning, återbetalning OCH upp till 600 € i kompensation. Läs guiden."
        url="https://lotproblem.pl/sv/blog/norwegian-installt-flyg-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Norwegian Guide
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 7 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Norwegian inställt flyg — dina 3 rättigheter
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Ett inställt Norwegian-flyg förstör planerna, men det kan också fylla plånboken. Här är vad du måste kräva direkt på flygplatsen.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-red-900 dark:text-red-100 mb-2">
            Strandsatt på flygplatsen?
          </h3>
          <p className="text-red-800 dark:text-red-200 mb-4">
            Spara alla kvitton för hotell och taxi. Vi kräver tillbaka pengarna PLUS 600 € i skadestånd.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=norwegian-cancelled" target="_blank" rel="nofollow noreferrer noopener">
              Få hjälp med ersättningen
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Rättighet 1: Ombokning ELLER Återbetalning</h2>
          <p>
            Detta gäller ALLTID, oavsett orsak (även vid snöstorm). Du väljer:
          </p>
          <ul>
            <li><strong>Ombokning:</strong> Norwegian ska ta dig till destinationen så fort som möjligt (även med SAS eller Lufthansa om nödvändigt!).</li>
            <li><strong>Återbetalning:</strong> Pengarna tillbaka för biljetten inom 7 dagar. (Om du väljer detta har Norwegian inte längre ansvar för din hemresa).</li>
          </ul>

          <h2>Rättighet 2: Omsorg (Hotell & Mat)</h2>
          <p>
            Om du måste vänta över natten på nytt flyg, ska Norwegian betala:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Hotellrum.</li>
            <li>Taxi till och från hotellet.</li>
            <li>Mat och dryck i rimlig proportion till väntetiden.</li>
            <li>Två telefonsamtal/emails.</li>
          </ul>
          <p>
            <em>Tips: Om Norwegian inte bokar hotell (t.ex. ingen personal på plats), boka själv. Välj ett mellanklasshotell (inte lyxsvit), spara kvittot, och kräv ersättning efteråt.</em>
          </p>

          <h2>Rättighet 3: Kompensation (Upp till 600 €)</h2>
          <p>
            Detta är "bonusen" för besväret. Den gäller om:
          </p>
          <ol className="list-decimal pl-6 mb-6">
            <li>Du informerades om inställningen <strong>mindre än 14 dagar</strong> före avgång.</li>
            <li>Inställningen berodde på Norwegian (t.ex. personalbrist, tekniskt fel).</li>
            <li>Ersättningsflyget anlände betydligt senare än originalet.</li>
          </ol>

          <h3>Hur mycket?</h3>
          <p>Samma tabell som för förseningar:</p>
          <ul>
            <li>Korta flyg (t.ex. inrikes): <strong>250 €</strong></li>
            <li>Medellånga flyg (t.ex. till Spanien): <strong>400 €</strong></li>
            <li>Långa flyg (t.ex. USA/Thailand): <strong>600 €</strong></li>
          </ul>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <RefreshCw className="w-12 h-12 mx-auto text-red-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev din semester förstörd?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi ser till att Norwegian tar ansvar för din förlorade tid.
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=norwegian-cancelled" target="_blank" rel="nofollow noreferrer noopener">
              Sök ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
