import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BehoverJagOmbud() {
  return (
    <LayoutSv>
      <SEO
        title="Behöver jag anlita ett ombud för att få flygersättning? | ClaimWinger"
        description="Ska du kräva ersättning själv eller anlita hjälp? Vi jämför fördelar och nackdelar med att använda en tjänst som ClaimWinger vs att göra det själv."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Behöver jag anlita ett ombud för att få flygersättning?</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Du har all rätt att kräva ersättning direkt från flygbolaget själv. Det kostar inget utom din tid. Så varför väljer tusentals svenskar ändå att använda tjänster som ClaimWinger varje månad?
        </p>

        <h2 className="text-2xl font-bold mb-4">Alternativ 1: Gör det själv (Gratis)</h2>
        <div className="mb-6">
          <h3 className="font-bold text-green-700">Fördelar:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Du får behålla 100% av ersättningen.</li>
          </ul>
          <h3 className="font-bold text-red-700">Nackdelar:</h3>
          <ul className="list-disc pl-6">
            <li>Tidskrävande byråkrati och mailväxling.</li>
            <li>Flygbolag nekar ofta felaktigt ("extraordinära omständigheter").</li>
            <li>Svårt att driva ärendet till domstol om de säger nej.</li>
            <li>Risk att du missar lagliga kryphål som ger rätt till ersättning.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Alternativ 2: Anlita ClaimWinger (No Win, No Fee)</h2>
        <div className="mb-6">
          <h3 className="font-bold text-green-700">Fördelar:</h3>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Ingen risk:</strong> Du betalar 0 kr om vi inte vinner.</li>
            <li><strong>Mindre stress:</strong> Vi sköter all kontakt och juridik.</li>
            <li><strong>Högre chans att lyckas:</strong> Vi har jurister och flygdata som motbevisar flygbolagens ursäkter.</li>
            <li>Vi tar ärendet till domstol om det behövs – på vår bekostnad.</li>
          </ul>
          <h3 className="font-bold text-red-700">Nackdelar:</h3>
          <ul className="list-disc pl-6">
            <li>Vi tar en serviceavgift (vanligtvis 25-30%) av den vunna ersättningen.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Slutsats</h2>
        <p className="mb-6">
          Om du har mycket tid och gillar att läsa lagtexter, prova själv först! Om du får ett nej, eller bara vill ha pengarna utan krångel, är ett ombud det smidigaste valet.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Välj den enkla vägen</h3>
          <p className="mb-6">Ladda upp ditt boardingkort så sköter vi resten.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_do_i_need_agent">
              Starta ditt ärende (Riskfritt)
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
