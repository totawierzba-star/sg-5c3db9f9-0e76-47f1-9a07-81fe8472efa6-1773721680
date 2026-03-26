import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, BookOpen, Scale, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EU261SwedenPage() {
  return (
    <LayoutSv>
      <SEO
        title="EU 261/2004 i Sverige — dina rättigheter som flygpassagerare"
        description="Vad innebär EU-förordning 261/2004 för dig? Läs vår guide om den lag som ger dig rätt till upp till 600 € vid flygkaos."
        url="https://problemlot.com/sv/blog/eu261-regler-sverige"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              Lag & Rätt
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 8 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            EU 261/2004 — lagen som flygbolagen hatar
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Försenad? Inställt? Överbokad? EU-förordning 261/2004 är ditt starkaste vapen. Här är allt du behöver veta om dina rättigheter som svensk resenär.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Har flygbolaget brutit mot lagen?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            Låt inte dem komma undan. Vi kan lagen utan och innan och tvingar dem att betala.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=eu261-general" target="_blank" rel="nofollow noreferrer noopener">
              Kolla om du har rätt till ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vad är EU 261/2004?</h2>
          <p>
            Det är en europeisk lag som skyddar passagerare vid:
          </p>
          <ul>
            <li>Kraftiga förseningar (3+ timmar)</li>
            <li>Inställda flyg</li>
            <li>Nekad ombordstigning (överbokning)</li>
          </ul>
          <p>
            Lagen gäller för <strong>alla flyg som avgår från en EU-flygplats</strong> (oavsett flygbolag) OCH för <strong>flyg till EU</strong> med ett EU-flygbolag (t.ex. SAS, Lufthansa, Norwegian).
          </p>

          <h2>Dina tre grundläggande rättigheter</h2>
          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2">1. Omsorg</h3>
              <p className="text-sm">Mat, dryck, hotell och transport om du får vänta länge på flygplatsen.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2">2. Ombokning</h3>
              <p className="text-sm">Rätt att komma fram till slutdestinationen så fort som möjligt, eller få pengarna åter.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <h3 className="font-bold text-lg mb-2">3. Kompensation</h3>
              <p className="text-sm">Ekonomisk ersättning (250-600 €) för din förlorade tid och besväret.</p>
            </div>
          </div>

          <h2>Hur mycket pengar?</h2>
          <p>
            Ersättningen baseras enbart på flygsträckan, inte biljettpriset:
          </p>
          <ul>
            <li><strong>&lt; 1 500 km:</strong> 250 € (ca 2 800 kr)</li>
            <li><strong>1 500 – 3 500 km:</strong> 400 € (ca 4 500 kr)</li>
            <li><strong>&gt; 3 500 km (utanför EU):</strong> 600 € (ca 6 800 kr)</li>
          </ul>

          <h2>När gäller det INTE?</h2>
          <p>
            Flygbolagen älskar att skylla på "extraordinära omständigheter". Detta är de enda giltiga skälen för att neka ersättning:
          </p>
          <ul>
            <li>Extremt väder (som stoppar ALL trafik)</li>
            <li>Strejk hos flygledningen (ATC) - men INTE flygbolagets egen personal!</li>
            <li>Säkerhetshot (terror, sabotage)</li>
            <li>Fabrikationsfel på flygplanet (mycket sällsynt)</li>
          </ul>
          <p>
            "Tekniskt fel" eller "Personalbrist" är <strong>ALDRIG</strong> extraordinära omständigheter.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Scale className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Lagen är på din sida</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Flygbolagen har advokater. Det har vi också. Låt oss hjälpa dig.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=eu261-general" target="_blank" rel="nofollow noreferrer noopener">
              Sök ersättning nu
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
