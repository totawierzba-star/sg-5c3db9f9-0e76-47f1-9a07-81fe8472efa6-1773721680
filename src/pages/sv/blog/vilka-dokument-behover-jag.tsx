import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function VilkaDokumentBehoverJag() {
  return (
    <LayoutSv>
      <SEO
        title="Vilka dokument behöver jag för att ansöka om ersättning? | ClaimWinger"
        description="Boardingkort, biljett eller bokningsbekräftelse? Här är den kompletta checklistan över dokument du måste spara för att få din flygersättning."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Vilka dokument behöver jag för att ansöka om ersättning?</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          Flygbolagen älskar byråkrati. Om du saknar ett enda papper kan de neka din ansökan direkt. Här är listan på vad du MÅSTE ha kvar.
        </p>

        <h2 className="text-2xl font-bold mb-4">1. Bokningsbekräftelse (E-ticket)</h2>
        <p className="mb-4">
          Mailet du fick när du köpte resan. Det viktigaste här är ditt <strong>Bokningsnummer (PNR)</strong>, oftast en kod på 6 tecken (t.ex. "A1B2C3").
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Boardingkort (Boarding Pass)</h2>
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <p className="font-bold">Kritiskt viktigt!</p>
          <p>Många slänger detta. GÖR INTE DET. Digitalt boardingkort i mobilen (screenshot) fungerar utmärkt.</p>
        </div>
        <p className="mb-4">
          Detta bevisar att du faktiskt var på flygplatsen och checkade in. Utan detta kan flygbolaget hävda "No Show".
        </p>

        <h2 className="text-2xl font-bold mb-4">3. Intyg på försening (valfritt men bra)</h2>
        <p className="mb-4">
          Bad du om ett "Delay Confirmation"-papper på flygplatsen? Utmärkt. Om inte, ta screenshots på flygplatsens skärmar eller SMS från flygbolaget.
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Kvitton (om du hade utlägg)</h2>
        <p className="mb-6">
          Om du köpte mat, dryck eller hotell under väntetiden, spara alla originalkvitton. Kontoutdrag räcker sällan.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Saknar du något dokument?</h3>
          <p className="mb-6">Vi kan ofta hitta bokningsdata i våra system ändå. Prova att söka.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_documents">
              Starta ärende utan alla papper
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}