import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Baby, Users, Euro } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChildCompensationPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för barn och spädbarn — har de rätt till 600 €?"
        description="Reser du med barn? Även spädbarn (infants) kan ha rätt till full ersättning vid försenat flyg. Läs om villkoren här."
        url="https://lotproblem.pl/sv/blog/barn-spadbarn-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-pink-100 text-pink-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
              Familj & Barn
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 4 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Får barn och spädbarn också ersättning? Svaret överraskar
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            "Barnet betalade ju nästan ingenting för biljetten." Det är flygbolagens favoritargument. Men lagen säger något annat. En familj på fyra kan få 2 400 €.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-pink-50 dark:bg-pink-900/20 border-l-4 border-pink-500 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-pink-900 dark:text-pink-100 mb-2">
            Reser ni hela familjen?
          </h3>
          <p className="text-pink-800 dark:text-pink-200 mb-4">
            Vi hjälper er att söka ersättning för ALLA familjemedlemmar i en enda ansökan.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=family-claims" target="_blank" rel="nofollow noreferrer noopener">
              Sök för hela familjen
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Regeln: Har barnet en biljett?</h2>
          <p>
            EU-domstolen är tydlig: <strong>Alla passagerare som har en bekräftad bokning har rätt till ersättning.</strong> Åldern spelar ingen roll.
          </p>

          <h3>Barn med egen stol (över 2 år)</h3>
          <p>
            Här är det inga tvivel. De har betalat för en plats och har exakt samma rättigheter som en vuxen.
            <br />
            <strong>Ersättning:</strong> Fullt belopp (250 €, 400 € eller 600 €).
          </p>

          <h3>Spädbarn (under 2 år) i knät</h3>
          <p>
            Här försöker flygbolagen ofta neka. De säger att eftersom barnet reser gratis (eller för en mycket låg avgift) gäller inte lagen.
            <br />
            <strong>Detta är fel!</strong> Så länge du har betalat <em>något</em> för barnet (även om det bara är en administrativ avgift eller skatter), omfattas barnet av skyddet.
          </p>
          <p>
            Det enda undantaget är om barnet reser <strong>helt gratis</strong> (0 kr) utan någon som helst avgift. Men hos de flesta bolag (SAS, Ryanair, Norwegian) betalar man alltid en liten avgift för spädbarn. Då gäller full ersättning!
          </p>

          <h2>Exempel: Familjen Karlsson till Thailand</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pappa (Fullt pris)</li>
            <li>Mamma (Fullt pris)</li>
            <li>Olle, 5 år (Barnbiljett)</li>
            <li>Lisa, 1 år (Spädbarn i knät, avgift 300 kr)</li>
          </ul>
          <p>
            Vid 8 timmars försening har familjen rätt till:
            <br />
            <strong>4 personer × 600 € = 2 400 € (ca 27 000 kr)</strong>
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Baby className="w-12 h-12 mx-auto text-pink-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Glöm inte barnens pengar</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Det är era pengar. Låt oss se till att ni får dem.
          </p>
          <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=family-claims" target="_blank" rel="nofollow noreferrer noopener">
              Beräkna familjens ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}