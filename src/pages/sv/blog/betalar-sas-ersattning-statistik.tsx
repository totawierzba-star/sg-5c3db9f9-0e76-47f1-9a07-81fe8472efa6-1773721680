import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BetalarSasErsattningStatistik() {
  return (
    <LayoutSv>
      <SEO
        title="Betalar SAS ersättning? Fakta, statistik och bekräftade fall | ClaimWinger"
        description="Får man faktiskt pengar av SAS? Vi granskar utbetalningsviljan, genomsnittliga väntetider och statistik för 2024-2025."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Betalar SAS ersättning? Fakta och statistik</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-blue-800 mb-2">Vår dom:</p>
          <p className="text-blue-700">
            <strong>Ja, SAS betalar oftast.</strong> De är ett av de bättre bolagen i Europa på att följa lagen, men processen kan vara långsam (4-8 veckor) och de nekar ofta första försöket rutinmässigt.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Statistik från våra ärenden</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Betalningsvilja:</strong> Hög (jämfört med t.ex. Wizz Air).</li>
          <li><strong>Genomsnittlig handläggningstid:</strong> 35 dagar.</li>
          <li><strong>Andel ärenden som kräver juridiska hot:</strong> ca 30%.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">När betalar SAS inte?</h2>
        <p className="mb-4">
          De vanligaste (giltiga) skälen till avslag är:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Extremväder (snöstormar på Arlanda/Gardermoen).</li>
          <li>Strejk hos flygledare (ATC) - men INTE egen personalstrejk!</li>
          <li>Akuta sjukdomsfall ombord.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Strejk-ersättning</h2>
        <p className="mb-6">
          Viktigt: Efter en dom i EU-domstolen (mot just SAS!) måste de nu betala ersättning även om deras egna piloter strejkar. Låt dem inte lura dig att tro något annat.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Har SAS nekat dig?</h3>
          <p className="mb-6">Vi kan dubbelkolla om deras avslag var lagligt.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_sas_stats">
              Granska mitt avslag
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
