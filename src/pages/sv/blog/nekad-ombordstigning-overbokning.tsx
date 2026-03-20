import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Users, Ticket, BadgeEuro } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DeniedBoardingPage() {
  return (
    <LayoutSv>
      <SEO
        title="Nekad ombordstigning (överbokning) — dina rättigheter och ersättning"
        description="Blev du nekad att gå ombord för att flyget var fullt? Överbokning ger dig rätt till omedelbar ersättning upp till 600 €. Läs mer."
        url="https://lotproblem.pl/sv/blog/nekad-ombordstigning-overbokning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-orange-900 dark:text-orange-300">
              Överbokning
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Nekad ombordstigning? Få 600 € direkt (ofta på flygplatsen)
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Flygbolag säljer ofta fler biljetter än det finns stolar. Om du drabbas av detta "affärsbeslut", har du rätt till en rejäl kompensation.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-orange-900 dark:text-orange-100 mb-2">
            Gav du upp din plats frivilligt?
          </h3>
          <p className="text-orange-800 dark:text-orange-200 mb-4">
            Om du sa "ja" till en voucher och hotell, kan du ha avsagt dig rätten till mer. Men om du tvingades av planet mot din vilja — då ska du ha pengar!
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=denied-boarding" target="_blank" rel="nofollow noreferrer noopener">
              Kolla din ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Frivillig vs. Ofrivillig nekad ombordstigning</h2>
          <p>
            När planet är fullt ropar de ofta i högtalarna: <em>"Vi söker volontärer som kan ta nästa flyg mot 200 € i voucher."</em>
          </p>
          <ul>
            <li><strong>Om du accepterar (Frivillig):</strong> Du får det ni kommit överens om (voucher, hotell, ny biljett). Du kan INTE kräva mer sen.</li>
            <li><strong>Om ingen anmäler sig (Ofrivillig):</strong> Flygbolaget pekar ut passagerare som inte får åka. Om det är du, har du "vunnit" jackpotten (trots ilskan).</li>
          </ul>

          <h2>Dina rättigheter vid ofrivillig nekad ombordstigning</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li>
              <strong>Omedelbar kompensation:</strong>
              <ul className="mt-2 list-disc pl-4">
                <li>250 € (upp till 1500 km)</li>
                <li>400 € (inom EU eller upp till 3500 km)</li>
                <li>600 € (övriga världen)</li>
              </ul>
              <p className="text-sm mt-1 text-gray-500">Du har rätt att få detta utbetalt, ofta direkt via check eller överföring.</p>
            </li>
            <li>
              <strong>Ny resa eller pengarna tillbaka:</strong>
              <p className="text-sm mt-1">Du ska fortfarande komma till din destination med nästa möjliga flyg. Eller få full återbetalning om du inte vill åka.</p>
            </li>
            <li>
              <strong>Mat och hotell:</strong>
              <p className="text-sm mt-1">Under tiden du väntar på nästa flyg.</p>
            </li>
          </ol>

          <h2>Acceptera aldrig en "liten" voucher</h2>
          <p>
            Om de tvingar av dig och erbjuder en voucher på 100 €, skratta åt dem (eller var artig men bestämd). Lagen säger 250-600 € i KONTANTER.
          </p>
          <p>
            Det enda undantaget är om de kan boka om dig till ett flyg som landar nästan samtidigt (inom 2-4 timmar beroende på sträcka). Då halveras ersättningen. Men den försvinner inte!
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Ticket className="w-12 h-12 mx-auto text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Blev du kvar på marken?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Överbokning är det tydligaste regelbrottet. Vi ser till att du får maxersättning snabbt.
          </p>
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=denied-boarding" target="_blank" rel="nofollow noreferrer noopener">
              Kräv dina pengar
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
