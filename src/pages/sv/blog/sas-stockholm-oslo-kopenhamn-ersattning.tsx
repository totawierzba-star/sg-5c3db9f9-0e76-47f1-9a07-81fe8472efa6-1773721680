import React from "react";
import { LayoutSv } from "@/components/LayoutSv";
import { SEO } from "@/components/SEO";
import Link from "next/link";
import { ArrowRight, Map, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SasScandinaviaPage() {
  return (
    <LayoutSv>
      <SEO
        title="Ersättning för SAS Stockholm–Oslo eller Stockholm–Köpenhamn — inrikes Skandinavien"
        description="Pendlare i Skandinavien drabbas ofta av SAS-förseningar. Se dina rättigheter på rutterna mellan de nordiska huvudstäderna."
        url="https://problemlot.com/sv/blog/sas-stockholm-oslo-kopenhamn-ersattning"
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/sv/blog" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 flex items-center mb-4 transition-colors">
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Tillbaka till bloggen
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              SAS Rutter
            </span>
            <span className="text-gray-500 text-sm">6 mars 2025</span>
            <span className="text-gray-500 text-sm">• 5 min läsning</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
            Förseningar i "Gyllene Triangeln": Stockholm, Oslo, Köpenhamn
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
            Detta är SAS mest trafikerade linjer. För många affärsresenärer är punktlighet allt. Men när det inte fungerar, har du starka rättigheter.
          </p>
        </div>

        {/* CTA 1 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg">
          <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
            Pendlare?
          </h3>
          <p className="text-blue-800 dark:text-blue-200 mb-4">
            250 € per försenad resa. Det kan bli mycket pengar på ett år.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
            <a href="https://claimwinger.com/sv/forsenat-flyg?utm_source=lotproblem-sv&utm_medium=blog-cta-top&utm_campaign=sas-scandinavia" target="_blank" rel="nofollow noreferrer noopener">
              Kräv ersättning
            </a>
          </Button>
        </div>

        <div className="prose prose-lg max-w-none dark:prose-invert">
          <h2>Rättigheter inom Skandinavien</h2>
          <p>
            Avstånden mellan huvudstäderna är korta (under 1500 km).
            <br />
            <strong>Ersättning:</strong> 250 € (ca 2800 SEK/NOK/DKK).
            <br />
            <strong>Krav:</strong> Minst 3 timmars försening vid ankomst.
          </p>

          <h2>"Crew shortage" på sista flyget hem</h2>
          <p>
            Ett vanligt scenario: Du ska flyga hem från Oslo till Stockholm kl 21:00. Flyget ställs in p.g.a. "besättningsbrist" (vilotider).
            <br />
            Du får hotell och flyger hem nästa morgon.
            <br />
            <strong>Du har rätt till:</strong>
            1. Hotell + taxi + middag (Spara kvitton!).
            2. 250 € i kompensation för besväret.
          </p>

          <h2>EuroBonus och ersättning</h2>
          <p>
            Många på dessa rutter reser med poäng.
            <br />
            <strong>JA</strong>, du har rätt till samma kontantersättning (250 €) även om du betalat biljetten med EuroBonus-poäng. Låt inte SAS lura dig att tro något annat.
          </p>
        </div>

        {/* CTA 2 */}
        <div className="my-12 p-8 bg-gray-50 dark:bg-gray-800 rounded-xl text-center border border-gray-200 dark:border-gray-700 shadow-sm">
          <Map className="w-12 h-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Problem på nordiska linjer?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg mx-auto">
            Även korta resor ger rätt till ersättning. Vi hjälper dig.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8" asChild>
            <a href="https://claimwinger.com/sv?utm_source=lotproblem-sv&utm_medium=blog-cta-mid&utm_campaign=sas-scandinavia" target="_blank" rel="nofollow noreferrer noopener">
              Få 250 €
            </a>
          </Button>
        </div>
      </article>
    </LayoutSv>
  );
}
