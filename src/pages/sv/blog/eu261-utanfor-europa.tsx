import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Eu261UtanforEuropa() {
  return (
    <LayoutSv>
      <SEO
        title="Gäller EU261 för flyg utanför Europa? | ClaimWinger"
        description="Reser du till eller från USA, Thailand eller Turkiet? Lär dig när EU:s passagerarrättigheter gäller för flyg utanför Europa."
      />
      <article className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Gäller EU261 för flyg utanför Europa?</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg font-semibold text-blue-800 mb-2">Tumregel:</p>
          <p className="text-blue-700">
            EU261 gäller för <strong>alla flyg som avgår från ett EU-land</strong> (oavsett flygbolag) OCH för flyg som <strong>landar i EU</strong> om de utförs av ett <strong>EU-flygbolag</strong>.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4">Tre scenarion - Vad gäller?</h2>

        <div className="space-y-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4 bg-green-50 p-4">
            <h3 className="font-bold text-lg">1. Flyg FRÅN ett EU-land (t.ex. Stockholm till Bangkok)</h3>
            <p><strong>Gäller EU261?</strong> JA ✅</p>
            <p className="text-sm text-gray-600">Oavsett vilket flygbolag du flyger med (SAS, Thai Airways, Emirates etc.).</p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 bg-yellow-50 p-4">
            <h3 className="font-bold text-lg">2. Flyg TILL ett EU-land (t.ex. New York till Stockholm)</h3>
            <p><strong>Gäller EU261?</strong> BEROR PÅ ⚠️</p>
            <p className="text-sm text-gray-600">JA, om du flyger med ett EU-bolag (t.ex. SAS, Lufthansa, Air France).<br/>NEJ, om du flyger med ett icke-EU-bolag (t.ex. United, Delta, Thai Airways).</p>
          </div>

          <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4">
            <h3 className="font-bold text-lg">3. Flyg helt utanför EU (t.ex. New York till Los Angeles)</h3>
            <p><strong>Gäller EU261?</strong> NEJ ❌</p>
            <p className="text-sm text-gray-600">Här gäller lokala lagar (som ofta ger sämre skydd).</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4">Vad räknas som "EU"?</h2>
        <p className="mb-4">
          Förutom de 27 EU-länderna räknas även Island, Norge och Schweiz in i detta skydd. Storbritannien har efter Brexit en egen lag (UK261) som är nästan identisk med EU261.
        </p>

        <div className="bg-gray-100 p-8 rounded-lg text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Gällde din resa?</h3>
          <p className="mb-6">Testa vårt verktyg för att se om din rutt täcks av lagen.</p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <a href="https://claimwinger.com/?utm_source=lotproblem&utm_medium=blog&utm_campaign=sv_eu261_scope">
              Kontrollera mitt flyg
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}