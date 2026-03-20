import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  return (
    <LayoutSv>
      <SEO
        title="Hur lång tid tar det att få flygersättning utbetald? (Lista)"
        description="Väntar du på pengar från SAS, Norwegian eller Ryanair? Se genomsnittliga väntetider för utbetalning av ersättning 2024/2025."
        image="/images/waiting-time-compensation.jpg"
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Hur lång tid tar det att få flygersättning utbetald?</h1>
        
        <p className="text-lg text-gray-700 mb-8">
          "När kommer pengarna?" är den vanligaste frågan vi får. Svaret varierar enormt beroende på flygbolag och om de samarbetar eller bråkar. Här är aktuella uppskattningar baserade på data från tusentals ärenden.
        </p>

        <h2 className="text-2xl font-bold mb-4">Genomsnittlig väntetid per flygbolag (2024/2025)</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Flygbolag</th>
                <th className="border p-3 text-left">Direkt godkännande</th>
                <th className="border p-3 text-left">Om de bråkar (Domstol)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-semibold">SAS</td>
                <td className="border p-3 text-green-600">4 - 8 veckor</td>
                <td className="border p-3 text-red-600">6 - 12 månader</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Norwegian</td>
                <td className="border p-3 text-green-600">3 - 6 veckor</td>
                <td className="border p-3 text-red-600">5 - 10 månader</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Ryanair</td>
                <td className="border p-3 text-yellow-600">2 - 4 månader</td>
                <td className="border p-3 text-red-600">8 - 14 månader</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Wizz Air</td>
                <td className="border p-3 text-red-600">3 - 6 månader</td>
                <td className="border p-3 text-red-600">12+ månader</td>
              </tr>
              <tr>
                <td className="border p-3 font-semibold">Lufthansa</td>
                <td className="border p-3 text-green-600">4 - 8 veckor</td>
                <td className="border p-3 text-yellow-600">6 - 12 månader</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4">Varför tar det sådan tid?</h2>
        <p className="mb-4">Processen har flera steg:</p>
        <ol className="list-decimal pl-5 mb-6 space-y-3">
          <li><strong>Analys & Kravbrev (1-3 dagar):</strong> Ditt ärende analyseras och skickas till flygbolaget.</li>
          <li><strong>Flygbolagets svarstid (4-8 veckor):</strong> Enligt lag ska de svara "skyndsamt", men i praktiken tar de ofta 6-8 veckor på sig att ens öppna mailet.</li>
          <li><strong>Förhandling / Juridiska åtgärder (3-12 månader):</strong> Om de nekar (säger "extraordinära omständigheter" fast det inte är det), måste ärendet gå till ARN eller domstol. Detta förlänger tiden markant.</li>
          <li><strong>Utbetalning (2-4 veckor):</strong> När de väl sagt "ja", tar banköverföringen en stund.</li>
        </ol>

        <h2 className="text-2xl font-bold mb-4">Kan jag snabba på processen?</h2>
        <p className="mb-6">
          Som privatperson är det svårt. Flygbolagen prioriterar ofta bort privatpersoner i hopp om att de ska ge upp. Genom att använda en tjänst som ClaimWinger visar du att du är redo att ta det till domstol, vilket ofta (men inte alltid) får dem att betala snabbare.
        </p>

        <div className="bg-gray-100 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Vill du slippa pappersarbetet?</h3>
          <p className="mb-6">Vi driver in pengarna åt dig. Ingen vinst, ingen avgift.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="https://claimwinger.com/?utm_source=lotproblem-sv-tid-snippet" target="_blank" rel="noopener noreferrer">
              Sök ersättning nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
