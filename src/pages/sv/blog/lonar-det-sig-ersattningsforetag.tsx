import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LonarDetSigErsattningsforetag() {
  return (
    <LayoutSv>
      <SEO
        title="Lönar det sig att använda ett ersättningsföretag för flygkrav? | ClaimWinger"
        description="Är det värt att betala 25-30% i avgift? Vi räknar på om det lönar sig att anlita experter som ClaimWinger jämfört med att göra det själv."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Lönar det sig att använda ett ersättningsföretag?</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-blue-800 mb-2">Snabbt svar:</p>
          <p className="text-blue-700">
            Ja, för de flesta. Även om du betalar en avgift (ofta 25-30%), ökar chansen att få betalt från ca 50% (på egen hand) till över 95% med experthjälp. Tid är också pengar.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Matematiken bakom beslutet</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="border p-4 rounded bg-white shadow-sm">
            <h3 className="font-bold text-lg mb-2 text-gray-700">Gör det själv</h3>
            <ul className="space-y-2 text-sm">
              <li>💰 <strong>Ersättning:</strong> 600 €</li>
              <li>💸 <strong>Avgift:</strong> 0 €</li>
              <li>⏳ <strong>Tid:</strong> 5-10 timmar</li>
              <li>⚖️ <strong>Risk för avslag:</strong> Hög</li>
              <li>🏁 <strong>Netto i fickan:</strong> 600 € (om du lyckas)</li>
            </ul>
          </div>

          <div className="border p-4 rounded bg-blue-50 shadow-sm border-blue-200">
            <h3 className="font-bold text-lg mb-2 text-blue-800">Med ClaimWinger</h3>
            <ul className="space-y-2 text-sm">
              <li>💰 <strong>Ersättning:</strong> 600 €</li>
              <li>💸 <strong>Avgift:</strong> ~150 €</li>
              <li>⏳ <strong>Tid:</strong> 5 minuter</li>
              <li>⚖️ <strong>Risk för avslag:</strong> Minimal</li>
              <li>🏁 <strong>Netto i fickan:</strong> ~450 € (stressfritt)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Dolda fördelar med experthjälp</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Tillgång till flygdata:</strong> Vi vet exakt vad som orsakade förseningen (väder vs teknik).</li>
          <li><strong>Juridisk tyngd:</strong> Flygbolag ignorerar privatpersoner men svarar advokater.</li>
          <li><strong>No Win, No Fee:</strong> Du riskerar inte en krona.</li>
        </ul>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Räkna ut din nettovinst</h3>
          <p className="mb-6">Se exakt hur mycket du får ut efter vår avgift.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_worth_it">
              Använd kalkylatorn
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
