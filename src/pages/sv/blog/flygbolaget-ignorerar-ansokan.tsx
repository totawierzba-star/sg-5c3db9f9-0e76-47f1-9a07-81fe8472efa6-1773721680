import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FlygbolagetIgnorerarAnsokan() {
  return (
    <LayoutSv>
      <SEO
        title="Vad gör jag om flygbolaget ignorerar min ansökan? | ClaimWinger"
        description="Har flygbolaget slutat svara? Följ vår guide steg-för-steg: från påminnelse och ARN till att ta hjälp av experter. Få dina pengar nu."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Vad gör jag om flygbolaget ignorerar min ansökan?</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-blue-800 mb-2">Snabbt svar:</p>
          <p className="text-blue-700">
            Om flygbolaget inte svarar inom 6 veckor, skicka en skriftlig påminnelse. Om de fortfarande ignorerar dig, kan du anmäla ärendet till Allmänna reklamationsnämnden (ARN) eller anlita ett ersättningsföretag som ClaimWinger för att driva kravet juridiskt.
          </p>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          Det är en vanlig taktik: flygbolag hoppas att passagerare ska ge upp om de bara är tysta tillräckligt länge. Här är din handlingsplan när flygbolaget "spelar död".
        </p>

        <h2 className="text-2xl font-bold mb-4">Steg 1: Skicka en formell påminnelse</h2>
        <p className="mb-4">
          Ibland är det bara inkompetens eller hög arbetsbelastning. Skicka ett nytt mail (eller brev) med rubriken "PÅMINNELSE / REMINDER". Bifoga ditt tidigare krav och ge dem en sista tidsfrist på 14 dagar.
        </p>

        <h2 className="text-2xl font-bold mb-4">Steg 2: Anmäl till ARN (Allmänna reklamationsnämnden)</h2>
        <p className="mb-4">
          I Sverige kan du kostnadsfritt anmäla tvisten till ARN.
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Det är gratis för konsumenter.</li>
          <li>Handläggningstiden är dock lång (ofta 6-12 månader).</li>
          <li>ARN:s beslut är en rekommendation, inte en dom (men seriösa bolag följer den oftast).</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Steg 3: Ta hjälp av experter (ClaimWinger)</h2>
        <p className="mb-4">
          Om du vill ha pengarna snabbare eller om flygbolaget vägrar följa ARN, är nästa steg juridiska åtgärder.
        </p>
        <p className="mb-6">
          ClaimWinger tar risken åt dig. Vi driver ärendet mot flygbolaget, och du betalar bara om vi lyckas.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Låt inte flygbolaget vinna på tystnad</h3>
          <p className="mb-6">Vi får dem att lyssna. Fyll i formuläret på 3 minuter.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_ignored_claim">
              Driv mitt ärende nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}