import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogPost() {
  return (
    <LayoutSv>
      <SEO
        title="Hur mycket ersättning får jag för ett inställt flyg i Sverige?"
        description="Inställt flyg? Du kan ha rätt till upp till 600 € per person. Läs om reglerna för svenska resenärer och hur mycket du kan få."
        image="/images/cancelled-flight-compensation.jpg"
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Hur mycket ersättning får jag för ett inställt flyg?</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8 border-l-4 border-blue-500">
          <p className="text-xl font-semibold text-blue-900 mb-2">Kort svar:</p>
          <p className="text-gray-800">
            Om ditt flyg ställdes in med mindre än 14 dagars varsel kan du ha rätt till mellan <strong>250 € och 600 €</strong>, beroende på flygsträckan och hur mycket försenad du blev till slutdestinationen med en eventuell ombokning.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Tre nivåer av ersättning</h2>
        <p className="mb-4">
          EU-förordning 261/2004 delar in ersättningen i tre nivåer baserat på avståndet "fågelvägen":
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="border p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-lg mb-2">Kort distans</h3>
            <p className="text-sm text-gray-500 mb-2">&lt; 1 500 km</p>
            <p className="text-2xl font-bold text-blue-600">250 €</p>
            <p className="text-xs text-gray-400 mt-1">T.ex. Stockholm - Helsingfors</p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-lg mb-2">Mellandistans</h3>
            <p className="text-sm text-gray-500 mb-2">1 500 - 3 500 km</p>
            <p className="text-2xl font-bold text-blue-600">400 €</p>
            <p className="text-xs text-gray-400 mt-1">T.ex. Göteborg - Gran Canaria</p>
          </div>
          <div className="border p-4 rounded-lg shadow-sm text-center">
            <h3 className="font-bold text-lg mb-2">Långdistans</h3>
            <p className="text-sm text-gray-500 mb-2">&gt; 3 500 km (utanför EU)</p>
            <p className="text-2xl font-bold text-blue-600">600 €</p>
            <p className="text-xs text-gray-400 mt-1">T.ex. Stockholm - Bangkok</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Varsel är nyckeln</h2>
        <p className="mb-4">Tidpunkten då du fick veta att flyget var inställt avgör din rätt till ersättning:</p>
        <ul className="list-disc pl-5 mb-6 space-y-2">
          <li><strong>Mer än 14 dagar innan:</strong> Ingen ersättning (bara återbetalning av biljett eller ombokning).</li>
          <li><strong>7–14 dagar innan:</strong> Ersättning om du anländer mer än 4 timmar sent.</li>
          <li><strong>Mindre än 7 dagar innan:</strong> Ersättning om du anländer mer än 2 timmar sent.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">Får man både pengar tillbaka och ersättning?</h2>
        <p className="mb-6">
          JA, i vissa fall. Om flygbolaget ställer in ditt flyg och INTE erbjuder en ombokning, ska du ha <strong>full återbetalning av biljetten</strong> PLUS <strong>skadeståndet (250-600 €)</strong>. Om de bokar om dig gratis, får du "bara" skadeståndet för tidsförlusten.
        </p>

        <div className="bg-gray-100 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Blev ditt flyg inställt?</h3>
          <p className="mb-6">Kräv din ersättning nu. Det kostar inget att kontrollera.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <a href="https://claimwinger.com/?utm_source=lotproblem-sv-installt-snippet" target="_blank" rel="noopener noreferrer">
              Starta ditt ärende
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}