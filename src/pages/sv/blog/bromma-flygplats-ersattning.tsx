import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Plane, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BrommaAirportPage() {
  return (
    <LayoutSv>
      <SEO
        title="Bromma Flygplats (BMA) — ersättning för försenat flyg"
        description="Försenad från Stockholm Bromma? Oavsett om du flög med BRA eller Brussels Airlines kan du ha rätt till ersättning. Läs mer här."
        url="https://problemlot.com/sv/blog/bromma-flygplats-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Svenska Flygplatser
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 4 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Kaos på Bromma? Dina rättigheter som passagerare
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Bromma är smidigt när det funkar, men sårbart för väder och vind. Här är vad som gäller när ditt flyg från cityflygplatsen blir stående.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
            Flög du med BRA eller Brussels Airlines?
          </h3>
          <p className="text-green-800 dark:text-green-200 mb-4">
            Båda är EU-bolag och måste följa reglerna till punkt och pricka.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=bromma-airport" target="_blank" rel="nofollow noreferrer noopener">
              Kolla din ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Inrikesflyg ger också pengar</h2>
          <p>
            Många tror att man bara får ersättning för utlandsresor. Fel!
            <br />
            Om du flyger <strong>Bromma–Malmö</strong> eller <strong>Bromma–Göteborg</strong> och blir mer än 3 timmar sen, har du rätt till <strong>250 € (ca 2 800 kr)</strong>.
          </p>
          <p>
            Detta gäller ofta mer än vad själva biljetten kostade!
          </p>

          <h2>BRA (Braathens) och tekniska fel</h2>
          <p>
            BRA drabbas ibland av tekniska problem på sina propellerplan. Kom ihåg: <strong>Tekniska fel är INTE en extraordinär omständighet.</strong> Det ligger inom flygbolagets kontroll och ansvar att underhålla sina plan. Du ska ha ersättning.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Building className="w-12 h-12 mx-auto text-green-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Kräv dina 250 €</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Låt inte flygbolaget behålla dina pengar. Det är enkelt att söka.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=bromma-airport" target="_blank" rel="nofollow noreferrer noopener">
              Beräkna ersättning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
