import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, CloudLightning, ShieldAlert, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExtraordinaryCircumstancesPage() {
  return (
    <LayoutSv>
      <SEO
        title="Extraordinära omständigheter — när slipper flygbolaget betala?"
        description="Skyller flygbolaget på vädret eller tekniskt fel? Lär dig vad som verkligen räknas som extraordinära omständigheter enligt EU-domstolen."
        url="https://problemlot.com/sv/blog/extraordinara-omstandigheter-sverige"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">
              Expertkunskap
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 7 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Extraordinära omständigheter — sanningen bakom ursäkterna
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            "Dåligt väder". "Operativa problem". Flygbolagen har många namn för att slippa betala. Men EU-domstolen har varit tydlig. Här är listan.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 mb-2">
            Har du fått avslag p.g.a. "extraordinära omständigheter"?
          </h3>
          <p className="text-purple-800 dark:text-purple-200 mb-4">
            90% av gångerna ljuger de eller tolkar lagen fel. Vi granskar orsaken med våra flygdata.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=extraordinary" target="_blank" rel="nofollow noreferrer noopener">
              Överklaga beslutet gratis
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Vad är INTE extraordinärt? (Men de säger att det är)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="border border-red-200 bg-red-50 p-6 rounded-lg dark:bg-red-900/10 dark:border-red-800">
              <h3 className="text-lg font-bold text-red-700 flex items-center gap-2">
                <Wrench className="w-5 h-5" /> Tekniska fel
              </h3>
              <p className="text-sm mt-2">
                En sliten del som går sönder är del av den dagliga driften. Flygbolaget ska underhålla planen. Det är DERAS ansvar.
              </p>
            </div>
            
            <div className="border border-red-200 bg-red-50 p-6 rounded-lg dark:bg-red-900/10 dark:border-red-800">
              <h3 className="text-lg font-bold text-red-700 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5" /> Personalbrist / Sjukdom
              </h3>
              <p className="text-sm mt-2">
                Om piloten är sjuk måste flygbolaget ha en reserv. Dålig planering är inte force majeure.
              </p>
            </div>
          </div>

          <h2>Vad ÄR faktiskt extraordinärt?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Väderkaos:</strong> När flygplatsen stänger eller ALLA flyg ställs in (t.ex. askmoln, orkan). Inte bara lite regn eller dimma.</li>
            <li><strong>Flygledarstrejk (ATC):</strong> Om tornet strejkar kan ingen flyga. Detta är utom flygbolagets kontroll.</li>
            <li><strong>Medicinsk nödlandning:</strong> Om en passagerare blir sjuk ombord.</li>
            <li><strong>Krig eller politisk instabilitet:</strong> Uppenbara skäl.</li>
            <li><strong>Fågelkollision (Bird strike):</strong> Räknas oftast som extraordinärt.</li>
          </ul>

          <h2>Gråzoner</h2>
          <p>
            <strong>Strejk hos flygbolaget (SAS-pilotstrejk)?</strong><br />
            Nej! EU-domstolen har slagit fast att intern strejk ligger inom bolagets kontroll (löneförhandlingar). Du SKA ha ersättning.
          </p>
          <p>
            <strong>Följdförseningar (Knock-on effect)?</strong><br />
            Om flyget innan var försenat p.g.a. väder, men ditt flyg påverkas 5 timmar senare? Ofta inte giltigt. De måste ha reservplaner.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <CloudLightning className="w-12 h-12 mx-auto text-purple-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Låt oss syna deras bluff</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Vi kollar väderrapporter och flygdata för den exakta tidpunkten. Vi vet om de talar sanning.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=extraordinary" target="_blank" rel="nofollow noreferrer noopener">
              Starta utredning
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
