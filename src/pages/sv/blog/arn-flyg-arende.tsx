import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Scale, AlertTriangle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ArnPage() {
  return (
    <LayoutSv>
      <SEO
        title="ARN och flygersättning — varför det inte alltid räcker"
        description="Funderar du på att anmäla flygbolaget till ARN? Läs om processen, väntetiderna och varför flygbolagen ibland struntar i besluten."
        url="https://lotproblem.pl/sv/blog/arn-flyg-arende"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Myndigheter & ARN
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 6 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Anmäla till ARN? Här är för- och nackdelarna
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Allmänna reklamationsnämnden (ARN) är gratis och bra. Men det finns en hake: besluten är bara rekommendationer, och vissa flygbolag struntar i dem.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-gray-50 dark:bg-gray-800 border-l-4 border-gray-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
            Vill du ha pengarna snabbare?
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            ARN tar 6-12 månader. Vi kan ofta lösa det snabbare genom direkt juridisk press.
          </p>
          <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=arn-info" target="_blank" rel="nofollow noreferrer noopener">
              Starta ärende hos oss istället
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vad är ARN?</h2>
          <p>
            ARN är en statlig myndighet som prövar tvister mellan konsumenter och företag. Det är gratis att anmäla.
          </p>

          <h2>Nackdelarna med ARN</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <strong>Lång väntetid:</strong> Det tar ofta 6 till 12 månader att få ett beslut.
            </li>
            <li>
              <strong>Inte bindande:</strong> Flygbolaget MÅSTE inte följa beslutet. SAS och Norwegian brukar göra det, men många utländska lågprisbolag (Wizz Air, Ryanair) hamnar ofta på "Svarta listan" för att de ignorerar ARN.
            </li>
            <li>
              <strong>Kräver jobb:</strong> Du måste själv formulera din anmälan juridiskt korrekt och bifoga bevis.
            </li>
          </ul>

          <h2>När är ARN bra?</h2>
          <p>
            Om du har gott om tid, gillar att skriva juridiska texter själv, och flygbolaget är känt för att följa ARN (t.ex. SAS), då är det ett bra alternativ.
          </p>
          <p>
            Men om du vill maximera dina chanser och slippa jobbet, är en tjänst som ClaimWinger ofta effektivare, eftersom vi kan ta ärendet vidare till domstol om det behövs (något ARN inte gör).
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Scale className="w-12 h-12 mx-auto text-gray-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vi tar risken</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Ingen vinst, ingen avgift. Vi driver ditt ärende hela vägen.
          </p>
          <Button size="lg" className="bg-gray-800 hover:bg-gray-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=arn-info" target="_blank" rel="nofollow noreferrer noopener">
              Sök ersättning via ClaimWinger
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}