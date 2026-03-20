import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  return (
    <LayoutSv>
      <SEO
        title="Hur mycket ersättning får jag för ett försenat SAS-flyg? (Tabell)"
        description="Se exakt hur mycket pengar du kan få av SAS. Snabb tabell: 250 €, 400 € eller 600 €. Kolla din ersättning direkt."
        image="/images/sas-compensation-table.jpg"
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Hur mycket ersättning får jag för ett försenat SAS-flyg?</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-xl font-semibold text-blue-900 mb-2">Snabbt svar:</p>
          <p className="text-gray-800">
            För SAS-flyg försenade med mer än 3 timmar vid ankomst gäller följande schablonbelopp enligt EU261:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Flyg upp till 1 500 km:</strong> 250 € (ca 2 800 SEK)</li>
            <li><strong>Flyg inom EU över 1 500 km:</strong> 400 € (ca 4 500 SEK)</li>
            <li><strong>Övriga flyg 1 500 – 3 500 km:</strong> 400 € (ca 4 500 SEK)</li>
            <li><strong>Långdistans över 3 500 km:</strong> 600 € (ca 6 800 SEK)</li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 mb-8">
          SAS (Scandinavian Airlines) är ett EU-flygbolag, vilket innebär att de alltid lyder under EU-förordning 261/2004. Oavsett om du flyger från Arlanda, Köpenhamn eller New York, har du rätt till samma skydd. Här bryter vi ner exakt vad som gäller.
        </p>

        <h2 className="text-2xl font-bold mb-4">Ersättningstabell för SAS</h2>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-3 text-left">Distans</th>
                <th className="border p-3 text-left">Exempelrutt</th>
                <th className="border p-3 text-left">Ersättning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3">Upp till 1 500 km</td>
                <td className="border p-3">Stockholm - Köpenhamn, Stockholm - Berlin</td>
                <td className="border p-3 font-bold text-green-600">250 €</td>
              </tr>
              <tr>
                <td className="border p-3">1 500 - 3 500 km</td>
                <td className="border p-3">Stockholm - Malaga, Göteborg - Alicante</td>
                <td className="border p-3 font-bold text-green-600">400 €</td>
              </tr>
              <tr>
                <td className="border p-3">Över 3 500 km (Utanför EU)</td>
                <td className="border p-3">Stockholm - New York, Köpenhamn - Tokyo</td>
                <td className="border p-3 font-bold text-green-600">600 €</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4">När betalar SAS INTE ut ersättning?</h2>
        <p className="mb-4">
          Det finns undantag. Om förseningen beror på så kallade <em>extraordinära omständigheter</em> (force majeure), behöver SAS inte betala. Detta inkluderar:
        </p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li>Extremt väder (snöstorm som stänger Arlanda).</li>
          <li>Flygledningsstrejk (ATC-strejk).</li>
          <li>Medicinska nödfall ombord.</li>
          <li>Terrorhot eller politisk instabilitet.</li>
        </ul>
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-8">
          <p className="font-bold">OBS:</p>
          <p>Tekniska fel på flygplanet eller strejk bland SAS egen personal (piloter, kabin) räknas INTE som extraordinära omständigheter. Då har du rätt till pengar!</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Vad är skillnaden på ersättning och återbetalning?</h2>
        <p className="mb-6">
          Många blandar ihop dessa. <strong>Återbetalning</strong> får du om flyget ställs in och du väljer att inte resa. <strong>Ersättning</strong> är ett skadestånd för "förlorad tid" som du får utöver återbetalningen eller ombokningen, om du kommer fram mer än 3 timmar sent.
        </p>

        <div className="bg-gray-100 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Har du flugit med SAS och blivit försenad?</h3>
          <p className="mb-6">Kolla snabbt om du har rätt till upp till 600 € (ca 6 800 kr).</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="https://claimwinger.com/?utm_source=lotproblem-sv-sas-tabell" target="_blank" rel="noopener noreferrer">
              Kontrollera din ersättning gratis
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
