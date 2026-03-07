import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HurLangTidAnsokaSverige() {
  return (
    <LayoutSv>
      <SEO
        title="Hur lång tid har jag på mig att ansöka om flygersättning i Sverige? | ClaimWinger"
        description="Missa inte tidsfristen! I Sverige gäller specifika regler för preskription av flygkrav. Läs om 2-månadersregeln och 10-årsgränsen."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Hur lång tid har jag på mig att ansöka om flygersättning i Sverige?</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-blue-800 mb-2">Viktigt att veta:</p>
          <p className="text-blue-700">
            Du bör reklamera till flygbolaget <strong>inom 2 månader</strong> från händelsen. Om du gjort det, har du sedan upp till <strong>10 år</strong> på dig att driva ärendet i domstol (allmän preskriptionstid).
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Varför är 2 månader viktigt?</h2>
        <p className="mb-4">
          Enligt svensk praxis och konsumentköplagen anses en reklamation inom 2 månader alltid vara "inom skälig tid". Om du väntar längre än så <i>kan</i> flygbolaget hävda att du väntat för länge med att klaga, även om rättsläget här är lite otydligt för just flygpassagerare.
        </p>
        <p className="mb-6 font-semibold">
          RÅD: Skicka alltid ett mail till flygbolaget så fort som möjligt, bara för att "stoppa klockan".
        </p>

        <h2 className="text-2xl font-bold mb-4">10 års preskriptionstid</h2>
        <p className="mb-4">
          Sverige har en av Europas generösaste preskriptionstider. När du väl har klagat, förfaller din rätt till pengarna först efter 10 år. Det betyder att du kan damma av gamla ärenden från 2018 eller 2019 och få pengar idag!
        </p>

        <h2 className="text-2xl font-bold mb-4">Tidsfrister i andra länder</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Danmark & Norge:</strong> 3 år</li>
          <li><strong>Tyskland:</strong> 3 år (vid årets slut)</li>
          <li><strong>Storbritannien:</strong> 6 år</li>
          <li><strong>Polen:</strong> 1 år</li>
        </ul>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Har du ett gammalt ärende?</h3>
          <p className="mb-6">Vi kan kontrollera om det fortfarande är giltigt. Det kostar inget.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_time_limit">
              Kolla mitt gamla flyg
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}